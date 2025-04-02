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
    "2CHu3Yws2VKyszoXDivEPouF2MDxwfWVPu3YeqSLPtgKdDH7dxB1bKHRppW8Jk3vZfKJPNQ55nWYk8LRoAGQ9Lw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UcaEWF6fKUk13XKGTv8yxnqvnNrMUcAUbpPw3oAUTUbFc9fRP57siNA7zdPDicU5zzeeTPBfbn7xiTcTGAWWKAS",
  "key1": "31QGZJDMpfKJSVjEs7S2qe1FY2ajqxj3xDigYYjEsF4XvQ8Aj3vjWuK1EBpKjVD9x9kZNQay8cSGipLygaaFTYPe",
  "key2": "5yehuERaiuSUw4UQEsKGDzmstHVTWWWHb4KiY92MBj7S5aRvWZxgZmkb5U46ZEGvuK4VQdnEybc5dj5pSo2NuFXQ",
  "key3": "k5LLKTg9AJs6PrY7mch1BTxoHZpHgT2xHHbm2ygTGWz4Nhp813YSk1WZLNYCqwKM2avYfTgzNioFsmXd5HrnwAu",
  "key4": "47nFicsjXUM4pfQcyjdiXdAnPZec5Qp59yvHpGQFCbBMpiKitvtG9ee1eeM1Rj4GvMaxFesoMCzH3Xtck2cifEaV",
  "key5": "xBsfn9jDy45e29FiQZYDXfREZaK6ywezTPTBm7LGqkwZLeRKjvKyMMZ3RSErKJAAop2AxZ23DdPYDrjQBNE437P",
  "key6": "4juLyuEaJoykBBZU9ptHGHU92SqgEpTbsigfVSJ6GwUhjB8ZxcJvmzCpfWeNws59LWhpi7yQpzyHxdHKThhqobJ7",
  "key7": "5bSoVJCQBymS1PxdptGAdf6Fi2iNzLvn6xQZiP6yuuLxy3b4iLP3KvT4fNdV37pZXGKqhg5p6PS2xRzCDop6NcVy",
  "key8": "4tvp3fqJFvzrSfnUE7tnfWzwahcSvFbX2pLveUz8Enz993SosMSKPX3Lvguppq6oFUAzw82pt7TFMFRN37BuCivn",
  "key9": "3dy53GhNmguewUtYY7g8ubdeiKQGYdwnJg2yj3D2AnqEA74CWwNL7e5xAzpusuPM7itRFRdcYKucddfjmKNuhyne",
  "key10": "4UeNCaikW1FBocjGPhHjFKXYtLv6GV96qip5Wf8xg2PKo9k5u6xQtub8qqN3z26w5Pv5mJ7ZucpQQMyjKnQjdqDB",
  "key11": "3xFWZdZkkTUFjJgpsExdm9qp3FuubWME6FWdZtZ2wp69maifLqAnExWBB1wuRSnmuDU4MzM548bUDt5dk35Bn2d5",
  "key12": "4YFTfefi2Fw5TpfUF1EpBERxUUHxoYi3NqMkwaPGpKi2QiXnyCVdFRJfSj5s1iot1aEqvx7NTkGcd46N2Zb9mwEY",
  "key13": "5jfjiQkhnF74Yw1eK9QsE8st6wqGSjtRtvCt4ftSmwpi3Qq9FRcDBBCe2LxzZqTi1E2QfYm7t9BZioHA24SGD4Zw",
  "key14": "5Jf2W9dycMoTJxrLiuKLbX3qw7Beiso8y3727u5iFJYZdBBqoWzLVwGTu4oJWibR9GhobRyGadGA4JQF9YSkHsLY",
  "key15": "42cQPSoEWVZKV4QiZRUSZr5wgo1GeY9XnsoqW4Bo85DvMKKN2M1PSdrxRAfnW74q31nDeHRSmNczjHiPj6ctM9aZ",
  "key16": "4nBQ1Chr3RQRxotAjEbvyZuTMx2St1v8vyHEZGzZUYNzoNfjYmmkFpYDZTh1uXrGxGK7otnB2wH4Df5Udz5f7kNM",
  "key17": "3wzhcntifAR2TnajGkb2VGLAC7MD7HMdrk9YQQ1uCvGTpFsqC1PpDKRZw2PNrAbyaUgvQGN38wQpJ3iRP7qcNA2S",
  "key18": "WXuSnp6zv51mq38DFcdRsdpwPAZ29Dg5HxNgvw2ZELSLNjRYAc2NTdpb5XaAPkSFssN9Zne88eQ5B7Hcbs7zdWH",
  "key19": "2VuyjQWUuez9D5PYrTZzUT6zxRj62tE3mw1LwvjKeev7zhLXGc5HoJXFbXL826u8QqZJRs3zukdF3LRTJwJ619Vf",
  "key20": "65WAMJenNjsaVjrskjbLoSiyLXyP5mA8Qz4WhqnxE9PZrtPL8b8oLHMbAfY2KpfCuxiUJ6rvscyutapa9jftJYxw",
  "key21": "49NSTCxSxbndCS5D8bYF8u2QFxKQmsM1JBkPCEpXfjueSQJFZgHwTUYo6A9i7xkpDwYjHcZh7JVdmneUDrzx9CQj",
  "key22": "5QXjtpEt24SdoHBVQC4zmB6bXpRmqXfGKCXFDxa4xDZh86CS2SCpf4kqYTsrgKHzji1sH48EgAbaCGJZWEnfdiH2",
  "key23": "5RVGqZ2NQYnxnjTGEXxQvYvrowm6GW6URdHcWNLiptKSAV5Qq7GDANayJNmAi77CXDCerDB62tunMrLgQ9UMje3C",
  "key24": "5bymCt92rS13uBxpa7WypP2J4x5UL42ky9uHwqdazFbNHQUAZDENqn3NmfyZcwMP83gHYnY942bttcHqXu9MZD11",
  "key25": "2jtSkLuagd2phPcSYQPyr8Zyn4ryYkTXxmMF9YeP6K1k4yUzv1G6eMyhBqoSoScuWoWx3h13VGc2LTcrRpRVD9wg",
  "key26": "1d9tTbRKxgmAFjpHFy8JzXwZLAiJBVAFJZpsGQZuLKntBhzrAgVoEpGEh7zWAnVskR8obTD8sA9XDWFP2uGYpxo",
  "key27": "8R6LhsRdtYaABeqjxp6beXrKLZYbLfUAMr2xrbaZd41QdTUGpjCf2nZSvfz7t1YeNuWXQiSmLZ9SqRhS3pQ22NB",
  "key28": "52qtYP3zDz1PyTSYFc78YnYqLDhrh5vd97Bx1Yr233Dkg9R91E75SdYcSWgXb6ZTrANSffGWV5UHA7LtYm8Q4NZm",
  "key29": "4HxDrGc5W6F5VvHzKc3F5bnx8om9uhPDVjups7k8P7Zgk89TzUCVi6yuuSSgtW8trxi9XVmMzA7AkK3sWyripeHT",
  "key30": "4UUcUjYYPn4UMjsCf3H7Wfe9TjG4r76ofrMbdrRCTobEjzMHaBGYUpGdnx8b1LxWGHmbVj8z9dbdYBSuqMyhzxqr",
  "key31": "2LjiUuAsmTYZ9bQbQKFAWEWdygRVXS6tvWZwxD3Cuz8APJKVipw8bEz9nHxcvPVHsAZ7FS9zumCocuQ7e4hNgSZx",
  "key32": "NJXsQe6aRRvkdKzcem2o3JNpDsc21hYR5ztz8p4Lgi33CXEJWL8j6bxJbZiNMiwUS9hdd1SDGmanDbDVtE8Ee2h",
  "key33": "4GTJ3cHeotu8cNiA7wacaf2TK3QHkdRWqbN3FDBTbgjjA6reje97oiLqzcBkLrEJiP8mG9cXwb8FnWiEC86Us54T",
  "key34": "4kzVimacKEYdBJJqiWHrLCsDyHG8UQiTGozqGFNpkg9Zp97FxGcg6GoMXRAddKheRAJGpz267vdoh3QHEKX6A5iT",
  "key35": "2nPPEmRTF5A1fUK7d1CYesQWjAfirWwYXiJjadyg9DcWk5z2CDZGBy1V9HJrkg3Bo3UHk6rjatN1hZatZgtWNHnJ",
  "key36": "2cKSSbRpwMXE2b9AbxFSVkDBzfnFSTw1hUnZoTCUDNC2HkxREr2ZwntfuvadLuTbW7U8grsezQmdjYT2fi2NcWLk",
  "key37": "RtrBZ8Hy7358AUeY8bWq8RnXLWsVsn8YqEJt3ZywshCPbPdKKfy5KL49LL7m9aE41ECEgntQ612iDbXEDwXyvDt",
  "key38": "4vCAz8PNvyysCns4GUqgsruEqnhpoCUKStQkATJdgskgeioaqj6mVskYrLdTh3o9LCSzHJBRgnXvApn4Y1sDUyQ7",
  "key39": "2aa9Az5VAHQow1RWxNGoxe2Y7rqdXPPC643iFCSvzGyL5L6aRHMyXkEZn6FjMkxVqw3nbkJAtxT1VS8U2LFAf89L",
  "key40": "5352JZE68aTLpeRyc5JJjbV7zGv1XWDrDN7dgwRzDPbsxMKppXqDX7z6vBE5EoFEnvev53TVGG1qCm9XTQwSx4LE",
  "key41": "SsAiRCNEnTrYmWPpsvpb8FJMQdJwuc6Vh7HCeWhB465j1nJJkCYGnpr6EcbwF4ugiqRe1zhu5CKuLas3LShbFDC"
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
