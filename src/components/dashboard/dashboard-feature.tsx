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
    "4XgC6wHT7WNZaQ1y22D7xZaHsootrxsFdhbjBJb3UykG2LQ69aNNtw36PPFZaTrDAGEkm3pu7EKTuvWDy4CjNN5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oGjzDUWiPVcfio7QQvYWoguvXB3kJ3joADdS5d3iPcR2KEPHPsRpRMDmeyTfRM8qv6KDPGrcA1BQgzX3PQNjAsm",
  "key1": "5a1t5y5G6nAN3zy1S3jhgoUjfspnLuigq2tt3THkChPRReq5PuAJ9TLAYEzumrxEZD6bWvx1ddTZWmKSvJqcwUra",
  "key2": "3cqBx4nD9BxZnPRLRTgbi2wYk96ZW3oAc8MbvcQmdPYjafHc7w217Wu9JQooGpTPiociGrSnF79r8urhaTpzh6Wo",
  "key3": "3xFk9KeNPjF3B3YXm6KR4C3fwepgRcRECkP96nJ6rwjzAzE1pgwJQaNu7W6FLLcWv3qaZNiSPAq6nk19j81WqeCA",
  "key4": "4PGGsAyyVZ396XZgaRzaZmJkRtbVE9TgBKq2iGTjWkWLpbFp8ZNCA6SFXdpBZmNJjHrV3vnRGwkuzhUr49paATnG",
  "key5": "2uHKEzMMZrs1Vb9T6CabqcJm8uhNK6LwLSjGFuCUaDhi8vTVHu4MCk1k7hQ7uEFKhzTU13iwnKqbmNf4i7Lr9zJM",
  "key6": "36GhLe3YE4g8Ev1gDhC7V4gu77A2xHBwRJaveRYHJctmK4uJhmQzrPazTyYUCMkY47DCCY6fGnQx8N1sjXZNcNJN",
  "key7": "2vWGN3nDsRTofQNtqVfh4U7bMKPmtGdv2FDNnf49KonyiVtxXQFT9fvfTw9Kac3eEnJJ7mQEEKUcPZfNmuNJQQGJ",
  "key8": "2YFe5733MyfFeg5nSA7bJYmfHmPmjFzSuTjaqthxucH22k1GVEKTC9aJ6idCiwxJU1dcrAgC9TMTnUTHMRpMCRR",
  "key9": "53Nn65SCwhrfnFqPoG1WeF2cpsiDwKyyperXdWEGv4BrzifMg9hJcM7ApvCGKwFeATuffA35sEBbnsiSbUfNBa2F",
  "key10": "DMNwXmizzqATSparcntM3xaP1g7o2UQCA5mx2zzFtPViCxMSP8peKBQxsw1JgLHjBSvd8e5iKeRTiokAgQoRfFA",
  "key11": "Tj2Ctkde9q5fXYrmAvrincm4iyS6w5MKAxqJ9KSdzoS7BoksStttme4u26mCUJmrUutLRKBWF3U1dYPESxVQVEC",
  "key12": "7RJLBMbhb12ADFwE1n6qaexn8B6H42UASmUfHWTJWRGD8WM5AJUGkukvYWVEwZZHw7ca6Q9FBaa943k4ieE5Ugo",
  "key13": "2ZoVFboe4hwwhkaeHQ9eqx4JUtPgd2gBbvRMzN5iqy6QQr7KyjZqTWVQYHzK9CC56wHFsz9QnEwSpk5YegbLVEfi",
  "key14": "4Ts2WzssFYub6bSXjUyqQGCA9emdGZuHouEf4hgU9BxKND9wcYXN7R3KVezM7VgpDoVZriZsciJZM7vktPZ2YdJA",
  "key15": "44TqaJwCiSYVYLoV8TsDyhTScurHnh6cXRuZjWi4HZMxTiioqqDZ6oavSEtzLHBRDKP7mLFPT6NXq7m8PXUjAkVG",
  "key16": "3rSkYxkYE4wZGywrjM5vQUgyvQ19KBBrRwBTM34v6dQim4huq8Xpa3ooFyGANtbe6TQg5PZsX7XLuppQz8A1UoSr",
  "key17": "4sj98utPS3uREeXJbFMwX4YhCL4Z42m5F26U9v2gwGSy7owLje2KvNF3kPdY7kzAJFn62dJQex5SxfZuWKDPgSST",
  "key18": "3uKiCKAEuM2277zH3xXom57BZUhPLXwhQha1GGuqGtLa3S5xvkHWHXsnBqbZff3qPQ7U1wUwwNoK1a8QupNJdkEF",
  "key19": "pLhPJsSeqaXbHGNd8U889PivZcrDXf2wpR5UxzcpANPZRjyGAjwyYLhRLh68BQJ7G4pS6Cr55uEfZWAmVc4oFd2",
  "key20": "5W5g5PyDygMLXwTS4SsZdNALB8prwc8qQ3N8pKo6Rg5rGfBLGMGgvn2AQnddSCVG2X2rvBTyxbzEw2Ga5TSYu8QN",
  "key21": "27bf6ARbr8MTSdXZYtZttL6NQ7gzbfFPMX9oW7zi2PGqPoWdwweKry3WZn4s27Fqdnt1fASGJtHuXnvX1vakGzZo",
  "key22": "3AzghHmVr226xwuVFb9o9rwsyGiwTF9jq3H2hr6Wkm1xeJycPMr4vYnD34sRf6HEyhaEhES8bRG47F6zkS7bFfzd",
  "key23": "3Smi6Q7AxUWiNUGXvxQaDFwL2gVechkGmqvfB2uqiPmkQsqDsj6aLdLafR3dt4A8Zg8WTMLXA131X5DL5R2APhgc",
  "key24": "25XFA716EWJEXXw9pT6Thc31qd6zE46qQQRvxrWgRgu1843qYvjibqBpXN6yzi1fTSRE2E3bifT6PQTxGt3xfdAs",
  "key25": "5x84aWgxDHCHD6dPK79XTjuZrXUETKRxswgWMRvazY1nhdYduPG3SJ4WsJbT1tw63BzPsTB6r8cvHKhBgzKN4UD8",
  "key26": "2h5jsvZMSAvoAcjmkgvLfkV4WLz9rXeCVGjXTEhkx2HBU9P5wEcHb384RmBzjneGLximVfbVshsNpXi34MJj3fc5",
  "key27": "2JZmZLyGuLoCjrcvZ9tKKSQHrBk8fDAxFsvqTJ4QdojyjkJiabCyAU3NjmKz8Zd4bYffboYuzBUT8JfxAaghtGra",
  "key28": "2Qfbsa8dwxGzf4F2aQoiBLXSmTGwGNGS1MwuNRxcQTRrh3tpC6jXqwMNBsu8qYwo9UmrPMkQwvgCLN6Ef8jbmu52",
  "key29": "4JRGJR6Az14hiwVDncVaABWTjMBW2cyQSgx1dc2M6sbVzLX3j89zfJnvCz7KdMJMCmV1APssKtQooxXTNSkpFFXV",
  "key30": "33nqJ8k7x9ZGcJusJfRW2HBLsiL8Xz71RFHp1WxrtkartUHMWzwzXBgfji6nuPRXbhGFzcVpnRutLwf3Qh4DmYyU",
  "key31": "3kaCDeGL9qLtQiiEgNMaG48V9Pu2ebtqnmRpq6Qi6C8rwMrDiJcNNr3TKXmXhDV8p1NdZft6YQBgWz14Pk1nwbAK",
  "key32": "3DSvPGcaH2srG7dMSvogrtJjbSoE72z6v47yhG47MCPJDeux3j3aATBB2swjzCYEdC8gVQg5A4NFbFe4EggfFDPS",
  "key33": "Js9SNN3dTKitUaByzbYm76Xu1wwdCvZcXHpPXUjofAoo1JJsU5e3TDPUC3ZxskvNaNbLQfJd7v3hUKqWLCrkQyP",
  "key34": "5pRwUJivQg6Pq3UYRUfb82hWJfo9K5vSH3vmzVpzzeYJt9EPn4pYszurAU2qS9mEbyDGuoRQBm3tnBKty5NaiGqu",
  "key35": "2qEscbHNRdqZBGMcYz3XidDJgeaU4WSQcR9AkKaYdEMjXn4e3rTjc7aFWb6wiaWX5oMyfbEkRHjKGComXc5fwkdT",
  "key36": "3stizRks8acMMokmcc5UfqkLodwp3VZPHhRA21fdVncfGRQ1Q8bvKQZ1E7FthoGDSjDE6HmWcXxTbbRHdMsH5aC",
  "key37": "5hpqtYmZhW73jq72Y8Y3yvxvoZTUwYMR2QYS5Dn8WXCnokuFu69XHzVcsHj5pCFHzXzYX4q9KXy4ffqeD5ygaux",
  "key38": "5bPdZMvvm36RRtqpjevcWwfJjZzW1CiVinsKSddBfSvNidPUHpGhVmznHggwmgqu43GrLTTvyiVkXAmBKxs4deE9"
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
