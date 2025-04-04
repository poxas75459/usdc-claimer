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
    "27DVZEq2UYPNQHMzyHyT2GGJFCwmdaZHDNbsAFNgeGq79qwghjRYczxbqShtAkcTnWxqsR6YSYyjGSQbQCuVxm6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzFF7zpFW5qiFVCietym7c5DSBfCBm71jGKYQAniUhNHeTLMnesgbFVsG2roVseYMi1ZawuVUsTWyMrnobz4t31",
  "key1": "5W4sd7a32kj8NdpcRc57TdV3mQrbfUBLuqD7VW8gHGVxAtuCsjvEgz45H9DGoqQ6jbU9gS1cNBVPC2toMNP6qKWe",
  "key2": "2rrPEdTAoVsqomuMuCdihMfeawPo7J7V7mBCaQHsuBGGDV3zdo34B6VRXCWyK1woeFCEJJtJpJtWTuhq2nFmQMX3",
  "key3": "3x51qKWXEVFSexN9KHJ4kn1b6WVmvzzhXrFKYfaRjAFCuQiptV6soRGKpsKFrwTF4UEJQNiv5Sk1EwJGwAzvtFhN",
  "key4": "QAXND8ovFaDzjsJ4rzJn19UofrcNLYfePAASd5CYZ17iumv7y7TdB8YMSovSJJXKD63ABrR5Uo3JLg5b8vrVz2b",
  "key5": "b3ZHuU8u5g1wHgrDRPHkLAMjQhmfQRGNuSu3bMFU3bkVbkhKvq8UR2Gvr9VvdFDsa6gwCQMnTfh9mrZH9KVAQPp",
  "key6": "3rqhcfCmqXbT5YXrjSJjN4aX6MhgYrDtPjcKrcxwkXerQj6CaMFdf5THyerwe9rQH9fPj6q9u7PP2zCy4VADHW8F",
  "key7": "2Jsk9FiiQQK8kqgHe5zFuAKtXNZYcgWYfJw7VbHT3uq2BCCZBDauVWKFAMqmnXZqcasmSi2yBnQUmhuEwQWaBEDz",
  "key8": "QTbvra29x4acyUoDV2TBo1Af5YddX1fJpbdcXbD7C2tSNij6w1oEyGnAU59WAEezqCChq6X4wBwoLiPprnc4A1d",
  "key9": "2zX8oGwrD3qMCuwFaAFaKB2h8yPyjq9fFiqfbLw9yQaH5EX3DHbYJrxjNGerarXYp6MkHjLDXCLWiS47QYpnWEXK",
  "key10": "48J9yusKjxwH7aHPQyDBBu7L1gqtfDvSu7WhJvtTRNJMU9W6MjgWtZ6QCxM1khshyB5P8VGfMYJ6LwQoMikkbnTp",
  "key11": "2DivYdqjzfnd94CR4Qu94eTeubi9fTzzzPMDhYe3n2HNZnwT6J1TVXshroEuYG3xmCiWmCtesS5vKkrLyTdbHHSz",
  "key12": "5aSiSx1rN9ZUS6srGnw4Exgq4TTvtmcdfvmRZwczFoArceohnfXMbH1o7f2UazE8bAKSnREEpruANxfWrNUX7fAu",
  "key13": "2xdMBQee4ePsWE8LURG57NaDk2mBmHNaRkPpKFigpYZhvfChEGNiCebtU1oCzagxLntR3P1TSgxNi9ECuHmSfLpK",
  "key14": "2oVYq8kh69Ja9qNjT5cNSEpMKeztbrJuPW3MiFGXVX5QVh3vzy5ikj3eFNMUbEzEopjjtsSU2junxbSAZE4oteBk",
  "key15": "5FbFgSQFVCdsAe6FpDMpQhJzwwShQuYFWuef8jiF1r5orGuaRNzxo5PNU21smYRx1Qo5SePP8Y7FKXkDFsDgdNYC",
  "key16": "2NSPHGRuaF1BL5Q99FgwEDXxjQtuWnuDoihhxNKAkk6Q8Gov7uhou1sBj8L5gh58BDsqyAGy6WD5Gb3CJodFEFab",
  "key17": "a4EF9uswQ6sexcAZ9oHTobYM6pjwbuQpfALdEMjgF17RPMbDAHYMEVzt2dcxyf436zMZv9TtWkFvBsgCZGhAbpu",
  "key18": "2KpUatajrDX7VyzAhXifCZ6mXNruGkTQiE19sjJ3quiueiPiuaT7yNiZQNNtG7YaEQWeCRqMbKBBMrpzWuLKmkq6",
  "key19": "2aBkdDpQ5g168jEoPg5ZtV9E1B5XVLbKkSM4rSGEz1axpgo4KU6YmList4ec7UBUUEjwT2gEEojPtRAnZRovFdyS",
  "key20": "3i3AuuuqagTPjE49N73fRcDQ1k2xhCJxwc3YbAsB18Bgf8G5P76m71P8fsCUmWLxDYMujPuRkh1Y9ajxSpYyhzdg",
  "key21": "51ZJoj2yVnyQtG8VCQcgToSfd8AMTGxHEtE5Ti7E4dfajHCN8XJBRYyJWfpvT36aw6SqXap64Dahk5uxSV6uRzxZ",
  "key22": "4vZZ2wm7CM64vxM9gyFDRMq2bUkayVhdez137tDY1ua3GBnZPMpnVcdQiQWaPmR6JWDt24eUnoFVj5HvnjJcwe2U",
  "key23": "3CPE5rEqy6dgfWvjoShvaYKjpLsXg2yWiWuLhU2WFg1e4ppGPDignSG1tMFtqGJjtCui6cf5cuXWa8QMTVihSosR",
  "key24": "5KuGnHXfNu1rqprj4iUpbozyxUW8mHgjnyBcPfUFydqEcjr28Tfa43RGvgGmCNaZbkG8tUiKCfShooZfTAbWL9h8",
  "key25": "3FpBj2gRuBtwSMBSy7dZovB16LyUj5PQitFEzERkYPDyYP55ALLhsRqaquyXwTVZobBLP6t2LcmKt93AJpaVLHyS",
  "key26": "23Xnmjv5CCM2iYEoCLx8tncEhsU9ncUQPVwtuDbAn2RdP3C2gFPoLjFaEy4hnpFNZaXx6vHzdHcqsomnsgSTKJvQ",
  "key27": "3ciHHizJP4LWrj8yffAfPg23veY5LaQ5opeWsr44kuUAXxRpVnqLG2avaBw7P1U8w36JxJs6rLPBxcD1LmU4Sp1j",
  "key28": "2nMp6cQeHGWACf68FUk4KAXbDBtV4ypUrEi2Q6jwGSTECqtiAXA3P9VFuasNkcKMZD31bxF6KPqnV4SJLZgJSpVR",
  "key29": "5kxMaPTSn2jnJn5VidCMxEf9PzHpxKLXhnT6vrCfauLG9oHGmq4XeTZEp1aCWDe3ZXewN5sEsXfhggwizZ3JRt8Z",
  "key30": "3YoK7UkR1QfPzSeAqrGv9o6xPMF3cdfAz8jTzZDrLenN5DuHnZTnSZBYueUuPruJSAoTj8mZbwu2d6McZP4PMpoA",
  "key31": "67nvwgCXgV1AYhuw4WdfSJ9CDsbkRuSY5XEH77eiuJ5acbjdSWPhY14BfXzZZA8CabnLZfHC4PPuBAcUJkkVfDeR",
  "key32": "4yadQLfhVeBdmw617ffjLew57MieaVY9jDCVhTYk6tdgBFBnGtoo7viZaXqzjJ3cVEWthwhw44U4hg1RHksFjpSD",
  "key33": "5Bz2mbXD7SdAC63nnRZrbrBGpwiExgUk4LaXqu39YbpxkqnNVuCGnDYUaYoFC6qjKGDsLTBsCkSjRdT4rSBbTeMQ",
  "key34": "4Exs59HpNTk2GrdmsfPrnM8ejuGBXNr1jwUrSsZArHwkMu8dK9Y6xfHEUousa6fp7PeHH8CERiW95BcXNgvuFiPo"
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
