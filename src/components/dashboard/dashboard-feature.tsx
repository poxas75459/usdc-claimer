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
    "5LLph8is67Mh4BDcrfUVQ4c1vXzogp52EjZmQikgVz9TUaVdCZbsh94HnohGffz6zdpXdoLwcVTQWQZVkLcTPW2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q76phWz7WysFWfY2SfND6LjG8ZwMYsUKPp4ckHkFEw1kXEYfX5cUV3SzpPw6edZzjScRqrdopLYsaMMcBVe1HX7",
  "key1": "49zn56fDBiMGg4gx8feHZUaHFCLbBNQ4BC7WQjGJqJs4rwB5ku6bcGc7Su5V81RkjUZW5oVvPFUfrVNzYRMuUeJc",
  "key2": "4gpuBsphLpwjH36nfFSvgbcaW8fB78Bjk7fy5yZWF2Ne7mEuZYRZ7zV997w3335Wv79RTsDULvWF7HLsW9ZjAva",
  "key3": "3CLQsvokoS2SgzCHvrwhBjbaUKWiH7Hdv93D99Dgc5mFNmuEd1LPa5rnMejCkjUM2JMcfSgNSh7EHRLMqjifbGDM",
  "key4": "2kcfbog3NaVvpHRhUWjr7rvn8WenTKE88aY7Tgtu7UKK2a5Xr8ENnjs9gMpGZA2xeGLejYkRVJ7XCPBTkCZjfRgn",
  "key5": "MSiY9RbZwbydpB9VhU4w5seuHH9oK9aWQo5G8cCog22DKPFgizD4kAZYrGVyTbrboG7GtmmdooCYMKzmT7tFzPK",
  "key6": "678kUp88NnsFhEbheY78Jmpg88hNJQHJP7pJEW2Y24uFHKwMpmmkGcUN96MHKeyxne6Cf7gA448vB7iK1xXtyYaZ",
  "key7": "2mtKHWg965CdS8yXXDnwomUVhWvSUYBVxCsDxqiFcyAcSCyPPkzxayK1DxL4tuLZ79eVRx5jriVwfvDTRRUTgPgQ",
  "key8": "5aWWo7q8SoE8c38kr5ZDCG56j7oCLNKvcQmYj34bNBZ58acBt5JdxAUeWG1ahEbAypYWwmKT2TQEupEKaSPxioWe",
  "key9": "446iC9uUE7JN2SjSsrwz8tomGFMP3fZLPENaqUTcfoaTruSSpkCTzNXvNJa7y8xuwBWH95uX4f3Vz6F4UybmqmDf",
  "key10": "62AmfDw4vxvDcL4cTUACmLDXAbTNyLt2LCygNuFVAhERgS3Lw5sykAfUPsFNSmcdVNu9jHeWSoyQejitTvRcgfit",
  "key11": "39vGbRwPcrpbxtEcTdfh7rWLfPD3KunYRb5UY6iWJLbmGK6uHwrVyZw4emrj2WwJe5ntGXnFPm1BETqNQLNvZnoM",
  "key12": "2awdU6PRJJYDvJSvcGKM39DoRzsP1seJzFJAWwVHvxuDjamNHmmcZ1CSB48G1xBMxQ5nwv8xcfa1h4Qa1orTkssk",
  "key13": "2tDDLkqwC39zhnw2q1ihgfns1tPvPY5GDUtvKE1PB9eJM5ddEPnVaY6Jn2M8TpGMeLhac6ntTPgR4zkKjcNL74ev",
  "key14": "z8b6ZN7an8h6cAvfT7NQ1Mekc3BZ86o5d9ZH9E3Pe6SdsjNpZwSvgna2CipJNuCaAcgpW6bVhGi9v7ZQMWLFJjr",
  "key15": "37E9xsdjAUF4yjt6JsbXGBdLRK8PRRB2cXvmQwakB8HFiaegWRsEpWke9NfjLaWkAcyi73vGagQmJp5PReNYB4bv",
  "key16": "424vaHbZG3BHJynbBoMUZ1bwFXm4iTyrBJyrx7iyYoQkLoZsuZeCyuLEkJ2WxFwY9to5ZqiPT2wCvKPCpbieJzet",
  "key17": "5pAaC2xC9U4QJWJ1JsM1AE73rM8xEzmdCsTPXRmJuhiP8osGyMW31jNSXUGzU5k4gT9iykqTPsWEYbLcpUp2yKgF",
  "key18": "5wGz1BJRtQEVaBH4a2fpR2fFubypM2G1NR7gidQUqjcsgNad5h8jvkiH5FGkK9htXnyW2xUCpajgVgjBbRfQa2xo",
  "key19": "429b2ho9eSrs2TwnMNrSfzv95L8evD5JceBNtv14Zfh5BKq3aSyr3g4fgkzfnLSvhEtse6c6a8isdh7UXpcy7XCH",
  "key20": "36LP2hSgocwRc2EA8LnqxaPzDVgCkp13WitgdPB73yuhTP9cbDeF9opiagq64cpnzPYLJPU6N8C23bbEDVV2CNn3",
  "key21": "3krU3wh2nnoAoX56XpbjKe2hfZqBPD829Y7CicPd1PWPkPegUAov4YABbXKqUA3GnQpz2jx55iz9HUnkgY15TCkq",
  "key22": "3BuXs6X2aWdhDGgaZmhaB1EtMspyuFZMqdpGjL2rP44Nefj64WdCmMWr6vjVvhYE2CGw3jWsTgktuc8SV8bPv94t",
  "key23": "3AMYp8XWkfRrmiYzxU5b5cTQ4hEJiuxCHixh8wVwDQnUy6B2rYEJ7p146vSZ1Kx3rVj9FRTEFh8eZhC6A1eHT374",
  "key24": "3cd3xM4NA6gYu7TEhQU8ypWm9pyYe7t6DgqpFydGTGzXFWwp7gMqdYh17mgwr7xe7SABH6SBzWBL6rVdCLCXjaDo",
  "key25": "3q1ScVUiNJkAYjpwrf8idnrTBX82K9erHM1YK5mBRyPLKuHDcUJHf5rTwLK592ycTnkPmbK7nXnuApPYe9Kzt6wc",
  "key26": "29CxoCMp65iiVfGkqt1Fi17gYhjijijGabkbsB8syY4hscCBA9CLFjABoHMG13qE1tNQXiV6rPRwUdoxvAZ6rycx",
  "key27": "3xzybLEtGpEtGQizJSWVhjs29DUNodQ23UmYCQKpouoL63Bc26LoVEXzAHTfjYrw92kGFMxCoihuA4Gas8eFLgLs",
  "key28": "5NSPusHN8jbvaVwTuGQxpxYSaikXLVAmS72gkcyFwYbgmfqvVZ31pWLk3aYX7qouQwWSQJ6T5a6Wt7wpWBibQxdR",
  "key29": "3gYj6aojC5BRQGAy5mY6aGAq9kv1M1wcnAkhSXUuouscDZpAT1zSboFZmy1ei7PwaejQBDSiSyCXVbQ3c5Yh5yVK",
  "key30": "bneeREWJV9aFQLrp9euePBBnAXZorAUbGqjV8AxsTKTc2QJfSTsbq6mBVywv1hNpDnxGCYoGK1QkX4nLhzqVisp"
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
