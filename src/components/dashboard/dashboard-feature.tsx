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
    "3Emg9uvTsbTQ8MZHrxybn53mPafKt2s2KRESB6qVZX2jVG94sfSR8LFvjuV7YWtBSn7Z81Btsnspsi7X6t7UTcgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hjWpMFTumzk4aaEwEjrUth327iKGP1xH6YBaSJMfQPqKYJR3qM8mnfCPmkSYp2BUACzt4Mp6BevPoPDUr58V2UW",
  "key1": "p49aDCbRSgxNKjQ6BJDLiQ99dFmf8VnduHk5v6XLSprjMbwpFGJcBwuNvTKn8TK2hkyXPVNXhtyx861HtYKPfdq",
  "key2": "2DzuWRr92ZxcX1eCEJzv1e8bW6iApwY3RM43U1ANdNdWUG9wWHFbJcuLv1vr72eRLMUfbxHBf8CAFhFAyKmLSrHj",
  "key3": "36dFygbyB6srFL2jGtw3ZSLnboWPe31wCesTU2VkifdN3ZYtR9wExHRQTt9NH3vdYkGUByMop6oVfKCVqbyozUNE",
  "key4": "53qcTRpVRQ5NhtnDRnDJJQmDEHEKhZ4Usp1x2AqPBYhGP7QiHBa2DV2ib26QR1mMe57U9RsPhDvusJFxCTxTrWLL",
  "key5": "5E2V6QwypHXL4DEnmJyiXwcJ1bzXpGexa1iJnkMuDXtQWjNJ6hptgA3SXTTpcCsJVMNepzUkzh17q8Ufm14kfiJp",
  "key6": "3hdSao6tnmfPPPuYkLzKQvonduZdKRCHmHHD8MiziHXTkAmSvdmEBnsgE9TSXcqNSmP76w8L7Atb28bDFhzBHwfr",
  "key7": "4cSTQUwUB7sR6WSgE1ZW3xHGetLW5KHzwwxJ3ftD8mzmm8uYs69Y9GyXHkoRvqeA2Jh8UFVrxWUM9EdSMRwpKTNK",
  "key8": "4bwxxnQ1RT8bjwhJhpvLumPhrQrKyv3J5ijrhnByq1C55o25RvWHqcXyQZjxstsdVytACr8azU2kmWPVEwNtgoEe",
  "key9": "4Qa9wsMFkereHkw9j32wVySKNcTBnpfXhmvjSt3hjw9nkdQgXt3nkyV79W2dBc4ztXCQdPuz68hgYn29EY1km25Q",
  "key10": "4d9ZsweyPuW14vFeEZGi5KYCHJPs7Qwa2jYSCUzmZibjrsCrskyvMeHaYQs8KC3v6v6oejgZbP782VFwHPmtDSEC",
  "key11": "24HZBJwKREuoBH1FtnnufEFeS9S7oB1Df91kigA6zs2rLp54XPhNVUyh5xwHXMPD1ak8XUQdsUXgxd5fp9vKvRhv",
  "key12": "27Agq9SkUQDtpMdcSAvMfpA6Q9KYva3xRUShKvgmoHTqj4LjdG33MdW68Sazt4J9UJvWLLnzAiiB7VhvMgsfdpkc",
  "key13": "FmpC53G8x24GE8zvQbPEE4sX97MHMTJaBa2byfqVTeRGKFvZGmhfZrhPbiC9mijoQ3LAnaTRqWdHN6cMLb31WKj",
  "key14": "4KKbNQ6LV7AzxrhLrLcn7PDcRWMKPZLS8ek2zACXLHoJ8kBysbpindDKJ9K71VG72ULtki4656P2f4t9P6nd3Frw",
  "key15": "Y5YBtr7NXYajUcwP5hmJdr8jszuvcf9vwNZzp64b6YAVPfGPRMEmmPAruQBXHc7PahvC3wXTAvkT7cYCs8vEtxw",
  "key16": "5HCGiEAZ5q74FJwtkSWE2hr6kLwiejJsSznpxnidVNHnLrapaksXXABEfBFXVtZpftU45P9Tq53vr5JeGQVaVZDV",
  "key17": "4v5nuLn7zLCGhBWnHrLChovPKpz2nbx79LwFySorWErDi73xjtMpoSd3FbyfhCZGh6hcTVNjLTitnp8gPvgSgURy",
  "key18": "139g3qrVgUKLLwiHSPK2HrknHFxFvkEwfAZch7rPUByztevPs5bcXZkwTGktvj9Dfcd6exEDTVwGB6VHhrbC4Hu",
  "key19": "3zM8CgVEoubhSGdWXSQY6XP3tV9qmo4XYMR8LAjyXTyPop96htGVfEtQRjZbhbPBqD1356X9Jq1LZsvQKi1DkZJ6",
  "key20": "2SiuvfycBQ1HS9s9BR8JAQpG3L148hmTrt7nahzV57w348CNXEaM5iyA7utZ8F1wqp3d7QY5HmosX6uLQcz1Moov",
  "key21": "49yDCP8rrzQz7nVCXusasyPmGEmQVqNQh3A29kzjGcfHk9owhD5HfYNfgi1MPBzUeb3pWw7mVera7qtG67ZC5WyF",
  "key22": "5JLfjoYZQtHy2hLtG6nMo17X1RrZ9iaKG1dL85rFRnUQo9vWB56ypR99mwNwUnARX7PkaFFFLey2b1DAz5hT55vx",
  "key23": "3NwGwqyGwuy4dLv8xJi6F5tqz41U8adW5JavBzZn4UPHEeBsdY7WYHMVWMRXdZSUFUZ17DVr9jVj2zKuqyVnvW4x",
  "key24": "2rB7g9TEuj8Dtr1aK6g6yeaXkuQFXKHkBA2YeWHawMB8o86tuuLTgmmudZeje29HaX65MJVxGSQWcobVDK5Xkic6",
  "key25": "4BKyrtTTJ27b8gUZMFLawXedbZrpQumYGNJ1jMXxnQTivBCFvmpKNzTZXhi95T1PNGbnnfCMNFZoDAYAHfZ2bMTT",
  "key26": "2P1mEtJ3btM7WyJZe357Ny4AuWi2s3dQ3aoT4NNhd343vKjKTFNykhftw4UZBtqCf4xPvViZt1wRrgfEG794jGtq",
  "key27": "6398WGanA5Uj9J9M5M8m5GMePvrv4j248T8Aod3BDLETYq6jNmf5ZNPoCwAHLFa51XD9BcTbCBgykDZoLkGL3suk"
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
