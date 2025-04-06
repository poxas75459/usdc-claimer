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
    "2tH4o53p3wznwHhWwrx7zrHtSBPxj2rk7FSBBMSCFeYD42uYtQtyMP56XXjAk9QEUWNkduzCxVYn5FbH5aTerYMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAfLexut6SZ77ByuEcSkZQ7DAuUQH4mBmwMsnsYcFDMPZyDGX2RznUD1QPcLAutcMojLYHHB2Dw5TYw9YRZyJHU",
  "key1": "fidCCAW9fsVhBqBbNbuNgaxoCCEXUMdhXwAWMP2RJbMc8YxPMasjSEmems7Jbwqvb8StDbymft7tGqoboZN3duq",
  "key2": "2nmrCSiZ5UKiNUdSDSwQXnkgkjnxXtpMFhFeC4948QgkHD4ti2b7NZikG5gZLq21SnTpMJTd4NAG7qoUASvFLRbt",
  "key3": "3vpGEpRdRiVTMHRJgGugic25sdqobUSFB9TwgpRsMqsJdJ6H3mRBX2P4PrdJCtdBaiwRdQgLno3YNt93UufkiYUi",
  "key4": "64Hz3VBXf5RFnacTYiUCKi1JzbWmzJ7JuefJgo3LJd2x6AR1ZaZkeuNbQcWNQQxHbE47HNGjWMpeANgQBiXXe85y",
  "key5": "sgrgJHx8MhVBg3gvLGN7aM7MnaZkLpAtpjBNi3z68qKdnQANFz1SUazKHiyXVjyN3WoECWkpSfHvt2qVqVU5TA9",
  "key6": "NhoQ9u539rSML9TuxXRjX9vnJmmdjShCoAHjo5VzjadFy3mgYPm5B23Ly13GwTKeHF6DCyzXDDFs9kFhudct5UM",
  "key7": "3ZfcXudZLGqsMxyHsyfKaFNgQknDYwWcP3LzrbUHGRKobzcPfbRTwngi3B1ktuV8iwMTMPYkJn45hX6Cx8BweKJE",
  "key8": "pvFUzRsvBLqD6v78peXqeSGDMcYE4w95WHqghuNQreuBNjeuvgpACQaLEju2xSfAcHKQwy2SXJwoqccgd7G6zJo",
  "key9": "FAHQZ5pMBX6y6W9wLm6cEQz5MCgNSkqgDDQ2befCVV83t4jgGvNN3QzrBAzabTHbbtm4tvhMMdAy6BpkcVjgx4e",
  "key10": "UaR92fAJSusCEKiocgrTY842A2zC1MWiTxZ6nMkZxp93EcLcA76SwGs6oCaW4gnZGnyTCXsxXbXxb3aGKfB8f4K",
  "key11": "5UEFxTKfmQ5CpXgQbgFCDTAfcDwQRqybqAVnVvu7eH3fW7tx5PajVUsJ3ymdkwiiMJ6GRLHDkUwc6MmCy3L2t9mv",
  "key12": "36cbAMdWZWx3R38P9jZohWMaDGq1WF7DMVkoDWJ9AqJztLAbdccvzkQiXxhCPdMQdcy8La1hS3m66HuQF7DCCrCM",
  "key13": "5ZpLijaJyAztv4XTFF5UcoxTtXGwg6GZmjrSUXf6WbTw6BBhD6AzQWtAn7KReRvpCh3fShofWDQ8YXnEmtHqm5ta",
  "key14": "4mAojNcvFNS7Hn76aYiyLm32QiUztmg4NAxWTBSGk1AeSS2aqq9AmWD2N2p9yPtzgJQgMRsTu6ich4mpuqvykwGx",
  "key15": "52Ut229Y3nA4QEE3MMXuYzz2fePYWtsS5KzqnUtUDWLdibTWdqvKjWtvJ3vHmiv7QsmgVii61UBQerCD78TkKgBC",
  "key16": "4BY5hdXBzh7tYQi4KnU7GWbnSaAubENax37w2gZ3tEahqwziFN5EzvR6zX38XXnBaawJYutAAFz3moDNWzLSnDXE",
  "key17": "TdySUJonccN8R3BkWbJM3np2DRSoQvU8NkWLc25tnhuq5FLwop1qYqKcoYdtUgTGbYsKeyhb2Pcwn6WTrHdZAdu",
  "key18": "63kRksb8zwwTszZ1i4Cmm7Rtqzy9AvBiSTZcZcVJorGNMQzSSStvkcbUnqKGspAv8ezG5w6W5skuEQLhpgbA5HJ7",
  "key19": "2JBZtq8MNVQQ2z345j5LzsBV4cGhbwxXqYVhbnJtKnzoxWwAHDXesLQv5j29BnZ96tw2xAG4agJKQU9dGmk96RX9",
  "key20": "dXmUBNz1dnLpKtsA3mR881fbhipzVAntAYM7jm1ewvFzBZHEpkYtQwhi1ReNWwekvv5yWaxfL8vV4FUkx1UJzcS",
  "key21": "EVuNvfoRu5QMEhaNMqPAgJzVNZk3VQNfRs2hM2PiN3UzJyxFd98PeD9xD7Yf3VaqX84siaFnhZmoQ4uz7RBKNBi",
  "key22": "3kE31vHRpwiRW1MDfztdosJ6mEg1Usy1yqaVkNYCHBNrY5QvstPHwagfXkeJ1HvrGi8iFbsRd1FJRDsHVoBh41Qu",
  "key23": "kxY6objwb6KvzPfrZGmyyc79QBrx5sx115w9vkNfQpqiAndEcYdK5ssNeucTbUiGCoMC91JrCRd19JzFPQUzFMK",
  "key24": "2nZLRAV2hoF3y1zt5PH1ZjuJ75DZT18Mjw2z2E5o5bY5bW4n512yRRsuHKz8U63DMdYtytdmymMTFSNXZDkiZQxM",
  "key25": "4tHWRVC8emYopmaRVnGAbqhecMhhtQUZT9QFyERmRxF28dXBiH9UQE2VKbW5Gb5qmbZS8fxrSx7mzLCtCho79SLm",
  "key26": "tzKjqUBLdqjNsyvyJCLpaefAcqi5yXbFk8TNks35YTFdb3qjejW8EYgXTc5Lopbvz4FgmipmBEFrgCK1C3jXnM5",
  "key27": "2nQkmaiFmvdf7WHFcZ6uKvcx6w5RuR1uFgKnTGsv6VLxJY3LbpBu3fnwrJFJDpc77snsJkdsdjKWu9mJJ2jxTAPs",
  "key28": "3bTZQVjZSw9jicK6wP6n6b3mQ76bQ6k8mWoXhLvxR9dVFKdA6A82xFemtFc4PbW3bw7deCDCsRbaByYgEJBjc2nh",
  "key29": "3Wf1HjFw6y4a87mBGrpkwCkbwK3G9XAjoBp4aQeCg1sXhXiyvgTXFAZXn3iGtpRFSB58QwMaBTcyrzaktVG8rQfT",
  "key30": "29espJDUcozzbuwd73fb9cY4NQqD4Qj3wsNewdPV5hdnS8KPiDKJKZfvwpiNLxsofrNhnBzPgEfp71WGnoSLeWwu",
  "key31": "4UGfbDKuhw9ybnWcH4x9atrcivnShFVS9Egun7ipPQfbUoMWzkfbt765FERWRG8wLWEe3fLmyE18rZH1Pa3CrRkY",
  "key32": "QTKpHWMKWaMfCDVv7GJkZKV9CQ2rRaxrw78tQkqnRxriNVScy9ZHHCo69mYJpFm5dmvzfBe9ikrRTu7AhDK4cX1",
  "key33": "27h6YGsQjdcuEDBLZEQ3SQZSbTKrx7nZvT5Y2gWga38Z7AMnT5JWkTthszi73WWxJAT98tkJeH5BzFPzhRiaPsbf",
  "key34": "4iSQMcY3PLzkwan4b8dnkWV1xdTSRmREwhvFMnEWMBfi9RtVUwR9bgnmNtgUBDJGpCCMjvBgiWucAw61Yekfgqfh"
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
