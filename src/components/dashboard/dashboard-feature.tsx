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
    "4XcQMBbzgkA22QT7m1WtsWimXEeTsA2w6TFHgmY5ospaWy5JPvrhgMAj8Turh2EjuXYvSJEk5sXqQqoNmAyFQin1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UpmPhUJbwwtS1hXJapaFrd9kojgsyg6vMHLeqgUhh8u2GeF1Dg7ihMP1j3Yk45bJBJBpbY6uNiRYBAoUoAjHoJr",
  "key1": "4JoqLxRY8oNmkqBJA1iGiL9J1uhma9bSf8Bnyiw6pKVZ7H8YfJjpK3xTtyKBRfCdQmvrsc6Xy5DmM2nz9tR1bf1v",
  "key2": "dMFgAbhTgGq98dGViwuxSsDGQDcQGJeLWpX44Gf9KHjGtnY83z2iVJduGnEGyK3ABpsVNkZ5X3UHLdgA2TX127A",
  "key3": "4nK7zDnzD7tktLxBembvnPgPHASh65SavaE39jZ6DEBiKSuqGDkShppkfKfb1XUPdDFQdCqbNMivd2N2kbPEgv7G",
  "key4": "5DyXWbHz1pQ4oiUcBjnmoy6vUtWLjgSREzA4wDZSAJDjKtJKPN9doNtaccUASfFkP1CccQU6r88CaEtpjKJCcdnJ",
  "key5": "627p1eNyUkrQws7vxfSpWpUdK11LsWtY1rtHT334tocksVBn9RqSM3fdZepuUkjvdwLj6KmzkAJBkTRfdnmcczMU",
  "key6": "54NqAuf3KE1nxythfyxuX2TJ7zm2w6UEwkzVDFtyou3ZnGxjPpuRUJN53ug9EbAZnG4sR5v3PmVRspsLRjb1XjeH",
  "key7": "3qPtZdvFgFuhc7TwdAQ8ES4Yq76THQXtz5aXuD6voAudTb6oBqnAPLt5oC2RcWRSme3xiByvp9oFXLKfMUyHAtov",
  "key8": "4ySW6DLUwJjv5GFsRhbKhbLHWojUd39fEidZyyikRKbDVgHZ3aRXu3RTBEiWeesQb9q5MxjaF7wC1uSMhBpqjBJN",
  "key9": "i62BZ74JVammUdx3fVLgttPSXKeiV8CfZZy3xnrgKaEgUFzLnvShKHS23s1nHpft61ofgFjxEe9DVEDbNd19HHy",
  "key10": "653fN8e1rSbj4GNXLA3aFwwWzwrsvPjJwBgpu1siAA9KARBfmB9UQweV5wQcS4oeaTJSau5p1N6N2Yj9t9FP87W7",
  "key11": "bc3D4EYVSepcpcJzmufKPUeW1ZWZKriubFEqUJ5vF8BWjs6GEDVd83rRCwswg72Lsfs5d5i9TdkHBrU6gTzAetC",
  "key12": "21TXwej6Sdr6KNFSEtH59agZcbtMkTeFUY5edUBX9kpkEJ5AVNxqTEZXGwywiJ1DURvGH8SHv2A6Y59TsxLpNLMN",
  "key13": "EhA22L3jZM4nmPTfC2v5WcUkw6WkXDr78WxdjwZzvh9PcFMtNFqD6UpzZH172msYFGR2ow9kVdutoSEuqHw1zvw",
  "key14": "2uRoyhjDA2LC8BbL4FyW5FW7PGNAtNoTbbkvh4HFbc2oRw897FJtCF7Av2BVrPkBUnP3jnM2qrb2Cd6w4zCSfWoh",
  "key15": "5s8gvj8tfeiMyjoKjYnpo6LVSt1WRBBUJ1du32ZE6XV1dwEaujhk3MLxo6kTyz1Tt7Jhn1Lm7bn3u3rj5sqXYskb",
  "key16": "oEhT7DSSyeYHvLZvzNsRZvpqxrDwcQ5uAYN8KKCcEq3jaUuFrpCFSCauywudLmgstwENRpwRMYL9wnaj5EpRix7",
  "key17": "3FNqfhQ1b9stbDyu2qpw3cBrro8F7hHm98pQcu9UCfc4uiEFtuLJkJnxAaYDSZbo2SUztZPeLeUEbra43sk49ygK",
  "key18": "3tnhXWySMLxZ9qJWT85etYxxqeYo715tGfasa2wdd7yL2Go17TFgcoR5Z39ZDRWB1MiWgDEe4oYYhGeyJ9GALraC",
  "key19": "2sMDqrBvis4CLXALvuCE3kQEdwrYvDhksYn37Mh9ueLRQHVnVaCMkDcJNbQERLX3Nb3jjjokzprGeQ4cowBj2JV5",
  "key20": "3so71VmpjgjBiV8WsgBLC732xjNPz2C14Ju6S1WEcqew85MbxijqfYpGgvKkeTu1qtyt48k8AybjvHP4mDMLaua8",
  "key21": "54bfzgXSA4yYTFyPPDHeiHTJAsyshoeztP3zXeN73NFsriGtKeQ3uYh3awCAn1b3bNz7fCFN2KnF2Q32Q2YfwCe1",
  "key22": "5ABd98HCRRuWp2DG9srtckGRYZvH2koof6KUy9VSNnar2jkR2tEmev2MaDHiR5roxLct4wtX7LsEqcdj3RcE9SRZ",
  "key23": "37r9tJaurc8Jcf5yx9MBz9FnouUJk3aEhDyo8htWRAGz7PgUnYBJwZQh2MV2D54ioeoHwhAbgQqzjLo9uY5YkWP5",
  "key24": "MNYTL6jRujGxuv6UD83D4GSwGLiPndAShiBtPNvxPegivBwyhWsnbPfAa81TgfzLK4oDeVGNYiwEhCw3NSsZtvF",
  "key25": "wRD3pqq8RYvDsSD2p9uiftggnX6VQu8NRssAFsJUhsLyRBsqAwGe5av48ycPoTap9UvmVFVfr9iDUns51Pd1q9z",
  "key26": "3bkunZVxuN7YwP93GyjxEWdqBxT9RQraQiLDD44k2zxRWpnfiHTMq81Nhj8pRnbVtcBkQ42CD2edsvbKLBR5sSRm",
  "key27": "dEUdHWyEfzpVQr42nSr5anjkKkVRjmeqEWJ5guT62Di1jmKpHQKZCk2GbSXWqdHUNjB6EHWsqSJ6vDhDhVzBCd5",
  "key28": "3dqQG42KXxu6vRgXbWaFoyn6eYYiQRxzQh7s6Gq6YUNhwYBXBHQhm6XnbAxptBvbQDgc6HvXfTYnXed1RvCJW5FT",
  "key29": "31yDBz1mzsx9T3rK836qM7m83kc7AUcQXWvuotWX2FF7mRZnX5adXH7MzmmTCRawAsg3RNi4Lb1C1NqgtHuPFeL1",
  "key30": "2JbF6CDKBRZWx64JuKgG4M33UaSxi9jDorcTdA696GZQW7nooCUm9VFCXKpA8NCbjts3kDTdMW1YEBUZ7g6PjfKA"
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
