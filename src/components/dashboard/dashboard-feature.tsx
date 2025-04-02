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
    "5v6U4K6qnXXqZvwybR8NjDhyBUq7zKzD8VPTKRfyJFXjPSggp3Gj3kZZGEjpCMBA3FD7kAi7djjV5ZqzCLN6dqt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iCQV8v1RhUB4gFKzarRDhS531PuToybKsHb7GEtccEYzufyh31EbvUXz33Eigxrspmi3EEotpmU5YRbo8AJJrKZ",
  "key1": "3fMYdbpmgWfpHKwiA4TsY6z5ytPYNjuL9to7D49cHCcJLXtafM6X8s4nkZReNrjCHn9g42ALTNi95ksWF3NxmVYm",
  "key2": "2tcGhrFVRXdMhZ4J7rx3vfoeBMdjuTh1cehPsXa7ozEfr8kEUUWD4vuQuxfFKH58YyCt6MJGmHrkQz8gfDnjAsZG",
  "key3": "ZDoU8gwgbyj5N7W5z4wGcKnY8Qk22cKWMGn3BAa6ZyQChJj5mVv89scqQxRuMNFndkbYKkrjCquHLnHiyzh6njn",
  "key4": "5xTTYs3a9hydKEofCn51VKG67GkvVeAa5aTNwtG61XFAqnqNdoqPfbFFVEPep1KakcLdYqFYEhwZpiX9SAPBZFs9",
  "key5": "3wRSa4nvLzgGhTuueunDfqDNFccWc7Pe69WMhZK5yN92fmBX7ojRy5pybywT6gbARuT8aBv2MexZTjRfrRX8xRyB",
  "key6": "4HVc2RVcNvVNYsQGdxvyJh7ni99QegXiedd8m5Fcv6woTXnx8WqYNbnUhZ7Ss6SkXHiyuZgyDYz4WeCdFBb8f7WN",
  "key7": "4nAjm3fNHZzTYniYapWt1hoJbcvn9T7ZXBmXV6z4zKYCWHCkggrstBQWkgDHvDRmZRVDPovdUoC9JTAC8NoswrZp",
  "key8": "3dEtNTFjTcpu4tymYHaXnGEHvSVtscN3zx19qX5wmUhmdYeV9W5yUqWiuYK3GbuShkvRUPR11XM2BgZA1kAUPkX3",
  "key9": "3NYGMNpcxriMtpEM1fV7VsAt3CVmYgpL7XCgPX9EdCzsQnDS13bm4sgEKVLQvKwn8NjmbXyFGnxWwbUgTSbnrRkC",
  "key10": "5y1ZmZzDBtGc8iKBjZbK2oMzPeQmgC82s4B25sPnzMMuCbzAVXLDY29CNcxu6Fyuv18SrmEZCBYAiQUBxPZVU8YE",
  "key11": "4BCqhGaU57ibm6wiJo99uHgeoEJXxkYr38u9RnkQN4SAqgdouuBtnFaLE8ws1LCn6KQ7JQG9hgSdWDvSK5xtr3G5",
  "key12": "2MpMDLa6x5LSLvA6tRVytb7CA4n3tZx2yLXTqMs7WyvhBr4BLyUyyEuLNsKR2Eik16KU3t3LsiW2pEtGFFwieghR",
  "key13": "5PjrFnQz2eVsPnYViX2iBMrHZxNW7bFdsdfA9NefdG9CnHT4KYXhMw1sSks5rErHx8YSYRiRjqDymq7opY2LV2q5",
  "key14": "2HzvPzyaQ8goiL8WVZijCxUTdatY1m7FUik8PpNqPuCcMYTjjPigupxtzjnUGnMPwfphijiy5Q68bEakiMZCzsC4",
  "key15": "673uG63djtwVHhd3gkgXK4vskg1zdDYVzXg8xn61RpU1223Zavp8ijcyZWiS8RDhNFusDkQT72c45jLAa4gUhVRc",
  "key16": "21udrV99J3QrdMix2PwdpPDJPMXqsziF35vHPRa8GyeCRjD6kxbM2H4mtn69sqFbuFFF9BfpaoLdTgETpBBU2K5H",
  "key17": "K2W7idtmANuj6G3Wbhw81s2gxep6tqorcSTgRpyLbR6x7u4aAZdgoXQ46bQbbfBHaKJdDpUZvoXvWNctChaHaJz",
  "key18": "yBwnRmMgQfk93iM6BFPLA2QoSab693Uy56F98eEv2jmiA2CeaV4JVWS5SWpDhYDoEz2o6QkyXLDLnPDFyovzbxo",
  "key19": "54mYpoiUt2h72wbZMKUaCeHe9QvJMJaDRGGtp7MUWZidr45z91gZnGHcjNKvZ2AbtKCDxFf5SRywV3LNh3ZZVfgd",
  "key20": "HVGNvS7faqpWG3PxLSscggVpBgM3uJoJ8L8uN9bCNvNXzrS4jn7cytu2sfhHHagiWjEWe3HtHe3ysF932wiau3b",
  "key21": "3UYbeJtjf7XzRKUCzpsS5eTQ9oiJ4SWNDHzbZm2oaTsS4i6QSbsTJUGafxBYQWUTkNZWQeZAWapwLN9vLRRxSodo",
  "key22": "3ked9JGnGEsjeQoGEzcrqkA6nM2WXk5dRXcPF2fSDV7eC6ArQqdpzZ3KprXVHaM4AzMCK7A46wkA8rPsKFnSff3j",
  "key23": "5FxaSGHtCDUxYJL4tbZwVJrassPqDqnnQisth49Tqu7HW2ierAE73uKTqXD5MPyBb3njruTK8REYXQoRF23r2iv9",
  "key24": "2wyXKa5dFjuzkJUMVy3XunMtzVUSKNYMRMuxHRFgnPsqzrzcw2P5HTRWPGXEHMYqfi7fbpQqUbfuHfVmx2KSVWJR",
  "key25": "3XLRBpoQcDFM5mS7RbGKVdF1gUQuvDSzA53HX8842kE1EQCr5CY7Vb7MotQ8XsUNsw2C1UxpZZzdXiFMQtpjPZYh",
  "key26": "dJH7j7s887TQP9fgRCNKwjvx8gYVDXFrbAKYQwrqVb1caTBqymRKN6LUoV7JeVUNeRWvovcABKa67TSGbdHwbtm",
  "key27": "3z3KqCVgLvAs6aWMT3J6mkkdZiWukM8PhrGGg9T5n1mP6d8gwEumQQhB5vsCgUhYBqDkdUgFrb99STVYrSfr5gU8",
  "key28": "2CodwsE8Ub4wxUkwMtyLpTSPzuQNKScGVQxna891C4iAKVMbhyy1bKDXJeYZSnCNXiUamLyFJuuUr8XvQdQJJCeS",
  "key29": "3dvxJkj8XLjUo8gmba7FtKhTJDy1vchqf2hRn1DUDtRFH34jDkLFDHunwniKzzHSaGbJk5qAi4hzA4c1FcjEFXi6",
  "key30": "2cCE6zcDJYKADKftGAXztc44iCF9Q1FpLgNuqE2ERLSCrTpSgmEgEBB8h4pHYMTQbu2mbjBCoevtGYUPJv8zLK5x",
  "key31": "26KPJhhoMtA3ydMNzLeQoN9nd2VnCRZb7B1mx2iknEQyGKYim136ae2WZWR83xRSQkav7tTeTsNs6BkGzjTQDVfv",
  "key32": "67Qd1XG2s2eAzi3ci3CVVRBnBxNYfjH5U8uQqMtRxxhFMCMdrMKAt8oBKChxVePiFQLUHZFu9oVVaj4Pz33v9FqP",
  "key33": "3FzNeydi211J8bj3NSkBX1LXVMt32rEcitDVyiyC28fVHZfwgmk14AqK3wsoeJk8uRpbFAyShPFDXzdkXk4RsDvY",
  "key34": "5NBd2eUzjPKGNjwPex4QX4wfTgUfg3KK1RfoemDrxFA9a5zEaUD2owBFfcT9X8jbk8cQqAjytBdZBTTbpKRoeuVB",
  "key35": "3zfGvqyZn8MMeEf6hxLzYZ75AEkFDtVh5tgqAT3dMiBNDAJTc6wgCWY3kZCGJ7pL5whZFS7JGZ8YTHam5dy37yJH",
  "key36": "3i3HkAN3mDejo4nTpDkbQRTphpff3sWoG36BRd26i8dr64WqfHPCCTaXtcmwRUZ2y6TcRcVuZJNGgB8LpfshM5Wt",
  "key37": "5r2K55DDc7bSUEZJCmeM9KLCaxrk5mxeTG45Apc7WazNakc5Z9MajQMNfYKgKaE1c88MAewcVMnhG4RPw6cRFNHc",
  "key38": "39aG5m9WAkpwZqwC9gcwqXyS2Dw4hrdoQeF6CDuypXFa8zwTiGdwDJFB6gNNoY8cPiLs6B5mheSiXtGENMVBRcfn",
  "key39": "2ZsuTJmGHukR8WrfXciDABAdKVhGEGZtSHM5Rfipa58EuNJCtBvPtiHdTUEfS4bBzhuRmz2oVMqhAELQyst1G5TZ",
  "key40": "5MUqfLk12BqcTUDepfrPRFxzNJ4xRDNZeLckzUqrFT2fjrmbfmHDZ1Nx5eCBptDY78UCyQ5ksscpDCzTrVQEW1Hg",
  "key41": "5g18q3vr3ye5bgmcY3GJGx9UAcqTaKnamZcA1AMq569Q6S1CBKjeW2GW5WgMHxnwxs6MoTcgs9WG6EeNU1P9fVga",
  "key42": "2phMMaij87Wfd48Hb2obHLmGEAWRkEYcfAm454yjoUTLjsUocpDKNTZS3W6j3NnsmpmFBqQc5jxaLbvGHLsYkE3t",
  "key43": "vsgcaRBbJ4w4HzoTteAujxtgcubPkf5myeftbs6PhAj7DPpi5hL3wHisMb7ZJe25cKG1uEneiD6fFdtzVBjMo59",
  "key44": "NzpeCzZJLTbPA1HQobQ4iKUBb5q7uxwuuovyQEtkjzmZ2kkV6CNPX8adxZSihr2ZN7qTibE7nuX9cKetQgfmoid",
  "key45": "44Mv1TYvStekhsDjRWwgRiFXqnfYsHY1Xi7fWpmMBQYALdRBP3jNvFqihkjPYjL9ny3doYPDSxtsApSnYPU2RPcm",
  "key46": "sztSReK1ygL9bxeX9j1a3NQkS1hkC1HUah6m38zhDzWqbuuSDMcoqkjVkn9dAr39vwGqG6tbuic8x3nHFkMtHmu"
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
