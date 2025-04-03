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
    "4d6riAYxsU95cfrfRThMoqP9jZFFQY5AE3HbnzZpMTWbdepG1nZTdqxqq8bc8qMCW5mfc2scdikDwMzbKQbFjWNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558mvbqfxtfkP8YhmRgD8Vr2pFL4HeUUHffciZEKJWJu4smyqgJEB2Sdszb8cSpU1i5kao399EkuXkWrgsLicYpc",
  "key1": "3q4tWht7xWiUz2HFEDkFyW4rrG1gfjma1bioAQ2WN9Qq9kHKejUHGk85JAWQBBCZwc9pUxEPP2FKxbrDabvF6xin",
  "key2": "3br8fR8TcncoeGMGbSSv1b43PTdcypkvwy3woeh92xBaaA42K94547y4WoMNVeMFrrDBYbHExuwNGwvnojfBDpKQ",
  "key3": "2XYEmE283yoCVGGz83VJgQxRbnP6oVs6S2VscRkqTVnPoC8gx6PGA91ZoiS7dedw4xLnMHiPHMvbK1HEm12mWd8A",
  "key4": "2RJaqzVvpXUQnusx9qeim7ug8zk9vhvk2EzZXr8KMcjQRvGMZKpA6wKhtKMgeW45NGoL9YSPjr8XTxf4HWkQsTQi",
  "key5": "4Lvx6W2n5vETSCU5gw8JbM4pzKDvpxqePxYeAKmntMWth1KRC3Gk5Q35jUxUgErM14rathjq57ZvjkgXez2ktpDy",
  "key6": "44wkQUZqpAr1ZT2byEyDG6surJtZgcXuPHENXcm5R3VVYSPmauEWV5DZLxiDMe8XeA4EhnbUKTaJSMp9FrqgHEyg",
  "key7": "3wwQpbdCBssKqVzCM39ZsKL1spJa15UfUyGbW1s6XyRNycm1quTmG3mVdNJs6phpvuFGvuxg764VajG9yPftha47",
  "key8": "5QVdNvJ8Pcq9DRiBWdx2LkNFV9cpPmFF91TQ6sNAzJD8UDDS8WBH5vUH7YHxNFVv8ikMaECFJyhnywgpPZYyvQKc",
  "key9": "3eP78edwETw4sxefNhAPd51r3MjjCGNk6R9jx7Gwnh6HZq2s8npdQBXYjoSatmXiu7NyQAq3J362v7yqBrwtiTVY",
  "key10": "5jUBpLXGwxfcZPEgPavRrA5UcXajDZHhM3zWfC7AhKA8AawZ9NtGrMugQPYP19SaQdKmGQqniBH1pGG4CPUUKR8R",
  "key11": "5b1ct84Cos9ctKSYQyHaSHCQnRASExNGEHkSEG5zrsPxcq6jT3htsgXhAYMwepxkZeZV7hg6672KnYgQM6pXAbKJ",
  "key12": "5mnTNBMwTSnHns2if31FwRNPRykqjkB7UQBpne8BWYZJCbkXJ5YcuzzE3cXgy74YjoAyEjPYg5PJyyjGaCpHTUX6",
  "key13": "2vW9VrwfxuaBioZeitJ15NdVkEvPeW87uVMqGG4M6HVuBzz2rqzUBQfuyZ4c1iUw8xaJFkW9KLaTiFKiMN48k9cP",
  "key14": "4c28dqswMw2kanHon4mBPL1yQVL3uzCG2ibK2eZj2FGdXxnCqiSXtpjrypozZ6ywRAnB4H4NagKbXPR5PMgYnuhX",
  "key15": "5C4KN9ATEDCfmapPtPFbPmtgzhVnv8aSiYGVU2VmpLs3sQAPFyMrDvCQjXSRzcEe116heYhv7LgidthpkjiDsB99",
  "key16": "3cpCYkfRwqS3zAG8zQpDw1W258DxwVuDYCCiofAPidV1AoazuE23nUteU9JXeU8C6NQE8MQRA4zpJk3w7sqyFSuJ",
  "key17": "5kJLUJ1EV9ZLKvgYnqjBtssRbtn4USBL1o3GLZjwerzWcSaHDsUwAHMDxTJN92z5jzrGh9HogxNiH2Axa3s55xhY",
  "key18": "2b4roKrAQj9pJqQdRjnWfm38PemYkZSxmjZJR8JeweSCQqvvE5zeao3bipURkiSohHgLnQx1RBsqMoEu13Dm6ntL",
  "key19": "4RoVUV9NWkMdxhZFw7L1Uu9zZpb3KjKz9axscp4uf3sbdPPvSjfTFAkt23yQabx4RCr7hbQNoiz2g8dbvnHGQ8Ho",
  "key20": "3F7ZZfKg8p1R3rRq9UwVpgJLmXUwmiiDY5W3oSuY5fbJ9RbQt8euSyQPMVRpYcHaHFA6MgaVHGikFfGYA8KDEVYT",
  "key21": "PvD7KhHRktCrT3xCSFBNXedL74MsG6B6mv5AHvsnhq4ZPjeWnP4PQcGrNKWooQZCKnUUysyDib5sXEAiBvenwYk",
  "key22": "9tKSBBuWmNE4gBzgjqhxV2GYMh4ajDMTAeZuK2zNuT9fb4LcirGYFBDUqxspcfcsyd8yPodWt3Vkd9zGadiA7qU",
  "key23": "4xVpqNhjsX72qJgktHAm98v6ftswmgGohdhPMGcYfMMfwBD8TXaePmzJrsuzSbGyt7Xa86HPyjaUy6oNdLSVv3Q4",
  "key24": "2Z1b5QnLZD9TKj29M7hudx3jztwF89wZ4Act3NZpwCnijgv9HmgHN1QDRjyi8p2n5JAcmWs9kgNjU16tEDBPbCi2",
  "key25": "HsmMpUcLxEacoCHm46u3FY9kAQf1ntU85uB7AMxRqhrsHjyqxDiJrBohNJ5SUygAXNnXZc5MMH37s2vcpEaBeu7",
  "key26": "26As3AVgV2aHTEwvZJNR8S5SAqnVTG3zHhRmcHwUFBRM5eXvHxrGHAJGXENnSfMH7yProAmYwyzZ4xZzvYZq8wvC",
  "key27": "7hKwYhDacNMzMGfUpLKC6jA4p4swGkuB4Xj8GTwcJ6kG78XYRzRKSgbW3ABjTtZU4N7RuaVWTfpTtiYsMDy1JWE",
  "key28": "2KnVkCfePCN4gUvgR5w5D2zgB6kxTvapbPPzB6xZuBv2FBRQJeYRdxFsATt7GYtXZ2rXKNpMTppW3ktkPPh9Q78z",
  "key29": "2qKS7ygCAegMdvoyoExyKqMKH7EyVkR8o9vA7pHsPfhm69m4xLHVsVJ5vez62719NUd3eEEnNpqysvhyn9f42ze7",
  "key30": "2iuwwXqUHxkMceb1vMWyfznpqA1rwBouZmkzWNXFM2b12PzKiGYVHNUbiP8x8PDYRKxabeXzbScrEYBVSsj6p3i",
  "key31": "W1zBB9ETdH5jdUTjxKAkuQSNruYf9RvHr99tMmtomojDgkLV8S1SU8AUFmqZoDqtfWntEa1dhwcKo27YQyMTSRd",
  "key32": "2ZgvaeoaY5Jq68wc1oYixK437G2cX7bJWNx52ruwdxoj3qTivb37EgtzjayvCtQGiwwA31FGMNSwyk5XYhnooqgz",
  "key33": "wxdAWx8ShdfH9rHHyt3m8FGdg6hXAdkoDKsZ7cmsarSJqwtFrZTDeSrxa84EmnCMxMtnBnqx4KXvSQ3ryQkHwpx",
  "key34": "2mRNg2ZKdDwKqgZx6wvYEnax35LfAF1dTtJNLkQ8Mtqh4YQUmDJnXa8koRbfCWdXcPrL5CEHQt6gBJgigCADWWW8",
  "key35": "2G3QKwmwbL2EXomUQmtpt2huXreoZNoyYbZjuoN2QsTErHF3XYmgPCG64WBKymAwK28X2TzhweazMAFwLRMcmMAw",
  "key36": "5kWtJvdeqA9ch8uefcfwrg5ge8xcjQGUDVDZfNiEFoyocFocBdYTpQ1H4Jvqrvo1SDJy2a38nsDXceYBNTXRxY4k",
  "key37": "nxD8Ws8xy8ducsTd44j73r8eeL5w9nG82ay6zvqAHc8xoayk85ejAQFAWbz37WTdgVDv9Ns7Z2nXdVHuRtX43wU"
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
