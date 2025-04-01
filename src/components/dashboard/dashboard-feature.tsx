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
    "57zzLJpveXebogesugebxVBwvXf2cqavAhPaVBRwJ7aN9WUbiepHiryKKQBgrRwZmBu9vpN2QvWmCysMTT2R3DKj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zjPCpyp3cdFSgjavxPuKJZpuJpnPd1Yxfw2tfaXN8DdrD1HvBJA6dcBUz2x235AEYRCQeSDf25kpY7ptWwDw8ZS",
  "key1": "61ePLvhW1AehZ6gw332TjU1KM3xLgPCB1q1mJ2yBPZHn53CKrcEEqxj1TAgKioAvht8Wvtqy7sYkgYjzXJ8uh3TZ",
  "key2": "2VJTBJkB5e5FxcKYRE8P7MwSQ5JGGCfxqNJtY96NP3doiNwyuR4NoYEppdYJXN7JnEBC7cwczULPqwMrjwEYTHBm",
  "key3": "27EjkR6J6ztvTy6LUYyH4N8R46VSfFVPqpVw64j3EEkKyhS2cLzhXYC6LWvrVK1Lh1Vm5N5yCF49vxgcg26WdPHh",
  "key4": "5NKZ3s9ndSLzxHdFGahELdDUmEKh1V2kjxxeR4ZGCwi4RLWP6LTow9YKqbC7rVF7UUhvRaE7tfjovsDT4XfShsYa",
  "key5": "2T4Zzj8KGHNK8VGha3QdTLjbZtdvCBxbysfbHog5Uxeo3zbisTAePAogytMzZHGTC2icXoHWL1MNwd5b7vpdvjWG",
  "key6": "3TcKWD28RmfJ5oFh2GRkjkoXcdNkkeaLuY3i9DNi9p1fFSWKdvUzPLzRJK7WsP98sJuGeSbH5gBvLCUFDSZwMAgV",
  "key7": "f3U3LSxwmGs1YShWJ5uePYdEyNhqG73GhM67egzkVBTPkvdniB8JYJDZrzaMw8hCS1x7Y16m7N2pdPUdQBW1vvX",
  "key8": "2fNKoTVQxg5wxgiAzAysyCaHRrePjXafoppYpkWdazpBb61QY7knHPEFyjVTXwbx2WiQiYXfaQEgGr9WVsHtKRDk",
  "key9": "4awKUwMBNuBsGZ4MAi2ZmDiaL46ndCnQPLTgAd22zwK5RWPfRuWcxgRFz1vpYKrjBcndJqrhrHcJHJmAnKr4fCCK",
  "key10": "4GU4AUdHPQXqQwhA7EY6zsZqX265uHrSaqrh4mDaVprKmcS8YnZTzVrWHmM5AXmF267rzCrZHBFReZVqcnURybdq",
  "key11": "5XrELvimGQ1hADyZPPEcQGUZTjfZpagSHsBnpt7c76LAovpLi8Sgn5wPd3sxHb5QR3GwXqYZB42jXQfXZouwp3kD",
  "key12": "2WZL2VCsKrfoWHvuNHDLKKSRM81rpaS3dU9EtSpncjNUsaTjz3jgex316ZagVDTNrR4roZNEf8ZdPEeYZZncRSAJ",
  "key13": "5DKrGNG6VZ7xUw4BHX8LjzhtnRWE6a9hydNYJAaH8a6twrDmCnQH9zTQTaLMFHYp8VM7ovftrsaAMYqETKia7ku5",
  "key14": "5CDAAoz5mfqSd4mpJGcSr6McdDBpw2yW1d4aJo4JoVyzxGDRQrv4jJSVzTjm7oUjkDveHZtq9x7woNoz7F1pGf36",
  "key15": "5qvqTo6FqHBVRbuUdriL6JTLHJnbd1RfCiNwrfsJ6Dg1heaYTDad7zWWW6sS8aLzENk9t7MDFUmBR7KFUjVKKE9n",
  "key16": "3ucFT9JuTJVnLi1Z32XQU3FUmoEh8c7tvQ3JnBUEH9b9SJ62L8oU9AZpegTKaDxbwLdsJ16Qt3BLX7i487imscBF",
  "key17": "2QQa1Q3iLc86R6ws7V9TiSycKi6WgAMCxgxuEwJoBV5VY1AiDo8fGgJZt9kxVF2CibZBt1U9QPCeFk3mkYmxYGAa",
  "key18": "2y9gvt7LdXGgTRPzHreQshiv4xkrxduUwwbddbH9YdEUqcTJfnvPJxEhdgYKBW7SWbafr3cBQ5tJgcaVT15qakEp",
  "key19": "121MFyELztftpG5fhntskQqoGz35koEei1QyvmTTSm5wmTU9zuwuy57czkNByp4WgXjQZ2dMxiaTV4SSf3GeFeMc",
  "key20": "3ie3aPpgV138Ecud8ZYR7cZq2mQVQexPiqKfMzhNPMnth8UaeFDqW9o4feB6mDKR4dG4Cm8BN6W1A3Q62c27Lq2H",
  "key21": "5HJc6uPnHgZ7HKT8kKo8tU2e8ep1vBuxEbnm9hxWDoB3S4kX9k3KkbAGfpMtFpZsY55QM7LqtjaPVTHqSKK3thym",
  "key22": "4iBtV36rbuUupiVQs1daLPbnycEhKdpirdoRtpy7oCBDL1ByV2in89vS2GVxjUsJggLTYg9KbahFCtJgbJn1Kn7a",
  "key23": "2mVFR6kmG9vmxLntKDroHJE6nY1HM87LJwduzSmA7AHo58Ao4zgabL22YvSB37uW9PBoo7dystBNR646bYMgxv7x",
  "key24": "F5aHxoR1v4v4Bze4jJJi5PiwcNfzGPEyAEuWV4Hw8cC2frCEfXHePK7hzEsJGpjcXkmZFFdqEZGwHXkUJyXX6Pb",
  "key25": "5rfNCYyoEmpos9UeBEaZCb3Q4FG31ZoEC7JJxR3DxneenvZVLZoaaFnweokKYkiwUB5MpWDgEX5cBtruyGDDjbqU",
  "key26": "2mnU1wr7hRxjBHNtWQ6DpN5VsNu3njTX3eAv9BsVw62W2o5aLMZZ7WPBc2PrzNjcuXCp6ab6gLcuXUe8Pa9cef1A",
  "key27": "4AdBm6s8QJ2a2ryyxcNiBjQf9cU7R4UpyejocMGv92kq7dy5bEEeAxecZgsYW5WmcyAiuRyCkk1JGYsK8SCQjnQa",
  "key28": "41mT4m6deTBga3Y3PqfsWVnXg2iLaKvg2ndBbSHed67xxWAb315M5ZKCkPRf6WzscEJYwVmpb7ErinfxpBx5TSrF",
  "key29": "3aLhEAxicXytAQauyLmBHZC8hDZn9a4SjJSWSQz93wBuNFxM5Fz286Aswe9vELN1jyrDWZfD7sQp6ypVrXGv6P3T",
  "key30": "3WYiQBP48PcbvE4MjyMNzTSuyLnkuUVvUPv4QiL81y4bdmjTv8Y1KLxVrwmbos9ChVSpzHenUM3fa3c1gorCX1YW",
  "key31": "4VbwSsikbyN8xmbtuATCq8kPrdz3r9eAXCJPEuWez96VN3ZbRA3vJ9YnEia6ydj9NZhqpFVmvWvu1BHsnHwATdHV",
  "key32": "4wCpFuNSKhUDPcfea2iXPy7ZT76MbNpjRr6fPxiAbPHjGBpgWyHHuG7ik3WxjV1iEu39nL7JcdrhBZnaJDZgbmC5",
  "key33": "2WM7Bk3r8CZoCb2cdVw1aEVEuvQGHJdtX8TGuSD36rpmQS9L5Czj9AnqXgCfCMdbqdbcDNf1j4tv6B3keSW5izTP",
  "key34": "u8DA7zDXFsUnscSuZLGmH3FjoYsnaFxMJuHSuacCZ9AMRnZXDs7xsS1XsD7kS1h3k21ridK6a4jUhruf9woW1Ag",
  "key35": "q6xnrjeqAYJzUQd2qDKgabBwefe8WRBi4pV1KiwbBaziZHiBx2ynjS6LExPTcS3XNNC3N5TwxVm3kWqyS3dzQKh",
  "key36": "5XBV6XtWALooekzzF1hFkXExnFggywtM6LtnL9sCdEi1x39WVE4EjSdxoWZ7RAc9QxxGHgHozN83EAaGsDa85uez",
  "key37": "379hksgYM6TLL6FxPGrz6cqsNgsMjoSFU9gtPXw9gGaHAJoiu4UPH9w7c4RyKw2vE88tZ5SxuZiZYX2w6k6EJAqh",
  "key38": "3Tv4fH4iYnTsaoSjQ5ByXzS6VyYkT54h8k4BWJGp5T2cRk6KyAtp6H48LsCMyDNAe2XZSTosKinB7Y8HqXPNeVv3",
  "key39": "ez1UeTG2zBQzTknMYPgHtg8a1vNnxKHp43eFiZ1yvBYCwUcoefYg7DaxreFocRFG5N12JqKyhYPrR3MntXEL77q",
  "key40": "3Q89JMMiC5118DnfWzWBwnbfiTDSMYbLpAnkkUyuqgqKEqtxh9LFZQDUeqBZai6Z7WuP9tVdgqTfbpYWM9rW85dp",
  "key41": "4wG6GCbNdsj3x4Hrjsh4qnqGYJaRuXzehNC1gErm8HnXRDn4ZFaS1xTK2neKRs2Gh1fvwgvAVAowsQ3TUiD624CK",
  "key42": "jBXU7Dnn1U3tpGUjYvFqXDoyc3pMTCXX3sS93dVMjbqH7fjMpYAQwdV4ZfueXHEjVwPr3hPV4ZFZf9DVrmmdEy3",
  "key43": "4QPHodWZbN3bQQ3t3DNPQNeXcsjWTVkgpWwDwSvRK6ypgcVXDtu5sZv3G3Fn3KDdzbdLNy945b2JomtZYdecvHdm",
  "key44": "ywweEQDPk3GJ6MV85Pme1vdVc2iHWt5PXi1Xi5nLNnfwqXZbz3VVkmdWqETryVpfHpQkG9QYVHXn9iSzoZrZ9ak",
  "key45": "5XjmC58NuXkuFTyaS6hbXppDzzgdJUrQruKFbu4e7P8kCmFT6RBT4rDqgJWpJ3wi31H5ioQThFSXnHNVN7ZKEybC",
  "key46": "5pZgYg3syRt1v1fbdpYvTJHeZrj98gndRtFKtmj3Pfuho7aoAevRwh1Byu6pY2Z3Lqm4ndaJtjCxAtQEVggFxnjT",
  "key47": "5Zg9rpggkz47KdyekaYy6rptca2FDm9LRAZbJLuRCX2BroDhxBembMWPG2ZLWacqVanHAUHEnHj9JhQzVSiWDjXm"
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
