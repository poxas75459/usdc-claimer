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
    "29LVic7CqtrNZsJytJdNRMhU6hKphzxTrGSm6y1BUVHsi8JGJ7W96nAXjC2bxcbMKzPNrJFM4r9Qut3uPUSWX6x3"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2HRsgkvb8y9gCwARBshwT3P6nYppgfBJgvQ2sHni8aHKqrbbMECQ4NsmWwkzsdgVCBKzZhCMQvhsVZ6XPcygfaCf",
  "decoyKey1": "3oWGrPLjpuxjJuD6uuxAxGDgsMkSGAdk5mGn5So6UxU4hLuc7Ya91Xf6MaLCyjGAJLC6YrMzNBiZUHoucSck4WK8",
  "decoyKey2": "2NcFh5NxC6T8fE2ZagCPAewR3VrGZMefbhWHPjPWTCBweQHCsYwEQm7RUr2DWbrx7gCcaa4ZdsQX68R5uE21KNb6",
  "decoyKey3": "U5yzcbySERq8dd1ZoPEcGjqqyTVRaCynzfFDhiDdk2c8LtRzWumtpq1Kq298Wbh1ZW4pih3hcaQihRsWFAAEwbC",
  "decoyKey4": "5SvdHbPvi9UkJSNSjvkCsfuDWYr67vaKwVa5QF1Pxg2Y8DaQ49t3vbcqEwueWVqSECGyNmJiaEBws5Y19NSpx1PY",
  "decoyKey5": "3CqxfANHakUxnuJmuk8gHgmYphYL5Pe5ceTF2qZRZi814zVLAvXMFpG2Y1uLmcyoSv66HYoWRcgc2D2bjyoDe59w",
  "decoyKey6": "324DPdN54EEzeSKGyReVB2sXMyAyYHRQ1suJQZhnihkA61CSsgDkzzmbsjwyqDQJ1rynvLtC8WQZehimhX6uW5By",
  "decoyKey7": "3zvkC4N8dA5nxHUVQpFhhkL4XdhXeXbZjDSH94XA3QNK4NzZYwqYCBjGA7brRFXrEKiqfQAEm1qwY2UeVjHpGPdw",
  "decoyKey8": "3LxBjspM1v2VjifQioU2ppFankncDtc5Lsw3bytVsT6KYR59jxQ8TqTT4KkXJ6TFDFZFRtUiHxGqG66QmdQ3XSk8",
  "decoyKey9": "4RRH7ruvR9hwqCNcJejvyBcnBS3Hwf6oJjt3duFt3CufLwY19CFuFSKdwbYVZM3LsQsMGAhMHYoTpQRoK4teTDRn",
  "decoyKey10": "3d1Sdn2F8rhebN1pjQgJbX9abXQJ4Rmt1KCiRvCVjXQWyzC1NEvAGrcBrZ5G1fWfLsZLB2WgMTRyAqDTrMBco2C3",
  "decoyKey11": "5uWZqULeSzLQud93DsGB1KPWSBExCAjprHf4Ub6Zg4VHu34XbZrpftTFcc6dqo3GAroZhtecNn67TyY5G7VMYevm",
  "decoyKey12": "2zeQeSCFuLJDkRzxZQTmt9Q2zMTsZh7buankYrQRc1fKxTv42zdBVy2UbJJDEqJKp5B6sRtTun4trLJXJQeaU9Xq",
  "decoyKey13": "2YmrpwUFd9hYw2rW7EfKFc5RHhakNoo4c3b27wvBeco5dDqgKoGMrJpz4BfWfkXRN5UKdUy8Szty2V4LZitnYgzt",
  "decoyKey14": "5yK5xsMNiKTjTn6ddh5S2qPPwNigamAupsy9YFBnpq3Kc1vtZnTAKzkDgQdTbfMr5Z3fNFBzNhn2kCQRrCsLkJdF",
  "decoyKey15": "4LHpsXRoZfBeUf5jJ2yXBz2x3opYQr1PLQ2GwzLNT36i4zvjznnFU7RTbquiRSAD8aeSNfwayE7uGioygfofkkn5",
  "decoyKey16": "5eZyqdYGvM7oJmcohsm6pajDdUqxZK1mSFRYKEdPRnK7zVmLaPkChzfhJBB4trNPKgJFws6bqRrq2eFRdWJBh4Cb",
  "decoyKey17": "5fBEFzPC4iAyrrPn2isZXgzXro2vqYTrag2cdxC1xzZ9PoBbAWpH89fVonfJgbCXg4WBLMQ8EPqPppdxbCPfcB5R",
  "decoyKey18": "5ur12itr8Zno5x4qA97ukEJFGG2YgVPNSYibihBnszy3x4Esi4wkRsCoSpcjBqTq5JiG1r2ppbVgox2N2QGps4kv",
  "decoyKey19": "5JjCLJDk8Yhd31sCxVTfnzxmTUv1N4XdrSPjqAYuqdcxPVbr5u2pQox4QhwbB115tteS2SK1tZmZjmHfnpF37hmg",
  "decoyKey20": "ba11XUJTetm49hHzC1CgXWzS9g87NnHjyGgpKKaHu9dDtzT7ueWsmULWF1NmGRttyX8NTFMTSVb2jd811UkNsoX",
  "decoyKey21": "4C9MmfWfGJDWwwshN7wTz6dfc6he6PNSHu1YXTBshU5DnRN9trM1iyJ5bqzyYpdspXvr1R4N49nFVUytiQN2gfLQ",
  "decoyKey22": "4PJRN6RHXmtoFkCb48Z2uvrRq5QwKy4iAGPjjFqvJfAuacMv9VEaUR9VhbA7J6WnA92fXfDr1PsgutxXfxhr27jM",
  "decoyKey23": "2tZtkDXukkwgFRFk3byDx6cVi1Y46j5VDHwfgapvcUQZD5gx279KYBiHWTKCYxVGDNGrRjFWs69JYKaM6W7RjuyE",
  "decoyKey24": "kUNYbkdMa2aVrNk6mMsNndXdEruxYTkYApbX38nc2SLq2NfeEN9FQKQyC8soj2he7hN46R173Xv6ASpzETTFvmu",
  "decoyKey25": "2gATdHyqFMpzGQPkQwsHcV8o7D2T4ynby62vnyu5dANyQDE6hjfCJcJiV77d3GJPUTYDnieio3iT59nwwHoacgF",
  "decoyKey26": "3EZpVLoysA1aFFhEV8u9mCcquQLspb5Wbefm6uoAo8fudbngAYQYJ8ocb3u3Xc2DkqzVYZ8tcoxjaWefYjcc4Bdx",
  "decoyKey27": "2zCBegycSVveCHjdGWXJiqp5ysqPKjFjbdMeT9ZpSQnGP8sGJcz4NVYT9AjRc8nKC9DM15zPYCVngS42c6wKiMVQ"
};
// DECOY_KEYS_END
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