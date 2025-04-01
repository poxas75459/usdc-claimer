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
    "4W5AoYo9QgWu9DuGWU2cMSzqC4dnasRBMcLQVPiKuWuDmspjMP8oSfsBJRoMkknDJwz3c3wXLFymjMUe2u1q5ogD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jUABjHkPPLdu412ZjDeCaUZtaTnQGoAJ2gNPYZMpFdBF3uGdxm8ZnNVBLjDS9sMKbgNGu6WpyNDuwdQBsF6xYbm",
  "key1": "3gvppXDPjPJy4kpsyU2y7eeJeA13diAfmMEVnCyXoQY5G4ygcX2o9sm3eQYpJSRJW8w2r7vZpSxYjnohKVyTUujX",
  "key2": "qLS4TaR91HBhDhfQBsuwN9LcwEGMAhYX3FSmyLNUUzBVcEFUGGn94WPQ1GHgqpgDtZyvsXMk4D7s5Q7nZRj9y8n",
  "key3": "3vsZ7GCZaAYFG3R75V8UsrUzm8bNo6pZSuB5Ps4DQcADucYVQWNeiV19q6kCeaV53q8n3qghDcg4YuyUGrNBWYqf",
  "key4": "Tf6Kvrb7sDrD1uL447HXy8EsBHqC2GbaWW9maYZ4g4nY5xiW6RXH4jZNNrZ5Ce7TJYZkb3nLeW1XuiS1XVAr4oU",
  "key5": "qt5vMzu58ZN8sFfiGEd51reVU8Y2Yg2Chb17TCbP99g7RQMJJKxxNH68DMn9GKmM9MhAkhkyFqsNM7DTpWEG5Rc",
  "key6": "5wZwvBBNRT8WtFDj38pYKCrdpS7hRnhnQPKR1QsMFs6F8tbysesfDTwxso58eJoBZWjdzjU1CA8WHr2n8Nm7vp6y",
  "key7": "rDgMHN6TPQPAQ2GfWTsfPk2BUjK2gn2yPDwE3qPTbefymMNJRvCjhkE24xxt16YM54dhkqmo5rTUqK3n8sMyPzz",
  "key8": "2nsv4FNG3bkRMQNob1Misjrrp2EvHGeY2c87tdfj3D8vXombRKvJAP5tryn8QPvLpm5Pn1PXZWuaLaJnkjhSvSWQ",
  "key9": "2dB8HnvCTfCSPhAo3cWvU7JustvJsk372GGTppa4ThDf858AbK32A2NAJMgPeGxCUiF9dLUYH4VhhpZ4aoR6bAu1",
  "key10": "4T6Bn9R1H4w3QnAmiwHwNimcRs889cT68C5GRa7LHfQMj3SmWEic2nNyqu2ywGHAKioFZMxDUgAdQ598oAu4M9Lt",
  "key11": "2eFrKtr9g4aUGBhVudneFVUXfxQC4Sx7ECvC4SM17AiPQHCCZT4WASP6WiChZAo3gvpAMj4oSvYLbnDhefmzW5DJ",
  "key12": "4hnssFwgoP4DQgdsy26iEdsNNuxQMjHzsVfHDgAZ51o2EEehuUKoeW6vRtVf6KzQZzwWDoR79WkA4wF3sQnwQFAC",
  "key13": "wPPUy2BkvJqNZxCmk6UBBoo49Q2vE8ZqKM7vkyRLY4VQW23ad31Yf1y8Nn5zKe1Fvpfzou9sLvHvXqCpEzFxBtW",
  "key14": "3yu8oh21ffbKVXu64VXLMYRLSQ4n69oGRFc1qd1pyFnGXt8fA2vPFZAizisBWLTGLahSqoptbcARDy6CkBYMpzp",
  "key15": "5ZPHU92hurMWXWQu4jN3B8bxQ2t9qf2EUDcV2n7GFMBsyFgFwGgsqSWfuxpJueVPb3ruvRryeYqY18S1scY2qaA1",
  "key16": "3a3wsyaxynUtjWE6VxpFF4V2BaHUfujW7pZSg4DBZZ31VQB8rDdzhR2ttocKqStdkogHnFPCWYVjDhrjDZqrNffd",
  "key17": "X2pT3P12frARrdyTFXZY5oShdQdWwZoqtbq4PgTCwt6kiSpKsCiCKrKGbSSdwQiFKMzoodizP349vPKM6znB6FD",
  "key18": "49j9jGLASnJxNyBgcJaibnXzuocXqGZ3FRMtmGHnJLX96LTJWUNhM4K7ycja38DBDhE8MVYgpPRK2cVBQVStsvD3",
  "key19": "4JacuU3vtiHUozPk293dGnjG4wDUgLboz3SbZ7KmeirPZe9MWG3GSaWpXKoNKEXWHuDN8Akb74rMWiTQPo7jpxTy",
  "key20": "C28YrzJFkW2T6zE9zQ6tPN59JPViwagyFcWo3q96hzSKVMi6cYu7r6tshHYniDsCsWWNRCexjvJQbGD5i8XBkWJ",
  "key21": "v72VTtD1pj2DPKiNBbqoB1Y7ndKcZ26cZjjYassSC4byacQnpLapkwT1p1vZDDKJJWePdAk1cQcBkofegRenBge",
  "key22": "D4YsZjrB33XNpgBRpGzLuiwdBeMF3Bfkq7VxGkX6u6k4D2831Mz9bn4eJboVJtCivP9LQrWxyda69C8q7CjYW6q",
  "key23": "X8beKhjuYgkhxtohZFed8MVKnXxH42vgey6D7Uy6HNPAEM3GYywHZNkkRJ6xwwxiJZXQXwy8o5vThXoXaN9Hg6a",
  "key24": "5A1vvm3WkMeGfmuiLszWxFzrof9vBR4nj1xSbEsEdi13B5Y4cDfPRoswSTVuseLhpkTM1MgYwNekyuTBGeSiWhks",
  "key25": "nKDS2uD7pfV8Xf5k8bMSYn4mvkCQ5BZgcxNbzmMMxCwuewgW1XtMD2wCjk7ytZkfWNowfgf8tXf7r25HJRqVmV7",
  "key26": "3jYXhLm9gr2zQgTkwACXpfbjRpaiF6sHQGEeVt6QHv1p4GiTHc1H8kW74mEPoLkPTL22NDg28dmfzcDpZmGKT36Y",
  "key27": "2jJZFQqrYNXg9o4p38E7QUDM4dG7pn6E37t1djiqDDMsfuPwA6LxG9XY3pgpWkEdSpjSfdWeQrEbuKU9zBLuVRsn",
  "key28": "5LVwfUbMVo51neMLB61mBLd81SU6meA9755iKuGvQJEV7YMFnEDJeHuAKBuqvskdji9iHoraHMp9Ls6xWnS6PDAB",
  "key29": "xkcaCSePXKUPAENSVbne7LtFGW8hTtXiiRvkvTKFxA4Ta3425N22N5E2K5gnXsnNQAafzWQ6esruEc5qSR6zLAK",
  "key30": "41zgethcfDjk97cnjimNANj3ke6xn38t9Sq9grGKkJxYtmKKjVVZBaYmQVHqejH6CDSdGmxQd3NWjApKcfrd7Zoa",
  "key31": "5Q1DWRKaj5VYftHgA5yebRx2XSybwdaCN1suFc9aeaS1tLooiRjVExGmJ36hVJComM7v9Gs57Jv2En7qz7Trwhf6",
  "key32": "vK2DLnZoS1jwAwtmWpGaMKQyM1V9VTgi8rQUJNNoQAyNjgmzKuKe5BrjnwmRp8wcK4CBd3jBDNNSLWhRQkEjLrw",
  "key33": "3UgwfE31bWyikb5hnesyXq2rSRWd4trFQaaGULv5vdLHB3w24shhiQdG2gm65VuAdp71JurEefSc5y4CndBQuyaC",
  "key34": "3WfZHv38kUMXXAvcq8QiPzrxPXbKLzBczWRBZXJLJCvtEmTrEytxzA4MVWBfEA1sUZPXuQZUzDU3deidivdSxWBK",
  "key35": "4ZEWrnB8oizPpzu3PBXcaeCdqrBVvrkHpDRmrcr9SKfiKB9HLvD4zo7wXiCfPntqaGETZYepVTr6UPaJcEcUR4ux",
  "key36": "tUy8z8nMDB91ExToTgC3Sx5GwxQL8D2cL6Pnk9ubtgjMiDgxAJjwMWT1gjNKdBszaExyf5L1YVGFTNSospQa6ef",
  "key37": "4LDhy2RzHaBVL95KzLZ5PiouqTbHA5jgJbpKYj6xyqvzKEKY48BgptZ5bNiWqt6Jqp5Lw52xAM3WQneKzvSakaKA",
  "key38": "3NomDTn7eKN1uqjmUSsydiwjfTS2rjHXNjwmTCkiXxPMJXFarqrbFHRntnNYU7yu4EenrQrYRqrdUD7cdhQ5EdL1",
  "key39": "5FYhnbNZHS6N9C6AHP7tgNzC3W2DYRtVjXovt8oHuDcSvt2dzafBds1uYkXUnND9nzBDf2LuhFioW23UrtzTfpsd",
  "key40": "cvUvQVhyUVd4Yd1R9NZkAt28CecdRqWN311pd2C3dAzb3s5aTVY6Lg59gK5s4cv7eqyEUMQqme2a1hSsTVvRDqE",
  "key41": "43MuZvwoStUXV8VoEBak5DYoGUgGkqHfV1miiUxxzDd8SAC3P3JKLikUWuYSQNnLST1DpuMmVwWuFbomHvpKBdnr",
  "key42": "YDBE119acvKFEwsz5b1os9tbYyuavnkEk8Z57tchBGuRWar9NBq9fdxZgqHahMpmQq5qB2Fk32n9Y33XZGbg3Qt",
  "key43": "mxSXXTk7ZFnhs3dfYpMK9iDtCKYqgV2ckjhBr4uj9mdJn9rQoSK5KwubYjvgATm9kJLvEg3tgLd3wVYFP9a43rF",
  "key44": "5c3qEjQ5kTw6M5nKAR4XP1jgUXBAxgnNsy2ZR2SrUc96j2r5GLHFLqbrZYrta22878yP4vwqTLPtvs3o6kDDGy3x",
  "key45": "2UNiZvSWkMZ2Aj3rwj7Rckh35ZcqD4Th7GKeJvw5vDvnKo2HuhYCHsffGtcDyW6VWH7ShXTNDvKW7hiRSZrivLov",
  "key46": "YZ13aEnc3ELFcZVDPYkhQrZRRadohM9eHyGqJgd69wT4HDDezLoCTeZGaqe5kFNjm3Ledt9RBXWGV13wRsWXhX2",
  "key47": "WGNgJNEGQ1NnrKJYY1qtuqYp6LYcxkhFA9kgbcBFCAQmp6Diqj9zpTwVniMXE1p9vciXNx2TeL8rqH3Z2P1efs6"
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
