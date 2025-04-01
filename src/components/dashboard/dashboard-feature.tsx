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
    "3tfxoY37rv8sB9KLnwLG4GNbJXz7yxbfHNXZt3CzcjLrerXupsEYJkpCkM12Tf7KcUwKCbt4uvjSeH5GwcLnfDVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLHQxzcH9K2S7dTnV2ZnsYoG4FRWzdYhQKdLawNnQPofxjFEYeirAxDc4Nn4AQRHuU46W3hvxbULfk4YrREJEDh",
  "key1": "5QT4CzQTnsCwATasMKkGCKCtCanSQ9Yf9HDc6ySSCWD9LPjzKZA61GtysSubyftio6YQmnHYErhky7bm6e2TB6k8",
  "key2": "4cYkdF1QCz1Zgaq1fCTVMvhsepMHX8CJ6Tztg76PbTT52Uzj2fxNvJ4GAqhbdvC2v88RaoxZYegs5AZzXKVZb5Fv",
  "key3": "rAbFTd8tkBX4piCMzFTALgnN8jXqKt5j2vCDH45f1pVV4MgoJW1UVcazVRkySu5qe4tJ8hWQhfJbeC9xKNtVZZg",
  "key4": "5QgoRiFvDqDjGAnKTEDs5nQ9ovnSGtGS9SASL3WcFAmbzjSSBjV6HvQY1AN7orQuCPypXbXDXchHzeyvf53RohQu",
  "key5": "4crw6KtD8Lq7fUtMPyfAgknC8meuE3PC3PusjockyaFsGQJD62hUVRPoZ8UvMcCcArFvwY9Lp2oHgNAjGjkGoEk6",
  "key6": "4moGtbWmGvPQi1wrT8eskPjS9Wf8iJJPEAYTe8x3x66SbbPVCKP3NtU5LMzbSuXe8QvSxv4ri7tepapevnPLfz5u",
  "key7": "2yABpxYnCsYS87ycuhHjXVygK8NcStZLua6JpYeRbSrcTcstEt9uUDvH9FPovNAntcmGTZCNFxZL6b8zVfuFHsxk",
  "key8": "2Ns2ZhgwtWzngkn6HxQwwV9Q1WB9q4t5JBuWruaMaLApTMHWqAE1GhVuYGh644KRR25g3yk4nbtPyEFfAsv8WAMN",
  "key9": "36xT16SMdczDWGc3PezAACBetAtMUnxHSKdr9HfGYdUrjwCjtr2m8zBU8eCwQmMqafQBDr6DYYzS8xABjyKnJw25",
  "key10": "5nySmmsqMBYvvMExf9DMtVCppvis4b9ALme7KDMwSGsPbg2NdMN8MxgxYLqJb8XZAAnwkiRabJrPvxR9AexGaoqa",
  "key11": "KjrbxaYvRGvypGbfbihBeiSirTbTE5sthnCvpedeVffZpm7NADvg1hB5kYt3v5EsSdF2NYSo6SnCjrTGT2nH2VV",
  "key12": "5CLsoKK8F7dMkWRsTx1VfosBZhtq73RWpCYpG8huwcMVxPaBDVXpPNgJJquNyhLenBwYSHkYCLvj9z5hF7kNVD2Q",
  "key13": "3yiDxPNPNhSbfh1m6JYfcgH1a5kM7875FpHhXCe5R7r6d8rUzG8qMeujpGfojRsxb4H4gXs1ssB6wH8simhuAMs2",
  "key14": "2mxMjQh9e7RvYacWc2325i1jxa8HyiP5Gh2jWTMTpUF3TMCcw3MMkfhk6x7d8ZCFNFpsbhfubuGbV5n2fiY5bBDC",
  "key15": "5RbMEKPAsuCowbuvJAKSWbqtK7VNshfk1jAMC7H6oqGuqyzscQtVtvbuFDL72pqXL4iSRBsEj6YyaDzK39AodPps",
  "key16": "5Nf92DtoFguKaXF8A82BiumbSk49HBpmkwa3t1AgLsy5LhNDcxq3AkzHVeDEyNmhFJoUJPVJVG8t8tGMJzzbNbPt",
  "key17": "5xpGVckyCTBrG6Krp9XXVobCB15hP49hDYHUcfMnzksg2LLZvmgsEJ25Jp74rV8S8s55EJBXTmeWaEy18YyXaYD5",
  "key18": "2D4FFjGn5QM1BcCMU66k5RntUfddPQgSNJ49ngiSzbszLxD65R6Y22tyzw5xHMK72fVgCJmBUrXE8gHjytzSu2kE",
  "key19": "AE9hWhxHuxrEeRnfcUev7PyUsKTTZrsARgE8mK4hG9skU1eRGFz1mkm9UzcWZKbyGa1YWq2uKtuZP2K3eEF2Kn7",
  "key20": "yVbDYtyx5wyMVtRxauYryeefa3sPr2epyZ5uap2Fy7nnjZAYrgLnteNJPjcujJYf8dTnxKBM1Zu5p6WqR7fZocF",
  "key21": "H4257fptadvjLss4k1p7zKC2jrv2EGw9AtuuMA9gR6G1VSZiz5dfrCzPqrcztim97D3qBS5Qx79J5W8TMTCGxan",
  "key22": "5EmrB3YVwMqHUjirmia7nwyApEMamQRfkLjWPuetv8V7nJDnSodDRKudWHTnnhG518XUeY7cBKviFWJJM39KWZMG",
  "key23": "jyzBJ1hJgVWquH74Bjdetpq5U3qcGjSV1WWSuspUL1dq63Box9NVNH3xCJu7wYSrPyJ32jmarkxkvLj2vSHhELr",
  "key24": "4mtraeFmS3La5Two4rWigEAU6ym6dRFtdnoeapzGRVQhxEGUMC1sXw9fcYP99DnjJ6yhoniYJ8JpycVVsNcRoYGq",
  "key25": "4Z4fDcEryapx9ahvfkbHHJcnrJcwmp97EuXqp3ELC9WmNpF8LtvAgVf8MfHYda7UDE5YPzQvhWVsmwexWNxat1TV",
  "key26": "3eXYrDATXMVa5b1hVYhubVBvJpNf5z1U5oV55yaG7DUrk8U73xbN1v7c6dHrvWmatgUCy3sZ5knBS19wCf5DuqcT",
  "key27": "3junwgC6URyXhAVmgjzSrxDMtGofrVf3yKTQZkUMgBKmpRK8YmaHKVUkPaRKs5P8CK2Vzr1pMWpvviwqJxFhzDke",
  "key28": "xg2GRdziF2Mb7L67HB6hPWHohi2LA7Lb9ywvFoqhSNut29p4Qa3QW6PWQUJzycWvA6xEtwXJkBMZVSwNwJs175d",
  "key29": "46s3ScTmfpF5Nr7mjXR2xVTQwrRwL98bPGd4M1EBfwsftQSionUf9Nyhx5GgQLmtxJn6J15CCJ7pJMNfLa6VZ6RH",
  "key30": "5TCyWcWuaFinWot9a6hen3ox7iTx9TT1DrEAUNi7uZAFi35Wmw3T4hTQW6eVuGtqeoNMHSrhAyUrKPgnCsxFFn21",
  "key31": "5LSD8ciKQnQosdRDKHFNwmmeEcgpfzJdgvLkMYbAaV1H1Xm4HqPS2MTkSoftBt1GuJzU9Sp1iS9SaGDnof88d34v",
  "key32": "4vovseXCwJWyFKu7HdxRsNtJ9QCmRhu5KB6B3RBXpaMeSZSmVzq4k8PrCD1mrb1kA58T6cE4r43BiwFhae9MukmV",
  "key33": "4PVnP5HPneKH7hrTQ4hNaku9xgQ2L1APPrq3zcmhC1DoiT5eeEMmHKQPLrfCFcaXwuV6dEhcwZfPbdc8HsAnScPH",
  "key34": "3qBWUB2WSA8aSiSsPrYoyxAiipZCQKGN5jWkHVkuJRnJctLTQVEfV5ZnXMMk4v6eng57uibyHyketshEKQGhCx35",
  "key35": "VCc1MtTgqxCcYZs7XjpXA6deaweJ4LAsEDoa47UpG4jdT1eH2ZaKydr9a4LZqNF3tQa7mu8YjBbaAJJPqa1T8nu",
  "key36": "YDAnDHQ3SFXyVpSFSRoj6JzUTYvoQTohNMaUAAzRAwsA4kde49u1gJS7PfqhxSadDnFMwwuTnUyVGqSBeb4e62G",
  "key37": "34ud8wpPoJTtLBUWZZ3ihJmHpEespyEdfwow913uBHfb3sQxyDDfx7eceDgHcEkCZwgBwyuDPftopCFWFo7pep7Z",
  "key38": "3wvNwJzCQV5dAhdkFK5eUTTfjqJS4zhDawNBkkMVrnCzjsvkVZZociftbjHbcMwKzLXAV62vdaDrdD7bhcbDbb9A",
  "key39": "4CgqP2ZuRuRYjg142aDoutoEktffKPFw2XiTXvXZVBPZz5tYwRmG1wDDRkE69LRgGjSjHcZdEDrK6mXsjWTzGGRH",
  "key40": "2ANo3Z9gUbpG6QXo1Hkj9KVGftYfgFJ52sr3L4keZr492e8JzMh8HUXGmPtA166gnLyW7SqsBLW8hyaS7S1idrhq",
  "key41": "4RkPdStmHh7UkNnoENbiv6CFEsLEHjidGzvMcge4hxvQJjjcezfqreMPd9TSyL2zp9y8CcpC9cnNg5Hi1fJLn1PX",
  "key42": "56Js39vSTSEdLg5AkkuodxPpUJPArz4fibNNc1UZXJCg5BC5iaKJHXmYFjV7DHNF7J94fAfABiVoCSxjGjD124TR",
  "key43": "hjZ29CpajKZtvzpr2ziz5ZTZmj3NQcR2yyZy6vSfUksLuYMdKCrzkdKrgAS5cNEYqTdbXoKqkBYLU9MW6Z2tUSb",
  "key44": "26RMCaXf8Vzfs4bmLvaLj12iwqkubSKM2i71xuTM5nd7Fyq9K1mYGtHSCeBQL2hcp7CAP2K9cXUd82ECKE17LbnH",
  "key45": "tMuLxHFSCp7agSX8RT9WxwvspwKHb4sXjzzTL9NHkY3n57CVR1JLP1ZsARMgiEtC2CgzYpeRzt8HaPNqRMU8zmW"
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
