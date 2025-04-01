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
    "2qgCeLJVNfoEZhtvfXuJLrLwX3CgNK7KwELayiWjd8cMcQyKNEKKRoL2RkvCZEEfeKEbBYdKCu7Tydmevve2q6KM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BTuu8xzkH7eZMqrs6rRrFiueWVnHZ3qMnKNo2fFEV5uZVrXJaqwFf5jd45d9qKsjA2t85ByaFCmggYGopAapp8J",
  "key1": "2kz8QrGxLwAqSGDb7CJA78sAPgHC4onirY3xyiw2H3axiZjur4catLS4NwcrU1zBkofyVcfa6L6akyEfFPfvJTPe",
  "key2": "3bxi41WADwYE6gPrJyEUZyHLCVNrsHjHDMPemcybhmpoNFGWtJZ6jXqKmZGxYoZYJuirNvtDAZM4ZZUJS32gXDdy",
  "key3": "5GwzQC1w5Kyvc2vhsNMjbx3D21jLmsALG4NLm7jqUU1cs93b1UDsKnSKrFaLo1NyL26oPdDGccGcbkHHUnJ82TjY",
  "key4": "34j6RUyqTjgEoT5A5NGddTva8EVxwD9MLQZTw7hwRuu6dSebV2LPkwdoKayhEivd5PBo7cV6myPDrqPbPoXHV6pH",
  "key5": "3jv8rrzua3cZCHKKNnG7Kj4r4ErF6Ds3nPZax2NB5uaWv5koDzp4CajcAmFX8AhjX9ViYWhmu4Rh7LCbCwj42p5E",
  "key6": "4S4rvPTna8qL5fT6DHLsgrAAJfVD6XXx7Ta2AgMgG1Ss3mMDMLd9PFx7Pi8EyubMp2M9zbEgDAZ9BRRkyenTMSFK",
  "key7": "3Cqini2c11dA5tiVKcGoUtFvjn2sLNUM9ivThFa1FgNPsEXMduF433NDRizyXLz42ozbueRf46Uh2ULDoNWEDoUM",
  "key8": "HpEXcAeBLjKwHSbwr8XqsVr8mFrJfky1GpxyiyDLB8jWPHjNJdkvSCYybbncKannKVjNBuwB5p46JXscEZzPrgS",
  "key9": "5nCdxdh7NTMUXbbwKTxiMyfWGokQCrHbWn83ryPihhVePAyKxcinwa7aPcb4nCkAeT1Syd6agCYGtybHzeu2WR1Q",
  "key10": "4Vct9XusBBrS1MWLqyJggxHK4J3rRKPnwMKDK19WEtRXQzjNTcTdebn92qQLkTF5Mnqmqr1sMEm2PYmD7bxTA57y",
  "key11": "2aSkfijrL81dLCN3ReGm7ic5Fi3Xv8JQRYDx288DbQCHot5t48nkS6sTR2xUhZ2mN5djBfZGACkwiSXoX3iT3eZ3",
  "key12": "ADx3vzARbeMGSbqAzXdGrJAXPkrDeWhQCAv89AyBtLLYLoQXMHfRdk5VT3UsVXMK9bA8kdeKTsDWaXMe5B291Ui",
  "key13": "4K66iQHaguh2cSBvXfRjMvQJat4faUVXmVpAcAmAaV8au1ZPAARwLKdV8Ym1j9yvCn6c1vLeobUyoQ1vwjBBN3cf",
  "key14": "5zcB7HFAXpe7UocY26BGb98douM4gJ9n97jTb8W6v3oo3PcYTMKZwJ6Pbmhdi4bed9YysKfR2KAN47qxbX44kW3X",
  "key15": "5vyfYUeNuX8dbjc9JFYhj3EGaAemj8GZHNDJMv8RpQC3S6yfThGzVQgvMVZD5DBarKMSZcDAPtm3cX24Pvg8BdyB",
  "key16": "4kpHqc5tBbEcydc8yhbnQ3r7dvDSa6wrfNZFzAmyhiwnEBybjJbN2B8W7fsvPwcjndUUxPcpz6vHyqbXzSJCRgqp",
  "key17": "2gEaWkrdYWTk6KN6L3H6HB4gcxBCGUN71oSAWnha45zayW9KFKZo1Bgm4vzs8KFeQS6VuXcvS89AoYwrk9PWMgGb",
  "key18": "4T2BC45pMTmErpGLQ3fMB9u1NoVLKnTY4MPciWM2fjUWDFoY7xZJwcQKySEie2xZYh4BJDySLeh4RqrJqFtunfgT",
  "key19": "3m9BGvh5tDfaS8VsoAcQ7acdeoscc6UsTkbf2ewy9or2RQiXds8raL1y6jo9wQ8dv4eJajpibXwdhDHZ9pPJQDKx",
  "key20": "4cPowc7HZP2tZ2SekU3LtmTdQpfbpgDRHojeQ2u1MhTKqcktgE1a51DJi2K7BhVwws9WDseABm7hANFSQ1gegPiL",
  "key21": "5ySbS5v33MtCVo3HF2xTqF8s1bCcohMYtsQdA5Jm9ZVHVbiY8iZ27CinSPridSscTeHxUYB9RoXxSjZ32geyiSGP",
  "key22": "558ue8wM11UqyjHjSUkL6rnbJGaZuiyhTEAnFRogD3dzpD8WPSCRQa7XSKX7wUGSaVxPxDvxq9j7j3TYnoYE2jZR",
  "key23": "5ZfWnPGG3mxss4Re388bNgPcCQjYAHaSfNd49RmbG9FFfeFhErqQ3L4S9RkLkjnr6VcxUC1HU3ZYDoGBvTgqbHJy",
  "key24": "2Dwv3WVnYkcK6r2pfRk48KAjB32CYvSGcFRneJHucAXMiLLVURH8rDqZzjnJ4eDwTXEzg4csmTPCDpEizzsyJjhw",
  "key25": "3iwo4XmXT4ypBRrmJ95HdCZdhfZtZXaXNCMTvCbb2DB7Hqr32fReRmRzW5XwReTKjfQxRVmDnoGcdAJwcTauQ2eJ",
  "key26": "4CE2zYLX1g42DmzLk1DwGxnmQqTShsVtvLPy77BdXqtZMuT1xUrtZFcWKdaDCK3rbt7jW5GzwKfSUMkNTYUneAM6",
  "key27": "5NavQD2e4M8vGM1LLR9a2HiEMSWgoKTxXXcojjq2ySMdM3YbqRJmySL6faZTrCEJ21HaUKmCDZohvQ3bUW4HrxrZ",
  "key28": "5LjrQh9D8TyJu8x4VJWZ249sRBEsY21HTU6KvDBeZuWqdjrxUTjhLBA8yjDrXeaRLmtqaXZKL1o2KFomjgHwei5d",
  "key29": "2knMdUzyQ9WgSpGtD9vGNcwjM5PNzrU7gioyYXvYFcXdehayAThQ3HojuQfVq7WfAwsT1dcaE8jSm5QwAGJBQwd4",
  "key30": "2oehx92wBHTz2y6LmJnSq3GThn51QvQdi5oFEXKVjpjucR4TLt9ne7mHUUKFdMQtoeFCjKkJgir7WSQyEEDWr5az",
  "key31": "2iFg81M82bUCTPrUpLKEcy6kBweatpiSFnbsDNh9jheZHXkjhDHErhbPygRXRdYM7Gc14Uvgcs6KAMHj64oCYJQr",
  "key32": "3yTEF84RuFqV7kiuPekURyQyTUdmtxDDuGKFULz2dJ11RQukzuTcFfMgJswUGUAWVaD3bGDXRAtGVjnSD4GfwEo5",
  "key33": "5cLStLeWvYWPN8g59DG4VvpgMwbicjomcvH2YWQvmcNshorcgQjgYQLjZke7JwfQEE4FBBmaPZirA8KwXMsHCiUX",
  "key34": "2nXuZMQZF8JZZCajtdkGxParYfYpTJ1bo745EeUQqfYNCPNdgjzY6vfhvLrk9TXQcdDLd3NzXcoBNaeWmP5fkLPX",
  "key35": "5X7N8QeAcAqYZPcwMEULsEQ95NaL3QmoozznqvxCYYr1tktSMWR4yqaZLPjTbHgQbKAWY9CG4cR18JvDKnN6BSpZ",
  "key36": "3VoWrXLU82yb31j19pPD2zcw8mC4Kxc3fxYVYajPJ7gtExdSuHmCfRPWN9gvtViGYrLNsPXsej1K7j32GnsnDqRJ",
  "key37": "52sv1y6YJY9ps4qfUrXr3BWRkvrPRaqAWho1czFMEeSFqaHWog9SyhdTHhidi5i9yMGpxwErhCYxLD6pfkgNQE3A",
  "key38": "3PiEnD9PrBckNdfXM3ni5ZFjZMCLLAAsNyc6bRJ8B6uLa9GHeQhgYa3YwnewKAJActLJo8fCKbkisE3f6dGJHGDx",
  "key39": "32shBc24JnhFFgaL9tWDYvKGdgPuzGBLnA4LNG4Vn5s9WhDrDktuzdFegGsXbqhgSsMK4sGF1zi2uoE8EbMT547g",
  "key40": "4PtkfnkRnsceH5DjTL9FaWJAgcbKfh8Wot6UaVNQSHNbWmJj4kGUudMLR9cEzDMq6jkPFKes4BN1PYdMV1BG4H3B"
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
