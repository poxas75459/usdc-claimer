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
    "1Ac8iHrBMm695ufeRXbA8douPogu5NPjRLdnq8htREjptesF7oyZtp14M3N9M9C4pfuZsn5fLb3KdbZt4CdZ8M1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xaq6P2Gx8eh8wq6Rrzrjna79dnjtKxqa33KssEfbobQzhxnQzM8cojaJ26L6SGbL2gQMKkzSk4Nfn3cuDcr7FiJ",
  "key1": "4bwZ43M4jTfHjcg6BLKD9V8QMjXkm6Hm9wWLi7rBGj9GW77t3ib8xBrJQ7StZD2d5PG7aDhUKyTUdCA35XCLZMJ4",
  "key2": "vQtGpoeFSU2UDbcoMCoQNydgnF75wtPYbwmSW8DYMHaNrqx4MyMvXXg4DbmcsyNQedqzTghcdNMrSe8n7vVHJ3D",
  "key3": "ELAdY98b1tXcaDpEfUorj7grPmnJrcuUBtUYxVTw2kDM5inwByV8oPk2pAdBQNB86JWvyc5kuTabP56gHvkeuDW",
  "key4": "4ip38BmuJzPDfkVVLKg4qwLXkxnzFH3HAYZvEwED4UgEhhJVRHasqjbLHRMdv4R1yGuUMzddNGF7sMLnXanwGrQV",
  "key5": "2aUS74SVcF9ShG3grnov8cZ8bPYC8n3dXHcQeuqeZ7eFv19qDpMchEQhrydvyJwnxuxRNFbnwrU6fBvCHB3RXtmc",
  "key6": "528864of44nJjojQs8tc6X3VtgJBhfrzSDhPFop3rPfxr6TKKh1wHVwAqQDr4oU316AoUVL6UNkyWbqC1riUqpW3",
  "key7": "3raVy3TymCnkfABU2RLJTmQJGbMPLg2sxBC5r3QU1nhxQ1DMPbZXisrPHzeLVcV1hw962mWqNcsaBdofHGYDyuK7",
  "key8": "23rih6cBUpBtruUxRvTeK5eE6vFn4SHFEht237D9wkfzrUA2BME3vKqRVhak1jpBLQ49QkdQuNR1NQUw6Q3tKGFx",
  "key9": "35XBGP6Ci768TGa6T4qWV6sFt9MdmjM97DjzJqt1g5GSDXXYrUoCNnJjZXasJZrvxaHpwA4A3PfcTEzfSxu3uJxR",
  "key10": "jtGDo4JHnUZiMFwbtA7ZjfGchysbpQzjVfxF5UZNt1TMKiEroABYVUeeZhAnpqHxv8Kt6eq3TjWJtHeLfuw1D2o",
  "key11": "4kKzQis9xUrUN4teagQi4La3yyA8ACM38FKYnQcfzLDEoHQd3LpLSCqmmCY7CvWqz7mkChNToSDzB3SpPFjKVknH",
  "key12": "29ugMaf813Xs9gxithxwCXWX3csCb8UhVyn5JSK7BLdRL6Mq38yqCwhmVvEg1cB9ZDVsxoBNHNXi4jdDdao9a1WG",
  "key13": "3oNGqadqtAmNYPGc1ig3YFksPuzPT4WA788MFYAi6ZK4hP9pCxmEEu2XAuJub6nFCCTEpLoT2RhUuL9f3RRbrpem",
  "key14": "5yKJm7qC28hbjf9yNvfet4mWwD8UcpnC7hNGedBhw83U4T6N4dFmPRBt6ZhkSbFLVmmv359A9CPexC1Xn8ULdhxi",
  "key15": "37Lij7ugNm2jJ8sRkUPcAKeVphdGgNZ8JbEm6geGFuaZp7vPToDC3YJX5UdwvjkhzASZR9imZ7oLrpVuKfxsD6Aj",
  "key16": "5SvRfoUGbXseXPNeZJDVp5HRBbaQ1RySjcSMHjYvTePoEudaFwAPxhmzQEasdgYVXMZHospipGksT3CuP2RiCpBG",
  "key17": "2jsKWDMioMdT55Tf2bb9NPDEKigzRFW8HVnUddVvf5GV3ET6VturSRUxuhCymKaCNZXXZgA7eNFTdTJ9VeWVsKEz",
  "key18": "3U92RFKsCXhD32VvBVZF5M6VXh239P875ZSsTvqynUpXbGbQmZ5HZDM7adpeVNJLxdYGmiBietJpnpg7iBGf1ymd",
  "key19": "5xc2X8E5Ho4DoS7q8etbYQC7NdjtdH4MveeKCZsAxz6gG5YQS8hhkZk61oCqLHADn784ZrimdyvwF7AQR2BQ4zvv",
  "key20": "4ibBtP5sddohjRq9UbZmp1jjomHN9szzxvDvknhXUKpFxGoFkMS5Yod6bqzc3NPxEZh6DMr7F3NyzssGtCdvohLQ",
  "key21": "3B8GRrPCm7NDnYJ6GLk7vkjuLAM9qmzen6G3NupA3tTFrLsywVs5uUtft4mfJYpdwRcL2U9vnjYVWZ1FxyBxRx4L",
  "key22": "61uZRaE1Bssm8YYUFRwUYLKW4KexvSL3Xs7BJeVZ18QuzuYWeCMiYHH6fMtY8rx9KLrvjeLUMvi7H4KcekRfaQC8",
  "key23": "2jKeBy2VMLijdVNVWLFjMRMM4HofYfngKydekcgc7zHdjYmJbBXcc3dqXvD9nK2nH1dKKFyVPJtgMKpHUuyLzKKF",
  "key24": "2r5HomTTAjF1KL5HWvoYVN99Si69VR4uRqwEk376CytCi4vcBixCZwH6RoGykWqHfv4A6iFwKG5rfhstnLGqzzi",
  "key25": "2FDTtL6npdoNgs5mFUn879R4ZjgWUXoYBwTgsKN1Uhzc69RVWzerfC8tTrXSAoL9tHNNyf6SGV6rar6JVKHdrtPS",
  "key26": "5Zh47noQB6xneMuaStrYrk16xa9VK6NZc4NQJdMY7zBj86jd3XmH6Lfeqghdad8mMmJUpxxx9AKRVnfaaYvKYZhJ",
  "key27": "2iKHTfuFyqqHwfMwm4bbqeYQNGo7MnrMEjTgxFgyj4p9pWGjB5pmtqXguMbhKi8GmDT5rgJndFVjVvrXS19H44o4",
  "key28": "411R1J3sXrL2TbDePDQdWtcwoQh2WvfiQ3YwnyymTVFkPwRJqZQpn8P9VubLpBBwxJjRS8b9M9WD344d7enS6gJh",
  "key29": "3LXJbF3GRjeYvrc8Nb19FqQnc1RGHPey8z774rpAQsbyjGAZQBpGy7EKsBSmWqGfmJLzUfYojfawoofCCPJLaaaW",
  "key30": "4CK5hb7LsLwn78xhgyG3NjG4evk4GGguruGvQdzr4dNtB24kT5gJvVCdKi3Q8PF8G1JPyUD4ypuuWPWF23w9xQwu",
  "key31": "wbhAvbrsvWDM4yM7fYjaRjx5S2gNcLps8NqQyoWUaeest7gQGuz8T34wgUdmEmcY2v2iJHV94UB1tQWJ9tvbV72",
  "key32": "2DxzX5Nw9MHryppKuevwnYAFiKVfmGBxUcsBVk24oFxp3zR34tg9Jci7uD2gS67YeAsa7i87qKpxA4qnbhQC51vb",
  "key33": "2KzxAzGBwkHkjqpBqscFFjNmTPCNbCNn33nS2KWVboZGizdFkqEiFcfxyx6PWgQsJvPwQiysCpc4U6cTMnQRcDee",
  "key34": "527XfQ27pvS8awV7GnsGGQgvx5srrVbWp3UtFQK6YHBBBt3QrEiXs7kMzU92Aw9cjA9jGTcNDpyMH6cKkR2XGYZE",
  "key35": "2zySev86G3PULUtuVtpk35jZucuWkEJN9mXEZCXtcFPm5H9pGAgmBSaZhuabRT7868AofRySqcBEKQB3oNf791Gx",
  "key36": "67eSE14izeSU4qcHLyaNpg3qHRyWFBKzQFTJCpS8FHTQ5wRTamGNtYBQ89ukfFnZknVuhJKgzqwsTzWAwbKSZf1r",
  "key37": "2QUvMb5Mtq4N77vLSLR1VGjvf28VHDXXZ3cCxTpTALjMKLykc2roFAiptishexkdV5FGycddSSE2YDm6XxhCmtSA",
  "key38": "5ka2GpYFmTUbxXGjg92Dcbe1WskNyxxjtwMbjeyy6CAeKfgyy8oZ5X6s5imDY6oXYoNc6n87Phs57vxxYX9f7neh",
  "key39": "3LvMvNWBot5DTYyrnNb6mxc4j3po6GnzuVL18xnSfKB2auzH8vw9eknsH7JkZQrabp9A1U8mbQpCRCyFUhc1LQfp",
  "key40": "43fYZonQPRXUuawyArPXPWYjX8Tr2Cg7dS1bUnT8QGtHLoApKbBLBqpDcfTwZ29dKbRsMKru5yZGudsRuH3i6c8Z",
  "key41": "35VKK2rAHHkiKEJrHN1Pwn5dPAtfo4e64i8atkDoof3Tdvb5PykJvCaE2DHUPrq5qf9o2fQ7k2vDkfsw4YSHREXw",
  "key42": "2KrZDepoVZNFkr4tB5woAmfgTd9cWV2SMRpwURiCN1nT6SNTLghNaeprxyYgqy6YwnjXyjJymKbcx1YibpFpXFbs",
  "key43": "2LzZNcmunMBn4cSwNGpRuUX5VkwWpTFLSVvFau3sLH2wvouKwrutV3nPxEKG3U5WDVAeFHfXcb7bRXB3Hrqktpvo",
  "key44": "3GxGbhTvk53Mc33rEca7JWKhNywj2PPQnjtqGrZiJF92EgSmsDtjSXxo4E24SR1MWD6UdaTsXWzu2CbajguJRLGz",
  "key45": "55YpxZYLgwF4wSTcSW1yT6tHxHXC5Wv6TbTtA4AUnHyyEoBZ8HNfmroDY4XCz9g8EuQ3gN3wMrmtWDCotCrEy9xh",
  "key46": "4Dgtn8X2CTzwQhZ5rnZxBFWE2tu4gpJbXWJhkqLKGB7CQ3r7s2dXwhezEgGz1u9DN83wDJYc2hzh1E6io5Na9aL3",
  "key47": "4y8qDnT1BQiVc4ZTS3nXsxotKQ5UvANCRPNRPcS6ZhqY5hUta2iTektvVMmpaS9PTxyUhdA1jsvcXdhG4vPpKKf8",
  "key48": "4QEkmE2nSdmGBTaL5me84yRE8bYJZYDRPcMiBbieMuVuwaCHUfWhPdrDLFQHUyjxoZUWvLpwP75ST74MkTgqYomp",
  "key49": "6pqDpUhY3NfB1LWSn5MawhREMWSBf1aKiRNFEicvpmvCLdsqwDMhcU2us3iF1uNNQA1947xkQgXk2Rbi8zqCgXg"
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
