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
    "CXnPj9uJ1tHUL6nAawhjWVUwBgvmfvVExb24mMrmoFXuUFXUhUvodpd9CeVdPCUYyL7qgBcKVYPzyMe8G9CRou8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36GjVuSoorrBBZf8bENVV2dLGzEN9u83Q41EdEDhUXXPiwnvj7W4rrFJrb8b337nAmii3jm9kTE63MUhrUP9w4D7",
  "key1": "48RugZYiEEZ6KVJMnHKzHHDZ9XBqd6MZFAFncCZ4MESwnrVktJHddRChhkwMnWs4nHepk5EeA1nyXFGap8zoDgLg",
  "key2": "3wPBTzofHK8Q1jcGM8akZWJA2zNRDSHKujarfbDsRrue54pxzujPA67BG2NUmEgJtKUhSH21KLbfDnLkVCnqSYEe",
  "key3": "4PMtDmBYeYJKaZjBYfBNej2dwa3kKN19ZTBqYoBDybhNwumbVXg14SEtne3rf3Ld1JAnob7ayzRePoV1hcS9sR7N",
  "key4": "CqJ8X9JGEDCGWYfGQnu7qY6VRMNVTh7xSXDnPdXUaatht8hD5itp6s2iShTxAtELN4uiwV1JU1RA48LkuoZFEkB",
  "key5": "2zwzVE9n4TorowULuN19yr5bNi1JPxdr73JxxH2LyksftuWgjCKWU1E6uvBRLTqBh9qaFJb3MyTq5h9PvUfrrZrm",
  "key6": "3cmydPGTXYyMJjHZ9zNTdpyDj1uBiUaVpHDUzhL5esy48QSGFKNnxWdBpWP2r268irwVibkH897JQXuFwMJNQwGT",
  "key7": "5pDkAXcg8reUjJ7XsTGCQbsF9gWri7DXKb8Bcy1ajxgb99GZR7rhMdmzQRNb9sCyn9umhMptJ7ofoodj4Bjpn7Qx",
  "key8": "KRwF11h5PXVQ16CufdBpWYRkDyZHR1LwNuVVTZ2D1SgkXzwD2R2dxFD5G5Uuf92CzavszEK7z8XrFcDBmhR2ptY",
  "key9": "2KkoyneejYBBBGTNYhVhkiTFfgbwZPnmyrSvDjF2RofEsqVvvUhSaFg7HdW8FLhZZCFzMPFnDBZfWSLo8avwYqoX",
  "key10": "3tm63Bd4xynSHCE8UtvczqxMTEvdGmdPMzGqrh55V89VACH2UsBfKkSWtTrAdTrSfTjM4Ad3Vc6TZrQkWTvNmWVA",
  "key11": "67hn9pjKaE95xv8G3hLfRz9rU9NXcMMs5mvFwJvBxLYcxdCNG6ks2RA6w8Fij7saAYHz6Ngzk2SuesECxqh5NURF",
  "key12": "2pxN5gUnyzoFF5MhF2ivUPPKiJ6wNpczjbkJS5vr8TEiPtGMhYEocb7GSJzNdbJZziGBLJPftmdf1CiMQCfg56b6",
  "key13": "4ycNEpUkhBx5hnrtt41NL5Uf5DoEJCUfWH6NQzJXEvJSijQJsDrjQAmtwj2ZwuGxSMEdN3bpr2HWrTRmgKuN5Tze",
  "key14": "4JoEzLf9JYLG8pwzjNW5vyGFqDUHhEzFXyCZFMbKmrZbYjMJP99TKcR36U2Acmdj1t8Sx36K8h8w5GEb7MF2EpGa",
  "key15": "3R2m9R7NrkQde1uDnywJHGqfUwyPA957Mjzo7VNuK2W9i7XrAYDvKezqnvW2DUbTGhdxN5EJxpc8QqnWTV4JvBLR",
  "key16": "2QJvNhGkLJMLUgBgiDQPHmbBzR95CdqzLx8sF6ZP1wYMgssiAyVnS2gkn8gSSakis9VZjAzy8jfPkMb7wQqzpP9f",
  "key17": "5fs5jnBD5avjAYyYybsvRsJRR3g6j9HS1jxmX75z7z1dE7J6U4mHRY5pYMnZEs8BNdpm1GtVF8gVkWjzR4gERC9Q",
  "key18": "3Xc3e5xsYPo2LWLJTTrr4yYotSvd99WQeSL54wT9yDkmFbTxyTyLLTFFisAsWB428Dfnq3XhYVbK1qydp4iJaZAk",
  "key19": "agRWdDjcxHK4tqmgd3Sc2HdoteUsVzJvGLvXNYTPqbgXUBVb6bG2rx5QrcJHttNk1ks6T4zquw8MMzaL5iLZT4F",
  "key20": "3zoLPSJdttGwUoAtGMBxSnBJ9igpvFh6fZmGot1p4HdZtUTuGXkMVxw7F9YoUbwcyAkxBPHkB3RFH48BDq3dtJr5",
  "key21": "5u2Fmtt51RwkWJcCZdoSR5woeXK3PzdXNBqXPLooqTGC4txg9XN1yvveuvRLTwh74VAuxVq1EQSim7kTrB2CMD7L",
  "key22": "2xKau6KwEyChiWhZyiiBA4ZmCd5BCd5PmDnquBMK9d2Jj8USFQjLuz7wuoF59WZ3RKaVAariDeByFwJKbat4rQA4",
  "key23": "3hEGHrnnBMqkC8WGUkLA7zP7tm8nY4Mwm43omYabu2HagroiRcFZgcaRnHBLvg3oSJJ82AGdkTsTqiTPXyGNj1Eb",
  "key24": "3iKk5GE5K5AL2d3Nvf2fTNkjVyhNN4aQcyp8M2753juCT4XLxXqVAKmYKkjpBZtaRUtt81UQLaZKqdR61yMumLkw",
  "key25": "4J6oZdNEwjku3pNrWNSWsXu9fHscTWg8em7mNH8XeWTNncNeQrqmfNFa6bU3321oWkPc2GMEkcQfbdqpSUmH2utk",
  "key26": "c3Awfwk31cxzUN3uwzgAu7w2p914jpsYhHiftoQYZc3PosGNog26SPXvnU7ZEPNqWwwgDbzDN6ZuT5EsfMTJQBS",
  "key27": "5BFRTF3QDvDv7oMLfSm97p8aw4yRAGnrqgzQkzY1wyUW6Gn6faonpwY5GDpe87ibXwJ9DQbc5Q3m99kifwSGr7f6",
  "key28": "BbsAfzy2WFqQHMGpoRx9kPGnMtiHbeVx57Wi3CnZrtXqYEjfbCdBDcAUB7epnXiaaMqvRdy5Md1EJhtPMVcjhx8",
  "key29": "SRCkHWG79jxbbn5MawdQX66dvAc2EJs5p95zym63hRezemcRpYrEoqreS91GXokioEhkANRPYfovyrHJhv9cuE4",
  "key30": "dBqgXW7YwNi7HT3UamsRP2gsKixHy8smpEJexdyV13oZbGWD79C6SXvisHzbkC3bQDNNMXosqdkYSzKhLuu6csa",
  "key31": "5kk4sfmuZE8EB1tCvU2czUpcTgSzVDsiBkuUJ5E6BWLoR31W9qzWC4sWCV6xm2FxgYJN8SqxSiLekL2M14De5jSq",
  "key32": "5QmeCvmBB4gZynzwrABZiBLxm3uKcgFULRn7c9cRiAYvLF9ku6f2Hc1vVJjywF2RrtfJ7HoqZwoim4XjyqE3ZnM1",
  "key33": "163cBA5Zswa7t93K7s6hnxct8EckET6p7QzcuVu5mKtNxmBpVptHe5DPbBKqQSopWhxsXsdSCthcwTFckSyvLHA",
  "key34": "633G6CZSYs2VmPppD9XWG4gMU1yVBimaw1SSLW5UqCt2t1ZBgQppSXZwPsRAF35LHu3huXZaCU1gJzmZkK6MKMy7",
  "key35": "4RgPLB8XCUCnAPgqJ1xtm6UqkA5xsa3vRZfFgT6HuZGDKUF1HLJG2avUyCeaAXpYhMksoMn2bRTdAhq9rnYSquE1",
  "key36": "321PuH3WNj8nL1FEnTuFXhAEZG1inV5ZrybuB2kwo5byK3GBnvf7ZnU9Ljf9WyARWWkS6ibQgjpXvw5b13ikz7tx",
  "key37": "2dSKjfc9K1rv6c4iaaVNFRjnPFbCXvSMxLet4Nw2qMbvbjjuo8xZK1nznqbuy7rG7ELJhudG6kaUtTehER8RAMQN",
  "key38": "2sDkQGHGGmZWXnZoNBfNhr5VzbMnyhKyajzm1PE4ttbzLYcSM5yTb47jKF1jmp5Ju17Yfw6gdAEs5jLoNKZgpqoe"
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
