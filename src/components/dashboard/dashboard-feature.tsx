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
    "29n4zookyGMbEdexReLHfimGqa7nryL2hwVDJdPjFgNC7y7736h7wYXmLUVbGgea7CccEpU8Sf4Hqnxo7Kxcktp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218dxqXEKaWkChsZ2Mof7P3qqfXYqco8LeBUeGsVhp5ESv67CFunsUDyDAJvrC9bTy1QFW3Ypc9yy1TjmyQQSRwp",
  "key1": "57odWs91U7UpPFVwu2tNunkEwZmYjT39tiiemcjjjsbPrQr3bqsR34iZSwM1qKmtdrrMNywD9Qz9bDF8B19FgREh",
  "key2": "2BZfeUzwR35pxq54icQKshHcrSmhyHq1oSukKnh6Jqa7uqPfu1gcXe2uev89ZHpry7msVzy5A6yoVoN1GiHmY6G9",
  "key3": "2584NRs3GLnvWCmuKhRsMJLFMEfi1N2jxSxC2S56Ruy2gvHBxs8sDvG5vcrnV37ShzqjToPXNdJboF3XWHwntN3Z",
  "key4": "5NChuMXkKL9qWqL9NAWykXQxVyASJ6BRmTJS3KCzw1pjKVnhUQRhNFP2KkoqVMoSoR9uZKEw14n1im8xpNEQb1fa",
  "key5": "jT8FXLb4otFWeXnXT7WBgCWHCepCKSy944MSLzfdfCeDZsdS6ayLswsP2avQuk9RWq5VnxJLPnX3FQ3Fg75LZ7p",
  "key6": "3C8tivztzZoiyxhUAMgtXeEa7hpk8TVuMFBLx2SHRXW5SNd1QuZ8AYWeSVyPvTdEePVcAHVaxj64w7JmousVZDAD",
  "key7": "4W4VEnCWAJgRSPhHwEGaeMTS4bAaKxg5pfaHWuH79oeKKMDthcVGNRX5xAS7Hfm9YVVuhcz9hKCaVNNJABvCAFJL",
  "key8": "3NMuxT7hP5X8gJ3ib4aBppwpUCtBumHdxZV63jVXJ4jGSkUZVhsvKLspyqvWgXpu7x7dRN61NVpLNYd5WUnTRPBE",
  "key9": "3MCVxVZTRhXus44ZR5mLgE6VTU3Jg4yLuVUTiC3doTZsEz8k2rzpGbtmAirCiTiAysJkto9xbjA2yF63Fjg5F7Gc",
  "key10": "2gL8wkAzkYj5HNJNwTCQHVSySEipsNayfHFMGuPFWmuYjuKeLdc22X5hiM9qfnaArinQXuyT7GeAWGbN3ZknNePm",
  "key11": "4rS5hyycMMpAaCSr2HF8ao2kh1QVS7oTnPgA778NPVAw7FuKkvm5XsFH6wdPSWjrdENYR468ohveUJGCLvNCpz92",
  "key12": "5V882QmEUz7aHup1QpBp1nUmtM25q7aSwiSYpHdQA3uGjsokNJDp5KrJNxd8xWt73Q355WtkqHTF1JqLtgYPiMDa",
  "key13": "5y9CaZg3j5PVDGLhUxamjBbLjEQtyMcchsFmjSmzGsAEJntibiJ3Aj5942E469hCLTJHBkkEyMN9eJR9nihmE77o",
  "key14": "5azyD3DANV8EemWYcjJ1S1JvU2RHwsQxp962D4n1pVUjNP7FbWe4e5oGtBThtTfH1pL1h7wuuqqWnqpABh6CKKik",
  "key15": "4GDApAMGqWk4y5fw2ieEHazx6AbusnrvfXyquPiiT2KFne1ai4FP9yx1tVEN3dqTu5x1LUqNC1s6Gej28NYE1ENu",
  "key16": "sdJUUM2yUQAVSELfXMh5jox8wfYb6cJphHphC9iqrN3gkx6ceb5EfRPUm6LmfHJwH1FBSHJ7icPDM4jzQDpS4XE",
  "key17": "5cbXkEdHd25muysL6m99Y7zCfJmUwAamkQ7S1juH8BqjcmnGYTWGTJszQEs6cMGiRmcpDvpzeRS4ZbG5X1NbpWdx",
  "key18": "3PtnwiEF94sCwKHCkbr4mnSwzWkwnZ3sMKmaGrTqA1PL2SEPTdSop42ctD2HBfwVNZDzez1R8iiGaj62rrzqhhRK",
  "key19": "2Yy7nTuPxoo6yV4tQKayQeSXrn6dpBQN4BimDTSnw12PuHb7DUYVvn37vb3K1ABUYCadjwB9dZCLfgwxtMu6Cbyd",
  "key20": "56sK1f3iq59VmJhgr5cXAJjbEHTvg6iYNZtmnSFWwKahguSvuvhwsZjPYUn18qtt9FjJZVeGNhdTkaAPVxsidVCq",
  "key21": "2J4Mqgh2qD8JBuEmAvdfTWvMESLgDXYryqFeXJ9tR2rppm38J11U7K9TBcyn7ZGB3YmwTRjUXnyXpGsSJH3cMLxD",
  "key22": "5FccQQtjyTNw924TUDDA17JoRmLaTY7vCHWrbZEMbWDfNp3vCpWDy2w1EVQ1foW6aoX6aHDTvZ37V9n8jQv3yntq",
  "key23": "2mMG8bfEaD9LTRJZtejUJP69k3Ziz5vTCiCtBiYM5CLDxqabY1fvsi94WaihqAoFjCpnNvyrZdiWJvWaYEkdBpDu",
  "key24": "2gQ4hxKhdnoqZxgPPa3WRLkJA1PVQCz1aKqtnAonxaCoHgV1mxnPGU4wTcdYXMZEKMGfFuGUvFo1V6bzdRntPScw",
  "key25": "66gyEsQRecXbqttjKz9EooyZGSVYyLZrxzSPwRyeubxj93Y62JvCsWthEMyafC3PTwZK62eGmCYAQytdXuTZRFLX",
  "key26": "32tYd7KK7oE7yBWUW283BmCuiCrZqV53A3SR7iUAAtmmdCcbPnczSWueaZU7QGRAVH3PpfysvPkJdwfBFUu4yVFi",
  "key27": "3YRthQo5DnWNpuxLnFt7oaLhLDSGn6qYVy2xp697k9Psz82kWqdhqLUYHrAuQBhtQkhxMMRkjrjrH3vDfnZ4SrJB",
  "key28": "3EemuqSQkMwV6RQoffNJHziZz7DvjVGVzMiD3qcaDyhE4LrUsTdrLngzyEB3askisj5WAysJ8o3aebz99xPmiUyG",
  "key29": "2v312dbpE7XdPHMqFmpJNH7vGgion8hCVq3iPTHsTcBwwFQDGM13CtK4PsrkYHLHq1K3GkryS4JjZidCnqboap2x",
  "key30": "5BbhynW5evt4c75VqMrKsRi8fRcZB6jQWAUr8wqBDUvRDnQGqJ7GhrENc627naZeRisTfA9N7m7raDhjWoCwUyr1",
  "key31": "4CF8aK2NUievmXhRyLwDuNrD9x5qAX4SuzcTB5T7cURYEBtVAPauhiEjyKzYmw8aHE4wkYTL9a24WgpBMqS4n2DA",
  "key32": "5moVsaGTeTK2YBP9NYBC2CJjkkqcpQrSrDfwQEKikBsb64HZ4GAMeZsA857joS8622dAU6FPSVZ7MU4WwitZ9bB3",
  "key33": "5YEfBkgBaHk22zTMrBKbYEVj5vGJPJJ5Fe5wdz1TNfbThcBFBRLJfz7p28NzkpNyFTwFXmMEHTqahWWiaRGzQYZg",
  "key34": "WnfmvUZPUsRfcYfuskGGXizPjyFEJWLWbzLhuqApDuXAExVYA9duX4XfeDKx3F31BMbTtoYewVZfCKoEN5MFkEX",
  "key35": "ZJES9Yk5sEgY8kDVFMx9BJ2saNDEQh2rEVNWzzXCLZ1mMj6apcQRtSHUoj2gnuW9fnBtA7XPHaLr221aUabnxoP",
  "key36": "3gDNJTk2kHtCwmGU8odr9f8ytFYG84zEHjj4NEGgF8pw7nQE2PhoQ9ajySi95axsaVZNMahyyg48xaF1Aafbt6ro",
  "key37": "G7wTFhx54YAWLzsWjecJmsinWkai9kf2iyDSkSEyPQmm8Chz1zzm6QHvbzi2sQ1LKYMNY41wgbnMY6myFECMGaB",
  "key38": "3dWChVCPaNVCprjoia2DueLouPgfJ7x4HqfbA8FadLaaQaUCCCu3Ko2xxMxz1r1JF2ny8F8Whrj2gn6nhBtjfPCn",
  "key39": "oikinxv9ZbGDZNBS7Sd6LDUGcLLp4Lzkz8QftARgTZDgJjYWZZ66j2VnvZhj9EJgKLLJ8A5G2uRo7ApxdeWTuQ7",
  "key40": "TKuNiaG7mypk1Fad2TMGqRbL4xvC3HHhbyabQfcrsa1xJbyLyiSjVVgi3XpCRuQ9DHX6FURQpK8DJLYWxM85eQR",
  "key41": "3osDGHx9xT4ryxn8f45Z9MPUk3SkjhKpGAhZ8a7Girapr9gh2Fo5XZVdTvv2NnjpmcxCZsZ71Hf1oMvLQ2MPTZLG",
  "key42": "xunwSa4ysWYC4PS2pGL2wVN6RRdKiCS2hpenePa8suB3sEL8NLqyjYWXz58uB3CVjAqj1ckt8YqNXq8yKZP2DCg",
  "key43": "2UGhdh5BkxqvHdVVo5Cbz25oRKYCHMKEZQXE1jb3FwacV2KiG25AxJ3RGwjnwatdiL4yjEMEB4E734VGX65GprdX",
  "key44": "4DgyipqU9WbAZo28qvsEUj5QYG1JRYgenrq2MoNYQCPyKhDoraR5CeqEP4pCEcjLrQgXpKQKwqcxkugb1zvDS9sC",
  "key45": "2cNGCJeHVHCyo8iiKCnn1uBPREZQG55apJLQ5a3Ui2zXGffo6WieLtD9eN3cNaAB14fkegDPEzkaFnfyrBopSH4z",
  "key46": "AHPJeMeFVVZeAs3PWYBMVTnLAnj1oRJoYSfA8iHFqeNxvP3mBX9zwSREw1EsAsvSoYVQE7j1ozjdrZgtCdEay3H",
  "key47": "5pFUHSdZw9YsBK2iTUJ39zczQwyfJJUeydXGUU7UKcjJSGzxYQ2HLPNndrVG3rBLnzYBDS51np8oaMEDWTCgQmN2"
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
