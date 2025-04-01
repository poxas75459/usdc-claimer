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
    "2fZKh7YwrjLUmh9FXhpTjbgpXTozTLwnJPHVuv49Tkt9vY9jMhL8NSnLWH3MJeWAFxCC3h4wTNAU9FAzaY1xBrNv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E3Kxey9qcvDbdsL1T7tf72oDnMgPCh528M4Uuq2vCjzZ5ZX17n4gEZQXsu4L1CgixSS86ZnrkwKkkY7tsK7DdMc",
  "key1": "KBRRfbtVw1hsfzhWWpEKCigu9zrwpX2hrnT5o3G9Nzt1o4xzu5t78kxmGBTx4FepeS1s5b6EhEx2eA9xZT3kZnM",
  "key2": "4RSxvqG423ZwQfzqWAqSxDGpQ6oxx2mQqGTzuEQQUS8t6AeKP1XpBVp7pTMtpcMuXHfV6qANY4gmKSYPaKwNGH2o",
  "key3": "Nn9XHq9AHuXBS1W3ZjCAX7VmSEu9L2spezB9DTToME9u8ukGMfDHHjUaNqtVMyR66JSpXea9YqFkYpJYEBQxaTA",
  "key4": "23HbPKby46haZNP2Xh2grHWNCyshSgsUhFR3m5qxk8VTgJniCCNbQV7dqmDfSfKDiBiPv9o1EvPUaj5HQkLkxfDt",
  "key5": "56DxaL61hwND1fo358XqF6LNQRUbpAgXka1X29fi9tq7CRyDcF6LhZD2zD6Hn5i45tVPXvT3t8PgAqhMowXUHJG9",
  "key6": "3Rxd67DTopLNtVoQBGJqParDZFf1p6DbBXbXiYnZrcMCYjJzqVTULeZWDkBjUegWpgStymSTo8sV2iwcwBHsnJvv",
  "key7": "Tx91V2aK7AVwCBAQtoZ979eoJerhfsm2Xz7YXzWU7ziXDZHasCtGmK3LcwpkBTRPuBQr5r6Gb7buavHkoiZDhQn",
  "key8": "5rHGvBNyzewktkmA5C4dDXMB3eqbRim6K7eF7CAtGb84aik9UFEsu3Ur8z2SG7V5i8eGYX69h6dxTNaBYqQEDBZT",
  "key9": "65bq4VcZWKWbua3tmfxgJoonidL9pSsUZtfNgAUWneQjMco2NKjjtL4sXCHoUHap1L5kKGF1A9aT65KGY9JMRxQB",
  "key10": "5xXW1bX4UFDQ66jehQ2pm5uFgPAFmbrUYoewSxy3BXdr9EhSUDBv1dmACGBABnAFXcdSVcjT33WE1Mv4YPTkdTXb",
  "key11": "yArVA1kHfa96u6aJkdpWdJnchabxujLioY7epNvkQJxAt885G1ebXrkLcBbZqKzRkkadTahJUPEGL8qvCFsFRGt",
  "key12": "FaxoUiB3n78cZQ6qVPB674YP9fANyAnDEdt3KkHGKwcb4d6RArmMDX4NTBrmo5SdohgzND2cn7pqtLh7TaBRrBR",
  "key13": "R8eb8uwBo3G3AE7McheezCpydmH2fvpgxTxASQwU4Z3LoUdqWGGQ4rsHSXUPXE9VaUPDpymACKHAzT2zqZLYSRg",
  "key14": "4Bc9kw8AK5BCuprsY3UwNVdXvCgCaN5DjxfNAKEoQnhmrwjQPArLQTXXaYNYj9rAfmez9QRJXhfNgTa4kHs2nfaA",
  "key15": "3LhhpLfSAP9LFDMHVNmicQFChtu7TvDVYXSgPLsU6aRyudtAEq6cHSVta5JCTudPtQkPvnSD8tNeqJHcvZcgZogP",
  "key16": "289EXU99qZGE1Zu1zSvCFpQ736YCVyRv3UJg6RK3uf87e8bRavpZPnKfSC14twTt4iYV1DZ6qJCyXQ6wNUiTDzvh",
  "key17": "4s3LCAvZNaTk2xwY658WWcsAGBLQU3ipeYrpssvvjmo2NTVpKzsNXvWzApctucQVPA61YuSE8qCNUbfKiQUZporj",
  "key18": "2HkZgVngYpfVsYZYNyevpdFm965vsxQdpVqguVQHueAvceJDwJkSvxmrbMJZ1xKeosmeCNVKxNy1MJ3HrG63AeNr",
  "key19": "4WFh1TxbrzrrFuxXYgjZMcHKshLDxT1W6UVgydCg5jFZ1mPP5H5VoYt2dEejLpCituP3qxzvsiFWJotktSFuJhfe",
  "key20": "3UhKJH5iaZw6Mre9QpBEZ8Ks37E7Fa5tfRf6MUsvmGSVDoQFiusSW4ie6K9GERH8EMAm7GZZcx4AjmG1ViRrrETx",
  "key21": "G4nns3XgFShdaEL7eFnJkgesPs6qQiieMkq7TrC67b8TTp4tY7pXieKiLD8vdmyMkcvkNURjx11ppcf8thgpwUm",
  "key22": "3qAvwqoumohMSBG9ZewsSLfopmvJaSfQEseB53P7Z4BhVTZP8cfsM6tU27TpS3LAThMQQzN2LcAE6FVs9xLPLN31",
  "key23": "4y6Rr6LGmaV1YFVQV7bhRozGZV4oqHipqVzAydGTcXQ2ZpToNPWUXwqD8Tw6imqGzBp9B9X12K39qu9t7bjzX3b8",
  "key24": "4R5JDrepeD5xm3SiFBsHg44XHT7ByYr4LHNsCKPKtPsE1FTe897VsKPPpHsjz2Mv8i8TfVfGY6bbVkPUBEANzGhc",
  "key25": "4NNoXCrWFT74W3uqovRPBNknHU9UzGM2FygUma6HTbm4CKxB3wUvbSny6T5Q1R9XqK2Dbd1278v3JNeLmkFwodt9",
  "key26": "VSb1AFxGY7MxihXPNwXCGiMGdx6zczGajSfaGUYs48qGHpqa14YU7b6ewc9NEo4vFaHbMbe91PMtUKQ8y3R7wMq",
  "key27": "MuPpRPQwovVu2BnGt88bvcpvff6hU973WWYDrV7xuuRZXou7agfmP1iZMASGjVMS5uhucXYsRrRWFRWVzak9jLS",
  "key28": "5Qe4zQJzKfheT4gyxCUdxMYk1ugmikUBHNdv15zy1zCc2zSPKMqRQ2xojDM3A34c1yEJvnzWXD27oypEpszjMhZm",
  "key29": "4A1vx6sLJT9jXfoS1nKaKTHDPUgZtPufbTxhenRPK41As9LBTvFnJCbqgXYNk3Xkan3TWDQNrcyffaTADTCqhCm9",
  "key30": "hGJH7wZiM9vbdMjwU8sHWWZAExkdj3yRyZgsmkxFbpDpG5bfAKdp7CuvTv8maRgmt3UAQ7SjQ91xAjrxv4zQZT6",
  "key31": "38nCSGyGMuhwu2BbtEsoYaGCuQjmdBN5oFUC7fVjGASHHVpA7vaApWSL7vrqtrx4i75ELfXVedgH6bQrF61burBC",
  "key32": "VsLGbmRZEnRtssxv9Sxd3gdFA8baADybUWJKAPuvAB7nq2YeU7y63L2ot5asobJ74TrKtyMxeEWMsFpL6Asxoci",
  "key33": "5xR8CnB7R2SQZ7SrmtvH1LjLeDYF3nxcMDzRxm9SCWd1vjW7xybhjXwMaTN7rjC7Hn3Yf5Q8sqfEuN5xVnuhgxX",
  "key34": "5n8NMnbT1TzxhKgJfR5UbqqkCoruwtpBEYbbBPe9qA4Hfi9E9N9X2TRfpzEDUxcQQMNXHfmA15Y4To55kYUXZtXo",
  "key35": "U9uFYiukAebipLGbZFEWHjWM5kCdy6Ju7p9rQJTntFGevW7MNNRyNemtenHAdcVp65sAR1MRTk3eLt1AMVndPsN",
  "key36": "2LX5rtcTKMVP83doptQStfFSet27b9zuj4zXXsY21knJPdRNUSBzMzigTWBmyVtjQix1oSsxBfZ7ZjWkyfCacJEM"
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
