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
    "5b9pV87sWwWrubnJYJRmuEtjYNFtcFQQQQdWLd12t4tz64EAGoiarEfDBj42gTQMi9fU9DL21vEaJ2MFNc68bjAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54NrfqVAp2Moci6G4YmDDP6tZFtXpmmRz2QcLiVi5rH5S1A5MrseCR6B7tx4M3NgTQS1nLCR6AooAHFEwLFk5W5o",
  "key1": "4W8J36YKQ7LN31RGEg2hike92tTpMRn58MNHPSE9J41x1eGyzArvJHeW2ziZaQAKMLQGSavKKxbPitbpTdX2Y8kH",
  "key2": "3HTAZbFTqxMMieSYeEGYcJRfSQJAJbAZp8NWCmS6j2zcXkmhLGhDTXj1ee9QdLvhfQxzkB32VVr3zCQx3ujeJrZ3",
  "key3": "5kLEq24Q9vAj1SmuU3SCM3Z39kNzaFMu8C9Q8u3ovS9D2x8yo46vRXmW3Kg1XnppEUMYGrcrNRvvTA6H5atm7Cji",
  "key4": "4XibdFhY45CeD8P6meqqSW8VuqfhS2VetSMScwnPVc8Ph4brShTcrEZTdNUerE6qCS6u55q9B4sq1Bm2PPgDPqjE",
  "key5": "5Cu41EUt5qW8KUTB9KoippSrCtG9DYNDTvSdX461UQzK7J6LuZUHoh4h99vrDf8MDydAYaoA322QbF1hJiwgAogV",
  "key6": "4KQEApd34aQrvrXcTYpGfnnurTZL4T5V7qxyyYsoU3jALXGRyzh71xC9nz6F7jisuHCtwBjANCZApoL1LrPb71AX",
  "key7": "2KofbQek5GjPET2RZLF3sJfukgDaEJK4dzLhAZwBPsed6j7iPu17SSXRgjZBhZ2JcHc2VjrGJvCspgZBgLPdoHPc",
  "key8": "3pEu5xH63d25TjBp2aZfp217No2fz1ZgSF34bxCCvHNFiU1zVfQNm13bojHMKKyxdLkE7ouVUv7w3hL51Wcy5bSU",
  "key9": "JK4vwoAWrxoa5gQPaYSWcnWLn4vkxBpMGbRAi3AWS6YDQ8hGbKvqc2EZJXp5toRpWck5MCYJX5pi9VmEyVpxkpk",
  "key10": "54vAGJW3qnzkyBvUHqDr7Qqi9CN8X3YvycEiSQmw7noRpyy4iVPVAhRujU5YKxJa7oJcF2pMTmJXJap8YUKzi5BF",
  "key11": "4kVnVDvbW1VsrYb7cbDKQcasUd1bRBxxpkGJpvP1orePdGMiCUyjcTjJHEBPEiNupR6oXKD1Fp2mU5LrWFJjrHec",
  "key12": "2o4gGfqJEkoVpJ87ApDm5SMtAEmefcW62YmPhmvz2FBCJ4jjoXbn99YQ9VgdM1NTg3Cju1BjHB7evYG4WwyumTe",
  "key13": "4uQAtgV3YooQK5mRf5PUHBtDj7bFX4ofyk3DNDKxjWwU8ui5zhWBpQsxSPfrvYibLkqr3DF4g7C1Kyi3sRCPhpDp",
  "key14": "EFJ1Mwqi4dwo8uqjwLpdq66qtETPGYyvzaZaFdByQrwpUkD7kWRVxJAhmDL2MMtPjakp2DWjMtxL9zaK9nHhkZy",
  "key15": "2yJ5QEwEgcu58geahsUXpKvJWBKDQeMnbTcbfJTaTRevyz14wZVwCDgUDEaKFAfVFuXYEtTE46UzfLmso4ez5xmc",
  "key16": "4riqeRp4kHHXD1uW4Z3quQxZv7FggNuVBQ3Kw4nJe5kX74iMCy4zNFMiVswS4uV29baaYADKfje6BndJTkpti3Ha",
  "key17": "488bGvWH72yrFuJKAicg6F4wadXN9fkBN8SR1WjUZ5iVdUytxdHvs5PXySo77i6gDXS18QowpbV79tCFK9Rf5nhJ",
  "key18": "5zCAJuN9iTobZahmq16JnnQX6fGt8mHg9E7M5YP1Ncd98TQDyZwR9Uv5CcM35ak1HA874LR9jNnbvSE3baR3TCHr",
  "key19": "BSEMEUqtGwMgS7Ds5pzGtxasw3vYoNhWHLmCciCrdwNP9qPkXct7wUhRZ8enerqCxgaxx8Fx4vaoRsGLa5ko2Bz",
  "key20": "BgLLJ85KKpySm9L4mAbGG5SSKv2f8VJe2yS5k7qkrUCW9UtqDAs26Xed1ZP9WEst2MCvRvQQgBUT1AgSojHDT2p",
  "key21": "FbjWVjadrnQxSm7PQ7MjbeK2ay2EyJDo4WwanczcopR8GzzGezQwuHhGXABbnuYWaJJgjuubqog77zmKK7bsdKm",
  "key22": "5CHz4ne9Jdav3u2dMPjV77Vtn9QGSsCXo4wRejpfFH3CChLuXgwPpV93QiGUMVXF8wQJNdjWf7ad88nftveqGvRQ",
  "key23": "4DLZq5vi3maohrr7E25naX7jPc4xGkPH1R2BwgEGquPb1VyvdimjXsjRDErKwdYsEGFDnsq4XYq5dVKsGhUiNivY",
  "key24": "3QGuQkqCAmCeaf6cu7hKozCnSFX2UHhcVuAHV7uuUieitGiLqMcSTh7mX6s2EfsQfZoukSaZPzivTfFPQTteQXWK",
  "key25": "3BVnSHnr3AJ4xccLk1EXytH7RSoeRu6cY6dUAgy51GGQBi4m823Cqoov7N5uMT42m5cfVt1qEht15oa5e1eAEWex",
  "key26": "3KfdHNagfTU1EacccwV5M7rrrn777pmYZek57rLRfdv5h5FswYYFHdJgebrM4XsYZ8TtrMVPGDsUkmBaKyVaN9re",
  "key27": "3fBsqe4jVtgWH4pQPbyChUXE9EakCsonACojRAb5UkXYuqhD63MKfxohQeoA8R7TYaNgEediHpWFigkYYb781Gm3",
  "key28": "2CkhK8m7s1ctYUUj9zHQVdCmA34axVi8SZCvWzafCJPLHFLEkyiH6FS8tdShNqCtyR34QcxupxM1i2CYyvukTQpN",
  "key29": "2zav7CCdKCqzvn946DdWDcqtVGA3fuFwPZp1yxZSgDh8yvgYExkzW9WBSJ2KihZRWqmuY46kWpUgyJ4mrj439EJB",
  "key30": "4npJqyKnQqpKd7ZZQB32m7vj1Z936bYKUrsnMfHVn9BZDoL4KbWyapeEFUbiHNF9qTeetH2g2eavZ4cp285xTtp2",
  "key31": "5XqBK8e5oWP7NMqWVgUs1twQR6qZcGkALFNGBsMQNMjNANVuvt3jKtM5gkMu9qp9Bkx3UQBarJBjZZ8fJjNDa9n7",
  "key32": "3GxZ9QV8KVKUbSM5x3eUWYaM7RMpaK4hzpZFqsErgy8kR9z8tbQazV8cQGTH6wr4vaFishTR3RrtQADEyaC7wLgG",
  "key33": "4va76CcyXxLLWyDzWpRZ1vnBUNcNVfgG9bfmHgPuShNb3ZpeFn9r5hgfxxYsz9UjDtwtdrd4VbtQ4tBhJwfsL5YM",
  "key34": "5KFq24seGFiRzBBUua9huYQJNHcK2VCpFBQZFuGnmZdTpAb5Xw7YUA6zdF9DXrBFTurTySnggGctX3cU8QVhkPPd",
  "key35": "5Ra8oAvaeiovTXMbuDhkhHtEESm5Fu6NoowK6MrnjW687XH9VJHhYqv5iB17ZhDCdRNwzQGMjQGCUVobqW4x9Mqr",
  "key36": "d4232i9XhFDaQrK5ppuNaVKLWvhiPrsaDB9GMHPoKk8bJkpsL2kHFWSSBT1nZo4jQmyLMCAwLt8JWudKZ8jMSqG",
  "key37": "5jXtKUedDZsrb2xy499oKagDnF83JAaoWNuuACH5VWQMCWxhby8CnGkXptnQv4TFkCQpVmUHzBz1ND5NqvCrHhRH",
  "key38": "qXmwZrUk1fPFbUamPifAhAm2HoKcD5PZRuQUq2qXhVkCQCH2BGdhgtD6LX7PHjkaRvy4x24vni5N1j7tyoijAYg",
  "key39": "4m4LawvspKmtair5q7jbZhVx4j1fju8RwEjuk7zJuJd5WUhmLXk6ovj7ydbQPt2VydGb9A2FogeFU4UyNtvnMoq8",
  "key40": "2ZXuwHhqoHP9ZFR7WcNXmh5CeJoiop49P2n9xthNDER92vApRKkfzh7g3T1hfJUMuQ23n9J4xudroyArqBdttojS",
  "key41": "56HPSNUBbBkNDPdGeEtL89MqjA4NyCrG3muKgeyBnN4bYjfptFpkf5SnxyS9mHmuGQkVsK8n3GFbp2ouSxKLZwnX",
  "key42": "4keAAhbBzUBx4DM357npU3aXQg3qjdexfgA9vhFeYMeQrLVNZ6Y6T365nzp9ThQpJoM3HQj9eUnwAH7uG9EYTbMy",
  "key43": "234Mn7Hte43PDiQyPZ5mvjrtS9TvQFVhgRuTLEbtXGJcsuCeGE2j1kisBSKkCQUSaFrVZ8VNnXUZ5TKxc2G2KjvZ"
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
