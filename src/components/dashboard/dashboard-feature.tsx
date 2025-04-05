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
    "59TSX4jhfUJok8mMxkH39u7K9CKTTq7cjqUtSQngkPV5ySSGHAi19iZsUzCCH2tWXW8YHj12dAJBEjfJjT1noLJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GfjUmxXGpHSZsFPcG1ooxrUrYrxMV62H4YDdFq9jgp9rSfa1VcJwMivNzQeabSGgFnJzrAmwECqyZEvv3rpDeTf",
  "key1": "EjiCib6wXzVYWAJeLeVKBYoihJyf2t5cHiq3RiSAKAuDYdJQf69DqSjNGfTg2RPNVh2yCVxkBanNugaUjSQTfxN",
  "key2": "2W6uKdrRyEyi9otU3TmD7YJtpayiobjfs6pcKxAGS65yB3fB4h7Q7vZDm4JTFwpXK5XUWjEpBBxc9cXKYbXrn8Vw",
  "key3": "5daibA9Ed7ixy4PCxwT8zks9rQKrJmCddkX2p4JrmtThoYsZNRPdpQB2XiBtykErBDzpUVAXs8CQTEPVBya6K88R",
  "key4": "3frsBnZKrDmFYYeDeJeDXS3WqyjkeWo8nb6moP2Rz9hzvuPYB2snhwrbzqMBB21yqgPnHC2hxPM2o73ENJPvvXsk",
  "key5": "JP8ydP1ja6c1G9iZQPL8mgSJERw8nKZePSuk2Qv3q7cU9fkpaoTF1gC4ekfJqiMFKkJadJYiHu7rcri4T4nKJCr",
  "key6": "2Cm7fqrn7jKMNJ7p1ahnahBxPwsC4mBxf4LZcBFwBhF6natoTYbgq5DWqGF6qK39E7jHm6TUbFT9gZsaRSVCSYo1",
  "key7": "3W2yfG4Fm6ph1KaufxyJJ8U3eDhSdBmG94c8rPHkm6qoUbjWLzgJiMJDc4i9UP93zQ3j4TvrnSkpHBokgBih8vCE",
  "key8": "nwCP6BmseSbZjqcarfvastwyRbMrBDUCYPP1NcVVsShVmJcFQvQ6e4ix1bFMXycCi7kVVnjcEPbjYSNFcSA4ZCn",
  "key9": "5GVhCMDrYs2gVeo4jr9uAG4629UJAvzfmLXNxtUdrtcjR2CBGuVS8gnBeZEVGMxkwX3M6MX2AXSq93diQELtHq5z",
  "key10": "3GQiJX2YMPuUAPj9M1rJmt6rXTMU4GfJFXRzBRH3eB5VMSgEv5B9E7stK1UQZLoXpncLQT2XXKoEga8f4VwtAdfz",
  "key11": "461ppMCPBXXnsooqjSG3NRFoSCTFnuT8hCQE7xDcRmUZ1h8qn2D87xpKjHMdFSQRZJvymUTmTLQWCTKckoKoUMdv",
  "key12": "5TQn7Y981JerhpNgzGwWGER7U4zHZqLJyBShcQpMTcyS4mWQYYLaoPY1BYBjrhL5SsiywyTRozMpHPT4VJRn2iB3",
  "key13": "4dRShvFqPtSXXqD8PWr7Z6YjHpHU6qyzy9tvfF3C8J5GVd9G2gR3nQm3z29yhHDzFBYLQMuc2LYzMwoh5z377Ai4",
  "key14": "CsH1JMDdify7ECFDEzD2yJLXcLACjcCMVSK61yQrWytt49v1pzTGCX9vUui4V62yfaj95Tud9zp2NdNnunbnGXc",
  "key15": "YV7KNDcueSQmLsGJQtjbPxCZPKcDhvZE6pJA5hkSBe6xkrPywKnpbg6omDLygSUq5T8svjfw48R1SThjyqMYkLd",
  "key16": "3g3KVocWRuBt1LNSA9Gc3NZA1ShAESb5g8PD3Jfna92XvwXzyBiw24zX8DLuWDzxg8wf4oxYrT771FNWpi4RRmuX",
  "key17": "rs4qygzLdhLWX917c3CaVPnCTL5ZqbF3wSc4qYDWLGmt6ExoVXrQKEBK9Guuo6K2VvAQgjkcdXbAMBeNvgXGUVt",
  "key18": "3bMm7N674zu85rMBxzSh4UbTLhJRRvXuZy5RDbfeasPTWynouesnmRFURtHFRHokNKZGMjxxKJHREq94bdZt8JnQ",
  "key19": "2V3AZjnCZuhfo9BytfGCCYgNtCDCMG8FWu6KHY3nwd2LYSaAb4UDRZzF9Zv6TsUJYmuns51MdASQZLqCtAau6gw6",
  "key20": "45FK8gATdq5dsqYmnS6ZFDertvTB8YTX4wCpjMCLC3u4bB6Cd74ycMDd683WCa26kbWQvYcvVcoftdEJJQdKsCTZ",
  "key21": "rkV85q3UhnWjSLFTrsNHyijVugmKqwjuHueBwLLsRthYBHpGDkxs5CKpbA8aagbLTUXaG244TMRxM8jkDTkcXxx",
  "key22": "2g8X7Wo3hwQx222zut3ugtX5C5LSkGdjPSuEhscUSV1wC5L3TDKr5AKbdpZ3bTo4hNoQF1KR5qsSuAdRBzmudayF",
  "key23": "3fN7bUvLuWhd9bJt1MkCx9VoBzvvBSMqBSQ9fd5wXpPjBSxEjsmHu3HW9A91RYRRmPzvufVzKRjh1SAne3hcfSPy",
  "key24": "Rb96equww4ZAfus4ZybknN7byvypRcsTusehNvuy92MdPZSFF2udNd9qBJcDS6HjzMAmUoPALYcSg276nVWxVSW",
  "key25": "3XYPQ5J8WtATT5hgUn3tFc4qTS5UKmYi6SG1dUhA3v7rG1p6sRsC6mbjEcQo3y3R8mnLFYegNRqRdkCAcjnBzvoA",
  "key26": "pmgt4rgw7wtqcwNEkbqLk8kWMsMeXJAZxUJynBZpU6T1ZGPC5fC1gBHRT9cxH3ALcNZYsUEfrQskajxXzfNM35X",
  "key27": "2JEruA1UieBPEMK8HAp6cd9duZf7iANx1rWLoBUyc14E9BWRLeedMPk36bQw4Mevi14m9NvMwKY5e7eL6C83uyxF",
  "key28": "jRRbxrA1fg3hRdzezDHmwhcZqnsMz8coWMmnbMQAPo7XgwxKiiXqHcWnDCadih43YSSNxWxR2h1CUsQKHCK1sxN",
  "key29": "3p9ct9qSut2jkK5qicvqdK7YT5p8MEZtmoEAaNWuNiTnGd4WyK9R3BQ8J1wVKfRVn84abk5H4AASdkr5McAAAqy2",
  "key30": "4eAfgrFHoYfgdX7YoteixcKjz32ZApePBw7y5knVouN4KADqyY5TyVMHBREfCaGAJCDzEBHxpM3Pjt8n9b1ZmzYM",
  "key31": "5P24vMUFRtnyC2CgRctS7DZLJKMi9FGuvZdwgJnkrWqUjzUevGNzxD1hbGGwcCzR5BAEv9x2KP42zFW1TKzPUPhZ",
  "key32": "5osr615hs33JumVe7Bd8atdWCuf2E6yPH6VbAgPmxtHioYNVWb8g1yEgUnok7vz68bJQgV4h1TpGYTVPMCFe9cqz",
  "key33": "3mRzzvcCHGCCeUGm8k3ZpHZf79EwGjGFNDiJnaiR8hTUGax2LyakE8LGtDQqtgMCFiMhNJBoZFfq9hqyZeRzv45b",
  "key34": "4CrxVhgAw4Az29nQXB3RBKT6DQwbZuBVErPsLr99CZ1U4a68oXPxc3tCd9h9JgbzJPMd4NExU9RG8AUxrDiZyMnT",
  "key35": "5xDywnqzVrkBeDW4HhFMmyaixedAGkA4bnEeiHEWipPNGDMKw44hAfL6JNcA1n1iK3MVDaGQhUCikeJ1JhPtbJwL",
  "key36": "5DdGpjtqnwNxXVjWycM1sgvVDnVcCk5DogadfhQtuzsehLoyiZoM1a9i73jHFrdYV5cU9c66vDKqZ2hRoAHVtWdh",
  "key37": "3VaUirQB2yEJycrwScyG7iJhuLbSzQXM9iSCqe69gLtkaoRy4KiaXUgd9NsorbiNgVyzkSEUijPM5fz7BB9p5RSb",
  "key38": "qTr5NocdkRBE1ELtm6BNmpjaQN5A2AYzoHiJYcWYaid2Jc4AB7Kz1LEf5nX1megJ3pGdaebcT1esjvWxWdnkTLU",
  "key39": "5kUYccaEHFm6GHHVTuLZxpEYpUPmHEuRc5RHXGr3Eky6EtVxm5FWHSNWqb4oZefxhp6VPCqv38r4hByGEHUit6JK",
  "key40": "3MLACM5dYcwuoQ37EUpSNRPeguV8keWr6TitsLEKngc171Mh6HF519tBrHLFVeWuJDrscyErC7ThMkixdYoGcVxv",
  "key41": "BoVLC6m9ej8KsiDL7tLMuJffw9AutmyKvBR95vEUyVsQs2kNWyxKLfafmS938G2hvBv8cPerZmckjGH1y4LBs1B",
  "key42": "vZ6rrWDe5BJQj1m7KVKfSyNA8ZWAJXH3aN66oBoXmWZuBJr2RiCXWuycPrjiPtREQsh4HLdQcjstpnjfA4aYZtB",
  "key43": "2CMGy9xVtmvuAXHrJueFQ7a8YGzwbjHD8sn1bgSbKLPpK1MpjV9C38zBPMvT8mPYWyskJip9Av2GtGKZ8aU266XE",
  "key44": "4ys9fc8BjHj8afW4qxLRm8Ku5MdK7LYSHgUgxr9ZYTJSk2JYyKhzZep7sYnWfuzpgTLqWPXabwSMeXDwjRRWz2Fc"
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
