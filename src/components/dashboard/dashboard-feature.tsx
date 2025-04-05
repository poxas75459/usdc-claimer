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
    "5wBwbUvYduk9zhxYLiDQBq2q2u2kQJs6v8NSzWAKYc1sCsAkXYSkrLifaS9mA3Z2jkqwL8SrtBAJZwThVw2h1G9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZkDd5AHB3JrxVbL9TUtMZm2wsq19BGGtw5gZm1xV9zC3uVkboDmpsGxzhi9n4QmuGuHeg1QhRQrX1DPPAejtiZZ",
  "key1": "2mENXa4YMUbSLZ8i5toBgxBfm32ZKmVKZ9K4PABFQntS2vGfPPaSYixU7PtEhGgkMATPEU5RzvXVfA4cfWMvHGh6",
  "key2": "31JkStMeMm7xqTVcXwdT7PU5b3L2WvyHt2UmRytKDiKgnGNC6XwEN5FcLJFix6QG9y2SXMgxwxp4waV7i2B9Fbt",
  "key3": "31PSNazxDBfAZRtVckgnGAhjfXi7xgdc3LJYmbzwA9oEKu1ZYELmVJPtWeikP8hRJo84PqG6UVMZmiToygDpoVLQ",
  "key4": "5dfSkxMukVS95M1AU1gMTNGnqvNUcMzs9H6DCXYEKbfuPfzipjg9vVRTmVBa7TvvqzyVejd6AuZ3WxvgCeg7Tyqs",
  "key5": "5nmcJ6ts4P1W4mw2xPMjwgMmy4VN3s84jyR54a2BFpRWbtgqFZvZBJgPfQ1nafWmYq8RdY1U55ojv6pqwdgmDBYr",
  "key6": "4FRnmNn1JeNNwBKiFXi2DT93nGycCLMiDbpRhYSKNdNDh8J3yMAXauQSH8RGeyBY8vjDoCZaSQaSTMoG7tQSuAGs",
  "key7": "2iFAkPoQPxebMZLxx5NJ8ZEXFkp3SiizZQWegZC5M61VmS3Ao1xMwyLNcakLZLhRVMTdGWJKkvmTNVhSiPLrWTTi",
  "key8": "3Ep3zsNNWxWNsvXwzqHSn3nYRj4N7wZ73je99e2FcoGVa4rwgJYa4mjB9tycaohxUkLMH9xbLjH7GRRc2fLcL5CV",
  "key9": "5qtv6LdyCwufwMU1PDfVMHSa7hK9cEDrDbJ11rieeioFm8mT1Hw7rtSFSQok2RVw7dt5hAukXc46NytfJtTA5aNp",
  "key10": "23jecNiLMtEGzUWQx2mJ7ZpkmnMjZY14He689dYgnvnsiZLPcsWoTGWLVMUy7WpKXr7SDUzBeP5hc7wkn1WyiGJX",
  "key11": "tPWciJ7yHZzotHs34GqB7ASGeHCRyaXQgtyXzkGPhFFMiF5PRRW9M7dS4obt1emY4Ka6Tpm9mZ38h7c9UQzkDW1",
  "key12": "3AjNudFqxAuY6U4QEUXwd4TnWkAhmNRkWWsoA2beEhcpp8NvwowcEayv8uUKAG4eox4hhi3Aw68Nw4oGidn2mPmV",
  "key13": "3ZBRRxa3CEhaaLjMkGbMR1iZ5bgKA4ALv2cagKTvFevhq3YaBPRkRahfAfmVuNqJ28RwYetVQc1abiHTgfsykyyg",
  "key14": "3g2uY9gig99tELeQRhy2ePw4HezH7r3GcEdRnHB43CFpQobAVpYZUy9yBe8updEgG8Ci8xz5qPZsePBLb5EMhE5X",
  "key15": "5r7cdzVkMbVPDQTbyqwmupfkawCcDY6GNV8D54FwfLA5bYaA8T9Yr44PkevLvXa9cGFmRahjNoDVQHUZmLyzkZVS",
  "key16": "32YWmUQFmmzgUu98nxAZKRLjTcr5cHtdWXJyCv9AWJA9XiXQyjEo5p11ATJhdsjzdjzfqjAgC67KwP73AXhqtpfK",
  "key17": "4Hkg7TXdLV2kE2ZaTzH3bNgXFKGMhXzLYyfXQ39Aw1ii7FwrimqsPSdqDRLjBW7cjac24yvhDbwkSE6FkoXD842M",
  "key18": "uFML86WGwEa35CzQy8n8n24CAD6s1QK94difV51L6zrAC8ysUirfxpTmE9KS53mmGVFvEYTA5Dp1NfuXNyiwwzF",
  "key19": "4cEUxdC1phbWd93EvKjZhpk74hoZnusXggE2fYB5iRt7ZnFTz3rYnW8BJpRWPQ1MMvsgP5YeusHpqiq7oA5oNKah",
  "key20": "4ZrUMksQn52f3jn9P95yMHM5ktfSAD5Ep7qmwwTsMP7meCtfLg1Ju9toiu4aov56dHtCwTFEGth13iW76haeurA6",
  "key21": "5dXZVcEdnj1QxnefK85p2248ttPAHaVxEbo9tK9SpcD1bgdXw9V6tmbrbTzqMQQaeVuZzYHzPFF3NMQyNKSr3N12",
  "key22": "ESgMqhrCwUgMRVjUigvk4GBP2i6sezLzRJpHQEN3qypXw6MpghZvhChLbCmKptGNh1fs9EhQtzyzF4DYnXPFGBz",
  "key23": "5cCwCjLcF6mThUXcgWk5zMi8jEzY6wCGiaCPPqrDyrzfue821kLVTmAicJh2zW7ke5pMLqkFBLcqRzL29NqSXjhS",
  "key24": "2kVvsy8AaB9ojHHtzzMeTVVmhZBvAbpbThwKQquJZjsDag4oTZSvmPYw926w2wXPW64q2zjKWhZgEDzdCnN7A5di",
  "key25": "3p6pS6JpLFquCjPyZgQkefHK6NWd6Yv4GPZii7g1hRBG4af1UFrFQfzZge81xderVgAazWs8uoWYMjWCwH5WQppd",
  "key26": "dsnyR8ycH46LbvfTpAnZp4mLXnBehCFckb2LpMUVfs2cVPKVe5kAbdJW89MCxC55XTBGZ9mZKwxBG2Nh9TL2Ffg",
  "key27": "T34394Yub8vr44zQxgWCye56jRpKYhRhvedeTCmte7rkyjYUUKJmxgwFfcMxxYBfffkNKPXbC8Hw9ekJkcNNRKe",
  "key28": "ey1F4EBs94X1c1H2mRn9JahuEqsDysn5D1ext2LadAU55CLsbFDBeUwfuh26HZe6Ft6f3TdUoEj7tVg8oPBPo2D"
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
