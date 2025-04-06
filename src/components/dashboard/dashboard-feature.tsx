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
    "MaXwHczdJ5rdjt2qkjbrpAfkDdTwBukp7GyFF8FLujzynpcfDpEtAW6HaLmdqvAiFVvJzEWoGkbNVa6xYbChG1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j3iDqB6RcwHBuA6oUKeKWYidTrWqYGroDxe9WkKTrTUz5uPATq8h6kbk5gQiGbJRCGMChTAoeYM93CXU8obwvvP",
  "key1": "KHA6Q8xrtgcnS6ubamEPjncSnHnFsSoTWkjTaW4JgEqTXEEWX9Z7i4pXUBSEsSxyaBHJecvvRniHVNsSbaE1swe",
  "key2": "3KogNotbrwMNxyJ4FySTPrMChMr9zFTmr5ymnS2L6ddtcLmBYmyzWhiTHnUZpZss1qSwq4PCsVPZFZvn15cWcm2H",
  "key3": "ynKF5APJNoFMenP3i18c4828c9bTfPu7Stdtfd8Fwx6t1ayzJ3qJuzMKt5MAZaeU2q8kUksbVrz9WqbTdwgRwhH",
  "key4": "5ybUbTqYtLLNAgkRhD9xs2riRty4S3TEnDQCREJsPHDpF21kNrpBqTNMPi5AuBiZdF2XTEtLiULarAMq2wwPRmBo",
  "key5": "3U6j7DQkgmNZPqeWLgXLFAXKWA7q2KE1C61APNdiDSuguBzK2TQSYYtYHvjK3R5mn35KYt1X8mmiNV5HHM2aZdHr",
  "key6": "w3T1PVvzCcXqg8ehfQ9o2HZ7AkDCwzqnZ379xLJ4fHC2BM5nAdSBhC3nSCDeMgioaqxFzH1RDZUYEj6ZXsGFyYX",
  "key7": "wG54fUHmEwYUYt9oLfrP2jAMsnqS6A9871Xa55TKFNGYDn15mSxgoiwNEYFfiLRcEyvWywAQksDAyriPNvTiTq2",
  "key8": "2o11zqSPqELuaer7K1TiKQLGBTZ5uv5F7iBZdKcsEFjyrLuM1thqX3dSxyvoUn3DLcPtQmSy8zCQWx95bf5bq7Lp",
  "key9": "2yu9C7YKn3oSUr3pdXXQbYkKQQ1hcskqd11VqhmqHKzHj4H6JhvYhPCcxdbETaQ2MqstM5LYKYFdV3MBSMnJZ3fD",
  "key10": "y8gFrG5QojJQ3psTTb1HWgSGmB6oMksQbbVYHhmKStUrQ83QD6SHc8i9qf59nqeaVz9A1FT8i69PPfTMNYaEfuc",
  "key11": "2i4KtBGq4x5xgdLfkccwduC2ZbBnqDXQEuAbyq5MzaWogYXbfiFjMfeMpa1qNnmkVuTXV5HjqgzTmZJAT7jKtxtw",
  "key12": "gRCQKUczy6b2Eh4MnHV3qivnceHU55tvdqZFrhdSo2uT7cTmB1zSrzgWqds8GT4yWGoo3soo1XZKb42qTP6X38h",
  "key13": "3PAfph5sEmAj4Sp5mgbepSiqi1MXiiszLCtYCg6KbuYg1Tac5Wsae5TcQmEg6PCVcPjeUuMJoqiEXBRNnHbrXgZt",
  "key14": "5vhGLD4TGCBCUGdGU98EX5JXWKQXPtfa5EMUXhLWvW8YnKHe85r2exqeq5wUztDRqtrqcw8ebtdrYJNDW3BYykk3",
  "key15": "3GXisXqzdqJ6rUgzfkkHwnktytyubkGiyCu3dPQuGSb2SAieGvvBPS6C1RrLXi7FCGbAQvSjSTCsKJQqd3P2TWem",
  "key16": "4zDv6ozqUkdgdrw7BPc1FCEdZQ8Zyo2MsRDHvGRxSW8N7YLxkrQTqo13Yan4izUJHW2bxQnzD72ixTYAcHoDwi9w",
  "key17": "4zgmihwjvMV8iFC2XeedCokVSGwnSxF5mMJVWf5HBqyc18Rpxm42XPsdiFWodFnYuNTTt6Krgvc5axWfzTjqXqA",
  "key18": "4evPhHz9BwNKwT7W4mL4rUnvXPVEW1DA7JdPBsCfdWo4tZMCnDv4k7LBNQgeJevFfAvZpQwpr4SKeoB3bnAzcy6r",
  "key19": "4YRfduiSGxXJ64g25QGeTccnbKygHP6BVx8gSH7VCJBsd1v1cuHbCYkMMyZhLvdppPaFmRXrQ7hp1YCiK4YeT17B",
  "key20": "21kESBBbVXGywZpHLa1AjGshaYpwoEEZziwD9dcoyNJmjo51ryAEMYrNSrhecb4rDxYHUSLNSRUAPtiaeHewLMG1",
  "key21": "4Jr3qc21Lonu91rQf36G3pj7fgWC2vt9SkpLuybsja5WjkfJHppKos1N8xBjJQ2UHUhGdtCmEqNybE83VJjAHcai",
  "key22": "54joRCBV25vbbUrz9uQLypkh2uTQSgegy4BpgbggSaoN495Dj6daL6kG8zqPhJti2i9mvoujwNLGJuVVmd2HstT4",
  "key23": "4b2Y4hErEH6aqNUR5z9U8cf9PzKutJQdQj4J2bcFGyFbQZrhTSh1EpSpyekuvPz6U7SVpUPFoTgvR7SGg7y8dPVU",
  "key24": "32AVX98iVum6aFvP5uTnrsmWeXbdHu6CDT94tNqqrAm5af1yx46YjdLRi5PJrgdKTDEW5BcxtYEi5g3JVBHAExoS",
  "key25": "rf38CRn3JiNdxxPraBex3bMLuc5myEWjhvEuJKXKeCefv2cFsupe2Ka5H4eGWZqte8m4hW3jy6285ejTob4oHSd",
  "key26": "2y9jnZBnwPgihwjqevzhFSF2joPNhVaDP9rgLiVfXFTp6du2yn9B73HUHth4HxpRHRxaFZoebi3aiom71qTtHfyn",
  "key27": "4VrLydVGsdBpLFSFLrLCTSh7gH5rsfpfJZug8YRk2aaXaAtBvuXixfi9DB48ZV6xbAaU26pRxTvWViA8cwwefeAQ",
  "key28": "C5oaDu7ZxeR3ErzsNs87ZJx9v5dyCmVdh1AWY4ptrpcsnc2JYuXkqPES85RQ4PUTxeXfGnbLjGmJDG8U7XWHAVR",
  "key29": "GFMEgNn5hKRXBSGhH7wJi1eT76PqGnUEUw1Hkn2YfWxwRpF74BK9K2jag6q5J6VMFGW8yYR2e6H1zo5YTYErK7x",
  "key30": "25PSVENVRxeZJKo1Ljv64tBS4114p8q42FRvDgaP29yVNsxBdHCxLBGusW5ZJ3LbDxUHWNgfxSkGNbmJSDLENi2f",
  "key31": "3XyDKBvxZK8Wecr6wJFDuYcNqcdx9LXd8f2HyYWwV5p5nU31MaDZXgujpEUPDvZg3xjmsezLmMr4kSoR59yt3zNy",
  "key32": "1TgwTH5SVycLZ6M3wGPS9rc46jGVbSBLn1B95EJ3Rt9bJPTpmKDXzoxEhwkawN9JUtePE6zu6BJzmjiuyKrrdCM",
  "key33": "3K6ZzRjs8fj9yQTkfRLZEfUBActq2siZAmYNuRnkJLahiamVAAyrBzDjYSToR8tWf8CpmUqNsbQkoq9BfRJaqam7",
  "key34": "9f7QWC7yuLUz2p8nh8a1m35yiozLfGr11sBAe7oX3EbastkcbArFCP59iSdRgogcMk9598MYAp3SsnHx9uPHWUV",
  "key35": "3Wo1tT1wnLwxfGR3n7ECJ1T4qNivCFmxbysQzmhzds2C3vbn1dAbDNSYE52s1n4EA8pMg4VuVaqvMHNUopfE3CHE",
  "key36": "5kYv2iYocPb1Yq2SotF34kUVVd2XRqG7zJAhVexw6ChwMNLWP2Mj9Z1D6otgNvRgk9dZ36jD6PFsb2g3maX7yqqV",
  "key37": "5CkzXxPGxWzCwLCX9FrCQVntyfc8eADWd3MXsojuH7UcR3Ub7zL6GMWhnqCCV99e7kXgoAK2ozEb1JocxUkJWpBD"
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
