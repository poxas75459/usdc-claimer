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
    "5yYT2uhvkKxkrqYBnwBqC1oLVtWHmTvt3nWiRc4sj9zJyRHsxzetkNacAv1T6oL4XQqwy2pd6qnTSMCYpfe2uSGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RodPKFjN5KeADQYDJdwazSRjD6yDtbjkUD2yiW2UEijQCQadyMxMp9PfXGnZd1fRmGEG3GoCbqRx5uJLQgsATG7",
  "key1": "4prck29QqEAgm4gAq1H9UHAGXMSwdN7MSBVCbCyAvHrkQsiat5twjPD7mf8QceJKrPvdgRuAFGWxNECsXavpJTmy",
  "key2": "2x2S4VDFdUWJwPXmpmTNSQL1ufNu5sK8WTLE6uPtrCg8nJiSGw787cHdQwzHUfNrsUmdVqVXG3uS1MrGUCa6XmeL",
  "key3": "4foApufkYa1zhpDw7sNCKDfM8dDfu5jnZwRyYJibdSfZ1UvKeXXGJt5k6yZGVXFoWrrZKPArB1zuPGrpDz3KPtNc",
  "key4": "r9UhWgyoo7xS2bjf8g8hbr3484HVZdH1VXhaFLt8sbS93KiNZAYQdgCRHVnYuQDtSuW6B3BMspxDx4FXYzo1i35",
  "key5": "4PyRYazya88LU3gqqq2mUgEXkTiDDa73jNDGwsjButWpwmGAutDB9xcgia8wub2v838H5yifgF1YdTaQ4xK9tnME",
  "key6": "2CXj8ZM5aZFo1iz79xvNdjxuNmdrGNRhS3eNrW5e42bfW1HvWXXWakwhGqvFkaTt3uDkuHMZrv9DyN1xHh93me65",
  "key7": "5C5wZKpRV4WFgvW6VKyUC77R8H43GMRGVrWfEUAvnGConJzuhpQNqbMKQ5hQQyTgZKMGzxFedex3QKS85z8YeEeY",
  "key8": "5tMnfJVSSmgC6AixYKfSVNDYZ1KfxNdxoXvw2r1sqXhkJ64ENampYLyvyTJRJwc4Fwj4j2pu37orCLgcdqJ49pBf",
  "key9": "32JjCQEHSWGf8xmiZxsWn3J5m8MiByAaHLaW4Fgm1Bxv7HnP9wbvcdz7KDu4eGqS45C5EFbK19Bpnni47XdGdJV9",
  "key10": "4CzwRYiKRFQBNDTsXa338G96FYLPyBbbgLK2PXHwZRaGTDEx6dnhVEyKpvtq1cf5ZCBRH7RkhHyqWttH1FeGGurw",
  "key11": "a2VKtXUyz5fH4Ld7mGCwX3QV3s4fL5EVYWyhKk7uo4SDx4GGtyabG68kbpzFEmCAaPWLH8cRZNZLUqhWRp5Ta9s",
  "key12": "123YwKBxQMsku2bpHyXi7K8zSFNG4p25ZigMLih61j1WBwHFPnseVBzEaB2e4SUBJDQFTs9SU6PvMj5uob8yhAGJ",
  "key13": "3PkTXhBrzwq8LRzsPD1kfnbfwz1azZH4mdWoTMPJ7vzmdrBJPMeYs5Vf1h2o9Ryx5cny2DWhAbfW1GLYTnvaZYj3",
  "key14": "3f63seCXsLQirdqWK69HR7qihRwAm8bNbWuzhRamfwtMMD3oA1CQjs4j51i3qVskKqef7rp8wLbkn1gBnsXSXBYX",
  "key15": "4KorfZfYgkD8jKL3WcVzmnywgwbxoEcP4fQDLSJ1uCCAB7KQrgp4QU7t6QDrSyFiB5mPnoUjKrw2UHhNK661egue",
  "key16": "Y5VkMKN5LQp2WRK4njzUEuVaJeZhgvsdBTMAXGNmnoR3F9fVJwmzGvMjrd6jeWRP2NsyKBMGGdQCmZCKHpXQ8TE",
  "key17": "SuGW4ytmVncWxUPgkcVsS3qzSPaTyHa6TdhHCpgLngTvzH5y8NERPZX1QuFcbVdsjk6zXurnozqkcEqtLmoUt8k",
  "key18": "L1DjPABxgFgzNmN3KN4vFytE9mzaVa4XgezvfbcnfMmTUAFfavsK9MWT5ziNLNJsWz39of9QuY4agYNAX7xuQYX",
  "key19": "2z6YzkNki44uX7QwZtMiMJcc25GZbtkQmgsGHnwsftDhAs8rZV9MMCyu6nSnvozhv6ycjFrDk1dcD31WaVK3edEC",
  "key20": "4V22JUmvWdx22GbYeGGJHtf43vr18AywVvUNXbComNvGVgvzXt4LauGXLqeNz51Mpve5Sjv2q8meTCXkE8S1wWZy",
  "key21": "5Sqjhr7QHGdu4UU8nm5xBsNY7qENEBGaMQcR2rNCC3NKbhLuEDtmC3VXRKjhD4YkkL9vjaRcyy1kwWED3HCyZD7T",
  "key22": "38zmYQYF2BMdhnyk4EAry6C4PzaW8Qg8TJXcrfmD2STN7fFXzPTBaopzrENRhU72LjSDeXTwiWnCWaWrLWoGei3g",
  "key23": "5oUcQAuysCJG3bBs35Rh7FM5hN6UMmTQ9mpx1yqHU5jRJG33ubXsnUkhrjHJPZ5z15zJNifAdw2QzMawfr4fWB3i",
  "key24": "49BFPG68JEEmDpmk8nt8jc7xnPvJMh8v9m8jYSXuMnXJT7eYZkL8gKKX8FaK61K3FiUyAxvuZpaY7iSVqzNuyBpD",
  "key25": "52o5mz5esK49ybdC5Ra6iW2PY6bXZYjd9wx2DSwYCmsstjRDCQyFdMv6TwNNrurTQpWygLVX7Hrj1fTHymeTtH71",
  "key26": "5vFE3U97DUTKSusZ49JGVryemwYe2NDj1aYmxmmQ3JDrXbXXQiq8Ly1QV71uvjDZHAFdC2NCLMyTcAZEXh9V1VeB"
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
