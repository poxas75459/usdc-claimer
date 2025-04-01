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
    "m6r5evYjMntoAMjAcm1uxe2y63H52FWaDBFJ6tRk7sAaVuGUbCqnSX7haz27uYatWidP8gbB2QBm889DVXakyQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fEADygvUeshbEG8JERYNfMfDoGbRuXn5njZjSygPdJxab3L1duc1c5CQfvCMxq4PignUHF53YHWptCRMi9QUFHM",
  "key1": "3kQjB9ipBnsqULp4yxo7GUrD1QUdRwtDBUZm8RNAnjSW78rgVsMFbWyYsE1CFgjj57BWuh9ALK6hCF1ntDsBxGG",
  "key2": "oSaBfmH311Ekr7zTmr7LRL3hTpHe29J6zVAWx4SmrcorjHS2VQCWjzKiTCdGeGAWJ1Sua1RXVYonmDXD49iQvNQ",
  "key3": "jed9sZ2AmPTCZVE7s2jDaPej8TrqHFaw3gjyB2ZJTCrnKLw1BrtstrAcEa3hSsCx3X8HfCwfU1tC1HdfzSr2Rtq",
  "key4": "2wpXXJ9sxkbSGoonrT96wdmE4X4ocu8VTQgFFf1Q9jv3F1Ln1JTPBVeR5YKX9z8UnNAm5Hs5exQhCyRvgn8Tq8n5",
  "key5": "4quocW5eyMD6RpJBS58Yh8SiEw7bWazbpA9GZBmJmUhQm5UDC6MTeotNMNMC98qVcoRgx1YFUDxxQcG1SDQrwQSe",
  "key6": "3dLvjt8KRWPiJmmFs5NX1Uga9n4h5fBHc6i4x6nKqkFwSyh1hqJAuJVbiHucVDN9tqUdifWi8nzeaPWfuJJt37cP",
  "key7": "61pXZor5ZBbZy7T6a8QcVd2xFTTGEdpTLozmHwQmSjrPHsJzYUJHAiKASfLSgJgixCJfxQXaeg1VVp4yv5HEdjxp",
  "key8": "2vBs12d6gQ7N8Ncc7usQvAYufSMNWRGXBGfdgekenBxAW76m4wtrVm8DsXmi1h76BBx8rShsr3hYYNPNcWNy5k3p",
  "key9": "4MqgWTru1Zape2P4hJVLkbDZMgLq1xHnxP3163K75hDokG3gsKtFSDcsd7dQVjyJqq1fEK23iCvzfYk6iL29ovuT",
  "key10": "5fCGZkhkHNyoSRgXxiB8Tw8iC87G54z9EyR9wBioqipSW5suSDmTQ1LgSqSqHw4pP2trZYDG4TQqDCAyX4V4MBa1",
  "key11": "3rRKn4kRNNiHk9seWbgzKpRgGmeddLXDL4xyrr2P6xcetX37T5p7zQvqB8j9BGtCPb3nTSnxi88dggGi3Ea3nTYW",
  "key12": "5DxHbxtFotcWr64NpoE7Kru9hvmRQt86Myn2AVtoGC2in7VfSgrnn8ufeFSsTaxs63hDwRw5BeG95PpRFYpYv8P4",
  "key13": "2GZD5BQHiFXNLvDV2qWzhGbNQBsTfcFk8wtXD7ChTi3B2bAvNXrZD5Y843fqKQdZbBeF7bX3saxUf8snouXPzZHg",
  "key14": "2imwf52QUpSgFwmi4UpYY9VqTLmLJjizKwTv4WhRVe2zzxC4sPNSe1SHmFXrbxvTNjShysfUbpPqGRnf3Corrxgf",
  "key15": "4SEU59AjqEYto3h9CvgeHs7pA6vaw4n2N1XXuTytiyicqRUAe1ZNGt6AS24gSt8sgrK7FsjzNz993WXnAypi36hR",
  "key16": "5YPXFd1d7J3fDACbzGw3mXsb4UVha8VUnfJj3y3WUrgF2eewkmzKVWVwU9u8ha2yJ8ESxNLrqvkDbaeRCAFEYtih",
  "key17": "4SpDg8ecbXiGMjEMkH1dMK155Z4mhBxsdXWtYcWbEaMZAHbvZ6ZT2M8budMH3tQAwWjoXxhomNfWangY7znoRs4s",
  "key18": "51TXPbwRauNSurw5XGdLDyouiTyTJuvnQJDU1kcjfAsBZZvsKcFcKVmSDLMjWoEwFmhNxLGg4aoUsUmB5WGQJxUT",
  "key19": "2Z8EiwAgcv34CLtczbCyRHES4WPSk6GtS7ux4h13g2ehZ41EB8KEi8MaU5TMZ39Rjm2cyQtN6w94TksZ7uaDhQKG",
  "key20": "5MP2nDFaiKnDPwEbdnS81J7VSyg5qM7sDcx37iLfVGdHM5Svf3qC7bsvcggbngNtgqT9NQ4FNaTZ2nkygotShAMR",
  "key21": "2PqAKzpQ3z7zH1SCevke9ML8i168EFeSJx98NA88FQMGh27vB74WomhmB9sRk2VHFc9qw66c3d9gfbYKnGMkTf7E",
  "key22": "2tUGaerNVEXQKrawG866KzWPGmUMwf2HkLqDLHmMVc5u98Eur34mYfNwiKeHZtY33N3ekBDfqaGjg9vd6TuZMYrF",
  "key23": "3c3tteTx8yHi6gRvsuVbsRFyTjpGhieftRtuHgPVVWJRBxCUWbftWgx9DuB6wz7E3NkBigoPhyej5oFv5vMTCbGR",
  "key24": "55MRVeFfx1v4dwDmQwZmNwP7wRN6Be3RQrz52BoTnL8mbnsHUrYcg3yyvZ4KZ74yCeDfiSwjGQv7pv9YnVDJHx7",
  "key25": "4BQKbB2DD7VtbZfErZZKyYwf2TV3Y2HAcHzz9Rj4UPCshSsqqu1TCm76qw4FqMLquKyJe12JFCXgcH49spLcipxr",
  "key26": "31X5FjzpFfTkxF1BdMgNb5R3kWoL3kEvZrQg2oavUKSMze4zEU5kAUkHo83BguGdagnqgYsQr7jqGx8Ud1fxaiAn",
  "key27": "3f5QaEHcXXwZW3CGG1WXhD4ERXNpZEGMyH2gxf43vK9VpRj1Jh74BZA6b9raRCAZcBWT7FSeoexCP7DdaQKFSvmA",
  "key28": "5sJ1m9qgqZGkCU624a1H5N6ZzSQpSj2DyQ11eXuNBHm1ayMYWbq3V1FWMEVZi4cPsm1eYB4f6F3XHXQMMtCUS2bK",
  "key29": "5TKLhaR46qPfVFMCvWbamrXrcSwimT1FYGoL1HmPAYK9VuzHYAc74R1evv9cZiz1azcGe7JmxHZPLY71gS8HwSdL",
  "key30": "5rcBJWVGsmNwVGBjFStKR5mSqGdpxZ6V7oTS5wayuKr7LMD5Ftor2WLdNkHTMn9H5UAtjAib6h4beMxQmD1KZiHR",
  "key31": "4ERYVmWUepphnWhgNYL3pgVRfnQL5UK4S6oYy1PTRmt6HQqfX3QgD8NmNtn8aHpa9uo2cdkAxAEz8tDHg9mjmnWq",
  "key32": "h9AiwYia1crgVcgC9R1dx8sjw91qqBDxa6SSCdJX1nnHkyKJjb3M6aYRgUr4DpghQBGzmvwZkjpwqLjm9ZY5DUS",
  "key33": "rnmgJDVPMqbotmBdXmMkkBqbBcMUmAkXFAvWMNckDU1LHzy4hoX4cXkvXXZ9fsEvFQRLGufWQepoC57RzuVwu36",
  "key34": "4ESQWLdBeGYKQswEXTgy1c3FsNgJcCZ1kQCstuV2kF6Ascp8kmz1EF6UgKzbzAsMt65xz9b6TpcQtxyoDxQdM73e",
  "key35": "2W91y8sPifVRDiJ23JVAfpZFyoMZXb5NjqbmZdXhynfmZzhWxHt9Rc4h16brRKEhPMML3pNif5RyxPDdxwezY5YP"
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
