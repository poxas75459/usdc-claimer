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
    "3rhpbrL6rJMA8m8aA6GbnDuDZogBqTymz5EnXtombhABGSMbZQwB85BdBQbrHiUyxRt3tsxn4Ukk11kZ94FEE4Um"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JE8NyaSv1pPRUe1xn6Yy8DaK16ixCEP7VEiQRJdAQx6sYNN9aPthfxTuQfDkp1C3rbWqeXaJi1b9LYJGRVk36UG",
  "key1": "5QdHqccBG34zudP8Qrnzq3VcqkeSgCmKrsYz1RQxUu9ss2NYZdwLYweJBHiZfZcMBJ62VPBvhM7XLRb87teSFc4u",
  "key2": "H7VaLaZM5NFnpEDMbT3MUVz7PR5uxj2m5h2d4CoRj4gvkDbfs4YBox3dAG5A7mZorJxUftbELb6CgFtypP9ucp4",
  "key3": "4grzSQjJFZDpDBsdQwjP7znpVLtd85WYAmDCYuWndYEZgmPFtmwzSBb6i8rSZH418KvBpzzaHn7DG8cwzzJmT5Sn",
  "key4": "5zC8gXJSd8HNFujZEsyrnPFHCVonqS1weAEDCVcuRL1K7A1yRTTkcWgdf16FSLzqSvKrH4yxGZtZZVsW6DbUHFfj",
  "key5": "Ebf72ok8jwEcjUsW3NNdgesqbcNfziMGuq6kjVMYVuyzroZ7557HwWAotBxnbvTSY6CYJqozjy9EKV1qbto9wdf",
  "key6": "8YUwXkqV6KVQXG19GidWq5jDUDTpenSyunxmTAhSpJMNHpLZbWwmfKTp54rFQ8TQzmQvYG7cFk8jNyoNvtdtmqK",
  "key7": "vi4bLkzjNbonPbNibU9wwEUJLhJpJ3HVagXp6A8eRkuSqvVohZcP31nMJFcdQq81U7hpsxwEMDkSgE94zZ9koZJ",
  "key8": "kWUk3tBXms19hA3zVGzCchxj5GqTScKzfsEGLrczzhMZ7hbtCXjiTD5ac3ZbA2pPA1oY6dw3nRtAcUkQt6mse1y",
  "key9": "5Ni6XRDqRXcjhuDFeaTnnR8RLFtb9vyZraE35eyGABHbAPisEguchCSj28uppK5oxrRR2dCibntQGHLX7D8RXFC7",
  "key10": "4Ex4WQut5eLko6jGDajFw42Yh4J7eNW9qZ3uLoMCUQ2MNunGxL3P2PAAKveFjpMCvjgBtLuAz3PGQihbm7BeYyRQ",
  "key11": "4WpdRYGnVNdZL9oPZcScSD8PUzfMKbhAW3xTwadr9i3eSV6bj4hTKaX49yG3KdbntfBgypNTqfjxRwmp74QCvZ8H",
  "key12": "3Dxzh7ppURyynGawHdCmyL727DFfxDPUXNYU1pnUxKwoiqn23giUg25ZsVebsW7c7AxZMLPCoaKyi9PLxYv4Lx4y",
  "key13": "5Ah6X9uht2cgj4Wb1Pdpo7f7Az5wUDprYd5SZQ4tWtrzMvfNzpcufjRfdwNP1XW1G3a36emBXsi2mWjqo1zH9n6W",
  "key14": "5NRWkmmhzbAVxTdk8185u87uKEsGPDPQ5oDYcVnYs9WCiV3ZY2qiM86LwX88iHZCCr1P4JhHeu7SKppLsGaMXeeF",
  "key15": "3byr3J4xr9Yzt3Tug8VUwteKAEQajZpRggC8HJknCzX7MigS18YKEKTHGWPb9g9i1C2w3sKU5WgS1N3A3TdBoTsV",
  "key16": "3RtQwy5FarZfkDLR74JfSkCuCkUrTEb5CW85oUXHcWuW4CyVWeSNREYHEvkvwftffJkzLPzTatW8NNrhLQpvX58P",
  "key17": "4h6tFrHkMDL7Myi6pzKfMUwFLLgmMw9FobWWiLVLNQ7arvFAMr5qMKhp2oJcY1EKgtotLRS6HZYkSgFnshDXPp1z",
  "key18": "4bqznMmfzjnq1owEcp6rDPeGpoEwAeUJqAQHzu1axmmJUZ4zzURKR1XsfTz47tcYAWatbs9GDWTNnn2hNqiTJLLy",
  "key19": "QMvMhKbW4jBWRCdFoLqGSzHQrpxn46Go1wLYKRsMfF4XssKFDLKMH24nnngMa5vg7u3f6qs85PwPqdD9ofBeufd",
  "key20": "5HhF8xhcNFuWYtsAvgXPA4v4ppwnaYXXTQBBwCyJKDbJLSXregNsz5SCRgHaLNXNfjaYt4cx7xv5MgZJmhFDgukh",
  "key21": "JFWcKd6Dgxfh3xEFWfCpQibk7bpMjiCLmiiZjJv4weiseDChCe54TKjYMaqr4SNY2bmTajx4oBiNnXF94sq6VHB",
  "key22": "oS6775WJGdKg2SGJSsdZrTw9KmD67WoWj2c83wb1szxVPRkR6Pctb31L2BnETU5SnyknKqfzESPCBKAUQ5ENaak",
  "key23": "65UjMnncFqiqx9MUs4kaoSxBNgNrME8g1PER8Ppu3PUicXMmQMNWH2Zb2CQ8LyyAXWzt7urZn6dkZjrgZY3mCRWN",
  "key24": "4o4AK4kw7EHR4pFBMkCNtABJTDBfKT4C8ZiJwJFagHT8xGF3iAFcuPVpeTcmhdbyeZMzefv3tGtdffzQhdJqGU7a",
  "key25": "KeHVyiDSDAZeuXYtsXZjRxxCrzboJx1wstR6wdzSTGRVMNaNr5hVgr15hGB4LA81oayxG4xVe4NZeYYn55An46C",
  "key26": "4VZa87LcHBKHAegyr3ThVfuxsPjCHAQr8kPLc6WizmB9L1GYA8zS7LxUgkvQ3cpLjeiEQK3AwDHztff8oLLSWFvo",
  "key27": "2tcL4DRSZzWPCkQEgsYJ8PXChGxF8iXjECqVhk34ZCrbUa7ypcYhDXZoRe62U2rPBGhGAvzubKqPFVDKFjAm7hJb",
  "key28": "55fGs7QWZhdVqRJ6XXr79NwRNExVH58rcaaaQMus8zxCAHroxu4sMSEW27QCzmneGkNTw77yXm9ytvJB8N3ScUHk"
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
