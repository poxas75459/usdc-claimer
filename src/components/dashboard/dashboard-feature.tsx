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
    "nxcdZ8uyK6YRZmbFeNUV9Q8uwucGVpTJtCeGSQFbMEgHzMXa9oMtskEhrvzmQ9kftytLXJrN6EYAErY8xum2gmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2maNMYoCNtdKEWoiJyRq95jtNB1ZT2L8q8HE8k4b6wg4VV2KWnrap7sgcxhDUCAuqN23t7Nf8a8CMqNT9orcSpUT",
  "key1": "5njxvVPewkJrWt9ptz1rpCWEuvvpMQcWnXQkAvMmp3tW1rbcygpgNPxF7XKnUNRnWB8MuToTECmp6TcPxtPfr2q5",
  "key2": "2nSYrEnuKbB4QwoxUFpjcQYdc69U2A26aKGiBC3QM4R7hPWMcHYmHDpXQLBVKYBZpsJxqLJYThdoo64fNANddRAa",
  "key3": "2RtmvQKiwRp2N77XZigCVNzX9YjpXkSqbJruyTnEkGrEC8wpxorLGusDEzmnpKowJonrUuUEvSPep9RY17qh9meu",
  "key4": "NPpL7FXUx5i4NZRSuzDdnGsfWZZSdEBreN5SdBUU7LTa4FQURvcrP6NBdwaQwTDKUBunpHwou5TcCUbC3fXk5Du",
  "key5": "5jbVyahUNpx4hkDHNy9XzWcY1KJeF96StWWzLQ4JxRkuR82ydDwKreQbz2qaURTPJEJ4Zkje6p9GznCcQbtg8H3V",
  "key6": "4e46veqoXnEmbaqgN2uCkgncBGcxkVWVgoYw4Umbi8Kz6kxZTnvr9srAdadnmwS12fHm5ZHNoJHAh79c4wV7h4E5",
  "key7": "4PsUv5VGR6wAH2qTxH8AUrg8zTaPGu7JsSTuLEuhH42wHTBhQH7cSXkxJezCv3zrbti5MHNxndtdgH5tKgpfXHnU",
  "key8": "284URG3tPotChWoFtqWbSGg32zdkhntaaiVUnfTHUJzthXu61beuGXj79raoBCZc5E16bXw3vM64jj4y9WoG9GdY",
  "key9": "5uc299NqBHXoHC5JwZBKTqYwXEp9eCqVL7YdHwMRoztFu4b5dt7ucTYtqGYQhkJQx947JHxRLuvbyeKwCMMQxqkZ",
  "key10": "wsLqTdYRzj4mtVasNsiW1qMfmZTvbQPjaQWRAveE6miwCwaCnX3eFxyLZ26ZZg9UZDbZBBT62t55tmvcqnitHyw",
  "key11": "5mLkxs67EwqbuAC8w6EUgYU2miLrtVWazXBUmiJDXshj6U8rZH1mYRWdq7356KEDAaFYfy3KfDUaLPkQczi1pxuP",
  "key12": "iVJrvo8hvDxsESfLJh3CCMqDdwaxKcWFJY8PSdreo6d1DtAYUbYcKegmy5bumNu8WGubPKmPqpwpsDV937U3S1k",
  "key13": "RGnsHnuRrKXdiv941XFHJq2dTJMAHRaq46PAmyygDoKvZRJbCZRK45xX5hegKKPFyyUggAZodDt8BoyKgdAiUUS",
  "key14": "2qvDkbYiXtQn8kQ37pxH5LcqkB42tNcS6Va82zAdQwa1sg96Hccjq5cSquPEi8Zu4e5em4AUHYtYejwjtT2hinWM",
  "key15": "5LjcatapPKu3G8cZnA8WvzknTj8oHPFWV5yS9m3EFPvfcy1sehCgitvY3eDFRqvfC4ineangZjYtbCTX13CVbszo",
  "key16": "VJBzs9itiTP9C4D8JZ4GLwsiRG3cXxGiwcYhzNgkApBnvjQb1h3KiYRvx147HGdcybN55qmawTHMjeMzhgdsftg",
  "key17": "5dRPf3BFFsrekjExn9HikWoYrhzurfc5qrWKnzwWpYTPwPHMTZjSBPv8B5xwyQzFBqQqzoLskKut8eYJ95YmnFs5",
  "key18": "4ySQ1KSr8DHMff7K6VpBoqZRyvbzvWKxUExNeK7PjTuuCKUY5MTyXtoH8AfdVX9V4a97uyTyigwJg2ruvX7sB9Ci",
  "key19": "4YJQgFDbePZbMYh3EcLh4k9ivhH2vpZv9w2XxEwW3BtQrTqnKrsqmjnPwhdKTYQH1UzBXXFSnhbxd5e67A4BqMAL",
  "key20": "4C4ekpz2cpxYvZC2NEuQuFM7F665MBfnV9c4F1hMJZa5ujc53wLFazKz6e1p5CndSD4GfULDDSDgh1Q7vqkUE7WC",
  "key21": "2FicLQq7vsXwu1AsafFu5Z99LRCd7kuB4vfYgYsDsB38eu8ZmHtW4EV39kt13dKD5AJ8yEnk7Q1TZkRvi3eVfTei",
  "key22": "5gB7eDdBknfmRqHBKJ15HFMUQYMJfPTWKNdjU5Kkyy4n98aAxU9mVPLaDLZtogQ94z6VAbnTw21tD8ZwZhKRzR7F",
  "key23": "4tB48jwAsv32HGreq7cdQvjpLcWHGKhZKwGCBPq2b1B5SsQpxnP1NhNyz9mHBgFv2ecxe3WSRRtCRZ4AJEVNv9wc",
  "key24": "4onwUZBwdczXTmSNa1YuWdauBTerqBBnLREwV7FAn6pofP6QJh5hKp8Br3e5HiVtdL2KsEk4JBzBKXURWz4oS3kn",
  "key25": "3DTNikPz32NG6qesDtCingqn6i4Gg6HvPCEzuDo6Rh9yk2evKa63Tqm4HWHh5GfcHej9WYKWqYSpoaJUxNoLTjMN",
  "key26": "hWrHmbmNgPph22AibnYjPbebknb11xp65cjLLZSEUugn6eQwfLq8MkuV4WuyZbCtLdER59fiekEMDeTd5fj77GV",
  "key27": "5jopqNo9qPNWoCN3YtgMVsg1gaB76RrXAedQvbwsagfPa77fJmBErGJKQ3j55e3nzdXXfbR7UKGN8KSNbLA4cJHD",
  "key28": "4KYsWbfnv2FmHamyS5MA35oizJC8Ucj5LfaXWEYc6g6gVxm3SeCx4AkVVyEJkkCajnXP2SsmSUVNBMSg7SV6GvPE",
  "key29": "2fwnakDhnScnbPETC68zveu8g93YQkH8cB1bpXz5A2MjnZuhNe5UwZsXVTExrLqBLfLJPR2YDKG5oXEvLoy3YpDx",
  "key30": "2qWQ7Pg8GMzvZzwQYSLSQkWw3hiErpBEGEQyZV6YQit3iUhEZLhUzf6bS1NS23YmtMvogzB78HdCeunnesVMpmtr",
  "key31": "5wsXLwtAGVwNxFJ25N8NGb5renhVwjvPVxKi8CwFJ134MjiT5tHCsV2zPRTP1NX7wUhg2ag88Zh66qrtoE3ZRVc7",
  "key32": "5yqhMXQKXKdyphXV5BizPprthfvv9xzuuLu7ReQy87CeTrXZc8SumTMJuTHKBf5RTwrjNxiixNPVzuiattKCoQvq",
  "key33": "4CqeQMByNjzSHYtkB5EjTLb9jeaghs7dszFcdaxmrCATFyTKYhUuLQRTnYyqPVmL1AePVH9AxjsLBHNTufM9stgU",
  "key34": "31tjmzr4Yahex7pw4eZ3ErgrVMDCbhVX5Z35fjnsBScV9Nnokcopr3mJYdjbcYgYv6KxDXfTNmwok4XcyoTyFec2",
  "key35": "3azmkAZkayW7LSgouxQRSJZ1934WArAq4egTv3BRDTgsosrzFwi2WXbxVS6PzPjzjmdiBq6Zf3HDzQ7ELMMHminB",
  "key36": "2C2PDg2cbU2HGG56RVdWmE3messkUsYax4fkGbHA6NKE8uKQ2f9tSBvwPGKrJthPQFAesQL4upVTcP12S69nws7o",
  "key37": "3rAUnM9RsKPyoAT1DsXr2Cx3YjMggftA7AJhJw6ujqx5apcExCRFL3ZsEbXNS6QFLTxDN4AN7nqjPbMYK7HMKjRV",
  "key38": "2rNAh3op7Gc5beU2oy5k3BhcfdD4jDLzS4ippiA6MgMq5attxTZ492Eu6iezxj9o7tEHYrgsm3uyMKdGckGaynQu",
  "key39": "H82gbXNSGbv3UAnGrNjweHkVyLeVkq8NDtn6E7s9vPo1rfH7p5vXTR76YXmMMey6mvDNK1HCoQdmevTHyX21dPZ",
  "key40": "2rz2cAgZKPJjvasSz1LyXrS2bEffxKVgwuu7LbmjjioNt4NWK1BTZPYFhtxu1UJftMfJHd3j5qkx8vARz78yimJv"
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
