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
    "4hoKoYA94ECEzT2JRUtJxUvt9eTSP7EC9P3BWZTyC24XQQeVk4SHUD2qmdBaueMQ2r3DopoT7V3ScWqWZEhjEFXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37sEc2A8rxyCVTDqRjstD3SsbQTfgkguLo3GXK7j8sBYQKZeEQvqGKZuDVW2yBWAnWXoK66fS8okkpMfP5sXyZHE",
  "key1": "4ZnZuob5fKEUAYbufmGt5r5JtcctoejXhbvyD16zx5jqi9L7UkXBWfzJFjmowEbX7Ky5QAK8rcgGFQWybTXT5Pb7",
  "key2": "2D4T9teHkkk6B3fkPGK41axTdNCk9nm67fFdWCeQnAU8FiXTVHc8xYgMvU3r9CMomh51GjxPK1LwgWUnpb5oBTr4",
  "key3": "2YHduht3gD1ZLyf8TZoigNLfAe3tgMvJ8wNig7BxJAtoJBTUnofBKaSQa1Xv6fbTWEzbvYQtUHh6zrM37PjJ7M4X",
  "key4": "VuAWDTiLUaPxWtCxiVP2yBip7KhKxeWcNaaXrtkFMK3dGHQucTCihCwfzpnC1KR5MCRJvxLj81aHsvBeNa7pbx5",
  "key5": "57baUUKsaSFNjbCnLk7hxKVLQYwX9gUbnjBcPyS2fr6xaD4jDG5MFRbXb5xEhmbWDzmvvPgCjFXdjfxxfHtimyw6",
  "key6": "45r4pyLonPfKCjck7TxiTENnefVawMEFeWpDSK1CEopCuAL9Mcdp842khGYWQ5tbLfK4Cn4vUhfpdk7TvQLryWxJ",
  "key7": "3b5u3Hmt5P6FKNnVRyHZAeKW9eJK8JrnHZ3yoDVqMS5EpJg31i9mfPMHipvunivzj2vk4UT2WpErYMXM1tsaH9UG",
  "key8": "dHcVYnGNSsPvD1x6saPUSX48gWbGqPzqe5VuJLnqDZEfbNv5JURPzwr21XWSsdi8Nkq7YDScZgVvY4hXu37Hxp6",
  "key9": "5zk7GGN9bstmYzq8cdZ3awcGbVsQ3ogvUSW7X5Eundk7p6UyKtpaH73bs2WZh7PvvcE2pm22s2w2C76o7ZLqLxwG",
  "key10": "64JSDBmJeGRVYq2EdeSdYYCb37NwtLFrtBRuVm4iTKAfHrccxJBke6mLVqKGx5bBrcXyQHXHfSzbFnhmeqo2Vczo",
  "key11": "56k4cTB5T7wV26SgrimxbA9fLPkf7RZfpYTUUwKAzhVcYgDzf2H1kUa8naMTSB1NLFgK2XgqETQKxRL9Xj9BsiJG",
  "key12": "4MmzKnpUffRmPaTqPHhuKHYphgAy87YcHTnJzd2KmG9UtaA4gEpEu7erAff2W3RQ71dLXoqihkJG5wK1PZG2GsLZ",
  "key13": "5PHQ6EgzxxRsy82wtk62jgPdDy8TgWe3MFioPQirCS16DgJXg3gobtn9UtrkecENkLVertAaQemc6XQCitPVufBv",
  "key14": "53LSLjAxCpFZYU1PwfUJsaRyJyfR84LLCCRXBWDZJvzWft4pnyH1SuSEqYBUuRhyGsdm5DTigUs2C4XvCeUmkLJJ",
  "key15": "3iHFZXBfqTKQvo7a6UPKADvveUZCDQYYPSZ6eZx93VggkgCe1te9XB5TP9ChJvVd9MZPrB9uPrAtvZbBVpmY54ec",
  "key16": "3Qny9qGpbBkDRWrJp1WTN2MhoSuBhu4Cnytxpvm7FUSuBaax9G52RDkU27fmk3Kk9msmFJcchoYYTzUEukxVqyBL",
  "key17": "5ha9iZubiv7Lvqdh6QDeTPrgMVuv2h73NJ9Kcoj9svEaEPb1nzqNtcWYkUq9v2R2X6SYGksyLsquqR6a85PgyFAG",
  "key18": "24fyvr5eyXnfUSbDBksfBudV43Whj1AfUAzfe1586qJ65teh2dp2M3WfLrfQQqVTLoGiJsXjEWky96B8PsS3ZKMg",
  "key19": "3pvhbmkNe4nQnV1SWWMFuWJNdJyYHGigrMp3jMyM8tJX2foERMLSwJTRrBZvomGBXxGpGMHqiz18TfnftnQuEGyA",
  "key20": "3GvHteWWCqzyf6HBB82kfrJ37AwLn1PiSnysdJY3VhWK11hkXS39KGwsn8JoY9bjzS8KuHsgr6DdXgBjG1yjgagm",
  "key21": "5sCqtd1X7ikUMN76GG7VoZPTrSdKpDyG81Bey3cft6u1Ro4JAZJhd8V2EnraXRqzqXADt66RJN34jsfdA8VDoxKp",
  "key22": "pVajb4UAdS6Tgq95hgyBDvfMXZPBbq4FyATBTPUm6YpLdpAeYhZfhLpDhsDpw6wQ661Gop3F1XGAyVQYtHNZ36E",
  "key23": "xrySj7ffHbxsmTi7vQ2GUxDAVbTjcTzMs7U1vz4AtbC6oVqX4KaTYY75e36GEkfZoGDwn4GZir1dYdCRv8LA59M",
  "key24": "gyadArDDGHuRxAGeQLMEWXX8Gf82uqQKnyyC4RRH51htqGucairVj36M4cyTqt8oxpgbzai42RVUih5Wy8VF17W",
  "key25": "4mxzMnvXbS1C5C9qXX2R27pHpUcmdphbJZyUnGeYPb3BvXPNgE5g7aerb9gTptDAWbQRL3B4HshaP8ypW8GAFMUH",
  "key26": "4VAjke8SRvPj2GBwqNUCDkZqUeoVjnm3iuhavvDNxqRZaqzCF4kHiLDaTPwkoaYBox5TbYRtmFwRKqijo7eAeXV5",
  "key27": "4u3HQc9Jwx9f1gDknvqq9jo5CWDWYWU2U4FZCnWRMQXA5Ph5yRNtszj3S8SYk7JQURqWbNLcdHf5jfRX51FS4AB4",
  "key28": "2kRBLuPP5HPv7hTup6CoM3ijQzsYsiKmBTru1NRDgjnh5eUEXRJmWVFVMRsYipu1hxAsSk7ZcZ1rJfue1e1Y9Mew",
  "key29": "3jamAw9o7BRPQMAup9aTeS867pA4xGpKXwLDEp9oELca3WZxUfyWUP7PYWqVqnmryFQX2jNLhdjc9ANeSrreDfFF",
  "key30": "2K5vEv5yjDxXSE3nRcdNLP7kkuhwQEcbJ4njDLk3t8PiZRunKgD7CMB9wU8F2kdasRJHCCKmEwWVdSon53CXWDv5",
  "key31": "3psVmTPgW5RzMPUZMfniFpsTXDpcQgZJDJYL4tybUsFpuNvddvLNEBUQF6ro6fn3JBojr46dAFd53hkfauzNyZES",
  "key32": "5N9zD4TN92ygzeUtKSuoRHSq4SRsTLLeUjinkL67EUkDQLVpCC1qUUgaJJ9KZHSmxFGe2FG47KgJuwxi62CX5HG1",
  "key33": "4KfADHd9i4VucyuhbfHSXHBpTgN9soZGAZnUUwpi4ttcXdH8KENLdqL6CbCAyzBHmz6gV9KtcDzSdHmSnM8RtCQq",
  "key34": "5QaQCGJZrH2iVUZj3o3WQxHUkwne4t62gB7bAU69y4VjeCrUv5pGRDSVQNTZnhTMtFw957d6fUKzjL86W3GrWETu",
  "key35": "3UpsxF5C3B9FpdtsrGACciTHaeijbazhUSrxK5eWtqbdR53yAoBKgkPipcQXCRRYzuM9W11HSQapgJSbnnsk76cU",
  "key36": "33pqfqqPS9GB6woai6hWFWxV7LMLMhzYRbLhBWvJo2oaBxPqGjypDArzECWBh9boasEMeoByh5p66cWdp7NUHX6J",
  "key37": "43WMm6E7UnSAfgCFaGD8YXyR5tauJ1EuL8hrHNScLYT81MXEoJdYDUatkTjSvXV1aJPyXaWR9xeMd73gqucs2ALN",
  "key38": "5SVt7tp96ZUZiDoPgFHJfVxnRZ13KGvSFNmmqjoiCXTztqxqvb7yMuPacrS18QHhsMgy5qMNAYxJ6CYmtWg7o4Kg",
  "key39": "4hfMwdTgANiA4qUy2q2L34fQWSX44yx7qna4aVa6QDq9Yu7DrPZS9C5XZ1TtWEikKWsfKNLRDGsZezqCA6iHJZP1",
  "key40": "Aikwp4WBoqs4QrJNN28BdCR6bz6MgA2X7XTD5LkJQvisvyQ3GYU5itmzwJbBWgR2mRmD6kWKEkyytyQ4yFopUsw",
  "key41": "3dF3e3w2aBWKW3YfQczW35Tk2aHgn5T9HgtYRrh7GXxvQZAa6a3d61Nxrj4EyxNzNrT61bz7jmGCmB6Ue6zUTvJ1",
  "key42": "5LH1DWkybFth3uGjuBPq3fft8wavnq555V74QbxvJDoTcNDqBixAtHvoDDd3wkUu83p5S3VxMoP6RpA16iUkwM2c",
  "key43": "31tkC1kThM98CV6xC3DNPFsLGGCDBwBGGWwBAUfsfxwabmrLajhcEEqCSDqHnMecwHY6WEYfr3rr5ncsN8vodgsk",
  "key44": "4BDmyhyqks4ZbKidUM6kxXD75SQG17JGrsuHPGPM8kSKJdriet8oc7h55Ay7hvewu6yT4kLFXt7jE7uQhT6Qnvvx",
  "key45": "4E6fruBy4PMUMZ1iMxGPxrWLtRvhf1dNnKgkZeb5hGQVdJXLb4hbvgUpndoP6o6ZDoBbvfrady1pXXi91U6ZNWTM",
  "key46": "5z9QWCkUeUfbLioG4Hqn2HqNZpfWmg63np6c251d6EMswCKWDbZrP65ZCi3oN8cz7kHbkkcMPqYPjiwDwEvLWe39"
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
