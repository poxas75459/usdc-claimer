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
    "2Z3gKRHEfDqu4MUreMw3H3YiRsR3SWuLeRwSr9ijqRtSjUNcJ354gXRkYBVxiXmdyRmBoAoLgjCBKoQUwQd15DEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45gcXGcEL6PrCUC87Z7mANaLmzwEEVHQgaXCBuGr9brRioRxJdUFg1B7ckaFKVPUj8u1C7xCyKbN9TzYQzfLMjpF",
  "key1": "4j85hYQz8NcMsW9QNig4dR8udkyMtVkmV2NUSCir6jsqdF2J8fYo31Lhvm8JGbi8ZrqhumfBqAcv1oGkRcpuT2iE",
  "key2": "4UxEy6LrojHooQd2VndBsDjDkwKuJBJz4vdP77v9914LtsJiFwsM4YE9Aw9gwX4yJWz5CB3jiZT32D5NtiLDg2vm",
  "key3": "2TMx5KscADtJd6MgBKq8JiHiA3SMh4pnB6LyRaJtAT4PKxmFTVztnta15vrU7Ywo1V6g9qdJApbjd1KX7yrQXN75",
  "key4": "2YGjMyMNxtrJt4hgXQv848JDgLUUvvyHZGrkkeu2KHSxMe5fJnh6tFB8KhcJ9GJayCUXpsqzS5DgL5JmyJztSa3Y",
  "key5": "3Vk1K5nhiveZtGfEVZs2wGkYiEd46feUTZa9tFHtaQ1RArCombr7MVBoN2jfYE1BEaxeB4b4wfuniE8fNjY7kQVd",
  "key6": "2Pim9tdQjeqmFA6myW5uYc3fiHWbHby7w9qQQj6Tf23sEaFS9PwfwU1nFk7rUs4ujJ6YembHkrdLB3S6eVpTTVbm",
  "key7": "342zdUHc2SwZRaKDgE5JhkvhyRn4yyJt3kt2JWt2gfypDqvAb1cY9fwdRfZywq2yKeRZthWndH1XLaJ2RtmDuptb",
  "key8": "2DDZsX7xmBBApuX1abAn4jmvri8euWSUJmjbb7MBd55g6tAGP5iGA1syMUDMFmQ8CmqJpJfu7hcKJQ4sjJUaqFzH",
  "key9": "ERP3XwEicyjayHWuYVVcx1UyjHbCkvsX6MUGkHLuqdZUSbzWuiiTyMnaYEbs2q3trpQThWz5qvBZBD9Ms6c1BeL",
  "key10": "64EzN2ea4D1egrMVHRoJDUsUmEVUxrQgdDFpUEF4vnA2KRxVkLH7V8ku1x7bf45j9xLYvC53DyMsLDCn7C4kBWJz",
  "key11": "4hbsqcFBXdNRHmkZP7TtnaSzXbK3ie6Zt8EyDvm1XnuSnYLzNHm5coaMe4jPeFEb8Df2yUGRm8rMVGYRRA6qkDda",
  "key12": "5wJVCUqkUmbswscPqYtppEZSojhdT81HDNvtqmvqsL9nKVuVYxfLpHPmCi3qseAGWPvZEvMWfBRgLNGzg7Eotpbb",
  "key13": "32YWSn1EiLSQS64Wg7EXo3RGESK58MmR3oekdCTmbGDxT4wCVdVo31LVzSaHbmUYhp3q928v7vZuQ3YNmtkePL3F",
  "key14": "5CSoetCRhAZ7dd785exwS5eXVcQKufFNutnotNBFjcyBcx9GmgHgodtx42LjFFhX68fKqhfYm7TcFwcGL1KVYzkr",
  "key15": "5SR8JMr5F1aHQqnyfnRhapNbDpBqs83RPBbAtD1SgsJAah9yGMtF2fEKQ8RSU6ZiWsivP451bqMavijaf7a6HnCi",
  "key16": "5jECNyaUTQTK8riSqSUad6XUrQc7in2R3JfrGTp2wV36Tr5pkeZ1o6kj7TnrPxUNAbT22AtqnqMPhPQWUC52GsX7",
  "key17": "2cmmXnaoUsfhetSsARVLhH2Bh6ZrJxNacvhAcRZkuFrfsddtz3R4oNC4oF7xnce2Yc6yPCcQVvG55zSakqwvbx9L",
  "key18": "5ktuqUWjBXMgyytnNuP37mYKQrZQpDgJ29jGf8XTsKq6HYBu9bhJyz8Jpoargx1hTaCERnZRnUSfGGpH7iEEVdc",
  "key19": "2i9jmCSJGX7RZX1WsV7NmaR7y4EmQvyBaf4yGmZExdsVdfXoP3DCRWuppAv8rChAM6zzZh2Je6hqUaTPvZXqKiFS",
  "key20": "567trZJdgvEQEwKwwULTo5rKtYxq9qdjBRKimWLdxi6J6V7ZwTAm9J5gnRbgP1PdMiR8Ev5zFASFAmQ8sRrvZjrT",
  "key21": "2Knue9hKqJ53iancmbB3v6cJbZA1LhnK7Zx22dC2ZfovWCWB7Q469tnje9CTSPtqUbERxtp7JZouzxhFsy6mhdQa",
  "key22": "PLfLe2tpJ4tEvr6TMbMtUxDwZdn9RwwrLKPkp78UgsQNtBYg41msZ8juDR4AJfkxphRfRnBoHavB18vovKEim7y",
  "key23": "66aAmknwzAtxw9gmgpuZ3fTrMktvt9hYpnPYTi1F6cJzRLsqosvJPvfksNayiSLJVeNMizEKQ816KLoeyEcP6RAc",
  "key24": "4MKL4y499XfEhSk8iXyzEdDRAvY6XfPN2NZbkcqU4y7EcVpBjeGqs79jYf3yEi6ZCbhyuV46dLqm9Djn8znpWeJu",
  "key25": "4d4EAaxDYBoQr7tAe6Vww75eiXcDPPL4NjAZzsWyKX2WS7LX3SYHHefMkurRnQx6okSRLWZMKonnZCxiLqTbqHx9",
  "key26": "5UvX22mfSDTxm74VMjYMb5SUkkxf8WbzMNaf1ELaa8uFY3grdby8ZiCEGagrVNpehGKg87VCXvBxnATWD3sC9TE",
  "key27": "2MYZSSdM18mpccXAXcCUpaqTDGdwZ1a2TmK3rnwbdayhAsFQV7zfAzru6aXv33nRwMV7QWJ5qYG7Ecuo2Gedicuf",
  "key28": "4EUBA7rpERUiFWgNLCdvrhHXunRc1LoDCuHh5uEKmb6fmRB9kqmTmgrAm1pR15YkDV4eeDCSvHHhyUT7wJidC2zi",
  "key29": "4136YfYwuEYMMycwoaVQFWbQyor3Hiv5TZpibJBXp35p4QxiUMohs64Fuk8F6wryD4ms36PKstwEdQ7WNPcbd6h5",
  "key30": "2SFiJkjWRh4HWk8BNXqnM9PKtaSWM5dMRJnT3wkqDwaXX7SfFTqwcdWCXVBpujqnsWcVejbsjEUpcVDH8zppB13A",
  "key31": "fVZnhqa7wqCWaeAUi2ssjiawEUHGz1BsvLQ3dg6ZppXDzB2cRiqy9qmJAdyk7KopYdWt2UAidxFduPd98NGPq8V",
  "key32": "4A3fZS6wHEYYQsknfEF1edrnPTAMGix8BwNKRNPBPDeL6jbfKiTh13VqetgYfifKxAZhAgbb7cPsQPqya8EBS5D3",
  "key33": "2M3gesVtadjyhr3pSB4oiLnCPqY7twm1Pvsk3zvULMFtzMVrVAwUtcwQPcCx23WSyydp6TEBqSSNdsPWbjL1EoNd",
  "key34": "5PytgHfdPVbCLmTpBGdg4tsJFwQkhzctcd16q1TygCphXS8ZhR3uAuqBuzdpTsDhWFCnu2HcC54Qc3ibA2ZJyM2b",
  "key35": "2xgc5MS4Ae1zJuPtHU5CTcxfk4276HK9tuFMyp4tSy9jNSKmFmnQKGHwVqh5kvP739ufXFzYCcPnh3PSxHnUG52z",
  "key36": "4JzpAeXSZo3KvJJekcG4M3fbe3YbeFGVmu8ErHWgzGb5bcqKmGAAve6cc9qhgWACCdPgC76CYCCTk6eeoez2jfZj",
  "key37": "jDjLcKZwkFis4PVXb8JofhYyaW68YncqfV2oDhzuCQt1rY8JLVFmaUEiKLTagt93brsveTgTvSPvUxqc3YsGspB",
  "key38": "4WKbEfUdzJXouUtEJBF28nAXW1XcsRhRbYEoJHUnHd1VJ25RyYyMSjFbndoYD5uKBY8zXqZnEAkfUdCuRCLtdTRK",
  "key39": "2UTsomNJE2tW3Z2XePvPfoDTqHurS1ecfjCSyXYVtQSeaRQf4vMtTQq24hM8Sm68YPhmt6phkWD8XP5At5XFigvz",
  "key40": "5JtmwxQXmvfhi3dQt14wGJxQtkaMQgDZu8YgmsoMhs6TRrAPFQcpepjKrerkyDn7aqKDCawZ7voXvzXsWbsqdpta",
  "key41": "5MLrJ6nJiAGswZmFnAA1QKBu1g3ffspQfhcoMiA881BtMs8ie7kEGM9b3AdkViQYeDZ8hALJWKAjGGLrPQ9Qv4Wc",
  "key42": "wZEJ2jdr4FSyFR5E82qyQFe5KFQ1YWZwQnHXmNr3qDwCwSbJSymJ4SaCWeGXz1z1VN4kPtLveBbW2ysWL6X9FFY",
  "key43": "46bd8EEHdijBy2RH7aCMzo3ExDntjirpNLVDp5RnfZgwVq7tzKcUdmNLGjMGSxCoNaL1J9mcBSZudGg1iJ6V3oQT",
  "key44": "3hWZ6BbnnU3WjCwzQHXCujefM9HcVmNJWwqhSaAw3GPLQYczf7xsdCUEKwfe5kP8D5ERKVSMH2QCwXRwKriBBUBc",
  "key45": "3ynGWHnAEfYbdezea8adBoTKVTD7BfsLpFrr4HSkzPk3StBo5quSE3o7ZtKzh6f9mVJYyiUUvvFUqme1MrraLFte",
  "key46": "c4qYgwG3hGveJ9g61HNFGATXth31bPqMK34maESfcUqnTRUntu1UJ3bh1mFHjtSAhmZ8MUQrbjGEhNHLPTXBFBh",
  "key47": "4hM1ACvZ1jwT7uXq1ZzstER6QPgSxDFDa7Ymi6zVxxk7QJY4SpJJ6pBCPHD6LiSMbLMqAQUW3YJN91nzjcGgDBWq",
  "key48": "2GrN8eTS8Hsque9Mxm7zuyc1b2igt1VLKYW2tRK5e24UTA9uLwf4NhgBbsQEL3NFsEiKRxhorvvnQbrKD5XEwsEt",
  "key49": "57k4mcZXfoAAeZ9oWVZTKaReKJW5j4cxizZPGXHeGmnwb3PvbTN24iGN463bJMDy8atBEPCzt9d5zSxVEkZkFAwm"
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
