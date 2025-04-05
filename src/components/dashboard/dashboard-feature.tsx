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
    "5couejhWqemQGbe2BLahYS2nTYkqKPzF7SbEGyxYSoCFfBtrjbogVBpxqCEwpZgVztPQ8Q87coUGk4UEocm57bK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMyMLwNYtLHN3osrdjTthqDt4e855QzWeGUCvusgNG2y9rHtzymHGABrfqxgVATupvRkDcw1iTDA6z7tHnEH8Zr",
  "key1": "3iXPxjN8NQYETq5cLPADM1nW4HhM52EaUB228gRqRUN22FCjUkfnLppUwtAVgQEQoQCcqPp77KgsZ9AAeiArDFFC",
  "key2": "9geAjBKBJCMb95UqUQr38PpVHpceEzisGHAABKBBzDqaCZ58hnQjPMCP7FMQccBNchtctxU5CrpPqGxn54GvBSN",
  "key3": "5vEA5ftESA16ANzZSpcsCRHKxD9Kuk5tzKBJrJRC9f1hzB9wG4yp4TSFAUHfT3Y74V9HfvYir3CP91RP7rWVSAbB",
  "key4": "46w8TxMp1h6LE44DZ4fJUyz6gXRM9DGBPknjsY2DAS7q96yd2AaTgfhek7qpBs76DnTSaFSAixKuYhsXGUyqNDQY",
  "key5": "5Av7tQyyiJ18Ya5qepmzQHVLvB9xV8TAfkAxz5qMLSPH9HnxjywZhoGAMzaxBKExpmhWKv6HiHtTCYCx5M6jyfFh",
  "key6": "2uVrnMxfuvuzbDDyTcrwvHSXwjgvB5CzYJMNccTGN5mpqDPn3jT5hX7W4YKf72xHacQ7XfwnZcJSg7pUyAM5YWx7",
  "key7": "2AqjMYBtrQPjcrGCNzNnr5LsshepcYv7Mf9hZPB94Gz5w4bTdeL2K8NNvD6W7qbQB11H4BLvArjnpKw3ueBef5S5",
  "key8": "2YnnCGMNYEQy2Sh96u4SzdnZJKdaDzFmyucwsJYskLiTLgc2UvB7goXqLoMpE9uMvjR7yyPXuGKAcRggmt1qoWMi",
  "key9": "5rrR7s2w3wWYFPS6Jtemw2MWZnAuwihdtwDqmtKB78N3eswS6vUtYhT6pQxPU6BUoaeBPnG7jDThLtFXLziDWrV8",
  "key10": "46NYwNgoEZaHL7Sg74ZQ4L7V3S2vCJBwQNnqTkBtHg38DDHpTDcAM6CRNa16o6mdL7U7ZLfXWU5USuiUNjtuKW1B",
  "key11": "c77uK59882Lnwtu1kMwxgCQjrxzi3bdMEY7Q2pzQohgXoVe1a58Y3abEccU29Z7CL7ZQqTyumZqpjFb7RGQCHZg",
  "key12": "4EahZkmRZBvCpuoggwMdTzi2WR3ekzua82oJFU5kUtkmt3iaSWmEMY2eJQvHG3ntWPv83pSHAoSyVw9wvbca7KFA",
  "key13": "4n691GaQnCXW413r4dLVBGbhpufJdwxR7txtFaQfQYUpwKExBQZdaEtDyY5T4LsmxiWuEm7xYe5ZNbF3eSGyh6om",
  "key14": "4UrQn1192Rk1sQGF7hZxzrP1MQCatPyHeK2WLCZjeS19spaiujfNfNbMDSmswCo9aKEZ3VCVRQcPoQ3Gdh7uTeub",
  "key15": "2PbdB9G5VA3GH6LMQ5mMEJDLVkYTMeHieaMSTehRKLEVy9So3BwRJHpHcudByKvuD4zj1GhAC2XYQLEK35NJ6sMv",
  "key16": "2sapkvNJ3zvbTJVFbDAMvUCCHh16mhr5R1pm85qXsaXMNwemiYyPsWpxiFAyGgFZ3UivrioN6Lg98774JLnw5qGF",
  "key17": "2RPTWubYZYfbAJLfTbwsoLCeA1TpHjRyegtKEk88o6G97ZCDd6FZarzLrEvNoQU38iDsktCMWPTpa4GeEbG1g6Xw",
  "key18": "2PAppADkyiKjY1BDiGPcMVRweT5BfynP2fg32vDEBGEJTht296eVUeCB8FBWRGJC2Tm3yGUyuGpbZzuMzG8KqUFX",
  "key19": "57m9bng8ArMKKQvPSf7ipEQSDfb6ggWVkgRpbbECdwYeYxcFCbdV2ngwwLLpMUbSsdCJwKUNrB7VB8kDfJSM4J9i",
  "key20": "3YGzNike7kA17teNFMYKKJSkjykXYKApuR9VtUje7yQBF9Qt1zrpuNkrWxwRp1UiKfMg6NLGSnCk3K9t98yumjVa",
  "key21": "4d43TpeXkFCJifS1ZaVUNrveGsx4M1gRC81VMqBZMbKhofQhEzBb3qhWKdGJEdubd8ojpCEtqw1SLwauTPh9n4Th",
  "key22": "4iRa4GTS44jWJa77edqUVnVmKV31jKsDmuKRoHg6ecDnrrLecykEbQ3z2xtsMYyVzKxfhV6JszCTGgyTM5ZeqVnU",
  "key23": "12vpTkgVsuDb2AMfVvuRza6BUqJxGFX1ciGoPtxVdeHwgbtAcP8AMvaQN8LncAxvvwR9LqLE6KwZmYNUV1YL5Qf",
  "key24": "2LRbsFaAya85isyssTgBfuCorNJjyVp1SMG1DBqFp2mDvUuzup6LjvXLrqihYrHg9bj3Qh3Dy8Du44XrGnvAc825",
  "key25": "rjEdQ7r9wQyQbLdaX7EmnS2dMAhBEuDcN6HHCYJEzaxFtD7xp94n7orfk7JDcjd8kuvqVHnyTsX4xZB1GXuARrc",
  "key26": "4856xYUE7ueTM2p3vc8fEwmu3n9ZWF8N6ojMHynUYeDe7QkfgYpoYGwaexBm2zeobUF5nE9KVEzrNx2K2riViGX9",
  "key27": "2b1tXF2zZfEQdeQqXaH6VXJ9DcC3FsTCZGr78qQKzLSPpBTd2y8Fx9Gq1ACjDQ6wm9FPkjb4qo21cXJY1BTgH2ez",
  "key28": "4ePU753FTY8H64snWjLVyCbum7gK7sTshF555qX3cMKManSUYRbS77r32LKxx3h5n8kjR8rkjdem6oUkNX3ZxPUG",
  "key29": "FuwmgqraZXaNkmRSYKgh2KjF5Ra8zsJsAs2Hve2gSTHMhDieZYayNbZZio2CNiGrE8X3MYxUixTnVtWWzXGDeaN",
  "key30": "2RLBwi5ec1yYoqjXS7KZjZ5554ip7e25huwCpsCsp5HHacZmsWPwvhKbrPcb9B4U5zJ8EYTEWorSE8WLbCmJ3e3z",
  "key31": "676UkKRxB5xZwkUbpqHKuc8ufUQ91iWsqyNPDKSgKu6LDofqGqU6C9rHeinKBk19bJATCVHF2zGjVihtfG3iDgag",
  "key32": "4tvXxWCgTYVPoDhPD3zwzL1PiYiVKXJYFo1Tzw6dYyR4remmYZ5QCdXVSUib46sX9pL7bSC4VKhYB4FxkZx5BAWJ",
  "key33": "2UwPyA7t2qEn2zFikLxXG7gsECNGTWnGJp3y3f9tHp1KL1E9HKTJ66ZwkcFtCtbhA3TnsCqca1qgE8FCQxx7XMDk",
  "key34": "3kpqbkojMRDHNrJVyCRorS9pt1PNDJGkLvFNuonvWovSdNdJ3ArFMnXJLAZAwZWKdfzLqtZPfumQXYEwBYAPZUzc",
  "key35": "jP5XAPNFtnuKZ2dW8HCcvXt7CYBEkjAtDTNSPTzjQT3P1mHxEeyMi8vGvSuCR41tTTTpwydHdgH2xDMeFDzn9mb",
  "key36": "646AJAbVxncW12E1MtYNS4Mm8cgTwFu5H8BFmyfWcTVPsjXaptUu73GQM5RLTmfc1fM76VArAmAzdU2JCL4PscVY",
  "key37": "3Zeg9RPPoxbCmv3GrQUfRQ8wGBdXZ4iJwdLvXY2kGAbqkhxJ7iiYP78T6z5ae1EzjiyyrxYTvkHf3DLTQxRTCQH5",
  "key38": "5Mehu4sP2XxNeVDDD1fwZ6gT2SAt4GBTgJ2iXW9PvJM3t1GaKtJUwYdHBrgNpJyxg3mACN3Y6qbAojcFgkKP6yes",
  "key39": "4Q4xvbfGSeBomhxyffTYbZoxCF9xaPtzb6SYDHrLtekZkBA1Dgtnwkbebjzmgjji9SQ7gmdC7bjxtK2CNz4Sawoz",
  "key40": "5mq4Jnmo8CeP8eSTWCz67FAG9ohxffypZ5ddC3S7KDXWRF4i58ywFX3oLjfE6TXbt2haicjPPowjEKarWKMNypV5",
  "key41": "4DbaozbT7Wqfq9aJW4xFykihXNLaNN3NkgiUSCVm8qLqv7LdUQY1ECAdewfdhjsoFrdpSYUTstrzHv926oR3ZthC",
  "key42": "5Q6HzYRABjkqRsnZMMkoF9kRtPqyP8pENzomVgcnr8RGQYmZgEF9j8Pqc3UhRTDgtsJiYWtNjHcnfEwk1yRG9jm9",
  "key43": "5E4brDUYJcm1HsfVBK4RramtAbpQ7YaxrMZ5QiFS8XcpPupv2zbm3NESawSetWGPTwtRokekWXsXaBLDg9Qxf4Pi",
  "key44": "5CDxLLo6czCXbGnFmUsK746BTnhXcFFrPwXBR6xuKGFtqjyuZWQVLycRKXnunkKSmTrawDMiqnUSv87UmkPpRuap",
  "key45": "4Z99rQMCiAJgGnpA7CoHG9VK7bysKb5ZChpN1wjwbASSVNc5HXR26L6sQVXDtABGXLFW4Krt1cxdjQSBg3fFPzmg",
  "key46": "3uvJwozHr4EQ5g1B1iZxxj4cky6xF27j1TYzDoy5Y1z9NX8hUdtwRSx8sNVe1CecNz7SwjLQinMdAESEfZ3vK2vC"
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
