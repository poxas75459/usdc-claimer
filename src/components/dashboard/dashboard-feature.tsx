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
    "32g3AWSM6pgxcSr6rSGHnwtQk1ADdRrreScYRcPSpQQdSYZ7uhCATgXeEiRjtUeoSh5sQRJs6qRwPzF7HWvdirfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21499vVuqTLTumm2fnbemW7aaVjGyv8hiZRsTx32wNmrpcuM24rWrxuJQyjbdB8xZ7cEUmPxx2EYaJM1e2LtxBn3",
  "key1": "E4EM51WMbY2Q7TwZ2Y8JQ6t5TskqdxBMiPqBjGEpqShBrY6KZLpetsnC2Ucpy4uLwEo16iWHFtQwCyxMmYBiwis",
  "key2": "nkMCAzcbFNMg8GrkivyaPsMLEmgkvzRhjYAk9tEqYp9zJFoLgUnvZ6eNFCCYPz27pYZTf3UxRBG8wSte9q4Cvwx",
  "key3": "SfanRpSnZG9qUZvpGcyVfpJ4qgStGaxnjn5pxQadoBhR8Nixyp6CSu567Fb8FfEv4fnMDBeH4DNwgqgmxNyCLu3",
  "key4": "2XvojR7qRp9Y2HTDfY8oNx7k7Cmj3XbsZU8ogZn92wC4pUAJb5qsMWbTW2sbA7owiuXVenv5NVmXLHQAPV1jJ2oq",
  "key5": "5XfEkRXRwdKN19rWR65rsw6tAj8pyxcYvP8JDTFAVydzUtwRUvkBsSSzrPpL854yrv4SQ1CDfB2fHxKjkoJsdLUw",
  "key6": "5Mdg5jLsn59pZCnMeuSTURmhXXHrH5jsKLQ2DccU244gCWN6U2wJvCghZF7wEFLfHpWC7AyhNcrnH1cQW53K7E7V",
  "key7": "gYBLBgWDGcZeqL298EiX1dfzXmu6oACvnVmWnhbz7J7CwcYHKLdkVSWBXbtiJDSVzNmkrMMan5cVJyGEaBzD7Wc",
  "key8": "vUrmfvurJViJ2CdgmEntZkRkyxGZAsgjgA4rkyQTr5oXzGBmwA7knaPNginTw7JygfdC8nYMDbCBJAFbdsJ7MxP",
  "key9": "2B4wsKoRYHBqcLeYKqQGQYNsbnh5wqdaawBdCkwpbRT8GuS8SXCNW5VBD2SUmxXZAyvMuy29eXw7AAHHCp82RkaH",
  "key10": "4ZmnkVGo3PyoYzDno1owiSwnqFPVmKmrasCjXfv8oGmx9kQoSsiopiL48oMja5WLeQ9zx8R88ZFkLuc2pJBxc8eF",
  "key11": "yWLvW5KKaiyFnHgmg5SbAz9Q27To55vVPpdCQFNmwcRN69Y4WRQixhLDYmwHWULwawBt9v9kP6Wq7sECVCXAMof",
  "key12": "3utVoQ2kyve2Lk4Hxn6u3Ntjv55CrBweZf5SNjHFQ6yGPJQZm7cX8Yqo1ynG1MNGqAj3mFL7cTvM8VDyjMJ1dbcS",
  "key13": "3uG2UaK53N7gLeX5RH6WPwPjzKWiZ1ipVg98MrfgjhZoWhR698TwtN7KJPFzQB7aduvKhZVf9zdN1YcYjZGJQq6o",
  "key14": "5f6GNwFXvdp5kQozTytGUycKCmEas3haefEGMvtVqAA1mRpFVPyWhGsRuUuxdjaRext4TwA2imzwF3aYdzJybbEm",
  "key15": "5obhLLrpwBJLPLU7a8M1SUPEF4qbsRUt26ES5nV9MUBi8jfAUTG8M5BizSLLGKFbnXHUKqqpMG3k1bYBPE6VzHbP",
  "key16": "4GUqMKCco77MzKgBjrR9jqi6kxZSrc8EFeBj3nBvWHjYpATwvpv9LbETvfXm1miN1bFuRUFnymqgwufvvhUTQaYu",
  "key17": "xpVnRTU3peX2RrxTLkqYUxqAn31jSxbwSffgUoRNtEKzurkMNnf8g5AxaSjnf3JRcLnYtDee3NGAX1qnxtgsmmg",
  "key18": "zkxia6EEQsoP7eJHYUrdnyQSRRWLXqvxtpq72onMpdGJWEQGCTxHAjZ23fbhTSyzTpkVNTjc8MYKeUhhC9ymKLK",
  "key19": "FacymBYH96zQV5qDkHdp9iKzKxiWKoxKFygSJAu7pUnMLcpe5x8uBMBW5Rc3MBuGCNjA1RyodgsAbDQdLamvVJY",
  "key20": "WQwmvRFmgvWLkr8FCmdguVj5HWjtg97FAhiRQobN3b4vEq3VYLa5NdEqkuARZiBGq71gstCZBxLDkRftEJ3C3w8",
  "key21": "31wmCUkwm2drndtFP3hQQjTjRkK1mHTFc8VXAUUA2nJenZd6nRXo6o8njxZxo5NMseoikf21qdmqpyVUmfGegQyb",
  "key22": "21DstEsxEjGb1wTuRPpxp9MWisiyiyRhnxRQdzcwp6jeYrHJcFKhhqAdFqNp8QQH1Kc8tuweVPMuJSdvNxFAXvPF",
  "key23": "2QGCijLpoRFkFYQa5iCZqEvAaPYgtfQnTPn4QfZwqp2ghhca4gcPCwAKpVthCCJ7BV4XeZc18pXZFdf5GrECsmEQ",
  "key24": "31mWNJckzq6MYr9BqgdZHvYrvD38hqZGfCFb1dWCyWw66n4PmxnRxWyWC3Pfs6viK4mnXLGJeedpsgmHruG3n2xA",
  "key25": "5XnE9qjKCX4ttqxKegheF1N95X5rSWzRMx7syKG4ZYWiHuCU38wqcu8YNSRPTZQZby98U71qqByPqDUGTGK6v7pd",
  "key26": "4Wz2Q99Xqjh34mnVfy2a37YA1DhccuHvpqYyvHSmHnEQqcFLkRSMnHBYhBLRmnBQAQJE12LEDYw9c5wYG4AYzZZX",
  "key27": "uwSDYJFTGTjGEDb17h7FJEu7fhtYJLq3JCm2Liv7PHnUYWcfFEWybcjC9xzwnb3nWKC94bUuK9YZNgbSYGK6jnj",
  "key28": "4K6ZBa14xMq4gqsziAWcFV6A3XpRVtnZGJXqPADqKcFYqyoYmrarTiyPeDT78JNx29BLXhUTPLZunpEeewWJWTcx",
  "key29": "ysVtgZmRinokNYUQ7gxoMty3vqXU2Q8Bwj3p62RcNzmaNFaUvRi72jH77SrDJ8ejnSdyUtyNSErpLbeeMQXw7hw",
  "key30": "L8EPaEZfRncDifmhJFu7U53u1JxzAwE5DHqVi3Jk8HEgoG8TFSEDaQHwFK3PiSAiBjnHB91puYyxrhRqk9vgAEq",
  "key31": "5LeJdNGUsVNcpumDdL6ts2LeXSDvcLDQsxp7sJYq1tHzr4qaNabiEiJJb3YceSX9AK5Qr1L52t8XfxoM9EANvPSa",
  "key32": "2zz51WyQ4hq1hvNa2abPksgGhvT63azwgnDa5He4NWcqmikhsrQy9FDZcXXQjTowgWe8L2Tp4f4WWVx8AUMvbi9W",
  "key33": "3CEN1eFUuach7HjkjMyvaAdZBu1meebPsqsa2MdAH9WdgFNoSufRajwAieKUuyt9SgFoALbQV1FkSURLMe9gnqZD",
  "key34": "3CyQnraWwswrbsV6x4SmAGbd4raKaGDPw1N6S87m5NERKJYRwRvhgkuTstZZgYhBG4mbkjFBehQecFGJ4wGYPzPu",
  "key35": "4R8tJvrJ6KGXDefGc7ZVPAiP6HQBp5tJRzajEPevEje2JxEpmMysG82PD2hUg6ZrBU474BTP7Hkxjcnm2GLAQ5vL",
  "key36": "3JwqP8b88Wh5E2ZfbPYpFXDzk9x25QiAgqbpLA4HJsW4xMgN5LoqzDdUhcfSWc4bzbQqL3BktVu2E9Gn2GoFZch8",
  "key37": "2SyNQSsSdgVfjfQpm26egxZ9GDtiQ9VESBvVBWV2voMfCbwkSM64ducFYbNK1iLDmrG9K4nquq1AEjVyMqZpRPF1",
  "key38": "3658yMPVp99nCWqaYuNb9t4FqmqQX7EbQk2XvrEjYvLz5Awxuf9PpuepXjrMdkL6XGeWSj5UDEpcDWRKxbjAAaWs",
  "key39": "3yjqaBcDuwCgf8YuW4trVrPamiMKQA7ARCEiqWNynXRAw67857fvqXyDTe8M3f9eUYATueuBnD3VPajtYNv4WaZA",
  "key40": "2uiPucSjPoEkjd9BzHwCFFpSXjMeEABdyNmqJnwuoerMsXTdGQmEYg6GRwZneoJKmGVzSn6RrquBGSGELv2wyEru",
  "key41": "3JqqBKbh9SUUjuTvmZXoMjbfsFJknzdncDNBbrYho656TXp5WFzc6dKcanuNgDZnX8vFmBYpyzbWbV2FsMvFd9Do"
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
