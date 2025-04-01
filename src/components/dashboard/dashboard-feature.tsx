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
    "5vJSdTmd5NfNE3o1y8qLcnkhToHaRpdmoRLegsgQ9rLX75sh3CXUxLkg4aps8S9ZFRzbkHQVH33h2UTEwk7qzkFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H5Vg9rG4NpaD49d5ahgzHs2rHRRhYp5mdVUXVtwqe3SHtW77koNz2eWby9uuC7XGjFdB1MVp8MhLxc7Qji8qtKU",
  "key1": "38TPWxXy8ifHXVhFZTWukwADFpkZ6Koy1jaeWFBdKK5ztbHtxozFTXk57n3z5jZ6K8gxnJdmvAfTYQhEhAvjGksX",
  "key2": "8Gvk5itE8A3JxrZvzuAAs6A4wsD2Va5wFFoceMR5K8jZ6Wykh1dgVzRVR1W7gbRUqmQPpZeUVvpd8ehuRuQe5J6",
  "key3": "5h61bP661iwNwC4faAtzJaXbhRBjxLKm3BXW1ssbohpRhNkU5DxH3U4BksEjiczYxn8U4wQDFVVzWLJXVNFq9ivr",
  "key4": "5MCsEsjqY7EXpQWibbHgmyVzJh7Hab9sTyRvBCTNgbLKe1TazYWdiAcjsW3VdwhcRNSsVwri1QcucnFmMhTp2MLr",
  "key5": "2szoHYZ2hK9FehXVKEADdo6wnAZ24qgW6RjAbspNHwLbjHzAbJjSxbhy1gvYC9XRvqm5i2NzUQANAcVXW5QoRGyH",
  "key6": "2mE2WagNfr3ZkXtNy6mrFQAPfa71ZmoEM8qghqJSykRu9mLh2DbsoRAv3QD4tsg6u7L4ReL3MaiVMB4VKW32cjEw",
  "key7": "iWNuGNYc4mrkd5hpopzhvvATjQcEqPj9XasMAR335wb3yRYMNFYstPwcUuow54id6m9AYntvmanwEoByDdtcGhY",
  "key8": "2E87Btb5gLCaAsvHhRBEkNDTAuizD9Sm4fwSEQMiTezkM3hZaXo2o4EK9gsDHL2TjDFrwUwZeyjpiVDgFhRfSRUC",
  "key9": "31SMM5DkZ32kEYd9rtUCvdES5fZGwqF7oCmGnCST6K3VAYgk4dR1RcheGymHyTwUYCyrQtCeyGAA6yC6QKJ8EXWw",
  "key10": "3GhWsqUtvsZB4Y4XQDW1dLdC6HpPGAwdLWmApi9usqfR3WqbgDnnzgzuUVt9TUzrS6bH9stpk7srUpQLVqw9MdBM",
  "key11": "xnrhgvLJYGp8RV9NZCffz48jJ5gsHRBDCg6XVH2garpWADGQjtvBKkH9b3a71LFyLhpvPG88uukowj7t1tkTHKX",
  "key12": "4qo8JjmBSihbBN3pmSKcVSBm6rbjpXw4Wn6G6FQSxLKqVzry1BGXS7iaJVKke7S9UZ953vUvrw7WtTcGWi86xayT",
  "key13": "TDoLoaxKsrs2BJv7coNqZQHqFRudXGqkrstCUL5fCFvk7NdeBDvb9Ghr4gW1Y355VADJrCLTz6VE5AA81s7asoA",
  "key14": "52jXvMzgYarku4FiEE5dHEp5VVufyz6CWRT6RXG6nEzvVtRfs8u5xoJjQhspJpmFEbZUUWBMNg1HdpWXgFNFGbQV",
  "key15": "4iWChfL3t44eDDvbAxGENZDw9XpzXEwxzxMo3dijna3rF3C5CqUxYgnxXsEw4e7jxKLJM2VFRftxnDJoSsfitxCp",
  "key16": "4ateD2wJfyKABeRmBVfYQRVJJQ7oxrqhZp3BAKd4fYkQ9CwGHUqmRoR5PVEpG6noiBANBEfkJ25uaSm12HZzsCJU",
  "key17": "3K3tMNkBSnCoaBdYfgsQZV1ezyhxce4TTmTQzDYcmJfwtTLdKcVqxXnS44ok9woMRfmXZcepAZVkciK5kC1PFSi4",
  "key18": "4UtdC6cUjJQJxmA8CZdcMiZUgKkRJwDnn56jQJmchQKckjVyGc1c6JezwyRgrZAyfJUo9hWVN3X5guefygdXzDfF",
  "key19": "4DjNHZtuUUpqG1Zp9rsig7XvQ4wJgQkKYzL2Z3vddYJFPTuQf9uFqrS8ZycgLBUvwnR28Sm9iFFqEszenMiqRt2o",
  "key20": "5gRpYRBdH6S5PTUrrgfNhrEGsiZfV22QZmjXMP8wthgncu8q3xXddLCXNSriP7A8AbetARRbgaVMT6QNfo5S53YT",
  "key21": "3RRDR3u4FTKg1PJXHcBeJwMrTnUdxkaM75H11WZ5n8Q1V1oxPT14C8KZS2HHkDNxXtCHSmmSufd8pWXunuGPyGDp",
  "key22": "39HzUgYZLdiGv8oQKsKrgqSYSNi2uLP1aT58pSZbNrrerFm7yBBgiMwLWND4B4BmfVp89F8zDAkJcQf1otZjVPJN",
  "key23": "2GFHVdCS1WVkhhHnf72ANeJd73hxMpbc9Zcz9BbAD589XAqM9t3nNbZM1vaLBungSvPLVd23rUbZdNzRouw3Adyi",
  "key24": "qTPK6ZBUjUFUJkKupyXcbQ9cKVBUqW4d2c7S24ffQztbZoEsyQrBcQy7fB4N6v3UY5gr1RVVBokDJRZYmPR7WYn",
  "key25": "5er3dFH1KQvVTuAmyMUmThHQ69xCZqBKM8s2n9LvHQt5ZH3ckaLSN7SCRJfHnf5zg3SgpumC1YARHGSP2cJSSCjd",
  "key26": "Nt2sioYMLkQk5RYkWQ4bhT7NVciJVRYxqTro5dmNe8shjHSt6cevuQbH3BeHfShR29x335WWwk6M288dzuHtAcw",
  "key27": "ZFrGq7a8nfqnHf9PRHqf2jHY6tvswDHdDs5tn7WHkcULMQyDCXLujihUmn36RLMfhVY1g5pZecxcdYhpmG3ZVBc",
  "key28": "zbGXoM4TZJqBW9iNwJP8wKiC6PAoBePVVXStaamtFmhRx8y36JRLXQ27E8m51PnXNnkSeMtDXLC6N7ZTLzVRcLE",
  "key29": "24d8uH7jtijVhRjCKz2ovzPvPqTwA686v9sP54sM4nsXMBLeKhqKD1UNyBgdWhcu1CHAAkWcqAgXHgjrVkXutHWN",
  "key30": "RPQfjyewrfKLefxFww2TJZsqpjDazZPGfYHsAkkZQHpttZMwsCqavmymwJEJepskAAirudxqH64SR9Lx85TDpwq",
  "key31": "k3euL7VeER8zuwPwE8kNRMpNTUdocAwcvFusyx3rjnVf85raEYkRiZw6cUKavSn1Fca89rGPKMwCNxC9dqDzZPY"
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
