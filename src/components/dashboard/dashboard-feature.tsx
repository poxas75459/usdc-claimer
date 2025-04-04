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
    "2Wz8GwLHzXaZDS8wUfbPPaJncp6VTjCL9c4AiXTENcgqYziFDYRMDmmHC5asAebsvA2y8KYpc43C59Atzo2XKYgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NdD3i45wdZv87kaXHKgZpLPJovakJV5f4QBLChvPfWcuVkGFKYDHnwi36fbK4FTUnbTdjaKgBLHuvXoca2ynDKK",
  "key1": "4jX4QHLd78cjKNZjbkG1m8WDaWfKPDRiVf8EracXLo2jQDa5gnJPpYwBDnvC8Ff4RDFtM537ur1aWuy8ftoDQgZJ",
  "key2": "4t2apteKR6Cc8x7QGiPahRy31Rj8Joa769mA39Pe9UdkBKjeWTZcjg77s8GyBaQm45A8sbJBKBxzaTbHg81pjrTF",
  "key3": "5n4CtvGMwZRqadKEcYE1KG3884xLw81nASqKaATr16M1p2CXp7CxkxwWByTbu5yhtPkmWuMQCAwBHyMCBrfFLQtu",
  "key4": "2rYsuwb9gZs4YRQk6qyJnwFhu9cxVd2SEjRgjnDDzhDZF8YxUcXxe32JjjPC5HrSR99pdHY42gNW1hcypQU9rBdY",
  "key5": "cfs9KcXXBhHbT3DZqv4qJDZYnvQ6iJgD2oxEvugQn3v3bzF9A2rr9q8bQGqzCqVUMfmVcVsEajSAWz9VhRUx6pb",
  "key6": "4STc4L1sDVRBsmKg9Y7xXKmr7BeCvGZaAPhJEW4oG8SmVZJHm5Gjdv8MNJnZ6xoMJAn2CK7RKArG8qsyr5MnMggM",
  "key7": "BmDmpZv1Q8YB67s9WA6n1zzPcVJWLvCWCEQ3R6xhQA4VwSPNmuBU6VPiJSUZ6jK4nWPGz2s6ieVYvbUaN5VMfNw",
  "key8": "yAc8js75LdSdiqwhTAbbmqRVeDTesd2dR9hqvkz9xN4kwu4U4RP3MACTL8Sv1LSzczNXaER2CRy4fXBTHAcA7MB",
  "key9": "4FPnk8vPGWvkdeoX5RZjW2g6TYSnpcBmzia98vmNdu6Jyc8ezsnwM7eRiWZj8xJnDaXmLHWZk5iM4U3dGR2GqP8n",
  "key10": "49BvudjcDrrHVSWkKKHc7CzFtGaxP1k4XALHGSywLmcbdb4PQwMsWUyq58Pxs3q3jCoKzhzPP1epa8VdEQMPHzCm",
  "key11": "5Cyt81f7otqsfHNkPxTqqCbzL7rqNReM3sc5zEBPq8MPpChesS2zy1bFQaGD2j97qbUiFT6BUMyLBeWGX9TvbdQe",
  "key12": "3kErWb9pz4LPeejd7HPjz5SLCbAUC8ZGSvzQmpvcyyBKLGwJSwAj6Y19AxajN338C1Q3s6ZPTVekTndqUGweo1zG",
  "key13": "42ACwi8ydhkgbcwQnjNH4ZVnMUuZGkW691xSheAp6DffS2tHpcJXx1BX7PJpwacVJkHgrodS1BdSSm7sJoFSQDRm",
  "key14": "5Nq9FTMUiLDY5Z1HQqvFBzbuRtcL8gtnYnnHdPQJ6sHoErxZftXF3YTqrg5n3M9BwhGrPj72eX686vjT1Nv29ipD",
  "key15": "4tBBDxJpdfykxQAsmdi3D5nvDRBbD1Foi7Vv3hWyBCSHzbN21L26rRLKEKsvbepVXy6XvWoJSbfwDBYNmKXPzhun",
  "key16": "b8D54GLvJHT7N9PqFVRYNpmc6cAWZ3dyWyPtLC72i4g3qLU89ueDSxqbGTfs7XN6M58WPYYAmjLxQteTo7UvRrr",
  "key17": "3ovjHXeDK4YwbAzAdTuGTu76Sb31fHHENviugdfUyFZG6QgdtKBRupCed8y35APH62auDGMFoprP9hRe7txazHU3",
  "key18": "41Trzk3jx4KMk9eSmHPbQ7Mf9YQXkaRaeWkRVyGLA3oWh4VAnTAzXvaVRErJEzBFvB3i8c56dcr6yDrTyKAyy6PM",
  "key19": "5UtWQiDPRK9waX8qCknaKaqKUUEXBEE9ys9T68GhSorMJYasvY7BaKCEguYqiV5ZAvmtDgP3TJfxzTaCLwyxzinc",
  "key20": "53WUCdB5VhwKFbbmwYv5qSoxgtJSSDv32LMWNDUHuMgdmsLQEQeZ2Fjd6ZauJ3otW4hDBqNd84UcJs1XjMoKxEZ9",
  "key21": "3qohhTHNABE8D4tx7bD1JDKDFXgCuSQpefjiJ4mKLhhedMbBsSRhX6TvVxzNzX5qGNVyHNpoohvHX4qwFcJ9AJDH",
  "key22": "wCu9fe5FAg5WA146YU36QW8U59xHMm9kXsgKcqWrRcLh5dFgYVTexZUjeHfKzeHW6MMJUgQzbviY4GaUSLdmdCV",
  "key23": "46dwxBs8r6drvrX8s35NZ8p81Nanv7TkhMH9bHkzbQ24pAy3wwast3B1yhjGr8THgzHG6JwLvQj7ki5YGefWeQWh",
  "key24": "3QKfH4ngmvPYaXJ5ZpZZBRcPjQztw5UB7ursi5ccpZooTL9mTVrZBZR8MA5CitpJuP3BZCVDyuAFWCTXr3JwoX37",
  "key25": "2VUvPVcFMeJAcvmT1JF1eTNKzMYoA6QEF4x3Fq9o5ofcfVvFVzv5fqi8EinwaiBnBQJvrsVuTbnBypaagBen3gFN",
  "key26": "2je1hbDojhTxrf1Q4BbWnzQnneUTksvED77CHscxhuaaCEHF6XZjudcHoevEVPJfpeHa2cyd21aBHaiy1gxj5S6E",
  "key27": "iw6ZnmnpPqRmmkDwBztdvULVY3xEBgWbgmTrYh52adYP9KRtVopjb45VSu8sdmhhxMKzhf8oYdr6mFpHQQmpNhX",
  "key28": "38j6JD6P4H8iUFSwQhFjQWWhJPnVmYFpBaTdJrCQMMov7yVXv3Mt9Pfw5ykE5g6aUzHkxSLwkNpXkswyr3jFwjXv",
  "key29": "z3NubXcGD34ZDdcCrzXRZ1UYp8pMVt7ABF7GSeHZLQWrb4aKQLF2ruX6RotAPof8RveeEFLcfzrvcvXT9Sx2jmG",
  "key30": "41yjjkfY9bc7VNbGruPxU3Wk94pe3jnWRg9SGzDQxX51PJ26oXS3wMMZisJgKaGvLyCjTEFEuS35TfXbB7HPjGkW",
  "key31": "5uUDFk8N1mL5k7NnMnUQUWB7A9sL2q2ntBdEpuc9ssAYp2ows13QYwpj4HfyWpvi17pZzFkhWjXxxGDpMw7d5D5b",
  "key32": "Jkgd8tWeRQSMDbDmwQjqJPridRxssAX9m1JuqTbmE8BXcd83id2wFx8PAoGC3VEziQ4ZHzB8BqB7g4Z8sHBTjBQ",
  "key33": "f5hhcWeKbjmnkGwgc3mBzZVuUqtp1HKhGrGVpyCZDt5HZPQt3NwaH6e7bqBQThB5zDbyhhyJnNATmpY2J9nGYVS",
  "key34": "66fGvowMgJYwMg594hWYLidrY47ZW1aeLuHVXjNnNKAzEmK5BCFjzLDPB45pcP4CZjpxzPULDHeqzWGMU859p2fo",
  "key35": "2gYGgWxC9MpMViDsLq2fPobvY1sTBzMaSPvw2gQSy5Mg6r2drdXdwowTnFbUaXu3zHCFgAsaLP43XpawBQ6Z4qQU",
  "key36": "2PfhfBpvCSke3PuCrEiMNmUavNjPtgWRsyKqw59CDkY1V6A33QNPRQvam8AVWndsihtgtFTEwuyAfQ1PjF75VJ3T",
  "key37": "3kQxDm41WCXq4kunUPS2KgmmnAJLbQSwAb27R6JmsRaHUngYZwerDrWGD13XZDBiESVAhNgisMkCeV93N7HqG2pA",
  "key38": "5nJc3nVyHDUZeANe3FuezrystYVXx3n7DV63XvKnVD5aNpH1Dn3kitbdowif1skxfDXfdJHbamjUHUwMH5ySbTzC",
  "key39": "5rQD2Hgg821trZVqvejsXvQQ8LJbKgAJyKdzEwUXpWroCJtJ5NKG6JAJsfKvPpyPjsLkjwuiXi7RdvqrgSithAML",
  "key40": "41LnNcpDYQ2pKMDs6QPPc8zb1W3cFYQgpzesEjBPEcCN4rZi4aXmVbu6QP4hnoBq1MyUkd5aXrQBUU8kF5kNrnVa",
  "key41": "53VZMjkr1pnfC213vFZ7N4C2KPYcdGfCsaao77vYxmNxBXJTW7rZCeLh1e7RUR9PNdMrLoFu3C36Am4cp3puYiwJ",
  "key42": "JwCR4PTpwPc4PJdgkQ4FfzY2EbDwCzPSC18rswLY9yLa4kbb2N6DoZehh5pmFNWeRwaY2qnEgXGwMutwDHNRcoz",
  "key43": "3nK3M7YVKrjCNoV8nUtqBjSktZ9Q7iVHjhWUZa6VENGPFFSUp3Js88sjAtJ1eJ5ecSmBgfAPAfiopoxUQm6Z8XvL",
  "key44": "3EQEDRMXaxeMe3AYjopWsWHsMtrCyaPnsaJRj3C3eiMnNPgjQNfsCzkgEShgyF752Xh6PeFBgeBiwabX3C2t4RcP",
  "key45": "2pDsXumXf7G9YDebr3RtiFLfD3NYxXNaHNtLpDxoAN97624UrVEHS4fVECo8rW4cddyVSg5VhcbLPAHungP1nrdk",
  "key46": "5aowP1JUW3FdoxwKZQHQMsRLTGSg8EPs3xbQMNkDF69LmuboDUkGpUdyDhHpqReCxQ3N8APJWpWJ3G1qSEWDsm5V"
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
