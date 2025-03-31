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
    "2tMGfJ19WVNS1G4FhoFkGUUbiRvqq864XWPLUdgWSLM8i1vfR5uBZMiZ4UXfzFtkC1KfY2UJ5WrGRzgQXxd8FHok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXUV7dEQiNuYGU4Ba95zvE9d1Z7G2r3Zoyxs31wVSyYx8ebwgReuWR3PKTtKc1DH4MpsM1tBEXRfCKSqbyjWFZo",
  "key1": "5DwhyBFKYLJ3JtmCx2X6sUapKezXkaArcrVCtdmksSFDv7gifaidwZRhwzERsTKoU1JnRm5pekUWPNibMFgx89PN",
  "key2": "5XgDv9StiYniNxiqZwiEMLuGxeKUPkQTYfaF21GCQ1MBDx18VNnRe8sZMdbaiGgqXSH7vgzUvbxmzzqgnMPAdXUn",
  "key3": "1km7fH2FapicQK3C2yv6rLsJnY51kWvhDLPMWHhUnNo3YEeCPQFt8gL5ywEQbCo6oHSVjh8VSaFjeAgWH6Q5ft9",
  "key4": "5tpi1MZBwPQLBt3LeSDR5pdVE6PmJRC1Qn6NWo9L1n5XrkgEyMM1aoqfkZ3YyrAUyAXAoZ4sXAEbo8vQqhpQUYzj",
  "key5": "2ET4qE8EuWDtZH1bUnPEopAQ3aXMcDC9vR96dWcBykK2j6judbuZjpQzFMhXTfT22W2GkaHeTt6wff5Zmnoi6UkU",
  "key6": "66AB4NV2zkvYESJ5L8Z6sn9MZ7BEzejtJPiezpj2Bx4qj64gdjH1uCMvshBhWhwX48ZJPxkJ25m6sJ3fY1R1vqXp",
  "key7": "3GopqmjSUKeP4UPy7DF3CDzJfRPD4E4AAYCJq4nwXBVS7TpWCshfcVeeDL4gRmarEVAGcJosBei4TvJFpsH4yi47",
  "key8": "LZZvnP3MhX6znMC9LMFKs6j7qq737qLw3GEzSQEkJid2ohXptfQ79sgqxrr49TKjUvJqv3yqKykWPN2CmcDNp6b",
  "key9": "5hmfRHBTTwKoMNA3mfK3pk4EpxQdkbt6oF1vg9dVa2y8KzoeJdJCNNja9LkSERwSrAjnA3ozC1KtYmU5qpu78pm4",
  "key10": "4qUpeKmBEWFtsdhxsaYez4yUTeAofHJgfkrhWLifc5u7KmNw8Qa9PoLYTHdZtjFRauAxwRetBiKnfcBBKomjcgxS",
  "key11": "8DT7aA9BSFPg4GkermP11Mr6CfqqLAzRcsvy7TKVQm2dNJBK142SBt6UmAnfPPG5XbughdCzk3tBE1Bpv8sxr1r",
  "key12": "1ZbCiHiAgK9P4sz1f8W1GtuDtFtGMWHkHubnMR36kc9yhVJnT7LAtRruqkTxFMHgLAAHQYSsgysw5PkD5mRGnsR",
  "key13": "5wnX745sqqp8UTctDhXqKa5V5X7A2x4nHWT1oWh6nrbaqw9gKaLtXqdhw1WdpHxe39u33bf1TVToyyt3UNw3tt4b",
  "key14": "4GCxLFTYtHgVTgeaEBnC47BzWLTUwtXMVXpREwt2rYo8X48L68FxJS8YUwBP7bqDEiqcLSXYAdvzSSV2jpvQeKDC",
  "key15": "2kX5u17r21Cm26zqCdTyysqowS9Jtib49oSQQs1ANbx2B9qUUmCzFgQtP4Fuei8SPRZvpTtyvCZaNDEWgKGsiWba",
  "key16": "4TXp2HaNZ6zo9fC3uzRfGVFFirB1DMWgYFJDUT8LG8vqnUcVT9r3f715wQK2afszvQ2zQYBDEhcTDEp5phdjwpC5",
  "key17": "4Da1PEN3WTtBFvtK1wddS5aRjfjYKbbN2GcMbMnRALihmaUAhKXXntxL6yqBRXfHtfGzi8ZPH3gtEm1UwGFt1B7Q",
  "key18": "2GxYWaqutPESQwysoUaXB3yc4HgYedhuavvVTdRNR7PK2F2jxK4ZwVqt8z8zXJHQ1LzL7QvWZTPAtEqLwbTAXut3",
  "key19": "4YmcoYP4qg3nmHQUMjFzgMUsbmPM9wjwRBWtHrzHT91Lsz9gdcGEUuBb4XjH6gsY6NxsjDKK4RWZsWwzfZA1XBnf",
  "key20": "4rjT3GRn3EtAhiQG3zTh23tBf4UFARkPsArwbXncCg8R2JeSa3EJH6ZnpVa4M51N6cbLY2MvcdN4MWFwYvChymDS",
  "key21": "4oMFUUEpVFWABqHTgqgMpwfmVTLjofakRe3HwqoorTKcnnuA6AgVJ1CZ9ajWKUdQcMVTGuimWSRLP7TGWjLpsxMo",
  "key22": "wP32Ah6UjjKd3nB5yvdquBbbqhKbX2NEbzFbiDhe5jLFEvsik7DhihZrwGrNiy4Apkr8fG5Bzyj8RrDRpshCQ4z",
  "key23": "2SdqbmqchvsYtsSB3B4E6Ut28eeu15onRnu3iEtjRLYEnko5FjfY6VzF9o4KYivSgq2kknjfG9Lj25D9Su4uH7F9",
  "key24": "2SFxEHdLL7WYUPcdzRWmnUfdGWBTpTBN2RiLyTKhnB6Dj89FR8yyECnYtPojaELEyKNQq5u5ypsnQBKqqgK95e7h",
  "key25": "34sLmAyqp5P3uZJZnrUgpBuz4URT4yAAyC84qdcVu2V8L33P4B9Ln2ZRh5itbNJyPsKFKdzxe2CENnDYserjzeFx",
  "key26": "5D1NMF4ugyjJs6FfG6QrkgdNNM6Zgq3nQzoT53yweWGCh2LqvkJ8nx4Q8xtw8ytYmXndDkeZdtEiD3SetR16NbK9",
  "key27": "47SN58riGmxCF25FdKWHQTmDz5ijJQxziKRoF67cPCA2YPp5xpXLfYcGvRQEYgKnWNyKgboXiqmEcF58JysDRuQC",
  "key28": "3EL2G5chdayAYQotUZvFoQPz39wsVhJaKhN3c99PvzZScHNYzbCFt6dtQFbQ4ordeNd5D9P2uSj9hoEmv14YYmB9"
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
