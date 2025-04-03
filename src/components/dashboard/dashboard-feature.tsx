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
    "4tyc3PdE3nrdak7xjkfquqQN9MjTb71t3FK9JQRJ5tDax6zKruatcL66ZbU7ZLN4HKG8wXVgDGTs4Cur6cgNaLxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DYj5Z4MxVYktp5DdksEosagzT8R3d31GepoQgdkgu3tPW6PPMg2WuPpoZYdHWybevhc9Js8DiUMEBB82aY3dD1i",
  "key1": "3jBzY2s6JxGAkKuLJEdbk1jtz6ZCDvzqxLAp5VMF1kvZFM3Z4UNZimQKXYbYtNXh9xm2af2djUfxq7inYdDnik1w",
  "key2": "2YqKXzJ5zeVnoYtipfJkTfgGcMvzZXmCv6F7qM8Hs9CzhyLeiYUZAnXVzDwcdnoaBY4ra25ysvDodtBECBpQHPiK",
  "key3": "2H2oXnmLHsGERzXVNKNByBvzDRLe7yJe3YjTbMtL3EVF3DM4hUKQ9zfq3TFHmJs8ujcQ5xiA1X4epXCVP3HeiL5V",
  "key4": "8YmTTSbpGLt8Xr1mA8d6Wq2wxhoeRNdkQ3NYu8TnFcK5ZvR7gUU3byxzenpPSuUmhTxSrt91x9xYhHnMcvHQ3u8",
  "key5": "3T53DTMi6yYKwGG6L27UK27hbxmsyaHkpejKtt8mKmzzT2RoPK8AKH4ok8DbnbnNGDM8eMgWhhpC773dG8f371UV",
  "key6": "4vJuffUUnwgcwSE563ykTiagbbiNTGiqDSE4vNbDbMTHnQpSkuDu7iqjM3KgiTE54Zx9mojkhkyijn8ttoBp65kc",
  "key7": "5JsTYNF21fdDnnBL6v8pUnKP31tjNFvbxp8CAqTMfEQqGvrdEHzY6mwoEH1mLzpmjmQzDN5HfFxn12uVQNChhzLG",
  "key8": "3dyt3U79Gz1yHMJYjB8HGjN4ziEgRBWS4VuN1XXH7EaQP2CzniMcRW4ieh29hZL9JCqSoW7xo4RWSRtCGdL3Y8Sb",
  "key9": "4dGa6CDGbqTJ1RzZKE4FJqcAugFViHzb6T92Ti1HwEtrsWVQD9SHTq8LsyDX8imuKC37a1nANUTMZfRUNcMJvoHj",
  "key10": "3tRw3pWBmvHyELT44wGaWiqygmGwcSLamiQtk5VN8s2DFGAfFUgXirJyMFdpSa4w83RN1aLw69MkDMuv26dQ51s8",
  "key11": "2s16oQm4wZzLjmrZPiqWzUxXBMfGaHtkGveLxYMTzypCXSLYgsE1Lhcn8hAubQscFnge6VGMUVXfS4A82EtTrLmU",
  "key12": "3NWMyRJadwFb5iSWSJPseXouGFHczPuotJ9jf6XqNu21RxYFF6ALV57LGQP2mUhSKHm7HrRWF6wmepBwiUH9ySbA",
  "key13": "4qLMVPzUnQh2byv4B43rYjnE7DaW8Pct3rGamXk1m4dXCoA1r1DUYZ5jALqF2dt7vTQpEdTANHbuKxjm3rRAD13R",
  "key14": "3CKoTorLrdzzzfNmfyRxVxcsQw6mwjMNKcWG7oG4HenXAvm1WJE3reB4ctzNJHfi7rNH1eTZLEiSkKRzDHsDbHXR",
  "key15": "fcKNQaSN6WZijAqxhWd5jCT2Z1EpzTdyxL7hV6rR7FAtsz9Z7u2qPVj9sn6zghqiL4JjVecxNjgaJRW2UFBkhvM",
  "key16": "rFLVxEbeAYkTn1Wpp8AXS2aN9S3MBD5rVpx2Cf6CzPXhVAjbvUha6weS6UqAC9ejsnYiWKywvCp7zzVBm1KgUMn",
  "key17": "7WK2XrdhJ3WBWKi4FggpNjW6ratnSAcJ6qKMbWMHRu6XN1GywU6iJqdgHnzboPS2suksmGvkFXJ5caDMekYLnpG",
  "key18": "2GWcMre7sASiAEKngkDwHeuFBy2zwfZQuUdHMRFFhqQg8qtAijucuEYw3J35si6bW4MVBSYBKrT7Rdxg3Yub2JFd",
  "key19": "5VKCN5c25CpyRn8JghbXng9xrALNDn7DBfC5aEFzvurZTPfdNMUbT5UUEZbHDeJUhNU4aJjbhRDjWjuTW5F9CYjr",
  "key20": "3Ceiqdu3xUUiz96wc49v3qNCwi9hHvNfEVDyW39EbztJxujTTfSoVNo9CFgf1ERBLsJaVXWq26FjKwY9aXGKNQX2",
  "key21": "3gbfDvfciDESZrmC8pzoxjZd77evxDPvhFmjCFmFWVuTTT49ihaNuZCugqmVMqYn5DAC8Ktn5voq4Sa3nbmg1YmP",
  "key22": "cceWmZ7WFpC1s8YuXQmt6fqk87r5NqP3rnSHJkGc79jB4bmmXLA6qbNXFYHHcxufi9snNkhvrpFctQfR9kEorL9",
  "key23": "3UGArNYJnU6osqgcjHuJJxMDg1DXB4U8PEvtpQZ9Cxz8QCmj1UFwiY3t3DGNmELCoFs5jzDhJCCMZF631NXi4RMp",
  "key24": "mPg63jPc1BNiJSHKMMMhkw48JtmqqUcP1uPrcwdrqmAgjHcM9ys4VX4ovFaSvZRaXKTUgsevzmvU942wjpYpQxe",
  "key25": "4sf56eDPzWtmGeZQGgWiG8D7oNauWtU4c4J6fnZNTGAeWtXzxA9XMt6194hGVDUBjGBtRLVvGnxVdLsY3vBo5bfP",
  "key26": "4VehSsAiPHG2Rwa52DKEQGCarnAca5XHhmCyAASuUhS4Ya3ZciB4VpnQTTqzTqoizKQPT3nVGcuqEBhLfreCB8TV",
  "key27": "3rb7GXdF8fqEmEWM26e9egmthtkQJkjPAFNVK1gjL5EuRAQ4oUDwxwbqjmbDRKig97LdS6xMoqy7cp6wtTo3q882",
  "key28": "5iw1qsWbQTtNYVub2PqMUcpEfUKVkfsDgEQeiZaVdGycsJg5B7G8aH8YDbjcaSe7ArAskrWXF9AC7Cps4ckrmJc6"
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
