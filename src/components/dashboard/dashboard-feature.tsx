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
    "smRhENHg127zKEu3FeQK99N4gVWVJmLpM1KRHNiwH3PwVfhEP9CHYcb1tREGNyfp9rGH9MUZsKrmJrtynLfgKAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbGfk81yNoXgdNp4P9BrA6rfnzPRQTEbSqXeCCgeLNa9WL1DGvUWLwWTdrfYTDXSbBBwvhVpUmigs9skjbpXZRW",
  "key1": "4Fh3Wx6Q32JGEEu969BP5S7uuHZmT2KpzJi1HNrATcGAaBzGRqJyKnzPXRJvLPEfr6Nj5PpY3vJwkaGwcVHo8Y4S",
  "key2": "45xrSu6d4J4paZ8zER5U3ayJUCDyk7b2K9h5crbQ3S5ejbMA1crVXyV4piPekQvjeFDYANi1qCNdFDWUAzbuDSQT",
  "key3": "4J1haR9De5khZZT6HDg8kv8HDVkVVSDWUoAznBjwyPUSr6H4TcBVxVgod9hEK1rqKP2Rmz94SAhuhzgXhJLZpkds",
  "key4": "3NLiN3hcE7kJu1yi16dc3GUSAduxWirJs51zXsp3axkyNVVZwWXbKuPrMF7tpyRTYqyAuqf3CmZSFZ13f4F1gTKn",
  "key5": "2XLX49gfa4n8aFVRxpjhVk3DdR3Wghkj2vumBfsjpH99vC91xfgJpxUoq8UBxFRaRZTn39feyLQiZb1FTb8PyqmX",
  "key6": "5mifR6yCt4YximmVtJYoGuKy6c4pxGRS5JVEHkuEg5oSVNttCMoqePZcpfL4jXciJjAvqh2ZNCCnqbiLwWAcHh9b",
  "key7": "31EFwSxmLdppgPa42NRGSKdSriTEcdosRTwpFGtaEPko9iC9qSUrJcTRvMFMKHd5rQx7qDkDLVPYLHDArU4wS8zL",
  "key8": "3kEaL56riA2uQivrwhqVNPQGq4xxWtzQtD2NUAkC9MxmagfRZPUWmj8XBAYL7fpgb5CU1wJFUVTo4nXDtKX3ssEN",
  "key9": "4fuNkqeJqrSoCn1eR6vEr4VVaKBuP2iHiivDqx6BKrp1ubjFLRAQEWwRjnJUrvTnw7gDCVPHX2TnzgQYJjn5fmkW",
  "key10": "Ao4sqvt9E6kFwJ2pa7uBXDGYXnCNfriC8zHLQGnkyPALkjxNSeoX7mMoTHN8Zj4vdGjZMaLfCDmxQUs4gMZE7V2",
  "key11": "w49mNBy7JNuksTd8pVCzkXTihozBXbeAUnKGrzq2MWXNysWDDmAkK1LZhSdrVYpG9ZsX2tQjxhwV6htDkSPCKy5",
  "key12": "5ht1CHy6K5LNtrZ7dWxAe1bweccT5zbPbWhK6MV2CvCFdzfEv1fayjvssZDNgeqPaJrMk7FJkF3VAbQ6KUJRj6sJ",
  "key13": "2ubMitR2QmsV1RnAAEGKauSLJemyNGqSLK36Sp11pz4QAAvBeg8HZpo4TLB17KaTzi45NWNtFXtTcE99ZqoSo4dG",
  "key14": "2Kojqj1A6YCgwnddp66EzcZr4C32B9TcCCuhZoCZy4nEK2HCSKqsfSBAojVPVV2fGTQxEVuDnQDbCdj7Z1zBXBTg",
  "key15": "3Lxf7NmGLPtRHD3eahauj5UD4bUQKF5K9M2psTD69j9ddX6fsdiMviGxTApFVaFw5TF1dqs2tmU7NpvFEDfwZPWj",
  "key16": "qQSK5XHbdDrJR9jTwUHg5Fiz4DfjGp46jGUSXfUqxXWffmZEUKNrRT9v1DRV3gy4KCmCxjsybdom6r8NHkE1RWP",
  "key17": "4zgLbiFUYZJYSJUgr75dxDSCT1nKdQty2Wy3Ziik8wvAj8uQ7muth7sAgdFgfx3tw4kf7jUKj1zkfB79wsjrvcqS",
  "key18": "4n1z63EmbRgN2bhePwpsFWMjevvS3wa6jRWbNpgThH6iPHidWzBsb2LypsUipsAWKrPsR1FuxnzRP9qbDQdgyYVR",
  "key19": "ZUBHAkNMKQDmamtfBEMSSR3o9kEeas435Vnk3E5F44Bm7vuE1BTA6FJxEytvSD917YzoPyHvWdA3kUmvwoLUt68",
  "key20": "5gr8j2XZ9p9ZXGFyC8CdWKrNbMiw54cikTyQ6Tw9hs1Boh9JFQp9RZ5CUBu5p1mJkhK1FHFqk1CHWTUrqynhoMuV",
  "key21": "2RMv4Ysve3xTfCfKGE9z9UxkzhpFbFN1x1GN1fYdPDq21f63JyNQn1wp1wYkg1kb5NEpsb9sivQPgHzNhHGVZKrU",
  "key22": "oKA9PvYr5TKTjPqMAkqucMqEty1ebqYyPgqePHXy2SNc9LcZGNozvNYKAS1owsgKKjkV2ZoEGBYV5d3HmGdQy9o",
  "key23": "ELgi57jzgHvjNJo3sXDEfECLYkWAuiPCBU6ZHCgLsHhrt2fX9Qwj58C7bEZXTnjpzmDdV3qhoXFhrXFg22s9M6K",
  "key24": "3hLEdmybSGd2s4Ye7eE2mSYewrYwjKcDm9rRngY9yp7dAtAKzyE4DmGBSKf8eUHEcUmvpA2rDmzT23sqgmXhx5GV",
  "key25": "2a51y1RKv9z5L89qcR9NTUaFhGCgnTtPbTKXfceCzTHd3gs5RvCCkafmSdHgXkey12kgJvbkJQQqEkmUVgHJFrF7",
  "key26": "5mUSffvPeuDJ6KP2Cnu37kPa7afWzQBXrbPGrn24vgnFFxunJXg9HTtCzSsTmSDnukJJFQxPP5mr79Aa7Pp4r7cD",
  "key27": "Fxsehi9eeD92KmEC5cR6peFGxgK9a2JfPTxBTVtdDQGEKqXdZgsPtdeH3e4mvBFZnaymLcGU4dTTfBdYGtx6CQG",
  "key28": "2XDqkCsPUKj7WUJ69nWDy43cGuPUykGWdLakvYEBCVUT5kaf2chXHSs7PDmPSmHDUzSfX1cHx6bUJXdSaKgdFfXL",
  "key29": "2hnohBMwf27Mdy6WNoAs5rTYvr1bSDeYQUet92g9Mg4MZDMsHs6fQyrKSbCP4TAqxf1s1AijPpEQAdC31J1n8JML",
  "key30": "2rSGu4ncRct5yP5p2LDzTWVYrVvv6uibP9b3TtGmyQB1TwJuQ6W6JR5iyn7cb3ndb2GZJoF7Fd7ukwFm39HqX7yp"
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
