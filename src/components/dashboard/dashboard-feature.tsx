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
    "4veyT41McU6QtpS4eNEzkDnGz1AuA8EBQFDL8AFhHxDNRAKDGU9ezvYN8MEx9SazArz4TRus4vL5uyyBhcNouogM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmKEhMPyRVFBBM4jFk6ynVxVwSyBxeVVfTtZwQVGjNC2RdSaR8TuagSFezGWSz8PR4ZDkwc5SWFegj4P7RLg7EU",
  "key1": "3gxU9ieVZiMwZKBgvU3EyNZjWSDDLbvSqie6tLXRgoMQJXtf5xV6BWsRPoC8aDsoWos4UwKUa34mqtopcWDNWjKM",
  "key2": "33ZgffCyhY45sMC92CUMnZ7myKfSRvmqTPQXfFXuhNMee1dDFJUNTYN1sYtM3UVu7Sws8g1xT6VuK75FJ3i6qmFb",
  "key3": "K8tpKrqwkZbQSHV9Eu1YtQyp4eXEPm2rPuub8utN89Ct7KEUfMCsS5t5La4far4noBhUSuaNLrRRsNA5KgKBdET",
  "key4": "55BBiLhWbnJM8ofvqFeQuUUwh1tkRAc2fnHkh3pSKKoFHTJvcp2cVXTktgr6Fr3TP4MtRYrLy9omyUw58TVTRrQL",
  "key5": "axp82zNXLVo7f5dsXTokLr8kpA7EDAYs3gBbQuuUPSmkjBvvh5uRSHWrcjN7fYYcqCLBDe4AKZ55rEta4XrvsF3",
  "key6": "3vjhXkh5UngCxAx4kskr5bU4CuVXUbzNMdeHSPwB4m24ipEiJ4eZXbn51jiwXAQhiGZuPiGbcUehVFt3UxCVeGQf",
  "key7": "3m8M1pawFfUGaf2sHk75sK2wKQqjdQJtKevz8dQhJrrWEBHZqny8TvvHoVtmHwnXGAnZt3eNkwTz2CywLUS3BT4Q",
  "key8": "3vj3SineGhxKd6rvG4GJF6Kx5dSja34EHeVnE9yC1jzRN8VFVNbwmGxP2wpR7SZPJN63RsxtzgYzHm1Q3Zs543DP",
  "key9": "5t5R8Ep664RiTvSEYKnfp1Qw5tmEmaiuwq5yT9N4zkJJHy51VYjAt3WskG9sAKPbvMFkfSyNnm4gEDpDoEzh5zXs",
  "key10": "2KeUhMonq4KLGaopbwZUojvPoB68JtxVnLSqF5VWzWZtn8cLdU1vJF3V1rU8KAPYh4scJLUh9LTae6ecBh4Ue5cE",
  "key11": "2GE6XZ7MKD3H69EdAXsy8ero3DsZG33hZiic2xrSRkYJ3eb82WjwQ77meH6EZsvtXWVSBop8JdEYw6zx64hV9LDa",
  "key12": "Eoupo7VMvTEd7PFncCpnd7BRi5hhf2ZEoKowk3zbV4gsTrFvHNeVNocZpJi7edbaewPMHSFfTzsERDsuroA2dfD",
  "key13": "4D1zKTyD61bGrdNdUURsRRB24dUGXfZop2sh6ujEdY8G5Rd8nNmbxj7rJsmqt3fkqDPbm6gsi5WoBqxAteY1FT2H",
  "key14": "2MAinos74nhwPhkyQzQY99vLePnvaoQvmswH3hDeSHW5rSoTVqNDsqF6JWZmzMrrc5oPDGq8FoqqkiT6dSjQXtKK",
  "key15": "hc1YnRJ8ufx5Ft3srmJ5Va1LDVNCf4Xwzgns656wmjc3kxq3m9PxdveLVu6jVWPJmMbEecrYP6nNVZE2DRTAoQK",
  "key16": "5qiSbDMEuAVQ5TXBprFpZUNam5yJJaJFEqmgpWQqPhhDF5emicd8abJixmQzrr2XKJiPsLYkGhxNULWFDsiKUzV5",
  "key17": "3TrVxMsxpvHAJe2fWf5doRpR2wuX5wEHGVTgEDyYqKEu92PUVbi2mT91tyfhThYQJriAoDUnFCrzuCfUuWnZs1oZ",
  "key18": "4TgUMax6e238dLNaWTnhDgHYZ5wT4XgmP2VKuhmUC5UbSnBye9AibVQFoG93o4ThKXuXbsqzwwB8jJv3oQZA6U2n",
  "key19": "4dsm8PA9C5MTQzJ7wermW6MgLdBKn4YZX7KGhoaB7iTtfJhqFadesZ8ckFBWG63KqGN5oFNd27Uyn1dAu2mZh9UF",
  "key20": "2GYnozU7cbEANpMpQoQHi8tkLKcT5Jt4NGwRprFc7PYamZ2VZp33FtteAHPYjsFuF6EdbrLpz29QCxrYGBoYAiRf",
  "key21": "44FQnx1VfdFocLzFUfDMaVum8tQhXjmv9UkfGPvgZuVzddV9nyKjVBKS1BtYJwNvzY9Npged3SoCTowpiTpmeemf",
  "key22": "4ZUBboGhSDnp8F57MaRmS1rQ1qQaBq8uYBoNLHEGLq2wKV5VVohBqroVoGsQAbV5Qv16ZnADicUHJT7jLjzkHGNc",
  "key23": "2WDUuUQ2iEmaQuviuU8gdAoJHxR4ke9cj616j4vLN6A2kiJXKzEe1ijtWkPCvAefe2co9gcbyd6MMizhkuiyhpyE",
  "key24": "3yz6f2hP72zoJHjBCAcgshPy8EkFxRvxGFCyHj2E1yEbzzeQJDeTXpeWMRUQeg9urc5UqXVm4X8gq8C7hQ3tszwr",
  "key25": "5L1kV7dNZR2f99e59aj1eAhpLCWye11BCsJBUZPmUnVNQadhQkrrQqPPJXCK9xz6uMdNddh2XeQmvCxsGKAusBJd",
  "key26": "3tJFNRQrwVXELtcyjKnqq13XnK13oqL1FnLnPBKQiEQciiLpMTyxQcW4qmCrbCWiErHTXsK925VF5ik1uwRwmiJi",
  "key27": "62HeS3bWBBrusHXkvd9ovoqh6pFPygJYZdQnPsAV7txt4QQT4UqPMmvQzbrZeKbwEbovqhRyA12QAJMDg7eSMYsm",
  "key28": "2ij3aG3mAWLsXgwfgdPfJJ2DDram9ErmWpoxFkg2HC2Br4aUeYpkKiGDJo6BvHkdHCvgAcjKcCV1Z5xM3GpiJEX3",
  "key29": "4Ffnnyy6ZpXSmKbdYQrMeDLrB7KjvgbtFGRmLJuU2Qdwce7hdLChRWyygW1AhCE7YFMCsiU3XmAU8inFVe8XGgvx",
  "key30": "2KSuQigEchSqYCV1dAtPbxsr6ZNj1oHSoTYxWEM5KJs669jK9PEdTKR3hnAoyXFLL8gJXgbsjQYAGJPzktQGTiXi",
  "key31": "DkFEY1UJ9yF6YvfyZ8wyUadAGonmJ27jTozEGCD9Ex18et5v9GbxC91rcuSbd5DwyBV2ApgfmKaj6udyJzAafhv",
  "key32": "3oQ7wziZFAXEWFxXtay3ii6yjCsA5yyBQxbKQBSXJgihY7ok5f1VsEs6s2vd1QcSSSM8iuaJLa3m9npv4A8pk7Wc",
  "key33": "4ycyJENk1B51SEwF4fjjW7fRW4rtLXKZ9y9o7CdbKvT6V2sTUjik9bRz6UJmG6ppK6XsBERKekEoqzpmEf71ipGE",
  "key34": "2yc11TM4pqLVkBnnwAeZE9GHkALH5eMqHBJBaNqLZec7W6ZwXteAv3acsCwweJ3KPtSzV3fqqQp1ChcR2FPP7hYR"
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
