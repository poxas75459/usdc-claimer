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
    "3gFMvSGzfJqP4rzc1dTQeLWyXyQHVPfmfx1ePNuKBVaKAtMXT9MaBixZj1jFTkDqYx6FPQ4ddPVLjcXeYd3cuF4B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BAXXC4LhERRX4JexZCu3N8oHF7mQDEixgTvVzmDMfKYHerCuDaha3pGzkcyBpu8Qknc7Luzacb4G964YrH48xs9",
  "key1": "2w5fXL1yd16CC5TCLNa2Y3ZRm2buVHLzK3fZ4A1Fasww3A43HgpktTY2TA6fdcqNcmK3TAQDNoYdj7VzZwBx1jzh",
  "key2": "5SnGP84b5H3vmjeWhFHkgfGKmzoaf3YopQ7oFop2G2YRG3CdCYYWm3w55A4R63bmkaCSrBxkAsXjAvKhcuuh1hSn",
  "key3": "36TMGbaeFbZpUhwaGfnr8AcAmrn2WJKB63WPkV52ujYhqUmWXiMCyCmkzu6M9yX7Kq5jbdtNzMC71VhPMDKk13Ma",
  "key4": "4mbAEzu6AMXVeWExsoocXM1kCg9oAiiXvnty8vqa3XP4pSp89ApFJvH7K5GqnrtgSsYCmJjQpB881iApZHAFQsAz",
  "key5": "2YKGDu8SFRQT7PFNmf4prPUqDJikr9xkE2KsYzSDqkUGKpCES8sWnDTG2BLHDTDzrV9GGYwwudP72SG7vKMQq9wY",
  "key6": "5pz4ANCJwgFAdKTt8om1ZeGi32fhb95duBksx6gfdyQtiBD2vvwD3iJajUaJHyrYEutYf8qospBbarxV1o5nUVg2",
  "key7": "Zx3Y2EBckrhMjQ8LdNMmtL7M2jaE5ZUGMcCBjgzmqQSTZoGFENRGiokTjamqXhWuQMBqnV6L1YgybJjU13HPufu",
  "key8": "4x2Gd6bfapbDoB44nFg9n6mBuFu3qjdV7o7P5cEmtG6TBx6HG4fCkQ9MHXnkBVM7h6FttqzA1gesJBLXNYPuwUn1",
  "key9": "2inj2N5Vxf7188v4qenWfKHs3ej2K9oh5aHzUhKSoKYptYiNF9m9Y2Pv897xM6uTZNTEsxdxPUyiqHjhaiHL3qQQ",
  "key10": "32EyDmxhDK8JsnfJsCFMNRoFSMyiBqFKbshK2KvY1YzBZ3fzfGsNcANzPky4MWWwrpFzi6fyMeDeUMMgmAYBmLDc",
  "key11": "52eBPGkYjctim3b62TbwkU7TrYfzaztVDsDLUHVuR75mX4oiSVmg9vCw3GZgvmqEtgoxM477TtWPYXEionhtrrBE",
  "key12": "DSxqas7R58sbR22pLBUx5Lkx7iB9DTGtUuXqcvhBNnapUFJyUMoXh9TuZXu5sux7T93oUtBu8T3Jvk9DFvj28FP",
  "key13": "2oboPuxX1DB1eAaHFz1Lpd1pogaMhrkDvGianqtssPUygQRkTrgauTnfDs1jckdk59bRSGaPpAaF1UuDpmZBiyBs",
  "key14": "6E5W7E4wuyWMbZmZY4RYrbGtLPGzNK1Vr1MzvcLBgtgzADGNMc7SgkUrBK4qgpQ7FcWPcenZvgbXbqmstgdQqTG",
  "key15": "8wGhiN2KcEQDSPinDo3bGN5LB9aRQuTrKFRPKus6APJtnLbnWv9M5X2UZ6gsErPgQukSB2pueDBa8xoyGyoafhL",
  "key16": "DQpC8Pk6pSSG2nAEhurQZ5C4wvigAyT3VFwNNjXHRE1CTfC89zAMXnTouvEeBFPYzCdx1BvbuuMPB6y3jeMJ21t",
  "key17": "2jXrY4GLm8ty2L4tfzQXHbNSVP8F8A8WvSERQniPT5MNYEqp9MqkvtovHctpncg5prA5mReeRgEzgNky8z87wFxh",
  "key18": "3ozLA3fgPz8PyYqqgwqRoVjreceQfn1uREWMiscR65E8dtSgxDHtVxwCqqTooRYxgPMAEsK6yAvthwFmQeAdZnTM",
  "key19": "54FjSDXJEEnep5opDNJfLRv5wyeREhBsXbo3aoTHxgmJRhzbEn3e8vmYY7Jh4tmEun9EeMzATvBFhiNGYPYzYALR",
  "key20": "EcLz83MJVfWoSEjkcCnMDpKqxNkquQ2LGFVJHig1Kc57KR45i3X88MAaACGsEuae3p1XGosxuyzCrzTDZcn9Xus",
  "key21": "5baqQT4CrcZogWEK8pZJXByfNad4CRfwH4c2wEexQowgagvq5yYescKmubvzJjnKYToHexDRSmEEK5KBnAkqWP4h",
  "key22": "2aARNkznxMGTaVCVpRk3iDp43knwc8EMJPioV6oiux2KRbPSKYTfpGfbSXgao9B5vRqdtyU9fmfMTw5FFETs42hd",
  "key23": "4kgFXJjRxMAG5Xf48SDoc2Vtj8gwhTbbua8iLKpmVbqiJXtnJAR9VJGCRfM9UWC6NkJzwZTDHyVD8DmwadnJn6MT",
  "key24": "NFN5kqnhBwYsJpd3qt1gwhsUGzxiPDCSdPZxKs1SQtgfqDEcGdEwPL668ByEef66qMx7gKEdyPKdR1bdaNtZYSS",
  "key25": "2L7PZ7uD6qNSpbePfhVk26hc29y2v4MAhdHrze9gKxrf7oXkbm3hz5xjoGeGrw92yFgLocpE9dufd4XnkifMga9d",
  "key26": "4xHk72cVLtCsBWGTLBvCuA3jhhF9C6kfDtDncaj7E5AxBS2hFBuWs4aknrBTNiYubrhJtzuy4LUZAtj57whawbcF",
  "key27": "5PuGEMjDzaTygdS7wNkiF9FciE9MXPUiQu9kEPu2pYAqZdfPqSdxwNYcHcXd6ABVZyYZsbg3nK5AZHx9Xosb5bNL",
  "key28": "32cEXecaccn3gJa3K7f1th9KXggEjJw1GSq6mfKH3zX3XEXsiX5QXc8gN9R1t7gDEiygo2mERSMqi3bsAqxEjiXk",
  "key29": "6GjpAsywhEZd5G3XbCH4yyK5UHunZ4aueRFk8MMvc9KhTpLRvFyBA69DB8MWiao2dY1HcYb4u8aGtvve4bG6aaN",
  "key30": "4a8NspUyf4k3EX4jtYAwPdyCto8ZMbeKPV5gUEd17EaK82GW4ehXGTh4segzyWXon6ucRc2YoeJDMNvXNMm7cvpD",
  "key31": "4m7G6xzaAdt65jNmWedRgf2Mrprqwmn2QGNK6v7CpUiNCZBhCqAPnKK2PtXAdsUCVdGbPPS1hHgWZwACfHhkVsUh",
  "key32": "59zKDs4BouRCqPCuoGge8WNvTmSfdHG4b2WSyD8t9vB1mqL1xpwNbSJUuB9NQZMv1jXepJNpgy5yfUYcarzDWDJR",
  "key33": "3TfD7ghFQQRTAmkEfJ9DDX4XEzeZLHh6xoKLMRGVmuxDSqTK59pyATHSxoTVkyKYf3sp5GG5PGZ8arCL4a6n1uxe",
  "key34": "Eap8fsCLunCu75eBFZ6WZcvCdoR5ZJohDtVE6otiNQyoKY8EbV6pR7AoEVVyg2o2QnXQbPdQBeyfnZ5hMTvCAve",
  "key35": "5WQT3iAiQjPH4V4bhcvD9fBfgQDJzT4X6bt1qvCa2rH85d44TqUgVcRGJcaP3nL9BBA2iAp376robTcKiXbzzJHg",
  "key36": "ywttHvkZJf9sNrNfcVuoHfVSCBY5nmkRgpASRVchFHVTHn7sE6cT6QeWQZqWLRTcWw3CLSpmBNKQrX3T9Q7RHKX",
  "key37": "31WxTN6HzykKHKVgZ6cJeAtgkmudKpa86mVFFgLNmbeWir9scVhTDLwsShW4pBo7iUd9jbWQxwKgwfyFwt6QpJwA",
  "key38": "4D3EjeFYSdNoXcWfLyNDXVT2vZHNCRchXs7QLt9t6VhuQVqnJzr8XytY8MdahremwAGK336oe1hDCn9FmrauZvDf",
  "key39": "2RBvBkj4GQBA1mbRLt2GLv6XgxaFwij9CYWFe4hXe6iQe6bXrsZeqgy2jqyzLfuko78svrQQ3yybrWU8kvrsXpVt"
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
