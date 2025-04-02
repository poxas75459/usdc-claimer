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
    "3G9FhCZDRF4QBTi1Y59R9mBtU4CwEEh63wrzDXfbuUyYh9Yf3mCeNEcix54fWsQHFR3RcFaeeEppxsCFUbZkvXVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwAfkrRY4fcEG5uyk63hi4yE8RQ8qWm2A19jXUnfXiAftv7SGBm1omXhh7y7pZkJGDouzt9nau5G2md7qojmd3f",
  "key1": "5H4N4BAxe4x9RC31BSpoSx5soYLq7vg8Pmb93KgSWdtiqp7N9TzEsSqEbgMcgHj39hv2hzdFw415EUrWaFMpBu4T",
  "key2": "41bCBfhGSiZdRmivapQKAnFhaXEMvzMATK31ALXSeah7FwDxA678ngues3WPgKpXTa6uX1TbTnLFm36qx9QGYJS7",
  "key3": "5h8AdujfXu14v31ycoH6gGQDQjpNkMjx6J9VvBoLgqjyLeTQdW9s4d4uvckJAcRiqW68XmEMXb9Wq4JimMQTEyEw",
  "key4": "2GjfnRek4LUgg1MCkPtofp1RMzkXPVC4XVhnUKEGSZtwt4Jr66vCLrWw7iaLKHkyp18N9sDDDwfAW4Uomczbp3FM",
  "key5": "4unvbCodctLKCtzBP4PsBxsBbpxHrWftHyRkfsQ7h6mpBegEYEWifauuHdMX6GNtpxxsSGWw8cPTeYkS3SQMQyY7",
  "key6": "29wKjj9rFQzRb3MdV2cQbhoQQj4mgz9zErE4G8L9JNLM6BPLb6jjppxx7tb493oxDjPfYeYhAX4kaunurd7QHpgn",
  "key7": "4nwjm2emsWRkHZaQZ5ve1xkGCtxDP7BZdnxVm15sCVZKuXmMTN4532AM1Fm4wxZ8U66LRQmrgHqYcT9DkYtpWBnD",
  "key8": "2RhbgZkLCkLwqbsP5swPmSwGshDGeaQmix4UWSWCAaBbaat3cAWAuBa2EHtjBwyc1czT4pHFoekAxQb62tQrPaBC",
  "key9": "5iofTrHf8HDbYDqxW1BHmG6PcBwn7mzkT1csS3imcUHsVF2xNDVUAES2AJcPqh4854AetFSprmwnDYuEe9ULTFJ3",
  "key10": "gf4ZeM2jq8SAE4gfA4mtJAhiBKV1L6dmzFM86hGP75HHRkmLJfXCBt9GH4sBRwtYMSZQWznjNhyJhsiAzPj1PgN",
  "key11": "UNKxiCnzydtJHX4p5XKFXU2VH332CvmnU9EUjZdrvnicbRq7guNDw6ai2FeDLS8nWdiuYczKy2Y4koNPRrwFBrg",
  "key12": "4XnZHsbhMAshFX4TrzR4DxBmGFaYd8sXRqzEWoW7PHvkquaEMEeXsqivwG5tULEXzLfxCP7YimifG6iNP5mmNMuD",
  "key13": "qJaRKCvdiBEGuufKQxkn1Mn8EsUvMAxoXDPkGBVmEWjigCGLpAR14xz165qu2DFbVu2ejkFPdnWdy7Uhuab6q7u",
  "key14": "4J8JaHU5ZDrhJv3N3WTiARXv7HgqRf3Fr1APcvHCr5pG5qkQNq5Nb1h3nRK3Pasu6wcSffKQwacuiSGc8G3J28CR",
  "key15": "5dRKVNnVo1YsUFmpjQAE6VPD8p3jrPNp6tqrxieAn6eEVkt4htsHt9rXRRTMntb8qzdnaa19dJgEk5MmapYG9oK6",
  "key16": "67Txm8agdZXiThquWQ2DctFA7s9oh43rjVYXy7RW4PFsDVAZuSrod1QeapXGkVWUvzjCpFng7sk8bBbV1Dkhm8gP",
  "key17": "Lf2cjghKxekRjQ9t9tNjChYbotEuiAg7Jua4iqGpDqLtB5evGZDETFsHwxVHiryhHKDGDpAPcgH45XoWntPPkhJ",
  "key18": "647Kamdrf1ifAZj45hY3USAvaGnnJHxGiQcTkYgAhzS9avYuF6iv3fFJzodwYiyxuwqUeEpNHtpkCJh2mHx1nYcM",
  "key19": "2HQ4maDqA6dTc2rH9iiNnumzACEYGJTvdW4pmJ4CJ6ZeZSiA5jCGz7nyWMc32Q4CjapWibKxU6V8Q981WrhU8xtp",
  "key20": "3ChXthiHuBRGkkk6ZeMWrhWdB2UHqPWpkh696eMvG7eiLsjvv92ozaojpVTtt7sCguGEfo9E8jkXhzvS8wGw22wV",
  "key21": "3xjbBcVq1g3hFmK5SspDetgS1Z4ERCKFvPM7hQPrAYcfLsmV2NfyKQ7sqU5SeotD6iDKBLXuQcfpcPVngk8TnQL5",
  "key22": "3QDSBnUbvk7JkZMnY5Ay53UbwsHZxTWydkvR3GLf32knEYzLcimdb1HdaNZYHxZhCc3VPYu99RK6VggTB93DWUby",
  "key23": "5AeFqPUSixVTXsb2maJVZcp1f6gM9Mfk4DuP5tXcQDTdvzSvLvDVj1Z6LxTVU8goM37jEa3Z2RPok1Y71qTQqxY2",
  "key24": "4LQiHWcGZPjR6pUZo3uUevu1M2a6DWuE1HAD33QtjoqEHbf3W3QU6bPeKSa4Y5z5G5JQmVTF3HwptNG9jT2ySNsX",
  "key25": "2Dmgoyodpc1Y7caYjMdzMdTxWRjPhN9GAkRT3XH8pQosMUG2YtVENiKU7R1w1svxbdLq8Zq7E4Ehc2TT9cdjSzbA",
  "key26": "5FoEF4nJhsSLspz6LvEbKKrguWufiDqciRdC6tFMksFLHcuige9kwEaH4NW7Pz6sA1dek3suhBhuYcD4UrRKt8QU",
  "key27": "4gQ4YrPJ828ycpLfTkHmDcCeYmz1bhUJX196YBLTzCVPdxTo7QixRirPDu5kNxZKMiv4io15tQpvHnYMUHdizgib",
  "key28": "Jj8CjBLo3AX4kfLFmFAMQ93h1yxZeHMKUesQypeVc1C7hgycYu77koUTREebo5dXLvFHHNHG3zus7ymZd1hBxU6",
  "key29": "5WDyJFZLj21EmQcGwjuvrkayx3WDCDRn8LvrYzcSYfpMjWKispogcepp1zwXqc2N1D2cM7ma5nhQ1iYG4gPx7tRk",
  "key30": "3MsLNvaMwAEfi2qtAEEmSqab2wL5ybX2cjfFfLxu6egf5pvi7xkeU9hSk9T2MkyVMA7U6dPV5q69zEAGhCzNndcG",
  "key31": "2WJVwquYEDJW5cjefrDVE98MWSMwhFZnJkwA1KVfFYL2cE23qySACVsY95qMMpUWTeAoYdukQeC6SKuQ91Z5eLKd",
  "key32": "2mXp5rVAt56v82DELixVYCGNkQpJcXjvTnuSbEpK1xkcmz7UiJhnRXGq6sSzEcHn3WT7eMVkLXM5e4BFhkDRpmDu",
  "key33": "W6pvUpWyBNBEAv6doS5gCanRwxzYmxApcMUTSoXxoVeTv7BjGp1wecMGF2vg4XUFBKYvMCM2GiGaHzZ9e1N5Mdt",
  "key34": "NE2pXaQbbHide6aWPYaopJZoHLSvcgMD3FtN1KiU41EJoi41UsQLvMBq7u3rqqGzwaPse2fJbmNiiYMXcnpcPqU"
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
