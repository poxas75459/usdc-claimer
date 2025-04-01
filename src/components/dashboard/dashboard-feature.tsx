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
    "YCCVRPyEub728SCfS75RBJR3zF6yeTiYB5jvGTsK75hrXoPcPRzhmAjXmrG5nLr6dcxKqrV8XnRmFqxsDmViAJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNLcFNHHzxpYqAumCNqTpNBbxqkAAEGp4obumPmpKWn55UhVYjUyJTXTH3JmaF9Npi7qLzzrryRGqGhuB437Sop",
  "key1": "5tY2E9WSsrzeSMESZzZALns4FL1EwFquZL4mUtsfQ7wttfmAYBFJZpBgVPRqckWzhaMWjjmMqRMWAip6nB5VW54u",
  "key2": "3cJagGJ9pM7jhP1D71b91LKbsZrqmK1hAY1a7tjo9Yy68fd4F2G5F7NoNC5oMyNijRmjuwnDWdZQowxKurCTvprU",
  "key3": "4oU1yQdKezQMoFyChMXmL5pbBWG8i9GBvxV7AxfTUAkJTHgL7fBXt217fzraGgAoiFqHqFvSJkkZozq1vNNKyeHK",
  "key4": "5X897NEyxV5xb2iEV89xLoDXQmacSopvdRzyAus2Gm7Yjdf1u7BB9wkHJFUENa5Rs5RiaZ92xRH4NMWQv8H7zcEY",
  "key5": "5dkqrARtSQQaT9gBGrnjrdpm3KBb5TVSwSrQxvPHbvq8yBVHzdfsg9cZZH6ep8fJiBFv1CDaWawqX5YsFnSeCj35",
  "key6": "37ZSLy43ex86DGUicSgH8AnV6x6qYP6P57Abuv2eX9qSXgC3Fdf8dtgjCQu4eJ26Jz9qMCiQKvz4f4b6qFLRn8jz",
  "key7": "HzWu1XsfBwkSkNtysYBgtUkt7DaAmEZkrHkgtXhYypLqgXgTukBAFy4JH8dvmkVLJwtmZNT8fsYaa7rdaVzbmFk",
  "key8": "2gWhxCaRtpPKfJaTwnYifmUg2pPCndZ8BNg66KyEGvfpbZ2FUJPwhJjXN1cHGcTeMJrAQ8vJPvXmKRJAzoafVddx",
  "key9": "2sZgEbaYpY54Q5ke99nkgx8oFPBFyMfq2THMkoS79VZKUoysHjmkoyhxPTUWgV2WPcbV6Pn9KRWT2DjFJpCyM1hP",
  "key10": "44HAw9a2P89ZUFy1TmdAiufPk6pZsW4XGUHREYSq3TdpKAiCdshHoUipSL2udjbDFkux4gDa4pPSRBaex7oxpAGB",
  "key11": "h1XZ39BomoeTJJkrKDygtD53m5EJ7wigcWkW1M5n1duPyDgzU351wonEPsp4kkTZKzKue3P9hjrQ7Yiso1pWCcw",
  "key12": "394c2shpfe6gwkR1Mu3v2HcXbPPFkTFtKZ8vGdkQnihp3JaTSyAcaDNEn9fcNgaSsX7AK2H3ggTXwryhGtNWNYup",
  "key13": "3N7iymyHiCqBnRRUqeXZMs8cfLiR1M4Mv1BYTDdQUkdVMFr1ghJ5odcXHAMWChFkN7hxvjD6Z5qykebNxcQPoqcH",
  "key14": "4hpCWacHohxqbxyjuYk8uZxVoSLNM7SmVKaqUrmSgAsVnXnULwMmV7NHFepNWEAF3wHHMHmRwPuCGYKgpawdkQU5",
  "key15": "31w8qpsSZwSEjUbqNh4FhtQZbHNk81uH5MjfzMQHqKZxVjj5j8GaWpdijWVUEC8gXqxEdqMV7Z9E5qrd3CgmSBBR",
  "key16": "4Kwo4CcsX56Q7jpDysEg5iyp5uXJPSSG2aja2cs6NWJmCLXZmNCAYFN2shpwDjKCmPjyBC2wusLwhp7Y4cTqkbsi",
  "key17": "4fE28u4ED7pBid3ByoejyC3c6kSD8UCqAVgf8Kcj5BN5Ss3ay7AsnExJ3P4HYN5UB7RVtrqqyyGk9g1kNnWb8oHx",
  "key18": "5Yq7Vc4rbo5gFb3j7ytkGdno3CabnvvyEkMdsnp44JzpkDcetvJ3HHbouAjpJQJxgqkhLc4esFjRTHu5RqEZa5J4",
  "key19": "5KSt7XZfrozuL8rPUTVAi1rtbUV4FshPkhwyZuMZk8D9h1uJmV12WAiyuMN9JygouBidhbVBv1CKK7YK8B9PWvHH",
  "key20": "65dR5NUVvVZ6i6K1pigUXPer9rkSgaJb6txCsVRn7iZrMNAqMCc87doPdXrdt6UgipcBCMRm6wK4WJcWvg2eujB6",
  "key21": "266JGmEvdJhQ2kQ7N6HLoTn5QxAdZGGLFAVNS9UPEtPTsykb5pZfiKWoBVmWvGxi95KPVGvdZMQjZ5aHVbWaZsSU",
  "key22": "4XLgRZBS7VZozj4qjCEJkUSwm4o227AjxCJPuXRgpENbL2o4dD6jhz2sL2TUvseJAo1vM3iQYuwqfQZWrPocQsP2",
  "key23": "4RaknMPfwA42PxiG6kvreRE7QTtPgcqugrfCSj1YPzNPwHJKFQy8B2w2zZo5NJ856VHe74hTBNncbVNANT7YdcoC",
  "key24": "4v5wwYKH8RGPh4PnQqtrbD5UYZx8etAtAAhCRmKxTmSHp27fJopB3tDqrUVkS6TikAyszVojvYGWKp3eU9mBgE3u",
  "key25": "2GuRVyopo7Zje2KAdENQ5Zovzypr8Tk1kiPp7Ku8i6KmxpZe1sxDDxDyjiXK7Yox6RkHsYDGVrhwPY18zGbBfCKj",
  "key26": "3QZkwNANN2tcvj4axa51Etmvreiv8SkKPTHCvuhUfuPKgTL9UYGpbTZgafJMcCiWsNXvGKWT8PiVQYpkYNvRL2E3",
  "key27": "wGSEyKP4Fj7FrNCkMjskg7My9cAAdy7MASyk9Bt9CqLJWGgtfJppaMFMXSiBRAcphqLnJpj93M8FR4P2GGRVzA1",
  "key28": "5uHpQmZ72a37U1rtgLxwwpknBRi2YPFeuRSdpzJHxcXbqDypqJqqKXMFV55JYv97qYDVKSdmWsAVHPWNXN3PF1yh",
  "key29": "2U6jroQ5XVUJCDd3H67aznGpQvnJ6XpxDKc4sVe22d2tvDXbHVdGbQxmXxE7zPGBXWqTZoUkyi2S4kJ8oFU4ATgh",
  "key30": "tsg8Xo5dVoZDHuMvamQiEHfSu9BfMyjFVwSuvFvwdDdVNTn31BA9nGDB6GF8ANwDqeTXLapq9EZGHX3FnBDnni9"
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
