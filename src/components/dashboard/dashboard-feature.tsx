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
    "49jutV3rUkQsZCYvZ8Xb8fGbYxY6g7vHTfX77jZbjVvezAYPbwrYmgpprd7cioSwJwNtbL4fLDWM9C5M78WuqEe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7gGZ63MGu9Vo1Fqr14A8c3rjrZ3PX5ec5eD6UCa9cjQCMxXXzSn3B7hPuJpXrRfM9B2LFQmnPp1UpgQ33J87Kj",
  "key1": "5khMRrsh4xZ5ofip9Sh5hGg2GjpB1SFwanR4Le8tFRLjiYjo1R7zBnyqbBwVd1gZXEGZDDu715GzZaWohmkSRA5U",
  "key2": "2wz2wJJ1gXc6i2FpRkcc6RzQQ4JBRzRV3sh7mGQ1P8PekoiQe5hpw7o9982A7Ypo2VKYzcLdybKgd581Vm5AarLJ",
  "key3": "4zAH9wM1E2q7oqkTRvgePBnvd21V2YduJaVCaCWFjgp3LfCpCbdsJqfbjdKDksuBXk8jYvqCAvz6xpeWrrznBgjT",
  "key4": "25pRFqLUd8J9Nu6nTQktP3mFEXDNnzGEYNkHnEekkAVmbcRchWvj6tazmCJL2KtBeXBUE4jihNyoRAKxrzvdNRgk",
  "key5": "3jFQcGC3E16mijDJSwYLJzMWh4LNpfxLW5RBFxg4ZfwkU6BWsdH8reZu6FKuA4Zs25Vf7AtjpvUea2WPxGrZPsGA",
  "key6": "3sTENRH2UBsqvRRksB1XgP5qg9LNHRkEU9nGnY3aUTuVq59RWX5nuCijByjWZKBWHNPdjN4TZj27z2k2hTMRLvMx",
  "key7": "5s2gjS3h2CPPSnHFStf77kmq6NDYsyGEXYsV5QQ6zEFDVAk9sSiY2x3e474PJhtf1Lg4mEWDXLpaLvsbdz6Dd8HH",
  "key8": "3okEtESSz7fwszpF3DvhBb5oWsTpW1Usaf1XT2LqokPReDgzk7TWy9W7gDVpaU98tUyygNNKZKKQvbjLZaYA25vn",
  "key9": "aJbEJtayx4pjeFudedNd8sGdYLq4oJtVq6emrAPrSDhTF1WdoSKaAgtkpn11CXvKqc5eZ4Nfq6uE7Sp9vzmd23J",
  "key10": "43v6YZR1iJn8r1TnV5pSfouP6LVeJsAVQYGbetsJm8LeKHXWQUXKzZZwhv1uSqTsjjJHV6wzQAiJM9gWMRjFsLoy",
  "key11": "EEav8bfmt8ehyX5u7L8Sy6YcmtQzH5T7x9izcwto8siMz8amdueyQJkFZPDsic7CCjC7pjDtaWxKjee1HKb4MNY",
  "key12": "3KsHSKJwTLHf5dA6e37duKs1twrBUXUDmn7MaDtpEsoqC7JuCVyvFs9EbGPx9aWTdZ9R3TWbGrjhfTvV1B23BUjn",
  "key13": "4ZDEVUNNX2RfzbdcBKfXV8Vz9PiGFWShdZBHtk7nhnyx2BejK2kpxsQDsfzi8Nk8p8iJXcrU2urDxbpJQTd5Gg6c",
  "key14": "4trU2wyzAtW4Zr7ukbJRrGEJmYYZxYkn6eGDaAfmX6pjJBmunS66pMaqM1vMaeK25VJiGBm8JWcEp7C7bSdP1GBR",
  "key15": "221cGrRYzH2ThLnVzRHRWNLYKy7KKhjghy6Fc7jrZD1WcXqVywZzcMwDL3BDh8i3HXKPunZ5Ks1TsU86J73QuYkX",
  "key16": "5TWSNgYXZRcbb3jyF68HSQivDAMWwaHp6ocxSKbLhLjYaJxxMsDNAMrZUwmw5ejqRxZFiArbwNArJGqMd6VXyNsb",
  "key17": "r1W2UjC8vQHsrf3sDWiEtmBo3reGbQ3U7UoEMaQ1pPshMCy6jsL7Bif8JNF9vtDUK1o8doz5DiFH1L2J4iyqq7T",
  "key18": "2SpPYszsDyT9UutCXpwoAaNRJ8DbMpdUxGTWX4r8ecsTqwq533efuWcEkribnyFPwz55DnHyyAzTWcDakg7TaAc7",
  "key19": "32XkU8S4oBj8e1w7ieWoxzv7FroG8G5fJjGwyJgCV93MQ8M3L7D2CpdXjeaEUKwC2KQ82X8v3rUWW1zVqgi9L2ni",
  "key20": "3ih7tS2L1ceCm15MKphJ7182H4vEYhJC1YJvQSZDDq8tUxKLjoxEqRf8ky2DE6aE4dqeznnP62BX49Uo682jwEZ6",
  "key21": "4H3ENWqDFfHfQwZUkWFpTYMNSfZBgAwVzyo3TsddwjKUKQ6yE44avqjJqwsEVUg7Mpd2mhK3tEbMN19VFj9NmtCL",
  "key22": "3voPxFoJHrWv45YJ6qQeBx86YtB2k6u5ZxiiiKBZuSK4aB9sufFkFdaj76Bp6STFir4pbGtZ7BAcmADm2FwcC15U",
  "key23": "4gJyB6v53wVypVb1SmAu9BNzoyF16SHp62XCEz1Ek86sy5SqveN2KBBCM1NR89BmLVgQAstECzqZG844gdCSkteP",
  "key24": "3e9kDchdUH7SQha6ew34oBwthEhJ7i4JwDnhcR7n1PbdjofEnTkn49xTyhTZUZTK15TStKQ3o5CozGaFsN4oJg4K",
  "key25": "Qz77PbeLqKw3UrA72waMLAb2wxKz9X6XKXjcVTU9fEoknJg3dJYRkwxBXn8V6kZMt16UHDfB2F6CFKNJLTUUocF",
  "key26": "66e2wjG3egWveQ4NFSvaf5p3gjSeEdHCQu5Ts8CBzUNeZyt7ptGc9mgL6VDnEUnrsJjoismZos46xxwtXuVmKfyL",
  "key27": "2VZTBnHaxt2esXWfYuxdqz7k8k4si6Wd8TpUKwpAWH85aDADUcPLy27HGsqBMeiagHt6ePVVdvyEBn8tGm5V5rGt",
  "key28": "5sLpTAxuyi63j6Dv9BMnCVuoBwNVGXACZJMnveMNrGWxjeZPokkoucod14bBNcN6h7q1DGiUGjvyXyopWErtmwhK",
  "key29": "2pKRdmEV7CkqaXqoLihCrz7LKzd2Zdsz74jXRTbaa8kLMHTmJPTWY8dxzxtjaT2qpDuoqeiePiPCYrxVwTGxbmad",
  "key30": "21a5WcMZuNhU9NEjKvipPuu7BNUEuPZSXJ1qvudNpwcXvu1RKor8nsEPUFY7BJ4EqcwhzQcYm8H5Grh8jQybYXqb",
  "key31": "jvruaBTkBjunVbsrVvf298wZEt4g7c4tjqmYTYRmb1BxbHrsrs7pgnRgX8DqYVGpYMfksHKea12yjxThCNBrvuH",
  "key32": "6NMhR5RYBWa4ECnDtVs2CgnEyXFqgz6pgnkVyjn8gWmuZehgahsyCq24PPamvc5Rra1MdQtrn7FVHQQyBgi8ne6",
  "key33": "4GYX9LfH3gXux6c59PcUJfaQuYYKcshBHnuBouqBC48DkPqL1nocqbTKSLKoE17hCxfbEm55GmoEHXDj3Ppam89J",
  "key34": "3XbUtSR637dChsupqXPMxUFF2YWNqLTPiWrksga4KRgYXnbj6dDiZ3iE2YQBCCUFrFdj3Cm9rEZPX5yhcLreG2PY",
  "key35": "3n4vfLEFTPGqj2tN9oLNjcuQB5qxsHjh7g4M7k7Q7LwMyVpLLXJsVhto1wsC8Fa9KSazPK7zVTJt5XS7ucgQysmo",
  "key36": "21agHWjbC9NHLKxcCb2ejUupSgCWMtnrM9Tyn73qGFntGtKQvNghg8Q73kNopeHEZVd3AusQvTijAAL7vb8b55r9",
  "key37": "5hCdHugCP7foy3Fnoysv6bZ7D25axj3TwabMG2ZUoR4JwWaMcUZmFGCmeGGGuifb95X4vSZyMJkGaDLuVBosyCE4",
  "key38": "3cfirzE1Je59Ti8ChGTYvLC6T25RQ31ARTCtPSBF6hJf5AecqW2mfdXnZT3ZLanDn9rVDvBm9kwpCJp3x5Y8AdNQ",
  "key39": "2Q83C2rvKLsM1XyQ7TupPbVvaHj1eUz1QWaMiUQD5ei1pk4yNEn5jVMvtDXq2NdwybskuRiquBheiQaoJyERYS1H",
  "key40": "3u7mcmr7Kpzkvbexd4jYgcuQSMRo2NJa9JvwHuTPAezVCbkLRZ1AUUqv54pE6Ge7RriThSkoLSeFPmuSLvEtLo2C",
  "key41": "2NVXkqamQASeuwYU3fMz1Lj8T8pd4ScTPzRcVmgwSm8avHfLdyLuu8G75C3aaBuUpfzQFfqj67AxF2AHDS1p454W",
  "key42": "4zqwnxmWKGefB6Rq6oJyShwDTAVy7PY8K59gzUpwKAtv8gmqTg82GsRQWcHP4CgumuxBU9A5pxWnpGoL6bgoEmwv",
  "key43": "7VkhAkpkwnNKMoF1XuZqySPFZaT9MCTY3acQ2N4mdDRJy17YgykQq65G7bSEZYD8ADF7wYtP1y7u6P1w1gd45wN",
  "key44": "4L4JJ4xT4PbGWvTpbHg1irbRbC5ToCVm7STP1kx17RBQrV3XAbmjxe5AiYUammPcrv1i8aZApr3kVYoT7Q3ahsrc",
  "key45": "49fpZNUj85X47ec17TeZnEUXWZ2NLwsbLV1NJk7tvM7psZ1cMfxYsHcGeZ5hnuNFhFGhMGeNefHXggApDRiUAAF4",
  "key46": "5ApEvhJHbLcheggxsLAAtmd6sFsbM6jMYKtPPJeTHPFi2VGVfgD6WmJ65BD4frD943dQymwpoLPZKceix6bWQeds",
  "key47": "CfN3SSh9qbBhtJ3ETqRNToVeWa4cWf6sPBF4joJ1iGrxNkyYtrgZu1PQHXbgZ3Uobiwj7X3x7Fydga3hzx3WFzE",
  "key48": "5tpPtZExkunuRyYbLW6AbqGtW2Depew181fhN7eEmncqWSQnbBHLhCT7Gf7p7hhCghVMu1R9wbdBec62pQ98ZmSG"
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
