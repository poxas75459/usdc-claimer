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
    "P4g6bdqcvNPkRBoy5gtP5Hzms9LcWLw9wtFLJxWmkrn6dT3JspeMYuNC5hbcXiyV37FnPxbCxyJ2ZUMhj9DpVW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dG7m3f6hDzFhCoTuiBgKyF6P3gZnV2NVfqnymeChEPTFh5UBrRkA9MUwijgqPe6LvaYmU3XposNNgobXBmaxjf4",
  "key1": "h6kZZZPdEkev3zBYUvzDosMd5suA4wAnjwDfWUnjUVg9V7V5vnmbdsgFyFqoZ2Lf2ekUxZKSxkPHhhA52SUWSho",
  "key2": "5qPSkzuk5w8Exs2ZhdigssWohn69kaNJxMtBBQrcy14ZZ2PgkVE8P11iEtt4TsQCBqNF8ERPJwJuFeRBcV4gsNui",
  "key3": "cm2qwavvwxQ4Acmdz4DWyQMAW3fC4kGb1ijo2QKWpyoq7bbsWgFAAQqahhfmU9EaJB8QqVHEp6CVE18LWyJtXN1",
  "key4": "2PwyM8w9sHXPMVQoAq5d8RmyWDpBbVKhpJhXG6yvPEyxkU9Jd8vxE8GXUAB7v3nwvFuWtbqL8Jto9cSqtLsepJXA",
  "key5": "4RxZCyv5Pdafp4npTtnKamEPc2AYyN45paVxJGPv3cSRkKWP9nxdz4o7fRNYK5TNgQ3zjK52e94bPkkGGHCHCpwB",
  "key6": "4trMJrsoTHRTM2b64jiYc59TSZ9cYXrPcs22vAEuWdUPHgc4mqcWpn8RkhCkEgLWVHLGF2wiRqAiuBGBuzPSa9G2",
  "key7": "25Q8gy1rcSqkdEhBRfAmADtp4o99cq8qvSNvTPUCsJQk1tpseADJ2bNAmGHRFRRAZ2rxvv6Tz81MvWKUwAK2kW8w",
  "key8": "3DyEogBh1jQNPxf84BabCGcAEftGGBaD7XCDzfbeX3rfMrzdmXnEJyeqkp8kqozEUEAeNFBFVammZHUsTVoo8Ai6",
  "key9": "5MCHWPGDS6PCPbjezvkboDbX4TnpDfxS4YAFuQm8SsqZxgbjsjbUGbdMgZ5FTmirn4vAVubmsWaCCmuL876f5PbB",
  "key10": "5TzBVAt9gqvGe4Q5SXz4co1cDCTfyqhKHXj5zya4uJRmwLABnL4BzdkpxuKS6FGAYqqnG7tPvcpR9pyXoPDi3wY5",
  "key11": "piKWiapf185mayUi7U7qxEbaMA9ZQ8LNjg8hvHTb3ESjRZ2oT9qsWA2Qhb9gz4PZhCuq1D8CmHgvWUYFCWLT3fA",
  "key12": "3zGvNdVZXJmDQtEZxuNc1FnvVDr8JUbyoEg7XTTtHJ4VqFx4oSJraNpqE917Xz8UnMrHPBLefqDB5SM7gS1pCMNL",
  "key13": "3M49FT2qyUs47Jv7nRV4wHpv5gQxwiWhXpUSMQqcGSihcQYccMx79B2A5gbvdUBztTrxiTggMigHDVE1UHur178u",
  "key14": "2hvVrjq5EE7TubNwKPL8i3rrs1gwxpGXdMHyUtYZoZQLzGvLrqGw1Yt3fafYpNGArptydFZ9tknk9ShyZYBmYZZh",
  "key15": "2JvUmAhaeLuURWhwvcHV9HfbWfLEGvJhFwtXss6rtypkdC1R7hGNikdW6njRt3stz2PejrpDaPwhr23psJQbU9sn",
  "key16": "5K5rqoT3o46yjSPKxQGwfXn4nMDV3pRDWu9fgzjDmzK31Yeg1iwxZVieAfEyxXdpFN8jwJdScJX4mDR2BtQwXhs7",
  "key17": "5yzTFDyDnwXphgJrfoeFLwxv1oo4sNzfpUtMMN48zXTzRxLRVBFARCfHLpWgGEFuu1uGqXtiVxDJtfF9TMbGPo4E",
  "key18": "2nDPTW7xVSDTbcPdHhPVGFRdKDX4HSd2abuu3oZ3sNTd7C4j47ykgHudWuHfv31QJp4SGtSgF8bg4sG6WXwhttD9",
  "key19": "576Vwyc3a37Zk3a1w3Lxi8vKHcrJ5ab7mMcL6nQeoTpDpKc1FrX5vf6BZeyi6PfrWJAQyLohfAiF4Ni3knobqx1o",
  "key20": "3DSDQhVus3XAejZcfWUcBDtTDqRvRDWU7Reit1Pm2NRUyLHrWytYvdXnxeQPsZAhSoZcdAiSCoXVXgpn3W4KpRkK",
  "key21": "51hcRQGotCzcAu3kQjzuEjMDfqxbbfc3kR2xfWgD6MXbSb31NSRiitRTm8UdKAPLQeczch4LnDeMqyBAvpGtn1Da",
  "key22": "EXJoM7FZC8poLeBTujwVRa63r2fTko8NEiLyv9v9oPVDCSc5LkqdEqW74pZ6QKKsGmWK4q57piJWLvQeUVpThdE",
  "key23": "35FCuVjjGaNbLsGv5NvAqgL9ALNx66KQJ7G9N2vCFSsCjJuWYbJUmgQtrJBkPuj4josHpxPCUfBRWNNmSYZsxGNi",
  "key24": "3HT8obh8fHARz1XySXZwuGmZ5rtqpbhpm4nNomfEohhDUxT9T1u3kSDVUoG2gqZc57rnBuLV4QNDY1w4AMbzBBCw",
  "key25": "471BBcPNrrHWconiVqNYiNMLerkL6ofFSWmKs9Hjw6pcfj8ePhB1vm9EXdWFMPbiLjr4YeKiMxNbPH857Ad2gzV8"
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
