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
    "BJqnH4YNBFFSrFd9rhsfL4Qv8gj6V7GDZhPFWmCxWZnrfdijrPm6nujVQBK7h3H2RVxUhcvawQQW7Cprk4ATvFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GRg7NnBvo1CPUXEbZNLc3nTmM4T3S1ibxT2PtujNeXHca5GSEKX9QkTcg7VMzZ6kx2FnYupV3W4S6rx9Uod3dLH",
  "key1": "5gHAV8232tv5BEuDdKtCctmuBgvQTwtyPmgstWGBMt9yFp7gSuABbLKrFTMjfKt8mW5AFoVRa1tkLH6oGoihMHj4",
  "key2": "5BRD48bfLoPT3V8Nf7pDbPo5Skdcb9N13249cvxHBgozuF4Vqh3HEoB4FB3Cc8RLYFsJ2mEJiZaqonyLyCqRqj6C",
  "key3": "23jFbBqvnDb2JJ4LGW8p6m8oxE77RuqHtko89qwgRcT7D98H4wzhaRSwE5QSnmqUHTH1AMja6REF46HeSwpDG2W8",
  "key4": "i7oPKeBQG2o11fHRKyL6CFdPoDvsSDfzKBaXbAxxdPTVcS4RFfZLkcDzj2VanH7LBp8jxCengVCWvqoeS94Zjcs",
  "key5": "VzoRpaoHdQ9ivmjzbEFRdUGmFFz2dbZ4LWiAJWnF9jkEAFjTkYnUfLz25itxvq7WbDj7xS3UyERkzoAnsiaP1au",
  "key6": "2iqhfAmP7mM217kCaYFzqygcpQ74yVfwoqQJrvLuShMUSKC3dEin46r63NmfVX82fJUSWwVMEwiZ136Kzjkd5o3s",
  "key7": "67Qv6CQtJz7TxXWJtyso9ngg8urnJ8LgY6WLFWA7z1gsh4ysHh1J7Cnxaw93gkKxrAa5yGkaV2xTg4UFebDjYC7w",
  "key8": "5GeHeb1DFGRYtj7yBGLXTB1RSeroRqgrtEeBVzuMVypUz4eiQnhjPerzq71EFe7kkPFojD9Pq9SFdDrzbym79NxT",
  "key9": "3QM8oGWJhs7W1zHgWWH1J8sCz4GtgBPMaEFDCNmvwaKisQRk49s4QUhfPiqdb3AvWiMhdoXQ8KDpD1UuDo1pwAtJ",
  "key10": "66pEUoGpVMsipGM3aDYGBQNY6Kjo5Q6FDkaY4wa63YXVyNSTtzEdrA3cVMgHWBmQ8D7XgsyXvtWhzeVJQwyLbvbB",
  "key11": "2vgAsmU2aNuuwNNp9YGo5nBdhwjodTchJWCk8k5tesyZtSxdg2JgqiqYudLeCknrubrrgAJKuM5hDEYm6iVM3f2g",
  "key12": "2369S6opSVHSifnen3eNaAdk2f9NKv8iGw4DZiCA1DxoqiiekB8zG2ir8MzKDmS37aUJZUntg9jWp7DSWECsvWGz",
  "key13": "4x4XYrL34CG2GJRMknNHorEmHsAwtPtgJkvVj8MNxXKDgxHUJ4mdkpXDp4yT2ev6xehWoKAz2ajSrq5qhXxMHtGD",
  "key14": "p5oEL2LZDTf8Cu5tWafXQqoxrbNReQqLz57SCWUBGCxpFDzXiZPHNQP7TDwfFPeMkUFYszpkvdzEtibrqXXAkhd",
  "key15": "2RfLM2jk5KQrpntDnQ2UamCsFe8rd3WLAkdgmmqgt6pvcsKCiRtz6k1bxXsmarNzSSUB1wvvmupm9VifeYUr5gpq",
  "key16": "58EmK8c7KTKByS71eXNyusaJw7FGuYRLcaNLQMQ4dw3p6mosvEro1KAHZ893ZKpsDSC2rEb9yAZvqV3rMbp5xT3P",
  "key17": "4x5n69DYertJ1FTj896ZgGydhtbYvY2K8uTCUg5kkD8rWJEQLqCpWh58E1TPpLGvyZiJGt5J72jncL1cNCYZ9Wjr",
  "key18": "3K3yUhbZE1j7upsTmkMkiP2J1hLESDnbtNEMS1fdfmYfNfkLmCDZbX6NWrxRFa1VJ7j8hrksVerxQZBkmRHrE33i",
  "key19": "5BJSTQ5MsSXm2qGWxfsi4NUGBEB5HeMhLR8KdBo7nBWQUxGu4ds1EsKcANtEcXmcv7e7uqd64fox4e4umwcNhRpG",
  "key20": "5HgcrUYxtJrT3rvha7L3HtULXLkBo1YKTWqfM9PvvKbJJAktM3E1oWHHxuamc6X1H5i4jHzbstbYxeuXdsmFACej",
  "key21": "6thYM3k3bkwzgi73LczNcsHcR8Ta4FqjGPnQfdXCThkfvWHDsX78jzLtbcbwY13KSAHi773U99eZPLNgzrRhwz8",
  "key22": "5DXkvzDWQxaKQP2vCX3rvJiiSotCXfXdTstvRXCdU7scmsFLEQ7BuzWYeP94XYKtzS6zn47EtWczCvJMto2FHnTj",
  "key23": "5jjkcjACnyLcCUCjfgzhBPZB3gXmT16RHuj4UNUbqYjaBzK49YpGkBqqcn9cx8voeSKKT8kiMACECwpnZB2mgjrP",
  "key24": "QvzxuSeCeZdJGCTj2VfivaQebRANbeFMjG43Egadtb1He8gw99AmYLNupXXE8a52yJSiqtCwv2jiqLAXuCzqQYL",
  "key25": "31fpRKrbnJH4XyhHVGk1uvtsXnp8PNtA7QVGhQYh42opHcRX5iXoQC1Gcm1eDsY3ejHno8662K4XfHCksPHzgCzX",
  "key26": "32uG3mfYKGG5SDwEb1jNETXrUt2p2tjzdJ1FPtraFnKdnLJk6LVEg3ftnitPfL8eaCWxhqa7NiPVVmAj3sjHw4rG",
  "key27": "3ZPMWYKkZdnFoGjc2az4RRwxTXL6VGU4a9B6riBRuHWsxBZ8gVHDDep1rubQNLsx58S34jGkhw2vc2pMEHu2hAAA",
  "key28": "2y4YEkSfVvxRucvqbNyHZA8XJR6ZDgL5qCoLJqP8N2sDpY5qXYgPEj4WAmnqe1qEWhfaVaLViEZqMDSb7qSdYxiv",
  "key29": "5uzEqERnrxUi9XpTPXKernn5iPCG8eivTndVnkLNXrCZZ1E8LNeQPndJYeaYwyjxhyUNASm1hPbHoM6718A5DaPT",
  "key30": "5dNnYkZfNhyiprYrCQqCLjcDEWgqBRfrAjuB6LjYR6dchbYsjCN48xWjgGiAUiEYVJHCY6ijhKxvDeLBAor1EkzQ",
  "key31": "5jtZun6cXH4HqRJHqTiXEB2xpRYoKPU2amwycjaxxNgioC1bF2Fqc78maV3SXJ798pMWfHYBYbDGh3XPfKD5w1hr",
  "key32": "4bkqAonXNASdMviJP5x5c1MUQxj5K4TbCTH33AUfikDdrV8WDXcnpqZ8vQVPMp2UA5uBSYMucKAcXRADVEpqN6L"
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
