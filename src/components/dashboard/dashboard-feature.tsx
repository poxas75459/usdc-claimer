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
    "5hbLxGtq4mvk59jnftztoJb3nu1GKdrihk2KhJNqvHHTrZobP5FeaseVXtefcXrkdZSjwWcAvH6FrDdrgiEoZ1Pg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nbewW1Mi4sG9b8FZcvC6AkZ8yZP7m5X3CoeCiLKP4Z4BccpkUMiEeiTGV7pfNBQKehCUS5M5oyG7vrZ73XG5Gy2",
  "key1": "4wo5F1ocs9GKtTMqP2Q8NdtKA29FF2iMLxpF38pUNfmnv2MdZmQ1wQgxhfr2i9AUGkqxCRfaKHqxPww37yXiRRB3",
  "key2": "23Dd2tMNgXUy7zm5sFJDfApivMzNDpsoMmhKSm7GCEfEpFqoKwWtzcWqiBxWBxbFHu23pHGDyjLS8Tn396A2t1PR",
  "key3": "3F6PEXsQi5FqkJt1jqkLqfx1zPpYz55ezYxcxobHc5zMuqbW3ooCoVYcznizJ1HhVE64P81MZdMtaXGUhXZ9QW1p",
  "key4": "3GGFPq2P6oN8XmGwomzT3BGM1NNheCM7jKXQ6PvGDcSRMJuRXwmpd8hCxuurxftFgvyVctJGF48sK4XwY77aCviT",
  "key5": "nCYz2gawdCYUXX7cTXVoW1gnhh2WXjoRbgb5NNw8QFJrxn1Ymcr2rX6rPfQKJbvTNH6b3sFkpWXKsUGPfurbM67",
  "key6": "5FWr55DNNooCbQUQVMzUNevF8kybdDiGmRaZdTKfDDXzx9Zfg68sM6QLJD7HsK9j62WYwiCwoP9fpADevfsoCyqr",
  "key7": "36B1T6acGnHNfrjNocTD4WPwDvdJ4rGJ1if86fUC5BdHhJj3LuSJNWViKuHrQkDpHAWvUdGPj7GELaYDsVBYSDPP",
  "key8": "2TrmUu8nN439muHhU1JedaZTSLHebvRVDEzeqLYCk9yFnT2ENnybvtEZc4tjkSaCkJMH1NF5v7k1VEnm9eT9KToU",
  "key9": "5XRqvZjRqJiD9sDgckbRscz4QUD57BLoadNLr2hBLWbaDLnhENvDCr8S6JXKHhYMBqp7BQcaNskYcKPx7hNnBffX",
  "key10": "5h8zzggpwW84Ki5t4SJjy4pFvCLhqT4Giqv53YTsNMLz5hTfsc8Upm7dtYz5Susm4Hdok2NoyaZstit1JpR7FHhs",
  "key11": "3Hfj3fgBZWcV6KJbaJNbYC35a2s7y3fSrwGzLHEsqkAmdt3T1tDmQr4euX3WTgiNWLghVNq5Es7qikTVg4TXrXYe",
  "key12": "3pjGv2rfTA1t4pVVYmDFCoHw2JqxdUsDmUjvfRp4jjkhi2YEMuaJFRCFLqE12FCVN8XSSwiiFAvH74zog48eiwFs",
  "key13": "64NTuiHPxXQ9xv373LoStH9F61DAUWhfoYRFZvuBPagsg1rHGZMmCag6Ty3Zw8QmpYJDaePuYQcSA5K6Dj9pex2A",
  "key14": "2SZNU4obAPEqyePEUSPAzngQvNKjrUhN3hm1DD5Xo227iykzdBu5i5uaLmU8MqS17WTpqmTLJzXK9yQgdsn5FhhZ",
  "key15": "KknDGjWHHcNDAZGh8E3XQDKMmSnH28cHxDPYULHUQ8mYRgYHTWJ5vxRaRjpv7HpWQgBGR1LL26KVPjvP6a1275i",
  "key16": "3DGGN4ZF8cb19aHamUw6PpNrGxdSW2EjjKKWS2AHq8ijCSkw6LuZkHjQVz1zNNZ5RRPbVoYD7xzGLn84NLdtLz6x",
  "key17": "2yYvErJw4SBMgxroQ2nN7p3W94nPdzh2AgvKWbK5pk4QEzp4YKwuf3MT7v6J3PG1ryv6mF9KKbbCYuo2zw6dm9Vq",
  "key18": "5JrmgsuFxrApUaweKvGLNRjyLQFJHJJoxCudrQLR2eAdhSZM3Zu2MNddmsvHaAEJTftGFU8eotzUD6hESAfN7yo4",
  "key19": "4J7Ajy3Xpt3iws4yS1AeNFJRHscmMAMr9wpthiyX2fC8sLCnJVj8TX59RGwwxx3erKc6HqTznULWp9pmkfxLZqzP",
  "key20": "37bKbJ3pgsYvmrThnbnXxEzUYHhXQSpeztnWG3s8YcC2oQSMacFJ56fV8YSEKDmierFMQMKMEDfSthFByWEtjzq2",
  "key21": "4yuiDiS71RsboP2irNJefZUaUUFWZfxDtn1a59HZP6eno1DPeyka5Fz8wAY5pNjNk3LcMEedNmbPAcv1xUVyh8GT",
  "key22": "4cWCd99d3gs7ztWBSxDAt2jYZqmBCJLvRKWLykfHPoZa4TCg9ieqVdcE9KJcGYwh3xka6Lc9UmvbZG15soBsDWcv",
  "key23": "5NKqVoU727Em6beyLEnaVkh8b4xgga4XHWMDk8K4rLN3AHvwzFEsdAYhyFMRk8yS2gugKKkVZ1pQBinJJxPrUxgn",
  "key24": "5UX1eJ3V4qgTWNXdJa7YKBRJY8uoZvaktwr3YtKXtG2Fp7JYc1LxBAGVfwr9wUo1mdSRjr8hgwmRs3YukMPBAXqZ",
  "key25": "4pFrAM9yTCpU8ydKTV5L7JKYEdKFfkDtaj5LPknh3tFL9rZ8EskH3RArzShbWQeFEwaMcnyT9GgLf6HsbrF9EE2x",
  "key26": "2eK6So7W5uXmMBM6z4czAxYZV6f8KoC61T8ecrtp8dKBhX3fjbaneBR75kLVDYBTKz3c2i1LYYhR8sZyNPM173TQ",
  "key27": "2byus4SGDHDD7Kx7ay2nC5UhDuZWNbkdkqp4itsjG434LHwsR3nuJd7ctPiheao93e96WB4uiDHPgWrTEMZ61iuS",
  "key28": "5FLPo1r3cCgKJJVvjxy95V8w2BY5W3PN87tzVCqSJoGU1nik3b8XpVpKWaQpeSy9JKkVLYzkRk87BcggaNqQU9ag",
  "key29": "TEDah2EansGmhDF5QmEqrekX5SourDWg7AAMZ4boSgoJaiUtbkSEuwwX6XmbkNpBBBMDesFVewB9DUyTHp5XaxZ",
  "key30": "5jrsS4HwaV4dRnuEpb7D4iKNpKiiU8sr6wfmXUybCAsBSb2EXRjRe9o6oc3b6cU6WZuqwXqh9kjLgEbDmYRitdHM",
  "key31": "2dsM6njsbFoWKsTfhYyBMhMmpU1fYWPq7XZQa7FQYtAM9T5acHD1SPLzjsuBegLkLU6aUozVoC1GJTU4JSADiBfR",
  "key32": "2wKGLWQYMVGiprYzfcB35Eg9J9yYZgCHSF3mA9UujuxM18jpGDfjSEj4xtr6Ewy5GdtWxTPrGAX4N5SJLkqjXCMM"
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
