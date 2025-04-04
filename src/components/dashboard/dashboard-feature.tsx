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
    "4m8TQaQvzaonQk4EbbNprMmiPmPoqbNWfBeMbccToQbWQS3tQ3ULafd1ts8wwbq69vF976xmJjSENB9hkLfaY6Jt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UUdnZDT7QTFmuMGwcJA1vHyNdHLkw8kW1ee6TyCiQEdx2mmbuoVh2HuvDCvPVAHmyeSyenqxMzLYq9PBUSayVig",
  "key1": "2DAyFi2KJzF4yG8NbUQPPXKpdyDmS3rgaLCBS4FqFbqHTc2PibGZjVRxPz8sQn8UkMmnh3PgJskNzbru1jEHuCVW",
  "key2": "BAKuRK5YAaSnHNXELRZm16htRvHzqcN9YgxKGfUp1P1tTPjGcK1KXFBwixqoQCN34YSm51xYgmak4faYuLYVmSp",
  "key3": "4CNGEeRjUN8k4WJBihJQrztq7YEec5Ux9kzgzGJW8og9GFUDgs5nsyeR3Jy142o3X5KjU3AQ8DHH185EYCZLqURg",
  "key4": "4rtwxgSQPhAPhdqJszcZeE1znymFZREXan3AJPpYPV6qnFgqbJb5kLYSMjKXNQqwCsq9s3TpBnsznYzBAvSvryow",
  "key5": "2grrqSPy9797zkCD4UyYs5ZtVQGvJqZY2dSjvqdh6PwGvHCfv27qmnj4iAhCJv7Z78gFyhZWAMJ6Zb9ZH6BPws4B",
  "key6": "38tsh88iM7uq9mXjNAggDiPHaiURYNU1YMQiAwS8Sovxtc82TAmWH2zUVsRjDuiFZRHKu2UhJL2ERDwc5pKfnfJ",
  "key7": "4je3tGFJgsALSHrWXja3AjN52NSZR7E66okrrrXGP2X1ugL7RD5XpoUbZefe1ioPrcftwon6cpb4tiYjbrN17SaB",
  "key8": "2DKa9VnQLGtcZPJFvoQ4pzoDzfNGz4S8X9qeKJCrLRigu6Q3U1o99wPGQRjknPi8i11W7Gsso9DyDfxyUVwAd6tL",
  "key9": "37saRMRRLfXKYcdychKouDLoygMoBAPhhKUHMpP2d2QNrxnVC4yfemX1M48raxtLFnSMH8mfbcYiPQDizHPfGHFi",
  "key10": "56UFMpkxjUvPTiznck2FVoJdzmMDcAoqoQfFzZSSGtWsjU21s7sZU18pzE2dZCxVoUuMsaMqNWveFiyUfjRzbAC7",
  "key11": "Xb2TqK4CfNKhd9thKU1MLDL7GaTeaowF3gP1uahs4BEkV1K4rNGtf7yUHjNcj4ted6LW4wXN2PBBZs1cCsMBbHd",
  "key12": "3MFzyW31xcE9zQZBLdZ8DbchheyogFba4hqqFhu93PicCg5Go46VRtryCSedK66v9rMiGW1hXbRoDupWfabzpWKR",
  "key13": "241c2D7jmgH6ZrFNhoL3NH5dPsTmcrVvLebjuRGiVG3pZQVSbJZAc2ExVLhRGasYjSVomzaXKNYY2ZGcbe7wHmhP",
  "key14": "3EjE3bPb6mdyKg3n3KK86Uqck1KwuRwwLVFkVamgsLFH9MAJn2yGZWSBngZtkV3V2Qa97q33wD7Ds85WQapg3ESQ",
  "key15": "67TXgtTh2gy3aAKQUL4eEXcgWmGQiWd1LqYHPzWmGMmAQUYTtp5AJoZnpSgN3PAUugocXukGRNYiq8VutRf8binw",
  "key16": "4oYgENiDjUUu3KoxzJ9MqsZk5DBni11b8bBYsXn795KLqvbnukjYDuGxQPtzTMsFp1cwNg9reFTPPnYutiiWbuZT",
  "key17": "4PyP3pTFCgtrSVMA6R9gURfz2Tk3JLJZDSSSTAN3PBa6w4y4m9KbaG3Z5Ppyjug3oic1oeUikjf6ks8oaGMvbNpj",
  "key18": "28Xk522BWiaLbJFQbMsnfUSoeYnUEJSmJ2eNqbMsCXDP2BtgnB5zkCc1Xzdm9ZGi98djeQsNqCCfHNbW7szyo529",
  "key19": "2k7JKKsHF4SBDSQSFTYtFQFBrrotr56mgSaHaLLmmMjcir6cbrbsZwY2yktvghEtwZ1fZpiDpd4oQqgck8YnA3yr",
  "key20": "UYrW4VmjdNEyNWUB737NcbU31pb8CohmsutPfbU3w72kXsBgbf8DuS81oGD5pPqSdVHqSpzMEJJydzs8cSZ2JKF",
  "key21": "mTWG2to9afvidPFsBNsEuCrXgeRJ3w2GbsVAq8rDyFLQwKaESPyjU7YkURpo9dz6D86F26ZRhHbrAgVKLSCsELG",
  "key22": "ZUFGuPCfwLsyHudUnzwXwzBKyrJhj6XdRe8EXjnDcigDdXS3d2273rstiHKFTJ1Qyj4NNU7Zb97qhBk4FVMK3dz",
  "key23": "23FSuzQnczeZ8hHiEkQ6eHQ9zD2QCZ7NKaXqHV2VWeawDVLTREmEmV1CtiA6DYNaKPo7waXA2ZVrwC1JEbDs7yMy",
  "key24": "2w5PUiRDmaa9y7xZf3j3jzX8oDrZtcDCrCkt1SvZPnENfBBWRfHRND47APUJWJfUE8XtboPywrTKJJ2Pv1BVase6",
  "key25": "5tX6GQJjmFJ3B9cVwApj52nu9trzegPonL8NXKdnf2cBvCaWBZS2RNArrfUvcWtSvRHS2Ykjh6aU6gSbvboguS8m",
  "key26": "ndP5EWEgcxBaVubNSvQqNMTGz6cma6dGrtj2ZxqKjWdhqUHvX3VQvXvzdPD26sj2kPuP6K1Zqhaqu8WTLryPRof",
  "key27": "3viUsihXoohfK7Y5GjD9rG3JutMHgqPm6w52pFKweNMA4TKp4RkdkCdQum4uusVmmhQVVrLwJpSYWcdVTce3pXNa",
  "key28": "5Ts5UGuCJmsv3C1aGLJac6iMJn86L9BoDZPA2H2ZkozpKrQYaZReXmBHkqPKwQjUGDVkfGxfap4Su9kMUFpqTh3v",
  "key29": "EhNuVWUYxkey8RBp9HWTZ8JSv2mdSGu6nVzf4SqU6vJ7MHd5ZTmV11L4FGqbVR1mWPsRXh3tSb3PKFS5zy1vEoQ",
  "key30": "4Ff83jVCdfFu5BxnTLw1viqRD5pQfPYew9nwaRrgo4DTu8c45Wf2AgQrt1D94xTg7ctQC7F9taTBJ8zCVthcHtHS",
  "key31": "gF8A5K1XhcUpv6kEgxGGCoAWhabcLJ8SjfM8nvrkgMuzxJLQmWRBMAaFUE3aGiW9YowaV6UrEqophxJjmdcCp2S"
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
