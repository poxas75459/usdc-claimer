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
    "3aRcht5vZfxwixHXM1fVfyux752RGJb1HgjDyKnS6Se4pq1B6EjFyzWLvG6MNqRq9TQAu5dHK9gBuP2i5A3rXwH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EnYXgbXPVTcUfihqWnviUzSGyZJoQacneFomwdKVsiZ7VJft3Lq5na77bPayd1GxWSqZttwKQzgqXF8HsEvvTxE",
  "key1": "8EbkA7hSyeBpx1XJYUV3V4foBN4dgWnKBoULF7XGJR8LXzuPtC5naVdHKLa3y46MPZ9tZNB5XyNUbYTrYx6j5Pt",
  "key2": "33So4MxG61YD2qQb8BW7nx4X1bReo1YvWAz5hPhQua5aCdgnM8ZQaPqjq8bv5jWrgTSJCyEchGm9jiF31DHJGp7J",
  "key3": "5mk9Gbc3KZNmLKSJsuyPF3DdBNY2XAcpjndpCT1eGZDrX7ktyzYwZTuHeAuCnZ7JAuzNVKXAar48eRxy6zQYRJUU",
  "key4": "3YbmcB1zG23eJSBKbhirgtbSq4WnweVEsnGLSt6Z51jWit8Q6CAS8jsDP3E5s3seNXugcUrebP8oieGGZCya4GfB",
  "key5": "4vGjL1Fo2P7ot1SJoVScnRAHCGqEwEcVCGT2FkaDPuQ8VTsSzeZG3djQs26gghiUYzgWWqHY26x3ZnRXbf2tMVhV",
  "key6": "463JBSekCwK6q7SDE2Z7MHCxPQwFQGMfdnyLq6oTwYyu6v2AzUx6jZsj4Hq189L6S9znKYJ7qDDruhGreogUG7wJ",
  "key7": "5Gd6c9m7LBCKt9T4sD6zP3ETAqeVxxjtj6knfvcp4aAhEqe3otfLsKcy1TuAf1Ry45jVEqatwB4t95io3oo8DNZ8",
  "key8": "8gW63aYAvgzDcP81R55ngDF2AwEwuWfFyV29mjQfyS1BgkaphF4RT3vWUQuLcEe1ENu5pMMgfy98bJqvqFDa3Wu",
  "key9": "xPRHVxAXKoWUiuGa5HrvCwp51GnTwVGaKxupfbCcyGGXU9ngrP2PDehRx51rZARSkm6CnANwwqwMRc97Wydf1rD",
  "key10": "4yjDkibK7jzpBiiGYrSbE2aHXkFcR5JxohbM42MTwybTcnQyZvD3CozvdcXeWmrUuU8zCjy71oqPCProhMQFbTWG",
  "key11": "5YrFUC41FoHR2f8XUWNhBtCjgKK2gfug7tqQocQryhagzWS8xC4QYV3uprLQKRv6gc9aqroTUKzHPHGDfEtAtNyd",
  "key12": "3vjX96mbeyPteaUTiZDpwrDxWzDbGsh3zEnEmL6iSo2XvBgCd7weU1pgg7pW6ihJnL4RWNwaihJAZ3AMB4XNMmmD",
  "key13": "RbiRaGtebQmPF965A8yag7KwMMHUtH8vrMraUdS2CHSX7orRLGjT8Z5PMeUXQ5stVFPq3p6gzGHnM66ULzMELEj",
  "key14": "5ZdzTAo7HHHhQ4NXaHNJPHV1jjLAVQPAK16HB9aHwvi9dS6c3V4E8Ad7gZW4SsLeXPhcFLRCqkF6bxfuoeUFa9Uv",
  "key15": "4WPdt9Tmajoc5L5QbVJ27hLTWbERuLSZmu6WDHgircfY86Vgv6g1D4d8bZJQzWGfZZbrxXdhwmxdL9kBZjH8MUMg",
  "key16": "3neMgCpxegYiTfeCPhu6GFjYNuLyPjmbgvCVfdWsKTVSetsz6qvw2527A681gndQJ3dfaw4RXfPg4CGXg1XdXR2d",
  "key17": "5sN6BjGLEZMQThWgxpzgFeTmzYQexfVUULZzg2xRUdVL6WzTer21PHm9CQzzUDsbNtZkVcHH1H8CVPo5zpeWkkin",
  "key18": "58bnKWhzji1M3GKwmNja4Z41DKRVtSHc6kWpz3kodkyHCZB9zG5EZTEJjPMY4RzNDsNPUxHoDqkPnstbW82Go2Zd",
  "key19": "4pCbTPipNpc3mznQWN7sRck5c7pArMLJ4ggZp3N6DvPnUhUXxiAaTP7mzhmNAkmGCWw1aeF6UmR9wAQxN9a8QQe9",
  "key20": "32WT3G2vPv63TozxEEhwsRpXN8cWubXSqZbLhj4daVhe1oEWvYW6GwNybxCiPHsfoSK7zHRkvmeAGX6b5vhc6qTo",
  "key21": "4a2BT6yki9k9ok5uBeto74Y7A6oJxBEkzxyFUpfRSkE5HNnotqPmmRP73TMXtnpctgDi1AK9Szf7w6xkkWqg9Q66",
  "key22": "3g82AN7HeGovaNNxsLv8HccgHb1jMFvu2sqKw21aVawK2XCXxYmGn2hXQT655tQh3pAvn4RdPn1HA6q44p8KZCmG",
  "key23": "5PbjoSqniHWxUjs15pmcTLhCjsjCcoPvnFnDvrCEUbymyPFd5t1sSs6ny6tFLeQAJMYJgGH3CUEwVmaeDNaSiFMX",
  "key24": "4AE7eG5xNpxCfCShHNsRSjgecZeonk1ZFktFLwqCpyQca4Zwr3iwW4hnHFSECgxUgriuo8NrEUsUoUQoW1B3A1HF",
  "key25": "3wyMD5iLmQUTPgoEhphjNsNAeW8x6zhbFqECqpoRpc77WTPgrxsyiErCkEUQmPcvtPkwdFtcexEfxYf22nn7DmUT",
  "key26": "5EtbPSZFA6VtCGDeGUSfQ3r9P5S6KpmXYy2xb1vCC55iuxBQxkkHHxu7Rp4oTdZNM6p1K9WwfpYdrp228fz6Ds2h",
  "key27": "mewQKFZFREB4oiQRFKvXKF8DriSvKTLeFhz3ZXKULfAWnNHqTmvprfDBYVPLdtnCsYa2AmstNmZh5o82oDPkw24"
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
