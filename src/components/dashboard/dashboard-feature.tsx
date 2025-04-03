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
    "2P2N1cXQk3yoPR8BKJw1kmpmejfKmd2rDNzkDXtYW714KZAEkPsASgLSi6RcYaX7uLMmTRDYC2pUue5sCZ6d48gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pSK1dwau95AsraE49hq38nAizLUneSRRfL8io3yfgtbUSohtLAetxv1AAaj9NyXk4B6drcFQgWHrh4gzJrgxwt6",
  "key1": "3HSSQ4JBXQ1gaQ9kNXGJUomqwzcNHVWoZvmFkxPJZ4is5eY4iM6t4yJcyHCSKwxWUT62WhEVjUqe1WQi9EU5LybT",
  "key2": "4BFRPDRqqFvgiKCc96U2oCBSdUekRotx9i3dRx2riHy3q9PndtNtncWoo7nd5phGa1mEUgKERsNa2wHGr4P26p5j",
  "key3": "2xq8fXS1p3ZQRGMKByAiKarYdstbzxBRCgdqgFp6KX3oqiRQeWvfcdTtFx2LdyjXSLm5Q3kXYWXJ6KcPsEhQxvC6",
  "key4": "4iJfdSXZZKb1pKd52atLPP1vFqkaxP5Q27RmTvWAkpJzpEfxpr5S6uJJR4ybLnJRQPx2J5YZGSfryaNjLZ8Lq8DY",
  "key5": "3QumpB5k5aGLSmWVaQQiE3Fz9AEtzg48AQDNVXNS3f2kfckonT6KtyhEtKHGobZaAsPWs47a6UC8S1c9J4osBAmV",
  "key6": "pCC9kKN9pEW528JzjipJBn331132gzhSDpt7HaRXtKyT8VFt82gisF8TREeeVA3AK5JGMPppupkbmvpFTqEQ66A",
  "key7": "3rgUS7biKEStLH6jNPQWNPW4ZEV2KeAmgHRu5HEztz5gvpGdKnkbKCML1abjQJHHDbaS9EeryHy3XoJL3AyLNbJE",
  "key8": "5Egdx16TyLgXqQT4zGLwxJjL7arYz8LTMb3CTP5x7qrz4ohzVh6JJhScsR41eaSDLnMpmeWjJpgadRps9RLg3kfn",
  "key9": "4pr3hh4z3j1dgb4ZWs5p4zS1npyMnutjr87B4WaTw3fySrHz8uDYQjUjjE6Dy14CgN2Aqg4s4pG92XqAxtJ1ZJid",
  "key10": "4jYJktp1m41FWVeByjgrr39vZAFyDCmuZRep1ttRnQwKHZYqnfLY7Gszuqr3d5W9vpS3DDH57YeCgJwnrj1237vm",
  "key11": "4xUCcs1qrmdQSuFUpwE6yYUvhk54ZuBTKFP2oy39qp4xrMDU9Asp4tSU2vWtrHURAzTCGuox71hMjZkBRXwqq9NR",
  "key12": "2tJLXwpHxBmVgm9eBoizNd6Co6N8RzZoH3XAns8K23bBdoBpLVxW2nUt16SpRtSs9mC5qvgeeQDxNQHEiATXc7Dp",
  "key13": "5PfFuabmPfsLnc77kWrME2rDRyvCamTqXNCJbE2hWs7QQCGPVsGwMZHVU1kvzjUGUHBWjmdqDc4pS2JeuypAVzpJ",
  "key14": "4f6sdMHQwxQG5jKXfWftQ14JRoxnhdkEFNFxyQSrCcA9g7Yjed4NBQj5sLUuxwgMK2hL52hFKKj3Dw46bhMVQuZc",
  "key15": "5diRiY3Xh44fP4K6AjhyrzXhpL5pv4Ve6sbC4UtCoikLm7nsczB76vjYAvhKywymei3wY2wYc1Q7SwdcXeBHf5PL",
  "key16": "4tx4imsSZejNrsyptRf2nsZBSobMM8WUnFtBnDWbdNQiuAFiTqX4gSqQ89NTK8pGGX7rkKkBJ31XBePGGEnh3aZt",
  "key17": "3BUoZyhNZdeVDVaKMzrtdeN6YGnh3d7m6EimgDLDLa6PTrX8BJYW3GwxPnrU9T51Y6ec72m5CyoaMSgDadP9pZLr",
  "key18": "HKXG6oAJxEAAJiVXKCo9EtNQcw7Ga72t6uKajBo8AM6EhJyTEz4uzwYQAKFrLNxGX6Vce6fYPuUk3V1gE8L8iL6",
  "key19": "7Eu6dmVWbDeSEReCzTEbqL7Qo9nMmVv3utmDCnpg5toFMyhvu2JnadtqLBtMNJMaqeaSZcLWeTSJiwC5MNjXVnW",
  "key20": "wyvdvyBukZS46RcgnNmbUFY6MTZmdBisoXu8PHRSL4xnjdLQSxstfauHvAxmBg9FdXjYfSMCmWwweHrQJ96N3ME",
  "key21": "542PqciD9MrPpqL8MaZz4NPKojLt8JCWsz3cebDTxyAncrV9jSGAR8VcupQ1svFAEYxjG2ht8e7LqhWgLefiKSGj",
  "key22": "42N69RKJsA8kGCb4F1g8dNBhJin6JyVMmDKRTuFdTEDsRSwiVqcXFiq8CE9ZWd88CdTkkAprDWTdc465S8wwRhA4",
  "key23": "HiDUPcsHXpsN4tc9cTsr6nNdmnEzHaxaN6RA9zB6gfe3CXQYzULo9a64T36QpwnC4uKDeXd1FJEVTYC1AphXHd5",
  "key24": "5YBHAHno3c36pGyRErTFYZeFFREJG1CCJZq7juVvC1Ji19XRcbpLG9nNrRMgssQj7XngJd46F8ksf7azg2okCpFL",
  "key25": "474tBE3jTErvwaaEfhsaYU6VtohnibNrJYK7sHHCUgbvubzmKwski3kPpbvDqdNqQRh5tRNzKY6qLMTczko5hq4M",
  "key26": "uq8UtawH1pLT6gaJHHPEYpnxfETU8m5jRa4m84CjrEyULuiFfvte8MsN85zLLtomVMMJGwHMnCmwpzyYrR2Zodd",
  "key27": "4Mo71DhS8deLC5iCBM1yTajxwmVYbSUUxhAxWbdYDcNFjhtQhi9rMEorPFhTjFK2Y44UfwdbxnaC5WLf1UCmyW2H"
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
