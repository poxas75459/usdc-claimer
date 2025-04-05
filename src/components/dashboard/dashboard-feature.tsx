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
    "62ornnMw5Bb7JSwyhWT9H8A24P4dGagD142iEYwUWn8bmNp3hWWfUMv8J6h2TbcH21tVAcbFGSHZUb1JP2D2pN9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfKEbfrM4cRQroksfHLZXfiWCyTR2HAjvCVrWEEy6KMyJDKwRMsapDkbUpsfT796yioGRTdCkjy1bjxUjExB1Vx",
  "key1": "g7EVqqHtpu8JX5hSxdHbzC2oK5b66Nhhi4LAr7ibARcxZeg3oowESKXSAMQBM2w5GUSCaZGzpocCLK4ckQYzxUC",
  "key2": "4q3Sp3TC8kR2dsDffSfCHSCvdAxb39oPo34cTNm222wiNeJ7boWaCGdmpRaUBgcihr7Ywrv8prjJsi8RrF7pyFU3",
  "key3": "5oSUKgXUoXPxDWXoLdtZFAhokeTXtuzcn8BtzPSdyod1nKYNAwXqN2weLGvWs61FqpLzYXbCu6caa2KoFaWjusDn",
  "key4": "Lw1SnojVRNUNYinfSoXLdZttZk1QVhij6K2EQXSyNHDoQ4LJ1GY46UKNipJZSg7F8HevTHSsu8P7h8uiHffjYyD",
  "key5": "4uB5gSynoUkymPmWNpUfgE3zZTghjA8wZPvuYECiueQNXGBNqojuSfKpaD4tDDuTEkJgCN2X6wLhWUiVGbesvhNt",
  "key6": "28ADWFYBin4EFDnxnJKNu7L7AJ4hPQ2dRftgQVpcF78KrCWvaiaBxHiYWQXc7pKyVCABxNfj5HPRjLLteuvfPqTD",
  "key7": "SxbcCeoAwF694177yxN4kx6EU2gn9ea5ZfXTHpcLZ3GPBE26fFAZMh128ounxcodjkbxhQJ5wfWVnPzYLHgxJUL",
  "key8": "27t9MbQKYHyxYe4wERbVkeDx6rdRcVRuYuqGD4pbAgXVR3RyJTTX26QxwCYTLzQzarfhjJoaEioyo9SgePAJ6FpB",
  "key9": "JVS3tbkJD5Usq8wBSdqjFpoYk49Jr7gGDc9XXYGJa5CGV5yXp7PJE6euRRuUCbjE2otTmiC41G9zDxN2WCGLpCo",
  "key10": "4tBsju9scRiMAcifK8ge92iX7CTm8iR4mnntPCCyDPZPnFM47RrrFWNpppyB3MtAEmEvRGdGpFjaXdG3Bhb1uJs2",
  "key11": "4uijDWsrrvKPqoDYX9GPEMJvr526HraS1YS8YgnFud6XSr6t7Qoc8dcmKBtmVz22kks36R8ZLSx3Ho1kQnYrPapw",
  "key12": "5QecUnLJyG3dfXPAXkHoHCvPbm9t4zr5xmRE5oMiszTqbaYF4KS7p5MHsZF2ByDg5dCKwPLe5Q83T4gu2vKUFfqK",
  "key13": "2hteTm82V4RBD6fPM8z6NYdGT3kznA3AvkpmAxK4vnRDtfBuPkPBibMngf4qyZ1ckkDH7NCZZDy9xa6tCeriqTz3",
  "key14": "4varHWrFYYtJe6CmPJENdUdPytcu1xfP7dhW8Wb2hvnhgq5tgaLoCbgGsWMi53cv89ASsRhUdg9jWp6HJopYDcAh",
  "key15": "3s1ArU5AKFduDeAG1zd7mqqCPZnS1pAfrJYvQDxgaJAuvEob2L9ujeNBVLwiDcxEtUnhpbJiGca64m4mdz2nSBF7",
  "key16": "399wm7HDyMPQRZJVsnP6C7KfCSfNLjU2NBmxgRXEx2dBo8Lv44ctSMDUrME4efx1MJfwcbkW2bLVTqZTDhPthKw2",
  "key17": "2PQeQ7wimoWwuGWgzmAbqu897mWPV3JJ2SCM4vBEJSoxD5FrjhbeVcWftxy3KpqMTJ52xaVvY5zFPMR1rynyEm9T",
  "key18": "jeSxSSTp7k7Sr8V9etFSunxkmYnQsBZU2KqoFNA9j1xmAn23ydCgC9Mav1ywfo3vR4XhpUQvR5DRwtwPEwAYBEB",
  "key19": "3peC4wye8jkv7hGGM8R1jjtYgnPUTx9wtxThh9LLE3NRcsHu9ptCU7VrEPi3YKGu4xkK8vmxNExfwdYH1ekrFH95",
  "key20": "bZPwANg7YdZAdGAoEPGRizWSAet4qjs6ufMoZsu3uunTvcm2QV7HhphKUsbKuykLNGtE32kaiB33PYffrqH1PHX",
  "key21": "5WnkWpxXERcjBtsxbPNGGNG39FgfpC8C93StVGPMtxKWBNKwL3EP1W6EUNHsLoPzCCqCEbzLGYfYc6E4fn1dP3hG",
  "key22": "2s1H34ToWiKuswBNRKwC2xfu3r6z9cLiFBPn5RyZsYKpZyMyPKk9LjAQU13cHRg1fNCFzB6UzHZV4Vm9DyrBAx16",
  "key23": "2LMX1dsmCE4x7EP68YYX2yzcp8RcQYhW9q1jM1FACpRojCQPDqPmWrPCNLVkdn9p6e4mJuQyGGyGG6Qn9UEdvC5K",
  "key24": "2vKAy3rrz99bAJe6HctgT1v9oeEbG7qXfqwQusjm5VhoD8FBsMaPA2B9nPUxTG9amssbuC4Cpf9GSRrkuxtnko6h"
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
