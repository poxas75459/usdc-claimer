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
    "EBwENhR2veg78buxP8Ar37TLWjHEy7QtTjJ9SN5h2iVBosaMty4D5TpXwxpv57MtYRnFZ8aBibZHYwDq3a1Ns76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KnjDaKKMKSRgurGP9Yoek6GEW3xFeFmb6HA3C8RAEW75QwsApzoUuTA16MDa3oKUsGHnJtTovB3sUgHVxuJfoWA",
  "key1": "2W74tiistjtJxiYJgs2fr6iTCXui9wmW9EZAWgYNsPoUffm1TT3tdUTR6XLaNzaCQXzAVvrZ3w6WTDjMs1aeroMc",
  "key2": "2oJWH7bFgbcax3rPPxNb8FNUyW1oxWjFRygjLuiQG38vQ2LYyNB3SqeKDomAumsL8nLiN2jhNASXa7mSmEMDbJK",
  "key3": "5CeujLRoiT1jNtant6ETeNzUi23e9JT7izJWhvFCDcsz5EAzokMg6LG2kEXWNs47vyryC1LxTf6xjZnYnKpKXMuh",
  "key4": "4GRvTHuAM1fx1dMvRwAW1KtxiAJU3vY995LmRFE8Wwt4VK9J1zCd4fAswVTbvU98Phg6LxA5qxjodjLBbzexiFPY",
  "key5": "54NdofYpwYy6upuqoeCP3u9Fkcwi1zo7FDAgAwQs4C2cxjTdJiwZzjZhPLCk2nGiEhcQ4QyvQ4ak6ab7dsehVHS5",
  "key6": "64TQJgZhyMLYG4vbfRBuTKw4DstkTLJmqp3Y6DDxqG9T6TTHc5j26GUfziMBGmPkrzwL9eNxKhJePeZfnvaymPF",
  "key7": "3mXz3ufyix6JqpYpEvYx8FdYbSri4sN5XHKJhkJaKM2ShfP3B9hwiiAVrydwGeBoFZPehtqqf7j9hMqqFkJGCdCB",
  "key8": "25gPdD9xBVYbCEeNBgijsSwfYdRar28eLggivaHco673FFFmcZDRrzigGJcLm7TePZYRaHUng6qBkoEMziCjdsTe",
  "key9": "2c4jHJgTS3AtHnjMDhWTLaFgZ8kSwtL7mLyZyPDTY13vM5gezpHpmhi55Aq5Pt1WdGzbXJ7btR5VMHcEdQEebkg1",
  "key10": "4mrGDLcNVb2ghBt7JR1ipakUWmsfeHEi87Ze5ht4UGcioEJduprGZp1BLk1rG4MiEJu8cBYwmMv5aZpdwBDaTZCW",
  "key11": "2p2eo2fxnmLs9bEPA5AKWPiDJUkpjJNGv8QhejFn9Yyi1CMoRCPj36VW7rHQ4PqQsX96spXp46RWEgEdwJPiyK6s",
  "key12": "TBrMbxDDC4T9au7LLAE5F6en9MZf59oygWAtsujstQA4dMCdrnym7n6kauqSPXvc628pYvMm3JLKMGKD7earD86",
  "key13": "3fCq8yLmProWWcEbKXa13BAUrv5KDR8JgcvTUecwR3o7jsa1udeYDCxo821CegVKhjo1znmDntz6zkT2d8sYXpES",
  "key14": "24C9Tyi5LxWZzzsTauYa4XnVy2WUwXTaYZMMandPbCAzqhJsLXUwBtz93fkEicJZc1u3bZQhQicqbkF8SSCxdx1P",
  "key15": "5i3KqJbhsadji8rzftnpMxeRaM3tVsdTYS5ajua4tMF353njbFiqHjthcbMfXoYppGBpsYT9EkJTa2is6uSJmaQX",
  "key16": "48Ueh6N6cUmdpWfxjvfoCHebFs6C4SMxjAcfNXa5um9utPeZjpUpY9pFXRRvYqamdoJWaB9Znq7Lz8hbCSzuTZwE",
  "key17": "zyskpZaisvzvmjUCKbCpvZWBFmdraAJ8PrLPmbMVf7UDM7sobPCdGXDtgyHFAuHFBV2QcNh8PWqp1YoQZFxH8Fm",
  "key18": "3Ntrcit1qHEMAWxupwdYRZbchrS8nYeXTKY7Ujj5ckkxCunq3XwdHweCxgUu4jxJzhXR4Prktu2GSGQyCSXTM4tN",
  "key19": "25jZF9usvqsPkTmRBDTXKY3DXWGTkiHQfZs4XFAyJc1ifJuFzizfbF77AKF6f8aZDC6GNYyBBhT73hRz25xjFbaR",
  "key20": "2wffSiwPNRnfdUWLUAsKHFjkFmjzhPz5UP84nizX8UUQ5nBLFgeGDDbkUEWdxhLp7BRcsudTfFPk6QECRqQRtfX2",
  "key21": "5GWtgZk6DUKywGbs2RwWi979VxJUThdYyU3WfsAmAPjrnfursZSpoRMB3uDqnjejrjgRScYHQh5aqHXMocGVtE8G",
  "key22": "2tbgsW9xsFsEaKGnS6HhB6KTjUDZ3NSQ399fNmf4LPC7q2k4eRTB72NagTyU98124DnEwfCfn3y4ikrgCfg9s64n",
  "key23": "4KXsVEbEL6BsorVPPFSk4bafdsuuZTr2HTELmGycPZPTFtJKoZ1oFGdbh3pyAfjZzVk5FoG6C3ECBmdbQAeeu3qF",
  "key24": "4QU4n8kMLnvqaeSRVjBGAGxsnwvof3S2hhUbw3MuTVm6wxvR85S32bFRQhuhvvdj1zHmK9SohhJUPLB5drwp57Ew",
  "key25": "3Y7FG2RziMz9WVpxy38b7XV486aV2QCXAHJHv94gcQ2UBbe8EjKng8gFrCtdvXuujVcqFTYGEWEoiDdVxW156S8A",
  "key26": "M8Fp9cUeKuCDJtc4YHnAvYP5JYzwR4vbQ48s9dD6n7Cs5yL8kdGXPPNct1aWBXNaYNZZJ3Rw3ZhZ51UcsjEzS7k",
  "key27": "62ZymRFX5xrVdqBpdbpM19PgLL51JKym7XgGMB9sWdNXN2p5f1RXu4JCjmveGTF9HC7HhBG4LC7cc5jfNCfyGb9e"
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
