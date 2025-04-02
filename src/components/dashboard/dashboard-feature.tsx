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
    "UarNMSTePSacZkHwEHutmL3uBRZ6nKkyg2efqQPhNaxraVc9EfKvVCJ9n1PZYgU6RPYeXafr8eSuQ1dzmMYne6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtdCntD4oAbHGq3p7sqsvzWFYZ2N9JgFVpohXjmgMB28MZH8pbDoDTVsxDrp8AEY6Zvq7DtxQbMsMvpHxeohRUJ",
  "key1": "4BpPg1DVQiZwDsrZxde5G6mXqQjAURMYELnk9VFRuEa7tQCNWVPVhLtZRaKbRJEi6fx5f8aZu7nS7PKQBzmQ1PB4",
  "key2": "5vNZmYjmrxeeqVtpeUzXHocZqTpw24XWfHtzvsuf1ag48vFUEdUW6wsjJoPNW4Y1LBmsZpG8dZP4JWzZotvkZ7Uc",
  "key3": "3PchwEJtoJnh1UJH4zFj4ev8oWBBbKpa2yEVnQH7FurcH2SzaGbzEq2FAwg6jiZVBJT55tHpFPAXoAmmLLYqvDhP",
  "key4": "3cxx6gLWfXEV16LL5BoQd2u41YZXC9wK4pDtB913c2ywFb5ZmFA9J5WCUfmef6rqk6vdganwAxmQDeqYMiccSnmS",
  "key5": "3LYTXPjxEcMHwVq2iNTn5PhU1WQh5XGFt8gXSsphPditnEjnxGyAyMKYFbcLPxeovpREDKFzpV7TY2ti7Yoysz1R",
  "key6": "2RzpukNisEtQGBvdkk5QT1jc9EP2yTBcW7GHcbGPSpxtkECtXSt2ErJgwFpQ8iGwj1bc47kbtsQkhsPbCUCEYtTP",
  "key7": "4iN665rbiX7S31qRrSpmM7dhVuBEAVQjTGyRV44y6yppvo25VCmQDPa7MJAe3ZoNQjUuCwom6rkWtthsPxHzwEVn",
  "key8": "2ft2ErHiJ3CiGpGmKQKkmJD4hiTHK14eBeg47wGxyZXPijVfFXVy55GHs6K5kWy9mmLqudZymZybvWJVPvC2vQwc",
  "key9": "5rXuPa9Yuy8Ys7TGGHPEtdXuM8UHGTp23UPELum7is13RZyqDhX1wF67SoRdHXRmwn5ctoNyf3QJ3ckW2dMKHwGV",
  "key10": "5WvC5TSTtw4e4SaDxVRDAnMTWeCb1xzMXdJLdT7vnSEtdUYo7DmNE2rLaZdUQPRc5ouyy4U2DLttTCNPHqYQAsn9",
  "key11": "3QxpPcv8wuNC5oxKwotZuY1LUR7strgQ5jugzwnqnpLZ64HPcc81HaHNdA6xzt5PEeNeWdzycgnm4kGjqPJMQn1s",
  "key12": "CzeZ8M7AZz7XSEwGWWoVdhvsK2MbMxS1qh9m99MEDqEyrEazwoJtJCQ6V1gvjGnnyhCm93MLz79NsWaywEp5wsn",
  "key13": "4eb8btz3uzsviEh38bJmwcfW2G3rhHbSDVAyMJTpapnFKQ674pe6VAnkLS1LYTeYeyAs3JBwh5fnVhbPbKCenv7U",
  "key14": "2TikYm96KqeFKtK1PvU5tL7W5rGXiMcsLcCPubiGy2ty5hXPMWGcRqYfuJtEfo4joeYasibLKhmymBcAWBpZhZ4T",
  "key15": "LU11SELzqEsr14WZBxebDAMfQAsgzJdd42pa6xFoTUeh5pfPQa67FzvzWimhZsHW121WJ17V7KCG2qeG9Hq3xEA",
  "key16": "4KS3L9prCTpWNMPrKjJ4KqqUvCGov9XNYsaVaqAemZvMHj9T4mPvfcw7yfCjPhu5QFNC1S6B3FCzS9gXLEpiDJWS",
  "key17": "5PwKLwFZZSKzaksC2Rb1wcNG2SqoB7h6GGMMZRbr34RPtu2m1hkSjgywnHgm8vWdGfrDwbHMJxuoXa5CCAXCbTxq",
  "key18": "pGv9SGiVv9o6vwcPRYQJASNFqresT8UpCshEzwmKmJ7CCjTzxpXi82GVYC9eH7fzG5nBWiUS2vTMQ2e7MMikgPZ",
  "key19": "4pc6DNpXjj4Wg6GoiQKvHagubd83fLtjcD6y5453ejhwXLK2C7auw22sjYHVRFrYruyQafZ2Q2gxDYnRm2Barswv",
  "key20": "5jHyKhEq4Dmc5P8xkMBJdGK3iDF5ewyYpot3pNxEqyNohrUyyeAM3KwXqAC3AeuVQAj8SHAby419XZy5fDigoccH",
  "key21": "4ACy641Yf2kyw5o8zHh8jVYvSaA6pY7sU7qLwoT8L1MyHKeuh69KfDjwHrbpsxrUHYkhGr1SvisJg6jSxrPmNqVY",
  "key22": "HHL4xdjx3C52TQitErRtWjXFv6SgDwZBTAPk7G5h3X9uv73iSZD932nuWp3wMYY55jFujy7HxCxau2hp1CF1KJJ",
  "key23": "5GKTDUe3cDpDuwueaUY6PEUmr5eptg41rdghT1K2PUKGmyHTtMXqB55pU2WCPX2LtfP3hEf7q2syWKBtxPLz5Fe1",
  "key24": "45ZxrUDrB3kCK9cehXawc2g4oBah664S5ESqYyWaRBXrPXqzWMzDvhiTsfS9dMNn9SVrSHKQGFKqXbUtzzAMVHQJ",
  "key25": "MDSyBtGMWBYucQrfpeLya6SdxrSY2kAU9jzxbjyiBqYWesVD9L5bjka7pJk9nuTdCSnYEmMtGeNs7zBMcSjFRUF",
  "key26": "5GWUcoPgLH6SkFyWtnuAyAJKoYT6YvnGBhykugqfTUgoJLBD5vLn7bMGVCfY31TtAtYWk4nrQkfenVwFwNn1bjuz",
  "key27": "Mq4G29mrnwz3oiwbTxyxUP2tVncAoxjMTHNw37EqqvGQXAhTff3Vd4gjbMSobFG5fFLi5NiMYWQwQ4uSw9us1Du",
  "key28": "2jX6HfEKe5QSRXcqD9rs2ExsWzo1D3WuJvkihhh6gKh3d3TVu3Z2nQTcmKgWqguLGUi8E8bto1HP6raQkZpuKsUH",
  "key29": "5BzEMAQ7Z38tVeGoonuTfRWukLnKD83428rJXqYhL6itp5MysSYQgvBtiP4Hs9hwWQ1ZMdJqfojBQiyrRUabjDdE",
  "key30": "sEBVdqbkfnixpiDKFQqvSbNTqeBCT1UqFjptsypzXJorDqYNrpAENXb4iNup6F9AGoKX8FBFej79ZNAayMZ5A4c"
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
