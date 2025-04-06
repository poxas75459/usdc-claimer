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
    "3kT2U7avrirsT7qquERdhME3maYZ2GtHAqLG69EhXoSm1zCPZAAwHnhp8dFXrVhkMavnDzZd49EuvaaHDWYErjsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P6r8rbKe2j4dt5FhoBw1AkYv75FVQEVTUEzExjEU7ARB6osGWnmjVAuqntjeTZV5QM2vW1F4qKEqSKre78rXVaG",
  "key1": "4UbwrgWM5SNgyAm5uP3g1NvZE3aAr4ezTN1vtMZs93vRgshVCiwC3FA4LRztGGtGJ7ti4wM9bCajnvwJkyG7WRTJ",
  "key2": "4eui7NSk6iz3Gt1PqBKghjQpeEBjQh5cL336cj5UTniVtXEELyXjjyM4CxEz3mZeFWVHdU1tYZNFRPhgJxx7jsqj",
  "key3": "3WKshc7Dbe7bPufsLdDEXLxvwWkVvUSwVLk17Ns54nc7MeBWQ6Yn7SBNDcCuzf812uyQyzr8dJkpxJW1g8dp1gph",
  "key4": "4poDvr921LC4WtBMVKCqxNrmJi211mXY6BCbPpapSq9SWeJneqF9mXMec1GTgi3yRLmZBqpGH3L6h3MWfHyMScpw",
  "key5": "4FuANjnkcLS4D8N6hk8w4TDb1TH2nT4L4T7dQpMFJgWz1DPSbjmJzu6vQ8YN9Ne13fMKrypiPHwnJjXEK88XF6xE",
  "key6": "27uHLLd3EzNEe95ZF31SnFTy6irJwXHvec2EnFjbcReHtRVhRuZAd7tugXFjvhiMnoQqSHtee3fKKVtCA4HVbyYw",
  "key7": "2LosVPdXQzZaffYa8fCSo5Dt9y6DRR9ZbaQ35Ko6NNpNNHxZhAGGk9gVhg4b3u5XXRNWyW7wwZeuREHtUT5NUZhH",
  "key8": "62w3umFJvFqJFPkkWRGemq8LTh8DahtP4gnmhFYk2Xob31mpGtbgzVVpeeSJyEJBqSecGcpw3rXYbUXTpuMiDPx5",
  "key9": "27K7eQbagqhZCZBh73243NG4K3qyoinTtuy8szrzwvVoUo6zoMTMA4WX66tLAmRLsw5gATLY1NHN83LaQDEaAze6",
  "key10": "3At9xZz7HrDq588jbXFHQ2inkDFjN5BeLYdBqWvUTTaLmdNFmss52Y8h2UouPDfvdKs2aTAHayfTY8YjFGHhWPZZ",
  "key11": "4VG5Ecea1cbb2U17bNrW5i5hS6Unf46t8NzYz1n8H9smXPQZDHpv9EbGhobsWqYfzkwrBKhPrPq6xEoKL8LSbz79",
  "key12": "4Jhbs46yX1o5bwuPix9Lsoo9qudodSneUEEPx5UB7EaFjnmcqVK8avuWSfnwNaSoNZZZa61HcZfwrsfquPEcyhdC",
  "key13": "59aka9b3PUn9SxtAbpGNyDR82dL2eb2vyw6ft7sDCsYRp7mSNx472VBw1ck9cs1zhJdX4peXTmdrdrB2mPFvfxUb",
  "key14": "3VDXHbG4kRQp7Gfx9hZeYqKDAiwLyhmGfd2c8BzGb7CPnbhvzHL94dhd7dT8tAYyKdX1A4VEchRYuQSqrA7bXivp",
  "key15": "EBJUTeZ9fnJaiYQucGFcwaLy5XZxuMKicy41mCzwXLFycF3t8MsczDSQbQDCGXLeFqDgD1StqjhNS8wzpkifESs",
  "key16": "e9vibVBHbYC2NS7TX1JGEMtHkccKPXpz2BjZBKW54XKt1Cs1w7bKkebiJWLpN7EV3agNDKqYiTpZiCW6yjSuMsT",
  "key17": "2roge4PA6FaSj4huhmu7EStVmqNHyhsxc9pJj72VJ3J6VmJkgBVkDFUaXBD42Rc6Lr9Wd3LAsWSvVxYFWtB1dNff",
  "key18": "FS5R5BmrYTUCBGTRb2ijwU7WKLQRYnzNcd61mkwtJFepq5b1pyKsbMu42QbrmgZeVMLnT9bj99HiWtbfokM3njZ",
  "key19": "rUx95WVWM75b6nkEuZ3kpb8yhMrvkCaeUiQTso2kEeKdZMTCUQjAPsZxJhHvwA3mKb1JUupv9waJEQj7EFM1pmk",
  "key20": "37kU68nGHQmFejhskEdkQgraikN9g3FohET5yULvcPX8uCnzmH1bPc8NEdAwPT2a2xkrV9ZzGazMkkdYLXoA7xN7",
  "key21": "5rA7NUfGkEcLqcvoBz3rPcMCnvBo67K2xWqcXkWEfHcWeSW5yG7thaN3UMv6K5QVMd1VCeRVjaaHWRRuGQ6SMEg7",
  "key22": "4C5kh9Ri5vt7N5UGsTQeSXY2234jWkFXg2vAcZEVUQkSp3icJ4KiNAaxRx1uB8hX1DLYg41LdVhwFAwSVpmtG1iR",
  "key23": "64mBEurN8SNYan5RemvHhwnvLMmM7u7Z8nXTRaohad2o8SdA3Mpx7nqtCnSwni9R5Y3eU2XVMSyQFfCt1AoEASHr",
  "key24": "4UbXcJVueuyJ7xdd64gT7F43YDXMTAG8kxzEvTEKhwa4WbtQcFPxenxUQcFzcpbDTRms1UTjLbatfz8EkNtBMyvM",
  "key25": "556KbihaSkHo8NeH8usreenBhF7t6ikmKHkPcrW2eJXeUELaxhoyEwdKGCeWe2Nbc6xp9grL2fTyzfmEQLZi5L9T",
  "key26": "3Ayi4hAfXBvWAsfDRrQRCPwrc1CK3KWL1QMVEpqSVu7JV8NsL8BGUmSvBHa4UQsEwcKJ2qmqcAmW1PMmdQ9cuy75",
  "key27": "79sZ38TCtyMxWVBHpNEVujJWnfTAsf7NakAVh7gBSoad5pcsEGiUKqv2KeR1YvD1modaNkqTtHbTzBibo6mpXMV",
  "key28": "47BkeXxne1AF7MuFVjWg6HX2zgibtps4cJfFMZoyGLbu5JAof7FLwGtwsduZvAoDpsDTHo7qesW9N9b7qp3eBjUg",
  "key29": "2U9PgqxbBLnGDnpALudgdwuZzJTJqEjMP4HDgBLg2r6QzAywPzfkzaQnLVcZ7jkHj7iEsq7ZVRm92SWpUzsrPRpQ",
  "key30": "3RqbnZ2EgNC4BQG9uXxfnmWiW1t8BqkMoF6u8VLb17EBAN6mUufc8xsra5gKjcU5hTk8Ehgk2Nq64y4GzqXCmacC",
  "key31": "Nq2PutKZk3tjazw7nprCdZA3fX9XgibVLbzFuPJrE8s3aMj8qmVZRLT68a5aJfc63NB22fup1SJFrxbYdv5yzja",
  "key32": "qmN2XqEcq1eKGYTBSuh1oTyu5JstdRpDAcGvay2GKZctCWhehViVKkwZu84j6YKZmk1YgTnGSa2ugTm7YLe4ifJ",
  "key33": "5SJgiaCbZeypWBGxAxX7uFu883Sgpwi1zZUNTHCjyJodePaFpx6XQF8QpSUc4UGxdpr8ncWNi3q2MXtJSpddFG8o",
  "key34": "4PFCCY7gWZaUFJcRq7fHvkRCMk8AM8MrwhF7WQ87ecSiCi36nBuuuKQCNpmqgktXtV6KgznK1XukEteyixodiB8Y",
  "key35": "3SAfte2m7fLuUAh5RWjdnW9W1sR3qQ3FNwcFpHbCuykipcRaw4yXpzpP1Q8CASpggejxVG8KPB3Ntthm4Qg2xpkg",
  "key36": "3oCYoe6S8Q9MfiNaVDaGRqmQjaW2TzANs7CbRpjBWetKpa1rcksbVwi7AUZr4qkXAzkgjJ2tX7qCAhRXh3XFKJAQ",
  "key37": "5rufYxw3fVG5YrN6LarYcieTFUxknFQE68nXcGuCMwFetE6F9Zcc94n72mjoXDrjWByCvujJWxs5MkS31fVeqnYn",
  "key38": "3cHu64GTwBPZTtXWZ2iZEMZnkNCS6Pvx8pPXX1Xe3iqyasD3LSB4i75kbtUZsNw1jic9SRyhA8TsidQ7KHBZ9QL9",
  "key39": "4vCXCWSrAZKEQoyR3PDhyCEhfqHv56atZNBsTqr2uvxgHHLvFLoXRHCFcCHC2ihDu1GE5VunCGFUXuyNdJYFfvPr",
  "key40": "4gyFUjBekSzHwpoPKftUhC1PD4NtfBdKdaHP577F43WE9hSUEKdVhjk6Xpm3x3tbUgSe6txg8ibkYjun6giYTMqQ",
  "key41": "2A1eJgJdCBoqUEQrfae3KJuemDCoGAoYHXo9JyYmPCdFJiCHZpeVDUoov1UxZcq5Jg3jGW5BPZK7TTtYzih26Am6",
  "key42": "1a2iySXEZg7hEKCX6w32sRKZgSbr5VanK2rvCcmAp33oWVuCAqctNfXwnUzDFdbAF5pAEh7dMDfVevL5tYaLtxM",
  "key43": "2rvfNGuy2DNK2MviwtvwDU1SSad6qRFF63sHXnzfRpBncu6EfzEA2USa72k5tL4nxcveikMBDoHFoL52Eq3GKxtL",
  "key44": "46nFPWoxyXdMmo4c55YWobmJWp5XzvXYP7je344ALs49QYecLbsiFzLHctYVK4RPFKmkZ4g5gzwqbE532z96g9Ku",
  "key45": "3poMsAqaKU1BAAw4x84e6Pe9qhzmTJiV5P8Rot6Je55FcT7GuRvpubwGttBkttopnJKvcHLPunmS4SmfMHt2Bwt3",
  "key46": "sQpEWARDYdaeUxeZN89ZadLr1QUZW63Cpn1Dk1BugdzLudXbakZK2m3dQrwudqAhe5sNVjYVR24mgKpXUZ5XQf3"
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
