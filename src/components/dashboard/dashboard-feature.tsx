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
    "QZWoRpLuirCMth9VvQ5cgs5HXRYUVmbTuSeERVA8uikiixcsL3pN2byq65UgtM162ehqKAg4b8L93TM4uPx73Fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EymFNhXKUKWA1qRuCWG3TeaVrrmodhypGLn9GonFdtKbMKCzECvSZkMeJAwPAFwgwx9FLVRxxHA1SyQeSZkGyzj",
  "key1": "35goathWAW6DEbYyK3tbATUo4MeUcGG8UQ6mXtWDxRVdTDS58RrLeFMyGvNU2DwtEx6a2jM6Bp4VKxYbaixAviSf",
  "key2": "5S4o9nSUU5XFXbkt9FxnvBZPVVkHZHxpifVZhTFCsxeZnZ7toRiyPEnuw12cJEEz3ndoPfAzCxjLHJUhegEuxqgr",
  "key3": "5QyXAc2Mmu78P9BJB83pjb7ikyrfyboa4WaFqXsWjvm6kvbMbBGUTNpPATw9ErXvvkoQtXrEkgUybfcwJWRg433h",
  "key4": "Gbew2djkQZHdQzKEnSmMhr3bDuaxAe9QRrfkN15bgnGSaVr1WgPjqxFWp9Zr1nCfJDzytN7cdKbfhyiMoN18Ycq",
  "key5": "5hygnqwDG1qK4TPSAXc78x6ZJ9JGao74gn77pxAjCreTnE6jut9cqdre1VrgeRchFoFQNAmjXUgjCM3L6ENTn2sx",
  "key6": "2MeWT2fHCGZBPrqKpb7DGRnAe2x5VGxLfdvQ3E4TMGUHU3qjdd9a6G2CoR2FMz6NM8zRCKEGRD3nkUR3vh55ogGZ",
  "key7": "3QkafGZ6EqwjDmzEPn9NrEEcbXsXZ2TBSd7N5eiwyCHNSvZvbgtsPj3bGj6CL2EJDaVshAFq2VVyasuZqDxNkMGo",
  "key8": "2K7Xdhb6u3FKCF5tWReiBoo6V87HPmfX6Dg4fsvk1H4a6VoRFhg5UjmgLbALKca9gWrnMsn3ZeGpL5XVtW5QP5ha",
  "key9": "4rCZsx4juvErzDwB2bRP29y5gmyDwiTQXoF4rQZgjaQUKWjpQC6C8BAxjbRydBWCujgjbz2cBCjhYsgUzA2jB4xA",
  "key10": "4tq3Sg2ZrMG8zCDUFMMmdvGARgTq4VjCt7XpAJuPVTRQnNB1WpPuixB6HeA7TbUH4Ycajqo1iN7utrKnwKtR3cZ8",
  "key11": "5Jz7cragNr3DQZRtqopNa7igiPwoxboxDb8rQxxPfbk7XBqNDnwXgVyUpW4vsruk5Szw1gVZFZ1sLdN5YXhka448",
  "key12": "2Aboo8f7wwGh2nVLhboh6dDcCVB3YPF5Do4AgsxoHomrzngoGXNymmFDnikFRVGMPXxEsX1ErhtANAowbthH4nWK",
  "key13": "3m9qQoy3AkhrxVS6RCqzFa9jCUGCthXoTq8TV7p8v2cdAwKoWrQ7vHkxv2U1WX9iu3TxPikgNMFWUtUEDdpnazaS",
  "key14": "29v8yk2aEMxmYF5Rt4wkUYqpqbUPYF4aLs2VZmaK2o7J2HvTghZnzc965gtCvmnxmrfz75paukmypNSdGH7dSKeE",
  "key15": "2qDoeWhik6XnEzscN1xvCeogqw6FW96a2Ra3ji1HjnAjgyxwcqiHERMigPh9RJRPZu8epts8ktBbQ9wb6rbFFXQn",
  "key16": "3GNWDJPXm6SamGrXJyQrfe1qTziScu6pk57pjAWXYmkdJweZk52r4T7EkYUPwYubhdcffNBg9UfQ2B3mTjTEhZxR",
  "key17": "5Wri2hZaf3C48aHSDL36VVTjyZtzn8J3nuvfppTPuw3GzVPH1zZBBGzqbY23oeMKx9bHmBznYhkFfKXAhGqJiWV2",
  "key18": "2j9AnWdsHT8mAZ3K9h76d91NMvCQW6GgHMqg48nKdgbEia69Zcxm3pWamzYsniweFomk6BDJSiGkvxYJbdsaQKkC",
  "key19": "7LniTorBqXN4CmkSTKoB3niWVHrzxgEEYuVYrvPjbw3bNDX3GK1rsmx2tU3LpCbYgd7XWT38imAhjZzzo5v6arF",
  "key20": "fPzzW2WnHDGDo9YXdd8cggS1ArKsfwikBsWA5Ysp3zzEy4VZdfShb5jxyprvmobB9MoS4QSqk5yNnfk7AJrJJgE",
  "key21": "5SKJmiQk2NDU3FSd6q1fqrsCkxfyTvkw563f1wzpu3rHTkJHUDUbEQzyCmps7Skp1zi3btXeFypB5DYtMZSeJ1cA",
  "key22": "5Z8VB4if34W9JWsvSF6jfX7UPjkMEQdhd44u8MJCzzWZCmDp3HgR4yzAkyLxGBREdJzBKaiMRuYzCdyVVX8fhwFp",
  "key23": "2xVfHjJqmwDFLwMLkNkh2MYLYp3M8cxWYe7Zn4Xe98bnrDBtu2nrXDT9wvgKuQBuF5Eai2RBnYoPQ6AJRBEwWmb6",
  "key24": "5yEcxryD6EXD4fUbNTHoyebftYZ56wEym4Z2q6GR1XadpfbQB1UryuGVqk8WX2AJUVvf22mHZZgYTaEMLbZBB4vW",
  "key25": "2nfuvNDCiN6QBgZfmH5339BrFKAfzGHBemsDN2hMyNdt7BUQXFVQFyX7FCbn3svDTN8wLjFf8sMsxgRU8dNqvTBr",
  "key26": "58EUUZ2mw6ewencP7GgEEraPQTNPazaZBhPVQLEChAmQZ4FgYkSPytkSF6RZgy7NtQupyp3UnGyH87ke2LpCfUPk",
  "key27": "4sgdsBnmDn1Zbm31vDKXKFhLrxGzM6gg2nBwdZ1PBW67EfBo7Cm3aE9UMsko4zoZpG1fGhC6QNz13pt7ciwpWYWE",
  "key28": "25nQFEFgwRmPbriEkKxv8WtqvAtadcfW91N3angXGxfwikyhYQG1tPJQtFfRzusQdKhDF6aCemHxEBD6H5XLfR2S",
  "key29": "4vqAvFvHxUeLyZ9hQkF2e4SdMwLmyWADzijAwM2sL7TRoVgDX9KjjUg4G7m5kFFv1rJscheusz8LDNCQ1nUXo6Hn"
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
