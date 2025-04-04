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
    "3Vbv4vYZ7LquwLt4icZMYe4tHNk7MUw88mRNpGgQ9U3PAoduyUoY3N96iMMRk5q2JCNEdvALjCtZEjCFiSUCNHVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5va2sccW6t2WFQ4HBYTZkT7KHzc6H8YzNkxFfxvCEZS2aanm3skBRGMnoAwdgFYhFiUtsqXRgtDi4Wj1dbm8Syzv",
  "key1": "4CE6FczKJUrofUpaehJ3UWgxqChrGE6Hmtyvba7xnnyAw4iPGBTRkQxRzkuaLG7RLk8ji43diTYdneVMtFSveVaF",
  "key2": "2ibWbqc3WNqoSNmYA5sJkR5ZCWDEkKZfrf4bYDmrJMqAirBUfL3miBSeZvAp4AoxLwJgTi6wjmVFLdDpdp2H7KwJ",
  "key3": "taJKTeFTf81QxXwb126oN5NvdoruXjoUoQDb8Ecnc74Wpfn6gEcz4hUxPurnjdHSPni4uwQdsPmv2ncm1cbmacE",
  "key4": "2MNUMz4oUQrfVEUes5T6i7RZHtzYzU3kgoA5mUWHRew19TWfXEC7u2KL3Q2iNXjJ5sRMnxDfU3hjtQ7pXGMdreBv",
  "key5": "4envPAcRaAjZzqHN2GUTrbawwUc2VFb532LQaozm76LnHt6TmH7i9rPRnmZTeUrXjS9cQdWsLP9WGjXZmXXVUmND",
  "key6": "4Jx8BGAz1xo7MrZ12aYBv7rQxHbMmzFQV47v24wKGi58m32ZQbFN3BmJy9Hgch9stdwxXDuM7oAvY2HS2JBmEh2M",
  "key7": "3bsLGWX32jgPNJ4ezaMW8eN6Tj3TEXgx6SgU6Gbv5hcUFmPPgSjqb6g9KKQmUdg44oEBnd7yboQQzWD2eVsTVmrX",
  "key8": "5V37LbLJkwfwYv1djd2td4e6Sh7pAHEp83At1uFN2eornPun4DCesk6p7KxGE77QKRpuLx1mfq2naPB3dC5NHg3L",
  "key9": "4nzfXiQ38kqmr7Eu8UtoKX5d53qPVgkgqHtas1ffHvG2agSXsEVtfRHchzbv2Xxn4epBxMExf41KmMeMrh4JLxC2",
  "key10": "8arhAiaqNBfz9dmod6FkxcbVF6JnXwTx15j69Pz2txLcV1cHBZ9Gf5ue2b7saGChTwgrWfBo4WHLmBJBtT64dWh",
  "key11": "3vbiMKf5XWMrSXSxYD58Uy2JBmJdEDM4xNvN6a5sj22FrXEYHREaeuoA5k1f1YxJGr6bP9GhvobHxHQVz3SQDcs4",
  "key12": "2ArBvvC5FofF4zw2dnMEn3fLgCd5sn5WLj5Rzvtfzv4DSPvMMWVyw8qSVHi45X2HorBvwaT124rJGwnYAVmUAVaa",
  "key13": "2NQE4wvMk7YzWqZWDpn7SZmLCncj6f8ap54iZQGtpcZEhg4fhqrqv2JrxsaQevpbASyaYDoUaFRXBcWJV4wssPTV",
  "key14": "xU2iHCEw8pWXhgkcbM3xAubFoZ5vp7xn9BfrrUU5RanM72XP2AhxBcaitZaKkjFVFUcz8J7fponW58w9GkRaNAX",
  "key15": "WD3EZTwtkMLMt39EwwaGP77mnAMBcMeh3mCrYT1sDuhM7royhTS68aE7hTecfWat8ohTe7FL9Doc2zcuJBWkTsp",
  "key16": "5jdR15ioFLtTuPxL6fq2jYhqnXaWYJ4CfVazkvsYdyJJeFST2dWfNNv6WvBpq5mDfCeeZjtRaaLaCbma6ZZGsuX7",
  "key17": "499CHt3pK1go5p9mx4B5jhrj9UgbagXD16P4MmJ4KsQAQcCQdsqWgpy4niCvfeq6W1bsd5gmaZJvqC7Lq7GEvSj5",
  "key18": "chBywq2DYQbEnaeV1XzUzm9VpdeefLnG5D9Xcv5MjXonozdDe5kuMcHqZoBe1z9YiKa4haZ2gvqDSnvKV9jm3cT",
  "key19": "5YxTbbkvccSXhpUQ6ofBMtf4TC4KMSGZ1GHiRH4H54sYZwwszLoCTbNR7HLRUTAwRphdxfCjfaNNHnBonhoKXuGb",
  "key20": "3AvKEny1msQinuy6xJjaLDxjJhWxbp2piXqQrLVVR7LXrjvDZBDyGyg5EyCoEZtcts3KXi9r8nVDD5gvKdaWT9F1",
  "key21": "5yzLiaoU9r4WvUcYvNATC352oGX1yzgdiH9Wf4997QRV3PggxaayuqLaC5goAuWegHUJKPEQGBFcXWswC1VTzAtF",
  "key22": "2vx8Lc8EWF2eGdpLZCd9d4jt9QVTmv6pmQdkaeeQQZUqCZaoJ3VXroYSFsxbSNBmHJanV1S4TGGpEedyCHHys9Hu",
  "key23": "4WEoY1Apy51i32jzyVCXE9LeqgoKyRJAA5wkvCVnbueap9cCKNNbKNRup9SMNxaMXrhPK7nMbrDrFbTBG35TpfSP",
  "key24": "5mVBe4aUYr7C8gt27UPpcvxGsCvZqfQTuXtksZFjPGUCK1QfMsVcb7vfH8xQvTHfy5VJvNnyPs9EJx2kb8hNDJ38",
  "key25": "2f6RmTmd5LZEQd3yRg7sdNd3Vm5dr5dkP7tXUjWPPpN3TLxDjT8E1SuA2sUEj5Aqbr2zRJHpQATjmtGDXDcbFPDD",
  "key26": "z2oKF62LxvRxTAqbXmQzszDkCR1nYZrUxENfhS3mss2Mgffut8nbsibdZmW9yYGbMoRyonVMup35MbBakQH3qx1",
  "key27": "4tw3wMDqr6QQN6n3Axjjx7wPg5PtZv5534cFxb5XNNHsUsSnfqVMh27SXDw2mxkmrcP6CcRTQ9rmvp7JfzE5WsGd",
  "key28": "3KQQ4zgTscT9z1dv4bEqVjBRSy6JDMB8rgojFVAqByLub64id1h2wawYy4oExA41JqFvcoD8DNmksRYZSJvxxco8",
  "key29": "o2m5BBFZzzoHiq8VPakF56ywTzvHT5hSScdwpPqKjN4oJX5aQMSgU5okRvoZ2nViuQhwKZmXiqP9mG3KVs3wDwB",
  "key30": "YraAM3zfUqrnwVByvPpYdrG637j5Kf2m9TKjpUi9XWAR3BkcWny3wfkRL956CcWX2bbz2CYPUbaSNjn58rQ2x2c",
  "key31": "59V366cwhwnDjV9xi9wJVWzMTmscDXaeUPgDCW5cerAYxLqQCkTXVgQ1UcsRixKqpK3GzgbqJDY6pdtPNhFyaZ4h",
  "key32": "ag1skLUYaHtbrse7pmKSbi2fk9kmq56GZ4B92gZphomBUEjTtDBC24fn23kP96zXw7RMuYcd9GGgUD49LnxCbeU",
  "key33": "36E3unTS8sq1bpKPtfdYacJenVedHhSLMsuxpcPthtrXsGFpqYnTG5WBbgx91m9gqMC9E6Sds9CSBqou91JKqdJi",
  "key34": "RmjmoaAbpEks9vc6rkEWrr3YXcmKPQwNsFFWrfjkYUGBbxi1Twjbqj9iGxdfgnCwVH84SUcph2pGE3Ww7SuuGrU",
  "key35": "3UrsWAP8AW8h21JgZ9S5fYo9a9Zub1EuR8gxm2G7dawNhkVAv6p7i94oLWyzrnJiit5nEEHW5TrCp2n1iWJdVpiC"
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
