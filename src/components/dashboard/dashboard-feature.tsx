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
    "5nxKXF6Fkh75BJNTEp7mUpE4thZY2RahxcVKTWnuqCmfPzAo4jMju6byD6Neni1WiL6bgLbPLFVobSkMTaq94wkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3APoRWP4R58kAymyUXwdtsLQmi7ZfHMSGg8XrG8HoHYXUwsK2YpiHpwpTkcZwM3B59BAm7emR5sRGkL2hYp6ZM5s",
  "key1": "4kDEuNnhvDAeRf5de7BHhwSgdyBqqqfUXwFpEVToXZr3TLvvVCu9pXoeErpQ8RShHFdF77jWG4Qw61yEzGJqAwxZ",
  "key2": "mMxgk4HkX5iMGQk6F6DBZiRhumX17Z8bYBa7LUc1tZxzPbSca5sBCpWPWLpdj4JUBCqhfGwCq4eHT8mXyZzMsHf",
  "key3": "2gGDkZtUaKdK8gbMRvMFA5r3xrtGEGqNE9SfMgUHKPwkYX8PkUHXLt8YaLr8SmC1JdTSAJtorDc755jPhk9y9WWj",
  "key4": "5aRRobNyG27XKFsnoHdJXTcAEkR7gaqpfV7HptigURmi7GUZXCh5gnX6Pn8Gqeb3dBhst6qp7T4gw9iMmdQDCCYq",
  "key5": "45EY6peeYHtRgSxssgmN1mZNJrADAKbZ42YTZefqZUyNd766AKzQJ7dh27ANHbMveTom12sshLbDX19gepZPDV1w",
  "key6": "4pi5b23kPkgmSnwa7HH4d9RrJSUL4rTekuGMHb7JUQR6gjEv8KPqfdn2usnSFKguSh2Uo8zAeRaWByboC6rS8y4t",
  "key7": "4KTCwaaceWxTSddMdXQ8g3YY9jF85fonKwgff9d9nQ9grg6RmKg872RBTWYbSeYJwou64WMd4wAbc7i4DAYMfWpd",
  "key8": "3HzvPJ7qYTCPtYqqXfNaABMqgJUTyCJhxNAtpK1cyx7LrxmopugvbBPyZHFvBz7sNBTTTf3n67P1YaGxsibZNim5",
  "key9": "xLCzMSUtR4dx4PU8Ewgyxr5RrveQYq3jd2jwtbpqXYL7uLzFPhc9812aUfPUknKmhBf2YLjBczT58mh6w9Mh7YZ",
  "key10": "63QhNRe2qq6iwtCHFNmRhAZyYgvRhhfWpPKEMotRP6aJDbcVBvvFeQFQ94AwFruLaCYot45wGuYz82b94cy4j2aZ",
  "key11": "3S89CyZrBDQnANaavL9ZR1Z6GkRDELnKZQPDMCnwmsbdtoQCA1gxFyEHp2UuSKpyHSpFLLMd1fiqTRXYdfkXH2ed",
  "key12": "3tx3YRZCcK3UqhGXotDXaxqPp5QkR55rjpv3hzQX7h5Vbc4yz3Ev4GcwkRBv1E8CpdAZTJq7neo2iHrKFV3dZ5gr",
  "key13": "2HH1s1ptj8VdGGaSvPwa3PcsfzwzqVVrMNMZAy7kFevp7BhvfQJ4CJSP4mQKxmpodNuEyKkFXqmyWdSXbxhY54TQ",
  "key14": "5DH6tbZ5PkfxeikVYdNXJtmn3LdntJmJyE3WWvv24E1G7Gk3exL2Hi118s85JBvT2ZKVcyEiM7QpjhiAcgUmVhTh",
  "key15": "5rjE3U5juxQYKdcoVcMW61qMKNu31T5ZsyCJpvJNETLs6HB3sM6EsGFpDGJVtEjzmijLNsxFUUiVPyHW5t3BmQy6",
  "key16": "3Tytx5QgtspdadMtcA4NQbxZPXnLNGTPpqaTTDVcVq6N7BKaxwbqNFweCRqQqCjbGc56gAP2Qsjbvg751nzuF1FD",
  "key17": "2fcHSrG9YxFhqGBQBkQmNnbReWz1h4JFDFEPzkVXqGyYaBg9J1uTBLsxKHLkGLeLWaxKsSfA3KfUnDkLmb3K5ALb",
  "key18": "4nTPeY5Rb9AJhq8yNbX9qVn8ZsZpsYP9Y56SUp9duZCpmv5YayvkNg6fKZe1JpLvSvdnkfvqvy6ggmQoEzkzVRJj",
  "key19": "2PBVFAHGo4m9meWk7FsfiFgj46wwt8MPyB3N31TQqXgad9zH5ipEUVX9CcgkfYHdG4udSVtGHC2HY25qtmudkgKD",
  "key20": "KvVzM6bFrb7SBAfsxkxLqveugzyfTWyxmiCn6BLasfjAAbdSQzkvfvrP2PHAxKiciZSMPWZfQf9aFgXwq3xcmmd",
  "key21": "kH9B5Jn5EFp6Nz4LuJiA9mHurH2LQrCkV7qEVtD7ymiS8wCw84cNVEY5pWNV84mQLjh97gbYBcsFByupNCV6Nnw",
  "key22": "4pGx4tTB42po5aY6zWXE7dDDbNLxE6J3f6JDDpUNfmxUqm68UVRPNurYmvYUTDSpiYNHGniKgqJ8aEY3QksV36Uc",
  "key23": "2MJXGtPqMzwnrxjSLDW9jGY3ceYPChj9ovKAkD346AcyAE6aHcYBoy9qpM8NESxoCWUfZAZTcbKtpALNHvXGYyg9",
  "key24": "2heENh5XiZJyqyQyJoFme4t43RBTCBVagGTdZGtw1Td7t2bb2J3foDZyPxUCDVrPQtYMgzAzx9DZZkfAj9bQbn71",
  "key25": "2oe7QNvudsYxYbfzXpjZJAswcD5dwk72pXFe7jRer8To4GwuEuttqPnACKh6QXGesScKsWtepK4R5MqpYsayvdAx",
  "key26": "5yMyqjYkmsR2KvHfWbxjF79ZyLZrrFDbcgzAc9N5fRf9QCbUrm7CEjCZzYtfYshQoUGBUa6bPbcR1yBKKLMr6Nut",
  "key27": "64A7La6Xmuv9CAQbtTHtJ8KGVS7sWr1SPyrN29LyKCgJat9Qn4fLQ3G9DoaKH5PKAxDsdi8GjdxRDJT2Q1MaN9Tr",
  "key28": "MhVeevYrN7e3u7v1GZ1jRBFfAorgeEhsxbUHBvrsgcGpAp15gKmsiP5JyVNJJcXYTUTDvzGaBjKipNkMbPMp3t3",
  "key29": "5zJPFzpnN4XasbrzRvH1HAsNshits6L2rkHWHMfP71WHhjGSYZFPGUjUtQ6Qy4DjLrrT4vJtyqxHRTzaJbxJos8i",
  "key30": "Z2SCefvdXUXiRJT94PbLW65BsDDzPR6LMw59yohYbiSwT3Qx3b56uheDRiGhGuQJdSxwFhMQ5XDYWpvibBcnVx3",
  "key31": "3g5JiW6U6YeDCyNvQT1bTRGR2vqvmMRWCc3X9BQfYKZ1hSzFyTE236WpnNk5hxpSfpgaZdGpHcvWCVa7Rnfkt6rU",
  "key32": "4RkjfvDa9fwZrhjGYRDjVdzB7eZdFNNe4oiXywBHeaABGL6kdMTRhKVbXLxhcxiPWD42dCWAJf63RJ4A6nR6sJQ5",
  "key33": "4mjSXKCo7Zyjs42K6rq6waChPx2R6yLpx7wkqiNBfDet1enaksx2b9qAoCQBNhozR2E8fsfVMDKjUoRsgAMvX3Qw",
  "key34": "4Fs942FvGs7eUHndeHeJ8RNPCXsxyQ4g6dBFDXNoUjdGE45WxYC2Xkr2XK8xdPtD3HrwD233EnN6smrNMeXBJpes",
  "key35": "4hUGJT4axisnMLFDGMJFpsjiewvm4xqX2VtTdVopPsFEepGn3sQnT7jpEy23xzCYHV47hnQhueaRZQJPK9M95TX4",
  "key36": "T5Q21xpe1nNWZmm949xU9yGtgLUmBPMLFAnHHWeuL3Gr8gdfseer2dsBB99mYQ1NRqVL1PBxP7r8mmH89xNed35",
  "key37": "59HsAUqWYj4qk44cFwBw9nCk7L9PZsd37oEaASsFTXXhtgNFU3LRDcEzJvHVsJTyuCeBU3cd2ZXHx3ZHgHHfVn1t",
  "key38": "4vLvsTAtj6gTKPXHX8Bra6ojuDTxpmNbjozcX4emnRSB3gx87j8xAsesrpthjoeeWfGUr7ZJexV1sdWshEuUjnC",
  "key39": "46YDYBuH2togykk8y5PbLQtbFyXz3348LW4XhS5pYNhLNqNYas5fd9jrLz5hvDq8C628DK5s5Fzqa4X7gBgj2THE",
  "key40": "3dqpsx6PTSj8HsrazCggaDD7rk1NPrF52LRofH3gcdkBwzUcYyo52hFvAruUsNdHu9ZFRz6scRPNECGiFjCEApLm",
  "key41": "TGZ6gPKV5R32UgKXaNWe5T9UtZw9HJfbsCKu9VM3amcrcsfLS8CuV4jje2mmCv6SyrBD4nS9AYbDq9FusLvKVSq",
  "key42": "5tJYcnPi8tUUHak3i4jjpExhqZec24guJMhZTAtLUCtbZGkMHbcngBXovLXxi6a91HbAeAd4hxHoDiZRvxeMsu6h",
  "key43": "JSAuuxaRhUXSXtYoqg3brem6A71c46oJfD5n9WBQkxDejq36tC8qokZatYLiHQAPuCAtjHnmi7cnrbXcbqbe636",
  "key44": "2mkCW9ADEXS1z72afGZxKv2jmgnXJfxwPwdoFUKnKdZL3gY2goSZzxTEVTstfs5LhU9LbnRfSBUcJUWxKoHySSGX",
  "key45": "ci5nxpG6kaUrP1b4ce6mgX3tU8bszC3C7H5E4MUCtp2j9v1HYmknvYozbTaRvWkXgBU2srCJP7g3oLW4ks3ePnq",
  "key46": "4BwFAuJAuCY45sDMeGJYbNPDBgrikwUM1GFH4yGnMHmqggtLehLDtafVXjyiEzzrkJMLvyiFeoLoPq43bTNwXonh"
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
