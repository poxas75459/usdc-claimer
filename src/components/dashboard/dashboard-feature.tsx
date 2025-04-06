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
    "2xw6DR5Afk3zCQ3gVTB8B9uqTQqu8F5aSb4MapB1LqqgJKBtPRB3V4yT8LbpG81wVpdgqnrizgStD25nZkbjt1ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cy1i1jjS4Kc8vZH2tB7DC6v3Dwgxwfy4uvEE96gftFtcsYZemvyFLg4SNbi4HHAvchoM3cHbnFXhBhZVCfyTpoa",
  "key1": "UJwddc5wZRVzJU6FHhNrmd4pcXZHC5ihEBf5mbh2TG9Pjq19bZQrE7WQcEsYdLMsWrbLZbnUgyt3XxcGiZSdcqQ",
  "key2": "FVwTKUnF9R23UJQ3SdcAMtD2CpgYN3Bk7jqtToBonUGCAgbWphASwGUSnMaUWVENJ3H376uiKhJhpT7d5nMK8J3",
  "key3": "3tWyB5ydxCaMJuaAqS4Ytktx3PFBrwCFuvyTqtMD2NRitcy385yBvQywCT822eeThog3KY46uGgJZiLq9k6MnUgA",
  "key4": "FAC6CsSSG68MT4HB6Ef9xeKeP9hCBMwC2CdruraVWBGn78QdQ6Kcw1j8b5nvW2uY4KJ2LunqUt7mEdvyeVqDtaD",
  "key5": "3jBCx5UaHDSrYgwwHoZos5ZwkojBrVYkv4xXw7m5GWgjHxnt1L4B78J9iEHHcQEgPqeNZN9CjnLVLB2FDWhmP4pE",
  "key6": "2CNMSiXAHUn3L6yLuBaXk65oL6NRrML6YxCrWv12TVZxKCcZybjeGyhdz3yTqrcaZjahhiq3HeELmvXUfAx83EBP",
  "key7": "3YyHbHxoLFnMjXoWHzFrjkbYq9X2Q69hefJVFQEF61shB21hXtsUwhejaLg4CmqytA8rvaJjX99SFmjmHsSVTU9b",
  "key8": "58aLgvP529iiqK5fQGNsdoCX6eJPE8j1uoaP2wPHpFXKCV2Xkh47B1nbewaeHAEyPaemQB7fryW7RN4exsPrjRL",
  "key9": "4uTrYBUBv6hbFubXw11zVd8Mta4hZUxMxRKpiGpnMDf5LZJ4S7HZDBg7UaAvasD1dMoZoKFjaCvXjuv2fvQ2dqSk",
  "key10": "5VSXkZu1wEq9HQneXfi1h3AEwPoqi8KZpoFwbiV5RkR19BeGw1fWHHcaf1Nkz9gUGF8CakgK4xNYFmtX4rr4s1Pq",
  "key11": "3ezSj8ghJZWTiBD1DzBsRMMtqNzn5T2D8iN4Eyr56mxgTTde4k8GdLyMJzg2CTxMrWwuhDaveWwmGaBAmh4M2RGN",
  "key12": "3AdYeu8HR6yaBonYqc7fe5KW9enMNDte3kfyqnn2RSJ5TdDrdEPHkvTzdPRtEhgfFtA2ZeQStanNUYuPNSHwsqsN",
  "key13": "4wMHLZVBBn48Rcy4Zf95p3y7F9SrZvCd5XVoPn6sUJNpe4Yis8ynjfeHCaVqK8HrVJvfc47rpHJgJsn6fPZD6YsT",
  "key14": "eoGL55U136VeZLPP6kyd5uvU8YKG492JA4UUNYs2b8AXpE1FQVfkN6UQ2v4XhWPMrChQoWnjDDPoWxJanE35n4L",
  "key15": "34VSCakWcwZcrE5xXmbSHA5VeKqZbuSDyBRdHt4KQaghMdXbR5LaMmAY6dUwpcPLKiR2wrnFr8bUk6kh3xYW7GjZ",
  "key16": "5QBQzn238fgdFwMvwVizxe7KrGhCnVYowNnmQLAukKhLxWkfGpjxix4i3kioYFBMzN59KA9Qxj7nik6PTqZnQWYX",
  "key17": "4JT2TvgRwr97YWSTWFPuUJvaeNn7kFpRHC2ijW2ENVSpoay7FmdxswbkasHXdjaocFymwj8R12EpY8qfjyXgR1De",
  "key18": "2U9Wof9FZuTTRkCDRXaVaJ8wnNAyjoJFcmbBsSfgsN9fmopXqJtz9q8MsyVkymNGPSbMgLYoY5y3XeYmKeCpKYGT",
  "key19": "4udccS1aoCFBq2za8Lx4jR12yhq11YbEsVuMEQhm7y5hgzSrKpk987TJBzXzoX8S4WwV8r7k7japNit8NwCSugXq",
  "key20": "579qn9aqbMgRi3refzwzVF6wpsTiJJABE1easniQk2mdQDvssnJ5nmVKuwQM9hz9otysqg7gCgTiPsmEXUenh3Gu",
  "key21": "4PGiLQMTevkWSYLJRc4hbTfhZwgZ39mfhEJSnQbkERDPinCfHPxTvPTg6WpZ3ko9yH2V9ct3xnssXVWb3reWb38s",
  "key22": "4oJFGHBs2sJiyRwDEJE4zgbJm9LXDTQg4wx339rCVs7Tn85eAS9gvtreSx1fD8drqchFBDaMjLQFSQLfE8zPQxPd",
  "key23": "377WAAJkof7ViZMSTVStixhJdB6R1wRoqF6Yo51qMeHGoaTLn7PCMwsuEC8FNfuQVKCahhB6yj7odiBfYmtjFK4z",
  "key24": "5pNnTi9xeHV6G7My35ABBE35ZR2hFQsmhtRG5jNuDEcGqavuyJz6MNbpyeCvdNGmGSTax2Qbuobh33cp7xBReCHX",
  "key25": "3qf9wjFi6egjzkXTTDmjgMYf6A13UZxua7cSCEVuJQwSyPBG1XMTXp3Tr94sGhC29Phcn6R3VkjRmcyo4nq3JGxo"
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
