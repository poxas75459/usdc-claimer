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
    "4f2uqX1KvRS6kSVBBgpJVdZiodBqC3HU5Yjr2BvkCfNE9DYEJAG8k1oA2SKsJJagEnnDUP6TKaPgoTAaYvJcC1Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XcRjwXs7sW2uQGnmJA6XxQYQxL36meoxeccQLPM9ZFs3zXFhjjSL7mMLA4jfiicePcAG5uXp98MB4CmaESL26rP",
  "key1": "5MkeWUVSmnd4rihktjamTVNZ6ws5B85snYufZ9HBEkXBX1M6RFDsVfmKym9Xm4exvZKzSstCd1YuEBwqtixM6Rzr",
  "key2": "2DwgKaniwGrTVH9LgstVE2YjWCXiouZ3FvoYoEmgBftuDQyzusHYsoPD4zFAvSSFTuV5X1SK1kxtHDi9S1VT1gi3",
  "key3": "3zph4sbVbUvEHEWPEqpBtTStQ1RzMreJyg621C2uZzM7EfaQALQK91niPErc7MDDG7cGEvgc7gASc3C3PtZCAFjB",
  "key4": "66rcdzoQYyJ96xwWqTcJMmHaweWoinAphnzPfW2pucRC7RQttbZmpptZj2dgXjBsQHdst3ruvDjrEuked8AepDro",
  "key5": "4zV1ZhE1nYv85wZBKUK9Ut3aMxs7mAM9eonvAE6qtu66yw6jScoZ8kAcyPVUYw8u3jYhGopgMm2FCf84RVUJB1GX",
  "key6": "29SYo5UnT8ivbD3hzX5XHu5GXF1KmTbosZjPCTziKn98oRhwqoH4NjfF7qjKoTTHERdhVSiog7wgeq4x5dW4qnyh",
  "key7": "2hVJcckC3r38zxy7VA1hoGnLq6UzFcsCCpLE9YTyweX4AavQTS6YR6jartUn2Y4PrYqdYywRTvJ1RqGKNt5eoRxv",
  "key8": "4V86kCyvZjJ5GkmWPHd7QWdxxgnT1rkRip28HQkhDWgU11ppi5QZKEU5ZcaTeLonqH9p5dEmL9HetTg48zLBsXJ2",
  "key9": "KVrn7MZ8EjLZ5SCz9qyLX61fwFnVKAE6cfiMnuHU5BThve45WwATcKukxawchSq7DKG1UpcNSffNtzJAprxzQdn",
  "key10": "SAHBit44Sa4j1qSmKawYF9CXQpsE3q3x2vygkZ2NzCQhKaMb8JnYaDoKeZLv791DFsZfdULSH3e4jpZ7svrnzLu",
  "key11": "4BjMXGC8RhRcPUKkDxQZy7RvNsY8fav3RZ4FwYjkqBdJxBYiQUsMnJWHU1Zhs9P5XoP1uYw9Dit3NQ9T9YMzCo37",
  "key12": "4PkQjExWhN7equxPuFvuWaqeCNhPYg7RQdHNum769nqHEcoaat5ySotijoeTCWaoTcrJp8nyuBEpsbCzYGjLXD4E",
  "key13": "3AuVZcf3GgyWCzzZbHMB6UnUrFo6dSKMNVAkjrpfhBaYqUpc7nNoNV11WXN6vgrW6cU2h9644q2brLhnXywW3E7X",
  "key14": "3PTmv85ccFwx1nH7GjrTpoL9PB9AGtGLPPnALaCux8aHxhiaHejiyDtrcqfhbdQNXXvzmvcmTM8VFnb4fWs1G8mU",
  "key15": "3WvPK5QitkMVCs4Fj1TcE3DehTrojVPcpLt8nsg6GY4LXCeskiTjP8bowGcHZrwwB5qAG5uymM96A3385dZpz1WA",
  "key16": "2B85YZgj9e1BRCE5GCQfXUe2e6b4U95ZkrnpRWkDPcHGbzVqcDfYdoDCDwP9iGMTWn4eH68jrqGvWiRtZGFCiXXz",
  "key17": "51ysPaZweeq2ud1bsxNwpTbGwpZLQfRmxkydtrNq4EsAYVCC4tk5eGkWSjpA6X6amtf8L1Zpzt7WqHzdn8EpDMki",
  "key18": "4yixzeCYZLFndGvcRDjuvJHZ2kXk4JWSfwC7NoZLKsdCpLtsZ14Hi7oxztqqLX1vjNepTQK5ifGFvywab6kwT6em",
  "key19": "4wVoruJPKYKYeuKtWVq1iuPLp6dHGZUeZpXJnMsE4Mu1AUiQdXpdtsSJFbR6tm6HQdPsWht5R9E4uwnHGPxwuh5",
  "key20": "5ddd2PtFydAqKqHzUth8w5TNd1Tu1uwM4E7Md1X2vX15vvQnJdaGEjx8hg2NpzeHXvZ5HtqV4pYWwYuDSNAjUWhb",
  "key21": "qvpYuBssqU6U86dupvcgpimErPmo4Zyz9zwEWD2eBBrmJxJ14mgaTrMyUfVbztiw12Q3dvppufAmUiCFWaahPMq",
  "key22": "3BzFAF7NSAu7aE3PFvCn6cpH3tbRThq6cnX3xQhmqnV3piJ5qDBUKPV4DDYUtESVj7iKUfnr52MrLP1ExRwr15kx",
  "key23": "522vL6Fdv7U5ZkPWMbp3qeUzPLf618ZKrQXq4Zy8T1QV7LtL5Ky6VHwxbN76yJs4WfjK3oTtC6TduhLe2EwX82oT",
  "key24": "4KXsYaVCW12hnxQ7DRpdSssq9LP9sYrFZWFKpsBYBCr2bJWQF3a38bwRNtZfUoR25qggSp6av3ZdhvvKAbJqQUq3",
  "key25": "4hxPyAayj4DMcf4S7ybfmVH4TsTQR1vGRqR2GfKTq4a86p4grw3yExQE9RXNSV6viAtVWZEojEmkUKBSdUtH4oVh",
  "key26": "61Z2LwJDiR1Wr4b1teBJkdXRm828A1twSbdNnoG47xPKJkFLMMdLgPqMRhiyfu18truhR2PT1PbT9tVzWsHXeE7c",
  "key27": "3YJwhfodyWnuDojfpePfVwp8ZQPhJRHgSKco4EtxrcYMc4KfZEYVeD2hFunSGnkDUXUsDjrRoeZyeV8PGVcRDHq1",
  "key28": "5LtngSJeyxx5VMuYbBvkmpovay9n2YWka6VajhhELqRogURV99aHaXGrEiYuUKXXXMYLWhstCYgNDLiohe6KSKWN",
  "key29": "614ZXTkGkGGiEECcJsVMmd4PMytn1MewE8iJFVjxWQ9ZYk4rvZges1opq7wbDvyRYg5AN7WS5eJsAcDUDKfc4ztH",
  "key30": "5u4uqtVeZdduaH2ihATRArRbyKps8HouC8cd21u3i4tsPSNRxANDXmVYQmXdi8bNfwmogQTdJsEfTd9UURNpzvc2",
  "key31": "2ueSmE91zThXyxcnoDXuHwgJP8aAiFxHpCbwDgXXPhpTUcmnq5y1NSHVnUJmfUaj6Y4fcVwtALZsWg4VGA53iXSe",
  "key32": "5RyWhncUCrpEnvR3oir1omx4cGR19zpB136uv77dzevZUGnh3fh1aRHSE5s6S9qy4Yj9JnzQm3VcFtn9BLTjPRtP",
  "key33": "mnmfGYbhVWsNH8PuuZUykzavyA7SUUwSWv7arfuEyhLkCeGac6iknsB7QypTzTGNRfLg9SAP5n2CtV2guwj6YCC",
  "key34": "4nrkqZ4szhYxDJfrmnxo4Tq2JCkAHNr9VpxQPpR2b8Qrf8QC8ioCec5W3iUd6ouG3jGxetFtMEEoZBkmBHijjdcB",
  "key35": "RCS5M4Zehwq6C8YTJcywbbiZ3Ftc7DJ3sxkVbtgyKLUWo1XGhnc2u42gbBVksW5Ch78gRN4CwGVGLAvTmkzETJN",
  "key36": "2V7gpXv4CnezREbzReyaREh81T6Azcw2yhTT7bv6qg5aNKwL7oBCyjd14zhuPKwCGkqWqamygfGNomhtNC5ky12L",
  "key37": "4TkUs194XAZqd3k2nsb65YFuJkCsiVxEerEnttPqkbwqaHVouffLbRF2qvJTHVCwWaMb9ANZT9UcZ3ZAM8mmh4Er",
  "key38": "5RiVQ1ChZWJTpQtTvSSq7dxMJ7zxAusKuZEDezxE5dpWBPPNKuoAafuwRtMEkarJSk5ov46Upt5xmKbMCTfqxtqo",
  "key39": "3NXPqvvjT3viJh1qfUkM8pY2FaNZFGnHXqg5jsBqWSQzfPmrKWBbPh4vJXZfqKFHAFxU1GaKoCsKzor665DxXgj"
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
