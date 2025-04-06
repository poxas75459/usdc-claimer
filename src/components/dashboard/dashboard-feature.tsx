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
    "38FBQo42yksJbvgQ6kdqr5Wmw7hBdz5WxqwhDJpKG3ySHchMS3UNZ1y8bhCJ9ZPJ6s6txuBnifN9xXFXwoSfWfvi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7r69pbcjhsSMNhM5DCJPyYrsmR58uQuqnMkLcM1Ubu74fJNGm3cSLbCfgCdcqNt5h1Te3yfbFzbsEteMgxtYdB",
  "key1": "3LyKLGyNLzMy6RkmSoKCfzCYCHhnLChCvvQjvDuuDKdvu4ZFtDWGewxuVKYBGvLd13t3HCBaEtoCn8fxVH4LxqG5",
  "key2": "2XZ57BJFcQNPYMH8uE2cxigzdK7HGSaV5gU8w7Hs9XreuCKtP1ACy5WTGMaMZCss76UGTZQVJUWJ8JNcrdiSChZx",
  "key3": "3nTGghr2MHjkqgt4nQkaKtXHDP3Dg2Pus1AKxe9X9P4ymU8uGPvP23WDCESmNv7MsDAP21DuwTS2EKywMJqVJzB6",
  "key4": "23xjmrWpMjNbGQLJK5Hn6Tg5eKaHprxGP23fGRu2rYck3gz18zpSipwqb6bNbxV9Jq95rm16Qy6BrP65v8G6qHLt",
  "key5": "65oUDKKmNUfEH5tARrvbZs1Hn3kttQ874EYMHh2tHrSAJjSBTwRoWCKYmAiFyXBX9sfUqVBWVHVwJ1VBarFQrHU",
  "key6": "47Vf4Wi4vKpazDWoKgVM5a9pVptCWNgt4KdzniETYgXhDR8Bg7xy988vQ2AT26pJoWLMq574UfmsZKd1YXyndUTz",
  "key7": "2rRCoVagczRukhbvpwam4GE1GUPy8ZoVScDid5Q3EWstu55yHuTGCJKb5R9QvGWBeA97eGiHeT4XApkBw3xo1G4s",
  "key8": "5Sav6dMLkQ6LgrsWS43sZY8BVdwLkcoUKgh4qehEx5fKdpyoaev1CSDQfgEjtLWQchZFpP8svUdf65vrRNsgFJpv",
  "key9": "3AFioHCiMMN8Rvt2TNoateUFSCAgQL8KZHgfzp7vTdL7ALnLp5wVB8AdG5Go1RKCZbR84QiPnkQs4jVsNtFAEbV5",
  "key10": "5xX6mMsCkXVXe2nRkcqjjh17a4sTMpzv5rStr4XhJPa4rHYmM6fycdX1qnj1zWYUAvH6PnzXjMWUwCpiAx1H941",
  "key11": "378HgwxvJzoVXxuSx46zcKxzHYoEWzzKNSwJEH2Dyb7UxbXq8WR5uruq9b5Dx1g5hsSfx3yKUgBE1WhgAhtmWqGm",
  "key12": "2ouZBDvmjib3ch7Cqdx3ww11xRhbEZEtdfKXPeQtfLhL1iKQL38EsBfSnHdxymLMD7zpzKE4EjvrkrqvXmGnbbb1",
  "key13": "3y1hr2DfP7gvvngiXFDU9xnjpDP2YwuAyZPyUP1aqQDDCenGcHJHNKEwAyzvZ4s2vuZ4mr64bQkP66RDNhUdtrU1",
  "key14": "3oe8FB85zBgreTQVwK6QgvF8qkXRXXc2NX3c4URmUCgBLG7uhdhGqo9Gvb8QZVVesMQsLRG5tFpiyywnGi9okLyV",
  "key15": "2Lv87GCk2NmopmjzYBPXwQd52eCVa3KMYpBUp2UpddfM99YLfwYhAJtiiyd8pisfpW4m4Gz1RgfnYrcWgq3dMmxw",
  "key16": "dYKgaAFU7tqCS7f1dC2estZaNZWctZRzADBfS5Tgua2WNPMMhwyxjPgQNEXhqZfJd9cNxYbxkdJ3i155vWpGMu8",
  "key17": "btoc7MNfDVGjPiWMEQnoSsXykqV5HJUHmAsDKXSiPMGGCNxPGQRoC6382ueFkYRkGqKNCY9owqX9StyLKHog3Ln",
  "key18": "2mWPxQvGwhwCAnbh2yBJZ2g4WqGdKrYZi49wJ7t4ZH29mnKJaz5cz6EjouUxT563g5JAkNZeZY4cPHDwUS1FBnH8",
  "key19": "KYYKegYdXiV9nk5rkuQptkbKXThH5e5pK3enZhJXbRzrr82xBYSM2b84EZ1u39V1iNvSZnGKC524bccsbDw4ap1",
  "key20": "2t1LCNphj5FE79CD8p5VCT7KS3aboYHDzpKNGogiBrMA9o9VTaKWnisJM6MsmGJmkByTn18N7kSmwFztUzHKqubr",
  "key21": "2cdJgYguUiqg4JFaw9ToEg9ByR5ftXbFQkjpGGdD47VVXeXmhwnFWWexkE5Ld3dZvD9EsBEsbGxX5tRgzPrv1Epj",
  "key22": "RTAWSe4VRQ6TcqWALJwxr6nQRj2PGA3AN9VgYwDWMnEbJkeski1yASxQ88w3mrUjSPFD8WU1twGFTEzCcCGd8CT",
  "key23": "5quLU9XovsCDQuEKEF4PQNuBtkaEoCMmKNzuTYycg1TBAGdm1uD7Joq4i2K98iLs7oZtCFp4ii6FHZB29vUP4F8b",
  "key24": "31zpnsUKQiS7gb3SyXY9sRyektYPKeWsbZ8qeUg3fiP74yMG7cMtmgctakexX6X8SpRpqipkxjVrsvNJeiFFCbQU",
  "key25": "41GGfBe4BhD5VFz32n3du8gjMMfvpeH3Cv1Jfij678mtMdzgQJ3v8WRHaRn2HLdyo2D1MsN8VjdLAaSZ8vPGxFne"
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
