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
    "5gvWHSFsQSGusoqFZUVmMoUh68RBXHsy5qHqN1VHZwMxcfHnZLCkKYZX5HHY8PHSSt7nip9JdnXZGijbpeSmJmKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KiXmRUueoXBM1cUh3UkiGYGU9Hewu7AT5bimmvQhopkgZhw3Q59zJmEwvZTr5Jt3tsVogpFofWjNiJERiT65xD",
  "key1": "2T2qjaNgW8yxftjbF22br4PLBEHKgLN1xUQdthXiqjkd4LppNGKDgUeoMBVHosvXz2sMr3C8BiYLACTn6mFFGEG4",
  "key2": "Gmg5PyNEWMSogaV7eECGNwoeBRHyhCXwoXVGFMxqZwnB6wAs9wpMuVWqbvEn1GSbn2on1RYvbpt6YcCRT9SypZf",
  "key3": "61ogo3hBJzZxveXh4bNCVScT6CJv1hki7prVgcEBxQPv6qNckpsUNAG5pxzk3X8zkCBbAnqyQj1A1EaN1fLcs3FR",
  "key4": "5YidfHL28HTWcyJ9RnWGFsxAhJ3eZCS58y4S2TVzJoUCvbWLtShQq6a3rKVFsGuMS76DZaKMnRgx5PvNkerYqTo9",
  "key5": "5mDiokJp1Ks9qqLZJnggP1iRCHLd1QByqy7fyn7AWhEL66XhaCk7R81Q7N1UqPQJqaBLDGekzA1Zg1Ft4T8XDWii",
  "key6": "4HtT3Yi26KfvLBToSWUdYTT6PN6NbQ64fXQ59QXV2wcA2uCDzXSEQa9CQqTFAwL7cur1Gbr4WeSDb6HJLaVfwNco",
  "key7": "4DuXgDmf21TZQpzZ6GJVZkTcz72UXLiEsA6HkgjGn84G3c8cTMTWwyKsY2GBFnTF1ScdyURKZmXBw89EAT7qN4b6",
  "key8": "5bLuPJkRo8m4pTPnNXnXpAyHvjuAhe9PF31fT4W6eF99u261vtWdxvKHdftkzCs8CMw5epiw53JMSbjESLHNuaX6",
  "key9": "4khSbK3g6xWrhAcDg9sMuj7bhWugcmevHTVGz1S8Ytx819srdvyHsf1Qxs1rGrY2BVxx9EQysg2Ni9sGvQKqAQCK",
  "key10": "3chnTBQHzJGn5B1M1PxowVVE5aKi1MXeJZaw4EPmM9ZryQnFdeQYoV1nWGCzGcdgRYZqs6yeSfYZDM91GFtc2wzN",
  "key11": "46i5RZSDgAgzP9ahKB5miGA4rFkK4hurpgfb7mNpmCrUoER63zrzypqSw3HxHWuCADWMspsZUHvgyLwTTbRV3Tsc",
  "key12": "tRxzWVKNAP91suxxHuj2TezybpnFqB4nvKoY3Z6iTfVx1NH4ZVQyLhBAZFz5BwPbbD1F8LBbXG4nmp9KPVTmYhu",
  "key13": "3WyHgUusghSku9ScFPRTEnKscAFNZqfnKfebHy4awHEGy3s9zDxQGvPjk35NcGhsoXTEe1cJDYKULoJaYpzmcfKh",
  "key14": "4Ymw144UPoaQpyHiFuxRziXYawwMxFFcgS7cZynu91s8iGnN9ujNKWRSp1TXG9jqmPAnXLqDDvSzpHCKkj61QvD3",
  "key15": "5ScHTsYKz44oWMGtJ1pLeoNfL5sRVCDU3dr5StaiA2mageyRvvLZezDixGS6roUQrG2dffBfUTaQVvEZeMhD8WU7",
  "key16": "5AQXtBQALPe1QR2EYKhxoyhQ6nXJxEkpcsGLHkeHuoVfq3hUCPTTJxqr4sV9w6fG7p5JGaThHfbCXAHbQANoWYz3",
  "key17": "4Ux2w3bKN66kLyuHpaJK42UYei49ndaSddqHiMWec9JWKAdHVuYJVeJv5bpaL3553zR3SERF96Q6Fcm1SEpfhVm6",
  "key18": "487fL48spnyoBjuuyhCCzcJWNMYdrjvrN3r5kRGc6BqqdBDhi1yadc9JnEQeXqD9j25UPNfbJ9bAZcRjTKytCQb",
  "key19": "1i5hqJSWVwxtFCZtSfzF4bYGounwwqjGzXhbxJSSH2gKKNEZs3gXCCnqiRDZ3fGdQPQU2yeQk7xzjNHfctYNdCv",
  "key20": "HBQqHoaxAz271pfCEdVH9pDaZuoVQHchctXL5DKYjgiuHEGtcZBp5PdVBsESQ7DmV6VzLyGHdLBcBj3dpTzZvAi",
  "key21": "mpErGvnvb2sKZUbDNYUesSuCCxM9mDXb4fdYmispMn4XVD2ZJrAAoebf32iddMbpYUwSth652utXdVyZn1FHrVp",
  "key22": "MuFdQufM6CWTbEtfCxMev5BAyrV5qEL4Sc9eeGTxmoJnoBLALnRqQ6iaK4Jb4WbYrkyJG2WvJhAKGWG4vxZTXU7",
  "key23": "4NwdxXu88AJcJhiu8bCSjUNRNSWfKqD1KY8yb9avoEzVCUk6HbvZ55rCriNnLaqH6pje5yPDreSD3C27rrucsPKk",
  "key24": "2BCcBnCmZFnXRuUVKMmT4MKWZASxsSSWPbDTbyHNTmouYqWRbZWQ7sCuDws5gzoKuTcQYk4USQdw3Qtfjn6axRSP",
  "key25": "4LU82jrqLN5H8xyv5XbHuE62do933wkn362hVMSRTVqqvpVAhxKgdqfwwRpqo1QeXccv5iQMnFmoMEBMgLnfYRFW",
  "key26": "5pBzWiPwihmCFKN25cgAGc67smFmbtUiyodarZs8JEceXaTK5FtgrUnrXf6SmpBsUtji8N4rAGayUAr81qB5WCVz",
  "key27": "2EvboxNYdSGtyDAw1Ru6dJBgKbLrtvpVeXyJVjZVHPNHWQqLHsA8LP7PnsE5s6NVHECcWTFxBFbGwwbQBszrKrJm",
  "key28": "4hmgakfYQfmqkRyzRmF4u6SThAu1QaBhJHh8KzS31bij6r5hNiMk3Xz5Fcb49bUq36dhMDks4N3FEHnyTwzHX6Rp",
  "key29": "2Qc9P1FMqxWeUBroW1wixKUs9QLaDpC33HE6chfMzFvByjvcpRW4zadLSx8bPpr4ez8YqWSdRzdo2CGp5K39ExRi",
  "key30": "52MME2th92LrPqbzPEKknTvFG4Dsb9Uq8wRsxLm8PkvSjnEGhz9dcZCkrarTaGEZ7fuKNmHxxqBPpPF6RCTDP8oj",
  "key31": "46GAT4iFBSMzqy5hzGvBDz1vJyhnEGReqrdS19HUw2CdU3VNA8uCz8sKxqevLuSpNDFsZtdQmX2pMs1xFUKN4Sii",
  "key32": "2AjRjLYvSAfzWSMhZcoSkFQ6UAEyvDWaCDnT8xcVqPAarYP5USaw3WW2RDVqod8MFpJsBc9gpawobndNLiwhJsZo",
  "key33": "5WEkopRmKGXsHtkjpKLkq7vBMUK7kVMqMWPqSfwpXEUFqLM48E1Zf5RMEGFkW6eJex1ZwZLCPFCjQN2W7vEGJERn",
  "key34": "3nupafhA9KqhKeCsXz4fXqAUN8WBb4butJFiv1YTm6qWuQs8x1XroLAmPXXTjvvX5H9yHAFz5iABrRYWgDNzFUQJ",
  "key35": "4M9uqfoLy5uED2ZLm6cj8LDvht5h7B4uQFJvLaXnKjgSbV1eNm6q9jvZg8cMd7Dya4v8spFVd3GTrk3XpMNc8ZMj",
  "key36": "2RB4bkG7o4puLfJHtdePoeHrQbC1ZYNi6WQGZ5GmENX2bKTH25nwqPuAKqW6MJ8ikX2pa7jbqwaRCzeYi3xpxYxi",
  "key37": "3BxkApuuwD45AuchQvwfi4PwjAxiaeaSBKEYqkXqXrffT2jqNsHHsmjMEUsqyiuSsWv2XSHf2vJgN7Vuiz77fvfj",
  "key38": "ANJqNg3EZyZJxYsLid3vJX7QioKf7mDDRVvBe2wHrLLpCpEwEQSrnmVuWmLXDiDBpANRfucm5UryqmHh9vnWpez",
  "key39": "54s1yhUYQZgajcp5D6BaBARN4aMMzJxf9fot2WvFzDHfYhDE9YhrYpdUBJjdMhy9YRqzCDhj1nwn3uoU1y6wxB8A",
  "key40": "2SyoJdKLEHQHLBDnZJk19fRPwWqgpBYmyvkFJqW4gL96wsG1mCJLv6EMY7HmusES7kpasqqzcsYznPW8pb7BwWpv",
  "key41": "2cu1PC4MRabZGW4BzoJXMjYft2HkoMXC44QYwCanPyTVTqkvLETp7z6hsQirtjqdxS3SFR96e9HfgDMRCSQMVzk7"
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
