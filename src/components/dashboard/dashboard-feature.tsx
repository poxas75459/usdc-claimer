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
    "62xjFKohBsSHptkeA2zjy82MXdLLr18PsmeGvDqjobm2QqaWZoBqrxRYrQF4BVFWDNjWpU7Su4881atxVZ74diES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64hc9GEaHWq8aNHDTikCow3kBx7LAg1iRseR3s8nmFhsDNtvXWS8VW2iXXqkcz5KHzW13PAiAhzNeeZAnR4zoGCg",
  "key1": "29e6QNm84eQ7G3CroczAyAtvqoAJxYcD8GaaBQ3tjW79e7Pg8F13GtUZWCrnwPHjNfAYxqonQQEyJTbpcqRhNVf5",
  "key2": "3SPgXvVUaB4Kkig4dqMb3iYzjPui7zYvFqR5QSzPw4FKFMoDjzZhSrogjqshBJNBe1uLEq6zSwwrjHCwXyB2u8uA",
  "key3": "7ryS8yeuuLWbuKzZJhL9YkP9drn6bp72nf3TVxjni2dqriy7NGr4q4u4rkgFiYnbaefeJfQdGownzbcc5c426Qy",
  "key4": "3V8ycjTvwed9Jbsh6cwfEbSVHYK5KRiBU9m3JknFKmVYUPUFM1uwyvQyjRYBnv49UcCsaHnbX93aFt7gyRHxzjC2",
  "key5": "2bYBf1ScL69aWo51fMfhYpdg5XdoFB48Ypd1kn5XGXz1BT1XNX8c5thL9BCb5eXpchsiraDCitT6sJzmPAHjymQ7",
  "key6": "4d2i5VKJU4xzjCmiyuvT77PgidYNfEpsDyY1WCBuWNnyEVz89sMSsMduh8uM8Bck3UoapMENFmTA1vjzpDscVzeJ",
  "key7": "2ZRs56m7WTHVL9UCXx2Xq6NkmhLUqkvZESy6eE5t6V5MkPTTJVsetF43ozzfRcKpsqAasQfvNUxC88MSWAbrcpt",
  "key8": "57234Sixt1aDjP4gH77eTrrDjEn8snWAVbqTgYpKJQAKPCSnkLfWHDrVmc6yqe7T1JG8jQq9vVMVPBqEdmacao6w",
  "key9": "7JUyAK1iDTvAMDqo1hGs4hQCmMEY3xX8eitWUXNPjzSXoggNB4bQwSYyYvnUp843zive4G1sg4tXQ2ykx1eGoLv",
  "key10": "35g1YMbAukoq9A4HNNZGR5HHn5238L2KACBhJdxUkUZDFNEGmHh5YfJXnitf5sCsL9QwN2N88EiRLH3yAeMt2HPw",
  "key11": "4vsVFGXcwgHRg9jUEJtCy7owpWNJ4e5TPj7kJGMoygeVriRnAjSyLiZ89EH7FcuQgAGJwMFA9NjhouwQcrWzR68B",
  "key12": "5FeMPiFwLKpb1PD9uw4MhukyN6DW2PXGv3gwrQAAc2Mh6F7RBvn2smqEdExyHwSiAtt5nnQ3z7bCczoX4Qtvv58W",
  "key13": "4juyDHN3TK8RR2rvDTGcMjPiCJR1Hg9pBAwyRUP1WPZE3aA39AK3PedcbLXnch6A5KpskLQMTu9xeFBStTnm2hJv",
  "key14": "3Dbt37iMG7rNwXaaRgAkPJ3CX2u9f1C6nmgUvWMMipcKKc9L2HfzYd2exix4ZqHiYJgtVTfANzLofhtou4YeG1p2",
  "key15": "4wry2L5cxWN6N3ewD2eP914h2hEK8gzMkAKmi3jSRu6nsD7PqB5uxCeUZXNGcv7djwXPztmcXaqFpaTmwK1cyCFP",
  "key16": "LP3ZoDiWaoWYrYXGVVpooyDwwCZUHmP6bLbJbaFq65py5WvXmGzccBZTJzF7T9LscgTT7WYpEXR1DjdUupq1mRh",
  "key17": "4M7nuyez5TwSM7HEiRefVp2WVBKYehWf1SZrb16AnwrCSjGXQyMhCrLaD6E2MHexkhawVKx1EeQ5qVKcE6vE77bx",
  "key18": "3V35ty2gQABRVrLEgV22iCiLEAfSJ8iKxvEiFqpyfMd6nfrPzuhbkgcQi58qHQeeSprWSx2pRb8zY4XU5G2LaWJX",
  "key19": "316b4auW8uTw9FCsUUtvGcCymuWC63DFAgjoKzp9evbhaZv45t1sMr3gW87wL12r7AWjendFemFkJDzuW75AZaFY",
  "key20": "376XY9SxyYNbGxrMjev8b9suD2ew8zdhN1MChpRX1KpF8RrGPPp6aZ1MtgfxCUbuAjW6rC4skf3FZCKhgcsjCNvg",
  "key21": "2vQd7rgHYrZ21Ep49vf8EDetavXPowJUoHnAh65hYVAYToREq6znaGwc95CvttfNpEH95cZLw8GuZZZ9F4qw9cwm",
  "key22": "2Yc3UqN3mZdoQeRzV5k643Ntp4DbAUQrdyZ85hVBd2NZVsuVS48bNJFXU6RHSWD2YEBZAcdK86Ja9QRNeE8ZMRMe",
  "key23": "jtkRvhqkJqf6nmSir8seyVqr3ZgaFiXvtfhb8TZ4dfSxACUumV7U1AVQFYZQNs4UomWyWkYZ8qeX21uDgixZfbr",
  "key24": "2cKWaDacTiAtsfuqfwaa73rfHxPNKZhEQpazUHFcEBaHEQPwUghrit6hReNhFkV9CfKaz2eQ2yjBj4oyaL19P2Ad",
  "key25": "4Zg146GDhZoGodxdVTACPnTNGbsr8DydQ62b68rMkUkJLXzHz8RduXxLTsVJ3adbMn8dosnQFhJBpnzkNyhvMiGQ",
  "key26": "2J8jAAEAghYgFYW5fUwZPSCyNBTE51LPAveC6ML5smcABx3dGtn99LDCTKzygRwTLmvZXgkf1iVjNpsps4ychgq4",
  "key27": "23ekuStNHtNiRVYV17D1nkf7GXPEbmcnkmAx9rVwUwt1VJGPKEnqSrEkMBRSts8xo3dn2TWkyWKFBH6HBamgMSyq",
  "key28": "584qY6YFhy7LAvydAKsgoE6vdthTeer4L62gcqTXG7vTrX9WEjGSEQG3gdmGrM3zcLUWj3kCScxfEFexrtWek3As",
  "key29": "L1H41ekVeJGSK3AKFtiEDQEf8Gzp8XnU9JMRQVG7TLTcDuoG5P5iyBztKga9JeUEsnd6MA8w3HafT1fmBudC5xm",
  "key30": "2j38qQbYanAXPtr5Jzvk6KJUiBkDqtWcLR9XYw7moDqAcc9WRKjEJWtexsnPbF8dzoCj51xjWveMCJhb53aFRd7q",
  "key31": "ttH4X222vwtTnjGePxMUGNp8EFuuNpXrV4sWCUbdSx7NrGovTjfhUvWjALYVXEZ9P5d6ZPSgMmNGxATRUe1iE2m",
  "key32": "4g6txKvuH24cRaiC2RZPJEZ4Jieasdextk7sSFyEGBfrD8cC16JyXFg4aiJoL7N6CkVZvhSCcXXQN89b9sM8pYMA",
  "key33": "QerCG2YHvcjtkQpepX9ZNtQyM6W24TeTWJwH2gd42CKAo688fkfWpi9Kbwo8bNXjaD433dBPYQjzGA7FYuktTJ9",
  "key34": "29yFB47bBsnJooZgei2ug96buSXsWSf8s9LA88m2Kex3QKLudocDLp5fMfHWejtW9oXeXZTSUV4fiU88DUycpcJR",
  "key35": "5q1iTMpwZiWNkajR6Nqy7Xyi3n8SAgMneGQ6sERucjptCGfYw557pEsYLrUAzNo4ZqF8vrDvH63NvbNop9rfxV91",
  "key36": "5r55hSMyaJKmqSJrxnxd7G8k66it3wQx9DLeWqHVtRujVgz5scDfL9LrDZVoM5LxRYTxMYKj4mumbik2MfuhRtnb",
  "key37": "3ieWJ8giYyEoqB4CDPrFfL6uLJHeT92Q7ivhp24bpqR2yRAcnYuZxwERzjqvkfqNrvRwXtbnGiPWjJupTsrZyjtB",
  "key38": "3rus5QdAd3aFfkND1VQ8QrzjHomc1Yx9o5veqGAkBNkLwVs9mTpDKgQb5Y1MZPink24A5PAQLQWCZpVYgyLDF6vq",
  "key39": "8DTaE2n1is7DtRa25T2YK178zoL4YKpYSGgrUTQddmeRqTcLvkjuKwu124GzxH5aPUqWq8CxEfiVJD9fp7NLQ5C",
  "key40": "2wdwJCDJ5gwip2U6AZLhho8BLNojybvT1DoNftEHP3EAVzMx62Xys66YirXzsLedmgNTb3Zfx7bogbm3aUeJBUtc",
  "key41": "bwVthPUgkt65NA911rTTbe4B4cStXx4HawPEP22Bq7LDmptgx2VAPwGYnnKLmw42KU3N1hPtq2tmaShbFXV8GRn",
  "key42": "4zBSM4Bq6a8ZywdHXd6Em6gWdZk7Dqw4gdzsvSYBuWikeJUxg7EHQxrSL8oQQf3Qsaosq7hxmWN3GKsLpaMiZjoR"
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
