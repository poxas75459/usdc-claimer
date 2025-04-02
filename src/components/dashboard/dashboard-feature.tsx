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
    "5jNdRLH1MH1JGjx3CycM6on9UZywQZF3CMSKGfb3hkQei43qc7QeqJ1b2cKehqnzS9cZszQyx8pNs2FbKUgCchFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UF5oec5xZZ1PupZsYa8nmqxnHwUt1Ec7xyXctfTv4yVbD8N229vRjFjEj8pcHYkJze2LG3wHuwwbu9pS56qzUgP",
  "key1": "33AXx4UVVT3gXxR1vHcxaAd4ZsivoytSZLgG4T6C4iVB2bF64UbmApjTzmDztDLt4G4hHwDxDtoXCPU4cm2bfU1t",
  "key2": "125Ahc41m5KyMBMnrRsSvUTFyMPMd81EJdVpiVAn8tJjvwuM62SH1oSaHC6FFHtT1uyw5HztPh5HhuoNeEkz1zgN",
  "key3": "2amD74K9b65GzZQtzSaP1MSheQJazqYD9wQ8aPA8gbXBXse2v9J4Bkz6KouLoT36XDaNuxGwJd7ACEX8iNVVGnVP",
  "key4": "3ZrUgxmeAkBDTtsZtz4cyePVKm8Cr8oConH6WwEktWgCb9zXqj2kHmVikCrccGwioVxTpjo5oUe3dFUNGpi3w1m",
  "key5": "3afBHjiwnsHmiohoKBeZNwrK97Y3xU2iBvTA9UkxJ2VgbLyG6hCvEosxKbmy3Q42mLd15BpVJvoADxy93DDE2WER",
  "key6": "3zCzdMoU8GgDKBBWMREkSd75q79bKURUAkv5UHffrJ9eRQKabAurPF5EQYDCBsK8kmHeXi5uP79y96ivfLi9f68a",
  "key7": "3mtA8gLNFkXjEHvdErjwSEL6kNNw59esGTRU64diecfezgeu53dMiWkDsaQ1apxEz9ofVZMKzsgTfqzEMLfuDvWX",
  "key8": "2f53N6uf2gSH95kFh2wL96DLYKU6jb1Go7hHePdPdy99PSMQEnvcepTLg1vLBgXCP2Pw4SBtN3MbJBSkejb2P7GW",
  "key9": "4C8fS6SgfjpCQ8bJQUx2viEcpVVUPxbtUEMcXnkc6KCH6AMFNSocgf4RcZftL8mdUog1eUcjXECcrzpCy3EscgcJ",
  "key10": "2KHDvXjWGsz4AvSqcY2WnhPMyg39r5hmmMMpye5kRv8TbihEDBXdacUUgiFTMgdfza6KQx3Vkk2nqztFJzZ1pFkY",
  "key11": "MUk2BU9kcDa9eatJFtjrfgZXg8TLbGWip6N1Xzjxi8GmZ3tD68mLHbBUAxqJaQ9kqGociKFtUfiPkzSS6PeoJkX",
  "key12": "42boXL7rjHgzW3ahrfMuWvhrtubRj3kvma43kGSyRFR9h9DqHxWBiZ75wEoYqTe9zY96H8KXM16y8AtBAN3dpbsi",
  "key13": "4cT5gnos4VnUcRc8rM1vxKohFdwSeSHkeLZ66QNHFNoDVjuTWrLiuuXNTBLxQyZjCacspMPXyFF21bF7tLie8BJ6",
  "key14": "5GVqt1QupD5fCowN4tqd8YBUwA28czza4W9wYczDSiHCba3y4A8r8RVagT9cGsk18TU8s7KTB8vHhKfDdE7GgEKL",
  "key15": "AL9q3VbhxJ39beAy1PRpqFxk3vzmTyJr7rapWsr3ZQ183r3TiR4UMJWsQyEGsXgJDoVHLvttJVLjT2hm6RwoXgA",
  "key16": "4ooGoM5Zye4EVdCvGrY1DR2VRFggr2r9dM7PwMACgNJLpgrepTxWpwUWYqXJmkshAEyTbyYuD6wReYBgJJx52LS7",
  "key17": "KsSC3b6jJGvVmkuW8WRA4vE6DpahNCoqnPj9kj3C1RrZqoKBLiDPnMCjyyhkDkRf2e8fCmt4ekrPLKhQgWyBBJm",
  "key18": "5aDXDreD4beJNQeFxKU2d6n8TJoDz23fY7GJ4H3FPDnfFpURjxHLHUPCXFauENQHG7jsiLoxkPG4gFyqhZZZg3ti",
  "key19": "ZtJEWdN1z7XeC2kPpfn874dHGmV7W2DaJm9TtbowN5ckGU8FFnPpdRC8K9qXTVm7nAyPZNCNXnTbXNMvWh8NMt1",
  "key20": "5Wb71HooYUzWe7LjXwvMbXkQD8a2mEuFNLbtqtaRvTUzzZfqMh1FQ6TXBhV3okctx7G5JBTUWDr31hcCTab4oF2d",
  "key21": "2hJV9iV1RNRLymBoTj15Rh68CcfgpPtti3y1JgsNphZzpG56HTB2mjNw4Mkbouzty13MC2wA9kemVG1QbpSexZqv",
  "key22": "5ZeLvn7BmMjPsJE4PA9iLG4u8DjDjXT85fnxsQULTrRGpDmqF2YDmLUa4uBgRwCoe5ifZ18wQ4i93Qdqg2gnvcv2",
  "key23": "3Y79H9xfLbQV7ZKZEd19NNgwVPAjcc3kfMou6RrSD9mRxAzHfLUsv4RbyW4ywaB11mdsdGWyXFamGPfkmhLiRDqb",
  "key24": "3Lwk1KauPijJJ38tKtSBsWhq8BUWgd9MwxJA32eUfPmWHxfywg25rq2t13fsyibrE7FiFDzaCbb42ZzR2tX3fynE",
  "key25": "4X5oZpvzygqHeuWxZEZWeueuNTaVJXCDwjMmdoi5zZCZWZ3ECcyonthPGNHk1VSn8w3E375bSQmyXZRUdrSUwtbg",
  "key26": "2qYpA6Wwhe6Jp8kseP1Y7oJZp2k2AbxYKzPkQiaweW5ZwcgDmZ2AiWDoW3N5iqu65FzkgpJrRhC1Dr6V12WrvEeT",
  "key27": "5YF1Y9SnsNbqNrcstqsvhHGnKEcKPj2g6CapUQUSCBgz8LqydZGzF8TXWjyvcUVd19rfypxPWBCWPcgjQMirj21n",
  "key28": "qbeSBmQapXnDk3GWtB96vxw4kwJuaMySGT54TqZyD323hSWaLugb6tZDbagLAUzx7RGc1LmHYG4setcf2UvH3p3",
  "key29": "5SxXLYGBBHpVML9UV9LgpM2bqzmz4mKDyfBEbnVdHrcCbkLiXjGdMZaQ4KHwahEsTd8U4jzmWuBoAkoHexf7k1dH",
  "key30": "H1N8ipYtTKpszrvNgnubwjRawnwHgYcovNq4dM95iUtnsJTczvJDx2x5dWZsH1L8FLv6Tyr4RdTChAXBZfEWGz4",
  "key31": "3rWsUW5XHnqz4imPGbwjswwptzTMc3NxLJj4UaCEM7Pp3xEG9kdTYnyLYcfGKcgf7eEDnGkpR5Y5HgjnxL3LyE6W",
  "key32": "3s6Nh6BxVgv4gPHxhyoCQQmx1HDwc9PkhrToiDwQpV56Za1zPgrS5hJBR3tbjTk2rJazRmz9E6ASptryNGBUp2jb",
  "key33": "5XKLSBnbQ2uuGyFSERCe5nW422Ryc7DtXytECi2jzKmKEPfWWx43CJGSf1Rq4aHDjfiqqgeAWA3bYNNyHnyf2Hbu",
  "key34": "54zPck8G8CFvsKouCYVF8eQBRKHHkDGA2ULGqUBef7MnNuhbTbJze5pPuzByyPNDwmPahfqYU5ufeAJ51ji1pou6",
  "key35": "4btJWQS4CVw5GuoV5T23KjVparoRMyqf5wyfyxAV7DSMcAsVny34nvpot4yFVRjceczZaN65Fj2tbDqrLipJ3L3",
  "key36": "3QtjsD55wXhUR81WZixitbpQt5jP63LZ9pvqLoLzne7UZ6mZNNb9fnRA6DhTnTnBNPMtscRqEBvM2MGVt3xPaGmA",
  "key37": "4qpKhiNsJ9NREk7VSLWYBuWWDGGRcK6hmCxeif3PqShy1s1AdyZd6ppkfCyhmnNVeqriBSP9aTXWK2BHAAZ49Tv5",
  "key38": "4WvRfrz6foi9krbqGnvZp2auQan5Xpb6J8hjyjMZP3ZmX1ddcWYkpL58tnL1Wx7hkmB5rYARVVBm1LMzhy55cwSV",
  "key39": "eugfaCzUQpTUTAp3BmDeNpKDEYbDxBN8XvfZKn76eAGA9AsyNUBbJQi4e73TLfchphGhHJXBiSJPo9btBTyTc1F"
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
