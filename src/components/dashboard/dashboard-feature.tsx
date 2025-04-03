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
    "uUPcEyafiqVTT9YGyBcBXLUV4UcgPghtMFX9hYaU5e5rWFMH7X2WENU8VZpzLA3EYWMVBWvoSJdmug1ijPzc5is"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHigfsK2bGattiUZwp5qiKBC7wXe13huEmaKggUpkH8V2PZCEtXguoyCtDUSCpni6dsZbpGHvFdzyGRSWM7TX1v",
  "key1": "GyrSgEjcBV3eVvJ4K7Z58aauifbPfoSBwjekqUhhoMtb69nNWrcZbK912UkPLBhZzxYxFwGKgYAvAH5iDKCPnEY",
  "key2": "4RDRwhts6LrjckDAcvEFQaXzKBLUjETwMrVF4mLHT82qU3XvmYWBCePyYKbWnmQH8Q1XxR1XiT7t2bArSJdY33ex",
  "key3": "5p9S7Q7X8rJRCGRDyvNWEknipeX11VhKARL2RUY3Ld56ZrapGBbw71WcmYhSBpuSotrME5KYBNyc4joFZzgKX4gW",
  "key4": "3eqUucZQ8Zcbt5PYJTWisiPszx7gmsNnd5UyCtv78M5uan2XkPTS83x8XkUnPP8fz1SrHmvci7fakj5FVqzSHrQu",
  "key5": "4hzxzzQCt1mrWcmuZ3KieNhXGKr5CcCD8yYHDE1tQjLxmgh4YJreZaCtWx6xFu39RZNndyfhmUt3RK91HaQC9btu",
  "key6": "DDkwpiozDthgZ7GjZE2wk5C61sT1sKFSmVV1DhF7jCmDuGdMKozkQCMFtZym2GTab835Uw3zJ4TViUGQSRyar54",
  "key7": "2LaN9pgoo387T8jA8gWkgZzb7aS84GxUL7kbZM7xJ2prsyCRzHPfWyFAxith5dCABdvRdeh4drRCPAiuDFjztXsT",
  "key8": "31nTpGzUQgWubkBMfswzddXi664bjNnAotum8XZGxgAFVPMZUNSdeVg4NDGsjYBTMJD7Lh9wKvrnFcgx71YBttby",
  "key9": "5oxGRKyNsguRcPmun6VLoPyn68oGXwgggTR9V1p9CTB1r7SGHnpjNbtekCMawVCwJcTUyof75kHhB2LFomEX1gKt",
  "key10": "2w4wBAvUvrLP5Zc5NKBfUzPffoYFG8BQ72C2ysEmskgCNdMQzV3LvSEsUFRGkVDxajFXnLcm8BaRTmjLAi7A1uw1",
  "key11": "4WXw56vC5bV7Me7Rd59p3TRWqrbarNUs4i8JAi8iapHMbN8Kp5mMZ3d22WXwmNvowCb8Kz9P9Vh4y1UW6KQE9nyK",
  "key12": "4Jo1FTry8pFSW48vkeLTw7soXcza4CASmm5UePEJNXsWSeiZDQjCBL55Bz7wJ6TUH1yEFPpfwZb6qZGWHat3ynJz",
  "key13": "qxsVTBt8D9bhyyBhcoLZoD48MKoxe1uokTFzj25xFUnmi4N68ULgGprjpcpi1i8YsT6dTfjLCMPakM1tbAPiMH2",
  "key14": "3GbSMNyh4rRL3ejS319juwvgN6ddoodkFnkyj8MYpJfA9P9uqCt8LaLnqVUnHviqzbs8LHbLTiG3zAqWicw5kgea",
  "key15": "2koHqT9xJfQwH38oXHnFE9abxdZERNpdZrLsp5cVpM3sjnsAKd7pSxF7YGbay9nMcdm16ngMXeYxFSbc1g7k4ohS",
  "key16": "2Gf9E3Ki9BJr8gRRk4R8uv4HcpyFAGzaVRqaqNfETsEzB9Pm7VLxzq9NmGHhvrxNzDhPntrviF43g21WG8K5uSdg",
  "key17": "2R6upEeme6DP36v2ie2DbXaFGdoeReb6PXa9KRntGKzF74sdoemVAZd8v3d4pXMU8rgKrCRmihaHzxD3CGTftrHq",
  "key18": "3DCM7EfRoSX6SNMmpLgoeUjq7iMNDRzdoxVZPcFseZhbi6QcTdfSjBAGKnFEhhvV7quDPaFQKj3auFRYdS3BxkUw",
  "key19": "vatEd5Jg2ji8H8mVYgMHcLUndz7Xqb9mSd2yyo2Nodgdvn67xaBjqwmj8Au3aX7ZbbNuKX4262zh4JFxJe7rfKJ",
  "key20": "37F1LecRd6RSCf9gXcu7mkjMuT5p1NG2k1JgfSkSZxheKYmrBsLBt9WWSUYgR5kLVNkdyiiW47kJ7d6rN3v2aes6",
  "key21": "5PiNYgnyN2WM3EjduJojD6yhMLKuuQnuAKLypCBWeD5fhosxR5m4pa3q6wafnD4Bi7tErjEfnRPEd4WJkwo8TAkT",
  "key22": "2j9VGPan2tc3wn8RpUYkDNHFceh7CyVzC53LgjdN8x4mosqzchEYaJEdJDM9Q3dkRPSAW2ic6Vro22NxvSKEpLcR",
  "key23": "cw7MQEyLArhuEWzHSiyaBywsJrWvNqrFYfHa3qeLQiFEyespfutunwSAGrRnV2YPhcm7vV1tuS8RyNZRyCXVwBe",
  "key24": "4sRQdFjyuv19PHa9aHQ4Pm3NUkACDbw1AgZikdigzwmrszN54JNpTJHKWSkN2uauSJ6eZKRTPSheGhkKT1mN5ZLo",
  "key25": "3wvunjXjJRxAqn5C7ZqYjoAzxcG8EPwFfRxVhV4nFpDqn9hSynmc8dzX95R7hn3JNPbos4KtN3vHXSqhuP8jGEyP"
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
