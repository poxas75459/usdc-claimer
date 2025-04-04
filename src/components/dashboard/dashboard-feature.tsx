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
    "45paQexafxzTowQDVbkcdn58tRGjQ6kpp3NTGGdENCvQFDgRBn2X9TYXjHqwhSr19GDwYDQ8AxMfdd9MkXBHeAdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31qKsaPWo4hNRVhAupLqAAZiSFyq2X9qtZ8iWc9WKLSdViLtE1VRxuy5De4FvJ946i1UvgMFZbgtKZnvgVNgCJkP",
  "key1": "4RMbDjE4LLGtdjmgYYX9ZVZwxfEdodxozSD2LHAa9Nv794wBMaWAZsfwFXqhaHpJv44Rzc8GFK7BocYvkS6toAN2",
  "key2": "5C1RvCj9v1kdDDsew54i7dVm6du3FThEe7bHbj57MuCWHpMpnudASX2Z4nC1o21wvLpD8xyhaZPrzhS5PRkd7Djc",
  "key3": "5Dbna5Y4cj7ZjsWAHaKMuv1x1LLCR8u5RSaQwqVpL8wMGkopjj5UqiTuNeSGqXRhgrmDM5cqHVD9wvn3U9MwrzRP",
  "key4": "KDgpTEYPw9MtmfaqTfYdGcJc7nqELtaaFvitqQ6YSUh2xJSdjByxc1XMarmDgYJ8C3VadvgCFDe78X958Qbb59S",
  "key5": "51cP8uVLPamXXpdbrLBXEfBRHEPwnYFe5eF2v1wsEo7BaNgU9e5XW7iNDAERQUceyty4iUPN82PVnDfGkCFmC4r8",
  "key6": "3U2hYsLchBLD8rDcenXnNcRoZFny7v7cAsYUcbYLNTKzht4YmVvpq8qXJXESyg6i1bRsocguTP2Jw8UMxjpFVGC2",
  "key7": "3ZjUy8VvPP1veWo2rtrLaZ7CLciR2489MLcRcsYh7882YZSRMNhef3hJ7ASXbQV8CywK4z5whYCuMXG5vcwAj9yS",
  "key8": "4ovRzHUo8SFjS1kGXWyVDfhd2BSzNNsgzHMrxkcke3kzsi7WUZhVv3ihWZnmMADZ2xk7UeXztnGJPjFc2MN66HSP",
  "key9": "2soSpVyKGNELokdetwui4KLJyFZhMVCr2KKHQiR6gd36JuXLHFzbgNptkSWrM3mWNs2SVksCpRDxBCM1m6iZ98LN",
  "key10": "5u7PrBkoERbLNDzF7KE39N2sZ7isYKxM7vraZVtmAXQUh7ETeQSn9X9mLRgj93bpVdbf8UASuu33HR5QgzECe5dB",
  "key11": "4SUCuxn2MeQm189xboSVs9VAScRQeA7VUGLkuC6ahmY5RFAhJmnzaWuiMvM6rF76XNeejAJpdY6bdSzCyNE5uF3m",
  "key12": "4jG756R1Zk5GNXjgrx9rBk1GiSu4j6j895KJVRN7HpYq9KPnTQgWoLuzGuhkHpLAPbk5awji3qdnxchJMegd6xmy",
  "key13": "5es7Lz4E1WYXGxAqJXweaJLFeBojyCSDC18Jyxe7xVX9ygJK4BmFcqrTgVD6bxSD2Geg8RjBFTnQ2Q1EnPYxmKgs",
  "key14": "3eq2euphqxGuKUF9TBaSds2XB9jaQFPw3jFWQR9iVA6wiDUihqLZD8a7sYPdGySeZ9sVZobc3wHcPCeqRGUpxYuh",
  "key15": "3hW9W4a4dfLN4DKCRJviVzLyHdLUa5iq7DR2TxbLqex4TJsRUPAtHG7LAErzHhf7omxFXBoZcBrXVdURX69mybpS",
  "key16": "3zuj6wUp5b9dPwKuciymVS3zBFmEuacMSG2BPXnP7EzztcbCDRvPDw9vnJy1CScWgheEbLtD2Q3GtrK6NLoB4kG",
  "key17": "166ZMxxGtQo2Nr4ufb1HAnRX1iJpxVewwaBG4teumCsz6Xo1SAwAasTGdxJWF298t3xTRKU8MYP9c5BsszYq8JL",
  "key18": "pd7nTL4o9oCZxmjqgiaoehFXJ5mnvjkkPanN8BwB6tMEqDP1JekDjZzrMHTbqsn4iQVT17yCBFnMSAnkU6F8MGb",
  "key19": "2sTLF4yj7vsuJ14aR42YXREuHoDXpwjnuSDayLdxrJxtSEUzj2MQkFGzDrFBcKV7xV27ezrXmuu3HVh4TutwygYb",
  "key20": "5e3T7KHfyCiskXr8vJy8uCMU4nfPQmh8k1rKQ74EAkkWHAF4PSHgH3JMgLPU2MLvxw7b7WCaqj4KabwEqEYYdZvs",
  "key21": "6144PdrtpDbLhqnfPwWuUmkUUNNCmdviB3yysH2tbxD1XeEsQV8QC6wTuA3nePnYnjjrtDDXW8dtWgJJsVgBVhFt",
  "key22": "49XXdvM37iRHxEyWqi6xNSXKbBGR4ykHVUsYuNEtGNCBsep8Af5pXa4CwuEnhkfNSuY3xJpopqZFjjsQdyFwpbKu",
  "key23": "4CCsMqkubRNxahFfkTg9tpRA1vSQKaXLe9fVV4zPq3St1T6ChAVymp3KSPrtKMxzkC2g7j6rHCeW24zHbof9ZSXH",
  "key24": "3EHHaUrQsVU2oZtwydo4VXP3ToDEHkHdfzZvGs7dgtgAcy8CVWf1qJF8FLTmKL1ikXW8WjUjRnsBbyiZiDu1mvMH",
  "key25": "3b1oK6HxbTYRbNEQbcea2pdTuG3XQNq58ircrPfauBvib8U95yD4Pt4XNaZMC71ve2HJfGJLbFdckLmWe9f2pnVa",
  "key26": "3pXKoRLYJosxeB4WucPL5yDnHvm1yokNinGnm6S6qLz81HfBFyBnRhR1xp6kE5Dz77o9ty41wvwyDj2JpNyuZJyp",
  "key27": "2cuFekHPgVe9SYudSRCqhzDs3BgDWuVYrRzZzeFAX4UvsQJo4Tjeijce8sm15o32Yah3FqG6jE688NRPatMQSTUX",
  "key28": "32hmJ8aJrgnZXfdFEBD3ck63goferWk48h9y7KiJcheom9tnSas4vZXMi7M7J3LPcwzBJnLVpU5cgvsQzhYzf9VX",
  "key29": "5gMmQBMm1hnQrLT5eE2gT3wTWy7v8XYSyfqxx2UyHuqPn2ZVfGaAQUhwEEnWfDaeJKyTZaWv2UJWU614eBnbFtcV",
  "key30": "5G8qdFTwT3u4951Y5HCq5msB2UT3tqbn12PVcfawzxMQGULRXMBfXpiufyjQ23pNcVb2vryBjnyvrSgSHGThfxhy",
  "key31": "4hS9FmSEb2Km8fMxtLJLydi6RzjrTSCXrqQZ2QCSJ6kpse5DCvHxnSwWekgRRJi1AdR2C8SFJYoDo9yPoPucjxVT",
  "key32": "5m1ZzBB3Ri8iyoiuV5LamkejbvMvSdBsUGvirzzVyp9ZNTuHYpxLA9HG3wXN92bgtp2bqmqGCGiNmdzxLLJrrQ1K",
  "key33": "2J11TtcDL8cjtANxMqRcqjPcCQ6pdNjqMWuGHEZPbwLxYJoKmTYUM2eZLFYA8rH3pHcbiKr8pMa7R18NYV6qo3zU",
  "key34": "2kFB9QAx6woDgpzdDCXTGzd5FHbiciW4PvtZVSc7kKUguu8QcRGqPAx3xxdwvxQ8PuEESj7bjUMrAY271CcbPBBL",
  "key35": "NxGvabrU7fbRWv4se9hs5waBYAU8iujY7R3uDoYxs1Y7mLwdjdnzohf67Q7ezcGCxYqZ6CsfdbofZe9GqGZ86eU",
  "key36": "WEiSeAj4hXRFfqpE2tk5nXtmCo6HdAvxr4uKyR9fv7ZeN1p5kdYo9UrX9Nx7A1iJyssyzoCApBGVXGNPhmkJDku",
  "key37": "2U5NSNxFzj6qn72RxwG33skv4AcqTGVBbYDkoBUw3tqtYCfqMyvkx4txvmM4Cbm4qJzJZuedEi3o9SnjfFDTNYrB",
  "key38": "2GQYZgB1f8NDzj1PUQwdNS34LQTnT8wNtPmRthKeBwuTm5rCXcEaxcMrvhBB7GSnJxKBKujxw98uNVBAc3VL7Rb",
  "key39": "3inGXjHxgzAgN2psgvVBQRvGPJQ4eT4CHroH2zsFxj1vpXAbF7rcSNCYFyakMN1bU6xKdYUk8rduBFmsAYHf1ATU",
  "key40": "5pdGbZjT3qfk1sJkjgYBRQ1m6iK8C4eFmVVwxa3NxxYeoSGnqKTUBVDpqBjYYtbtNDBAQotXtPekJLL9NDxYHQBf"
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
