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
    "5KBdJJu7SN4FJstxRGXkwHjZcETqwje6nidCzwiG4oYbb4y53hJYBbpGorJmV83r3aRNZTAkNWXJ7AtUZxSKtztG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38KpkQNYkMNbw7stgiSCSqDX2uVoepzXkc5xXbFUbpnxGArzxc8o8iTwT7cBJu94VGBE8JaCTk1JfGaePwnufKZ5",
  "key1": "26piHAiwUpSHxjXECiUTMrRkFzUYYk2DcPt1icewZED2hL31GAvk1MADF5AZAoQUS8VLJJ4GgVebT9es5rA1XVhW",
  "key2": "3cgYNyY8VbvJF5qZZqViQsf6es2oBFCS3A1mtSNmJjNrWNbUxTpypm2j7BRmJBFPUYCFmuLiaFB5QkcKYyNb62Ba",
  "key3": "2jZmFnSuEZeUJ3U29YYsdzUzigeeZ8d8WJVoD97ToUjRSskvPs2CgoGTmfwywgjtEQYEQvJ4F1wgJfgfBuSCGxDu",
  "key4": "2GgEuXVwz932t2NyNTVY6h58PXCs4HHi6FiZZWh6kdUkfyyxTGvJ2ZncmY4XkeTcD8P9VjUJ71sSrcjC3LDCWAMG",
  "key5": "2jX895LwXacsSASkN7AhjrC9Ja9KrfN8Jftpdsvsq69g87fjeXrVL9sCTfBdfmB1Dog5sfUyt2kfeEGTPcimvKxV",
  "key6": "3WpqVyDEzLX4DPgzdfbW6VmhqwsPgK6RNM8sptg388RFeXJcy1qiE48D6FNiv7ppUCQXFunJEU3dFyhX6teHpDPL",
  "key7": "2j6MosjS99aThxPtSRB6PRyqYoSpPe7ajGEcJZXJ3vLah67kxxuA4K4LK1kQDT8EZAeNFT329GDQtn9F5XN4phD2",
  "key8": "46fR4p9VoSeiMR6p8wjKGomzBHKM2akEencgyMm11VwhNzLgmhRs98j6MDYU9KQnf8WZp43XfWVegWiFjLexqMxK",
  "key9": "41HtkJ52N2s3VojcxnTarhde2yz1nyoRbez9EBoh2erxttv8iYKEpNuSqm1u4WbSWM9LC2kCoJcofANhsVG28PRN",
  "key10": "33f5x1iNJ3NigeSC2VqvCmxCDfTU3jpCNCWsN1ZNNgtV49NYkGWZ5gACnorLAQ64Z8EUV4ae7CKPp4uFhgHWi76T",
  "key11": "kjDuyrGg7FV7C3xQVdUyD3qETCkGnsspU8CRP7wxCSFKy1nG2zg7DWz7xtfyJEYkUDTU8xUNKvE6srisyXJSszu",
  "key12": "2QrwndARzSrmmzAAGA9NbQHNGgsySGdhAKPYgrnTmKryAywg1MgTmzUqdfV8eBvE14tpvC8x82xGgBdSsJxPvrkN",
  "key13": "rcRWHCCG2qkPSL2cwRVUM7JQ4UxpWBTCyPPNVNGViL6eQ3cHrapaYesBzvFgQ99EixXoqLjz9BfwsWHfLpEx8Nr",
  "key14": "4n99Lnfub8Fwsq9ouqeKTGN1G2xH4uxTr2Z4vTJdjHmB9nrCsQb9rGhyuskkCnfsYJrRbRowTFaCpW1znn6kxP8F",
  "key15": "4SpaYbpCBnr7Ho2yNuHHeCKv6UqJTEpCgwy7V5So9BwqpScgToJJ4c6YknSRV6jwTpog3uV2ygUgjXCPGesBjsVg",
  "key16": "4kC4ffNt6PsnvmmdxhiViRZdCT1k1WSHYVEvxorbb3Xgx4c9gyzwrd8usJLddGaUn42FsuA3H4KVQ5hKemcmsGHD",
  "key17": "3h4qB2yzvh4KaxmmEciECgJSTvTVtDjboBQ3xmXvBw284Yz4gdUohvFHiYcz4wUpEaRm21XZwXhanBbNFvzQ4GbR",
  "key18": "3XJTdjbrtzJ3MWYGsrzfLHCEBo64H9XndNdV2XCuQ9TY8V9W9nAvqM59kpBXELG1pPuaW7Y3wXpgEEFgzPoXuoXy",
  "key19": "S9ZGSfW9JRqpDsG8WkP4Bi3s3tcdbbkKF57rmh4AsFUcdaBNesSZUd63J9uW9JvkH7DfbbfmF3e9QJyMnWANPfs",
  "key20": "5dHRhazrNXkywUqhDF6X4Jc2eEn2YHUkLasz26fxLznCyr9gKkJQeqQzdLKCPUzLUnzRnX6w9pQWohAQQUDFKqy9",
  "key21": "4TkUKz9ZHDW5HAHyc5wgSozuzumz5W4ZsmjMgzuy67Htg6wxc2Lzp33W22HwvwEAj52A5EWLfNuZq78XNCeiK1aY",
  "key22": "5PJymK3q3PkUmtneqqBcF81BvxdHvXXou9kWpAwS3jnMyeux5nKT1F2j7KR7rVKdk8g3VYE4Wct6bu28aGpeoZ3V",
  "key23": "658qBn2gN8rbZrHyboE4ekAPjPZ9oopxZuNQDP3LoYJNCQT3x64ZQcTX5DXQG7o3atszqEQwdTMnWcCBM9mGpsZC",
  "key24": "578GS2ajJavWxqRwACEkEKkNXo1ms5nL8Py3grH7cpCX37q5qR6TMCNztr4vAUosV5tBcmNnsBfwf8rEFmobhhGT",
  "key25": "3aEtvWnucPtjit3RdBSqWmrTMhoyVz5AF9sPVZuTYiGcKPMskVoSz9T2ktLH9gUJQMzMuueBasU2iynjg45Ss5ye",
  "key26": "64Ne94aFkNGbYxUV7mu8NrxXBS1nk6rokPLpcZcY2pPbkuUX9xnUJvP2XLRtJ8RfChrjUtr2CktY5GiPVKN1Grdc",
  "key27": "4YwEL8JPtV4JYkY9Gy7wSqGkAVQEkvJbTgH6xHtNsg5icb8BDca8K1S5zN2uSTJ19pUAoNYYmzrGofSDwv4r72Vf",
  "key28": "4eCHM7cHzuPgcAJvc7fk1SVCcjekwqtkBR9S1NihhuGcg7TwCBkdVuMRysfEurnAjt8w6MmXJir3yhbBAZHychQo",
  "key29": "4aAwrEJ9XcUmiCFLhuBM4rM6BPiCdKX3PZkkfVBsXT7r33DhHvHDN2NSMtTNdLoAcSWP1PYvdwSpVXWwK8E7LZHk",
  "key30": "2FMRLKJMCmbyGq84Jk6FTj4WWGDgE21DpZSNYxfFRZi2Fqo5t1oqkaR1Nwi4J1qBxLXdZ73ZvzUZXK3B8oBv5qJY",
  "key31": "4kd9YDWohsLgCe7bUNom4btAH4UBjZ1GfnjEMXRGxmdCcxA72E2TEZ9E7XkJFZYya9vuL37maZRbN9if9i3RFq92",
  "key32": "2BeoJB53ThhfUjA7YGodRbCHNKtPnFbx2SGbuYwTWpd393ibWrmYxgF8FefsVK6UdUKGrhJt9fSaafaPn5F133S",
  "key33": "42FuzmAzBhGjcjdPY2sTwkz7LG8hXh6W9whmQDpCLXSg6ntfdLNWCQLsUxRARGApAtTkvByGSfKfoZKQJP1G5Aby",
  "key34": "3sHqmdcnsuY7jdbj3Edn3XmX6HH7iQvBJfpZHQ9znVMPQyprY6pFp7Q1uW9zDZvP6s5pRuTURrs8meNzMaUayDgA",
  "key35": "5vtbBWYeJqMuqY5xcMWLc2vTWdfgn4vs1gshZLuPYQFH3w523GX2TizrY1ckzZcHau6qKrp4PCqh3ogcnKs4mh5v"
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
