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
    "Dg3dYyjTsuUKEkiTrqNm1skmvNwkJzThHxSzNXAtGPmxHSyniCv9gEJ79QeqDLMWynKo9xkZ19M2iGRpDQsSiia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mmEawVGUoKxPTiW9L43LNeKxSwaoa9UMe3KnF1Es2HkzX76xEFAvQpxzAdsMsHXEsge7AMNFLrYEpNBVm6XSig9",
  "key1": "4G5oGuhmfcvu2mt8TnBE6Lp9z7YRf7TcMTrvmR2pTVNyz7cLGsTL6Q9HHsCbqJNbTrQEHwD2VpEjvsb8M6mp4uCx",
  "key2": "4bVuWPwUcLcAQhQUbu2LN41iKoWFdY9qk96k9AB8Vx9Xo6oeZSAnbm96JUbdvWyJD9CeCJ9q16jt6QtRpBQD5wic",
  "key3": "S25qnyKeZCcXZeauYUS24DWwcoqiegp1aP8pj3tkTi3FSBccZxUGkoKvCQvGUazxADYQE5QcTj5tgjX76trCeiE",
  "key4": "5zuBg13RHvLTco5Djb924s6KCK6Eqaiw541GxNNreT8pyPJp6YMotjES7TdgsHCXqpMt4Jvy8ogwAqtyrhB4TPxc",
  "key5": "3s4pDjXVcbwMbyHm6zsvnEfwaTzrgD8qwT4NREchGj1Nsdyy6RTty55kgNYzQnPMarzqHQTUzAdzufcPUNfmSZ7P",
  "key6": "4cit18rE9JfntjD9e2qFHRXef4EnGoE7NJRhvEnxGT9GjTX7fa4ZGJJvdDkzPQPwtgFnRBH53RgEqtC3rjwXixS3",
  "key7": "4i2PKoTeP48WvNojqbCPHa4qtLnnuTPU9vqud9ZK4RfjjTdCLzMfXNRqdUcYz85Adwn4M1ppNUPBWDiyafdanqff",
  "key8": "4DK7qZY5BXKPJUtQhKQSG2kRETzPwcRFFX1RFjFUw83q4D259eTkYugmSAf4dHx9qaJgcWWZFcwmBeQwKmn2sky3",
  "key9": "6fBvR32x6DyekTaVXhs6izhRJX8jgSAU9goDRwVmN5jHi4b1chryVGkkeqfTrE5dwnPiFGXb5uuwjgWs3XKPJQt",
  "key10": "3LWUjxftrVorVf6FEUFe2BU9cps8dmrRtnVr5xDWQqJMAajiZtFaNiCsmPac3dERdmPfsHNfHexb2ce1Fn6v8E67",
  "key11": "34nQLogTdKCtvt1CNGxcCjPTKdfjwHnYTZJGRMKUeptbrVdWa4x6W7WZf2Fv2egJ6VPDKSqy8aCiR1QsF9hqaW3n",
  "key12": "6fP93qntFNypayBLpz2CPdSU9RXvW1YWBqPSf8xNfYcXPkWbRS1tjCu8aM2iJg4WbaaxhnZW46Hgz5UaKSHZM4v",
  "key13": "e811XnqJRD17mPuVFxHYSPS3X8EijHgGNY2LGoKVsdRnYbYaMdzTjYUKHLQNU79VEGw6x9Dypbs3hzMUqske7dJ",
  "key14": "2sasjkPE1CEWF2zXNQSmG6UyfnyPCXHuzeLbHedFxr6pZLRzfG2ML6jNMNLMf5EbetPMbxKQw7NHf8PvgJje86QQ",
  "key15": "PFyU9dK78jXFqL2hUcruc9s6af3WJ8QkGUus8zxaHcLpeGE6LGjgDJUTEAB9nKsHg3TwKfQr3FomLADdtJW2qoN",
  "key16": "aceCdJZz7SqAYu2Zp9Qp6zY1vnm3Z6HnjAmR5uB8BC3P9Cq7QsaCVrYhr35E4bw73H3tijwNVk8NkMs1Lr6A4nZ",
  "key17": "25GGUeKdm67Nssjhi8LvZGHC83mtUfqAcBdJnfrCxAM9rKW4pEedZJu3L9cabdKhQsv6t73bEz9LdU56nBPoXeUb",
  "key18": "1WwY9pQWwKwwyJdFLefbe4AAd2kfVNRTQxGyQhQxEaYa1gRrtpSyR7t3H4GpkPdTvoabYexPegFw9G6mYHkgByQ",
  "key19": "2TFru6eN5WBzgj4ohwAeikfoB1sTRdoFtvrgDa4EP6Ntx1JmBr5YaFvXaHxf9dEuXfN4jy7w5fkxLyD1hVABTSKF",
  "key20": "2FZPFTmzduVtRyPMgPmGfiFpVPA4n8vDek7EgLbTaNw77QUKBfTqvEtRM4YgfYB9KkEgUL91sHWi8uKAPWUSeoKB",
  "key21": "3mE2CrUgt8LqE3MVM4ExKK8d5ELuxzQcAWWDrXEML9U8TWyEGDoUC1oy1J2p29JSkykEp2FbtkKZFNsE5hCsBj2U",
  "key22": "5DEgAAfNFxBv6UcnWeaFN3tJpkiP2QMxuW41fa6xyfR9ZiMQtJbCj8of1TKc2D4xzwruGtrYyVH83LZVvTdahnvk",
  "key23": "3ponUhMmWgYxx2U1s1dCbkKAYaehWQqriJGZxcaSE7p2qevrgSkHqkjzhVtV3zcuwF56NBpPbGKaUao3TL7R7HCk",
  "key24": "5qoD6SSYTsoih3wBz4eRfUWpRpXQYdR2zLmBsEVwvh5x7ijyPx1pxf8HmTCMc5qq72j4NzBF7yAiBz9fztyY9REq",
  "key25": "2DrKx2HqhwPN4wv6Tv59XU6LRDVMG3ugdUR2J2pGaeogmp2Cw7WBwq9tzMHDTNUiDSxTJknWzSnKsFWQdVDMA11h",
  "key26": "269xuNaLBes36WZJpgYxzwGfFC8U6vndBpBvYfDYKengAdpxALLcHkhDyETSN6KVYwJ8WdaNUmxeQHXHKAAb3Soa",
  "key27": "56gk6h5jNQfDtm4FZJXqLEfsMmmyMmVANr8wnd2KASqwyPWnXsGsKDszqVCXttFN5DqBsCikV18eaVE71RBAxbCG",
  "key28": "422cDuFNLtNpTLJLCytgsqgCd29DFv6tmfx5r2qv1GM9rCX9py1oaPAtQzrHibRXqX4KFP9wYZekUmCPbZ55rwph"
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
