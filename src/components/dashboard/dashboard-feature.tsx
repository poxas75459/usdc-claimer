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
    "3WHvdyy1K5oCXfyfVHor3bfNSKbDN8L5pNm3fw9WQpkp2PVEyxBSRiuwqFyEBF2rHU4x7vH4PSzbJao7vSxoYJAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hUDnds7TsDnbutkLbQLafbTMh37NAnRHTPSCzbi47Gqzv5KrLPy4eYEBLA3uTHSnbqqide3jxwZHa3zKfFGnqh5",
  "key1": "BcT24NvQghkHb5iBnN8Yrzezjdx2rJPJnezEJUgLcDoswN9Z7g6BtJcsJ8TiRXARaxLyAXyRzLGtprkggM17XT6",
  "key2": "3QzvTEJUvw7N1ohE4tcHiR4mijRDZZq3H4qLiZaQ5Cb3S4ANUZsB8Q52ywwwAq7V9NJJms2hqSFG7hevk62M8j1",
  "key3": "2HsMQG4yRGhkn6fXesae8ArQMPPTZS5V4YUSzrahHDPe2b4KzKvzPBCLsdvanAdJQh6m67KdfBE7K6Kt1YbRxfEN",
  "key4": "3nY4wMZAMm72UwDN3GEUS538vKPdQ1QXLC5cjPLQL2V6Xmskr3ZoB9dzMyBTyb3gz91zmxYvMYs6u9tWQhsWhySn",
  "key5": "2uWnnvYxKiVRyKyoWPL3byBiKSeHBkfuFgwXPLSspoi4LbdGhPJNyyQh8BTiptieFRhEaP9AEBBYycCLDN9oiRg3",
  "key6": "Cm7bKd8xrJCgt61jdZ8gPDSHPhHEwz3npsbmc5458KysSiAji8nuMQbKgyaeRK8grcS4gNL2zavNcttRAQuFQpB",
  "key7": "3uaNmEr93JRX6vik9pugNAGPaAGGd4MDcPR8vjTekH2ZNStvbE2Zowdk8h7N2aXNJSLYcJ1oauU7ToJ6eDmhTvmT",
  "key8": "3ASm1mU2KrPjTAQLhxdB1vVbFbbyBKzAHhzg5hvZePYJJf7RGYaPJmDo1w487YqqPSjzJ5fY51B455WBoSxV38vU",
  "key9": "2nCjVrqRmkay8EJCfwFp9F5xzaKuUJxC8nKmybvauZKRZ1kwqZKprzK9EQz9exHbKcQnoJe3mQmn11cUFj8THeZq",
  "key10": "Kv4ZLUMghYG4SMRGsUccPM9MSbGj59x7eFN2YD7mKu3cnmSiHz662WAeDEGAwH7RXDLMtMdLSUpWDFnFfhS4roM",
  "key11": "3C2iEnT7H8Cz8tmTbek8pfaJBKNHuHhBEtAQEHZZzuouaDjLd3a7NNaEWUzfMHdKx925FjhxN3oQpZCWoRGtTJgt",
  "key12": "ekYjhBoWnrPN5g1Jy7zs9QDxSdNWamLmebJn4G4r7jhcDZ1NGc5dUrLWfZSQbe6fvLfK5WqJXrLqmqFH9DJTpUw",
  "key13": "2KDtqHjKozCipZUdeUvxhVcuj4iPExWaSkeZavQM8zxB6s4sDVx21S2WzdhnKCmyJwMtHhH9Rv46K1942h1wkqTA",
  "key14": "2sdrBEwsdWXv7D3b97DFvUtuFX2zqghyDvG2TE9CestAHDGDTvqbSNufUhg93B9851bqRytF87ZPa6eCgEyco72J",
  "key15": "4ZsLhxidPxQo9DLbwZNxVn49iQUGSMLJuFxMhBq9LJVegvTSqdcop8dmgHQ9h1Scwrvk12sMdD8TMfjkhx2ZdN4S",
  "key16": "28VALzWAckK5D5VAtvtq7ZyrR2QLNyy1bkVgUGTNYUFJ1ihfQcLLa4bGfUoirvZ77o4Spm6UKxvwrdHmHKuqZAHr",
  "key17": "4YG6gjfbTK61ejRakjYsUPvXfNVUCJgVT3gNa2azFB9d5ZAEbXyKcR2XKRy72NezMdB37foHYoxkyCNG6HtEo8yE",
  "key18": "3pf9zEP9FcmkNosuJv9mLoGtne827GkgBQK7FpkXDuHuvsefUsuPwjpgg8u2oLtrzXV3b48TXsLQVkE2jsAiUPZx",
  "key19": "XHXQbeZbxkNnQW7Sj1F1R2cacST6ikruRAqo8MZH5AmwVaeGnknDRTf6TLG5k33PdFPJ6MuRrbvEwjnzpD8xWsi",
  "key20": "45EgQEfZqfdK5dJh3xeszCVrhEJy85jcn73gR7fEt6tAhsdJBYQ615f6KutajhDeTtj2jk5DZJEgwmWZH4hZiCbt",
  "key21": "4peP49Aru6CH4VADtJuSKbzjd5s4bWmAQoZFdCJUfVQLU1RtttK21ooJTD8bLUsrB565hNdiJD53jYgAjkaLtXbA",
  "key22": "2jYUaq5BmVgoHUaopaDQWnGnqaJ6KkzoCuKmkyenT6YoqCCixZcW8J2Uc9Adq3Ve9tvpHNpEFX8dcTTYTviyiprg",
  "key23": "5WVNGTqx6t6FbELvxi6jabdCcTAReunymEDJme53LWim8zXsZ7c6VaaNyQzi744wcGRwBFx1duhktQ9WjKerN8GL",
  "key24": "4kZ5FBs97Lo91UMLFV4em6hcMx2QJVziKYbmxZBVieVqwum78wuXXhmyvRWTfvkY7gNxHY2vRqUGGn67ZFREyDCr",
  "key25": "3X9SA9BWUDSgcozs8oMn67x5xb9enXMcbtiMrwLnpQ1S9obpTWLTxpN5DP5h56bhxdwL7mSUB18GhKPQAVsrewn9",
  "key26": "445GB1y4edBX8aSGdUGrTpmk1vSxpyEEVMT98Hb1nb19Yv2VdupzMBcpiS8jZTaVZo7PcrsGm6N4eCfSBMNBcwLw",
  "key27": "2hEyNBy7RkFgWReKbKp1ktxEV157LArCwu6ujBwtK29pAoA7hhTUhR5saWbwZQS5A12nstxDaxqz4Ch4nM3EM1Db",
  "key28": "3RDfvXvoUkUL4vCVYSXZnSLB6WdU5F3A8f34M1zeCzcREsDh6kbivczh5Ebwz8voN8dXK57N2tXhd4MMs2ZpZYup",
  "key29": "3FgLh5FaSoNhKg6ddgjJPHbij9T5i22PfXXuh9jAu9MJE7S5CZGxcrTvAtsGTnWgHwsv5oheXjU12627HtQg2Suu",
  "key30": "2hesL4Yz3ChEEBeKRj86xMgVzidfoPsT1kaG6zKQ6xDcNtXG2MkFZVoxxJttFNdXMqA8o2HCwKh2oftkJU1gXVnb",
  "key31": "4pY3Kmm1w1HBTk6D95HrppdibZVSJntYwGFyoh4Yz3WFVUzdHQJCpNgAMwbaurVxhA6hR9CTDpnZQ2iLHbtKdeWj",
  "key32": "2zKMUX2vZ7doquyPPQ1JRc9BnRJ3EScJfdjn9NCy7Td9Z6o6LV94qeFMr1gdqZhiu3aTnnB6omHFsjuQ6f1NW1VJ",
  "key33": "2SJqFvykt8y9AozskcUGWgHCmdKQBLGn68tWuVG6E4rVgt2RRhcNBkJWzQaZjLAfeomwZUf11Wn1rDG3i2iwUWj5",
  "key34": "1RCAnzvT3hdQ6KDv9dAy4QzvE3wdVMqXupFcBdfxG7Czi739oqhH3YPp1BQ8EYKXHgMfFUL4oWL88SUSVSDqKTb",
  "key35": "5T5DvwtzALY5GCNCG2c5sY8tgs2qRPtgTFRYqsFup4av2XKcGQrufWhGvLCvRbeVJThZQL3WBYvR5S981tsZ9fzj",
  "key36": "4ZtceSfkFjsUEYaX3Dyo9J6Wnikf1wZgeQpqxVwp4K6TNR25n8MnKQoXm5KdCNCwbcMpo5dmE5bpcBVk2Y2D46sQ",
  "key37": "9JoLmSQbieyY83YYWLq7SrCYgZ4Z77ULnCjwhPHtEVJxtZtdCRr2CmuX1LkeZ48DNziNzEXoVVjE7JUk5NaJ5wC",
  "key38": "4vv1re7373ab8hQW3bcNE26eG1kG2r6ufLoFuX15hrXFjY57rHki62BukADrWEMfMDazFaLos8vsLbigE3aU4CF9",
  "key39": "367jMYtma4KLsXsuzGYoNr9FTAHWouTRAJGTEZVzKABTrMMzBmyndFnH6NFkiovtKsERYo7KMMfSEHquHM27Z8mD",
  "key40": "4N6e2jKiwgPG5pd5hZj4y2ZNHQ9Muvu33LvuBCvHCcY61KLtniJd6FFowGXsUv1Sfhtid9fkJjNz17BGBc3aXeBJ",
  "key41": "5uP8mVicGtKtup6Q2tkm2bVqPmuWADRDNeJS4u7H9wwPWrYqaDGj3rUV2z5U8fvvPPxk8SRf9KoEio2ww6LzyBTg",
  "key42": "2nGS8rH4EcAQALXuVCoWnqQpqGERePiaFHvsSXq3ocmGYhSt5iKkLxrzK1dVNWQgVwBFKGyGX89q6C5weYcXB5Q5",
  "key43": "iFJCfXm3pdRPTvZ1TK9nZBSkNc7FWh1rmSRsjevW9AqYFrox8Wx7DWcc5Xya982ST6Uy8DRmf11gb9L5B8NNHYY",
  "key44": "3yEgKd5S5TzSWSJDAsyZ3KrV1mjR1EvBtZciPeViigiJ3LPjVZWqfToEC5F91LmY3BNhb2YJLvpuCQz9FYiQcFu",
  "key45": "5mjyyymAW6yYdYR2kryCiynBXfRDipzcwr64D5vF6sdFNNWQDPGiCFm5KRLrvdxHKeAFNg1RDBUFYhsyKsbunr7i"
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
