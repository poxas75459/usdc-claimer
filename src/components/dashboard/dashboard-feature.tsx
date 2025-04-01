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
    "4t3QvYS72atn7QQ3oRwX8HzHwoBH2ib3XNjjgB7YGRR8m21Zst1NdqvueJHEG5YBHCp54bN2HUayLJnQLGacW1yy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UshLpfhKn4G2yDmd1GcptSB1YC53R7MH9up77epTRkduDxLj7TFkAsqYasjkkNb4iwH2iCzLUssp6VurS5MMyFj",
  "key1": "2nNk6ro7zUEsSEF4mU7bSdAgyyyp7UNaS12WKHPxznmvMnR3gGcRRfxY6GvAmpevQ92C5cREDeFy6jKKS85gQvxW",
  "key2": "3vE34xFRafcjGiS4fChoAVtHjgACfRNFuS9tEHAuFaoyegaHkddiTcyzEA68PpKjV862ThTEwXo9eFp1wmvDVx7n",
  "key3": "Tuhek5bP6ke3QvBcaEs78PLWaVUfPVmviCZKBNQnpenhdBwCGd4rhuXseLTczZ81EXppjHjJRWUkCJrSxKRPmNd",
  "key4": "8Bh4q5NC9XfAGTKSgehmk5Y2ZYkxJsprSrjo2azSbTspr6TPvBHK4JjLwP4FonPcgXEAb685zG5rN5ijhkqsyed",
  "key5": "TjNTQekhWkaDSsLoVJoortjz5apbZbfu1S2ATZF5LrJhzqqmdAW94UThvauck2u48Ch3b9NHcucXJgUQGha8iNV",
  "key6": "3TXX86SEepctwfbVcHyKPuUM7rKftsecQYGEMcgZxvWJomBRQoHjV6w9QWg8bRvt4XehoUbfjuXZywRUxXXu6LoM",
  "key7": "2gmqvmMtAqvYKDWhVSmVyEkvBEvTW9dDSU5jWs6h1Y1mg1zQw67iv6YgwkwtURe2HJse6xQARqvfAfqqnyyss83m",
  "key8": "Q62TrCX8jENxzopAsXDbE9gAm6sBmQJTpBeucV5QNJUqMXUYz72D328UviC1pskwPKA9LgzfgfRw1vxzv2G42Wz",
  "key9": "2WSA8fhB2XzTTsaC2SB8dmPQcwgQt4sXw2fodVbYtk3Nmo3PYEC8bJjsZsHEjnZvBgKpB2uw8e12dyDiVQqCjuAa",
  "key10": "5P5PHU7NnUhfixm2PmX9KtJkEgs43c574Duwg83ZMHz8ijD59hTE9Bdr2WNbYAn9NYZach2SCfai6VHnwCCGbSiU",
  "key11": "EwFckc1LXThYTjNvncF3XkxZuQQT5SYdi5aE9aYJnDoTW2xyWfy4MNkBmYnQAgGpexzN4mSLGeT9DUWEjvBtV2d",
  "key12": "4ALSdwP3BSni5EBshAPX4FhCbSokqAkzFPKydGPnn255fCzVDKR6KcqZKV3YEXdyAKV7jTLAqEHhX8srfx7fwhiy",
  "key13": "aKPNuvPdWFQySKb1JRKREwwxYmBdqPrz2PPcwv21i1aEFKnVpwf9tijZPP3wJa8yPapxJFNYFrmNGGGrLJ2uQys",
  "key14": "Xt9voZyyHQXxsxjrJpZABd9VoFxcV5A6AT33qWnAmQkx9saP9DtAQ7TV38aaLxGcFQAUGGXwfzuVwdtLdra66Gy",
  "key15": "4X1va3KwUqevC44xjurE8cXATNjf8tw3JeXVipiicyx6uh7n4rbjJ1xWjURW5NqgtRUJcNEFWuVeHmfNfh6AWkRe",
  "key16": "3CLzeFhU4ZRjobDHKooN9PHzQWn5R6YxbQ2bw72aT3PwgwhZx1WsBN6X8ks4kwtsFBVV6AKk8UWiHHNG3e5qrCkW",
  "key17": "2hJPymzAsm8UaP7E6WjKybGNAtyKeGb38tTCbvjtDCSpfaNXy4H9JotxaGn8M71nS27DtGdAQFcg9qNcjSdFBx5K",
  "key18": "EH9xEvnWieubhqg3PbWasSMdVGj7AepM96qXGiTf4V277NV679cVPiTLYbgU1cXNW5uqQSYYp2uhwgwHdaZHhDr",
  "key19": "3MMv8a34babLA4RPXPt33xBFWqcjTY7JAiAfrmXC1Jx6wkveRe1qPSHRVwUUsSgxkZCUguS2uNJQPzjUCy2TLuv6",
  "key20": "wvx4tqw9w9zumUhtixUNF31WLeURBGSYsxwGT8sCp87ANTLRuUvHVboFtbdQk8e8dcQsNt3UVG1WAtXYDi7B2q7",
  "key21": "2yzVQtfaoA1cuUzt8buTxHvMDJ6evdrd4vmZzzyff9nYRc1ZxEBReJrf3CFywjZnr31ojeup9rpWjUSKcgRxzEpS",
  "key22": "WiCG2fUR1T6CuusMTMkSyAkBGn6SL4bvy7YqWEGvWDbc9tUAXEARzN9LN7YYou5Z8mxkb34mrYWYrbkesnF7d47",
  "key23": "4gEiHgPZuLqBx2eJQxXVXmta1thsCV1rr1qMJ13mpJedSwnaAehn4YNR3gPFUH1Q2T3dvCa9KmEYQuEAUc2xki4G",
  "key24": "DiZqsEzccRBWqk1mJTh8YZo9HWwAKWTP3LwyZHkGi7ENrytV5oUniBuXB1NhovQCUJ12fsuBMtiTi1XvUWxYfsP",
  "key25": "5bu2YjK589YXqZSq9ug6Ex2o1iV5zo4H83N6gVSeKZRfWzizMmGvWchTozuhHzmP3Qkv5HpAAWYsA1VKA15w1S97",
  "key26": "3yqPForN78Ba7mmVviqw1ZhRd49jCtbRmjmvegjZHD7x7Yx3g82Vf3Hp8hyUdr7W6US9zPx7k5J7AaNAtCmEirAr",
  "key27": "2nRdpfZemZRtADBZ5L6VEga6fGSr1oAvvLyFxmg3FMJSGyfa3rcYicufsmShRNCA8FnZe79oUWvYVwYPV64j32pP",
  "key28": "5MsUHiuQxD4QXSWXtBQFeVpPUzLKsTnJjjqsAvXqVaXQDyrfVXeXEoid23swEijvXj3DSG18cfJTyNj2t8agAsTm",
  "key29": "3za6ZYFceTwhg3hPUm12aZ9CExwe49uHmgtP4NQqj6Z9KQLKy9Hfq8w7VCqsGvwq5VCgR5HydfiDSJoVyhT23Vqh",
  "key30": "3WCVNK9SRoZKMDNSTNyNZNXU2nJ5KDY1oskorBMp2VBr4TrKs22hVmJbxwxFh7j2Db9AZW4zd5CAhZphiJeS12Aa",
  "key31": "4ED7Bk8ZLMAaNgDPCD8mFZbivZAEBJZhvsemvyxzQ2FGK29vtBNKLy8CF5inX9rTktgoaT3wpAMARg658PzpHDcq",
  "key32": "2iMDdhBg1hKoPvezVcT1SHdJragcr1JuPcYGVLsHL54kG2ZGRKddfwJekVV6YgZzUyyEnuzo1PzpzNXot7iwTG9F",
  "key33": "2Q3ziSRrwLofajiMRFmBQmYQ5uzfxhHoZ7hSq75pnejFfjS3R4iUEVuRYscmuxchwmBctT4mYzxaHc28f1XpAzHo",
  "key34": "2v7FAy4UotvNvRc7NecCryvAJCc2sPbcGctvECf9tKbX1a1PniqRc95PsSX9rf5RHtxyeQmCQ4AzQzZo8UgFSWnr",
  "key35": "4BTyYdPCX6zymroRZiKn6vMGaSEgFczCAgCayCyRz7KxuMW8BbeXCGbjq5t6exUJDD5zQf8aDWwa7MjEvwJcYqun",
  "key36": "512SR1L8AFU5NxeG6GrN8ZRF2Zn9NK6yCXGaZuh7ZGDyuDciv3WfvDm6FHexCJB5jyZWQE313ah3H9uvBWse674A",
  "key37": "PKYSUGvwrorMf8pDTgQp2jHT5S6K8HdkidFVW9ie4wrtRUdSK4oWinAxXadJpEXzaGfBNSanBba1LVrbKgMdMiQ",
  "key38": "1HA7SA8QrpECw8T4Fc3M5ofh6A2eeXYWDVkg44qESFnTSKNuqDKhA8Xajdiw6TnNWSZiHYrBqYCjF5XuLtgzEuA",
  "key39": "2ExuHsPVmwNx8GjVoQe5TKk41QsZMT7gCc6etBqzm7kte4kG5ks8RuzNoj5MWWRnAxeSDHWhXpfeS2bAGMQh5WS5",
  "key40": "hErqwLywALwLtfoWrtExnFbSrtFzTcMyETGyrfBZYrkZ1wPwnXaYo2U47nY681PrgwGnjHhDhXskBv37z9hngRX",
  "key41": "3Wo6w3181b882hyUFeTvV7N6xmaSvZAMGWfSx1Ci5RaxjuZd3sefU9YHnRk67s3n3Wiyrik4Eo1ExB4mWupgEDz",
  "key42": "67iiCkJ5fKovWxR2AGuvnNEaqpyXdv5pqejuqNRVN9FZCShgaBWx5tkpb9o5RCrCbnWXNXVMEx8fGkxcCmRXM95b",
  "key43": "2fmG4ebYpqaXoXMgi2CFnhbRuXKucg4kE1Mopuqxy45h2nkwXSHDmWrsss3w3XDBgEM34duXDfbAcuwCoM5jcB6q"
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
