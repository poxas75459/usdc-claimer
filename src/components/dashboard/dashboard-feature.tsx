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
    "5oPUFQ3YT4CrDFKDXDU21nvnPRbvgzYwWdL8WUCMzumGkwLXghFgoDQ5SNmBFB6idtq5HtmYu9BCywzr43xxroFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uL2Eau3NioK21uLbe8MTyq2MNyhPQmrTxdshT9qP7GnA8qkgYzEpxX865UB5xpZwbSLgM9jW54vDhsQw2bafBhw",
  "key1": "3TGAnZimPYuhid56PBspGbm3nTXqWCxJjWKAebyKUQh1eDZ59XEehkxoiP8tPDKvD26VsoXK3temRD5toksCBt2Z",
  "key2": "4SgTcMFYcPkZqoAB49rWehRd89zdxAwFc58dUZRTKVHyc6JK5sG8QhqwWYNw6Qa8ez4fLTn2ZH5JG5gsCcM64wv7",
  "key3": "2WaynQ2W7Q8D8CwPj5qo1ajb2B3wX6j43osc3LXJC8Dkbod2NUJgWY5dHt3FhXfMcizAhk2tXeR34N1NHAoNz9Lq",
  "key4": "2n1tREHnLzf227a8b1jrkQ6XvndHxnarGBwcku9L3DSD2RMpu5HiHN4zZV8AyneqbLaxG7dmF6ZsMr8WntqGMXkU",
  "key5": "2gU2ynAUpJCXeo8U73FUf81RatJK6wEy3RTwCx7wEqyR1K1hueFydqkGTMnriA9Ae3L5Tu8DZBvh33BXSK51iw4H",
  "key6": "AveWhU6VmTtixUJkhbcRzNBTrBsZ65yQ2WK8KdZMcd4B5haCcYwK2fDFsQ5Hp3qF4vYwcCHzXvpQwMsy9UcuXe4",
  "key7": "4tMKEe3RyAWPJSiAaSD4TnLjniWd8HY7vi6SgfV9kym9sFy3vAAvrwPvDS1BFh5dgUxQFUncizs5Hg3YaUbpwXTV",
  "key8": "4tLQHww3CppBH1dNuKQ1V3NsBFQyEN4ednPZR5TySVaVdQjAettiumpLPcmNpvDvbQQ5xer9To8Zbmzh1Hkgw6v7",
  "key9": "4tqQFJmh8AFHAF19YxLTgHfWJDvkP8GuLFdVCmxvkuXp6ZibJB18fgqP4SMS89pxH8oM5C1FsffwPNHY2DUpjX5Q",
  "key10": "xJueLV2kzaWLp8vYcsodX15TAena729Lu87vZzYUmPzYbbwWq5Yxvu5rr4mb68gBceSi3C4HmUcHFqfegb9UoqS",
  "key11": "27pGtv8n5iCWhaYh8qDBd5Puewzc19Cj6JP8hpUEN76UsvXgkNCrqVEDMV4URH4w8mBaifCAEFmhZtFu1NF4Shb5",
  "key12": "3mauFwvRzB6Yhap4WZo1p6gVZpksxzaeh4fLZtFkEXCX7KJK7dnLj9Bmxb4TMWyRBgtRZhpKeNCDi6T2pAbrGTfD",
  "key13": "MahTkVkQYrU1xB4owWgLytFR1XEsATTyvFDvcLUWjPNooz3j2WuPj6nXGrFk5zYvq95m2ymYNt7MFeovXFY8nyS",
  "key14": "4VwFJtrcec6ZuovGEpM5GEiPsWopaFtYSAb9YTYWuMQcpmLibBo5k6gbdzgMV28N9TWeTVjThK9qzpcxxKBqwVLH",
  "key15": "5KQCFp9yZyugQR1V3ooZsCnEJKhWK9XGmEZG84yzxjsC8Pn6t15C3ku2giEptVTydkRckWvnyqoPHUiJGcFFXb15",
  "key16": "3uTzrMFKZaoVwQoSuM9mutcWg1J9njRmiNfCPkRdWmCp1gZKuWKsD4vtePJU38op8rDEDPuKqSrtRnLn5xWsM7EA",
  "key17": "ToH5gVWrpXU3i7LSTv3fo2iQZfhUxJUsX83mSvpx9SHFTCTSDbxqi9XdBrnQikNwAKkKQjnLxshTRN8QJNYurqj",
  "key18": "2gGDwqEHB4PDxL1kU2AdUVWT6biRuDafNbiqXcamX3RQmvCe9HDdaWn2xZJe2xBef8JsKeGcB8rhGr69TkqzQsKy",
  "key19": "2NR6EnYx4MEukyMbHaUofkp5CaJcaYcKjuysRvdTDv2XeZyR8nKcPer8HJPDXnH46LtDoYntsRaJ6NUCi3qkjSj2",
  "key20": "4iZY8enVJKETK2fX5nHKcjK4aMqzQVm76d2frECntCsDdWNEqwP6Jd35o4Y3vDDdSBiFq6761JFh7BRGqybP8pmJ",
  "key21": "44o6qHbcTTrMeAaLm771kAc9AHejWUYKhgA799K5Am2Y7xa5VLgPW9xCPKCc89zfopQBswFFYz37oLdmdq6aJ3Mo",
  "key22": "2tdzgLgLrbeDpNJSz1rp7m868sidwt94nosTm7NBTrG9MFGhxy562vwWEYChBHqFzqMBd1gem4Bezps8JSaMwDk5",
  "key23": "3xv6xmsRAQcD5ib8WntcRSBrs6bJStzdtZuV3CeHoCREERfMDwhHTGFXicXpQ8iZCohG59EWk6vGmfrbFFgCaLEv",
  "key24": "3EsTxL3FgrzdrbQg84NXaJqvPWSMrpNRjVhryh9XwCp643EaabVSyb36kxhVACCGDyaK97uhZnuHT26ZhvEuDEDE",
  "key25": "5KPvqnvijP5zpgAXfK7Yj8yKzzLH647N5M1v7HQ3L7bxMhWB4waJdFfn6sAyK1RwjSP16jpQcDjkh9Xtvm7VceXi",
  "key26": "2zQGG52U7PzPsJKoz6BQi21ncVGecwqJwyHSW3AYV9Agp1C4wuUJdwQR7wL588ruJaerKmT2SLZ73BP5XAchJq95",
  "key27": "23cVGuET9LmGpoVCqALagTUUURQcfXJ1Bc7HDeu6Y3WskWwVrB5Pz4yYNwL1XupP1Xok63Ah8ZrAnsR1ov7Deyx1",
  "key28": "2g5ojb1xcjjHM2w1dphyreKfvyPgHxbPHNDZQJng2VtAfMZ8zTbugK5E8VDdgTbqxqm72kithXHeaDApFRWfy2gJ",
  "key29": "5b1sPMa1C4TwCzB44kiKfo8GHa5T5ZVBdZa2cwrLdh33h8WFmsviNbvYiBkf6ijP6CFZyXZ4NTx41eFxwGACcFe6",
  "key30": "rsyHPzCQNrwhXgn4DPnu3RSuhFiWhTGZ7qUfbn6d1iYZ696ohSxcW5BFmhBU3mspF3SBAx19zE4Dn4sCvoNKp2z",
  "key31": "3ShoxxqdsyA45YRM1GszpEaUaQNhH5hvTsHKH7fJxsDb7tgw5vfLSfbE7hMzM6mxaCy3pKSXfASNTCniNJ3PAouz",
  "key32": "2Kds3bM4Q5teJkwYkv4vb3snavo4egn4N9TkmowbQMh3zNdGmFdZrFgmTCmW2nrwfzpZpaPLXVWVSTh3YAMmEPNF",
  "key33": "568oL3SjEhuzRBJs9KvySkZ2NPB9WLhWhyP6NAc6EEQA69dwsiQ4Sk3AuBPAtkoVvpLhA7tiFzSpEizPMo6w7TbZ",
  "key34": "2idwoqJJon2DNTuLHyYSfmUjzUdSijq94WSxariKPW8Sua9JgZ4Tc3AVMg8qS6ouEjoYNaxMpaVLNEoZ5xgQWRuF",
  "key35": "ghQqEsf8tMiXBbgHVnY52ZaDgjBh6Q3vctoWk3aGT2pQsoi9HUKtQ58LzE6CAhRR6P2LvZApfuPzwUsmVjhcQyG",
  "key36": "2rUcvBTn54A7H6psNC33v4jKy3AXsmmmeCpuBjkZwfuxE8Nm6acpAPf47b85NCJin3BUMC7TEPFgJ89cfnwFr1BZ",
  "key37": "4oET9baJN8dEW4pc3919pMndMCSp5hhAT7gUZNHaVWAA4ua6jRitQ6gPoGZDiLHgSg8RG9E2HnWEKeyTYJ4TmqH3",
  "key38": "5okBmGajEHxXzYvRS4v7cEuJeJ8S19c2HBVtt57MHKBxv115X1MrCUXKDdzRpfofw3pHmq7JA2Yzq9uubj1rJNAW",
  "key39": "2Ld1LeMuvzMfnpubTc4vk9KpYuYTrYTmoCAXvcEUdBBMpSv6VV4ck12jTbuzApXgm7AVT44hQraQMX1NtbJ8hFtX",
  "key40": "4HFS25dG1tiomw26ByFqqMzRzgqaduwLGXhwBZGvMfuZiAAGpCyrs1RvUV2v9vCRV8thPRGJv2gpRc7U4VWa1cMV"
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
