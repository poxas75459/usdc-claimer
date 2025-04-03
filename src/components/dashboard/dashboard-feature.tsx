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
    "2FWhJr6vUMGnkRD65AZW3xdn8VDk84dw7MhoXbF5Lu7ruyx3QVtPh8mdinZxvHiLt2tu9u1iN7CK4RXntLd7Rorc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2snyJq1aL7qmsGMSExqLLrD1HU3jmr9k5AJFA8PMSn22UAeWHGUPDFbaaLFuaRXeqQrbMKYruxvmSbp7VJez4u2n",
  "key1": "Qy3MpWJub8iZ2DdhHcQX4y85xLv4AERns3WneiFV4vn423x2uF1bpNYErH7Wey8iTQkBxZWQt8h7pGUrS4WwfHQ",
  "key2": "4ZEfAbsfuBbw1XCsMRpwgZwEzaihWAeE3iAQuotSnMVSL5E5eHp5FkKP687vcDYDP98SLVEvVaXL53p74gzpECPy",
  "key3": "ubxBv14TCX3o6JMHVdPaKYmodjNr8TgxLdkprUnd4AAfQ54eLuD2WNgP5VjCnDzdU9fnX2j6sQnChsreSnVY3VN",
  "key4": "2paSBdzWhCDZncbQoGp8dNZEFXqrXVW6YUjB3WGWaXo4QxQHKDiwNie1Znowmr4aT7KDWHPJRcZ79csnuD9mL6ea",
  "key5": "5ZAZprYyij2yPmahvKVdTskmQV7EZYfsRBeW8WuYqmFG6vKvAYbP4QAXt8m5nScbFAvTvT5WPJMEhHaTNxyknt8k",
  "key6": "5SoeJfNcjNQYmUkNaXb7R6LYPYc6KEouZ2H8R7Knz8NQpqijhhWfxjkSyathaW5yWMvpSiL5xJSY6HTZBqfXaXiS",
  "key7": "2VHzASHS4VsMxdR6pALJiszKJAaHH59KMbxWGHKGuAbpg9xriya4nDh62Sq9XfMRLoXL69rMrLJCigmekpjsi1AB",
  "key8": "3x4z1q58TCeBttpT3DDmHLPk1dB6ims2bbmQrBfpTcqoJjhK8Xawx7PvChQ2Hv7hQiEUzxYmsVF3P5YajeLtDbBF",
  "key9": "64snnrQYhwhQMVaK68cGwXjTDYeczMK9KpChbLvVc7LmtPwjoC7jMjBFcEqZh5pF1DWLvUdsQRhcXCLNp3MMT6q5",
  "key10": "2TA26KCLZGpAqHHJknWAvX72bFgQ9JegiscyxSYYwbYPH9dS9k2ks5UbDyFe4D13nwqkre4CiUgHDRPhVAFZ3Nu9",
  "key11": "5cNzQJXEjhBAeN6cPKfF7cphH783qdKdpFPwTnTyA1WtWwqkQafHs6LwGoDVewFbm6KHPGPpwCjc3HugMK37teef",
  "key12": "66xG74Vsv7uMPwTKvH4hXYQAiuS8nHAuLLs7ypCBK3T2KGiiGdEFpQ8RDaHYa9KsgZaACAgNhJ1JYiTzisQ6m6eA",
  "key13": "rSGo1P3jQbxYXZxVpXAcM9KBMyzUBCDDJpZK7Ryw8c8HA4bUXoLA7q2vwY6gRfWv4iAdRE3S6NPi3CtbnqQaQCn",
  "key14": "CCxvmVzps9AdCQRbEK1rivN8m1Tfj4oTHn6zSFgdzmpcfyBYg76vDKcKpymj9sUSPCWmJ1dUiwMBJJQjfH3ZmdQ",
  "key15": "32XqHqyeStusxgfsGq8VFJX1AAAi8R51xZa5F2vkERvnr8DPkR8ynRTJ6yDmkYD4WuWoXi7Qk8hrF9GyEfq7SU1h",
  "key16": "29fXAkpHSJwduRRwPXJN5eEUC6AWCD28FL3EnJkrNcpJsBX6JyPjiHpK5ULbuk9xaGcokfDUHyCZeYgK4GaHTPCP",
  "key17": "cuTv5KthvYPoy2rCKD8e4x3GnsZV7oCnmwqfSY1t44bRo4KJRQd1uzXrZiXJrqSRfnsk5768Pop12VFmoMCXhmR",
  "key18": "4Jc2mXi7NUPJiTxaajbSmVLF4WEQmFN1cNXnKRRUPA2wkgteokPdq3bsWqEmDijzqf4Zf5Pu266KAoVgqzvzd5FM",
  "key19": "3eGMXoAXiKueLAShMGjmNVvWVfHPiXy83bxo7tk3ugUARThwz3WA1zRRHLH7jM8zU6CgrH1gqod9tZzw4k36nPTy",
  "key20": "wQKNXhoNqSyttyurEjmcv725m27PPwfP8Y1zJszBboeDiMPvv9oiCKMh6x1gb3Xyu2KG4QfsgNoN4B1J8ieFn54",
  "key21": "26cYvxfWiE7wghMj2jM6tB2oVpowxv13XrY3wTPPuGeVoZR7qYD85qoGCY3gketekYumKCcgXgVWiewpU8LKncrG",
  "key22": "66xFTbRzrp2VQZnKMnFdKhCEWsa7wWRbsLQ5QAJXsmwfSW6FGhvv4K1MySk2qrpqcDVbz2cLx7DsKbL7Quobvmid",
  "key23": "2xAbzqhoPZXpBzghxEHorKqcXpEiArKK7bwrdbLD759mG7yT8EsF6oTe77hMRXMc8R7qExpdfHvYEsK8KsFmuctV",
  "key24": "4Sz9VGQappXeuN2V4JeHBP5hCVnV99CnN4kLBZ8z4f8yZP5htxmQKXD8DiVTxJMo6jiANY2fDLyehTpwrn2afvLE",
  "key25": "5CjGguzarEBbaGpZtTbJoKs4oLzHcwpPr45CEtNGvWEEbfbdMKBC2mF8FZLPg15v2Pk9t3CNQzCyZZGEp6tdZ4Gr",
  "key26": "3immd8R8Zgm2ap6qU1mm3ZdmXCWv5F3W6n44iodsa9zn1B5nGeJsaQftViAhyWhvjycTMA3NY2yzv6HbvTN8MQ2d",
  "key27": "4fs8rDVF6esL1ZBKYaHLJgqTski8GCfjYoT8bQ9wSUVgNSVLd5sHk4CdUuUXYF74hrorDf3e3fETCPkCzF97SCU6",
  "key28": "4DqhmyFQYYD3t2EoWhprDfvq6i7ZR5maHjG5sMyc171yyRH1npGBwmnAWJNb7G7HAhFsdswf7SVUZwYw7GUYSf7Q",
  "key29": "2t1aDuGeRq7p4J3E11UfDY1MAjjiArLQWNYktD5zURWRTZ6sWbYV9aSJsu6dzMDyBfJSmDEMTa7CYDpbv5Z7CGYS",
  "key30": "4HPn8U5tpVEd313Li65bDPw9LN2geZUYehBZuwQGLjPoaE2cRQ1PKdMvpLFqZ9p2YjE6pvTY5rcb2F3DZvHPD44n",
  "key31": "3P3Z6teLoBboED4vhbxW4QgneEF98Z1MmJurvDEcYV9KV8UGgEGpcnSthAtd9hVyaLcSUPDvNRXZfJ7W8jquEksq",
  "key32": "5HHsMRFyfPS4wALkEkER89fRQDi1EooFiCFoGfEN9t6dPiAtioTA8Lf66Q6k99gDRveeG1cr4UA6vzaHWCEfTb9B",
  "key33": "CMeBRsQYz6kuEiL5HhxaaZr8PvjtuctixsGmqwCr5SjenKiUL3EbThJAqVDLcBfaLyZwBXJ8i7qhoRGay2wGd7X",
  "key34": "5vMnk6sWgA1dCVKfaGiYEDBePjCayqswU9z4powD1Ep9mHcYJoajGdT5rHbkCs7KxFVzEFqMkF8wh3z6CbW9BJy8",
  "key35": "2Vs4ZjXMWBuE31MN4Sz9aA5Zj6riKaHRp1L1xVAowAdfSUgHbCPRi8u7CWt2ctgAE1X3kg2HNiN2NB2tSUqiSkRy",
  "key36": "2vk6zWVz3BTu693oQeSXJrhcXaCpZDiAj5WkYNEEJVv3m585f3xE38gZhUMQ35qLoeu9EJUADrwA471Wgff8Qus6",
  "key37": "281zLJV5o2LVTvp6tnELEco8DBgCFGMio55f5U6iQZyrMpVzow7ztHQtzYoUCoixwfXaXhTM5cAXF5uL7PkPK4m9",
  "key38": "6ibDM6d4LmZR1ufKjqDLZYizYYgR9tKS6iC4CDYAFdfr4kJSia8d4PYVPQrMbD6GazCxx3NKSy7Yq6igwwU5R7Z",
  "key39": "5BdbmSzozx1qFLJoRzhw1jgnFRuh6tw5NppNqRNXY8Wuwh7AiSDJ4BiMJL9yaiGxJdySBJwyX5BcBUnb1xg8BErk",
  "key40": "4HRhVjcxCSu2kDqZfzsMssSijAQQsWPz1Bk4t9ciPpEVAw4qvWrWkyCbsGQu2LfYQ9yzkruvJC9P6EH9vM23mzs",
  "key41": "3fAnGkyK2D5XneNFTaPaaC31ygmUAY5nNAooRwWRCtb4GzTEbMtBuLSEwGABhkBU2gvUb9PpDxUzEVVAt5BocZtN",
  "key42": "3Y4rF3ofXkoba22X8J2pceiJApMmrNgL2T8iQidx4r5AWpRvSgdn6wR77Qbq778cUL4W8tuuUnPp5Zy33tKSZ6Su",
  "key43": "2rGBywgwG3grZv8Eniiq3wFq6HqfMsYdnzc2mszSufF3Z4pTxAE21n5kX66KdmmYycM3QJx27NEqXRdowD2L55NB",
  "key44": "4eJQqQHQMztLQD5AKmmaMzfptRoDMii2HCWxQHxHTczSNsU2eKgyHbgHWfsQFZBRg296WUJJ7MbuLGDbxUf3GJZW",
  "key45": "5Ypdq6hWqC6HPtV13GA2bJc7MEev6xvy3iVo2Rxp2zF6gxfgiqyn7LCEwPqgV6ztBWhMvRDV9sn8jiBE6LNg2AMk",
  "key46": "5dTub2FCtbGNXEf8CQXENokRhHRJE2ViUNKKQ2rXDwX5izrXuVjVhJ6H6bVkNEGr4tyMqYtohsgNDbz28p4FW8vA"
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
