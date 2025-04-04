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
    "2Sazgp6dMdzeproNk39TbVK7qq8r3oF8J1Cxm3MhG1fBAzf4DXrTASUTtcVcjrtFcorwvofWczWQy3z6aMi6o1M9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47uWt7TrPKmwW6F8v8VnDFFAq592cmMgqdNYcXzoQhihWn8w8oMyT3rZkHz1RRqZXoicvDdDxQXGx7ZhcYmt8yrT",
  "key1": "5XZv81G9bBqgBPRx3sQEyWUZEKKavtRU92JRGg4suQpXAmF2ojbBLMtdrKzXYeNj3LDhGDyq3hzLANZApMS9wq1g",
  "key2": "5noFxhtDg6MHHZ8vgJaUqrqkwFMYTw2qLTLuaWvgpooRSAhiQVvNdmgzz69MY1ioLsGBkSrxKaJy3vNAzk622gcw",
  "key3": "4thrcSToZ1FWLsv3uMdBbZDwQX3q9UREznqNMssg2bw7sAcoRV1kArwFurWW9McqCLaGZksYcZud1uWCyrmLby7M",
  "key4": "ZSmNwoneYHUPPzwT36BSm7fLrjyiC3pwYUSzqLfn2yZUZkf9TZMvU396331UEeS5ruhtdiyBER4Lfq4YZ7rwFv9",
  "key5": "56CdY5Biv6AASpen5fuMZa15QJzgBuFWkP45H8zwGqKkmbxqDbBYQvoD8kXTBihFwskHmaMke6K5g5XjGomaGDGt",
  "key6": "2roPy8U9MCBmJaqHgbyp57zPpQ8Fn6bZym7kXCMMMVAB9r5gQ7Q7BmPRAeYxnTQbR1gGYsF9YpQ5gjNoTk4TgPjB",
  "key7": "324iciECbnjNRyiiSxsj9dKTNKCrt8i5Se3MDF3FzSDverhF2dvtm7sPZFLxRAzGinC53UuPjvwtXSczxWo893ei",
  "key8": "49M9DWjZHzWQfjmZGsGPacumbQThoSLqum6wj1edg8BNwRatrFHUrHursAJiwmgtvgmD1dMRLjQfWNTwR6SDhKSn",
  "key9": "34qUBf3b3VAKYpNo5EfEjuzB7ZRDPWckQfQQZsxN6Cfr4zaPdZb7EFyoChpEkF61wxFCQtorxX5VaUqwMCziRVHg",
  "key10": "4LrDVtxAoozhbFVdhWFkqVcGUcuPX2Vf6QDmxJrzZrSnYLXApxpLkEgwsRwM2D5Jw6Q8eViK39KsPGw2jk6aX8Tf",
  "key11": "2BZAvH7YRJVLbNayZtmtYazNZboaSuUi6DkQQvutX8fpLvttVGkSKEng1gExwSNXzCARVPqgGSvfJYPQHdEBRrsq",
  "key12": "2ZZefU33AF8p25Gqn5D754mAfoemAYJyj3xM5BmZL2JU6rKKSdnKcQ9XqmLrCDwM8SyaL4x3HTDBJCXAvpj7r69t",
  "key13": "4FawmT4qwUFzRpQ7wvwaXA5ZhJrqaQJwwZeeSnyj6ZrGRvUeJ3cTvSJF3jXQMS8eBjyNn3ZMYtYh48c89w2bEyT3",
  "key14": "2wMRKHFHvu2bNbTejmy3qtShj5MypNCymbEuw9TRTtW9h8krrjFZVQKu1e2RwCJSMhbdZG64ncrVv4dyTRyuTQB1",
  "key15": "2XecDZVNqxBbDs4QcZrgRQPTmrfzfXNzHxCVeUBLdDRChyugi8PwjUC7WL2SBYkFZmHMdGz1EM7mpbyGoaXysmZK",
  "key16": "5H28FcDon9WQBHCRzgFq6YyQzL3t1z67Mgwd6nQan9J97iieNPzypLdQbEWWxqpAiUcrd2JMcciNs9Xsd61W6dcu",
  "key17": "5frqQNywrC4B9ukgevw5ypNtxtSQsFQvQfcGtv2J898YisYnN9RiSm8uqXibB1cnSxyJVi1XS8uxmDd9jSWUKxhX",
  "key18": "5KcbqRoNGk9Nu2X4mVeEFUpxsBxETp42MkZZoSucqqWFidEAfXFSDVE9WYK6sR7rX8iPvwMraunQy2C6NgMAyJEQ",
  "key19": "3DYsvMEvp3Ls6DXuYJXK4J63r9WTYDdaoBGxNg8cE3UpcXQGLSTPwyJaUdksgb3gzfkmZnK2SU11D8iEZ4Q571pQ",
  "key20": "4se4jshUpPKiGPpkjjMDqYF62hdFt7SrESdC7MGAe2TJEmheao4d4mHdYoHyt8aAwxKDb4agxCqviAXhBzm2fr33",
  "key21": "r5b3UKBiY8nYyq5EexCDknnwSR9iiFhmVxh4J7e8sHYhH1ggxcBstyFaL852yUSjh6UherC83LfwNvYGTyeVHg2",
  "key22": "cG2qz8mS8ZikiRdHC4w9nQe78g37dv6coQfVTviSNRFqiEDfxg96vpmCtDAbLrehcx8wt7vGDaK16WarBjfGrfb",
  "key23": "4LaSCEoUPqvuGbbGPo7knwrauFRBTibJED6e116cs1Xpn1uGe7g9Cv2RZe2Zh1UsjsupJExYhnH4CF7vj9onriTV",
  "key24": "3tsT6s6CGaPRmvVEWnGeLzpQcF3R3wrR213jjb28oht4GSfrtTvuUmfNqXeKKqNBPiCqLoQd9Mzo8qv1Y63yeTcv",
  "key25": "1ZWfDBMdBWFEz7ktDoRRTUpXB7tZeeH4MWmWi6a8XviYqgvc5vGyW812J7S4pxv9LczzyHR3SC5m6UdjmZ9JETs",
  "key26": "un5a6JQptTGUTYSdw1ByKKwSvATfweowsLX6V66GnrhdpAqAvCHB8hPt9jgKqrKtjLQ8v3ftTxV1Htkdc2AJiZD",
  "key27": "3aVZooeP7SJ3DHZy2uigGGvL4yk7GZDnParcubwz1hsKu74QEZW7G2hstgG2JSRGPkWtLJNsHcc1wPQuM7RCu3n9",
  "key28": "SoDEqX2aq7ZMDxFSVtWVAdauFjJNA9BnEDiEGfc8hQMTtYNUWN2BXc6NJLHFk3yYtDSbgxiAMXyCXHGSeaQCPh4",
  "key29": "4tutxTAHV556yBbTyacU5XSWc89RJemsBtVSBcnc5pNPdrqv4fmfvwQVVGv9Z9DJXLvE1MoZKcgH5bQntB7rou2h",
  "key30": "262LXrtdJg7UoRkrHYypdPgvRBmLBUUE11tLWg27XkFPSDkHjYqXV37aXJFtvp3rKj8ihZEh9LKXxaBvFygnaR9f",
  "key31": "cUVosHAfuik6yxjYU19qZwQqcEjuVJ6esX3X3SDZPkv2fK8y7gJcXXzx5F4BV6Ljckz5dAdDeNrgtgY14F3Xemi",
  "key32": "4LQVrt2he5B1KqkRSXPpxVqXfTZzptaWL6M89KEUk6phHSY3Eot9E3JwGw754CvbRTbdFrL27RNPaZXFa32WbBvv",
  "key33": "25n5hy1d6bhMixMf3P8rRrZSwswRnjt66Vnkcm5Vu7Ui3ooRUoPfyrtnprvpx2ZoPTvSFDU7K2BPXnjeRHUY8i8C",
  "key34": "zntBbozqfYXwxckFHHg4yBuNUvGHrQS5ZdGZ5k1VyWmPkhQsryAodvo7i62Ch1ndC9TNtELJWdbcbZz95sbjqSP",
  "key35": "3X8CqXTeptPMctUss1PoRxSzXTHXGrvrqtbkadENm9p7YRQSency17Lpk23apk1Rt8v2fMQMWofrEakHCC3Mggtd",
  "key36": "47ami7tazgkPs8NqGSSPjarKhU2miD6TV3ixBys8TJMZNskdPRYDyjSHX8BTZNijwFzSK9DRxAo862ux6jKKKqKk",
  "key37": "5UtwYdCfGqz8ed3zeTwUyPwBoTjjNV73WaLQ6iL6Qz3VwNnVrM8YQkNduW6dJAPbgVmR9NnQbdc5iaDgErDj3Nou",
  "key38": "51PxtBkjmJJumhRNR8BDHKmVfz5X5T36iGQVRG8gdCrY1gFyjeSmWeEXiKJyzpByFxyqN4YrixmqzhDjhsw56iT",
  "key39": "ap84QKMzMUMRt4rZ9uCgEwtXrScoEtP3iFnYq6dbTCKtvdr9NnY8eTwsRTp3X2nWR5Y24bcfH8Ymhja3nurWwJJ",
  "key40": "36iL9iRHj5pEL5dfiWwCcjWk8JKq7EaEWrJvLeaqEX6SYiDCZwKV7htdwDpLWiepDCzM1Xm6ixe8BRPVEznxc89Z",
  "key41": "4xPQ8ctwB4SjvBArZCTvyL7ASNaToFurCU5pCC5PqnD3vwYipbFqPXh2WkkT77jgX39cDj9RwjYdN53GzJQMxFJQ",
  "key42": "4nasWrpybnUAcf3FNyRV5BBDPf7pG4MAeA3z1ARyPPWCaWh9xXeH3Hz228HLRGcJYPyAj8TzD887p2HdBy9c16CV"
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
