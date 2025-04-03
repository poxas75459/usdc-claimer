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
    "3FMkUhFNbwuMFZ68FDN1JMtWKP9fpGtRUjfXSVge6pXeKosgyGvUGkGRSHphj1BMiHeFUm2y9qvv61B6FYXgxEHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o9YmC5nFBgydrdGhRjmEcy7jLZLNrkKvKQ8tCvc5uxi9BhoZYir6tsHG7g7UFmbDhjQGqxD8mPPmJSFosSJYucA",
  "key1": "3gvrgp22pVtHzdytTy98kMerVJr5kRfReGjis4SKvW3Xh37XHFH5a8xQ6iuYozLcVdLkPyGp7mZWhkiopbbs2jJq",
  "key2": "2BUT9iukqVMG577fJKXPZnoHkgtHaviTwP2YYFBFw4NWRY23ed6kPyw5UK9zaQe3LtV2uoAZ9bgrptqtApqUuJiT",
  "key3": "2Kbcni4Q7dD8hoGpy96GfwHaMgLqKA7GDE8GcLkPy5cq2pT3X21RU5EuoYNFetQKrB2aABtzsTKHE5biZTL33Q7a",
  "key4": "5xo4EmnKNSHvk5SBFevZ4wYrQtRdQGHr68UtuUfRSDyWvms3pryinxcrbqy1ufKuk7fd3ZH2nZZpFYguku5hP7B8",
  "key5": "5TNVQu7NXDVKnA8zh9afdgkVTeoLyg76xXy1uEmvnY5A3CH5kkrEvbvMGsCPJafLMee768R8USMYsNUi4pYftXud",
  "key6": "4N5RShYnSdzs3JWdLvAqzVQfcwkkMwEvuxYmBRJtL6zKpKMefWQaDedmfTnPCa7MCMNo9qxdJViCeuz2S3ZVYkBX",
  "key7": "4DYUH5pgvtPpG2oeTY7rsesqU7YLY5XxX3KCjgvFx1zhRrsn43tpUfwakVF8VavLvk2rWGYHEAi9KvdLBNMt1eKn",
  "key8": "vaZfmmMb5hN4NR4HsCFDgHkcBRmcs6HXZQuDXKbv17VWKoV8h98qedud3xh4NCaMdQGqtULPfFL4VeyQYo3jwPi",
  "key9": "5TJyYd8Nwtev7NFpJ1L4SSvCRYDTViE6dAUbwJ8iN3CA4kiSQUnsHm6caZKoJxnTq4gyAbHZEUygpX8DRV3hhHwp",
  "key10": "5mELbRGj2KbXpjjagbTMbaNr9ntS4fKiQnALeLP5oUvSJwBP1NK7p3zi2oVeFf3qcTKBSp8BAmnP3s4bpHRAsP17",
  "key11": "29ndsis9Xy65qmWgrZ3o9RMi4LGWeFYDEb5KdXdvmr5zF7mp662t5G2M8KRLC87SbD6uWctab787ep6o1Wqtt6vJ",
  "key12": "5CGR8iPQJHLN2WfoyjoRmV58MVLCddLo2CVcW5vmQE1U1GstFy85ZhgaJccDupRAgvc4oPxu3K15ZDLSqr746MQ8",
  "key13": "sZgMtUnUhCPJLWTsphsv5xjgCk4uBpviUUNdpTaTeBF9BoFmcWUpv6hQ6HXMBs8kgCQUhJM1kS8ecmY7yrdNK9B",
  "key14": "4UqdJKt1gmfTC7ZHs2SoJ7ZEmkpsLemVUx2PP86v5r4uYcPqL2HhDCs2ni2UnmT8axJn71Up9BCbdAot78Jijx2z",
  "key15": "5J59Y68qW4TPP4VxFbHn9jQzdp9JoTu3bXgJ7ajm7jL4NKckMjtWmBfnftUH4LDvFH3YgAAXu41LCLVGV685Rnvv",
  "key16": "YbU6WmzsdTzmQwbo8JeMSFL4y23eVcFk92AGBhkdt6nuW8Qt94G18AP82MvHN9mkwkMTgNRLkPXE4DY7G9v39A1",
  "key17": "2vgUwtvffL3WH3g9y9tSvEuVQXNnS1bqCiX1CU7pgL41JTJnwJUytUCk7gkMkyPWvE1PQ6vpUVCS1eTV5gdRk2uP",
  "key18": "4ipTMwiZYutjoNkxi7A6qTkvAZrqTMwJSMhwLKtB2S4GGmyqnae4jDVGwqBWcaeS1rY1Fhc1hCqLvcxnYF86kzhL",
  "key19": "3pmHVwrQE3vjnT9Sxt6s17a7wA2ss4bKugnEbkJ6NZrcupAwMPEtKbJdPBVxTiTQV25SCWgdZ7Eyu2kZMCxoCNdC",
  "key20": "KU64yKfwnxFY1nAm9JH5hZzXZ3PN2KGWqiXoW9DXjvCUrHiG77yD4M68spnh7urFVvyEygP7S55rXNTuCP4VSNX",
  "key21": "tqMcVeA78otvX4EAwRW2o4YKcW5r7Afb4zoU61792PVHMvstwBgVvGq59rMGFggE1JimMYr19AtUd3NBRPBkbkD",
  "key22": "GiG85tuVmuetQ52moMgUmGCL2yJ7C8CcwEhY7VYeyDq9WBPnmxsYwCd4udMg4KHQPbHXmyii5bUkQL7tBaLxLuQ",
  "key23": "365gfjJCT1gbL4hwJ2n2BLJCeoY1Jo3kqh6ian8MJVdgNjPELqZDKb1F7oiKuThGgfGvzsQNuostCx61Xv96sDCN",
  "key24": "5B1ZpHh4BkRpe9SZSXJSP6xJzb5BB4iSrbiYgKyppsTug1zairvPUpW3tZ2kZy7bGVYYsx7YLLTULc2acUjdpzYY",
  "key25": "cb5UNznftdw9jcfeomCtdxQoyaAtgz4mHaZC6tnrR64QB5oxS9CKkR4b2aP3YL4DCUTo4iWwDUj7PoryKbD31dL",
  "key26": "2i6oDcAkxGSKcbkAnMjArS8U1GAmySpUKirPmDbPGMvhi755g7mwPYEWozPvSg7hFbY7KeCEB3SAdeDv1mqSNsgC",
  "key27": "25qmRNxaM4qi385QaqSvdTjKdkQQPut3qZscTjSpnTmdpMbgSCk5FKBXCtpSrZipzyShDtP9YnSZ9oYdyKwJAcNt",
  "key28": "4ivgtFLqHwVujR9af8sea2Ks8K1pnTniAk4bxocPuzJs2rdvLVEFHdJrmQKtTf4ZknKPSE9zxREfvoebJEMCxJP",
  "key29": "5S3KHbyvpx2HCpxHrqAoMLupGtr59aUDJj7wsevZdYAx5Aba3bdSuaWa89YBJ4veiRiDoXesEUpowQT2fznDXsKF",
  "key30": "j3AsgzbWbt7A5ZoKDsrYLL3Cmr3JFKYDhCt6AH9bUFH6NYcde85uRXHdvsC1FwwEZGPxYB8W5qqPrZDDo3GBqCW",
  "key31": "5aiCNesx31WcZsoNHNVhTwWvoMiE2AUH75Vp9NzWKpprNgoUJibme1e3qY8UkGhaN8PYvThLmxZo4RsyaKuoWYbY",
  "key32": "2oXiq2NRP9Zcb8PEDB93HjLDpt2mGiEjDAR39GMtxzRjXu1Bv9gppz7U6rm4Tkk4Ju2ARnyVpS2qUL8rYYMccx7i",
  "key33": "2F2ZvEH5cmqVfqZ6YZ5tZ7PHvVV8HeJYSae8Z6P5vexwNkFQ2mJcW9QpScKikCDbJgALjNV7gYUSFdKDXWsPeBxv",
  "key34": "T12CV4DwhgonRFqyZJjgicJP557NurD2J2nXno2dvF3fV4bLCJMhA6xHU5CYnKA6qSoHRx72o9Q3aE4ufFuEYnj",
  "key35": "43WrScNXPsNgiapFAA46pkNHX9SVbj1PoWivgdxapbMFPPtmrW2yYKHoGcDbvHPmW5xRTNRBgp7ohc8TZQGtcs11",
  "key36": "KzHchGzLSRapThAsLSLQFeC7RgJSH1KtHd8oh42tNYbk5WTFrZAC1jrzZsTuaVhfVpDPpRYxN1mCjhuZrbMuWSu",
  "key37": "2X4X8WZHtDGQ4KdnWXssCTDHuchnP9bQKxZw4qqxRGo6Ggeo1yFDxEinNgCW4iUzdcEHCSPFVTSx9ZyWWDeQzEtf",
  "key38": "3M7ZixbgE5bkVtaNB9dgXURimJVWT55744EhCwNkanwbp6kJdRLtb4ff3gX2GsHaDFPLaKN88XkSZZYc5ejQiKJu",
  "key39": "5tmZAPqZ5efCzunMXYWJZtWuLwNsJiRCCoDL6RiXVLuwp97hCNCsVNRZKG75QAU4hgbRjNUVmLjTVjgvWhaBDQWE",
  "key40": "26wkdXfk5jN6jGSTgidbPVx8D9f8jLXWx8swfyPUuXLEczV14V4xg7u3h1FxkVNA3NQJVHwhJAgymUnUBoKQrzaN",
  "key41": "3rFdajwfNazGNBKsLijxabtVc2yBhdoF4A9YuRiPFmkT1Dc8dypEVfsCaKz9HLbbjZ4rHzUPpVndErwNYVVaqWuE",
  "key42": "2dHpaxYFVuJ7E6CXyPEhY6vS2NYfq3v43qxRvSc7Vw7cgpyZ5BmTSh7qhciL6ht1oq3KG6YkAj2hYQRC7aTvec9o",
  "key43": "4PrCySk5JKvv4kWw7Rzy7MTZYAVPoPJyNrrRyTAq1H6sS3SymiKRr6zWNvycmZM2h7SEiGMc9Gym2dszhMAfhCTz"
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
