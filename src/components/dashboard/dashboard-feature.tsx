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
    "2ZmThLzQr3tEYeGW8pLY9qAUumJYANCpJ7FZ4MV7YgTyeYfKpD7gMGqHqpRLvHL54XHCRVSjNi1bCxrkQhn65SYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56utLydtth6XxbypkrYcZSS6Wj8o5wdmoC5KonH5rbafqDc7q2YfvnV167gZGycmCbztdXoYM85hY4qkctFmkfKT",
  "key1": "b4GwQze9ACrn9T1TnTEUKBYqGDPbPMsqqzmWx1PnrYVt7bCbbBpChcWvgEUe3h4jBuFCU79jHvGdkwviADieB5z",
  "key2": "6dDSxSsNMR16BiHmvGAHiA84VNuq9XbdR3ymMmyb4skZyXWKzqfjdkcRLtwvmqYs4B7RFXyXXZNbk5rsBBhg2L1",
  "key3": "67Bwx9N2FqW9tscehGd6BjJqoCMQznBVMeK8LFJHmhq43ZhPa9oirwGEvU3zzF4xZG9MzBrXAEESphqv2MnTcG22",
  "key4": "3XZh3rCSL1fLPwrQK748tLdCgxptfV93AL5NbXw4VeRZpGNqQs6bDg9DHqh6i7F7Czvg7Rv6qBn2pziaK3u8a6FX",
  "key5": "24SkuEDQET32ny9CT9Ax6fwPq2KZRdwRn3t9u8YrQuRc4RM3rGLcbzh9c4N5DbcJvTp5N7h4mUGqbCpXxMwVsSDf",
  "key6": "2pXEisfLuypVrnHkxHXdBQuF6JjkpWFb8AfR4HKX7KcjCW8BEeGFg3vagQL8VqVHVGtDowrCpVZmDbL6BNp9MfAg",
  "key7": "4UeJqTYhCboSKSQuQpoyb5vouP7RJ2gw2akzEU8Kfi21p3V8gnxoU7J2a57xEH67QKmmbCEGVtaTVkXroxTv35Hb",
  "key8": "2Hu5rSYdX5NcTwCQe3jJwtU8tfU3AL6TXk2mb1nEuqg7YimmymtWEnAo7NUpbiWFWcswzwBVTCRy7jRkmm6bhqHG",
  "key9": "QHVs1ysgYkmzXhn675h6Yga1W4n2NbkRsxt7GjVi1MuAuqCbrx3ig5nzwiY6QvM6UFGSiDLPVqkxZHKdpzvEXdW",
  "key10": "tzbXTsTCAdNfEYF3zH5ReAkZCZgjwbnz4GfMufYBDcqEPxyoQ1D3DXk4R3scseFoQRnXCUGFLJnvESd3qKq2wjb",
  "key11": "2eSyDsJTVePZ2nPiTDBQwHF71APBi5yeoBZeMo6CqB3NLvHAkc5gwGLZBUGcyDV1pD45BvXKHE3gjswVLTPkmn6i",
  "key12": "3dUsuCPas99q2YyfA1ajHNUGnbrzGdx7rZjdm9oVUgHCHh4ih6uEitRytA1bP7XBLtwBC89ur1mxp5a6yUnf8J2",
  "key13": "57nGTL8tv4fSpG7FemrWTyRFEe3EskeddYpzGZQH4f2UcoTjQTSphmuYVEBUxevAiKW4gK6ThHEQV1LhT7FXZa78",
  "key14": "5r9KHj37HsYP2cKnNQqRR2HffzkLNNKjhLn5Wqf5ikP84cka6fvJGtZyu1eaJv5L328kurHuJMVZtEJYvF4idMGJ",
  "key15": "2LmaP2y4iTkERRhf7iTvViL2fAgk9Q7UzjDCra666t2U4ec9xP6nVozBmnpHdJvL8ion1PHrM9XgvfsKe4oANJ3W",
  "key16": "yJfG2jUkNfeoVtk14JAcEGYxND3m4bat17zUZMvN2rGdAhtTwyeadBGEgnxy8Phgptp78m2ZnkfDoyPoRf8K77S",
  "key17": "y42RBVfKCjkwWE3X2ym1BizYwU2N5wdnih7M4GgBZU5N5azMVvWicSzZFR5invetY5an3WcwyCva7DbRLHY1bd6",
  "key18": "4xydntFbKZBJg3QbxR61kQDiMQjXL7fHtZGDXTN9JQd81zWhwoEXxA4i6mzNe2pjTf7qQUYgn7uEYcqAtQWnHtBT",
  "key19": "3vRXca3j9XWoX948bjBuCbTTSVBuvGcCNwk1bFSK5doM1KWzjedKu4P2a6DncNr99jv72crRqovAbzcyQF7xk9gS",
  "key20": "4i2fzxkKW39rVxoVJ9WC3sm7EzWK77UmQ26JX4hCuCH6VV6aadYuRptnZWt5PvXuYNUQDRa3rW55c8RG1KfGFmk2",
  "key21": "4HmKubXXMe89Aae5JBXA2eqzXsF3zhqZKDAxjf8CeBCYQKLxt9t9hjFfbqBepnwA7H94ZdHUEXk5sARUJvCr2hf8",
  "key22": "44NKURCgRdvDGTEH1EECua6gsv5ujnK92hquNZgBNC8G6u2JHC3VP6G3LnYCsexyRpsiA2Ereu4fmmchnaVZXb17",
  "key23": "58Ep4kMCMYaZi8BVhzH2TzGBjgCeQxQo7uQ8bwJ1QQRRbd4zDx7wJEX4deW35LPA9wotNEZpx8aA9tQww3zGsVxL",
  "key24": "vjswFA5Purkqrf214z9aRpyUYAaSNNyzeR4kwNfjk3m1NFSn6Gzr1NYzbcQ1rkwL3kHTe3i4wwDD6RfNVdmnq4v",
  "key25": "3iAHgDJijoEXagYfFU5zvxGKNGN16D7ydtM1HADcGcCW8gAdJHrngCKAn2WAk1iTdC7RyJeidUoRPuuyowSTvkpS",
  "key26": "3bEFWhxYRYxa68dZPNLkcZ2rjgDRzz4C7LKXU7drNdAtW2muaG1Jr5cNoe3yFXabzGeiY7iYEKr2p8YWT9V6MuCe",
  "key27": "3MaTcVLgtsGPDM3jEEgrGqqZYqVLZC2Yr7vE2J9TrBetmmGH6EvfUkf9vvyNTuMSsSfbx1C9MXFve1sckytao7No",
  "key28": "3T9XMyK2uCv1X9wdzQ27YNDAoooJni9bgnrrjPyMvZ4VVv5tZ27w5EiDkD64dFmN6emP91Sp1KL1tXHCBZV9FjeZ",
  "key29": "48G3kviunaABbwR1tKvEAe9AtynLvoExQipz88eqgJCVa5RUGS5PtGcGmTyChWVT1bM3qR1e4kxvqoqkB7VFTLw3",
  "key30": "3iCLCfvthPYxXx4SGJKygM9ALuLqzmeGBrwLZSnQyBEiAtpF8ZzyS4Lv9AYraee81cPoBxeBdShCdsfECV2SjCth",
  "key31": "2iBRZ5kadhED5ekYcavZXVYhNYxwTUQWEycP1nhAaPgdKf2TSQkSZhYYDKifKaWBzcKEDGAJruPdqG2D6KQjEuze",
  "key32": "3SZneBweE1An9JS1efmwHUdnpNk7P4veUdB5moYYwo7Rf6Dn5LEuJaoJYMgcc7HtcaCgJqQcY4VDHgyoPsVuVwfW",
  "key33": "2YzEVqwnGYLcnf3GY7ExvhtAkZMs59mgJLDjVHk6fUyL7reBCMKCgSfw1b4WZYeXEjk97D1272TREksJSnV6pCfM",
  "key34": "2LEwJEeaoYgyEzdyarPEiamXMZ3fCXi67wMSKQvEJ9TMcpFaii8JGyKdVWZD8gqoT2jdmDF9xY6yrs7bfbjDaoEJ"
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
