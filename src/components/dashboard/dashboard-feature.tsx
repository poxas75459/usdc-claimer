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
    "BAU7Xz8igtt281soawTfpucbF1SNawKnWBuShaCkiWL7Noj8h2ATPYH7vNnoAMDWmU8hLTB9AGWszLWi5MTi1LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SqdYzj3q4dttVckSY5fy23tAbMJccGb5QMQYmbdSo1LCMNEjiuWEbVkKSLcGKZQKPHETKQUxKYY7HScphc4W4F",
  "key1": "65H8w7ETwKZZcg1gxr9nuZx2u3NvSP4nQYJm4wWeH7Do6baTvATGPbQdjMYcogwbjYMgq5H43hG7hTAZjXSNshxK",
  "key2": "4TNn8rKGQfYq4gBCFYx1dbJFvts5aY9mr7RZmUMvwjrbGq6CGkBnxK8gYuiPiHqx3YJmseY8b74DERuNgL1oDAMm",
  "key3": "3MZU15dtx2vBK6aiKjVAGjDgdF5P5eM5zP1UwK2S4q1gtrgQWDBwQtdMewiKaRu9h85CReRbQTvbmDRA49Nh7Rdz",
  "key4": "uRoKp2RGt36WhyjBrtJgfY6YsvCKydsyYqVR9JfShBg3TJcq9HxWnsu58MaL7oqDM7ern1gJTzsB5RNb1DjazQ4",
  "key5": "5cs2KQjtR8bkUbkTwL7MimTA4skeP7kheDRjbHfY3id4C4doCVhiqv2gqjR7z4xtd46ZM6ieuVLf6DpNYM7jYLkx",
  "key6": "2a8HSN6dRmqevdGVr6PzUT8cHJWv9n1m83g3uPa6yyXMBy7e8GfxuG7reZ4tSPKoGPdNZvqZkcRmwyEtuBpPxr7G",
  "key7": "5rPL7ngVJtqXA2xdRteEGxcZhZbMNL7rF2PN6qBvKQuGPqo7GsjJzWbUrfbtobwaQj29XXRC9Y7DRNrE9cqBTTQN",
  "key8": "2jPajRJrfkmV3TDYHJmKHL7MoA3eJobFwt114NA7gd2VFeuG8y2soZMAkyDGMqFVHJ7pK1khPg8W9aed9QnCqLV2",
  "key9": "4cPPLa4sMnBRmDX4rQFt6DXUqsxeokoje3JwjPs69JgvWNNDxkeLZyvfH4YeawADeFMTGAm6jhtr8dUk53QNr7Qr",
  "key10": "4CVJAS1Do2a1wMaGuvvbsgyeRArigK6rqNzdDCkoBPrCZD9bbojYnUbusUVHWfhpb3eqPVQXFD32zMiMpQZHUBc4",
  "key11": "4JAV9Brf2L2V7s4MgBQBDeJZDtzUcmxWbFn7SG4bvt7o9LVyQxEKk5htzVw4oHdpbS5roYbRfBfsZhLijcjYGZdr",
  "key12": "MDfGXUbkzhvbzJbajYtYSSJnXGyvX7qsMQmqQ1ePVBCYqYBoHmBVaHtqkH5ezSz9rSFqdREHr1ddXnmzWZEykET",
  "key13": "2z8KBNjdTRboZw4yEhxzEQ3yPsYXpMup6S62BendSrr5vnS7nWGnBujhE8xu6RotjKpgDKyE5o5fBp95cdsCgDG2",
  "key14": "2uoEiy1fQRraEEcL4WvjAj43GByJ4hs97rTUmTUgeBi9H1dtthbyPM5P8cm7u8WP3EicHdU5KnRQq8v8bDJiC4FG",
  "key15": "53u3xwucPezg6ZHoWhdGua7mQzkfcpdXghuTzwPxpuXy1c6semAXqyQD4yV6uvA6nD9pZrfFVAAd3HkjW8Gv5Hij",
  "key16": "5FhTMEF8ur8981jWooXh8LY9h5du1P7BoYtKfzYBuW7huofopf2W3SSeA3pyXXKrigLBp84NDFELtJeuu6zHYwYT",
  "key17": "yE1esrh3C4pEfvjQZinxysFMLinJr6gR1mePYrPF1YmcTktJftJpfEm6Mj2t9YmnqreWaywvCYRjuzhBM7AHtEr",
  "key18": "3CpYVCCnK28iMGxWc9yPzemcUgkmbV6X4jsdmZ9Y4JkmdHdKw36R3ML2anbYWHEQEXwxWVKKjLZJnXSKifE4a5cx",
  "key19": "FuTjCYRLMbuCdY2L9sm24EPFRuQtPeNQCmdNgJTVukZRH1gJeHh1UBu7zvXPtbFTxSSFYzWi4HGNL79aM16UQNc",
  "key20": "2DjB9L2Z8WvG25y4f4Vj8SVDwwucmnYpgZJ76bqBaQ4sFKUt52aEDyqviqVSXmQg5hEZFfsaXZFkBn1jiQ2rpd3k",
  "key21": "3KWY5UbBRGm9CMmXthRLsinsYBKARFjbjp4BUbkwWmsixL7VJNy4qg6hALhLoGqpTha8HJCR1FdqawHeq8kjD9JU",
  "key22": "5xrxbm9oogyAVssvaTJaYzbz9HYVw4c5vibxKJL2cefT9kjbexB9h76ZFQ4GyG3D85iXHuVcV1ywucwKdSKEMsqc",
  "key23": "2UiX45vJaQLQNmWbe2eHd1zhsibd5HEvL173aEutd1uTZ4pwqFBJ35bSD255Ge2iLeFhSpQfr7rVwy7BAHZrR2Us",
  "key24": "5mbezRuwgmABNn7zPREtHKiRCMcvGSCb8nP8iTisLUpjbKpqupGnaUDUeBQQNDqHohcQf1JgCuNkBXhAQBZK5uNJ",
  "key25": "JuTmWEjZgscWpLpzP3V9RQLY3Pe289PWRgQbaTWadSczV9i5UvEDU66jqQ8VJZzkbyG213ARjpJod4PPwKnb5zH",
  "key26": "661tvUnLhP7J5Gmgkg13cgxSGjH7vyyujabv9BksTnoXKj6Ha3JAgdKM1EMr2YCCD6Tc5rEnoxcwJwfFKdfMGbv8"
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
