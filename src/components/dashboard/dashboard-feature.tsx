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
    "4UjCD7teBHegQvdxZ5a8ejNSnC7VTGTYp1HW69KafTW7LemJzZqZy78tC4FF81ZUQGBjDQmoSHb9mZBrzed2DHeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KMs1yWSoNLvWGQ2mAGWoAkG7eLXTNvyR6LQTo4LUtn5HkeqxqQduKPH8hpqEL9GSXqE2C9CjJbULUBeSmU4JiFu",
  "key1": "3yxT6N9gqUHYPNxS3j9kxiix1mwi3jsDSo8BDN6nAV9BET9SxgZs3A7eac45wbjHH65F8Y3e6SoT7tKUdzm9gdB1",
  "key2": "5cQxsQBZDE6tGobnHzzwkX9tBfUPGawnXQpJS12FHBvMiCYfXWg6QZjXkGsGx8ZoxnrbNXz1Kfm5u2kg6sGwSsPd",
  "key3": "24aH8MdDHeQoEQYYUtok89Y7mqg2G9W52iRqFtVrwuKPa1QEyvh8myiUH4P5ErKyZQbFwoXeGjWdh2YngCN2uMAv",
  "key4": "5LTnTBwLkcx6gityiCozuyknKk6xhF3mQzE7axv9zoJRuvELLz7uXhy9LcuUgKe952BykebyyrwMYADEwVdYfNYL",
  "key5": "2qizpUY9TeF72dZH2oe39b7QV3DM2Lhk89se1vbaHfQvWgAhdWqvo8j3bpVen5rbL1X9sGUKrbTxonVhUdABW3Ct",
  "key6": "EGXQdFKbFSeEEMXybtHP95Lfk9XvxQ29cUWTGjpUVs8w8QmRT24p3EqFCxnXYz5DeH43kiGbcWTHcr5FbUcbYaC",
  "key7": "4PjE9BwMDVDtVDihv7cKzUPhr9WTWDeWUoiHcXZjFu7PsJNeqqDaDwc3jK9brrX8G5wvtvMTR71V2ARPpEjjiEHK",
  "key8": "5RwmwDo1cufK7JApcrGYfhafLU4EYHiV4fGB9syFopHh2Gu1wErKKknRRntuARbqcbbFkMoUCav1dDwX2ZUWmN8H",
  "key9": "5ekz83uXYJi3K5kLpSyJ2agnddyB3rgDzhZZiWymxX8EJHX8eysfSbGHNDfqUfDZqEDhkzX4Pu12E5HLrpiSzGy7",
  "key10": "4FvSdXinC8abTZSDDujZJWSm3bjSXQ7cnSbcURX3eGNLnWM2673bZjoFf6aU1KcNcu5ZMh1XEKJeR65gXCp8xyMS",
  "key11": "5DZGAeNcrYrN9VAp4ED3WcuVWhp9AdgEwV4PJhDK3Ro4KgxnbzunuzfdCwnwy5amCW1Ah9snP1A77iDt93L93TrW",
  "key12": "7gHmaKrE13jMYbHC95yJz3qTyFoH9rYyFSDGwiHVkircRR2y5xjHjipXGV7EfKMLvG7p4KfjMh4eTXn1nKo3KPP",
  "key13": "4hGemTet8dJMNv9qebA86RnKp8F4gB12wD4zE4Qq92mZxtHBDBsMR54eF8HQh9mJ1kynKPgCms4ofGFfD9bZJ6yA",
  "key14": "8r9xMo66Hvft5GzWvdN8vUUWcMjV8VZRD52dhmz6JGRfZ87jRPHdN93cyEGdwVR1RjuQSNjJQrnbJr2Ay8rHpTi",
  "key15": "2uSkGhjzje3kbfMXTbaLB6VacFdZmXhfL8fJQhPaQsQ7eP4PYXQHx1Q6WV1vRXHcWCpm29CaoJQvAUSBLy1zRrHd",
  "key16": "zy4W95jBBJGQfLCvTjgDJvofah16bWaSCSfqHotQdX7ouVoLzjuBVTvHzZdwFz7riQizWf5sZnZboJKuyFKGWgE",
  "key17": "2cXG6q72VAFTM71cz3tvptzBi2YJ3MNNo9c7HTErRLZd6MvRtBLmAjy3jNMHZCkDe3BDopNXb9quDJvzHFop5RzS",
  "key18": "54x78tUrAqrBhu9Lbq36nYSHPXYg3BEG5TnDHJZe6PBAWwrRcx82oeA5HCm63x4sKrxA6CpCfNPPDQKJicsYEgMK",
  "key19": "DzA3hJQ1QTtTC5sKsaFJ3Ly8Y5J6G1Lc1Mwd4Vywqf8uQS18M2Uy8PM7QtS5i615oyE4kMzmwa8ybVWHUFkekSo",
  "key20": "uLa1TDM33kxQ8f35sydsDGJ4rLFukRrHLVnVDovRLgCtBPA3boVU6Hb2tCn2J2aAyq9EsGfcCUfcRzZbdHkp75K",
  "key21": "5PZcNwa2rTAME94e7NxHv1Td8H2hETX7nsrz1B8Xd2DrrnV4EsGDCikCqn1qFTH3nZVwJkrpZgS1U8hidT7uqdeB",
  "key22": "5uozYxv9fgXDjPyLDgPpzjkdWttWVgUB3RuMtwikeHwCWdxJduMzFPsWscYqTeMG9Ajhz1SQisP88cfH8uVThkhB",
  "key23": "36FywYT1rXrshgiVXrChnCin4GQELXU1CoDbmUHJHGKkQdRDBFm2MdJ1WobvAi8bpr56ZGtuz5wKJnu9S6g8xsN7",
  "key24": "4GkJEy58LM5ZyWjHaTSGxowro1W7vQwVLrqswjE1ybAJSbTfAA9GADrUmRx36TUn8cPi4ySoznoPR8GaXDyseTEm",
  "key25": "5ndVojPoG5ivb8yMaj6RUXHe8SDAdMaR1VD8J2zakbNKWBoJWs4sMD4umLZKErPvkHja7gECbnXU6DpWBXFj9LCt",
  "key26": "4RKbHJfWE52N34TFAMb4Vgx7egdzNXyr8iXFnH4Zt2hsn4GuVWGumVYKtJeBZbPKDmzXWn4Ahtyn7TSHkG9K4XjF",
  "key27": "5fmMWd8Kts3ohpF3dVe78msNR3jfuLDmVsbvpXUNjqLrtkrKSD5baFH82HYByWbkbjJHG8FYPJkk9jssbhavjuVX",
  "key28": "5iEEgSZgX3D4sUKBnHTeMhnuoREWULkSF7veAgkFtH7LFK6ZXyuR6rXw8qre2Tb5JBJn5vmUWkCefRVCL4Yp6EoT",
  "key29": "5W7Fb97WbzcVDKceXQwReNXa1VXPjdbGP71fqHWFWTsUn3gBtNBwEcdYwNUpdBm3Rv4PVJ6KM1iLJ6Jaz7x2Za4L",
  "key30": "2gvtceUMGUFSEqxkSKDZnRH8YJJ5Ps4QVYvHrFcXMD23pnkHJZaPJnQJHTENCfK7odwjgPc7P13uXL9W2jk3Rdfk",
  "key31": "5unDXqNyxpfYDCfNwmPZdoUkxWA3rCoe8iyyuVq86DA7U55tQ11UrZLqs7RsSB5xs9W4dfjLXQwUrHzaMDrukXED",
  "key32": "3ngb8Np297a8doiUSYdKCD75TGTKCDdMtbH976PhV1BBs3tXcuBUcrn5CLQ3E8QxvCzB9eH4hBrxPcKsS6bJDJfP",
  "key33": "5Emq8cWotVhz1AxX2mv3HGxuodK3G4Dg3krFbB6bdEa3mYB1V14ZW1v6XpUkhB5fE55bms2TK9DXrjXrHdZN3Jhn",
  "key34": "3fQLgKwsXkMtXgrHTxWetJPXpxg5pd1NFmNUvWKgiQtG82m8MCgWXmFYHNunUyNbxxQTXT6xMP17wDfu3to5Z4dC",
  "key35": "2L8WHtKDDVV3PSyPonzeZX8y5HVvyYuRxc1qSu6GMBhFp38H9ayetFwpaqLH6JBfaWvZiehfQxyHJupPANPDhvA",
  "key36": "5YoN7eMRszNK6SV4X1MW2Bd9s9PKQJseCzW9WAx43KNmABZ2XrzF1xGrw6tiW15G2AXQ9VTmqD4u7S8A6ZNkExj2",
  "key37": "56tZewn8M8RVN4xP7iajpUePmZ6fXtq2v8v124guhvU8GYfVXXtqpZRFsMZPw8xUdSRLLTWVMfDHQYNZ3XLoJ4DW",
  "key38": "3LQ6v2HAADCdmredsiToqSsjn9TwiFUu3LJyZXK3HpXSyC9Z4RpLvHSUkcnpNtC6UHN2uNwAdyxmWhKDMnJHspYC"
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
