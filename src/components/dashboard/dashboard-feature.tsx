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
    "4AgD6DDuJ2AgsHvs3kKf8Xb31VLREMiX6qfK329Q1vCDWdYNJ8mYkZzctmNfcimkwopT4kv3wuixEvT42toXPMpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VJAaZr9kjv1nTUVVMmBVS26iiWEV9jQuGwrnMJK2Hy6tLtvMZyyddnwtmnq73GghbaPK7LgkoCWvyUL4ieeKabq",
  "key1": "4hixTyTUhbwxrJgotEHB7FmoqAns6ACqPSTFBXgKdrjo3KktAnqNxGyYqaSVrTACRyHzFfPsJDzpqk2j264Htfar",
  "key2": "3Z61vuvShNCX9M1it4JgdaDvg22kVGnGdTpGgQmuL5Z61SCD9gPabFoksYQFU9QBDUGQ6VNNCGjSjtTW1NzL6zDe",
  "key3": "5c4trQuN6bWqH7YXY514AodRcrhHK9YDpwjJSze5q7RiaYJZ7ZfZ1Z7pcdrmArgvVUXQPsfeFqPBmGMU243sDxLS",
  "key4": "MWT9doWuRxR8kMcFP1NKZA1m5QW76Vh5QcZVjtqC9WZNh1cbiCzqdYYB86PcQQFRQTkfUN7Sr2WjcskERcEmfnD",
  "key5": "4trXVAKaQ1t5KJz9iyRXtS6kjR6ZJAW4CsPUmxzjkGPC7gJ3i1YErgDVWdCs8q6sPAehUfM52fT2fSN2ywez1jjH",
  "key6": "5RhTzEzZMmooRvTyBDXEYarMwSqMM2ThaTgdFr17LHSrddePHj8QGnwhPS6NwjngUE8DnixLFv2SnAsN1xVP9fdY",
  "key7": "4nbhTJk3nLy8S5fxH66ZNjXY3aMVhcGNcf3E7wb6GCHcVQY3zxsdyTkrSoBzxiJspMJnSDMzEKzdedEBqnp8LC8t",
  "key8": "4hJFGfNqFVLJq4uvVBeFLjmuEagVhA5jSRCvL2oE1A3yuGh41wE3VTZ3ynkpwWJXjFofsC27KEJCphXzg5PuxquD",
  "key9": "5ARTzqiRDH5CwK6cSWThCyViRLj5gKrPMJkzDar4UR2GuDnu4YWuLhB1JqEFq5F35QLJnf2FES6LEMkuQRx6uT67",
  "key10": "3PmKTYxwFtfD4hnzqyZUmYKDHyLuA7GeHmh7dpLGALnoTxGMP8FLVd4eYQk6Uko7jdgProF37GYQirPoBGukq1Jx",
  "key11": "2wcsszYfZhx5s34r6WCDJQnEMhEmt2TA4SaEkpTDNSu1oM3gpDw3m7HqoG2rJ3Tzg79BsdgNauWqZ6VB1rpLbDnu",
  "key12": "KKtHfYoW7DEWD9foHQX5fYSz22d6pr948j1iePXdcnfrZwgDzHnKrhhXCtocvGnrFq6zuZM89TnaxyHNpqgi5Sb",
  "key13": "envA6Pi1wuoZh3Cq26cFBgwDfdVLdJ7LAsVEjfC51mLntPWe9VL3twayd7kE8KhiMk66zN6TT8voTAMsqLRD3om",
  "key14": "2Lv1F9pTtUnZXCyofqcstn91fnt7Zg8nsU4bzkS4nnshsf1kXFXZh6gfVYD7sutgyP4mgWg5prunEHSMiagTHvwg",
  "key15": "4VatDGXYC7qqUszahGnUUgNhDauPtN6n46bKccGKqNU2EpQQaS76RTj6Le3SuSgt3SKM8TfEKQrsbteQi3XPn1w",
  "key16": "4Put5DS4ZQuQNaKFFB4UM5yzSis6FiR9vKuXo2M6yCvbraBorLL47Ra8cbs4HSLpWYGxdM7P45jbNYNPuWbsdcik",
  "key17": "WARPSoZYyEGUgRKwR2bpkNMFP3xfdpavRWkfKXPgtXKBTGqZin93kmvLm4rbE81wRkj2zveFzu77bbyhsQ3FYoJ",
  "key18": "3PavN9FKLrbfyxwnMW9SqieAHd7tzrUAQa6JZr3aR3w8EmqX431GSDCjN2pLpAv1XvzXysWrPEZ2WNTMSdgSZ2ce",
  "key19": "4r8vf2otCzNEUn7tjBTbJoLo5DhEtFbcntDhaDDSpTuonPAr1dNaVyZfDyToZ8bJaMfBNwan7x7Sz8gSUFAgt5mg",
  "key20": "3yyUM5oNKncBgunxBZDQidqvAKKWRZTJTwznStNqtDbCuCh8tyzXwTwfQM35j4K932dLpR4p9jnQdEsZzEvCptq7",
  "key21": "tX52GipkLLpuhaSou7kzoQ9yFUs55eiTqVvXq5eN7XVntYh9g1DsVcS4GMejhUdJ68sMBCfyPJpxs4GXk1Msqs7",
  "key22": "2pvMsrJWFwAhsCAQJqAGxmTLQbWa6jZaohqjHdPGrkW51BRAGFXJ1xU4yrJD51C82GehzZD3YNCFaChvGxYZy32d",
  "key23": "PSaSBevWvAw66Ka3BH6CvL2ufdwhJ3KddwjuMFmyGgTXXqDBgyzXpXWKCU3jTELBC9xC3tPS3t3sJ8hHesKGVu8",
  "key24": "4HLdFyEXMS3KK3rumWRR7K7vV9dSgDmHHu2VEPwJHWPQ9ucTyYqdMzEKLDX4DJaMYdp7EHrtE5kPMW1cQfASNoXK",
  "key25": "4Ufq793YTbYV6usLTn8skgF2xVbRX71XqRXF7cc7xEi6FqpYGntNXEJ56ZCDy9jWKaUZrBDBbq47hQy6X4Ao36Kk",
  "key26": "3mJsWUv6PBVCsr8okZLsfpfsyQXSMMXEfU7dtYd5ynAJZFYJDhdr8vD4pceyRTrC4te618Tc68oy8a6jaBYTv9RB",
  "key27": "53pBtMjta2QGBJBDZDuRUM4RjcPiLF7B3hmXSmoZaCh9MYkEj33KBBCm4oCBP2K1jtPFNLAvtgz2aqpiGQ6wVefD",
  "key28": "5zAtbPgKY33qzgjqtcVboSwGtSgRhh6Y8LCgDbQzMahW3FQygLRXoQKPMAy3sLyZvPCoLQmhQe5nhMAC6fWMGsqx",
  "key29": "44axSRLkNa2tq8eRNPTq47yjgNETqUmgM4T9Un8krHdmNpg1r75EQFGnk58VJwBchjTzQRReZEnqNFyUTyiRRXuU",
  "key30": "4wRwhz5jED2Viq2iQDXMFkd7tk5jjPzLsVwRQsUSZuYq2hSWy2oBharH1B6JDKFepgGAojyA9BpVbKhKnW1wUk4w",
  "key31": "2HQr9eNzyKbXegZQMYbD2A8i7t7yENvk4w5EGn5cdwHWVnKvPX3rB4SNLnfJuuG2YCHcxpVZAGweFEjBFna5hXNx",
  "key32": "3JG2fXPhCbqHCY7oodommz3jLVJJxbcVvNEytLwG4j5uDyS6PeaFW2UDSsVUJXowFCKxnRbou317vxZPBggD5iGV",
  "key33": "63hLs5KKRndqM78h9tHiuHCMH2JhqAXmRFYRFqwbJBGREWAw2psj3JvkGyKGkwGqMTabnsEjk7Dn5XArvFZtp4kQ",
  "key34": "3N5Tag252MXGWyNCUZUc19SrN6HS9dikXLFUEbEiba6We1NJebNirD2DrQGy6ZNZHhpYptFa1VdVbVzCgCuYYorh",
  "key35": "5Uo2zDf47cMjvcQKbc7CZxtSVtgHi5m89mXMNHzPjU9gt15rExTyXyNUbVoCf3sDzxKiutvzcQXbvPvgnAttiygm",
  "key36": "5x53xDrG2mBg1h2t6MNxogTm1YtfjAiuLNTyZKW97vj7XzUcAbCzZTsgDv8H1XgfuKdh9jFsZkKeZrGb89rsSYX7"
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
