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
    "5tRV843MtqVS8fX1o4pF64WaMVXyRrFMf23g2RVKwNzWEbm8eqCPq4ntG9zbZJCMoC1pPk9LM9MPQj7LBkkfgRs4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iFCW8PCYbY88SXsB8Y51HVTZbpHXigVMedBtUsWRvBuEph95KkqHuoTAJQ6kAZ2DA3P1Sxjd2yPPjvjsYKmKYTg",
  "key1": "5MRf8yygMGuy3PkXT6e5hUFgx1NdK4CXeP9yYP4jwd4fCisuCqJgWd9sNEMBAYeMEziTRHdSZ8vQV4iSKcLm33Yz",
  "key2": "2XU9SEqR28tr4uC4gtDJtgwBnoFsgd7DusaWGeZk9U9y7xa6z42JoJ51TJhLMATMtgao3smu9itqvs8piBRzFAcu",
  "key3": "GepBuSAQyuMkR4vYGwZ2xHhuH8FLDb16KG5n6gbue8nygVBatfTWCkDtDcbsF7SjZ3vZJdVKkWriBkYswEPQc2m",
  "key4": "3s8zJ5jn9rXCocntyANW82ZXMQhD4yan54Cka1h6YLcoMRSh3pu9scu61BabosNpg1zjUCRsBUvX5nKzwBLf6eKB",
  "key5": "5ciK51ewP7gxeL8WKANAxGZntcWsjjvFRJeoPUD1WJXhGLWYUJ1q2RimPohpbXbhs7p1Ci77mzkGZigx7Ghkb52V",
  "key6": "5bdDFe9yTY1bNSvndNs2FD1rBVADLhdAQ3WEBWik5Qw78xSrS3n42SLJ8myFE6yhm1S6925Zf9HZoQ3fYwZMnbL2",
  "key7": "59iTbAFQU8XmQrCYnkdNwEVi2YoomBTifR7JPwLfVMx4b5kRrTTGXDg6P1RNFHehijohTMG622rt7kBBT5xoJ28B",
  "key8": "4Vx2r7Yj2CVB2ykWgiGFXhmPvTNEpRbK9CNRted4PBWSsqQdg6bVCE3w4NYCrQnzY3pJCCVMcvczTDYtzWj9jXc1",
  "key9": "3MrzBSiNSFXi4dG198Kt6SvdmorjE1Y9UCSx9AnjinJ1WwdUdETEYTQRCzBUshPHAo953o5zxyF5MY7jvV7LtS8z",
  "key10": "4sXUhWkkayMNUo8jhJVbTdrqHkSkvQBTSNfQkt6HHrcpKfTqMHS7AYJYvyAUN53m1koJ542BkDWSq9gUMPVF2uZS",
  "key11": "5d5WmsePJhXvujpQzygFEdJqesvPhs9mqjLAja7USCobJYVkwdXbQWhiA1jdFYcoMpD5GZve6N5Jt693cTxVvxRm",
  "key12": "3mc8aPip9ikCVd8J6LRnJ9mT9SxDzf8xuDjMLTxmqLn9B4yKuHRFK9UrT4PL1aH3iBMwiKsAebgCUN745dSe1wFU",
  "key13": "5i8uAFS5comT4FzW8EuewF31FVdjxNzkt3MU7TWnvWFQwLmPDhfmzXuZvx7jy7UyZ1BxtUnyke6G2hmyQZddpFC9",
  "key14": "5JrdqwNfyHE4awCfJmH1XKweH7A4UtzH4MYmyiu11myRckPiAqGjU95YKdc6s1KPCFX3qXphem9jBfJEiUjgRXvi",
  "key15": "5nwAPSA9YAJMHhXFADVZzSZQzS18poJtkybbi6cNCDpHRPTMj2rbdvXAxSicK2zXU4w22a5iG8eagMRS9ZNwB1sA",
  "key16": "2XkQg6pNHnZsuGU2zawidn5BonZF67F7UpfZns6pbKf3cFUnYB2CXGmYwn844dAhNpZwhSgdxE6fmrxT927vMFxJ",
  "key17": "4zLEeoTzhspsAjui1LNDPAQxYVJyntb4goZNJ2setbu7te2TwZpjPE8cPkjwM8w78FZteuPuuYZeH4wbyHGDeQWR",
  "key18": "5zdzfnvXCZ1k3ubNXVZ373tjAFqT3tsix1JibPfH5zQG7u4rzpvrf5zWbgqSgCjvCPshWtKtqAnecR8z5BwBn99u",
  "key19": "3zLWUDmyzZiizsuJm4SSbKeQ9meU3rXdaz1WvbVq98ndDVfgyq1Lke7AHHkQmGFbcC5vkSdMkgW4cPjqExotHT5M",
  "key20": "2o8w1vx3qLt7FQ8D9G2vqGPTLmepZkMoSJuGt4vPGJcXutUYdEnoy284ecCBKzfdLua9C7DFWA6KJwyectHRp3i6",
  "key21": "4oUProFTYcUvnTfHJGeQ5qVTAsEdquFve9tkiQiBewhLYPBrJopr41EnfqGEZ6XEMECL2C5LuJgN2HBhN8oLm4nY",
  "key22": "4ALkYXB7BuFvbxBzVZ6fdRUrZqZBHyaxd9jxWb3cK4ftfAxsyhvK9YBD5koXHPHGM6u8Jbjue3kcBj7q37jvcWu",
  "key23": "A77WjbuDhcgRm66Wc2xuMEh2TCAHkpBWWXzq7vu44y7wwDHa4H4QyuwrRvkBh6cc4xMFEMy6dp8113mJK3SoL73",
  "key24": "5ZxUSYQknTqbRMciSTmuFWVkf34AW5hisnrjKGSaM13TQwFSbbHRQN5Uy1M2sL5BNKgfR8QwEuEcHb6BajwSwxAL",
  "key25": "2tWQe6ZgYVbA6icsTA1WY7iT8nrc9fG8Sd7nrnRTvashzP9BkyTDFzWXRhR5bFmA2nRWtnTeBHkgKz1qJoJu1zmz",
  "key26": "4DchwdT4Xy4FCA8PNpgJJhbEDJHW97XQXyX4GQQm3KVw8xAA48omEJH4JDZE4sawTAxEKxC1xttUymAuENAKTaCw",
  "key27": "3T2hNnCc1hMesnPUKSHaPFMD5D4k3NZtc1otQo3FEJN1FiFThWgcsA4dV5m1QF7oTpNt7aAH53M2ZK1L7YngrUFy",
  "key28": "2BXQN2G7vKTG9YvS5z5wd6p1AkeHfM2XQvfermMQSMVErP9qpvuw6VhLDfnghDmLkAJoXCadiZrrRhfL6DjW4k3T",
  "key29": "673zndyQMW417kHwuyUABthJMMdLMAoNujyoS5AYkGBHzq9qMUpjG1AAciUQXY3CW5aRRkucaspFGAE2bpuMCAPe",
  "key30": "2R4M69kEntDy3X4rmtewybwtYtuVxmtAdDfgLPrJyAXxbypijrujKG6cbMTEVYqtJmHitK8oYriNJwnXEta9oeE6",
  "key31": "3G6axEjiALpfFcLqRLtEsWPoagWwpgiUeT9M1Q5T3MK3aP96FaQtgVsRLnE4VwJxAtxMAxctTWxwwBg46xCLPzrj",
  "key32": "3MKZ79HLFfmfKU9iUVk1rDhb9mdfx7dSaC6FNgwvzHKYU18JGmcbR8NvQ4MKDaMTmVAbQCJf7jDrBYxppErmqNAj",
  "key33": "4tMq3HmjQE9tPHJ8cB2LPmo25Mzo3GNVq5GPrFZzGC26NPt5dtN1TQuCPzFALev3X1XLo5AvUGa3FeGovgNWUkiJ",
  "key34": "3jZgoxzUUmJDYViJeEKxaeHL2Pa1BydstM1DG1cawx1VtaeDgfFmR1AYUXnREjDgRz7vmMpBF4oDxjh7PpwMQeC8",
  "key35": "mb59pouwmdXykpr5FHwqQe4GCqaBMqAMSuJrRBm98Swhmq6enWeBFMBGiWXNbHM5DdvHjg3h9Rtu1PNm8wvHPLe",
  "key36": "4M5Q2qd1hwzu6mp3ouEiNbsEewjwd4xWTt9v2SCYQKfbVqAQ6ggMRHSMZDZq2jM3BvmXUQsrzjCuFoMxJU1bo1Tf",
  "key37": "34gchoxovYaXskpdYfgDSLKUhJDR6aSPpjHxWxvr9SjnZvoDtYS6M7SdohywSfb7ZuAsubD3koccvz8Lu2XrDHpB",
  "key38": "5vCXhTWR4P6zx3eHfWd7ctg6Fpebi6L5v7nwea3bdAUkcN1Dfp8vtk6mC6qx9knhDMemwCkVQMVbKd3Z7HtmMpas",
  "key39": "3bpWtc6dmyTa9eLCtG4FYyw6gC2bQ6xjpMak4fThFnmsM2hYfNoK5Pcqt9Ni4cZ16hFBLiFhQcu2G2bmXkg2RaKq",
  "key40": "jpfPysPcJwUAEqGr2xnD3qDw9qxhu2ZCewScYALF1ZVbi7BwZhgeN7nHHe29YxRxzfQN1z6WAVFYVZUE68UwZga",
  "key41": "2io2jVuq1tFGY1Zmm9gmef4tRAcM4L245Fnq5DCWDoyK7mFFG13qvGjEmNua7rr1QuriSDVhpk2pumBM7eKcjNoH"
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
