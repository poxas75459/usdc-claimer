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
    "47jnBXZ73havB9VF6p1EXBGsMsQpnaqTh5MVh6wkWQr5yLT2wPAtjgUE4AtVoW4VoraMYLokbhTVvLgm85kkPaKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dodV9EXJ6da6HrMGV4EbZ9QUa6v6oxKjmwj75AMPC4qNvr9SLne2nzLTNHZpPYDdtXaPkCqzSbW2bkuH3wEjFxE",
  "key1": "2Dgz7Wr6vbXQmHqfszUH52Xya6GmTyxuDLw42vpwZFpQTZxSpdKThVVM7GTKytRpzXgiHx2Uc5UcG1BUnJAgBna9",
  "key2": "4j4jLZquaJaZLwGHMG73L9LfuP2jHuEXwvQ6wvpDBFFp6q9dvSaPHCkiUAkHqURgtACN2wgJkgSiF2Andi6c3B3q",
  "key3": "4K6RnwV2n5DLHZUwjCJH4Tc4KJ87axyBgxrUXLf1mYrzRwZ7ftnRV3KZe4EqcadpFCDCbF213HfcVRqBVsi46zJ7",
  "key4": "5XouT6e7parxweHUhF3DQajuEQWigN6Faui5noFEADCMHeMEM4EyCMeb3iGAUFvu3ear59yaidtvQb6Nfi4sKe1g",
  "key5": "2F5SorjRVTdNmEVcqxKhF4h5nPsj6oZW4YphA3BBY8RE7AnWQSa19jLHA7zsiPYkQ8W7jZQWr6jhdMAdR16Evx4t",
  "key6": "5bNkyt6mrDTmk87z8QkTxDGCLsMcPzofhw6dDKmFrHRjzHJADZuSsTUYrZxzE4tnBmNruXiKCobQUbNisVqSZWRC",
  "key7": "MhvTRgLLW1nsrVXei2oecHCB9gJuJqLG5oWWgQYJUS3upqXHHhK1sgwBUHsvesQ2xzS7yWFKGkSsSkFH1bivGPa",
  "key8": "4VS5i5w1cWHuccvXSozceSqraNKxC5L3WSerHDc6b2Y8Jya5M88bsHehmfncmpLxxS9kDNBxh99GSdo2HmAZue2C",
  "key9": "aMsMTZwxGgJMj1E9zkhAUaf4JP9rXABiY7WtYwp4s2Paoui7Shcc9YQpeccrWmUP66arFP4PFnF9dS7PBZbgRpT",
  "key10": "3MK7q58dhCdJcPd4uk556cAoFoyh6xz9uSGnaoqmHFXDU9xpd6XWtDhS1mkZiydooLkiPkPkd2TjmyncZPVYoU89",
  "key11": "41wyutffVLJ7JCnhCDSwPZWMW83CmK98RR3d67Lkp894UPNiKq25Q2nmMAS31XS1nNHQ65JCs1f6CvsJEkaab8wR",
  "key12": "3AvzuqL5dJuKsaS1sXbq2Nftrfb8spMpFeBb4M326z7vQASy1Yev89muni6d7yErKPuH2ygk4oUEMeih4UuU5vs6",
  "key13": "63KmJ9C8D5akGJW6TgRV4F16Pm3xAPEqaFyxvfHccPks38NL2eRm6z6p7HP6VEaMSvzvuXjgRFDvMVouoT4EbvUL",
  "key14": "4T3WqFizxERo1RRGszUzjqcuSu34GmqKPgWLnoVcN71eEGzduR4SR6pDVX1fR6KiPk1XUWGNyvFQyS92M445aicJ",
  "key15": "45t2yKBGyu89hohhiGVnJ9pZfFDXtB64cjJFCHFfffqEUqBAkSxa5niXcsGGbZTzaAee4nDdW6eJTBU4LJwqpWTW",
  "key16": "vdmigfyfpdncFUXPUX5kRL1egu3W8T2aynRTEK1o2cEw6dQkrrYcvSc7YRHPcP9YrkHzW2rspppMu21Dz3fhWio",
  "key17": "43szNSHDxFdM1gqgcftLwZGnVBYP2NT3MWb8aMw2281KC2acxDh1FKBiamrNfj3pNa5fCZkD73VnUskCYo1qyWzP",
  "key18": "23RdfrEBrvBWpZz7nXfoWod7R9Vrrs9atgetjfeyViodpVK1nBTo2itSo3GusZtbVLKtEgpX7kmdT9K1qaYE6464",
  "key19": "67AekoXPFJ3wJoRw2Rx7JanLZjUsKNbLRmSP2YmyFMwVmjeEkfjznGBHRPaJtBxLtG1XREB2zDdZH6BpLfkccShd",
  "key20": "524SwNWHK2Pgn4DfStErqAi6ojGvJ26ASxda4iuBPEYs4LxyNgA1qXBJLJ5iPEg5bETPVQoBWPwusA6HDKUpmMk",
  "key21": "5PY1agN3UJoT3uQEKiytgiqXatGLRR2jF8AzH37Wo2R3So7KUnNp5fodiazZ9sCrnyAXiwz3FYp6c3SjDXoB8xd4",
  "key22": "63EwhWDcQ6yWezjHvHxMBSwBedHSLYkh69hTtrRfBqmRbKqcTT126XZKDwxB6HN43qsHgypD9wzX4SjeFW4eYj64",
  "key23": "566qVMpNtZK6JGephRqKryWA4LEYGshpe4strShXJjUUFoSSoDmaky52SNY3rfNCQRyPs4cAhJPzCH7qGxz3eoqu",
  "key24": "8g4PjJpqg2Sut35JnvQHZYkSvJpNVAq28xzjqHz6P4vLuNVnB5BEFYjBkuF8gRLg27n39CaAuVgeHmYdy2XkwCg",
  "key25": "hs7UcFkcQQ4912twnV1SCY8ntuZUWNgnz4JZLLZYfUeTEKfZ8qFRV191FtDet3CKL3NP6CyadugLGpJd3rHpYM3",
  "key26": "3QjnnHoJumoyHoipap4LLcoU2Vw9rgtqdNpWbcANhgGnebBp2tQp7k1Qcxxr5DhktLYhRzZRraKazr31d3vbpLRJ",
  "key27": "4sekjGhxdigGW2VwqgZc1aaEfSFCdxWWh8U2Bhu1gdSZuZuR86htYdEY4bBQZ4yb3KgBVgYpeygCoxML1p7twGJB",
  "key28": "29GEoNWUVLsdSSXxGNFNZXGZUhWR7zQ9F8FHoRQ21DiEFsR2snqRitTXmNUaJcRzmWs9M28BTkVmhnqC4GLuQV3G",
  "key29": "5JUczjV4NqmitSKNSbCZBzKnfpfbwEcTFXFJLNEfotuuraVd33K8GbKpmpQdqqVfdfgwSKDLtGjoHJJRXMTkB5UR",
  "key30": "hAniQbh3e33XVVMT7s5Ru4WYvDBiZoq2J3XdeA5apdWZTCLNTuBTWpBwKJhyE9FmRw6LrXK6bzFNmsLUSgpS5xf",
  "key31": "3V6L7cTUqpXY8oan8JAKnk5N8g9rYY5HUeZH7o8gnQKSP4cz5C8wegPYzCaKrKaa12j56FZTaeqxiJrXGVJoL3Jf",
  "key32": "2WTqrAFrb8T9nudmKMbAqas3GSBnLvKCfDKR22CcYKG89fj919xw4VPGkWdRt2P41J1ZevXNcEjrR8cqEBoxomz1",
  "key33": "4qomkSnKCoXp2Pr2Zd9XyPGcfkBjeo8YzkQHHdGAaW97bWLAXnbFAFWaCgGXJo9pVpbfWD14epPg7twygr3oPpq3",
  "key34": "4CSb27YpCDcDtzzfYogaJHFh2Qqjg2dDULzrMzbecafgRbmnDU63pKKmvLogjGTiuJMdvSh1inwfoAi8czEHJGCJ",
  "key35": "4YzZv1LEX1fYGpdxsYfP6nF37N3BvZMGsjukGP2vUpB29FGsrGPvTyn5w5W8uPdN15s2sFJzzEuBeHpXucXyM1GY",
  "key36": "5ChJyGEygjnAJp297sAXwHfYLLi9h3CM7Lb9V6FKb8m8vjT54StzBRifwjjgUGAKnuCLb4Z5Z6ARD88MteFDT5kJ",
  "key37": "4eEmbQst3V8KGex8iwoLe6vafrsonme4ShnDNW7UfZ3MQeNzj4RuP1oN1bnVymgDUHUgeU8Nc92GX7UMovMcEnuw",
  "key38": "4V62Ykcs5zmGKHFowLUdzcvDJm21wZpJNjcw158Z4qtWNedTqTZCFpDs7yttYLR3pPxqPHGrAaDjhVNP6tS9v4Mz",
  "key39": "bHDgdmjA32DrAcXU8Y6DvLHtKCGyJwb467YHTwuPVgff4AErGtGR1bRdotC9QGPzytFAzhBkCdC4VCfZsd363fx",
  "key40": "4Jmnw65qMAZkJudZbCDaz64vzN16vzNmPPYaeWbe1wevduBMH7HHBcShYWX1GwfSkU5z1LrFbWTQyRbKdEqRWXqE",
  "key41": "431qbdQmVQ1mz4HBMSRadbJY4FK1CE5zaSzBQyWskvPjRNXsxT1y4gc44fPr7MC7ugjERoXS5ggwx5zeCjyVqD18",
  "key42": "2DHnD6HyWad8fgoJbC7VX2yCuV69AgbP3yvh7156Z9w72cp94qcBkmS7acgF6vLrAJRw1dxx2V82XdrVHET2bGx6",
  "key43": "38Z7eehBVZBzJnRTtHSjN8KpAa1syarLJT4whvLkczYKCwTPbrRaogTbW4fujaaMXj7yakoWVM2EDFBgmobcG4vv",
  "key44": "4wQFx62VzKKiGkqCFKGAiJomw7K7iBgkRp3JPcKFp8RSUysXQLkjCsA2FeXE9dGEZZGQcv7SavVjPWGhbMnFzsKa",
  "key45": "63WmhGjZFwv9EK7WdDLGLPAuVhMFUdMPXpbLFjGUCwoVE1eZHbxvG5W42SSzJiw9cKy1WXk9J8zH481Dsbwv2L2x",
  "key46": "4dbJDWzVK89f76R6JqDScp6qvaGUfXfoEEPyCQAWFtQkpYG1a89MxaSuktrnAR1P1WJK9k6S1yscbYQSUK18PmDr",
  "key47": "ufGnCgH85E6AxVTBxxUsCbgJSaS9fQ5EMfrM9E92Xgktf64e9hHjkk7AH9BmUKg9nHMQhgZJwmspfSH8YbHUaw4"
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
