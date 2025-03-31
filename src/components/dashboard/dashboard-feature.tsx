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
    "2Qj2U3W3QoZDmEyK69RWPmULBGtRLJnpA99np3EG3fScXxmDs9ch1qDXFSSH5pBYa7pnezLtpEVTCkNY6d4BiDVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKjV3UBCZ2KACmKMqvptQPr8LPwbJ6iGf1vZ4oTmAtSP7v85YaQ7ocvmK6iwLqt45ELV9zhh7d5RpTq3GZrvEmn",
  "key1": "notfp7GM2S3X8kGpWNDLgob2sAm23G6edcZwDqRXtqUwdn6MsN5QopBS7CnxdtvkCFQtz6PDsKie3WAmSGhB5Wq",
  "key2": "5sr5NfyG1DKxZY633K2nst66xJwMyWUXFaC5JRuJccFBotXZQFdLSoyPaR81cvJBMPL89A5SwbAFaSsAbEzdY6vo",
  "key3": "2w2TdgLQ9r5RSTU7fW4rfxN3uMNsy6Q25JGrTZ4fqpZufsV5Ri3odnUKKyND9beLbvmcGoiALGGkfh6fxap3BkDM",
  "key4": "2qNp3a87RXnCstjSdri1nf371DeorWPtX51YQhrmri3MudyDrofcjmd4DzWsqNm1uBT6xz8ZrBXPJok3nj7ArqC4",
  "key5": "5B9diq9bdq4wbVH1svinx5yL78xWpZ4WLbdyztCyYnNWD6xme6t4aBbByt4Frw7PujKNT9qcNkZY2jacy1chNEAC",
  "key6": "B8hem5podQi8tZAG3QgSePhhFXZuM4QcVzRqJrzVaHKs7J1ypD1X4mSW5k5adQTfGyzSre8cZS3x87uQ5gJsJFd",
  "key7": "U4NryUnNRyGA1ddD4YRHSPo8sKU9nZoaMS5kshBTTkbS3xnp5rvrmLN26fHXb5H6V5y85fxrFHjAUHH6eQvym9A",
  "key8": "3NUWXLBrpZ8kQp52GuyHCs2gcfn5HvnTzHJzmWvPEKc2VbwFarMQsZFuCs4r35UbnrwbAyZpkU9a8E6kxQuZW99D",
  "key9": "3fFGvWQA2tXMCxcJkDqcywpNVJGV4E8747dscmvxatGBsQi3zq8mFAg2UtHgWofz2RajjTX1EtX4KoDUB2TAXPKA",
  "key10": "3FncX6CFrDr2vNAvLnZqa5LqGapn62RdRpNoumGXVkPcQwPDWLYcgpKUU3ZxkySzxD523oeiivHnqNBHUmqLqnRi",
  "key11": "3CjEFMXV9QYAWfKgrVHNpRX2DBhmKQRFaCrZQA6WpYgUJmjgm56TqvrYDMP1XibcpiTfkc4YQX5akY6dMN6YKV4N",
  "key12": "EweJFMx4M4aoonEKmqjTXmsNPzHHxYZtnTwQHG8UB6GhU1YVbTBGiQqz2y6oTEABkSYyDMYqYkmYPh1FF1Widef",
  "key13": "RatWe4TQd2Kfi75NPB3w6bCn5JnufrqsNdQorV1NpEGSjnjYH42bFw6XNKW3JxcDrM4zc1MQZkHvv3ghLz3nwYE",
  "key14": "2Aw3h8Royu91k5tUKEqvsEb58uMv9MkE44skoM6GAJwjx2m6FYjwF2VovcVKPaZwdG5fbsX41xu1jhNePKKTRU6m",
  "key15": "BAKzCs84dAkFMWkTnc9x6E16mEwYE2vuxjCsBK2wT7aQy8LypSMDksYbs3KriuFH75HkKnyEuBxSbiA97DuhGRk",
  "key16": "4mE1XkgLaQYtZHFmNvCvN1naYP1eaKtRYUiY67RSbGUYrpFk6rcvUuJ1yNSpy3WwC5iHYqaQmRPsct79bchAAiXp",
  "key17": "2aYe5H95HSgzADMf2BeaCYXGGgFa7B9FS4YtQP57nbbyS4R3PBK63t8Bf2DHdohJ5KhDUufHvqq2rEDBrwrPe9XY",
  "key18": "2yh9u97RxWvKQVYThdsqyjdFTk8wpByHQRysFjJN6BEhmiAu2F2ZzbftvojA51KLFqhyHNnCgoFke7uNZ7pTVBZE",
  "key19": "3bVG77hWhE9MNjWWrMJmRMUFiyMNZX3hVRyCGHVYohBahizd9v1qV2m2GktjSUR3awkz4jtQjF4UEYrv4AWWm4gg",
  "key20": "4ofuuohDVLzvyCiGXN7aVnE2VYBwRPBUsYVWKMiB9RQGV8DY3NYtxiQhuzZLYQzbweMcVK2ZZLQmR7HMEkoxQXwf",
  "key21": "2g9zSUvqd42MTsLpKJLGcRALGyq6vKtd6qRA7QmdcxEyp64W2m9zByxB7iFEA6hb4zQXwa4GA8Wz4koBcjkkEGbo",
  "key22": "5ifdZzUm9SfjdA6SzSGBHrDpk8tkf1Wq1KYSWyqGF3LqqNVwsASjPa4YPjyqcrmrUQuJL2HLu1o3QUcL32dDmFrM",
  "key23": "5Vbd4RcTL82mKeDxqANu44DUyQYm5EvH4d76NYvKbovvKQXD2LaVVSehNu5dsg2i9AK2Ks7H5k5xEHamZw7wWcbQ",
  "key24": "5rVxizhoEk6SRSSCrMCyebhJMTDxjxofF3bAM7DiWrx1otdStrHmxtQZAthd6VP8ZptDKcTuudu17LKqV6UYMQka",
  "key25": "5UM3DZ3xaiTV8eE74bv3vyV6BuJqYe8ouYrKAmL5AJnEAfZTboVFCd8j5TrySs8swDmbyweD96dep88svnn7k8Yd",
  "key26": "34HVBH7o8oh9X85AvDgQJzB9xZbvCFP47K2N9TEQc7XDv7NVaH5sfx8N6oMmA6QoqwuRqHALr3TYpY7D1abnZh1D",
  "key27": "4DJQMkjW2vC2zVk1Knj6YDyfoM7FtbQBJcPaB2RMSq1yznAVvqLfkt8aArphBBB6X6unXETUjja6b7sC2CT5ioHi",
  "key28": "6437xrAL9Nwcv2gNECAsTxT1h3U7aA3JmU11dRMG5FnsfWeUAS9T4oHE1Ceuf21EDbMihKiFNM6FvpxwzEqcAFje",
  "key29": "46u6iswhEE238Xk1hXyQF5j32YSQ2UdRMRhik5R6i7MuHVivrteZqTQ7F7xGfozTWGMyYKdzsZ9idDpfm1vuHpGX",
  "key30": "3nCbNH7JfX1y92VtRpyTyqg6q2Gi2wJTqnZqQEaZnhVBtHtX3CPFx3sQKsNpJd6Z8riGs1a5DV5Zw5xuxdz1Ycsz",
  "key31": "hKb62UZ7uvieYZZ52BkhuRwe57N6ByFRBu4U6iNszQLZMMWMfU2QMRCjt6Ue39AMNSuipuEE3En1FS5gZ3KuMKj",
  "key32": "4BsuZaspsAvc1YHf2hRWRC6jQC3miUe4jRUeN7LHjMpCLUVvweGqnLbyzSNhGUnyXMSZGXUCW6F7rbXNDpQ2wqMn",
  "key33": "4XoJ5Sv5pyMx9nAaBJFYhEouqtKmy937vEbpXoFjHeHwvaUmbgkb5w4cCSdSdZ4aN3mwWPAjZbMY8EXJE26JjDYS",
  "key34": "3TpYHgExXcac6tXyidVaHEKmP3FyaxzpJK3QuxDUoKm5QKHhhZH4pou2ZXzsY29qUq7s2XbcQ3YRz9sfuHZF7R5u",
  "key35": "56ikqwYPKjiWy7RkuWDJdHFCrj6FHDKxQLnVo7KFJHCwvkEBP4jHzuk2ac6PkrniZv1UGEqm8QrxJAAQF1SbRwtr",
  "key36": "3E1r4vbsWJddwhf2DoMtAhEFu7PJhDokymhwwZr2KxcvobVAj38YV98UHYt3uuQidSVWm32UfKjjQ5sYg82L1UqM",
  "key37": "2kCcmrzovCHJRbbFiQVj9XN3EEXjHndT3EvdUCsBpenfe9E2J8gMVQnbcu9MqfVD4HxQEKLq75Pb1eHfomeWPCG",
  "key38": "5B9oysM1A86VuELBYyMwnudHVzpQWQYTyDZ687j5zd2vDmvYuktSWQ8aBm3i6sjqJgfnAcVcuwiL4V3gfn9Qtx71",
  "key39": "SLtwawjg6a2FF8RQBV4xtW23jcu94XSmLwAiP3ZaKUPP3eTuCyF2fZwjQCmUSnqKiuivKNHytppDGGhorKj4stA",
  "key40": "2Jakx4unQJXJQhEJPJWyi9s97gYd98GKKYXEg8XpCYeARyZ7KQ3LHhaj8fcT6qxC113ssiiENwtDDs2xhv5NgJSA",
  "key41": "5vCNExgBiq2DSwky846CjoWrAgWYT5LzrTM1KiNXndpDCmFeQTBQBySRawiYWzoWFKifwap8dSt5JwpocXufhW9t",
  "key42": "kfqRxqhBKLi758RtDHZmzz7i7xYx4juEVGdCVXMabzS8BzXM9eMJGSgq7ct2CywVULofN5JFpDQgQSa2zAUuqaj",
  "key43": "5onjcazJuFF54Xoscycj2M9NqVMFC1wbDsAms32v2i8NncbJAFawLBHK4upHpQymVg15eyw12VRGhT2h6M2b7AZu",
  "key44": "4uKZCJ5dgr3jGezcAcXyCRAijW3QJWorJBMU3VMATYbzQ5TPEVYWvzpxVVv1dmqeKUrhbjxHDv6sK52Y1gSwtVRH",
  "key45": "2Q1MZ67pnq8DoRzT7ExUSosWb5UGqHCPwMhxSzLK6QKUyPJRX7qD9QfdtT6HqZamoskTAsyL892491rwdTAp8DCq"
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
