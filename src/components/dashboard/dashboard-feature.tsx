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
    "5v4LvJTCqz2i8jX8EmsUiswwN38bAEDG9qvwzHEu3p5kNYRC3eNJFzDtextBjVWWJjQrprjbXyLysvjGQgtD7dAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VTDohDD1nu93SKVX3doBfnfEPzCXzBzSRkMzHV63KYBVPtxFpJgPj3YeKbvWPHQy3DV9XWRX6U6fuhH7ZSNRztg",
  "key1": "2GePzuWAqP4LkyzAevBabBR3VJSE4k8MCZHiFeyEMupLFV65u5XfXS7MHTciQosrYk2z9JgzPwmEEZmwyhfed5k",
  "key2": "2K8eGpqCYdfMZ1kgeianPJKNxR6sLRfPBiYtdRgYdKZvjxgnc4xAR1F3SWHHQJL6fpZTFuSiVJsisuc1bfimY7od",
  "key3": "3AmbF7tU2vk8hezonjkybPr5y7DcT245VapGoNA3njqZtX6QEyLP4JyzBH1GRHmh2p9fabxgPcJ8dYyai4qWdBig",
  "key4": "4bjXGcZEK9Fu8px2EDg5URZ6T7etMtULi3Gtb6h8myLiegkzR91DYiw7ZcSRVdcw3TS5Y9hiz74w6XyLA42BCi1z",
  "key5": "5jhHCRGVrRGE6jsDFsLS2gJPBcvdL7RmbuS2nuaSDzb8AWLrDC7mWUXmQCz2ajyafmZvdVPhRu7CnCDgwCjwMyed",
  "key6": "bne6SWMYfiS1MDkhZXTaUsDAFSbaoWSUjDi6bkiymvUYR1hpdW3dBJCY3XixaoXZRySQpjcdAMHQgQrVA17fwB1",
  "key7": "4FFT6iEcNPLHX1ynMhBEjeo6hVRobZ4L2Ub4yHhZPBHTcScTXv6ZDsEWsqh71ao6ftJTWLiyjvhdZKRXjc3k2iuJ",
  "key8": "2bxH22oPB9ThgXu5q2vdJLTntsyvQsv5T8eUbhiWob9nXYsWhBFa9ksQ8CG6utts3UNpSuRAf2ascTENWgSpTcmM",
  "key9": "2rcCuyaRSAceNNPH77CH1Sk2xnJda2SSWp2abcAFF5xXMwZpv6DT5TmRuDiAKxjYhgjdhTPCR6XGAQYeddxFmm7j",
  "key10": "ES7WwcTdUc1crv3ey7CLHAWVYPNSKMZE56bEaQdubAFNFxU7S1xwvM7xQR9yQbbTcU1NBV3q727bwkbMhvpo4J3",
  "key11": "4E3oJgLfFeJ1YGgw6rXa3WDS6pimYc6QHiWxxsiiaqzzWKhmGKgVuxn41iD7PkVkpnwP564cCRP4kSfj44sZ8Erf",
  "key12": "38pB26waS6FYDnv9aL8g43LUcxquW24KziEGZQvogpSjqvb8jMERZ5GncnQdEAVfzhM5KxRadrYe8Fbbwtgwr6d3",
  "key13": "2WvqNF6dq4wFkmmKktqVjhdxLTHkULu33HcbCsqhiwt98xyJut9bmFxo9HoJAbPB5Q6EeoF1KGgkMqUt5mk3bVuZ",
  "key14": "3QZjB5yMP4av2vxpytFavDzHVGgQ3sJ8bWHUVeDtLpCmXeB1nhdsd8wNQ1MenAcyBXGYohuXPrgNjyxFK6ZNFfjv",
  "key15": "5XVD9Fzy1n8yydNZ4X1CZW1ei3cBuSVK3G3YGtAfVastaWPjaAgzBASgKbRPQJik46fwZEkiLE1wJSrmc8bJy9YX",
  "key16": "9SZgNp8xyxFVzc6dwsvMd96yuFk1btXw4nqp384r6kbYVHiTv2CNYzsdF6SLMko2gYzc5aVVQYzDrSxfAmuVvf3",
  "key17": "5er85SjpzEhHRAkePuhmuNLhqkvUSg3GquGG4Jaz9zjTHEVGFuVjCCNfyiofKayJRxnqkKgrqsHzjjevAtDK648N",
  "key18": "4zqY7PNM7cLcbKP7GmCzTNXefMxipT6xtKJ5bs8Q6i7a3APmyjnguyosBM6vWJPWGk2QxC83vGFcpxjoZAcUbtXn",
  "key19": "hikQ35C5ufFXiUYTJoyGW32qMh8tTvNMw7Sbnt5GASyhgu4CWNjDanGiMgJ9a2GG3q7QafQSShA8AfgL9vLbwTu",
  "key20": "28vNZBPhrAeoCM3uaF9u4Z4jRjyMVX9ReEvM1rhThcHvTuCdUi8Lhj6YuA1Qsie4Y1N8gaWbtKrZE5dRrFZXWFUG",
  "key21": "5BQ3BBAGf9JbbYNSiRSggGSP7kv919WtMNpVRgg86LL9xPQfY1mombJxmiusnXJaGhwNeaaiJnHitGswcBeJd5sq",
  "key22": "27BwFVqUc95dPG62udKVpERtCjVHKFLwAuoVrRofev8PtSs9W89Q893vfG5HzXaD51tgEuDe4XuwkCpsfP9QHeiv",
  "key23": "5REsjTFcevEh8EAaMBcky6MpGgVd5Nnk9rtxhig2ERN7gFmHfVp2gJBH7vthyiWi95qtz5eKeiLcujci3RB6jwVN",
  "key24": "4BZtJkFoJ8YSFciJYxvnG4RKURqCLvQtyKidcnZu9nqbQzix989Zz4CyRpgTt2a26wVGx6gmA1RkWHCeMpt2bVSo",
  "key25": "CEuccjBsLL79FRY8NzwzauvxTVLEj559E7Bo9WVgWY9yU6bF1YforvHWGK4GeQKfJvC2Brf7MdZ4URUmjUydQTi",
  "key26": "48Fjk6TqvVdhcFUa425xfyQoPuwWpsXBfrCDgxYr2a4Ah6heskiRBr7Ze4dZAytHCnPTBdord1cfkruhPPmcfT49",
  "key27": "58AH1QbFBJzY8b5aoeCj8wNteHCSvavDkjFiRsTqhNsTZ9QEypqgHV33bgUnWbBjg49gLsTxuuvxhMeMtriwKGuG",
  "key28": "2zYZZ6cF3YGs9hpNDmegSmnC7VFKhR1Ny8fNfrGzenfcYfGJv9qZUsPWriKH58FJokbuafmExCTARSqancZjyDGd",
  "key29": "3XR84nnSUbuCNHDDd4A1EcuPqvU9YkxTaG2ZxVmmJcmP3Mmu29N2uoywPAPYZTSaGWXCxKTPjVvbfvtoyVbtvM9S",
  "key30": "5U6nHn8UsZZRWoRQKGe245grC7Be82p14atik9L8u1GFGxR3ASTkh6tBf5UQjn28BDkaqMxjjQCHv562r2PVmS4D",
  "key31": "5ie7dG6tZooxJhBXTqxy8LuUJV8YD954Ys7eWXcobi6MSR4QgUe77oG7dN8J28HyjHJyXY3e4ffoyiG2Ziu4aXEy",
  "key32": "2LhV6M3MMWhGZnm7vNxq9UnLwBCiBw7ERDqCr8L8DKgJFYqi8u2obYxmDm15uKjxRH7248gsAUEPFuYm9MsLsZmA",
  "key33": "zrGzt7WNm9t8trUEp4NwU7DqgcYJPR8bjcyf4fMFY5Kjzn66cGz3A55tJ9zNXKcGenZu1itLPH7zyx6AvNjUtvc",
  "key34": "eDbffc2GUQJKfwH6Az6aAKHPvJpJwMsVdm1QNPxsM3J1pWeW1PAoEvpvXThLr8a6sbxxULRTLpFvr5sutrRSbm4",
  "key35": "qtxed6MBZJy6v9NrgKWPdJ7g9izfgE5b4yaaSHQEqJq1yWDCTZQ8cxy6KVykWW3p4uNPEtPW22D9TvFeGTRm2KF",
  "key36": "5eoHFcbrVGQdBUoyj3pbh422BLgz5bfMFeUsZetvnaVJuYc19tTTbpPydFLLXys7swnx8co32Wmah599fN4SDG3H",
  "key37": "u32z9jqtaKMS6SPZNsrEt8S1QdmkbEMiXDxc4Wm71hLTTJxj7VP9GuSTKCFBWxiB1QRwLHnt8RAzhJ3tdaupzPH",
  "key38": "2S3yNJ2te1aZ7s9vo1o7dMH5hfHTAPAzPZFTCftkFA7yaBxFAPdKDy1F3Uq8AWp5GtF8jnYkN3RSniLL56g6njpz"
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
