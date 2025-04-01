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
    "4246etXvKccPqyndQ7xTiSTdhGkoM9Wk7B7YdiKrWeGHzxLmVPE48WhH3ogYXDKPBgdwCtjbYfPf7EBKwTvNmuCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QDd5rfgAyquvPJ2hNNBzt3o1yvoH7BbQhd2qbidUJ31BcYVsdZPBrkhwZ9tbzYMiy9ZD6KxjBMk8Y3mqgKKuhj",
  "key1": "3B4hTsmu6fVH1NcXy8V97ECsJiqY6mE3GQ8iW1n6BSN9eaF5RGkcbZJ8BDYUE2xoV1en9CbGjDvzZpoNvbdCjsPb",
  "key2": "V15eLuNfqwx9rAtn8sxPhzruvUot3biUTPuj77wMFv7Vdj3N4pgnpmB3MCJ1AG15J6f3CYkrcPyFjB6ajY2eXdM",
  "key3": "4HsXwGP7QZbPeaedMcFBE8xQT7rfjjfzBqdELWn9RA1SbyZzLFDmrAxk77dDw8FZjjSoL98QqkNVmH5SKStkhiJz",
  "key4": "664Jwm5YvFG28ALXpgPMXoJSvNUoGAfhCAUko8hZxkXngMKxzjCQEoJ2JC2MVgUJsqYFygF6JWTRxn8qZtg8Es4X",
  "key5": "2cnMQBJCSRP14B5kWKLFHtjTqDmSt82fUBTEFhe2T7nA9aFcR7gPJ3zyd1CpXSXTXFQNe74bs67zQ6qbYxMRsi8B",
  "key6": "4MK8w2qxikEhi6gAttiuWY8ws4zbDyEi3S2gDnkP6fWYzpft5AuMKRB3SAHdLT4b74dparDG6yQ4dQHaNhjq7H4v",
  "key7": "2gguusaCfnaF3rQaruoTL2Yg4xZLrkV5j8zbjA3xNjHYcqfJ49gfhVhzeexXRE5iQ9EVJqShpDHGg44rbV9MvegC",
  "key8": "5bmccJiEe7Y2Ev7KTSv3kfimyNND9En8gVMdRZGcEKUqPLHB2j6D3CmutwVJmCP56CA66FNv7M5usFkL4rhS9d4k",
  "key9": "3bdqcKxK78qWXwo4BovvsRN14nWx6GN8XWcAxXC9XF4KbSD8tbuuDwjmCFgLbPiKP8dgZqNK1NDA92osPq1UufyV",
  "key10": "B97adUiSeDUPZMCmKEQ4LLcEPoFgn1gxrFCGdmvhB8HHUeGrW7EDHnhkZ46YF5bZjvgTHd8xTq8DGCz3sm9sqpP",
  "key11": "4psG7hGdFFy33HjKtYxB9hK7snB3rhxFcqxhkfz99HvS533SJnu6UKA8w83CTV1d6gYEUEBCHSckonjLnjQ4Gg4Q",
  "key12": "3Qoi9GhpytCEUKbnU1idie7GZ68JH2MEp5oDGmsZtTFN5KR7GTYgezw1iNQq4VG8YPRhmhXq2nE6gDqndk7j4QmN",
  "key13": "3cYfjXE8eVkxnasgMWLHFz7zDN6bmeijrW4Hb6KtPhUQxJ2j8nfhhCyFeArhLe4BdH6isfY6NEA26DcpazdKkfFX",
  "key14": "baTJJMbvXV2Rwne5dNm8LhyChQPifRyCafKhpjDsW1kWkU1g3EBhvcHYHgV37ztx29GaLi6YSCrFhxLTeKi28er",
  "key15": "JzTZtNnD566gAYC4gei4QtbudwbPE2EL5g8znfPKWJ3JhJBJzfnKDYT38z4RtnLXv3EaX26zrFvP8yiH5EF3aj1",
  "key16": "2d5kFDXPq14L1EZ9r1kMa67JinvANVf1j6qCf93mphme2ygZiZE4LWLVUU3eShSz7QEqKMeC8q9UyWsZpzAaNncV",
  "key17": "5h9AteRp2cesZV4aSNXY3wgjUSDoGDjs27xtcSdv16g9eXn4VCWJDQ5kWwBQeHp7C6iwZegWuQuqHuVJ51w4YZV5",
  "key18": "5MjGduA6wR82e9ZQCpszDU9hSdQFfUiKtJhh8mREjufHqPb39dCMsS1ZdTdrJKUcMhCncVjEoZ8ZAqUEk8L5iLYd",
  "key19": "2k3vBeT6AJ7xHp6vS7JZVQohzjEmgSCmTkGCEzwHMZ61gtqS33N96vrLFCjkYWJj7bwf7KF1j7sDtKubhMQ1iz7G",
  "key20": "2wnzwezuAaEwrGPzA63hY5nx686keH5Txb2cW6NiU3EGNHQbctRZmYH8Ti8a8pWdqqvLj6SPCeQvv7Ytwon2MhpR",
  "key21": "67nWZ1NBsoBRkMn1DeT9SXpakrB11azYt5epkc54aVWpW7rtMDHdhFeybr4E6aywsYTB8BWeTzzXtVcp328fiiet",
  "key22": "5qbZAXxcx7xqEqC8Fn55zkzKiBHUeopkGNEQn2texSRBxR41YcmVYP7hBg2a23FwCvnCWFPbfRDZA3k8yTG6217P",
  "key23": "4tTudwTqPLZZqyPMD7Fj7BGvk8ok2mPPUf2Qh4d376raQyA7WHn6gcQXTqutTh8JzzJ25rVEK9J8M9HjQMN7dFyh",
  "key24": "iryPhKonvB1DK21sVFrUfeYFZ9Auvu417Lb9PiXLkjfi9fyTCeDnQwVfX7357Rjy7vx5eK6KQrP2oUxx8tqtnZx",
  "key25": "5KGbuWy9Dq3VCB4SrLJWmghpCqUfqjJT5BVRQw6ghgrAJzmdfKDMnjor9X4SdoXXJy8gHpqXZSYeP2Ks1whByq11",
  "key26": "5UWwiUimchuZiCbcX7q4kNoVFQkHS9LDD6hkzrWzwCLR5bhTHD4JKfWJMeSTNvccozqXAm8Hcarc8EBxf3hFqc1i",
  "key27": "3cBsK4Xug2EYfWt4ZUSqGvA2vPCPUrW6cLxieV4gCWL6FazPuBmjh6Bh7E29dJHrV9fW1KsMp2iazgzoYUnPiHt5",
  "key28": "3s2mcMGwp2NcyRP89aSxeBjtBnZ4vR5Lk1dAVeaHH1kCFBTrj5RtLgxqaMJZiPFTvyX8pJ7dwpnKQELZMBVvJULQ",
  "key29": "3sssxte1UZTMVvrsB3oRqA3sugqrADWAdvx9ovWg9jjwP1kMFs5phFtsJvVodQu1UDjZZqKKZB661EcqAP8Xu258",
  "key30": "5FJGaNehSMzSxtbEAWaxb5ZT1qSTM3zKCcGq364Yy7pYtsRYxfG6HAp4EqCr2owMvKCCjQFisvhKEYsJqbaCJ5fY",
  "key31": "4HewrpQJc8fKJrP4HZJx9UN8cYjAot6qwESRimWSuPLAZZuDNWeB947P6ZQwaPsvLomD9Vrp8N1gwG1PtZiuk1mF",
  "key32": "2fHZMgXZuF6KB3TbHqD3H4Ud8cawjEjAf6WHsYvK8cAPZHPuK7opmGha2UXAHnZAgzEQJci3hZPaxpxGkanaVo7q",
  "key33": "4G7RBr8nh2D3QfzXhTmTKjCmdPC9S7ydzkkFmN8N9PVSi7eVekv5NtJNrsupbWzJancruBCATJsdpgar1bJSwVib"
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
