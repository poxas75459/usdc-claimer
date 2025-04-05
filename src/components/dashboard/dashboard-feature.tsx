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
    "2PE3iexer5BmxZbpJE8S1Aqpp6uSKMosNXQTYhLpBkKGeyfbpcBkaprunC2ec9FfktTJ4wcYegjoqMDvmCq6wjnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GKTmxmPNqymuYqR6fDNCJpK685EcGLrLYaPskqsQdTzETwjzX1xbEXqKBjURjMgA2UbhB4Gmz9FBQmTE8euvDa2",
  "key1": "2DagD8z32QKZ8eegyRYcsZiYc2oZBxj9mpzzaewZ4pxouEoHfacK5nSht9AadLN7btNch6Ttsyqets3x697xQp7b",
  "key2": "3i4GpmFFYyFDgUzktV1Sqn9aJqPsmSvMpNQpEpT9ZTMpgcdTz66aTREwVQGf5LgeWKGcTvxciypKmA4TA43ijDBz",
  "key3": "Z6fL6kp6yLp92QA1wF95rAPKZxwqv1wKWruRXTykPGUhkfmeUUiaEmRy8VzMNJQcHu3yUbg9naC1UGTrQabGyks",
  "key4": "5seJ1FLmt1DfvnwSDfWNgUAkBwTeFt9ttk5cT9uzSAgQhYb33KKSSoYbATq1GS7v3gg7qJNwYo6JYW9zi9RvSYuF",
  "key5": "4BSnug3wgfyGTwQQYyK3K4zNJLEbDnWyHxCBZbDBQgrvDaEM1e1EwsfyYee9BV4tDJ44sm8TVrYFaYiVvs7YeywR",
  "key6": "5wodydivGVTeq64xi1hjkncDCYcmQjazJ4LfA6DBdAHDPfGE84PgNtVjdjuasS7uL7vyTEN6D8rVHWw3Km9gTdCq",
  "key7": "tBQaB2D7DdJwoBpRsooMDp6bhTEq23ZYNQEnWLP89c1UeueYveeGPC7pMYbc9815WFZVwG3k7AFdKYayWxhyuAi",
  "key8": "5LTUWUi9w2gAfSL7PMPK6RD6e2ucsjE45cFtuqnfNx1m6o25D6mxYHfUAHjjkhoaMRorXdQYqRz3usxjoHS19Z8j",
  "key9": "65V3781YMKt75fSwiPeWMyCt3LVapsmqtZjLKGh1HzkvywC2yz9yatDgN8YgK92VdavEjVznFrKEkmReHfW3FAza",
  "key10": "qNZf55n7BDEmHxB7TQB2HfTLA7edRMi8jG4wuuMgPhUkKhfUkkXgQ4ji2rQngkoXB7nrgG6oAcLf5u3f9giHDpZ",
  "key11": "5KqGVn3x7WziDrKhh3hcwxNHai1WcQZJ2qgazquCUyEfWfCyDSFWEWU5Ja5zJKGhsv2aqo3gTjLKU4KD79T8Vjca",
  "key12": "5JGE4bzv4QBQPQ41RGzK99GNvNxG5gw8PL87jkRqYBK1uREKKQew9SwLyNUQkz7vbKVy9LujwHLX3Unputk6ous8",
  "key13": "4khkrrdCVJn9TpjKoMiXhvrwmK1kVA2QRfuiXp3KQrauZ1eeBTJUeBkyB6eZ2SdasR6vhZiAsukdMyWtzx3eSsjA",
  "key14": "4GC7GsxCWAUaB1ytVjcZCEvNa75bxUqrAS3GgGYWdLR65EbRv5jRyofWKJXLsfPsUndymkpmhsiAcu1dcUzVNuQR",
  "key15": "WB4iSQU7fuEHA2fdTrKcuDsJ3iVPRKSVH4axYpi4jaPRY1SE1CiYgJXDcrSLYW7SfEHFXB8mH64c25g2wBi7Mzk",
  "key16": "2xxgxoLPUQy7vHKrkZFTZucYur4EYfgL6L2nwjXDrSofFDt9RPA38MAzPRPMo3pTCq6hbrNmj2oU7GDpqXae9XC7",
  "key17": "4ePF4sXuNvkjw2h6PaWzDhRw26KdscQW4pUgrubhrgAXVY7rDt7Lk4xg98VK9mvjDY9juuoT5ocTndoEHRvznbCH",
  "key18": "4e4hSwCSVmpdTu6B1eZ57vZmycoFr8Z8rtLuHmRUoHNtvozkzvR3Z6ALiJAFEpobuH7Vu6bDJq1SnfePwsvmJv2k",
  "key19": "4ChPV2BPBHkYZKcG8ewCa3VLW7A1Buxe8o8xg9RzSR5Unjy6sD8LAfRymqbVSjNf11YS4taRo5GE3sLzaCox5K3B",
  "key20": "4wCaTD9kS5q1bj3vob1mn2duJDRs2CANzkT5gF9jhyKgeo2bYhbuhbmENZUCYbhZPdKwHTtot66NRsT3rggS2Sbi",
  "key21": "4CDRQheLrc6oJanr9wJoVd3RiL5ERPontid5Q62WCzyzJLP5jJnK9BnxrZfiXf1vE9fJ7EtMybJGLdGCoUQfzuAZ",
  "key22": "4mbYeQDTt2gC7WdpQgmH8N9ZqLmhLGTVDjx6pohzRJwfVZ5TmzJD4ip1fKjYkkXSHEBYPq7V3CEmk7mboqKi6U3y",
  "key23": "4yUrn5NcNHbtJzBLvtryScsrssp9Hb1jgHjgLNtMbYBv6xC67QppYTR9eGiTLfboBVU2WpwJJEj7D1azBYziwVA2",
  "key24": "4t4Q1bwaJuPcZXF749wvkVxuKDxw2GwXbftGHqw1w59PJZYx4dQMpK8u7hroadJqYp68L7gBDDiRoJUNP8nDxaCc",
  "key25": "2WfSSpVmYL1YLJ8dKQgXnkdpyV9gagHcz4TRaqQLoQYo3xtw4dC34eFc2Wme2ENc5grVJKnhg5DDgpk2KJdziJik",
  "key26": "3rhge32VtUDNe2vWvE2ct4C297V1VTB66SGQRPXL5jNHicrowe3EdMHGWBH9NJLxAmDg5sA1ZHaRiCVmTsEqoJQ1",
  "key27": "384n2QabYucSEJsHHiJsHP8ZNoBMdYS9C4yqCtmZ1qsiYv4okuukD3tceSaZrfVSB4VtN198yTK4d3W7u9bHrHZp",
  "key28": "3gBwZ5DfnY1w3Zbr8W4B5BQjeJRbWZNrWoHPEsYS68sbKBM5G4USTArPypy1HTCHiD8kCyuqMnW3CSMQtAvS8xcb",
  "key29": "21iYHs8BbLCx2LMvg72jm5bgSfCdWP3r7sBk7WUtfK2ZYCwJYoRLwNgeYv3WzpJ3GkKtayFBDkCWx2WcUFn6TgRe",
  "key30": "3hukwVzihUkHTGeeszCdDYnzhFxaWNHomqHE8Vp4C8aN1H4ZpbfHwHLABziShZQ1QEsosiqkwRK3rZLgsv5wyCfn",
  "key31": "3CqvPTT2maMvRdrEjfNyiDkkuBeUrW5yXTjJEsxV2UFWndF39tNEPyhX6J8PCnn9perVBkyxgM2UQ8iiNsWJ5TbT",
  "key32": "5KqkiaB9yupRaPoCsV9f4pPgWsuC7sFN3Bw8Ko83yfQ6aRnmhkWh2zi5cL5JfyNemxfVR8CVuR8ehd6219v6Eghn",
  "key33": "34KQmMJhrs4vSz2P8YBaReQJRFiHukZNBTmHAH62aNVE64U8YieT51qdgi3Uwy9MLtLxQUHjcKsFypsPbFnZRSHn",
  "key34": "5H2Nr3VtiPMCNS1z7MuMHg7HDXmzPYyTnG4dYAjYMXHK4tbKENA3aZ47xfTMtA5mugFvTmKi5dSrNLvUMNwybTV",
  "key35": "5L2PqnyttZfqzLNUdSVRLi7GN3g8uKwM1zv9iFSPFNKzaiU7UBkdJubkBqdxWord3TTLCkF8sPZrNw4dBMXYHgT4",
  "key36": "2JXaGFKCua3pThyfXNejNQXvMMvGobwyTRpsStS5rFSMTVedqaBBTT3qwnpfkuMgfZL98kU4B7W1XhgcLEqdBKEx",
  "key37": "618ztRcpyKq9ByAuBVa1KSTgR7KPgX3jsa41VqTjPMUzbS7A71T3EYuf9PB2pjqUUYkk8JtuTEHee8M3rG2DBeoR",
  "key38": "5W5BvBxSnRTbTE5MycPPK1yuWM9CnMBzvUn6mdBhGyYk8nf8smwFtJKGDHRMGppNuktuxPjmh3Ygp4FYvFYSuvwr",
  "key39": "3rkNPa5ppaYS8vfsMq6J1wPoQ5Grt7TnXVf36ospdN9vPcAFZoH2ZVFGYrcZvdShho6vYzfQSYMy7jHokHGaSSZR",
  "key40": "5WpMKddk3UJD6oRAGhyJmSNJii9vF4bcKTDUHAceKbrvtFTHXVZgsDCG9P8WSmboLeU3mWBBHX7u1DfMSVAj9Mjq",
  "key41": "3vWfStB1AYELLJwbpw7entgG8tx2aa48gyLDSocBux8Qkke3pqF3CaBabYZ6RzCzkVsn4EJLsrs21CprG69uSa6",
  "key42": "5XeZchcRcTBTSSqHLehptRN4dWhSNUaJyuXRLZ9zQtRvCs4q2ob2Q7Xer1BCbHsyEfSudLqoXQ85iGMzFs1UxKUa",
  "key43": "Z4sgKfXJUGiXKiFpFBUs6uUt1XGYgoVmy3hhFTKgZcfXKhbKDWt2rqin1EEam4dT8A64YBgiAyosv3Be3wiBTnH"
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
