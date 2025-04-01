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
    "2ZQZ79Gc9wdhV5KU5juZo2xkkAxmzSweccdLEBEsfLUQAk54g6XoMEGMin54a2pCZ82sGY7JoyvsgkHGNGAJb7Jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36CY2hTxB4rddcvByed1MAtESgqvJhzW7rULSkz5rqBC73Y6TDKvG9HyM4adsAgsFgN9qHb1QhGUvDbW6jXmrGFs",
  "key1": "4aBUCpPKpVGKy8cnoZBVp5PBMchZ4devT3CRBerxaCzfoCYZKhkkjiVoG4Mq7S7cHa5RL9SmJTaTSMnG2i8hByq8",
  "key2": "54e2Zmpc3doh4cLmo98xiTM1tmW4ofGzFyukSWgdgprkPvQtj3geLbgrjaroUL48cVG4mT2LV4Vj7gN2mxKMec2c",
  "key3": "53svyBwRGMn2wz2uUwRuWbiQxMmWiR1Tjy3Fpk6UFWRUHK8pikHgkaAgZxLKVjmTeUbs89vCWBLYyAeUXJjXcwpL",
  "key4": "4YaqgjFmtk9VRMpJu3mWwUfB6nuDLmHvv89VkEj1Bjeh6PHiiCeSgmJv3SSyzV9byJhyunSzERUAjY75FAD5hEKm",
  "key5": "4KPPW5S9A2bEWRiU9EzK11NKtaodQdzv4x5Qm4xujDekxiEju4kuADfmbtGYcipRzqn2EoGvQ4zz3dSzFY563bSU",
  "key6": "5RReaVNE9WxKQr1CXzL9x8ousnwecykGUdjesHDH572mRB2uXghAjEppHu3RLCDJSiYB2P7FrhQH9X2JR5aXEknL",
  "key7": "2NMmq65spSTLdFJ35mzhfAVgyFS83FA12ZmjckH23zWyq3WBSLqdq3BZwrze919EMsXgFYzshAPACSDkfHW6GFGs",
  "key8": "Fi3ahWSwVALHX8GyfAsohAfeeooTZrcgHpEaKyPyknpvvJ1UEdCsoRTWRmpS2ckj7HXFAaMwivPEfoCuLQgtCsP",
  "key9": "e6jB4kFXvgYC4ZjDfRBB6zH68jwbag9JFAGhXHcGcWjDZR9jnwKn7xkhqhzuXFeruRRdJy2QwMNpmwvkQEg2jcP",
  "key10": "GRUacRqzGoqSiddVJeHYRHHQuUhdF9dPEwDsJyWohtm5HEYPgZNYDY29DAnGHhFYeLVGNpYFUEnnCTo3qaDqrnt",
  "key11": "3voxqh4AFdVig7wUDpEPmZKMt8kq2K8h61nHUzQ6E3tsnpUyL9YHMRv2yu1i3rrsxyCqqiHruFwgt1XNAe5dMWRb",
  "key12": "5FhErqZ6g2Lj4hhu8ebTuFKy2SC48jy9TqcLAM9bhW8XpB4js9iXNrkW6X2Vh1ijonA6c9fpqGTgh4wXka5ESJow",
  "key13": "2QUSpnpbPpmbexHEKYSTieMESmu9nH5NRVwqqAM7bmqTUw6czyWKN6NeRbTW45p23L1j6k87dcuYU36Jae39gjnV",
  "key14": "3aFMfDsRhXDNnRoaKY6RZv98REcka65eKqeXBGzhuQtrir8XeVhftcDP54UnMKQjvg2STHoidNcGb2aKtuwAhgmk",
  "key15": "4qw3P1neQfaPP6zC7rApmgVccwr6qnhMTBJxknjF83DHrFp8oj3LYetDXm631yXn6wTRYYk2eUYR6M9Z99adYgCd",
  "key16": "EuhyeaFCSm3cUrAbEAd7v9CdxkagePhZwcQggD66fzDFG8Hdj2gL3s8i2FDPoMzAoPHENM1zNcZ6iDjC6j1FRPV",
  "key17": "EXzjRo4kTy9zo9h9JYVP5h8A7te1UQ46pvRSTyvBDBcoyqMUR6T9HC3ZVCv7mREkEMsfa16dWrJwAA37QLtHFVz",
  "key18": "3sf6QRX7QAMaKc8dKmWrvQBZCiULMzhoJS4mnV4cEP4M9WsZUSStufr66W2MuXWoeyaP6StmcZjMdCoUF9ifqND9",
  "key19": "4R1aLMXsQ8uRo1wp1tdZ7u2Xw3SkSXCnRbvVyKgYmfn85wJCm8busvRZifr6mbrdoWN6peWhY6CWg495gLvnsLGU",
  "key20": "2GG4c1SoiobDrN5GipDPvJ34rpMBzDUThPjY3a27ypCyR4iFgrTWBcE1bU133tmiiLj7a2915yeoNaPwKkyHpyzY",
  "key21": "2pKWcvkzb3aCTKGc4sREd9H8yBpZuRiSZqjkbmdd1D8VT1ML4GJ3REUEny8XhEgEUtAGWiCcfWJtndq7g18aqJTT",
  "key22": "brwBrAp6eFZFVNfaUUAGCPVm5eEnv1JKbgtD1hdZoyL56PPg1xvsWakibftrcHdEvb1QKZ594zVMJ9EnPaAsPGe",
  "key23": "4cFg3fufDD8uSG8xmPCZzxmbgkVyNjuZUeA28ZfB2m9z4kbvBWy2SbbTDgTz7Lvf74Co6DBSDPRVBtxijFqGhZSA",
  "key24": "66vnEjhuagvfXF5BzhxZjeXd7Z1TXQRYTB3wjDu8FbVGVAu3WWCoGGFQisfyocgt8hdM5m1B3T7Lik2M4roaYkoG",
  "key25": "3iRr1tEzE9e5EJSu6ntDfMyFrbq2tFK2hEK66Hw8ZhwBbv9DV2bopxA8qPLUsTwSH5DJrjKLn75Nih9AdLMNb9As",
  "key26": "27aPPt41BCgvXiseBxyV9TbVW4whAa1ZFxLr1nrcGAPtVif3PKRvhWLTuWW1SD8Tz3MW3RvM6xMY9nS3T6BfA9u6",
  "key27": "x4wV2tBtqTTgUEeBzyWn9N8sFerZF1ai8E4y79FGhJoeB8Qmyt2RFJiWBxXaqPb58jGWMMFLjzg4htxCbHrcS5Q",
  "key28": "2WoK5GzUWp1KPrvm9sW2GkuzgEes5QxMTgTGte64B34dEMXarzhUzHGTtAAo8FS3qJRLwRAaQMTqaquxfPVAwSZg",
  "key29": "5fRXEhNDqGTJfA98DUMoVhomYECzc5ZBMwmEXS4g5zE3dQAeE6EFsPBqQchXcsC58ZG1QCi4nRXRofhcdr53KtG8",
  "key30": "ZahDjRSAjHDpvQvaF6P7569VdDTTqbT6f9fk4eU7bkuW9WwC3GHURGGak969qwDbDb1pw4jyprjwxakWbUASTTU",
  "key31": "3cXN9p7bLn3f5m3iYiTd5djrYVcSERfeWs3bWE7VkNGDu3cs7FbFsQvmxMbFRBSkJT95VCsviFQ3MsFYiQWoJrk6",
  "key32": "2vseFwf7i92pZRs6HLyvCn5q48oww1wjFUa72CSRVHVkTv1uCwpsypSdDi8kmEKkUKM6z7Gbn1MuUNBGTWLd6GkU",
  "key33": "4BAx6u3KB5chvpdLab5yShQGJ4SFYXLgbnDa4YGVSFLKWpuWy5itCUZwi95WWnQApbv5tcC8uL4hhmgiWo9ojULi",
  "key34": "2mDc9Lckeos29c9UwWaCJ5Z4do3z8B1yEB2iuXY7ZS6wK1Pcfjfpz78kAdmYzryiheQJ3F56YfcgBZrnaP7uhHSB",
  "key35": "5Px46gcchg3qNALxKabU4FEjQjWJsSFwnane7AeErp4Vvd8nAnYaJLSuDLRMpfFtoNczFAyLjyGMq3jaWeFB2zFA",
  "key36": "24XBQp1fKuuUEHaWjZZrpZwjwpuxYLFq5ftywzjpqtmQ8FrDD4GYjN4M3rxvwaTar5Q6BosHAGvQPcbfsVAzkEsr",
  "key37": "588WbftpMWmUh3KiRzKWViQwLioyavqsJRsW1qxV3Ftn3jhhJDD4qDdTjYHV78yjJwSeaRoZuQVb1aLwg4CGmTBk",
  "key38": "yCNuUBFiB6UhgbVJedKDDLZ6xA7TWXVyptSut3xSMattr9rSAbmTHGXw4C6TgWAMSzQxqcYTypmCYZdhoGdGXXL",
  "key39": "3CnphpC5uy1YbQK4LK7mSqmJumd8tc3sDtZFQRonm5nCAEnrb1xQRsDRxnQPomeHArQidKsarC2csXSVhSH9wmPe",
  "key40": "54Zhnsh9AxTZZQJDpZLHP3y95crTAucTvmy1Na77XZtMoTf35dbm5iwRRPYpFD3DjJsght4E24PHyeQqxtpJyEmc",
  "key41": "46NF2SCdFmNzgZPz6czP5s8vYaL2N2BCooXVtrXeQRiMiSL9etoCKe8VJn1FaKyfpY2SEJfk18gYUgkfrCQqiCvX",
  "key42": "KyDs4hjm8y2G1QJoXayRAKF6nJ4b1s497SEnefrrq59x8on7GWhmPTkS83hvLiT8JxHm8h9EqNoyu5sgS3BnjCG",
  "key43": "5PhaLcF52uMvB3DMNEPBCYzNkU2KveaYjHt6EwoD6SpkuGZX9BVotUMZLK4v2aCiAYRZ2r98pguGo39uuxFjf4eo",
  "key44": "4EBcJgunykSMJ7McSkuq1wb1TH2EV7d1Mr4Cg9jcNvYLSRoWDAwN6JqJGSJm55P3WtEzjLM3Xe6JLeTios669t8A",
  "key45": "29hguGqudfR9rD8ybuSKacUyCeJWZQH55aSMqhpUY7F1NPC15H1F9ijjiqCgjqAd4XQF9Z2ThGpCbnHVYAeM7YX6",
  "key46": "2qqT2pC552ii9SyQ7gHQPJuNwwXZTJsQ1KZ9ojG44X6ZKuyMLsVuBLReaPicxrQkJ2aasPKj2T1TQgcoxKeJGURF"
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
