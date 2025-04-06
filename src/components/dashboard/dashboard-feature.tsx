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
    "31yyaZeY9xJyBcM9KgaPhUbSdHx1NyqE9VqAqkpxsNM8q6f72Pkj4sBvqrYNYD7ndMb8yWeGHvnUGc5Ai9NFvRkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x6Wy1hgCBEo4Dh1MoQeXNwsZhrp8uYA9y3j3qU6WhhiHShFgi6Q6ugerVDsw5N6Hz8yMQmSc2pRdMGwvyrvvxP9",
  "key1": "38qWQcAjVHhxwsQYUgtgCKSeFu24wAgkYMJsgtuSAAJmQufVs9KveuBgb5adDD6Lr5Jap7juKwZZyyLoGg8v4V2J",
  "key2": "3oFnpCknPJbaF9Z4QTVCVTSddPrGiXUWRDdzhgG9H4L77zXEJ5VDVMhedF4Ydi7yrnL8NtzxFd261TXfzUcZTc8U",
  "key3": "268tBc3KZTjRQcpFxu8mse75TTNmtfA4zT4m3uQ3vVLSid7gZBeLr7iUrRAmuqVGCErDSUEjQRWdH92BUY7FArbp",
  "key4": "626qLXCT5irhHTCk1N2kRiWqNRnB1oVz1S4zz3E1zh2nifBQUfeRsrYhy38FNNftXPN2TSrVsJXDsNyjUWg4cPoT",
  "key5": "4pi7i2ptZfkTEZSx55iE4L7QzyPLQbtcJ9BuYKDtwVfSDJwa8LsgfoDGDLv9HHzAXthqqapqmYfnVkDnEFA5Bdb2",
  "key6": "45DwgaTGWmnDU4ESL67GN4m4aq1haTUHR8a9cuUgRf6c4Rk8ApoYe66ciuMatnLXjSD8qzScPoSLyHoku1X6daa9",
  "key7": "3exNCGui3GHmVwAovMeob522erN9dJSABRqYhPdaxwyALqS86GcQqWxz1EVSF2BvpWthCpsCnmSht2MTgRYrPNMH",
  "key8": "5he8M4FUB3bzLjTP2tzWFQ6VCrmyVk6vRDrudKr8cQGLv6QTA2Hdr6J4fKwxsmnuUbGc14uz5AieU6iBfbVQgsKR",
  "key9": "3wqRfTDK4jkLP3jf41jXSmusbZ2tnqp5sp7DyCKpscRW4gnJ4FJWxgC51dYtCGznsF4Wvzx49MHSvNWV4hoxuCyg",
  "key10": "5uFrRqrbFMJSqEeHAzdgoEu1VZNeJwP9Jep4HM9K41UT4Hd4aShqFJMxVsYYNV63Rndi5UFoF5zbh5K5uvw9krug",
  "key11": "5vUX3ykgRs8zhpgrCTs7pmtjbbrMjBeXsDnWr8YZEtnVtFmPuE8xYXYBM6H4fCkWCnoUFSddMoVZ1z7uH7xPFT3p",
  "key12": "55WXLPgYfY8ikKLpJDEnmSvMBXUcxi9nEDAD7XecsZE3dGxVWrSFgCd9Q9YhbpFewAKAbxABScitYKquTe7U5iyg",
  "key13": "2dkBzMDJrAUKejTqEFX3LAiA9AuqcvZbQq4vV2FB3ejCrooYAScWAnaXpQCTX7UKq6jMG8a3CtJBNr2SD9aL5Jih",
  "key14": "2dhvXRpxw1tvQ54W2j4Avapua1zDfn2yzsLt8k7njTJYLnjhpvzKDptxUaNiyZKJsiafan7Uz5Xgfid8Ut1HbY4F",
  "key15": "57ACV16T1fa4MBxqgn3XgVLXyfDQUTnKA6G1LYdHDTUn6TeksmqK8ue92VHjhwkcy6iPHUu3tJT1wHFGsnBvnan2",
  "key16": "21p6npfQ4awKLFZDcsLCKLMuDHEKPi2jFzMNfbycuViSonVgXstbiKHUXx6fWMaHzN4U6G5qVPQ6RG4GGiJMwGJt",
  "key17": "tWT4u4VQBEarYGgoiqYy23qAd4jXR5KhLbawJZh7fmBhzimT3AisU9J11nwWc7yMLB4QPbyaP9K4MZQ54Jquc1B",
  "key18": "661USSyLpE3QmrQpFgAVAn9Soag6DwAzF2jeSLd6BCwaCNiE6Ud3zUGn9tVKRmehANcKs6G4azuNuUYsEbPRejDL",
  "key19": "jSUznmwFYXbkvdSw8EJAZKtGSahGcpKZew9VS85snXxnd1u8LVRbwQcgHHBiK9inRHhDj2e8fD5Nxmfjde5Jt5z",
  "key20": "26LCj1QVwicqJmrTg23MyAbifAwtGPrDLyduUW31bF8QZaefWoo6gNTdaPxRi9YrYkpfhHKZB9jFNi5Md9KPwfpi",
  "key21": "26WNF7g9Q83CNWv8YmVTi2jSUEtMCE7GKMCU5z175HxfmJHZVXPKWfkG9BXBnYsf5svCdbxphwtrseXD8jmyBWUB",
  "key22": "5ndiESUkTRZDWLQH2HYEyccbwoEPH4HPscTvVwJbJnmYNJwajGWkFHYY9nWRwgJjxPTCYBTAWopTCwq42fyg6ceK",
  "key23": "3Fc9JngTFLdso3MUFshuVAr6MhcZdiP62VX2Pp4TdUw43eCHGkwidS9hEBkjCE4epJzM6P6kHqqi7Xv5jEingpqV",
  "key24": "31bzDyXe4Jur7sCPK9JkeUum76WBq2MpckZ9t4LX5DzRovjwoNaRR7BHcs9mcxubu6fZSjxBB5ekYtVwYA3MRBnt",
  "key25": "5dpxfYHtcgYDnrf5X43GP4V8F9Pr8PJnJWdkcq7NctKbiHVhNH79yMGrgYz5PamyUZnfvZieybYvh8FQKGiRPrx1",
  "key26": "4SBA2VYcv13tZueYyNJmUWyauLr55GswNYTtzAa5qLwAJ7REiT7zSqVyio3xubRhm6GGek8j9iozRBW986eyBwKY",
  "key27": "2SBxGYG5RE8nhQYA8TB6aBYqHNgunvCxvEyqUjKiG1BBTX9F4cp81ywcch6U1fjZr2exrwYjBiNeaJ23d9Bwpg6q"
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
