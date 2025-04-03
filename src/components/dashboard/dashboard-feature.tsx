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
    "E9xw5xpTHCm59cy8VMi4EtB8DeEu7tfq7LyYCk9hojK5Ne9sr8GsQxaVSKH1UkgBUsSb5JezKGcv3R2KNbyPUaZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i1viiSgsRfrCBKfjzbhrmRsKcj1snCDG1LktYGUqdyuVgWssvg5ph64TpmT1CppZu3HrnBB4TpFE9GHotW3w4EJ",
  "key1": "3GA7Q1BpaYSgPiXU9xRkt6Tq7QoRwzNerSKM3VtzKyfQcgCKYprhNpKCeqWWAvJ5MzeFoDbpdqceFiRSy1HjBmSE",
  "key2": "XUhBhLhaVWMxPeoMCdNw7S199fJvcfbpvjXhnx1XDFiRKvRDgTbXzxUY8QYHEuAzAfKaCwkPnUqqqEBhxawqsad",
  "key3": "4akmGWHAeSthdwXXVJunKZ3dfJRoTttQkwzLyJj5yz8mDeyFXhTfQvkQNNbXefz2KGyvtJLQixfpyMS6n6E6VqUc",
  "key4": "2bkJXcUeKmmiJLbVeGFkBRAWnGSbGRY6NqcvMRyXnP5CArFkPHsAcXPp8KWfrByrZTJ7CsMjuuZNTwc31hrZgykJ",
  "key5": "7MKznGmVQrptMfEbbkGS7EuLMLja4sTXCL8839LX8Yw4qakZWvB5tuf1zgDu52tqFraWkn3U1TS31EFb5hnVQzL",
  "key6": "oea9mFUG3UTQz2zjq9UnQGjH4qsZ7dtM8u7ZvbySerLJxGchR4i1XGX5zDmQWQ3Pj9tejgcbVt8bD7XJAhtD11y",
  "key7": "4mwDP6vNHS9EXnw72XX46i3qdQzhMBqddNFR5NTAT9z6Fb2b62ZizJCvVS21F13QgpD9BCCT42SMUA8wbV4S3sPr",
  "key8": "5FHmSmw9aTNRA3ZybgmVTABK65cUihqVxNqzVSAwjePBbPBrNmpdNJ8TUbZBxKLMXM7PJPs9765sJ24gcQXQQ21d",
  "key9": "5Uqo9dkX2cej6soYh5HZn21hFEjHxXLyFCqmfmjGFmiXa2q99F1RCfPj5MUCSFkTzjqqdBs8gBU4gaKi7KfMyJ7W",
  "key10": "VCwGNFqb4PexgnP2LgKLMUL84NwwGysYYfLRWVBPqhySHQiPD9YUGHG1rokYSLPMCT5ZrerxzKpLfU42UJ3gtNM",
  "key11": "2x5xpYaWwF2jvDh1SaZjwps81TTyfuWGnTzNobkLwSrtRNrJhftpMsuPrQJSWtb1wSWbSbmqiYQF4Uuw1VJCZ6iM",
  "key12": "5VYWihWB8eVPct2mMYTqBD7NR1eeord8WbvTnjjjQ8nwhYpTCCpAAYi4312xC5mxg2aSe1dwDmdSmwYyuBP4ox34",
  "key13": "jW4jyGTsytTazU6RAkP7W13ZZkVecGm2poSULe2AnKVEjckhwvTAhM5QbtGZHmnNWf12iNnr1R3kHeoqokc78KQ",
  "key14": "3UzCXtC6Rmn2uJFKztoyrEkaDVpeHRJtVrZSXFmc4efasy42FjHsK2wgQLwngbGFux8U3MszsZf5KAyn8rZ1DtwK",
  "key15": "48e9oVfWRYes8eCYcTDTAfWQdwwEaKP2GpUuir3VNeGd8FP7ZbP2MWUm3CvPr2wyNuLQNqFnS3n4YghRyGRBXSou",
  "key16": "4p49Bi3G5ifpS1QRJqDijWLTZdHf1b2UMbr69pXf1AxF2P26sFmH5gJEfeNhtZY3QGbhWRJwJbYkFFap5oZBKAgo",
  "key17": "2oimRQs4YVFCmUsCWn8fp9Cvq6ydzkjYAF42TLYPcCGH4ofUmaoePVdBitjsjBWTjn7h9SZBNs3q7uJpxBHWsSxw",
  "key18": "4XCTAFcPUaJbeYbRYF29AMtLJzqhzZAZknCkQtVTFUxGA1Kq526eMgSMFXpJmuoNGYA2QHMR2BjVZyXUWxshgqYh",
  "key19": "uA6WLvMDsVtgUs9jQYNsrFbvKPPAHLUJ5SCKYRRMuK4gUFy15pWXy7BdEnekTRsTwSr2yN44fHEUagAM3PsghAj",
  "key20": "3gFF5qzA99GfPGiwbU8eCTGReeLYUyciEKcf9cCnsNT1vQmQaHmH21qkdLZxw9vTv1Jqs8FnM72wYfTow9eWK4LS",
  "key21": "3HePPZZzocy9on6NcTB7fLY7im7ZbnDXxX48NZUQr16gSEskb2UFnspM2B3tYtLLyiQmPmaVm78Znt5EKjtC2ytc",
  "key22": "2Sb53k7fSzgn2SNPcZA2L3CBaPpo9627MRPiTgmXT1CqbsVHLVbU7LEoTGovHjo6FTx7wT1Sa79FPPHSTT6DfmiF",
  "key23": "2vVyJqz99QhU8oHknZ3bcygVNymFe8ETyrYZ9w6fqWtXnuWXuaWHsXYsuF3eRWxkzDXX1wTznFYp6iyZhXDz7gk2",
  "key24": "61nYqR91A4XbtX1W3VppWoFBmJCySpCGPQCdsMjFriWAUuinqbcNMU8tjfiy1nNjpa4t7qdQoYeF4MJn1BrR29UP",
  "key25": "2KnkuD76W9gc3JQxww4cs7e7jvfmtm55qLXnmSr8pQzJyBiYaMWCeeKMi5VpFBvLG9PQoPAFQ5j1DV5tD2SMh13W",
  "key26": "5J4zN3WAe4JCAhX7M1FVUo4Z2geWGSgmoVzAfXW34SvfEsyqhEsDaPjcuzuq9GKHavqXyeb1Jtquuv2VF6UKzs2v",
  "key27": "3ywii4zUMSQQKGmoYiXsZKanVJ3HUSVyVFCJtXy5P2AinyUHcTr271YbTwiJfNXHvnEj4rgnfhDQ4ZW9bBdAXsAX",
  "key28": "YsVCGHxBxQ3DUvyTWsMxuhiB6Fqk4NYDNgXagaJQkS7PLKc2AHm1n68BfFLEu5gHsn8wURrvnRFKWhLeHVyBufX",
  "key29": "hXXvyyv8JNXmN9fmyh7nULibpG5au9J4biGStfamCYVTPHmEsFp1SPR3j7CHyMASEFURPLrxn1zWQdvdXFsiaDe",
  "key30": "37y3YySop69kdbZjyxbraTR2ALZZGS9btNLGgpgifbGEY72hNaQCKJWMf4BzfpytpGLwtQr2pAKfHpJaCPHPLEvB",
  "key31": "2P1cXpCPWFeEuBW9s4X1TxC22v7jj3DdotjTRRR7tscckVrKMqDHw2kXqGCbfe2fwRhmTi19b2fi8HrKtFMTAxu1",
  "key32": "2EZSrs1HHJETszJjXMR6y1ruyXVyPDzKubPurx3faBnWsfGnNGybhd66DjEZ5YCTScVZdR4V3vAtedGGhaWWHX93",
  "key33": "hGiX7f2fCT5WxtMtVFFdgmbKax3Le4adiN5kyWHm1fyfvnnpriMbDvKgbZmZHU4hmepbLC63U1PsRh7Cxcxmfyc",
  "key34": "4vGzwEFbmY42Cg9vZHRYCtBhU3qkwEPdm575ytGHbNfrz1BJNEz9aKzEkPR6J3gsiB5F5rL9f151fQ3NBQAjRMrQ",
  "key35": "3Lom1V1xpazDtjDB4W5vVzPnUPwBNUAgQVmyM9jBWvD1eit5BJhS1yuEiAizoAyU4AfdgPRvYJeuk116ahqYHtHj",
  "key36": "597W79tSG51udiJRsC7a9QJEzYufroGYQRHvSatvkDSo47TNW9QWgzG3ZuZpmfJz7b9ohvTigqscbwgfMi7n3Z2n",
  "key37": "4vtLDBuy36Rqerr5SNafepMciDRaNXW4wo8h1mfEiUuhVa6zzDQrk1MdYkvWPMMpyYBZrzBjAykLbQEpZANSNHAV",
  "key38": "4r4MgWmPSfr3LgmZ8wVX3wYJmJbTt9vrkVbpc4fv1BffpMECCK6Md8avZH1gJ4fSSVCqMx3nKFp2DBMGXHE1hnyF",
  "key39": "5WaMXzxVB65xUKGxLQfYKXRKGrRxPF6yGD5onemsBumxRi5AmcWqxApt658eHwunTxcbdzdAG7YtDR6MFEk2zqRY",
  "key40": "3KKZyvhndRooGsG7ULFXsBgPdGEhDVrDgmLHSsN5DAYPp9xg5PYg1e4hpHe5yCjam1cuw8WBdj94iRLR2AfWg5RU",
  "key41": "GLRAYoy1zcQ4iTxrVQdykEXsRqD9jKvHhfFExEybK3R1mh4M9Yv6tbhtx9u4zVKZc32SwxAzz7kihxjU5vf9mya",
  "key42": "5GsZzbXDAY6JXT7U1EwpGqQgTkb52SMg83H2ws8UjdFQGWP8guqFA7EDempYB9M4FV8S7w4eHwLLkzv4ywzcgNJ7",
  "key43": "4F64krBKhEx8hBatupgATjexMZSNDLhRAw44hufFwQ3Ky7Dg3maCnXTrzHxsqyqe4W9RDGQpmrse4xbXdWmPswDU",
  "key44": "2v5TGQ9inkwuqSGMYkH5yCqzyVh2fuy2AbvJgJcgdd4RKsEuburuwm39ys93oenobNcRgXK4d1eoUmHqWfPW19d",
  "key45": "34xqmUUGNd1DQwEp9t4WPNJhegnre6iDnAugeUuLY9ceiGqi2YBZ8DfthabSgaL4Y27fmJVUi5thLAiXyeLRtYJ3"
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
