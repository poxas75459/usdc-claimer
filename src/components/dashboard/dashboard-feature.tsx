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
    "5re5b7YjRfDmnvS3tV1magwaQB7DXs2GigJEtAQfisRTtKLm4CD19fN13wLyhCpq5ZTLXbyM5PT8eu5PCcpZ2rRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "318qUsaEuMdv1n9XnUxnfKH4GDec5srKe8zMGz1fFY4dqEcEPDcuSVGBroNG7iLKMkWRkjuMu2SBui8pwmUCedHK",
  "key1": "5HRM8BffCfGq5bQPxozQh2UEnV2j2c2bzCrxAzqd1sEvKVPuiFRn5GFgKy1t1sKwtX34nYM5XUZ4xX5CihyRBWbM",
  "key2": "2kav6KqoHFdtWLM6dkTcCbJyT7FPbVf8n1K8ZMjmcfhes2dD9DRMBjGuxheT5WL7e6nWaqQfCpQoyUVvYHLdg1Vr",
  "key3": "V61bSW4sT94qPDJDeNawDPpJPatcRZkP7tWxji7yTvBEWzhU8BRAJ9ebwdGeR8UGk8LNo9VcRT5YCavrrxMvP7F",
  "key4": "34U5qznyYb2x28NtBMVqWBKs2HreLK4qaQxRkTT5oThpKiWoXfq45g7k6e5d13SNior2dJYfTssjo2H9gD1v4HGn",
  "key5": "2GzNM1ie3yZtCUeHH54kkGEQmM2K6AnQvVdJ8sCGBsyhwg4xb1XYH34wU4xb19Po3hdp9ryMvZJ3FLg7TQP4FQjB",
  "key6": "23xjF9MD5nhbNgcMWk5NJrM1f7U2tdrdnL9bLsiUMj6KG4hUg51s8HmQyRbt5k11a9r1WxgBbsikeSsdRPSHCZuj",
  "key7": "2FHXEWpkFCdA9RHX1VBXBnoicBAJZkwKmJ8SVmyZjGNf4wLWiJ3bvxiettxjGTmxcuD7do1PUNuNcfFRLWy4AwzU",
  "key8": "3bJ7o3pCMgUAwF1YRf85BASZaTXRudjzxTrsWyYNWqzBzE5PvUgopnVWcyD5SmFS461k3vnh1Sx3m7iCzmL8YKtw",
  "key9": "PoHvYZmpeoio8gUfLMf5NtcH1SxURmFH5yB7TXKFAadZ56yi2nLenSHQnScMQZbNhe5ucCgt9uPehs97Xa7kpr3",
  "key10": "5UdqUcFKwYtbf8TxBSx97M9p2v43odmWSgLWqivLGd6tAZx8VPLkRRwL1d36JEhkVBJSWz8xfgPz1GcgAtjcL32b",
  "key11": "2DaXSNqE8sXDkwNHVsTiTnTFQvSjGGdCpoeurJQYqpdyWGQL1Mh8C89HVEkM6xeVNyMX8UM9Bq7QGywbWpxurzto",
  "key12": "5D1nR7XC1g6pJo84me6NWhQqZNvvn3UCw6sCWPLkW6jZskiL4JQog5vNerUEJRS9PfP1KUmJeM4BRSZHMXrhQ9aH",
  "key13": "kt9Gdp6ufZybRz7n4Pb2DQarkuEKW3wdekcBxQ4q3k5r8LaYyseJ7JMpUPevBLQh54KZ2HdEtsYS7iVCoi6PnaU",
  "key14": "4GecERtkcVMGgrqN95iQVheXpyzFeNwcE6be6XJ5WDqbJ7nUj8LAhsnJCPxU8Nh43Ch9877zp5gD6GFFADUFvcVT",
  "key15": "2z28nrPvwnn64DZi1JhkAWFoS8egBf5Yd5i16jKeEx4UywMzER3zpYuUf6aSf6thcPo4QnaWBsfcBesjoRMMhkMM",
  "key16": "3zpW5ExsmDWErUENSkrMGHLShw5RijLdjEWhMhx8xs9LxSnkFQKxViefRR9ZZDMERpEztBxZdqRrp7Vr4feP31gi",
  "key17": "25ZRU1PT7PoRepdAx2t8D95ZsrwuvGBSDuWGncbDEFYPmcNw4NdsJd4th9VmTXpSQbuRJxAWPX3NRuZuEVU5xH4j",
  "key18": "457EoENmKn7jjYoLnGXBHuAjhse3h8fp2R4PfxWc8eLqhqWmWZmqYKS3h2yKBRpD8xukM5vL4orqg3Wjx29nBw1d",
  "key19": "5YsbP8yiRwu8TB29xwgB4G4rSbMJvYAQkZddd5z2kgZDDcUCBs7fJHZFoAv7FZt6XEpgf27TFJ2AueHKawEtcmP4",
  "key20": "3HfdTMcB9WStZSKwEiAJzUfyTxatJtX7P8aoUWoQVp3Qg2YKmWaEXLReoHVanNawe1ZtpUmDDt7waZA1VpCp7Z4e",
  "key21": "64TKrvoAHWabPxnvtj1HU96Bh36Qh3j5MuSBsu1K5w2w2G9WTWabo3YFHTkGjAabQzyWZjkg1FGTRaswz9PiumDc",
  "key22": "5JRC4SSeDj5vJV1QvbavhcWr3w684mYpBD43qrhGUwBAQp1kwQgJ9Yz95SNKfCZRmJ1bVbmPMy1U6Vv8xA7WoWnk",
  "key23": "5hcfA8bKHSpzx2hSqFUjfv2fqhpeE38AKCSHpwQ1zSwXQ2kns62a8g2fQvkfduCmiKzAsxhqe1fT8JAGH1fYQ3Mv",
  "key24": "2eYxr1EwVtim9UfNoAJ6FmTdgFgd29b8KLt2ojLqQ88CSA3gu3qebREsd3b17T8sbSHw1kPV229naJCiQ9FoP1xM",
  "key25": "Kc7mHGr65syciw4YaTtNSX2r7FWUcM6WVonpF7LeQcyDJj5rSCghySzrt3qtCeDGP1aTLvGmyNXWfNEsMpvb6Cc",
  "key26": "3NExaV9Ec93Eqmu7ncXVZcsV8qF4xWAsT3VZi99nUsayLJ86Hd6Q4rvHNi2xdpTua7EnR5nABkwWwHaMQiDQeEv4",
  "key27": "4JL4i2WyVPKhGdLXaZL2rMeVfAbA7w8pRkeHvhpzbhzHMY9o2eeXHBLGt1xLZZAmd9ouyTXV434uVR6e8og34btj",
  "key28": "66tWDf9f46Dc3m2P9vP23P6FbnF8D7PATrU1caAhVQU4j45yNkbYqzJfCvdmUtngRWp385GBYoY8FPMTW1zAwoeE",
  "key29": "2Eshw9TiS7VDmzDBBFzbpD9vkn46wdCovzZ8ZDiQ69Srx4jGHcJDbdmDQDxG5Ax4Acag9oed9g37JnVpQANkSPPw",
  "key30": "3fxS8S2hYZQ7vfYnuUtCzLe7Gwr9zheoBbtNd1mzsikEJJxDeJv1nXzXZ7euvgyPm8Z3uYEwonwbS8HJ7KaZnTBu",
  "key31": "3uy1iNCQEc7jDexKzQyQRpVKvZzoyTScNawMrBVZ7PWr4D3EzwsMiHDuQYZHEPzHaXSvMXTd59NQ1NG87WaWqwJW",
  "key32": "47mh2WEjoyFoWFzLQopaArTf1NZfi3Dnk63VDaFm8nqeFZoCXHDugmPyw1Jq299q8qRMDJB6rQmDnXCBNAjut3sq",
  "key33": "54LPqDp1tSoijGDBa6dwSFp3VJXojT9CWK6XFtxsXk57wfAsfEQiL2EHiqUkMqisotc3jU8KHyGfWcV3MgKhe79c"
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
