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
    "YskbVrMRC5NTG34kfRqWbRRpMCTBjHkiCWGq74rPWratPPrX17bFn2V6qq8qFRt4nuDnV7RnfrxSnPuf71cDAJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YaBC6MKNzdTkYTCNf1KJuBYjubs3Vz9vW6djgZCmb1WZtJnGzAGy3W8Pcf1R9UfqtfCkJhbc975BwNPz1aRpPbz",
  "key1": "UVLne4pzhDqoipooNFhW8Eq5RoZxZvAgsfFFgrNa417sbWNYxb21a9XmriM8FgSKaJrXWq1UupoNoTjfFTRb34o",
  "key2": "58n3a6yLYXaRCuLUNwfYFkqQ7c1JZ9Vxzm3wWNG96X86ejYU8pgvaAfARCP1BUS3DvfFoTBoGqgocJY8ebhcCcip",
  "key3": "GJPCr3LMvXsi4ELmwtDCAkvA732cBp9VtiHKa2GothVJFbBMRgVS4rejSKXo4vuTnKst8vuHE9qNFk14ZyT7K7j",
  "key4": "3i2XwBxCVeNe19sRUtvHRuSSHzagSANNt55KUjkYkpNEhLxdnMJQvtE12MZz43THyCcPYpSsPFmMfWUmY2NeEqGW",
  "key5": "nZdbHZJ2cSY4NPgXQwLde3aPMCv2UKizZmxVUdrh61hc3DDruxcr3bpcFWhkC5sJjoGL1iv7NCvTZ5BfEbedGCc",
  "key6": "5DnsVfPtL8iiaa1EmhSJhB3ZT85ihijKFAtnGjUUeV1Cv7D5wkumKhxgwe539SCf5xQRw98aukag3nff6VnJSYUM",
  "key7": "4ZX5gAmqvgrCcSUm3p7ebVke9kg2ozju1SbGZkx5GNVQZGmCbnFBF4VN2tf6YjuBNjP5m7emcaazHLvtNT91ZEFN",
  "key8": "B3gMdyLBeP3QMBkzoEjUT39pBKRrQ9FDbACoJ44NgozC64xntrUSoAQMV57ScFv3vKP9KoS7NvCLvreHgGUpcB2",
  "key9": "2wDWAP6HvQbdDVVLRxu6L1F9uaJp3A3n18KkBM1F6y5TiTZRDPZz6CViCJpfSpork9SsnuhBfyjJiuKxSFcUxS8E",
  "key10": "K6ZfM7rddWPmvgKTcmSszSyCDWRSCHiR87aVDAtLeSzJyWWyNQnPdaj3vpzVNqavPXVqG8r4AkDRvH92S8rMUDE",
  "key11": "5HyCgLYxUrbK2pRd7EWL1FBWZg3rySRkAB3m41ptnb5QDZVBT5KjptigbcBcq7kybmvMgXvkniKHDPtcHCrySrbi",
  "key12": "4GfqZz5sJqYJfLSQgH8EueKvEBZ5W6ym8knj6Bk98dA9DhpCGMZdCuvqEtpNufuqeCUyprT1gakoDtdZqx5EPauH",
  "key13": "3f1eVqBe871voeCyPQLq9Fxs5JgsfVZ3sCgijVbWA6Cc6E7VmHnRuqZ4CmnZHZXxGt46A2MAPJ2HuTUs1mobGizA",
  "key14": "2cL8gvegAB2wwAwUtLJnJkGy1obuTC1rqtzttT6tD5FKsNchWLbq6gTM4Pax1DpoVEdKdsW9ui1Mqgj8JcTTPEPW",
  "key15": "5w5hecKkk7g4CKCX7b7JjWvvqurh1bqaG469AdVKXsk3Gb6x4GBCo7F1c52odAC51FTzbgbMykhUX3LiNwGVvwVi",
  "key16": "42kkTGLM62g1irLghbhXv1nJbaJzWjiK6H2kwdYL8gVGrKws3SpmsVfCZQxqHX26YSjpCiEz6eV8HJrgWJJ9MqBX",
  "key17": "5hNZb2mn3h1Ks3nmxFBavhiLGGosrqWvjbTY1DeP5fxexv2M72unqzduMAQ4dh4QgsJLx2jAxNtMttCh5wp1Febk",
  "key18": "28neHjoqF3gj1mJXXhV8uRga7oDZmEXa2XVYiVqNJJoihfRqBqkd6DuhjmUmxmrBkPjjRKgq4piKh7iPrzJyd9ku",
  "key19": "HBtT5nrnJTBpCaFYRxK8wBJZLH1TH8BvQJjygEVNrWopmFig9aHea8y8JMLfyAD1MHe9TrZe3fBvFU3mgHSwPX6",
  "key20": "2YMWweTV5131ekPncguiLbkov4fkHtnGgWvbdReciD9MsH5RNdernsacQKhfU1a5ABSrDgtqbkzw6dQ4SZtHhSax",
  "key21": "2HtkvPTX2MFKkXNRhfqrAXJG743tza5s7zZBJo4A1Y4X3mrg9oiEhPL3ZqmMKupMS6wEA7U1UvucehBRGWoYEgef",
  "key22": "4YAmbSAPSSpK68NkE3ajUqyUBxnbX3r44DcCGpFZAvqgirXijaCWAdBPE6n5DtHcEzybdGeVHSctrYiaCZcH3Ahb",
  "key23": "2ZRzsFJfHTAvF4K2bJS8VAHq2xrGRzrQzm1tMgodw1xxaT9mYK6F2hCPKNEn2YrYEJJTzjoAbmwYAMe4CxscD1yo",
  "key24": "3fBVxekgtbWq6bMnKaL9shjit6FFc6vURHMoxKSFXk9xQP7B3GQPqvTr3TE46JGUKkWyqpE83aS6jjV6MuUudDwc",
  "key25": "4CTNqmy7xfvBhNqyhjUp1F5XktiCwXK433iUv7wCCHzhYTj7ZR82FBveGt6BKHCzowwvqpKattSNF6ZR78GMkfpL",
  "key26": "2HU5pBHYURwB7rFiLWJFa8pi2ihnnEcKtjVGk6j5EUUDBAEiWc9YH3BH42rtUAdaRDiDSSmsCT3jeF9YCun2HVLb",
  "key27": "gJNJ1zinjpgyVrcaqoJQL7PTvDe8woAPrEnbRhehYxN8qjssTC4xBL7fBCZ4Q2o1Kj92ctL2688vCEnHtk7J5bp",
  "key28": "2CQmaDL4oiMKqLYxu9XXq39eTeLNDjgSR5cDcZA6ajmySwwW71uoqSPknnBshnDG39yRBdG8JvoJfvJThhebX8J7",
  "key29": "4SYmVojZFiWB58WR9aNZqsHL2ieGZVacR8VLg3t6EjvADbnDKbJ3bsfjxhZhWUWbPntQ9KA9KdzuN3DonMNt7x7y",
  "key30": "4Uysu6KGCLsfRN9tnLEQGgk4K2DXQmuqBGSq4WPwk1YhaVd2U7Q8q7aWCQAXUhCazuWTEq1ndjFcrLEmByjoZbKi",
  "key31": "5ENFemNdSTUc1xcKheE553xfaH5i6XwHh8BNPp2pUjK9jJTLhRq6rHb2A3bZYN8ba8nabH2UfkBcA4Twphavb3ry",
  "key32": "2E51Z28AgbDTCB6xqyd7o8znnXuR9LXijoVo9aHvcfj1RSMjHByRvXAZVecj8CcjWeNneRyLN6H6nhncaJPFBCBz",
  "key33": "2ZUjnoiUwu5cpTzPPCaXPvSjfArN2KmEwPSkGS6sE6msh1VQb5rnCmokddVgdX1pV5vUuTrxwNT4gdBisXCvnjw4",
  "key34": "59smp8qxu4BVAaRt2T5ENP6FEBa97NEQHjmavFFfjDJcyVbdoAL43MPyTwYaKw5uqFr97sWXMtESBn7QhBwrpMKG",
  "key35": "4PKL9MvPDLPjGDxyQD9oNXg3KZBC5VUqoPm7bZx5PhNG2BU5y3mJhoGvWjwjcoKsHcijojx6en5DegtmbXnjx6PA",
  "key36": "43NnLDXFkEpBiyT39xbmBmXiqaWNDXR64M1gCwyB7PKGjsiaQZBbimJRxi7eiYC9Zx82zATqnM5e7umk1XkpraAk",
  "key37": "qetFCzjuc2aGbgQ1ZXQmSS5YoCewaYx9MRvTeF2sn98hikg56kCtRAP7yCySNTeRZZ9z7CXbMwepuinhbzqXf5t",
  "key38": "4AzTBfLUWVSXB6G7yMdSzYYAechnNUWVNZ8TB8EToBZk3XyoVmwkWnd4dE6bBaWQsQVg6Hrmgr3vyh8UmkbA5CCv",
  "key39": "3cvo7fXPh3Nh3Q8itfJJbxckY6LA8VxASxgMgLPhCzvmex1M4EUZuftSs5M8hvLeckatXG735vXmQrLTs3uBcEVL",
  "key40": "2r2dde5YJbRTvyorQLqWJBj36bdaxTi7gSodUgP16PnMKdSBYTW6KVRz859fZZLhvu2JGC78hFhGUd4XQMqB5XuA",
  "key41": "2FDPzFi9qJ8Cvaq8sinPPyg2UVDJEc3Pct4DoodDpYBW3prkqpBoJ1JmffEXgcYhqbdUQnLbXi77RVhtbTBAZvnJ",
  "key42": "5v5EvMufKji1YuhxMJMGvb7ADxDV3Ze7NkY5UXQB5fSohqpWYut2jgEEHp83Tf2pMDDjj1g4qQYHc1sJwjohqNdr"
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
