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
    "4u56DV6wBweAYeRw1BNUrwC2TD1YzsKnvDYD8pSPqmsgQQkcFGCbQsM7Udns5Yj6Cifsa58QNZLH8nQhVRzQU86U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3msyPEJ7iZiRxSc1XZKZfYkSc5fEqaeC7dR9RtR1GLNyenkFpJHsBSQoza5XL4DBRfPbtzCWoY76wp8pAaDw325f",
  "key1": "4VsLDM8QRCifapdnYUGQexxoLiMgguuw2FL9Hf2oememp7r4Co2t4XwEQcWWkM3c7SdTNLNpm2xLjty27n7vnPR3",
  "key2": "43TvSivaS84WA1BL11A6XqUEDdg9NMi2mkj6eNtgvCCinAjahzyYGGcWVjo7uXzK7b6EgmRecb3FxhMNixqRsrxL",
  "key3": "UVrcFL7WL8nyHjDAUjrwUpE72vkUL39atVqwGWskCExqzn3DJMMLHewbSLHK7eqXfUVGKashtqnqYZ4VP7a9uKJ",
  "key4": "4pjAzMp8GXsNS4VzBuhnCMCCsyXhYHS4U6hPxriQWu774kk2t45RMJSyBRWvGPq3QAidbKG4qTN9A7oApCsvnAsK",
  "key5": "BFb8bhMuBSHu6iZdnisS2aqVRYaRJENRfyYg6F9p5fF6437DEAn6XbxQanYBwNMzuuQrsqZKnE3kM6VRV5ikZ4A",
  "key6": "58FCaAMNAGnJvkstHe4j3uHbKR22KDSypEbBW7ZKsboXjaieeVam9XWBA2EFKoYAZxgXKCfTuTvWaFk2GSMkVu3r",
  "key7": "5hVYkUFk7oPNfwnPiP6Tv8qHMhanESDWnL8VhQvbyPd539QdYPktBd6mcDWKd6nKa2Dh5uU8LvqCbssWBwtn9u5f",
  "key8": "3wa6X1oMgGxvNMNqH56Ha8f6dePVA5g5ANUtUAxa3cvbAuNj2YGXkgSwCUDVF7k5UFebiajs3PAt7QGZgxreLE28",
  "key9": "bGoQMnG3mvAMp4pJFkGnpM691aLEK52ep8o1PrEzduup7QXg2bSXKzvZ5uNASXzvBBsDcRh4SWfYi7dg1bjnTGS",
  "key10": "4MuhuxttZVMRkhJKVwHL4s18BUFiiRURFYSa4WEgmiEVKx2deiie2zha2RvTU4rY82qJqVbatnhCeYvvDPM67NfW",
  "key11": "5WXTmwXwpqtVvJv2LBrmBQDVYTjdePBdfwVLdkybfEqJcdNw2qh1hfizD8PKteNcrkAJyRtocuR7yic7UXg2mEYz",
  "key12": "2rPgqtbsfmaMtAJxWTdPTLYPghcyJGZ7DCKcL954Mhqw6q8CBeEgK48PadmtYWGc5AwmkxLqpu7nEnmw7gzwStmJ",
  "key13": "2MWQ3qTSoLU4S94d9wijfo5MPm3tNrJ3uNz1umnt1s2a1YyhXmF4Wf7UbpnQSiErTazdsUfPhkWG8XC62nvbzJEi",
  "key14": "4HtvySYWy1ZkMWQJxJevgxJH9hyq7BZCni3aV5iQwdnsX8hPCtNS3HYNfZPn5t7UkwcsjDKYTt1GePx53p97GLFE",
  "key15": "3snETXjYh7t4MPB9RVseFWmngyNQRFKfBv4FyC9TCzcjgmrocHYUxXNK5hWqruzp114PuiRL2LE5uxRf1ZP8gt3W",
  "key16": "uE6WuJ2rFnyEjDJP3WTHtfzDTpc34Hj2aFkfbdLRNKW9agTohDqMuGpJsk5EfgouS7MHd8MHn8yQSjaKXr1hQyk",
  "key17": "2uj4XMDPYpDULeNUdJmZXERSXuCN4vFbdCDc2EyzwDqYUYrw4H5SPtM6oi1Dnmi6sPET9Pray1UrtGYVtJXYKFdZ",
  "key18": "2Lgc5Rs23hyxfpM1Z1n7owybtCy6p7QdhUzbYNttK5JcpzFgKvEo7Bmb3TYAxuMQwKN3okR2XwTJ7Hugd1f5jqM",
  "key19": "Lmue2NtpjTZaZV7JK3zKCCAR56ySG9DivdqzPT177Mic3V6oTFs5KMQzgiZ5PmCxZemhzrpdk5Kkvqap3b85YEu",
  "key20": "4KiTp18VGP7coQQ5NXzg7VjZYhWUGmFiMq3P7gwzTGh2w2Wa1pGBVr2yCHpTunc1qutbmS36afB7KfNLFb4uktYZ",
  "key21": "4ct8g8TPSUY3rSu5JvN9R11eiwWSjiMv26vRH2SMMKFJzmCAAdvA2mWCW3XFf14TVTNGnxFCCgW8EFcrmyaB2AAW",
  "key22": "3L1BjfpxrHJyUbsHyGhcW4o8PmnUzdkDUjJd3aDswznD8mfyxBiNkaorZ7vrQsWu5GWHeAisCB7KiVwnArwdC7z6",
  "key23": "EwfJMWTVMiHTt4yALasa2yCAgDzxs1FRqpMZoZfexS3rXNqwF4L7VKExmPnqJBZYB5FAme5frLw6Fx22yW5ufQp",
  "key24": "58ptupEnr2rX7MYKxgT7ejwqS2YX4Wqvmj85DDBaw48tspwWtpdrDuvJauoanmRVgv5rdTBh2fY6gHFaJGcuZjZK",
  "key25": "4GyUMXmYn9hrTieHFNd2TRZ7k1J8drpPeuYwJMuAaf185VBFYfgq9zdDZxVsCNGVjds6aNQEbPqjENBZvyAwNwfx",
  "key26": "3AywpACSqyL8RbnPHQ82AfMA3pwKY6e3x2HJv5CGnXZ95nH26FBFHhxKBx9C4y7iEwcSyMdtxoz27mqTtAo8cpsF",
  "key27": "4xpbYgFh5X74Zbdo7u4T67UShBZgvxpsDZ79cJKAnkorSuWLEhPE5BYYMeSZHPG7iF6hCcK2KPfMuwUkgAGZi7Su",
  "key28": "2cNDShY5ykXpf6X5fswmN2beSbmz8VNunEmHJbwDmDTYLuDgaRZEz25LW4fC39vL8eh3RvARhmtcSqeXwytMowdf"
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
