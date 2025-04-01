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
    "4ugjAshaEV64rEXWA1B6pqEYkxAd8WHMsN467FR7mb1VLbkV96kVBUshQd5XDd3sHW62S65gUZn5tyFBbdEzFEEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pm2VZdd28qYrXHDeXyPKJuz5fg1BSaGz8nHFCKfegkfJcHjNsDArYGBr9c22PdsodXW3R69LgfCAn3rffNmHzgy",
  "key1": "3NvkTELnVuEwdwqRw3zQwTbNxw7NHGjbyq4LUXWq4TrYXyHjxNrB9FgoJv9ybnh4bCcAaaDwojL1WsXNvV6Zr9UV",
  "key2": "2idFQGsq3hGW34Lz6sGFJQEgJbSeZYszdM6i1BPK4UyrcrWe1cSM5vQzViBjxPASH6pBadH2S36QBq6Ko9XgC7eU",
  "key3": "d2bMt41wHFiimVAEcSiiUJfq14ArkaEFRJ8XmP4r3XjYtqa8iBGwBavsGAH43zza9tcJN5x6xLWC1CYoDJgpzVb",
  "key4": "4o9kAnA4kVqW2P1HFnu26yesWqTLsMvrQC4YSuYxW1jofLrbQJaBpDS1o2QheW5ZR5MA7MN5nVYwc5rRNC2WC4jR",
  "key5": "MXJEJYJ73czsW8cBWL2Rkrbw9oMKvrCiLurWPnNmPA4hQaXgBZSM4y8hJQKTa7nCEoLiPHZ6uTyYevnBtgvZeqg",
  "key6": "5WVXS3ywSuArDtHkus99vqwkzVqR2gXnPkoqrPcHrfRXofCdNBE8h7XDQQXbFyhcj9gPZc2wFuamayi9TiXU6N3p",
  "key7": "HPX86EzkN1hNiUupHGXam3zja6ptfzGTg5g573TURfV73eJvCj5hXKpmMNqfX6hTkZfFyfh39WqqkLi6fZ9Yc5A",
  "key8": "2kATnmyx52WCtLZHssn96YxbDcf69DJA7idCecDLRvsoapxeEmb93bWH5RKLidt8zqdk5efNkn6Mwtshc7LkFWQF",
  "key9": "2NnjEkyC1aAUdNdADK3u7MKU3u1v43oMdw6BiEvnsfoYbt5ErRRVjfrTWxyLnGidueYy3jnNyrQ7LBnboiTAeb2b",
  "key10": "5v1imXBFNrKZrY6BNB319ar2GLyB7gc9RgjQFaKVaWb2AQH9ZvDMkiitrbZCD6pgoEctasENqeq3KgmXYJTXNiDC",
  "key11": "4MReNQM58VA1Js2wiFwhMa7qYj5ofQgBhFbao5UXUHqdBjhZputbCkgkPjzfRU78Q9LeuJmiuwB8B8hDFumWhfHA",
  "key12": "2cf5Fko6YooVtgbyKpwoKs7h5LYXVWuQzBjxWSHgbtNfJgzwcyYKNThYfx8hBcjb3djjXZJmJXxpvF8dFegq7HX8",
  "key13": "4zQDEJ4BkWqPBqvCRGbqcNQGNs3em2mreNhMoeYd2KAXYDSfx8zujdm6cv2WudkvrzkVPUsSVu9hS5PNorAkU3Er",
  "key14": "5kHvvXNqEv3Lq2GW3NFvRTyEKdesGf3qGN11y3GkS7B3gaFJhjQ682dFT6V7Sr4BPewVWeV45abF2Ph8u6P8m8Yt",
  "key15": "53TCippd8X89ejCyneqZpyFkNs5uzQB9urx8L2cthKrMXJTWoML7iWnr1oEGWWCqavXGkxhiUCVH8gHnawKUWzdA",
  "key16": "mnhUWDHPrGakRCUstKPkHL1ZKXJUUAZC2HMnHbrYLAfktw8HQCmC8AyvTuE5cZgxqLmMzpwMJqswRbaxTnE83YX",
  "key17": "4KMeaJFAeWY8N25dyaBhgGAsGwQ4XnfbScSjBbpk5wNF3DXvEP8QqFwuCZQGp2CfmKL8f4c1buWyo1CwFp32RNJw",
  "key18": "g5vq5TwxsGxiXKv31V6kSpzsKAqvyBKgEx8VkrtPotLAkR3HPWTK8siGtFaoCGJKiyczCNxrhPK7Lttr9YYskbi",
  "key19": "2xY3Vxmfq1E6JEyYALt8pZovnapjxNkdPy9Z6FRCzumTe7DEkg3EnhdQ5VeJyPVtfZ5JMQdMw8rsGHdKzbHe45mA",
  "key20": "2sRMNGM8v3DY5ZWAbdBno1MzmWxaxhG9SSEaXU1tNPcFZCKAbiHipqoR2Xe92pbRUFrQjBtddQYMneoyTRzWH4BH",
  "key21": "5ouVbVuGh9NLUHAVoQbzRh4TcqzwGCzw7cLcqLz7pQPduzPBHR6KJBERYVw1RqZPwgupHHkbk1sikW6FMHSiu5jt",
  "key22": "3ewy9DXHzayptznrBM8AxakEVB6STMiVwDYKTagUfrW6oMPqvVcKiu1VYbmHzda7hsAvBZn7AT57mwyPeHDT4REo",
  "key23": "3jKKR3aF1Ke2fsJNgHEcrTeNzdDbXbDk3BoKfxhfvGCenT2WEVUAY5X69iuPL2fCU1eaqCqyf1jCEzYEdwJxhQtT",
  "key24": "2DqSZLiPpN7ALJFhz58FT4wjb1SC6PTxdouP6SUtueRYxQkRxFFCLtmib9CuFtRUPdXkevPXRriYM8jQBmdWWURe",
  "key25": "5FJc9XKvHzVc3zq3U3Mj6P7qLfPs226xVr4AR5bqYmnoWr18pgHEErzX8yFyQcjKQhGqW1cE9Z9xydTKisfR3jPN",
  "key26": "4tP1wzo9fLrwVCyt6i9RcYa6mp9AUNDhxW4pJFSccu7YgmfECx12qB56Jpfst5DbANc8kDBs5Uh8fdsPdDTCmUug",
  "key27": "3ifBzZtPY9cHZLVh6EsuR2VrbHGY9LGbU6jAhF1hLhiZ5tbgtBJTzonvHvDi1rUBa9R6trMCnHzjREWV8h1TVvE2",
  "key28": "Q6wH75dznQxLdUZR3RgUV4bRPphHs47S25NQX33TEk7v5EN96BCGJf5gTqxTHuazZ4T5Sy7r8eLRJEewXmmPybe",
  "key29": "3djiTHdbWhxgksdn8EWKE4d8B3HE78C1XiZDeKfzUbyC4S51PpPRktDJfZe8FtEujJvEmHBqwyZc9FW3TX7NpLCh",
  "key30": "5AYjmoLn14aSJJNSnXCVZnmxdDXHT1ytGp9fm8hQzEiisH6QGdvpnDByKUULXvwyt2JVTSYTqVi3BK4W56CqsuGr",
  "key31": "5BGNk1FLTou8vQSv2GX1jLNaS9wtdp5RQKNrE57j5f1aunUurQwb9PYM9iHpd6nB7TaGDEYyJaGeYK47mEVgkXfG",
  "key32": "4dhssjKHYrvW2BgkG4v5fAuEpVYsEgFpcs7Qci94M3NdTjFHRJMrxnCvVsXG6AhK7hjphCPnej7E3JTGShuAEvnd",
  "key33": "57foNdphPmimHCYqw6pdw9sMEXXBJsuPPEApf1Xy1Ag2uKYQYaiUurpVAkx1SdwRBFoLRDAk2ZXGqQEeNiP8i7Di",
  "key34": "n7tVGiQHWRmx1ruUZfRpGcBqov3GbBzXqWckRHEWDoou2w5XAG22svPCXrZhEE9HGy6wAEjcwgon5w4yuwFnegk",
  "key35": "XddQs9euV6gh9DApQ94tM41Bd9xuZEEixXFAjrV6euzgqy74tAKpjJ9tDsbNEuLY6Zf5uPArWNKMiSoR5Qt8qbq",
  "key36": "4C7Nd6NDmKARsojQRLyfkFTFySdxes111CZ52mZGaRsQyxyTQkAR644dMRdkrXVVpp6u43dz2FJWkpBJyP9UZkjE",
  "key37": "23gGAzxcYYzNBZCcjafmLvHcDTi1wAyeo2AaaECggxLnZne3YjyoKZCwnY34xbY2nucBHsxAATEXQQiNnKUUb8Kc",
  "key38": "2rUuobnfMZ1ajryF6aiqWqp2CKxeWuxCCBU9GULz4DNQdswD9TMGj66aRNxrRCBGNNC5pLmN8xg2AdHcqBdtH82z",
  "key39": "5JXKqKrjfx1uy4R6hc7Yrd6YUCaZ1jkTs9wJA4o8PSgz7JYvUw2AHLaMRhvPHx5LMAEp6fcJCuceooccwLw5e4QY",
  "key40": "4F27CwpGHSEyAbQJZMfu1R7vTomAs2MsqcY5VbQ4gkKi3BNcNdMp84v8F1F3F6j3SwE74Fa9rQj56eVHgGAvbDkE",
  "key41": "2hCuZDv23nhwV2r3VYjDY56d1nPxiE9DKP2VsJZJ2f2aFfX6Cbp1Bs1DHw7DmB3pJAWRopZhnsDgUh8KQGRmhvcD",
  "key42": "23wLacP4a52tVzgPvP7nG682f48hJ4xTFksAoX2rujRzTfgK4ug7Hqqkn7cQBfKreJGsX6siyofAi7Aingf6xRrz",
  "key43": "f8rW5MdudsDTb5HiMNrzAbY2VNsKUub6ckKqYAwN2TrZsDcc2EwnTsa6XG3Lo6bGGERtdkbP26Jzg9bVaeiLmD1",
  "key44": "4idiGaeFkvS1dy2L1xsfnCqhxootzeEyDHe8dpevxf9QBFD64uQnXRTmmqcWGnmzyfUu65uAC3DCXjLDcJjUARKm",
  "key45": "yzm9R9RZUFY8uvt5uBxTZdzT768gS2n2V54uAjujgeyRVu6MJB4eFKyVLYfkdN9ktwaXkdU8xaywMgpBv8f2xgd",
  "key46": "bXVze6srJch4BJDr1BkFBkR5uhZ2nsNbppznb3Afdt3qyFhL3nyAwiYagTLqZ4qXFxN2ctmQYYa9htj8eEJBPFJ",
  "key47": "24hz5psaGXTHZeNLg5HGkTs8v9GFuWAA48iqHGKdNUnifQgm4zQeJSp7L2SuHs4qetKUUmfJhfBRnRTUayx5Z7LJ"
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
