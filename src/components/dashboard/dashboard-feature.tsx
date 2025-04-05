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
    "UMVey6Xivpw7hKTk748jTrSAaaaeQDqoQ54BeGMYxpySk1cuzkL2d2E2j5R5wwm554dyDFmf4hNQQu31Siuh8CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q142XbudAtoQzuj2dJ9Q7GroU8C5v9MzbdxDUDp3UnxuJkFJYMees9wEfPYmCxyAfGtCtuDVG2sb4HajcZkK3s5",
  "key1": "2HLgKiByYJxW7axCWR2Kdb7PtyXwKUYnNiUMMbEuhu17BP2cDQk2THRwpQyiyRrx5TCg1QqRfewQ8AeBRpChMtqU",
  "key2": "3ceu4KLtm1GgzmvcopmYQEVKqoyvkzUzNZSHqzKuwG9duDW3ySNErbtkdY9egRP6SUhtLTSGc9GDMmSMu2ZV58P8",
  "key3": "5DtMuqUkHtgt1Esdd4XyjUjkdGGb8EM25qjHffq9RwpFAyUe3zSB7LLaJVzogWWveHiPG5VoA1nSpZmeG6aCbqiA",
  "key4": "3v3RVHAcfxhx3VzzJLXMNLWS1vhK3LKZVaUXuPnfrf9QymPbMzGUcDVBy3rdAqQLFroKGX5kk4QUtnpS39Up5A5X",
  "key5": "3yrimNcr85MxsgxDwWynjKDtwtFJjeVNxuDBq4UBkxowt1eXgX98nrGeomTC2BfSsTZhnjhhHF3sMCKP82fHtqnd",
  "key6": "5NrMmK3GnLwMTqRLc3xbomMgMqwci9j8ujYVRjBrnf5RNFeF8CvRFtSTxbtLGnKUcM1HbRCx4aZRfpEdg93dVgpJ",
  "key7": "FhHKRyS27GNS8KKxEGzVh9jrfmDcVSm8EhBk3T6btQPc3sMhfWge74YogejKn5To55t2Au7mskSf2Dah2zQpurx",
  "key8": "3WzSygS826CyVJhqYLdssThU97Lz4FDsKxwHLo91fiVUWq5LkECSTpXwWKdVs31VZdBpFjV9MMViAWuWVd2BKhyz",
  "key9": "3NmRDWKM75kFx8skhj1qFEiSK8EQSUF5bYo4rMAMQwhU9zub5yuahnvdBZWWxptHppX54r784QyUvhtJDbdxT5KW",
  "key10": "38uZK4gMuzf5EKRVWbnJMJ9yiobssScDnhYy7t7L7HwLiBGn66Rz9cSnKQiHdCDHxKFnPCuMp9awd3T8YUQRb7cH",
  "key11": "4bidUPLsm5FVGv7Joxy1kBNjyZksbFiJaytBLGjMsLiHACEY7qForUKHd3qDrVKF5dYZRnogACi3eEWMYcLNcK9A",
  "key12": "5jo1S35KsouqAWS81L9SzNaffiG5CYEG8NM5cU9ZbK6J1kT1NbCQR6jbGqgmF82MCPZV2MrLgS53yZJdWNkWTmfs",
  "key13": "VaDqJEvKBiJZjYmvahXvNDk24gms8iXSsXzbVbzEFuKy4RgWD1gCY8Hsw4h9snkVQXCqL1PAFCX3KoLJ22MdNHb",
  "key14": "2oWtyLwiFP7XjBCWrRXw9LtMyqHvJcp48V88DoDD2ktcK3hqf14wtgQQsohgLy6ohkcUEV1Dw3U6NW5BDd7JEL6Z",
  "key15": "4xqt9XkHLEV7PKxNBkaUW7y7XcT2CdF6DS87zsm1d19WUjFM6BQt7fqp3yaFPQ9KxY5aC1JzE83tKDYkJijKoGQH",
  "key16": "4Ey6A4VPx47PVFhkcp6uwgcvVpQ3nKLpT86i7dLu3A7mxTaorNBtVx18AFFDwF1JNf7LFYgofxg2cZX5AxAZThe9",
  "key17": "bBpKrkE8qdKMXqBxHBxgH1Rwfp9a1298hseR7rzLNydrQKnPxV2yP3C7GDQJE8egxTz7FVGKkvMnknt3CTx5oVs",
  "key18": "36hhVskRo7SmpXso92uT1LBft3hCipQpvuKUFzpZNACfzHYapvtC3z7t5My2jGwe9AVJUKhLB3V55G6Wf2HwcfB5",
  "key19": "4CwxHDAzBoh5TpBtHwAoYpHfiWawMgd56JTa6Uk8bG6MgFrCHF5hW6EvC6QSBoK6b7BWxQ7mywHvcfMxww2v4Xzg",
  "key20": "5thqkAamDghAFug1mp3sCtgGQiPW4Z7iydpwPzyRwceutgNm91mTos9RZoyfDEit1GmjQBH4kia4kFMnaavvnV1F",
  "key21": "4KnJUMNkLoPXupwz4atmsf4kdw2axfh25u8u87CcVyDR5MXdRiEqf3pBbqZmiK5nczzmU4inUnwGwmHZGKtKZRx6",
  "key22": "5GphoB7Vszp9rKPeLuF6buvFDrioRcQLs7RsBkgtJkFmCuxyARwNGW3wCr9Zwpzp4bz6XumjiG8NA4xjKZkovBv7",
  "key23": "2akrMGidbUHMPZJ9Y4NW7ohtmGppYHYNouy966Rf9EGUz1hTd8niXiufwLQJ7rV2L5S5qBSGxAb7a6NVe6kr7uc6",
  "key24": "3m3bPJGDXuCwUJWtRHPWSXZ4CFn58WJQ3MHgjU15swtUu3QeepRCLocnyrFoVSswx7ikcZBUndaBxcf9mhehMDaM",
  "key25": "4DG5ZuXTHnR8paVh9NyRZBzH5BTgpNkmheG5WwtRqVNX4SavpwAJx19XsNQXa2gYU8FYSym6AHnESneuJ31hNyNz",
  "key26": "4puz19X3P17em4rbxc6v7rYy2MhBqj4zoGxNJayJaGKPrWmYu1uEyHC3YMWS6zeHMKD3hZSpiDqHJ1dY9WFFkkqW",
  "key27": "4sVvcY97STyJs5PifdDpzjf4SJUu1rWTAXCzHThJNZb8Cjo7kXLupxwgtsHpBTBF2GwuxEi6NdrdkvEBYfn4q4KP",
  "key28": "2Hga7CShfLUUbEiTnuk7tH2ZYtjhWAh214gWQWC8ztrqdzR41xWjXLsCZBp1eF3dYVkLgWxV7itE7YCDtuJU56QG",
  "key29": "54Cm8CrnhgqitwyJTHDdYXK6TFDTLs1VPkewNffnfu3umxvqw9YYpmWTrnWFDsibeKPsYVgXQ6ciCzwUMMgTS433",
  "key30": "hNZHHPaVBzKJnpo7Usj4SiCH8AyaL4DgVMMvRnh2kkwcKdeYb2SaEvqUjWPU8frxQ1vBdqjfCqo1jomLxeTY2Lb",
  "key31": "xFuEkUh1obPANpvRgY5VBKkSnre4cxescCz6Btb7vbqQzhAW6jkNNoiPHMsAgoUPZAFdPJdRAbztN2SGkHG2F18",
  "key32": "2jnoC5Wp1VrmhgYtPZsqkE7Q4C9oYPjXsvqoNxg5imu4wqhFEYYffxj72yq3DXx8Dq7NNnYoeGEgGd3D9Bhj4KjA"
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
