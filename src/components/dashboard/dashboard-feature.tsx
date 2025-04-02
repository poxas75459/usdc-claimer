/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "nFQAYyjiipSYQDYPv4LwfmyJunnCqfg3gtEmUkteoDn2SxT1mYWTXBEfuhDATgAHWmz9Li3fJzm2Zcfqf6TycDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Czv1HNJeuuQq8GcCyer2CdxBSEuEwe8SqKzxw1ZmipF7m7HWyR7UXT7bmzEXUky4xY6dW194snadQNHQveEvGSV",
  "key1": "5vy64foR2ff6sVgk1tSQgJV4TnvDJEFWAfQYMNJWJx1ys8f27cGY8KrrYnZVHpvnM8VzWSUDZ2pS2KMGkqYGt1x7",
  "key2": "4keZ8HvwnCmtphPFCPWnbf49MRCV2mkGBg5wMb3aebP9Rw3aEMric4gbsnm3i44yZ4BbMtRBjL6iaVQmbaQEZSpw",
  "key3": "2Di79NPrULsSVFwfc3c9JNLLcKDxRq2GobzkYUJuLdbxu224nECW9j2SjuF9KSVjCf5ZfWFFxtaNSnpsaDe6Si1H",
  "key4": "3AWepsSXzP6zwj1RhhgN5TGjD6wamxR4Me8pV4Ti8k6ce49kPrksF8a5iaeVL2yPKDTKZGAcdtfUVgYeDLGWGcwd",
  "key5": "5ssBNTzPsQHD33LeSASCUACz11MUMzGx4EGHadoCHWgADJY6PTFPKpdDYTte91X8aCNwwWJJHQX1BC1m9AXjAD5J",
  "key6": "2H84YAC4HJyp93FqAgoMYJzHs9Z9QoMibJscqtC8eTPQqUMNfheDYQcmXYh7cakQh6Wx6iMXMPnTf4HvbSVAJv2g",
  "key7": "54v7fFnMu24QMuhzhGqLwFuESx8xYE3ToXgvZUdc1QxaKbTGp8EzFdu5Ros1ggyTrigoPCKr41XdXkj2RUSTbjYu",
  "key8": "DKsdeRgxTLSrzFE1tBhqQKt8jJhFLiofZEJak1GJxXG7t1JuyTjB7D8HBvGXwvctpqjFqcsLZfXbMa4vJwt5uKv",
  "key9": "67NHGfitcsooZPT1caww35wWzTLarBRjcfBjgxDd71uSpc6spZqK4NxYbYKAofJRCE6Fr3ZiXCqgJeWJ3onFzmpx",
  "key10": "49xerBUBxMNfcjwXfL5yZDeedrMUd6YKesrRRMPZ1PBSo8NSdzyDSvXm1ReJJvV4PfPzZATJxp3LFPM8pE27wAQL",
  "key11": "3s2ckh96s4qvby7PNzuhCuHC2KktdazNwPZ1tdDmgvwd5NKD5zLf6daWu2xukYuiC5DBNaMpvYN8VspUbNx49ygm",
  "key12": "3d96dpBX12mcYV5yJ4JCSLHZfU3C72J6B8YdWE24iLqHGDkJRAGHsZbRPzHBVFEQm6vzGH24qweSUTpFmxA2MCV7",
  "key13": "4KCeb5zMGFooTckSn7dWGfXnWmkJu1StEe9WXY1iwMnhyeJqoBnbodXLEKFBSRaksuxJAThEeLQe6KgSkQwApB8m",
  "key14": "2WPQV4SoJagFaH4F51XsdkAVRzKoZAStuT36cMHFjixGzKK4g9H6jht22wY79N4cNb6Bfk5tMQ8KVWFwktPMke1Q",
  "key15": "2BPd48CGGSgpJdeRTaPvjyHjTdUxohFH5iKMjM2ioMwXRUNi1vD3gwmecddKm2geu6JUHgY5KANFsguQwsKvq2yq",
  "key16": "3W3KG5D3noTUZucKd1XNmGSsrQm15MW2PznyJpq2GRx628qKbofpwqErXffZ2HUtb34tJx2Pah9TCsxZpoNTKZkK",
  "key17": "2N5Fss7zs7iC2hkLHfkbU3GDpLG5ocHgdHzWKqtDDE61nTTYaN3EhuSyF7hxpT8hFexqQkFUa1726rK2BTDYVrYu",
  "key18": "3dk1FA9byS79bwdcAiUaKxboWJr8amt5FXoK7APnc9DRrGUv5iGZVJij1eGxbXi47v2S4ghR683L28Seyr5uCqCN",
  "key19": "4LjiyQbKZLubochXoqg2LgMh2rwZwtwfFxiRpC6kzUkUjge9Nxp9ZZCMWf4k9ewHmN5VSJSgvwDMKAbkrhAPwH6d",
  "key20": "dV4bg7fuq2FyFL89ZwZ8xVPkvSqftH4WySX6RpGru8nSpsx4Gt2m8csLu8pByH2rWp4rGNVkTh1RTwTmCDv5mRy",
  "key21": "2tc4P5xAPy5KjJZbKAyvuinJraAwyqMFuHNnSxqA12SnhPgonxeZemFi3i9H2nVBgCpLdwXDpZxEkdPbCaQ96ood",
  "key22": "47uznWHrjFT6MV8Cx6z7wDSfpaFDZXZDQYWk5yp21a1NBFDHdrMsFaCJUo8vJyoEPw1wui3ntf9p7xeTEbZJE6wh",
  "key23": "3pZzaxXSXzEEJKXwW62fzgpPHFhAJwrZ1ANYRNteRPq4fPS1dQnoom9NuQaJfXTtRx3Ubo9TucU9nan4veTXybVf",
  "key24": "21L2JV5o53ybDthsPfkzvb1is31g8pPUGsrsh1MgNsJqMJp4UkRBm1LPwn3X4bDSEzeN6eGaMaADuMJueh5JN7XP",
  "key25": "2kBq3WeWcJ8y2tQ2PS3Gi4UiDvLTyfsXeTSNgE71KnRi73NTJn7npd54Vew5Cdo7qTye1ecZe6xyNPmDEW3gB28H"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
