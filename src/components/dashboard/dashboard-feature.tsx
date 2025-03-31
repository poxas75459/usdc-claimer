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
    "28BXo75dFB4zLJXp2H5ux6gQeoEKPySvgTKXf46iY7xkRM3USkadNdUGNCRUT2nfdR5PNszVXBKUEi3rUwMiZw1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pVseBxTUjXPGP1ipX98BfViueBNNgkUrKTSd8TEonsvpBQHk4pDL2pNqNJXkFEWSBrHuRJhx4VWazZVcssBJ6Qg",
  "key1": "3KU8eC9NNDa1vWhLtuEUH3mx9K4pnQNMMNXMGNp5Gx6xZYVnKJA7TYErpcwou4F8hhtuWbNPdcbJYFWLPyifwpzw",
  "key2": "2A7mUscBy3jadYQoGKgDhi8PAxrojZ7bbwLXSTkLq1XDiPgWYKZet9ZybVPEqfNX7dDqTvoY2NcHDXt9FFaoWm6h",
  "key3": "36eoE81ogfkqoQSreweiiMdnsW2u1SpGP9rsYRrFVoTFyNZ1FWwEcHjMFRN3zshdwy7Q1iMSis3ymrov7Wfvf2cS",
  "key4": "28qmN11CdSH2Ddkmgb1FhFYQhoHk4E68LyDxtefANjU89W1Qyx9nGjzSzs7eWzc2BkNfieo69cWg72qBMeDLCxmz",
  "key5": "2FJBEpVSErBSxxypicYFbF87FAs5h8KknZrL3CpVVjviKiQD6GWuy88BUpH4tcVvzJQsae4EM2MxUjENoNfxxDNR",
  "key6": "4kwDmcoX3RBzQvGZabfRYUixh9ys87egeEFTbXnE4sSstkeYDRtesPtKLNtLPUd9JSXAsY8A58C3SEYx7fGAg9G8",
  "key7": "RXvMEBe3SrfrpRrkU9jLMJaSeXZkzYrCxfFQes3L1nbaUd8gaqhgTskQCyHFErBf5k9X5AbfuHEtCy1ZMwz5gKR",
  "key8": "3CQf7EtHhhVL6wPAdKtfAC2YAAQccDT2PLTgwYi863N6VKsS7ERKQKifqPaM48rCdxnwm7XBso8rCPsFh87QET7b",
  "key9": "3TCPTpxCj1cWS7u8GVmMrGj5NaHG8NSktdGycDukH7WnMKvnoLb2sLdieVyA4hqc75zLMVuqNNw3PpxK2tkQk98F",
  "key10": "5V9XJscFJT5MsqSHejsvihFmSLrQUpDLKwSU62918TZgg6rNsrnBXmgx7Z5T4HcHTXnt26N2XSe4BM5BvdNhQkbY",
  "key11": "61yqrdwhGFkGzhZdPK4mXaJ5Rtm9iEsavZs5Ac4a9zYrUEdiGJ34wsyB3XWBygME3LvUCy15ubnBKnMiXnhSuBMu",
  "key12": "5NRoUUKccxDwiA6Zyan2w6SfdAvpJg4RyW4m1Vj5adHXAeurcGKx6uZJpqcCTuSWSGXCoE7tPBZNgPqoXpDwrTfC",
  "key13": "3ydbLHL7kfxHAHL7BcHYi9DFUyRB2rgGXWb4m2kSKaJVDMrrYnb7dyYarRo5kmuDQmPYY4k3JPLysk4VrssH4FVQ",
  "key14": "26LB4NsC5cMV1fd8oJTPMnHQigs7LH8V45PxVLXRFTUgJkmHwPDcNgkjYERHmBK1dQMm8r1UJhMgS2L6URVundy9",
  "key15": "8pVGf7TSgzTiJv4R9xFYd8759ZVmVTAKjuEdjzNDNnynuSVj2DvsGPKzfPJqkiJAzsS1unAptoWMcP5hX4JnspS",
  "key16": "3LGu9mDEWSi1QhrqXTMCawaDprHXPnzG1eRupURD8U2tP2pa1CZSmQEPmGFxuneXYAw4Vi8PNC4EktGwu9pEbhjL",
  "key17": "2X6euGDTNQzHtE4e4gf1WWALvNdhkxFkhhg7su5wNfYyEacCjRutUNXf49siaxsYRoEyPZxT5rotCbgsC9h5R1GQ",
  "key18": "Zofgfcsy3ixm4TCpdXhNbLe9SZF69Q9ckSULLXqZ7hztfY7YdHuLN8Tn1gUX39eMWUz5sqEuy9RNoyHn1aW9Cb8",
  "key19": "5JKrHMSRD1QivD5geeTBYyKnF1Hb6Jtz5EcvFpbEHbw6kfv44gXGv78iAoskchcVJducCrSzjbHiQCudiz9Fi2V8",
  "key20": "4AcWpP6j7hDxXbvpaipLiCWA5RzRc1zULgaUAJ87BbdR7tEWqLLiENqqnYDLn6j9t7x7E3c5Zb2yr9CqEsLg5FFd",
  "key21": "328JKW48EmMQwucCv2zbus3S766TA7SzBAX3sKaTjRc1fhPpUGsum1gJmpMfqvNah1qtWMVC51y6PWLwxtuooKkx",
  "key22": "3LqFVNYipCthUKVZT41W33BsWineRUPV1mJsv8RmFDTCroY7Eci7UVBJSRzJKBp6ucC1frSfm4xjH8spEgJZMBww",
  "key23": "64oyuzSa4q4QF6cRRwmnKb5u2DRVSYkS99sxFWk4LmfXzNF4kQG3JftatKFHqM6cvDJkzX1zibxct72hh2bjDEUY",
  "key24": "2njaEWLAu1d9XwjyokUELNbXvZYhh7HS1YoUyroExZ2BwtnF3PPhemoxjTHdtRuZYMjBZV5Az4ZHmaTC5eVQV4AJ",
  "key25": "2nRw9AvbMjwpQBdSgw1an2mM8M1TNgY9znxvANi7RUrMQwMsNSTvVzKnVn1KUiaogwc61tyH3siXUJezvW21cz2z",
  "key26": "5Hv21fvCmy3YPNwZM3GM32vuLM6NT1teLoAUGusyxiQP5ZW2R6MXu46B7kGhAXjo7jJp8qHyfwNWxqvPF1DDZd1a",
  "key27": "5PGrEf6CZzhZpcMdUpCoVHLmGbzaAkEMKzeLFTRRrzkbGAYk9LifN6wWnpX7FiX9nR4cWzBcDRAEMxEQ2N3Kf6jW",
  "key28": "4pUf5YqnPfbATVXU4XrCmVTQcfagAhy6vv4jsaQ4HmxLXawWpRsmVFJAGJY1eFCi9Bugcveqca7uscVm9rhzoyFE",
  "key29": "3297Y7tWw4DagNZkwtm5zHAUwAFVEuYivco8j7dXa1fKv3dmbBH7rC2FwizouwyHyAUht1g7NofgQT617F79iXG9",
  "key30": "sbYNBenyjiBKk9VCWiJnA4PiXWGcMa2bBvXRPv6xzYhDagLCfkiGmLaidYa9RDojMhqwobPhzoZCyFyBEFB8XAD"
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
