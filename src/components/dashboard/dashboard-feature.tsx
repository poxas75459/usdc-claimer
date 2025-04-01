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
    "cbHfCMFZ5cZwkruNSsNcTwUMLhpDB16ATfJwyFsWCN5E56xUHwy8LyBbPv8R948CeEbBgC7ts96BCbiayWNbwyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLxRzz6S2mgQ3zUqhA6Ne4TANQLE36wsvjMGoKynUu4QRjJGtvAA9zi9fA3QDEDHTUZBUzgABGp3HEVje8bhD8m",
  "key1": "4HcJiTG7d46LYKYAeBPxjaZW9CRZHW5bjbqVcAZgryKQ2A63itwGhnvNVSPYnyixuLu7EVvvnxipCVcCAP6tGnc7",
  "key2": "4CveY4UDmPv37VCwCBzXmirPoYZxo2bWSKMq7kVZ1KjhB5K1DYgDd3KoqviDQgyvvE4KNyoLiukFdB5ept9rPn8s",
  "key3": "5cAKmYmyhsrZoV8d9JiTjaDcco3Lv95Q6cznbxep2pkNGoqUwjEyqUzLR5cekRMNpgAzCPbfDW6QNNLXH9tTRrVe",
  "key4": "2LMHKmrfX9NTzBsfzmi2niem6bMRyf1bWok2fB6qK7kJqQE4e1s9C46kdLjuVKJKxz7vBYaULY957mK8EpHX9Ffy",
  "key5": "4S4PTXnJmBDSqPQsiBRTP1SH6NehXCTdxdsFZRZmznCr4rdkY3xMYM9DQhR8denzmaF1mNghFb1kYHf6suC77ddG",
  "key6": "3QqggdRkcibsGQDoqNN8WjPMDwEGXJHsgo6RjSVJWCFrTPaJnMkjBSW7Jn4X8YnppUVgdhqg4ocM1Ud7jFDXU2V",
  "key7": "658HGthH58UxjUu5nvswbwFsqgEjthJwUUSwPsFuiQuWcfaupEH88xDGeWWsARHa1Pccmawnop6T4EfeSYNbzJEc",
  "key8": "VEbEnZCf5x4pTJRncGumBt337yzkgSiBAsNFV1hHAMWoSz3DSNTHCSGWmWziQ9QgGFvZNmDgkyvAFZGUqUt2G2G",
  "key9": "y21qAQX3odC3DksCc2YtPT2YpjwHaBXb8FzQtsk9VrVY1iTHffL165AZf9wWGHbW1c988T3ve9QAXUm6QFSV4kz",
  "key10": "qPmkiA4aXNF7Einynip7RLnxuVfDzXpsrGpRbfZGtgdhXhdmgGZvbKWMZDDx5XXCydN7Ba4LJdY8Y1AKajDTBLe",
  "key11": "qYmaNZ2zpDVZSKQaeX75rK9ydfEvVZukXszcBASjzRwF2jVLPcLHPUVVGNBXNWWkq8varJS8ffgTp1NmQUgHGVw",
  "key12": "5dyv5hZFgdaBZdHrtbR561jWE8cjAzNtUL12Kvcv4GkCV45JTgrVH4Eyj1RfYiSTJ5xZEAtNGmsoUTNs7knhgrZ6",
  "key13": "3gYfkSNQ2nPmZSnSE3Cg6WP9fvu4wJUm59oTsuiYpjX9T2nDokc96KLrNpzXcVuKcbq9SLjfzkzNFMLFBoMwUwJo",
  "key14": "2HgR8PvPUWnKtesLK7gNLyUyJGybvVqn9Vmb5rdSaoc7Di2tQDU6UqYdZDN5bjLfXE499D591fbQPtggCwnQcPGb",
  "key15": "k3Hz6eSHmNgWGKVSGrwSUNAkHfzJLxgqRoL9Sv89hLu43hdE8khn7v6Vg5jbTGhuAGL5unjKpzND7gGcWKxZUrX",
  "key16": "2PAEKAuKBM9uAFwn9kQNgkpWyjqew31P1sjQh3CFY3XZC8Eh8QLH5eWpZAgC6uuzLra8KCYL81R6i4778R7KEna6",
  "key17": "4wGJeVoA6ekaV5a99Y89Ly2YZ2S6TW6ikmMZAQonFfUcduJaPBmSCJwiwzHLGTMNbew94wQULbsDbSinJZ3hrXej",
  "key18": "5dffMUgTPN6sJGWMAdCkAzkhFU45s1Lhj7u36v6k3Lbbz2va4o733TaKb6W22cnQc4itdQEdL9PiNn7KawreKbAB",
  "key19": "3GJz5h8H1Pd8w3QPTBG54S5SZDckBmH26VpYGEWwS9u23UEL3EqFbgsMDwtWkbUX8zQUpY5EMFDH7eYEvS2s7cbU",
  "key20": "5WcHVXx1LZk35bokdJSCiw4hqT9wMFVojKbKwMTR55EcZD5cxizRhPyMC3eFq8PV8y4FcXVTj3Qiz7FMbfm9eMsp",
  "key21": "3ZaWhmU2APASgsArUMDusDHRXxtch4bPNNzogZabrtWaaa9dgtUkStfTzN91trQHKJ2zR8LFWkwDFUepamVEsMvS",
  "key22": "5viHdu6yZJCZNZit86Z62kL24bVo7V5YXkLZBVPvzCRW3JQy5AMcWg8EZ6NiuwKinVrvr25i53SmZBRPvZVAT96S",
  "key23": "636WNe5h8f6bqhUai53ewzhZpeet7zkLZhSXPBbdb1vwQWNLmyzZiMVYgZLn9AAEPgjC5ff99NXn3kpZnBTJRazK",
  "key24": "b6qPVFsa9o8KgGJo9ofyADh5nPXqdVGxc4d7ZZnLLT2s1BSeCrZubaYDWygUAsfDqAx6jCXrhFM9Tb7c8vUkPVR",
  "key25": "gjAT5VmhF9BAc5pGVyty19WST1xvTErPGPxCaxDYKiG91dX5k5zJ1JwKcx5qUerHRxZjwSqY9PswNPShGdmmv5K",
  "key26": "3v7amNGAZPWGCr7USdDt8Erp6aeDtq8N39TTqVQEAybWiJaHU2vm2CFG4NoJnznQ95rU1gvddcU9rm1DjMKa1bvf",
  "key27": "4hvzq2TkYsRi7Mec4UFGMUpecU8sj6kAPdh7Shb2TqDqUYM21S6t2bfxV7g7QjJuQbtsCUEenPaoRhaqdJ3R8g8v"
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
