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
    "4g3KXyf4nVE4W8xZGPGqjHvBQqVtC8wGKJdr6iNhFEjZZvW58XQphEoP5FVZhjLLsyTqBptQJo1fCqzcx9ny7q5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39SqGDDF3KGkfbwxD9F9xi7DJWKmrv2KwdZdzC9ch1qNiHA3BMFe1PkbMd2DoPzz9hsgBQ758dMQmscb49iZ6rjm",
  "key1": "4u7yGkwX92raFMjAnpzPKirDTYyyi6UWWJdNX5WwMmhtbHm25812xWeVFo36xSEBCMTsPFpr94PzzgC9WcAQ81px",
  "key2": "4m3UZ6qWNq62Jm7yFTYk4YZ5NMEq95rZovqZXqkNgYAieZWNE7XzVVceqy9TK9cQWTjyrBbWrVkCA2s3FcTaDkwL",
  "key3": "3cSQoKLFemtAhT8EsVDP8Najr8XfCf2NhJgqfbxUM9iVowUt8nuezx9r9ujwVK2R6NwRMBLg8G8FT32gXBp8oftS",
  "key4": "4MkCUFWyLRJxKSvfr541WaioEh5DYwTXfUYCM47NwrdyErT7qYqchxfNz2QUnvSL7pBjfkr6MMzjj8FGvYZrpcUR",
  "key5": "2JwMymv2VayYZdkTQ8TkaFFNvzaS1sCLRKgx6UXdbQFwgvAoCTttyvrEr7V8NP5suZo8YBbdeTatrtWqApeZv1XJ",
  "key6": "4Q8gKhvmfLBsZPg9vnAQQzCCSfiMyxxsaFhmdeE46HF8bwgA66eXppnKoYYc55tzw5bJyrnavwdRkqS4x6QdH9iW",
  "key7": "2VBcrv6Hw3REFDr7qao2wrtEwQ8zWyE1rWzLXibeu1fTaG46Ah3XquHfb8WFPN1VpAnh7vL94HunXXswJ8Uk8yLv",
  "key8": "58X7dygHT6A5iMhCfUXRrjfafa1iAm9tYR1FBsABT8Ya9BnzPMw5hG4PqYjrjaWuPzJY9VtmvKMvMxaVtFgNsfEM",
  "key9": "2CHTJHGD1FbD9P8ZTPEpbru23ZqdKo34VZMoNha1K2Gfb6J8wr6SRuCxzNjvDvGZKypXV5k4g6j1EfEmpXnKX3RZ",
  "key10": "NKBmy6pfJ6VQG6GDmsfqh2SkYZ9GH7t3NMWy6swdLDxakCy9mxJXct4rZ8BFi2wW6wx1maS4odJxR4JT48smDqz",
  "key11": "5b2L1xkMQDk82b8BcNDYiSEmcRXpdkkkQAsFrr3rxqGtond6vnVoJ9t7AeM4g5WyTVfJi2dyYjuA9Wru5GzejJUx",
  "key12": "4QF6RUSgMKHDFKR3jk7LMSvXXKrmbJZBPiSKT5fmwi1yanDQGzBzrqKK3kYi4cTmpLrohCQ5a3q5JfMsdKQ9HT7q",
  "key13": "5saLeQoZLm1YQ95G33bGR6GRQQZqLLyUxkJtdNwvQt4v6vvKeUHxgPwNdrqnu8ZpowhS9h8rFkVZeQ9gHo5xBdaJ",
  "key14": "4HmC8qpCu3z99YScneR7nSHkg8VpXZMWGaUceK3WN7XZ7FwFfjgSpe1rt5MPcYkuSbq1E8rmWeg4B8ux3p87xRjr",
  "key15": "5BpseyR8otghkCXhoFVQ8nNjqxyayTkCypMm93stfs7vYxEY8U8YdWWBqo7Jv9Cm6Qhgse9e24XXBFwhve2h9qob",
  "key16": "NfRSULvcC8cgXDkKym6hCpj2yVBUEukjxwFv8wH5b5NtiG9HNbafYKn5jeKwV1j8BFf44GkR2wAvCxYP94K4mQU",
  "key17": "3a9kCVSJEygLmYjAUDwjCjgPU7BPtKEXFTfETkE9ghQPCKT5wkbhNiQxRjygtnWvSPSqXLiew1BsCxibbrX5qJX5",
  "key18": "59cFTxEgXWv6rPG3CBT68SWmebceonQEbHtsXTRsWK9KUEMk4wTAnQNHDcWWVrYsMJCh2dZSozcYvmGTVfeo1hQr",
  "key19": "51ivVfye7cFZtNjqJ8Ef5JmVWjW32dA6ER8aA8MJdwrEPzacJS1jhzMjwWxPvY53y7WrHSTJTYyt37TfSyEJYdu9",
  "key20": "5yqw6cfWFwvhLJiJfsarrUTfVEtBcEr9ER3NF2F47txvsJx44mTMvmXQaBmWbs97YpDF98caKHq5Tpi5PVmPbBg2",
  "key21": "5pyF2bjztsXhWTRcjekwoMxuPPhFJhFXXabxnE5Zj9ehAkTYYEKJahWKxEeQmCtH482DF3JU7i9AS6LwAAeoQDA5",
  "key22": "46DsxmXvvL9m2RG3BKT7tgrHqk852AbTgEc88ffeoQoyRWRpPTKHiRDUE8JmnNbtiyesVHQkWhc6SYsB3zWENNA3",
  "key23": "2zGUk9uAkzWKW8CmbacquZnkKGPmrdcBpU1iaCriBWYtXuRuRmWfQEjvD4iu9Yut5kXHEETYe4Eg4Qy3UUX529ji",
  "key24": "3G3zfo8oVWuBBi5wuKcqBJdHfrfSNbBVG86MYqaEQHtZqxcXABdETYb4rdS5Hga4UehAijUZBzCkD5b5Gd8ENREY",
  "key25": "3zCpGcHZcpfE51nFZRCkpoZ76B7Zs8kRTi3n6L6HkYaJMbPwo5xQdvE9wb3WnsfQYQhoJUNm2zpQqq3isZRCZ2K8",
  "key26": "3p4RXcZU72Cy8KNvr4MovzanKziwSFef4D789AUVcR2Dwq8gVyvwyb8FsXejcjubLUYGofQiFeMXakmTcDUkkgNV",
  "key27": "67NbYhRNsrt6vdV3JabFznY3uBaGTNGcBvysWFeCHCwFxfMtQU8ALp6UxLHZcDtVQA9qMuscQf39twx7XDQMsySM",
  "key28": "1UYwsZAcVyYdNYDuWM9ExSYzKGE1GBdz11h4BRBT3dg2z7hoKxc4UhPMWmPTbv4sVukmnjZQDD5wwQXCiNWd86o",
  "key29": "4biWSY4SrxPt44kkCZPLGPVF57WNoEDzyRW6owyrWQpGW3AmGwZWZ3nZL9LfgscLBPvUoEA5PMhWN38tzPMivh94"
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
