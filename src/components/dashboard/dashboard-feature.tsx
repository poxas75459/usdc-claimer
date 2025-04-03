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
    "3MworJ9HV9rBMMgHECe9nqE6T4Vth47dkTim5E8BTBSqDkFSripZqrQTSgDGS39WqEqDMfyZFRgjZg2uNTm8YkK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ePSANjDrYsAQbWbCV1bJuMbPrX4FGyv5xvQk9BLKQGmuZCN9qExaS9Qcpj4Q7i1St14DXUxjtrZj1x41ukKAM8m",
  "key1": "4eGF8kQSpQ3DJH6MWj9fNrYYMGcFfC91pLCRB1ZQoZtZdNvVcHZMoVCUaRxDSo88gzAb916dvjNnCKnmDSHz2YEi",
  "key2": "2vmybdbpyHS3DBKhqwnBiorY2w4XrRPDH3Aaa2roX7R1L5zSCYcaPqrSQRnWPTBqxco5jLAq2w14LszLJjjsN6zu",
  "key3": "4iUbDUiKooZ91URmaKhhrjyV7dgi46tS5wcrhd8dMMGkxU6D85qHxGtZx4bV4qmGAVMPv4W6UtMbF9zogTAdB27J",
  "key4": "5hi484kAttWaN3Xaea1syjV2GNuuhbzBZnumUWq1RAXchxbQu9iZ62AUZLH6YrKJEjVwMPEBXPKVJDBsVGfKcxXZ",
  "key5": "28PFAffAwqYRKiLpRRMCM8gQXvZDDePEaJpRf6jGPBP96hJbmb8kAQAiC6CNhVbJM1VohHGQdQsgssm9gGiSDbKS",
  "key6": "4F7UqLWXwJ67T8r9WkhXcNDAmUM9WATa8ZXdfHfw2XcuNU9PXKCSXh1rwe3KqiMNu2maVViKMEq8eUnpZSh5cVpY",
  "key7": "2SBKXaKwJBCrZaVi2rR5BUfK8xq3bLmPFHu576ZU3NgbJrPhTV6YHBCcvj1eTiVM1PpbGzdEVs1GJLDJPiBwQL8r",
  "key8": "3asTe7WuusG4hGdUjvDtjSTYkFhsvdEkoywnExd5aMUrkUYziSrgB8uZxE5ivhdu3YzUPLcMHq1iw2GtSuGhsenN",
  "key9": "5GFKeRgUC58ZhkLFZqzUqcFA1QNkw6gxFXHbfBiNiZrEVGq7EWFKHfMuXHeywrzpaZkZjhmoXFBebcmiixrDrXTd",
  "key10": "2tWPTU4jVtdvWZ29qEiKJSNYwbVmdJ7346AysHEJNrqqC8PQw48fScCiZWkKqxnUpQiMgBKtT376shVvRt7J5T8L",
  "key11": "YLUZTaznEvZWVgbEBuzcRQRtyx7hY5yesgiSKbDqUkQa33FFeqCbRTDZFrbyPqKZ1xjHmgCBnKVKYQeiDMfxpqF",
  "key12": "o3cAP7nCnbozdSkuqeLap1AK1c1AVs1Zaqts4KxrQhjb4fMuW5sXoWFSxXfDjM2L5UxesW8g4f6y93GCYgqd3RD",
  "key13": "3MEcGHXPzVeogskM4QvSoWNQ1pCdWdMuJTN9YWCThiVeq6zUbPoj69aNNEhcbfrMNXn5ttt89K5sJZGaKasoAF1d",
  "key14": "AxnhtctqhuK5XipRtse4XVKYkpaaZik38Nx3JkDbBV7tUcnXzJTL9cygVAt6nRiaCasGWaScUXVjJVcGcg27Duv",
  "key15": "3ry5mJ5yNd7yqDnUG4nLSuZdg3kWyFak3Ff3oLg6wwDBs9fCXE4Ck4HAgGrb75NpeWkSnMngHCWPZVQKGVBVTCL9",
  "key16": "2V9MKBfrrSJZjbKQWt4gxmeELwpbxoPF3VNkcLUWHDrQeU4vu212m1ihP5Vj9ZPnQCUajH5tiLeCW1mkWqQzagvx",
  "key17": "48jpwSUZ6Fif5ReNkR92DmR8HcfGSLNUgVfRsesTMk6JNWZKWnZAkzn6F8WMKWNvPXLib25yzD74464tLkd7vDvQ",
  "key18": "5Nk9u6L7WbBzd6ci4WFVXnKZAmdKFTxStyf3jb6HCncvxy7HGXGyWA6W54JcdHNm1xAKUUMKYDoXcGkWEHq1xTum",
  "key19": "rTdCDLBCE4cxihTGcusAdG2W6bQCjG2tQLL3ZfcKqTSNy8mYWnDVVsw2Kkp8zaWDpftWbkyZEP8EgGSVSfb8W4x",
  "key20": "4K9sEByAx7EKQXgkJpi2FosKCuspATCkWRS4SRFCd4AtEf8LNSXg2meTdWv3Fmz48gxwPYg2Ya9mdwbKkG9ZYQK3",
  "key21": "5N73Kn4Uk7botgxH1eNgi81hhph38oJFNxEdMSuTyLMDqTnHQCtNsBy1BEkFV4xzTZ9N2CKo62nfo8v5uTLDWn8w",
  "key22": "335KVangdkxy8FQa9nLqYxAs34yA84epj4azJ7rKciHsfV8jZK58f17tbXmpeKaN8xKRdZ6t9ur6RkPP6ywfev2R",
  "key23": "3gvm6WmX7TLq4nagLiHv8tGKj1GgZWW7mP8JGcttyLR22FYJ3MHeiWZCqWXFxcNK2FwH32BKZrMxhSja5Ca1yUVo",
  "key24": "2NKyRAaUvZzMth8PMo1L23wVBc94LzvZVMyNCzNdx1Csdv6E9P8YqdQTmT85qmN5Cr4wm9eQKYhgMaSFoCAzDEYh",
  "key25": "EzYYtP1jzQki8THxb4bKdUevLFLAzekVc2PQSuw2ERtjbqgcGtDdYpnaPvmco8kRPAdm5EfGJQrK9Z9QyJGLV6k",
  "key26": "5LLjd543jSm8vRReMT1cLU36LJNMasLQef7HM1uH1voZ96MbkRX8kiMrojYujN5DsK2xqdC91hCXioEwLPf5Sz8g",
  "key27": "5e8SzTNZjJN1YHKkQk5z1sELbj3oMXqkgnFvXRAxtXBYfcBbRAUL2Ex7QfpKCmu2meWAH2yZE9MStdi2FGHD4pKp",
  "key28": "4hdwmdWg3Ar96216W2F2FCqyvqjPR2QmjqcZ3TS9P4LCaegTHuCFvwARrDYttVTL7nBWi3Jx1CtzCdJY8UJ7suEk",
  "key29": "2C4hynkafyzpuP8vpvjh1UGEeR8iRRzhcQuV6XEnjjrHbrhjkGY45BduGVoSzmSEpuPJ3MGgdHDmTZjMU87x4scp",
  "key30": "5vYfuYgXcsYK85f4Zej4LKdue6fcYnYkNSkNSTbR3bK9danHzCoAoY8MnyS5jqAkwQcPbiW6nm7Ef6Reope5WnFj",
  "key31": "374q7BoVaQc8a5psAk7m6EsHZK7XDa8WwyJ56KHQEAFBfkQfcByf8NjjMtZqj6ApcDaQRFSEaCsLW7tZfbKNFAtL",
  "key32": "jcoeGeqvxpbqzTtuqfMDRMwdZGzB2SxJQcDmujV4cc95svAQ2zcSmFx5HmJPKPe8zMpEX2cN3JWySv72yvmT6xZ",
  "key33": "2sUYDcNbSrFb6KAqEbSp21t3xXSDfeiWtsPMkCrVc4taRB3wUiK1dUWb7GcSB3qMvJcwJuNi11xUap32ZYGUFA5f"
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
