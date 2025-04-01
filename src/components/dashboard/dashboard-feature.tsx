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
    "4SfiZCcDpPbfrdgYEud282ichK4ujaaEqw1Uru3eLGJbAg8U9H77BG7HHkq4vJNMRfHyFWZ3PZqQVEzFyDj8p8yF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B5XTr3sbtzbBZqnwxVrSRGGckMZUCEzkPZNG7u2cMU8FZFXG9jdCqE4JqaGxRwnF4jsUpSoJ6D5uM6BxoA2uoj6",
  "key1": "6hEFcHDsAV6hGrV7pt54HUSBqiAjHtShJDbB5fJnu933dopAz1TMKe3dD9QWjbKhUiVDwC4sdk2X7AhNvPNLyUL",
  "key2": "q3nJGhNSnt9tZ4KJndh1AxQaW7Zt9i681Kei9k3muD4GZeQVsfboKoJt7PuzFbtqvb5E4TLeXpUHpV2cSwArCN4",
  "key3": "5sbDBQKfezKxUhDbYn6XbT2mroxMQMtMUrxwDtvj5v6KTYnR9g1oZHq5zq6S4bMXyKQGxwBiiqrehwVPuQPbP5eD",
  "key4": "dEzWpTJNFTbfC3b67GaQjXGnQXw65C358aNv1GhQSdFmzVWBa7zS21FDbf9PpGVf3NuBVVeHYfmLQmu7MTkmkDp",
  "key5": "3fmCmRA8ZvFHu479RuhAqGAaeb1BAKh8uwoe5uVgV67BkwKk7gotZRTGVaYzsCZ63U3eD43NP6fLnNng59mpemYv",
  "key6": "2WxeKt2quchBBZb8aDfM3jmw7bb6s3VPp1JrHRp1BhCFQXyrgTcqtiBW8MjkbABkex6XdUks4Pqtd54EhSYznFTW",
  "key7": "4nYac5th4eWzhSKNMr9iY1WqJWoSEEV5gsnuHv4p1Z9xpdWWeJivwtbJeUYcpVmFAfztHapAH7QZVbyDZqq9zgfA",
  "key8": "3t2WNyciKs6Tc2oHTbxsqs4T7Z8kysSS69iHMYXuHBkUDX1MFKuoTDdpHTnZPn5McerGw8Lhduos4uZyLiuNVRJr",
  "key9": "5766oXSzRr18xBCeV7dYkAxgN65s9LqJEVF4ZibpZaMKUSEK14Zcvj5fS7LyNU2bDu2Em8pwBQUxqfwVJaJRPCNV",
  "key10": "3rS33qFHh6v3rA1guRNJ1Z7aYnxFQk1wbAhyTFx5FP9tT114TqNKtmeaCAtwYHmGoBLfrJJAEyaw4Y23XXwYqai6",
  "key11": "2nXkpPnqWQpGkbuhuRaaCiqgYUWrqd2MwwRmmNNvsDS9vJ4GpVS9Hgdok7fBv2QokbjWXbZB2Vcnox8fXeGzvm7v",
  "key12": "56kyJJithuu1QMPrAefGPaF5JgnWvX2w84fpxecuFAGvLYtrEhfe5tWtZqJzdy3Fbmjfs2Am68eEphRBGHFiQQT1",
  "key13": "3skMuyuS7bRhj3R5dSdFar6an7Yi95AUjyGcm4YEFKDcu7MJBCv6ukwFgh1LjqCj1ojQdSnSGWj2REoe7UUBXbB8",
  "key14": "2mEzwUcaMS8RX1pnMbRXe1QRh6Y6LG8RoW1LuuqrUTWoMaC2nVLpskoUU8Zwb6sVhNsEWWxc6HMzHy2pDpCtZ2kj",
  "key15": "4N757jEvJqjkiVVMiwEMV4APRYBAXNtqc4UhF88s7DuaV6s1tNwC5gyg39V6vWsVBcqmmtzenNZRksyTVscxeCjd",
  "key16": "2WFu4mtU4XacVRnmp9jFZG4YMdVVLtrXNW3znR7xXCn8HG7231WoqGJKUVg72feNZ7Fjqcuahybvg2KzrwEQziST",
  "key17": "4cuThxwdtV9ebCi4kj72raQB3L36odU3hgsF9fwFbSCx3X95ypyQENMMSH45nF9RqujANUeSNNhaeUDkWxqZeWRD",
  "key18": "9mmgnpeXW2BLHeKunQ7hfQ21ZX5HV2HV8S8HfVp5KzPtzx87G6MoPxmRS7xZk5WWhH3Q7cXXb2E4eSxmuKVJeEX",
  "key19": "6qm1q6deWzEDdKdha85XUcbro3E2sXmaA6Dx9nz5uCChAxyQv46jfb3sw2pfW3ygdkLn2g2kRmC6KhUv5aSZXYZ",
  "key20": "2f9b3xaKUUJy488zSBPVkSvMKmzHHGtF5PWHGEBAAKRp6W9mcH7azUNNFBzAxsmuxj31oog8Uq92z9A2VejHsKkd",
  "key21": "2SToXXjwmk8LnZpoEPB79X8JULTR7ShMMPJtkeRApaorbUXYsV9zi9gRgBFSvkBww24mXBLbpFoJVkFtoq1usDyq",
  "key22": "6ordR9VjqWWJzpmbQBADrnPne2LFT8RtrsbkY9DTtXz2niREJDYzWTZXaehu33ujHXywmb8wZALt8VDHLqZvRcv",
  "key23": "5nowpDvGj3aJ9ft5rZi75rVeBS8g1F2QYfaFZEpfmeCJ6mAuWcRCBsU4SJuHtwRhjkoZPvX7HizgNradStSWHk3D",
  "key24": "635xpZsHQfP6RGKg4rvsSeMiDKX97ReyZAVkjR57t4FkFTxKuVMLPDM3EM459frousJucGGfxbArMga9WrT1D8yC",
  "key25": "4nRUYXBtnqEniZCb9VoBJEHJqfywf8vcyTStWDTEceDCncjQx4ESuC5pqyGrt9RdUKEPfC51ehD9zWaXuU87Dtne",
  "key26": "3LiFiUCDkof77v5Jsn8vCQV5jwgXMZZ2oMJmoB6LQHxRVCAc68DobPEpvKutqo1qKnGUndDNosujGKGYMFuMm4Zt",
  "key27": "4XyFMK6aZbpE5jTfc5e8cAFo7tWBybSHektfLPjCqVpNPM3WzGUvvW6bbHAFTcCebhQ78wcTaQCB71UbfnAdmE1g",
  "key28": "4WVJwfLxb5Ut7yQqj6PgSdf8hnkrydhvZNPXpPQJJ8WvJqvdhTCEoesWK9CoqYgG48KFd6NfZ473sLDKRp4QLcog",
  "key29": "5aQyXG9kRCPfSb8BPVGvZ3y9GbQjY3byhyZUuFAHVeDBMDE86g2wGDGXmYM53KkEskqBmtjt2pntrRLa39AVPhK",
  "key30": "V8XnsmNSpNqD6BZ9TfGp8Wano4qqK2KwAyk933WN44yChBP5GjRxG3woRANRNrgLhZjfnqraQzQQ5rNQJ7H1Jd6",
  "key31": "39E7aVbxhxgihRGGJ4xWjCSo8ueCYVR7EMn7GgCS1wGiiRwTTyRdQReRCJFMH4zLzbfKgRECX2hUqDGT52ZutgE5",
  "key32": "5bDfJtH3a44wDnpfmx5USnWD4mJeLC9JLFRDzKfn7sah2HXQwrpa7yKMMhtNU4556EVWpVZJiDuMXyZWVH8GxcPe"
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
