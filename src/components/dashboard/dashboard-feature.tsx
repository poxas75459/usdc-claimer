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
    "5nGDcHTWNeKzo4WQqdiWELtXqq5T2QLn67z5rYXmRACdfyMXPcnFf1q9uJfuw28GFcUzVhQUU3ej9kzrdvjUTrDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jQPwRHrF7j3kaxdCM84euAGci8TAjiHTDKj7Pbq6BHsSFLe7nwh23BEpT2MVWEtbBQCeuvhRQofneh9Fjj1RTWB",
  "key1": "3c8JXmUcSoJErqMcasXJjrzpiriCcyJDDxoQHxsvzXPAEhaP115ngT2nzSACBYg6o7TAGbob4NMjKBqeBVeFHG4t",
  "key2": "31S9kDBut73HWjTGiFm2MgUnAAsLLoP6Xp7WYGRNHsu8JqqbQZDLJQCyE5SvW4zZbmXVgtg276PAqtDGFTmwR1oR",
  "key3": "2n6RxNnQSLLh223rXe2UReaVNz7Qhm1h5DrbaFqzNbudqJJ1U5QsXpvjjCMU9aXmeUTjxUyxTGwsjEBmy8DKTaQM",
  "key4": "4AaUgb89pSEimrWNuTjASjbEk7dcXKDv1P4tR6292kp72s42fu8CrHHa5hdcBf5KBV6vkFwfEHHeveu7J4p2CvQw",
  "key5": "3o9ko3wAkb164UWepSw6UtM7crPsTx3utcvLoisupKjUpvNYBK1wYUNP94HcYqCCyEjyUUMNhwvrUJWLm58YHkxX",
  "key6": "3yaNcpS2E9S6vyqtGddxS89gn9HMBhKW4fnztbPY1qTkgtGByHqLgu8rx9QtGUptZCgGEG8MuRCZ2TXZE5dmenhh",
  "key7": "3JeRo85raUAr6obaY9Kv9xFtf4szKNAhPH3m1FdxrVPJaSuz7WjoGCnWtKTb45DcbspxVHVBCbCHadHsGzY6j8xf",
  "key8": "5kmSosP45ntGNG9hfJhkZZX4jtGoqus22ZfgZf4KS3mizb2kFEwDifQyu5yKbaFLAdLvjsuqPP2BumU8Ppg4ftrx",
  "key9": "5CUCkDh35j7LuL4qTZxMEHWr6S2wJ6wYeELUvk5BLvTzDrdaM6sjTu93AkZeX4WZo3LheyG3egGR8M6LoTYfnBA9",
  "key10": "4gJd8T8GisxeAFq7ZCfJq4XfcwNii7gXQ7hLuQ2AFHTHioJJFXVyvL2cnNeVTKKapbKXUdXJ6ynqibXSuknyVSmS",
  "key11": "b4tn7q9pRifYEGt9iRuz1WHifbDBp3fH1bZbScCdf6mWUWRrXzxqJFBiX41QtsnPinF7UogKgDA6KLUJeuay9dY",
  "key12": "KSHwdSHSLvFRzHsqh6ge3hx83NDcsKQ7e31noUnsDzmSSADJJmk2dVAbEokMcspDpPU2dYsWt6CaaHYHhjhszJt",
  "key13": "59T2T9ZuxRYBnxDCURZUsvdGBZpfoQ55jAH8FqTuU9ndF2EjaXkmKAAi3V5mmtyBcUzsYSkUp3fjRTL1av6TXJeq",
  "key14": "2gRtWYNBVisjYtt5DE7mJms4LgLuRCuxbRQ6zsfHiu1dvhjUHJRi1TYohPdFJvQmgqZCp4PVoEfqan8WUy4Hk9B",
  "key15": "3t6AcJystA7xtcaE5MUBk1q9EwcLbScQwmCyQrew7w9R3vVB6PJ5PUoGNGhVaTMJJA3DATR3EhJLawoc8CaAGesc",
  "key16": "PsxxUAHAa3knVFPiATDyrAyzWfyJgoT2EiHsyoRXt9JJgszLyT329PXutBFoioqkKsYry38xjLM3fP9wPxh1ygv",
  "key17": "3teNuSSJtoKS3pf7HhDzMHqVqFVwsYMrnrRjaZHoeRwW6jrTT3pEFwmQHaFAukbaFHif1FiEYuPHXmMUf2cLCEzq",
  "key18": "pVbYpwVVQ2YFDcRX9g1RmM3Z1X9EAcs1PDc3ndC43JVJgGodjrdXNff5RNiVKww2Ebk49BPRfgKYYn6yCjGPu7B",
  "key19": "5LVcvuGGsvu8C3mEWepTUdLQFxVi6YQAbMD9ujFLpWuK6ZqMKaMJvgEEEDfTk59yWMkqp6KSWhpdorrviZXu71M1",
  "key20": "3TUayXTHB45jEzKjcWHTeqavULSMBpAvcGLq6hE6rPFvi5qfQdNi85qRrTY5aFoA3VFLqB5TR43hpKpeb41w4ABV",
  "key21": "4bDoqAwz3CWGStMToehr4pLveCZ7GcR2nhjx1JfiFkVdEsY3KPnPaxQqSrFsVRbEw8uCgzsoKBBxjvz4EXY2NxMk",
  "key22": "3MSg88KxCp3fyDbUSHkbGPDT9GeKteo2qBmb3rij6j6t1U4FHAtMMxsgAHtgS7fCfK8zkFnKuS29dhprL27ctzVP",
  "key23": "5wtpLFXeLBJGdprs5TjuDYEnub48c39k3nVyB4Fjk1gvhkjUwiGYAVZGY12uuYviULtgfJkCxV8Ew3LPsnndto2J",
  "key24": "382tEVMwBAvPBjhymWBRskPLCRrQews4EcJBRBiai79aNqSMnf3wjStzUV7xigjRpaUGzaePt8WJ8ThvyKoG3ZaE",
  "key25": "4n8PNMqCW2keT22KzgTtcALDbog322SBx1xCChaHXs76zxPMHgmaYQTD48zw2Enmi1ktiXqver3LaLbHEj7dvSJ3",
  "key26": "4uk6ojoR9iJE8qhobpuYT6NUEMuL3gSkrURXkpNCqZn2uiZrwHWiWy6AX8tZ75pDrLdcAifZBaKtEq5fh8e65ett",
  "key27": "4jAgWJrFFpB3SCQEUZ4JTioGq6UNQ2H8bRgoUtQbwtaq9U8ULJyxvLjV6oKWKjrXRhLTxGJLzhBsDf1EkhnQzact",
  "key28": "3cke5YCVuuw7JGaX3cEsNnm1WXch7kW6ZS8yeG5LFSQ3tbJct1wSZBGwSATHsQ1bRZjpDtX2XpKm3XrK1SzMsaUD",
  "key29": "53csbmUza5oxDLEBHPS8WSvANRb3pivPGokkHfjuM1VHohY5jSczvR9goCpioikatHn4JfbLprvwh6vSEjp78o7o",
  "key30": "5ixvoVDrieMs6iBSb8RJeeMa7MZAzvfNvZFGRnmDkLjtk9VV6a4fPaWaJdqkE4CYBD9b8RE43RQ5yTbWSWA9APNB",
  "key31": "JZprwcrn76UsNPYUNV72CLGeyNsUCK2c8eja25kQaHxsXGg3UXiJYDpCKxC4PaUSHKwdh3q2sWeQ1oiCDLXRPff"
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
