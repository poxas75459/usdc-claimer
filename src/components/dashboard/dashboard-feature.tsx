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
    "4rY2LzjBYs7vfF68BKmDLUZogPXt2x4msoqnL3VHgMMrjJEt74dzKFfZ7iW49qtHqRHzp9LJcaTvTPFsV4zHKyXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r1zms1HdvPk3yHzXAg1Er8DMdRacmnMoj4fbVYjd3uaKFbPcyrSA1U2ZuXygk6wi57mmD96UTNpVZhdV6w3NEcG",
  "key1": "4jfUjN6Ln2uk7A3nR5JTBgHXy3XCEKxcrpaMyQe3fUaKUowNGvdS81VKeT8pdQxBSsQGbXffg1yvwXJpFpSk1JxK",
  "key2": "4W6B5vjDzdZLAyoXoHKNCZMszCthrXkBm9mwoZaXZHqNPkcH8adyEGwSweLKqC9EaPiLiWkbqEzY3aAKjzEoAcSg",
  "key3": "3BobdaSX3bTxQ9dPrPmexyTQad1HwYDz5HSeZGfzzL2bpzWiYek53tPUuWKN7nWNiXUtDefUU64WLC9VNDNDmE1p",
  "key4": "58BqobeoHdqxScXNdJgx3zs3y1Wbi5QwfwjKHMUbyrqaKnNzg6VsXXcv3nHtpgK2HQ5eCora2hP5LKLQiA6Fk2vC",
  "key5": "5Qtz6dR2XZhvFf6VHNFqGsyV8SZiihPCZtNckH1636sBpzcWepZPjsbtLccQoC895bdAR7N1rw2NV2Qwwwwi7kCU",
  "key6": "2rhC748d94s8GFCQF8auFGNjwQgZGwUnFQGTZiKp57wCPW8R1PLFmWegYmXMrGTHVkRgaUNhndk2bJack3BBsbQs",
  "key7": "3BYVFGchsQNcXGo85WRje1nBLpGdsrFktgAckqPWybz8VMhhF5HQKaWZZhWV6Fp8Vsvo6gVN1x6FQjRNv5skndwV",
  "key8": "b2gy6MssiYz9TrYqpUfDHmmtzoJTcGVDSTmcvX68E1cDLYDyUWdb6FJjbqH87jGmiyoygxwKV3BqWH2D4fVxJgx",
  "key9": "5Mtwq31Pj2MrCF9kd1tJ3vhycxa3UQx4syGVw5wJwRavSbHUtUVLDTfXYYCoiBQEtZFcnCEm4d37WwShvtjKRYUr",
  "key10": "2wqsDZAqpxbErRfxBNREe4dQYRZPxWCEZn9duihRk2X8V2tHE5AUAsxR4QydnLw8YjXXxZcHhhPsTX4kWw3STUP1",
  "key11": "4sBmgTL1Njv78PAor3QjmyzT6sUwS3pxwLUXtjfirMBgHuiHGzjP8TB3D2sdGkz5vJsww8gn2Qr9BXG4YNY6umX4",
  "key12": "5BPH9yCBGokxWprsqGKT9wtMdVEUzvbdjZ4uYY6VachcLYqrh4egsA8tUWfEkpCcxvxErEmpsawbKtwg1jtPW1fi",
  "key13": "5HmL3LxWGq1GkWW6KoQdnvBGwwSyCDLLqe2HbdnWqP5Cwgrx7mg9Nxr4u1QF5b6nQ841twfwPUUCTXWZP6dtZ8y8",
  "key14": "524sVWakiKMoXJJJL1CkVxF1oit1yNfW254TBBYuSHhYyX2x7BNBsxvDdrSBL6et9h2bxHyjV677Z7Px4XXSzA17",
  "key15": "4xscf9SYYiooNChFe8ZFfv9pALzJR9rt8fBoN42xVCQhbrFHYQefY7n1r88Zs1pGDq43WmSaabkCWWvccwovwgx4",
  "key16": "61D3sjYZ9K7exRpYGBW3wuU7EJwuJzEGBu64oavFxry9QDp5YGZTStnpvoaTzQkbrwQjgiKW9f75gGPpSwn8mJPM",
  "key17": "26bJgzUHgr1fDyW6Azzsd3VGuSFDHCdcSj52rwTq4jzyDLpJNNLv6p5RyKxT5Ak2yNTS3n8yV67kFj8EU5Ry5oiZ",
  "key18": "4teLyxrmDbEYcAgR3wY81WM7ffDvmwRnFPYiYdVtALA7nJcudDj8sSyTdr1zvmdbEuuW5phaM3M6VuLgRF3tKQcD",
  "key19": "URcnxjHzrQCSoft1b4LEqdyocjEPfq5SzXqJWniuByLf3ASXisDnNNGyZ382oh3XLdYWCA1BKRg6Pf6im17gS8m",
  "key20": "2YA7K4mekU2NDC5meJYbfjHFLHtTxrXkurZaBHoyS4MgygYwHvCU7UXFasdpB2aNhPTU6ZYAGFRGSwmxr8dDJssb",
  "key21": "551TcNS4jJAMzJmqkKHYYDDwox764MY9ohhwzZTwKYiUsWUyFiys8W8ZbQbpYsf2pHi3jt6buL3wsjjMgmxUrVtv",
  "key22": "5bHDWTAgo72HkLHPqcy6LecgNaoFWu3zscnEcdL3gnadBus8ni5acVCUcEFrGFDUjEnBpripnprGm1HFXtZ8GTs",
  "key23": "2HHiN6Fj2rkrWF3a5C2YMcZCN9gcKio8tWm1auQB7dNSpbPv3J3tixzHszPGXj1BcBMhEN6T4dbq3oQdKhJoaiFP",
  "key24": "2T9EkFRDQgRgKUJYLt3NsY9Zs5g7DxjT4KcBuQMtHbEJHLDCcDXVaVnziJzLsNr8fDxc2vyqVPFLBGBWLwT1oWNn",
  "key25": "3aqgQSZDBWMr3FEnSiQP42tG74vSiwFq1aK55k2dsnYoC8r39yXBbGKmJLKMaPMN1diu7Ra8QNCmhsuUKaN36TaJ",
  "key26": "21rCbtCueMM3Lz1SmD3SmVvQvE5uQeX38AKS5RY5qMVM8f63q2pugKdxrDKHMc3aqFzSMiQiMvuLRXL1BFRZdKJD",
  "key27": "4AdFLQMvYxznsegdS3CpdBhnKpeFLmorwrGVwhGgy4k9v8A8KrzJ6RNni1zwtm9xwpf8Sfoj6NLB1N4vuuEfuukC",
  "key28": "2Vp2ymgXNrToV4iLxfAPPAkrQkVykFZP4hAUqGA272WrbgQFVm93MBWAEifaGUnDLGBZnBRTwYULjfFKJmTadZsi",
  "key29": "2uGBjAxJdTDpurzGDBZK4WSgfcpn9R8VHDUuAjnWJfQ92yBzXbZ1bnC1ASz363SrGQcjSyRSKG1CDKnYZEayG9yZ",
  "key30": "5imGddn3MF2qPVP2TArufPNpkLUvusrFMfRz876V93bQsFgwxErskPswagzZ2hU6gqNJcEibWmfneRi3z6wY7j7L",
  "key31": "3QYt15k6FJh8uR8ZZvRivSdRa4ec8pTssHMnU8UR6aweAVwtz4e33pcJ2YpaskBCAKMMWWyueBa7r7TiVb67z2mu",
  "key32": "65tDXURAZcR34Tj4oJ33Vt2o8S39Y9FJW6862ayLdzwPZEZbRuYKhuJi5JWSTxSxG1PqRSH21yn2KLx48NSfbP3p",
  "key33": "4YqmfSBcPUk7oGYYDTNpvb2TAhMyQ9DBbdn6y21jizbJkJ18PPPTavwH8M2s3TrpYLxnxBZewhWnAvhUoKfM8Q54",
  "key34": "2aEwdF4KqAWPJMKoYpiPLvcb3gR2DFmgbe8to6g8VFmNNCHh29fj9eeCGQHPRfBmsH7sogsC2Zs8dBZifE47sace",
  "key35": "4t4WCLdNcV7nKvb2ziJhErAHv51xcjSWb6EjBqfeViZYWo5JSKd2rCdrQ9momWuY27ns2US7XvAurmtsx825ACxK",
  "key36": "57FQo19J8gFnhtD7XZbu3hU5mg1wnaSwxvHHFNwJzQDeZVwKvyqrFN8amF1SRKZqMJgRQpkjMgvSQ2wwVbRogpqU",
  "key37": "63gvdmL3JEY7eR9m1gCWzpjy5r6iRmw8EgM325LGZsWP9pczWvkZZf9gkF9Q3y9463tRP49kfMV9p1TWaMrZ8udU",
  "key38": "337Tia3AvAGBerTNRUu62FHyWApWyhAT38kCXRpapg9kiiAyAECZN7fTqBezpP4gQyqtjdxAjWf29e9QP8tyL4BC",
  "key39": "5b46ajnjXTDagp5e2rWsBVGrcHBWZsXB5jyqwLoHxS9VpzazNvkt5PNnMAqZG9Xb18FmrpHNha3q7pbb3j9pkhk5",
  "key40": "457eoPzoJ1wqzjEZpczAgYFDswUZTxX6ddBK9UtEzmLwhg4K39L9TXENHGuaj4A61xvmBT5SvP4DWbyxJAHAKN15",
  "key41": "4Qe8Xtn3MCuSpcvTCcBa16bkrQ6A4YVuhg9NDRAJ3GfFsGVsGjiJxYDZxBunpfCZ3Ty47Hui9nkaJWh4Au3bszyg",
  "key42": "4yQCXdrgR6aFLgKoXiUwV5f59WzzYkYEHziuyyrjhzwW7crZxPprWS5SWMC7JXQDpg6R61e3Xt7XRdXR78GRRnKw",
  "key43": "38y3dtZ68qk7e6T9Lj661CdiaGbX6mh7sxvbGUauFu89uKRYXKaP9ojuC8nrzvNiKx2yL1bDeUwzyAyZMbFdrUkd",
  "key44": "3iHWxVpsyshRbHf7eMtPFLxEME8yqVdUP3WSg7ZP5k2kvcYKm2G6F3DWkJgLK9uK27ovUV4pnvh3nUbXj31ZQQw3",
  "key45": "5NK98wnSyenb7u6wcMxV5189WpW7rv5qst4fEBMfVRTYhRikXTrAmKVMf9k4SVKdYTFxQYCcPLWroNgKrRxBVrN4"
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
