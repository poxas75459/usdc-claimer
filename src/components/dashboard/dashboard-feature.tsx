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
    "55gtH72haWDUFHF9SJoYVD7GabgvdtLfznsUkU1ferPeUekCE6RrD26hUYYkXKUWgunhntHhfWede54EW1iJUDyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRp5eDfoRnrQb3FU4b7pcTL4VNVhYmruU4oSxmUYTmPFcpsWKXvipws3a2HTEx9yXUEGqMQh2o7wmW5FARx9yqj",
  "key1": "4b5WqGTzYj8XBN9DQkyopQ9Jex2NuMMSB2WoMNwDNMPs8BNGMhQWvAfJ5a1ySLHSLQzAbB7Rh8TUvPRyFPk4dftV",
  "key2": "25XQoEHL6zfZKQdGx29erEWfVzKgdX5roarSdNbVXx3ogNhD2XMQ4ZakB5H72CQRm1Pnf5fByuvHcCy7VhgZ1eGS",
  "key3": "5Pcwcmzj2CEmoHSmQ41dxehGGcJXmiAeecNVAMSPZq5J9QwG8abDUPgpVGgfcS8RauaRSHskTbUbd6Vc7kgttNox",
  "key4": "5WxpzkadpL5LzEE73ciP7zvoRTtECaPJDPdmow9NxrM2T5mjVotQxfk2CRwkL3GibyvdRLVg9XJ9ttiHTr9J9AuW",
  "key5": "2HuWACn5EJuWgWxWKReNNKMTu5MQjJcGZq2ynf3AUo9HCuimivgWnQdHWQkccj3zEh6kBPLDyLemkJXgNVnEsc2x",
  "key6": "38zd7mfo9EjrBgCc243p91D6UmgHQHKmUYgRa3zf2K2Z3XUB3cuHjKZeex4bX6PMNjEyhoU9GtPrQ1C7AHQuUxxJ",
  "key7": "4vzCcBhBTK1d2DTJv851gzcWtRcanPDdAfwBcwmnVogeoqdQXtNmv2Fh8dSNwRpZD1zorHqe98PBkvShFLhRMtFk",
  "key8": "2mwxWaBdzk35nGhFFut3kU99YToSrjKUjq39QDBe3UeWwtxeemEL5Kri11989YADsPeQykRVzGN7qxYJeUoy1yYg",
  "key9": "4KvB4je7519GuRMvnaYHY9d6HkXZV5G6wGZEMBKfHkCkWer8fbrcVnF6xn5Gvn3A9feiroVjvs82taZovjtkqr3R",
  "key10": "U4qW1ubyq8WG8x16bSHJB8xqntPaySrfLUfyPrjg1r3vVMLhhtB4KfUvvzy8Gqs6S55sJcyeKcXf5DQoJqTKDps",
  "key11": "2QgDNehm3vHVaKSfepGFy1FLmvU7ZVRWLQrdT4FLwUgfD5SAPKHGYXyY8i3euSgyob9M7jqNtizf1PXjY572arb6",
  "key12": "3TMYiJyY66MxjNM9FvKYypeuh2bC1b12BRSwbrBciUvbAFE53h28pi7oTTr9XvaqsAUbdBr36jREfNiTBzMXXfR2",
  "key13": "4Dy9GuCenu2C1hyautSoaHNq4mPddozMK7jM9MQTU2X1sH2o4mtcbFfSZVS4fW4UHegrS187eEXYxgKdQ553Vfky",
  "key14": "PGAXUASk8ocwuMnoWVF529G1eoJpLTPJsiWpkPmgy7tWWPuDE3uRdkpKqAZHf8mwaAHUx7Gse2zWzp74ncqf5h4",
  "key15": "5NVkRqNtwFXXucg4Wz26sCHxfPmkEgPy5f6dgXL7fCJSK7zG3s3kjPJwVSP9u9QB3KUNrPf7ZoyjRi5hHbEqJ3zM",
  "key16": "KzjDCNzYdWR2g7RT4sMUrW6tTj7B3pJJSWLk6gh4Kx41yCQE8gWCBDaFaTw32eMCLpwWoCtUH5oZpdNgS8Y7EsD",
  "key17": "21YjPXhB79aroooc2Y3dhvNXsiEm6YrYDhf8StdskLGVP41fbrYYRZLJ7PPwfMQ8QZzQd7TFKGwW385UMnNzXno9",
  "key18": "2hmyL6PQcvzuG9fhPUp3ME1ZFsQ24pADXDSZZjf6bay2oNmV2kGYaLQzSt2YdyjpM9hMqa8d8Fn3iPfGEtEMagkZ",
  "key19": "x5WJc7Ep9GEQZd1gTsCc6h7ktgHCXvCzWXVqvzKXGGsyBzHu5UgWFR5U7k5vk8fMQExzu7fuLbAod1HmZ82CDMk",
  "key20": "55iZCYibYnGXoZe58EztDM5QbWzut7tXWQsJarA3cnucXDLkGDyCtiTfd5aUUPgAWpoiLK7ZFaZDXu3oa2r2BcNv",
  "key21": "4GASvtGyEU7uGEVbdyptbYktnqBe3rRjPXrBkoCosQNcdjFD7h7kR9htzbv942asnEhvE5urnzyweCayoZ9vj5KX",
  "key22": "5ZxeRTBaWNZJmMToJjX8Wt6YMA3yX366YYWBcN1RtwsoXpQJrpXjbFsvy4Hq8LFASRqatb4opTTafSMLLsDm4DY2",
  "key23": "3469JiNoNLnJwQY66vDK97enAQ3a9945StEbCMVMQaRce4VuGx84M2CwYM16CcsWfiwsbnyqgBAyLK9ag748f9qY",
  "key24": "44DQxfCT2FqjUm6YmWNm2u3p6VTJBPtKGCg2HsUCU7tmuQhX5jVoLpTEgN96DyndcR7SjdT5TsR4Bz68ngoPR9sX",
  "key25": "3CqB9qSrMKEhi4z56XhjT8SkS5cQaS8DR4CB83hVpMW1RbsvNUfUQjwvhpKCBwSVfHFjvfpxJMnP7JvSWuuGX4Mj",
  "key26": "4s1XwHoESdZBdtapbz97KJpK12BL7scivPNnKcNsN7Gkj7sAc3ThnHtKsWr3jm1mFYqVEpi5mQ6da3AM48uczmUN",
  "key27": "5WbsbNMdzSz6nUefoEVFE4UdHtv3EFowNyes4Hyjoe7VEvFiK9f5GrBnqTGAdGvWiSpxw1U8g7ctD4kqeKBn8Aav",
  "key28": "gg9HqCTzPFcJWtRFba6LPcoEe2WaP8LHtSjbNSrWpZeeRgTNcm5fL5TFX8CZRrsBgJdM1n4F8kTJwQPmTA9uPbA",
  "key29": "FiRXGXpft5ie9FDUwe2QXUJZarxBHBC7TQV2FqR4y9iqUNXqKfKeuPycirRKti2T6DQLu8Audgv2iC81vEsUjj1",
  "key30": "3rw2yYxXbHGXAN2kFGnFDmPBCEhfchJyU9uRr9mGw2kCoZbEcrbhUQRNoLq5gfgvkJJEvvjxZzRtCL4gZVqBcMTt",
  "key31": "2j9SAkxLtF3MHrPaDu4XJ2hAaMqohzj4GkiWtgumnhJPvS1s1wchQKzThwHWA9VijEsBoHYJdEYjr4DcJ9uJWqhg",
  "key32": "3iBeTWeVwX31qPYeoBEx3K8Ux3bUXjz95GNnr2bT2DTSCkTpmvmGkMYkrcSfeDPsbzDVr5PLAB8y3TbWzkogWEd",
  "key33": "41WymAaYCvbnoK8NauNwVXtHFBC4nWEwojWQ1pD1kFfHozEtfeyXn4AfUfDpddtxCLoq1UR9dTTbjh8ahrySpUXs",
  "key34": "2Bso1inLcfA5uwqaN8fGFaMgTzGXkZ7DyowELWCTpUHXevFz3cVs7gu1vgZY6NyU15ZE9x1venabwUPd8a85DqgW",
  "key35": "Q3Yy2HgqKXWJm69zctxsKmofRiN2Hfjd24RnitJDe2G7aU48kkUsZbYhCyH4fhDFnfLv1NKQ9AAQNnWyYXd1xsR",
  "key36": "nyWMHpFaRzZrwe6mTPYPPxLtJyyAsWEYse8osfYvnTivfpGAG6fK3U8ErddenLXBgTCuVTjGRes3wH2GEGnG3A1",
  "key37": "3Uyy7fh5KRZpHmYtUveqQdFvNjUoTGZ4Bcge544BNNYMed1fTDuT9uqodWxJcb1XJv1M5jiXf4xw83WimqUMobw4",
  "key38": "61HHvsCCm889xFFY47b3NLrUe58ymYzvjJ7AsyVz2E56S83hYnZeDfpF2YH2d5jfdBQiSj8WkCcvsPjoBfSGyXCo",
  "key39": "67RcraVEejkmCsSNZG6AidPCETAXRcQtFNYem5rfJD8uvXsj9ZzqtqDAnuUbV1qCoJMQbhMFEd4jsoTAHfmPAz9a",
  "key40": "afM88K3umrVrpU2UTCYeX4Me39L2Bd6mN3ejyVjDXea5Qmdn5AexxudLn6X8dYDXZt31NH4duqxknsauT8BiBmf",
  "key41": "3tRrsQJGYj9CxHB2eDGCHaNfAHEidz75Lk91G6Npi3R5cxdPWvdqbcKS1rgqH8hiqRkbjnJ9wVF39AwQ86FVibgN",
  "key42": "4uSCoYqB8dE4VP1n8LTRXQiv73KVcPoXkub9mPjBsV8DGG6JGSzrToxG3Yzbq6Ug6cWo2CqE3QTTKRLfsT9KyEAK",
  "key43": "NfU1pvY5N2Tbuc3vqR3LGDjReTcNkaNopAJonLHonCzzzFTXLpMoRmQygc35B5mXNkwJv1LohFZ7hywqDqxuN7Z",
  "key44": "5g8kipA6qnusgnRP7SmEQmeF8Gz6AQD6f4F7W9aNLCD5vs82bk48poQFNwmd4A2X1sVQBTGH5kgWKouLLtTmLweM",
  "key45": "L674tEykKHZvLZFv2wWwtQGuKhCab2fGHg6v58sRSUfvYNCeArRtykVB6REqAivTtpyihn3ueqzDpVKTyAE8W5U"
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
