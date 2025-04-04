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
    "5vSdtNSbGY6MzmneRj7Y7Zm4mAcMuBG68brVPBvPV6WWEq1gNxedP2TMJwWybECWMwie61N8jXFmMCr6JREV2AdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JABZnEE75HxjcXvhVKiUA93vY4Hg82515PVa5sxtjcwfJ3yLfhtQQxzHsdPhinBPDJixaWXmPdb4X4DUziDWKHb",
  "key1": "4HaUpyyVwWudQuwUdYNzws5qZVSR5DUY84nCipwTg2vPdHLR7pomamQtQDKysYK68nPzf2aeSeiNw9vaExpVrsNZ",
  "key2": "2tz3FgR7NtgPCsUX8deoPvWXXfZt8VdmEBwdZz9bDGtvNN4uoPcK3osWgPsP71gU9VcxS1Jr33vsZhj9H9HXErkv",
  "key3": "41fABUozXGTSh7pmwT6xVQbHqUUy4y6YrX97KqgfjGGdPpsb13M4RG4d6yBo1rVoSb2cQtn9ihmdhneugXDQ7JaS",
  "key4": "chLXzoZe42GJdFTrjhRy3Ca1hHQkFRqRTaTXv1q4JMbeYVwFWeKJFLJdcYNt38uqfsSQqyNFhKndLHGuUdi4vvk",
  "key5": "64xMPXqgiB3RME6UCSyz5SigGA7RGisjQ9iWgzoh3o5U31r7S3xaCe8fCEoFqCnpAmrvChewYzHcURaDCbyurBAQ",
  "key6": "3axfmKAHeE82VJLJRMaMei4EanH9jCvCPYf5fAMBNhuwpbNLmTAzWxnw4ZAwBot431tTuhXkWLtiVRpLjiuzGAoz",
  "key7": "3yqXTZcCefxK3nfygApfKrZz2Nm6QrDi9u4rqmzL6z3zkhhLiuY54Beg4bQCzhhoPf6LFCsJiDPhsFEJxoAwvRXR",
  "key8": "3iCjc3wzrEy3eM7F7Nf9tPeDf7VLZpX4eKRmgMaQFHVhSA7mgtxTzFxkNrc4fWLyH3igfzg7qdVtfe2XxcYQabcu",
  "key9": "1xVWbB2Yr6AzhWii3tNuTFZkjsTeKnooDAMWuceMebyA52C16ui3rUGwarytujZRj7TDjHTWx63RTjQ6QBLBHyW",
  "key10": "2b7geyDqvejDqQgk8rS99MAB7GCYA8rinbBMyfwhZ9hMtN4A8umM4Zun1m98SksgZ7DX76662iGU8h8vsFUNmi9W",
  "key11": "4eTrKhzVoLYE1cGbMgPPmpkUUuUkTGqHz6p4u5f8YWxZqDfQTXvioUxj4vQyDz6iQiaRVRfPk8zaPBSgfeoLSXx3",
  "key12": "3FAtyz8EQhW21CrngsVsGbKkKS73v2iBEKK1LgYXYqoGCQZshkHgGfCC9iiWfQwsYCxZhpFqbqgjGJRRe6ar61PN",
  "key13": "4gQR265scgv213WhXurWaKhqcqHiXSjaubQnvLekc31oyzaYXTopvjWRZcao2L4GdQCLWpuXw6yZgtUfY8YBRw2C",
  "key14": "46M66Y4nEavVe5zH5BRohYV1Jx3JwMVGBgQq6dv4ogrU7hTwVbyUEGkQRDwwdKbQUWNj83CKJYo664gvmRSqsWzR",
  "key15": "4RrksehBnt78Y8qvrLRvsugnFHLuuP3DF3Ktb7Qd8ygYYZmQwYhhMzjeMv4hWkbVCrXnRSKQwE8FsNVtmBqZNBDf",
  "key16": "2FnBcw8e71gijcRvDZjfGg3W5u5sHqC3kjttdi3LsqyeiGo5AysH1xvW6SgBDNt3D6T8G5iZhdQp4CUgqazvfoBm",
  "key17": "2sdeGF6dRaKc5wbQNvfcs4dJJ1fN9MmKWSB2rWRajX7BE6Ta2ya5aGo7Fj1zZyftwVHNdKA3TLVkkhYD1vtYGTqR",
  "key18": "28j3UbSJYBAnQVPtspZMDQVBQ8CK1BYwb3CfguSMoTqhKVGc7ssFwnvfUZye2sfQsEZEQ7GPnH2enc3WCvnxQshx",
  "key19": "5bdXUMSi5KRkvxq4V255juJq161duosQt84zT97UQFDYs1Tx4tRXCQ2bKSKyFvgnrVhbC34XFHvEtbznopzGYzfc",
  "key20": "55Votc1Lc2WHZvgLY3DLJJFD52xcAbXeYcobUjqBDB5zjzHD2i1ZnMevtVVG4XHhYVjThc3598feXdFRN2AjRUJM",
  "key21": "3mEnNvrFJNT6Uen6g9i3fKTA7hLWCgpFRfdhDNv1ztYcRxGL3WdPDRmqrCdehEJ7egGb9icSPHFwbEsRC2tcakav",
  "key22": "5hRuY6vJ6CBwX8Sx4bMKyEk1oi63gXdpXRDmdZTMtFJp9AtBL5WNimUTav48xRhpXAc6X3ciTZA7qtpzz61fTcVC",
  "key23": "34HodG3Z5FEeaEX8hdVtRgyKpJuC8fYhqHU7B8UokmHgjT3JDCyrAVua2mbJqFSGjqLsnf81KeNRP1erhx2zoSZ4",
  "key24": "43LiSQ6wMoUvyZcSm3pHWAuuU5jp2bimsXExciV4boXLbxzwLNWBZXetEyL6Z5iUC3KDSZvtrtzS9fSgogK15p8J",
  "key25": "3QcpejQFhhVh6mFtpAbbNAr8YVnJK5kgyWLQokCNJrHf3GqLEZEM1Wth5T3gHjC3ihdKWNweq1jYJcWiXRDYBpJk",
  "key26": "4Ei81UKg5ZhKCTigtApjBeKshFvNoyNUpstY2FxKWphHTvNts5acmWPnDPh2VE9t8CY9nBQ4MF9aGdKB1FiqwE5J",
  "key27": "eTipV6W6F376PvMrwQ35eBSoyYfKxR3bjA6jGtzv1VBZGi2Ymk73nDLbt4kLQYmAimSRJ8w7T8rR4iBaWtHNtvG",
  "key28": "3rUboUZrPbthdgpPdrTpaJe9ELMMHsSYJhfThoQ5wu4nYnhqpvbZkcywvz5eywM8yQiiutTfoTmgmH9i7GVLfxb7",
  "key29": "2DnXV5vReLWdLG6ZT4teAckeN1WrPkzivjLrmaTyrFFtXyppTyN1vxQ7meXEN4vVGEA1u9LfAKKjvkV97KmbJAcw",
  "key30": "5GyC9VhHLn4fu9tfXBZDgsPyZ5Ku4s4DfUVcgRpVASTEX9WjEfm3KWizTLtc2uwZcmhkgbf2VSnBGB6LCPSTAtG9",
  "key31": "4D5z89pivzPB9Cr7xFopVDnAWwm3PzJ7ZWKHhwTnyK62rh8suBPtDiNxsf5c63VL2YRv1WqktfiBpJS4xkWU7biW",
  "key32": "2wPXhKBzKZzUa6Ywqz4eBLRrZAjYgaLvhdZfvHPzZauKw3xUzLW4ozhogyoEmkXHQudCR6HRsKDuterzj3zBrggj",
  "key33": "5yEGFrJEc6G6TyADA9TrZ5ksEfG1tV4VbQdUMB1rh5hg3tHSL4xL35fQhdsaYmDKHRw5QPgrEyUW3CxQrC6E3Fpg",
  "key34": "35UEmDfVPjqUAngXDoPgsTPV6EE8zLnteCiL7fKwhoSwdH7gzDKPqzRFmoQkXbPQzhwiwm6k5fAZ1yzwvBCsKUx1",
  "key35": "2m1uLguE4PfSw13r7YasAvLjPgi1XBubNQfgZW8Y2d9ekmzkQjibrtBGamWdNquUM6iVciCXtp4Jpcw8qdwoR5Di"
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
