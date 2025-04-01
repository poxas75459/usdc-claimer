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
    "5ahgK1wRh2rPFBzs1pZKh7gFmD7z6m1sSoLYdFQA7WTvoHfmyn1jL2f1u3RjgCVLdH6qBWmmzYaSDieM1GMQKv7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PVfS3iDHwZpj9oKXhe4iWZh3NLFpCFJtNnDUouqMxY1TmySLAGxZmuNwEBVDXmqgKzCSus6kskXst6SK4i3Fuh3",
  "key1": "36tqSHZU7vuE39mZ4HPZhKKTQiE4Xmz7QjuZGZn5SDxckTpsSWb5Z5fkBmhd1FgxLfeMmEFC6889QxtJVZyrMTjM",
  "key2": "4DQ2ERHpDdBUPVhbWYe5Xrq5CJ2qbQgPchzryhNNJyLo7ELKwjMMSgZQ6ZgiWjzi2jxhueN49KnMJsY1BRcUXKLK",
  "key3": "3FqgpvLLUHnCmALpCWCqhGXWxqoVjcY2PrD25GpYVCXp65c3ktFvXCAhgMpCKqGeBzKa2F3gSrNHxQ2ytQTfdiCL",
  "key4": "44vManX3VXFXqrRLB9fAPxvczCszMSKdyrYbXPicQqr1cjSsHcUzW3s9dTnAFM3oFTt4wrksviGEz7DdjwEZyUSZ",
  "key5": "32EzuztQhVJEfWQwX4HpwnqGYTfC3FMvg1EwumKB6hqvbjKzbNdQu7J6bsKo7JG4LJXmTzVDy7u38xuxZsMqQpjN",
  "key6": "274sxeXAd24jBc7Gvvqy669B4JJaUt2UKdWgspy5kxRLuoEuMD8EjXxQcQyEu4vgQJZFrNrXVSqBz5LwYNQZ2hV9",
  "key7": "4cmx9sFmshmcB8tZdo6KryTBk7jbJwvBsGv1iaYaykTAYyCdZLbjD8EMELpfYH7G79Zpw5Tfcisp7oUP53NDVgJt",
  "key8": "3DjJp4WAKBBuscdcTDwv9fXyEceQucJBkrmgg5UPisPYqZjYeoAtTF86rh5GXyRpwmScfvDTSQ2ABdCF973xwyCT",
  "key9": "4cuN1BeCCkVrKBvVbYjtx8jrmJEDYtgNgqXiTTinQ7rixXLwVMXR5Gs64yys3kmE6V7UDmPTvYmGK4ZE8ozq1eFG",
  "key10": "2gsymbpNfZ5Zh1Fte4eQekXQGzVikjCmEBXFpdFUp5K2EfcJ5ULUtzag3vTdob4nuKJBqQaFzjUH5uynXjZN8rsX",
  "key11": "5SmjTavmtozVF5qWrFM7kiUaK2KktxzPA57HT4oMJrAoeRQ9RjxacKpwhj8uyRGZJyT35nxmJwACx9w9aoKGKNt4",
  "key12": "5bUP9QTEX722n7Uu7VBQjijwzPTKM3VDeGnVVshLZEqbv8pnNxTyTpNTXQYZiTtBZW9sYuhkKGTUKmCcKJwhcLeL",
  "key13": "5FZezzdD1jcdRQZkNuKmywCfeQmS34wSGmevV42NkXmdqEeXqez5uKaScMEFyvqQBkNNPVNEisw7gFVH5NSeL2QG",
  "key14": "XUeFXNsXnsK2MHKrfia66eERg2eeVx4gHzXR33qAYoUVkpX5JmPLsda7hCcmM58WXtevqh1gXckGDCwdeSjh9GG",
  "key15": "4VaQeEcu6PNRPu698oat16mo11W5HM2VvbhsPs56or8sEmLCoji1Y2tvHUn8WY6xRs1G2GwGXZoUTRUoGcZ62qNA",
  "key16": "4x4YuGw1N11kgLrSmCTM7Ux91dfF9YBdxbewR451RFoZ3RxsaKnbnhvhCtEmrK1aUq3ZFnCxVpBT5aSqsW59kLTy",
  "key17": "9QBADUYJh2qexiyREM62HCFbTzCcrKq1J4Ky7ZhFXo54xJcMjKXEFsPMjEffRs2Cd6Q67RXKXz3BTmpjGxeyEDc",
  "key18": "5wxE8tuaqyQdGExmzWzTsaizoFhPnNnUyNj384FxtUWQkupA6SKbXvneHGTurWXrnowpsfADF2gTxsTyD5fH8ApF",
  "key19": "4Ai8WpQY6iAGhHgqB97hGoLPwuJSPPLYY9Dau5a1vp1LQpPWSCULi44kTrfwLqkXzCQWu7jfjaHyvYhihXmUTJiB",
  "key20": "2BCBYVsyVbwYcCmQfdmN4ptgxddBKLqcq45ikzCpBeBWsfRSKuy3YcN6J9wb77U25g9M1AELRrPjQc4CcfTc8gPn",
  "key21": "5ZBBK71TJ5EGwcfzsB4SFqdk6dAyuC4gQsrWzy3KruAjophp4FFF3esu5FgCzsY6McErZ89XNqFc4JvXxgGVoZfR",
  "key22": "4bcBCBbZnD4eraqEmbgcYMKtMPxyfrDMDm9aNprgm5LiGpfp3CLguAbJWJGV7REe1oqXQGm5Cgwkhsn7NNzx2rcY",
  "key23": "45YmKDGF5KgvNDWBks1HbywC2vpwzhA2H12omjNyDa7YxiH45hZz1d1rz2ecwBayozqFP39T5Y6kGT9shgnfPFVt",
  "key24": "5Fxv7bKUf6T6nfeWL6KXdfzM5PATW4Kfq7zGXsd1VYPHLqXq3f9RARBPyRKgZ75aCrHCjHK4CLYEbtQ6rFo8ZjxF",
  "key25": "4gqELbWUkjpsPsn2KbESHZNHJFCE3HD5NPfqkQcSNu9yd2hJphZDARzChVBZVLN6stNGPN2mkAN2Ew2eH2LGwQhS",
  "key26": "3RQbCgMrJttyJrpRgarRxUWfni4GhTA4UCSnmr49gXFUaLiKw82yq73DTbwN9m6wy2DAafA7XeQUwvEkxgYBEKv4",
  "key27": "54oBvmRVFW9ggbjU7YdoJw1cdgnasoopgZ9n8mZB7zwLmY4Dd2ZRhtZGMc5wEryEuNRRo5RXrnyF5myvibKKaz6b",
  "key28": "5XUaZQxa41rrWHyfWaY7CWe67Dcb5efNjowfP9jHXy6agX3EWATBYrUuG89vvuJCjUkCxG564MqQTyE8JXK7viwK",
  "key29": "3i6rWkQH3UDAP1oz5iT6h26jhs1haaJFnEwe53svB5kzH9ptue5q8FdWpZo2wy2D2eRJBZsrTMxphy2ramLoAJ8P",
  "key30": "TZdvWiKG3JEW74vMx3eLDGEt7kWQkmgu1fKUvUSUMVBRqyST2T1R9cELtBSab11utvSrtJtimPsUKrzU2z5HAXP",
  "key31": "3gnSLWkdENVa3i86zzzjneAzU1EyK5gH7RzosxHEt4MKE7YJCMcaPDYsy3e5JZoz2nHfD625RpJxbfP5rsYS4AqS",
  "key32": "5q49YJgZKDpr9iGBd3xcbaFfinhDRrkq75qQKGEYQYMBeTY8kLG9crRs6Bp8r38ZnfcKGBjuQfs62ciAdpsjt1gB",
  "key33": "2eW9QWG232ZNsCgZpL1HsRs9E2x38GnE3UmpebiYqBQvgPS51qukXbvkHY2Pqf1rgcnQagPjUmSQ8VK71i86MVfe",
  "key34": "35CPsMpda7czzMVL5u37pcgFWN5Y7QLY46UBET3RnoBKmFSU1wtcDn44JosfF5PWAAVZCtqCrFT1wpA4gvngvZKh",
  "key35": "4kxxAGhPNTSYi7UcfBRyNzo7nLe9moKkuYNek4R2QZdCURfGGfeLEW4c6feUDCT3oLWFWPsAah7kF1uvwZ9fx47d",
  "key36": "44Ku2tcWFXU91W7si1cWi9XqyoEzPX8ExsKfRPeqyPbzVxkQLExcqzime9EbnM4o1maBYj83fjkAitbLtVCc8RHZ",
  "key37": "63CAwgsp5iSu5TsZ7RRXY8Vid987QKnWQZEQFJ8Gb7S4pDpqoi41W4atetwwyRMvCAVfEToKLSp5fBKsVMtHZTCW",
  "key38": "pDAkjwA671LD5zHHfLsrrUHXLJAos24XcTBcNotme51r6fnFwns7npndZ7XFwP17vKC8GZ1QbhTo1SndkT7K7vn",
  "key39": "3spwuo3rMwKfD4jAnYZh474QeuizWCNiYFfndhnuzuxZDt1HQdensaFJDP5kcjTdWyB34K7WoEzCdkJeTMcw7kiP",
  "key40": "2RkXCiuokCxoBeeLmouUSxyFSSuHyd3E67EqNk4WapvEWtPPVqTWnE9QryZsYzFpT2NyTuUA7r6Q5mqxASsJY41g",
  "key41": "4jKPMuXA1dYwP16fm29pSRAPFUJSGzv9pLEbdqF5uw7JFnqhCUqoDooNsmQLiKik1Ky7sXK6ARdEnoETxFik2zNM",
  "key42": "3UrKgHp4NVyQXfftjQFXWYw53GvSZWnCsqkLA2tniVoyyGJ6sq3hdWx25KsLFzeBQxXUdvYiQj5h7jK7rdJeMiAd",
  "key43": "2BUe9z6dkuoag97jtHQyPY64AerdsXddEAPyBkfS5hn81aR4sgrN1mpo3NdXN5FtNK8U6LdHWtiUziVYEmBcxeqJ",
  "key44": "4JKT28XXfHNXBeXF2t9UqiL7ELWAmAWyLbP9pvzu4hitVT4TRPijHZHVZBzcy3p6Uhj6Cgp3YrxvreG67QwUZtMH",
  "key45": "xq3XuVpp7eQxKzXF35ap85Fk3ygC8EfJHBKgcpc3hTRWYAMEafkrfq8LdZrdVJEULxJ4m9En81JqpmWFVbvJqwT"
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
