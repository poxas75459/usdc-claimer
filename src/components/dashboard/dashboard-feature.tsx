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
    "cKro9R4JQGmGjfFZ6egrfBQsd8RkKazHiuHSLfZmsrTXqAMUtNHW3ZCKpVt5koaV8ucndXoz4KUX1BUNd4ozm8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVdJr6ywbZWGoUw797YQSpAP1eaBLBXpGdAJpxFjfGZfJYJJ1ETjW7GxyoLLhNWpdrbfqD5mkT1C3ULSp4CedrA",
  "key1": "5Mp9JbF6UJjY2t8jLwbPH9tMoi66dYuG54QjmtYuo3LqFusG9dT6D5rHGCZQ3uVQBfrMer4pjs3wTXz2iJPXD7Mg",
  "key2": "452q2Vgb3uYTrJC79NrwzgdV2fsffBBjhMk8z3uaeczn9YF7RvL8BWGaGjMiinoSk45fK34Qh6hTbxRHJQmtSUGp",
  "key3": "35c4sbmXsZjYoM6yDTE1KUCkTBztdjyTYRK3bsGngTr6QFncCSq6qJ3ycDpXRgqxJRf9s8wzFuVb8KsURE4LG2Rt",
  "key4": "5LBd1VWUzT9R8WYJbkmru8Zz2PGi8FZRBS9PQ5Bz9FVYqhtp1bMd2EXKMJ2q3jeoNe7vY59F313RCB6TpmMGZht8",
  "key5": "fPxqXtnqfWhTGZG8DuigxzHeF4Nrrf7fDeBLxsHmapgFZ7Qd1jEgiabzB5MiUYYn5Yj99Jwxudx39N8zWCqVoo6",
  "key6": "2KoM6YGirk4YvR6Vbxt2fXCRvdphof3HoZZ7xsNLGyi4hDPH1jmxys6KV3Ae6RB6Ra6krzvrfKyChN94da5Xav6h",
  "key7": "2CHLi9r4MWQawHBtY82eC6DeHBpe1kwHbm3YPPTmk8Dxaq7ndrTPyPsKZJ3GLUpdrZEcXH1Uoq6jq5FSSPDqDg59",
  "key8": "KPuingTXQ2RWQQ9S1FfV7QLdndbF43ucwhLA3ozPZmfdX3UpGbXtuC9xsBMbvdb6tSg92wHm2cqRyZi4nWrR3Pw",
  "key9": "hH6xVNJAF2vErJuAS3tQ2tUptFpTJCKs46pYy1Pe91x9WBaMMCBVi6ZtriNPqWRd16x3rKVVKXhdSVn6s8TRp7x",
  "key10": "2s793QSNpacS4N83rDZi6KAPUkZVZLBAPi5Kz7g1zq72BtrhvznoJuTuukXpQJfBz3YVjpQLYzjDp49QeDk2Dd3L",
  "key11": "4pw9t6ND4VVtDsj184z1c2PK6fU2hmvCw8RR3xTYLK1VxJGiSJBzF9nvWro7wrGNekdp2LiPJbYRsrrLwhCg8bKF",
  "key12": "4eGaeqe5C5kNMUrvU8ScGtiWUA2i9sn3rqvS7q7BNrwL4MNH7pDVc6dv8unDxfqPqx9mHesGxGpkCHCx77Ycyxqd",
  "key13": "58D13LFoaLbfT4DSrEMLEN29i6UHSxd5TMY5RHMrLCWRVW3eHyFDxmPRdq3qqdDRg5RewdGTGLjhMDHJutJRNiMn",
  "key14": "5nFeKPJHYxoM8CRTwTM5pRFUCfVz51Bor6yJQQFrmSUccG4sag8RdsSqLMaGrku7B7prvnRqLK8r2pXHruyCDT3C",
  "key15": "8cz1Pyk3kV4uGFxFyjmMNNPxM5Lwk8mtwUgr2sR3nftmpMSCGw8HpgjunfcDWiqNYR8X6MLHdXzNpATpPvu7Zi5",
  "key16": "4bRn3ignMC3s57nxvTVTRJRqyuzmNSAMFRKKPhegK9FE7ZKjuc3ZRHvXQ1h4r1TbUPF97bpvPjputfXxFyUK8FmF",
  "key17": "2UeFW6Jrth7d8qY6W4UMqX1Yrs2Wg2dxm6aEpk22Kw5qrfUAEAPCsgm3m3g1s3BDyiSQ1G8iEXoHAoXCS547cv1P",
  "key18": "9ba2PtQLZRhEpCJnmV8PvKxcNRBCckLR4SiEFEtLXyFqLCJfqzieNa2UJ7LbnicrVN6hcNNBUuzhGyk3kC4xL3B",
  "key19": "51uGYESHPkKjtVEkG9BjgKVjjnYSDZTCqZExo6dnuqjB6RLqpX7AKSNFc7Mti8LEjxjkGGyDxmx3LdTdkRgBYRvB",
  "key20": "3rsW1o2FsBFDAoZ3oBgz9XNssAdBW1tc3pP4ZkHdv47srttfEkU6Bm5sr5ZukYU1WMYDrcdwW3dWtSbnWBmRrjHo",
  "key21": "5Ag5Q7BwmspuPgpX4oYiirZFtRdEXgsRBKwETr6scxePRqaT1XER2ZkpPXhPLLdYHH5Pxu4RSrqWbxKQrGRLuiec",
  "key22": "2mYHN8NzLCAUzC8GLW7YRTJ9xNRQtqL5upwk2p8umv2n5i6cBcXRVKpDPuawYDzac9hFNmggtSLki28p6DL1HRRA",
  "key23": "2wRX3CJKpiCMXt3DLMVWDsNh4cYzJRogXzYnQgMJbeX3EJMv39tksbjSKXrpvAsGVS2K6qixLknRzRnYg15ee8VA",
  "key24": "8hsdRsHUAo1qtNewiZaQ1wsJzepQDPJUfTRBZk5QvZAi7ShLJCRtetayFGEbkVrZ9y99Pr7aYuxDgateuFNvFY3",
  "key25": "5PSNmo7GaxfjWoJXAssfNfk3AiLDdk1e5PsJr2z8zzb93Vc8ehBRXANHeDiMihJ3mUFpezWRntoE8RjHJRaJ97pc",
  "key26": "5MMoEi8XpXPU6EbmcZVk3u6FwwipsH9Uzq6aWpMkjHhAKKGgvJSnvkLNunFgBXpJSB5mUBKRWwUGMY5R9ArJPRHB",
  "key27": "599ZSv5vfSpVfGPnxNPco4evYjnWJzh9E6FHJ6yZDyJSpN6uU4jDTzH1fcx9bZB1dGEAJVtqJsP9wDF3VogdBqMG",
  "key28": "2JP47u9i3y4635aoyjDDEQy6Vr1rKzbPJEoP9TBXLQKANSa2hREBCwPCjgE7F5rLir2Q6ajoiSUPrwAKujSAUfzy",
  "key29": "493rmSvffVvcxE17hwfSrpWFEuDHAaWT8wRXZbRkqVLhXRFGqKwbwJt6YrDYcnjaPVNrCbYEcykAoXGGWGPM8Jd6",
  "key30": "4Us8VQxBR3rBZGEuGWqzj81eF52GHca7wWmAgYGqaTQMu9cExnLnXhq9KRMUUDUji61iaamAsYHcEDj2D2h4q6de",
  "key31": "2fPKDLHasghSXKj8abUxcFdPV8HSXHsUsz3PLfWfTwkxBGqYX1U3SfM1dkfdCBHT7snRnXLutN5KMawhvqNA5FYD",
  "key32": "2mFxb1FBTHXcgcZe5SE59WEPRZqyGtMznkXtYQbH3PoAaj54aur7fpfMDBGa1uGbJoeRSN4rN3NFNUnKYLMwn1GD",
  "key33": "3Bes3fqgh2hDvSgL8WR81NCGhuV43TysiJ9E3zEwAoyeGv6uTYmjiebXfAGFR8uUyKerPdU7RnuzFuhu47FAwEcn",
  "key34": "21pWZVS8ZycUggVEDn3Uj8b1CSkdhzXhMm2R4BXirNrTCoyKJ5JVzvQpDnsFy3M1LwpSx5LR7rw4vfW2FCWTQ2ZG",
  "key35": "3Z6Bmjqn5JP7UbFDCTHhnZfkK7JddXhiVqeHpzNhmJTdULnd6PbgfxDdew82gPsriiPssWM3btWDdGVkUVLp4sQh",
  "key36": "5cK3oRXAZ62LZmdWfvKoHPqTbppnDXgdRDFp1bLi6HYuSswKy6CL7qz7PFVN91CDJhgEN9Tr4Qg6yUXUVAYJoajv",
  "key37": "4iwRhwZ7xdxZYyEEVVRwWNQ4GzE8Qb7A4dXtw2E6HgSEbBgqwNX3WxQ5Y4aDPm5DReWrjtRuk3BRnRPZhEay16Aj",
  "key38": "5kYSRf3248nJp2Ks6evNvg82caPbshqUueoCGPA93NUzMB8eaYe7kUvaY95NPGBSc5gXzgAg2iZ6DLfoisX7ThEe",
  "key39": "HwJvkwcLJQb2uhzskbbfucFiDybKstD8fVPjSC7akpzyTSQHiQuh1W58tkDWguUC26gyYq4PrbiqzyK1GoZiyNR",
  "key40": "41SzvwCkhMMuNNfe8dcASCrdfB63NWiNdjYRuzLB5Hw8Q7MXfjUzyZ6WgGxm3v6yHhwSnPA2fUu5BZ9y7pQLxYXV",
  "key41": "4CsZHMPEuEWy7uSSP4LZir2MPKpYNbW78mNzcHCDmdkjfHF6aRi5Wq7mcXEvf9xobtvvV5DB2hURdhvhjWm3HEct",
  "key42": "4ZD5WTeDMwwxU9GDnFesKS4dL92HBEXYDsRSQijF5MLtxQVPqRTjnhbk3JwWWk1fDkMbUvJJzpeRwagwFhG6YH4X",
  "key43": "5uNoujnedwa5rKiC3sfNJLR3GjCTffY47YZxMKL7hhqrtEZw1QHFw7YAWJFr9VVfNQStfkx7613mkaTpiBsr4hxb",
  "key44": "81ucFiUrNuy2YKZg5V6bqdHUhmjRh871SSRq4k83MaByMscbPLLpAw4nsXSwaDCWPbb4sa1vkFTdNvWoNrFATNE",
  "key45": "598UJmepLTmUtitmt178cmo1gtpJYFUES3wmja2tGYCbrkbiwSyZhzgD3GGodyhnVgKMGBPYNg4drTKyn3mV8YUg",
  "key46": "5sVCjKqxVXoUETT6ntNEP5qX1hxbeYrt4KE56y9MXfWrwJuEmmaqpRZ58uvBjXXZGTnL9titnqkmb6nxUC1vPz28"
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
