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
    "4QzUJCqNS6SwYQKeru6ZTz8YFp5BTW3LiEjGYrZHBQZyPTEYh41u1NwEkGz2ZBzjWzXqkkS3qGMpSEhPkXJhJjPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46mshwZ5LGZaiGCWK8N7rRN82Wx9F1LcMfptuVfrHCSLV3mx9HQ2yGg5bi1w9f8A2UndpPkmFgbYwXWZDNqvLR9F",
  "key1": "3a31mS77uHwdjKJejjsV16PogALMdcmdQn96hJrxQLJ37nhkm32XdGcZ1jK4Gg8DhXn5iQKTec8Y7ADDqz4KhfMs",
  "key2": "4QWn3h6CcArbpGTwQPXQmL5ZK3FYRn63Z5nw1uoxbwBegQ5LkpUcxSbDRiVqyrVawrxpdK1rX4tizcMgNESNdAYX",
  "key3": "4sJnynXtP7jjrScDS4f1nWSDJ77edHUVFvf8uJnjqtJxMCoX8n5zJw6YQK5fxwN1ZepQX4emegWUJSJ21aUQ1X1B",
  "key4": "4wFs4vmPW6j6oWnzLPzjBELHBtKd1vGDoJiTPGTNS261VEsaPmBkfVFCbenWuczpfxdVRvG9yYN9MqUzMRuSfNvq",
  "key5": "52K6tEH6NEguu39N4LdpPR6sjYiLfesZeYqRZ7HhxwyDYP2NfLZfwTvzir2XYBMVMfeYg1U5c2xXYSxCdYzDRKcG",
  "key6": "5xNjX6xyQk7V9dU2Qn9ALxLWxMjYsQeGY2DadXkL6ADxjQrWhUHYjAmus5UMiDvtFP6uH7vFhXvFtqXqqhBDkWaA",
  "key7": "3kdEc72PqBvb4XMfMw6UhGhBd5fYC31m6tyZj854FhF5ESgREQFpHhPkR66e3KByTP9u9wPz5N3qimct3h9JauAf",
  "key8": "45FseaTnf1fkBp4myfL6q2W1B4GFJHTq3HmEf5cUcTRJfFp39LBgfvhKmyLJKxESXjchBvZbjTGjWXe7RcN24pwi",
  "key9": "5jgtTLw8vaecw5pNc7TvdMAZF3oQL6frBWA7QnBHsqDnYwtTutBz3pMyPWCZrmwMvFvwBUgwiBHPoGow92dQrabp",
  "key10": "RPBxEeYp6W7zrLWHbah2e3tNjMsu8nqmS6EPmJXd4mWwFHZpGG3HiWDZeyD53Yzb3LkRoB8LeCnxvAQBRhGp1A8",
  "key11": "2UTwGkYy4na6YteRt2xFbdbX9NLerirnbA9tinoVg5RwRsb6xUmhDNHy3vX1bafkn4mwcorBZmJRYpPdJ8S3YAqc",
  "key12": "56VxBaigpJdBZryj6wCcPCB17S9hPNWQJZ4AwuhXpf75WzQjjjAG68YSjwtR1TGUv6QQtebR4ATdnJ4PP4AoREdS",
  "key13": "5GhqrsWJ9jyao96Nxq5s81TvP4X2RGjXLHDm6oHJUaUFrXCcihz5bSHnRQoGoHiX2nHXQMYc9TXydbxe1uXoLgxN",
  "key14": "5LGrde5G91pgP6KyLL61XThmetBFcF9cwTL8qose99BwfqrPFbk9FsKerGkZ4JjPimifGouWhVZSyXnEVnYbmcW",
  "key15": "57PvCidVQVbLaYjqAttqH8GjW8oazDNVxQwWAX5A5GFptDEfQDQYJZ1r7Z1YcyuPYVBuC3XUWacxBpMkGF3QYov1",
  "key16": "4TNjtRPxxiid15hmdHKLa2X8oReTUvjrbWMR51rqcTok2XNhxu5PL6AzHCgXYckacchP3wVdjjVjD5iCoaFuyRXc",
  "key17": "2TRVsbeZzdyEnve7eBtdEYwpdxiXAdNx432H9gzt2ooZr1PfXAa1hobk1eFdcUY3Zk3JxUHJAfRpkj7PBnnEpPxe",
  "key18": "2qH96LrvHEwyCUXXHfWjXU22LGJTZtPGzj4URUDMVThys7J7v2xXQKk3si8nr1wrgouMkidXBKgEpED9K9gjvkaE",
  "key19": "5TgdJPKSwTzWqFHzG6ZwY2UF9o8k4GhNX7R47TfqCY9aEQhZVrRvYj7iAsj5N8WVyxDpFgcX3fMxQ9bn7EsodG3Y",
  "key20": "52Uwi2xo1JfVaWta8PXDQZyZchck1sAjr4RKmQhAABn9SFs6qX5coeVjgbvK24YQ2J6CSLGfXSMgEDL1jsWkHta2",
  "key21": "Cazg4ANtHJKkqQU7qjJLZE5K5gKY5XkPsCEY2RXk9br5ksxTodJzKd9iput5vLMw5iY2ED3E1xqjvp7pnnmmAVT",
  "key22": "2bAABdrcnRU9Wa9ywqbcRtV2AwkZiASjjpSubH6qtBRdLL6BA6yKEzVe14jPUYx8aTpygZSsjBMrhdNxxoaGQb1Q",
  "key23": "36tNutfzvxJGvoVEcBVTCxgoUPrnQPbzFsNyWRLrcGjnb3eimZVYM3SuAfT2Rw97aRrHQgLuCTzC87vWmZEbpwXC",
  "key24": "FrNyMCr1WCYUfEvr6n7NbySuMtFyZm87NzPheKQErZJXti144NuqJo4Qz4yWM1VZfzXca7gKMndULHY3fzEaoLx",
  "key25": "43h1V1n5mSNMQmyNwCHBjHXYHnArHH9dUY8PcbEbswqgiCWyE1eJ4Yjtb7d4xawjbBZJ8vd183Xv2tVR1AGTivWA",
  "key26": "4djMbZ5STkecuM3mQN5nWiqdkLvq3Brj82TQdeNFJ1jsz6G83txhQN2CwYucHB1cUQzU9bPKAamm2usEzePtubyw",
  "key27": "aXp7vrRemfiWS8nj2wE75j1xppYoqoErQKpDoDfzkpp5ENZMkv7CS1NZzJUnvz6fREDeiLmaMLt9CT3Dh9xUpBQ",
  "key28": "5XvBQQFsjR5dFga2xRhrVbKafapKmDxxSEMtmT7KrxnSbPbZf8YfqGEUwmVpLVqVM7dQfPfRVGnx3F2jmzDtYt66",
  "key29": "3Hx2EUEX3sagKkJf8k9yEGcw3ArFAbGCbbuQptgowxrdusuZqoKsbFquxv9LivbPvm6hsddsv4rf3JZ84Cz6cmHd",
  "key30": "3UG8ZDSGm58QUsmQQgmWZu9fjdPHDBHtzrzkGD4eZtA2RZ6qZeUWjpRBzmHMzVo3JXVqqWAc2vmz8Ce8YUiQJsBu",
  "key31": "m4t2CoStD8gzdddQEjHdDPjWBnUfvhkfHvgYSp8P3y6Xt2wMACgJz8DPuKMrCmGfs9wyreBX8TsgsDm1f3FYssm",
  "key32": "3CfNrSfd8hBsq3XdRbKuEpY5LDAdnWJ8o8nsGDoscHY2WYgUvupgyzNFKs8NWQeGhKYegXeb88whzf3VqH7YAcQp",
  "key33": "2hdKoZgKGo9vgPC1Nyov3a9K4UDxy2sb8FH7unrnHyxUF91ufaJwFMvBo5k8SftkvSzR8gm5cwnzyEBTXYnF6VLq",
  "key34": "UKSDCWxa25GtYHZQXVTRmdqqcVjFnXTHRvUFxoTS32Dpak4X7zBPtJd548LCwQfeD9iaAuAvMYYq8ig4urb119Y",
  "key35": "38MoGBt2qiGtnyxWWUFZoGJC7BihnMctmpAXkp77df2N6LHoSMJQYp3zF422hupc5WhBf9yEssKLyzo2nLnnsT75",
  "key36": "5QtFZ5ZUVbMJmBiTTf19G9PST2QA5GTedBcxnZAp4uVKpHru9aan2ygwtnbCTeTueFSW89hmEDowTuatkz32orU8",
  "key37": "4u9m6dtbSJZBKRcZFiPqFnvTsQHJFrLdrZec3qVWjZWKbzGcMHMwnUGfEgnoizRZeNp2ua4EAYLwMVc2rwzpRiZt",
  "key38": "wKbsyAb65h656PSpGqrLJp4DGR5rDjynukK3E1RqPYaeo6Gu7hnwHLAUFTtpR9dSJrfYNeGqhnsmBkYRQCX6xZp",
  "key39": "3cbqNrrThmURgRJBtY9J5o6kUi1tcKvtXpdY9ogSJVKTMsvi3re8247kcUxU8XYGSmxdFaW5JpyrB217ywNx17S9",
  "key40": "4U7Ey14gWZD5KdEFpm2o8w8fkr7CGmDWkTbWa1v2i2CZKjYETKpFNbzZkxELvdRevTnjoREBsEvLsCiM4yyUGyzP",
  "key41": "LFTeZKsUhG4y3bZZ8L9pp8RMHEg6V2yP3csm981yGpvNqkLLms8wao1DoEx3njnw2uJDkRGCXriotcoiznZAnNa",
  "key42": "4Rb1Qf9MUDD6CDe5VCAV6zmn5GWdQGAiTkUP7g37SKc9ZWfD1TrTEwLnVgzuVGZoFP11qhSS1UD57kYRmYV2hSn5",
  "key43": "4bjSi41WDZnhjGA3Vs2GNk6gWTaxJpr5UA3wWanCuYTGbUrcJPdAoChvKiXkDFzpWfoRsm4D4C2Xiw7XFZUyH7Up",
  "key44": "2iMAh4SLDS3LLtxqQbdVvWsGTaPF54CwQHmho4D3p8egdFNgfy2Nydv7f8ohNCCp5rVZLpHzBrEXNusoCqdtxEpV",
  "key45": "NYeCswheWPEEhXn6afqCHZRdqhBGm7VGtnG9Bvj6w4cKyg94FdpuxHYaUUPcsZcpNyVHVUMmmmQjTVmS3G1NEby",
  "key46": "2FjvmULzqzX7NGoyzQs1gyntzmz3PhDypigKZvFkBduafUkJW9ts8yJGxctwcfeC1MzTLwSUh2qzNymC5GrFhmCq",
  "key47": "2dg2AUNVDZnRznVtn86AfJsLc3Wd4jeZmtwwmnoRqahmwQHyr5nFgpKJoNQgHYy6A1majCEY5AnoBdxM6XfLANnv"
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
