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
    "EPSJ6n6t7XT9LhhCgUTdobthtr4qSGWJafrQ6G4knxdtt5mKAy1T6Y9ePpnjWj8EQgUb2SNrxbPHPCn8RzoJLmT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8A4WTS1wANHLoiqVWuH3Vo1h26Weq8Eu8iHocK489hp1qVzHg7aMibCYZ8SkNY7pAD3cez13YZeoJZ9Y4DpYr2Y",
  "key1": "4CG1NGzxepYSgAkRF7zdKH3dWzYNW1dzf4aJRZvyuyC1xZP2c52eiVp9k39U1Rn2PNQqiYbyr9oL1nkjERC32TKv",
  "key2": "3gaWzvnBK49e7WdyezZFnUQqCpSnTvnHuetWB846dpgZoCvFd6avKyps3Zvgxqxjg94D1jbxrdHHko9RGeyWN5dG",
  "key3": "5vR645xe9d3DFLhVdoo2vE5MvPfcsXxBbzCHdWJHwo68CscLnpMEYL6ifUnv6DvmizAzaqAodCaGakbCHw9FMCke",
  "key4": "2qFRpYCr7GmGChh3nTvkkVZvCynLYD74G9ZBS38xZL4k5zukLSnQNEifEzbXuDmzNxXrAqHbBysBp9AX2e67z3bC",
  "key5": "4j6upzv7PR74uqPeKs3uzX3Usd4ybCEYpwCnjg6BJd5tAopNjmjXoYzLeQKu1WYNvcUwNq4dCQPSwP3DgrdmCnF1",
  "key6": "24GLpRZQU8YVc3Wspqsgv2KsFE7S2HZrVRVYn14awdfvzxQk3PHXDpzBmFrSfMXoSBgdpsP9RH9qRARAa3ootfKV",
  "key7": "4oF6EZFQdXiXy3DKYaYcXbX8rsr1Nk7bhx7dJPPTMMGddnYTSuoJnXWAwAoKog6fP3qLV7RZSmicRG8P1isdDSYm",
  "key8": "5YF1naTRvGQUwzYVTmFeVqhFgcWTdnW8pKcASjaJmhkNS25dJYkWKQxSqTsiUeFQHpPKFfEYSh3tVwevm3iqjyge",
  "key9": "2LrwpmM41JoXFSf629mzt2Wc1uFRWEpoB1XKcNXv92f9kZymMUJtvPr4dpjbj3WgQdA44wVHeLsHLstu7MRLYmwK",
  "key10": "qRqzEMJTtCREvKu2ZCotLDJ3duCMLZezhmHxrp7dvVKntKVoM8KfQGF2E8SBktcWhGUPPBfPqHLApWSqtA5kWu9",
  "key11": "KkPtBgJ6PtNGhMvHGx1A1BoyLZm5UZZnr95XcYNxknEi8h2FuqxDf3QutJExuYYzA4ciaczWWzmMHSJ7EK1jCJt",
  "key12": "46E1echmtbbmXy2CLqNNKYHSGQN3YatnrPsuSv4dRbLxxP2Xc54wK3U17uiYfBqYtF39HBENbe98SUSDEVukMrDM",
  "key13": "WH5o2wthSfTq3YErD2oDfF7adLdWVPFMj4YebiCaA9ybwywDeBZJbsVFrJgNqRsNFiDmfxkULyWMwMLpNJDYzzJ",
  "key14": "2F3N6GA2ZrDUMqPgo5m6deSBd8NJ9nk5gu2fJAbmsx65YiJbQ8zjbmcLjMgtgvL4TiAGe9zz7YWxvysdupPZn3wF",
  "key15": "4xjRdq3A4ZRbAruF8vnFo4TUy7nZhrXgzad4mzsLM13e3YRV4b8VJofeKzBbjgZMzXZwhza1eqv19xoKSioC95z5",
  "key16": "2Jb9ADE6oxXHd8szp67W4P8QQ5iqY8vPQZYQf3KgFoALpnMEz94Eqv6d9foSckk8WMUPBYKkHouDVSFrCbf47wfm",
  "key17": "3SncVqvtjws5A8Zd91Gzst4MYbTDBwxcuRaWTmjtyi1yXpgxoTc2ULKoLyefzMKb1AYXDdpwx9d58HD7dNYHDpBe",
  "key18": "538VyjVMujwt45xwfubrJjS3PRXTzXgiuKpzHpLk8WwsvwFQsSu1wuWzcVoAyRGBSGPHZDYswzJ3r2fJsh15F6P7",
  "key19": "5GvJUN3wwXwmJhbtwWhXt68eBebu5wpA11EZ3ewrNeqqwpCrRnscecr6Pn5EH7vkxxTg6PxwVCXbuj9jPqfBKhkS",
  "key20": "376eNuEe3dA9PU2ar84GCbM5Qa1XvsW4Sf5h5kVBQXouc9TPUPDwxua5MvFRejF2dX5y1ZQguRbP8yC94YW91utN",
  "key21": "35HVmEJAxsLz1PyN7F2Dgv4JfYRTTesCwmWHwY3fF7QjC7msWF8Fx9HAoEvicrUsz5GPVnToZNef5YEnNS3YwDRr",
  "key22": "5YC9kgEebB6T61dURbo6TwcNnLb1nDg5tDuTHBz9E54QKTL8fzFTY8QQotcSVqwggi49VEHnj6jRYyxc6nPpEb8S",
  "key23": "oDBkFg1veVMFNQu3vJSQyG1apL3XnKnnu3mAtzYkFe8WXetzQuAsobTNCnMqKk9hC6i12kywx1k8Hg2fSRTqMnu",
  "key24": "42UddzJimxcYSJrdn3gPQoMFJZPstx8a8GnMXk6J8NbuP1VR2UfuKMGWmRT4RAoaCsBLUqRdeJYhFXCz1rkj6v4L",
  "key25": "2RjUVpAgwvJSTpN4QM3P5psomJoM6JDxsbD4jYswQqmMVatAmjtmdknMP6vqWwbsomcE1LemdoXiEqjn52hU6run",
  "key26": "37KRrxWQEwsE5JDNDP7ZKncREH278WX2WKrBmWM1zuwmJGRPEQYaZx3pvTPxkK3kUmxvxCREAbiLUhKtToQUfsxH",
  "key27": "2spnGuntXc4BQgq75x72Wu7pbjhuKpSHrdPcUCiwEVzyqGFDJn1Q4m9kKJw75ydNEXRecDWUDNGu6qsxEWNFMrkP",
  "key28": "3CZC5TsTZtTihX13NcC2j1ChEVTVbK92QUrXhXENm7sVMGMuWhS3ugMff4CdZjxGFZj8Jh6FJdZ5Nkf5xixVEAKf",
  "key29": "qWHb821AXZnedUnA1JmpAZSKaq5TTf8NkKBEFZ2iRHYG6vSqrWtunANJHKpDPTgm4X1ZPYhrEE2bPBEVasAAGqx"
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
