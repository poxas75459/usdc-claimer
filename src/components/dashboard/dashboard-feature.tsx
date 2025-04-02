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
    "3vLZp2DbmGCCqzfUY2dtoXbaTxb7tmmP99jqbUrTH6JjD5NL3Wu2bDaF79hTUoGepYdQ7qjAPTqmiiDbwwVCgyWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQyzoj8JazwJGuAj7zdzhwGb71GNZzWesVvDEtP7Y5LSPDA86ExU4hLvSBFjsnhjeiekrDca3gK3fmVQrNditYs",
  "key1": "4YpXBTJtp9LHvvsHeHAsDLkNd87BPCuSgEwUme9Jw5ccRphLVM57WAXk98eZBt4dtfgXgT9f4159NWsGSWGN36BA",
  "key2": "2fVFadoKZirxzUQi26Yfac8kn3Eg4YKjh6SMr5Vj7ZZGwfzuYo3Bnux1S666xSHqTPK1SCNvy5nQQFEnBfQ6epff",
  "key3": "51AbyyPiM7NRYJaThwYAedQZJyJ4NqZ5uMuPMrXgGskJAh731Fy7ns4123TiHah7j1PrmReHdfM4J91i9vz6Rjvy",
  "key4": "2wyTsvq3BRmfRgYpSKGo3v45nwZN4oKe84ikjqq2QoG7X6R7aPPuLjS7yx1CgHVtDxtxumXmfccnQvGvVAHhQTsL",
  "key5": "5Ryc2dqnHj8ppJLbLxcgwDuQdEQSjgLeQHF4vnU1RA8Yj9x2QFjL8QLXPbUgHuvJNA9ppASiNAyxRmV5L4bL22Wc",
  "key6": "aaCH8yKkngmeNqEuatmdyDfqQZSU9jrm8nbnSHX71ytP6McrauoGH31sotZqaUSJXrzZpoLtYtLvX2jjL36BqfZ",
  "key7": "4ZZdcRkJ4TUiSBppkJnrrQPw2YeiV7WfhympyJyC587qvLg1zUvScVg5x8jKR7GUEerAS1XcckA8j1Rb21HSD5g4",
  "key8": "5vbCWT5Mxq31kYDrm4jjVe9nUPP9oNwEH7Ci2MgNd8XLaVeHuoWCUMN19rLzdeayR3kaVn5rNaQEdHqArANhCbkz",
  "key9": "2ouXDMz3ehr17WGP4rSnzdf1nmM5PMSCQdo7g3HJc7QYeu54aqXwwYFsV5oWpLgUAwc9NQUEVAngtbZsAt6uoiX3",
  "key10": "5NUkzTPGL566aoWZoMdj8wXRCibVEYSupTCwr2GuMHVwMcqGS6qdeYTVhDbeUxF63SMoi8zRym4C4vqhbEDVvU87",
  "key11": "4h6U5wkCxUR6SeK48Ue5L8GgBYWriM2og4r2mBZQFt5tg5t5D9qc7cqyFE6nGiNpjGV7p2umz432DGqry5XuU1Zn",
  "key12": "3rcfLzWttDDEDKb2dE6m7r2QEFtWPTbPCqYU9F4jPpiNXQmWV4G2AJsLs38pPaKFNkF1s8k9doWBpc53DyxnBkSk",
  "key13": "24xED1rhwYMo3L1xfSt285SH6EMXvHiVXWsevke1EmKA12CTALGSX7s3rmG8NPQSBFCmv2CVLSC7Nzw8E21Ae6Z5",
  "key14": "5GwCA6yYTbVFGZcQjUgEovHdZLXawMkMGJeNDmZhwCz6XCAjGY81XT31GjWZBoBFvDobPuutaEWiykKdwdGwNTwP",
  "key15": "2nZa5QMpXQgmQhqZwMCZrHdMzazozDTRBT3ekn2WE7bHXPMaf1Gj91LmSk1X8mD6dbmMsE82GkwM5f5bekN267Ze",
  "key16": "3CtgQz9E3vFcmKkc1Hi62VFj9MmpzbH2srQuNRtwar2LaBLZZ4G1e2uojSgUjkxt82XMrAQwR1A9eDwPiec1Xc53",
  "key17": "5ceWMtXFZxybpgB2y3zSvLZ8TKsh6ipYejLdmybbzQikBU6FgvdDugpVPASB7Ynp38R2t9iCR1uSdYUQhcjAW3JY",
  "key18": "46s5Niydd3rFhG9HZ7aKHohPXyjQpH6cCPm18QeHazhEpRB4JjP9PkpWaM5RgdeJdbK9ip2CMwNDc1tbg48y54yk",
  "key19": "3QDFCH1rLhFVp5RY13kJPg5ghqCmxG4nMNoGrpLdDocXrxvX7aAKKg4tvXtg57A9Q5ZJmFuugq8BZZ1s7Qpi7cjn",
  "key20": "5pCEJ9KphWQqLy5DNqQupboh899t8gVdaJCq3jkKyWcPXgtGGXB68Ai9ZwNZP7edE7Bp3j5jbisiYQYwPN4BJRtT",
  "key21": "37yzSxWBjFvKmG4tpi7jyj7Li8hsHErkJUEs9hkbBT7KYtwkqbJ9FWLsVdxSXbK9uS7LXaSaa3hUKDZjeZKVQqGb",
  "key22": "fUuaoejDcihbui7igAwrJVSqvv6dJe8rGq2FYhUGNcjaLxdVnkvzUmBWWHPFwYWQNZATFiLqLqSuudYFcNmw3mG",
  "key23": "2Nbx2hmo4ESSprRQXEDwPG2HfdyXzGQb3G3kUPxAoAAJtqAud4MCLLnr6XQkXSaz28s9zWBvVkzhfxCmGwfTNoVH",
  "key24": "cJbt6LDcEqDuS1nUPBvPm6B1U5AZCLoQ8Vs8WevMPQRpFejsBTsWMn569q66kwgSQBqVGWNoM1kmetzVStt63nZ",
  "key25": "2UKoWDaWfDecFYpQPy65VUazdKUNwVGvKuKm9jK9GFNdL1Koe9USBMvA8AhdQ9L5yG5t8EQE6CSbY2ofsk1g54gr",
  "key26": "up41iz6CCPhzs8JwFa5gycH1mnAidYeZtw8b6tdZK2uh3TFnyp5JKtQMLfaMq6tD7BUcSyMKSp9PZh1AKcrsPSb",
  "key27": "4QGXrabymf35HMFzFT2cMTZambWKn3N5ZeX3N2tbCJYh943dGJQSAChLGjDPU1JWVF57Q9AzvyRYWz9pam9NNHnV",
  "key28": "59m2PiitFHmCq5BNswND3MiUvdYAnbZCyuVsav6qNWqLtuEGCkFSEeJCMkco56WWXbovPdwdcUnesUDpu1o7UmRB",
  "key29": "2F98dGodaX2RREeGhjsCEmaZerbmznbPJigJxRneoDPCXPRvkMNqZuvH1v6ZfFaXYtedzazqoCdVL7G943KK7esH",
  "key30": "2sWctNQzukgfaKxqvQDFbhH3X1n76bRN241ZujRHgcCR6R9a7Uh9NtdutSCDT4Pc95PwuvdmbcbeLdKWai3CENVq",
  "key31": "xzJphgKAR8p1c7ZjGysSKbwncE94FGJw3Ku21oMDn9Rz58zqW5iaVAGRKD5i31Am2yh11A2Jc9Xk3QYM5NkMb4c",
  "key32": "5EaiRjEnzXyhe2xnUVSYm7Y6JbQSbD7WnscSxAJzkjpJqwo8aaKFsB6S3Y9UqgvZ6kKqNR8dpPJ7ym1nw6u5dcJz",
  "key33": "GbKpL3aq4oXamXMoSPobnPPEpKirrCZwkZNYJk3CrtwP5Z1RDRWAmPdGyoXbnmEQDVhkUv3gkE7jpej9DFFutpg",
  "key34": "3BQHGHVZZu1RjAexJaN1j2PAw2cpG8jmovLfg5nbVvyNRYyof8jT5fCk46MwTUcAGtcyxNTWRnGpp7CuADknkx91",
  "key35": "4Ynna4guxGqYxTkmWtWp45aPcwkKxcppNn2Ffu3wipoJJva6ohBEhJXjdzZGhp3sgM1KAGFWx3nZTktgAPQto7bP",
  "key36": "5GUeCkoxu56GP4aQC3edSB2EiRodrYxmkxy4g12wPXdrVaizJ8GXiRSb6382BPvnNro4DX5iQN28rJsGg5qrd8pn",
  "key37": "2qpAoXZEFXY3EhJ2ccizSWkUdSppNauHaNrtvhSVfRdUK4N1A54fFsPBSNr1va8yPHHx49RSpJUQ2W2QH7h3qJQa",
  "key38": "55gpvmVaa6MUxJrTzDCKb1cx2g81aiTrbfrQCgc3d72ceHgYybmxidkbqkphbV9hCdJukYwAGDXqdcbxQ3LjuVbh",
  "key39": "3JM1m56ZHMxmbvxXkaREBB11G9kRumaT4SSKATo5x2CAvk8eNasMtMm9Wv1MfhVmmxnYeKBHdfZuSXa89nfACsBJ",
  "key40": "B4JYP2cQuePD1CzTkKzQK8Z6LkadMdrqwmnpEuoJCE9ujhkokNGv2wMhCH7BvnKbGzS5LUGYZqs89sVPgkYnJwx",
  "key41": "2A8LU2Uu8QwTjWps8jxt3K774B9we923JNq9QNfupTXurM9w8xakNRdmkPcfFAMvSifzhSKzEBr8oxCp8U77VnQv",
  "key42": "64GJfYLwMJ4Z3BRz9AAne94aK34kWw6Ks9TNZ9ETDgQC3q1k6vSR7oZ8G6aDgqcMuHyW5i1G4eDuaNkK24LJMkks",
  "key43": "2KUpXnWZSsRx5YspjdbF9CjR8uUik8V13kGzgiDYgCQzyPoinhf19kh3P9FbcTiuVYe3AUEo3YXo8Lc6pBKExv7R",
  "key44": "sJ5sC2kBzY7B1PaieY47iwPuJpN1BNWuqZB5iwc5PTf7bxfB2Gp95dC62nAuG4ARPjN2U8kGPYnMf3FvqUuQLcn",
  "key45": "QMxKExQ9b3fZjd5tQrHTQBCxUQ1dTJh6BqHJfypQzieZv36Crvzsdu1k8LfEJkSEQ2ZHsJvuisRA8M44KTyCvBD",
  "key46": "Euf4hjqob3FsAetjNKGmcEqZ3jHLCHSVTrdBSq7LmsUg2v65vgWgGVabdVZTcfvd8WnjUV3TMxeAmCefX7c7w7y",
  "key47": "1ciwgPyBufxzHaT3eBVB9qt9XZN5x3pzGVaXbeYdRuacpThooqwZjetF5tnKykq9csKMPnKzKxQNXiAzq2VzfNe"
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
