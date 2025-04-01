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
    "2MF4xvthKC2Fj7BuXJrjGUEhKSGZscdnE9paABhRva24x8RTvH6yjXihYfGLwgbJFENYHPb4gMf4tWwgF2Gmc68Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5StUDLLGYkH1UmxJsKgDDJNpMwwbQaxMdDCiUwxtE37PimyD45mawFQiW2CUHnMq1eZzpdGTzPpTfDUkxFtNjA2u",
  "key1": "65ubtryd6hBBEasx8CTsnw1qzfsnYuq9ENPB158yAdnFaVRvmZ7x5ruHaw21q1jEUr14AfresyYvuUzpwE7HHNDa",
  "key2": "5NazexkBgSEwzpBTj6JWovZ4NGQTZjqUwW4VHmmLL7FfBZnyg8pkpb3qyT763igAVLFwyGNzbf6FUgL3SJpPK5qo",
  "key3": "hKUcTLCQW2QwYPeRa7ztgSjymKGT34sNcwqUaSgmn9txT3i5Ar69NAiw2dmNLsfdtbaStd1WxfcEhHDP6mEsZig",
  "key4": "4bTXFYX5REHdcMXcyNMPgfgc4LEkBRXrXHDaKxrAmPoM2yfjpKPHFQu9o8UsNE9xwMKex2KW4xp2YaJFqLFGbMgH",
  "key5": "4kefyWMAnN97p8ufWcBLkyFKZnG7C7y9NVkTV3sRsUfyE8vbtWDiTE8tfGV2hQs1EFoMHjYmEJeLq4tUqhCjb7gj",
  "key6": "2VZLEFdBY3m6jqz3wBt6d7USzYcVuuP8DYgUyjd7XrPr77cWKLFzmhJ5vkHKHMYcw5cddgLybXn4HAhf3aycsFZq",
  "key7": "2bp3nYJPPueibE1s5YeKEVSYZDpMLsQXcqKDvJY1UNEgMXFDgezW9aMyvup3QtKooGsueroonxhxit5ixVELvZsP",
  "key8": "4t2w151QZWhapr4Pao8jbAhcL1GiZvr4mWK6b9pZDEPhbhUS9n4ZjdntowQMGywJRD1uTr67sd9ZzYxD2YjVGL1M",
  "key9": "45EkcPEjGmYnMopiNbtVWaUHGxQdjbvnri4yHp653w5rtt2XSvNQ25ioEzBg1p141JixZtgmWCwCT7L9CmXevYq2",
  "key10": "3L2vdm1KnyhypqPGs6bRbpV418e2dUyjqMzQ95FjvYV3kog3jSdtnYSniuJQrvY3jGWDeHFjQKCG1Z6JMiKsCMCE",
  "key11": "3iEWUbUU9ARDgGkKSLPEo5VcsMae1t7mYQU4hLDaVVhMFPgGqQC1izY4rhLsC5J1ivasdWEjBvjKFSyyxGsitP15",
  "key12": "2VDQ3bvvhbcoBdDHSZ3cdr6EpcbkfdShiozCYZ8K3z3CUHyfYj7kRdVauzEMncEe4YnhDQHvYeKmdyRxBUoYhEht",
  "key13": "2NpzuX1BtHiPxFFBGkW4R29X6qJpPyJt4vZeU4C9DmsMqDsuL2frz2DsjiF6y1Nxb2ya5DCSY3Em6mCezj2gmPV3",
  "key14": "2AqWpUq8dM84nc8rboX1kR75GJ5dfHbtnX8b98MQGMEAnvd91QJrJhPxfRpiPZ4EqkGZqnnH65UwWuvdcUnwoFLk",
  "key15": "49nyieNqW8oWQmwqrUAgdKjwqCqHGnCyFFebMipGBSEGjpv59nTWqNVYpfcasjYpNkSC32rVy2LBke5qiPjLLC33",
  "key16": "5DJG6Gzit9aSfmuJWoqF73YGvfqH13uWcnQddGP3EU8pnvByDYx6szNcQAzx4w8vTPYpiPYG8sS4uEH8udkrSDP9",
  "key17": "4z4gMwrVmGD4hAKrnoCKJqK4gF3eHSYTFFaHoiXWWzC2y33wPastz8H875MBHnLEGgF5WUyXv984nrvQxmGav7Rr",
  "key18": "3hr6nZyQo4tuVCz7T4EYf1HR4j2PdxGeMMncWK6frfarAzbTa5Uwi9tiJddukkzgaiewj5U5m9Y6BSrVnLx1Dpf",
  "key19": "5k95UAGMraxukXk38FJFx81mDG9wHZdf8vo225gwwVJEccYKNFHGZdYbPze7E9spD5aQSv4p9yugLufJyidCXrwM",
  "key20": "3d24giWt8cSxYMq8i4rv29DPfkbfgPptc3HG4sNWNQ1uhWz3bqKTvLekpvcvKsbx5XcsfQMu7oBPzDiTnnfjoMLe",
  "key21": "3pQ8W72768MgVuPk6e6xqRwnqnuUbbG2FHRKBpDoWJcSdLyZoaEPNvuS6taH3BcRufam4t2YzT2fPSz6XgYfpZmA",
  "key22": "44dqAGk6b3YJihLgWjxzbk26oRgfJ8aAgCpu5xrzKN5kifxV4YmZwWQyzn3NZHrLsD2cMuU43Mw42nwMwu3XozFa",
  "key23": "41iVTQRbaDN7ghe4iqZUfeo92UAnyVqZ48bAzRb4gpqQ6oLig5XCU6h3TCLJqwC4g8R98Gasg1wBgpmRFTKHjTbt",
  "key24": "3iWX21uECj5hgkyVMMaJrzhZqwYzA1uCxcpVMEUXnTWNUzTQfuF2sPd2fhqz3yhMs7x5mcaJawzrX7EzdwQ4aBDb",
  "key25": "3K5tSqRLHXtJe7HhWja5qsqKwJQv1f8FmF2JnXVvH4QP8M9au6S1UuvJQdo4CBbqh2JBsLXZ9q7MndjkSUeeGVBE",
  "key26": "5eibnY89hsmBz9G1txwbfE5zPYYGjPtPqCbj76MVhWbfWKreYFNWtu4xDHfEUiE43hfc5YJpYRXykpkTDDBBidBU",
  "key27": "2WzGQw9EDm8JRZ6ipMvYEiAo1frex8rSAscQAZ27i86DJSwvJ9Gi9taioVFraj5naNNFTpJuJM7q3xzSr74FcsZD",
  "key28": "NyJAnchN71Vi8ipVcmuZy5SfnVk13uWrWRdFgDDPdQREHEREF5rgMSweUtTjWFny2Mm3UL8LaTzBKHyjCCiwfaX",
  "key29": "2gdegkBuXyVsQykeJ1hNwALdNtCtoeCBGSrU144Rre9WeCpHSuAMg198JpnBP73KeLTm46ptLyQLkW4Kc4ny4VxU",
  "key30": "3ZfT1zH6kztnA6Wd3MTMF2rvLwHgPuKDk8H3f9EGZkaTfTWEMRtXackbMXXvh9CbEx4X7suWW32kFz6SE6YstVvD",
  "key31": "cj9GMdqkjEQbvcx1CiaUrW9qic7KXCTP8rZ5JxKz8WYXm3K1yAhmzMiHgaLrXQ2saUGdJTmiDoY8TsvaVFEsVzc",
  "key32": "5xReeKeigN6Z1QWGFobU63YAEoUraYEKY4MDR5qrTZ81vLvkkSKqXPYn68Cum47GEEipXd8cnC6DHTMqo5zAPNxp",
  "key33": "35rowbVJSaxZcNUUuQZmzYW1TgLasUCDjNDuKwuwe7Ld91diw1HaxcLwdgfqtiQ5kPpbTLah64sN96AX6jLxVNGw",
  "key34": "3gGNavpawENyhHWWrEDX1vxH1gNiDVQfpdSRarWTKyUC7rHfb73GyBNrf6qWixc22cqmg4vvpY4JAqo9Cb6SiKYL",
  "key35": "4HPNqEetUuuYCCKC2vVKjNog6W7wam9myuF5uHSM1dA7U8TW2ZbmDsZDNwEUcDyhKgePe8a23cU1eo4uMLnnQHnT",
  "key36": "EvuHLf6rGRVJXS8dDJyDFajLFCKTigqhDPoJvcEPL1RTeTtHoQTUvNzv1bR17c47JX2ZpcQ5BA5k6MJD5h5y8om",
  "key37": "5wcFa1bfeqKNaPPMuPsUv8udF7gHHuspGa1jxYZuyeFhxZEDuyXMsr7JATKbFZzEHQCe3NcG2GaJmC6eEDpJDMas",
  "key38": "2WtKGjTAruazuxECdFH8grwZ7TfeE8QufF5VKdQ7Fv3D6FJNqUNqfWWjMr558SjAwG75x5hZw3GakeSq3umaJ3nf",
  "key39": "4YcjirFtYrphjvLZmeb5LzAEXFApwoCYtswc6QKRpagiBbTTAsUgpsM4ehkdFtnVRH2ai9bPSQdzRo9G5NKeBgYV",
  "key40": "59ZSuZL4G43A43bxscryHT2BiMvgEjk6oQqZ9Hu5wEz18Dwi8o3VQqNxbU8c6uzaqs6CTFq2rv83faRbDAcTTWey",
  "key41": "24AivosHvUfjzFF77Zzhwh12r6fV6m7DcAS5SeMqFpDNCbcaUuTdPPKSvxeND1HaWYTWwm1SbVz1cCMCiBYCTx32",
  "key42": "42Ud8gzQK9v2T74svFMjuaEnPVUeDZxLLwahPzmKaYoSdRRJsqWk9dVZzM9iKxNPwrvR65yZh1zZFiSKDFjPVQrN",
  "key43": "boeKuHtdER2VzfHxNRi3fw1gDcfZWEHNwE7fnA7eDP4MxnwCV2Jq6KnqA6h8QrM177dEidPd7PjaqEsqbdaLNoA",
  "key44": "tEsJctbpDgJh7riN5YRL1BV23oGnMMGzW38fLY4tPYAsH3WQSRwS6H1v5Euki2HH94CYcLpGKrr7frmNuF1D8nw",
  "key45": "2pUv2nU3n7BEXzKvvieGCKPugbxjHuVh8eHvjeSz6B7uD4vcTfjwbcsqnh16Z78xeqmguSwrTgD6gN8F1e2USpUp",
  "key46": "4ZGugR3RNy5F35B3pzCc9pm9eLdz72rEHnVbzBn4eeovhBczT4ACyNjmQ9dJjfDa47WYyiso7cfKFKcFQfBqs5jx"
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
