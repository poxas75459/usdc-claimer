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
    "4xf3uXSwS2iGPobLxDN96rhfsihemR5LNpEKeQCNRDt6b11vA5rWx7moGNqZsBrhKqKj7snvRuszsfoyTgrzAchg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g2UnyTN1jkrQYjVxj9KLJspciPpsSx9tBcFX9dir7sUm7Cib6QJpwZqu54Dww9ePieTvUMAsCMQ1qfmxDhn5DxC",
  "key1": "3K52gXWEAWsH4XAtwthTXEZYa6r4xVfCMLHZZEioNdtGeu7hxh1f5g8N66uJ1VndndvgrJbuVZCqG9ArbHF47Hxd",
  "key2": "2B1MgoCvxZcoV7U56CtQAxPSELjX6H1gm8GvVmL6nbG1MQLFBpGbgAqiteAge924ETa4VA1Siwt7KYDFVNM1cqTi",
  "key3": "2mSW4ksgTTvTwpJCKQ3rT94W7B3wBjf9Ez2eqGBopyG5x9zHNkVEpp1Fw9zE7hUajChTYqmVRqxDnrFnpNEf4NTh",
  "key4": "5WsFVX3mjmJBQCv8QABbQWbQacezAiFHrH5cc5CU7FbskdJcpw5WS9cBHhQvw5p2DRQLodkicymNiYR63KYQaYXp",
  "key5": "5VFAK4cbJpRG9hfjf4Cca4cbrhq3p5BCBTfDwtfGAfmN7VJin8yF79WY92ir8eQkCeMabsWXmw6G8UTXcq5nzKJr",
  "key6": "4HDqjJ7NzMtKZaPfdL38dsrffK4aG8v27nHWB33wuPVHzn6485kjrMhTcWoFt6RwgbPCDTHE7gdTqYRgzPn4EKiZ",
  "key7": "4ywPQ41FYCnZAnFH9mY6imad88RYmMHzPJ8gveqfdH66vLNmeAP73NxTb2YTjfF6VAae3VkiFPAEBNKP4AcQyu7k",
  "key8": "5D4uCh463Yd5TkBBDNfRVjd3yguijy8MCRAn6DCK9RruweoD6sRQ8JgyeupKdhzB4KVHev2vdvUsXismqn9L6GWH",
  "key9": "3RAD1vF2KKN3Ws56ZJK2Rdymkpn6PjBoJSHfP6tbyJUcVuE32wAMjxTpFDQuYx1h58a3bj5BLsXbz8hnGPK2t7GB",
  "key10": "2zto5NTUrEmxAR5UBM51cUj25txJRixafWJLhFnd7F8zMvmSQiF4oZR23WuZfZtUHSeYe1jpV2cKfi4uxS6U6q12",
  "key11": "Rq78k1dbgp6LjmpKYxN3R2ugiJ6HSsxrutBbvR7q76CTN22Yt1BFeUzPF67R3rRi9gW6ksiegSZAfLPMzjCA9Tm",
  "key12": "4xRv4vTRhBvdWghYzM9Qs59Muz38nmBtLfZNe96G87bS4sM7C3FSLqUknFMyWT7xY8jY4hUzjCnsjUfWqUHAKf3U",
  "key13": "28hoR5cguzy69qYosU9eJw2TxAu3cHKro8XfKKMT9jusT68qsVRgqHnH3aJirMmpQs3bZU1McSmSLH99XPrABNaG",
  "key14": "5iZnTL5LPJ1fKUT65xMtRPdTMWU217cvqbifjAvxPXZpKMCxB7c8jVwPRGuN91qDhwoZrXpr8iueXqVyA7P2CTkR",
  "key15": "2qCfTLqQyYqVKJSZwjdvG8G36eNyKFEhBfrwMZydRZoE5D9ZToc7RxufkgMaqVG2oSUfh8sPz15R5bu9wzDA5otR",
  "key16": "orxuPpKKzQMR9YcxJq6Wjctpki2sRKRaGL2rtV84SfBgQEjLEton7MwoLZiq3ofL9KZYbNa8kGp7GcmtJHVvvtD",
  "key17": "51VGMqEJ1jUFEWxDzuG7dR7niiDsCbnjnjhZcEi1Ruw4CUsci6PFmejLLAkeP1oo9MswUc1XmE8VLfC9v3b6Q8LT",
  "key18": "5TihaNi8x91ZssNoovrGhxJ3ce4zEMQeBHGkWuXLB527harHnrU9Qq5qJaLE4dB3Fhu3MwMAc7aHPYZhRBxedqXg",
  "key19": "4RVs66xWmUhbLvTpzZ9KEn4bCTRX6CuKBuRpXeTak14zij5HiFCbMYX4dMZ3e2XZjYdchadPFepUz2wXbE18V3A",
  "key20": "cTUgMBwpduK2pd9EPqTsaiQ95jvdaGYfvr888ApBPbFGdPG7zVBQSzZYCWPD8e1iaiZR7YA7uALHi5vhC1qVRh9",
  "key21": "dUPtVThp43B1aVpqVFTeMPs22fTPThHdQML6sSCzdShSHCeMtkDcSEFrDw9iQ7w8XEXfX7jEidCvBN7uXZR7Jse",
  "key22": "nt6Feyx7fAwSyxtM6A1v2BZeWWSVsKJYBnKiVehzCk3i2qmTCXuY56xj6PyYdh7yYe947G2TJ4JXvNHJgsFFvnU",
  "key23": "uSBspgdnu6bgHzdj1GiiJ89E9bawPBMfuy736FbSJQcYsGu25BRoHVNZrpqhxPauQctNNJgvhS21RhazrNhomMn",
  "key24": "3D9qD4E41HbYJCM5yL8Rzfa6qwM2tNwp6WD4ZXkhtXmue22JLj9mNLFDakwUmN5veytzpVyo8KotAq4RJmrsiL9K",
  "key25": "4nqXCed3VjDcfpjBufH4onNvuejvAkB9yJwyeqfChAbDkeBP3P7ETyNEcXHGDgmj2vL3LqEoMtAQNZzrQVpiHAJw",
  "key26": "4Yta1KW4nYNN5bw4H9z8nT9LEV16dcmBZMfe1MD3KqkaSxiw4AH3uwNYzTsqA47piJpe6zUjXSfxzRdiTRKtCzDR",
  "key27": "2YcHkhxiDt5T5xiN6nFqgiAqR9FcRLR5gbYcXFTDtzjuGaxBn1MatFCmfkXYy8LuwkDM61U1LVxGdUubL7P35pxf",
  "key28": "43C5xxJzaSxM1fNu4DUTFEVj8VFdMxE4g5vkXVoiaBDkQ6cnaJ3SfaKxA5jjq44Vyjz551SXPwFJ9pSuK4gwied7",
  "key29": "nNhdRgdYTecm9taMsSCcpp8hF9Tah4S3SMb4XrBoSJhK8LFCB1hfJWcM877qwWht6U7XSQUoNUetFtfPoQ6jJwr",
  "key30": "2JezxFh3fVxMFPoNqQLkEp156WdwHWNUEpN38uxuRRNX9aYcV4c7T5c3dyRVNxTisQudvJvuKVeAhdRJmfR7DBHC",
  "key31": "5gEekmo8AoqhH2JTQXGbS4SBYaW1mVeu6X23PUYUsicd1KUDpmG87bQEJfTWXWzds7SZvQNKVJp4wK27Kd2rurJh",
  "key32": "5Kgxdxcc9Rnc77XApsx5QpW4NtkHnWZiDhfJZm81iJKLV99VVAcpBhkY68u8FwAEKfx3cdFaMpoGRijfqvULxT2J",
  "key33": "53SabPbU7ZZELXAit43EJ6wBMiLQR5jCMiHSs1Wo5nGHVi5Fhtws3L17RMpRtzYjoMSaUhxLKB84Gcf1orA6ynWQ",
  "key34": "56xS8EgECbwE5tFyqXr1SKrddMvE4bjSaC6iUoqFbxNQzaF45K4VJyrenmfbwicWNnnMPj44LxkmtxsrhGb5MLjH"
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
