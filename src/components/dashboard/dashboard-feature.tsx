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
    "TndiKfkL7LaSe6ntTR2YT15QV4txC6xWdGkAncCcaW8mb7Fvzx16PcpLnTDWsSBzBsdeTHFvC1vPh1vQgACeTUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Ar9vUindiU22bkGVrZYNJuRvfxPMMQUcP6ZhnAoPUhA16Pj5DbBSysqR7E1WFHu1B3GLBKq1bBAh2AzWARNoVi",
  "key1": "Fc4kXpyMexbQKxfDLM9XdxpSQXMwnHdgqXJzY8KqtzTstJA3EJ4S6ojvt58hvuCEDBVfNXTnUUVvzjtWRnPJ25X",
  "key2": "2opR19hCCdhxHr8VdUMj9LXQqbr7K22kZqhv3HhvCEbVaLcMRESZ3M8zCRybAusuckpyv58GahQeLrryKXzrgtyk",
  "key3": "EpRCkjv46AVfDJtsWxBHn8WuqdgLvsCTMbbwN3fjQt7TcwaaofLdCGyq2wbhFE4txya8X4dqp6G5B88KcH8Qfid",
  "key4": "2hZsoN1EzJL2YZWhfF7AjytY9QsLQsjDSCoYADH6M5ShEpQBC73gJwPy5QPNa6rVyD5C1nS2fZWAXB2w4J1bSkaG",
  "key5": "2gcdacrV6GmTor3iSVqaQJpLercQNAzBHvA4tTGNZ5rJFuL52LwHQf28wDNmrqXpYqPpTmDNApK6fhVccKsxbMFS",
  "key6": "2E2EEK3p7KtwhcLA5yTHeLbHrDGtGSVwVuqnfygMCj743nBQoTGk4pjipA9mouEbXTK112zg1ZBgm7ToH8KGmQ4m",
  "key7": "5uwxmR1sCDDpr7Fr1B2WWfZEZbVutPgyvRBTg73x2Y8Qr7aWHHFt5LJeFapQjcv9mZsAPDtNYAP5sFFXXT4phiXf",
  "key8": "3nfCciqD4NQxRc4fdPbAGz6tWHTdMz2VdHoYsikSTQrAhZrfFVGv9MYa9UxBYookwybdDZ2FXybXymE27fzoY8KX",
  "key9": "4p9kJFVcQ9RgjvkMFvzQHieRr84sdnZQ1GnfWv9uqwFmCAWENrV9hyfQn7JpfGzXFBmpWgZQFwmU99n7rH9q4AWY",
  "key10": "44f8RpDeME1VGAtzH3tSxkxJCrCRgBzbZp8t4AJYqnyJFqSXFZvpunrF1mFr78rMzNGEomZwyRzfFdcESjYedS28",
  "key11": "ZokvkAcTkMPcMSSbfE6MMUjUbXNA8MrgpAFPFde95i5gDyp1giXzVUEpgkaThEt8jDwECmdqaKFdDsJR6Po4cnm",
  "key12": "sbsjZfNDu2UTJqv3BbMVytvkJnPtbbRG3rD7pEewxF2K6ZTSyi1U6ZoFvsqeFzBnTbTPQLSrERgLW3kRfUUAXZK",
  "key13": "54pxBwaF6TJwCWKNBsNJ63rrqci1QPKtm3Bqxe89x6wPHNCcTUbdQAmkhKwi6ky5GypxSiwuyRdsqWpith2Wa36t",
  "key14": "59t4k3Y6vAkKcx5ZMsoAdjWxKK2VwupioBg7SwazQf91VzkB8UVpanQZHWHwgzns3rZdJUwU3pUJC5qA4dKt1urk",
  "key15": "5AVe3x6x6VJfJ8oxT8xbWD6vSV6brYNGtff5hJ8DjpqKzv514EZTkQ9vgXkyB8Ghbn6jz1RUUEpxJkzrxo2gdxsX",
  "key16": "2JMTgNopWVGwUTJ6g4jtyGksZJC3huBHFmoPRaYXgkZ4jLJKCh634BuC5nN4ueXg6cCJUuzKnHGZVpMfwmxKb32M",
  "key17": "34tCd3mV3AWAmzXw4aXWXdquYvVuZHXRKAFSbbH9WMZMr5rNBDw95wq8wC9Qn4QnhrndVBTS3p1iCBhxtfTnyA4d",
  "key18": "3869c2gMxQXE6ZrVVrWQWCsAd74UAZnhV6kXy8hEJrjTT86nQoQ7iEhHuj79Y5MD2r7xvzVepTMqBvhR9TiZ9UvT",
  "key19": "5U1J6RQuaY2aBr41QntCT3TRMCN4JRtKQGyoPfubhKR8Rk4FuFCQ3kqQ495QfHCLWqpk25Ljv5ZnGd9kNUtV9YVM",
  "key20": "35Hjgpzcpu1YVXzFvGDSixEwXCa3dm8q4qjskTbJYLtUT9X9rnBUrfE41wB3XaAk4Y9CJnHPkog5SDFdQULvoYbF",
  "key21": "5abkRmK73UeDcf2JnRwjNouzvPJEtSBkbSWydWwU8Mq85HTfMPHRzXXDmm8e4rDMMTcFxVRzasQoTLwULrvQBEtD",
  "key22": "v31BiSsFXmsMN8Mi7Dm7zmATxTtgFVyi5hhsdanoaNfmHbj8RwhhLUPeoSa9z3mnMvPKR38RrVpU7VccASuxadg",
  "key23": "4r8smCvzFcqy1GqjSPP5CsrFAyTX5xjXkD2TgVSbSeSURkt45DJBcsDPzf7JunvLKWTYaw9mXwzt39va1waQaqKP",
  "key24": "cXHToPifXbvi9G6VQ3oK98yGCCkkvbu1d4TMS88HaNiVyzA7YesggRCHX6DwpWGXGxBNPZa3fg4uwcEmdowoiE2",
  "key25": "5nWKHoxzX1nUBHUSjaY5M51eGypTELNi1YiV1uCFYdgAsaMMhsC4bJP3eLJcnV6sVq2VkW8GJvk42GiM45fmesdG",
  "key26": "2PWM9YBsZiwcf819RrxuQAXPCSUYgxmNHgWPkRGhik6pM7TfVQgeuNpQL72mpTQQr7mbbdmes15urfyayB2v64qL",
  "key27": "sKeuHQewrjCLk5ouNG5p7F5Htwm68SSgCnoVfEARe4pFaQky1KcFsWkjJM2dcd28Upu431isoRZMgvevQjE8FsV"
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
