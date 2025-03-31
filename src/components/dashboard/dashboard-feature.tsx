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
    "4jVtm1NemtWJXVmRJrwNpz36Ac83xcVfK98dzF4L8kbP855AnT3B3DG5ySaLFMXGCDcHz3kynTMa1a3JhpkVM41M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iZ73iACka1Fu6GgJEH9XeFiJTvv6wooQs5GqbCijBvMqdYCzRpELRKvjWUHCqedZsJRRahnBDj419QA8Cu268uQ",
  "key1": "Abz1hC6TkiqW3vBAi6mMyJ5cZsyy6F3b2cfhauVtdDngVnHqUfRugfQNvFXemSqzvPHfv18paYaVGkpsbX8qH45",
  "key2": "Hm5SLHBBJJBSyjsEyVjcBtm3fu5gXQ4NEHmkooLoQWQEYRp1EW5PHJLcc8YF61To21FCwtM3NYgBTmma7Spi12d",
  "key3": "4wJvT7kDBWywcaZhz6hrS8muXGxC45yE3m6VmGPe8pjehAfDBwfjzU6AfewnVpmPNbogFr5P5s9TuvykxvKSckPp",
  "key4": "gdju6kPVR1CUAYZ1qy2q235DtqEDnXAmdZ2HK9RL1u1yVRPWrc6S738V7W9kcQVRYiMZRwCr3GanJ1ZpdZGkEb7",
  "key5": "518EjqtrThp95eGyeB8bg5bvD7WubEQmQdBSxE4unkuowVAVT2dHqjrZe42Yvm8qa1ZKkKfH9c8Wwgmd1xw48UYD",
  "key6": "2gphwvR2CfLhrjNrpqMzaJFecshPSpuvw74twfVhqaG6y43d82egPpuRwzokg5yFs4mZsjBV3mxYGjBDTF1N9vUr",
  "key7": "3yQfuhoTgdmiYVb6q3EACvnC3e6PLTmoQYhYZhbeBLQuqQ9v86c8s9CgnJ8fgpzLMuJx8AZYxxbE6yVHuMHMBgRv",
  "key8": "4bQ5kRS3WVfpKGey8jUPW34RWxJebgCumFiptL9YrpySi8UYizVdq32hwgRBKoG1RmJdagbV9n36xDKqaC4eiJss",
  "key9": "2zsTCPzUVQczLwHMguE1NVdQE5LzoZDoFxYdBt5S5B1oMPgQfgS3dA2NnVUaxsKNcypeWQf6G1yTHETU6AaoB3ej",
  "key10": "5QSosGf2zQjC9Hb76NeJjzmGpNHogTuCDTSYEfyHJKpR9nZemCuhBaEP9256VBpJgRdXuc8hNPKHGtU5BR55cDN7",
  "key11": "i2GRuhQkwwRQp8rRaww1tsPuiCiHpnE81keinfG56ZZAew2jhCqNBJMBsW9XZuvifPMgJ82ZTFEUfQxy21PD86H",
  "key12": "3UksvjwB41co3HtQjBKNPYZbvJWYaSMGrrMXuupXcmv31XYbboW5CwzVjFGdAWhdyn3GChmGXUvcMhss27WpuqdS",
  "key13": "4p65yojuLDw2FUdwR92KhWg5ekjcaDH2m3eurbS9sLvkPHBMrjDgn78FJ3UEGDCSqnW2gHVfDogDSJiFHsp9oEWt",
  "key14": "DunzSaKMU2Z5bJPPjDX75upotdkt7s8Vap7r6eY3QRxSHRvfM9GGMBQum3hMz399fybpfk3cVoSsY9yb8oY1Z9T",
  "key15": "3PzPFiAnfQYWfMiScVzRZbJ4WP7SioP1TDcAUDa57f6iGx9rubbb5dNTidW2iQxdCbH2TqRqbpTBRaohTc7xN9Bd",
  "key16": "4sXPhWcv7sEdYxvyQyKRHDPkA1gH6ud1u7VpV1uFEQ5ozQGBWfAS1zo1ds6y4GhuxxaM5FrxPc73Q8Py1bDZx47b",
  "key17": "532SVGuhtai3ekUxTCRVT7Y7CWSetkWkFQFBVpNh54oRjVXaFAgsXNjKqNKHFtYmNQYa6ebzQu9kUMh4y21vXnht",
  "key18": "5rBnHUPXjWBfsDVqzSSMUMM4761gNPehxBjph2sskQwpwNGWwAXKBDuxdzk3cJzuE5AXSXBEhuBwstNAxGUY48ra",
  "key19": "2mpm31JN8LM8h9N6J7WNZwwyV4RPtUXB4XCCf4s3WjCkpr2XQY3oTGmh6VuHfgMGWHAQYSv6r9scHDxa2uNYatuS",
  "key20": "55aUYyitGCjjXuFEota3uom4sBHxDuzLPSD377TgShY9Zyy47EjViwruNs6ciyWq3W14Gg3VLsxxGDtKZAfyThMA",
  "key21": "iGvXpr1hiRSHuSvXhRTEQSdYgBHrFrLtoiopcsqh9e7y5CevPwYwPhhAaKcEPogNdi6Vz3RUU2oLKRA5Esig1dS",
  "key22": "36oQEcYvivo6ZWL4QYk55N2hEvnZiKDLefVTUYW9irvKvYoPUnR1bCKUqqN51dx1vLvzfad3NT5CijGh9gMMc4qQ",
  "key23": "2NkUrZgt9vAgNh5TdF5HafvpKML18B1F4UKg1WurTC2cSiKbnRBXcV3PtkT6qAazitRZAbyRFAP2xgzxmb5xLSzt",
  "key24": "Y7nsA7C1hHyi4xUvuNxKzpajoRhckfN67tzC5XgqaTk2gRJVSs7dz9z5j3M1vMZwEiacRL8E2bLW5BbFSLbpYhq",
  "key25": "62U6n5NSGCUUYeLq36239kzthaPEjfca5Bg2bXHm71oTacMWdLuu75Xd2trYHipFtZvAyfy2KYNFizuDCAvVEea1",
  "key26": "63pn1Q7FEoJPVprnF2LwjGeBYP92AXZvfD7xzs9F9G21MQ2U1RTks8LvTCiL2epmsuHemNjmcEiRLt9E89mpLNC9",
  "key27": "43LQcYCZsj5yZd5a7CGnYJVMb1vwurQiDDX3NFhGeJiQZ2PLkUtNwozYCh3fDbwwyyM18nCkLpiLiz9NkAy8N421"
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
