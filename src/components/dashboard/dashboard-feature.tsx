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
    "QQJtEs1yJqCN6i7WVn66xReNyFTgJDiZADbiJ5fnubXd1VQx3aXVmH2Yr6HJGAknnTQtezAAMUCXgTj6zTZPN3s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "txJqHQPURZETKd2gKYYP4NAo5HRCKAksiGnfM3d599EF5y4TQ2r2L7q4VAQ8yFjJPhTTCdjr8tnba3Z4DjMcscC",
  "key1": "2kDvmEccD8bfvxYs2Y5RuVhx9zZo1cu7awJuDC9NUpZjbhriVXaLWvVyrWXaZQU1xZpzou1777brcBv9Tj8CBSDn",
  "key2": "AuFRnJz8RioQhwFcvdZp2Ga1ZUHDqogrdHBymysiiGdHfreLswCcPtFCG8sV42ZLSHDkfSfDyb3q1mbPwLq5QDA",
  "key3": "3FNm8cqgdbVvpBtjiCXaxKUCfpRgTFMkpfQzyVfNBVweRqbvhXoeq89oapyAeej85Hem13H3GByruHKdMtzNSQny",
  "key4": "2jrg8pMd8JbfgjJcMYsfgqx4vVkRCLWTeX53qo11k3sm2M3c5Nsc9Lw7hm34Fge1aYErggRxZCkHF37gZg6VqJ7V",
  "key5": "3sHppj2ngZWvd1SSpNyyoLSd3FJB5YU5y85trTVGBiJjwxv6PmrAHVj9PjaM6VBRxffoQCVpV9qKz5zjsJgq2LXM",
  "key6": "4RgVT1Yx8AjWEuKFCmwyWgmQ6RjDcvwzD3hUf72NLgWE4ECLQLoeS1nCqnsn2xCXtQHWVXdu63FtPQmu2Pppjk81",
  "key7": "66AJkQuMLs4Bq2BmuLYyY91Dm1wn7pyjufpoK7M3hsUqT7FG3HGiqD6B92V54YyBiHXpTUF7kK3wBTKQCkWdFi8r",
  "key8": "2t9BV7XUKVcq5YCTC8iFeVd6T6AydLgFawnwiyQV83AnwuiE7UAdPvE39VGbEfdsFH9KJnu2gdt64dmv7Q7wnqX6",
  "key9": "5j46t1WiW9Nc2vQjKcBSdUCVREg8Zzs3Cktsnda8dU7sRjDNx3ukGJ61aEro7Jr6NhbEJUsfUSyaRNssbQRUSyrs",
  "key10": "2qCA5kjcwcVvLJpRkt9BvKERToPk97sgeYTWTq92DMcMJ6jdWYC1EXdFosE3iQcXgP4qXe3Uen4LGT17BKkztsVn",
  "key11": "5Epgsqg2SXwr3JMTFk374SDH2C95vrxQCKo1Ea18hyW5ocoZ3peC45gZ8jMbKuT1mPRvMv3bhqeiDt9Z8ojhfLad",
  "key12": "4nxKF43EQQaMGNBkwEwCM5nyfaTQp6Xg4ArtrQwVuNikYizKTrcxiNFRKpYrqwAn6qUDd15JegoPLXB9r29rktGK",
  "key13": "GP7cNBWjwkem1ThrjyrgAZPuUGT3edy2fLUP3zK8tctCCD7ut6z7X11D6qSVhny7DfVYsmfhNibR19in8BbRAWY",
  "key14": "3rM5HrQQzXVi7F1wNR8drTwTDs9gxDBwJrUhrHYKaDdUYBSo5qeuu222unsvqPNaYTeXBoU62PhoX2q8M9iSpisp",
  "key15": "BRXioSnpZFa8cTMZxeR7Zz51sqpAqeon5u9GgepCGrM7JpkNJ22WC6CHXb22yMfuswRzUZviVWZwr5Cv8KCLASm",
  "key16": "4V3G6cekXxL9bYxCstFSbSSNCnuqpD3i3gpjQ3oMi4u35bYZwDqXHSFqFiyTU4pgWKP3oQwFXPXKvRwMycGgwPXQ",
  "key17": "3uWsxFzE8aKtP221XuJXDmAMqDbgEZ9iwc7sTypzhJnjQkZqrVfB4zdZFBEdyGkwshH3BPcvr1mnz2nYwM5R2Quc",
  "key18": "3E7oPsXM665aHfAbpDCcS9EStMRzgDMS9HRxwQLYSwZRcChNN2iwnDL3PrJd4oe9VoK5vc1E37tTfpr36Eg6xHbf",
  "key19": "3hq8ziT4Hw1y1SXhxmkVGzxvSX7Y1SV9G7dy2CSuAVod3fAnbkDeHRGvtZjWBXMTU2dtFTWXzXe5NaEa86962y3x",
  "key20": "3tQjynpvbQYxDsRpYDY685u7uY96edqLDku1CZkHcoHXdQnLxznevF9U6DeLQRprDZKXFiURuzFmzL6GmNH8DVZQ",
  "key21": "5EonCHF6cVfEpvfoS8Rf1ZW4mej6tscyAJJQLbzWeSYL7kgUn9o2tmLNBDH92ZrfQ9jGnaiPwvcPshb8KvtvhJrD",
  "key22": "4ohSSpgK74E4nhQhy2DnqtPf425FZ6nh19hDEPnvzLwYaVyCk1DvMdAzyZS8boijkWKq2LuwNGSBsbn47Lrgb3ZD",
  "key23": "4ZD3jiWL4aJ7hkMk3UWkKSJBedYksq7s83LXmqa7ys9vjwUDVmKbyQj2g1r684DXNiuPrhJpVVM5S3akR2nD86EP",
  "key24": "57KfUEVLpgVpZ9hnKcF7tKxi4AiZgCv7cYT5ZSmfJo3yrYEjTktF15uVpnTiXhuFBpiVzpLDSfpsyyswZ78r58zU",
  "key25": "bt9DJcWHBTheARoEWYF5UHjJ9NWf5fe2E4GYDumh1di9HUrQQvmjid7oc6UguaH55ec2jpVZ6gTq5WbpWcvgb4f",
  "key26": "3CUzmv4E4mJfQDmvuhpoFBrqrRFVj5rEw2XmL8x17DUAfLvaFQrCDHHsiE6xK3CCKHvv4Bp845Ec1tRNYxrB1rdW",
  "key27": "3nrxsWwVEtzZaxwmXUmdtZkKJ5AKmqTbX1KAuUvvshCjrN6PkBoRxqPfest6EjXSSa5GjvZc6sfiN2kT44WxDZEZ",
  "key28": "3XUC3sChmqwmFSoPQVVBY6zy6piz7CGUrY6NeSoTwQQ6oZPaC3e8VaP43YDvEJzdmKskymx87tRQd4L18J7Eb3Ce",
  "key29": "2saW2eFQAGuLFwVdCk9Jq36P9SiCQQhfUxmuj5VNHNzPGL5F6PM13e7WGK5NZE7Hf15EMFKypreZ25DxvPhJRuXc",
  "key30": "63UGHKrPjFTQqvYdaibPTXF6Sa3bHNqf8LKwYPDquATKk1T5LBFhWRdSgVtXMRaUtcX9L1xDpAyta6bVPmjJn9S4"
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
