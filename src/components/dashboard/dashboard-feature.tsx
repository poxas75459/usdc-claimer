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
    "2KoatN9SYhUyXXoYvNXYj5rufjfJikof2k17GypZKDreoExVamPCtvTreHCkoZSZsddxjrzjyJQiQYj6AVP3iUfv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GRdsyb8cbmT62o4zoPYSpME5SYsAyBpVjcNF4TSWupBmGnnrF2vynXqrqJtkDuGCcHnHYnbP4Lfr47yVw5XBHS5",
  "key1": "25EGE1iv4t5a22i37RwuMxkWdFqpGFaAuxYzCw43aAT4XomFPcu16mTPV5LiYqraqseA3m3TA9Nj7fRTCG6Xs7jK",
  "key2": "YFHd6QqozMa4aVfrNPc4WopA8FFdKyDdEJHiFChATcdSbpjiiYnhxiS6xPDqPKcRPo4omRf75ReKtmHadEQXh7x",
  "key3": "5Kwt1Wc6frdBmU6CpCKA2QBgtkjNfsdwSnYymEKgEJStm4H69YZCHtF47SUBLvLtD76qE6z48gniTNFia2rGmWgt",
  "key4": "26cpHsvD1ZXZGNdmKhWzuvhKRCio9zhmaXHSQT3KvHmYFs9Bh5k6JWCtiFUKN3oZs6BaMKrhDSNUKKWziH6bkDTA",
  "key5": "X6HYQzDpnn5HLtXYyhmHC5ofaq7ok1qoxy1ajLW1hvSYBAMsqgsjGXMV5FUg5M8rqrf3EG7NkhW9cWDecJvAsBz",
  "key6": "5FMuK3BRvCXsZ5siNunany3yS4qkxSsLhnLVeXBWRH9QHiTHXhs3tAdcihtggHdD3LXvCSYr4WZj4iLPmLdTnm8x",
  "key7": "2fP4LTzf11wCVczVMw5hFDNVKJuW837ANYSAZxKG57yuz7pH81NieTLeLSAEi9m4oKpZma64wzqRKJJ1simQB21m",
  "key8": "2uKmntuy7hauRWgaqE7EVb4sgrxGdhMujXxpontJSNvQagLM2eKGJ7CXdNr71azfcqMtjMBuP2MWvvGCQXrJjsKp",
  "key9": "vkCZiCFhPocrK5cYi5mRfkassaiCSs4vkjnJWxwk1ZbRxQGEvXZn6jfD9TMvFVH4QRys5auDqVABwCKaQG8bvjh",
  "key10": "62tdoRKK7DPLjKVivBJyhdjp3jhscPw6vzqSxignbHe9KfwsoXnryAsEXonpdoYYZQAohYoMgiNA5msow8wXFc54",
  "key11": "GWdnLqpxgxRmLk68HGJL15JJnsmvy3Vk5PkboB9QTJq1Yv9sqRMmYTJurggPjfKXFdHnAXcmQRyQxoW253dUY5e",
  "key12": "2aAjAG7YvpEaN2HkHSS1mmANfSpPKDdCU4kjzjgpiBwuj4VkEQCWtp3ukxe4GjpdqeUm2FayN8vmUjTTBJ23rxt1",
  "key13": "27bREGPo7fww4btD9u54PqeQ7mc6hDcJ9edZT4Qp9hYTShUrbF7pe3gFMrwWWEyMAMEnLSUSeFgDNDcHmHtQbaiH",
  "key14": "2n5eNeLK1fynQsMa3PRHQG3E1J5b5GzMhLMbJCPWvaxvycWbzf6CEr8ettTEymNaJorhFm16gLLoxdPkw2WTkHYh",
  "key15": "4tBFaNpt1JY9fWaB3KXo48bxwSPZ8wfSWk2pYBbxgPkeCnrJqgz1CTgRxnAc6S9VgHgrziuZzkUxQukTTGzJoXiv",
  "key16": "2V4TnRhbV4hDwA7StJiHBC2ZJNTehPxHaz4AwYpCeXTfXsQjaMsMcZPYU2w2b4irmdfTftH3HxCgsXaDXKAAKVmT",
  "key17": "YhzxuFWYSrg7GsVHv73DVmiHMhkVBPef6xvdxPpVXEqZMps4Vf3m8B53pYts3T2wpwEqfj3ys4RQYHVv2EPGCh1",
  "key18": "4d7uDu4w2k6WwgbomyCiVzLnga7BNxVpjhB1XtyNZgH6qd3ZpuNpMsJbbCtYAfpdUb26vQZNstM8nQBSFpKV5nBN",
  "key19": "26hhKamrc9FMfW6wb4xMRNxf1Z6z9yn2xmAnSqRk1ufqyjdpexdshdzbeMntvc4bvGYqoK2Dj1rKAxCXbfy2p5tu",
  "key20": "2eagDn6oUicDJQvKheMzcnZpz95gUhccaJERa7QY8uBTg5ZY1f3hS9DhGUkp6nLiHaR8hm33zJ8fhFNRyCz9otqR",
  "key21": "3jqZBNBXdJkPHJCZp5noEi7Z9LkWoN25Fss7VAwNWt987CDVkA6BjtRbhLNoTg1rFvQFH5aaD3zkfFuMtFRbJBp2",
  "key22": "5r9PFsFysbuR4zcqdZA4jJL3skKmQ2qL9J5gAGixQWq1VUJfphRkFeQqxzeQoaaG5JGBmL7GQwXgVCf98DBoduUA",
  "key23": "4GnFrqmA8ijtLyT3ppYtkRNLhyFUJcVGcusU6Y8K9TNDnd4SvKve1BFgS9RYkpQE7LVFpDrTcPgM4B3uCv7KjTAD",
  "key24": "599dQqbFS6QBYzdkosXRWBfqFNt3yk4UJZ1H6Ucz5fNT4XpvmreXmQFjinaHaV2SKMFzHKD8Wo7LRsQCDQLorFYn",
  "key25": "2wdXNymcGLAQXNeBtarc4z2PaDTamo9rVwD2EQPEog8QfM2VKkLjzx68WUuGSbzzwLj2NCpJokkh6iAeHMMdKEk5",
  "key26": "3tr2Xg9349SieENmPNa9Tjibtq7eRvFAySZrWc3DuTte59VPBXYQZBp7noptW4HZaoy5sdcxc4pbT7G7yEx5afFf",
  "key27": "63zLeDRba3n38aHueiCrttn2hhgrgH2BhPC4E36qVF757w8XyUU2CmpHCW5H1VuJcu3vMRP5ZB23hvoh1aqegWtM",
  "key28": "3oSoph88Tk8mqgRaH8bHxoqAKv3RogGRZ2yHgUpgfgas2PvHsEGab7ghs9L1oHvhyAcsPgXxX8iHT4mPAL7vKDU",
  "key29": "4BwBHwzBFtqE6RcfUfiMu8DJHAZkYaCZNve85bq491rRGXsEML97U1HiQpmiXmznnmwC7FDT4otCjsGaBjWJKdFA",
  "key30": "4W6PkpmUNAcjzi8VMQk5G2C31rgmYfFaNjxwGBAf4HcZXGqmk7MCjdCMrYWLK7RhFJ7HRjUUx845DfbpbGxGX88g",
  "key31": "nrLhV59rdJJyyZTeyhgAN7VfHTnL8rs8QgQyHw8m92S56fu48Uwy69fmZ2oNGeaiMHGJMC6YRYNLHKUUNphXBek",
  "key32": "q4yjrBwmYnY1ot5C1NJ6PCc8XDi4DMNfxq9phSYav8j6EMzvbCnazGPwNzjHDcaNaJjbb1HncBHxQ1XM8bvpGi5",
  "key33": "5E2S24qFFrAsWJWZFN5nHj2WuGyakqcJpFXvaxHvWtNz5iFNwrZkA4Kpcv9X9qtvxzx398aD6D3VJpuqAkhNnCGK",
  "key34": "5VpZZnXKuwS5yNM8JNKWF5uNwVrhkAv6ryyYy7BC2HcvB8zQCnEsJ4EdC8tgWsJX61ivfdq5j5i7L98KdCpPXEqS",
  "key35": "snxLAdVAhFma2ZFiacraKVAxvc3NsF7YbiA8i34vLQGrXiiYpWYdR2RCQAPeBhrBthuYu5bcCArP3Lyqgm5JDQw",
  "key36": "uSS2KanQBuMGuXrhRU7VCp9cCa2KFLq4qu7RJxCzibF5x9surQEKU3oycA8z7EssB2k93EQJcAj74nRNZdyGXWB",
  "key37": "4BReybro1iQwoph1GkSsQb2gnF6XL3R7nndGAh6eEj6DXrum5PRaCxRSAxj9odKSQzyr2XSU8huZL79kxS44PByC",
  "key38": "2MxFkhe8bNg7o5FcqjwJLNw5FSzF1mipmYpCmnK6tqKCauuzjHn4YQrep4icji18rmzA7i5WBL8Rs4NcgUrhTKs4",
  "key39": "3h7VoJDkojuRQkp2hN96DVJuG1MvqdKHpZV3Q9t4sYKSaPuw6QS1FNSpwc2fwjvLzwwufQFkuhNCX7GstGGkbmvd",
  "key40": "SBp8ZVnyVRHwKYkk2zDcivLKKPj2FgRSBa7BrRR7TiTznRqHtrU3tY9SvKfZy8roUcLyi1M4xPrbCK8kUwHwTk3",
  "key41": "2Vc4Vv3VrxLPAgAU1VJqYiReyFD9BPmykETYxajDvkPiPZoKrcfS5tim3ZUDr9GjJoGTyxUFZs5RSefrUXLYjwko",
  "key42": "2wsv5XTuX4LVGvorBTKBd9tkYfqKFX5e3E7kTZMgNn2FdrZKttY8Uter6QHaTjubfxvbXBnmcNHZwU4ACs6FcaTe",
  "key43": "3mFfj7eA6v8ruEYsik2xr8JwytxQ6nU25FqqejqjvQudY57n11SZrBPc5aKcNfjDXFq19uDp8VYTEgzi5yLffkdK",
  "key44": "5MrcPnf2eoh7eDfjcnj4jzkZnYXc9Ngbj5WqM4ckDqyLt5VJ46ivknQRrcV9Nt7ZDfFYwpBvAh5CSFissGJQxa2o"
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
