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
    "5YyaZG1bA1WGo7pAosRBnEmx71WzPrUB8RDmD7Kw9t7YVBCW5KzUs7hN72u63yPTgzLFJeRJt5MQ9YqXqYBJ1qri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VcEMJ7b45K8jtThs2dNUBLb8Pe2Bdb5RKDcAQngb1ACuJqxQjw33EVjJ69NW7iAB1ofn879Jifh94zhyhk3gSkG",
  "key1": "3hNmJnRor5JhnbRpzbMg3NAFSoeiYPqfUDAHkcJsvpcZYdfrpXDcCtwuLSCvYGaqq2ETxtEBdumRh5vb6cShM5Lp",
  "key2": "3nStcXZzd9XmsV3S1C2eVmGYB5yE3jr7UJjgq6dCjF3hwrMAeTrGML2ybrFNYCV9qTcTtkU6MXfAx52WjCykheR3",
  "key3": "Yezo9FUX44g82WVuuFZUWfwbCpXB2g33JuVBdW6mEJCLZEKgEZVGfNPVhtFa2NNNe9ozSAADhcfoHnNkn1ENejx",
  "key4": "jH32ervnCkNsEF3E7wrke7fGiCjsP8isR1vsM8968jC1eDoxnBHdsqfr76s5N8ag3xYocDkxB5B4CLQ66XVhtSk",
  "key5": "3HfaFiXbLaadYmWnEw6GHxfJgmpC2ZefqdYyiQfQcSoHw93ZVtWR8LvRERHKQw7CjNyzRB9ZyqYDAapkU9bkjsgY",
  "key6": "4MUaoAyjMkKaXH1HdL2ETCc4AXMTASUJSFTedZgKbwPFbhuyqBZ7YSEmD83WBDqwFoXMcEJzJFAkZm87XAx9CpM3",
  "key7": "3YB9JyjyKkKAGj8Z6fkSsGUSumdLRk1xucV6h4aMcUArVDM7QZZ9x571RvNexjD2acGouDvoot38taTNXmeGUoVa",
  "key8": "DhpzRNw8cFwrExP72zQ19ZP5r5hBx7XGS6c7MCC1vMzqCMK2CWrQMZ8L6BST62KGtbduzKysAuX7Qg6s4UYz6AD",
  "key9": "qismVv5sFdsB6zjeswEsFPagTATm9AtzLwpNjwLBRs6UCziLAWRYX8xEwD6Vt1N64qV36nKWQki3qqApDP6jNxg",
  "key10": "sX31sJk7YUBA3csoEqJdZNP8HCZCPSqPte7fF1g5f8ksH9DamVQnAYXcah4mHXYkPBDCQU7QZGJTDgmBj5yEgPa",
  "key11": "2BgRRy1b19oSfkDVCKY95PkVgQM8dyxZTzo8Fkna8aQyjMpRtAqEhsxCBHniseQQNCnHvz1BbwszU9oB1YdCtXcp",
  "key12": "4eJP7jCq6g3F3nrpP8Y1fMcbttko6atZFmtkawEw9J4HgEJn6fA5wTVSNbSpJRwpAA7P7hUuy9Dkqpyf5jE7ip5C",
  "key13": "2wpiy7uqm4AoqkQVKaFiC1yBs5zAZa1Tn7tLZJR8xE2m2AjvFJpxYt4N3j2SkvBzjzRY9oyWfDQT5m63RdknPB2x",
  "key14": "4M3N3UJzfTL1ie8Q5g5qh87LgpQhmXtxf1bxJUEmhdooQmW1xkc3xdkexWKjcVLtu7BFTkVbwvyxh7bkuv92QMtf",
  "key15": "2p1DgrryfQdQpAP3Mn7ZqUWQHAccrE9Y2LBa3GBRmRh6f1NZRxjKDwyTgarpFWYYH7PoPnivAMA8XxyrwRWohPhJ",
  "key16": "m6NeupjZSFQf4ALxbnE45uj7REC9tBinM96g3ELScaEEa1QwQyk3MNSviakzdFdNjo9MKWt2gjHoViBPF6ybxZA",
  "key17": "49HU5e4SkAxJTPy1syUoEynUPJ92rxUXfK1hX6Rh32Y1v3mHWScGws2LTqmuokqnp8EGKGzs4FBwSZjkakiMJymr",
  "key18": "WPcvQ75ZvNLReUV4LK18P4wT57Vkhy3BFNhShwAZd9yFonTuDYhYqV1y3mMupjBzWy2Ur6iw3AzUf9PssCkn6WM",
  "key19": "41C3bjjEA61dsNcqfDZMCCqurWRGSXppXRARt5jQhNwevKXdWSAQCwCkcmFYUU5mFuvjmx2gm2F54yjEU2Tn7hQ1",
  "key20": "3pC1mD9qYj8LLwEahrh48CNf4PKvEfADzAzJ1GewKtxTDZfwiBPn9TF2NSmGyCH2kuGQ2wVFLuwvKcuQG4DnjZRr",
  "key21": "5o5wTzmzg6mQKTWiwrHb9yAqyp53M6gvEbyBVG5AYNgbB8DTtaWtrLtebNqJHvX72XMyMFGhp8XVTeefPVj6Xqvi",
  "key22": "535Kosr76rrRuGjKwzcDwsYAhir8TAcjASpdGHD9NnRe5exnCCrK7qWobJC9Y5SNgSh6phXvz6d6qjfwNKkY5qz4",
  "key23": "5HMYTiDoYWkTFPHmtSqWHzsK7xxYafiTWTqLQD5ckKzpdx4g9qvTsmCpGNDQuPMs5YBxwWcLTcAerZnwwVyrTQFB",
  "key24": "2ePRAEfGoXDqNURrXEbyi59T1tx31MLDkBEW55uxXLWSPem9yZC9WBeQ1CPcZxs31D595xhq7Y86WGTJAou8WhzK",
  "key25": "5RvJ9xEo71g6BQM9tinzp39vPu8EmWgKEqTqrahtNy2xXe2GjhppSSwAfLguFg6E5tj6kvgCthbgU9YKupJBBt5o",
  "key26": "5cgkJz2XKqJZBZUbJ5dzG1cf2KgVZwj4SxaqGSSwhEeZAapjVoFRZbnrWK1Xkxrx4j6MUZjznkLh8nt25SP3Z3kd",
  "key27": "2RpoGZo5WSmv4PrLox2oBUK4Q6UyCKjkReamk8CXz4vnxk28Xm8beCAecBPHNqCMMez6yzhyaTomrUAceqwnRqr2",
  "key28": "61LukxS4eWM9f1H5QKSD85yPyf1TkhbtxuhFosZ8xET3umEzuNTaWmAL6KEcMNNfu9aEPiv73VJL3k3FuHyr1VRx",
  "key29": "64WsMCUj99xucWSPaNassRopbfW4GBhB2scBZwspY4FkK53gZLbLXGPpixssKeChaARJUsH3AV58uZmgQMp3L4pF",
  "key30": "4PhzV5BwH4sqccLxakQQtqVhCoieRTvHab6CHXAKpde9pWbVF8kzMyM4WBe8NSc1sRyMwVn8sEUs6je935ABHXT8",
  "key31": "3N72kwAbsGQdXFtT5aQnW5h5qSAEv4o971zN8fvGspkPomUj2tNv9nLMW5ceLhm4Vm2SXVUQhytabBFitDRVn6GE",
  "key32": "VncdPW5Pn4rXambVi8T5fLWcAbVCT4h6AzMxZtssR4eevcDBSjSPrK6CTtF6FCcN3NqKrsy6ZxN8Ym2RwdqnjaA"
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
