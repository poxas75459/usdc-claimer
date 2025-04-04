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
    "55BddY4z4H2JQ6KTeHPUkPGDGue6J9N8xMDp9kZgELQjeBZyfSnbmHxzXDWNRKCk8RDZSBAZPyYBJmBQJEXGrt4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmVzQS3NEnz86bnyFko8muNCGkaAQzkYprCcoQBcbBPmyShvuzEZC1uPr6RR3qJycCJDrQhTzVr1m6NiFUuNewi",
  "key1": "ZXEixkenckxqKkETZGZCVEQ299wNH1X19s7kh7sRdE9s7p3aAFV2i5V7K5GKwGVhQvvnwYStGrWrxbFhxwsbuht",
  "key2": "2rb87Y8VGeuzHgDYkK4pq4bA8rsQ189RuKej7ex4KeM5PKraLEeELzMNdWmWSqQyPKQvHqSoQoHBbF4cfcCYB9j7",
  "key3": "25J7AZE23kuww9XSTZUrfdjK89YqGk3EuqBTuKfkQbUF1WVg41m8XpgKy9n2tvpuox4P1T7tyoMeDQn2PqMN6x4d",
  "key4": "vw9o6NXosidVoTz4KModZGWAXeX8iE8x4ZLKNffzfKpztuiaPQaDhUuLn77XnWPhPZpiJTBgNeGtQCWovdfHCDF",
  "key5": "5dyyGnDnALTsQ8Qw4cWoR1yS6RGbiXgFBDuxqKDwRscNcMLVQmYsjK8kxDwsiukifwrxHLsVwQkqX3i1f2eVFN3j",
  "key6": "2mQHgW6yDwPporRw64Rm3rJp3XXsxDmwshKvcztnk6aC7zwPjCgWcFYVKDqHjGeqKGpRM4C4C67UyrL5hin1oMP6",
  "key7": "3bzcRVS1ixHAoSe2av6oK25UCMDtdbLjyWi9jBvmRfETc9RFfr2QTwXPNPnDruC3VPy722Mx3mPmXB5rvYcXxMT7",
  "key8": "3daarpaw5ARFDGvNecJpngi5W19fgjvCzWZg3fnCDhAWRDTnPfVoRV2ew35WqqNUzE66uicPrTKfauZo5tyRfTmc",
  "key9": "5jLnb3S38eNJNqbw73UvcMCFR8i1bfpCpF8zdyMnEqCE88LQYsw4oa2KU4cuW4VrxnVhQvxHTSyeNRWcft7oPPZE",
  "key10": "2UXetsshKuh9JDP2DqhrJvZS6a56UQoYSS5ddfusJdeap7QEvazyz7iT2teFzSFJBgv54AzVuNFyjFp5Fb9HFW2T",
  "key11": "Wvaf6ttfzTnUDrjqwwghtmmdsVQYA6aMdu7KG2wHK2WAXAwmHLyjboCQt1ywUioosNVUdZcXJPLwfAq924sqHfA",
  "key12": "4FTmtj4yjy8iqbvFJ4TSDQUwrHeXmfYhqLeV3Y987E9HnyEtjTyHDMBhvN7XtUoLNnPk7T3vpSRXmdvKLT4PC5Vp",
  "key13": "3YyPBrPVc7HNZSPCW8JrAcidXsF16pnPzoDkezpnyoTKDZPBg6gakMcnwaqKHrgW5tfZyJ4HBkN6BtF2N2VCqv3f",
  "key14": "2ieSopWPm18CPufF7z4wdEJxVa7j4Rh7gdWYZx5Vqy2itrdLwsQwnrUW7m8WSZ3RLKUcT95oKdkPVDnHzBxsMJAF",
  "key15": "5hhaoLksQ7gjMEq34Y6mjWqwy7WuLNx1N53vnHe4z41mRQap497M9DhGYdYhazWHuaoTt6suW8rMY4dU7nii9jDA",
  "key16": "5YxtpfKFsW2BYkUMoWQFfF96W3UreDGaCMKy8VvhBFdYSNc9hbp5TqkYZnRMbP5BT3X3Ttvds7SyyidA1cgEsHU8",
  "key17": "2HTrShtdT9i7s1VZT17RRVigGrqr5j9czk5ZMRygpqM3JH4ASBkcKiyVbNV4YA8byVinoFB2knsiUydYeGv1w2UG",
  "key18": "3DjBxPqGcCnQgeRWcUhnWyFioHokjU4p9FuvukdnfCHErs5j7xUbY8qN9tRKoaKyvHxgdM6nWyZ2cJdaW2XqEaTD",
  "key19": "3taRJXQXEj5yJq3MCMvsiDPSvy4MrYKa9pBTTUxzwJgJph2i9P95wegU8ogrBxeYhFG2YQfEmcoGMiNQrHipwP2A",
  "key20": "51awphHVaFkKoPJ6Q57L3naUcAFCt8aEMfTjHc5Cko245a4eM2mUovs1SMnZYq9v4aJTxKJbj7ZSwrx8bNzj9b1a",
  "key21": "2M3cmS9kV55ke1Pn9DvhU1a1WJNrahtoCfyACCJKrxnX3J26hy4uRcGK15np6nwPw8mbcRMXsMCu9Uf3XwcGJXuV",
  "key22": "5JoG7nZVGAq8QzSASADyDrQgo4Wf3x7bxhNd2BFFxFuoZznExrAzXUBmWMdNRAWKSFeB7TsiHDh9RjYMKFMW6rbM",
  "key23": "5qcCHxngwPVfSHkL3LErKqwtxeg1RtSgXkXgEEUQkySmRhpcuTaYwPFuqnsnJLCBfRdsNvBiotZpJKxDquHAPbop",
  "key24": "5TgNK1JhydhQXP2PQUDiPGELmPDr4udaH7seen9gcp6Gr23gjxYVy6927WR5vVUFXtbkr5wow7ZAFX8vY8YPYuyc"
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
