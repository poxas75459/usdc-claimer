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
    "24E9NwDiNLSRY3hapZcbccCHwdZqnqjCmVc2YSJ2MvRMT3MK2yRdwJh1Cj6U4eNXqnJRsvDFjB1DGkKhns5xi7aj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NjoS4taX1h1ywSubdjjB8S1m7txoG2ZJvEieHGfS6Ti8sNn2Z1djABhNdgUasANPmL4EVMxaR2NahfeUKBPrxBB",
  "key1": "4Fjnijzc1R7k2BhNQ66qBJKSsSo6JbUdY4qnY3r6DmGeCVsUb5vJwThfRfKtwkfUQL7CqsKpFnmLKYbs6jgPXU8b",
  "key2": "2Juih59Pp76XsrRzMJ5L5uu4Lverkb43bcTC8dzr6w93NG7mJfsKtFp9GRe5UBzfhNSbMstWkrWtYjKGbeyHAr3Z",
  "key3": "4UsbfWqDNCr9zQ9SmvLPA88LD2PNp4gDrpiLVhqLdg3bFs29rW4v6iQN5pie7PBuvfXfemkuc2FxM4sWoYbVZo59",
  "key4": "4LaHpMKsxi2WoTazEAwnScCv19kHnh79gU4JV45TYMjS2nqUV5QEWfi4z48H5vxyQwC56PL95XsJ2GoaQdyZ75V5",
  "key5": "GvvCcyTgCvMmxFTdR4R2cnXrnYdfRY536JjS8wbSJpwqSqz2hkFAMu7PvNcLqQFpTpkp2rSae1QoocAiLxMTiej",
  "key6": "2DUNZQr2PFqQ5BCd3xC8HjQ3wnha87xVMvkgophFPWcvKg8kDPVucWdh681r2mgcvp9XXfnqH6zXjpso8VBtnv77",
  "key7": "Vz7qrvceb6NAcXBs5yum5uhXDVkpoyetdChrhan5EJBWzDfH676NVLXmfgi8MjUQuX5PyfWwQ2rzt8BXPJWUonj",
  "key8": "2oJzzQfkqFH6Vk9VfmauUyuzBxUXVy3BmyuPPkEgHFS1QAibgeJ9sQSDtSDarCeFqusqhYo6BDJknAcZxNimR7Ek",
  "key9": "4LgK3qXv6v6cj5vPgaH1pdbfVhQY3TbpmY5yjDMkDn1RPidwrDNW4bcEZN91dSLneWz3CfQ8PYV6xUBfxmNS8tAu",
  "key10": "5et4GpdHQYR8Hmeakan4GxMNPdXy7ffUdGkk37jnKUJYTreDD5ekSCwrqGuqYPsdYZo3HPjBJKGZevzms5yK7YoL",
  "key11": "3PzYHDCEwQcUGDvsLQd9ETKA5n9PiWgLCFRJwKkhu4p2RCyg9eVtAaJjkdKFBi982YGqzgrd6VhshKTDoS4fCr48",
  "key12": "4D3ULBrpkTP7cdxN8SLaY5VH5zAwhqrZ3JKFCGxiXiV1XMhHG3KNyA1ypbHS1yNVspbr1sYQi1dr4NHX5KHexfRQ",
  "key13": "5niCyGhAkUzXsnnAFywFHcgQW4NpXjupCvjEQ3zQegVtZ99KeasJgVf6ta8xcoBnD6DKwZ6Ho9apEAmNDisX3sVd",
  "key14": "29uFVWxfMzv9BKn7oJeXtdTpnPpH3KnFNccVk7PAcmoUiyhwF9F5j9hBgegGHrsJpz3pDk3j3nVdb8qeR8zyzwnF",
  "key15": "2pveVr4USRJpmTM7BDyu6sVNGaGkBGV5pb9GVhpitoWWpqrafJ7Wqs4hvay9xem6tJpfwDq2QbwFTa9QEszJgf78",
  "key16": "3LQ8j3zEFrLUz6iHhEkhWcRRPZKC3EWQg9YiyGLYETJPCLEa2UbSxrvwcVwTX4UAi5EYXUfUY4xXFmA7ZvCiLmwd",
  "key17": "jA3TGXqphnhsrZUyfCV6g1wFZHAaxvUVjSVDNvfGHxy3juz3Rdyd3nspmwJyt6YBasxjDxYK5hmXTYLcVDFUAXW",
  "key18": "5ZxBG3Vmp2uf4aR6nfhjMvixqcFihfBcDctXVowtFCrq2VPZ7Sg9oSGuZFYMhMnqZC3pEbmVbKtCuhggrsMRkg2o",
  "key19": "ZXviZa9Ht791zwC1kHUsg8PNiwWQvX9Nhh7AjaqKnwfM5eeb2Kks4nvVDX3YVgMxZ5wS9HNpMqdyg6WG57ByUst",
  "key20": "2vDf3YXRuCiLTuPDi8cCvPk6aEiQMhke6nCPP3MZd46bC89j2NdQdfdKMsWSbMYtD7h7e49H9Uis5i9vJQJJTkQD",
  "key21": "2Acq4iURmLihvxmfmprBbwB29vAhYQasmEoJnQc4No3vkte5WFipSH1W8HvheqeCEWbvF1ohyR4KqBbC8sDYKYVH",
  "key22": "5viq5FajZzGZDTyrr8A1tx4dPFZfqGvTXxp8aQVk8FUHrEHaGtn5D4ZV4FcjhTir9WUTMiyTYHK497Ym1VW3JadK",
  "key23": "59W3NsSro8LSJ3g7zk6vaT3KY2KR6PZtpTr7riJNFaVRYizW6r5Bh6ar1e4nH8t5D45dgWkGkScJcWwjf41u38Xt",
  "key24": "4pL8WoDsBAhWX5YJfAVqP1ioppjqCjjU3pRpoRD3V4D4DQxfruBZrzaaUEc5Nw1gB8eUA2CixXaPEfRLxLDTx2Dj",
  "key25": "4gffBXpvWi3vSmiCAHXGWANMW1PNgUkJFDBrxtkBq7SgFqThDxwHUFZnGBkDxVhmEWMD4RHyXsu7TMsthwGbMXu1",
  "key26": "2CNRxvCoNvsXiZgsQA5HSJKChrYVUCtDcjHfSWA9T4cM9qsvCmFPBy9ypeM4D5yip2gFMM1r32kaUyfxq2GJtU8J",
  "key27": "2EEWeKixXbTdLTy5ArmvfLEXa56Pibn4wH9pZBfkJLAwk4ggae8wQAExzL9AotQg8sQWmGhTBXEgXrAU8vSHdAyc",
  "key28": "GSuZD1T9ayMz47L9BC7WvVqXBrn4izqiHU7z2KXyBmkyuodu1eNuDWPgh98HBiUuyyLZaSBAfNSjDvcTNp79eXY"
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
