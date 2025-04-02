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
    "29yrQepircDxpD58eMSSqYePtDXQbSwSUXLdfG1YxerUs2hiqNxSnNkkJZH2t2ufgNVpPBHvQRa34hPn7gurisDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T84YSsxeWzDu2bjTnhtCz4FEyQPFJztQqTUVk3ZdHnJHTmKtS56tF1zaE8QdKKdjhz58Earx4Uw35vVf2buzMJU",
  "key1": "3vpzFNdCQFHhAGrHKbQ7wP9Rk6XMgHKZgL3VGTqvP8XbuHoVhFokQP2y1irEtPyqk8NDZHLL15H4AumdK1sLaQ8n",
  "key2": "zxg9NSs3FjzTuTYCCG4Rtu7AnAmWR8pScx1RuXzokoXeiuvm4UTwQwtQ41KKgtAZh6VVZ9drokxQr3S4vUWWT53",
  "key3": "1SLWF8J7f2QN9dvaKKWEaar5to9Sza8gnQfTuFJzAmekPkERxsaxPdb94noHm9ofscK5aWB25j8E4qSfLrEpKJ6",
  "key4": "5RdfU4kv1h1T8EBgzUZQPYNpg92pjVrJABbui7kYP4vVdzyauQ5RJZ6wVrvbXuSPi7irUXf6h4KYUuX1EtEEd6Hi",
  "key5": "3ytYzowr7aWL5vw7eAxHeTA73RL7tNtvyH21rJNJztscmHuEjEsBtaP4dPJBc7Z6wmjvUJvueQmDCnPysT6qxEdf",
  "key6": "255sRG1bLuVrYpWxgyGtfZZa3rvhqSAPsD3ueUHSwhsTD5axE2DzP4YroHgjAdqDXQv7od9biGmZ32Hhu9nFqeED",
  "key7": "iRo9zE4z9aRNdWsDB7LcGY2QQmHuYFrTmf5mDt5G8L9QdyYuWPKcAYpjQWfiHvdkhZ4Vhso7U3DHoMtuZji1BXs",
  "key8": "3asBerJy2NBs5bnJksSXpQiHsw7BG64haM2nBJ8sUiFv4RpWinSzG7CsZcvnBePfhTfZmNSk6yN269UCFhWkzBoP",
  "key9": "3NSc7DBYW9hYzXp13VTe7vAR3GjWqgGYLkqJWPtHNJipQb2PsRuhT2AVqVfjPJYAtKgqWsisgQzGPR3PnSFikDjz",
  "key10": "5trXKQC5HhMQ5NYEt7CkXb3oNzLyGwUXLRAExb2Pb3Tmnb2fonXSKP8zVXMgaaU6rGNJxUH2ZWoAeX9JV65wE2RU",
  "key11": "4kKJ82k26BNTEpgkhk9uSAYB3rvCdAv7vE4dkYyRWjAbnxYYiY7mnVdgW3hEWWfFCrpmbnyLMJGD9c38z9U6UBD3",
  "key12": "K1uCPB6Xa5L78Dz9ub5kPaVGdR3nEmwBkP7DF77tKwhh4HHU4kxurYYnnbCRTxhAxmjmYceaZkpYjs3hRdK7pkT",
  "key13": "4uKtgBNwR4fwtGjY1MEdXTbKPNxLDxLr8YFmYuRgWBE9QwRAHsNfUed9cSu7SJUXPMTiFQKCN3XZHCe8LASQGXbp",
  "key14": "2gUK4Qkf2sz29CQ5spqSount9z1NcBu6Sn4DxyzgcEN3Aqysr4hiMUBtGaMMk9D6Nq1Untzxu1QC5KoGgT39ymV9",
  "key15": "5dGgWf9DK6BWoUXFFRbP3aydXxMd3s1c6vjK4n3gnGtBjicwTUkocikR68YqCZ2SvbsFh313hvbeCwVbXFxmfFUB",
  "key16": "4quL6fAfFNYDVViMb7Xwa9DEmcpV3z3fo5JjxPPBh8wGoLr5WKyhB5p1GJL476EhnqCJ2ndhSbUSdcggMwvBbFQF",
  "key17": "BWzKggwHQCwpf1sgRQuE7GVB4NPAoG9VP9DHEQZPcpN2p4rnWgohDMJLDRUyYWbriRV65jT1HPeBe98D4e1c7Gf",
  "key18": "2ux9YD3XoKJ9zx4L5UtASUXQHVQtLbpfg4oNQ7Z8V8Q32TaYZ9DDHoFj6gwsCTHeGnN7hJPFnokPRSD2ZDiUmRNQ",
  "key19": "3bxLspw6a9pULvGGKrbGz127WhGvk5X62TmjVHnBjxayCHjmgUoUMB4vW1YPjtfrK1WsjRXtQv7RG4Up94CGu1nB",
  "key20": "47wvZyRYcD4qKizgyGRD2VfpnKUTZMCMiPrEY7NViLvQHcJbkUKN7PEsJHFsTF3iRZPHENsiLHJByBHfQYkps3Q7",
  "key21": "4VFr1xqqfpHACCodrfqcMHuiq9sJyVJUiNbykCxZDydRiJckFmBXg6E4qrTUvZjFR5TncUy3bnHPNpNuYJyUrYPz",
  "key22": "CBEFSHYoHv4Sfgp2wao4JzPf1QhAQHRT7SVHycPjdARmpwvm8pU6247oAfZaf5kStH6JR9shh5Uwbo1X74knK6K",
  "key23": "3ZbS32CZMSwF276VnuvgdrYRjGr7JqYZdQNaWVhwkrsQzDuf668gQxDnghGkVRwHqyLM86Au4okcEyYCuihPJ8Ct",
  "key24": "3esgUh65unAsF4ggBwEsD8nHiXQ7STW2icpb3SiZhW3EUQXzXiaLW3kNsTkT4wKThxJkcrdyEnzizTUgXWhrxMpJ",
  "key25": "45HUuhXTwUeTr9P82jWmkYhecE3nWXJ2o7zRpt4ukuFcTbgnoNzcAupmmvJMF3nE8S9WyR8K1UugFGLiG3YBQKew",
  "key26": "5R6wL6qGGYMbbjD7nNaR27RVxgPQ5thtRLibAdxWyHa8jBcWHVec6AjN75VT5yFZhb2vJwfhtXvBT17R1iCinWwc",
  "key27": "5rCJ4jTbgbE7tUCeAg7Z6M9TL4LSZVJMpHBJMaxfjx2LNKqxNkznETe7Wk9TVftrE7iuTJ3zW6U9vK3zZAXe8vgQ",
  "key28": "4yGA6rfrJSbjk3jAK36QHM5m6rKPr6PL8TSGomUZgffQDttUGzSB3nZPALgnkt94CKK7cG2Mu34PWwy9PC3guPpq",
  "key29": "2S1JV7pYBFyiMhfG8Egk2P8BZtqewqjJvXi8VDRExnv2qe2pXJXwjtGEVDEhdezm3wSEr2ezxQisgdKWkzFHSATF",
  "key30": "2e3oRGQiWH7RRsHTzXzfpXzcrJGsGyn3r3i2pWbJxeGjWERjmpAi79KQ3i1DCsbd6d41Cjbb1zJVRnM7G5sQZji1",
  "key31": "5PBgqtVLo9SuLK3pUCTrZhmLzQdQCoDuC4gaktNPxpKz1ALg9aMVfTFsyKwiuVwSzmYaFm3PUch4uQohU1YG1ssK",
  "key32": "2h5huEqm8eXYAJd8NRppf3BvEs6UXECqssz5Se1Nzi5WVkd49NTyjidrYrcGSwX5G4NGducF5c2GPg9HLsU7oDE4",
  "key33": "exrC6SCypsK3hN4X8B7uQTcJMUSJjqTqBbRik9jv3hW6ZgnnD8wSsMVE1f6u1ZddWcqn6tjYH6T2HtvzqhBdkvG",
  "key34": "B1XEwWMZQf5ayRJyLFNmCUterDdmVLwmPpTujmdraySsd2yrjKNgBjURRxbmpZQX3NbBkBftWdJR5ryeTS9kG1b",
  "key35": "tby88g1Z7Hc4FU9rja8Xo5bJtm8GfmxtJZ6T6VyvgSepnodQuUipH3WdFAxrY4RrPkkEGPvxYvJAPoxcFPz7kj8",
  "key36": "2kaRdXsH4b172cio8eTLBm9QdTwBwPzEZvDwv9q2seBFmfjsFfbRSqe37AeixSAFxw6piELPiaNtoDMB6cFWNCuZ",
  "key37": "2CLLBhuASFqmRc5NnfDjc4VYgtNvkDiezRP13Bh6tkpjf6kBjfZRtY8MQi4JyrB8BFypAvj1frXgDfoUiGLqVs3W",
  "key38": "3rQn8XhjgvajKwrY4VH6CtFULH9xgdRnRCnF2Rvxj69b8HH2sWZgNoCjSUyCcTFW7jTaPWxtQYTsCS93RRxaSffb",
  "key39": "4ZGG2F5KQiN5im1sYRvHuwAKy39vbXF5o6sMMSYqZa2BhB46Wz3DuTowpmSphvGfnfieQ79AVw4KeZsavBR6fQSS",
  "key40": "3WrU7sCNSZPq5RG4WxvoLVxGgoswAiccuUxsK4zX8yYo16dYtCB4WHrbbuMMhaqqv95G9g8woujJE8qpT2AAjRJh",
  "key41": "RYsmRz9qSBprMJZ66FqCCzTzXwiZVAAcqUZeA4HXGGFsJR4faRpu7xQAPU1wKYSA9EdCdLJJed19ndG5X5Bu5QJ",
  "key42": "2GuR4C8Q4mYDPCh5J9toijCqpE4FMZHgtJbTwZVQRfWZbafgZz9yEnf1BoPWTRAErLmYNGAtwMeZguvCmPnfQsDF",
  "key43": "3pLUMTMbWfLxVnwCnumSdy7fnBUfowC7e5a8M16EKVg9EefbJiSdmr9GFBSdoPCid8rhNWxJ36L23zZc7WJKfD51"
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
