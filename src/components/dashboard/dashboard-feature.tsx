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
    "3bQdBaGCBp3Aw5MLAMuYXKFmcXPaYc9zFGQCC2BkZdBZ8VemFZmvri7qrvUZojHNJq9pf9CycG5mAt4Zfvu6t9Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vSvDjbK7jnUxRUWMjtDTmkQC8pVtqpkSRHXwnhYJjBP7kcEt9QoS3rZMwK5sdfTdWudJYjTCnC9aMGx2qXyZi8B",
  "key1": "5xnU34EpnCgNNjRjoD1r7ApmnRFpDF6grCVyh51CdqthC2XxCHzQS37BQTmMySXPEh1TayWuircoj29UyFhQwUJt",
  "key2": "3T6fE7W8MGk6Dd3b4BQzEszMbAFu8TQAzah9E13dzwVDNdjYvUipd8ehtZ6J2EsoXMtPpddqqLt7BmLyhLgLs877",
  "key3": "3VfvJj33ey8vwxdFhCGM5vfy9p2cdrGeJzzsU32XymZJvP6KKtnCB1hTiLYgEvyEuxZDACcZVDGkmYdaBMvGn5n9",
  "key4": "2gLkytbZqmCB2YrxWYxiWvnG9y1URtCfybrXvkpbUjkNu3r3XXQAutShZ83ix196kG2jTyxT6P7Sh6M2xSvi1xkR",
  "key5": "3QXpfo89MGHGUdB5mk9iX6oH13KyXGHUuBzSAHtkNVuUyydcL4CxV2iTu5QKgvCWiYhatxVt4C1VPme8KkWHHyHJ",
  "key6": "2nbLzWFVBZjqXu4N8FDx2E7imejxSM6VYjmCZZ615mFJEDWETCY9MisfwjaMhrgEAxNaE1NkwsGd5ute1QVRTFBW",
  "key7": "488sWGJ1KKjaFXqbLNmyAEgg1cgVvZnx6vVmkPjTKZ58Ns2eDEQ6svzDSEjXMLAG7ChGhtxdC261GNnWHoiXkkPr",
  "key8": "oVPEgE8365zoqNU8j5VKbD4RMeP3eWYwkT5jSqHNVmJXvCr74K57ToS1hMdWdYDixpzqQpnnfFewBwafCxHwHhk",
  "key9": "2CGrLsYy9C5p2mVzLLbcnDAVDGbGngRF6jvcgEoGnmJD3C3wj5GdkZxTFPNUvZ596Yztf9gZN8qJe4w6pkchFahw",
  "key10": "t9rn1bnKxgQsr6pN2TbYtzwx2E3i81LhhSqcBPLhKHH4mgQvbM3exrjkiuk7jvrSRgumjpJTMCTbCCu5rxYjmba",
  "key11": "huhk38nTbenBPZSuxNh2cAqd9eV3HDmcMzQzRevPC2fNDEF1hYmFobXsm5K47uGmBtNFKC9JBJj8ZcY9n7wVJCc",
  "key12": "4cjo2f76UrafSTXtxNtNhGDsYiwo3FFUT8zpQwdyZuf3C7xG2DfbUxGMD6Zdtk2y5eAcwNMTY77aNZyutakcSrc2",
  "key13": "2hZZCtZMT5d3izHDsVFbz3Y4qnQV1PYEQJoo9xcmRzTKAMjCtbDixrscRVP3dzfzfii5SryrCCkZkxBAKs5mrScU",
  "key14": "47ttn5opdNeyepKTSTEoSNhGNM3fPQZNaKeqMw1EdRBjuEr5XoGxJDiXSQsfr37FxGZE6iWszYRWmrYEG87ekTEg",
  "key15": "7HPKqdq8FuuMUGQzNFr9FwaSc2VSfqNfV6b1cTNsYix2PazB7kmww8fzmzrWMEJo1cT6D2Qb9z4qhdneg2e7bw6",
  "key16": "3szsvzfug29YqPSzMywK1VQ2Q3e5gQqkMJC1NAUTHKqTWSPEBhmCB8bGMr5aNNmowfhfSvhdCecy5e5k5Cpn1wKu",
  "key17": "3nFrM6ttuxPCwoYQfAdDfxHqo8W8nLjRLEz63eZpyUB9DE3ALLuZCrsUPVaifSnKJKaSBKx76akCLj4Ku3G98V8A",
  "key18": "31XDHa48ybgPSZwUseyBEuLobbXvx1Nt6zVciRxbzC6iXqBQspKoJFNmD2gjMLsoPaBL4msFq8sCYwu9HhfaKzaa",
  "key19": "5mpgoUKNzwo1xUgBY476B9pTNaZ8rGd1xZh4eyAX6zYdtDEfgMoBwieS4fvZamVPKRf76XaLC5E51j3Ury7dWwoA",
  "key20": "eTzYErcpkMPsyGm7oKGT2HLcMf2m7C9NG9dZkK6M8pMtdpL5LAHnDxa8C7JppBW2zS7UuEZuqvxcGho3erbc5qE",
  "key21": "eTCvQ9qF133eqLatj9v5661GPy6uojENVvK1Ct57fMweCY3rcenh5Dz3R2sibxC4xPPmiNPWJikA3g8tDSJKNmN",
  "key22": "aCNPy38BkxqA157cgP4ajGgeutfFeL2sNwAPV8BwGL9k4zpor3Rikqq1YUQUFQFWUfpYYcvRQ9LLWQzQYQmh8Li",
  "key23": "3rYW3VBvq3MPvTsynoxpBtwDUTyQCioqtnzT2x6bzDh8CBP9MuihzDWXGSvCJnSSovWKGoZfuDWtpuen4ZNoK9zz",
  "key24": "44FGoHVTAQ9mVaHnjoGkwmuXPX1RYaANQM3MRJXYrC7b8jZQz565cSxrzuzG3eyVerb9P1VcVZp7Whgqp1bHMQGg",
  "key25": "2Qm9PZndVJ7gXyTdtvsWiYXFEREVSCy3Uqv23FSuScW2WMhm57AQYStc2FUo67gd2H4NJhyrBQCY7kYd5ybutboS",
  "key26": "48bf6dUskzcmhodkxMGPcAazX9Wp7q3Bb7Go9EoESeiuQpPRmrctr9haKuMnZ6mTFT1GYTx5DNa9Amv3xTk84ux2",
  "key27": "3nimvsYbwMocG68qSSrCuAFNRacaDSX8SdeVu4YXxvd11bxYQRJMaQEf5qnCRiwvYh5tf4F9T85nexwweR1xEia1",
  "key28": "2JUm52L2xVN3mE3VxDr2esT8pdsrQg9qLDzTCKUGYZo2tKHEpEggxh92Jd4Qmyqo2XGwtU1Z3pDq5hToJpaJu6kC",
  "key29": "4EvmX3jjurXBmV4oVx76qe6F1rb4mqxcCZihavLXJD9PkPXtNkL3odsBBT9a4BWJ4LJ7Y7ap9fRFN1JfzAVsiKTU",
  "key30": "3GhEcmDiu7JjoZXUy75NbU64TFRaTVVZufqhLNHsVya1baB4EVPJhCNG3MeRtFSRVqTapXS4JQwE6rAniFN1WNKo",
  "key31": "5eUp3aZxk16qwNqMAaDrSYszztBtaXyrWenHnsVQtHWUSo3qvnC4uDxrVjV1dh3VwhT5HqhDuZW63qtz2aHMWes6",
  "key32": "2jkVfJtppeKUQYgQvJfTkbAVkL4TsXVbKZ6XDtaA65N3JLXYgJSFx9ytH85b6pmYvGLZerWf1fKiBEw2SwpeEzna",
  "key33": "3npidDUevhzbVwKnwifPxEkht215LJ4XKKhTg4EknjJhBaLqHaXDpnnvX3kvkQhgimCSR9bsHnzaDW6MYnSGpxK7",
  "key34": "4atFhZd5Q8mGEMfWVjtA74CDrTkbad8r6hTpF7rGvuu5z4Gx5Kep3CBh2Nv2KbyqFwxahhu7vGQec65Y8RrNTmqZ",
  "key35": "nUSJUJoL2zft334iAGDq8GbLz92Myb5YJkfujVpoJ47Ed7hamoqhDViMNVSnkTEVMekqtFNm9YspyuBSjhwc329",
  "key36": "3dpYUGvHMV1a39xhvjyhvSFjxQqTA6ss8TTi2b9D23ExDicm7geBCvNqYp7qmW8dFMU5oZD8FvvxuunHDZj9crjh",
  "key37": "5N4UY2tMkjrZHvCWC6xKUNZJVFwAVu7DcNT7yRgK5oTo7CBkxjN2PgKC6itWhqhqaqxXf2TR33ScgQGs8aWSzPGq",
  "key38": "uasLAXLGcVPAKPRefSbgqfV9bgmmVKZQYPDtTsAayukQjhZJkg5ANmw9eq6RdT3wAKEEK6zPieGTJZJrHyG3xLU",
  "key39": "3UUbuvJNeMqLpb6fDPPLTKb7cgER23cJHGourkV6tKwP5K4C1zJXbHGQzbZxVhfGFV3GYznZo8Et3Kk4KNk3VMqB",
  "key40": "297rCG2M99XanLGBi89rxYsTJQHqdqrsXqKRSNeUbqbnQ9jnUXNe2mSvDHAMfaKa3jgGxuHeXHUeCnU91zwK548j",
  "key41": "2JR7RPzDjTaPzQwiEC5DRKaVQmpNaBuFyTFs3Xsc7EPMVXYS25qiBSR8GmoXoevzQsUju1E4a6reRyB275Up9dgL",
  "key42": "25dsHx9RwUUNU2S9Db1Jynz1utHU7nHMrjxp8zacyAuVk8DV6hzSu6GtXnR35BPV1vwRxxh3C7VrLKhPtSRp3pH2",
  "key43": "2qxGXMeGF3tZXvTqwY7gEasRpG8DfU4ghz3v8FFPzr6VeabRtNNMviJuJ9A2fxU1hwQ4JpJMJqNUH5dj5S3pDPwD",
  "key44": "xVeUUoEVz8HadNnfAH9hyTPMnyceUwbXPRE4xJEJbQvJQsLtUfq7cBzhSUWRHwMo78oKBTTwoQ1UMmsZ7ww8bah",
  "key45": "34EadLGbwkmdg2XzGskY6k9fVWmWSSvmp6gtgx2T7JN6mtEVRNa4DFdtZappTSZPn7SpH4ScmHVJhzhkec4rSQNg",
  "key46": "45aFiorkBU5aDXPMYJdYiakzpb9yKAADDvnYNbe3L5Rvbgu7HhhSRFrupDJw9gEkMMiunCLcehTe7TpQZqCQAMeK",
  "key47": "5Qbp8ZLzj8PB4wzegCZJUoGrtpe3jwe7EWR2PCJ3aZW8yU5aLU2Wrv2dfZoGVNw76XFnQoJK55CgGYfKLUksjAVB"
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
