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
    "Vk2t1f6nVuhj66KeVpSvGLJdY2RLjFPMYRXKLUE66FbPVKD8nSmZug8K7vskbr6pEpbdx5ny7X4bSQ8j6NSU4tb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6hiw3TjKydCC9L8oqn6CAGyNxRGXJEW6Ft5h5k3pR5RJcS8Dt36w7jCmXVpz2EvAx5bwsDda1DwpQ9cCCYRTuD",
  "key1": "jX8LS4LRUyArUC2B9J5SSgBPyJtVEP67hKELrdtpwM4m1iB6PgGP37CxnHj86bsp2QDS7aRrVb7yU3v8C5BmRco",
  "key2": "4jRdEziQNLzb4S7CsJqJ6K9LrR3Ebs5UUNbZQEeidRzE7LNE2vjvEUCFDf8d5qptrv8JJLcjFDRfWudV4s2D6HCd",
  "key3": "2muhwamaU7WmjfxdMWQPujJUFcZ1EzhVTt3H2nb2qNJUCdd5moJW9Y5qxTMp3iQdRmPHheu8wFpB5i6ENy3fw92o",
  "key4": "3ubuZduCXaEhvSu9MxDcHKYJHo5rhtyrbeySGETSkUDif9EfsCLUSuAQZfKvkkg938tGbE6XUsnZy5qt74cFktEv",
  "key5": "2GRQgm1aHrjXfbtkYoVBqF3u73Z6nCPjZNL6jCcVjUsbBCA3Q3tL4bP5SyX75zAkYsfpD2RL66hdvVoZdsT6f3ZR",
  "key6": "3kwXGej28sRSN4u4RryEdY2SCfES17jTKejSTZUDLkHZG4Wqigw9KwRBL7FSSQqUFbARZekKdFdQUQsbmCtu6tLv",
  "key7": "5fZPmFbDtXYuRi2bEcZeU99w9f4Wr2HJkZe216Tob35fvqWTBicCYSRy4WwoJnALLQGjABHAKMcH7PqXyK81C5Ae",
  "key8": "BRB6hd99q1EmchNXUU9zrFD4mik4AAVms6CE6t23wLvcn6VcqSCueqC3GULsW9uvBoM2xuHnSZpn9xKiZmnz68h",
  "key9": "2GsgVTi7dKHUt2God84CJdCAQCGsRx464KNLMM3hGJWKmnj5Dme5Dv9sBD4jP6DkfK17An736P1gTCKQ5yZjTNW8",
  "key10": "aUxHTsGce1tZ4E5gJMp5Qf7os7LgaDHtSCiSCZ1i3e37srXRj2Hz2cRm3t8HZx8xqG6hcgep7prhXLwc9xYKE9c",
  "key11": "4yn6swJmXNxsAW28cHSKSHaCejKW1bRDqtD1C5nLE8Ezc741yu9fisFibTfPitNbRebHMAhpJevjjT5WnEHDgtDZ",
  "key12": "53ZTfXXQCy8jfAYDKWjZm72Q4HowxbyFTvjKVjgFu5Ndx3rjshaAp1ShudGU573r1hcJXkz7iT6hGuFKRQ5CvbUz",
  "key13": "4nwfF9cbGp4fJq16EaeGzkQ1Jmd2dTbpb7qA4hkA9oxTrhd2ndga8UykThR9UK64ZEwEEXrXUKEZKcWhmuXYpEFo",
  "key14": "4SpNPHTSzbQ7PV48VZJ7s1SyuXRwi79uWbEeBK9rSBmx7Yni23978ZXSU66BFVQzAXn7CasRE7Pp98R2Ki6dqxG9",
  "key15": "3cV3N8LikYaXjWM8Rsxb9nntLLWmVHfDKtjToQJVpsirt4hexZjd98BnH4KX3V4D2GbPGhDBq2QZvXjBbtxsE57E",
  "key16": "2CjDjCjGVBaTKdejhG3DwxxUACqg8PxgyJFe17FBgrZRYNyYe3p8PjvBammAEaW6avTvC1xqkMrpFr3yZSxLh9n4",
  "key17": "56TAd8iZU9KSb4pEuDDLs5WcUq7945Vn1si5fGnobPPqi65cRQ8QGmE4qiYCkr4mochnCcu9ZPqa5CgDuxwSEchi",
  "key18": "5joix5rmPW2V7Hk5uZBaDWHbFDUDw1pDiYGgrnyWPUuM8tJCuutacJsTtzxqWgRegNZQYW3ayAraWt3ZRXPkRUwK",
  "key19": "2hxGehpcodwWikC1MtvQkf62u6PeetULjArpPtGmeMnhhEd8Ehc7YeeosidzMHUbVjrEzPgmYcpz5TCTGgMYznrp",
  "key20": "2z9uXFbxG2qdEf8rSSqkBgKJLjgdimXEULBpQSps1QAGodfR7A84a5YjdUg1icyccU7rhGPzvrVUEVWWdrbz7RMN",
  "key21": "4AgyyZeLrq43syFMpcspJJwacB7aBJ21cttbDEvaTpcM5tCSLQm84c8QLXApbVUXhtfJUEX4qSd7Xm6QRoCZaoc7",
  "key22": "Lg5wnt4x3Hzqr4SxUHqio5iQNdQxrmqouYwUpLyrQHXdG5iqmHrUufNinkaNyfqL5SqLE9p33SYc7uDXCRnuzqx",
  "key23": "2jGzEAB7UkfsL6MEoTwZNrhvRCTWC6XRhvGdJ4N7Zntd4LxefeqQZZnRyAEYRfn4MVR1p9mWs4Nd1VBP4zUdFQVt",
  "key24": "4qe5J7sMjKRgQ5dgsCR76RQTA4yLGDTHhfygxJh4PBeX1MDKJMh2cFrFYwFSzppYMsYDtqZfjUPRJtBn3BS9bzVx",
  "key25": "4Yg2qi2fX8cM1k6CX5h1csyXj4YCeHGfbWJnxtYC5u4UhynjUY2Y6fnMcLL1g2S66KhHXJ9h3rhH2GKVHr9Ty5rk",
  "key26": "4GSkBLD1wWriP9aXSQJ8GL2B69ZH7ox1gLgPH7RsVchSWJPkzYBZMo98k9qwAdappd4PUL3mJUQP5BvWihqJF2fp",
  "key27": "2U1jHjt8ZNq4zkpXezE4ymUSTexiAkpMqQb19AthzfujyPMJqR7N6QToNi5fvR1sfcVCVgSaZm5ThthNnrAB2aAa",
  "key28": "vnzHihYMx4qzFUh2P7ufBWo6oWL77bEcT9EsE52yLLZuFVnT3DF6tNJGPiJf9dTjaz5bp4EGXLZ1ua7V2Vpptwa",
  "key29": "65HRHZ9GkbmxLsoh6mEdNMGCt4YR7drAUnwFKgwNh6FyBzjpswN1Qk5sr8qEcsncqtX9tiWCeqv7savKei6hbsA",
  "key30": "5BLc6eZhxspYM26C9DRrXca8ZH3UNUqKzMA6j4BmLFCj8AQJm5L46Yf8T6T2dBhDQgiDi18Zy4LPS7Vgb5FnvWET",
  "key31": "5WwnSQh5CVUCoV8amG1i3Lssi2sU2LQ6JiSG8PzEGYVvacSCwxLTvd4Jzm1khAABgWSCX2qm8SYDLBKUgsRTRS6e",
  "key32": "4HnZzBkdXs38DS1fgS8mhPjsfqH3E5vdghr64cZMnfWK2WAvDEvDcX73EeVucnZYk73SS9zH9H4QVdXEYPZNT6n5",
  "key33": "3vZkFMF23JrJ1ojNpis6zJFK2xrKNw6Ez2sYcE92XLwK7BZtDsRrnw9HhMuC58iZvKTrg2aN36W1mWruvdAbMRP4",
  "key34": "4oruV66S4VLSLeKny4b6oc38PRXmEoqEBJ59yvQVBUeeb2UAmQoBjJtitVM1kdFGZmki6bg5TLe4JjEozZqyFV3v",
  "key35": "4wUWmGSekGbbEEfdGuohYLiJm8MAuNTBPJnZHXVWAXZo8EPbfQPL4tjAyLgpsTAbDNFj56QJXFidbZ1EXGfnxTKb",
  "key36": "3ZD22Razq5dpXGXqSJqftZir1JmPat85KKNCG2XBb4bL6765BTkBFsEBuf6RwumbynQEvJoWQN4ERhxNenoydpjG",
  "key37": "3uXLmSs7yaEDQ2VyMoFAYqHwtEijjbfs5NMgitQ3UAKNEzdWfkRvqq4MbTkJPZUQfq6kYqy3iSxyiyYsUX7eNWbD",
  "key38": "5AqBZJj3s7xwR1eYrf7tbmbmEg6pKSb5QMnFqURHWJ2s9UWdZxbrhBLVFPEbTbKuGrDvZ3D9aX9BRQd4WFRYZ9F1",
  "key39": "4SNgnNreAtrumCaXEV4hehXwiiQbKhnVioMoQKp84WyvpA3nQop1iWJ1c6whZRxUDpjRm3TUwQCJVehfvoGu7HQQ",
  "key40": "4rpU5ExRK9G6kBd3KZPEpzu27F8fYh91TnqEtxjUzdAVoZQBiQVeaCNgmxhmNiW1NpynGqbDkbxKH7THwdmsBNB8",
  "key41": "3pKsK65FCDPvdMwduDMw2bxmjc2UKpG8LjnpMKoaWwsFYLA1ALsHC25eqiKjJwJr3nUBt3G7ux87MDUkKF62K5M6",
  "key42": "2oqYoboub3zSSYwDpJd4hiyEQujLtuDeaU3pcKcE8Z1dQr3VVs7w5t7PEMz3LNfxXPVZPeX3Bt9NMGvuk4Kn4HHn"
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
