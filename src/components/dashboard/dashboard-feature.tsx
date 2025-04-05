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
    "2rDy29cQd9Q5A3CiuNoMD2HbRsY5w3qDQjGuVubqKFg7NVm9v6Vprv576d8mkszx5PKypZ4nvr4vZNkeZakVTv5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rNiczJG1MjmG6Q5kButnkdmWWmXvS2DePy5YXTpMQnAkq1cpQv3M87AtjD21pmdY5jqKww1hw3owqBDzZ6opuB1",
  "key1": "5NzCyyFtrgjrcR58Y6u2wLKhmm7y6L9tLaxKxz98Fxhbp2MwFgDhJ3cgvUrsbcfSJL2CFydFXzzim2QnsPBgvJNk",
  "key2": "5kmHFSEKNXWRgYUFb7E1DwDR4vmCYeyMquFtxPB5DU7jnd5jX6UdXc4Uq4TG672m1Z2QWqpDx7S1DXZDGkg7GTZs",
  "key3": "2S6CwwW34EKfbbrGv8jDvMtuN2pPBHmneAfY43EUzYszxtVXVfY2cYGkAqzrtby2rXr9Ec65uGVwXpMiR5bR5fsf",
  "key4": "3YnhKbyBtbLwnVMmRsX8HZMraAx7Y1JjSgafWnnbA9eX3VjV12t4J8p5HzwfupoSbiPFYYjCRvwrWpeBcjNkQ9FU",
  "key5": "41zU2tNEnsFXP37KEZXdzwutz2fSJLjjd1Rdf1JUw8NaVtwnAZKyZvcsW2LS85vFDBQTArYFmx3oy4coEEHDAhGr",
  "key6": "pg63MuSbf2qWoncYFsBUNkuXTdaEr2Tmw8tcrU2Va6cpbYswHbc8xy7Stjx6zJeF2ZMp5ALDrrRxPHpWRjVPm8o",
  "key7": "31UcCfJjSZL5ebNWMhfdXhTJT45jZFNbv7JE3MEUjBFSvJaDNRtKg5NMAPEvktoF3FQmJX76Ax1PBYSiPM5DcCBJ",
  "key8": "39q3CwLP6X1Daa2j4pF4CauTXUm5nGs3zaQhYURbbroM5ojhkwY8YytWGznnntGUxAcU6VPCrNNaWiSwniADMW4j",
  "key9": "5ynPtqqq6ZJosXtcNA2sNqwhgzQuGKeWmtxiJTUmah6LcePfKA234yWNifAdDyiTF6URFJX5kVvxLoNd61v4Vf1q",
  "key10": "2MVyLwYom7jkCZVHwj4zmictMmqBrtEogfcWVZUhnm7W93Ljxj6t32wXgw3mMxMvGhWb3oqQtkDZphJtnvekkBVt",
  "key11": "2pvZeBXe1Qb9dtqNv5XorZ3AEj71tMKcFRMvE3z45d11bcBL3Wg7JQuVimFgbvFT7QW7nP213tE53Mdj1vFxgh2H",
  "key12": "3FEFdMCG9RaNQ6w9wcX6ZQqPqAwqutyHcmxMRNiHjG9dYMy6rj2kfdFH7SqSpWR3Pod1DpYcn6BdX3723AWJUjLk",
  "key13": "3RZpffQVMtVWvNteeheV71jy8JXDuA2DCNdXPbyCkXdYKK3mhEaAbfD2DGhY5uZ9iPhszCQY148gCp3Uw31mgeFQ",
  "key14": "4QYrXxfdhmadZgDB3hb4bTbPecHbvUBgKwDRyfsgZLs6qix7DTdEWxbG1vuYwk43KdAb1ShLw9sjzrBNwasnwcyw",
  "key15": "2LpHvjHJJoPtKTJXMTkGvTfz25Ff1HpBVTEX9mRgMZxY8Vcqo5HPY67CtVWSgcvqLXZTz3R7TSs6xb1MzhDSA7aQ",
  "key16": "44sBtZV9DEPek49SeRfKAfCpQ3Brn6X18jLzunYVSVxjgvJytyMP1fGAURD3bJipEpmEsXsRKGLX8h7KpASkQBpD",
  "key17": "2hNnjL9n5Zrg9XZqcQQEqRNw8au3hWFa7ZdZZ1fHw9gtJBuy4Ro21MqZttaNgeTzythe3qhfu8aL4ZJrBLhgMkht",
  "key18": "2a2GyzjyGXrsNbftNZz5Qt2ZDKqNhw8AiVmH2PYAwPKzGhU3VtFLRXJeTZd5kWAWGoqFJwLfXtE9NiogZPfesNvL",
  "key19": "64QcXDP1NF19HYag88rqm3m8Lc4LCLEZPgtUdre3xbNxuts5M3qgQ6K8kNFc2Gdjzo4ZonStE85dNHKNSQ3mzmhQ",
  "key20": "3ztLEvxYDRutkVRqCuqDY7iWW2NQsqPpycQGfMjwSiwE5YzmmLkBQ3e5Uky3zknZSMdTBF8c8bPhcihETZ6YsWDP",
  "key21": "5Hg7XgPrAC31NybEPTo8hVYxXQ3xDNW96kDRS1Xe1LwoR41VurN6Hzfb7dTr9wPccjNGBuwqm76nvc6iVZUvKiNi",
  "key22": "4JaG1kkjEKFFW1bASew9T7oEkFFaYjk2LjLg1wNZ1K4eNLNGhFeCgZ1coXkGRMDSgyjXBetXsrvs4fGUQSLhPUGn",
  "key23": "4Jog2ad4Tp9zetRcHALeuHfy9ymkpy8RDRnEaJVPsQyxTtmF4sySQhtmJuiBu6yT7uXfCnvZtewYhsgsuPMwow8v",
  "key24": "2nEmQU3y2zmDTXgandVqmpgp7JVZwwqdofTNBh6tZCFknxAZVXegPqbT8ukbJJPwhBerMJDC4qDoMF3UkkcGCp3g",
  "key25": "U5pZhBXyqYwmPA3ijaixcGUV9bvjTXpqPLFJtkuN2DJRhMFG1cuPkPfKT4ivsq9T6uxj1Zr29RtYWvTBWbzbZNV",
  "key26": "aKYZXPtKMjjYP9S96XBH1AQWYXptnVhg6hC6mCdoAcSAYQD8yADkai6R7JLcyNjastyEFRXwB7sBUdx7Uf1U2Jd",
  "key27": "m61r4YECfom2U7tEeZJm8TH7h81qDVPPVkJnkkbYvqtwKw14dwfxHQeWvievgD4YiHf8CFnGhcNfWdA4zD2MzjG",
  "key28": "2PTtCN9XrVB1nYrt2FZpzde9uGrBxXEc8u3RhWHw3be9QqXeSdxN9EUeWsK6rsxx6pgdFy9STgrzFvANC6vWYGr",
  "key29": "59wEpr2ny2qHHDTbca8AZA8BPMU7izNCrQAQGgwWoM64Ur9QpzpR8PcERNSifTtEu1VjN4bUuAcAhThYHBhu6BZ2",
  "key30": "nQXqdJThUr6m6uwiFEwqs75hUcQEHJG8bs68wvfBBbPUWqbcapK81q9vf7dmaoqYqDbkrGnVivpqdHjNBm3Saps",
  "key31": "2Ff8Q58ELHp11AkyJz6xWcsUyVZr1vFqGRXp8oySK5iZyPrgY8FrYvW6BQkbhT7vugPM3ot5UckZpXajpMgDkXpt",
  "key32": "32TbDikLtCJss9xYMEijdLhzvMFxToJLcnMnX5fCFc8xBCo8YRPhzmWE2BmxFCm4Gm1ii6dQHaDXS5EuWA2GiAQA",
  "key33": "5jEwLSQE7uLVytDPrJAseqhq9Zkj99H1EfXwYqvZLFmVdF8hUoWFnZEqkx6paEqd2yAitoatqkjvD81hRhdSr8h3",
  "key34": "3qjVFjDZzkz9S6GtnNxGa3h67yyKgr6ajsaRRPZGhvncuBs4Yd8YsaDL4ovuhA2Ud35QUw5fctpcpb3jtC8nkKuP",
  "key35": "65ECHcp9G7G48RYzDxNinaka7grPn4ByVEijHP4pPhCzZdQBYb3rM2LvTCEe2H4Y9G7mvsY2VS4K93DAhvXRZ7NP",
  "key36": "3P1oRdew5ozyFh6psHLCKtDuAZD19mtS29MCtEywQFPjH97hWGE1N32mzd4JQB4WnoNqPA7xkPzdghvJkuozgmQH",
  "key37": "5ep69XnfVh87EiUp5ZDRkGKDcRfRX97tPWhgeE1rciBbHXu85eVwNxtyFYXSi74GHVp98aehR6S3zMhUGq9qxBtb",
  "key38": "fYSV2u8gMKCHU2y9LuGdDDGAoqq2XuKcYyXEFyhbdgUochbDhb8miX3UfvhnWHG2cBj32JHW5rsHj2JfrkME8xy",
  "key39": "3S7q858GRMtmLgZYqAQUsQz9cqSUxSsnaHgZJaBuFRitUwYsVcMnnMGDWX7WxZ5QR8pC1HtdUBaubwSQkXjvxr4o",
  "key40": "2r5U7w3w8mmpry7RYHAyCf6ZXaSdScBuLDLqHBbUKHe5ywSGtAWBFGLeKe946QmCCT3cEuAf5qN9sK53q9k3ym6E",
  "key41": "5yFH19wYayb97WuWdaS5YRgLA9Bus3dWMZACYJgRhfm7eT3eNdorNnzeYbGh7ke4dpC6b53oJJxHFYmGFsfhpYae",
  "key42": "opTDSS8ECXzF6ZriAmppG9eMPwGG4cwjKq3TeaJHhe6goxRMVch9jJc8joR7CFAVDzR5TNS4cBK45LqwHUH59VR",
  "key43": "5P3A4WQGP1Y98UJi3ZE39ndFe9W67t32X3xMTbx9hMGJowxZndftudC7r1hiiHkSxtpchfpSXDz3xfzGA6xcgger"
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
