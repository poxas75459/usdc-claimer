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
    "3zR95f53cbBASBTq3PeBj5iJQ8DP1HKeXyr78yW3cNrjZKTmTTy3oMFAZh1LBKuGN83zYqMUggaYUDSak5zGuWYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gvW53QR7we8isihHQ2cXif3KBGvkg8jibQMSEDvUsLWrBJU3EzSZ3gSYi8aE61mm9oppLQXvXBHBEqpTaysxH9h",
  "key1": "5DF5QaEs41cHgjCDumdBNPpBquSYuMrx5K5eJwj8pfXYEUodsh7BqayF8BYdrhYc3GuATu1yps4W6Yvhseof2oir",
  "key2": "5mNfd7VoTVMGgMMvsRvap9foYDmjbYLUUCJE6TAkrL3y3ARQjpEBQkMKg5ZSvBXTokU1ke1rS1MuYZesiwdjhMNq",
  "key3": "29YN2jA6JWbuovfhbx9HYM8i5n1iBznkV1wkVdydG2q3mrieKjZ8Mr9s6h529DpH9m6DVhmtnpSUW3tJWZZT3MxH",
  "key4": "5tXuG4tQQKmttFAEdC7uyL8MTnYyLA4aaYwdgDUweB4f5XiWBYrYoXnPJ16aSbvaj66k4usaZW4Ktc7iGgDZ9Wcb",
  "key5": "p71DthXVXhCyxtd8C6J3JxnKafw98nbwvioYBk7GP4ruR1UruMv3ViXccg89wTAf5UrAwTkzchk7VSpHxnXRtPQ",
  "key6": "64vhwbQAvNrFxn5gycbsyNgd8c25caFn99hwWnnbkEfss6HxD1mCmu5954HQM7qQuXtfY3CkBWg7gyEFDwiJNPcx",
  "key7": "3crrdHyd8APtkA6P9U3cG9g99yLpmhZA2jg3tyzzLbTZwYFbD1WnFZbsbNdkmd9vJRj9wdMmRQ1pWCjFhahcyVzE",
  "key8": "5pePt84e1PzoDjg7ngVqNg4o2VcedAGc8cTaHBEy55YZcKP5soJ48NhR5dPBup4sKvYCwbsc2VWxiz81JD1QMDcc",
  "key9": "2jZKeVEuwLFCTWjgbp8KbG7c3nLTMSiK8LpL1JgByNaH5exQa7uW8iBDNN7i7ro924L5rTw8bwYVtftxesZiarZe",
  "key10": "49q88FrBpZYuezqaoGM9T6eunuoRHLZGYkcKUirz6rDsDSNpKQ2nrxHWDVJFhGVH1SVztGDD9J5BWgHNpehm1PMh",
  "key11": "63mXAsYXcEsgg79kunsM68VPwxCCTFotwUdREtttp6HcRdSaDTLiv6NmyHjWn1HYyw2ci2L2EfDxHKw3wUfCL2Zn",
  "key12": "dePsyPmxqkZwkyvgQfFKgHg85wzhipJPBEFcgX2yAXfaoHtiq4Ycx2UBy83Jo8TuVK444vjtQqv4xmjfZwtymnh",
  "key13": "5C51wXjnFmAKBef5awyvNiFLp1TmEf93qG8tSzwB4ZvBK3hegv6Kay7cG7gFYEbar5jp4FQNKe7eh1ntw9yrz564",
  "key14": "3i1rCXYDATy2BKgET2MT6dYqDsQwdSytSe2yqSDVwC51r9D2nYD5fuPnxc5BmfHnu4ETo6cjRXsnoDKuCbDbi41A",
  "key15": "yZiyrNfszzdo164W4b6qKEz7p84evsofuyNBA1qZLPsu6RNVPFDJmNxkbYZXGiRXTi5W7KHbsYUq3NXnPFt5PKt",
  "key16": "4Jwm7WHiF6eRC2kPo7fUz4kHKusxKXH88kCJNWdSDPEGyZqhyxtvMab5GsXghgf1nKVXJjqg7eYiSmgMZusict77",
  "key17": "G6nJt4Nv9gYVH8gHvjDwe4PpzUg3hr1vrQSzY9ofpsFrCNYMxsoYmCV4j1qtMBe8ioydccYpotdL1AMUVH9M6C9",
  "key18": "2oHihNw2n9UnzS4fymZT7qHM8nGpBbyMncdDVbG4FkTUX9a4BUHQBpGZMe2YfZ8WsKKiXpHTN1NhzPK8Pwdc4ghX",
  "key19": "443YgnPbAcwxdr77rK2HDMz6ZWQJtHtGr8TdkxnA3hwJf5eVgnUuJaW7smwQnE9Y2gjefVvQ3gUsdAYRsaSL66th",
  "key20": "4nGnyYBv96arEcNZsPR42hUFrgd37pa4BF4z31V7LwcQgradMmQGuXbYm3TE7Z5q6Bb9iGvbN2F6Fw7eNMgB5WXQ",
  "key21": "4CgXJarR1NpF6j7MyrgKx2sM83DUARZEPsxiDiUx7WThJcW9gMN8LvnKDReUUqeTxznxESaoDAVC9ifrhXqKfLHT",
  "key22": "4MKv5VbRNL7f25VJJrYz8yzYJzznSnuiFo7VZqPu2ghB2FvNsyTy2jNgnQ96Me1pdhE37Q5jt6vZhz6z7B1n4MPr",
  "key23": "21L4uNtcMMN3fPfT7xLux23nmzNhqK5C8ijAeFacKizNGgLFVTeePXmJjMkEqvpLq67EqibEyLNiVcJEZ126dCBP",
  "key24": "3z2zd75P1NprdH71Xnu8czJn5ccj2c6H99Z6KgAtGaNCp4xBssprJYyXdyMjUP2aV2ai2WnRDdg8eGnxBZCWVZuh",
  "key25": "2aeePhWzhUiHYaj1a5tY17hbfgt4VQis7RgrpNtiusGXANbU2RRABN5LTFJKM5N4kzaHVGggKPqEuAYcva9eQXPB",
  "key26": "da5k87mUZLyGtmbzu98XaJ2n3SyyxpW2Hv6riUKdnuLt9ZrQs1MbVLFdQsSUNukbKmFjdk88heTEcA8owus3Fyx",
  "key27": "4yXUwPBnTUnf64xvFTC7NLYt9QkuPHGgMjBsbwinBudAn8tyDpV8PUXFye3zbob1tn7YF296ZNmZsuikA9bBSRRv",
  "key28": "5mx1hJ83s2RHN5jCQrmVedrSpFAgHGMLQNhHtvX4QwGsVzDEMp5XvzoQbqock7ZkyryenS1Ugj768itoLvA91QS5",
  "key29": "423EisxQz55dLejp4YyBMQBxTqFmPBwnrY8EoW9Er4CJnrNwQRpWfwFFnxB7o1racfECxPXXzjYLxCxBKnSxtTS6",
  "key30": "yvmm3AaLEuRKCYtkZvdVDFhEMQ3FJC46kkRafX7NCgxNnosT9ih9LU3fszsYVxFmpAJmUo7hDoUWrzuMk25xF4b",
  "key31": "3zwceBVPXc5qrTZTK6Ptjost5EfkTLp9D6E6dEHpriogtgjf2HLdkp2mEJeYwt3BxsahvggvpCUdg2ZRXneF4XDQ",
  "key32": "35n7jkjHETXS5PUTLpx5uQpCHJbFPWSKkWzj9mPAhhjqnknKhuzyBZfhQjmN6N9zwRRcE43SiugvbmCxsJMsiCuh",
  "key33": "2RrZCrRh6UU5mr4jXoNBQdpLVWEkLwbt5RrVVGkZeaSkR8dCPWJQPMQJDh3SYTw87VmLYibDXSxukGJz2V2THdxa",
  "key34": "2LaHvR63iQWPEi9sqUB1ow53N8vGLva5bWRHMkgVWKmgLkBLuwPUgLR1B5HjehMUVhUPoo6kW5RuAxyziwthxq3h",
  "key35": "55FoTFoDaXVEU7cBJseXkWfwVyk9Yf2RnwmjyJYeGhWRRKkZfQ1TdcwwhT2uozdufyTyfYq9eMwkzxfCdsTt8YEK",
  "key36": "5tMk35rCMFK6FHkotPZcfaJEbRRh1qS8ymd3TX9wV3A6meXAuGnoatPcMUaKFSMEvAmjqg7ycda6KHTp922pfSoY",
  "key37": "37f3UgP27i9BHCXHehWShrvxdEnBXfVno9vpQbuzhzPBV47jQwjuUXnLkmEkeWujYzqMtmdBNVVU2PfonuKQaPjQ",
  "key38": "4i6TuX1kTs4hUTJXVTUJU4JELQmCkvvzewJ8Ryta5ZSfLQxevDikDSTKLjwvEMtYv37eX11tgDoqWyGM2fTQoCd6",
  "key39": "2akA1ZrMiiAKc3mMyT7WqnRU7kgJ4HrsoukQRGQ4ShRfo6mYwn2GULHx6UUVqAJeBgXtsVYhuCY4taL6knafygok",
  "key40": "5K2o4ePGXKVzbG1zfmB42QMN5Asv96LrC8Kkok4Lpv2LNdGTB9Rc387K7RLwVRjjrGXHZFAPhAUoPHtVJ7JWfyfX",
  "key41": "3VW4pLbgtGK8bGkmsYL1TPQwJxKbJtuWQ5khaSX4DY8y5sapwJtkPEKc4sAw4Zd8GvWhsa1LQb2HTuSTNvKjrDC4",
  "key42": "4ZhhK7paSyiiPiFqgVZZST892MAaaWCfSXkze2PkheXdthZvLGPT3ZU1YDD1gQVtACNs6Jxj623sBi6Jsw7NLUoo",
  "key43": "51XBBkz1peyUiZfVjvvT96p5TwF4PqMdECH1Bpp6kd2Ri4ih4rtQ7H3Cske2pQA7DGKvRnQoAkPigLDxvtwhsHri",
  "key44": "5VTUgTDYJ8jcjRyZ9tn8ZB9oJKzrRKa2iYgNNDbe9oqHiUu3iwDFoznLaRZLKEdFSkzecqg9zupKjw3JBDqFnTLE",
  "key45": "isAgWmT1PwAjNVumU3qXuqJoBLY57ZUPYMew8AFFNFhmuxw5DBjkYpZmUHJiKuEdFm8cB4e7mPUsBk3AxFv8JiV",
  "key46": "LaPF9HHPGS2GwYNhV3pExtFGPGCh5QL7QrzNErLAapRBeFbhxxsCi5uaDSWMNpKrjDXhaEiNeSXAHxpuwQb2TeK",
  "key47": "3hi5UufHb7sBrLnALT5enysTsDyU1v2doTLZUT1BFV1ph25KJqnZxLuXJLBRn5UH8L6C9cDsyywatRn6y9cjNs5N",
  "key48": "1226z9U1YtTgfxALGRa6oTakQsYHhgkCFzFHkfhptvYKYURu2B5z3L3wx6QQfhtnuzfnAH7qPdUTAbFEPjK2Wq1g",
  "key49": "FYj5o2e4VQjArGhoAXYYeUpbGLj8dSLE5MSmnD6vL1YZfeUFnv48rCDnGt5D3wuq9YjgEA9enEcKSYxpqd7CNQN"
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
