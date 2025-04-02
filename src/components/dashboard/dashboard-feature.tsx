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
    "4ag6iwGUgWmpAkDJbGgbWtWAzvLKHef9ur9LM5yoXYzNnc5E5G8FYm4MsGvdrFp7Jn4g8HpHBEh1P61ZdkBCPNxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YcLG8FWeKm71msuQFiuPdXKKRj9ki7QHroC52z43PLVyPGUF6rDZTdLnA1KkWHkp5GrbMrf9AARR3cy1Zho9ecA",
  "key1": "4UQprjpfuGxsv5ghqRm79GiwDwwnvyxbHnNJyh31xhZLCZ7UoJegV5RgzHeWXb4NxrRjymKmbG2a9FJgVGahSawV",
  "key2": "GycV48CwfXBkc4H4Dn4C6rUZXGYQf8TpjndE3Gz9wgiHfTxYYh5UXJKwQrPFeSJbFr7qJMczkxuYt4jk69bQTgt",
  "key3": "29KQEaHD7moGTkwWqexmMqz2p63K19Du87CiANFpnorY9dsRrYkCU3Trm9M3FRLPbaBS4GgyTV8pNrJUFQnrLaLY",
  "key4": "3Ztug4n7bTGLiVCA2b5oAGiBkBse3V9Rh3XUiw9Yp7N153MnRvEViFJNYGRaCcSytXT67KrX6sHEc6tsCvsDgGHb",
  "key5": "PuxNJgAxVASLAxuemtvyoWYazF25yUFcirPu8yQJkkwW5SkcbTnEiGaHDEXwQ3qfAzQN33Dc91nYtZrNwruW4r5",
  "key6": "4SeWWUvdXpfYYsGd74VuKKq4DwRbnoSXXjLnCnB5bPHYLbLTbEMK7DM9mp9wnvUQS6uLWYzVDT1Z5j35U2vK8M2J",
  "key7": "2Ta6h4JwpPq6zZcaNmvLwyoKaKxfPZg1ezh3LqduJayzXHiW6BMZ8NgbiKUkTESBKahxjwLHiEFWxLMZTtfKT31p",
  "key8": "3JUV9Bnkoky6YybxJNXcwSx5R1RwcrE12DgUZDarNF7feCPgpR3qqfMg7rjZkAbHZUGCsG2C769oVB6nHFcYpLCn",
  "key9": "t8A7QDc4SVVPFdpS1fPNFzqpivbDGaAy3J4HYZWQ5ZNQ5GqZ44Chd3TBKWGHUEFT5E6tYMBJw5c357GUuRmnEma",
  "key10": "3cc333Ew4HEAVkckTtaCFTCCwiYD6XXAFGbZTvKHsNnmTdQVC1UNLxrPE4j9osK1EcjvzmsoDXCXSFa7b37ZP3Ap",
  "key11": "5bGri1VVaVzVoXZVWFVVnfXm9TvxfctmRLorCyGAjsYtUUwad2SyHEibbCsNnokfAEomhZ9kKfsCzDBiqgnEH7Ns",
  "key12": "2jhMJjubHyZAFLiDw6yYCVYNrubhBdXo6tC9C4sNtA9sgUyWxU5tTd544ETPK4SHRCtKRTvaZaTP13pYYyVatXQG",
  "key13": "38yBm5d6a7mSJBhMrCKDDk1J1BDMkdwRk4jaD23LJNGXeoB2UW68L2m3RpiqYDRKaKwcpgQ1n4JahXHqb7JKJGon",
  "key14": "5BTHY52pMpXAdwHgn3yddfYt8Xpsd9cySFwrvNd316dxnanQQcpyWB6gYaFjRJyr25MDTvUYkDRxWRtnNyZDa3x",
  "key15": "2KFG8NswqeN5kTzvPxcUT43WopBDsQSzXQxomkb6vqAY1SVvL9sg5X8Sr4NaXPqhoWMvGkosVsJ8QVjFUMvCkN93",
  "key16": "5K5HiYC5NefVoKJQ9Q2QoL6syeHAfevpYYNHAc5uA5SKhSmAiTedyrbnj2ZWtS2bTqV38N3MyBYmQNbq1uRBxJdV",
  "key17": "4MSavHp4ku7EZAsfKKLTeMLAvPyYapEhn1RLnRRJRU338z54b4sixW1kcbQ5gEqUiYWHzHwEi8c2xuCRV4pRCL9Q",
  "key18": "52421iHm3R1KUYn9ZEmL9nqoNVcuRZnCJ7J4eZjzoFpc4VEFobtoecjkv68C1iprgpRqVtPtmctF9E7n1rkDNm5V",
  "key19": "5TzPzJyKd4L2iEdAeF8kixjNq5mZQojzcHu7birdAhcQ1yF8LcjPzSwfNVLgD48qjzGt8LuCEd2ycmJeLwK6dbeY",
  "key20": "29HWmy3YT9S5RimG23PLxNZ5cuuMB9snUtEiCqpNqhEmMryg8rzuf5RYDfjsxL2Ct4fA9AZfXyoe9BBku44e2WHm",
  "key21": "3vqHKPmkMrg627TMsMVy3LyxqgdkHNDV3yvrFtUhfE6giwRtHgyyx3BJuMA3p94B7kxwBZCqJPdLDf5PPwknAzg8",
  "key22": "45oxTor1beszcD817irBTB3zz8Y3ztL1mbP4XX4Gwbz9x9inTPYNJE95Qyc2bH6f3rQ2ULiaqEkVXTcBGLHxyVBv",
  "key23": "1hneVfYcTzXQm7bhcsqcb5rvvXN8PQ1EPHgkb4WzcJkbD9jWA3pHvsYChqbbUG489LoxW4sCgphokyYZnYF8hXF",
  "key24": "2KgFGQMsog3EN5kwU4iTLPv1BXvN15BQBJecnLKoR55hNMymF7MhqLAB82nNpiyBpPXs4KhHvF4gnPhbfb1SGSZq",
  "key25": "5jkH9jb56h9cFHkoECMCd7VV5HxNJvibZJht8esFQWT4RVyZws2C8gSvauj7y1vdL5jEqmGHcDex8DGdQPv3PMfx",
  "key26": "2zSL2VnEXyu6Bw4nkY1Vy7xyibReFBuQtsSM6yDv4QToJSwH8wWSMVMBR3unpEdHqnPM6zWx1PKTW8zNreUWnSZN",
  "key27": "2uriiqvGpTgAZc8HbJ7MC8xabKnvEAPrsTMnMw8wNnNJP2D68NZWPJ5L6BEx5dv84zronKatG5Czew6UNWeZDgvo",
  "key28": "26je4ezRVALmv7VhmTCuUba2dgYqdAtCtP4QPreowniDEPrNuXZ7GKXMMiFqk9XkR84KfVFFRpE6benZgu4PF87q",
  "key29": "4KEBV7xEnqbuN3tUB5szgZfvL3kQX8WSDHKTvkGFoffbcsKzghGx3XQjkkTBGrruAPpG8FabSvv3TwwaWByxxfnZ",
  "key30": "3nfJrrNEyRh3wCRR9KeGZT8yDgQ4Qty4frn7ecEvWmahS3AAiXfcauPHZGe1wH4kTfoo6UcSzn7NQbC9Ygz3scuE",
  "key31": "35Um7jZjkNU6mVVnNBBs2EoazxEE1dQyqusaxL4W5J36JBkRUL9RvDgPPUAT8nUqAHoxm1X9XmYQwBeSJMH6HE6M"
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
