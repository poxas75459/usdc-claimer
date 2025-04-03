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
    "5QZsMFhNvacRsnZFpxdTur82h8kdTcj8kxVDahjdPJ1zTzJUWJ5LJWNdfmVA81iaunyXzJuFtgQu3WunH49EQfKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46bLQWejv1Jdf8FbSib1qHzMxsMepfctmmVDkaLquJ616iA89ZXQ76PU8Js4h4qYoQ87N1ojYo1h29oDXJizwJsa",
  "key1": "3eAR1Nz5My1UKAbYfMhrEekP6pNdpiGcqAMMAhF79n3cgtBCE8JB4DvM4LDcb9av9NConXCEAp2ETbHJjiGXXZEL",
  "key2": "U81UxGNi9LHMoKQeyRLN9VB5F52FYZB8h2u9ACHinLkW2FfyqZDjkcv3tBUGEAfMwwT2Km39RAT3texvLWHBC8B",
  "key3": "5cCtxwMHUJwscSdwCK7Vzz9kd1ujWTPXDQ9icaW4nKvYnzm8XthxeFE35u5WGG7rDyF7n98qXFFxwJdsHL5uEgUs",
  "key4": "5RcyEjUHJuGAgvj2aZRdT5AAddhntjh97rY3YGVPBfPUBa9GP4AXUPFBJ2qtmaBYtWbAVwf1cYPHbZEkA8aG4Pm4",
  "key5": "59W3H8xpKTzRSHJd5b8jupiYkt2CB3XpKwc52cKMf9VwGj6TEyMC62yhyEj6BRMcLuj4sd9HuTv1fbJQyrvMY6cf",
  "key6": "2F9bw47UKfYASUmYpseUyvxMDbCnTn5MG62qMFu2816AmDtpYK2kKMoJWgDhLc8XTZNpgYMCnyGeU66tFVEbTRcu",
  "key7": "3fiaS45wTWtVR7JX33t1rK6Z2jnA3r8pEJDx81TtFr5ZJ4SEhkP5nskfw2s9gGoZAomb6Pukm4W1vpRdqdYAknJV",
  "key8": "B3YhNBbpCs53qQfjgRGKrWgeC2YooQthRaxavGw6EQ5k82dHt6q73vuF6BYcUbCERSwzeJvxruBi6o9Dcofuavc",
  "key9": "Sj6Rn78MH8K5FTsKceAtPdm8NovJLoejzaqXEamTTkURSfGSPUu93yL1Z7Dw5SLgsVoV1Dy5irU8qihhiNz5Y1N",
  "key10": "3GNZYv3JUzdx5cHheDuFikY82gVtEukDKUrb1i8BaU7sQtoFfp7m5QTviNnqDg68eFwQ5oSmqmRBWtHaavHH3joJ",
  "key11": "4xV5gL5PahPQgzGm2NjFYwHhQhd3jfHyzDzgDeruetcC8cdDNRgg9VR4pMeQEJvt9hYfCvvaBev2NN61oWz7CSSv",
  "key12": "3L8pALNDroCDh5kVwFTtj46nGRauibqNAPVAQ3JWE678HzVqfMr78AMYaGWLMf34XWKQU2a3iUWa2UbD4dAf5zdj",
  "key13": "5v2kEh9pzpebj7oozUb88VbtS685Ubr2ivz1q8oAQNRxdrSbqnS2825K9DmEzTH4KPnYJLNaNuzzVLfZz9a3RHse",
  "key14": "4yBL4cvWpzP6fKyoFy8LuyKnx7pFw2zyKE9L96eYTsakd2Yv8HL5uvYBcv9oRC16cCMh7VX144u3D18BisT2S4S1",
  "key15": "4xk2PGo3zjKJoLE1dW4kA6k3DRhKZ94pGsMnHjCN8ZYHHsx4NsPbHu55QaLNT4MUTbjwqFCNorzizo6UUyMArdc5",
  "key16": "3urUWq4PVj4CdyJzetoAiKoJcXXdr7GRC7xXCzYhYM6dzDHge9jiMbHieiRKx6vYZDUjf8GkNRyR5H2Y8UCfA3th",
  "key17": "23UrKowmySPFLdJZNtDPrHMHATwhxFXSaBAcZLi6i9zdGEzJagGn6cQK8Q9MLmDdcMwS2tFyHckpnhui5wGpNjWu",
  "key18": "5ANvZe65S52qinWabA1wb28jAwMEXjPD9EnHS2SUGUbuV4RVeVaBixanMTypjtZee8f46iiA9vpkxKjbkhuQL1Kr",
  "key19": "jw5CY4rdu6FrV5RKmRQf6w3G4RFYDB85krsgEb4F2bnxZGoqXmwgigzbxoGCWnjrzujt1ohSuZLRvUPAgRJbfcG",
  "key20": "5GTyvSah5qP92tRxbjJmyc4BbAXw76i269dSzpeW21ZjBCc8LUDkqA2xkK4fErAn9LyppxEJjJQycr8iB15GFcfG",
  "key21": "2Pntm254p4jrh68sQ46DTCKSCXmUx1hjPrUpqF6sqSmRcdR5VGrE4aNAtnd47QGSFHppbGEwmcPS6TngKYeLDkZj",
  "key22": "53C1hvzf5kb48G1RnCz5AnveXhbaLpKV1GxMcf79xnohDkz5cT3qkfkQxyrsKiPdEcSMYhivYbsiMyJvdokzG7NL",
  "key23": "mQwcoDMqD7Fuhz3jRYX78KakTfuESWT9Bt3fMALn5tc1NCnKMdxwtJaXYqjDZem2SUgTwvuMHvuLQfrHFJHmnnB",
  "key24": "47B1LusDmj4M6SenJy6y7ytzQAWpZytkchYYTveS4zCfQcRpTiWrFus7pDDFjtKDNszPEBWzZ2bZ4xsa56EcsAqT",
  "key25": "3BsZsQxZsdkR3nkt8nm8bPWBsw73HyKCkosxyEd1VE4z8gxUTUk9aJ3d7CuzxNwY6aepze1UTvoku4QMCkUgXG8X",
  "key26": "5D9G3o45KSbfUodm1kXWx8c84U898HHGmNFTz31VqAtYsZeQ8KQniSJH8BgH3g4uCdCoE56nNkfmmdiw7RGefX5J",
  "key27": "35v3MhjNpb8HcwJX32sdsKGNUQewKtGjykENmxGvUgKe1eQgKmMjVhsCGih4J1QarsLEftEmLLLtsvqsiuUimRh5",
  "key28": "3h8wo3mBPq6yQf5aSbPg2NyFcCqbn3VH61cmA4owZmE3U7DiSVbrnB4k8L6SZ3hD4kSh5ic2sSHz6zoXN67Exjj6",
  "key29": "3oNdTEd6amUpEa7qy11q4TZTBsXij8K4XRrjS7wPttkXrzCuNLHWZ6NkDG4JpmGgdtHURsYGWK4kjs9tREs7Bu5F",
  "key30": "5FiBdWcu1ZGjYvhwknsryf4sURBgFribxckgqZMQDTHVsvki6G3MykkRXwH3L9oPFGGLemeo7HU6NUHneAapvKp9",
  "key31": "4yUrdNudLs8KeNbeTFkaCUSoT8wddHpo5mKhsJkaHpe2kNfADGMgkhzwuWZK3JjUCv2EYmaQjtmZV8Q6dfuFS7ed",
  "key32": "62nmSBh86J3Eabk2JpJVi5dBRiyBmb7A7fgDtMNBchWnY3JKhjQEsnZuLSJxfLWt5LDEj5K1ShXCAePTJS93FWAp",
  "key33": "wZBHQzfrTYCsZxVrBtDDeotEuAbUU9bN84MYNpsmRfMfiWek2noPe5mP16xXZM83YbxAJTnM1t8F4baS9qMiTGQ",
  "key34": "8RRxzVy9pMr9KE5YVYDAJvBPQQkwuqBEsobFkLKug3ac1vtbKZZNPK4tWm3rJ4xqBCFSy9Cs5anVLaZjQCTB5rc",
  "key35": "5TX9rfVquE5iq9LNDosqMawJEbd7y9gPSfdq3f5QuuD3FcKPzEvxSJTqC56RMohRfh8t2ZYVkHQRvYkfbjLZ2c1U",
  "key36": "NkmNKj8tRRA7Um6TFYskXLeBhfZYZmvkgoiENU5W7esRsGDV2gcxE6i8jNnNduFqKqHjBDpeV2dU4WKQazLqJ2j",
  "key37": "4JLqq4nWYmfybbXk1ymrGEJdRLHjtc4ksscCX9MnQTEbVDKLQRqgH7XK95PnD3HHaAyxvkTNae5QNNcSGfq9cuyW",
  "key38": "2VaJngf1toN9SwnothA3sopEGu2e8VSXZK53gXWAkKrhpdbTiiBZy1mBykk79JyVJhHyBn68wRVWxkcL5HMreiw5",
  "key39": "3wxvz9WZFinYXgsSF7WajZghPd1bEKL6Pms6RxzWF6GxJJZ2BbbjkjXDZdjaN9vWXinXAcQgFbMxYcCnM9oJcPYf",
  "key40": "56rc8vAWbyQpSrUzZMEtVFejKSk9zfZopcTaq2Jh8pMH5Gvn2CGv86iVoV2tb1SvtJUjgNoPDXBhC1CpyEgiPTMm"
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
