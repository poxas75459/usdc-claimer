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
    "46LpVB8V5zvBJaZ8PqAxB5JPQJSNKV8nPD33DT2qFmxJQsbwgmaxQanqmgJZdpNv5qrQCC9hFZBWPE5Qy9NQ5E2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ibykLnTQfqzonwB5NHcJFo9VefguVinriE1q2NVBdMmKQ4CtDo7ejRrbvSJPaEgLx2H6K9YrUjNiyGKsxcQsQr",
  "key1": "5CLqamAVrzGkM2kFAdojDxwjaJ6WYTi23Xg3BaMXxBeMZLZi3TnJ96n9pzwLVT5BsDt5YtWTEz9eGR6EmpuHXbFj",
  "key2": "2NPTWiJksaTnnp7Q7DGbhdAZDQCw67crtCueJT5JNCUuMN6AsYmLZg28D1Qc6jWx8TWP4KoFW8bEfuvmW6XF6id",
  "key3": "26SmeupLpHZjNg3jnvrEBAkEsZR5dZjSWDoFC5t4uo3Z55TVQbo2sQNMqS8R4Bsc4Dw8DxGJjCnyZaYohvDmKyD9",
  "key4": "VrgSgQzqURGS1ELC8oWwUSxi5H2FseZAHvwuAoEr2MofmSMgRcKeCT8GWv1tfty4HgwUNcdzscndi3w8keh6mCA",
  "key5": "2akqox9a6U8zDtkXEtenNJ6KmRsRyfmkTTyw33RjCTRt8ppsrezKT4AjchBZE2sg7e5PWeaKexdmR3x469Ja88aV",
  "key6": "t1zuYVYRnZj3pGXhrLq2SFU1Xkz2FzuBgMEh4bn2aRkLoC1yHVy3fdWSNNfEjB2sjiGDMMruZHQxdEP2ZnVuQhB",
  "key7": "4U8LdV9ALQShHXtHZ7QW7DwFNrKkB369QgHGsvkr76pM7K7pZG1iLKNAiJ2dJYzcSzwkvoyMxUDzCjvGLef9jHmm",
  "key8": "4H5CyjGse22sYy79MDwNconNa9KoEHvVsMsPVwSUcxMf51qQSUUsCsA8psDkJVcyazUi64ZfHRAyhMCJhKiY1GbD",
  "key9": "4uaUQVcgpSoJcQmTVHzfbTvcnBTCPmMg9QWHaHmaNQKz2FFcPQCoqKeXg4BqY3JD3DefjQxsnsJ4r4y9n7KZE1k1",
  "key10": "2Tev9xf9Hr4vgsvaEzCzfcmZEfzD1E5ipxYmbmseJUMgNmFPnD9edesB4eyzNAq7yutreFgSmBt8JJteCTABLVXx",
  "key11": "3wFqbzE24sZrpM9EtJYsXABYfLufRBJeDS97cpqo2pP4wEvjmzi2SxDmB9fFxYWT1bCBXPfCHBMC6p5AuXjEKh78",
  "key12": "5CrcgypDttB5sc48AbTLVNwCTF4qbTLBTjbRj8Dg8XZH9Brx1r234p6JKAvanv3mVX21Ceku2UzHLQRju3XX64hN",
  "key13": "5wstBfpLA4ZLzh7TFxVv2XprDraQE9cxRCbF29uPrk4BR5knCz9fNP1jBM4tVngQksSUKJfNZ8HbejMUXyx7Rp87",
  "key14": "2DkiJXLyGqseGw5Vash6LXsdZr6s6LFmkhPxGtzT9dySTBAN99So1kWExA3fGfwnAKSHWyzbDs5BFZhkBRGoGBZ4",
  "key15": "34VumM3gt5RfdxcrA66nJpeSHE1E1HmgKuwuzmswfmnY4jEzm2A17srQopUY8XZXi49kihkueHTWu9C2QCgN1Ljp",
  "key16": "3XZuDv8W3LZyxB23ygyoXyidgqKyHR28LBZgQhEaNtrVrDKChr2uGYDD1t2xXQWXRoCcpEnDTap3EevphkRSNtBn",
  "key17": "44dsP1cuTkxNd4sQmjzmtw2itoe9bkuZGyrjUsLHDzEjGQxsgXuBa5VRcEXaHw44DYpEvFC6Bxjwxqziyj7PaTVX",
  "key18": "2TJndrjRMzEZTHjCGZ1vE18PddKYMrL34F1iciwSX2FanttobovA26dYy98GzTjdHCfXeFw1cwNU1khaoUMrhc6z",
  "key19": "2tD5xiD7AqZ7uisADD1PPJE3wKpX1wuoYf3YyeV1T7iEbTvvh6mMqoe2WPSQVtqwFE3Ejx9NcJQDMuz3wERnrF4v",
  "key20": "5eYbwG31SKYLxWbnhyTRgt26dMRmraMd2mGAFefdxYES4ULTn2NkHNc29y19Yx3uYL3rLpXkHtiAFMEEBCccJsL5",
  "key21": "3on5xbsqAdiaSnw8eN4wG2YXGjiXda9b2r8X7jwnbdZFLezy7Szi2bbehprdwmAqbaDnFzRNfdrdDLCny5E6nGhr",
  "key22": "3MJ9n6rGytXvqYRDJK7pp8JZ3vmZ6Xos8Jn4hzBa2MnyarJ7dgm12n7V5PkTmtc3revE4zHL5qhiPnFYiexYkssF",
  "key23": "49ow65w5wDXyJBgfaSQehPgGPvHNjDziGWBMRTK4UwHjfG1BWVmu6jNtrtX7TWPpNY4eF5St1VF3C1vfz7EvB7qP",
  "key24": "3GNmNAAnczAuxhHt5FMNxg1YLa56x5rCXJaaiYx1FVs3AahqA67diL6FvmbhcXnmv9bNykHTcTX4rAMYJM9zUPj",
  "key25": "56tMuhnykq1oWKGgTb2aQY1Rve4sLHYW3wEGNKc8SF8xq1Drk7pTPeHFMvYhfSLxTJCfGXUw87iKydCLZyKdcYEg",
  "key26": "3zEDHc24WKxhvH5VRJhZDm8igbLCRzAAb7Z9sGrTQwzzdbfXxvV1FxbJ9wPPEk6Ae5piHsKVLCnAEfC9jXh5uwWx",
  "key27": "36rjzCQ9FGbnKKiWyGx7bsr8aAuRgeLjn4P2Rib4e8k77JxmtmhevVccfCiMAFwaYyYQ2YuvMRDahH9k6VZhvay1",
  "key28": "4e28FAe6H57A8keCoB9H7YhMV9Vx5QjH1aH7fxNxj9LQsu7DyKoUKX22xo3A4ABThzmWofZmRESMAKhBHNDGN5cP",
  "key29": "4VQhcxfPjmHEPDeRYbegq3oRn217e8CNDjG9KQSdPqrVrCyidtRLJV7ruuxRGAm86MX4uewbsCNm1dyTfi3RQ4H7",
  "key30": "3TjBNk4yVCxFZa4ZCEhiqVSqXXMS2eyLY2jLg667o4wA9v34ZvKLNXZHr3rULrFDPS427VZvt2KXAg8BSce5uX1n",
  "key31": "PCzM6BSAozDXQNiAZdgkDLkqmB57iaaM5ZxoUVGZoAvt878Hgqtz9tVLxL1RKKixKDNSRCUBZuuJJskSkKvw54Z",
  "key32": "5iN1JiWRnt4BFaTVdMc4VVbLckvJrhvUHNhsQ9cTjeGvTf2WKBYq26iWuKnu9ePWhGuCHpk1KZgG792oaNohEorq",
  "key33": "5AHWhnRqjWqHx8uWPvpnQh6QXg9ZWS9p832eU6jcEivCD9zzQeUZ3NUMSabuwmBe3w9KuAmPQX8XLMhY1Tb4cfs8",
  "key34": "4jRSec7yWcXh3W17m4ndDpKFKrwuv7UVfJAcKRTJZdGtqQpGuRy8jdzrDTTxgVDZnmxfJzpr5W2w9sc5T7KVzoFA",
  "key35": "siYazUqknSWiPCNerDK7pK8Wm4RBTKYwrjcUAb8E5cnxkWHyPjBGijgmYg3ZqG6XHKxUZntaQUVsNfEoMwYm2Cv",
  "key36": "5TaPDhfiVvNDBEQjyXNjm9x8fe8JB46q8cGZ752GfXxcNB6XmU7BcKqHVfcVqAieYA4onDJGnU2hpd2QtL8Ep4fT",
  "key37": "3fmipboZ3DMoB9MUPpfDP4EM7HWC9Eowm2HL2ZcpjdxNDbkck6NwmNG7S9PjdZtE8gshVPcEHuwKaiWhapwx6X9f",
  "key38": "4uNam11GFXFxNCdW49dVbsWHH4Aejwber4KgomPXiJYKkPByvRZLvzu2z52PK8Et4vjDJfkhVoJaGhRVgd4svw6x",
  "key39": "36SjdvZ9Zbvr5TKc1ABkZ8TxC3anKDP1rNp1k2J6famv9z56xrSEwCLNHseo1EDhCEXpxC9LdLeJZ8Yzmm7Y4wod",
  "key40": "3Cu9DjrXHybEcP1g29BfFMiEBD1ws6WyWwbeK8bQzgTEsRfX9Q5BUBdatNy7zGAmwJHVYcRY1sVZNj5DqkaW2XE7"
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
