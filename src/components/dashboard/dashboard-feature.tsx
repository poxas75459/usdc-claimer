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
    "24A4PCSCnhapCVcssSr5hcqBDytaZD9hpSjtmH8gJU4XedR1mTrcLiUirmZh34orZ1hrACTP79ZqtaA8wY9qvxgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pj5LXXA1FeXziyLYkQKF7127ScSPaatvZo8p9WCbRYJCgBMCYqTBMHXC3tBk1Ve3WatFEupEFe2qjAhowfoR2ee",
  "key1": "2VHQLTYjsBnqu4tnunRma7cUdQrz6M1Ah7DBwm15nnyqCcQKR5kKnKy3tCeYqNqbmUs4VUpCUgMdTSqkvDTRsbue",
  "key2": "5o3H9nhCidgUgYa4yhuPEgjb5ZEBp35SGj6kqrhswcXu9Brhpisy1MNz5irc5DNxPTLRaTjBo2PuxeEppj7z4Y6B",
  "key3": "2sDzUmdZLn2CxqPgtSFLasi4QDozNaJ4BPgp2zR76Z9FUrFYvJJ5GZEpYDXaJsx5np4aTP4tRjVQEe894H8iC15S",
  "key4": "DaD9wTfb8YmxQYoEkbCKGicfYQZsgDu6KiW9gDjubVpTKiEjBfYTEkQhABRa3sD3KFw5JSNSctCX7HPaEPQLqmL",
  "key5": "3Bts4cJsEFnLhR3TTJZFjMYHiFtM6uNHzvZBfJfJ9MPsX6EJa55BTE66HABSFJk5xZDuLfuW5nZKjt6k9SqjK6s",
  "key6": "3DsoFiGe2CZDowTdcvogHg3qMTPowF5uKiFGgXwSBPYPtS4JmLWkbzia1A8t1nsqTFQzLtzHfJfXuwcCxVueo74g",
  "key7": "2U3U8ZyLkZcjbcuwZGGFa8kRbzUWrXVG3CdtMRwdfe5TMnMynRqwUUBXWvX2563u6ktyNbc3na1S5PBP2RZNcVbc",
  "key8": "2XidWdkumcGobmN43CjRmm8g9jibLy4dnQqvdMfztxQPBGeqc3eVaMthNS7Bx6qyJv1Zj67vMrZXtaDaoWqzUpuJ",
  "key9": "ojPcTbL5hxbvhRvyVeoJggaNgovbrnEWmcTRwbq3JueosMgKCg9mhSMpZ6mEUCXp68WyCGWt5u2RYLyVeTs7y8Q",
  "key10": "ZbrsaPLDsNzFTzMwkJ27SiJLDmdTTvj1m28zHKqLTwD5GbVCaSkFcHMEz4pHtS6dGtmantJyXWCV1X744YL7nBT",
  "key11": "4JmGkuj2gCJnWFBbPoUrz8jxmYhHMrdmYVvdWrxtb4Dgpr9HTRqw7vedtfUkoM2iSUz6Sut4Pn5ZTKcjrykHgJvf",
  "key12": "64jF18hBDtFsco6JmCh2Bk5CQq8ccZ8prrpTUofoKA3n5XPBSXdodpubqppbTX3ibhMgJZt5Goj4Zvgwz8FAWTE3",
  "key13": "2fbKpMetxZhorjmyr71bqPbDWeWnn6iv5nVqbGkzBDo1RHTD9yJcWWJUJ6vtc4NZdu5BjVTQRrJtHBoYEdJcvePF",
  "key14": "4iV4BSBDBTZaMZAzbXB99Seg6pkjN3yvmvqHhJTgQiLn3xqAngnW85a9sYbxrMNrVNtPCiuPvQDxa44vSskhyJ6h",
  "key15": "hP96T5b7GtcYEHRTXWzJbLJgwgPZMRw9Y5JcUrujVtRXUQQhwhcY8bHmjuEVrzEb6x2gRpJ7siE1ZH6VctM1Hfz",
  "key16": "5KcBy5rXjwU4tWrj27PssHCSi3AXSM2YPH7D8DMPM4g9XYBYe4VnrUp6PLeamZvpDqrq2Q9bGcF6SbpuP14hHYZH",
  "key17": "2fcvw9qFgQ7RuxtkdFjsAfkB4h9p8KEELy4MJLDMTfBRsGujCxKC1ZzUWRHF6TrY6Ehk7BRJLZbRUFXy8XMc6rB1",
  "key18": "pEjjW1fmSsmaQiRFz2TR8pfRoEgAiE57DK1ScmHxkr5LYyokr4tfF2EgbcfpMaHshp5WaLCryPtijpcgS6wdABg",
  "key19": "3vNP7txQCT5QXNR9fZnokkfU3ezqRv7MTSyda34CR7EdsNRW4k5ZWRGwx81oxVwnRFEFN9Tk6KMLYir2Tvn953gg",
  "key20": "4xSpybwSrHvs7hoajrXKQyZ66EwDHY3D8uNEhe7WYrbdER6f9D9d1coDywv3wvmAvDK3stxtNfvXs8Aar2PEaEaJ",
  "key21": "2fyA46qHzq7jq3xChGPyF9DRde58DJGy3EawiFKYn2fNsmq5PRWWL7sKNH1Yh5xL88KCAiighXtYrj1Q9faThW6a",
  "key22": "3FpS7rhYGvkmzX7migtqQ6UbbGZdiFBPdEr8TuY2tuCLToB7kTDTT3YbfrDw6UgjzAGVJ6By7QJvjFyVE5KjsH66",
  "key23": "2BKTCWztY9BFn9osip1p8YN5GMTYt7LWh4KDZRQU2vXsxgzcvbjgcVPYhopVcbGDvYuDjTDcUwFijFGEo8jQvPN1",
  "key24": "2qDdMt4qpRwqisiaeGnHgrjbATVk9f4DCCgmd4JEp5f7D9rryDM5CqtKfQSqGW23RW3DaMLyYpZcEFRs8SSQB2Yp",
  "key25": "38xusQzi1QwzX38eEM53zW2myaqPnzSYpVoXdtrjELDUPaLa9wiY1Q7LFFD95Ej18qHv7RL5SufdA6uW8oVjRHit",
  "key26": "2LEwMmcQDC3iyiFsH85P1TF3GAqZGDun9qYSArjMuFZUVUkQGAGkk35i24tSfcfb1ERt3k1iBxyEkemY5fCX5Mj7",
  "key27": "4boacxjwf1gPrQbMU5DHPK7Df9R5YQ7SYRK4h2pX8WX8cZpexRuWTjJ6vradFMfrG7MvPbfmNQQAFoL5SAEtc3VT",
  "key28": "3tXAg2SQ3gQfwPFHgSvFyJVJmVHj3b6Smw26ZxsxzH4ubSR1HywGy13Hvm7mHtaru8VLnMpQrBTQbUd2NyxX9KqH",
  "key29": "4YE4CTcCvcmJwvPj2hkJpfBm5uMx6XeVAfLqM6LwC7aGpbWfJzk6jkAA3wdUftmCo8TobRehNNPctWyWiD4K3Nuf",
  "key30": "4CeSmNmkMANT52mHiozjRKggfrPv9ZCLjvmDM6KSPBWD9KSYuetuGX9g6P9yxwr7E9wxoAbErH7DigvqTynbmbJH",
  "key31": "4cfJ4GcASkcRWh49guQkicKs1qMGgJ32nkUgACeABFx7Qpz6AEfaaSYgyoWMWzzfQzogRedsVmkFofsjJxk4KFRL",
  "key32": "pq8vNJGf76nXa2vdNeW1RVhQH5kJgxvKMwDvJrArvTcBvDrRiZQtKWP1ZPpjHTxXxF5BoZmr9NTQKjgEejVXtjw",
  "key33": "46aw4rGuspFjBtYZ8TUsAeAwN2ekC5qUZwMVQHeQJtLkBTytTiJhdkZ42xLspCMUBpUP2p85ZcbBfbxdNuwzPkHX",
  "key34": "2eMFb5aVotyMsx7vCXFru7hXm1SV7T8H5HSkvrhRR72BtMToa9f1zN1DU5yu7FndLDGktgnpeStn4HrcXMqG8Ekp",
  "key35": "3P5vc1UPrDasrayMCFkXx3Tx6s6qUQGakayWCwEhGcY1tMvg2NADnuPioiQ6KU8dwtv45UFDnojSNThNMnLpAUr",
  "key36": "2BaVn15o8T3NGMr87dbWwbTmorNvS8dMmS2YDedYyMWvtQ3mD9JFrqwqNaiNLDdLNsRezXTP6yJP3aLNuXgMrQqS",
  "key37": "UJKmVq2zR58rADwgNzzSMKZaSaxeRRbWqvER1HKb5hsFk5sed6NbHs9sTCu6DK8q5XZzDEaH8h8P66WKQTsxqvu",
  "key38": "5NkFZeokuYjbv8WFjqbsvN5fU97Jq46LL3EeDpbv5a2KmBPRPfpTszxBMWdaikUpzAwxwDQfqvXY5Fc1UPB9Mj7g",
  "key39": "66YbvC54UYCGnTpt6xMvoeKN7PgL88HfBGxsr2pgNTG9X7bv5BTveCzwjxvMwpN4xRaDK5SRkFyB7adqUMGCaPgK",
  "key40": "3k5MpSu6rgcTGgzNwNvZn3hxP7DmiHsk1pY8SDAqGsMFX5nshnHYBAARJrjTV8YYaRBSVUu3CvedB2y4YjARGtrg",
  "key41": "2JUZSugHoWpgDBnwq61Xh8ekiC1u6t6ceFiyP4XQmZhjzkpzG7vMoigm2kwcLrgPtQtoA1wSQfAQvFYsaDDk9ByE",
  "key42": "3m1P1qXs46xkfVAHgpyKtwcGNuEpgmnXx7bzQRLankWH8hZ5HEeRwFf4BSkCuSc7zMDjRGhRDMyKPvHSDkRgygoo",
  "key43": "5nUCaSpHkVXxPJKoxTTzWs4R3rxxNQwquWtrjSFCxjpoVp258HHY9X11wob8E949hEpMpDkccWSAM6VrPVKEdypp",
  "key44": "5rdDuDgo2SEYaFJuqEdW1Ec5TVVbdsjqenVyfqWzWjvRQMoXqbWmWij6mUenFpAmuEgYRX1KerLHys6DEK2dpNaK",
  "key45": "2sQe61kAdYYQMHb1fQoKDExBwApN1Rf6F7oz3yHWqJSpfgzHuKqK5RDmzgZmAo9zezsNaB8jojrhD3cuSUYWgjGc",
  "key46": "48uDqURvsywTdAcrsZLsGLC2ChCuy4CEbPxNKREUFzHzL7sgamt1uHv5g9uip51Gwgp3FThXtrWNKggWwpNF5J3w",
  "key47": "263RP56RK8PQuDWq1KGTzwxh4mRgELhjmL6dPRqsB4UN2qPYkEfXvHeyNjLxhUuXZzn8R17EHFibpfu8kvkfWUYT"
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
