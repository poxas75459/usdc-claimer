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
    "3TakL1994CRLvKLBUH2Z98RYYpRqmDSBoXtwMdWCEF1EHtUfqbu83jJvZQayKvho7qj2F11mYsiKGR3he1QPjs37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ufcRopRNRej9jigUos9ke39dqmgAhUPoVQS46jaZiTS4pUTfts7KTwiVhaUhjDQft4wi9PCDGJR6yEwkZH4c43z",
  "key1": "gr2HdvT3gq4RPtvTqY8mvWJ93GiLJdLdfN8KL27tbepZPg3HaZRAgV7SHgB9h9smhJyCR2C13LS35ia2tWf8j9P",
  "key2": "5Hoi7JVt7YXPbsu2uLqDcP2qupqq4Koe9Betu6Uk8tFvRN589VAkx41BZFXLMTyf1tEoo6nW271WKzbzSkQZPzbt",
  "key3": "5rYNnwzWyETfNnzHuGD7Zh8vg4ccvhUMYVdNthtoZP1w59Q7HbyNTkPCtf2yAJQBczkFDDT25L2RaRTSzUt5rfGP",
  "key4": "38nm3aU1YPQJQ2a2v9AbSq1PjPi2DCHn9p1UTJovoKuq2A19tKErRGm4cRuMbqeMwK7QpPX9CdoToddSFhQZFTwV",
  "key5": "51y7tBge7xgiEuwYw9v6hZycqoNmVy4gCpTerLtv8KcajW6MkiA7i1mm4wQ9x9DdPucyhwHDVbQfU33jbKLNE5yy",
  "key6": "2Tg4yPTgc2VPsRUpWHkag6ZtvijD6i5SKyCfD9sHcfxefGZHMQVPDv4ZTUz1wtvX6DNyadtCVeuU4ra8GbT2TYN4",
  "key7": "5g2fD4F3Tg3RW6WhaFSniTLobK94X1tt4ATSEdRLcgA25VRPnV8n7wNWAQzGxe8R8YQczMsKnC6sggRev8mvV3Pb",
  "key8": "3cjLvcDCv8qA8jDSBaaT7cqZWRSZZnsqPpkdjndGmuKsqjYMVRHAjFD3iiTwCmHYuBud43nuyqP14Unyr1dmmdrM",
  "key9": "36ad6fZ6ABg9swvPVH8sGGZwwoHMMa3sHW9f4RZZH4KL6XG2HNayyKrwn3ktxKaYw7r5wCtQ71KGE6jK64UbXXVD",
  "key10": "5sAx2Uz62zeJMvbmo4VQyyjX8yQQs3cq6Crtfa688eQZiWwSbcnsEvkpoe3Y4FFP3iC82aKp2DgM1EoYTJaGzh9H",
  "key11": "u7w4QJmmDwTeS3prmmzHga42drWYenEssDbFgFvm1FmKQnUHRavRge6uieDCSpzgfRcdizgBiC4zq4SuSub4y5V",
  "key12": "tePDj6VJZ9vhz8Y8FxjUu9yXV5wMkchUvHS5Ex4JUyX9AkwjidYu9YuMYSbWAiMsJ9847a4kyzajG6Mjx2trw5d",
  "key13": "W6TqhKrQuY2tZnKvPxJVmxv9zxLKLPvyMCVF8DdeY8CwHAJnSKBLWoyZJoJpkVL7k9pkuTs9ThNH1tV4KR1YsDG",
  "key14": "3B9VRVz6v5EkLPbGmBHTNG4gbMxaooKyfo5WnPyB7F1oM3MLmxWLtcz9T1ZLedyod9FGUr3TDZtwsqAxzdkxChyQ",
  "key15": "3g7hu17Aq2fkHMCmkXMghxXhMZ4fS9EXG8YhkSvMb5YJapEbWBk57jwThAKrqc3PnAzMNqMXAMQyDcDh1rVpc1V2",
  "key16": "xUcoGrYR2RX8fYf7FoGJUfAW2qEATQ11WVkWiKjAzcX8VoDfqD2QGXcMAQSz26x8UeyJ9hUboAL7f6c13mR2UxD",
  "key17": "5PG6K2bxuBPLPgC1Jm7NcBdkinJNxf4vuUq9gkV1gEkaSMuPk2oqHaCSLNniFMJQLygK2bQJWB5YAsrENf7bCXJd",
  "key18": "2BSRpKVZVepfFGMt8bHm5kD1H5n6MDD1SgiaLaHir4jyH9FzC8i4woKWzAgvuXXTy5isu2gg4r5Dkggst9iFVrSx",
  "key19": "4utB38cpqXjvrHB4XSsFUgaEtTeGtaAEy8E2NsFSquJAgpggke9HSudsPJcV8grzQLR7sUKmuyon8hgVqybdGx4E",
  "key20": "29E5ttUccBEw5nw3CbNwGBKct4WtNbDsZ6n3vWZWk7Mi59LwpVMHoraG66NCu9zLZdLiLsabKNpGdTEA13fs47Z8",
  "key21": "4CSX4KvUgbuCosBdhgcpBye4TBMx9ft4HFjKHpgRr4tALV5rNAPP6n6wSZe2nLXKjFZtHbg3esQR7b8MsH5b2MR3",
  "key22": "4kdpnukJULhWCh9hcSYpY1PLhyW1tRNivjZWTcqfZgsQbJ4t2psTqY2btJvxf1c8dEjwY3BSeoFMecGLkaiLWoPQ",
  "key23": "3QgashGTEr4MwqsfKGFhq9RS7uRAG8dM4pt9LVFRk7f5ktDaB2TS2dwwdWVauPJnSyQG6dHVpuzvhF2hAbBjwCiH",
  "key24": "34sqUsr3aCr8gobeTNtgwvaPY8XpwQrMZTCzbHixox5SPwX4MuPqsMgVbeuGVNijT18TARWTCV3AwSUt8rarJ84v",
  "key25": "BSHxN3KSZjXYFhwkTnyUHhkdMtTDeF1B7McsBLkWgfeoit576x6ofVXhjjuSL2aVLVTLPKsay3VP2xghdJ4cX59",
  "key26": "5VVsMofjsdtxovNdUbXnCZn6SLcYkgJKf64sHZjZ3LvaKWqPVGCJ1HKbRak5oUuWXHCUPLA8GuRPHqcrWhSt2zx6",
  "key27": "3e6hqQjS7kbmF3QrYwCBqne5MeCNSrM762qQYbGReTMvDXPB5D7JmHWnevoephz5vRNkAobwhcmBnE2WZxaqRPs2",
  "key28": "ijYxeiR9XBcgdjPfDbkqT4XoE2t3XSAZd13fM4NBfZkmutiDRF7E9krg4EzNXZPRTNrdrcYuwc4XemjWE558cWX",
  "key29": "24jjjppXUJHy6Reh4fXVjT2A6CagDkhYi7Tsa6YLVRLt8oe2rsXGmkdbpJ5Pmp7G32qLkQtEWfXahAaNYQYtAMta",
  "key30": "4qfaCzMFSWqpTVm3hRq881TDANbhgETMCC5AH1drd8EkrhuxRkHscwPKdghyRhSsDoA3e9NruVP3TMpsnVjv9i7Q",
  "key31": "4LHqcKZ37mi6jvz4HJBbTaKSJKMM1Bq9d3x3sYto7myiSXS2EGDHALsQYy5MDAA4q4LifkxtHsbNrxpsjZAmt6C2",
  "key32": "5Lcyr5GzfFejXJhuRWdYXmuGiY2wEyiubZN8Pc8evrGNWkjar58PUUd4mCjHGp3CnxnuSQ9J2yvXdS7dMuNpwPWa",
  "key33": "2dhrfsykMKkWdjjUyGGBSHEa6UuxZ1uiBLcuTFBmQFRCP6cHDLTErFMFPVbiT9w1JC8xZTNBKsTSBRAWPcnesHs9",
  "key34": "5f3y6QFRPDLYiRzCmRYLZxzKRm4apECiXfeRRaNpTDPJAeiRMqhPir4dJAipNm9xYrnbuDnTjGqfBcXvZSvtzp9f",
  "key35": "ewaesmW3d2VSckiPahG9QEPwSVJT4CkzwSUAqZpzbAce2C6obCtViiP7s4qYhAiYst8k8nonhLQ5hxcnAD3nFbZ",
  "key36": "4WJJDhJyycGEavZTGcJAQ16wqtX98jfMmaqfE7hxXhCZw5MCWA19aj1NnLeaMmfteJUXUf63Qi3qGvkDVPGv7HEx",
  "key37": "4GEXSULSVcjpyrT5yKmd7qybxYptbCL9mjiDJsnBZiCuEuy1rvPuF8vb18mZddRbX2K3tCYAouT3PbmbQB6jyXv3"
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
