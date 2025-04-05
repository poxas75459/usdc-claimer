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
    "64evgX4syyAouDbX6zkevHkv3cxBPAVTVZxwqoK1jDLEdsvVj7zGqhKdyFyGnMXWyJVq9MbAF4zSRedxfmsy97gN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cXKA8c2DxARBP8e7Pny17YBRzXBjDByNHiwLokTLFnwg6L2aTKXLQjE4FM4tNzLjaDumRsByxJxA1GzvVpyDtqi",
  "key1": "4t7SSZoT3H4MgWtxR3hD6HZPS2V9c8HpEFkLZHphqmHYV6jiEwRGNYaAqzGD4582JBY9UF6ePdyN7hm1R1PaZ7cZ",
  "key2": "u6YSzSm6NKGYLMPQSgRaeR7uEC6ExzAPEKZSKTtbXoYQpD1ueLgQakbfFXcBbsFRasmBEouk1EQS4FD7Z1XJ7oH",
  "key3": "2EkTsfMqCYuuDAuVswtvKeaL9UkKUC2zGHv2kyuhgVhG1UoVxLsfx64uDK3LhNDERczi877baoGAaQNR7LWieVQi",
  "key4": "44iCNsgW6jYhCp8sG7WyujwoCrZreonKcqxUikdAWL1g7MUL99CYfxaB1Q7x6GqoVLPM4XGrkUJxFjjBojb8S3Qx",
  "key5": "4482t5Jwdbys6v2ZbQujyY67N2tpf3Ma3R9irzdjqj9VRSYPZVtKZ4SAYtjMG1rgkJc1j2CC1ncXP5hSMWcEVEh2",
  "key6": "5Gj3km2u4wt58P1Q8EJB17a3GRyfP8H5RyGX9tYwoZBgfYbXoRU1crWFQkzmfJCEmjzpywmdrx4g46EzmSk9bxDQ",
  "key7": "57S1kYPA882YtWju3pmozeSKB4muFVptyBkgTyZyKcpoba8kmfDiAwXax96zr3kr5dtJeaQ4MHvdzRuVA4tkLWoQ",
  "key8": "2UCRozicXNfNaf6C8E2xHk1LhoZiv8nfQq1RLFC97EmKRVctLhejRQz61m4sJeuUsajkpC9bdDF8w6163nhLiZdC",
  "key9": "x5b7F5tGKMzHkLY8CvbSBtR3voLqDSyLLjPfsFT1pGddcr84ztBvB6wfJgYSPnyFASv4sHzxgzuaGTzwgFfz8NK",
  "key10": "825H2Nvn9Pw2zJXutspNdxtw7ofuAKdMhA7PiGsg6tpBC6SbqLHAZnDkViKRShj6mzNEgSg3uXPJ37Cditgk6Vk",
  "key11": "5KBYuQdXCn95orTi8aExLNn2UPJH6uPoeA1GCqwpaG7YSFNTumGZUEibo8dbFhxXWd1X8v93LWbcF66p1HQ8e4Po",
  "key12": "5DSCq86Hnx2m7oc1wyYKNNxU9wLFTpjoCourRM7TfEpaiPQGL5eFtXL5hcJXytMG8qMTpLi8ncNvXooqv1spfCpd",
  "key13": "5isKibMgH8teqHcLyauGbiWQyD8DCp2Kz5BdZwmKfh9n72NYbEGaSymVXCP273XGJ3H1kv9zYD1u4UYW4qQdx6nw",
  "key14": "5156GfmXaoaXiR6555RRKUcRje2z68NXrb31R4g1r28PmaTGQSJzZhUmn6FKL7RmgNs22bJcUMhTYwfRaGwGBbPJ",
  "key15": "5bpvY3dz83xj5iZobpnK8LUbXAe3mEQ7EFn2TopbhZVEBYzmMjbaiLUQrAscD4VbTBnCk31XaJ81iLkemZquJogg",
  "key16": "3qnT3HSU7BK2Eer5Z3HrM2CrF9zvkvCFG2VeDy43o4oG9DF4B2d3m4tprxUUZ9zFqJmjXCQYwNJxoEL7JxWYfyog",
  "key17": "oMhcpZ9oqeD9rJL4sthAnJtTC7NXWZ8pUmJW3sWMUc4hPsGWJp2P4rHmUvM4r2HVwJUVhpcb3jZTxYFMWmCq6LP",
  "key18": "3k9eTtYPDyGbkZy4rCnCX75eApXpiA2MZEYsEk2pBAJq12EAQJLqid3FKme6sSjxHP6z5LgQ23rukyceszdYuaGp",
  "key19": "3wWEw47D8BKAQPXMmHGEH4AjFxGRsQrUtuBbX2B8VgZ7HQU3AZBkwh72Etmmj2jfWWpBJpDiFuxnnmGKuEPQV2ef",
  "key20": "4CBEDsWy1Ty9is7C83ZumnDDtzNLdmr54Fq1uh1VWa3dsUkyBjniMqSBzQCrjKJhkFBZJWPKeJHeegCZdBSXp2WX",
  "key21": "36RGLGX5XgcwPctUb8VbtjqTHVcQUQ558beB8fsAbC2Gjx6gBWfRkVjPNdkfRS1oj9ibceCnCiw7qfmX51X2tark",
  "key22": "4i3fiKqL4iaeY7v629kYsevNMgbso74q7qCHKyjLWMdArzhpXsP2BmHKvUFXk3xTp2ysDQFNfaEq2nHsnMDvKo4a",
  "key23": "1q2ZEo1iYCugwmuZ2emZSGf9MLFxLkoN6bjHUD6hfvL3Z4Gg6nKUL5pTKRB863XwUzuCcGM8ih5z64oS1PHmnu2",
  "key24": "5kehZQfiuCkvve59P5frBqyNeMcGTpEmftasPxjCAXiPcx5iVk7HHWwHTvDnPDFNNrv6mh5GA4a6izsGgTVpWQcn",
  "key25": "LG3Mjpr11PZJunnnwKRoWLEndR754MrsPNbWyGmkDMVrMGva1LqJUBWiSP5kSDe2wBVCWQDHnvKpLk6K8UcUyGJ",
  "key26": "45RVqrBfdLE2hmZcpFSn5wBUGL47G8jE4CgwTrpqxCEyVjWpAFb3WpWY1imx3imSDsGaddgYuiNAv6yUTAapgWoT",
  "key27": "2387DiqEwYRCUDqRZiwRLafc169EbiiXLDBSQaWw4YmYnLCq1H6j3bJ6ZgCuD9nu1TiEmz8MUFizLKQZQAb2HF4Q",
  "key28": "4pDx9iTKXj63vNAETSQpKaU7UUVp5DTxQbuk2DCJQLmtSFFxQGoZEbEHdcRKSvZVB9J1y6945NV2yV1bLdiheW9V",
  "key29": "2Sf3oYXN2Rz35Az4DJ8ZqoDN4MHw3h8jQgdmt3hKstJii4uc3QUXWyMn8CCPvPdKSvD2U4Ho2vZkWzByNixovTWJ",
  "key30": "yphLzEqpTR8ACAoGoVtc6WzE3ERoxfUg3eMpjRndJpdfgMRfZNrnEqVLwWy7dJBpzkBQD1uCnGNuLn9siWpGDm6",
  "key31": "517vY2P9h4YDUhBVwc8mRAhQwrQo1J3S38mm1pxQ6PL7tuvbWonU6d6SMPh3CZvqqbjdwKQvwFYwjPqm6yKEmnAB",
  "key32": "63sFBJUMwvJiBvCc5XvUk3JMUSsTgFuetFqSnvaF1FNsdr4zeKn58f18AaxNHeBkDawsPz5EkSsRjWGrL1MH71rL",
  "key33": "2vi3WVyqybNLL8FgFt4FW5G74x9amX9zs9Ha1P9dTd3ehoEk2Nb57gfDt8RREGGowBXMAnwhpx11Ka8XpryjHc8N",
  "key34": "3cDkUBc9Wit3ivda6x5GGSdzjm5QrAFQL2eD5iTsBikZ9eD2XFsBaT6cBki7ZavHuL3WMm1XYj6LbS1eB6mKVVs",
  "key35": "34NoCenmos9NcENDDVBB3Wrfm7NYqBDGss3qXewANmw8UecQYYAoMq2tDVzhyR3bEPA7r7TUDPk2nPzSty2MVF7k"
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
