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
    "4Y258qUvTgSU5KwsfD5XcYJxWJX9r2Ry16E9dChbF7AQfA5tg1WtFBDssBYfzavYUoLh7rqUneHpUgqS2goMzUgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41sEjdemUgdXd2Hd3d7goKy858MqBTYx35Jhi8P5Y6tzbFtEA7h16DGk9gWohBU5PoUmrWvLLcRPsZWmyrKiweN7",
  "key1": "yh6fYog5FX1L6cZt8JQeo6gtMrDQGdzrtGpWpGSVL1j2aCFegHxAzVaskBhSF6eaUDMZkXMQqEmeFkPxbDnhRxt",
  "key2": "LE2ACB8FiB3LLqyczAkoV1ykDKp6gcTbpsiBKApyVrAWqeg843fipo1UgYnRpAZWsHA8jxtyzggMtYaexC4HiML",
  "key3": "4wZb1ZLpd6FCRr63NEfs3otKo9PBRxCP1Xy64KbSw6EvVY8V4xHciCfPPozHRfn2t8rVvSVAVo4qsQJi24hsK9jY",
  "key4": "5yat5hpCU3VmWiDukCAF2yM4Ej6G7pLmkv9g2a2cPDA3iAQceL54SaFrXbhWTeF57o6aQAm2gjY6dcgbkVGCxt65",
  "key5": "q8ksBpb6uKdoxgoX5EPvNYmDagWQ2RMZL9SGiYKDLBGT1vJPNzrN9LfQMsypsThHnoUy1WVCZLv5ASCTJxVLixp",
  "key6": "2b4cHTHNURYt3W18MQZe7yiaMgwUjJ2QySGoA1jzbcmhmdJtre323wV9WfZsDviWBPdmbHRPke1jgk9RUWNYozJn",
  "key7": "3E6yDZPZqXJSaTUsuA1mmCSrFZCReiMBW8RTk5QRfWnUvYgfKxE3eJwVjVJwsq4ffxQJU4KJJTGwuhExYuzik4GF",
  "key8": "oE5XhwnMozjr7TBFMSc9rj7Ei9JHZtqdANC4eK42NPaqo1KESFPqJPWa5fw8N1iK8pjCpw4z9Rrq9Tsdx5f5Hya",
  "key9": "hSZf8CVNr8jrY8KAi4aRHvBBu9RoXv1zNHqsUzP3rH6F3RMWPZcR97F4akFxXoGnYekTrd6BNuX4JQQjyyVixqq",
  "key10": "2y6BvWJ5UNHLg7b29V39TmvgknRJ2CTwriyRtaoZSXcf3oawGDntjZ4SuSiBCC5ptVoPYD8qXtX6sfT8Y8gDHXwu",
  "key11": "4zsYvFmpEPX7H8V6YfrDLBo2VnPJNo1hhcVkZ1ppLMFvWoCVooW171m4G5DMXryt8sHH5CDF4qce9kH9hYskF8h4",
  "key12": "3S6X15hrpvJiXDiZMSPjvDG599RxbUMD1VLsCdzdvmpzZ9wQvKY8bqbWWkD1FYUbVvJgaGAqbp5sC6r728hQUgou",
  "key13": "2j6qShuNXDiMG4rEUo5iW36CA4tdQxj1N1EfkuEPXmToAWAVcVT8QkNVL4mcNEWmiMitCh4xMuje2jqQ5Lui1wT9",
  "key14": "31HWU1ejTNrWacZEhwFH677hssqx6kJQXiDF2znp8bWLRop1uaiwwWYHKKFrtLW2f8RXFUTpqvEiA3eyWMPnK44Y",
  "key15": "3YsnPSyg1gXaT5YdXJzw6qHQDxcnW56kcew9pDbGXjBhNCLRqaJi4JCfN6hE4vN5p8uA4zfEZacd9cvS6Gea48nV",
  "key16": "3SjNZyj1iZRLzXU1YUMZZuRhGCE1NmZoTsoQQPmcBczpDN5WBpfBA1sZXLpvYMDTMgR7mc8DkjMfDEDX3MwhPemA",
  "key17": "4zC5jwYpRn25XMthzUj9Lg51vysTywRaLbUWcUvSHUjg9csKuU5KdAXTzLs9EsAgzQz5XCpA3o4EzLCrcUycFuT7",
  "key18": "446mqCTDS7xhy8KJktiF5uLRMNm7P28ajbgQ38PeqcQKwBzHnzoftYJuN8Zf2viL1oZueTADWXxVVjiHqyfGnukC",
  "key19": "448iZ1xthkHWiRtgk2wHrPnKCqfwzV9sMndGf2N5sgTsqZRJYLYuAncZUFpajJcNoUNdSYUEjHAH6ve2WwwxSqtc",
  "key20": "2xavjNfRhRbGBmigbpPKS8nDWc61FQNi5SCU32WJ66vY4MpykUSLzSthdmt69f76JSqZdFzpjvXCAFZbTgPin2yR",
  "key21": "25snfmyoqF2WtfyeNzbekR71jnrsLGfoEQWW62wMfiTdLhpaPK6k51T88d8nYHzkmWpCo1r29i5idrwAioSLVBmz",
  "key22": "AaYLcp3HCBHRp9RyQyDYfPs3cJmhJ3qxk73BiDjCfpyUtQMHrpdb2hXWEhjsVc9EYeP4wR1gSJLom6D9C3FvZxh",
  "key23": "4B8wtXvpNgw4bwQqRSVRnUwGEdsY7LkPFrE4aTn63RKDQ2iaGTFhZmsToDWRWJELfrgrAGXMu8HfoKir3JmZagUu",
  "key24": "2w8eUg6BqDpxRQw9CPEesKye7r3BuiKtQqMJC8wPFqkDAv8mrsZdAScLmrAouR7PqjnRCJvdzBprvfhADkiSeMwV",
  "key25": "FCP6kUCpuYWtF8M8aYCns4jHpCe5c8S44P95zT1QwhLt4PFJRUcqZfcohMK6XZHzvV44qu6uoYMvcwdP14HumhS",
  "key26": "vRENErh4LHwgZi5HDj9bPEpHSACXJ7V7kiLcNy8D3CbTHQy6H8Ynh3onPkf7sgywu6zHgy7xQMigB1iuJFnFMZ3",
  "key27": "5EmBoJ7xKqC5S5bh4i5ouAw3vu9mJmpE4YB5NsviqKeNaFtawGfVTKEXqyjGLm82cijivE4dWospuxvBGggSepgg",
  "key28": "5q4KNkbMpwWkAULzitDCMe4fh5YtivJmGVb4gqraiSAjkawdYhG3uSpdEURuyFefBtLqECb2H4uqHXfVapDnAF86",
  "key29": "6LCaNCcFbXf6r7pKXJU3n54ngoH9SHnoRxt4Bfx139aJb46JoT8RX28SEYw2oLTT56CVouNmSkCmpS7KX8Q3pdm",
  "key30": "5wpz7VXXUGZYfSzobrEtYwmSqpD8TWfdcAsTB9zdeQR578JjkEtgtZRTm1JpZgGVaEEAvY2pBZJxbSPd8axUNYhz",
  "key31": "DTm6pRkGAPB9PXib4HA9kaZAfmS1m2bpG8fBHCQG2ESdshgPTMWHscH17UGwXCKTpZeexY2QWxsXh2sy2EC6vuz",
  "key32": "3ZKpNaXVWmCeVgagANjxBYUedzD2EmnPLcugvWP4gLCEPB1LomDDRjiGqwi6eaDLm5DrUADfJChYqY6QaVnXkZMF",
  "key33": "4HRhh8YCdjEE7JW9AUjximxgzhgJErRdzeCrn2hQPMgF2wswX2mVaadaeUZpe6EbHntYSCVRE43UpikkRCwo5S5p",
  "key34": "435wR48J9Wq2TmNPz91gW5UtBDM5oQDPmvXZpwqs9Gdg9Ddjjht5XXYibgqEHdvNnNL1pSGJckSMwhzDNU81PVob",
  "key35": "5bVnoZNwtmzMoKvxWygJC3FX6fEVzEB2Y7iNgYBTfCrjR2cRv7qsmEcMFmaqZJcp4fXCh1iF2cyaa1Q6ymB7qYge",
  "key36": "2ByYxQrLA4mt9zuj1vnCGarES7v5Huf3bMQmirKN3X9iZCvv6wjrUuJfA3umM6sYt3Div5eEfbsyj7aukNBk7miy"
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
