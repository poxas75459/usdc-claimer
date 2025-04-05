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
    "4gw3QJBNNaiBiR2VYdeWme4DJBrpTxBRLJMPbQ23xWJLPNHEPqMMJATwsiCUofPSVcfYJpgyP65gyeZHskjLNmJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rpQqM7p5kCSdWWxdxja9M4mLdVZh9JTu4SUEB2be676TnZ4df3HEiMX8DC67oAXdATsz82GtEuYhhQDAKaAGwiQ",
  "key1": "2WQnauT36t4eCfkMBKdYM6mrzV1cQg2sFunqJGpDTAC4F7Sx7vbBscsV9MQaSfwRceGBjD8Y2tTTptT8gZ5jzNT3",
  "key2": "4FuuudXX9KbSG1ZCRXsSoYdpim3g9adLtPs55Me1kY3ZXrc81pP2uP8KuQSh2mNYrYBmLYpjBmRms77pXvscDrs8",
  "key3": "4SrXSxX93gmTkdnRvcwPwMJKSe4funCkwKV67tSKAKv6mSfGDyV9tWFNdvyhCAg8bnPTYJENQRyys358stehLeNW",
  "key4": "3KatfYdD314vhu79qm6HwDExwTTvHWe5gpCmAhRHVcd699y4kH3U2VuxSG63WKJtHMmTStdrWDfhrT2Bsa6AJMP8",
  "key5": "3sE32MHZRZQCBV2x9YicanSsz6kcphCzHRjqhzQrWzgdahnPVYyPcqXGw7uMK7yX8oDMN3Cp8dX6KXGd4K6oSJmw",
  "key6": "4a7WwzeHeWaD85fCZXwcd61wB1RDEz8yDkwe18GrPW5rH6mmQY8TZuLCEHzLy8BctfNTsfGNaX8cojQTMYRW93dT",
  "key7": "2VA1D4sppe19nfvwngx2dCWtEQGCDRBeDMhWdbV6VvvQ1ncebJJTqyi9FQDdEUZCdTPM5RRpDBYK5UziMonW63vr",
  "key8": "5oMYgy3ucHeqbHX6rpyP3MJm59uHqWxrba2f3Vqmnzrv1yoS3L56db2wZ9fSzg3saZAZ57WT3LJAmp7Nf5WADgZU",
  "key9": "2SigjShFzLnqVJs8Y2gAQG88wfPpDz41Ywvnd3bXgDwUaa429CzgtHrH1mGgjMMCvPzeUvo2P13QNaFaZEubgPh2",
  "key10": "5qNaJ3ZNoFUyyznMzJZz2nkDVsjQAyuV1VCnes9vEPbxygv4tCPmMf5onKJjXHAeqwH96weGwKZG2oJCB71ES5GB",
  "key11": "4JSdS15M22xLjRU4AZmgXLmnrHosXUn21AfEvodaxgN4nosiuGNwvzveFSuFMUyKdTbMdtiw8JTCmV28yS14xoyx",
  "key12": "4CAeYpwM2tK7hS7JGPpyUfT8h1Xiob4Q17qeMF2qNLv4sdFRGAixTAVBDkEgzGwZkWMwtcQSMRQDCMXAqd3EBBZc",
  "key13": "vMCDLQ67ZHATDuwEnJwTDqkpzhj6SnABzS8mi3Q4AoJpyZwcZ8TutncaN4J1zTeiQz8FngCjj5DtRbDWMupSuPo",
  "key14": "5uxmJaqhJC46Zd9Hax3S1tTacqhj9fjXSy2tmtaZqSSxf2vAWUQcRzAFei7zaR3x3QDyRMJxpJVKbLoSGyc9hSMq",
  "key15": "3v83xSaiNXXbGLVcia5xfMEpP2ajizcNxMQFEaDCHQcwGHM9EQQsB3RYopifjHBNHGpgoRXqJQFzHtse4ybexnZA",
  "key16": "s2T9BNHChfSisvRWaXymLHc2i73zZ1p4dxxnfmMcXzYYzW1bs62YuxR6Lpy4jxC1purFq86zAkhAKxDizaZ4JR6",
  "key17": "4EU5uuERtW4Ny7aA8csF2MqK2Whaz8kjmjdkb9yn3kqkDifbtvTLDoeDAHR4B18RbTrqhwhWYn1SkutyW1V6a8LV",
  "key18": "3GKMzPVLxkAEsWZ9qLfnpBCF38rHhsSx2xhcLffXVbZPju6sk4cD36hhVN2u8JwK6fbz8sKzsDdrhwz9UK5LBc4Y",
  "key19": "jd1Kj9WBWdxdHJhBq6stQG9TigXsPfNRbb5sgmJsBDP3SRBsoj4qgdnMK42iHUbuGgJsU8EY7gip4xQLt9BSgMY",
  "key20": "5QLzfz7QtpC285EEkV2AWuXv7qZwd9TnMnZmEjJFU4fpJFB5EULFsNe7v6wWz7xYgkTV4JnPMYCz8PygxGrfymU4",
  "key21": "3HqvP6TGyZ1vAiFBKWsBSHBr4LSQvPnfRoEHgThj4Sa3vGCnfqm9ezWaM1MszVFKGRrbLHyfPYP2me5RH7d8oft8",
  "key22": "4b5LZ3oG7gw9iZQPwbtznAQMyQuxCeeSu8sDb4opGV7znZKoEyX1npipeudwsnrzjSEVF1dkxDuTF15neCtM88Nz",
  "key23": "4xXuGiCuB4U6Fja2ZDchfQnSyc7Zk7W2ai7bvAubAmDjJyR69sU5aoFdjQeHZho4vTL9va749QfLJLhtXvcXdjY2",
  "key24": "XeYv37vP6DikMcPEmspZE5NwXxwqSkeDa14rH8Jk5WMKtXA5Tao23zT1vtuEF4WTGvRvpjJUp9r3ThVnhcdEfn8",
  "key25": "aRVDaHvfvBmZdHUtKKbeZqQGo9wePNasFPXxhToY5Re4SUnBXkS9YBcNehiiv6cCtttnHZmLdY1ndhVKw3EdCUg",
  "key26": "1Jmj6Av1dmj6yKbcHYjpfztjoLz1Y8N7aeJ8e85tvL8BfWiE6bFvoBxtrsFPY3cZSbeZCWdUWJyAtSWU3icnYG8",
  "key27": "3yiAeJKM7TVo34v3dun52BHept5TSi2HBrtibDekKL12usDDzQ3nWwAbaLLshhmcjb4RNh9PKPY6jbYU6AwdqGZy",
  "key28": "5NT7FXLJ34sE29WTPsB67sad6P7SVg3sQSoPMwBmgCkquJzZFD4QJFc5AU8Kgjnp36dmE2QdkipcsuqbWJVqFbHd",
  "key29": "5u6DNof9KD4uqmSPzG9Uc2tJKX9g1hj8sCcrJzhH3EXma2HBcneZ2qEsVriPQ6nv1sRFzjuJGuQHyvz8S3tjU4Gj",
  "key30": "5cChfWqwF1GVUxGJ11jFHFiAN3JgY2x6Tgk7QQFtJjjimfEZ7gpQYehu4cm3efzPdLp3e4DbRF5QxfA7aJ1c6oWp",
  "key31": "2gCmhscdZk3qQJ1qwrafttuf8R96wq4UjSTzVvaJUzfew1KhHrjLGduMde8jRASrro9gaCPrF7LGgqLzo1LEqDkE",
  "key32": "5Q71WBHbP1vwfryfiErPTrP3mfDqdoCTjUanxhfQGfNtWc9EsYtWYTxn1Bjov1brodhbab8T12wgaHAW29SXqbUd",
  "key33": "5PQDL1uKaRjmVS8Nw8a3DzoZD6LHj6cV51vC5PS5g22XmarkhBkHvq3suHd6xmBP4om24R7sbnjmdqDKqprmLbzX",
  "key34": "4bFD1HakVdsqGi6z5qdW7zh7UBsaNTuYudcNsSQUVcSdx7UAzQfZrtxRe3FLkxsPUBkPmiY6L4mWZBXi5SxgCmVG",
  "key35": "4Re94MiuXZB9qeH5PtYFS3qaGNiui3qQPGHD1kV4yHiwKEj2XS1Psn2Paj29KVRfXtrKoH7uE6MLXxm4unCb9ivn",
  "key36": "5nGoRdzJmGpVi3HR5KNHE5fwcUckWsWfwUFkkRUJGBrnPTQUVMEuNexUMjSX34DUWDFgFE5jQmXWtLRaWyA3tj2s",
  "key37": "5Qrzw5WQUtdW8UaLEBT1dUosoUBCkReABwfKNi5hskNtnVuoXeUin8JrrtbFQQrYvjrA3Q7h1TwzYzn9LT7ay4q6",
  "key38": "2Eu59ak7sM1neCiFB9UChx63eeYzRCiUKnquT8GwHqpmyeHbahb8MjodHGf7Abs1zHupgjpU5BetEWBRsmX1CwCx"
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
