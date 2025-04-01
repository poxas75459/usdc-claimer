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
    "4DKQaKvXCsDrna5WNL3SELhQFHNFBGSNst96eeGnczuLXdrx89dsZU6FZYfSqssKxTvMfn2UWfdApzUBK9U4qkqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtapqPgHXaanVpmxP3SXmpEw2dYCVGrxTXCgjpLvD1jcbZmxA3wPiAZY6MCx4XoYoFvg4eHiaLMJN6UxFtuPsKU",
  "key1": "fQ3CpitstVrgyt7t2sgNt8hbJfgDges7398Tk57Bw8eTxPUTVa5NkvCnerzJTcm4CdHaq8CDHJ3VrD8tY1j8sCe",
  "key2": "499964g78BgwsiCFWBZh1dQbh7aQTe31wxFN9FtqAVRFRpkiaGzhsiyz9To3i2UV4muYomQYEVmMyzEDhfDkYUqV",
  "key3": "3N4Mwuag8mLnFNJGSA1c6NhCJLaNkE4viQBh6cwPEX8dkydtNZCn1GQmD2UxMFr6AC2LUJoUBTFtobycgnuzhQeL",
  "key4": "2En5AhyhzCoQ3ugaeuZG7XmMRnM9rvUxEB5VD7MUZ3ocb5rNyeuAanknT5XCYUiQzBQKmgJMTUio7JR6B38MbVpm",
  "key5": "2qi34cPdmYE9gvEGNrzETeXUAMNTENo4N1erExCzWWkhC9P7qpSZdzYyPAGs1zes3C1rVcecQRZkEMn3e9JNdPtt",
  "key6": "2qik7RtjsmmLZMttHQMCwd3EzfcBecxHLbFSoFWMzzaLJg7bdPJAF8Qcmxp1TUW9R4LYEw9z1KnpVtaiMtwdijJk",
  "key7": "4gf9N1HajJwosnvpLsQkEfnT4ePNHE8zfAMVtJDKY2Ze9UqXtYWaEvJsGYb6HikbPnU38dVBLryfHh8wHYv8W2N7",
  "key8": "krvVSSDn9vm9FZCi1KpuD8ZJyhzpirnHhkvwsj8uwQashu4m9iW9w7ionEcsTeFo1G8N7cC3rZNDgcrwRnh3WmS",
  "key9": "3DXJC5R5MKqr8EmddGncX8VGSv6q1ydUZ5k5G3N3sthJw26AACF5HBLwM2Hp1duEAERUasSyHVQJ3AkxgRpjYLZv",
  "key10": "3H4ybY9mLvoWAZ1nsJyGoxiHaWRThesUnBZ1CzcaEevgN7KY7ib5ZwFtatzU2zomwAi8nF7nj7xj88E3b137jPYf",
  "key11": "8hzRnhTKL6Nst4C55sc2Ehxa5iaJZU82YsDot3uhXtrFCU999foRn2n3nRTSDyTWc3wfeG12Zf8M8Yd11BdJP8e",
  "key12": "EtV3XrvMG8qHMapryK7TqzbLDge8dEj7Xf6zB1zV9QQJii6zyKcUm3wibZU8VedJ1NcWna5MFtgneABX7RNBx6H",
  "key13": "2fLF6MLrR4GDeL4zc5sq9ALtizwEuCoct8jkK3aDLwuQPPN9kurfbSHLgU7RDzamzjQLKANVe5LoR1x4wJiHATaQ",
  "key14": "Adenuq3ep86zRujKuTJRXcwidNQdPfwxS7LMyJtaJRuFK5dy4kniJkNsjWTZ9n2wRwEVycrSdpVqwJCscj4WsaK",
  "key15": "36ojiGWuSjBZAB494QVgizuVwKakUxSQBJcVSnQ7zJowGmLubDKoQkEbGvkqx3JTSfQQNmdfjAhid4CgSMpTPEbX",
  "key16": "2Ue8YZcnTBKu2YcvFCoNTWfQRQcCAthobDcs98mfL392guda4qtJZGeH99zwbWACH6RwajavGjWpBP6GB9rMJGFf",
  "key17": "2t7bWUAft1ZNV3gdEmRQ3QLJDwJhNp67MhwrYtQkJnaFacqVE1hUfwGp5gyNTRV7oVGKuaaSazYvRkwiuhXLNVFg",
  "key18": "R7UXf9q3QHxfUmY65EUcjeU31ajjc2RxKhbJCj85CqMV4q4oEABLahcN64hb3BsMrqRVP8PJwN6Avrr3YbypnaJ",
  "key19": "5QnKm4KhdjqniYxP7pzSJXZmTZf7yojrviuNx33WLqP9A2NDkWVTJxGFnEpK2UPtuYa8PyJDrTFXEQX22fvctwS7",
  "key20": "3BCMLfgT9vHjAKRpcrS8s3hHkP8L6wfjfYLGMFUD4DtPXhDJ1knBhfaBgczjabqXvP5ugMDqiq9QUmnA9U4hKM1y",
  "key21": "P8ukMsh38FAS4ZHcGnL6wteUKxr9kxTD6kMHUucAMqzcsNGCCcuhjd5vrnYRjafwREapNxovACZ1icbP7mZNXSu",
  "key22": "4XwTjmJhuQuT6NUgrhh2GjZpcCsHvYhWdC6y87USpmcDmjLNy4uHU88TJEAYNH5cFwpUAyGCRTsVeg9sr7rhfWLH",
  "key23": "4uUk4ugjNCWPqfxni7tRjNP5tXJYjA4WapgLWXiwijE6gN7UMbFt7emYaegwTWG9CvSY4p2UZ14zvcxTEgMTASKJ",
  "key24": "2D9wa7sxaQwb3zaYtpV9X2dWe1Qszd4vCm9EmGj8u8Ury4sX3BsHqUhkRS8kTPWrtgF2euBcUNS6aAjmiVteGwbF"
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
