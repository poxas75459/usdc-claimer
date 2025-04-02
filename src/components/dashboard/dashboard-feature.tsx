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
    "oNhQzKWNW8B7G65VqG4tGkwvwEWJAAy3ikCocN7GeMkqFraSTFTfUZKfDxtben1fE1up54f3dErBjrmoNMuQk2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49wBVz1geNc1YyEykcbiTfpc6Ut4K39WxYeLs67QcxctmYVBiRyt231cyVx1ZsiAWvhjRi2gk7APMgFkGa6xC2Zk",
  "key1": "25MpTSC6Epvk1LyXkVAD3RkU2qvkzLhrQ7Lvebst99y862dC25JzrRRbVzUj7TujgscAxXDVmweN13D1SasvuVsa",
  "key2": "3Z2641FQEjAyCHWHrN9C5GotPBAEyHL81HQB8BoCo4amZthp9N7KuAXQj9UJyqQYt1sjPdA3uSJPo6iR1kbHDpXG",
  "key3": "3erLUU1RLRpFL9wkWHZAFBk7DoA4qk5RoZfQXqbmDok4jxYmYnuny1NfBr5qYoSYg6tVzzH4GK8vy3EyH4hRsR4d",
  "key4": "VAsT9zhQPmRgLSG7L2Bwq2YV8iziCzTwmQsrXe7ZikFdU4EEbpUd7PPLxdbCkewPcfCUajmsZ7rBzoGMX6rdgiE",
  "key5": "2p2DsgihBMGGYA4mKCtkKwvJDCgErSXVLFZ8wtcb3egW9LZesF74EhyM5eDJyD2Lbu3Ed7sJ2kb4NdwTLudUNTUj",
  "key6": "Rz6Ho1ht5v1wiGuAqoi7rbmSSNzcwja1zo8zvripQnwRSi7pjN2qQKhdG1qUvRJGpeRSXBVt2tCA9gL9Kt4i3dN",
  "key7": "3TXT4TA1QZSUsu8RBLR8V78mZeJc2YAmjz2NLL69gaM4eqtP1ThwtDEUxt5rG3C4wo7HZShHNBYmzr7DdXUENeVV",
  "key8": "65cVvwHZkKAeM5tL8rCpitjK9DHczJqCPFRBdF7nqB9CT1bxQCxjQjUkgAkKwh3DyCgzX834W7BUrvZ5jYiu3V4g",
  "key9": "4PrzCaJPN5XPKNrYNDVRMbjZS18wGqGZ2tNvQrZwP36jgYjvSqcvdzB9K3X7LiGNgVBCitbgUrjq5h5JRBKLCjwA",
  "key10": "3rv8xbxvgCZ7n4BoCjRFLrTzsLC52hdpavbvcpPw5Vq9HLv5k3TK6KhXBwDGep5gjTfzjA6S1Rkm98mpQ6mBQuCL",
  "key11": "3VPb9MJexTfYJvJGH2E6Ed9cDHvQCA5qoFfwb8EcTPEqcDxrNAW1o2Tp2VKmUF4ZuXyLYu5gnHbdNxxncXY2UmW1",
  "key12": "3bAqG4yqLhWdEY5BG7XsmX16sZKCDyMaok7AJ6SQ6nTGDBpnqJB1BpjpZpoL3QR1nhkhyoHE6jaxFFby8hYJnbaw",
  "key13": "5ftzUSnJkUQveM16WkLLFLBRSDJAim1wz1gHwmPzHiTXAszojaQY56iTePg2z3Yf5yR3sKUUGHAk1naxuy47E36b",
  "key14": "xJaAzz2SkTPLNj2yasBjyCNK5i29fEAddfddBaoBYi9Lwc6cvxfA1RpenUb9CPd1uB1o8xXpawT1P6r4Wv7qpQc",
  "key15": "3GAHUpg6q2hYBAsTC5iqA2URTjixCtJ4uiPQsV8YhYBMzV3qBsyhDqajBtxE22BQ7Vy22mJXe2AGpfR9EGvunkMg",
  "key16": "5ZwiFg2dLjbMqiQTVN9pSmGqQSY1eq2EBCfMiotomJ6TR1Bp56Gs6uj7itqaWT7WErrpPJKoM3jKyBzctFuddRSD",
  "key17": "3iu4jfbhRT4BWSRXZGjmZcP9nEz2tudSdxyAxRcuF1beR2DmN64ywEhd34rvfHuSR9oBVk5dcVcVSFVwU5dnnvwY",
  "key18": "5iSN38YdQx6MvkbRog7nHyad7Fh63j32E3uGT6tTkGHyEuZYSnu8EBNvwY2wJdAZ2fM7fRoFacrTD7pmjPTbsUky",
  "key19": "w83UL3zAejVZD6er9fLYfPxUaLqVaz4pFancsvi8XGdctPm4EAiBAtuM32KYTUQMYuzgeTRTcdxemNkRj7LJ2se",
  "key20": "4xE2AAB2uG2FzKfgyUTkQk7ASEdsRjBu6tNJqVSGDpwJ7rB47woJaRXhUxSaYAxZuKPX82wfaLiRGL8yomzQ9n9E",
  "key21": "3q7v8TmCmyeK8qAi3evvrNW3ELg46LcCUiFcvkWGFGTbAj4WkGMH4xvVmY87DfJMMiH2diqZeZB8SCLHwpu1J2pE",
  "key22": "4xLJzgFzYZxQXhoJeAyTc78gU7WWogPkAK56boxj9teVv1VYuv2Yei5aUsqM6uBLDccEPrf6vijHbnwYqwomAn9W",
  "key23": "4xwntiooLMVoLju4bnG4jMGzyyFkBgi7U4S5PJkHivG8BAAwWweVU9HeGeUNp9S2SiQYbg32qWJ1DtvWECwnJNbn",
  "key24": "3nRq1UKNjUWnfPB7Yb4HZ3NhHMsuacdcydRasj9PFg8BoLBw1KubNebk1YsGze9iWra9y8apM7MMNqK3Qgx13K1i",
  "key25": "2exQLdx1uyw89iQ62wovCfMt8pJCVYMozn4Nh5cU5amFJokwDza5GdCzdb2E3NRLRXDiNmYgCNETRj4mByECiu7W",
  "key26": "4ky1f9A5PP3S327UfnDCE7wNjV4SkctwLXSExbgPHWbLggdFvwWpu3DiNzPGhQmA4gsW1FCXPQBXRjtTBNoc4mR8",
  "key27": "5CMKeqMqW7pgaNxNFSJyMJ8XiWZBKX9vK6SEhcZEQAHSJ8Uhe3rBta1gnZsDDcoSW63VYZEZ8qNEN8J1hpxL2ekW",
  "key28": "2474EEgZpJUJewoogfLQCQc3hzpsFSBQFDG9nkJGqZsEU65KHsJYY4puEooXNbq1WmzFeiAYnW9Qmo5qbK6J5gjB",
  "key29": "4tYDFX8Ne2TWm73zG5UjUN9DWY4TfLGYvcXnx3TUM3pA2C95af6NUhgH48dFMESDDfDvFHrUfa4CSfnPPKhXJ5aF",
  "key30": "58hptYju5xBQi6kjnBtzuuXs2wLMpNP4WRfk1ZbJXNzL6Bvb7wJJLxdvQibYP2YHU7mfkFCUPARVVnKNupstSGAV",
  "key31": "2EhFuqrVfeFxXsBRh8BeAvgt9qHRoNKNSZK2EUAyXXdzkYC8KTrGagF83UrcTgYm4JW6oHUFKVtPGEBT4ik41icL",
  "key32": "r2teadgeKRuSUe5Sif8XwiPTCefQJyhphvQfw3R528wvD7FuUsMuwNm9kwx2vtmgr77Vdo9bsZ2gzCfCBWn8GVw",
  "key33": "4cki2Jotyi3Ac4tkFt7YLr6AbteY5JivK9WAKXSgcaCCPdjKAtHXs9GXCt34UgMbsGogpHdpVS26Z1kb7bJND4Yu",
  "key34": "5yV5XKrrjYd7MzSP2d37UHRf1qVBSLuQpr54uoDdRNYMniqXyJtbtwkcMNH4eSxDCob3B23XNc3tuLRS1VQjvAEp",
  "key35": "5vEahGCq7DXPjESrVuTgmvkvKU5DVixQ1brnPfLwxXswNkoxDRnHuFNHULNBG2yxpz2Ui3n3SbpD37WgUmXpxY8X",
  "key36": "34PKnyr1rVGRmrvYQY3wpYuenWgzEbETzkSwiWKxdB4SgKQnXkPYYrh6ivJJgFqnMbcaTSSktTuxNPTEhLTq1AP9",
  "key37": "5cq7QVrQzFRgA9kjXC1BfwDiTY3ABLPRG3bBbFdKzfBqBKUAGGVveLtk9bxwF8dzwaLBg21MCP2L1F9wkjUD6QMt",
  "key38": "5vFAf7Q7vs2JWFRb3ohMx7sKJR2e46FFYgwtQc9K9PxzHBhmZonbq6k2irrfcLaMzZRLmuL9ShuY3r27bciZZZvE",
  "key39": "4HLKh5EWyinyotS6QcBDanuacuyEH63VfwQgNrr2X5BZ2wHmSWWUd4x4jXrPzJqcPzoxnCz2rNLWoLJHHxL8rNGz",
  "key40": "5pKCiUYt7up7Fv4EM66RQbue1pcFuK2MF7TZUKNJ83ZUw8mWnvcosYkvzjUdt31Wtphg68kd5t4tBZ4H7h1UEBR8",
  "key41": "HzxRt8GAz9eotUMLDx27xYKKiap81oKXvkQVQo6kq2jz8GybmXoP3iHAR5EUZr1EBHySM9YCEqGFs9qYjZPga9F",
  "key42": "4XGSTaCD8bWd96aukDf3yhJKw3oMF8LfmMWB7HrkmTC43335MKt7kGtpa5cpsWn5hkc9zF5SxbvVbbn1KD7VuGzj",
  "key43": "255KF99ckQ7W8zqpGbnjk8cP1FV8jYtv25pfzVXupWp4AWJuEakvGuyevp1gxfGFWmjBNH5NNRj1tm9oTEx5UpoC",
  "key44": "39cAmYWzcm2j2SG9aq9VCz5yNE7jMbwaxBuHZQuis8vkVNn3m6UAPQ99jnsCNGrHPE7k2vCXhamtctsWJFGywyrC",
  "key45": "2GjUv5m6fHiYYV1DFTeHMjsCBbja4xs6jVrmCq6Vb4hY48PtP9PxpLpshZdp355vNNK1tBBM2FcuBXN5w3Ec9tPu",
  "key46": "5Cpf5CQeZeN7nzA8qymXuzxfHz5vMtPWHjLWoaULskkcJgwPpGNawuBUjjYXFPHo9cd8Vgjg1gutgzuvmiruHThH",
  "key47": "41uEpu4QrArrwAukD2JzSeytCZyJDqMFiR365ecQQpsuMphNMAAyH8bi7GVRrpRSmkCrhGVMixYv8TsQvq35Qdnh"
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
