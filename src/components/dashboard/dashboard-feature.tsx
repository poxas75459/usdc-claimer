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
    "3XAzuGGg72VErnPZYcQfRjbXkR46F5vETpE8TJoV1LbSwtsrYhu8Wigog16kMdv7ZZ6GqykMfxJKzdBHm6tucNyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qr5aaGzfQBehYRGthv4xpnAZB9rjsgiEyt9oYAqEf87CLSg8774T5RXoKXB8qcN7R4xKrTXX5tSZ24XtJQbnSbp",
  "key1": "3hHNoPyrRPGXCbrtLjkoe1WtSr42DfRsCfEShMmwBTQnYpQLsqwQnamKefh9oA9sDjBorajRWhBesAqqnoboVx3N",
  "key2": "3k3oXimoLBAmZG5cQTsVUMpotGUNTheLtsYPe89xdv1FQtbP3QeQgTLhRUB8qXkFJfiH1MPcmTvHwRa2m7ZCPNpQ",
  "key3": "5mBW8RuWBXzp5x5aPibFZyq1Fs7qHVLc58uowawQKbxe3h6KypMxn15Ewy1zkCMV1MJEhjUQcReqf6WEV5vm3byT",
  "key4": "3rsicLySHM6Bhu1CVpV8r6h9htVHRigQhaj2PhciUjngknRZJoUrZben9efqNPQ7dGBbmahBMmECgixdbYKa6PWA",
  "key5": "5NHV9dcsKNFghL91mZps18k8hxMzczs932oqeVqgSyQcfWndkSs13x8tapc3KRAoimPbQQwhptDQBUrBPFXRTRPF",
  "key6": "2MJa8UCrKhJHSrd23Nmy783S2yBWkMQqTaeMNSRJDTFWj2KEqpu5Y9WawrfjRu2cVEPjPY1aFCizqRYv8zfRLbmq",
  "key7": "4bhSydXRF9FqJ2sqiJMNHhvumi8BoQoRdqJoTCDYyL5wdcSdeXxzLsUx9vgpLEXr3HQpb8PJAX76u5fEpU4niFXF",
  "key8": "4hqYT7b27dQ7mkEycxYfoE23qsymQHQkaVhHpbuM6uwK8CZbD24Mvc7xi4zRHF9RahEVNsQGRmFQopDgy7jTLxLK",
  "key9": "3VBYDVZnc7uXNg59bLgYwvgg31qyvQc9quh6XbPyhPSJGrquYJvy8twdnzywRRfX6GtcwQMDjUVMJy3xJQ6T6ETc",
  "key10": "4eXhh2XApSqrCcz5UxjmdvDoiLxpqQ1gLAeAuESSPdXAoPu1WZqh1TnRLSGgA4RTVHvbiChZwMWqeioNLf9QXq6G",
  "key11": "4iaQABG2Js8KDib1vvUMnAH7Aq9VKUs25g9GyoVvtqbiCV6qgfyxnWk9x9K1nB8q41Jf3pYLyBp2c3Nn1PpFNRuE",
  "key12": "4EGqb1Dip4NCgYd2UcUJVjKxyXgieZ2aHqbwu2oE1ozv6s4Kd6zthCHCtvCgB58VUhseBV3TCZp1nDWub6Y2fB2R",
  "key13": "HPc1iVtpznPg568ZCDKyMAcMKgrEbmmrJTyCYnamnE71yFUCzh4dwRMWKJGbk9UqVhEgQ4U4TRKujwiMfLnfVqo",
  "key14": "5ccckAknFqJvKrqU48kzwtKKNWL4eZBEUv6sU4xf2MxSesebURhNDQS6itnXse5t4UjPfs6Vvw7wUbeJaBQsfdbc",
  "key15": "4oTJy5EetHeyBgzEhDGKxjnkPsW9rp5RrpgbLEKGYs69KCu75XG4xhd1x5Agu3WzEw84cvUQp5HjYkhdgyDK9h27",
  "key16": "2m2M3hyKMTYeqxhSZbsYvBmf58XLd9YDRp7c28MVZv7JhwKQibFDMfRyP18thDFVstqGTkmUYLP7wUskFUoXf972",
  "key17": "4qW5jPbRfCSixr2R88aJMwFRoGjEkCoyCqPHaDjkZBN4ogG1iRTvvTvSypCNDLGjeJucazhK5ohUyr1S2zjjKn6v",
  "key18": "39uWHqpYmaU69U9zoAhzESp9Soy2Gzj9FBdV5ER6ph2xpRenmXYWxrNPZBapYXdPnE4sgAzJRjtR1dSV4VBQwY1b",
  "key19": "2ZzXigS6wZS8ZxYAGC7RHarGerrPvAXXG1DzoPW2X8n9W7hsNcHigUzqXmQdGmpPE9ZYABuXrGou1JTeqXu9qKDh",
  "key20": "3XzA1NVTcgw2He8nZsUkGvKKsaTpr7HmxJNZXp8PNXkF5xgvYaUw7BZqHwJfjhotPzaEvxr8uxZvGkK5Lzzvri5M",
  "key21": "3Ln5Ri6gKYa9HPzqDMkPa3fHwqMuuJ2UD5cTagXXiXjWuHPDgt14va7U6ZUgywehY59w317fx8SJDn3fq1tc56b5",
  "key22": "2N1nhuAaBhTKU6BDGts6oqYrzTYqzfNv7izwarmfBHonH8JCq5Rc5PYf1gx8xBdpF1gppDfQjbDzNaaMhVgiNPd6",
  "key23": "53dekYm2QfiwC83QV1j2hjogKy6vfEEoAqZAMBn93wyHcd3TnHCRiHU1bSQhSw9Fj3cDTNEaogrMDoRP9YpBmR2H",
  "key24": "q45fLgBiJXSn7Jg2ryhL7cFSwSgdmXYN4SFnocA7qqHcDbqWJSeDB2dBNYZajKKyEDDxaZRxqEUPXrSsYJFdmKU",
  "key25": "2ZZaSS6woB4eoNyrVwLeZFM8725m24xarhZvuKifss4ah1tFb98ZsViLyU69KDDsbtXsxaLUs6XswBFFM1goMmsL"
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
