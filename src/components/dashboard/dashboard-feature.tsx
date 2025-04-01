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
    "5CxpXhtGVpUMUnqx8RGgEn7CZ7KWm1d2AMPSQfbhVr8bJ1NtaKdDw5pMQJaQxy5nAd9zXj8UT9eNEYVa1xMP5VPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Qz8F3JXtvRam4HcWnnsHKGFF4fkM3GRUmMLxcSzHzotEnFk8pjiJaeTaAcQRBWBHNzBYvDomU2FVAvdQYQJGNE",
  "key1": "5UN9YnHQTeerTaf4ZjdipeJ5yQgZLVztQ3fzL7JoUyu3t3vHzEDATkbHzoWZ2wYV7KYjiwcFSuxf9xu9ZufDFvKF",
  "key2": "3nFMz71awTvAkQFRzqyAFqwx7cbjyYj8RR5rob6w2TohCry7CTxLTy6ZKoT5MET5KyMc3f9RcnTrXBqG7HmWERXo",
  "key3": "2V7R1vBds7XZ8L8DSLSKbQ7PpT5CCvFpCZaAPqjeCY8pmSdbSwqvuZLgjuGzBUkEMKYj6kt4GF38788E3beu5nNU",
  "key4": "2umg6GCKZrGXQy2axrdKsu2VPXUSwYkbWVccbucQcVjUjCcp6u8Yz5ZLYFWFcPLKj9BHiK9fYjU2E6xbgGpjL5QE",
  "key5": "5CJM6ieyjNnsyfnTyNGSDWp1AEN165HEXuwjzFdu8GoLCiWbNdUbVqmrUF8LpVoxCYrYDeK4YpzL9MGDXSzdhmbF",
  "key6": "4iBCjpYezZR3MabyWpTgAaVqcvsDihoEvC4LpTpVGkCAuTvtqJXgfnSxduQtnDiWCLN8JNWXasX3Sr6HPzeeFPEf",
  "key7": "4a1W9DhXTCAqE4gbZPnXMPxLH5GNkQuoG7zZanEs47LuSEy6SUJJzX1rfucGymaeG4H2WC6PWuxGTKU3Yvi2DuUr",
  "key8": "5TWABb5GmjicwBwQowVi6zCy1bG6k1NnSczRX5ks3EdM5RpXPFBfHEm8uFiVDksukeLaLD2uccXniEWj9WYKUwvP",
  "key9": "N4gdFunShr4dswiyTEeY1urbNjpmG4veTudUgKKY8H9BqzySKcZ1aDv7GMniaEbTVTP2qwunYXMDw1id6xqTerR",
  "key10": "5g1qbhHRn56CuE9RfURZTWWgMctGvvzrm9N67AKoQpDqwjEq5nUH7MHi5ujmHcbr1GRTaWT43pUwqSDSbEDWMNDf",
  "key11": "45nixYehR9QKmZ5eipSZVad1ahhQ8Btn6fwVWnLfYfBiWq57KZTytXiX7gsaxbpXvbAj54nS3FkTkURBawy6tncb",
  "key12": "26aAcmVP6fmvmP1v2uJQrEHJV5QnYbizYF3Lak6bzqdF9YmCH58AeDAjo8BzaWy9bEQtg9YCbkAeTzRFbyHKTWwX",
  "key13": "pi63xEX9GvFhso5wgbaJdcWqW82LGs7cJhVoXgDTWhipFZebEnCQVxLexjtbDxHo5J98Ee4QQfStYgfjanxxRqB",
  "key14": "4KpofjyZj8Yc3pSzg4BpW1EME7DvBF3vHGeN1pYsH3EPNCus4FSU3nxymps9YyZbxbt3FYTfsfTowCPYGztGf7cD",
  "key15": "1n56hcGrCnKKGNbyJqw3WiViWWzwNh6iWHNo21sFcT1cnL3DpVKm6c3mGCNwvF27n629ekBoKRU9gV2osnkcPjU",
  "key16": "2bhxs5zRcEPN4MqJ2TcTwNzAU561TpuWVPSszgKaFXnov4BNx2hvtpmhgBt2z9ZxH98g5ik8t9giGJE6prmR6hzu",
  "key17": "4MD5u1h14zN8WXxpbNshF5Uzfxj53ugvEqVnoZfcPBhC91duWPE4BjxTfE5ikWY614nXx3vfFAk7VfDbU6jPbpb",
  "key18": "41EMrDf5VZETopH4U8ZBHqZ2EVEN86EDDU2zcvnwsFQ57wZiEKhL5k4snhu6pcEBpvo3z5PzTdTRzqUU7hb4qoZD",
  "key19": "2GuqJRbMuFJCbfyM44KD77h1w5SuLPJSneV43BUKyRF7X5PPiMhn7hMRgtQqTNAcadYvUy6kzCcAvkRA8Ka6jhiu",
  "key20": "5XcpKEpKqKJfqFofqDEbV4NjgPmkju6sYTQHnCnk3XJNYT3QiTFEg2nmQAbzB8hPhd7gXxrBcygMUbLkczBPTYRA",
  "key21": "4qzcBhKtmoKvDfMt2FQDAwvFARSd6JRYCFHUzW6mzVE7URpCfvF8MRYtw3tzRuYxiTMmrd2PhiumtudN4DsRuG9R",
  "key22": "3RYLiZrqetCQ63JLNT56giVNMsyy3bPdzh1wDaxw2ZfUBHEKRGp9SuiLvyftDUpydhskmMHAsMLs8xkEhod1SahR",
  "key23": "3PJHaeEBnuXqPQrYBCw1V1rU2jygAZWrgpDtmF2CGq8PidGo9qCxeRvbfjnDfRB6uyyjxjYUTyhraT7Sue278TUC",
  "key24": "FuHQpvYS7FHa3eZg8QUJbxNn3YKjB4ibNgPPX711cvn8zbuRU1K6SriR8hBLwWF4rhHBJhHQ8rvQCPuAyPou2cG",
  "key25": "3W9RaGv2gxpACsHrbuYECcsMD7EywFgCnKkSK8depAV38fcUsQXcs71exjzeMRhqUqMDiSr1HWZUvKme2PaeRL7q",
  "key26": "z4oguDq9LMnvc8F6QfvHjQVx3YnzLgWAkwgwAoX5yTKLqRsDeA3JgEbFQJPoE95cqSB7Bjv4zmNe9vam82azM8t",
  "key27": "31zaGvq7Wk35yuAKFRRY9sPDh6Ljc2MLBKJ73Gaj6zWpGV7ua2bQW2YBVEj81jNfxaAWypwXH6rnG95kHvx9uWuk",
  "key28": "hdBaM6sZjAgQg11DohKedHrEwYnD1HjhRcARzE3dW96zRoUUX5TK2JyaRH7hqXNHScNVge3QEyVB3DNJwj37BoE",
  "key29": "2hzyY6DyzHsJCnBXeMK734f2pdY1bdDjaBEhg91YqvydBQpGjhHRXvN14ChWG345XXCRdHA8G7ySyPqnR7es9r98",
  "key30": "rxr1Jb7cHt3RCa3GrbNdYAEavDkjMnHcBG743HAgKNmJdW685y4zzxSXx3z1anj5MCuTdrGEVzdnJvcGmrABokF"
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
