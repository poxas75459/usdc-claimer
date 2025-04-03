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
    "39r4P6yTyEUyigLY2HTUhWsDdxSaXx8XrDwqygRFtZvQeP1eHFcDC29hPjQ6pq3GvjXfpnAGB7Mn2cA3uNnSzQAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6zuiwCb8SvNJS8iWGCCqU3QJg4KBY7ytBNMH4BE3kTEcxZFeC93wbvFBpfWCTyWPgXRtRXn9tYM2nJt8KTWeQh",
  "key1": "5DFKnYXE7zrb2PdvyRWyuPPFzGbW2hmxm4uKbsnJqKvTw7WYYJVMtEQdjZS7LvUhie3UgmRjomByWXzjt9PcjJ6v",
  "key2": "3cR21BiyVx3bLNsMmzYUM9nEZS5BrW9H8jnEyEhkHgnNMjcLaN9dHAHtnmtXGzJij94kfdTBNgGDLQoXKdd5Kfdq",
  "key3": "5FGisVgHX6hYLAMsroydtJoKGR18XgEXseSaWhbT4JgzzyYebYXh68TA5XCkK2sHC8thPzQPVTTW3m8GsP4keFZu",
  "key4": "2thGgeLVRpBjxBXVykwqDF3UZW865JSVEfxVyFeLqcmwZRZg5nNWGqdTxAcNpMSx72U3jZUWk38v3YqzVmCQ6mET",
  "key5": "Z7v3zVPmkBa75WuyPBYRt56HtahyCuaHcYRqK9fGCQ8S6LGXE3GUppchwfjzxch1Vc3YPJxYy5WV1YmbF6PSVpH",
  "key6": "3t2FqWSeLE2DrT4USibfyTDBZNtGbNwq1K9vCiDo2jVg3BZTRRCCJL8j7xG5hHqPp6gVX4e5Kt4nMG8F6d9c3Vfs",
  "key7": "2DgpiuTtBnuPHMpPHeTMbjeX69upr6MgDqJijXLmqJTC4GrBuqVoA1SwzuHKoJvAF2b3kh3bhxHUz2bb6ChwDxbD",
  "key8": "2j3CUatJBzjeL3z2btE7ni5kp2DqyaDapNUriAzaEyjuMMGcgrKAKpvoaZ8uRn1Q5pxERKxwsoR6inYTMyVBKVuE",
  "key9": "2c49uq5Y6rVMqZmiJZFrMUF5mEhPdYQDhKsuJdkcquJo82GNFQYPGrcXnb5wiSsGxpUDDFBB8ZFpnZYt1qQfaXFq",
  "key10": "3yAynCbxcPaWAqhEiLzkeVh91GX2avuGyurzmPzY2ow6Cvt9knA6jCRN99f2cGKSAvJAkGuvR9nVoe1aidtoVWz2",
  "key11": "3oQoCbeQ5YpD5YE38qovQFqF7V1Y5nahYvDn6xftsmXKrRZFsseCkCzxVknMVvmnhXEaUJaroDNXEf715qPKkSJ1",
  "key12": "4cRB4qgU5dPmc22V2bErtofSSiUEMvN2wKtXywUx2auJN7TJZhqvCe973FaVriTrTq1ZbAAoirjPWc9f9NxhTaYx",
  "key13": "YoMkV23YNRmodPAeedfkmqLnDh5jY9WwzQC5JXGT8ygJb1Eo7yHs3u29Pg1its3tDyL8q17eCmzh4UFCfKvpfwn",
  "key14": "NJXbijfsAxVqQ3T2iAsAnnGFxsgKjwQWqYn28Wk41vcYVpRFHTXjhtsJSFZGEqAJtSu6XLFcCKsVaLv7GzPJvDy",
  "key15": "454YZTJojWB9MBviMUyh6YSYRNp6KbBhHJwpyEqN5UyYCSWXTAUoyz2FTjU5L6DcS6pdLr17uvZP9yYqghnV29dn",
  "key16": "5roimkJaAJnFfXaT3Ps8fie95uxxqYTgP2uf8MBUSY5RoekQv2qMrzVKfyPxU56pqQervw3aiQ3J5mUdUwfnwH5V",
  "key17": "67SbWJbwYvLTMdPqXFz482reawgFhMerAZ3TWbvfr21HnjQCkwwHv1Hcyoj6pwQNiLHrWsjG7fFmwcRMCbUN2d5E",
  "key18": "3FXXEjP4mSJxrJesTgNQSs5QaWVE5P77ajbHBTDbPN4UXCNuAnzedyxVqZMArfr77cPAvYDC9kvqrNkF7uGxphLC",
  "key19": "2hAqR1ZLKp1E4q7S1wbG5jmtJ63WNsVEzNCDfDsZaehXLoJjFLHSYXVRKhdVAC2rubCoxbdY9cEdi9UXM35X83vT",
  "key20": "4CB83pQf3375rgmLGh3ntBjMBbMM1aZSdJJNQ7cndP43p271PpGui2Qxc2YpG79c9LsAeAKMZ9cXoj99gpuUqPgE",
  "key21": "29M6tW9Lb5DVo1AwhqcL23nzsaEUK3m5GFLrzRVrrZxmAvJtni1YpFCN5jiQyCAye6oA4FRBgTuUy3zVErR4HBXf",
  "key22": "4DJMUJAzkgR7xRF4DhUhtTrKqVBh9cRhAdSym6cejNmJrHVrf5MF44wY5W2adC7CXZH4XveRFKQujRM8VWEvHT6s",
  "key23": "Wn2eN1SAWWuZDN2cF2UsXw13ED6rS5wCMM17Qwj7N5svckJVa2wD62Uhi4mpSApzVf6TXDEA28H1qNeWuLu3EwX",
  "key24": "27htKWQmzUb25KKW3zjeLP1A4KC2JWAnRGo859RXkQhfyFcnq3pVnSqKgoFr25PkNPVU9bhEfw9PrzVLSuoLEGmj",
  "key25": "2DFKhX8VFfaUXvUHswsxaFFYZMqunDf1ct8rzu4CMhFz6KgAj5c2NpL6v3skwXZLBQkv5wbe1AmUwoisX893fY84",
  "key26": "2e6pLa5ZVBStLYaAz5JWSNqSAPvDokHS7bYwi56Gy6XNxzruRANMFoyFRiF6orognhq1wA7Bj4jYTqdUUqQ12JwG",
  "key27": "4XNF2iCEwDcg15KD7ie3Uhk3Zviw8zDmiAT42VQj1HwmAMDtZic3kcH4KzGPWUEJzCitFL9J2CYPoYcX1ZzZTqns",
  "key28": "47aTSe6pztsc2MD48S7Xpd9Fa2uL6ZaLddwv3u12y3fKxRWS7xJeDkGo86ZU8gJUtcdzwYdqrCXWkLbK97whr2bz",
  "key29": "5JLpFoP1hhByJej22vuzH4TdUFNKEu1vJK8YdzZrrQ3KeQq7LSv52FEPxNy9BJAAkw27bgeUrZdyBR9kJwy7hKEB",
  "key30": "4YMMZD3wF1sfzExz5TBmG1zk2H8FKVw8JCFd4j3rtRKVx4qqi7PZFoFZu8jAxDyrdwc4yrwjd1pArqY1WhDpNtxw",
  "key31": "4U94bRoS4f2SyGj9RhuE2t6UhWJYxsxrhcWg2WuWjvdxxygYbP7TapP8BKPRwhcBHZYeWUxFKTfVqT1y1VdKbKqF",
  "key32": "5vtPwrPZVoGGvCA2cgeCXG8a3gLJjrSuoqtvTkobqKL6qjwBpV5N1QPdosCVzgw8AFMdy5yUQ3HWToHMGprDZhKr",
  "key33": "3mjrFLHhprLAJ7UGX7VP12oGjHfHeVmfTDajF5UND5otJzcnodBZovxMkW44ytjbeonXdt4q3jhGmGPF6CRBEK2t",
  "key34": "yAvzRzShzf3cFCEMXf3wLXqcCNuZdCNErf6fzH4dXCtiag553tAXFSnruJi9Qdz5htHQTmnQWrxsojEYLePPKQY",
  "key35": "2dtjvLtJBGZi3kA9WnerQzWbQMGYuKuMk4PbCLHEBagpJ667xp9oDwAHb1yqZ1h5QgGjZSBtyLrbcWUxWd7BcYQS",
  "key36": "KAcMeq2sjzECcFApf6kLCS8GyXPr92rficAGrQuKfUPu6ChfRAPmcVkKpVmmyE6V23VUFqY3fxTF5kcvqhWephE",
  "key37": "65aSUshUfEde2QcVaAHV49Srkim6GPYJkVhpz4W1VUfzwMiJfZJWtNPyf5WsmYSHfuTVgVPymeEF7uoctJWceMLi",
  "key38": "27WgqA8dZLoPLsYctAyGdoqXjXaFWpqxtWQqv8TcUn3Kc28X6oiEEv15edNzUTiWDtNekfKSaz9xMqxKFVGRCLLH",
  "key39": "5rEEFii7fKzTPYHVRyuM2BMSmaxkf1MMTgSq41gFWyGVmVsCvCTqnoWNdNBaqqJAcDaHz7eygzqPiQCScWwMV1W9",
  "key40": "EK6tVbZmH5wtR6HUKhbRwXT9NBTCpWr4J2NmzBe5U2DRQiiYiFAbXb47mo4mi648Wegdhn4riQFzhcXAaonzanx",
  "key41": "21hoj4PxqrsE4wDGRiLBvNgfFhjh8HConJ3zyjXfmRFuUKVC5USzA47Qzv8fpC8Cj4dPBdJcMfRddoc15QpeCF91",
  "key42": "5kTXKVViTGT96hWvDLEJcNVUM5mM7TRri6n7qGTW4DDXEp2Dw4Kjr85cA3cX3m7Aduna1Hwx9ZMhb5FaCgy6Whtw",
  "key43": "3uiP9M2sCE2sdisdXbK5hkV4ZKSeZzErxoS4MkaMEdXrCBgBRf8THRpbXkozxxKwBJJtGFCnMN6SP7dxi6YJBEDb",
  "key44": "n8NeirzZUYEMhSjUGV4yyEn8yb9Epr5LjjxsPiDQw4FfLY7EVmW7ANAukZckWvhdAkBGLCjzHHc4PjYTJehUkjk",
  "key45": "cKXZmFUm2Tub1Hgca9x4WbNZRqmCcqYEA9WUzUKFgEno8bN3gsLbDbayNyk8Q5oEemAk9E1daQWVSfsZ5CaTZJd",
  "key46": "EsG9w66vEVCAtc6qWVY6tngmxVPQBpLHEEcJZn3Uum54Vn3rXKNgJBjC1Kw7udBX2rAAzfVMkVrBwdKqoQCtRUT"
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
