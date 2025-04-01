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
    "3pLdsZdoSf37xy7mGeknMa2h9K1vJjbx2FYXiZxkP87QhLQoUMFkiijtJVVzJCWz7CBPQpc8FbRAeWcFMdnbfAVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kdUHn4LjJzDis6pGptFdkxyVZiVLmVxLSuAZDSLi7b4MuLErMd4cKzd9Kwk8cLue67D7PevQGwQ9QG55ANoPqCG",
  "key1": "3yg45rWiDR69tM4poAEiNpy2MCuEgUgscg57iKWxkVg8YAQqH37pXPwJmEnrVNZCWgn2oCRvDijoz4caG68JVqjM",
  "key2": "9hL2PjCeinHA47HrpD8XruS5viLRunWzt9psqz8RzQZVSAFf2JbnEqbDD9CS3dGi3VwUHxJ1LKMZVBetNueMosY",
  "key3": "2mWk5KzsRUZF5MseRQbn5CEn48DoGdN75mHjhv8QFNdJeXRFisz9F3aUs7fDcquKjdxucEyH6Sqe2Bezk5AHopWP",
  "key4": "3VpYL7vScJhBfUDirF66jVhUqAPDt4zZD9TK4DsD3AWvKvA4P8y1phSsuXQ1gqgq6DXHRenacH56VyaW7kMiWNtx",
  "key5": "GcjQnZgpyahkTNQetVtDA2Mjo9eEwAGtUg5CyEFP187QJzP99ZMxnNQRrStJNXVg1i45N9RCS7TwGr71obxYV34",
  "key6": "65anFjiPZNZ3nRjw287PjQoVGfqC3ckrgXd41NPrVngMywkMs3GYFTe8TWqQGMFe9fgz5PYzUtzTthsxZHwYbyps",
  "key7": "5Wb6HAgisGHW8wj1gtohJp81Tdos9NbZo21c3YTwRWbXjqJ7twJ1CVo7htyUzWsJdeQPfct6Mw1GCTa86egshNf3",
  "key8": "CnJcvPLmAgE9Atqg8K4Fx46Hka4NdKLsosWg1WbpRXV81WAXUgjG5dabevV1rjjxgM1ksUfyiPBS8Ymcose9B22",
  "key9": "4u92G6Xqo3VdzHYWieCMLFfUDAn7Ug2Z1xAAf3ekPqMa4S1i6bSYnxj4vq2fqa6MmAGaNYFMZRrRDfSKAUGP8rE",
  "key10": "3SuYLQXXJysfgRUQe91MRUn47prDWQAqfLL3i5qiHHcxR5JpS27GYWkKJRMbAgLaJkcpPwYowr6H6Bod6e84GiFe",
  "key11": "4m5AdenT8PqdYpdX6JPF7JmkpT836jsTDeVACJsrFnWU9JKek4w9grmpMtUpMfeTUqA3LShDm4PeRDrD2jp1RBun",
  "key12": "2B1spfFGMcPH4j7J3P41gy2NkV3wVjhfodzYtkbVAKAcPyQCbPEs38otrdsyvetAeB3ehZdFN8YFjz1XVetWn6YW",
  "key13": "5szt8MfptcQkY4ZpXm8qEDcMDNHizp1kmbptEZUbrsyxe4oAErWVxxrdBakKSEXP9fsjALx32LWEg112JUnBDMob",
  "key14": "22Bi5P3cCjjtxN1pL3fbN2VnDnaNeYX4PFuAhPEWPb8rENPsM4ugcJgdyrcTfZypbRYo4JUamiLVPHvRQR4z4Dit",
  "key15": "3L28dvNNGTBE4gsNmSWN5rTsdJY988AReNrn99Gvq6vRVveShGN6TBPpZJet5FUo4pbx52v8zpd5ty42Cuwx5qM2",
  "key16": "2fgQBgVUYhBx3kUgu6UbGmAPxDarhtgZfxCZycmLfoXq3jAf75M7TBePQN5ph7zZeewqD6Yd4DBjNWug6y5Ae4JU",
  "key17": "4t8zKxgKMxVtEJLDXzG9ozz1CwuoESJ4cqsgbdhaJbMheJg4bGfXzZ1dpmTN9AUgowousfahiGzxsCPnYvibPqpg",
  "key18": "5cPJ8dhDNVEovvJt1rHuS6FF6m5HxynQJePDRhEbVnWCzjEwSkgYLUUAG6KK8sZzCEJTWery8pK97NQEKHTquZ5g",
  "key19": "4FoYsb6nxbybqWxFHysQHeW9b5p7DaXDp62GPBKjH4noqWQfV2jBr5JmWYLVHXYo8PeKERC9BQr1YTzu3zEqhLqu",
  "key20": "DfZHsUgYsrCaMVDU3K3Wrh5ucBimGfQLmSztG6Vp1PESH89zNeiD6k5aZWELUcznF62xz4wtc83nyPohj3wseYC",
  "key21": "3dvW2wkiABmLHpDDxmeApcsxWZsfkL4bZPabyeoCVZCSnbPEXNEHWf7XgNvnZvS22N2LWRpMAgctwaQqSYL9YSv9",
  "key22": "3GqvGrQJShS9jJbdChGKJkYWJPs7oDPDf2FHhjosGWQa4s5n3JMvm9iPS268VyBHGyVukCJEpYPfYfzaTEuzhrWZ",
  "key23": "4DqLPzdNhVQkRuUqEf31xQz43Js7WEp1okr2R3wq5thnqLpL9uYeiVXkhRDyCpxTwbQptvPCk2KE3LkcS8cf7qty",
  "key24": "5D5HwZwUuBG6KUN81zdEBFgeezeY7r2esoAfVn9cs2QP28bRKnoTVjWiaoVcadcbubLsVZCJqvUJ9HY5Jsp5WGtt",
  "key25": "5NiXrqJ9yq2TW3yJJzaFPxRVsbgTD1pdhWGPhqt8Sw99oBYsUjxX51K6ngCCfozLwaxeNQmLu2PUWnoxfUkGKCPz",
  "key26": "smWThSvFXJbwujM1m94gSvwBsdtrokRxaUBEp4yEDtXhkAbQQitjqfAGX6dyzVvprwMRto1nKiyrzGKvWfCLXVE",
  "key27": "36h19EjC8Vxdta1HXBmEkREY5oTJ31Z2YQq9tXcukUZEMH4WqJbVrbLf3mUPS8D2i9GedR3RJP9WVpudoiN55Cbm",
  "key28": "4fAXv3YqJvMxaf8DgPp62TYLeZPRoequzrYm9UTTuRnoUgRALvnZ9nVttVEPQJbWCqSvbYR9RgC6kKUrzdjopGnw",
  "key29": "5TfNbc4Yxnuf83y3sgiUW1X4iCDCMPSmDqUHuRNuTzcLfzRWu1QSHQixGFZqrY2S61AwFpuogpbu6uvBeuEts68b",
  "key30": "8Ht8ZKi5SAHwHbgGmwtb6eYeetKTqyqLRrUBh4qr5sH2aHpkoyLEdvyXL3NHfaHfjoXDdv3hdTTcmabsp5FkdVN",
  "key31": "5GGYMmrREnfMQxDrUXYW7vJrRg1h5jL7UtgWPWhimb3h6TvYrBVqh5LKaR1az2k7zoAY72jwnDnpysqtTGRJfQWY",
  "key32": "3rMbSdVKg6RR5qsCbexfREK79Z7QMDy8UZVi6w7KDx5u4DTfe6bNLqRmzMzep3LEHwwiV9zMQvPM2CTQCJbi8GzY"
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
