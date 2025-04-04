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
    "8hU6aD2w3ZegoWNnwn8FBq1tG9oszBT1NuZY9DXk4zQLxyydHiXws1fVKL6di3wQn9QpxGXD76rRa9SzkeC6Jpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TeHVq3vMEjvjd6BBtuhoL4sUWiFLNS7LjbVJEhJpiiDxF2Li4HSrwwEwyFdRwJ4exyEigLAHySNtf69J5QnYWQa",
  "key1": "5MZUQ2LdCzvCgJuH5TQkePRG8LmLoHxiP5De3hdWNb3g9vGLdDmvkKNBGrTsDxFnQEnyaTvivEtcoeacWwuU4nyZ",
  "key2": "368kSbdxTgqz11fbKsFdooPsjSk9mAbnPuWZaufSzCYRYgteRfwDtct8AyKmygww3bYUVJYdxNeqfcY3FALtKBzQ",
  "key3": "5gnSuKkyPM9tChJ7KN3nW7jDevkJU5eEf7pVnnbUvbHZMtQneRxfKAhQZ22wAPkxeZg5vKRvGFtQMEbcxHKLCrFC",
  "key4": "39udMsBBZazdDb2jQ4kTKC7HZ3pNeaeRjk2qKFmDXYwytZ5Mj2nS7W2rAbQJp6ewKSqCXadW5QUBBGVYuMts6Bwq",
  "key5": "NBPHpxiVdWgnTu5Hk3H77LWo1mGx6c84EqefyapTBBfNydojtb94zb1nuk5M7W3qDvQf8bZ4WhCLf3VLdpDNUR8",
  "key6": "5GDbXefSyY5SwZPo3hi5zv5264fc1kmCRtGNgRW4su8zB8nTNNZ6Y5JcUGvHk7wyuP4XJAiNUaMS1eegM1mfqzUk",
  "key7": "jxTZuoYLAzs47PLPKKKsrTpvecyvyhb7GrQMovD6WcmwH7RCr99uZFUMe5rL4B1xySwR9vB8CjeNMgwGtzE9Bq8",
  "key8": "4n6ihDhu7y9X5mKDMyzu1jNcMCUmX1YcNdRnoUQ8xeZth1HhKccKUaAio1N6Ae4wNDRr4WCkucUVAMKbD2thcZEG",
  "key9": "3WAoGgwmYMUT9LrnVFGhX36voy9USDNdbg1gjjKP75Eckd3CSkSF3vddcfBW6PJV82wEdd8EgmtyPu3pzMgoyhde",
  "key10": "3nVhpL5LeJhCY4ZgmzRSmFzY4m1Lao3nU7UVWJh5sL7oBPMsz7HkcuDWiWVneHhV8q5wSiXW41YAyk7qXnad3nWy",
  "key11": "HhcPuXJcvmMksq52sqLWbt65gZerbCpBXWk4PgmcWuaD2fkCRU5SqvcFNuS3GZUKjZjRdCLcQ2cKK5ABAExLkdD",
  "key12": "2XX19s2gyvJ4DqEqsRF4Q238v4Xk98mY2kpXwBbg2n96ZMYihXh7sRe99hH4fZCcmsaXuxYmEQ6PWPzhDQ6eQHGr",
  "key13": "snaW4GXWnLhtJJGxM5xvYhtzEVf82dmwcTMmM9kd15vzarYe757dJCL7YC8SV91javXgavUi6pyCEJHuRhaRFbX",
  "key14": "59owmCe8naX81xsy6GLja7sU69LLHTeTjhbF6JRt8MrrqCrF9gZ7RryCttxPE4SsjfAaLUGDuAHzkDWeK8MZXfSK",
  "key15": "w1YsQn4ds87z4EtnAv67rCESJ93sEshMH7Wwa1tgk1wTUcd8TEfrsrQGkyzAsj6ZEo5QbAkSRFDRC9VpmwNhUJt",
  "key16": "3dBMRmmtQd13mEj7M9xUsVomaukVTzsqUQnaRy5wAeEhRLUoWfAMdPDgLmySfCFaigPxdPGxYrfYJ6Zczpk91erS",
  "key17": "3wZeNiyTHanecxzGFfPTYATqCmneiH1yMGZKSPA8qxZdViAE4U5byELRqLwTAs7mEBCqu7Ye3LQJ7yHmu4QtQtKR",
  "key18": "4vAtsQ1TQZ6xhCyGPWAmen27uMTQEJfdZy6mGWcLNrK8Mkyr6Pj1jxZFUVru8JLzjsG76KncZjqFqRrD4naCKxwq",
  "key19": "mY238n7fuR4dexaoZQjsNspYu3tuCp9KkCXbioY8YFVcxgRnJCQW3VcFCFNFdCPdjUPFNYGxtt8Gu5Fk7EAa69M",
  "key20": "4nauRVYJrumLCSxMjKBtqHsoKcddfmKhfEsU5vyshi1gzUtMbci8K1s4jYGr59fUvdWggboid3ziP2H7UM8bt5vM",
  "key21": "4Dsvx3R55WWKmVcScDNUEngPCLCq9TBE7H1HJbDTQ4XxvrtuXUaBVXv8N7LyKF9CGCMUkA4yzMRcoj4TqqEngk9o",
  "key22": "4Dw4Ct9Af98pb4bhhrgi9SNNEv3ao7KBBGfNam57wMupA8vBi8oNJJ4DM2GSQ8tRGshcUB5ssKkPfnXeNnEQKPQ4",
  "key23": "ByMkmVR1SLK7UzpoXx7DGzp5FdmSFMoY9UyzTr18ygPjiMKgQou4QcshcG5Cna738iFpc3cnSdJPNxoUKMWFXNQ",
  "key24": "4iXw63yZdHFQLUrZjXWZsoiTjedzo5Ck4baBRL8eHTZyAwhieb11iiA66EczYMzPKbt5f6npM8kox6ACaVKC7rXd",
  "key25": "2voWrNS2Fd227jM8EJBZNzWJVLHZdWP97mhByUHgwXmfUQ5U3UrDCfp6UCkTzrUqUtLJvqTrTrHWhkmPgjSjAmTj",
  "key26": "u4Kz4RdFY6aLQJ6X3tEzUYi4uJ9rc5A9dZhomqEvS9cjEDM51Hybu6FGRSYy2sW5gLbrpxxAmX8Xn5Z4j24JQP5",
  "key27": "5EpJQ2cC9M3R4gznYQxBpWzX1r55badDsnCfSA1hjhhesez8TjM5b5ePCRbum4RbFrRDyPdj7DxvvszZFBiB13M5",
  "key28": "49WvskaNpKEXF9TjLgndu54HCumv5sVAq6uaDzapt9Uk382u6sgspjMHgBx1y3Dg8oeUDPQFb94cXxKqPtmCJZDZ",
  "key29": "2CV5rm4uxypt59Retv7TrGC7T6jf8wxefNJrsNyY7o6romi6bU7GU2GXt72AdFcAcMYXJCqyJ9AvRXhD8jzxumhd",
  "key30": "2QovZKWvPUtPxCBZcTdybe1A6Eiggkh2yPdWMbziTUJVUfr1tLNEKEVZzHQQABwvLwDW8vevnJw2UUMqaa2aT52s",
  "key31": "2qe8nu3WE8rLoC2ZjGakF9XeWKeeAxzQMXoTVrZF84EgVDTm8c8tf8CEKToMjq25vJ3Fw68N8nJPSxKnsSL5zXpP",
  "key32": "66BC7ArixaGmMERmXzCGfbJR3Rpgd6Pb6GD6qSxCnzcBVVigwXXLosNkXpxn6VJYYEiJeCaSvzn8Cv6uXb3YGsTK",
  "key33": "2p6iP69KdsgEygiQAS61VoihkS3qA3Gs19aiUsyDSvWHJcokPeHifbTSv81tkfEn1SFBiUJvACS7RLRgdyvmeMfo",
  "key34": "2qq5XtMTrHGtuVz87j3yXCiDtKD7MrCm1YX4CL1sMsVmMwpFTafqN4hCo8t2ED4jtxySfJE7j1yex85SpmqediiM"
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
