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
    "4yVP6W32qKkXDS8jJL6hXfX33uqyxkkg3av6ufYpsoet9ju7dvBWMcPWddi8o4AST5jYXwuKnj76VL2yLdLgXmTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LQMG47pJgPFbN7YVPDepuTfBPBoni1MNJLxAqNGF4hHLijfu9fSZqT89MCdSRuBNMxfnmVBrcPcum8s2SUZFirC",
  "key1": "5LhokSx4XMuSxdDXZw5kz5icpeXvgb1qy75vvJuyxE8zeJarcJJBfBbAkxf8UA2ByFperremEqxTKEkVPvu9gxXZ",
  "key2": "5nXNR1mDBT8v1XbqUJ2cg3nFGnSN57vRq9g7X1j9zJPMipVkFD3oPABht4cWsfBWGzcHTnuMwNfUve7vmDejM8tP",
  "key3": "4Zcixmj3tfcAvCfMb4uqdvarurqQBGXhFvtA5vZVLpuXHzcYSbibza8qdro9nHbWpvmhsXKV8yuxkxD2dwqSEWqm",
  "key4": "c4mzqAs7o69ExTi8aVgqP9upc5CLnxmDyHwDzQKXwH84oEqbqVSLZ9yXxb4UPVT7KPXG6hce8YBP9GDYyPrbxSy",
  "key5": "3FTPhsMnmeNAWj8hTJvowYD4DRt9WkURKy5DpkyobTBCFghBCSLcVMqZh4k5zAEKLHU147cnadN4JMwBj83nVz9M",
  "key6": "wuJtzmGBkhug7Goj5wcbEZd9PwxrLSFFYLmhFMYxGvxZp9ek4zjDib9akiwfnWuJ1hv5yyjyYyXtfnNCLyEv72g",
  "key7": "5a2dkaWgz4uU492eh5Q1xSDoQegR8CBfFqUqfp1qgk3Nw3ApdnBdKCSsXHGBuonNdU9xRtKfi3Poi2PH6kaPF1zm",
  "key8": "2vpeKaAH9TYzBXMNtAyrr9Eviu5YuknWcLaySY3k6ETRncrvMdsE1ZiE2a9KXApSjN5Ucsjd2mQAXt4d2iLXtjUx",
  "key9": "42phgnV8vrfS1vXazhNeqgLuBTL2t6TR5yJwNoZ15MffNW8nGeUZvWDCw31ZNEcnud5JzGBXukwfwRaew2vcoNcZ",
  "key10": "5krYuSNPV5gHc8tDRaiQD5iw49nma5DGCqxYELUvBm4xE18S6RBSAbUuXf4p9L9sgVkxgWgAoZ19QkQaVdWpru4o",
  "key11": "2GMBMuijh8bPdWeBZdbrEdyLham7xqT5pFW2Et6t3vWDinegWav66jvnDWfym8T7FT9fr3CKLCqZy29ncFDiAey6",
  "key12": "3YSEFv5t33mYkGn6rQ41fWEVFQ9KXDKEcofSrVfVrrMMdRZeeYD1NRHzWbAVSVuyPnS1VFm4S2Wb2JFJCH8C9Eg3",
  "key13": "2N5QJFNyUk5t2bivXo53coxfCzGQpB2hrfiC8VWNgaXp5QQa7oxmDp3cR8Kg8nrguh9DCeV4Yxa2wFVg1yZzFauL",
  "key14": "5YxpBT73uaqEvKxm9NA1SKr3XDfY8ZFivPaUsbDj59jqvGzvD1QDGkaK3eVyJNWsWiRioREKjb7y4PSbyAaVAe3W",
  "key15": "4soVLBjmUSs1ZLFaGcVeBSfVN5857pYCT1B2L5hG7Dxq7gcxPkvqiR8CCvMh7zGExZvGqXgpcci4RDpapmpSDPj3",
  "key16": "MxjWRCqMQG7ADPNyzz54m8xs5y9JyLhGXSR7mNvuRedREXdqiS2nWe2J3LioEdhNG6gKUn8GF6fBfi8W4BkotPn",
  "key17": "1Gfs4fwoTwGKa2cVVW6uYaty7MpijapAP23hrhcCkseay991QL8oG3x1i1SqRyuryBmP7bihj5rTZrpWxmGZSBq",
  "key18": "2xUePpNXjFugLEdhXogwBUYgBApm35SwdfkGXGr5L7oqZr9UkDjDQADBHiJUxQvQ7Pit1ztBykeTF7xhuYsx9iSR",
  "key19": "54qFTRGD4LtakzQxHJTW326vQLuBwN92vkNa1c12MMzEsirr9FCnC3Kr6Xu4TLGE4CzqRuBUTxLDnEfrgmncP82",
  "key20": "5vuF4dYcgVmKCbEbJAVbynTzj2fhwCwc45wBTJMYNAt6XmeGLcoo8NZBJF1kvoKmMuz53hfJeXbX95n7oWJG8SQ7",
  "key21": "4tL3phXuFxmhxvrMVCSioapexxoS7oAbDtHtFocXX3uqdDKzSC7BGujxrt3HicudEogPxN4ZBSgPnxpvZdqBMwps",
  "key22": "4hEhjDHYRZoXtVVzvQjUnhnUzKUQFY6U9muan8ryeCJNWEbnMvb3SLpXt9w2q88zbaFu5jEPjMJaFqz561UhRHKT",
  "key23": "5npAVS9q7AFDy5V855AzvycQLcRNHfV4rM65WTj9uXovmjCCE445BPXJupccdCC8QHgbEZtLbHa9YdbCHuLxXEUE",
  "key24": "4VXMyrtvKJhzuhc1vV3uCj5H2WMund1QRYcbrJXvcwZyyAqBM8qmxABUbj4d1RfNfxQC14AtVu6xS1wAmDXYR8ou",
  "key25": "45BNdh8kHTNSQDdGoU2dxDURWgXAb3aebvu4Cwrxx5TgHtCJv4dYmBpgB9spmXDDvHTaRGFc562mCSLu9hzNJ7QT",
  "key26": "2HkCpVbQ9XxpF4fGjVXsRwWDj7LhkaxkefwgLircAbKg16f4HJZLgjfgXPgXiHiLpLpWVkW6ETFMKCUJjf4ChiuD",
  "key27": "5njkrTVvbS9AjQbDYVxVFHRMXSemsKeAwPMsgibX2boDvjLbW6E5LtuqpS4P9CdEXmNJpx5VZ1RQ54CprynCAyAQ",
  "key28": "4rVq6QiSDLQr8yhcVNM7mWkgTjCx2i7no5DnbVLKpckisBv7dp8o3isdkP7zBqiL7ihaqLBdzPPDkprJ2ustjJvm",
  "key29": "2nMZRX99trHWBK9Dog2T5Z6Z2dQAqqPvRikXmDA68WhQSk2SqnqTmxJB7zKoRn4FS4249zeP39WucMWy6FJxRyqm",
  "key30": "3HrK74UzeY7MvmrcRzpjotHJWAxRMjdGWuNEDQTH21i3KxAENJ9um2cZwnvm8QiFbLw5qcghvrHKQ5A865jFEV7Z",
  "key31": "5nPjjBnTPwBXFK3eZopmn6dJpUhyH77fxegwdWLYhNoA5RvELWdfty4huZtMhvNE3sV1G3zSudWjpd2qZp6o4Bsk",
  "key32": "46DG4CZqSS4bq1iXaknrf93cC6J9G1shrPkQq6B39c6emMDfF3kyfwr4uVCBpaoQwq5VXmvN5LVf8JKo6Vu8zev5",
  "key33": "2o4EFDeeoCU3P13MHMfcNQbq3Mg6oTRDaRLXKUuUJACfo3XNU6NxeVnqrTjj4fZStKgaQKbTeSBnDR3TNvHeobeP",
  "key34": "3jnema6W6psMZRXUNhPk9cLP9DkyvVQKQko4yHULrNSM2Q4ZRf5L6Bm1Q55UFv77766zsGYwXR1hXVLVg3y5LhPK",
  "key35": "44UHyfSK4X1XU4NCfs9ZStLn5ZLEKaCZWiqjcYM5aJetXyizoe71MMCmoS3zbqf9zPD7iaNQgpfy3WfZdg8ZVKDz",
  "key36": "2MYQUG3z8TEAsec2Ekpq85ZxqvFY1SNtcFDCiMo2ofSnfVPyBC6RSY9sdVN5xw2DBViXDBDqajZnhZj8rye9u7Zw",
  "key37": "2cgKEdH1JF6Ds5kjE9cCuJ7jWkdPsGNRiuoJxW7aJFihhczsxi7yW2dgBpQP72kNpHKiV5ML7UX1ULRuKa6QH6eZ",
  "key38": "5cJ2tdjmJbUrMWfAz7yTGoqKKSF8nQKAPUFX5cnKXdCtK1cJtMqP1SSeLGfiBzLZ1XdL7mdkhfek5imPR4edjr6t",
  "key39": "2VAcrE1AtnoBQjQWXTg7mZyBt5ThjMqrzorcJjpPrPVDrMg9fx6goao6rSqSNQPLoH4hGiQTuqCPUhEoCY5tnjme",
  "key40": "4tziiCVCLWUsHRZRYai53UeKb2PHWwQ8p51fhqqNycdE94t2vjtv7BUTrAFFkkCiPoevA9zixLG3KLbcB3kj5W69",
  "key41": "xDmNMS3F7X19jALVx8hGBDZAJ5d2gHSnHMqYXJ5DMR8sMhDJodMdu4j4YefTh3rrAfxXNFz5zCdB5LzbKZBBnGY",
  "key42": "4qbSwA2QbNPisvM3ztkowokv6vYaApNvvGWNZNCdfahxt5vMH9YBnwMErJjM3cXcccNGAZ6HrRbU4Uny3Frfmfh7",
  "key43": "59mR6RupAWVepU47NFK2x61LDN2XzGR1Jcfs6p2jXAJdSVnZCviBZKCdp2UuGJxpJJXam7sVYReygaS6cg2yMjmy",
  "key44": "JQeZincgGtiNZ9sQJWKPi1oDe4AgRuF2mciHwh11YhsLr5ogv7svfndVFTmGrjve3dokE9dTk8g977hZ4KhsVK4",
  "key45": "2Mk9LnC4v8hS7kEZvyPwGTq3R9wKw1MhEsN7KkyY7TCnADeEX2LHeN9xqS5Lx2yt82UQ9QTED6WWLkNASsQmAcFM",
  "key46": "VcZSZtbE2CX8mY84MvnkKWhLWW6MwiCTFvLu9VDRhq3qbn4gcT9ryucpMxKirKL7jT4cUaVbZQtb5cxwyrKn6X5"
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
