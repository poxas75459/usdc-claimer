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
    "5SSbQFhAXAKu2RDYbnovK8B75TW3PwgMNyJouYEBdLqqL2aCCSjX2JwtHd49iTTNgZFfc3HidB4X7FWncqEaztst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uNcdEXcnXE89wxpMAMmJNu1EjPojkYuL1mhgzHbdeCFBrhPsUDpSFh7afDQBqk7fRtRTLrf6796aFnYVinKgCKJ",
  "key1": "UzrJtaBt6htqwdeWkWAn31DxXp8iVKpB2vZ9FTaGMt2nVPmkn1bgNJ7ezY9LUZDNdjFYubZZ8QbXy8MtAPF12EQ",
  "key2": "49JvyLWwBrGPeBSCS7juNgxrZobwxowBYBWrBQAy26DyKBWWX8Y5sY4AoZL8ZJUkrQwgi2FVwrBTqnS9UgwkEdiy",
  "key3": "59ifZHcM9FNXMicuWvaV3Yr4YbSjNjeM8DUcr4UiYeqXjWUQp1ynwN4vDfiAePBAMUaFZ1Utf3enh7C2u9gcMhFf",
  "key4": "2C35Y6qAoVYhJbiVx3aCKWJtPp8vfDowt1Rwo7Z5dDznY7Rk7qsD5EkKmXPLdFbyupCWrdpgLscmFCFAdxGM94VH",
  "key5": "2EX5iCHqebjh6xYASFTeff7FkR1ebNKNxS3DqqCYcULQSXa2T7hV8N3VQV36xSZd9iGYZPj7WACrPLHrurojTKhi",
  "key6": "36RF3qrDcqnRX98EFv8bvb3einWgPFPgeyLKiF3Xt1ryQf6XsitNBjrwYNdZSzHStafRS6r7GtUSSwhb4n8vJjzk",
  "key7": "5np5EfLohz9zCGievoq8iGi897bAk1H5p5nnxSiTa21P2ZxMF9Jf8My8s5bPpsBsGaXgbwDmcG4ZwXetFK1g7okp",
  "key8": "4hqQGMWwE2kFihaxtkXwpC5a2Sy3g4JC8v6Ac4M6bYJvGGYV3eAxyxeNanKsSNyTzD45mGt6sPGaLqhNxzei33fZ",
  "key9": "ZaBzuM6rwiZ6PQGjtM36hEGVMEHnWM9NYgA3RnkeVg3w8k8miLaZXes21VT2XxwJxkdBgt919vErt3JYEtoqv83",
  "key10": "3eqY8SghFskutGt1YFteXnzNKH1xgbX5TKNCqQrJkFZnft6QhMJdfqvaPySDGrmy2TE44Ca77quMGRrrXtybx2qT",
  "key11": "2iMEuckzjiFUDgMpyGzv47AdV68rANtaSg4dnMa7qXSEpJ9bYERCaQBh9pMkbcygqNz7bvtoHLtbPpSysrBXxVsX",
  "key12": "2ddt7cyBFee7qW2WFhmS81vJBY7g7ytxQXjtvQ2LkPRxrf5aoJXrt1eEbj2Qt9BPM96GjXRfS4DxcRh4SK6eJ76s",
  "key13": "5XvWSLLmdMnfyvTjdSnSZdqV2PSRHsLd5pxNQRFnJ1P2hP4PEwJ54LZHqsyoDrjM9DgdssQs26yYtdVsoXrhhP7j",
  "key14": "3WTPEAeKnaGtDnGraCHVqYDitrV1BCHaKXYEuqb4SQT9BJ5GoF5dXibGYL3VEeQU5i3wHrGpDuPM32Quoy9Y5Agz",
  "key15": "2ucJtVnDHxpUiFiyMiyhXy6v3mxQ7gdftS6RXgssx2VMXv9RPUjp4Nhax9uh1A4oTxv6QUGzaRq152ufTcv4mtJU",
  "key16": "wg1KrZ87bZG4wECvdY5urqAhR5SjsMdDWQb8vF51SywHUJXSu4EhyLDnoyVtuyjiqnvJMsk9QJVTiyzqdUdzqZD",
  "key17": "T7S85rW4jPvxB6ALbvofm2an9DnghFvu7QcvHxvoVEAENtvCveQEEkPPjRTArkBd2xSoQoxskHPiuxNipTm3G66",
  "key18": "U3sT9rcTjbkAjYspcbi1Eb5ALQ71EGn1ZXEZdwiT35dk2sLxCc1K5H4FZVfUjv5JGgUAscaJt3uLoEZgeXVHnRa",
  "key19": "64kp4sVYMChXbspxKUXVX3NoAYLrCB87RPVdmajEAqD6hcYt9CP43WFuSrfkQDvTmGrG3aQynQmjpWbsSoCRBtJ7",
  "key20": "3KNXgn6rT4Xgmh7fV7dJy87uemXtgPS92i6fkqBMWGMgArrcaWN4H6zw6fzsCiDVzgeVos5yPQdxVsNinMeHtJQ8",
  "key21": "3qisgmk9LCX6w2GsZU2q99fNMbFNzd24v5MMcmnVqstRj3xBm12em2RZHRj8KDmToEy8WyixvfJkZShTLJxFZ8NH",
  "key22": "4ro7JGxNXjj4YVto8SEmAx7o83xuEtLZfo52YQvxoxq3S2DJdtiuTDavQZoGcYjTBLtHizmJL6C9oSQGpu8RDsBF",
  "key23": "3yB9758sY2hya1XoVwHEbB3U6TeAXx1nuR2ojEJQp1ewjtQ7VQybTSxaXGo5SHXdps4pt7pNEyS4DpVEKZ9U5F38",
  "key24": "3J7nokQwaUhsQVHXpG8tiR8FHsp4AXR9RyWsCUFQ8Mm52RimrjMZphikmgDANv9EVgwd3QMz7EuKDhTUDGwjhb6C",
  "key25": "2cpgxFhgmjCNeFgJC8dgcK6Rs35bTtAuyWgWVYKPfnU8ZAJkdyiMYo1ybWPXrJ1CMFf4uZXQNW4RD24DZC7psi9m",
  "key26": "23Yaj4UCBjftDZQJhUK6s7DqWCcSJpR3GzaoRsQnT5eKNFJh2zSLrEawBAh7f1CGejuXGAtFiPL4RJ4tSJbSA3vd",
  "key27": "3z4qdGBPx4uXH4vnqkDnAnhQUKvUnPhomFQ3TSf5u5KtBSb1kzNKkJyweqRNQtxpcLsTqRKacCFqHPNKnnqNAajf",
  "key28": "93Azbuxuxr3cunJqiUZ6m1gN7fundJQKWWKfhHaNWTtTWuCrSiGBsW5DizwkyxRVJnxjti2SFmTWLYpG9XgFnjt",
  "key29": "5Bjiv9jvP9PgF5C4mZUwbqaeTEwsEmAG1rqrvaogWKULxufoGdxoae3E6LehniF5Gh3YZmoGaxAUexsZvnrUbGuc",
  "key30": "3NUvsNsn4TyswuLpyzf1CCpKh3Yrd4CTiqTnbrTL34w2ACj2oeLRCp9jgjcZga4utLr5t4ByUrLPUkAWvxbD5Y5a",
  "key31": "4Bckze6zKzWiSwYKDdWcC2eGiYoGWsXmnVbwK1P46gRuBRk18mi3SB22tdTRx5CE2JrSCJWKKTDt3E3v1RaZaAgP"
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
