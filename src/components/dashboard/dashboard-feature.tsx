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
    "55vbPystmZjJVkgRY6J4ZYSkG9ZQG6W6kpJbgJJ7zFvUGkq8JVE7NesGKWJxhviNXVU5pWNTw2J9TCMpQtbP8kYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiFmiGVHQfr9vcdYKNSNuq2WTq1WUGrCrCZNY8A8L4KzTaVVKM2L7N6DZZSA1JZWFE6qJQvoNhX43n3YqpzCHQq",
  "key1": "3ASmRd5w1my6cLDUHW4hmig8FP2m64nPQevcgBDSNWor8D1GV1aG4aA6jWAas86SKnFxJ71Y5kRFyiZzh65KuG4u",
  "key2": "rKNFynLyyd6KTMKWQ9QHYsM2r27RLwgFwuQhY2cL8Ukb992fggnmT7y8z28tY4EwEPYwPvzdpLH5QsFk81ypiGz",
  "key3": "UmMtB43KkTNPkPdAo94HZcHghRgQyT2ebCFCFx8Zk5KuTmzLBW5B3tsCroNk7jB8zQbcyJgQRAddX5UsnqRbJgC",
  "key4": "oNV6E9jnDKC8dK4dyixunXZKwKoQq5aUag4VkH3HA78Zf5QiXJVgNXmdhMMB4WtSP8CUzXSZwh2eqRE2aEhrXxg",
  "key5": "3nqmojcupZDxZBdcWcKQGrWWyBpVzHCfTd7NoFj5WzJUwfwFSTKvx64UocUM8rvPQ2YU5FopLcokRYWDQ5EP9xKM",
  "key6": "56s4zSirDsn57n5Yfa6fgGh82TcSA4TZ7y9r3QQBdSCtemptZepd52zie6YVsn7hY3Vd39vbdyRzpxQyHnec5PpQ",
  "key7": "2nNinKfyCguGXXo1UeGx75ZZDFaSPD2Tdb6SNV9TY3GLLXxhXDGWBP5EGUT77y8gDQmY3ze4dNt6x7rMi7RAStCV",
  "key8": "2GE7yfcMcF4T3NNT7egvd7XL3KGxTorJZYjMe8R6aQPtE5FmEM6cx5LHpsNeF7McS2HgToHtHgyF3n11GwrFXsT7",
  "key9": "33v6R93UXynWpf59nC2u9Spxx9f3MmWJzRtkHXmyCttym6tXgAzT3v1JTzomnzKh33vDqtMQSezYb9GBZ5pbU2M9",
  "key10": "v9jZewRj5muaMtYcjCY795tMvogH5ZTXnj9TW6QJ2acstkyrdsmNWMSSsr84wdVysddomgXkJoMYezkFFrtf8Kp",
  "key11": "22SRad61YeLqAAMPfPFrhfrZKrknNX52r5fLsvwCvcK2vmo2TQm8r1Bsc4DXn72CLPS96eo8ABHr9C1TjeQfyLWs",
  "key12": "4GwQoqihcyoetn365GiBx9qNbYoojKNQ6d29xysKUC26mzgtfsXCEpwy9pFqgJxzMUrWCPbAkwz9M6rzXCJk4x7k",
  "key13": "2nYTf2rFXSXkoQ5ULvbauPPHyRLcMZEKeXhYAbFhKibndCvh8JnCDXy1VnFJt22pcu64cXSxnkqqYQyFecaGC2K1",
  "key14": "3TmTinCcEPkyrLetMTP5PGw4p1h5QsTmSPmEoxn2Xxvm24LKmAPkVmQEJikpkASoDcfZK7vJCqfKSNN6UTpADp7D",
  "key15": "5EE9a6NEJHcGKaxbQKuN3nrMfytoDHuhpRU9zRnAFyFgDn9VocWsCHpi72nQw8xwd14SwY31QLwB3FwchYUdntcP",
  "key16": "4xaHMhMnhdgxQX5yawFxjcKKfAs2vZyhJBSR8FvRfZFGh7mYEuk9XC4iuQA3JbzFNe4LwRCc2iFAx4ZA99QrXgwS",
  "key17": "36xypDc9frwA6NDp28UrP1zSCc5xhx7LEmxYPsPnweYvCFC2GUAwWHaQWSQqqsopMgWdVnjDh6zkbzCsJwxXFAsg",
  "key18": "5hqJU7TNwFHPMW8JzLCDRFPykb8CntVzHNksoPB4rsRBdpwxdUTQtFo19FX8Gf2gbmsTnj5DjmPh8EocZ83vgeGj",
  "key19": "4KtYTkcxTwDkRaJCXfttey3SpyHWbTHn9kpa5sBpWqxZ9cRPwvpnJYRbro4dgSXEWjdPkaYrqzt8REfYBgwRJaGe",
  "key20": "49suVUkzcgUR9AS1BpGzBCY7EWCBSGg8bJ67w9nNQMjKCF9xDyQR55XXAaAE6MhHwrkv8SK8ZdRJJPRz31MxyJbe",
  "key21": "4QAHg9WC3y5TLfxHPJEg7ukgxvfrDhS3dmqb7Sh7Hks1X4P4YSVBTu2yMM1fXSQctPjuEwqR6kv8sAP6sVfGvyzX",
  "key22": "3A46aAWReNYpPgXJ8oQJMLpuMQeCub7b3pKnkfrocV7DqCRirhi7MmXSPQT5bgP4XShPUbods2kows34frTifqky",
  "key23": "4veUU8QN4RFtW4QWLkiv5NBj1L9qFCpwCrtvYNizMs1A7dhHZW19VAD4JzznsRVS8TeLy3JcUSfEUBppFDRxttnQ",
  "key24": "5j1i5UUsD15N56k35N6nU1Mn7fPtaX6PCFuhp7wTUyw4LQXB4R6vQdAgQdvuXtZfFLAZoTKRt8FcDzCNbmVWm6dd",
  "key25": "5qKnaBw4GZU8dj3kt5LvPiBUQPztfn6e1qMcp5TeN46Z7EA49bSzytTzDUxjkshbSez1qmEd5dzf3Rh2upszZEDR",
  "key26": "52t9dVcdDDGpqztGNN7ibzrZ57CUbuJ6ro6xNnUrjeYTN1C1HBH56u6DbhnEJn7xKFvjw9cMHtdyzUktC3BUBV7N",
  "key27": "5htG75sqRzp1JgHWeFpAxHA6Wa6h9rTpXbeBEhaGU1CQccz7rrdTpMhYaj9QE7bJFgnrKJqMpSAmUbUfx1LQzmKk",
  "key28": "3ieLDw5gK8TNARBjP9xWGH2Npz2jjKKTArvTK6F8mseZZU9Ek2Qsqh72peXRSitRyjNnZwJRN8Wg2uybkEzm1YFv",
  "key29": "4ef8QwTxZfu7YAG4nXzaFNeB2PhYwXmBMmNRTJ7rUtLHb46iWzqZ19LR2ZM6vYEwjr1kuhzva5qHGHMQxGztz7nd",
  "key30": "4JADPmXiJxJm6xATRtBwP5dFpWMFC6QXC17CxF4z4rJQDDpaSyNs4TtNbitdQFCcpu4MgY9FCFNhiAozm8kv9WiA",
  "key31": "3U2BPps7fykyhaujhzxDBh1EoRwbXtrhBjo7kaXmcfUGqju3hjpqbn4stEKoNpD8VCkSTfzG2isrLjeeNwXhySwH",
  "key32": "5qtHDAvLGjZfwEh5DJAVYpGAiBpJCjdhBBugQjEZrwaGP7RytafJfFF49x1DLDsHVvmRNjpiGsZWEyT7R3dDZGwR",
  "key33": "56zxxihR19FD7DJBv9fcDqt7Us8p2FNTNTotfjx3cTG5iCw2fYz2rb5f5vgkXozbEXq5kyR56hZSZYNAtN4grJQw",
  "key34": "3QS98jMTQ6CmrjGJMHM9psjynwcAVogvfrCsJuQuSak55awMJ332odeabrczdv6rrtmixCeibKr1cbriU3AQVEXg",
  "key35": "kaVJysy5iunYGHd7oc5RVsh4kwBkxVaSRP6Kiv1NtYdn3SucYpHNhzK4v6SNWYqJ71Ddcjqmc5EMDrzVm7tgfSf",
  "key36": "2ixKpe2Kqor6toob1aNcUXRcx1E1x4cbgovZ2idLeqQpVbjfb2XCjMwABPBLGof2XXTUyNMs2nSRU9r4c5yJ8N4y",
  "key37": "3m7JnqRW3YdBhycNrEADvoCZ7sNL2khnDJbWqCvctMjQgX5kdfC4dQx31UFQidLp27UXzgthXQUKHUKZfjLR5G2V",
  "key38": "4iRdkzctz1d7AyXmDndqXQAdi6WNJwFwKx73JcpYGP9bQ8N5aPTqNTkPEaZgh57gYhew9TPnkcAZboDibqzgGy9F",
  "key39": "3fZNhfFHMUiUuGfg5NPcWdPtPvpnPXqSf8RYDqZ4pQ1QcRvJseD4xnwoCm8CC2pqhuNEgugoC3pqDjAWbQJv1cte",
  "key40": "4obsFndQ2fScPF8T7LxtzsN6YbUKvRddWvUDiTnXJYpfaHfuA7M6zjjzjxtFJrG4S2bS39ZmaF4zQnYnWtMz4JtM",
  "key41": "FXXVCoFNRN1M65vcu7nBhzg7TeLHn7CyUHpnGh7E8szoGNaEZovwEwfYi8AuTYChJGf5A3fUGgBMb9pZLy4VC53",
  "key42": "3qaoGtnxJwaRQcvV8VDMrVL58KaKjhfJ29PUtMDnFRGqAwDTESrgm7aohJRLGAnnsx5mKLvsRnPxtNSPHi4c9TLZ",
  "key43": "4ZwW9kvPnTwXBSrnjt5QHG4i71XrnssdrcgszVivZBFKQPh9yCJJen52rSdYPydhoi7Fz9qfpboqddp6YMn6Csrq",
  "key44": "7HCkdkGypY8cqwsHqcMd6xL23zquNnEgNiJ5AvrVqvu6T5LhTEv1bk3HCPzWqveuxPv8BwTGAcs1qr1TfVhPBjX",
  "key45": "4jGBUM7CsZ6kFubvtCVHm7KVuakw1YVggita8GRKHZ1qEZTnw7Pd8onp3c9j4a93N5RsuwGm5sue6DcVY3vR3art"
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
