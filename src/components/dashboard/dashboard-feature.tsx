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
    "5mXhWFSrQHdPoGP5xaVjNDSUR7L2rdDMJDUx7UhS2qrJxk7npDuoiEzWcHU46VnARV3tvAE4S7fR7y347RFPCmLa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h9428hKmbZUnkvfBaoBtU7LsY98s9tV79zeaMjcTmK9QirJZfF1cKkNLiNdnn4cnjquo74KpBGkyHuwPLu44Xmc",
  "key1": "55Z3FAAvQrzs9W2VpZSLZ4drUocoRQVao7xbB7xn1caN4WQ9siVGM3eobTgMABnKErciFuyin8hMk41KdiPYqBtw",
  "key2": "2dgpzEpQLZ79PQi4toBjsct8kYeS4YSK6Sbj8SaFFsso2Up7R3XAbCU59gJ9rJqubXrReiefLhxwGsPVxyg3MGAB",
  "key3": "2KT1ofBDLWLYDQrB8Ffb34EvaEcbhLdED84GX59yrHthnESpb79e3RqWTdTP95S814abRZhSH5hbajHPwJDeLC8R",
  "key4": "66aEYNHtKVABqnNXSqqfX7e2DRndGEUEoZUjLbP7WDZZ1e9Zgnro8tPFHEzDJoMLMXTTXaFQ1f8LW3W356FKditC",
  "key5": "VP4ztf56u8s7Jg3fVDJxCzyzZEpAv2ec11qWsGuEGhcr2uf7U8VtQH9epAuGGnG7TLHyZHPA6TxRPkKBwDyyLoi",
  "key6": "2Sch3cSCgMv19YkFxrZLJ8ecZkik6cuhtHUaXzrAcsfdbteaJSrhTxhfVQ4JnB1R25gicjUncLCdbZ9Ppma3pUYG",
  "key7": "2gWCidwtG8SaGNpp9HaDnUZGEMZ4zKNpqPzNw7McAXsNVwkd4SwE4unnAR8v1M4v1x7zUrid1sHkMB97uwMiMut9",
  "key8": "2d6qXPHfwW3LMoPMZ4gGR8UXimjDJhwRkixYr7RAcjaYkvSmj14FPGUgXYRUhJ8dNiAbGSBDfbgCdX7cBdcZURDg",
  "key9": "27XyDL3dRqtPo1UgSyMfpAurJkjZMe3cHTfXN7y3pn2oKm6ZbZS4jcEHFRtVrc67Da34CsdZWQ62muetWHovQxRt",
  "key10": "2W6A6duPKipHsViJ942PEGfb8ocFcFbibSKWESVxUdNrhSo1amWvGGczsfyxUp6hoWYobHrBAMGMWoEXsaRhKeh2",
  "key11": "34UDkPKnDtwN1vBQbwmYJNGSGckG4TXEVM6uNudsgtbvbtYj3L8nXxc9p8VJP1Tj52WwVBVWi3rQcqFcDuNGsrsU",
  "key12": "G5zx1SmJCcdpovBKpwM8a3GDHyBm4st2Avu132rq4PFgb34MzbtNzQkACKBiiLdpHxx6tzMRV22iPTRpvy6R6Hk",
  "key13": "352cLS6gU2AgTTkAVjqfhKzHk9Urq8htycurTBjezJV7oHPEsMEC3v9hYzWbwsAYxi5skTPpRuDLACgMMh6zvzME",
  "key14": "bUjBJSDEgYA3YUe3CrPAQdse2ciKCC2hdB3oYeQTpxYx9pVEYn41SZZm4uj3PTTXG5s2VHEW4qWr33oqd8BBaJA",
  "key15": "3K2qw9wU1y9VJqThJrJq9ME25v5nUYCgKj1xcBvmzWCFtRPtS4M3yNWZurWDwX8957mumrNVLWzAf9eNcG9PvmaZ",
  "key16": "4MK8QyHSfmnSvYRXQGoZLKM27xc7KRmLSAKK9TgM9NQmL21d3yRKMjstVv5aXkqTURaJUek2Tp2wGNpkUaGSW9d8",
  "key17": "5WYb9mu9PPbbSZENhomKcUS8B8Z8a48UaY273wuEwa1a5FbsD7ateVyJvqvSGB4bqE3Z4awZee5UxC7bcw6XULka",
  "key18": "3zWonWcFYVm2WVEMBJBeG2cARMYAyMnngBzxgE5bCBwoaWsBVGbzQbHcZcGjwA6wyE5VeiijWabY4bqUE8eJL6tn",
  "key19": "3p769Hdf7oj1kX4Y1Cfhgqom3whMcAGDvdeLsM7EMmKKgNsQDyAKQt9QjsyKTiMJzh8MFfAQVBNyXiHEyfLntYmS",
  "key20": "2wvWQeP1AKMCAfiyUtzCSr3omVz8EhZ8yUhhCaJwnRN9pPEb6MJBzyDFrMrcB83FtmR2Q73rVpAkwcjVZJ76W5Et",
  "key21": "3pwBbN3C1r5Wi3RFEmb6yYSLasDrTmMhNcNw9vJNbzgC6Uk8UXqD5YyEMKcUj9gpC7TcKbzN4XShNqWm6JS37JEc",
  "key22": "4QKt1rnysZNtB7prSPGXzEdy7CTBurVEhNeZC1FCWsisvtJykCpw32p2DjAXvay6tcTcwyqTUepji2MdCpSwDkY8",
  "key23": "5dQ17fCB7Rw2JLZbtK6K84TbRwPwLTou7kYsx2HocKFt5XY9v8tvwk8QGDeJC76MUTMkk5R2usaBNhkTvwV3HFYp",
  "key24": "5uHMG8ob1EPhMuYCMJXUFXC8dU1KhrnGsygJizk4Qr4ymTUd4jwqfnA4yEvfetna86hohhDp51KbWNEhNxGYJKgG"
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
