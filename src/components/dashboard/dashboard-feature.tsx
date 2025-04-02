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
    "owVwB2NwcXwxwxZKVxe21iA4zoA4gc7nqQmPgog1wrf8pJqV2aiMpmGAyc6XuFDaNymKDrZoYDzhkffkK88Z2pE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2epDWwa5nFKz37RipmTEPCTq7PsZ7DyiCsqFCmUFNkeA4N2rFUoLJkcyinvYW87tqSaJMdBYYgqwzSfG8joh3ruM",
  "key1": "5EmKh5ToxDdxdRq6eMcxTPr8rJ8nX4apRRa8DwvEtSTpWWaCPygdRUCu3M7a49YaVxEr2xwv1VqyoHMmy3G64uJs",
  "key2": "3SmhfTSafYzCPEJ7rTEFtmeWTGZ4MESCJkhrxiEokHckiZyWADA5NxcM65mHFeypyKXQKBY4NbjggXseurSaKHeM",
  "key3": "5zFHkoABMF2EC7NpeiJtXp3auLHYDPLkQ8cQ5vQfCVQTTNvzacacVR3e8z2thxgAygPp9D1eVhVz3ouzQGn28YnH",
  "key4": "58tFB26qWe31EoCwY2pVBrKd1D7RJqqKArysmoJdZMTaFe12LbnZqcBpWdCgEV5BhUcaoqDWv4XaRjjBqs5y3jcm",
  "key5": "2FLLHUSDb9T7FTP8R3b6EKtGNMzsfsJXEbq2pbuofTXYhGiziZR1vHA9zzCXVBJbHsTxCZvMHBzjuj9hJThpZJc5",
  "key6": "5RVCcco74eqdw4fyWwKX6r4jwfX5FSMMVhjQi2RmQcpWdA7iqVh2cyqQqe6QrLmrbCAkLqEczPdtHPxbXdL8tFvx",
  "key7": "5MFjcwnYczS3BQXxVJRoFUM4qHEi3VkTivgSrd46LzAsERCMU8Ngwn2nFtoMU2bKFttVhWYX4SEa1zznvVLPAxS",
  "key8": "47z1KGhbejL9sTPjAHEx5PEj7EYHCSrjSaRBdtHpF3LH2Zs51tQqqAkoopWw4W2i2DrnQ2zySytazv8pmtmN8Ym6",
  "key9": "27x3LkyazGgfY7PyS5G6nRNMEeSSJKVuChmLufbhTkM3PysJ8aSrhbWx6WCqYLTVh1mtZn9oHPZUs7e7JGSmT2GW",
  "key10": "5Uw1sLgSaQyKJD7ZVp1qhSyGcoxs6dLtePDy65HzVhV3ZGBALcM4fW4bTCx4wLKN2vGMmXVXdijFkHMVFqGit6xu",
  "key11": "4M2w8jHAXVVkMDfVtG6jWphAsjKPK1ntpdBDN7Yp2BoHvn2YPfT6insVaUzALqXp7ZirkynV3GmFjGmhyB5NX9Rv",
  "key12": "gCcRZSQcw7K66CksGQT7Dy9BP67iLaCiAA2mQuxTKaSLzQ7yAqL9qMy1kNSbtcvApTf4YsG2jeVW1GsvBK8GAzq",
  "key13": "58u9LPqUWTSgJumWRhmwSghSZiPkx5hHKofZX8QXf3MBiTN14231hZnu5qHHDi1MTYnAdhBNSi54zX4Cuu2mQvdb",
  "key14": "2TwSsoubpm1YjergpP8LykXPf29qsj7AfY65QoVggBZGGDAs7SVtxZWcQk1ZYvb9Ua2U9MK1qwmQLBMGccQND2cT",
  "key15": "5VvM7cG72yZ4pM93VJ1z2TS3FcXPjXJk8job3Q1Q1gbbtZeq7NCX6GG5oM1fQLVjPW256GsH7Rg7ZE94TVFbT3ri",
  "key16": "5ViE5H51LKmQ7Pyv5tiKdE1sb4QL7xZd4FumNHvKHuXoWRcMLjA7bEDo7PjqcfKZ8z23ZeoE1JMdHg31K5MxzMXS",
  "key17": "2HBZG1mm6mCtjf7AGHgqgi9sjZY8F3y4AG2feHaEtdjyGBHE8i6yzeyqwwbbA4YTz8Jc97M2aZzqdSQAtwScBg5U",
  "key18": "31NecoucTLCrMKeB2Gyou8PEszjLVUYtBm96m8zDaBsRm1sKhHXCwriUQrQVqAvSfD8cfxz2dWUxfawMVvvRjmp6",
  "key19": "2DTrkrSkxtAJauHjY6JDECcxX8addGcV9omXn9Rd9WoDG2Nn7Zf7WdegdcB3kNCnd6Jkaj7LSaJrt5m4AVHF3HxS",
  "key20": "2pBUJQWRs7qJBxkwp3Gf78HYSKQrGBeNGSyY83FMcPmVBHQ3o2EgnEnSPvgAVMbQMdUaKp4x2A685p4peCwdkYRN",
  "key21": "5NU2UG94imMhzrdta3PU1xV4mSukwwL9pmfbKbUdjTM7mzKFafyrmtFV2UjijLEoJbLF4sD6ESDQ6SoDBZvgDXH9",
  "key22": "4156F9B6x46Ae4iZAAiPNv14oA8B5JbVFrJf6pC93xrCZPAHfu6JtEMLyAwKeiA2UMHEfs2J6kPjcSDeez3xLFkq",
  "key23": "2hTvtqvPq2g8wx95fqFNPmoWunzukSo9YkrqcD9ZJn9HR7CEgvQKZmyHJWvdo7q82sj1FZdjffaJGRJkXWTrzFT3",
  "key24": "45z7821f1jR1A7zQdzN9s386dp61T1YXoNYQ5aJw8d8tKqfxkhSwvFTAL7JMxNqEQiTMLSQMDGPgHeCGMSDNxq61",
  "key25": "x5Aj7vhCJoSaB3rRBfg8ZWKNJr43NQnEzEEv2zYkWpi53TDF42n2aV6JpNWFy9cUBPqL1zWEKE8if84EdcrBLuj",
  "key26": "r6UyyfohwjDMWu2394TTYkwxk6QfimUXANKTfaFucPG6gmzMwR2DWNKyermDWZJ12FvncTzU7aoPBsAkV1odkK5",
  "key27": "5HgfqkBUvd9vo7SNpWK6i6H8JFphnQNLZ99N8paVKMD3fGCuJD3MeNho92aTXwx2NRvK7XiqLWrtbXBVWhQ6EtVi",
  "key28": "32w3pgRdADRf3JK5Hg9TcSSLRniKDcYUqDa7LxwiHMPv9Z1WwHUBkFJTMfNarp9t4WBiTH9ByCgBLbunnYjee9zE",
  "key29": "2Y1CMVjJ8bZyjcjBFrh8mrhs9go1FB7ohCLHKoJApJ8NZeoxU5GiveHLpTcNZKrfVwmhELgbWMEPuK2q9dN5M8bH",
  "key30": "2pnSqB1CN4E1rq26eZRGJmzbkkJupr3hn6T1WFC6yUB7Tdd6MXD3MGAapBHKhVtsbFXjU1RTHX6qyYqhjV6Tex3",
  "key31": "BDzN8pxbe2LZMatrG9HrykjTVp6zgbtKCjZxnWrpJ6Uz7w4d1aX7c9fAPV4oFyVqAHh1zCGRYZsR7i7FeLYyqWn"
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
