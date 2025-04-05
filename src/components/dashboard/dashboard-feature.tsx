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
    "3bUrdSeiBaEAmVasuWWrY4sewrLoRLD71CCeq8wTFwFtpfaCPVY1NtfsPkxcNSnW4sH6w8grNJsbLosmMWGa4QR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HgS1wiBToFHhh9B4wXjaGh2GgkEnYtg7LeGVrpvX3iwJ6wkxq3mkB7FuK2v5z3WEPAb9kH9aQefexR2ctrUmacY",
  "key1": "iYuXxBu6exZX1XUcAb2h43ouCAdg9D4FNhZP1eRCnDu7dkqdXF1UbPqUf1N7D25or7umS629vdfSfFQBoGZ3BnG",
  "key2": "4LWQF2VG341HLB1ESwnEtzxToikbgYUk44jjX6TEazutrZxF33MPNgiAnBbiiYunQWyNfVcgsq7L5qGvoaQYa7fo",
  "key3": "2ADUFv9Kcc8axMoHxCR9iYJWVWHLjz4pg3ndb4HWRLiRv8W8qWCV3QhRAEvqzMtiqSpCnUv9sRkaNW2JGqX9EL2z",
  "key4": "AEcFGr8dMHt541mzCdEPgPFjbSYC8U4g3ov6t1XgXhWPdsYAdJYzULy3ZJZfzpWXMuVKc6kCwtoizTRznfvvu89",
  "key5": "3rcSn6PupvD66C5bRbGayzHkyr1mV9wKdLRFznXAmFU6gjuKQ5PEPcu6PY3VJxS3Ga7yYxJFVqwjGdLb4oQqBdZL",
  "key6": "532BV1uW3aaiGmjASuGiRuVBK9YgbDDjqim4VaNg4obPdrXKSj66rwiGY7znhU3wHPoRtESNfTR9mGApBdTgM1Ji",
  "key7": "2C2urDRcogY5kwp5a7uwBw13W2NRkQfbetDWWM2JyynkK8psSW5ASyB15ax1xB8H84d2qMKpkcJeLpamXN7TPxTa",
  "key8": "5j8JWKWCaxqFXnpQeh4aVzZwnvA7JcNTTsgJJfUisXgqrM18BwyHhhMoX2Pvb5fQYAzE49A4ErQz7dEJARSteKZ4",
  "key9": "dtsZSJtM2f9d8kBpdCZ14J5Ka9zXMHPPn5pycWUVAmTtzmKddJ11snjZ9ZcuuTf1HbxKTdQatbiqLfsGmumUzuL",
  "key10": "4rBZ3t2z5EA7Z7tA8Fkh1eK8iqJYG4LvdDeepcmNb3swdHngA5FxkUSbwoq82iuM9G2n9NdV1U7S1iGTgLZ1v4a",
  "key11": "4vNTDgCqyjGRFMRFeqfkzFFqR49t22PdZppC7DsiyyLf2UY64U5oKMcZeuJgoi8D8G6BF4imFwZyXNdeVdH9hZhT",
  "key12": "3CMiG6mZMXhu1pptH3gbV6PEwu9cMMxbQFrksy3pa96bwXMPXpMYZ8enKQzzJfv2RB7QyBYJuvwjY4c8ErdxdzdE",
  "key13": "3zsmugaAZocNQgENLXDM7r2kFqUQSzk2n5gA2sgDuRmGsu7VJLSaEJiwsedjCARVqrsGjqj7wrqWvyYifcF6yPKM",
  "key14": "3A6twmj7J3fVckXcUjpVB8N1VSKWwU7CkYRB5vYbmZHtP1TBjFSTciHrSYsvzNmjzVJq2xcgnQ5hWjvpaL3XjcSV",
  "key15": "2L4iPLdrswy2GJz34G881bNuHfKW6g8W8vWnpBLZFTRDzXdNihksDKyBuCJ9HHUSxyXwNJnQRkzL2qotwNew6Zj6",
  "key16": "3BC3vfB4rAnZExkBrScy5b3HqNdmLTvfd3v2seioiYydd8iLiq7qZpMYpF998C1HW5caeZ5VVhMVUTXyFZdmSEbH",
  "key17": "NQHSqE8b1H9nJ7JgeVWQSALnwAwvKHNNr4cfu9FkgtovJ2bx22BHGKbcbCp2Y4AvGbNiFhpQTGSp293bcNm2zoU",
  "key18": "4aaC8wTAajCqQdJs32xcgFyJCKWKka3pGbet2CCXJSsanNd5tBJRET7m2PmKZqUtk7aUwn2vRFeE2B8X4YJHjgKG",
  "key19": "2u1RmRGF7rv9GeMEsaskfLToHZ7AxbzMkxQxt3GtHnQCAeXjwFaLsHsufe1997Wfk17BbvFboe6JE1ps8PCw4GNt",
  "key20": "4J1aZerTrHPSNXHxSdW7WwH2qp3a773neUnfQSbktXsTgj5poUXcVeibcwJVPDnwizs2HvGFeFHb2VYJgUtCMH9B",
  "key21": "2MqXCGZCrdgdK46WepUuzQoUrRx9C4J64FTJo8at4sGzxqHf5LwK5sQ2HPdhjpkgjXVUmvvqbUtquqArtYZuxzpU",
  "key22": "3h1GNJkPtjqC1ZX2vmg3Jn4VMkqxTnDzurnuDRaBHWkEXNyVxZ7Tyuxhbzxpzu1qtR8BJc8tQMrmUPx7PowCfBgr",
  "key23": "5YQ8PpVDBMpu6AaPL1V5LjuKTBkvH2ebNhZJFyUHNbUU3MTXZv4Ts3XMBcgKpqmufuya9NK9g7wkR81XmCKxXiDA",
  "key24": "4ZNCMZZKBURyGwJ6iSWxmiM2qwnLg6PVAZiZoCRQTNoMSoGgB7TkTjYasPXhjQkRXebmfuwFUkNckLni9KjYp8gQ"
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
