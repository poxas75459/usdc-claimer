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
    "4yAfGuDW3HJdqtjQMzqGVmBGnPD4xcMvVefdQTF1BQGJz75i1K6Z7jkUmY9pUQArCirNLzuPZdGNnzrZCZjtaFM5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51G5UBPwQ5R6TSWdzfVYcnJuDKmuMPK276sRQR7FU2VuDpzYxByxSg9M5xotuLVQRyJb8De4SutWQjRQxUn4pdVQ",
  "key1": "3Tt2yofgjNw6Fa3KwYuiLW7mfELLG9r1mRUVnoNUHxK1az6n4J398eoN5TzyJPCpzfcqfJLAMZVkQh4gkif6mLJz",
  "key2": "4DeYfTG3kqfFQbRn4h7dpVkuB9icdxTfAoKDVhfcuuc8ZyeiBms37tVv6DXJirwCNxgRGWjXgGPpEVFokz2mSN3K",
  "key3": "61JBXmNDBhLwwqrXTzUfZ5GDH6EGYjoffms5uonAXRz4RmrmJRGjHdSMBmDRdTDquK9MFhTQmY32zNxD9CuPZPsh",
  "key4": "2oFJDEKe2SECPwuEgTdDTrqoR5HeGapeqSKY8Ea8nZSKbvGF8AYyJGB3aGJjymDwB9cLvKw1hTMU8AkXDtqjVNXP",
  "key5": "3iDV2euWemUjjMrAbpnhmpifANz9MwF5pC3dfyqhJC11Qh3VYyio9ut6y87kwSTYxcyHERZEt741Qp49DnbzpWzA",
  "key6": "4DifBhmVnhhCGR3z3GT9M8hhwTHpXD18YVdw2kfEdiTUtSSz32nv5PFohc7xYwBuTDZ7VuwyZQgfTofHDYzoAokk",
  "key7": "36g2wXphnBwDZC98ZrFKVUyStZAFc4mvEiyneodayAanWZB6SmMin8L2ZXG1T2jYAdNTLTVXTqBaZNN5MpZzad9y",
  "key8": "2jbVfCdEKkotjrJ84KhTtkrjnXYYXasADGbiE3aaUkKFkUkHEhjjbrPGVkJ3jSp5G5UjcnQAKUabYvwsHqX4GYF4",
  "key9": "5PfAeS5coJZuz9XqXCiC6rXnjDnjsPSFnuY5U1LTgpaPzWQWr4scvvqSaaftMBdDbwSsDXiV7xSP9K7oz1wDNNyw",
  "key10": "3kjVxTyjji2fHGjKWTpZT4H4AvcfxvtdvVrwtUwEVttYmSkeJafWsS7Ea13QaWP2YJuQcdDQ6jQ41q8Rc9gAGteZ",
  "key11": "5JYUptuc98rfuHHb4HbC31TijyJ5pWBAxztoF2vk1hHtq26V8VdBT6DWsZFRc3g5Br7d66XwusV19jbdLMQARrzp",
  "key12": "2bcjPPvW1g9FiQH8yQFgadYn6cp4gUfjW2eo7s8zM427sk8dm7GsgmikvNKDAvRoyMGLALZLwBvnUYWASif7Neh6",
  "key13": "2YmaUycao9YvF7nLZjUi4sXsdsdEkvzaLxp9c7dcFsR3y2picQQmQbM2eGxifXA8XRsg1UrBPzjWuvjaeT4QGQ92",
  "key14": "5xT8J2S4qrYsoXpD5z9j6EnPmDWCAzWQCv7AiBJJETBzwrpxnjJ2xwqiigYXLNthVdboSWpc2ir9UXZhJg7Td4GU",
  "key15": "3UjCz75kZjNpyAHpU5zgmyphUNspfebTuvJ8vF3d3ggZQArc3awsWDm1sop9bReLwtZv1ceyUf55pSkwZS35ipcj",
  "key16": "5Dme3bcqR4KwkuoFbHCdbCZKNTrn4Y7Yk43NPdSr3tnE9j4D9ZfKvApxkVMPD3jZQbzD2rRH3fFeFvPuZfboig2j",
  "key17": "3dTr42fpCo3NZN649wANyG2zGjVFfv6a5FPnhqWmbV5GEJE6atxts8Qd8k29njUz1tAGX9x7wDqiwe4CTHzYHiP1",
  "key18": "5nBBDtvbtogmLMSJUPE2dxn3txHr7cbYdqdWJNPJhc1FAUg5MNQrCSjPRDcPTzehfMirunkx41utc3Z6hnWVUXqU",
  "key19": "3yXeEmdNva65wsB1Pe3qR5xBr7nwwWkDHiVxruAsj7HrCf6csYuDs15JCC7hzdDT2o4ouZ2YBbxs34JgvJsheV86",
  "key20": "ZL2iVqygs6ASpKLNgNE1k7zYESK3VpKepR5a2vm43VfksRM3UTodNTTnwEGMSDKwmAdSLLiZHJZ5DcCzGHVARpb",
  "key21": "2XFYQjRqHKJBdVP1CXp1wATzkwLEVXdMP7bES8ixcJZpNTfNJRoerSumKXHaHXZx5HrQMnQo8ZCe75ALwH1vqd5y",
  "key22": "2ato49d1JuM2UpfcWAgsiBS5JZCe6tcDxymefkQqAGkTAX6KyPuTxGy9fmzuYKhQhMhP3J8yPASwaEyJx2zyNQdQ",
  "key23": "5978nNqHpMxdegnttgiCa28oi6dfN5ShPcc2oKYuQYLGY18NARvbSRvDodBedXZUSggZxWL2ScWJG2tUs6Jb7Yyg",
  "key24": "2hbAToGe8GhzhBXnVpiNP6YntSmu6NqgVWAhtRWqPbSBcCSDRmDY1Wf6o1AvJbskFsaZZpErkDPhUw9RoEv2Vtxc",
  "key25": "JmtuRk4uz5WiREkEx777Y9g3LkNCAJMkQrqLeUZvn6NcpPxTnvHJWM16YJ7o2Zx8SGWnYF4ALfFErZEXW8Rm1S4",
  "key26": "UbESMeTniKVYRgD35nYjqmsUKy3L9wRiQH2X5RcTyTHNUb6fFyUSmwFswMoXg1Z4WZMaqa43wn1Eoigm6j3wimZ",
  "key27": "3edMvJhmat3RpKZA7jXX23AoDmkSqBvGWCQ14tA33smkwmdzSuf3QRRFuffLTVNwEe8JfE5qoXbkPArHcKf17dcR",
  "key28": "31JJRpvxefgH57Kdov4priW6KGyf4q85CeXjkpBEWREqtQqngVTRSU8tvK232w6V58sUQBeTDSuCYYz64K3zj7Az",
  "key29": "356ez8SBNN6ZPUCsKpjxyxbACk57J1tK7K9frcsyLLwHefmodr5ZkeA16rbSbqyQqcwCfsBwKaCnqNYXjstUZYj8",
  "key30": "28Y4PLdFQXPfguTScdRc4J6GdraDQbQ1tvRxBAQgUfUShxSNjHwZT3YykGKce2WxUQ4dbihQaJP4rBbsJt1bCq1X",
  "key31": "5Vjghi5Az51QTA2ak2wo4Sye682kMWNqbqjiPRwBHdAAKnHNNBXbdwLdyMSzyhCezUnFvpnpcYpft8UfSGUHmwY3",
  "key32": "2cJAAxrAni2ueXFQrNuTXLsua7vph4qkfTM8JueRgN6xdzTjEqoHY3KJoCLfkM1Jp4SuXQcMwN2Ydpoao7raRZq7",
  "key33": "cr9HvvyKcqB657vV8prC6EzKGsLCU5R5Nyd5uKE3nJtVXt5SvgBUG2bPyvLnGJdX1Dbi4jA4xumnuD24HHyJiMK",
  "key34": "KS3PDTSiT7vBkZ96ccZQWJdGgj2XTunXL1HNrfUocrg1JQymZT1DhBZNb9dUGw7vSqeAYVWTWLXXHosuiBympKm",
  "key35": "5sWbsrXmHwwssZM693Yd3ao2D6GbH72BYndk2szRW9rcyPAVPTCj2sNADJKxQrBpYwu7EZ7Tbu2wrP5Enxz4zXvZ",
  "key36": "6322hL14BwQNg3qoQKx4ck64981VCkfNukqsPmk9n19GmCbJrQpDuWV8EfUAfByrBwARwjwQdpPc8KLwG7XvBZQG",
  "key37": "4Ttrf2289ju1nhPa9cMLRsHZJ8szAimRdWUrfv2e7FmfX2oJ7Np7uTGy9dQabu2FkVeNxQmGphy7x926KjU1MySn",
  "key38": "22dwjou3KZTMVsfNNpzYi52mRhUM1dKKq1fmkmnjDEFkNJNJh56vFpGU6oQwEhYFLbfDyA32QUVsutU37V97DgEF",
  "key39": "4aHR5fBWKuBfXbRh85QzDoY8e9XZM2WQ7TBEPeW7sofjfw2dCkntQsvQag7CC9jnrMZHsLNmLUkTVPxQL8yQNRET",
  "key40": "3cr5nWRH4ZVYS8YkVqniyLMB9ZSnptsw9tHmfepxdrdWr2zoJdYDg2ims1rqYDHRZopsRE3XmmBg8Sk1T5cekyfP",
  "key41": "hgEwsAVK2pzhMJDsX7uGtg4sehZjfUnRSk15RJhqWfgJ2Cib8ewBKDPmh6EqUXPVvVDuHn5yaCxfSFTeA4Tw2di",
  "key42": "3ZbW781L4DHmMcB69ycP5ugpKQauvDEaRLjcxHUT5sbu1QTkyKSsNKMjDBfwWnTRzks1UC6gm5Sbo4diLDWn1zA1",
  "key43": "4zvWPgEpxoJqh2cguHtE9cYof29yGwqJBGnUyJ1hUkGa8T3mAR9pvN4qedKsaJ4xsFdMZuiVXe7BX2MtSAru1yD8",
  "key44": "2K8rv5XZbo4sfXsCTfXcm6R9zncUnBAmMC7pi5fZe3LSyPMMEpqfEJcCtiyDfRn3Zs3hz6s2WmvVv2zvAaoz5Pwg"
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
