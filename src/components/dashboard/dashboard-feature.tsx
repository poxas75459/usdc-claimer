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
    "5WxMjaABHoqYGzCFtRNZsjzKUhcxn6bxD5WaoPM2oPjQLtnnzy4av8jiqrM7fKgxuy72Nt1gpDHN112Kbi7RAkdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3Nc2y21ggsjdXYkLjvtwFVxzwL8VTb6tBSL5X4bS9ZmverYQ88oziSZgzxaq13oLT7cfTWMvprvmxzbmcrscQ2",
  "key1": "4vJpCied2CH8zbnrAd6XwbyCUPKnx82Jz2LtmmsA7xge2k4ZpYijF7MQypJWncgELQvvSsN2aJxwxK9hmFoTamro",
  "key2": "3aMUNgGY4ZbdKb6HCTEzgGEKTygeyVZNnyTNZ2pV8T2m2GyZrSPsAknFHDywoicBxjAzPq9PUhDxbHMBBd5ovv5s",
  "key3": "4sTxkmNcP7oNDPW2YWeoj9HtRHz5Kf5sK8fYJYAvtUt44Q2oNriPpEvDXZykNYK8eJtKWTZPoW8MPZEuPkuakWXb",
  "key4": "625k6F5zbJqW55bB3srPjB5msKkvRQ71MixGNbe4QtPunEiXzbjQ9MjLrfGwse1EjrhNYibn4wST1sb5wSFp7xjB",
  "key5": "z9WxvPxE8vooh8iY4B39gU7A98HmfW1bXx5yc8mrZn9MsSCQr2fhj4ZuxoB3cDRxcn4hYDieCmEF2NjWxyWhg4m",
  "key6": "6f5U6rMaMj3hwiuJfU8VeUUBGooUQLTSh6i9jU7KGhC268NAdYEu4oaP9CoePKGkhzogFyEw5wbtZnkBTa1Ad49",
  "key7": "3vf5KA1Vko7G6hYm1kRSzSF5yjx8XgPkXW29sNVNNMsSqr9tuAyiv24rFvFdN8fGvLZ7rH85oJZa7M4XFS4N4hqi",
  "key8": "4eFpBsoRgYPHgJs9CvLX3Qh6RBCg9TaswMnXSd2uWajrG9qBwvzrGJ9cepR1nzuY1beaPiFbsUv744zzyuCWL1xB",
  "key9": "3b2oRCYciK9Yn6emL9i4o32z2o8PDn66rxcXZFZX2CnbBeKRpieTrKZHXpKvgM7DkFNJbQK7Zsd3aAbqq3VxLBpc",
  "key10": "4eFauWg883QQ6p45C3HnhQByQz7x5gnF54Ubn84qAscC6ephjMHMGXNB5Dhr1SUtqDpWAMaVfRAQmkNsV4yLEzg3",
  "key11": "77iMSYQHD7d2ueJzAwkUYSnrQnEZr9o1g4q3xqijL28f4U7Xnsgj1iisP65Hj7vvdU5Er9UaV7whxuRm21LDaxo",
  "key12": "23tbveiH7mFkNGEYQkDaTApj86QaAJtYU7wWTCyRBYFtxDe1tCPTvhgcMV4KcqqeyVxTWqP8rr9nkL7tvXE47QEs",
  "key13": "2RrQ9CtH8nxU1b9XPrdpAra6mt5fKnAkN1rLQzHNCEqBABtzF7jVTP54rJ6KXNvT8d3v53mvzb8XTDpy5zXtiBo8",
  "key14": "hJLpFRFGUk31QWPoLtnMm5iDqGUuMiSTxsWCW5DyFEQpKSazKYC1UUB9CQZbbXBVUd9gpiZfFY4DvkvMYojg3kb",
  "key15": "5geM9XExxpgUYGggHqs4TBg5THgQ3NoQWVCdjCrkfDuVoq23HyipDmXsj2bLoMEipFQZazvXAddm9xhuyb6XkqwL",
  "key16": "3cYCtN6r4VnJ84YkWNrvhPC6ZWiVYYKveumdYXM4kK8pr3ZGoTVt9K3aKt12JQJ3AMDt9qwYZu3M9Xp88dfRUjZX",
  "key17": "653RZMjiD4xavbpzYAGX7W9nVBC3xetvionjDUQg4Wvckeu4aZFBWrJh8Ux6CE72mTPGpJ2fNw7sXuHCWECYxWJt",
  "key18": "3QSYxUvpWDUrg7hHpYMYYsPgtcfe1e4VgX3dgcWEnTXJtTnifeeN968zconZfjGFCtaMg5Wb6L8qTuTB1GZCNDED",
  "key19": "2cAZUMMH8twVrEiPswSqCDtWXd7igqd5b161z9jqNZJmAua25tqo5oMEv4hXCEEo6vwkBvGcsRRbfLbT2qYuHNbX",
  "key20": "661sL3h9YjoZ3b9ueZQkRUXpwE4AzN2uCV8cVXkSvVyeJDBSRvVmnnTtWs7c5gqVvdM8tXskhJhQgvZyGHV5cVmf",
  "key21": "5BCAXsDFTb5DYAG8kS4xYrQ2SkSv9g5kJhf2aDNBWGz8kJauyeA44PtTPBzrHnSE3phdZGxbUv3kbTqSe4p4qdKE",
  "key22": "5ea4YnALZ1JJAA8fXeeeZDGHduiUe4amfpJxNcRVgPJbfnps6R1euaC1cTNzGJAaMzwp3Mdriep5tbPWvDSqQp51",
  "key23": "3Rs6dbzNZzwPPbvPikJkjDGKGSW8A84VxTTovyzRwDmgw43XpWejrHrE4NDG2x8V2yUnenbXjBKwgzCjpGRH8ch1",
  "key24": "w8QK38j8YnJ12Mpbs37hREMjpi7UPSRcGPufGxmJLbxYjbG7TjwjRGUxV6sFNGrfBuXvdgr28omAMWVKdxRep3e",
  "key25": "2gEpfgGaQjqswSex7ki1BEmCd5bvCvVf1QoPkBfCUQKWNZ56RkpvfxuSGQVGUzMetdeTDXQqk8sevdXpa88VTV6P",
  "key26": "3nV39nUaa5tR1kDL2gT9xWz62HNGnzgjAp2748ii3nKcnjVxyiPMNmJiFbf3KBDQgFqRPdr4eJuEJGiPRbaxuyNS",
  "key27": "4LgRPMR8Q7KV6C17q7KsAGUgFJn6Z5LS8ckJdiGTYVhkPvnzqjZ9mjfzDzdbak47VYFWpHUrcZ5L9d2ZkdxD3jdN",
  "key28": "5Quosqiio8Z3GJSzUs3KnkTeACuLC8wGbyjNGL2UnhLZbAE3GsbD7GztweDhj3zA17wKw3gK8mzM94S1QeAUg3JG",
  "key29": "rKhT7LFPkuBwK2MNXAk2RtjxLF2H3DdSNwYMbrG1QFGEf6aWwzH2ui3BJq4eWRLZPGcamuQ9DBHyqXpJsFYh1HY",
  "key30": "2C4yvjxm91cDHeH81yxKbR1kiu7t8Zkjx4QEnEsg6jcwPfNeP1FroyyribBbYw9BXJYQgbc6VBNu4QpBZ69QeTuS",
  "key31": "5GqGS8ytokbq5AmSShWUzS9rxUfVdt9sUR5ZyaB3u9SX1mPVYaMtZnAhjhB89KLDffYogVN1fFnBBWUCsVQEySv7",
  "key32": "UiGPyXgAE7WLokX34eRTnZ5BLbRMHZZwxYhUB8wPvPjBnkCi1qywMx6tc3RVvk1NeeAyG1ZKirEfrNQHztTCHDh",
  "key33": "4amfdYTz7vybAkm7LWCBFTEmg7PX9NYxGHzbsiEerHPXZpTmYL68UAqbafWQDyF6EfXeDbS8g97WFvGWHqrDt6wZ",
  "key34": "32c8WBb3b9mshYRrRQZe65BnNEJ16L66nJSf3RBcpDLks3zukiN9YcbznjcBmowDeDdJ5KQwowu39GcRwFwwLsc1",
  "key35": "2esT1nR4dFfgJyrsN9kk3EfzaHtsweyHzvQGMWuMQ5FURxjzqSDgUvCLyVpWbG5niuhCmVjbvfyGBr3e1zDvPHih",
  "key36": "2gs3pJC3FHH6jTETjxCBZGEn9UZVb1T1LeKWXrHW81eKFRPjBq4LnauySGo986v1FS7H4xfBGfhBeyUmmUhSs8JG",
  "key37": "3Tf54GMY2AmKaTGo5cYxJz2oepZvnW61yEC1XfsBJxQN2U5HYTxRpahdY8sZJdh76fmzYWAJDsXieuBRgfFhzdFu",
  "key38": "2qddtX1LLCjrUiJhs4dZH799Pscjpo2FdEve2iTJWuGktJACw4zAiWQ7y7wx7MtgURBioFVhJjhSGvG1gK1jmaCh",
  "key39": "5MoNZHzNwFRtswUe3X1bJngcote8KtVT4CAPycdgaxDRAUsbVigxLrpgthipsfm9LGbXaZDkYSbpQoPETBfF6ki3",
  "key40": "8ReMdNXRQKK1DdboQgzTLT1BLdFF49F6fDfJPBdsx8bUvLs2aoTX24Zx2a9HGhhSYq8dqTrCBvT3pWvr9Z1YHUY",
  "key41": "2bPf2cxvmiFfHgfqZGTtA1KrNFdYFku1Rpvs86EyiMCTZ751L6CKBTrNxFQP4KUATuK3sXgt9q73sgVp5W2w8RZt",
  "key42": "QZ5TDNLS1VNhg5RzGTLZ2xWBrduBQ8zGn2r1LTvv85u4X4tfbqfHG9QL1UjyJs2KGowcDi6sWSfxmk8ZRrfTeZA",
  "key43": "46xmqfQq6SpbUKsfS2RBgjoES7144We6notg8D9nefwku8jPSC42w114KSZp9VjFMrJjfTqrHREeNuCkTxs89MY9",
  "key44": "3eAoTxiyUMVrohcJ6efBbQkDXx6Td2z1CbPgUeKQ4aNVuR8JrhvhQrGVyBsk6dAWEf9eVNMchuutDVqHeB8dvWoZ",
  "key45": "2bRUw7ohVWMiTUrHWKaweUDJzTybKoaTLgBSrkrGhezGBAgRgGeHkExmzjUrYK6e4qG9dj5pyqvKCBLFQKDhVrk9",
  "key46": "43CSkQ3bfkwQBxNTkd6Hkud9faKMRWyUjeG6TRe1sm7E3Bg6MnaE3Qrn3uoByjgeDxkuiuA8m4iyVMu9UzYCjQc2"
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
