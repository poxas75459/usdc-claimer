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
    "4DCSyZr1SoLsz6VuMMuwaeiEtkPntv2U6YDLppPCMpJQRLxwKgmpyxNBETxsmH4PsvuMkL4iDhoNAbZBmFeBqFa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u57CT1T2doScpm5kpsRsJuTV8NRQHNwo5vcNWR9yqgimqdSJCG1MoJqQYBcaBS9txHizy2H6e4vh6HXfgJKJ8MW",
  "key1": "5goyZMpwm6PoG9byToVfjo2Jq4dhJPmbHmKtisES8TGUiNjTxcU3rNj6Dj77VPSFUpmw2nkUVTFzxiKQGXXRCmXN",
  "key2": "4gK5J2HdvgBdcXvYk7WVyqDR6nNRknEa9YLPxaoKYjmvn4napDUJjudymK4VEVoUq5wWrfEZtBt3TtUkghznutTg",
  "key3": "3DZTQHdgKD3ZiDJKKbqRbHKaXun67rUDQYNFmyWuMZ5dLU3vdCJMnbNwxBjeapJ2jqnLTPHSWvQH47B66u9DKgLy",
  "key4": "2sRcsduS4Aqoyx5aRog8wuXok73m2qibhGK5Y5Bt5AdMHYNPFLsXPHe2f8qdYCAw3awe11cniqq2g4np7zbbYcjF",
  "key5": "5H9ZiVkuBXyzptou8rCQQd3NgEY5ovoinKkr7qUG1J3RzbZzupSs9yepnP43qvycQLk3mUGydzwR4Z2qf9yCrLso",
  "key6": "5hc2SndCt5bSrSFRecT3ErVM88PmsodtZKUW9AQuHkT8HqPHtvsupyZxLTW6uUHZWMxNGKo5T8zf9mBZcxUVCKNo",
  "key7": "2UPFXv7q8wKL8sgcSjXgnFuTDQfCEExP4NbCS9nMy3cDLReC8oGhdq2NhL4pP16B6QgjW8diR7XMXxDsfK6b8hMc",
  "key8": "3vWPGdDrjdC3UGRH26Y9i3eqWT94wfb7x5CJDqTWNyc4oxmzpP9w4ay9WqgP7V3nTNt3nNyWBhzNLxLRhd5tJkwq",
  "key9": "2PrZGcn99rtJhgmZ2TCWyFRkqM3DaTgJ6vi7XWBYVrviSLypmHaxR8ArArLf9c9Yik6jvZkFMo5kAjAHpPQukKff",
  "key10": "3XGLo949jqdsJXF1VbwvjpJmxf92S1XXnYtXhvbZaBX4M8iqLAgDdwTRHfamwqSai9GeqSroDveU7xqa9YsHESMQ",
  "key11": "4xWsZmNbboXEqJre6nLLSWKZdQMi3enVXEyjp8oLPBL44rStPC785WLieMvWpmyiThRHW3xVmykBGB2Veog4xwY7",
  "key12": "3fNw6nnakjzMnh3HZReAatnqK6wmBAbqVV8H3gqv9acS8ziapL9eNy18NxDVLTpMVHt3f5ndF9MxoZ2HEUoEpejP",
  "key13": "5ZmLmqzyGSSFPboh7wzSWyyA6wPydqNP46LtdZsbKEMdzZVrba4nruiAjdCwvvXUR2VGGBaxaLmRwHvgjV7cEGRX",
  "key14": "zGahQoB8UUX6kRYemauLVq6ytaJYnNGCxzFmCfHZBKeA6ychsk1Xm3StXgRrYxcrUTQpnbCgKuo8RzZhrXgRqxg",
  "key15": "Ws2K7ty81A1L5ji3MMFt1ro7qU3djW3csSz4zceFBxoYoJGUgiybnjU3MLV1ArJsHyvJnS9cA8yiCMVnGV1kHAU",
  "key16": "4G6VkqiT2GuWr5eLJuDYrrwCVZwqbn7V9U3iH78NPf7aPHa3KdwsNSrnGqKSQQkwyJsK2yyZ9TrP3TYwAQ4EpMM4",
  "key17": "EjSekG8su1CVRvnx8GjMr98HT8BeVse6Lc4mLrPcRc63Kt3ZgjPFHfYLMJfJnwSKoCHwqafTKMnp89iCusbqyKa",
  "key18": "4dT6T7XoK2kYwiHdgu3gsp2jP6GidWFnki5kmAJskF7GJUSfRsCL6aV3Nc9yXVXMTBNa8s5kSmJQiEBYzZAuwYUf",
  "key19": "56BssxhEcC746QKBjkjNgTxZsUaq54ZyeCfsFTKCPzpjuuUzswy4atzF2DCCzTPVTHkrVHyv7NsjRAYufLsYQsim",
  "key20": "2DUHAZ1MfTRdTBwcnqfoe2DfYdfPavoPBVnBetGBrzAog4JV7xJSScevN8rADo1PcCv46x8nmDmwSK9iGmKFHfiq",
  "key21": "2WZXkTzaB5QNT82GM4MKydRXiiUC49HxL8sgu2f5MfKZJUXZ6ACckjuvoeM4y1qxmE8zYW23MhkPnpQSWMvng8Yd",
  "key22": "3Zgx4RJc87n9GVxhsxE4kpJg8VbuQCbXvrrjcjLQj4rhxKzCnDo2qcYrtN9uc7rmwp2L8MgenHUsosLdsnVJCLSP",
  "key23": "CXrKwuAnnv43E5jXXqR5k4oG255tDq4n5qQWkbjenkT4UgdrFPASdjN3eScjKz1EBNor38PYQBaFgaXaMg7KWzK",
  "key24": "5GX8NaEpTPo9fZNQ1SUUFGMxBQcLRZgwpsWrBvg3BpjUZAzHHBTrPZy7e183AZYAbBAFpDGU9WcRToenqMem69zc",
  "key25": "3vHAopMJ7jrci4PS9poNkwidUaVtuJhdCZxVEYZaoCRH9Qeqyv371bqbbaXDDh69v49oWPdGXSuaxT8wS6SotAKT",
  "key26": "49xPk3rjuNQyKRMFeLUfFtfCtvMQD6abp6nSSWyjqMptE88yxT6WJ2YRdaKeaRJmKH7cHLuCNbSs6hsFSTfMpMrh",
  "key27": "Mz5DTZnusUXTKKvzGV3G7w3rMwRNkyLi7ZChRgqWSMbcjPG9iGx1MjfdxFhKfkMQP5bg4uBfTwQto8MsiNTYtmC",
  "key28": "627hyPHU3SA29EfjRiMu9qv7bzTjGjudtuB6cE27HSMuL4xUkB6DCQYAKevE1a4HLCCtShf4NwcY63h2THjr2WF",
  "key29": "dmPzzabs3fwFzVuiDzHH5F7jc5iPWUfpciDTUdmr5rB9GuMU96HtTfKEqoNJAfw6UEgdF9cxnQQphpyamj6iJ8h",
  "key30": "2PfwWXnR9H4SiovMArBPqvZbruZvi6CRkMMxpdP5oABXv1TANz4m7ri8HoXdRMmKPL3fWVzJGbEB8sXhqfqFjnx1",
  "key31": "2N2VhfBKBbKcFM2gEvdSpYSu7oPetPSwJdTwPQTf9qVutdHc6xdJMJbdxw2BZ4wwpZQRHbU5s7KK1ovjC6XMSCwm",
  "key32": "p4SWufL6D4iXHhYSujtQMsBsAC4VfJaJ1HEosxAFbPttvUdGVFHR9WRDY9Ua1hfDPd2qCPUy8cHSCJtzueNQpvj",
  "key33": "4FRDPWAwkSJxgXN7EQDhiQwrYLrmNk9PDxXXEmnpZChc6ch4jeMHJ4mYTYktEavEpHEPJ5KXQTHYGAPY1xBMwbdX"
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
