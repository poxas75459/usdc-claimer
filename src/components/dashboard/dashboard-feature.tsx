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
    "2TmAdvazPfEKQRh5JarN6oRzThPrAQ4juSwJKyZk4TRhxsdJ9pkEjeVt5CLk4yzBzRKQ8QeNHcQJyQaL8gDtRDSG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6xZKLFqsAmjjJEe7B4ExRZhCLeNP8EmWR9DJsHsr8CJP9dtqrAXbWfZAgc8oMpxX3uNGBxu3r99dsEm8ge4Caw",
  "key1": "3i97RPrUX7v22tiu5oeRqcpogGJ4tM3Z24vnPQkVWaPmKTcVbhR8SGfH6P3Da7AXU8SsWcQGCFzJrCC4i3fwmBTu",
  "key2": "4mv5Cij1yPQZamLxvpshrRUskxbq9CzFRtS1JhiAoB7cB68ReJvyuX6uaMFFdFW9BxgPZGGBV9RaRziQSyvLFjY3",
  "key3": "4uoUQ5ES9vVe7jjkVrFWm7JpP6x39DPqnNQtsAi1TpUJ49PdK6Lo5Ni7Hgu9kgrf5RKUuCWv8EHbuf1uxrDhNg2R",
  "key4": "5W6jnbhiRA1n6LHu5NUJU4Pr6yPUHtrJyp68RNBvzodmUb7DLHn8FfsaSWvM7zuN8G3GDi4RfbVHjTcN2VDfX4Fk",
  "key5": "4nMembq72LoiW8UZDdJ8zGApb2i8UaE4tsVY8FJHjF3yddajHDUW846zN2nRTPFk4REYFr255Rhwg7yPXjiYwumi",
  "key6": "4rK8raY1LZHx87vQUjqVQaTCdpwX15XmqK3gMcDwRB7ptZ727hiVxM6een7C5hse1vEecXXYATqUfzmStYLEAC2T",
  "key7": "AgPf6v2fC7adLZDUT2kSstbdHHx9VW6MMXLY9VHghu11XH5wCem4wig7GoT6i494LWJAy4smpXn2duXC2v7djuy",
  "key8": "4wJUy6U5c598FB1nWJr1oV6A3aFj8rzzSnPAa7FsRS71s4btXNfyJKbAsfTppbVmSBs9NDDn2qjhbUfyg6ysNLSz",
  "key9": "77QdddKVJmg3UbMq2Cj4rA4QvsPCPjG3qSAbZEAnhMZj5hyjCWoDWmZ6oRJ3WivfmRohSTXThDCVZLRbrkx8WbF",
  "key10": "3nHYm8awaUcEjXptZDK16HjURhSfBhse3GA5CTetnAscXxUsYCEJ7RQhnzHCU19KBDJQ4aHMVsbrMHLew1KSkUJE",
  "key11": "v4NvAotxCHvDGtwxtX6V2k5hqzqiJCYTD28ZKHEdNSvH9H35wNuXpZ1SgKu7GqmXJt2cGBcSEUjSE8jrhZ2eEMP",
  "key12": "2YGtpYZimmuR9Ek1bXXfyNwfHSRXa15mT2eHo2JLSHXH9Vz6sqV5Bx358W8fFdHXAz7b7aopkxXZGYKZS6uXzpVU",
  "key13": "44h5XuKnqw9YauFKizcLxW7XB6t51pMzmJHbxPJF65CPTExenMHrFvYm6JAo6D2Fyi253KewuupyeW1PKgNwRHFR",
  "key14": "5L64rLgfzinMMvZxEsqY8YnjpKgixRPAXLcfRtBQri5gYXN3KPc7HNjsGrTuNsvVcWC8YvMVgFC196R48AvB7BqK",
  "key15": "3H5ENrMMMtS6jKUS35CdhbFD7t1kwyB4rXuZLicrUQHV8szYHUxdpmH4wcz52YkdX4ckGdFcbkYCdGZeeo4kAXFD",
  "key16": "2Pv41V2jp8wMVoYbp7mJbVGCBT9Kz7VXXfxd4s4hSscva94p4PJSZNU27JEYA7TeCnQmoQBMhTd8PHAjeU4MG3kk",
  "key17": "5591npDS6jtRwUj2xUj4kygkWqHUabC8NEo8rZb1vGxmNWevBwdvNXKvn8wP35gS7nfvUCrKWe1Ues4jUSFb8uGp",
  "key18": "3Riip4mPv5cRQxuaoCz9JBesU1Fbm6whRsiHrSJ8wSj7aGRA9ZgRXkYc6CAQ8sV3R2Uszfa1RZxRRW3P3rabjt6g",
  "key19": "tMyDibsuSqqVQNZ3pGZGFcaemCSUrxEdhmRTsJT6h2oJLh7GVEkp3xyneBYykyLZYncy25y3swkhkZoueLBzZrN",
  "key20": "2jq2CUDaRy8Gg19nH68EmUJPywujijdShHzzyJ2EXP7whCiU4BaJoNxGNqwrhYNEkD6dSeDabkP9kEKeF86e757c",
  "key21": "F55eyYKUxEEYSi6ZbUf8FbZJ17dPyhRRPPQuikrUyXx85FkVcWuFGuAudAvuD8wLAqzmzpbthUA7XnYJRGY4tLD",
  "key22": "4H7TGW6ToSAFDhcaPYesdSU2t82nWJJfF9xE2eU1zx8otoPxedQsd2tPvkLytX1EY9T9aRyxjqnakjCNoWo9FpzL",
  "key23": "5tKweKL1rXJ6kn6w3GYQhDV1dK7CsufuWiGXNEASdGyaFrfsUiEEbvF6ZJ2Rz7W6CZqisAJXoSL6WBWY4o17FjHh",
  "key24": "XQNT3kjYi3n48yQ9JQXY9mY6xToVGTMH8KSPwa17aGUwpCm3nCXRkqFm3RSyJAGH1PmExoEfz9qn2N5NQ5KVcUM",
  "key25": "ecG8MAWFQzzKPUcWvj6gjQptHRDJZB4jodhtGBnQ6ShQp8RU7LFcNqWLjGfPPomLfmgjr1prHKW7jNSAhErBiJk",
  "key26": "47j4CsUhTMUKQNdKtHgkkDoBGHebAh6rLeooR32Cvm89whUvFFZPQZTrhV6iv4VWQ1Q8GSEcXmRy7pg8B8tMcM75",
  "key27": "47JQ5qfrpJ1UHNHgYGpsT27iHBHHq2R2L3Fg8y2DuarjdKiyJhkR123pHcAdHUq1nFur2hQuZHLQUqJygeTgy5bg",
  "key28": "jVYQBKCcker8He8Pm8XAt89FNJdQKgz9PnngXEQ75JcwBRRc1xkZzsNKsLi7vcu7pErgjLBYYNxK5hC34U2oWLc",
  "key29": "4B7eqjVqSYSLvmv2npeQa48YKpN79GyzeaL5VBytXwr3ZjuWLeVMhLqAPAjqQxH7DtqSJJYxXJUxkwJD8fE15bbH",
  "key30": "4mqSiSY5K5XYBuiimrJBJf6s1QEyfjJwpnEXH4Uv8a9JYNJeyFJKdUXgjqFtzJVu4itzvurjveCqRtFZm54kGss3",
  "key31": "5j5RoSKEpuxkSLgm5tgw3ghgG5anM9Rxq2gWFduyhBYZVxmq32jHgq69ERRJHumkaR4MFf7BaN5s2Ccur9nvbJF",
  "key32": "3unX4iRASvVKZjNiAAjRt8MGFkbKjKRiatDg8dWwbQuEXta9NaiZ3udvPPLpwj65wUvWoswszm3Z68G9ymifyUrY",
  "key33": "2A8gKjRiqD7NF63hA5sWY6fPco8D6DAiffb6a75z9USeH1NLitJ8LsFGoKz7cysh2TNL3WZSKWvLS1QSs6FEqDiq",
  "key34": "Sczux9CL3HDZExm4pTVcc5zzCnE6zDHywvMMyCdqDYSa2az3bmhrKX2VwVJrdy9RSRrNA3est884W3Y7WN3PsaC",
  "key35": "4NRrtg9oUG7Z2QqnSKB7dANCWR6nYoHwdp36vZNNLyStuQku8EpJpoS4sLN2JJgRqxaxwsYhsk9ov4aisM7ounXK",
  "key36": "JjQnYEaTbrWcgM9FRuaMuZevPbVM9mzqbDjqVm1gdvyPCJRA7Df7VFaqYZpDyYRJ7yWo754b9BwtJ5nrhLWMvTr",
  "key37": "28k2hnNKAufzthds1x1PHBsDUnJoKKPjC3thngbsPB24edFteZEFoDpK8a9HLttXainxpL1WNTKTgeE4LWsCrBAy",
  "key38": "3Rv2oNnEKyJBFQiewKBJbgXjhycn17d9bHh7o8nAecQ1Di8hCjmV2R99aGVnE2a77f4eoyy5JgyG1YtFmwGHmevq",
  "key39": "5jEnX49tMEP3XDb3HHUD4spSwaJXs7rPKyEtab77rb9zTjyaHgnAsXq6T8vzC8mf1PTG3kcyepBE31RGKBzs3GKX",
  "key40": "34mgwiAz6YXmszRCbd1QVaKJJ2UrhBvweeDqArUByFidrk7u5kWgoxfhftYkQ3hsPHBMJcTqQEqTYW9Z5CVgKQ67",
  "key41": "2G1k2uYngGxaM9qSFTAxYUCv3pt6qQukBxyyrfXd2i4S5eLTxrDmd9UxqptfZutacSpXviZdu549sV4oxi5otKZf",
  "key42": "5o8JEg2UxkhdRnbB1QZKNt2y3x1HxezthcfkAAUF3av5iVPkruse4wy1kGsNTG79j4YGVBL3qKJYVhPzRdHF4ZXF",
  "key43": "41sD7bKa4B3zyDi1bzFAud1Da9FUDqWvm5XK3NPd5776yfyTnffFJAAaGP1ztBeG8vLWh8s1qo7orDgwESWJtuV6",
  "key44": "2vSe8pqLg7BBizunMhw1mZEmb8hX74mAi2BLNwqgfU6iGGE4J7FXNUgLe8ZyJCszMnbUWiTohrNo1zoe53EkXV2u"
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
