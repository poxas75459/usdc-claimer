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
    "4ga68hBZRh8kUriWehW4GFox5k1W7Jkv4JoH5MyZvcrMwtNYsr64HczDNcfrfww91Ke1Wxarjy7M65h6QgjyNCDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XAjkaF49oYsCqnHekFzTTk2PNzYQXTE39NSVTTVR43Q4JjXfhoJFBiexQovMiFFm4rYe1VfV8LnfQXU5Aas5BMT",
  "key1": "4dYUenozpWykhxzcMq4j4JBUhmJcusMGjChbrvP79e4gkghadwXymYbKX7tP7a3wmdD6MojsfQ4hhuyaD985wvrz",
  "key2": "2jTexFTejb3UjX3EkqQrzs7CM5W9zaecgFoqhzMohbyR36AMapuFg1M3coCUS97cQTGtzF68kY48yfjyqTcNx1K",
  "key3": "hsQhhxmPUNuvZ7u9zNQy175Z9c6uk9LoV57if6VBS6gPWiyXaj2iGaDyWqEC7Tb96xmzWSa2b8MdAJJqNcvDd3T",
  "key4": "5UggZZkx4Rq6yUcHkHbTVYqGAKQr5RSd9FhYHWR8nJmiX1HSFaBFTqddESFrW88oEU2tx7NgPBhfgwPFZnbGwVHE",
  "key5": "5hqW97ztftZNu2nECxxpsUkmJeooqbQFK7g2uSiVfMMLwsntAHUVLcQAaHVrJk7qkRvfh5E6a8WXdivLeXpg9zny",
  "key6": "4Pqmw7ph2vQkwGkgJhbkDvFuB7xvu6vaxx9JgiUTwaq6vyzHqx5DZKxV953aWvQtueeN8rWpPKgKP3oGeyfXERLt",
  "key7": "5wAnVDHMyieYfs2MhrdVJxfyAnzVEUKkb6zhzuVJwxmhPG1ay4eNSaLukSKJGrFpy6kWyTMWyWhSGC2sFxAwwbeM",
  "key8": "61t7cUjVPVMLp1SpBqra7aLcA4PBa6hSwv59hs63Rn4qhyRuUYJUtsvftCt1bBqvfRKkwAwDdtq4Croy9E4hDPUH",
  "key9": "3RBshSi3eyYsx8KYS17Yw5bdYczatvcEJkHjEdWJRchQHJYLdGEAZT8F9W9rYGjFdzZKiZ8rYyW5D4CRMkPmCtQF",
  "key10": "4Lwq227HVArR8EHTuJ5LquqsxKuxWbbjnRmjqcbouAn1Lpbm1Xr2QEU2dDbtgytD7xdLVWXqxNwVgTZ7BhEbPbQ3",
  "key11": "24mUZmszGQDTVmo7xQ5JPMEMdHgmWHzzWUJmoaYmrmKvjYrwweYfimmN3kToEt4JJZckgT42WssWvLSKgkdAq9Ka",
  "key12": "bk2H6ocyNg4qri4jzGnBupe7seSYwCLUjiqPwYRLH9iEyMDBYyVQR4o86GEEXdBoRUFsMCmGRGBQxL9a3qgQeKd",
  "key13": "3qCNSeDZEYBJef8bkvUezmw1pHZUrBauu9SoHeKFrT7Y9WppTDYiJZpL5cYpW3MGLDy4KoDDFtoebywcJ4HEes4c",
  "key14": "3pGFX1T1Ng5JDi3jwnciYH2CWEiLjLaLPc6zJ7yp2SmNR4dT2W6S8Vn4nrLXPont6DKV5YeEsmLJgLu3xBhzQvU2",
  "key15": "4sDXtu9TB65w2VGmMMvytWrKq4KyEyKHqnuXFgaErg7qiBPx93NAdnmhhB3WTNEHaq9nNEhwfh21fTZnJt2iRWox",
  "key16": "bfxfGqm4n7C1nPrGdemUXYvYdiLcBaKg22QxtgkVipLD8WmFfJmRvVuxynwbygfr3cPffQiocgREpgqLQZ48pkp",
  "key17": "4g8f6Xp5QRhHVGUgeunQnfASYtnjmviu5jyLVZcW1dujf9LKhpsa4rfe4zeYwPevAfDponkU7rQE9D2mynt1ze5W",
  "key18": "3pDvCfkGT8FtYHMDCNzYhZfSTmZ87QNQb4MeCJB2TaTYZyN9AVMG48yAcTCu1x4LTU2S3uhGFV1z6Kc6qyQxhVdE",
  "key19": "5H1P3eez5zvvcc2fiYFP3QraJLa45uCebppo4c9SE7ajrWVPuCGMNEcMrSbuk2SSvxB7ZjYpDDQF57Eu1PzGc2RD",
  "key20": "2vCJRR5swwnZEeiTEdsHCrh9LyaQPqudDGy2gQegcDMKBej89vamc8RzbULS8JPPZmbSJfXvWYp3QY8xru5dHPL3",
  "key21": "4ncJFhK9ppdHdkTjGLXkU2WJQK4beaW88UAmyCF75g7fe3zUJ4fW59fDuM2LNZgMEYyKz6KptKmJjp6DXtccKn7H",
  "key22": "4Bh9QHtZwhBXTzZnJjyxFBncux28S2LZahRR5ZFQzJuCCvAc3j65SDvw6dvnSBRrpPfSUnAixte58Z44mSsmZvhq",
  "key23": "fB5W25vqwrqvra1pBNUtQcmKyyA4hoG8ChSFZyeckAqZh6hzLuFpokzjtDCgMEhzbxF72twENgtjReNgGAbfY8m",
  "key24": "NLBGFyqXXSWEJh2byhHkUMNadjBKVq6hikAQ3hq3BoXotEpQVtmS8jVSVCQdU4g9eHwVpY5S1rJC2vEF8t3uhd1",
  "key25": "5jN5yicrCKPmi9ahJbrxNJ75rE3dV1X8ioH4FgvNFXP3D8fhSSkWh16SguNKg94x8VWgYn7zPXbSrkzNveoJZ8dG",
  "key26": "GvwoWPfDivTfhEzXtjLS4Ezz1onUv9Axfw3gvcWxrNqt2pWZQupzpLdg5isDhPECkrm2kXgS68jKHCLVrmVVE8r"
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
