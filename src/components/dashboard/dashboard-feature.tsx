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
    "4oj2aZaetBLkW4YTP1gA2Kr26PCgo16pqjsFvknBa5Bbgjpfx1VJFh19AeN7EDbKU2JNBFP44GBSHXNAaQwyecx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TarT96xsGqnJcaGBN7B6VzXdiMZiXSfoD6qSL7iL862kWv8WDKAhm3AMg43Ef8ikrZh9X1xKfGPfTaAfQLQe3B2",
  "key1": "3ofP25WrM9NUs68d3bta4fLo5WyMLjq6mdSeqSFT3x2HPCGcGUpbaKkkSF5jVKZooQk6BeirbCqqFHy9RNa4LBno",
  "key2": "dA4GEPa9hVm9riLfKoayuqdgvNG3aNkebtXbQiCAAfyS4MTbavwEop2Urx45MYGCnB3AcRGK376Fk7FxSUJWkTB",
  "key3": "Yo2Xjxg6p6KgwDu1WdXL51kunjta58pP9G88NHAtR7zCPaEaFUit9Y8U76GWjpapndiusmqgAFWrdRQaW2D1eb9",
  "key4": "4b9ZDSG2VR3pWvW1deJXicZsd82SmHyMBisikQGbwqdFyxRxUv7yFzzJfHvLRK24B3umhRj52LzkAnuQXxraYLsj",
  "key5": "2dL8DwMYLdFCStw1RCsg1WW6DLGU9ubRZDhGeXWAnH18jLSgjbt1QANyRqTw77Y8TL3DzPCrZuDR2UHHeq71Apx4",
  "key6": "2RFq6yGepuXUgjUtrzRboxJGsN88ozje2MBrw3msw4JYmdzjQkDrSTUJeZtPk2gA1X9Xo4bNaKoJMGmiiZFr8V7a",
  "key7": "2L3JKPEXmF3TTXajdwX3z6hLnccSd7Kt8V7fVinx99gdyfKbAUZbb9yNPdZRRXasBsipieywagnmtDPpbkKB8K2K",
  "key8": "5VXD86yDKSuXU5wo48Egg18MwvriLA7PJhUnP3DvvM7iM7D1onuVqfXjwHmUT9Z1ZU6mhcL1NUdTvhJkxYKSVWxJ",
  "key9": "5SgixFr7gwVJNUqLzYW2i3dyu81PtQ9X43JuJfDseDMDekz7NvHcz5db9opuinBktpiRXndvdQt9JUVX7bj3nbKs",
  "key10": "2LjorLDQwsDFWFCFkyBbGHRuPvZCVUZ4mLgiS1gFzy66Lk5RjJtzBEn3mrurZbZziuyjpuPp2DXadxohCbp9KUWj",
  "key11": "2VkzVUC9ohvgxLxQTvJCGYsGRHxhadaJMQSMPU7RqJKv6Lf2XsLkXpnrgeNCuvA24ANdqyBgAdehURtrZoiKAvfB",
  "key12": "2vmvEQnTGzfP7GULGX2EW8dwdyrK9xNwoyKECPcZffJEMYrUAo2p6Z8j2eKb8s4sQcMeirHwwv7tMNknMWigUMxt",
  "key13": "M1GxttCxfZV3paEQHwv6J4sZsQ7EcVYdeEGrC6rMoUfsgZ9zV2opuBzWzGJDkXPDbLeeiSwAsn8YeoEMUUYbPN9",
  "key14": "3oEWXg9fEmNWavTgmkpbCF9BXztSDSE4iRT6Mjv91YZP61AjVfLuxkRs6TFkfjSa1qFhjpyKPhP4YEdU2XZiNGQp",
  "key15": "n1DaBFkec2G5DWZbF943iCRiSEYASeYyiBMLJtEtp5AV1oswpMdEdPk5JmXoqpSXWsboXuD1tB5ow5Xa9VeJxQv",
  "key16": "5MjU7qyzV6fRuDzUg2nTaVoxR1dkM2Y54Hyapz4Ew3PTCHf2moyjBaZhMB7KpYvZKv6KBbCUJhqCtm4ErSGz6wJV",
  "key17": "3niQsdG4gPHTk5j8bRvFbw4kXintn7ff9wXFfWG2BGziYUhn9YQkUDDB5RDP6zvc1tK118Kcp1PRq3HNfBGEFf8i",
  "key18": "sTtBNzgGBsVQ44xCAzdDbnApKgPCsUVKaCBcfUaQ2qjPgEwc7UdgHpjqyeyxmzvQkYpNtUVBxGvjgEbQUYUcR9z",
  "key19": "3x2nocqM6g7HKC3yMM876okoBrYd4rq54gY2JFyJiMMtygTUR3xC2LjmttGquzGDx2zzFRywB6SEGhYjTrAfgdF6",
  "key20": "22t6pzayebtS2r337p3TuiJCdwFaMfGGwTwFuWo93wm5uqTCXBVumx21DArtiQFQ11Hh2KkRyYG2ApNNTD21D1pb",
  "key21": "34VTx7erhwvucSWzozTFEtBtxwnfPhUS93unVTtMTQPvhdh5n6wvkMLiAHCGa6zaMQCH33awFk1gnpboBETGXTrj",
  "key22": "5Rcwk24t6qBBeL7AhSdY7zdvx7FzVih9KyefFWCnU32KZCXU8dzNUy1ddtHBmAFRKuXDBJuAZ67LSmaxAvhEni4c",
  "key23": "XNVgAFTyMDP5aTn4YSnKhnTykUqHSqVpjG6PoebLkqVLGHLrhkFWc9uEvim41kaTSr3NBJgH2UypbMhY2e4mwrY",
  "key24": "hrde7bj8pSytgxGRhUh6Y4uooPiWRy3YzDUMLdTu6XoKLe3so1QQjM1JMeeVtZbYnPbVtGH9ttxhekEQJbo9nzk",
  "key25": "3Edj1LgpgNPUYDWwsP8ZegHu4nZSGxWZ91mho2NFKByRPKoN2zrFVBnBo8ntAjeD8dHr8aD3uqpsrYE5bfMSmj1k",
  "key26": "4wE1TuXWmhwJ3cfhfvLwHDMyquBUVfQroaqLLUcqAQAT7dqjaTsPnki5PD9Qwgo7cuaD1Eyezx8Fdu41kpamsejW",
  "key27": "2FkLhr4E1V5HPDr2whLC1QdADYaCZsxCGhCjf7DdkpNQkhXoi3CypUVSS1baRyeJ5KEbtSE74SaWF5pF5Fddg4Qy",
  "key28": "5o2Lv9k7KoU7zQSWsu6zuJJdWBDaSARZWdzracMWMRp47eYk4i8ndoe6u29uQSULcPD2XcNfFvNNpD9cQvUXfpRe",
  "key29": "QjzAtnWdQTRZWoAni7cgGSt5vzgBK83EykAZMHZTtskCFn9ASYaV17MFA42kvDJeZGgzVnWpBuYwAph3nt8qUxa",
  "key30": "2Uvnyva5sWeVBmZ1iYUWzCtudwuipEgcr4hEVYaJUtKjy7Px8Y6WZrzt8YgAWMVFJ2Qufqvi5LFEkHL23F2VxMxa"
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
