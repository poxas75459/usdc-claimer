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
    "4HqZ9emoJM4fn3U64NPKxGPCWrguBZaFokBwwpo2gz9Wi2uCDp5Nhf3NiY51LSYMMBVirTTxnhEN53EnDs1fNfNF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CRFEofvAkYa4dmmZtQtEPfqULX895z4xnbQRfV2R6KAmuQyAiE9dQExNEFzdAt9jsHYNxCi5TaPQogMRo4VVUFi",
  "key1": "4vKhKXkYt9nNiw2ocWNWXGBt5QaQk7KcgZxeZtWwRHPWATN1R7tT1gQgMzN55f88tMKvAwKwAEJTRETohtmcJaSH",
  "key2": "4kG9YKfuzRYH8dbhzQWcKw1ZqidpweyJJ9KJps21JaH63XTMLaCxzoJM7pGuwXEVMwFTyU94erUPJ4QrrjUZWsCp",
  "key3": "4fujDWT162JVoFQjpFEE2FUBGCmv5CFJAEty6ZtLk58hxNVH1m6fjLmMuxby4VdQZkLxQLBJdsTn7U3CyQuUnULs",
  "key4": "4kTtGiKaNReGX67roiPGQUeYP7KwMKhpNGxPuNQuxRr9b6SB39jJ8gKxV789xacJ54u7BnG3kvNxyPTy4CVGdYJC",
  "key5": "2VdmH4tKtTimDnArw1XVN2pKSmHhGbBs9PVLNtJNkdetEhh25MQBi5XAdqCN6JrtYJm5Q7rs3QLBponYotTL7x4p",
  "key6": "2gLAs5bLydbo92fHXbykXr3iRfFKPe7UZSQpiEHMqKvWxpMuraPPH5cq1tJSKhRvVw3EAqAPx6Wem9U5vSh9X4HT",
  "key7": "5c8DzBrL3f4oyDQ4t1h1rD72JgrT9NuQCw4htmkvQijGZfk897LgYAR9QawE1Ey9H2XmWZpvFcrsNySx1frcPG3m",
  "key8": "5oiaTyYti9MiYHccKrZ37Pux2pWvJDT5knqYwQZ6FWRduRRMTwR3d5Xk4TjDbgnBH3pauT7ZqbpK9PCsUSKhrjJV",
  "key9": "wBAXYZ1jdzSr6y4iC7QmNBZcRAMoSTvP6cgeiGCo3cgUPycBFantXbGjryJTXU5kiwEH4AKEYjVYUCFa19QHaTy",
  "key10": "4pYtn2CDptx62FVWS47sGdv3yFijVRem2d1yjgT9wwKcX2sF2qoWNyt4EFHVwU5694VN15Bpp7kQHLpYukD6uLAG",
  "key11": "65iT5EHyk7JMRc8Ek3QdUUAQAVKsiTSaRHamCkQfQEVDyTgJxUgUaUvkm2gNkXks8D1pK2dRfQeBVSjtvrbmTApP",
  "key12": "5vfzaeU4KK9kEv5sVZLpGvfLGVYPgNiNyQ2ZBpWJPAReFRpvsjmwZop7GSDMzVBaA1Y7ZdLtUDsB8EFRosZT2KR4",
  "key13": "3LSiukMoHdwhWBf3D1FjaM3sYw5WmeSRkE8aFowtt8PeGBrww8LyXC8XfJg8HsxS2ZXNxMYFyYnBRALG2vZTJSKn",
  "key14": "35c629ZRksN9EX9tNG3H7BBVKjeZftNfmdsUnzXo9jSjjfiYhZWGkULZcYjdNBayp6n1nqVUBLtfYr3fiVBJYSr5",
  "key15": "2NqyD8VVx11UgaxCmfKByijhGtKQxncNe1GGeiAtNCF8XGtyJ1qtiPmcSkG9FKcnBYSnDnSSnTGAqvRtrp7cbfUe",
  "key16": "5HodjgpXacFTqaUmzUWxdze8Swo3kKH4pByy1w69gTGxixyqGVevdNcvnBgXLyR26QivvPRqbZTi9smQTtkjuXWk",
  "key17": "5JJtQs9g2WMe5VuThMzxK1SShVDyBJjsFfT6jnv2m6infQMtiRbmCbWHuP4NjE1Peo4eNtqcuS3GNyXkXd5wzXJB",
  "key18": "4tx8fUktWbWd2ZtsHmYiQnaP59DjaGWxEkpMkMTVpfxjSUettEZWGzWfjpwj8UFEaojmNdzMJY9uwxkbebVDZ8Qb",
  "key19": "5mQSzVhNSzk8pscQjpSu6ZDgbFDLfpW3NkDJaZP33QScm6Tz97UY3Zf7SA5ysfp44QKAGFwui9kbZfXdPyCypuQC",
  "key20": "2scf974TrTLTza2iCnhyPns17YKmBnTNfNRdSoaFwVr2y8sQ3cAxo8S8BBsVreo9kHFyw2H2gJPy4UsA9GUMNgCJ",
  "key21": "383qjYrE1GFjfup88VhgRmog4gJUfF27Ajg1PwuXiqeKrsfXXVY5Vdrcj5G5WFLneA6hYhydav6JqyTrZg9cAX6C",
  "key22": "obGVV6F2jKZvDQjApP1VpoGRwDacrDgZyQ3hfWDpYgYBZuTGveqeC4VW1wJKw9WAjDXo2SvKTSVpeB5ick8Lqop",
  "key23": "N2kCAGvPBXCinxWpekN5aEKTkT2qcQCKMz4iqB2NqCkE1WsjzqWL3pHQmqcgamuEyQW9xJ2AHEi6ckMEwhUkTHT",
  "key24": "24rWXp3drQQr98CkUMb1PDAhCSeiXQjhYPKh2KJdbe4tUBScTk3R8d2nna1G2D991NwwctQXEycmDCyuXYQqrzfC",
  "key25": "2F5MNNBK4PrgvW1WLVTq9rwoF3rwAmca8YTScYx7vWA1c4TeUa1o9iqrDdNakaZbZjkYCGCBXEbjvk7UeuvZMKUg",
  "key26": "3h5usSQYrgXuYiy75ggK3ZVimLgV33uz4WYRaAUSEKoUJY9czU9zxFYTyKh8FhYPNfxSVhecwcA3WMUZ44QfWVSH",
  "key27": "5n7WDcoeEHVWfWeEk712XeU5DKGWpsrFYYsyA8uddAqULvfnEpyfKiGmNrDAqLpwr2UAYGXfR8fjujNm3oQhBvZ",
  "key28": "PmsWrbMPYfbGzVfDt2QEM1w2K97H1GeNSgc2JMiDDLzxZczWHJK9K9vW4Wt8tdvfgCoRUi9D3KPopSAnvXz6inP"
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
