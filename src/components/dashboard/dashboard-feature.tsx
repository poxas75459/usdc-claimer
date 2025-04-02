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
    "2ZVPUpH4dUZWAbGi4r916GJyWQsQGgtraYrLpAVFAuYnESL7tFS4SoiuRY5imWc8qwe2DHRzVZGPj9AjJFYXaqBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nU3wx1mxmewD5RDsBJyxyfswuXxSsn3qQKCEVrhkH5S5kzcsaWeaJBjQFNhL7uUSx7HLvoXPxxHhkh9kKViLuu3",
  "key1": "2NG6YQJ1CYsdKA6uhLnStXQPV7WRryXn5i53oCkKY85kBpi1f3FtRJZ9bWReyNFWFrTtZovWHPbe3fcdzvLBSZX7",
  "key2": "3HJocTnbSrWhhrAg2nyLGK5wzy1v7xQ28GTWHfbd2hv6bDWVb93B9Ecis8Q7SvyfxK81S7KZTUByXmAhfR4Psy8u",
  "key3": "TWDSc2gqNbyGJQbCiNhPhaRSnnJ6qRQgDJwGs9hmvXrucZwqx81iSvgudwbkao1DC4SHAVQVnG1pDqY85aLm6vm",
  "key4": "4v7NvRJLjRdpi7D1NUb6LcoaZeYHv4E8At3dkkB9V44rnEojZA3WDN3pXHVoQ5kGfxFE3LkPDVSSPknEHAmuos2j",
  "key5": "3kDEVMEiM5cWz1mpu4WJbxBghtu9wPpBdD9QxSJLMaVi7TtViDZRnzG4jvoxAC3PPW53WdoPQc5pEdsKz6CbQaBn",
  "key6": "3WZXkkSt86KmynmhJKzSwHyjQstqXYKVH9CWmzSsg6LuMRRLZLyfhAZGcXdACDSBgtrdE6UZJNSJ5Wd2nPzfRsU3",
  "key7": "28iPGq6FdsWhLCPRxUpxG4avTfgwGrQN6KrKG5aM4pGMC9TJgKdiwqndiAUHJEGot5ZR7aj2McwKwcwu9SghD4DY",
  "key8": "5qjFg79YHSoJcAGaakGosSvWoGMKQeKZfxr7PdG64VwZKvwWbpzuYt7yiwWyJUoUhXfBmcZR6qkW9Dgd2S5KizAh",
  "key9": "4WGzbgsRcTeXgjdccvnHqfXc6HH3hUEXqLQWB6XgYydw5YatNeNAzN1yjcQF8ZMMgTj695AjLkj4W18RpGiCWgy",
  "key10": "jVyguN3b7Jk98dYTuMQVjY4yuqHQzTYPvHgjvkzuANJENxdf3UnPNNh8Se4b573gfWFNNbZc4ySbiJoZ59mwkhY",
  "key11": "4PXfdjZand3nqideF3ovdG54fPBEQFDPFo5M21s1oY6uLZJjW6G7bpHiXC1HMyAESB3LxvbjX8S8iV4GT3Sh8Gnd",
  "key12": "5eMAmh23MeG2fj6Mop1ZqvNi4J2nyxNqkL2WZkumhecJdPxSfP9D1v9t6SBbNSzj6ypb7Pr4dUDvpfJFyRkEm6Cf",
  "key13": "4uPSzA31EWBKhBcwWEKwvMdE7t2TN65U2c2GbzCRAj5TqPWSkHEi2CWYgqcRQSfR3e6eiVGXaht3m3iiNwi6cXLT",
  "key14": "xjCPBJfPb9CKZNyDNNFamKfddzu2bFQmmkGSkbQjEMZTM1K3RuN8ZK65SvUZsAtiS35jxRw8vCQ9KkPLcQVD2qJ",
  "key15": "2zuVJ8S8n1LgWg1YCM5y6UgvhhD6rR1Xe347Pqapy5YA1HZKEXiQwzWKTuUyXyBGvYXDb38JnMLrcAN1UFQeVbZ2",
  "key16": "3ECryMUnbiZaLeCBNLzz1rq3nJJeRQSmswzHQCPSJyB1ufA2npAjVqJ51bugCxCP5Bb1xrSd7mSrgMTagq1f5g24",
  "key17": "4udciguueTE8oNsyVFDyadE73y89aGDwimGg1gwUXprc44WfdgFdziuwMPMXDpEvz5jpWvuX8MmDbawSbaweSeAe",
  "key18": "5sxKcmJnJcAJQK14HeduyYsk1dT7TFUHFEWNoiLdv3g4RvFNUEg1bsWtUvQtb5Rz8tujbeqNSpsuZCiqAJVgpi6p",
  "key19": "2qVhMqdcmW1WpfzToEtYZcEffu1QU9wY9CrDLK69j77LpQHczFpu54MQYJmsV6sgcLdxPtQjgc5M67sXqNvj65ao",
  "key20": "3vw12TgY9aqeS13NTMQXVe9EgTZhNLmvaqSdCpPvshfhA53JvJsRmYJLS9gfeif6RKa1fRKGoSei19nPfN8oMKop",
  "key21": "5BhWPgVULBPJWeSS8rMiZJRtt1bBG78JVrVfn1ZmAGi6Lb3HzJnL7ccoLVoXknwQQHQbRDafon4KhYymNfgJY1E1",
  "key22": "24ERBSVUN78GT5dvmhSSwy49TN8cPbakswLENnDxmCxmFWmLe1bfJd1S2AMVRYFe2UkkNahrrJVQvoBVjbjTqeQq",
  "key23": "3UkT7B71BH5hdkosMkgcrPaT5LVexjSN5gCuTVAT3T9bGmGVYew12oSW1e4N4hHjbGoLs5wCs22kGpBA43vJYt31",
  "key24": "5QKrjy6cmkPUfiv9uLfiYczusrkrnMLjayBKJJgKMHvCVWU9PBDWXB3nx5TxcvkgNoYPzP4CFg7AX7eRFcQc5VtW",
  "key25": "uVhJhYjkz4F3pirfxn63Q9fozpDhWeANgJ2TF9ZCS7uFLs7qTjUZUtC7S7ixydWxSqQBaicA1AC8xnpKjCcyfCM",
  "key26": "2725CVPXTeQc9zeoThomcJ85NswdpPiiYWAtMbih7kRQAEJhw9y1NDBoF9NZKYz5ZZv34t6CCEdC8LDg4oDs8axx",
  "key27": "2FjvPfb8MNHe9K9zC4ARAHr1CyGdTQxs1YywgA6KqWVgqirL6gfJPTX712Hjsj3XxYPqdYjCJ7L3MKHcGay5oGdy",
  "key28": "3twuJzLqVqRPuYbA5tdrYqBL52hyoY3qhA68QjApbbWWyELfDrQtWQ5inBK4Qp8SzqZy5dMNouavcCUjNjaBBwiP",
  "key29": "5d1hXGGyASwDj7wT7dDELPYyt6MW8iGH9QqmtP88zywAtK1T9tR9GwWMBcXe4XD4okP2aBnJDKNxcTaEotg2HERZ",
  "key30": "4bju6YnqozbweBHq9JgL5CScjusNDgH6Q9GkVbW6vX4MXkdDwXsF4vscS6zGujMfY37tfFgUHMCseiVLnqkAyMpE",
  "key31": "3PccPgiVirCghZdpa3mGByBg5T37jM8zu1FJGy2HgDkKtm5UnPEG3LTLcDvcLVW3CBkQZLrb5ekMPQKYNWpK79Mw",
  "key32": "zPVeqHgLDu2oBGr1wHZvcCL36CYsLcem9k2yuLXL5iH2Nrj4UjjiMmZiV669svFJDdPipH9gJ1CLrRmB4BiDL9s",
  "key33": "5oJPXPmtvE1ZRHjtFj7zULVq9LdEYvS2KxEcBTvmjKu3FzyCMKrgcmzfnKNswg3xJL32ey6hA1omPzwdQ9QK8EWB",
  "key34": "5CjzL9WmeX8vZUdMcVowX9C5mo168ZyaDa1if8kfcTA9rpK3GxVVaUzVAoeZmv9ZmFMkxfbfdEJWGGPswWbHpMHt"
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
