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
    "2AAy9Ft7bQPQRLzZ5a7pEqSJhokgBwjLw2ztt1g1eCnxn8ttgTneCg3SmTxhXXB6edGU56kXCpUFA8Ew19R2wQxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a7U1ZMuRKzptx7X2Wq8dAT4pJUoWokDSkyYJ58g3yqdgv4rSkrgoptrQWkS1WRZpT5F9SGoMz4Y5Bwt4tKcyXkL",
  "key1": "2QkS2KX5BReidvpVT3bHHBZnk53FL1BchAVJLFDvD8R4wmkpsaaEo1cRpHi1nJ5KWwyQtfE6T7pvzGDWDJMe8Qrk",
  "key2": "2uiTbwkwh9QJshPQ91NPrcDSB9woEEnqWxHMaKCYaksjUQCS3HRc6KJnXVyLvakUZ8zrALbmaiQuizVjrreeysyc",
  "key3": "3pPmHRu8WKB1Xj8MA4G3dqUE3djnqtFg1bjerirbGR5bcmcwSF6GYbjyXLEYUbjHot6DoaFy27y4kdfqHPVAYV76",
  "key4": "3mKaxMEbACNfNtfCg4FqTyUS4SgTHP6t1YaZjdQf1QJHxK2h8ceZ6kFnwsfSEDS3eRCd8va2Xa6Ry2zyFLwzLHmr",
  "key5": "Zqw7axRouNieaHMKbKVC2bjTq8854XGRtjoB1rM75eiWhAzWPo6zGyzUUtAqtkgZpBiqyfyEK2Bi67GddWyfzmd",
  "key6": "3Tfysn8gvqjUZZ45wY4EvG4xB8i5e8d5nuuQjjUpQN74V4DuTdVHCqaU1fW6QCymuudZY8NQFV9w1Urdzja4G732",
  "key7": "5fTB5xkrvcwTkd8pZdSw5pB2hb8YFTWGvLRyDiChAYeSeCwSBTwHQyeRCNG9pLM3MddcjXXms6GXFPnnZCmELNuy",
  "key8": "4sRCQdrmxQTj5G2USpvq6BGdyR4PZNyy6b1ibSgcprdhL5i68X8RMduKErB5yxUyiay91keHjZLA7PCCsokTF9D8",
  "key9": "4h4dietkZ2R2mAm2jEQmJ1Jw9X2LGC15PWHLDC6GxmYgA7SDgFBjrhyoAvNygMhBbyW59xKnEMbPQbM5w9mvztYt",
  "key10": "3JxFU8otBxaGV2UMWycgZ3J2Y8QKMuVc4kp59zhDW6K9ForcWsziKV5eeqwNK8uTQ8BS5UdQ3FX6VAouqVFnbt8G",
  "key11": "5ETB16sM1gDBA8excpfWWQsMsnFSbSzupzJ1FBiqpFEAfP8K7v9yBiavPsiPhW4PxMC3Vw81Tcnhi3c9tqdKww83",
  "key12": "TsQvskJk4AHRadxkHiwnE2hWTaXarVeJ9tNvak9m1AJwzs6m2R5MimJfioaH5PAmm6bDdVEWW32wMMedkce6UnJ",
  "key13": "5xt9qhWfw3bXr5Bwr42K5nGR7khBTQeAXhUVPTY18bA3q9JtwsbxGSgYLfJLZhHBqqAV1CWDmxhtCGKbtYuY7rB1",
  "key14": "2ZzVMh8ZLfmPWhaJmUupsr3wtGuJ5mqnvtVcN7A4K6qdMA1VmmDCAyTFoea7bSFKZrHBx9TwBFgA7YRUi4SsqRWn",
  "key15": "hHU1QX5bYEvEhAAXJf5C6A3tqLKaAy94wPEc4fV1fBSTtYgAoSP263Qs1Be9bBefTDxexHhpqwd3Qo6bk2BMx1a",
  "key16": "3WkyVwYJRMfyzYKeuUJ3kqoMmByUVEVTeDi32821XmN6yKrgi52rdap35hXGHoJGwouZJvWUKAZXhshT3c4TAYVm",
  "key17": "5V4q79S4rH1scV1TyibXgyJZY4MdRk2hY3Y1tZrDDZz7zi836KaNVwNhTWYoEPQJDXAAbfmmsSECzyTwpzTprFwP",
  "key18": "5TiJ26nM9abmKArrukMettq17KQNAFrmuU46YmLiRhyXXYC52pnXYZ6aJciTDYSKCyEtX87f6kpqtxzdmmK71myn",
  "key19": "2n1sH4qjT2GCvZYDvKprtoYMi8u1KGRe4L55ui51VEAbEiiuCybWYZY2zAFgVQ58Uq2ShDEBxk8166bQj3xj1oqY",
  "key20": "4PSVv1uCJxe4cSY4TvF6Rof5jT8SDRCXGz2HSMgVfhHKaX8eXutLVjx1xi1h7oUTJBP6NoUEyWZkGB3eVV5pCBoP",
  "key21": "39tuxTkTTEPhR9eDjTSdvQoj1LQVzCouDCX2GbdT7w2LQDaUHpGeH8mwLCyGoAUx7PpKM4jmYM35EuVi3QRDMuMT",
  "key22": "QpnR2oFT313sdfLAfKu1AwMr1Z96TZZy73XjGfDurY9QQkhoRKCTQ7P3awsVeP3ib7DeG7iyaxdGEsKRQw8VvUD",
  "key23": "3cr5m8KMh1gwZVTWxapgEdVum2v5KuJpi86VzDQUhC1GFxsxMFMNn4vexjFuBJU7sLs9etp17rFnQ1H5nZLJumcH",
  "key24": "5joFhd4ndomRDLsTvLMFKdoDCULS4CkU2aYDmEpHgJhmrq1LHy7WS2D1387zqEXjcniGsjJmW4vAYnk4zaVU2sQC",
  "key25": "2Myi1Z78JmsrxRmNTTotxVozaQzVE1RSEjCca1xhgA5h91JMn5U3nD7ByJVbykSzkLT7U4uZobLcC5FqfbuRf4TD"
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
