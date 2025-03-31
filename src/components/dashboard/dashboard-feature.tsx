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
    "4sU6HN4Xi5azCKtEvK2WftRJDYGwYjksQGun4vp2rq4fmMx381QrcNrZ9MANfCz1zXwRXr9yWkAYzgCj44aTt9LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6uRHsP9UHmEvGikxqYkWXTEW26rJmj3oqmy2uCkrFMbqnymPv3sDEU5kzJUTVxj1K3o5rNjbeZ7GQhj3SnPbEJV",
  "key1": "66ZheSC7q44jLuryHj47pbF8JMY1VhUkyZ4QiSqDdo9K4nzL83z7D5iKkxtbUBe9PvmnBDgzPPkDqKCnyap4nSbi",
  "key2": "4vvmE7Bsgb6FqUkvnrLMCrgHbnGXCkfk9cS9pF9hXWzQXK5s7tbCZwx9ZPqbqnnnqzDuWhXrnEMYbCcjRTJ91RwD",
  "key3": "2hZBgNgwFXqroBno8TJCFKMeFyBxifvatNihHQcTZkDtH1xAaHiPpg9Lz5dGWTL1GPnFufh5ayD9PcgULXMvCCUV",
  "key4": "Ba2ciyPL4CvqeECndfn3KzakmxYHjYZSbWNunGqeeybbiKpHZEGHj2msKebHikZVHT3e6vTfjwyHK2u2Gf7TKTV",
  "key5": "4cfMZK3qtESVrBVQMWmxHFVtPy19YkQNPfpsR4HmbFSUpYF7XY9Vi82AokdVZTgkeCyGsAStudFoPEQeVbYrtBXA",
  "key6": "312a9DJXFgR7Hy6V9hQrnJcckVnpMvevWHnH3DaNtSjgbphajthy9hxTJpT15PfQRmdxtQFjPgwpm2txfFvX941K",
  "key7": "29f47QQdLqMaD4xH1ABfYm4CAQSeLR9RjA8iSuMC2TfaH6evnW5Zqgf9sXK3TNLvdGJ3LdvinPYS8cNW11nHpSGL",
  "key8": "25nvj1n6PTgjJzQqdyy3AP6ffUF5J2wZrtMusaCMS4cJcEVb5MGjBvTXVGJcYGVTXKT5QGUhDE9yvUQgNDP2QqQw",
  "key9": "rtP8catdooy1Kois77vv3HaJq3M8y8e9qcXMkti6iL5wvLWW7SCVuTdeMffKry6ZZ3vquVL3Y6frygNytg4JDS2",
  "key10": "3BuAXJYjyJ9cv3QSMdwKCBHxrqHxeZ42vKkaG777txnxd1stwtJG1cZ5WiYmJUVwGx8JdxH61NHpnwH9ikawEijD",
  "key11": "q5TZNKCJjw9iAMYzvCd1VgPvWGvSr5eAHJa67JEmL8ejPkeHgiWsvWrsM1k8BHJyD65rdA5ndcKBSyNKa2b3p9p",
  "key12": "3ZCQ774stgHEktgMC96fnopf3HDLT6uUbE4R9hUNRSZ2XgwwjeYbknHSKQFJnZ8hSGLHVVeWKWxVkMh4oAU8uDSD",
  "key13": "2h4WVUiieHC6F8aYjGWhFVwS9MiLzw5gwHRrs4BLupSD8e11CwEhypxUSfdiDGpqjwFpqDmEsUEf9NUzmyPSXqFs",
  "key14": "28s2KFZWaE65QPtFKfhN9kt5bt6Bb4pnjSkLmYCV2Pa8QY3ZCK7W6mxgv7L9YA8hcQWySNt6VfnmVhwptjKd6dwm",
  "key15": "2jbNRENC6JqcvWDt24FHQbpZhxpF7UpvpBTagSZJHDPR8mYwoexs3GxSKkF2VguUpdbdLLVDRtEHjyEKG3EUfo5e",
  "key16": "2hTxUFTjW9kk7tCLgVB5M6gp5kFxJFRSutqZmACw7oY1yTWYtYx2voKD2rC3MS9UmKEMPwTQdhbpTfULvxronYJX",
  "key17": "3YEAXFCY3MA7N1A27PJ1jMjyaH9ZsbiRiBAj9bcxg8Hoin5osHepzepk5AHKK4AXSeoCsY6T6TJyjV6UQ1irb4cB",
  "key18": "MB9utxobXshmszjJszFcc9dWaBhfYkAaa7cVuv77oxCya8Jq3HqFEW1bPznqxwiCxAetvz8oePPTy4fnJyPjsJX",
  "key19": "2AihpogzXeKk4t2Mr4zuAkT9vsh93eDWxbLRwkAAHAjabAsNXeesxAm41XD5aBbM5RPCzMMJUKAh7VCG8tPQxUh4",
  "key20": "5sFWwamzt49FQt5fV9fwQN7HXqUmm4txWXbyYvvMcmSv5YYwmSoZoSBr8U9DJ21KTLoQt6ehFiTqB6bkznJxdYW",
  "key21": "ioiHkdzWxJ5pPLNTnswbeSbdLwXrUa8nPvoBpFsfyFUzmYDW6wzescikmv5dHp7WrqmAYqqssitSCzCMCXqKa2F",
  "key22": "krZNYdYRpzvomHv7fEHDuFVHijSwxAJADTpG5ASRaRpN9BYQkeKQGGjjAW1CCciJsB8pjpnKqvcnL43jA24JixX",
  "key23": "56gGJ389pnUxhoFRDKPVwGP7mWn8LoDopN1DUKsbwB3tq1BZoHCr8n9PvRo6tNwac1SqsVojLKRfnGRc231aU9V6",
  "key24": "39rW997cXtFsxbpU4Az1mdLxdByGcoJsBjip3i3vdDoanfbJeyTPLLbWLvMhHmg5Dizt4gtcaBAzv5unzqe9zaJV",
  "key25": "4NchznWw4tTZEe1S5Cr5pzJG4m9sZZVPVVF8M8yz5uYYstxx5aWc46ELHuvyjdCZwax3R9BSomN3hByfiRdRxrqS",
  "key26": "5vPpfAcpUkfjWojZSmi26U8M32iyNoGNYHz5GibtfPpSXBFvwmv3HUVCQ6L3P6pwBXzEwbAAZpx9oobxtDZYUt9z",
  "key27": "5v1mNMTN2KUjzdSR9seePWspsUZvBn3zjv9yz1eQe7fLhzaadjVceaaiwbnTMcXscoMPCLTacDDwWLt8V69EBran",
  "key28": "2C2gJQWV3PXqfwQGecsudwxYWB5dYv6mF6PqR8nAMWYCRW6TFLsv9YFj5sgAqiXMRMgit1PwkYN2TPFg2cBrdihz",
  "key29": "37KaXf7HaeTWpHYGgUKMqS8weAuCMGjUbWgqtXuVULrj7jDdj1sF7cSE7U4dtdJHDLYfyUtTPxCCNK2WG9MVfPVZ",
  "key30": "mfRKUL6k1hgSRFFhbUPFpGYCMjSgoWUKX5CCn3GX1cwUujdp6hm6PioP9JP45u79G1cJteUzxdsiPac2RpjrrPh"
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
