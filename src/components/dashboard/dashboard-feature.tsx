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
    "4jtPSLazFSVu6HsmmwVQimouhMEk9kgoyzHkLvC7W7a8gKxJRBaqvFy4RrYyCi1KzwxmrypYc3Hy9V5jW9htJtyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELdv9RrhgfvyvPQTytLJ4i8U46hSSac9ZhHwtHfN7Vs5qG3iKjTR4RrfmR8DrYH6C6jqYGtcoxishuknLW9LyL9",
  "key1": "2J7TVkdcphbexXtVv5FaT4otzNsUWCQ5MM28L9vnK2FkjJ841iGRPQUjJjmCWXP9ZRWUyVpeEZKiADV7HjLN9yhT",
  "key2": "2qT59E6LTzejuxSfTkeqcAV37UZWtfH5CuP6NrLadjQkrwzEQ6KWj6VBQ3n9Nq6Qs84PNL2VaigJN7mrtet7NUS4",
  "key3": "dtZQUVRAhz7bkZWF2rYc9jgKxFaZ9u4j2EZiP3NYDz6QKCUGBhkqD8r7hLnbPg6BZEyJuV3MqkQRmJYmP6M2Zr7",
  "key4": "24tUVVpjZPcbTaT4zKc6EiGzHZJNp16NcUoS4xMUMrRsXh2aPELgR9FqWsH8chGHeifVTk45p7vbwXbiGV2kQigh",
  "key5": "GhkGLuXsYHhCeSi7xVCPBu4YUXCGNP4RstUf7pdBj5GAkVhkz7TJtd8eeLnRrQfCkuSbRycb1RW3fWjMAVAoL1i",
  "key6": "5Vmfn5XPNHvktnFQbPDsiBmRpoVDTyGcMvXW5WACagm5w8nHGy4Yyx4iycpNepbKTGyKhm8MwRuT7kqS41SJrNaC",
  "key7": "eV1yNPmSALiiF5eoHk4jfyX4JzbjJrK8E88CwhyhaMrNm9ijB6Kh5dvMKFQWn8bv6aHrgUEd6F9Qii8uXg3C74e",
  "key8": "3BAUwR2fW1FnN61Pohvbb3vGgE7vX4TcyRogr8c7ac7MkUxWExNbLLUFBD154wgiybRgFsbaP5cdeewD46jyXZZh",
  "key9": "3YiGZAoHgXAh4G8R6QHCpfCxpmReDHj2GbfPrCaoNxmsXNKK4gX5YqMGFrbtUmkVhs7Txfy65hoZuku7M6VCNFie",
  "key10": "4scBdvViAYr2XZq4jAJM439KnfbGBq6H6M3Lk7PvB5q9fvRmCFyWF24XGEwpZQcCjzahqN2gTedGhBs6h8NP5V9T",
  "key11": "3GAE33jXXd2weP6Chjfvezj59uPdDHC3dFVKMAFwtCzyAbkc5eq7kfCmhDMHEdmHnmFXtaw5jxnYsJ9Tk1jmwgvc",
  "key12": "4k57Z18U3LTc85JUQQer5Tun22KWudockNQRxfDR15DAnKUXEbPGr9tbTCYoyQUhu3U1dZ6cDjRaN8y7UzLvrw3H",
  "key13": "5doFGGoNiHddrBHSEemzU3SvQZPqsZSfjh1jBKpwjJUmZvvXoHbmvvdZ2TBVMhkgUddZVn9eFQrDMoqnLCj8yNif",
  "key14": "2rxLfQ4sUjUw3i8G2cBCntJqpSQ4vNSBEsfvcs7Pn81xJrm96qRuwRJ1xQqmJftG3pR5fB3qzAwX1E4Q2WKPj6Wy",
  "key15": "4hkm4N9c738RjvYmGPL4sL2whqhifA9URVexpKiU8Riu6Gy6EESnYUf2J8N4ydecKG3d3SNoHy5HLXEdyWwPSrvq",
  "key16": "4xGwzy9uBerZM9NAn4hUZbUkNpEGYP4SyMSvc2cV9N2CkE5rA1CbjZATAoDLZB67M6rcbA5yF2f7yjXqCs7qWEbH",
  "key17": "363iHHEJhHa81Fx7GvvDmtuRfKhkeFQh77h6F5LGk2v8VhHwCj8RsnCHzuoq18MAu2Cc8RR664Ruz1jVHevXHJ45",
  "key18": "5MrEc4gtyniNgeCjwX8i4HWfughnQPK7EFXz4mppFqPWKEpKjGc5FtGMLqL6SZdUqNGvqebNvD3VsJeZQkckxjiW",
  "key19": "4q7pBYk1gfmCRorktqaiGhNGifrBoUCxV4FgjbHqbG58qkn2pR8aPwdZCU9Fa2ndrSwueTTJdSSASD8hFcmvy7fc",
  "key20": "2dKWhPzwLXM8Qd2JCuBe4DycBDH2jMVeUrFNT6v4uAdaAsNQmN4QQeTTRqJmK1hSDwJRZAkgbjpnsYM9QEtBoJ1Z",
  "key21": "4KX763SEC6Uqoo3PGTwh1GqX5zzVC2Dir9EFnT44gMU4qKNncakM9F7SPJk7kzuUYetGevZb6B4UME6nHS1zjB6C",
  "key22": "34GFHPijxZQhuGgCEbRx6QuB52aSmkei5o1HuqYjixpo8ykf2rnQSbCZzcyyeLPriiYnHwdmAaCJLKcy5Dj2c3AF",
  "key23": "55fYqm4mPaMMyc4hd92kQUzoWysduwf8kBzpBFd6cuMSqGV4Bb8Huvb3ptYsc2Nxnu9gRADhz77FKWf7DnfhmYDH",
  "key24": "7ckubUnXKewogQVqYk9z1LLWLoPfceGXD6Sc7dZcz7PKBbLwfLriohN5fqvuXq429YfCSeHiWRTfFRSvFihHmK6",
  "key25": "5LyRhTX4UYvX62iHrVQUGkiG5V3CEPYC7ScSZi7qisuiGu5B5vV6xF39KN4G6amLozFAPgS1SwhR8NBGR5AXDfus",
  "key26": "zKRzkinAa6MMRQL2wN5LZWs8a6xDBoAAgRi2dD5edDUbHrRj9t79X52EXjsgGVNiaVgeo3tTihuAmih9bp4pshQ",
  "key27": "2sD99qRgRyDdezbysuD8hXVc1ph4oUmKnwn4agcHN7twC8NJ2QwgKeX9D5FmZFiWVdL79PUNkBQettQxmhHJCni2",
  "key28": "67q7YCiom9jwzCYLaN5newgvBZAvetYZ3ma1EP6DukVoSv4FvfZXEbsbCPZjcRj3n2SuqQH1sWjDpA2cvjgXhsir",
  "key29": "3Q59GgwHS2j5QXSXvU9fqqfqcfPXKpgQPFbKeZe2hrRkkb67n6Aa4255JLoJviX4FofHWFagqp2L4Pit6R6mRtQc",
  "key30": "QjvKUUWE6rBwUBBuJM6zS8deMQQGEdoi4DbQGhPCR69VYp1y2YmDYv1zewR1n5q2fxMSkCGKMT7rFrb4kXWd3Kh",
  "key31": "4JSgMets6kqB8G2rMrRvMUAJPbaR1oQF8Kdo19GPhZGcv8xF4UBXQEXdhEm9kuJ4fPRQLFToouGr4RzhJzLxaRoH",
  "key32": "28e7z56VjCJbidqEL5i4Bxh3FNHPh91LmHdMVuENMGgzgxPtLqv2k8p577BweornoBhmXqYXiacADah6LW5S9UPn",
  "key33": "54XEvyURJhHQ1uoQw6t9Wq9m4pUXoxdE72UQg4awiBYJkYoykv7RDoAN22snT4axWnWj7KLtzyMkY2qEGt8heXng",
  "key34": "RXodVhRG2NpX7Wx5LmJ9ZkNa4fMLS3mWeznDBtPfnYCLrUfK3Q99No13QkSPjnoT5NPZMLPrUqa9NE4L6yWoT9y",
  "key35": "3Kvbpk51NvL6JLY6ASNJnp8GqH4vJhrry8dTULAXvqj7pY1bWmbeAGHWH2cSiCJE8rjhmVNR5zf6akujf1yAat7K"
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
