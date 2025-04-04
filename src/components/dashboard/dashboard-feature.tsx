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
    "46Q42WnHLBsbJNn9YW621FEQc75DNJzGPig9uami2KCy7VrNiWu2aMwi6QD1wXqyA6aTazdBSVfKnBffJczxsDLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDfTCWaW687GcCdfyq6qaL4GmoTt443f4eqPLKMdfUuuX7yZR3n9vJaJmMff2fhBG6HEetspPzMvVJG84b3wzQs",
  "key1": "3x4sfWGqvvMaAwDsN9dQfLjQR5HGnfT2yxgQ3s9JAxa8kjiJTHYAeT1wUd2VnoLoQ984BpdwktjYt1pvysuBRxjx",
  "key2": "32oeK2kMXRRGCt6e9cWgXervCzguPNnfVvqguoxmaAFXrnPcvPX2RAExFqAC85a9F6kb4AAAaduDJtieJzjoQKSL",
  "key3": "2k6qjtcmppZEQ7mVN3FyHi2mFihhxx2TifG4nEvCwrNb17MJVvPFRGfR1UzayKM1ASx2RqgAqVEf1nDY6dvy5PkX",
  "key4": "5eHMEAzyX6PVxiSmYK2nXN9sfQcVt6JypNMofVkEHpHfY61SSsmbMP8F7Dm7wfRXoX2i32kw4F4GrEz4LuBFSCjX",
  "key5": "eciuentdYVvSUNKaz6yfTQ3wa7T3gjnuWYm4VZV9Q6F7CXLyuaX7E53v5qWcLnpcxmDdpWwuDkHWmyHgY44u9tp",
  "key6": "3Kw9ixRBTHKeuMTUvBGRAzKJpb7toGAqMGddVRNMN3AodUn3gspMMD2h1eVmnRCXqiSknadg9id77PwEP8q9JDDo",
  "key7": "4zbDtcjmrowr74BD2BEMTsVSac5thZRR3LLvZF26LvvVZwQNdmThX31wjBkFb7AHP9QygGGEZn44M6Dk3YAMTkZb",
  "key8": "3V6TJAFqR3QdmeBD3MqmeNGo6a5aYQEwDTCoHpLKBcNyJomedSHELLgJXBa332AaCFCyc1AzriRXJQiDuk4wiPA2",
  "key9": "3JuKPyumfbDKKctcGnH3qyrwjMRm1s7y7ty4WjgbkLw33j5X76uhaiYb5FEa4X9kiq7uk1FvrzKJ5TXyAUDh5oi9",
  "key10": "4pMnQ65uCipA2MvuXW2ZoEYM7rE8Phtni9J4Ftf11bKcjg17H6m92PVvuyofKKuuMATZA9JnyGY3zcUV7GUshQDE",
  "key11": "28R5maKicstHt3utAtjpJzYxFvnnRYgBfwFxX6yHSqtwhsQ98GDersv9zmoeYeHcktPhcJN8NqpGbXbsLefeVJ1b",
  "key12": "Jn9BiUUfEACgLxScRVab8trQU3JRT6GoSWpKP1E532fPmWaq47ZegCjzySNjNCRRLneXQkWLiM2DmbbRqyLuwt9",
  "key13": "5HQDxiKYw6vQQeQWJyonq3GMtYmTmti2bZea4wv4MnDZk84Du9V6LyumM9WKJ5YTcCYHKXiHQLatnPzMTewJYESz",
  "key14": "5WBQuezjuWiZ3jZQ6Li1FrXAbWbosF9c86i5GReNU25UyrHY24FjB9vopnZMhywjqocYp67PLZFQkRnkuL6VKiP8",
  "key15": "4pWFAqfbw67uL8HgA3gXby345hGPrSmY2jeSAnp6ixM5BFTba9e9GJkQnwdqqcWk9eVV3Y9X6zU1rnnqoCxcsJCu",
  "key16": "5qKeHFfAq91MwojPwW4TwSd7yx3vtyKmLYeQAoSpgRin6k2URu24BkxjgphSJb3vER3ZiRiWYfVZVMH2Z8xBj1oS",
  "key17": "qXDTJAvL1haGKiLfr9Zvpy1jUJtWgtDwy4HTmd1S4uT3192YxQAx1nfNtBq7fN5AA2tqnH9RgxYCgKaeuE1aPGg",
  "key18": "jNNk26Q2ueP5K8BqBxSDEFzqdYCF7CwbK73hYSJpz48p96cqLvyBzsCwhm5J6Spt59dV3oqBivFx6ngdWVHZ727",
  "key19": "3R6abfujdqDLHR2xRoeB1S8CZjrkx5covBKUswj3TanZcwsnien5rxH49A1qd3xkWVuJG1N7rzB7VSn8uVAirtdG",
  "key20": "AvPapsX4GHhBDSQpRxrWtCGsTA9Pv4eYhBgx5qhoX8puAoKYojDCg7mZuJa9KAHUy5xSXEXdWfDNsDNpTiz5cUn",
  "key21": "Q6SX2pxkJ3uDw5DDrnCVqheJJ2Y6PF9XsmMdCrX69pMRF3iyJAdPX2iywnU8fZ3jRQdsDrwz77ULBVL27mxogUb",
  "key22": "5SYNYrHYr94gvWLQRLaNFJ6kV6GFim8K5us3STSEdhdPXrhktoZM6zRM77PDgY8uPVjBctJ75mBB1B1tuqEVXVbM",
  "key23": "5obATNNoMKRVWxynZGyNev5eNSdEr7YrHedC6ooUn2xH7vmDZogQ2rQu6YYT7XNUrTRsTE3F6FzQVdjkiyJJ6rW6",
  "key24": "51fazyMXfGRuQct7V2rE3VvdGtoxFnggooQRzT2diwhkGogX5VAezTXVgjsX87avGEZeHVHAK5zb6re1aVLV8sAm",
  "key25": "22gqeJnGZqyk9s8Ljxd1fqPpHhZLwWdSMHdfUFfvuw2itTPiM8HnCga676Zj3F7uzCMKYMU56ujS5hhNpKR9PLfv",
  "key26": "5Cg8pwiJavipNxLxXpWy9xJXtocmCnQPYApVdwi4wHrafh1nJczNW5tEhGandfdH7u2pHrs9suwc7SvTaAM7aRPV",
  "key27": "2jGXi4AYwoB3vbXFrrHF71xvyoBuadZkw4GCoq2znsydxnDmg4YCadFYhPtxXz1ZjvJ6uDXY7cSjus4ANka7FLpV",
  "key28": "64zhSPQSVD6fr4HzeYqkeBD2s22ymn9vqpA8Zx2kpAWUWSvSWx5DUbjXp4nsJkU43SyJMVrrELrmRoofFjE8nwVo",
  "key29": "3psDSbzFjtwoqsen7jonvn7bhJyAe6U58YVgsKiVTpPoaUqiwLnNTgUubZxRbBKYcmEuoMZQ2CtMpBH4poDSevcy",
  "key30": "4rHDqLN74tSb6KmZDpLd4Ya4C2qFmH1ACaixLkGBcUwPxsXRYoZNWiMmTKV52Pjv4Ke8HcSsZfVEqPZL39RDpNzJ",
  "key31": "3pk8kKXfuoeaQkPsUTGekWKbdkHoG3HkF89dtf15eNwvFxjJqctbsS8cfQSHZ99UFbtqhvBT28mUVNTDiwRJNpEH",
  "key32": "3K9tdggvHiN5fidfDd9eQE7nYxX1DmgPu4xAUEXTZZcWkivqkLG9iDBB3wMaaAPUu9hBXDbU3ZHBmfXpwsQNpmTH",
  "key33": "2MHtudquMAbYA568KiafSMTySKM7TGJvweXPW9NBnJHmco6S1wpAsF35gvr54ryTeEK4nXbTqoNetQRmQWzKjBKd"
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
