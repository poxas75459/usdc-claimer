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
    "5ztSrAyk1aBkK1riNxu5YYESc2HpabXy2zEmjFP4qNVj9BMNYRyWNhp2x4Z8GmLJraKz2TzAQbLJ2hcy7y8DnFcT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3st97wUWuExeTHLBRPjbvwupAWcNX14xi4rZXm9GVWLp2VTWmvduG6XucfjkMPXQ7Bf5kAXNmMrHPE3JdLT8qbpP",
  "key1": "2BghPgifG2fXJzQErPauMs14YPbHdZSkto441RscFdCpSdhfv13EjTt92jw6SfoTcEHCwq4bEaG6DLJK1kGcV489",
  "key2": "wkt4d2B3M7vAHATFE7Z8g9wPvefvJRCS8qYK1KmimHKGqh87hMqcMpmLBSNaLqDCWmGMKZRmwk8k3L6kQyn2Gkg",
  "key3": "4wM2zzSMBe1b44FzaztLyVPNbw2iEUwE1GR1XwobymZSy9EkGMATniASFvY7LdDvAXrKHJEA23Rnve6mC3ubWEa6",
  "key4": "2E7yCAywXUdGbHHGkMKkzhC3zR3LatNDMM5q13pXE1mgKVS12dncx2Gh8YiBRzFWeZTXhyv4jJy3XW4TniaFYGaG",
  "key5": "xTXDtJN19pMEzCJXUgAqZPyE9J2roMa1XE8k2QHRpHsFDVe4ZBYCqJsiKQKhqSgBpa24B5vQfjVFFhKoQ9QdHmg",
  "key6": "26rYtURtXaT7Aq5sbLfPiW2e9wusgN5EcyTytotFEeHnDq5rLWUCboBvbhhm5xUcVS3TWYkfQMFq5YMpLbNxSRSC",
  "key7": "4f7XCuF2hTX2DcXSGocp95iJSbNJ3HnV5ZAbZgWZGPmgobfci4qk3uW4UrqYS9UeogKKXK4fWSggaVP6VZ5zfGQJ",
  "key8": "3XcC4smuJktFTmrbsUdWYkZxVKjSqnbTDTrSqznJN9czfRDcBCHipqe2SddHcu95yRfiqWecSBb8cKCRsFg93Z1G",
  "key9": "25pfFucxGuV5JuNkLaoXpBDa3m6aDxEaJJQt7V19RkNYYVRzV6wfe4dCpZfkfd3CsJMQuUMiPSSuuxTto6CQEREM",
  "key10": "pvqx8hedGtEWmQfVkx5aGtEL1f1n28UeKLiX4DrFuEUVR74CE2Jj5CnGFTcnHctH7o1EkCMtQTbUfy8XrxRSZiB",
  "key11": "5yDhdHb53y6RgVdycjcrDFSx14qQz7nncjNrnH8KfnVpg5hHi4eR9rg2Qp2NUkYAyQH95X4UMtSUgUt4uUM5dfVL",
  "key12": "42tVfmEt9E8BL1muZWR2yAtTnniLhcVsRJzWqb8wuDTEnsD1S4n575jQKuhf6kwdou1p1DAEpjz11KX1aNnD7y4y",
  "key13": "5qtn435nFikvQ9vXuL6jFYUj7ToaFbDy8gmV2b1fcokyb67EvH4fxV8Ui6f2VJnoVxTLts7CpUUHeG9g8Ay8MUK6",
  "key14": "32SQb4xDAXcqNoy5TEFyvPQt4ZCAWd7gjwUhgDfdSFzT8qyx9ts14t54JArrfrF6JzzCQuGqtTMfAdDKm6nZZDX5",
  "key15": "67abg7boEtTfxsC1QWDqkgkHjKF2Yr7RmaDBzqMreixGCmon1DemHcusCBv3U69xhNNe25ZiEk3tesx9zcXw8V1d",
  "key16": "2FpDuBbQX7LUAZJDpp4CPTX4cxZdmf926z6vZnJWR7BtVMyaPjL4WgiXt6B5yeXToeqfjdW24aEdwJSRZMmSrFxo",
  "key17": "5NEgjikwh8MoxBefeh99mG3kVPLzpmMRuronif5HBsesUcVtoKotN7AwsYXKJGYNeMrF6yhXTpE9jE2dBCZD9bSx",
  "key18": "43BJLAGg3pkjJURg8wpN9uG6qqteCWm7VWeRZ7PmiVsVg6YkPzYjZ27PhjLWZXFWm1aNaVPMenSFCQrUoZ3Xr8nL",
  "key19": "31bxkcuYyYVzkMMpCac1MqNYW46qitqDcDJw1TzNjxNQkj1XSHBYRsA7JTH7xJ1m2MLL27TmxRJUDgE5NBQbTEhx",
  "key20": "49jaqQHPmmhDarM3xKSGbT8VsRMg23yDkSvfdrdc8XUU4v6fjgSgnb1MhC5ZRf7SN1LM4wsqe6aGiJ1d5zTfYVU3",
  "key21": "5gohjghvysWyz3FiiXK3oh5MpDkHz4j8E1UZKbUDmjLZVWtoNkivYfivcLU22chwvrNqddEs2ekX5US7i9nsa3MY",
  "key22": "4j8jWkkA8EUsgykGtpB8moXAseCyMCCyoPXB2Gjb1UiV9k1NoC3XeNsZaCBfJosaVdnuq8KJp9un9MX6ak2xDudH",
  "key23": "4MChhaL4VXzi1C9yn7SeSSVeE4yNtNGNBvFCdDcGhiKkxLdRwSEoPvgQEnhioDyfHFHwgwynCniK9tg1Do3S4yEQ",
  "key24": "3SoZUu5vYuiZmBcnsfEoXb1MeqdszccBnBCTDsf3NWjEi85c4XTZyUac9qyo2SoD9XND7BX1Cr3TyJwCXS3nywh4",
  "key25": "4fMY9GLuUL8rU8qY8i4VYoDX8kEEDTLTuxiBAWRvWyVMA9EQuANWEufktR5EWKWzhSF5kso4LuaZRqEGa7Go4Fon",
  "key26": "659SZM2huiqiSwpFxaVJArgK2ueKPgWkfeoTrTnAcuSZLPMWzBCdVVqm259EJ79xE8oMPi9E6MPkxye48wB3eiRg",
  "key27": "5JngCv15ZkLz8HAHDjKSLA8RdaogvaVNVg7dMhSdqfURjPG7WDjkUaMNgQKuL112h4NqgvRhdCTRfYcxQDk6755j",
  "key28": "2tgGAMeA1HrmEBnLNZAXANGYqTtnj12phVVmvc5WsGa2EgUu67CJzAKUyvGUYahS3zHPdHvxX2R6RKdrVERuy6p9",
  "key29": "57rAYgdNnNVDYXwRZcpaHwKwcH1uZsvJmQUHiE7GKquDBpzoXuanfUB2PRWpByh3aFzhmwQkraTZLZBLpGiNJNbS",
  "key30": "579FTpzJrKp2BDm6VxECz8gKqKS3pUDgwW7tmghYZvjkhXT4XRsLmn4ouyF8dmxsVUgeASTy9tndg1cSHwact9PN",
  "key31": "22BDmzShEVmNSkKLgz1W2AzhtWpWEFFQ51ypMKmMavbc4DXtRTrFfVcP1ZPWXAP4DZA1NvpjVrBWtqMYnV8khgRC",
  "key32": "21kqsE8JaZ8jTx3gzDHCYuy6kLrbJDFR5myoEhgZgF8hakAPD2jRwbdz5WRDvsBHi1D7TduZFSgJ7EQnUuGUiWSc",
  "key33": "4HMHpRXuzVSfPg1zQZ64HVxm7oUh3pFrC3StfYBnoJAdmSV8kfs4yZKToarDPQLaXiQwCn2eXJMUffb1zxBpyJF8",
  "key34": "3CMzxFhKYqqAxC8h3iecVtQgMyR3JD9TmNXQHnzGuomNae3Vkcz7zPSetyf6YVc4dYz3Qga7g5znT5FDTzwGhNVZ",
  "key35": "5AMiPazsNWVG9t2ibiJBwFEG4U3imosWGCcPt1r6gXCNtY7EnfGdZtZftPHpyp4QZMG5kghBoL2VkWB7da8DP1q3",
  "key36": "5VTk1RbvMxtxW7LzcsiKnNy4t5m4t64opcDX7zUJ98mAtHjqg2QeHnnS51BxoXqFQgRmzCMA8Sqfgc1FJufXKzoa",
  "key37": "5MyyLG7TzcBoThE24gZLmkUWFu4xmUvGs89jxaLsqPnPEQZtjXshdqECkDw3uGrxJkVLXbFcDHV6XiHBqm4AVgdQ",
  "key38": "5AJ9Qyab6SyHnuXMaK5AHhxy1wN3HbcGYpcG8jdowXJVT1usGH4PB7n7kNh2Tf6PRYkdDHYHLuQKcEfiDxLPxxBV",
  "key39": "2cKbnesDWGXDfbd4unY2cFJ8UFNbpNq9Fxo62u9PDFmon7VyZrFbcb6SrZ5RMAMX9bGeSLa2Ka1czCju8WpUyF2v",
  "key40": "3Tp3xmiieL5TwALgXkKp4CLGJkNoTQZM7K7D4gdCp6JRGU3WhtbD3V8udr7Q8yy1Rpz1DAaFBHWiF2Urx9WDzKD4",
  "key41": "5dUukDPoft6v8on2tmnjLfqdz4i3jnWYHR6Tu5HieHKx12vqtk5Em4orhiifaUQdqP7P6VvWYQS9R4nNtdtryeVn",
  "key42": "FKJNZQVYTfGAgJzMwYAmEWHfVi451yn39wSL453VuSEzjZ26cVCroNWQx1MMXgjDbESJx2LjoLqosJAgMjcfcQs",
  "key43": "3Ge4hapB2j3Q8q7DK4VjJp8aBpbFQiUhZbdSKpp4jCY1Dpg3HijwxY2MqbdzocMVr7pPhF7FRvtQBC4tVt4DrQQZ",
  "key44": "qeStapDtUiRw8gYH2Jtz756wBEyVcD56KHv78tFMQuqSycnxqGX62fsVNmkTWb2w73VLABGvB4zMVH9q8JVy59q",
  "key45": "TAMRAk6M81PNWdG8WrTv9n1SfdKsecH1LsydGrm8NESDeq6341yat7Aqjix4Puyt3j5tGWH31ZWNRbLbtdUvUyP",
  "key46": "5KYPRY4hae2Q8v5QM8sgBRqCMc81j27Y3fHWD3mX96GFunwVHwoGshxuQnLWTM1HfHpqkRgVfZCja1ips6FWe9ni",
  "key47": "5rdet2p1PbLp7SwFV8KLvPUYMFRhXo71TQfwBgZrp8utUoqYZsLu1N3Pk3xg4EYFsJqEwsTijbVPmFFJQaSwjnAg"
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
