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
    "5XqxX7HGuEb82ncC5n2J3jDEWhJvbE5sJ4wB9pdSFfoBzvViWHd7TckZp8smtJ9LCLMDonAeysG3g1zx7SD11EHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQGKwVrWW6UeBNcYmjqEpqLR7as9t9bb81HGKEyf11Udu3io4azhaZcfegUGXmPaGzrqHSbMRByH3tR6Yu8PhaR",
  "key1": "p9EmNw1NsPXhtdYE3dVDtfQNnjLj6mVBeC5uSmjJAKSarCCpPi9e5gsb5eQGGZaw5teTfsBHicK6juVCiRgeW3w",
  "key2": "mU4yx8ZgxiuTRuh2KizDsj9myYzbxAmsr9683L2kFcenG2NpHwWKiuG4E9MsUU3YiYf3X96wG8FaGPHnFn1bQnT",
  "key3": "3QidgBz2WJdEK4JEyLwBUUkQbA5GZ5FmNbVJAryTDiVQEmUiaAXSzD11pjUBUQrgWn8zLaZX7gr6LgwYDBJMpbyV",
  "key4": "3s3cT1HcNqm79P9w9rR7K7SjqS3npJZVsUpAbuHxzz19btNi8nWwEpujn4VyJFBfKQ87udEu7tsCYRBec87nt38c",
  "key5": "4EgtZCn8dexYiLiaDqs73v8edxXJ5gQsV5axgaF2q2BULRK4AL3SAZuV1M3Wjus8JAmEzvCUMu4UiQ9Y7wy7EXh2",
  "key6": "uFbCKrA5kNuxSsNvFxYjxPTZqtqfb1tyjLpKa6c72wavWkHJgXaic9A53p556gZUgzRRiXdL66AA9idTMtyJjVo",
  "key7": "sB54pbxepNiPwUZRieSq4yWrfMxESLTt3EpzSkvo4nNodZf8uLdbfdnpZMSVAYSWDY3JKeLyuTKT7qid26XYNVQ",
  "key8": "5HxCEK8JWC712NF1BnMept6ooZ2BYGPMntENEKiwk7tV9GGhk1yhZNyt9ds8szKnFV3PXP85vAGVVuqiH15joQhr",
  "key9": "5siB15UpE7jnRcvsnAVSGRje6ubjtC3L1UKSR1t7mr2SnMEGqQKw2oMmHMtQjW6m5X4wxXKje7UCUL1LBCVzi8PL",
  "key10": "B8BRxzJF1k7DKMjGZzuCzqhxQRGRzNv4QVa7y68SCQ8CdsAeMpXmtvCYCTszZSsonjxnTqZAX5nX5BZfaTkteUw",
  "key11": "39fDMo2A8zSDhEKxfafkLXGsPirqKJCvcMTQTNdg26ZEaN3QuV3d7PV39cv8SiLE9ehnm3cjFmn5RQYVpWtqUQBX",
  "key12": "4Xbw2KjnLFhHokCV6PP92oEmBpHzkA4EEdCkHwCLYt8hmRsfkgDKE5ugNDixzbUpf9LdKXLqrdT17dHJXmA1oqpG",
  "key13": "4CEHcpKwF6oQ7TfZP7VhvtUiHrwSZ7RTAgwiwzYxM57rEJ2HYdxUjTgzujJUJcT1TMYBzfUxcK2M5L9dE5ix8EPw",
  "key14": "uxJcn9NR7E2MC3bU6fcT5v2JLFDoMNNikbEkmQ7ULB939DoruNRrKCFyUWhJqPXPViA6arQm5Yykkkuh7xcbUJE",
  "key15": "2bfTMFTyvFVJUb37StLQuAHQZRpgj7KWXPWvFTNT8D2QZ6kPz7avXpoL4uwWq31QbfiGExhHkfJeEC5dHPHDqw7R",
  "key16": "45MKzhBwzCKsLo24P5ns3FBAM2a9NNyhiBhdNVjvnkDrRHVNwyLnUfZN762gG7AB3bivcuY3ZL8m2rpcZjL82mWd",
  "key17": "2wxNuFxosXwQfFR75NKymMG3rVhAkWwpLotCfjwcVSnTEsJcXy3e3pUN3Qpx7zHSQn5UtUVnizqSFEqnYFUjwWHd",
  "key18": "32TyaoqbeZ7aKTReMCaHRCDLDVYHYTHz8XHmphYgkb9yvy1jLvfv7hAwCGHTpggSyzyHzqwhYcbPXhFkgwFuU1ao",
  "key19": "5ufdrceLZVkYfYzocyZhhSMBDyLmZh7rfMRLZggXU39Dqahb34TGhCo7GwxyVakb2SUiV4ati5YwUqsqvGVhSheL",
  "key20": "3rMB7cv6YoDXtdmHpCPbuRho2h6Zzu2KS5UTyh1ctUYxvZUoRC5cQ6GbRp81v8PoMKsFgHy2PUqT36QiGDpcEfAw",
  "key21": "3FsssC7zmvsTGSCsLvfdw9WZd6RFWdByCE92t16rKj7csDq6ZgdSrqukXWMHuBXbtFUJur9JBBR9r1okoJMHxvXp",
  "key22": "39QrSVigVFpeC8nFzjexZ8NhUaemfV65yZtvEdS4Wj4AFhnTr6mZ12pFTbMPX3s1XwbWjKgAsP8nH1y6TVAfXc5R",
  "key23": "4RE4G1aivokzeMwFT9WDoeEaZmWbVdVQWpF5kpM2p8SYs3aoEUKHvj8jRV7RfcGo3iVY8oP3aL3nXSGzMd3Yf5c6",
  "key24": "atjCQY8ZBWGRoRQGDZTTap996ru4SiRfDpJgNRfQKUbKNv3VhNR666pLHcNeRSvA5w7nhjrdPAHr84tZGosDfPc",
  "key25": "57hn9bQeiZzLsRKUDXzVPoPWsDigtmcXADqPEoFCyNxSQ9fgCDkBYGCRHun1gFfkSLsGybzAUTMtDrAitNMFu4oC",
  "key26": "3hA3GiBYBKQj4A2sDwBwFczKyNvinqxmfPWpoJLwC11iTHRQDETquTCiJBTUWDvcw1Y1C25KcGJZ5d5yziwzZ1PY",
  "key27": "2MCYbdD7XZ733uGPJtWeF81X1KXUQqUmE9hPEFagsndy4gapD3daF4FT9nZTkuX3G3Lr3YLJ3P7PkYp42JhnTD64",
  "key28": "4faJUru7rmvjSvfWT1sSKdkjEodxviMNThMSZWSVMF129ocvjaCahjQRhSuVj4kjz8cuofufRDPKbupmz8qjmPAM",
  "key29": "5ArkStcWJndpyvSnursCk4HWT8VsJwGnqJVfhwiJUvrBBgnA69MWkvQFiz4dr2SNspK8JfdZLgQRK6ao1AvWHhHT",
  "key30": "qJpVSHUsh3otF3wpR5fGwxgHgeMusYGDEyUS4p5p8RFrsSF9hPMwAW25PUp3EY4fME2y6kbNLEvhEjaekp4Ps9G",
  "key31": "3CuCB1WjGJVB8MTvs37Mr8WefHTNdyZDzRx32BeZ52bsmJMddzM8pRWktfpFXPTBKsKypmgCLLZjepn6mvZmXS37",
  "key32": "51H8HyN5tNp22BMMENgCCxrbiHuAMRsLRU8CzDv84r3Yub15GykeqQziVjjVC2UTvt4WXX4y6LoJausvPohScyzZ",
  "key33": "fcrM9oGgk7xXTK8DjNvefVm5rjKneqir9u9ZvKg9Z8E5zVsYe8B36AXiM3KfVwK2kwKq7PZhLWWXqL9NrFtQZy6",
  "key34": "3TvKtQ5T91RD9sYaCKN3ioCuCS6pq89TnWsx8dCWfvd6Uam2KEgw2x8QuVQzJ4EuSuZfwhhs8M5kKNa9qYLLxUB6"
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
