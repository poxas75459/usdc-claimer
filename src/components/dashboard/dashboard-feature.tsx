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
    "5FCMuQoRvU5Vxiq9ZCEs5uxPDYFipD6kC4Jkd3xXyTuff1o4XgfQkrHBBnmovgRyAVa7C4cd9PXKJdabHguQrRDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3vJ6nWeUvoREWC1TqQHA27k4FugnwYMdkPSkisHujM35dN2C42GzzQscpFLatH9JwgaDmLnkHuk8CzApazJjdE",
  "key1": "2jLxsab1w9cncGyc1zD2W3KBCgscSfEqsoGJqqS2gzCRwBy6xNxqMVwX8DY6YcCt4gvSSgdNQw6D8Akpn6BbpXnj",
  "key2": "2FhLZqnLdjpmFUwrP2H8KUKbq2qv7jy88ajpYTWmYGt9dPZaVk7yr5TM7SAyekkXWyCzqc9jXYbJHij44hcZMRcv",
  "key3": "xjv2eEdRSfKCu5dFiJrTUruEEn5FxzdT9H78nHFWJ8cBeQgJhjeoXGq8uDaHaqE7dCwHAYYjPPhM4m5oyYc2uAU",
  "key4": "3q3DB41sUBdfLxPCFDshBSwHJ4zVtnkG53CuiJg2QYY8JeLHTdybZb1qohFpQfraLNufUizUcNS6B1YSFiyrHFhK",
  "key5": "5s79DkM1157trUZpXJ19gytxYRnv9AipHn5DPa6Qz9dKTiJnAaFaiu2ayp5SEq6bZLsvPE5Czhnpqg3f6UnJPYR2",
  "key6": "2aJEvLymBBn8maCm3LBbq8mvyqevoAVQSYz77JpAcpkZW5SGbt2DfURzNu83qTrW6cqk7nUprxGYjBGDg7MuThD3",
  "key7": "L5yABnjEhq1WWhoq6f9ExfB1QEk8F4qGaKLXsLYoJmdXUQmif2YVTuqrrUm7E1QB4HAjXiDRDmEV8LcZm2sBkPy",
  "key8": "eD4gB6KvEhJPaTTs67JFBu8AjCgMQULvd8MiSV7PHX6VpcRfF6Q4JQZqa73dVH3Y4sWhNx7aMvonPCKifTS7g7M",
  "key9": "2TkhDofGLe7ek2Y13zDwoeb5UtbpysuxPhtBbc9Au4ptsYA1mkkf7WQWWKMQ8tffJvrTZEJ9uHM9sYUEvRpYQwhn",
  "key10": "4LXwepVSdyZjduFF8wihoHbcdUhPokrz2qtQQEZGeR4etZ67D6B4nvVpnQBtNVWKUGsQu9GyfVn94MB5mXS9oDfy",
  "key11": "38BcBkfwCmYyrpLbppmbgh5SuwghujJormVpZrQFBsMu9c5SyNEYf5bNZmACVVzScSvGTDy8ERVoN5FWPCuJCaqS",
  "key12": "46XHq7R1utruGiNc9SqeQN4tkbaHXu92Ys8K29BrQR9UutoAdaWXPFTwbWAoTFqShiT23kctjy2rPKPjdFGaEtPf",
  "key13": "2STJdGaTgqVc8jLpgLst3biCf38WtipPfpTdSJ156n5MddekiqpfdSptW4BCTQCZAfdUd5vTWp72GMGuQXcZjL8f",
  "key14": "3xHTpCDBwggWuBDBYwTu2ggWHQVqArCJXS8sxDEctLzykyxUc2GhCEzLKPu2NqqW2UhoEQ1X95Jv84rD9spBSygF",
  "key15": "5HvANSv2qLpkAvUfg3MdiwZkbkzx4pAPhj9koNr3PooixW89PscfHUQpeP5DmXAbcc8Gdk6zibVh25B5pkUuN19g",
  "key16": "5LL83AZVTfua5wvXN48Ab4LzrymcKCMzwnyZh8jDJ1cqx1K6Qvwkr9ZHKewQyN7eTKDMXzqLHwg4AsasFEcvVFrx",
  "key17": "5ZtobtHo8WdZPFVDE5jNEKUkRgADkunUac9xrieR9W27hLsaCHzNeP2waeDKRHVkXDmM4AMvw1CyRULPRFDTMqhF",
  "key18": "4JrJX1k9LzPiLfRtaAp6yHznGt78cnNjQNvEWUzk6hsUZt5Bsd29gm79hnb2QKFQJ74UcWHNFY6mrrGgqN8R8Fib",
  "key19": "2pQzG77nA8XLoDTZXZKjeZqn6jG2n1wC6NEXSmJbn61nrHCy2BGcJv3Qjoh58HbQMfRYRGqm5jeG41Ddub2T9A7r",
  "key20": "2jXdrzDr8YnH5jDfFPS7W8i2MLQUfHM2FZB8k3uB8W7N8FgDcfASCdkGA3SumaarWhucxRqHSwrGuF4Q9YtVmJwJ",
  "key21": "2ZFfwEgsC6MPfReSCc1kLFDQVr9hnEh2HK6tKhyzJfaGJTAPxpanbeCUrQk2G1pUQDuAXKoeuiKqL6SoEhApHUF9",
  "key22": "48gBPJ7xNSfnV7sUWwJZ1NZYcMqm1494HTTj1jLeA9obZCGUhGDZiuV5cxaciRuq45yvrdyXfLWh8xso5o11PRx1",
  "key23": "DD1ecPHA95MkJcDeyg7edSuEuEfZKKbRdWBJj91Ytof2z4oaFWxDkTyRMLvdtyxUGbeexE2HcZvDbQzbVM2dsY9",
  "key24": "5MM97hs6CVydZbmCGGG1oQtuV4SANmwQ2ytiMrJjijvHxW591iVi42AUedYMdZDUbKDviEc5o8iZuawYAJwUGNXb",
  "key25": "3dtrBQ54uxUNTRKXUYnsVprqxk1SJLAqCsjdzVF1QNpL5VCQMnfetrZ1a555HL9VvcUYEDiAAoDzD7x3EjUQ6Q3h",
  "key26": "4BKjuTuf7s53BxDDswYQY2ocXpePhjvcUuDo444SX7V983vkywLcyrKQ1cAMDSuCYQ95WTA1Wdy4XqVWhH9h7DGu",
  "key27": "5wEnEw31RW1ZyRXqRTcEEtepJou9USUWrn899xjBNqiybvzbjaRRtSacBERb83TReECz6dy76R8QJNJCqnjBVuwR",
  "key28": "44fpkFDUJERo5K2cKNmXK3A4LKXcEcste3ZcEamJpsqBsKNet8fJKwGj7ng3UXaFT5ch3AV723ggK7GNcebVmsZs",
  "key29": "5KmzCd1K2EmQSZRFSz8s7fJspC4FfmBT1vA7kt5pnpV3Jw64ERHy8FsmGVnZ8rAEPiKYcN8Nrghyaks7oo1MqoyL",
  "key30": "CcFoGquNJhR6NXbP8ZjbyB3Cn5YawvSkbtQ8ZJ7BoBbg1U62oJHSvWU9Axb8Y8HRaH3ZsBvH5CU3iDiqgajXUtv",
  "key31": "3pgEeDaiKbPFh3NajxkjNK2UZrZXKPVCCkPRJ624io99KzkjLXL21w47Jrw4d1mF5T2dEVFAjH9YLG8WypwdvafE"
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
