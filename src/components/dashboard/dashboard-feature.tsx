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
    "528SrrsBmniwa5J9tekd27t6ENNRrRe9Rph3HyfeKJvqMMBM6aCriS3bzmd3zkQ3Z3aB5NcCjjYfautyEvZ2wZhr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gePqXEKbMmiV5gmZHxy8D6ZvZ2qDULwpHm5FsGD8e18zdCxkMPWxE9mnLrkPhmnVCzT5r4EeN5DaPcosyPgrxrw",
  "key1": "4iFpPfBSg1BHDLteUP9XU4gYxfALTVtpdMt4P8pqR6yKUyGV57puoopRKURvPYR44kPNGs6q9mv6A3VziR8MBnRc",
  "key2": "5NQwomZApDxoFHvWPxFYeWWtmWfh6KoWkysiWE4z5g7w5PcSaJQmrTHdSz8sREJAF8BxwWN7kivett24k99EuSKU",
  "key3": "271jBH12m9mcrx68Hkfn3nzKqy5QSk3S84BujkuT8SW2TNyrMGr4RxWeMip45KecwQx4GCDkcwwHLuHRpnksSTAg",
  "key4": "421qW5rAo4WNG3tXJadVUovnLkFEQ9u1bAcZ9zWF3RxCp1ef7FRoYHsxZ4EPne1aeqfvotJUuNcFvtW1DWiALTHy",
  "key5": "52YnrzXvzbiXwQCYt3ox11sVCKrZbJZZnnu88argLacXnFd7n2t3yrjrt8a13Ee8pcEQPHtxNNoFSkJMHdFNVduJ",
  "key6": "iFmPemgFAoLMDauHWu6EGMJt8WQRXMyZAJgPGp2A73azZWrpCEFjbXKHnoEUi3aC8BaVD6F3QmNXZ6GWvcqgxZd",
  "key7": "2x4dxDbGADgvdiEaW7VK8dzahiwQtcp8TSHKsF3mzySvFZVnoi1mZPwRLsYi8xY4iraAcAVFfG3WMQRp7Xk3GiWH",
  "key8": "QXc2WNHhcfuE37s2i2zT1vqrGBxNAWjZe9z4F2W4zqicasAKtkhKTNuFEZTE62mh1DcuUTLhFgixANHY6EjpLdQ",
  "key9": "2h64mtNVyNEUE2miSKmBM9uFkH2GN17ix8KnfbUu1eYFdEcXeHrN4DAMBMfqV4CpqNLDREerRELzDY2KZeaUWqA7",
  "key10": "3L5nT83qzW7KkNSatAibe24SwGCkKPs7J7oqr5SMbJTzJ5Y8DLt8vQieNSLQYzm4ETc9AYXN99zjHr4e7LD7K5bH",
  "key11": "2bTUgGiFdgZki4dDoDnVW1qMJrMEwskeiooLmrDabqnDRMt85mPm4AoiKmaaRsB79AuvYakW8ycxJoKGZChV9L3V",
  "key12": "5DYq7BDbsTbsitWTgNy7AA1oi3wZ1GPZvWM92YTLjpSUyDt1TG6Rnv4Yw9RmKjv2hSv9ng8jRHHWKkgENBncY85w",
  "key13": "Ts7yWQ4y5Va6L7nRz7EQ6EhCVbTVSUb475ZZpWkbJwU7LrD2RgZPfaoG3revYChw2dJoFfnzwRj9w4S6jiLbSrV",
  "key14": "3AEZNwo34hwJqApzdD5BQCj5FxWYAKQDYAZVdqvm7XQehPABACe2H8F9vpyrg1DZB72FCYjLF8RaJXghMdd6A4D9",
  "key15": "Ad9aRJw2HBfG78swFBaPM9wpnMp3MTdBu5TLS2XspTsjSLUvDaWygEzWR5T6q9wTKH6K6gqqQC1stb16kiA5M8g",
  "key16": "2ftfBrqnHGdxSzWvRN7JHVuNfwdtuKzhnZ4qxLo7WoCYF875izEAJxB7zUEVCYctNjrbMfuw5tSv2C82VxhdvrPj",
  "key17": "We24E1vLZMww3G5khdf5A8UkQucWdynN5jwXWJ84do5a1LUrWWVKH8bp1huJdvq9NtkGV1ytfvqzawAN5FtxURW",
  "key18": "5nw4dwrsmdHWCPYa8yZDE8cE5XneCqVC9uyXWsBSyLWguqYzCVDdrnsruMcQW6fbxNfgs84ackys1vR6f1e3VxHA",
  "key19": "3vPvqoVhinSExD27S4DuBo9sNTbAdZeHbF823dEJd4VKszmMu5zzKL9pCJkutqWQXU1Ydc9a9vcjRedc2CCKro9A",
  "key20": "4okJdXm3Vu3VCeQQtQuHBC6Dy7NDGVXxCK1NMgAPBZZtRtt7jCzACo7kC5iwz5c3HZjaNfAFZFXz2BQhoiPuvstm",
  "key21": "3yEfvvMVKz9uDgVLu8RGdZD9WJ7UjdWraxHqWYBWcUcu6AB5aEmPcsBKorAspLJEm8qxVcLmECREWiWxHQisjdoJ",
  "key22": "5g5Kv56smpNsfZpQrmdvGZCD9bz1juHFMfWxVb4wtQY5ovvXndY8gpzDBRtbaZToKXxosW2L7LMgawGvSvxGRVkA",
  "key23": "2Qt75ZQJqyykTQ3SKUA1vGPcTNaSf5PJoecyQngfMrVTbPKBiMi6ek185PLCiQYRmTE4pU5V624tpNTqeSXSYK3K",
  "key24": "zH5EcKpBc2irXgUzr5hNcYjTGdjh3Uiyf57NFjQ2qKbTxJh35vaWKb2wSVJRsbQirq2BMcotpCRZNndvLprMMCK",
  "key25": "vAbszBbF3d2NdPdtKSigG5pq2NsVzwxUZ5tFBptozmasL9SqW1Jr7WuRGQLyTjmk6iHpjdySP4npJC1tYk1SG1P",
  "key26": "5ZMoGc7uPz3C6eiY6R1u3tNKf9ZfxxAP33TCBUfZaw2tWJ5HRQLPXhMrSNS1zZAUpgNT1GX7xxBBp3RPkCpu2Qkq"
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
