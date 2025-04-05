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
    "5b4bH9Bc9JTHbp5Zt1cgArq9NNCWTjnDJSRV1Ta4wcUeucDmAmnVAMqfhbDCeX38rh2NeEG1MTm1hiQvNutX9jr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sySEu7KFJRb4twzkDnywCpjxY8d2suM5S2JLktF89zpkK8zRoR5dkrRC6A97KqY9jKGGAnKKUeVLEmFkay7zeDG",
  "key1": "2dbenneJGgKkyCunYDNrYSxMDENdyBt1gZ5NUekuVMco4mWw4DGpD1gWhdwJeDVjD3RwApMThbdLCqmtuTHq4CVW",
  "key2": "2yJGrnhggMHguq2pqQNHL3XfQEt4EMq2N1vpqQSxSjGaf52pRUuwhxbg6PzApNTzf1zTj9gfHz3UaHi8bhDPxmty",
  "key3": "54mrFJw3vAXcWwNhxWDSvBbF3Et2xJrrCaAejFJeVidCZQPtJiBWpeyKJKGTHeQbEztxXsH9yPWPFBdvpw3deFQV",
  "key4": "4LMQwANyezQoB4vfb3PBm1ZjViW4CTqURsCzBXMCGu2ouspDePjC1Z35Q3qZ3uVHXwRxjT1mSPhoreeS5dgDPp6E",
  "key5": "2f6MJTwrTuudSfk2UEZjEWv5j3iVA53zHsTJAGP5oxvQCskK7WR3BPDiVLgkGUqj69RwfKjMsayBTGtJcCSnJuNi",
  "key6": "kmTDY2yf4AH86AfZeZQAuSEggRsSh891NFFrSDHAU6twS7LS9orDgbbrkjEjRJZgkpfGt8XabST8q1QhJi1MwEN",
  "key7": "3ifR6PzGnocgmgj5mkjksDsLyp9NCxxXzAkx2fbeGntaiiXM5ufsvXZfp9WWh4rfsh6VQrgayA4mHn8cwdcqQvH5",
  "key8": "54SHDoHfcJkXQMb4mYfh19s533kXya9VjKLd2Uha6egH9kKKtUeb9mDkLyfsmfsxgoYdxKpdp5DBftNB8u6q4J1J",
  "key9": "2GmkwEkiknLuBAYMNHWQJEEfmK1D1n5pUDg3uFUfs6whGdpR1HnV5FpTsDjUEc66SBorL5zVC81Qm4GBp2yBepFv",
  "key10": "24smujswzPXY19MKd1bBfddXfQciBSP1pVLhRqjxxc6vYhhaiCKAyrzJMawsdVzxFMc4UMijQi7jT4jx71tzwME9",
  "key11": "prdcgSRQoHUi858EAWef2E3fLzQroxpi3gPGXEytjG75xfBmywyueRZuJp5XBLmzcpQsDBsJ48i4UCXEY83NG2D",
  "key12": "4ZATP2xYfAt1GHGHQAkY3T1GrS8Wg8u8T5B1LfPzGwAy6kkG6Fu2jr4nroDYXJXbWdaPPU2GqniDBHW7MNTcRqF3",
  "key13": "3kE6RdhjV2j7EA6WTxzdTwZSfivpTGocP1XqnT6PxmE5AtkhUDtQvqWKtT6KDBzHhJQwfsQDdF9x7y443Hqjwgdp",
  "key14": "P2A9Pz2DheBoDrvFa93EiM3BJD99Mrxc7Ahrv4EYon3x5F9NjuijPCw7cBmZPUHbR9tzk7VBazAG9tCUZZAXar9",
  "key15": "4hoYj66hXbvdiXg6jWpy6kbg6MWtp4exUyRX8tCWnGAvzBeZchndqvy2Tib1N5SKrE3bUh3Yu9rEDnpP5V7bp15x",
  "key16": "5jfxQ6y5J1pvV84JbroGv4NuixQgKCVCmd6uKFM7YiPPbTaBf3b3u8DnFJVrLsBY9bXZ76iTRh5XQKGvD5EDwddN",
  "key17": "3WFrpyn11ToswFbX2G23qcQWV3f88JiVEDWoHTGBfRkSdQUEFGP8kDA39QDck5wxHPPmQjDN811AdWyHRfvZMtaJ",
  "key18": "45RHcAis4c5DmbioGsBMT9LGfMVT2mi2WxCc8eo2VPCjQBv4Cu8fJP7JDWz1UMDkMEPUpnfwX64ZYwbBQt1CUvMR",
  "key19": "2AKSF8Tpwa29BfJNBNma2tWgDhzNHPgNddS7p2zYnpywQycQUVMdLhtawGxDA7vcmDdgjp46w3aHzo1n6XVi1aGX",
  "key20": "4qyyfq1ynPisVm6gjbm7SUdbKPfAifcZs6jL36no5tca2GNSHAKYLrLzrkuxqqWGEPx46EyJ4wxHphT7BTXtRkne",
  "key21": "2kWU8nzAYgcUYGFGxg6uQNvLkSu7G3xM9r9GrKszFb41yAqoqwvx7qkJyb7vsDSKR22eY3f4zveLUmejLAydCUoX",
  "key22": "jNrSwNGnrGrUHmibNYZxnqtDF7ReaYjjEumNrj4CDHssqpS5LGxpfzQQCPHpGvu9MnhuvYFMcMcH3BPCWkTMr4b",
  "key23": "3ZDMaD4ctad6zjr4cepqqSMEUaaS8d6XY6krrsWV4rfdVH6DKYBkfbVzGxkTDHHfmgkwy6Gom5PTJfH8v9iuga5g",
  "key24": "3F49REfR2nb7XKqjsDX229aBNL9XJiVPpmknShrja4fsW5sYDF98BmDVUtXwK2nHMEACSu3iXxB4YnvpLyj4Wmfo",
  "key25": "5ZBxczGHk3wG23VuMmuSLCjdpcXQrDQySyvC2iSBX6gH1oXFRpEsgqVvoQuEBAKsgDCzwQzzsVezo5riRERopJcb",
  "key26": "4YG3WrFNMAZPhu7vXymivii3WQx82SkGu1LvbftmgGjaX3Ly1LZLZg18hxUj5xhoVjdDGL31Ay7XMYRxW3BJJan8",
  "key27": "4YgSoprJF8gGHRaXXk4q9RfZGezaavVbfsZgEHqTk95UdgqrxeKtGbmmbHPMmdVRnWGu2MydGU7nviASzfEpabaY",
  "key28": "4CxpXQbwWYXjg7gf1LbdMWrcWs7EcAXp6JTWDcd9BuEQfy7kJjqBjiUtPLhoPNBwaxtwCZxh4KTkLqy4GjJPr43d",
  "key29": "25vTCBK89QWz1cLkPrBuMjziPAAPens5qCU71BywywgscYKA4J6553nxrmVNNeK5BFf2Lbt79S8TRwbeZBM5czdA",
  "key30": "3CNU4wmf1qeYUS9PLPeguFHov7FEwf2GTRbMHEb8duWBw3u2bTrwKkVisNbBUogfuTuqd9WxitU4WYowQjuYjunR"
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
