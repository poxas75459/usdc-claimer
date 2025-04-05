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
    "qbgsAaqv7A9WcbtEbokXaK1k8e7CBdUTPGyqUJe2dnQ5qZicsDSSGR1fDdYM7mwmp1ZjHixrwUbxzZgxUQEBy9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKtyrdqmJzKG5bsLQWVhRPmug67kCGWsnSVjPJcYapdUA4xtffKxQesFRURUbLnRo1K7N51zyDWmyCDjzC4fe93",
  "key1": "xLAbWfyxie5cR387yEix1qUG7KSyWAtrm5FjwHPViWtx6FDhVqB5tYeB4CdW3aMC8tXQ9vFPhLwRyaAVjAbafzC",
  "key2": "3EDzhbX9hnRTS1Xb7QULzg9CqfddZ5XYQCGuVjGhTBky6JXkzXbbnDxP2efZnbV3fFK9DC1gPifyTMi2SkCr7Gki",
  "key3": "5RuXzG3DuhkmrwA4LQ3wBVCNA98wvgotWAfCkcfPxkyA1Df4YCcwUDZU4CwuNZPGdSXdE1eb75tEquvcnh8cq9n8",
  "key4": "4NK6dfbjdh2vjqfhVWKnPPWDezSjci3Ufje5WbMxEvXMu2CPn94yHsa2aENWeG1kVbjwCsqpFb5jyCzirTqk5u2Q",
  "key5": "5M8J1UfrBc4s3XiA64VmC48nV3ERjJWJg48rV8aYX9UVUosVU3Aq8SthHxeVPTDaK3CXCMQes1FjSjFgbPcQvKfb",
  "key6": "3Gw4NgZ2rKrZrQ2ZAwAfyGdgauXfE79sEBPZJwv4E3AmG4Rj5trXKfobikFbkkgrTBn6PXxpDcxUjBK144fd6QiF",
  "key7": "58mLNP8xKHtLC5zgFSKKNKmKNMgBrAXHEmSMzuLzbQVwGbGfBvCKGKN1QgagJVuNU4doFGLM76HNga9rfwjWbwAq",
  "key8": "2cA6pC9gBj6zXgRkeS3KG5HNRJ4VYwJP5dsHcV4dg7ZGkre7KPyLitcF9YdosBeHzpa9Rr7pRmJZAzDoSbMvEcsq",
  "key9": "zzHrL9xHdydUUFyKULNqqJv4sKxqmDKsGEdh1VYV2wJ49sQfTB1Z7nGVpcEMiHLV5UBrJCYZ2rDjp5reT8sUXb9",
  "key10": "3kPW1eGEZUYix58PjXbFNqGpaGnTqsYje4hxw3bMhH324qzcnTKuGkQ3q3vpzb663bFLXe9M14HTa8zRL5wU5XUP",
  "key11": "3GSnQbPJTfiLCcBmWQ6pmNcj4Ga2wtCwHFTAPm1FkkwBZV2y19gpz1AzSfotn9ha2jt5TurHNwASy5W97SMm64FC",
  "key12": "3NpuMixBRDoarjn5rrnMKK4z71SNeCvCBxQ6bSEtsrNJFmUFUzJNGB9Am9sCS3tChww9Hz2JgudFLqW7KSiUhRKt",
  "key13": "3EwxBFeSoWh2P389wcnkyddZzPyYtbKuGgVQbaNnjBFia5C6DRLEbjNszahhFnsncuEiVdcKaqBdPZn3JEWjNVRf",
  "key14": "5HJf2jnxaCbsmqFVf6uzV3TCXfvnpLZfJckvakpAR3iGjcEP5hxFWvJ5YnP18X7kKNxDdULPv7wzgbfhhRy9JFN3",
  "key15": "3rhUzH6Qy85XfvqqQWVtzrB1F6g5jmf87xaop65kgzx6V8CXqLbqyBtFHwA8bzeWXiFVXuLp29nggLk7LcTCV89Z",
  "key16": "5dByw8sKENQanwz8MQ4wKmiXwiUUvgLwJS4z5BM5burCmy8KcDBMg2MLV1m7ZozazVf4ztpSn1ggfbSLiqo42tkH",
  "key17": "4Ued4WNXGwhPbAQ8wxeZSp71fBpLMgH69ePjbUn2ZySEn4bK3ap1Wo6caLkX2hiz8H38tsL29RPphCpvQJ9SGPM8",
  "key18": "4zPQxFzj5RsYQ4XVJLJombify5Jubnq3ZzGGYGKvH32YjvpvCenT222fHujkhuUXRZw1YFN1upiP2yYgKieAP5ZP",
  "key19": "42LdFYYnZmQyyCvYN2SGJKhRZjLL2S5jV9hrgzQPEmgUR9xav6Z45e8JjMpPnjA3JtfvuHJtN4AFm7kwB57DxGLP",
  "key20": "4PF7K9YmxzQRPynZb5wKAiYz7USbt6TLH8MrEwDCkzh2tw18ky3AofNvuqFUzcWKa43jDusoeKY1toeaLHN6Pt3h",
  "key21": "5EFaohuPjt8NvfqSobfii3kb4joLCwpZYSAtaLhNvu15TxyWaiD2AijaKnjqr9dLz7SFXYdshHz7TWe5rRgw6jeP",
  "key22": "PnbUCiJ5SeGEwZTpH59Hp1iGoEhxsagAQCE5Rt9u9cKSTY96EUJibKNtY4rdecbPVs9D4mVUuoakTLCw5gzqv6K",
  "key23": "4wxoK8xjAuNKCgxyxKWvWaUJE1AnCNvN4A5ZTwE5QngEeodGK3LXMPwwoGQ3Ue1qtMMnfb8WzMeKCU89W6Yhhvr",
  "key24": "5MSkEfnNXm5H2qR3VQ3iJokqDELv6HQ5hbzsW1yG7KpBS9qCpVAmxrzWkneMwWL7XhXtb6zhL2GStCzY5EJ3NgAd",
  "key25": "5QQ6H4qkMq3wsWaCncroR2aH1UoC6k44RPvFgyYRTG4XvUX6hpquD9Q25oRUzYboP6MQ8y5xCYUiGSguu8oFE1JX",
  "key26": "4NNYuZrXHtMfeBjzXrMj2Zk778GbNkxsGhwaoQot7uaWmgiqYaevDtRjZfeLPdshnuyqhiXxAmVQF1FdYVuwkCSp",
  "key27": "sWhGJuAznmbEJbCpKrASgbYEkxMx6EBPWY29oVq9sUkjsmFR8NCb1RAB2AV3EM1S2SSbiU1NNCkrXFBfweavuGf",
  "key28": "24GqfcnAKc9qbB7heaid77UCtAD4N9EqTkZzfhbzhn2tzkaSCvB4TCByrLgygSCVBvBnMYQS18oATKuxWj6TbufC",
  "key29": "YjoqFVMmujcU8HC1sJcuNj57y5Ce2XJDeuHXWn9fscjbuB5FjiX98CXtwgdpKexUbecuJuFo3EeEiJyyvH2r11v",
  "key30": "2NfAVkxtbxqnPQD2CCcTm3q1CRRXbXjWK7hhwA96oUUsNEq8rEhNCpazAEQ1Dx6ZECQb22YegYSDeTgxb4qZQfjv",
  "key31": "hMXBUiA1wKN39XX5v7hRKXyjeFP2qoSV7SA7AWA63WttXdC5kXvMQ1US4CC3cNtGSzsr4sZ8oSgkfuMstfuNCsC",
  "key32": "4egeYGSggTKCTGpruBzJYUmihCqWqQk8NEXUXVHfr6NL4c1gm4nbtycWBTkDk67oZeDabvpEvAZUKpxDZ5TfoztD",
  "key33": "4L8Zwsc8rfcuybHcjYacMGXJmYdgFEq1NS8VmDkoBWvubSZYswz7ScTjXMP1uYz2kxH7CJA4RhiL3o35rJEz948P",
  "key34": "5NLqn5dmX2wWb3Pt3rjZUZXQcpbUU3msQgQpTt9qZgkh2Qo1VZEDEsxStpDk4AHZKUGh6Q76DtrUJB9feBvrxgbe",
  "key35": "2SBTCpXamzd6AbBTquiN9dT2au35suVTfUPHhvpUDvfSVL98gsCettJdf3EVnmdYByE1WDKTrKk8J8XuwzsfS3Gp",
  "key36": "4MjcoTVBUWquyNrzBA6wAzQqu3zTCmvigf87JJkaUqPSekAvL6fPsyhJgxxwKtqh5jyAUuWLzaDsttAMCemDDAKt",
  "key37": "2y6ngLPbYgsMe5HwtTvZ4GvP7KKtVsydbPudLV6f6U9NPs6sZqnPrRWiJxzPhA9Yi1pvTe1PsvL3EfTeKMJaYFd7",
  "key38": "5gAtENttoHwFiPSoiGBEncSSufv5zsBPDAPG7USV7B1opK72XkFJVbtN6pV8KAQg3YBX2Pq7GMaReabYwm6haeJS",
  "key39": "xAfbFfdhaRp2BSaB64n5B3yvebjNX6VCa8AeZ8nD8eHdbnknaDG5VHX5sts2jsf7NSGMttXiRF2cswKVoomVk4E",
  "key40": "3ccu8ng6fY96Stk1VDDcDFWQqAKyHp2VjHkewcyspXNj9w311e5J3JwWdJjHKA7JgamGgdoG85TkJV7RmuJyr88h",
  "key41": "2uoQG7g2k436VCuNaa5tTwohoyzq7HP9dtetTRHj7VpzFQcidTCLebSS9V3QeRXofxzZkYZr6Tiu8X2yFyg3Yti7",
  "key42": "9rZsZdMgbmBo8mQMy4Sm7kaQZq3weDXHrThqMkRrKkZW4G8SiqPKT9ZFVKbQWZ2aGtnbH3Vm9acyZN9oTBj6dUg",
  "key43": "67pUzhURrtmkiqj4bhZvDHx4mKzLpnzLpzjDbyxz7foSbwXkZLaEWsexpsF2mZN3H6k5YLvLKkNPgj4dLsDQURPP",
  "key44": "2AsNdYtcYKwoucDovHeSXTRawa3Tv4SgPdJgGZzTRHvKb5C7njDrpExWgPB8wHeAEmzH4o5BYibBG7TjmD4oLHgR"
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
