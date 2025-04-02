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
    "3WfKTaHdH3M6M3g9CVDPJd1BBLaKNkiBT8CMdZz7DSHeyYeQbu7TDJ56JzrcKa8pjMpTHS3DUBKWbURsurTNJ9tY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594NsJSpwuM2i1rUAzKzv9tGs6QkNpCJb4RQXsvmGaBtkeSprmSwnxx8i21SuwJrvWSVTGqSufzigEdG3AY3tFUx",
  "key1": "35VXd7m79CGy6ZTgByyfChb2ooLZvr6doZmMuM8LyMEPY7j7YRuiJPbL16wPGfdhVdSzAUyJvCvwa1ZAQJLd5oPt",
  "key2": "w7uyx8hvRGLXer4gjmzYikjuyP5VL8XYgo1VM7rS5RCHuubj8dKAFcbtz7ngvZLQX5nEuoxKyBszJJxLQpwN7tj",
  "key3": "44re67b7YCDkCjCaZFPPk7G5xvPcYi4CG8tZCPMxcVsMPx2n66ah5EvPgwVWVPsKdszbqNbPzeXgdawhVfQqbyHt",
  "key4": "h5AGW6Fass7Xrt4QWsKLj8aCSv4Gt7QMr29o3wTrTvndrsk6AiJzip5czPZFoiUDtX3fGTv5nmtd14bQZkZhZkt",
  "key5": "628ZQk5nyWgTgL9LEvFN7PxBenWnjTTK1txBWbjFbwd7AMusAcBoJAK4yWZTbxCaKMbBj6gkWRdcsQUZvcszbHyc",
  "key6": "4y1MJgJkMVNU8my89pTosYCQrwmLmNv1paFrsMdxk3AXdu3LMP3onaEQfmrTuQu8LhhTr7ZiftyfHXAVxcuemQ9y",
  "key7": "37VGjQULdTx7LZTPAnw3p1gLGujoCyNFajqhV7UhbFUS41WJJjeEUKN8w6yMMqYScJkQPCnjy4HRMtKeeAqWsSNy",
  "key8": "4uCjZcmL14eEQGJ8vdE8c1VBcw3ZVLhxuZKJ7aRSVb1PexvDsc2HracuSeJ91g5ggAuCbAKENiSXSGrY6qCar3ds",
  "key9": "4ttZxcqppqB1P7wCUja2f2DqEujWsnxAXVgZreZGMDJSpgHRZAWtY4PNVvbz3PFXm9zj7c3daqwso9sWbXHWMvHf",
  "key10": "5spwpHx4GudFMhG9bN6nabnNmGUAZ1uE2cLirHThgSzmKhK3KJpGF3evGeb998ZS8uPLkYAFT3KDrWiPHQpMkxcS",
  "key11": "5JE9YT5uCpJxwPHnsWjEH3t7cLaFQNzrehiWSXvaLbUwwdaC81ytdxoCU8T8opbw6bpXtX5W9mBjY3hL8nzC5oSc",
  "key12": "3HKbKTzrYYVU4QF2u7An1K8ybEjSmtmykFQuhEm5JLfsLGMCkZ67aF1TCF8aVzSeEaX8Vd8xwgDa6QiBYpHgJ9uG",
  "key13": "2LbZUPAyF13nhxiG4CAMSPX4i6ftdW3bcHKWQQEXL4aFb4hHn7wzthQU6Qv8W2KJBwR9UHYe9AQJ1Zufepsd3xd7",
  "key14": "exiq1xKPd7wKWHTKnQXySAdymb6EqRDeA7rMM83w5ggXABL8D1QrceRkVkm5D3hgVMCL2cuwVThEJXq7RY6ZCm6",
  "key15": "2THMaVGigPwem4ejWLjzudLUMRR66FZ2TuFRQBbUUpkpkiiw4gESLSMehKLMmEvoMcEf7hYFMb4ZyqrEwWBPzLG3",
  "key16": "34THfJNwofKg5QgnZL66VvCF1CwQKkBgXKgctk2Pf5Rmiv9BxAW67CfuoBBLnJmTvR3tusY9vM2ZvfHR6em76aUx",
  "key17": "5zuVGdyfEt3HdyC7jgPE1GnfTbnrHe7NdC2e2ZtytiEmvMH8RaytZjboFyRd65WW6E1Wjn9xXt1QP1WHv9hGQKsk",
  "key18": "2pHJ3aiHyuTMRkwmXSxeZU5A18NryRr2phzHSRDrB73qx1GvPdjgNYEqvvLWccz56hX7ZVuk55Hp7uMbWEm1uS4T",
  "key19": "5wtz465mAFMjkLQXmafP3DLRaWLFkzoavELeQssnZLcLMbCs7Lu4Kup9Q5DJrHmdB6E5UbiwJ1YHCCPv3SB7bMw3",
  "key20": "32efLxFPLbYvcaY9NJE7Sakc9TJzJRgyGfwD1784mCXR7JsHC5zefigTpm9Mt24SQ1eyTmag1KmfyLZhyckt6Zzm",
  "key21": "3kSsj3qYcZPFWsJmR7QozZAPHWTijXQWur4p7JiTk9533WQBnn9FbQ81tcQH7RevxXdxWqyEFs3m6jx5MFX6BtsD",
  "key22": "3aEtcjjsh78uzonC3j7kdML1npyWaLQ3SJ61b1RDBarzmg3ZqNoXJ76EfNpv92S7gSxNuFED5PaC5LewShJGZNxG",
  "key23": "41Y9mbTNRv6BT2G5tkhQXig6d2yBUKbwWyPb7vxDHLuneaPQQZpgQkiBhUu8oaUHqdomDy9TAU91gFF9zeKVbx47",
  "key24": "4PU3VZAomtgN9qetKG9bbLgrURxddtEJZB2qiTEpdo5cZf7JmwcuHXLjRzPugw74rJ8CyAwsfCKDkDydAwETz96G",
  "key25": "3KMh3VrosnQye2KEBdVBbKpvu4DHfbLkYqU7EDpR34sMe5wood87cPvV8YSwHq3aCkXXXy2moAwTyDzy3zY9EZPp",
  "key26": "2uitgPkzh82Ls7u8EMqAeBc5v4VVM4fkuozS4SAFwNAQDBE5dFtfGx1V723AegSmWP4cF31qqSmX3xdQQgQF3RTH",
  "key27": "4Cau1E6jTbp5keb3riDyTq5X6fPGadqaffMbWGnFsFiGk7p3LKE8mFg9zC4DPpZ9oEtZwLX6aA9wNQ3HTQufJT6a",
  "key28": "59kekuqUBJ3FGhx7KJ3b9jcGqeYFCUJkpffjMq8dnmtEs6MFwwFgsbtMc5MYbYdvnFjo8WUpypooSNLcSNewjnHr",
  "key29": "2vJRbwh4p3NhxkACUbfeEAx1MAjJVtKkTzoDjcSaPJXi17Pt1aKHXrakyezkSjxGCjAub3uMkGmU2oh152SW8FUt",
  "key30": "2hMwtpEPG3BWwHEjCJyM8vxCaSDQkQtss56BGjwJAwtK8XugNHYSBAb6GqRdXiGB4x4Qp4P9TGY5bsp9yGJPf2vh",
  "key31": "3Hqya8SCSbfKDUnkxdjWQgZR8AJH8GFJeaHqjPswUFt9M7MTq79RjzMTqhM7XfSqsKpWjE9cKdxrfGqCMf42ZCLQ",
  "key32": "5ScpKjquHEppZeD9dZ33bHkSGXCusR5Sax95go6SCWkFh7R54f3rduHZzQRbuCU9aqukFwgAMe4uwyGDJVCJ98Lf",
  "key33": "2wgLDMvuqrWbLzCaah6FykP6RouoLo5dwYEGwi2e2BkGw8pE2aUPCt8eYY6ZdJGyKoZH25BP18A9XFPZxJcM4sjZ",
  "key34": "2GDsFUWDKsr9REoV4e6dGfNcEuP2nW3xuWFeXhVaqH5nuzfmvQdk4ejRpNfSMA8xu6snucAJqMe2BVTUN6AU2zy",
  "key35": "5NPcpD2xh5w58wHukHFsMBmWcp6mizrDYwg3yeiTDJmENorwudvuPBE36Gz7x5UZqt9bz8Fy83EHs8EDCtzMHRrz"
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
