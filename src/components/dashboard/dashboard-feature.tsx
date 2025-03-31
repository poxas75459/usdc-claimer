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
    "M1iD4jLHp94mzMp97jskB3tneeK4L6MRvQjpo6QWq5SueeGsrcSbasYCxwkY4AGx5fnYBHVGKor1jGT9fyNAnZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mjnjPibuVswXkJxVXG5e7MjZVSTGTAPJjzKE6z8tnMmfdmYxQzuLbER1ramYJtfHQfsLS2jK45ZJjWvKpZ4ex5n",
  "key1": "662QpmRWNNue33BjUD92ETSCuTteteujvgDRnXrqhpkUQ4zQkmQiHstfSystwWUJM6GzZghANJWggsnH91doHuSG",
  "key2": "5ioP7zRj2ojFC4jq4RF3FfJdvzuKGPTBq5mYAH1xUTcfxZ4Jt5d1qUaovLDvK78DM429Tmka4PmwFs4kw6mAdG6h",
  "key3": "2gh6Ac1QJK38KBWmgpEsEnFABfM99fkcLR9dWiHvLAYZi5h7Y5JuWAC6Y37sopZrsMHkuRoST513U7aRpzkwAt9D",
  "key4": "5iUrWENDD1amfVqubMpG8DL6jif1SZvPWgUjWtQRK5a2BByDGCWh9a6t17oX1xwSVDzwHj8LtByTG2zepScb8fvW",
  "key5": "3KkYKztVh9CjFVA7TJrKbXc3w2uE46TgQ2jgqLVcMyhfivjqcJda3ggbTv4ZsdY1cCLr9nXPkupSpjR6XmBXTuud",
  "key6": "4h6VqGa9QQKPukLiWAmmKFqMeBH6skpLCjV37zJeXbEubAsVsUbFL3AUFNKJoY1SczG67y4hEyJVH7CcoJ9qJTMc",
  "key7": "2R5A6e8L2vF8ozecQyJLXfpDG71QTcURbCZxBdQ3FpG6USXAS5LfeSjvGvXJPGzRuYxZXvbZSREm8dKSdXmrDa45",
  "key8": "3EgC5mguTANUkN9E2hzCxVJr8tBJaURXErsx7KwzZnU79FhBrUi2d4JHMVNmMz8kk3ZmdFwCkHc3yXLikKJKeH2h",
  "key9": "253N2jTejduDgy8yNqgrGfTesFjbRCnRSTAjDeUiYgHtUM9zrmoEFAGbq4J5VKhDwmc4EzAdqTx739NcVH7sEsKg",
  "key10": "5zxfVFt6mmKyNZ4ZjtomTK4bzacEnu1NzAvH5iMAFtgSoBaCJTLaeo6Hy1monnxtp1E8oEB6ygpYJLDjYMxW9c7T",
  "key11": "2PwkAEezrtwuiSEBsT8LHuASCqdbyUUudEq6iPGpVmMQSHjJLMNRXcyQuVbCsbGYLVzsA5ekCo3Ci4KKfJcNUp3j",
  "key12": "3AVTcHWFt62gxNTwLGPiryssHenNoNy5N7FvWW8muxPv2GbNUp3eq7LNoS5C96d3rKM7zLGFMDUw4XLuAGuAV6Uq",
  "key13": "GkYFmQ7RZbSkVLijU74hrAhsb2skjEnQX84j3kbgb4wA4jTTGJP7u1kyYnta6fEsoduf4aXqMHGnQeKPkwfZun9",
  "key14": "5oAUk6stdEUWGE81ErW9gzMUGdVz1YX9gd7vHEU227puwqPTACTcWpVg9FAZC8z23kqGJb4KT2egqFhMrVcGFxJX",
  "key15": "4EWDQFoDjAkjXH3khhQpz9QHsxUr4ptFcjVNAFoTB6V2Vo3gHsXafAM5BdNcisCyckuSXaP1saX4GGY4QenJ1QbK",
  "key16": "2R2AvsVBLrbPNCivAxa1qfLNgyx62WYDDqAbhHCeuumEibLCCkGaZC2VtKcfTp84CBA4eFP9ZYCu5M4a7wfN6dXc",
  "key17": "iwLCd1o7yHW6Yemv7r9dDhUB1RuAZwPmKXZQdGn7pVoCPkipYYuKa1qZzKLdW6z72JvpSfn7nyH2pTzqq21g4tx",
  "key18": "4Ut7G3Se9sjhW1SqTZkmQhDHkhYcJYhdVzoAM3F6sRicH7Zjuf8p635inSG3BqVXoUvg3XGWBHeLyc6G1w7dvEsq",
  "key19": "uTacAhB1fJyBM4UN24Zpfi8x3uGh1GZ3PTmpQrknNJ1ZwdwoGwL1Dzyg4ARd6Cb6a9iAqtaeevoSyz6KK5qYsgp",
  "key20": "2HPWcTfZonL5PgdpK1xeMKQt6tmMiWV629ksGgLpBikh4UQSkoFwNF2ej27Ea2KcTFmoGqyuycMR3RuVur6jMxZ6",
  "key21": "yprzy8u5ppnWdWyLmrQ1swAjicr6DrXSNQ54Vbi7ogbW4wVVwmsgBXDFt73gzsmeGjd1GZmTW4Yiv2SHqJ9LYwj",
  "key22": "3FxkdkfQEV8Kcn2tQeqEMACHiZPqZ2EVfFmCX1x4HCz77eG3hWHB1QTEXg26MxNcvFqyf7cs4schYAeA5mVDgeEA",
  "key23": "2xoRtPXyUoP6MdEg9LoeAqhVwUL4y7mmSXKdpB6qjnosveqEhBr41dEAcdzEYDxwtshj856Fy7Pa2Wui2jd9JTkC",
  "key24": "3aLLtqEhueGkv4YxCr7t5UcupiEvaXDMZQHe8wRYDVFWtXSK9B7df7DvHNLWAgxEki9VdzsxRBt7gmKUbiwfcN3d",
  "key25": "2UCLrWxNWCTiaLvubgUnAezY7SRmQ7DHkb4hkAeM4QbJqp2fw8Df89qZefkcoSysYpcD3RKj7uyVkSD19uY9aFoj",
  "key26": "5wi2ukYZjQ7pRexiQJSgPXcmNxu1uENzG88UF7LwMaaPwGV1nqAAYxXpyBKRRPqw1Y4y3ANwjXtaVZVaww5Zx9pK",
  "key27": "3RcQaGZdEuN2qKxh7m23LKxsDK457ZdxMMcyWqZapaDsex5ff4jNDfYtyFDzjBKuhpoSmmYWD29ev687bsZeosRu",
  "key28": "h2pttB1JAD3wks7MZcPUBD1FNqryQEJxmtm8D6VyrYawSszLfUaPD8guNwJnmQZG7ZvfB22AYH5fV9ajNhq5CQN",
  "key29": "25uRJ4kZNiPjM1yEtnY72ZdX6xjagcKDRD7rGsHGMHk8guthZUcNzic9MUaHiaqGrrzEQrctGu8Lcey5G9MxzC8x",
  "key30": "bvJFs5Qs18qELNP5cEWLo6M19PenzmnNeWpVRC3JxJ5EQMPVypbmwZqJcfpXNFNu6D34ovBrh6c1CTApTtsiM1p",
  "key31": "9uNoknZfd2ktUGpouMpx1eQiCdsKdTmipm8Ze3AU12hwNf2xbRYu2iEHgERTNCFUmEXfTMPWy1JYrDAuwDzt1uZ",
  "key32": "fDKoQRBuZ2SCREW8QoY2wg5P8gEYVUCjR2uZNJNJtuVVX4WU8pgJBoSwS4De3hTQP8dNB1avTgneuTR6AtQQzzM",
  "key33": "4mQL1h3v3NPPHciR6Z75qZhj3VYM1ZoTBgiT2fPzhtxRPn7419bWZEdTcG68V3TbhJii7SAvMr7HBr8hhJ3oNA2q",
  "key34": "48c6BwcZu4gq6bNsfMLmnQaxjSPNzh5j3NrAryfkwjoN73KEtfvKYDjx5GqRRiiMzhzR7mjKU8nykmagSHHfWopc",
  "key35": "5tyDn3XqUs4gY2VoNyFvDZXLkEHmRFZCGar36GJo7vP8HVokFkrwo4RdNU3Lc9a72zXq6q8fdjmG62hY2ZRU7VzJ"
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
