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
    "rDLJtgMiHdQiE3wyfKPtVcrfViPuaS2CZ7LFQ1WWV5vNLc8k4Ldz2q8x6yDPU34Nw8oPBBBw1rUrXyA9a9PSfcH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bDRYDAqMaYQyavd3zFEibNXb6pJen8v18tLQMBjNgJkT7vibCqbcrZabhoechNYpLVg91ynLYs7ps2R7Dcp23p",
  "key1": "5LPBAPc7VWGTMw8cqzFV3fxVy5JujGscP2x2EirG3ag64h7JqFsLXY5xQPBXdyBTLh9LNKhEUo67cuKQ699nFsRX",
  "key2": "5vwQ3b8PjbnzvF6iEcXYg8ABhA9eTAtC4ir561WBRSC9iD3jqnawNa4gWBvWNsGCZA14Vwh9dWXwP3b91Tf1F8Dq",
  "key3": "32NE1gjN8pVtrzjzVn9FZQLRztBKB5UvaxpVUuvwBfuFMjRXmUnaPXYNWQHQBtFb59iGMwewqJk8rMBqJQQRr2TY",
  "key4": "uPCFmsQceQGkxFTeUftD8Y6VMuJPGhrztSqzUb9MxxcM9XCBGmsnZ6GjNuDXZU7noFYyZvM85BBKzf5PY2tYxJH",
  "key5": "26dAVhCbiRS5cKRMg5WKzmdkhChefFzprZfffDoe2TW1dBQxUTTYifRUSRiXVP3C1D6vjeMwBMEa5PycoTrqoStY",
  "key6": "5uKBBZK1r3JFacLkjSipurPRG5aRP2Q7RbmuqfCF7WHKPELF7MQyrRYFQ339vzK3UhPkPAMAjd1qH21z5RiUSvJm",
  "key7": "3rAxzfcjedq92tpVb6dRNgRY2vQ7eonuTM9iMgnAPXKYeq9xq74rdUHjjidkRyv1PNz9u3up5MR7LxAHtQNsmDhV",
  "key8": "tAkmRUPJdaFty7bqPcBvSoE3rim52KXpL859UBKGrF5eLNbFxBSQvvXvRqScQtrXg3gT6fBjo2orUTMVYHnSUXj",
  "key9": "26Bp7HZbMMbM9Ad3Qpqk3kZUMoWE2xdWxoQQsehgQd8FNV8FJJg4SRi6UaWa7Kx1XLEkWXP6ZDAk1H9rWQQ39RiU",
  "key10": "2sJsmv7UF6QZ5BZjCXj9PrdJYHQqBBTrcRtnhpggTdQfxnKNNH7bRWYPaaCSocoNtAH8waFaVmnsbNmeKhKsF9q1",
  "key11": "3sLxhc4VAeAexFkPu3rmfddJYrNKPFGCimBrsgtMw6c9ZvbSwoy627rEzFdozjnhSuyvdv69W3WDxGF9t4Ab5CRG",
  "key12": "5AGLdBMKUYqmE98n9tr4PnAvBAH8toMgENu5HWr66NsVbjNFSbncBeh94eNXTvWRvcg3vxfg1M8hbFikPKsVgNqb",
  "key13": "4hpCJfc3vXYHM9wJxMJC4xZiUduePUby3pSkWtAsJWb1cH2EhgTWpiy1EVY8LRr5AUzNVNLYR9TtCSjtBY1aTHS6",
  "key14": "2zg32qa5uVgSGQdwnemDrDXAnCRBHRxXPCT2CBvDo44qitaWqJ8h2zbj13v5Ay7QHcUF82XfjYU6ztRmQW1yxYuF",
  "key15": "hdpnXWrMwwBgP3apDb4wMdmD6ZCWpzP4dfQPRaLfBkaTeEPzb8kwJ2mbp6356eR9HXjZd6pRMKC5zM3H36mSqff",
  "key16": "5t8iPdLbg4x6DVrVhbrrJg7SPRg7y8phCpg2gSdMrbsWPDK1G2XsZbtgYsCGzDsYyE16UHqowWZGH7PoNma5L1jc",
  "key17": "E9Sh2RfyqNjrTHFEJGYUk5AsDALwYagYj6gjjLoFw4wVP2vfeo8bQ1K1UpD3fAeriGVP87mndAvRfsoqHxVS93u",
  "key18": "5mfgMsJWm814PKfhgGrmkTi6oYb6WVfPTx8F5QeBwzgoLSz2FaeU6m6H5LjdeuC6M7aavar8MCNu7M14CTynxuGu",
  "key19": "c9VB6AoEpgRVEbZ6yQUSLnYn4fiCYJ43959ZEgZfG3pbcaT5ZHrf3wg32z26qLUXpbXu6Kt6NB6ZBWi2FNiYrf6",
  "key20": "2TXMH2pqDcGWxHcndzQhtqivuuKWbbWwE754rmoThU9PYcY1SocJyiTwdX57Fyi4iQBcigEYJP8WcrVFsi3mDAwe",
  "key21": "pH8ciVf33gQSsPQoFPJVrMsrvCWmPbQcRaVzqC4vqMEqVYBPDsa2rZo26sVnG3XSw9o1WgFeK6rmCJfnFBNVSkp",
  "key22": "5LCYw5BtFXVdy6SYMJTKszTsMQkr2SXPobgCorPRdbDuRPSLaRafQ9mPwu11FksNYXGhx4WFWSoEh3J7EdaTcAzX",
  "key23": "HJHto99qjLLkE2Bjpq5bH1sGkUWgnyirnqKLMAHdr1MBjwE3QkR1MwTQuaoNQnHDWuN6s9fbkpLk364zCD99akD",
  "key24": "2yVM2iTDb6TjXDst5qVi8yoKK2EpKUsKUdYXHgxEALLRD915TfdAwetfHuvd1aCrxUjRHWQ1eRxGJMJj8Td9zTcL",
  "key25": "5nLifJQ79MFZGP8jyBrpwoWgyt7KpxeNAxN1LdVw7PonDRzDCMqUUEbqHEceqhtUpMXSPa2X8EYpggqCbAS6wmnG",
  "key26": "2wAaakY53TdsKGTc7EAZR3nwotCgsaB137Zdo4QwNUpeGPvvWyy825fxFzSNFDUwHDswvEMhJY2qQZLvyHb4h5My",
  "key27": "FQabDti89eReG4ou5JQjT4fm3GQsbmKF8TZ6uVtLponWc7F5Kkdxbnn88sFP7Xoc62beCociQScnmY7eyisK85u",
  "key28": "5twyANG2dESSrN8segkK4ywN27wffTcL1BWpmZ43dYcaii2xGvTwVNqLw79DsK7UXuVZEkNBkt9p3FY7haEzvEKm",
  "key29": "37bkxhhqf63wVKhm8EJLV48qgZ1v6cHWogXxB2DTiWsDg2EEeYkTHy1t4MseBA9LF2Ma57LbXEWHvF9dLD62C8VW",
  "key30": "3v6MWF5hUunQFEJghozqHVsLCoJvyDyJF6oQGDKfA3eDRQCFpV9dshJpSNVqoPAJq7wcp3dYMBKzU9SPKTx8vk3m",
  "key31": "4YCbKJNJ1sAN6cvuwwCdNBNa6gwtwp9kVEB36bNHUCATKE6DErZbVfUNJQqYYcN4dhnheM1x3wJK6ZnKaefF6VWN",
  "key32": "2ukMbAWhiMpDRjk47LoJNejvpebokKste9xPAHbBqBikQ4ofvW1rKn9RgZADG5z84DnX4Y4ymHrB9cAy1koRFQpY",
  "key33": "2D1gx5eA94suCPaAusY9oLcupwSm12fEv8SfjLM9pogdyx189uYX2GVGB6GUHu4aqSyRGBQDDYAWcdPKTodD4KqD",
  "key34": "4sz3ypedquVHAwvMidnnHsfEn9ZM8v4YFjQGEVp68eHQ6wSrhX8pJ8bXNRvbmYBvaCFqXBpLGyb2GhA6Cc7dzY4",
  "key35": "4ZRzNxzttWeLA68ViZLTvTH9ank7anDQEH79Yppqau3z5Fwe5VFNuAsWUmXSdw5Gi4Wf5XAfKrDnWwU6kh5eRZ85",
  "key36": "3MQfsrjDDjYk1eJGod1C1rRqiTQeLynfH9jzffEhb8TYttRaFXanHeYHv4EUcxRiHvFYQGRznoEB1fGLFnxQKjb2",
  "key37": "5Tb6vns4E3p4HWfQGbBH7t6doyGF2q3LURLwNDEPJnJzMMQUSf52DTZfqeDJ1AJK8nEK6cq4TmKep5S71HHfPWNq",
  "key38": "P8nwqcrAmuCqgLiFi2jLZsd1JWrP2ryW7ouNhgapZLyH1jWrnvpPzgJPSuZxkcw1qBh37FMrjM5LNeDzZcEuxDk",
  "key39": "3GDYX7uB1VnPj1i43xno7BF4bMuisu3Jm55a9dNR3j6HLVY54E4Z5xHGRkDbkUtmeeYTuCznqiwfMq1hNi4sBVZJ",
  "key40": "5JUSMckm24KPEHNywn3gJssUgy85EbmEs8iBu1GqqZz5FaNMPw4DKvS3rL9GJqDFEzm4wk57dDLyD5eX2ezn1dBc",
  "key41": "4UWbqfxAY4Kr7mdBdaswrAN3e3mFkZeVgBB9PApWbk9ik2i1Nea4YjPMBDCMbCPV3vyHWttgEeSuhpv1FuUj7L3r",
  "key42": "64ZwjE3GksxeGV8yybJNkoZCofWtUs8SDMHKFfCoGNYthNk63jBW5rwbbyLimgyutqEmGA4Rue9XpS4QbN6Q2dJ2",
  "key43": "3z4NAQggrC6DKtfMd14JWAK2ApsZsp1dDSPneMZ51GsiJtyZM8txwuCfqTDVtrFK2ufdWhbUZ9vXhctcAgss2rz1",
  "key44": "2rwP6QzhzNKnhX1GB75BWZpNbuYtrKxLwzaKSThNuRNrnshbZUpuTHKTkwNhW6WfPx3XdX2UKeuvHPrnpMVzD8a7",
  "key45": "2JafQux3XyRNVvBpqtyz1PUq514RdnkxZQWSkutx4gvavnPGuPxvKQ4U8K4Gvc32P7XqpPbJUQPYYVZwKTifBs6u",
  "key46": "2FVDT65McFLQGMYafYCBZJv9U21rPYw8LwqWMamiadCsnXWw1TqajUUBGzLBKa2Jataebgw1WemzTsCAecMw7SWQ",
  "key47": "5WEvRLhm5TZUjyEYPhbYvRRG1xCddyFXHXhPBPMxANBX6ceQrHoEnr4JqGbwBjjXXzQFkYjvUgAJEU9dYMWkUZxD"
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
