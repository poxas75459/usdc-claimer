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
    "44gaP99mHodKad2Xj1CMFrhFmi2NVQeRN6HT5XBk1uHLrFwqgKNggLLZGyreXif23JVgpD2uq8ALRTZaEQPLqTeC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dk7JGzQoFThWRQv8mmwyxxwUUj1BgFQWATVeFVQfTQ26mBnwt9iyNwFvxWj9dq7MDnA4UbaZ58WtsFL3ruHQ4Jr",
  "key1": "53F8x2Frn43XgPoCpHDhgybfsynesM3XD7h82zGNigDDk6d3Kg3tchyw4NqNorap4QVGbDRJu4zx7CtZUjk572TY",
  "key2": "VQPxwuowauST8wbyMLiSowvNm3LJWLiqS4ChAhXmJsYiFfCEkwYWCqSffWorGxF99Zi1TBdpRiPNp9bK5Mb5snZ",
  "key3": "4qP6cdJdbf65oet3TKadBZeXB9dmHifbhvt7s2H852pZx1vDP74UukQHHfdVNxoyPgFY913u8XxDDQMZYV7VbjdS",
  "key4": "upRbXx4pkiCUMwbPJ42EkPcGnkp5Riuaspmee3Kk2zjMgATdxL1AQFxMrZWVcR7DNVAXwtT8pnwgKkVnAmNuwDs",
  "key5": "3VxfZ1ia4v8CJZ8yFL35kYyCq8uVh3yjCUXaC8hq9dKtCCAYGRFEZenbhULEhkY6PRDVKK9YiNARhEozHnEzmK7L",
  "key6": "3WKohNedpiBCSJQ6eXye4xr3juVfFBMHUuGBpfGW527dK5q3UPB3qBDfEAgwfmAaekpUjhCnTGFBNmW7Nk7w2AEb",
  "key7": "5w9ihFPZ633CRFqSGG1XUy7EFxCFBtEvZzWctZVR9967MkPn213HsWyWcZosGDg6Koznavu8owPUNwk2129kRHPW",
  "key8": "5c2TUsmdYWUk3khsjf7TeJdDzBwsZwsKxUKyw5eW8x976jsPR9kSckzzPeCdBQmuUexmMVFEUQwsuHd9E3Y8dyQo",
  "key9": "3C9jMS6gJEvUVBWBk1Ru2yEfRhTHRtKgFR26q7x5Askb77qbCeCTfJvwnpN3aXpzjv825me9SGJaz1hx2S6RRdog",
  "key10": "3zvaNFgLGPBKc4DfPdkSQEUsmym1XcbpZQ8MpSdA2Ey56RXUiCt3XUSWuF5bcp5Cojtrgt5hmFJz3wDCzdbC83hw",
  "key11": "2Y2sRYZkeDFcnvNhKJj2xh7Pdj5QZwmmTC4WipChfdEdezGyNgvzDDByyxXafsVzttsUmb7Fs4sg9DwPScUzkwUa",
  "key12": "5tKG5C15nx5QaiQrg6enfMJEpwFKkE1WJKbFBBdHHBfcMxakvziDt3mDJcxuYVGDdTjmy8e9dAcVt9s6N2oZhfdc",
  "key13": "5yTzB2fBS5gn8Ej3Bn12PBmLbz9uxyVCW5zbd6pEUmL93PCqkyyeNndDk8ZMoHy9w7ApMprYsCgdpiSdHtug6Q7B",
  "key14": "goX5yKegcnRNw88xT1AWABEwQhYbpV25ckMi6ga62WbzV6YorgPzec9q9aCSNH8TfLMi276aLUXNYZznkB8wmqW",
  "key15": "5HnCRtaNgeTKZd7zc1pUAoWz9sbvAmuWo5BNon2VavZZtHgHbbGJzpJeWrnRQz8MoFXNM7e5ZHhe1B1Ns1dCC6XY",
  "key16": "5xcRXn4NpYEAfogY9VSj1RtXWTCHYm9HAmrfTv8oLsBRyNJDsxBiF8HsfkVMwhif5FqTvqi6f9Sqzo8FNp7g484Y",
  "key17": "53EU3HG3pUxHck6zPtoQdSbY5srAKhPnSKzgNimUpdUUhQtwFM8X2PahiyCGff22AgmCGuCTKoF5ypX2BTJ7rxBg",
  "key18": "UzD3YQRJu76XUbzktCXbo3UUbiydGjntrUKe3PUrZgaPW7Egsk2Y5BMbuDTdPdcwU9GHoVYezhgBMq7A2accbuM",
  "key19": "5RA5JsE6wDahaK3b2wCLoVaSvgq8Aanemq9cG1CScRGQF1gSdr9XaRDcKmVnHJNRTTW3mrsSxHwfbedzZcwsr5TJ",
  "key20": "2WiPJTxrGEScxdyipLaYsofRfE86HLHkTQraN4mHY14bRLHRoqsTwqKT3MCzhYuMJ1saKzQ9UMFEzcpv8ndgzccq",
  "key21": "neJmrG1UGAm2Ti8jJCGujt1R2AauRaoCJjjbvXeJHaXxgiQmsqAK1qeESpNfuAtTbE766Wb6oz8JRXGcySnqRsa",
  "key22": "5cwyemFwZxxFY1YHF7wqwadRS9wLTseGEhbjLd3SR2qb9DqdrReqHTMKt9ax6kd6FDJfsG8yKnqoahZg2qQ4hQ5W",
  "key23": "2GHBLAvL3o1gFbmHoAppaejM7qFrbYj793PNmMsKbhhKKqaweByNL4uT4wHjXi9xqZchzVF2DGmQL7cViMJuLmZF",
  "key24": "5MKCSg4p4i7FxebTLbinQfXWkHUaXrAfL1qH6mDq8Kn6UWkJUqGVzPhHtm9FxFCavvosBxvyCbfL9DCGn6En12zn",
  "key25": "4LzZtQDJUDSP9cC85ymTisRWK71rvCKD34jGUtzVfJsu8h31yHmycTaRMjtPTtZhcHwwcdmCJ1io97kfKZb58Tzm",
  "key26": "X4fTkRGgWAgZCFQprr5Pu3U6KU91kBujNctTcirwx5So9dwuEmsSyVUTqRLfvWCqGmkKdcuP5y3KmdsrPpsTehV",
  "key27": "J8kuZMPMkxU3jpinYvFfEpmaAWCdbGyXoE9cxqunSwPVwfPVkZw7k1e66zKv7TfnTgV4CsgujtiGqWHTAPK5ktp",
  "key28": "JFRxbXT6Yd1UrXKvEFQ7kqKeRnuuayTBSN4kjhKkXumzUCrEYe7mRe1XMLKqJqQa9E72XdbjRf74PNi24r7ohuJ",
  "key29": "5aYqqwMDNDgh2R5FFezKfdmWyenupxXHo9Gui7Z1bo3vpoJgbqyoMhW9X5KkVrV3HAcvamJQ4mgd1UJWMwA8VQ2f",
  "key30": "27Bu7JBn35UkDUHH4KiirnzFUbAuje3Hxy6Ji23KJokC6g6P2Wu6NNKuTPG4YGUZbc7oVwLvnhPDfYqNUPwcxceQ",
  "key31": "5hVDiW1izttQaznK8ZqrZmXb1buazQJotzTGDCRGZVkYypAygz8rzC4Qb7zAYjpFjVt4bDTSgvBk3J7w64sVoXKk",
  "key32": "2FVZRfW4wf27T8i1XB941cmCukQMrpinnXoLpzsQ13isKvDJnKJDfKBdF9TkpW8rji8QgF9YLnMJEBYeR9z7FRcB",
  "key33": "5oaiteRj5yfe6K3UJXuQaNRyNsfqyHf7XEaWh57uan9BSLjp7CDFAqKaz5cJR3hppw9WHqjcV4q18EACLXYtCuNV",
  "key34": "26ZZuAXQAyudMfjdU1kj4gX96exR21MmhTiwWMTBhEJuy9ofeNDBymLo4ZLdTzmDJ3BjVoiVscQoavAfRsySEXWk",
  "key35": "NdwJw5BEdJ9uHWtWJyQ6mJczyrpu1EqU6qtNvu2Uo8XzW9utAE4NWz36XovAKcYekTCyMWggaqHnCACfQCY4FQt",
  "key36": "3wecUm5cfq6ymhF94t4WVEY7sGP95TACtQjbKLwHQURzy14PKSboA6sZy6Diyfs727WdoYxGy6HLzMSDLAcXKUoy"
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
