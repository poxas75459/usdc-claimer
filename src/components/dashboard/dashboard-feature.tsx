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
    "2QHaz7pMhzRiAYg3zexCe9f4niy4Yjj41tSuvXqLwKVwrbyyuTjWiPxCHq1eAaWRi19LLCNbGB3zYhMuGAUi54N8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAQ3VhQhcfG4GVqpeiL9MJ44Y3zSCCrPDsKT9BLTcqSUn3kCURVDWrDaW6thU2uxBRTrY8a4gnk8FYGBkbbKbGy",
  "key1": "4PMirUHSCLsNtVADEcmJYwzwadqH39ARbWrWUBb57FDR6C8gob9j31ntuUtaptD8usYFVbbMxNUXQrYFEyp9Jbr5",
  "key2": "3G8VixpeZLJU4ggQB6pA47ahMP1JVU6tRVP6yJvpRZBZCQbPwM9nhaZWmZovQ17dA8EDGv99YYoseMaFWrAXZBFo",
  "key3": "3fwjzte14tTmzbVUaRgN4esmLeQsah3g4wusBKHQVvN1BYasyDNugQniUeVszGq6zCSrDt1Jov757UJ99xo6i8Rz",
  "key4": "214TXqjnUxT8xeiXwx4DuQmKWZW8XtgtL6ECkgz8st2tB3XqQ7ms6dfcU7MSuaMsF4836DfHXL6ysHxKBY4PJE6a",
  "key5": "3tyekMKCc2jqquMjF4qpTzNAd94WVaPzp45tU4PKE2qQDvGnLHcGXD6GUaQELxd5JD6xmjd4aEa5cGMyoNBry6n4",
  "key6": "4mQZkd4LGWW9ZLvdqR4sTXi9EoEnpCr1M8R7HVHQejRUPZm5Vr6QkJkk9BBMChpp2jkEkgb2ZXjCpdZrfjnAgV1K",
  "key7": "5vTNsxPCxAvQSsL28zEgtyMsDpChd9jQFsvo4urZrz2hskcewnLLvVt1utD3Sjo3iJLSxkNJa8eQe9kdNFTTRWyg",
  "key8": "cEN3oyMPq6bxx5eQAvPnbRhsyWatrUEiMiunnzqjn4hRy9tPZzuFtCpTAz46mQtxGxNX9spK8AnRbWccF7QSEgR",
  "key9": "2AnjogGiEYVjpZhGExT1Na2vmkmkuGwPQ5DPBbMLbqvSbmPkQugeDrTutQbiDX5BPzmA3Fs2JKBxJJ1SbWGhoDQq",
  "key10": "5e4sudoY66zEefxC83MNbobt3qWJzmonuwX7zwhi9f7mqFqm2M4u4jNgwwk5oyGugQpTjedStyStqDmyFJjCDKHg",
  "key11": "4yDZaY6hjfomkHSYHNCVA6syG5Wz84K3P1pqgkhPjHxzdaS54EaxbwaSjyGFpWHaTeLJfqNomHGVu72CtzhJrmW2",
  "key12": "sVDSSEwRx4HyoQqtA8FuUvuZHYPfVfbtXhq3oH5iEAWoppeHo69etHiuVePBePT8xA8LkBHBjaoyhM9rbMD7h9r",
  "key13": "4v3FrQ1TRLB8pakKy1hNwg3yuFKP1PaGJs7ZpoyKZbo3uFT3uYeV59bCJtedrXyo8rHeYDgBJEo4kMFx9aGcJZSt",
  "key14": "2Sc1N9z1MYXAUn4KChTNnEFTQrtPcBZKTA7R95FEsCwAxwoMqkY2kQGgzsUh598a4ssjpZ6rBMdDBRXbJgSEHLPr",
  "key15": "5GM8NNswXNY4vWWS5Ceg8Nb5wuvQQGtwu1XtWP5LehfTdmpUKvXj8cMCgsCnN4T9VYkNaugCf4mQvp4dwXNkMfQm",
  "key16": "42tmtcWeBpkmtnH9rYyJfsiQMxtqC3wA94krf4PiY1ACe6i8XyhXbYy2n566pKgYDqJVcjZTVjnSm8JPfJpfXNDb",
  "key17": "55sfMZGQWvFCur6spX5BiwcUHx4cZqSZEUDDwNcH3rKALFjeimdTq9fuysRLBTtiHy3GPYq8fiAVaMKpC8LGjRGf",
  "key18": "5e7DNNJ9cq49dXxV6udVk7YDtA3NWRRsRh3s4RSMN3qcFuGJVV8GuWz7UBmxCFW9BPqxMMQDUJU14PVXCC8ceSxo",
  "key19": "4WWbSdhTxWMkjBZm3n9rfuMaFmdk4S8JE53DX1weWzoWvLDuNTeKdMDkvu42yQCFu56YoisshE1wdm2cCpkT9Koz",
  "key20": "2Nv4eoXGQ5UXu9Ac3V5yD6L5LVpruFNqX4YNeX3ArLppd6EZgiixkDi99fbM5wU8F7EJjpBdsmYsMNQVbqHLQuUg",
  "key21": "2wMKUx3Nyxr5CtArWSgb962VRP79JpEf2oU9dW3KxsCTWorZzXe7qBKknzVWTSj3phJ7EDhMnnjPa79B9oudxWMB",
  "key22": "2yVe4BdU33D3oiRnQGhbaSbNaMr58CATspLoNst2wWm68DcUQJ2WrZeX6PMK2gzBnTrVrXTTvZZxVAohzRiaXeud",
  "key23": "2ob5zQgMxhEbBpcWLZyvX3miQZfBjaNSv2xY7BqTXqZfvqMi5MsK5JhsBv5zbXNC1Q1SCZAZtLJMaDGbvhvNdPzX",
  "key24": "5TQ8BgkZwyYh5oAJvFtxVxkih1Zm9diQhAXHtJpgyZiFRLvMeneEBMvK5TStnmsUnT5AeHvouk1fF5jv9JC8ZLF5",
  "key25": "51XVPF69DbmVrLous8wyBDoVYYrbFDL82zST8vw7yQLxEzKr6t9L9V3TshEidNbi8djqAhUZW1MGUFjytNqDtMV1",
  "key26": "3tU4Z42MMTFVhpgH1euFC1XC9URDr6Aks7LmXTY3nPa7zzcLVo56v6HWwNxDakvcnJ8M7HYmQZr47JEheYxSsqow",
  "key27": "258EzCpTWE6BuQbmhTXhFibaRUkiyhtRSBvg9UFZZ5MBrmgLfypT4rhhDtK4euT1zrQ3mnHyRgWz9SdMkuaaVRW2",
  "key28": "3RHdfHgH5yiCjhkz2bWsA1su4MBEkuw12ARfyayn49Pg9fTZES3kgp8YppbQJtw349AKxFwKWHmPKhKsbopsc5wm",
  "key29": "4xY2gru5KQBch2h9UHLXBFU3DxQN3dkpc3BBe6ZxQpySzSUR41cfPUjhiGyjtfpKZDJ86kBzduTB9uwgBoweJSxD",
  "key30": "3xXNN33daY1QcynZZhozLAsjPjEJDPbxn1vLndkp8nwww3N9EBLGCQhDadAuGcFiZtUREzxdjRJCadHRxpg6MtRo",
  "key31": "vx9m36JTSniYDqFT9MG4u1Wgv5R6vnYXVJLyQzyjGKdBnN1dNEyLP8xNK8kkFXDTUE7HTbNKqNuCGuYuUieqUgi",
  "key32": "2V3PmHEnMhwQSRB5Dk8P9SbwmRT6SvzuKUBC9bTLe3t2jepUVfT8L1BKr1yspuXHDyLJqq4gLZJaiiZR2Ryd3LMq",
  "key33": "5KtNCUvQVs8PYedurFJAKoMqxtjri6oudxEnoNthLHRfiioTftHqqhwUMvH9PpydfS8VKJek8ae9zzMMpi64aqKF",
  "key34": "396WosvoUyfNZ7h529obFDK9oTnDz29YZfamNXmLN5GuwDNKprr7TRZdvNcXaMWnLxHebV1HDFmYFMV1DSfqFDGN",
  "key35": "5bVS3JL2mERH6mLorFtu1cKuff67uLcXpkMKfRmYpcsPT5mujCETgo63oNY9DRtDjdkyPA81Lt1PeYwnvPsmFap5",
  "key36": "4k7Avby32edCae1th5rWj9onNjbBoz1hJAQX48S5NtwBx9CSe1MZL1wodpTCwymi8jRjEN1yxVwaDTodFFh8ikmv",
  "key37": "4Yy5ZLk2XgepaPEob572UYhfzTXzgdRW13RrSCPvZBynMhWV6W94X7B5mJ42NcBZGF2YeXui8ZVTAFmmJw2S3s71",
  "key38": "AuccauWjzUWJPXH1Coc7guiaHGDjq3ni6jDz84C4DGMBA39zakxKTxpnzpfMytapAxGF6jCNTwQX8k4N4pPz6ex",
  "key39": "2YCY2yh4ZQWrh6Mn8xh3MfkZuteYikEyjbcnMdBs23H58s3RVmZcEx446g61ikmMpAgZsTukXnuBUTiYqqyT3H7y",
  "key40": "MJbSwuCLm2hKHoWMhpcL5atYNA3HdSJKnHU6g7UoT1PEA2W67gx2j6Wday7vwRiNQD7kVrj3T47BHxCcZ251Zyc",
  "key41": "EL2SpEBbj7PfiM4d3npdrW3nAqDn1WKWvb5ZFRBJjdsMgk9ybd4h4avTmysZgWfbGYyXCqZ2Xf1c1oiJpan7vLa",
  "key42": "3N188cNF37HUHGb4Y3rfSHKzxh8jLUHtm96KbbzqdohQKGwWHiRZ7Wyr9HPHftQkHULnq7u65xnimJge6q68boBL",
  "key43": "5EoUejFAJGwMEDpbBwg19tbYvW23LrnCgjeL8Kz9auDtrro9Utqo316Eb3EBD7iEzoRnUJzt4rT8b9r9bJfcsgtJ",
  "key44": "3YnziCvwvaieaHnCJ1jSVHbretDW9PWGGswRvjmRKC2zZwmkrqSgjDAZE5yJJhmfC58EYuS5iHc8cg6q1mqwbUc7",
  "key45": "5Q1F3DV4k7meWG1ajJKQnKoWZN46vcJAQ5mTcDbU6RMjRyT7gPGEiPLAwtnBcC5XRNp2Qao7Xm4sdfPuzxKXYgBb"
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
