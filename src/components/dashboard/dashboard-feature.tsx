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
    "52KNmNRkHYmPZzrAxHc4aY1dQH7JFCYSSko5MsrVx3A1wJhkX2EGgSHeEK6nNgmu11tHtaLRkrhbZ8tD2YuWxmtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eGKjmyHUzikd8FGm529A81QncigJEjcNveyn5d8wxZJZNnoad8xVK9DSJhRD4AhQqbobohRKrXUFUC8AVgGPnrH",
  "key1": "2qJj2xAZBPr7bpoT8GiZy7Uwzekc3WJpZqSfd2HBTpPTsEh1HRsmyLgZ11kaKnZRZQaaR4Aytc8v3Rga2FJ1HRck",
  "key2": "ZKij8PECLNnSDsNL3MkCqVKTffspM34nmLUyCLUj4rY9MjzKwgz2yHckwthNMBMmJQqsJnUj4KLsWEVraShWpuW",
  "key3": "2HpU4kB1FTSKVTZ5kQik9nP2ZYuvtCxJEhjre28ijp9287H5CebivGXBsPEASGcXbUY9tigBoq3c7CXPpXb1G4qd",
  "key4": "2n12x4QcqG3Q28j9e2eb1M3kmwecevApkm6W7KkA3WFjvTG5781cndc9gES6oQKr7b4PobEZjxxbkXZZHV9CrGPv",
  "key5": "2HLK6ErGdKPFcrJzjs9SWvFt9jHh8pq5hBjWFaNzK2xqksmFhngVuWDywkXTjVXM2ensEyRZZ3PZZytbBmoKCTKT",
  "key6": "5LGwU3rmKFLTuCeNPZbwfmo1KztGS4BEdh7ZQYnNh6NM9wgMw7qYMaufCAfSMqgg3VMRMP1F9BtruVXcRJoHs2NE",
  "key7": "4yCsW7YWtEPzg3ieGtDB2xN8qRYPN37cEyeEwVovx5o2UjoV4dtcFztXmVEGJERvLzn1tMG3hxt1UHfKdaXpgwdV",
  "key8": "5GstzcSzLHqP5gSDaYE5LnpxzUuchzE5hCR2ZV2UdPDRtdh6mdhZpAYfJwsXis34UimrdP5xhxrodJDABboQJ1vc",
  "key9": "38CgXkDk1uEBo4wvLRdcEabEZPHfn23PVJMrE3KEiN4mBGnicBT2TUoxTUKBPjGL5vVDWpNTV8wUSA77WTgCn6v7",
  "key10": "5SvENRC66oGQRkbm6LHo3uaKfYiXc7d5sW3bZ87epsPnVk13hrs6h3M3MHYsoZZ5SrSJ7Fa4JRGQ5ekbE5oeaCLZ",
  "key11": "2EFVUeE7CpLamhQ2ABtp1G57ghj9d97JKn83kBMYrq8msZRorq2K7egqggnyV91Rp4LrwbgtkrRZUsiLKyNoMi3a",
  "key12": "4QETSwoqeNoi4FAPPg9kpMTcRvz61rVGZ5ZoeRAComkYHc53yqeZTM3j4FFuHYHRsbATkGzBmTqCT8FTLsy2V88q",
  "key13": "5nPq1MWcviheMakQLfk71T2sdci2v2Z3dTa3N8jYYFU2RsCzVsQNA5sLmVGLGonNRN6FCBwXJM9a4ABwPTamKCnD",
  "key14": "3rbd773VytCPyD7vqAuAqDh95Cr8eYejz9p3qToT7uNJGQhMPtLhb6aeKS5bzR2TvvtxzCm5rRWAgfACkTAHDg6c",
  "key15": "HnvjDN6Hu2hag4uyFAbAQM1pLH7QvZKdZmUfCpVam5tzKZ7viap4ULG9bTMtgm72BossHAz5iyA928wo2UXUS2T",
  "key16": "28DeQYoi9LTEMXxCEF8M3UiRYiEhcJtYtD3CDEZunSJNGWkgfu9QuK5YL8g43MpLonrgm6gkANbHiye5ysgCN5qh",
  "key17": "EznDP5qDsPMSRyAE88JPJX7oEFkqY2aNJFQrMvf2875f3b4tkAvk9mCuKyXxkZpJjVpEW2oHQn7t3N5213iKw26",
  "key18": "5RA9KgcaGxsEpR1yKMgGRa3oCSYSUK3XVcehkgFZfSyd9D5kLyVh2MpoSxAnBGhAHvFyBeLRcWssYoqx18vQKv34",
  "key19": "DjCQSjqh4Cd8pLFoacADYkjUynmbqHvGXEDQ9DmnAodKvtwWHd41rThdKPwY2ajFsTHnXEeURx7yajh6zQerVBx",
  "key20": "5TpkXUgCkC36UcPwQh9Vh1W4u87tpQZZ6J9uuriAXn2Lg5LoCgteCNnXMQ3fqkW42y2gVx1hKFmKRtiiWcHLrPBH",
  "key21": "4EuN96ro88tfXufUz9XRM2jbKiJtTAr1kCUvbpjD9ETP1FycLDHNbkUBe4vbqh4XGWAepq5NxGwaW2jjixchATTF",
  "key22": "5cmPaHa51nR82vdrGd8xfMm8TNe2SEZG1sfRPemGEQNbw7fCDEDiU8B6JZhCVifDCZQ82d2um2mdF5fMics4U3bG",
  "key23": "B2CAJmcMqZYNSb3tRtBhLBuchXiHmcqtNHA2JodoKP3mHtnT9sV5H7SiHqcy7aKTFaps1SfYnVKkshKsCBp5EAH",
  "key24": "2iNg7UwGiSnV4B2wxkPHSD3kLHnQY6wyWjkvQVoPqLCpQVJv8Sv9uTV2X8cfLTRyrQbAKncCe3iRL1Xsn56wfs4s",
  "key25": "2sFrN3HNh6pq47cKDPrzsocHLsFtQvgd5NhjJEb62QB5tkVekXoabpNd5tHJc3CNPjzX8PY718PY5q21SQFCzd8z",
  "key26": "mwJ53ut6k4HZJPLvmF1y5DDa2D3Pm3nkixPjWbRjGU2maJdi2Rvua3YdH5vr5xjs6wwGs85nUaaHcu4UyNwaq62"
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
