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
    "55XoZCjfGg7zaHTGqxyafAgLJwz3YBsaQRjWF62rLB8potDALb1fjAi3ZybhaD47EsXUSFv3GNuurHfhqM4yHQJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8YNF2iwKegAzWeA2P7F51mzQsh9MJZcTNxX8C8urgX3eixQWuBYNt47poy4BVK8uJP9eRGnQMyDzboobuoYwdmJ",
  "key1": "3ZWQg9zuHo77MCXxaauPQJFvSHNswW8qCwPara697w3TdDqsGdCt3d6F4BdTTi4XuCFdGS642KqMA3N4LtARLwEi",
  "key2": "4VsMdYy6m5Aan2FaZBZpkmfJsLiiZWQV9y3MHEfh3KyRDUgHKUftAL2dGydqwJBnz5BowVcsSjBMJbMDj75uMsM",
  "key3": "2MXDozsZF7GpRLoU7VsesgWewVuAhkQRu5p1vrzG9rubuEtg87cTqL27aYtuG8wmsebmsxoXBwkzExsqeVMTugAU",
  "key4": "4v3rRDXocC1epWwSR7hhwM64RPUn3A8yqPo8vRNqYspiZdtPj9hHkf9qgs71L9JXoEHjYrUMaYfSiNhdLDcGMdzU",
  "key5": "5kqMXxrXHxukeD7rXxbDWhS41L63XfPviCfvWKuULgpc8B6UpWrR8EM881dC4KzTvzpLCdZEKg8u34KGjpFGu2gi",
  "key6": "7qLyQKkYjHm96QLd7Z1NaqW5PqoKWUvccjH8JyrSrhWqLbC48ktsAZA7dKk8Fd4RjiKU1UhbYzbozfh3cy9Bd5w",
  "key7": "3XAJZaMf4VrtFQYqeaU9iv9qXyNYBrSSKc28mn7SCTJRgXunf6okZpJ2DM3R1QVcotxrTHMQCRY4JqLw1BsyhxiT",
  "key8": "2umEMnf9crijwZwmt1UDc7YnydsxPeYnJ755oaMSCWbP5ADN6GA2iK5Kn1WwofC5u6ymVoxnh3e8qWvmKrsNfAWi",
  "key9": "2m8PgUbyRcPCSyCdnH5MXXTXnjyi9YfPB9jEcnW4cFYwm7Nj3ne3xK5Ee4A6hDpa86aTvondh55uAKCZnmZ97yqc",
  "key10": "5u4ZorpSmZaXFQLbwzGQ3uKNycGsqvAUpveaM1dSdTZKvcWoDhM8xrx8i97vT9cTupdFXnvsHvsYRv8mQnrAQsaR",
  "key11": "5vwZptjFxwmfCnNCCEsTLTGHPyXEUfhQ7QEwsYGBCES26U2PAVhQYKpprsd1sFFD2zYL9v2YzrwTgc5gizbNnari",
  "key12": "1xw9inyrnukdiwMErya6bAWZh1n6D9aDo5B3e9mNUEsze3LrT9UTgv1gBt4KyMgXs48HSKNN8NKa8YjqagyC2dM",
  "key13": "3W62zavEBWnpZrc2KF5bZaM9bztdKBqGE5te9Q5ppGzm45MKnhX5GgnzncEMdg5oGRjMLhcoE3seTEWzhTNLgb61",
  "key14": "xq5dStzAiSHtUff7mhuU2juKr1EzWLdSFD5XRPxNcQAVCqeHrUsAzZrkbrfNRwtYddnQiuooUi1cFeBz5TjazpX",
  "key15": "59iqkAuHphB39dZVWRtErqXxZyuUkFHYextpP8CdnSLqdDcFbvCABwEtjM6rQYbW9m6cVk4ot5Ss8xAsPgfSKdT9",
  "key16": "2xVDW31YJDPa6mVNVdS6g5BjePL8CKqckHtXdcJGK959f7j9TPiaU1dBWfAM3YDa5dQ1nL4tDv4wu1D7SH1tr1oj",
  "key17": "3BNKGCStE21eWx2DunwqPLgQUC6ZA7PGitfu3PyMby76PSvszjAkkGErVcSjmVstnoH9HpeJuQ8uoZpBhsgWhJkx",
  "key18": "371w6r2VVK42L2V6asf2vP1dPPDYh6yKfH3ytxfk7SiKmNp5hYiFMJkXBtDMQ5c4rGSawT9qjBitiQ2BZGmxoDSY",
  "key19": "3HaumkZH6n6VbrucCnHaAR3KiLr5XBLj9AurSP5dHcGnYeppuSdyaq3HD17se6PBWpNXwqufgXrKMiNf8g2WMb7a",
  "key20": "2iSDbaMauKA8pL55udswtkSuHtttCyiZd82UERT4Xd17MAxybbAt9X7V4fMnfjBaaVe4en2A1YNFCo8P6jQuefw",
  "key21": "4AtUaf6zkePhfWieSK2FV24zNjsYF4UKRUVo287qeprwH6m2WGykiA6wdgZD1EcDyf5umafaKKK7CYF9vXWZrczr",
  "key22": "4Bibhb8BecgpMQCw4Dav52cQ9ZtcHGcCJWCnGiHS1d43bngXUmkLaLZCsYYUmFrMoeL9HWm1Tnmx9hXPHyqZLT53",
  "key23": "2XByk8BwFQEaYNXGiYfPzAdw5gYjGYVk8QeDyNnXBo9awrHkJbV7svG42HXmcb1rRH7m3CbGMQ3hn81UEjtRdKBD",
  "key24": "2Ao2NtWq5WiYY7uos3eeHFZwXjo4khGNbHRbHZEbWLm19xaRXCy2cfjHJVFbQJWeBQD6geck9Cb5fkypZqqV1QDV",
  "key25": "3QNFnkaeezfmevgUabiL55wjDsuVp7UByUvWXTQMZMWJECjNcvn3nuCZ7E7Z76xfRZHiRmZnB34DoxhCj9JFsjMu",
  "key26": "5kZCb9uyzPh1wGfvwpXJ4NGYbAMwcZDvvVggmFq2WUZxoDeXWyVTfuzZDUv8KfTm9euejbxsH4CgKxxNviok8pXL",
  "key27": "2JhgGy4Adv7EDnwsyxWF5JATnkC4hapthHj36sTpapBjwAzrRzQxPFpBS1bbBu68WadPeKwJnoZYWK4fZM4e92u3",
  "key28": "4c62pjeECy6s2qm4ZZCvRx6N7uPLeLVZeUoi51BFRyQXGSnyB5cuPZXYXbGHH8er2RvCfyoFsCg4Kv2VQtsDgoBM",
  "key29": "43xaYJcJFmRBxnq4aTYheE6btLeuE8XW6LJjGZcRWLew8WmSj76EVnViFqHc41NGDfsLFzVNmVwMJBKaFXdz8tam",
  "key30": "3G8kE9rfUH2ZVmJDdJFjCUzMFpHBznL9WGNi8q3JY3qmkqAgaJvYD6Bn8C1V8Hc5HPPkYjYtJCZsbepZs9oeaCBg",
  "key31": "929M9x4B8pqVoJ4P4yWrXMa4SfLfCaECPrvzfurkFzpSGma83yWx9Ri8sJddG61CC4mvizGV5xa8qtfcQRypxuZ",
  "key32": "t7Gh8ZuX6BZ5t59D7Ak1DgnZxAHQkU2FFMy86W1txNe7zX7iuBijunaEvYyb6tprETsVJZhXKdLkDvcPwXQUGxt",
  "key33": "4XPW7MHhFysi5FbkosPncQb4R4xM4qTYq8W5j9X9KiVETeYxiGdLiXbUwWk83iMnyuyPcy7C4PBLTEjdtSGGkavv",
  "key34": "25jDEcpu3ALm4bHMyX7arq4BQpqrUwLDrN8ZG6WN8EVUYM1y6vA3eoAqtwayKGcdmgwbqktwVoqCobmUNaeTJoLR",
  "key35": "J4aMk6yNoRKs4bGBHYcuzBozFx167EZZzbtiPKncJ3BRfyA86MMCdsfkBKuGLKGQqPe5uVn9HtSN7B8uq2ZdxPm",
  "key36": "5XaH3v7CzkASLtHsF2CQA8VF2BqcKS251ioHF3gfvep5aTEkRV1FJ57eLKoXzVbLinqMjaUxfmydHyUkGd3bosm",
  "key37": "3ohREujArhtnKmjqVhhsQ3YG7SSFkW5JVExBASRuiv1GWQRw9pugEUXtdeeCDo2H4MzkxMjDc916aAsgNCVW1rBH",
  "key38": "4hyqgVtjFHieqv78c1ishaqh47Za6U729hVnrwHVLdF2RcbdHde3tUae486boDTGmLu1jxbqTLCPwE52ZTwo3VNR"
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
