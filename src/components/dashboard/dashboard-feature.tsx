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
    "3XwYneTy3HxcxgbghVg5xAMSUnTNEgyAMTii2rJafJU93i8cHSoC5PVh7bWU9KAumUygTf2dWuoxBFgZVr5YNYSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hCto79rFhaUQpidDvUfeyMtkTrk7LNa8gnyiyZNn1WvrZRdvDK4iusdtt49Ldcv9GdiEitJ58J737aTG3Ag7F7R",
  "key1": "4Ppx9wfed9ZqwGEQpDPjjLQzUhdMRM4yxnECAVcoDXMQsB3Aw2ak6YqdoT7woAjaQCNVp3KLULWDwh2QjM9qbmgM",
  "key2": "3uEY8ZvQFre1SCVx68yZMdHNoGRR1WfcSXUuC9uZ5sh92yJq8nMgGh2iDMaZs3eENreWYNRh5vhrq4kf76Uhm86L",
  "key3": "4TPcBnvGKTrv8VitdeydsvG6f3mgapfLmkzdh2SocX9wWE1TQByfGXLq7nvT1YZHRaTdLrPgVGYYRqccKF6CjVPQ",
  "key4": "5vvpqfQkHoxVTT6BVLnZdd3eu2Ak43DDZNyxE4SY3EQfKRWZmXEGjaUWNeonZw3JfaXhydHNsVmXnRwX6iNWKndJ",
  "key5": "5SVCGtMZk2RnpFWywHpdTcrt57LKn6HcbCiKBs7NophkPMNtmUB5GuKEP7YkGb6yuPrcWCPaLq9aTw1yEwHDg51o",
  "key6": "2tTyZEUuhecuy8AP5M2Z2LFx3yA1537FLJoXeBFeP42aiJQhukuL4H69Ae2oK4gqYXq8GgEjL8uYAHh8hNcREsim",
  "key7": "2PaySQ8Gr52rvjTAUKkkGGfQoFQ2xpBSERY8LK6jC8b83JBjkTrfuyvdaRe1Kk6dWxzDgRoWaoDJh2dmaSrrw6vQ",
  "key8": "kn7jSzmHWCJibp9LZ8RBH8sktyUmrYHTnRzitw46HibmQiLidVjiKjD3eBaDwz7PFjZ4r2wYop8Bkc3hs9zf8b1",
  "key9": "2NWdwokM6RrPNhKsosnmDLbpQThnzS9hnGxh8CEEzhXqudGGCNDq6PRLw2Hq31xbMrYY3X4AY4JR3krjbZiBUioi",
  "key10": "3prKUCEhuWorx5p37xWDMouvFikp86ReUsK8FyPMyeRbaEUg7ySy3v7rwTABS9vJSxFWtbFdj3HWNtWqQML3vUGG",
  "key11": "4KYBsLkGLGyNqqoEEDkx8d3cVi38Bwxpqecb3pEoDczW1kVsZzf9zoeHio7sQYBHcvsj3bdsjWathc7yEngXPyYj",
  "key12": "4v5QAyHWfDHM9F9dwBaGVMLzYrLGDmn8Bk3uCut4WcF4CfPPQktC1zuxs2tqhgTXf9H9YYtX5VJT2rFmnhUVtR9R",
  "key13": "5VbwobKwfdKUdv6ck8ggPgMABjUZjWmJ2F5YbJa9FYjjYJoBmJk1m4vEvL6NGS1zDnV7z1mBbHmsU8XBnkWsqhA3",
  "key14": "2v9srVpS15ukZbLdbPKPyifE77yAw5WDyHEsUp2bJWRqmBKqVEcicB8hhTJEaL2PAvfPcNLZpvLHA1XS3G211CLB",
  "key15": "3jy1MKiNiUQcdJoUpFE3EM44q2BJSECyCRqcqGhgqF3NuofHGvL86HNfKRTgdoqwUzTJsetpva8odWxKKcg4e5bp",
  "key16": "2cNr8cZUdgt8MJz3ZdbMAE4pHtVTGECjnhZhTGhD3KqmtF7P3z2euCk4iPYhE6gKvssa1RrmsridzRnDrfovK65",
  "key17": "3FZbcuMJ4fce9QxUL5shKNE9afVir4Gem5X23JKw72FwWnTnGb4eCzc8LqecNJRP3d7r1D62bnEui1URoAbtGi37",
  "key18": "hATUhzLsdkCr1dxwGAWQAeiBgRdgDVQqCQuxyVAtTEyY4oaq9AyNEnKwHbtXd945Khxu8pqpKbn9EzSfKVGHNJV",
  "key19": "3rRqkuGQevwsovGMui8E1DrZ4fc4ehatrci37i4iW5429fpETy4uBp5SBSeksrRqNzwYvjZ19tztigmdYACcur6E",
  "key20": "2mk93J26wW2mHshTeU6v4afYmAQaaqC2sEbJAEFPSJTPZixmFxmZhyAYfM8pgRruDojPZAQJxCESDwmruz6AV8tU",
  "key21": "25rc2B2dVF4iMSTWGsxzWHiW7B8Sqj3rCVNLmWdE1hGgPADXtK5PSAg3HzDpuTovkLRNEtkj5jLhAirXPyUTBFKg",
  "key22": "4fkGVxaatsYh26iPRztE7SCDpw4BYFqyARafTFXh5Bcws8phWeWWrAQzMrE93RxcGHxXgWJqsi8RQoz2PwFyv4HH",
  "key23": "5vqdTjb8jqYkRmEGpjcxP6TNiE7EA531gaiae3jKdV8AUVSZBo9jtpGWb15HKKKPfeE4EP7aTH2XMumomMRKB5k6",
  "key24": "2ad13FwGk4D7vj4ZUMhaPEbcVV7Yb9TWjTc9SEb8QvxTHThCPrwApLbdhao5tpjpHtpBcRZTwxRejAMrGsDg43MJ",
  "key25": "4u9gDU4rUxpAC53YKiYdC1bmXDHubMNNmDFedhfFMiEjGyfMDpdAWY4nBeDREViAg7HbR6hF8aqQ4giGkbeKai3d",
  "key26": "4org2PvihJYQzhMwvMf4iHPT2JfHLVTuuzNUoNgNopHrXbjusdKXiGm1JjLBKMkNKe4GKSxdnNtc9rUhFSYWg4qU",
  "key27": "2BhAGcgrF3CNMyh5aKyAZkMfyFjyyVMLhqR5nMgTcmqS9w16mDysi8k23xjDmtbcQ4f6Ah2whdFcd63bsEkL8MtF",
  "key28": "5vqFawGHkXX9UQfSQNGyeXEzXGQNVAxNiPKVMq2j1JaBN3GW4EXbiKK2vWmVDX3fMucjSNUJG9DvrhsiSoEuNpb9",
  "key29": "SRJ87S4FY8hpaEr4QffFvhzqD3itEW87fSPMwCPsigWR2cSxfJyVx3tfovJEdUQihw6d7E2C3NrY9ByovGbboFJ",
  "key30": "5NdYgSgcdEcCibEkuMEe6pUEcxiMP9ppyfLrsVQxYauwacKrMjC2ip8NoEGZfLnzq1yt3HHP38XBjq2T1dRsniic",
  "key31": "s64oFfBmP2PqKVxEUy72LScM7s3odrKapjG8SHUrvpWRYttzag7rVbDkDr9hFGGvjMbGANHiiY3SiMAAWhhuJag",
  "key32": "2Y6Kma4Z2Avmbqi3CD8cwh7sSRi2TTFPDVBgJeprnfDsMvqNnKQWZewHKnTrH7b4JVhkv36MkQLub7ood727qkjm",
  "key33": "2QDVdmnAu2Hpxp3ahdqr3QAJT5UaZU8oUUnwfQGsJw9K7DaXoEguwx6dhwuFy6dqPrwYASAYBHC8avkc5HkvbLs",
  "key34": "4KNqT1NCate63esbxAxBfy1918jPtysVDD1FnfUzfyqkcBzSyGbUnRYHArCn2wqDM5uXpHsbLRWKabm86sheU1nR",
  "key35": "2RtpAnsxdEUmdpKtwrFWZdzeTfqwuFJSTbwar7csX3Gw5G6vNCMcFYNiujkSohR5Nm8HHidWzGgEFaJMAiw3j3b5",
  "key36": "3dN5MyTsG3VDJXyo3VAuMfNQGckmcbNG992cuYWzcAr2HHWmxRDP1sH3kwo35Npu3YsES1fHyRbafcCrPSqjkoWX"
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
