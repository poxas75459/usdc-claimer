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
    "3vj3CW1a7GMGzbKMtgtEXZMDyUYXnNXZz63YvkccQeviRSvDx7wsyQ3b9WXhipwhn2YGPBcGa9iPzC8tLRMrBLtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38yZF7CoUJu3LCvXo2M2BkFCKqemQnsAPHgjc1QaNLkF8SvT3avBUs1mhhm34ca3isdVtinLqxDaE2vGNQvPcQBM",
  "key1": "4FJv6Ud9GRnjzPRGbHxJrga9y7yuetCAtAs7wEyUBbAL8v7UXrp5m5CJzKiLtjwBEaVbjfoRg9vkUrQcRKgxeZaG",
  "key2": "59gLrzFCBEwK35R9RFbwpbiVYgXC82NXkhPWyAWWLSCspn7N89iNGoM9YeTiCyWUykh6dAP7DMg9oSvVnMMF16dz",
  "key3": "RHvtCkeZGXDuiDqTLeWbJKthm9ReJDW4KkQEAghBy4pRr2hC2UMcVHfKp7u5uJD2NZuXDkzQWrp8hZ86tRvNXEU",
  "key4": "5i6fLwHVX6zEdKrEXfJgBrTndF6eRJ2jBi5BAM3drGFa8v5yyWX4gKJLDZyGJN7B1Vd63cHmquztJZLm6f5NcR71",
  "key5": "5bdFw55uUB8GErwLXLbRLxho2CN4oexWf5AHGLWVUQu68jPv7cBkWF8sjCNaUmoUcmcSRgZDbx4vR3WXgo86HNTV",
  "key6": "2Uhsn11cvcQVUa53YGQQjKqzVErWgrjthP5rjCZi8Ym2Ct2vPWHpfSYL3wiSs5dfjKioFY4vAnpW2ECDMtFyfsNZ",
  "key7": "4KUFfX6oHJuEWkq11Bu8eofMRY5kzxasmFHU2JnKyVQTCJDSnfvoRPwTRrteDgSxrAEfn8kVn43VcNBH2cnkiZxL",
  "key8": "3rUkgt3Yot7GMjH8FnhWVG68Qkn1HdVnexFTgZNut1oXGpc391TxCizaFbQb2EEPZizBpkoGkDx4SejtU2UDd9FB",
  "key9": "3R1gmnomchc53gpV8h3NmL7m5WGTVNFpgRJR5jxukW4FNuNdw2ZqVYsT4TAzPiaLoETHKFyEXkSggm83xpMRPMu3",
  "key10": "4cdbhXAy5RS7YGGBgwzFPZ1fkc4Y8r1GDJGjfwmYbPvfZyfRUkpffiTusPUniRakCsun4iVd5KjmJKrvaDoa3Av4",
  "key11": "4DnpSZauSFBbdsFQqzu8yRVzLdLbjpFLw2Z91hiMa5X5nFRtK9ayRGX1qEMB5PYVcwY7SKzKgCjFAMNmCeZhkPRK",
  "key12": "3NFk8DMibmk983Psv2BMWNgGUHS9APajgVYNhcpcAB2Tqeknx8LjbSt4oUxaWVZGsG2VL6aXMgGsDMW7tkK49Hxr",
  "key13": "5Zqy3kMQnS7ig6UGG6QnK6bXY97KJACSyqEG7WkiaxshkgPNDv6uhbmsbiSNUd3xaqFFQovM6VzinJBADWkPeZdo",
  "key14": "2v2oT49s7mqhzUKD2zAnpexABkqKdhipRyzYZpmZxKqqHyCWWFiBNHnDKPsgSi35uuRzxZJnubw7P5Wdf1o597jb",
  "key15": "2xMBTr7d42N6QoU1LRD1xhKrpcNoPndSqvh2BdMfP4png1QvRzvFanhLMX9ajb76CfR3yWLMAtbaBw5S3TFZCSLb",
  "key16": "5zDDGRECkWcFoaFLQ4h1BkLk48ohFu8HzU89WFoFagCTKSiwcYcBKGzMNagSDNbcQ1UcJXAAWTa2wxy3NLmwg7PZ",
  "key17": "5PshksV8bL8gfvWSXxgHfBPo14NUbBiyrxJr478az3F6YzjqJTnN59auBwkLhYqLCadzoiayi2kY41eZZwhrC81x",
  "key18": "5y9kdjW3dFKbCRkD8WYNj4eU5uZNjzRSpH2XAzXNVzJfwoj6kRN4ZnGDtiwpgrusJhAt1m6BisnfUEbbcNt9MSz2",
  "key19": "33KXSjsUXJ9D1Nmga7WvF9H6SYTTvTtK6GoHmVPk3cey6VTiHVDRvw5CeU6qTHNdxabvyZsyyt4ixwt6NZ8eAGVu",
  "key20": "5GUPm61gx7dQnksx8FuvhkcngyMCW1DARUNgHWa9k7qiBKQeP6MGyTxeiaxWG3TQd4pA4QHBCsjenJHopbQS1caP",
  "key21": "36186t1KWC69gXQxRDefg4PUsHxiq11fu182XFPzma9E5dr82Ae3umRKB9vNC4nYCXCvRRcfAsdt7ctMU2XkxN9q",
  "key22": "5QKogpuonEvFyFq1677dcnmPwcKLgZUd7bhx7FPdY7dzbtHE83peNivdnauF467LgMBBhRSyM1ebPHRL5XWdfQVu",
  "key23": "56waKRP78Diq5urbPX8hbpLBHKAPwrrjdoswKzZ9VKPtchL4hy3QJLLi2Ad1Nma8V3e26pTmkp1gzDitHLqaeRmw",
  "key24": "2eg1vhamDZMrLxmL5rdHARFazZKhbo1ma5frqwtyyCgBTb9nBysJSCBDe2qrUfTUpZhp7XapNzwRNBAWvHoLr7No",
  "key25": "2FxCfWN53USArTAzdTFrcKTTzTzTMEG6WXarLmXKLGxdU6qasgeQQ69uCcehHj5VRqB9z6kTUuVoV6pBQfnMSe24",
  "key26": "5KfW2YJPQQakv4uvngoWZDvMGtFAmeGbqu1dNavMHu4RXUW4QX7svgLyAYP4dsaUWBnEzNnT7Fo4twN6QmghrBXB",
  "key27": "2hrhv5dmTmij9xFuWSmQNEGp9SFDuCapaEQhWYh98AhFe79m5DZ9g3ccmYBjbHvQK63xtPc2yonM9g61kqqBeQzj",
  "key28": "yhuQFyZsydpS8G1mNjW5T8VBdc6YMg5SZQNy75ScpBenRUxnAh5cyGFGT7omBg3hDQHUZ92tvEJYBajA8zoekhk",
  "key29": "5cdr2gG9gnSU32umuc7qCEmT4Xzi2253asnFrSKQ1tEzEZmhLo86QDSRfZBHe448zRfseuphGmL8dDofgK5c1oVZ",
  "key30": "21EwSTrjMKAKore9BLWs3aWwSKWqNM2Qe1bwz8DggYgfx5ASonSShaqaWR9HZ5CHGrfJmD7h2369CBspvyvYJ2AZ",
  "key31": "41byMVggVrcYLpXCPHbK7yHkJbMgriuUkgeVA4F3ufNDaecAeJtNuG1YWBXDvfSQt634pnpcoX923RLkFwvfWmTq",
  "key32": "4w7ZoDSEMJe2Mikf3v7QbALwSx6GM4PeBqayZj3p8Q53eJXGkGbbH8VU7SzWx85jdYjcc6CEZbF7wYFDGLQnSuvK",
  "key33": "n5unX9dVH5fvvbdxuxiAm6jhUreGbYVTagRTZfjZvbj1qkxkfGVRf2PU62KhcAnhkXzSx7gkyipwGQnrZ3sAZdr",
  "key34": "598gSkZVqj651LwSgk2bKFQSyAeUxjcNAnFvCXFRfnuNe8bkJGMeAvshgHmWF812KnHQJNN3yta4aq217DsU82NZ",
  "key35": "4JVJNRRt6m7a5SwuEPmDXwCY6Nu9hs3J6DiovhysZ1TZ2WB1uEpAskH2RX3rTUkcADHDRitXPTUvTLwq4SRve12U",
  "key36": "4aFdGYBqb5hP2e2ubfX4BmbCeCCHqVH1SSk1d2EbVGTNodhjA6qVAKunjyC58zjAkTL4sdCeyAiS6yB8EJWaYQKg",
  "key37": "4CfPobuPzCuQPG4GcHctAHSZTFu9WPzMAAcWZMMxoK3nmCcxdqmWJXsCwpg62uBHRP5ek4NHf5CK3osMbeAuC7LY",
  "key38": "5oViZPUt6gDnZTjA2sgyjE7gT4XWSzR7yo1wS3WSvKNTmk2Xc2quyDVPrqv9W9jabs5M3m2zDA1QE5gFGrZhXtaq",
  "key39": "5tmPiDT19VB4TKiHMcW2GDTvtPukx4UceLe1Yeo6zHuKQyjdY83KaqVQHSs6xNd9CgvesJRh5ZYq7uRbzgHUkCVQ",
  "key40": "XMWWjWgPCg52xv5s9YqCMwYFCKQ9EsJWhjsDa24KeYAmiLwdKdk181D7hdaVC2yVc9etJ51vJ5vJr1QdgDv2y69",
  "key41": "4QSfiW8PwrCzb2QeiTufk8Wvv2J9oxS5CJvhjSV2ekaNxqZ2za3FijTw2LQ6coSLEJV82gmaDMeyuqDEAY2jMaHx",
  "key42": "8PZgHQ4fNGatr4fpQ9Bi9nrDFBpbpNCs3zziCJ6u9bJ9GXxadifYsrLdfejgQ4SndJFkMbdJiEe1upWtsvAmRcR"
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
