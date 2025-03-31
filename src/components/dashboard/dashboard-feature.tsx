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
    "5pmeV3Yxm76UHW6qwvNLfrUPy6HNrhnwqh3yihh2R1Mtao4t5GsTAX5fA9kwKB9SD6PLD6wQhpoWTjByZDyPSdqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnURaMxmh6zdLo9kRTcbzFRAGQsqv9uwbvGBMVxDQVZeudFA6ZkgGBz1429YiGzKNjgVSaShZjKrdJUFecnLo6f",
  "key1": "4PqkSXg8ZfqRezFMUPVYPbUXV2pzXThk6mCQkDT1PotwykJsZptAS2RTm34SJbMD9MWTaAFHAucMgXcSGNUgWPSH",
  "key2": "5nH6kE7GDosLmgFpYB8qk1gTBjBpxQ5Zw4HgGP4LBprLVn7Z23PFBhqUs2RhJJChTvgMqXc5yU5WXuWreAF3Rfds",
  "key3": "5b2ceuFTsLdyQH6RQdsxsvbUtCAoJ9SchyGj1NyUoZchJ1jpdG1d9dLtLxtSftB5yuGbxRENV4g5mVtKiy9kvRr4",
  "key4": "43BxBo6YymMvvkdN2pUKNxjwZJgG5B5jZkh4k2TwgW5fZhezq9GMMk8YibWJSFVD9jfN2Hn77T9KMHuZFijQegng",
  "key5": "41sqWWsvMywDt26wfLRLoXBKi4igcvpCRGo9af1EAEFyDtjDiujfJNd3kKLb3aR3XRXBuZojJe88VGvGPKug4F7D",
  "key6": "2dCzzcTZC2rsJ6Aph75HRxNSXinATjteiGCGPv3BgPfjm4WHBW5Ne7rSd8RtvPnm69J8qY3wDBGUnJLpnYUAzTw4",
  "key7": "4wSqrtufhbfJzJf8LLnjrENXnn4hMvqoyMUG5REbFVDCQHvtHGmcHWUdTTRdRY8WagHtDchtcCc2DMSZsEkbx1th",
  "key8": "35LL1w6UPWzQE83kcPFXZnD2uLFVPNo13ep39GUqqik2GFWzaeSZYPpMGT4ugzcx3WU4tPtDj9mxAedvgWLoQEG3",
  "key9": "2P8wZLVFDN9q5vqWFPtNGvWUu8pLAKJHyBXnH1N8qyaVhZLimWUt35iXno7rFZsgBFTPrABT6stdoH5gjDpxDP6C",
  "key10": "fjyXQmAb5bKCVq6wn5JrvpENLr7rtFvBWLtFBrpCH6kfWxUiYAqqtGuK3C9ud5vKB44WkBRNvpGGrS4gmcZxc83",
  "key11": "3tGb4aTbbzURo2Vap3dkSGzHy2jVKaGvsj2nPF3sss8W6VM2nK2y3Vut92eAQzQSqVExkTWW7UTdM2n7nA287qyN",
  "key12": "5gSxZ457f22TM1GTuQkDUTzpaj3uDMZAaCM4LYvyB1oY62QT3jEL426e8jwXwzk2UUd5GyCrXgMtpFWpbB5LzS2q",
  "key13": "rzzjjB8NnUTkzpD6HKiVmJedJZqQza7zEVswgFrfA3JTdDmefioehRVkRxLHzw8L4PDKFUFbSeV5DBqiF3tydSq",
  "key14": "57xP9QU1o5pKTDrHzSoJwCxQP2Jo6Y3Cngd5dv7cZxsAdAqUereLe6f7N2b7fvBW6MfttdMsEmhSFromLEBo93NU",
  "key15": "5ax8jppukKj7MHXcVxcQm1mB8jyeNL5CzrMJ4BbzvAyQAuB1CnLj89d6dngMw51bbgXQvwa8NX2ChjAHFsM64xQV",
  "key16": "4MXk5JKfvuCdc1F2113Cs1yZjRG2PbgnAY3gYbTFLqibCwdF6MF11VXPLoz2vgNCqpukkCagbLavE4TVQhneDDyx",
  "key17": "5TAjtAPuUnAeR5uYJDbmJxtBe7hW34mi2uYUBm77reSZqqZdoKVUJ6MA7s4vTiQ2JLQpLyZpai8yHjmWaZofCjpA",
  "key18": "5CoCj5pk591WVjSG3sfhf3zPSovDo3nmwAotnQhssJm6gyLfNieVeV68yiFe5BwC6765yWMnfexudHbx8sRJbQXm",
  "key19": "5Z9WUzNTjR2P3FUC5ZcHucGH68THvN5sfNkLc6jFSQziR5SBqBgV5yxhVdqiV8DSVVJo5W1xmxQ1cpGSy5vppY7P",
  "key20": "5ugjkhAfxio8mC6EUW5XfQWyqY95g2iMRTpXHXiawXmEKUUBVsi5UtbMfXzxc2vaoQ2CTryDcLC6UfGoXTkF52s",
  "key21": "zSz4NwVTp8LXd9c1qcRVDPYDSFCMkvyBareBYvdy6wcEHUMvDMJECk3ByJEG16mToBLaaFesFvZM4itbN2CgUhn",
  "key22": "XdVxZmo7sg4TSeebmGd9FJ9kEhwvBSHCqxQpSa7Uf7nxgLhYmmYhqTr8TBtQd4BgPiKiemnhKbcsYGm8dsRAisw",
  "key23": "65BSn9L4ZFeL3xxLJ4pXCMeqVKBj5XP48ZY6qhwDZyT35M467rLmFTCuuyZq9h6WhLyv2Ky3okBbJC16X6cgXd8L",
  "key24": "4af7KAbjRM25qaAGaTJEpFS8FfeEZPyznizBFW39dTa9r36n46u1uRYVVYruCwfFPFeRafM2iCJXappcRrEpKVUS",
  "key25": "5douuLMKRGPpSYomJRSpXr9LN4RrHAPZ577otATDFfSHxXcsQ6Pm8aeH14jtvayLBnyRokf26w6fkL6qKonG65LL",
  "key26": "3BsCSkW6ouTTyLcULPhjvhgof3rAzaZRXWxdqaXhS3BsD33CuBw3MTpHaE7W9wKMcEWDr28eaLvbqxtc9KcqtRFA",
  "key27": "DcJftou22azU9q6j9gVTKbuddwAzpMTGM1epBkHU7kP6ZMn7398uSDujhokJKVHYh34xugd4Y2SzMdce6oKGaPw",
  "key28": "2UHAeWY3NJKpt7VpzQv2KaPof1oj4W7Y9h4DLMhLhykco2EgkfTrdgPXvNKm5GgQ98QpXWJpCiyMwRCmHeLxmQ4Y",
  "key29": "4bHXbiFqSYGscM7bfjaR9k5uCKrWB3C7KFPrjf3UBXvyLYeUJHRq4Lov2A5ttcC81KtGueLvbHTwxF69ydiMi3x8",
  "key30": "2Lcemb2Gm7hhLozhtE9JaFDmCibCvf2WXB8WRbnfCWtXcYVAYkfpXYyS14nmBKadcJZbGqxUKVM6rJNpubCHLMEh",
  "key31": "5S686RGjY5SnGnp6q71EyJfxq2HRmd48YhuTurGREEj8z7QrN1GrYTMMgBYc48mZedZ6QoNEwAwXHtQR6GyZAgh9",
  "key32": "gxvQrGRGtDBnbgmM3ZK1N5JBwctVN6USuLNwYmzWKzKwvoLRvEynpR83jiCKWxuhb8AYkfTrF1rEWPYd2npYnvy",
  "key33": "2wEDm16ZYtKv87z3CvoMotrUm45jmLNETgbqbQX3eUBLFWxmhryTHQ8mC25JKWtRR7XKhpvHnDu2v6iLf1gXfVLK",
  "key34": "3VXbVe2qCBabHhPiMb8Wc9vU77onErnyK9iinAzoi5Egei1HxvkpEdPM1c1vbb7wEKWQbNR978Lu54R39oz35a25",
  "key35": "2fRfEy8wZHyuFU7rvXAZn2XVt9AipooBMeWG5pXcKTJ4Yuietu9YWjwhjzRE7w9vqoA6548zfyLifT5Nz2xCR2MB",
  "key36": "3zPHuxRJMX6B9ccw1Lc3kAhkETHTn7Esa84uW91yjk8xuK3JRDug1yqsfCLV6yvbxKWMPvJ5o73pfTcmn6t35vuy",
  "key37": "51SzqduwHhbNvmHzJcnEEssAQF76tAPC9b6gZWWUXj8dxL2RhVMQPMGpUzM7ZPWVjUZ5rtHhPikY1XTd6dasvQQT",
  "key38": "5afM8x81cYsQV5pk4mwr7uNmQFF29R352YwyCUfxcATQUDoYF7AiyT5cfk8SRqG7JkPDWywowbRBmWVWVWbNy3TL",
  "key39": "oQhLgD4KTiRQiAG9xyDQiyp7rs3SsksiCSM5hryYMjN4bY4zzJ5uuPQKUNvNdDs9Z7HbD4hLFuEGztxyewVykWP",
  "key40": "3Ty1zS21TPPPnUHYxGzTjwRUajinX7ydYj95hZJJA14xfKsSQrviEGXU9mz6f91Rbnvtw8BJYuTULJstio6NFRnn",
  "key41": "pNiQVK4yqi2yoec134bQJmgrnUnHtBccSmx9G5icFe4PhdkzgtSMJ5gJTyrBZt4De4Pt1Qjkoh2YdbKeHkaLqf6",
  "key42": "aBbySB8ZGHEV6HF5hg2cpDB4By8ksQNbDHhqAMrkaSCNi6okuUqtHvZUYg5VZGHTitgpJNDN31QP7YQN5Ntvv9m",
  "key43": "3Hpu9J316kQnkEXY4VEEGXZdyvp73RcaRetceFP9P29bQksWUpnNAfocosG5WVxoQH34BfQSoKhgbgqBrPxWBTzD",
  "key44": "3uMoauqrDasg6iUyxCKYeWVNUCmg9G2uFcDK44uBUyLTG5XYhkJQCfZ2i3epAvYKB1k1C19fPAAoRjrxAtBcRD6o",
  "key45": "2iQweHaWotRfXPzAPxrLUaGCDfiDJnLAkBhMdXGaLE3NvCkvDXg9ckYecempcJBPFdg5tMnwB2Fah74cE1yWatWD",
  "key46": "5PgbYpk9AM4Y5y5WBNy36j2P8zL2JdPSgUZvWMHay3RJML9de6XfsMhhwxy7h5NLhiq4RLsv91SUGAEVtZC7x5dA",
  "key47": "3i5gRd83v4onZdp8JMQ2Z11qxprunAxSckRy71ztazprJ9Yn4vRc1oh56HH6sXRMAH4x7m5NxApCczBPyMbQdb8u"
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
