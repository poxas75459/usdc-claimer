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
    "rxe5KuAZhGDtVpU2DzAdYg7CA2yzkCFpR3pfZyut5NpxHFcNMqn4e2rs3o2V6ARanN2jew5PBe2ReQ2uT8pGsSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5836Ub2jxdR2wxQpfwTWYwi6c2AYafkQLLRFghXUkkVPP2e5cDS35xMgodVkQCtEUTFuYHPchQfGrxUDvJwiS5",
  "key1": "3dgfREBBx3Cg8g3h7h2CbT5L7nWUFwqi4tXAjT4NsqHGT2qvYPieNDGVrNqN5qf77tbwVFzVd6WYUYLzXXeXhD25",
  "key2": "3Rt86pfSxg19NUgMiCPuunQ5NzeCZLuPK8g6cJ2ZPXzuBCnhtKVEorJsi7aTx5mMaNXbtKLEm1N7ekMg9mhFNAQk",
  "key3": "4PYQ1G7aqJz2s3FkwYqiohhv83ceLuD1P6JGcXqapZCLQQKAUW2xeUVSWck5M3dgp7zRuWJmpcKn7nmZ9umtayq6",
  "key4": "4jjTDawzQ8gHFgY7u8wQVLyhQUA26QLpnVwh7TgMk7g5kBgHherZEnmuTofmtcdxxJ8EQNm2Aem1shNeuHXGGipc",
  "key5": "3g5msYB1umdUFD97skDRJ4v5yytL3NBy2QwtpUFUZGMuZ72FrLhXH8daG8UcDSXp3tXTMqpAMvBeAJLCMJtQVvxq",
  "key6": "4TYpL8EzcsY66Kcr1jnfFX1M5ySCJZy1HUv7teURUPhxXxCKfLyrgv93zhq9XbvisKchad7atGLs5x4JkWUs4CG5",
  "key7": "2gYUjiZSnvCMGHja9D5MWqmzB7yYTVqcRLZhEpqMWPwSkgKyYjpAeEvEGcjdxE9pkywkQkNtdLPgsqDrvLLEtusQ",
  "key8": "2YrvXWeZbuNNjpK19tdFuUcyFiLX718Wi2Kc8KtRzgV9UBoRbfWFFMpdm4ZntTGj1NJTDigBQRpRUbZ51FZ3SrzZ",
  "key9": "3u43PBZMuzmsEZfJuMA6hDQD9z9VAPQdNjYymn5siSsXdL8phMs2Fv5E8drYkH3kRrR2aTHUWtzd7ot313fhfm5x",
  "key10": "413hsnHEL2372oQsfd1nJvdLCmzLuUJVvickY636F7XA1yNjZN1hohqNMEbeJULXxPpSwwdYdotThzfZaUuZotYu",
  "key11": "2Z7U1Gwe39K7qbT6h4Vz64nDZrYdhfTmR8Jfqpc56j82KVL8q7ZBt8Qnx2bNHnjcHUw1Vsv7nAAz23TdWM2Zobbj",
  "key12": "AHvaqFphZNCEAWx8uLMvWLz3TMymTBphd9yjRsa1e75896fuS7dhrSpSsi5PSswaFYh3FjfREHNVe5RuT5EdYMT",
  "key13": "5v2HUi1bCKmvMDCucorTTyog1nYXnLKUH7gn98HeN4Bev2KYiHqRKumUhMyULVUsUnZ84GxJPcn7rmd7yDT8ojq9",
  "key14": "J7VCxnXYcM6QuynaxyJBPuJAoiPdA1xCX4kUdR8oDuQsH62yeoaCKoDjR1VV8j2gtWB3JnrXyJnjrx2vGaNcaXr",
  "key15": "7DvYmMRD3ZtpXzv5zbZuGfAJiAEgxvGw1hixnzBibEqX9C5ZKs9EitN4gsGbzZCQgkaCjAQ75tEiC6f1KwnBQUU",
  "key16": "hbGuBdJgKp8iPcaQNHR2r1qPMfsQ5HaW9AZAZRUzrX9MeJ9V8ewzQ7ty8g3KL8dBjCfHiZEebEdyz2kmvs276XH",
  "key17": "2SEAcNgCQAMeYchA4J2YUz8Rx4AxWJ97NAUMiCpp7aqrnWSPFXeLhDqrKMrPReczQJESTdiyXZXnxajgKDU4dkgw",
  "key18": "xvCu8Kj3asa3ANmc3gn43k81AZyhRebyhschpNALhUcd5FAkdfFkdyBhdmyroEnoh8sYjFFF9KAkWFmmJUUXpRe",
  "key19": "pe9qoSVYvJJgSpYpgJyDfguoAZxERxqvjdvNGAectq7N9vHAzENKdkkQEjfwnjv8Jvbrxvj51MjYKt8odLWWYJd",
  "key20": "5iRRPHDUcCYn1EmsRrLgga3jUckqP12gsfpwauTD2SZQNRfAKQzKtYRX49RxRH9BY9zVohvEm7QrU5iaNAmRJeFY",
  "key21": "2mXeJbA6sbtjEmLSnV4yFgmrJmknv3YaFoUJNgV3mRT3LW3YVRjKeVE9xgDRqSa46SnBPf6CdNtWDwPSk4AdAua1",
  "key22": "2paKsW2q2JQDxndin3vLsqmYJiZdyouMsprGhi1QatJ4NhW7Lyf97wdsQNNNhJUSoXx3wuFGKjNFWFrHMVqgyXuV",
  "key23": "48u68Nj7gVc7jQmgtuNLYMvDRLGsat1wCfDzMXp3cAyeFcUFPva9s96chLyKeDsAHtunPfCWpYbyKwtfSDtBFpZD",
  "key24": "256VmS53keVgMDmvVa7RAqc4rt6ZJXqwkuMJgTquNgfiSevSwvW4eLXZy5PkFxEzZjKwrmv377SSn9q66y5sAXGf",
  "key25": "2doo2ESD854BusRq141ReE7NnZpF7oreZV8VUHZAftxNDfBoMSwzBp7LDmxGwhBLTCL3THqXc86a2KMkpZ76TYRH",
  "key26": "2htbrApJPiWH1R866r64vPvXd2yv7VqtvZKWrAVfT7eo91uB5G3Rdi8YtS83BXAgL5VxReUPU4JznZYgtiS3Y6pk",
  "key27": "2Tuef5Mw2RdmRjSuxB8jfKNJyFghRB49agSsDmjoXg5aJ2B9w7yvViE5r5mQsaY1rSqyHNt8475LMpMhq8wmgK7A",
  "key28": "5NGraAHH7FwaFMbgKxKM612y5DjMp8Ap1WvHzPh8NW3y6bWwueagBtUqRpFArC3mqzgs4SHnPU9AxEFZupKJfrhv",
  "key29": "2VzwbkpUCQM85q7QsWf8MiUzt9kSYEWzMqMqMPrP6RUmd5nJSAvSVSK2NdoQUcLaSBKfWkanmizcXFwUoGfZhWtA"
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
