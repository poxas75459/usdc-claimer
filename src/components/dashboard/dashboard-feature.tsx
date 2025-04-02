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
    "2YXFk8MK4prQTErHfpcCjLR7jWcJd2VEs6E466WYVqSepUTJZdkspiz4pR4dtqbgUia3KV2atjEPHfyAJhMupmKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vyTfCULMe5nHon7tM2xfZMqPWAHY6dNxybD6QkBMECofqNrMFN1UaPbyE7Wz7XDWQvJz46AqUx9qYM73VNUg4ZD",
  "key1": "2nxCsiAY2JVj26GiPu19pKRg8FgGqZfWyBaiFaygkorz6P5wrdbeA9arc7KfhE6qe6i4zGySKQNBWFArJeLThrCD",
  "key2": "3hjfEqa7urez6wPbVGwZa2DLmMhCtLqPewq7ZRKH9YXXpecYzvCRXePVafKKXowbB6BWH7gsgrPmM74CkL41nQFe",
  "key3": "5QfQfz2X84PTcr8BgW8UKDzNzW6bt6pV7yhLoGNHFEPMygZqnJyNJPw8UZdVy6fjGFj9XTvP1GH4aak2rjNqY5o",
  "key4": "438rkFBYbKUnf73Sg13uwsSW8eBzFu37iMSDAg71xwustgPF1ArfrUDgxBBcMh3uW4sqnxfiF4NajL4hD2B8GGeJ",
  "key5": "4kkTZ2JFMeozuiTAFDRvEbCKsF3MBjtHH36eKTrxZy92ejQrtHF4xLUXdbPPLZgaAVQRFQ3rfe6ZqrGdmkuq1Rs6",
  "key6": "3Dn5EG2s5ka6UywzUQaiUkpVCGaw5NaV8ExMQsYGpLq9v9JvHzhhXjiWVty5Ndey2NRoGDF3ryQDvWBSx9sEqJRZ",
  "key7": "2nKgcgD99wsSF73ihRwAAsZcNKSo1LkRhDrTqNda4e4obCXZSsoyQP89H5pZLm58xSCsUGw8HeVGEc3byhpHpini",
  "key8": "5vFvDwp678Tu4x8xmz3sLKrBKKc7B19mXYWbiQa782oLSXoPgEDPSnckE51mtNKRLhJg949Si4egaMvMvU4sApBb",
  "key9": "hDDfumPbAfxG9qLZX38RRtvdrevL7fhJCRNVPEtKqnThsP5mzWYRubW1emeZ13SqTqwJK3wpivN14Jmee6Gbemq",
  "key10": "j2PSww9A8Y4MopxGCRBeqges1dj3Lg6HMnuCeHpNBs86sc1xmMZhhdwV4Jz79f3hfpH59KULTehizJo7wUbbBWi",
  "key11": "4jj1AtgmZcQR1nSJtw9UjiF8rjsbk9rHfYUeuiVDQwS6ZJPMV8X4vaVc1rpCrSext3iqXqjE2sXTDE6xxaeJtHTe",
  "key12": "31d5TBLBNzqqHEsoHgrWd2vvhMHwirKAhmaz1xpiFLHpgqwspLfxyyUWTbk4Us31auZX1RP7Zbp3YjCyLAH5BKnb",
  "key13": "4oPpjCLs7FnoiZDx7oozQqxgE847iSsAp3Y7Uh7Ejp1SyAnUJ7zQo51n3cJiGk7wPH64i8WmL9ykuNdwYu81viPE",
  "key14": "3B73TaigLTR7efXgisaUwfAMJ7zDJoXso39ymetdRfWe6VMZwP368zStT25yBmWYSf7geHjBdf9zGfMoCjp8GGWs",
  "key15": "3QZPEBoxYX58bjfqmpQWzbmM94eHvt6PPSHikuj9z8BEudA5TAwKPRwFMvw9PjrzMNnm5Nio1Eh3jBDsM4mBfKrx",
  "key16": "37HN7zpmnkid8LE4KQSgd7bqMNduUhQA9w2mK5QUPnPfEswpabcqdSdjp5p5HZTH81EzpuzZkj1Mccycei8446ff",
  "key17": "28VzsN2n4GiT99kHUaM69kYezrTjgeYMM9tkdnzMwnpHKCHnHQ3BX2Meq8TS2QdosQbtEiveQru6n6jEzsGK6UFM",
  "key18": "3ywcgH19hdspYLgzqB4Q61WBSHSFWgDqBLVVqELqCXB8LnU3PfTKRDCV1x1V5umQMvAtkUwaqENjGcgeqGQGqFW6",
  "key19": "2yQ82SWUZAnUVffVHRKaqwPxiMQ8CSTtfNTiqjDKESNZXdf5Mftwd25RcmY1RaEvFN4XV7kATvKv5Xg4GYZ4Fap2",
  "key20": "2Y8GpyWmnhkQ6q7EHAafnf8KajgWPP3BXBpJ13XLbUqcpzLYHjWLRFD5UrDQEEcFbVqGy6JcquUhLwBMgCN6Nfx9",
  "key21": "65j64S34KJDnvDV87cofeb5v8iJKfYCkxoWDSBgPhwk3GjkHn5mZDLoPVzFcMrHA9tYCb5fJjC6wPA7f9Zzs63bh",
  "key22": "567dj8JAnsKu7DLuEb739r1CRHMaYXh5t7Lrx4B8aHnvQospc26P64ou2XstPne3EK9hXpiFYh6fhDYzk1q1KDNn",
  "key23": "4b3nJesQHxMJx3sx3JGrVwmhxTsyUwXpqJyXd9a8TAPNyWveXh4Ene9P75nCkyoxpF9z4k6QEZzPWne2xa1ddvU",
  "key24": "XyDi8zyKdmugoX3TuK4XNPTeHzhiziqixknnDedh58nW4NoeFVRXUwvh77ASumBZU5HR9MsE346NK81tZNPiSBw",
  "key25": "47FLc5x8tjeHZccY3XJ2uLVAK3svEjq3aA1qz4rMe6AkS2f12agMpV11VKBFxNLj2se6sut3AysFv9JypFpefJcp",
  "key26": "3tQBqnoo4R7ymLm3gdqCds8RTndJ9Xmq21aVSC3fVHBDBMFCshWJ4yjhA4r7T6ZEMvGob2DKBZpqUmYacKCq9fmA",
  "key27": "33seAZuz7HH9nYjPdcmXmNo38BsWB2ERXNdboSy19F5MGQJPKrxXhFcW24unZRUYms6xGwPJxv8ZmYmYf8UtzAgg",
  "key28": "4NCmmuLwHqcSCHVav5jvXFRBN9omKSj7PCzWPpQXjBNdkvhA1GjrkPywYFKCQ7H1veMBMAfnkwyc1zxDafusQqpB",
  "key29": "3SiwF8RA2BzxSaUw9Ua37Rca4JjTNPXucYroqvWkQXE226pAohL4CZDJ4jGdhGx4g7RaQFeczuSKb5y2qG9eZ9D9",
  "key30": "62BbzKBCidpfqLeT6giqakH9ADFe75U3sStuThpL53WcJrS94MJYokFgDhCEoGEBcvnKdTaFidVfEiyt6EuoyBkH",
  "key31": "n7JSDZjkT5chZADX5ANg58vmPHGLoc1RQbAmKQahS1F2ZsFukVC57C1toDShaUoENr8d1aNB7zXUnpi9LeVCZxu",
  "key32": "3JiSW5Rpk6xNi9Hih7jcTGtKm5RNERnmSj7DLaXhrfeGYMTJK5Uj5ie1H2FoG9uGE1zK5qgDvHzzYifED4mNi96d",
  "key33": "4nd5DCLTzZHpDHBYLKZFey7AYAaxYmZvEDnxx9Pnv1poei9VcdrvHfqxWmsC7YmekZ3PEKQzhBZWVPKAKLgY2s9D",
  "key34": "5tuSYPB9d6mHx27d1M7icKEF4x5Tq3vNX4KgKM6LCCCqDuf2qobZWChqAdMw6fmdxEk5RwCJkHYo3JKPooPpRZa1",
  "key35": "4nVREnDUpFK2L5acZrSbMfFN62pJ4DkbgHmMX9fvudjyAmCttYpLGDnpdcEDx7wKtx823hrw8MPuQU98ZtUekgd7",
  "key36": "z3jb1rR5BwbDvL3tpjXZgNrwDFTAPc1xWh2wo5PTccLRH6ok5SwnVCHYMu8TWJ4TfbvZzWqypj4gMWaQRQb3TpY",
  "key37": "2UbLCX4TyF8CW81YpvkNRHBDQnARQ9nS2WbMAMb2vaSDg3fNoAi3h2GDvYccKGEntytorzfuozXpBoLy3A6XArGK",
  "key38": "5C4YGKCfctKtuevV7QnianGyiB38ZwHZxxST5WycEUDf7Aphv7gMatwCZvoMwAnGMAJ7s5dxENwP8iGZyKcdxUCv",
  "key39": "qT4VaQSfGL34uKoLhkcMSBUQ2yJzwiteVaE4Eem6ByLYrgNZrBNrS3HkC7B6deovZNk18pwQuwjdAReeKbpePqm",
  "key40": "4PkBFz1UmqvRnogfv3Qq2X9hJhgs3sJbSCkVuvsTV3U8NsVhGtTaLXbvj5vRphNZnrNUUb8mnZGhrJiQZw79Ai5S",
  "key41": "2V5U5hQB15svwpi1gVti4QdFLwDCbgpTqjGcqhxoVDzwLyLMMSvhVmjGV89ax7Z3x2P8Fngcj9c6sj2ZZPu1889h",
  "key42": "2yzaqBrkBJtcxPmf4ujZZnWrifT1rSk4qHfiwFERJKMWqrwjzPdqQmCoxoXxL5eCk7a8gviBCsV7uEw5apt71rn3",
  "key43": "2BH2NkNN3kdvFk15viLgJbntLhm8ytC1bKXt9SxCA3HVp2MttJU6pTzfyqM9JnguKbrktL2oGCKDYANDgaVDzZZm",
  "key44": "gEPbyNyQajefRExM4g2DNUdWMdaMZQWsubwLU3dXW8cnH4Xn3LYLo1h1QUV31AbFPJZSEDsLxW6q3K3DnWK83qY",
  "key45": "3aDVLM32ffXYmBmjW25uwgd1PEdA2P7mXCVbAuYh4fpoh9ty8FXSk4QxqtKtzVGB5BSDSvozyw9iFujhozBzPwGS",
  "key46": "4TcR2pfL2Fozqe1yKJoBE18SMmkkeyu7aQnVw6nzntv1wBdveGck8z9MxfFvoeW8JWK3vvdBHJavPKejs1e4pZxW",
  "key47": "5ZyZXAtAx2oVfo7fwwyo7PsckWGeYDuVw2hTYmGnFcyM1drY7UEnE2oqEaEDtCegJ5rmWLd4t1FkC8PCFf5srgoF",
  "key48": "62zAMKcEfsMXNATR9Nnt5XuLg8kXJJ5QZ1Yn4oo8jjQwwnfHz5BaG2smfSH4dCfdbDeFfJtTbdU3ZCEjAgYt7Dkq",
  "key49": "3SA7gcPPBwZE8PMi8BUf6pxEeEPLw8axLekuB1D2PUnExCxYCDbZWZCwLxS2hoKYv7HR7usWGt5U1W8xa3hmX4Q8"
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
