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
    "5XniSfPWVsDocG9WnV7Hb6nRs4KQCF3EuWXsRwe8YAwFB7tyt6tvibiigb28oULe25GGE4jRgBUCWDCcmbRTY5hv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMBYaRMdGBaEA7idaUSFb8s8FuouD9yqNnzWvxPR1HeuHWetsZqVPfrdjghCfJ71132EfUdnEm7RQFqzJbqGuZ5",
  "key1": "2a559RVDphHsWWCdKCxxu64B24eJcxMjpD7jGJg2XnpxLfwFdedAub53oUFaGLEEFf4Uv8jeoxAMVa5syKk8XbFR",
  "key2": "WkQWkKULHqVFmioYH8qdF62uh4isfUrRWGrorhZk4nH8VW8DSJTECWR5EQPPBY5pEPjeHAciHTo7mLdCn9bdzhX",
  "key3": "2UcXTe1FJ8gwizSWiN78AuFK9GydYReKbcZX7RL9Jaaij8iDJpsQjeRMoJg53CbYJxYLnT4n12Ycv2x3LeHD3zzC",
  "key4": "5HF75ZYrNonLifLLNxBmV7TjMuLSGpcFWeqNqY3yp8G2CcTaJH51xSWVYWwAwRop3XhB7GbNSaZnKgZueh65BMH9",
  "key5": "4rwSy2gw7i3GDRNwwZuRj69LahS2Rk7SYKGHSz1xsaSAZQsLC7GBRhgenEX8pfpHew41HHkDuJgYsK1BQjjeGume",
  "key6": "2wLRdzF5KaPfYF4m5iqdcGb9kYBC3o7Mh2bifAfvz9xN41MsAiFzGNScpxJFN5LyewYETPq37zR1upvEzW78wJHN",
  "key7": "52ZXBnEHfFNBzeBSA1qEqcjSi5RRWveTTMou38XXVKYpdXyifjz4PTVb5SmTqHvUpfUTzoobc76yqNxUtkLt3Ewz",
  "key8": "2auTd7SuNHSkipXs4YaRZASWsioaLPMGWTbXrsnvL24fkAr7V4bBfZHU6eNSDpm2fsgMacb18VWkL2zEQQh6HAuk",
  "key9": "5CZTQ66vLLtoSQSBKpKcbFGeX3B2Wuh5mRLRtD6VCbtMhtMyGAXdEATPokVsCzXW3RcEvYR8XCoXRvDdzQGW2umy",
  "key10": "2Q1VC3xc9GYibN5R6kRWvrZ8azXYZt16MTxZhtYEbP6u8HGKckaX5cYkunhcbkPhAfmQ3wJsCma3nNgveZSy4n5j",
  "key11": "4J6jZB97GLmv4KjuhSKAQ4m83WtGkRN7EG6ZBprCxg8bTHqb2upDkmJzDLep7VgPBSiPh8LT2yZWnVqeFrTs8GPc",
  "key12": "5coCZqXNLC5DXmyGLLsFqXpveZ6b5sm975kNFLNAQpLedunkuyaMS921kZiU1Wm2Ft16KyjS7vFkgowQY5kzamV5",
  "key13": "3zW4cMTrN9nASfSV5eV7Ewmwi6gTyiQM39zr9wTpL3RJF9opfjXNxj9F5suTY4Gpt9DxBuGaQZNJicNRKZSUqANo",
  "key14": "5eJsdBDAp8YEboBJ1rhw8aXnabeatmrKWrEVLzE8jDFKNJst8YPYExhR4K5NY5e3PDZXSZsTkvYzp48skgkbTt6Y",
  "key15": "FsRhyNfPEo6s2G6Qyi3f4xY8e5KaVXMA2nQxjcwwRmo3tKq6WdXnBW6nnjTxNyjMFEJMwqPWwNL7Ai3hkop9m2y",
  "key16": "2GdLaD6fvN2wsfgqUDdo6Fwq5BxHbKL5X2mr5VWhRZcKSQJf7cC2KKDZg6nEs1o9RCA3mniNVTALDPCCuWRS66fs",
  "key17": "31F1r3G7et82fcdGb4ZZ7W5sHXtoh9BhAcyjDgXEcwFqPRs6oc6ZwAAGAt5NzJkxhJHYB2AJJgk5TGgxpe4EE6pS",
  "key18": "2AEVqAzSrc7Za9K97DNE57fw95XbR2FPZxu3kxcsfEdjuJPbBYLeX6fpUvppMnBW8cpjEpUJd1Hi3CXiLZHFB7g5",
  "key19": "2vBG2wa8vhgqzY3ySsQZjKw97J8dP2GAg1GrzWDx4wmprcKffEVK26nWF73vxCBKanP478yondmTnCR177HQgwwe",
  "key20": "2cNmqsw7wqZ6PxRTeEAqCmxsSC1HmKVW6UYBFExfa4oq8sGP6RNy3Zw9aaP7xNea8SPM31iQaVadL9wC5ZLHXriz",
  "key21": "2Vhy7cxX9F5u9bzG523WdEDBRjaQKBx61X6CYMbxwSoyjGUuY1kCtxz6hsgQEMSf6yXZfYbPuAyiwKVntSQ4y3dz",
  "key22": "55LVaLEASbRyU5NQzJogrLi1mZuuBrvN7dskzf7gmtCTYe5Kk1s6EExHoLwZztx887CaydKq4ctrV1dPNKQQsvu9",
  "key23": "612AszAoGV7Vcgs8fS7qToHjawwWJWWpnrBqQ66Mp6ZB2fNL9xjRjQ3uhQb343K38sXgx2CgPPpRhXnCAzCtJJ9f",
  "key24": "5EJ65d2Lhdx945XaL1GXKzkSB6Zdhy9vms9Yoj9S71iHCXLQ4Qc7YpbTXXkSXsSMaVpoRkQN1c7ZVzKQdKRrz7Jt",
  "key25": "AZKTD9HtZyf9cCDujgWLdCsEs7hdTrQuQMnF1FyCo8pJdi43QLASmF6UmbXj2GkVJhEdTruWxJgJHM2C1KZnXiL",
  "key26": "5XQhyYG7DMvpbw2o6VvVzdCuUPS4t9W1swvg56gDhRGsufiTH6dWxQ6HLEwQYHoLDKaQU97VFDeDf1uJuoRTtGZh",
  "key27": "4yuSjSYGyzt2R5zbZDj3BiatDMmHoAkyvAZ6kpT7SS8bwhG2yHar5hFpN2pSukYkjtB4WMXNxyz7uJM5xXtTWHVn",
  "key28": "3nyabhT4xxwmvkUeZYeb1rtjWg4B3v6dZx7nkToyheAdwpaZLGPZHEadKgp5UcdoHjftyYRfE6nJVdRHhEt2h1Kc",
  "key29": "3cyGxvXLtPeMx9RMa9juMV5ztQ3gF2EK4tTjcWkKWw1ChxgiAMWcR9UaPvM6HZeFvWUQ24YH5rf7J34rupWTvEy7",
  "key30": "2WaMu4qfkpRdYkQLz2CWKQjNsAB7DCX6ioTY4uEPb2ffE9LaYnqPnLyAijw513pATecdDkxyWhjTKq5ZWCv9Hyxz",
  "key31": "5DdosYdn4BtaSoTAGegZVeqbYN7ma3RcSSyhVw3Tt4Q1RFDV6ttJiQ2YQzfCpvwo1m4Qk8suaeVFLweNzMEjig22",
  "key32": "3cUkF7tWcSHw2WqcnV1TFrjWZkZJrADf1MThdm9xYscFzkAudqcMzhPSoZEqgtVrc4BRkhDT7dSmcF7rNMKscPmj",
  "key33": "2z4uDEXpjrfWByw1mrivbkzTaV4PD9NM4P8eMx2MPvJhgHoTTRirBnxcGp7wGxKPKHeRp92x7VoCrXcp7XwcQxA",
  "key34": "4i5JrM3epjQQ99NNvZEKaZ9zKgro3oxTHCVDdVjh2ZFnbQKu1m8eeUMGYfTJenJVLHgFgSmnznxyv31msJbWk5nw",
  "key35": "261raodUNZHfYCvWsruHrXMPLMWw9QTjvCfcz3E6MzWJrqxEr1w1Rp7yczyvKMCXFiXUF9sgnAT6U3R13n1pm2bv"
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
