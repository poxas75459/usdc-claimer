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
    "5XLf9WqL9CrdRy5rssb9Wntv1aNtFeMnDPVeNeP7xyz51wXQHVQx4nnR8rymGhkGi8jMHC1ENFxvZhq4cAZmSe7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48EZSDteE13o8ruXSm9jZVYszYDaTKiAofhSB7cVrXuhqUAVDCcXSspc5WvZ4V5gBPJ6iHoSjKZChvojBH3ypm1S",
  "key1": "52XxvwcGW2mfcitHF4TiehKvghJH5Y2upjyeBARuDdaAkvadzSD1EXwh2sj5X9h4UnTFeuyPJYhrtuzkpgLbxkUf",
  "key2": "3cDv5Vr5jibJ3kPusjze9Z39GAk8YNExL2YPAqmYH7ngntcKZuEcmdw23v6An6RNPyaz6yB15r9Vca3KFhzWDrBb",
  "key3": "DGbZKDNqTBJd3LJ7geCEYB4uoXn9gnLiGgbGtBSApyXdNMzhjRimsdQdFL55BLFNU4uSZuiBAD4NRFg4afEdj5C",
  "key4": "XpRtJQ1o7YZEJ6uNVnZFY2b1qWQJtczrKAXDTABPCHWGUjL5G8r8tjcjCbCdqb5gDrVKtgA943NFe6Vt2cNVCXr",
  "key5": "5JRgZ2AVPezRg5FHLusGpJTJaHhAqSCbwWNaMVJznA5pvHALFpC2pRpuuBxsnsgfP9sSwBoWJHByNEwG5ACiRVKL",
  "key6": "3UgpifGyUVeNtjfEugAPcBcmhjH4mnfgxogrBk9WLA8JZgwghWRJxygUxgYGuZjeT5k5zTDNJcVur18hARADi8gs",
  "key7": "nDmq2QQc5h2peUpqMfcYnz1G2m9tzTFKQMpxzKBSUmmCMuj2fMS3FVxWVXNZt1NriZ3pPK7ejFCK3X5md7a6r7x",
  "key8": "4A4bNSsXAwwXsfaoosLCxpxPseygNkR2ZEP5bGtycXsYcoPDcDP7FSZRKUyRVGSxxwcYBwULuANoja6dhCU85x6J",
  "key9": "5DNr9saJGHZ5f2YeXSnoDk2Lmz973RUstHP2VBt1X8vQHnVrbqStzHUbPt1C49NYpEnQ1e83Nrkmg9kMPgUHg2dz",
  "key10": "3b1q9BkpexwzRNyD2mCBimjG1Kcn34UHD1ZF1WWdSv29pd5i4L4tX5gmgZ3Vj7pXqXqkkC5u3Zv6aGPqpUwWBeMh",
  "key11": "phGh9Mfgt1DPqATdncLve1wFRYaVZ3CA8dNWcPnVGYKWL7FhcNfrxjh4Xna9qhEDoUpXcTHB4wx915xLUBikDNX",
  "key12": "ThiRKbgDSdyVRPNhEtxsxSrcCaPbwbdjRav24wyNa4bnjQE9nRYW6chnZiUzLga76AceWoZdaK7nq5X7TCrPAqf",
  "key13": "f9T6kw9SZ8nPAMigpo4FevCSqiTZWgzNqn7uAbzXHkabNBGqkeAUKU5hVeUrDsxqFaxGBUTph1QJUR2wCDuZ94n",
  "key14": "5QYWS3jGhJY29M7sX6tpdnZKvjYeB5RncUDottBp9uV7SHzqs9XKweF3rmd6vsQB24dQCyC2fphbPyTCtkhSay79",
  "key15": "3PtF4FE7Uvn1SBHoqnj9wsrqmL3avPcA6UMsEJVHPbWp93fmTm1kk4M7o7CEUGXs9DHfMWHutSdRsCV11PpZbjyJ",
  "key16": "PTvLFzouJBjZxzDugyq5JuHanM7W72e461VHvMLzDKWnjJE9Lm2EQo9Y6K9dAiAXot5JqoRmVirhV5GKqVeeNbG",
  "key17": "3DhAmCKNaGEgJHfv1LmT1s9B1xeAZGNUYn3BFoTJyW69WV3Qfek6sa4EUdRDSY4DubhrW82oSH1bfziwuzCkfTfh",
  "key18": "5r7EkRDmnChNyfsc7kDHJD6zYkbEJgaVYrzuHdnpjommrfCAmmPh632JXTtT7tgPvVCfMPRJDG8N9i41dNfvNcQf",
  "key19": "3Gu369FCotGVB6WJXmNHWmFgwkDEXmwY2hdRBp2GwcKtL2C8jfiE1QaH2PWD79eGGHJcfRtM6uG2AbMdVvTjCiCP",
  "key20": "4fd5qNsBTDEmq1YqQ6fb7X2xdN2aMRTAHxVUDRNsjdqVBGEHQhCCHSAX1D87Tt8h5eH3J4dLFeW3cZ4Bw83gtdt3",
  "key21": "3VSVGegc5Jn4VLRn1P8p2aEB54sDBMSVfm2Rj3cPLtRkmtEm6Xg5pTuXiMfr4yYc4mKWj9LBm32vDwCNxwLwME2p",
  "key22": "222gTmc4pP6w1FXv8SMeJAjurnXUJHGEALfU1fKGa7cfzgZGbKt7w5SSCviYjNX6XLo3QmBL26SX4yrVq84SSJBh",
  "key23": "w5XYuZTSck87GiHMKMXtsAzcv8A3xLNHvcZkiBBr8kdPnNkaAZcRUy64WjjPYgPVUY4nxiVF8oNKKfCWwXDTepk",
  "key24": "5W8mD3F5Pfydj2rdgbEzTBkY49YWzSBFBSMuQ9eCguptnv6LGwMtB8Xj8jfGCuvSMtDN5NkH5qH5i2iDypnSaXPX",
  "key25": "4925K2J1f2Sp6fM93z98eNSMgQ6ESwQWL43ddBMQn3C4K5Y36SiUY3fTo2dpvLy11bqrZdDjegewGzxjLKykPtrh",
  "key26": "5rC7J6bhyjLe788kcgfxqR5QpWWpjmyBwz4XCUAsCszj5ruo8LfeSab5VueSkrYsLq2Ph5GYSKxKQVT2DgehRsrs",
  "key27": "4aFAaLFGnjdhUdg64typ5p65W78bQqmvK3GyALsETw6Li4Mo4Z8ne2jDCheSyzAT3WWThNoo3APRGmXwR61WGqcu",
  "key28": "21bdTbHacVqjF3h2R1GgVYe9rizMULfbHzv19aoUftV5aQ7UHqb1zAX8hYC2MY49NVzK73ivcwZB8aoPkjbHV3Pj",
  "key29": "5JFrs2tMdbcM4gZE3wG4FpusuZXVc3sKrhtpJYcVezamLccaKWfks7VZ7zXRto9pwXdtTFEHSrvBNT65bPcXPP9n",
  "key30": "5CppEZGuLAhiSWNpVaBUVsjBLHxbHV33JXbKX4QCzM48s3NssV8H8N1jKjJ4DoZ4H7HMivfmMSJwBpAusV9SZ7n1",
  "key31": "3uCELz5w3idS76iQnKEHXQoSBX1dnZEeTfDG6AXbTKj3kDxQTtyxBGQNsEHainxCyUGHDYgekBMob7zfhHWRXsUf",
  "key32": "2nGv9B4ajPUatYH3q7jDuuZk2g82o5nQjXN2e1vEh5A8vjJJ5uCg8TV2gHHFP1zTfmgckNApceDu3d51Yb13pB1Q"
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
