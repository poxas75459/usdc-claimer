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
    "4uqtg5zKYBCJ8BZDYgDsbfFiy5L9J4FYThCwzm9DmNyd7oSm3LWJ1EpU3i8662fnzJNEv9uaaokfgtb4Zj5pyhV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CX6PtgC6tGxoukGowrkRBPHP4WhETxo4TdFvv9Ei5t1EkvnaijvfA5d6MYbgY63GkxaZhg6A25FPxLTsizgEjnV",
  "key1": "2a9SXetCDgUR67rRo1biv9VPncjrHGsZBn28VcbjrrqGocbb4J95XHXa3KvHkwcuoP36GaueU6HzQ8Ue5RmNZ927",
  "key2": "4jRXPK5tM4YpTDmbqQsDaz3PkN7iXG1gCKFtniaPz7F12H3s8bE1sGHRsqmFb2E5CrVPBLZ1SczqcqSWqqy6FhvP",
  "key3": "4yjF3B5b4Amjahb3yGDZKwVwxekA2ruX2REKeHqpAxyfm59R8SXLst5wopKv3viT14fs5GFVQtG4iSqnhmPPb28c",
  "key4": "Ctm1t6vvSV6UMF7hvfhHeA6KTD7x9hc7rrGbTXfWP8nXkvT2WcoN1hByXKfCwRcos2VfaDFGjFifqkDwyDw7RAd",
  "key5": "54CLCFa9QTH9xHCD53iLQiTvSJd2GkVmz7RpDtEUUf32sRex143vpQG5Tt5x916TNA2QTACW6rNsxrxvjzc1pq7F",
  "key6": "5wqm6QzyScRwVHnaJYDJHcw135eFm232yExDHfMTcKMfGJpMNMLYJkbYnCwNTi2f5FcLmSFkv1xbXCDu8SjXy91j",
  "key7": "5WBHDTydN1VgS4Y9bVSwSiKJXQHAfZMK9wr62o63f2do8JcyeFvTN5WJYyCcpEtCr21oaLRLTpemJoooQ8cC2ybp",
  "key8": "2sKhA6wL8Mb1fveKASVzBGAyAd4S9xRbk2irgEHvopzAH5VMRS9vLrSmhR8jbQPFKhW9yDezTLSiZzDYU16htzq2",
  "key9": "5Rhg5vTMvFZBpeqftaDwwRxQwRHTXiLXJCF8uWcuupkBASp9Kf2u8qoHfs7YL2CTzBiYRvLGRyYqKL54FRyfwyH6",
  "key10": "2XXLaDMoeUL1VgkLRwEmjAUtG4AeB18k3PVCTLWKxjy34a4SzFd875rfv2R3EbZxEZKFCbMDVmfEsd9on89xjxoi",
  "key11": "5tmtxZBtZJHfTjp3jJ9jsBstaYCddiAhCFYvjdoNHotdeTFGpyxvjfJKvr82HojzGEb2szQKi3eqcnYY8s1NchMP",
  "key12": "48K7ax5VUKtVJvXCLbeWeFMNLim92MaCafuWGaCR6YSzK88GAM4Abrp5T52qipov8uDG13VDdtaDsLL7jXxvfSRB",
  "key13": "5cY9MNCEthHFNX6m1Ugt6vxj3PknExv5hXedjGUUVc6LRyLbxQZNUPhxbM9c7EjfJb7gu3Kyo1FGP4QqYWLm2upa",
  "key14": "47nvJxLbde1MWSZa3pxGeLCPEodsYY9RpeS8LdjpQohT52tdzzxz14gDXBWES2eZqvLg9bYsTt2nRdUicjJcL9U9",
  "key15": "4efNr48V9CnrMHbwMBLKNeLRCWzvCeBR4GUXGcj3DisEpAiYhtAVTnrwitYZBtTud4n7Kii1VZ4QeLg4PE8RJno5",
  "key16": "vt2k9Sr6ARLc5JMzhcsS4VkoyEDQ5YZMGUYPx1UBcRycYfU36tb5Hv4zvEKtazpwYDH14v69YJRaa4hBvPkbrY8",
  "key17": "371hHhd6g1SJe7H3u9YtqA2YU7vfQ6kvjF2TpXj8hYwESC3JPCGxhPc49F75sHg41wcvcpzS1Ku2CuxmzUA1HdVu",
  "key18": "2yoNoykpPWKXYp9f5DzB8SQA1dJRVEvwGdoVRSrkFZXkukTyqHvXdWkvfkrQzNhtzXDgsSiGb1MkFnTSnwa4nB72",
  "key19": "3iSnRVq32jPeyr69uWydJ99GoaZ8YJUtSzABZnjxZm8AfkL5JXkT56q334p3CRZEftu2nMag7GMTDfFtKvQuhyiK",
  "key20": "4QJAUTwiUfxa4WT2AiwVDpn6G4MREdMtjqJW4knkxo5pUn3H5Ur7k13DmtfWzrASKKKqHwFK9yZAcxBpsdBXMXY4",
  "key21": "2fqW98deib5aw9ac5VmhaFkq3cx6L3TMnzuFwU6zotdV84KjikmoD98nKbzcP5hveL1aRwCR31HEFNQzbGG8hnXD",
  "key22": "BnzrZkUKsueRQ5MmeqLDdeQ2495JVpYig32S5zc88HS93RHHcrvqvFCQCt58PPgXr3id1qVqqgBHdn4keVHibnS",
  "key23": "2qQH5dJkSZueQ8AkCvzz3kKCcRRZ7avv8cKaSryjBATTVcN1DhSUC7JqD2t23e5iA93fHNtjfXHNFkcpc1ae9CKk",
  "key24": "HVi8QVYwAhTYWi4pgHtM1NtCGXAVyJEgE1yF5gEVN7AE2psPX3HECaQH1rgpYehZ9hQzkodzuPT5LCkT8w8kY4t",
  "key25": "5mTseGxCB7Za6rkwUMyxNCunv2Uq7xeqbVCpMxVKPk9Y3WHRRfiF1vFXb1xutEpx6Csb7ahn3j2uhHcGsxHv6LQg",
  "key26": "36UxNhdqeF13ibZwbfrE1BWtRse5yrD86pGj5fkJWWoqHcb3kftwDeudEhvJrXpJ6apdd4P5qdq65mcP1YqBJPCS",
  "key27": "4fLPmVbNo5KRauadsugMkCyaEnY25dKArDvcdUPTwCNAgEeuHTBpKQstnuheRMFfZT4LuiPSf2EPLDrQ5a6oRLYX",
  "key28": "2fBnnYY4XdVcP31bLUYCz75GYmNmCRcmA5BW92xwKwPMrzW6cbcTWSSt3Cb9zLyNLoR4MguG4xTjCYgC6n3Nxm6R",
  "key29": "3Z2fZG8gb8qQU2R2KAfXmNDnrk4zajEq7SFVfKQoLb5Lax8St5Z4rjbhMCwUESmmi5dnGcJkbXxZHZ3pq5yWYF9a",
  "key30": "3gNXQxE22hVHFYX8FEe4p78CxNCyc6XU42Tccj1cz45LGVaZxdFHVYTYZ52ovBvUcNjWK97b14xubgnXACAvHWK4",
  "key31": "4yMu81SwcLSK3z2iAQceu19DAiAU7F1oeZMxtgmU23tDq6BLsRgV5mbJZvNSiPhfWTDomzVNVHLYVk8D2DznnZdx",
  "key32": "34ZRRF7DSYNrKedLGwYSrzMMXdodx3J28KndNgUn9t9dgKjwKZyzNbMTGBdjmyCLoV3g2PYdQUhH2TFR9oBB5nkq",
  "key33": "5A2ejDfGTLFhFcuVoKAZabzGffF3pkEMZe7cEF3SRL6GbGCKsJngnkKgqrE9XLQHEb1SpLkVLnD95tUbSafh94Wi",
  "key34": "2R2DGepnBebpshsicSjEk7GWgxRGkpbhN2LGmQ35XakCxgBh3qivBZzqKbCpJpjpPi75AuBU4FzbEJgDmmX3YKsd",
  "key35": "5YmW9coTeCQEu9XjaxWj2x1h3FQAWnhCtYGikHotQQUBcThu2jW1T5FmySeHXsVQRNMZTW2cTQ26ZQ3s8azsuu9Z",
  "key36": "5nN4kdbR9kUmzJcu67TbqTKb42UDj6QQyR7tc6Ttjs4irHSSvU3AGJzoruPeuwVGupBrQQJoscMhdBpDjp8yXoGE"
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
