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
    "4hmwDvLfrS4VtEE5wrmMvXWCrfPeX52BHf6ga12gHbQhZstPQgRT4MUe9UxeoBfpSfXo3Yy9QTsJwxrhkxoTtxug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4My9jmCmknZZh444uTeUna71kJciaZzkr4vsRmGgpte9x5ARe5pz34F6JMnZfKtGjNgGusnxa6tPk7C9bF5gRHUs",
  "key1": "oAJGKCwxMPjFV39RGbQfw3n4gPHEPDLoEgHzH2QApabujVPTkNB5zmfRE6teQs5pQuiTVMoHa7PzGXaZpi7QAZ4",
  "key2": "3ReKZe6QzwgzzJZQVhvgLMR6KLw34ACXAraG5qryeZtCbEVUq7x6vyi54JWZTAqQioyMsyP7Xy1c5Cx8RvJyBWiq",
  "key3": "2SnaqsmLn4ZckNHTM2YehSmHxcCcGhDG7eFhmTyyMgsqh4EcuX4qn4nSk9qmg3bHTgfe5Tt9oisoiDiRTtD2Sntm",
  "key4": "2A2aKrpd7Z6eEehtRGnRWQJF1M7Pfygf7txEL3NtpPcGkYAj6Sqie9W3T7QLBVYojwoi9Low1QSRjcniHeb7LBXm",
  "key5": "2xnL2bWS8XGWR1z1qvhAcfEBgCbsNRsS4ry4hYZMnZEDY556bu4V2tUUgQBG5gbzyovjRPQmecaTtFdbmRSe4huz",
  "key6": "21h3gs3QBjbdcFKgcetGhhT9KEBFPEtuLtKv51cPnW9otQHX4QGeifdim27ZnUXhNK9rm42bwGB18rmkF9uNNzZu",
  "key7": "3q1PFL1SGdEYUGkGaJQxsTBfD1xHv24AyHiksYYATh54UTf2pSkoeMUTyWYAYWyUmYAvTwD5sy5XrGYZUBo4FsMi",
  "key8": "4r5FLpyDqK1ZvcXK817V4FtVCjyDgSg1G8Hu4UN7im5QteXRurhDtsB7E3fCssZYNk61n6DLDVs7aCV2Z88AC9UK",
  "key9": "zokz3bjfRv9rvpYTVT98rkXohrHV98qcGT26pw19w1fK9VSoqza6Gj7UsLh8m6FXLXf71f7pYgnQ1tvphrADLoe",
  "key10": "5L2XSuUaQvUbfU4U3S1hQmSjLxvRijfDsKWnbXQdrgGmuNjG8TzGkPHHwTXuDpQfdRdqLbeKDbnFmAt5sW4nmaiV",
  "key11": "5ofGuzgyjUZ8tWCfH2EiG1ypbCBeA9x3LCCwWTDy4gMJyFGbJxST96fdz9NuNEHKGxo6f1AC2xK7QycQ32xuvFN5",
  "key12": "DBVjeQWR8UwLvuSFHt7zuvWVYXFAzQkFj2vyoLPdRZY3T34iXWWUogyPSR6CeS7QHYyQQfqSFVdeQBrQx2CsHan",
  "key13": "54AwUYRURfzSZLC6TFtuhM6B4YTzn7vnucqfgw8ZQpmzMknQrTcKyLwQWCWBGzEeTGAN44CGiFR2rJDKr35KU1hR",
  "key14": "SebRiUZHiyKHJDvRytFLDAcowWmGuVKdFnxn9AswYfwjFnrq5zzaXQgTUTuLAwRRFk838uCYPV8u4crqBZ3EZfA",
  "key15": "4wPTKkq7rRXPNESzNMc9kHi6CRUGYbPPvNgb6222wKiGMmYHrpnK7NQUQc9BY2K4TVfjRwz4i8xqXGhpmqCyikyU",
  "key16": "2XpAdL6n1FfS8Q6rcjpVsDzmFp8bmJCivaHg2H1ZTJBes7oVKRcBQ64X3F4mTo4dZPpVkz33FCN6RQpheWKCGdpp",
  "key17": "3Cy2UGzAg2qvLtw2C39CTVECVkhUrXYgbetSGHt3fow2eXPTDZ47r2JnFGJ93rCzF2ntC8gNpPv82SWijnKMihL9",
  "key18": "3kFn14ZanYacd399ghZUrRKoFSGiJQMux3Cpor1MjknfrwC2ANSkAqmQ5yduMNJZhafWmCGMs8yqgNpxeryzLmPA",
  "key19": "5U6JT91eBMVvZypMrQv6bhGWnWzkoyvAt2QTn6UnXS7qdNU5XVPXT8KySonuDvLHw9ScFWQ4X1tjtRj62zqipy1p",
  "key20": "4Y1CYmm6m21vmQucmoxQ6ckaDPJJknFFSjH5Y78PNSv6nNt5SJruJ3GcFL9XtC3aRybyB5RTknifY62WEwcyek1L",
  "key21": "hUfwcrHunFj5NU8zVbk8QRNUiZZgG7rEa19Jd1XXcaTbAgth6kUKTVr5RU7sCcJuDeBF78WnNMPXaQ3zd1iDoqY",
  "key22": "5pmdSU1faeX8ESS1BYavfQXoijdTvBoSf8v4N31qJHu72gPJvm3w5mq3Arg89eyLWcYZmrf8p2DqUpypSRLgDyin",
  "key23": "2Po6RSkNZPMvNYcQoJm3xvL65PWAbmkTEwd3x77L5LNCQMzXha4pwrFnaVVCksvpowZzroJ2F2cT4kTtbmatvWkK",
  "key24": "4v1nhfSG79zYV4VaVfUz4hQd8ZmP22APdw2XhsYVmVAXtPpG45hx4wG9wNTPZEKyBXBgWyhFkroiHc8BxgPkfyhF",
  "key25": "63cMJ5tgLf1Dxoqbj4SYjoDEUGy4wvxF8vCV6pN8hPnMt7azVrqnvJg96gbNnSP2cWng8T5iDhwxkffiaWbXrx3T",
  "key26": "4Dt6T7mvpfHnNXUQctp6D6SF94i7gakNTd33nyNBj8vEjADQMQaATtNx2rL9CVeuMU9MiDcXEm6aUj5tAaDXbV2X",
  "key27": "3xeCGGNiTCncaadScDfSFaM8uKMMJi7HpbT5Mfegh1rCaoqkdrHpHPM8pFjj3Rc3RXM8wbKZENSvs683785F6kTw",
  "key28": "5gKhsnWN6hKdD3GmtTCJGXsTDZqXVWaWVUf6FMB4AuvLSqedsrbpuytvvu7vzjSoWK3rFA8KnQGbL9imsCBUjQc2",
  "key29": "2DYv4h6Xk17ZMLsRKw2SRFQx4AAfeom2LcZUg53PbdcbWW513MdkD8sK97AGXnhBUpWp3Vu5Rt7hsAKXpTHQRN8v",
  "key30": "216znC43UCxo9U7UsmTeTrAdt8HeYfqevG7r4sGrbcFmv9kcEnnLkdH6Jupw5CGhnZK23HBqktj68dYHJ7abydTr",
  "key31": "1hJGyZdqhxcGEn1mhSgVAVzKZdPUB9nT5QtPuDGhSq8XWczoBBceAnpG1QeS9f8iB7WFfZTjTSUgWpfdjgyyr8s",
  "key32": "me53TLH1gPz2tAeRKdLHKzSF4WrQgHPuisseBvrjxupgSe7RVMcioFYJQHLfSXu7UfXFZZfGqfcwNEWiFWamFwo",
  "key33": "NwihfFTEwKzkH3aaLRnSHQf6arxte89Aj1NdVB7usV4G3jprtoi4x5T9dECnGg1mpdgHWNRECFdwEW7p7ced1Ku",
  "key34": "31xAB6NE6VDuLBA5apMLFL6GTFDb9vHLN9zGD3DwduL8RZFTjBuCJE4DbVvmVRxtBteE2kaJR6v3dNqqVJF8BEVX",
  "key35": "35nvPxiVxTVu48bD8V3uDuxDtK3NcvDnT11VqANgN5Grpanhshxo7UKtrQ2agDATmbTSCut6BooHQhP1GusJh2fM",
  "key36": "4dJKCzK5iW2EDc8vySbHj6LsB3Gk9f82Z5w5QQ97RrZq4xGtT1bkduKdjJFKEw94L7fNKSByoHkvwikdhafaie6P",
  "key37": "2LmaD8isR7HyYSXs318UUurR3zsK95FP8RZUxbeXwk7F8vAT8N1wYLAKYbhSXmXbbPpQM68fG1AGfW2NmTZYQ1Cg",
  "key38": "sWYF1QtYL2828YotELe2Smni5DMBjXs4qyT8Z3Egzb8993EfAFTGuydxSNqPzCc1cPTGGNHKWTYamY1oo3M2AWj",
  "key39": "4TVNT3cTgfERJSzdEp7Q3jnawj1kVsJqA5TnN81gL1duJEKjFf9ybMkjEeAsDJt1dByPnHpMiebqHVdLPZKTcr2Q",
  "key40": "udGvDHu5NZFJjfJXvgaaGAeutRtDEGuqhJ6Z683eYVUMhVR8VMzCnyJ69ZeeqwqFGmUeTmCr3VSML5V2q9MSiTY",
  "key41": "48zy3PuLdP8VKBQudELpipsT6ijihhAEn7QR6oXJKgV8fq3FW6Xo1qBiSHxEthncNRU4hxVgdehXVMjWVGQBbYvE",
  "key42": "2dQngk1XjJoEKLbFmNP68TvrDEppZg6sSmACdMmJ3DJ5ooUFSJpX5FY8hXuGuMMd3mxvxwm9JTqchFxGzYD9C9gE",
  "key43": "3TjWAWvXPTPBDCjDqfhSc5q3GXgGWi2QAAEpgtjJYpCkPSDr7xuR8cKnBKkUquMnwcCTm1S96hJbLTdkuBdJY8QA",
  "key44": "58z42GP88xf4aasDDweZ7JZQ3QiJ8d1W4RyMmmwagjitX1Havt4YWbmJ2Ez6fY8GyYnhgQg6E3pMzFYXynCFDorE"
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
