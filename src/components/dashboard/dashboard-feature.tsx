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
    "3hMPpn75LLmBBHz9iBMw3hJXG1iV97uc6numcnzDFnEKtfuAPp69e1ptCUt4tNXudLDTYMmUB6LEFkVSA1eLudY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RvpD31bdqt6NQWehNHkD2qAfoeXSuv1i3F6PnCEEYLzuDqwzWRDofWkgFytLVmiheTR9rsADwhu2VfjAHPttNej",
  "key1": "Qfxo3eHTDJcofcbhkaW8pXMwRwpU8yNQKsMP6XF4fT1uhVic1F22ZKQqdH4J5xFtWXics1L8ZouWJQoMJgbRi8m",
  "key2": "51MVN6PxcbZzsQZAPJssJRmJCVTKzLwuerATLUNsnUqsRRA86LHvRX36R8bbPYdAFBioho57oCasxgNmNfPbPBHa",
  "key3": "4JKNaDyQrzVQFRKTnVKANR2wq8iLomqi3MKsD7pxvqqZvxqi1cWJBWKDAtMo4NsS1GwYiTW3k6ULNjW3N2bnwfHY",
  "key4": "5CR2z42gQ1ttF4s7LTysrtVQdVP3457C7KSmTu4pMRvUTkR3c1K6icj9URK5iwfkJ1WskwVbo1xrbzv1wxdSnnxP",
  "key5": "2Y9TR2NxExmphaXFKkhkZiCAYQax7mnVMPrhyvFDb4W7iGE1dgWFQKAwHyGm6UgLaLeh63kWDDJAvD1HPQwUpcKb",
  "key6": "5P91req2a54hqgGHConpWYDcNM5NdDuux1W2u16yoifaBFC8JL6QKDfpyrYQ5cYpNDsGv8p8gQstMH1Ywx2k4Sqj",
  "key7": "3QhZeFU6782FihUCmo2kPBtDjxFfY8WBoW2oBManimGyoagSW7Ju2E8NjkX3AekYv1Cn6KYSfXanWcAsCZthcEMQ",
  "key8": "57wmTCWY4iWE1G5csYHjPG9kQrtog4fG25Cn1ACebB9TyvhqGHe6faEbUVoA16SehTvedhkwBhN69DzHPDHkDr2F",
  "key9": "4HpKULbQiYMeJstqbTzYk4sDvkYAZR2RNZo25NUtYrdYVwcYkqqvQeWedJR1CZLLTmREzNGx6ccxaHb7nvAZAX8R",
  "key10": "4PdPToJqpKxJYaQD94m3iMyjAw8mwgsEnmNurMFxFDjwzgSMcF2Dd6v6nybXCuY8yfYXe1bLigwr8mgpjeDGukvs",
  "key11": "5ApTjg2ALhT5bun79mAeEd4L3spSs22U7V1d8c6BD4NmoCLpNNNCgXoV2qWyfemX3zU2bqvxZ9WjuxDZ5bB4nYQe",
  "key12": "8ueHDVvM9ERS1B11n3XaULDk3oVgLH6zTE8byze5HFbLSDMX1YFy1qEPFTw4JqPw4ZEpVufqntMbdB96RLzQdsc",
  "key13": "53PjqfxbtJFbx8FhroTWdhwubaPt88sF9oKKMaxm4qiSacur5rPtzRzHBQa9yEP71jRhbWnLbc5fAJhMHpVbw4XH",
  "key14": "4wgVxcF7GJY2YCYvWxZy9ZYW35x6At6DZx6AScsxsx77wnaB485c7JLcJe6CEemC3tz1gV68jYT5xnzJsnMQWXGN",
  "key15": "3iZgEEfMFRk63okXDCRW9gz7kYLTmpHPk47P7Wnw2cgAMEXoKcupxSXkvTZoykLiakCnHCLR5dEguupsZhqDZZAQ",
  "key16": "8DfHLSDTTHC3jFRMmifDBAw7PmtqZCbDNL9jWNZdBQHcrz6VMXQABvvzZZdUEueo8ALGrWCXmq3MkqeeqmojxTD",
  "key17": "5QQzz3qe9db6BWLTMNTQJqahrLMcHAuBWUtKCb1wfyfrNdotNqcx63Cx3yhvSEXiWGYWLe9Qss81pWjabehZHTPN",
  "key18": "3dJ1khWYHyqLYoJ93ZymAREHb8VKVZkihnJ3wXzGuw1KXMLds9vKxffwNDU6DvE2BTuXMG51PiCgcJsp7H21xw6U",
  "key19": "uwXxYrbxPfxdZjUkfFyzFQduoxSjkyvV8NeRVMuxEZXQWa8dDwXfSU9WEymunA42p6YuvPLJjXDiMNPWxYrKBEa",
  "key20": "65UGyx6omg84ubRBu4dZhZqheg3yDzunTDHQTiK3JSUJw8R4FyvgPBswmRHjPMYAenG9AtXfuMTFaViubCCfasDS",
  "key21": "f4pDTSMnRXJNrH4pYzaziADurzeGoNdSCU7X5wuwb78NXnXwSpyfNbZySBc38kN8zdsCvg3CbB26ic1iYCwjsKJ",
  "key22": "v4Z696tR2quaiA8ZBSJfmQFYpYBvumDn7fhjknZ18voJDMhtPAJYz9d91TmAmRDv9JfhtKeqSsMvGuYwpocbTR5",
  "key23": "2pLtUeS167rbo1Uduphgv2VXsYWXW4a22XccFjkTRjNgPtaAJP29jDBiL7PVFHndwuXYb4TxHURn4irAPKCQ4qG7",
  "key24": "5ZeoFrkG4NCju5numnjVRRAsEvHSSysBC9RRnqjCPr3zkvDedS3MqcGgjwGAoRFMzdjYESFwsWfxgcHpanrBd7bZ",
  "key25": "5bBkrBa7rUQQBRPvsBqqs1wAUGA7Lhtu7SwYfp9PMRgWYqm1xyqg4kar18y61ByjK5uPpCXhP97NhWr1fThmCpGx",
  "key26": "3ABWT4KUj28KaYcq3wZN3kukYXueTHTPdQbqn3ufLsX65dcsbfgKoFdxRhpMp6NUv2r2KE5pUZGjVnN9UiJ6eUNV",
  "key27": "3RiDsm1ksMBorqgdWXn9i7XxFSQF9bwzRdfwxX3WnRtvJpKHrcphmXZU5wHLgarFyv2YRqL1H5Exz9g47wnjdVhg",
  "key28": "3YdGjNgSVhusBjKPuKWvscSWPbFPw9CwtK6QhMSLGV2xSYqxsQXJrh8kuSFri2hJRpE9v2rwUsEkmDmSfYB9b8ZG",
  "key29": "xAy3Rsy9RJR95qjFVWSEak9UqWPwdNG29XnNYawWLYJCLVhBg2FSxYUf6hHQV72mAKtMq4YsPL4EAanaxRamvqS",
  "key30": "1uB6SiANeUGnTVt5eNUrjBPJn1h9aJqQDieUSC4sXZSWZ8CcRYqKTP1VhZ4Hyo9naJ5mXu25eoEhN5PAMsyj22A",
  "key31": "5MRi7SbKPsTKs2qZQCDm1JfifNRDNfnkewApZZwtiaKeN73goej8Vz7nzjvZaJP6NNacKc2vpfLNPE98TxrGWDPM",
  "key32": "2eL484GuEuKxkmR5GX3YYH9dZbF5vzNNNoQgWSP5MMmd9KPmZPJ88zkhLthq3B5xBoq6dBxgKLY1cojMCYN2nJ1t",
  "key33": "2Bg3MgJhxdrUDrFuvnxcrnAU334FtG3Q6Rhq6Td5BWLm24bqGXhKGQKomCqBLmqkjE4yc6ZQcJuZ95pnVY5BzJCM",
  "key34": "5PEaEbZeT2rXNTLGibrf6Y86EwyV1B4Effx4VcEU5zzPiQECm9CcihdLrQmPiVbjWNbGvBkM8rnxodAadWegv5QG",
  "key35": "4PYNim9UG3ALcZdtK4GBnLepSEQR1ZTk5riGT48GULCKknxZGrK93ekaxaLyjPxQRx5DR3dzRdAEBarmxPP68LHT",
  "key36": "4MNFnFBG3Ca35hhFk6b87XnEQ9cA7xw26qDHbZ44yHJ5bNetBWNewTk9m11yBvaC1zVxfExFChtLHQpfykxGo4HA",
  "key37": "5KQqdXFNn2F5xCeMJ8mhJDowbm7yWMEw3Mz7NMngZM68aqpsXgZDC9TL46f8FC5KcnrEJbpyZRJX4eRs5hf2mUrS",
  "key38": "4fy6jdaYiuwrekMMigM63kwczP5HBNVJ8nCLdD2MPRTTYTcC9inNZD24jW3Sc1UwSMwxtKDzYhczUGwAn9QbyDeb",
  "key39": "66CszfvjFPu7FH4G57wgunnG4RL1E8M5XeHaXvE3KQXKHDAVoexiAqD1qkMf5WhGUupqXQGBdhyWgmRDtaaH8mC3",
  "key40": "5YK5QoF1RvpwWAmYG3NyKn1D1mXq2sPuJH83ViUfFbtuhB8DFJU1eajcLLcuUFoYTYcNH9QBvTaeWQVeA383dhXT",
  "key41": "5qR3zyaceZyytfVbh5p1nhGeaDLc7sT1x6dwCjywgS7cd3suq4zZSZYTvhJ1q19XM4xmAkyi97AQTS3ff9SB5zkz",
  "key42": "27LyUrLmYEUUfVsZcY8jqSxCq5y2rzuMeZJzjMuGWn8q2cKvy7tyabFHhXSf9fGSP3uhby2xwX65XmJaE1E3dH9b",
  "key43": "2nzT5SuJFPBL1L4AEuPeGRx1QNCs6bwjn64wYfjHB5WTLEjQXCUepghXD3MASk9WWM2ELpaGPskkBrkYbMP8Jkuu",
  "key44": "3FMNc1MhZz5sAckxMQpuA2cwehBB3ShPjSpUXt8qq2nXAvJCihmyraCWXozqxhba9Sy1bMuLfYQriKyqgnzCNaqM",
  "key45": "656QFiom5hyArsDJRqtPLpMGK6iRuGymheCP2G24W7RSzzPqY43yx9mUXjPT3AEzPxoKESyicwrWv7oGSaUxTYyE",
  "key46": "oJ12QriBoSXv7b1G3dEB6WVoyvgJcwq2BCmhYedtw3Tn81zcZ2dhs7xZY9gT1BmcDkTiA9oDGh9zRqphm8Esc4p"
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
