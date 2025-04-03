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
    "3WKNA8fnkDjP81vUM2xEJh26kVo7D5MKNkCyMXRpu8VoJX7xBfW5TCBxYiW2SSepc3kZNMAPSTC9To284AD6AWbi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hAKCGQybiJDhtR4rGxDK4b2D84bnebUg7RoMP5TqHFNTFwh342FSMz8LFUACJnnhR7o6gj7dDoDkycGd8B6Cxcg",
  "key1": "5FHLMCpibcQj6mGAGCjwoRqYmetEvtf4iCRYP8zD1TPQMo4T8nWDYo8nPFSi88hLxUhSkak3GsgWwtnBuY6nSMiV",
  "key2": "3hgsjA1BhZnac6DzBBU54b5Ves7Qe4rK26YQFXdPPB4AA7KXitwjdwkJ7Wtc3FQD98FkYJLpqFa9s17ia7yYw1RK",
  "key3": "5Fd7r3XGCTa6Xb2bvMyLWCLc5Ks3i15oRS4H529oB6U1hZ47iZEDVKd6jkJx7uYQT9LKdPKiKumzJw9C6wb7z8LC",
  "key4": "iDJTBNm44UU629iknRTj5BrEXs31zsHPVYW4kZ7sq9djvHKh2a7AtgWPC6z6jd2odTeHmx5ZPphCrt3XMqtGdw6",
  "key5": "3mNFGmE7VPQNbB1LDaD1j1G7BFBoowSM9GTWjrMQQ4yWNgFNmrZc3yqiFYdgktD51nfR2XAPNx26XJuBKwGZmegQ",
  "key6": "24AQRpAYrnAgaUiaQhk1k2TnpkHmneQGSyADysmTSgd4syDE5qf2xR7jEgP8EQ1Vksxv9f6MVEsJK2SAqznJYAge",
  "key7": "Z5ynSTwSTQFqaVxfa7xf26nKeow4Zfe3LZLjKXATJD4Ptn9ojhmcD6HqMMk3Bjr1YVbatTTqV3sZicSk2idUyHL",
  "key8": "PN6fHYo87eMs4ftnMPpB3htGe8H5fuysvuoZGU4AvPaGYoTTicj1Cdzc5LZu6LekG9ZeJ1Mprqe9Xh1y1YjyJ2K",
  "key9": "4Ywu8uC1tG6KJMWyPfvu1P4KXSKzzECHBemfmddCTnHsy6EK8Si5XHVEdJnvaiZTBPJ4n29gvricRpAhvMHznRAL",
  "key10": "5on6KgXEsk3eKoVfX5FzaK8gNRD7W47ttZh2FGsiGiUX2TLSqsRbyiLmWkVfLnYLnqrmcctC99X3LB8T7VTXMJnx",
  "key11": "3uxoLbg5eXr4GVCFvbhLzfuix2QC6TwesssmxXCYxaj6EfHxff3hioMyfNvFgdFXPHqprARxsTmkozQetvcy5UP9",
  "key12": "3KrbiQXuD2B4UgT84TJH9t9vuby3s8Uk69p8uYNCTLNjYTfoDmH4NqYT24Atpr1XoPh6mgC1eXH37nPniWfa8o7B",
  "key13": "4EqPSm5x6q9CWHgByk2amTXK4F2Bb137wxfgBk1X8qJ8ydfaVwAGMBZGgGJU9Uiez9cF51BbXyYvveDP7QwT7qM8",
  "key14": "4HQXRrb2GWvUmXc7NYGKWhh6odaCjk9mpyCm83p6Nh1evhrwjkrXMz5nEbgAG9dhapomRHBHjJYT7jgSX99rgcaW",
  "key15": "3eZLHvQvp5iBtiVhVQDJ4YSdqqFgdYjeDxvaBk9ZoyfCiDAwswU8dTZhhFyzLv1wuYxF2GmMoARKBWhusFPJkzic",
  "key16": "45wQzhSdjzteTERQANYZPp9ABYij1GPj3nLEdd2pbsqTp98XvTpvVsahUeGvvGB5vDqp92CENpAqhm2UJtVRRFi6",
  "key17": "G5GqN1zkAGXbFnscmRYoRg3wXotA5SiMdT1oXscGYnYM3VvPRb3jmNfkb4PYnGViYFZyoEGy2CpvwyY97YUps6B",
  "key18": "3RCGS6pmJCTF4xe1Rx8Xcu3j7jX2XwGE9U4Kb8Cs9PPStNR24hW9wJZ62b9dxNLA6YBsMoQuAiUVwPcdC53CMy5j",
  "key19": "2C9HhfQoDQawnDQ8JsB8VZCbELM5bF8DNhLEKXjSZktYD5zYCBwnCVH6WUsX9bAefd69QR6x89qcsr7aeaMoKGm9",
  "key20": "37iwN429W2Ts765DxUyv41zRqrHGETEfAtsN6Q3vx3EZg51zBVfT4Hsh9Zg3LadkDHWGtDGxtVPQqBFQEZQE8cbs",
  "key21": "5mUAATkQKuoyFVL1MEoSZpaaJfrCvMyehyi3SniDogKpXEBQvNQ3ot9PA15nZmn8QN7MDtE5RDdxEX23NAPvpqQo",
  "key22": "3EX3VALjXmYecCFFJQqXkYWtK5DbpCwc4bjBm11iTBiECJSdtLufbNgymKmU46Nx6F25wLPdTuHUz36avjfo6sE6",
  "key23": "3TGRAcKRdoPssP6PBcXYGUX7EKpPHSsvuq3RYMb69wsWdGTpSTJPmuWSLz69ccEaU3WX1eBwChbvy4wFjuSA81Aa",
  "key24": "23xejSEgY3ExKvdFfSqynmCBTEQgvpGxWyUgX2mTDKP1H1yQTyJQEyrtn47XzwXFQSttyUhgxE3VGVx6PfHdDLB9",
  "key25": "4J2zY7bJWVfLkz17WT48uyUNrnk8z631L9QqzvfHMqgGKVbwcvioZPKoqp9s8AE5kR7TUN9rXYnjtRUs9kdRuJq7",
  "key26": "5KfEN7PQpDhjm3TdCoid4zeTEM57Z3zWMs9ySGixKVZBK1mp9CneMcxTeP4KHPRQJgPYcsXUeR9PhG7HaqMqZT2m",
  "key27": "4Yv478hqV756Mj6kHdxC9dCLKN1WvqqwR3H7HsswNgdZ35f3vLy62YiNbZg1LnzAyjBx2YPmDCqBA4yvi6LimDmb",
  "key28": "2c5rfvLgYEQo4eWSLKjbxX7nTGGMke9tux3eMPK8wrGoVsvZFQaWjcSC3sMSzj2ZFFAE3Eo3BuF71Kna6qJwattf",
  "key29": "3kmAqwh3D7FNdvm6mbwYMATqtwGYVjroZuZugsdA8t7i6dgf7gybSFUC9Bp6kTmLNg9K5GQBdzWJG8ULtxWZVFbw",
  "key30": "485eYTiEcSEfKM7RAqegG1tEJfm7suuKBUMM3qhbieU6uSNM8aKfHWhqNUpLZs77JF8t3zjei4Z7RLZYHpyjtCxF",
  "key31": "3NuVDEVQohf78UQZaLTm9wKSrQLuXnzcHSuvQXqieArwUXqNxtQb46uik8nydQhPPfbYT7pUQs5weZwg4QfKvfDE",
  "key32": "2xZ9T3sqcdqoMK6Yj6Ffj5v5s43yRnpnAxmuQkZva4WV2Bo1JVvpTNQXyw45j5cQzTjPEaWnBXmWJUHdwsV7pkrw",
  "key33": "5QKf1a3RTziD7RNBqo1QqnhBYZ4KUw8d49A7KffRNPCmKSokEPuWHqRaEdCQDeYU7yGix3q8zN144xX9s9uaY1mF",
  "key34": "5to5STgWwc9t25rFBEi6V5ybvJfXw8KBcuypdQqDrgLuaegM2hJVcbZT5AnHjn3AkyQQzdTKWZrN1pbCgfA2KUK3",
  "key35": "KcDUDg5uoyPHRK38EEY8Z6PoScFaGkdzJekZdPWx7QZ8B8vNoagSZ1vkKuPAUj2mN96zf2LXC4uz8JwvQfbRXcu",
  "key36": "51T8Dt8shmgY4j75GcWKeJrDDtBt5CKW8xh9BX43pyQP3aq6MgtakdjuNZBZRSnbGP5KTG3e4Qf4d2ui7Hzezexg",
  "key37": "t8ahtTDk17hq1eNqmP9xbahqnVarMEbDANu1kkJqsGNnVfprX5jXhH2SKizkU9nB6mZwxHGqzgFnhZUz7YpcVvh",
  "key38": "4udgGjDPMWyN7TMnGJKyxzWjeZszWhptQZV1GusgJP5CifWQ1UXcEnhGg3Jo5gV77oywLwSj8MPc81PeCome7W6d"
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
