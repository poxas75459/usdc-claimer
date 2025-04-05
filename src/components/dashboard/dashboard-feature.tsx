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
    "ZfQdMT5521WS3N5fFdjdDG1bhdpf2uhncmJ6GkEfqy5jZ9EvG4JC2cLGhGcYuNY1QTMsSpYWGWbjR2yH7saLEEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dPuZApQbrf8Bek3EXdWdbr2DESgsgv1rYwvTZ7AktK5XzBgfFuLBoLZ966H11NaraTq6uaTdScRX5FNANv9tDzQ",
  "key1": "48cYgYBtmMCWMXSNyWwZSRrhSbZxUMnm8usmUYYvycc4g15NMnp3xCcf8ck7Lsf4pxnyM45AKPNbzerYfi8mZtpF",
  "key2": "4ssjAc8R1zrsh7PeaaX4HxXzhgfBDmnQDtvMX8tR6563H4vUujx8pyV6GHKfyyPRz4eb1xx9cS5UEgncsVnyaHKq",
  "key3": "3dDD5vyTdCxD22tYkWtTvPDvDBrEaTjxVTgqCJdcSh3Lx83xJGJ63NUxwxeJnHSGwHd1oNeRain5GzTuMS68t8pf",
  "key4": "2feQZzErL6sAjcMcLaJqu6BamQECPGJuk7prSrWz5Gsh94ZnfSsxTgpHfzcWiudrbE438sWeESRMv44KzYS7fGfz",
  "key5": "5NHEXgBXp6qZW2iCwbnXs7hZrLAWkL2y9xhgWcBUENbHjD7HvzrxZwBHXvLiqtNqCzjXoZN5TNq6yc7FqSFSrwyL",
  "key6": "3reRVdymfLPq4ATUbTwDFDLQmTh8ha63b5MKYNFcdHoY5sCSS8STmZDZPtVwQJkrFDoD8BmVN1Qi4UJK1SgErLgy",
  "key7": "V4gKJcbSfQXVKWryaTTdTfpbo1vrEvKWhqUKShBh993pa6q4fyE57118QBJ6ar41KVA1eQ2USNjJttBPLEmwRiW",
  "key8": "5tBN2Pc5G1PWccRAYsHQF6G6sSdC4UfzZBksmQBW8ihwj3U4yC5GYikDjnZBieAjD93KjcE6EQVkBhiephXm6G14",
  "key9": "61ZgTAewpcXNHC3GJAwspeGDUnf6HwXoYR1L1PwcfNjureeR7dcfvznf7QMmm5wAZXsJhZnwG8EKY9nZaDrcHmEg",
  "key10": "brV5oAuNwJj3R94Dn5wwEr7E6PoxaCzsy8w15Jwag6ysyUEkVqiWXyo6BoNDWD5FCTbfeQ2kiV7S6jx4M6d3aNW",
  "key11": "4ie7qrkGUZvSy4B3Mqs1rM4PVxniTnPas9o3KyRazobe5iVZUZJiLEWsPpSqPkrEip6DvArfY3tb3pNRNcC5CPdm",
  "key12": "4eC7YJGDP91VkiRPwQ1fXGM2z1gUcMGU6BXQv4QavPxATX6utn7eN3JETrpJkTNtpzzvD1X1AYG7Yd4hdL4N22P9",
  "key13": "SnX9xaoyprRQXPEGTWmt7FRHeGkL1nC5HWgAVtb2dM75tSzvrzNt5uV7T3Vjsip62HvZQd9m8ne3bwxqg8ArMpX",
  "key14": "4FcVFvknfRVaFsvVSsB3ntCqFD7exahEDNNtJbjzdX8Ls3ishZzFbGJFkAUCMdEuqCwEwXMbMBqKxCKSfvjoiUdi",
  "key15": "3FBbHsC2xjMirLduJP8TWd9BuaAbcxWKziyoBVAKX3RuuQbqVYbm3wX6zvP5vqxfotbb8WQESH1nmQNvk9453gnc",
  "key16": "5Cawj66dEPh5nJBXbW3hi9KuzRCw7feTUz9y31rg4pa5pGLx1Ri5WJaJamKJXJ4WQzqm3rUaBWrH9tAQHttdDHGe",
  "key17": "5jWXLZVAS5FFin4jVJTn6q9L5vT5HLmoAd36Bz5q9tGCJ5RYQuzvt681HEEDePY7xqLVQGtXetj5vRh1pSx1Ui3m",
  "key18": "3aB1i1htU6ymfu81PzD6frRF9GgWM5ZZCSHo9gpYdnQKS9De5KvAcXebXxoMAQQPtGsbpTKX3R79DXj8q2ferepL",
  "key19": "4aWgaEuf7d4aBSwtECoVxFMBkPrBc91UCZeSxeoAsi5FsbLGnwksViLPZvQxmGYoU62bpH9LfMeb33TGU22CipCK",
  "key20": "4JHLRFrYE16Q16SVJAGYvXXenVpjrhfDfN3vRXsnXoeZbVZsMHvuiqECYVz7KkqQLFujxQQpABNx8dMcLaVpG8Jf",
  "key21": "5SuMaCMrjkKhiQNGHeAAjZrmU6fAaLmXbk9Un2ifEX1YQ6VZeRPCWJNCGpaJ5UyTcZUF8aEicacWbpKveNrtnYoQ",
  "key22": "4ojN97YwRnpQg1S4gXRnDh9KwTesEUKvRJhUVThr6FhDcidVVbuxoQ9kmvpxeEDs7xFa1wLkcQWozkE23L4c7jWT",
  "key23": "34JmGbPHBu7QaxvwTNYUn6XwirVFNfkNecyN6xf6nge7HgAaXUqLLXrmCHbAK85eSgrwR9WZpZXGZ1TWTpAaehCK",
  "key24": "4hhHuLv2HW4TTN3tTS1RCfwQ9UiU4sh8wPU4YErQW7wTLsKsPMpytCNZ3vHDrP7Be235PQ61u5SBnK963zjsbMfs",
  "key25": "FqZR5HDL2Mzd9W2huYJb9rodyJ7LNm9L3uydh1Z9g5kTgcck2i5zKtDYkwHwKsA7zPFjF9bed2Fsz4c2p7drSpY",
  "key26": "4H5D1EWzDf2xi3AgHTaVDSG6fQNnmQFRiiF41tt4T8skDmdMG8CK68pHR1WV8QDgeXPSXFiCQsUMNJVgchV2DRB4",
  "key27": "2qicL46TDDuxRPyUgpgYv6zgMZE1C79mb2woqxEk3ZrbYnDt1eRaEK1hyrGmZJjttqUffsjw2DjBPLanpjpTT2FS",
  "key28": "4sXGMGvaxf8WMPsg94BYxcr8hxUoyhbuqkj85oD6bm37ffcArNwar6vypRVQ7if7mbB8LVGSEEhVrZhVZWMx3xXB",
  "key29": "2VCLYaW3sPgDgUEvG1AV2mJeGDKfGtM6CtwaA691TaZoRjBmFfWgfsYvHcGR5gBbpgYYSCxdPgGvLVAenYuzVCNU",
  "key30": "is3ie86fmxTrgPhWTRksdpd9rrkx44Bam1aUAgV5cKvZoxBxRfMVGLMfPxL9aKh6Ci21VVpASajFciEY2xsEqEP",
  "key31": "51q5Yzt7ECDAnMHcZxxWzi1REdEhx6nbN28SvtGTpvjXs3iaEBPe8rQrDa8rZGtRmMuBoJCeKoDvc149NDPhY4gZ",
  "key32": "wGjLn1YSzpznwBjpMthsmxEFnBRASQ9Qkq5BHub1NsgqtZPGSfTeeh2ag7YCPovafxEx3BRNPLaUGxmeGQ1WwCq",
  "key33": "2RE4rs1Kog1uNtnnfCRv1rg2uw99HvJ6vrmJaKL4KTQTvgfCsjsA9sz4L1KLqP2eELEriyPRxbM9FfEZeMrfRAFL",
  "key34": "LpJtDEP9aK2cjPBpJsK941avAgTQCai9kzZGRf4k1HTG8V4gb6WU9ehnYPTxG3iDrL95Dt5nEr878Bu1EGcoSDt",
  "key35": "qUqc1xbYfCzmR6kGaYMbsN5Wp9eyZVjRgTqosgP4Knu2HSRP7WRoHuyty8foHaTUkic8ibMs4T9p7EzvsPcEKj7",
  "key36": "57ZASZyxoanTx35PCrJJaJ387L6ezPVMPVdNZiGGSRaFvmHexYHEjQvmmZEn9NyqQw5Sh523YLwukvCHCZ4zFBHJ",
  "key37": "5AdBJkG9RvvJnHFYhkXTWn3nKJgh728C7cVJ8vjhbw86riiSzFdRtG717tN2A5m53dnDaQk1RkrvKHgopoen9ouq",
  "key38": "2RfM8veMMJF53zf5SM6o3d6j9D8exsyquB7MhbRQpN3RA3vY6Wj6Qk8hQwjggtTNapXeYa7jtYAPLnzbPMUbH5RH",
  "key39": "666EyMKiZvigmeX15gKQK8M5vuqvr48Yyt5YPi1Zqbj2tPw7A2LKQwUdyquoAqTRr7W5NFbDfPyx3Hp3Fxk5Qnz8",
  "key40": "A48DwS7bCFfyFQzhwXgZXqHCuhN7vcMvtYiQXMe4pGRoAhULFZi6NriFFmDydoKpGUTru6iSfDuYNVHMBk28RGb",
  "key41": "2So7jUihWGNsHwE8M6yfxS4wfUoJkMrBAQTu26BT99KSaJxwKrncy2CQX6M7KEwsM7oP27Mr6nrPrraNLu8iSt5U",
  "key42": "3rmJTzWFEvuifAWd5xNz2nNcrC1GW1YmMG6n5xHTy6uyVcb2eXZzoQi6tPc4ZLLFduKbqJYJEqfgEyBQy6KZbgR8",
  "key43": "65FMHdTdKrh6ap3wDAmPwwWf56A1WDNj1dxF5cyvsA3EmezsPjoFgTiuPjyL1fpt3X8N65mBzE9Ei7jcFsfywNQA",
  "key44": "4XhUusQef6RXH5zqaXnobUYnZM1v5o79F2KTnMy4YRYzmFjkFYAy3BAimrqv846mGuncq9VP8LMTT2LeVMu4V3Ri",
  "key45": "5pGxo8jVXN9nQJTcAuKvT5wcraQqGfSvtAxzFgYYZEwJio8QCpBrg6nzanRE3gVGZgc3qxiWMLEiQNzVXhVGw3ZX",
  "key46": "4zBTFSNWkbuyYmtxmtiZFHSabLgATh477N5ezumyH7V3kVseVoJTtEUFAFmUrhDR5ZCJKKAFirasXTN99soqtrqo",
  "key47": "3gDVWcTunn5P1dfetW312ArQW1CHmJi8BctSKdhKByEChtAks5uQJMpQott92G4sue6SC9RRja5ocecMechfHU5B"
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
