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
    "4W5y4z4Cq7wk7omTmPSNnPrubQNuHsQHYshSg8UuCJeDKasF51z9y1N5FP8Bt1rzKVWJntEDJfZwT4C5AcZ8rC8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "468FoC6yfzjnUKtEUej6SDwD8jFuV9FskpaAnbhxkJsH3ERFGWwbZ2kZCo6CmNkGsQXdqD7zZvYevBDtT3PofgyX",
  "key1": "3gzjZadH9krXSU6bYD5vz54Pk3MfJdqcNqkgEeLoa8Frat9mQT2CNNYWGr6PyHJ5FfjJd3aTACkuQ9EBN652NdcW",
  "key2": "VH6o5jZTyf4wF9As2ALRWeQzmUbkepQXLVxVXUfVhg4ykebWoeP5tuUEfiz8HK7U4qT8kDewknXB4jijj6ZpT8i",
  "key3": "4fL6HfnPP9sH54FFheYo3dE9JhoowCQKUteSPUXbXPi3kqmw78rFw3yf7t2VYSxsZWdiqyNm1GMZx64DPj1euqi",
  "key4": "wkt3538qB9xGfyKbd1ak3r9VoS6DUWdUrN2ExrshiruHahjfAysLC2RSUdPva4qEnhR58JpYsHaaDjAwvCJuYA7",
  "key5": "2zAqrEPvumWzhDztUr8efRrzjG5EsgvXD9EK9TBq1y7CGNFkJukwwW1kHA5RswUgNzXSjHU7LraAhg1mY1VYnSmH",
  "key6": "4dpBiK5ZtcJpk1SoQbdhstsTVG3K8spZ2ruP21HHSSzQhQH8ZBBpeD2U2rnppqGWa8S1fz3C5tLxSyGcp5Bg8nxi",
  "key7": "2DdttSmgYHUiGfERYFxKnSJBwCMHjNDA1Bc9A79YrvC1yPPZHCpiF2LHTr3vZXx3y4u24yQFKxL8BE9ZgUBGx1uh",
  "key8": "2FY75pG8ypk4PAcrJvHDoqWQQpnZZfKadhjtKnjr9ZqJiH2WFnGuVdxnWKVjxHyVMpcXDm5AKNrdBk7jCDKbuRb3",
  "key9": "3Sj9GPGZ3bajxmm5sRfm81JarY9qwse33udst84g94Ur6YPyhSr8QdmNZoGfsWQkjCuCYT5caiFFHp9LSovJD1KG",
  "key10": "gpnUFCeVf2KtSCgQNsX4rjf5oWzneTGndAFf6apxg6Je4ew3r4MxGbANUymaVnnoAJJ75hR2qFmMib7QoPiyktA",
  "key11": "QjeYduADiUngjG8zohGJGvZFYX2sVAN5G1sqfASaTKFt18uyNPTJGFCnnk7xULH8eV415K7PNEK9CjMC6DLZQvT",
  "key12": "39H9pMoZ97qpG92UYqUBahAh5RDJfie399A2sGW8NZzrf45xGste2xLJYVTTfTihj5ukbZhHX8BW3j6YZckSogXu",
  "key13": "5Tv4REnBvMTfAKHRVwJWLMj9JVQKtyqcjgAim5eGXEXxnAmkHc5TCdMEoGoNYVRhXaydPueAXDhbVZ3qwfL4jbFC",
  "key14": "o8Qz2oHfRfNvsKmhyxvK7iD6ceCKjPMsDG6yd8Dji7Ai8XfFkEid23foLbdgrubjVe7BfgdMrCtwNJ2qufgrBd4",
  "key15": "zSZx1LAZpiRRA4r9Rmqnxjfz2oDeb8kRy9iScT7SZMXZwzmRHU6e7c8mzyLzXpaTgjbNKkZakRDGELYzPhhNevW",
  "key16": "4jsSjQodH1vNaa7x61tzVRRSzWdhBCbfTBGitFDdkDaX8NhS4Pf8ELRDM7sRnjkq9sUGNNXoJGjNfZvNzRbAVAgw",
  "key17": "43Srz8Ayt1CSe5saiKxEjX32wqNHXYoKQZhgKEJpMPTpSk9n3gNrucnr2zNgmj9jwrrgtcPvWc4T4fwMgowSCv8b",
  "key18": "5HoSNFs46e7mpUwsstNa5K6nmSHEptHn7PoohtrwvC79BT7CrqQ3v79kkje7isUxRSPGrh6accuWzNua8AUWQNMB",
  "key19": "3wD2Tdn4TL3xhztv9dvvyZkeLdU6RftXGfAFuTgeeBKQ3a2Bv3AM9gJc84sCFdQbCxjw8dP1Ktkr65XKmEmqgqXs",
  "key20": "2cNe4RpTwNPuZZDzZw21cUW4Nijrm2TKBFSNvMc2uabeWLUvtB3uo44gYpx9nDPv9XJj9KRCKq9zmeXk8pHitCcg",
  "key21": "4Dh5fFTFV3CWfB9ttNusGDTTecjnPKG3iSbNgjBYqq8jx5qp7nrdX7TDG1btbSHssBBzzXZCPy4Z37x3SvLZvoKf",
  "key22": "q4jWqc13jdpwon55hwEbDLbFigRfXQe9pB2GQFufDmNRCkccGNFBW8f8EGN7vhttsq23qjLxg5DCDN5CTG492Kw",
  "key23": "5SzxHMiRs7uoinywWAJ1k1EpzchQjWWSmugwY1njH77ZbJCmsMnEZdp1xi7312aqRDZf5aLMx9RKPhsicGb6QPYW",
  "key24": "5L2stCUN5VZN2Duft6cRqcLWYnMAM19EhmMK788ZZEJYpezwbJwXsLvPjvHLHGDxZzCwhtGZ2TThFbrJiX6w1s5D",
  "key25": "eFgW4iLCN8jzHLXbquCNUGcMDxLqDyYDfrLhq9VEHWfovdVUQ7KH66YvFZfSa9GnaxaYYeUbey3E9QQVXrjYY4w",
  "key26": "64fJr9WLFwV2vc2sHjXr8deUJJFh6xX8veG4vnrV5rp9euQPt1ndd3DSiq4S4LXZSwtdPd8Df9LswZXcJz1A3hn8",
  "key27": "5BHw16HBU2yDvENq5GfyMjqhuFoKJeFLgQgBjC5L8SrUrTMAxATmR8tchPWJThYenwBWJ7LAKYYkg39KYDHsABh",
  "key28": "4ECRsQG6dC46hcPrJ4gtQU37EFxyDKy8xGFRQAsAmYQSvVEbk5jo2pybUQiQx94oNxYrUy6LTmgrCXJyUEEkRaQE",
  "key29": "4MBu27GXMCpXrFpFzFMC8cLdARSSHN4jb2AJ6HyaXnhbrQ7tAxcqWvFSd1t4UY2QYiCNp4JLV2knGbbqaBaoZ6uo",
  "key30": "3fNZsBKkXSiRhJcP4iuEebuz9SjL2Fe7MbpN5LqstEGnRCNfVP1hRr5drXuPTpt4yh5AapFmjrNqLLtMbEWGbymM",
  "key31": "5rq47YgNMrjkSxpys52oLBHzZ2sTJxwc2m1CcLTn7KUnNAzjMb93cz8X8AXiB8ZdndP7Yu8omzMGtcwzxVuqeL66",
  "key32": "Cgfwk7qbJCN1i4rpXYRep2e27DHGjxPvkPyz5TMxKqPdPEbsrHQCZjeBf2HrzW8PoZ7rN6mYZZobZ6z8n2WBWDT",
  "key33": "2ztZhFsaKeJJTxCygpcuTj6A9AhvtnmVbFNTkw2T6SrpDWVSdzZz2oua3yePc4kJSNA4VeF42mnJuFdqYJP1YHs9",
  "key34": "3aQFnWdoxSKokH29g3QoFtyb3Gs71KAXyM8tgZEA2wH1poDFpCGtPzJBNv4231Bw4SGsTkN4wCG3YC16cZ8jnmKr",
  "key35": "XgTrtS6WjoXsHU7pYQDiyDu9gngyDude24RZDfnCpkHc8wG21SgoE676eKoSQrZ1mk4wKEDAXcuG1Yuq1oVoLaF",
  "key36": "5ays3RHx6KRhBnyhgYuB3BibJ6mfqWbdRpBvxJYgwtnjsWVaR3SWGZ142gHQmYUgvYK3TgNHtNN7NZVKEnboy95W",
  "key37": "66AjYD4tQpwCrcN3Uth4mh36ShSN7GPgC1i2vELHDQZkjKJwp4YdrmiWpMV7H7zH2724W2wUYnS88gcxNpMT8Yg9",
  "key38": "2eCMUWjEzjoqJZ4MmWgSgpScURuek8CDEwmBufbtLscfwDwfWcTiktQAgh7VnwUwhNtdKxfV6LKmvxrZ5YeppdXg",
  "key39": "5YrGZzdgqjCU399nhCzfb6ccXATQe5dd8gKtWkfqGzEYaMd8YH4Rk8TVnh7JTBQdqja4EECtyaM4vZjZ1u3P4gQq",
  "key40": "3avt6hFDxFJ5ceFdDaHVfGFxmcCsWQe26yFEoA6mVK1mT4caJeAzZ2AP9tcuiWfZKNWNBKMXxypip4FJBxGv8Lz9",
  "key41": "5hjkHWHZD1jfkVSGoQmCXCNNrv2rUWWmur1kfgQvRP4VXRpifmwFieJ8RBLBhsXkA8T2SPXPiceCCnGcR5DThpUS",
  "key42": "2mgboM53oRoQY9yCKn51YhbsR4fEzQJWED65DJwCEZx1Yu1MAWsMsyeT4CYBwWBpZMUCMGjvMtjEv2BgLBo4RBxd",
  "key43": "4UBMibEbKHstRCqovZdaqm3r5jYsWVH5FLS6RzLE53WWf5sYbA8iUQGvCppFe3YkPrWEDTPsTEoMmrH6PDDM7kVa",
  "key44": "5i8KHm1DgarFpWq47bdxxchko2diBeZAu4rqpaP8sG7KTDz6cL6ojdwLb9xXUC7CBDosHuWHemXQ9TtJ52e43uXe",
  "key45": "52UqmU1AFSYRNrvpnKuoWu9BGBruHhfCQBhuievb2g4HmtcMGPNSKBa3eLAsBPxEjDrH6vUxYyZTn9RxVoSCTrX"
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
