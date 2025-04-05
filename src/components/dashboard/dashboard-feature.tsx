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
    "4RXtaotbctmJSJWHtCrrd6AzvDJRfV12DrSQFNVDAx1nUetjggxVn942m7jju3mfRQMDw9NMErDyjHhTEZTaV9Ae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bspfesK5EDssbUFVA3xrZg4ZE2BNkCnGFh2b6RQDqXbnP51iTvx4esrVqEGiUmWreaoSBes1TNQ3dPrWYy1DD1g",
  "key1": "5EoJqUASHB3HDh1xicNHFTWwvWJqjJ8WqjPF2D8PJkQ7BRpiuaKsqizixypfmE5FTxuL5QiNVWd2GKUKFjCsuyhh",
  "key2": "4U2AB516VoHkbQc8JxRkKzjpMgoqzLiBBwwcdNBzZxsJQj1Dnh8shfPFCtYqz5Fu125NXM4392SujxGc5dBUpYX1",
  "key3": "4WoWLyNs3sjbYRaamhcXcaEoDA88N272Krt1z6Nns1Bo2fJ8zuCGr9Tkg9p6TkU3V9fTT4LzThbHdpsByMaqE31G",
  "key4": "bGGjv68mrtJ2ox3x2TqKSh5krnnjJhjtPef96rrass4mYhFpomFGk68trQ628JA87uJ5ACeA1R12Db6SYhidUxQ",
  "key5": "3YYgnkTvu4bhiaewCf9ySnqPj9gqoeazPLZHN3KaEP5e9Y9377w21dKNHTPjHoiXaL2wS56KYmMWNzA9DuMxPSKd",
  "key6": "3TFLaVPkDJWUU3f2xa92k3RZtbvZifNcTKzSYNbB2T8yEWBvueKip7tEovBUg7jwZBVU6Qte3cS4dPByMkAFRPAd",
  "key7": "4mKUpK1hCoDQfsTSodifsURTSvDvEJBbiKHwpqRHrNKy9ZDSczrymvvNiuUshMNX9FZmTEp97eab95ZSTwLm5MEF",
  "key8": "4N8KPgwQFTn41asBk4NuXKNGfN6Q1stZzjQ8XW3JhwkdF25tqqdJdNDa2dXiRjS2WNVC86woBXeZG5dqxdQjgw8b",
  "key9": "5ymggkto5BP5x9TT6mTR5JsypVGpLwaaXVSmHzg5sM5AEDro7Dpa5sWHm3meHwPZDhhYDSGzfayUuS1SAkoGYxXo",
  "key10": "4ZjzYYvHMJGQuzeFsHnN8oP2kSETyrh6qjaPNdriJd5cAfe3oCpNUaDgLA3nrNqckuCw2i3gEQiWc3fd9vGvK1cc",
  "key11": "234SBHapsyrzFdxBt2Asu6sWwGtEzcMbYvknHtjKX7WwL4nW3DdoWP9orVfBJFPXg7i5pFgxjnhNGZC9rhfV6xod",
  "key12": "5gLksxLLkLQn74Zoo9D3VZ3PtyGgTzmyJbpBeKdPTLASogjv2RQKxUJdygUXQbHWMiNRiHzgwGUWvTXqzDr3AX1i",
  "key13": "55ecnR4empFzhzVA9hDKBwMCHr8TNGFUDEdcF3BaEH1JxkF3mBZrVpHo4uPdC1uTZtsttqbm7gjBmjEfAGEdLTqx",
  "key14": "4nmJmmoQtnuWEkfSrfk9zky3iuCiToKeB6A52nbv8He533PuQyHwY7Hrg1vrsXpFgYoBF2Z6Fz3wy9pxT9h5mi9b",
  "key15": "kyALgxntSXqAZJwkfn8BGxhg2aQB97gbuf3wMwGuyGuJ8adwHhs6f5cPoQziohFvrG37JdWs5MXWAEzsxNYy2fH",
  "key16": "5cjRM2MVFhiWdVwL8dqy6wfHvqMHDrLSV5ptgTx7W3XMjRFceav144EjzeBAss84SE6ZASwckbBCqSt4HJWfeazL",
  "key17": "5nwmGiw3AzFE9DJh6TPCXwXD3xmgvMRVUCVspz3e6mkSFc82shfjrzGUBxFwaGFUWJXTuJdxnh2wmHk6uWb2MEXz",
  "key18": "3RqvtvTdEPtYNTJbqQK9em1fwFry2DqmLp2qx3tkbddY5AT3BoXFE9TkZRkhEBQcRaJPX7VKpTHbpYnbFrya1YAd",
  "key19": "CcxXhjkwFYTgYBt49qC2rqo82rJhSqoWSBvWf5qU61btouyWbHj6ewTLJyhA1vH7uHTwu6pv4YHGtuFpZicV8wW",
  "key20": "2v6XPFbz399dXxBtd1dZ6vdaFHj6iMBDCXRmBdVJfXtD5Z2LWNnKjRjXq496XWVdu1G9Wa8NtDJf1Sc8HCzBreRN",
  "key21": "2tTuEd75M2AEdMkmHaWdEdbHioVJMJVCoYfxDJwMGu935uNP79q6odyUVdjby2EF7oxerDp8QiETWz1TJS6xWUsz",
  "key22": "5iQaQahbsm68ffNjbTXYrVDctRGiXCvbQxCiyuw5ri7oYfDTLpsxXM4kWduwttDDj1byucdf1QDHFyxNB18LzYVP",
  "key23": "9EYqou5moGD1BCB4DbEAbc2KdTNdLyaqTrJHYuyvBLzNmPb44EbWFUCAEhPyb69WGQoWA8ouorvvKuMT89mZsvM",
  "key24": "4rt6s2CU8Ht2BE5djqov7jV7vPDMFhBvwAauqFZjMDSnwz78ZQ8AJDTB5bQSMBjLZh6MYnHfHbWBDgVvJ7Fa5LK1",
  "key25": "461d2PAz9Y5WKyP31BdbNyRKvJsdCtZCJHYcjxhgRguH3jyRa9egaskWKNCorFZTvxqiNmCh8oXZmzGPK9HdXknb",
  "key26": "3x5GDncSJjpogAJwSrpvXAknmSeTH2twcNdjgwu6mAoF9E2Qs2fqSTB3VSGySUpMQG3K7Hc626Cs7MmzVhoLUVfm",
  "key27": "z5ad2efkGywzxpsDz5engMX2snApGdNcmc6CKm5AxvShARe5c5jU1gvvK3pniLT28HqUJJbmsMFWn3iamn4RRiZ",
  "key28": "kadBvkJrzzHfjt4c4ZCnhTbxNb2WY6PKrdL32wkytLWwyb5DGpvPDSPywGWFhoubaJTtEEaXbxDcwi8CmTMg4TV",
  "key29": "2Yan9P2QwVCJVv1pfEfhtWFtL84HRj6yxd9FHPiqddbs1C19uTqTMkF4ZyEyTvnyR1thiZetGwupfyEuQfn59H3C",
  "key30": "5Z5NyqxfWiC4KTkFyUTfd4LmjHj4Ze2WWebP1Ph9tT5DZVR5mpbdT1JLvkCVtHzhx2Xw35PTwF5aAxV2KBw8dYBE",
  "key31": "9f3hu9ZV7gWQYM8334V4eR5hVXhYHGhFUHPMLHFrzXaHVndLEmE1aSr2LMxv4eCqSffUjx2T1p8s9cDTvw3Fd4C",
  "key32": "49gCVPv8uZ2UyVrAnPDY5MchHFXteNsNUWa5zVtRRWkCi6DDRrmPhtJyEhAa36xNmz9hdcyXXgcHMmnUJp6ti7jk",
  "key33": "4AiZFdLuXrCRme5McJHHXNEMMSiJY58wY7HnsUureLhb7cVL1FriWLdXPoMmiUfSGTN4PkEVVkiwTLx9c2H8D2Kn",
  "key34": "2cHqbZZLfrLc2Bd6hEt5wjNpJwjwgJhu1wm8UQpHNKkwid8PrEp8TuSzJBBj47cCBrKxoCsUc62YK8eMupJKN761",
  "key35": "2feB2zWzkrifLDwuY3fA6AXNm4mh6Ydqdz1NnAqxGYo7Bw8JF5qvnn5RiaPm7G39eoQDTWjMD2cbFdmDFRvqCWZU",
  "key36": "btHi7At17WxJ84sm4ywB5cFjcbj6wXw5Uj1gEaVY4w2sRYawLeJ5simnWRS7pBGKCfZndACy1GFRVwMZ5fj8izS",
  "key37": "5xX6hzAiRXnFkVqmx9DmbRVe13mxqUFTAcTtE2SgzG3EgHL3hrjbpC4hQqm8E7KgzkgBG3TRtE8nzVGNmKVyn7mB",
  "key38": "39xQbKthWbEUtZkJSneQKqHWXmHcgj9EmtsdBYv1vcPyrw6rt557DcPjykNxAuD8PEDnYFWzbdnfngvKJmQYdngb",
  "key39": "3SBR8DP6jRs3XtJPFDmSDUc1jBRoo3tH8Zkuat5B67mboEgkFbUcN11C9xmyE8LEQwrkXoswQHPs8yzX6tL6zEkZ",
  "key40": "4wHwaAwTYQgctH5HQ6UtBa4i59UV3L7tKnuMNymirizKFVbqbakAEUa1nfpDaApBKY5TyFNEhW7ngvasQwkyfUHp",
  "key41": "DBcPJTzkWmnzNLK6RmFEbRHvmJsgBgDW7nxnaffU3dFbotXjFSsR6UcbME9e392z2QxRmfG54zAsjHYhSnzGei3",
  "key42": "4WFY1wiUhCPHWWg7aryXa37hf2LEoK8cFHHMh5W4udQEG48YZNjtvUjdwk6ASFMtYdvtbyeWK6Nn6Sn3Fcxxv1e4",
  "key43": "2XWeEbAK9X9VQ3G387vEXu2GJC1PmdDznTzsxkCTxFRLVLs4fRG3gskk2eNV16t1Hot8ZQC1GxQ5PdaCLo2pwJB4"
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
