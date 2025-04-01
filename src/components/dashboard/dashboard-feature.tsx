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
    "5wXh2RxLQf2SHTc2ccnhYmCWLXB7e4gf5xngXMNraip5MiQjJszxsFHYQmihiZ38YVk1XrnQxXrHwnjMUzFFBme8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ayHWg2xK1LDmw7Q7pkTKVzN1FxvGCNm3EM4PX7vDFLfK4sgP8QCjNYGohcuhn6o9dKihKchcvfRDgmsWBsbUBuC",
  "key1": "3Z3113zCtckRJmb3LrVkBHZ7QG4G6Wcm5JQUELNJNr6KyBaN2LJqfroeX2sFCfDsdoBKTpZJfuia9yZx2he2CTSk",
  "key2": "ZA7zT4WFKN618sQ48X25zcndHXuYYJZZs6nBrJ3JonNGi8cszqRWYY1zVkCaywRvRnw1VqhMyQeyMF2E82XoLNr",
  "key3": "PnsrzySqdNj2A45punoBzZyf7NmQcTyU2fqvYmD1yeCCMaCFuikoQpcKtmvq4Z2R3ZsNGwW4shvTA4bJbsbKcfo",
  "key4": "2EgpfCNicuBLgQ9Ntvta6HBuMPuSk91cxZzCNU7pckezjP6Cve5pis86k8dskTs3jvinQkgcVKp1a39ftVVYgiKm",
  "key5": "3GojrT6oCGiQun5UcQySNHv2r8aoDwNw3ETpdwTrLRWrpB7vZxzNptws7ZjiAasmPSk8jBD6YooyZpGQe2gi3AHH",
  "key6": "54rY4chVm561iJjQx1pt5o3vBEVpZy8G3TqNDmCVXvqBEXe2qn7XWfs9dpowUei4ZYbjuWQCjCTiLVHmpHweBthc",
  "key7": "2RmnWEzNd1daunJ6tHggEBV5B3BWvu5jYxGMNyfRcuTTLiCAGkNEndn5Cr5wkpFfaP3C6Ln3Q1obdFmYQsoiFyaq",
  "key8": "nEWj1tf6JGxh85jpMnhTQt6pzAfypsez3H22wRuVTiWbMcZTNvPCQX8885eiJd1Ayb2GkYUX45VJA4UX1bQFxzn",
  "key9": "2vqkPQ5JuFwxZSzQ5oJ2zDfbmFYBubY6tyjFa6YGbiuAVaD85iA3tQA7ZmWHyJxqgwe5Xxi8ryFt4APWSSKrPDmw",
  "key10": "35Z983aDA2wwU6KMZRFqPGoWujNCTLHiygruUYozkuJHoE2gTNkaKiBXED4hAN8qekdvf8UHJxhqJZuo9Xpu6USa",
  "key11": "3T9P2y8TArip25hX7yZDVXrNEuPQf1ccRuiLNuxcNoH54aYc1dFKoMUPDDwwDmbNMm95oteS6J47f9G4ZxeTNBqn",
  "key12": "5ev5BvBNWiAZfzFmnJkbftmPm7QyBpzJruHXohVzrS7GPWd6m5JZVjEkbUwirrtJHdrM3dmEjQbRDDmQjqssKG2U",
  "key13": "3avNQodtoPJfUQQ6RYv3caahYi3zQRoViUL7uQL2qiz4aAM8ALypACvg5VCE3WaiL33RBzVMFDVLY9rtQXbUChZn",
  "key14": "49KYdxtZLu7CBdgVQPQ2dPWtheAkibMBhmrojUzybCNHmCzJABkPdMD1Coxr2MduhpCAVy772hzUY6TzxKnM5NHM",
  "key15": "5YxYMYHPah5ccyPDaVDnNQ4U3w3veqdBW8a5xVDNM3F4epMj7qXpZPuYfuTW3gUtye2UkarfSxp4VyCJMW7JGZiL",
  "key16": "5Bys6xYabuHoUFEFhaqc82oeX8vWtKnjetU2APnGT55338uRq5NkxNKPkWprd1swzz2Ew2wGz2CUWxFXZk8F63w",
  "key17": "4ZipqhhBS8Yhny5moLSGdY7epzALJEszuyWeu6LU8dZELUjt3C2kebyxUmTqjjdpnbQT11D11x7LDpN5qz5a1q4G",
  "key18": "5ZhMxFov7JS4VBYfr4hg2bALYxrFoVrQSK3jfyqQL6FpoYrcKtRgXRKiNMV8jeEgTTTGFC58gxNsoBpihAdiVXPp",
  "key19": "4sjtFDhEf3eqPzXhke9V4Pzgzdsv2bLBMdFmNhjot4GPxKoFxYk3mUrr1r3W3PHye4hyYpUMouN9j4rmrSRNd1Ua",
  "key20": "351FiCLvQ6AKy9FJSfJZmiZNZfRq3brwr3eHGXBSHHibAdQLUfyi5jGr6TkPrRUJgjSg4uArYE971MtCKV5oPF9i",
  "key21": "2y2Fh9j9vWHoGRch9sqpTt3sDE9wxop2aiG7dYeTp2U9YkhiM3BbYHgh8uvBddg8JzN6RDBz3Th5BaLDZEdZyjXJ",
  "key22": "4focrP7UJRGEKv7zr1VMMyNP5Rbc8WQ7vaifUWYHwXsVK8o2PjrcB8k19az8CB4Lx3bcyiRWU3BXN25JRyCESJZA",
  "key23": "61LQgJeMLDbrLeGTLA7jiQYDkj6tqfysry1TrCxNUVhscdg88mJ2Ba5HVfGhwdZ6qnsmz32FKkPT8d2W7a5ax1Hm",
  "key24": "4KhzfxZgh2L9seFDJBuAMKwdnSDJTNGCjDRNF8Xpw8qFvu5Lnbprb62smXL95uGULyvWDJJ2EPRNve6TKUs7yThW",
  "key25": "3aQHTS5bQTXEDVXdaedEtz8ayjgMXo3puYGpMy4jPTaErCuC3rbWCPFPGzbyYZibgGmGcXWnPhr26KmHcbaDhWWq",
  "key26": "2ZWLoLPqTEvAwHu4EfqJSpN92pZS7NJ7rsBuTDNmA89gk7v1262p8CLmZSBEgVw8dH376K1uwMkWoNnY3bFKTAHd"
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
