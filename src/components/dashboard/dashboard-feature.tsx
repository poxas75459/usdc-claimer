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
    "2soeGGMTb6gtvpoa73mj8VYxRK8asC7X8mknnNUADZQUCVG9zpa7BvjroNPUW2ZMdeKEWKtt71VLKDudnhfG1e8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22XsfL9pfVX3p22zeEAnX7pw5uwV3MYkiDZswB9fuJ6iYVcDkqawb5qhyrK33eXpeNdPE5M2RkpUtpFsec7iTeWV",
  "key1": "5QrsUisu9LLiQmkEGAUQAuRJaCeXaHkCdvoziQku3oeik6yXABXpAHpErkbzDt6dcnJhXxS1zzYW8w7N394Y7P4t",
  "key2": "3C5HDvHoT5NAHjJN6Qx4rPiS1G3cMgZULhDN3b5KZfmVXMUbeAEs1QRyDKesjwMgAaNNYQT4mMzqZ35iDM3QpDJL",
  "key3": "2TgD9vh7DgRX4WkcVbAZfRqXkm44bMNuZsEn3mo12US4NxBRLQ8tCLMEZCZfjbZGcuH9MWYKjcFA4Y4htBESeezd",
  "key4": "4SdVw6iPGc9ZX4SFfudWwsEKoE8rDPAcEjk35CqfN2MvrxnWnUHR1XverQpYFUrajQNe3eTBodzPAGrBGFRjb8gG",
  "key5": "4v7BatmmuTtDRSktwhjqUEY3m1ifXDEbxiAvgLhYtMMVwerQbcgXxvkomGjpEau7G1im89mB2U9GdnYceSGiNUXg",
  "key6": "5nuWYxoMjfLwqXjwehBV6riA1284bvcUuZ7Tkoo2SC2JoNzZM2ZeWxvbjY2CD8fybMxZS6HvKv3UxTtziQs6PD3W",
  "key7": "65GEifv9Bs7qsobhgQis3ZSyouBEAEZ9zgLajJHdxCZ3Y7c8ZqR1mXCddDmG1Rt9MxKzgZhakSxogpVKGGaAw4Pn",
  "key8": "338ihySGPjcm3YPTEixfaDr8Ctofifx24LLZZcVXDTVCoEDR5GNWf2KEyhEynriHBq9AAKGnhg8Uqsrv5ntohGRc",
  "key9": "fSHindV3DXMQXiMuwey3v67KygandjvVhv6r77kLVf34aGwRa2aJDAFfNNGeVnHnk3zN4wASceAs2HvMhJbDThu",
  "key10": "3WdduCAmDUFMs2g8gr4Pw7Yso4A4giqhKtpXX3iqTazy6Utx6gjAVPDif5bWSoivkMagyPebyRxea111E4HBmJ9e",
  "key11": "54NuuUwg3tmJnVPs68inp4iFWsYUmk8Kg5RWffZiRjF4pRQ26y6arjuBSrCXd8omD9ttj7sCABzDbgZK4j8W3jjc",
  "key12": "5nj1Aq9sPUVZJEs4R4J6wzgEVmm9g9auDzrAgynfNAc4qS4VqnmUZok8wAfNDqBu5tLfpyYivTYDMjVmrAXUzBE3",
  "key13": "2Rj1dRq2vahWk2SBnb8WB15DCsbUFkDquqWhBDPgBdXc3EY64tiePRBuo24BanMgqWtci8rRu42kNuH9nKZMSafX",
  "key14": "4Arghpx7gQwh9eKrxu2um2EBmqtZacVP1YUhPFSLnP4w6GVkSzHp7WMu2C1mDh7BwL6FNACfVdpUiSnp59D9T3Fn",
  "key15": "4NtTM2ZaT79vkKyYgR9YsStP33z6yoYnHDDRiAUWiPCLnXdYmQyL9pYvpKgPGgdjExP9AdW3QjBNL3ByHga1YPrL",
  "key16": "2ysEpHY9TJEZDNH4UrCkMGUBDsKNc1sdu3HZeFsoqVbQ8C4shBhMZzHzHZUb33fKY9fiedpkCKrUkv9MnVFJaRp5",
  "key17": "3HHhZhrrGsGkB33DzWaMWB3VFm4pVgymcup9dMJua1mmfko3yd7i4QBCxhF8aBz471Uo2b9R418wBho7SoPuSgsk",
  "key18": "5i4J1wSRjyx4rMwXpQDUiGrFTPy5WdkPJfT56MrkdA3uMnKgqhvvLk7ZosAped8RrZXvLvE6Jf86DRsyc2cSnobk",
  "key19": "5TSyzjM2wi1FiJeK92SfrCrR6sDyCZVD7Q6frPZjKdGhDUZYS921GP4Fy9uVfMuvVDgPaPbnhD1ns4qSPyiHRgos",
  "key20": "3uJ6TkYBRDB6i6EaVtyLQABtBP4zfjF7MVx6V5AhC6BFDSnHUe96WjakiZ5TLcZCsygAE3HhncFmVAfuLWN8WmZx",
  "key21": "XmGn7Txfd6TmmWdqSYDy8Dqj4JKHmvfHHS2QfyhmgL6fsu7JDTnn86CEZyvtLASAhX3CA1mErnD4N2jrZLUNu2N",
  "key22": "4zXLcRQe7w6LJNfkX76ydMbV94HiPygUCQVUZSTxpRjeetV39t1C7VVXVmdSDHjEowsyV6j34NtkVZ4GquLrWC71",
  "key23": "GBVvGx3EXjDKHwx7zc3GXQMi2dfYTHQZYN4MjgwUgp6ANHLgHd96tf63EJN6bxLUftu52gS37LVD3vAiu64PH8h",
  "key24": "2wExe8bcTChqwvb7h6SgpuF7qSVyu1DpLtHw7oqbU3G1tYC1dYaa1BdjVyokmiVjknaB25tedn7a9ArJqedUBFCH",
  "key25": "2zjDpsepdanKGEZNacmxZxcYNX8UJ6trqQVT2zvXQtPKdQqmagnTJFa6GwDH2YXtx95gTQYeh3fwjyewb5TJtHcZ"
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
