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
    "4ChJEUyACZ359U9NR2VNdJ7K2RfZcRb7RXT3yuPt6QWQvMhRdqKe1KpfUpdui6KxDp9B8AmW3JFDsCqdmUppbt1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65tnxSVAwzrTdAcm4yo6oWx1UarJ7LscsNx1dBM4usfvkvsZ2JDY2N81ZXxbGGeZEYfHbNos8nSipfu6KiLHv8uw",
  "key1": "4vX3djjj4vE1n8MQMNB5gNGsLqZ1RZqGYkZfxt5di9kd2H22LM8j3WPTEQKzT5tohNYwgCLMJjhqps677bnis32q",
  "key2": "YSibTm4g7f9b2V9YsyVDkdgbR1gQwLEFDz2xskRdJTaKmhRfrkpp6AWPsUspA8qU3d8RpxzTLzTxyLp5e81XGaX",
  "key3": "3pbhuyHMa5fyYjeS8sViBYfyPiCGtEpQugH4WFgXhofiyNBcHjNhaPAYPri99P4TToEHAn3TyHWqZGeg5nxmf8dV",
  "key4": "3qiYt4LsS6NYEEbkajy68SSLyix2B9qhCb2RnM5ePVoW2iKPfPDuWgE5qUD6wGdrYp3pmwWpcPtYe1sjYBJUG79u",
  "key5": "3RYTgAj88QZqoyWxuDyL5ywJKvi4FvfqoHnqPT3NgYbRfpU7oysGbmPaQEpmUDrHygD7DzFrgGho3FchNwx7NQfH",
  "key6": "4RhB9ZV1TLThLg4tts1QGQx5Joo73wJhFdjUqVx4eUJGNDJm6HrvcaHGwJSFgeJ6a9cjxofde5iaa521ajNrbVX2",
  "key7": "49aMuZ2cmu2ZRVf3JfJJRDJ22eiS2HvVkRaQ7QCCkPW3bFv7XA4VeFPVibpEqigQYQFN4dP9Jta4tF3YbiLgP12E",
  "key8": "2vL9VM9WnvWLXDTgy17GdtTPd7ZGURv3TWkAxzNkoCTCoDVuz8UDdSRg9Sntb7ikqGwbEYaME8zPsHXSUXA59aXZ",
  "key9": "2d4hppeVAoPJmGzAStra5rx3FBF1r7wwHag2poMgaBZXHg811GG8e26uCmecps7XqfBki1twpLeRGikJHAHjHLo3",
  "key10": "ap2rfXGUARCzS9Qi9ugpvE5KUnWYEJ24srDC9dn7kc1fNLNAxV5yqC7dCAJcxvdf4gAZVhKDrURqbRCpGFjXAK5",
  "key11": "2fQzoEFVXYSSJbyC6qGHQXFpDQMDuUH9TaWrAXQi6npjw4ywjgqfzB91pPGB3PpX3NXfLvSqktXH4JGgDAVUjTjJ",
  "key12": "2CwJHkWCmQmkUt2ZRVPGEjRw3HfA4t3B6rhMz4PMyj9YqSuu7edBL1xzWNapk3KJvfKbe6hTETXJtnnTcqRxtYA3",
  "key13": "22ic8MGRqLDChkHxsamgJcaV33AxZGBgdrobU8SrnD3F4doxab9HBNmgXu756S1kwcas75Ls88sPrnkRp1PGwnY6",
  "key14": "2zBXeLiT5yPEpmCWnQauU3TFtRurukeNxdHP5L3ygunbSwZKLks5FvinA1bub1WmCxUSZzCn6UVDhzQS7pARerGs",
  "key15": "4sYBNUApisoewBe6BCrYPLDgb9GxCcqzGALNPoogPfcESNoEhMQNK3ciErFSCWJepqa8bSTQNRFyNbvY2TCRczWS",
  "key16": "63sjgeAdfkhFvJRBQyx2xhezHQ1fFV7YAMRd21xakvWWixLSYp6Q3jmEEGzAkih5AaSDPnrF4SqjFDgrVTb8avAn",
  "key17": "5nKsvcxB9hQD1KVjpFecVX77rWcDRgJzetTmvkbV9jYa2fFusNJ2Rnw12NWEkeWJuozupVRj4A9M4qGeMZb9EhKp",
  "key18": "3MMYrLJpCGitQqk6rBLi3URgW1szhf3b81uKPdwJBnSgKr7x9Ypg7uKnGcT7CxciWb4UgbxQ79Ufw6VG8dGT1cfV",
  "key19": "4f3v4F8gdGbJxiu6odfA7wkbCRHRHGuqUeLfNfnjnsW1pSXqAGNEdE1avsA9rTJ8sMa1vkvg4d1tyEiuvtGLXwV",
  "key20": "2pSNzZELmUuCGLCRshG2cK812GgFtzaaTF9EAHmFDAAKRxSDxcYtmJJz6PdzCKcCY8wPVNL2jUb31EvEA6AjGcQh",
  "key21": "419a9rPobg1utR4JT7v9Em2ovyLDCy8MDM1Ztw7t9sYgHTMsM9kdJ9om3BaNaxVyiwhy6dx188PxzmijFfgGgzC7",
  "key22": "MS6XHbxqkwgzfkhp6JeD2w8m1MxYkgorot371sZrLZoxvfKNzi2P6jEn3oZNwMM2zHHhA3WtE4EwXxMPYZheCsx",
  "key23": "rMxGeyqGQWxdLG74ftAaYqupmYHA5oMPgJJNZCALhAThqhczCwQJ298vzAnmFjdj5fPmtCa6cush1bEJeQRMSfK",
  "key24": "aEovMcTS39yeMR6mPxQmWzFfKaNiwVDbBeT4wVJQS5fLSMottcFfr1iPdXnf9PWNQxCNFuEqTCXPUr4z1o8LgbX",
  "key25": "2iCQtqpB5y9RX436DGMn7eF39V9efnE6ZTKTSAw5yVQxwAZoXdPXuDS5XtUCSGvBLMArC7M6T6r3X3Lxdx3gfd46",
  "key26": "QASiYkLGxPFvikejY87KVLHicVYwVxZ12rUivfwNfecN61Rt9KNNvNdbsa8uvqmkqQ3EPVnAJzbMoLgKT9RWjot",
  "key27": "3dpnzMHdouZD2v9YKUMcxBE7hq7uFiHksHBh9fGnbZMDPTTAjuwgPafkDzQNC1saY8MEEkWHT2D9W56RpuUpvKy",
  "key28": "2fLc6Ct8efDS8zb9DhGZwS1sHyiH1tkD9FcwM1AjMDbAufs4J6yqGWnw26soNt58NKmSExSdqccgNCfzuVMPLZ61",
  "key29": "3dnacVCdV6uar2vhTLwbomzot7LqvEHCdMcWAzrVtYxAj2QBBv3pcaoFwfWsoWJKBijzxMSphoi8oKhfmpgjVdGw",
  "key30": "5GbrWBsXbiDa6KFt4iv8V1shAZwLnfuNhpMQkWohivyNSS6byVEsgd9b1WuJT7PrT35CYuKr37hTNf3tm2ip3vz1",
  "key31": "29KXJMeQyWPi2Yc9JgFQ51GkmJpJsRXSTfJacaZR7sFSyNixP1a2qam9SMHBEHc975892s97m6TWstXpNHCvvKZp",
  "key32": "ZTmLp1nSBs92mqw1mpngDuxkJGb7rrr5RxFt4PpehPYyPcCK53LAWBykrSdifSmDBmBA9L7s12cHLTLUZopt8NJ"
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
