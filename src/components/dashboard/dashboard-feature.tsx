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
    "KnWPFdSkGwM66NJ579xs1EfP8CdU53RftQkKm78VHY9g4VVWTG2SQCnUcXsWXNmmSHqjfpkcGFXNk8GJFnCCR58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TdMMxWKjXBwhpJbtsA9T7RK1AGwn669jsQbY6v4DELvNteeBpPXeYr9C9dtkNAuY7pCgQVnaVq4V35aVDqTLFda",
  "key1": "tE7eK9prcA9NWS6neytLoDdc3cQdcUb7FAaN1KMXxxZb7dNxPPkGKPxjJe96wwT8SUhG5GtCo2yj3Y7HTK58rAh",
  "key2": "4Pjqw8ydBNNKfuC4wnWAKTE92anwqQdfyzJYEbSuTNwGLMow4hGv5MqvFYryaM5o4swwNor9BprY2oXX7FhaeVfA",
  "key3": "BA2s55XZ52aspNYG8jWrSQL7wC3yzW8Hv5DcdBrkr8TJzwDoHDJw3jcMqQ5AM3RoirYm78SRjjj17rGSkyUw1Zm",
  "key4": "29R7AEva1jNJcTk2T7Nb1cG5JsnpKb1e6QbvveVAGwbRWhabwcJUGpp5r4vFRcqECbJDLVjZFLSvmVdbnFYVdHdS",
  "key5": "5G8BFSMUVNPJXKyAhMq5q7f1Noicuyr2PC4N9p9fDvkCVQ5gur96K1svPSFzA8BghkLpvgRYPunKsSEcDLQuoG7N",
  "key6": "3T2WbbCzy5VjAizjfmYHpse3rb5QTne9SueFR7VuyWKqySxLHjSRfKCDpZEXnG85KaDbz3zkFCdK8R5pSVFRFFAE",
  "key7": "5k4xtZDc3DwMRyCPa3V2Ggm9LfDhDYHnnBz7PMBYEwnjwapiM4bQjj15N7Hq1xwM1TwmVuCTpB3j5MpwjW7WNgK8",
  "key8": "42nnFG7kmVGL5ZWhrAexKdzMNRKbZMnQituPmffLqsFpfUuhJeP3jBAKu9idsGL7GBoNbYMNFvNeSPekjZRhBEGY",
  "key9": "65Zmcvv8wZrLieXXHXZATxHC4N9P6eZkiWujaijcqhjKLgQ4M6Vmb5mKYoeMrFXJnYs99JuqvkZujebLEzaf9R2W",
  "key10": "dN6BmHwHDrzbxSPywG58NLGiGCVqasTMXK5fpAh5VV9E8mwdSS3diYsUH5NbxZFQnATVd6C3xtiq3e8S11USKoK",
  "key11": "4MvWQUgXBMJoX4C41v5GyDHo4VH6KoUhbtixjztNL5i9rGuGcG3oKe2qRQ4yLma9saav6A1XHnfGhAgbPEZjkfmu",
  "key12": "4X66b298U7KPUPjq6gM9QpNTZrur8QtcstfzLXMbtLDXDcnk6MFh8MxUgk9wPHyCUGip6qXiQEmCvvVYre9VKDKR",
  "key13": "3HR778op3S93AA7tujFkUCiedqfsehu3Bp6uSr9dBSFVzWdiPjtdgjekwSuG3GcX3zpTqQXTTUUxtRf6bozYCSo9",
  "key14": "Toz5PaKG3KBHa59Zt97XzBtRrqqtR3eLWRPMYPzXsrsdfnFEpyfBCJCJmhRirqeVkBvJfz1xp9rLLceDgmqXRUi",
  "key15": "3oCuaAV7Q4s6hCANYWy6F3pF5JgjcKHQo2rNr3NVLeqBCC1nPNT5TRSQuuYQhAWabYpticLht7jk5QaGEmiTaYsz",
  "key16": "56acKvtJPFZeq4cSkS31Gh446qq9DRCwyN4ZuJ4okS1dE68NdnpA2fLWHH2A3iooJWtLFVKfpzpGZXAaecmwjZcK",
  "key17": "2NEJpJis5DaCuBKWCFSP4UiZ3o4dyt86XvwuGbFBEMetFmP8KThxdhbdJpzwS5dEN9B7NjYwY8LaXF3huDySmAS1",
  "key18": "57rMMhzC74u5u7Ks1zcEPoHPQqDM4suLfQ7PigUmAszHctzZcfiyvfeiazeetogowt48kN2Z3keext5RnQEniYZ1",
  "key19": "1Fn43dt7uaCf6tMubLLkgF32GRPN2YCZUaimC6LGZFEcmYvwMsLeT5dYQQDmWEsBLnp8W4bjpAghbLhRrN41gfu",
  "key20": "62qkDKELHhu6RfnGPMAuCb1KfnQSAW9bfSZmBbQ87kkJJYrT2nj18QVTvWU9ykQ1cDb7JZSw7NLYzRrjEUR6xr72",
  "key21": "3rj6EvCSUfRDk5mmEuSGJzTJ2ACQktNYXByKXbQXVQCyAAau9mTuaF878nxXCzjNEnTHDZD7RiwQfwaXhqZS1YZp",
  "key22": "8M47ztAbaq2pWWayAc5yeop5WaFp8M2Abdjn7boXdTnSU5kuMVkubww9cxqjaE8RXBtmEiERhbLRJUmEt9watBE",
  "key23": "2fQq1a1fZtxvDcjHFZ2i3hKAXe4FsJw6LYXmP5PM6LvKy9CFnUbCySDfQtXBcChdDpMFxY4ZCEEdVphvQPtD2svY",
  "key24": "2Xe69JSe8iaJLLsHaYf7cqR1D4e2XJnFh1w6WZ33L2xjRqoiJ6tKRvDxaBKVbhAukwVN7u9wNyL4WYcqUY8aqH33",
  "key25": "55w4YYT1nXZFDZJmbr5PREkVhp6nLx7V4WGSgunyFxnRuybRDcLUkD4vz3no1crPQEiurM9WjgaLyBsmhyT4Vozo",
  "key26": "x6psdCB9QgYZiRiyHCPGXjsUMqVP4f6rMAEquMxjiKwQQvKiTmx7yjovnmRQdh25VoSMsCit6Z3f5TZYNMuqLaT",
  "key27": "3h7PYuQm94mzjM7qP8jiPHjtLzo4WUMSTrcyBqzU267QtTDWYTcWd1LP9Pj7phLziNMjbEP2J8MQqAe75xfU57eA",
  "key28": "3iMz2T95mvWLwuy6vMNpa3sc8ypMwXZQTu7kdFmgj7mUgzeUF3gorrhQCATjYyvTqGxkGgpP5jSNQGuTXpLdDTpv",
  "key29": "4V7k8oWAZxr2L7WotgXS4hkx8sGXAGcXCzxKMA9QyoSCzb6YbtPF29DZnHafaog3FiVppyUNvys6nYK2Mr65sTH9",
  "key30": "38VdbnEmG3Mk41DaKsEqGTEkm9hw5zrqVzfKuWpdkaAL9DcMTdBxjbdFhYXDVb3qXLkBhvFoEhPpSww8EsiTtfWT",
  "key31": "4SY6wPoGNbQjesV9AjE6P1ZiTcwLz5Nwf2XKnGKw7HvoTKAR6ftekbqpbKQVwFyWTbRiVVZv4m4xqcygYAuQbnZ5",
  "key32": "2KeTrAMMh9hgVcpHnTx16RNBvcqS77WcSPNdFUcSSeEKiQMt88p1nRUUH32q7iSVgpVs3kA6cJC3oYN1RkaLGA8b",
  "key33": "4Lmx46UgdHo568nnqSN4dMwCWNSNYC2txeeWu3UfHiFA6FvaJPjYAdbjf1cY3HfR5pP8k2fbnMaSgh8quwWtWrpt",
  "key34": "bqY7msYF78Z3NBjTq9xCEWjg5g18kWzzBDDahwysZaxKckMeGmK6ZtGSj4dhgMMsnoNmaAcsVQ1xHkZXzQqwEum",
  "key35": "vK4qtLqo4pzvnB4653m6HgPMNn8W5PUBXdz7dFENAXZPpQdHbwcBXJeLVjLT7riNLfoa7GDUSvrbEc196sHmda4",
  "key36": "4mjGU1k9LNcjyKXFsqDcizFV2kW4QDkbNzSZdXk4gygewVbJfgt24hF62RdX2Dyhw3tsPdFeoi7LUX1yo2iy6Zja",
  "key37": "4nfx1tnEKUSVHaSgBiq784HSPe31DArpCxKTDrDfTUmswKREQDUG3BomAjPjSNtHQCbdCaBXuUTLFXffJnz6tPkH",
  "key38": "2fYrSSjzTwW8oJKfxLKKtAZ1ShFGbQiE3npmfus9Ao8VPJBazqZ8y2cpny9xsMTe1VBmGS6WTcYeo76eKbvUYv6T",
  "key39": "3jkynLUuCuvnhX1RcdHZDKSuaatNES3EEg3Lj3dfrWN7FJgBzxUYc19gCFe4YQBCPQgNFpZBpmLVcdYkA3d86fc8",
  "key40": "kEgzn2KS18GTt3HpWiX1wh3JfAtHkV63mQHQv1NM3TJdZzjuL2Y94NYqnQ6E5Nxq9DQB1gcav3joEDrpvBse1Y8",
  "key41": "5iL7MNPcg3F1hRqUbCayBeb6k8WeybLeKC4iYUWHYsAL4GoR9yMrcL5vgaTwBJxqKm3PJoJSnZTjLGVbjdKLZ9Zi",
  "key42": "LPhnDbNT67SFNf6PsWFTYRQoHwixuVGFWYzfSCEcwnkDMgcJPLEEzecbiS5m22ZUEfS5SUJm8YrGr2nbJCoGVaR",
  "key43": "4Tw6GUXmsr8fUx6TwtkxbhPA5HtMdieoTfKJbFMuhpoJ3YbH9yeKF7mioVJBuE6yWixXjMjTs4qjq6DDt7cJxc8K",
  "key44": "3JQfhiptfjmiiVXgX91JBY3i6fH1eVgK2noremNuMpH4CcDVW6eiiT3F9DdcJgvkichJ4UU1VWUYqrpRw6mkk1Ex",
  "key45": "2HxtHuPbn5YfHoviVvySjXBJRe682VreF87SUypyQDS27MxXWu7tWFupsuGMbWhTUWadU7EBfQTuYnkRT7RKsNU9",
  "key46": "3yr3dPySVpeJWsZH5rVyKXASnMJupta22WvaKiT6wAec7aq9SFNc3qAcQEcyejdUW4ToZPrdHa6nrHnDyp1Md76v",
  "key47": "uZxMQnm8BH83XiDWJZwi7waNMSMwZzEHGB6UGX3pLZfZUbsTf6Q7msFLxQEwKGWS7JYqYNDz8bHxB8ca84SHUNC",
  "key48": "45AaWZcNcMDswRBU4yo919oRy7gLQyWWtdusNxCWzhXieQNwBXR8mywPBBpLZ3tH6h2eYUcb7CLk9dvZmgNhD1bJ",
  "key49": "4yxAGXNdtzAmhEdixtmPAL1quYmpr8tQmR7xXg2xFzu1UPAGAUvdN48qruYAfgd4JCBTchDhPfWmq8ucmQAhBmWZ"
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
