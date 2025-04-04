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
    "4K46bsmMLWoQ4kkN3uaSRgh5P2QZQgSwcVjqk2ts8sSGbqwTM6sMSGLUBNBWoWtbb5oPFd8ot9KS8uYT5z1S7u6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dzW5N8svHarhaGsVPvHtuqrYmbbWDTJ6zhgeiG2AhtLEkErmAxrMNVbhsMu39aPfNrKH3qKjCQSHzEhmShSviFA",
  "key1": "3GbmnoJbo5PwrkfgS4S7jQLvukF6bDn7xqWGcBuN7fQ3C9arzJYVhRFHeNryXFy2deKKSssUesA1gFsoPVDHyF4z",
  "key2": "2BjDvfWVR6scfVWXZTqhPxiCVc5Y8PBnEQhPMvEf5rqH5MNxDzjJX6nchb8GizufC94mv4DFvDNtdsJ9mk6bKd3V",
  "key3": "26xNqhV73pEDxPCAbzBp9y1VJYDsx8RoGTeHqV11ZMrzc4mq4RARQ2pdQWKiPFYywUHcw3h9QjGcL4WrGCCGjjTU",
  "key4": "4FZZLVs4S8CkgPw2atpiVJThcJAE7FKqbR45vHRP33w39g9QdPxPDw8pX9Km9D7YBBegkRngZc6RfxGdYDZMoAv6",
  "key5": "28Bfa132SwXSzmJHXN1ZZJaQyTsdPaRKoghfCvUfvTjBgiYKGNKq9HvyjfdnjyhoX9SDHXK2RmWwkAPpzUdvFdXk",
  "key6": "3NHtjtpt4UWcxZ4Wz3VrnGwLPnL9G47zv3Pzhg1Jwh4Vtua2gFprFxQFYkHzVftQgdC53Sgos3DfwLPx7arx42HC",
  "key7": "3D4wafNju4dhhxXZHfPdMjnnebkyUGqLV7REHJknbH95Kv8BVMrCSEPqiSYCPKoryeUr8JUHoR1tqvnyLjzReebg",
  "key8": "4vnh6PSnj1wxJyWxgnoKBr8AfkwLdo8VWwizPFs2JWJKbGemxC3vBacKAXAet4dritgvKpuFjNwtp86fh1oZ97CM",
  "key9": "3HAhyd4eFf8NwQi7oK8qeBkMPx2LZ4Mfk7gvfmt36vy4rpQ6RRC4KnocRqJdjBHUEcLsr6n4ZMcr2TBDi4ZktGzg",
  "key10": "4FbSXND3qSTMHQVY6t8varsthCU9Vn9auWW8491GvSDL9tPNwimTRAkXsBeEChYJfkSif8x75XwuLm1Bhv1EoR65",
  "key11": "22JdtorsG4iDhwJDPZAjC4U3azgt2C2UXxdcrFbk29CuTtRRnNhZvZmZ3cg5U7vBRwQtrSiEEGYbBXtY3kKcXTRp",
  "key12": "3TCEoF3StuszKWN5giE7jsySVvsL7ofXRFcXBbob8SBRWViPQU5xwRa38tJQcdRUrSZa5tqibNqwpkBiY5KVKXzf",
  "key13": "E6a5FCC9BbaEjNibU5CE4fjQPXu4tgPCwJ6tiNniNCpFE4dSuaYrpKnfeJ1uqFoUMhp3oy8uwKs1HHZ8AuvEVLG",
  "key14": "3eQPtiSh7cYqxrpG9kz4fFPJyAjjoPhUzaWNHcoSWpQfTYrwUadxi4rBnY2bNq9UM4ejWSdgN62MKAb3J6ZEA5Zw",
  "key15": "4jcK9s8iNWC8exPuqAnTG9UY5SPYALNSkJnVqg7rbN2wxwm5ejb9S1W5LsASLFxn1bEqwTLszjC6seCHMtMH8KiH",
  "key16": "4RGpfQL8qWKd2BH9XegZAixi8yvaNNA3hV7sAf2h8aNzSmX221v7tqGjonT78Hbku5jt8HaT68KffNGWfcg4Jrdt",
  "key17": "4jeHuiH9kHM3YSWEEQyWeVqp4svx1HhcwczNTasQiYRv2CM77BrHTVqjFHK9oeS5qmoMoZ3XMaJpDaLUXXkKGXaz",
  "key18": "2Jdvr3RqzbxRYL3DYn1PBo4vap9EaW5Vyi3K6ftEWUfXr2cwtuxWHunLf2VLMkQuFFQzTqXMpzfSaP2HRF2sYmke",
  "key19": "3FHCyc27aAKGBrTK8apoNy4y6HBMMGq7y8FNuaD4K6ni1YCMdG3gur3JEL7zqVrbLskNRB6bda4hjPmD4Qaz7hL1",
  "key20": "sb35SRSjFa3144652R3giRhcQktcPXCLTy8vr9hio3vGziReFKxip7kEmnmXDP82bmpnXQJvMQi3sKikhiEgYYi",
  "key21": "34gZXo2MF7Be2wEkv7fuY1wER2NgU3wNCu3ptQnPcc13yXMbLobACuznGySbpN1eEyDg7FQ97cjQK4NPBYCKbKe5",
  "key22": "5ZSMfQmbQK72ZYFzBakEHdgGTfrJNuvpAvAnJn65yrVmQ31C7msZE8xKQkEjYH4R1GY5swWkiLbeUVd1c3MzNuDu",
  "key23": "2oR89Cf7URdByRUF3vsP228Guqaxg8Ff6FkLYz8KJhk9kEbW917wNRgHKpTXtzAzzLxFgKDH38QTEd87HXCkM4Wd",
  "key24": "4YA75KeRPDhjWzrSKjhQZJH4TCoHkpTuXWKJRwnDJ8TUCuXk7g8sPdRXbAFk9FLxweU2EWyk27jAhN932jFJbEJs",
  "key25": "5GVQwUtEeVcFZj29Naf2cP1YbfrCDB7p5vuqeJHTfEmpiRnXZvKesGrBy65wP9UaYPqCDxJRuycpyQ5kXKciQ25p",
  "key26": "3A6rDZq9XSQrAXCimFBRD2G7X1p2YV5tXd1QSVyg9ikYJLhvLhro7f9GrujY1bxPmSgXrpXmjsx7Tx2te2y7Vhqf",
  "key27": "GgKPQA9WgM185S49H6aLnWyJCqaFhs4n8UeDh1cvTTM1va4xN9burZCoAFXD38wL8iH5pciybjgKVMW5EGGngKW",
  "key28": "4Vxkv3mJ9FFToeroXpv625Cn8MHyvsy6dMmJpYtSkatjw4EnUwwsP1W3B3TqS4P2yrAyYUSNZg234tswjaPJ2d4"
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
