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
    "4WBbhc5zERoYmiDqmUZTpR6vj5YxHrycaiqEoeptyQtqyAJjvyHRUqj9tMCaGvLDXoTKSmtuXuMoNu63mFgecPtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vVxhmAbUTvdnXpQ4tj49AVb48UsVLAiejWpSPfRVk7k6gdHMYT8uv2E85whemrTBSsM1xAVri9RHVDhQKdazVQN",
  "key1": "5R8vHVZ3x6WxZdy2f2ukTrkbFmUKQypZrE1uhMDGfHi4WMDCn5Sx3KoQ9pwVVoCFxtWrzUdVATw5wwSUvmnekbjB",
  "key2": "5F4KBYaSaoPCwLQP8mYmGDnWY4guMhDvQPHtMQVT3FtXjCSCLveJLdErRk6pEyvdLYFeug1SRN82cfy3TvRXdS2z",
  "key3": "2usRY8uV2wfvh6nNA4TjAjWq4X8XrnfTBz9bCXNWPoZfLbhenhq5ZrfpsjBWBbVTuWZwNCCrk417w9zxJes5MSaP",
  "key4": "4aQGe3BEkuCf9trxfjjMnJteCkLZwsMrej4sN4A4aS5s2iEyUCTxY6yY8T4Nk8YZKnCXAuJTUCzkZLEYHoQJnmgW",
  "key5": "icq14iKakBt32sVgJFjNBHRDyJEG5mkP8MA6a17BBbP1Uh3mMBTNuZFQpjfM7bF7Q3XbBYF1yXX9rudabPcRceA",
  "key6": "4MZdthPJP56SP1fnPHDpPHxNmBxhaWMkd6XjchpRFHEvafy9qbp3fGfFbLowyQCvELaHo3jipnrtfrM1N9QEGuTJ",
  "key7": "2g91iQPF1VuxFY2WBeeSSXgb45foyHFL81GdMYmjz8BP1o5hM4Pu4uw2Ua3o8v1eUTBoM1u9LidXgGDoymB1nXjx",
  "key8": "67CxzZNLuXsEFgj7jXCpfQwM3Sy21yDipdL5AZZeJgEEYfPXJs6xzxYaZPAHtHde8ct7KthhGbNaA3mKsW6W49ri",
  "key9": "58rMFNE1145z1GUofRW5Nvf19GHzJKGmGdaw7WZLgn8FHMt6r1bd1jw8p2pLbJd7LtzZowM2ZYBr5wjiRpk8TNP8",
  "key10": "3zFbpahEjrRGNx6yq3cY9ckW9kWVC1dyZgsC8rNydoDT9EYrrPRAVWA7djBD3VX64srR25wWQ93rs5q42qj9qys2",
  "key11": "dRbdP4H6ofJp4cEFpsEpFYmec5kaAtpSckRmByQTBoPogovaDVckTYFL6uBCbwXxjpNGjHQPonb1qDvDc72HMSM",
  "key12": "tz1CuzEpoTMQjqukAroc3wPSBQuFKnJric8QjvfHJCTT3Kjfa8otnKM6Rg4JzRQeE27umrRPBwXMcSJHiRpM3tb",
  "key13": "4vSUdMxQhf4ooK1sibENEEo9R6ar1a3r2VFe2qoisQ8ktXewiSu7ZwWqfxkrj6nkbaBBxdN8dLkuy8B4pT2apx1",
  "key14": "5ApEcJcHro7chtTPj1V7Fq5LkhxrVkoxbMP7FXsnNPhwL2mWknoKmNckhCABnRYZ437RTizNkGCa8mXMepCxaxKy",
  "key15": "2ANmDu8aTCcQeGbVLB8eJNnW6fdRwx4RRLeSdG24bBkWGYMpk7XWTbpx2FiDSEK9d9zjLN1N6YTuQAshbhRraR4D",
  "key16": "q7YKmLsQHMsDeFJr8PiAUxVAA6LgFLVFpudpWU9mzJUvKyS9CrkvpCx9ArtYjJiP9wXZiUypfR6W2SCLGnd4hq4",
  "key17": "2EG7PZNfvMuLhtmrLnuyNmLQihPc2jdz3jyp6t1u1PKDQacF69WzFJ3XwmkA7M7A5QSHmCGin7zHqMmHAgdktdRc",
  "key18": "56dEhN5yqr3Lr39tXurd7UKvxAHiajUVFLUKmKYaf6vZfx1sPUYLMcx9RWFjPbj9szPAxYqnEPox6yNGYQM1iNTn",
  "key19": "2p6oM77zx3pJUauFrhTT9rZ2BzASzL7YgpKq6FeGaE37ZZs7UJPyxZrp1L4fc8uP86NrdsgX7ud1fwLQjbBDfiZ",
  "key20": "Er1VjFai1GPUPAdUD6ZKXJmnFaj3zs4iqkdHstTquCu7EiEfxNyTXh8AxbjHVNeuC6p3HhJFng1Dm4BVvEzferA",
  "key21": "2DyJmm4RMFUq2aQ9QAph2A5iS4rW8KwmGAhSBGafQuPEAAoysQHxr7doevDbD7rCNSkvLtEausYR7QiTXQGmBkDk",
  "key22": "qD8rzHv85jM5CFLCfPv1vU1v6pJ1V5pBHGA3qty1aBCvhCM4HhNdwcjvEVpij5Bmir1S68wiVaz65Vv3VD6Ltbn",
  "key23": "5BrGpCm1uq3fDuPChTKRqEodz9PFXTyXp8G13T5Fq1CYsyU2jxR6NuePK8DJHuDxhKPWKwB6zJQTenQzryxnPm4N",
  "key24": "3TGqBStQ2pCuKRdWV7aWH5YkgFiNhxRPZn7BR5b5ThkE9KYjd85KtR3SuipUec6uCjpqBqA2SzA1asJj9mRw5C37",
  "key25": "DygvZ85rDkAPg3y6VNu42HDMSAgdTijtH1NiACwgYoUq8qSNLDtck2oJmj79fVhpvGKFyhN2Jf7jJo3xWRqsZiw",
  "key26": "4qLSM88vXdERSzewtZWLMLgV38WHRWNeqHUst4bANbd3HjiknwBvtz7WzrgkJ9PPiRrYXccFWitPz52vYZBKUJ8e",
  "key27": "cVpC8YRmrSK4SMg6eGaUkJYjV2uKRrnejVPHQq2v89wS7PX5HGhCWaXp1FicBKyj55cUCtx2pY7Qb8nuCgZztBZ",
  "key28": "5ahehydvcTLZUEKhiC4y1SN3DyAp6M9Z6b7Rbx1C7NHT2FDTzFUGczTSNV6NSU9yZ7u62yaG27Vvbnr1YE1ebUh5",
  "key29": "473yvRngq921syf7S3M1iA2hUH5bJ65S9B8oDkqgVw3AjA5KRGtaMXWx6BpCBedz69cAo5FR6G5pZVSgQog5zZoH",
  "key30": "4kpThL8AaGfyMgCSSeFrpt8JAFTGpxQUt9SvX6PYj93JzZLd8mhsLXNLH12DRTwdkteX8PQ5btGCavAQwDSWwFxN",
  "key31": "5AL4EQniZwWWEZidW4uyudTqWALsvE2pLnCrTtFhWsyL8D7ADYNzkYZmd1NATTWfuh5ZqyBa6cvLis2arbPcR6fA",
  "key32": "4Cz7CpRcKFrNUsfvUa5kq4cE1TGWHxq2UHAgDzHBCc3hUhVjs2pbnjNk28qpj9TjGQf6x1NSP5YC28688ZuALt5B",
  "key33": "2ov2c3RjhiQJtBWzPS1Lb2m5u2rgFHokpHJLB6cDEGQnxzdJwDELFGi5Box66zqeQ2hXAJJPyho1PvTYKG6qJ9SS"
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
