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
    "3yz6rPf66wVmhWkbqWsAg4fBHo8hR4hQDhoacsJ9Zas5w3bMtSYkLHFf6JZqi2cUh77jA6HP4SxEBmK6BVWShttJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CyLjU7mhpYQXo2MsPbAcmNW3DdJT4cMtUEdzWcL612gRGVJM579KRcde9eBiuF34gWfaRUujcSk7csT5aeLXLm7",
  "key1": "4NQmhVzkc93uFM8BMLeaG4f4p2ogxfNPgstUvdUEdQk3eV4X34cWDu2RsAhH5KU1R6UYvJYNZ34kmGmkuB1s8DWL",
  "key2": "4cfR9EQyerqVVPEuvfXFn7uXhmCWX1LBZNs3nR8G3y4zXNUXryUhuHmjjtTvy96Zjr53iHPeD6RumC2sEAMM7J8z",
  "key3": "3gUL1wTkN1ewR14CLdytd6L9C9gs6hNdeYkwAXEy9v7qgkW8pWXfW2MS7nhFwCm4Az3886JzGgkgUwqaWqC88XDd",
  "key4": "3uzC2ASBmFRkruQeqQKmSWwmbuM35xfdbEBjmAyUQBsjZxokZTBFGoKy6wp7FVVsme8D3b1f4QP9pC6vUAGpdsT1",
  "key5": "589EN824QHcMRAqahHKJ6Wwx9ER6NzeMhAenCt1qj6Kq5Q4uCoPn8jttLpJHUmeN8866vgu2oBkm2vrbRLj9H7MB",
  "key6": "5Di2BjodmDc1LCLtY1CzGhs9E8poLQsBH8PFXNnwM1oRyRktpA7jyCL9RUSDDQma5jaB1wf4ZTSeHQbNWwuhqxHQ",
  "key7": "4UQ4MBfwczhZi8WDuyyahFBKAs9QkPC6CznhsSTR7pV9Wof3HbN8S7oC8wa8x5T8VcsWQKhciZug62hNDTuRNWG",
  "key8": "6zNxQ5zM5N2pAJ6ieu2HSmpenRkq9rd4dsoEVuJAMhJ85qRE99v1LhfbA8ysdiP93mvxjrnRFhP7PtreGbNTV3K",
  "key9": "bRNxrMu7WaWe9hybFKMBZc18RgykaRXmvaAazzBx1kaamdAHZApk5btqb7ciyHYu7Jteydr2J7NCrSdCFNGz8yy",
  "key10": "Lwnoqi4i4HAWCD3D38QF1QmmZPGxLZABPEBgHSK8fLYSCeathTBGHTkd1hyBmgk6tLeRbrWByLx7w2SahpwfHWJ",
  "key11": "5fQeSc5AHesq8fWcx9gk5YripHFVrTBVfDaMNZa3uCFLdnUxJR3rXiC46wefzexcdfNc6gxtyM4Zpc3Prso2sswZ",
  "key12": "5C544PdFTodHe7S4ZsVXryUZB51sehKMvvctQE65YWLup713URGcgUnwXBFAW6636rKcf77upgeJSWvNa2eaTtEs",
  "key13": "wpu9H3MTEproQrY6bD7CRtxxH3VkXZJE77Y2mPwhqWho7SvYiDCNnPYZN5qDbjGD7a6yPxqTzgMrX8Pc6D7VJHU",
  "key14": "t8Rq9KSB5g5VdgLtbKRWqfMP6DWtdgw36mBrp48KEmBLWenx42RLKFxPB5nMRtfuWSR7iue7Q3BcTauyHaAfRaE",
  "key15": "R89oY7g3Gxueo34YgvsHjTqCUmicFARMiUFDhq3XhZSi1SGvtAmBVywXzB7RbjNBT6SLwa8g4Af861AKxDPRuaG",
  "key16": "QG7Fk3HbUTMV1V6ZsWGj13USFMVB1F58BqUdsZTFLGTX7xiXUj9esCEmMPjVyWUN5QJDXHug5yvsQJW84KZATiS",
  "key17": "3V1Ac76gnKDjwrPFVXf1JCxbYci4KbXFKD2CcsTYdJLFBH8srG6mbZNDntTNPDVoxSZAEyDzvDWkud9e3sdYFKDJ",
  "key18": "YzibgkBD395y48NTQuLsU1hFzEp1qabF8v321Gfu1PHFXyUbjJtszRwCkzThqFBz34mwGGFyve1zY39wEkf5ShE",
  "key19": "2N2VfHuAySRdZhs6JPJJ5zbzhF81v2PJ7KT5CTj6fQNPAyQTdeisjjQxgJ27fVsuYLJVCRxXatXjDdhKfBbG8WhZ",
  "key20": "4VkWqc9Ho25mjAsbY5eMrgnELswpKyeCWe6M5DSEoAgUab5H4jsUgeGPs6M8sCMAtjhLenUKeKSFxGu2FkhyGDLX",
  "key21": "2QNp1u7YQDuCLjCTEbc3cgJZ2AXcykwZnme2pMUv9bNUAn9jkS78363pRfob2auKcJhx391bixixiJsWSBjRD2qx",
  "key22": "4taCdTShRTSo1fLXNsUGm5N76Ln1emBTRS1SonSNLTSdW9rwhPk5tqZQZrg5jGzvkxEpBpTrLmvDCdT4NoPXvyYk",
  "key23": "4CGuPqrbTt7oPfm4Q7tseniTQZ6mnFx4EER8vbnK1amYATyQmZn6RyKTAz3tRh5CXLoBirLLqUNUXXG5djFZJt7D",
  "key24": "2Age4YtHLgfs2ZC8fGXaTYdm974tesRKTBsQFpQkThrk6dCXcfgq2Bh1XZzCuDzs8C7K3GR5gUxCmaw34ZFNJ8Sd",
  "key25": "5srxJ6NdcQLQxrjoQXc3HbJiPY7QDbBAGKmp75vsNHTGcSYMa5FsDG9a67cjp8cJtCygrkKTDnFLDiawSCV8urb4",
  "key26": "62ofqzePVRqiG9BmXL1fFMKfnxCSQBwLaTGwequcw2kspX3UV2ZY4gerFSkqamjsQrPGVuFj6QPCjKGPUmYE77BC",
  "key27": "4LTijv5DJwiQQ7J1UKEgjnTaMqAuDQJuW7bQQYiN4Ex252u28NcbzWcyUEDQZrf8vTq84X7yEBfSPzbE6jR9k3m5",
  "key28": "51AmWXtZmxVpQLtTD88n5oFNPpD6bD3ryk4eTGaWBfcB2VFWKsjBDqXPU1ptBrY967W159c63bzzu5Qi8FBLcbp1",
  "key29": "4g4Dzyx975FJz2M5DXWV2972fB1sEMtw16cURcz9iAv4tji1R3JKLL6q8ShoUqHB5jk6bZA3YPNY7r5JQo5QEQwb",
  "key30": "wVTr9yiCfaGeiQSjUjut6mUBJYV1sqBNScf59ndg7qvzCoHQ448esWddUC1UN1PMeeiUxSYbHD8EK459jo99XKk",
  "key31": "4wtX5WgTZNiLmQcX44E2ZrvtuoEtxhgNLQ3oc3AKqa77DRM74EUq9L9JnAxQXJniYtganAkoFohFDwn3f9cWB4KH",
  "key32": "5SFX8w9cmj2H82t9vRfBt97HqmvK6yfQVSrjwwtSSgauNLMC3TPaRtMr8CkWQF3bBZDVouRjvUERWDnLi8Ki9poA",
  "key33": "wi81MmXD6txzLuFYgs33kBrPdq8dyugzSkUp84gLyuD8A64iw2vaBgVEjmr1Hc4eRdxd2oY7nZP5M8JMLHiZGPW"
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
