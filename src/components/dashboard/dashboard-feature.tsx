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
    "4hU5p6xEMFqURjmMfazaMyZrV9PGtxiZE9tZYwMgEoTPPccFbtznzL8iJ75EmWW2YxQvpLr1dsfQCAjiuyAH5Cz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TznzXitsiGbHM4edrYQD1PRKFn5a4HkdP27kJZcwcAvLtbxvcmxh6LTnoYvgwURpVbHi9hfYyhosyYab84pHLxw",
  "key1": "2ybtwuqnybFJkWPumD4V8KLnzBB7tkDgFcAJo5a2AcdX6EpkyhtT8KtNQQ8pozCrsajqx7zzkDmVqido5dZtVrym",
  "key2": "54tdzyGmciHouVGMwGngDBLUkhowLH5NPLTKXRTghb6PqwCJuc8aaXPQnPtejNCrTpwA7YNDpJX5Syq7gpMW1fGf",
  "key3": "4RktrsrVVtMMVNS5mQxKEANkgnhGqrmfwHdYv6X2mneTg35BegAcB6Qx8WJkWs5otxUfUbRTVzKSTzWbM6trnhFS",
  "key4": "447vt9BmBZLYuZJUtTS1desF21zYyYFnBjDEnQ1xZkvSzsh3f8unipksNzdMutyNcCtgRvGBFxEgzEhrkWFiKTy2",
  "key5": "wYWbjoujHHuA82zrtvnuh5MpEoYyfxdbZFQamYaWcPs51E9HMPrkRtdz9EGyfWdrGCZVKt75AH2gHxJAF9bb2MM",
  "key6": "447xZqykf1cmUiYYhnwV342c9h7nYQhVhUmQN2AJTUAYk569nZXmiGBPRXQcHxcXvSZmfg4YwAS1JCraReah1WZJ",
  "key7": "GXHJjpd447cQSHyQtkFuxBb39cEfWn1qVvk9AcRp9nuetR4eTLsHhsZs69iVfhLHwPCPnZoTzLFT3iHdTeQrrY4",
  "key8": "44hQCDFH9QrjW4ZdUcRs5d8DBcYfC1N3QExqVtmSduoRQfLqCdt2ZCGoBY7fFXq5bkQ6dkJisCn5QWndFjRcw5Ed",
  "key9": "3GrTnVT4WWszGea5SbxXLb3KEvkbcT2n9MbUsWCYeLSZzD4BZKKKgZpm1BweujVCGvVocp2tSk3P9vnsrYbMdWEj",
  "key10": "4zLakt46FefwxFJTdXHTNL2wCt8fPucoxjsNikZqkHq7HLZJzLgmRAqjY2Myg5YdACBaAtzZ6KmaFKYhTChASGrD",
  "key11": "2qkGvmULKKjHpU1oogL7oE9RZw8BfznFaqVSa2ETShZLyyiDoDDuMN5xGFcX72wXwNPjCh4HcfitCosmS31QWqm6",
  "key12": "2yEtrRV6veuXvh6p1FwnDWD7xq86hkd5FpKP16p9Wf7oyRzXntoe9ctd7gWieDnuxYeKLyMjH5VW5Gz2eYvc63aS",
  "key13": "3Pwz1aHQqnCf9oxEP4YHMFQrBXsk9RNKbXwxnnqr1Gg29P2dTWd3c2CLgfXwu3Evzszy3KvJsgStRgbf5wsjyaS",
  "key14": "5YbVeo8ZhAdtHEQvWhtLG6b5AkRkirxsvK4Bt3trEyJ1TioBs8N8KE4E3xxrniC8RD14Hrpw8jFj1W85weoaYbPb",
  "key15": "62WoT6EG85eo8qFo3Hn2AXot2gjSsPhoqK8keYq81HxCdCu76EQ3AzSC5aYByTmtiyePpDp93YpAxZ1sysPswKAP",
  "key16": "5NBqXnf5hQXycbKSh8M4rHN6VninV7Gz5TqQaTSsqEv5u39P8bZAUpogQMKdGW9htXy6c8zrUpXm1dLJDsCz2BBW",
  "key17": "3V5dmcw6LN2gHCZp3sACJrPUuwCftQfFjaWGaPHtyVuy9jyb4G27d8uBVJLrE7x7H2D22Gf9cdZszcDRkajMGPcz",
  "key18": "4SoUaRsB3nF5Mow7Y9RxZ7awQb29CzrMdA1RJ4nk3zSxVp66fTAzFdxFJjE3SPhh6GXAzu98Vb7ZL7hAfqVKrosE",
  "key19": "2fmG1bUujZ7PyYgaHsTSkgJAD7yVXCCDtewWgJEVazkrhcwTKvUH3EAbksnJEQryHFeum5WAcb8mb7QaQnUn8nqD",
  "key20": "4uKTsoBvVqUkXEBZniKF7o5cYpJvpDabsYEKXihuAcsqZvzrHGaUmiNiJU5bkjiZV4E28SGYojaBEUWoMMsZxBBb",
  "key21": "67gEFYbzgEDbktJe71yiEn3tyP76qqcKmsTuSeLXbmhy1RK1ortRbbKowasiJGJYqBDRyBbM3qVF7PZ84agF62Tb",
  "key22": "5VdrWkqLveEZS87nEqWD86bunsaekZvMuonFhpiQAjVgZhAPP4oyugh8iCEcvsGDm8MrHTagzUca9V2dhL7GoRSe",
  "key23": "26aejL6t2pnxfWcKB7XKne45RkXTsnU5HxWxa12HZ4CCijQ5C8EDm6uJqbRtEq51Va4s9siHPsh4cmUGVqo1F4in",
  "key24": "3wj8rCCeNZXLREFycBg7jr2hEcxVPhrxUQVmYRpBT25mzPWmX3L12CPGichuVkP8VCL77Etk15vKPyWyPZY7Hjye",
  "key25": "3be8aHieS9Efsx1HsvRM5X7HuPbMVarDwwrrxEgNV4wwA9ij6UcfgYEvKV2GKYaKxcRxopdNkiZj1VHzYcaLhy5s",
  "key26": "4F8njDu4dB7PTjzGGd1rUDuzuuaNFWeoL4Y1xSJtKu5vYtZX6mwSwrK4kJBehYCKfe7x7xAb4nSa2FAM8iHeJgrR",
  "key27": "33R8Y38Y21Quwvhs9ySc5nNN3Zy2eZkJnCjKHmhXgzsQ55Ef8fqa4q7K8DzChRXrUV7bJeP3RyUkqoq9h5MSZwXi",
  "key28": "4k5D5UHCHck5HRuMMtzEjJv25EYeTx2AEQSpETpjCsbELAsEs568iMxR7EEKZgFouF5zh97kpCyTr3bF9gqD7NyG",
  "key29": "2soZ2t6jVMqXEacezqqrGFVPz3suBMTVFzBYgvqjnYhYrNzXzE3XBWvZr1adFDFX8FmtMvNdpX4CR4CoqrvQs2jW",
  "key30": "4LBFPXWxj1ijM5YCcCjzif46zpBRkoGTfV35A5yDh9BCTq8jnyEBUYDoLX16mDhxMU7asv1oumEamXj5ATcMZBX3",
  "key31": "3hwBej1YHGCZKC5Vs2mTRUr51KYSxhiiA1CMaW842NywW1i2yr599kEZG8cCerivBbknmHYyBKevZre14NDrpJoS",
  "key32": "kFFqf2BydJa36ySJQZfWv77xcccDecUCogZ6zbzNnyivLGDmKNJj8nsj81RNkSPbySEWaZ5NkKbnhxH9bG1p7ug",
  "key33": "2tdx9R7LEgK8T6biLji7r8TxQVj1fynKNTSGfPDz7nHz14pimsKf5wpYykd819TXLkvHXkRi7wV9waV4gLvDLuiw",
  "key34": "4ggcApSyiWucziJktgp1NDDcuNcbTRy7i4obDQZLu8pxYBNAMB2sY4Zucg7fjf95JXAkbaApsgs5dXbMDoRs4ig3",
  "key35": "3FztDopwRajMdUvCrBpFEV7Uq2Wj4qgmQXqUf9CFtRmi6M4pvyMPUxQVDNEo9LvKpR6eoJ3rGtmVQVu2eWJH4kYZ",
  "key36": "pzTa78nYC2y9o41TZE6fiwmq4SFdmNWytMnD95ue9mx4y5kRw6sDK75NWJsMbRPmdKbYtWxVoSGoHVEcTKeuvyo",
  "key37": "2MgYAnzghga2zesx9V6MNh3DMDMVurworDdQMkJF6CXu8WWaPYj3NGtSBcyR2d5RVSTZEh5AdYHBYF2eVR2tWkNf",
  "key38": "5AiWdvfWAwx81yszRxgoKqWhYBombCihw2VznZDGpDtgMSeUboaj3ygjEaD2NUvFF32EkmLeSd5hoj3bXkdC2KTs",
  "key39": "CF8ns9prYeS3Qoegc8c1fA2dAnibxvfkf8ciyjd6KuMLiUgdz9kXSgrtgCQPyk2jYHhvVRdmbHcBaripHBZaswi",
  "key40": "2xYTkvY2YXXA2UVtqHAxUydxZyWvxYiqQDVNeb5Gi1AbdncNdSigTkpigbKvhfQskNikgp3nepkESmugTS2Bv4VD",
  "key41": "3CaAWEe4X3VwSRCzg4WTetKihaWHmGEg6Jh3YMVmBvwwkgTQ1Bs7pEY1oM1PfeDpiPDQurqJQMQRh3argZc36yG4",
  "key42": "3pVvxMawzkUSEvujbATHdu5hP9hXmhHV7cbq9ChLmbubxVns2Kxxx85S8VqtsiiRz5GTXwJQs6iDCqfon1VRWhYY",
  "key43": "4u6SWLNkyGENy2ujjNZHibR6QzQRXX6LeSGMGho87sfqKGsP3JYKBtAuQrJwgNHncDmkxqMq9J4vbFzayxDkAYrP",
  "key44": "527N2jA3wNfdjiaRyiERX86CDPCjWex7e7L1KCfG9nVMtxzffLfDFs2TXBx7baCgNjdMZdJ2DVVWMxqf567PSoRk"
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
