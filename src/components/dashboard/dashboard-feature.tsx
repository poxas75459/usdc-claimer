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
    "5yXEsMcQ6edQj9Tss4Dv8mJgaiY55qvj159wGCbKCFNLh83fcwyUEPsRckBgubQw3pw3Z6ZJ1zqcQawAiRJMk7Td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "614EHohjrkyYzMYPktvFK2kxA83Mtb9Gn5ttB8fnJdo7aYZC78DK1rfGMFBccaoS9kDdssUL9cun8oBbUFCAFzWk",
  "key1": "47zLCrL1d2nhkMS6GqcdterNdPCsZhfLevedUb6WZnv6cBwqifQz2aTFCyd5sXEkagZm8WBu6RQLDm2yS4gXWc19",
  "key2": "5bsdMANvuTs7HHn5GkZ1FXG554CfaDhVVz88iJkg6yrxb9Y3iuqnfTSeU7Y61zNJgAeNpu4HRgsfHKGx5hFwDi8m",
  "key3": "r7h9rnGUzkuvTLtBizoCZvQjGrRyu67urYpoXXbdY8c1YTTTGnvhECswRppKhTnAvCMwXLyZsswPyDmbJW3kJNL",
  "key4": "3XH99JSHhhpAxNKUwJ5icGGWyYMmxboW6d7RjGCrRY4gKa8YbhDPmYN3Aq8o1vJr5QUG8UL8t9x8dNpGLv1yHdPo",
  "key5": "ADzD3uSKVvvHgoAz1NPfrxTL66wSo8W17rTugZZ394VMFTswomKy7a7T7Req4FRjnwo8sCNdcWre1jt5PQPJa6f",
  "key6": "4XBsfr7gdTM6qGhXQ9sqoLQeb2iyNDj8qDYdZzaRvzuUwDgvypJRU25MWhLZcYup4bThMjjv8RDcEVvMbxjQ84Vy",
  "key7": "5rmFdN2mHFnZBn8kymbQS259zqK14un136yHX5muZLSU3a3yt4AjWDc1673U7UhDrWwZEagWe1FqRxvaaMWwox4Z",
  "key8": "4oR39B9msqgDbkz7Ve1VGRV1BSpoSBRxHVoTjiBQvDLXGP7899eKS79FJ6Yfx7NzbMXYWAp5ycpjavVyN5rivYeB",
  "key9": "24Nn4oLRi49bQHwgQ7TKe3dCfSna28tAMLJi8Vr5HWEacFufH1i54CJ2qBTSZNkpRLYJdEmmojbUgU6eSP8fjzrP",
  "key10": "4BUuHsEghFHrPv4VKXtt31zibuG9odKdYHQkbr3zs4Nzc9AGqQnTAiqzUK88cWJYWVhkTNPMXVBLR29739BRZ2UJ",
  "key11": "5c529RYHzXgwr5wG8aV8D1fVaGqxi8HaSRVUz9PKAh7Ft83tEWQQhf47FqJDXPS2gP1EhcqW3jWTzC7aj2rfa13D",
  "key12": "3cuFHGGgXhedaBv2Xn3ohMKmQTL5AdtF444M27u6x9CVgdHLXWu6gheSEN6KufBm2g4o6DqX9pDP5uQnX9TzQ8pc",
  "key13": "2Cuwy9BfPKeuKdNMwR3pyx21DpopWPZSkGatJtfjAsYX9CENwuv1u84dEkiTt26sUJcsSpsZnZd2oXvpaGrJ4DRn",
  "key14": "D68TTL2p2arvkdf6dQ9tHg1Dxd4GveMHRDtoDVQhXsBVZV4oRjXVVNUsVgZfFyQzp4pjL4DgBH4KLp1ktNdoTRr",
  "key15": "5BGVQgvvTZQcXpUp8mdcj8K63gRi7YAPV4eJkbvvZ71U7Nb78pDQWkMnmDeSA8m9Vkq7jzP4Xaow5QryaHDhsGyd",
  "key16": "3FfJTz9iBQftjAXtt4oCo5EwenCjhq14Ruqjeu4RbSvRk3iEuYTJGvV249i5DaVVFD3eh4MP3eRCLuVUVJQy8Ctc",
  "key17": "4G1afmyym5BugCKNK2uGCPMDTDYuALESwamaANq4pQbt1Ax5xoqGe4M73bFaZSajXXpYxtGTrdWrVooGEeXK9ZBE",
  "key18": "66mrkos127MFiLfNcPEW7wMLLWavbh6wQAKqBN4NDyJ51A3MuZ1JfWr7Z5vhXLxbSu2wecge7b1zt6TDm8rZr7qu",
  "key19": "4n8wNaoJMqd6RwyQqaH7zgVL1Kc5daLfmhSmWGgQeRhDjyebVNL6nGpJFbJN3fjQPrsVXL3Dd1FDiHiNouMxD47m",
  "key20": "2iuYC512UYpdsSaapspPhDr23ThPLojCHAPGKiEhJBGoNCwoUWsvhdAvunHw9rJ7zcTcRym98uzYB5GTndDukVBd",
  "key21": "5szsHH88UbbG8JWhvDFZ7DAgdQY1uetg88UoSrCtpCppTa5n3sVguGrLVgqn1cWH4Us2YaiQRqKznmLvkNhLTU1Q",
  "key22": "212uZmyVSGGNvTbxzUU9wew3ejYQ6Hgh51jHrUQaCxo6J1uPvXa4xMMFfoF2FdkwsRV77heM6N7io7Ev4WGm8KMB",
  "key23": "5Ag1i4jvN9rFm1KczRNcTWPFGFLGLb72dWhkZLUDbuwQwM7CyXLWKS6iTaqe7Vbc9PZSuhJQw5Qf5p5XTXDveXHZ",
  "key24": "5HoYUCpFL4uL6NZ3FRFeiJeMaztREhFe1AdiahsWXp8rmYF1epJqtgfQL2Fr2W57fpqMcijuHjvJExhHTx4xkaC9",
  "key25": "4UNqoZyz1Lzyf2RTCMx3ewEKR4NfooUHajHL9d5zdfyiYwdoBtP6pZ7LkJubjdRuvjzCdJLa7Ti5adExDN1Rqrar",
  "key26": "7i71EgDFEZMGR55mwsD1JxL1GeNfoDe2X8ymSpXj78R2xvsjMmw6pWyHuZRQecwPKnFzqfCoiWGNuUkxHUqW4Kw",
  "key27": "3Um1wNgfUH3wmkgShjc6Safv2bzsr5UV1sDC11CSLgcDQrziALPaxgPTvQhSYeYXPWYDJb9DV8uJTkKGC1igkDCm",
  "key28": "4eDZZkVGvuWFr3PpSLeqs5GDn1Eqi1TsRyxwLrjshNbRm2VaosV1J2EYDC55aFxAHwHweoxbxe2Gds9xbMm2En7j",
  "key29": "3B8nnnHX1saUjhVVjn9Uuu56hbvpjTKP1ZJSp86QAtq3g6qCXqVk7nMvi1PUzjYzkBPFpN9giCvn5cwXv3iQznq6",
  "key30": "fuv9ERTtevGW74S46fjZEZkUFVRJyiRUtctQuSho96XCmAYS2XDPXXmkqYsLQCYEGpLvjLSokvzV3wjh3TwWfrr",
  "key31": "RJnsntULYPmu7CZX54PJeRgmK5bGEoM48QZoCLfjscK5EEhemTXFxHm8KGbbFahLK6xftDjFQpbjrLDnCsnArfn",
  "key32": "285ebU1tzYNABCF5CpDpigH7a32vWycB2vVGZKNieUmZ3DTagch3hHPNU78ivYbnXdojF7BSoiLWrk7gJQoMujm2",
  "key33": "63KSs4wEJjJHCczfBjzmE9fp7BrdqfzR5ogejFFj73hBMv2iATqbMWPnNDa1DfqaNjErGkc4tZk9SMRstwDnqpyM"
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
