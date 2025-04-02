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
    "5jGDTKqgo1EHuu5se63YAG5NsifFkteqJTvEMidvUSAEGyEQehQ7PU5FyeQvgbHcCL3rbKmAcfdSdXCQZAeX37YD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nQkAse15tZC5tE9iJF4Tiy7SziEaMP4NUcTVKoxFUk3qy14JTRwqMHpZ71DPnCt4mwgnRvvRwxLrm9P4ARFuyY2",
  "key1": "xg5hHxYR7a4SM1TgymehEkgiPdFhRDcTtem6P7VFrEYrmqVTNhLkF3t617FhR8YvUcwyy45R2UR1B2sXEahUx9c",
  "key2": "5uFe4sBv9ePD1a4TmNASmzUVmdym8vNfyiToQr1y3ezYzLsrobX4dCM8AgBznhRSFr4qPeLo1mzjQ44qLF8JNLUe",
  "key3": "24GqCDnzaW3gGVseHp4MhEMAS1g3cXZGfnTxGp5eqJvBGMGvBjFFT8qSm72Mbh2MNC8ccDEfmJdhR32kiT2jdNiF",
  "key4": "3pnzSZbJ3HueNoowb24rdvh8SbMG1Cpd9u67ez3vzb14pTfvtqFNttgQP9yRgs2Cj9cECxmHrm62q3bdc5PpZrXM",
  "key5": "4YhFX3611iL1wJTg73KzZZmg6rbQs5wJnNaAwJQYbebyFcAtfXrufsKXjBciBzC4E1UUXAm4nY6YPdN4Tss952pT",
  "key6": "UekDSfoWwjih5vPjR4CxhaFt81EeYc9oxnN3ntQAQ51dWNb15mjF4ePktTDWtBNBSPTKkxuqw7fQwjmmt8UWd6k",
  "key7": "R8kNMWkBJbQuSEFckRej94Ex9VwkW7PiCT1X7ZA5yTsJBsNkdQxTPz2VoWMsnbgpfSuVNbBLxUVTFPGhP5UzLyK",
  "key8": "2nSRJ5ot23ZSysXXD9HQfm9BBL84Pmn3QireAFVGZgmbYhwh5qHc1BzvfuUPmGupfsL8mFi1BspiF26SoHkics2J",
  "key9": "4TcwuJuEY6LPfNRmaddDyFYQt8JVbNkdzkiR4SBTuh36H3b37TDoyxD9RMeejX2bcSMHF4XHCXwiWyoSJVNr6QBE",
  "key10": "21ue8SjbVV1yRZwv7h5CPMbPYYaRqLVdkdgVQENgpLyyQYVQvvUV3X7pXwkZffQQmA2S9N6FeL5rAxTqG29DW6xd",
  "key11": "4Y3f37hD2nqUp1QchYsUcGQLaB9B4bKCnpWrR4Y7y8tuzWWjxtW7qdVEFtknuNC5kEBsUwzSMem9JTGE6dEiZvF",
  "key12": "5UvyVi6iS9p3qhsg2ifmjbZE4TT6GQHQAaLv2uoiqwdrVLmJy6pFiXTiP2dgcPDGjbWXxGpkUVMJsT8HbxKBQk7f",
  "key13": "35aPn1F2S2T3LjD8S5HQm6Ryuk2GT87JMJHjpEVv3XA7dagH8kb45KWFFxgzzyXrbiUQc36wcNc9b4ytvQEMHTxD",
  "key14": "2AuQq62TiYGxiqDE8b6L4N9bpnS4fSyjQRrJxeUm6P8ZdTVV4K29uKz98vHpyCtDcAQrJKPnxHM3yrcYjWjPf4aq",
  "key15": "3SKqqRkHr8XCrDLKxFk7XRbxWhZUcYm8ZqcRCeNUqjR7yMvPDrx2d2maZtW3dtMX2uX75bpTpWmuovfXEANhMbjr",
  "key16": "A9KFMA2X76BryfL5eY3KUBHET3pE9ZyZp44vx1qmNpgVVx6QeCmdbHELNFASawyF9VcGuie5Quk3BzoBzziTTxx",
  "key17": "5fKQuQ38DGuRrcjN7xfsDCVugekWnnBLhh8gHX1iegZu59kYnaGnG9htSKeqL7nYPEt82gMV2gVGHDWvdMwdrDPf",
  "key18": "aXbivqJS7TYhug2e1AZh7zatvgVtbWtb7MjsqEeAnuZC9DbUTGETYgbAagNkztdQs8GC9SMJxV9tjJnhrEkcyh6",
  "key19": "3jwc672WZdAMGRRFPU4o7F1Uj46kHsiTUzAEV29Z7YXLGQu6Ktf82mnWdb1H9DA1w4KNpXKdiHRivkmbiuAmkzmL",
  "key20": "2HaoTkhgN2iQ9JLmPrVv9PaquC9MxgnLeBydi6n3ng8hzuvgSWS4LzFvmgF5ZRP3FUBdyfbUiSJGrVGz2KEpJkFp",
  "key21": "5mSeXuReh1S3gCBZf8WnFY1qcQg2jgTAsRDN8x7iFMKTEwh86U2AcuqRXLfPxYRQvyw59A5NskWvp4aXSu163A8U",
  "key22": "2mrqEdKzSF7Hce7yDih4nCnjhTftW8x8HUS56WuzLBWdgNjVzAr57demqsyP6bC982cuHnskP4wKYpuSEmo9u8FH",
  "key23": "2U8RJDkBqKnBETgECZE4BtgRtau2TQDHpdmDe65gPYpWBBLHgTku3C38pMnTDgQADXEieJfTKpJobenFzj21iogN",
  "key24": "2p4mriMMe62k7gmhHxw7TTs2AHdH9Yx7fsDEuduL1FFtHjvUUJWMLsAiz4DZgk7jsy3MCmP5754zgHV72EoDet7",
  "key25": "5xx4KbpYqbsionWwQ55SAHZGmhVTbQH37zeJAptxMU3bV36WdZVrfsKmDYZVKe2WA4xKJbeHjLSAqTGH7qU7p3PK",
  "key26": "64rtgMfb9pmesR7x5Hv1y2yWAtAjjAXQoFVMQbwV7Aw7CmxhoeDJp34c5mpWuSyayawfFusPdMpGdq817W6MkSgF",
  "key27": "3veCtHjY9RJXRmDMWfzt87zTQfsxDRa2yq3DMHrTd4EpWsGtym51ckstgKTbDsyN3Qo3chfbjYcavVvzFFPoGkZ",
  "key28": "1bCNY7zRWJC3z62uXepqFRbJyA4PgqhAYyQXod1VuAjYGcARB2jBXawozt167SN1TYJ3DTehuLkRy7iqRrTk2Ta",
  "key29": "xWzGNspmaZZ3kMMsaR65fGeafu89i3pSEcn2N4tYPKHRta3ZoVLjDkqvZUxP5fvfGB5rwSZ86oAfcTMLRYZEmzx",
  "key30": "2mXXPojkh8yWDVHMytEQGFWMt4dUmj2UhF9ZGtZkWB3LJMariUVmF4StHFV3cKutqf9u5vzfn4hzLy5PNyjtvf1S",
  "key31": "wwpVJQ2VLkEVukxQqwawaNz2RRrtxNWm6caRifqnisn8pax26hyRPa6tHmzK2E8kHSDo2ajdpb69Fn4AzhhzQPW",
  "key32": "2mjnRJeqLZf4A2ciipHLzqXYyogavbCjMGjHs1hNvzBstQqbt6gRttX2ssndCCEdmdKPLgMAd7zeC5XcHtSa7aeU",
  "key33": "3eLWQAy8b8yzskmWCfZ43Pg53vW3HrJwy3YDeEgwmsFGqEuF62fv2dzZ2MnxN1ogaVaSkLM5awHsTWBogGuFKxhC",
  "key34": "VJ8PZbPyvbdDsEV57sZ1HaRcVu7t4syU6HfWR8Qo8rj35w4aXCdHEDAL1FgPhXehEZVY9vpw9yPnkHjtYWxPBYS",
  "key35": "3u1sLE9Xmkps8MTHRbGkP6iTDQWTjxam2BVhAtACcPk3rRAERfbuGEphnQe5pqBwAcZhHsWtrCbCwNY12LuY7P7y",
  "key36": "2rmMCJA1PeqnrjtEsxoKmhJ7C8GkdJxWz5q5vBQFVAavUrSBEGrt76V49D1gaseZhs8ucuPQV6eo1XyHadyqKRnp",
  "key37": "4mgctM25z1J45dyQg5rwU9DAvjYgXYgjgTDAw6dFdV2wp4HjpixfsJmaC8CTxk6WGAe6t4jehf2cpPvMCjKStfLW",
  "key38": "2m6RCM4Krm4DPuLcsGpdHEgqfcmEdfTtoe87SBVBe1JpZXn95n9uE4MtMAAY3mGXP2BFoVQ9cw3oxS1HGV3aSJRb",
  "key39": "9gP3y83qsHJNbrrdpN2QsrUvDjkVJvvPEJH1RKrgbwj2Pe15rWTZAiSuXobKTQQKjSHtVesLwP8wVF5RHRce2L9",
  "key40": "vyuy1QqjtDwYiTbiXHiHA1NEddz2rXyFm6eJWq1C1RT1vw8NquCWmmu7wmeSzA2PGztgur8581qvqTv1STVWNgE",
  "key41": "4ZcZsVXZLAC6CdShXdz8dcN28g1sKivCDFSDV1mCZNVgmZwiMxjfNNWyRBJ1WL51t9njMpmQAn6AvmHsGGVSeDSL",
  "key42": "5t5HWKH2dXGgcVMjLWU1fh36XygfyK2cKAoADdqbKqZLkHGE3Ymw9VUjeaiLU3x4QD3CBBPNZpVAQAc5xbhczwyS",
  "key43": "5tr3HBPzpcXMkW7CveNebR7nnFMCSJpQpCkVjiKs1ivTXtth2wm3UFBxHkGgohedaZBt5owtEKC7VPxZx818LZA2"
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
