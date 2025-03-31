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
    "5sE1WySJzkvYaJmBTotxfxvnYGNopCNRuf7KLjiJwYLtsWzDfWkmhVM9PShXznygbT3Kc4tM73bUcVZ5oGu26sBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pw7qjQADJEwjUbPdTDkpcHiZafjD66CN3QdC5hrv4ScCn9TipzHaVdpoQsRSRuBDdAW9bDRoBfQW7xJrQy9ozTn",
  "key1": "5CDncMijjvPjx5fjzyPcUDAZD84UpR7hXWHVyJaRWD7thhExovsDfCGvbisV639tZ9nKvaQXa7RDcsy3sG6wYeyZ",
  "key2": "2HsSCNYqVCDpB2gfocWJEN3SeVrUpnrtSi2C2D2X9NXD6mntQtToNvE8XDZdX633S7C9Z8NEc4UuFBrFZCtpDH23",
  "key3": "3gaSQR7suNM27cBacQPFuuAXRFafP2NyZhWtNQYvzvD1jGAZDKr8oEAu4VynnmuN2zJPVo5bWA3uniscV6csbpfK",
  "key4": "6RkdXxc7kjg92WYpSsiEUcqzPvsVnHopEwZYH9vALhF2phyBdpwj8v3tAH8upNvmo5tdzsi8UapviYGhqoQf3YW",
  "key5": "2Zp5tEQS69f68BZBa6bEcQKonNGP6zwuSaVrX7sYoycq1LjjhzDTH6prdb4V9B8L3Fz1AbJQvaK3F5d9c5dkLcai",
  "key6": "fw6JDbfJg4ZL1HDSsXZanhqZZhBCF23cDu8p9hRQGz2PgsHrH9PxaXm29cHMZA3ykWD8xhWKFvvyT9M88Mpk2ac",
  "key7": "3y7DLf4QEBVLXBh7KnaTiByo8mgNxaxRAvqUUW87PebYRWuQrTTdkpamny8bruLgEebf8dRaReSTxcBLuh3o6TXq",
  "key8": "3csEqGYoMvnamL8WwqBAE5KcWYVtrQrK12Hoic3xVn1TpkwpS8EXrGhmUU684bezvZe5DYWfd7JzNFU5sTVne6KF",
  "key9": "4ohpg3n1yafyPwyfogcpJGixi1qtYvCqQYzedwvtf2eX3Tzd7QATuWb4QSRcokyAph5oD9AmGmxyZ5e4bh6jeLbM",
  "key10": "ZkSapVyKVKPAExwYzv5ztfborqBGUQx3aWGLdHBDtLZMak3xYqmDMrGS9ioYPiHfGqFkdZXGg2N7tRr4uodbE2v",
  "key11": "2tn2dyvbdiT2edD23fFMGPkdxe2dbEgrNrLF5MExdPAYPqUzyw2Pzef3rA82hYvXzn5yqgKeGTY2Vjn5nq97FxtC",
  "key12": "2Bn5JSmfDc7J3dd9iYNqqh8U83mu4C2ZrCJ2NSf4Y5vLfbZDR76bTDZwdN92B7z8RprciWskXPZ8U91e3iccfrTr",
  "key13": "rRWv6KthW1VdYxVZV7rNUYTPp4xENQXVC8JyX834MBK3JLJWbH7E6Uav2RDcDyBrcfZT2mUbj5mndxuu4RU3y7i",
  "key14": "AgWSeqJ2y4o49nNEY7U75TPqqPL8c5c6s4ijCw5XwrC3BMppS54UEzj7AV8h8wQFqTnBHVcLESrWXMYrRbJuT4z",
  "key15": "2hYAPMxhNmeP2SmyBFRezWrHLYof1rLZB49aGmNv3My7mmVmbS5ptBf4EFHgjWGSbqNP74kVbLBWL2b7cYcb34DQ",
  "key16": "2mxrPgFjn6sDu7rgqeZWQt6poRZjwGDFnSckypQrrHko7o5ZZJJAcqsvvUDWexGWph2yfvBkWxjrFZtvbe9k3sa7",
  "key17": "2X4pr8dMeqzdpdt638Tp7Lma5XqQ777nsYGj1YiXNSuCizZXcmVVDh4Sxc2PTibjVPsHkJXk8J3scbpWieDmSuci",
  "key18": "skinmFfj7UoFZSEHxERTuBScV8SL5qct4ytwpdzwaL6PPB97GANs8qxmbmP8ob4UrSMqGmozNtiMYSvFJtJLTvQ",
  "key19": "NjGPKAathFfWdmmzQCfpXVwePGTrM7tcY6ySKR36p3F7Yq5wp4h1MVhFc8sVsjvE5PcQgR7cMXEbxoY3yAk48W2",
  "key20": "4HX7eSKARjFLGc8cxmdqpfP52Tg7BBPXeuxAtxJ9NutrWdw5SDqNksfUGZAp324YGDmxnZRfeg9saycNyQNUqu5g",
  "key21": "3zvcUAhpXyy6BkfCy3Q2r5T6UjDcE84tkTCFPvgD5ojNPbCi3ocG8tTNh7HHEMcWDaTgE74huf75iCQD4TTYsqA2",
  "key22": "2MFt1cngYXXw8ST1sw3CePytfH2j9VqMe3RaLWxLrAxenQ2yiJMZRdCSNSEoucNLA5LHTNqRHan41XtNtME3NTPz",
  "key23": "2xZMjqvyEvuXioo9YvocZA8XocDvFAi9VH9p2mEeHpFTAzqwUpTcKhmjzt1347aAXb9CjbkCvAR4mnV5hhyMhM2i",
  "key24": "4URaJczHKSwL5AGFV1WXVN1ec4Ha5V4jSQqpDE99NX1hxKKkFjJMCpuw7Ea3fPLkrB4BWwzPc5UxZrmZKC8xCDYH",
  "key25": "61JESbDZHx8ocg5rT2djnwrjqQqJtG8BSZ9vKbbNicCWzohif2cHXtZmBHPgC6qMxAt7g2MkehNgRixPDgMSU6PM",
  "key26": "KaVPPYQksSJhsLeNq8VptYHkCBN2enP3WUd6NUxbsrFxEpATVP7odXK8HVaHinQBATwbifDM6YXPzAMDimGoNXP",
  "key27": "3jUxeVXo8uDqNMN8g9LsJKRNB8Hr2gqrAC5MGr5QCroiS7qcYFMwncjs6sWzcVcT2JiuojCnEJqVcxWVf15UsMUF",
  "key28": "5io2GVxWdCrK5pecStacXeusBfbMbdZC45FpZAPAb5RtJynJZHjf2NZjm24tZwJjJxnBDDju4pGa11rogLGE8wPz",
  "key29": "2CJ9c56N5Hng5u3LCS9ZtEM1BLbq99NHetuuoxv5VcFs4fs4ffJ2x67ghqy4XT6F98FCgn8Hyt6aF7jtmnyNy45t",
  "key30": "2irKPsZhcvuRrMMjFj7ihVWMPXyDd3uYjKxSJ6zn3pCgEHCAqBymUK8AmAKDboi9Rt76afw2wUJrWyrcpdyaQ75p",
  "key31": "4TF2rCHxZVXYt2gCXwyrxQCKVvxvs47v42qy73tVj2YtMrSFfCYRMFCzVN8MELsJg2HhtPpFudDZQkuVfQWuLfTX",
  "key32": "2j1LQw7f35HEYZdm2UMgh2tYt9AuUs6LJg1ymrYZMLx93ipkC4CR1rLBk9841vrQ2vxXr5wkqF9JFNr9KSJSJ4aa",
  "key33": "3GbUG7sNdnLnhrpuC9j1PTbQvFqnK8Zt2epryxRmv71hrpsz1rm1PTzdHabN3WkkwyKST3adVagk66fk1VMzsW5w",
  "key34": "2RLsQJA9wveNmNJqJ6TyjrVodvkkTfMEBoyrAqPFDXvb3rRKZgb5jS3tkXc86a3qdVWqJ8gqPTfhuQha4d83y2ih",
  "key35": "4exa9DkkNUEdZyK3aG6zYc7GVMyf41ZWqYbFj3FyiRZBeqe8wVinUHzBMg73ECpMPtYXvwaVJR6sQw8u2gct7aJP",
  "key36": "2NYp9NfVPovW8QmMFRNebEGEyE2p4wbcCnRXFJoPz67RMmNjpiAK63jNy1fbFypXAz9RCm2ZXq7TAcJ5KPacxgVG",
  "key37": "ywXrSpTUGmdTHyaQbZTvpKxX4PWAGYzVM9sBFSRCfUQG2JSU1iaNZbWrJtw53Up7WHoxpnYTR94XE1mVMsGtkod"
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
