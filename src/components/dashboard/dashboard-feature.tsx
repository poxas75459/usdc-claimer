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
    "5bSoMae77twAvxLHdrAyVn8CdyDBE8AxdUur5Cvmam8uws1L225Caj5iDuRnBYGRpKEqR2uVo8N7Z5Mpc41KDbGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n39Ezxb5562ZVpUshzDo1euAmk3BHyULjbc9J8CPfPhNF55ifza8CBqfjPdvEvau4Dyf4bmeLr6fkpq86XVyWpc",
  "key1": "2DJGNqqrPtPjCCcNZAo1MrXsBwqQr7S1gr47LW7Kq54Y1V6b2wVTN5uyWWVaRD4vNSKHZRpKhKmhFa1QqeTghaEz",
  "key2": "3N9sqgfMZvw1iGb87CkCMs6xAScTrcvtP1PVwPC1sDaHSEcyscSMCBtydK35tGLWy3mZhCxeoAfbnzxmNYUnawH",
  "key3": "2wvrfH8x5uYuc4TfMhdCFvmiou3kYCsM4JiA5rY1noXELW6csMS3g1rmascWysNYQehrSBRHaaXyTAEm8zvT7K7V",
  "key4": "R8yGwfbXVf9LsMgSM4WE4kgEjwSe52TZSgKSmhR4FVEmWxWF5UyEayA6ruGzUyHMDj42MzjupzPJeyZBNH5ao9v",
  "key5": "P4F9PVzKrEC66Um7ANz47qDC44mrpMVBFyf7pmTaTNFFceVLteMuKd39KKcHn5w1oVWjaXrQvLHTQ7PAjLTWrES",
  "key6": "xmAnF5nBx35gysGj2j92JxkejbewF5qmrzmeAqGrh1AULPPCNC1XhXFi9bzqyWapCqLvCqmh9nikiGLvUD9wjf1",
  "key7": "5a9MWbXf8Pgj5cwXbRcMgdpCR9D1oK1h5sgiNJXqdhJ7sCvy6x6YRhs7KWA3gJgGrrKTniTrRrESmNki14QbUDNP",
  "key8": "sK3s1eS4gGfGEiQgPszPUNeCzmRhRySfrZzcGyP46iYV74EKwCtKcTgdWCKUJn2tqcurd2NmPV8nh5PL7LppUMP",
  "key9": "4qzKF9oFMvmGQyt1vaDjQUWcXqXwpbb8d2WRLWbeintdhdzpDkkVTvorNdLB1m1JwTeM1FPzbYW3Wk7Jf46Dy1ez",
  "key10": "3iZ1uQAeZM2RQWc9KdrJukHrXxWo75GqFh3j1ShWnPNEM6DesHpzxaG6F1MbKuyahFyURNSuQoYXLEvHdCuNEpnG",
  "key11": "2sEGCQqevcuwPvQSWxrDzhPJH9KBa3z2yFSvd1YJcYobuGtmSvCVr2YaDF6B52tQ6DmHDkuddwGzqGHzCUFcaVqB",
  "key12": "g466924VXhcV4qX51mqkbLFPQqFs2JjBdqg8yfRU6X33y1YaHCyWaE7hRJ2oBDcscS4nJGfSthygPptYR33RfuX",
  "key13": "4KocgwH1uQiTETvNp6MLXDhuNMUQJEJ2QbLVyYk69tYPMazkNS8oZWViVX6Cowune8bmm1SnNdGbZnksqjtU25qE",
  "key14": "4BR8kaQjtYDHEXGag1g53s35ZQ6Zu5YjnUGLvaUdH5nXdTeiU6ca4v7hSfehSHfnQBAAmamHb9avD8gMcrFoQgde",
  "key15": "5FBRcB4HFTQU5ufBnovwJ54WcBLjga1J339F6e8kt3moh4nUbrFnXKWdeNsG32oQpUb7xwkdtyFcGKtSH5JmSwjA",
  "key16": "ZLoo43WFvvGJPpnDaxb1ZPfjiFGxmggPFdZAVAUqT2XfarnACwn7gmRg5fNH62wp2WZ8QKmMLmULQScnSHmAiWa",
  "key17": "3TCByfu2Tdq4FHNWGc1U86VsULTYzvnuLTPevqeNPKGLaiwAf3SDuYeitdLnto3qHe2q2hMiRfbMZVZquwipACdf",
  "key18": "61mUMGYxmAUaW3Bi2RcCfgDuzEmbzrXdX9xwVY9UhcR5mCzsksBcFwHKbTkKqhL2jDtchGT6uGFCXDS8DfWNjgb1",
  "key19": "2SE16T2jnoHdRkDtaB33Ta2PxzgtrTvG89gE1J2hBEyDZisR6m4pgDay34LpxjLUr82NeyHJCxsBR3F8MANTCzjR",
  "key20": "5dErARBtSCCe3taHBpjt5bcpJJ6kNbKmFATGW2t3H2vHyEdGQBPwzJtoP88f7hywpojx3Q5HYkTput5Yy97rTo1Z",
  "key21": "34j7Bk7a52qrrfCetiELCvBN6o9n6tFVRkimfK68A16AMboozt7oV6zQgCaKdwXN9vt49UbbwKCA13oCvX2M6TBG",
  "key22": "PP9StiHyRNuUG67namVg17AXLiEeEs3EZayaYFePLuZcJmHsuCX6WctTjpbcmtxnAyPU2ASkUtoZSUXZE9ZYutA",
  "key23": "2BDS9kHn9v7opbq3fJWkWwJ6M585hUQ1j7YtHxs8gbUGBV7VTZxTLMTKGiUvwR16TPN3LwUuLPkLQVsbEPJYhpJX",
  "key24": "54CaTo88X69miYF59sN5UDoHDtPg5RagY73oj6eCFtqqYw9b26yR1ZMusZ27zm3tQFffsVs9amDs4qy3VDThVN5r",
  "key25": "35hhhiAKfBTxPpHm6iwCR3hRokE8G2qXXb1ThS5dbGmNzbjyiZPqpeKkJh7Cst96BqxDFjABmo53QPoRDN8MsEUz",
  "key26": "3PEyzjdxGwwVzC9ewDcy2BLhjYCKqNxsDMtVSyA7wHy7x8PVmPcXvEeRivPzkmLm82hAmojNFberMNT6nLLQ4StN",
  "key27": "3cZt7e1qz3CPrdXoJ6qX19i8j8U9w1CExP7qh5qwuLVb6pbc85taiqtKc6hPomcSuxDBA8Y3cW96hCvHZcybFLBQ",
  "key28": "2v6o9y5FUUDLTb3fehSK8u3pXdrqJf7xTP8P1b1j1aeCxNuQYssa6whx4CdH1LDvoe2Wu2zNeRNWGs9Xh6vWHUbK",
  "key29": "2wfZcnKQsCvw5cmCQAXJ8b8goEkueC1DXjseGTDqqgLzJ2pmt4xUf5QkmjTv98EzD3r76K6kpCU9nNoJvCmGirrS",
  "key30": "4Ud8McqQ4xt2BvdSd26GHNSUcuNi4ATCA4PCe8Jgg8v98LrbRFRNDtiGupPguwqXsY3haiBAT3bKRwohZcABVWoJ",
  "key31": "c1GMmXARH3k7EhqDVCduNEnJxM6pHnGkzqYxGfS3dBzp7oLNQqvsmkERWLX3ippxwt6YQPiGg1QjC65SsicGXqa",
  "key32": "2hmvrgbJ1YQMs95ofYSPvUNUYiq1yZDFbSyrX5m7obdkboUzskMdCgucjYxjsSSgDLpyW6bJB4ScSBLdf5Vef9E",
  "key33": "2jC6yEZj5E5saSFq9gXciL7Ghc6bZNuzpZf1kbq6TaZjJeewu1bt4xSbvQTeE2khkCx6rJ5UqWEqo7cnACrgGmBV",
  "key34": "3jAJZpQeRqxVgkZgHSpueSg4voevR7V9CmN4TdPod4QxTcJUzF3hmzTJz2e3e3khLEcS3PoKT94aRDHcu7Nt8amP",
  "key35": "26ArZ5YP856pUnotdrjqkpmyogKyLFNW93CvNtH4ctNENQDFgzJs75MjaoRE2CsKCMzzK1reMHfe8tcz8WWfLkMp",
  "key36": "3JfNwCxxWzLtTM2jyxke2jtw5DCm8qC5tcELKdWNE94Sq23EykyYoWrYAmBqiCMFsoiwU5fmY7Q5rhdzQ3JT5Ww3",
  "key37": "35cwKbobKRZE9yUf2Xg9D86CVTpu4TPcgskEJxgP88xiz7YBiETbQKSKN8tu3qQ8u7jVV5wtrDtS8DHvMM2tAnWx",
  "key38": "4Y6zGHZFGVN3BZAGgyLxNUG4TSWzWtpJwxxL1Ta2bjojfor2fj16n1oi3KfBNyFm7AR2hUwzN1Th5EEu5iHNypCd",
  "key39": "3XEskiS6nMToQKLqbMs7XHuRBQDDNAnGERgRv1G1gMLtoN634Zrs9dsk9Eq7xvXtQmvLdDDJoFuQMTY4RFeHHXss",
  "key40": "5MnZHJ4Hf5S8nibNxtwrMxX1ZpJ3VRX2HLUJdQddi3SxqWN7d7qYTH8fm13gYb3edWK2EWTwu7bzkbxQuZEdKKAc",
  "key41": "318MFPDtiuVQvRGgAM7rVAiacPN7d1ywTsZJ8R1fRcrMjgRUsnfe4222PX84pPtWsq8g2tytx5SDYTdQkAFH6mcz",
  "key42": "4tJtM6ARaXr1EqLZNomA8eArsqH2jBoNTZtFNbYUtJCG5r6LsxdtoTShEQQfYBd45yXNL6NVpxcuzQUsjVsK97sZ",
  "key43": "44hR2mUxANR9rPtSam8nHim6K8GyfDUk75gwMmuLuT8RAFt6zpN39c2graB4rJWMAYcwwFKRnPQwzQ55xmzpF4Xv",
  "key44": "3GwnxpHBq7X5NtZDJ9ycGTQLpFHiXLwQ5Vqx2PoFd6RnTMRrHiAoety85wCaiuWtMGbZPQn4crDdvhGxEA73ZryR",
  "key45": "4ytTZLQiUKDqJUjwUM3hKvvAQrkpkPTbVvkwuq3sGbek3b3Xa7i49ShrmnYFSnwJutZWtUoW7oe9884mumZ3Wcb2",
  "key46": "4gMkMqhkKD9uLXXa1BcjqsWzjHWTEyvbgDHe1pQJj5fcgH24ak2XuVEF8XhjCiHXfmy74QNzoZKGCkptCxqSnDrz",
  "key47": "2nxX5rLciyKsDsyP114sq9gu55Tz9xS5bxJMy9pEyK8AfmBh9FkPxpupwnjbsTfCpsAkUXewVGGg9rq4LHfncZUg"
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
