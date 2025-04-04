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
    "2F4QHEzwcQo6VmnmvePTeM93FTmncUpsxkv25VRNYwXYD9knAJWgCHJdv4KhzsfC22h3BEBQeBB2utja4FZzfVLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34skK8nP2oQSX8hAmp5Rb8LUykJuByTHkEXA2ukzSZ7Z4Xeb9SdgcFPf3Fm3mhewT1Sin3en8GyvgddcSBpMd58Z",
  "key1": "2FQCy3N7LdCMyZfonxxoidCobfnALoTeQW8EVTypG1TTqZUYATojhRMtb5Sd2Y2GB7EKVBqaZQXX74AYFii5fAVX",
  "key2": "2M3b7JtrUaFs29hSVYNeQNTLkuDgdVKE1v5wKmnR3U3hPoNbj4MrQ32yAMRS42fy8p7dxNp832zwqk2xWh69GFmd",
  "key3": "4Y2asQsJzLdQVKyYhr2m5uBK3FKpFG5EFdjg6mqxFBEfcPGDwApuWxDbbFou5VGftTkWXxU9EdGmtpkEZB7KjUiN",
  "key4": "wfww5UEg5GaQjU4oAEyLSnH6myM7bUkHPhUqdnR2525SDwFPJ8WdUtJ42zTCXC6mE2sDTdi1TJjEXcdfGGpEfrS",
  "key5": "56sjQRF9YLHZccbDeQGzQkqLnUEx5Sjy5th4bRrrQLTyre6azKs7HmRCfg1d42TfJvRYudiXsvUgNvDQKmpFF2cC",
  "key6": "2ps26q1KPTVW5BSCwbwYFU8XP5usa8GwSFUwntRUaifoitkWqiBpjTgCHtDHEuG8ji4LmMv4ScAacmFFM1VcSdsy",
  "key7": "5K1fwvAhjQ9jA2xGwwR71ks95UQoMz3m1HvhFNJapu7YkMqDYUUm5BNJwRjK5PeXs6W6NtRZPHY9DL9SjiMUbu9A",
  "key8": "41GyprxychRiXNrpLqqbkajfuhNwD2MudSHsmdXpJqdBVNEWJC1heeRYktQXyxQdc6RQeVBLADmYFGdxEc45B526",
  "key9": "gvk1miYEPE3nvQ8McSFTWNKSZH3Yt1e56e7enHEoV6AcrHbXxQiwwfs8BH3EzcaFMPSWboYpnQYhJmuZV9fqhrT",
  "key10": "2bLDH6ALQmdtnhy29yFeBTm7MUwQZvi5RxCCPwiEpT4EzgSFMUiZ81mikc6v3M7sPXJ2jpqa2RaXKFtMhH6tNyGM",
  "key11": "65zdAb6bkDTf22g7KZbFtL8Hnp1gGRX4wBhGqzMKKH16Jq85mqb49A94ngAhwrmWbXcFiQfRA5fMnU8EtLxMf7mV",
  "key12": "JKhRRzXcWosDppyKEikpsac64iVh8swEL6iapct5v2AHCEij9wKZxK9mh6u3X4SHkv1mibz35LCTRbWX1Kdpca6",
  "key13": "2XpRYvPvhomdKW9amMR9M6kAXZM2Gp3eqbfnPV8BfNvEwAwn6RhGjbowmFJL4vU8F8F4LNETcXFUkZXrA6rdkktf",
  "key14": "5iwrPFSxrQRcsmipPorRucqkkggswwGRKLfGRBUawDbYrzk31jRbGQTQSFDcUfTUmiAfayp4k4p2ME5vxD1XCCtj",
  "key15": "bpnzCPiLvtYncj8HYcEG4yHf2qHVc7KNzMVpHu9FACp999qSS1iguQcFFfx9LUjo4tWFnEVGKdUoLMFQjCFhnUK",
  "key16": "AePuEHTFJTvdyV6Pco4RNLzEVAXozTPuwfdNkFeY5y9XnZzhfMYWvJbeQPV52XN8tZvt5hnyu2UYQ6pWV3H1ihj",
  "key17": "3ANim3EfTHuCz3AFMRtuf89knvbNsSyPUF75MdSVP9EHADMbzyQAWbWrY9ayADJofnoLNzHWGMMEJbW2jDJALkNr",
  "key18": "2ofnoJuj4ydDa5f5PYQT5BQRxgEEj3wmrc75RBib8JALDkS5AC1259k4od2MTTE8FpMQ1TRmPbWevUZ7Z2YNPknm",
  "key19": "3dZzWQWo6NPfM9b9PsCdW5aFYEStgvwaTrbCoqRM9LyW1KGt4kfsGJKc26mi47N7T8FR8HPbUeh6fJwS3wgnPRe7",
  "key20": "DxpuSE3QC81ffg4o7pA1hig7Jb6F3Zj2vjmXMr4MSWKZMgvQSd433dp3j4f1y2RrVzMQCHRhwYxebJuvjZnChYA",
  "key21": "3tJPakfGjs98DNa4Ce1fXfwv49gRMYzJGSdw5EiGG1hjz4XDXkjUDhVnFoux6JeERh9yngpfQzqvjxkakoDPrmmj",
  "key22": "3ZQQBbQLyyryMNGJYvRQbzW3NMdDH45cVVy2rCkQYqXyVyD7imkGUMwpUD8KSJSmUm5CFf6ZLSZo2EQYDqRo8YJx",
  "key23": "2earWZpd1859MPtP2U6ZBsyzUcWBdrBr2L3Qt81nkSwtUSdSMFw5tuUoKRVK51ffQV7DCTDJjGfv1U1ir27Kn4gK",
  "key24": "2Cr9ujQHpkLKw6nWaPYZ9UFiWfASM44DpKswkjDSBmCJcSdav8CB2chrWRccTHfZXqNY2xJn3fceGY2kJCiqXGUb",
  "key25": "2SAVFBR24tWe2WpMXpbBGwz4Yn8jYZFv4ESj83bTqQNT3KJQacqqYh8PQ1tmxk6Hqbec6Dvrz8UPzLWSbidybHeP",
  "key26": "56adar6AgyoTXJA6M5NedYnjb34eVLPLUun37c5YnGUJFzbKWEspkp85o7joLK9XetyR1HJNR24Z3omTewq1cTmy",
  "key27": "4kjQLkL6onsvEH3pagCcro7hdMZGnus19Cedz4S1MWqL1uinaogtUhZWPkLPjFgxNEwMgJu1k7XPcw9MXhZQ3zKn",
  "key28": "2sBYyRGnkkpUupDPfahjna4Xs8yqwoTaucfgy3BZAAM3kxrqD9i96TcyLJti7BNjFWy56uhbPBH8f6ct6NBF8gmz",
  "key29": "5KVxuhP2w5zG3zyENTprPf4QhMQwzneTfBsfLjNDzVT7SiPe1rGtYmoT85i9Likk2qzPiKKhPtspGr88YpLqAdHw",
  "key30": "5C9Gf2GJFzxjYAfY9b6YKRwYKT6qG8ZEMPR6JfqKmW7oV34YWykUeVEPPQduNoe4LuYdWWQxAM1GFwPNHqTTw6yy",
  "key31": "HXE2QeSADetA9WiUFwh68bHgdChYDb3qthVJpLtDsegfAzYn9as9jb2r3hxNNvzk5ZYVyczH5cpQYx3DZXmLPBT",
  "key32": "43Ri5BMkhDjFPZtSed2c3fxHHSNuYZxKDf8sdxKdSj4N3Xgi81HTxMVqnx9cgjfyG2uthEX92QNG34rJiiarQVHo",
  "key33": "ZcWusyMa4hqrgZwKed3j7UgqCS5k6852f1YwgGujuZHmHBh3oyeSwhpk7hXoa79zuZovWRbmA5drxRkiiQ68DVG",
  "key34": "5eQSzKPscS5zA1veVSiqgkRQqjXcS7uwWc9LvrQtgAejtC7srDAcPdkpcEEXSU9a9LKphNExuKr1RbmrNqCCNmxR",
  "key35": "7EvDopPtKF9jkx1Tbk31m1DiNDdar6ZBJgGubakrsEy7p8BTHSw5irGDWDhjqnZ5GsgheVPDGeY7gt5K6MhAKKb",
  "key36": "2NhxArDJmmaZwPhQH5wAY9432UWjKjkZPjQF88yyg7UEJksBRjuzGbAHZCnKtqm8zbgUxpaHDeYKYJuYRmY6bSBS",
  "key37": "4wtM4Wj7JhP2KW71KD4iKXtaPSdE1VsqTeq1h4MjTJEN2PG9sAPmVcyRfj37ng8ExGUFTfFb37cBJ3aBs1uz2fbk",
  "key38": "58S6GdvHifuWWqoAxHcjVMYF79cjQwoY9mGNzefaBBGGp5kgWVmyWmiuYjnLV8B3CBt74VTghvxkgU5NtswXRXv",
  "key39": "2Qesc8vDVp4PgGCTX8iJf3e3W3riR8Dod6sFhXfN6dAqMqeGi2UYboyL1PbefDVdiXyFPvMRkig8RaFvfdgBWGPw",
  "key40": "4ssQguG4VHeNGkvkhHK7FRzYQegLEY7dG1szRgae5sX4moCkhcMiLwtFfoZKtaa878oBaNbtZVMNpyFmLmeuud3g",
  "key41": "5dcVDTUnHvKgKTjYyUxfNJVWUBYDtTmcKN1fbxjGYeZrdwiEPktUMgUxf8zZUrVMTiTmoK2Tif2Nx7iEpqhdKfB5",
  "key42": "2pzZeC4a9YEppkjJs9FmKYB5ebUsH5GnrH8WKV7obGtLsfCy4VoLZr8katPAYGitET94L3A3bxbK4Tq7FkbGMF9h",
  "key43": "qAMPJTcyE1KGCA4igcFSpFFxcseBayJBXyFM9ykTgxopeEvcTQbHBvhFsoeHNtC6hrCRwMw9uRhT8CMPCTaERqh",
  "key44": "48cpipvKUgJAbHm6bBvJmaB36j2ijydNQV1KkXAqxFGTy1fQajhYGPbpwpAZV3jwM6M4eN26T5x9wizipJ3NXnPt"
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
