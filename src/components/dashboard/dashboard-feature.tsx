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
    "2GKoeBSJYnqEKfsaG74U7bxwYHJNcDpHqHF2wHgd7roBjWSm3eiHWa8qyVZy4QPDdAjGdy45uE9jKRrEGsn44ELD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HS5vLcK9Sqgprgcc2ZEuSTDUjTT5MYmq82FrjzVyrLJ6DoWGEXjkq3umgPEYo5JkuXvm5uhw4AGCMDUWdkJDD5M",
  "key1": "4XZUPcVJ58CfrHbB8rjTxWiicnj34W98z98krx1r3X1EERHvk6cQfkP7A78iehLwg9mvjHh5DNkn3qbJuiswbcde",
  "key2": "2XumJQwSbLirxGcvXLTL8TX256K2pDsQSaKiV2bEARXrg86NGo7otwgxHspprb1AiEVTr9jFerBCQSPLs6TSWcJU",
  "key3": "4JA9tjZHcFV55jLkw59XZxcMGQTkyhE9PDm4J1skUWNYSLJ48k8oejqgnxPsBFFS1CpWmZAC5sLeiS3CizmPbm6x",
  "key4": "3xMZJQcY8jBHM8yfyuPTf3sgPUoLbhh6JicDAjGx44cM3zdCfU1Fn1nqFEeRsCD4dryxCeBUxBJYEsPNY9hrBbzK",
  "key5": "4AkeytUXtiq3tNCdauLGNeSuo8brUKRQchxHxvf2A5QRwzKB9ibuSyc4tdM6pUsbkeRpv2qQequuDFD4nxmoMqAh",
  "key6": "2G4oiiE3uTPa4wivMozp56dryHz8Rf8dwH21wRi3Qeam4hrEhqN8UhSYaEmDeoeDTLBbqitb96PfU6sYNnMn9vGs",
  "key7": "2vYo1f5vightBffdtaMdiSDZgYtG2FKFiAxmDAYt35SuFAB8xhkek48RSwaSu8s1idx6jKnSxseTJou3zjr8Km8v",
  "key8": "3DkMH4gVbyt6QVfpynDhnVbuDCXpYL5pahhKSbKFHn2oxN5WJ9rb5VUULWaMUy71hd7e53HayEPc2dMzrtNYQhde",
  "key9": "57xgHcEBGeb4zEgYaPt3zAEfJvJicg6gjaP1FHwaJXevzq6PBMKcoUK7trdMzbmRJNoJYNcnS4oTLoauVTqgHpov",
  "key10": "3RExNsZZUsH6TPAU6ZT16dAiiFrAr3PhpCBph9mtWV6S6J7AcDJoiLyayzxEXEwdnix2dsKMMzJ1rozbDQwWFQzN",
  "key11": "4AuENtFbu4oGsKV4g5VFaddz1co2V9nPMFVWtS6cdwDDeajYhHXyDeNGf3Nr46WhHT2tgLeeyycXgQPN46Ppva9r",
  "key12": "1oRM8MuR419de8cf4FDH4JNSr2RSAfG9H2QXGfVgPHDD6zPudmMZsvWGpxWpv4Xo86LiBePnf5tCnnrMJ6FdpDT",
  "key13": "4DecorK71NFpctEoxEshRv6Kojp379cPh7jGJnwn65WS2UiBmeaiEW8uXB12vzEojjUSxJkd6jYKatXDoxqQxpPT",
  "key14": "3svt2MR5xDEGdywVHeSS4xzT4KH7ABW2SAEJr9DjoDZm8FDQ2EVGhMnMXDMtEvewdYjzLVuAUkyQckS3YBeMX1j6",
  "key15": "5zJGsdW8Es7AgMd6TCpdNaVtqBXTkQEBZRC8g6t8A6tfViJxdx8KygZviLd9v4U9Lx2Da5g7QG9B2CJejdb8eRTX",
  "key16": "2hPQSJFe4fTetAUeFJFn7JV7TWvxPpwe9tuqYihcYKujd8ycqnxFTm4evAAEEhFuSxpkM5VDR4JpraVbCNBtA1FB",
  "key17": "2b6Pf3LDo8RWnXjdcfsWufHhr3icWfNmwcDE3xLU74qCLs7TkvuTZ6rgRgYurVfP9Ar3bwgy6D9B5f37NX6MZtXw",
  "key18": "2pNzwiS9QAYar72HkNzCU8zhYt9fCD4AX8N21cy1rx7hMQzk4kLr7mUgEt1NTZSozXBwhDaAt9PZNYASMj23HiRY",
  "key19": "54FkA5xmFBVo4L76NgfLya6hdRM9bZQD71uqnHxrVqW7HWMFGgBeqREev5eh7y7Fi5G4mAKMwKLdU2eH7ryGqhZm",
  "key20": "59B7d4XKYxruvJNDqyfzKDQ74ZjjU9JbFJRHEdY5k1mNsc3yKdyTdvn5zddfjg9KT6a2q9J9xxniYWT7RaE1hqfJ",
  "key21": "MBhPZ69rrGtLLXeUZTDVuvnBqextgAKG71qphmcLy9Sa9JX6vGxxnBqvYUm9oGnTYJvYmUbZZL2hXXHG7TGppGY",
  "key22": "2Kzyu484RuNq5rJErsVKqvjSdjcaZJvdfhjg2Wfy6AqwHzBaA8Cy6nYyHTEUnFfx4q4jYq8T1Sbpx98EixbQLZL4",
  "key23": "3XWDZHZrHnTGuEsihQrY9BjduorDZrgquKxwrmVWAqEKWrXwDFcA3phDahXRyax9mHX1c1XPVzucneYCZe8HrkEa",
  "key24": "5EjjV1eSwgBHq7khRtNSSB26pXhKAAonLxcMmNe1nWGs4YAfGW31kH5mU9obiR25t1odanWb64nECyPJ86SmfZzq",
  "key25": "2Knq6vsxwTbdpGsF6UZuanVbzTAXzdKCyBawhRn5F7ndebUz2a61up55koA58s4B3a8ojZmHC9hu42YwdQAanZUa",
  "key26": "JD4924LDic9NuEpq3FnSraTKzGXPq1sEG3NsJ2J3vCYaWHdM16zj5KiFBa2jDh1iipY6WnHzVSRJeKERThUy8e9",
  "key27": "WeXPX3CNpUMPY2vhDpnrCid9EZvNuL1oSkk8TuPA4X4vNiEjps7iFo79vtt7CNZrJW3p7SaFW6aLY1R7q2iG6ND",
  "key28": "4w9cRLAeA6LJ3XaBA8MgBWmT9DnpxNjL1J2TemUAgLiaaY6Nh15T4bu5xvDVG9g8yraTPeRrsvComUGSKfZqAQxb"
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
