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
    "5TFhyPCMoKdGp14NzuPM2oZEgL1BGGebVHji6E6tFqEc3mkFzvuEJFH7jcn9NXeiVL5yqTVGJEGqHcPMBpssPHjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GrFRTogK2Gb6dQ3rHEmrTKUSWYwvBZ97tpqV2T6Sooa5x56h7JVVUQikP7soPJPTAir5RGP7ShLFh4ABD5wy6P5",
  "key1": "63LvZYEYQ5SXsNvmJ28gVpSyK6sMhmQcB7W3vFZ45zuagSwWguJiWLc6t1F9uwuyCbVaM8rEyy7T4LZHBFTptXXp",
  "key2": "5T2zktXenXUFzhAQF95qVfG6zKnFcnFfEErr2PFzspMmX1xi9xcQk1HThp16iZk767kMPKA5TeubZ8ZPZbywrRwp",
  "key3": "4co4hkcyAdQSXgz35wsv7mZv57LXM43ZYjXXyHnrrGBJKMgZ35mBfCFv1dX6CHdjM8uTJqGFZaTz9WfVYUee6XrU",
  "key4": "5gs142Bs854pXqjDEK3tDi7rAWAkVg8BzEgEhnco1MBi4C5JW5XiPcpTwkNJ3AGXmqignEnK3WdxZvUo2h7diisy",
  "key5": "2fVtw8ttXmtTHsjKdrK7Nu1nocwZ3mPjxbuYEgbcE9W4txe3wwESBmpdkU1kUu8QpB7HpAodGRu3sQjsfXwBKJhG",
  "key6": "4HiMSyWWHmA2DQMotGJbs4wz72C6mKresz9p99iftjPiUhFjZCkx3HgnHQwR3Bmj2PPGPsnunSuVoqWcQmEtCDT8",
  "key7": "2gMMECaxdCdYWzXyVuUNtMYWccrLZ466UEN9wHMUroVepm3vseGgBUSMJuT5mzMcFsAgcshyBz7tsJkdxiagZNYF",
  "key8": "3a1jbzvYLDKXL9trvxJdzBdUoguDCxufhetxxVew789veqrVW7PXnTdibkMpDr5jrfHmf8QKKWsywUgiTfeTfJeP",
  "key9": "4nTeLJkPAGijZzGWL2dTNVa8dn9wv3JTaVCVEc4NMrWwWvqXHQLB6YhTTUwzQvx9ufmLsLR6ktA5oL6jyCPQhHdJ",
  "key10": "2S8birBS1BwA4CZphqaLTtSK8Gee31FGBLXnMmioQvYupEQye1zDRDESyZGCbpJs1i4GCWeq5biFLhFNUoPGQqGi",
  "key11": "Y2hV8LQm2quQr8oKUFnwpzyxPx4P8wEPdapTX71PviDkSLaUMYTH34BVdpuZdrjVHAtEScNkBBbtk9Auyhf7idQ",
  "key12": "3aeJsi5jWMGAQpYrSq13DgzgCzS7nSwPSzsBzyHZZu3EywXtwWU4M48VeGp2iTDSvQwym5i2T4DRKfWzxC2Sp2Ro",
  "key13": "kDqCQyxFjDSdvPYXHVK5A87zJqozG2tjEYo6nDMWJr9FYssQbD3EX4LgjU3bfymWe2stsQReSRZWwAJXrs9CqBZ",
  "key14": "2syHiPwLyVswkJMSqoRbhqXUKLJCb5jYpthxnButVGs3P2PW7UNEdGDKAxSvtBiZomrG1NQgZ1Wx8R5Eg4xg6Pzx",
  "key15": "5yabXGWdVaaXtX1UrpndHBWKTSikoop64BBzd6jt6aPX9sJpZfqdRiXWKWjhvC1uj8Z96YrzQYzYgyAGS8SQZyQo",
  "key16": "5kPkq34P8qDCJB7VLpfLoUcbWLqh6m8szkenbxE9GMQputoep1BQQpANMxDfXPHXZaorNqehy68PqCCDYFbaVJXv",
  "key17": "5YHg87JY6uPvPmafmYhpgzZGAotTE9VX4DNPby1mkmttT96dJ6ZSqqvQuxwgup3MnyA6V5vUUDHe1wmxB5xhirZW",
  "key18": "4Te2zvnm72TxtZGnXVVP3YfgwCU9ypCbNro2FT71yaW9EZd9NpS5RvvE7xEpiaFXHH6ez6GMMXgHXu1zmCk2muM5",
  "key19": "3yHsFchkS2aQkpMHG5dXFHnVQs8jR9LPdHKGv1SrVisb5AsRQnfqfbZpRb1UhzUWUgboCFcm61fUvoMWjxyaegjP",
  "key20": "3TRA6ejEf4Gf66Xs3ufSKhGBBvhBPeSimZKcsPT6bkDgGW1wtY3aui8SQpBENkBRezfeu1uxFst6sQEoFkYDVxuU",
  "key21": "4UR9WPym6diH1tWDmGNLLEgYnTZ1r9KPZDRX5Fa36TaMRPfjpBcpyuTGQSrjQPyE7eq4D8ANa6ArwL7SK5vnSMJ8",
  "key22": "3KDcyvyqHHhP2gnfL9u56UXNWadRmX7fsZNaTBDV7YxYEoaJbuLoKrXuumrBfCo6Ldtq5bZCiGaScaFh2KVoKDLB",
  "key23": "2Ps1S2Uqj9HMCyprKiTTKZzdGXUr1XUUsoHbsiiSa1k9kVKkMxRErZFmMQkjc2Z81nfCgUyrYC27Cd52PjwyX72L",
  "key24": "4tEs7tkQ24WDTddrqcj8EGEMjrRXxdHgLKNCbw6ZAQpdiaHXP88XfHcLUre7A6V2G4dsArW7Dim7HQKTdG8g7fkY",
  "key25": "42gw6Zh7kssXVcu9ZDAs4XppHbuVmhRz6hjAcWjYgMGNS5hXT7q4xCZd9XNJoHkFhuLjRq2TjSmHfH9eVp81pEKH",
  "key26": "4gM8sHq8hDPVG9wyFPSAmF7YDge2YPUaqwZ4hRFh3zekpo86pH7it7mjq2kTutt2bEgs1o5KscwVLpiPyuaodaCQ",
  "key27": "EcYm8RYtjwupzMMBhcfqqRoQLiVMg79MDgernw3htPPBewWxpVnks7CUdCDCnDPDDtCPRXCwp7oN5uC1bcC8oGo",
  "key28": "TfvudANXApf7Vq99N5hfoHCTv1Yz8e3iTAjGm62jkTmfgy2eptK5H25PqH2rXHUckRMZnaD4tt1TmbEKFvAworf",
  "key29": "rSczH99dPivkQwPSqVUevNwet1KNdxspWW24SVcsHB5ZkNVccZKHm5BgQNFtqAFohk51a2TDU7gutJU6S4eRoq5",
  "key30": "4ovdvNYVS2msbhb4bCp9ouLCapdzZaGWqSpiZLnPfNfXBisszCS5WLADV2567KrmM1qkgJKDgWsyvTZawkCNYWTY",
  "key31": "4YZbLuGGvhqu427YcBVuznV8ZrTBrsidftmdgEBMo5BTcduSmdhfNcJfmvkKfZ1qvdfmuSf1FrLXHGxJzQFLiuuY",
  "key32": "4UFCEUkk1YBDjypJayFucMn6brxiYkMcrsFEDMUz8spKYhQSXXwkVMonCzse6ivFRt28WPHqhCGuoaGanHu7NAP1",
  "key33": "pxg4Gbr4Rn8dQSVnsPNmjAAg2MrxCPoKBSbJYKfWPQVGgVLz9BmGjoxEf65i1CSZrCdeFxrtxVLRzWzTjYZfnyh",
  "key34": "4chEkafWMbgcEqrveCKFdUFxZXWfyyMujryqXy3R52Lp87xatDY2fcLbh9Y1WBHCwh5ySn3gj5Bo4qv8y9z5vTgS",
  "key35": "5FRPe1cBLwZ9rBx9wQtYLY9khQxciztLoj17B8rcSmuKqogE7sc51HDtQix3nMtEe4sZX7AkAN6qe9AeByxCgjwr"
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
