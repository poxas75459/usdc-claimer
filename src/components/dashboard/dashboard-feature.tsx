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
    "E8KXZxEpisMXaXDsqAJZA8czJ5QbMKguAFA1qm9TQdtBcWmiRPt9u4q1U63hKPhtgPqXz587M9FdKPjKYZbEm9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Y97b6DLWvcynYtEKh9hPe7JE9c8vR3yUdKBPsVhkSfVpTDUYVWaGzBRwPQGzzi5Li12UcxbaJip7KmanufmbjT",
  "key1": "3u2QWjpJgJ6Sq3rAz2xW6Vgy5GjYFrDkyn7Lxb858oSzzT9J2EnckaV7miCV6jwcYmFmZ9RKK88e1G5rM4E76uh7",
  "key2": "sSpcj64HDmywfn5cg2RxMd3ir4je3vUbAH8sjSpb66LKKTgdeZewcViRj2zd8zYkpjPh6wQKYwtyrShJpmAMtTi",
  "key3": "2jVLZJbMwyMHgSQmQCoi9a7RmFEcih4wRWsJd5cYGYpYdCn3m5HG4xb5YUif6S1KGf74nHHpvZarykiPuDda4s9N",
  "key4": "3k3uju5841krniw16Ysy19wj6oingqzeR8HN5cbE9fJxKDzhphs1hGceFEbGGgtNgn7KsXgSYx9P3Ao3nrXUk6UD",
  "key5": "3M8tEoyEXss57Xmy8nPfhJzAG44PbybghTUSnWbN2PWjPU4yfLLGeiZgJXth3mvq4XgC4QBn9BhsvqNgTFUirh1n",
  "key6": "2LrEW9sMQ2nQpF7MncPo6z7wG32h9vV2PhNVEdeRDRhKABwpNxFiTbht3Hzsn2KvZZ7UguQUccdpBPaypXkZA33M",
  "key7": "2jj8t62owNoyLoSZ88Ky2L7AemGAwKYze5WhkS4g1TxUPuUkgaEQ7fEBqqFXbGy9nXM1ZixDkmR1Xqh1Dvg2zLP7",
  "key8": "5Ghh3ejfESzkYCvib1vwGDgD9vS6wjQsn5CUCBnZHcBkpegy7d7cXqNpe3wxGFQ5ArH7GKU6ALVvEtxuEjhgw3rX",
  "key9": "2aKw3h8fT8UgbS5mr5eGiCzQqCWHHDWcmu5FnJoGtpXjLAidQX2t7Ag6c1s84Q2XZQLvV5iFGJ2wmnro8ngq7cNR",
  "key10": "51Riwgn8LBxLDjBWoFaFUgnSFfEakPNoy3B3rzrvwGVuhANv1wqn2xbB7AcWsQDDXyvtxvfFdYffZCty4taioBmn",
  "key11": "2UXWmYxyeSMqkReqro379KeBhrhtJG46YqEyfefsPyHA3M3vopmXU1PCEyPHKNPYQBTEWwPUd41QQHA1SfMiM7oj",
  "key12": "2n7ughL8fsWi5PqEtuLdAkhUHTLNSSoJqgY4D2wqwdcjZZ5BXHTVV8EcaMe687C7UTaa1WLdAq9LZ1e9mSV2GWr8",
  "key13": "2x2kdzmRDwL6a4yHxjzsdcRjEQHy7L2QXRCyYKyat5rzZLcruf4CabgqcqDU2cvpidg8eoHqjhN8whttkNkRSiZS",
  "key14": "73MaDyUXMZnrfwUYX6huveTjCP7VoY4Sptcjs7YYvaN6GKDasd2LGDWGGpLTFwpCTUUM7pdCiJBsn48LGRhUEhE",
  "key15": "5Jd4sf2ynf9kj2typNHo3PrtF9EoWeKhpijvbxwmkiYncXFv2XyLCT2FYowmPp4onh1iUEQrzfeugZafZxvHCTwU",
  "key16": "63zU5HqFRvXyh9iwLrw9A7PSdKHiwD849kVyKXMUSqSFyQLGMRHM1msDVoJ3pLe5MUKgCQiexxuPikjpvDogR36S",
  "key17": "gueVbR34qSCMY2JSFXNRFi1ncbhRMFhdTBsFZYH2FV8ddt2XzoH8mwbL5hW7bc5VQndfHibuzJNHU3LWw3X6oP5",
  "key18": "63qTUFUJB2ym8f7Jz5r15NAipcNkDPSBk3JUfbDVTmXbRqeWqYDjMuUxH5XLo4k2FA81PtUJvE13EbXKtTVh22gL",
  "key19": "21pWDjThAjwsoLMJWvb2QZc3DEFKfH2aaj2gHhEMXCjhCaNZaFCe7x7iV23yCaUgQZcFK7gesRZZvyEoCYFio6EB",
  "key20": "5ZZ1LtUcyu3jars7cNfYRhtWjvPrYgtJokfB2QG5t5YYMNXmEUXm1bR6a9MH6X1bLwMGzjd9jbg3hpqMbGUTinwa",
  "key21": "s1kw86qJBSf8wc5NBGgbeUjG3yeD2sFMHjTDs49Lw1vYnbCeG33aaY3h2brQUx3bS3UiQFfdSDsiki16iuyKSoh",
  "key22": "6ydf51VqHitTWLgdLGdgCH9UeB4ExHynCqeDeaEHdxVg4L9bRyaKQqCNLSkvJvZUHRaLMSxzAJKSBvWY93bqYdn",
  "key23": "3NHRmE3G5ADdywRNh4W8tfma1hLQveSoCoL6ZdTSNAThWD6ZSu4phedGioZFcLzu6H4mPPoYY3msQN7ppPabuAPE",
  "key24": "3eJmkifFzEytEopasCJoa2hjGWZkMQdeEDPxyrf78TpQ7ZhcFu5Z8J76FhcKNSdbTfGxHRG7nMUSaTZZWiX8DNgG",
  "key25": "2iLyQYqFEm11FMNBxpgF1vfdDPoyE3oK364Lodo8xHGvqzKSfBB4eoMpce2TEPd6rG4sqf74qkTFuGQkH7w4914r",
  "key26": "59eT4oELvJBKrZHs1etvvRKgm8eRTfP89HV89LGmkqXVgXYmtNs8Qve7z456jjDUUwoiHT6JuX6yCs5PTSAaZQVC",
  "key27": "3mNmRWrSAuLBQaQVkYnt5GXVqqTwgo162NDbLViG5NDSvqV8yNmhYFeY5T18mD34maKXVZumZdxhtPmV91hbQ5xF",
  "key28": "2MtRgxoudHcQVPcGsEhoJymaCBSNi2PtjS5CvuZsyFoT93qD6MVFbt3iyzyCjZNkMpeP1Fyu3cApoRhg4DAr6U3L",
  "key29": "3aD7XPqpjTGCy492H7HvQoCpyptE72hjGCE3KiQtg65JS8zS8sAcXUwrtqYgNrmsEmo59HDAWRvRMtzxhEizz5Tu",
  "key30": "4GmYu8CQ5Ltu8ZePj5RARusmwrRshKjSkDnTeXT8g6T2L836Muvra7gipfmBbRs9dFZUQPvvE9Uj9ygpWz3UGA5n",
  "key31": "4K5VRuPXYm96aHrj2RJzD5jZsjiKwPo6aDpEfrHoW528bQvejPerqamn1a3oiVpKquBWpBbHvqownUF2WW1KTRQB",
  "key32": "ZZhgTjBAgRQoLjyd4hteL9ZXE4a66FHbqBhefhyLyjyJ8wB9496zgaWNfxmF79cD8vXefRj2Vv5eE8wPUPnZdAP",
  "key33": "5J2rnPDP4mMy1XH6QcafAqiUQ9u3QjR9MYJpmn83PnxLh2H3cPwcHN61EqwxPMnXa3tAueFqvdiTa9Zv9gGbjxpz",
  "key34": "fuPeXjTh1PuPaB7KYGLyGNuHYg6EHEkjdonV7XPeZRbNWmZMUXucmwBp26Ntacpq56fw7oc8Ka1NakC2cJ1dVN6",
  "key35": "3ssztGA3MGGFgwpGoZLby4sJEmGfGNdfkM5TpVkoauyegyVmvE8JnLEt2neYaLU3LRyoV6fPR5WhSGhjVbHboEJi",
  "key36": "m2PZP5a45EVxeuBGEe9AozUsKCVgurYS65ySLKQqkzsqdtgLopEPwtthZAez4nAZ8nbY5C5Wi9Djy9yi6xSGxtG",
  "key37": "MChfGBDKEK4C3QcCwDwnuTDqeBSQeDxr6Q96uzUzGS9FneYD3TtNL1AYtwiJtug2NMaNrKHp6myccBWN8i9Vamh",
  "key38": "zvhz9czY696dUXfAkvi7BzdfseJvptsBgRyQ1HrhmqBteFfYK1WidnNn2ypkSR93BxHreCDE7g6uKVVpuof8HMz",
  "key39": "3XsBvGuNgbWAfaRd47Fbkz9RMkwUSu5YNvo1fzYgdavbW8acRMV1z57qEWKtvPrjSx7aSic9kGJ1dU8dbSX7stT7",
  "key40": "48XJQ6HCYErXxWmJwzMHTaQ6DP4ZDHo8uSA1EANXhbnT8Eed7kPMZjHRK4z7VTJz5XvxJ8e6gWHLxovSkFaajTDh",
  "key41": "2yUhBy4fHf7bJ5emoV9qc2mpow4pCp6gJ1QGmyHQStHHwSF9KUvw1gKkUCRooozqAmncxe12tfbU9n1bQbPuskDC",
  "key42": "3ETnvXmDubF8SZTSyEozNt4fXrtRUz3Xv5A3NxWcULcPwepnqcNCR2rczGk3ybzuqsbP75Hjf6xZCV23yaf7u5b",
  "key43": "5KsLrJc6EuMi3L6YZcyFsRa1RgiKucjMWqzhVkfounckdswVuCAq52dQLMS4iwZnNiNzSXCScCUm1Kky4euyfafU",
  "key44": "5mhZHTPeTKfF4BETLMZMCHMooW21YgHC5eGPidS43P178Hxg6FXWLZxt1R4vmjKLQJZL2efC7e7E9bPRKptfMUZP",
  "key45": "2GXvPZb2grHSHhASSKNZjr5GMXmnWYLie2SQAwPFpANmWqC2R5etG4wZyyq2R3TPqPfDxwDmGwuyHfb24Zpm8pFS",
  "key46": "6387SNQTayDnECk67iA1U9QJzK3ipkZ2cqE6DHCF7HKsi8wCGrN9JR4FEX76zSNa1pyVNy2pQpPKLbJbHSuW9qhZ",
  "key47": "3zRhw5jBMaZ7gwjBW8XF4rvt2dvS54YxHE9So3KiuL2GNJp5AnawSTCBFKtPWPZq5VfvrbKA3URiP8qqUBkiVPfQ",
  "key48": "3rBZMFXqKMWT6ZCLx8BDZHQQbwmARdaRAQazams8sEiLJ7qCkLcbWnKDKnGru4515gpPwHkvuUgapuNv95tQfMgx",
  "key49": "3x8xTtjvpRM2XQNsM2qr4SFDoEjw67qyZtPi7ffXd5odVYXE3r3fUC3epkbhJ9DNGcFPCZ1MREQJUkSRGA4A9vYz"
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
