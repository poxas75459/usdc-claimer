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
    "53SB365MSQqAKgiDykBUmjmFd96atQss5bv8Z4DbMeCVoNUwynJmpNUatUmGUkcBJmn3fEu89RTUDzjDB5jQry71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PgpUSsdrT9jjXVRtuon4GpHKkjxEX8Yb5d8erUSduicsM37mJzemUS1cREATfbnFWzvZwey3TT7pcCAZF3Xzdjq",
  "key1": "f52BkmaRVCqZWgsaAqJxpCUy1gaK612yisYWQn7KEFofQ6GNb4d6ETDkkHcx1NsccfVghDJsoXqvX1AFdwDnLEw",
  "key2": "2otP251NP1R9nsVqzrA8rKM3phvLVMN5aWh2Y1JZTCTNeomzc57MudKerNw9WrZhZMFVxYbsAqxrcXKJ9BFJNx5m",
  "key3": "3AFn5GceUhaFriLTaSuM3t4eoAKGSWGDFzRvHenkzizk3N265WXjsGiqEKK2RkJhk9FvkoeisrMo9sRZJzeYPvGr",
  "key4": "5K8hiXz2ZEjcCXBk6xErG6PJHX2dizSNV5H17mpjjcWyC2k7BvFmTdWaQsTM1YKhs2QYGqXXppXrULQDkkVFAZpn",
  "key5": "2zMNvCjAMbeitP4TjiJFBNhxUe5ZCRRNVnPrw3zUJVpdji56Vj3fC3UxUXTs1WNQFEXiQNQqDzPToALRU2MrGY2h",
  "key6": "3dT5ExxgAR7LtMSTgi3ktttAT4u2fd2CVCFpzLDaoJn1oGpbwTsNE71Kzjka8WNiDEYcKCZHkNPhkW7ebmvNPnzd",
  "key7": "z2jvobkGFBVGh6cuCoqYDTzJEWvw2wuQWizEe3av1URZGunuaCH72m4K4xmEgLwtowoAq3DJDoY5ySibcv79rtQ",
  "key8": "haWj3NivRgF5zotVLbHbBue8Bpas8Ph7My5QPhG1HATBEvvVnpLgn59dVuVV7qG8RHtUEgXzQHzwNugehzfFdd7",
  "key9": "5YdQpUmKSfgveirqwuWyDqSSo9HrH1nYAnvDAz5BsaxDjVjDrTrCy83QfDtm7CnmSRN4REF3P1xU9QVFydZKYFge",
  "key10": "3Ze5Jaz7vbat8NstUCLitD1PX4QsY4cNktNc6nJhgESaz5U3yyFeKd3FwNXMtaeKjLVQzJiv3jeGAueCGtAkKaEz",
  "key11": "5NCZxwSJ9qkMXniab6sfu2dfUqa6ayjmsq4HgbtaBz32tc7UNH9UAUiChC9AmHx8avGWT8bKCRt9wLHwPC8RCt6V",
  "key12": "5twXtCg1qDKftZTivEMLTqbRTy9FS47YJ1muAynohfUR4HWitwFHBmNdHsaMiBaG5vQWWnFM21KChvNS5yn4uwqW",
  "key13": "YKMAGdHHsew7Srbdc3s76R4auhTryKJNCXZhk1GAA4qcEE6EqGTa7D9nJyb2G6ErguQrcV1AW95mxXJp5sXzrHH",
  "key14": "642rydhwyesJZLiuT2GHZnAUo6XzMGtHdTwWuZL95epbhZTphaJfMJpz8U6tB3Ufhc9AsVRvFgqD4NyNq9N1s4aS",
  "key15": "2RSDujt7f5tVGBeP4rj9GDD6bruNALPM9XqgrsUsKYthXNPTkjePcwpQ8RL5dpHHBgwEQsSVLKWqany7Uh3ihFKK",
  "key16": "aK8fj1fURGxRAsEfLF2wFfFdZSUyfPK3TYG374tiFe3bz4NBMz9ZJfKdRWVR3grguSn1kNZ4h9VCHYt97JvsxTC",
  "key17": "4985CZ3FKDcZFa8NLNMyjhcYXSE58LeDrBRM56LccfFWBgVysyADxrzBxMPEoE3LAAVjEMthpqeUftG6heStB4sL",
  "key18": "3JghHFjHKwPjGxK6nUp2SYYrSnDL1fGHZXzwBAnf1eKTW2B3iyLEnT5Ad2A2xEd1PxNzuVRcAfD7f2AdUspVoXSP",
  "key19": "4EH4XATg7PebcKxkRmVvaVRSNFPWkqoaoRMcAvWuTmL7pvmSQy9kwk6FgpjwAoeACVigED8KFpYEokdG32Hsdacm",
  "key20": "KSD9SKXGkGqV5Si4JsUhRDwQExcmDnkErLPeJAW1qov3oULwWCD8AU1iq1KxcWeTVJCBGg68yc4TVydF6GLqGMu",
  "key21": "2CAbYT5NbRtJEcvzZgWYJp9k9hDqdXMcMqvdz9GbezmaenA13PPpcoXjtkAQvtwT48MuHJtJ1CNeAmYE7Umj3ZZX",
  "key22": "5RixZFJXQr2rBg4dYfLnHeeph5Qffrce4D2NUrPfoqWSZH4P72zF5pSNQZhqrzCYHE4WFYpwiAKPsikw1wESvD2V",
  "key23": "4LURycZCBQ9cCTzrMVpF21uSE82VKktyV2YDtA7xZyBu1vbREwuZyyaW9zQsWoEPF95tQgJBo7q3TEYP27kszM7Y",
  "key24": "2vw3YCNLwaRsjpdu8rLFA1sQiCUfP2GMckLcCZBWJpmqMfzM2SZAVArpKsNqHc113mScHstDpTY4KeTsQDTWtRy2",
  "key25": "LF9GfZPgcfaM2f3cps1Uzh83CzaT1z61BozMjNmix9k5eUMh5dCcmoBqNevdgA2y9TBvkSzHYU9rDxXZwhZRkZ5",
  "key26": "2MzFLYxKrtuevqU32FDpFWaY9DVBB14cxhNGdVQXJG2sYs3kxCSTFWSb6hNp1FPrA2D8N3yVArhe5djs95LK9Hh9",
  "key27": "Tt12MQnEDsHJquEC5hto58DV92pE2mUcGKGfkuopQC788dwU5G4ZzaMZf5JhSV1rnWpRMnkGa8BYqT9s9KMfcrC",
  "key28": "wMjcffyFCUDygk9p69FL71Gw4MbAFYE2g93CHcWXo61JiFFAobfeaL6Q8zNXk1LyMDBGYZykis3Q3RFFPqBHC7J",
  "key29": "5PLRum7C9vULTjVJmZASx2GPAfPiJ4wkUXbrdhMTNVd42fkzVFeX9qS9Xn1t74r37HHiaoMgZhRmGHKjVXhJkbHz",
  "key30": "2UjHU9G1hBHEGpHtB24UVw7LXF1aESZU3CsRzNGT83ubFo4ca6E8cQPsVorr1CyV6km74eTsiLK8b92qHgboGb3",
  "key31": "31CPGREpGHmNKMPF1KNZrwJzyndtaQd86SvCvyR3cskYgUra3T6bgGJ8vWF65g22hrZRt4RQEWXnht4XVNWWCDLb",
  "key32": "45S2sKgf92kbmdAYPdwyevupVCZ7YWiLrXY2kSc1fLKVpRNZbUC4ogT7LrUvNxXRmj5MGz3wLYK7Vgz3Vio9mhi4",
  "key33": "43wRxNysp7W5fVKJxErC7a8yLJ1xdo7DKa5mFt6ib6MPh3eGM1msHYeojdBeqepLEe6Bt1mrDRimJuFvne9KjmYs",
  "key34": "2K6djMGh9nfTFQEhxWKKyzzyNpmdtRDzcyzY5nPfmn19qChB4Lk8m1FD2KgcRw3d1xtNfMEWDNKEfkNNYhU4Hqiv",
  "key35": "23vbsVHB6Y4A7LbyT18ZCkHSddkvDJm3umbAho9rv7WdiXGPPrGnqTuFjDKm9tbvQXFfWoifXYsmCiAvoV7YVs7Z"
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
