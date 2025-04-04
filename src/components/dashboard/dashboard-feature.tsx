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
    "5AJNoxYjEPLP1JYiKThC3QFZ9s2o17yFh8EvAXqkCRb5miFEmXeATFCVvTSXQF4e2nEDUUHUzCwtwo5Rca5J7WKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dZLbsP3wBt7XqkcUE6ygkWJUd2A2vkxJdgo6CNsjyn3bodDjWFcbUPVcp4m2GLdkJPNC4vgvKeyndjiv9PNFjsL",
  "key1": "64aJA5opUoiXvH3Kiod6sK1NRy8P8LYmnFCs8eX1vYSFQqspgAS4DmXM3GeNFWYHvA1n59BqTkPtmG2kXZQK8jqD",
  "key2": "4BPEH438K3EGdph11vLgb5K9iC5gr8n2prkZ7A81BLUdYkJzRjVmJcP3p3iof1BAd4UjqrJ1m39TiougnJZsE87U",
  "key3": "4u1hrx4JbXDcK781bGB1KzsBCTiCLgan5mWRvQNrGptMosm5VrPPCuz5z6qA7mMEeTAWemBHqmvcPmi8mFzXvj6F",
  "key4": "y2ocVmixUzcm3EEvRqpqzf7wSFWvy6foQbG1DeiWCkxcHCNaiaL3ghjQRqLD2BQ3aZFy9ZGbswvHZGUw44Vwq59",
  "key5": "UFxNc2tsTV3VsRqR9hNFzbHpYfWc8Ma3F992AkBpMX6WaDNVMgJBdfXJMGeycrtBUZi4QbJ5hpfbPNuCmFeobQi",
  "key6": "3FsmpQxAhjmPesxQPrT52NKbKGGfHK1iybe2dz7C6PTATWfSHLZLmWfzKU4b8LQWeU4ywYPpBo3zmXYbu9vGfRjQ",
  "key7": "5Tktj3vfm2XMwK8FmRy65tnyhrqN44idicyYnFsAP78Y2K6L7tjZghFU1JjaBnUczmYGXt7kPtrJR7c7Jf915zrh",
  "key8": "5zcfUR1QqjWxT6U3mvm2MJV1rbBUBCPbkqpPfQz5ByGe2guU6PzXY4rUhJ3p8hqCqQSZaja2AjEPSQbvmKkTTWw6",
  "key9": "59jvqiGHUZFQy7yxYhhoWSTUPFYBu9cazpUoQqjQVG7XZNmMECXZiGksUEJR456zzw2aGgrGhjLCC2dBcrYEQL1",
  "key10": "5YfZHhiLDHaTL8vjUVPipHqhoPc3CYFLyNWb2pGAP2sguov61YLWbQDVR727SbD5EzRMvJwmkp6UTpbqL3b8Tfpm",
  "key11": "2v9AfrdfUVPN8i9wKXJNMxpzSa57FhMKSCH37rsdirr7VLiwozWj7NHX94happ4EMcZ3m4C3KuyLFYgCTD7cXjfk",
  "key12": "41Ly2aKLSuYTBf6BduYcKBCihDXp8AyHC8C5j7a2PY88e2C3UQF6ZouhmbLVF2ZZ6SkGhorUooCU9ZpzLSSRsVww",
  "key13": "55rJWLR1AaxCzpfs51as8fotqaS5Wapoor7PzP1NoYyeiFUeaKrb4W4WrngudpkSs6zQjpiWXKoBh25p77o1WBLx",
  "key14": "63HzXRxGBcrzKWRsHcpr6XV6FuHJ2wPFztr92S4r9a7imwMvcpwiGTHVeCJdqyGuGN6tB3xV5kMTpySeBg9uKkY1",
  "key15": "5jSLAyUmmgDzutkJTtwpDvkH5jixDugC2qsb2W4REtKoimP4hyk4yxdErstkdUrrLASBvakWbn5U7V2fJPuQvSNH",
  "key16": "4WR1YLnPLqkQESsmTSPiuhU5uoG8Ei2iUBtahVb3mvh7dp7FreWvQ49uZSVhSKCJE21GVYUW5D29CV8hGUR4TnAw",
  "key17": "U14zqqbbMZDGTUh1P8iyPSDK2wqQXWivVHazfoJ1Q2ZxPnu7ukD2CMRkY3ctCW3Uih9EYNeNL316nvuWAidb5cw",
  "key18": "5aA3uMpXsCDg9XwZfTVPbopK4LPt37QDPtPjEpjfkYnomsdNHmeDT8GbWQxXtcNbVXnewDN7trsso3XfiM8PuyDm",
  "key19": "51DDeYGNpVZ8Ag4F8WdGwpcpWqxMQW7DeGXuQzxhqsjDZhhhipJiZAfntteqzB9X5R2xanJdcdDPFD1KzzLrhR3c",
  "key20": "2voKkR7AxVPc8a2FuxrfRb43KWyX87Za7ignEWmbi9XS8qjNAsrhA6AhLvFPrxQpGi5ssA5LyoU1oBN3VJdCJu3g",
  "key21": "5F9vxnQBBppuz2hgLMXEbMrH7jrQoccdaW9jrH26EPWNp8PEE1pcjhU87gtvvHidv5j6pnwPiLs2gWDrbFwG44cw",
  "key22": "2dCieSJM1fW4uX7gwkvgiXv39qjtRGisnBtx4eRXMfnFYmR8GQUURmbX2gK8B5ZK9AEvce3GRMt4FTBp3XihTvqf",
  "key23": "5PmRGu5taK9WLdJqfZZGjGYFnT3cPtNAaifgZfrjnsCQRRaJQaniD1vAvdHAJE376GBM2YyRMKCkW9DDfq8ZwvEV",
  "key24": "3nSV8rJaZsyAvJX66aV3AitMGN7K1utY1b9EsAuYgabUDjwcMK784sU2GQeeu9xLG7EgAFf8pUQzNcLm8rRwzDQg",
  "key25": "1QhbXgL6UyhT1X6GCEKF1TdkxPndUvpGr9CuHxabogwxoFrkL9s5WfsBdSvjoMvGWQVv5Ry7AmTx4bUqpmfmZXE",
  "key26": "3qhdkjqqNJyrkWQAL3KgzyThEKWfHRqitMmXEMJwvbDPx3MLV5bnUuZLSftvvNVfrK7vPqeijVeTi7u8TMTyPiAq",
  "key27": "2J8dJywRL6tyTR5y32D6YQzejL9Cx4FTtZYuydaMhrXtrq95ZCEbEZER6z3RYJpAMrjYaQWNXfSAHFuLo5FiiL5j",
  "key28": "21mNDSuLMvKULvmTBqs4JTCE3RX3aAGrYrutbtLgwUNfPQU4MZyr6b1MDSeS3mkq86Gvxo6i5LhgTAfKHMsq7DVr",
  "key29": "2aALu88psAgcY3x6qWA5Za33gfSydrRwAAbbFigKjmQDKf8S1eMwrWTHZWn3tXN1U2xfwDdcw3J9R7xapuaAJ7yw",
  "key30": "mpP9u8gT62igfaU58FvizEe5wg2Wc5FGhxwZp7mfTTbWfWGe7EsUr1Kpw7h9s8kbX6ywVu8gif9R5ogNqaEQugU",
  "key31": "2T4h6W5ri22wSJceLGskqYtPRiWt4QBrRxWPtRFUxxPbcXedziyTcSv7CuGRWty7XeVcf52JLRuB3rbuu998DYT5",
  "key32": "2Mr4enSqJs3gvt4BfaXz8AMHdTC15UAFtXneep9HbsycNUhenH1pp8SKPh8oniLPKG8ZjUp7Rq76Q5hx7h7AYYPJ"
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
