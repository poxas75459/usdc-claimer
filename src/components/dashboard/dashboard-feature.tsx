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
    "3v21wwN1AanD77AHrtPPCcsFPyvpaSX8xKnVZdQBV83FQKyfE7WLneGVuVzUgTdCAU3714kV9nAhVJKJMw51vtWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29GgSuC91MondEWaUHTn4VksffXaoAkbeWksLkddDPdG2UpaoPCTGVyc68rxKynaGe8TFBrURhBGbdFWWYMeNmns",
  "key1": "3yKQHdD2D9giDG8f3F3G5LyKJryopHD35W931Zt1C4Bfi3rCU8fYqWongyPB2p2ppHNdF73Z8ZfD9BqtcQWHPwJt",
  "key2": "JUKLk6K2ExmLog5PafrMvALKhQAtTXvAfTpL2hrerscX6LufFDHpx1f3WSPTMhXkYLHM7oF27AgHVxoYBT5BavY",
  "key3": "pALYryDkxagPEAKmbV3eBaWt8aRN2YjtLNdxQtjvj3TVWDPiuBehsZtoJRAcLvKkM9reKdH2UcMMWCuxYPiM3im",
  "key4": "ZVGSrSBNS5XvHRwBHUoaE4x6bJtyeUjUq1yNwdCQmGyvXUBiHiDFqjv8eECaW6yzQvHYhRvg3XPaKYRT5wTM31F",
  "key5": "7ChgUezdNeWCKx19c9NUB7uCR1CsWD2A4C7hGKL7y1Lfja3294Q9cgfXWnAZnv5DJRcgrweFbRqN5mchy1DTT71",
  "key6": "4JQwcf8k7yTaNdPWuaG24bPb7fG6RiXbaT1HSEDQpisVmgT5CsNZ4qqb6D4YnYTbYrmK8LUUwJAdqZHoWRmnAHsk",
  "key7": "424hNHPsknMkFx13MXMwwroHexxPSPWfCUpdFsn57GqhdvjC5ALAES9muUjCq1pd2ghrC3C88etqtuKJVpDpJ87U",
  "key8": "49AiV1YvaN5QnWwXHKRRf3nWaXq7AbJBxMond7YWZHaz4J6SVF9zyZuWRQYdkapqctwB9b8wVeW8WZR1AmpQ1dR8",
  "key9": "2np8QdwGpoqgWTVwbrEsSnJq77XPP9mpSGT2wykmtBg3hJgPQ3xfNefrTRedmeiLXGH99CcyMSbwMBrAKbLEULxh",
  "key10": "2EUUZYHu94S265gSe2NnU2cXfctyir86i6wxp4cLZs6hURpaDA4ViCfxuXTnJAwwY6jNPMy8wAEr47v9ApGxsJM5",
  "key11": "2yaVyDZKWED7pBxd3ewowag7hryDApXFeiwGu6WovXvxFv2usDupT3f6EFS56KFVHR9DFHi2vUcwv3BdrB34hweK",
  "key12": "4AiFKYkorXRsno35xGxDu9UXHycCsYzp8P8iqsve4GvL3V6mxHdnLKKoRKuiGXyKwNF5LjSmpo8DZQuGQhKRkWoc",
  "key13": "2xUJAeqvhjj1fkSZBYauSCWrWHBsRMv5akby2T38BugByk45R4aZr71ziLwZsqUGRd324UkXhjkkUvzWfJue5t5P",
  "key14": "5XT6JRDEUr2YogcyGJh8CYhRxi42MVPyj35VYQuPqfWCUR9RStHqaGESU9nFnLcrsNY1xd9SXoVJsEeS55zkkeF3",
  "key15": "2PQ1VfJJemgwrXvG8HtkULV1mhyfcagwoUNXgfqkfuGHtNPzb4Xcc7YpmnipitWxFdCqYSnp1zoEGCfQcKqauUzC",
  "key16": "3zNLc5FVRwqMft9trJbMabuGJo69ztAiGfuKkLP1mJhxaqg7gTXJFFxgN5h8ibKK4eVLitvtbKj4P6sAJgyfwceK",
  "key17": "4AATNgZHCmWHusfUbmnMfPKnnY18ZnNHs9FprGrXqZ9pHNeffi6u3mURf9b7rNW1AV5WDv9QF6HcW4ZBECfCsbQy",
  "key18": "3cuP6ZgwWq7Duxng68mkWUde6yBkJSgvBuTZMXQew83ZbZChmRP1KA75dD132DArLSDKCUnenxeMRFTiZC1bpEbf",
  "key19": "jRMk9zEWk2R56sXx24kYgfs8kkKztp23uC5JMLzZ8KPhR44gUcePdrrZArcwNSUfU2zcojvvd4Xobqhxoi8E72i",
  "key20": "EVeT17L2ssMzDrqaohM3AkA9VUHhMSxweLYaUXpikxiCsSModNDiYpptHA8NPWLbnrZKv6UQQWdPJyZG61AkYM1",
  "key21": "5QMRghPneoqiF4Z1Bo87AJxMU1kYD547eaS6pWELu1HmRBNLtt7JrxJHV37kNvbNPEacKMRCdwBFzdXS5jruZkQy",
  "key22": "53g8qCRfVApAkAYPnTm6GeoT7nKqC8VXw8pxwAdHm6sM78ji6zyQr1CmAnw5Ex71GvkQ5qoe7QSsvi9HHRDFoWfp",
  "key23": "28b5r5xWCHBKGXsD6yKtiKUcPafXhzRptv4TiRKfcq7qKi4tcX8zC7Qs9VEfJxMwxDoZ6nD5nt8UVNM2P4dN8tXm",
  "key24": "KudjeKy1VrZVMYbB2xkJW3ThSjN6UckmnJetxBs6ziJ7wMQvnfVzAB7cT3ofXi6WJ2HNEsUKnKDFpUGgZ9Ri2oB",
  "key25": "5oo3pJxnCCLsE4VQ3WT1vt6QA5zj64DC96riMV9JZEs3XRTkUtFu3qURn1Rn5dgjoWWEeKBPQyNFoEgupEP1cGne",
  "key26": "3NoS5BN9mKqC6pAVPUQ7WcvyKLkmWHNsS8zPNucChqM1gRVGCZ1cWKCheNitRW6sJWZwyN8Coz8J8EZCDGw7QkfJ"
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
