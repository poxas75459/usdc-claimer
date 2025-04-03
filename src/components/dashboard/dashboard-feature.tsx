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
    "3aMK3Y51p2eeHS9bi1WtWSKViBDKuhaEfvP53CMm1XWJmd85FUmpFozWaZ44kKr6gAmjwwLU85ccfHgMB5xyTMyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581t35KzdqcWLiH1gQSdCZAryUjm4SevX8BFWRjNASDJGuKjfuXUhq5iDGU1kay49E4gNQj92j92YF5Eb6rmYGX3",
  "key1": "Fw3vQ3v7RDEfSRGMLZnpnmj6DVEASBaJMXaJ8TqSxAwMaChU32kUkTsoJYW1YcNeLdEuNkWUwqvhanU6dTPuw9L",
  "key2": "S6jSL3c3ybWNcYVCzzTvnpd4UbciLFwCvFUFjNhtivCvBE4xY68wCHxiikmknow4DJzK8d5wiAXhbNv3Rdbhn7j",
  "key3": "53q3QbR2QqMCpz2KhCC5iQeMyQWbfQeqVX6HRaz9XoUs8FvMnVSLwsasWEWyy3zcpPSeBdHsizJqnmsvuktpLMhU",
  "key4": "2emXhwXijWMbWqukTbrdiRuu4SHLxkHsKJVWMbh7DrQftfNqbJoYK5531FapgBFBwt4gzwtZM9ouj4NHnUsGXUjV",
  "key5": "9mfiS6Hrm28nMGuBkisA4uUQgcevyTM49qRjpLFZfWL32ZGf6TGtpBF6NzLztLzVT5UY8NrBvNUp6kPtLL4Gnin",
  "key6": "3C6D3BX5r6HvoAbsYvsfvS9uN4vXgTYV257siTZqi5PXtNBc7WBRwBDHhviNXcHrjGNrfFxZDw18JfcfLKSdzuTL",
  "key7": "3FUtxYjvj7aZGB82DZdEkNeLS1zStLBd9u9EdVAzZKtfHa7rhuDLzvp9abA1hT9rYXMbfHowBgPwiJayDhGEFPnk",
  "key8": "5mLrQs1PoZfsckr6Nj2QkXtYBt7xuche9ynDftFww2fvF7FfpPFvTSyBuvNjSq55VkqL8x56oc2jroF61Cnh5FpQ",
  "key9": "2mjhvcjfAV1w2u2s4uVBnAGGAenhjqvdMKQmRRey1c9AE9fiXt2bSNcNce8iCtkRihCW8Kj2DTq99xqT2LQwjwHD",
  "key10": "2XHpUeJYCchVkxLZAiQRmhtnWUW6obmgeEY8AhoRT6FRadFf3vVBkWfx9ArqDeeGqfAcshcuosCeJ9cWc2YFgUbY",
  "key11": "NRe17YEjQ9WDHtTCb2mc78SxDwdGCdLVM78YsBg4ZgdycVKgrWX3GtF4qQHvvZtY3eskkcHkcBaAyGoSJVAp7gk",
  "key12": "2dgeN7Vxt6t6vWhJnBfiN3QzDDw6m1tU8T4T93bdTz3PRa6yyjxAi2ey9Yv1opWxxk6oekHNFfYL8gcdegmof38d",
  "key13": "5UfxXebc3CjyNWGZZdP93PDRTWACsSfTApRpDYpnx6J2h53LkwAAbq5CCKk2FqnbZUtmEThPGtiYT8szAD9vAHtd",
  "key14": "51hQtXpMR6CVPv6CRcNdJTdHhPZan43R8BqASKTYJ7imYVRVfEGNicpMnufjsyJBxSuYdSezMbgpwNmbMrGr69Um",
  "key15": "4GTDFTLqui4UQ3QFcN7GHZAjFgGfPXUcSRZiK6JgiNhDd3RaJ7wTSKLRqq9BZmEY5g6edeHb4RGLdjroCo6YNJow",
  "key16": "3F43SBPfGUbRzXv3RKDtq2etzbDzEGRdThvFr9h9tCsDSGoKP2hUXrfqewiTpEUP9yiadV3w1frgCtBaMWRWwFKP",
  "key17": "FuKiNvNXQ4yT4wNFd85oqpKc3K4omKw2aKoWnCKFfDVE9wzR2w8DYCPpWarPS6YDrPxfu6VE2doqe4NywM2yvQZ",
  "key18": "3kDffmgWiS2KJEz9nRdSUe9oexhyJjMBYdRw5RqpwvL2iLbNcPVu1hYJMLXmMxgW1ErhRotvd3QwKBJQgcX8Ywm2",
  "key19": "52zNEbmkREPrhrTLiw8Rmwz9rc9uUTHZWdb7DXMJNC4H91cmk7yA1TzaaiMGJ3XFZw7JVGhoMENy4BXsXtfiRDkY",
  "key20": "4BzGJouuV2Zom2Mc4XN2m61FZR77H1WG3fp58R3y5MzEbcVKFPZ7GMA25SS9VAzZ2ZoAijubDjemHFcqcW4iRTvU",
  "key21": "4hXYQGFZnXRFvA9dGveGkSaus4L5kiqMHuxcriwqSPXBCWKHAxyS97gDDCAaN2St4dRVxsBvYFru6Hezsy9fvyLL",
  "key22": "gEdCQZR1qWRpy2sHhdrjmvEsMkC5W6SEAG8NdUW4X4hFShdNn5W4LxayfRCapt7qKaAjnzfu3jFV91Zw6RUUJoc",
  "key23": "3iavEJJ8ZD3Fui6b4c1oQbX4PQqo43dYqg6D9o6D37ECZWRgVhWEYDv4Bayv2SWCzwPUd4jRiQ1YC5hx6HdxErmE",
  "key24": "67mBkz5phpUmRvoLYc6TAFYrDNZE3cjkfhv9GZxHtrdoycs5JzVLXgzjKxyT8qKV8YWnWzUEDL6MKikGuHPDSLfu",
  "key25": "2vTgJ6h8Wz1Y62m61UfjTN3NPgXstnsGsozptvgfKQuQuPDv8dszML8C3KHJMfs1f2hEsczCA2DtjizAENP1oCSa",
  "key26": "5e3tiQmnzbmSTQ5WvSTdSF8LjpbsKXWEkqMGLuAHaYEfd3SpCE1AML9urvdAWcKLpKwPNitM6jrdTUUjbevgyHX6",
  "key27": "4PEH9HvhzJ5mvZDPjTtSM6fGJukPyzTsJF9UFEZsJPZ4Seqqn76UJexniSQ5HYZocVnADBQbGYKnrbJRgbXVxsZf",
  "key28": "2krpok67XaMhwV5H6kpGTr9kFaP47rbuL91hcbPFzrdHxv6hSrke77QHnbtG42W9pVov5miuRMzPNwEdg1otY7oC",
  "key29": "2aLuNrGKPX6jYmmiaR7WJu9i1PpkgPNtincdBBm9z8EBbWvZoKbZ5TaXTryx5VmVsvBynBQ3TpKrtrKEkuibA9o7",
  "key30": "4pzkb1krcRHnta7myjZJHvaMirz8RiHSVztXGbnnfbKNP7wGc6P3dVaxXfdXi3FGh1WeKmZ78yXzMhv1Div3gjWK",
  "key31": "2MZmroztLdSBUP14uYq6q3MsoqqCNZA7enNWQv6Yark6SSgyEMoaSBJ8tCuapqumehXDVe93vMQKvi23idKJNcqU"
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
