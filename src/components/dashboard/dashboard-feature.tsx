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
    "PxpnK2r91q2CfgWdJsEUU7uJxaBwhQiN2NicifeCdtZiamgaK9jYyU2fUk5HKnG7FRXwRfzcs891Xcvd6PEAqA4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G5iERz3kKas8wcTRVL7hhEPksssdyZyuDbL7TfroFC7UthCJD3b6dmYY8ajEs9YbmZRRX3JwPD5mKXifWFk1C2e",
  "key1": "2C7MRaErGEDuVQe3swErdprfyu4Bx7J3tcquS1qtHt86SFTeQcAY8wmG42QNK2MeR2MjaG9Jqgdxy8nuyRDgSSaB",
  "key2": "2L6E1ZGHGezVomkiyK9Y5zdS8oX4wF2NAxyEwGcK9i7136duT8hcUgo5DFbF5ooNhbivu9WrNWUeun6vpdxP7bzs",
  "key3": "3N1MfRe82G1VoPGqGMRxvoxGd44FxLzureRXZqgsYXAxoUtYaethcb8gyT7HbceNWpzd8SKQrTL3chxHTeLFK5b1",
  "key4": "3GYHBQPEigKa25PAvTgqXmAqS1WcySHWMmjnLgRHB2zWJ6qK7BDJkYFUvD2SojYGqPx3bxUP2HpfwWPYnKwxTwuq",
  "key5": "7rwH2mPiTKX5iYh1fAoi8EbzJaVXVEf8ELYxRM7NFgt8kXWL9xPNqCjBt1Nk4bL2EChsTgv9tapoqPGsMMW8Lt8",
  "key6": "3tgXv6PAh1imuuh2Z4cWNJuQkY5SyCfGMvpJkuMJ5K5cR24fxmXzPPFabvxuase5LcsExcCbEXmdPdte5if2ktzo",
  "key7": "2utEZPvY88VwJMq11z1GdSHCERNSH6un26c5v2RavHUf7U224Wc5LdQeWYZzPdeTeEjoJaSQd9WAmXcX1NooEmy6",
  "key8": "4RhnsDaq5sMzaio24kR5nFyur9frnjgdYbNmuhzMKWFsJcAvABGYwEr54Co8M5Ue6uWT66yBXGcgt2rvVkQvm2Dp",
  "key9": "39zJbTYXj7f9KSzipf2yeS6ESQXSPVYgsTma11mQ9Q2YpYQCqia8NpyraNBNDTrpp8HXKioqn8wCroTQ4EqHNKdn",
  "key10": "2Nfcf1nyx5SKEg4K6vgzMNxi6vLGnaCsMQnDmDyBBQfSYPbUuNXxhdg8z9fGB9pxybKPVz9uNuALfKx7G3xNH1f2",
  "key11": "5XHuNTqLwLXjxnApPvJ7J4SdHPkcwiwGrKDK8Ac2yMVN6WzvvvyhraqMXXcaVFLRu1UZR2fye3y3qSa5Nk8tVzHA",
  "key12": "5pNmtwQ8kMQLksiWmAcLkACay2AMncthpbDYWuZq3ZpX28x6kx8j97y6gDYYLfWm5FiWoTjffMmfnn9y57ibtXM",
  "key13": "2TTLTv6bsJixDxVmaG4JS6s1Mb8YKzshsnf8JKUVTwncbyiMZgEDVj7hxgFmV8cQDspmtCz9Twy8tt7yBaUQ8ZDq",
  "key14": "5xYPEnuN4Kvs8DJhbghCVCRqvWbwqdEoQz28fyruW67eHaV2qM6SUQRxqFcQkB7cGGCa82xQkF3X2k4mTPnb5Mhe",
  "key15": "4Jsov52Hg2hrLe4zQ5kka448VfwCczPHXMnnTAjsAk6DKe87A2aaMd8jCkqe47UKkH5nrAUubX5ZzJjNjAkVrPbN",
  "key16": "5Afd2SHdgzgPnomzr1td46zyjuKhzpg3SWHAvB8AemSXPtmqhgWMGZwXJieeJXaLgQf8tKotbi54dmND2DUUN2B2",
  "key17": "mP8JmcvDoj24H6GSTVd4thVf3cMGEuLnEjoX4ct6FxsSJ1nKqpd3W9yrakw3r991GHtgBFQPkeCFfUwLQVjbQTL",
  "key18": "2FEiHzkMJmsCJqutdcqqxcz5TVDTvDwooRgGL2gyA8vPEDvrVXfhyAyYKUb33RVaHz23xPixciniXy3Y31pJYFkt",
  "key19": "4roSJE16Jr6ZRZ9YVejakn5NxqvLakFVAXNZN9dvKgG7Dg4oqn9deMY6bBTgYvAeyq3ESrG2G8eVS6X8SLxfjWKi",
  "key20": "5bSpeKSD7YwkFhbFNzcEm7d9wfdtSTByYbj96UHT1YTtjtHBMQobs3vqzQBMUSNvUSk5sR8VuFgEEoiPzFuxmcyg",
  "key21": "4weQ7A2qsajwmNPkmGoTuarJMvrZY5QtRhF2MthUwbihYffUCXXt6PLYRmhjYtD93s2Yv1FJzSkSYvHNCdfyn5Dd",
  "key22": "2sc4aQ8t38NbSjTziBLo8NJoJXoKgW7yrUGj2mA6JWCecgebeQj1RAo81uM2eFdahRTZ6oHL4NudH4oGQuqjo7D8",
  "key23": "3s4bHJYKc8Xmdj7aoyuxR41cgKMqEq8WUfhNagsrXXtdrbnLcQrxbXzeFaD34w8E6xNY8h5Q9fdoyRkeSGZvy2bL",
  "key24": "cFwobhmgfAQx8G7vG8LccHAUrdXbjqBGuwSNoin43LXbtoTUPuGU17V4pFTfSfKAsfTN9fKyNB6V9nWakDR6cty",
  "key25": "2ejk8SDXXVuWgCwZGnXP9eeGGoyXH4GiGhJ9MMdsUzQDc5uioaF3mtcQpLfvTyL45CxUXZt8Zqiob8uqdzdmaewz",
  "key26": "5eaeq4Wdq29XbNZ32oySCHvhiRmqVV4CsdoD1KFUBQ6xzxzCJSJqPzZGUA9d754E4BRd2FzthYW99CETxd4XpXaK",
  "key27": "5S7uohKsesKqPwqfgVkppF8C3E4jqB84N35xriUPevfH8E45Dy1P1BNnrPb7pdhsPuTCzNadXSsyiDBUHEsSEWTC",
  "key28": "4DSFHdfcQX5vzLcjwHfigmNpxB2wxpPaSPc1kufhCiAjQezd6Qpm19zXT3Fd5MMaYa5KCECCK521CLesRkupVQBR",
  "key29": "3kghHTYaMwyrRjsGy4E1LW7DhELZ5jiJSJgLKrh9VW5zbs9ujrWBKYjie1m36D6fsSZzkj8ChWFTGuN3cm1D6EU2",
  "key30": "CrbRz5Jjfc3fVMWxk3yw11YXxxUarxqrZMP8d5QPXVNNqWzq5B3NWG5G5HuwmdBmHr8NEQesTUyLaLAQCpCrHaJ",
  "key31": "5ECskA2dqjNs9JsFkXv2H3sRo31zwYet5arxaq8jMxXjiSLcTvq1naJ4bRw8s2NbhEVxVRbCVituLxPrbB48vSYh",
  "key32": "4QCEtF5Q2jY1HCZsio8AVKXUXJ9KJgCFVrrYtsLSqyaFKv5CmmU7yB3aLHd96kuyWtEVFGdssaNeAR9ZzRcH2RP",
  "key33": "PhyG5WsSHETwLaEWBKongAEMQADsjC2Yr9y336eQCZ4vjURM7hYFcqV1qNUVE5gYRQr9GpDaZdvZcWaCxRWvrQt"
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
