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
    "9mpJwH2M6cRa56ZeY29So23R7D9UqHkvHEjfzHakHaWzDorYZvHyBWgnoZvzVyzmezJQPFhiugiRYyPuy3zzP7t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uGKLHWAsmCk7SjFTkvQXMS72STB18Upc2UWj6fSxNxgb6suBZjd9iAD6EnuSqrjwxZeGD2PdSQbaQqxMbU1eHyN",
  "key1": "3bqRwouBTkZTLVrWQKd2MMxjQxo7AHpCeTKsMdBxQrKNhnXcKwrRfCdFicF8W3cZkAQq2yGVSaYKpDZjugLUG68e",
  "key2": "51jKYNJkkdavM8CpszADA9G877q4o95NTS7N2Me7H8WBS5t64CGLQMxqKrGr1iGBA1cdSMsHG8Cy4oc8V3uNwJhU",
  "key3": "3jP43gpshPiNM3aDXuNod5bSU2EKUFYPZRpq9V7jPSshZvVj88cH6Bhc6NxFku51re1T476K146jH7XfrbKZ2Ufd",
  "key4": "592QPsmK9XpjyMqKX9LxDWp4ENLqjP5yzSXAVJ9UpbRXSzdBBDbhb4zwkpWi2BX4cUgKEU1f6wegCeR2vUuSVafq",
  "key5": "4NAfDyyuhSwjuZhtGsf76px43ta6cLsLDtcdpkoRSk5v9CQbRbnP7hfhqANeVtJ1Tbun2pJobjnrh4ucbarSrJ6S",
  "key6": "5S1EUWHk3LBs6tXA3hgB1SGVBmqLEMzxZggMQQedwURBV9WSCiY4KNb4cNFgnK5NGdEwSXyxQFvpjBqS4i6fEHEj",
  "key7": "5dbNSk5LeUnniB2WfU9oa3ztT8FgNqP1jiQ86HomEGpxvR7KMrbFZGMH5vnuYi6r6pLDugLKS1TtqurtwThAcY1Q",
  "key8": "4cTULAzU1aUF3AS9dbVkbPtZA17Lbm5H6eMjCoQASRcdMz8MihRF3Cg6RzZC8N3Tpztt5ADearv641ow517QoYKw",
  "key9": "4gBZSKsTWjefkHmbr2NL9JiS5UQGmJPycpeppkssjLU8yZBZLSwSXHYoNzMnVr95jvnt3NQuzRfN3NbxcWDL2AR5",
  "key10": "4XEw7BiQWmngH8Nn9xBheHhkgAHsry5XrUoGNX4JxDqefhkyD12NjtScg6YYSuUPZokmRCssAPnQS1y6vSR6tpm4",
  "key11": "4Tr58wmD2juNpJHAtin4F31g8tgPbN8DvmHbGUHSwdQ5zJrsfQc4VqyFqxbkdaVvsFG7cL5ZQkjdoNhcLu9z9xcX",
  "key12": "3GfyHA3TZ5Bpm8ZHDntEBijNJ5n7J3CNod91qdbqcMwmwWTvUpzg9znNWaACt6LtubvCSJYd4Et6Tcqj85VYhAss",
  "key13": "3bvFUdgqnAqebXM94qebTTnbkctBCxQER3Sdf2JP8wyvbv7ajcAbTKUpXUGx5mxzmedLaRMR35vNSZwAmkBCN9k3",
  "key14": "4GjB3Uyco2NuszuiTX6Zn6FVF7t7pbJ7eHuTnP1xUD94wXjo8B3uK7S1oegcxjoZrcaTNe9VCUDxuRPnuUXcQHUg",
  "key15": "4uTn1ah4kaPw27WKog57hvN7rgcqejVmC2NzbDtbTmEkpABL4AWRsxjdwcJtfC4ENwmhirpDuDkpdaX2AjLs8oy4",
  "key16": "5F2mTcJ44vY8w8oUUjTKP3GkgqxY5M5RBmjLAnSfN79RR2tTcCytKcft73B9PUGRShPYnASYamVjNQxcsx1kjoZi",
  "key17": "4XcPuqtxFMDTvw3WuNnsmmvyman38BMoeNRtdXZ7Qp4RLVToYVHcCaGLJvhkbAoffq4V6wEKv8H4oNoAQwjcahs6",
  "key18": "zaebysNxoV1Vv6NGe8Ex5z5rL6DvnZhap7yEGr6RMgeH7LHX9F4sWZXYshWTZUzxiNL9T4iGxu6zK8cPPxoVg13",
  "key19": "3P9SEbZz4p9jWrKrNJXjo5MvahzMmM6bYiYKTQGGgNp4q3J7iz79VVHahBKpFLerBVtKFutZH53QVNvaECqiy3mh",
  "key20": "3LituRhPp9m1cK6azXCz5aHQ3P5MG32rcuEHG6rizEuu3G88QnscNS2hCHVQRzVAbNttEmCBYeSfSm5DPyqgCnar",
  "key21": "LB68BJ4VdjqE1wpsXsa6w5YhF8hF4agcuN7inqxmnFiw4znoXWaCWHRKQGUCXbg8jBvpWvfpA9k1khw41Hug7qa",
  "key22": "4QrM9beZuYSUALrdUuXWYj4hVsg2k7KuMjPjUfssZGGFbvHtvyQMobcSCKWM82tUPQwxDeRubQNuAdti7xW76G4G",
  "key23": "FxwyTcoLFXtN1khCmCec5JgdS5h8q1t8XcNKiw7gq3ZQFbHgbaLW32LvjvkLfHCeGYa6WCUuL5fLJuYS5Ts8rbi",
  "key24": "2mippWk5sefKaY1atPAv3q2aP6FP41BSm42RuH7aXws79ZjGwSdTMegCLPYPwTgByH6nyE4rWqAnWYH1TTjbYxSn",
  "key25": "2LsEaerH7bNFyqydNZpufyKHDt79ek5duSuW82J9oGLaqK3Lckxe5Rf5XA12E49GqvAriePafjy1i1DJYJiMjkQ4",
  "key26": "3Q1rVJrvFfeHpkWdHJZ3HgtmRb1vVfpzjK1B47Yp2Q8DS4JAATrLf4qaTQNwLPEQoCB4TdjDCMScvndZEEtBTTDc",
  "key27": "3q7w8ZwJmYNH4zHY8LHAsDWKjekFNzEq2gyYa4MppkQDjucQKxB9p5b6L8RnrDR7ua9Sizo2J3zYj161f6MhnqoE",
  "key28": "ZEfd8VMCJRrJp5SECWtDwSepEGyhiPMbmPFAJf72sEYUpLZYhjmPqk69QNarYxbjm6SCL5GLd6NpFUiULbARSHL",
  "key29": "2CKGtNYuEX7WeFp7eVjAhfogcBM4ZnMPGhbkgNeTV9DsKefzD4BT7CGGyyb7WBqoiNhMKYLnxbqsHMciuo4FDWgu",
  "key30": "JgK97MGhquJXPbwKDT7hYkGkKziNb6nVN7PrCdcK9Sb6uL8KXNwD3fkEu2fhiFZoWKi7ootoFcXpTSM2xqt2Dfj",
  "key31": "4GQy4JeVGN3iB7FUZNqbcQZkDu1x4a3WQE2n4hPGUDwsc2hbWAuSXkp98oRe3uN97CE25VpS134zbjTYLVT6EctG",
  "key32": "3uKcDFhwwRHGHUMRihfoAKeMocroGpwYXhjY2cFGU93HmsyooSg2ZCHQLpB5xX3G9Cect7aWxNWXkqCih9j2hoVw",
  "key33": "5LjqKbHjqBYWmtkkjY1y9EdmttaB2uUMmmrH97zrXPAC1f5kkYf5M9E56vUBXEaXvnbCUg3yxwdXsWcvNyj96bb4",
  "key34": "5GJzhXZvDEasiuQ5Akz122EwwipPokRTEu9ML9ujhkthx1NX9R3Kdzhtro4XkXbD7gvfUg4Kpq3WmeSc9LEHgU5d",
  "key35": "3aWacL9yth72n8xY88VGgbocCKXCFRuNp6CAuS4McwcjmkAeQU9o6kXL5gagEQy1grpQigiR1fCEZeusKC5xEevC",
  "key36": "2QBv6GoPbDE2S2Y2bFwb7u7sZwVAxHRAopSaCjmWcZCG9QgJRSbZJwbDKBszBnMVpUvMxLD7kYvUg79is23g7vhh",
  "key37": "5gGQdLyjhJUmhmy94jnbBrdftT4GWNJGzasfd4eUgsGuLqEUjr2upxNqVREm7qMgNfhZZmufZ4HeL3iVweKMJYdU",
  "key38": "5tkGyAoohG9H1y4mXjfN6eVtS9FCPMiciGHS8CG51YxfQrCUWXrCyvyUFVedQtDrBnQmNsURVkumygh8NRf6s9gY",
  "key39": "3Sb1zkA1zqezJGVecgcSxRMhksDxFJGohLTStiFR4UwwcXj6o5k7kZnTLPfnR2U4F74oDomWCXzUSF4LezWxWFSk",
  "key40": "4QQTfGX9Esg232h3WdAK4an4QWx8KKvHQy2D6Zbb5m1UecxQpBSUFX3bDu76ZVPhnrSf72nKyaq7bK5XMihCTBbN",
  "key41": "2L6NEEmuE5xUEvi98Ry13q4JfvYY4QbcbdkZNpY2eSYMajMwdFFxyavUXc9x1oq64MxAk4WC1uHR1pYESrdpCqjT",
  "key42": "5Ara5sMktqpGJFCCeRPQQrSPzRkJJZa5uRE8JJ7aXJjBiquwh2hqReDCsCMohqBwn8faz6TxD2cz1rkFWFLhT1bs",
  "key43": "21qr7iXQHeJ9t4izHWAipL3vqahxgGC69R32QFXHRngg1GxP46PZs1GY9gfo9pJ3iCLyv1Apbtdoaoj3GpVaQxYJ",
  "key44": "4nWjaD93tJFbmtPML6y252UDXC2oCVeXAt8zP3nUqBVx2j842XKRUSAZ36de5rcncaoSBmvw4yaXFZMfNUfsnrLM"
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
