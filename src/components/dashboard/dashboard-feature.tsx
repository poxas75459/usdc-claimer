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
    "RNH9zmPyoa3AX7xLcKh4gAihZT12NF4hDnMyB38JUGiJv9aWChecU9NY9pdSagG9P4CDEcKfwSRQ6AqyTGgw6gy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uANakPcBmFg7TN6SNjwJGUsh5cSVx3ZL3W8VthciEKNssdZ73GKPDN1VaRsqe6krXxGqpnZQ57NHezvJpU6hf1V",
  "key1": "4UTGpKQ9TD8AcMFh6uj79h5LxoFUvrDK9UBuTf1cUffKWmBEJ5fS8wXbebrx47cFQLNSUb4bBpYijapXn9PZP3ok",
  "key2": "Uv2atp8FDr1GHQHys1TqDiXiN6G71magtDzcru22xAPhsxoWiFWsEfDYbsVSY5sPsBpMUhUogYyhxSR53xh29VC",
  "key3": "2FUJWZwYKtw2pWgNnMrehKU8X18pgrCrQBd25zZxNgejt2QeVZDBV6463RBeLdJVTkZM3K6QeuWmt9qmHQxcsL5n",
  "key4": "PwAA3uf7wSRDmnFXeonavfFbwWrzBih5uQ1eKVK1NrrMFzob5MowQxreF69Y3GgXdADXv5RAnd1vd1DFqvQpcLs",
  "key5": "5GoGtXpBALDTdDvhSqgBWueESnnVa18jPA58RMK2Ro8KnRP1abKUFvJBdxb3e2ZeDbFSsNKDAuWLHz1NUw2UnKDP",
  "key6": "co6GXLaaa5LQ9uaHm3Q635S1HR3oU6GWZUpuMFWWqiKbgwn4qrTw8Ag9626ttfc9ktm9nQB6s8JTo7EXXxcXC4Z",
  "key7": "54mWuKXoVgCXNANZf3hjwdsrk1guUqeMFYCoHh68GV3e3RAkGzHp3zbfeT4we6iMjAt5yD421jmDyvypRejFS4iB",
  "key8": "2AhXo5NnYv4MKzUdtXwW4LVfedcvd2VnKzQMXUTEbMqK5CLWwAx2eEuRZ3zU4mYLQ4XCqVF4HBiE78x4PWCpy6Cv",
  "key9": "5t3aDYYTboBpQbjUmLZfNVXUD8b68B3MSM94J2jwfFEVPWevpwcevfPELtsLw7SW7MnKKFc3CqJAgDo5nm5PvrXF",
  "key10": "2VgBnFAvbTqKCHyWgFXXfjEh7LrA6zLoN8jcrW38yJMG5Vj2DztEoMyQvR6pbCc6SAGuBbmLfSzWQhfva4QTHJFE",
  "key11": "2zDjUcL8tcaLDQG8S8MGPqh8Ci9VLtiGaw4D1CJggaHkrjki8qMQC4GCTc6gJTcBQeqjH1sNF1rx6CLesrtXfiGK",
  "key12": "5tEGQ6gM95re9pQXPb3wDidyuSpBPnU7ZmQPtxGCWQnJnEsSgvPuXufAUj1x8GKpfu8jMNVBSbKVnpkdeLv6ET3h",
  "key13": "bsDW3UsDzy7cEEHEoYpZdJYaDtBVghhTZdP3QPvjAZ5C9N8Q15f4YQuuaMV5pBj7mLqtmboWVcbUZ6QMRCZ5ebi",
  "key14": "4wsm11arWu498uYiHJANhARDMC2czwsHZPXKn3CL3mvmiv5ApGotEEb9Hs2uW3TRDJngGS7R3CM1a4gu4tPdXGEn",
  "key15": "4chajjkpTozg3zt6Jsb69vxduCvidFr4EPem8kPuH34uDMKjZJcu36vqh3jeAYQh9vuG5WFPq4gaQiaELno6a3Uh",
  "key16": "5DPhVCDuG2ewYBxcTGUkqp5ogbxm55uMcijKFxmSNmXgjRCGWzPXwFP7jNo5KKFc2rBzTfobM5rUMdti689Z4BXw",
  "key17": "j1VjZUQDz6Tfap9VtMWNBY4i4iC3qk9D3FxprtDD48PSbxeMsSFv97Kkt2CA6MggkpRKUMvumc99DJB1X7qLxNe",
  "key18": "3jhQ5QQ52xAQq18YQrwqBXf2a2gCn5yxbf4pYxbyMATUeF6SP1xqeZXRVtWCwND6BXtUaFKPUiVK5vYzFTkXwwYt",
  "key19": "4h2STkoXV3D14ryqMissjRYZX18iRpHh41JS5ZY8HrNipSckijho23WVUfrCLNmsreE6u5Z9k4pFknvMjXr9bsFd",
  "key20": "3thZeQWnCgrqGcqhyugB6GSvzN5gNUtQcW1xP7BxyH6sBfAbvE4vcbT62mEjZQupRw3v5mgsKkazka4f9grmfohb",
  "key21": "3c1Pn9GfHUzF6rHa7FtVDk14uvxpKw11jr5ZjxxuUV7x9wnhVHdhrgBf91WNL6bQcvcJGo1dDVRyR9KnioWsYWcB",
  "key22": "QN9eUBACqyM4GqnksRjJxX4fcvD1nsjR8CcE2VxomFMFYQLj2freyVgo5k62rgYjZ5Qze2Hwe2wFBXZV2YJty8V",
  "key23": "PSd23jGJAm617YtHCAeLbDT14Xvh2zU9oi7SiggqVbt85Kr74ZkpVvjBNPvocGYWKKFSsDGwzQqnabQUU8T5mFv",
  "key24": "65a8n3vaMWB2wPr5KTLwSTtskxec5g6B6xs2o9qResCVZq7dmqFgSusSnyNqdaVHQ1QxVjZjdohpW9Tch4andkL5",
  "key25": "xvLcBxKFxV29GJu8cUiZVksiTwcDBC7DB2Y2zH41MHP5ofhadAXfdKvpHsuBVs8DfmbM2hkiCBHaUjYTzsJMppK",
  "key26": "k3yrnBfEbUjr2XJPMeZSU7G6JHedot6NA1vFWTDJUEaR1ieXDZJbpsipLvcxGdFxvG9nuW35MDGu4TYVDHXZ3UF",
  "key27": "23XbME4rqqGv9sjbP4Nx9orzSiSfNHgy1Z78amFbTV2kbNHxBYk2x8D4J7H92sW38nTzEQgnrFXydGnkT6idCH3s",
  "key28": "JmazsPt7rxQaeGQCi4qmg4LmVy1QuRz4p1FAHz98mjBsh4Bf2QKXnRer5g1UJFbrncVvbkxoXJz9WKvWrHaoJYR",
  "key29": "4h2ryoHXKhSZVNUKMZ5j5hPoaf3QwKwqfTMgahJDTfKtcvbQGggEW1jc2bLTmuRtRT2DuKXQ63WkFRzxhUkSS73D",
  "key30": "LZRyQwBpDT9hbWkc6KnRpia9XUc8HU6Y2v2CN3EnNjhutntGhBQ7cgqL4f8MHytR9ykiBnLg425Uk2LxfzFbGgR",
  "key31": "fKDUom4HZaTCS6YpHajYdm6VGwWR7zPh2aEWdwyopY4KyNc5uiAaShrK7TAumWdKU14WZgyZjLBg2vm8GF83SUV",
  "key32": "5SLMNQeBKVDg8rNmxjMTtu3LoV5iTtVtM5sBvcJ5MWDf9bPnjah9ei6MY44BFuhHRSUGvThkwRQnM8qLb1UstcyG",
  "key33": "QV8nCgp22uRbHHTCUcSftKqBrGnX8vtpaVQ6xabEgMNBQpZ43nurZoBbt6UJ7UjtWqxHUHJ1YFT2HR9C1rqjGEm",
  "key34": "3W3X7GNytqsosKTX3YWZn1r7avs4WPPvxgdPtWTj59VXh2LqkJaGbJH97mr8GmNddYuwMcVVRDWvX2KigAJz6miv",
  "key35": "QFt9xeSCjz2Mw5VDZ32VX24mbGrqFBzBzt69HbsjTwwcJ5tngVftMGsZBDZyPTkosWcP2X2EKoSPRcTsqQYzRGm",
  "key36": "5oZjwHjR4tsTaMvXpqCuCipiZQmCxh4u72p1QKP19qVMa4bZp12gkWZLpX711U3ZB68sitrwEmQkdgTo9PENNXJG",
  "key37": "2WKYwgPYqK1cFVQZ5JnngZKFH8ohxhmaqm1tMxSnXvrLmcpM8Ax8XUjoGwk98cX6xWQy5rguxhe11e6MMp3xvTzt",
  "key38": "3T3f1JQgJTcDyK585Fx1U5b6P2NrHkuDTBhDeodYw2XNRYM8NA3rCbfgZNxSqFvynvNmUieYmWfRmTBfV5VuzmUe",
  "key39": "23cJ2KhuHoEpLx69ARXVgYnZbJiAUoNXCwwCJvLvbB2Dt3SbpBRVKJgdW3bChPQPhdpDNGAAZSAGLM1F4ouHTaAa",
  "key40": "2WTTkZQ1JWTyEGoPjs5YYhi5NmBuknHpQ9idMT3WVpp3rHq3XraRQL37kCSRGkybeXYJj3gJQMW3cGzZ4tHhDyUr",
  "key41": "23DXgZvXymAdZcGDGWDW4sJbmbXZ9aA37k1FrdDLAH3Evqm3TSt1Bs2K9cz1mQNqHDG1LkWVqyF32EaMmahWT2Wf",
  "key42": "5CA8kHnfh5jygW8uASvSv7cDrR1PSVh3rY9ZxhunKCTwPHHM7fRtHuC7zvnVngq6pKe7HY3LehWYTqGUTNTEWTqh",
  "key43": "5LLiNDmCN3kZ1ZUvcFptSfyMM1dkwa7AmQpN86vUoqxj8vLQSEj41tVMkoEcRkdzMAwtLkBofzFnh92P1MUJ9im3",
  "key44": "64nmxc4hafbXLjQ1cAZ57xtRn6CUbEqb8pF91GynwvUdxJDs4bWhGxeT7UvcPdG7L4SJXCbFrVZZwsXQ9ro1XAHy",
  "key45": "A6Ny12KgVUhzKDk8tyUCmvoNWUPcZsPu5Tid3a7kz4VizYX5oAr1S83CDF56b82p1KTXwpa69GhX6hyrCDSdTfy",
  "key46": "ugy7DircWt1AWNdUk6N5wF5f3bixoJ9j6V9VvDeWnGiocfygueePNr5avBEPhjgS4Hg9ZnP3v6uXspFjsFHTGSs",
  "key47": "2PMGBsUVV9mYq4Lh1ffi6uPD9ZFAZ6NC6xLqMvYzdEVneatsBBxFqEC3oZ5HaUTS6wT6pB9966sMWATCRyEwer6h",
  "key48": "21XY8qexRxibLu7JzsrSidK8aqmzU6PKrTzWNTkHq46fEEtJt8ixCQQtQaZY2CwxkiiyXwb8fH6rXff1wg9YfjoM",
  "key49": "sWbKSgMWKShG3H7e32FhCeDBEpmz61oHeXokA7CkWLQxNo6Fw1bByuX8y999piTZ4m7BwHYEkwwuuXsavPUNWyH"
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
