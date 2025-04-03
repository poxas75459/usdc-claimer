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
    "2rfzmzN1wiGhMuQwiZdaNjWuqxGNF8mrBDJwMWfMxazLimydAD4ZS89PsSW3VnTBafHiXDBrAFR6EAn31D9vyJ79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z35PeD23bSfbyoif8gdPD7EocnrZHu6XTL3kuwPszszhRMXoFGBAtvsD5NCrVWeoJmiK5cYv31dCtKeb81dRoTQ",
  "key1": "aTV5zyyRmLbbN1HdykAUQBnnkoKe86N8LS2V5eQ3KDA3qySuhJWS88vVXfDcq2BUeNds2zq1TMGqvwyyM8z79Cc",
  "key2": "3k44RV1UUtnv1jKR2dyz3JmDXTviRjjt8F5TW15Xu2dKjAZjEECkCvnRXDacTzqvb8xhTDMuBagjqagUfbR6UKuL",
  "key3": "PmHLvb7kdVhozG5fApDtr91GEoDy3aMrJWW2u4a583aX6fqU4fWuWMCjNPZz2umEjyPxwKcNwS7JEKGjAtzgFRV",
  "key4": "vPmEDHejpQS4ziKEjdEsB6WCuPRtVa8UyhT19hbsjjdjfcynYqrCxBhDLvUTJ4qyTErc6VLkNpaPjt7K9c62ZbL",
  "key5": "5hxYEnGrjWc3NjLDSsdzBf6b2pvTqwHUE9MmrmG2bKekiFr5SSrE3b3psc84jhfYgk7H3dxqhcQpQ2u2FxEHPFo",
  "key6": "YLJEMWxvNAbhGgwvnreC77nY45xy3wc79rraZjD7J3ArSjSzMTXCHaGmYY8nizVCDhPrcFUS1U2P3xSK7ePCnYD",
  "key7": "48z6BuzEUQQrnPVmmTjT6scS8nHzPmXYJ2W3RsSifvqobuY2Zcv9FUnjovezNaU5iBLyVxQZMV3VFuqdy8YH7W2e",
  "key8": "5jTCBo4PzyJb2SoNpRTQ65gY7ChEJne329eELztfYNFxVBCjX19LkuwvipAC8HVwtF4JJRyA7Mp4r3jRyyJib3qm",
  "key9": "48ih1yMBPfDAw4hZJatN4uL6Lhy7va2iKx7NfQHmhSKxLfva3rwdHLHX6uJ91cjFkWZpmNHW6hw27kJhBkrUga33",
  "key10": "2GKexD4VFgTYe4EofewgCk5onNS4CVWCpDkriDKWjfEgs8rNdkiMnKUnVGmgZNG1ft8hHAtrcw27gRtNPqHoC61P",
  "key11": "4brkxdMdA7wf2nxd8EXeooMHKCXFWmrdQ9U5EZUWshYBw4K7pVFjaVEEurKBn3EbVd4sKgGD4LK32vdRexWYJmgT",
  "key12": "24pszRMp7yahYUd3J9DJd28Z32zK2iK3WWujfAMU3gdTsjwVAh5f4jZmeNr7vU7na8F24ASEEc1wUGgdM7Gm1MWN",
  "key13": "Gopk8hG82jfPmfB4tdLNNTVgFt67aM6ii5pbYMYNSAgoGjAzSWSYEsGQ2iimtXWkfqXFzy1jEYQiDJvFahbuW9A",
  "key14": "3AchvypZHhnF63iNXzksn4mA7cg2qurR8Z6CwhzM9f6MxRsP2NqPssG1khPtJ5tK8JJPhfEQMo74TN9ZdFeb1PZ6",
  "key15": "7oB8yGWj9s6QNwGZWfYWXtSZnDrrDowPrv5ovWBgyDEPcXoEw8sEadivjfmw5ajjjZ3DikaaN4Xa2e8EnNU4tET",
  "key16": "2GLnpvScAv3uSTpBoman4sh9TToyhN8ioXJ9MMeQJjCM9q9e6xw9HbTdkZfYCGKDuMTsX2R971NY6AQPgEXcybyb",
  "key17": "4adHBtaqCCoUYc83iwXhLzf7iKD2NhNToXxUKnyW8k91FUwmtr8gu769s9Woe4uqXqSrjig9q4AMwbaowQ1wmCAh",
  "key18": "5NUCHZ8D36s6L1J7U9j87wWhjofZpC8rKicS8ZtahNfEwuQEYFGgmKQAsD2VLh2xDhtQjGbpJ2tnr2Fe9fJRVpid",
  "key19": "2rS4EDAYTKgBAWwkJJ15DUF2Vai5SMY1HhFisR9Xc2GRbuJr6zKb9YhGjoJN7VVgmESQQcnEp6Zd5X835nknuKmN",
  "key20": "4RKWcYXv8i96VmGuUB6RpiGCDUsWTWGT9sCdyNJy27C9t7zNzmUw4TH57ZoWMjsneUeu1vWYmZ3eDhV5N5zo7bzx",
  "key21": "3i3enqSdv9GUbFY68sHfmQBNC2YwSJSx2Zbe2z6tckJ44Sy8WG6wWpjExv7iSMPeVGxPn6KuLtiQs9DRnJ6Fh3gw",
  "key22": "5yd8fskurECo3mKL1MpKcubuXmSB8j3GNFkGdULvexFKBwzKFy9zpLo3GRXV2jrT5UjBC5FYktQr7vRBDBaSt5md",
  "key23": "4JArrANLVJ1PSGthYfgVFzsRV7Kh4dAuR4kmSoqCMJrhr7UwUgf4iM9ocnHC16GVgxYMSqPhKjXauh9HdfRmZJQX",
  "key24": "3S7EbY8Yo1HJNK1DUZZeiKpxfM9UFeZpYgWaDMpfjpm2nsPK778WiBnzS8PymZ9CZfcaNe1WY3JELARdxaFcnUJ",
  "key25": "4Fmn9BE7rz8uiqzxpAEEoXRTBbjnAbaxc4okSxvcXqPYvo6c9EyhyN8Q9tQGjxrBr5M328uCp2yqCmhuaUTWUZwj",
  "key26": "HMTkVoB3ewop8exuw8RhutHk1e7qbrwciyqpWeHQ3ugaNzRA94aKLufNFw1uR9erkj8cSnip26dgMQ1XRrgCA6F",
  "key27": "5ZbrWUxhc1TDFPTYnLmjQRqhrtBE92gmyAwD6aes9v73Bod71wTVkNUxwyZPaoDdjFX7BNLuQfkN1MrpWF1KhJU3"
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
