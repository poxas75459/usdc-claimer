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
    "waw1pHRhN8HTgVhcZzirDzNpzAgxyTTQk4BTABgVi64AXh6H8YSzUaBBEuurrgPPbcraDCYQyZra9UJGcT5T4w5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h8R8Se6eiw34vp9BR7AWXFCWbZjQDPR89c6x4Dv14nLqPzwRhq5uRPCek9kpFNLnvKg4BdHoFKYejc74hQLVZXg",
  "key1": "3RqA92LuZ8JBSKezMYq83Fy2utSTZPecepU5cfNK9p4QXMQRHgTWHJp47RkhvStgCFsXYTQdV663wWX51Wra6ieg",
  "key2": "5fjhhycvxBxoiBzitKcFxZdjGs7pcKv9TYhNXvKsSVcyQ2ngPKApUNSHgNhPey1PWkd4XrBTHRmjkCBEZg4vnWbQ",
  "key3": "5g1HJX3X4qcwRU6qZNm6KquXZ1xRSEtF15tTM1PQN8bh8PDKvZFTXqjDxJ5NLNaz1osKAqS51D7bKaBwzjf76qHx",
  "key4": "3MJuAn1niMgdPHz5RvLLMjTPXnMrqHPHz5CdJb4QBQ2u4YduR98fn6pDZxKofGShhLAKYP7WyTUSYa9BfZsLxFyG",
  "key5": "4WrALZrUeLwpZd1wzz73vY1rWk6HkjGzspn4ENCRGRHeGnGaFWPvx8tUF2fCAErwMfFHESVvhcMKTPgR9t3MdSSJ",
  "key6": "WkyrauNkNfGYKsqLafcnaUauiamg2ixzTNTmSg5TUTWC9vtGJ3DTcfr8nqFJMKgpNmDRowGaoHS46hHpH5o2tD5",
  "key7": "3J5UEoXxnZCzrNgiwG2nWWYzqCkovN15wxN8hBdz7vM5CCP8mFQzMMMsoD964mBoS193pLwQDFbbwksXXs1MVhpy",
  "key8": "CjJGav2VYjMhhKGRyy18emfxrbgrfBY5uxd7R9VQeydPCRgkzfRb15ZbS4zJrh1QtLFCF68LmkyL79ks4efvEzr",
  "key9": "552nwuvMgrJYYcN2vEZjgCM6KKQZvmTJC3cs1Ws4YLTTgYvq2LPu2QZtvxtDmYL5VEZuFE7r9TPc8rVsqT1T1nip",
  "key10": "sX1TMyoDAuyEKMU2ihAUYoG1vPhhnkZjKfH7puiubQTLaqeMuhXH3XKqehg6w5yAKzdvdmgu1GBsUh31QA8nnfr",
  "key11": "29gKjH4c8ZpRgyXwxcNLgiawsh2i5kj3rsnpzXuMP2F72ktVHjNWoiAr6fPK6Li8ZeHURxT5VBKQrLwQfngBs43v",
  "key12": "36XqNJVSHsFFwdNqhjCpik9ZMnB2smLwmbjYihp41mJPa6aKBwwfam4z6aj4z8URDdEaTY81pb8SeB9SkYjMdg6P",
  "key13": "262Tx9vCa5B5xcPT33wGmEBhmTMT4mHeeWarkrWpiJdCKxY8demV4phovdz3Ts5LJ7hbaYKrvE3hePUPGfzMVuYL",
  "key14": "3uC2GykvDSYkRpdycJWnGfMxFg5N3Mkx9j65b2ZpTTKAnK9bnsUr5dCCWoKXYXiS4CPv2s7Rme1xUBTnassstw8J",
  "key15": "2YMFzbWGjvmFGRHr7otthRcpgiXQQETgSRj75476VMYUodi4VDpGdQ8FeCGkbBTtbxEQXuni47vsnbCUdTArgLXY",
  "key16": "4Ud3JLmxKriFLMuecmbSQRQ3yJtQ1zSxQ5RaXMbtSvf8jTcEat5GKimczTDJJw2VzAKrvbDqgphdmWyRuZdPBcJi",
  "key17": "uUqwf44npxrZTu8AvBNYRhyUcdHZaoZiVYfnv61qdLjkDBUN2TjxciunrSs1HGkpYQKCaj2bhS1RHG1XQEPALnB",
  "key18": "yprcVXKbkhGFoiToRvd6t5cut5kyE5GgXyg4KAbPJ9BW7pysqqRqn3Lu9dwpU4KvCqw3iMgBJSrW8usDjTVxVvn",
  "key19": "yFfvVxJdaAhwYGhuwfSKsUvANvFDi2HARKEHCBaf4CBzHy7AA942KRFWJM2nL8uNkVCGvCwXgvHKVj5oti1GvUX",
  "key20": "2QTr2U9B8m6wUT8ni4u6z7iAnbUH4a9ZyYF9PDfizTpHdG86VYLQdNtfp5qCj2CyrFwQ9sLA1adzDwdoywMSwtzs",
  "key21": "8ZRCa243q5bgpH5YLGhbxSGtREhKR9oxBTM1MvtpNMWnTfeqXnvsuwVfyfefRE3D6TmbnMf27fxUHY8A5EgSC8B",
  "key22": "3DoKdhq6VSDvgUsJNWYqQDMtduajjwpHVUUFaHVGZUB28yb31XdYJp7GnpTumzhyit7oq5puGq9Vjqfhg1KZoP4c",
  "key23": "45gXqHUqhk9g44mg6q42HoTPKtPn5fF19vGKuyvebDUgvdVDTkTCKeFTen1Q5PXPLKDEYDbao7kTEUbcqpA6nJs3",
  "key24": "2ottvupaBoJBKUQZzrQwcqG2LsS51hpwpQTdCA5kXQj3q3sdyjjMQSfg9BqhkwiYkE3RArPb48r9ctagyAhUyJfW",
  "key25": "5pkpZwnxWP75nGN2D37vzuF9mA4tFhgJs4iw9o9dwVir55GrHpPRNvUcUJeLXQo9ks2Lsf88c5Gnnddiu87Tpkdh",
  "key26": "4YGdcD1pig7FZKNAm2eduNYrQzw81tGVWfztYDZh142gmPyFnHuHZxChqGHEEJPfkEhQuAZaG2SqVubQbr9rqgbs",
  "key27": "JHWnxK2As3DsBaYE5MvGkovRSVTWjpbMXsnSLQASjH1uSHrk86yS3eStpwdbzo71VnrtVHMhyJM48dq37ga2Awd",
  "key28": "rRYrK2MT8caiZ8dBf9GSds169cS6gH2JD5vxiuUESm5oqN2XnUxhHS56MKVwZqJfUKpoHnipidCY9VVg1NG1oKx",
  "key29": "3WFDJ8UA1zZZEKrWCTa8C9ZW8Hs17KTuWJLsLpfCxjuNde5EkzM3hWvYtmvjbYswTTC74ASL7PqhhpDGyhfZEUk3",
  "key30": "aZ9BQFuBPviunoKkYy2f5TKJrMmDAzUFXhqGftNqAuzYtVp6eRgoTmeCokzxUz9DeVG6f4HHBk5R9rwrSxxuV8C",
  "key31": "2jet19YpUvpTrjxUdZCZ8Ah87sUwh84ZrSrs4sEMmRdgAPhQbgsyeiz9GYVb8i3XiQcecLP5a6tqh2Dvnv14ujnZ",
  "key32": "2p12FPve76HyKDrv4AXw9muB7UUFXN7H2Cp6z5mQhdnCTgTSB3FgwAhjyaRBxWGk4fhQiiS1bWWoSfak435HnjaM",
  "key33": "5w4CfFBDd1c6ggx8vE8SV36oz2UutTCPN1qx9JEJ3W5MFTnG5UAnGRfEjUNGicXiJVsJV18okAvVLCpPJ3YAnsn1",
  "key34": "MWy2G7s2k7nYmBBHPF55xxd37jb78jUHhY8FJ5atYbuk3PxmWQU2jJvyz24VtACCAM4GNuf17fabFQPu9EDf8Kh",
  "key35": "2wN12vVk7aNbtfVERcoXXDreFEhMVhMJipSYb1d9Sp17SNarEBxsvuNt2wCAPniP18Y1VyJwA6V4fR5j8XmMhxJ7",
  "key36": "247axmAeCyMq1YtqtjwuPuXMG7piePK6Nr3yeFXgjKabvWsW9RACT5yGcyKqgWym8nrKvWXcUoFmYxzSYewMsLa9",
  "key37": "KESiKFTW8iJ5TGCecJQaut84XiMTJVyHWFCqNDHhGMNhjiyBSHDEpeu3uYtLAST6eeJgqFTzhwk5K2PFngVX7np"
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
