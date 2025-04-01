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
    "3jiyyrdk86wCaHNzkd9jDSCu7tTGDVoFGg3gre8y8aCmwZS9xkixZue6kBbWWaF3ThUNmTicxPywtPDMdaRjh34V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WwD2kFfJirsr8Y3d4Cj5GyzytB21sD8WZHvm6SMSMDkRTa3gPwzfGKraBikXYvn1a3LpYhNaLf5BRAU8k5LvdzD",
  "key1": "ekefUTtSPLp7iScL7gRUngEnAJcWVn98s8W8Vw4iE3geBvvgDdfvPs4zzuQ4hDugE5QCgvrf1MUFkyvcZNkSkRK",
  "key2": "53ibczdEApmsynT3DgL4FgZCrc591UD2YCUVtEYyxpA9XKCyQRJv2dtqyi1rZNzLYZYC87mAxLWEcikjM1i9Xpbk",
  "key3": "4F5M7wEHW9oV9tSefU2Rih8ULT6ZVwhU61UYQws4qRiAQLRPkMeoV2JBiiTpg7di7krvHrEVqHK27FG5ZiXchp1i",
  "key4": "3Rwptpm9JnZiajgo7PdtxNaPRmu7ukb16GTwioMuvnyvHfcR1SEtXLqJXgwbxFNWKvPoGS416rc7nS9fut41x6VH",
  "key5": "4dke19mjKgx9CCGf5EQ3ie1914nYTZHgdNkFE5UEwVEiitSBb7KzVZ1AajtAms3cagzuGsdWMVrUDhSE61EraqMG",
  "key6": "4c1CU34RH6xfovCcQG5dqpMcxHRdNhcc7EiiPyENMR29mq4EhWcBRL4wkVcsWPCgEyhxNziyoSfQhVxW7XJDTtfw",
  "key7": "jXgyGpBHm8JySFMmrvWbE2mLBUKaKZ3Td2ULo3uTzWu8tb3ehs1x32CHcSgCDfRVjgA1jPumGf6EJNAEvMUsqCD",
  "key8": "QJJxPXES3KrhnuCRDvRhGQabb59ScTGGVY3DeJgWDLW9iieR8UeNCqtF4fjBQsuuF5yDagAn5aL2MffYXYeYo4U",
  "key9": "ur16zRG1XicELvkwJDkcesVGb2WzLLvioGaBEXRfr4TSPyMtXoe22C7sXTuVC8khZcPdpQ9y4SZPBC3kLMCwFM3",
  "key10": "2SQTrgqHkS8Tb8ub1iMdjjrSuV7ozaJxmVtmnKQ56dDyWMYziKq6gjaBB5RdApi6V3KV1Bb43HrWYxgbvCt2kZGY",
  "key11": "4mpzQVjmRHmAGSMnbwUbqGzG6xJ6pg96NJ5eRd2NLQnWug7TFMe5khh14p3EhbqEXK3P5X8fX1tcGYaJgasrTBSv",
  "key12": "5MPRZtRgsqm3xBHA73TUC6kA8a9A5nmuzoTZw8t3vrtX29H6E7wZiPYAztSiechXmEUkPGsQiB1fZK25piA9MyqK",
  "key13": "2xb6rvKrPgHBHp4WVDjNifR7RTMwFYuEHouXCtYC1vD6gs4dPhczVv3YTcGcQeLLbBifDishX6Bcc8cLn3LTUniB",
  "key14": "3Q9XKUSosV8YvL8gVo5Ph266zY1gNm7QvRNpV7kFL6D7SNZzRdwkZTvNSHK1VWdTt1VUhxSL1iNDLPu9H2Hffkbj",
  "key15": "4yCgz9RP9uwGuVEkobsYJpDaQvZeTiVrjPc8h4vhJGL46saB6Ym7WvkPSjozJSqNQuJ8wFQ1PLJX7bdJnu7iEmPC",
  "key16": "44Q8YE3BKqe7uveDrkQM6fzTLMofB2t59WzXgvEJxjib6fuCSjZ5zibCXperHeqj4HFZQo38vYodL2uQkus7rQNf",
  "key17": "4H3kPh2oyGWC4hD6zn6Kpt21xSho8rJtqjLqMP5fUywcAwvJfcSjRoB6o4C9GXvoHs6F1tKsq7yyZoUptT3jFNq7",
  "key18": "3wHxUoLnKtwDC5BL4vmG7y2RHrmEdHZKLdaXHw4Yc3UAxknEoLjWyjZrAFJHjpTPbDp6yCKvaRsZXyUioKyc6Qp7",
  "key19": "X53TuCtPz3FN71g1pNQSiG2iicjNHVCcH9J7vsy6a7hqHk9vjvNsKqVwk9uR9hEZgLotWwtarB5j7WxVGbuoxKw",
  "key20": "4gTMHKRHHkF4gp8QzAcKEktmByGb6uhmME4maHYhpG8WMEDPCCsXa2RTMYMF2w7H445YsLZTvSL8BL5C4h64abwn",
  "key21": "2PuZPZkP5x2jqmLbGPcCArQWW32JQrDh7a1eNDLJ4EkvmaU9VTnmo8k5QJ4ntShnTNQ7iUxyJKd1pbwsSELo9JZs",
  "key22": "B8A2jtEbb3sKG3T3hJtviscjUb1RBikGftmuwRGgQzeQ4C1rPWpQgpz5cNXKjb7dzYQffoFn9HV36RxBZ6uSymZ",
  "key23": "5782TJYewBF6w2sCxVeiqAfcL4KDZFHEeVYocxBZ5v5nZ4YDjxLLb3aP3a99BCtaDS2UVNBSRBdDdRJqP5PGkUTu",
  "key24": "5cUdXxs8bd2VRA2L5mjce6wnUekbP2DQVYNjE9YjdKZyRaaqFrM1KtZFSimHRD4JjgCMHw8fAWDggYxctwjY5ffT",
  "key25": "4f76JkdBqdbh8aDw717o8vatyBF6ciCUVMnToBRf4WTTim9c1S1i6GjN3SE4ruj2tv3tKX8MkXTKkYS2eJ19qzMg",
  "key26": "4in9x2mXZkAQDEv81xgVac6k4cuJccr6m9grWGTkmik6oDtg3awFuXWZgrUbfhnBE67oyZQD97CdAsCTMETDx2v8",
  "key27": "5d2cztH7shoh8v4N3G7ae4ScRi2sAzCK5eiUwN8LZ5AqZQiCDkyMCvRm44C57sQRXrpisy2m6rTo9DTXhKW5uPP9",
  "key28": "5btKTvWSGfeuHmMUMh6J4yPPcVeLwYUFoVHEB6Ddmx8ocEeFijhgBC5cgW8vafoMopZX6eZPuNfsaK5rs6ZbRADP",
  "key29": "4LqFDstzKt85HpH3WyRxDCzT3nDmVhKPnqra11XjDKk55xAQmZZAS5CHFkCNeXZmvBdCoHwmaKSkUXsP8Cn9FP2J"
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
