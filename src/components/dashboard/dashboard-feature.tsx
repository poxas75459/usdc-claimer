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
    "2QeEYoUpFM732AFqAJn8sc9hLGGarDYLamrEAq4gHdNFfo9DuN1KrABdA2LeTzEo5aR7JaABaazW81mjnNoe5FJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QExN9boWVqQaSPJPfsSoQxB8C6TkyXbREVSAzy3qJxyS4QWhmXrAh9mKhrT8BXZjUnMC1nPEd4s5rDVwmK1kJoZ",
  "key1": "2uJRcu7Jfim2h11VoJhrUDzBFFC2NDkFureqeZvdfqkaS9Hs8bt3DLFGYsztHUN1MnqAv9Tk8rxU13xmYmQMGgeF",
  "key2": "5qzWJ94wbfZDfcmQU9KnDdnRHC8WMcKNtsGbNPh26z8PvNgLSCCi63jgejffHxDtoNuop19rfYPjdKyiSh4utxTg",
  "key3": "5sWJ6SJPJMtDmCKhr7dUzWpRaDcGLuagjDQZ27bSsM2fKQz7g9Kkpkqexv18ikeTPpyRpzwwGAgcC4pv9HghEd5p",
  "key4": "mB72SN4uEtmAEBEN1XUN1WN1VUzJqLBoQ4KgMeod23FGioeZnxVag4NnsS6oP1iWR3GQG3J7D92iiWFSPYpsMJW",
  "key5": "De11aoUqFGR3dWTQ9JHNUjchTY8dkLebfSJS5EfiR8eE5rARHSUKPe1ubMCif7ET7MuQABN8SESr4TVkcsGQKtW",
  "key6": "4Yi6quk2fVNuZwAygqeKfcaB1pvoytTznTQHMDNNMNjSiEbGYrp5afj6si9jJ7WcZkycWp9vqKsp8urgepuQAY25",
  "key7": "22kach7Rve5vdx8GcMgy31eN5KZXynPL3R66iTjX1bXJh7ZpbDLQL7YC3Kr7YjBBf7smfbjxZPTQjvA6qiNbWJUy",
  "key8": "BmWxLWHgmijB2zDCVzhDansHPnhCgsr9Gnp9dNyH9rT7KnEVqiMbxa46WAmQTNaStswJv6F5SK6XqS2AV7PPV17",
  "key9": "4X9rfD788w8Jn6unxp96ebQTMNL18szGG8ufztJK5Yg3brJXBZqP4jt8G9yuYDmL9k6s8TtRA7RJoxacC9oRCsdH",
  "key10": "3zk8CFCanaoMccfYJaxwGFMEYzSWoisEoffP2DDjeGt6cLF92a5wfesBj8tRvf3zWY36Pv2aRYb8dJuYKQ6ZgR5S",
  "key11": "3qrTg2Ydjbjpv3G7EapQboV9HCh36113inQqQbB6e3BxaGYvMTDJhHB8JC4eAgJgrvvgcWG8Q5ByP5tFDgRHPBF4",
  "key12": "44KMoT6iYEtKKwNfoz5fTL44dvaMpnCxmTobUWV15W1CZ4oDWRkcupCetUaVQsX8GHSxoryyiV11KhHPtfWZvpyK",
  "key13": "3xETd5HiyAhKC4bThj2NaSBtqiT8pz4eDnks9WyqBXokSDkbPafjSfnUMZXxybZPwSMX1SKSvKkMm8zquXhALxue",
  "key14": "4GK1cChuwdyhXhvWjmJNrDakmtwQhyQdrJ1v4d1W1mQAPognTS49NGmP2RnGCQ1MELBR7RPrhNiatk7CvE5DNNt2",
  "key15": "4DvjUV6oF26Ffw5JDjgv1GxM4bVnoX4yeDyaNMtPfq1g27R57P31wSnM3ka4DBoKWV8SKfbSdrCXcqm64cPW8euq",
  "key16": "3RU7Xsc7QMEz8hf4dsp9K83hjs92v87EF7X5vfoDEn9zPukYA5UFhV45GLrSAb8p4oWELfxSo8JhyLi8tizE3WWE",
  "key17": "3fYUo2vWTDoGxqn6c4Mj7LoWQgzeV8GZW3QJTndecpgp4sBKTnQcNHRkt26hPPnSNTzZNubUNYbKh6YiWvC5CxF",
  "key18": "275PCvVcZxd9cmE3aRF8CaSntuDjo4pGtjCMkeNg2ykgr9t1NY3PuvXGpNK3aSbVy4Grvaxcd8GeuqrCA1aUmrDj",
  "key19": "3RVu7a2qB8eL88XToj3XdWrzNAfvHJCaoQXeGobcZsCoew5wYP8FhvpR2eJvR5CkUqWuPgaApwBEQ8qz6732pB85",
  "key20": "39tWEYusDkcHvdSvb46t8aBHNVW8KQhujdNYx52AKGUs9Nk6g7T4AvYEkLhuL4iXcpvcX1RsmnJYx4VvKdFT3B3Y",
  "key21": "2xnRZ1bhYcXpSMHMHbnShao1gNyT61mi2kQJagsfm3zwNdUVJ8xS1C5zcRMfiExEEsRYhRQRBfQ7EpCzR6sK855B",
  "key22": "57zr2gNpwUc2tphthTQyjWWJBgh864J1DczPhTZmA6VjAyr3sXV7sbuUnJYmPLEg5MzsZaHmDL9aVWQRqhdB2LV8",
  "key23": "8tCPZCxWGyDxypTagKkQ7r1Nb6Aeo3mZJcjZRkcuNeWNDVvet7KwmBjYkbf1B2HKVAgf2mkS564fHTPPHwEkuDN",
  "key24": "34mD3LRfVArGwYKaie5KCqwKvX6cvtpTBtfdQfXQ5KUvHkjXxkocCHJE1kshfeMJDyJ3UXcEDdv4RGjRmdRn6PXZ",
  "key25": "57ZXp5rS7Gx9S9P88kSseJXjrmo6nsXy4WZR1cyYEXjzvPu4acTpTc41gdWEyM3WagdaSPKingKb6bBaeyN1jf48",
  "key26": "5rz4P46UgDgggiDq9Myz54b8kPpp7r4Sb2W6R8sGMTH7DbtMFknAxCFjnGWKHcZsFhG2nxUdyKz72vCSAuAtpdES",
  "key27": "2azZrwfyimEpvfKRJNbxMyox1cjtqBpgcNaN7vz4gunuMnGfGYCQ2FovNfessJ6gxpnsyEJ4pntixJ9eUdZQ6H3A",
  "key28": "C996XGNVbeQkYmayTPJ1VjmkrWE5mdaicsHKkkAXA8YUBmJbcAeEELbDNRWQab3GWH4mVRftkGxEtdGoidhEJp3",
  "key29": "4Draea6rQdtZ9kyrqtJULm757sP6ZYpps5o1zWuFQcRb2pCtXEyTJsFv7eA42AREVwkzuwZ4eiMcavuqGZ1ouoUh",
  "key30": "2kJyxFoC9VBxBpxBAd7fpjEXt6HdHNSAQPj6Yoxhx5m9r4dbyNCQdWQfSXna8JnGpZrL7UGN8FQnur3Yh3mqrTty",
  "key31": "5MBqA76ekDu6qC4nSXMfnCqhPHtky5WF4Dm621rqCffE1Kae5J5FLToZdGT6UobZ68giYEmtb1J7PzX4JanTryMF",
  "key32": "4oQeG8Gd4ZFguKHwEjP1wRgUZGiA1nqjjmdeJpfMyfimkaRQ3wnrsAPFzt1VQkJoJvV7LuzZmzyHiRa1Xu61GcGG",
  "key33": "5btT1QJqRFHiDjkDJRu5Dqnw6ZBSBCWb7AcuHAf8VnExhmTEqQzpmVbwgJDmKGtTbQDGTENN6o8tEwqNUUWvPZJn",
  "key34": "2g1yqsqLCzTHE421mDpNq6eNux6nV8ruP7gy8AGFLiRV4HsSDLLqf8fTpbEsbamMMMxSizjifrLHNrm2HRrRpeZT",
  "key35": "3xjcHwb5Ta4oVvSJvPVXNM7W8JEYB28SPrnqUzJYo1n381dgAcVgTbt8gUWF5dNQbVWMsbApXyFE8GtVhuBztFUA",
  "key36": "4nHm847bi4rzBfjcpyy1jAMXimVnk1j3coDftSkGUEEQn5KnwkMD3tk9JiaGQfvm2uD4SZwTPAvcpXxsxEfhqaVu",
  "key37": "5PhTu3w8BeLsyKXQRfoAk9Rc8am3Ar5JmrtAMquzZGBe6SqEDoS2Vd8opBBQnN7xys2mcVeTunFyHmvCw5GGmWbh",
  "key38": "3EQKE4M2HvCc78Cg6YJjMQN49G5XRbiM1heRkonNvPLHc1K2ir9QYv3Xyk9d7R3quBtEm3aF2WSpaYxffjgrvVEm",
  "key39": "P8kZ1rpuJg1prf5YWdmWCG443moJdpyXnDDdRyypCiPMQRkcmoHRN1WsKfpbhJaSWXQ2vzYwNDXt1jeoN9RGwbC",
  "key40": "2Zh4X11HSXreWVst91jsVRwrvnofxuZsRAC3xMAp4zomMCDiiyYb1n8H7tLEGgJtYoF7bTvdsNMZaia8rnradAYc",
  "key41": "3gHxVM332JomttYQnjnecBfE6QwLV1FqWUwLHQxD1dcHPx9nxeeYkyFGDoEC6b5AkiT2LVu9NJNuehUhf1LLacDC",
  "key42": "ZTBAW8H9onqXDtYjsTRby3aKt8BiWuAjotD1AB7tb5aXJ2sjxZ5mWdtdfiJCKui5oKtDZ5TY6sR7suRgwkfVkqV",
  "key43": "2Mnp7Ei1RBcDudsyXUVo4uR7idoCX3jt7BJhDERvEbtRkGV7b1XPq3jEG5PKpMb34EUS8pg7w6uGxgfNbQC3d686",
  "key44": "4n8zKZCKUHh6nfk3mN3YQun1ExhzFE9bqwuwqHvQX6afRCPcDcuRUezzYoBYtE9hjmR33fLLQLN1kHFpKssv2g7N",
  "key45": "kE8wHG64fPtceaEA1KDtCd9f11a87pr8aaqESwbJAJXEYwX2XMn9D1KbLVUtTUzqd5QoeEzCyRyg9HtSMAyGxcC",
  "key46": "25iA6K6ABhzq3PdKuPs2qvDNpvYPqCc8NFXCScVMKcdXoRZU2ap418HtyigaQkLEsZrw2QUeYXQiaF8Un2R25j6h"
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
