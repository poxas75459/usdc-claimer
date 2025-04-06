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
    "ECtCPgyp5KKoEoCCWXQ8aSaA8zjEvx5DFrzAVAqX8P1FRJRKR1PYFoxEVSfXd7bYX7TVdj4M4vWEohEmMgYSjKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ECg1ZBMuX33bixGMUVNoJNggV93CfH37oeZ4qduAs5yKdXsVazQUidENZu9GZhPkK925E3uU6qrX9GS6kBkmHVQ",
  "key1": "NDj6fuwARpwrj9s4Q8kvSchsfVpcfXe5e8CEws2nkWKn9CqPHCaWDsEg2unaQFExMdRmWW4dEuKz5J27Cry31RD",
  "key2": "e4E5RJmvorNkRxmqta8NRqY8TVgtF224meaQPBaytYaKV2LXRSQPwFq2pfWBhTkDL5GgJypsS6pSkFMiRFAmUuS",
  "key3": "5izCpxfRCzow4CkNa92XGSrbBLuMtv58ggg1VuwPjgZFnLCiFpSm4kmvmU3FuuoNoR2FKBTtnZXvNeXXypBph57W",
  "key4": "2e33ibvzGWFVM4LfXhEKeMLL61ZRcAkKPsajs8HzVnGfmjRMc1bwnCwqEn55BBFHExUfMprkvbESPvgkfvPwYJv",
  "key5": "5Uzzn8vJWNNEhbRz9bmB3teZXPX1tgjYHUzHMvp6vMiQspDbt1ivAkiMMer4dTWGfq2zPY8Q2sQLnbquoKsx8uWm",
  "key6": "2L6oBnPUTpMhCec6MrdpjW2chzoZqwXdv6uubcPazTSHHYYCLLSZR3Vy3FWd5KJVS2WdgYowdr758cZVN9VxgfwM",
  "key7": "41oznuGNNNrmPojps2rLsm19tyYkBiYbcs71MGTJBtdakRMwGvFexdKA5qQ9bpFagmiubb6kq6Ce2rp5EWoyj9vN",
  "key8": "4xTeD5KSBp1P8BwCWaof3sge8Aom6GYskt8qe7iZobAJL2LTVJJu6FRe2ofJRuF3b4UjgTV5i5S6r2eEXcRmgGWW",
  "key9": "4ZX1NwDepQSeosgGs2FGdFRG5rC8e7EP5QSqzSPwSVocZefk6ga45aaYKqNbJ6pv4WNeJLiuh1dGxe3YJWPEuxMr",
  "key10": "5Aj3HVXMR7t8eoQvRkEim3XxTAfyj3PEN598FAYtVduFh1f1yCwN2QTBuCMUhB2rqg9AGvwk4tkM1kiZ28QbPRWH",
  "key11": "5Lcb9X3yZPaRVrFq2T6x72Yg5nd5YaBe2Vb3AnM4FpsjZwYjbPRGkEg6gjYovkQNsvRwQ1ZPKWrV7fzS1nBQvnsf",
  "key12": "59GmTuvkV8YjoYayYLeLXBDQsrSx6wCAQQ9HvBduwRabYdbwTK3GFm9oN6LejXGxdPWB5a7f22aGiEHTrxBL23cR",
  "key13": "5Y3v56k51yirtMnmKqUehpNrUh3EG9AgWx8jaPVP8VakRgGrAsKegdozxBQjucYrxu29jJVDXbEVakyzH77vzkFa",
  "key14": "4fqU6EeYYf9JfuW1VmYDwvAHGdjwcWEHCU2oCA41LC6WL9d1BB71r4gjBwgEGSbycCiCGSdBpnhu8YAduvfHzE4",
  "key15": "2GkMaogK8UN7ZeP3XMC487CkfEtQfCb2mDVZ8fzj4WBfG12JPspeFVEYurttn4V5jJtxQsUnnsBmaLGZwYkroJk",
  "key16": "4DaMyez6PwM56pG5f3eBa2HocPRSwMK5n1RtvmqdgkmRzG2v1VAWps34tKBQZ69Xr2PPQptotmtg5phsTS9VSGfp",
  "key17": "2vUsGfHhGHNwxPoFbNhCLhtinUccAmRZSFEwdoGdgzLRL3QMs7SbzcagxwkrJn9q4h59ZMvfrP2xQkiowAqnQ4ZY",
  "key18": "2aqcRcfQ7mNGTVeE5QCVvMny1vnKGsfQsiHKCcqHvAbJPnx6xBXfg82mGQ8MvaqXCjhJY7cVXXMNwHsVCC9dYwBA",
  "key19": "2uUiS9VjLQLFU4t8Ui2YqgiooZ4uMtk9G7rdRp4rjmwzxMv96sjhuQ6kpMvq1XvBXfUSvTNAq9CfHh8NvF6zCLUV",
  "key20": "2sACXW14rsQGrCoBEuX2tqy3HV1Vb9AFVwma1T3AXZMwWimUdTjAQjQKZUeVHzZNthapC1DgGrPRQcZ62CUbjJiW",
  "key21": "4TrcRg3GYCojcvHZEuaomyuVXEMcKDbh55Wk624k5iAe9cMWBbrWARF6Ef2m4NpLmKkL4BDisk45NpBbv6LB86oi",
  "key22": "5R8NVxKne7SEftuBwYWbBCnTsfH2VVqh2h5gTG9h4LiMUb6oVkkR6GDH8tT42AEPiA7UeC2ZcdHhi4NcY7nevM3V",
  "key23": "2Gq9SvZ5JLJEVLEq7iFVaZTgHsRjvHGaCYBt9NLVmzmFsuf4vwjAG9p5Zza3tecuqQMHKq9eyKPVu5pnwsgHruee",
  "key24": "54cJ4usmT1pWu7dfoerynxMYzeMJjdBPkhceH4jzYmH2ma2R3ujhru1fwY4cxG8ARqSF68sk5vByvSmRR62j4peF",
  "key25": "4f692FdMi2SkT3KzoA8iqbASpP8MasTKV1N2BGDJDgiH5Nm92ReNH1NddbdVano8icoYoPm6pT9wk1LNX2cQhiht",
  "key26": "48cHWzX1zTJmuj8SaVBXhhcxhDEEk7VjPJjPKp9ivknv5LFkoHGCp1GnSuHFizHvMRo4HtzNeNKoJJm6acygPXnz",
  "key27": "2napiJgtFeBhjDCaneiRWVh1QEVfv55DnmaCr18NJZiQaw6VotKyeNEqcu2PjNM3r9opbjewzHfSdR5FfQDZDfLW",
  "key28": "UsA3ZygSbuSmWKeMNk7ZFnFSNttB5oaG6B8hCnAw65cJDvtXPbU6zNSSL7hPLiyL58gkuqWiYiKDHjTT7gQckk5",
  "key29": "5mF5zqMa9ngQ48LKbpjBWGCQbyUKfL9shAGvtiSR6oM3Deipfg6fWZUtUTKuT8g3Bshs9mPzgeeZ4JJD2nvBikPK",
  "key30": "28GA8taRchyMfM4SZwAUqdYZmHFa2X7NiHRuL3twSxS5FvN6wSPVxA9jS1sw79fxfXHSMgUchvA9xUZi6grDfWz5",
  "key31": "2z6k42TGyMT83cnJBY1WQ27gZDpasAmL11LrcP5VyF56CYMJe7QPjFxeC6aicMADoGukhCZWymxoL5R3VDFPdEVa",
  "key32": "2QDn7mp6QZonbNrjo6maFAUiy4DKjxhCucXey8JKMazYVKrxDziBTTooNNwnuxvoNJzsrZpbq4gBeqRnq16tRNox",
  "key33": "28KVtk3yYLCMU51LrUHvKHkgBu1qXoYyiWKPSsMpwQTgjNuhojX7otrnAYxd2Qc2RPeBjcvu6aKuchonSP8JwrGU"
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
