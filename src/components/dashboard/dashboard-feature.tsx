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
    "47HfgroNkCizyh1dHB2UY15k4SDrvSviwsSsjxu72ACiahQKYdeE2ujvLj6HTMQEsCZrMXgSzd9rGcomtARDDc1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kMo2LvqnpxsaxVCNsiv17mYGNqfwrmVSJ37mDC7xJeuCQdusXGKEA95UznfGPcVqWpX8krH5SqdBzLYDXirbMeD",
  "key1": "3SuxWuWP1NTRH2WSfo6kffLQ2cp6fAKUN2H6rprreDUNLvXgrPC81Pf6Q1ryNUHHuGJGwn1BAV7Fg8wXNWq6drgZ",
  "key2": "62MEwjij1v9z7k6Ur1Xzq5RJPV8E1hDXo3BGeyNdkDExBah8wWHJ6YMaw23FkdLRJhfpAQETf8FH434q5kzsDNXM",
  "key3": "3NiZFntEVwSUeBebtWo7bZ4guWwX645rBGsUb4kFJG8NE5DJsrkQSD2AEtbcDtN6CYckgR35q2BxXkxiWFUdmMTh",
  "key4": "3QpmkUdbvTqNSy82jF9aqL6vmd2nkFq9p8ft9BEMwSsd5Y46gPusUEQjW7DfN3SY2GX7E3qesQ11kSN9bNWcMye1",
  "key5": "qXjpXVHX6cCWgwdCoX3BwxfNzLvERms9N4Uib5MHco8XBZuphjJ3E9ZmH5QVXEqqb7b2X4tgvtNQKCNANzn3z74",
  "key6": "4iFYkMuvKSrEjcN2SSJao3mrkrrnjB3x3nQaBE1rN7C4YA3P2T1mbqwEFMLUtyjPHQBSU3EJsTJtxS7edjdW4e44",
  "key7": "4hrCe4grLGw2pzacD63QipchsVN8vbDS2BkQPSrsEfJzCK9Z9dnD45V1pHAHUJduT9Jbmf6UiNHFfjNmMBrjspkN",
  "key8": "4BPgra48utrAKyFHUixMiXVZfWjVN9DGGhrx86f7eJBmeZaj1P2vTtvTTKYcb58cDEKU17Bb22JEukiLM3cW66Bc",
  "key9": "3paPzKpPkoNBiAg478RPNkb8MHGCCjaeA7wvdDjVoQ9pJrrdsqf76LNzCoWXfQuCNR9CBWWgPocXrKmhSBzWvVcg",
  "key10": "r33KBJTvfKswP4DT4YEpQEjbew9KEnyuYMLieuoCEDzdtuqABb3CmGSyu3GZrmzCmDRTPKg2kGSwpHKLyEHb3Uc",
  "key11": "5EHSJNPmTs4wqYadN5mCCxri2dyBP9AvAVKiwJg9qvHgmnhgihXJ47R4B4TSgVGyqFEieyyBQJC3ft1ShUWcENeU",
  "key12": "4iFo6LFsVpy1uuFrSfXRBHL4eZikjsT4nST6tFv17gfp769VkeWzeYdHJRERTudeitPXDB4H4CJdXGtRnAQoakJj",
  "key13": "2S7AqGSeq56UK4Qk5DvSSqUCRDRZBFp89oB4o2p9xzPLRF2iNwq1s6q7ka6koQU7xT4k67ZTexx9obBHUJD39RZP",
  "key14": "2uDdiKQ9fnH9jxpjews4UBSwidadhQHPpWkcgvwr4MFx2SPxpDfT2QM51Lcn55adB834uX4CMLYbpZAPnxZf1ztE",
  "key15": "5HUwAgCoKswepksu1UHPPHa7vm81najXQ6VnPxKNbufra7amubfzUnR9xA1SeWVr5xhFVYQKJXEmqUMgRH1xChPE",
  "key16": "5VYVgPDVNxM5ioLbTppYvg9R4Rhc8ddTYFJwZxPjrAnKnXSfmiD1nVocpHhfYvD1ivB7XF7b1SQfF4Y8GQH49irC",
  "key17": "4HxzmFHyE5grUMkMTFoa7yAR89TrN6SycfWvAuz34kPfk3a9qCPaChXWLoxEKXfcFSNB6TbXiLHcFyvhoPFREAsu",
  "key18": "5od8WDmTv5KdUoyiuRKuZZWmjXD7KSRZzN9QnHGVpcTUbjsvEvwGXFp2rW1veQDP3vjkECU69SCQqvzmZxisx46p",
  "key19": "i2DeVoHZ6uK1unELaKmeL5J4yhH4xNphVz3kxSieFNBSSVRqaRNTUkdg4Et8TTTBfNEhfyEkrcFdhNrd3ddB3o2",
  "key20": "37CvHF4wgYGi9MJSLDZJM1rc58S82pHwmtyHHRbkdJpMG8dY1payGjvHyFPcgfhnp2URJUmq95K7mt8p9NFgEPUh",
  "key21": "3qpbadCpMAPXa1Jjw1UyViM6FUVE9yJVdEzAJ23GG1NfENBPuNbEzMPptAjG1kMGWFuCHpLj9nWVmC82mLdUBAnM",
  "key22": "ckzXy3A95xjNwvyjSrtqCH6ESmEmyCXhnGkB1YxjAWgkj61A1HdgF4fYkuuLGJdrRLTtkzm5Lh8qeLMsKTp6F11",
  "key23": "51ez8Peq5jtkhmgjRMR1UWuWFfEN2ZfDRkd6QxrRqR9DMX7MgZb7fxspyMqQjRypV8DKFzAYj5kBSvjrV4qBFdkK",
  "key24": "5TJw4ZrU4o6LfdsXB8rPMpRzvsep27qzfUxKZUYpNaATQWL5jocBPf59yBnSEMrJVVfYQfxPeVzHzxyRKFckoGVj",
  "key25": "sALK9C1D74anYKRn6kWZxH5zcaEsmhAZZhk2vwec5kqW6xsfB2TyaVJNF29hJoZGYmB42g8bLzBmvQw23r5B5oa",
  "key26": "5P6PHtsoq149mGyNzSj6MKqutEypfLbYSQtorkTcyfEoHbmoKCjoCWUhxEbtVcj4wt5hBwyTxH3N5o8EgusLoc6S",
  "key27": "3Pr1W1fZMSXZkXCX8F3p6A5sQG8rpebwmQuqW4aN95ATtgQEhaw6ekSNUrHcUZyQAtMkahJGRdDWVBMujXhKHbb9",
  "key28": "33ibjUFo7m3p9oMNKQtWqqhuM6F3B6tQiomZGyojLo8SkB6a1zhYZmq1QP64EhQ2N8T8wB71u62nsFk7KmxnBkg3",
  "key29": "61EQWdAG88qh3Ab5wrkFBeYA4yDgUivdmwoRQc87TENT8EEMRycnyjaZi43q1RTevJNnPEpUyVkRQDYNLi2aBNEs",
  "key30": "5Dk2e1dRfLh7DozozMn1w8qwuTpDNc4hi8CTYxvwUh6cWg3TkeQBZy2M1Msk8KhreXk7Pz51TSA732z7ckeAKQVJ",
  "key31": "4J9jngBrb1RRrgGQqGaw4k9HnBVHTiJtEU6Po6DBRpKaLn6yNYzD1XrStn3TdEi8z5ibx8VtV7ty1HyiyqCuHkZK",
  "key32": "4ahdneonqqUKMy9hrzJL9KYPThbZjC1jZMh2stjFmSAsvC6ByYQ7Roni1Z5z8BDAopeAxLMqx2PuSyv3hZzd2Zk",
  "key33": "34d33djt41hxZJS9HzAZkDQME3MBwjFcwRsH3GEzDH2QmH8uuvmHt8YnrbjQQQr7rWz9v8h48KiLQzYiudVh9HZ9",
  "key34": "4Asc6Y4fS5sSMTgeZX683ocuc6SSN8DN3hbxwDJRz5EqWtrV4yvB5MrKwfLnh4WQ7Kg4MmUZpaG5ADCdkbRktPWw",
  "key35": "4o71PPgEtYEr7pWi3RCodea5FMNq4EQHLtnc7qWSyb2akVGg5o8EQF1KvXbTE5JWqdEJMHhnL9n45ZEVaV6dM5zr",
  "key36": "3FuB7XbWsdyMYNaCj6BcLcAE7vA3bWuZRDwT43LsTYkZYxNkC7YhZhuzMobmx9P5LbWomxX8FUzN5obCv4mmBmQn",
  "key37": "3PH2kZ1AScPeYY6qmFNWd4C66DX4dxVXNMzoyVEZFWKs4kYMJbZeLkreueyutQbvtqK3KFdPb3te7TwpjeLGzTvr",
  "key38": "5ZUm8LG8Sm4xzf5V2S5u2uv7LbeoDBsoEc1BmzmN7zAj4aRSsN5AKYSnsZu74v5urgphsFLWz9Z8PbxraHRperW",
  "key39": "5MFZ9eotv2vxHxjb15YFPSBA9N9Tmq98marJ3D72jkWYSXKcZJQbwK6uDvRwZ2eUex6sZLEzDv7gBBpEKbCDM7m1",
  "key40": "58m8aeh9PtTDTPghgf3HE3DJexqFS8ttPJGu9TFWYpq5oXTezyYDcZXcgt1hBPW6428n4zTiyg4mb472ymj7jYro",
  "key41": "U4dMU3t8qTe83K2qT6XjpMKiN6PNJNsRkRyUhtKJr9TVvfeBxkptr8P1K5mcckgsrnJhoLocVnmYC9RVtNSGk5G"
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
