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
    "3wTSPhGuw2tDot1yzrdP1nbhw717ZRoYni6pkYQmTSmLTFD3LtVcX6CEvawEQqE5corYz5bKMXUELTzhyPu2zZmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q97CpD4f3NvubF6XBGm7M6HAoG1uz6pGbuQaYnzZXArufjPPnf6yMMc79bnyGkrMAUJZ7jKRzMd9bQGAp1si6gx",
  "key1": "2eNRjU6rtwZ9cqr5zNz86Yjr7VPChpGvLXYTMmKWSf1B3dHZtEH5NoY9YLy2zJyeKHyZBrZeuRw2QCb6PqU5pCLu",
  "key2": "5RBu9czQDQviU6uDyrdQPEgKPWEtnh3iuEA5ivzda6akxGcsZZK2k3QehGG2sJZiowE1JQFVU3A9dnkLRg5urLxV",
  "key3": "5SfEg8epgJT6poXqjcL868ySXs8PHBZRm1xwXzMsXcRSqEigvbSitdpfn3VkvnD99ZFQYmhhtXciSZEqpw1d92Hb",
  "key4": "2MNKWPX6YX1rLiKpzJAbN4u4gr1218umVDKZAudACBkdFB3nm7YiodBqEdEMXbTu8AeLBvAxHSEgPs8AwdzjaZ2i",
  "key5": "5pMNfDPbab2a47UrtCFjc9JdCBum99D3VshcScouGgfU6wg6mNMJHVKn5i6SAC4ggWhN9352HHXrbej6u1tcAMbr",
  "key6": "2yrRHNpi14sTa2HwBen9afG7WDTjQ7FipE7mNz7fqG1xuzkjNFoQYCAVVkvJXLEsu2xDEVN4teo9HSHbY8kz2uD5",
  "key7": "3wuoHQNXFv8g9tGNc4A3aoj3bvnZNqNvBKFMLUFDHu8UmiZWQzwYEZX19vc2YjjAj1vzfSw3x5VrPVm22WWK1oyU",
  "key8": "5pBERuFGSfCHZdG9s44sM7BpRWHu4phsedn9UUk2YMaq4QDwQfWnUDBYzV6K8MWQCpEVNWmmBiEJo9okeWTHG38x",
  "key9": "2r36JYzCUiR4YjsqVGZyE6e7tYVrG6WsFsG6FmQAaywxWxdC8oCtpRNEhpMmdGK1KJzSKrNTEXTtN3pFj89hen1c",
  "key10": "3PQuaBDwSmx5bEHnPhfoGjzR636cpTRFxDdtCaUp5DJ8Sbi5tin6rnFzt9zZP8B4dvoaj5BV8sLJQ6DPg7z9NEK3",
  "key11": "356PKPsDsi28GL4GwQQFccHoYqi7Jzv3KEwmqMw4ZQhPs8GvoVPckFicyJMuu3fB6wFRX9STtu4RTTEvyLovwp5S",
  "key12": "348KRa21tTtdpmBkRnZhqEu5rfMUEvApYYskhVE8QfhRhrtsRCLZF4BcRbiiMPLiRDQ1WLFJWpmQPRmuZ1sULVEi",
  "key13": "5L31R1H7VUc2RxSEjxefD2wZDetnrCMWAnTXoQvXv9KBGP9LhEhuddF4ohFHYHGHz1kVcY6WoWhMixgxw8eRBxUv",
  "key14": "5RtzUrHHXaYhu8FTAeo2FKGDV1FUYSSn62QCCdYuYjmVsTcE1khVZcMtvhPqM6Rs24eW49DphvGrJF42wz5Hv3Vq",
  "key15": "26JSWNG3cYn42dTKrkNtC5aFVpDa3y4vs28iLNwPm8DJPWW3RfEbC4dqPANvNuUPzG9ZnKnHL2uBeSiHRcqYfS6f",
  "key16": "3LEEgN5yDWGjSKiDAUSkrdsJs243L5nadLfMrqPj6ycGp2t6EcAwBE216pnS6EA7WFuRwVgwBMFzKBsXiTsjpdCo",
  "key17": "4dzhuDJNJ8sgrfCFMzH23yga17Yfq2hF8kz5n1QNy1vbtKYZkyyGmVJwGhW72YSDdDbVZm8sD1epLCY8KQq4w7JN",
  "key18": "5bnZQjrtaMb36F6tPoiJ4ht6nSi8ek7WZKBrFfm3Y8WiQwchYVuA49vy3uH3poBsBRPpiLgs1LGeJ6ejn8YSGAsh",
  "key19": "VwvgXCN3mkTb8RHMDVHqi21xkvLJxAazy45fan3vvwHw8YWn9ZghMTiUdsK6QH1KnWx7uGHLuUrnsunx5vGqUAa",
  "key20": "EQzhHZcLUqJZVrWLdPX6FnhgJ6zUUjWEHNZsJpEkr29NaEWMsbktachAuRY59Wq33SQDHRXFbDkfUWjmMvkB8a1",
  "key21": "4TTDgNinAzNXhGbnWacaogdvtPmRmRfm4vdBwz5KuxpQVoYeiY2Smgr5LysuNbbdDt88EeQrnFjeUzn53DLGAmZF",
  "key22": "2mADLvpU8PmZKdmVPfWagxoKg4PfMyMKN1oUtrR3RhMNZCHLSZjxG1m3ZZKKCzzzsD3oyQtkzjw6mdUR69QDiduQ",
  "key23": "2htQHmHLmapSgHRWsYpTqpySXQcZafBXYDoy2SvX24kNiHTjMV9pjPVmNx7BqZVHuhhXwDUWBgMvGidad7GeAiDn",
  "key24": "64SUqdXCbzWsaTdzQx2hh6ib6QmFYuE8AQCE3af4qfCANQpLuWHoGLo57xw5pxMwMHqTJw54TN1YHwkHwEauB3fE",
  "key25": "365KxmAoeXK1HHrVnTeZugyAE9Avtr1TE8sEHkQHGdifpS9DjHTiC6CWDq9o4NMRB8uND4TtHr3mJibGpNktmwqN",
  "key26": "sA6UFLAAqeiktHv9GCLtsMmpFwXEWHjHRjg4Uj3G2c6zgwTpy7pHeSd8Wty3VGE8M989VQg9HmHe7p1JX6W7kCG",
  "key27": "4AeCbyHG4GPVQztSg8G8yjR2szJ3wX8gYHcaactGXusNYsNbX4XXWsboNA8MWN6gHHtzuweezJcHVzwRgohTZ23N",
  "key28": "3CYNZzXDXdxSGhiieYVfh2JMUVTvLFagrrbNaaxaSar5fuy5YKMwUvnda7DVZMWtatvtc785YTfhTMbJz84HUyGS",
  "key29": "3ngkK8SniAni7wcTWzLdRA6UAm6jc8q58vpnyA2xbvvZ7kBgt5eyoSmfVVRCRVjYa55DgnP8w4wka2qJJWHpSuZg",
  "key30": "3VtvpSkAosQyJExUtKEmQj7XrPDWTtdqWjPLE3ne122DUgZxKPgkBG425FfHpdaCEg8ZbshWFgYa5ix8dtxsVGXR",
  "key31": "LCX5Gk3RnY9XjPv2cru3pEsZUrFfckZm4JhWPZtBEE8ix9Djur9d61gYHH9cEPRWdmZuADLNbmZjYUhNETJLhFc",
  "key32": "2zJbRhRKnq8YPckRn9WGCccVcWRegNf8UtFgNzBEyQGcFUhS62u5PgYEkyHdknX3yKEccqzXCU8dCA8H9wr95pWo",
  "key33": "2pkzfzSzHgekcDYj4PhYsAuKZM4jaEPG6aiGeX7Cd4mtyE1zYamNBgqsM4YLgH6hssTy16UxyRH1gZynZjQL3GRD",
  "key34": "41UbNtQ4P4qEyTWXxk1xBXnZAXTKVaVUiYgviPnN9vcRBTxiRyGhP6oZcFZrbYA4TCrCNVHGSNeuZcp6hQDxcDHr",
  "key35": "2bmV9bjhDV4kJoDusRshSYxRaWkRPZJxtn1gRiXARGrjVETvHcwnKYru4R4mkie933zQARKkcVar95xNCfYqH89W",
  "key36": "4qLcM4Cwh4YufLn73FLPKoUrfizwfqwF51aNCEn3sDJqWruvJuEZEFZjknxfb1QZohbCiWwLwgzSt1VV6yjqPKQH",
  "key37": "DNW1xjN7xv9Qq4tVq5YEaGDFXCqtWVnofAZkNQGzzZ3ZpwnN7q3odGDHYMgnFeaiW5h4Yidoqzw3nNSbTcGQPTa",
  "key38": "5uzXzcniSS38EgrtdotYTw7ZrUeSr3jrRD2jhvtb81DaY79Drb6Aw3vkgSf6Kg9kEAk1WtmNW1xQeURxqC7hRLW1",
  "key39": "XQB8keBYgCQwbLQksr8LRFbRV3jDmwbp7rat9U41hgrZfhWA9CyqMqkxaj91SW6dr41JF5cFLKMcyuRvQNcj9zx",
  "key40": "3qdwXdiwdb6iyUv1wPQAmGwsZf5jEvSZmfyvbWGiTHexRPz8hstW4HMYQEJ4tNYq5mPuJYpg71TDArwCaxfkF3DF",
  "key41": "sK2Xd23TM6cLGLwrogxCHCHZf8NAbwYxa1XG2n22GgkCsgQ767SzrS2fSeTMnefBsep2bvj3a7ChLapmj57Gdaa",
  "key42": "3UFCp7WejvfbccJdmGFFmCaCVLEkEX7FJpwUTXanEEh3jLsn4huRPxAR9JiB8UEAGY5qomufHoBpXUQQKjS5nZvy",
  "key43": "55EoTfETCZT7WXqrwa3E7hakJpYRT9nVsdCQhJsLbtCnhVMHn9uqgWRUmtS1Gi6LuiToV1pnoLKF3tm2KKrzsUPZ",
  "key44": "4QQZ7SVC6DTMkSft2NtmfezRXkK6NCmoB6xkZMXPcDLg22FhmKqHTfEFufKmNi9KWNePzcL8hNio5mdPoP5pa9Sp",
  "key45": "zqsiqU1KYwaAZKyphqEZgmFzpSug4m8YADzBMgxHuvTLoypxYv97fCLk9E5bep7bCJpYZtzncBoMRrLzFpFwkp2"
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
