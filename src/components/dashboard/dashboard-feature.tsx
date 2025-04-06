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
    "5D4SzRzkK4H3t2mBauJnErtybv8EjHX4vRpnpjhBJHxr7XFdzm1xnxptprxwuthNZfmQFpjbCsay6oEwxJHfQvyt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zetusrE3L6YJJSEPEzt8yFuFn1tiSdN5EbAAqHuR1EvbTeCURBmgkEQfGnT4VYin7KvPU5gsWkxtbFMATMe7msv",
  "key1": "3wrd7GZ7G4X25Whi1t7Z5Nrse7TWTb2v8Qi2BwnSFtyvhVmthVNY1rEMsNs76Cv2oeUER4PEdCHaCnVw1tvwLxjB",
  "key2": "cDVZjg3m1ZGRSNifSRS5FRjXLGEgXnSnWN8g5iKj4xfXiFJdm5926Qh4CWUAv5Nn8NbVJjcixQd9b1WXd58pbZ2",
  "key3": "5t9PcZggoZqezHDm6AJZNNhydVD8WjJyuf6nsSNYxPhLnQAmU5hqvmNJxyKnXFf46S82tjjkwMPPnTSENbbgLaU1",
  "key4": "2DTzFvFRjyZL3bvdodhJmRPhmmwXNW597rF414we9cAy8PyVBnw6gJuuAc5c7SvwLk8vFq8yXXL8uyXgt15Lp52L",
  "key5": "22ufgXyRjTUJ19eAaszJnDBFWKAY38BeyS8FZdgX5QxALxiXhpYSFpCcX6xewtFEsjDb8JeL6AbrC13iANBpKYzd",
  "key6": "2QFNJpKcxFBD3HjFjEUFgporGVPEAw9oKFhmaSfv67Vmxjg16aNj9V5NUXyJx2RrPh1CWWDaa29vRhmZt6cU4asq",
  "key7": "3KfxhL18jnEYSpTHzG4C3TfoPH8MgMhyPj7CGeFM2iJHCvHcTT9rm39MApA9QxJsCjZfrdi1KfzJSXWawUVnkfD7",
  "key8": "65CBNuTuf6ZFmQLMozzq8A6UscHiyT1tC34PgojXGHXHvEUdUb3KJktUTzb3wRC5sKd6AkRu6H9SmK5mTcpVuELe",
  "key9": "xwRgTNW2v4KbX8Sm3tXcZ3mi2SV2YWKRSpaVScPaPZz3RcaFXaRRSwrE8Rwro8Cq9st5bAF8nyDqefytyBLatVV",
  "key10": "2FFGaZdLzwDp6fp9da8ReR6utbENENbw1HVvi95XMtno3jxXwskUY8eXdKboucLfsQo2BT8UsabXBc14P3vPwZF6",
  "key11": "BgWqpuoaD6pSXS5SSzyDQ6MrAz8XzusG48DyehpyRVZGRJvZmzjLeBfye1nyzWot2p5rxbWiyvQEXa7zPXFqvwT",
  "key12": "v6UiRRmxRXmWyaJCgTy7t4vGrPeCgw94mqoM6DELk9zfgBKWiZQjF9Cobou9iopAxritX2eKE1FDcpGgru9CtiE",
  "key13": "2ZFBhwo2JGZzsZh7rve3RDuMvABcWkCBo3H5evipHXfFQPMD8erj1aR55egxN341uje7JpUVUBrQkzC7spShDZJC",
  "key14": "T2ecstFTQaGrzsAfdZtfVSmxueC31KoHkLz9ShWj8vCkDKCndyMQJeZwDXxaMqaWRddnGD6jis4BZYoQr54fQWv",
  "key15": "S4ZT5FS6fB8tVLeUeZt5r4fYocm6nCRmmt6BX6CgJxvDUSTx3dAnnNMXfSMziCzMniNwqYbpFUN7pxjdFQonKPe",
  "key16": "123eXucEe5UBh7uBw7sNTLLzAp1iVZLkmFvt4mmcCctQEcovtABQczCXRfJxsptbuvo5Rz9qstXBsyFKZYpEsH6i",
  "key17": "4sQqVPGGTn6WTNxzazzH8SFQGL6dakiGFzFsb7Rzi8NTyXgA6AFiY1acaRPCmu6GFRBf8SeAEHRgYK7kZiTfsunS",
  "key18": "5mAXz8DtcYRNiKA5GzKk61MkSfV8PUjg9nS9d5zMq7HfXsi6ki1PMd82wtNQedFUUZLWPggxhfCvxS9ABRjZY26E",
  "key19": "5a1voygtG6xyyK52cWve2Yq81yLfHARr7EdWetEcSwgZ3SYaugq5NZJjD7Z6oCQvJBEzZj6SwwQsHtFMo9p27iVf",
  "key20": "4gKXhkxF8C5eaESWhCgbdhk673Se5ZiSrm2aoAdq6UR3gyoNNXs5j3aPR8HxrHqu69EaiaUhsxBPXkTM2FB9XkN5",
  "key21": "3QURBYEUcy8g9sURUeVBPqbDHWsxtBvhivXF1i5AHWfx9XbTWwTvw9TNQDyiWxXdjmQbyFqLNfVFWDm2ovzx7VFu",
  "key22": "2ARsoYZMrRH9JWnsrbtsiQD1DEyYVngbohA42358jtK9Rq1G5LVhMUCeeMXETDd7CrR7r1FZADXZ4wQLYcvCbgxD",
  "key23": "4c7osudZ5SaUANFoUHgJ1swZ2cgK3mCsEYjjcChSyBvfQGfYUqeAVDcBAaQfzN2mRp1arcZtp7deupxRHh2XYze7",
  "key24": "4uuB5h57YNiHHUWxKteX1U2BiXnHp1qRVj5Hviaj7nxTp8D61x8u8SwF8eVKKYhggbodVpZieQJq2SS3yTFB5TBn",
  "key25": "3E4tXY42CJnsocmLy7XagXFWvjdC4WULom1EXdkuxwJjy8X9UQTgX5hBE3R2De7mwgFCfxzFyTjpbi71c57a5yxB",
  "key26": "b34L8mZETkZVGzJS6FJxXqos9nsqn1i8AkAY9m5tWygkS3MuzK9hkZ5V8DKZWLhfHmwenk6t3anpSdRccCGJG7k",
  "key27": "5BLUin24M8vJsFNSS2r9YgaFT7nhBXy3Ut5E6ZbuR1g1BbtySEgTzGmMuhi9dqWMJW2Me6RwApgwQfi7PXuyafym",
  "key28": "2mRDxyrhGGFyQZi5DwwfyU12vhBRuSB4J9apJt1W684LW9nbLTrTQp6iVzRvLbNXGkhSMSBdw3ZzXg52MtvwTwrE",
  "key29": "49VzLi2pqmdv9NzkmoqLYN28RV7H32q1wg9kuRTGMSdB6WEFWfq6gvRcimWckfFg8R2Do5fpP9zyGYUDHTmEfhWz",
  "key30": "jiwYZX28787uD7yTM7xxKDNkV9Jxo8dDV634yjszZHJnmYo8HLavDou3gqTNEJdyUFmKvjhd82Lgtc15Ksz5mez",
  "key31": "5CXtMTiMko9Nf7xNknfoVeEAHkoKrW1vzCNT9E8HZs3VxnJ7YoDSPJ5GzDGpbS2SGMujytto59voUQ6YFghf5wnS",
  "key32": "3vCumKZP4q8j45QZxMqpeD5mZfyDpfnHj5jSzGKpJdyppcYW1MiirENoejbK5ojz87QZkHGGLhZidChZXr8pq6jj",
  "key33": "387qC2DEJeDmLgEukufdbRUzTzXTaGWRrKVGWRe3TUi2GYqBcxwMAxKNhQdVd4HiNBQmEAQBg1hGEHxbjPvP4v3M",
  "key34": "nEMPcFmNpRjKQr6yiVURWPqyhyPHwfqgVPuoo3gy1P62ZXG4v94nftbBWD1xzJsNR3u2VfaxPJ97DzXDigfQfq6",
  "key35": "2F42RB3NQQ2ZogBKtvfxyQgGZnvTwcLQUmHJEwFfxkL3PX9Q3ctz78N1Sm3ou9BfyszuxnuduUrXDjoqCLipRWpz",
  "key36": "3YsuRxzoy7VCCw9Xkmw6HEmgwjCyvnj4KzMvv4Cph6QCe4q9sLJXafenHQ557CGVE2rTzy9PNeSbbBD13PtktK7G",
  "key37": "216nihPAkL3Wp2wCmA5X74b1F5fUt37Gjk9FyzDGs6hQsoqGNP6avzDY9pCWKuGvSW6Z4AL6GQK6krg8MTwV1Ten",
  "key38": "66wvHtLzMunW1JPgzhaMegFp6hfL9mDiAF5qv6nNrbVUjbFioogfSiYs5qbDue84CVYCaFRpNBkcNruhEjd15yXr",
  "key39": "agTz6bDJZbKZZSYMZfZNuKCzJQgxmrG55BQ5hUALMkPzfMMP4NF3seW2XQMm57coRfPymqxovBy56NXf627sbAS",
  "key40": "3L3drx3zv3MdzUvNxQetfnFTNs8FcQ4mf1p18wK9Fxt9D9UghBvPiYpdTnmv8aL9LV4QB9uz5wiqFQsFXX6hRSJQ",
  "key41": "2eRKCRyEPxSj5AcabRAN7U1zU8cTuHoXkqyNCD4gw8PA6EF6VNPvZD3mqtVN3kCcp9P6rg2Wj8T5d1mYSUQgmWpK"
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
