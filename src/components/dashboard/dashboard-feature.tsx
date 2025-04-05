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
    "4UQsxGpekGvfbQM8vqH7tYfDbYbRoaJEo4fPvnJFqA4HtSEmp9uZ4Ss3EzqcAVaYSeiYKnkGbwqR4jSkHWsHb3yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ybqgSpGR8ciVNqmAtRjwTx2j8KoHeqkfeAeFo2EXdnUaDa5AHa7Q5XPdnBmvqbqgASL8SECAY9GZ5mz1StW79N",
  "key1": "53vrQ3C3qgd2hunhSQcNKyP5KkShtbZpVvdJQmHxMNyNESiN6JXXJ2abuFJGho8SBK7AfWprFBdFohdnhrhXBSXt",
  "key2": "5yYaxZTZhEPm7ENsNr8rQfqqXar4AVKGmz8uXV9izfDfJ8WSNHBxBiWU8KeCapjRbtkWAzLTHeaJmNYGFRUMwtmr",
  "key3": "4zZTkVuZjveDoqnRTrVgeBEEvMhfYSpAzKtWaLmtxYD9uJj74J1xnQnJmXq9URAHYVUH74CnXTsp4gCptJayNhWx",
  "key4": "4PsFqH8ApVKwzbojdRkg7YJPNyCBjSGU4prWjaWTEL2KXrQKynzVMHBAujLKQT12pPdYqjPb3p5iwuV1REBV5pNj",
  "key5": "62qMuC7xk7mss79oCeHkeiCAynq835xBw5tDwowEFrybjxDkUhferHhJH9zsHmfremotPj3n74TArLGggSyipcsS",
  "key6": "3WGJRQ3WwczcvGGe6ewT7uykBjEMvoL4kuFWrkEkQ63wkxhLdGNng3KKhgyxFvCmxCZuSHn3vfCUQwMmNWST76EF",
  "key7": "3ASFuVbmTKRPR2jogKKvNdRcf1gRyzbWH54xHHH7EoFJkphav5PmovkttX2hP3b1iSvaiHSDc29kQh3XTnDkhb7E",
  "key8": "3BdtrLNnxSFiZKWenR8Jeq7ug96d8XhaaRKdk4VRZrfijDTth38rWZG9KcQesrdZwmm3xidvKmckfHCowrxFwPRc",
  "key9": "3ZvxjmX6yMgwrEiy8TA5Ae1fbRSKPRVRhnY1EYGCts8q3NAt8YdGdnv2adzQAUdvnqmCpo3pzo526EVJbiWhkVMA",
  "key10": "4eA4omD8eivkULybYd41n862zarq9NUJYQr3DqwieioRWFobF3vqUJ5hPs49f7TEaAJj4XpuBztfmvQ8RneCk2o1",
  "key11": "3uHNoxAXDqLzs4hjbujr1TsunrgfnTfcS7SsxkDptdfh1LuJGkgdfegaSmecZAZ3oK2S7oUYv6NHPD5h6h3QvFXn",
  "key12": "5CwSNJwjW2FSPNxkzYq3z4HHuckUoULc3xc4Q15ER1dnFWvdFHrNJXLpCurKCXZstCTmxP7C1QusBaanfLTu8uPS",
  "key13": "2HptPF5YdDWNHm9Hmq5xXxtXvG5CQLdoQMeEq1STCmJ41eGVSUuJgDCZdMLBHSJtsRzdQi1orSRHVhYPGRpbcd3g",
  "key14": "iM8RPsYTZepu263RBpSJbGFcXBoHgypjW3qYJhkbSpx34Pw3d4s3ybt8CJZieX5uitJd1JNhVirRUmEHPvmXixA",
  "key15": "4nFdJFakWRGMBVAx2tpfXeSSZZjF7twYhjLJmXkYam9sbo6bpSpn1TKJr6w9sCresMx8EqRCTGwyC8Aezs4LBYDL",
  "key16": "5o44gJbmkQLWHwhqRsVVKLnamthMaktkbN3n66jakb6hXbUwJ5TT6WB2Y9EH4vjgbtUoFozsdYquhQkibriCoyoi",
  "key17": "4zK6kjtnJHdptdTFGTpzJse5NYHTWsaAp7BZQZFvycg8jwGWcJDrCZmLX3j6jKnFTtpvzANKkrz5bQSC2RsBJUMi",
  "key18": "52wTbv2Y8KQEUhnxUnUMY553ZAdjj19oiHQkgDK9DqUGskvnGYawLh1WFkS61ntdfDScBtzozPrgLc4emxnDtU36",
  "key19": "4qGn3Ejhi1FhYZbjDnMQodsBY4fvfu18SS3CkRyGzWbXzAUkeeHHN6fr15MBohxEqTdJwnfDURiZskjXSforEHPr",
  "key20": "WCqr6xCfwk9vxNBLV7tS3dQKGXLq5EyXuYskt1hthkXSFbeQbKVgLdU6PyY15nPu7f55DGNzhyGUkALWCdBPzQz",
  "key21": "5T1WNRUCyomYQVVy6MLtRBoRbabRR7ZgJtzVazB91tXufKgrZtbXaitGPxTyoARZDCC4qJYreZx5zeUdLxyCurcL",
  "key22": "VPJBqc2tTmSKupjdvNH2xCC7YVcWHS8wMYSkURyEdiq5wft2BnM3XGu4fwcNQG3CAhPh9Hx73g19WiCPZoJ1gAt",
  "key23": "joRMnsWyBXgcdsY6ZEggFtAXG1AZaZDJGvP1tESgK7aiFrgLyKmpaHmXveAGfPAZKEdp42HNrKQreH2Fc3EZ496",
  "key24": "2FQaMddxyEbYjsSWiZy9SAvsBuwjp9VXM9LVDixYT465eRErCR5643vj1vaH3sq52EnyMxCF8kYxVV6q8Lvikrfk",
  "key25": "5KrWMJcdaeyZWoCa7Y1tzC9ExAGGnBw4eiNmEAqzcqWZUZpG3QUugRfG8T8s4XzUo96xSP12HFuFLgpYruvd7dFp",
  "key26": "3FFsKYWEtmg9S7frEWY2NEfFXqfp1NRGDfrfmKf5fxYjnqGN7GUyyHMMQvw8wxEoGT2n7fvkr7UP84vmoCaQDLDx",
  "key27": "4BCicJ2AexuHaPg2zewHnq7TUCmFX7H9L53PbXFMxKjj1cyUwM1DCnqUrhwGdF2tH2GDV6uhovZpPpmb3g2ZnU1W",
  "key28": "3jUfFk6QRxFPkLeeF1FCT5Cn3wKgBmJcm1qj9PLa198UhdaAyVSJsry98C4Xi9GCjpbA5wHVuLxrCcAnLqSEMavT",
  "key29": "4dremPVyT6j6cvLCpPBnrkXRPaZSR2aGdn4HKkckPBuHX2vFQKJnnohnTrC6nR4TXmPUzTrtbnrChgSWRH8gf3gX",
  "key30": "3RB7pMRGVKvxk1Jt5fmbvwsrBeLZpr2WzPGXN5kQT4zv3Jhcw5LiFozo9njfoMiar35rVy3LfCvBq1BedXXxvmf6",
  "key31": "5JE6Av6M8oQLLz3AhGbzzB7Y7Xy7iCk2GPdwqUd68xUq3prZe7JrxJAmQzD4JQ9f7iNr6bUiRschHo2Z2CZism84",
  "key32": "2L7H6ZjeEAXaJKevqAtxCuii3rTYkG6iJWZ5rfHFpNaChtCF5AvFh53TTjsPJZH7MpjkV8G1V48dTymzL9gqrCBA",
  "key33": "2Mu3rMLxHtzwfh34R5PwB5wrrG8ip8qGMxyYsmpBtstr7CN2gg81CdfYH7R4oigrpJ4MsmHvFuqrsZp3FdYVr41q",
  "key34": "2LXW2Mq1PJcECqyNP37jmSfTsmA7D1WSDpKSzeMb7RUPixUfas4jpqFfNhtFXVG67iB1W1kWUhvfpufTxtzRJWcv",
  "key35": "2quEYDPMmsCrZvotnqM7anJGwR847kySxtbC7ZJm4sim4gpq1xYA3YnXQTt5bDEG9VdQXV8cc6rH9ssmnJZ1roQE"
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
