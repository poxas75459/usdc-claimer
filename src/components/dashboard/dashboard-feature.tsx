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
    "4NeDnzujyvYHj3XTDDZBJpsBNSpkFWoUcZ6aTyetbTXBf3cQjaUggbPCeSnJBSj6TfCkrbKNJG5fdiPjRRtChKgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yMux7NFNghCDb71chJaWXjE76wSLWw33KW1JhazQTh5MjsoyRMTFwQ3cJTpC6sewKdBRtZsNYFqK5sx64v2nyNB",
  "key1": "4iM8BUYujqRc5gRJEHuWrwRx8VR599Wk6Pn9ncgZJMNiYLrohxhd5fm7qJwX35QgmdCie4QV6SPhGoUcWymhXEKq",
  "key2": "4ZVLkjco8U9DUPiBe7WAJKdT916qreAoY5Duaz1i9zoDJiogZEDXqd5BPs1ffVE9ZFgGV7gzXQsdzn2ouMBsnKT8",
  "key3": "BLFcB6awpQSe8e82u5TNz44im5dc5Rq7mopg9z4Lguk6ze7bgcSEmptmWcfm3rSti4gKK9qHboszbgBp7SLhoK3",
  "key4": "NuU3nJ1b3RnjneXDMTdRQL5yGeCeLFzUbTwucUiNvfSoSSqnMjCGn245SXT2hNUmVSi1uoYEQStoUuR9AtpovfE",
  "key5": "5UgCjuihUXHUToHohvX95U3nA9hZHMgLP3JywgrhXLpsebfxzSaL8rz3Vz4mf1hdFqdzbWBZ7HjxrQPK6nshS97F",
  "key6": "2PUucRAKHz6MzNgsVm7rRVAJix4Fc4VP16gjxXYVHa1vzNubobUtrCASa1YazFXkSrGmbpgA5o7y5QAT94by633g",
  "key7": "5iHvaJHz4mty6Dr5Vuq5kRUsUUdCiKrkyAtbYX3a4JpgL27VAyaU34sz9uBwiQxcv6MJo4hCerqXFqYgoVR2Kixc",
  "key8": "3n4oKHCQ8kzXWtSGvbbRJfeAFA2oYkdyMV2uFExfHbKua6bEvt9paejnofS8cHv7nohJzzJ5tn9xWuy6JQCmJ4Nm",
  "key9": "4H7eQKVXrt6hJu7grtBHiqkc8zM9kPKeqGW4ELKWGvvFqLJWWSVXhcjbA7ynGMxqBuWXjyDzvZguSgvuz5TthDKv",
  "key10": "3nc1WutcwihEa5v3fVGWDuYZ7zqwZeDwXsjWMCiNxZLGC5CSHa5wq7LwmyVh33bLNWgCTSYwKLCp79PH2qc1Vf1t",
  "key11": "2H5m3gari2Koe9Tu9EoyRofP2CdjwPrg9jTogi2ob33pZCdvthWuXDTqw2N8QymWz91xUdCSS1dVyTfHSayHYWX",
  "key12": "37JNADAn5MQWS3JE7s86nMEfUVky8DbKw4JdSQpFDRcvwdxfKsuRt7tKTTWASfN9k4gNhtt2j267f2VcadrFptZQ",
  "key13": "4a6DDTJihCaMSytua5SF8rSWjheRmR78di91irGXAHcBYN9cuATPoeYnXd3e8JeUnharbmL7eiqhyrT2FobeR6hn",
  "key14": "g2ZRHdL3pj9rsxyo7cqS5Qw9cLUb2VSQ57gNvVZAVT5ss2SvHzy4JLMw1zDrChzz6UA46H767ifvnfpu9wjQsU8",
  "key15": "42cURKA6xYN9BUWT4N4rGxsCo9dy1pT9jtTNqrp5GkHG3hMEqiTzkUWTQPW2fCbYyjvjGN2muRA4x7my397JDFcN",
  "key16": "TrxEh5DTrSsM9WTL77rP3a8CkxpDZMXCVWX8PGH4Uxx9XjTn2Pqp1dRH9HD3xbmMr2bi5UHQJRbjmdoEEH436Uh",
  "key17": "3KAZKWuyZWPtLQeAu3C3zj18SApzTgPigyokB6iLPzbY6iMKNZzBBHkG56skpsPfscMsnDerJpMXYgkcx7JKqB6U",
  "key18": "24PvJNmfV28jSdxC8HbyL5ErQLrYCTXoTPdBgXxrc9xg9Yfy72ScJShnTEss6TygURTtJTUANArj2eGFJK8gWdmA",
  "key19": "553MPD5aMNreGXrvbJTHFmixRF376A8ZV3GvyFscG8KJz3tjmYUbpszuttijSkiZyD2yeRbmnQTBurK2c7nFNU6x",
  "key20": "3VG72ZU7j64C2vrbx1LAbbAZUGKLtEghg9fp2zUPqxP8zrmaxrxqCW42zF6ChKLortPpyxAgDWjGWpAtginZkAUU",
  "key21": "4Rv44QTMGRPEUwJ6cFSn7kaMHNZthwrQLMNBywbpPZbr4kptTwKqqcpd7hDHxmaDmCBxQf4EbUnUUDMhhzccuUtG",
  "key22": "24m5FdqMY1nMkW79ijY3SYBFRBCScxUBHAGWhPwtR4a6LmJWiunuEhJoCph7itW6cCCB4AwmhSt7YG8PmjDHEX7e",
  "key23": "5EhL8dfRynePB3bsWj4ptv1fBkxPMbgS1FqbALong1v41PjNF9xk3v33rkBWt7PNWi54Tt7WR6pYhut4PvEUdXrH",
  "key24": "3WEagJrqZrmCkH7mLotgWhutwycLd33rUm62dPeZGzjcB3YBdji85BwmmdisdT6TJMdo7uXbVkEqi2HBaq6gDAP8",
  "key25": "jxhzGAJKyAVNztQaiGmQnQzgnEuwctMB9Dn3pRcdMwTpb5WSRJFRGadTo9avnak86TqRgDCpqmaurBDrCRjKYfs",
  "key26": "2ddQA1MkeEMtrAeBQD1UzGRJGvrdV9MNssPUQX2Q3HK7hWbk96KAuL9si194CuNdX2aWsrxUfB2TiG9KMsVYDb2E",
  "key27": "48MjXz4kQTbaVZ8n8p8hSCp4oVguVeTv3MKDjgzwgRosPCJFXKTDQRvEPm8FQygNkecf6tWqAuNF4AHGarm69aur",
  "key28": "3ruxQog7sQm9eJcTUUXYHM3q8McCJzomZuGQhumYWzw7MBtpCb3i84rdT2MATwsc8TXE4iwEzT7Ns4UfyxYkC5s3",
  "key29": "25GMjGX9jXWirwR9KusBFZtufu5DmxLqJNfhJ4Rtnu1QbT1B7iytXcdNYx4BVCCZ5uzduKtRxPhjgUULoj7rXqTZ",
  "key30": "CmGuFAjhMJGHSMkVi7BhpPQ6H2iVX3TCVBXkTqd11sFUjzhdXzNzM6NJUCfNbV4VPFZSFqMYPnaRuQNzjDrmwuR",
  "key31": "JwQiE4y2u5eKmnU2dWMNA3PaS3YYfCY9o8Gje6bRPWCnYS741YhrNNkF7Pz3eNLa8MdSJWH66cRCwxce2Jp3J6x",
  "key32": "4x7WJSAtdbdc3CB4d1NHFM7zGmPbSAmNXkZVBnaP137yotEpQiDkaDmqQKGEnbVuwykA37hW1WHwMAUnhq9Q7E9n",
  "key33": "tyJqHXtYajXtjB8vj3fzoDzPxVCQnJ2rzUHM3qPHFyRMGy1rC7thV1bmzHZhvcVyzUfYfvWNNKmctKS1vgjcRk4",
  "key34": "4La2uxw9FZwkoZWwQ3HTpNTWRBxoRyzLfX5QM6cLsYyG8BwiirrLA72aPBcWkVMPJCvca16JF8sU8EBh94pC2gET",
  "key35": "3hBfuq4hTJL2oPcAPeKGJUfmRXQtEYKBLRr1rtuy5ZWfXoDfGTkn6K7TR8N6rS6RSDjBc8ZdvkceoKJuTEPzAgWa",
  "key36": "5XWyoHAvnznopYjDWqRtD2FCh5PD4qyLu8TBhzfwayBGd9stxLunqvNh5MyXmWV7rp9utJBLVUbo1RzkB4669A8z",
  "key37": "62fLT9MSsM8W6ZuugCMf6ZUHtteQid593sawiEXxYtY9MUK9UxWYubFynTahAoTTLT1RvFidfSBvme4fZySJBk27",
  "key38": "2cPbstWiDWqgtg8ZEY17c6Hd6jK2NoyXf5LHpLZPdTGvjoi9ufrPj7zHi9UbX883xM8RhDo2h71c4zLtAMeJ8vfH",
  "key39": "3EfbmG25aDrVPB9E5jwrpm2MaGNYx565RVUoCBGg52riLWYQxV1LMYcJAMn6xpftDdPGRukg9wpVzyEVBbudMCF",
  "key40": "2DKG97BxqXLwjV1sNX83kFX7oozy5JygJtHDLn4xeeLJi22hSAcJW5b6u7oxK4BpHdHrCFyDGmuAp9s4hC7F6QPo",
  "key41": "3ffGKi4vufrDLADZk31aGmV79Uo5K3RFqRh73dQoRqYPMN86ZyWaDJ23TSLvKJXKyicUFEBHtBqJhF1MoHSXpWao",
  "key42": "5cTqRr4e21Vzb6DTLH8HexChK9M7YJUCePDwgqKk3zgwy3m9cwi5EF7BPkTagU3evX7ifCSvhrquypN5binW8Pxk"
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
