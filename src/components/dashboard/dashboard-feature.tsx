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
    "NfkrwwauzLvFFQBZgA2hohWdxfoQVq9S8wfLsJqBR1BH36qfUaGLXJZE2Sdc4SZeRp28byziJozMaRqHDK6Rg2N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJag1TnKtWodreHop5Hex7apVNFwdxZ3JaLM2bQKCnuLxTtm4jjkBdEUQWHNJNJLBL1cysQuqYv4SrBGsixtC3W",
  "key1": "27HoBA7vVgtda9axmX2Ymmk2qNnzARwfQ2oZForSMwDxr5brf73yWRp8EffrRk2c4yFW9eniYNAma3Ap4fD6ttKs",
  "key2": "2NoVzUo18iTEnSidmpdtTYYiefQAvLLiLWrbwSmSLPdCPPuFumbjPW1nmU85XeRzuAdBvCEnYsrbwAtd9AiSb2RY",
  "key3": "4e7RdkdbzTgrGQ2tbfdC7GsipBsktwbq6EPPbioFSRd9MkTDmohmk1biCEnXdXGFDR1p3XtiwKSsAwKkTSVuXqCD",
  "key4": "28ZVkFMknz6Fn8DMkg2PMwS7VxoUtNhCBw2esvwC5myK4o7HdTbozp17cPK755KYcBVA2QWxZru3JPTrfPPn55Zq",
  "key5": "3fPxikb8TyC5yfiXCR8QnupmduiwmEwru2Xyz6n5vkYMM3HabhsyELxJXere74dU83HrtCqFa3KazPWRtUBiRtqP",
  "key6": "5H5QL6q537GJDZSsAsoE8fUss9HuBQH3WgdLbw3QyJq9YfQr6NY7TaLNMyd3cgQypqweVN7yVrWotKLAjxSAajVR",
  "key7": "3q7gsgHzREEDK11SrQbffo7NwSWo1PEp7NXzeuQFukHj4pgq3pKcrKrchu3tLYdGNoMEwDdByyiTDpr48UQNhPs8",
  "key8": "447yKzuGzGw441Qw4W4Niq67J8hd9bJoUu7AMYEfbS7sNSA4SjwnEhMbyciRo6R8dmQg4DMqwLTdFCBmkmjSad3V",
  "key9": "5h1ExQZn1Y7vsSox7hw71r9fjnrvbd9n8tHswarswdKpyAdZdwUZTZW9UbdXx3t5D8Kbw2PW2CR6rKjh1NBfR6Kj",
  "key10": "25CfE1tf47HiG4paktwgaRNUMBLkP4LqXCi6EBB62LDNsg6m8ej3c9FkqLhgk3wZjuQu5FdcrLXekbtwnWiygUtU",
  "key11": "4wEG55zCqs2WA8c3iXZXZyj5gQe1VrufggKYo6mWtfhBbPpiwwK8wuR4y78TVCsYBm8qoTV6aootJST8i77VpbDX",
  "key12": "io53nuBSYCpaaEp51iGBnN3SXfUao9Cm3Fbs4tpANG7bS4tWPCdbbNpz876tpJoD6nWK8Jgnt72KExw5NAUpSfF",
  "key13": "5FSFvaVxqwEGRBChT6m1GeofgpqRUDdKFpe96p7TwfjFkv7GoDmSVi4EJoS1drE6gp1mGGSLSZ8XifyySSyQMKtV",
  "key14": "4LvWXEiw8x7a5z8omEyYDPsz7gUZ2DYVy64kUKNJryDBkMrBRY8M7JAepBbMDYZi3VzzFu1b39HeFhuunHRkCzU4",
  "key15": "64zDyeBTBm4pMT1cSpfQLvVHxpeKoNHj8KHPWjdH9r793ngcKFBt4TEkXS12qiADo4keYoSMrUyDJ4mf9J9xzN5k",
  "key16": "45wtC3iQNxS33yc7MgdatKvuNL5W5vkFfruoiEEZx4DEi1xvEFto4aEbmYU5wYc37bmG71PeKA1fxg2h6KUaWVc3",
  "key17": "56WtVZqkmuUSn4CeansBpV3C12ZKeW7LUb1ivYfYqTsUMxgV2RsiQomy4AiVCE5o6QrtSi7mvKMbAZCMyQSiYQBm",
  "key18": "4gW4UzdxwzkjCct8F1oRgjHCbFd5NimgGyPD9BRAosM8xpjdehBSwUfSiRtVop7ZiMjr8qVo7zaeY3wvgpgW5sQe",
  "key19": "2mGBCRAGyNys6c2jN5UzHGzR1oHQUsE7HQsLfq5Fov5eJh1ytCVTvhJ6yxrx128rQVUV6pHWa8zipJoWdMfnW5BK",
  "key20": "26mFstgLny7S83aZavoxbzkupgTJpetY3Rh6FftMap2s1Bxoeu1691faMr8XkqVtX8apdyxo9Cb9xJ3YRYatcz7r",
  "key21": "5YTFrsHun5G5m8sUFFpBd3Qe2uK4Q9aoWSEtxyCFE6HFDzwMfdhcmSmziCEyu36hNGrveuTbr2aZfoU56LdkJEak",
  "key22": "3qX8Ksx1iyvhqkysw7RMfv81GJ4jLaVdKYpmVW4PK4SfeZrq1myGyYotyYKEa7v2yQhrovqspqrnjdWMAgmVWv56",
  "key23": "2zjsraCK9UqPcyc9y5JXL2a6TRJVLoszpCMdTdRrNdZxadMkCdkF4FDnUqpjK6J7Q6o733paLF3zmMcRwNKtWcNw",
  "key24": "4PpR43DSaq86xwoFqVRezxZFanBKiDw8BYz1KdwY3a2BadEzAaNSXvqVGUSqefQEq9iLjochzL9tbvhKYzVe1gnW",
  "key25": "23QBQod9AwLTsQSk9uMZjBjDGxfqcfnHX3pMgo1x5veDnc8xscbqmQSB6NP1qbkLj27m81m3wojESBxNnwQPTLoh",
  "key26": "3EUM54W319Y5Am3HyBx5spjXdM3hDkw3zz9fpCdZegri3AyBbhX62WWXDSUdYkwDTWEvCEK9z9GqmJMxvJ4CsDUC",
  "key27": "5Q6TGD8CVzKHcFte5dKQou1yqmh4mjXzG1WChtQNcR9QSkV1L15a93MA2L8sSZP1ixCQGbkfeMt4zusQeMrdvnZn",
  "key28": "Sr8aahxA172GkZueuNVRHLLPCQqK8pRhkmW6d4eisRpQ6tsezd6ixdDhxirMWw43DhA3KpmxzuzDR49askVJxYj",
  "key29": "5Y71U4hBtSoeZo2bnCbQe2aRLmeXAN8ZLht67tsRVyreq1xhEhvJDDEpwLhpYDEUAH91tXsPWiCJLtzzvnDm9xed",
  "key30": "2JW5iDzs17rskPSYqqsEtFZrGmT5cUJxNVY1n1WMhsPw1Eh1khfQ2uRyPyYNyKgzvmkXk5bNCVY3D2AkDscC8f3t",
  "key31": "5m7NHgctKojE7uoy6oUXFLLGkNC3XpdxNkT6hTpnGAsq1dhgHz3bRDKWEWTPfpMoSU4xPC4rwiaySuBTN5kG4jan"
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
