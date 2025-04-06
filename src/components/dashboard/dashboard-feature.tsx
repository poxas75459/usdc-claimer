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
    "3gD9mhNxBZqtk9caDMSp9xzgjT4aQMvG9N3ZgqrVguuNsYM5vuhVJS3T6Wc7U6BdiKBPQmvCoXQhVNd8FkNgi4gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HHqpeDmsqBYvU3a5ayd2xo2qfV5i3y3nj7EiGSmXXABb6KRjKuVJSdJfztNjAVnsxSZQNPNJpkPpUDaegJ3EkCq",
  "key1": "2c5m7ozncxZCERA69WexpikCva8FG5SsxexQ7FSumcw3RNKLdp3aJvPCyx6k9JHm53sEw7GAtvM3QqPwzpfVx2NA",
  "key2": "2wDi6MNaNMpadUmtBGQR97fm2k6yb9KMnUcduESfoKcj167GJeCeKDu33eBwsLjwYA4rwLk49n6wiKX1rZKoepsB",
  "key3": "4yfpEnACVxAsfXE9N6TyG7fjxJd3wcfsE74kmAXNoCeA1vkWqBhuWqxCFknYeMYcmWzyAmdigMqZYpw7vw4mN6bk",
  "key4": "4vnc7Yxy36YAbMFbKc5B2ThPn6aCwzknVFcgudGyrrBDBkHDMEow5VJ8caHWXQzkHpATACVYPySmierGM2Ge9dH7",
  "key5": "4LxpeZkyqhkAJYnV6uXNdFwCcoR7GDfkmiU2bEDG53L2ofxsG4A3oN7RYXopQPiQUb1wXY7rZ7vfs5m69xN9wS8E",
  "key6": "44Ui2CV1x83LZ4XoLv78wF36WT8HRGLugh8Yz4ZQiy2AF1ykRHbsUHJ17NkHBBnR9t4kTQmFxBefxQbDdV4FTQef",
  "key7": "CkKW5CSUnEufPDp1QDWdfikG52hr5KYqqqKuT6mrEHn9997Rfv8kc6bTHbvdAfJvLw7gTmgaP8TDAE6iwPUD4t6",
  "key8": "227KVANHTRKxJj4xK3NYZB9XMSWWzubCYQwA1ffUJQGPbWNS7vWbLDphMrrfPEeJbJ3m7kV28r6r2Fgw4Zi1VmkH",
  "key9": "2Jixzzr7vFJ8z1PwVZQyeRpF4NoHU2kysHU1LrPKhfE9AA7PokajJJgQxFbo2T2jJ2JJ8PyTHDVNttRqgGe9fHF4",
  "key10": "5pxiiNQNwvduNb1t8fuuqgyhU1W8kxCpSNvPeLxPaaX6VkwW4UsNNGAoigntbEj4qL5Sw5xo6Cj39tWhCwSWPayb",
  "key11": "4dQwDZcDtMoSDCYWLaGmMTPespEo3FF174m7vNMut2i7GqAFq5YtpmViFQ436gRRLPEcDukXdKr67Vuitub6ZtDH",
  "key12": "5ag7DPuEwGCQcNQbpgJBrAAvup1Vaxa6b7v325oMHzh1vfqCVrr2jTga3P2Rc3Gsne1Dyvbg4iYUzjjwzwQYmwYG",
  "key13": "3FJn78jmdw6E55JSRN6cKT9YNLdJVJ6xdaQUVu9eSqY3MuDH1eTcHY1jUywvGySGf7z8omf1Yd3Uc34i4o3mAba2",
  "key14": "5gvLGchiTzjnHNULy6H8SmbQF6HpqMvFx6gVMnnKLMaxsSngvmNNR2qeczJVFZtR6z9mV3x9hBkd8gLBB8oYAbJu",
  "key15": "4FFNxEvpeDth3dJMvxwBkSGWhHdM1PunQSMUAqW773yEUSfmUYEuyX57DznUCycX7P5MD4BjnymybjgQdJZvZLqD",
  "key16": "3FvyijPoKd9VEvSiHiioU1pbd8GCmDXGnUfANN37rnsePADkrfRXGkvAq8UJ9qhNt6m5ksdW8zvfCYMZteCLzZZ3",
  "key17": "4iB9nBRrqwsobkHc14QJaymELjAGtCJv5rwbA2RPt8VPAjVtj1RZ1219c6eHjd9FGkgfRY9ShKAQ65A3sHuZTL1g",
  "key18": "3QHrFjtN9UcFAdL3ESDVozsjtAHDXff1quBtbLRo72xM7qvoZsYivTtF5NJ7NfJNfPfTsjvPxLTtEqBQ6iv9FkMT",
  "key19": "5CCmfAFkhD8PV2t8XhpyCb8f13iiy3JL1qg8R6LyRGc8Yz1YBdhqJkNWAyipApcApcQbd8jhktgUr1kNYFwAiQjo",
  "key20": "2rEcD9axHm6k521e7e72xaP97uf3kbrE5pYMuViChmdw8x2cSWi4uW9EGmD1timw9LERa4ojz6vbmKvQ44fYUaXq",
  "key21": "4iLjTpPk7pghaGp5phqodFJ4S4xhdkf241R1wvBReZqxWqK7d3gdaaNZM8pMVJVSuv4P7zj4ZxKxPVpbbnDmbFJy",
  "key22": "4d2vSRjVcAL9kDqqkDimGPMqfhn97AvWjrdsmCvhgV79LU2SHLAuVe5WtRwzoGtPf8kWSaU6snQKGckVhBLK3p4F",
  "key23": "2fkKwZTsY1ALzkyvmSyfvi9zwssLamzadKSJc7By5N9kMJ2sh1BbP8MmQN3t17ty61LuKURc9bDujrA16nvq7T8B",
  "key24": "5U32WwhEN399moBvf43guMg94HTW14Ho6LmP6pMRXJrBNEpoEPn391fu5ozBzmNmZWpEp2DiWW1FD9qEvmgeKUkj",
  "key25": "kiKqvKotu3dQWDXYREiwAz8Luga1arxJHsghcwNedJtDqRey7q65zggSq3p7aZyiF6y7NEa5dQQ2WGo649kJveC",
  "key26": "4H5cZf2Fq2XHsMbhgKgDoAyoo4RNFfo51mD3PSDQw1JiWxNvRiZtJoQYmZuW1q2owuTfF7cLFkGxVMLXWEomXULL",
  "key27": "5tEr7nRTbL8fvX3YBaUiNrAgtvngdR3tjbm4ZTMbxKaNyKWWJL5VQeMHevNxRy78YJGpMizERBq7JBQPz2LwpMN3",
  "key28": "SVXuXFny7JGWpQ1P5ausF7KaJZpux2b6hrQzYMV8hKz4R5H7anxj5sZYxRMvF4MMFwLJsV7madDZkJiguX5aBcM",
  "key29": "3mHAnJq9zbyKo9tcNwx2oALUDYw8ErnzhUa2Cg2yBdVAyA4F8E6dVo5bqFvuKa3kK4hgSr86AvVNdmAMzjBe5evR",
  "key30": "tX6aN3rya8zYYdMPQeACBmS7R2qXn9Lx1umt68oUjTneLSyP8i1pfE14iHWuWfFnZ1D5V5VaNT3m1wnBw9gHzuN",
  "key31": "3JC5E3CvWWHkU9RhBa5PCTS6sX3dExLnMVNkFQWfA8hExGWYYyRDWWbidfdxRjZxBNWQpLvj4VhKWiSXTz2X9qhP",
  "key32": "2aYnvZsqYYFBqQmBSZScbhVP3U1UPA5MMnZZEZ3NBdKt1FYyfCDAHGn14uoNYDqwDEsZZQrFp4uUoH1QDU9N2bDk",
  "key33": "4y5a4vKBY7kqV1CiPwu5P6BmVUWPuhB3NjMaRVWZF4uAb2aMhLR2vLLY8QqLY2GmBBV8dVeQRghkY8Tro2zhy73",
  "key34": "5qenQyVPCURD1f9PN6gfyoBDwTDobhZXR46DHtv5yhQkR8abCXHaxvTGjenTGEEGP9gRCQrrBrmqegMfmnBeFAuP",
  "key35": "4fa7FX8rDw88LhUBbdKLzThwe7xUBQwUTM4LxeE3dg3JZ62dho1paMq6hJbY7SeSF9b6ApZK1pyN6VpaGSSG7Mtx"
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
