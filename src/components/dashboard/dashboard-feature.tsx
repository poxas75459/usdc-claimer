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
    "3JNSBUSDznGqYWMNMMVxSHL7f8aD4BGcb6amB4SpBA4AR9qidGQRG4ccFxordT7HT51PvhEjQ6VsAE3DbbV3dQWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58aC4MaZjBiR6rPxFUbkCh1JNFHAnZtJz9SdqPgqgs5ycZYF44NwnKAiZ8XPSZddKGHHCMo9fvTZY2fVkDAZmvbz",
  "key1": "nAo9QschdME7cimucBdYyUZstWULgPC9yEHsPi7jTutA2x8GwDTqEnHehPJZUqaWN93Znvc6zqzv3jYvtFzFD8Z",
  "key2": "5NBXPQjhtwM3ZDdEAnmgyxeGjE4ti6DRyRGuL2PomT68EgkPurPmMim8doiYndxkdz6utAhuUrwi1u4SoDDLyn6G",
  "key3": "2R9TGsmZWZGAwf2obJkLpC1vwzXAd2bkymU8FPjAKxGUaSdyrft2czoDCpzgGexyERvs7YV7jyzMcTt7tFeZphLG",
  "key4": "47UGvyWmGTDWu7UVJPjoAt91AoJbhAP6T4M8WCh8MTZmveTqf3aaT65EKMPuvvkxDY812M4RCafarqJURvfouAci",
  "key5": "4f6QQ1KUbhR3FNZZ5Wxk7cvapzijCtepCe1U6umwC2ZUFrQceY7yqFMLbdJKe9R2BhTJHrpCjjKgnypt6hY9rxAC",
  "key6": "26gAmgaihMrXHQU7ayM8KdfvcC5capg5bqxEJsMYXQRDHPDJjomJnBYgEvu4BJjCMmBziVkzMiMcqFtnSX7wV5WD",
  "key7": "4rezo4rgCq9D7jPeEgbeerXCiG2F4ZKcwb2FBvfg3Y3NTHGW87HfNMLgViPcfpkvBQbpTzAZQpJTYDRHQTTVtDQC",
  "key8": "3wc9iKCpeD6wkdonK6743cxZcnbhmZAvHSB8cQjcdP7WPYvuqrNZyCo5wBaMJxBAYLgp6NWRvKFFw3DfKdg3CC5E",
  "key9": "2GTMgvD9vneFavhSRs2gNduU2FCZDMk2VDNybkQHda7y4eNCpck3FtMiGBKhn3RSPYZKY9Mzz7VWPjRCdANpqDB3",
  "key10": "4BU27XFc9wuQcrsP8QQJbY7shVmQt89HHhLC17iYwZXEc4c5YYLtC5EzVb2vvPqH3Mr8RgT4CcYMGZmGwcQf65rA",
  "key11": "5vBLFTiNH5MfFXvmXJ4uugsoFksrLMAnBJPXdgrLoGB6ruEDWyZVhZvAb8tmXMHN2jpDqi98Js5GpLyz4v3RCk6W",
  "key12": "4nDAxm85sSGkeR32gzgBt6ANMvipvTaYcgQE1VZzLm4Hs2RGkmavTmL6RtPcGMhyP3qvUJTjWav9Khdxm8RyvYsK",
  "key13": "2ZrFtJLRHXo7GcBZDyVxXWf6i7caBh527k6gzr2DAEC4rUtfperXSUioVyXRRPiUYFBYN8XP13oG5oA8Kwegr945",
  "key14": "5CRGmyPB2EJdKDLDhU7GCBJaUswA8FE5EmqpUoQ533HH3XUV2nMgsqQoEgr6CaifQH1P5QQS17HiqGjVDNcqou1L",
  "key15": "2dV92PPTB3rZ886UkPwS5U2VK4b7NrwXuD7okXapBPL6CruuVQfLJSUsxh1p8BPQs1hDoCpP4YMiN2L5wfs71ZyZ",
  "key16": "3h4qUuV8XJjdHkfQesoRZTChwuVZruhVT8xNfoPpLA9bpThpAQdAGBEHskdZjF96EsStEEDBCvhbYxJ4SX1hEf56",
  "key17": "3WAt6rKUbWWD3aatUosicmuzA2qnH6sdwvkxg3VBpFGuZhGhwedAz96TEa2DZbBxssKtPLSn12RRkBrL6fmBXV1A",
  "key18": "4sgJ4CvV9MitZgPfgub6YQE4FBREV8janpwT9roGGxfXuP9tDUtaYNQJzJTFMLcTsxk4ji4VqJEaCrtasEn5whjt",
  "key19": "4f5uHoqpUFqEZNEdgKPuwxUQrBWzZ9f582xTR1PHnP1AWU2sZW3MGiPGeQdyWAA5LQs5JAhSWrmsgE4t6d2TBe5c",
  "key20": "5qGkH94DDg1KpcgJH1NSeoX1cguUZjLUnThUVuCwTanYcnMa83zEUR27auLzRqotiqGJs5eLEnBRvkLkr74Bc7c",
  "key21": "61UXKucvwNGhbDb9aFxQt6XW5JvVP5aNYJ3EJtBPxqYhFyyioULc2WXWs42cgew63EwkcNstjd9sPZa8ySp38LKx",
  "key22": "4eN3m5wPeGKYm8gnoegHdvUZvRagNK2Ed9U86ak8Uh88iMZm3gvhNfDY1j47qBA1DRhrgmCXeYPaVisdwxuxWHrv",
  "key23": "2FKNh42r7F1Un7FMxD8aWELQikm2hM45WDEWFTxHB4NWUHJtGZPrPUXUMwvUzcR4z4YuWUNzJ9zH4DmBHqAE7Q1o",
  "key24": "35Z6DFCP3EL2rAJFtRgvKPhauzaooKDtT4GCyt71VS8eQYppdWSA7cfkn2b9BN9cLPkmhTBq6D4J1gr6Cxmg5fdK",
  "key25": "5VstD55tNYqBodYyoysHyg9TanK3pQ255rTQLeHniMRpWVtL5bbvBd98JWfWi4Znb5U9w86CyraqdN871eu9DM9E",
  "key26": "2LP17rh6yczxEpfyVAyNTKx7NvevtnSjrUKV6a97Qvxk4vqkdhuw8J2q9Nqfvf6T3JLyV1U8nvXNLZ5Q9jbHFZEE"
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
