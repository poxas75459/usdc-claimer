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
    "4cBhShZH3Gz2zuBjPxS4p9qL4mKTHAsLvrgFpKg6yYbaSsrezooau9cBSvmnE3jDs42jg4X9WFRqN1ftcLKKy1JA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w6UsKBjRZx16mws5ukYYVZNSphSTAcBT5Kr9hfxFAt6tGRxzeKDL2BsuMsvjuThN3maUpA6kHKAcWKDcmUd5Xjq",
  "key1": "5DB3CSRfTxu2E6sNujLk2GGAiWa8MMbHAdasCF3ouYXawvmEhbzLVPhXACZJTU45bv5xG362LKQpYCvjYcsRadij",
  "key2": "3zgEpf7Fr8tDkjBSKas8uj8iGaVxMUjbEGWHG5ujA9CFRdx9mfqifWRMXx72XtDYM3jnKz4X7CUaFX83HKGsnixn",
  "key3": "2aMy33MwuZF3KZ5MHW93LdZZq7ZPnigNjK3173tmyFkKMv2mFWKVTHTXthLenTDndZPWkzQetgkV6T4KpdwT1ZZt",
  "key4": "sWS7Hyry3jQ1CDGYydjoAoGihN2EBhhPvMTrE6UmFmuJqrEBEw2RBQLE1CmzrKTL7HBE1uWBWW7PwwGESAa2NWD",
  "key5": "pwPME9yhByCFvZfYxBKPSamLXHAA9UuA3LGSu1ZD3riPxCeMrLJ76D7skGSCgofrvb9uUdvNjQFYq1GBp43acSJ",
  "key6": "5N7StQhmJyjPbM3cexxh9BcpjjXSbk9Ur2qGzkW2VDoboMF7WCGpKLAvDuuNUrfRzBbhKWxf8CzP4bP4asVgmUnX",
  "key7": "3ki6YLLCk4frvetj45SXtCvqn162teaM5asfLVNAbsMnZEuNdpanpad7JS7XevgQHABypcXjwews5nrfw5JNBQ9Y",
  "key8": "4gvb8pqwRKtyDmhfCXkwqHW6xuGzNm7mx5RK2qvrKTYeuQFeLuZiTQgaBRR9VP4JuFpcGHiT2RT3wiyzePC7DAUs",
  "key9": "339Y5MDAkAwcGnA3RJx3bZ6BjHYScpyZ4STvyffcxZjupgXcCHz3uZCY4KoSwunWxsvEoj3oKapaNYiXTRdgGjzN",
  "key10": "63jsu3fs6atdH78WMpbQEMTUubrrPYWKuSkUMCqnFn6Cc7oLCWQE7rX8ZbzFNPR4WbWZWtHv6f4hTFue4PoKRcip",
  "key11": "22m9zDkSaY1RrwnsVSyx4q5m5eJt5swKsMm5HMbgXYEKzR23Uwru7wPHJUouuwTamyuiiUGHCh6nwevVvPwaJfnf",
  "key12": "31VGMpsw5iqmHPs38YdHEh6oKmtwqwXXqybTguwy5JSYZ28qcEPmJCDirjk1hzrZxy33jGR6U4rB8WxyW5WK7ueS",
  "key13": "2SuYhVvRecREms75HAGujvjaS35bJbNHxdb83DzykuAHYGD3N4wxkG4eMPg6aWUBdYndp9Ge3qiE3HPD8GNDKhx5",
  "key14": "RZP5Tn9UFDVTX7Lj6UCExqLRDaFf4F8fH7GrHo8yDiNfZ1546hkvDJytw7c2yos5infGvS883GZh2HY7KxKReYr",
  "key15": "4ptCkgdWaX3mfenM4D63xVfui8yNQraNGgCQrd67Tp9aiMhju2MrzWxorLgZVwgJTaLCmTrmooJG5ZS31ULbdWEV",
  "key16": "2TMXYGzHFQBXiNiAni4Lg4gDpDCGZewqNU74Leb9KVvr4J8AMMCpmAXFXZKzQWnbzdwuenKcZQNM6cKHukk8wpL",
  "key17": "hUk1SftqLPDAEjadxsD67xGmE1xxnqQVuHP69QYqT76mBRqErLKdWwGk1RH2f4agzxnF1fB9ptuP4o6MSMmCPfT",
  "key18": "5gXfPs4bDp4rKCY4yyZjXHoCMsqSnqXfW1SVUegkVJm7dNqgoHuRqGUMXsSsac1ETh1Y1wAU1Jdud1YdY3XJhaB8",
  "key19": "48vj9NKJjiMDKGCypoMRFqqtAmKqY6PEQiqzVRPrGoaNEhA5wmGogB2Yw6LBTcaJBB8d4NC6i6oeMrqnpetwBcLP",
  "key20": "35Qb2jeABK3XLof7YTtA1c4YmcTvQ4SVHaWdPdNJEUSxDZFbFfxXAbiyned8RhNfafvCYfPNGBR9oggB2Y9a6b99",
  "key21": "3VnAtzap69KJ2fyBh1eKEykaBjQWciRLDV7AJKyaMxCPDdgEJkDV4qMSQU8WxmHyZfiknmZaBZ4677CcRgLBZkfy",
  "key22": "JecwfzvY1FkJ2o3ubHVUpu1RURTQSJSQgwSFcL68pB1VTYMrBbjcWvsCUrrYEFEccSxrwt8MPUkShoBSF3EMAJe",
  "key23": "46375oXir1En1BQc412VKZz6Gy2kxNvAtAyowGo8HcPqTEDYtLv35fC8Nq9VLJtGDqgGkMqrfH7ucvTAyxy8un1b",
  "key24": "64LHBQtKHqfVGktvN9oSQBaHnwEkBvUNndmCru78zJqB3r4q7rouYD8jhcwe7xBxBNS9kV69UVSvQ68Fmes3vDQY",
  "key25": "57rafjPxiEfhKAXiuG78z3FymYjQqmpdKDbpkf43WhZutJqaeaJcs7T6Qc14XdGCaL41uGpUCDACSrJJTM5gk3pA",
  "key26": "2AMdr7GTJ1xqVHTwYwCLujwWxtUJL2eGqZDz6hTJK61mDybpkZF6ChaojwZLgRhXCBix3qKH9D85z61czvegwDHH",
  "key27": "wC7Ttym9DCxyqimFtWnUfxN6rYZ2UaAJNQyGJiqab4o74xK15ebCwG8aGa3L6AToq3USku4YGDhjuWB3EC9qU44",
  "key28": "3QgF8sLPVFhe54SZCMceTmKauy27DzQ7EeKRtthVtzRpvFvMTjLZAJJ7kmQG5Acw1F2K5or3zWYwMNabr3NxZr5D",
  "key29": "4TM7cvtYMMNmBL1Z9Dbo7rZvJdLkWZGUAyfh4KCZxkgtvUFJRXe8e9tS2uW62P7sz1dNF9qpb6Cv68N5Sgkssm59",
  "key30": "4HjRQH3zBga6ZibSp89GoEmhy5Jvx4X7qk44hFQUA44w9z5kqGnY4fznwnSN9MsFLSV1mT2jqSuwAaZGqw3sgZLv",
  "key31": "4fQcaFKoRFR45yG5GHM5S6NiCM9Bum9LY98w4aj4ybFeSgtRsEGCZbA7u9tV7YByopoQ1CWZMWgzFjZaN95bPz6o",
  "key32": "412XHU91kDY68kqq9PSewEpULnA2yh2NF6ve6U2Q7EtmADsSzpZMeg4xv93BmPq9vJz8Pq79CbYGmz7ozmn3Z761",
  "key33": "XU1aEcbAn7Dd1CqUCT4T5qCH2Adpgzfm1t4aKF4bBB2WFv4H4umWJwusUrtUhCGwwDDbQ6CHtWvG6A8ytZudCP2",
  "key34": "4ay371tDS77FEyNsJEr8s3oypSULDsDdCzSJNpQ88dHELJhETru1LXjW7GRiNeQmtVTSoyqtfUJVbr87zA6W2dLX",
  "key35": "2QeiPzo7pXJShuYKtzjXoLsRf7M4krktzHzCKTZ5eE9u2P1DDBzwDMP5AEWWsDdyC14spKCusC4ZKpngmPUoyPtB",
  "key36": "8DYWKAzzBPfnN7fEpVJujosdhNXhSCMwSp4wfE3TLb91gNhDqTxwwgkoYyjiHMdtE7BEds5iRwLf3f96cmctvXC",
  "key37": "4qpPfjyXaifRGhhrYbqnnTWBLhfhBurG3WsZ9no6tEYsZigigopLCtbdN57gsKcVnpM4wsgBHyzEfwRV8sfSoCxv",
  "key38": "QeWazmHJ3pKtocwYfGtm8UT3TUKBq9sHSqBW5Nw3nzyCBxn9s6ZtHx3Nu3kPs4RjCX9NQRWViEmMFfayEkUdjDz",
  "key39": "2aiQdq49xaXo6idKbrjLDEWKeGvmZAtmrj9ntedU12pcvir7LZARJErjTc7biRuRBP8ZLFhSyqMiD59kn7FXgvRK",
  "key40": "4ozBkdoth9iYkB161er1twUeiy6bLwuSx36ho8xgtTQdUfqzYXUbwkr34bK3Z7ZFgeqfsHPxFWZy8A5gRRwMhvZX",
  "key41": "2SK4Ck39LXbcCU2utKHXRBGuQSWMZDCjbFBGb1apkcxsF3VsyyUqyhTwC5YYXdRZBoTefnTM7e9F4vhfjrKGGMCd",
  "key42": "sH9haco29VQFcVLDxHEe1PzGC8YHz2GzpXWwYM8Wb9rzJWHmXVHtQoTQxFg3bJGWSRNMWbs5xCZmafJMTZKriVZ",
  "key43": "3iiiGzg4DZvYb3T97cqUrKWF8SR598P8PYGf9HqfMZ5UzJxiaLFCwMXWBeEkdzgRFbmV8fbVMoNeBdDgKTvdTpKg",
  "key44": "5To8WBNfwtyiKrKktAmr63kw6JJiBHnT7xS4LPsYWUpgGLTqpiufmA6jS362ayrTXEWMUfUUfWN5kDfw3QdgeRQy",
  "key45": "Dgvu7pkHMycLxhAHmjGKJ65kXPUXopA6LHZMBvdJm5pk9ejpVygA1YR1rdKPZrhpPskwdDnShJquTmLXNCk76Fg",
  "key46": "jBGMUnabEuCQfvzA4Wtn5f6MpuQ5QJ6mEjjt1xBTbhQNcx6mVZnKToddnAcM3Jr9XFqxAgwZTbB68aXaatSSfzz",
  "key47": "5cvMvox4tbENwVkny8s1YUJZ2zXXiKTrd5Wg63t5oqCS8HvehMtt9dX9gYuFugam59gzppfgEW3GhKhAVT8hMxg2",
  "key48": "3ET4VCVaiZ654DdbXACjKmHHqRiLeofR16PiRHenXneFP38ifUhrMTS1ujASMyBz7dmNdMgLu8YqNJYi4fZb2ER7"
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
