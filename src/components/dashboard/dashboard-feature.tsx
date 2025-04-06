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
    "4bxhpvKk5Ff5MNTZLY6zj6LMEmgH4xfpym6UXLadSrAedc11ao5GbdSMfcn6thgbQEUaxvLamKD1ptM58hq8VUTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBAyUG4MpaynAC3sGwWww4PTFywtTUHkeAVAb1RjPbwxYiQJCq5fp29Fh5foKXDgTyMemvocj2HJGf147PwmKmD",
  "key1": "4JLDyqvtneCPXgK9YrLH9dSHQdiwf3du53NgL9ZxZL8X5xci8K2bVF2HHi4hodm71ZBjocJoesgSWC4bVGN3wySf",
  "key2": "4yVMmRRrEP7AnAwQnu5rUp2jGC4F7723nzMhaLXehQzHxPVs7CRRXrRfNLHDtEgvwvgkKUi12fVK5qBbosDsZNhC",
  "key3": "55vCRjea7TaqBwxU8do52FLRNTCHrnc3VxeszZyWjLQAsz4wRkPmAAY1nL1pLdcb27TeDrCCjec5GdvXrUJuu3fm",
  "key4": "WMhUD53A8QahiREYKA8H1pyWmhVDigYrfYnTLGTt6SY6DZM2x7jMJrTa4LG6mMZ1CFR3QBNcit44dyhiYQpopaT",
  "key5": "3ABs8zj6QEohCt2bnDPPtqUJia4e5B1tXKx8hRXH4gpakQo8aDTUaDPq1s6m5pEJY7AvAsaND3Adee7BdF9Pxcx3",
  "key6": "5CxeiDLyRAtdmvsXwEdfWKmaLxXvAxHvdv3zCJinv9NhSy4FJoQPZj9TtCpxAvPRmMshvwLPcsSsPbJn55r4MVbc",
  "key7": "2QbPNSkBiMyq6S1c1p2sMF8pV7bWU5hcnVArbRrN3nfdvhR8NGvhjcHwf9dDm4Mb33Hc2bfMuCJ1gm3vWSmXJijW",
  "key8": "tFNmo54Nd6sKMspn8szxTcFw9WYW2ocmHTc5KHKRxEcAXB2A4rw5y27jaJJpeSTXQB96fu1rQXpFw5uQRDVTxcq",
  "key9": "61XmAHvuVkbgZxvZZkizGHLhBukRd5iokiWo8RsdLU28nRiXMsQT82aWmYeVtJUrb34ikoDnuLWC6Yezn12cRBA2",
  "key10": "4KG6GCybaVYA6YiEXgdsusRS2b94wXBL7RET63tMnUCxVFaoWzFJXzxJZy1QwfYK6GfWsymMsy5cj86QhAMHABMn",
  "key11": "3wbkckNBkdUmK2DoENEi7P5QjGm6FVFK1c1WtJucMFvWkPkaccs7hrYFqEYrR8N3q1XmNgLkDhJefPkdP8hH4HFw",
  "key12": "4sPfxnbrUFnf7A567CiDHZrxEJsGq4YCFr6BkrTRdhpMGR9mGerDsZGUrcoZG4UwjXu1bfMuafnHp3zoh9nRnXrA",
  "key13": "3DX2Frs2vBArA3AHkqC73zx8BZH37WDbpcsEhRM6kDgTauxXLSEFq9dUWGynZTD5xQ1VXqfufTdnHt1D9skGW62Y",
  "key14": "5DoXDQfqZsZ2aTDBReMdECxWoFCorPqdc94JKLfsuqrKCEzwbfgE89Bt4PqG5ue2qZ15yKPAqk3LzWALdUrxx3cW",
  "key15": "DnpEerKmzYzWRk9Xb59CRAEsFAepLrDdAettoPG8FZFpbzdvgP5SGpxGnf9gzP6ANYU8PAZFQxaMFsVDNdfySLD",
  "key16": "5YM8bF2UPrCPHJGbEN6MSmRLBB52d9VrBJhuGAQpYUesAdmocJzSyiwFiDq9hKSd7aWabDiYxW2PjaVDHHozCyqa",
  "key17": "2nzv9mbFn6uhrMsMNS5yTCHztRQxygkUTtRXC8rW6qujBV6wMy7jpMg9Zmruda6PipuX6G52JMG5bW5NniXNMo54",
  "key18": "3o64Jo2vTCnaurd9LFkjXRgb4aCwAsewQBEwR5qPHTV4WVq5JVdGSk5PpHyBZRCqUceWMYp9ubWBmyMG4uFRSqvN",
  "key19": "5uCJQy8jVDMeKA1YTZ73UniWkiBECwipYMWDuxNeSoHwS6RrFzJKHre79LkQtNYBRgETDFCcFARwjJtZL2doBDTo",
  "key20": "5sBsPrgRzCo9qjeZnthygYhxCJPcHhWxWXTRbRrXZAXScvegW7WS1P6xbLEj7t5w4MXyh9cnHUXftkQkrWLGkSzt",
  "key21": "4m4MAA16Yo6xbt3PnGHf8RKEhieNLCp1gX43SFUyQvbcLCz9M9cn7EuNaYBEk1DHbGhDwYNsXFMEQ2zamZpPvW2W",
  "key22": "3gdBtL6EBq5fLW3FdzZ5mpe3J3TK3LUakV3GP3TE5pckibSnebrLfuSAG5GzUkgUGHcXMBnmMS1jWrHGm36VxNZX",
  "key23": "3kmbtWUrdzNpTRUzh7gVxVqBCXYGQKdwUA6WjKNRsu4NFcHYukqwjKXoqLQ58rJpXRhphDqusPrnNW4CcVqjB3mU",
  "key24": "3vG7r2Uk4QrzVHwWeTg7VveKLvUgSS3V9HmZ8PjH2K7gmX6tcucbVmpUUvm8j552NmKc8KfqjNKzZfLXWZC3qN52",
  "key25": "hdVDwyXi2jXgr942DNo1yLEUxSQ6mZNXs84trqctWJFMicAKDoF2FYn65HxtsVeHEV6CPrxA3aApmpiC4iQx69K",
  "key26": "4jHu73tgGRbeqqTh8tX6p98sdPzwQKTEWVsYp1HPkGs9DeFKk87rRLHA2FpgzP81Be8oJbKujDpNNcHf7ZfEiCee",
  "key27": "4n7Jz22sNi133rUk3FpTcqbmZGJj8y3AEEuXwuR9PyVT35o3kkL23TJ6eEF3kKUimBk5pZKbLWgD18xNhk4MMWM8",
  "key28": "2UofcRPa2LDTqc97yjLz3JjPpFRANcr4KCt9rBeKNYVmqYqW6gmcCwafKgPrYmUuWxcg5cfVoKT5FhYDBWoUcass",
  "key29": "3hpj5vSBXo1ttMC232kfpVBWwifbJ4FaatTiVxqe7seJM93DrtQbDxpZ6nuBJ5RY2XStjYnKhm7j5hUabXnbC6T9",
  "key30": "bDdZ35dz2w1pFsmMfsCQHuB8DNcp61Fxr3Ce7DGjZb6esGTNQo5FREP7kSv56RwAaVxRrRBfJwfRkmfdXjVS6CD",
  "key31": "5p8gtSLUTNrjyaKkdAfcLWj9mJMJJ7G1cKs3Qwt21mjmYHg95KuhsxUXzpSMHRZnqKHTYUvtEu3JEn5BsAzPwko",
  "key32": "283bCTaNSVBvxLbHGZQxMkds57xrbzdhhS7mSDrPFYYPqdiAjUy6Tm5ZoUndx8nzECPDKyJpCFhHLFzB3Q7uLGoU",
  "key33": "5rg36xTw8zD8JRV8KbX8dCJwYdNmFWUwLB7CkkHrZMva9Wr9AzEnvoiyVycr2unfQsDpaepAt8NRTAk39d94poT6",
  "key34": "CJaf56FvN8RbCrnJd5xkZ4h1YeRJ91EnWEwaEVSrcsCytutsBxqQAds66TyV6dfa5whKVp2LyAboDFfKRsYNnjV",
  "key35": "8bm8bjdpUgJSECDWLqmJZU63C44WQnx25cDdkF1ybyYvvB5kSrRZQGQfQ5sj9tE8qm9Abu9gvpcfPygm9qEx9JM",
  "key36": "5ddmyxn3S877M48awi22XAGdvVy8wSzvqirNgW2xGqnXiQp7khhkTqoA2MPwwPM2WVA9gcgdeGYyCK7bANvcgfQE",
  "key37": "h6U2Q2bVvCHMTBfpu57Xk28kmKAkYGhYhxAX3AfGcETwBKgWnZ4HeQfzhwbXbJdFSh5sZA8tsacszBEN6Cakb2U",
  "key38": "5hBxwpdR2zRpxafGNuXUfgS9kzns8ehHthYHbwvPB23YQe35KsYsnKzRVALXxon96H1pmAa1s8Y3iTDaWpMuoDUc",
  "key39": "2ZYSiLpSNHLbkRdNREvR6ALnsqj4Cir2bfVcpcFQ65MyL5oW5AAoiSszZE89v97aJLRoo8PVqbSsJs3GXu8D4Dpx",
  "key40": "3D4mKKoC3MFYs3BavQuvmxtaP7bYVbsgaeRzaXpJZu8nxv4WR62rHqeDwqhwWpjY5czuwd7j9tmNPXqLECmAGvxm",
  "key41": "2aF4yCbA9kSiwVhR7Lj4uqSZMy2ZekD2Tb3YCBKiRHRrMKM3pCTMLEP9Tz6x31hKZqfXbX48XKpx4MYzjdBDaM1W",
  "key42": "57QZxNgcDymsewJ6SshszPiY2vsP5TjcSbBK8fhNuyeqzk3hUSi12w865NbK47vFKFYQhd1XGWSAdnNyNMpGz8iy",
  "key43": "2QS2CSzHqt77y4K83YyQqKk48TPBn1xxgt9PyZkTDwyQk2TU5NwskiE2NUhZZPnzkDtat5fgqriXgTAqXpvEQ3mK",
  "key44": "5VTqKK9aNzzPV4L3jRiLDydbaMFnwYQ3yrkbJP3GZ97EaHKxo93vLzNs8mjoEBaziUYiN6GosKo44JmMLK4JfQYw",
  "key45": "2wnpSJLa2i4a8TbGVHSMdHFJefzpagPjejongJckAuZ1iQoZZJSg1je3227eAbue22Fep3NBb98KnoZREy2RPKEK",
  "key46": "5Aw3Kpbs2satgq1EiMPdXmvYVBX2G64nG8eXhf2bm6n2Bq8LZKTomUjFJVxVa64R3msHT6ATwjZmcwxFqU6e3qT6"
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
