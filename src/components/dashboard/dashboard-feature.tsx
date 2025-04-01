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
    "2zKTRA1pEXuvNQhG1D3rL4xYjYqwSEBFYVwnmnZk83UurUGKpHphFKtHREeSh4p8CFVcroQmFbVvuVEPvoLhvKck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GYi2uic4zRgwHfMe2MG9yrpi8VhFQsYsquBsFeKnYTuc4QfFYmaKLNcL8dFtAGQwwnZxDiAV2Wkxf4ozrD8zNQ2",
  "key1": "64qaJN2uQQcHRukhdsULY8cLZQm7Y5CnA3vCJeMJRs1wPWtdvuruQZkk9uszPanJ6NfLQchxydWgnhdydS7zvr87",
  "key2": "5DYG67Tj7mNgv1qPjCqRZpJGv7jB2ekYJxzHNqq54uDyXM8wnJqm7aDjZqongeAVXoJP3iUuVgv7YGVoHzxW3TFZ",
  "key3": "4oNd49JRr62H4wRADMoYncj1vtjorBV44nR6ogn1XPnBNVsVVjGUkL91sEnywZPBFmCCvt4gibakZhytpJLz4vDB",
  "key4": "6HMqPqLGkNuk8qB8mU84AuXTXdCniMkHaj8FLzirFdGfrnDZwNot6EHiPWr5vJE3w5jsfkQQiaCVdYfbSsX5a4b",
  "key5": "51yk25YwVzxCNC2KBjoPBsGDMughnKp297cvVvJ9GKehqzJdPWduuBcM6i3P6ZCUqtEmh6JdtibwLPBpUGRQfPPo",
  "key6": "3E67R7WKBvf1LKvQtB8z5Xn4Ku9xkKcnLUBw3jusUeeYKSLmoE6z8KrGKWu1ZPHWxZeSukAwe1Lkymc5b4iAr1VH",
  "key7": "29K66frcHhz3jrUa6P2B74jMH1FbXnCheica5aNcv9UEMXLRmDesTgaiTEG5w7714Vtmk9vyzr4pmkHTSeZzQFsG",
  "key8": "5Y8nHGptMPm2U9zPEE8i7pbWfg9u2eaFbMyndCY7BuyaZVLDFPf1zDy1QfXSbTVo77Kp3dtj6n9rZ6KWYaphusnH",
  "key9": "3eDF1XJ64ePByQsuDRVsDdP7wRUTaftKyekTQK6zPzB6dXvmLPMc1mmG29cBmWVYmFrHt23qqGUqgut2FVCbqVjc",
  "key10": "5raZzYVbDtf6JQdc1eQ6mvyjo5cuZi8fGBwJtEi2zjsX4QizAhChAKxtPaxn6ockGfJm9USHRXbHhPNQ6ZHjySv8",
  "key11": "4WQcxukiWxPmnewZK2o9K9yv7P2RrjXtJA1KVac6ZejsyvYRSjkkbKpctoSMgHF1ib2FTYzDY1fr8L8hF8qeu81X",
  "key12": "2JdJ3zwAqmPVWCpZ9FFWeJxnrbQZjcEPckcmZf8ubMZadyR9iS8oiSyPAVtA1P1uiSBNsG6g7YUnxqNebq3iRSJM",
  "key13": "2arN9ENsMKtFJ7VezdwXzdJHeMbNUJfJjXMYUqk1btLVtnE8SSKf9ooxL3oPZhJXBogUuTec4jPkwyHwokLgwQcH",
  "key14": "2sWsHDC2avNnk34GE28bzdAnM8uMa7TfwtoDmrQXbv8fsQ2Vr12qBsc7G4Mp6rJ4FSMHc965Z8eZ1ZeLFotDwAUj",
  "key15": "1AqFWsiFtHBDEFmy56Pd3CbjgvCW8kqRpPbRtJTFnDkJK6FCdinz99GRdqTiZ8k2g3HJz3zaRmSjkX5js15SHJJ",
  "key16": "uTLkrYbprbC5AJsbFpPxn8biTQnu5Rgr9Tpvdt6YU8GNb9moSC9Yd8fGapGn7hpsBN1z817BWMxCjSs3tUMU1Ej",
  "key17": "2PpUMxc85ZXkgxhUT3yTh8oBmJnkQNSNqz8Ub6viUUDw3bGNF77z81Gqd7RUvyupd2SAef3UquTFQmo5FduujqEK",
  "key18": "2ciDUfXpDGYQJUrMKn2VhUdDLxaFBZBJxFthhxRdMPiMtYjajiTCJyvrwNebKHZBr8TJxdgSXomh7kv8EnKG1iWT",
  "key19": "5iHUrM9grvk76TksyNjKEYjCwqqXwQeYGtPC19VpyevC3t8dDhBk1i11qdyPDSZoYSVHv2LDvB3mRT5HqBq4JHgZ",
  "key20": "3qJSaR2U1Uup48h1eQEctrPnrwbgVUH2m1h62oj9kjbtQCFAqidWQxDR8koaGM3bNai7YedM7HvcrqGB23aDzRk",
  "key21": "ysAJhBkzf4c4pn2mg92Aa7h8565LDAys9UBN9bDNeq4f57auAn1JuafwpQTvRQ6PDydSm76omSo3fd13LP8wz5b",
  "key22": "3gJxCnGGj1fN1jgMTwjQQGEi3VYSmpdAAYGUypWg65zzDBScGhXuYeSpRcPqXw2uQU3JSVRB1dtrXXkWUp1oyuJ7",
  "key23": "2otQMbUHfrZFA9EMiYjKPwMPkx6xhGLdrCW15c86e12dHYqeeRDWs1qMiJdGJbCvu37zGZE5vZp9gxyTBEC1YyMH",
  "key24": "2LRxGXAB943oN1PypMXJXcYK8jGrMx3YLRwWiPnQp14JvBz2A2VQHMTHHN22u3FLad8GqDjZSM4zQnLbHvY9ozbz",
  "key25": "2y1g3SQr8oN6AHq58sD2U6wovyeccbUcKM4nZUxcBj6birzMjoq2C1GBDX8WQLqGnjeEQ1okV3iqvXNVSMfU5LUo",
  "key26": "4KUivLB4kaYtguz15Apd83dr86opSRnUQ8dvaefPrXDJ6d3ni1CRGAWBH26XaUCmtYxgpKFW9hhrDT5FQzLcD6A4",
  "key27": "5ARDPh3DDoDc7i4MNQbctWtEVxrxmePTBxqEeLFWWqtcPTuEEQ6MJsRiXta4n86UGhaPHiL4GufkywgFeYYygnmW",
  "key28": "BCF1f5UbGLSMsN7FUw881iiNe4FT28ZnNQq39G2JXxsatmxANkJCaLq18jbUwCjS1LDrrdkgiudaGtwnuYe2rqL"
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
