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
    "3eHvZSP72FGhj4eFW8Rp9gQVCFggujCpbJDiV6uf9xtopmsLqsf2cJD3bavNpABSEp4wbExdPn3sNSJnVyGeg4q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxUFMzjGJ63YiATsZQ7nU75mrtfXhnhiQ2uW1aWNRbWLyvsd1dLwjzKFDV4iTFSXZqFWbk5RXFdCJCd8e9osryQ",
  "key1": "5XmCJEBCyyXidKCuoYfwhv5Kp3EU1iVD3mZgCVcm9osXby4hM143o2UMGoep6burg8Xki3ShA6a9RWf3qga7Zpkc",
  "key2": "Lgptc6GQkpnmrmfBeyqSdSPo4uahkLezr4mi6U3awAUn91qrKasAMUmGmSHhFnyVTWHfHFaNYv53w9uDx7CCZjy",
  "key3": "4A3CGoejUEeAx9CuZBYRYqa344ZtRvGgM9xdfPLis1urtV1yqZAkrE41UnxCUSo3u8FrZfbcpstGbpVfzoSPiMCj",
  "key4": "4craEvq1aGpUgiMvzysT58aFRDsurJ65JgfbsTuFNABvun6bZykTdtM6YhAWpxWjCfSmNMxbbQjdyQ4x58NYGoco",
  "key5": "2F9W8bUCC7tPxSa7As15wsXVfSE1o5KZs6uDe1rdVjSFeyE7bXKrg1SNcZeoQ2kmKAfTa9okzAXkMpHhFjEZZaa4",
  "key6": "3q43i99AsgTzwskLsGtXktnWP6SwTPZPp6PjARa1YLhZFF541k74P7Riz7L5UpS4yTS5nK3qCGoYqJrE25cs6zFc",
  "key7": "4ZZ9MgjbLZAQzECKA9bkj2MHNzoUWCagfD6SGeBa3cN9ThmcmPkzk1gQktEYiDff4dGbMqwnezYjnCnwxYHQSSsT",
  "key8": "4z8AdDpBnjJpuJHcnohXYs1Q8UeKmRRypzNdsan6pqZXNHiBzca2NoLX71d4eYTkdX768LLENMtcUrRL3RRhUyFD",
  "key9": "5c8bC24P5aZgFM5yFxtPcBCEmupaQLjvBpj2VrfybQTSuQWXAreoNfB4h4J1SWEZqEKVaYey5dyLt6DB2AuHQRfw",
  "key10": "Md5oCVeehEPWRgQhr3xGHoFhibdUwzfpewF36gi1LPpfhVkJaEuiMdXWLGjEzJoyFYHXiDeMevsXFWcfsyjr5PY",
  "key11": "ApGStsQ93wpczRwRstzVb3KQa775y4t5jXe4xBuVsXsReb2BFpfG1pzVUokN4iNDJLHBU8PnE7PKjRPCoN7h3j6",
  "key12": "1sHgwnA3xwQZ8t3o1M8qWyNPsxsncFgXDuSRWtL8X4Uo2KZ7v5QU2dKfGoHaSbknjDriLHoppakDynRfmrd5sm3",
  "key13": "scsvvgGNGELdVSkug3bG4kaPDQarp7VyGo82LCB3HJ87VjTPcBDDanJYEf2wmcEgTrECGw6z6Y8Rgde9MAdyVJf",
  "key14": "uRyjaSB8zbV6dLCsaZQTZfP6s4yGLQFHpwtbA6r5eVcuz5BTD4qMaTG5HAF6nrzq86qGJerZjZziUN3CEpn7kCL",
  "key15": "94XaznTLBSsqrRQh4LBRjM1XFB9UbmTC7h3xB5hr5AVFNbpMGKMAHZaHkNUaTwJEXyVs1CJDtaahJRyx2yDurrW",
  "key16": "9KtEx5bUgLNMDfh9V5DPuF19B76CtHyctPSh5kuJ8hcAhhzJmV5vCLpL9CChrQ8sqyDFXJHMof5WsaYNNMj8vcs",
  "key17": "2ose94PbGeTaSgc8pqpcgQLm6WKnGS6naEtT72LRe3gz6FwDzozzvarJrdgV2D2zcnTc2ewR1peaMhfQUXyD9DTG",
  "key18": "2KcujUrvhUr7idta7Fy1YdhVEMrB5Z6urVDTmhZ3QgUX9itd5owMrAskeYCW3UskjfbAccBux762LNXvn5UYYJLT",
  "key19": "3DrQfFZXiT2XynViwWBeUXyg6cEzEKactWjt6cW9XpaTsifMcieBas7Xdbmyx4ajd1w9srSuxyFW2P3tzww2Gs63",
  "key20": "27zVEJvdrZUukCmycUvoT9Qn9ZYbFso5BxqkTMWFqheH1iJJgKnShWQDvoqWYQFpxq17onzh8HFzRnS8PAqtEGsy",
  "key21": "3vZyWzwjKt7ZTNcPpb1GZ5nxMuMVZh3gEk1CE3MbzzmyZud5v7tpZHekso8LH9egRN6rqhp62feitLZr9drG4RDZ",
  "key22": "hu7z9WUje9r32MfdkMKNZnGdTA2ADW1Vj2CxuBeFswXtWnKSLrYaitYJWcDYU1Ts1kaepHgbeFuKLZsMf454ymT",
  "key23": "2kdFFMfcoZKvWFBnxFC11KraL2BCGxqzqB7PEbiedMMEjrHikcdzccL2Rris4naz2jzYcrtQPWUr3wDreYb5LdV8",
  "key24": "9rUNULUyG6zeosb91hC8anPEMKS3qURq8XwBAdqQVjt49P4Rgk9Vn21EPUTqWo6frEtxztktsFSKXB5v7iLHxE7",
  "key25": "3kJjcYMvDZ2L2bXusQCMm7utTZinCoK8bWofSRJ2kt2x5dpCdv4RKwcjznMdYq4YD1bmMc7C8XWZ5nBXbCPJHXcv",
  "key26": "3v6KbNZWM3qXGcKFtucynu3kExnDc6iGApj8rGkNdjrh5LcfFL3s9qjT6Cx21ewSzW9EUJZ3oXD5Poc32XtuQz4E",
  "key27": "usWMH3553NevjuKDxd39ms9tamo564cZfC5gYdyijahDYAAmCtW8di7U2aXQsbaZnop1fdXAHc8ituqrHmbxUBR",
  "key28": "2ZxPjY2PyVW8LReCkm52wr4TD4aewCVm77fYP6MfnjxdMG1XxKtjNwhmaApY99GgmwE2p1SLbkUDfNeDCdk93MLq",
  "key29": "2HRjKRr6N9s6mrfS1Aa1kirqhg5pLRwNeMfGQrGXsi2VggbL4turDrLQ7RhpC3QKE2wG1CwtxzfmoyfR1sHzJDce",
  "key30": "so2amHSt1WGmhEYnkieavvTpY79jktYLfb24jQWT8SF8J9VmzPPeMipmBSwWcjohtEPeUd5TM5H9wVWmKBbek8V",
  "key31": "2dThStqVRmtnLakmy4AMVPt215V7VqiGHYrMrHzcD43KuGj66VzVwYQnaSg6dutc4j22YLtTciGATzTEs2cqb1EL",
  "key32": "58LvASdicP29n8jJSrj4fm7h1HsQ88y6x2dVwWdCWRzbGjb7sU2onWi9AvTMnCsbvGTtTGJ8pZvu7CA8vdAvHmKY",
  "key33": "75H5yYasK26aH8Usih8EqAtXf4ccTxXoEuwUYrNs6K8UJuAT4En1awNXgTbj9gauN9ZCkGKsQFk2gGoTzKGA9ck",
  "key34": "yjFWoXg8Kp7zMq8kMfyQy4ccJGM5MbLy7WFN7HbLXKY29pkERJJLPwVa4eoxAT8A15hX3hytUQfN1m24Wd9S8ft"
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
