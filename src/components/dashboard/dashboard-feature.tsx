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
    "5KMdXBGjp48HK81c3q63iJuPBfEMcLFfyQj6GobAqkWrMGzHdNyro22pfaUfH7WhiLAKj8rXCphkDSW2cAgLNZxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZfXydjAmgxWQsELDHXRMpjhgwhumZrA2Bo2RzNTqKd5cH7fduErNCBayNjXNfTJPiA1U9ugyaXR5fvBMBnCarL",
  "key1": "63ArTGpijgWCHUWx34gg2ZZjmAfN9eHA1JNwXKuDqoCfBK9v6URLD7r6K9hA3QerTxb878nr5Yv7sisHSdci9mpY",
  "key2": "3pqTSPQmRFx88n4vxqezmn4yT2ZP1bWxsQHWKCmufWqPNSc1KrRMkPo5V6Yes3MmW2yxdnXqAAhg1ktffqoYako9",
  "key3": "64rEN6AvnMVxWi387irGaxpTnCHEQejHpQ8zEGYViiP6dZPWafoS1m961DdXgvSRfKB3SDQKgEyd7d2aSS3R7r2h",
  "key4": "56Xbbj7VdhunRDuYJVcEbhPgkhTkhfFrR5tWdBej8kU9ZgoYcvCWGkDc1fxBax5ekznX2YAViEnkqohpFKZhrgWP",
  "key5": "2M85NPJKF6tmTMrATvyKmC8akgceYBiYQn6HcVQtV5ARwGeygHziLRG59dFizZX6dBRHFqkxDXfbxNY7uhK4FHg2",
  "key6": "3P6xTGCKEiWduGoSaj2mnE9VaUG9TYDWAivXwR8SZP1RJ4t9a9ZpvwmtidcL48aPaSB28r4s1VL8E17RpviTYNMw",
  "key7": "4jGWacDFi1wzDn2Jm32EsggQEch8xocMr3epDbmYZaa6A8KvBz9shJvW1f9Sg8EyChE5asVYZYkng5g1YnkdaKmv",
  "key8": "3FWqHhBB2a4HucbxsoVzmXYz7H6jYhwpordD1jCUfV5nNrFMoiNJp2pmPBGERCBp5NDDXSQm7YYTwgjqVKy5tTEP",
  "key9": "5ZN9unSQ4osJFenSc6wUCUZKFn7scehypp1LPPvQzVMxUW9fAdBamyjWoaEVE5oe7rtxyNNukCZMKjkyd3UWQJmG",
  "key10": "5VRvFh3hAexvQ3rJdPDuZPQdrWS1KkmK3ByAXEkwxzoPiD4frZv3b7JJPF63k5x9bNh5MKGm4pt7FFM6q4RmY7ZA",
  "key11": "2QNtADRvsMP7gRWHyXWFMX5o6koVmBpj9m9MyJWjZaVnXU4ixvMCdk1usg2Z6LA2FHqYHYuwQDPCQXb6xztw7Act",
  "key12": "xgS7rpHLXt7XoyFR3h9w7Qs5xeGF46R4Gb3WbiVBqoUtAqK224CYgifFbmAXvWBjQErdmyJHLdakVzApqQ4READ",
  "key13": "647hMvgKRFYXbk35rVhJcLM9CGXDeaPmAcWvvBCQGwdXHPBwbcYasHbr54x628H7sSfSckjyJ6NXX8wGqLaDsGMT",
  "key14": "3w8JY58TYazpERcTxwiDPK1QAtrxZk3YZwqURHfSUppPtP1qG2y2NunMdPP78nE5LEnewhWHqGrNp7Ua2E5H8dhX",
  "key15": "5xTw1BD5ho3aZTJnj8wthz3fhqSF1SS5aoh1opbeia7wsEuthdswcNvHxfgwbKCerGF9HvdvPMUSs1wpUPX2YhQ5",
  "key16": "3Wz3KbXtDhUvRK3172BF15AzWbj9oXYAL1gVHfEte8aPrTiCHX5g3b6AP9tJLgWeJ6y7CADgGhK9ucmy3azGrBzS",
  "key17": "5LeX1G6v63zWiMcZ9jRmw4zG6PnjPXN7ApzSBKG8NQkwAMKu5ruHfHxe6vKLts3sg4vqz6UX9xUjXzJGoXdjqNNY",
  "key18": "59DQBexRTzeFXodY2ih5WFQfca31XDHRLGEVmRMpxoa9PrbxY8W445aAVj9BdReHidkyXJWwTzzCD42JPxRtsJPm",
  "key19": "4PaYaYFyDLEACH4fG4Rn5mEdvd5Q7gbZeESnQ1Qoj5WJxw4yH4ygYFe3A92YVHJMkL9oCQRx8b2sPGBi5b1m8KAF",
  "key20": "dnVC5ELCPsVLsTwMhScefCeEkLRuC8Mwhi57wzMQN3VPzSEuexWuLKDohk9PJ6NtthQWY7iDnKdZ26ZZQPsLjo3",
  "key21": "4oA7iULCcwgzGGrqoRixvowkhSSfJbzHFyhKok1uXiWBZsG9cA47qjJUYm2PW7EbTygyeT6BiMFdjhkVeseAgV76",
  "key22": "4Fxx1TcezVFPa4bKi2PcArFCgwwCc52otGKUzT7kfha8Rc1SwqQotMkZupTziexY19QFWNBMSfnLHqXLHUyhKhSN",
  "key23": "LedLHRo8YiQ51eMTRAGz3YyZhrkwekJaoABfi2xzTTSzWyQ1ra3nH6xwAVSjTc2t4eBA4MPF8AiFuEJpNDYqMJg",
  "key24": "AYQmyT7rEipym1cWUwLyRF8XsBQQwqQi676Jiuk98CB4CHvJtDsrnuwD4Vmd9nUp3gJhFoWPe4UeRuYcCsq96uv",
  "key25": "41U25kmtQj6pq4bjRFmDQdiMHB3CyWEXbJzQNxxKhNbLAzX1ksrHe5YxvVdjwwRj7hCLpihZkuZ5MkM7EwTYrptX",
  "key26": "4phuCu7coGR95UBaFEGx1m3krqgsna99Rg1wezdCUwp6HcQCmunHM8T68S2DNB8eu8bkQEExMMXsUC3yj1vpULwZ",
  "key27": "3CoLVBZTy4sfAnJR6D1Y47hotoTbGZTTc9GpCSeLpsr5GreWkyzUWDZke6DmReMGGTqR7S38bDgvza8HcXN3R5sT",
  "key28": "5AkqVFq2WNgHnfVQPuotcyqqSN1UB1jo3e4ZddMCmCPGHqiJ9Yyv2KCcjPQBo2akG4GVcp28XaDixva6YdAESAAr",
  "key29": "45Mn9taDQgmzPU3CD4dXySSLjnm7VNf9gy15ehJGTDsAi8uwQrPww9RCuTyFTAt82xTXVkk36FJ7GQ86hdnFiw39",
  "key30": "3E7NNbf4UbFgT3dJ8va1jout9mRS3iCZ9j5ZPn7BiDwBWLErLkR7AMVhi61BRoTyZsQHTSaF26ytH371hWEnEjjs",
  "key31": "tfCXdRERFjRTMUJ3c2DFdduaLEQE2wXrLFUsR7c4p6tnK46474LsQJXcDtie8S3yKvjupwH9M9Sjh2BtGor6G1F",
  "key32": "4AVZWuwuhsTfumUKTpGZnXAu5XgBzV5ZRrM7Xvsiu744RruoFBKRLqebftBaUBpiRBtoE9m4SBUA1bhUQS2sx6Ys",
  "key33": "3NjinLH5c1y4NHhmWe5HMV9PV1MTZg2Wzz4dgZAeC55RcSR13zRu9VyAzPJ3vm4di6rM3iNEhMe8E571qSie2Ck4",
  "key34": "3nw11ku7A7txxQUWxQA7yvG4FgciwVFxucP82pBFjUkxhVeyRaUrw5E8qhd63vUy6Cp7hQJyhSyYDDTTVj868Jqw",
  "key35": "48zWeUeptvAF2PDGZrhQZs8qDMg2w3UZwqtQjsy7LVZJLQQpmEQAd5o5xkaV9jqoPHKdhE7i1kjpucac2CYiz3EA",
  "key36": "5fq3dWz2uEJLYfR8nJAmig8WjR1Rm2TNPhqax45xFshWm7nEezvDnTWK9XmJtsbQr9oLsFJrE6tuTbpg3FgupRgs",
  "key37": "2Wo2Rffn5QQK6kERERDdT4VwrLzQq4SKQt9ootLtX1vhWRdDvYPL31HUgn5N6gMfQkHnzK8SSancnf4fAitT2hr1",
  "key38": "5W1DAaS6JBizyNJmTzRmGKDGwn5haE2mjEgoTtg5y1jQYztBDuYrmScvv3oVX8vNYp2B8Unu6JdSwCLJB3Zk411b",
  "key39": "3z6qyspGyuqi75tnKNQv4AP56v5kkeKJBxiYJsGWg7oaKpx8o4BXdMbGUboRNXPmWWmjR1rjRYDckR7WiQaUqnHZ",
  "key40": "5xU2YDQsbHmEqfbyDSFRzAPonjtQeyAE4VhLdouYV6wEbG9W7sjeD21Ps4DAUK1EMWh2VV2jREpqQfpqbfydRJfd",
  "key41": "46Cokmwk6yekbJuihbSAfJnL2CaqQvhufVPk8caYsfx4sxev7Pvx5TtZi3QesxkdiPSbgLfSPjkkopCNAgsztkRb"
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
