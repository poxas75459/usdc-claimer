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
    "4UHWsW4AGvW3wCubkoPKxqaN4W3SQh6mYMRzaUZXjzmKzvNFzJswPGHDYX2w869TDmYU8A1Z1irq7gpszZDbmAPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hiMyxJEf9ZqEtZha6bxXJZpsm5tQqxafBmcCPw9PDAXxbBk1Vrmt1nVHDiGk1JJBuGcNoq1Mu5S1o4J3q9KLRWu",
  "key1": "LqbnQqtjetjzwgQyHM9GoTK1hA7ruvjubJ6cKHgmJ2DWwmfvw41GsCqfYtTpQNTqWGhBwUsLE125v9MWU9kJnyr",
  "key2": "3JDhWnPksSLDwxEriom4wxVKqGZYetStR5WoKQkkL3ZzvnqyweBujhy7b4qQyP3S6tMs8R5acfuQWJMoUApa2W2z",
  "key3": "4ZCPb7t5MrvVgsNB1CLiq8kMTZ6rkDPKYAdFnFRQjP2sowotVecW5Nqo4Fy5hvg1CmjjLnvuy5JcxmMsTzxcJuCK",
  "key4": "npJMkTMThU5QfBjqMu2HtNCaTuaFnCmV37v6fAVDxmTewXCPi2qtE9gujdJuJh67fyywExCnE7y7aMdWSqYgRQZ",
  "key5": "5AysmHa8WD7CPTpdZvmgeJ5BW5CQYjvvAaMNXbiFgU81gaGgnP1PzbusmpsT3h2RMN8pTCErobxCPqSzoCdG2aLo",
  "key6": "65hhnHVyW2nfsQrCjGFHBd2LLg3hHyqNnfYbzVWkkdSFNZaQPEd7D74E3CNhbzR2dHZ2jcJeQwMGivyzV5kfauSx",
  "key7": "5R8WpqzB6dg1hcEXYG2eoaCDtvPcRFXdBNmyWpvbdkizaWeuT3G8HxpVVs6QpMCXvXG3YdWwD5RJ1KmAXaGDBGm7",
  "key8": "5q1ogkH6AtmjsomJ32z9jf8LcTfb89ZhN1GimAMj9xbavbTxMA4F6nPGCneXTiv9C6tnLkDZPj6p1XiUZeU9h9f",
  "key9": "3qaxAHLm8TcZPtvQtd7vNmoR6pH4b1nrLfXtVYDeJNdetdXzSJJ539LEpWrLB7kRSmpWM7qiYHbZJaEG3CcqrEYv",
  "key10": "GcfJbUU5mZWQGdnVE5bHto2MYZpXMBJqb4LRTRUinA1J54JXuApLSGJNQYRx6kdVttukpuvRgds8pX7paibZgxN",
  "key11": "2W71qCBQrjTtaR1ufciEDHdWitGFoMNpMkVZycf6sPupgC56D4dwoizq5v1VDPkaEDHQrtTSQQFT8dzsWD5smztf",
  "key12": "3tTnzX7oXBBsMQf8qEHi88ocsM8TCxjQSi7Ea6oogAnj5QpKYhHHqou3Vu6oswHxsQH6zWP6ojPkPQUhLDV53mCA",
  "key13": "AVwttQvSSsqs2S6udGGvV8bqc34QcmnfbJq1LfwwEHZ6qiBEeENnk4CureuQDn3XDXBq1tb2qQYUtrnDe6HaSdW",
  "key14": "4qwPzQp751skLPEwvT8HFPuz9Z7q7uykmL2WPHcqWVpKPfFwteLEwSgnCLnfJPqvQ5j5cHcapzFWLPxAETLQvQWf",
  "key15": "4CiYdr7CL6NdycYyCnrpghSXL7e55n9bun7f1fhie8VpBiR3N7piJzELD2QajnUU8Z8pPaFLM1sHvT6JhMv27ezN",
  "key16": "5cKVWvAVNsh2d98kCvsUn5hcGF5BG1UAjnU543aPXKnvLAAUKhBuST28HHGnpRpvwFHzUvVmzmGYpr5zATBsqrCN",
  "key17": "5BheFN6xHjtQq9C5DmPf9ZbC7HvrAwqT2bn9ZsdU1nTQFYfH2P54jf6JsH5MxeJ5LYGoSmce3EKVDSniGqFwtLvJ",
  "key18": "4aCmoMfJ4ivMYQHMFZrqtwDRZVZe2RU5ghaNGv9jhk7qasHw3V8cs8xCMd6QAD936NtrAyPKAPe5BezBKnRN6tL2",
  "key19": "4hzrYvxpWNN1z5GZ3pwaP6GiHiQ2yn1cyKoqAkkJexmpMHf8NS7iuGB1FRq24mDn34MCrpGwvs3do71Giv8Hbx87",
  "key20": "4UkgkAtB5kiQ2dNuFWTwAZsPxQ2HdrB6j8cAdK24FJDWJgm4us4a6WqAfFhtvvDaH3FEczqrbCoYtevSGJH5nTir",
  "key21": "4sfzVJYcty9Nvzg3uw6xXZYhHaYBuxF2gitMXPk6PtEfKBJqQKV5RbAyVub7987FJXrJqWrr7oiPXxK5enPNiTgZ",
  "key22": "4pJ5iJQJwWVZxF3a8PWD5GXQjX3dRGPNp3cUqb4h9bKjjhmiogt17JTeR2NEgY4XuwLiqrFFcAqUUSrnMFb57kac",
  "key23": "gcjSxPJyKk6zvqWvYNKX8XKDnWHuFmQRtyqZH1Q48zvGJ5FsNEgMtuTE8m4Vy4eXS8DbS9ESTfCoSW23gC5pzyn",
  "key24": "TaLeQxqxSv6FG2M5RLaLBhjsdHHnzJCrYF4M8BJ9hkryvNWsopbTB3BvnjtxciG1FWaCoqSyhLc3EX7hJqvEbuG",
  "key25": "4rUv7bAjT8h47ddyXTbtqS5iAiNinbjpKbGwzMAiRB9UoAsLVQ6CKopixtRufMPkp9rhiy9L3uiGeZNEMXR9Yk2c",
  "key26": "23TYiHr79DWVUVhrcztiJYjFpBgUGNhnwgXiCTwRF94zUVAidWnAuZvjfJGSGNkEcrvdAQrC9XqCv7mFivjsG46B",
  "key27": "2W43jDPHC3Z5tN1Lvrr5PQQGQ4csE8MGuML6Ru7CJf4HhT8nce33FGMaHgMncFxG5N9BcivNxmXKQKGid87qk2Mg",
  "key28": "5YPtPoMuYBb8jdspmDTzE3CVD8tEHD5eRqm7ize6bUsEiBW7m26CbBpJRdvS7USQdv9nvQjwxCUXXDyCpbD7DMt4",
  "key29": "3ywHqGr9AH1K2sAMenGPXdRCjHoCbkdpFGeycVYbGRFCayii8169GTz7DomyGskcxcS5p9FCz8myqvyvRcQjCBbw",
  "key30": "5ftmQvnNFRVfUB4YsrU6sgx37DtiaGsqCcDJ5y7HBaWxLCz4MTSFCgvezh62HJw85fMPzBYVGymvRSf9MSUjzwsz",
  "key31": "3z5Ww5iBukQRCH6PJ7gnfZ4AQkqwuWh6yfYFKUdKvH3vPykyKowfvfhsqiPmi7RLhB9nR6FCa3SPhp4A6eNf4MMw",
  "key32": "67iTsj6QZ1ReEsQz7PDrt6gWf5hVqFPYzHjp1aGq7fTaMXzCiBYy6w7E5K4UodFHhsrWWQpmBRwpcBJpAngdCQ4p",
  "key33": "Cfa5gZsSHGXujik4Wm31dyriLuHKKbBRk1K2pLyngu5rhneXhVLmamRYWLwxfFdJqLSuuUwHRSG4ZijQnzFvSmd",
  "key34": "2WJNyMmy5gSpCfLFSHJRuu3AyVfGijZGKyZTwt4rem3DHm9kT8oryga6MKbiEi3Yf2MEmrTaX4KGhhwVexvzNAjP",
  "key35": "zYT8abaVgLpfdbE9AMkWcuXPxs7oFqvi3wePAQwaYb2vWzFrceW67iFswLf1Uaem9m58ncozvx4YYCqmL8FemQM",
  "key36": "4zYpJjLYgiQ5tjXdpJbtfKVrKzyUGyFBbd1w2goafTsL1iF5v8aw2XmPENZFj1uXnS6LmXrv1HssztcPCQghp1Wv",
  "key37": "3KSb3CBBKH1eVwZ9AkfML1wvDVDYD89JNurDoMKqH9xF8F6X55ooP8YHNpACe7eCr3dJW8TsEFZMh7GAec1d7oS2",
  "key38": "RrXYnRoHagYv5kPwPx2qXqXE4wsBau4uSowLvmfFxT63Wn7pNE6a3D9Hxm94sjrddo4aF3nuEbhdrjN68Awv4uo",
  "key39": "4gVdbANQ8zju28j6nNsjtHg6a7v7EbLV46uwvuqPuKGCjFPfxNynoH6FKGS8ACkqkAL4pk34BM1pckWgSPkkVqW8",
  "key40": "3bHG4Bh4cRuHNCuNiJHXTtuKwm4o1J8tdZNiMmAZPzcX4K2G6o36STeiditqU7mQahKVoAsbgiavmfaf13Ro6a2t",
  "key41": "42X4qCCTAqYwh3Ee4oYQtF8ausC1yJtZWUzm7r9MbMaWX6rdjmjANJmr2A88HL2w5K35WScN7Mv2UXhFXsoBA8qK",
  "key42": "3Auhjv9AMqDjuAdxuxDVD4iXrXukcHeQhgum2f5KSgApe1nJwBjU3x6ZsX8kbLKmYXUex7Bv4ZTjns278PCkXobK"
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
