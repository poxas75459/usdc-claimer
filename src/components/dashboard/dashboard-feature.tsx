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
    "34FshcpA3BD1yj7Zz8xF5PUfkZP8HnEGenCxRsunSV4ET3cSMbD3PifYEYqbcYcp8QmEyAaNUTnkK4CwFm6TJWz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RJuBCdKmv2UyzC6C91ik6MErKvaVLvrDxarc6qKvFSXaXAK8FXR2zCErkFHsofJCNgZc9JPgUFAfXLWNGbQ1J7v",
  "key1": "3mSdmHWE9yJAgY5tN4jKqvj4XySrGRqutEC2DJwEfawxk9AHh1pJ42KtqKT2fGymh16XNMyCavkbSsboES9QGVmW",
  "key2": "52mYMzibBcX57jv3WhtxPAPBGDjf6uqeMgX1J2qgcQDE1EWBf8z3N7u22FVdCkJratKF74fSaepg8D4JALwtTWMJ",
  "key3": "47dVtGrCfpKBH9MA8tZs9D3CMvZ5qR7mf5aZMXoEkPE61rMkZ6JvtzP2Q9XTYEtPZnRa5GDzkrrw2mXnPzCGeXBV",
  "key4": "5G6zGJnE9VoaJ5KXfBMo4JrCbEHGQF4VkAGkR9gLHHG3yaah14bjn7j2s7tHFkDVRomG2mKwb9tKAmxWnoT9Spim",
  "key5": "31QsguTbK7tWAS9WTXEoCC4awFQrsjRE9uDUpRic2byPhqhmd3cmfr8o7mwwDqqn5NS5WvX8M2caqcvjzHvC5Jr9",
  "key6": "DN54iuiHGariwmgAxKnfDLKxK34NQeNmVoLUi2cqXpndUen9WBotPe2LNPayioCCShANbnhk4bSK5bFFaVjTw7B",
  "key7": "KwZAnVJHMkB2DA8dwudTcuvWqbeCsq5s8L6656s6EjgVUkGc1mbup7GALscJk2qVPdkmmqyseZ9JVdw2KpfEXFE",
  "key8": "U1hbhY4YkBY2wWK36dq3wpWPbxn16QPFTVs913mCzwoXyn12mt44sJgV1C3wKAah7pTd7EjJMHsd6XkuTGYjWki",
  "key9": "UcKMnrBLXYzvrT6UXHy6xdQcAfBRDp1Z28FXgWUNcbDTB9Jvcfyj3cyvwhaJLrm3tr4ecyHJs1c9h2EyvNZrWWn",
  "key10": "3a68nj66G4orsB2noHeXmAeGo6aXjSrVC8Jr4bEM4DDcfJ5aaZa2Z59Wo34FRKQzAHCgVwyMZUsiLqThdzRhLdbY",
  "key11": "5HPX8VyRvkZrBuW3BJLrioAjF8rDxvgfCaPn3sgmCoNdwXCEsZwJvBEh1RJRRRfMFyqVVG9ZxR9UGHu89yBpA1sD",
  "key12": "xSGQ5fzPjy1LePwAvUnfDPj2vWDKrZexBERb2vKWMda9dGztLGaHsnxUMLQLkZQCsNqWJ41n7EVe9BZ1eZABmkr",
  "key13": "5s1QU7ydEns6w3qRhzn2mXi6jYauhk1hXGuRdReQRRxnFoJhM3N4CDq5BXPyqghp1NbAFkTXBGyDLBK3PHmJTppy",
  "key14": "3ubsndunrk4PyfU9An7y1wxxSZHgb56qjQEGLbENzL3AeQ3fo5AxAsRDuV6m8cpHWB4nbnoVcAJNTwHSsbGgNicw",
  "key15": "51Yt58vnsia2Zr45Axkxw1wLGc4zv95Lhc5hbAVSpLvSrYzqo2FW9EiBu4nyhM8LwJUVCHJRNrJnSie7KowW6FXg",
  "key16": "3c2YF3x2mSdbuFpZUmudcrpqwwrxo7tAXs2DWgLdLsi1DgGFcU2prBMigTDrPHKDjBt9YEwUegSKL4TPAzg7TQSv",
  "key17": "2mtDKZjCsadd6jyH8bbSd7tAenwAB8ZjCVpFRTLcvVooyaMx7B4SCqDdiRuJ81QNywa3G6t659kyGLtRp27k43VT",
  "key18": "yBrwyvVEpizYsy1ZpXxP9wBCdiBPERETJjs2y17wmAbwL2eAaD4NPMaNWJ5qyNMGAJD349xDzJiweYf2ts84Snq",
  "key19": "456hNuZRfKM9JedWJJ96tT6cCVH8Yje2nHruzYCWrxBWiDZEqXAKYzM2iyHvJbdMxy9784fREhsjG4VsNfKyXBgs",
  "key20": "3FHkYPDzd97bxgwgCxePVj8zAMMjEPaqybwK7jfTyK1USqZWFSq7a3eqstFPrqBmuPRmVjHiViR4zv7R3HdeiE2T",
  "key21": "22R32syc6jjtr9hh7isZj54fa2pKocSMDQBwuSRLJWMVsZmurD1XpfRyauA21k8W3LBi6VTniyQqMmzu8WhbwhHk",
  "key22": "4RvGhTyZ4xKH4pXr1WTAoC41wLGuiVD1g5otn1hWR7PJhW3TiJLxWvX9r5MLLY2ZcR78s5LqeTCnw2UhaHHKUnFf",
  "key23": "53mDadmfU4vAEgNw4MwpzCYFnk3pQe7h8i97owc4kUJEKofdqoeEfyCojCNdcN9V7Cf2zUWeWVAPWUo1YGKgKycH",
  "key24": "5krfpiTmyNkiGeVYaEPBNoqobqvVZhpe5qri8AGLfMiJVk8KdRKQmRzRtfYq6L7LaJpm6zThyZe9cbjao2tn1eKS",
  "key25": "2EH3GkTgSNfCAHxgmtpa79dKJDH1cmLTCW2t922u9rtS3GX6HinG8yR9Mq1AZcS3DGsUds4yxMkSzNvkpNzBJqkv",
  "key26": "2C6EytNr9BNuRJAZtT5aMVdC5iGf9vMfs2D6ykBJ4K74Us9HXTHsvd18tChTHQ2GaQyp5PvszTm8TfSiavihbr3W",
  "key27": "3pyMUa7qte8MuKWnGBwwUbHgPt7mSf6cW9HKuFP4KiLN1XqLqrH1JYutzh8SzM8LB12D2rYCXpEAWwiAoaqsujgf",
  "key28": "41kqd9GP45vm6gpTTR6V7D646ekQMKU7q4G5mbAE3AmCKJMBYe4f4AagUgwfjYoRLhB9g6ecMT6S3Y2TZRXSLw4K",
  "key29": "2hJ1t3n5LMzDVfiB2PtGJQj5FaW9wtuSJcxBJEo17nAwJbqu3f71V9ySqyFa2QFFRf2S4CR6Z5EGi74GQztpVW63",
  "key30": "3pyX61Cb7s1NejbsjuGUa5RD96AtEUPcZM3c6FbD8B6anMMJ3PBhUdznLgiXGgkasv6Ro955oTfUBpqjP6GZURQB",
  "key31": "5hgCYweYCkyThw4mGumyPRhvRK9tN5FuGLxRVXNebYWw2VBC7irvaqjUpizGW42YeieoDXNxWScMgwVwaorG4kUR",
  "key32": "jBAnj8EJNqmdw4ea9MZ56t7iqNiKbbWA8HbXjcAA3KhC9bVysez3AwYzq4vLcSDd71Mv121VB2yLByn9w1AoyVr"
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
