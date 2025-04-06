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
    "2SvodmMtp3uTAayLV3TMEGyHrSqWiE2DjhWF2zMHBFGTUBqw2kbAA7wLb8WpwRhBg7Qgu2P5Z559KdfWfpcLJdAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZQJcf3MSGLHBzmZnpqb4jB18uj2mqiJZYWa5RA5cPbhJ22UtjTwWfRyVYVYCDuqLM2Y4pukeGjzwRDEzZefoLa",
  "key1": "4zJuWYneJSScz6HQiMJMLpnq23mSg4LCxWvuESWQ9XuDJpieCsieHivwVrJGkUmqAMTjtbe6ooUoJS19432VYFJs",
  "key2": "3rTAC2st6LPs9CiXAVaZAFtsLdsMJczbP4znY57tXT53iZFXAAH2hkFNvaAHACDFLmHzPmeTgC8bsd3WUyzncYuQ",
  "key3": "kwZ3gLoXhCcD5TudpE31T2j4PX2H4ApjVoY3XXoDsW8HCH9efBBHtKCr7rYCK6QA2JSD9DKHXhdoUxG7T7kEygz",
  "key4": "3qZcKbGod4sTm2JdxN139BySxiyFURuvZUGZLvwsQd2zpmq6sS2sYaaorjPTrKB16agDrqggTr2fTGat7QzQPGsf",
  "key5": "3jwFJ2yoh4T37U1ba6tbsWoSJjd2899x1jUiUMaZtUHQsPfWWPmacxBXoQWNfTWJHeLfcD1xfLcLZ9jASMWxE1Hy",
  "key6": "HgoSibDBxEhGJyknGbp465krA24Htf4gGEy1B2jPfYWRn2BvnyosEWxKAAf8enUwmw1iU5u8MbugZjPAkMGkp1d",
  "key7": "2xgTTuToskpdrb5YCguFkPbEFb2b3LeHvy9S82A7ZMa7qL68jvMaDFv4TwYW9LbfyoUsYwP2pYeNgh24W82MPumz",
  "key8": "31jAmLNMyFUmfxsJ35aJU4qzo8CLY1G2Be4dXKkVGzVWUrdfaJkUL4EbufBz2hMjEVaZAZKpJVM4kSWRAMXb7eo",
  "key9": "5rL39h4VSsmscwrnQEchuZBAWoVukJ4APDCffQfCdhdKJbWpuEPp6zvJFR4SZ9rVTJP5A8UeuuqWZGm7dDVTuENw",
  "key10": "39UKB85sSorX8tSDWpPE1CS5bZN75tnfyHafXgoRuZ13UBGgY9AUQpDcsaZESoXCeLXCjvrUSxECBjiynp8oxsnp",
  "key11": "4w79Xy7X1Pe89ebCrS5y4MN1eUeKcYttMYpBnHL6w99Ce3YYLG6tkR2idrJJR6Dm3BD6UPxJN8ueEMCVCu3NoU5k",
  "key12": "5sGFxHk9fL9WAqqSMrs1hJjhSBRpXP3tXapAaa9v2VmqvbNCpFz6k7mzJvpHwbYS5fq83TApxUgvP18bXfpozco3",
  "key13": "3UxZjbbKGo78prQdRvTuPcSrqf3dd2EcqrbSP6QLqeYkHthouigpjHhZ9ZwKaBLnWJ7dsBK8zyWNTKY8ZS5Wwa2K",
  "key14": "3gAnAjDEpA8PMWZQuAsLBPs8Nk6KgmqzgvXCLa5FVhEUaHkoPGqVbyB15UEFdnoSD5WK5nS13VshJ7SGSctZjBtj",
  "key15": "54eJGYhBGKgz1T24opZXPzN4EoV1U1arvxptqG7PG3t36uXBRgUH61qyxVmthdvNqpMgbux4uQbQM9RSk4CYoR1a",
  "key16": "2ziU4UU3MZixzC58Ybn2UiCSRHRHouEuavJPQPPuER4uW6u9iTKz3auRFm1WkFwMxoc7SSPVrryTNaHKL316y6wG",
  "key17": "5X8zU1LSR3yZUFkSyxj3v59bvrpkwWaXHg9cewifLLuT9qkucubFsoue8RcaZH1rwB3dnvz4kYr8tbNhWqe4CVa9",
  "key18": "3JY288sTsxzGM5wUSxpvgzoVtHrNdHqNJS2ereuthhYhDNKrfy4dvruMA5Su6JgQETnaooLJWikp6yMD1AuTDB1q",
  "key19": "2bqGfQ1M42zkTQvts38PTtwiuZ6kxc2NaESEmu6cjGFfLithJb8gwg2pet9N8XiccP5o58f53pikLZNsm8y2ZuwD",
  "key20": "4u4rJRPE66s8AKFFakJEkkqCANZ2WEem956Ciqe3fpEBk4n1xTTcCC2UHQh2KmdYj8Q6XDQBr2TxJvcV8uAHW7DK",
  "key21": "xYvrQi3HQkM8teqQd5HsbFXFXDGPFMiYpUGMCMzz2hcjxqM5rokjGa8uNmkxzpLdmh8hegYLkihPxBFBuTjAnHQ",
  "key22": "2g1AgaBFbcXcj4UGGpTHpdam1igi1sYmkXqR1zNiat2Uy1ww5i4aRCkj9bJqyu3kgsarCi5UrR3BTyUsXQ316Piw",
  "key23": "4ppgMweH6RjGontjqoKWC428NB2faNERgQxPdxgwv2QKfBBpMFbcMprFG5ULZBvGkpgxoBmvzPVpejBMX2pQNssK",
  "key24": "2VmcRhmEiCm23L1ipFjZc2tv1mUTJPm9cxzviye22995RQzvvZfnZnztku171PgwdhMvZws8gTtRvoFyR1zUUvqF",
  "key25": "4aEA9dbBuafjrvVEhfyaaspFHUGesVaSi7CDH2e41896tsbNo8bNMmgHgdeZ2Z6jtLhA2Cf7qhYWv46uksPpBh9U",
  "key26": "5J6cp6dZ24KyUoALMSisKHMe99BcXmg4DeqVDvWqVfDN3Akad1FcTH8s4bBdChwnB2xpWUpseuYDDGdjn9XhiwJd",
  "key27": "2sK3UkCBD2a7XWUNs1eNJcb49BssyQ5BwcbtqDmPWp5EfmugfZ4GNzuksMdif94fJPxFL1SvQrf9o5iDyyyhMgQY",
  "key28": "2XRZyK8BpbJ89PrxBmX28DPrruquD7GxfqneCaESXriC7d9YsMm38Vc4LXjQWcpHTSKXnKczZqbSVngCLsTFrWPr",
  "key29": "62Fo2TSDqaN6u2MfGQJQ4oQWratkYgScj6pjiXULa2b5x2AQJibxt4nBGioSAMfSRUrCmeisdcXka8YJvB1Ud3Vk",
  "key30": "Hp5MaEpnPY7ooipLKFaeExPH7RVjHbH4FrhRdyuTz8Fayp45LjhgyifhXv5XgMGxEVRAkmPafBryM8P7xPfATc8",
  "key31": "rnXAmRy58cJoSixCyeVPUdQR6iGzipYPAxU475HgHK5Q9dJdmdYoHQU2yBfg78bNrQZz6EWZTxrs2ziVTKavxLU",
  "key32": "2MjXVLxvsEbD8hBFyRSDxrF2dKfYeXTqeyNiUz2vRTGRad57LaZLebpxMWESkHfntoej9WxfGFwMtjYgcvP42RaW",
  "key33": "4azdSWCJHyiHdTGyWh9fxi1azcy5UUrReXPLPx48jToyjfntP3LFDDvkU8CvzudeC26MxK7JekaqbEzjNJPvQmUj",
  "key34": "4MUCQeWn5rnQEHThRQzTR6LHi9hNw1wuhB3b6NY5Nf4qYmYFssvWpj4nr2Z52vdwUfJGhdgKcy3oqrtSvK2SpTf9",
  "key35": "BAPrx1v86QcQi7ycQeUMaN4wL3bd2GXjop8bhr4aesHXPiqxXPb9JMPr8YN7iUB81Csv4pxhh2MFgnDZQ2PtzkD",
  "key36": "2ZAaRTPVGyRnwuqNBrbwESc9a5w9R7VAMRUuPpdKpDwzNSr4yUpTnvTqY4ZEmr6mGtrGPhsNU2gJNVoncBSHJL5e",
  "key37": "58yBaTgwmQ1rmKmovDEZNub2mFBcfyYAey3ii8UnAz8Rk8JRna4oRYBxF54idjUyKkHStNtaPgmfPDJhq54uSn4K",
  "key38": "52yRRXo1UjB6eSxzQqU9xoGEJcQYgsSTPSEuRSU9gTjwYbTyJVk4S9FAGZSfoThi3AsBSvdENWJry7MYNABDjUqC",
  "key39": "h33X4WeVU2nZ4X7R7Q5fRh14md8mapaStsocDhZiJ2wGCERJDAwap4VpymqMuVF1jhtqSeh9rdHwGU9u19byUJX",
  "key40": "FcT3hkDaNmEMebGe3bfEanLD7zKgZK8UfVNgCFJZ8Y4N63MwQwXH5LKB6nHnHgMPNUCSowPJgZKvajpdwhH7dFa",
  "key41": "4DDaQ6nWjedPQWjbhnBGawwtCrw82xYYy2veYvFSteK68fiSSaYmyRfBef16LfbZ4LkvZSm6qLMowXFZQ6u42nVP",
  "key42": "XK5SFEQYh9Rm1ozhAAv8T2MTHuwhB3uQy5GWstk5jwV3QEiQVnj1UTvwsapYjjsNvJaMFb1SHSf9mixdwKeaZNz"
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
