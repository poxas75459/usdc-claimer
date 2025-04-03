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
    "5NFp33FELcPEza24o4ET7EXda1C5EXBJBE2FhBffrqE59XpnNK7vxv1jCcoDejwk6JWaY4LS58RDsYXCdEDVJdf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61rGafxswsX6Ymrgi2B4ehF5j5L8mzxw7seUtyYp3JCHw1y7SAmTCVZN8SPDoBCq1y9eEpuoqbUvCVwphPsWDfsq",
  "key1": "2eAEndGYahNPzYK4TKx9Veb5L4gnhodhHfvSiTh7vSrfRKZsaoA9hf8jSDkaVsmekFzXxs1DfLf8X2L8nAAwXL2",
  "key2": "4AbNgP2gKnnFjafpXArxFcxbcbJHeXyT5ugYrygFBdJgXP6tvAJxq1FXf6mSBK2wvv2no2NhrmgcMn67DyfECt86",
  "key3": "55j9gDrGEbdmQ7FbCsYm5HkeoR4ZqN2CdBHEVBjTdZwGx3HJXHZzY1wSQEoEjZqACWpJWovDe1Hn5HopconbcQm1",
  "key4": "9EC4bfLPKRveqQYUQhT1Wmhv1PwCphgzhnYZCc1sj65Y3kwY2UJqaxmLTGckEtZZJszqAEgHEGpkrCuj5HNGmqh",
  "key5": "5wEBe6riZYfoAB2ZZNvTzZebxuQhEFtGEERVeZADX7DQyS5UaZoUQSpTcQSHinmDie48TLQg1Uozq9U56vqFNBaP",
  "key6": "42txCgZSum1HwLLUgdb94SUfycTy3dBaT3E8PC4ux5iZqbpe3PhoEMMpYq43AzXSVYqKoBNbZRsQPAhAt25ED943",
  "key7": "4UnqgprACdkpjXBdWHUoMa6ihDGcvKqGwyLU7vTAutused327azpt4kbE6rN8G6hYrXAzJeKGViqkcbjb2cZ91pF",
  "key8": "3wvKS13S9qR8XkX8beyvwm7KTMBP7SkMu7Wwtt3HT2NmBk66M5nBdC1tR1kZL6pP559LZtcKqUq1Ghmv2F4TS9ia",
  "key9": "53MTyfy7kCtx59uEnGm8LSPT3iQR2wikwqifuKsS4wLQjFRVAR8dKbS1EzRob3rsEyDPHfghr4F6563rMqNo1PBc",
  "key10": "4BLxS1gpB7TYwarGNVQiVtRMqdaEwr1mMmNUaHkiSHGUoCPDtLigW2osnRQQTTB7JF4uZtSw968JTPujaZgapmWj",
  "key11": "YdTMKLZ2rhV7sRMDfgECMNtozEvdqNBg6hxwoy1TW7gwPof8GU7S5YBEvZ18p9vZp4eUN9Nt8FqNnTbiu7ybSDr",
  "key12": "62kTqfyUcq2tmWSVd7seq22MZMtUjKNCohDdqMNRoWTcNr6vkBcMGUv62W3xw8eGSk2FHhqkRBJErGUfHWVABDqY",
  "key13": "5Lxxsu8NQBtQC34WniE3a7VBRmP29nt1e8jgSyE4ZpU5ujf42NGJB4T6y44BRvDdbJkjiqyN4MqfM8CcvHBaiQeP",
  "key14": "5fgrn272vnNZRP7Jabvw9vuRcEG5D3Mz6hydXKpgXxjYsegCAN9sEkeTyEqzAJ7nUJzHLKVuMiU9WF3fsqV2g2pF",
  "key15": "2iQmAdtRuuZiQYzmnWboZW6QYhno4V9QDeRCPwsiy2BsM5Goi4Dj1vh57CfNsqrRvAk9d36wsEYqmYemEuZ2oomj",
  "key16": "62rgjdNXjTr6ZTWx5nrRzCnfnzxr9cZLX1H3j3Za6mfG7fxocxLhzX6vC4q6g2CPjB1pUeZT1UD2h56X4EB8G9hY",
  "key17": "4njUWHuMf15GaBpAgq2W3aMWaf3ACvVsMtSyFzncwWcy2KKHhkzT2mGzNmNfJnBhKDuKXo9zPhA52vM85rDXTEnf",
  "key18": "4xKrGzM6QqH8ByVPdJGHgLD3XxX8bu3PtaZTv5kVez3GMpQ4fqVp92mzd8KCWrQVpHzo5c8mfsvhc1GJkBrfKe7k",
  "key19": "4Ltp4XjsrFPhL6Pm7ezGf2rfSXGY1zm4d4cS84voY56fCsCBypTBz6DsiaciWBepf9C7jMqesNDpAQEwn7Q1skhP",
  "key20": "3XEdbEjHCSpe6xuW9CBAxzLWaP4ajGnJbK4yVh2Z363X7twSE19edSNnrPVR43wLtULqJLG7xiaxNrNrEDf9Sa17",
  "key21": "3gu2PCT52sjmYB5eDaWaXzjnFnj9ep4eAoZaz6nVBrGW4VZgUwddReuo2E1anDa88rtx35n4Muaukhb4ckCrXFhg",
  "key22": "3qS1C3KmYZQpTRvjahZEssmaZkMq14GSNHHdt8x8qnNkedjcczoVhEFJzcGpKP3qcNA5tBrRxZzaQ3tZdqf9o4kq",
  "key23": "KSN1mEFFcKake4wh1XobKQhXWgxjrNFC2FLE2ctkLNJXhK1EzVLZHHaGKWFtpGcJZ47jE26zmvWE9yKWnYg5hwh",
  "key24": "2xjBZasdPnRMeVZrbHdUQDh4A29kFGYaJtjvfbhsfbEosvmEpo9ZGDkmZhMu638rnC7YBiVnVMRwqQqrx2FG4Mir",
  "key25": "61aarhwjoQJoA1EERkSdpVTyhMft6wc1o9cpRaY3dVNCon6VuJRTFSWhTWxiQvmJufZAne3a6uYAV63iHbCP1Kin",
  "key26": "3NownGLBiVqk1Z26e6CMccJZZqzL98BHETjQEXoXxPCXWTx7hwM9xAMqhqnRTaob8hCX5uM8uVkSK2eYeXkRjaPu",
  "key27": "2L14Gj6qVfAZ6UWW2so71cQY9eNXfTW8qp8iP39KMe294uufTjjiAFbBVzUFe3TFsYohJZ9QERoz3AdQGHwkT4tq",
  "key28": "3ouR22jFP2PamEvcSNUjhoZxQXhvddsWNDYF63f8yLsFJojKvwhVTeddvY7hdQHeZG2DodTFadP8sH22ZR2jadjL",
  "key29": "4hEr3GnnZpm9zVnZEUNM1zsu3ASEdirBfByVKWX4iM22f1nQ4iqSxDwofUnpRC5MdcrXVrBh3JFDCrUpdsmHQkmm",
  "key30": "3GxRqm9aKvcB3DtwZKpWZJbav9oqoCxcDMe3XHcMJHhEn7BPhhcgJzQx2a8Czzir7CFdKutoR7VySZuSmfS2wieZ",
  "key31": "4SMvQn96or8Hp5MbeGpQ3X8F5KR4uYBpWWPuZPNNKcKdh2Ysf1CwmRfRbVkqk4WLnpKfVUdidZ97opLnqmm2zPX",
  "key32": "yzoRzW9KBkaQAhpscvC2yusoh1TE11uxWK58UqkJMEzqpudEpVD8KwXQtDPyBzL99N4Qh4W5q1VMnn5DessE3pY"
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
