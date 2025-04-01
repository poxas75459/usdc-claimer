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
    "5YNm946YmBEx5vfY8i8fBUZrQCSkTSzH5Vc5Fcy3GqmV6aKMqNNi6QXJgvRbSUwYL7J25CTup7dn7uD81orrUDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erWHnas5pUbBswow1AkEFiwn1KUQpWtPhCSGoviBzganmrEwKd5VcTLKzGsKARXtbr5n2j9vsAiikWnHmKJWFTT",
  "key1": "5G525zVSmosMg6YecVvVjFYFAow2n2HTtyNfeWYhGpwLjXX1UYseT5USsnREE8vT232SN9yotrDzbp2riKjEwYDV",
  "key2": "346szDodf795aef495KmnACeU9VA2uuQsRHEHS9fZXNP8GvU4gGF6wysRTt18UMPfxnYkKjo5oR1GstcGN4KaLMM",
  "key3": "eQ7C813QixnEYehBiPAN1PofCxRG9hVSLFfm3sSnmtqNccho4qG3fxPHwxoeQpRtUSaDNpdBMnkgKVYc87FBdhq",
  "key4": "5vRvAnNquEarqVsTPX8K2mmV7RKJK25H9r4GX6nWCmGe5vCKXk32PYh2atMQiGGrJDtv77wUSKxfhgPMEfsiTfiZ",
  "key5": "5KVjkJTT2jq5sQsGGRQX44DqE8bGYxhMs2NQ2F9amZHzUQD8hywrqcegTo4WJwQByCdk6X2xnqRqYigbxvpxCs41",
  "key6": "4xRziMDP2KUDA9jRPywQ7g3DY5Ew8QUrAERSUkJnYeybAn5DehMcw5xLWvZbMFUaW1b5gUcaDLRQiAAjtPpE7pQ5",
  "key7": "5vXPgF8CE9jqkcJ8EjfTsa1c28tbPSiBS36Bi7sp9CWKrn3kX7Ma3FV39CxpdCvX7sBJQTdCQeuqxu7V6zJueQ3m",
  "key8": "QxpGvDaJtKUUA8hWWcqaFPjg11L3j2ShWe6GftAhfvtvvJkJ5BRGXtuPALTr8hnQHvbLxaBDi4AHJFdmiDnmEpZ",
  "key9": "4mBmU8UBqjjqRNqGnwTnqgoJKPgpFQZMKp7gZ92Wx2fJMMxJPwHp1RR2zT6kHxsjUmzynBTNzZFdANhkSwbaNBdY",
  "key10": "4M4qn8FN4fBztfmFgp2UGWnntDKztkrEE7gwejuCXRFdiqrEnMbky41y8NPWSKpPDXwTxTfMgaJWc4v7NJcY7K1r",
  "key11": "4H8ezjUSXjS6ZBpY1W1rT4nb4vx4XXygW2fHgzntL2R9rA6pGRksfk3u3u86z2xxYDmPkGbahMFo4y2tFs1UiwRh",
  "key12": "Ust7vkayutNNRoWTzBDmzL83mFU1ixm51K9Bcq6783cFPimiG1dGXe7gr6pYeeCfDqBG2acc8zPJ5xJQw3tsb65",
  "key13": "32fnPX29gkoLEtUsAEH9wALjeN3bs5Ndaa6cbFU4JyXHoacTQ4CNDob3ouJXT3oWUguNFuZpc2oBsnHv7WukZoir",
  "key14": "4Jec1pn8E5StQ1NynWF5YYBGc3yqZsLGhs2pDkcsCs8Z4CQHKMme9WZ2s1nbjYtXbpDyrzYY1hguyoat3N8WsX1Z",
  "key15": "5KncSpxRnENjjZmtZ4ZkYa3MvAKXWhYHDD24uvSnMYWZE6mYCZch55VosAonGqQGbzpAErxTyxHqLATLSEe8kRPm",
  "key16": "3hjuuwdsPgevE9tJE32ubjXJgYV28keS6UXLNwpC2jvRW3zYipPpCfqBu7v19qdNfnZexxiBHvDhrWkXPX7iFY2E",
  "key17": "5petNwTHC3TgUcAhyfxZa2i19qgMNn7dCK1ZUR5f8y8SqbvxvPD9ZwvSrg9BXdURdAHZ7YqN7TRaEX6ExVLzGhsw",
  "key18": "3PLCWxLvwbsHBXgt6tZFsASBBSDpHXVfJVw6VEwg6mCN4waj7EMveA9bTxer9aaC9oJkCU7QZtdgqaXgjnLTmtCd",
  "key19": "37dArx3UXSeG4boGQm86K8ouGunpnq2qEVW7uqNQojMKhb9ffsJYzXijw2YUDUP8DTqi3i44xmAXZvXP3S5e4nmg",
  "key20": "3xDX9WkappNDFXUV8FgoGPyFqKknpAVVCuGcYW4RDGnf4u7GwvshWJDkLjyQJJWBVsxpbBCUcqdZD2zMzohMULrj",
  "key21": "5ZZXrC8Xwtcv9qXPwZoQQRWuxqXckpuC7hxyzZCEYoUg5va4mZ4k2fzTCk5Fwmqqs3BB5SjQwvXUCSC2BJtPEJMx",
  "key22": "fzJkzM3RY3hcAwjQiSSGpfv2mMaxFj5Ftf1okRkjGcFVR2kLSQ1wBWUj7M1C8HWXQXzatMxhKncjgMmv73spEPe",
  "key23": "34MFq9YCMWyYm52LSa1nZLV3DMuMmnjuiMdyHe4BJ2vai4rywzdN2iWPpjqsiLGEv457io4iuiADhd52YgUcMG9T",
  "key24": "527UwmGCiJheHDApX1oEjS3xNHt7RCgMMbhjj6fkByt3vseSgCht2E6ZjWTrTXGttC8JjzHDDEeV1GsdCTTwiqoR",
  "key25": "ra6GcnnN5tMKkNHkPuqJXTcrxNfysjmrxC9zYpKxhAMnUi5K6eQbJvYsTA5PSigC5qR32F7P4yEYTgS1uTGcY1U",
  "key26": "AFnkwDzoV2thbnkGB3RGaT1oMWhkpJLhfLcvaRV8xo7tFT3aMvtJfq1wWxgepB7xc4eYyGRCcQEJAiBSmou8Yxw",
  "key27": "rBvpBnk58dLGFAxyWgbHHzz9Kcc2Lk3ZaB1RQFEW7QDN8fhKLNz75GywC1Ni2i7dNAutQW9fRxgLJfhyCquH2w9",
  "key28": "4Ft8maCStdC2L5e76258H9thwjLKqnMRmZWTnuFpLo6NWGEGJVp2QvNQvVRHDFiz3tWvc6jUxjJQQuMyGpyns9Vb",
  "key29": "2oVLtyjmHED5ZPTvQGw1KYwNJM1FGTwvyLWSPYPSnXnh6Y6ttkWtfpBGCrbhRwNzxna6kppDR48qbB4hfMN6MQbx",
  "key30": "3gViX51yyyVfc8763msCDng35ideEeG9GeFyJ5NgZWqKmww6UKfykFuLRH3gBGxffih1x8ivViBXsd151a8haXZm",
  "key31": "uw7Lg8QmQR6qTLHJ8SFNgJbCY5qAN7aQZigX22aswNBPcvRKjwuEqtDpgXCuQ8tupgL4G4JHkfsNcAnwhwAJM4F",
  "key32": "2ywiruxePHqbtQC1qQw1desWK5irzghnrnbiHTpBHpK4NAhV1Gaw2Hv1apmU1y3GeFzKQ1goNNBxQLMcUMPrxU74",
  "key33": "DzCagdRdB74XasnuE3ByrrDFnYETRCqw1mkzEd63Me2kjTwb3EeBnsfz9dYjmgu6e8hAoamyQeY4d8VEYQ8ZRH4",
  "key34": "5G54fsMfDQhrzyy1bp7G8rGTVmStavqvNUmfzjVDMKMKdAcYq4zwPWQDh9dWGA66XPch1TaDGreevuaxoL1q6RDd",
  "key35": "482kCK7L8qSJi4NSvkc3eqGV5AfJriHEztuvtnA4QgWNLreVtgoftEiCEz9GHXMSja6b41hqmbDuqC7BPCHVh42q",
  "key36": "5CSC1FQsZjjR9jwd4M1RsBSjSkG5XbJnsKT8hvQPyWTxJ94djbu4AtSdLgdwHtS34mcw9Kwd4sxNCDZcSWC38a9Y",
  "key37": "5XJGANPtLhndHHhdnX8T7M7oTHFwADqk1XbZzWwApfzt2y6D5wfU1Tf9y4pZygcRWwBLKXwWiWFEi8hGk53yRuvX",
  "key38": "3cxhNpx5sa12PkKPbgLyQkQy3tv32MxXvivy4hsSLkHziNrxtVxbDnr8xd5PWmmLqMjGWjHDg1TaH2PdGSBVwJp9",
  "key39": "3wjc5XG7FkCNXBfHP1EWeieqGZwtkAPkY6T7eLX2cm8fB2jtezpBzA3ardNLHSUBr5VBctjtWb7ptsDahQUaSMRc",
  "key40": "63UDJX3s3xTyrQvCPkHDgtzGN7Pp48vNG8j8UbgzcUVCYkvCPQhd9HfAvuuCopTrMvFYcpEHc7CCRhwee8pDRsCD"
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
