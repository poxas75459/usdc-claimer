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
    "3ATC6ruwST15gR8XD753wUW4VdqdogtyEo9brFq2pKoibfDi2i83i7ctLHiTrpnuSiPWUcpigQNA7bza1CwA8QCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tzjqp8fcDgMig6BHaSaBEeWUzuEKmbqtVY8bQRz7s8R8fHvU6pRCWYyVwDEMkp2RzbrwCMyGrgBAc8fjKhKnTCn",
  "key1": "5WEWpaaup33onAnvRzMVdkobEMUAKzi37eXkaAed8YQdYPB5ZRhTrjEBW1eMfHCm28mcmXpKqeQuzUTHhFYf6zq8",
  "key2": "43651S6K23RnyFNisjHrFHEjBHCGXMXe4toXwLATYrLqxp3xHYqW8SJTR46qPyBPKeiSezjJDehWxyfEj33FCMAq",
  "key3": "43ekM8MekYUfjwfxdVCsRjFYPwdehWqHCQQPncZ1TrcmnMz48ncLeSYaHDVsaBZxQDHjAFgQsADRghug6tZtStHd",
  "key4": "49f8tAYvqk2ub775AeG8AXFGQ5FCM1tXojyBCLkNyxAH16Se9ygfGSbBVwz9DKUzUyFRsMR5FLqybk2XEkrDCyDM",
  "key5": "2coKx5Nbjbxr5w219gaWTTrWXa1XZ2vZ6J78Wqrn7bdP75CiffQGrJJnHJZewEXE2jLMaMi1FRxwEA1mmoowKt7c",
  "key6": "5WB5Fhny6Uxvo2x59bgUgM2gxUEFghq2YpgaC5GLgtoAZjruzd3Sn7SYSpvXWdUrUaacJapHwC9hGTtF2jobe5BY",
  "key7": "5z5wZnoYekY9AVVXCyTHBYxgQ9hoeeBDnPuvUvtomAtLJvs6vyUrS532bLs2g2XCb1f46HKy1mGTREc6UBcunLA8",
  "key8": "51x2Am8ShPKdrCXnCUwVQLAKkC1MwtuyqtPrqpXTDHc8KNUTbBRuGPzTaY5wj9MwgV7vZWQSf2FmYmXwCHhXMB6h",
  "key9": "8zYvz3o9Nv3KB7BxPrURJeUWu98gR7k53q8MapZS6DfD9niSFVd2L3TR5nyowoqTh1TGCsp1PhZYa9eiJ4XFF1s",
  "key10": "3EFMP7V79eJLpvHCwBhn97uyAkf7LWTfkmmHLGvWsSSAnWMSwgLgAmaCeaxrAj4FYzsHrsQeohnQbxqNqgQvkZvb",
  "key11": "3GaqNEbXboXFvtUyKCAwY2iEmY8uRv5qw1y3rCozVJsS7BEcrEz92QF8Zew72MDQa1Zx4gH6TCcfZT5Q7HeUeG7f",
  "key12": "623BvbWMF4Xyir6RbnCn1zQBg8rT5vwxcs3AGTtyi5FpbpLJodPWy9Nrdxt89JetpziQDYrmQMdFHm4wBXtUahyz",
  "key13": "47QFK7erzcfySxXDxWHYwgfXNaDJvb5WLPggVDWpQ2uqs9Hb5Ri1LUi96JXkAFSa1P8RMsR9oitjU4X3cug37ciC",
  "key14": "3efs2XTLBWWYbbyJtuqGHYSqHiLF1ipWH2mquezsoAQjdhhZgStkU2optpqJsnUiWVgtE2Y1fnsnLVz1E4JTBGeg",
  "key15": "3JCynhf4hkDvgvH57QMrKJVoHuHrEf1Khw4QWePkYFQ73i2iUba1q4rXqQmbUrVSLUmwA6ZSmvsJX1QtKcDSxzd5",
  "key16": "3VgfypYMbHmrPZDhbFnDZ2hZ1aYHqAwyEDWShe6TESNtr7T7BVru53TQJHA3YYjUpyxYXweKPtQwK2ZEZbnYgZ5Q",
  "key17": "3hrG6CAb3iV4QmR6tafw1tPkakWFsr2uN12BvRax2b44qcxPHaKt7Bo6gTWR3hMVchAGRwiaduwkVRo33na5eKHs",
  "key18": "35UoVp7z4EqqpnoSosWimQxfz4fvxUJEwonDXuFgp1KFHbi8mSy1FuF5D1HJh6s3jZvtnbaQwpSX1c4aMjAHtRyT",
  "key19": "36WBqAJhKEx5GFgXirFqeDS6tedK2TLUFbxxvFUiKSbQNVRJfoetTyTCeWYmhcGneTwvwaJ4mRuZmLDijHos44YB",
  "key20": "2sGf21TDpSyTJS8PjeR3eYfUXNRFeoMLrhiqAemRfrwVMR9An8eKGyy698a7qR4dAxKg624B63Cy1sHNjbEqZzd2",
  "key21": "4GRcZrpwnbxx5kGbNpYm3VNmxWubvgxtA5wkFcwgq3kJPUVBs6G8nNUSyPRCUXwecYmyxUee3jX6MW6S1kUtCmRf",
  "key22": "Augi7rAzJzT4STsxsm42iUjEfxQ4UyaD2vHFYnudV1gL9WgSs75kjtTDfstrgWHR5JybUTHxneRKSUFvGCsK2Qt",
  "key23": "45Mhki85hKotoaMdfKCeqQLVYVW9Kfj5qKoQn3HpJ1zNrcxvAwVLyEmQ3zHWg6mWLsHFnbuSpQhB6JzsL8Fkxcnr",
  "key24": "3mr8D4DspH3mUATrv8ZaJjGDxPhwFs1aPhbR9wdi1nsoM4vzhzALCkuqiKRcRSAqgyYuYJt2iB4BgJJ7krEC6vye",
  "key25": "Rmw95WHTibRaicPuaj4cAt6WV9ySA1f7ajKKXowMoHUDY2W4zw1C6ETYGqE6C2oJiv8nHr4E4V93JQAScMKBLRW",
  "key26": "2jBYWu8ZaMHiZoDj6sAjTXGFza2C313i5Eqk6EfDvxMc8zpzpR7US5o4qoGHXhwnbhrVD1AxzXL7ey7bBwijWopL",
  "key27": "zTrX4CC6Fg9Dr2d32x6UTcUwPTTUJEim4C4rio62MGwHrCxPA4ba9RZhKTy7FpqrCQ5KkxpxrGRCSYFagxSYS6m",
  "key28": "58v7cWfspeZLxQcDzCKKv8J1X6dFWrr3Zc5kPsTMZHsttc43z8rx8p5mwBQRXpuENuBszeEtL1jGERw6P199CE3e",
  "key29": "36oPEY1RtRpcs4GzBwwyppcimcWm3LcyPW9Ntn9nhYQuhW244Y1UeRZBHas991TnwpaLdzhYpA5PeqEejCyoVxsi",
  "key30": "YJXKZw7hT7ZHz6FoESFDfQx6VkPmqFi9VCuPYEvL4EfcswzZZSWmxrM1yPr1abaFapPCSraJNu4uniokNpYZz5k",
  "key31": "5agCJ4JReaf9sN1CK5RRGmdJWYWWszLFLB2hN1EGtdgSBjcVMqpdhzucWY95qkszcHd1WTXuwWNaRwa1ewPUtk26",
  "key32": "5CLHHVa3NRgFnCuALK1MJXi2pNjCjPKyHr6CConph4DdaSfPu6RFsrCSRfH3GroV8vrsG2sRqhCwjwLpsU6XtivA",
  "key33": "vrt2Tsfu23bfrRafWXzFsU42iWoBobi453mkykm2BizvpTUB1hhgYTHkZ3nfUzcvp7Ako8pFpnE1jDNTdKZQU7N",
  "key34": "8YPXYSSdhcXW1mxXn2GBJ9L1v95bDj7ZNyCR7em8NHsTcKvsRphPspAkH1tddrpd6bDniknRHTErSiHwx1A18dA",
  "key35": "3Zeoduy5dx9HSLRsQf5uNm7ZutatkoCiussQT2fN1hHYgLeqyWjgB8DH85iD236vp53HZa97X24hbs2aMURhgN6n",
  "key36": "2Jk5621dd42aSviH3v9G2PFXgD3hikqUnTbpb4rHpY6sMhaAUXy9J4JMGf98LW81Htd8a2oZo22oZaLxfTVW6NcV"
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
