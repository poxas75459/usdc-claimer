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
    "pEFcFELQk5zmgvBKg5o5Xz1v4ZHjTxNwHccfqMnPfiCMjcs4Z3Shxcdx4zSa84t2mTubcSjfYi5TAazBpF8YFYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339usHkg9kTgvFZs3mt9uZVP3xFLCebqpGsBVTj8QhCLRu7Yyi2gk6k8qdcFrCo2AyZZUZi46tMUFBNJPxwgQtJB",
  "key1": "29Qtk88S9u9gB7V2SWPAtBJ6QLoDzE2ZzgMgwz2CRnpvXB7UML9cn4oxtRkMrRC2aKisWVEdKiMPNVBBr3Ae8gmy",
  "key2": "5LkuxJU1HTPtWEzqZY2Y3AzErkvguRtEp54tHLc9ApqjfeMFExQ6XTiHFPqsz6ApoNcYPwoAoMGRyGX9KvosMDyW",
  "key3": "3cLozhTeBSrDaKFz6SVYTLhpQPppy9xphsNjV6cbubqhM25rnKYA1ju7qffvNjqvo4cLDtzWw8f2dSUv5wSvg4VH",
  "key4": "2xgtcVLFekcUaacYTFrQpUm9rRQtBNapv5mPkHydwktBqSBBSbtwJcDLtAApCULbkmCfdPyDFFLEtf61KGv1Hb17",
  "key5": "24YEUeszf2u5UgUozzCnpPhCjL31yBYMUBostxSg56fAu9BrDVVXR6FCKaRmXNnyfM2mvhCmLrfAvRGwqaDcecwM",
  "key6": "3z6JQncjcbWDLEcdJp7W2ZCznhXPiEWEp2MoHSSxQTAUsUs92VYMihJM6VN9HxTMABEtSJtV1X2DCbCAoDzXai12",
  "key7": "5pMJJ1p8dW8vey754NzZQ8HYfDSPAHzWDpGc9PiJ4UK5XFrFydwwEPqNMvx63aoW5CiqbYQnVsDWwn6WTL8EhwQD",
  "key8": "5QrDF3pzqnPcNJ6u7brjBk2jrBvKtwxQFKyG1jofoddkk2oL27TErCj88xP9YYU8yA1YsR53qd2CEMexnjWUAK9s",
  "key9": "5XvQZuEeKYw9WZPy4JeX4thXM3esm5uamwW3uCDGTLci7uh4SsetupPPk7RW7c1iq4oqueYzfRhANowishiqToi4",
  "key10": "au9Ue5Hqo1DXHh5S3b4AeMBnHwvpFNLm5P9JcJ7XbZHGYuhPNq5pN2BHa2RbspAQeRnVbNae18F8zTeeDHYNM7x",
  "key11": "2YGbN4iN9kbMUxpcAVm2WD27tR6xvTLdWEAUpb8GXHuezLT36ys5u7yh8E3qR1vvzUvHUQe48KgGtd8vuReWTuGy",
  "key12": "2CdfWHqXYCqomxmBvFNBq24a1ANYG7WuKGdqz8BDhVYinsbrhdPt7GmgAmzEiJ9kYYiesQbbWB8pxVnd6eUwa4Qh",
  "key13": "2GJPJkS948xrmE4TDFjGpm8Aa1PYnvKghMiDUynMKapFJfmswHmh7NbfpjEsGrXb9Zg92xwekeqGxbghYtgyRqUp",
  "key14": "4CmEGZsJDeouEMU8TmuubKQSk2aAYLyEz5pwqpa64hTDG7V8mYUiGip4DdjrWN2ctqU9F9LNYvHJK31KwmfcEY3C",
  "key15": "5agmFgxvavp29irYk42T4Yy1FV4KrVFNZg5ykYDzD8mhJaxaATBBGcBatLN5S9M46w2a8HdDc381BCtUG9Jtcb3m",
  "key16": "2czd9tGhphG5VhKsnrP1rVtgMEZeruqBE86iWXZxaxpcQBLoghNSbXeSKyPLaRTpyyBQZYZigZG1p5EuvEM7rpwn",
  "key17": "5Ck41rwvGQyKwie9jG2hkubbEddS57sgFL4XjvotazdxeHSZbpnVfEmJURfvaruvsPvhboTYLudjNyr21p8hd6np",
  "key18": "668aYsYyc9W3dsEo28wxpYv2deAc34dJwX9fKiitdHSYSnStwmKZTxPFa8DnuY3KtCTe3CKXSuLL5SgNcNepvyyQ",
  "key19": "5MUhmSCir2myNed7YSQhLzfkKf5rP3wAPEdAjrxJbZ2fD9baKps2zSoDr7pURmeD8Sw8UogsQwdVxX3wPcLwErAD",
  "key20": "5eY9zUCH3Nr1QnfiX8SPfnWyB8S42qHcZcyCpzuMFNTsBTNHrvTRB1Rm7gG9GXgHuiVbkxAt8taNRuKv8RPWzKCr",
  "key21": "3CsyddanHAQUk3kHLE3govg2zxGNFAA64Fs9cy1AdYC6Y8SjxZXaZPgsfQLa9DQb4F2ieS8ohEdgxr6wn8TgwqXe",
  "key22": "5ev4rZbJysGwrdFfyk2qECUbAKWCmwNeKkxyVGDLXYutF6PwQphHmeDcnQyk76xiY6AVwSrZr3fmD7NJagYkPL6Q",
  "key23": "39XyHtswrYrKemsGhY9XQERivtMQk2yAbTnoqZJRHoWUaBhWR3EmLFb3ptPBMbHdBYXZFEwcnMJbF3rpqwpVoheq",
  "key24": "qhn4SBCxkHp333F3bSiYT296kEiV2Xihozosx2e6wJrHaAmqwy8LAezTmFSN8YRdg14vTUEPP5HNiwsYJc4oCVd",
  "key25": "3WbTdwX1x3g2mDP1XEYHMmmwAebAbLVfwXPBigCeDBUvkDCNQbHUwncZApNUX44xxBaFsmxUaMrkupVfDKcqrdV6",
  "key26": "3tk4UAYLM12f2HsZDbShtigm2vSUii8Grafoxs28Aj9scVv5LWWHhbQHEfV4f8kX6cAeCBeTGca5fDYhnEd2Noia",
  "key27": "2hCwydvbnc52s39siF4PhqgVNiidxChVH8k1PFLx7VHj7a7aUARqWPg21Vk9Au5N25m7DiQDkDrPM9YJjstrqX6x",
  "key28": "3qxHDYbyoVrADEP8wznVRewhA5PX8BSpwB8AQoQZ9NPC73zjBfv46pqFKYVaV4CanazMp1kV6Kyc9y37ESZMYnkE",
  "key29": "g1LAMdvqLUecjufXAVUEQmaKRoVhtN5AbrKRxqKvzZviANWhjt5fDqt4CsCLvZqEhpcUJBtDzoYG7EEyoU1WRxX",
  "key30": "5RMtHaDTxKxniwN4x3EEJnC9vZSd4S1CEgPPim4tDFq5QbYSvPoXcBS6aYvtKPKqYf1FsgnFMnzDWdajyh5T4M6k",
  "key31": "3CmP8yknH9SyHB8ziMVbow2eoDj92hgD5xEnDT7ko2vNCp6YH8sKfvBmS8LPtY7UVyPsa7HcVNXx4FRJBXdnE7Hv",
  "key32": "UAMv9rwLHYDF9zL2qzQ6CFU76rzPDnQ9VgKfe5hAemfkLyHmTvhJTkcC7NwfdYgiZZ4bKRotdt7A387JyvXtYNY"
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
