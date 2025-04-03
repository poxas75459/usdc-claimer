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
    "2nbr3JQSi95Z1eqax1rriCtdQVbpzQmfzauUC1SBho8eJD6BNSKH4ypa8JqggmbayfsugNkDRJJUXL6tV2kmiNZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QhetyTte7yiVqLhaEtA39iy9oG4stG2BCbCbHx5feQJuxavxgEYsT31xRUvaSJD3XJW7TzyAtBFAQccqrGZRopH",
  "key1": "2BpFoACNSaFwvzs6VoLBW6qpvEc754VLE4EV89STGNrF5RgUwBo196oqVybhzUwvaxThgtYJexXHc2cYmr8qaXn3",
  "key2": "2oN5X7zoEFRuTPdxe4LoH8Lz7XmmM6YoayxkhqA5j25HUue6AKLrZoKtUq8MFXBAfDoTf9U4M3ZnkRs69pFiKyuV",
  "key3": "WfaWsCvndJxZYSeJYDXFfHDHwhVDYidPNTRYqAWmBAuUu5UZsjKQNknDM414Uwsv5TyBDmqWAC25ruyitNjJdyC",
  "key4": "64pEBvm1oYgy4eAPxZ2gYstZjHZTXERUXEwSERUiVXrcnhCwP1DiXaUnDZj2TVQDeKyn3H7NhAurAG9JmhQ1rfGY",
  "key5": "4rHKLzcejgLbs5G66oc2i66krcVYhd99hYnTq8DW6yebaRViKeMkWZKZiEg5ps1VpENgo5E5Kxn4dR6WbPoDB3Py",
  "key6": "2BR4RppEBDZ9uSsJCJgQ6xhwQw623Entg6T2JGRV5qgi6TBeMHKpPeW6CNAUeoyNfeNwyU6caEbs8R9KEDeMFeMA",
  "key7": "ZDmGM31EawR2D8scXpUaN9grBgyFrwJwTmM6ajoxRh1bD8TPmiSJAweTwdaWhaDRSsWcgiLzWn43NZq7fPvif6s",
  "key8": "3LbiSKrb9zJA9jHmgJJ6nR32kFXG6bAAcwx12zHYqqQBu7wFiLKMDarMDLkmaj14vLP8C4PFQtB25y5e2Lhztoon",
  "key9": "2nHert9WUAbkuggRf5Yhb5c7YMN5zSndUX9nSEPW3uEf5ptQ4cDHHtS7Z6CzDLU8amDuRGf7eC9Tgu4yJ1enL9xq",
  "key10": "4fNMofY3Z7ts91JTKAVcQFMGX1EtURAMmM9GvHpxSbiJxjaBQv73JS1e7ddHdahACH1EMkChv9xe8DXKbsdByWWC",
  "key11": "2ReaCDTtCspb96T76VJEixzUzSPyWv7KNoGJB8kUqZnQ5X7NaEp2wWxc2WboN37QDpS8WvJ7CYeWNeKV89MajNsH",
  "key12": "wbRxEgr2EpL5RVtZ9fPdGVpgWcofYrMQn2VJdsZ4ghdPhvhYV3BzCVPqcckgdyTAPqNBquWCUNsQ6f1ebG7gA2Y",
  "key13": "5SnweUT39ZLdiqMX7TgwbQhfjtp51HCCBjei8CWMnNF4bbj4U9mgXnavMYcNkXhpB6wovatCf9pLHRZ6BMaponeS",
  "key14": "5DtQ3Kj9Ezi46GzE1a8bDFXWo224MEBstTLiLrQ3fbztrrSi3KbZ4CryhBxfer44DfcjREoQkH5PhtBi5twQ4fao",
  "key15": "6z58wvFsaZZpGiqDeuPPaeEKak8MMV9HdA3YTYCLbArXv1sonCu1zau1WjrbfS3XBzCtJ8yhTDFzLCvUdJsVTHu",
  "key16": "2g5nvpt9x7Mcj5xGQixJY7Wd3xkyYKuVmdVaWRrKqnzgFJCEHHxh9GDcUupFpYwo3qnP5cDJTPxKT5Fs2WxXRCiR",
  "key17": "31YrJtonuorkEk1kHJGypUynjXe5kQMSkQYp4U6SViAFtYdYcnso4QWtwaSMc849kBeaRtaVR3LnKQh85QQfy7T6",
  "key18": "3A4cmb2zhLsZCv6MopEFLbZtDKD9ka5zHxRwzEspX23th6MJ3Q52McLnm6ZAnp3Jfcya9H9Ddtv8C4W7NoBP9j6B",
  "key19": "c1BBCd98xEBPwqXNhnWa6SAmZoykvKoNkSDqBhRJ7FBJy2zJKTst6VPxE6Q6na79gdydEdKGaNo5xjbwzmfeben",
  "key20": "ibAq1gWocWdFw7tfYTT5riKd3UVdtnLWqHraat8fr8MX4mGTesFzwPnQh6y1nH1KMW5zD21Eg3XM6Pg2uGxoHYr",
  "key21": "3U8dKVSCYCTUdXyNFsCBRABXswDxpQFPfHrkNtyUW57c5XmXQdG2owvsLduw1LHQZsAnZmj9TW8pwre1mpzLAsqC",
  "key22": "2RKH3VrVaXVFEWQuMLpeLWS2cZ4PfRx7dqnvGMh65cmnhkiy2DMh4ktN9UkvmH7EitsupU2S88ETBXBJpheNdC6C",
  "key23": "4vMtJLNXivrizqzMEWdvvq9SMg9Y5Lm5PKVaGXGCVgrjWidemu5D4UDFDsYE1v5eAHMzR1yrH1WeMmtuYL7pzm9X",
  "key24": "24WKco5EoPxcWbPm7heJMjLSNcW9R4LJGKBWcZYwpHzLp5e4AvyAAQtZmMohjXcpQtXoNokWiApwxXHJXKwy6r5F",
  "key25": "3JdaoGtj4s9NCecMBDBBA5Udkuh7kqehS3izxvd5cmWC6W3YvBMbqMmeB2qWzWMm7vtEP5eD5bSkcYynfUPukQLf",
  "key26": "Eejkw3fbuY6o4sqCQwtbJPDB7E5C6gTENun5csaMfaZW8mEjTLSURaVm6miPTmDWWBc9pBBMeRPk6MxKd2sASUt",
  "key27": "5k9NTMHfKmJS727bXCrHTLmuDwYGQr2Hwg2wVK6tLJQdoWAgNXxSUFdUZdgeftGxHUEMM2tqwFLGBpz1Mb9cQCDz"
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
