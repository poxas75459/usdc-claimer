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
    "5TwXgYDm1Qp1NUv8g5kjDgx6gNDXQf1CZbTPWNWruouwh3ZrCSY6ZGsxuk5QSMh1GaQXAT2N2H5LEopPa7vq29oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44BRmGSQxPYirDnJP32fNk2u9FiVuvk9mBJ3utpF1rYQNfyT6RsvqzXNAMz4pKK9aNe8zmGXKLaPmkbasaHS8P14",
  "key1": "4pwP4sZDnZ3iqjxXDXFt93EkRMRiXMLz77DjQnfJ6wk6mKeYonTp3UwRT4W96FSkhnCTE9jUGtJPnTuDiW9xCNHg",
  "key2": "5VMPPUMQdTnqxd2zQNs5PX67Ls798cQusTLw9F4mv4VZFitdvrSbeeXZYhmfRsz8JNGYkQZng1CB7Q4PBahnNTRB",
  "key3": "4QfTJfciU1EH4WKHGrZfpnP743cQbAQNZ3jqmNcHbXTyBSCHu7NHTyeBdNTxwkbhohgmQSucAmpEgizCBuCXW7T",
  "key4": "53PY64dSefQZ87nrX8aX8Edu2bwZ3MH1v8ULzxZhFAZV6X1S2ZAUYZ3YH8g1SdvDrbGoocEhJqf6rE4s9y5HcDA7",
  "key5": "5yhZt6GnE9URq1DDUsBpqk5wvuJbH5ZZwmf27QZuXUQCRVEbvTwm1D6E8RzE8im85CT8CSahRn6Ukr1rRLRyNwPL",
  "key6": "jcHoxssKbo6UWY4pjCcJ5YnXwGd9iNNKPyrNXjCTtjzZJNJhrau9Jz1XijESjSqu4JvZpiD7ijGfA1UEXqWCugx",
  "key7": "5xBHaah5hgR72iLB4pfMJpKkdhfwBcCeNotBZxUqx6UshMRMbwMNvHJPAZcmUQCWenAiaYnMH17eJQPoKSVe4Z17",
  "key8": "4WbWCgguNViReJsKh7y3swwjpS9fPsxxSH11ezMtBdtA3KB9vvtL4XFfcrKAG3nY9MSyDcSVtbA4UvAJJBjZXfbj",
  "key9": "zSQpNG9CsUd5VCb9VWk1vpLYEAkQEJN5Xtz7kb64121EUDYhBkB41ZxkmSGLmHLxhLL1HLxa8UUEaMLY2MSwRFt",
  "key10": "29Sj7htqTDv6MVkvWFNv9xSV4a8Q8DXriURGwSKAJte5cezF7GkkPg6KtpnpMKqHzt7cn7J72PMwkijuiX3khqho",
  "key11": "SramNNtgpTbGNjGD2n14bpYPGw8BAESrF1P2L5daM3nhUtSuZ4SPC6eQmVTezni3VyZUM2nWirgoSdZJL1agyVN",
  "key12": "633CWzQW2kwBqDy2J3wT8mK8hj9gzvVeEnaKtyCs6iboZuN9bDtzw3zhJEXyAGLkamQ5KQkaEhgVu5C7XQZY3qcQ",
  "key13": "2TTT1TJT2c13VwtuB4HcuVsiomeLY8opsajdrpUNhW1XW4QeRhNyz1FkShZjzeGmATaPoopSy75daSHCHGCZCRzH",
  "key14": "5Vd8miKAfqPzUAiWGTBF5D6dFFT4zpa6pgSHhpeUSLiMrgo8AXDTTaj1D3BgxFpihv8AuZEEpBqpa2vgT3VZmH2w",
  "key15": "2AZBAmgoP8k21tenswkHBm63Gka2Vr4KN523iCS95iMYC2VL4fHp8SGm1WPtpeXqWmE8f6yKD3di2hWHzBgNwofe",
  "key16": "5GC9jXfwxx9PcSeFkEpT2pu4sXaycnbSP7XTV6m74U23DQUeb9bx5W3TvEcFgv7WGzX6WuPsXw4Gica2nrRQZdvz",
  "key17": "vyiyUuBXAAniwmUdyEsfVnJrHjYVnFC5oMKNRPG8wPoUnGyqjsqzfWXRcyDoqyeoVqvVH1SMfZ1xAsFSER4uH1g",
  "key18": "3qSNQmcyruGKG89EdqGhJxsW688avcq4ec5JZFiJLLhxsHksYFXbBR2QxvugsTjP2bwdWh6BdjcsRwncsiFCKUcg",
  "key19": "4jAFvaoDoSAFFLGems8bsp8cuy58tynCNtqkvQuWZwPiafJDtcLPTfc2413gGwgB88ZsLXYLjcKiSAwrmHqKokk1",
  "key20": "3SfqiP7Vsvczb2e8EzxakidXprVZdqErGaet6Xs22vi3aiUeGDsgpcXhDXU2rrmbjLQh2xQ13jgjodw96brcKsYT",
  "key21": "4ej9EQjYnCnE7oTgGgkg78ejRyz253Me8YN7NGLy5oxHn8Fqjb2knuaYewJxvYWubpDjsGDFpdssJqidfPyM71Nq",
  "key22": "5qBsqV7GkWgMtzMVZ5pPqiPcNWgcuim9hwFtYXg66hCHpFfn9LYWtU6cDgNxQUdyJdJUSiJY3FAhEhaTDEEdKd9",
  "key23": "2Ro7uCQTZAhEY2jw117DE2damYhnz7MTN7YK49w8XHUnX4PqgnzE6p38WDKRVSDukdbYkKNDqTmnfnehVX6HfmtN",
  "key24": "2QBTH1ohceenp2E6ctoFwDWaRmg8YPgo9gpBM9FpKZYYy3keW7poFGhE7M2kG88yP36gLNPY9TjpY6HYRZaKAD1C",
  "key25": "gxaFyDaS8u2arrgGG9vyYaB8ug4J3D4e22vu6DzD2Qmi4ejPWw5gTDw7ZXdoAXdej26QehLsqsWGQjgGFFEP7At",
  "key26": "3Ywe9euUAr7ZuNcUU8vpJ2FGMnYergKftBKey4jCG9DgoFnbuR7rHtXUEapXuhUXKgysgREZk9oPXtPKAfFR7asd",
  "key27": "5krfLcVyv6kL6MnSmYjuCEFGjDMkjJQACoo2Goc5dxgKdxyDNBxEC6cNQU6qBnvc4njNeUVmpcbzxtLiu8os9bUF",
  "key28": "5JNHsby71GkQYy7ufmTtvjW1eaafRZ9EUuRwYJjyBDudxHBgysZAyw78sYyjXVrbPoFNufuMvYRkgyf6TS71XAzj",
  "key29": "4qZwuz23UYQnxWTTbUzmi2D1Ro71shLMspnEYvBBdR96DJ6pFGafbX5XyBnvvH2bF1ThfKUAz5W5Q5zZJrJeRUtx",
  "key30": "3NwgtUtmn1rnTFh7J5osSsqUXshomHKmRtRXGNJ4R88aCouLZJzfoxnP3Z2ubfqLmevwoNvHucKpwap9wVdRuDGU"
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
