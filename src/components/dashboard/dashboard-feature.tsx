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
    "3uaKZdUKFaCm6P17GbvKofubWTaLvFRWFazPLPr8G7h4TKZcA1nQnuMS35DhNL54yxsuNydvVh1QcSqBVf9Ubv1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7EZ17NQM6aLfpn4TkRZnkkoaP2oAVY55FyDbDzcDGYPLr7yrujw8H1PF7WYcnRECLhnZPKTGs6qryBJY3tQmxA",
  "key1": "4BqT5whKR6Hzemb78XMsFkTqcu2n3ctdRMNzR5jd7zceZEVA6nAtsPD88AG9G8f3xAjxaECK3gCaxSpbmsJxAMHA",
  "key2": "3gVyQf9gyJTFNyon6kodyR9HGn56TwQpphhZbq1XppSX8cLYiUSSNNJ22jK3bqUcMttn2j7garXDhGYqaa19C5mk",
  "key3": "5jWnLaSdAnzZma64TzBV24o5p6jJ3xgbbdbRYGVQp9ezuGxbUyUZ9XdfdJFJjCHQ8g5jFfdfi1xSH8S57Vuikb4L",
  "key4": "4cnDUTHBxcnVCQtNiUjq4NMzc8oTRdgAF9U2vb5f7NGnU16eNACxM9TTRCFhpjRVKBVPKT7ZbpbJAgT9FKUo3U6z",
  "key5": "3aAd3AwDjs1dxxczghcnp98FUeQN2wM78tqJyAySEK12uHhWvkotBoTTT1yRaRcPcwEBjn1512TSTJqhRMtKzkx2",
  "key6": "5XrxsVD8naHXdKpLmo7gJYdGfwHWsRSkXmrBTK35yatcQFErRtMUp4ZWMRkAXEVMGtjpE5biTzvoqByaAnDk2EwG",
  "key7": "5w26W7zwjzvs8PeT2WYEeUDUW5eFKWgU2kmuuRqyyVt3UX7Qw9Ld9XsdLkh3mmjkT8zECQiZUiLSaYH8htmgC4yj",
  "key8": "4F2xMiKMzc4ZV8WeCWww7cxWpUPLFELt2gusbeUMbJK4GjC35LRjd45FM7zQLzopL5vFNCRSfqLYXxp1cYiaSjw6",
  "key9": "5KVhtqsECgYQshFBKuCJ7woWwoYhTcEYNbNVB92eujpBsGdiZB71nLHAQaFb9Nw9Qxg2AYEQ5oks8vYDy748Lsrt",
  "key10": "5VhBNUne6RGqcVaAhSfT3sCULrEayyJ5dR9R7KGmM6qmhee7PeLk7KWbL9kxtD489FfaJuxnkgGnhEFwzxfY1kXg",
  "key11": "4ieKgSJvkXLAXZAaXpNLPtTKVAjRA8AfZFtjHzLbQMt62WCVGzpdkeSc37vwUCAqKCGEqLb1WSABarS6LtGA93mD",
  "key12": "67Sz2xHqwGeDnhdUaY7yDJz9RZe494evZciGiJjej1EiH1pDqE5LH8cPfpCw9sTzRmNenvnJ7NTHRjZApaaCNexs",
  "key13": "4uscJjXrHcq8mmwUKX9WbhFBfWG33pDjN3N8jkVJaZK11HR8yn7gkaeu14CQXn2w5hrS51x4VLjviz7EDWS8pAap",
  "key14": "3h1Tz8gpVV7TwNYG36Wmr8PqWcVQZzBuyW9FT5YHNkj2ZUnPWmo2NtekTKS1tb4yoffhiZ3XVtucPbMLtvoUhdX7",
  "key15": "2Q19DiwL9cQkKx5a8PqoNawmCuV7usHpMTvjng3KQB6ycTDezTxamDUViAnj8PmAi4d9NLb6omQFNwssDGqvmtXd",
  "key16": "3GvTW1gA2ZZ6z1VhjK25vV8GfLM74AZAwQ2vFmLHrYtXfunuw4Y85jM5DTQJTTEauyoJZWFQduhgLJEWtDmqkCoh",
  "key17": "2kCqR3veG4Fr49WTkPUr7L2MaJYHspoJ2aHmCsFygZXGb4JFdYoaV6mPazaGfCksCYGabcr92ZtcH16tJY9KqYUv",
  "key18": "5tSYZHNEPxMWSPLT1hL2xRVGGzJkPPj99C9wt1bciusgqZeNXjymG7LbhQRZXkUVbAMBk3YvveaZazkpXWbwaamT",
  "key19": "34fk3ReoZCHW8VFEH2PnnYhyY8NTvmgfNitfzFZgyK5xte7WXzWHFbMihHryyRu9Hmna5QDUiMb1Y5crahbA3vTY",
  "key20": "zjAwpj2ru6xabRtjtwC21976i73D9VU5B1hiA8s5CXbWPMe5DGWYHEvNBFC6JRaE2LPN3qL34HXue8yRg8FUZ4v",
  "key21": "2DLWV2KCk6atSNjyJdh13zvzisUJWv9NPic9MSzGUPzsEeLiBBC9RF42rriW9cKn7pRiFwcKuPGexBu5MpBgzQnE",
  "key22": "4WCPsVrS1XBJ4SKQkCWYLyPmweVZR7XCM56fa6Cj3nBAvCGn7GaRXwi6wTT7ytzDyKXFQaBRmvYhuDKkdvWMZj61",
  "key23": "67mbiVbqG9n6CEC1k7TLNvLbLxBvrb7mtXXR8Lo6vfyf9jyP7sreR9Fih9ajoQCZu5aG2ZzgLqhQNmANTWcDutY8",
  "key24": "327GmDxhJt1UXhuamh898j4pnYYs1NCFmiw7a2qBrKnmaWvboRPMB92nPud29159LUYrXbHaaG7J6n8Fz7SovAfY",
  "key25": "KAPjoi1qYWAAsqzyRU9gdFDcr4qvuBaq4nqSZL8s5GArW556AoTW39dGarqDAiuVqq5pkXdzaSZ4o2Hh8ZE6pER",
  "key26": "5JqFJHTs3e53nH26QZwPCvEkjKdYpBQanDnkWZBtxZo1wMz57m43kxhjSWxndbheNtZ14S9nhyi33QjYAmnDbTKw",
  "key27": "2AcHKXZiuxDEejnmdZWxoTr5zD2QxcyN6W8qy5PZfQK7HoAAoxFPUANDkoR9LPNgfePQCqcKxUKcdPV7heyy95LH",
  "key28": "5bkLztDx57Gjywpyo63AVAPMeXyaVB2eSConLT1YEdQg6UAoBKwwsPP7LLT1yPvznBLVqER4QZQRzcZ8jk1r2prJ",
  "key29": "4ZC9f6CqLaW1VYnGCCNXLerehdpT1BM7d2tKPFtmXo2RXZp2XTv3GfgDxPxqz1rdRDTHBxsM5ZDk138um9yQUHVm",
  "key30": "PozrBp69rpF8p8kYeD2MwV9kP3YJcXYAy35wmPwTNNj8cDZjtDTL6w3uxoZSoT6sZvjo2SQYDyG64TiVdWxapVU",
  "key31": "rYNz6tG7cmfHaveneLwveSc31ksA3hnX4xpwaHaZx2GzPd3yvS2tN66tP1djxhMdM3dqeiK2aCaGazr56mZmKV2",
  "key32": "41eWhAhdFcjF1HgqarUa4wDXSvrd9Z8MAKwJAGQNig4SZfMMng8Qxv7SoJ8nYL8p26pFq2tWH8ggc8rViWorneuS",
  "key33": "43puC9nZZs3JD1sByyhyr3zwwWckDaEbX4KvQyRiGqdBhETkgnV8jVdQ1noQxzwSJ6W3PDb3iqEeTg1FAzQECWYU",
  "key34": "2536tGrSVLCDhbDHoJdwbMpMdP2iXyQt6bLwfSMZSakqk4zuj5CYuLaRFAXHRUfTUgDKBEZxedD7JscpsqUV1gyG",
  "key35": "3RkJofswKRqd4gudpWodakB1MJYDA7v4HBT1jnwAqfJzhA7G7T1qniBGXXsDyMEAwxEvAbb9htQZDzHg71PaMTJR",
  "key36": "54u3QoM6F7cSg4op4Tq9E5gwFMwKwY1VaG6F3CFoFQnypX6v49H13HjhxBuGURdzRFGAfRtGKsfQoHA26gMtKn2P",
  "key37": "66rtwgnTh7DqMbQ3nWFWhpTLidoyPvk8UzPiqMLi92xcXskL8ApvkEhPMAErbSWBrJw9uQmsRCBd8arCmVSqGfXu",
  "key38": "29w4uzQ3uhWFegziiZabkbcA7BPtzgjZMsqJR6UVEk7u51Ag77ZmUweYseqsQQ8p11kvV4gbRXttFoYipsUELpHA",
  "key39": "3ogcifkHefJb1ekdBbRDbXGskUsPjL8Tw5S89WijAYuYPoxVSJkS75bjtqkixamMiyAM4aXoujqHd4XqJMfTuDyq",
  "key40": "hL13j1yzoGw8zV6ZfQZfhixUMLQ8rmP2gVhXAfMVq3m98AwXhKCT6jeAnXwieLgPV7wyeqTUFsrY7v1fHjRjyEc"
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
