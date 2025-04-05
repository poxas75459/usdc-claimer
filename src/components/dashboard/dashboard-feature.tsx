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
    "28rsCkDKhyY34HmcKNavb73fpwREQ6Sxjd7C9MKfGe6ZxarHdE8asfkKeC76yJ1SD3aPF1XsrorQDQhbnrjBXTkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f6QjBbqyL8QXc8FrDFFEDWvr166tRcnM6WCdVLhYUmmggQEJ6aSsjCfbcKxSeCRnmEEbp4rWcJMKpKahxfkwQWV",
  "key1": "5WNXZq2tBumGn3AL1XazqCUwa9mLMB4jC6bouS9DC8HPyeE9NU3pTsTxsJz9kmbgmScny9K2jbBhsqCtnfBHQD4P",
  "key2": "4QNXUq7o35vkaVJzaSRBSJdcPf5MiQL5j8HBw5B2dXPxuhB9688B2eBMPcCSzVaYtZALPs7nTgFRiUtx677kWKuA",
  "key3": "3YozKEtvUmC9E6aP4jy6XThWsBSGdSyC9pVnhTzqSTZVqyffqcovV9ZZr8GvC6jtVBd87R3mRith5d9TBEphcePs",
  "key4": "vLLXT6VpbQFiPgvkHZtauf2VJ1fTiv8ok5PYgQi4D971vNMvctCbr3dHERuSyMNQmL5YvLxAr5tPyZ1ivo5dc7s",
  "key5": "f7waYc1hRWSsoaCcX3qNZo7UUJHZpUj7tRVmGXkLhCEnPYcUhdXfjG3QoEaKP6C4vqd7ujcduhRRzrdfPrzNreS",
  "key6": "2jEZnWFAzicY9XizaJBMi4Bv6rJxcEDkifmyq5Gduw8GbBJEMVYaVrZ8JuHheDd3gHTEQajydxRvijavsy8cSnB1",
  "key7": "3nQwVCCFFmLEBQhjpSjMHg6bKJLYBhoCrEfs2SxqeUx92s3vz7qvrQm4WrXvg6DfNR6wmPquSBTFfaL5k9WhKJFk",
  "key8": "gN1ujKxMA898vupn7JEwoRfoNYa4xpNCtp6jBy5LP74xU3D14Jy2PqUfUPgHTgiLKRdvYRBwgYK3rvgQvaMxWak",
  "key9": "51FvmtrrPuBUTZ5AVbU6mHiNVWtCjY355ma2qpYzXJCycb8JTkbQxEEibyRPPkcPHBeHToR58azXPeHhefwFR6ZZ",
  "key10": "HVeJujydyo2PwXbonY5JkSXkiEsmy4fvSLwBoPysB26ughL1ZP2A38R6fymGhGjHE2Lyb2fCtyS17w114po6LmC",
  "key11": "3gfmAJ9AVZKrnMSQmwrarKiXwDWmxsjwdETe7T79Hx2s1H8ycdPymhhsKDmwC72vij78WsvxonZuk8X3atxjjjMm",
  "key12": "5Lj7KXc2uNbk17bN72BwkowBEShkJcdVCuhFtvXrSzqd2Byd64jXWUPBBiV7P5pBS6w6RxmXAoMTrRSQvzWrNvPh",
  "key13": "RzGumkTLN9ZgRuNL6jF1k3FfjS6Go1nHXLEVfweMkhpV1oPD1vREAyUgwJehK8vgUJnvLJPazf1mLZvoCjeW4oz",
  "key14": "41eV8npX5ps4CDwA1jiKdM6WSWvtPgTvnhAAfDQ8C4SBmV7W57FMcZvc1FvcUM7ZkxijmnX53EJ265sdkLU71Q9F",
  "key15": "5bjzqCcSC8F72q4NUhtp76F687kHeLD4Jqg2EuFEERNEWTNRu57MBesL3TtdUqXDk65sKKScq2H38DXtw7nkjnFG",
  "key16": "4feNCNJ5tPzx4yhNMGw7uqYT1z6ziTAHpMPATVCBbnnRRg3U1nqNb3DNr7u3fM5aag8myCK9x1zq3hqutnydM6kC",
  "key17": "2t347CRQWH6p4RNSFPWCjc1J4f16xnKitvhPkv9fm5gqZkzbfppTFVCQfZ8hDdoRqSs8e9xniWNeiYTHXX6uWQ5z",
  "key18": "5Rd2MPxbVhM9wFveHoKBWMtHoez7DCxWj2XFm3UkpgqGPQYwv7pfnSsnPSUraTHaswo5g1rQepiLqAbGedKqqREj",
  "key19": "4xYiGHS9sv2pWc3NZDQmNx4cvUQEPoM2YVvjPaANyKfbxPafsB3piYHDYrAzrJJ8nEWorrKvieEKRBPMd2rR2Fz3",
  "key20": "5BUSiwkGJVJG7ZmRDFF95PHenbEPRPBC9Akz5c9kPspDLJf5ckFgfbSaaAVFg2cN2uF6UkMg5pukTERG8Rtk8MEZ",
  "key21": "t6K9rph9PjcLvwn7LeTr661wPtqs6kg2xBx6CK8XKP8qeK8D2Bys49f7DU1WDgkqRLprHJSS2E9V1RFVbJuZznZ",
  "key22": "3Z2BCHwLH7SdkL7QR53FQk1JZxWRmZrLdTWKBoKMUfr7MqCHHRC6tcmXVKqem2YXV7rMk3TdHuAYpctPBPemMe7C",
  "key23": "3cLRo7KpbLQAnu5s1mN9hnbFtoxcn7zE5pw4Fw68yFmYonqK6HHiY3ZK1RPvbqnqRPCgEchXJggjWMJczHVb62Rd",
  "key24": "2MDqW8TxYMfkxXVTXX6q9ALKBNztQmmjE5qXWkoGB6v4tG81jsL9RQSWkWT2UaZsmSnbZahs39UbSubSJBMxza2y",
  "key25": "5mjoNvc152FVwjeB8CyJTVUjHBiPxfLu3hCP5pGbKuPy8Jra3znU4FCUqBQPUu3BkFQjSHv1KMwEfHy1pDfZzAjr",
  "key26": "2XCNJqtxkfKxjdpKahbMF2zeA6GWhb7rmMhCYbUHkQdopeqBmHPPa4eALfhTAVFgNd36QgsGaP5aMLzyxFUHFdbL",
  "key27": "3E5PaYqHcT4KeSUqUfeoxF9ZPbPrM3e7RoGzxp69pwMzfYCNZNjzA7nkvuoia2MGbdi7S4qRGxHfueKtAfovr39B",
  "key28": "52oSXZeiNJrYGuEpKj8RxKSQqNPwiKgdxEcYeuSeCjVo1xy3QTLJzXzPb6UVyBDXrrUX26ZJWfuSuTuAXstaeu2C",
  "key29": "3rk8sZZNQc5d5swH94ZSSNmj5XRhi4BbDDYSdgHzwaBgXdSoKbDW4DGgRc5NgGbsuNF1xA2Kv4NNJp98MePwpY9i",
  "key30": "2mEtPra4FtSuKrmrgHgXc4d1sM2ZM3FhsR2RSbtGQWmpAk8opUXoe7b3ZFsCrnk4nXQZcPVVmmZYja4G1twNMfk2",
  "key31": "21SDitQWZDDk2Q2QjDhYCNvzFkiPm3rDx9PoLiMd8hrMx7AtvhCc2MokFYQ4tE3FLhyffzfDbDX21D6JuAyGFMcW",
  "key32": "YSPzoTnz11Vn9f7zHNFihvbgKmAhjKfSV2hLeGFj3sEkQqtXPijCJHc2hMPkbnwTFTfF7DMdjdZK4mMiZFMQ1bg",
  "key33": "5ynnUE4yPSWgh1eQZpytfxrbT1mjxErRSATKhHp9YT5aLsqMxx2rETFgAooUZkvLsMynDTxaW5UxohjEUEv8Wy6J",
  "key34": "vJemsVKW8V2nevsZ9sciRvqFXwZLxQ1wJazHv1dv31C9KNav7ApGy6rTSJWHaLwfwt1EX7favZJrdQLr17UmAdF",
  "key35": "3WTvzsxQEYe2WW2bFfDre8q7tGkwc8YTunxGmp5PEPBtp1mqPXjxw75TXpDtEZoSBorKGfxnyHSK919rUhHxSEMD",
  "key36": "4T1yJEGXYkWYKN3cym7Jn2igLnYU4DD2jSgBdUCiFJ9pf7LnhaHw1noViHRmnnqarwGjT6VeDNKiC2NHmZTSmUxR",
  "key37": "4acQdErKZx8c6Z4hCMn7583eCN3vsWXtWEE4AsiyLKDPD5skpgyKaYEggUVhT75f4qPuF25FrRDDL5BmFi1df8f",
  "key38": "4wyycoPFd7n3D5FzSAuY4gbPaEVnDuo5FmW5cfuFtHDfdGnD1XpyKjRSUWxL7XzfrQ9hs5GbTmAHhL5aKjz2xsLR",
  "key39": "5KyuSgjLnGijUc3pDg1FmXanM8cuyW12cG955fxwSDneeTKDRBpbjqAtxSbUZEhWXoJnwAwJLM4nvLBAy1CM2aSm",
  "key40": "5XFuu2r6eJTSyx73CBCsvW4NSBBwkvaWwfLiAakvB1sU7fsCv6LPzZe5eGZuhfA8YTZNyaAmpCMdFUoMbFF3QK1h",
  "key41": "5MCXo38zkGVZj5zPM7J3YpJfsVUmZQQzsqfCkPus17M3o11PKiufwKBaJKebP9Mo9FhekoYHSG37Aq27RVAk63Hz"
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
