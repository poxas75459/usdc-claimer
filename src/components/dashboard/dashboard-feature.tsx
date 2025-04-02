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
    "9HvAFMPoMzULR6x2hbbzQTy3jrmEKKymyhXvTAnrx948EkpQu8vZYnsUc7gmDYHvbFHkwdizL6ovmyXLASZ5peu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MWug26PPWpjW4CXjDPaqFXxCC1ZcqrRTkd7JcmuqAq7QqpgarCUVsW32T4s4PMZFHgZz6mBGznEuVar59TLWvRr",
  "key1": "5NkZGXr66bYtxSuF6PM3qhiMkpmfrpy7VqXsYqDdrS84QQCsuNqs17Xf1A6QCSmGhGGeoCsKZAbhfRoM1916S887",
  "key2": "5Un8FM1voUHqMtsVnyKBoPvw4AorCNPPfHwg8QaTbh5YX7buntSJu1btSqpCPSYpNVK9aooPNhbRg2Fff9rTFNgX",
  "key3": "KBeWBYnz37wt4FQhshxvie1ysU4jRvbpZHAqpKukt5wiBgjBZHoTys1WGoTMtMxxmMBBBpDRLUicHtKqLYzuFxn",
  "key4": "2r5vhDMaxiWSGa1kY13cRNmgwCpXHM3yJwHfWimjuLRMxJPo7CfiSpcMovmjiSddBUvrpP7Ntb7RZt3oyGqCYfQk",
  "key5": "BZD3GYzn7VRBnJ4gdxvg2eHhbVXwKmJFKp9fRN6q2VdURh4c8DCNHazMSNH9SDdFQdnwEKypZDiiLJsi7HLh5gu",
  "key6": "eYJinS9zCsg8iFAQoRomyF4muemgj2nG5owDTGSCZC6xbMJDkmX6tLa9sjsvyuBikgKqrPmB9k7L3bgjZAsoTkX",
  "key7": "26SKDtPKTjtyotN7hiuq7juBAJavAPDx5SQTDNjjGLV8snQL6iKhu7ddWjJ9xTfPVDxu3dgMWYw7GWxDv7XLgaCA",
  "key8": "65iUiKgVmoRp2WMaMbP8dgYBj7JFGcKsZKgk52nrxp8qdaaffqbnXrHiPY2WqskAZdrK7geWYexCgKtniinGAvjg",
  "key9": "2k5h2xszyuM3X1oeyzZBkrQ1tExS68oiPbyxmS5FWyRVru7xmyBT6zP7EaHj3WSWbNYWRrUhrqrBBNexFLdzgLkV",
  "key10": "52btanCKrGucCrdK7RGWe5zp7DMgdjpA8sQ4ALuY7AV6THQtBnkLK5n1kSrf2KHkzF8Dd375Wtu4hGDjyvYWdg15",
  "key11": "LQRdGYzjDfkVwwGjDWkHXS1i1ebTUbCCUVMwgUtZCNw7ZCwks5XYVnjUmvHw6aa4d5Lv7JWhzQx3WNAyLdGssZn",
  "key12": "5f2FZ1BhY1jQ3gvHHRGkriEarVMEuvvPM2SLd13W3uafoF6CPyAL8YzD2kZEguxtJFY7grmXnmxJSxZMppg5YS5g",
  "key13": "2XarEH1xWetGkgRkEetGi5BC9YpjVVBwnN8epJqGJQjA6vGWc3gGdozDEK2AMLJvxYe17qkgJh5FzM9TmYh8XxMR",
  "key14": "ZdusucEU1aJmNMk9fe2Ghum1DpXUWv9j25dAW2GUhbcJ3F6a9yJ463pUGegHJYwfBGw9oK2eUTibR1X8Ly2ZjM1",
  "key15": "2ubErS4G5CLQeDpgpA1Vf7z7PXkRenXto5vudbXzM4xnTC8i95p8jbaPWcZa2LkgWfvT88bdCggTNtw9Gfd9Fxt4",
  "key16": "5JTfnPKk61hccNntyLF4wPebWYFpeztSkQiWk1YXvxHdWK7bXv2oV7X39KNrGfvqcKjDtbv249fj9CU85aZYdyB4",
  "key17": "4DZsQrEhdf8qbJWXvhQKHTJ1Eg3cKmurYm5hCHMV1ykV45BnkyktgtE9H2D5U7oGWQfh2WGzE5V27LzF2iaah4Gk",
  "key18": "N9kmypetM2ri87tAxcfBWjJCQEanKWJoMuVrd9owHmhL2Nmg3SwxTWPxKzxxgVMy3MMWqNaYsZPG8osxBuUFftm",
  "key19": "4ZoMuopBwFct5pBDNym2qAbo3ntahJ7Pr7JUf6qnhjTeRwYF4QcJ3FaXPWEn5RPSZKtCwE2K1L7epyh9o3bgtWWK",
  "key20": "4hK5Lx7vWaLkoQNKVd187Z2CxK4hwfCmvKLvTmzbkVuTYeUAzjFTH266DUvjG8KoNXbM3TttG99vM98GJZZBUDGk",
  "key21": "4bAQAynvN5mGDUdnfPzv9ZPFS66HgpXcg3LhYEhAjuzroZ7rrwAxsZn6fswkomTWPUwtdZ1rbcSSkxbopkQjG7vy",
  "key22": "65i3Kx6hVBMkTfbqJGJkBwSbe6UFwiuXsREhfBVGHUQxBdtkruXrQHMhZfKQY3n8dgrwfTUMQRfs9JHWn1mGXZ5k",
  "key23": "4WRNWbtYRWX2dhQbXG9M2rH9rhjDhFDiZQyzeo5sZAfacAputRJgLL88pR5SqHrbgwggEXCSvs7zL2HgyMpPWECY",
  "key24": "5EAu5TaWc17dYhR2ixZRTTcEGtz8tCNwD94zVRBuyUBxkGtRWQ9EC3L9h8XMQ2CKtY3M1jcaVE6SpVu2zrCmakvq",
  "key25": "5mDEAuD1uWYkRyAxhGrfYuyPknKU2mooFuvDiEizit75nQX8eitCAwyhZU6wwYJyofDLBpX2VtJjBj7RVBdux9PA",
  "key26": "3wWQRbSjPQ2LJ8S387C9dY6sa7v5vsQiCtFYzcfKxmG8V8ejky4jNqmHraUsVhJiFWqJJmrniN5Pi5xt69KRRQfM",
  "key27": "4BR9UBJBUUFjC9hZQ7YzgzzgCLntL37dcfCp6vojPcZyGL8E7rTrpaBhahTPQPiuVWx5F8ryaUxv8rjpDqv9VM4R",
  "key28": "31S1qLFxn1AtD6zWArsAGA9dZErqTcAW5Ux9EJHs7wxYkN2y4Lszxiukqqzv3E1Zvo62WDy6RPTZSsii11tJZHg4",
  "key29": "5GAYrVf4Hssoo75ninWPLhiAPCPshqKcRu4suouoCuGyodbG2nLPSWK798CJnoR3axwXcWXgMtjuXmPNcNuhEhov",
  "key30": "2Yj2bpxAnALoV9pjrvtkj5T4WGCTQfS5AuzXyPt5qz4UHqz5Q9At7k8urLPENZTzp621HXacSnmG5Zo8qQ7gv8wv",
  "key31": "3w5Jqp1g2CuoFv7xjad2DrTko92Emwyp742fXrd8aSDdFpU5abhuvTf9tLjeghQdZPT5PZ5F7PrqoqzcgRjjiywQ",
  "key32": "64Zn829b2U1BWQ8cmYesGRcpnZ36Hz6UZdKLwX7BokwmWnYFMDP7SuXoQnca7ytL9tD4zKi1qMzNLmMMJaz4VWDi",
  "key33": "mdcH1au7gikdCeQ1ENhVas4TgpRnv9HuDU7He84b2Bu6HryvfWpX8qYFpGWNxxahBpM7WRBQ9DGutN1q8zDwEkF",
  "key34": "2JuqKwpfjL2UKkkvMVNxK7xzgu18chDtkhyFsd4VHsDf3VSLgF3n7jy9mt3uud44Uk2VqDUTu6R7id2gJ3NK1sNH",
  "key35": "5cBhm99K9S4n1yRNHAe9Y9pKXAT85ccYtSgKCm2JqfQCZdmckA3uj1CC3KsVbYmpwV3zgFqqihtUxvHBdXDGnujc",
  "key36": "4KCz2QVvj7FndAGw2f1K7s6XQxoSCssFRzP1QCMCF2MSoavhovgZcxX8VS1Bx8mgruCV7f8nvWVmyPpWSd33ABuD",
  "key37": "3efqgP5S8z6onFBF3ji78SxfV9ibg7iVimjoSELeRLudMWSW5cyK4iPbqSDiGN5KPxrQ1ofKFJLgQEkrYWgJEPur",
  "key38": "5snDKKxcCCdgWQNXxz4c8usKPzzUNReKzhdsD85tLwUCQzSYgpuk6yv5A9LdnkrzNd6GQw7ftb2DwRdZsbzxJkd2",
  "key39": "3gNvhwYd4zdsTsSHCAkaTLh1HEM69FHdJfTyn2se6ETRiZBFuV2Gunw9XcmagmdaTqatUSy4cnoPRvupJMB4Kfgk",
  "key40": "5cTYv68Mz1GEDfeWqqzQkPkiEjtAc8c4DwRr4nK1NzNE8FqLi6fwphuteF7niLkShGCeUqX4QdzKTnCYWBQACHFW",
  "key41": "2EkXpSfKRsnysVnfMJSxPc7xS5D25zCF9Wv1gT8X9fyqaeyqU9EdjWRZaCjNy6sZRYAvpooPZM1WooeXeMMboLCN"
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
