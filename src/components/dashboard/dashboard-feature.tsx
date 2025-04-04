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
    "46KBLq6YXdqTXwvjfbvVvJnRSRJNSAjjDCN5CXYtWiCMSP6e2NUzPdSU547io4KegPdqufebQ2ejvau4FbjqToH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q2K2akhHoMPeVUUFzaq4jaWQDwMr6odn74CeCXAuJLi84pxYuv9KVReWm183VMTxfsG5BDEsTkbrSEyRECX7GT5",
  "key1": "61gVyLj2eAHsaWw65bzZNvdQjfatG8ofTjbwzuUFTMM4rpFiaqYyTaynP3XE3oc1EPHfeh37wuYqRsiBnEuVevC",
  "key2": "3PQahYQ1nnrT1RReVDtxAzYj4WB9PDRBeZ3JyjZMPXFEh32WXgXXvoer8qEcRLeYt9o9nVycnLvCw2yYrwoL5LZR",
  "key3": "3pJoMWfr4PG7z73dEfKJe4EzWskSQGbB68igtrSr7EA1xE5c9qNaUFF4sGYmYZMhPafMpkfAchBn2Pyyt11qo7zt",
  "key4": "29YLFhP4usuxSQX5iNzSDYsAUwRMWMU17av73AJBStLDerCvfLbrpGTvARHY5jp7TuyoNoZ6ZLkLfEhYvnBsnoPJ",
  "key5": "5YoKn3fgztTRt4pnAd19Xed1UwSbzVMYHTKXTKhpgE8h8RcTv6NcWXJn69oHFoQ8q5FPZ34GLsySzi9bBW3rTLHg",
  "key6": "5KABWgNnLFzH5CsNUtJRvHTDq34EVE36Bb8FRnjxFccz3fbRvkfHPsBBkzKXMQKVn7wuogHGMjdo23csMD8jSeTP",
  "key7": "4MaGgemz3Skw85iQJe1v9svozkGKBS6HMJdKt7dkhqkSGPQxJ9xQ4K3MaBnqXETNeL727FiwP2baRe9EUVh88QxT",
  "key8": "5LZ7iGLrBPURn88t3DsscVzh716NzAnuPWhUjD7fgnMTLDuYTWWr7BBTCpSEzReHnnTYgnqCbKxKPUX4ftuU8bx1",
  "key9": "4PvJe8LWHCY5FeE1PvNAgLSz56cGXCiN6iKxmoDWXyxWmShQJdLureqQkDrjLSz74tdDEa9mwdSJffLdRkdtVQmU",
  "key10": "2i5AdMNJYgYJVrpHeYoX2VknTgzLzaA7VDMWzddfcdaZ8CUTkfVSL5vxEVnsdJtuU6KoBkNgui4WsHjY7TsPdMGV",
  "key11": "4f59xKdkyjCdt7unxX91HwVnZrNFTiUQdHECRsm4WUcnfJNbBVvhdBThwDvym9V7XJgdNvQP1a2z7ESXxbZHuNNU",
  "key12": "58zFu7gZcWNSiTbLn5fNk5DSGoDgRLmjd9d2wbsBRZLoaaDB1SMQCJcbumJUUuDAEPhe5YLBeUrvkXxEhtnKXH1D",
  "key13": "1EvCLfmY2EXfUJscFNZCeyxfJYKs5c54fJv5oetkLZttH5HoaJVNtPtGLRSSFKxmUsT4UoBdTXpaaGq9xyLDcqP",
  "key14": "3DbjSQpsdd9xcbu1McacUBCcUYwVq2SuDKd6LWszVJpt9tDBRATQoh6aDhi7T8SxF53u4qFGGerMEzhevmQwLTFW",
  "key15": "2Ci5E8KQoh2nYkX15SBwrhtU7y7qk4wcQG8zTM2jrjdmVbvJJiEn1vnGwVqUbPQyKeqrFowo2tgadrCi5w2b3Ftg",
  "key16": "4VidPxp9dZvbp61DrmR6pTaTYGmKQzt445WLk7UVmkVZ83z78ZfYtQeXduj7PorpbY2tjKFTKvPTWDVxD631ngcu",
  "key17": "3anh3gSYmz2YrYaFGqpZkwzS9PoVCaSryHEHNDtM8H8qWXZeeSRCTrAaip2qfkycG5DAVm9sNgkgiZh3MZKqxnHY",
  "key18": "4XecU9v1MJYdzbMdthTJdHLR89tHTCwom3ZuQ8ETMPZPocsp9kMnRwRcLtR2mhcpXJUVckA7GRm4z4feWgybTq32",
  "key19": "4ZEV5oNpBLDeKew7Lps5BZgy4chvLr6wy3XWJvqLxzzrPSZ4dhx429KXNJMSQjUUdTVi5ggfgepFQSieFZwDUCoA",
  "key20": "5xuLurufwXbnuCYS6jjtxHLkbNY1WJHXgVVDsLkxDLjSG7FVvRTJ9gwS3oEoN23EmzDRHjY5ewZre65dNYEY2wfy",
  "key21": "2MVBophh87ogPQzR51idBgjSfmKsJexmXUMENtLotzZ431KQToyRujqENEdTNsjcPoYAb1XMNJ1mgSxy67w88RER",
  "key22": "56UJE4F35XtbhR3Qnru6bGDExsUFsv7VdMVkEEgBRFMNUfhL8rHWjiW8KFN63gwn4cqV2TFskboc7EwNqbNzRt2R",
  "key23": "5c2xXjKHaA5dvNbwLUyCJwAHa6ykdTzQSJcX1Erb95anzWpwPHhQ2UaYk3FoV8uChAfb54orwtKacgpdU1cVGhjb",
  "key24": "keepyuWUYwU5DXNnm97Wuuirr7cs7q9oKduoAXwtqEMqDPRu6zzvpoGmPDvfWCCdNPqemS4aZTdRfCW9SdcVmNj",
  "key25": "5LpYikqAquCjPXdXBHry73dRV6nK7NS6xM1y3F44VQDBEKewrS9WPfKQAS7vALHDTs2dWPRapwj89rZFJr1pxhmv",
  "key26": "4xWToqxR64975pQksoLd6sUo4zGiKjRrByFawzLTZqYkanxhEX2tNYoQzg6go7iUHxJ2ZhNqFSQbPXVgynZLqarX"
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
