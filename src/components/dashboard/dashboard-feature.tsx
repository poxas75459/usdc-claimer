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
    "2i19WdW1JyN1UHo4dSQYyQthZnKeJ49dGmP786nZ5pkzVtZTbWHyVGBXzSi3ii8PXZCMZsrcGoCBnRUqpZsSQndj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZN5ELdmLgynhxQecWFF84Q1i7xe5dEBt9QYtbVrpwnaxgjmWwbrJ4jwm3Wy4aCWVUZW89UNouW16u623fJz3kcs",
  "key1": "55KEGcinXbnw9pDHMg49AkLvdiqaPtHat2mc7CUDgUZi32z7CPxz7PA2k4ZVpgULVWkutBpqMKdojw5oHXDPas6p",
  "key2": "F6CwLxydPWvJPq7DEtmoZTEM6D3NmoHYtimHXfVik9WPzvywm6YHLpAh57EVWP7Xumk7NQkrQenPse78BmavBYd",
  "key3": "2dAmk27Md3DUXba3RdJBnCYycPe6942tXHiKjGnKa6HKxDYAepGS5F5Y3daeGWYJxqNk1f5ym94BUnnUVimxV3Gr",
  "key4": "2GWoRaRUkyN7EokQ7UdQhy7uMLKEh38aRchPheGH77c7635CKYpEsRQnnVndqns4B5j7AgMFc6VTRWah7gDWRRWd",
  "key5": "2yaVBi6UCQWrAKixRDJvUDPFU3L1j5BwxMmVZZvr7Y9ojBSZUhVMLetAMmfG2DvHM4cckyTdPMeuS4vGTq65AQkz",
  "key6": "4XQwvzfjSd5EVNacM74bC5yXu9nupdhBRK1Y7dUsasB7dnN5qc8EzhfRaghWUqyEYo3MpsJD5Qinx1LU7QZMiGWq",
  "key7": "3eztks2MrRgu8H5Dt1whxfnEk6fnbRfcYZP2cRjFUmttAcRNV92zCU4iUJqhNtrjM2CbsMD1MQKc1eoH59DUKBTX",
  "key8": "36vDGiSzNES4SYwSfhWuf7gBQAU5pfNRkVrfSix5Pt4MngWbCxHomxgdTzd2hA5ttBCsCfTr89imse4Sr1P6DjxA",
  "key9": "4ZNKtFBaJ5MSLCRKWUtCB5CAMNbUeMtKE7UvW3Evyni2mZW2P5sHbmE4643Ey1koaVskyG9o7Eo8zqDer7d3x32w",
  "key10": "5CEYDBkgPcWJmfcbPRKvZqJ6RFejHHdHvMP71kKRYh6x2C9XPCRicKrMDzgraBgrC5m2TV7eG2yM1dTtETAekJHZ",
  "key11": "58kxQTSY7CGBZ7u1xhrdihjg3jgxipm5txKBz1KY4sgYEUTGq1FR7jqbnTC3aC8wP87d1MEBV2o2jagSSZe22G1F",
  "key12": "2u7SHkFaZYXPGJP9SzcaAL6b1TL1i5TwtPqqyzevw7MqKPxJDeuE7evMAMEfbxr4NV6kc7MbUzC76omLGpK7Lo3Y",
  "key13": "659nq6LDynZrpit8855EE5pLzVKJYN295b1v8yoCxBELEVZWdLpEMHZyEjcmSQtjEsR6jQ18nj3WULoQLxj66CV1",
  "key14": "4vkgJqRXq5zk7SsnJ6vkzrioGARbkQ7iVyVXvN4XAxexGL8odr1YQreFD417yRzK5z4UgfbD7BqdKQERqbzT7d1J",
  "key15": "3UNoXYMXAKvrMa2ekWft1AB76bQzf7K4WySPr4vVz7LHxg3xjC5FyFzDEdYDg75YR6Y6VukCGYv3Pfgg6KtTcFit",
  "key16": "2Daw5ecxpVaDCPmBYKjpTijQ8SimB4NWTSDb1apPJQtQTpM62sfdcXXv7v9nm6YaHhynoHBLbRRZZTDYPoxiGgdL",
  "key17": "5FfQKXoqs2DSuunGadJfHUcqT2iKuzqeq15jzZgzZtpGB1veZXaZjsoNuMzcJyqJFWyoZNBgj1TLobNi4AmBkKqC",
  "key18": "3cMxrJ9MrG64rGgSHa6VfjEMi3RgBfqDECgbmVLMCLyaugK17TQAvfNcnpbLBLE94VWgX6bo3oKGS6UB4UjYro5N",
  "key19": "4d6xWbHHaNwxeg8pNtM6NbXyg8GjtA2VKueaXKr4tdZzxV3rTGpBDeodAQQFMVDZLGjTLYf53tVXUZ7zb1r7vn9j",
  "key20": "4q1EzxTMXHz9K4NFr73iZPDTZy3DbgByWXdexAJDq7YJTPTfFXJnbMNoeMeAmVwgk68eFMNqBGoRzsW5nptCHkS3",
  "key21": "2H2s37W1H4mpN51aH66sfr5sTKdVUBJbQ3GkBC6wUeMbfGfZW3AyvDCdLQYKKVxXShY7d1rAi531CSbE1N4hQ2Pi",
  "key22": "3ntHJQy3mFqTBQiFmKb1BeAgbLaUzKjV7YLFUwtWQ9xixGsaygJkGcgffgHdMmt9ddQAjMNyeBisKtcdrzy9jADa",
  "key23": "5UqKu5oSaWLc89XYXkoipxsMeRRvXbP9ADrMBoP3YorKqWKtJN8bxeCWtD1BGrNbDFejjjMeChwqRBhr1Sq2twVK",
  "key24": "TL6xYwDyjpNycypxWhJeZBqZd2C4YJwCsQFgdMmibUQ6vxLjfbcCr837KZSBmnSPJoruYP38AZy8yQvNvJTNroS",
  "key25": "Z2LN47YUonzymQCATGoAxLVMjvn1FuzSxAfSH3EZ3CxWzBGvBhpP4mQu7LvF9sVeWxjMKucJqFkZo52ixBpLNPc",
  "key26": "5aiMNvJTB9HSEqM8k9irAdA5oJPGVyfHH1oVUotsXvSHz7W5YWgst5tMEVZFM5LGwBWvBRhVrugKaQFsHvAnB6to",
  "key27": "fZSf8kP7mJ7fDat2nz34ABFjfotpCLExGpPsCCLtWk7U4Y6UPWZf7x31JMp4J4L7wLEzrUYLVHnaKQRRqNk1AmS",
  "key28": "4MKs1R7fipF3Z6JZfRPzPsMa55gwgA3Fm5pciqKnStPXUERSPzbCzFv5cTPNN6Q5JKn2oyNFEBZSXwwjbJzcVmsV",
  "key29": "4MKYPzvRJhrLLtRPu3MbLPD9FrvQxATfyMdYnqZPxJ21pkAB5bDA4NPjpWdneqmM5GhUk4QbwsHc4SUseWYPPBsc",
  "key30": "64Kzz9hUDopSAwCg3D4in1aRYWuMzJ75bGighqPzLBv629ihUB3wqEJYCThnDFSLDsvFCtp8EkohGSoycjfxjRbW",
  "key31": "598NEHLFYsoNSFxghCuVXnDK7Rvx26TGkq279r7PbgAxX3VK5osgu7fzZCMPB1EX7iAfcQcUH4Xqw5yoxBKGdnwf",
  "key32": "5L23LmgwUveXJ9xXBUUaxxBZkeKcVgCghrgz1wqwZfmYFmsmNYRN5vym9NkLKmByM5w7wqVeEM4KCex67YLe9qxo",
  "key33": "2egJZgTLTxuErQbw24aK7bQ3pKd69ND6Mb6pwPujhNr7aD6jLDb8SYhp5XrXNEgHzuR6MqekY8RA5un13Qqj1MxJ",
  "key34": "ujmeqgnfjfMfLfTeUaotj8AocM3B9SRMfDEQAaghqv1gVhe7Nk2hx61YpVQJgCAC9KibYD1RsABHse4rwjQULuk",
  "key35": "5NH2NHey7hQ6HRxuM8Qmns5w78g5u7aiw3AfSpCCaCm6u8u2Suss53uzVcVAWTsqJYyxVDevQ4ZhJeEXiSmER4ze",
  "key36": "2UznrvzxPBwZu7YDgtYSJFhoRV86CqoY9G8Z6WEvZSCQBQi5wozXAabhmF3tc8nxnfYQ9a4iPpNYnCQFyWnzwT4",
  "key37": "5iAc9ahHkjsmhYt5mQG8gbbebbJZtupYHxdBLzNF5CzYbxB8xuW5FxjbfWhGDECKRGQAftJvsJJCptojxsFZ7djh",
  "key38": "2VPig5zB2a52KR7HZB9AvBVhSqDPDdRovUBMv1rcggyaAqa3hp1ZZeJN7RdzVotktzamMjWZryHddpKEesv9uwp5",
  "key39": "3p4orMvFN2tp7CUpW23Lj9kVYcSXRM7Gsk5TZ51332ki3AZbE7NTgQM1GuES3akqVis8fUVgjXTr6bBDFUoHCfZ9",
  "key40": "GNCEZudLCC2dRWwAVP9iujkDNZngju3atGRWemdobkEToixjbiXXqgpQv1zgQWDCWyku4FWXA1irAY9z5QQg1Z3",
  "key41": "4MH96G7e6RXkTq1vd5ENFz1i31mUc95vbJ4h51DjNFUGDkqsy4egGHNGbW5fT1qAus22VoHHYivPbRjYSk8xHsbx",
  "key42": "rUEZAgfSJsBRjDewBoxaH9nNvA6cEYtfRYQKY1tFsTPKEv1me26HvjQzJb4YEKDorS1UUNtZ5MZxazMQqANyrDN"
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
