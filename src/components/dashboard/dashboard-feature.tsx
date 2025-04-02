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
    "5yPWAAig24wojtHHJytGg5CMK5gNmu2urHsAzKfrVoYB2CEBvTPM2CFi8WN96fEQ4xiv2MBgUdDcuZ3BmTquWa9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XwfxeWxRpj1ScVbwkX6hR2CFbydNPkyfHoBU91ZCrXrLSpPycZBStrFuRwsbgVPLEmXbAGzq1sqBqAd6WyWsZ5N",
  "key1": "5oGiWjxQ1Q8wj8ZX3bZK9y7yMHGoSbcdzE26nNksmWtYVBhVZM61zDiPyKkaAnQABWw14mzCZ4GcBYVjheBD2yAf",
  "key2": "YRHo9GfhkmcThNeNf3oyVVk6PZjCvqqXQdfsVKByKV5zJ7Aek2ddZj1aKhubhc3W3vV5R1z75gDefvjRgYVPYei",
  "key3": "2qnANArgqhpMvb8SrZZTWhjAtAX3s4o7GJjMsGSVq4vwLLmrJ4bq8cCmnerTgndvtkPNnxNp64EJzFN7oiE5tCwD",
  "key4": "4dCG9VDYuNe74wNaRvshSJH5cYGPLfZ8DZ3jHfYNzT7QXgKffjuZWPquoPkBpnPJiPQn6Ec9eBDCrk6htVmyNaiL",
  "key5": "2tLWZwGCo7FUZFSm9VjN34T8PK5pTfaYEpdVdMFnPZ2us3MdeXhmukEPiFFakJeHNvXimBRikuYYYwiFus6FpWg6",
  "key6": "5XqVeuXzR86anPkHY2uCMNZMcrLyznHbi8PtkdJq5TyRwh98rpNZeHp7eE8eFBLteBb57XGcsZL625cbhYCbs366",
  "key7": "zTkoakJjxucc5tAxP17xcYxDNHxzYuw3XhX1yH4uzsWXFvi4bQvZ3Z3e9CczetDDpVYUxJkZyw63DYzB339Qc1c",
  "key8": "5UYfBBXhyCS7H3sLYCpTPRuQudZFKuv3fSq9PUc8ArYD4CK979xaZCfzDp81sqtAiAZ7voAmFiFtTxfT7wNmEGsK",
  "key9": "4KAs32jSp7VEGAg4MNLoXmzRWTkeDFXJP3YQ9Td6ayyuT6rCRwBpd6x6UGwv2pXwBsteC4upWfqjnoZiEnXKowNt",
  "key10": "3Co2VJW8a1YHoYZZkvjexJvVEYQWDU7Za1YP5M76AdPKUbbGbofzm5m1Nw7kkiYse5EUSuWaBftrtMhMpqfMBXwU",
  "key11": "2p8i1rSH57WZERJ5LtU9zFDJVMDV65gJ5akKSduVjwoJPm8svZSmnEEnyAdAjr6r4feiN5NrQFtNeRKc9TLucbN9",
  "key12": "3fRKfXw2p3GGSaSGiLogvMvd5VaxaojndZHWx8bB5fBvHZiysy1qMUTUuxoVpthxVo4BxUXgP91Hi78VwKVC3oQ9",
  "key13": "PQWB4AoLpHrpU4D3ewU3o1ajhEsdW1XngwwsjC6qz8fxHA9d4RQQME9AoGbzkXGREKbohzXmB3uMXBuJCGQHFvE",
  "key14": "5GzcquAmKBJXB6vkUmHERypjmvXXMH6W9rViPq6zisuqzQQiJBwjFmTnScegqKGdS9sNEibEvA2w3PrzmJsGT5f",
  "key15": "4zC4CDgbgTbguxCfPjmBt7ZxHkvGciXfqRsD4xaCvUwaT5riZR2M9wXYpHv834VW2a388c6taFqVZzzXpKJxUdQn",
  "key16": "4TJVg795UxoqtSaAZkXes6ih7rLGR5DxHbanYeeTjc6fLdufMpVnDay6TUacWbgkDD3VRGeTA62LGYhh7u9xLv29",
  "key17": "2sozBGKf87WhfNvYpBkV2FBThuj4po4KEzZWRpiJvzQ3sknqoTRQYUyMQJK58186KWQS8BfZrwJDqik7SMs9r77q",
  "key18": "5JjcJX1r29qz42W1ypFnMDG3K39s9ADKBPhZDuPjUAiXoQX16iJHcJNvFJ77d3LKcLoFvuRyX9r9H2LSxKLm8FAg",
  "key19": "46wCnLDWF1J5K6GJXLKpNpoAfPcvK4AByT9qkNJCQmDGiZgaHskPGr7FCXrSUeQV7UYXduVx9AkFFjvp4h5zuNDN",
  "key20": "52ck37nYSPenM2p9cTpDCnoKehYq4DaSATnSVcvPkVwqErWgkGaNCBsUN5rCgVkcxjcgV1iidLBrN7TwnApXAT5i",
  "key21": "sMnAyix8rG5uzeoeXNHAXju6UZrvKwGbUzt5fCp69CwUDkZ7tcfRhwzuHAzZ1EH4g2nggPcpjTdxPM8WHk1rihA",
  "key22": "3tqK7N6XTxVUpyoP8Fk5AXFKCXnzSAvwi1qpUHCYz8d5mvKk4fs4ZDpgTXYoF27cLDEDTc9y88CBr3CCU1WfA4Gu",
  "key23": "5MKUjk3PMnhA8dUPrCVvZzFHkvJtomg5qyPL7CixgcioHWptzqU7B3sduzm4SfM8mUZnzcGMT55CoMR87xsT5i9H",
  "key24": "5NzTKm4fpc9deAZUBf5fMEweWsiafpiCKLS416Nr8GrkMfehgw6HrGMudfs44jQWQhVooUwp4NyCo5s4UJpX5BAn",
  "key25": "4Jh8LXaAUkApRFY1n8fDyz1YjW5uoShpFZSNXXiz7mM4BFXVt5vT18XWtB5CcgW9xiQ2eJdnqcqf88E8qa8sVz3w",
  "key26": "2nzvgQxsV4zDqgsrkVcYhL8LGr6JLa84F1eQSau7NSGuiV3XfN54nur1jb3pvaKBFizLgD68j2RvFaHykPUiJQas",
  "key27": "T71YbkTeNw9x2s753dAoGsnKUgCs7a7gHSmetJSDy8jhghdqwLUgvChDPh1535FuLcp4dAswEtRsijn45MSdJGD",
  "key28": "1CK8vmPMhBwfcib98BSu2i5PgyiKx8jVJrFfHmzCVHTXPTyv5WaWAjP7wqqYX4WZr1uPc3A341zDAuj6Af791k9",
  "key29": "4GbMpViwnvoMphKssWGdhqBDaRtrfHw39nYr5iBKkRNQchbm3C2jLHmpmXQY5Tgitu5vpifCWKaDrft1tgyY6wtV",
  "key30": "3XpTE4Tgyjvy2gpbfLMxGTGVFe1dLkXnbKPDCyb1d9WKvkKJuzpfMbiv2CRX7LwvKTyuJH9u7y8TxbzdienHL9jM",
  "key31": "3dKJkcTb2LhJGJxGyAkEbAVpeNeJYfRyWeTeVh7ppoegerv1b5Hegc1sReGrgf1jsdW2EJeu32Tep3dcZqGkWEjb",
  "key32": "4jEGfKr1YyvpauuCKyz6gtdu3X4wPTdqprFTv7yXrBMu8bNXfgbqhFvfKc3dHyNFm2pw1roW7j2vP8QucmqkTCZf",
  "key33": "5eE2eJvn3LZuPACZ2KAPREyX1i4nzwXCPSs8ZNTrnwhm6CDGUMLUe7FbmX6miVuVJ8Nskht6JDnrDhJL4xofrBdZ",
  "key34": "5wUvF5aWXK9o8wtgPqnsC7ikaL2pF14RAA1NCSNCanZtXmu5KbVhmR3mU9Qc7QJ56wv28ghcUZ4pgCUD8XK1JP5x",
  "key35": "4KdzqfjasYJzopQqcibKEqqdAjR3zRPeZj1DGuT7gt3eDk6BrNNBLV9vb3aRMobRapRzzfWjpC9W18XRLdPVZy8T"
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
