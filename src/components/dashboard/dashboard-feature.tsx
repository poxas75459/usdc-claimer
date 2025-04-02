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
    "4GfgmxsqYwGJHWGWhrJQovMHagGp2BKbryEW3UDABxiEv3aZrqi1Jv34UHutDNBqvBmikRcLTjyiB9UQ5VXUc9wt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xxt23gPmZxC5LrVc4wBEk58zUbfcTh8FgV6xgykNKRVitDmuMVqDUd2aGo7FkjFEnfYvFBTWvPiQ3YEoxwuTAEq",
  "key1": "5evpjYCcCxrQZwMTHU1ZksnhzSodjadkM5RmgrJFyMmqVc4ehHR2zuTs4qEavQgAgXbpwfkVeD8SHacEMAq5Zbqj",
  "key2": "Vt9WceBUBduwTQ6iV8LaCGc3jRAPdVycjKLKJeLicBWRqxDJhY6cotFDkNxYXeUNz8W2vFm14a8hWduwc2YEnQD",
  "key3": "4X4xiwbdD7Sg2GWUTmpjNseJtkF9GratwLdsj4U8iVSnjmrf1s8Cd6fMRmAeobTn3gTvvurZnqEosZAxAJerSiJ3",
  "key4": "3wusHQFPdsWhyJotKs4Z3RQrXqiBgcZ681bCocQGRtBZ6kFsva6HPqgfuG9cssg7V2tNGuctfEoV9aJJCDvcWGzB",
  "key5": "FsErDcW8QNVwGoSPVQ7ETsca8bzm7RkHcUhNvPuVKT4A5F6MfgX1GBegxcj4Nx8UF8rfHJ8ZnMSukpLExJRtCer",
  "key6": "5RGzC5wpSB4xyoRyvF1ERXAxLcEnUUDw9kyWsR7jSDoMZ7vWiSRi9aA8FUuRP3aWduyX2ScMMbZjhTFp23GRbMJ5",
  "key7": "3KWDxjoxPVL8zudNJXpU6VjBDvAvJMm8AJbDGntChpJ1mozWQj9gtpGDBxUNE7iPU2EenutnpBkYDwsMHdN2KBox",
  "key8": "4K1CUdRd6T6BVH99fV8u114yz88j4AXwxdoKsjwUiFYjwTU3QYe2j8bMjjG3GvLfvRxxNEANCmcRHLG8LE6vfGzS",
  "key9": "37tETKsrcycbcnmvxqSDrTKuGJuSx4DFZTjcxTZAzzcCw4dNv3WmPvqQNtEDys5tbkc7ACkezMaMewdFB5GScs1C",
  "key10": "3JboGyBCuuPfJkRjUjCVrL3DXLLPCBzxPMKGaJ9x3mEAUZaFgn3XtbPrgZBuP8RoKjE5ikS66WNhiXCXp9E2Un42",
  "key11": "3FC3VsDTFBfyYbcjrkMpDMSwEVo4hU5rZ4Ksn45rcUT2ADsZgHmmhK1q1UH4JYHKKJ22rtHKp9eUkxu8e38yEDiH",
  "key12": "2vQ5TPpzNMJD7676CQuHVE4UwVZR8abvHWsf4F2DBBjdhTc5ynhG5ve6TvRHvTrMNSxTgqSJHHytdf2yzL3oTauc",
  "key13": "2WPM8KcWYTmEDSoViAujiqsntyCfrdKEhztMtvsQzMTBtxUbWYUG8MPLXjWwVcHZn9sjzPQV59w4gAdkMxoopc2k",
  "key14": "4Wp3hdE2AuLstgm5JgZLsJqNuVogxBm6zENQZdE9joh8pu9wt1jRRzDmQxCmfExmTdpGvSbfPVUegJtZEFeuva65",
  "key15": "3QqUZPJH9vugW4nSMSX7Twknob2CTuCo28duTXbhQgUjXvdpV3usTcEVCrNNydvDM7AXjShseozgo58hcTduq2Jr",
  "key16": "g8WZfY4qepZSvmpBxuBx5qdsfuhYbGPtbpBVsYXjrq3mLtKgGa7EkY6MGGmgFdDtmgfGbagJQuaHyNL46adCPNF",
  "key17": "2HYj7wSbyBP1uWB1woYPKUJmHAUT8m1gaTWqnpWuJK7euoVVkDWdahi2kUn9vYAAnFR2rw4XxLoDGjSqUx6EDDBm",
  "key18": "4YY42u32Q1yYHZ2yhs6iu2pTNV3zq4DBuwjkxSWBW4nYrD1oPYZXZiCWs9BtjppAiXvbQvzAcn9W55qNUFFjhw9k",
  "key19": "4xeU2k9YyMxz4ngEXBexpPN5ngV2wKXwSTc5gx5ZrhMuqRPQWz72WDwPLUpdy8fDCvhB3fsbiRcQNAPk34DeMrA7",
  "key20": "3rFQwda9U6pRSz7HurbFKyoQq4nuGcdpoBkYa42APoHytqc5Dt7DmJS5noD3Ac4BcVa8aQ3F3H6iEBPQwx2aAJrh",
  "key21": "4Xh8NPqEuxD1suoaa4V9vdJNGySssXgXbdjqMe41pqcyF4gJLNseW6Ckkp1zfTE3rzTk1n683y2r7o6h3FEZEoJz",
  "key22": "53JiEsgY2ZvcXEH9FfqK2qKHDdiGb5iJfHSfiVkDifiM73mumKHWcNknbZFPmQgjUqhwupBbBDi7JB8qmenSLHiZ",
  "key23": "4KvBgMg81uh9BP7uznPQELD3LUAGM7FZuh3VDVqnv4HNDFCA38ugVcg1rZ7E3ietnj1WGfrddvQM41PTyFZadCNT",
  "key24": "5v9Fg2dyayxR4MquojetejyxNdVXseJyLNFatCsGASDweCfqyTjpY6enW5gxoQXUteiTBFo42cSSpGphL69wFy2y",
  "key25": "3SH5Ut8h4U7d79PWebA8MSFqzMpMScVSHzko311DxCkFPc7ZSNvf5w3dFTB3ZopNL6WKNfvSnXPuHV4RG4ron4ej",
  "key26": "UAXrBhn8V8a6fj2g7ras3WEBzQHfQGBBwUZapz4xJ2LFPnm17M7Lgr5VNbe9cmuB3f35Z4JSHhVs6XkNStWWpC4",
  "key27": "5v7VebAaJVg9rxbyNTcB9yAAUvSmbwyjXVCV9vxCoafgBEKrxgdZ5DmqMy5hzQd3XMT2vx5MXjvp6qWAR53q3gad",
  "key28": "2t5uVUDKzkkFVC2EkvkweaCiQprFsjfcPo6dn7ZKy9UgAC3ZVRCtWfyanGoJJp4e6Hu7rAFGCU4sjEYZ2r31F1EW",
  "key29": "2aSR63ci2cU1YPsiuCi6qKDvWya69fHjPBVBpaF8ByoTuY7u4ijrzJU9Z2mr3fd1mgwFuHfpUYGqJEsjAXJqJ98T",
  "key30": "27sTdDNZeFUDr86h8h7S2R6deH79DjCXhZB8bGoLS2GkkMLuGkLYBsqqBLLDgoymr1u92K83uhFt5QtwdvMYcjgQ",
  "key31": "3FJBim9dhZFq6MMR3kcJsMfd5X7YVHmTyxLujh9XmEycs995TR41reUNtL8BLZBoa5QovwV7h5Zk3wLAnyNXnspn",
  "key32": "2XHcgNJbwk1U5CXcWk1GvHKBajiyaptCJUED25uzyKZhXzegXpXtRjW6qH86iCCvWqpDNFPWmEQtdCUTB718RPod",
  "key33": "2zo6ahKqDPuhAAUgP2upw8NiLGjizJzA5S2vq6B5XFmefzg5PVvvZ7gS9qHPBJjAZwntK1kdFEGHk83heK95p8NV",
  "key34": "3NMzahUFnejNVC5PU7PNXmFUEhMaZGAFP7hUiTvgP9N7x9x9DniQAZUjCbqtaaEEZtw3ENmya45WF6eaUzAuDk4S",
  "key35": "5sEy2ekXfGAniJ1XPiYEQ3vjEAUArs19pXU8GrZdQtecz78rk3oNP22BvJLvFwty35jkhNgXMpLcZKeNhCk8ruqS",
  "key36": "AYmaXKxKwLJ1Hpx7ZYQXTs1QVfoMf7R1ZiNuhYhyyiKWFiSRU4rKsSqBVkKRMMjsp3uJeGjqBebBiSsD2hmeJCT",
  "key37": "31sP5qBpYhiq8rFbJHJM9NkTLGRCmHhZYnYfhX6MFX5GbpXaQtFkDaLNJfQ4zWbEyTGhfwEtz3Kd6U8UnaiZSoab",
  "key38": "K5EVD8psS8kZdSP8b9scXN3YVtM1drzmSwZZJtiyY5rJHVkXEobqFy6rCzacHKVgtppbXnAsVmxsuXYZZNRUZQM",
  "key39": "49eZewZVoe9v5tm8ZwZp3qYUnevrGg9Adqy947n82k5j5fBdSy26AKhxXUEpEq5D3TGyuXNTTT3XsP5F4Zn8Vqn5",
  "key40": "2B1i91jLBgeqbH2xSneCrqs3QBHx3jPFwjpHxpo2RRjoxB9njB3Jx3WJSV96X8a97bRjXCzVu6Ma12RDbWhhjFuF",
  "key41": "4tuCUidzwxyaY4grB4nV6NckmKa4YzvNpyHP25Vjdtf9P9XcfgRaskcsqTSgSep9pUEtra6JrW1sSEnCNPkUQQjB",
  "key42": "MNjeT66pd7Cy85hY3NRKTrV9eBWJCm35nH1vU4Go2MzvhHnVPvPRtMLHsguQUfPTSpxfpTbNDUhhaVV3D6fU1em"
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
