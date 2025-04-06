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
    "4D3XxYv7hJwbyUEdmHGMALAZL2vtbJZmYgdhSrFiJCx17CwBgSH7Q4umWDyk8RRgDMr4WsCGK3rrABY936cR7G4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4szcA6tpapKPbKkgDpphRNE8Fz8i5UZK9xs4rDEE2LpnCFk3Aofh77Mb7q37K7fMDsWDGHHYQy8zAQ79uTkvnvFV",
  "key1": "37MfiAguGGQpqpYE8TQPSe61AGrfX5yXB2JcA6rsYKKaev7MJuMhhaj3R1cASWgg8sm4RkSP1FbhMhCBhBVggm3A",
  "key2": "5NAj6ibCGH1b5T6AGZyVdTLYuAgon8dNiwS8jogDHZaqCwkjYCwS2ZroL6qQcBuR7JescZfT2ZciWDcXfdz1pcG5",
  "key3": "5WBYuQPXH63zcst5dfNsh6RvWfoNDN59mpxPpB4MHn9PgSVzyu7jRpEBge3ubEtqmrFykBzfT98W5pqFZ6kuPcsZ",
  "key4": "B7JTmE7aWYhCozeGMfd6CD8PuV5KBcbKUifTB6fzpkdLUzyHT9SBwQEzWtnLorpZvKimPMVTBRyLghW7TdY9zdC",
  "key5": "5WfSSSQQEDWgAK3wZFNqmEniQ6pF8ZgQL2uX96HQPduUZA5gEok9rgfG7vPVSUNomhw6CY2CNB4mk6KexH76TmC4",
  "key6": "2oBSEmd4PkTfewuem8SmeXuRXXT5THwjVqham9CBSH1PLYsykjnAbJ5Sqk92kcRqa4TVYz5wiEd4CQpiReZ81Yvv",
  "key7": "3zNrRNbqqMQLrfHNtMUc6tDpBT18k4ooeNHCHW3y45grCLbcVcx6eGThfd5s1RDnq8rLn7EoQ4AdXmM2HZ63B9zz",
  "key8": "4rCabYjuCK3cMPeAHrbSRCSQjngSeduUwGkVh2sE8u13SuT8dpCpzRyripxCx9n5zWUaexLzFWb63iwAs1iPQsTS",
  "key9": "3cKA7pw7TghHKeFnGQGzbvPJ1fWWGzCX6Jkqt9ZrjfNc3SsPJsfQyPnW2C6AKBFwKjdNLcfL2L3QHawtwpRnHAnx",
  "key10": "4MxhffcMxPZHfmx9tGeQ1RGThwSBma4xta3txLuuUa2cSiKQDQ9S65kyxbqpF6Cymo8quJsbrv8AjsWAvZfYDSF6",
  "key11": "43UKiSPLk8h65zQGYP93dp8gDEW6MZUT3SX5aWhmo9AYuXyZ3puDeUfBGrvcRuGkTAyzCPKncHbkQwvDwETnmKQi",
  "key12": "BMmyDbcJaAX8HWpCv7s3QUJjERKDERWPSHF1zDxTzUFieqdf48i61ZnhbYtBWspKiUxGizhVYSJHVPTkHwwWKJa",
  "key13": "5MyCXv3QB1U7U6dmgAoF5iTjDbtjYstZc2mKLH4vz6YLkfQpZo8LMZtqpDUrkSdxaNjF4xpXaNdGdawL7tVVGtz7",
  "key14": "3MBKJ4yEVkv7kHJTrKqLKc54s4qiMq9Mx1fFV4jej64zCZrVzpzRUGqMAjd1Z7W4G9LCgN1FrxU3DKB33wm6Pip6",
  "key15": "FTMGyvti6TfbXumhpY2n1xq7hGJuUJtF9yQ7zhwo2MrkSDYJEVsbBWm7wpWAqYwtHiAkAEZamLzJfjzfKasDvj2",
  "key16": "3u8RwjyjkdXBTEiwSHGwJH8DxSq3qxm78yWakCwvMuG7PkNdUU8dY959mQVXPjXAsmRqXXHyDTWcccYb6KJogHo9",
  "key17": "2XaShz7wZ4ZdPchTXd2zgqxcd8CNjFLmLUsr22R72FnH23BtsijW2VgSznHUw85GEQzYhY9vTqGYeC4qCn7LPhHd",
  "key18": "3VRNJhhLpCH5HSTaEjxRDiwERtsc3izSA5oVAswmRfLexAaE4n45s2iJSq8CpT7z36g6h37NX2QBUQipg49VKghL",
  "key19": "3DoZbePaNPuuUjNSSfcQWt8VnhFLTYy1877qven2dLWzVV4syHbBocLPfxHNT3zVyQC5vGHPszWt1PHpo8gxKCzy",
  "key20": "5cnZVZKEhECXvNVBWXZ8B67GQPwZbSVXimiEUaJD9QUUhfLNEHs8k4jNbAKyGncRKQmV31DfvqEpEo816R6Hedpg",
  "key21": "4Hn7Un4fXaiJcVpGdkp51M5Gzj3dskKp3FyrDMQBLnVXPjuPR1RsMwnmDqfvnBokHDnQSAT6Dkf4ccMjaaqcR7xL",
  "key22": "UWHXiQwYAzjGvPcZa4rwwFMwHD6iiAqepfruZJHCntX6uU7x5dwCYzUairggVgYsovD4CRAg2niMynrkQHD3KiD",
  "key23": "TmG94KRP3wZXNbxGsrTmxDoA98X2Bf4PhHamARPkivXrbdRRUeRJmXPqx6cwf6jKUSxGczZTh78hhdCm1aENQtf",
  "key24": "2TtM8z9fih6cqdAsBzzYWhvtkE33QXVFycDhSy7u4rwVdiPmJpNQoUgzALYhkRGTdir8UV6TTty6jnGXpbCVMzTW",
  "key25": "3rVJjuqMEWMZKw1ZmQUgNR7vkBvTyDNDzuwRQmbMAuiimFEZvuc45ne4DEy81Tfp4wxz5UrvZczhWBddfR1i5Jvq",
  "key26": "3XR7gv2SJiao8qveNUpZ69zqN9x5XWGzRFoxS4zCFzyU4NgLpi8Xx5z6dyVpg9AR6biRxQn4nyoBcJx6yegdSMRL",
  "key27": "5s5GHiNYhd3t9XEMyKdJQudA6Nqcz9SbqV36yjGr2isfAiv95YxNzLQsqp8jxFzACVzbuUMp2KmGPsKWLbMjykHV",
  "key28": "2sboioEJEvZuExbfjUPwJhB11vbLxf9UxYMG9hFWsg3DRrxw6wi1vLyajCDnS3bbmCFqsdbhQPFCCYygTuoPe8dm",
  "key29": "2Zb87QecpShuTG2PAVEb6xbjYzC7aocUFffY9sYXr5WMHa8EQEDVVuzuKyJk1D5oHHNvgp3XBnhe9YY4sJDhwphk",
  "key30": "4TPWiYQ7MVESgPYnooi96Z3DZj6zjMHBtbFRXPC9LawQPV7FMcCUtaKBHEC7Rej5n3tfnEzwAXX47uadxHVvj1fb",
  "key31": "BksNMywKkXe8cCTvQPjzCPbwr3gxYHVD1wjkiudGJCp84NbBX6Baa9G1SBfbBqjXHZTkR5DxG9KecxnfmXw7wnK",
  "key32": "3FdYc44U789qFptnjUNgGDXT2Tj1rn6eRZ2E1NwdWNMarhvUpaz1j6EC4ecwAX6btNzoFjTXrikREumSTj1WHVUh",
  "key33": "3irdwmL3CkDtPZMPhqqKaxU88zgBRmtwMdMSH4Pewx7ZcEhszevwbL27KVfUQCc4Xbs3wSMKzk1SySfKPoq3wrd6",
  "key34": "3oc3r87Na7e3PUxnB4eKi5izdaTrq9j3xPoBT6UaupeGoYYpCChkdfYX5Kd4sAzFWJAyW5HCybLGCak4pmMnk4zK",
  "key35": "4SzHaYNdKDmvMGZt3TY2s79n5CQu8BuwfcVTKbQCBQNYuUKBe2QrRrqt5bG4BV9o4z9j3J3QAYKHPEmvYKLoPySJ",
  "key36": "57kbcxE8LxzvQCHML6RUPWbaW2U2dsYf839HXwKVyheovizEogAZ6VU6sjEdvp2AusnpybfEstvdaJs2dA11wr3m",
  "key37": "2rvhpr9KcH3BESq8sDsvi3rSs8LLacQKfCcgazCR6F9jw9ZFHQQXw1ogjdvZPma2ddP3YUeKnaMJpqRpjDBGh2w8",
  "key38": "2cM8FC4DZjpq2Pybxh8SD7LSwSX7pRqCcPuvBapReNCuit8YV1imfmEJnnkEqsPh7MxgGhxXJcZ1Fwgi9DQWQfyN",
  "key39": "43Phn2imLAvqemAg1DSQQ5NzVUfcMjg2CZmaVkH9Kwm74LRWbybWXRERjKgEhEeDC15M5sRtLTqtCwKPVH59S2sz",
  "key40": "3EFywpC4YbtqtaoMWpduL2vbdCuUFp8tpTTD4bZRJQUqbnG7cRAmBtvpgBKrFgiuXnnJakdRZGny3K37xGZmtrJo",
  "key41": "65NjkEurQEXR4ymRSXXvJyGnFbTiwQdyDGZ9m3dyrhHGj3Bvki7rVdCq6Aa4aTcNT5kgNr94M8gMy75CViBWGwnU",
  "key42": "2W9CtM9Q7qGdT6AP7E9ujjVu4a2nNqXnFvZiYqgqqVhbuNGwPEL3D2Gp1xmsDaEGQrt5Dh4gYqmxt28zscF6N52g",
  "key43": "SEDUNFTPCH16ouLjLRfRBnyd1US3VjzyYDPzdjK5MWPskL1fhyW4DXbLgMhS7Nn5SZB5rwBDMCg46oGuy9YNuAZ"
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
