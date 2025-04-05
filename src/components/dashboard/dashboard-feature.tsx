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
    "CfLTezJLcdoP7eNWxLvtcZgvqLQB1hhCkwnq5kCTn6Px2u8n752AQ8qBurWDh853qmMphZsmvZXc1FsMxn4FqHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47u2H8nXS7YBuHyguuQJTP99sQgGpvYHFNRiqQLxvqEGwfJxTvsuBCyGTzo95y4rjk5VAoe38KqXhQK8ASXaxnPo",
  "key1": "3qajmkMWsZ8HQ2epnwgjGcPzgQ2oXTDS3PZ5Ars1DmRsiW9TYQLEdcR2MpFQvA6J2eMEA7mwYa64125hUQNpVy4r",
  "key2": "52nsHTLaKDbVk7RB716xiqCuiXjYJxtdR9yq1fZb5cQmSVaa2RkByLM29svgVgMKeWo2amDt5N2QTfhei4T5k93x",
  "key3": "21ydqoe7XNPJYFMpNcLRPUFSvGRuz2ZcUL7cqn64dLYqEV5Q7gc3BvDrKNtTJHHfJNrRDqKw8viz9qC44NK6EWFU",
  "key4": "3mSQyTN2Jb6xUizjLD1RvNFRLuaeLcJuSiU4QV6WpVZz2yYUbinSd1ikndorn2gDzB3pAA6hpDV13yHcuiu6Ub9G",
  "key5": "4bMoUnpJrvJPuatLuuWLsPvHZhhX1xLnjyGDCAWhPeriDpEx8oRJe9aocRqq6DGkPqqUNMBdbfMzkdCwBeVvXncH",
  "key6": "3SKoKtQ1bzacHsVCruQSRdFoD5udmMiZqT6Zhosbur6LQRiGZdgFYLuUtavd6Dz7RxXsuBKA5taLEnzN9z8Z8Bhj",
  "key7": "gTL8oZXGYJ5CC9uEYzpJzQ31NxbLoq2S5pGWSZ48FQzLWtFZKXcH92aEexMfH93oHVDt8jhZu6aQUdmKf3yJJmg",
  "key8": "zetSYWLSPz1zErPHMhDpJGdPVHdRqzh2jHzFkPRLAfdhim6ciCtZ7HHzeMmV1ELFTuUxBzRFLB6epQjGqoVjWhk",
  "key9": "3ST1TPD6LXAtQy6JMEpVAToL6UGyeezW2Uke1hBskHAEyt8w5u3nsbtzamGThChJDr7somLXK9tgKQHEKae1SbrN",
  "key10": "8fZQKy82dMYukR9XhUxQEkHiifCmK1b7AToyVKRRXm2JakUJgaFsSJpSRbuxiXG7DNKPEDNzRneoBLSU8rGDDDu",
  "key11": "4whh8g2c1CRea88ptnupPvuKuroF29mh4GpdUp2yvBnMTb7sHD8WY4cxN1Kut8opFDkymeZwQJa3ca7MNS1Nk6Ai",
  "key12": "BtJonneL6zhuwurDNouXKvMDVaM8ysY6hCQLqcjjZy9JMaywLu7dcbryxxTsHsk2uuuPhphUAVxnHxdTTaC9ECn",
  "key13": "4wsixrep5oX2vLTCkV8NQcrmaemq5freEi2LkaZGWewgT5atR3CDAETLQm3usNMw96TFGYeW3Ep9KfJtSzLvQ5ic",
  "key14": "4u5tZtZPpXJV1bbrCM82wG8n7PwixW3ygAJ8AjssYbMZXngEQ2nSLa23QKfJKwsm8qP8BLdmb57PPU5RfX8cCYvg",
  "key15": "x22NqbhVMAbf4fBz7KTH7CJE6NjnmbsAJ7acz6RRvZePgy3kQyfjYSJWLT2uSUzKXtjtugjWJ9PgQGsQFCvn7Kz",
  "key16": "51tPhF2EiPfz5nTjdN6csDY6aCGomkMjAy9Qwsee631RXJNtrV8fsGJBnqXMocJKM9TY1wEKj7Ry3bA6Vz7mZhba",
  "key17": "484q615LaPADiYc5UmpkE8h58DeMD6y2cCjq4YCeViSjvB39LFhCgjmKoc4aiZsu7DuMm73QHChMbthrPp8jCVJs",
  "key18": "6JUw5uPx6v4mTvJrJZuf8AJDjXQdjDrBBWBrvwbhBVkDV4GobLjcZAzpDLmxSkVNrUqpW9fkM6WHVa8KhNRwLpe",
  "key19": "3XPZmd4kpo3MfX8Wp88iEmT3T1BoqY4Ay1NN3pFdMgbcbVuLFoabSyHZzwzPmhdjcGjFvbDMS9MdXhDzTjJKB7wY",
  "key20": "33iSTv2bhwG527R5hZTsZgG8x933qmVnQyEPmEwBv2EgpqbxGxynfnqCGbyHa76meR1SXKjv3BraYGQuVcLb6F34",
  "key21": "3ukJ8uDD7134hfbMQiJ14Ln2jWhygDMEDkeT3om9WxgSY5LnieKacQHnC1aPJqL9JuCqaxAnnhpYgLhL41VyeFL",
  "key22": "yhvkv8L3JQzHZ6z6tLJDzhtNPeVrUsuPBPzgsdqX9mmSpm3mX9FHxgDFmYFX1xdGBeuKXZ7LsaPNk2jW7r5sn8u",
  "key23": "4if7QEwfzg5WYR7hL3AN6MENLgkcGfw7CDAekfF2wJx6LnMxd44rxofR3xhpkGh2QiBrx2TgexkPeXdZTie3AA8H",
  "key24": "5QRe3SHRZSo2c7rzU3ygeK5AXkgqWjGeWCa7dtN5QXDe3W8J7n7ogj5oy4yg6aXRDee91LvhQ8Fsfr3izRYBNYDP",
  "key25": "3CLLy3s4ifVZhM4kaFy25rzzZQRggR5XaABxFDjrqvMzS48Z1rQLQAE46zEZFqEPzmnTefdSpyrhzBTYArWKCMDF",
  "key26": "2Z8bkatHi4V9muDckN8Wuu8jLEZ2R2tA8izFoNCH7Crh9adSkozqqKSHumCEYeubGcJtrrVzUsUKjXGbf5UuuPjj",
  "key27": "3fjk2W6KvxziQ2BUUggddEGrB6sZd4ao8T5EVEsKDry7k9GBd5PGpwVm5cnS1bWXgqtiVgVLaWgdvewh7kiT8ATY",
  "key28": "2hRpuyVr4MweNUj4N5rLEW6JR4Ku3zxsS3UptAsuwY2UoF5ETDNNFJVpLkCRSZJ5irUiRzzffdNwwaFbHRsnpAAv"
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
