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
    "2cdXAz2a2cTRXUUtSTXoE739K6PAAP1qEyy5znKt5KQJNdjAbvbbfohvSejxcbbttieiy3codPWKFSM2BPU6AB9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bfntUpVf1yPZbAWRN7XifeEz8vdPWmrp9zu5KfxY1XS7JUw3DDTNh6PdoDARCfwZAXbVAMXJHGzmATm5dvespYU",
  "key1": "2mttFFBvF2T7c2BEohhjjYGUu31Bg3rQix8WgxjHhojvEiU3ouiVKBVHLVKKYhvJaBNyva4Hf4QEXG3Y8Zk6QgFK",
  "key2": "2iniDxBK5x4uNFRJULhK2MBbhQsf2SypoHqCDa1fuDj91t73CPt9c2sQVQAnVVgMyt9HxQC6QeG9JHDTYn3M5E7o",
  "key3": "5tCFMeqpbqqcAESWU1JUKDquNCbCDD9SVgX6gV4uB4hC3ZbRDfGP8cn4SDunrC9WH7UkWkjUWCk7w8TxCJVd1gm3",
  "key4": "4yECQweSiHwMES6X9HvpTL8GRUhvJSGWW46khz4H3Rnf1W9NrYfBD632tn5LutNopQ2mDHy8UvEMTvY1mFSByg1b",
  "key5": "2G1pFJLULD2P9AyC2hnuuUh3cT2BfBAAnp2TQzFTLzurfq4Fq1SpsXbwM2RMZQijrDYofhE1G32V8Ez9sPEbr7DL",
  "key6": "5mVV4PbH66BSDf6WqGuj41zTpQCfhMD9ShsTnHr4vvspSSz1edMXqVigTC588aiP4gcNMetpZZUNWzXBZGH2QCay",
  "key7": "5cTisdfhc9qik9sM1sJhC3nTSEMSQF1aKZSC9RdNwa2Vwp7ioPUvhWJg2VqY4A8hKG1mkXnbNpae7HqTP8XmgWSQ",
  "key8": "5MasZhD6vUVrp2EWu7xtDiLE46u5wkmVjjdC9NQJhLJA61piT9MLSBkUGAPoFsZVbVXfdJDRfE6Fk6BJ8EAzhWvQ",
  "key9": "3X5e5hszoq7K3vSL9pLRtXSC2QQ1np9QQ6UPfzfrCLNtmi6TTGF3m6Em1DkcADskdpsJSzTRkWAsxEx3BosgHvBN",
  "key10": "z7r6k7S94ANasVUEfzK8Jpt5MfqcUKf9SW7ZfySu4hRpXURdAuLwSNFg83XDpKsR1D3q7Hit5wJ27JLAFeLB3VG",
  "key11": "4S3bgT6CzqHwso2tLEiXTSt4kvWC8D7bRe4iuyHKc1AxUCmLSuWN8HnTex3HrLsSA79HJ5aaR1HYE8izwtVzCSah",
  "key12": "2BEKm8mUeDUk8oBAw4wnj4zzdiTdTVM23RRcPg5kyxQkNQZcUAoCewTz9nxAp7MEDBFECXqUutGzkNpirs46qcDg",
  "key13": "3P2TEzt4nSm43ZLzUTySiyxU79eP9UjdVN2SiqSVxyfDTgkJ89wCodLU7beCeHXVfvUgCTAdBbPo5miNWVJuE383",
  "key14": "2ZTwGX6C9vnACJLC1gqYdhFhGHeHcRuZFmjuTGPBfjdDzLW7DF9aQGnntPVbtYm8Bdo6Fr9NoXYUSwhSuQAm25R1",
  "key15": "3uEZBiiB7QiKLVq2XkDYQP8BTyh9JKckyu26Ho4Tgkj9faBqUcJUzXGA7bUVAQtfEyAQh64b1PTNBRmKQD9mQTVq",
  "key16": "PjCXHqsvK2NdRJqgTaGunCvBpgT66UPuN4QrYHNCbsZRaYqQtp7amXxqXrFVngRGrJyVcef4hqQPR24rRp6gj1B",
  "key17": "5qmVpZYduRCyqTFEFJh3F6b3ZVzstbwHJaddR5KX5abjgugxHuWgfMWyCVLAVi27hmbmdN7UeztbezCyUha65PPQ",
  "key18": "45bmB2gooWEnbnPhY8YzFxg7P4rpLH1vVGwscF9SLKwrF1dDVS33czp5icbiQX9MSynH6w7mcwtbberA2eagZH6P",
  "key19": "62951Efqudg5fEqJt71D6ATNDt41tC4ZQey2SXPRcLJ5T6YjQSVBwoyHSojBa3Yzzrv6w4UbYwJpJ4241Y8Zv7wD",
  "key20": "4c4ob5WViMCSguL8G7qqJDsAtANxT6sJBgssxihLnxVXsjkBxteJ8DvdCwQCzehk2q68pYmrvik5xU2KQKLqaaJs",
  "key21": "2bDqkue7uoaxL4GB5JE31DRR3A3kEqRDouCxpvQVFUhma9WVFUV6RFK4KS5hEHcrLrrBz7yNEyux3G23WYNSWkk6",
  "key22": "3Sj5CPgyEeDWscA6nuDWbYW7nY3FhYvvVioPeVzNAuKDo6hJHKwyYofPsmNoPTZGhDAa6orYsCUjU3bRGSntiD9C",
  "key23": "4TxStcLe2QUiXBN12dcDr1XQ1JpDWFp2RXVgkDfEKk38byBR1CvKar1Sn27Jn19vhzWfaTCPHTMRogAQqd6pT9Cv",
  "key24": "3qhCBqMtACD6qPMix4zouavU6SFuEuPdbXN7VE2y1ZCucb8TV57D5mpr7dvdjpG3C7CN5DqWTyeqtqwBMf3HDikr",
  "key25": "49cZ9U13WWDwwD2mjcpF6gwMHBUJ3cVikpqbRW9zrVpuFWBbC7vzaSnfioLbxEX8LTgYdp8fguCo4zj5NqPhUXnM",
  "key26": "4QypoSmwWhvZgRwTS7PawbBXvxbUjq18PyvbRqKwSnn26krds1wFwdhL5bqVbBKNY76nBTPGFnVdTK2ys4hpGJgS",
  "key27": "227vFnik3mKJLHWvoP4iszeBjnGM3wrYVXTmEp7uR5JrHZr4LVXqNpiiDVX5wLTenFHv5m2Lhw8WdtfLy28nyZLS",
  "key28": "jFZ58p6gdPAF1WCGdJh6tS5GV8r5QcSoRvWTdcELFBYEcu83mF9Hcqb7KVVktB23KTDq4PZBwmELEz2AJc9JRk5",
  "key29": "5Ff6bvujxDKtFDFVC6RhrsvTpvyVUXwUQoMkW7k95sMAWKUvyhXXmv3TAUFmpCxa6CV98p5reG1pENL2gzkYrZk2",
  "key30": "4Hy1miSqfVSvc86b5XT4L7a2WgcgjCZhSg2hqxfMrD7RGoBQQqjZL7FZjwP4BGRgaaiHVGp2m2zZxTmC1pYqRdCK",
  "key31": "3xZcoMaHHe5i32dkDcVrs3xfrr3DfzmV9RCnyDMGKFCtebeyCUA74FgH4e64S4kYXLZ5gjB1H1xQsaW2gwFxhGvN",
  "key32": "HJksX2eRc1ggdnLcD1oDuL9sR197Ynv93SSp3R2UhoYunKdjrXmf4RuJt2Hd2rWJppymYTwxLeX96tiBoUhK7MB",
  "key33": "8GLB8mALtMcjypJFA7MbWMnmr2XaPqBNkkGcqJSTNxNKsKRmn4DMgRuGzYL2KLk5aXSishfMmZJpzsk2DcC9Z67",
  "key34": "5N92nthcxw83jFxNyCgeXFbqdTWNBTZm6neBnj3a9sxbW8sie3h1zkYTMtQd3UDrpZUmTckeyqjvxVBAYS4YZBWK",
  "key35": "3Yiha9hTmxUYeFaKU3XNrjRgsciy9ngV7TJfw9cRRYwWgYrWHjj29b4dMqukiX4wq3Vu1crRmSEjH1sa5nGraxrA",
  "key36": "2q91ku1tCgaUjwhFboQVQcZcq4PE2may1uTv9xofesumkQCUUr1Lw5PXY4oqdoHBi39mb3bqrFV7jTNg9z6mEDJ4",
  "key37": "3Tnuhrc5pJEfiuGZ1Y4Uc6wo4G4nA8gt7y4tvFUiGQ9kxuxuUuHDUp97n6KWdZTbgy5VBCRr8eSWybJfmHBVGpK8",
  "key38": "4kDV7TQ3dCtm4pFC2Ef7FCQsMtaGw7Y5iUtxQRTqKnCMrD4qQBjFWLDfRD9c2VWYW2aBvEKy5kiQnXzQJJbtXwpE",
  "key39": "249GXT7hauAjQbMDRWHoENQv2F5211YjuHq16bVnEKLoY4JmkjUNW4AmB2x18oqQxoNe7Z9qK2fqkgi8P9Jy4XwK",
  "key40": "7ahwXv1MzycwsM4Tx1mgyaGtchybabPumv2aHhyT8XGFwL5CDhJGgoracovcWa7GqBjFoSPS2fcCzVDT3sbL9vB",
  "key41": "53mtM1GnxgeBAp5kYk22Kk5efBnNzCwfnwKQfxEmbfpdGFyjaFHtdE3AHANZbDC9MoVhAA7s9jgbjxnLj7QGohEZ",
  "key42": "2PvY8kvUdVV7dFPEF3FaNCU95bmZ7jJb245B33dt4XZ4JvktpwGzrrd6oG1xQ165mArW5ZYEBvuRiMD2YS66Gvxa"
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
