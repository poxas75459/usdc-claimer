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
    "62byG28K9Kgu8RUvRxAASNWUPtsYd41WnJZ6Wzrqs4m4ZRTZkwFW1Lo9aW9ho4esSHXmuYoAMKrVu3SF8aeqDxpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mWvKFmDnzAsxs4pDd6h26ySNvzaCupFhz3Y5ZW1UYbiBU9wyeKTj4aZFsLoZGb8fRDJ2ULCZhrBEzYX83bnCfYR",
  "key1": "5ZNUknYokSkxsKacatctQ3w3pirXTo7647g5RtvuXhgoXDrF2koE5ocpjwXhMEpVn6DqkjT2T7bebvxHt134t7FL",
  "key2": "4Mzx7QPwke8ZREWNuyXaMqAJnJB4SezovuET4bKyxm2uVxJNQtJLoPKCqs4wiFB1PkK28NDHjaua4GDTS68GarGb",
  "key3": "vv3acW4tU73gWthNRZnSQp9w84vEZZQkgHTBgx1NJLsQ1icCAerPfBedYvUNA8dDuE3ysXp7gpsAFgbZYZ8zYQr",
  "key4": "2v4BnDvvBCkJs84jPr6r3vxbRjNVioioWqjYEaiRKq48d9fP9xYMfxCMoFB7JW9USJmZtoV8YfxJ1FMMcCpE9uwR",
  "key5": "2PXM8U4WX5LXGTeNahu9JxiMop3XrvSRWMVa8Fgx4y3gRwAKYNvY78dHAhpnMQwWiq4u3ahFZ9dzXi2ntZxAZqdj",
  "key6": "2F7wy7DCw1Qik71iZX4DuHsFbKtTncUCdZF2HA1ZF71eatFYy16FFhN3DNnvVGL3jQFWk5j57e3UxhpnExnTKNV7",
  "key7": "62ExEHSf9S36Kmjzwsx4XJDU9D6EfHP2UyCqQxbZZ4QXXXUVyymfYgHpwpfK4XkUcR4EYVCmg1gJgKkk4PjgUskf",
  "key8": "4Y24uztWBuSFu8mdra2M5TkFdiXvmAHGaaWnG5nPQQBFRVZRWVTe1Si14mY3qXw4ZvtBY6tEpjMGoVjd1YbovpWZ",
  "key9": "zvUweoPznKAcLNTEWH42bJzbpTh4YiHHyJ8aCnnKu1tYhaSQeN3dXeQsSbFX3ktxAY3AZqhkKn4SpXN7Shsj8U6",
  "key10": "5u4WAG2j9XPz3aq8JeJDkTBpSyXhTgJNKcd6NPnbrfjSQHJPcu2DPUFoKucAbF8VxHAJwFL3B81kMvPThF9EBtdu",
  "key11": "2CpcmfDZJKth7NCLvxB5gTyYtzShczba4tJfPEAivCVLDjBEPeY8yuN8s19fve1ckopws5D1mJAzfRst6fBkKtK4",
  "key12": "2tMwhMSdajzaEhSTwm5637qzmTEiCRzLWGPeg6oiKhSRZM1qjXC2xhpqEJ9wEVUwfYaB9S6Tuowid1MxG2twpKTR",
  "key13": "282nwBNs62xw6rHhcc8qq7juvqEadLwiSW1mTZMzdNRizjyLUQRkQceBd11rYtUumZsEkwDGFdLPatVQds2AfR3i",
  "key14": "2nyqb7YJa8cpSu3m3SGYYW7yuvHaJDrYypJLbqA7JDwFwcYt8NuuWG8Ejudy5X5EsiyDZkbUNuGoreuYSruLk5UX",
  "key15": "4EecqeTtAPLdCoYnnyrdetETQ9CPJqKLxuEMeWcgjKAwek7H7zS9WH2jwe27c5fX8sygXaQy15kCZmReQ1sGSBoZ",
  "key16": "2w4B9Vhm6oxRVJi8KUCjbRQcwG4LVbMZ2CeVJddWs7E9uUYNDNiVPQcpqjtiesrA416JYBC5goUW3Ngo2HdLV8wJ",
  "key17": "awpVUZ1WT5epR5aTeeX99vrsCcVsfqhm3cKo1rtBvo4dfSgKUTFbNouBLiM95RmYdaWYxQu6a7E1wiBT6iRxHZV",
  "key18": "4ERgG2iJFt3skSUaPF7DRpSCmayvzQbRd14cY9aDduxGfVSmNV2DXPUPYvSwfWsAzrYc77aA4T4gT9oeucqKETUf",
  "key19": "56cqB47XQvEyaWEYqVWnZikDBCmx1zUdqBryfta8k1h2pAx87P3ZyLgntQKVkEmQ5HXiYHeMUWXPCUU77wZFVPgq",
  "key20": "2PNgSLKGm6gL4gkearpxax2TLCVMdeinvDc6FLZs2X8TF4XwWZ854fiCVGSZ2Xur9XqB2itXypK9DTqsmP2FxYmf",
  "key21": "s2qSbQa3Ym7MLdWS5gZ2hWR2hQzDczZZAvjBPECQNfPvfKx2jHJbMLCg1daaPAskrpCrN3rc7EAbZ5dQxD999cd",
  "key22": "2BiZgqGNfzLEShPEmKJg4BhTQkG7TgrSWW7EgWU7yfcN9kkRkSrzpW9gy37jrCX8uhYKC3JQoj9eGWLxeYfYsjX1",
  "key23": "2F2Vq2XqfQSVPwehTdgPdBo9t6ytDWTc7fcwzGUHDvCqQWaDzm1bBX1BGfiJL3xuQs9z6xfLWmw2zLqx5dFt1Gs5",
  "key24": "29X9VyS6s791bU2YYgZDnwPMHxAKaUeNFNN2ScLkVYF8YZs41b12vgXbcR9TrqfgUiWQptCWcWz9Jkq5TvieABTF",
  "key25": "Khr5zKyxLNXsU3HutpWBYRd5hqK569niBgB7NvMwu5xWukgHUhc9iXbQipwsmnWEubEyLedGTci6vBbQ5iH99v7",
  "key26": "4EFTH4iDoGjsbgT8G94pB9Vng6JXEWfcdAmrYZsiqcZet3VZFRMWSepoNwJpqnhV7oL3h3M9YWsiLmY9bjLggGKU",
  "key27": "48bcimf6bENth75f2WVn49fqe6LdnVK6YN4CeLyAQf1HPKPrNwwqSPiFpCfcc7MrLringQ1HKrtq1BSZ3za1YEeF",
  "key28": "3pZYcwGS5DeM65wuSWG7pjCdXXwPz7HXnsAu2Tt5EcBnSiuZpj85PonvXAkf7ouhVxRYxU1WQZmXVFYz9dka94C5",
  "key29": "2e3ysbWdD4dD6EDMLKD75Yb3NAENNV1Tgoc6b1MXR1gS7Net34ztWkp1mBdRLWfveXFgcVznH7qrR7eyzRjXkr6u",
  "key30": "2Mex3zEagLxRVEwbEkA6ghdAjLgfBM5g1eHfBZaVLW81iEErfMGX9ANF3SQhtsMEyFjcySSpPgocgGyZmjrnKACL",
  "key31": "65dMCBGTTWbuGYoijNYBcDvdqxA3Z8De5rrMfFgChwYU77AgRaayBpxHycgWv27w8jEUE3fDc8ycj7K3mpFXUCDH",
  "key32": "UwZdPiKUs9vC9M7QruGtnFfPgHawJPKmNSXfZinNMpzQ1cXmMtsaVbPpqRwQUHUPsoxm9cS48QNwMkJUCe2xpAE",
  "key33": "zkE6ApYw3xQPaF8hXQ51qifhbYA5a7dcjbCMjxuWtgtktQ5SwNoKQAmnPos91gWZmJgHpX6Coy6jVvLNpZo6jZV",
  "key34": "49EohCZEZjQgemYGvkkPfs6NtMih7SrxuLhnoDp7YyVbX66fU2YsoiKR1SkLQA2DDU1AjsfvuLYbnsfCKyEMMS1m",
  "key35": "27WV4tdyDhjw2W6WbAHc9965axbzMdH7GVtATmyx5aniy1eacPkwo3hViNs5yLmqs48JwPUHgaNDaYjXNaAFHhH1",
  "key36": "45vxvfHupesb9ns1bQVBSQWtxmEbLNzg9ohkn35JLsXBBkgUMs5663R2oGYdrVRo5jqe9ufwt91Ms21EYDP5o5m5",
  "key37": "4eu8dmzwCn3ffH6kdvy6thY2uDbMKPo7qL364zJ6y5GQpYxSGEiQdabfsYkaKjNcP9GDGTjkV4t5KeNjytUA1JAS",
  "key38": "3St9NBy5fU26f7kUrm93pK7LYQj9mo7M1EhSM6bTj7zERbJFFG79txeDxAiYC5nxAJCY3113NhYEbXJBuMXZJjsN",
  "key39": "63tpPRFsKaqM8JaNGnPFEY8Fipn161TEZhRtDK9kdjWfjUixi6kEE6uvwgEoUyKKiah4mLUViyrm7WeXh6Cbr9yc",
  "key40": "3hhM3JrrmfHWjrDeiadCCNXjZ5beFx9cmRLua6GHD98pLYAjxxMy87tMh4rjsKHNW1Qh793A3o3LosTveLXB9YVu"
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
