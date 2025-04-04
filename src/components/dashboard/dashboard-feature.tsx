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
    "Ebn9fHTGL5DQ1c8hLSagbJ1d9AdU1R4wxiMWfCoDtKCxbP4YtnaujGCyeTafmn35NS8VwxbSS4Rhh6hcNnPWbh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfXFqcUaxYpPtpnbqUMzEd9Jt4hH8MJMXSB217H7hwuvdxHMfZnBhhVA4HMq6iqsBQ57LnnatacFLo1URCGbnZV",
  "key1": "5fRSLLenjoBbjZCibfMCSbLKhHaiMjep63yRVGKDcMyAsnA4yfspfuuSWKXiuypNUYd5SvhaQBD3EByDKtSAJ7Ey",
  "key2": "3ze1FbD98y6brDrc2THf5RC5o7a3QrKmt8hxY72qJYwQMVwWYDUc3GeGj8XEe2fQgDs3cQiXcrPn2MipgAREtruQ",
  "key3": "41Y1CvMw6E241XK7gYJJMT3xXNurCuLYVVd1KrPj8VdwPwjeG63RHUrCoKzRoiTEnMwUfqj3o4b3gbyeCgVAoT9G",
  "key4": "3DK5sKPqvHP3Mym32ucWCqiqJX8LBfRjU7VA2YYcMWa2scPRuqiL1rob3seUJQ7nPF8pmUGgD96renJypoGZrbAc",
  "key5": "2UFyKVkGoiXowZBikwihx3APZWZsUDqSz9GBUpfC86XeFNT6qGvbZnh9YyDKpUTFg9ZFAhggmHwwbnTfM5Rus8Cu",
  "key6": "DfZ2ugxkkuuK8YmEPjWPZYweRfyhAC3x7ErJydo4uQtz79iZJMuBWbNRpRnMF4UXHiyN1n7UYMKsycuKGheG9mp",
  "key7": "24iYHrwwYCm39vvYGEdGFzjjDEx2nW7MwkHTHBTzBxqXju8hF3FKCqqdS5A3r4iFJS8XQnxxkiguAXsPkcV3FjsS",
  "key8": "2bxuSUWiqDZwY2cmaCqfCkxT3tLBjvzzRvczKJjpHYFKTkcyB8ucCchCnonuHvXZWofSUfzGr8vQXzH1o5DmwPAA",
  "key9": "5VJvzDAQZbsCMg9shfemzz7oP7fAy9rcpZ5bSFehtZj29BxzhhgPkqcLR3xCrUNtDZTwZv6fskk1xDQd4gEw1xJc",
  "key10": "3syp7gkeeUrYV4tqWba9FTxhkdNDYkWoVHX5Xc6fgtsfnMKi5ynzHk8wYjfW9NFZCqfySTB3GFAD5MUWApWfnzds",
  "key11": "5e2z6yQerpk2Gwt12p8UtFJtRVhrmMhVWdwmsqFX2NPTGTjxaqzxaSYT8xho5uU1xGNaUwuwv6j117WYiGnqVLKN",
  "key12": "a3jvhw12baRq3dqa2gtNcgnj5iQbDMuMKbZLrgN98Apc9HopvkgbJYVLv2izydBUaH6c6Jk5q1vcn9eYFXhLwaD",
  "key13": "5UeVSC1GjCy5P6CZnBcoChnbQo3N7E6qXiEXqbc9YwbyPBKPns3e1zCfaPwES72qgbYBQWuacMDRSoMtchTv4Xwe",
  "key14": "48PLRjLkmU4FbJkGddzsbZZ9CJQZxZMZYhzNAFNVbuWeYUGhjyRztkDP31CaMLhrXihinMvdy7J7fXWKa7LpbgBf",
  "key15": "4ysmpMtMm47Q4nVfGiaJCriDqxN9TDm5SijLtmuenQKmmpJid1FMgTbCmcCtTq4qDVBti54m7Vfhf1Rm9Z2fdDVp",
  "key16": "3ZjMdd5bTB79HCRA6ti6nb4bmvhm5WaG6wATCPvVntDYs6eCyf3v8JYVWqAMPjoeRn49QpMCe2DnVQbgupkZtNBa",
  "key17": "66mkyHGoLRQ2K5GzEuPaUiA42BR1a8bQsmtYNVCRvbciL5YnH71Tr1Rhh5Htnr1Pu8E9j8eHM4rCxchYbuwC2U9k",
  "key18": "icCLYojmw9KNCf5mEjsUviZCUDNg79ghC4SVdTa5BDhQiY6Ega76YxRFSzfrCTtXeZcC7SgJJg6vvHw3Vhck1UC",
  "key19": "bPKNZqLQokahHqt1s2UM75X1XsAcCDR81LPNgNT4di26D2vv3UWVVc94UWj8n6BzMaQpJuDPmqjRfVet3WZzwpX",
  "key20": "4NhzBXCt35VPhtoW6kbAag6GeugbwademTt6646qMh8jKgbGzQBbzCZsUDCkZuj8jV55KXzx1R2gqqvStF1965p1",
  "key21": "5b3wdUDYVaqtCYRcgZoBZDZ33KJgR6FDYWt5n8HWZS7Jc8J196kmUhG2EaQF94yjLr5jpSauUN22nP6KNBQhatDx",
  "key22": "3o5DQqiDHna6n3hvoBGdzhvHvTckBZjZ47VNztxNUpeuNYHWxoNyDY3sJurndnbMHnnZYUnxuFDc7UWDCud21m9W",
  "key23": "4PaoKpyixFUKgoCaZrLPQL6wHDNp69dJsKJJJS1kAYPokrnXYRMv3LrprrkxVzedYtFetRwRp9mBc7QBgHWiU3Lz",
  "key24": "31cShckKLmzMLVYKdQU4fXULFKLWT8xZTyaHQMtpBJ64b7zKGnp8PJHCkqUyQzNQxoMG6uAJ1keZv8q78d74vRrx",
  "key25": "5iUYGAS2A9E1oeaPZfCELmgyoEbfkrGfgQQGeAETRLVnPW5UotHPsGLBzHPX3nttLbJsfsLovdJjZ9h5pdsSuZx6",
  "key26": "5AnpD6f3kXnrqCLmZnqVoZPnnCqG4p3NAnzPUjbVTX4x8bLfDGihirtu7pBjcxwGe8iNKxBnEXM75aYYGxAvbnKe",
  "key27": "2h9Evf5tuV1ZYw1PHkHJVPGJbxt2B6REY3DmNS6PUdvJu6fWDH9j3wdHh1pYcebSzmVySGxTrEtAmrvUdjrmZugy",
  "key28": "2nveivBRfxnfeadvEwJMikDHjyTmN8Vv9g1wsQxxaxVC33ot8KLFDNyi4vq4dKAyX9peaR5jGtqsXW7uK4sPzykZ"
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
