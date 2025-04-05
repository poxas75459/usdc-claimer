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
    "HMVnjagFYF8RLAF4ufPPLqXpQB5Bsqsb8wJG9Pgg1o4VSCYxdrJy6MuMucM19St534Fxj7DQ6qSXWYRhpkjrJUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23gQj62VKEQiMvg8WXEEadi5Ffta7zQ837ApaSNmk6JMjXMV6De8mmvrF9zytdHHxd7FWdaCMTX65uoHJCN1XvQM",
  "key1": "4xT82idjgv2oxm5KX8vTB27EaJAMFExUFUAKNrYvzQZgsSoDyoLGx4MokvpoRg3kWVPZwEtMARRBdkcBrhGkMgQZ",
  "key2": "5xqFcA2gTsiEgh4vto5bQnVvVoXTaz4k2wYz63y3PfYP6MuSoikLBN4XjmYEXZgETSMpb2QUx7QjGHXwVhqDziBw",
  "key3": "4XGSHFCLu8NiSM43KbscoppSXk4P1u6R2a521Fwp2sNeoodZR4CpBgUuVx7Bfgi31cCdXmWgewLdpg38hNHm8Gs1",
  "key4": "3PrnMmyodvSthhoNyNoeWYHjLpTKYYHrt35mR1vBFt7DxE77bxfLPXiQp82pCRGcdGPsWtVFFXdifHyYKUaaNWH6",
  "key5": "3MKxF5gsKJnSiDvT4xaK1bywZ6ccGvo4GWiKEXR5mYujn7QSuzUZ3Xzvq6QnPTSWjwfZqrL9c8FgKt8Bckz4Ey9v",
  "key6": "4ince5D1ZQ7NktfvK4EsT42MDa2z7bWEoNFwxvDYwTzX45qyBHQ67XvnJnpwaCstywvvsK6vLW8HvyPNbjievrT4",
  "key7": "ejQxtu5UQEQKTTa859S2FNF6BWLcjvpt8rXRZAbNZ4G6fci5M2k2kjNGmxNAPJ9LfEtnHTVVNQoUpSR2ydHq61D",
  "key8": "3nXuznHWA1SKyBHmfoBuqesvaByY5o72Knaw9kVuzfgbyqknfvyyWCioZZFSMEarMHAZVkY3aR11EnnLxLmojD2W",
  "key9": "46d1efC1NBWPSq6izTb9937sQ7WTt6b8mRmpQ6vLx5RyuHGJVqAzpcMeiVVEvSsneEo5BmEzgkRcqNEQSMgdZGxj",
  "key10": "4w72SSYUjVphbz6JfA8ouD1CXASqeHgAwo9uYVLa36xCsfSBzcE9khfhf6wmNaN8bZhojPRgd5D1rnEdL2nAo4LE",
  "key11": "57GRsbQgwC1L8AhwoufqxuEeJR4U5G8ZAaxpEYX6MJhiXYADqiasiFg9QNKcybrm4umpKunWm1LTapsWe3ovJeYd",
  "key12": "3cPgU5P7McsxSQxTsFN2JPvAVMkd3Kva5jD8LvCGhzFbX1YB75wBSRXEjVYsVvVg4JxPdM6mGRkMGPnLjZSFx4Zh",
  "key13": "3Wa3YvGFnGDiBh8RkcExv6Cfkd66zchpE2X6KFunxU5PuaFvvbWsRXNfD49pDgYMCCih745SWstMEnbk7B5ozgEH",
  "key14": "4LBQi7uRh5JNF125U52iX4gYPWEmGs2QPehFH5iXTyzPj5nUzGzNdvs3RTYA1LipBF2itKMrNi84THz4tvw9toDf",
  "key15": "4RCVgFEEgp2CGuPjq6rjiTecMNttctpxVFWt8d9CHNkcUQRAfU11s8NFd6V5zVwThf9utHddmHf4tK24DE7p15qZ",
  "key16": "63Td2k1nk1r3BEEA53b49jSCc2RjQ1nFtoTBhzPNmMBS1dd7ws3VzYCZSYkkRKdaLDdm1J783efkEwNvxYCBcNrY",
  "key17": "3atxD6uV8qSkn1y8f2cn1VpweuioJtsQcbabEr7454doxVjwPCJwK7A1aTBo9KXc1mpPZ2so8LHACwaDBsM2hqMh",
  "key18": "39WECnezJa3dK6uErpVX8rQgqNiRZBW7m7pPMz6SKCyxPQWeN6KrBZNvrdtLMnCPbh1CUuYMfmG9BBMKXaxXYxVV",
  "key19": "2U7Ywho26trnvULU1x9KRHte7wuQRZpbJVKjuD9oTenoRXTr4enmMcBHVFE3qKjHrsiZhjgbjFYnRcqYoNp4aggf",
  "key20": "2qUfpUiDRRvKQADp68eqcnW2Md5cYh9ncwCttLRMFvLabPESXYPJXyhaoUEYGTP1sXNT4rJuo5Z5PTbUP3k6GgfK",
  "key21": "2pG3jAq6GcHRbzefDV9chWr8YucJoq9iw6PPxquvM91SG8u4kBPuyMjUxuBJcWCUYP6MoHCjemUCr1ckrjUj6dCB",
  "key22": "3wu6EkFmurRadmMSgYoGRvLcJzXY8Ukdai628fd3pZwB7jCcn1kV1zw9UMha1gaqXSwvkWrARobP6dNUUMgbYby5",
  "key23": "662g1Amu2oiPktk5ZATYC5Pp5EP5VzRpzUAVV8mzgHhtmHqUV5M4p3fjnPfjD5fKpRHZwsVLNurJ4osRQHVtdMGk",
  "key24": "373GkL9hGidHpszQQ95yfcXdL4nEMiynCsnmiMR8b3VBb1TmvsvjBBGewgU4GHsFXrmMeiUH9v3hr9JVncSwBKig",
  "key25": "3LhEyCBJAbAMZnyHiMHaQRZgBEArF29tP3E5BvLRmJhXHSx8VfxDYtkh7mKYGB8K6fGR6994g6MLd1x9qmq3p4pu",
  "key26": "4R91gDErvsmNiJHJpZJHjFDX7v3kWqwjXt3zHVJbtKQVBn5E1irr8TZRwbP2ihGGiGqPz2LkVoYcZND8WBJbwG3D",
  "key27": "3uLRqW4B6HZDkN17VaHUDgzMZ69JBtfDfuKKtgkLkZt94JzkwA5jSsRBCtX9TV22T9VxcQnpvzKuT7witCSZEpxD",
  "key28": "2ekWh5GheEqLwpMwgBMBjg7qSXBnLskLGne6PMYKvJX68et2jdhR4G6TRoqQNTt17UFdj1abspskWCLeUnbhi2mj",
  "key29": "2W1mX7GxjhVZJWYTPYtoFnhVhm4SyFKU8fKJ2r8p55RDp5Ri4pG5Q8udKV6qbFvgSZknSH4HctS9qsHwsa4pitau",
  "key30": "mzNTThrXdBiimhkTw373ma8M4SCid3ddSYC8kcwXb2u4uH6RWGe5GHFcMuA2BPS4Vha7LqA3gE4NWbeLbAatbcj",
  "key31": "5wC4aTPtA2WG6bQ2d5ajeNkWDMtzRvhxiPAq5DN4WxaLt2PgScyVNRKtifwjUNrZjgVboLHWq85ncUkhNExCX2wV",
  "key32": "3DtpsgzGjo1aUXvP8Uodd5Vi4FehStv1jUZSpKAtSWRg3n2FCVYJYG1Vnx46bE5tHAtNHHp55APbYpwGZTkhvAnE",
  "key33": "22bF858HbhMg7ZiXKjwRui1UuS7GiLTeHtCcegQbyNracqk1UKisfTsVLq6zQpYattmZkLh7L1EXxHAEk1QUhiHK",
  "key34": "2dt3dAzujL9XdQ1UWG14vzm6FvG1qxH71dBJdxpdshPtYFyQR9GQSgtCPTmkg9t1VZmqGRQq3jdK4k4dSpRNaeDh",
  "key35": "5J4RZUKmQhptLdmPugRMwP5NeLZKKKkZFQC7odVjoMky82tzEbArqycwjX5SaM7K36Fz9FANuYGSgid4oBRjg73r",
  "key36": "4BeAdpYDeAUpVXAHJthzecoZtXpe7Ukvi6fnPzjJifzHEkKUdijwPXTNMMvviU5pr9hmcKRYgUwpYSoVbECG23dW",
  "key37": "2ugdCpHhpfF9SsKovZyCqoo26nWxtmH9VmHQvn2VWJFpRrBcmzzR79MPQrtPB59Rszdy9uWJVrjodLNMXsavCHxS",
  "key38": "3wjPh7TwSW73qyzZbRhgu8hbCYYzVQCYUeYFivGuXsmxN5kXyvY2jufxd4n4AVbhYxFPw3q3NFZhoNsyjFA75k62",
  "key39": "38Q4RaVeHPSosU2A7CQcLrUyTpgwm2sXeK7CQkQVpVodAbFUWhPKGqL8vFYTxKvNFf8PEoPBHz3NsTvoub33Jnr7",
  "key40": "3i3P7m6F81n5Gy2WyDfaZutkYoffFQbRnu6T9NifDda1s5Z3MpgvY3Ytv1GGqcS5ufJWMEfJSogGbJLuYXNv1mHG",
  "key41": "4XJfWXSCJq6tHN7C3DgRkwq5Qg9DC4sia3ukMUkbeY3AKKfQb7hgMkLq7C8Mo88RBFreQF85AbLEKiCJAYo214KY",
  "key42": "3HpS2cdK7PsJoKT5kGxFYf2F1nUh4QSGD9T7thkRTF6QdLpr89UBrUeEbmbmJ8XioHoUy4rFjayt56im7skDNZD7",
  "key43": "5co2yzUPNYHPTHpeDAvPx5VgwmEnrREJBSGg8QoCV9ABMpEtv5fLhEpFJMWjVu8bFoFcU17q2tQg3BJDx8ixFzVb",
  "key44": "5H68JoKLttrSExBKutdAgGjcGLi2RNqYoHLCJ1q6V1vkqjSWeL9CHVzzNddXoQejUDpFUYMW2Q5ivw5YhtNtVoxr",
  "key45": "BvsgJAkNfHWXVJSNx1he2MoNfozEMWmBTTgPQs8M5QpzbJtkgPD1wCUXJ7RS2JsEgAbi5zecxGWprztvKFxWwwT",
  "key46": "2n5gsdKPA8UFicbbtcRZ7iyGpX2YBtxRHNZKVeWhi9T8A98jN9dxwx2KAJSL1n7XxS7q2KEK6X5Y7pfpPcw1KdBj",
  "key47": "2X62mhKfT6JpALrK3DeYn4J4VyVwrPS5nKwT5kzpeW87ZEw57d3Rr79sHJbZjLFBnqEbn3hJYGZjLu6t1kun8UgV"
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
