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
    "3SQzArLrgTLaCiwmEEVvzj6utHyUiwdEok2hE8Xwyw3o8QZSYctiWE2UH6ioCCEUkYAPHuQPvTsfgiTAg7AFeYMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pr2Ljy1E8ap2PnyfeyTDANQH2zdoFY2m3uuRENjLSCpYmY6kqaqBS9Jw1qS7jq4HsZwn3bNC433JrFcWEUw9SGX",
  "key1": "3xHs8izq1yRbE9rTGwaghGV7rv2rVvZyzWfnxiHUwgReX2jjLf54QGowsH8TTHEDV29K1McCpEi56JLNyouA1qSu",
  "key2": "4SEPWvephUjsLhjNerprvQLeZJPmrqCb8iCxNVKgZVNTZvtzgT2RZFqhXBxv24u6ZAcnPC58SMqjKZtUZFDEidjX",
  "key3": "4WS2npfcR1NsHgoqQ9cGhP52z9xCQ2xsBiqgzDFncbizwrK7QME7x4prRtfD9zjKTVyR7VBzASaW1zjWNg4pPgbF",
  "key4": "4wGC84QxLHcrVPAxhy5NcpnrjFMkQe6Efyqarzngq1Q7TB9ub38HNPftPCvSnrXbkaQVecX47NrFtkTE1xoiBCRu",
  "key5": "3NfJy7cPE5qreWabtDUQFdCxnLww7Sjie8z19y3PFuRKPNdaV1STaVSnrdpDRE3icoR3en4vKi117jca1Eh1Aryx",
  "key6": "3ZueSyPdVsBJ2wJbn4b7zW62Cb2shCuU7iLXT26yaHS27QhhzfYTEFy5YGJXr73mcLDYHdYWAXt1psc1BV1fu3pj",
  "key7": "3MgPxRje1uXtAxKUSKpR257tF2i4dqJdnZHwYxn2H4QeM9ADJ32s2kjohiZ5dnLzdRwAThR2Xt2u1fsVrBkee4GC",
  "key8": "43cXgLtr9yHrDbKPYfuaBP4JXwcvaHLZ94NEaqfCWEPL8kKJHVtrLUint3ZtdHAUnQuoRZLqFZ5AHaHjDKtVbS6m",
  "key9": "5oM2c7ppCvzsYMNqxL8vM5DmYWaANi36GMLUM86doekL4Nf1EtBt5PEonqohu13Fq69KtkqHZ9xuiRwQakJfdSxE",
  "key10": "rVPHVYM9rqSPHG5kcikYBS6Gi1NirsuHGoSdq8Hod6M3ppDLuqyEgpU6LZFXvLLivfscLycLV7cAfD2gjjKFN4Y",
  "key11": "4eU9nbBhdrzAqX8ihtruvUd6k9Qjf6Cy9C3Rhg4pE5ohxz9SkHhkz51hSh7vFdtbavSo4AUoutaoW4gmVzcVUAJk",
  "key12": "3qMJgCaXvRunywNeiQyZfsuWXV7rEvztaKAwt1K6uA33mGB1PYDBvgXiSVjLgAaEUMcKKsHHb8722QrCvbjj8xU",
  "key13": "CLVC1TzLj8Wxb2vGmmSDivpqQQJCETBN3rx3vgZ4feA58XtvySPdzcvpEApWxP6vzTiTyZNi3LncKQhPtEwDkv6",
  "key14": "5WYcojFmt3NhpUtRUjuTQ7UKKrx6cwaG7ahspX2tocLWDLVQYR4fhXYh3xbgiL3cgi3FW1ZPuidM8RsuAhrg1SCN",
  "key15": "rSMwKjCCK3KFgC8DtNHmatTs7NXNge3LGjXtrCjn4JasQUiZa2DDd68N4jxCzU88pMfk3srQtTcVUYnF46PkPAH",
  "key16": "qm3KWmV7Qb2v4NvrY3eQZhTJtA1T4vDU7hsLmQLGX7aCKmEudHqz1oNaaAUztzApEnabkbwyAu7tSgT1aRdwSsu",
  "key17": "4epHwu5tWLfUE6MmEzn45SogKVTLFxsmK8656TyFMocVpdhgjfdFdSRJeSTWkwdaXSvA8ou9LpbCBFKp986gwMqF",
  "key18": "SuL3WEPxR7BYBVWcpztXniz7BF6jE3JGDXZs7RXJC1GC3TvDoC6MCAEMWnv3Q3J782bZ7MaDEhQPkzSWSfcBjH3",
  "key19": "5ZDy338J2Bt58MNT5pJTzLzwiBf9DX6cpBKGvFssztbSFjYEo5Ku1ccWmUZ4CQ5FrDPcHdhqSahUXbnVAhRdkHZR",
  "key20": "Tdo2SfdDJLqmyZQdMM9VF1R1G4LAJLzFtFiAywkrag6mRwurnijej6zB5Xw3J8Xr8ND9JY9NDvsHVfMe3LMik4v",
  "key21": "3CxGbazjy6kmS8pFi59R1N9DE47VtuKBgTcXv6W5iWb13d5LLhFrR5oMSsmEtL8ZEorL2GkHH5524Ji8CZd1AQwT",
  "key22": "5EHx7pVZWCh7MVVt5rV2c4reTsXQpdLLupXGoE314zhAQum4nkKyf9yQjMnPzqPdh3JqkSh9Sn925nM1H5nnimtJ",
  "key23": "ctt6SRyJwsKbnqPPF4Cfhi6yQNWGTAt8otEaEaMbwXwH3iUfys7aGhozeQr6soWwY5nc3cHGMacZ4697UiDjy28",
  "key24": "21rG4KrcY9871kvPuhK3nv4zb6jNvnVKpkpK5gN2MvQwVy2Qjo6eKF4SqEk8P2ohu3wnS9ojgNZVy746PeRwBJcc",
  "key25": "2kHbZQNeZySZ7tk5E6SzFiY72HX3ipgDKysfrXgDcxkL6i6gSBmDLvAKxcQL2Mnnvj2MgCzxa6GZZvuF2G1KVPJ1",
  "key26": "kxgRMv9HihUN2mLcwLtUUGHvsLJCZ2Y8wvby6ek7aptt3a26PFL1t5iktAUxCmeZGu9AfK9awQKQCFqYxHu9W7h"
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
