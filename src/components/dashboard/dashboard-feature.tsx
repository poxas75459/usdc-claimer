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
    "3D1T5AfKLVSq6W9Y3xfSqUxsUE7e3UkVzfQM7nwhUPPsQD1eK6TxCRhCbzx8jD8NngqUw8kbwhMZiymN4jqCPAgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yvDt9PBiqRnxxXVdsBCryq7dpfLpGkyKRAA7ENFGUe6w6Vx9wePdTw6QNU2tND7XwiBFqWA28ttCXF1Ahgthvnr",
  "key1": "4T4SwprvQwxBEEDjkTh8WuUELTn6zFodiJhQ4bC5vYVKBfVdis49UHijwamQpBW9M9cQhMaZuq1jRAbxnB5kuQNa",
  "key2": "4iRFNmWHnRTNXaJ7PXgSku7YFRLCBmy3DekerisAVg8yK57wNb7foFGPfFeE65GCfmNuvKzAeQPVPd9rZRUVaJgK",
  "key3": "iuRXAdw8xveDYntjGivVFFeHbBm2q7LNAprMyAg49QjcJR5WZAKD1SEgHG8rDHMK2Ekt1ePngcADqhtJfgN61sJ",
  "key4": "4SXKTDDwvrfQKhsf9riYsdrbUo1yqghiU9Gy4UqaM8YcDFFZMcMprHrgshaZ1gnhvJMvbnt3WHeiSUXGvKEhwY7M",
  "key5": "2bjck1mRhQsrtTGsVidbUqJSDC4iq2u4xeLFbzq7xFUFAYTzWXj6JEzarco3MDtDMTW8SAj3rp7KPni5F58wSQV6",
  "key6": "43UifVvyw9eJdSYyKcQd25epjVtdnHet2dSGbN7raFTnDrgczeqH9HSWujLPFB4DGzbssXXifmx9F1rXu9RCvh5p",
  "key7": "3ygzH93ZqXrkjbHs499HjkJMXMusNqpwrH7KLfVHpy8FmG8vWVxdHVcct4S83eEP8H35hQ9qYa9ThnZ8Gf6CTR5a",
  "key8": "2E2yZFALR5eshAKwVhqJ3uKJzS6NYJwMuVwSJzJPLg7rqi3oufiroHZgjkwwuXA9xr95cMnTjDSZULBpbt4yN44a",
  "key9": "Rs8NQtowoj4v35VV7BM6WeYwKHKLU9WEtwV8ZooBQHLhk3yfJTHBwUwa1cLLxTU6g3gqjTPv7LWEgcwVZaD42s8",
  "key10": "3oHyi8XXJmByEqdLsN5bhRiobv4UEdEMoLucWNHtvtbtkUa8g5g9oSQ3ATfAHzWHLu8pAX1cUfqU2M2uYiszvhwG",
  "key11": "5WVTRJpRBy6uYJoqEzMHSbgQ7HkbDxXh2KFMgrFJ6NCeH9TvuWvETGGs4eVN6inbAm9tZttVHhxfKQ4aoE3iQQ2L",
  "key12": "qT9kK6N4foLDdpS3HCoaeGCBcSFVscV2cubob3xpekKfXinuq7FzuRVbWinC61hVUiCMAPMtzqYcp9MWQ2wqAgT",
  "key13": "2c1qaEVRXiLnF9J5FSP9d5ViTFUiZg1EpPVCZkSMjDq1JPVfbfdsGCkzLiKHYaL3G8X9eMA3wtLEvDYX8xaLaYvH",
  "key14": "6RWdMroVYjLFfBMUEDpfjZC5HWFzhsE8jLWGTeBmhTCmRxEZjGAf4ADT6HnChtCZw5LnPXCoi1S9oPs1pWmHyeZ",
  "key15": "MXf3QR2PmiXwXHmw4hvrXNidpcn8ZC2krQEuT47MonsgkoTjbHrXMcLwpoQs1crRYzRrrhKGpHUekQbTBRGEK24",
  "key16": "wpVhHr49kRq6iZke5r9f5kqcj3pEyNHWwaLaw1Kdf2T4LzKqEJAYYvfErFjgnE7KmVo32MAyJHGfb7eERPKWd6i",
  "key17": "3awD7xBAG2wLXaCgjUpXn6r95wZG3Astu723uxuMKpi192zD3AKgWmGRDiDDBwLuzAhR8ZV8qcRbKe3pvYTBETGq",
  "key18": "Uqx4fy4riJHgWa2dyHYYd8uuLvqRSwvfgugMphUv9CnTuJehKJEJoDYZfA2bBrr6uxiBLXCy3ChyUExniVg376S",
  "key19": "5xF8S4JpErg26PsnbgRfcgPTNrBHKZLFyFqasczfHR4sm241BTeRUz8MgCMKu11XRDK8DXFJomtPfwHu6iYwGCo1",
  "key20": "3eByVLD2AH8KUYe2oeAupuyXJyk5xaRVv7fkb8oj1CrrQnYCX4m3x8ZbLYEpxfhdSoXxyRDNTbnvcEDZ2Xq4UBR5",
  "key21": "2ovvcXZPNrYzRcDdk9qxBMRoeeGW4boCPNFR8AhmJtRoEE1AUmoMgMRjCwag3N7pnUKtJoZLzkg7RDP6bRK1tNGU",
  "key22": "2YGYduc6UHNZixB5GYWF6c7mtskGgMLVEH6s4eveFH2LE5fUsLmCet5ab68GfzAf1ib1x8LeTDq8tMRN9wTNzrvG",
  "key23": "TWEi4EXgDu1C2APyH9vVqNDmMRKuza3qUcX7kBGVuLwcbcZUBYDYBdG94w4NRv4HUfdBBRAnxjjSJH5m5Eudsr3",
  "key24": "4SG9pvKckTi29sT9PMhnoU37jBKmVxZS6mcUSSCEAhmaVZnBZ8tDUgDBy8PJ3k9BBn7LXWb9nuw2tXXPCYzxJ6wi",
  "key25": "66VL75XbMf9fpaDvXaTaPGVrUH7k3dFmH4xSQdg75m2r6kbTpLTsUaknNzYVqhkG5mK8rpJoRM57EN9CiSnEmhE",
  "key26": "5T3Tzh8VtY7o84yWv6NvpQ42EZsgSRbbsksrgkiEJ5iCy6mCG5bcuq1XKk7oxVsxt1Q2JNgvVib3j2GujDuU6NSx",
  "key27": "5Trahbo3RiQ5ESMvYCSzUXVu5iDXbyJVLhK14uhbPUvMRFtFxFvWH1eru5kUibQxR26hu1zqLx2KEjhcU8md2eEv",
  "key28": "61f3GdJZnfh73uRce7uSJ3R3aJwfyqmFHxYRG6oKiGaGtcixUieqBGnFx3qMpqeA5MKg7r8d4Ymsyey3vjYjFsTZ",
  "key29": "2esggfUP8GvL2naEDNznK3RxQQ3z1CV3h181vd4t3gbvLGhE92rudpC18rvHq3Tsg5KEk6Rc87ErdQxLgszQjdW4",
  "key30": "4bU2TS3EW59Pnqvr2DTn2esZcwaL3egAqfmU6EoRCpVUxAYCrdR626fuZcxUSPwQZUGBfgbTv4qMVjp7kEYJQkpi",
  "key31": "34erFt6FGFygS8aZ9eFrfqC96J8LCQetww6raTsk1JKAnQPGLteaQznR87ymkaeJNFzZEdbg3u4kg7afqd29DBLp",
  "key32": "3peKYqpwPtn16gQyP7VYEAgL6Bdw5k3LDU2hXxwcesg3M9eV6SZKHQNjWYXF7FhixRUor7deoTQDeQpAcpa8fvhT",
  "key33": "22UH8sH6z7xsXH5G19v9yLiiC9o663KusE2NjGPVMqs8sCoJDkeg1ZzB3yxxNSWFZvdKDxshoefdRb6hsFoH2Qr7",
  "key34": "3DR49MYbUWRYhtZ5qt2m49BFHLUPmroXAd45cs27pb6Jhyi22kyyiQVmqapDZz94KFQEbe3eThwANwYuUXC1yohu"
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
