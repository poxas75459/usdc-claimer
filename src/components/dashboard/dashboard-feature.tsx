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
    "G1oTjeBeT2C5djnsrShm1nxE1xKMdanWiccMYqLXagrpx2A82HAF892pWJMrwX5xM2g2NADw9eeneVcAEYwEtQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yw7cLbziMPeRDQ6HzgA9kqdFnUGF3AXgXtyMSs4ubvnGjBdjfq6Df9bvvK3QAikFdA3TEpyCTk5Hz6ZUCGuUkXJ",
  "key1": "d6w4eAQKHZtYHgjEfUgBfLi4P33uqYfXtCjDAHb28XCjDfwPrRXx9cagFgmDvTPVMKiSiRPa6n8gymWA9fPPuy3",
  "key2": "4HfwdWuriYbFTWUMxxLjHzW6RDKueDRQAoieLfsarNpv1tZEQU3CNydRiHkzVW2EHjWgZXfaBx9U6hUt5JNN4J5W",
  "key3": "3257YP7cxmCfPpePqxLM4KGxTrvDCfehemT2SQfE9RX5Gg81w8seJ9gNdynMxN1Hn4cjLfn3KMZc8dde9VG8fopE",
  "key4": "3SNVF9AK2joefSSVbgamzG3U8K8CdEtyDeSzi3XBQK4xLhSwswpUBKkicFqVaUjyQtmcDdzaa5NAaNftwVGq3BQH",
  "key5": "HamtUqAEWfWbnvDKJGez12Hxms5urTUXm4jRTEtM33EGTgtE4XhTiy2rWKSeLDwiiBkEgfQ6egccdebFthNNEA6",
  "key6": "4EkNhkXDMS3XYbA7ag9VNRKqdedhgjSqF8WTQVMFLZTGtmmkdp1PS3DF9DC7Ea8f85by5PkgR7eDREXwLoBw2NCK",
  "key7": "64Q5f13tDoRvMKBnUV6Kne5atn8H8qfnMapC6CMx74SiNyFaJv1HMixfDm7LPCLZn6Wi4VmABewfjuYuH5uW14ha",
  "key8": "3Us3yyjdfJRNRzwvTTJkHJ4WReAcpqPZ7LYNt75kn2xZ9jyXDUKh97omjy82FMvTd5WqiMJaU67pKhkEBuPya2ma",
  "key9": "3Upb58G1ie1Tr4E1dhr7KCWrbHddxumNGfkFxYP2HPDmtUs8fPGQ7bkcXKi6CHG2oaXwp5NNkMDt8xGrzX1aJy88",
  "key10": "354UfsG8gADsmpWuN8cypyC7MsU1exw7h9o2i5yUFm9AB8zEcgetEiX8megzZasmNdfxjWNsFEywNbQipwcUyjoa",
  "key11": "5k5X7mGedhP6o2ZcTjwnEmFq7dYcKq329vk756f5vcwSTzXjhXk6PKxvs8R73wxn1qqEdujzCght8925qzbMsnJQ",
  "key12": "4Xkck6LZS3EekU7Pmt2adJaqwVSsJQXHcQL8vK58JmixhuaeSmsTTDn8GJ9bgCsNrgwbZn9C8ceqbpefzLLR3huV",
  "key13": "2XDmFsjh9nx4TLRwYYwQT8Afj6AfYCuVbemBK15MhxBzCp8LqMg8PPnDyzvSRvw55Yi7tEgPf4GahJ8oCeoASQnW",
  "key14": "TLknfDmMxqqc7v9JBgtCU3ENUh8UZQE7A73mdtKnBScak68gtcbX86Sk6WhWV3Y7gdhiEw3uoFmdZf2b4foMdnm",
  "key15": "5iNQARX59exPDAWQxDP1ugqc6SyEaoRLCitAyyk7eP5nFxq6UAgMap7JrcDRfW6sQCHRAYecD7GgtXi6BUQjK4ie",
  "key16": "329gfAWpTqi5v72CSoB8tBqDxqa8EvtEy7dRquALP9voy1TaiB6q8AW5W9mYMEysRgRktb9jW9c4PfzDehK7E35S",
  "key17": "4rPQg49f14MkyGV2YbXuKASmggvKu3fyvj2NDys2T3vgqnAwLRsU7WBErDBMAynn71dwJfVTbGd15o5oZ658Wyua",
  "key18": "5Bze167Hw8ECeQvGbxUcW1B1DSroeVJBQJBNwrgWxooqcyu9PffD3B6VcRMT2fB4eM2K1vJ7Sk3oqtw3MmphVkAt",
  "key19": "3kv2MSknPtD8ifRgKgVuysuNcuVw8xq3789899GDbZtPeUio1nDXTtMaj1W4fHYmrrvwK95SJGfdAVR7T3nFXoXQ",
  "key20": "3XEbio8ppcmJJa552skr3PnAgzbaK5y6Cq8HpH8iTuuVXeQUZApPAzULdGkBaU1nSsuxsanmadsB5hMPG4yTTA2x",
  "key21": "43Stfz2c3yjiKoJKBNwrrCcU6M6fPeAepqyq92ig8ykRd47nRY4QrF65CVeCqMyBQWpzY7AwEgbkRv2nFZzRPL62",
  "key22": "5SXA37pp1s6tMDWZd3ofwFS1vk96gesFz8LGBbAUAcP5RHSRTKU88PSCyKVMvDttcfuwT3TJQxLHm6oXi8rsMTgX",
  "key23": "4PEjmpmD6o8JXDNAbuFPv4s2m7FykTXpt9H71Jx7ZbPUoi7tZ37boCdzt71NPXgKkpzY19sLDiHuQzNFJAF9fXyj",
  "key24": "4wUmp2E7CEMkmWdWkTAX2y6NU4gGNzAY8XjNYviDj21uJVTzcqrFCRGTCHEY1QbXaT4i2qHigaGcdhFGRzgYTFuB",
  "key25": "3QB47vG7612tT3mDbc21CtLectqGSa17jtmoEWDYKrAbMS4kZ82E6XGiWNMTRHFRWqML7upg1LC156QbT7FcDPsQ",
  "key26": "59QcJqur9J7PuEbPMao7jR8dibqr7zLJ3dbpXCVtaVtyeViPY3tu26HyrnYMauKsj2ArXgtKFbGVr3tV9uYVEFKV",
  "key27": "3QevzHN6KMqJVav7ZNAh9ofEHUQbvMuSnfaSBp8HzaUxBwygYiX61kDgikcFnqTp3kf57huqp6tA1PyExEkeDmDu"
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
