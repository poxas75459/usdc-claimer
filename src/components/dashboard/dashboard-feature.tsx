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
    "44e4wT7KJBwsm7HQtpP8pSoRPWvjeQx32fgop2Y938jx3ALjTppNiRuuSTASnqbixzkrREJLwwVFXPy28NyCz41K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M5k94yMyofebncxpfSiSLt6oLJJqvVufDLrHtRckcLbrpF9EcSmE1DUyu2DhtqySeCuDUdNiVeiAo6zaUMvveKA",
  "key1": "4DdvmYcELhLnyt8dnBXHDC7yJnQeYhYcbtXRaVdfbeYv7NM6czXSVqK5rK93Xu75EvY8zeZ4N7GXLxu86WFnkkSK",
  "key2": "49VE4cv2dFsup1tD9r1ykAyT6LYupJJVVfHSCqwuHbqPKNXysj6BgaPFn4WT7zQMJjz81JX1ttdLqLQZgY4gTUHH",
  "key3": "4J4GpjuMZ5NDfgyG6tUdZnrprSL4crYpwTQJXhDhH8Afcbn4dJ87hTXi7Vc6xzD2SxJYz7FJ5tdd5kXZ1mcez9n8",
  "key4": "5mVMsZvi5i6zhqy8aoHtmjwH6nH8EYFM8wjW8KWxRK8WmGrBeKnKac6bUNbo8xnhuiWw6g9rVG6oHJofvFrKknW",
  "key5": "3E4P5rr7oktGzMg8oLdLbaWKLCdXHgThxdLkot7hDGWwVg26wZshgx8H7eMGpQpoBLoWMtjWUX9ex9d1PDavKmZN",
  "key6": "5v7Q2eLsD33w12CPjQtKzy6CYQjF4hfByJVaMQwox5CJKugtPpoELdADcNt3K828xZmkq55NwtxuYo5D3BcYT2bh",
  "key7": "3zRH4W31vs1FJUnWizDydeTJhG5yEvdKUdie3NA56EgPkbuaXS3LZ2tVnrYE988fGys3A5NMxTYLSdDCGswGgDza",
  "key8": "51m1MP4fNkp3Vh4bbqvf4d4SDt74tkC9NsXEDkMCcqohmuB6HR5Mmr6L4EMFBGsoiDaSqc4BiFgeZ2Q9wJsGT3AE",
  "key9": "55Lvr2fze1tgCe89qfGBg1jdBvu3BEbZCvVyYfZDyqXKFR1trxwHT8k2K1aux4q3sn3e7y8QwXTiWtV4MmxuSTJF",
  "key10": "4Nb6aC54eupPdmmtFtLq7RhoEh2zBJ5FVJVQPDL7kUDyjz7fKtqC6uBJ62z1zmT9Hi62hNG5Z1M2MPRXQVU7MBz5",
  "key11": "5z5BGrBcvpmKWwrBZ7NJxnpXjVDbG8xEqiiJYYeGQRYbKTxhm8X1aXvdLSwQgMtVVbNHdhpEfDNZ69ABNXysGGgy",
  "key12": "4Lbxh4Xj4H4V9B8cEPrtQ7xYtJvZwbNgjhqCbDrg5APJtPZ64HKtigFrXn5UTP8sEzbTxbjFxTzyvYjHVuakV6LZ",
  "key13": "H65wh8DZ93urNFaJ2rPDt3qwTYV9MmdiekwzPwd2jGyuTD5HqvGRKGfPkiyBVHgmpijhFHg6P5Ez5sj6wfTkchj",
  "key14": "2Jrkx5DtqLKibn6FKCE4GF8iR5mJdBgYg6zSuxAP3ab2PEheDNDXFGikoXHDaE4xUhjtixcPXdGgNPX3p61Q6XXL",
  "key15": "3T2GqWjN6XcCfGVC7wiUCh7skE5RCpHfje4XhZ6xEeQ9egPWkBf3MMBD6n1tyaJRYjQHG7jCvtchnHhArs8fKV8j",
  "key16": "3VjKb34aY6aZ3eo9EMKDKoDL9DdRFoN5n72UiTpZEFvCJxDsnq8hTSnjSXGYszNGbZzkayfyMN6pQMzKmyD7kaSj",
  "key17": "4KibNdKpATB3qNuLS4YsND2LSaXZZfRr4Vv77NikQk1q9i4BmdFGj4HS6BYbqPcN2rVoEsSFJEp5jCXhWpEDsrX2",
  "key18": "62jmfhU4tgEEZLpvYxLigybL97YfbxQEmGpbwtJ2uTubJYMmrjJGRdd2GxAiqp8UBvuFn3NeDFKy6XRx9AfUvyFR",
  "key19": "2SrBv2475PdSviyKRS4H2QdjQjpY4wLR1THGQ7YBKDFvMrALRcqtdq4PRz1v8xBZ7E8wuZNhAsb9YVtVByk5jwx8",
  "key20": "4HZbdEiCMuougGmeSAhJRLJ9ZtdqBDaanczG8JUSaeifacyRP1RRH7T3r1qhpxxs9cY2CmEDqf9YqXqjpLvngwoo",
  "key21": "3aX5a6imw46DtKc8c6ydv7wvTrwsZcGjk7hc7pNUfvizSr7wdTS7dvKszT3a3Zu3SBvZ749TgLDfesMTS1UWh4qh",
  "key22": "Pr1o7t384GsuBjX7kJdg37RYkUGkYHgFm3PQrCjt3JhfBJE8nVVTM9TUDMnqtbwyVuishtbCEpejkV9FSSk6sts",
  "key23": "uQRUGiJUSnyupCVHiRFzSMTYJTA44CPKN4MHcbmRvjm9wb4T3G1vs1278td5ixGKU1cN373419wq16D3dcS1ehN",
  "key24": "3THD8vgz6btu8ruKuRJPCrWoDjFHZw4UWu8gzX6SRxmes1H5zGBQ4dHVk2pVVKjcRhx3ArVVPyvmwNdz4yYsKkYu",
  "key25": "66esMeA8HRUY9ZsM8v48EqcpBiDX5scFyh2ahocCNM22mTeiB73RSF29xe7H8RKd9A9bL1wuUy46XLbPGEUmiBXr",
  "key26": "5MhBYNbcxkKcqExsqD2PToJUHVQF35YvL5f992q1XKEtA9xxDRQRkMwAbvaF9wisWkXS4BtFJ1N2Ucxsf1ySgxg5",
  "key27": "5Cejfda2pUS12gY7B6ArJb4oN71beCbP6MUgcUJbUyVEcrZ9dhHSw7UEoHvH4Wbyu7tdtwFQZhFef8wcFaGAjkch",
  "key28": "2Td3mSZfsCU61B4s8FUVHrTV38kNN8YvHN2mQhzhytAbSyJyosVUF8RG9aYsnfoXGqeu2k1njDX4r78feeH7RXsW",
  "key29": "4ARGh6bPAKn1GAFxYmqEd6Pe3rWiajPhwvmnFKuMsvoncsiXS2wGBr7hCDFpiVKUCWeQRt4wwDY3tQp8sWzntdQR",
  "key30": "DGwJ1ovjYnaaYCNyAZWVPN1fJdN6ZaPWq1dyTuv1tJb7CbMfJTWcvRiokkufJt6cgyDENqz6qYnVmsvVYF1nxSH",
  "key31": "4U2SNRCP6FjWBiPjTavBdm2qyJobTPscSijXqSY8LTbDZYgWCnewSeFfr4q1Pruuonxkcai6iA5hWz43V7dE95Si",
  "key32": "2dpdDTF2hGdRe4RdMK4R7P9YKxLPUUBWvUtKHRna4pK1sfQ6hLGb4TM7C2JKFGX5RcNPufEG44r5QC694jFn3MdV",
  "key33": "2bAsRfqAMSt6SoHzmSeJXrTiGKTP4oKvXgii3RxiopH1kstS5Tamg4BxqWpTcrVyEukaJMcqQZ9ps2bCiiPcXHx6"
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
