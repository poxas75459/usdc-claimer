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
    "294DJEG51PSxQbGZWCwgov9SS13Lx4vYMdGa2f3Xxvjiju7iiJbNUus9wL1PZLGgsH3BSQ6WTAsTwWbdd2zhqT5V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WAYdkFEujbFsWVsvyn17W1N1Axk8pqxDYVQaoZbGPQdMaALSwFaFioKqDjZ5mjY8DBwrZWNV8LKTEib2vPhKJn7",
  "key1": "4wmG6Fh778YNZVAHLd1qbRcUUD1W3qAENKmRyxEYGBzhvxifj1zqsAEUSe83DmWTDf4UtqpFuGtxVWntuif8E5Dr",
  "key2": "4dFTEjo4QRbYQB1N3yvVRVztCLSGVy2WEnka3VQ2AmgMngM3JNeiEERQUnFw4FY2SqqmhiRTApJiHUEowN8f4AAm",
  "key3": "3iwGM3hqTm2Z95RCgyFke6D6MKCejjuq4nhZKb2twkpH1ifU4ArbhqiBiEpPeBszbzDESUMJgprVzWzDN8D1NdGD",
  "key4": "5kkJ7LqkTgMJnbZgxp4sywPSQHaVXUyLU6Kq523JLqWpAn8xinmVhCLKvW6UhnrpR9ZMKW2U4idL3GcWCMTz8Ras",
  "key5": "qMrih6qbB2VYirUEbNocojF37jKUA8p4hHMMtvk64okbxKfamYH8eMewhkhz8vtfc4U9kJhrbx8mmY91KVBzAhv",
  "key6": "2kyzygK6Y5gRbn4Cb36L4eFo5PkibmAZqCNDTNznrARhUZyR36vwbSsfJ7y59wr4H9eGnkB6e7UaaUAKEbATfdCr",
  "key7": "5z1cxb5Rt3Z4DtX76tbubaZ8eRhNotpLSWVF48sNYYL75a1H2gczxkBzsD7R98RDWmMT5ADhmaYoWB4gW34VLjCB",
  "key8": "55Es2ALYUujyNAoZ9rDSfaT3tZd2BbcufJTxoW7bQuGhPwdTWRMG4DRFFEEKZHop7optWLghsGMaMB85VgHJPVSy",
  "key9": "PvU2itZgCvsMpy7M8JNqmdqF8kMDsiZsjuT5zGYT82dKpXAFR1fTkhtwj3HptPqsDMYD3ta4LEtJbV9Ngu14BfU",
  "key10": "28Ld3dp9Xoxegf2ZxzkwCc9eahDY4KnWCpZbxvjNoe8t7VpcTpQekqWK1J54aNfw5w5ehhiYgaJT1My5jwan3QXA",
  "key11": "34c7mS9a8Vg4SuR132WD7v7TNFaog1tNv8zH6pq4CgtU7wdDjeYPYqUNbhKnQd7g1CEjDorrLpYHyqnwByb9mcUa",
  "key12": "451R8h631Gy6zmJpZPcqessNaqJnDnZD6vwCzs5qYNSXcC5QXE46QXhpoUYEw2Se5kgVuqKXHUG3V4NZ9eA9uSuH",
  "key13": "36AJkEYo3L53xdLp2uQFKP5WPneHfJQ2YcfWkimLCsD9qAcx3ifVJfQq1XvTBr6yDsLhbRVtegBEVZFTf9eVm7D9",
  "key14": "5t1jUCQbqyqzT3NwxpUMa7XfAqnD7iQpZapjKGRu4nvPBMERiQVwiKbC7MgHTf4XyKYib4SQZzM33nqFFVUuUmia",
  "key15": "2sAvjCazY5y4Kbu4TzRvucdrwSALMv6MF2ZpqsZHka5soSkCbi9AdmYphUm6zENvpVz2cVdoNzkUHCXfCMagwb9T",
  "key16": "3LSSfq2WxmnMv2RHqFiciU6m1QoLfm3GUoNB2T2dvUuXUrjHYdNm5CfkztoQHZRmVAkSWsMbvLJTTBCdNxBF8fii",
  "key17": "4c7kKkLpajtPt2zhxzVZ5bqwS7aSkn7LFuBL7KxRzwPNGrGR2T19rTs2UQQZqHUjyDojAnsTKJGgKNGYab9GVP2W",
  "key18": "4wZQqWLQWUTprpAuERULCNDKyupfZWkRXXFwJqnw5eut6hPwsUx1a63sqYQ2hdidPpKfQyffNTjZTJ7akMmQ2J8q",
  "key19": "3qR7KE33uKMcjNiNJt7THdNLQKJZSva5Eg9S58aLu6hYYjHUx7G6xgesz398LPP4GKJbQ5r4pqAvFfgTYK5sjjxC",
  "key20": "5noTZriB6qwqkKAGcFfbVMvA9G81KmNW3BVWkhEXY2t7waWPEuEpbqaDaDny7Eu5X464og6LcgTc8mvVDBv8HF2Z",
  "key21": "v5ad6ov3bU1AsCyuQYQtvceAbRJvZiz5c7tunhLRgYH1NqfrMttN66Z37VypuTsdxTd1KeUoZSBw8DFY9MRN29T",
  "key22": "2uuLPiESZTH43zgAifAGFoZrHpHCyrW24aUwC4SrJ8Zc2AZXrWHLDq3LtMh5a7Damkeem3xGXJF5CHEugwfCCWx8",
  "key23": "4iqrAoKuvse1uXWmBigEmXS2eYiS63ynBSP9R4wsHt7FH6STBcrK9RWjPnxcafnph5Ntgfc8XXUB4q7sMKKCMfYK",
  "key24": "5onGQeeN72s2pT6JBGL4AbooCn98grTH98DsXSLYaVMXDSqaPCY8FwtEog6J2EokmEkhDUbRGCai4AE5MYav19hm",
  "key25": "2uf4i4mhqQ4bEUp36rAampvuPUeQzasWU2ySaQPEhMofVqRiuqn2swZpmFQBEcUxs2N2YZU4JddN8Bnk1LafSyz7",
  "key26": "2MbirWJw8DnU6CrXUSYNjXBrPDdvgMinDjfibZ61rQW2V2HaN3BSssgm2mU7UVLFQiujMiGNcwLnqYVVwiBaPW7S",
  "key27": "46LdVEWXeYtd5fS7RDypWrM3L8kgQV9dYnX5BJkh7i3nbPdV2atp3aj3YTPQBJYjwLouKsozgBmH1Z2RoEytiYn1",
  "key28": "5H1Q6m8t8sBUmntSmXuzRgGNMrdSBuVJaPX7aMiK9Jru37wdcfPT4WUTgzstqMwnSaC2oPaBC8rzQpnCyk9eM74C",
  "key29": "4VGAM5aRC4ajRvkqU4oicue2fg75oP11zEbjCKkzYJ3mYExHq5JgJg4TiuU2ZjVx3MLoREx3x5EjxciF8fxGqCWN",
  "key30": "2o9F7syJYD55oupxWDHYhL9ktjxHnrAyTTGjpk227FUCy4aVDo9yRWKkCJFwdu1c16fL8dEPf27zHd24hEHnpeko",
  "key31": "5xHzt9Gur5vX5HvAiUCBvUAdWcvRQTjTtUfirPy6GDxMxgjoGCLqpCRzXVpKL8GVXxanSFzfiDXi8jEhot1v6gdp",
  "key32": "49pfFQyu1JQLaYMnQn3cRKQuLtB2vkiMDNakLiojzk3v4YHeLPejt5GdaqKYz28eNBvagvkVzXkhiibyYdfo51K2",
  "key33": "3wWWhKH86c4mZGB9Y4jY6RkeoLrcAiq5HuenY6RmaBJjrv54fkzuNoKG79Z9FM5UjTy975iNU4kiAm6W8PCcNvWG",
  "key34": "56fL7bTQNpV7jnsR7iASm9snEjpHtuMYyWS6rcuCUKNEcoq4zRfoCfkWFF7E31CL8n5aBBPxbWGzrW6iZcJS115r",
  "key35": "5NAo5HNQQXCZp15TCzn6uJ4owi2kXBePBnEPpMnyPDfpQzFjdc7o2cnbkpX6fwcdLF5Z7TDFrztHxNEcCdy2fr6k",
  "key36": "4w8QDiAZBYcsmvK9CbcZgRCYGnDscQPRba3cD2uzLveHjhFqEfKp26q9MTH5WkBg2ynJniY4yNM3c4p18Ze44chU",
  "key37": "3upuLSVEHBQiWGpUMghkcwU9dJK5vfyPMoKK4ezDoQUNJp2CKkT9c49RaosfUc8A7gy4pqRXM7UPPJKdTztsgMTK",
  "key38": "3fyZZVeZvPstu6UY2CgnHbyeUkTRXDGKk8UTchxo74H1Zemp3Ce6NKQEFvnnn7hJZM1ujLFyebzGqy14szV6nAdi"
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
