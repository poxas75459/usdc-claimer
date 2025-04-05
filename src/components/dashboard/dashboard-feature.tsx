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
    "38gSLcoEwUmXTPQKhvEkVTAtWeNp8ppVLtJPPeiarga8TKnwEkr8Ub5Qw3ydKFbRvnnQZcQxcdSe3cQL8aXRPkNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rznyN69nAruh4YJYDnoX2aJuVACzsRBRZGdEveCtxADA89hWz6Lh2Jk9diqh7B5umHHNQkGCSAx1uvmNX7uqfgk",
  "key1": "2K7pY1UJPTPermbJ3zqw4nhEyjowZvoJ1rgsfgM27d5VpMghofQdwLoPkgF3KfVG1EfGeaMSRheeoWJ38y78aU4r",
  "key2": "4Nw6HDtiVscXba9Sw1Pjo28dX3ZtMpa9qYs2sqvBPgxoWGr24U7Q7jgS8Jb9r2bTUQ6yyWvD47UqrHA5U2z5voQd",
  "key3": "2L5fBLm3LddgFGvahmwgdzxUo47fja1ZFVgaiHZv6jKz1xBBBVzQdkTLH8NtjUR2WyvmUikWykk8q3RtgLJmCkSC",
  "key4": "4Da5azaCtoHduQKUs9MfbnD84BwJLTJji1CfAaRFJLQvn35cj2EozAifLmTuehFVZ279xydvFxc6Sc5R113HPSV1",
  "key5": "2AnuJCfdp1VMhb9GrXps8YGotrjpEGvEtMcvXkfoFLSRgJkFgGhSNyNn6g4GJpuek5KQLT4uVwxdjrJ946899PND",
  "key6": "27CikzJFuyozUPCGxizS2B77MsEYzNuSe8ZVBAsq9hyh9ccV9LaFXKBQPRN6CEX5VyWBaBLL4XrMSZ5jSsN3WgcC",
  "key7": "3ojaFd7LdTB8DEQ3zR5GhGMN2Dh1P8pscDw6aUM77N7TH6uWdvN4Uo2RLmnR2p5VYGgLDGKeTT7juSJuHo3pDAA4",
  "key8": "3W9Z6kS9QvasUue2iQYqYzvaGFajBGzptpMRXiEpchvgZW9a61ntMtNq5xGDLZA7qDM3aDaYPaXpE2BQkpUoXyKJ",
  "key9": "oHowiHZN1eS1kVXuqu95ZFnetWZ49y26wr7wrf6yeeghNkf4DrbT3qqJYrK2tBpTJrQ8vxAy1b5NHs8t5YSoLFX",
  "key10": "4c6HsJwC3BU7BomhgxQiysetNSuZYxCWvuQctBqQrGZBUL7QnHjAwh6pfpJK7aewoCDqeFeXoqPu9s78vJCGGc7j",
  "key11": "jupLF2v8dRnUYd2Wbj8rZ2Ebs6hnHiFpTRVsE5nriL8aFs34d6AVGDMu2RkbiVwMYMCQTNqvh8BaG6HP8TqYfSt",
  "key12": "BMBtpSHSL5pYgo1L23JHgicQBHWvxKywEP28B9TUsVBuhACDW4QiKGKH7sSqAQKefPWQiBMoMDgoWBEc1DcQwzp",
  "key13": "336SfPfy8mjg9he9zGVimBANsuvJrGQBY48kX7azEb4qrnNudXs1TMXCUVwQeVjFsMJ4Qn5bzzWbHuCAbshSkpAt",
  "key14": "42fi9fiVrYFU5PwWEGEwPMgEXcEyVnDjo3r747tuModmNEVpBQngMhUGrMGJxerSpj69776fy51xSN2d3o7L1hgg",
  "key15": "24CENEEj6KyW9jmCb9qisKrNyu1YdWNdxtLFtkBcfKVc35wChRiQVHPeQgC8CQXacsrb2LcEMcEfPy6ivctW6ukY",
  "key16": "2YQ3W4jYB34BWYN2FWs6rpq9KSVwNQKztcHG8nfeKdDe8y1N5JrRUGMoGPhD7xoXQ9TGUgU94zymw4nKmesTQ6fH",
  "key17": "3tfvt6FbiPopwC9YuSgcxt2gVDb75TLykjSsMWvYMkY1zU9hkoeyMonMiFpZUouREFZFsahx5rWtuzguB7u8RVb6",
  "key18": "5tqoAt7hKzCEiALYatACjMVR82nboiW5mejnGCziPVriYJmT3wpsG5oUQRD3DmJT5wHUTGWoY8RPMqBaQKm9oW1t",
  "key19": "3jyQHobCUqkrdHvrFjHD9GQQncsBXJCU3xRpnjnpxk1pL9EPfYcMA1jwCKN5pyL8wPBdHQH5zBPyWCMR69wmQMKQ",
  "key20": "3RH2PEvRGyKFZJeJah3JnopbvpiGsf8QqmRg4Y4ccFDXjEe2GqqKhPJZYsj2DvWNTWLb8rtScvQS41qpy35ZfH3p",
  "key21": "3b5NY7G5BLWoVHH1K4Fno8CNMycEmJYqRAtJZC2U2N8bHBieUVQLLo97VxQSN8LRJJFCqpWXoepW5uGb7qejUVSs",
  "key22": "56Fqf6Uz1xRZZ8s58tsragXKBb7EV6gH73ZSwk5Lk2LT9zJDF6Me5YCZf3bWBB2R2znSBMQoEy4t4RUFD7T41fhe",
  "key23": "3bYPDrz8LdkDU8LuAeY15pyy4eUKRNK45sBqjiM7X5DWGYoBbwdHqqW3ngTmnvTGteonxA86LhVM3JZdaPnSjk36",
  "key24": "3S69gFeBZmfyoHWeUk54RMsMb1NJLcqmVP68Ha54AW18TeeyHbECHFN1x71kMzBCwTsy5tEBJWmWpynYgeiMQTt5",
  "key25": "4jtRS9tdUcWCqp9FA1CXoRHmKZGwWXTUb7JHSfQyNBdGAW8jPKp2aFVT4m2KXnFR3iitfDfsA34yrEn1Nfz1uN4W",
  "key26": "2VV2FSrPZSfVGWA3SMKkm33sMYjhKNLCnLyD4tHpEFrY3xgLxuch574ZJaJKNsAiAtHRww3CBnqnisj8Bf47PvRP",
  "key27": "33QETGt8ZVa4dMvk9moxN4yZgLnYey9aww6tSzNhFEmJRFijYTuARTFJFCsEMyPQEJzCB7ds26V3u9CjAt57koy1",
  "key28": "4rcZCPNwwwmwNuL98LzfY7Z971gEgc3vWM2yRWyF8wKXehTKNXk4teJu9Fb7evmRDNr7rh5LzM7GjJvKWXgYMPEt",
  "key29": "4XatNESSZHrTywHE7mhbQbrdcCWgYP5gVvCFsgLthqz2LgofHLDwHgVJhhezK15vYniJ7ytHMvYBnJmr76nFsQ8g",
  "key30": "YTLq25kc8oRMrcsSkssb4hL3ciLccuwX6vdUcyomrbb6MFJo3vWAychRaAXEuiMK3ea889Wcpe3hbvRw7VHHdQe",
  "key31": "4oFn9NCENnkpuEeRcGHeEB33dmCTDvHaDZL2it7UeYTgyn2kQF6JyddQcoU1SmdVMPt52PbFWZXkqEgavGYUGYCU",
  "key32": "3GSetqgT8WYzUUy2cXLgzTpC7DjrZjg1A1bsr1Z67xtSWQ7ydh7Msk3ec8ePqhF2LKANkwWW5JB4hWqgK1W7XYds",
  "key33": "275d7r5cNhzXwgqcF4YFGLd9iN29prSCJ7z6RXSzs5VR5heaWGVVK29qp2VtaxCLmRwEMx63JWNcFcoyFBjCxcQ9",
  "key34": "4qvdi8jAeJmmnsyDaEU4kGNxS7Kho9qvuSaSomjmzDcQUNuvXiueeTc41Sz6hoUaqVeaGw1X9jnEN4PUvC2WwaTW",
  "key35": "4cD8iwihCXqaum2tFsHK2gdv9EjZ1JD16tK2h9UsJrD2gbKM4DvykWDW5Ei4SQM37mDGVSmFznjriAjeiHux9pQu",
  "key36": "3Wj2X1mSuAmK8aqFnk8n6thcqV1B49ncqiUx5cWpKLW61feq5bgnTiFVibp7JMjmBheuHooTJueCqv11wuRGLXPg",
  "key37": "uLMbKTAHL52FmXExNoprt4tyUdR6H2XLdTg9p3hN1rjX6HSXJbWMjAhSqmnSCX4U4EgD9mVY1pokQPZeWH9nkvb",
  "key38": "kAd9jHsDq7NnpfCGzzekch9zajgtFiZ3hVrsdPohpevoQVcDmVfe7HHc6JadrVR1xshpN4HcgXvpc55w4vHbNzU",
  "key39": "xXy3hNMY1QXxyUWTwtWYxVwCGKTUJTG7nPXx5AgNGGHzLVa2En4PK2ppm9eFy5by7ZvuHTbB46dy4tDdT8aTuUm",
  "key40": "4CFecFqhAdxUnPn1xPhVUXcZFssaFQ7yQgVbvPWbvkK3tnyNKVoCDpFLRWvSeYSpXxpzFDxiuHCvTU2p7js7DuAQ",
  "key41": "2XB5jLiFKabXnYfYKqva58g5KdwmnUWghLJ9kppYxUVxr8NSHJLun2pAH5JdicK4NR6mUJHiscdjjqQasjp4h8CR"
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
