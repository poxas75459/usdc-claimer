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
    "5fMLvbbWvBkhHXUNfGgRZofd3Aj9p5U5sudPZqRGaRsWxdSZ25swigg1n8jkdWkSo59VPavNYuiDjPizizAphyxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWbaWrx5TtBpQHAv3xN3qqxkbpb9jvQ6HTXydijNBCoAGXMVKWHkKdePrtur5NXuxPGvmrQznZ6fNLy8fnxE9Fz",
  "key1": "5yVpTw8ZxuWW9nFEnyLUZPpxmQ3FCSaQmoNjcWUFTxua69uEDC7H2aJv2vVYjoKewVRKkcnn4mfirjp93FuehajG",
  "key2": "23T5NKAG9hwkHVcUQh5fVPs1HDRkyZHXveYa6xJpEqw93oZqiwfX84h2sZ8vyybJphpgeJDpKd96URZoAonJSH6L",
  "key3": "5zyim7RnPbjH8LqWTQ3gyTgoxWtAsSDFfP5zwbvaThUTG5E5Dc5unr7mtssdo6XgPkDVJpXd9GMHzBSUQ7b9cFZb",
  "key4": "4hTgRPv1YgpPJQ7vHbpLqg96KdiAhRYK679KG3xsVbYN5SHUVS8ADL51E3sVPZVJQ6rJojDTuD9qoTMa38DFung9",
  "key5": "3Hka3cUchvJbGKE3UPoPrtmfD6dBcq6eoUQGkXWraDPzKUHgmtWuEiHm3voXMycy4K9XH3Xk56VVt9FL2ZraxGWq",
  "key6": "5XPgTEiymzLzeQ1VXqkDTc1oa4k16zfqGL4GsyQNcm3y9DYtogvfAw8qs4TxRguHNfdgrCgPCKJUVZf1kY1xy6GB",
  "key7": "4fJ3SXU7hP6HxULruqkpKQrdEZjR1jYpF4M2ziNwuDQDXM8NUUYopv14sGELhSYZEWFpvtt9x4Spu6iHBGZ6qZSw",
  "key8": "L9tdgRkzdb7b6gvRsfKnPeDigquz6ZfNQVHSh9qDvvqQw4LcHj4DSyUhTz5bdA1XGF3yJNewZWejRLQraCPVSeT",
  "key9": "3fH6vxe42iZKHA4gCvfU4B5vnWjoFuni8osGiN4TzvycKUzzdqtCRRfTedsdzJB3fyEiUNgiGw9Kcfe5RDz8Qymr",
  "key10": "i5bMwRNgp592z58Kzr2yvwhMu9udFVk3A52oXUTXXqQiGuRDtfiSreVz2ikXcT6th5KA3iozYq2xZ7cVbVRe8T6",
  "key11": "2PSwbFK2s7fUv3V7peuJahi41vMZkkKKyoZTxgH2bqBYR6ecRmdHfU5GxPPRnZKckKxjx9VoTkY6s69dPNSKJavA",
  "key12": "4v76DEaBdpf6r9Mjud79SdUqAHjRjsrLo9qHTRaGGByEuG99KFx2aaWLffMdshhxaTaoNLjYBrPaSnZkUkWd5mog",
  "key13": "4bmYrz76k227mW8apqesAi8oH8n65W1xWDXXsvVgvaMghx3rEzF6CTpmvHLbe27hUZ4JKffFFpNFtHDQKB3fst9d",
  "key14": "52xVnafZ6bQex6ijikgAzH8XbqdCBA1KfVmUUXeQT4RZamVtHwKp9dQkABizgP6ncgvYAhdvfGxX73qxkVGqNuPG",
  "key15": "RfDfRDB1aYkSX4c1bj8zUmTFNpBtW8E9wk6gicW3EJonPzFGADz1oXS8PJxXraURAmwV4HPELBCTTXB6v3A4G37",
  "key16": "FHGEsX189fpNAAJDio1KPgjN8fuGJo88zrXt2HhaXZEwHgMByfmiHW2w596z6LDShEhAcJ34EquV8qdZz5hJWpZ",
  "key17": "4NForZHeUTrfjhEq2DSyu7nt2U15v7DQPdRKRkQwfWG68VJL8FGBMLcQzhnHKnGtXHKUu3YJ71AzWKMydrM9SHwv",
  "key18": "36dKwTWKaKU2D3aUHrB4E3zjYdFr6jKYUnEot8tJeKQHUWwwUiePoAvLLnHYFpFtsY5QECT88AkYEzUwG3t9mBGh",
  "key19": "4d5XxLxZcW7dxPmFJ7btbbZ74xC5fCDUvbWLT9aB1KkZ3EbPmB9KB2g4LdD3mYTeVNeMQqafxwe3n5yzHKoLvUkN",
  "key20": "53W4oMS2urUaa5PKciDnXTXPwqcKG4f7Y4x9TUzx6y11oTRrPiUykGpdDhoAVbDCv6TPeE7nLuYRb9cHTXQneQ3K",
  "key21": "2tRM4bRY8LBLgpxba8Q1sferpmgSt3LybzsdrvPdweBNo9eb2ySxrUBqU5rC1MRR9SBPNd9QEb8hUubk35Vtupsa",
  "key22": "4vtUVQtg2kDKd7YxN32x2mZQBchU9ptdUN5qZbz8TujxNavHnKgnHYjyVhB4AfMQQAHPrahaSdVnVxehJ3LhdnNs",
  "key23": "3BGdvNmmZsbsnHcgh6jk17murpKNGHGDhbEM1Yh6koWXqUezgMmZbTvxFSXCQWtF5VipXHq42xHU7ZZC8pW3mj67",
  "key24": "477i8aEo6RwynXEegme5LxDDh5Svifkw4iYjDpDr59RSvk1KxJHmuJdQKEjrZJhcTmVaZbCHPriPUowsNAuh6tdd",
  "key25": "2UeZNW7cXKx28HfxwAMiKj8ZifB8biHJi2Q2r6nzKV68dL1ZjmrqxQAqec3x2mLHK2h9fVuJW8F85YmrLPe2VcLT",
  "key26": "4E66AZLuFZzBbieY8hYFNxqixnECGcRhcxNXr32mMEWqqjWmBHzN2TcsBRfnbzCPgSbdtGsik9fj75z1Dn3ueb24",
  "key27": "2SYvcBNWFQGHifsj6TvaEpigQsmX9wYukBwQke2WnXPuiUZCJ4GUC6WFk5SvMWP1Y4DPL725zta2Rn9hv3r9dRuE",
  "key28": "3wsSadbm3EtcwSG8Mu9FwHCGM8nCsYVyrBDog3KxUsFQNtbnbg1Nhzs3fjYBK42ePgXrJTbv2Vh5633XHUeJzJU3",
  "key29": "3PhiMEEHMt75wZqwDWi75sVPxGPCmpxYwjrSiNUYy8e339kfYGV7UD4qtSyVbGXDZjZWnBC7ZrgTL2VZyUwVhSQB"
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
