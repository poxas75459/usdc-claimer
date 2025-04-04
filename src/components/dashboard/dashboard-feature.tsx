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
    "3Mch5mZVc8e5LeVNKXi8RPjqMtqU7gW5LECoSVCqhrJWb3LmZwGRSbwyj8C1yVhP4yMaxkcPGBGxBYHZU4nSRAGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xSt3q4caRouwZg7d2c8pYDiHzY6swc5gwr1TAvDRHAEhumGX2g7mkNG1ufx8HC61bKfW3ZLXHPLGU9X5qzvbTkU",
  "key1": "4Mn2arfYxoZKEKpD3fMg74UMkxPvXTRx53fHjyyezyCHRCnqJLwsnCct9z6WRu5GHKCurwZMttTaphi118PmxqpJ",
  "key2": "4X1HMiba4g7VAGLEi6sQVXRsgUcsPfrvbFUPfVxdDeToWitkKT4QGyhS3FdX58ThYaYCFCd36GMNVnwf3XddJtTG",
  "key3": "3i4USPG9acknaHiA19KKfcxePsb7vMUJefztFN1VbdNTC8MYYuCMLJfeQtRy1FLJjtG8DMCrZgAPbQPE2K9vVy8D",
  "key4": "4gEgt2T9DvDbYBctDARkGPa3w3dxojgMA5V2VwtpSesksmPkEtRFx65KUBxrABGAqLW8ETbRWMgx15zrSkUkQF37",
  "key5": "2xD4rLbeSwYBjxy9d1YcXiUJJoCF9RNkxQMkJ4wykoCTiDXmETMwGR3CxK3ju5egmx7UeEDvsVvQY4VtLaHjkGkZ",
  "key6": "4obqUkG61EViM2p8KuB25J22arhfgtf433zRvo2mCNnEr3mUuEBN6V7N1d2iNAwd7P7xs9norG3WbXiPmvsFriwq",
  "key7": "4cy5GCNrwMsdoKkwh3hXJT8agjArdX5zcEbSaPdzcfuAm1UJJhtR2mwKb9KUhu8VeuEbCGsYQdAWT6SC1EGAZT45",
  "key8": "5kYvMYRDRbPGrgkmmBeiBn1zGseNAiG6YcVhV9mCvNh2UvZwZxE5yTVM2SsjEBshvB6gmNELRCbo2usZVzciRUEZ",
  "key9": "5FgjZfdLoFBg6RshVo8hM8c1i4EGRf8Dh3phNSyn8RJLYzYfcwJgdeM9fGQhHqaPRrnKv9pdEF3LFKGkEX65DkYG",
  "key10": "47zAFPNsUTx5YGmFyURH1dSPXVog5gULCExKVtiVD1rHwu6PKTMXB6rH2Tg6YbSW3DZasMxc6eLfFEnTdpogRRFB",
  "key11": "4d8w3u5TbrDa5bUzRHup3yRTcsBQgt9xaPzgwfD8jhKKGRLztDsZrK2W3WMHFmzJx1sPdYbQCqm14qx6BWic3sTW",
  "key12": "2rWwRwqNKUhqbeSbyuRoETsBYfSaG7RJL2LwEPcBq58meRP3wk1Ck2s75SiS4W9q9wpdW99WNPV1sDgQHpqWcbdf",
  "key13": "6695cAMfSNS5DFNgbxMcuKQHGTWdqHK858G2sANQbMA2wmqKavUuqockHNiJfwqen45PyMTeG3U1wa8mrWjXSZ19",
  "key14": "3X8uju1ZoJrke1fS8cx1EUYDAp6NHvZLKCz5KAcan4MvyMhwLpGiE86GSepa58SaYnNv6s5L9Fzs64SYUuZg34pZ",
  "key15": "5MfkRYmdXrzBb3z3WDu6yjE8WFEk6qaxa8s5k79deLVUmN8MXphNaNkUD4Hir1bUjQvFg7dxoVSGP6wsnVYxyoNF",
  "key16": "5Ct8X5tvpnsjpyudTfS6rhXjbZTzAk2T782k3RkdkvnqNgmKovyAz11K9ygYnMH4UYBxay2DwTNFsgZrZUrWSJat",
  "key17": "3cPbeALw63U9sxqcAi1KtmQzd8KC2ifBYweukv6MkEAbDYNCz9QSEFUuiykJ9zSgkdbzdfXEpnpgCyWeEDqe4Gzw",
  "key18": "2KeaZjyTVWHea2CpohBSxcHiKuGitD7RqhXdTw3RSuyvHU88VHWoLDnenP44DHX1ohP6h5MnLkPTnuYpVoqSwADj",
  "key19": "4svvSKbZr8MU9eARtd5KSAtD51LzuQc9zsesJBKEPKKE1UVBa2xNQBn4eLefHddw765wmChwCAxfLSNhAQTQbXPG",
  "key20": "5Hq5sWXNmtmwBneqe4dMBEe84RB2dCwvmqzRev9NF92Dym1xhkZk3BVSFY5BR8PpsyULQGY3Cf66qjF5f8o2jUUA",
  "key21": "3bvXJXKJhPJcSfn9wMEZ4bFjo5VfwhZxejY7x33RwQtb4nfRdmRMjYieB8oHjcP5jyQVKANRTLNzxvXQBD5TxyzM",
  "key22": "4CiG1qBJFmrWuAw2iWed5dRi5B8Mo8PPoeuEYGzq1oECCi6u7jL7b7tT39a2ogsHATBty1TmrKJzU1QUaXZSeVDH",
  "key23": "5q4UL4kSuQguUMkzh8NCuKbkr9yc32sFpYwZfY4g9JnRVjjQiZWoE67cYb6eoyV4GvKe8Shbch1UDZMCyuV71cSW",
  "key24": "2SQkRjNHNbSR8dkWhRAmtAnQc3DoB9umRLTutoKzStWubfBHVLmef6irHqKN52QgmauZx6JjPSmQ4Jk7JTNqnTpu",
  "key25": "3R4tv5Gz1EcK3pxBm1LgMc5xU5RrrbyW3g7ogUbMGHFrHkTwryeV47WEJzrKCmut1WuhkmYB1AKe7r7LMLXsqgup",
  "key26": "5CU3raY7T3KMDj66AGjvzHXLQ9TxWENbSEBp6xDqyiKc91teTEQZ5t6VMZ9zNZTF9R856P4dCLjojoeZK6rKkqW3",
  "key27": "2wA2othgowncU8bH1NKoeYi9ATtawaMYTQMbqbyUpHht6crUFrHBfYdnr16BDDECw3JHViWSydHRiRygpsxT58yS",
  "key28": "3jaMiQJN4JTM2QaQfck7WpC6D4pZSzPU22p4qZSHbbJLpiFQK6e58LuoCd4ev9fbNo1GNovKtF1bzBmvtBHEhNG5",
  "key29": "4PFHekATxAeL7jD7Yw4B9G7ruiubhRn9172sxEt2AVnNmRosZLtB3aXC9K7renESYmVvfkW2292CQRT3ojP5sByf",
  "key30": "28EEb76DuJzrEr9a5rgVcNq6NKy9jdYDZLWM9NJYeHKRUoahVtgS7c9PqW5XSvFZKvsK5tbAtoU4vwE9gYjkpdcu"
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
