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
    "4cg4VQGZDp6MGeJq4Kf6JVEKnBKatfMXLrXubTg965RLDyYDTDhiYAUM96trvSKEFXHUjQAxjqQLWKADBQEQ8RjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j4ouTH52Ac84JvGRMqguNMAfXpU2mhyd4VXXLbqDvLuTmeNqHyNKDfHo5Q3U24CLPeihr3BfS7mjzaszP9jvEH7",
  "key1": "o9d8mgN6kbDeoHHCHpiZmjau1SRhkoDoA9J6UmAD26zDgjtygqRy9QnjmRexBfHgteep5btZgBpvueNGVvahXrX",
  "key2": "5Bst23uDSCQHvSY6XCHucZ6gKEsoMXCtKWBKuj7T9t4QEtykU1V8XcVXyHykVrA4KraDAHe7wjdmkdzdnq6cLGBg",
  "key3": "dq63Hf7R5enx56xfvMNeJ85pvCSKUv9bzLvVwPTpbNxX1kJcQMYKu3mLXigfuwwmXy9TR5LJiUiKNAoyGNJJLTg",
  "key4": "2GLsaJQZ8GPCL2AJvVaYQVzXh6VCk2MfJJgf6oBrhmUqMCEQXJftcvyK4EpHaS8f78o5NC8E431gDCZ8Spy2zX6Z",
  "key5": "chUkZVGpkPiFUJ53BGJSnj2s4ceMDnMZ7A1zkHViGGJdvYQLNA3w7KmpxvyHY6Vy73yVgk9cr9kqiF77Dx6CoZm",
  "key6": "3jvCugw9f2cUbxVEJAGhZJe2f5dQ6iYaHZUbRtpsX125LHDSS1m854oCMdvLhBRkCjDVekwMg5VG3D2dLu2UTi5f",
  "key7": "hza6wwyGfknLtRDqmZBdyyNYida9zKnD4C2RkSzzu8M1nErRLstWJ5JxntpCPXmFmhqSXkPPCXKGC6VCzGMgYX8",
  "key8": "GxEwm4qrqP2NZyg3nnqJGrpeMea6Q9j5ZQM86maskz6WaHY6t5G3zN74HWmiSwsEGe1e6ra5zPDaS7LFtQsHgHC",
  "key9": "5eG9BfDgXp3SgvApMRKjpLKX7uzvwu2hupUaHATp6444LHdx1FoGzQDoFVrdRd44JRzuZTAryVNpUyQ35PJnmvU9",
  "key10": "dEkys11QBypnQTdjgFr6R5WvVr5bczP8yaRadEXBPGEBupEtCcQQHCrayFyRPxPFxZuVZgRDA5WgWDz5ejpMsQi",
  "key11": "63MxHhC3JGkZaeXMczHFFXjwdxkQ2keMmvNw8YtAUWePSEerAFFSK16XpMErt8bJmf6FSyAqfGFVM6FxFMDzrMPR",
  "key12": "cPMht2genQyYxRDYNe86eGBDdKemLQJGef5dV6xDqive1Jh8fYnzcqa38mxDLejwBpohK9Ze1uDUBWjr2fY2BM7",
  "key13": "4B3pjYiKngRAuQgwWUFidZNEcuaQmsY8GLQf4xiXSP3JLyU79a7NonsebmGeNDVi9su9DZiffnWe8iBeP7ehHDGA",
  "key14": "47nN61X5cmHKFkncXHFEgz1AfAR2tGPgx2bpLdArVFBngsyaPqY4foAgY7sQ8FxmKjfb6LkncZJpL88XdeU82nXX",
  "key15": "PyoTFsStki5XzCKbtMD4p1oJPX2FQ6DDFF6UAtKfGcqqreyMZew34EHuDtUa4Tv8sFfrnh2m3c62Ah4WLThfH6m",
  "key16": "2sLwJwQEXU6dppLrM1UyMT62MQgnLewSG3gMjyrRjafYzYFCRsQDgp7sjRpP351F8ixpPRE14eVzWGoFKRnvaXJy",
  "key17": "4wWuEkWKe1PhwSohCoAXaZh5e6hjXvMvnfgh4uYNxZvZtSLuAhWbeCSUmEJeyFL3GKmMrEXpLJ6K3XUixXXNAKtV",
  "key18": "29rqofSLpAQqgSSD52zpbEdc6nUWxa31GQ1UKamQHwGsnH5UvtoKQqWtvoZ7C5kg4Z7PXksrbKpAic3rVbsyFtbz",
  "key19": "5cnqh3SGnxM5kWF6yibMG6p1RKBrPCsBNXEV5kjNny6X4Z9ZrvzpPrJ7DbtMSApjEmA4PRGPyMpg4rZ6Xfna4WfK",
  "key20": "9EuQJxCXzUBfvMqjce9Ntgie8YQw9k3kXuY7Jhvdwxc92tgVwSffMEXCJkWAYMn8b3mT3aX9nHo3SDtiNg54oPp",
  "key21": "FNKyuMMUf1rxWtgSJvujhnaiz3XRLRGK4qgi4U7yHbWHi7a7y8nn81KwZcpKoD7YtU5wc8MKGAd94J5rUbym5Cz",
  "key22": "kAYPZMXeB1y8BQW2z3VdtxS4BwnJ25hHxyZPjp75LZ9bMDsPeGEg28vT7G9bCbqtP6yszLdQkqXERAxLU7hpmnU",
  "key23": "5mZGWShyWsXCqcLTUW6zUXsw2qxHwyXs8Nzkr9wSjiCYNFh9Pj3cVbFB6LkovP2fD3gynUYG2hgcr22WT6NfjmZi",
  "key24": "5sABuvvVmSCvzjqVGpxmTfeShzEDSS8JT9WjG7igtXRunoXbQZkRKF1BFPGBR7VgrDmct4ns9MB4PEwhHkHurdXy",
  "key25": "5q8dmzbkFHyQQso9rfTTbzySFjXQc1jN45MJ2A4ZYdcem7sAGefcA9TxcFtKnxGDf3azQhBeqDyEQQQRUmZLfoRu",
  "key26": "5Mca1bggLTogqRY49zwW5hLYz8FQcrj873d2qPz7iHJDw7PrzTgrrbNkaDhBEzVHzeZ4zutApNxqfBYow7HFKiMq",
  "key27": "3mmujGdk5gRQCj1vUTbAYPZzvBioQTAZxEcvv1ikA1aMY5joybT5GwAWE2MXiXfWgqz42KMR9ZJKbCAwG9YBniu7",
  "key28": "4SunY5JivtNgCmfmY7FTYuJddFzJ1k8RGLP4yajBLQwrxvvoRngVPrusdMuVA3LDLNft3zYFdy3YdXaJqwS3f28s",
  "key29": "56zmd2Ae5hErKicykWMaoBeo4frTUgmvADpt9oFkuwhFzNuvUX72q3txSY8MEjPHf6C2ptbTuyRFziKbCwh8CTiy",
  "key30": "4myXxURzY7CpLHUDTCkaRxgSAixwZGoHG2RgieCVqcWPdy7U8Jrvjw6qragB9LEvBmZpxLNaBno6jNqWLXbZTdTs",
  "key31": "3r68pGLhG8Hn1zYZTUwJs5MsGiVddxpCsvV5jpDDUacZ3doJKtbUPBWuhQqEC9v24jYnYdE9XK9xTkKMYW1oxuQh",
  "key32": "4MKJhFFYSEe6PqTM6mxNQtrEToWCH5j44o3rCiTfznrJduJ8CFq1EAfa3iY769ypgodAJQdBjPSRN4w6CXUMmyc6",
  "key33": "3SNkcjPXkDbhy1cAZXT8g2BEsLATUMiokgEVJsgswohDsEn97xpbAdXu7VMte27ZAvj7WYeJFd431zSWWsbFhFXQ",
  "key34": "4Lydm3uKj3DKwhtW8kQaWpBHUZRQV2AA4hUW4jMNnVkMMYdxNe5z3s5uFJk68CkAwhBCgagmGdPeRpfKeSLmQk9n",
  "key35": "5osxjRGZUEDPQVg6NSUnrYAJdqDBvFuD3ArfsdmvkkdyZqPV4UqZmnwoB4756KVhUjSR575QnTxpoYESFxRhbEem",
  "key36": "2h6StXn8BrCMCFT551GnvN7hhoLPrHC5G1B6NySNWxt2q5T8cfc2ruJtSu7GLqHcVXfqZVq2wog1gdgE5Z2Z33db",
  "key37": "66bvT9xjXjfWSTKVDcjJv5dZwcFG2KqZ9vGJQjarrYeGG2AHyc6uJ5omrQCPgiii1kThTTTwQMovDGeJ4mrwSYTb",
  "key38": "kSQoc2zKoSnbBYKXz7aUNhVbtqLSQwLnYKnTeS6GD8GnqK87HMbvbS1gZunGSYPCZzMF7eqwgvxtYC7R2Kb6zbL",
  "key39": "4pmNbHuBEdV5rEQCsAhsuiwtT12kHYpvvsYBywWteYeSHXdyJmwyYa8EeBrkhLSQejV2wP3R4gShC4W9uJ4veFfe",
  "key40": "3aK9dVjjW8X6c7ZS3yqhqPMFDj2ugjLoG6H5ZSDUqJYgkvzWHtyRrGXbKSTkDUGNaykDsEdvSf9ifEqJUYxNgK8P",
  "key41": "3czvLRx3Fq18MNxkxRs2JtcFUTw9D476YNHQKLvSg97bFYsZs4GueepTEKHkkX1AiLAiC9BeRbVBtNHFoPAYUcwa",
  "key42": "2VRKhNJXrbyr9fUnyKeGqR4CvWZQPHo9156mfpYoRoGPJRzkRaqoqq3ZEzuBseF7bDYeNWYMWK7hXfBNTguQ7TnV",
  "key43": "2kbCzUo1HPaRV3yjtDrAyeunQySv9D1QRNfL2H1Fn2D9oBooZRbmaUwcX6PVXUonfNwqS7k9hxDQPmHNikHqZ4aZ",
  "key44": "3d25P9S2fRLiZwag6hLLXv1taw7NQ2D59fyJoj1GXudiPdRtGGHoktRcge1dyV3CyEBa3sjHWghD5LzrZaDouXKn",
  "key45": "3SoRtVPAZ149BzFkj3YRNqsgK7c7Umi4Vj7hWLU1wwHhSBda41MdHw7ukhuJYSZ2x7SnAdp2AzGKodvmvDzkAXvS",
  "key46": "5eckNNCNY4Wj84NksJTagS7By1SzcWhwMsU7PYcQfnoWpDRfC5h2rc3TPgwZhCLPob6HNBfq8kt1RFhXyTVk6nBz",
  "key47": "4wu6iSNPDip4TBy4DGb7iDRhfWX9wfsf8J1qPNDmrnTE2CcRYoh4MDEhH9tDKyAbSipdR13foQgfZdLCAUkG9soL",
  "key48": "4HGvWpcK5bE2BRJfPCXsJCmZqKUQt7pxraxW2sUd2KtYSSgoqfPPZsSXb39Jy5ybbCMwb8F3W9Ztd1U9TjTHiDFA",
  "key49": "4V6XncXoRdAvG4G8hvWKXMVpPR8LyPwpeqzLZEeVi743v5PGTR9f4btuVdVwQzh9doLvXXvY8uSgw47Ge7KJ7B9e"
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
