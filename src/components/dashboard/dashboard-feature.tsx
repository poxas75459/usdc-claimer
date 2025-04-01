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
    "2r4AYays7uM7zbroQqZRKR9NZiZeT7tpaUoaPafUiAd78kNVkGHKcCnXtxHMqqzYVZg7AWL1VF1Shof2mcG8nUxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vdx95zdbXryZaQ6zFMbm8VXQo7XMStNMRdCZ6Lg8ZDh56w5mz2rDYS2f6LJ8ZWheb3wAuRvoqjhZhYrGJBr8psY",
  "key1": "33h2aZksuAZ1bUT6YoJBdDkqpZ7s28Kxhqi8iU57VoQFQWKD7Rxx3ABdm6qXHpqahyMU6F7U7bCci2t7hiEG2VqN",
  "key2": "3pCoDSx8GUDXAUTK5GxvEuMjNNKpR9TL3TJvhfdvw9qZXsPSWYjidhvsXaVAQE8eej8yn5WDR7Bif36yTcgv73xV",
  "key3": "8R9WfeNE3sAno3iC8BZoXRxHxHri63sTSeNPrYeatQRELUMBqpBsXjKL6gk5d4G88Qvgv8X4YstPSeK5DNiqZx3",
  "key4": "5yPqLjGknS7jWcFHZdMoFn3grk685DbTkNcZed3r1WAff6tm9VjU3xa42gC6E1UU6iPoHzLmn2UiGCReuRK3PWMG",
  "key5": "3TsXNmxPebjpYi7rJRdVvgbKBkEoX1dUzV3ppdCufBqBcYL3LzaQDEvyrq1VWoGkbETRiXaDGsTi8BDqfqcfRJUx",
  "key6": "5yxBw6yAuvXA4uVxvhHqMh2pa9oAr3tAvRCn1iFo77nSFyw58ByKT1hNkzFSA9opPgs2kzwc6cQXtUgPfnTUygQx",
  "key7": "3AicjtR4cAHef9DXaNo8BxD8i2k4Z58gHjsKG2itC2gadEQ6p7EV21aMqWRabR1PVUfb9BYTxwhjraZ1KrkUqiQm",
  "key8": "4iLHd7GbJ5nFTYy5GjmpvWWjGEoKqEjeosZJV9J9e9ohsvUqmiJ31njxhtTvkmSpASTxhuj1s9fH7YYbYx9DxuTR",
  "key9": "379HSgYrkY4C9PF8BHPiZTwdhKWkhcKgHqXu82Lf3JE4oZVKYg8KzKvv7dc3UzmqVyU2VXnwwHfGCUJ4p7HotwP1",
  "key10": "5JdXLsJ7EdGFypf7MefTPkKNz6pi4DpsLsQtrsAtwKFRx8H7x1m5XkkdbFM5GUuQHHmr5jEYAgzCy5f5RGtZiP4c",
  "key11": "DQqEimBFFUEQsZuK99YqjJTNHRXwxGB2p6DSVQepXfK6uc6NCYKs7JtscYQPaEMscBN3UfbgRhnN1tfCo14dD33",
  "key12": "3jpdqCa7PDR5ckAE6if7ANTwjQvsaVu15ZuBiibi2dDVoTdgiNu22bcqs9ARGtyQuckrXbNeSS2MVdHSPCDeeaSo",
  "key13": "5dJvnsf2RmqnJmKXZZNWMq4Ed3somCPgMWRF9cMC4tQL7fbnz29jfJdyU5JVj3TbS9khb3wBUM9WFWwkaVtdcNmo",
  "key14": "PG67zn97SxU1DfaMMyemFasf8zi31Nm9PzfhyJKL4nV7xZfRAEEDXbKbaDUpVySee7NGonfCCpnXrUT4ZkZ35Cr",
  "key15": "3ny4JTuVuLKS5hGB4ehwdU8vQW3hJ2Jyqa42TR8zXdFLCgiCme1UxFdUZ8i3iGK9cQD1yuEKqTFppyNH7U45Thz6",
  "key16": "489RZm4KNY24RGEGMVPgX8fSTURi7XhxDKVV47PBF31LZqcKjyQkRMGLrpLmTxRBJtYNSMxptnWXh3qUQ2PAVdfy",
  "key17": "2hWU2UeyCSnQJBf18TSVZxW8iLxs74M9AXMKyx2A2CoFBA6mnA8ZF5SW5bcauiK269DeHvU44BCcNU2EVfrnbsGN",
  "key18": "5E57Ry9yRzrCo2GKjg3FDCTh3RSDBjugTCS8PUQGAjvfd7b26UkV8n33dSrxYiiB4c7dryziuA4YuVQ67Cwoimod",
  "key19": "5LdTXaqfR5b1x7iKAx3THhJWCCkahBnWdTGbbmeoPDghs2AZGvKSRpVKaG75WFeBkSHYWEBvdqbvxPGTEtUavq1c",
  "key20": "5BwFbybrRQTjH4dgjQZDcLPUqhyqxXVNbPoDZTxba63MnH9iJ8odDTwdyrNrtuDbtv4E9mdo4rkq5SXACYKYVK18",
  "key21": "3ToQmeth3VRi8vfTaxWTdFG76naJzQeWVKJBKaSkdL2L5k1mQjN11EakC9v5Uxxk6B4VXaPpcXq1Nr6fwHcrSCLw",
  "key22": "3nBJzvwon5w8NfQXVG6y1LNcPTnjY7XuVTqxquVSQSc7okwwetk4RRdY3VDBoSDGNQJWhwZDBHeXhVBFmzuLrjPk",
  "key23": "2VNJHdbnazuDhev8PyzVupWnRnFBQ1ffYMu4Lnbn2yeWAbAwaZSi1gvn9ZpNsqGZLRimwti9NvNyxnfFFWhmnV1u",
  "key24": "LWfGsDYLgMKfdizSk3dx3TvToqGyEC89zzK836csdTviLHbfZx5hPT4FnrhaQL2TggEL5B8kDuoXt6Pz2fBcin8",
  "key25": "4csZyTfjenhECac4k9qHs3JP1WMvYprhWszp2jitVfVsqrNcAeppdT7wfWCWsy1iByyDgpzuj7Wge5xXGyGb5zRy",
  "key26": "3Q16VCucPfcrtwdmE5DaLLiPiG1sMPfwmDcSABB59CESdWz5xXQ2ZehfixHaLUMVobMvApiGakit9cCf8vZvviHW",
  "key27": "48dsFz7rGoSV5xSGM4iCH9Fn1cZvgibS85MXc2rTtb7xvhee79ZrNaSLX1FqxEmUzCTzriu8YH9d1z7aYgbbUmxJ",
  "key28": "4t91sQp3kjc5eXWFrb8V5yJCX7srmGR2Bfw8rYWr9QFjLVEDd7TsGNhAbCpkyEecGAq7tSjvmgGJKupLmUV6Ua8T",
  "key29": "4EP5turxFABYEKAFZZqvxDLAkmuumexEYx9L1oP8LUuNtgfLh8uujTvwibDEpZSwY286WHnU9qiNv3hpSaFZwDiy",
  "key30": "59Tq4cLt25MUuKZFDXYBcZ7tPv9qpf3yE6BZGWHsmGrm7paCQJR4YieJKisyipBXapgswwCT74xs8vQid5g6iYxd",
  "key31": "3r5WsU5Y2USRgYmrzQ2APkeV4g5sETq5CCom17cGme4THNrv13jBuWdduGAJBt7UxS1AYaJD5P5gyxykJPRtacLo",
  "key32": "3jh9LxX2JQwu9JYuihUTdkKrXZXA8MPaTP7gQDofwWk6VCDESD1gdcLQbrVRR72tRtw6oh8MAjoSoZwsYof7B4d1",
  "key33": "ffHvZEExi1LMLrWLYbnxQUiLixHyxee7se9SpLKxTsuhvhJWPhFaVXf42E2h5xsdQsotq8CFr81UH2hfb8VcWwM",
  "key34": "5yPDv923okfYHWwM7Limzcxqx7RGvi7qNbFML5M4ajDsSmyWuAiBH26B1C4tBLccibLapsVnDpDbgy6ik5p1z8sy",
  "key35": "4ecracbE1ABjogSeAtSC3b7CBibgZMEvuMDHnBXUTSfgFcgYyfqS9XoTa5952EsaDt7Byt2VHAY6GFQtwfa5iETp",
  "key36": "4aZJMB3ty9hfUggkSTV72BBp8LwtyPDbZCXEMfk9XXnF4DkxTdFRZN41N41y13E4PUCTVmjR9TuEjnd7qPtzeyjx",
  "key37": "GzXBujdXiPCAkur73W7rCUNuyeaPAP1zq4WDpGTP1wQRRYvq41X22a6R9a6NG4DH8FSN3bDXuXpadQNF1r898FQ",
  "key38": "4m7U44ZtUEnFL98bxye4vZ1wJ37Tb2Rb67BjtTZVE6gVXYt4MofDcybV7mU9k3fMFGLLtZUFjrzBb8LfRMxfHvFd",
  "key39": "4MQupuJEiiNSy5xejoQwuRBaszX4YJuLbTz2GnuNWGaQYvU1ebn4xNJWroTbuQ5L8zUwnvS2Up5dKnDLKkcswDkD",
  "key40": "3rUyfHSxDYoGe1ckwy5PiHcE8LvyyTumdCkSMX4pozkozffYqiiSfwNaUmozcXxN66gdbgUgLzRtHn8evrXkZPFe",
  "key41": "3QFZftNctede1oRm1HZcay1ypBij8HCK7wzjyg1WZS5mScS6ydyCiMiB8e3ymtBewvkFozK5cSwAshFS69vo6Rd7",
  "key42": "4kFVjgbV8hzB5qAiVPBQfXE7Ctn2o3MuGHnX9SkCwXCTvCHaZXVwduEwPManDFyAwQrWQwt9qv9XByc7riMpH3u4",
  "key43": "5yZni7GHHtsZ5NJfEnHMitcnBCzAFLThG2wqBy5s5qaPniabwqcxm5vrfbwszdKpZqZcGcSU3GZQLkhSRQJ3R6v8",
  "key44": "2Rbkd6UcY3bF19PkYRj2q4xQT6n626HHnoJh1hSr6t4uVeNoc4NEeVgJw1qC4QU2pAaEqspkLpXSBjhCiXTNpmU1",
  "key45": "5dtgQzQmtV5zpw2kvMswKDwvtZj4SjXQ7TdDg4eiKapPRemVYZHtYdNoq8hFLe2BrsLXq8oSa8TcYSPjLALFANqJ"
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
