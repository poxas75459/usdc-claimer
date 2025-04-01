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
    "2VUt5C7HL8NS3vAMQSURRfRqSDEPVFWjTwWxMTiCMAri4kyareTawsTRK4EcNoaF74kWpTWZB3kvni5dQYtyX3fH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfJZqcXX5NVHfWy7aHbibxrpSziWjMfjjhe2wGc6A1djGdrLmGziAKeRHyjvcfDoGZCTcRBb17cbsS3dU8MBDu8",
  "key1": "UL1MRUCxQd5Ha4QLSHcJv5k1kWfHCiAQzNpeKup7Qbs2xGA4ahUaXChU63u7xSVQDC8GwieaFTSLidNUWHmb4mu",
  "key2": "Nr7L3DfGitDEJ89QHnJuCWn8JZ1a7x56RnLFLqZdbTTgxQ92cZUCWQ7SDGSVFSpVWD9JqRm9vPLpoPYvjQ4MggH",
  "key3": "4otTZTEJBy2miZFzWiS6rwZQXGfBdEyJbTZhHwcfbx3J78PQiKNP7e7kgd8SAhUmLCQWTwLnxzcPhc4GVP2atUu9",
  "key4": "2z1kX5aK4B6pCpY9eVqB2N9XJ9QAteA4rYk2F34FyjMdrAo3Kkzzw85P9TyavuEr9CK2svjGbd85VTugVhX5f9V8",
  "key5": "5BELwWizc2NSdajHNRhBqjasttpw51Pux3bUCfmZ7ZKwXNvMHQMynW7SyegsPACoeaSP8Y7JTVG5yYzCEgBcnvmZ",
  "key6": "3NcxXS12i781vyXW2khKgEnjzjdqM3aBnDiAr2DEi2kUHNJhrnwQqRYfLn2TTv87tYjpRjm41jnzAQt2bJuKHoQL",
  "key7": "3LDMyYTzXWVdRthrAScMAoETqjqJofo6yx7M2fJuHVPnossEgN6MrZP1v8CfttcUCP3iLgFgH2hjssWedWVfciao",
  "key8": "2UUTJk77hBiWTeSTyxi18LJDVb1f8XZuK6u22UeJ8s9ZJBoxrjtfUc3KehaBvz5k3azrXkUarTi5MZkW6LZVfpvw",
  "key9": "5UBfVnwAtyYE2odncusbFfp7JeE86xKrFN4GoLWupETtizXMdvVkRgBmixS49KW2itYvRc17emK2WGe6CY2azxDU",
  "key10": "2CqxHYtpW2tiUJdw5KTCEtjo1zAbhw6A7YHfD9PTN36cDTg7EsBNhsc4V5Cp5ZSHPRmfDWVAEZeN3qkekV7Bxg4s",
  "key11": "32tGvLbCuJKfBVw9usbDn1hWt55HkErRgeZXSacYUR5t2tP57fxjgEZ17PThB9Kb1zFeEFxHdHnZhRZsCLuMmkSX",
  "key12": "4uTpsD1p9gryYyZikPzGfXPM3rLkykLUw66NFB68bXnZMaxWe2Kpxf8va9hyefRJWjGoizWVVfVwRgh4a4r4U6eq",
  "key13": "5e9Dh5cnXpvv2KegGV6rG72bawTXprFtL5BgMFNoGN6BD5eCL2k3vcR4H51xDYn1Fq3QqLwiTTmNDVtyqSRyW7p3",
  "key14": "32vjNpPR16ZeHkHtuFZDuS1EnBxapKc2rzL3M21wfwEKw4p7hmmiRyrqCSLw2Duw8nraZQjkzwCkLLZyGPiSMRqJ",
  "key15": "wBdiA6jxrVAeJPfLkthV2Vr7k4PA6fh2N4evy8E2bsGTLb8ZGGU6453R4hf5L2xneHHqx4J3aVGXLpjjqXy6UmM",
  "key16": "3XgoReCHqpHN69iD1nMXpDm8RBFy7o3UQ7eQGAmFe6vX5r4ZXg4qv4adZ7kcEtmXMhLYXE1DwCLpALPpC3j1KhU7",
  "key17": "3h6UYVLfXpVeS84r5HTmPnmpjLw9PowXwY4GPVfSxkPEGWuFUtXSkJ8kF8w9GwmfPzNQnKcnyt1iw1AygN7xXPhB",
  "key18": "3t5wwM6omHpBzi9DrLo2CvbsyYWA2KXDXJwvb5eKzEPJzoSZUuMvcmgDUjfdgRN6zDQvNwzyxza6tFqTtEGQAciw",
  "key19": "3r2zGLRJdzUnKyPQYQHYJkDhyEKFZMgnnAUDZ2v8iXVifZLHRaM5c2V9994Beiwy9HqwQdSuEUWCAJzsieboHCct",
  "key20": "2sq8dJg1HctFPfThk56XcczaLwh3HZaUyjD39RATDJVMYQYwKxU4t4gYyZtMMK1dcUVAnX9eXaZqxmvCdFkmnCqt",
  "key21": "4N5gomT5JYbhacAkEE9bKYdNC8ibFqEBf8RcHtnXmCejbpQ9yCfLyP3YrpH23tqyhDz6GULe4es6U53tymDx6jLX",
  "key22": "2dMjzr69MVM6i1UDWkg6URLdhrgBU1BARZwxhWymod3Y4oam4GEExsuB2TvP2SjpYFuFKaEuxcspCypEB1f4wZRu",
  "key23": "eziYZrhvPRWzwamUw3mhmLqm22NdQbNssw2twvo4VQ16bNBL9s8UiwrRx51rqyo4S7Fqr4z2zNspbfwkPoLeguT",
  "key24": "3rVJhP5sf1hL6AWfNDRCrqswK9eow3vEzUtAvgHY5DknvHFCMAbgkwtiVa5G9FrusGsYMxJU847NZxrfK5VC9C1p",
  "key25": "49VnMSzfMWVL8Ad9cMTLzxJg6y1T8MXBv88s3bvxk4Fa4muDWroPdxtmi3qy7DEv114jnBXcW2meR87iBAJPGPca",
  "key26": "5eY16yCwAYe91m9ecAnDAWwXC3AQVYPWbXWBrMNz2pZ4Rd2PMEKrSZM2tQioQUHzawisRTK6Hf92VWBbax23kcdu",
  "key27": "5hVpdvV1Dqogo1GUBF1ioeZW9Hop7DD33dGz1CdNwFPhNNAcEBGqS6H5nnurzRci3T4VqUvX2Nj3rwKHHuWkRn1Q",
  "key28": "28EXSifuDgFjyWrmeC3ZX2qBhGkxmPDjsuuaqWtt83C8fY6YVsQu2o5FgRzyCzWJxSX8DKt2Dmo7p2LHW2dVGKJT",
  "key29": "3aexerRNHpyRPdib29asAQqYpZ1HGsaPxQNhY9jQtdTBWDTXTogfteRr4jyaEgzYKJkaFD9s9joczbxryXSBFpfY",
  "key30": "jjrVNV6mWW24TN2qZ6WtPYUX9dKg4dZz5MdsXKQpFjJ7AvcDkb26eyeYQ3oZLpAuAdqqchjd3LmCkH3MLL3GjGt",
  "key31": "3EnHw7Vi2gADSD8X29AVy9jkfCML1WEQnYQZFXecNFodZNHbvDLJRt1cHPkbFvvDQK2qQ3dFUSvMRhM34T8gqbqj",
  "key32": "2rLS313q15VQhtKwi8asVeCm1nWKnjUEMHyeBUt6cTbtzc6bFmdQ53r73SJ3q95W6m2xv45BE4aCgTetZdmhfWcM",
  "key33": "2kwHDQqYFajiGVASZMjn2PLw4yBb1b5SYvNPDp7pKfcmX87sTUwxkNNp9C7iyQpr9FUoewHFVETcqZtoA1YhXMV4",
  "key34": "5pqf1M3fsNELt6Szdd9Tp8ZgPjRT8DV19g4SumLNkJNHPMQLLoycFznhwL6Z8rKMS86a4KfZcv3qDNYiYxh7aNo4",
  "key35": "4p4PkU5VHRgtebURkBeHns5B1pQEJYhhbCmSgaqBoud8Sfxoabf8kKdfYrEFDYPeYtG5a2xJc1yQ2vuFM79cTUin",
  "key36": "3JH1NFX3c9xMtdP3hHhkzkw3X4xnYKSqsLbgiQZcszWSBEz3agGB6acaW4aKXzMU68DrhxMkyef1RcwC3q87ReMZ",
  "key37": "M578sutunarmT6cu9ffS54X9ezPjwpteNkCscGrd1pfJhasuzMe2UV1yX9jpUVBvgfaeaTsAhxGWmW3eao8SsN5"
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
