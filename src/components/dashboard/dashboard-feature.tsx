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
    "5GTy661boMSN4u3WNRgMa6GT8ta99u1DxroGZKUhSayevAjHgLj395UdoUYQKBVunL9iyxbZVLuCoZPVKsH5HpHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQpyRamYvAMauoYb8ca4uAEmQ2UsvEPkza1ctELV6ReKVfgieHAa263YZcrcijsZUydTwzNQn2bfvCqoXccukPU",
  "key1": "GbsQ4yQ6aayNmskxVPb4FEXAYiF2v6xhLMvC4XPoGVf28xZF1c6KpL1KsfMjSFkSEb9Mrgju7EyXYnNitFXQujz",
  "key2": "36sejvWfiVzr4kqJNyyGuy1uN1cn5WdWcy6tm8h6bB1eBfVAwdLdowjsjcWG2tdFqZdpsChzsaAqvsH61XbTMh7q",
  "key3": "4TjAtjqyB62cg6wwNiHcU5j62SEENMWN4T8orNjwNxXf4u27TKdsT6g53zhxJUFUYzsHhhXpqU5BTJWUyfDEgCza",
  "key4": "2TrtZT13UhJU6zTJsWgmoxWSrHyHSad6cKqkys7q67FCLENh2VAN3EnCEX45Ze5DHdiEFN6WSuWMw1YyDAszELS9",
  "key5": "5ScEvEDQuVE4RGBgjEZYRtu2tGdPWJrBzFTA4ARum2RpTgsB6TyCfBH77Mu23sY8WPCzgoyCETVNCeNTr2RuFTRz",
  "key6": "3uAt9gMuwGch4eySucHxrrJAZLwvz7qhPmBN8cX2NRuraPwqGpreXC5VvNUFUX8ttrxJMjrVKrrePxZCrRpJUPre",
  "key7": "4AetWHsfx1uYGmYYDoz5qtxYzHXMfemeRavYAr71C7ZScRHNGHcTrfPeuk5qD8XiS9RKAsrh9sN95bTSCT1f6bsc",
  "key8": "ZbDNYX7Whr43zf4iH5k5vRcJzXcyPCyuJjm2oxypVtDDFvigvYdBVHZmakfoCXPQcHQAvmKCD3HUKjNhhR1W9jf",
  "key9": "Cu1oooH9i3AJnSeLXJ4aLmAjyht9wxsbNShrCHc9uyCRbtT969wffFwMLu1nb9qPXMNMWMxTTKCUKduHdcRVKyr",
  "key10": "3VU8xfYLzZ6b9utstEwznYCqpVmojh6w1xz7xdH8mB2yBGpDH5B3of3h4BQyRfwnisfXW7djk6bgqC6i95ajMm2f",
  "key11": "62pR62U6Ts3Xr9oBPRskSWgoHVezbVtRRmYyuzwEMEqtjTJifwrp75apkLbxyoHSo3NnH3j8dPnbUhfvDM2MKkSa",
  "key12": "2WFb869iGMMoyr7PkP8arovZQEoH3fQj8vch1EgZqAYMAqPYTKWFyqjmnetSdLNRWfquZ8rnDGnk6pkNsHdqQHnQ",
  "key13": "5twaCMutTKQySgdZnMR8jK3RAiv9K9mabNDkeeY85a65GC27mokfvKJAUHo1KKjpeSnseXw5Q6QeAAt3skZLfVru",
  "key14": "3XpdUpJtRfDVyZfGzQHJsTG5MZ3q6VUYVoTn25kSQcGRg4Lysf27yyn4RYmQkSY8ySnzswYE5ZLFBVRwCxEqHEfs",
  "key15": "2DRAUPCGFbrL9ezGMUnC6JL5T7xPvaBuD6JGB6XqCuVGoMUu3KoGqsBecLvCKCXUk9HLdHm42mfHEKizgKEoYa4C",
  "key16": "p9HeH69VwJZX6Fc564h4JBA7JiXbZeb5c2RzFGCUM6g3jTRpmbQGMX7jscwxm423myGT46Ji46tD9VqAWtCukud",
  "key17": "67CJY1aeY8HfB6oixvDxYfC64pRhbSML3Aa7H8YUYhNnPa8Wbu8bN5j11d8mg6bbX9eT6Z3xrmJUNeY656ijtYQj",
  "key18": "64ZQ5C1odwmrLAznpkTfNF85eVypmqGn4xJNxuuvzurB7thE8wwAJ8DAD8tydUZ6YVCHDRsN9pFMYkEzQzjaLiU9",
  "key19": "5nywcqxJKyr7S96B21eWUCW6Pdx8zef3nr3QQLChcfSbHDCRje8TURUvPCTrKxiRdXvc4TYPZv8GZkfUEpLbscZG",
  "key20": "5mEMuBh7zup2ToPugQFfcH3AHbJGmqyaD4cQSL3SVN3H54xuL3MgqeK1Wr2AytX29CzZLD1x44eHsPfPkGCog7BQ",
  "key21": "b4W7QEFGYGF8ognR2BknETVAkXsmAyt64uHJV3EKbqPwxQcXYfZxzgiu34n5RrT9JELQBrLprULkehBos6FGQHh",
  "key22": "2xe34o5f2rbdE72z3QF4qXddMM1G1tDV4iVaCRto3tndQnrDp9Pz3XyNRC6zt56MXPK3CxSm9VNoFf1bt2osey9b",
  "key23": "22YvU9fcnRQjygCxu8qXwzRzPsdtE2fq2hP2uNmJQVPjphQJ1oEh3PPptp5uh6di2CfcmCyiJBKPJeX76kx91RYf",
  "key24": "3GMKrVQ8QfLUzdgVJshkfEULGTHM2Z1Q2zEqELKGcwvkbZcSscYSxtW4Jyb77XcsqU2Sex47N3rmo3mVxDTcWQ6P",
  "key25": "5kV4QNkJ8TWBK59qhubCjy6udVjRAb6mmLdx3d6Dq1XXkYHwbmQTyPaZwvAeqkfurug3vLzd9oQDRZjRqtt3Jfav",
  "key26": "WC1nVwYWww7MqPTDm2At5eLu6aNg9HC1QuUtoHnKToXLeKnJEiwptUxFeJfkh9nWopp5EwtV4tpy6J2uqYaF4Pz",
  "key27": "3tJ8nJpwL6wtNpuoCiWBvNbbhKLEUwkeXWyK3JSzqm2rKg7YC28NA6836twcVsjSrJBvfd1jFCJWDajN6uz45UA9",
  "key28": "2H4tMMP7un45uraq3VSqToVnUHBi9p8KavCBXarrjpYL4c1du2pJmxS4VZYeKA28aAn4uKdjjP1W4NMXpcayywRm",
  "key29": "4K7oSY2FHmyHkLszLd71Kwa6a9JZ4qEPf9nFcxtqqh4ELdRYjZw76QMxXviqTcsxFTTy63MVXFftbqKDQPkX6zPT",
  "key30": "2SzoVH2rFtqrZki8VFQSN5Y4QRGQAnCoWnv5wD6wNGdTjExQ9r7pcrRM5byVqziXpaGe3CdqJzNKkZ3PFhxnw1CW",
  "key31": "3dAfkAG4VZUS44F7Yj1CYvm5VxWEfzE8VNYnEVWJQCWFvGY9D4Gxe8XLijMYidag4TuLoMDh3GFiSAbYGjEgbh6z",
  "key32": "5yd1w6i6Nk1LBYfH9iZymfEP1fgNmeArpRaBCcD8X1Dj99jYtncrPAsC6ZoHmJWKo7DSKRSs1ejH4K8pJmyKKRAR",
  "key33": "5gKwb9zARzqQBcX3VXd8aThD4LdLyZCq9X9NtWy8x3pNGdTVzj7rRswYQ1RJKQDApzKFaq6wJX2Xytuzc4xkBxTq",
  "key34": "5w7Rm6ka2myuujnQdEh4yASfvAAH6XSkV2B5T7vtXm5m7WK22Z8TL3eecRGsd4T3q7b1mfX2Ax99kv9VxShQq64r",
  "key35": "2USsV92zqJFquv3waCe6QUGs7nViSdJgsdnnGGeLJnqFCJEzUriUUdttyHhsqywEVEkfmsXRKUugZt6QZWZA3UKJ",
  "key36": "4b1rV3XYJzSAKvygKcE43EZSU96uMDTHzaq98vG43j1Z7Bkj3QehzZ756J2ttDFeKDaGvCvorHjfN2h9H8r9CJP1"
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
