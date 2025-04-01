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
    "3oPe6imxGtd13DpV3HBtqBPASdB22oWJY8fmQx8Xt3ZJpRp2mjk8oM3bfaF1JPurLdxm3cYeCeVNqQpuFrD9xTdQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38zr4TpxdhfCXzafUnWpebTiqNGTZ95ZY2kPw3imvVMk2odfdPfMzJT6WZs3tqDYmZcKEHpSEap25Lw9vozaGTCZ",
  "key1": "RgQQNJ1vJABASZHLSDiuFpFaqnPeF5Uux3obCBjBAZb3HKwJxh7f4sgfX1HnJc8C73RswRq1bGcH3i1n9a2TyYE",
  "key2": "3fyWK3DEEQdHwWtzfpAYoMSkNnwaWFACs6oVi59Zr1S2CL3QA18hTo9RECd6znTZJ3pgPYcj3tQ4PphKzhYzuTne",
  "key3": "2xBTaF112DqevHSrw8iy7bJHx4jjngXu1L1qbr6YjFR9Fk7ow4oMpxBChixptCiWUyTRi1Y9GMZABhD6k6fchEaN",
  "key4": "2GmukMexsXbyGrVTFdzk5Rfvsv5UiMTVU68HRjPC6PwguiXgsdTi9HuBWuDhq5mgb7GnatBA66gPCqdWJkx4aQRi",
  "key5": "5mNH6dG8Q4zQDy3krJrC3HMru4uyf16Vi72R3hwUrfU4NzeweYHaCCHGoiE7EfAJAbyxxznSWfjvrK96uGiXr5HB",
  "key6": "2tKqbsfT2jgtzScvXhe1VUJrezyxAWeQH2QcR1wSGufmMNPXZT8exqS33ySAuPB5HSC3tdSCPqpQqViSfmxJFj9d",
  "key7": "2DQ9RTaNEi7oT1Fiy5ec9eo2C25UUujE2GS2d9eMovoDZzPQNCGbNfFcxpF9Zt1QrYuQSmnvaRvUDFZoFFxw4FWN",
  "key8": "4inidc9ppsEKv5Pk7JFWT63Sqka9MgqPkqQnU7nHzZdFiVSPsQRJQhqCTTbTCJXsXd9af7WP5pa9Q4Z5REATqwd3",
  "key9": "MC4jRRuJ8Sbf9uMdoHvEKvnA3xaLx6n4Gg1nnGqq12vHweWXPEGxv1zVPkW3N2TvchBTZ3xtYLXnaLTiyNHvWoA",
  "key10": "4z7PEmseKTQRvSKp4nXD8mDxhu2PNWZ5ecUbLFdLFYCzN32rxTYWSbvFtCYYaXFPLMydxm8Zh1eBdMjzsDAqZfLm",
  "key11": "5iLzk6TvUDEiBffYDPM246gS97LSbCoUw2f1HzkZLcx93vzv5CQmhF4T4bHFQxXz4QwKbP99KFnWditne139MYEZ",
  "key12": "5Cy3PQ9CGaSupZMpt9d7TA1oyxBS5Ttg2R4uCFmxAk66dnYc4vWNwiRGCrFUB5okNqYCYSkNZAP8Qu5NgYQtfoWY",
  "key13": "4UCtxLbPVY7VR6xVELGHoJiuxSDWefeJxnPZj3D1cpRRvrpKYnuiYgoUjKGcdiKXzo9yB9iuqmcwf15r9Eht6foa",
  "key14": "5QSjwzVA5P4MFX9x7z75GpTs9pKvQxoyFzTFqJrWWkCWpwgf939hcxu5kwwEqPLZ16T65Q3f5hCEYz2bnNaUFkuf",
  "key15": "24KiQ2ZT7vYXyzmMoDtDhJT7CuigPD8MttSnRWmq3ZPWLrWWNZQmEKTXbip7HGEk9DpgENQmAVxFNDSh6i5HsJUb",
  "key16": "6DiUEZq1B8oznYHhTWTgGhM1vvgtxbrQo4LWDk56e2StZ6HGC3UsnWBb9dBdbw2puCuSUdAQBa7DmyiebVqJi4S",
  "key17": "youZUpsVpX21WWTFQJxfFRSCQMevT3mMEXfcJb6gVZb9EUKUzux3M4svRLku5PGKs99s4yGQanPnQnpHkLEyFwL",
  "key18": "3r7fnLjp81NNbm8uPjwvyRynK9pM3bpBzbUYeZTy1SLVKu95jzYzJ7RTiWJ7nfRuUWeycRMGnUe3SPzx7wxFWUfJ",
  "key19": "5PEhVh8ihzsiBjsZzFowmQrr8AMhVdGeqxuB7G9Mvu395KFzYfvtHwFtgYbmzZQx7FcZYWhWf9usdtiyrCWmTGLq",
  "key20": "YvJwHiJCkomkgsskEcF5RB8w1iPaY9SwWKLhUa1pJyqqRHyRNRnCpJkemw92urqBLFkk2hkbXVDqfYV2uDdJKxf",
  "key21": "2o2KZjHPVUirmVRZmAKRq2acM5oxU7nVsdNfq4KdYdTvHXuKWqTKBhLtFZykBcsL866CNRw1US2414VYwj7Rn6fF",
  "key22": "2xE6LXoS8LLeKXsoZdLbGDcMD6EnNPTp3mWyXCo58psst4yb1aYNSrku5EDZqtthhj67CRenEFPb6qBAtb91pbJm",
  "key23": "QPoi6cAV24PwPzKxx9UiHsT973fM8bX7VbxVJLCyTXcCL9Qgv3nJuE79MRyPt6ddMRBLcqQC3GRjibcQotLgu56",
  "key24": "4gHGjX1ZWyie2yfFiC85Z1DA57B2CLYhcGH56U5pTX4zmZjdVSHbFo1YgNy7gaL91RpnJz7B6iRrMbDT4aSuKKyZ",
  "key25": "2QKpmVHonMJjD6FLHB4GXx6mwY1H3JGSf5Fko6DeVXqtjf8qm4QHXSDawQ85aFxwVYVbhyPt7dyzh6kDj1KWAGhE",
  "key26": "4k5Whi6Mwx8HuhhQYYR4VeFWEC7JNxAuZk5WSHJVbsgQPzkpB8ZWLHFLy5vB3n1x1Dpu79UrqmXC1FBfgFRJRaRm",
  "key27": "xEPbdXiCM48q4MWJPbuuKRYjo6fXXZxjRxnttB3a9iiaJKE2bVLs6H55rDj7QgM2dcx5MW6FfkkXC7oWMBWWEvi",
  "key28": "5nFmerGeCUUM6qPAfqxBzdw4SBbqaVZDfyDAE9Wjk4krE9WnMLgLgSh23HsQGNHca6NRkf4i7FioU84LbSPrQHEu",
  "key29": "nEKVE4ipMoTLcbhJgW8ted73Tbxqa68BCBt9yXyQB9YtmQP9jYG79EYZnoafVkJSZ7zweEfsR1pWiWq9yNrUvbk",
  "key30": "287UMTSufDxBZRKmAEGhGeRPwsou2pSLc3nVB1ANFzE6bEV2N2nqSSidcsGAiMLcwp1urHWPkzsTutqh9AVBEy3q"
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
