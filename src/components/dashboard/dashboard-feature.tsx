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
    "5Ne4aLi6GP5obZxWGscWGTaCtpZoF6M5H4oe6zWLq6VJkW1DdXKsfVbotij4d9wGQhByoUCU42cmMyGXDykJ3d9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTPeKFYHxraebAZ7DogkEQhybZjNYbiBYLJv1ym7yod3uTr2UjneqRAJgBZDWNTWDsvDnSN2SnTb1bkUhDF2S6b",
  "key1": "4DECb1zaE9gXbYh66eugbbyp3E61VoVUdHBP4aFxwJTecW9vRA3StCfQrQ8Zzxa2rLHwQ8Z3KfkCNrq2g2zx9Qvj",
  "key2": "3njqTTLgkuUQmDT38P9ADvAXaKnGHeT7vxG62D7whjDWpWaVSMLVRRPb7DL8X7yQtK6UhRxfTcHQJBUyFPTKF5eh",
  "key3": "4wW5thhimkovRH8feypsfbfjrN2Y3seMfRsx9qmvDifRPF1L4Mtomjwnt1EqtZVQu6pziBP4K4NvsxTraw3a9WXD",
  "key4": "413doJA7ijK4qC9dJZrQ22o8ud95ocU3nR6He93C7tNY2rdgQABUTGmajxeraRWXijY6f2LosYVXhPLeY8C7CK6p",
  "key5": "62u25KXpNcxDYayh5rNVPgdyEs44ovS61Kn1THbpV8iiVgaBjruad23HL8faJyXzFqqhouqNWJEND6iwWmsmvGP9",
  "key6": "trZXL11kgjajBYr2G1KkDBLpdngfHxngR23tmG6yPCJ3ZZo3Dc4FtRAhtvoXRMzt811QM9bz6jXhAg3P6c3uNSV",
  "key7": "2TUnn8NgCJeF1uwUqSd64qf1HokHtUqQa2by9yUu7Mf5gpyEdB3BtCt8eP9GxdBA8LpaSHPcPjfgTgvWMcsDsT63",
  "key8": "2LFP5r82DEFNCafZyLZBW5p5UqhD2ouYteeggfjSREZUyuGo1kxwy2YZLDyjXF5hLAzGVssA5VGKUksAiQjkXMxK",
  "key9": "3t4GNRB449tFWMm6c7FJ8Sf4wkWPacMBVzSEGBBvAYtJFys3pxaxi1JqZojLbnG1EGbCNz2SCWMMH7T2xc6mSPxX",
  "key10": "Y8TLzB7syvYNwghmGGmRK4u4L5yhnvv8cVJLckZDdog8k7hRFDwnpHvU5WhPw6NSxjux9bupka4xE34QM1ekFzA",
  "key11": "355JoumT2Qc9sU9uJKJB6WULetvDFV7p8utoT3hzsaLTtNuNXSd8BtRQ8qjn9dSh3FY55fGQhU79t2B3xj3dp19g",
  "key12": "3ptikJWKgBiGVBoYb8ACXim8eQQL85UG27dtfc44gy1Cv622mNy5XLx1TBLEgZUE3pyEBrcFgf43G2WogaWv1ydL",
  "key13": "4QYGfysWR9hEhuC7AThSE1Sj8LAHMCcwsQHQZgchBP2G5QLJmnc7XG2T2VSsz9FxEuQi7QsYGNDTvbzqzwpGrWWu",
  "key14": "2ijC8krcxUBquUM8HLQhtxY8rzrRwCtMWUSZU26gsqrScEMH9M8yLbE9tSGZRMkHqborFQwNDzcFgTDNiBLj1fk8",
  "key15": "66ZZn7mxHXGGxwoSu6PmnYrTxvbFU3383td1V8J7QTvjjAtkjZ65t8J3neFsG8UkqiM5cTst9Gp2hZLjczaqjKyo",
  "key16": "5evVoU2bAHhn89dbSKJxJ2PfrrtcdHACLGKoy21N2jNkTrVTRXf47c5gMEC7SVXGDhFyqnR2sVkYfrmzAsPre8wd",
  "key17": "5WBHwVQzAmrnWC3pfwSpAsUAb2jqhBC2cWJr1JEu2JEVEcVi7Essk5BmpgkD1TwScz5ah1Chxf4zqqF93i9gHN3R",
  "key18": "3S7CnVMR62WqeLvJDM61GvbuD4Updr8FUF1tqhakQGYnpF6XAS7MjCXcBEoZh6JVYksuAX6ZN4DkFqhTTQv9Sz6V",
  "key19": "BNTNuqYRKpKWgVDZMi8FriY2gQVjrZfHV27YWk6xgQMaUdjVqRw48788BTEthcHExDZMhHECHgi892vk4p4gtsN",
  "key20": "59aQ1mfVc857VYKwz1dr4q5ynkDwBghnS1qJ2h8pd1aYHJmmX4hv5LJLA4SkPLnopvD4jTRkkaCvGMXKL4d8Kn5B",
  "key21": "7RSavfdFtEJkmvvvpLJArRvJbh1WtfF6zHy3jbbw1T5VXVaqDJ9sjP7sRPmMmNiN6r1epgXGQVP1cdFYXNmU8y8",
  "key22": "1TEv4RjfvDiywgusuDykf2GRagH73zWR856ZZwZsHvWpsBNGbMofJMHsWSkaxxG5oYKBdfGsei7Tk53pdxuxJzU",
  "key23": "tMaTDtKJ8mx7A9fQpGtZUHuarpu1a1ajX7V83E2wd3kD5LaUtMyBLUAdf3AyEPbpdTwFyy2wiHZkQGfGtnwxJrm",
  "key24": "4kNz1mZnrtUZ9pPGS8SeJtsJcNwDmVpSJwzGh1EgphBdVw2RCzifyM7dWXZ6LqjpVQ53wdLyvLGUezyZ8GgNUru9",
  "key25": "5RSpKRCb1CdCLjoJ8biSMadDaYhdCWi9SLkwDhA9bwu3XnrNDPtEQ9SjgHJvYoRDphCckJTbPfSzAHgwHcHebmWQ",
  "key26": "Mq7zQRwQs7u5i2zrsiqgFPDDzKucs877DjesuNAyf1qoCFKjkorjknJsPrupeFnLDUT2JB3oGXJgdstpHdczgQn",
  "key27": "fkbnRFH8uCFp8GEyQc8HWkKAmaiuPv1qfzcviik9YJqAeJRg5kjcQPqe93MruoofNBLZ19s3bgWrUEWzjoUoQ7g",
  "key28": "5zUQr2pCSr1zVTa1avwVkXZQgdmMN68XZ3pL9cp1fYTWvaqYWcY5Fk6YWwvPH1Wu7jEViUwsWLeF6Cnow2J6BJmJ",
  "key29": "5AiCToMVhVXuBTh1MggKy3BpRcQWbDdPKZbyLNQPcLx58SjV3tF1KQ9j8punvH44gc9YyQtW2XkZu43yhg4gmYXk",
  "key30": "4QXfVXC1Gm6RK8fiV8pbPCaKi6VTLmyNrUgW5RKdjThWmopcUyzM4ZXJFmX16XUw3fXxSeyJGWGVNWbUyWegqoKi",
  "key31": "5SJhFGC1xUT5pEobhnxHDWuMf4HLS1KfUf9JxpkrFqMXPy7qh31iaCbgKbg6cR7h7DXzxRhqAXdhWfBvwwbU2jj7",
  "key32": "5byRcbvEFtCBjU7bEZzBaYXAixp6Ggk2mhyHFh94A1MGR5ca9uNXPZs6ifEoXHoyEX8D252ryivwjCdiJmc5id2v",
  "key33": "44qYzVtrxdKU6SJVTVFCzhdiCzqXHR3bfEMmpodEq9fjeB1tm35q8SYJHEyz4VMUcs5PzgHrqnboArK5SXebfAR2",
  "key34": "55gpvabKp7zNdQYW4shQBsP2Pqpwv9wS9L1Q6KQXkueuq7g75htNERmRfFqczuPh3f3VzGcNfurrxd1SK5kLkzht",
  "key35": "2bXx4R17A51F6DA5tENKHycsdPFRZn7Bi8ceDQRhbUZH52JFyqjQxcLWNFxLKexdppoozf9gUCVyEMGpTdNtK3b2",
  "key36": "4iJh6HyFL4MugCBihwtkzp8avxkSX1VQ5M1fJvn1bHwdC58uc4AmvKkCadLBDiZvj8oddhFe8Ecme3VDFdXYxiGa",
  "key37": "2z5jsSmhz2ByC5KhUoL41Som5GLeAXGi8gPNP5mSZFHPGqcZ81nqTwbGwHtNdXDVwG3m3Vs7pKUi6YTZoBYuEwrL",
  "key38": "tDRZCE2qw7uSGnpJabZN3K4HtASNGZjC42qymSKUeRHHYvesfs1wZS6ss4dosMFkuwVRiLDZN6F91Un1CghYZTR",
  "key39": "4JfMzxteRTt1KJET2WNYpabaoDjyxBNxRMMVFehK1ywwG9nZJHArsQujZHgK14mThde7hxnyegstsYHnZwtgC1cP",
  "key40": "3SbL6GoG4kzM6kffc7aEwhRxijMT3tSSxCsAuBavk7z7CraFWXX6BXpLiYdS9BuNagoADbSw7c4GKJqC7vBpaQ12",
  "key41": "tWQ5XKypseh4g1FBhWYoiGSVmDJogDwA9QBuEb3eTG3Ec6kMKjq1PvrU8QvnKAtGmnKxdjRWpYt7YfqWzEJKW6A",
  "key42": "2an8ARXLzLPwdUX9wGnC1Bfdt7mZP5prtySr88F7DXj8Xug6Cb6kbvU23hK2z5gr8KjjQz4YQhq9GZPExv87BtyK",
  "key43": "2ZJafDPqJCgSR1aZibX1XSYCWSxEUsGGtGQCcLt5TdfPcAqhvizEiVQbpAGgF3n7QKgypKQpDh2KQGDtmZ8WUxkB",
  "key44": "32J3h4EGKHwzXA5Z6BdfPBZMMC4JWNBhm5eW99Bo6UQ4w9R5DHPJd12BWqrySneXzcK4Y1X56KXCSiUzsUwJ7YiJ",
  "key45": "5A2Kz9q9AgiEk8hJPZrb28zMCKoLW7ULzMdpLFkxqNLmujCpPGHnhsr19Qg3QbUBkWNgvUJ1BnjFTZT5YD1n1chg",
  "key46": "55p87vhXAg9GwUgoEQ3RtbehWNmbS3QyGyb6cernAuTvoBpeKDhXebTc33ePazPnfLzAE5VPPfwpRv6Zbq1nsd2r"
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
