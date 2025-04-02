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
    "5dJd2czJzysMCeVbBnSZdvugHKNfoBuTYUz7YptfRkGG1FnXuffU1SuwCLxXgAt7Y2vw4SNceJkuYVT8YCSosMmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tYeF9x3BeRG5GmRwU3RTpbzJ7YVGTig4gAHRmzfNiiEdNE7yzRjxf8sx6qCweoRX4vdxpZjGfuLHaCMCidz5VhZ",
  "key1": "5WjPZW3XpcvzgRnasY49mFmcNtrsEEf5GkjfvxScGqT8gpvKpFq9VReJHhXpGVRRqcvrPcAGUWmzQi7VfxkdyRrV",
  "key2": "3ECDo4HajuaEBj5h8xsrxwgcNKKMAhzg6cE9WpkbjZ82kcKzyXVewWvJ4jZYbCBT6DKgUMb7c153tFurTWruD5Li",
  "key3": "Qm5WFhc9qEuMsaNSqCXz6Kzg6pxJAAteheHYvXuRHMZ8HFLPaGhajzKTZMghqvUinqVkmUu8mgtqGZcJZufoNmy",
  "key4": "ztHLc4k9VE15seqabdEGoFyqi18V55DsqDgbhdMz6qo7QaVHQnuiU6fZxT3ymGuMtKWUAUnefftXRqVSHNanAYX",
  "key5": "3DBCbza2y9pNzMEN6ZFQZE8FmJhafXSAAbUqUxtmbryyjiShMz7Pqm4442KbNdmuXEHFKDcPfQLu5N79RSeyNS5p",
  "key6": "2Y1AoJjJGv8rBjjmwipbQ33DU9BpZgFPJ13QQ32G1d18MRTaoneurBQYTwsHJtTpisufk6LgN1eJcpeTVv849qps",
  "key7": "jG1o2xtqEN6JHatbZWziVuZaUWdQ8KvqSqgTCd6qA2Gd5NN2e4wM9iKttgKAznFtsEN6iyt7YX4FA6rFosDPQF6",
  "key8": "2z1wLriU7Z4rsb8JVa6MKDamPBNE2Gep6gA3BmdPpK4vvLjCZBTAK6fv73eWFh8PpiiDdCmjqGPDS8esBTR7swQd",
  "key9": "5eVQvJQE4eR3ntX4voEN9CQqeXiT569vyQwikCm3qfos2xAGcrgbRJStcLQKmdpEvZLAEHbjzXT8z6K7cGYp7R8H",
  "key10": "2hD2gih9ggrZvtwQgS5Jh4fNZq7eDMuL9eJsYBHvnJktZUfmKoupQKu2QzqfnLkrMQGPB517KGKL2v3m8eJ3rLHy",
  "key11": "5shtn9jCQPQXCcoQCEqtB4XrRnR4qFssa13sVBK7jpZ6jRoAunRJurPKbLs2rXHzfGSNQfBnDtgzNfEyFrjLP7tj",
  "key12": "2AMYuruJuWa9hHAKmoy2qtCrJW5Eu8FPXZ28q7W6yf5zWQx88s2LrpRvHXcaavTi1WTkA1tw8wjGKbTaFYFJ1MUy",
  "key13": "2p7dsm95d3S2dwaoFatq2nVBT6EvLyNvsacAX968hWbmFh6UcfVi8ydd3DwbG3oe8Z642mFgbXkrNMHArJ51WoV2",
  "key14": "5AJhkugVqS5WHLAXbrrijGPJDDuLMeF3GwFxUJizroYt7noxSJxLkT75HBZKKcPCUF9KFMqR6jAZe71fnZbHYXRB",
  "key15": "3qJQS33DpAK89azF2Z1HKhgRWHVj5rMp8D7w6XutBp25tUdgKfqLvgzXww2Xf9MLc1x83SEiAWdb5yW1k1nreNYH",
  "key16": "Wt9SnuHdg5MnCt3mgJbq2dC2rJ1fAEeQo3bq4JbVfiWdRbQg7mUKwmxToTbbFndy5Vm5ifDKUCpthLykJ4owtw7",
  "key17": "4QyfnZLDLRPDLmCMYk3V3LFwHbK8gFxC67M9LNifSF8sm8tXKfFUUaVVYvVBNYysQdgtL2VGhfQxrVAzdud2CvhV",
  "key18": "5ciUCFnvgD7DqhWSeGcwjfSfpb1N9MHt411eBtg8r31JgfdHat3xA3RJaK1MBLjHLnh1Fz3LPuCrLhiJ2dKfaXC1",
  "key19": "5tjeSvHbn9NyxMq2BjPNinxrRHuMo5oc9A4wyuLpWmXAeF6WrTMHqnkRLiXBi6HC3x2My1LmzbsYZSBrkhdfCJmV",
  "key20": "3kVgRzAga61q4VCod1vagRxih5gXVJjdAu86z18TQcGbejmsHzc7oq4UpoFKGAJjt4EajxGhj14hndfaR5WoKJ5i",
  "key21": "2ASnecVMRPqotZ5wpEzwq6Bu7jbyFLBPFXBhjuJ1cnkiQW2GrAJAp1NUjTyGocRXKTKNHBMeQsXczaJ73ZfJz9EN",
  "key22": "2P9zjWBnpnas4hcBe8Sz8N45dejzLvVraZC5cdd5gGMXyPSBC9jCBfUJytFdjmn4Hk1ThzmVJG8EGumhGppRRpuV",
  "key23": "5VY8dsVaSPa4aCb5pDRsovzbVqix95Wp32UUpheuiGny2GA65j1ZXNavGykDNTyEJwE5zCv2fGK5P9G1UhwF8gjR",
  "key24": "4sXFkkREDiquex35VQmD8R9Bjsrjuy39LRpwsAD4HvbYY5Qxn8ftxBVpRexDPreEnrejLnBpoqSP16b32bTyzDoM",
  "key25": "3Ad3bEYrAe8PGMooYMf6ubsD4Sj239HWJoTGQwksfBQ8fvPusiURPoqwnu53gA7WFwq57Qgmhn4a3c166zEDk4nZ",
  "key26": "2bqEAdh4a7M6Kw2XZTpNHs5czVXygmHWjhd8JT3cnSD8UT4zWFKJjFHYX7jomm7pcHdKTvYSmMVHfstx5bC7P1CJ",
  "key27": "4nLm65sd18Sk4MnsLqwaqubnpcTLGXuaF2Vpgtz1DuCrWe9CCR9xLH6q6knvuVbiEkAryLWRf7zfz3sVGapBCDA8",
  "key28": "2vNdQ4rJ7MrtSFK7Nzym5BFh2dKLDzixqFoxWtkx5C3NWNMqjFmgk3sPbaswv81oJtAGS9co7TkzfctWJ4g5JC2B",
  "key29": "3eD6HVK3upEFkW4JJwc4gKPS6Fwoir7JjrMjVVepGcgwKdNeY9WMhDHx6CDzyL27gr9LCdP3oDhra8uAGx97Q42K",
  "key30": "3YZCXasr9DijJvRKcidATDz4NVcfeDJjpohQSq5Rjj5SY3Na3aHprHqRHgQQHMtuPZsG146PVbs9pzi5sTgQRAXH",
  "key31": "2B3BknEEqKBZNDoA2NEavF43GzHFzQg5MvA7gfJqMxsNX2si4SP59EFuoB11x96RGqqHpkjB3cBeL7ew7uqGmaVX",
  "key32": "3xC8HJ9zXspFojS63ChPRvXKguj212BFCi1nF5q2KmRLFXtz8aGtYvBzAC2bGTvpLbVNuRFzpZiPf2XEyVsjgjmD",
  "key33": "4nP3brTbHkgb66gPGekpEKSas886kUeLpPGi4ypNfeMNQCWBBTwxpSJosB1FjyVgBUsfTehEjSUKDYSLAy1WypU4",
  "key34": "3yzkQtdVvyVU7wrJhcLhutBc8Ki3AN94t3QbB6yTqPMjTVoffvnc46XTGYXBrZB9cpLnACEqe9chymwSEiErGQcx",
  "key35": "3UB4MLBtzUNpr5RRrZyLaW9ic9SWb6rRyztXjfjW5aVvyLKpUiicqyP8sCVwZkiEUFoHkN1KZBd4x2EDSZ3EJNxv",
  "key36": "ac85T6cvMSiu9stHbTVKxL1hDjUd7LwiY2zuvh7YqZCBBcqDgbw2h1cptWYL6rvRNH9hGCZnVkvj5UUSsv1XpLa",
  "key37": "4MJHQUgMC9UY77vNMiZEEp7ZpG3kKKy9jM63gQCjNDDvV46iVykiAWuoXiUjEFXueG1T2fwSzvBFqVNwqqRaSAp7",
  "key38": "36Kzcqu5Y3UEeqiqoDUQ2eHGJiNTRx38sgLCsjdLJzJEKv4df6xeVgFcYGxLxBPuFyrqzBhC1mfAwLNEdxNA73q3",
  "key39": "5C5ChbjHJqsumfNodvg9K5iVc1uuNSS8xdu7nmBQ4h6T7VfMVAnhCNLJTFncv1XEA39EB4Zr8o6E9xPAuMfq1ej3"
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
