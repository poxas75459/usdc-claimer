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
    "5fgnWuP6rXJgKnCfzpFvYymZdEWDWbGerABCQtYZGo1wPTLT4XZP8TBLFYz3mjugVare9iEuJowL6oceVnMdNsUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rg7B7BoL6KpLYeVAsMTxrS9TQcMjXrAvz22omi9GXjxP5hnL1PH3kjcWxVdV45N8hGPyV6YW8NrwxR3Jd5YcPxe",
  "key1": "YKbXL6M4oMDeNRhV6DxB325VcaZYLUKHs1K7fbVQE1RBd8ZJvSCNAaV6K7wDR6fjgcLg8prBerEjLPR9o9TdjRC",
  "key2": "3yppntG7aZPAbwHho9K1zDV1kvfopgGnZajS2cunR6FnUrgizmyHXquUwRM2FARcqmFDs1YNBvUVwa67aKNKt8k6",
  "key3": "96yjUpM1ZBYg4FdpmYbHqUmQhe2f5TwAghqaiMBsFbVMgdt6WHFDHndE2ygyg598YhhoB8McAZnsswrX6rwV6yZ",
  "key4": "3KGqc4pyLBhrWKixwjr12L1tUxLSwh2NTd1zVJ3mbq3agJgxjfZbqRXes2MN8HLmQy2id93CdZwL5PYDLmuAnB9K",
  "key5": "5zcqrj1ZXt3w65bAdoHXrHDQMQQ7T9EosDAxMXeSKdk3FNJAokRy46rfgu24iyKYG52bJy9dCc17rDHWkMsXDsn",
  "key6": "3PR1hZo2ZXNvt4vA9LQWwVE4WAxWSxG5atWjYd8uBg7pHGUBdPi7AkpZb5XyjSc1HAwGo21MqXvz6zkUBiCp1Cg7",
  "key7": "2LMtCi8oy2Sw77m5pwP4NSoTLwGpACMXPe85gMDvnsXmtZHHa7cUKdfjPvzyEoozDNfXZPd1C3gaYh2ikh3at9Cq",
  "key8": "2x7CZjjWnJoagPauBAUhVggv3UZFTuXuk4Thib8b6G2aDjj5ULhdjDisuTpTzGm2nhiau2Nbn2q9SFbjN7BUMNFk",
  "key9": "33PWFb18iu7iThuMDgvDL18MCsUrvgvaU67ftTK1FswgTGLehkRt8E6dk1kyBKtQxs1Avr9fa8hRrQGY2CBfchyC",
  "key10": "4KwAK4sVsvB1Bmn5N6ZitT7FLo3q9hpbCZDyUapaaSPfFhparizdBXw6qje31x1EnB63YRZuPpuviBg2N2JQnYBV",
  "key11": "y5jh9dm6VQcs85RVH99jaC2k3xRHYpSepg9TH4FJNryn3Z1LwAm3bQvQgchzqLX3y6L2411CazXNdRFAVY1GXgY",
  "key12": "4nhWczsGjaZuF9ovq1ZDSWZ3cdvjMAkzCLevctLF5QdW59GbQyEypESD3JJnNeRMC7cFHK1dL41vEWnVLCs4cs7i",
  "key13": "2kGDcxEUdagpPXa33WcuLaF5qwiDTfvENzemTxrGvRUDUwUcuyBoDYBFGPviL2x8iWnNoLijpTrGTZE5FqxmHCga",
  "key14": "428uLfTLPRJ61gNSDKxb6HtnfGvq9wu56b5MXeKKbu1FyUjdLEs2QEuZqCLUVYnAb6RZo13qPYrQjH2Xosk7oF2b",
  "key15": "2Y6RMgBTY4EdEmhaJ3SVti3MkKfYNgYKnaz5p6sB4hNYNnYLRQqDytF6J9mbnUNQviRLKAiKi1XkL8PDPAgrnNwR",
  "key16": "4Kx8XSmTVjzNR6ZPr1UYjaYhCdrgimbyX6SFjxtczqyUrRG1F2LEvhaCcat4xcYXuEf7FnZ2VhMkEvJ5q9G3viam",
  "key17": "4b6dpzAMLMhUraUmqkjrYrozd3oob4Chi2W21H9LGThpkwCfsdcJR9ubg8nR1fR7vsKaNRPqFPu3LtgqMAoQ6rgV",
  "key18": "48JCVrFTf8Mbd5vWrLshANuBoXBTPmVrb5TZPt4eSsKSvUbfk278WRziccPfZ9MTQfV3S7QaZ2m9jhfN81b8EkAT",
  "key19": "5bzsHww9jQfn2BPWG4ZofrM1ChZtrzhbeU2EdVb33qZMJszuBrVwMuHz7gDjDXhsWXa5uxfMzagY9aqDuFnBm7BU",
  "key20": "5NoAeA2RojppgJcrGSDfmjHFjN2ccyPUH23kc8HfxA2XeEH43uRJpv7EaWfiwyeNceSBFVrXyB2xxeDJThJcFAQi",
  "key21": "3NhwfHJNALZzHj8a7BSx7KXYADV8sTd828PKm5UBYn9bWJDr7jjzXgZfeTBBx7iShEJnetHp6KiYnoFJ1pub46tS",
  "key22": "2bE2tvzVeFMR2xA4LEiyBPrckfLT3oUvXN2gBAVa1JiKBmGKzUP8cK2pnbe4WHzz5YjZw168k6KVpRxqCv9GkoXk",
  "key23": "5ZDFg2JNFWSp8bgRuJsyBKgzDt32CZXS6kC8PxcNptCRWKwz4Vqk6Cwk5q3rRZqBeX2eur8dCwdwZRJB5m9ZjhXn",
  "key24": "39m6UniPRqDmM1FmnMdmiEhEs3GfxGdmz3GM8EQMoaiUk9N8FASBiAkvFvXrTNqQERE9bVkLCUFtKLn7eX4mkkrH",
  "key25": "4AV2TkWP51t1PfNnquMqCJrKnxBoUuyCWQEzXLFKYxRnMc7dGxTLRFMuB5MvYzD5sXvzWJ5pfPjwEbrgHPDnZuDV",
  "key26": "3d4tHj57nQUimJRy4wmxohJpkShNzfDxtezdrUVtyN86pSe7mgfU6AVwDokknuUaPwkXMhoisdEagaEcVHvswMKn",
  "key27": "2JqGEtT4JrvmmZd9EjyMAHvQGNvN6pmSMpQhznBpusivxjKpmtCRTGFmhGjWxqDdvjCKYiLhDqbqQYef7NtHHfHp",
  "key28": "W4RNaA7n6jck5zWYuQqfQvLSsVMgANGZjk4JiEDmCCHazqDC2Yqhe8KarN2DxKn816V1J7WCz84pjrqLkQtfxPV",
  "key29": "3WCorkC2fEuNFGvPBN84XjJC5Kw8Yx7vnTqPDGYWF9NHqfEyBGicRJeE45VN1ASLJLDSYN7vir18E1hUEYHnrtNy",
  "key30": "5SoEEN2157AyWYLp1U7HLTAPNa926C6EY55Duhoc4CQkmz8U9tDfpmXC2zbKzbRcEE21S8UBxUNPcrpUgPcVe9ZP",
  "key31": "5VYLaJ2RaD7P1p58FwjS3WbNhcETbGjx7yaJ4Yf9HGhE1bugJDx7kJqK8AGgYYKpq3TbCfrpPqcu6SCktzWFMDYE",
  "key32": "5BCYUMYVgZoXoE5mvyouWhjsrDFrBdXoVeULxoiQikDaxeUebEaEcEuWBJTwb9seQn5rXdydBtoNi94ZE9d9MLFo",
  "key33": "54iyb1nnDAtDgSUJBHxDEKD32NnZjyY4jj1wtFrYnroHbPYNB522Q4F1Bc9b4UoogaMQcqyaQPTQhfU8wWPh1EZb",
  "key34": "4a92hWQmNEPp6KpUes8HiX4uvHKPfLMm6PJHQeUmVs6heQJLzY8g6HbCs3Mr4utyU1u8o9Js4czvGLsUavEeKQdP"
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
