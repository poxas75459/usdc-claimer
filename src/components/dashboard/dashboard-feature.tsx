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
    "63E4JkDzZtaCHgpbxCmjryMAXJmQJfLBAVQ7VueA7qzsjqcvmecchk9dsvd8VakQAiRsCAL3nqSD8866GHGXw98t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWNgbhuB5VPXb1CXQgLrTBSj1Gp4hvbtnda2XRGNccQURVFk2oEYqJWN7W3QSiSa364MEcP7FyL745gr9FvmN5j",
  "key1": "5KnVTuXhLpcyxoZFigGrKoSkBbCbdMNXxNUBT1RJw2ghGbXJwyoMuGZpiBJQiVrvbZ72SYPgpjfzEtLeEP6gnStT",
  "key2": "4w8DyNaC3kQxYd7L6YArqjvA8gJQQ2bKvyF6w4yHoZTZZdqdZCL2CHBd2mSkAQBFZopGAwHCUeu4ZyvQL6n8Mvm7",
  "key3": "xwATFtHuR9aNdSBtmk2HkebwcAV4NFUWGrGaU48xHY4Fv8USHxJ152Qrm3kiMvTDapw58xkeZgsGSnQ3FKWDYtZ",
  "key4": "5XQPb1CwZB8xGe3bja9abAQxHU8a6BjgiA5cLnmm6Mdvp5EpBM6ka92EeWVieBfbiFrvnp96qtNHJfzsin8XJsKG",
  "key5": "4so4PN4bN3hbbUUwLnzCgmmak2RaUEDoetD1vMAUiKYi4kPawbsDjCv1mZB1cTmu7VTEBf5foagubJ9kyevt93a",
  "key6": "2M8MQeju2HM3nT9vus9XEPSYuah3WDFQErChx17FtF8J9ojaMR4abYKUwseXTKRm2KiKkVb2HkTpiC9opVKuXYBD",
  "key7": "2ZWXa7uSqWYbNBABLBK8mKyWuYGGTuJ8UeuQQCegDNX2b43yTrN8ibjc8VJKmSormAZZb4ZXn3k9pGVGQbXxfvHC",
  "key8": "4XvjePAT6gV13YXkTRTU6Wh49GyT73A6EBXbNAUKTug7uM8DdXRcU7vR1T7viANzraMHgejW3W3B3BYR9m3wBf9f",
  "key9": "3QFC5F7LRPoh6hAFNw34aiL9q1FgHn3ZwVjzNrrkMEkH96giWhwnhbJLzEVmCRt7iseVYh4thmaggCCwJKxCwbDA",
  "key10": "3q9ocjWXKEnAnoGLMGrpAWJLwWYAEKjuceCkcwQMoA75frHPge5rRPWTjZKAb4KiqWSrijJ6kW2VyqPuMpqFpvcw",
  "key11": "4q5vCtt55oNcTk5eNioYyJJSKSCip7ACT3GkYhhBG7iZQoU6vL3xJpGKPuQ1d16g7ptHzzCXaMDxX5mekL4wdsb8",
  "key12": "qBEAri2BiEMr4ExkjaVCVnurbVKdz7ohQNyZfbPqgePaM3d64FNfJPvPm3VgfAQwZ379RkWbdy6MBoN3YabCx7N",
  "key13": "5PGTipNpuQb7fCcR9ScZbvGLztrXxRmu8Y8AQR7mWR7mk68NZJ9NCFPTkuTEuBhFqWDmPVUKNtY3H3AskyqtjGsR",
  "key14": "28HxzHNm8NjKZfcoCx4N3Qyue26aHL9TgRP3Xv56aWfe6W7GbzGimwhFXYyLBekfWzHQYRh8knHHftGotcTSCzYJ",
  "key15": "3G32kep1GF9B5de1Tb7DV38pkC7SidPejyvRX9b6ed1RKrxDf2v4truzrdqA9qJCuUBXdM9fnrZZUu9kk7RGLgkQ",
  "key16": "3w1gNHnHQGkCUD3Fw8e7bVebXey5sMu8gxpCrjV5Tm99RZ6LKy7GPEDLANkxfZo7NZ7egRsEfeAJMMKBvb6JQaC7",
  "key17": "t8H9LJJwfvM2NB27Rp8GiegggU7CKur4hExg63XXXDtqKdxTCAvuMjkwdsh8TztRwd1wtUxzqRXpiHpw1vWrwya",
  "key18": "4YpqXoAEdEeHztnFPADZvWWTLkzY7C5hjAS9Y7fk14GWWrQ8m76ThLw1Rt9wY43kj7fyLVHZPoFnBJupck9Wyy1U",
  "key19": "DgPicpXPMt33mBXvgrZy25j4153iBg8WMqmAUUCjcdjFVjJpR2YPjUrSVCYCnc1L1YkrRMiJHuejZxfGNaFQyt4",
  "key20": "v1tpTV1viNeQ6TzT3uE7zxkZ2Pzdc7oRr269KLrdypLNL976S3BvNR3BA6XC5RcUKuu9mETuKfWVYqJ2P7BtcnG",
  "key21": "5psdminSgkRegddo34RBva6w9CCeknhpzEDtq2TNZzLAg5S5t8hRCfxmeW1JHBMA5t9aeudUvSRtKM3Atn3S5Eh8",
  "key22": "527zUfgopdSd3WS4aYWiLfyFZRw2kTxyrTJQMRPdo1MSGDQdqAo2DhRkSzC1mjb7PrZDWjhcYYwu2EZA2AFWaj4f",
  "key23": "2nrWQaarU7KdqS3xUGrw3ArrumF3Tjv2YiH9LyT2nbWts6fPtn5aFNz971KfHFf6euEhLBhnj6s1NTTuaFkkNdes",
  "key24": "2H5g3EfNzPeYNUFqQpNHUXs3yC6kRq2ejC96XEgeZjGNXLL4ipfHVKS2fh83KyfraYbECRV2gQncsyfnJwqUDmr5",
  "key25": "228RHkbYSNjPvtW7wF4sPjqe6bUExmnrLfQbcoeU4ELeVLE1Fg6yeNH5tqAJY63FpCMGqf1AiQQd9CfeJRd4xVKH",
  "key26": "5ZbL4SjbE24Wq31PAZ9YaRA1PSeFjaHLDTSbHxxX6BteWUUw9UY474tmDKyM7cvSpJ53Sisje7eRH26ZjUuPUL5i",
  "key27": "3ga2Rk2bLj32RkN4MrQWq4S22LhGyi8REd9Dgg5zfjX9wpGyjpvR8heGqt41QEQhqNfD1cmvcuKsounXGB2o4tFj",
  "key28": "33XLp3CzKedNmmGP5pYrhGMMWnbAQAaW6zErJkCn6RY9fn53vEUoLXh8fa3ps4d12oSbQReQR496fus2oM2Np9ws",
  "key29": "3ohjb89iGF1vLp1PEvwPeF7RGtf5zwTozeQ2YsJCEv7CxmyA3SFNfkeWp1X5BHvM6y7Bm8kCDJv41Gbk5nGKaTqU",
  "key30": "2icmYQP12xrjMyxrpWNbx4B27gxkfKG3kVTz8SX3Fo7RhqBfmaUkb3Ggw8pc3atDtJALAhmgXGFN8usWbvNnfFxj",
  "key31": "u2UpEdwuHumn2LdzHbakFWmA6sFpN6PhnSKQqfgTZAcmxBKWTqy3DFnmYWfsEQLgjjmmgPSNco2Y2rwY1NBBUgc",
  "key32": "5aui4BWMrDt6Ks8FUeAZwz4omtFpgKwyGMCUmPzdpCs9EkZfMuiQPhJzVkEPPzMdzPmHCD4nbNCHWu69s5brTdyn",
  "key33": "4gyC8mANFTc94mDAcjAkg7FbdUytnHEyYcyCqv9GFK6sjStce41sMCndC3odxkYg5Xn2de8bwXpSpHToU6rvJwGe",
  "key34": "6B8Ley7p2SxsAMdCqebH8387ieuGb6FFMtc5yrTB64AU8ELF3qiFbBPuxEkzqENEeStsBmZNP67SwsJgU5EAf4t",
  "key35": "2p9LgkJ7g4uc3MDkPMagdjZfaZGg7HsSoZ4aEcjkvpXkodmAkePcfcWeKvpkB69U2zD2LPxytEoyTG7awQaRsVKo",
  "key36": "4iWgPoSfiKVgKAf8i66My2y4FR4cwpaKbkBtNBE7abHcPosMHcUzqqtwDhycnsPsBXzZKNcG8hSm52yKqY4V5iBN",
  "key37": "4Y6j6AnocNeDh5M3g9Bsmmv2Wdoa57Rw3N3f5pfs1N2uRG2onprnzAAagAzoysmC3gjQdRgt5jyYD1VzM8fx6nrn",
  "key38": "KffLTXn7CS26BPtckovVi2D33VMxMbPJGkijogFj3o5eyG9FkwuYVkj2d95Hb4bhdQDqgPTq5CbiFtU9F8B2n3b"
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
