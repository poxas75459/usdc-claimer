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
    "3m3iimYY9nDD8XGfDwuBM4tADpuw5UVbK7Z9SfeH1GGre8GGrxMyvUYHMSbaSBHPfB3VNX9mUN7oxHLPADyoFWUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BLdJ5XJkMzvzFNg17mux33CdTSNFWKQPpCHs7gHShMxGdTxTj2QWeWjHMphwHxGRfxfx9tFDx9jh1iGba2xWasf",
  "key1": "4a7aDeGXBFT1CEeArUkkDxZ1N639ZRPXqYR4ETMZXLFmJzQDKbViZFDayaeSPKm9quYG1JJtwhKHv8ev6gA2A27C",
  "key2": "4nkadxLYFxLnEBjeS86V1Xa6HWGwqc5emdxzcfhXZM6BJraiY95vFVM7xKYad6NLvNACptJEsjd2KMfFhjSMeYVy",
  "key3": "if2YakKTK68x7hB2yYef5D9uctXAYVdPDPY2iJq4iXuvMxfMPSPLUd91kyHH8zfm9fmYH5PYsR1Ga48ckau4eUM",
  "key4": "3szYdHsy4yHPM1R6ievzoqWPVd6tPAeRr6JKcbnwG1BTQZ8CJpcTxF7m61TyuoMSrW69EPeY7W9DqYs39NsZc4hd",
  "key5": "4wegSpRZfWNxPHFpTM8mt93VJU42o4JgpG4M9XddirgMECcYSeTLx4G8uh2BD5ihLwQEqFuj3Cqqpt8NwF4VxcZh",
  "key6": "36fL7SgR9LkfcsfAALd3nZPbpF8gqjm3JZJUVKDGpRCN9w1YZXfTw7ZQ9tKjyWp2TeBsnBqbDsbFoy6KBhcCHNRP",
  "key7": "2mrY7PFecfgrpTg7PiYnFKmb5TMU9p3vtoWveJYFGHswLJT2qRyPGq13shRfnCNY2bD8Fjvv1ZUKR671o8LcGKZg",
  "key8": "66bvywQGNEXrG2J9UQRnoTRGaAb4FThTT9mh2K3ZJm1pTKtN7TNGg1yVqSmAwYjGUFQvXeVWNTqdmnjLQCcJFE5p",
  "key9": "45xi2F5aVtsNMyBZN6ff3igi6J9hUQqkEsq5TR6QAjdppULMVi6pfV1nsnti97dLvThfkLd6pcTofyWea5J7uVMo",
  "key10": "62PtENgFfqccZuidH6c3AHGfCvMrZdppgq5s1ZyV3rBrw7VS9fQDssmoSP3BWeTEPsGruhhiVivvSAvCuyKXhrA7",
  "key11": "GC8EicJP1RUZ6zZ41wru4kk7yFwGXa7WYRVyzokjittf2kh7vL7XLXK2fncMeymqouq4h8eHXYjKtAVEG2guMSq",
  "key12": "2EE7MwaUodDEB9KyG5xvmnk2tkZbCGeZtxp6yaUvCSfwcfBw3gb5kZ2RR5WtbP2Ne2T7TvGFogudKk4GhfBo83A9",
  "key13": "3unLz48zTkrHRuMQ1sMkmH1xtrgKQ6va1qcp68aESgphWRNTMX9YiAkE3tZtqDuE5YyuaNxdQHuMzUhY58mcCNMw",
  "key14": "3K5yVECwM7W49e7qyizgsHwG7xcv3yiEpDgFGZCaEAbCWwLqJyr5FvMenJqenmuTCh1knxTnFx2DLRxFfix3MWsK",
  "key15": "44mYpqejdqKTgzkomxS85pBi1ewaHe7Cw7CWhAfJ3dUHEpmfDiVJ7wUHgaXvnkTZiZBArVdy7bWw7DTbFhgSRTCA",
  "key16": "NUnfLJe9fkeLzZ4dXa1QeQn9RnYuP4htRKwabvq9YKAT96EqbpUzP7TVCGan4cBc3gbg61UusMRYCsAUiadMfqM",
  "key17": "zKhknEGrNBkLSjQoP5LgmHBfGvF3HAg2TLG1D7DyZ6d2SKt2gJvxf67jSAd51XLMR4V1ewHsAFd1gs71uRTw6Ko",
  "key18": "46ggiYkgoKoCpooNNhTJ5MnsSsEXD8FRsd69fwobLketV472LZMj3beJ6MHaKd6VYPghcHMGxPw5vRb9KAMysq89",
  "key19": "32Nqht78WoninwjwTnDCLsrskjUMPS2J5wg51L6K1qTm5MhkAhb4NR9o1viSgsdTkKQV7GfnSmMuL7F8EpReaFsP",
  "key20": "2UkXwwK7e28txDtvQtsVViAjdexnYpoQTLJEfoBRiNPVuBmS6KH14wPimffykvqeKFfDg8258mncNqXjEWNQGGmu",
  "key21": "253gRz8JpSnjVUKnUAW1Q142JyKyZbsNekMJTLrK1wuNUKAyyg1Q7x88AYfeGreMJ8Jv4r4F48ZS4RThszNQ83Wj",
  "key22": "4SZztGJWpw71jT63tY3gjk3JTPh79hYEEXmovwjBQAjP27T2Fqh4Mih6UtcaxBXJ46vGuos89PWh3cgi9iZnj9Zx",
  "key23": "HTZ2EVNHPqp98YNiT5XsX4paX26xKErkN5i57nZD6evrDpjtRw6Rh7YjZeavHyDJvjMBVP7b9XxwVxSqKqhctv3",
  "key24": "4ZAy2VctCJNysWsTZiMVdrwocFqj72JvbiptQyftqXNyFvMyDw5diQAGwjRN5vMuFiqXzRMbNU8o474b52EYX6sM",
  "key25": "2CdnGXdfYdsypyuhYYawb3i2Zzc6QqGrXCZLhgURykWrkMhkyF1T9WUnbXoLz2uVCK9VNJbWdPAA6oMnFJKXPGUh",
  "key26": "3vzjESzMP3ccrG1rDqLBiECtPVvnewbP4dE3FVU1y1vw1hsjBpsTUiPe51YTXxZGMJWzVyJw7p9AW72gvsgWDVnJ",
  "key27": "2R4ynrkXrVsxuvonnbh1FnuRL9DaU4MCASi3Fi5wj2mQB3wubXpnrnfTRX8vyyCuY7jhTcDoKPYPXFMzsPvGQt8B"
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
