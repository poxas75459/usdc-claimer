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
    "N1H9AEPMjeNySTMRx23eu1zP6fzYwH38HnX1bRYT1fJDEMcWo7PT1DacN23mgga53qWknbb2WkyStinoSrVVDyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUZrXxxV4thfnYCK6dPcoqBDjMAn8oXfMMmi1JRMQ9D1a7SqrY5LmERhYJPDbMDhZ9yJvLBBWHYw6bC71ihi7CQ",
  "key1": "4rJj2xLfTGvsMP716wA64RV6XgyTiDw8RJz5FeY72LDn834EE9Mr5VF4vCcSqWBKpvpF8RKx3DRW5gMPTQkad1nQ",
  "key2": "2kgmxbsUVfjR4DEJssY9APM9iFQueXRUTEXyCG2H99wQMMAgEN626DauJ9WnmRPLskfSfVdrtEmETi1LDipTfMYp",
  "key3": "3h7AbuK4zvWV1nj8SpGq2g2gHUQWeGDHCPuozyQSPhJwAXs8MDCoKSqP14AC1cSnZ3GH7hqt9yaQE3QgJ9kjhFw2",
  "key4": "32BhtUrw2W5Xma6Uu6Ut5PDqZn66WEjy9ZTszPZ2v4LnPVM1K3EUrVfvMXbAxXi4aJh3qt1dGssF1ZAA7DZWaE3C",
  "key5": "5hAr4a9MnCK63MgFftxayVjQJPHMpcSyBFtgXPXFwLv52zHGR5xjjTaNfqVHviP4WoLr4DquYyTJdGSxbEc6Lfqo",
  "key6": "YhrmLejNqqaYVipocwcfETxtL6YMALPqjQ5PMgsL6Pp3STW2M6iR7iXgz4Tu8ENFrmoiccHbkadisWD4oweSU3X",
  "key7": "g7uFFyGSje4vP3Ut1BKSF7DcDVJfAY9vSVKzANuUwwv6qFYTbNMjEZWnbZ7XZqG9m89wNQTZVpb3NbZyfojuYms",
  "key8": "3HtTurNdyF1gsbGm6f4YPj9ZdhPVjdtdkv3MGPwa19pHoe9hDT2ZMq1ACbsUUCZ8RTjY76KGNaPj1U5Ra5bMDv2b",
  "key9": "3EQQnDv6gBCZKnH3wHXNNnniRJGfd1tDEcGDDra8Mix8vWA3r4ct9eCXQEjv8xiHt7f6qJYxkQZ3NEbHizzbEJhN",
  "key10": "3jZnmwWYDEmdMTogDkFELNEXcVxXmZPhUXX7NwxkxEmbL9fwG37k8yaFMAYZYJXQPKhghmQtZ2V2e5p9XLGZBi2E",
  "key11": "5CPmgkF7rypMtrxMfi1SmGTS8c3UpW8XuUJzZT7nJXiDb7xg4QSeTvp51W1YEizgGH9GYbHeCBMhb3v98BL4Zs5q",
  "key12": "4rD8yYWfa5qMXPFP4LWLYcaQ2J4mGQUkawF9jAtaEzwybxnmzeozc3DcA3K1jA7cVf2C7iP827bHnN3mdeA8LPJt",
  "key13": "3gonB8HLA3H8WZuEzGmxMambavmzZyw8drNztLJbnDc56F7SNDd6B8rkfKsfnpPyo79NwuBS9jL2EsmVZs3d7bAX",
  "key14": "2cpDUQvwDQf1p5zRrLNjnTRLnA3PPMh6VYJpBgiBF3R5CQNNXNSQawSoLx2zqrfr84WM7ntht1C5qEZDXHVgjaj7",
  "key15": "5ZY3TaYMJyyA3ir5HCdrh9ckZq7LumBJrg8691yojrhrfxb4doJiqo6AFmPE7BtD8TMH5WADtNa1qBMDrJNvfAxR",
  "key16": "62pkbrvxmFgrk8tgia8DUBCMVkAxMEcot5Z6Yi6MZquePxzDNY6iJLcsBaMUhGP93QtoXwbZXJ8bjg6uJ8BndLUH",
  "key17": "n2Q2mKg2h2nE3YHtEuQZbZNNW1ZxLji59BooKPgSM8PgfedFUJMTeUGSmpR1q2pKtGxfPLHMdkmaQd4ZVU6qp12",
  "key18": "5cowZJvuwKZkbLqN4evynvia29r1fVTBTU457LGBCwdk7dXt8ebg6TJEGLFUZD6S9aTXLBeGmnVC8RqZ6HoLTaNs",
  "key19": "xwayYUh8hdMKdnA2guv25FoznKLbVWJahTbrxphy39W4YWzZyX9k2VsEh7sjJYou8oFBsbwHNaxLaPzSRfdut77",
  "key20": "sgyJvjuS72CmiLnezrsgMrWfKK3dWdp4fMbzxX7vM6cjQJV2KZNxhobgDZUz5CLzNSVxkrRkg4oBeoxuzuArdLz",
  "key21": "542VszxnbCdrdRcXiCjQdbXupYyBHgHekc8xk9YaG5WqhkvxtYEdkQygUJ3VCGxLFiujL7pqqCLWuzdsFQTNsur1",
  "key22": "3F5KtYMKavVDNYzm7gENa1yy8oDiJqd1uF8GTUiM4RRJRkgfA2ivcPyEz7bbEKLoS8LYNaKUjJ6So9RHXaeZxyb7",
  "key23": "hvFqjCpZhbEKUA2Tx1pGK4Tm6aMcxvN31WVLPx7gg3dVjDpKqS6iYgima9FmAZXjKCskKv2MvM2PSZLRW8FkHp8",
  "key24": "4L6ALm6s1f4HHDSPCdKWFM2ANqmaXtJj33u17jJcZLz2J9SeZqj3gVsh4y1f5GwyiX5EqqhWAdyqmvwnhgFyUnDb",
  "key25": "tqDXrqvDqmHsTJCSScyjtRpgNxpdu8TzsNpTMVqPT8Hif3i9taZVXcAZagspds7taDfohCmmY1GPdcngRKpTgoW",
  "key26": "rqpT4Rg1JtU27cgRhpQ1qeT1nfJradeeYsaJzGES96W8HPg1uGS2kfgVnJ4YUoitUHUCRikupWmZWJR6d6Nd1qS",
  "key27": "2XTrefsBgNXuFw3U7zPVnDWXwrmqW7Q9cUwVLE17dAsbWv6TpEtjXXikMGY3ztW1k57jGRoBLqHzvLMnhZ7at6QS",
  "key28": "3dRcorDbraZG6QqyuqqJG83KvbDgTvLrXMi2zcgsZPWDcXPoDUWGaPkqT7nqZEwFQdr2brJKBe7EUfm6cXezLt4p",
  "key29": "41ce6ahSZKWLJYA5NNRE2wzio1c2SioZhu2EoYriLpH8nTc4559VTYYyURuk9MD7EBzi3b7Tn2sekHfUeunMC4QP",
  "key30": "2aKDHY8RP4B21fWtvbhBQKUoTW4Q8mBQ3UJLVwECKR7N1K5sbCPLiUgFKddfz3GKcCo4xwVoNPnwveKvhVK1JRrz",
  "key31": "3Xu5FVMJGHNTsAyFCJiTwxMTJmq9Hb4jffDUH6EcGmcbux9zzLdGNKSEr66GuoV4VcRT7fjeCHKJBXtwbFxXvP9F",
  "key32": "3as7PunFobP1U8QNniuJufX6PMtPWcMgUCRFSXtH72XKYFr2ne2LUNXp6GkERNw984DcCubBnAEUtYU8U2vJgxAG",
  "key33": "4kPyVgtbsDxasH2xpKUT6fYGrQdGTF4zAZQJywq14Y9qNtR5Q1fvkd3FPjGGczRS8YeHkJtcHzpM1WLgUghwRzx1",
  "key34": "5fqVex2rB5YCJLF6zUj1vLm4zxRWv798muGUUkwZCkK51hfnBpa1Wkx519VFbBEQiMMd3cU7M1kiBw5z6YEtQ6Ue",
  "key35": "X1SffhGnFzfpAcAiD4m3tkmgFTp8Nnfvg99fYxMxuLkQa4dNdCJxA6o5nqXwKxrSTEiKdsrd8G4qiCaMZQBoue1",
  "key36": "3NJPoxDSaztXy5hUa3exsi31q8MCqjG6WG3RJnPCk5KJ6YU6Ag3vzGHjFj6ube9c5J6ypgNkcC3M5ajqJnLJkP4S",
  "key37": "4FPSNnnUcHP2yJE8k3gFrBCMotDvfuWouuVJrDvtLYcG9EKdG3M1BGYvPTLW6geahoq7sRzAbh4w5DyhHFxgoLAf",
  "key38": "2YC4zJ2GJR97VwLRp2u8e97WGKn1ZoFMgCpR5t7VgmhPgWq3fPrPQ2cyQ6eSH7FLoE8uj67wLQFhnLAqpLagdQ6v",
  "key39": "4EqDM1qhJDT79KJYZwvZhsWkkt9kyTsVqyRP5HPoS1dHbFSBVxjCwFPdWfhAqo1cAYKrLCeYZQ2zfRLntqLqBvM5",
  "key40": "56d8J3jMDFjQVvSNwCLmWzwcmeUEJkNGuMVbu35gSKZfBsf2swJQpu8D3eEaXqjggQSG2xqnWoLWiSMPSn39jHiy",
  "key41": "3dU2Vr8Nu3nSDWGheMqKqZtB9shEQo3sx2SgH75n6McQJ9JjuW4ksXAGXmkPka4HFPPCJB69GPH3kufjGWkQdTe",
  "key42": "5AGZA9nT4CJmyWyYV9fucC6AW5nDvUdbc5mMVbHEUwS6XVfaFQd9tYJzUspyL9uib5GvzAkj8eU3S7zB3FZfBYe8",
  "key43": "4jxaEnZ7GeWi9dd3KiUmrq3jrEszMpYjUVN1Lej7LmXaGaB8xg1xNYaCLaB2QYUb3pw3sjFzn1NfdL1q2TdSfiRP",
  "key44": "5gMKcqr8eiZF1Dc931PFJSGYETMzyVYPeSZxPDUMUZtH3A4tgAurnsUjtRWyF58LyRoWYwy2mDfKVfeSzPN44Xhd",
  "key45": "TgsHFch9SghDtEQo7sQNURQ7TcM1DyH9bvoMNujQkLrdAG6v27Qu2LGzsjQ9bmqFRc9MX9wY1k98QcRWtmxcigZ",
  "key46": "2whtT1pPtzW8GYkPXsuuiwccyUSZLxG87hXMVW9wmvLKPgyMQvQUEwriYCUYMcChH655pmJZRY95mei4gGpeNtUw",
  "key47": "3oyg9ZHirkpmh2nfqmviUABVBjX9mL8M16E5o88wUqGiPvHZy4u7xD1sJiu8bgjzuZKcXSFwPGbqhXeFikMYKFSs",
  "key48": "5VnsjBVSt1xpFiLYVHTnGNthpTe3ftekVsCScyKpX4XFcSNpSQ5J65WyK9paeCGiGD9dtrUUWviZqgririSkX4Gw",
  "key49": "8L8GbPxiDSeUFdH37ZhNz143eKJhYpcfXobtFDCRzeWrdTjLF9Ru6rDhmihKGSTYwnEguX7nhwoVZeMgNRDNXHK"
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
