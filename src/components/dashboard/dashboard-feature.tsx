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
    "3C3uAs3eYayMtnhGrZSao8wQeKgu7yNm9VXrfKxQvkQxkZ7jPwTgGUYMMwVJmX4yAFUcsCUhEpvrerr6HxYzw1AJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pS4MwAAMTxiBSeeqWrgD2qxMKxkhSdRCSfnwmCHdedGxa3wY9gfT1mo7cewSndejQ1bymxEaKyCTZUizYiwxi5C",
  "key1": "4BVAqpUumcLvibequfUWZ6qLKFLpoEhXghDXfBfakG5cxGo2LV69WhpG2iMoyfPXAPXhpo5EH4Fb38a6DZGC6Sz7",
  "key2": "5TNe5FGbf26XXVtGyY4eJHn9e9jhHheG6HPxw6Y2dMnA3e1ZWosVLbUwKAUGE9FDEAY9ve8QgTcBpiG5PNmV6bWf",
  "key3": "2WiusKcSbMqxK8e1CqRTiN2o3czXWoB4gyQvnaomZmPbmvBvrPMwbRNqKgqJD75vXseVVWukgyMgvpXRkcvoJcEp",
  "key4": "3LPaaSwfJo3zuoZxCdPVK7L9NDrS4ZFTebdokYdt7An5RoJPK6qfpMxQoDQoKeYsE8XLgNdhLxJJAbj99ZFhPQBU",
  "key5": "61q1s9pbEFhzX8Amwfri5aw9uV375P7U45KZ1zejYZM6to1Yjoi1JffxpGD2EGyqYMcomtuYVUW34tps44EXowAW",
  "key6": "63pswGpgtbPf7zhfnuJiLp1XwieKGPgSY7nm1u42Z4Hxy2tyiH1ck6ivPn9afanXuNs9kM4tvus6sTym3HE1gVAU",
  "key7": "3VDC4GCGhrxMpFYtDwBYiG3H9vh2CCdmYMHfk2xLgEzFm2UzPWmqR8anXSzJuC25LdQojjBHTcPJcCFxYRPswP8N",
  "key8": "5vc2vLFqkYbvWtEw4bVB536u88C5sL4mCCdexvQEnSGJ2eVmsEq55EsiHcR8KnE6uZ3XedRsQ33ftTG8iVaXZGQw",
  "key9": "5HC4UNYCUtdpbBhHAytV85StohrBVqneKBoQuGi5SPnAHaZPvdLNFDJ2pGuTfAPtwmoYvvNTJoqhpatpbw5Ph7kr",
  "key10": "3duTYS8EkKuFphy9Q6sM62PY4WbDczqLBgTbjqKyRdA7CKUYTENN2FkPbgCEn6NrV5F7ymASHLUip4aqmBBm9vKG",
  "key11": "2yF7nRgqAXGfuR59VsUbGW2gX5S9iPTquSj27hdB7GsDcZjBZqPncxkN49EheLWdFScVkxgnEW6TuzNzZqGauv8V",
  "key12": "5zrU8oYBTgDzQj92T75SZdhrTmdHSrYH1i764LMA9De1Wenzg9KzNEVcAxEtZefETMh3eumTkB1DbiKvzXqLdbP6",
  "key13": "RMQK42rodSBPcW4cJskUNUE1jKUJ3XpAs3PkCi6nmJ1T2Hg5yiFQtH6ACx32XpQLRAUVgBsMiaXt6J1T5UCuUnM",
  "key14": "24Qc8hJo3kmiUhqfKf74Q1qCYGqEqzmy7Eb9npNRWMmbc2A1N5KouPYjrcX5m8WRMRhzfano2sPnh582vNwc5PAH",
  "key15": "Mr2pabJBuwTCoaDtwy6yb1cMk6TZFEhqfB5aYvxBAe2czHoD2orG8RR4FwFDwoAaUGd5G5UMcDiQeCq8VcvdnzN",
  "key16": "2SEADBVKaHP1o4FPGG5UT2jS3VRhWM7sNvDSxwaR83nkJcU61Lfgv7Z4gphj3EB1EYnQ9eBXqcpcLKR9N9mLyD2W",
  "key17": "2YvuqNjztVHajgR4LjSm4dyZNkJUp4WtLACFTqQcUcTRYFshFcYrk7gRHyyoK9ZQxWMwJNBV6dtVCX3C3g46dN45",
  "key18": "5ngTWhLGK7R3DxU4aW4MV5iNfTES6FLHdHkJamwVXuWYCBHPo6atDWtYmbZxrR2cW8vZore1UknSczwZNVhk6PAW",
  "key19": "2Ds3j6MFomKDD7jWapAKrHB5Z6qxkGjcmjwezBu6SpiZn8YGe3saF4upgHcTM5drTSmFyURcUyPycVRY34GPknDp",
  "key20": "2XAQ7CR7zi4H4qkpE2jiWdVKSsgyvEgtixhDGjrNZi6T3sxq7BwZFHNn2cs6cPCMRwrpZCC6ztEw7qxUgQHoPVMe",
  "key21": "2KPACY15UzpLYKv3JDRLWm3fAmVYQMWTcWGwJQUD2Ak7QA82g7qhbzEazJVKHRNdzpTT9GwRa9rqzDT2A3KcN9Sa",
  "key22": "NZz5shS6uVWkwqcdW4nXr12KTbP3oB1TCFKRvPZTq3NzEovxGPgUA7JsgAh1YU9rEDz7q9StEsvVeneWf2h91xB",
  "key23": "1L54eB1YhbvXYmTG898g3MEsWSxVx3UdEb1nfkxQncveMUCBUw2Zw7gkHrdpZaLhpXvdGk4u5Cev9gZdjyA3azA",
  "key24": "5Zar2AsbWc5RibZVHrAQrbqiDoUYHcDDxxQLMGbkzDL6R9rHJx3KtMbvP1FbqefoGcdjmDDwWpqCgqd82WtEhZmq"
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
