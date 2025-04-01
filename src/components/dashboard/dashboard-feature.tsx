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
    "3VzjUKYzFsv1B9TZ1WX6YdZRefRSGQD6VFubA1MS1FuPmGmBuTfdRF7ypJPehmr4ZXb2DfrghY4RdNZPUFvjQJ8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jSdWL92JshwAQXYyGNiqn1ay1FRaBzv5KNRum9sbDXHfKDqNvdjTrFVXHCTU7AoXFQDG4NLMufR5whGyP7M8b75",
  "key1": "3tqonmmM9ZYoPi8YdUp8zbuPQ4Bcx1GuYVqE7CrQDBnfx18dEVthy1vQj1SrDLesrXY2HGSjJqbt1QRHxiYCHH7",
  "key2": "52i6UDAvJccKKszTPj89SSCN472FFyvJYrPbmZLzDQbuJwqrAQjLg1gomVtKmzC2UQ314PXBBgQ5AtMkiY7ncGGN",
  "key3": "2SzeXiz7ebwfNnhVZ9TyBLiSrvWWKMrUaedtuRDh1NmVtuwdouqzRxW7W4vLi6kf2ntD4XnosBuL5NvWmY6p3z1n",
  "key4": "5BXSAG18t2gPdKSucHJeWD7NEK5pzPao7SnSynBFFoJCLNpti4ZkGC5E264fpMoivehueWq8DDL9iCFZqgAK6mLw",
  "key5": "4J8qticMfqrjJw4B2CDzyUZfCPvKqD64gVVMUgvvTJpsd9BMHzcgA4yFxiKa43dppgn9vrZXy9BFEgHmovtFiEAg",
  "key6": "DQnUuxBeGjV4ksAwPAC7yThsotjUV2kXVgSgxAcQtrApf3HZX9buvHb5GgTdfizPKkH9ykPDvqtSMUrUY2gQR3d",
  "key7": "47MqbtkvxJytQThr8J437M7P5j4niXxuJJvshXEWQD4F9VrY7zPEURkpTHUDKDGmLZ3zhh8bbJZZtpkbzQLHG6VW",
  "key8": "4vjH1WfAHm1k84bfgAvdh33ZaZHZuJnkDiXga8aHXNtQJyan3Ki8ULL1xSvSSsVMzhdCByc485mP5RK5f78XpqUb",
  "key9": "QWcnKJhn9oWwWbijDxfgntUqeJ8Ne6Q1uzjBit4XU4qKPgvcBEF59dR2yRuR7p7qjmA1EyRmR14bEF8Fo2Zx5nz",
  "key10": "5dALSAa7xurixyTu5hX34mUuXeQR137WDiQBvHJWVT8FGDdGsd8ajdMWdwpDSNk1o5mHhhjPUMpvRMjBcRXpTzyM",
  "key11": "2CHmxoPHcv21ZafDTe5AsyMYXAFGuYgNZw2TYyFK1GcczkTMU8oX2fZCaKHjKHLU48q14ntyeoRA8JZVY69EdEQv",
  "key12": "rSJ9yUvuxVwPzkdVRRH7PmkdxuWhxCWvBUieYs4WXNN7oN3No4j4jsSTVngBU7hQwnGSta557vWLeBe7G59eccT",
  "key13": "4ZTmcesUyCV5dHYcZSqzeQ43FDUuXgvBabLJRnCsJyHUcG5SBVKaM1hcZ69fP2Ymx17LMsWrB8pTQScZSy484qmg",
  "key14": "2Pgxi1EFmG6swGq6Xg9WT3XzmMb997rp2asw8Q5ymHMCEHjsvmPkttMsNoU3PvsYrHGbRrXnat2iaJ5NrnMfc4W2",
  "key15": "4N52tLUoTcjUuf262SsWW7ZvtpwFYegvLEfr9mLBqm5AhPVt5vjQuSA1R3rAuqQ3bV6Rx25bsXPCpNDAnn7YHSq9",
  "key16": "CiXAC9LH5kM5bm7FZcFeUT4MuYoTDqApthKZbX36yBH7q1R7RP9j2v5t2rmFJNzvdYKiZjH1RDGynE36g3nuequ",
  "key17": "3N8AKBXK3R48DGuoqARtQoPs728mu8eX8Ce3YZkgFHpxiB7Sr5ER2jWvtgyEMe4kkkq8DdfNScY9KJ1y1VeaNiBZ",
  "key18": "3gbt75aejSrnfpvzK9upAxeZdpudrtV1PT9aAMXTePFTTkPnuup92SMJFXKZVoKpXTnvHxf7wTdviKdWtrtLURAe",
  "key19": "66pM1Mxb5VR4atjQSFkA5eP4A83HoiJf93DzT2urzCVt5GLMVNuKBnwQSB1424agH2F7DV5mdXiVSkXoPni3n1D3",
  "key20": "SXHDhmZ6K7fRtqUYZ3EsGKF13wbbrUoA7BrQcUUZSiaEfiqLB28jbmTyGHpjnKV2dhxFVUxfPAKzvgSHYkvGBpo",
  "key21": "Vq4M5s5mrgpSfsg9qjwPkDitGu5tXTqmtJXemAirt5EcURLpeXJPTUyNbCHyLj1G2NryKPgVKAcSQxdEK1ngicH",
  "key22": "2WCYEUejrfqYnNCtw3rLMRCfGvcnR9Rccb3uwsPekzrJHAxGcQ5wFWRPP7fCZRjwHw5RH3BhurkUcQcZ4G7WXjs6",
  "key23": "3BiKLBTxvA5RAaiHF4XPx5dA2adm7E9gYZBzd6dgrCyLV8CPC1jbmDYstFGNybQhJ6SnyBfek7WSCU1hp9roCfMD",
  "key24": "4qp2T9mD6acmaVd9xrSgD7chpdbrrxrALyYZNsqoMfsLQaifukPDgXCpxUDQjiMhw8k8o8WXTkUm4XrH7VrCEXgC",
  "key25": "d763f3Tsq83Cv2K9SPRDhJ4qg4FPSu3W9onYLCcPSNp5mryoseQb6i8u1rcSfp9yBbsZB4FDUpfMCaRUmY8SBKq",
  "key26": "2E3uv9pqCrCh8AjwbSHCNAXRdfTVyYGbtpQrpFopxrh4q1yLpTHvhfHGtzWCshE3T7TwVd8DJFz7vMqykHFmz9YZ",
  "key27": "2UySZ393d5sgJvSGLDbXqE7MYtAtgFex1LKKG8k5eaPufemf35ou2EXcPobepWTakUcydPsTuM1jvLL1mBU1YX7B",
  "key28": "4t2pJHW3ZhSygPkocx4NJX728bS4J4iPCpBChYvAtDUmYdJCxGjQdUAdtH8vmFuvhXrQNCt1SvN6WaZa282Hz94E",
  "key29": "33UBMCog78gVMWSK6DaW1KArfbZGYyM65d46SntUtFtaQDXQMYdS3A7aLsQ1XxKhL2Ao2sVQtF1vphtAo4E4JfAN",
  "key30": "E3y8ffMLURpM8hvx6fW9xGMYiS7EnHHTBgUcB4ikiUfPmFAwfwsXhh6fzFzhuxKYhmd4kmc6yhyLh5xwid1GEWm",
  "key31": "2vP9ogBk7E461xbNrPz8L9nc7oQbRNav7jyppuFFgp3heFDe5NFFwuKTR4nmc8C2icgpUWQMu1k13eaxkCTbTpu6",
  "key32": "6pPEYX7dBuuBmSDGzW3fHhfTRTR3gDE44eWFKRakwGAiXumvYGCP4nnRDbFSbhrawBG7TJm9XAPfQPbWn3xmU6q",
  "key33": "4Rm531xyU6qQSTKDYu6AxgE1qnUmgEJ629fbFJ59iL1SPc7afDqK9mW2N39xshQSgiXLVrHDbWfbZKaLLkwsi1Eo",
  "key34": "2L26CMWoSv46S88BAvhPWJFPjr6XV7PR4BDD1wubVdVhbMvRmSRykfU9r32NV88FfwXtrj9jv5MHC7BXWsZjRDAV",
  "key35": "5YPBhFHVSwiNeB2EbjxN6zF9YiHkezvXy8iwbJubRgG6c9cSPG4fT5bgzdD1A1NFhDPKX2ZsTYEgrYFJdqCK9VsF",
  "key36": "671dGFa7aHiBFrdM6W37pzCGWXbJmNpHNmXHziBv5nAA7ydynEXCXSiTHnxkP47Dy6b1c1efJZRSxjRvVGH9J6df",
  "key37": "B2sMTixKgkwQR8CDbs3LW9w9Cf53f9F1riw1qZ8tLHkS2ToenULcDK1nQxkVHC6XsgSazDqu2yhNVhTmzbtes71",
  "key38": "qGucNN14E3W585vqUwkUAf6fbzNn57JxMeTQptGgKw68v3H3gNmBkSUphGPifvnLXkkUweyAErLq6nUN9PBXeEg",
  "key39": "odsDXSq71BPEyxZrD9Braz38Tvc36vfxNg25vsX4DJnaiVpRMrJmZs5zVMQp6xu3uDTLLGqSPEVjgxEEk2LjBMk",
  "key40": "AsLNqJqzxG8zPxkq4uR5pBpx6k6iK1pVGwnAqoFZj7c7fXANtUG5rzsQLrC115pxZykWMTCtqZt1hEJCwtN2i4q",
  "key41": "5mcPeK87shMbbTmxiEcVfwSvSu5wDf3Lvm937uUYHJLwByXN61G7Nc68YQZ25z2tFmhyW8ugdCve3QEHxmeourHC",
  "key42": "4453ABvWFaudErBjyQZ7UrQJxu5MnTH3vBonsXaUqo6Z9cxE68PRs7fqe4G3oxUVdnq4ktcaiyDQX687LmNtuSdE",
  "key43": "s9iFbfrtszeqnzp943QVWxs1zB3vA3jH8taQY7kW3uT349VoBKCnYyXdCQfAFZWUVrkFYtpHo5EPEmtx5pZJ8iZ"
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
