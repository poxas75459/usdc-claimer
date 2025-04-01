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
    "4Gz95wqy7ihqofKjmAwFniYrgcnR2L7umCvF8PxTRhc39D69o4JJNgbBkctHxQj693MSumVr7rRXMuMksX8L7pVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeS1JjKC18EcuGj8oXovG3gMdYpZby3ujFxBHc6UE4E9vqVwwMJqbaAeESMDd8R4FmqCtQmxMncwjPRdg27iczx",
  "key1": "3E1RXConX5YsEQTeNMRWSTDvKo5YaS7LXdfWLJVeXPiTmfsm9NB6zRKoWnTcLucwGZ7VcrR7mybU1S6QkhAkgpTT",
  "key2": "2BPhJ7DT3EaW5CuzukLMEGnC5B83wHd6R126V16niXfZ5iwYp4J7CsoFLuAaeSpWXrERVA7irv2SpVuiipHMqfiN",
  "key3": "2tD24MXH44JYq1Qv4BxGPeuFR5fUyFnBzqqhyTzrYcqSLasaVcXem9qXV84GtHAwCNXuZrpmf3Wu8cBANWVcV5s3",
  "key4": "3iKvMjeofqLeQKYfgnZM8d4C7WytppBbZ553GUPSeQvCSLWKDuHqNBjtT5EqYuVMiGRoHUfAdRdYxbbAXxisSJu5",
  "key5": "3th3BdA9w4mtq9tTKN83Xt4849m87ayfd5VP5t6e8Cc8DfU7wiF5EGS59S5rBKjMWZzJhidfEscXomjSu4PtWiSt",
  "key6": "5vCrfXrZWXiPxtN1C7soPZuVKz3w9QDA6Ps9cCfzLdivRzXbLGgvDpqgcLsayUraC5FfK67R7roY8UFX4Rugrz37",
  "key7": "4pqHPpu477AARUwxEJH2zt84Cj1fvN81GAM34rgbJuGtUrynS2SWfEg6Vu9VqQ6Q4XmYHu8y1CtoT2sQbTc79u8q",
  "key8": "R55rHN3kLf21VoJGxL21LcqPr2MNBm4KSmQYjpcUkDLRVjAHwg47HQnsnAn5LmMeHPXPfyJ5q3nug6L1d8mK9Ph",
  "key9": "4CE9PLmFQbmzs6fDQFRkAHViaC3w6wLxNas2JkpsR1fAT2rbdAH2khZ6vsUd3yzwy1FK3dHpw5A8WfubkqBM7Gs2",
  "key10": "5xNtQzoj7vM1rZw9WF2M7kit3ep6WtL7Z57nwXsiufts6qrAYANh7CsiyNnqHZXzRFWLnxufzEmWj7o2JMzthSAo",
  "key11": "39Ag2vHZvUnomneeX2iNWxKb1G3YeHCBdEchpkrBRddyeYRv7NZfhbWaMX4YHfHRszzy1tfGXNsxe6oCQgjDkytt",
  "key12": "5vf2ENfcfWafKQnicntqDjLi6S5nJ9xbPKkAAJkkpsn6sNNHJTMePaVV1FNjWeTXcbmdiRHBAugH3CLiWEhFDtrY",
  "key13": "3TCqSJn4oZWveDC7zNh4a8AJ9w5zVX73feTSD49wupCz1GkTe2Kw96X2h6qC29NNAY757wJ64vWG7t3SR8UgkbrR",
  "key14": "4qLChFazfz4nY3yRm4imDSRrbSohE4ygkLSGpE7HTRqNLouqYnSnnGrsed9WUMfx8Kb1ptYpPm7Mq2x5ag3GrZcj",
  "key15": "4nzzyZPus8CceN99DizLWxZEbi2tpVuxnyV8z1uZLrRoZXURAkZUYrp1Yf5zspqBiGsNWPU14YYyAKVYr4haGajZ",
  "key16": "4WDdcHT7NFm86BvDH8RjCZa5eVSyvG2enuxK11TCnrM5ge8cpiqMzYnrU5rw3AmLy3c3MiYojoFvL1dC3813L9yf",
  "key17": "3ijLu38S8CeJfQS9rnWTJQ5GhT854ycD6fPHKX8siQfr6qPwDryBEXWuCnnZcXTbvWMx3wfG6YwXnZf24ymeSuQ1",
  "key18": "3RxtVmQZpY983AU8Vf34JVRMHgsdzVM31EEjVszGja6WzrpUA4p3VgcPMfrcpyxCKVtmKwiUco2qM7BB4278wBRa",
  "key19": "2CxPuB6yXjmWmNkonYh18pgRx4Kz6fqGvCXqvSpxHS9aRi4MSzKjAbgv8EpozdppCjEkJLq5nCPNmQ8Gp9uDm7cg",
  "key20": "3xJcvLTgPr64fNGWiPd9E3uWHytD6bPDA4J1p9iSiKkdvVaCwo6w159RLXqqRcJqFr4EWnGpLLxVaCUHdnKubW9w",
  "key21": "xHnUyaLqagqueZGxwRFAxAXJPiAR6zvpnQLhL7eRSwETH1td1DJrQUUE6qMnXzjF8yXmWEUBpMdhrw1zw627w1Y",
  "key22": "4bP6mYYk7ocPjjuV1FWEHWse5mF2NnpjiR3NFAP8opeqWzAnrEwARiyoRi1PTk3KUXLJAZtiBNEucWncPoSMqHqc",
  "key23": "5bLfZFXiBuuwzdmvtvENwR1m33mheTks3XTS24hL9ytFvnkyoNv4LpPVMsAiYUMNhhA9UxM7Qzzkb9Z2vf14zQUT",
  "key24": "22PJeUYLv6ZV1DdPfM4AYpyeN4rZL41XHpoWddvgPT77ryys3fkbjSzb9qrxGEnQ1p8dBcT2p9YUihQwCSw7Y9aY",
  "key25": "7pAx4ucmoxvjntcu77tfDPR4Tp63wBDz2DuByC2TwdbBKJCnrnruwUfgUCH3DxDKrLUptJ4QSsKfFB1FEVRg3u1",
  "key26": "v39AAQ7v1konGjv6Lz95FYGwDiurXsbVmhqoRBoNH1WhY6KRYzFKnmWiwS71dwdJajmwvYs7i4VNf8eVsdnjkKQ",
  "key27": "52ZGSW5wCnzoHTTEbT6a5Jd8fburEqbonNQ1ktRQa3cP4QyUDpR7dUzcsuRHw3e4C9qscWHpSDeiBhdKbWZ3NFat",
  "key28": "2KB6DUCfK75BPgwYtLwcTPPYa15xSMKssCnLDFsE5cBGVyPAAMVPaEKPpSgxTxv5wePZbzPzYL7MkvXDwCqpU3PH",
  "key29": "5xDfPfsTdEGrABiKiCnBDSpiN6wVzHaS8xD3dXad7j55vA9vnV2hT6dGetwmTnNkTn8ZsYrQHDm7MY2FaTCtVKa9",
  "key30": "3KGLzfk1jUzFhtaRtVsV9eHbJyZNWQ2qTcFiBspfBZKCDKZpJpa3H2MLCfYJHXUFfxmayeXYnbJikGpFBz1sbojK",
  "key31": "3gyFk5Cn3tMHHZfA2KWC5VrAPaiiRu7cbXrX6MpHvbLZDxgvKNWGqtP8jjiiMbU5BBb4bmXfofEoHeBgRQsdLBPW",
  "key32": "2NuANX38NGyb1qoaotdsrJHzE5CVVaXgG3DJZfZ852n3XqqeB371Lk9rJ5Nv4bS9qQjeRX4jwqRFPnJ8ghZeynDs",
  "key33": "3bC6MHkAuG8XfPzSHY1TzZ5TM3MtQCPAVEqPJXHeEhBMsQNVxBcQ8kQ6srMAdi5s4CweGwdTExwPTpUhb6cDzshb",
  "key34": "2qn7JvvBgbbbKv4MrJbMFMEzoxHVQcY5ppeDdxysHZn3SYx6tQHSQtTgopHCDk9Pd2fCyF3bd7V3BfDSK7UhtkA",
  "key35": "2UZBJgihTHmEmp7wRicTXg4iLFTj17QWx7gv3AcvQhBXA1eJRLtJVxpUon8a52FpLY42M49V38AyFDDcB197c5wW",
  "key36": "3KjjkUCUa852Vmbkt1NKHkB3kxHvRYHVuJn933sShikm2v4Luq7dabcPVPmH5PUzGpnYJR7dvtGPB4MFzqxKbygo",
  "key37": "57RWPkr9ntBQz6tdAn42x7pRN7GC1gdTcDdM2iMYxhc3gmA1TQ9VdBA56F3Q1qAPWBKraxPFZESGhWR2tZJvVjRb"
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
