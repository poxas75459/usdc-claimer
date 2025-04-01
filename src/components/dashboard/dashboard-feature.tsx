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
    "2C7G4YXmfToTUg7jz8qWybvPw7BUDU9JQ4X3kRXH8eP6RR7KJ4ZCdkNSkPKt1Yh5T2s17txJELHMzeuhFds2M92X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PL4JZXLVqzUfUCAdfFRLGcDAT8QAcTgeQJduyL1e4CX48HnZQL7sPcpdNAx2AKDxTcywmX5r6eFurDSVRv7qFan",
  "key1": "5sqobjdBvX5z45etK3fFn25rnso6cCtDoybKbgoEGvev3aECw18jggomWyP1b1TxHpqNTYZWqYq7wh36NzJJ3gqY",
  "key2": "66n66ZLAg9Lon6YnGJrH7LhwfmmMMPQ1BfidbypFimEKNh3hyNApFFr2KorgvumprzxtQr4xTWcrpHhs7gXmf4no",
  "key3": "gxeYk6HiKygZziK1rDEvh1d7RTzR7oMSq16ZzqEbSMo6XduQv2KFJVkBrwnPtcJyxHEgnbirfYHsyVUC88dWafN",
  "key4": "5XxKodtYik6TQH49Hjtby4FZWpQ8hfQh93A9rwYiBAZdugZxxB3fkAd4uyiw1UCGSMpr7Uut8xDdgRA3nDsBKsS1",
  "key5": "3dmkg71yMQw1HSDfu2rLnirBqA57QiMq3Vu97GH9PyEqZwcXYiVqvgkzjbWVTHvMTnBh7yKnGRmtGbR18ahoAu6Z",
  "key6": "4iFytyF5wDXHP2iBBUmAQAi1KnWLLBxiwwpw8k1CRQ58myQAveFCpjgN29of27EEA2roq2HJjCRu7vsZzYy1gfkX",
  "key7": "5Vt6zFX5ETJ3MMwghLPXwNXUTWvgj2seDGHLymuMkVGAXaS4x7RDHvS7rGBwhdYgk3eDzr8gtJ2TPna7gh9td6Q1",
  "key8": "44Say4bazcrrZqVYkZeQXvF6bV96AqysdDJJRw2Tgeuv3bJf4iUKJeoJ5SULnrbnneqkoW37xdGfcjDgWE4uw9q7",
  "key9": "23KGK9SwgCTiSsW2nFC1RfRCUJ2pNUDU7XyfzvLzYh4EJbATdo4uJMj7hLdMaRvB8xsWc9PWKwsdf3VDmF43ZpjN",
  "key10": "4zW3BKvnfHiz4VNVp1L85DFj9zEXYdidy8rJWJmb1cpWGQiUqu8z3EPTmRFc7uPm9dLG72BDHvt7jTDHoiXLbXMa",
  "key11": "4fo7HaQSUMZKsWegL4Z9t9Q6fiQqfT6w3E1uBkFR8Fn4dSkzaEPqwBb9wF5qzkY4QwXXf9otuFtfQL3GvFCoKF8X",
  "key12": "4KFWvY6vdVn5P8PshbMdcfdAwnL2NDrzurXcyB736g6iGUys6s3Ny3QC9vpceKRy2MNmm3i8b3cyqwE1yo3asPc7",
  "key13": "WaxWHLR3uCKHHYg6VnrpjSkjKa2uXR4jZGStmFJDZRcFj2bmb6FrfGLmpKx8gt4LSQY459QdUjjekHDCXDRmSTb",
  "key14": "4jiGWF7V2sNihT6YYiPQVHMhmoh4WMvqWMkzyD2VstfpiKDeDeN73WmDikqeqmj5YiUym8uacqcGXkPzUtw11j4y",
  "key15": "47XPEzmrmQgp4GkpBkVBtCU3HiWgTcEN9LyfQ4Xjrwx3d8ZfJXmAR62GpybEZAsc4i8ChWkAdrF2PUtVHKSZnFgJ",
  "key16": "5X9Dorc4DoxLRrsCSvtycFtZUPGti3XpHDXKz9tZZkiLRk6AXxcv5H1pDYza5AkA9baM456i7hAHgwQTZKeNT3A8",
  "key17": "JSeJiUjfymTPFJByzpGjnCXmD76KxXbJhLpqi4s2EDNYwyd6LGmqj9xL5YVw1sowoUfVQfso2KHuQjEfJCzA6f6",
  "key18": "r8HpUbBcnNDM7QUG9S8BNvEhEb2fcksFnXyNUSCPASVRHQvAMenu5QrnvXB9CztheRhCVQD7VdQ4ZeEEuqG6UeJ",
  "key19": "4QM1njpJWpfAc1QQcJyiwzaYnpkg9eXGy4G66477zMNAwt6SujEkLNQNZFp7kdkU4RVtTFC2Ha6H4wmxdHeioBTX",
  "key20": "4EoikAN58pgzJbCXGHw8BMdE7but1hbczzGE8pmhFEz691krmwFD9fZbwuUPqChMGLhzZ55GMjqcsJTb1cPYysVD",
  "key21": "3QrU5UNar48ahw5o68Ej5xfQ9fDDwYbxmzDt3rPF8PzViqNidt9HeKwUyNgL7xwVhKL9cCYADhyjbRqMFFH8x3Xj",
  "key22": "qoSjCQPrNaPNgK8Cg1eoydTEDAxvkfUd3HYqbg4Jm48xbaAPLq8N5meF5fczJTEBodVpTo496UR1yB55vtM23BH",
  "key23": "3oK6b5bSWyFC4Wk9qGKF1aNcEABcgzwK3XTUeXdwTJNjRVKuGSQgXXrDoCstJgFC1r6JUYXCSBXm7GaE7fwHdePX",
  "key24": "5tX6484W3pEyAhK3jcvxkQzDufbR9SZmyibNcSXBCTFFEkJbGaEkrQu1f9LW75uoPit4vBd93n4Nsjcssrv3GwMq",
  "key25": "4S2R9YHRh3YAorA1stinRHbL9aUmoKGyKrrtj2wBZJj1cKcABmJG3ALmQjr8YScm5oDQGVuLbUGYY3LxZRs5k7Ub",
  "key26": "5uao8mwHRHCnzHPsos9xGmKZgUJLwZdfBB9P64Gpyggs3K3yqqi1nuj8qq7Xss2yxfG8ajsZP8AXMrFajDkTi89H",
  "key27": "5bQLQULfDZcDaSh69my9TD8SATX6gCu6P4iYo5qKzwwFAJUM6xVWi4WJ8QvSPEyHhdCpyqcgHFWLkR6PggrJZWFV",
  "key28": "GaDsHYf6wEJNBHXZvfhEdiqaTkoQvAjXzuXzZEnfG77krTEzcfYSnjCRMYH6J7TCPWwx5p9wUZxeaP8mKZH612K",
  "key29": "UpEjNGPn5Xp2McRX6rSuPioQLKsEz378WWmGLf6zGQ9fEUAfy58RhTD29Ygt14ksQazN6AURXhkbPSJbovyiZcy",
  "key30": "3h3H3Qfv7Zdx4msrbhvsv6a8NakfPJMJ7idKh5eazQRRrSGc4DX4imMyWUitPLPJ9Y1nHybmxfR2nbwFFjArLLSr",
  "key31": "2ELqFdXyJB23SB33aCSygXcEaF4v5DUVKiKQrggxYkEitQSj6krQSgNgkhenoftZ8mXBMTVjjASsg7vKDs9Dfiqu",
  "key32": "66sjcmhmmf8wiBASbn5h1xRzYjrggScowp5ow9wmLXFfiVAqkuKb19ymUMYRdXwqBtEGYrFaJS6bzH4m17ER7pwp",
  "key33": "nsf6oTNRz7EJNWs5yyCX7CHnM2S2nDEWmu8kVhosgBuPGniEH11Kz6zYR1kdP6YCX6Fo1mts2ga5AfVLUMMD4r5",
  "key34": "2r7KTAbFpo58ABuQ2vEtqogxSoejy7kdhAHMMt4kL7yKBYgniGTAfB4wyZFCCixNNgB2qSCyq47UASnSHBjce2oY",
  "key35": "4npFFaFxAF83riJPZtoKauQZqckEQ1JuKXJJfSS5RGE18woQq62QSp7PmBmC35USsy4cam9MgCRCCNZB3eRdSEsD",
  "key36": "4xtaH6kaYwmeE2uxpD1YHFLbjUjCZYQFbSanKB5TK5n7uvKSxVpgxo2rEE1qqgBfE2f5Y4wZU4uPmN3wBkzEAziT",
  "key37": "cVWwtM16uASo1eqgSeZvgszZv4KqHSEBEf4wPytZEYtAwhS9ncpEj4zLxdoEsCTa6GvfxfwvaEfKSksPKrorBV3",
  "key38": "3JZWadqe9UBh8N8bB8vTYUJpTWGaiNL5mA9axmkGc9P9bTuFoubix6JMcPJFnLiWfKNZa5GP3tUAamZ3EsnkBGEn",
  "key39": "4fVUgPqYxcbasw2M6LJ1ztmKma7gbHJfoYUC71LPGsRT4A9v9xqYmJKriUv63eQHKJUXVGqnYQnL33qbpsZ4vXRX",
  "key40": "31DJ3jqwQ9Jcuoptyjh1mPvcjcikERuUJxqUEnjDCfkMkXKT7f4ZAXmbL46tHkaE1iEpUwWaMEoCRtXC9ZJ1gfcL"
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
