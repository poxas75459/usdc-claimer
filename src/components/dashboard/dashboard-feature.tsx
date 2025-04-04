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
    "4AcxyMWWYrV3EzW5X9pFiopD4p1eGaqEntm2ACqUzLtSLW7zhUjvB1QWnu68bDUEgcsZjiWzTJ9RH7e1P2gm5tde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HPwuDvUdXMXTkfhr1mui7Pnn4SidQvxH61Jf659JMHmzYKMfH2KvarW8uFe9SecMbs8oPKKVpkrsRPiL5oakRfb",
  "key1": "39T3VVBLf5cesJJ7kMZzAnd4xpv1qWq7QVSLGpjfgtVHtPbe5db7FwrDUus8wmaD43essmTzvQPhBDLkPPmyKbny",
  "key2": "3taDpoqBzVwwtemovSmV2xvreCzkmQhLJZGW6tdqKUWtgf1fcPMNLQjdSYvk5nRgv25ax2sFMNuNDLvUoUwBrEEN",
  "key3": "64vNCWr2ZuBr3NL7mZC2hKu2of2NNYeSkV1kSm8H6NmSP7xX7ouVWnJgEEeg87NwEacqtixFnUUpL6odfq3AW6Zn",
  "key4": "2m4SUySA3R81YWhR8VRTWbhvUTTd66nTegcbqBFJzQBcAtDTYvkXc7TYKzq5KwZqRfJzFBrW2E2Ne2L8xvMP9joJ",
  "key5": "4ALKrcmVfHB7bjNKVhzJ8uvza2EJvzS8xuPFefsjYKpuFK3RBYYqM7jQ8cXhAFyca6bXHUKqHW22p4dH6p3kKzw5",
  "key6": "Z342tSCmXECaTMhAPaAYuMFHwu94k5ENqWfi2knvT6tXutAMsWCGBWzuAVJVWPioVdTWHzhUeKt2yF7s9vVdVpf",
  "key7": "5oTFVRhb8y2UeJZv7F4Tysxm89Uj84VFUGhSBhE6EZ5JVcodBY6js6LZT7QUpFEUY2J4BETWnRLurgRKWwWrtqVY",
  "key8": "3eCGnTmnV77PH1f1Z3FZ2AZNMcenBjNSSDHeAzciPE9hZmCq3wwL9FrHP1CjNGoBE6CsHYgaX7QD6qB8pxxLps5b",
  "key9": "3hdcWhn6e8WnJi1dDvFsY6TswE26f9X56R9FNFD9LCA4zMmuC77wPusz3wsBFDaTWbm863YahTEMZ8LUkMVLzFN4",
  "key10": "2YVHoaETM4spatXF6BFQ7w7SrrfKdmKt3JPT5QUaUeSAD1uBTN4fv5ximoeaomRBvoMDZ5t3cLdrM7jbAzPRWfVi",
  "key11": "2XjNNNRoDj4vAzVwHzNAmftu1hU4sfpCKqEpW8ZgrytJy3C4DTSCt6KjRpwK1UDmdd76GFwsLjbMZEFemiRkhSpg",
  "key12": "2EvUkeTDc2hCXqDoBhrdwbsGw6K9GBMVajHuHFjcfH6qExiKnbD55TStyn4KLLY5WgMmyKTKR1Xk4nbyE5tLF8Et",
  "key13": "4GuoUHMHLPgWekyuMTwPJG9BPxqRXJaWsfPwtt8SWCwmAdLafx1JePTHeph8uJ1e3TVhB5JEPDogeMBNkcJzsJ6f",
  "key14": "2Fy8sntGapc3T8hfHMB1jMWKM2vFg29tX4ScXdBFaRxnmaPdiwCmUmuagGD3EYCW112riDadhC8XLC94QVzP2Xtk",
  "key15": "3cD8kxi9znWvZE8RmPi6xUV7UNR6ZWCyogfWswSQUji3BeeoGXztdpNSchGoMmn1pZMqC3CStYpaLQ1ByAZ2b9oT",
  "key16": "aCRcHafpAvqbDJgXmpzs2drdMc8n3Cyzog9aaqBZeeFcGVycF4qH7WPKsFpoKpxWEE8vikPRGNwDsrBsSJqKeW8",
  "key17": "4kK5ePYKzDwF3kLVmYAfBtkGMw6G7K8xqqGbVvH7ERYS7wsYo44xsypraeA7L7Eh6KQLPU2DStyVscWFAkFyLaW2",
  "key18": "8AnFSWgUF9gp26ks57SrDNCD7ExiskQhBrJdVhacEy91jadvWqJ8Qov2tRVjb7t7VSJnScThn3xgJ3ZL4endHW6",
  "key19": "2AnSjeBSf5foFgx7dno6kDJcCsuY1NfTSiL2r42cCzcA6Fg5KFvvgKXoKvaYruPuSDaEGSyYGAMQwPFFHTaiP37x",
  "key20": "3KfA4mwoi1JWpAYZWgEF8fTj3eJTdb7YTVuFm9F9Uf8cDW1kVedpbvoZpteYSL1txfmpBSktbJfsTztfVJBVB6uR",
  "key21": "3ZqbVf3xp7mskvKCBjQkfAWpgm6BpRY68GnVL6yrr88cv7M73M6QMynkmjzcrAfHZRtfNUic25o82DQqqCJm4EUn",
  "key22": "2LS471arwGHDKRQJFsBsQBwxVR3ajdjQWQuEqMsAdYKqcd6rpDMdSNsLtutBuARnLUAL2zsXH73VdToQ317fPhUD",
  "key23": "3i5phKMJzNT3eMTS2MeM1v2XTW8Ry5gcvLVXotuQ6vUZCMncPt8TWJDVtoQtd8YLWgCu3veudQ2HJKHBvquNUc5q",
  "key24": "dvxwr9JN8pdN4cJcifXcQN2a1Sxec2iwZYW7sRkwTZox82EByLSRbqEQi3cpu11iGptiA9tFSE6jZ6ExJLCHGUH",
  "key25": "2Ro3v9ruD8v5i1k7NmuNKRVABVWj1awEKi3HxnrdCXZhvxvVh3J6mcDLb5VETUwhv3NvhFq4zChMY59cjQKrfWKW",
  "key26": "3LNHz1sijwvuWXWtKuHaHrkd6MS4UgZQnhx7CvaeufnmDQr2pQBpAFkqw8KXK8oAj1UNqgkVkNxs2ebn5dUVw8YA",
  "key27": "5FW12CPji8FN7tw1EmK1t8fYirPmhVN2UA2aHjbNe7C6Rc7ok9EGoUcU4nbDW4i5pMXx8ucNsivDmTZ71hK8gmkp",
  "key28": "55K5VmMwHZz8CYgEym1Laf9oX7iczQJxGfwX9sXE6XKtbH1rBMu3EADjCcCgYbpw1cQJwfCzFaDNghzo84cHFREF",
  "key29": "59DFAvCm2ugeWGD2Rw3QR1xw4xVzrxCYKj8XAPo8pFaLHwtmm54tC89tVc8t3fyk4V3SzE84GkjdXLjmNV1NyyY",
  "key30": "jRhvZE8AdZAtC3VFfeqSFafw6Dm2dm8akco9kR76arQ2TwaHBVHzqxK8UALxkmyTPyLdxwBM5Tk1LV6thG1wBk2",
  "key31": "4td4Qy1ysi3VoEuJZL2K7CCkf65PWucS7Nj5iC69n9ohmcfBWroZeMN5V97uSwoUb7QhVD3bYCCXaRnMwv1aGBpm",
  "key32": "3i48dU4DUpX2fPfWeCrPqBaBTDThvgrChFDRSed557g8CBqM7fqzv44sM9iCAwMNc2rBzu1x4TxXMPrNRwDACzYC",
  "key33": "526DG2mRuWKhBAhQgGKKqyLM8CY8f9X7VaTtU2ekqWRWUenyLhptY34Zpknp7p5PTMWX4XLmtuDEwoman9PxWTZu",
  "key34": "3NT5KQYmjBzyVwrYqDNswQFeQ2PDBDmZV1kC6zuDSiG1WSFEgHTUqq64HLUKiL66gS3SdD9RqHAdqSmo4dkFbwUe",
  "key35": "4DcBcCEzcY7NSSHoC1M4X8paqXDRQzCsT6MPqKTbdZJU1Piag8SXHSwNjdvwNpmx5i58JdhoNVZnhvDz2X6Z4vHM",
  "key36": "2GSc55mJwE5FfNbRhHDeUZx7yzdy25Y56PwLxkQ8a5yAtph4gWNwXn3EK5MXVBjvy7YUmXXkmY3UgDJkvUoujWp3",
  "key37": "qs1n9qtaCcT26LgGTPvfnAXk5yE76HLRsXRxp3xcpcompUdjK8v54u1ZDaaRsq9seveEasHsqCFEpX956zYDvsb",
  "key38": "3HFzayB5RBqkujyUr23VbqKG5vQpAvWSYtaDUEtreKrmnGrbLppRxFzRFhDBDMidegoq6LB3ScfbycKr7gHqRArS",
  "key39": "3QsyUJNdqZLxX73P5ump9FkitQnDkSX61kT8Rrrs6MakeCHhC1uFLG1wMqqWgbEmFbzdF6N5HDKUWt1Za1wK4ShY",
  "key40": "y1HUC42js3LeYesY3hdroDn5DZGwiEmMdLt8LxpM6EC1MAQSinapu4PbvWEeeWhTwpPTdYkMu55pDdaq77bb642",
  "key41": "2LLXaM3WQTg2Lj7Pk26bwDnp7jJbpeL9acG5q4QCvx7rApKdUQFQAkWtQMuyzzR3hovMW8sCPMLVbQMZmsHheNkR",
  "key42": "3g2Qa6pufsyQdjgkNCpcJJGqiwgXHyAk9EBm5xGg3XEbFPWKqr6cbT3RMV4KvgeEdqSESvmuuw3ciyftncrZhbnP",
  "key43": "5SHQ1YcXKsx7N6Fhxb7EMeMRbdgDnYbe6p54owBCjUnPQKTMEcfdKDzufew3uRj3ooqzBE3UqdemXupkeHoLqUkC",
  "key44": "hE5tEhnQus6DTNBr7SZwafhnKCJhRctvwX8hYnhKBhDyP2C4rEhynTjNK6EXNnahxnUTSme83SdQsGJrMGEkXKw",
  "key45": "47cGzfWb7saUtJKzzGYZ8c5YBhE1TNEpDbUMcMcLiorRi1Y2SM8oDJtp7tKWYuRRzxVw68HknNQ346T6tKym9XVj",
  "key46": "26HffhT3W3k95yoRotAFVJFxjoXTkf6Njkg6ErhCZjhcYCfDggZZ3BqaBRd1vXWBqrvKmpRvvNRmSNAbLbiTTa8n",
  "key47": "4MRWpt8b7xCzRMBncANgbc7Q2FqB3M4uMnhACKQeHWRFrygK9MGTtdBDjvFCb4babmLGyerNKhPtfFEve2Dkc3Hk"
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
