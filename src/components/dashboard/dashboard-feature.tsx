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
    "5fs5PkAxtYWMNgcWmHrgjMAgEUedhFwHNEznYbMpCCGVAjT6rBXwSTWUwc1FhUfYo5etbicgTfVEqJiFpsPMmWej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGBKCQ5a6nMZ1nEpkyki8xPy4GkP6CDYv4Q9EBrrDGQiNVBp3n1UK51WXGvwPKWRKFhcaHy9j5NjUnBJSsQkq3a",
  "key1": "39Mzb5vaGcj3YhSUv1TfD5VeS5VFGkbktvLwGPUVfMkgY1xNHWEZajLDNjxcyJJoh718iq6zonQAiSzgi9oyuzqB",
  "key2": "4bfcxkTDri1VweABT1BtKG8NGKXhzfndgYtFSK9URi1N6bG1RezQBNuWw6abdrFsMQuosDZsv4zYh6bAmRBnqQpE",
  "key3": "5UDXsPxmuR4ptnn7LanFeA6FFN5eFanatas8d3fi4E1TGHd1quMTnHWaNmAikRFm5B8EfzPx75PVPt4kvEq1VK89",
  "key4": "2ZCndYJUdkcAhqt5GatFDkxwxgSLpdtUNGQcHBJMWW4LfsDXEkbzvaMbRZifuw6MLikLfUnxd3An6M3FK8RiZeZC",
  "key5": "wiRU1FT3DVmYoBeMsTGCkRNje2VD4NezRyxTGcUd4Xa6WQHrNhUfhN4vGfT8Pqtmy6VMMggk5zNNmWnaG3NYQ3X",
  "key6": "4JpZjZ7ERP5sqpMR51ZqAauDcjAJbDR2xpoFPcdK7CoUq8AKakV2RqFBregprS4gwiEtqWWZcdAK59oragD8FG71",
  "key7": "2DLRxoKAusvWK1pa22HEdRWQ481BADAAGEjYNRtvGBDdLHpxTLtAAmf5LetSjDyaLXeKjfgvhKn97nHMSUhwepNB",
  "key8": "4jyaNvSsNp6ubQ6otvqazg3wFMroiUD8e1ZhbArUJ8jsdWteQdhWLf2jf2YMhgsZ4jDomKMmMGVchedPNTeNPJX5",
  "key9": "63Qj2A5zkYanpTNgqobGorhL5BthEzLsSQskdNSQ3E7uxTCgRMNEcyw4wWPZYmofAiMH5aSqVgUiV9NcPTP5sLd5",
  "key10": "5WRQCeHkMVWxVnUWXixLkrUMk8ZaQJ55eFCXi471S2MGzQRJA4aCspuDKrwzfc9WoXMgQwMJa8uLXuL8yKdRtwQT",
  "key11": "qv86FPMGZbo8qrNFbzg4BfydjVcSbRWtvytd5CvrpbssX4nNMxKVEEQD3GPzJXBS5Ph2oJdtGa4YkPLqj5G3FU1",
  "key12": "39ULF5XLxRZdWsfCcQ8BS4CpvSL1ZBzFQRsVyuzT8oQYZB7vQw9bsdzMSKvwCRqUBSNEpcWHxB93KNcKL3AMsNnt",
  "key13": "5jyoFW4tdJVtci2jDVRA2fvztwATL4n2sZVsBujvRHjsJHVy3SG9nrdvBe7JbCTDPewjotQsxrc5Vh9rXGEKSsKD",
  "key14": "5BFuqwReguedktXSmJEBVpDQTvjB8utqfHibGhMzfko1uy1GooPyhGdb6zVwRhTo4a4qSjxK4sRpeAqJhVEfF7JP",
  "key15": "6Uu2MzkwTYSnCA3VPuw68gupmCsChpJpi9edX3D7qNTFhjHv4gwhuBj8NBDjnMx71oesoHRUaxMeDwNeA7qtAxR",
  "key16": "5nuQBNtq33XNtwLeK9t5QNGDvbVQXVjwgfounGTicVJcXQcxwePmJfSzu2aG8WTGpoMHJsmhZ38XBBAT3tLcFruj",
  "key17": "3ENCUJ6BkqizdY5dJQz8oBLVtJdxmm9a2khLrGZv8XeKuT9upfdyCFYekFjxAMA8U4GMHTgNCwNgmZLuFsoGWUTE",
  "key18": "2nPsxgvNkshRA94goHrfG3WJqqGJfYkViktSDm9WTJA51Bsi8wUs4VHqoMZZ5rdFRpSpZMPfazisHqcXvdLwMgmx",
  "key19": "5B9yXYzsnvWy2TWqSggo6LDG6dJj3BHJN243uvBLLXuxnx5Y1meQwJe2aMoY6ZLgWR5oNySbF8Tf3QAa2aKire3g",
  "key20": "5damViNW6UjK1Df75DuURYRjRKddpUYZG2gpALXxD7PbFwbBNhDnfRWVL1DDAWKFFJYsAAy7yPuz11es3Mq9NcR1",
  "key21": "2xsnbe4aQceEvnNxGrBot4KZGWaCj9UU85V7hFQUkfYt3JuYGLXmCv2wGMuuDtMWvMbvofVzpBZWa7m9JoP3gyQg",
  "key22": "5UvswcHzDHSmYhAk6UXkuvR62uFWBtWaGuCJvnwyc1ou4a5MdbaBVPRkyT9aJQ6ge938X62ofD7pgTFfpow1y9MV",
  "key23": "46bHnwkp1NmLfnkqAApLkAfqKXeNqWHbAxfHSfVRM3Tu6AFkKuQrYR5P5NAEWTNWy23ANuGRmrKAsYMLZqWxU2j8",
  "key24": "2XCJzVgqWFmWzvreBbwBedTACcWbjmcF71WonhK1gYRF9LbXgcnaxdMPUERJ4TwCt7eM7XYx6GaESXnWXAUr8DoB",
  "key25": "5DioESjqfAf6ypdUckmHirrcmL3zikHHW7HcaASuPCSoCDPw4117YfRfLnFd2oSEUjVWZrMbWvW8McEYAHqaqwxN",
  "key26": "fqP2zo6v81SdFD2KraeptgFUnWTFpb6uoraYZAubFX2knTqfV27kQHsgYcDvcuKWYjkeorSmVvwPvBQa8PGe7Zq",
  "key27": "39HPJHch92Ju34QDc5dZUjTjYAMNxo8HFd7Ja73zqKWrpTrfAw57S3L8B8DrQWd6yczrP6pCcY6nDYnnQCnsYh2J",
  "key28": "2bJYYRrQrPpr3EYf4umJpNfRNt77mKJn4jEKa5Xi2un51KrMXaHkchsyXCiVnJfiXVdFNNcoH4ibL5fQPzjeySKg",
  "key29": "4rSn195kNkSsV4g7tjs6EZw2fmadxnxit1b4MgPYS3qy4aJrYdbgDvgSxRRs3NCNAxjVmysYenPQrwfcQ3KaNknm",
  "key30": "cmPYSEyGjkvhKH6jsZf5XKiy9c8QPmWbJKyxBbrqFPM8E6WvhXXCE7pckjTsrbGVRvJrEhXQ8QznqjQZticJUzR",
  "key31": "5ei7J9LNzb57DeAjS3hSYXTguXgVsTFBYZvJcVkmWEHHQ5tHyw3j1WpLd9Q9Se4WEAg6gFXKPDe83QAawVDkAe9a"
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
