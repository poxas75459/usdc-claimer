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
    "2B3J6jzfDAZwVjKzymfEBmg6Jcvc2pHdtY4xfNqR6mqnC5W3SVgfYAoCNkhcgXDKTBLtBQMgZT5eCii7bYJnuXif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JtSN6nddfAKhs3jC6Yxqzy7DMFoxq7xdg5dkELSpeT7sriBXPBg2DxsBSRwsFGdw8UD7oL4a7aNhKgcbfGRnNAK",
  "key1": "4AQTRyrzX6rxmCvPVq3oNafYoyfmBHgUKLeuJJsJy6x34tgQzadAhWDYL2dTCx9yXv6Nv1mbD9EK9ZEbY8acgMZX",
  "key2": "4r2Ln7mFkDZSkUoQFCWsyBSU61nyB16ALFQpqLn7BrbVu3Na9KyoUZzCVX8S39kWUvjKJ558uahBSdUL75TrWs25",
  "key3": "5kHAgFJrBTnHgp15UN5sxGSq5qXGgR4gPivKEyLzBkLY2bvgYUdjAkfF4kZ2bXTCgoRAKjiAj5LxaPEEVGDQnk6X",
  "key4": "4rJ9XQ9YUvSGYkun6jqK9VJFtdVWqtA52CXKTg3SKoxvhpjtDNcU8aVzqurkqMSBPP6MaiDJLQ4uYQMcAzKAZpZm",
  "key5": "5HmZw3S4wWj8PGjxQ11THMDy3oFx6JdfB9p2YBaebHGtNRWCi7FGovmeusXQzZFw55fL8U98NTGQWKtLS5aT79VA",
  "key6": "46WUipF4wEW9MuEx1eGk9uaD5ELGGRbtY6QuLHHPSgmsMVJjwb6cxbHumv7pw9jewwqy3S2FeFYwiLVY6rS1G1r",
  "key7": "5SwQXrDvcfcSaGU3egTx1UR4wfMFEC7J176WJt37TjGQiMvNrGY28TuMowW5KBe2zYF51uqfhgo1zaFH3beWkZxc",
  "key8": "2cr7h4MgXpvhdpukCK4TitNe6ate83AeCfaqAGCc4TcAnKx8NaxHGF6AJ7vNLqoe4rLFtisNaDmux8NC7TF322c2",
  "key9": "5AScC8WZfEb91gLJpYuAQiosqrVRYriX2H56ahLxVj11hHsLes1cRWDQdxDp171fkDH8kQwdgQNxTJWA3yPM9enP",
  "key10": "3afyN8wS66DxAwzZz7W4fsPuqBgm9p6XPYWNuMWcrgdgX4DBAFGP8Y48cYFVr9PCWyQVMAsAbQh9kBDkJVTj8ymq",
  "key11": "5Tbp5b3T5o54h7ArXGrDMrUHtFt7ZCdc7uH9cyH4UZT1PSrwvR2rg8VNbA2EbNrgyr1AKecwqZiEfot1Y5588xgF",
  "key12": "3zsKKVrUXVBXcocUv4zTLxA3coWMgJcdohVzUvBymdWKFhFrp7HfDshWytUpgjuk4E8mvYJvhdaYy29nQVa82ZQg",
  "key13": "3ajLghSFX3JUbzgwPGToYVUiwjXzWVpanEL41ZiwMkXF5iQHBPRRBJ2MYy7s9Xjf98pQswBpTygjJwEGAWrWsbKp",
  "key14": "4MqD1sBamCscLu82MKAJBe2YsPADw5oYdwZSSVKdTG57QJbYJVxBuCt2oSYRtkJFRyHEH3XXkznYNzvmbkSguoKg",
  "key15": "37oJ1Dj11ezTMJ5hiHUhsbFvcWU7oVxpeeDUHsGphrqK2qEnbumQQLpbzU8CUgHKcVqFRXe9rduB4jUJByjn3KUZ",
  "key16": "5XM34A5wm8wNFE9EyQDsGxMnfdXsFK6fm9UMRtCqbs7zxs7bJ39QX8VJ2rk827sC4GpcZvAN9p26RYcU9reYP2y",
  "key17": "4oYaqaVoGpCi8Ar4VuumRx7dzTeeeDEkW4RfNHa1kneNyki6RCDpU3J5Mf5MjfJnJQ5vdXYacZK54JZjLNgcP4Bq",
  "key18": "5mXGqfDjwdknFzbjDMzSqC7yETLMXCwwEYb1kqAwMju71i17cxHMwox1XH6poPQX7DuRfYZLAJ8Frxsidia8cim",
  "key19": "4n2RRUK1wLUp1x6N3vp7CcmjBHm8xkV85C6ucMX6zWGweLMRopoxhqEuEP8jM5wz4RYreRGx7wkPaT4WgcaKxMkU",
  "key20": "2qn3WqptdJEcKLLKoNY6ZHLMD947wkFedxac8ZDXKBhHqrVLe5vvSH2H1SoJwCR5Y1pM2TbBKza8KGrnPdZCin7L",
  "key21": "3oh9WgF2XwF3ududetBfXxNKkeUyhiuLi8gcjenLCkdAV3STLTMpZ1SxMUduU4UAM9BSgwLnHkrMoSRFKHwthnyH",
  "key22": "5oXxuu9CLD72yXsYDDGszz7FHceFf97yb5fbLFwVsmSDgs3rHXwZagUmXNnFv7yQGhNCbufe3DnE3wSv8q2ctqr2",
  "key23": "2xRNTV8bBsufS8cEZVPRvZx2GQxLSeTgajk6w4oeyAy1Nz3uiNXbbqTr1FrbtETRRrVU5hMr8PGGQjxG1JiNgXZp",
  "key24": "5gj7NhRHLk9LWT313yg8pcGENgtcM3bMJonAM8QQ9bT3VG1NRneAE3Rf1bHieKjuezMJ7Wg9M4kXhTnBJfgGMRKL",
  "key25": "66ENkv72ozbjHCGkTjFoKaHBKWN77eVdpqx5mx9AZDghwdoEN9jKTxuBZtdhseM56smvNDm4DnEP7q1SWsVbdU9F",
  "key26": "jqQ1rB5oQC8NAg8WpJxQmFAUqFT5Y6cinGzWbVNevRzU2WXZi6Ue4tR2QDk9R9fZg3x3D6Wr3s2zxMnz5dkpHCn",
  "key27": "46HrUhif15a21mpTCsQFwtjPzGgqbgrdzuhBPkn9mN4aLs86shn1qQpnNwsxrQFGbJNPhZen2PCcoyGBdmuTXeCb",
  "key28": "4LjiBD9fv2ZhpCTVNTt3s2UnqVFUaAWbvdQ9R6mUVyML5zi67q6M2Q1hXLoNhcPwGdGgrH3FBP7jzxeMr7usSuhx",
  "key29": "2eh6tZWf4DM44ysCtx7XJh63F1EXV3oczWKcm79QPZtPdR1jCZbHzHTHCJEp7uiBt3LzxYKY6PJzH1uMDuvcmnXN",
  "key30": "MJpa4cZRvfTsYAVNJiTiNrdoYA1zSF4WZhro4jrNijUo11qaJfdzcJWFh4bbiLY77PAhbvNJJN4STHHrhdKHA4D",
  "key31": "47mPaeV14LXsfNquSCPpdWYpm9fcPooC9UJw2AYaFqRXYrNNAzEUtoPdeDRCqJPXy2VshTXNMEnPPRQKkRVJi8Fs",
  "key32": "AeFLZYewMQoTGtesTmsMEvufruExoB8Qx1Fi2nCPagFPAq56KtEKFZzJQ3fQCkeXGbWMuryFUMVJT56MENBCA3Y",
  "key33": "5ACJbzdFqvva7qpr4pgLboBseGQ2eLsTLDmp2UV6SqFUb2ELWqoaFBdRcQfaoDHGcQh5ZWoMnurASXW6yR2W1WeQ",
  "key34": "drqhWMRM5eZ36T2fPMB4wHGd61zBKKBbXYo2FNYFGdEq3XUm3Sz4PkWJuUzV2aHdD8CnoCkgEUVNaGCZfhSJMt1",
  "key35": "5XZUB4en1Yf4JPwsEz8qXRxabkyomfCeTa1JTWVvLXnq5CQZWUCfhUGd2H9j8ncVKy7cgRu1FokPsEHCkSi3ogEP",
  "key36": "nsPebZJpm53tKm428RywxdJZ7koBNgtv84Wu9xs3q2UWYQs5z6fp75dhx8RL2d52aJA2tNEj2ZTstgFR79i4BBe",
  "key37": "3D2raeMYzzSWJuTtU4gWYRi8AVH1V4s1x38e9KnxBMuULNy98PxyRW9oV89ZWhev3Gg4UDu2KoLKnXTsajKgWXB3",
  "key38": "45YsKEoqZsKYroGp7MtMzv555YkeHdRgxmoLe9zhKhfs6RyELSBVSVNKico1AyaBzp3E2ue1sB2QWzFMxWuLD6QY",
  "key39": "59GxTbnRMY29Z2Qn9dQJrcvjqyE7Ab2LCyEiccWTc8SPLDwroqsf4XDRhE91if9pkrqxeZQDk3EkRKKu3a39DDW4",
  "key40": "d2io1J3yLn2UWNPcsHMGsEuYy39bLMaSZ7dnBH7UTrX11PXoNNBf6Up6u5wtaFgVbgE8pvbvKMQqcnVxhof1wWg",
  "key41": "3Y5hsx52wmBMrS7dFVrJEtRZ8haUxpAwWiwKpUwng4sscx8bP8r3JSeK94KcRnpWveZ56XR3GWcyAwRZRzUch4Qc",
  "key42": "49ps2trgjH8ZBtpvrqNJcPSbs3gEdmZxkLjxTVyLAZrwgJ1wWor3fCQdEXqmtDV7hztZXxsUMjDKVG2CoYJ7EdBv",
  "key43": "57JoRDwmBx3cXERUfWYpD9xk97kq83nKF3UjzHsoHeMdVdN8PvnKwvMYCQfTboickWWccfQwUaA1yFc5rDZJWUEG",
  "key44": "2ijupC3ikJaoXrW2XTn1iUsuticzmG6zaoK1rvdESzeMAvFMA8bE9w49UAMXjwkVTXBuMWqy7FTzyfkEYedeNdzn",
  "key45": "5Eik4tcs4ZuKqxM1h3Mva67aDDt52ZxarV8eJfebKVuCjy8gYjMKuoR8mXApV959H2LPs7Fu7HxdAhFwk4acrQL7",
  "key46": "5PMQXQ6X6xv8maHznofTHKGmqrEufHPLNmX9vmxze77TUWyBphk7QQUdwGssUDZCuUGvsDG2L13yjRR9ZCmBmK8d",
  "key47": "Pf35i2dRrSTxJSHdC8wi1jVyRzY4QWaGBTDJZCVvu5Q5CzfZ4jvdPB35VQUU8aFz2DN3UxNcZ1k6fMtYBLWmzkB",
  "key48": "2stuKWqHkiDs21SyryC7uvpUp3NMoc9Bm4HkGEGhAMtgJpNoYWnP9W5uPbjceeTutVmBJWAu3qbxwFaDeYYPqZNm",
  "key49": "5JRgHCSCaj3oAC5MPQEqwnGFHBaREWHmgWpNiSNrR52GH5nHV41fRnVk3LjFBeT26NCFLBoqx6aJar36eWaacfHC"
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
