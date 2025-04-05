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
    "5bEMr87yaGh9eMxNVxNcNmkhuCnNLuMPBRfUmgZkW1oihnYh2cQpXkgfNdZmgMzTxZMjmVCRWhV2WgGA4iab767k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bTfUrDuSi99vdmpY4j7yhSQirgrEEJPU29tBhkxMYnjwF3yAEZpSuRhFxTs6f5p39wqY6womr7tuduU6ouci7bF",
  "key1": "4xtYtsJNhgDXtDc7HmZHdiMd6wuSS1D67Wh6rt8w21wnhhkydNo2vtCwLGinAPxsCfM4WsPkfVTPQG5gHc5uV3y1",
  "key2": "2YGPJ6VYcPCQpiXxBwVgGqa5wqK725Q5fUkB4qbA5UQbtSMaBaULUZReKqt3iaFeA3Z6GvZiD9nmuATieAPTqLbw",
  "key3": "2qMoJS3CjVm4wX1NJZssLPd7Ya4xM2rhp5khGqp94zCTEWXKc5MzHtjMFk8E8fitD6e4qHS5VoRLDqZTnfGhsWNd",
  "key4": "5LY2LsuFpaKrYNqmzqKXoYnM8Nm1qT4A2zKgKcsHac7xun7sco4JWwNwUwrYaFE26ZGKRryxvwWitNZaTaiymWQP",
  "key5": "4A9RaQAC1cCRkhb81NWudVReMc64wdvZT8a54jb36hUcPDwasqQKUcKbJjqyY1s51jLRTKKQeVr2vDhkMwm8im28",
  "key6": "5BwgMRrqqYJB9BqnJADxv5FCXqCqQeiUD6HqjdFfxNo7tkFrJU5KiZRFk2iBfXynZxD3NRryKnq9y19mLD5r4j63",
  "key7": "2nfxYkGE4BPdeRh23oJzPcccG7tLwEuXBNgSfW5x2A5AZC2VDTi8n1oQs5EGtnmu9yosjXaas5MKg5R32Cw2zQAM",
  "key8": "m5BKDpUuCfJadxe5rGMNqV6DKN9EtbzSLgMU6zY3paofeN4RCxuD6HBJ8aqJSfW9jESDkhBUWEi4M855EEo9DEZ",
  "key9": "58q3cm3v4DnjXfr6PJqrpLf8fjxnsbKBWFh5udHhvmmqjM83fAhni7gpGgEhRZBU53xbHcKjYCeR6mQZiAjr58pt",
  "key10": "4oewSWx6z5FoVNNvePzQsNnnGrehkV5um7i7R6MknLy3rDhhhYmSPia3J8rHr1HkGcXs6vVaLMG32WRa8XMZyN3G",
  "key11": "2SwwomGnrcXFH16dWpRduJoduTsDUSbhhCYpwAU3VPg3TjTd5r4gxvtCnFm747icVbmsVE6Td38mqM6VQknc8sU2",
  "key12": "4Qq2MywnjS7GutucjFKjRkozkRF87JVoQ4aH73Lx1ia4xGiuGddd2VMzQZMorgfsPM1ydyCBi388qNowXmS7PYsc",
  "key13": "2BggMSmNaoZXRNzpLnzD2gtmhEvpp9tVXja7QDmWtC8YLP6wsCu8hNewdAEC44WuQXn1BiSUmx5TeW4Ti46PRGai",
  "key14": "64UfDrr2jywtEb9YSNKSBvs3ihH4FwkZmJ5UrzLHDqRGZk4b53tFf7ZFy3Zr7TGxKMU6ciZmfqVDnHnnursBde6t",
  "key15": "2ekuVmRyd3PfzTByB9swSZmU9EpLW7jpWYWbLN5Kxr2MTW8cAbGtykKydBxaqhxwo9uaKW7Xq7WABVs5UtrjhYUo",
  "key16": "5yFUQgFG4oqFKrBvnJw6WwnDs9mxahDEw2XowTsnZDPV2BFNprybUCMcvDCsX9eyXwcbLjg76H4g96CiQekKanht",
  "key17": "3KQeYWnmD5rBMTyf538qwcb5FHEEN13XTdYghNQtajoJN8hiW7ns9MHe9ZzsoFtXC28BoP9zHA2o2ar27Yw1xtTv",
  "key18": "2nsBLdi2PJpRo3GHerM2LcWAV4kuyHCtc7sJrGziXqQbZWaYU9GzVN5axibxD5WHBK9edJZAU4TBxWxAMp18uSw7",
  "key19": "26LfaXHXaox1jwNS5z7xzH5DcKh5apvqRZ9Knh4KCyBVd2HrpeLunh18UDfa4dL1EpPZ9bUA4vXvuUZyCnzTkhZP",
  "key20": "24BoDXkPttoUPuGsjoncjKDNQKeAygQEnLoZiHhGWUhAwmU7g1XJn7JTnaXLbk5xM2NM877E6TirmM69KoCendbc",
  "key21": "4CLoBRQ7kqtUj8DZDLbkZL33xMarDCQVNmYNSaWad4wH15WBvfQq4kL92M2M31LnqLZXBX5Jw6ynKUmhTbFyt4wX",
  "key22": "3pcKr3o99VygAMjwyqfDbGPDb4md1VdgnHgpiRou9B9FMTaeZDMCDBmYRhFfB6sfHbRDwxXQrHa61utBV1peLfBP",
  "key23": "287i5dgtJBbnwahfwg66ssWiCHhAGVkfD72PWnX8R8hLi1UnXQygZhX34EMLfUXML8eJVrC82iyK5kMUKGjwqbkA",
  "key24": "EcuAtmkThaucX5ykD14Qza1znDAL6W1jQnBd9FgeB3kLLgkJvvuByBmS2QMkmziDHbYGWNrvw2vDJ1FQYB1Tbs7",
  "key25": "2gNNWBQzzFYC9bdtDoFwNr8LiVnz6VkNai5TWG4AwiGKweYpEaz7nbfbp1MRHEj6yo4nzvZYiqi8yEtfGQEyQvij",
  "key26": "63uaMm5mHtKepfpECAUNEJDRyM7PjjecB7Y3NuqHYzG7fnaRXn8qdHskdTmmiv42CYGry7XvuGMa6WrXDjMNhoQ7",
  "key27": "5beK39j3AEX3qK4hAWJC4rUDNC95TdtuxTtHF5oCA9aseuC1CDxR31s2kRJDaDLckMVYRExUaLf8vo3y1LV5k9Ru",
  "key28": "3kwPx19SXmdLQG2kYKsXqVew44Nc17cfEDxTkAazymb3Uiu97eb1k66krvDxS3LL1LViifehFVgUmQCcqkV7Z9vH",
  "key29": "2W6UnG21aCahaHKB9YpRBjP8GLfeJ6uYKQpcDkipkCqj5caYCmvied3n29j2Wmynj4bwoNwiWnKFkimKNkKNLivS",
  "key30": "kHojEbiX5oDhMiiUWitibD23ziGydjk2YxjQaThii8PJWhU3v1dYKh3ub7nF65Z3oLYUbzmPnEULSHmQzSM994W",
  "key31": "4vDs3Y8jJagKrHrCxqdYCvGnerbVhJqG9DvBzJZF5fCW69g1GZvwNCktmyJDmYiDApQoQWQPSikXWnZ45qFXqjpB",
  "key32": "4r6uDVhNHx1FT5pinpUGEhoTXa2YU8XyrRqkgjns3qJuLhxUDvARadSZ6Ane32pePK93Z74FBSXmELKBhchg3fus",
  "key33": "9SaPD9d9RRtv1Fk9tWY4DyDaZRpRTszmMwvYMjnMTnioY4GsMzcq7R686swdYLJtEPKVMnko7P9s3r86Mn79W7X",
  "key34": "4cYJvKgWd9pSN8tv6QxwigHpb5VBPpBLBxaKBiTAx1ySAMsGBF3boE2chRbMot5cLaRFZpLvfugkfDTWY3hzaZiP",
  "key35": "3HgAennRG7dDvs3SRUzUjABJzjzvpDZYh6N8mTiwSno7HcKUBdi3RTNa7JzS4x9A58G81mVv1M9gwGfNSVZfbFEW",
  "key36": "5FdtcNfarVegegd1QVRWu67EPi2DqDhn7jb8MEsawMt3kKBHDA4XXYkjD9nYvzzYEDmqK6bPyMXSmVedWiVq4woK",
  "key37": "4V6CMLRzfYWVEy4PUHNiu6SWbdMq7NNC4zFJ9TXfKz7bqFGDcj2XDzXgqFhjMojjJMCL2G78QtLKiFZ5D9xAq8nQ",
  "key38": "3pifooAHC5QdvFrgN5BrRLEUTECbkXAkHaoz9BtbSNs5TY99RNsLm2uYJ5CTzcQBGfsSRHXPY1Avh7V4Y3RuKaw3"
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
