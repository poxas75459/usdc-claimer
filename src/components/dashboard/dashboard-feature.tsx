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
    "3eFr4Qd7b1vugX5dTgyzUJaZy17USahPdoQCkjAGJ2VNCVjwwTn9xBt6pTePPThEDEi5z9mWCZgyv45ehebgtJvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r71a4uS8JMLpER41k34dsNjfmv2wuAmizYcVwU2MJeToeowHGQPG1uVdqwjgFhj3T11KUe2jLdJug5K3obYKHPw",
  "key1": "389ZVXL2Z9LKBAte9gANcCud2HLTYej6z3gE6duMfpZyt4SVLtvPGBj35TU16MQV6dXrWkScLHkbchknRLKGqJux",
  "key2": "2V1hkomivrRJCV4SpKhE6ouQpnz1nZpA3wBqMEQDNGryrYK4kmoX6F9joV2zhxoN3eyNihaWRH6cRejLxcb8wrZw",
  "key3": "5fEp4bj6GELrcJF8cg64DHNa5gUG9bVp2fdSAwRYdKsjYR3DWFfkXfKD7YgWAYq7JCqVv7ZsYtPLBYEeDNaPDdJu",
  "key4": "54pyvJNJGPMvvbAo3fenXY3mJvdNxmPE6W5SfMpSdhh1t3bxxYzmBSmuYMQFxrfFgqcnnco5BpHe9RQcYc5athE5",
  "key5": "4HuWn8m5uWm46H6jdLGmdahCFJ6S7U5yALPmyveWPLdpcm54Le4ytot4B2qQjHN1kjFnWrEjpVMBA7mdEntHsmAd",
  "key6": "3xTqZsG1t5io8KoGZSYsDLH1nT2ReBfaT54qwzqQ7UZ3apErF567FixsrPmGSZXkMGvLyrDujkfmRs6fz9SYbHRK",
  "key7": "4GX9sVGvg8vBemdHwb3aS4A9HRypA8HEmXLuLK7qsYuDnnZjx7682vqkKgn6VFknhE5MyvfefwhPF4jT3zzNKf1H",
  "key8": "XQuXzPSVBGVccwCDEh8sRtosXJ4FK67TTmMzT71zQq9Erqg26Bu9AgH6dqZbCAtxnGuaicdKaiaiXRZnUGg1HU3",
  "key9": "2txdYnJX4HVQHudKc4Xv6n5zkudvmi2zPGCGShUZp9R5hDXiRXSUwiDAv36ti1ZmzzAj5Ef5pUQeAqT1ZQSoRiT6",
  "key10": "aUi3X6zP8MAPWHDUU2tvb7ADVxxPWxBPy4xVfG4myrZ8qXDeGXts2f5RXDSFMQXud5CSxjrHJSNC1trUnhjij1b",
  "key11": "3EbuNUmjWPAKdNxQn9sK2to4gtwtFBYi9zwPBJC2KmQNoBZpYUTEqrBipputo8TaegHCAWtJasrp6DUPh3RWGv9Q",
  "key12": "3mSoqxEVNMezDE3xTEK1e1djPjGLhQAa8Qe6JXwGte5TkfQti2RAtNNpxBakpf8dBmgKmVEst77Lm4VLbKQcURT6",
  "key13": "2b1FAP7Hd5sMKCkDu6fL1yoB7uWuhXVejFsoRnLiWNbXhkaskMsR4K81a2LGWxYLt9gbS2vq4z61bA6oXurRiWh7",
  "key14": "2XGa3i45v2ypfEghTMu1xvrUHzrwR71adJov52q6Gkbm3Xas2sGqKMetYVhq38e9dr1cQMPUJDfewL2gDuQ7GvFL",
  "key15": "55UZnQEWpb1uquKf63j52CccuVnYWCmsugJFB8paEkNtLPWh4Nsc8Pk6qPZzB59YBy9SyLRPY8bJTChFrdW4u8bf",
  "key16": "3u1xa9T2CuHYaQfkDJQa4iqHbHhyJKLiFWX17Sn7exwLBadhu3exT5gLZiZ3fbPA33LUpjkpTnvn215nnZYHfY6v",
  "key17": "2Hs4evkQK4gwdNwvqM69EtwVfypVs97PqkZbBee81LBNSEU3g4Ucg8Np2UzGZoz4e9h7LH67fBFM6213w7ZAv4sY",
  "key18": "34v9zTZWdkyBV6TcfAGQcyW92bACE2TZqY7Xq8AL7cxVa2mQrrq2gtw5nrDn5hFvKvqJ4zG2mWwNJKcgjeD9Cxaj",
  "key19": "4Rtsfnej7d3Qsyzu6cTdNimVyqNur7KFcJDEgz4An2FieL523UgPDVr1L9KNFQDT8osRRUQcrVXCMNUfTeP5Nkdb",
  "key20": "43zTiik8dbAeqSMPkAuPZFE62pSeJjXLjEUcQJw6AaP7eb3q7xU9gVTAD3doMA86kksCjzxtsfgDLmwbAQXppRw7",
  "key21": "5B3hYnghfkaGjVpdF7aSGS9bHJb17VxbnbsZ8MaMAV8weEpYqaXCe7bGqdvNsWDXX5uf6FwPrhLsAhzvL7fz7Jso",
  "key22": "2vJb4zF6TJghyXuRtEezXQkAg3VvhEWr19MdApe1B3Z74tdAweN95gm8gj7ey2rcUz9oGz6WsDEnKfM3GghmDn9T",
  "key23": "4gfwnd7pSe22RVF1Wyy2YQkFAyKsyTRUwgUHjnXm1JazGKG1wXiP55J6b8dY7qxrsffoCaw76WcqsDw3eEBF353s",
  "key24": "3BRqypKfT18cywiCYkBBu4it4zq1uESmoudSaFJGDDU4kGjzvTkt3jTASGiEiCMVLRAmRYLxtc2znyxAhZwd2Bnf",
  "key25": "58u4uA6wkLxtxrwbYQAsKpYM2ngzKmHe5hs9J7y3GPBEU7xBg8D436rRyEdNQJtxeeQDUUcc1UpDF3t4MoCczRmQ",
  "key26": "4T4cPqY4qJbL26rxWjLaTZqTgvFbzHpcPb1VytfgJeGZAvH6c2FiHSjUu6mQVaMGo9RXiYTTyhfvEa3iJVEwJSrz",
  "key27": "5N3dFsD6PADijExsKd2Kz5fQyf3CmhvXEShBbuTDK5bBv92RUVuT3h5qr1MUkjqzSWwhfzTfFfg4wS1aXTWVBiAk",
  "key28": "5xRyVKcud7MoMtMw2rEA1PToo1KW5VqbVUmS28jPQqkiBZuieTdGfXNtrADqoWfTujoa3matSoHPyLWoNYtPoEy6",
  "key29": "3v5DNkHEsLaTAiCR578AqCZ8gagiXgoDkLBDHYuhduvLtvHCV7B81jSqFFNYGM1jox4BaN2Z6G7XkRHa8QxdUGMz",
  "key30": "4jPQzgU2Lj5XLA54WPaW1TamcW4N4HQqL8LBhmipaYMXi1vxiFmU8n6nKp75HzpLzwLzeGxde5qK9JFVgDyYtGLL",
  "key31": "5ZkmpaFpq1K4Jbc5hwfHFewssYZUNKDFmTjB1eNRbQ7DgFfV4tTpJ31xAENwKncb8r6FynQwK1LSKJBUX3Kx42wU",
  "key32": "4quS4szu4MMPhii2aUit9opkFZ9KH26f9xmAQRptFsBpRCGcNYvixPVXUjiYRc1rb3MoKJmiWD5KSDWovwK1LYun",
  "key33": "3erQg8ykQKfHY92TXkkRu7z6ViCsZPFhzMPG6n2ZkUqCXUcN1p86KPnrPJEQD44RhsAmigJTivL8QhDBtL6FkWR3",
  "key34": "nvzc79aCHwicrFiqX6swhvH1WXFBXhgHQ8KgBMEYMme12sJL1tjQT5HfsXrYdKdbNTrEdgZbJnoQMkuCx9HWxHa",
  "key35": "5L69Tcw2BuW1P3gqV257AJ6P4jn1eb5z8sTFWAzb5Rb9Z3d1tcosNqgjMPSSACyHHxW7FChSg7gEemrQQkuhMdsF",
  "key36": "J37HSyp7vuhNh2khB7fNzEsY2EXwdMp6J7T4c9wANkB2FZvK8wWotJrHYjJwifXTVTk3NfhFKmuu8BSDgDV4pgt",
  "key37": "2Rm2rLbGhjzMCGV9gn4QfnjNrSdmgFGwMGmMjRAn3QNvarSGjVHvvbMK5raKfJaEQ6QzbqwmFx9uptmdPZcEBiAu",
  "key38": "55jByT15BzUt9b41v4VgRt5awJwErkPHzsPeAL4G7YwR9WhCopTyL6ga8k1Fndn1yvP13Z1s91wbo7v5TQAeQU9C",
  "key39": "4PVaFgKxRrCindeD9q43nBMoSeQ6Nhj792i9CTBZT3sqgNkfB1ZyeT1eBZfwDJ71WZRst42JAizMtevL6RKhJboU",
  "key40": "2iJit1MHSn615YhGeYnHsQSxNHQvYdjYjSgGBFDUdzoVPHciwKfNKq7Qy2Hp8pxox5QURaWqo97mi1oZAihDzqMi",
  "key41": "39grMV64TJa8yd73amzWERE4zzSoFdWvMfcmkGPxyFSx8bbscED9LhALF44LjMECcYgvmvBChZJb7kPQXbARdzjz",
  "key42": "2Hecgu5KqvzxYCpbn9QcXhfBse4XxfgVHTDm34sJwqtRT21qU66C1H1jGUknF1bGdLwHBzKpoBK68YNsdtUGprtE",
  "key43": "5MeWiZBHwj7aTxD2UnaU9LAUSkvycbRyPhr4A5UUbL3UPEERkZfVsDhvWg4TeUNreC4q3fVMfXgAfAmPD67cTa9S",
  "key44": "3X4yPiCmUnxJH3L1VUV5eSYERLqrNcjybd38w4Tjd1W3AoLNQZzCZfbNpgkVVK3y4syKS21ZXp147edMiicWoRw8"
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
