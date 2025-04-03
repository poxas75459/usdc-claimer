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
    "2ncwBhYA83LKuMgTzoYSQuqx7evTyxyWYyJ46fFWmR3EjXB1Yjwx95KMfYJX1o6txhUNTEKXfVPzab6GT8UVAf17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFX31dEzHJHn52aP1pnJhPVfG2HZeW4C9BXX6xueeaAHDGnu3djkB6GHSTwo2U74ii2SrZUrjDy2JGh1ySBXrww",
  "key1": "CbmJnycYH8BqDa8wRatSTwmZYjpckgv1K2rXvsV9nJXurSsQ2euJVCjHLj2ARfaEtiYqadcZXRCMSaeXKD7CS5B",
  "key2": "2Ua4MQfXgASNEAB5hGCWedEXXSD34ZgttfdX77UxZhvYXTsdNdVpZfrCskvFoTtnwki8ZXEzrHyUe6YBxbgwSQEz",
  "key3": "MVDRbC2sb8pTTeWzHqucC1pcJUpr7GCw81EZKXrgXv2x91yRVBYxxaUtrSzaJoSM6kpZYqk6pVnt27jYnvbstHg",
  "key4": "2YNjK1kb97PCZP1LcybXUqs7t52CXD6QWmZehoxUHoZoWFsJDMG5bkqNruDLS1GNvve8jQsGwuXeS4MQfrAJw4CH",
  "key5": "5W1bHAWaCi7Ytwo6A1HCWBty7CNNM2s6pMWixkVa1oijHg9rgdRC9omfF5sQ7yG8NdmgETyQMpbYJz2tupjgaMvz",
  "key6": "UacDiYEfdsjqsHK9h5ktbyeUXpSFz52kg6uRpf9LpqtrSM2hLLiGUfnaRunZocZmkkQkgXq9RKuRRfZG51qwKNx",
  "key7": "MG5xeMaCmm3sKwNwGN2N9gjt9JAx7JXSiGvvvHXKnSo3RuYzLbGmXtjr5zgCLN4jwYUcMFrQnAeSWitGortDC8k",
  "key8": "3BVSRsqkFpLFwK7N8PNR43foPA9ep5vdU3tVCSsTxbbPZ3zqQM2LAHff1jDgE5tkufD9Pfj2xE7bute1FRmmCy5k",
  "key9": "5UgQf5xzVogTV31f7tnefxMc2VDtcNAUfg9mK5K7aezuPv2Fw7UdxSDcxz6D1KvYTVyJHFXYJMyqWmJUjDNmSJSM",
  "key10": "FKDAsu1wQiHWkuv2b6hsCsVFQUgXqkgY9hu96xfVgdXqy7scbuAMPaR7dhHqXU12qwgBCvebsKqQYikrcBf5gdr",
  "key11": "3hpnNix2EBgnJZnTyZwWLsJQuvvcSFTNRMrYxmK1L5j4EzM8XfReusBNZAwARNv82ru5LFVkdDbNEL8PRbPJNVh6",
  "key12": "2w5ZjXdodHySCGxiMQmMmyo83MWxs75A1tMPFiJTwzLhbiTSx56WLBo2eGoFgCgyXYCVxN6hwA5fFLYYDcJYBx1i",
  "key13": "Zg3dC1hZXN8MXs7XrpN4ZcybwBDVR5NZk86diqBaLy7eTQjmFJEU2F6WXRjrCbwVMJyBC4roicLfXJ4QharqgiJ",
  "key14": "3Vpnogf45oUpkpV1qymYLmHpBWQw62emEDSNa3RgDpMGv1hekdvDQoj9LhswXKcRorsxnjCnabnwGDsYfruVeSej",
  "key15": "5Ty9Z5kyHye9UgYKbMQVbTthRffEBh8rJ9FHMMTzTWiWkCZ6ZwW1VdE24y1G6Z4RgU9frKRBJ1p6qnC8jrHYaumE",
  "key16": "3o38d2S8MvKveKivBJFinVxLK9xFauVJLESz72hkaCp6nPZEYGyCe2Ab3YqAkPXp5WHVVuioLZGrHtj3eNXyyYGP",
  "key17": "3MFFrE4eDGhD5DBzcEcWM8NGk1PwS8RgmWnxLngdfoLdnQxwjQ35TmpdMqbkadUsQd3DUm2GR684VTZLTuGRdgwq",
  "key18": "2mLpKQzgiE4UCoEWC11rinYaVYPkLAF56WxAg4JZvih8oUncKviVafsoRWgQRCUnJRbGz9UqGqUo8FYbtN3fQ8Fd",
  "key19": "2v19D5VQ6exJyotoYvPH3eBhnfxSzrWC9T9G8fAVkSHtVx8F6NshngzdhbRVpHBEKy6i29MCGzvynQ4stHW1uFRD",
  "key20": "5wcCNyzD42wEX7TLAWb4tH9A6nRu5NW9Psw8b3cpmNzskwiLsLqXycTsVcYhfiqHVAcxEgcc2VAgt6smMg64UCH6",
  "key21": "2Z6qfsDmDhMSykPqPEP9ap2Uuvt8TcqSzBP1agkqAp8zbkMArVxTxH2p28E8aygeB7Wu2kdNGGpoC6DhBiv9WRS3",
  "key22": "4ZwVmTX4gMwT6tNiDZAbY7tKTedrPGy9W2PBHrSjdcdD2EGbwh9gbw7s9V3qBBENCqyhVtMEWA13vyTg6nusF9yC",
  "key23": "2Ewc3CArosD5nGLe2GVTLUZYY5Coq6C4ywSRi1jCpmFGduZ4rWhpntForiotgu2s5cD1mqLaEvL8eodeXQRQpzP4",
  "key24": "44uUp2RHrrERFFe9AhsP3hTwrD7She2b3kFbVpRXCufyG3CeetABR6iPBMVq22xYPGTwDcnWRaeeo9G2SAUarAxy",
  "key25": "5FX2omYT8h4gq7rJFk2CAYkjf4sgFRq9yGdurT1S5KVZqZLm9en77YNjFd9y5fqMgdGEk6qHsw2kbJSEorSLck4e",
  "key26": "r1ebKfJi4sHtESFvXVwsURu6PSnizRmRgD1e1pzSs5rhUrXSJyfLdBmtEpK2d8GmuRqQeyPvmJkPjCyT4ARrGEY",
  "key27": "5BKKfQNPPTRU66HcPiEm9antVGRWVeKq28TmB58u19eHei53fv6DfUWvQWHRFWTtp4Y47VaghGbVhsNocUQ7DeDY",
  "key28": "5jM55fDkDXpsmgVhw8o8wkszAM57ZsSHjyZNfYW35mFUVP6RKa628n2MdzfxUrfov3dcDMptjwTaFrHsd5mt8uJM",
  "key29": "2eCKeVpeAphZ7wq4NY3wZB2f9Z584aA22m9CPwMGb6UVLqqM9PAJkX8Htj1yGAwxmGcMNNbSRxBbF25FAEDDTXHu",
  "key30": "3k32mdSCHMfFfvG6r5qmibwVcxhzaUp4vHSZB47xii6GxNp4Pd263GuWh4Vhk3Tbgswd9LgMibiSGn4Zxp5PUDPT",
  "key31": "3Wiqxerrf6N4yATbzTERZJR9StvNmMQS8xYb83jvhxjwWmj7Wt3FSETjNbvMDqaQo93Y2eWrvhGDDRVqZUgrLHTV",
  "key32": "5fXZ84FKtw7NJY2bQg7FZGTQkcaXK6uyqsRmngssMU3UD7byepuntmAppFfVpj5J1Fsb8NNJQ8oVbxSgsGZRhy6Z",
  "key33": "4FNaYK5Ru6vaosYRLNqXnFJNZJQ336nxtB4LGFab7BiqN7jbXtoXcpJ3jgxqwD9HXY8YKHdihEmfBdXpiFQd9ub7",
  "key34": "2SNNroU8pYvMDUopMxmaQ6so9u2c8qUgMEnueY7zDVogH8QTGLzqey5xD7t49W9U7UAs5RJ5eL6f3VBttiLMSH6L",
  "key35": "3h6BHRhXaBwDz7LjMBZg9D8ATKQuTLE6jGqcXfdmmwRsPXjEkp3UiUZcvJVsSQJiptssQTEed3kMwU6jJsDyhFLF",
  "key36": "5ZjA7gPm8QoqPs8Mq7J4hMrqcn1FUCinMftTFbnhcYEWQXXbwLPL9xamCK1vWgzZboJfrMiP2uQsNYDTbNsx3B8s",
  "key37": "3FRHekduZmo36iSQruKwj8rrFUxQ8rBB64SNbDkvhcWRso9nLKudLryszVay7gFuF4YFt4TUtkXpu2JuX7pqg9wm",
  "key38": "Uxp8YEuB71c82Q2KUiLVepob8eQuhFsD88wEU2RTQWixjKixePYZgyv6pk1Ms1yYMC82kqJwQSYppD4fW27HZ36"
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
