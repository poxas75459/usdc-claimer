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
    "5bqbYg8XUkb8rBJd1ogCywoa3FdaQoDkiuYRdSJB1PyLV5Puk7ZHNCk3HMX3sUhdp3A1ippNnZmHYCy26h3p4Mn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bvptuUrfzeNuy5ahxxSSTK3Jy4Bpb4Q9V2WN4NTbbAHK7EQfqJNMEBAetPNmGPXCtcXWQayCRMookRsVgGK2C5b",
  "key1": "5yqRt4BJPVUhPNK2Qr89zsNzDWXvGvAA3ibJqLiL56cT8XmayqA3uQsro3T943tyF9UwwfW6cH2oLDuzh6UHAjbB",
  "key2": "aTPxkyiztdoBEWqyed1tnZaGEcq9WFcUbq1gX8pS6doajavWbRjTMRgsXfmFeTSG1AvWSCwHjdeDoNMwUP57vpE",
  "key3": "vsnvQpCwjxrgnrnhk7R1oA2yLiSwJmRw1WGfs8XUajJh9ia93UcY6XrkE6DzseZ7Rb3nnk1U7eko2QBLbS88WSY",
  "key4": "Hunw4JsnMp9abZ89FQPLnSgr3jWkc4ryVsbPv4KKuU4JGHzE4wapvTpC71aqW4Bwe1TxpHdYkCWkMXZyWBQChVB",
  "key5": "3dZ4TJcX1SPkBxAFSXWQLLpcbYmJrpdG5yjoExE8Y43sZhEHF954KxSxeeqEySsYDRe6oXQp3TPkqkkdpCsj95Tx",
  "key6": "48idDAkXRXwzqpEPNVviRccn9gNYYj15u8rEj4FgYk62tnpwNXwsUtBYAnbCaWnNPe5hN8THSsWxRBcRVmugaNgc",
  "key7": "4cS6CemrjMw9yuosoRUmz1wn8vsqPFbQ6XsTvumKiT2mGawZBFft4o2fudjqUZoN8wJaye9d4gMnguHAwJwUoPoi",
  "key8": "5b1Dhx97WjdapGdYyN9DMVrsmpSAA8juyh7XAnnBGJzaB2qadUxqxqwY1mSBTs5BWT84b9L9rQWoxd7Nuja7ZmHh",
  "key9": "Jo2LAAD9KA3uj9DbSpqeSkdE2AdckcFvTQzY7KZuVM6bfQS1x27HC7bvJTDwBXLZjMUAUstdJUS5YvzUg6wbKf7",
  "key10": "3dLC53yzpVbHdej9fPHFDJzeEW9Bz8Ca82JypEaumZHX8vpX8yaatLwCTzENaYCjpihASjQS41Fkwmepc1EQpLYj",
  "key11": "zvQK8yfa4yHtLhUkQgYA7NxsyA5E3MyZjo7aSC5gjUAsSDPrYNCPCQbCt81uwcTyaFYqhSFSsPvnmtb5NMdFSjD",
  "key12": "fjKfgDf9L4K8pJ8TQqWjRimsRyN1tBYs7cxxB73qxYePRGGDZbhRamPa3WbriYuiZaM4d5dtCy2vMoowmFicnz3",
  "key13": "5Q1pWH3zXxZTL8o9m4W53dFjAnfpGgLVcXxA1N5Gn9ifCgmRctRMSCNCS7RF5UBG5fMr3Y3E1SWwbE5oFRzdZGBN",
  "key14": "31j4TGKJfgMN4QiYtDdu4nFrszkorqHwZTGVRKn86yHD9VNBhKsPy58YgJS3e1KMywYQPRWVyy7iTLVSQZDcp4JD",
  "key15": "25xQj1kQECo66X2KgHQ3MDoKV2Fswrq8B6egVS7ZVdhdojWXyR6xR7v1g24w7MVxuYm1ZG7rRPPHsqdibDkwofAF",
  "key16": "dE3EWYJgn5WYyUvgLQPrBt6CNTeDuEYcAxNwT3txu8uGpUhGg9TZfrdUxfEqnN45gjTubwKcANXCwVNZU84kk5D",
  "key17": "Bgxw12jLBLhpT4qYaWTqFBaKzDT5CAYf34Vv3JNT6FmwJ1TktkFAcBaxUXEnQUUnyZzsmjcmY74DQddDch8eX7c",
  "key18": "Ln53c5uxVHd641i41NWhqxH7ow8D96YcXWdxD2CfwhaDS7CXPcW6fsGTHKb1tD7D3q3NbetVyH2tdSjrmLvkxyV",
  "key19": "2YaM7wXgVjxQLFVq7uqzgE4pwxLSwWb2zK8KPidT1n8axT5UDnGSnR86rbGEQJGfHvhpjbyYhXGnW7SRYViKnnRh",
  "key20": "5C72ogN27QBxws2SbAoJtk1j5oHUZdsHkioyFBC1ZUofRVS28yGQ3iT4CzniHjaT4YvKdRr463icuzB8bpq9ERg4",
  "key21": "5HwiVCGtgH87618n9fDSKUqhav5Fg7UQrZ2XYMmphzJXJabzkRh5r8dHW2rwwn6tVZMfLgbc3irJJNhroVV2icLF",
  "key22": "5GRVdnmdS1WX8A1LGGcVWaxiAaw6dysHnu79oUMw8cfnrKfmUAxDTwfQGzovWL9m7QbgGHVyDvMc9GJhXMqrva11",
  "key23": "5MYFEDTEnsSm9Cx7dZ8r25xcC5eBWfcFjMEA1ziNi6zEs6R94wMqQH18gsnJ5g1pEmMp9cRoxDgyVB1enuE97GS2",
  "key24": "33UW4fe4HVg5NBX3WhQbBygL1Z7A8NaGQziSLoicQBKakazEUT4BjB13w46UPLSbJ8KzzdPhPZsSYmBXALnbPYga",
  "key25": "4kgRugSNo8nhtYNr71WtHnR8Q1x7t1cvXJBjPWwBiKfVVv7zmxJpjnFb7pyfj5bCsLTcybdxPAMJBYmBhKhu6MT1",
  "key26": "2XT8FmkgtQ6oLYa5pA6iWyqQyeMYJrCB4CpKzL2Gu2m2bPTdzWRc7o6UbeuiuUBvFavxiTv7Yj6wx4gQ7dLYNxgB",
  "key27": "5EUZ19WcBpXGkz15VqghTXgifFpfRnFLfqjiuqVAdJgh3DuVvXDdPhoB3JyXSYge3Muikav2yBojFr4CFFMx5gBY",
  "key28": "2pd8h5LML4Thve6wt4xSd4r5aXvMin5Bq4pP85zU5Ae2DbSwuMy4xNHEm63A79Fp93dEYxSxmCWaKA3YvCiACtjV",
  "key29": "3gQfCBezRZ3TNbomga5QSsWUH47prdGycv3CnHLXKV5ymi1QKc1NPPhtTapiR1HyNHz7uwurcHyeienBapcE5SMF",
  "key30": "4yPMdPzwu5yHZo6Shy73JcbQG1nBNPzdrRCgGavkBRbosBjc3BRychWREjFywgbPtgS9uSiUgkhmijWmrEWqKX7j",
  "key31": "3gciDsaXsbx6ZLZ5h8YS6zqPQmxknT3JUNDPEbxxrj6jR4w9y5FF7gYr8MiKDrWYoNVuJAd6idXzsENMof3MzHQr",
  "key32": "GTAo3jLoUiF5e59fdknS28KQnfRGCft7rf2JiRadWBuihrVsU5QGGxvP6WKSH5RSZYvurWptkZdDMUsfK6rFXyx"
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
