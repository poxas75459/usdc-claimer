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
    "aFUXJHAbUtMFbXuqwQs7TnBnYafwrQC6tJ4FzyH3nJnCiQkejzSLmuEKwNLtywsWk7ejuVEGPCWPomGPxCi9pjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26M3UGXH6pGnBiPi5pm8MWoFkzeVdsKTXeZzEsmaXzMm4EXavE9mxYf6JbtpQ9d747TaYrEbvT9TNhZybBQbgVG7",
  "key1": "28jLWFiXi5waw567K6Ewe7WL7TtqDyR4nbUF19Z8fBz9LKBCPMyNQpBMeoCsPrNSiuJW1Zpz8WrpVrr2Zkcu9wk5",
  "key2": "LwqY5f6tf17jLfb8JmhES5npKJhihbTUB8dSrPbtbd95ztRreu3H9pHSXF9DXXcNoNLRzNVFCm21LguwpjMrnQz",
  "key3": "21fAp8mYCUkFq3Z4gGKvkXnRTjSMoAqdLPGyZyL8FEpo8yy3xut3XWMhekdRKmSAhKoZZsmrVrQzWB5JmpBNEGLH",
  "key4": "4ADL8eRR9NzKR47MsJt4T58WkKvdaqu1LodofREtUSupUogJTrtJEu4dXhQciRzK3Lmes5ZgTLtCxXUhYG3D7JHe",
  "key5": "63fAjUVhWU6HQGhN1oEcV5RGkpR8FFTDU95vLeC1VWGZ8R1nogCadTi888v59ekqbTeLAsdA4vuBRjuEYX94Gyz5",
  "key6": "X6YRgt1qJHrJCDPawWhuRg7j5JhLHvCzTxe3h9GfFifQRd4XMDf91Dt48USdyLjCvB7KDoErKegniWcF2Uuutqd",
  "key7": "5t6mJEPyfrcpnzi1XjzoLqT7jUVCQCyc1im9gdBzK6N3m8KfmgHBcAngVTPJNhhtwMRpFCZ6ckKh4MVPdoCAsAjv",
  "key8": "4EkMBsrbULVdLC3mhz2pqYNGXXPkFhTFLCWEeNYcrwM2yYdWAEoVqSiJyKrYaFremQsLZgVy8QKJSB3cibce8EaX",
  "key9": "4CkyxeKPmhHmd9MHyrG4VXVhVDEkbjrkzJL454TeFQAFrMe4UFbFn39XjPTMVaFbwqgHjDqWA543pvPmCHZG2RkS",
  "key10": "31BEeWb48KBQ7yWYQ8iP8xebj347BxML9ZBDLCipuDouUpf8bg6m5S1psS7PKJ2FeqEYfmCZY7k54rKLYcVxxHsy",
  "key11": "63odMGRhWu7crmTr8bWqPby77A1tZ6uZFfTHDGS3g9rj6a5432Y29PLKv21trG29QxbjjjFPjF978gsJctc9anSb",
  "key12": "528Lni9F7hEWGusD8f8YCQhu67cDvqZs5yFv6jnSTeQNqj73ZYFW2tXGpryqUSAmaNG6c7d2PsfmAHUFxCMtBSdF",
  "key13": "6nc1Ce6v5Jj7Gw2ivGUqK7buDoK9voNfCdtPdoCR1bMopDv3sgdD7tCsvdC8bnxx7jUQoiM9mjWWRed91GTSK6z",
  "key14": "4Jg3bmUQhPvwfWvG4LhGWZ9tpjstWBK8QfHiLJp15NuuATwYN2Y5gQRn7puhrWzNFV2pg8w3Qco6sV8KCu5d8RPz",
  "key15": "3kMhKH83wtsFiGESajukNeQdFwn9KQgdHfM7mujnUBDBgGTsTR2qYZ8aHPsk3i6VF4bsVNuMevv9WaXnAN6xA2L7",
  "key16": "3u28gCdt5k3tAJi59J7GmUjBkoBWYtHdeM68FBkz8ECUvyVhFXDNodc3S1dbByaVE1Bj9MFe5c9smBkFYv8PWn29",
  "key17": "zm7npeRFF27LmYZAoVTzVdySZmFeSvcj77RJbhkLaSmb3JSeFSrGZJuSfyPWFYMHoydQjctHTQS542zCaeXZyS3",
  "key18": "4inMxszbg7bAz7b4JDNbyiej9BFzh3oZ566fhqGKA172qvEHC3K63eQQz6aeVNfh13A63F78qba99egrYXt9fEpv",
  "key19": "5r7MMttYVdSQeGMgA4DACsbwmjdGBB3MGif7CqfNWquTJZGWN3dyB6XaYPFjfKAaVQ9bPXUYBLTyXx2vmzJmy2et",
  "key20": "2G6zGpz6daVmhigwUw3fFQdLNjsr64GLU6grPkEHi9YHw3opsYKfkrzK8uzmdwhH9HRZAQbf8Y6DMa2YZ49Gff7R",
  "key21": "2f8GjQLWXy3FKScsnmbbkdNPSpeG86cC8oaueMWnxEPoXiAbgoAj9kqj1wrcgmuzYNYRaS3yhinYywgJZJNGKC4c",
  "key22": "2qxBezPB8pqkcP4nQzAC7qt76JnqGuJF6h3GTsrYpLEgQUPJLYa5BQKPqFyN8Z3qn9RG7xnAU9JQt5GXSumqFJNV",
  "key23": "24ticrLhT1G8wiUpEEb9ynszVGv4fYF5Ck3DTh6YGcHJs2ZEC4NEh9RPa7rpc64M1hwGkSp2HANHrxCtkAzXRkAD",
  "key24": "pPGYh8YspuXpncMcfjjrG5KLGoRpxSShxdnsnfpY3PkwKU7fHPwrJhhGC3jEeef2Q8uYiPuCMY5ndkkvnckJPQa",
  "key25": "5yi1N1P7AJWXKtoPUXzSuED9cpFHz5xKujrY4HbsXe4BuTNjeLY21P3pxvhqXf861cH7tFQjP6jbcsgfzbFsagHt",
  "key26": "4BabEaJ9eEWdeWEcrjRbJAZs7bVVqNUi388nqhTG9UebCj8MsKxREPTxSMTySzAq2JgzYcK78ZmedNKUBqFGPXMu",
  "key27": "242aSS58TR84ADxScqX1QoYLK2yUKKc34heY6ATNypFJdtUoBLREVU99KKxatPqk61QziBpdtNXiJiXRkvUkBifY",
  "key28": "41tmPSU3di8FUrrCWouypkEcbJxniPXFvni9ZB8L1LqqAFc8cJX698Yax9HvXDLyD4U8w83d4ytYL6akGxJv6wFU"
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
