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
    "5GChrwTy1RbCRyNCL29WyNyP7tTaPcbJPguqbCGKE3svrpWEtcHkwv2E7KRCyuGmwfUJhsV2pnUCcxvLWmAyKoYA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L7oSTJsxCBe6TpfynSxFPSHLjsvoXk4gTaF1fyp2hQwpgZHpS5GhQPcLuxwadVK6eKG4peQQjuFYoCAqRqN14xc",
  "key1": "3Vur1t2q6XFhYcyqU9EFJbGTTz1pExS3qFf9nB9BkqNEuFuvkoHv3tLaA3Aaq162xpo5k2GPSsq9MuTEJp3bSnpm",
  "key2": "5Y57DRktnfnVZntEnVLrdwM9eejjJAQrs1kmD44ZKnjZRgYTC2dPvgyRk6hmWowcUiws1YJDrFwXcpF4eP3wpN5f",
  "key3": "4FPG2nA1apyEu5w7DqKpQitm8PcjyTxsCJjAvnH5zfGUNKp7ofyitTS44Y9sADhTpgwRbBn77FgaA5SJJUGpqTzo",
  "key4": "5rWEsBsLS9t9wgPEpUMoqvEhJY2chmsc2SVvQjvunJ8jZNAjFUkamdwWxVWeY55oiHACgdSbuTLhpiB2iR52E7sb",
  "key5": "rCDTYnNsar7BMrZpuv5hyM21nV8N3hExWjTCsUYi9M5evLpUZPPdFFpKjaEeoYxvQkjeNmSXHVT2auvjncfMhv7",
  "key6": "2e39jjrSERyfViaDW1sJrrBpxhPUt7Dmfm1jUCVbWepzVn4LpRsvQBvMaAHVV4Hcij5DTxfMFnoQNaWyqJWBRuiF",
  "key7": "4B8KiG4X2QmbtATRfAzD127PMtk4xEedbBnrPV9BDiTEpEiCUYEizuE3JVBELycUhkpBGkF5y2EfpSwe1Pju8muF",
  "key8": "4btbgK22vgUpCcG4Jtou3ZLoLmmskmQ7EzfQwW6fudmFXyZvUidoQJvYcf4ZeeBrszsdTcnHQAGGj9ahjqdzGGP5",
  "key9": "3uy4Y1xRLfqUcDi7CmZri9UmN1P95HgRUhPHy6znBKJh2jNJBjPC8wgMFer7tae7nsTFBX4244yPNisGtC2PFfuy",
  "key10": "3MabmoBmZM8LH1bBgxk8NSSM3qiNtDJiB5HTdkJfYqEW2j2shdwXYYDAJiNdnbJ83Kxf9wTy3WYjJtT5FSEuurAK",
  "key11": "5oMGLRz21MBLkyS9mvZGPXhK2V8rVDi2Q3f3sCRuGCFWMKEQZqVjXP4b1zsFA1kH1SY5TBy6w7WrVp9XCXJVRW8r",
  "key12": "3YaftYhq5bJZKDkmhymcx5nr6W2zDpzmXayezBMbo2npna1D2pRnsARKwMD5vg2xYwHMmwkdwneenJBdnyTkrMzh",
  "key13": "38RkgPpxsjw8jgZz774SKQ5KL2Pe7mvZqpkmtT4eCJLpgWyUbAtSqZQNroZCA1KsQMZFybDi6RRYr5g35pMyLPrF",
  "key14": "H38f94YQhvchq3vM2ViX8Lr5TezqguGKCMvdsX2iSThrc3hK9r3MGVhNiabMEWnvWxTy2KDQyf5HMf8bNgHf6fs",
  "key15": "3zt3bgo8txabX6NdzjNmMpHVTd3D5cycgxA7hpiKn8ZFLxXVrhszV5QdeJkJ3WzGnVot9bwVS2MVasBHQzy6jgjK",
  "key16": "5z6Rc5xaAJjQVcdLZtpHvTSfQdqefAetJyLyoVY6TX9YRDy4kQQBRVTH88EXL34AF5UkoWTXh8TjQtiiapQSgtFe",
  "key17": "oyyrZiv5vSJdDg3C2rxLdknvi7wR3EDLGLxTQSSNQhTzNxKwSxFYpCauqgawdi2EztHjxAEF7A9HimZ2XqbBaL8",
  "key18": "3Q3Byw2txhW4C2SjzGPsyXzF3dKeUT6to4tX87Lmv8czrfATyzfVt2JRnAYoNYwZto8uonjbk5BaUmdPCKamzvAa",
  "key19": "5avGaqTyDz4h52oZBSS952eFJQNhzGNB2HyUadPJqSb3zDrGGUsRHYGsSLCzPgZYVyxL9or8XHZBmmaEgKmztSED",
  "key20": "2Jpe9Pm88BiJ1wevvZBzA4UYrx9wXpFPSx9AYjzdagxCTJqV5XSPUw4tY4kp3oJRweBeXbYyF8WaBAyhZwwyaSVJ",
  "key21": "2JGuuZrkbgp9EpbsHCeJidBNgdD9oPEQwAWCnvAkJUtAmc2oiAjiPQk3SUDtwJB1gvTm33syDFe6m9DmcHpW3Ptm",
  "key22": "XZCL1hm1TN1TkYTaWPiL74Z1VLgSPbt4C7LBFk16onqU86D922ymZPzC9wpf8LmuDHMRKqPgKTjWLrs3S6p7P5b",
  "key23": "61fQ2t1j59wboKiL9fzL2Hcr16SJog6Nhv1LbZVJZbrCW14ve8PbbwKhxEAfdHhEzKommmAW9qxD8T859busCHPe",
  "key24": "4wUyYepT2QAxrGZowYuguqe8JdF9yCkJftktoPJzpzKHcynkeBQAQUFr4JMNGEDcbFPg7oPnaB5znJGxnFLGwDn9",
  "key25": "WQCG9FrEYwCQEdiRuAQqYyJVz3KBaKCXdDY2U7mTD1dgmwV45qcay7bUs9gkdg5kk4dtzwBZYbWAofKYQt27MCF"
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
