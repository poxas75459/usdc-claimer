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
    "NKfrs9WdTt9d3q43FHikMcdWFGs69wtAJZNzhZkz8ZnLHNjvw12s6x8ESWTnRUNBRfUreezi8hVsgQpdetGpLU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fDdqLQ3w8wmWbTBTEnjjJ2yWiGJpVzkpBhLW3WGwKrRyiZuyPEAXF5sBF91cCU75wp7ozoEDaamo4GvSn6w4Q2c",
  "key1": "4R4e6eYtkY9mdibR1nDxd6g7fQgqz24bBduzFQuCrSYYiL5cToBbAq6VP2A2oCcxMh2MstuQYFmqQ5hm1zg66nXC",
  "key2": "3EkgXTwvs7FMPsgseHSjNEoijD2aav4T8BLZfiGohcv36ySZ3GCCMYhP4sdMDZByB5kXMadQHNjT583FD8Aw6FGB",
  "key3": "3JiG17YwNNAv36nLnVchG1nMGM7t1xBfPPu2XdbakxVnbXtJsSRYAkHNDb6DgRsSkuU8Dmn7obC7xzbhVEcnpFi7",
  "key4": "3Mctrw7T9LkW3RUmnSFgPwF8sLBKM59XmPL5A9gX7gNCYkaXLhu4GKoSTuPBXLmLEC87EPCS2SCRffzZRJSkdpXB",
  "key5": "4BJNnKm794A45PKazXTpaSxfSeA44zy9Cxdp598VTNwrZZnKHHidGjzyFHH38CrXuQYntTu6yUaUoyP7v4ZBvECm",
  "key6": "4BLqc8FWuiVtZGhTexkD2tauiTgyvG6tcxRJrvD43DTwkJTNrX8rsUYDvePdwM6YVcmdxESwQ8L1Yu3aFQTgMPXS",
  "key7": "5kjM5SyBDgqTMoiUKDuVq9A5jy5yraaL6MRyk4wRHfc12kq9rqpMjnMo8ZUpAPu1292moLysRWpYRQuxj5ZmNpCr",
  "key8": "HrF4bzTcAqyNJs6zn7nWRK872BDzBX7NkHADRiDteTY2rb5Mwt3zSd99sf61bKvYsEAtQdxA1wzEHTtyNJhYLJR",
  "key9": "XGkiTK1wFQ5ZYgUcyQD2kjEnRPtJJmfxXdaDRSj7mX6PMWzsjJr2RrpnLhbNjtXNmVLZe6qeyf5ZRvp5Ntn7xoi",
  "key10": "2T27dPP1EhuZTGJvQQAAxizRvc2htsnZVs9dTcBwuPfnqg3sVVd2uyfnH8eEGmoHCsRScqi6j8h6w5eNLBKqQ6Zn",
  "key11": "3rfynkpfMxXYiCHmEQQmLjxnpdi74MsrD4DyZwuPzCngs4aeZ7aGH8VGZbqscF7CoCeYL7CRV7YFAScZEvvcPTjc",
  "key12": "34rcthU5HPV43KJmhXZzGoDRk5U8he9pKyxymUukt6cQVaHEPQMWoYRG7R9TMVxCciUowvkPwVRQCk3rRUpYGduk",
  "key13": "4ypNFaZ4yD3q3w7SE8fBnKm4xG9DxQwjHmJkfAQb3mde3yN951Pimvf5EGPcgr3oTuVaQNVHkRvuJfgm99XNYSML",
  "key14": "ksNf1ixuHymjXe7tC2hzuNtsNZCaBXAvGjaM4ww4isybFCKYkhNX59JP6fpyvXKGLJ6szYcG2ha2Du3BzvYEm9J",
  "key15": "4ErLw6rv77zGPW93wDTNA4uBpJBkgXzdNHzWkPPrBrF3XXMWE82wq8XuthxtkDHk5tDfGqmZhj3HwhCCN4ZnkHQA",
  "key16": "u8RjkbDAXV3gFtHMcCrrqa6Tj9DedpXcztPvvN6wBoKonyYo13r6Xwr3854PXkFGD9dWDYpWHkgoW8GgfxE7xHL",
  "key17": "4mb8jWT55BR8yBP9W9yhteCtkkmrYUZRG1M2TsUF8s1ACkazvsTKDZHuqyh7KjUNXsR8dwzk75DKyDrTJZ9dsy6C",
  "key18": "5asukM1zKEHoD3VNsCZbn3ZDib5af3U64wKipVD899tssNj4xuvtKZsdCbku1qDYVQNiSzSiFJgexYaquZjx5gnK",
  "key19": "SRSDLUa9EX2YM4Ku8WznCtL1eRCkZZWVbUGHzJyiBXFprkQgjhKonEogp8brPXoawNBGviSuBAcrzRRRVJ8VJUC",
  "key20": "64pnniuaqAJPaM44tETPT5eAzKcccx3P3m7g7o93zfKhsARJ2xMi7LkXvAeaUWnfVDLfX6QuVmwbUYejQnWgUgTy",
  "key21": "5pW3MrFe3S96px1S3ot5onNWkq1EMATtxTkkVksHRmtnJkuTdmPwiao5gqtNjPZA1BQgPXytaetDNsZuZGz3Y8WG",
  "key22": "3bgHqDmeeFxieZb3jJsBe24D9QvRXkcRKcvcJTQ7wceWLze4HbV3oXNeYEpn1AHbvjCHUDadrTxB6QC6pxQDZ9eB",
  "key23": "3Xw8eGFXfGk5gYmhgLqsDoqVzvs6p24sJGWMx3yKRw44sToneQihX3zW6UAcGLY6xsW3VhT6XvsbX7vyGSASBxX",
  "key24": "35zoHCkeGkcL5TxctJ1vvL4FQJTx56Fs63qwTKen3sRkHvDj5j3uJ4gqMLJwZuvHY4Y7LBFf54fQb3jF29R9rSdV",
  "key25": "5USDywatZcW9Hk9dPEayaWJoDBotHpUWq5s7ui2bxeXoFcHY5Y4sG4uT6zEaY7eeWLrU4ATsvmPPWsbjx1HBMrzD",
  "key26": "3sg2tsutWcaFk7AYyMMfyaw6Sxibf8VQV5JSwQavALscC8tiV2kpKV5ayoKEYqHNdAmKCWFJt1g32ZFQMjE1byRb",
  "key27": "NAuzzAwNACFE8i8xp6GcgHmfFfPSU4cjjHSUbr4NnzNhaDjnN7PfT8vH48eizBq3hpXFo4tWZ2rrmrYQevXbAkh",
  "key28": "3F2b76xW4CP3KyBcM9NXHeLR3VMoDs5S2PAXf5FReyP2xvAKwn7E1AvFsBwUHSWLqc2trCYJ4ALQSedvGwdunRVk",
  "key29": "3Yx9k1M2e3byqaHkBxpbgnsKArQxabed4t6FoySYZawqRaAa8ZjNFhvVQvppu47kZfhPnB3ZNg7nJAhVc5BVegrA",
  "key30": "p7h7G45L8mp8viuc73eVriu8w4yLoPtKWVMsDy39gWriVJ2NcECQm4ifXUpmX7NPcgT8M6Eua2aV81JeGaHmyd9",
  "key31": "613yxMEcpRDK58aSgCXCcAs3uAqCTPXW5bbvyDT422TtwsFgRPhbEbysJQUtv3ZtsrP7CcaweZgXckaiNn6bb65",
  "key32": "52C8pp24UMqqu4StCFi9zdcfNFDLZbbMWHooRykR1Xx4mr6rVBQj4NKAYbeM6Qnyo8vshduCsWsPMFKKATPCvoBS",
  "key33": "4vCvcDj53fyWjxpZoztUv7eLQidyGPTxTR12LHKvXqozGKpWHwPBkuJsQonU2JQgndZvuqx4RqTxDJZEJKfLd38D"
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
