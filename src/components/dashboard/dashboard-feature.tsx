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
    "2aAbbbUYPpqBxRiz3U6cJ9BZpgMdQjN1P3yWY7uD14oX9D1Jeh8HzrCBohLsiRPzAs8ChZRpEV5ATeTsow2bQB6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rxVLJhnAUFx1DMAdTYSGfSL9ZD1Ss5FQUvgpsZzs5yqNhz1aerTHwrhEwBX3ymwXUPrZKcZSjTqzq25ZdYjXWV4",
  "key1": "3U8iU8QKHyRTYUTbX5WwRzZgMrtFDcRGg3RrZPRYzchp8KczHrXdEi54R8QuZhHzNZmbrNxFYJNoqpRwJp54uvrB",
  "key2": "5iHw8DZprLZoNVuS51UnqmKeCxJMYpeNXtgpKwhBo5wyBcBV7NF2VgLcw38Z17ajXWsQ3psiPACmP3ew4nWuFD92",
  "key3": "5Y2YYqvKA3t5P1G5U8a8ntzL4kDHs3jnFbo7XLT6zJGA8bG7tVR1T3PD91sgw61DtMeKdCZxHpxMYnMtfFbqDbRQ",
  "key4": "5KpdXuLzikDUxHwEHqyLzYkbwuW6SEEtwt1vnjUEErNoYwhu7zNyJfW85iQ18Rb4WbgK3egMZUd5ocLv94FrLzdF",
  "key5": "z2Ub4mCgu6uPW4b662oi7LiKq7VWm62PW5varGrbQD2aqy1JsKqLbN63M8F1LW8peBJ9MtxdcXM1eByyjNoU2J4",
  "key6": "38tvQehAgFkHSUz2mbE4xcbb6RH6T35JHPPSx7LkD569s4YJSRQCgPZ4CaRZwvtULyyAeY8Gfn7V1BeQUSwNWaDD",
  "key7": "5mjwY4nZQTnjnPrqd7jbJf9XQnidghy3tV5TfGQLXGHeyR6UHBwqRVM8Hp14nG6fQza2CsFNoScRRb9HBhyWQo4R",
  "key8": "2hHCiNGXFuANqdcoewuroWXbcAuAsUt3rdpeQ2Bbi6oETzJp4o5Xue8oBkVikB5T56TGJevhsRnSxd2oPBe3HsPo",
  "key9": "1xvrMvPomUtpztghdPkNBftbGWR5S7UDwjBLHSv6Dp1kq2rbwWvd23dEZ7iVSivXw5Gz3PM6qEaJ1pAU64SvNcu",
  "key10": "5xoWQHGLeFcYYpMcg5mLuGGgukw4UMgfJQnURCjgMkkNFMpJemRXxTZKea5BhCo9DuX9px17SqhyFwhjHdsThjUz",
  "key11": "Mu1jmikm5DCKZES6vdqdQhe16N3pcAVx1P1uxVRMPHSzKMdFXeHYV6k4Nv7eVW8N6ovkvoVNx5UUHd3GAe17VHC",
  "key12": "2ihk7mkx7MFv9qLRgY8WtMh7vf2mWfpXGNSRzhyaE6a5zV2J3VuBFYibR6ZhVGiZGDsXpkLArStpNChP9BHgKnSD",
  "key13": "xwn3zF99eqjbShkS3DWhYoNTYxDep8bw8D63Ybp5VSVux8E5Sz641H3bLmTQraEaSwP7SbxNusCu9Ur2dPGvrZs",
  "key14": "2dz5dJDjSLCC4YrcLJU1vRduEC9qdWkEvfLxXkXzHaBW1ZgZeciDsRNv6cTyms8hm3axH8FoLA53DJTWxUqpKZnk",
  "key15": "3jUhsK7q6YFu5XtnnAMr8JMJTZbccUL5J83F8QSmoWs7qMfQwzdqMRJQzRR541GXoy4fY6eDTntDEvL9adj2vAR1",
  "key16": "3PjhGfh132Ayo7UKC9eJzjUVn55LGskgzrBBFCNq8qpb7nzGxrL5w3KNzySx42Cd6DAHVF5PLTYr7UYQrTPt3i9V",
  "key17": "3sdQMbJ41S3xUTYgLoitZ5M4AQLvzo7Qc7KHGkDsogD54gpqoY7PY29D49uswnJcWo5tjPrG9dNGo8AmXJUtsb7U",
  "key18": "5PGuPYL3Wvgg32CPDvnYedTzBE4VWTBJrh5PpF1uYGARCyRtE25pYQBHT5aoE4UerjFJfPCh1iPRWmyyfJP8QYhp",
  "key19": "5T32W6G99UPEvvtgeqiswQ3pPKSU2n2NdfgudaVzrZZxgmxgxx9StkacrS6JCvmFmJEWHY5JezhJv46hbJj86ZgH",
  "key20": "2119gXcuvcg5MWYcenFMCi7iWvjNd699ABDj7ZffsJefoG6xmDL4VWeRUeysM5eL8C3uCZkC9jF2gxSsNGhQ1BzS",
  "key21": "5w4FA9f4cFjJa3Dyhfe8s2ssUMJejxx8ZaEX9qf1TGpqrUvTjNEj2D1vyerkTbxmC5guceJHx6ipfTSH9vVu71Qm",
  "key22": "2yBCYbdfYcJmrthyH5sCFkfj7qJCcE2BhShaZqfxnD9GbLavMcNgxZamFtBPpkdvswEg4Krv8NmjQdFv34nZ5vPm",
  "key23": "5QBMJ8yARaX9B2azLC5B6hnKy3o2qBTsMKo9WxnHYmyTfnBrvmk2qwzYWboEJL5y2vpJyQbz1pA6QRgjfMegLHK1",
  "key24": "64jbybbVgSwd3GTT4ZMtGKo7nDJocTMHRMtPm7fhLTjExMj3cfkRYKtUQwdmKp37JuAsaxvewP3aEkYhe4LBYFgy",
  "key25": "5zCHgtwzJD6MdVLNf1sKgLgMZ8TRzED7vK9ahV1kA5969SutXRxJHkzJnA2e9Jswnv1VJx4A4Qs1Dae7ppfMFK3c",
  "key26": "3bEbMgvQeeR9FaupbpZcSS9BaTqdVsT5FqbPL21doAjcH5TbmVHKLjJ3cN9cDoPLUNsRoz5RS4paydfBNHUBtdjn",
  "key27": "2dn8MhL7BpLJTSBm49EZYiQCiDBLx9ymVNASWr2zwyfj8oCA95hXzhkb4uQDjdV4rssHX9xLpvSxJB1mcHfh8v7Z",
  "key28": "4n2joRDVWqWp6KABWJfwPxBFfdaEQ9ahqMdXDG1fm3VgJfvRNaR3arzSx1C8iwtSxs5YF8D7E4nhvuv9uEX16132",
  "key29": "4yVhRhYFPut3qgTovCAaKx489JXuA3SXwLKj3DSgwhcT8mkPNT4WguTN8fJhKXDpGxp8RyqQFaNoqVxvBdxcuaG5",
  "key30": "4Hq7kjrnmwJD8A264qpvAStFQDseMvwVk3kNRtsh9n54B98WKtFphKpQkCZJ8imTMmAbJgDKaW1u3b5WbUYqCV5q",
  "key31": "3MhEnfj8khrK3n6AndqDcVin86HQzYAp7FRAYdCRveKqGgJcDHEue6pajLtuSdo7hQgCr7HVLR44pwFzvYkHZaTg"
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
