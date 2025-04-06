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
    "euVt7UoCgxN2yggEdzK1fCmsXSHFJNGMB2j5qTjAgYwUJJoeEFVHhuyb9F9AkUerkXvXTjNgy2fp3e1XxfPmgNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3K7LkbAfKRiFJ2ohrqwmSszcvpVR57UUpK8PLXox8WDFo4tnBd6ce2uqVtKdgsxoPz4z4EwDWh96U95LuCjq13",
  "key1": "58xK6QuGY9dfpmrvGuG8PUwiiDv1UGtVTMgoNfSAozfRyXCpN7yZpf7RwmSKyFQtQG1FqUQwKvvYmjqWq7nNtD7z",
  "key2": "r9aehSbFkzbXmxGXh2r7arHt73KLesnSxci3AMqhey6bHizTG72VxYvLPPYKvj413qVNsLMB547XmMfw788TLdx",
  "key3": "65Ejnp7HG8nB25H4bBWjuoV2RTvJLFo26W3FnBLPoBV3rPkFKGFsbzgeBFKnG6kvKYNo31e5Hcu3roZwDacPgHER",
  "key4": "EuR5VkeLgC1tFKJi9bL6Z1b8b6XZqekbL7Sws787xQBNfTDtEjChANe9K3PozXjypJT8T9mKzRQ4ogZmtbESnau",
  "key5": "4ptm3SyKJUwDGcB1kKrNb4G2tWb18XaDSCebHiLSkuWXawCaWwM6BxUztjka4ZBP222JJW33X5QLUBgWRMuXPpaF",
  "key6": "5T6kHk3SgdkmUboB4yaPuTFkg1sXvoPH1EarVHxX4Y5W5LYprZiRHeF2MXnzCfgxX3o66FxNSTkUcLQWE1xGp8E2",
  "key7": "5GzF2N6Lrq8koTgYhq5jo8FUR8d8rsqzDLihsdCXL9StvhuzQ4AaKZthbxqFk38jzVhZGWKuve7VCN7Re6Sf3XZ9",
  "key8": "3dSihDeJNEt6ieRKbB82t6YHEti1EMgsvLMS8XQKSeX9sV3ukXDbx4TrFEN5zwinpxEufqn5f2dfC1xkNsWTdW1P",
  "key9": "44s6LUgX6XHqWRAFPQaaJUZsCKCT31jd73CQQ2TBeJYREnU532r4HrCffjAe7HaUHes6AHcDZDodDNxbeYjtn3qU",
  "key10": "2bVyAMWGPo4pD8TxzWFgRTZDhSvCqifj8yuXRwYzjvZFzeUEVZcfG1i8L3yDCmEifKDsTFQuAt91DrPMLKMo6Ufs",
  "key11": "5zqwZmXfKHLK1bRorV9Uh7QNKc6aUQLJ3sUb7vX1VScEtgUqeHsfsAuYHBtppCGkf8R3tf5D2vPofQMBXSRTrNdF",
  "key12": "2caKdfYCJVV7aEcRY6b57symGcJ2yCTNkfDtrJdhmfY4BkNfMJNJQjsPmeiiALdqSnMqFrgLHw1WU6kp5FptBMn2",
  "key13": "55WRdU5ZonLsf8UQ95JJpKR67UtHg5eRLqzGMBPKGJy7NLzo1GUKNLG7DqrDFZ5jA2Xn3NFLeuTQQsDuHgPerPWv",
  "key14": "53BPYvP21CFHKC3rj1jVJQc1J63GpgHe1qkagZadS3tAo4hy1uydyLfNsx2c4YCbaTjwNEKafN6w5LMJAAgjQm9e",
  "key15": "45D27iQbfVu5kc4YQpgpZLjaj2pK8isa4pdF34WjX7t9okA4HBesLRiJoDiW7wrADgDC6gMsmNM9wSXb1r1TxszH",
  "key16": "7j5sHcKEUyVh5ySJApTe5HcJ1YNXDQZ75gS76iLHWPunKPkVAFCSCqBQWhuE7fFZwXncraeJYKAnu6TkVWoiSXt",
  "key17": "421zWE4c1rU333Nfd5Vva1PkigrBFKSVgSas5DKDx1x9PPc58f6LSuSpmnR5BKbA2MM6LnTs9z78tSBgw9Uw3MQK",
  "key18": "2n2dnLFW58NWotiUd3dXMYCxZmkgM7M582UwJ48WSDeAyZJwwLREdGsSb4BFuo8rHxbRUMosBFgeqd1TW8BZcNr5",
  "key19": "42zLz16AybSNT9LzgpeCVXMiZ5bwg5BBaqz8EWdVkTt5SDmDLfe66gSAnJWTUFwRmszbWu3uRpjBSBj6dCmyYP1C",
  "key20": "4KuVoMyNu5b3q8siR7D765kS3dAeRLHvBXTRVuhj1tuh5Y2iEQHidgRL9ijJeWBn4r6Sw6A7vBS8PVJRaMj9eL2D",
  "key21": "3YXRETF9Z9P1Y3LKUoe9jBcuLyD4H1fdaXfx3ukTiAAPoek3Tr9qZjne196JtGtTa561QMF3Wqrwzv8rbazedAgi",
  "key22": "5Z8k1vUcZmUS1kwLB3CoCtrCRdrhN7ajURF2yPw8Usaf4FVgBBtMsxmeAi636Hb3u1Y34dyTzDK97g9CDYVeQLVX",
  "key23": "2x6MJ74ZAx5zsRG37mszxwxF5r21AKZkB2FCrZgoF6zQeij6w2jTEe3fbmuMRf813n8X7DbojERzcuFCFuv3sx4",
  "key24": "2f3ehpEdQ7Kzf7dkiB8cojUkFjJipFDJLG62Hyi4yokk652k3JE3YxFLPTkgUBhcvUw8kBLXZxGpywcmuWQFjaYu",
  "key25": "25UU7sWpNVfxFz9SpMou8LGWjiqGivob4Vvi2wPro4XPL8pa5Hc3i8vMBetrqjS4Lp6stTGJ1tCZkY99GtM1oxPm",
  "key26": "bVxbDmtFdt7dexgAka27g9YFMaHPK31YFdQZuPEuTsTDuVwsa3BNHa92T5MvJTUmfNk2jCFfuZ113uCWgMyCmwL",
  "key27": "tmxePHrmyS9ntwuSnYFtARwHaoe4UNonqu4jCNNPGq5HHZBgyyip4HPZVPZuTX1u5vR43SNvokUkuMHsQj9pKb8",
  "key28": "GxsA69SdvKeNrKiumAQig6RbeSBHu8utwnWfYDP1tpT5zC7Aj2DbnnVZvBwGjht7Lx98ptF8P3adg9JhCaLXq42",
  "key29": "4orHim4GAtZqQdWdjkZAGgJNppWMVebLvs4uhFSQmfkX7p6FfeDZJj51Hvhm1Eg6DiZmThwekVK3EkSaHNAyAyM6",
  "key30": "3w6wAdNhFG2oiQJvoruijoxn5R1JFiF6qqhZjk6z9GeHk2XbiqRbZ7Ryk4YZo8S5NRkoDYbUsBgNTHpTaZdBwh8b",
  "key31": "2g5nou1K67msNZ2EgqJm72M4oyieG1pChQUgdnRKNuwW68Pm3GeuXH6L3pCgBY3YoNUmcnJqk2rPCwetgXxMHv1q"
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
