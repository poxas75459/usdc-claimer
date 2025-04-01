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
    "2the6qd9WWvHVk6L8C5VpSPr9cuNio1mshFseDwwZGH2WdUn1DxX66tRUG2uiyS9nXCibo2FRAchVtLFVmABRsW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eXR7mFva8h8f1ykJQFZN2xxznQerigSNYYhTS329tuZVA3QsbddPaE7AZTHH1TXDceNn3tJoSyKL66fvJVnBd7W",
  "key1": "4HFfpCubsyechWokGf2fuuYvkFjc1Jyg5jtyTs5a8TgMickhS5icvNJXXC3dL9g11H12ohuo1GJdG1bGsPwnXvuF",
  "key2": "5jDa8zeanRYstVwcnXYunMSfrXXtarHxhMQFvVkd7tpGCrxqJ7Js8jrtbvY4WETiJL5opXuqwKV8RUEhwXz6uXfM",
  "key3": "rgZaDBxLQatq2AEcdcczPaHUQc82L9kyEtV7B12PcadpfGSUkZN8AiTSzubi7GTS3JyJ1jgXm4YhndycU9zm4pT",
  "key4": "y555iaGYtuy2PFPbAUJdgpgMgRgzjyWWGGFZa5MaE4nBJdPbhfti2r6ryqsXuSPQvMWGrTyru1iAZ4YuUpyZjxH",
  "key5": "28MtnUx733tipPvcerCWKzq8N3bbTbqaDspAxuVpQYyBcTCJhuoZMGUNwkfEUXZR1bKS9dQgg4yBkaRwdRcZofX9",
  "key6": "ZdyHbmS7ifFdShzU93w1osvR4XLZeCV3Xya1XK1VHRfyQnakDfUpqCk5mZcYiNnxCRA55QhwR6YjwHFVrKzfexQ",
  "key7": "26v4TYNSyfD54LT5gNqx85Gufvqj8y9s2TK5dgVcaKiB7DvrcdhPXH7uYJuVSycUCfUTQv4dpiUJkPYBSY8wvCWi",
  "key8": "2Ctqo2w9bWpxUzfgrYjxvBu2ePgQkVtvgx44P8VCGNWRqEzCsuCpjJDX1xFd9bi8ztsW2ANgbbvqsr6vwJzCkTWn",
  "key9": "2G4PM3yxC11Cf6idUd7JsGzAzd7LDDDMvQDj2NkiR1isXi3EWjeXhZpQfMekaHggDphvimmRa5d8i1jf2GRgNsX9",
  "key10": "4htqCyq8RjRvUkGRxbW7CYJ5occuCqbSpsNfXUDY8384DEPoX5d53tABRGpXRfivzoddG1JouKBjHJq1Ltckgcdp",
  "key11": "5jvNXfWeUAec59C9F4yKqiSufcUn9ZdpojEKGSWSpS3FDyFVvviogvSe6QcR7LNPzvuN3Py2j6k4nTi9kcqJVTMU",
  "key12": "491RHRY6znY6iYpJLB9annX3uiNydPoPc7i98ZJbL7rYmZ8ptpDiyU79jjyxh7CqLmc5jgnQpVjvH4CqXJXYY9zv",
  "key13": "5ivy6iUQYULtE9k8b36CC6FWdG8eHBbEyUQuxsLtBn8G5QgYtbNM3Ff8oRSLCgK3Qyb11EAj2rgK4qxYZgzhCGvR",
  "key14": "5c9jn6rG8YYitvnxz5EDEBGdrj8E4YEhrX3tpr9EVrd65Xeef4fngiyXCUnzBZfsLYLPchiAc1FaGa94MpUpH9vz",
  "key15": "3ZWWa1HgTXyaurarR6dqxSXFUfXaWh7bQz3enYvSXThS7kQxALU8qYNegABpsw4696jX4STCkd4PpUVWsJZBZWxy",
  "key16": "3BHbXArpj1BB4QNmTRfLhhaGasnRuQiYFpCCMJbmfc8Dje7BzAdgmPvbxYRKUzJuyogNwHf2zaghcAurQZHdemMK",
  "key17": "29w3bXFmxhFKjjJweJCgb7mdGHCEUHuUX4r537XohwqCqwrkupsXqmerDdtKAD9YwAx9otoDgu5yzHjrDPoE4BdU",
  "key18": "4uQS1gpkwRJdjhQVicunLty4CrC8uDv15WoPSYcXWHigbeUYyazdYL65ivBQpiYTdXbScG1qj3ank3Ph2TVYcX85",
  "key19": "xwfXmMhzfG1hszQ72NMc3ffzPnGd2FNTNuabAb2vccC95HEff1VCbC8sCh8pWKYrnopgXzR7j6uKEYFDy534y4q",
  "key20": "31KAn6H1HaY7hc1uatDmDhDJDnHxVRdRCGPFyveMvMgi19bY9xL14Yjkqa4JCQA2YjEGBHw9KHKXnwpmsJiPqX1k",
  "key21": "4MA1cKjEM8KHvecfV4PJJ6QAW2uUbRGvG7cJJt2cFP9MkaKqn72xxBioirjuWsJ1iQpxcqPpZ5aNA2e69HetYd3M",
  "key22": "4w9eDJD9LA21qvenTDKffmjsGa56sx3qvUiywfEW5wSHwWBZEZMvxuAk3GCtCvAAaYzxTerPPKox6Q6tBix5YvJB",
  "key23": "5VnGa3vVHXsM5numPLdjKFRNHpT95VkqfHPAeWJRNANx4XpcvSyTpgEh6K92VqvFhAUqewBkVXp8TKJwVwdtWkXF",
  "key24": "4MKwEjtGvPhejCgF38DKW4MdPmu8uvCTEFUjz7wzKKUqeoYgd61v4L1iBGtzWh4rpGugPEurqwzPrNCMUe2dUuDB",
  "key25": "3VjCrWSf2SWYFXz21Rh7nb665afSz2qcKGdNvzZiHJogeTRWmgnfMaAUvD8gztsKZHYkqTqRJ5g3tEDktHQLp7ew",
  "key26": "3CJ42Xb65SJDAFtSwAGX54FxDJo6WCxXaUKZ1eEShXxtVRfY1YKhwipZBayGSQTKioWUCejm1xFyKJ1JbymwmgD3",
  "key27": "5ZLNk62i2BEzPwtCJqCj9P54RhhYGNm6qxMgHTcvXfZWd18uZhDdh53CuJ8oZGaEnvVLq93LrCmfdtPisc2N2SUf",
  "key28": "4AwTaZYo96BpKSsAjCjxCMGfYn7dMvbGTsucMxB3zSGeqF81C9fJqETr2nCECRDsrfmSfQ9QaxrZ1m8jyHUAGvw7",
  "key29": "2AFRQqMzQ4yQfggCFGEMAyHhTbX9URtD4NxfkcgYSTMHLLffmyLfwznaR4q9bnQhpuDPYMSADCU3DZUvEgrV73AA",
  "key30": "2dFviuzugfsqqskLehJi2Tz6Ecopf2CdyVGRZBtifTrZb534No3XPAGVuoGvUW2J1eE82yWvjVSgJjzeRmEiryTi",
  "key31": "3ZvuHJgydsVYKPwD9ANnWLGnxGai9amTWLfvEFrfmYspLuvucmy1PceeoRwAUUNwwatgYWik763Pj18CbtjKbXZv",
  "key32": "3nxXVjVMtnnr75LDNti4MpuRSp1euQAxwZxACyMnLEgU6Q3FZ6We5wFToumxsVsa5HerksN4S2cfbdpMa8N75DPo",
  "key33": "3bFR9oj5AAH7inGxteuVtzotw32ETeL7vqoCn4ykYVLRgTP226gUELjsaaXsMFEYgjuPkRoueKxA8MTPbbJa2seu",
  "key34": "2Bu7LhugdZza3BD1ReEuNb64sDTG2Mt28A2CiNinyUrbeURMTjLMDVESqC4pFnsPiZboPPYTLmUhfbrT5aEBPsw8",
  "key35": "2YA8eWbQERiV5G8yY4oyMV2Wnp69h66KH7nAYC2mowB7Rcf2rpmpZomRo8FC2cgXV6YMz8TGUaM8f79vPDdQRvvN"
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
