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
    "M5s8MARgzfaJ4MW12vePBrqXpA1cKrAoyxtJvH3KKuacreE1NjTdxcdkRaNVejaSMnHXwSwcAgLYAdtepoTu5mP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMAP4ss2nNShfH37MH4QVnRoqCsAS556PqqFiUUJUFg1qcTQsqxm6oq1go1bznwLKxkv2yRvM2cRHbmjdMiiqjD",
  "key1": "33ffAL26cTSA3vKXv7ywRAkhVBkLMkWbMmg4dFGpCBJHyo2HLzqQNK5b34Ldi5ArQqiXqNm5F9q4FHzSosXxvbAs",
  "key2": "3VNGWU7skTrkRbcXYsSrM5ErJwzEZrUmncck5akMiZZbvcTpwmGqTogihkVmLcNrPvFotaY8h7qSC2mC9aX9Y5ef",
  "key3": "dheQVzBh1Fx8nvF3r33FzcBfadkNZTYse3eft7GPcFbgC31hwGDoL85BwxG6swNm8u18vu9Tpmxnhrkr7Q4385h",
  "key4": "2CguUbk9L1WYa1mBMPj662wtVLgMhvhhkqhbrWpkWQHDgjsNp8FjRqTpUodQkCX3fjqHdyoQ7aAX1b2Q7Xm1YnU7",
  "key5": "2sUQ9guRdi4McYxffH4yBUq2mNa1mLpjUNo8X6WQQk4Yqjro2Z1CSxTTtPtbjD7YV9MtujLoCWgknJFT5nCwtHAk",
  "key6": "3C7Sa6SGp5cE4GHPxW9dYp6YHmHSksC4hcaFf7i16f7BUjBT9uuf6kzmpoy5Akxm8pUxmobzvfMwbFxSspCiF3Nc",
  "key7": "5bxGHGE7eAa7vCoHURxwqFjcz6PH3mkde46M5CsfpcrhTMuNAT4FkPkDGSNuxYW63i7LtzSjwMttCTNgWPqqWSwJ",
  "key8": "2tVdSAq9NqVfzMvg8AVxYST1kcrB2JibwWy3otE83M37KPjhqDVPnUzGJCYQBkHn626D31CHX4Vx8MdWWLvLh1rF",
  "key9": "4zxA18K22ZH8P5Mv3t31YFxiyTufwhKCoyzpE8v4qpqZJk17LeiriKiYdMciqCRpvt39jmZqDHKX3UnTqoAoxC6Z",
  "key10": "5Wrx3zLWumpK3SLVAGEBPfmap4ETLiVcKeu1PVgsRszkzHqhL1ikgeCPQ8u7S4XL6R8SPsKduepV3PKokvACkzse",
  "key11": "QGBkAjGiGkLmB98MBFunPvc7pKtdkez5e9RUGDk5ap9iHuiQ6koCnJeiwA2pXZ77d3o5eXng5hCYuhkTbPmNAqN",
  "key12": "2iY6E73BWucnfTBtxCVYP2YuuciYw3utuGiAsPYnNDJXEiS9Jywzo9ZYSqNb78mTBwRDTKkg7gLE2GGcpDpP9gAX",
  "key13": "579vF7S46E13j8g7Ga6nhNFGWezS8vJSa58a4kaDXHb4DCkAXjYaseBtAVzAkErJSE8MMBWbgncDCfKVHUe7GBZw",
  "key14": "4vyJxkKjkjeXfR64WFNzEgWhMhVhEErrbYopmGLG6jo9ku75S1FsYYkj5ULdjEtK9Pk5YXVKNP5wbq4i2Fpja4as",
  "key15": "2vFgG8oRFuT7cD4ezBLZz56tNjDj6ZwkhnVAVXZxV4TfeFVE8wdh7LqnnwXChw6qqWhWPBEKy5ajaYniqzHERP7z",
  "key16": "gf2heq2dN1QEP5JzB6CrzFEFqEyyu2PALdGRE9B7ofthEkhrno8tCiQhZA3Jcphp2x4RBe8TMpLToCoMJLB2tLk",
  "key17": "4G3cnxxKGwyPX9iePjibpiSLV85AxBKasim1HW4k4pJjCYmyaFy9hb97h2hfqjUp7hkZBDvrDuQV7UZ42gQ7PMzb",
  "key18": "22mr6k61tinj72KzojqRv1Wj9hyD7hLvzopniJFb1vyffNYmCuSCwvcdeQ76ozDKzEW2LFys5C1BNmmq2EG9GJMf",
  "key19": "bS7eftiZT8wv4pwTJwNiSb8aVSHmPV8Qk61MgqjGiTQEPVUmzetRb6y2aybuUastFxtjm2qYWy77okSWgr5vxEh",
  "key20": "uXXoWD3L9CWPR42T9T29823dFg11Sp2ebCkBu61iqYVE1FazYFH6LPYA2HccfdKQwCYem2paC7vV1BfXVjsg89w",
  "key21": "58MfiTu6scvhGsaNy81EdRsC8zv2ahEJmm1weDxSrV9DPtmaofa9GoxQoDmhnQV484uRtV3TsXU1gatnLSuMMSqZ",
  "key22": "3iMuPuEub8QNFufkk33gcSi8UQaxvDEFxhDc4C68Pi2xHWKYBqoaVJEr4rEnQhSpRQr89hJWthLqgf956Lrpsox7",
  "key23": "4ZfEhnqVwa1pWrr1TzxuVAVbY7z1c9XNiAjwnzK3xEwqQisc9NzoxXEfALbXvRokMfsUw7HeVUkHmdUMUdZCG6dM",
  "key24": "26Pd2WrEX158yK8xCshj1ohFAuzirccFrdupw1JwSm2uBGT3v4VociGbvoxeaFUcCptkGP6pVuVK7z1sS5SVE1eB",
  "key25": "5C6UobuyfvKXzMnZeRMKqJH8hYL93NWqhe1hMCrA8W8xXMn5NAiW6eJYGRyTs7rJgTkBd5xbsrwzqzAoEJ2vjQgT",
  "key26": "UWFxTAcuQmRaXBUqnkWJyXEZCMceVy96TaimQETpDC7MW58p2xRehTkoym2Y2kwdVQ8oM5KtFAiFZztdoskjdPn",
  "key27": "2TsubfWVG3ENbSmhg2TJcXpZ4SeUdgJH3qejoWSyCFLovLczykfc7d4CAfQrB4wnqHggVDpwe6BAiTFsPek4uc4n",
  "key28": "2HUUfMJe13ecuRYed9WPMswUQQvBSH9RYNxeXz1SaKiqK8MmHXKhVRDepHpdiWUuZzqkff6zTFfgmSsJp756MHT1",
  "key29": "TtwHGGhoAjrBM9hX8gXtCz8RpPZuLJrnVQo2fwshddZXM3nsmJcVQoXkkZACwZr6bwZtpP6sa6LLCnQxVusDKBA",
  "key30": "AoHVfGSvGa4USuBZgyPoENDvux1ztEn7ADybLyteHaEtVBhDxHUNT9SQj1VRqv9QVj88gHmaC38HuvVpe1PD58T",
  "key31": "3Brv4r7RZpNgiq58ZZmwBRVVFZVJtMWaSYnyYpvEBRkqxceiwHhZ2wPHM7wgGqjvrHtMHDKiqC83oabhM4MB9MZW",
  "key32": "6RQVbSCEC7T1PwA9zPFAkpAEi7D3wHoZxNJZyvJuHLL8Y4R6yGgEa4rumxjxneDD6bmJHuska9hXYCdqGuXKUdH",
  "key33": "NgbU3hWiXrcGYJzFgF5wkqcwFJiT7vNq93xTyw6ZvYx5dPizfPq6UmjVXXMDryhPtKTzzrRek6CHzCHKAA4TvEH",
  "key34": "2pYS8mGi6FhGceZKrAhyQgJFj8gRhEseggMpcZqh8QAZU8vd987hhRVjSWkw7vcxVXczemXwRnCijWSGUbbko8gL"
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
