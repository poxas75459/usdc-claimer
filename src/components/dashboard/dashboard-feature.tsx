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
    "J1w3XJdUWmkH1t12nsyZjTAVGJtrHfZBZffZRJ1h2t865MjLpKci8XZU838XfE1M91yY95CiDWumFwPigvkg64S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61e3FSDPDFK8fAnm6eZNrsiznt4AMqnjCcJ7zxo6mAqewRrLfQYeoQuqVoiubFg2tGMx25PX2ShyQDqdTSG5nR2q",
  "key1": "nhPV6mU7wWrmoxR4VAD6zefaW1CfWgLFArzYcnRhzwvnZFZgHjY7Tb7BHrfvhfumWBRYvoHU2nfzQ4y8wZajz7D",
  "key2": "5AHLtZDwPq8nrvmCfQzApNzBbRWPckUoDPM6muxdziioypRRX739qxdB3QphvTGF3wszqvthxZzjndinSfeLYMGQ",
  "key3": "5neQqzkgJ5yMjhcVMiHijoyVM3avB2nwpsGMzgnLFwzYmXfAZBN6Jh9WgL7vvs5rtqt3HdukdzpV9gkAhVt6MvZa",
  "key4": "4YQFaoKeaFFFMqS2ffxt7HRiaD2ato8yDpmHRCmXv2ho9t8s125BJSxwipefQDPqaShrhdKVa4SxNByu14bkBDZc",
  "key5": "2stE8RKV5NTF5f5iCcPBeiqbohmnrK6umxxEvyFfxhSP8ahN7oDxUBeaoQ9t6RoSDAHaHgVaKgz2ZrM3V8LYJZ5P",
  "key6": "3QNqjanTp93uTUkcVFCaXmmPGdxyjYsw4c8RvT8ABY9YunppU1vfFPUeerThfcD658KMgYGp4oNRPdD5SeWJi2tQ",
  "key7": "671J2gL89idqtJKBVjLV8mZB8JgGtYNk7AfyKknKZwVNiDrDQXpZC53p716xQ5NARxQDeZgroqXA1kvD7n1tjVFY",
  "key8": "5Th9U8LZBf55ZwVSgPZi1RKKJSsSSkBDozBJsMpuved61dXbv3ZeuFXYQDNNEhYNLxmYRQTfXDQFroMsv6rB3W6N",
  "key9": "5iCanZnjWXHM3htMpbfb5Wb8jJRUgW33Ntn6Df9Aiy1qn42fR5oAWT78j5GNytQPTuaEDMHrMVvf7QsDQcqsZnd7",
  "key10": "3BBSdgDsPmrcNSMtMKHEeo2cHPoPtsB8vXMzhoAsgyz9bG5AHadignTYPW6hhSRLpbDBUxD3SFEuMveeMYtMGFVB",
  "key11": "3NxEx9dwBYBBMn5JX8Y9rLJ2E1a1KCBkqQWn2Jdo8Q7HKfNGogByXTMGJkA1kcz6L4UBZLrjcrn8Q4VfaMjMNCmF",
  "key12": "65fwBVgHdVJNiFMJeqscMJCnAumcSgTjJMuoVEfFUVjdjhX6QCjTEDDLPwasVCeZBP2BYbjJnhSVxe5a8yJ4DTpm",
  "key13": "4BjLZfGqa5wN3dJuGUFtJK46kusdSR2xavtfoBxy7jpMs5yu8j7wS58X2XcCfvpeBnnpFN4Wt3nNWLWAz5zm9XTU",
  "key14": "u8TLb7ghijatNy3qrxgJ3vpSPmxm81re9ACFz3oKfLggoZ5CBp5vmf1JAJqvmEzbgH8dLDeuz5rq3sVgAeaCDFA",
  "key15": "5hHuy5QwPdKr7K8EGzKzJ2HmZu57iV1Lw8os2tVGejgyUmd1SVi8d17vyd8Hjk13TDg19u4Tti5bRpZnhYJy5JHP",
  "key16": "2yAF2V8M9NdSCtfw5kpwVysBLs71tsYvFh3aTa6v8GrDenXESeGmULdczGF1fY85J3NcmE83n84WDpPLxvbUwKNW",
  "key17": "zFVhmVGJLwXqUYv8jf12wiZZdtYF7SH5oZr8SfiMEBmie66RR4NgGc3zvUGEWJQ81AFQUGdv44jhcaUjYdYapnF",
  "key18": "ovmM2TJbvuTF1LXSqrr74gKd8tbwTX9jYu2UwsQfBoNEGQiSXiDNfiSf1s8DjfP9siEnM2igWHnVQegU29hfBFX",
  "key19": "5iPdHwErHbEQgKBPv3znk2T4STE56Gad3HrSCQcRBPi6674E7rVkRoJxQbu3QtgrBiMKyre9sT5TVNuM5F8YUW7G",
  "key20": "5sjUkauiKFLBLHjwYJoReJbS4d7LWnE5gKnNGrudXqYaqEYJCGSYUoYRPm2ugTqE9YT9cwYgVvHz2VKURHzFfooj",
  "key21": "kaB5RgdokK3dsqAhqzHa2Gmo4uKCZreP8DMnnP3b6J9p63eYX2TPKktLYTxL3XbvU8MXUdihUj1SGW6ZeqASMza",
  "key22": "5KiSUavkbL3tdN8WRFYv11Ewo2WhYHY3BZCMyffUeWdBzcQL1XoTzDJAhhBsxZsMeQVbKzWHwgy4bKgEUd1LK1tz",
  "key23": "3PyhWmJWt8kShGa5K6M9BSJ3gnFj8cMVHNAoUEgxoRjGWtfanDAibd9jGwTNsJTrtk7EXYmEDxdBXHNNYxf1Yya9",
  "key24": "5q46Uxt6WBKkJh8WmQgHvXUWjasgixv2PUuf8SCoqvFsekvBeDkCLRsfffkYeVcn7RW9fHLJDmm12nwnU14ZWhfP",
  "key25": "663nTEdvBu2EdLrDMMkc4dM7MAf8JT4H2gsQvnBEhJ7yEfSmVEWhEk4XrNBDEmeDR4VYuxLzdamZW5SaXpYfwosS",
  "key26": "2hHfuQggojBBfq9d1M7joG6KtxMdvhX4DbS2hS21FXPuh4AUbhsspnXTpwT2EEDXC8LD1o57Qq82RpGtZbUEiLyJ",
  "key27": "2geiF5A9Koo1MBJzYpumRrQWeKL8gPDwH6t34DdJCKdXtn9TGCKMdXWVVmVxEsj3PyHdVzsdkkkVoHWkqzfi6d7a",
  "key28": "53VohzLHLWMEuvTVmaEYvyTtGKZftJpsEmcVbKLykAkxn7SBGGMAKZbnJLUB6iReq2zowDWpaLMNNhznRNjWCr9H",
  "key29": "66mJDvbkPFqFB7zksACTytnizvNMsFhkdw1rPVprbMsJCLDKjNqPJpb9izWz385NkhxwzWKbzqKNHtSj9iRBjhRu",
  "key30": "2xU3mLjuNE9FZz8poMi5oeTWCTgBuJKQcSDn2E3cYjEToxzAABdQWMLo4AgDivhRLzEMzUrtJMb8hVDrL3H5EwDx",
  "key31": "5uJbmQUWqhvYg6pRbRujoRyYtyi2PauEv3Ure6v4Tywj9f71Y9aL1pS7RGcjZhcF5J62EENSd6SBnvDDo1ogacYy",
  "key32": "5WJY8GgLLdGy7XMWD4QBv5CSTDQn9qCwJVZQp74m6T6JMqbUyXsbzbsURKJDGCUTwoeVGUEtoSjRRCjak85WdMiq",
  "key33": "5x9tYeEonUxvCqoC7bf32YsXjjhYTCfDNT2K3i1S9ornaR9Ge8vo44jhVMnqwE8CyoTmt315zTnCUwUA4nBrvvui",
  "key34": "wvAbTJn1jtxunpYua5DmMWPBBsU7tZNtj8wrnBEXpNKmcNKrMrdgKQXYDFGd7Bdsy38Sby5HdubsehSpPuAehnZ",
  "key35": "2Q3RTdD5bVMK7uLJBM9GzY8wZVeMskHE3mcUCZoRm5sUV2FWkB6MpniXmmpoETQhFEUrcvckTPZXtLHAmrjgL8p2",
  "key36": "5q4rEN34xe8iJVngertH4ZPGvbqa5PFTCA4ComjDoGTk4HgRSy6WKCpJKvGLJ4Ss2AzpYjba3yQgYMifPFir8N38",
  "key37": "2Zz1pDFVEB3SkLTidp81daUhpFEWv4inikHxMZfnLNzsEYYMfLnkuSDiqm1gL11pTiFqfdUGoThvshgPPr1AystQ",
  "key38": "3MEwG3nnpWDo3GgQUoLwvbq6mfSbHTgiNW2JUGefAHdJhDG2xMm45G6vYrLehrEcrpJZZWPNj2eSeVyJE8ygEYQU",
  "key39": "3NY1REeYEvdYdS4uqaaovcdVWicz9BefDYJun5h8jmFjN8KrbXnoAjss9bpoMKe5tURaGHPsnTz528bdNEmSU3Jc",
  "key40": "5MCb86yAnWA5Pjs64Y1KtXeEmKbYLaXxXU8GG743E9Vi9xVqoVwcE4wYsEycf3mRcPmvkL2Qapw5YvuxuzYCoRaQ",
  "key41": "3w3GGyHS6mC9xqq2EafUA3VtnSceTmkD8DFeqRqbcbFZ5NdRCC6Uyoau8bxNH8CNj1Eza2FryRpfRZT7vrGw1JSk",
  "key42": "5FbH9bLkmhQ1mk2ZTRRS6QPb9d1x9e4K9ueA88hocFVWhJCj3ex24pvdJ2hoZJUhroYXFGHUQZZV7qqe1HZCZEZ6"
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
