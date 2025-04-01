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
    "X4vXb2RgFKyhhZfJ9rjYXqXoTBWAFR7AKvrYhAKvJhkPLRc8fbP4uyC5JyhMj7dGAcXiZCqXieuMUiB8paDRBAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32FGxFmHmjqf784wqj2X2edX85gXwjDoN8CqDhUjcpFDJ8zXfBh8DUedb16goMe3amVykGJ6w5tWndZ9V3WM29qY",
  "key1": "5hXpyScsf2astHuz149R6QyDmRPqLP8TvGmcypqDQURKFsTcpgKNjrtMzRsHoXLQyytbYvVrHFSqoMMyGX5LfFi7",
  "key2": "2J1tJDb1fRXxeryjz6coNPtydByRVwK2Wv9UPbqDTQfx7hRKyMrHwtm5QNP8LFRTwADC5zCEZ8hPpvN5vPhQRpw3",
  "key3": "MamywpNyaYdxetZaybuKY7N8Yvxn4PXAuhzLsr1Zfoj8UisRxzaNX7mSVSbhWpBwMvL7BxRmunikxcCWU4oSb64",
  "key4": "2KpyY7zUwQ48uDT2qE4oC5x5mCnp6XmJEBUcCSEwRgXZrfRooZ4D1JQ1aGfzbG6FAXyyPbkAiCwfPtw4gpETJ9xb",
  "key5": "4z3yeKodz9otDDpU22XyP37wteEuxViseFSXAD75dGhfzgmcJWBNpPExhAMoGeHnp3ajWt4ppeJgBXq5azcApXRT",
  "key6": "9DcxfXis4xKQZjHCL5ZtMnzG7cJ9dhjBhDUzUHoVvSzXDVTwFCp8MjbkCLgft4TyQJE96q8V74orW2AYkWhXPDo",
  "key7": "65Lkz4hHLeo92L64A6w5GyNfsc3N9xsD1wDk4fR9pGqFYETTKumzepMSAyBffTE3NczGU4ooSawr34dhheh911gH",
  "key8": "SskJL7yz66Mtuf2D8zkBPXDVgS3TYxiEK8S9HYpoT8J6L7bkkKLLA19o4P4PVKeJYAKtE1Dmib9iQZGaBAduzys",
  "key9": "55srCXEY8wiiZ3Wy1dVK8vU4Tvd8Hgu82W7jVE5wAwp2G8L2odL8ifoVQSH95s57kDXzvydbjxnkZDswkJc31VnK",
  "key10": "M84iVRgFVVXj6h3rLsRwxtwX5r2B7fn5HKKExejLcN2yw9a3qpWrm45wo12swm5PxdJ2cdeVQdqB8SH2KcD9QMz",
  "key11": "4vo9kswCsD9Bxsp6NxmdCrapsQX6qRsJLqMWAehsY1HGZLUmLRsqihjSdPomdXExADthwG8GyNgUxxRWFsQSF5Z1",
  "key12": "UsFqasyNmW3Db2Q2X99vs9TAKiT3GhBpuWGC7aFu5R2UHUuvGUZnjEeXMMsGwbZEL7nvEDkvo95rxL9LXwQmNyX",
  "key13": "5E9dDMrkXw8BVQdiADUv5bFe1zHPNwfwPqzYM1bUNa2XYH3wQ1Edidmr8xLwRDyVCMV2JBuqAf4dbTihEpy6AZ7S",
  "key14": "47n6bKJ2Ft88NK8b5WsrcXEk3b9uAPZBoWRaKy8nALctTRRkcDGubTm1H9CYuGbAhyzHKHNVed7XmVBmqMDUwn7p",
  "key15": "4mLEwj3CfViLnq7bwrBYMJHpqnKNUjqFLkUtwNhFq1B1CFkiY6wGp5ihb7KQY35AcHN2VEvdT1Guo2zHoWdGHtpu",
  "key16": "5CzZu34ZszJc27cBpkgMNb3HspEBm6TCq4LaNaknPTznypzFf7gaM9AuASK831huhWe5SpjqKobgtTDSkCbWAeh3",
  "key17": "46RyXei23x6NZdNcLK6vPBxKeGjvmAV4xSAoyF55KpjU6AnUaGyzkC2K58LDC6w4UWJ4Me12L9gGgUN7anxCCW5V",
  "key18": "4DMYUE79ncMVaMcLnqz4rPTVxDNTMJfoBMi43uFt6YpQxjiE88krM5TUrq9n6AxmqekjNwcCuvEGpi3pcCtC9HXN",
  "key19": "42EQbUpwRTgYKasxS2zXbTT2pbhPXAu4a51EnFEZuD4Pa2yhoVu1tA3WgBToH7yPoUJXEL8paqVGzydTG5YuJpX3",
  "key20": "3j2qCNCce1EDzUQY89aAhq2zkuyTT65HoLXDk3gvS9wJvq2N95rKNuTP9cgRDNGEsuUS6PvUCjrUPRj4BDawvbTj",
  "key21": "3ZW3ndQWy4keVNoZNMf57xKBHsTR7ywoa2Cg22LVJZxSzHYJWvTx4YVp52CrY9qyvH1XRLi747weXonXPs5TpWCB",
  "key22": "2cx7fWKHCoP1sa9W5Xq2Y6ufWA3xvf6BtDpyJBgN2SLJGgwqGaM2Dgd4pXT3YWerZJHiZDrHcJfB6w4ZgwiHDNwS",
  "key23": "2p8SErWDk1Wd5A4Kq94aajGFFddMcJ97hf2oGw336iwYwkVDcKUznxZq9jJXAEHs2sz9ttbAp1WjJto6gqerYtq6",
  "key24": "3waj55sL7SVdBfwsspzVEJ1ijfQtGruqLqRcATjasYhenknSyenGZetKQTy8xLC6VAuTfB5CPuCfxB4dYx8mAtbV",
  "key25": "5VwMDtDZTcBa88Eks4VCTVyBRiR9VGRxLmvrLh7B19mymnJKBgL3o8QHETSH3godSsZ5MtpMwseT3jnJXJZRE6ke",
  "key26": "2fKA1yM4eRPPEugmSpNDBDN4V6EvBC4Qe6pgfVy8GaNGwmSGZDcdMqvv5o7HnXj4A4mm5gyLz2DD8RP7kFeRFbhE",
  "key27": "5MGun3LY52xxhrFvvos6yoGpTaNn1RMQKgGvfdcN3wbL2Pv6TPVPKg6tjMrJi9RwpW3Q6RWku1SBEGVNT96e6ZE8",
  "key28": "3zY9oTRNMir3iDQsRSV5Mi7D2Xr44bk91bwbkfzrpBLzPPfxhJscwbDLMX6W97sKs24nfCchBPVF3dgkjjFLwkHk",
  "key29": "3wkZ59pcd6NXufBwwmcfoQpLyZ8eBhM4xJjT2nBny6TWf1t4HyraRNwwizXhz836WZZc5LtQWmVFJSDNia2L4fch",
  "key30": "5iwetLS7hbE4Fj9FhaoaupGD9CQg82fPAbx1xASwercSuGSN2pFMbApisiGevKCMLmEAJAq76teGPs1Psd8BfKWd",
  "key31": "vWmoxSqFbemog8bmBV8AwdvAHb1bsGqP6nreCBkpXWL2vauN9jzorJfzqyud7SZonSWogUeVo9J3CEaaKtm19Mr",
  "key32": "4WMC7kcMUWVDp3kqDNL8M4PuTapu6PMN7y1dCjCr8bL7cx7qukPx63gTCmfZ3bMDGdRV8CYrfiqgFRCnJoYamUzG",
  "key33": "51m2XAVGeuBKWnFNdDN2KTNpALCQNJjYaCenZb32W3RFrLBRxrdQGiSdGQfxvLgtjcdaGsoHyNfXQ6Cbfv9QvdjJ",
  "key34": "5pBcnrFUAmEWbEvjeAe2aWN35vLsFnbMEaaHWa9jhtVKGuuyARXKZeaE1GL3KRUJERFbkrGj4UjvZvXwLmUjaYRv",
  "key35": "xshdF69kC1mda6XNA8DsAwq4Vq4Dr68kwaTHEWYpuUmbCmJ1qJZFPUXHvCLN1bW4Qf1ZZ2fXGKPZqap5EuKTPBF",
  "key36": "519WGTr43hJgT9xDWYmYzSMoHeDzGzREi4eQFnA3Ms5im7znCGJWayh6CRwRArQ6knEpVeY4po7kQSJUT9p2aQww"
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
