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
    "5ytjkoGh5P3QRiJFVKVhKQUeewDY2sMgzSubUJRsXmdQ7ZYSqth2qEajdpaJouRonC5Q5jzobwncFkDP7PKi4qBT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iBtnZGQtTDHfSwLcv2b6N8UDZjtub3dk2cmfeTnocWEMVNN2NAT7FZ4d1SXamGujYejdz12M2iseMF8PstA6Qxy",
  "key1": "33XV49J6dgLduSwQj3aCT8fqfbCtCoA5CXqC9Tk2WRQNdDZYC63vfdNzjf4DHU9FFqstgQatKM2NiH8GMZJ8SEGR",
  "key2": "522y9y1tvgL5DnzU3zYVZ4ijh6NniYSzP8WovR7hpsQxAkycaAnt6K6QJ8Sybj75NjH6XvRp9xu9b5qAwGAMjWb9",
  "key3": "eZzpcyUZFqMehm4pVc7EVN8fG1kKAMZiH3U3JH3V3BiQ9SaoUEkDqJqeSnfswikyKTBCuncJwwPy4Q6FaE9UWAi",
  "key4": "2rP7VuBs9EibcvBPjFhFTazjJxQzx7FbVFj78L69yxjGWkGswUp6BSfT6ZC7hXhA5xH6hWwUECGjYn79zTPafdmz",
  "key5": "4bnmRSpJxDGt1MfSQyZ65F1SdvJ3PRvGzzBvSApAW1ixNQmyxVobRwA9c3C7Z1QgqwVjyWGDqoN7vwtVN7ePLTGn",
  "key6": "2Rceb2VyfzNeYEwFsmeNW1EXWnjxSsXjJZP4kCios13EXLeCfqjHcfdshkofihpWRCGXpkEDGWE291beBfjUgVS",
  "key7": "sj6RC517pU3ZVyX7bEVt6fRqxYzSfykurX6zPaDQYY1An77mxj9vcsy6SFDPcyaM7JcA23VUYfc77LXwwXta63g",
  "key8": "3G3iZb4JDMj2h2gQT2LkX1Ljo7a1tg4C9uYopX7eyZJ2aWVw1HmqgbDoGjMnUSxnVo8Jqgrxq69vmh827v9xUnZ2",
  "key9": "3YY9XAoy1DewWb4GJYzFHkLcPexC7TS4CYhnCsC8tb9kxbbBfvkv4pfF8rrkePxLp9BEcLaJbUkmrVXpwe9nq7tM",
  "key10": "2wa6EEHAKRXSxDu7r3RoL9hp7TzuTKQcAkF3h2cXaRKzWktLG4zvdtmDJvP9yvbnqSoXwxcrBCSnQEnNWtVmKcKv",
  "key11": "4GBLGqPkvqrHnQx11EEB6wZXWj5r1E5gakyw6v5dxZaqpzHZtggQNYV9gGvQnNiHwPstvvhyqhXGw7u7BYSm5mtP",
  "key12": "3dUhmg215CJMrfq7ayxmSfDCj1br6v7TojzYvfnm34o9ZuKM2s3MXETrjSqFxgxp1SfG7k4iJZZc7mANFcc8ZgcJ",
  "key13": "5azp3KSRNh9av9jf2DHMcjfKsQZDq6WVwmi91bN7Fnw7hL6TSqcR6hhssQonTVe2mPUDHdVVw3SuM4grdVpWB3Rh",
  "key14": "43fLb3mSx8XpxN94Jnc7KXLCsyPQa5k9HMt4agdKxPrrjVQv4zHGxHuTLRYrjcwwr5UmBgp7wxF1ogxcv65LPcJW",
  "key15": "5dSmQCr5vy45jqZbdzuXicP7fYzoBe8mBfezECJC5w6ZdvJdvaHhEyQ3nXfyhZSjiVpjf7XydyavhC8q52v2WLZe",
  "key16": "1kY8qKNqfXdLmmkKQqdSBT6C7VYP69Sc9cNvH4SpkYWgacuCuGx7B9nSoL2cyCsdZwXzeD77cQ1Ygwd4XqwpFXf",
  "key17": "3LgdjihwrGwTPmgotcVEvnRQmMx11SKzE19JnmVD1pfgzBtzuMb1AtSkS8QghMDKr38KGpDY7tJLceBaf8S8beMt",
  "key18": "54YnMuw7tGZKjsPQtQf43dKxZZZPdSxtRbtnModFR9AbDpzW3a93KaYEcJnhcPKn7pFL3eEeYNTxSrCVbfRBapHU",
  "key19": "5eHSFynpLY4Y8wCmFTqNc2UTqt2UPkcsDAh7QzsRKAvSpKx7AkfonNeuK5xurdkerBRZmvZU1B2bf84QciFZAtzk",
  "key20": "39gJEXW4ULMzCEuKw5XSugBPtjcz4qVe4fs8jngvngMUd7tzV1yybvgas6Vpe1HaBVJaakycKLLb3SJekz3w7XPk",
  "key21": "nCp1qqgvMD7E32hkQj6kAVqYgedsy1QppgsXKYWbqfHPYM3kpgaZvovk3UvLbinEQXaBqcp376GxLkjZLsK4S42",
  "key22": "sf2ebs6w9Kc6CGpnSH9vCd57Fv6EqK2FofWMxWAstnphpiwFEBTNrAUt4Y3Q1ffFbj6XyLXKB4Wyu22MZbHGYau",
  "key23": "571xqUsLUSPJseNZyYJ3k63BW6QxEYBDkPKnKzDP3EPUQsjRw3NUfGEv5n1LWaTWvmz4fm7ebxUaEKzNJB5cCghi",
  "key24": "5LqxiJYL3hJPfe53Z4VTfHYyLgKenUySeHdCmzVaZ6R6SHRivbM7jXZEykzz9onStu5MChstR5j2X2C9tLzCCF4w",
  "key25": "ceqWJYLk8uJhKYiNmHa8M9UCwKk8TUmY5AvRoK88pkeVNKcKBQg7EBTy3xZAg6Q8QVy147TiLwtCzcDzeGVL8uJ",
  "key26": "3dEqxvDEgyWaPNiyRUWx1RaGiJd1NVZf3HPLFn9FkVwhiymeHUgDaQGMnYdVGAj9osjWhAhsobDd6yiJXkEid2RZ",
  "key27": "5q9RzSBTLWB4Xak6Nu5ZpoZKSM8QNCLyCfnWBv7gDBxYN97CSsVdZKmWaBX2ooBatDvC1zNYBXgKUkF7iU9JDFWM",
  "key28": "2HNhhBUgRhtaa6Qj3ZycaViuvksyk3QKoGGrT6fLqrZYcXXoo85Zc7kfa5Z4dmFdyrE7VDpxbHEsvKnfPDeZBVGE",
  "key29": "3mxkvBS4BALgK86hFFaMacjquuz1jUyfJfN3UeiNap1NuXuy3HaqqSXXZBh7g4U2JWj8kLdgApDj4iVbgda3jVbR",
  "key30": "5ypg6YUCtcF5qU6XLoQfWufXjdLgamERvC3dduNp1oQZU81DwTZLM1tPw19svdYiQ2nEdTWUSXPajY5PBnTuNauf",
  "key31": "56NHpzZXiVCECYCsaMuhKQRVWgSBaRG33k8AkLAEpvcVfRzFh7eq7562YdhsMxbJ5D2CXZv6GwD65pcQ9SP5b2Mf"
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
