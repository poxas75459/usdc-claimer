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
    "47aB1d4cxbTVSGPGYANBAVt3ogjnyC84siwwYhpC1pK5XqknmvpNhcpUct4WbU2HvqAe4XQpWLVFFCiMyVRnRVRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HXMMKJKQfTAXtMDAD7jnmpv3UEQwkjx2DwfPzbP8EofX2uozugj2TfuyXwYJjURMv9DeXFEczCF6ghvK8KkLJ7p",
  "key1": "5oB5rzoeEGCCuSoPEqwDDUC2mqGdf5HBLZ9qQFX9xMhbvqzFW2vY2963M9oMP1gLXAVcsZMyrqqygX2tgRn7rps9",
  "key2": "3DgtJaS1VWzeyNPHF4HpdcBsvB11hycpVP3PcnQxnpc79LC8YxDWw82FW21wxRP9S4j6R1DMBTBRoFNXGC1cF3cn",
  "key3": "37fs54YYFEfaMkHJNAWqnsm4YWcXVCFsoQGxsfMYdgKt9GNkrGPoezhBtsVViDHFxEfdbDmTFuVQ8WmDhTx68kFb",
  "key4": "4koDRWB8JHnha8hhE3qeipEJpszhK5X1Jc29cCUegrerT4mHKdy8nYmnNscPimtaDrihw2iKsu4wUVhimZ1Yh3SR",
  "key5": "5R5iYgVTi7g2aL5ZBearQGavz7MQbndQ7s9h3HTPRuK5ftxD9AaT54XQjE6o9RZuM1MSci9Zt5im3A8PsYe1qQ2u",
  "key6": "CWFVspsJAqUiBqNsukdGt2oXbVweU2VYXxgxghcveqYQdW7fpGXLZ1cKdkzZEB7U1PHCj663BMsH5mFEwMQfQRD",
  "key7": "4LCbuz47MHr6kQqE9QNG3gnftoeLEMMZimX1VhBB5NnEjUjBoJYDe7rQaaBmZjdBaLKk6i3QTDGjiZBnCL66xS9w",
  "key8": "28feT299FjF1ZC9NmgTHs2sjQ9mzuGf1imomEGbmczEjEoCU7gX519gKzm5ViE52mQ6WSmaRxUfLAZo2SJPT48GL",
  "key9": "EFQciCMGEBMLFUuR3PtCXULf3hRM6K2c3hDyqRqSDggDxe2mw9RLVz8qhLqG5qJLTMknEhNhZkWkf3sgXsNptcf",
  "key10": "4vr3qdCY35yYMgcNp41qMMawp8N3pvAEVb8jztxeV9JKskh3LoTjBEbM8urcmCNBaTHvnEeT43sFd1shnCJHYPMm",
  "key11": "hTyrS4JZqghmAEY2RbsqsUPsUPuKgpRMBXMhbFtQmANzxEUNbfCGAC3dVjypa8sJx5L8iaRn1jAEpH9d7HzBmRC",
  "key12": "5az47wEBFfZxcsHWVA4U25HAN82UXjc3x3ZRyBHGbpCs4YdhLgYeg3tZLD2859nhgVcvqgiPyRo8vPZ1GJT3rDHE",
  "key13": "71uczJMBdsCxuK9CsyznUdXyx4HhYMYmaSMzQtoTQrSzUy2TsdGVqdFtYPZBXE5bLYnt9xREmkT7eK4JgwP8oSH",
  "key14": "ajEw3frDDnLVV8atQCXfKytJttiYNtTtdNCH9vzNPHBHhecStuqokXyR51ZifBJZgMNcuUoNQpAC9cAYBvnvhK2",
  "key15": "324LWqPKAkbGCYqwQR4skcLLHZmfBb3Cv23hjcDVF9ALz4RDV6YUzr4s5yFcDAk464ftfWbk3XgdWv4T77AMDziW",
  "key16": "4wwY3XZ1gysQjr4L7n3JaDWd8NaJQ1G38QudNYHYRT4eFzpAKdUGj7eMFpF38JLyoUddBbPyjhxAD2Q6SdXGnTpq",
  "key17": "67WBhSDwotWjquestD3mT3ap1JfH3r3FdrpPBTGKd9SASs3gBwRHReEopsBBHW1giJtR511rkkMVn2VFVwtzxvTa",
  "key18": "5bAK71MbCTgrgcDum2Wb2oGcxFattn67F3ShZMCDX52eCAo3PNVAZtCFvxPREYNG14RXy4DKvZjBihsbEKCeCgSE",
  "key19": "4aoXSG2eE3sSQGRxmQsrW2G4uCRkT2y5Nzxq3d13WoHDUcXCxPfJAdADMuQLXissk36jbEn1ieUVCdMsgdJ8TDKX",
  "key20": "4Mz6LgVaxQPSojUDmVxAMh18NJeD4guNwkRhFYaWW5qsmG6we5P5uGkKazMU5zHvsoudk4FSZLTK3xDbM3bTuzxn",
  "key21": "3wqugPge2DeZNDFrhFvZ7jXAf2c7UH2zJpWgfVNYNgwTD6F1fozaJGBXZPsn5wwgMRoM3GBX2w4cjo2YeSgeniux",
  "key22": "5SY7mzPLReC9mfrV4wstgHrfVcWyA8tU6NnSMXEHbduAv18b28LnaT3x5fGhZV6tuudvzSnT55TsNRcWb1sHSrt1",
  "key23": "3mtwRevckFs6fF5fEaYw6AGfP2VSWb4konexiy8UsfJSEdBikbYVWQwQjoHTSKqHBwsF51xcAGAy5giE4iffLJE4",
  "key24": "5dKqGqVgty1n2D5Xr3rrGi4WpLyZ2tWQVYEwEGUgSgE7PeLQuD8dtjYeCTv7y5aCCYfyhGbzJAcfye22xziebhYj",
  "key25": "123mDGVYgdE9f6Jb4xCJVpL8rpfgW5tiwKyRao7w1tNVK2sBEQ7MBLfhppntahGkrrMuFZQRA6kmiT3rr9QTZf5f",
  "key26": "3DJCBR2nV5rDJyob5r49KLCVJL8vThTNdkj1sLjwsCqicYaAXstA9vnV4wo2DCiWdxhspLnC3xTbnuSw9GMfqBFX",
  "key27": "3nHPiVkuFxneBu6oMtaqFBc5UvQani25HiAU5YVp1qVpkUjEo5gEV6PwsSMUP1QzV4fUzVq1QzY1Hr4g1WVkNZF6",
  "key28": "37JJrCsuiWNah8r75oepFKWEijySNoqW5fwLqVN73TgZa8iw3CVgFHjhv8WaBr9RDXVW9SRE4YoM88j8tiRecJ6U",
  "key29": "5THPtJeQLPj3wtdYwgzmp2nc7iTkH1hJJ9VeoLDBQuxd3VMDEfPDAfzwxJf1Ux8NJtUKoSdCpgxVDds8nhMYvM3r",
  "key30": "7oHkehY7auH1VWA6tnN3bARRzzskaiy8pGUQkXW7zeQQFCBBC8LJ5PqbW6HE6Brtf2o5HLWP26LvvxvbTUpwm6L",
  "key31": "4EL5UkKTuWXkCfVsz5en9aHtwrihqxGskiBkfxdpdeSJsRMqtLKzDYuiipDg8t1MiYuRqFfNs5iY41ywYK46BJTk",
  "key32": "2XKDwGKMAAdMSQFTfy3fVP3tur8LMR93MrJM5azMkb2bVMbJvvpHhNKjGffD2fngKNV3ZQrpkQT8kKW9sV2Hzr8h"
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
