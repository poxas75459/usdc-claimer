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
    "52uJzriJ7hfbdjNcQqT1Se3HSWUwQW3hFs3KbY5LgTiL6L5ewjhbLpk9Aeb22gyJFSo3oEzoYcpiMrhPGzB9TJdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "378PvH9fyqnxVfZZG9Sh8Q8XGViKSmLSYQQVkxWyDDXcX1otVgiMiwgwY3KPRYrkfZhxW1Y57kdwER5CAXq6J1nu",
  "key1": "uuBLHinxidB5WGFE1RaCTxLheyTHHStmpH8hYp7ua3zMfym2PFTqMjB24Rj2vbgjMFa7YienUPfya3nee8a27e6",
  "key2": "2yut3zgg6LygqdijKCrcagxzWi7vBd8bAwASywGA6rm2y5arAuymRgSgsVnGGsyzvwXhxrUir616Fbei9Nf8dKto",
  "key3": "zb522id8KYT9qsJQxFUBzNPTSiA6Bbyh5vA5zV99Jhiv3TWnkRKFzZeeGv2Z7xb4qmHP6WPxckqMoUG2q79qBmr",
  "key4": "5SqYfsWo4PKLyYyCe5xN7hRFwDttaTR5ACnPU51QbFat2n3bD5jwdXzJV6TGn31X4fwfEggj9XArZZERDmF4RdZh",
  "key5": "4JgjCPobnja2nZEFuhcFLLam4MHB5GrSNdbABm5ixyB9qjUD4eTB8XtquoBXbNC7zzF9mo5H6196jrVZngGaFKXR",
  "key6": "2nDAWd3bXP2gsiBAgWKpgNRFKfDeHDcM9gyt5WrBhxja2MERZ73dnaRgRjDdW49XeA96SVJx7g8sHCCfxvhVkLCi",
  "key7": "2arkTbh42MoGjPNa7A6FkhN6FnUyNxbMELdnxXkRaB1vNaMCSjwS7dfyZb29owHzZ6Z5Afsr1Yw8yyZ8m4jTHn8w",
  "key8": "2kJJQbnDetcjZpiu5Bcwdgr83ZMrbEp3JZcYT9r9kDhHiwkScxjE4586uchEiuwgV1keRH51uXMM2Pu9TdvmSc5t",
  "key9": "DFkBwHkWsg7tpnYkxQXBJrEbaEthZPjfpt5g2R4DKZZq4Ny5YMx7uqUCMCmXVt1WBQvBoSNUiZfgBG3EhRa9eVF",
  "key10": "iAfCgfFsDLBc8Hie7qzjUaE9LHBe94yX2rDsLcHg7ov5iL56MNhpa122C4vsrEgBEKskHDKh2F64HvCSoqGKgK9",
  "key11": "4veYuyU2j5SckqjcQBPs2jeAS366Ma4HeHViomyXAoQr54Sm34HEBJUDW9qWusvTTbkNezAZBvcPfHVwimaxwDaH",
  "key12": "LcJPPkq3ZbSqY4mTZBwrbJgbLbfyooY4FDdikyyDPeZmGCC44vjA4HUTXAJKR8QXBaEk8Mr1jEBXjwuXpA4DzLG",
  "key13": "UbjYR9PSfBTGk8FupKiF6kBQwUE2aejhrzHi78vQ7fnxdkq5rNffZ5uoza9SWF5kvxYEZyYGYfMw9Hpe8aeAYHo",
  "key14": "3m8cv27ou7hmRChwk1HYTJF2AaHeF9opCUSNw2fsZRa793zqNPST4B7mxEzWtcrVF1734w9zicpNgcqSUYog1LhG",
  "key15": "5BjSXArJJBfAPyFr928PKkhkBEZAB8nMCZnNMtwG33dgpEMozKHvMbwNKs5792mnjgLTKWZ8KMcZVRjXXvnQuH3D",
  "key16": "3EbYNmYoaFUvKTPYKh8Y9YRT2aXWnKTYydtgJ9G1WRaKJdZJb3rWbGPey7BL5WSSBbXtE183y1NqTjvWUhUQtLTQ",
  "key17": "63FwwQvpDqeugoqCd7o7a6e2uCQtBNxH3ey1BBCdVcTA6izNpaga9wiYyLfM5VJjrdyLjX7PCaTv67ZT36eowBRo",
  "key18": "62gKqPAKxr2Fwvi3Ei2BKFsGhjPj9xSK11zBRG7mNoYqs9BQ1Kp9Mf98H3pQQQTDpmFuuEjoD41DMKpn9rRE8PL",
  "key19": "4Xt25vuvP8tvBVonustfftGEqGCzHn38h69r3SCfSAxxiJVQ8znCDxPzr1WK5V8iUfCfYihJLzC3ACGyCXK3s1uP",
  "key20": "2sgdLuEbax7ZyDZC7zx5mrzXXbRJAGneQQXbSLz5i2t6B51CTZh5abRVe9UoqfYvMykuN3zTatuNJrP4uL6qZfBo",
  "key21": "4zcBxwUKjcP2YjAyP1GCYtAGAw1GkPMMjB6R6ianocTzVx5XPqCMXhVBZuPBoWA6qSiPNzqCo6J2NJgLAPVFfRQe",
  "key22": "3kxA8wp1VghswDgLh27iiiv6vMnr3gLvnUsF7ubnfHz8SQM6dTArgtLkBhTc1oPuD631W3RV6FBJjoghg8KgQb54",
  "key23": "5zKFXw8ZW4x7qL9M6F3vNCNw2vPkq4uQQQ74ywJQqjDcbL9a96H71F5wDZ4PkRFTWw1wc8utQ8anu4VsV2ULMrUz",
  "key24": "2ToVdkps55NTTyR229CKMwwpFqjnZfVBgZxEBunrqqQ5X44aoDry86Mh6YrtpgJ1bqTcVfmRRT9wJgGyvsJfJ9TE",
  "key25": "3Luv3AYb2RkpDnatdHKGizSmk99reaq9EmQr433DDErC9CM2YDHFYBciVfyXsKW43uaBtwxxJ7dxcPYtsUdjywnG",
  "key26": "59erkQtvnUo6mkSTfo3mKqi5oK7EjsNZ9rm5kU1ivUsKfEXYfhesy1sUKWxaeMYx1FQVF8aGBWyW6WQ83rrPbmLd",
  "key27": "49JK7VpsszB6hmMKc5vKuD7LE6gvmBy7F27d22hMWjr1pu832awVywPz7RxQVt1rRryagCQRsCiXMZFo91ts2Ecy",
  "key28": "cX4WvXR6S3DyT2ix7fMfNC2veNt2BiMJUCTwSedDYaytQDpZSJumd1nEbwCpr9T2a5GqJdd97RzxqUZsgZhQw6g",
  "key29": "2VWVtVYs2bssD3bCYwDzaRhp9fHZZPsRBsGPbXkH2jqAwocEeze5id6fPbUrrv3oLcZLHe47gaq5MgCCctZVSAaz",
  "key30": "4jwEm2eafCVTVoSzmwQeC8bTJwmLT3rwhhPyD5B22s5WdD1VbyDWAhuA4WWnxmmNJFfEor3f56LSxULxZHzsyVgx",
  "key31": "3jbuqS7cZMHCuBFhHSFWAssmfqKrRQgEse38QNjRfk3EQ4AabujfjaDhUCkf74DZYiCDziQPfS89wLQ1Pgd5iyff",
  "key32": "DwfbEfViJt28jSPPjuXt8W81vpLEfQJ9e5XGEFXjbSfmjL4fL9bsVnAoGFYx5FWQR1MaRwcUfA7YYPL19sdxTbd",
  "key33": "5PqtZQqZNdHmELzgzpUQJ1WNdyZj1Krt17Jd2u4mbmUJZXdq1RWsiSN5DgUxHFSNt5eujuyqYLwXgcM5JWXBjXt9",
  "key34": "2rzYE3LUJrpfdbczrp7MJm7J1UMzeSnd4FJcHdhPdfw5zKgtTBk8xqsywvayi1mxYxvyGdpmXCuGgNiP8Yx8BBvn",
  "key35": "3iebb6kbApF2gP4Kru9DLJNN5ZNbukkMH36HYkUiqpEpJevThtD87FTkQMUjA4Zuhev9pWKCa3rtj4mn6uPvQSim",
  "key36": "58dfn4gvP6jmVtTVqHxuw48vSoQN5pezzxtKvvMu6WXaH2TEnfbzWZTRtW9hcKTMD6TM6w9rVvu1QDadaep95eoo",
  "key37": "473Fi8LXDFcjAevbHWU6wSWHjG1DoAuxUUAcKU7ydYUnuvDftz4UAKTHfnQUrEfe8ow7GXNAYZpjJtgoTUjzSTWZ",
  "key38": "2hT6BznCvRV9mguXyQj5VC89tP85Bzn1NE96XLkgTn1ZoQmJuKeo4WJKSh1HHSngCsL7T9tBvt3fpv2WohyXaJSk",
  "key39": "2Q3UXZAr9RFHgGo3KezdB9WCDpGPSdidFnJ7RxPZCbr884RUTjQQfPqfRTnABEDx67wPgTedYgnz9ReYByetqres",
  "key40": "2VLqHHD7wpVHbPXhoS3x4BGdtHQf5hSofdLWqhYrXeJSb5QUg6PnP692ZfrTwPKhF584N5nJb4MRT48dBGcavv5Z",
  "key41": "344u9k2UKagQGo35trXTL3xJiWnDeU4QC8WbUy8VzpzGGtc2sncYRF8ccaPAYo2ERZpZAvbhFuV9FV8ieaURxQbB",
  "key42": "1qPwqcPqT1NoWNV3RUMvsJwW68CD6jvbNYpzHdjDFfjypdUVddUUekv3vop39e2ooptu1z1Yt3rupLzdsg6KERV",
  "key43": "2sBCWgpFsbd9d7oo1ragmifjjmzSY5DN2hXFwtmJeUocdYKY5t2484h8Fo3WDJ66CMyxGYg38SKLJdHKC8vNcS7e"
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
