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
    "khACvuV97DKh3AqUjWCYv3ozPRuvXxtt44GNjzk5Xvc49aoFdWL7vvjHZbrPS4TumQdJkNU8duf9qwTQYpKLdNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PQden92DbRNYdpCrxD2FigoiEpvaJeDx112TRSdvkcQYsx64P29pxTeKchBVLehMHvA5K2xr3aEUBk89q4cxV7",
  "key1": "5ZKXmCGnWSrAj3Cvj8AfxgZFRfW12aUccqkff8qoBXb3mcdvHjpW4SprYiKMHs6oM5R1USwVU4eXJYJpzbLy4A4k",
  "key2": "PmnoKnEr5tQyoX1e5nqgyCbr1LkmGMMR5Bzexa6jf9fPhVcGKw72F6PsJh7TwPJ9uNiT5XAV2T4r6pGfriUWmyP",
  "key3": "3rDndM77HQfKHQzc75AaXoUd6jwe4eX26bPBBj8ZtodVzBDQS86rsoQuv9MaCNMRVqHBwmb9u9G31ysxrogaX9dr",
  "key4": "3NCxEoMC9TobVeGMReSca7L21KXUWxydZEmbiqAUK8KovcVfTUX5KQXizgyZHap4WVnJUU6iMWzrCRYMaMmHcvSF",
  "key5": "3z5dqkCEeT75RP1mfGmE8wTxdDaDh2h3VzC7zSQZxWtNSkuYbzw4ii9zBbkFeFxmUdzkne1LNiCHfBbNPhjpjqus",
  "key6": "c9JAysTfM7MKfmStNTaije46pnyHyd5tMmHHseiDTn12RbkePz1ban9jooXjXtWJTiWXyCKEoZ5U5m1rtFNCgdh",
  "key7": "4q4btCZPkT1p44gzXjtKXz2uBaiwQz72ieRMmmdoMakQtN5L6NwHEkLEJZaomCeoAALmzbe3du4iLNRLSPaTELeM",
  "key8": "2sB9eGJ8WQc8HpnP7fnWJT1HhmFkqXb8esHf7tbKKdZomhqnrb8GGtLG6mx2rYs2wCmnjsG6eg3peVckKK8Mb29f",
  "key9": "52u7pwEDE7kRtTZcif5AU31hfRW214eg1MWtKLjnb4J5J2Qs19yTfFgPfjJvWx5ZHJcgb2ckfNhTZsq7PcAeg8p3",
  "key10": "TvR1WCbYjy87n2rFvmoQRt4c4yNPDMGi6HxrU7a2jJhip25Uf3amtFYwn2AgpaiohvdeA7QUjSne9GujAK5b6Hh",
  "key11": "91VXzMW1rZ8vywnJ8D1muxbDis7VJ8TmgfszZeePD4g9u27R9qoiLw8Mv2nsJQzhVWAFs5CQ3L8RtGUZz8LP7PD",
  "key12": "46vbvZCGYb2M1sXoUmswTC6b8T7bBXowXiRsDFZbLNt7UqjgAU4CWZzSNcnaHzCRCKDsdqyKeGRLD2sy4Y2YPTd5",
  "key13": "ZqLBvT2fJwbUCDPVM87fFcQGK2SXryRsBwSCAp7NCmUDBytzWE4suB4PGUrZz77ccyQDBBgumNEzeLGtR4CQt2j",
  "key14": "4sK5unB3sgeaHm76YaNcfHmUECwfiGFHg6StZ4DxCaZWYrRnzc2eYKWmMQai6F5wnLMaS6vBdnGeBVYN4WywAEpG",
  "key15": "5KPzrcLcBLTZ3cJsbab79YaTbSYKiosQTjDcc71LSEL7opPj75kroBdEhFKdPCFCRYtEHJPPeFQLKGTe1VSK94Tu",
  "key16": "23DuC4WRHrZzLsQeAnAJm8VdGnqzsSbyYC4hMDsgd3HywdNPtZrSaawFYSmnaKFmuAsJ2P2ASi5sUvhicPPgfB3i",
  "key17": "XgikRuED8F8mFPfwMThSXDva9jMoyHCrKQRunJvfGe5AFYASka4dPvW49LQHpQSxhR1ExPsDS2chWGaAJDwUuJV",
  "key18": "333LNbwme48Ka1sw8mVdq1Jmmp5tRiny4vpdgxRtK6dnZeuTgwXYfLYKcM5teD4ZjJVDGaUJvL6LZgJEcLb373yk",
  "key19": "nyjqmr81xWsw6EV6Mk157RHWgn7m1Pg1KuaThFHn5ME2F4gDRAsLukxd3BiyR9aDoPFQabWSP9ZWeBDBgLAHfbg",
  "key20": "5izeLSuD1JdvSAHw1cUMN9Li7jvDbXg9YwepAxhMH6z9LEhkNHzZ81EUhSievJoaJXLkJBptWyTQwb1QJDoPeWRH",
  "key21": "4oxaKxzUaLCN6YKB1cze5TayjDXByP8XcioLw56AwWu5FTNY73pPHyaw7sh8qmfsZxLEsREph9gPHpHmFK8g2JpP",
  "key22": "5GngGTSW3SPzXsajQ9FTNMbaa1mnJvF4nvHnvYCc6oeEq6YqR29JvRvS97KQ84Y8tv3TRkpvY3w8vxjF99F3V4K5",
  "key23": "5mU3ULMar9YztyeZAdvUe4zogrXe4VfWh7rDjaGW4hmAAvAS44GUJt4F3k8F3iEq8vAnYNMWSZ7QEv6d6mUvifph",
  "key24": "4fpcvZu8j85vZeqkjfYAxJeduLpvty1EAzhu1JQgW9WyM3CxWLM35bPC8vgnnC6i9DndLUqQQsfaMT3P3sZ5C9jc",
  "key25": "5sG6RvsWCMrZnssXwsiact7dXVozTW2QDfme3vzxTEhfbE2P5Co9d93sPzdhxxtm2XxGxZk4L1GsAtoC4y2HiNww",
  "key26": "5YSZd6PhsjmC6D8jBk3HQNnqV79VqNZ7pP6dA2K3aS31xKUPGbQULWh4YT5SqVhfjExxK5u7wyzBPXqfK2SuhT3p",
  "key27": "3xWTWizsKeVHtNJqVutzY7pTQkuWmSdDegFKZfAZS1woxZtLGKfZbAQd5ovBVz9HzftmFH1PkMiqyfcvnTJDPTZ3",
  "key28": "2HCbhyqJCaaoPG81pkT5LmRoKAXutTE1nzcpSYLjoRfxHnKfnDwtgTZgpBXBJuNFXh9Eq9PfsiYeNSHmfPjEtB8q",
  "key29": "2LXn5p8jTrP4GA8FNSzPCbw6y8wFQJfp2fxUUyLBX1sjpZiz6qaD5RmHNSY67jq9t1WnWH35Q8VkmMNov8yMadHH",
  "key30": "2TH5sHxqjiZmK1u2HGUvSHAcmY6cczP21WUiSEwdHC8q2WDis5AC629KwqDDf2Esz6e8AYKoYzVsbb8fgcNB9XM9",
  "key31": "2iRWBrcezwMBSeNg1pCEbRn9praGXVwPEpGSc9HG7MCANbt5pis2yiPAki8V8PzSRDMNFcD2BXUAd2AApKqvpfnE",
  "key32": "o3mMhnkkSdB5XaGXhKusApj2AXpPj86gyNT1RmF1M9RQZzXzwZ5cj2B6vAvbQUxy4wZcQaZLh4WChh97ZCvx6Pj",
  "key33": "26S7vU8Yj4i21ezUd9R22FeqNXz8SDeyTkejyYzwZ7mSbBe8jAS3Dt6AEWYnTVUxPoabfSj8j1Th4aEmvjimvzCe"
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
