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
    "2LEodTGZKvg4rtp4v3yZq55pksirkfxq58rXKSrt9KNFY7kyPyvTNpL3uTPyYKpwMowYb6sNaE8djZThReUPyw7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YDThmL8EGygNBDzrXSysgHnjSjqbpWBdXDKEuhPZFaC5pUt87YqNA9sdK44sApsX3aRoS89Gyq3EECTv5YFAemK",
  "key1": "3GsgSb9Y9WMot3bWsyUeSXaSQzerahKG9JWN8EZroR3Pu187KhpHpSh4SmoBD34ori7VoG1nv9QkWEtajJ9m83Dm",
  "key2": "5MBriw7mhmJPaAHDRJs2HHqemc6u3xX53GjebnZq7qUuLsDhQEYaUh7iqWvNtgjqhs7S9QPaYySUpuB9smDxLJ2P",
  "key3": "5RAc9ZH8Y9ZQeYrHTYCY6fhRAUrErZDFsaEtabFbfq5HkUEgKxcccb9Zf9GGXgYAnvxiQgH8B4MndcLcZk1bvkft",
  "key4": "4YCgiCXn9CaWBRjfpQyBmpqjQGyfZJQLzxkyV94QSYoSmJ18BW4PkwHRued92vH6BUkZKNyiNu6tphAVbb6Mb9ZX",
  "key5": "43PwTYwSX9yRmwLS3zqQKEaap1MqxLsqvehXTShP5LkT5MR94joh97XvdUYe73G9oFZiuUQC2bKGegU8ZQBFkLaP",
  "key6": "36GaUbYJ94PjYTRGE2zdZ8qwP84YdcT8wXuqDBTmW5cxcmrWnYiR7sdUo52gRtJfe5NtD9ZMArMm8ihNrWcnqfMt",
  "key7": "2bsCFkU1efFRNDT3rNRdSJhHk9C7wmwuW3tSNB3EKeDJHJyg2fwwzxsxkCHpw8R6r1pbVBVMxfu5f5NRdUToSzMR",
  "key8": "5rH8AtVsFi6mwWMM8vLapu1Le6GNs6K5vKwWrWSVec3tSsGD1hWLUL5jovUcv86a4VGJBuG9KWahfBe2JH3GA66H",
  "key9": "5GZNXdoAXjSq9fhowVuM2Dy2WSu3F51Aej8sNjJUjHcvCJcQCqYwvyTsvAF3ogXgEK8mPe3REFyQPFnA1yPnEbbj",
  "key10": "2hQLmL6GuM1M6NSFQJdaijTCo9TcNw2S8ftYxqf1sxmzY83Ci6VoAjrqsBDHJXdU7KdpaftxPQyYa4Vkxaa7tp7m",
  "key11": "2urvSJnt9WUMJEqKVv9Vk2BkTprSo7i8dfKpg68KmMHp1q3cDY4TZMshME7LATF2ohKRCPxAZK5imvyiuvhG2q3i",
  "key12": "4ZP3FEvEhhMKphYiKhG5qQSpKZRhPPm4LDnZdqa8CG87GDjs1Y9jpGuAbFh6d5E4JMzdKbb9TEiBQyr8ricXYZHN",
  "key13": "4xB8asoMjJug4A9Gw7oseqE73rGvDUDH7JNGiQhECm2E3GxfsCiGRSjtZPmVqMhSSfPbBxd5scfSzjomkKeQaPxH",
  "key14": "341hp7oAq8g7EJ7STrVWHMgn9mbaEReKXH7W9bzEjNrRxqqdHof8Ai3b1MzXD6tMHpS5cYQcaz251SEs9PxGaapp",
  "key15": "4ZimKtfWAgQfQVyVsXjaWCLSek7A3Ak61rd5ncKGztvTodEm8cHrQ75gY6DSMFhkjm8fE4NMRs5bigqkHtxDUdJ7",
  "key16": "31CqHNbz3HbDrVS9mDyyRjycQbpKkvkb8KWYRvCLchHRT3NwfTpZDyq4n3nxdQgZDhvYWzM7qyQ9ZSfrqALHv4YN",
  "key17": "V4ZjHmsKm63zsXwpAQLu9HbfYkE2xp341mA6Xq3yjnCp596P7Gx3XkCBm6CVRL9eNtdGAEPTvzfUVy4sPTdAKoJ",
  "key18": "3tkuxKVS7kzPhhe5Q5TEKQemvWtejuRcxBvhXGvc6GRpz2PKUuZY5WsbS3YEhEsUkq7Ac8Lk6CxEwFvX5tTKxV1r",
  "key19": "5XJM4UXsBT46wUZPAmuC7kznc5pEG3WrwPDW4jHLoJNbvSUfxRpwtUQAXFEiRWTqQkwryYmNETawRwLGr86cTYmi",
  "key20": "8d2qgAw9HBd6tjsUpoXNF8NPf7pe7ejEXcyHGaZNGQpkYSNyxytSwUby9NiEvXELAtRxsv9Fqsjtm9JJSdTWf8N",
  "key21": "w2wmzaLw6CePn5sHdd7wZvbvT7xYUwa9i7XXxprZrpgttJ954967Y7mgjgvydhGmEETrLDNen1z3xak7rG2iAGH",
  "key22": "BSJPEJ6JXuCPE9Q2L8CTqt9ag5q1ehhvRSD1Bj571xwgW8Vr78Yg6Riu7maeef4b1aDoEmH9AbY4MePZW3npnLM",
  "key23": "5uEzoApSAqzjNXKDsR65HP6NfgPpyA8SWT8UayY3SC3iz6Kpvubvy8NU7RJ9wWh4ihudDgPbK7Zfyyu3aqP24aSX",
  "key24": "u76v36cGpaAGbWgRUr45WZLpaepEF83Fo1ri8FjGC8JifUsLJJ4bkbMEbGK4BL88iFvJs2PuAo6gKVCekds2DcP",
  "key25": "4UwJsFrndtAHSFg57Necjap6ncmMPosCAUD1CtdeeGW6kiUVb9NPFPz2F9RTUm2Uba3Escts62aeiVQTMdjKa7PL",
  "key26": "wEJwr1HGzE1CkwcjWYTCtLwdtQcPH4uYTKaKX8vnYTHjxDgQ7DeQnj4HzhZ5tmFk3mmSxXNWV7gtbCv57MwqRDx",
  "key27": "3rEUx2nrJpZXRzkNKTVEUafF9yePfhJUG12E9Qepv6uvE381brA9YXkSQEXRuou8nUwLpcApH5DAwJ5dtFnNVXSG",
  "key28": "3bDyvZn4T63AEFDdEstA8eEK4no37TdeLQ4kthSjBd5AjPtLW5kHSFamLiFjou1AF7B3N7yjK2A1EG2tpmXDPvoy",
  "key29": "3aLPRd8ieUDemdgE1dqvrJvT2T8omUxqpLg2D4hzVWvRtzQms2kJmFKeZCNEDnS4jpGF7A6R6WjFuioNyBfaoEeM",
  "key30": "64arZywoc7yJher77c3VgKQyVUuZnS2ny8mhFLpiZ6FxbzqRmS1CAeRi6mQEvA95GorZFWay1wc8s6wWEZYozqjW",
  "key31": "3odCrKhwJEwt5HMkosjBr4ftR1YRQp2u97NxLor3Cu9dAMVwxyZ7PTgyB7ZNLsQrXrjqio1ezE6VEjZ2Wa13vrhG",
  "key32": "GBSFgPMuFxyrbPspzVLomLdv1XjwtqLTvJFfFj27CGv3X2UqL4z77R6AZgSmqbJr4ePJzKzEvfd3YK3PnNRRJCX",
  "key33": "3QjWH7jrC46eRNKPuEpzyVbyDvC8yo39SaqFwh4L1VR8W2YZ4zKrxC9ZMB8LDQ5fbgybWam6MuCKrbP4WKefSoc6",
  "key34": "3XqjAnveTwoZQ8nikmX8T8gdnyabr5uB1kGS7mh2djQJsHbKALe8ed2irfdNME8t43wKCKFQgyq5yv4QboLvwDoL",
  "key35": "KfU14DCFQP898GbtFCeXHmvAyPjzjGigw7JPfCDzXrEzgdnUzbLZCMUoyDRAXSXki7FvoE5kaVzQVBQybdguNWb",
  "key36": "5236HgthkzY2x897ZHqsZJXvpaXG4kTxmsgVunTyPyVDciFLqVmhibKioozz1BMVSJ5WC3WEzkeFfyW64LvmwS71",
  "key37": "2vvrtUvk2vtvbuNAZ43pr1burdGhDtp6N5NpvaaM8PrLbQzHDQY8bVgGrcgF3XPmXooYAbBLB42cZSzq9uV17TNd",
  "key38": "5uPtuo1BJ6MniFUxcHScvbnXswKYktoz2d9bw9D45kGVzv2DTq88bbuMNt1rEuYM7Qjqr6oSFcNDXKaSubpM7tw1",
  "key39": "4t77FCsdGBL9aTfdJAppSftyXaRmvzywBTenvcFXJcJDFwAQTnrTdwhpDnrG5RrkSVtpw88EmkrXqn7JqjCrt3Yg",
  "key40": "22KwnvyBBknPpL1MrWgrKxc1VfJ5GeRMtxNeN7nBLAsL2YHACzR76QzjfzSLhgLvc7Aw28hLnuM3LbrDPZeSoRNi",
  "key41": "3ukgDkgSF3jECDCf7eaY1ionYrUQan11K9meXaft1f6ryn9wCZG2YVtLucPQ4btwhmi9oKCycpZU1EjzJuNUopFP",
  "key42": "3698mwwaiha3Hm5417wtxQbzQJSW1xpDP7bDVo3GaujAw73biffWqJPosrBfZ975z3Qy9PX7AZfGdZsiUbMBeTxo",
  "key43": "4w8heNYMDcR97pUhYYH4SUzS8iMqMvCduAyTeoqPebNSg1X2nr7JBJF3kNkFEBtzgozevPVFvGZKRVjEXWTGyr3y",
  "key44": "4qJHYkfW3sBDzbLJoda3phkEBxQyqjHsfPy8GUz8dSWLuQZfr8n5oJPCLxbSoSRc7o6MpdHZb2LkQ7t65Rb7Ceqg",
  "key45": "2kUX8qZS2kKMdE1M5QNU3U8gk4ZAr5T2ttbAWQ6Km26aV5h1kcEH7E6WX1FuCGZHfcQ28GkS1Bmp2ayMLyUKnqiF",
  "key46": "4nnEZtMDJydeqfqqqhaPyGCu9HbRXz9XZxHBDhu4FTkHi7FjbZzPooXgoT16iR6DUA7puKhtoBkE96CvrdQJBEae",
  "key47": "56wrnpGDQHzgcPCiTp5WTbSkb27dXb7yms8JWQCncxoqwFbYRsNrJCn1gLUHRPGqCNeuR5n6ko2PYBVW5pgCu4KY",
  "key48": "fGeNQ8XZ2Bfsde2zzYz6NeM3Aps5nfEZ42Y9RmB5TDBUx4D8KQw5d4KZDBPVrHRaEWmHkP3LocgvpwLLxSXtKF7",
  "key49": "5aHzeA3rzZhgrPvYeWY8pMSGzwe4GycPDvpXbBVU5mnWDhUQecwmm6Zu1FzGapJJ13UopadX7LhQVu3DtEvuo1vT"
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
