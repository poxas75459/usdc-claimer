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
    "3hNVobX5ifwDYG4UpuWzq23y87DhCazAC1UpWYf46QT1R9CJMBSrMiZZeD7Dr4H2iafijocfh1V8iBDGFgBrMfo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WgGY6TDry5SE6ZbWMupSAH8egtHWmGjp1Zz6ghJDpciaERZ8DttCR26RxcetgAnu1sVAmNktjj8uvmHv2CHX798",
  "key1": "3DegrnQAzbsDfTi7sgGw7AMreSfNyLLsvi6sXzKY3dSNm9xeaMY5WQbAEmkJJysXq9G426ESqoutrDGDpuS4NtUV",
  "key2": "8L6pZcuPcbpj6iiptiTFwSb7pxUEjxgsGarREKNtm5zU87EJeVhJ8hg8jvi6s4SxgsXcH1azCHRENKJ4iZ1QQZ9",
  "key3": "WYf6Zvhxi6CqFQBLzBwdiXPKNWLmzMewF24CDEWv1d3GpuaosrsPNyh2wmVe2d3RaSeVvGsb4bsM1GHP2pRS7zJ",
  "key4": "nQ2aRjugPo8pQRU4ynRXrvtDbV3qYFdV8NBXF7PqECk2v8Y562BHtiECCDg8JpEnsGfRYbnPEkFkT9aRUwfcznp",
  "key5": "4JM6gPwRhvg8jmiPRA3xAXue8sShEVxNYNCAuFL8qWKGP1ZuzZmnW7SEZa7DapRYiXbRfUx1NWxY4CCSMG41imu3",
  "key6": "3ZCieaXVV7A4K3RgcGJyQj5Q81PKxgqfmKvVbLMhQgz4RBVVNnfnXiN1UqVxMWLuRc19umTSbEh4gW4zyXtc7CXu",
  "key7": "reFeTXDkesX1iHn3GC537bFVgwjntzBW7ThabYzSwuKG8wDy4ptnAiLNQLU7rMiPowbizdDZ4mWq5wLCAixxCHp",
  "key8": "5N3qVFW6HuFRwSqnnRTVE1F8ucQfatwYMFvVpacv8vmJNVtAxsVvx8LB9EMg5xwPq4odaTXjfBEqxiW4KcZrdLE3",
  "key9": "5MKZzgT6QccYBQDDoTo8J2beQuGzUyUMyHrwHoef63dBRqEQ36rPdHJiYBpc3xQJCLMVDaYjYH32T71uxvE4mur2",
  "key10": "2qKRiYAcapBna9a2mFGh8E6D1Qp3j7LsSH15AM9NrzX2KEuNKrNofp5zbUZnfNAg3u32jMj62xavrZYS2eGwavQo",
  "key11": "392hF4kxdBMyDxkauv2kZPK282GUyT21S8NPZxuyNqwxNbsn2xdJS555akJkMrQWgSSDfYj2D3ZAZjKb6o3PuZ8q",
  "key12": "epsxUG4gEjsSzjmwoNFGVL7HLdLghPUBSAj18ustXRxGedjxvTyTvWq95TZf26vJiSuCBYZH4n4JHwmYScdsTv9",
  "key13": "3iCQbwJsCWqvKJXEjE5YYwi65RLmEh42iek8TpXpaMBJEmdz6GSKNHwKn6NSv8nNAfKHZEZ4GiqayNDvgSUYARjb",
  "key14": "4wyuAkAXvPHiL7n9AQ92C9n4WpcL2gp7yvuoPnNJah7x8J6KQwxXsmR9Du2xJLsZ1zfR14dW9VZqrxte1kXq4nEn",
  "key15": "34iDMJmdFDgbmFZMybDgNXnHDDg6i1hp8misTbY8mukhG7zcRx2hDRgpCWT81ANCUXvR44p8537AgPpYmZ8ucSG3",
  "key16": "mqaaucVBNevwnBw17fPwSEM82W9kUPPQRbrx4m6FHJhPt5jNcyoNr9UP5B2BVmrwSmxH6FSdBVwb8dQVZ7z1iqP",
  "key17": "3eGQWNUT3D3JddMaji9Dw6p9qDzCPBwEHhcavyeFmU4nowvb7icJUKvbX49NdxERZ1a6Vy7ggVY3SBz7MNxD9LaN",
  "key18": "5LwmAj5Eg8KzQQiuH4tWzhVC3ggfwcP6u852JvcEMT5aKz9YVnrgYpoktqxH4n8qQ6rzDAttadVmVkiMrRyP51zw",
  "key19": "2Dy1H33A9kN8RUzLzZeG8KDzfMzUgcmKamAauWEsFBoB6reBuHw579kFfz8muz4pWsYMdBf1eHUee1HkouoM18Rg",
  "key20": "3TGrxnaocdeiT4sG6E1VuuQWvnyRB6p7JgnL7wmTTg1iAnYzxvn2x1L2JH9J7sbbQCpEwHqG5KqfjPQH2XY1kNT",
  "key21": "CUEfiSesx1WQ9WnYd6jqKZ31rrma4rNGtRUhgyGXTaZbMrYB3NxpbPaNRXtRf2cNtGTTbqHtFGAgUm8wjjmNmiN",
  "key22": "5aTdUD6aFygxrrzG72NZJ4wfaPnpxxXc8987c3AyUF59NnEg2z6iqUjfxaaFnEgg7kfF6mA4vzJQ4vS72TkWKPmy",
  "key23": "5HVCKMJnPxdsDdv8Cnb4igeXWY4KctGtByZTbSWa4TM4XstagC8ARN9AtQbMcDsNutcAS1jAEzWYpDr2kT7EcFz3",
  "key24": "5uo7rVyWgTd7NndnA3ibPCSK5hZBy24gw1AHm2M1XgwBRbhsn6qkozRYH7tybZ2ixhYRHFssNHafNkPzbTv7ALsq",
  "key25": "5XV6NDk6GNPAnyaJVs4joJuKf4Vzoh2g3pZt6D2MT39MVYCFf7K2LBWKmr9u4fXjtjbs4VqgdKKyc6TFepKC44Ub",
  "key26": "RkBPswnRwVhVSqsiMCJDc8CWvLkS5eRHsk499o7fYfvuuuq88xg6D4ZUDzmDTgMP6CBZb7HihUZzQAgs92cqiF1",
  "key27": "3bnZCTjAAtPhAsBWE63kAqvKFFp6ETdU3vSMNod4bqRQCE2umSgjKXdCuzdEZSSECCiLnwk7L8HsFroAy35N4FeN"
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
