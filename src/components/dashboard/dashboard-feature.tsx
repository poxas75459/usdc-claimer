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
    "3npmht81sJ7ZNcBgzrRCY98gNGUiopq1BGusg58X1j4A1LbRE55Yyt5ZvCGRAdKnmeFvSjtCvvtuws9zSXb77MVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hSHxZeWHcByehAmFM9GSeFAGGcY4n3HKrCHy3rfXK2jtouKSw6HjhoFncosvACWdjGTB8VPqtw6K5CwyFteRkEK",
  "key1": "uwRJFQDGctzEwskufcHpeUtt8K8X4vpf6BQcZJuLYuSJDctfYLHepmuWuq9o8FmiabgUWEoR33k2ZbkLDF97etF",
  "key2": "AEFtDNX39Qd4jUu3QdjQ4YegEzgoWpnc2bt3nQKEas1cd9nXH4XiMDYnQnN8EesFMWET75DPKdtMTcfCcFpDhoy",
  "key3": "5bDxFhi5ETVEbJ7bcEHG1Rb1KQpMLbGmWQpp5HU5yCM9LmnE9kbspgRBB6iSDgWy28wzqnYHNJsSmnTFmg74xEkk",
  "key4": "2ntchgFtnVZaou2zfvu6eeZ7VchL28EVVaZi2PyJiYhvFN31W1U636AuxQyjBwLXNj7AAGj4hUF72WYxtBWpCook",
  "key5": "2QDmhhsfCvCeQCABdwjFtEcyxKksZJs3bJCw3cdFeDmmbPXgjEoEGVN3HEDn86ixC8itP38hxCLgeCwcfkHidmeM",
  "key6": "U2w4rrMMDWXEPhmZqSjb8dFeBqBZdMqJTY26iWAx9tsmw4pNWXBHNBvcaT7NJrbvfyZaeYrVHeHZy8A6xKBn6gW",
  "key7": "4CaK5zKguWZtzHEF1WssP4gNWVhSwwqhQTMJ7gusHTM2YqBAGthTuxBZCgcrVokzmY9gus8UZbByjWMg1TyeaN3f",
  "key8": "3Lp8wJTo6DGZjnkpWmVq45bCJY55pimsWSR7WT8FZm8v4WYpSA7sZgT9n6ysm2WvcsddsyJG7NNpVAi5XF23GvQ8",
  "key9": "5LhhMoWZduMVJtSYLHBq1vfCuy9XemYpKSpBSQhuXGiXGydKFvgvuzALwD4WYnVMHegosAwEWwM1hSgBkPgNRcTG",
  "key10": "3x1t5K4ezR9wU9HawxbrW23eerP7rsoPCPT872imVRDnmCoH76mg2bK4p98aFH7oEw2Vjc8h8WTrgdqgSUazKeEJ",
  "key11": "5Hft9Jud1Xvpc4ehhAyAGFgbux6ZXQDhJmQNDzYkDrV5EXbmv7nVp3ebx36mW8j9JwQLJ7dma4emJ158dcCjNCTV",
  "key12": "5RpwKFTKtNnCM2h96gDffERUpskvYF75MT4KPRZ279b7NRMEgYU6yjMToUdebQxcDyDM5HUdKLT1hmK5j3HZrWug",
  "key13": "5XHTB4gNKj71yh9iQbjJ9rqxr7EuCUkGWd4iyWoSvGmYwPPVSWL8HgVFtWeL64yn75agCBxFvX1YF8uZkZ69D8Jx",
  "key14": "65av7bjGaNCbZucHeMypGHJuk5osHnHRZuATwAStcSJiJE3t7GZGZGrHvih4SPPDxwSvW7pyss3Ciyt8Vtufkgf3",
  "key15": "2yuABas3VWNEpd8KcDQpF7yjXTtoJTDPamHhQTMPEzUmXjfB4DWXvKTBa5UGf1BzJQL5Sf2CkWQ7zoYJnERLZYdw",
  "key16": "4HfW8Ly4Jvy4fvqJSucEUarqA7Ht81HKjtXDM8VZQYk7eDPfYqF94rVSENA45Ec59MESP5DQUyiZ57UXQAdasQat",
  "key17": "xfcXaFA3TBAQVkp54Ps7xpRhmuqdY5643gapNauXM11Hjab7gUcGTyhdc7YixnKAEhtEeEJ753fjnf8hufKPbUW",
  "key18": "2JpRBGNG1Df4GDYesVgiAJg5MurZ5UJE5ii6we7rQ9XLbT6Xxmkr4vb9stveWjNATC4xVkqK2U9uhZAacaceguHe",
  "key19": "3WuLfHYYDRqoq4VpL8MiJPGo9zFoVY4pSikLnPLAhzk7JsbqCThzD8d8HKE37QdnW86VyPvLHz7mfwkyGfKHrPo4",
  "key20": "4nKsMsKTs4WVUpjF8WobBDGZLa2wxcDqWn83c9rKphxmNM54k4ui92Grsw6o6NGAsNv6hAoTHvntjrz7fMuSM8pE",
  "key21": "5FgwgbTzNrRLdXsWayvhMBVQq9b4GJDV4uaZ1tEuG215fjWzHoHx1Deoma2nHgXiGwbHpoeFg68LDAjehjJbA8Jk",
  "key22": "4ckpJXmMctjGRDULftMVV5ZMdZR3BwJYWFwYyHqXMPXiHr3qg42zpPFoVAHtgRQ1pvh85nr6xfjScaPJjtMuEG1K",
  "key23": "Lav6853RMHMkf7CbkBmPj8dPtXZMbxuqotNsLhMvQbKE2kw6t1PZruNnjaTUsRJUGxuqAY9sDrW763fNLitqtVu",
  "key24": "5DVeB7f88awCgWbPfBKF6CHL2ViGvpT9XC1KMDnSF1MiFEwAKjAPu6614UBwKgCR3pBxqW8BCNwGdTEt1qe9h6N5",
  "key25": "3GKTHGSwSxx2YtSQedW4K4Fh6HmD1Q4nNGkBAMaUN31sUkCWWiaDmoAorwm3QDCo5UXMfjVkK8iVn5oETVbehjk1",
  "key26": "4BgMASdBCtuxNh4xduoFiFyTJmf8dEmc4mYrvqipab9mum1NcWE8UyAk8EibN3ja9Lr6g1WbLM3wCqvvVgCrENmZ",
  "key27": "5g1Mcr2huRsKCN3a74ZrnxekxAT48CkFBMWrcyCpE46PWHmmiA82sMmW7CKzYFzAcs5iQwrds2g74Z2Yuc5KWcnd",
  "key28": "2xXqMfVoSn3zeuTuw8rxLuqV9PK6ULpXko2Xywtz5Ut2d1Ei1JEX1yBv5S4zBBf9XRscveoKaZEcXZey81e8QEhS",
  "key29": "5qY4hcp8TkcXJUupqGkGnwFw9Zs3cEg3MKkRDMLD7WFMmur91iphUhbD3BY9ffcoEEqqygmZ8qcpGta899AEYSdw",
  "key30": "4nbU3g4Kd8yzjMfVPM8MmkmrSk4CHrDDJnkgCFqzviA3u7FZCEXtweQXtvPoiWSGKX8bJMTg87AkHtJ6DLX5Db5i",
  "key31": "4VKsbssD2isTTV6cMhXokFmdcQWKBVrHkuFse48Lwc3oakEG5jm5MrHZinC8ocPvsdGKJzfMEbTnthZDU9F6iZFQ"
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
