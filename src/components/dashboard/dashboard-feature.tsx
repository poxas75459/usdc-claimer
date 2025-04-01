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
    "ebReGN6hXbTwvZgYQzXMdii7GhN6t9U9kMAmcoaEfgimXMARr23z6Z941jJQb3k8QaQmTA3k9ruSqbDwmpTxZBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyyWWfTTJafq3shwBLMHizPBv3cLN2t2bzDUvKp3nrvjPJ5CmsfYHjk5MC672F2FGNDdZsUVFpRpr6AFyKtETJQ",
  "key1": "36kz2LqXZBRba2koCaEmvkXS7HznxQaXF6SN73QxyzdHZ1H7yF7VXJb9tYQSZxyHugXRq6TVsU55HVP5Mz7MW3SQ",
  "key2": "9ukcW59VGymhxykT7vnEiEdKg7RDAJfsWwbU22g21ER9kvKW6pyUkqLitLGezemqGfufF81wzTucJEnpLarEZ8B",
  "key3": "4UvfKwER1HgBf7xJVvahjM3WnE7suFYcH1p8BDfnQDFDwb9ARrZmaAL7bhMcqpbkEhfEFYBqWAZTAe9es2BUvUiG",
  "key4": "32GYF4XWuN1PFYG89eckN9StDKa3Z2igR4j8vYw3N47Y6FfhQqpNA4juAdNmjABd59NKttSyq79XhKuDewyFbsTj",
  "key5": "48FGHRJbCNXYBRnKR8usNfqbbumJdkYbusHZvqBT1AQLwyuB4dad4LbZ2YyisL6GKiYdeiuhjPYv8K1wkmAbWTSV",
  "key6": "2W1eC5Bz8Z6cBA5r8CRY1GEXWn2iM9eRqPLAJeHQcwb9c9zhkuMWjPkV1cG8MFQJBjwhYJ38NyZ2zwmg7DvTiZuv",
  "key7": "5zXuC4PxWLaT8r8nd5FsA66CeT9pSiVSgnVtLUmhjy7ZV2Jg7iSyb9T3vWFJc6Ac3UC3JD3ny6ReD8xyFhwzrapc",
  "key8": "33WG5HfjoLTryxX4rMNvaoSYZ3sj4DaU86cCtMrs514QN9Rwc7t68uUjjEC8TYUSxn22pG5NKtFRMfr7yEKubq3M",
  "key9": "9LAPpeC24ZsWvP1Hk4rtXRxWZjjFqERPBejsDf7JMudVwcHWRw1zmSMkkwEFisGQaB3r7bmZcTYGnLDpxJnihg1",
  "key10": "xUxz3iu746ziHMJJB3Dh9Eta2SZH25ijZxPsJUi9EUuCDrJKFzVAAYuVLkHm5MewMPttmuetTxRmt51QfDw4Dgw",
  "key11": "4bthCQrqpqJiRs7QWpVQDnaxHxGUid6xFURz5sRgY9Mz2SSpfTZRjGjhFUMUAZDLtHiDMg7CUgfbubUGKkLBMeF9",
  "key12": "2mPyBkHd4FwnvxKRM3CHhwnFAkKxZmgrEGZUFEehVFcypT89VfUkaGvdfmwxPXoFUAejFWi4zHiTVRCFHLGYreCt",
  "key13": "2jt3u2bbuLtcmL5e64dFnf9AGKHuE5reS5pwtwg9V3QjgrpTQHfhD9n4kZHUc6eQqPmHC2pMDog77eXGcar5uz3c",
  "key14": "54vyqjdv4r4GeatjpaSvKXfWiJjbSPQ7FAnViq9wNosLSKWKK3mCZGMuZj2nwR2eUSmKZFVLWXfnFzcfx1EErqYC",
  "key15": "2vDnFx51Rg8meFiXyztzuWfmFxEKntdjFGiJigDvmmMUuQe38caa3piVQ5ekVhY5b2PpqP1BcYVD22X4BUTW1Zfb",
  "key16": "5JQXrbpsmVovyBR8j1UfvqesXYqwJmLf6P1nkEnh5StU4rV6FspbSbd6SXqbQkNS3odJnzsJVnrBGvUbdq8zW7S9",
  "key17": "3QKPHg9E96dC6LrNAxyN59gZTG5TKLcuoGNVzKgEv5kSYS8pAvUPpnNXEXGKaC3ef6Wa9G4QFd6hLQ7GvCQALKeZ",
  "key18": "WCfGxSySmPa8AbokY3RTegnR5os4U28KkzZCSTfNowdiGRWG26xCib38RkaS2ntV2DHfPTXfpCTywTxuEgFhvjs",
  "key19": "t6Q6i9sZAWt2XkiDayigVkQ7N3YWWRDtp9NHKcjFECwzcYH6v9D6XPgmLdi7b72NRwWSQqEZwvYXECLrerzLMyt",
  "key20": "5eU2ewvma1oUVjCKh6x6GgQtF5HPZyKZiy89HkVZV1K4gGKyJGVFBDqwmZvW6ram5ZvTSzoiqoLo7ofNbZ6mYYWQ",
  "key21": "dEft7WdorfnazxqafcnZ1wbYsrS2enVnnaxz9SxCnAw86t88MVcpDYJ3nB5CGTQQm2w6dLaAHNm2iYtmgMhV4k9",
  "key22": "2kGXcFHRxo38MfRj3PY2n5m6CLp1PUMdrUGvfcpoqa9HyqLLCWab4DE2t3apBBNH7A3fsWSEV3FLV2wbC6tLhh93",
  "key23": "4LvjsuwCaVbTCe2w8CWcgMqEshoXkDEYn1b1beNoQzka7NEhT9coiz4UXvUmebESt8GSVdUHHPUHh2HZeDGsfmvG",
  "key24": "3Svhnn4Ms6xakSFspfCE3AQZY4zcZjx5T3EdGkm7ZUUNRamA1XiBa7a4vvLu3GbZ8o6Y6dzpKhaFXR4hw348vSHG",
  "key25": "5eXyLVboJZeWYdXS7pbJnk7UnrfkBPPeRiCtAGQa8JoczUMF8hKzQwFHWJDPeSyyb6tJ9ne1vtKVSvqZP7QB8br5",
  "key26": "2WgAMkT2izzVZN8LTi8fVCi2SBxDBCXcBqbs9VWwhku8KqR8Dru82pwTidaiwtg2WTMpLbBXkt6Vw1wAa1n6Nitv",
  "key27": "4KHXL1Jcy1k432tanKUHETJdErpX88MyiGMc3NwLyK8zwYysyKCxXQkavhUqcKzc2t7YmB8ojHc1rnCUTrniyGSY",
  "key28": "3uGMkQetusXth66sD3ZmyFryU4oqUXGcC61t6zzUTNeCvaLkthUWP9UTcicv2mMdGrw5be7SsFoqovtzsWRbjA2W",
  "key29": "4bRhzqk5pkdoHpTcL1Q3T7T38ayh1wNRCc8ZcooojcwUxBYmbeWNFefF6kyiuNYa6d6XgqMNrhTQweeot1PPANvL",
  "key30": "5gj94KyZLyZTyu9Gbfmn4G5aDE9GEdqZEgmVbKq2FnyFo6ZWAbVfEv8eDRtoG9UZ2wdw2Wf5Rrz1k9EoYJpjKJGQ",
  "key31": "22P3RnSPmWkK81KzwNMjn5PFv6nz2xRPT7Tqv7m1RUt1qKhEkY3KZSL3oWfeaUNzqtrE5sozMQHA76Cw9fKErrXo",
  "key32": "3282BN6na9PQH9KacioDBmnBjDQ92hp6QxdD5gxG9JozEHN3pMZXGT4uyQ3sGs4K6xWLphGBCYwcpSHZWTJGhaRM",
  "key33": "65yXgCTAchkubkj3nJasKZAzuGprAxJ8HH8PbbfSnmVAS9XaTZNN1XkV3ujFQtkMQzPyfYpvvu9F6sC6V267FoKQ",
  "key34": "5RMADtvTDmbjRYMCjAaanPgZdg7qr4UKb89io7zJc9mXUtTZyqRhgSurVmHngBGcdoGNKUrTRYA6awUxqY53T2nb",
  "key35": "1ZzRwHedMJNfNr92w6gyTPdn36yH1fYBkYDdvn67eAv3medsRMCmnwfJqoeH95oBTF8CcG1HTnKQMVKuicxgp9b",
  "key36": "3zP9t4k7j8HzEBXsoq89hHh7MQtn5h62cDHoBgUkzqhGsZmRCbVyrAeZFKuEWPGDciixsxZFE6JcDSdAsGjB6MWB"
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
