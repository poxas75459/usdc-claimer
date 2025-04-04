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
    "66ashBFENSYMCgT3AAemNxLgkj2w4Vv26sdoqGvg14yi8XJY3FxMmKJkXZjor5vQoMPh94jvDrUhMP38cZVPyciE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "645LHn4HaxLQaL2h6TQGv1FUURJ6wKyHikthX7H74LNYTNyYMQ1a3w5nVEjQtKgQqfR9uHqKx1riEwF1yQoobGFS",
  "key1": "2q6sKhNSCb29wxsDRzjfUGtMRKWBfn7YPm7Td2TJxehmLgecK4JTSbXQFTWFRWqLRgb5tRHauPgFooXHxEhphPDJ",
  "key2": "Y67SRvi9mXQzTBCj6q8vxrAFugmp3i6p3U9ZNV9Z83hYSArusjr7CQ8bDXk6Bmet3cr425W3LTdkJdKkNT5Ppen",
  "key3": "3VGCRPxuEt9x7Wypw9J8GqHPKP8nGT3KhpdFuLMHESwGR3mrMwnmpgRd9aN5DZjfqxnUfiece3tfAW7yXW33j3Js",
  "key4": "4WikqMRMmQpcouF8Z2TT437FwUHd8awxxfMPjqxrNbVBLhabhRM4XovQgVwWfq2sEDoHX53ZwejB4vk4yuYsELXr",
  "key5": "3EfuvxHtq9daqwtfmXXjrSxm6bi9BDGGbYuqXMe1VCQ6Y61Y8pSqctTXquAcki65XAirYKa9tDWGELKZWvB9r7Xi",
  "key6": "25PMbSKaXEGnQsfzx9AHLYABhRg9LVjFJw2owArrcYFY6SGxKN3sFksJ4qKzthtsJdVeF6AkTENRyxas1zHU9Kof",
  "key7": "5CpWeB5D4dG89PaBTemWu15WaTfuA42mg6pdPvhudnsnfrkkqn8TRCFCssurRE839NQr2avTAgnmnyfc7bS7DrVk",
  "key8": "46GgY8pHftYD4SmY11dJJwiujP7eznFR2KVVFWBcamNuerZAKdgJMWVpmJwKgG7KdNWruAKhsWH6G5hmosKorLKT",
  "key9": "UFAnLsw8ydc7yBWNrJzUkFMPiC31o1wnvUWR66ZqDP9oJRJGezUsZHK4JhH3cGr3VdnZcTTErLrf83Fw9Sj2Tdx",
  "key10": "52X6PS3uMkeSA2thYRsj59WpttCMjSQVMhQoCyP52feb8ey7YCrerUbL8Sc6ZQG1hpDeoN4VPzYbugruRyybdRc7",
  "key11": "h39Xy3jY1MRxWTNBBGXczQczN2bzd9zLFrAjndi1bGpmEKQNrmSTCQs5j9kMnZq5iY7khN7eVcbUBRW2bS2YvH9",
  "key12": "3apo24MeyX83BS7YqfcBDpyRxP9U3h285BqfswuD6tnZN2kxYPzSbGC6uRrt1EsJ3yV9SXsP3JEwy9f6opgDEvMR",
  "key13": "5M4MCvjrcb88kY2W4mraYbTeXqGv9c6RqEZk8RrFfEs9W84XgShuUGM5hyHwDu35qDns2aVHr63Hr5AooBLvvP9R",
  "key14": "442AU8AYsNFkrpqcHSWrX18CKRkM4xdWcUjitJ4rATA9c17nYmYR8eTXAS2KaQgHGnJ41MHSy3PQXUcY3qR9Bbax",
  "key15": "5qoTzWBV8xmygvFxwDVwEBzBqMwoJk17jHD529KnP9krao1xce3Svyj6i5ACX1NTZ8aBEtgL7T7e68dmWY7wKg1L",
  "key16": "5DB2c8paZCtYRZxP1KXvjeNXPQwTixacbo9TVvSDbytUz8de84JzSFTNBcDMhwn1eoLntJ1zQW3K48rvK7BTupyZ",
  "key17": "xTvTs1dxCB4tQrM137vVLY1SU9sA8VNTFUBBzSgpYKRTxchwbMGbGMw15U2BEUFrv3BaGhpFauhAzYFmke7cw6B",
  "key18": "3x4BApzis1VhdDF5reDUzDLJLMTGVXu4DjzJoNtq1qzEESNY42b4WRC132sUWkzmQcmKSqaucBj28FB3WKTA71qA",
  "key19": "63JQU2miZrwFRt5gJ32ZQWWnFo9RyBE9mtewENL9zNK6kaGRVVvVmpLFrKRpcPtdRg93pJCbZF9Xe7Vy4BHsVpvt",
  "key20": "2sDwGhc3bkxi6e337YRFCazr2fXGL9S1EJ4d1CPPKVH9tcemNZy1N1mrkK7kRX1qyuWKyNhoac8qH5aHKKJM1phV",
  "key21": "U4UvVicWb9kn3KW7dmEBQ4DUWgHjrxpwXqnp8ev543vDsLJWNoc4kgwKmtskHa4oCNpwuQRxN8QSD3N4kbcsDNf",
  "key22": "5zVwBmKALBSLgNhLbm8dMrTnx5BpAymHvAVcHzxnaUTDYZNGN1uq8Es7Pwai4GZvH2XJ27ANVd8rbKuNBoDNJchw",
  "key23": "WAAFMpMYGqXpGPcuuwRHA72LNvQ9Zbqv3cqz9G5siNLXUV1LKmgmT26LszJPvFNSJJHwwfwLH4z9Cjinfr6RZPS",
  "key24": "4BYRiW56S12ekgSRVK9Kwuf6NKDw5s3YQM4DzRZhTNpuBJRmzMpT6wAK2SmKrfUCzUHDNjbC3MFWjCfAKTKcKWTq",
  "key25": "5hntVQpkod3niVQ3xfpdH59W8cnTsbgtT2GyMWA9sKfs1eUQJFmTiccJ3UrYJtxUnDPkmJgxfTj7N7Geubq1R6Em",
  "key26": "Eqt75qitMPUHobABiT4JuKJGB29AV9i6i7q9dREUX6VoL1QTMB3RTS4Pu8cdXXAwomTDzwVLdxw6TgomuL9Ax3m",
  "key27": "4xr1Sen14HJLfkbFcfY5XQJ567ToVqTTkGfdtqBMxC73uD1BG3oCQBXhYhNTL4iG4USM4yujgFMb8huy73uZVKD7"
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
