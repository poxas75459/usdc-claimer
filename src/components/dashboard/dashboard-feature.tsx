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
    "Cxi5qocQ9R3NNyFnvzQcbK7Fug13mVa2RWVfv88e6rHwfF1j5MAdGG5WBna7VTpoXWcpaNHXDGxwTdrk6ffy6Ym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8B2EJTKWR2jfY1LFqWSxqQThtvdnjNdyv9rH5578hU8QhVeasTDNfx6F2gknkPy8ugTnCn2Tu2qrzDompNGKkLC",
  "key1": "122VPqTrdZxGqaTkraxxtFyKuMp1QKC5QoDn93x8KxMbBi9VkcmWi5G3j17vJ7dxBx1CKi4RrmPbawR1Ds7N14vJ",
  "key2": "5B8G7zy8YABy6uVNzUnFwxkWwSG8jNChHeshmf1NE76uc5kwBeaWACcByxwv2yicGHcjTB2nZKwHsp4tepTBPnRT",
  "key3": "4QhxmuhS4y6FgVf5kP6RanXcXPY8sjAwJhEeupmnaezBpZumDTEQdz8L9SGvQmU2x2hzxU6GFDjU5JWnoX9ocm5x",
  "key4": "21WAExtakTrVg4SN6yWLq55zpvoEeT7KNbLYnuu7NdPMiKaAb7G3Ui5aPcX1PVWZgzZ1jP9WM9rp3ZLL7gC1wW9W",
  "key5": "7HhkbH339wNRZ7rgZHTKEpfMLFYCAg2kcEiBkTMFPdUkd2CUEjAK6b6ja28jqbekXNm6xh5ZZyEiJpfBK4jnrE1",
  "key6": "48jrCwCgHGJvXrf4PmcA2vyovbi3ugtX6BpENLorMMUjqBXSs6tdoGUojx25dkkgFk4CDk3Uv6r7jqNfb9VnVUKK",
  "key7": "4DpNxLX2mH2Qrqs3HXUXjkKg1W7yFk8S6ZKyjehrjxAVZBcPm4QnVDLRUZuGaxoPA6FSLsE5r4tA5dEP8SsE95KU",
  "key8": "JVghR9zquZVtXFNB2H3b4UgmbWeCdeoT7PAMQyxY8TABUpsxweTdooDnQ4oHLxxsBDrxP1M6eEr1UyLoFZ7jtAa",
  "key9": "2p3b3FB5peDACMycWbhwS2eazwzfotwCbuG4ZmXhEnY9MSqSmFocrL86jxuAzQa2xH9AuSWjT5bUztKpMmYDEHdR",
  "key10": "2k3R9uS2wVveDEZT4AChLkBXhiJkUznhUZLYkTrimoYmsRtvtf3HVG7jVasiAF9zoSy1uTix6nTzv4tfuUb3vMnf",
  "key11": "4YA2fd8XNqaHXmFLqh6LHxYKi1yQMdF7nzP5RTHgKs3zYKVwesM6in7PBYAHmdPrvyDR5133ECRE1YsA8zLBnBMq",
  "key12": "3njadXrY8AZ6XajBA8KfyA8sCEw2aiW7QAw9J6bY2ZbjwEGcRkQxMbAuWiHcwWHzpKRu8RQp8Ex9cxbuZ22UGvRt",
  "key13": "4ggQU65GbLhgnRaa1JuVFYfSzmcFv1uHzyhx9VPhoD1T7uaFGgQT7YPrjDCaZ3Z6vCebuU5mk18FnR6xoGc5zYGV",
  "key14": "45LF1APHVSycg7gCjsDQqE5NDbPkG1oquZ2qRNTwWM98F23j84vNXJ6C6CMFAH5UcFSzkgdeoYKygVuhWdfFadin",
  "key15": "4zSZ2S534XctmC1W2dyWH4mt7KHgneoouKXJU4M8VL5WdTcG6cZJYHuX1yfrv6tH6phK7aMN9YTR6BAezjYWogEU",
  "key16": "3cpkJyZVZdH5k2VcRpcAA4B1xqXPGn8VM2swNbojojyd6gcDkbTGH1bjnetmASA1ooEzKGNoNCizrbNdS8YD6gCd",
  "key17": "2971dPUwDkXvuDYp68nZLquwsno2fvRp9iwfujTN8CGpTRWF6eYtYvU2B3pG5JE1FBe2ofna9WxLXLPNqkDFFbGJ",
  "key18": "5KzAUfBUpfjtezwipVWBUim37wmHAPuL59CXfGK63NtQ2W1UD1SScDEfL9fFGo99L97Nc2qgozrg119M4SdwqUKB",
  "key19": "3bdLdjw2LgVVpXscKh8TCiECh2ne4khhBYKgSRqXZ2r9LqvT9xzdvD8kK2mzARc7haiayNhWJhn4T2Jjiv4KZgiJ",
  "key20": "39iQACxs5kDWrRcH2PRuRgY7Gvi8vnDHRGoLDUoeRfQ3Yq5MVbW1HHRPGiATsrKuEoPhj7RAprUyosjUHQfMSwDD",
  "key21": "pJa7naDSaGT7DUbqua7N9zNtdEEgJ8GJR2krD4KeHrQ3CFVguRnEGVvB5uBPddbKSXRfJCPYrp4ThvEWaHu5cH6",
  "key22": "fHpi5o9QsJBLgAZ6kMSyiwiC2gC17rSfBgfkekyQDRG75JH8BWdF9Dv5vKt7gotEeTWfbwiKwEyDn3gfSJMGV7N",
  "key23": "JYdjapSFhuWdxBjHnfCHbJERM495jMxX1XP7wM1nHBVk8vmnSSyHnogqegEbwVfRYRoEVMLgq1ZdpA91C36GW1n",
  "key24": "5rm4qgug18CbzUbdTsDRmmnWzJEdbrzZAr7vds6ujaeNJsuKJa1EqEEbotWb6DvcqsSti5SReekQwk7NcteZxFx2",
  "key25": "4bz9bDGfUuJXGCfswd3xzkVHkEwCp88A5qmRxUESZWbSGYzCjjxPnvQbykYMBjjdPt3R3HykNpfvAoHsNbWYFxvt",
  "key26": "3k8Y1moJx6a6i4Jzr7zBoGx4eNhaq9dio9ZjFeV9XAH27fzJBkhf8PXJVCNdwkRhwV3kR63RM67ikmhk1bEpC8p6",
  "key27": "2wuaXDUPDKkz8VKxSaVKqZmEkjTnhT6ULqdDaHhvHme5U7zCTTrohrbk3feXBqx2UFYtDG6K5iQBi2DT69zkdcLv",
  "key28": "2SaADRH9BdrfYotQCujd1P5ACFxMXQxNa9LJsz9YGd1u3S1ciCqmKnecvfiN7kWpCP8Eq6dq1utKpHwvwiefRyht",
  "key29": "5GEHUUNfzsKTDVEcd2NYrsesDUGpYFV3xGZsx68HCwqJbZGBxDusJPQrSBu9C31GfpUpY1986dGa3u7soGV9kJwf",
  "key30": "5WyDWkJYzrpawodz98FjCvXcJj9QhH88YqVmnr7csobzn39TqLqNdWv1N73MyP3byrxjcKf5zYfsY9p4B7hDSDoe",
  "key31": "3YkBKuNVyRQrRhVpxNdT7TPMJmPV8hCXueJCV7LyawPLJCGdYoUz6WbJAMFKcm2CTHNpuCi3omd4Q1poAB2TrK53",
  "key32": "2zDtpdgKPeC64kXFUNvYMKaBgbCFjVfTsN3jd8PCNHMdUhtS7BtcW735tXhJhbmckWvyDvhWkTDJ8xrj9z6ZRwed",
  "key33": "3ykSJcGVsd2atxyNW2v3ojAA9vuQXX4anpiGGmGb6jGuM1tH7nj89oVwoQJwYfkybYc7BbhCqPCB5KzxmfhCWwwm"
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
