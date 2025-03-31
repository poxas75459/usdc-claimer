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
    "5FSDARQkDRzLJnUKrdr8QAwdrkEp3i9TYVDrS3YqdooE1iKdGwouqwYaZHE5YYqE7kLZMNXcrQqgwgt8x4PGnLhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dHtvt1UeYHom7V3qC2DthdAfEhHk9LPDW446FQgaJ8wnft2hFXtUTpPewVqgkYk5Wvebckngp6zJRW2VRBNcwUm",
  "key1": "2Viw5S9oy1zt9nG2nBc6qr3s5ySV18VHy25MNb7TgqnwgZTjpoMAMDXYaPLFKZQngG4Ehbq2qjFF7aQfCavcuCXH",
  "key2": "5ThwBUcD2FxRhptFA667jPKLNYFZL2L9MAxUkfMrhTVTe3ujERBMtFGTHenRVwp2S3JYg9DKMmSL5BYJhBippgHH",
  "key3": "5ALocwHS8DhKMj4dRXTT5XhZakKDvqQsRTXi3EYuQfqNuAe8d1Ps1en9XxENXK91reGyaqjtvHB9Hm3mcUdpE6Yx",
  "key4": "SSE5z4Vh4KPEPYZuwbvVFhKvTQPtuEaX9z8NN3n5BCyWG9uVExPqzzNbj6E7uBVr2iaCZ9v8W8AqqSxAEGR7HVW",
  "key5": "3rf4hqvFY4uQKB6DoTmEpokrnfzF6Xws5CQmdsujJHXrzr6LmNBx4ayL5vuhkdqoVVgf6r2ypeP2dfUWXDqAcC25",
  "key6": "2mSr7eXmwKiXr4XAbKTTfEs4aGyzY6E8Q8ywGbbQ4GM6iJFFmWttbdaE1i28Tck3dwwydCpvE7hBrUzJ94jvLYtg",
  "key7": "2FPtbhTdkD6S7V29hmychVShJH4vfV2t7LHsXqCWZxrvTBvNYC7Ae6VFoPKb7ggrcfw9SCdDX3RNw3chDnBpSPNF",
  "key8": "4BFZ1sAsp4f5wFDbszZ8MPrYcy5moE6S6GoF9YRfiqzydr5PVaTLTb25HKhBfbgRscCi832E3sCXczBMqPBjMaRP",
  "key9": "2Rh8b6zyS6hWotNYWPpTRzPDLSHHGau897xepYc2HuGgYWz1dTECSwG7QgnkHEzCYTWNPZkTbCEmbekMZnEMUsLy",
  "key10": "3asoWjnZQzEHvqwd73xiTDLtp6jZhEbXyYeu34VYkFhcgFXhBTQtBxNDWFmbVGnBkgyihM8VSE9TxjTtfM4eea35",
  "key11": "37xzr9mhBfiqtWnb8HhP3XJs47ob6K9B235bgqBsStiLxddLJYYfuqhbxfXdtMTU8615UbynPAPkeNWFMqdEpeSt",
  "key12": "b6XQMfLRt7w7hEhKiJkgDqjSni78Y2ihg9hzdUrepDz79WqTTABc4mBkcoJoDtVmk6wNaSRedpjzaUWPPu4dTjB",
  "key13": "4fmoKMvkd8yuvgkGof6MJkv37e9YpGmooZjRah96bCT7LBy18aKMnYv3obWGByyBqEn23DVs4tnWjYFLL1qiMbec",
  "key14": "wL1855EJdwTGfKEsunQf7JUnkpTyMjnAbTEt5KfEgAS6Ty9upgJDWU37DMF5w8tyvCJWQvmQV1ptSCvnjiu82Vc",
  "key15": "kRBEgDE5yC2PJxzQiH8ArsTZ5fLEUJhqDh8Ko8QvBABb8czfMzutFcduXC6QviJm2WvpeN72z7sagxJjCWsRnop",
  "key16": "2iYQbmEMSWVpREz9MBXRf8WjQwczj4WfzS7Ch2u29hca4a5Soa3ULmmJp2JaVdFrtrK4auooh5VZHuY8KCF2bdXK",
  "key17": "5FSQXAPKP2EKaPWuztAP6NEcmg3bc9ccNRc7PFMJdvAGZneS54rk1JAxXABByVjHsrL6zNnH7fHdugitf2htdM3p",
  "key18": "WUc5jMLpgcrvd8Skmb5Txt8Pa4XB1cKwzQqmepUx5Btk5HxxK6soDLs7nx7n89C34vjBxzTs2iJ21xirxaCcMko",
  "key19": "67RPSmfBH6ZqKChqYeR5UhBo1PGVfd3pUUm8DwpYSLUZHJkCKcMkR4dWmWzas1m2tbVYsVtEuv7CPXRj8qUwdDo5",
  "key20": "3nERcJ2FMkDAy8GXdLjYTMoXeC8CsYHsYsL6v2z3NBZYYHrYdh6fQBwZC3zGuv9eJJdvwfMvuBYiPSj6Zos47dv4",
  "key21": "5KA2LaAawfVHRMUmMPN8bcnZ88xvqC1BstNgWHRUFU7QCRsJn6Mtt9D7g1j2UVETmj46zsc1KambrXn1b2BF6Knz",
  "key22": "2nFA9q5hj2WFnHkuBQmBrZpkMxpQVGkVKHGVtGtEyfY38SdozcAvdTkdymcStZqY4vj9jbqCedLkUYDTLaazstAq",
  "key23": "5g9BSoMTbyCqrrfdtv2arioM9qveZy3VoA2jKscq6VM8XvRocFYJgVGbgFoG26UFNHvFsR54hgcHsgc35xLnCRU9",
  "key24": "2wbp4MddxbLwnkhSmLt2MRTPXmN6GnH82P5HKsGQR6x7REU6wsaNoVNqTptE575sq2PaCupaHPnFhABpZymJhtPQ"
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
