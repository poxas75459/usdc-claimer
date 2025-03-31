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
    "4QbYudx534Tjm5iCucHjSwB7R2DF22gB6Y6h3ihGHUK1SuvCkzmTwrukRz7QJQaHFZzWcQuQmzRpvMaXymTy9pah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oA9vF3Kdr1Dybmw3MJQoH6dDbi2pD5zRyoCw75P4H7nM1WQAXFqf1v8bawjycGLygAqa1duLRNNpeeU6mgSAy7k",
  "key1": "2Eu5kxWVbVs8WJEABiHrshFPYXHxC7Knjoh2hpux8Zf3Y6jtHJgdyHnc1ySwL4KMjr2bVoBdJcHzhKkh32dQNLzM",
  "key2": "27ZnNDJW1uXterWRrCWE25RwifMVUEbJ1LbpuQjxCzLbHpawxZwrsW4XfbuTnyCtMYbCxtLowVDJdMZa9xbmP1tS",
  "key3": "5g5Mk3AwGGriwCBvy3JPVkdVgD3CyNZLyi22oyfkhX2acR6AXfTL8ixnU169Jekmk5qK6t8ZxRn2fcxa8sLtjCsd",
  "key4": "3LProVfdE7GmvgRMY6gPJC272cTJWdT59TSkvU2ndZCbZLfkcnqDBNXhAA4AZxee5qf6wGotcSpzLUC783q4F2fh",
  "key5": "42VvD95UbReHa4cekGQAihSBGxpi8oFWGbcDrgxnL9Arz6qRAW3kCvYnnKGxgAaFiK6NoNz1cNQKxRhFeL813ha2",
  "key6": "28QvMkp9WKPwAbYXwCS5dSGH994c5wtLMB9BcHy7EDDezRouSjmzoozp4vbZpf8fFcTQv2xL84hu2FxwnxPnM3zy",
  "key7": "1gsAecGwQNv7SzuAnzbxg4jYN3PbWimQKZmiHDG7N2S8ycVv1uPawyX93e2fVhLSzbzh9Zso6sDsACKYcVbFBi7",
  "key8": "3bxzL4WQ4WnmNMx2qf5GqcmvJmmVDMvovL7LQ83cerj9qTFNZd5BW3oR6A284bj9qKH54e8PPMYmBjJMBQ2wasv4",
  "key9": "3aSbza2aBUy18SRywFXqbvUEU599ip3iYSQFwBFo1cUm7RCebjXnqrTEWBmSXsgdL8DXNgYyA4aGmC9egLyqJKQC",
  "key10": "38XQ8HW5b73DHh3U9iNkkYqCpQsLugKciqTUY18YME4n6xancPLpRdyFN7QC5BrLGkXNWn2WPCbYd7rYDYq9WJ8v",
  "key11": "2VSYMf1CWcA1UgYCG6CdR9J3GZQDrjnCLZdh2o1ispyT4guf5rRsA6cogiJixjom6gYU2n7eKKLktkGF42u3KinS",
  "key12": "F9j8eieCvezpY4LGqSWuz9bit2HYjH5hmKcoE3fKiohDqeNzYES9YfUzcQGbHBJoZU5VGBfeR3LxjBmkVgonKcE",
  "key13": "4YuVyzWiZQz5WT5p4Fhpn2Ws8eiJnZxg91CSpsvY36RucrxVJkxC7uNM58s8TnkuGNGY7Pz7wVkMCszhKHqd1MUK",
  "key14": "58MDLGjaRkLNcU5xmXZaDyX9seUWo1ErQPB7iRguN4J6phhu9w7ksPdCprHwGrx4NuZwr9gaKjGmeHpHS6dbhJKU",
  "key15": "5g2jrnHAtmiSs9XT3LEnpgzVsjwxxa1eJ2v5W5WprnvtMTZKFTW2QymTecFYnNq9rSVTq6BmczgTxRj9VCFSBHxm",
  "key16": "LbetjsESNdEc9WaP5CFnC71zjhDBF7QpYzrcnYszcmJ8Ff4Cf3gYC7NzmKu2zWL91sqXLcU5RpmQgYbq3xSDfmL",
  "key17": "5huu8reuZGZHQGMcoJGKwhm3VY54goy6gUxE8LtqELztMstiFXhFEppUV5Lj6jtWFCjf8HvHCHtrP4oc1AC7PSFV",
  "key18": "2W6C5Jvs3MrcxLA5ejSzYTiR8swpUm4VArg6AJ3qDcRfEbZQyBHSXrKx7E8J6sQPgcJwZC3df2C4eeozPJiHd5EV",
  "key19": "5eADHLzVCPenL6aGKwfrMe96TuqS84gPpcXqkuufGLh7s74RQ1ti2LUk1zaP4deLt6AsYsh59NjjwEQe2th7YaYm",
  "key20": "2KY7Yx5WoGMy2LUzkGjV4pqBLuJQaPigbjvdVAJrDR5Tn9p1uvEtRZ7xZ4ZP6kfEWNwqeSZ9QK56SmQReQFWs8Ec",
  "key21": "2nUH6mKJK7sWGaUVqF7DwHvzxHZWjYB5kTMTuLEdVQEKKNh1Pw2tRiBKANYbZVsK2myjrganmjSfgUkXoTaePqDS",
  "key22": "3Vu7HK5uMSs1USBf4bQjNpsVABsdi6QBzhuu32N91mcfAGdW4yh4cbpLwMMhYKoKMLQZcU3bJWTxVNvn5Ywzb68f",
  "key23": "28gNVd3cVEApD4wvJ5HChfhh9cGB9TYKaCo3KDdDEisWrhshLUBhxob6ZQRnyHw8QFBdFu2eiDhDD2AuDw1dVBqL",
  "key24": "36qEff9FJde85g9iAUAHBiF1KDKKRQwG174Erc4Hic5Qnw6aCfhWjeJxRqquBUWYf1sAyGdDNKQfunKfcdxjjUFz",
  "key25": "TUyD4THDGNnqRsSLBz9YCJ3MnymZguFMgeUN5ThQhRCvpKADjmoCwazWbEe4cFpif7mGBZEhAGrpbNmMAFHUEvg",
  "key26": "2QDzd8pntgv8dLf8aLni28mx5KZntkFCF7HTNsrBDEVV1HUCyCym275pgz1kyNQEWHMv3LeW7dmcnYe8u8LKFLon",
  "key27": "3A2zSeqVN11W87hjnP5jXa4wMn7R4ER8D7HkzLQJfc1cHPJi6qWv791uW5Z3dAG3tdCYsg4nWEqPb97sQVFB5EMh",
  "key28": "4q5kJEMtNBxTf7t2TcjLQPCoqvcXJUyfQtmuuLgeNesLd1AzzBRM1krQFRmmMKSXhrff7UfrUXDoDJ8nmGF5NcLr",
  "key29": "oMuvSxbrEoqHydQEPLsLZoSf36DSVUDGC18ATNbu2mL74DaMoGJfEabPdJenPAaSL5uxmVLWAANTAtjyTyfZ479",
  "key30": "5hd2tq1BJzDELrveJSaN45NkuHt5CmxtDRqCpizAZeCppVnqJ3bjEdxVcAoc7YLKxgufhdRbEaQXjMaeBshe52mN",
  "key31": "3QuGjiFHmX65dgB1TSsmqQgVCz5uyaSnCfNwMVM7qDypAYuf82Z2C1eLWPe1ote11RV4kmvarfRTh5xYh6GJFqBe",
  "key32": "4wQFK3Qdht9FgKoizVFTwY6S6WRBgj8VEkrjygvQEYEHkEecLEpjbE5u5jMnNXpBvvYxN5rp1gRnRU6dc54zVn9b",
  "key33": "5KSz1V9TXLPi6d5EyvvPKkAZWU2kyQh493HvdJAjrLeXUTaKoYxcJDmC5aPszZ7m5or2cG34rU3YLpX3yM2hHw9C",
  "key34": "mChqjnH16U8ajCLLRRZnLhS3sCVZfPRY3po9JqiYdMQXCMuz9tYj6x6dDPCGSFkGQGQSzKaoLigU7gnmJp22nG3"
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
