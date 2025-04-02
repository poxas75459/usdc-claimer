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
    "4EUMd2cerEPSK9s9SKf2iUNz4dj9Eb72WvWCRvKKjZQuJyu64249nmBpbfedVoVnLzanvqtSGCKfr8htAnmZ7RP2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRQrHV1puodMwsAo2VF7nCuLoQUxW3w51WAMFET2k4GkrirJ2CFKz6rYcQBk5uKKtcDUs9rxs9Vomz9VtxHA121",
  "key1": "4pc5CE9WLuu8Csicv8HP5n7ikV4nXQG4kuNABe85qSQWrkndBKTM5TwB94bPEAMFYyXojwAf3RMxezGAxWFSyi18",
  "key2": "5hok44BZawbtX9jH4y66xQBkijJ3SQGV2b9VsMsxaSZEAwxD9f48MpA4j83Jifoc8TX7VoYJTkxHiXjXPRnzmJF8",
  "key3": "3Xe2GDizdGw4PT7ri49J4hTJKCoG5XDQ7KyiVMnjRVSESpbGucV6LyQszpFDsSYNfatA1fHwGATpExeQXgY9PdJU",
  "key4": "2DfTwsCKH5tx2jtVBFbcD7o6vYvPzwBXXj6RYA35Uo4HsAmqC8eoWhLX6STqF2ZCeGh6xp6YDkuhFQ4nus3xxaNC",
  "key5": "2Npzu2bGaUdWmgBG27uLBegJV6WEHsH2Qa9iizfkig1qcdUmH18kCpQrvCJfNdQkMR32CeHnisSJ9pnh4VCU9qPh",
  "key6": "5r454UpJDJJETMVqguMVQNFDyzu7TzBGGwSEmrTcK6NteAAnoqUJLYMQ2P7GgisaXUHeFuUrBD4xUqS7aBt9gTmS",
  "key7": "5hD4s3d9xnX52EeEHYgiqfaKA28fJyWsyi477TpCuUVFoMkHS6Yi1yF6M8s7Ft5HkBVpqmR4YP21hhAZVBXDJoau",
  "key8": "shmJjfz376PyEGzANjwVrqfZF29ESBqLJL547wP5MpKJQgKPdqrZaw9t9JtqzPPMDeEWqX1d6cNDC3qy6WgwjrE",
  "key9": "5xS1mWGfYRR6CYgowcsVeJfLNEmmwiVh1vFsoepVbzK4vPQrv9CKczrNSRwnyNg587DX67zYQKd3vnSojFxfiy91",
  "key10": "5Kd2nHcXG2sXckvk4v9yJboBosi8c2PMKjvkhctWofmYPzyKB6deDkaeQ1Dd5dviNuFyBCkDiHatnowndqgotao6",
  "key11": "5M261xiDSNib3NmFk5MZVnrQPBbCeNqimMm58W7n3yfzCqQx4GwkEPrQbhmNRUMJu2GZu3U4dWwrczGXUqVdhjS9",
  "key12": "5G1QmvqZRmWd7zjEgz93N9yy4aHBNXcrSADFC87RYJ6uwfjvi2bQiemN3cZe1JfxF7PJZaD1cVtDLRB7Z1VAVTXL",
  "key13": "3vHWf9mW8N4w6pv9eqcyBjVAavqGr9SH7uj5CdgB7o8vvYxn8gpMQFgYDhEWX9JfFVnNhAU3xEjyAZTvhVMZtU7g",
  "key14": "4eM5NqCmSyDqKaipME3AgPNVxQ3NyGsxSGq4P5rnVmWbXpmDqrUFWQvLMwgaFT8UsGCdfFb66H3VwFmTtGsardUJ",
  "key15": "4MXFnr5rSM7JMzhKhZHwb6hDbFzHBLCQnzykKWJRoXh9C62Lp4BgSgnaXf8NpyixjPAgYimPy5ph4cTF4M57EZye",
  "key16": "3sgDYNu9iahiuLYXDshB65jfBTpj3sv9cenXZHVCfKoPvW73u2ECqC8cbdjaoSdNGMj9uUWzsXkR1rzWQ5Dc67aZ",
  "key17": "4edgFh4rFz2tZMSefPYpjwV9fGARwFZfzYLo6Deiz4yehsXPXJcemCpNYGWu7UH4aepAYCqjawdXs1uhXHQBvW7x",
  "key18": "5zWi6aW3MYYgtXpm196czUfPh6JxsEpFvp1zjomtJKhBLSfqbPX6igmcPKoj1PumUv5Eg9TcpYdDXeDE6w1UFx6K",
  "key19": "53fRzz1LjdH78kViaGqmHJuewjCW4rf4GpnfQjpJLaZTGgVrYj6ypbqL6qdfJ7dgbgzi7QAdq4kgJ2XEovzwKsfs",
  "key20": "7Ls1zFTM7AqRxq4vWsRBP1QN7N4YVrgqiNxhgFdMcj46Pt9KmUVp2ErvQrdiLsd5E7HG4ifUHyWp1S9mSiyu7Ln",
  "key21": "4SomTUBisBwR7WgceDWawKEyP673MCEKv1HJyRbRF5cqEhusqqbG7a2M77axyYW8X1tutSgnBnc6a21h2PTJtGQv",
  "key22": "2CeJrAxdYGPXXV5JHPh2AHp2BYPp3rg9WuV1MTP9uXGgErhM1KZFepWxmq8QFQsduRvLZMyyor1TooXbRrtmj689",
  "key23": "5PZP2zo2wHH77gWd5pUXaFVYCkf7BitU3sHgvTsf3xmSsn4QL3qpUxeefpYzeyMT8HSW6Jsxv12ztkAnoVpFgcko",
  "key24": "ykXcYFoDLVMov7XjwJQSVCHkCmvg5o4M1wE14FBRqB47Bcw2kNe9hbyEgxXkQYguJq9nntzTWbCF3rnf4aPVW7p",
  "key25": "41d1qwaM9UtgmZpQtdM4R5r2omdd4hbVrhpqqXDdM2oUPiFSBsyu9KaxpffBgr9iJQGqqtjAAwpeJuH4sJxV7jkq",
  "key26": "fxx4VR1LPj7kG25kdZdbHoD2BhB2ibBQTrFnwp82aBmBA8kFbdtUKwUTwmANykHVbmDTwbaBeeAJ6CddKs6R42F",
  "key27": "25CgUgrhqLFHBMXgkKDrD7H69LqPdCfwmnY4yed5hasJZ9N12WihPZrbqJKa5BmxxK9FgHX5v3RT3YMzbEZUTAVB",
  "key28": "2LnUfWx2nHnC3A5gxCY4NxcND9DqURC9o1zteM8EaYNzNJ7enDtrkVd5KyED863iShNWbDJ6wq8qbovjzWhsa3wy",
  "key29": "3R3huGFi4fqGZq2Z19oqeBxhKwj5AkJCEvNEYzweG49PZzVKDXGEDFxQYsaMtinqh24rfVrqUj9mahXUVFBUykBp",
  "key30": "2eP9ooGSsqrtEHeEQdGn5Jcgno35mWVR5sKExnxtMRgEfBYjr8kcGQ7nT74BmHdTcDcPv9U6Ju5jFoNYYrknz9zh",
  "key31": "Fa31wAMS1bXAi5HbGhQKLdPbQyZCMhSFfdwrm9wbxtfNfNdEQPhU4uwPVyegXj8QQB4zVwSqWqDNsmXuEWs1BpH",
  "key32": "WzsD8bwt6Y63V3ndHFChe2cPHFik3e2MUQLLn3e5xt3qLzHuTdd4y2BgJ9xhqZ1xUfsfycPsMkAXKLLpHdGUWeC",
  "key33": "3grq1ttWTdUSeXUWpiDuEpLU9aoCkRCZ8WeXsjwqpFCSW3F9U5nKiDkApGZ5R3CR1WjvJzREz3SKoUJMMzHdqo2z",
  "key34": "2yxkQXk5tVuQPbyUFVQemYqfqirdNmnT7RSDDip7uJiMV1otmoGS989YUE2a5wbHjGYCVsG2oHhSLR9UH1wKpiKW",
  "key35": "5amkzfJNazQJZrr8F4TbGxaLfwcwPc4GfVF9gPWwf6pAgKT1rctUpotAN82TMg2XZ85Uu7RYkrVPKDs7TyCZN4ha",
  "key36": "55r1WNVsFummUqhqsUnhs3754E7v138h4gtuMgVN8fwpjSeY2u5NURPNkX5HGGwa6WGBQ3A28TfGis9fKr4ijjbf",
  "key37": "2V1QApuMMmtsxShoSNoiCJFjMLnu8hpSNpgZfG3r4s1qX4CZotsrzao9ZjEEXyuz8rCCj6RJqc5Cvgj7x3tDoDgj",
  "key38": "W3pitW9XFKMP1ibE8hCNGc2jKruzxCRhGTQinuHt4k13fYpyEMTWMk7CcxzRM9imEJM7n571A51mYBE5dEyih4z",
  "key39": "38RbtBpFkMk6jWpNAQF3DRwi1EKUwv5cpJwQvXav8ZCso3j2u32QhvwLuM2AqXU8RNRRxN4N7J2obdc81N6dd7B9",
  "key40": "4shpM1ob5pXsGqwBcD7N2uGVAPe5HMbR6hJ6x24FbRrBPUpYNQF74MSMoyQoM5c8cMnsjHgeTm5fUSSEhSwZuzjZ",
  "key41": "2zurmPJSdiKzSvNzUagE4iF7zgnVEJHAs1nDfhKbfcixMeTySW2Gg2PoxY2MTw83SQMg6VvQvkPk9CN7ktv1ZXxR",
  "key42": "qh68HSEpfRidUkgqHwKsd5HtbpDA3noMugxTgikSo87UYiMtUD8XhYVVcianYJKm6JNSi1LtyxasRU3nKarHd9R",
  "key43": "3RTaurJeFKRMp2JtGVJuMmy8SAczXJjAAkFN5B5DUYLP7s6DsHtNewEsBHzqqzCq62pw8vekKpqGjZdtmDWvi23t",
  "key44": "53SnveALCNP3BfVo3jJLsUJhsqcKKbPX3fCqWo845j7vM3YPjdi3PH4EuNXhk5UTbnuheJyKCt9tvbKbL5wAna84"
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
