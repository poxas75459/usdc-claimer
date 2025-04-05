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
    "KqJa3hoDh5qm6AUvbXYFD92tK93DXUdvADT61WCQrMchLcxgWMkLeAfj6FKtcMDrv3knA1362VYKs3bV4NUnoTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37qVEzYVWYc9nu2pHsuNSsxDo5x5fcRE7mT7q4vZWEvoXnRcBxWsmStg845YNWhyD9HLVzQs8zqwM1QzeZCt2nTZ",
  "key1": "4W69SReXnLoqETVdaWoxgJHE2tWaw1ZxyVj3TChhLDy6u4hD1QwWve1TupNNQVKCWuYg3GnPnfDwFdmXP155enEZ",
  "key2": "TfqMZdk7kSKo9A9HUrRpgznjCo451sT5q6Fod85F41m5dj1cduUF3PjHhqBEJDkZNBbkvUFfMSW2KTp1jcPkPUH",
  "key3": "4VbEC6CEGtBcMihLoJ4wVmyo5U9QuxfQtMqKGsW4FRJZiTy42Qqm28DGzy9zbzJac1yifrssyVuMaWefviBp8hSF",
  "key4": "62EtQcaNqYoH46gNvV5MbXMvvPeEToESFjMzvDmNhEaW2PL3bdipHV4wDvbQgMetK23u8u7vkyYVtYQ9g45R7Foy",
  "key5": "3hQnde6r98xAzFxzxynaUL5FKEfEg2NWFaCyhxYpfnMaPurnptc9j5GPryzwwcHfs8X5fwCnThqryCQXiydCMJfe",
  "key6": "5v7VNwJ132J8yzGuvsNh5JNFxMRBFW9eBabKNRXev5PXRCa3CCnoes69EPi2jn8eWQXaBPkaqvN9u9ZjaciwscaD",
  "key7": "4h1eYKjiAf36Awt9RriLhjgdCbqyp4rw8zHHSuqmECGnbeThPaxKDDptsb9fC7HkKJW5uDCqnruaSaBcGqyujFjW",
  "key8": "fredp1qZE5U4USwaGRDdkEfqtzkWZ3HU32EHBapEYmA7pK3a5acB8RZ1H3cyVLWyVSar6w9yyB5wgM9sjgYRSVz",
  "key9": "2xXM7E1PaKVV6xEdP9xkvKDtFmcQYTjz1xKcdrQZ1hW8LtFZHjZ17bFjTPwVQXous2qCqWCvJY8N1C8r3SQFF2KP",
  "key10": "4sYkf6PaKHxHBHv2Ew3F7g31roxNhR5c2VEDxBGoSZPSD1MdsibUUtjYKBUB7bwwKQByq4k1hVcjZ5CYNVC4v2Ui",
  "key11": "53fMYzCMwdoPBNh881TFfBM2agcvVht7ZVqaqVkMJdodQpp1Fq2JRrkwjw1QoWrdVvVatQ74vGYSAB9Ss4EvAceJ",
  "key12": "2athVFVSAYjdzHaC5gzcgAr3aSc1EgnQymfseSFuE8EfhZ4Yuduyo6MkX222iNt3MvuKbTf5uKAYkTQpWqoEY3an",
  "key13": "4Ze4t2vVQC9NhXmFeMfWnkNFuRtZLmqF4PRxuYTn7kkkqjvvKDMBHHo6Z2FiPphP9gh3r833tbvHeEn5rgi5T4wJ",
  "key14": "33qjyvE4kDd9uyHSGmxiV3YmSurEFJTJtvSTqKpB6teDoE6pfGg7DNf8F3au8SERnLbaSSopSWNPtQY58A3zS5UU",
  "key15": "PHGNoJjBmZo8ua6znpB2aqDk3tu8Cvibxwono4imsbCX7WPvr9FGhYqZu198e9iPQQkuzuPfDUhEGGwsiYMd3RF",
  "key16": "4FQNHVG3QXGhzK7fDHXd619ewNCupTcNtUMbjSPY1wLx8mfa8pM273jLV1DH1iPAR44oxNwm9wCCEXtU5UxX7WJP",
  "key17": "4DCFm8ogpAPWH15diVBsE1Km2UN6DvoUJ1DqNc5fStUZHbtQwrCJHyuvuGSYtE2DiWxK3nKbz2CAbMrVRL85226V",
  "key18": "4mp99kHYJ3kMx38XRquKjMcdJjwqhrUEK2rmiZ6qYzsXPfLuppbFUE6Vk9nnMvBAMJPZE8F6roNaBgnCdfcpaEnC",
  "key19": "4tVxLrLXRCSYUott2ZQrdD9AnZbYobEY5D5WF6SELxvuUme8tBjvvgjDFWowXDKzvzdFF8VeT98Jf4HWzCvE2h8Z",
  "key20": "4XkhEaSgM1WGMCiNtPpgCsTcnousHYZXYJfcavcy3FiYCRtQtDB5eK45HkjK1eE6QKdPmHyrx5ynMKp9SZ78QWLY",
  "key21": "5sLGUxLZ1cnPrqsUnAuow3sCQbtN2uTJmDB5MDtqajEy5unfuZq9y9S32efSs8mtcVjj24cbiJZZERRwNnnXDn4R",
  "key22": "5SnoaWPQHknDAryz5bLP8b6nctH5kTFU2ZHgV5DcXmN6bAeTis7k4Qa5uLPXgdMPaMopZYR3MB4RQvVfYAznChb4",
  "key23": "vA6jM9F9C2y6Zp72YhziXCd6dxofXzfxHoakqQNzR4MPMvJFbB1tVxKhVzKHjG37gcawdfNDZ48yJAMJg6pEhSR",
  "key24": "4D2P7iAA74jULCmUZdh7S42XhzdB2gEwTJiFCBoZDvdNvj487j29SmMa75uxeSyLLPjatum6MM43yT4Zv7NkonJd",
  "key25": "61F68qbaqEX2wMXdwXbSCqPCKuWiirG25uM9fwo1deappYVhbBYxq1ZjRyUvWugovye3Snh35MnaxeeRTDms9w5G",
  "key26": "5tXicFfeP2EhN9TUZdKnHdcQCazVh33QnkS9pM32vbQnSNWAMkCNjz4FKVMjMZbtkBQ9hhYw4EJHZeHXWhfs4PtV",
  "key27": "w3zYLThaUXPmBxVw6q44dwY5b5gF5JwCQvhjjsDnyrVBqAG2tSdSTfhjkru4PrLL4EtAYeB2L4LuYFbdhdPSVef",
  "key28": "2uPaTr7pLzNrSMAxYLcBVGitkEb9goTRscqKSq1WK9kNZc19bd4wA5EU6kTL4SktFH8HBgbqcnJL3Es6zNHiW87u",
  "key29": "3ZguQnf83ZmbFskY7uaqyTDjNHPjcjmNjLDhti3GJjWp45JHNSsx4xNafkgzUP7bW1U7d6rAMUJ7DeCFV8aUfDNw",
  "key30": "4MqaNmWdSN4hk5DJMeVVrufjbGHoqBarwoTY7SvS9mZfMtha2sRmtsmZqqh2JdzU6mk2npqpnUQwJiQVUa4z6eRE",
  "key31": "4LREj1hwuMGh5PjgzjQMRGpP4QhwLgbbQRDDt7P2fcKY3N5Xk2w51cRGC7eyetjfRNmNxbnBtB7iwsUxR7KZNrC6",
  "key32": "iuUsM4x5u8WeeZggFQ5HbzRYbfFdgXYUq53NxAQb3BxcsYuMndNtFn4GbW6Ty38qd2DRD25NSvnzW7E6m3uAwyS",
  "key33": "5pKFLyR9xPbF79QF9MYM1AP5jLYtABWri5QjgostWtAvtey1Rarp2C7eDtPGCRzyfUFidGQ4RuJPYWAqM7rpy1g7",
  "key34": "4hJyb1hh5j9ZRq2HQrmt8WUfgCktRYhYE4U7RDoDD1Vc2YozbGuRxYcc2VXZzor1MWDywKkx8R6u15JVrHbopYDN"
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
