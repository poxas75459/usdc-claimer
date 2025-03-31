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
    "54TEYX9HHBTYcL5EttHNoYKyEoW6imn9hxHMqH5dTh9ixJNPBWBByuSSRC5Q4V7tignYdJNVpBgjysupPnVc4n8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d1j7cUoQ5Gqk3fHJDJrX3YRKYRabs72Jhmj7g554zuU27sUrFMs79DdNMwEXZyTH91Tavoo7cdNvnUxQKehLiPc",
  "key1": "3yDfT89GkkoCSf8DLtYYzyqPExY1vBwnLw3DGGmPrJJSrCyGsUETo9KgudwHX6wuDLsuSQYymgCwhMTpV7wzpLFX",
  "key2": "3oe2zGDsSDbkD8zPPGe1PhF53AaUqjfcqL9F9gAjsaVFb9jdc7Q3gHf9qp3mWZHaUyqJdmghRgNhSDKR2c7dRaRh",
  "key3": "3MQnDkAdobr5zAPNLdE26KfMjwzm56KE2D9YfujMpmuuAPngkh6zSKscLKWTMKawxex5aAxicznUJmvvMnwQwNoM",
  "key4": "4qT41XfLpG5MiaBCdU4gSa8pjBywUZWDYk9QJPDPboa3PoyFMJEFArgsmHQGT27j7iSB4GgghQCaiajVciLwpbjv",
  "key5": "3Ko2ovZhwLBCkwAcGNb9dcJgzsF91gCwKUcm8yC3LGgbpHfWQFJCQ5Mng7SPSzNe3A8CrKATXjPyNjThh4DH8jQf",
  "key6": "2Ef2CXKXJ8xwDJp7TdvfeRekon63uQeomjbv4UMnTGRF4UWjs7rD5hgLnsPg52NLur8ayjPJJtuznyi3Aq7ELvkc",
  "key7": "5J9DJKNKo5FxwVhRHHovA461eRAMNSfsy5AyiyzB9SJ45BYMHJusSxNDfH84RAhzur6sCiFzqhgVt4TvjTPjRSLp",
  "key8": "58vAxDbXL9rj1VCe43qU5Kf9Y2oEFv2CBhLTD1WH6AWok6F5dwJJemg3mHzSkwugi2yhQDkMF7vFb9UriJA66Xsr",
  "key9": "VcYw1UjZh3UXoqWYH2g9aMEjDRr33eHnzWGFVsuzAVP6fxGRdow7dVUAJ7vPL6dT6Xkw4hXu9B2YqzyTfpqL4wo",
  "key10": "4DoyhnBciRZTMrpxhgAVgQpEejvRNm9oNAZEH3DKWjjcSrsrgtKknrhCVPH4FxFtZA9LQ5vv5F4eFwc19gPCpH9k",
  "key11": "3mEubCzqgKvwdbNKSUPTSargxJjB5AFAgkEg9Eo4X1b2LYd1AWybXUx11EyTiH2QsrtvdnKKPN1yUJYPHpwotnNQ",
  "key12": "2mM3V4Zi1VmPNikfYmJhp6P25CVrw2zNGFxfAPrS9jaj2tdtZDjoz2ndXrDXTofBQAD5T3pNs7jnBvzmBaqFQ5BQ",
  "key13": "3woPss4LNvW9GmzTbhjqaY3PC7R5y8CZT8woC5AzMuXoN7YCfMnsPv6s9ELFehuJyqp8T2sy5DrmByWWhL2gj4Ai",
  "key14": "5R1PHBXCsvv7AWbYiYLMRU6Rrcwkbre2VvW1ACHzb3UsaYi1Tg3G6Y4eBAfE8ap3VUqJTaf4b6bL6aM94v3e4edQ",
  "key15": "3swL6Pt9SSteSfc7iwaUnbRC6Va6YqwsWLfY43UjCE37uGfKER4bu9ZbNa4kZwebdkpz6EwaHPYWfapBvZUrKXfa",
  "key16": "2XpdTG26NJVEMMfYh2FoDBVuSSTwkhpdZp1BJ6A74ZUaaG5eNYSDWPJBEiGLnuqo4EjE97sGaYNJHHbcHt5VTERE",
  "key17": "3BvsmxKDYo7jYYbNwVXQ92wut4jB5hJJA4ak9Sr1xN4RTcWZwVw8c1UCg4jdBhNPYQYbk4V6LdSdUYc7qKiq2qSL",
  "key18": "2mT6Frm1PxWrMXVzGATGDXGHPdQq7cyQtN8csJ65x6DeTK7WR3yF255CmbGFW29HWWKSPHDgSH6i2MENjVPZBXrg",
  "key19": "2aBGSMmpcQqF245E4VA39hsZYq5us6jw5MShap2AicXTFpq6deX6Sg4bQYzLcvMfnmE1S1Hqz9Zpg6TiK7AxMjZm",
  "key20": "3PgYvduXzHumYMkoExstQRgpz47D7q5RLV89nWi1PTRjoTMa5hTRdf3h9hgwLZdaj3f7q5F1qEW5S3GLkCe884vM",
  "key21": "4WgqXsUEVPYitbivnWuCxfUzhu2PshGdLQaq14t8mc9W5NsVMGqVTCuvfiWS7qydTEjDgwVSC3RnH5CqZZHveygR",
  "key22": "4no7f4DLQErwpchP13QM38MvZpxVsrzUL2oB1cKQf7aryUiaDAirC22ucQBmM6dVnEpeJ5eqjs1VKU8HjYqnP9aP",
  "key23": "3rn15CT9Eo6Ebm7Kn1WagX1k73WD5NiTJSZWApKz4tavCJA6A31HneYrZDxtzx6LjJ2XSVQq4wdQ4Me1rLuHm7vv",
  "key24": "3X37zh8dDoJDHZuWPbyeJ1UZSktqcqk38oGFdyu1PM9wp3HvCBernatmpvvKH4CKduCmNRFzfqRCnEvvX145sGUC",
  "key25": "67jqER33CE4d4iusuUpXgjR3csqa7i1cTQgCUeyKty79og12sykAvYEW7d78DkLsbnknd3J6sE4f8cVgU5cmYggD",
  "key26": "4xE9j3mdeo4E9snPfemyigiQd1x8BmPEjFBtWKLFaXU4hx59woqZZGny5SwoaS7mNGvvWSLRPrFuDVufGUbw27GJ",
  "key27": "Y6ypiXwBygTZeQVStSq8dorGZCPhCkRX7GVzhkkVjuRz5JuX1VYnF3J3x3sLUEsiaYuJuc9RpmNKWhFT417AeJK",
  "key28": "2kuY7TYMkvENDeh6NEtMizM6jXyYamLrAi4XZuMMS2Ah9c4vv57FueYVPK1hM2GfYvknj1a3TrR3VKtL2NRmSDKW",
  "key29": "3WiPDt8tJGk8De2x5pWdoXwWERbB7xknTUVgQ9KEfbs2Mj25GjyBzNUrzRTsvtX27AD2ZwbyzWFS3GngLERW7dLr",
  "key30": "baBxzjxdZPYEj6erAgK1UcC76uG5hfpXCfuL9avFL8fBKCFUSC4VCYdnr1j5KvDFCSrAxcandVJqqV3NcY1vAAd",
  "key31": "YwEip9Cc4Y1Za3ybF7M6j8LSdEDiRytmvQ4ai327wBTpAyf9DuBwr5mCFG4ENZRRFV5g8uj9vqLyKzz6bgp4N5M",
  "key32": "4Tz9EjeM94wBicbgyRMgTAZzTiWw7rmfRgMEx8qKCvQX4CxqkCUosS35f3PhVfH5fyZFadtMcEDHkvqBGtAmKWPu",
  "key33": "3tQR39ZKZDTACpJVYV82EThfcRbpDtZap9mFoCYyDHKuysmDhe2MRxJ4hzZ91PGSAPpeRPe2X2agbGjm2eu5D2MK"
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
