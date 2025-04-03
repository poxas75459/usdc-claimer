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
    "4x2hkExSfcY3f5VN9GR32EwNkiNjvJUvxQVSKCg86wRD7VinskpDdHqDze8zEZdRavVqKCPEJvCiCuKKrzp7pHHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RKsAK9ak36LCgwqJyzhsW4iB3GETz71n2ttcBnUPaN75JEujKxqunsPmBqT4nVT5tPTfB13yt2su8hHfwYBKzAe",
  "key1": "2kXqEvoRAMXgzYEm1bfhrYzEwgqrhyFQvPigBjQL5BGyT71oyRZpXWVRGHExtskMkyWFcMUGiRL7YQVfs1CK5gCs",
  "key2": "4URoeJ1Jpvh68tHpRTenXgFRKGBwX9D4tC3CdmKUzMN324xvKge1kC9zxetHHMse19UbrKq14vbyvN64AzBndkAH",
  "key3": "5J3HfQKuFkfpj8hTuo4A94uynv5DzDoZCeGmPQBiGakxzG2Pgpqn6gbd8GfhYKZjFNQVnK8jzoL5WNz5V7xNnGJW",
  "key4": "5Ut1vYgwa3Xc6HzKxKDic5pq8dTMDy7WNJGRez3qBaoqEQwiy8Ab8wMPQ22pzj3wrfvJNvM914BquodjtgHuk7ZE",
  "key5": "3qdVgRDdoCAwwQsYDJPt87Q2yknk2bfWPTLT8hkStHuWb8rY62LduWnNv7m2USufEMfjups9DzuBnxNvLTpX2stY",
  "key6": "27Mx9b37sU9XrdfnE8URBGavyTYzfnD6TR23yFXNApVKbjzrkPqBQQJFnGdZbwrJeGHDc7PhHjSZAbhw8ZdNKiMY",
  "key7": "3Dv9aPFJTN4pjqY1bAFNvj85RacSMyp2cpNnFK8x8f7BD1HSXt8p7zSqVDEt1tBxN1oc7kkAMDx5Lf94QMU1xTRz",
  "key8": "4pV23vRwS4pT8Rq4Czp17evPB8HoWjUTJkDPQgA3xLqEdGYTApvALqyp1zpwsvUjf7MpwZzwgRTvpqb8K3o2JUcb",
  "key9": "5QM2MKRgNQGaMNyk4w2Q2fqpSwLXTXL5EM4jPzPMrP2bNAKuMm2dQJRVoGiV26qUa7o4zRZKak85Tya9igcu2RVK",
  "key10": "4GN4mrMmByKvoXb7AtWvAZyczE3AP2yyYwTygnYoAbzBAjrz1ckmTmgT2ftqBPwhY2hk9xHPHv8JHEp5so1Ma23g",
  "key11": "4Va3cmt68c5As3AfcfHNkL7BLzBhERww6EPevuVbnaQfMhHEJmEzZpcFUacdZeAyzNUnR9FLBiPDxmqmw5aiYgyF",
  "key12": "3kjVMrrerAYhgpQ9xKEWbxQGPF8iQXiDb255WZ3WnEyYqJRkn3TKD62TRqn6RRSWjUfh4kyMD8n96SVToEpw5aGX",
  "key13": "zqxEC19xfaMbMDDKLKejVJGt682sqHH2NPUyUBEHfsTuiSDpmG4QcTioLcBPKr8LHd9aqZB8E6MCKCiAHLSmLSD",
  "key14": "54DvbSGzWN4tCc4wvjoKMTvv3E7WHH5AVHAC16LRrMa6Uqd4jGViHUZC65LKSZFeLdqfs2h2ubCEX1YGqQMdZ8Sv",
  "key15": "4zU6iUbsGJCeTHk1ZLYSrdNFxF1cbRbGJM3582MFfvNjhjL5TTaap1HtwoiJD9iDFXFLB6jfxSS9QEbBirPsdffs",
  "key16": "26GV37c1TSogkVa6y76Um8aoYwWrdPt3CAGzzca2D6MQ9F71WefmsSqJnPRtQtNbsLvEk8ucyq57t9M1KfQCs4R8",
  "key17": "E3dkJ6NNkDVmzbRnTt5vc4u4k1VWvKVSH3gRfi4Z1b1RLikdvtRgKv3yYdYV1pb4zo5uWyb6tRmLxvF525bFH34",
  "key18": "4m85VriWuqUi1rvHibwyDf52DqinF9XLdPHYcYuH2jsSXV3Q5jFDtci7pAhY5vjWj3YXtEbiSBaVo8zFx1WVwmPY",
  "key19": "5JeDwLifnS1KQyFgAi6oRLGvuSNEQJnAUiC42QrwDCEyD4Hgq2bNvj7rbVpYbZ4YE6aUCrMoHGEPM9hnkmeoTpPd",
  "key20": "3ZWVVSJwEccRJW6rS6gDq1889YMaQ8TzFT1Xh8tbdiPuvYZedMA5EHofAZhK3N86D9asegmdjJq8BMK2wqMXjpeg",
  "key21": "38vQMRj3tNfZX3qfdQMQWZEbK2BiFCurF39pfD2BNFW4mpfiZK4TqjpxjDxyWdujWAucnpvuUtTruijLoD4Bbxnf",
  "key22": "UPr3dg8GUdjFr9RH2ZGHdyB9acVJbWcPmr9GTVd4ioHVq5QRzhLtug7oSEdY6innzPuWft5rpMWaU1TADmQrpys",
  "key23": "qNL4V1L56jtMKrvs14Yj2tAWnDzzoYvuPVe97Mdq6LCWuAVckD2eUucXua12BgdSz5hpFsUoYoYsuZXkKxeRSoa",
  "key24": "5Gg9faq9jSbDmEJmGH6pA99o77fBd4Fti8cdeZQFL6mXgHfVDwTYivqRuF721ofZGXvFaa1cNiQNoYXwiGkNo8j6",
  "key25": "4x57KPkKVFBSogqBAcJMzWUB4nkrmEGX1RjXTQ7neVhkaLoCSQi3kzvjp5Z6gc4e9ctTHbCy7onbzzD32Vy6sVhH",
  "key26": "5Uj7Ua54eb1HS14nTLRzDc7sbQdonKvSfwE1v28YPc3MTWCasg8xC44FWukiaT7RpQnGJuF9dmtcixFP6UAz9eLj",
  "key27": "3zKisdi5Vfm7S4yLpfGauXhW8DJ6YnY2p84DKW7oxnZ4WmRErNxwfWenssfGB25beipFvYH67n2MHcthK36Yi6Lp",
  "key28": "GwfXwaw5cBNwxFCWqfnocYVTBz6mmNAcj8n3sAUrai8gabC3jfry8RXSbqX7nMpHzKAFcF9PzGXuSSGnWBAqr6f",
  "key29": "4N65jrUimZLzncrmot855K4em5TqhaxfcFeBv6unjC59ecWW8bGLzs5Qwam65NM5qfDiRo7txaMGCKyJyEySRk3D",
  "key30": "3pcYFX7KysAuq5dKumZhF1351KMDxQdpSWFdVxZubX12S5QancdeemBwUQLgZxUoE7JgkxyDHw4YRwZXyhHyRDqh"
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
