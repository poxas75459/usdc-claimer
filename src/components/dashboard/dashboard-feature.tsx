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
    "25bjr8C4QvjicLyVWSN74EH2PtrofL3bNceKvJbXCKRxzpZjWfe97Kf8VDEtYFu95zfreojTYMVou8vtp2wX1efo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NVmzkq9ni6kTwkgqMUrSgu59H5oVKT9bPi8SXqnab38Aw1FrA7en5zWrMmQ6XCeqiBveX5w2P9X5zV16M8o5sE",
  "key1": "3GmgrHbrvLcgnZDCnmogK5FFWHmsg3SCL2ivwaCyz2PQaZa58MX7ZodZXeyQamdm4unmghBjhRXEbKKHEXjq9BN",
  "key2": "3RSj7tcPA8JYXMqkTRBijwFE4d4r97nQJGi4fjWo4QwDycPpxcSVsvjkT9i76yGCiGM2Tf2zP8ycvGQrtMdpiQV6",
  "key3": "te723wxQRr8sFmXQLhfBk962HDarV1dTxGrmoZw8HJSYCbycG6H3mcMhHmBfmmcBcN5EGzR115XH57tvarCyRBE",
  "key4": "vsMEL8eigrspGenTF4m6U5EmpHXECeycK4yZPdmEN5sDN5iFhhCeZKbz4avvxX1MuJrXnRQiFsmUKRYtHvZfHyK",
  "key5": "4opxibFt2sHCCopke4Y5QpDuv4G61HBdEEwebGDBtEcPvNTy57q42v1q9njCHZX62LankBC4ejvs5gQ4f7HPAZp2",
  "key6": "5o44XzcjhTT9TYjj819F3eNV4cssy74tkQgUYHJYoeeikpCrYYWVmFMptDoh2JD7hnsvG29TgRycyaE4uPf8EF3X",
  "key7": "3CzjGgpSh6qYPc4NqXgCvNpBdWCsLjvUGooMtSSsCdGvJxuVmJVnzydmNhCYyPdLfggDq5uDDLHaZSDLwsCAoxku",
  "key8": "T6pJWisxx9FXGvf3Wc4tVysBf6cpy5ZJJG3RAy5Nhkpi9A8ZrDF8DsE6Du1ZQDXeFTa7LdeL9izojyJWyjWyBuf",
  "key9": "4dRmzytFtAZ2ash5sdQixXgDwaL5PQA67mUWzMKMz83CFzRn8fsVw2k4m9BkzskqD5HGocvVTejj3ZUiVsGgFZQW",
  "key10": "4vb6JPAmdgm7weKDgmhuCDy33aeRt3D2YeCS24zGL5GP1imDZcrpGfgDd58V93YUqWYoAJCqwQ3Skrk3njstgdDG",
  "key11": "ogGXufiriUGsAE3aBxfawS7Jmn4AqFxhHWYhRWCatoTW4LXNmiFg2BEbnrn2y59KKVv72e8kGmKhAsMLenkmkB3",
  "key12": "jyAK8HLqxeadsXpB1Xmg3GxnfAcXEHnmVmEqXASAAn4dFmSLDiNT6NLsKsYYendmNGohkjFQqoTNzFqDqutyi1z",
  "key13": "PK64VjW4WMX1AjaWJn8ZgU866SfpZDzq5j5qYFV7U59GCn6Qvf4sjuUYxbA1GugXjWE3kZdEdhZfs1C3fiRudA3",
  "key14": "3o7XRB5xginVUKZcrxK3HXVsPFt2j5pF2aJrDJkpwTT4w2JaMWc4GfELnP2K2zw1BcDWa5JiFgp8tUeRKWXucdkv",
  "key15": "431uHC3DHBVwiHkukvADNYRnccFXUph1Je5i1V36vNmi2R7bUxnMZYteUcVJvVu15Lrjz8cpoCggBh2HYdDXU758",
  "key16": "4sSAjsqFvxW52m5LWPtq8XjZrmYJSzevhSP1rXzeDoNycZ1bKBcbqGtWfe1ajCYVRwkxu6LeD5aYKLDBwaemVwq2",
  "key17": "2vUDfap7Tom8aNrQJAQLTeAGBQNytmfHuuEfwzAjpuZQ5mJY2K4XCciXqo8YcYhhwD89yy8hbrZZK24NsNjRCSTT",
  "key18": "5Y6Jdhn2xreG45bafTsA17eFg8cqvpdspC7QnPBEDMAUVVAYy5DJb7UgyH3EeuENTrchV6zL9dqaVEJnFJipoF7N",
  "key19": "4RQUK8fEVcUFHeenRozzUzygUBhKf7jjwuz1UCGAk9tthsQVYoQ8tPHoZabSo6XC6HjDsJFEVMSQ5gSX4CxziC5Z",
  "key20": "669Bs9NE2FowpqVsFbKwh4Kt38gmJsNpU8AcSdXbh2ocuZQyJChZGf33PRDnxUBw74dfisWeeHhDagAcSXSzFWzY",
  "key21": "43tFBA4QCyGZ2q4mvmZTzPLhURh3zGnrTJP7izusBRwvG5hahMEDLpm7ZT4NpiPLJ4PPpCM6WyWxuSGbTJuSfDae",
  "key22": "4QdbmAGK1wXwbM7uzPfMHdSm8oRVzQ4JJ7CPyafDLmpo3wAgZgp5KN9xAjUL8uyiVeeVku2L3s1FPwbgZpRptWMr",
  "key23": "u9YLJFrGB9rgTdrUiBEcnwuULHfgEgQ5UyuDtM3pntqyk3hbhKAbv4g5ot1LhnNnd6DYL8fQBQcV4T7zpoFcvwf",
  "key24": "5jNtsyUzUUMD5oikNREwbtTnb5jfzFoR1tQkAyaL9TN399VsEcABgYb8MuetiW1oHLQMCkwXXhTopxfZpcRF7rif",
  "key25": "66dfa3aVK4JEebWNh35Kj1ANwEnj6Ff6ejKEePmGQinW7bETCkymZxJShV89uHhJYSCraGdxrgXmaDKMKhautqRw",
  "key26": "LmLmVXhQgrNrc3KG844ThhbVbF9fRcNQrGrJ1bEhZAmD8Q7REfwxLpaiMVigvah4tmHmkSRvwtk1LymaArquwpT",
  "key27": "3mpTZzMXC3qzNp98eQ3egAQYdB6wFTioZn6q9yn8n8LkPgWEiyFfrTtTa5seJgxueRAPAyxjeGRraDQyV7BNvELf",
  "key28": "18eoBbFRbbr3gJQ869gqKqSVC1KpmeXdttrAnPcHhn1pVcQJCK5hBSckSwnHKcRXSwc4pNApaZw24mu6FMhUGin",
  "key29": "5QTyK2vnTx5wRrH753EMqoKjR1LLigCSxLe5JpW74UAkCf2JdFvRfdKJ9wdFqsScdjZ1Adgn6bh3UGMTY5ztxZ41",
  "key30": "3uqJf4nWDfh5FL8KR6cnVq3cGaWW5GGt3ACaWbLY6ckJjrKr8JuB4J1FnY5sF4QbaiLV4yLy6wx34WmRQwwajLdC",
  "key31": "36GKLY6uHdnGEuh5xURWEioQHySJDzT1TPB48vro6s9jcRYQEHpBE6nxPoz2C9YEMuW7vah3a7d5a256TgYT9YWP",
  "key32": "283vr6m4Vj1iKMgxHnmwRwPqmCp6YZQaPYoc9t3oVt2aEYzA1Yv7ZAqLv6mND4XkkG2fMjhte8MkiBFXQqv5BFCe",
  "key33": "5V37AV2rj8s22kMZnAyw9PappM8CDTowpwvvJq7siiEYrSXz6tiYarn2HRsokn8MxpeyaGLgR5oSfmbEfPLsH7yj",
  "key34": "DEwAjtkR31R1aDGGdEwLSjwECsmPbGFZ778iSb9jBQgFo1WyYMcoPGjs3jpyN5XVso7KuhJ4Fx9dcSUyFR9gbPM",
  "key35": "x88L9j78FmkgnbivpDzG5HpN4sER5RVx69fdDVkhRsxs5h78HtUzGq5KfkXm8okwmPAsQXYrhsRtAvzYbbjJxeW",
  "key36": "EW47vzPUT2c3GDuLsRu9zS4vUFtByStYaikQzkmau5eAmgFYRGfReDruupdmmQUK1i8rCThr8jC3sBdjUVFYNQH",
  "key37": "47Vhx122RALm3EfhZzp2Xbjt1X3PpUtJ54sW8mJELBXBXTDemHbGrRPfLmCdqiyWGAXZtre9V4sGz1rKyP3wnkXf",
  "key38": "nTAXcNYPDPB9zbEDL1dNAC8F9fhHbHbvGpcKFA7oP1PhfqE38uZtSHr75wYtRGPeUtMDSM6u71xDM9AkbVYFLT2",
  "key39": "2bV9JgDWBxK3awi3H5xG6PyGCY6pvaEm8HwMwV4NwZvoH9PHoxAEyfRNXJnArZ3vFG2uA5q3prE8LbadUn8pTn4e",
  "key40": "4FpVqntkp41o7dVtPQShrZwTKVTW3MP2wpBn6wTfoLXadVpNjfLy9obwtB8qdAYt6ggZ2Riw63BmJkqWnwswpt8K",
  "key41": "2ohCGM9wcBZGErBCx9UjtcitvmhuUL12rWxrQSK6uycQvMNRaw3D4T66N7K89yf9YVdKo3GyH5rEojaEUNzY7ufv",
  "key42": "nfmhMsymdFVKtfwSsjgQoWZKBbF2rj29RrZdKudNdzm1iGjyipfBK6ihwvTrRfcLmfWDMDP4ZspVhiCcBnAKRgo",
  "key43": "62MjEC8TJqMdMrbDevXMq6vUw7ZYTcn3LAG5G3GGaVsEmkZdSdmoQdkEjwvsQCkKc2c68gqM5QzNKy91w9SUq94X",
  "key44": "iWyAEsmLMxHHzNPVL9V3iEPKSzYN1yMi1YEpykrWmXsRAJzjSCyPEi243eVs2FUW7cdXqMJPNXqyogiJjDr8rKT",
  "key45": "5ar84GvK4oY6Ny41k14pGsfaoS5B5KHWUmdWLuqNet7hXXuht1AhzbEk9SZQBEffAHbhRS1PMexJ1r8GxY7EV6AU",
  "key46": "ShD6Z3VhAkqQ1ry38wLNWeZdmfA1wFAKj5cyASgxTxu3S7ZFHi3YtpNkXnZUnxCKMjJ9PdTn8vwsDacmFnGZsq4"
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
