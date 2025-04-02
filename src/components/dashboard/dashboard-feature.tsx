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
    "4S9xjTeZfhv5F126E8rHRttWohCBd2oys7DXSJKhuEwZKCKL4b1czMXWvrM2ERvJy2vzthpTJgqoNcoJ1yHMtRAS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j7SSq1WGLV2phgZA6SyKXFRrdrpzYCPYkgCK5Sthv19CJGswHCHQ9eF9WrP93HaodvA9o13NgnRRB4ytmUNa8Jk",
  "key1": "57veQuc5r1nh4SVMwrZxmHV2L313wq2vZh1uvcKha39QmVYdZTf13euAXhTXi8c72tjzQrv54ckwX6KTcxCkqw7d",
  "key2": "2hcT2ofoSNzq94ASuy3kaJJdkntTG5D2YnH2ojAUEi4ybfosvTUvsTgVYMnzDYcaLLCoEtBYCUSzKcqktmayxVtf",
  "key3": "cAunic8K8nXqJVoVg39sgMRAAF7pzoCAsP7MsnPKsvJoV1FFoQYVXXSyyNG6uMRqJQiKurvnkqdkD2cdqcaq5ov",
  "key4": "4N25jDq6TUYexeKsvVxqy564RzagBpn4MNQuad6hRPdrK8Bcawa1mQSabEGvWxWCmDYn2JXLb1QggmniYkdnGxMg",
  "key5": "2K2iGTYweY97DrhxquJVB1jzH6nPcqAzvAfD7HLRg9WgoBmiog53yKMkDvs4CFdXG1SLTJoKvsKmNfgb1M74wSaE",
  "key6": "bzGV3UM1dVj6oHiaA6V9AN8J8k9XHqGjR5AoeRGwPJF7uzAp63w2C2h6p4CHYk8qU8JrbBvCvC4zbCVAhaBHptR",
  "key7": "2ynpguKT3zxv7N82zUBNBZ3w9CWDyufinsVAQL53N9KftBECC1Yo6R2CMfTkH9q8cckgyyuVRcbiTbxYSirQ9kpn",
  "key8": "31XsZHS2s5p27jfPghe5Q5AchmD6dWecAWymeUgEhgYA1RHPLYWtpLzi1VZPC1cmaWTAVdxzDWYmbJmbaxSQw2RF",
  "key9": "5KuvVryb6qPFnvy368kk3gjLJg7EtRgfEqK1JoNGmH3zj4bvmq4oeYhjDBVN4ALsQyUqqVGzYnmQepL1sWBbhoV5",
  "key10": "5YfX7XaZRqJmd5CZP7LDuXzPgxi1ZQsHoq4iRcNsnd8XDZa3fpwHUhkAkAdcmfDcPWfXC5Eae9S3TcK3u2Ydofms",
  "key11": "5xAbniKb4H8fFwS3jxkcXpnYqtcBXU4MRF1Dak5UBkebNGpTHSsCG1zxZDtKE8Wf8wPR3tE1mNPUafqnsyeNarpP",
  "key12": "2PvMNtJawVFoXanchTk4hQuNzXfRVfrHVtXfAiuKkC96hVK4JMG4KTjuu2qCZ3AVDysJkvxeKCq4y6XuwPEABtrA",
  "key13": "2H1RhZw2Cjd3rUdX7DQUvnbQp1Y62nbME3Y14DcqtuZxsTsZHgG6QMcYPFhjv6PRCpupJWdkZQ4e4UMVXz6gNaSW",
  "key14": "343vLYEgWwrKyGGFdHkEsJUWs4XVAwuPh5JNibq5azyTHDQu5yV1LAKm6j1xgiiRkXefAhXghY7peFrkiUR4yEBX",
  "key15": "pZTEK5XbRtxc2m3ToZ6VXrBjLeueeW2LtJEUjxk8eWtfr4WEKQgEjXMgzUGj2zSDC1nmntxViXoBo1GFWRCDmNj",
  "key16": "zgxGrcGz8GaPyKjpEh29VrbNy9n5VYVvJ9j8JEJr8DHbieWmTUmKxn6pba3QRvgq6gV8rXH7zoFAArg2r1nbVPH",
  "key17": "4WDf5rwjHWvhh4CecgVjerpgQDcf7xadx6uLHDNjrH24LCWjoPqUARg2fdRWYps5dorBbcw7pBdcK2TYpGHbXU4b",
  "key18": "5FtVb1jBtJmqh3f8T33kAFrdt2qoD4k1CrP7wneFnFbX8E4oHVS9pPv6KFkWs95Nhw3SosaCp8qEVQPaYEQQZFLX",
  "key19": "5oapADuSXTAP8dEhQmfJrdx2hgBikzNjZHhJYw9A2aH45dr126PYCBQM1aGukCGQU7ZSCm3yiuvH831roUQksmVV",
  "key20": "4GnWWiXwZJ2DVmo3pQBDSJBCEeGxxh575qrBHdwVRsg6TvCjTLr6wSDDdKztTbRKxt722Vpk49LuZx9TWib8RP6J",
  "key21": "FgKQxqWYtkVW4bLjSaYnD8ysg21FpJEwsYHEFrFWJuwcJcCXUvDSYLHANZC6omEqSKJWw8UEfBo4rek6U7DxuhW",
  "key22": "2J8bcXApt3ddthY26QSaJHtE1j8tXQApKUTZLCRNcJ8W941EMDBC3xVFoPwbXs8W5m6zuDrRdpe55E6bxWm63ZYG",
  "key23": "5KB67o31Tt1kTPP8BwkKyf5L39cNDrjG6rEWHGQQYcNREeaPfWTvUiASzP9n8s8ofPWtZUtcofwhRjP7Xk1Joh6",
  "key24": "2YhWx4LSZoDpztu2NjDHijKtxysLtYiouW7Wj3qy5KPcQ1WyWfT3MGwxUXGGaLHsT49SqgUkXdJbEmptSa3MrvPQ",
  "key25": "2mb4RfMFNqi39mk1q9BhFfA1Krzk2xDv9vJR3wUwvWA2bNLAuriMQrX9Z6PasBmCqvfDusN47SbcJ3zBn9Hs6p8L",
  "key26": "5qdE7FQcGaE4GNSTLhev5FihgtNyGmHYYtE4AcG2d2A6oMa7MtSnMhbLncgjWSP9jD4UqR2eZmGj4GCCsFCzjowz",
  "key27": "2AcANkaSkJuXrJDfna1QRz5VzyyCQNyyd4ym9gdLfKX4TktgmGA3Do8LWDKyFsGUCTzV8aZzyEXgLmtHXgjiRxNB",
  "key28": "ZLASLLeMs2NiuqP33ewH9KzXZ8pegMRPQ55z1NvxWahcRXEbFW7XkLAHwUuJZb9YqQLnCQaCTCrc3tq4neqZ5wR",
  "key29": "4LXnhFF8LAc4ox2J68nsKdPP7ThhnmuKvDdHjfkZ5bZUGqjjhKQwND1DGa6FgBQ1kgjYq6w7psLtkhaMQpHCz5vi",
  "key30": "2ZjZnCaDMkucfdDMXyHwLx3yK4c29PQZsPPaATdSJfa4Ja4mbyuKhTBF4AGbaKsg3ZvnnFXyXXxo4AdnvbgqcdDj",
  "key31": "2czpJ5d2kx45odrxXfzFwnWbnQRLHqzmK3TLGno4Fgp6ERSJDKKro6BgSar92EAd8Z95d8F6kTusPKqXRhTn4dn8",
  "key32": "2Mv9vod3UfxAgeCBXEDFRuD2rCriFuDKrMBkC7t9Sw3RZAd4Tg5AXF4gLq8e5Gstg4DgRwiebbzcNfJYdb7pF5Ff",
  "key33": "22MooQWLn4UGaVVBBkcbRWW1HAeTjTHjYvCKzKGeUpkDvKmoyQ5syAWaN1mdueLXyLjXKaKm6tWKyfN3Kfw8JzjD",
  "key34": "5QkcYXCUtKPDmSxzp5FEHGLYQxjrdsZ7z72nYpura5x113RsZPEMdfwsmiwfKiC6c1VCcmPNHEnRj7Xibbc6jeCq",
  "key35": "4KpEkqkJMAzEgh4mfdx1vyQwBv2FYpzpH1dh6rEji1AuGiMXXNKpK3uxw3yo76FuvMuxKcUox4N2MefMYS9CtWYi",
  "key36": "63VVfmCQD7fGjdXgMTVRAFA3w7pFFmVq6jU7AzMSr96gw1cWbPTq5eMhahZA1ui2TLBHug9rZWvw4i5UHJoPchXu",
  "key37": "3AFCkLRDrMVZw3pZNnSpAYkhixbPn4fRUVNMtKf2EnzttGVf6gYYptr9AKjcJUHYREwEboQNN6SfkmTJZaYH9mB",
  "key38": "5pcnPJSbaW2MAF5h11ZZP1cPiE92tZQ6Hkj1PchTRd2FjvxCGUpLPDQepNbFzXh7tYyvwjwM3h4Wmaz1ycVrwSsX",
  "key39": "cDjTyQa8Kn7oSwnHGZphaCXE4K8KVGDAgY3UH1Ku2T4g5ckm2pWUpZjoDxaKoiMRWYNTteyF9P7Suxki8aabqns",
  "key40": "56nQdtqn8eLJxmN4ajCd9KUx8Dxe9BR3UYp33XqZZ1iL19buziUxDyLt3waJeLtfoRSyLdYxGexju3zwD27CEBkN"
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
