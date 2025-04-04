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
    "qBEmS15Wq4TWD7RCzDWLF1UpUa9GQjGZkiGuV2FigttYouBDxSAyT2jX24iX1RZXGQCbBS114WsG9GPYUjQrnMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aqyapgkNfQgH7ZCaKwEikrQvX2AK962ekKW1vNcFpynitw4vPfgwqRvANRbZVpCrkTP7eDgyaPXaYgFSkYLDJby",
  "key1": "D7rew5S76EdaqeTnkgJ5wTsxYGm1ft8mPnz8H8Tg8yNnbHDj6AeGyeJYAHGtBW5My7iMMdaqtPnqGYTMaYQttBr",
  "key2": "4DfaspMe5BRfE56UKgEPspzY7xbsdf2J3oBkchdXCttENsSsAc5LnmSig5JbdyjsFa8NrMR24cqQamfhxXsBEVUX",
  "key3": "2yiUQNVjVCivF2DPzcy8hhACTivsPzmWnwpB8GiEScUBQYcVLRdEx5HfFmjnUGWhtppqj2JXHdF4ZyvDuPAuzi8Y",
  "key4": "25kt6WimkmkiYjAV1npogVH2BnXhRPEbnJiyJUyx1hRSYXnYiifizbZaNXQmQS2rY4KqGWNLrw4DHEtvT5vTWgjK",
  "key5": "3xVdDELYE5QHUEd17hoTpkCLbiTnwCiByivFRgeLtntBwZ8vL3Mqs62hzJhgU1AKvThbb1rZh4iR11ZyU48McTkU",
  "key6": "3N7bNYAxpELkgpAmFj4mUvbug7npeurd6HfaeDHZhvyxjHgmiMiUfcRQZGFrD9CrAmqdtWnRHtL2hS9CfEtJ9wx6",
  "key7": "3KMyqWLEebWwCqagkqhEnP6LdnwDVh8XpKTEcVaE4KZey6DR4Pp9Htgsg4ZsjUPZgmdpuusGaDGXwt7zgvLqsCXd",
  "key8": "4VtU8z3Em6nUKatHAzMASuykhWXYfbEyhVVbn7SLhdc49WUkqBMfazW5nHys9m5xz2aeaeiThAXAUtPe2Qg2zBne",
  "key9": "ati3VyK7ntZZDHD7Tx3THKHZ3zb6gB5VNtEMFXEfMRXnYpe37GeKvHBMqAVnsqApPJLCW862VdQ8pXwnkdwjdD8",
  "key10": "2BEa4qLToLmgjCxQ5dmHFDF5Jtg2UbBUXFxCqc1BXm5ZGmM4azqTempU7HabzeaD47JSTFn86dJkuTia79Daqhwy",
  "key11": "54dAB4RWb8RixWRHBDcUjZUjQXT384ckZjCK6799ceU2SCHpWFXGMUu3qk26PH1Y7vmHaa1HeykCjSEXBTehfTgr",
  "key12": "4h1J6MHdeq56VF1wkNZJo55tcXyaxUYt4myyRbCamCeSbCz3oKVMuGa6h7XQkwkBsiHudXij6XoSZLbBm2adQrUA",
  "key13": "g8wtJcKMMm47FCqba6n3KQhhuDSd8sQifpfQG7WtTSPPyqgyzRDBJYfdMHs7bNfG32pHNsrSBD8vcjWVNjPrFpZ",
  "key14": "3uRUfevk2GTBGqAukpFhV8K6myghCLLoaHGNuRUkzx19wSSEuxeWERvEoCs2jbCY7tJMjnoBjVcBasrLUaKGRf8i",
  "key15": "5fSznpjmdWnF2Tvy8Gyqe3Ub9X5T2VvQuXmqZCTRXw7znVHsHbFrsyjrd8FkyTrYG5aCyXvJEmH1Rk5ZCKhtWFfE",
  "key16": "FAy4kV5cvmCsNwNG4WVyNk2xY1GyyXWQKxeWLZdTGaaKpjpM1McG9s9ABU3zxFBuoP7aES5qwTH6ykP7qPLxryo",
  "key17": "2XJMhGpSgNAQX1Ma12BHvPaq9oKVjYjSRp2ogFRdyqtBNBGdHRDA2H2ERnjDmNiCuXoX4qp8k5SmscaYRxXfHur3",
  "key18": "4BhEL7j14tnn62wmboWDRrh3wRPY4EiNasthRF3JjhSi38ujbte4Wsy5gvVCXufuzw1bPgdfubimJE6SwJVfniHm",
  "key19": "5KPU7VboPKFMzPnnKicDCKHm6CW2XHTWqMiV9rwQPPGthvAnTsTUf3tjiFQdQMjVHSa4pruzWX98Bcd5pTG6nZiU",
  "key20": "5CnAPKrPrDH5G966ZnkyU5Cs7bLqnBMvLnyX9FFV6zjid7ieuDpo1vPgdWxy2iNEr5554BkkbBsatXbq1Bsj8i75",
  "key21": "5HjSTkcgWfSj1Tzxg1mMtgq4ad1TcJ5aVm2QpjuKVJSSwDk8W3MtnpepnQwknFQXuxNrQv82d1wtybxpppKysAdh",
  "key22": "4s1ursr7rS6vaimBuaxY7uvAEaECD9PmBcsiC225i75N69MQUc3X8qe2usFSziEvT85rmJN1Wg62YYNokM423ksN",
  "key23": "4bKhSyxFcBfdbxbmho7T8Anjk4odrZVSHS5hpDEtAas3yHLihb8P35cpACTWCS2mB4nGHkoGchBK7bS448FHZjHW",
  "key24": "3unRGoKnrNPpAmMRK9UURwsiibzEBLSAjD69gQEjfN1wq1iaT1CWFusaiGrSrPjj13AuCyA2K6rvvVns2sCmyHcr",
  "key25": "2QYP9iUbQY3qMwYwdCVnkvV4RLp6bens6CgTzoMdTnSAGyS6qTEH6Kpd4DYFxNYhmXhch5p3mPa4JPnwifTNoYvi",
  "key26": "5zND1QwQnkzZ3h2nhBLei3bP22Q4esn79AKJBW2RknRa8fxdqtFAdy2e7wNvkBe16u4d2jgHihSF6T8RtTfDCbC8",
  "key27": "4ZNqHX2jGueSx2MUsayeXGzACftLkvssHfSsCt47r2NoBv7T9Gc6ZiTEoRMTMh4kYou6AW24w47MziGsHztMtMbJ",
  "key28": "9fgu2uVuuSKAFFA3TGWK6jw68gUkuc9US3AvA2PFLJ57a9S6Lzf4d2oM9QbGbQB2D3jPUdjNLPPiwYYaWqv38LF"
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
