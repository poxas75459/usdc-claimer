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
    "33NhLGRFTVAK4fgmVWLpY3YzCpDZnM2obWPP5GuaPgPqJKAqdPPYPuH7yL67yUijKVeTdo4UoiYSHAcQa5JR88AC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83yNeTGpDXqY87qm2znbEagsizQsWR2U8LvQbHxSkSRWbAYWzXzEK4MkkmsJo9iQSQNacvYdqgog3FZjY9e4i2q",
  "key1": "2de9WbWEUzoDUthM6ScqLoSQuowegLT1su4JdiX3GaEnDTCxA3WJCPEGUVZJJeLKRf1vgRLEfP1JWYb58TLeSa8u",
  "key2": "5UnF34m4qE6n8sGjwcdd26jLp5872RCxkdeWLhVpq92mCpt2THSRnWtaR2Uapd2xtxvm5WC2zaTomYN7kDfSNfBH",
  "key3": "5pD6BvJTTSNzrf1dN9cdPPPcGVzuNFeH1KhPsi11L7zuyq5TjJyQmMe5yb4AQsm9udgRnESsob6qbUkF4yJ92R3Z",
  "key4": "QDrnzce7tjBRQR4yVPD2vEkfze6k4ER5VhFVBRD82Mq2hFcEinYoxZUfDNaZegyLbedtcw3v18oxpjincXVCkdu",
  "key5": "3zoMHgjGfmz3LaMEqcwZQEyp9BQ96aGXTwvRiiL9ddHJymEvek1PDGKBCWuLAi3fogakJjBy9NZJJpzLxEiw7yU6",
  "key6": "4WVKpYD1hgUR3CkvQUCEGnTCpti63kxUSMaCjpSqyN2Nd4dhTJ1KwC8nWjaLzzTDdStgznsvuSpfWPdUz2k4AP9a",
  "key7": "4P9znhFBmB3oZEMxW374yeHApWLPH5M5n7b4wUmoSxqw3iJvx7CQuunwRawcovHHZMCfo5pEoykjxm49BPxjHNzJ",
  "key8": "5g7VJHgZNtfW48abc8ksZvaoMX2meaqsyQzGQTeyMHz3Se8mGbmQDhu125cj1ot3TBAJmALRV3jQFTFHeJFpM3vM",
  "key9": "5JEYyGtffW55hrSeC6jt1kGfnWeoyc4pePaRnQKkLPZToiYVpVUVtmN7zRPPPhtXLh3rsb9ZUPTSbb8TYXCptPoP",
  "key10": "6iM6f48BsyGjdYmECgPDcJn1kXuF2jCs6QqYvLTDSUHdLkutWk2VfFQiPR12bwB2qfZihiQrfros22pB9sPGrVG",
  "key11": "2U8qCK3t4UuzxnfSnue7fLTyDEFAoGFm9f3At3fUYgjZn5BQZG63yHNEzNkdKnSCsT14KaMuuDJ5dJbZaDdWuPSR",
  "key12": "2YqebirrYpWFwozjHZD3cCJxDtHsUxwYVowzb8Y7xikksuL4zirMa8eYp2SguKY767c1MA2b5yuGR3Nn4FjPbR3A",
  "key13": "5caMCDKHgUGMNotG1d2DuAGGVmc2EeqAGLSRGZLYfEu9qdCsd8q2CinBmt9jF9jThCNjTM9XqLFbjSQMrzGu6ghe",
  "key14": "5v75Dfz7vTFjPWwaqtWezyRY9R2ELgh8CFoWtYvs9X2QFhznyXnT2JhudrT4VENVwRrHrA7GQXKaHYCVJoLeUxSB",
  "key15": "24QdRQj3zXw4meVTUVcVBvwgXXYNK2sgfJizpRpv73fFvEvtrty5Z3pcQ1C9jXtMGELmXg5sLsqvM78mmFZUuxK6",
  "key16": "3xHDiQbSkWF3J8mSQzg4ib6c4nZv7kwDVR5kXKZdciU2Aem19BiW4LRHfqb5sZ9CwGxZmAnNNf55tPPMxzLSSVi3",
  "key17": "66kFFEP56mJ94UxfZ9H1h35PZLvLeisW8sMnhpeQEXtPJwPMuCbUR2NYhUUVKzaskCpw4XhCmKtmZhmY8ba5iRT3",
  "key18": "2NkVZ7CrFJYn4Vd6NEFhReVqeugsyT8UDMeaFZYHT9Kr4x7vsVx6HL7QPZmC7DoSevGBejnnwSfpCRKkYeNpWkz1",
  "key19": "2eW7gjiGB2Js573thpaigHeFYMJxScaNeiEBfFUv7xGw5JH34J5fhfkY6tesy3vtj9FCeDTKoYZtDJMACAwrStfS",
  "key20": "g6dRT2PKC68UP4AcwjCPJ8HPjbjdTxBu2b4RDukJco5quNWMHBrxrtYrGvsg5DxVZu3UYQff9T49BM9scqcar9x",
  "key21": "HRq8TGLRW3sqGdLDA1gFoFEGf23pDvUs2gvsVcUWRF6vecsf69EyTHp8UE17kcQL9Cud5gWB69UbnsdKjfwRfa2",
  "key22": "63cxc3QurU22FrVTXFsH4zuxHAtPVtRDpTvA2FSpsvyywHjNnct1mxL63dHXv4G4SWrZAUVoM3C8wEqPjmRbHtFJ",
  "key23": "ovgmHmikrihWBS1qMEJwidsv4rDHLx6eXU41k4kuKivu2TZVSbHqX3y6CRV4RjJNosJoQryNrJ2HTLvw4stUF4t",
  "key24": "3xodS5YJR7PLjpFB19JaPRhWVLmRV2wopUjPt3dwrffrAyXbGStduxUqr4VJT2TJGPnK3PLHfPm9QeuAamLv32cg",
  "key25": "4rLd9Ko6CSzwtAB98c5gUL74LwQ8H4YneG1r18hZDXcH1tWSzkkRpAcxBfUjYspkp4rbMJXd6efLuJBMAd5CL6d6",
  "key26": "etLwDf3Htu6LTWXCSBnxZkMNZZnG9sZpm1jEFprX9Ze3yoy2VLkBLtv3UUcivzU65KkjpxqBaK1tPisobvU7PpT",
  "key27": "2pYKxftR5vrSJbUQQiN2ApQzSWpAFN7vnvqLdtdMbj9d2RHXw12Tfq9vrNmnTrZNw6yNoefJ6aUmkb5uBieS8bq2",
  "key28": "5uJy5o87bcfgwB9t5zVKj9umWPv7VAPCnWtdvd8Y1YtM5mhYurq7BdFCpbMTzXdSUAmwUJykCNy3dxjSZGie6M4S",
  "key29": "5QGkwP9hAZLvzuPQB7ME8mpc6mi5SdpL3zfkbYqWFEaBcf2W8fLJVdkCXAwWc3jz3Gi6wUM9g22CjWk98EjNwTMe",
  "key30": "41MuZjQxpRSmqhX71L1HeMjCMJaKFiE1dw6dVvQHT2FsPu9siabooxtjDrTMuZ5QLXAFUsvWdun7pEyShD6zBeqZ",
  "key31": "yfTRvemhJv5LDEEKXDTfdS7xm1qvtfgeMK5CbqtGwpwU2rnLo5NmMx2VjXquNHAojh1VxZk7ARrF57c7qSNWF2y",
  "key32": "2JTuMaFY94joWxji8Zonmpvv11ThwEUEV5yV39eKdMgkRqJoQFTQefGopjQH897kpTEjMECMnVcEdR5jrjrCq3Gn",
  "key33": "4jXesUkX6y77WHLmAptsokdhyba8MyQuxRSEVW5Sd6x5dkRwA9oYStYp8Q83NVFX8Tk73xjJNifPCC2mkfDZFpYd",
  "key34": "3DfeTjQn9FkzGXg5d1kTMeTBqZtJwjqUSNaeRRvoQ6vo15D1fUjZfuaibeCg1HwbyQPFjR6oeuGjTVVmirHUaa3p",
  "key35": "387SBGjPM3HYMsiy74YuwLViS6c7V2wLwmAPMQe8ZipxksiBWTsiU1muYQ78y7VKRLDpQqbxMNrFmPGzhhA7653f",
  "key36": "39PEh3YKadBL5k1UKgRU61sUnfdsH6YXuiWbj1r62NQMeDcTAj22NXsTxqY6SvS2TW9GgQWjewLAxa4SMBQahghS"
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
