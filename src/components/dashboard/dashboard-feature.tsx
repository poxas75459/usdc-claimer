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
    "4pQPJs4ympAGsMJEScarmpHumy6iy28Dgc15Bn2uKqhP8WUDa7GET9J53xNaMoPmPEe7gt7er8huP2A5KjDkzckg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LFnhUCgfawLfdMSLGsrRf3GNbrwcE1rQzFU2rxyJAYfG5EhJBFUCB2UxGyMqNHTFsDCkUhSj7eoR2DdgRZuiMtW",
  "key1": "2aaLTJGPXxUSzsWAazvBocF38cAagF4XVcQQpeaUyEmEpPJ4df3GuSpjgo5hanbAdrR1uBA3rnKtYkr6971Saixf",
  "key2": "kWsV6Q58vqASCzVWjhzfQ2zVrFhK2p6KzDaBRkEeGT2NZJZTViSqAQYqsTNCU6U1sBnUxvjKtHnGk98pbc4Lugh",
  "key3": "4FkicHANGiwNARTTSeDybLwAgMQqhZRGHgcXDURB3seQVucGVW2Fri1ko2jQrExyRwZb1BcJH5df2rk5NrtDQ2UQ",
  "key4": "3hDRZNZ1TdmAJdtbsadfxDwqHVyLG3vT5MvLgf6aCkNS6EAGymJkbNuT3A3HX86GnZdS4FRwSDje7vxLrfmDXYUB",
  "key5": "4i4HKmYzrpYCTk9YvbggiB42CXW6dvpxHJuSkUUuzWvd76nAWqjEQzkJNYXsoBzLWZfCP4PgPr7gadXZ89KNap31",
  "key6": "2GrZwz9txLvvrp4v4TV6s41sdFWmaG8jS8sSTzuX2p5N1zbfmxrvFjKv9FS9SzbpS5WyVpuMYexJ3EESpMYgme3h",
  "key7": "5wYAnSp5VNYvZfKpifKf7p2BSG3jesHHHjhEBYuynmVtDdwtQKNVaSVvtzHaXRTXzKK2u9fYn464qKqqwKcdQHVZ",
  "key8": "5fUCaBEbnpt2rp8FvFAR3KfAVubB2abaBP9HCKTJzX4Yy8fd2AiAKLZiRi1tJHyh8aEDiYWihatoqcYdGNFB3ocZ",
  "key9": "5HUQEZBwAKacwMKWXApRr3nWp4t3eWgQ4Ae5tuYHgnf6oRRNGqwC1S9AwED7SncoSSNMyQSgGcgDk6MXA2j55TTE",
  "key10": "2pwKgQE5LbnKmQnTJEwbNYijY3CFcmDNjHBWpTjaEPPwS3G4zNLuR1cZ3mgASGdSLFGjF3WWNkm5DUKyjnN211RX",
  "key11": "2U66UcQgLTeZZQ1VZ2YHbsaV7u8fzSDy8jafALY7d95EuJdEsvnpp8z3WsLPDhmvxR7sPZApdyKthS5gyuLj8P6D",
  "key12": "4WUQgS133BA6NEFjxYKt78fr2yt9mK7xoEpZ6sYA8gMypy3GquxNW39HVEG598Rm9vpvyRBmi2Yn9bpncJrc4QSp",
  "key13": "FvAqUJgAKssX1FZvEr5LyZsUGykihmstoBDAuUxCLX7qbW2WxtAqrR7RYSbsxMTKiVLeXSSh9N25ZtU7pXH1VEH",
  "key14": "XM678g8H9PJNnQEXRG7GVnJeMKv4UmEyLmERhMdUtAjdn13vAeGBLofou8vKP3SUtt4d8cUpkfDAcFAkjJV1wXg",
  "key15": "9hfPi9WRnpwkE3bN5LK7sB68VmAbA3uiU3n54QJcA93Fgc92AguwfXhBVerUgSSEWzR1kCRKka9SvPrnUsuYtge",
  "key16": "5NtL67PqaXQNAXnWQvtnmK92u8J46x2uxFowCWtkT2AFTGXSJ3kcMWExUTEqh2WRG3ZnKZb3WBqfWozm85PaBVTk",
  "key17": "Q1xNQA9uU1vDCbZYGaLPdAYdZwcpPqVUHUczsMYZV7A9mAnJ5dCGTsFJgtDcxwztFHxFX4YTDJ9rn943k5A9Q1h",
  "key18": "5Tv1qdfNkBnpLiTzxjMUAj3inkmsLk3DwpQHtEBPmYA3QCo35zVGaV5ZFZmZAgb1xzcwy6YUxRc8SjghGMRARvKZ",
  "key19": "228EKN2ovRHK3gCeT8DJJ4nM2bA22NiJ8zub6UxwXmtSH7YceLyaxigBmuHvCi9briSJwL3qqgLLWJJio1oSVxrr",
  "key20": "3RSaixvo3N2TPBXys61VMzCN27kXKk6zfnYx7CPDLd3jRhNbFkRGBbcna8XxxQRFrJ3yLUxB2FnppWxybrgv5x3A",
  "key21": "2y3We4f3wAPtjzepjGcfLE5Tog86WiitUzaWW7RjAckhUxfRDBYF7LUwG16ckeaqs8QuPHj3LxTk2LWpqRg7to94",
  "key22": "5ScoJeDcSnxvHZB9vbTFi9Q6Panig27ExRWBnSLM8LFTgF3tJhGPywgQwa8X8MJPXBPNCkNeFQH1yFN83kt7A6vm",
  "key23": "2PesocTnhuYog9xQ4ikDpPDahTpCDR7j8YXBSgRbmx3DRz2nwKMikjAywY5eNCybKJ9VDZ8SvpuLL5kQeE6pD15p",
  "key24": "2Yw2KmWTHPc8ZRmJvMGQ6SPiQCRLRAuaCobcQuHMquhVrnc9NcR23dHH7PLYU667fyu9bLQ2GgtVq7xxqXeCsc1t",
  "key25": "Lo313u2L2bGEFxfr6QB92sZSveJx4fQFQaW8aKQ2bFaGsXrKBPCV7Wxu4aaVoRBv9jrhNkCxPU1TWGfHbb34sYU",
  "key26": "4iW8s1EiXi9PFyx7BQE3NRsYC532cCyUwmpmxJc69wNrvw6nrkw6zFwH1vpVxdhj4GxnYxJ2PL3csk9xA9joRa4Q",
  "key27": "2nnVFetkFUQUKmcEdfNVbKFkkLA1wj1hvWAThnViKXXR4qifM49vAmkFzr39dCGZvR8UwjtVySfox1s8RTNSrVyD",
  "key28": "2FHWCStuF5B3KUjvKwGZC2wXLWDvUz9awYapzJWyD5cNw8BdpYa5ECr4WRrPPbXtEbB4ymHFLmEMdB2KmLR4SyeZ",
  "key29": "29Wm6oJaZ2EUoqSNtp7NErZvtA1YkSRB2bowaz4hSReNbErMNFf79ckKfYH6nnDJ4pWBe7uPhUyQwLu6GQ6acAMt",
  "key30": "3tqo5xqtZ3xdJ5QQNHA4hH7tB7zVKSbs42XSLnsDf4mKKroVmzFTVxcbVF4GnzkDnVdh1odJ1RouK3UdstSJaZDX",
  "key31": "38GwrhcM9K9K8sz5Rr4bzQYSzapRXmi7jt9r4S2mGviE8GxwzjTnmoLGXWzsKYZAAWRmadb6S6eMtzvKPmPuQqE3",
  "key32": "4YqZH6Upd6Ma69aRDghZCsCdQzL289MkqGEisSNuoNaSYHARWRNQcUFjYGpUmyDhMVpF31QQxtfAUPUVZ5jn5Jbe",
  "key33": "371QzJ26CRiw7tQ1SPP4NZxtqY5fkN2knWjPbHfaGduo5pKfMGj1jLdMA8MxaY6ykSjVDxu3uN3zYR3DJjB5zCYe",
  "key34": "51v5D4hdbroPnLFUGqs9TqmtymoFhAX5KGi3kagt49ZmV4CBkcNn3APdVDhdkNe2LbgRdJFMbhBkhRRHMt46umXc",
  "key35": "2JnkmbApQinbSipg5kwx6vDx2KV5zdwi2YdZTn44aHGYumAaQbvfK2GRfHv5bb8AgcbDC4ZsMavgPFDkrXry4fFA"
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
