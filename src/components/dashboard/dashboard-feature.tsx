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
    "GFsCzBGMzFHT2be4XXrakni3uAtBF4oX8pUhbLiPd8S7VzN9DMf7TaHm2UTax255fvUdAXdLY81cfwE6eh7G5hE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AEEnGzbrmCkPdryNsJhXs1Zpi3kme1vrKrLukHKVan7iieGJptdqKb84fXRMeMMUDDt4Rbwzgk2BALimz1HG8f1",
  "key1": "2Aokzjs13JS3HdYKPtYgKP5i6y5cit8uQfEKjTXczLFYfics6jreLENCcAzsuoQhU8WQouJAeyuRARTczNnaDPTo",
  "key2": "43epDoDnnnqxZoLtXUydkXvpztfbzVXyCfETnhaqZ5mvJ9wJ32eF2ptQK6CiF6vrG7o3pbRbFX4nNXwb1Q8brNSe",
  "key3": "4d8tLHYXamdVcPM98Lj6DFG4ur4S4c6SR6db3pr1KrH4wtqruaShduWaT2iubZbANbRfwQghL2UKxKNcomNoztzh",
  "key4": "4mscfiH2KS222CnpW65xGPkw9ZsE9hPBET5JyYaqvjZVQHcBgQdic6s7GXWQHfkyh6yVJNSZfUWpN4FPs7TVJ5yq",
  "key5": "62Q4oneV8jVJVK5ptzCQrQBVHbEB4CJPhNZQJwKqCwMisfsJYSeSDSFmNNk6ELhtGZ6y8esuT93c1GkwdDh4Bphu",
  "key6": "3ZLmrdn8skfxjMvGe4U154WWMYpCcmx4wufyGwjxd2J9GTEQZxUDiwLugv63SvCo3vjtsXsXQ9iqi7aiwmZ97NFP",
  "key7": "B764qbP8wwG6E4pL58cSpNexRgRcW5h6iBRsvj6g7jVpYw664GiAywjhYzNCH4E8jaewE9Qzs9vfVyWSawMDRn7",
  "key8": "45fq3J6z9mSpuRonYDsi6U6nzhQ7uWoy4Ubhc8NYxB6BPo34wDN7EvMhBmey7QyaPprpgqsb8iFi2jGvt8A2fepV",
  "key9": "5ZMhbhh87bvn5DxJ487f3XFpXc8nrPtsiPM2n8e5AoUoS47wL1RHGQxr6i1wCnD6Wz9AumfMZtEfjQ9s6LH6y2Ud",
  "key10": "4C7a8BdB13hKtz86n7EndW3kd1zKKTTgFZBCFCfy2NtKFSwXG9mG68CzqxojGzgPDMnL7tgeeCZojEnwZfMth12Q",
  "key11": "4RABxS32AbAwH9C4D1A2kVM8wkpwbb6yfKxaFbgrhp7HBdb8DaWJ1PDZzFpNu79gg6FjLzQC8e6xngu4MshC2XP",
  "key12": "4yGrxoxWUCDCdMJp4mH5SAG9xKWNED87DxquuTtqRCALkLETtB8H3kin7o5159ZXfWh6Zq5LrFPYCcet7TtmKFC",
  "key13": "Qz5z3zr77atT8TyJBnwiQZXYwx9TGVe1Kwh7rFd1U9nnnARkAW9WiGRjhSwEHXFxh8NnphzcZELekPy2PWGuNPZ",
  "key14": "2uS23sDBDzr1GW82UYdfcvcPuWVPCbnZ2tn2zaUcUdWTwkDRrpEotmVu78St6s7okRwt6zZjD2RdnMsrtJsob2fP",
  "key15": "5vuLaPY3jUu5Pf4oGta25HF8J9hEMemkAT3YBzb5vVJD5uNASEhHk49VRWUaboCk9pB6CUfg3piRztGcJ3v1uCKG",
  "key16": "3F6BrxzrNYK9q5JvGP7G8yNnB7s2MR5AQbFbqKNCepCSTdrXmazpVkBQ1up37QSZWDjmVAKGeFiKQqAL3XpcfZGG",
  "key17": "4fkPDWW3PrKiEh7jXqQYfN2SHLWComAPybxvc7J6bcMatJP7QqCCw9VXJpeCy4cVy3aZfvjkhMFx7JBk6GURm49n",
  "key18": "4NfEWPWDptR8Lcq5b5pCSk1RKiNAtxbKVzxULDWjcnnR6mgDUSLGNCW2GH9YF1ohFCMMCpPcyUhGuFdQoXivFdYa",
  "key19": "w1EwU5Ew9ECFqLbqnWeEHNa3C99ZNNXs3ed9hB5Sn8nQXfTKzGWUdfVBrX7H9qU2nB1z7BWeUtd5NYf1qaVyM32",
  "key20": "ENfZ6y5PVTByXFWkZSLr1BqjXn6y3Zp8BVs6szqtciaTTUwMrbyiJgH68X1CYAoPun4MLM7hPE8bZhJnkz2xt5t",
  "key21": "5Y7LfCcZRKLNEwSEVD8QNA6e6aTBt24Nc2vnKvjQcUmYmMkzQ4BzJpSbbtASZYq2ckPaKPqdUL7WiC3qjMVNSU6t",
  "key22": "3WMNKiyheWTxzPm5EgDtmHqioE42DGN25NybVyZdxh1QdWoGwkeg48DMSWDvdpEda5C7pMdk6UqFvLVP3zureTac",
  "key23": "3pYuEPVL8JsdiU5jhTinVo3b5KoQXgExHsrf2y4LNCjgjBcuwz4ukJgAk5bXmghYcWwriaW13nDAP6vrr9sSz7AG",
  "key24": "23o84yx7MPVpsTazjXx6TqYvNDKMnQh7L262Xa8BDevFAJjoRusbj2QRT4PYefd36WuZJBzo6TXpJ8Yk929msFT9",
  "key25": "5qc4XeBPUyUDG6J4SYKBYPhxU2henyeorqSeHQdG8GFFeYoZUizKozVhDimw1Awgqman9pUhseR5NMtrpBUttf4s",
  "key26": "uBkqbWbvw4aLXNoMCjB9FU25LEiBbx7xpg65S17956JqqR8RsMbkckmdJV6LAVXQoVitRfGJVLpwooQCh9siqeJ",
  "key27": "4ap8gpQcTVetxETcVZCfeDa9SvWm98wbZBodPdKP49fQn3sY2Li59D2FhKQji9ieSALW1MQLUvknDfXijEYpth5o",
  "key28": "3WnQfvUtdmKAr8mh8rT8SaFpWysmaGXxhnRiBXxr7gfVL8MHPxgTWMgg1yirFb3hzb7WXqjQzcchxj3YRaLbcbhV",
  "key29": "312Jet8s8qj1rfwveucxjNYgZNxDPy7hSEVnnT6SvEv3Hwt5n4Km23MDuXJwtEeJjPC2cM3W1mc32jwo5bEYmLdC",
  "key30": "mtemvTdrLAZ94gqYLzeXhohGE4W3BJwbakU6NSzWRHFdWrYBmRHAgFXecFF6LX6mmn3dDUnzDjfhzoy4unikfS4",
  "key31": "3qXGkjUqMJvzHpB8sjCtrQagRwzE7irqyNaHCkiKAmcTGJ6macb53YH8GPxB93ue4Yc34UQEkwhPPV9yanYuhbg4",
  "key32": "3558rmYodTrnJWaPBGdj54DKoaLrJ4NycXb4JuARAAy5mzDwCARSYpHrvf3EBZ8drJW2eHhESKet7SfN5STpJ4jB"
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
