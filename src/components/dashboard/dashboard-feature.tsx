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
    "392cTkDeHXSzhwNqZpj9dRxakaWFyioTq7QWXWFx6Y8SqNa87tCMhq7ct9LWw8hcoArN1RaCckeFa5Tu5pTLpXFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nwLA1WNrC5vBzpeznVCAhw3paxKdEk5ErztVEBVLXuUiV2Q7kqBbQrTJhXXoWCkM6qoDCkQsXUNeFKC2yfrRfut",
  "key1": "szk3f82FbMZH8Hm5CojzPbT4FvmLsggeBCgBbdyGMTcU8GdghcqkVVf2YU3WKiFvLs8WrVfnzYVKcf5zcnsfvwZ",
  "key2": "uriRJJJPHEYTbWeBsHovTRiDMj8tntwc8MrbbXmiVjykuim7hxVMYWmqjf4BbbMm5zQPgA4DbLV8yemE3bJBQ9N",
  "key3": "3wLq38xbNacY3Vy1a6xx8SYLeevVuhSKKFPZi6Y8f9R2cTuTLWVBhUG1CpjdTw7L783ng6hzgXqXbY8DiT9PSXeZ",
  "key4": "3zdzYauZu8pj6CBSVxTFqpwKQ8pUmziUAmdUWX3VdFAMJLdaGTKQ8a9twRaYQqsFcm41vY42M9cvQbpw8DZqeCsS",
  "key5": "4mEV2WAh9JyJ7rcG6p4njRDLyzjcd2kVJEA7WQoU1K3juyv8EDTUBQeazo37Vb73xbXTM3ScL1NUs7Wqg38BLMPA",
  "key6": "5ZYop6JnnqW3VGJy6wUh391AHgMNp5mDDG6mZAiBYaLhWNjEjZpYoLQrzwkVB8nHtvhvTYv2iQ94aVHez7MJ4AnT",
  "key7": "3mzkyoetRkNFkSPxVhtgFxR8RyETH7LyLbo1nADA69U64hYMsXYWqrH4qvUFQgrnneDMo3yyJpCQH1MHvac3tSzC",
  "key8": "25gxQ7h2AWnBbZqCLK53DGP5Sz5nE4nm9JpDEnZh19RZ4hELBYAJCJD6MJqxiVBzDuHLyqVhSh1VBBMquuhgm64k",
  "key9": "5LAHjKcm4YiKWgu4JCuDmBD6S4wyeWnkLaHdxpF4FE5Etg1PTofeWGB5vAzqKGZgRPtwP3eWEzXNr3SHJ4uKKhN",
  "key10": "3c5LF6SHT2fQuX52VngVQ52mb1gsF4jx4QX6sCcU41tKE3LXazVqiPwrud8qgrQGy35SHYTMpZfN7789RLKToesE",
  "key11": "4VqM4c6vuFGSEZCysR3ARr39UKbBXdXC3igUphupow8aFYEZMDrRd5iSvYWM31GXCUyVVyhgXMhoSRbbvKaTJ3yQ",
  "key12": "4VjdFcaJx48PVSs8Am4J44Q3VCAMVztkYWgjLLR5j9zSyuPAvS1GuWDESbfguJjB7ptugAh4SsQPMUogspj9fk5Q",
  "key13": "5UXjbKQ7v6UJpxt8BFGLeFPzsQXdosHJLEsabCcqgFp69zDwfY5fkBimNHTdaVo3Y4Wo8xzvoZag9xFGq5i29Hfh",
  "key14": "3NZEiUjn4X85PSUz6Cx2J7vHNi52ti8tZ5ttAw8wG8cdmy2hUv14rpwDfGYPpjft4CFbqT3u43rvBRJt7yapXEx6",
  "key15": "yoPVofcsr8Aa97PJEWjTyFcifZVT7C9y2fHBF5gRz9uTgUzMNWGc4DkHCvQWLpHZCP1xEzZe6xfCH1XjQZN75EM",
  "key16": "5bagFuwPEZwUCyYJ2SMMEDTBAw32pihFc2YyqTnEJVC8ufNYg8cuRnvnaAFe7NqphiRViarqHNZe6tBfznE3jPsz",
  "key17": "2osJgLP4QzHaiQWnEjt4yzkw8qtLvKeXwJkbmLLnbTrn3ug9qhRhBSJrMvX6yBp7BnkVfsQnNP3ktVb9zwePsTUC",
  "key18": "4kVNmGPH1gAFnu5YMiwHmVnfU1EZ3wZVmKieMTthP3TBj23Gb9y4ViVcn9V6zPCZEzhDdcGYX2pJcgTNGjWTv9J3",
  "key19": "23HeQwvTzC4eF71XRdxQ8fsFEgw6uG6TwDRccqG8oonPjXHN14oUZL6VCAajNZYgHoY8eMwijJ1xdGCZhGBjWY6D",
  "key20": "3AEMGhLtAEqAshhgvoj32X5UkKjqYrtJiw9YvMGhnbKkxjrsVfmiAVje8sJ5CwKnHCRwSbhDUHT5c8fVrJ89Amtk",
  "key21": "ZkeYjAjwd1GXdApB8txJbr4PPkqajmPsDbg8JU8TDLZyqoqponDK2QdZNEy288quBZgHFF7bwZMSEYAYBCcm4uy",
  "key22": "47n19KtHmConbofYHzhZxwCDkEGbnkwGUoVzNrHuX2TPxJedzV4ZpXkrx4uDBXteqd5PguudU5EVoEVpv3p9RhWH",
  "key23": "c3rk4aZP9sdDRiR89m73v4JvYC2Mj3pA5fjbyeQTYMXSJtZCt7Vxbcdru16LPEWnbfwDMBMcoyyX7osWULYCrCa",
  "key24": "1FLCWQuPgLEwiBLGHM1WLetoMi7Sg2AvKcbu5tZ4ZBmRRNfiw5MLYs8osMkPY1hTDeovsQ585UzGHBMNT6UAfim",
  "key25": "5Sf5wydZiQ8F8ErFgoCbHGZ1ZssmCA6kfex1pcnzH8Exr34JawjK3kegHkWyNuUHstMrmqXhFjk1oN5igSeFmRKZ",
  "key26": "3CQmw8BiE3enSu4rQCjqn4h3fwh3XQr5uNT2xhQUdMdz2TwzLdVC9nzrEx6suq4FJ83jA3G2dA6SP4tey894XYgq",
  "key27": "3XbJwQjiLPTKruy8PnvZsbbZtMmXZxVQbPvzvuxjVoWwJFbGQkTWsqj3zT7ZXRK3i9M5C1x3DcMJf8YUwuHJ9Sa2",
  "key28": "243ErFfF83rJdnJ6ytBJGwKjpJyHaxHJXqyA8ZirXTYK5RJxVHLtViY5RyjRJqQCZ44TYTN9UQ7NTKcce8oLfpnw",
  "key29": "4aksEvo8hg7bdd4MMuQbnohgw287XdEfkBJF9KpdSMQhbgQfKkqrx7vWLzZTRm9PcnCUEHQZRTjkRtgXMwXDJEZV",
  "key30": "5gApJJKhpQmJkxdwwqEZ6APxcZvQtGCsbyEStJf6dja4ih1rJaWbo9wTEqcjQNfnQfoVsz6dH6J2wsQa4JiabjHz",
  "key31": "Hhd3VceCqkKmLGBm6YM3a7NsWYHvuNRHkDivrgfDU8V7G5iMAozK7raYaGvAV1nAZRHm4n8k9ywxVh1MrmftAQK",
  "key32": "4RqVFC6qx9KVZaR6VQbuUe9hABdzDoTu5QzSEX4QSCtono1ZntADsCcBUoVNP1dau9uyVP8pDVks2cb88ddAZ4NY",
  "key33": "35y8vh1YXpuGTAtcTbLQBFVDnP9VX43wvUcbCaZQ6jetDKumP8uYYE7WnBeWkT3vN4jkw5wLFDtL75jacY4iFtwR",
  "key34": "4xwcxyR6oqSn2ebu9pWXVK5ZsStUN19MZsEvJ6tKZUZxPg36jxzrnqi4oNDAqxfkhAs1Gq9jhgT8RxjJVbmmPP9y",
  "key35": "2BdfoCMxs5gAzN79d3m2oR3Uz8L8nZtfwSJvsGHuUQ8SHCNXRwDT7rDE2d8FswKavdXMnTZvZa3cuzb2TEuyqh1Z",
  "key36": "4kAv7GqT991eV83uVJtgsnovZSW1sFQmFpAoqokkoDmJnQjRfR7SJtNATyMoT8Kt45FqKnutVLNi2Ucx78NixEkL",
  "key37": "3etpj2EFSv1JmTW6sdXYxqk32zcjjSYKYPPp9wwJqmbRxESrihhK1io7RBpkvcH2SuoqWPwTNTLDF89zAD7ajCN",
  "key38": "4Zn6V25oDQWwVf8jHWU3auBCMnf4bnRgLhnhvbteJspPCn9Ysz2ToPpYCCEeRADePYAovmkjdAskLeUQWr5DrznC",
  "key39": "5FgmrMhQtQYAZXZfxSGUM3mEMff9Fyjs7Kombv7syTZ9wqaZBiwYhXufPCMDixEAgrh8Ddhix2rhvZzNff8iqhRT",
  "key40": "3WwM1o49VhbqM4P3MZfdmHHFadirzxsrnjcoZxJ8Ut8g2PhrdNqmmsdM2sTPWufrmheZxGrzbCyhZBJmV1vHAGUS",
  "key41": "4B7zjCPbpyLQvUjDXVUiwrRTcrLbtaAYV8Zm3tRV4kd7hfVycRf43QWyso3us6VcaSHWY79UZo9Mii72zawp1EaY",
  "key42": "FrTMnjwzwtQVXnc1TxLXTpah5hejG1KV2HE2ddN1Cgz1tmRVEzuVJpiydDbVARM8GrYwsivNLcAQbLhmx1Wt2Mp",
  "key43": "4wUarKaAvQG7JBgj3jzRdJnoizsPgdfLqXNTBhm52VyciW4HNFdEQfBvr452RJteqfzvbD7Np3j1bKbnVCdUiJPH",
  "key44": "5Q7RWaqguGsXVFE9AGBLWNWxfLLgDEvTSEDXzn7r2XQ2GCmtArpcPFf7NhaU9uNpsmCmvaaQanPcCYu96uTBX55Y",
  "key45": "36nK5LfotuuFShKDxDozL7HaDFoXpJnjPdAMot8Rz58RDjc2fJbHW6s8kaZeY32hvMUnYZLk5s2svUugiYUoBjW6",
  "key46": "3ZGD72Pz38hkYt2RLAaGqD3DwxZTasfRVAWBuitb7dpLTaCZuGE3at6N2QYdMRiUZMZETv2pTBcmjeHoAJoCumsj",
  "key47": "4VBLva3iBfNzDwaBBWbw39ouXV3ir1uQfC1tNpyriVTxMgyv8hqTejiVXHvKPLYwVk2NscnRivLtb51YJtZJiV8d",
  "key48": "4VPobt6BJkNMZJD8TZgLupnv1UkQgbb1wqYsyBPwkouFDNWWWKJudK8eV2iLTLBGKm4UvZtk1Kv24nz9jJ4PBfcy",
  "key49": "5kwPWiQk4eWAe3x25QnARQUgjvWnykgHb4RdzLQnznRCKtV72ZTTkSk4LJi5wf9eUqT8taCNyoFyregAN2obhkoY"
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
