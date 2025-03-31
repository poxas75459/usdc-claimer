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
    "5Ezf85nn9ja3jnj93RCkbHR89aELL28y58fQURouE9miGMZVreyb7dHhdoj3dXZU19WVwzMiH5DMU8rokmud6BV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyi5FBLeWKXdwgBDysDh4WxrkeNRwGj2vkun8JCTFLJQ9SC96Lu3LGcquDY2KSXU6Rtxtt2QC6n2DgMebqzK1aV",
  "key1": "uNxbQ6iCQn3Crhp2yHKZSs8URgNJiEcyoWwxSgPDqAFZ4EYcQ9oJkyk3Hpj59N6kbNoLtyn152ggG6Uo3FpREWk",
  "key2": "5WtcrYjUzT8ubK827wDC2c37gT2wVJxpNvmdArS2fGSug1wrv6PqUr1R7DJZo4PbhC2tkq4TxTDwJ7kqt2zACRvv",
  "key3": "4DnmGjsieASiH3xJg8HToFfzpsUR6oQFxSwtL7EqbzA2KMZ5mZK3wgucYU7dU2MtjjKg2we2AdavHkXGj34WNFbT",
  "key4": "2qydPWjkdjP2jEiwmnbLs1RWhmddmBHaYQSXYAWydAGybHsUSXrErbrzrRBUJETBoCF7upnR9GqJaV9x6Pm9GkTB",
  "key5": "3p8nno4oMrFwyik9N6AHZcMJkkFtPmbpjW1SstRUbnZPojo3eVV3WordmoLZ4frci9FhGQP7hK9MoNJ8u1oxaGeY",
  "key6": "cL7TJWmFhRRyhdEhtf43MLFG2F2mmvrtLv45J9jncJJafwS1n5ECmRghZ8QgSPLNCbouEQsmtWh6mGpGRXNnanf",
  "key7": "rscp6H3y3PGadse2HUxg1KGrfeWqGMhtJMuSQVPJaqPoeRVrn4Cc8xntDkzYN6mmrpAUSc2MP4suq9dT1ZYd3kG",
  "key8": "3TCJPSCYoHXkxNa57ezEYioYKK8qFkAJTLyEgekj5175C2jPTpoF89Egf3SUe6Q6xEz41ekGp3ggycUxaCiaCLzn",
  "key9": "3jJGZXHbdLCdRV7UkPpx4F7sVPqCnWUiMFgYbr531nbHDigZUP3kmTvMSwjzHCaQfquoib8uXVqwW4LiEwLW7DRN",
  "key10": "59wQS85ZUfkSCm4ZfLeDzjgKiENyC8cbzKVybQkCzHGP9ysuM5HJWgBe9RX8rbM8bXd1kc5ZYGQr5NAK3hsBv1gU",
  "key11": "3hKE23jceMfZfuh1rw7AZ4VmbDDhopaLg5asQM9ScXNsmaW4o1nr7KzCxmmkxdSaG32CT8QCGBL55Ey8DFrYCgHS",
  "key12": "3BgQeyn74cyJebGSjqEafhADSAZe3AgC6xuZNHsxCD814Qw69WFFSUHjCLZju4oTRuqubahf4RbmGiQanZHNDChN",
  "key13": "2Y967ReR5cBxMeZ8QYRR181XFJbr6pBSucPmpeHY7TJZSYPGXF7ZVQoa2RvcxeSsmbsbXnPbYWPchKQ6GiVZbe85",
  "key14": "3VV6KoJ48isQwQdDRqx3gtDBny9EKWNPK5zjzByXnDwN8ufRoKKXWWA1ePV7orH7xwYVhvPp5mgazawXSPxmEcwn",
  "key15": "FD9zNw91gQtLshzhB6AapBhWjwKy4ThrWr6NFddgXStqZi7sw5rEcEDBfXNUiMyV4P5jeMuZARNAKPFuyhmudBo",
  "key16": "2kqXSXAvDyHVrFSDnWQMot2KrsjqteUeoRwnB1L2KSwb3rQygFBnXDcV37VSXt2xTpEPiNEi8NzzUVNmRzjMe3Su",
  "key17": "5BUbYyQC2bWUXrUr5MvYMFpTUFWNT4SV8o7Etm7ZkS43kkVTSSia3zCqehdkjvNS7thgjquFRc4CEwXwGbjobEaA",
  "key18": "3vZs4HSmpBmEZ1X1TE6Xzsr5y6LXFHPcWDLxPJD3oBMJcdzDEiZrZLnNXZbrwB5poNgGKs6PQwqKzjRCqDWyQq5B",
  "key19": "is6FxGLFXssvPGPtUgw6fy6eoS5Q377ucyrvoYqcAZvPF3eheg1BtvmMLpXeWdDc6ufWftFR3PgDLWqdgu1KYey",
  "key20": "a1UQZu86Dg5Ss5dz44zCqrTNiMmjjuGws8fhheWcGSxydzCp3AF9NGXcRvyx5UxwrFMDau1CuUbu8FACfebaWXE",
  "key21": "4n6UZX4vEXzSsMttCcvhZPFQLgdCD1f7Co56JZg3uKLvDL5DgVCKM12a9YXNRkYCPyHRqfGefiRwTYJMezo6vHf2",
  "key22": "3WSRhaVGQ31rP7PDW6wSNrQ5mywFxoWFYUji8WCYEiypqxiv7zSJhXbLXTiWKY8kJFZrqe75fXkb9ykZYx5KLFAk",
  "key23": "2qZGKF22ptXYde2MYo34w1PCH2Y11GdSCADXiJHTbuy2BpqFBDAauecXKRRP6T46h5q8gnSYQy5e48Y2mkX6HUmQ",
  "key24": "4FzDzoCiE4ZPU6vf5FoB7tXMW2msTbWS3UmF9cmTyKyDcU4hMDNAXgMstCHk2fHp1DKuusfnLrCTJ7vgrHzbdZjP",
  "key25": "4id8ymfxXDKTud9sGzVKrziqK2Ppx3L39mvZvTs76pinbS7Qc9dMHGcxgW52CqGRZ3RcdJtHp7VAo2bw6TeL7iQr",
  "key26": "YXrryPNU4HhEjGmo3fp1iW3RHWtBpj7ZMqamyzJzsXnGLygBuWiyA5tCSZJoJdD9gnCpuWGBqdeYcuy2VfBEzap",
  "key27": "57Jizm7RkxWmJb2xcAZSPcSZDCFNrdYra9tvAe9UD2a4mSZMszg8AWCBsfZqQDuXXmY59NCfgX5PNCdDEs8suzsG",
  "key28": "2TGENqVtp2qbynnzpNku4sQZH8mXijnZtoc9yhs6KZZBqFCi3A1Azbru9R9TgvYRzTRqUJw2WrFujRyyfYK5ATrg",
  "key29": "2JmFYVxCn3seZwbsbRnRAsCxwtkKJRfCXVxAkr4UPoGDe8etS4JxTnyRPbUqoaqwbAPnNoa1MPDqm9wuiwPNwwVR",
  "key30": "5n67qwGCYQL557QZVVzo1VD9JL4ztC2MVV1C7qDbPm3TZdV16nRFkmzNDRW2pgfV4UetmcYF3H5hV3HguT6qfZeU",
  "key31": "4o2XZ8E2WrAHMZ7q7QWi19mqh6XP2BcshbmuGExBpeVhhN4NA68iQDuKXuLukQeWrm3aGt4Nc9DXgGFMPqeWbEKJ",
  "key32": "3W6iFbx3zyzD2iEvHswtfkY9xF8EXBkh2RS2a5XQTN8UhBCKBswhrCTzdkt17vVfsZG5zWGkpCkr9p9n8LL77P3E",
  "key33": "E9HNJ99dH41k6X9q6yNFoeqQJ1UqKycJT2htEDgGEWoKopZfHJCbe3eZVsdsDue4ddo7HqCNU3N6CkaJrsXEFWT",
  "key34": "5hv3f5nscVYiiRFqxVnMmKzF3j123hThrji3wPujZjkXhVeNaPk1GY2Y8YruegeokjUo69Yf5zTzfeyakeHRyovj",
  "key35": "2SHAz93rDSu8JCgvfGAasRm9tjXp6cNM2WMj7DoaXe2Nzu15GURP2iZe9AUY13FfV8pA1uphqbyTQomnUPzEhx2t",
  "key36": "M59Th3eewJYdYpLCxrZzCiiQDnujHSuhEyCR5A97me8bqutB4ps25Xdv3TmSL5RKX6vnNihCw18gTrQV7fKjRgG",
  "key37": "4Anuh8DxS477j5g5CAJK5Pps9as8cEL2jTsNWHyvynAYqxVCQMGFkk1tRHaqd7ZHL42Lb2mv4og6gVqnfHifzMjJ",
  "key38": "2MzhHnUCqyWR6bNmsobULafhEFeg824n8YSSx3fKqaXdaVvcyyCV7QxzwXuTRWrCgisTbRaQBdNjo7nY2rb9b2LR",
  "key39": "5kBaYUQnX8uz9ykmwPWfXVitR1krVt6E5eLE6trMuSDo4W9v5zq99mNrpx5nFv6okTF8BfsYsKsByP6VLRNa5kin",
  "key40": "3yWe5FKNB4m8XG9Rx2mbUXukXtWH2TjqqiDoUbnLHB8Yz51Xoi7e1VGLR89cpuk1mse2yR8JD67i6qFWvexXYZra",
  "key41": "352iC8T3DDNNPqo64uFTT8VXdXvzHbFFGbuoCxZt7GAk7jHofHb4m1ERZ22w74VbGr5emP9ezs1D8ZGXxzKURTMf",
  "key42": "3moTSvP2wABCmZRVZCqczPg29KRni5c5c4QKeqqHeFu8nkv6M1nwsT2YyqdfJ3pi3y85mYL4VUEEmuEGUmvdwxd",
  "key43": "2dF1xttjtxsxXH3CP9uyDSi1EhuUGR8DK5YUUmgKF1VpDTmvjhMHNNGWUmgyoT52sVzzts4ETn3SadfnwQK7XJJ2",
  "key44": "4Gk9V7tNvH9fy1XdmYdYwPR2q9yF37PS9kX7d9DAhzXHBBwhhyWr1DbTiZMqs6ibcBEX8jmXbEmto4kDhXjeLTik",
  "key45": "arCymDtL3Z3AYgqhD38gEBGwuUJDUyJHyrLEiAJtQPREnPQELsMw1FbSMccwAyx9bJxC7n9aaCUnL1e3irtpBny",
  "key46": "46fdbkCohGa38CTbAK2RJwize4AYoGABPVScKbxgFwmDY6ZtM8ez85UJJDCPKheK7S1e9XCYwpFZMUyQM7BsLG6f",
  "key47": "pCwoAkRuJL8XtWQ9gpu8UZSHFufY6uFzxp8hXdtF7dgM3kpycrGsrdXch7Qpua2doWMgLyPknmYdfdPArjvhbNT"
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
