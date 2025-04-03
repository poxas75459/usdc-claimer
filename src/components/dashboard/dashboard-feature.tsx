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
    "3hyTdhL7ea9boY4DTYpUx96WTy1SWgkbnZoA3BmixcX18aS8HGyUWbu8yiboBr4CBDdtsvU8hsEqsUb6yKzrAFCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sAkNSwAAPQD5NdTsgTDfT4ecfxXZKWteKHDpdpd43E8PRZaWaoKzYHJEbcaePiAqKnpYa8UYe2pUiBqVsRx1Yib",
  "key1": "3QvpTkb8dWDuiS2Jo3x73gpHWQsFxzfXundGwCDLxCe6DNSru29TNAcbJUr5kfXN6ELZQHZneJopWaBnmZac2wTa",
  "key2": "2APzarKt7KUhz7EmQn9z8mykjCzYNzoF8gYbdgNNwx4AMhRdV6U7SBWNThuceFkYLJh1zyp7JS5uWiz1EqyCBmKx",
  "key3": "5tFTFqw4wbVtQXKLMFGGirSQxEVzwKHNu92Faj23ahKTP897mgNYqmQmdF2bWoLkn6V8nbDEnP4rp8w6XNzNykqE",
  "key4": "5oV489yDAQSKU3ZkGMJHSts8um3SViVSFmsxGXEzNj6sVpXgdMdXjcGooEGgteBqHWE19zUyCrJLGzy6pHKHnzyY",
  "key5": "3UJyFKgZ9pGbAJ4sTtbBwYHV62ELxzxaJh6vSVtTiLtztSZApNTT2DDJ8ZssmUT5SkDx4hCnch9R9J8eTCzaf1bn",
  "key6": "2vefhM856tVWatmnmVRAFGrdY6JvFirhNScvCzAst6pBXDcFYU5YmR3eCtedfPkkwtm6q1uff9VWs94eNYW9HiJS",
  "key7": "3LNMEvSY1uTEeUbTTfJF1w45CHu1JFtcLbA2Vzy7cgye66V6AETWtaQ49bvLCT3HwcYG3a4dtmkjCJUAGkpPjwiG",
  "key8": "4rbB8odanQK3vP2v58ksk8hkjTgYYHrcWvRBYq69fEtsujZtoCcCKTXQkKjMzYhF3uUX7ZRKuz7aMYo2rUBBxhBa",
  "key9": "4UAiUEZyXXP4F5EsAjwVwhu7XWSYA94K81Pq8a7e4KCPjgmm3uazkPjGZGkD3LWySs73TNqz47oJKfgUEX9eRddJ",
  "key10": "3upfuYxNkkHHQBLbc6svBhcHXwwxKvxkxECevi1oGMDNHAFyBFvgN2QoCNf3jBjYjNNGvVMf8xoXbspMrDy7u8fa",
  "key11": "39r18gxU3J9fwmtSA1yzTXfviz1rZCg4p19mYTFELwMmXfQUnFUrJmXSFWC5yA2j65uVdsBbuhaSU2ebeqCRx5B4",
  "key12": "4oUrPtswY7MYSdHiSGLb2VuD2BGr9FP1e2YtiPQYNLy2AMJ4vTMfFghN4kbbXmSQZekuhJa2AnpQHqKuKhpS5hWF",
  "key13": "5K6t7KeAWbtt2MK3gcEcDauSAsAp6UuDm6sqN5QWiRJA7bDczVehAP7puceHa8tJykvoMh4UXZNgR6mMaRczDN76",
  "key14": "2aPUrLkq1j9NEGagjcwKV2en8k4tEApKopHjfKRK1HpzR1JF6jyLGZ3m2Nk96ofbSEBWBFvvXi4Edn4Vwi52ooFG",
  "key15": "31SkYRJouNPrH4rGhc6A1gTbv4JWeL6MWqR63yJt1kT5WoyLk7Rq3e9zVkdJk1W6orbCVqrNBUrDCCH5heag2r2N",
  "key16": "2vgWCDqxfodvX6kqVZy55tpJWRtHPjd3JUpUwkZfEqb2CYdD4fNQnEgCEhck75CWQFkgHtzPPuZqwEBkofjhnd5x",
  "key17": "TZhoTL3HWMzBLYk5SfN5TXw8m9quZmt62RUN9yqfbyEXuQ4Fy7Rqfds8wyweSMs7unUYAfc7sf9dWJQqWRaFMgb",
  "key18": "4JFuTCmkLdSiS5AbAvkq2H6QequYYMVmBegwKCB7hxodvsjz6Z26JTFtGS1pc6QiMpmSPiziVcLh5ox2xQu746y5",
  "key19": "4zgfTqqL6UMKcReA2MbNWyTSprv7YAPZwEjEExpSgoZYBdTw5kGNTgNRUQ5iy3aDGwNWqkX7H73idmYg35JfXLaw",
  "key20": "45kTmCH6VfehkMRVaDDFdcrJdGMtHceSAwS5avVZzNk8LWTuvn5mqURsDxZLVxdEiunGSuqvTDBZs56nKwJqeLEN",
  "key21": "3XESJhKafKu8W7t3qLNprx1rD1UNqcHxBm9nefN4gJQNF5f5MP1XLvVxKWoPs42rDmPeTUHc66i8BZk9s2TRfVw1",
  "key22": "3Ni3aUZp2tKBndmMrnmfRJuvGT53H9SJkq21z83xgfFCxNRyUnABhvWvb2QDovWHwMQw8BNgywkuZ4sf8aEk3TSo",
  "key23": "31UEBKX5F94KqXYxaL8LGiGTMpDgeQDCJhaJJxntp6ov6i7mHzujRpQrhVW6BwayBECjAZZjS4WaAVFwtFnd9eGf",
  "key24": "cT9yYyMiS9rxzjhhKaWBxvo6SYticJAex3aVAqNtALVKv2CA6iAVFFtkCgpyPLFnxddW6ksjHJ3jpnJm4zzkA89",
  "key25": "38vo43rrQT85j8TbZkJMB61LJkqEnLDmhGdqVjj62hQJBSop7a1iW85fWvi8sN53bdjsm4L2J95FhauvtXrPd8iy",
  "key26": "xb9mtLJiGeLNYEyVzJsBhtd2VLo2M5YJWVE6nRMgwnbJbyFiRYjqod9nzkPXUPMUZUMWGS4GcB534ScaRQqQcYx",
  "key27": "oRL4X5diA4yuTR7SG3cB9RutMT75CcWhgSrVvzA3QPdN6jf4Esy6X2GwCwievaGNczW5Q6G76gDnEAzxBUK2KCU",
  "key28": "2ibgqqyYQ7oKWTVYGYPXoYXYFenjyq8VfxaqZNDro24ZEXGtsWTDfBYLrZVPFthwH3bfBwtWL2V1n8QWr9q8Kxz8",
  "key29": "5PUH2iudEZ6RZjWw3LYaJGGVg1K1dkTFGT4Ju4C5mAD4dhkqtoyHHscimVPdy99BNgnmNs2DVWf3xivSB7dJkLG",
  "key30": "5m7aqr5PJLAHHx86jgvwf6iEpygZB61ZhxnU5Zf1hqpLC6mSjBzwzmhPqxapMZBMRzPARdQxdwMQhKCYA5jYmtG3",
  "key31": "quKvmsgG61ACL3TTAhoWF2f9Bv5ytR88MRUnMVLEtHYt2ksY8178n4dY2Xpyhbn2uFtKQD9mjxkmbHq8dUeSBY9",
  "key32": "4raFwr2TCufhdw9mwpfseupJYQuYYhNmS5mG95xDvbSCYqDy5A8cEiWA2rPZ1yjLjWwPfVKzRUjk4rYf4Y1V8ULF",
  "key33": "4Ye623xAu9T6ZCkxSJiFA2hv86hHgu9YLVs9yqJrF6WqWnTTaTh4oZnbXBke6fMW3V18nhBoKG5Ngp66Dy6pSCio",
  "key34": "5e8gB3qfinDqrbHwLhkmyr9fjg3qFmPd8DrVJXy8VidAmSPupQcQkJQmfDHeN3SJFCyoSNsv4Lv5G9Ud3eLmEuqW",
  "key35": "2LcPj1vBEFDjj1n4CqQy2A31PWwYphsF2VkGb7LuFyBcFxKhfvhsUkVmRpSBEKEaWf8f25aRxNukB58nNLnohBgF",
  "key36": "3p6E1ZLu98iFtaxWrbUnMkE8XtBUGnyH6tYRNWQyotpNbPu5LikQWNqnuo4b9cjNUVy2Axig6hCEvbSBEYEcunM3",
  "key37": "3CsqyroZiDdt4TbcnAhpNB8jSCauZg3GuURSYeo8SG4H6TdynATRTxeapKHjEo11ZXWHWpKqdCiL9MJp73L2e8yk",
  "key38": "4sycs18HdsSfo5LoMcNsydGzU1kERQLAPrPXM75oKoXLmqXECB4gJKf63MLdh8pFFBFKnHeWFdnsQaDivCEPokML",
  "key39": "5Vvmb1YLX4tgrKWUD6jHhQT2n4j6tF8wLJoYqLnpiwUV2akwp22yqgAcVGEjjGDPtBaktfgRhuXmgh3RYtsvMvjK"
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
