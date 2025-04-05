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
    "5rEuvmdogeVbpbLBgPBM1ViPegsxP9JCRq5g2h68KyQ2uBpwxV1LksdcGGYseghnUhaNhHqnsudYvUdaxmsJZd7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtc5b4AaVN2zSnoacYZuoTap5mCzQXdcuKTS4j3NaZmfLGVGznRsKidBjKHdNLjt3R9AykcaAXEkjkBskgRieNM",
  "key1": "2CKdpEEhJZNFrWhsgv6aaixrja9ycxoczEiR7zLWMRp2CVqYYhkZjvjSsUbEB5jLQeZUSEQzacCLb1MzSR3fbxNd",
  "key2": "4Au3PLox56xYVdPmTf7Y2BVSA8iBAeJt6wjkHirG62TGyENfvLaLCmzt27kQpMnteMUS42b27Dg5zG7s8YeUyRDt",
  "key3": "4QpDEv5w83L8ScwhZyrBqwbpL1UncbQsHFZe82NnhF7LEc5LBDj7MT2vA71mi8RMnteNAv3hbYxvXTyMcuZPAsTJ",
  "key4": "2aJr1RUpDFtahG2sMuJhJJu9Ls1t76T6jrBXzXJ9oKcynBE3u5Qq8Dhk3vTaJ3EKgbeymy8Acbb9JQKn5cVU8aXV",
  "key5": "LaL5DrsBJTMYk5o92MajizciJzCJXRLyHxxqFS1kEk529dGcjbK37gu99GxdHREL9DvMkk3y7mRFaDuFAC7K8Xf",
  "key6": "44mN1PzUmH6SVC3DAmmJprTYph8pZPo2zLxdQfKNbHpXyE7MgDXEoQG14CS2dvESAA4uFBGrxokgLfa416af4ESh",
  "key7": "47HxeffFkhRkNHP85kphh5rpoX7GSSNy9RVdETdV6eQm2Jm3LDVFxe62pxnX8hcNCDHv3jyYq3oG54fsry76RkvZ",
  "key8": "5rJSkVUiogcc82p9xKGh7HDG3zCXE3CEw5CH8yuXdjrJkQQwNvvZFXZ6DH4kipDreL3P3kxMrAHc5mUWHJ6Wrpxa",
  "key9": "2BzDgtFXSLCqxz6wiu3c1XyoLkiQphmj4d873vxKktw3BcynuZnEpqtX62HZJwUk6AZGsHyVwchpAJ4P6TtMhHfQ",
  "key10": "2Mfng5ynm5knSxpsNmK2UqDGrX7oRnRLxTDL77VdLcujXY8dkdx9iFWTVMp8TnMptiExPJzaN9WYPhwAJGtnuN17",
  "key11": "3NsRijWMrkPkBM7d1z4tWBa2AJRVrxCiu4g85qA7efn6zhU87tJksA6ZsHNvRDonWUWgcazPBnoX4hVwdA3dV6Bk",
  "key12": "49cxDqVf4nMoxf3xaWWQmzoyXWAWg41vEZc5USLAPtYaQfwd4MiXSrNTfeZyZDFCULDBnuAFTmMi6eUWPvUZPnAc",
  "key13": "2zcXsbK1UVtyDFtXRqZngsdw4MshwfYakUGKTGaAwSsa63CpAt4nSippGvRyVmqVCBHM4ZfNigZFE951ycJB553e",
  "key14": "35MnHXXoiAUdpnr5ywvDYSFXM9aXqSFL2Mwma3Hok4vqcbrNrsTMxMy9cvobm8kvya6i282gpAkzMydBgDsbxoN2",
  "key15": "RzgJ8eiTA1bufVbSEPLzcLh2Qx5d1x6W8r7N6VaHQPhehHjdaewa8YuLZRRUdqJLGcoVgpuUcakuazxsf3C1weg",
  "key16": "31RbJEgusyF2kDRvM4DPF3PVRFXcFkMAiSVTRJ6oyKcSezBEj3KC39YfFegmHtfWVbGA98KtqrajNN13n1eQzqKM",
  "key17": "3wUhKQ1SYqVGuNYt1hdppJ199Nsuh4LrfcZfpXQviQoWPJqxg2JVcvPrio6U8e3vYkD92rD9LXprvRyhJT53yELp",
  "key18": "2STNdwQgzxJTocngmGSt7S453yZrva4zyaFA3ARVuV4qC5BZtw412UjvHLyDJCtYvMeFKtLEpbZrQp3NMx9q2QnA",
  "key19": "3n52ExbfAwDcdX8xHUAgkcSEA2mp8MZxCFBFVHVXYUVfTN5TpScHFR4MfuQca1MRJLCEkBy8qh4BMwLz3iieABFQ",
  "key20": "2RFS1qFMccRZ3DCHqcrJQ2rU1tPBN2cuucnYqQWNMKSN1BEiVgythmeZD5wT3GYQeFV6q5uYQNzMZE95RZBjDwup",
  "key21": "52Mte6gvXqfUqrqi6366Wa5zmbhSTdHDEoQTp729hw95mFqJ6T3kjnAAmMKb2Hmy1hPL1Jbjv45ASKdbi26nShBv",
  "key22": "2gYTVQScv3yzesz7YQ6cW4QaYfh5thNXQBA3BrgCxv8HZ4YztK5P5V1pAuC3aqRwAbjnnNJpsnRnpUJSK7LRKQLP",
  "key23": "djVmWvxtizLgK1HNZDGMX2TwgMBDjquAr53WtwwHToGXmYDsLsZzwyuQfyGX2B1bTc14SzkS21FFstAotRHMnTA",
  "key24": "5Z9fkvPecezWDHWXayLUYkzFm5rz3gZWnjVp8jnEQnqhXjWwS18rLfyBouHHPDaft63qMikNTwwpCzN3y3CPcpWC",
  "key25": "4F24dih9LuasFNtUi1oaAudtzGzuP2dZph43x7PoHjJ1xBv5v7Mt7LiwKMaz877YvnHLP2v484RHLfrLQwsTe8AV"
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
