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
    "4T3X5Njx8HKs2b7BU3NHQ1Wx8RyrtJNVpUxTM4GWheDK6aYDqqYcAGPoADiW3WTCBrnJQgP2kq7qDmDWbJL82ETb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mMzUXAM48x3MuapoPyrrRRZBX23Geyga8cZp4cL2gCkgEbpQLSc9J3ayDQdpX7PE7fsjysHu4dVU7HzX6KikVM",
  "key1": "4TcMyUYKyersJ2ggB2tXBe6SK91ib49z6JnknpnU9JfVB7orn6NKWEmcB7hHTroCie7wUNp2q3HikH1kjmB1DrFt",
  "key2": "5EbR6PKB3Sizybd8gcduqTLiBVFBW6U4pVe1cqe7m8fB1N8px5jLBEbtLjd4W1qPvG9Rfhmm53CyYC57XuLepYfq",
  "key3": "4HxNjwTSABaAsh9VYZWttjJvbJqeDP7j2ng7RzUYDPdsRC4fTcyNbQL362gk1J3eAkfo1Ad53cjN7DpbNeDPgHZB",
  "key4": "2fiXPoscCwY78pHu49nWARdZzKtsPQ2gdQpKp5F78jkPUzkVzbStEhfA4hgHjGEZ7F94c6r8Wuw95AUxFGctHRSi",
  "key5": "NDR8ZqRdocHNAXUMbc4CAX6nrGfV7D4aCe1Th8dyuaDGYm1S1jpsXgQVSCayNg4w6gDWEGNx1iTjth6UPaewaE7",
  "key6": "45r41KvFFbt56WgXa5DKYcxbzByhC6yRQurzKJK7kHLxHZdpHGejXwgoypbWkE1h2zPEkWHDYd7fSPdLve2qpKiU",
  "key7": "4B42nC66epTmWsiUYY6YAgkjKYUcRhTxKDVQ8S9DREjJ8PJUsSjYwNWwF3tvYPyjjwF2usJ3rwp9WTNPXCGMGf86",
  "key8": "3ARtkdRgtTGncV5qfK263fNZvGaLscoHH9uqU5RNPBicfs4EX7vJVdMvLuZx2T1fM3ioFZM4QMQa1uQiorc3HzNL",
  "key9": "y4DTKN4AzKrD9J6hXrG718V9ioT4vw4V2U6YohDyCf3UzvE8D1gmAEdhY1etzjzSVC1YFPnw1reEz8ZmxJa5nqx",
  "key10": "3jyH5wdvDWWg8k9drs6HwcFVBCjacagxk53EBMvjXHJSSfgZ3Aphq1mR1YFyWfh6UwcJkuTeZha4xxT4UvB6zjq5",
  "key11": "62xLtVJBtppHZeuPK3hACCAdRKm7idVG7NWgRzPssCadkQEZ38dAffxJ9ZsZwXwmEWNo6pri3D6b1d3cTML8gT5H",
  "key12": "5CgzM2h6N5RDWYMVzwxryrX7FZHykNT8HKAbs2GRxWnbpctq8mQbzna2NFEKA6mspV9tFx6suvuU9rL8mWQnQhu4",
  "key13": "5rPzQXmknsvYNQ45gpv8HUcuC7XTN7M48y36sHK9785YA5VzRK7KeyyXN8wyGM4xJzs25CZR8avKJ99dneMwBeYD",
  "key14": "2FwxUH4qSdSLRjMkeM4s6adNSFzqvhRi3aWUp7dAb5sjYXmzFWZaFCN8WNnWkesqbXXpdJa7YyYS3kLhC861dkmL",
  "key15": "57DDwYtjGt9F8NX1BpfwFtwmX7SFkNv9iyCoUVVz4MB1xkFkJgcFytopfXWd77xKBRetniLRnprfJETNfvNBJCcL",
  "key16": "MjQnWubzNZidmyMzbUvNYj3AuDV7CSndsG3uzHxTN9Wayd6xKfWyUGFhkWkCTNUKGUEPoLpaKizyFzn41Gwyfg4",
  "key17": "4SvTGAjFXWh1FEyNsBg4iRbpnFP7eW7DTssMByrw5gMmkoS2s5WEqmARv5K9xLiVo1GmS2nwx3UhMXWtiuzW3oYY",
  "key18": "2LRbRtzjAHrU2VmvbvWynTZHiXP4Gq4N6ojLSJSDcYXJJBX16VmHuc894NCXykTjVhxdFkY37KkYxyG2hoJgcJLj",
  "key19": "RoJpqwCiWRyktNpkZRDTtVhqhH6MeHdDJLhragKTbNyZ5KSZtQ5E2QGRBVxVzxuRja2f85EpFj4nzuCSjwvpoGz",
  "key20": "2EK293uqtZz1KXgxbA7Mtvb87QWuqVisELuNh6BV6BLv14UZnDtuF8coEBuJW5pu6ZJSyu6TeubhcitUxJ69JMa5",
  "key21": "EwTCv2EZyjrnwAFneeLtoxf4p1gWUMS42P5ydFp6Y6o9YWstFqPSNdDu8fn71pbcEW2onGFMF9en7NpvJHAvtQm",
  "key22": "unmMq1a6tSNghjepefjLDRxe7Wu5X8ou2c5GFoVjbER6Nzk3zTYZgT5kenTPJSWxfYiKtBgThYKWZVdsJhu5i1s",
  "key23": "3pBKEyEkaXfTyVbw2H6iGyuZVFMhy3kYAtAncHygydps7Jfgn5c3jp2nbaAELNkt9JN5Bza9gANFALcJ16S5PVDw",
  "key24": "5W5ZZsv5u45pSn5D7beyMv8Fvv23EyuJtvSZcPu39SXs6ems1XWVVWTJ7wLubyaA1R1pL6S6Yczy3amtbmr5ak5E",
  "key25": "3BVUe1BGFagmWFYitmiZt3jjZqjsEc36WmXWvmbfoyk6dVv61Tjd9mSQtEF64V72pR6j2HNFiJ1rEPXcMAN3YA9U",
  "key26": "51pUeZGzjTqumqCp5jc23nKJzAQWCz7mDbtgt4KBDewBsED36kedzeKj4fMW5tLuuCZ77FadAvdEqGTUm8oD9MKJ",
  "key27": "reapy3tY25Ht6sh9ss111s9ytdsytkXms3vcMDz7NWWmDmN14jJyjpEDFFPzMCmoBwbndFRSGvfHEYTi1ri6aGs",
  "key28": "59yWVLhQkhS8meiV8RSQtY9S1BA2xMBohsUkdyqpJnEfyBf6pJZrpMCxzj5SLtnbHvRzpgMFUAm3diTjyEUPvx8c",
  "key29": "7s17LNjxpjhvbbFAraLnXvUDNDHHGpsf8cHqrA8ivv6YAkD7knvmahuNFYpGzwLmfLABfd6HtqZmhU35iPdZvEa",
  "key30": "ToncQRoaZGSr8cDpsR2kiF1ugiZtg7LLvwhH11yasX9Xdt7eh6aERpv9MiFTKDT7Hekyq3vDCZajBbaSjV34f1G"
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
