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
    "5Qof1tFVEgjKwwFyNz37y2SBkcEW7skPwoyQCdjZAeFvgzsfSk2djqLTm539MsEX7hjjywABoNf5CnPrPf2B7CKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gmK36Ggcjs2FTMMk6qJnwwFj4AJudMu1V9Gpc7nHx3UgsW9gEpgW9iA2ZwAKLuHXDdkgCecWdvxxgkdLr4eFjzA",
  "key1": "2QFRMPjF39MEi2PM6GN8Ssz9bJpHDopkESq5tNVFLu6zbMKGyDnPQ574yGYUYm2TXeqy6rSBZnia39Fd7jHyaryW",
  "key2": "4ZHxLiVhiFxLAy2gQSHKghZ8uBGLiBVc1mmnDGU6LvEK4NRSL54NWq4pu9W1nuTup2Yu35G6FYerw6ZX5nA1ydji",
  "key3": "5UYTEzggZYAKaqVHU1m3bkib17NDZMxKY8uVfNaAtiCjuDHtnYCvuhWaV8QDeoiRFkw9wfvnKeTH788HfqKVh9U4",
  "key4": "5R58LQCpuNn7PwSY3y4XQGP49jW4BXkZC89gqXB2mccLK6TNp4FZehX1qPEQpZ2uXhPhxpCGAxrN1WqsiDmsYHsH",
  "key5": "4MQASgPPkzjbRquP8RWp6Dc2QAKiwkHEb5vuYkF7zESWCqjLfvvE93LowDvSa9VWqazqbMiz4JK22zxLNMxbi8a4",
  "key6": "27ckBGkVMZMWB28KEmMSikLbAw3AL66nXCvzEszktbm2chLu9hHbq3fdd1qCfgeq25EksCom1iRd1SEMXDXs81ig",
  "key7": "4u4yzqF8SekJY3LaA7fF4PV9Nw2ZyG9j5KLJbJt15FoyPMvaAabUzPXcSDShQT7GUXQYjcRtvvwnQ4fnbpGkUkA",
  "key8": "4UUw5CAzM5Pa4CvzZXx5Mu6RqKdgKPuvhWb9nEKGrjkgMG9SFqgMwWcXG19bbyZ5MQLqDAjSMnWCiHH2uhq2TCo1",
  "key9": "3N6L4UsvPRcCdBNgjX8p6Ws4TjiU362gUm4qrScpNuaFA4gShRzAXD4M3Btg9Voe7MzTaaQFW6M8x5AFYbyKwiwJ",
  "key10": "32qbFDsU2xB8Lqd9ztHV2ejURtPCzPqv2HKjifK4rjbHVe2Zk2yj4Te1tXU7zqJ8aXUpc78v8ZjDEPKQkGmwtE7c",
  "key11": "3dMwXvD7Juwy3mJK61HK8bHFb6ats7CLLSfx3wEtqkbmefSu4CKUTvFZSitVRytg6sS3vNWDdP9WAd5k5dErGFp5",
  "key12": "4SDzsvx9MnW6TrpitrzZmKR7d6MS81bwJhkvy5zKisKKkzTegV3M8vTLv8UkAbuMZUJKqt8pHFyvR8X6eZ4Kvznj",
  "key13": "4V9Wg9UdY7S7ugK9hiyhUfjuXGjuzCjXyLRzKHkTs6HmFUu8u3HbBybYNxwgL2wfy4XRgfAYWLqhursBhBicE6m4",
  "key14": "4yU98iAUmLACB6KNmcuUKfEWRsNujxRN7oT6mcSXvJKHi8VLmq1CJzQhuH8QzwHxHd9tPiRHWxmye6gUbrg4Q332",
  "key15": "3s4JLrJJn6TBr76ffCYwPo8GQTmiEZGNfV7kLSTgzWPngZnT3A4nELjsH8oig6eTPgPZomSKaMiF8FvNiVUJrFXW",
  "key16": "5jArYnKaPZy13Van6Spvf82YLJDtiRCMNdST1iBNV7tyvmyS4zDz1Du4jk76KYKMUZYAkYwMsZ8QMWtBsESgbpX5",
  "key17": "3xcD184hdDJg5F7waZ3CAGvMzzEyZN4EhNn7Sxzh5R86LGFjy3iUdbG1CiLi56QQtEYvhJkFE8puRyAYBySdVzAP",
  "key18": "5f5NZzkAdqhkeZtsYWGRpPhoYKBamZ8HGYnoh7i2vSDkb8VRnenp5ZFNai3dzWoDwS9dRcQsPqfHdSdERP3z7a5c",
  "key19": "3HRoLLX9kWe5Pscr4Gq6kFYh3UU9KEPdrm7c6FGJqkFQWBXyniYkg7u77SUWmqG23k69pSL3gRvKcNHHyagNxm7p",
  "key20": "2L8SZTNmos7qPFhaMr1Lu82Q5AWaUZXZnWcWxHxY7a5ycffBBrGFXGPuu7kHwNQGwL4SUbXzeEBwhbGvVuwrhwHY",
  "key21": "W4EyAYxcEV9uwvUE4j2mzZoacACMcTGc9mLAd5T7JP6GeovMEVmcEG5yFFzLgiMHxxQTPswvgE4yrgGAjTbKQr7",
  "key22": "YB53qjPu7wjoc8SKYegPgtnbEEBec5LsNQXVx8fGrsFkDgmpmYhDZJDA2QK6diBQKJFYGMCiiP8N4EAcHytsYut",
  "key23": "4zrftKp3a6dg1SEewrrAHfRVHjdLb2KYZGyaWrEzVEU8JnBEmxvcMJeqPkKbHCTrQqXJDMSBkhfx36cSGTM4tWgh",
  "key24": "5fSRMbt8QWmhwQKad9xrye3NYGQh7MoSRS3nhdQp4QJQ8tx9b7B3PshThUMgsTLnsGsCn1SwaKxDhZLxTCxsWmoo",
  "key25": "5JfhZrdPFSMqtWZ1otZn3peGdJNDzQrwzYNdSK8HgesnnarEG6Y4PsPqszJxeg1b33yM51YjHueJrtsAecUPuq9L",
  "key26": "3sqy11ao6Kbz7KcpiHpFbiEHUcE9MXQMHHxVCP4mZqKums1PTFKtSE6H5zs9vycqpzLAE1oUBenovb27kYhByxKs",
  "key27": "TDVaG1FHPQZoHFPHWQ8RSJngfY5kGAzU5aF6dz8dkvHMpMMKX5xSAEPXXvERRn6T3afdhWa62mCj64YTBdRZvvM",
  "key28": "3znSyjAnt7qUoHoBRe5M4R8jQQDmrEJHppy7TgUcNgqZxdTwDkxywfEjVgo9pqS1B6sgYS9EJetaBbesDh7h5tWp",
  "key29": "5TQ26gST5dBmuqTYEQXDUErdMLu1FeNsfyuQqDc99dppyEWCYoTzv3iftrvCnpkuxEbciFoX9VLknqj7soUcmFeD",
  "key30": "4abxvmy34SgHHbaG7ac8cosS4M9GWjSSu9PxZGUSr9zva1WYcojKuECPum29qeUWvpGkUECJqczHiUFXN5TNQqXH",
  "key31": "5WXPQPjVHAcpUQTrrPKsZr64t73BdhW8LXXDWj3D8d2KgE5YVFgTGo9yFJXFNN8bJ6cHxAYeESwsSLK9dBSUn8jf"
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
