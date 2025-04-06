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
    "ZaSGa1KyPxvv6wi4vrWnJM3SjSv7hmvpiCNDGFeY6pDZvHbr44gpNyj2x1w5B4t46dNzG1miGYg8679zVnxdVs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XWxdVeGBiN8yUdm7SJ23EwdQ9FoH9wsb1e2VFBfD6sDXnT7tdfoFkC5qpoxD3LNvbmJMRuJ6gouAnd5vEBw6EXZ",
  "key1": "4nPjNPcHHwsC9jh26biN4Ft7eURupcZeahWb4KViqctVHyoTbLbWawDX4X8PzwhZWF42es1JqmjQv7btivZbnurm",
  "key2": "37k36AYduqPk3NjQC51ULtsivENCwy3L9sZUf3fGLUjbwKqZPtym8epDxp7SsPcj8ZLiTXx1mLpv86kqxbfXvauG",
  "key3": "3WaVyh7Hr3XUfCLimbTp2fCvFeLcxxvuhdq96es2HmyB9Cvg4thQctUbNn6HArZNm2P7WjgNz7aD1N6LhhaxiWEn",
  "key4": "4Rt8vhNHYTodMc21gE3i8XLuAB3jovZFjcetxsooRdCtikiKudNvf4DT8Z3p4YG41TGfpLxZeP7Mqh8L1Wc1FXQP",
  "key5": "bXSMfC9Gajwev6UMhnU6D6tgfgzG9NidhjLGNPs1F3a9YLg8b9eaFKPWc3xhXswnB2CFwtBxvgZEvGnzYGqELcP",
  "key6": "4feoJoq4SK1WWJqCdJKE7HGa8teAPCQJD18oj3hpZPnXMes8wLUZAtVJUtydTTFm17izPmHkxrvMkoXMLogCoQAY",
  "key7": "5SZGUuzSyA92vogdDFkhgPTejMxCRsAFms4QCYkovGSxh1aprdVwnPwenJv6NHiSrJSdQnVp98s5SCNQJtt5UBu9",
  "key8": "2597YeGV6WvX5SFWCQzLL8tSm5dtWQhoFwqnJ4pHWTegEyvt7pYzaxmuP9rKdxBkJREvb9J2vTFAT99Rb1NmmPx3",
  "key9": "57vMq92SUgmghKeqaZ9QnmfEVWLcmgmXeLM5vQ8peUSdwpmYN9mhChNyhNYEwWfyDmzgMP5k8YwBPdM8N6HwVWif",
  "key10": "3AWdrRaxzNbAeFHET3R1VVvC7tcEUoBX3TW2NZBr4D5mC3rseauN3m6Wx8njEUrRVgXp9xwEEmfnrTBgwC68KGTx",
  "key11": "3FXTryKdghFcayijx5oK61WAdTcQ2AfYjzT2B4Q6ALiuFJ8VuzYRZy1sW24wPW98WK6pzptcygqeLXTSAF5pzsUk",
  "key12": "3fjSk8wGLgsaypdS2Hp1XKiVTx9nGtNjqrzbG158LRjfXhkD8ZpXknKKX74hV7r7DUZSdGSKs92kPUH4DqePrMzL",
  "key13": "3wPR3SPgYBbhqwbZfGSPTLPcBuXE4WJj6F5GFSPtJ28nuNmVuj1xi5rueTj7y5WJvxjwSEwQZubkwVzK2KgMvhzK",
  "key14": "5bRjwSro1t6nCfWbGroEMvRK1jMLjmKLzR6VB6fm1ikWSK8cgPGc6cFNTWfVMx5M7WhaoikrZvKFbPXbJAUe4BSR",
  "key15": "3GyjAVSaCkm753Tpi6guZKQ7Vkb6YZ7He69Eof1DHLYfpwtnH9jgG9N62RBpDCwTkPekPVv6QAnLP7GLy7QsYuQr",
  "key16": "GZoMpebuRMpaEEyJdTMYU2hF8LasVZPhy9sJ3VSQTz4ZsfyFc36CzPQMazaQiZyr7XAugVbFbMrXfrN7JSrFyaj",
  "key17": "2hJCVt2L18ugLXvc9jgRqQxdQu3EVRJgpyb5zoZ2vzGJ7GQYbj9VpQg7MGZ1mcZxVuhLHhvfnGRRm8hjBAfPwjvo",
  "key18": "3PtRaovz66MreEKfk5gzmRuMiK39KVanAykF8PQnX1VeMuMGfoX1MjgFRpFcTPBiSyhLhwEK6N6br3rAPW5WtUT8",
  "key19": "41mmKEhBbTkuQoZJi24534MxSSNhXsY6YwaNzgksCTLaBfp4d1aSVVcL4DvwCfRicSeuk1MmDXD6h2ay1xYD5h7m",
  "key20": "h9AHHvf3u2kuYBHc6inywpKAVFuuE2NBc3bX55DYdD3MgnDToxo8GHRqghFCVdVKoyT6jwuN8oYt3mMSy983znJ",
  "key21": "T1ZjPFpmb6gsx2KKUfc2hYizUkp6gJ6J5su9EpLP7zkvyqi8XS5CcdtQyh2xzHANMGBfP9nY1yY4gZuEveQ2Upq",
  "key22": "3H7V27UEpi63kvDG5ZZ2DnmoFRivkL7cKgsa5zeZwHqeiQWXCSWLKKETtUKWs5iN9oAg9smHxtamMLyu7Q5Vth4x",
  "key23": "3VrWyPEyi5AxwEhE6J74XS9i49Mjnr4UTFzunYrVtzQxLHh1tnM8S59cRruT9BrdogXrxwXYW3qPD2A5DiTHhLoW",
  "key24": "3fAz1Br4yt4Df5DJNooVgDmJiQRNAA8Cprn5az9Wc2U6zYZnWk5zn72sH3a94PtzaxczJ1opEihLV4VCpByf84Vm",
  "key25": "3oWoXUVGhe6f8SFuQbTbbKP6BTvtNaLubKGoW5nfwYeLMGQCHfhGHoq3EaSmRLuaKjHYb7idSTDfVwo4X5SmfQ9e",
  "key26": "5Gt2aAN62xrZdSnzmEvHvYYQmhG2xeUiY5DWLqCX2qaiMHG2pcDBWpDxpkUqqb5fgcGnwXPqMaonWrbjxgS1EBfF",
  "key27": "4Arp2wPWJmDnX8LKecNtGyLkXvkrr8qti19d7s5MRu6ZUtyPpFBN7eQM1yAW1165xdKd29SmwtwqDcZbTpGs46c3",
  "key28": "6ifpGfM4WENeZa8g2CTqGu61ENzJRa9dR5gM4kyymXZ5DwU9r4RmQd6yVK3hM8NFurxggCArPxB8G14HYrj654P",
  "key29": "2GUkjwSF1dQxp6NeA7RRGtNZNekMGLFsm2n9eTfby93VUxzZkZScyQBfZBoRh2HqqZBPEhn6UcTmxQWL8sy9dhrY",
  "key30": "9qkyk4CDsjVrbp65rATAoY5YLK7SatQpcY959j874aJmKEu6tb4qcfTkL1fubrcpx5XAvNzTdFX9EMmmckCXNUE",
  "key31": "52qXfQHGVdZ9ufUE2uqHVm3YMjdGTgiYey6RtnRq4BYv1j2WunjLYXmfJ6tnd523UWFfDMak9yoLSCVpVv7MEXGQ",
  "key32": "3y88iiK8gVKGfBm64rsWAd386WCgvsRJLjXPqSwD3WATvaPtV8aV8Wzjvtp8dtEit9919ciDak5Rb3y5iG4eadbk",
  "key33": "3WyR4qzCpm6AUCpfo4yjp2N4aJuc2MnRTrnkpjwYMm7E8boGtkd5dBAkssKykHhHXQspkjHKSLzM6QMb28JEwqwd"
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
