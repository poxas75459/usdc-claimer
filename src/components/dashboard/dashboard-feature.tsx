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
    "4NMBb5ujDSkBEEfsfMh1hSwqUamRxfje7mjU9pwYBDKtyHVo8MSFEGcB98e6rTNHcNqYuooiedxJK7oPeA7eq46g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DL7YG8Tfxc2D2uKS6jbjC43uD4gFi9HWVExPCSA43G1FZGjLZ3rGh4MWFu7ZF1KzsH8AHzFGiZTJf4RgJtB946z",
  "key1": "5Q1YjvB2gzUmQWcbyjj5qmRSaG9QmJoDC7P5HS1pDZWTFFnByRT9s7qp3W7UewdcPknt48dHNHFDkG5fYjYAFGdj",
  "key2": "2Nip4FRoTAkzHdjzXDZEhyRxUpQzCzUEQLcTtK8w6M4MouAmjCsCiCsCqop1rCDZpqBfNHJz8Jsa11ESHRoiJYHA",
  "key3": "2yZwSBuozQuDUHwHasZaVMynH2ZSzxV5m5avUz7HEqkehR4LSFRkN759RWq13JsDAbMtVSP2bowTVq1tUQEshG21",
  "key4": "3E6E4iqQJ8L9TEgwwhQT9j2W9CBfHTkP98zWNqEDzJ3Y6pgjkakPjmncrEFnEvMHJgd5ozmFJdXLnvNY7G2ymbxN",
  "key5": "4Pkzgu7S3ic1v7kyktraTUtXDkCvB18T34PgCzmGqbgnvnr3XYsPZrioeExMHBpaCprczhZmmjz6j8rMTRRpXndH",
  "key6": "5uChbMDdHcmearz9Ng4BHmUmXJCGuKUYixEALUa8THVSNJhZ7cPciSPx1k3osxqP2FD2DT9ZJ7WSapdAJXDwn95R",
  "key7": "4Gch866z4C265eRpknTzzvtyWZYbisocyuujLR41RKNU1BhZRgk8rPbALS2f1kLjPkMtshHgzJmtGT6TJuye6ZDn",
  "key8": "nJ6Btz95FQLyns3HeEwQy32E4vwPwXeNRQdLcXAG6vXPnwuwW7bVRXs47RHLSNTpFcxZCAPVDvhj7UU4cuaEXpc",
  "key9": "3tAW3dZdQ4NYPXziwrn89yAqjQFgAUQf2CmYVpkvVmsKJBShxN5XQYQWcxMxVa6rkAVwS2Kdhk6YvxHXuunKBvx6",
  "key10": "4V2w3ha7VbX1EbQhgvPd7hSwWDcCB1GXmfuxopYejxzpgFj9nnNSz9LNujy9ABDYwgVpbvMP4UWVswT66FF21rDd",
  "key11": "5zdsvpFY7f1eX4gbGNQBey8EjXatLxshBPoJ3Ch4zS6kZcF5VN7y6wqFwoxUPwNjK2V9kYEocuFFUoM965b64dvp",
  "key12": "3cae9GvoZGnEwj5XCVRPCCN3CaCCuAYNFpKawpZECKEZwgVXjYsi1Y3mcaD77u1Ke8dYo5RFHnPZ42Z3G2zpQb2A",
  "key13": "4fCa7r5zozQ5Fa2Xh5d4rCCrusFqfqCaj81iaS1nRXvGDMzFT9PABbBxQvEf4C6VWMhqqjKo9UAwtLEK5xq2UmDj",
  "key14": "4VU7Ewb89FufQMKuWuYbihmSrjBTfdNuDSXRsttLDhdGA75yges9uw7cKA2cxRTPFossDwuUtHLjMrc29E5pYcth",
  "key15": "3qT5eyMu12Lvsk7amRXUmKK6Sk65FgVm8uYrFNipXTeypdEBc1UQgtZa1uY7NcRuSnrs7uh96HX5KodiLiPywhhG",
  "key16": "cbrdNz66GMP1ycpqinFwzzLCz59vohBzsp6QGnW9ueBwGkfHSdAAgkMJnuYDUrD6NgTSgn8Pi5Fo9khPND2znqT",
  "key17": "2nAvVvtMZKLSBovYd4h27RKZ2yN9E6gE9F4uyXg7rafgMFUm2ziAqSmga2VC2Wb8QmEWfiGsV7cKTQLYM7yt2HBV",
  "key18": "22QxMvndtf8gVnU2QJe3oWVbh2xEYLHxd8EmeEh1wX9onDwX3vKwDeX8VWo5Ps3x1VhFyKnmPhm3qjEcc5aLA6pB",
  "key19": "4JWQNBnuDAbdzBRnsQDcyAJxjpL8CR2cqVxxFvZDB96gnbK7YNvhthHe3NFEbJw3m5oH4eUPqZ1hc7VKR8ebGZrH",
  "key20": "32Ro4Jj3c9QrfK1afm47gnQT53bp9MCP1sVbbuCoym67LCULobuALAeSHt3hLj7F7gmabzazeJvTpYeCNEP7VA31",
  "key21": "3qGy4ZXo3gfm4qpLm4Gk18VxNCWuNcHXd8hAUdkW3S1KQsEkHdxAxhUmT7uyPZL3AyPYFU5NX6h9MdSi3JSia3dU",
  "key22": "46BoChbpzY5Zai33sWtA11Tmv4FTpp1Eq9pARoyeeGGk2rXfgR4vpbKo7YVMkGRrTym9HN7fVGeHhGQcABje1uKG",
  "key23": "4iJEDM4t1iyAg75wN4ryM2nA7HK7b6H2G2nhBh1ViZU9EqrgkhXMizLoztVUSei8REUtjrm1L1hVuGrvob1J8FXK",
  "key24": "5tCuUuQo7AVt2JMHkw31Wvb4t9cBTSYvczYgsCRBCNEi1AtrP2zL1eaTY8iBtZBDwibUn5aapNwgh7aQrAxeXq3V",
  "key25": "4AfnF3Kxt9rjSHEhbaGDixNQxgwTTxq7WSYVeNZpjmKFJRNuRkvcGNp7hhWfAdVVoyL3XPrSU48niVPz9K9NN71v",
  "key26": "vS3wQ4QHbriv8gtTpZsJ36wqSEu3pbYz7JqbWAV8GRws5GVDCZJCes97ciMFnrB6UxwYvoaC1Hai5bBcfDHdpZ6",
  "key27": "3GHQZMNB4nWqyGmjuxC2yrak3qFVHxwViiXifXbvtKZRX9QaFgEt2hwkyM2ypgjR1dNhLMyQUGu7tzjcku7SP5Fw",
  "key28": "4Qvta2ugC1qh1X2ons1hkLVTTma3X2NU8qUy9RAGc3XjdV6rXAnk9Tqq8eRXPSKpZWrh6DargmotURqhR7VX7dFv"
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
