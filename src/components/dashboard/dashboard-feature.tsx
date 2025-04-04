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
    "376GfhbSScQFc41aJj6GLZEjUtrG7vE79eV69v2TTPjK2BpWzufob8vrC3oyFsmJBHPwM5ZAQ1xUDFeUVcaLKvWR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4uy6GWwS1umaf8SwZd9UjbAZF5AjnUdrH45ioqHJeePNY3PMQWQrHWHeZcRNhGqaRHKJeS1q4aCBzXc2Vys4vg",
  "key1": "2pAEtQ8Pg3NyTZ7PdJgojkmTS3rH15K8H1t46e7jixB6mrJJ69yCMgxoQ26goz3KncH5vttFMrYwvcFccZh4Mud8",
  "key2": "4NTitPKJDmevDsvZw9B3QYQaRPmfmbiqi8oyCBTnuEhM65EW65nhRPgtbZCTxYNAq9VEymh8cHvCwCbGGd99gGEK",
  "key3": "5eMm7tpXup5p2pU16Z3M9uMZqHYLHcrjGZZeCRNS9tQ3paFnr6rabff372xAimoV6iwAUmr45C5wFHy5fkMTMv1L",
  "key4": "iUH9Tq33Hif1yC9jwKac7633qRa7GNpJBLYzc4CTffmup2PewLEd5JuWgxtK4nSZhD77v2Mqr51BiZnm82N3ifa",
  "key5": "3x7LpTvaj5ywhgN4YrnnLGw2UBitnWV9MPkeGpJX9qHvgiWZHEYGSeEBfYSkHyT45NPMBns9UGCyAoqZLaxU8MP9",
  "key6": "3oSrrkD41FsweE8zoGMJ4YBmjaqVr3Htrn2Ukh6imq7w23fohPP447xeW1YK7QEHqdHdaApAm6At7NL9D2aWKZS1",
  "key7": "mJYF1H6LehZrxpP28sh2CnoqJ9QTCH5jGFH8LeLJqZxebDNENQjAAngmFySDXEb4THtu63ap7hNMmAiFkURCiY2",
  "key8": "5135aPjunAaan8WHiRnNn22xtVUCZsVHT5nNVfgKEMSeFm4NT5dFzwKFuLofpPPCR6f98LUfEtfJ3wHJykpp4hBi",
  "key9": "36EhGrfKGkRkCv1Qx222KbXF6Jry6JamxMuNWPKF3WDMYeagq6oSqtLJ8G4jT15U9A2TZPLwrYxH62EfsCfVZTNR",
  "key10": "26nKWj7kLiAz4pcgSRjuZcwP2uaY2RqCaxpMLioJkeL7vRCgvEYJoXDm2wn9m8MHNJrK9tQknX1Pdc6oUrEPMuTP",
  "key11": "kFbVpgyr4F5JCTh8tm6dsC7B3AQMoynavCz3AC4tWZF58BCbEvXUhxi7FqCC495qwuEVQeuKxo35WWh1ji41zes",
  "key12": "2wsmeKe9szHz3AGgrh4LDn3ds7ypZhrEUPKEReWsBkQLG8CKFKMLPWX35yNTJ2zCfR8gRfBdbxLZhC5qvVf6LpLz",
  "key13": "3Rb6Njys5BiGEHAKMS9JW1zPurf9x7mncXyWC6gDwQvHwQzaatnGeKgCjbax6bUfRtpMSvqaju2M7wUhJX15GeGy",
  "key14": "5JxESya6TCGrAoEkAfEUsPW8FwT7Gur94CWeoAuXYcCVeKWuacBzNhsP4HJnWWDvcjyNJKNi7JZ66SzPFJuLovpi",
  "key15": "3u9vBgahWFnWD7A1J27MNGy38vfeVGKesvQSrEErztaLrFzMbVtMWBfyh3pD5XicVZgVKpH3xdAQeAcCkTCex6rw",
  "key16": "4XmLktgarLJu32AMCAVQBzoDfhQTsAiWNbFDKdTzGE88imgSrhTmnAJacJaS889HmXQxJzb26rix743wCoUWETyo",
  "key17": "3FjzM9KzUoH7c9St2bUhU9TzqoNm8NAEhyEvm7mvxyUMYRJtkN4J8EtFfBPGn5HYM3h9eJtXEjmGp3aPvHTooWSj",
  "key18": "29WFKdqWfXMaLhNw6U9ZD6dGyZjzy8HZAn9gT53LjXnnfoHwprB1zRoa575AtwvQsGco4eCpH9mHDJPcP3dPGUVN",
  "key19": "4skgn31B1BSEN9Fy2tAXh6iwkMMZthux7FT4f1F241rzYSTMQbLdGSAH6EwEXdPFc69dsdNSFdK3nMnPr1JN4sjQ",
  "key20": "H9c1Mbebcsgr2tMicN8uaE8bfMWuoQdcLUXSteNUmnruSHVe3QFu4cEP2mdanrCZSnUTK2wte79jTgThueqY7v5",
  "key21": "2aUdgqCQ2BF9t6nxKJ6yhqB8hVF3XtzQF3z5NVpEpjuSK8cPZuUhxSq7qjmk5x7ry8ssdBtorJLDGeWbvY7S2CtG",
  "key22": "2NyXLALqkFyMgYH3QtSYqN3Q4JiNLFb5xEnXwvWBRcbGHQ3Qe5NKjyXUBufuqJcsYHuyKxVo1m6Fk44RJb5RoAhZ",
  "key23": "5sDDFPzEdYqAK1mn3JpQYJDZ5vdD2Jk9cyoGzsdUXsgei7DchrfxbZxEfL5HgrFX5rsC1xVxPUQTnAscJGdW4trv",
  "key24": "2Y1WF3m9zf8imWUX5hsvSqtmw85wSDRYxRF3QzdXLw7pyVJcJdabYGjtaE8RGhVzts63qpkrwSohJynQqWxqREcL",
  "key25": "4wQRiRC92mfiB6ksRVGfNmRVwvTe3uhc5hn3a4B9HKefwb5mP2xAhjENWYQuAzh1U62XXYhHL5RcyZTjErKPcrwT"
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
