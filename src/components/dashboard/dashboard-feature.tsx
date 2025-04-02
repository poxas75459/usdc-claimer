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
    "4GiBfP2iNVJfD418UShqmv8v7RyhugHy3AfAQETqQRADf2WVWsTEPFWoLERA3HCTBneo45W1drp6WDWGJGraVvJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "opoZCJ62Lw3EwHn2FSQV3G55eKVRegzm8m8t8K6KmcrvG5nzDJdMTob7GLhU6QBwvGd6Q7J254sjD42DUEZ46Hy",
  "key1": "3kr3GKLpzYimL2mjo6HKX7mNy1eJmPrfnJS1KNQ5NhaWCw1C7ecS4sxcPMhDNpCcwMjEBme4PyTNBrkY66EyRZZa",
  "key2": "2qC2wcC42sCUPdfFgMtqJBrq3GDY81VbWjESeaUs5pYd8318QmaB1LPG117VimtoAQi5LnLkLKLnw75Cy36tmkqc",
  "key3": "48xADKkmJQ8BsJ68uBP1SGFxCQNt9m8xb1WcqVyvUTmc6dkhxdtaKLxyBQAdG93NNySNHtSM38vzNX21MpSXKKoM",
  "key4": "5GJ19ZLbjD7RkA8hgEedLC5GySgj5fyGBBckiA74BnYeP6VSpvSA8J5RYqE923kS627hRRapYbp6eQsyzfG4ECof",
  "key5": "4RDNLk2LJksLFt1rX6GomXmkeEw19owSCXGDj3ztNzhVVLvMX82APSuKt5EFdWbNxeHnd5HVhRSdTHs4eq8hSz2S",
  "key6": "5B2CnmtTjJugBwTdTm8mMjt9FrmN6iFpzWEK3fF7Vftkbi9uiMuL8tNBakwRXDQBXMMV33MkszndQs4UCGmNLrQj",
  "key7": "5e5ky5X3MQtN3aj5A6SEPwt41MwDJDYGR3HytUnQDvaA2zB3XKnTSdqB4PZXcEQCiVXaFXGux71BtiAfzGYkTAyb",
  "key8": "3FSfYkdhrGy3h9MbUZ2MThec67yaW6J44Yh8Zf4vK63PwL7PuifgpghaCTyV2qoeQvE7PHaMsP6bBzAmxtyAjpZZ",
  "key9": "2PnXgznDuB14kfHEDshRsQ5fiY1NQ4fK32T8svUqHM37YaqwC2Jn4b7GbvavPPFvyszEiuKnBGvMbn6cAs5HUAiS",
  "key10": "MV7hAxtJL8mwbYzwfpViutvYfM6Z6wd9M9sHFfbJhWWQKYhS4c2PXgaA25Zo5dyF4VmU4entymqYCQ6ke1gkh3n",
  "key11": "gTcWRbP3EL36MQZeNb4pRLnyEfyVwEi14XN9nf1YSaEcvY7HkbSw2dgNa6cDC98rV8KB5Zi1CJF24krWXvmsMyL",
  "key12": "4pJXsMek5bDaizetpxyWWV1jhJSK9obyjLBHahRRMvKDCr2EwNpH9BTKxW9hSSobuFYM8Suf8wu8us4xUZsuw8Au",
  "key13": "2uojwkJEyqr4cxTwkce12XP3kxRrU1kEScvbKNiBRTK8iiTmmCBUVpSJgPWJFbEoKkpcF6Lf566iEMPKMSSQVSam",
  "key14": "jTnd5r7uSVWH5ys3RLmM5QdjgQnubYd8bBQLr9g16XnaKxLpgBmE7cpQkEwDVfawtbq8j7rBxV1aqXSdAV7Rw8w",
  "key15": "3hrVxCPZBkWbrX8WC9tPaKLZqjMQXFapZ1eBmXR59sY4PdkpnGGjBXSRfHgj3o6BhV7VYueykYkVkyWQFavYcKrS",
  "key16": "4JM9Rgnf3PdYRUfULAYSAmsWJTwVXrHgNQvDurioNKwe8Cev3jtfmoPZBgfrhn6eKy37s43bQfnvEDpzdMdRGEXb",
  "key17": "P9qoaBFWYGPyqiZeDv2FBHNwRBfWfhgpDdN4s1ZeNRbvpWEpP7TPwTZH1bqmuDKCWtyRuT8dCMZoTWA9rv1HhSE",
  "key18": "24VFGNPFEi5KGE21TMv8xhZga1c7VHE6T16mjjtHfvB6b1KF3SMHMQc5YeNMcJXsVTghnC3unbA9SCzMFnu764zE",
  "key19": "45AuRYFzyFCGqaaWzq4BeYfsctvgEZWfRUthW7vJTRxbYhCzgR6DUPP8aGvAzUvhhnrF24D9F7R96i2aGSHr66ek",
  "key20": "43YRhqRWDkNFgmrTanXij8Sq8EvmP89q3v91JrgSPvcyhwv6gEhEWvD63hg4VtaYd3wPxyXaxuwNCDTFrFnLpYpr",
  "key21": "5sw2Es4NNsjPJSQ4CxSz8t72FvtjrvRVEEGcNkV1yYNzqeXMjdthnXd8cTAouPez7tztPdah1wzFAC8Dvb3TPwVG",
  "key22": "5VwYpQ3Gt2rUwvC1nvZxjt1zZTsCUESm67L32rWmWGFSYBcCzCbFDe6ZxexHo6FSF4c5JMeQo9pEDgCXZefLkN2J",
  "key23": "zkUDKdheNaEJ5bA6CT5fKTVBiHtbjpwgaxYTzTEZnit9gRAKFCWG59k6eYysMU8k79vUf5umr8MPneP2mtGYrrN",
  "key24": "Rg8iT1887tXmBaNEm5Yy9wK7nu7TWtdXoeZdftS9wqq4w48uBsdMQpvzvuDLpsYZVAKoiy3LHhvRWiUoCMF2Wqi",
  "key25": "4qUb1ijLEouFyLLDvaJF9TTjmnWeSAzPBsBST8fiEDA7jnRrjJpskzv8rZaZwZhHvKJg5qhUopf6XrpYyexo8r8s"
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
