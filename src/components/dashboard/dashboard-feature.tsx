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
    "4r2ygKpN2J3Hma74rGZt2VJHJ8URktCMyZMGmvGQFz51KQh84vhCSmnh597ZRfnWjQWTVbncofPr8P7Z1Ne3zpKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oQsziSVCfWwUEry1R5v9MgS5xwaDUjWxiibbwU3CnLDd4xqKfCfWyKBSzuLtxABfrC86Z9EXQ6uVnyWjbQA27DP",
  "key1": "QDefzLeBifYf8KoxiqxmNVUJGqNhitcU2wEy9cz9azQamFFj8YDrh9BsJg9DJhM5mufE6XeUUZoPT7HnrtR5La8",
  "key2": "3qTqZxRLg5cai1uwyGQn16oKYvKKnfU4Wg8FgZHHBEuHUi5eHLVNVEMfZTMN6qo67zZhRxb8sfRP3rMtAiWUK5ea",
  "key3": "4dP64hUaXim1NEqnqEtrASF4JkEVGbqsybcKPnu267MktABoSZ2TGyskTwjPEUNpeYv2ZnBb7KwppxCCLAoqLpA4",
  "key4": "3vaUA3GRhQTszstaMbLV565Pazru2LiESvoTHUqJp7fwQp9egEtrq131nAPCF6Kvk5DHDD7nANenLocBdYBqHDsL",
  "key5": "3dS7aMFLfQVembmvoKPKm3bwhfRyTiVQPEG3zumbfbwMcoWurDMQ4S3wgsFqHL12BswSTt6r9TtopJ4twoTvYQF1",
  "key6": "4nUQBdQwY3FhuWN4gVaUHJnTNu4SSvS9jvxTerZUjMvuutq3XxfMqthGs3xv5zpS6zZgrzXonNeZmLJTePZvCfco",
  "key7": "2uZ8C85qWkLRiceLUruVPcATk7Pw8wEUab8W74AWx8m2oysDgLVX5uSPLpdsgwc7WDghCdxzxgvEUKxwywd4NLq4",
  "key8": "373bN21NEVGWNozsofMJYgbt9SynJj5KT1aW4ZUqMdyGz9CUZoFWJMuqx2zXw5fmD8FacDNpirhS5UrFrXjxzPFv",
  "key9": "4sqtKCE3j4YMUfaRpaWajDwpQDH72kGskCEbjTgxRWjGFuNo1wb1gYpbGzeuGQfrdEVSzT2R5GEXSrZULqTXgA5t",
  "key10": "58aKAN4SYDnE1Ftv2Cr6mm7L9FECeuFYMNc6ZaB8yxMchfzefMCXufGEsfiGfSVWCRzqj1AJuCRT4sQ5NyaWp1Ae",
  "key11": "21cicqnXGomZNX7oQYqxWg1ygd8PSv8jh9JMZyWWkfpMHxsRBecETJfeofGrWMUMUwWJthQk1D3YA7SfczYxGUuH",
  "key12": "34m8BihaP1FMfR92kPDo8XYHR7B7eXxhQM1P5uGfWojFmRzUETTSQtkMhgA2G21jUcmg1mimRgkcgMwyCFL8wS8T",
  "key13": "37LtVwpPTrJsC2FZ1V5c86edtbgdgXk2zc31QWsHs53UwwCfpu8zsBxxrMLYnzVD4x7b2H7XnQE8CUkbxQKmwyBi",
  "key14": "7aSf11NJiWUwrtuy63r4PsFZrbY2sBpygdnH1ppUjkbp5Tk5jWkRxzkxyU8HbamkPZAaedBwm7AH7paoKr1dSek",
  "key15": "2dwEBekTEijdMGoEsZCwGUJhMzv196KK4BnXV5X6BTQ32WWZAUTV7QBVRBVVn76vsqKUVuVQCsVt17H4bZWtk7dU",
  "key16": "5TiiAUeZzBTjFqDGXwqnLxHk6H9Jvq7Zb8BDXN1Gb9dx8CreYN1BA4pYF7vkdoUg756z8jd2DiN2V4DhSZnQLNNC",
  "key17": "3SVooNtv55CcpumyjmSqvw45FzMnv5pNieC2WRz5RUtwuvummg8iVEFzFYCX9XXTNQNuZKBufiJohASwvEe6jMxe",
  "key18": "4s3EG5b4a4AKErTGY1QoqMCGVXMwXEz4ZN2xe5CmA1ymJ26gBB4NRti7gbixaKve5sUhE6zY5aiQNsnbpxkzJo6v",
  "key19": "61AJDcVH7XVzkAUzHq1i2AE79riyDMkyL8kaEUXMGXCtJRCmNXuFi5cQyLz4GgzJ46BNRLZnfDFD9Ja7VeV8ibvX",
  "key20": "6xPgAMALwmpNWd2E1ZmTUe8uUKjf6bSP6h5ZghMAgj8qLANPFJbiB1c4uNMAVHTqp7JSWeRpK4BvwCUDMZBS9Z1",
  "key21": "5mk1wDjCSqrSYiSq3PFXephndhmqubZM4oe8SaftxwQG89w5VSSBoAvSrSRaLMiaPMujnVD2NJ7cN4NFWeCDXDPm",
  "key22": "3J2AEUP8TpN5zXZPbBr3uvZ5VFLGTPamz94FsgjogKuT2fiPsvkA7dkBwRTQQtSkADasuPNHPtxMN6Nxh3UpXaia",
  "key23": "4MwpHZqsr4HiakrNDSidukwB7PTxUjNUyhEsycuL5EGNpk7piErrrd7nGV8sRCcV5GYGJ7Z6x8TDVYx3wpN9QDWP",
  "key24": "2inxqR1hGfZLnnqTcUi7m8SEamw63rcNsHFHPbni9BfvZX4CoG5RP6eXToN9VArEXcQwZ17vutYC6hmyQPeLqnGu",
  "key25": "t6qqGj7GJ3V9nLhYNptcYSohSkZ4TBVQSr14Kk7J5DuZ8kibMNGd3ovWSseLuhsjuS7SJ27KChsHkH6bphiaM9R",
  "key26": "4CfPWthZJHBLD2qs8MUi4DSv4Jqrik5pvyrnMtabpHS7cUF45ZnvQmVskFq3PSJAWYrWNgRk5gVTB5JSh1PYz7rR",
  "key27": "31Q6JPoPrteqipxz5KUP8GwSLySkYYdwcLeiEuc7tTrKomocJb3CJ5LpK5XQ8ZCT7FKvd4R8jA8tXStTGwUFS8zN",
  "key28": "ekebaTSBX4zD4i4TRMruGAfnxU335mykLrSvEdXJCEw4pm9hMUbdQfTvck5CYxVVcDq41Lrm8XamDFqtr2hCRv3",
  "key29": "35tkYUHe3iDAYfYwci4BeqzZ8o4hKFKyBE8upyNNvqKwdmxBNAQ745Lzk3JM3qVVdHYWsYn3ztz5teMK5MEfV48",
  "key30": "5nmUjv62wiVhaaUYXixF6FuTMUSnYDpXKLPEjoPN3TCgKQChZojH8fYWWS3U667vWgP9kSr2mhfJQPGLUCxZT5Ev",
  "key31": "Ghzt9LgTrUaHSPgKcbSbMczohHi66cvGJ22AanijtFTdU4JwD9FhRvEoGHzT6rAmWDmb44iHohmu8wuvsmBFSKF",
  "key32": "3ce1zNVRLkMYzteF6NRbnQHw9DkaxiuTbe3ismvxy7kwCYJ8Amu7UsTFFZbwtYmACjLnSEJkWMKz2hp7FdHiyt7W",
  "key33": "4rZz3L5dwscyWzbJVcdhiDsKPDqYFjaGVcA3yBBYVJjPS38x8Q3meusqkwCyvutgu8M3mq3HHgaPk7LR8SEFpteY",
  "key34": "xHsC7iafwNxKG99Cgca5pPx2pZEgGbSEDiEFYgmKyFtrfwf1A6e1sYuQ4ChUTUs4MJvsYN821NB8ZZsbqDJdox4",
  "key35": "3kdqDFmmCm7jtx5xFhh38qWSDgr5akFtqwD9ubvLot8hNefviUqZjumsfstuiBeMdGhF7wqQfagfRLqj28HQ8NiP",
  "key36": "n5mAeWnk87v4BywEon6VSVsrh896nMG4d31C1gvUWP7CTCz74yVA1cd7bAqVqDnuY3yX6w7FezC8UG6uSr9KRmS",
  "key37": "5E9BKKEm6qH111gSWS1T7fzUGdjpwU4sK2LCfH7eujnPyktrrH9xSacjLy6E794diLhEEBQtpPCrwVYD2u9uFqj3",
  "key38": "2onxrXLvevjhTE8sWXb5DTxbVj3oGnYQReFsc3SJL8zqFMvnPKLFRURFtyqDUgwE8a9Ku9J38QwrAhBBFEZ1PuUa",
  "key39": "EguAy8xkxqQbZjypvwTrM35dk8qso3ivUHJnQj54zgMX2HtHGLr8LW4axtzc6ix5jDwP5ZxHvtsFKE7TQ3ctE2w",
  "key40": "8qc9rxh1AJLcywpwkvQgtmNmu3Y27CsGsZAu72HwN6qbogJ6R9hzDUJbmLPmyKCTi5H5nvtd5vWvgNJrkre9KDR",
  "key41": "3TLXTSKPmykhWjN2BoF1mskVi2tKFP64E2MWy8NZGPwSTHQQTRoFPsNbrd5ToAyfDdycQSumVXrMjK3RbfKJyxtJ"
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
