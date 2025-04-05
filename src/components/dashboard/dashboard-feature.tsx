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
    "34Z7SgmazpXTX11FqUv5ujVvKgaRQxXbBdLCzchtF1w4Gc9qGMNYsm4uj2fYV2i9yuhqjLs1HoqLW9nzJUSH5SkD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ae32W7aEoNBSFtqkEd92KLu2vMDhKf6EoEwaGfpWYc4tA8ZZfaKUufCcFHaxQh4oZwH8RKWRRYHGsEjQWjVNkgC",
  "key1": "jLm8tGXwx321tFtgk81cr1HpssoSJt2VHdoEA5UY7P11L8cf3GsRcfXMrsLv9sj9skKFTkEcAg7gMGQ4tH6rLMQ",
  "key2": "22FjBBA8iJNpzLaNDi8aVT2sWNPFYgnisLhEdF8pr83pyTx93GrAN97Jp2ZJmzQX49RaX1NBYimLBmYk6gnrdEoi",
  "key3": "4R4KYxaNYivBqFaSBXzAZi45amUK4cKFsQYq2tqCJvPa1W9FNmAbnAVd7zGdZzwQ9hzSvi4m9AGt8onFpWrXA4x9",
  "key4": "54Nh131cpt1WkoRHLKCmMDX1sw6xWCJF4HqiDMsNtL61VVXui644xdAK8VysyHxhAYLpxXWHNPpRbcJHw9GuaaSU",
  "key5": "4c23DKDy94NELCKrUU6qY7mE72vhUhrmhK61sKWRfesxdPraHhj5ZmgXNmoecwMKe2epe6zF5gwARq6c74kykPEW",
  "key6": "2yTd11KVVWDPnsjV3scu8KL2cXqefY6dcwawxKggmyDPeNKnaXHbMALsonSekD3Y4QBezRp51Czk7FpU6aj6NTuf",
  "key7": "4kooczrn8GKA3DDvVrzEykytTfj5tn79TBdx7gtsLtHvUZAxdRGGgCc4557swBBAmk9dB35Et5dB2Qz7uPXKEPYj",
  "key8": "FBiuih7ntZUArW3bhHpRQYC2JpH8TaoL7aezES6m49V1iCV59hGtt6MFj1hLNdmLzkakxyHiVgpCfhiyBggrJzG",
  "key9": "QWscfWndYkDT3z4ujpRz7fabxYW22qBBbjwjbDV768qUxoQdS7hGD6DEppk9uJV28muHsnqhNHL8UgKKYfGyrJa",
  "key10": "4mu3b2BwWk5fSVqbhpqbe3WFkkhDBXQrGNUsovdaht6e28jL6T8Rzo76WGtD76JK6KV4XHfEJRa7qESG9StTRhuN",
  "key11": "5ab2GELFDxQfgs4QJnijYwNVRqgozurZZnzRGVmGgshZqitanUnALe1cKSgmkpZvb2n1eXUoe5U3Fr24aWzSUatC",
  "key12": "3bWN57G8bcv3oRpJRcShjZmmo9eNaDWRZ7gcXPYW8vDJKxnJRj4zKEvoRfwC64WqXeBoqLXNRvYHWQb8ZF3bqNK1",
  "key13": "4EviVcDHjj71EywPdMyB3X4wF8w99knA1zfjm5x46wA4ZxjjhcuJSjphBD4cRTP7wcjTCPJmMAbZLNJJPQMQyvic",
  "key14": "4WjGJf9ojbF8CAHvVdnRJ6yzQYY81G1ryqY3e2kBv1pD46y3wH1bcYHJ54bWoYfPFUZECBAtZLJ58CV77QUTssMj",
  "key15": "4kujdoKRGn3qeZKrWwPGTtwme1fv4kEE3PCdBvQPJuKCLpZuuvAH841o547ezRRvrMEfhrzTvqPVQGcETt4HNhHL",
  "key16": "2bdfuUaFKDG7xshRUcZnX9S3dmqekhffcfeDPnxScN6cvq8Hi9tBcZunWJ3nUypbNfRYr9yifATiWfNKN9aWGPdB",
  "key17": "tYtzN4DVJU83tK8WTcKcHEcykPLPMzmob44SPrNB2AAPe6cRE4j8va6jCMGJfui8eu7yaLz1FSV386M6YzGtjA9",
  "key18": "4zSmfTUxYKJp3vDrExrCabZGq9SmWQAyD8e5sywBtn9GBmDm2P3Metgb9M2fiaykfatWHQ1txtEKFGMn5UYCussL",
  "key19": "5TFy1fPfsSFNBAtEHDS37N4rbQeHcA4ViGPcnesvrqG9zvck6Zqn3QAt6ntoG8Vkc5PkHgGXEgRsdeWZzchLDEaD",
  "key20": "4DBKyp4F22RyJ2j6UMiM9y5WMDUJ2gqvXFNWdmcpZ4hGzwfvjDpWk9Y1Ldq33dRpm2hLMSy7KzKyLx8bXj9BGbqw",
  "key21": "m82R6x9n77gu6N26FWPKSQZRzyDi2vkgzKyVLXoXmv1izB2gKRKh2c8FRBNFESyWnYvv9yfysUt2AxQi7hzyvZu",
  "key22": "2kg8KhYvVD3HA5fDsXJyr2GAQmbhN14DCvahxpW6CBc9JY4gKeWm2awDdKjyP6moUed7JUNmf6i8m4bmWRTqneSS",
  "key23": "5AGfR3uktKN4i2uZdJAJmafc4hMGtLgkVK58MkoFqrNkiUEn6LKKVj9n3ZsUj4US8CEBJbnUmKRUbUtr7MW6uMF",
  "key24": "5XCyLwFMrZ3LfUcGE27AH8zHsJj9hWq5muyn63h5nCfHd2PymfMwuTAjGvRCymugP9G4ZiqQLMTgLCymEH9JJb6E",
  "key25": "5Hv648R6jPzjsuj6uPaBEotatR5kgNjpp9uFWogBEdXn17sYhqdRG1oSC7rMQd2b8sUvF8sc5KxibUR3ydpiEe4C",
  "key26": "5uiSEkNuiURjVMmsti8tHCTVBUa6Vu2vCwxL1AprryrafewGAi38aumLJxfZTUpuhgBSTiDZYEnfGADsNeqaxH7P",
  "key27": "49smjmZDeC4RyesxtH3Qx42gsSukUMcrxbJukAoLdn1ovbK9w9Ak1jDJqdrnrodgphKxtaan9QLPr8fd1r4w9w5Y",
  "key28": "4mdVJPWr9fE7m2pwLqDrPfUw5TKWqwPciPA94tvBKHvHfDMPBL6wseAKPqAZiVPXyrHVo2X2njHB8HoPbs8Tnwiu",
  "key29": "4H6ntkynVcPjnXZRSRSBcfLagfYJbL55r49bmEfZSiCXL6P7qKuvDsYezu5WgRaEbs5LAu8H5pK2GWVTxSGisAmf",
  "key30": "54hbg9h4xpwvaTQ7BgWZdVEeqvYH9MMoFkfBf2n7rZnpbuFLV6ALsd59m5nnkBu51gf4LbQGuWJwJ7RUmKYEZJLT",
  "key31": "3GGbNLYQzNdaUtSBFmW7XQ3WzUBXyD1j6pAEXNbYNWPbQo5F4yXG9EK7ZAbaqjDNK1eQHMGSt2ZoAW8zfmzPGRva",
  "key32": "4om6ftw6YAb1gP41441yuqSa2idZXEtxPbadxmhFWmj72qQZWCdH4rCf9WgcCJ3JbYtEpSBT6QRh4MeDWrmKi9F8"
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
