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
    "3Y1vB17HodNroygCXvSb6Vis5wUWiEjwSv9tdwgRxpj7FXiXm2zkcAid4ofMvRn9ZtMzNCYHHF9gM5aZ5mD18mf5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UnBjzEv8HiqZZKHCKQTswUoVvNRsLBVh4yXpDzg7F8ERm1uxELKs31SyozFGiazXCnaGLSeWc1wJjycSRjMBMjy",
  "key1": "4xU7YZzymjPPY1j3YGojCwyRM8qBUMXhNwD4eg3LwLMxx1gPTWsp5krmL61b9eDBZFmCK8p77sNTU57AeKhQbPcG",
  "key2": "3ZSSARzf79dhmUGJo3nVCNxbHX6H9riEka4WefFNFG2q7aQ8h7YiXXrcbD1qo31qdrJb1E3aTxf9jNrKowdcxXAu",
  "key3": "3JeJrXog2SXeKrALBeiQeyjDjLAiGruqZykJKXt5djuUcyzBKLFfpGhJMfKu9jtGmYeTAupJohDVvU2NCaJLMLjk",
  "key4": "3bB9TQBHWv8stUzjjE7jzWa7ZGw3UXjNA6vdP44nM3bMcpWnLikH2rk1yioXpwiMervrxAPq1AYaz7Y3EGVG1i9v",
  "key5": "4PmeUaW4v4cb3E3f74HNqvdZUQsRjWio4KjvqzTDpK36CeoiPhUs9dWMCGMfmhhcXu3LhGyKCvbzTTYPcyLscyG8",
  "key6": "m7vW5RvWgh2946ooS5SGLCx8sm7sdPRVM6NDTvCsroRzZVq9bPSuP1UayVxdA9e6CyAcQiX6Adxymg1yFswaJTY",
  "key7": "2K39T6AfVpSPjA7CESX9MKQSEpbJHN7cmSpMrYC29NhYcjLA1AxHTMuYmSbgCWvPFgGmdoWASzM8VkbDfgvtgCF",
  "key8": "2iPbW6ZPPF3NMwMs6duamLxsQ4wPZjZB1uRJkqA6tgmRgPaNgXPjHa14YoR6mCGoLkyUhZCgTSAg5iceBMD81GK8",
  "key9": "35cTsY7KSJvDUoHQjrsjf9bcZ4Gu6XRT3Lh1jq3yJgmGo4Kiq2cN5U1rouqMTDrhHXqjQqyNgagwvus8xXxWGiSQ",
  "key10": "4qWEwe7rCrUQXuNN456sJrWgdwLN8yvdaAY2sKFJM4Bpw28u5kUJAwycgwbLDXY9KqtTM1o1u7onG93NTQXMuWiC",
  "key11": "5BbXpqSapmdNe7mVoMkYi19ZEfGh9me5Y82KfJhDtEn7RXcNXYLPgaME1BjnfXcjDGKdfFPXQLLhBucbXt6Uwwwz",
  "key12": "3jSCpkyKzbK6jzSwWapXGKb4QZpx7BECSDk4cVMppkwrXiPkChCQ23eV2PWzfrbLfRXLLCb2Q7WUYqEqLvwQTgJ7",
  "key13": "5MsKyUENHQozpTZUYxPEAYvYPNYXxZjnafauFpdLdMPYrGzVpWB2ao5St7ihbeTuQjw2AxZVRPuupcxJw4LQWGC3",
  "key14": "4tLgQuSyto6pT9fG1aszhaxTx4aXuf5HqJRxM7i1fDUt2PsDhnU6GXn7dAvdiPuzddVRSaWyqzCuyFAtbgAmp4yy",
  "key15": "eB5k2r4T11PW5gvjRAp2VFgP53U4uZKScCjhspmh2QTe9RZS6SqjsrQRiFcfs6WxA6UivurRNBTRtHhhfFNECy2",
  "key16": "56fx1QJZKE3wUowA4KYEzfJpxe4Dy8FQFkgbUn7RzAJeuChJhNYrJ4x22iFiXA8oNamDcUHeqvpz7Kh6m8QMxe8s",
  "key17": "5R6ovamZZNDMxXsz7Xpe8BirnA5gkWss7JJwjTAYV3XTkj878vRex3EzMoZPTv24ETwzgfsVzif7HFE1U21MbNft",
  "key18": "3yRfEFNBkMa2Ldq9GsY786azstjkhB3ouUcTK8ujT1ABktSYpZQBgwbu3vD3iCA1fZyFfW6ydT4qYnru5MVHNmwk",
  "key19": "2hLZpYGiiGmPfGjVr7Ub2tuM7Yn7sw8MBKouE1b6uKFu23JeZ5ecoMkMoQyUr2N7hSV56Yh1RQsHuBjDuAwKKZmE",
  "key20": "3azsCakTX6RJGXsNUFj3h7vweE9GgAYoPhVqRwc2mnLAX5kCs7668SshH7apxSqPZEkzJEtWYvQywK6iX1NPBbUA",
  "key21": "2z5cShy2a26tihnrP2AA3msW39v567NBTmeBiRka6nrUvc8LukzqgGP28K1FgWVTcX3GZG4d61d7fXLKyNkbWTEG",
  "key22": "5mdbrvJGxVWZfHp82PUqE3BHEM6Q16ddW2k5wFiATCeTPbUf3jXdQErv283AqoayATVEE3D4vwyrhPHAh1PA8qVF",
  "key23": "3LCkWAPGrTbRpjpBYm9E9n2ot1HJopUr96xuk4JWzbfA3TGXtJUWDPkuJAbvQjsLmpWWymoymRoAoRKCZxd9t8cb",
  "key24": "4UkFDXJNr3j2yzgmVvComWNN1FvzXNnKVVKf1dQRpYiFKN4QSLCqLXuraWfkozHJwsc7mxxNC3gn1q7RMRfzRRc4",
  "key25": "3YLXQ4PrdoViirLv8jZhqYjwDLQm9KQ9ZjQqaCqLTdXH4yYPWgdAjRcG7iWxT4ewFUsC7XHLcDmeNBDtEDWCmjfX",
  "key26": "3QN7yGCHmpvYMtFyNNMSWLZGhurDoqQxdK5P6Mh9cP8hr4KyPb6aoainK2G5psy5X45Rn9cbLfekeShpWLNaB4iY",
  "key27": "5Pi85WHUpWXrH1QTBLwsZ7Z25u3WJoapuJPgP7zfwa2p2wjvxW66gAsB3X8KJUbFBxSRTqTaWkHzhhqvdHhefrit",
  "key28": "hyDWnNvKzMqTXvKufESXBdZ5BMiY6zDo5HHc6mrEzMG62vXdBnqzpp5CD7csAZCJJ18ApfMmb7hG4jxpb73d5na",
  "key29": "2cPtbXnC7H6yhjSb7ztJQqnTATWu4b8cNYik46XY9HcJNuvQMSmGJMAsqUk8DsNXacumAcvCyktqyKYPrzKhwKMz",
  "key30": "5Ma3H7Z8NoVC2J52bV9H9N7xpLdyDyqA9g5XoQJqrLRxkc395XUa2LjjeqXdLNb2CihvewfipViYWWp78cfChjGp",
  "key31": "37VkWqvk66HiDmoyGgZTv4Mw66TbtoBY5LgqggWWkovmt4Hdh7mMtTSP4bc7weKxhyYkSUFTaomXPgayirg715BF",
  "key32": "4xs24nkEgoXxAZ2DTmEub8UhWdAZJ8Wr34nVEA59o79iK2nna7Rk2RDtKFUY5EErdL5GMuryFsaeQ8tixo5HA7Lg",
  "key33": "NMsib6pquMar9FL6tWfo31pECCsaoHreFBK9S13Vee9WX7LcrMdTQAL672XZQBLqADL6bEGJaRAGUmJBQKyBJNV",
  "key34": "3JM7Hzzp9cmAp7qQU9S9Nn65ZDaK8LcxAVEKRubKytGKpRKYZB7p2kv8xqeLwkhs12zx2YGzvefqtgMPxcaxwvAK",
  "key35": "2c78HsL9jgCDwvyY6WKgNE4tfMCXBCoRpukMst2zbz13o9isJ9DCD3rfLHAjJjLfeLwi1dx4tHA9gfCQYTkrbymz",
  "key36": "2kF19yjq7K8ExRsYFfP1nJMZuXC2XmScZTX3M9vUWMgXUdkWsWokefNEU5A3TsuYRabYfhRfVmz8xv74SBNLjibq",
  "key37": "3D5E94ng7wKk2VSFh2tpo1Ci4UHr2cCtGXHqjbkEjtEqus2T1GhYR8jV5U1C63L9ize72d75go4soR2KCwqRkv4z",
  "key38": "5NGhxCGrBw7xEcPiMobeTNkcxEZkxeMauWjuZmhsEmxbxSFU7U3JonXu6QM7Eh2Px6SpjZi95iGHPMuvM4mcXy1E",
  "key39": "58K8KXX8hBbn2ekHbtoNUUQGqYyeMDPJ8v9Dw2D3vafcJ2FohmATQgZ9jJktU1XadN6vsj4bPRKr3VDMcNJvJrZF",
  "key40": "9PFGHmjNcR9nxyDX4WNS756omFvpPspZBKk6DnSLWVJUTPVdP4NmcDBpMuqoAsSpuBA7TneoegTmt4AfhpgzPm9",
  "key41": "3zgzJWQXfABCXMftoM2yswRNDcg6Z8yLKBcutu9jwtPedaybMa3ia8wv6KmjnjiYvPhQ7awHMH2jr4UaH3XbSCg2",
  "key42": "9BuK5jXCpUDdAcJ94uNVvZkjcVSEm2AH9gCubcD7QLm4tKpVGJm5KTMiYTZh4ome4UK3w2JLqnUYuCsqWSuCsWy"
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
