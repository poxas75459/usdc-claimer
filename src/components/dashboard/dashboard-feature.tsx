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
    "5DK2YNHUCrLPBGuWsTZVkbQKkpV6rKuTtQSnkjRFx8ftLTznvarthLGy3HDWuQp7rRsnnwHaTN87Vxx1k939PaB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LuqXBsSnMcyH1nEcWU8Pniv9vczk4dpzwSLim7CendgP2WUV2v38vLPbTTJKLDsJV466j7KHiLpZuTdGi7otWrT",
  "key1": "46DNGZC1A4qivKN6KpmUoQ2CdJP46HHwTiAHvMTdKxm4waqVuYA4ZLnEk7xvAd3d6q26JDuEgDzCtPWFCXzBqgu2",
  "key2": "DdrBN4Zbem2CKxEequLz276svE9LbyTZMAhFrpbktehbYbasa6zNN3fMTh6MRSeeAKckJ76gDPNhEUm7d82Q5pe",
  "key3": "361yaNvmW5r9iqSy7StpY4zMpSaUQ1DUVviqiih8vt1MrRbB3qy7x2ag5YzNSdshxnpKvMbuVrApKPC1zSHUuWry",
  "key4": "Bt4snPTFq64nPoa39UZ8oGWnNzS4H5X7putGToU5Gh1AccdNbdzP7pma75bfsF5JXb78nDuV4UzxPpYfrgTXPTF",
  "key5": "5SpUnJoh7m48QSTgbun499of77t1ydEEAtACQNRrwz4mGKZcKNXvJWNX837S74jbMgabmxrik2ZruTLBkxpha6oF",
  "key6": "2NzVyfZoBid44DMHFQijsCRGACcJRqeUiH9cM8DWtfSLb2oZzwRV4hmNgSpFtGRJvoFzKCiCquAm2DEqf2gEWxZM",
  "key7": "3bsMsoFe3qrxEqvYeQ87U3cpNkrrVycMCaQLwhnX2DeDxVpGWvWbeWhRxeYCkh3jPWms6WCdpCNdUfbwBjXrEDgp",
  "key8": "59jxEuwaXvMc9FpHtguCQUugtyZmuKsVQ5ME4YWnpCYqW77AdtqcSA8tszFjWeR8FLePTUahn5FxPJfBEUxi5Fzo",
  "key9": "4StqKcZwuT7ss6uVNkpdW35GnEyovudUW8ozqECvKTxpvmiy3ihqCwbvBXX1pGZkHcfNQp3UkmS8oRsF1JyLodke",
  "key10": "325KRq8HiSnbfVZqLrhYK3JKNdexcjd3fbchFcxcgBSYGjEXbUM3gKQ3Y6p8SRA9vjf4rV3LLs2b3Fxa2YRXo1Af",
  "key11": "3zHKWUTtFmQGvBNeKQSkt4GY5yXfnqnbm7dr1VPzYkM8w5gYJyMGyKotrUk2BbSGuY2dMHipjCo8R9t1Fxt1Eequ",
  "key12": "5fi9FwJg1Wb8hVhwsduEY1z9v7FynBnnfxStgY9nzq8r9RRDbWM9cWQXhkRpQ4B38qhjqC4CXaghAQoxZ22XQAjR",
  "key13": "59FqHLcNFLA4bFGFvPYZqzM6GGoxB87kGZbVYdxN8jUyruunhJuDJiM9efiDAmmE7th5YxyndDewdoB2b2sLd1HW",
  "key14": "2q8PBUXQRiGfyu3MgdHU3WUZ995GGuLJwqb7t9fuy3Av6ZALnPJaYhMYBg1HiKnHZqaP6dXqXZ6NavPYxLhiVNmL",
  "key15": "2eZgveCc9mtMCUb9Vjv3tWCHefC1zHzite5EGsomiturWTbuYatGWNtT7bAgyhjsY5zTQWY3Hq7m7bETMQjHcvzX",
  "key16": "cpMJtEAmTxLP8ZFECHK9tWWBU8TuJXdTzeHozuDt9fcAN5khwC1C16fm3etbmNpyPWwk3YPzBnD89Q6GGyARCBH",
  "key17": "59AtXdwSvve4z5bQ9NddjzTNa4nvYkNbmkx2sLnaiarfpnidbZfRzViWekdiqR6oRye3k4ZL762CFfLjuXidvosR",
  "key18": "9SAMr1w6Zz9HLG9NrbXnsyjSUBrr6cceMP4vFWhhJM9vcBrsuFLe6jr4rp9Wv2yYeGNFH7A7F21ML6SmSEo15Pv",
  "key19": "5ZHFQLTp69SW5xn1HyUpjBSKSbpeX7WVcwPrmpAURfd4GcgqnnSee7XXXc5hNvkUPXotgHhbVdhhfgmkekDwpa21",
  "key20": "2j9QJCyYQ3uVeaxmXz1bcHeXMzLwNzaYvJm3dz8oc5gCBZsem7s57N8Znr7RwSEikaP5YuXQLJ7wwgEWFHG4ijCY",
  "key21": "3hNW7WNJXcB2tTbprdNqmFxMXeQrBq7Lg1wnE4AhcVDT7NxpAsBm5nnnY4CF5kWNntjkBRpXGmE8Q6VDn8xA3oCi",
  "key22": "67YPwRgiaCk3S7CH9vzwtFuoLDQ4Nt5bmp6dpSCEkbv7UR9sQNEfaPNJsnKHfqz4zW4fWm3k1NodiX24n9qiyqyf",
  "key23": "5R1SFhb5C1WxQrsLQ7BQ1LVSqW9fevRQPoGmYRBUfW78W1mPcpvfhHMe8jXNzyHJEQYAA6bV17GP8h3zxDH4wTnN",
  "key24": "48VGk9cC52sENi2hbK9HSkVZH865x8kWZZW17iQ1W4VkMVh8Zy7xV8kXRkdNBsn8Q2u7jQgCUs11GGwLwfpg1bvC",
  "key25": "jcFS8u27yLhTaVY4hoNzJLnQgw5WhsSauQyzKCjep3ShrG7Dt561ecUoxUaHwWksdC5jj8zhYzdeJwa15PeKreF",
  "key26": "48TXm4RBvnPVBtgji1ArbwYBvsRMEaBZf2pBTzbYZCrGt4nPRUucHdHZJq9X1qj7xru1UxFQtwzjn4nYaDBeCt8a",
  "key27": "kc3SmLZMoZL7eYK5pPLPH2ddekLCCDRzH8WfBHjiypTYXnaYMwQxtGH4CkJZfSMKYUk5NFNUH8nKoYgkopUJDc3",
  "key28": "4qMMj3giMNSJuHoJ7B8nqyKaaAuDeu6MLgNjZC81As7cbUoau4gNnX2bv5Z4rRvnztdRVVUB2w23v7SfkqLQnd7H",
  "key29": "3LJXFe8J54ru4bTh8mBMFzzWDSBFkM87rqx5HESpB7FTnqp8TwAVfrePjyega6GyydGtro4XfcL3SJB29G2CEMyf",
  "key30": "6CKHAKDLuVEFyjptnRT4AM5HNd9LQs1ErSfmuZZCGpLPYJE6QWtSh5REBCv94os4gwXHJMQ9JZaGgg5aRCPm7Sk",
  "key31": "3ZqjgareekEf6CtsRtxT4o7RiZjX5bWiomyYuhw4MoPv3ycij4wQ1AsvjH5y1VDyYyLFEvkPCsX7AVeAotm7ywKx",
  "key32": "4o18rZ1TWg6mn2KHMz59AFrPvgNrzbqXXmVcuGdauTJA6atChXyTqt6rhnMi4umeQepYnexGWLZA1fYzU41vZVBE",
  "key33": "3JSfXnst4zS47ZkCNFv4Qkfmx1WydRT2anWnkYUpd9NUVsBx3jRzwUmQXuXiQNsRSB4jx5LsbC7GBJCnggSRweAZ"
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
