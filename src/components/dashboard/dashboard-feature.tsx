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
    "5hZEJeATACVizkXdUZYBgmS3b3Q6smAY6jJNq9TfRonu8Zu9uZPX7jxwaqoVXSQAZu7QS5hdKygijE6kzmTRQ5JJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MKrB51yuQa1qRZhxaVPhiEZmQ3qqhzQ8A68YSB1U9WaGS3sXjAFScHgxoTvyt2VdQEu4CVaCPpXJcGUS1L4inHS",
  "key1": "MxoPv6673VjRAUvAjXQG6sqWRtEeytcPrWvh5BvHC6UAmrFRFQ6tTNazLyuDSPXAPPrCKDBc2trEQaFYPnP5oW9",
  "key2": "3YoCrQoKR5FA2vD7PGfFaYveoUexDFHB84Zvt4SsPVun3CZL2bBoheowEqEMUJpapgkriB5Bt2upimDfheHde9fq",
  "key3": "ovubkCCJEHwYLrnSxGbm8RhiA9MTyGASCEYNH8p4KkTHoRJRrYExN8wrYgNyMjz7FmdYYqBnp3gawzUZELrC5mC",
  "key4": "468QPYUhGmhNR9KLWLRCpiBk4qJgVYRvE39xigFVuwSvsNA4P8nGy2G63vcRWr5pwTae7xbtKa2qpFbb5HLzwuRs",
  "key5": "2UBc7aPHghdqMgvm9Sp9xRmGRpYBARAMc2fwtCf7BfNwqg7xzvbCEaWSCcLTLfCLoh9Rb7nQwTyW9u3kHqXPSVL1",
  "key6": "5Mg4ieD6As9UYDC6opwDbKGaLu9y26gAut9uDmJbx6HD1PPAhykj53xCwcAwJ84o4BeGsmg2D95GbTTh6MkBvAdp",
  "key7": "sUCx6hTdLCuGmB9poAoUZ65S8LHNpxBqU7sBVSnz6gbfVW5QBPL8MoFoXfvsRtNi5snDVonKVZ3hT5DNDzNnW2L",
  "key8": "2AhED5wAKbikdZAui9xMt23B9s3XWLo4XdQNfc841WrLS8pc4sLr63RTwfFnAo5G75hSfSGxLJ2iVmK5tJU8sEjP",
  "key9": "2He2QbTEWEvdHV7bxrJVt9ePz8PCsKdbruZstj1ByC33r8qMqmb8zoR44hdTEMZhsMsXndps2he7YYY6reCWN4nB",
  "key10": "2j9gNCKfWqpRkBdberhHR73E1U72ad58x7M29YSPYqz8yixoPSZk6TF2NvBgHEU6GBaraD9Cg4UTbL3tQnntVPjh",
  "key11": "34vE658mB5gqdUiCvnerprqT9NTcAqZ72SSdzv3Wt7wKuamsyJtHeCQhMQGcvADRfu4zrkrdsvMb3exUuaGPPe3Y",
  "key12": "4f2E3uhzEc6RQ6tik3MVQavQYXf89wXmCb4ZpAufAzsG5o79rcVG8t4TM4EJJ4XDAnCQdNrvep9PvNxWmQyhSK8D",
  "key13": "39H2XXBSiScG2o6u241h6KQpn1UiqPLb3YxkxA5F9a8hspQVQySJeEkPc3YiKZ8PeZ4LHYxBPxgWrFdSdU5LC1sK",
  "key14": "4g7shsC1Rti5LMFNtE6dvk4faZ6ew1w8fc3YApY3iCsftMgywGqXSV9t5rv55pBXS7NMnHFqawumsr56A36UfB4z",
  "key15": "329W3FYoGXtvVpmY8btrPhVNsZxuLgqmxQWt8fgzd9aAJG2GqWjR9LLcpx8H3GsTfguWLg7hJB7tbwBqP1vYrUR4",
  "key16": "SiJ59cPJrPqih8svshmHrKwdW4ze5bPuJEG6PaL2iRoCCjnG3YS1SfzZ4FFt8yMa9B9LriaziZJbKiEHAHwUty5",
  "key17": "4xrBoDJ9XWViRaTrZ4NBfUwqH8dsaU22Xmupt4rxAYcmboqFK2FCBZg67AX684QMstUNjbqzCAgjgJ6FRV76brBY",
  "key18": "3VQsXKEReu3CpQtFBnd8PsEGiyYt1Wu1dUN4jAdQTVhh4pVbCKEkd2B6n5vvfv44wquvYbrwe6qA7hgFV2pc2R5i",
  "key19": "38yLx75C4PVtyuV7pKLXPbgrxpHmFLvMoTH5N1sM1hTJGhWXgTes4TJb7dgnkXAbS4uE35NzNyfcmWfAQszuZRkY",
  "key20": "2KDhQ2x2Ta6pbSNp1EMzDeemmZXvzdSpTGn8DKoXMweMcwE7ZMJwXiMtfmCVBZsgx6ZPkD2ZUbj1DUShGexuBt8b",
  "key21": "4Vx7FvA3Ey1pRomiQSWcrsJynjc269c4atSCUn1bL7xfRaTn8aVSdN2mLFa18H2w8p1foLpufwFHpeDbm5GgSZmM",
  "key22": "5TNY16W2nrKZKvEmynvnhc5hqrTqfzBzqad5wwMXuW8N6TB1jDftafbmozdAYQfciXDXDC32sbaSbiDB5mPMBiNL",
  "key23": "3RHanGpCvHDKWMSks7nfotCGh2Bvn8d3Ny6xHyk4PfwaXr4Kd27g8DNM7MFoW8nn6SyRGPGKLgMyFx5UXobbHUAX",
  "key24": "45MGJ2gGQv9Aw6jn1ZkBMaAdoci6dS44R2BekP9xjZvNgZcJhVF4pnJUMaDr6MCLsUzmobr3N5c4nZZMDpPKcPDE",
  "key25": "4Df4CWP79pTLAiKhWcrSgr63xjm4xRqf577ACtMsKnCdivUdZLrc16fjsUfLR16zEhVkRJKZiHd6GcKHoDP74mAL",
  "key26": "HzQrsfoD8Da1QwJQTnvLZjKFo6i5pjsDk2PEJsK1mCNUS3MXDEekwFNA3wDG9stdiwFjLAu3TagSr1TyMDxkrYB",
  "key27": "3Em88YzZGMQAPMrzejsF87zDfffwNQt9Cg7mxzfVL3TTZKqCKuC1Jf6AZckEJAXE9MXb2dDd88yQ1qG95Lxtqtiq",
  "key28": "iuq6PjoR2L5G8vXKL4Emuh56Ag98chCReBXq5h7nmceaoR1ePGZgQz7Ppy48SEDVjTTVkDTjV53hmT9VYa38zVN",
  "key29": "64bUhAuAPzANkJRNng6doEFVJPNneQsrnM2wDkuKwoZ5ugmMxTFMNkECcnSgALsBDsoaPNJFEiKdRy5PAymW5iav",
  "key30": "q6u38WZnbtHn619HosDmWm8iPZkzDj61UarRieBP72eBFLg9abFtTKFWTrcPCpv6ZUV1Cmq1ABTjRfoZK6NwhQe",
  "key31": "471kMcu2vcDvfTBKwpFpamxjMMcD6sUPZUidEUyAePAvxQJAtj22kL8D94aTCCjhfTJgVDJZUogaA8fU1HapZhYn",
  "key32": "4dLssx9UmtpcHucrJx4fbBT7BEP4HEaXEU7BcmDYLzhWMTDhcC4BKwhW8PHv13RkbpZowUKpPEP68eGsGjWMELBE",
  "key33": "3HBZR7yC1iqq2U3GJpjhWdQKtdE9s7du9B7av5F3NCakudJjRoLjYgBQiv1Wh3YBL8aHhN8Mq3qL1vA2ZitgDGZv",
  "key34": "4ZzzdNEqiwqMzZPvogkVVHqybjRBdANxe1ZYjY9WdN4tYqKcXvyKTr8TtHaUfHBTcs6x4gT7jJBSVfXsXNJBjNr9"
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
