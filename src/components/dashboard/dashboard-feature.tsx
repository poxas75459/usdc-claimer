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
    "AetHUwjUyQ5vdiCyG2eFv1HMdCfnu8Ub2xZVJXpadCoreTaQ6uUp2bMFwQBAfTUJaKaZAn7ZeSYHWRDA2zWoCuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLcQQ84Syuvep2icnFMbnj7qUHYWZWt7TsHbRJR8saE8y7GkmoupdtbrUo1BtqHHaiGAcJH8QqAdfXoXY4aeGrU",
  "key1": "5aXRAhtotnQYDXMyB5p6dbFjZWneB9WEtXjMvz6BtewZQTwqUE9FLM1t7m75vFP2hWVKXet1QPScWB5w1gMTsAQo",
  "key2": "34aHAF8zZmAWHxpdb1UZ7cabVd4oVB5Msy3NGVpzKxGn54wcjbQctevXyUaXBmSjh11qQXFjzaMhPxsP23W6JzMa",
  "key3": "3Mk1yWfEx7RDMEqYEfpLKbNKuGffZNjx661sEpSiqZfVFq1qcPEkkZhvJE4Yk8zGA9rX29pTHzEmE6nhev3VKuvt",
  "key4": "3oF2HbW9Sv3XX1rfJ6TPFz2NBi5wSVuPvrPJ67xX5GeaCH5BHQ2NgLpb2hzxxRTGAU5NyFnDkhYE9j5RwfP6zQKt",
  "key5": "3JzKDsFHCnFUjsA3gmDYMjNvUBd1vEEVCuwh6CyXsTaWJV3sqMupHC874p9bEHCLHef3BdfALq3Pe4V2G9kXGRru",
  "key6": "2JLfLVXNKfRTiQwJanXwLz3mHsPUyaT6GjeB2GuRkJgnsEynEeGGfjdZKpX3z9ZwCCnvrcB3pWjK8QNude2vyEJe",
  "key7": "2DfNw93c4MmGRgFa65TVbZNBkfRX1J651Zcj5abwqu4PyXyaopxh4m9U5ctm2xKVcdD63rH7j2dWzeEGRBfi9HsG",
  "key8": "2EEACNFEhzKr6QZfgRz78tVwdXJkb6hpQESRAfj1kJ6x4grq35GeH59qvJ89MoXZRaXDwTWvq8ZhaSoN5gTvtDLX",
  "key9": "3u13cXY1Da2fvjsrhBDqkoHvQhh2afRi6Fmd2wVg7oRtAbYV3qhkJvUEtWSco3h24JmsxCHJJUwh8ViFYvrbWoLM",
  "key10": "NnX8HvxPpyZCEvv8GDPHagRaVm2dPHcU3uMh1q1dMhgrkkv7Uv7KshqVk5QPfH4RTj6bK5V4k9Q5h24jXKcbtyN",
  "key11": "bD2faCFzf7zmERZ53EnTqmX1wv1gpvNJbysVmQmaFPGXdFCkg5pc8kxMBziWnYHdJHfoDqwfdq8sQtNEkrke7kC",
  "key12": "4UQBZegC6cYQAYARQNK5B5fvHTDLiCFgArUjcdfiHhjH81iNtxSB8VzXerxU9sW6RWErxLxzAboQwYvsgSrwzqZn",
  "key13": "5Gmy1nABvCgLeN3BNgrU81e9jUegv3Qxssj8QKp1ztLmJMbYaEmxy9YosisysBD9xgMEMs1HN36dkerTQnqXnyXj",
  "key14": "52BaF11KxA444kePD99d1jsqWSuVrMUweQruFPHSmuS3r1xi5kmfwUs5bU1iT8WZ3aGzaR4CXduPDwLgaZ8F1RYJ",
  "key15": "59kp8cKgvAA1dJLeAf84qzG1GPAXrPafA7d23PEnWY8ZHcEivVVZTZQoGyMrZK7SHTUzBw76wedWo6BRLMc8cRPv",
  "key16": "Z3o9UpquKJhWoyCeEXqNExACkD5h3qH4qVVjC3afu68ce7YeGxRe31xwCaW8fa9EwcAPDLD4EC24Jc7KungVLGS",
  "key17": "5wX6mxoNK4G7kdFbQEEhGdYiPiMDn5SBTreRTbG8j3AfKfDarCHbT4YgTYMDisWZjRrodasuGZRHtKiQBZ7vrtuJ",
  "key18": "3Ef4nZfW3W9FFN5dfJaTuhFfGS34E7E8f5v2Q5iePdEJbcFczshM62pZ9RqpdUXZKxaYXW9wqfMGsdFggmVqf9ve",
  "key19": "5YMQyefvE7wesiM9HA6FcUuyKJJVYxwjWzRqjxYwxrpStS9zAxfYwSYWDtodfL3jwGc2H45QjgS5wKTmjKtPEtEi",
  "key20": "5L6Gr7hXyjqsqAH4oSKCRNELvzGTQwvgeVFDG7CistuvQQJ3umoAkEPsSu5cL7NZ8nai7FKGSyh5BAFQNsHJSMKi",
  "key21": "98YuDjZatXCGUCoFyWQFs68im4yVVEF3XMayAyEdTsng26khFEW1n8L2SZ5TKrgHwUF4yG6fyDitacCHMvL13dy",
  "key22": "4Vw36xN93TSK52jZxrG3tCeP8kFuvDGNoLYdXd2VyoguVqY9UnaRDvL2fwaUkH7j51g9vcY8ze9sJkq3Zy9FLdiz",
  "key23": "3ea8XSXdwSWn2gCQBQkAKU33PZyqRNPxb9cf2VaJttbURSqT5mAxLA6wS5ZVgnhk8nb8F4a2ncqxewpHpSx54KYA",
  "key24": "1o3NzGeBWTB2nZuTFRPneGg1Y6uLCUXgru5cnT2x663SQAEveFexczemvYebnUun47YzgTxS36r1xFJmEFLKsxF",
  "key25": "2iCo1TQSoQ2ZivTp9QE8KuGr9NVbRPiTZn5kkmtv5X6EduoYCBGXh2QjNfZ68HqALk5PunqffhQpm6sKLo9bJ32G",
  "key26": "GkD7JQ2KkjAJtsF3ywwzUjyGoBej2U6xV1y3Xwnuo97s3B73kHqY4pjAm62XxE7wbPAs1xNWYG2x6UzvqwGfcz9",
  "key27": "5gx5M1cQ5tTNAY5w7YU7weLSHYUd3qWZvvXoMksfvypCA1Jrh4HFX7NJ3V2MZFio6gh3VxqrJbjc63fBjSk8jYLa",
  "key28": "3Jboxu3N49AJZPpXrWGDRyVEJrBMXdAWvHU5mivPugx1jVSmVWWjGezeybo9gV4eVNq5PG3W5FYGdc4Dr9EHme6t",
  "key29": "Mh5KTxbJm5Rc1b3GTARGf4WFLc5v7LPhTQDpxzyk55mYrF7yM1R6DCBms4nwMj5aGjy8fm9jC8TdavB3NnyVVLS",
  "key30": "cbTG3FauERcnBLF72C5tfGAmLDiSxMUJEjHBho566637LP9HGDNwFEyysWkdhhmPSGqy8RsWNg1vNa1SDoFgrfj",
  "key31": "3JVLbhdzY3FBewjt7nsMt2GCTQnT6AariNWvgekPkqpJ7dJwQxm2fqrontvVS4HnjPxz7aPxWLPzzY6ZEcV4HRfk",
  "key32": "ajr23vUSfGSSRacewCnUQRcvmCojZFK1wyBLDbaNXzm4THSSuvybDkbmdRLGzQzUtS3vgZLu8sk2KykfjckqE4C",
  "key33": "5cnP91Ka1c463MRBBkCti1GmHUgpNFx63qV8Bug22p8xFCV4GWLdg7k6DoahSUgdXsRcdDWzNEwVpKDhwze7sHjg",
  "key34": "3SZUoG1tDorvoDSGwetiTMWEvxyPKUnLKmmXC57GrkiSZFZ1HLiZTc4FV5boLUdNYVurwrsjHT5ropbmUvqNZXGK",
  "key35": "3p3Avieoc154Vrmm3qDCYdk516uSXGTjWfToC4CttkzVrbBLCAbo3pXvwRnaQgmd4m4ws8EAUwpcDfJXzvQBEKZm"
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
