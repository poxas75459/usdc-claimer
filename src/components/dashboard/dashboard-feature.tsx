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
    "64WyTRtHfEpboXQPGj5qrYGtSyvx7H23RPzutFoBwrtrT6BdjnnQAzBNZcmBWCmWeCqUcc5GMaE7cnq9tWMkseH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57twKDNeG9DEwLHTTmrug8eTy8cqSKAyTLKhNetQMPqiczkwTwJzG253csaamx68BRiSezqEdkr71wriuqHJaSZW",
  "key1": "aGji4njoQbrabadYmZfmontDURm4iwF4foSoadxfMaQ1HLZEpSss9suxYSyKsXuN8VMNCRAriWSDE9jt3GdPLhR",
  "key2": "44hNuZiL4hEoErse6ve9Zw3TiNXPXYxvwnD28hgpeU9WAkq9xJuDnCYxYaoPhkp4cKTS8ZoymL1KFBWerYhTCQNM",
  "key3": "3P32dHfpqKeBUA2F4Rk3UUQVDuwpSxzpxWVSqEhz3nENmtX1DLqbgnahfdMq7tdK3tsTJHUKMiBwEkQXbRPLvbtp",
  "key4": "2C5qhPBG6cHorEs78NaBJjMMwJA5WGLRzN7XZPst9waTRwwYJHP8QeZkv9zBxz2FZrW97Tgr1gMn7Lcxkupz7WJ9",
  "key5": "4Qqzb76CXERX6WvGrHtPpnA6snsSL4wNdiMjcsDCYQefkuF5V6pyxfu8n4aXeFn731L529E7Q6arZFU4vSrVsXsY",
  "key6": "5w1vZNTtkuh3D2Lp5rPLDC4gLGCCaBJ5L7H9mhroAN4RnCeKbAg9H8tmLBa9SoLgbmbdcgFxbziFaXUC3iQ4DFwg",
  "key7": "2yeTEimCWWeDkWXTBDVFKEbWAkjw71AuK14EH4jP79Qe1pg8cNtpe49fo3hXZmuQhCjr4k79JTgoL2ewzQFnHimd",
  "key8": "4T9JGJ9kSgpG2JXGVpN4J3zFkGLKxETk8Xoufqukm2jnxrSUo2X1NPG7nyCzSbJepGvV4kmJjpLhdtArBRxn6UZ8",
  "key9": "h9S4Rhj68AsvnWHCmUmEBqk7NaKGyMb8pupxebXt6tfNaJwGsE21fYeZgAn9ZuF6X8Kr8BEriHPgaPTzXuxbSN8",
  "key10": "4gn9aYhZ6TnQFkdKcNzxszrxB8S1BhNepUyKu4W64Nba8cwbtVi4wZ3ENLfgm9T3NdSag9UgNgT9TourZRG3sRgh",
  "key11": "553RAHmVtMcp1BjHLEoepBMvvDgR5dezJrZH7oBqK3tw311xyeA9sdDfygK8YdcPnQYjLXArfqXL6gn2khGdeYXp",
  "key12": "3dUQYAcQg3XkDPmc7vAMGE55KnxZzempCJwZt9XQ9mLcs3scBgWt9trekRnnrhQXDTEqNpoR3QH6XEebfeUv8gEW",
  "key13": "2UqvAnEtvNKuHVHYycHRb6vnvo1ibSC4j1PxPqceEDYWoTLnkmNmKVxZYv8NGTXozaZDZXgaJsWmm64kMJnjFAR3",
  "key14": "5EjuDW6m7ZB4ioE53eETVzPMYoK1oEg1qxv8mYDXigsgA2GDWXqmKhijmGJZwpiApGeFGQ5PJgQ2abUVcJWyt5jZ",
  "key15": "2MKzU9Fzq3XgJjJG76wLs3QoFxvkanuZNBTqTtJMYcX3mj8WcGQRHZC2TyAY1mfDGJGBCwMojVhy29Lvxg4SNL2L",
  "key16": "Cs78np3da9coiqh36NFuGdpgxyTCu8aQM1KfTZR4hc42e6rJ2ZFm7uvZt9JdMbi1ganRWmn3YCKsbY6bbdzctqJ",
  "key17": "1QYkuxZBZNFDm9xhffVAHedewZzmTtDAoqpA7SCPMGdpr5tbc4au6AU9Kzd7QbsPawHUCD1zqHtWwCiqBZ2QSF8",
  "key18": "4kPZQvxUdosRiupFLBhtj9v45TTvuQQzNwpr7Esc2UtwA3X9wBLhQw5rMWE3RcVcKQMFrvZwGovdEz29HJTPuP6y",
  "key19": "5MbsVBuNwNGx3K9zt5GvhmXwR8ir5GH9n9MX6PSizsHHb15tt95Fj8AiVXaqhS3EQ112W8yxNhtEZHdKWyARpDSg",
  "key20": "21DHPvfkrtEwLyKfeds5hGTdVevMCaegKgXW6ifh1r2mAMnqwtvLtD1Bj68RdwUu8KA3JhG45icsMDnvUEgEFtbx",
  "key21": "3rWqodH51mxGdoCPFwxvdPhBWhJwiPN8XTtJ3Bz6wMMga2ArvEsJ6Hp7WRHfMYNimakn8aBChi9B1tLFB7kQjM73",
  "key22": "3TGBXCqkeeSs9sdin5LPqgJtabzLdy9JZipj6aDLFDtaxKauyeASmN125baSmZuM3EH3McuyemxWfjwWYX4nNvoo",
  "key23": "4yoDTMfpLg3XGZa7SzgKrBa8tsdECDCGZHw14jQKAVJwULmeYqubXgC7fs7fnqr18b2eg886zQSmjzufQFzjEK9n",
  "key24": "38AypdagBcvEtJYqpVa9uFgSXZekqjXzjo8m8v4hA128t59SsqYv6xso2yxciyYHt9cUJuC1M9eptRwb9pr53C8t",
  "key25": "PGBgY1V1nQyFnYcXLSBTZeakxUcUtgPKcoctorejQCTe3nZs472xckQzpQXTMJeS5LwAENhQrhb7ibfc38vvnGp",
  "key26": "Ukdf6GZaqYWAeC6sULHvt3cb2RcydMafGHjZHx6tJZ56wLoC9k2PYzDRZDr5bxTpk6r2AghjWUGdFdGCFWHsdiC",
  "key27": "649qRQhv7yYNyqtDEGVbcM6vZWFUsTSFoWNwGj9cP4HJQ5F51BSjWyn7xgVGhnM3Kka8wBcvExH8ZU27yEXfLKoy",
  "key28": "3aqttR9D8U3XTJ9KH5zzJqjaNWMf8NiP6bdPyg7SNRKF59JoocChWrGrdBzs8Ygajo4vRdCy3yuhfWTdm3boLfNb",
  "key29": "4QKvS3WhHHdN88MJAxNn3rVZ5gyxsnETtM6wgfWGmiku5q4q2LaAkeBkzDdUErMY4qwYnXGQgiFtTGj6ckHTqQaA",
  "key30": "5a7MHoZukTPxv5PDtEVxV95ZYS1wKpvhQTbFXhC4wDjPVd7Jupwp8ybaC1Pb8D5WrzSji3KTvmPsGjHvE5revUK6",
  "key31": "38vU4j3pUGFEoXcpSgVGP9rYEDxvG5fHhahuG9RJ5tYUYvyuF46VyA2QrsqJAp5MFgPE1wFeU2k7t44BzbmUeRdp",
  "key32": "2voGbQhwoVpUczXnWV6qY5ApQSZZc26rPKhPTvESV3oUQEEJ15uRVGv1Ye33uEQqnzcFqQ14EKwv8JVg2gXxDqAm",
  "key33": "JH96KBLRFc7i8MwXFUESGWrv8phq3bKPq7jKHWpdfeRdmYd26wa16DfdhWSKs3kFgGFixSKDihxaGownRFc6L7n",
  "key34": "2N6ETojYKAFc4LD43UomzakCtqZBAfWXrtEdC1zejndo2CsZeTUvuF2c3qLicUALBYUDV4G6syFiHSM68RxZ66Tg",
  "key35": "2ySGYLTgDX5qwwehudadBRhdhPEpi4KPPiGvxqgq3EuE42suLEZAZsUMvcdQrdx3tA4ccWiJ3jhym4NCnMuhQSVq",
  "key36": "3R1LNEh9M42kvwAXLNsR2tb2KUMTcYJz4xASuToVF51UJMB78Yi7KDrTHPJrC1iTrCDwYRHTwpXT5pdxrpzo3HNG",
  "key37": "3LxgQTzhkZ33BqhPPZEbC6jf3UK9oWZAPP99nWwQnw4Zmoej6tDMhuaRQSwZZm2n1U48cMqCzQAPoJcn2ZtuBXb2",
  "key38": "5MoJxqSfWDLb2cFg5nGDYDdu6Z5XkbSS1fsGNFoAWq3jKYGv2CqGR89Fpk8SERVdkkUa6wt7gPcgtTSXUaw6Qwsy",
  "key39": "34hkJoYjDUrTy3htisoG8nkrJ2AWxJ4MQNUXyKcKakm1Mtr8zdugm3pQLePRz1rTwEUgbsyYSrqmcErvAnh5nvGx",
  "key40": "SNu6REedWNki79sF44qcdoJ1u6iQExkMW7BWAV9YeW1YzLjTmWzNF98whmZxBr5uc8cVtufZRdhiyYfFnQzixg3",
  "key41": "3Z3UEKjxQDzUR2UZSiezqjffPNFWqT1HqvdhyG5eKDkwCYCB5QzSuBqsPe8Tm5GH24o7ajDUmp21sDrbryxcubhx"
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
