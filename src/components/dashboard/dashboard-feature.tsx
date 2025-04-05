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
    "5wvEzN9ZM8zZU1imfTRYHfXuYFNsoFiXisxuxzYJ42hVzLtPJPvLxqt8pdAp7o4ek61n2r68aFsKAdw9MZgMG8Ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rut9GcutYXfRfoNMJkuBafESG3YbFoEyqqkYmvZGos1vviWT5Vd3VHU9bLLz2bqdasMfjmJUgWMa14kqcVPori",
  "key1": "3yazvAdiFTvtyowTej6sbKFTSBwAhd8L6rZzKT5YzTVmCcnLEQ8Y1Cm2cn4qCruj2GuqMfRC43Dd1NzHaRX6RTGh",
  "key2": "4fBVbh1c1iMuToc3pegejMz4KGNsj2GdgC56zoT4CPAPbnr9JHwNGb1AvnWe2W66d6EXPsPoTpwtKm5eXHh223W2",
  "key3": "4iSG8svpg3yJ8kaLiy1cpL1xRnBskjYWGN6WRD5zw1bFcPc2xubEHw5WmJi2kuxK7AqvzKGytLET5KmyRxGvBEKR",
  "key4": "2rqzW4AkLQvgrsnyaStxCMv6M4QWaHZkdKkFKMkPkyGpTGZAkWnQhregwDWKiZLCJ54AHzuYsAitTKeMYxfmycsB",
  "key5": "3LNJEcCGy6ZaJie4qbSpfnUi1MtcYpWcoDLiwbh11pKuJzJPSuphgTKov4Ypi3oJm8JGuntNgUhRQaNQ9chPYoYx",
  "key6": "3CAjZ8xweRisSnD4NZZJCbaKrzeKuDsTjQMXrkTmXJnCB5Vz6p9zrx8UhAkRcDhNXunF3o6DFp9PVymAFHNTvJju",
  "key7": "3fP7VtcdwYmQfEZjBCfe7M4uWh5LTmcwD4tHqmTX2j85Daf1RZAUpBL9Chd6ThWnMCVZE5FkqCPMRAN5AzJjdJfk",
  "key8": "2wXSuYwdYWUvb39Afw67gkmgKqm6DMiPnhqhVbnxFKgQ13p3yxTnsonGvYX1FHdapGTN9Gh7LnXLnBSbyU6xL8Cq",
  "key9": "3mnErwSyoMkZFjJkhcq2DN58N931nETC1BHndKNLtu3Zg6DPsZnrAjiA7npQANW1NaEA3nyP8MJYYD95P4GnhJyu",
  "key10": "5khUeH9k2YnxwfFobUdKonQdoYZX5whYuBJ1HbNxnM5i3Qp6BiaNTKMT4VoYRBVtwV4rwfipn6UR55Zf8fRRq3LJ",
  "key11": "4VZ8apk3BdGQ4uMwdYxCzyg6LWd7L128DG8N3DRKV2ZCMdmNn39EF8JZAE3DuN2U99pfTuTr7zuuc8e51nJjzHxF",
  "key12": "5Dk2JE8V7Wv7VBickbqf5sNCBSefNqRSfBbcvAz7N21oy6DTKiit5TVjV7C6kFw5HZAZjuzJV8enbMby1RJAt4N6",
  "key13": "3tFSm8wuXMRHVvLQaEU9tXa42tdPrqwX6x2EorM7SFrx96yGDJ2yEJ8UdXqJRurqpXwwA7wQyXfMs59vBHLPdQg1",
  "key14": "4ePghwD3RNguytGmh8K43Dg6gtz2nampWKnPCmmJAXA8JpCx9qLFvHhXFPLy4fuCygUSj2Lx2QgqmzssfRTzTWAK",
  "key15": "3LHZxnP41MGvsQpo4eoxWEhgk4US5mNiNek27iZEYsgKXnNqvDGWq2r8BX3WRKaC9MVpveS2TF4iJBWW5u3nEYaX",
  "key16": "2fx82HhWtfUnkpyWemsHVboZi7MHxbCZ2SkY3uuSjdEQGqHD7iNUCW2nABbxeaMthEHZPwQ7ybgkiNPRfts6q1rH",
  "key17": "2Rj5TV2QVv23JBr6afa9WFcmVzfwU9bZXinLDiajNyphmEWvmdefw6pDnR7z9Ufd4GEWZzB9pYNY9MuqE2rWZWNU",
  "key18": "wRdiYbZgWY5hGJBxRgjpKghLx1PYkacRK6BCTjowWvxi8SpeE8vZzcDrgAcceLA12cFSGLx19BGoXNh61zS33v9",
  "key19": "2yFA2sLdahqjf6WgqM4WvWLfLTdg18F9M4QWygS8iT31YtAP7ByfjyXXbg1BbpFXzWUTJV74BjMrfAtQPbbax6X2",
  "key20": "5F4rGqyskCGwrmbfyt8EpcLmkummxvdmfTi5exHg5bd3UkmyvJ4LYuYnDsAzsGGe9petQk9ttCoVpttRpY8K3FRe",
  "key21": "siodF2EHNThc8Lfk4QYD9E8TP7JB7mfkBvvnSKKntndb8FxKnAJpdbhKrpHD7VM87FBWQySisXiLCB969i6xJ4e",
  "key22": "3f3REbArHpapmC2mVKwQViM23HZWLzXqiNBtVpgFB42PXkFAqPvQvRmwCFWdtVKLcaZ4L8SjTSUYPJK3bJvSEP1S",
  "key23": "3iLYipodrvVdYoLcoHAXQ7ZochbEshjkRWjWMqAdJLNCNzTii6iqJ6Sc4UrFWwZBgQy7GgvgVYAy79FyCgSKXX9S",
  "key24": "5Ds2DGUpzMvTr9MQNQFCrFv9QafDTSPgVSFniWdbGKaDrX1nJARr1LVRoLy1LxNjFeex6kc5m876oMppwxcR7u8G",
  "key25": "zpPuDwj8cF75Fq6MwhLq66cikU3pWSGaPw4Gx4Ltnwzb2KwQrdvr9T4zfzVYWwn2eUd2pmUXV5z7TEzgVei1KkY",
  "key26": "5E5q4X8YNXqS7QUsSWK18WkEiMf483ARPRQPSF2Phf1DH96LYbtEvzcHjCrfP9V3GHu9c9LsUFzDupDHgNkBpsmU",
  "key27": "5qCy9BCg2MBZwrM1AgXgNz9qze9BU29NVJAoBWRnpjyxWi5F99fm2VKtHYjPf3N19ezkYFh6diUfH4dvdgKTBG74",
  "key28": "3zsz3ih4tr7dtMYkWhg1CPM3moUVHxfF6YJHdxtpjK15sDsyox9Q1nzSFXJwFkkyupmqVVTW89DPhxMHeEfGcJBG"
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
