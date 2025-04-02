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
    "mh8fueSM6YxCz3q3K6z2QZWSvW2PokimnFjf3N6Nh7QbXUsCi6MpnvWYfKsYwU9DGnLFkVpbiYKDjNRaE77zcz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3skMU1KUPEV1PRamopSVzBMso59EX3aQiExZ8Xca5H33ApQESnrY3Got1BCz6iT5apyEHn6BJQSq11G3QzDnsAeB",
  "key1": "2WoYm1PRovAMFcAWrLe56GugDixCGUZTsD5KLnBNR5zQJDyBpJX88fUN29fiJa92uNGxFYZcabJ1LaP3yeL3HDBJ",
  "key2": "2XWhXYfVggpaJE612JiBEbvVPPf4dSsj7cx7kRLtJg2uJtJACCEfgU1pybqNrVRNMLWbsv6CLk2xbDrAa4ytuge2",
  "key3": "5MdpXe1oHm7A1iE3ZrMu2FJu3DnNPzMAcr3QjbNaA6fY1hSYv3uiX5dn5NThrShGow1uChGVPB2wRqdC7SrKGdmz",
  "key4": "DPtYjosXW4mgag1cowszvnr9SEHSThQDPdhEocQDmynNMbnpESmrMzh3RDKZuYgRfGogdfv5FEtbSEg5iTLjusZ",
  "key5": "2yMkxwTgnnuWSfAbMoc6FSoHAnHrsWmy5vySzEscTVuSdKPaL6AwESrSGypLh3befSgNPttnsS8d6Zpqi5Edez9a",
  "key6": "2NDozvN8ppPxbfN4KYpZArnAo3cMK8ssVcgZ25GdZYtzwbMmwE5j3WgPAku1zX5zxqkHNm9cAwZKFi3maLciWX2v",
  "key7": "GU3D5taTY5XjRGDAf8S6S8qUQ63RpqzK2uqDwdH598oZpkPfsxrt35BnjdKBG8yhwrff8ppDGV1NqoCCWmphgiK",
  "key8": "cNcivUDTe2hhPWF52VaGgGXKJGy7UUhJ6A4SG3anLPHmvNJ2gwM6kRzr6z3s7QU7hy1s5tMHzTs5FyNjKKgKAUo",
  "key9": "4bJqYy8z4HMjfHFooyze9w1YgM6ruUnZetLVSP1dsGJcpCdbHL6QHM8ubcMhm8tvVsyikGUrqzuUK4AE9BoGQW1v",
  "key10": "UrNYZUSiUdZj3tCQR4JrTxjMyJnCbwWzptjyCHNwXSYqtw3xAxXKEX2YcFZQp5sCK3JGSS7oMKymL29NHK173p2",
  "key11": "225VFyHPQB9FSvXHhK2TLckF8ifkGgncrHLJ2RBYxpKvdxFNeDoKx5ghgqFXNH4cEmsJeDNZfrVWwBfitUhAE2uP",
  "key12": "4YEFnqx9o1j3rkpcLrfiLQT3jRq8ceGLMTm89UFUDNRPLRmA45FRTmgjxZEA3zC9jtBzmniaBaz7Bs1LSebs7Ejn",
  "key13": "63DGPvDQLuW5EiYefAe3MfPAMHRRmvJyXLe2D4ufAxhwZz5e5pE2jHvqVfaSHeWwF3e9Cw6rYL9qgXiRRBJL9rhu",
  "key14": "5cq4wKxYU2LvKHpbbk34gLSRh9npZwJpQS5nAM2tccWojrUVYxPwY8BmYhSZAU2uM51KsM3ccSCnDsnL562UdUJQ",
  "key15": "qUMPSRYNEDsMUoHsSSWtdb5YyPVwTkJekEBPhmdqPV9XqpUr3VEAw797M3TgJWBHwBQCKg3xjunJLyu4MhQ35wp",
  "key16": "4VkpBnz9FFrh9YSiEvUZNkotztiAsm4anUMfXJEQ1sDUizVuu9Draqc33u4eRnrf2G9BodEZqiS73VVH1toXMjq3",
  "key17": "37CV26VhxJZ51dcbnijneY2kNLbbgT31WLYoM3FJmYSechMNsCpFpXYpRpjvZDrSPQnciiYS6NLEmqB6rD7squFZ",
  "key18": "5JjoyRBZwDy9gmot2ov2zAHc5Aa7f2zQaE5v2swkMnpGyd2Dj286HREvb9LGGSJiQbmkMoQ98AtHg6Raj7nWbLS4",
  "key19": "uyzNHTxEsMB6FU8Jp5hL43tZM3GHkGULmFQGiDd4gizuZNJRS9zCeuqVdhJ7xxaSYCMhwhdWZNsm3oHXGoJgufo",
  "key20": "4h5Q2yn4GiLT37v3V6rhbt43teXB3jtQdSuSmXtPkoHsCHyGocvruTSyYnG5Bp2Ves2NBxdYNxgFpmxtW19t7muQ",
  "key21": "3uffEwUwwYuyS9J6jkdhJTaDX3KcXP7kWpmkAy3BhRn8MFQ2R1Fy11BhH9JsVixQCnoqzSZk4E1jjZi8HrYnr48D",
  "key22": "5h1BRHvf5kq7Njo9pNxHGHXWbZVxaTLf8EUH52muQBoswbqMRL1L6wRa1VfPaLVWbzhtUuuAJh87wv4boDXzLArM",
  "key23": "5M9E38oGTF2NRNmofE9BLx1kKXAqxqdxF4DKsFMKnSwoebaDM74JoaJi8ntReSUuxJJTxhU9KWqxWHcLptJ8bn1i",
  "key24": "2f9ASVM1bmZfKobZ3JCLBo97oyQQDZhsVJJow3HHCgYTdrnW2yarpn9QfQ6kdJd3RxsXNDD1AwAtx6n74mFNg9LA",
  "key25": "3CjtL262n1nQZTNVGVDDhwUCL3UpbiqyR5re99oXTuHoknAUZ18d5JLbXC77s36p8AYwDA3rgKDEe6AKWJpHdGuC",
  "key26": "zvQZpTK4yNs2PvUXLVZQUA9prJAo7VftcsiXLJ8NeW3YRTfxdVxauSzVJPRBXnG4aAMmGawtt2UaZTL1JZpokwH",
  "key27": "4XkUVY4SjEYNaQiiiT8FkmekL6bE4EoJNe4mwgPFXWQUfqA6JLhTBywC5u7E8PNjncF7tREa6xX24BVwfShFhFks",
  "key28": "21GeTbcfx74D6Z2ZN9QoF6PEQeW9AdZJCy96KrUFqjeKsaiz52THUwckX3fFfAK7VukMKnF2CAR5cRUNxdpa3Ki3",
  "key29": "4Xzti2NC9UEAe7i8A2sipP45wEjHnP1d5s9VfLmm2SHHYQ9e1k2tZmLebTZFM5skngRwYyMjEHeU8S9epGk8Mpsv",
  "key30": "5UoigxmTt6jzjkGngXSEEsQdcR6f75Cq9W7WZFk4L7oF7m2GsWHuQPbBhDc9w4CRZn4RCMTsMimEmzGCPMsUGb2X",
  "key31": "6CZ9EFTu74xzm8yPkmqAzmC8zq2SPMC1MjGD8NqCjoFgq7JY99De6M5tSfdTu17JiT1d7HEExUChZihdV6bm2tM",
  "key32": "skeFPxVEVS9Kmm74ya9YQDPMQUZpW6a5J9phYj41iLEnhyo2J3ohkNzBqN5QRsX2ze7xx3upZCuPDN4QCQuesDx",
  "key33": "37eGX8YvdqNTVPrkkA2CBBiVfMLafbimLWUEgDyDDpJqSN2MdQoWeMhvWRCknAGxHk4FCYMwtWmWmKZ1pU8pSZd7",
  "key34": "3T2XYJXWxQdKvjeDkxU3jGmkrv24JQQSr9tZi6jJWJ3dGqeJbjeTnSNJmFt544dcpJBj2e3w5dZpmm2atE4v6Ai4"
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
