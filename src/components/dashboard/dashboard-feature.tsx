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
    "3YTVtiBhzfwW3osNuvnNMo7H52DnuCJSgramuKt62WSfLmFsdQHhhbjoJJnjqtDy1di8zHW4EGBtqJMjw2g7Mnf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z1nusxEV6fAGvoDcSFysFxMWrbGJFm8GXntJdGuVjeNANeFLtNVQxTJBKBkMQRp3pUbdx4Uqza8qofDXTd4T74h",
  "key1": "H2zBasRpJ6EWREGtk23PW4BFyv3VQ8zdTBQG2HVtz4GK4K3NwpWWNziuqoeJgQfGtg3df7LC2HaY58XLn2HqMY1",
  "key2": "5cA6f3RT6iHVk4xiCXuR1Za29oJeYpk1cBdV2ugBCjeVJaXhdTZnJDs1FviWuoJbdZFmtUoiTSJdpcZ1DXg17qJe",
  "key3": "2tdXAQTwf99HieDrkBXGirXDVTBPaTRUhyfm22vPrsBZtWAzeqnCqMwGhjFexGcATPkwAPeiK24X7kEW2E9TY2jD",
  "key4": "4YipB4V5CKT4xLt1SbnFVzzXzeTw8n5i98noNh1ZCNdUpYXc4TgRQnuu2P1nwKqHwYS8aDvrF2NeDETmUHDe1wzm",
  "key5": "22YFftTcavuk2yZkSek1AtUPsKYP7dVeyDJJUXHNXhvUUZQcAcApkAf7ftXUNSST6hsyu1yHbFiFy86rJeLnNBHC",
  "key6": "3WYbMzdZ6JZc9EaFSXCHzaCeZX8qhCMK3xPJ1NjtMPcBA5wP6KUZWWRKFU1ZTmpJmu2JojTHNPAwukvTuBukkDyz",
  "key7": "3vxEungMtevwqKi7Xp6UZf6VQo7dXTPUwyCGXwxboxBke34LTLudRJC5DB3gmt4NoPg82ZhNRX4rM4PNcKVa7iDg",
  "key8": "D6coMfHoiDWokNrHDEEPgaBKDFRzXZDJccSXuJVaWLByUs3s2m2v3qa6T17ZVYX4MBH9wXg6HuWs6tG44gTSBL3",
  "key9": "3nYfbAycNnPr8qXorVz7uqZZTWTSHjKQ6TnLvbHeFnZpASP1vQMUtFe7GDDBnmUKmGmoms9uFFBkLJvp4A8sWfoE",
  "key10": "5fyEmADRq7tNRqyLoF7uPGTuNniewg3TbDwwbhbBtRCafs37V1NxTbudztuax17ZgQFLi7d9p52xBikmDsDLL7Jr",
  "key11": "2gm3vWqzCyeBMSYZ7SwpLjntimx7T8ZQy9rNAri1ACisAV8ArJrCvy47KctAGzoGHhk1ZgQLGGFEehDtsb1BQLCb",
  "key12": "4kWTP8wMgJ2yBtVrSHN6QHgd8m1EjBW9jpkRsncwaffkH8xYV9h8DUVo2L6Sph8U6pXBh5viqGzuBFBLJ8tkFkFJ",
  "key13": "2Vi2bNig6V8w5GuoPZvuzhNcYrp8gjGfgENZyqDzXHxrKRZvebZc3z5diM5uYiKCVvPHMZuvHSDk12QoCtBoX4up",
  "key14": "46r6BpRz3Ymnx5bpRJ3Gkr5KvwcU1VrFUNG1iEPYrJpzme1DuJCkkWmrvVAppRdA5Hpe6onGVReGPQf9rzP7BNzK",
  "key15": "3iTgWGxuhgJ2tRwSqkXpQk7B9d53VvuAPEJVivvaPLBx9S1PFmiPyWPcgFLZ421NdccVDLHVwENH7JLHvSWdJFAF",
  "key16": "4Qu9aax9Mp5vBfUE8YYNVxKVuhrmsrhe8d7Wrq3ebC4pbeX555KdE97MGokbzSr4kt2hGvvP3BvTgSdgUu5J7U7m",
  "key17": "3Ei1j5aZ1rrtm41weMSmSWk1qyH7jpkk4L64xtZAmfRim9eHRDuDikzpZmznZYVAhfMtd8P16EvsEvJQRkcSKouW",
  "key18": "5AgnpauicT8LcmSTKmzvK7fCmD7zBBDUWsE98otb7cpfZj34acU67DcxaJQJwiz4FuKKomDiYv9UiKupssR8sM33",
  "key19": "4cRJ9xyPCpAr1UrQx19TCEHST3D4Qds68ZqSqJLhWzmvHFvsxjxotVzFsiJ9yWv1mXQHBFACh5mZ6JyRQZHMA55M",
  "key20": "5E82ocdtBAanyX1pqK8RTtKk3DTQS9NeXS3ANfXnEF8UWZJXxC7LWx8bxVHjFnzsnbRsVvL69Vjb7uKUDfYZEEXQ",
  "key21": "haoMaAVGZJBPb3aonaRJx9GaCzbpdBmSqXTagmDxeSAbakxt1ZGpVCCis3q7r7Gqj38Kxu7tbbb3GBqEWtTSGFn",
  "key22": "f8qwJP7MWx3Cg8p1iDZgKxQbK5MepCUrF3iFzUaDwPPfsaEsawJV5QXwtNYRxR8TnAjk3uwjXs7KciGQxHUmnkn",
  "key23": "3A7iwxYwZzNLCWZT8ZM4qRMVTuKJsRrXXrcFKztJ78Z2cwQaYDPCUqvXJanZ3mWfSWdgfcars5uT4JPrSnVL3qnL",
  "key24": "4DqvMFL5YUgboyinNVPKzR9icde9Kygf1bzr3M79tVtJG1KoMSyTZaGcFrRAX5rw3PeYbJWq6GyCXbdt7oNvtobX",
  "key25": "5Fx4eGPTaTARvY7MomnQHxbNFrJSB4ykhuoxoBQEDad2easSP1wWpdyxSA49jvQio8ye2FyoJ2DNzvmZfR5CXr9s",
  "key26": "FZVe6qYfxsr5Zy1dyizEDiCTqYCEVTuU47FNJWxpmeyUeWjwKn4LeCGg5aVXeTxnRnPBRF2uypEEf45YCrWwP61"
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
