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
    "4PwcVyeDwzPH3xpStEbDaGGVcoJuMqDBYDeCMkw2hjSpLV8QkseUzGSwvDZPkHC7GuVz6oxU1jowhZaxV25J39v7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QZei2dVcxTeDsguYZaYoQYbvmc9JuNWaQtggLdv8ijBJi6Hup89twZqKvboMbXCK9nw6CA8bHKcXof9FYxUsD87",
  "key1": "2ESSL7bTZ8AawQTaAcWw99g39UeU1R8HXsFxy69hfK6ZCunyswmFuKPsiMKXTvTbEtQoUHpM5th4btgVAsVNY71q",
  "key2": "39WxTPusYbp6Z6PmUh7uDXQuuiRhSLDSfu1tc7BF6mzeqgTL4ZzZWwyazim3zXzDpexNJfMgLGhvwTdspnpDyHRz",
  "key3": "2QGBEdGb7L58PtnE9R9dMJAuprFGKaeUhubrq1iiamTbctSxV1apchHrEVyTB362cPBW7H3qj4CF8fYv5opxwj7p",
  "key4": "6p5NYLs8RwwsejXV6AnvZZFy6D37FqHxWPZ17TSRnpU67vnRNgZtefiJ2zLLw2w1Dci6zSB89ZXSyAxsbSMiUsf",
  "key5": "4wMhNbKC63P6qCbTCkBM44hqFJ1hJCpkyhby3yTqXa2ABiX6ZgkZsTTHzL36venmdCEmSisCnwJV131yzNWnsbc8",
  "key6": "4pEAkzkkDRCpgPkGp1CRPyw8z3HWvZZJ1cuzDjY2Yyc7x9JgnY72naJWoXFhaWfhKReWP3ypjGtpDa4VKtEoCBRe",
  "key7": "4HSNgthgS6zNf2x6iFJRQicjYbnER2goBi2Gfh7KJ4xz9JmjP8M3q6XyaKqGYMfC2bzJ8MZmqR74M9Th7PUpS8pi",
  "key8": "2xsZV9foWxmuhczEvvUutHuvkTLNHke13GDW9AgAQoFbL5vihirzjzRD3DE2q3GE1xTLJ4axWpioeEukgU4YHHTT",
  "key9": "5Zbkk1X4QC3hZbeaY6Z6st7P5DcJEk9ZxjuE8EJqi6L5DUvvNkEoPZeM5FstsWsQXnXSeYQMRZqiyUVna7cCBwKu",
  "key10": "2umsdwS3ehgqrN5m5P2VJkZFuLrzuj5qfoT7P92M4eeusnjvbkrPJZVk7t1dV36zcov4Ti9fojiuTpj9ZmdR4GBT",
  "key11": "2QUsH6vwi8tkSvMii6GYtf2JevoXq8koY9AnvXaL6y8q5VBWxh12CWftsMWGqF8i78Hm2GoxVEj8CM9ZNyUExWGm",
  "key12": "D2AJ9buRh1UqupPqcetb7WdKPDHxbFQqmK1t6QgGbk3tDZ4ejJ2WJF6sA7dQcR3JtYN1edfdK67WwdhdASh341a",
  "key13": "K3GBHN1X2WKub3m99MsFPkhxSbW35kaPc6X9JdhKzgD4kxehrEMCBPUuhCwMDFWuKqMrFj6g8z4cfgmNZJLYaj3",
  "key14": "3Vq47zVmo6ScUhaFJbV6793L1jC9jQWv6dtBHghApAfNiDUimy8HQZdJVJeBvJRmQUE4kzdDjuAP8jveb1niuNqW",
  "key15": "2Q1pkp8sgoKWabnT3NsePHS3RQmYuyR4ScQFWdT4m3vqtokfgMaY77bqBYKSQn9hT5ozyTPZi26shobucpD8A23h",
  "key16": "9yZvTanjnJ2Wi6jE64av4NcgoWWEtoi8Zhhr2cDdSfJ3TW6mQQjaGJizw4NrZtfaC9X3ijjFCY5edBiuZpdatb4",
  "key17": "3KznaxCUy39Sgy4wpZzg8gekU6wbdvDRY4qFsJhQsTioREeLkuLxawq17hC8GhrzF2n5S1vZvFk1EWniafCQU2MZ",
  "key18": "5LrmLQPbLuRaAHsoLCVmeeLTZQJ7mJ5hVjg4USnT7v3JeZZutgm7hGB3uHcqmByrCz9hVXryDWPM4AsWQNnWNVGK",
  "key19": "2CMTqo7DrJYx1q3JvfQ4CtW7sM1jz9DVg5FiycNr8L5pcju8qAHrAWE5PmW8EWp15dHzoHZwLmx2a3fhQYxTCs7y",
  "key20": "3zoug1xAoHhXvLEoDXneNDvpjFoRS4RHaivDkMifA49f5Q99HBU9pEWwfxehso8Wjtnji1pnVf77Sj3swHh4scb7",
  "key21": "3tjkXtN3cAvUJT2CjvX14RHeRHtp1VbN2pjWNrUrgrmVtSHdaeA3WneL572MyfgzkgYug3M6HL59j1fuyR6qQbGm",
  "key22": "borPtzD3Lk3jVdpPTQkhbAbnFQZ5zCf6kQEUHiTqSFttRx93g5BKCjQrac9dzVx1uyhD1nNscHGURdHNxDsf9pY",
  "key23": "3NVcm9SjcB5wiZFxiiQME7AxkRtKLqYCWksGJYJnNR14PBg2tDL2yj6QUXYfH9sHSAfuYjzXN8QBXgF468bBJjU6",
  "key24": "3re67duY6r2kpGJopTRgVhhc5NFXTJv2z1GqnNHq66SuuL1Vwep73GWDhG9TdsAfSGFv1stZf8FcmS2pvuJzt8LX",
  "key25": "2Qp9BL1PgwkHVKSUmmGojMwk3oAXkhM9uYzXtqpzND6mdyeMWmYzk8oApSEeL5YTmGcomnhMsaPpV8KV68g7Z3Jr",
  "key26": "66ZSDRckCB6uDZv55tDDM4wK95dWTuBHFBgJXCSqti8YvDP6Ms2AjB1APgAbwuNCi5DfmXYJvE4QHCJsT8Pz4MWF",
  "key27": "4asSKhLkzsxLHVPvpfSDy81Wo1NP7ni5sAwRACgSp6BuLJ9VyWaipuQXT76zN1hcNFJXgrTFCehYCwmeHkk3YKHu",
  "key28": "5wqMDFTdxgBLFAswuVCYTMcw3LBSGKaZ2YR5bDLVHm2fA2uDsebpVWhAc7R45gbJveFUMVqHCrdUUi7T61eJQxB9",
  "key29": "3skro2dCggHEEeNvNYoBRxcZAsnFnckg5APZvivspvMnYUASts6W2kVEwVi3SDdXtX6M2RQwrtwYTjdRKeFzpd8d",
  "key30": "3FxzKL4btBJQe493HhRcDQdoBX4MbfvgQS9GiriAcBYJiZNhN1fqpCUsed6CwAGoXC9dd7qmPdcq1pGQsfncJkZo",
  "key31": "4rcLfZZVYqgQH6KfDEpmqPGc1fqHFqEvp3Nbeh2FdGVS59cGZnVFo2iVFJxYjsrFh8iih3JceqwftYAkyvjv6TvE",
  "key32": "3nzwSVmns1gEPiUw3hcaPSLNd7jesbmuQ31J5ASrcfzKD5FkPstEsxASVgiWdNUssayt7qxdUrdsxM5hVxNrQ5Fa"
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
