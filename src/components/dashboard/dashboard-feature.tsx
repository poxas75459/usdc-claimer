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
    "54iX1QdpzHkhbVbAm2X9xg5KsJ6jB63jXhLAq7WSXzVBr12fb1suPC1j5otAwaiHWJZQANfZa8XgqyMrkrYKPVzC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nkL38nGAE43nc4fBHTQeduVA1E9TmNTenxEjEZ7N39z1zWiDbN76yzqJeatV17DSVTLspSCaYe17Ehxi7xuqyJ2",
  "key1": "4zncr2RVFnxMSKLRMjwJnhn1xmGJDaAnQ8VxT7taPcjUK5jztq1aRetfWSmYAmZ6aUysJbQVTwZMpubGiACA62VD",
  "key2": "rVDM3t5Kf3SnZaXaqMKmD6YZ1bdTXFG6jdfzhgLYLjzVz2JqkfedhFkZHxZNGLEKDxk9Fp72arjyfRBCQYnt55h",
  "key3": "5CpjMtDBaEN7esXZANKJtE3RNRvAuzDFsW7frnZwqgrmSpoXsTd2LPk6Y7XGsC7r7Yvf4fp4VjwXTzinF5CA2Pvt",
  "key4": "2cQZH6pnwKn2wiJgyshw3ejubAM36D72E2QKMNaZjnuusAmzco17EmQYNqdYT7KKfgGqz17H8rke5pEVWU67AoeK",
  "key5": "MAFx2nM1MBrwi79HgtVacuDGV6AhdpVJCHTWYcQbJvvGDXwpEXC1F3b2StYSdctQmjdD5vnwLcjYpRD3dA8u7P8",
  "key6": "5Py22mZm5dHTtFFPK47XupjdncUmyhQdHHiJ7Duq2TeQcdoTPb5cyrPuVbUgEpx57uLqQGEPx1T7Ahjqbc1zrXeQ",
  "key7": "2J69vrU3RUMNBg5ENWkCSwxKeNw1FqcKMs9UErh8Wsrj4cNTKF3YhtJ2aG13gZtU6g2pVHqsb68Q2tFUGVf4HdLr",
  "key8": "57WBNkPDErvr47BWEwdcKY89VGs7sbkuHz5U44Pka22zDimK3kQUX3AUAy1yShZcCrUN5ksmv9e74B8TQV8repzq",
  "key9": "2cXsNDtGXtYdA1TJXFukUNhfBRsBm52VseHngBm8yL4DCTQrRJNFYnjebhZvfx5vgJMo5VCFPDFFRMTVgYwoVk7u",
  "key10": "5rbcMiq1KJDF3A1Mqk1wBgNFmegSCEfRSbgJBNYCWFXgcPeRVFstZEeX8YWLL98ygBiFJBqDCva3AQZHb4Tsz4v5",
  "key11": "4G9TeJdTaUKNtwMX2ZJXdBUqJAPNJikS4QazZ6ozRHgPwxE8cBGWH3sYYKuTX2YHdKjs8qk2wMNs7kFvYjGeC27G",
  "key12": "2GZDjZSYvnsNcFZfRvph9n8wV3nQRY39Y3JaViskAqhRiXnpt1zQVkN1d7m3NvFDRe1WC1kdxoWoT4PArgsKUi8t",
  "key13": "2wr4teWJwngvsaci4UDY38YaDyDwdMvsvnSNeaZna38ZigkqxgHUD8vHMCPRvs69QkmYSvBAuaedFGruhsuGjf11",
  "key14": "at73bpP8sjMWEvqfbKg4WWGjntvFtCMwNqUn4XEhBQDjdxhfBoUqtqMmjgU2G6BoLZ2q6owoGqcquezGWcF3JTS",
  "key15": "7fcR3vpL6FoDU3qojh8XpKKCnssuUc7NfDQXyDHhAX3MAAK6CnTYfzBfKLj6p3TNjf3ZHvg4aSeUNdA1UEskCD1",
  "key16": "2zpysrZubfXkyJXZ375YHFxj6g6SWJrd5U3b88Ju1WvjKV9F9SvRRDbz8zZG5zSmf7nZJpwyNLhZHUnK4NGxQQai",
  "key17": "D3WZKctPXTA6bPys4Tgv5fbqE7kDvryxDV9oehHMc9ktJjUKMvir2pSNMNVKpQsBVtLKzx5mR6GyqvMyvUHpvfW",
  "key18": "4isbgiYBe9Ms5iFxBBszBK3egdQBFizX1ZJ4wRwfCZkwBgKrGeFMf6jykMY6Fwr9CMwpQKGphWgvUu52bZV1dh6C",
  "key19": "4k2swqqjN9aLVnJK7BVNLocmge32GhbV9vzPkY7bHQkph4F8SnVvwBqoD72dnW5U5AwdR2a6ek6cDBProJbCaE52",
  "key20": "WsqMjDkSNTiPs441SeRpHuDxig7XR2EUhDQXVr436sdogSggfo8DZHsSRErZGCAX4FuF6MDFZoM4SgqPVucJDWr",
  "key21": "5gQ2ojGZDVrCPAVTLN5wyKdFc15FMUZoLWq5EgUKfn83TojfYys1kuBY2WHBr8JByxkHtm3MzjdUrrNEYchKvfWH",
  "key22": "4w8wheSWmr74S3Ep3UrKWA8jRUqC7PPgMpDsG5udsaAnV7Xm9ytEwnYvQK72Z8pcCWqMrYxkjWEno5z2ybd6sPrn",
  "key23": "2QBkM2Z2edJjDBc9pXWQFNUm6VCnvKtf3tDHE4DqrcPAcVaSeGWYCE49XyyzZNgeDzuG1Fo3G1EsSnZrWshoR5Xj",
  "key24": "RoyDMwDPnnKCqJdMej3WYZP7HdJhAR8Kejx5PTFVa2ndhJdYX5EmDZTeEA4rrEZzDMCc71ZiZHgbiyVGJmifR92",
  "key25": "5YFWmcAGCfDm3WLvUSLELL55QfZxN67rdqxEbr7XViMGFnKB2FoeAtJGSq5ETZCFnKRhG6rjLBZLepowH4KNYU3L",
  "key26": "3aUwSwt1ujc5sKoMKfGUur1QNQencxKf4GBfoxTtJ8ytwpRbSAUdnG5kEqb3E5XkNPtR6ZMVMMoJ9i1hwEqkbJa2",
  "key27": "mDXjqrr36jztB9uSw9Mi3838bLKinRBPNDGpEoXLMczokaCAzjHNMHU4zVzohNM1D8ksnkLWRn9L3oytYUN7DF5",
  "key28": "3Nk1kPunzWthRQWr7UUc21y2zReAiFZgVGLarMhU13kAbW6MuGdEZJ31MhcTwQGBqiso1ukfKPND9UXW1jen64TQ"
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
