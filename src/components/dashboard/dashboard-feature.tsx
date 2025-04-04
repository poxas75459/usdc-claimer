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
    "3V6XR9weJ5wtpBLhX1EENzDouSPLma97ptYcMFV7UxvrfzsUBxpFHEMwpMDLDQZQtEUTM6Ns9D7YaD8WCJbVTTFU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k5SxF8kZ4wctCiN2ZR15N781R6kFB49chdTMeATQPqxFYhgGZuMDoRUf9wgnsPif7ZscRyGHoaUqSAJe2kZSVuP",
  "key1": "nK73XTLdooS2nXZyi4sszuqpw7GsmHUucBDGjztCC2hHegR2vYZ19qbmQ3tdHA7AtnD43FQnnrp2EjMYepQVM8Z",
  "key2": "45Z79SzFxQ2UVgcs7Gx6tnVJYkdkChPLrUfRRnacQzrTBJAkUiFs4XWkW19m8kdp9no4MhAmtYPkiBEvwS2USD7U",
  "key3": "zLjzyovACKfwche7SvD6Q9Hvymmcs7cZw4dni4cXukayNkJDqM24fFQjQQ5q8RyGY8FCcTnqRERTjx5XcRymNPR",
  "key4": "QVzpuDF4SudRYiR7iSTEmoNKGm5xC2aRLSJhEp8mvT6a4N4rv4itkmGS9uCxdFkZA36Sv4RxaiqTzAtQnJQXszA",
  "key5": "pA3BeLLE64Ue1BcvnUejCqp8erXoBPdAZdSrAuhxa3HhMifhs8uamwkBYMjA13496MmHVHRSXGsfRVxkZYVgtwM",
  "key6": "2EVqWsgXCrm2bDc2xG6JzYqPrkqz67fcfSo8SZnJmr4vtDm2Ws34D4ceebxqi7Y4hV5M7BSmtQSdNRjLypsAYvx4",
  "key7": "5xbNpoqEEyuFEjqLenT93HUud8zmo2Kjru68Ak2vRGepRoE92c7axePPYiPMuVzemzASShL2UEqzfjrkpBBX7rMi",
  "key8": "61DTZK8jXUwqD6fCrjvT2wMEy4Zg9SL51uy7UeaMEVP1nhh1FZTttjR9PEHwpH6FdM2vWXvy6YtQUVi5bGXkP3tY",
  "key9": "5cscddAfjhdkfQcivUYCvUkCR9e4VGhqLsGdw9XDfupAt7fzneAe9Nx65HmvynwCd6tQERpWWvTEzJega6Mqwphi",
  "key10": "213JF7HsWzerKhzGsJXJhF5ppZjBubF3YLpEyjJD2hHmBp6GGvkLpa6tZADFApGxrvBpuRHc8NPkeG2guJiBr5Z7",
  "key11": "4k732fhDsFdbe7MvRPvhRZeUhxSARtY8eich2TLfeHcaeX6Y5Jz45B3jPq3J3PSXFLfqNrkSBazgmddFjDrhfhvS",
  "key12": "6269mg8h9RxgV1HNShgn53s4bpd39gVJe2tiEJ8nq7YFZPpNicbSY6wWUiN59P4onhFvxV1Dg5yyCVxDAwCWcYn9",
  "key13": "52GuPGmTUyf9WZMTg9ihwHBRLuFRQzNpvKTcz4tQNGKygieBys7pSPYYGk5pjXouYgTBoW3dkC3sdC2NtXtKQTk1",
  "key14": "644osWMPzkrbHvazcwWxbmK6wGXygbDaNbvuk5ucR87AdQ6A89Md5LAtJnF8kPou1STKCCE8zuEwX9oTAzsaAiUN",
  "key15": "5BRR4jKjhHBkvvGcXhuPJG22pD5XnwScDVsJF1vSN3vnvSmcWUGFSdosVbPYUk4dMdmTavUj3uG74JGS3dWbpnss",
  "key16": "AbP5MRXB6GfRsS6hsd9KT67DWmmE1ggUCpnrtf22XqvaDG5Ae2Rje5PyutR3ERjt3Y95cNEu4CbbjxyNpfiT2PK",
  "key17": "3W2Tge6iiTexrsSn1uhPymDxVBfgDxTQE2wEx36qXqGFKLySdZkobUVKWW9NS9YNDh1x5f5HR1ZgJK9Stv3nsrtn",
  "key18": "4iHqHSZucRA8Fdtqb3SDKMwtojtBAUdLHD3oizwTBz5tjxAZ3z77dV5DdjhxfYijwPBkrfJxCyvxQC7pUqfJXxCS",
  "key19": "4cwwpmza1kzPzt3n9EbaqMPJKDrCZZz1RsCEu833hrMUdCAxLbyLXXy8qfC2RdsSbrvtKzbdvTmMBYtQmC1cviVi",
  "key20": "hogXFt6CE72SXybf4TB4r8p6CXivi1TP2VDCn2W37rn3MMhxCgJqU2joCupc8u8rGrzWxGPqqjksLEaRPbpHHT2",
  "key21": "2pTDXRFUBP8MckxW2EY1p2JpeSm1cERq5Lao8rivbWcKvtKmJ64ig6okincmDQKtw9qQucmUiYgy5y2TTk9sqwCe",
  "key22": "5fX8MLK6DXPsnsFg9xU3drXzjwCgTFeqcAFpDWcDUqikbv7oX9EjCVaAQWdSYSgz7HbbG2QzXbmv8odtvSysvSkL",
  "key23": "5AADDKABgVgwsrUBeyBxN1Hvnvjwd3zhx2KgPMS5hFf95WPdtW5ratZs5psjX3jz1WNFSAuACdxihBG9i4Rzn9Ff",
  "key24": "5jqeRjEyMJ66FvVPV66bC6uirGNCLkigEaVeZ68kJkz154QekarVz75Qm3fUKWMjMAypLzzgBXhvs1sEk1eJRf83",
  "key25": "4wDpbABDqMCh8Xu4HNQn8u7pGKCzeoqxX7bis2Wrx4zdsQAx2X7tLTtrzRmsFh12TbHzzZLPjKk3VxA1ES6xdCSj",
  "key26": "4REPAETXngYjVAPQSXCiKc9jUv659cdEpmTRYTQnawv23yJPgBc7HvSp8eRrkyTKZ2bpwG9nVWN62ZfpZjuC7jq1",
  "key27": "qzdFf3Pb8ixig1BBQWkphLHwD4RdWGTgGKtrkf17F6V6hr1n4Qd7kj6QdpvvaQ6yKE1u6pb14w8qzKH6jEMi4KF",
  "key28": "VRSd7YT2hLUEo7NzTnRJuNu5VpSV3r2BiFFDsLfvJ21y5VUZV3PX66VYSZxrP6pgRZeGJwxHNVQWwjn7vwSjdiA",
  "key29": "2g1RN62oEQrWahPTx1PgqPwC8ThGKASagfqfVnxrXUQfSCPXyu2NAtJsnABUGuBQ8yAnYMuXKbK9s8bnGFacTfi6",
  "key30": "3P3NeG3F9RehaGdhT8fuogcdVKu2iY5aBCAVnvsS4WiAtPe94SCHE7oiRSeq9ggZ6GQbMfFdtefw9mwuxHb8F19v",
  "key31": "8XE3ptBgqgVkCe9hYseCfK8ZDcBqaU5Uji6iV783TZXsk94xjbqruE4WqG7pCzsVV8peBfGZaFYqJN9t4nu88io",
  "key32": "4BBt4J33bVjd2Maw99zGgmb6akLqFxQ6zKWnErucYa5vrwpK2YwQMTaoGgE1bLse4oZ3htqGRdcEBrDgWpKBKswp",
  "key33": "2JDZ9QNVEJvDDKNXJSRLLYhfZCK6DFLCrhZ9CMXSLvq65p9WF9okYrKygHvXn1SE5KYfBNXFnQxQzkQh2vXXYdpc"
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
