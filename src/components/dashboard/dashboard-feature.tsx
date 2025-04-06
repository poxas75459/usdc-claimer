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
    "5CG3owmd1K7uhW2eorxtJXA9MiMW88VDwjNFw3dFPJffKWygNcjT5EJyApJGExXdHTkbvE76DhghfAkY5CQdfvkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uVVKd3fyDcgdAHvXXcRZkJ9rFbJhQX54FiRkkuUTU6pEVRs7M5gm5SYeonmtAKNQDKNUhAdDVrAHLDieusb1B48",
  "key1": "BjcyZHaME5HfKG2uKEoZSFFwToP99NAFzqcsJ598LMdCNarMqdHcKb6QWK16X9yujYKkmfnPL3PSBBQw1c3KX1F",
  "key2": "63WK5TzT9cxXgp4KiacbD9QLavZGxoiYUVdJbWafwaiAXVXVPu3YCheouRJTqnX6491qDrWGu79x43JCnkuNsH1n",
  "key3": "QV3t4etwXYWy1jnMfCh3CYuKnXtE3KXgU1SCmJryPQgLfwg7FQDmEwwKfUj5HPA8gyLcgqpBFoWB2qeLrxkganZ",
  "key4": "38vvbVaQBa8MUPUpi8nWAW523FQzpbkXk9fU5ygJ1D3wWn37gRix3WqYmzFgjaXKACBSXpLbSLJ7cu9BYas3MdZ4",
  "key5": "2ajGE1JVwj9tuLoB3MATA7DTAYVBVPK7sd1Bsh1a77rmsV1GLy7A5ajaZuA693jkNdsv66rhvVN4Bh3nJvAod8Y9",
  "key6": "5eKfXiVoQ79mYGTmv94ymsZuw4YBq667GWjEPbzEoYf2vpZ49KKGqgJxPzfn5mHfUhURWVsuuy81hmYQfziqAHrv",
  "key7": "dtHjZWHvLSjjbacuyV8ASxfZpKhsnxmBNiAUCbFfXTDkWcokJPbbqaTiyVqmxx1QAzhA3DqKrkiJDwkBzvvTtbL",
  "key8": "3WTybgosdjaW4dwhWBcMz9ZefjyPPTSdV1gd3YCJvN5FZ73J87sjTrwhXJN74Dsgi64NW8HXjeBk3ddB5cmYjMhd",
  "key9": "2h3znnaztX5Nect1KFtU71xJWRJoyBAF2aGRWd1t3R9yaQW7XdV8j6kC9k8tvsPtjt8jhzLq92sE5YJwq1nmrixE",
  "key10": "2sgxrGXDdsT8T4Uh8AJU6KkAdX87MptXpBvnxkubPus1PKdNP19DZU5WGnXpBDgKV5gXYAJMC787Tz6otj4Wubz1",
  "key11": "3tx94KfbJfeQHkVyYHFYtXhePpn5QKmyyDQq6W7FFqxynNqzJryMZQ3jhFRMvWopAF1CaJd8VPWcS2wo89Bt4Mo6",
  "key12": "3yJtUDz9eQNW79fXoQtBAphVJLL3LPLcJwLKUmXhMqfym2qULHG8JXd8Z6sBmPbyWxDLWwe5D1ponuRqhCx27Unu",
  "key13": "5EAJSkd5E8Nq5MaAU1uNgAidkMJJpLNno14PQG6CqzucxmWveDuysrrWRvPpZkgJw3ChWnE7agPjcGVvGAd6EEkT",
  "key14": "2TLorXNP9aNDE5JKQ8KsDttaxoZPQ7HDkLud9jyAFGnH9wxJJMMXGqDryCejjBBpn7EYrmtHHJwsLVuYqzEt5DsW",
  "key15": "4DrfSmC4Mh1kn5qRJn5G9rh1UtZmc6ERTkpvhcP1SAcCjx44JCiLX6o5tHWbdL8JX3tcSx2BPwJetfa3YcLTJo2L",
  "key16": "2MVPMHftUvR63Jd9EwZbgmsusjY5mnoyDFVeVcAW84tPNW1J6qdgnAe52Qt8Vgv6rTjFZTmxPiVDRcm9uaN2mhyW",
  "key17": "3Lvu2vUgj1NcYxcvTAEhTv2Scybr4t9hm2ZdgufcAoYek7Bft732j1ohwamctfSHg7PFxEM1drgrGKigtpTC2ejV",
  "key18": "3HaPKCMFqzAYNsqWNP3tCdr769geteM4ft8speXVLMzmhCjj9ZCWGW34gCXxfXcs2Fz9nRBhk5ynqkaBvUfGyq7G",
  "key19": "2Cx7UyBZthsb3rjycrtWo17ygbpBJ5DaKs4vnrCcQUg134a4hjYp1uhzGsWUb4Ed15Xidemf4EfQsuCU1jvDtFMg",
  "key20": "47THU7dQavbASqxqU9LRoorV1ubvys8pTo8MqzHfHPjQkBMnBA9PFMdfcn5opaRsTuxz2ZcX3qiTnexw2mwYi8wj",
  "key21": "655XtR6pr7Gx2uuAtUB3HXuaKARdvAQY4A2oyTLiWm3FExP5YrjLBRGUxW3iUiF3aiUVmySnGej43cWS3gnjQ2vk",
  "key22": "53qHrCkJ6QCB2JpAgYxVNfoZeftZzUyLtaPLKB61zW6YnLXsJUNMs7SajinxomPmXrtfb8oEgZj317hFBcAnr3cJ",
  "key23": "2uQStopbJqpUXqYnZQCaRoeEm1vXyj3VwjhZ5Gooe7PpDoJXDUoc2BbkuM5CvSXS6A9UBkjhWafJqws8f9Yt3E7K",
  "key24": "5WyCqwZpV888KZzPyxb5QdZXVEcefQfrcaxdWYzf16JzYQJnfi1PWSho8jf3yhVDprzMgNi24jyqXe8itz9SJXFv",
  "key25": "3FnsNqo6nCRDojSPChCwxmKPkj2jDbFrjzncGp9L4Q5dfPVcy1KYGxVogGS9YRmzaYjzn3kLxyf3Cb7dRNGzmcH6",
  "key26": "4cEaCkTKaLsAtzcvTQtufGTU72orGoqFpCfVfBfzqmrs6fYL9onDTTXMso3RSMqNQhJvaipkiwYaCVAYtTrYgHdV",
  "key27": "FdGLZMf1TU7ZRQchye7YEGWzwRuoJKWD6GBVmr3e8qZUJjXqkRK21XCzoRBb1JFckzzNpxf3C2QtDFXgUBTgPUE",
  "key28": "5anJj67bEjTqvqcVFNNt8FnRcQf4i967Vaz2jnvVU4UxesPJPe7og2YeskjFks553TojEwNSj9HCR3sRpcKhCxAn",
  "key29": "MF39kihj5AAEpd4bBi4S1F8fWbJ8eFbo1ZGz3jZtTNBwekxjPyzdBPmn43kPpHHV6i7YHEBYTo9q7HciysfRaBF",
  "key30": "4qfCS2BsFbFCuyduhh4A38EK4euheB8oFSuu3BgGuzADJaFTgNMzZhneCuKWoTb1xKRs8gCkbB4yhkMHb3g4G3nS",
  "key31": "4mnJLMKaZdKr1DsJSqC3w27o94Kn2VSzG8gotodpxSZKXfDoPQqJx7bQfSR5gBobz6zWoXriueUxTE8XsPDT4iQY",
  "key32": "25UAHxHsWg4S8jvJnKkK24cBTVfaANuLFAV4eGy83VJF4ctQBawERPW8wmnp7oc8mRVvknorWqYrU1HYgPEbAtsp",
  "key33": "3aUbWX4HXeoasNF24a2qhk3b5GKtzXoiLEu6RaD8Bs9EaWuc5mWhCHdhgKfkrwMvAShVPWhTSPobCYzEcUvwBpAB"
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
