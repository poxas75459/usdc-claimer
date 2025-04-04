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
    "3oBsLrpgmyfMr4Sp9Ted8b9YrcEnHhLL6efP6Na35GDTyZ7mQgDAhZgswdtcrakDmwQwoHcuyJssbLHFy7HS2e5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Nc32Wep6GP1N6HP2iTxdb3YTpBaAb37vuutasBUJfjSthTSVSMhj97TqQdfTpd4fnxEpYbiquBcmAK741LUMh8",
  "key1": "4Tv4TLDbgsSutLwRLU3oRx99MKhmUcRSDPkUMJD4ttbusiGLfPpVJfgVNrteqe5uXd8QfxeLh3ToeF2oe5aBFrAe",
  "key2": "fBNFpV51xgCLrgnaRaLV4bg5PmsHzVV3jvD7eBjC2m1nE7yjvyNJDtS1jdfsuuiyLutsNcmkXAhkxGYHbP2YU6F",
  "key3": "3n7YXpK7boMUhSiKpLrSKaD1edmDZn1oE5VvBRd2PAn2KkfNDgHkKLPjm77uyc1rrFojwErkNqLGC1GHc1uQfPk",
  "key4": "4pRJiSQjDrALA5wo3D5zrtnATpKcDqPTAtu1mLwga3Btw1E5chGP6w4sfH34voWH599FJYKoAagjAtCT2gJhVKyb",
  "key5": "2kf3VVq2iSPiySCpGhbjKnqJeqF6zBpeHXjYEmHkuRvrSW1b8AmhMZiBhyQGzKxcDcuyvX2sTz9p3HP5EPKEfvAM",
  "key6": "2Yg3C5SApvKw8yVc6n2fuQbFRE7T7f8ro1UfWTJZew1kr6BWgF3XmaMHb1P1e2vDqXeCJWFdRCs2siRDrVQTFhAS",
  "key7": "KpuJtwwh5TvAYGzJjs8MYJHppb4hPjbakEyWDh8erkpJx7SgS3YBpDGrhtf3v2TSBwnCWVfpXdAH8ojcuddv3fh",
  "key8": "3pnGYegTexw2dVmeG85rGw71yi7vouR8Df8ZdbYRhrv6sJeDpMghincFsDEdrQHcW9GkRJZ4vrbLCrKTQYqwuH9B",
  "key9": "3D4XzpB1jaMyABCVH3Xq2y8fYQE2wfxguEJDMWYTDJ3Bjz3wpzF1gFhP4QVXE1Ef2QEFgHmHnoZeAKDYPgC97P92",
  "key10": "mpX2dGMZsJooZLJ3q7p68QkZTQ1hcvWJqR7RManrCuveuJV9oPhCjfsYTyJjD3rkpVLS7W5FxHPUudSkCEA5VLA",
  "key11": "22MKCUZDBB9HhMmxEuhBRSWSGcq7wp6qPU5gYPxtFKUgUP4rWRiQLr3AxPWgkmcd75shu9Z8fX86suvekn9QNgN3",
  "key12": "5niJPQXqesyLUzxVwX5UdrW9rLXRBrgzyaLh3b6ScJxXK4eKCaYoZ2AvTVWHD7Np92RN2nc7KesML3oF7cMRVe8s",
  "key13": "4fhQypAnwm4NpF9ZiBzKxEWD3Ro1NHmSThFnnyycAywXRepSmkBFurF1jKgBEQuBPmz77LxfwK823tGQA8YQGPbH",
  "key14": "3PqFikqceoq8L27bg7JJUBZEMg1obfXScEgeGzBMtR7HoU9KYN5YqHA5wzD28tRxATcgXEgvnymTadoRAnCzc87F",
  "key15": "5PqwyS7Yh15Q1n3Z388dcsLC5ef8Je5qegArxYpYfhYg4JKMDUext722HiNgqmgGCTEMCAoBcC5ii6bdCpHQWpYX",
  "key16": "iaENu7HvYEUCiD5yoGJTFdjrhAh5VPcpHc8AfTuoUeUEGZb5fCZ3tTXZmo8Ub7EHkrnppWdowq6Tygz14Dmw6aT",
  "key17": "33t8FqX2pXPxY8vHggSX5SVXQ5Xjy6a1fivGNNSqFCc4tNmBZRdyCAYRieMR7GTDSfS49phND68Ute9xMAB8t4J4",
  "key18": "3Hoxyn4sGkkiNPXVgqHUEpdyBEUn9tgSDoaRct38EWD8HJUMRKRkftZe47zCHzeYYCxCUvusrkqy11ciSm9hibX4",
  "key19": "454Hc9Zhyy3Y4deb5fnzruprTDriCYpYAx2LxpWcAEYGJW8281coabw7YHpUA9Gb2zeSsuM7EL7QuFj9KZuBpGva",
  "key20": "4exPE8nsuioKxyHMtGTziAx363fuS4eEqG86E7sxjHEZWf4Uw8wK52e2bjDqRujYVs5VL7E5N5Y5m2GvjX7wDVr6",
  "key21": "4LhuJDuVU4VgNcN5rVHXjWrDfdZTZGA1SgST6waY7Jj6dTTh6xo1No8XAMLjzFGoQk3HobuzXGyUqvrF5z7x7dhm",
  "key22": "5RpH8nQRtzdNJwL7MmBoYbokMK5F2YBKoTWRZi83uNUgMDtz1HdyrFxBHUJRPwWH2TNXcR7gNirQTbbK9qNjWAhf",
  "key23": "HyVN1iycAS5arvzUHu5zvy89HUbvui5ytAbiwUSTkiXbeKGdLxsBk6h6LhQLgW64kYXDPHPuSRd8PT5JatSmcge",
  "key24": "mG7ViXYBxjPHgbDentQVNYdJ7PdXqYyqxJAEDiPkKxyYfCUn6LFdup495TtWaAstAqBrKow9rhv1fyMG2oFxyHB",
  "key25": "5GKB4kKu3U7TGtprrFgTm83eYw8tHvpscENKvJD2HUtcyBuamU8uFtqLeRAq9XPd3m6PdRKnwzTPAgtdpZmCbh1Z",
  "key26": "2QznUi7kHjNG52wQsKobGpLaaPDk86hZLhoejnPxx4iYS6S77QarzyQgSnzTErDbW9MBWohUytsj4G7YzXmE1t5h",
  "key27": "2ihGy2BJbdL1krMByQRRWR98JSr2YFBqT9aD8wt8RCiwqFb2DR3vSHiUY12hMD6uUqoTB4deM7qpCExv9xBMj2dU",
  "key28": "5aBoqbsyGRQig46RXz59bYX7EyYNwgfdk8cbF6SWndFGrzkyyP9xXoHgGdXaMD3HwSg4p6v9LgAYo4aMGqVuxM2N",
  "key29": "4E1c3mTvTDQpHJUyZvHD134V3ya3qvPgDiti8yCHBGWtZFP6UgmMDWwBh1RZgv3d5QGP2gmwKTT5qFcJSkXUp8eF",
  "key30": "3WxkRBbXLgxxXYnQYk4p4mjhWA1gVz39YxPdBtmxXHFSMoRL1QT8SLXMGFYLzNirPZWTHVFuJs4pgQ75WDu8crYZ",
  "key31": "4SdrHe35thybeQZse4WoB8orjx5MSDQB9iUmDaJbH1mnAtPEeTDNS35eoFeBvzDa6igroXEBD1qo6VYDtUv3FAdB",
  "key32": "yuRjBpykvfqPAJNTcCXD7ruHpH99H92coToSuD1G2mrtg39GfXGDHWAcRjsjXLmaWnmjccbvcv699hEvBuVxpFr",
  "key33": "3KPryqr22ReaHQtnJL6ZDC5ajjkraFXvBveybR37zHi86acPXZ6UZMyLoPbKdAxEsvbBBG7jQpdA2Zzcvhw82ZPU",
  "key34": "3r6HPNVjzPmQek8yBiQCzCF6J83FbkYgcsP51NnChDFBLgVntw7JFP7FPbFUUpUZxpnfz31c1rvDFsfc6CczGhmF",
  "key35": "2rSaD5J14817pUmKaBcyCYn3nU7T52fveMMmmb97k5Wprz3Y6E8uU19kyq2o6PsoDrRA82PqHdukG2MHo7GyvdXm",
  "key36": "34irrGLuCFQjbqVQKefzxHD5quNhcaacr6wiTdGa9SbuekUUBr6EQ6e71meKXiATkDCj9Hx6DCt7mYJxFMUru5A5",
  "key37": "2Z6cJnZbNGK4cyD8cFZvUmJpqeQwzB12KX3dQdZkqpvhfosFLo99Lq85emLqhv6h3kGxRRKuuKistt8g3iJHrPsY",
  "key38": "2HEPBDx39Si9MUtr6ZgkcgdZbe4HAMT5CEoWFL1z2sj6fzWxkKosRGysvSQY8DJ6yKmyaSYkzXuZJA1TisSqT5AL",
  "key39": "Z5dDsr2nJqiThDAPFpuK3gvef6tSGieiUHKbZYCtyCAjvZQtKestLU6hta3gdgdztgMt4n7steNdG1CxQsr6xWt"
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
