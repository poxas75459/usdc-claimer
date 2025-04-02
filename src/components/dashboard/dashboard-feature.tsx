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
    "3jrDAZFCtRFhyQGThKQvz7VHvfpaXnGPJU9ZFz92iyJvieXSWD7Nj3Xnjk1gEifq3k1K6DjBymToauSdd8rt69xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GejDrPa6roQxpUmsCiSxXiZdX4s3GYtvFPALYUeCaUPRMfZc8JLCjof3aJzTjngs8y34GBvPi3MgKKE1RR89HU6",
  "key1": "4gbdTJSg7DReUUHp3CFz9ca5xNLzcwhrstsKE8ArhuE6oUjq2TQZDSmNXtfBAvG1Ru1pa6cWCzbM6kH6Efxq39d1",
  "key2": "3DRnUuvbZeqnmYrujoeVjZS8RZywCibQtfTyBq1yBzFK26YiGG6CwV1Vda7zLB8w5MhoD8Ug1mZM2oAnEHxuDBAh",
  "key3": "2RUWvftxmxUXAMwkhH48tScF4W4GNd2cvBzwaNjg1tAcBiV4GeDSJTRrdxYqSqtBEagBbmsv45HUB8oQTAnadses",
  "key4": "5xoguQfFuoBa4VT1rTtriGVMtXtn4vq5Q1WyL4PobJYwwyoFJ1ctFmksPhKawvdgKvYWeop8rm1gZC6oGu2cG5ap",
  "key5": "4oG3BW2AU9X27KtWixvGRtsigvRAngEhmix28LvtRtmaWeRDTkkFRbrjit6rmiGmhxf9nVhPELjzDwVy2xhLuhHp",
  "key6": "5gTxMntLA6EqMPrL18mrRfJb2Nwo8QPGthPnnuPLdnvc1Mfij6MH9tTsuTxztQTFQ1n9vm64UGPKwt7SZdUFjC2Q",
  "key7": "3NvHCuRGgkFS5Wb7FMTqxFeXSSsj6WdH7kfzm8vPSnKsVzHdxeh545pEE22XptgkCpyGbaEGZZ4AqpRtFTXMJ8qv",
  "key8": "4mpTMurs61oktGpZcjDU9wwW5fYmfqDb7woj75Xbf4pWUoKmKcQuRxpfDDhJXmRbxxUE2ZGjbWsQgSwaE5vuKk2p",
  "key9": "5RWApNV4xAkJUgMTVw2qYAfiDYDWqJGVpdbJxGoPjzxW1eCPqgSBZXikQqGrrmQoZQMnvvQMvzAAW87S7EKVbD8T",
  "key10": "gZZnNZxGLJEGvxVL3abW4ntg86oJCLeTTcHfqJVJFhnfRPrrHTezh9DM5ng3yxgPqyBFCnXAPLBX51NoToxpUKF",
  "key11": "5FLViLiiD9zM2mkTxVqPWFmiWTkASRLaFmEiDvS4BN1KFu8q1Ryb2cfxdGbmhY2PC5wm5Lxqcodtkc25dSemztF1",
  "key12": "5Xegv3KZU4nCp3kmWvo3AZR4YXEHqapcVg3XKEFP6AeDCFAQGS4538JS69SP511tcwFvCYT7ruQqRfdMTAgLMBxD",
  "key13": "3xe9ndCpYCQbKRmPnGdUF1U95y6m71RnZFVw7eYQFudwt6rUqoK4LuR863GzhhxA9ozCLVhp1eLBREQtA5bQXD8m",
  "key14": "5vtdHXRccBEahk2bHcycPP1mZEJU1d9RET8J41YPfG3GVdanMUUKYq1X1vTxm3Uj6VDwPTbstXhsWDLT5wnn2RPJ",
  "key15": "vYDbwtPKvtnmzVAp2779N3S9YzYZHt2q83d9R1M9Y2mCS9T2ce76yc2t9zf6e52XGbVH5oQd64Rf9pmUFkXQH7j",
  "key16": "WZzFU7EYhsxVWiGqJx2rNBJD9Zmf7Fos2CQywWzNm824nqXyGY8a3Z291dpZXbDSrwAB3VucRtBsL9FkoDvEWwS",
  "key17": "WuZzSi2T1CLMkD8Uof55f5hXxqZeLcTkNSbGA5Y159y9rt5RyVNkB1bish2x1eZjr5bDFCedSncMySxbouKZZpE",
  "key18": "8Tqu3BVddJab543zjQt4eT6T9CmSGKPJtKfw3C1TDcCd6oSTckEenJubg5pCMJ5VKniHK5GimrbftU8dbrh1P1q",
  "key19": "38JifDCMNrqkMKNuLHed91uPuJVMDZ6hf4LEn9FSpGrUYGtx4UovipSr7jUTmKHjrE67gjqLG7rmpXvhvXxBThhp",
  "key20": "39Ny1GFrP984DUtUX7JyeNpgSAumWUzWs3czEv69mf3dwo6V4uXY7X5wuECZaxjM95j5W2zJrSBoSX59mSxygUig",
  "key21": "3q1eY3Rsjzgj7LdKwkXYY1Es47W7ZBxvVrd6agoJaDdhxKJUr3rh5euiLzF1LcpLeNoCRQQFtASpz9ASKAwRthMw",
  "key22": "z4UFtjrvtBDX3dWmZPvwp7FhDhS31ADsxQk8UC5ZCP1PoHR8TvuXmQqBpj34mc93VR9ysKi6ZQZQ8f6u6vidQAx",
  "key23": "2TYeLDRmnzLsdruKyMJ6L6tsK6FBofQ3718oH6LgsnD6qdRZwMohq7xyGmbb3XddKMftnBUa6oMjFHPM1UEjUzLE",
  "key24": "5bKEfA8YoHmnKcSbjf9k3pKwbvcMX4dbcuPR5qXbk9asJ9px8Eo5eVrvsKmnVfxcDhqE6UQ8i5KMdkooPfKPWdzE",
  "key25": "wUMXkKkQk8r7EDDa2h915GidNEuCgo1ggDKYmLmsWgu1UkemsPtZNGqCteZBm9yiCu299wfncZwK8zrVNoxaNG5",
  "key26": "3Zfb2v5wMsW4tLGMEiWyyxMxoeowfe4hyKHt2MUEBdQK75Z7CjUQYmz8McZrTkXfiLrNHd6vdNGt4A33KxtyPCeK",
  "key27": "2dN18qxZUvxrsD4ULRdMZvrhy5fojQAsviprLKmYwCdsFZUiVujoPf7hos38AoDaGXfJFGJpRvzkZVEN4ar7xB8A",
  "key28": "3pGmi1KFV4Fk9YFH4CZQWa8UwDaL3bmcaAFJVMTAVKPDngskVsj8z629invuQUKZWLqoKTFkJKxgcDHnm94nY31V",
  "key29": "2DSUY7VxbBBrkMwT8TH9EbVWo2WK281fcqsEecwrzPKKdakdovuspcag4CgJusVvjBZohzAq2rEWw458JEHZ8bhb",
  "key30": "4h8uGa1DxpHPdqVognURdLfe6is3NCbkgYg5egbAZgH2EDmK327n3mV4EfwFpyX8SYuKSwpdXb5mEXPaLz8GnaQ4",
  "key31": "2C17LLtwV8JkGG8VAnkgckxUw44Ftw6oKcy9mCkyH5RYPjUyuzPMjm9q9zNRKwPBBNV8SPfiXXvtF3QXhkyFV11F"
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
