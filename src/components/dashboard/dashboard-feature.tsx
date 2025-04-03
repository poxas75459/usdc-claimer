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
    "5LRcEQ2as8UsJU25YLyQNoDCsYLi1YHgiaqWCfuBMBXHu2x6xjuWQ2YbGZun6WojaGccRDWizy6PZe6zXrNDR1Bi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49iq31MnumNjQakxBABL91CnTg76ioXmztPW2WQT1GXxxYbUvPhy2co3iLSrYtT944R3xkV4cEwxQXqzodG5LNrB",
  "key1": "31RivdQLC2waWR2Fj2EhbZX64kk1yvJW58M2MHXLPyErEeFwTYwEFeRPiKjsYim9DKoe796buXpQ5KGtt9Zih8nS",
  "key2": "3JRw2ppnG92hHvadg7e4UCWobikZx93U7SmxEzvEX6jzYjVhVb58p5ov8wn54MtGLQUSeScvX5nyQyDui6FMhq2N",
  "key3": "SAZ6jmdmmMthJizMaCGh9N4upukgzd8xmY2Euv4CGGZ2QzVpstYguXhktJgnB6kD4e8BaNrfuYEmmTRBvEH1aPu",
  "key4": "5DAvjzbJWdeiwFBL5XW2sdG97w7EuAYjoWf3MstFtVNNSeCtEsEBxHP2Potvrk8ESgnH4cbRUhJ72KNyCXWJtSJp",
  "key5": "3hzbs7Y3iiwWpdmXicx3K48YkCpDQnAM3D7Jvhi2Wv81fbQDcu1HfsLMy8jiwZ4mHgdcfYLXzy4ZvLB6kh6emxmX",
  "key6": "3dBzBga7Xxyyixze7fYQPDwCwJF7jgPy7eoBtoL37RfLpQCnEdVhGjKmNeiqqcep3giNad3fJQdhyfjAAtcicoUZ",
  "key7": "2Vb9Gyag22Ee4LDT2dVtnbawJXMMFT3ncw9He9QGL7SVyMZwSPfHJj8RBHKuCMzwTVy1c9VPoj31jZCNu8bS51Vw",
  "key8": "5AKetcw9BHWMVKuFfRnW84bAfKqmrVQZMsCqpGQmj4F6VGrEDgQggCojAFJGJdLhpR27SpHWgvTTX8zEf3FRVfeJ",
  "key9": "4aMNfPw7t5nuxqAigGXwgVcWWUdc4F26gHAxXPzpWwgEKqq3QC9npZrUeAmXu4JGyCKjgmo3VkLnBLLSMzU1KaFY",
  "key10": "3VSutKPuUDRYRR7EqgysUo2cd1hzgTePDuagya8KyB4Y6Aygu4qkFHTwCwQQW7TtUH4hcfy3BF7Cu4bqQTgfigXi",
  "key11": "4KNe4NnFvWRgQuiq7ufeqTmVRd5wQQZ44k5fJFqEsCu2SpSHzTLR8GMmuHSBVFbB4g4yqKTo27ozqWWNQssJJ43W",
  "key12": "3zk6Bjpb4MxzHVyciWuNDK2xKc9VxU1sSRHkEeQvKNGTY3PqJgDoqS2qitGUc7vwVfw3syA3aTqD87QT5ZAmi7ao",
  "key13": "3mFxiDFYFJRNNaTQtcSpVC324VQwpXWNYK81i8fA7BPeaHe1okMeNFzN3kHpY5bBDPyqx7AZZyi8Haa91zSVLv4y",
  "key14": "5Rj8psE6n369Mwq9WDrZM7BRRo98RAb5WUX5pxt9vo3cKNaVYVcDF5pGowFMpeGqadMHyhXyM81zMvF36WqzNnGp",
  "key15": "sr9dKrM67iqpoC2YiqysvCj6718Z7Kzj4gJBh1iVQtdo63sht5BRa5xmaSq4kvzY7jtdh6pePAbMpq19fViYuKz",
  "key16": "47kQw7qeh2iQ8N1Pun2P848SdX6gqN3pRvwWQe3nGcFzJqXU26e7cDzzjxDBP6RXrT1Gk3R4YLqsdHG29RJPnz18",
  "key17": "3iW86w1VcX4jHgzkbygNzJh5i8L96Fop97A3EXPFRLEK1HfSKyXkrRH7iMH3XvhDxbqVkGVT25HreWsVH9eC3pbN",
  "key18": "8o7z56wDGtUhcCUGt7MhBwnQTzDDkkY3USV5HKsMKRWqMSoVEeidADTVrCYp48KP8YkWjvAT4s74F5BV9QH6HhR",
  "key19": "DB57nh9co9B8S3nU32jVxhhj3tHDBJwSZG3Z2T4U9WWiMw1FLQ9PW12hzVNgPBCWXfpUxFSGZCAhjs8qYHTnbkX",
  "key20": "4NCfqZWZNAKFxdZQe3KatRwBEHSJvHaVDqELdxb4sLMNm7Ta22xMxciAf4nQ3ukzKmgmMNp9wfZXBNJWfBBj8UDZ",
  "key21": "ioiXzwFrwYUYtV7dHrP9YrjiX2m4jLND1cuURiFupxk7huboVektj5cqpyJokypV6MdkqBv57N5TgaHvGxY9eCW",
  "key22": "5xBHjEDVahEzxp2KmBMbBzoxyGycR7VS11BpGb1gXSRJtvEdLFYyHjt7wMvPweZCpTnYuTc78LAeAVYevPEZUrNC",
  "key23": "5PJ1NBGVeTjKNkDJfZRtbbA3kbHmqgiRTLKdnqLHRi9tEQdFzwBrv49gmX5xWiQWXTra9hVS6tRLAPjzUo1N62yu",
  "key24": "2UWYbwfBrZiHDF7qkVQC6zZ8RiEskjk4WACsmGKRmdYaePPXRVx6gCLLA1SN4T2Frm3izqkDJcSC12etH1nWgiA9",
  "key25": "3k4mwX6ja889juVrWbvHFmAqukVayzQjPzrVETQvoaHiTZfJcyTtDAGuB9n6Gnp5jTp3MpgZhoKrcmsBMPJnKwD2",
  "key26": "4HpV8ziykRwaUVfXAF5catrA2wXYqxzhXJg5xxiHiCX4JfpWagHUh2oJjjUE42vTewGjQbWyZeYD978PHxutJ6NS",
  "key27": "3knTEtT9chfxuvp4P8LxSeuYmqF33nsC2MjAE4RHfSd6ryqtsGYue1ij8mvwD8ADf6PTcTAAHkg3BEbNon5NtgKV",
  "key28": "UcyrBxU27dkTkiZ1gR57LGJpyehEWHmT7XhPHsGRzyZoyx73qVJ7UEU1Ent4u2iYp31FwqhnkEsAZbsNUEmswEf",
  "key29": "4zoQbACKWBZkEFoSX67Bq2t31196C8bKD4WMsDHJwZXHMW8SA3YbKnEu8VMj2vEwW3wVsd7YcVLdJ8xZ3vJPiRcp",
  "key30": "5DNooNHyh2r854agNnYGGczHBfhtR6HCXQj4ojqDcc4iwD92Hv6UQhjVTFASUoSH6t1NWcVieTN9WHMae3XHcmFk",
  "key31": "T27rsP8mnKiV9UTgDGeJyAude2wCNoVksiwzKiPC8oZPDV6HLkniGRtPennhYuaRRkoBG4kFEKhmfWw55c4rqmK",
  "key32": "2MGcMMhDyispApTVQbRzSQMavWehHqjntednpUHNThAGockEx1W5Xvij2rrn4o1n28ip8soGek6jzHW1DhVLjMD",
  "key33": "4BEaQNUJafZrjpLbK5Mb457QGnf85p5DEwFqjDokWRVKjiKZsLS217wBKqjSRE3Fy6V5qJvUmfC69QRY6VLB6iff",
  "key34": "3XhFrCuzkUmKZ6PqNPiG2Y8jCGf34ScXxK1P8u7Xfn8mm7c4kwTzXZsMKHcG2b8Xu1VUMFpBMfa8NbumM4zspBTW",
  "key35": "4eRe8XAuC3aZz1iHoRH1CWpCsGeY9ZHxjBMb9PEmNZfXLPM3kBA83MkcEQpX96DeCUaASBcwJem6HhWvBTaHVeja",
  "key36": "3utebqAXp6HSqKBZNNAH8RUz77KiRYWNq9WzCfg6qA8zLzKRzyXFWDgswTRFoLHUgwKg7BC4jKN1Ev4UN6DKUkU5"
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
