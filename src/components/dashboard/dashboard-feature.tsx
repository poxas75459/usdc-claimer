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
    "5Qx1t3vvQ4wwA6ieAiitAQ7sE5NwM8CCUswdyaFy4gD7Xbj9G21KcgwwQJcxpq4ywkwUjC29HD8TsSa8TgaudfZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xbbr53U5oJHSRttQhnHZqAyyPE9BZd2wreQpwWz4z7cfRyiWrkCSY7cwQ65C9VXeAXbD94r16jgEXjYKFSKzFXo",
  "key1": "DbKBg2mE3LMi5waxBnkU4BPsFuehXXSLcqySy3ciUAJuseqruWzyYdMfi2jozaFtLDjMo63NAvZPzqAc9C3aB9e",
  "key2": "57TcPmn2qUBdS7s5p3QqSrkH5g38Av2sUX3ECDPnxuTcDehrK6bcKuJscmnzHP3ARVvJPfiZVs2kfn6kXAFLgVTE",
  "key3": "5XLPGvf6uj5342ghiVEdGZyPtsmcDscex38W6SWJVFsKLWMVfbjN64PKP5Xch5w7RbCE4TaxhiUqxH37f7zYMqVB",
  "key4": "4vhXc7FxcQti6E9PKsrDS2RfFKLEVzpmv1pvUjBM32tCfxDHg7j6yziDs33F3uc7JhyTnuHt7r155wdTUciBi55y",
  "key5": "4rrsjbqBDSpCgeYPP8MUWYHBLJF4D6H7TZxBAig5SLUWXQbjUhaefzyo2TWqKD7251UncVLgRw4DbAYf5MexwJ86",
  "key6": "81Pe8f3BLqJbhQmGZSGaNxihGWpTUbCmJzZEuSQYkQSfD3rbHM3GabvmDrdjKWpXYPKruwWCdeyAVoYv1R8d9PM",
  "key7": "3wUjMXZLYgUqh6rqyYxVdDBzBkSApKCZMfmmdDXaaVThmKHqzNB5VcWrMQrzXX4t6aQWE8FAUJSpq19FFKpzYMnx",
  "key8": "2R4kroMX115oYJ1V6m371aFxjpp7akoqohAXiZ8VLhL4rtKy7w88fyK6ht8WCTUva3CXPHkdQ9EsRYTVM5b2C4sg",
  "key9": "37kK5i5Y6TFRBYs6zH6iuhVYHGo386y9D51YDvJPX6qLPNQZD9n8f4AY1HbkiNVDDYPHvyFjYL17PobDuYcB8y45",
  "key10": "5ypM3e5Mc899iSqmLeGUCeMeSWHHA8L8rR6UYBLYqFtQUfhgXayEcBD2pME1dDwrD4QQfL5LNj6oqKcRrEUDec4k",
  "key11": "FDAWqUhtToGJmm2Qh9G8a87AxeLeY5yQgrAsJWJVj8dPfuGS5twfjmCyia24FnY1bMkDhppNFzyAHNXSJ1y5ZwQ",
  "key12": "YdQhb6hSNBpZcFqgFoT2usz8eCxCh9GwvMZGhkLcCJ9y2Qpa13qSpGB7asmHgLf5ES8DviGqZsNiHGnAdVTec52",
  "key13": "3a8AaMFQHsKJAkc3xnoaFdsk1TxnBnFcimqdqyBovgRzE6Qjj8evnK6Sv1r3bPADXneqSXehNgSP2pyqLmhnGLk",
  "key14": "4yaeQEdHYtLuE9hwNCgYwYu6UTccERCMhZ9neZhENS3z8AjYuLoBwgo7RbhuzaYresvhU676zWhRLcFAk9YYZzZt",
  "key15": "5K3Nhb7tBLDY8wzpd34ZR9SMQ8q8TQdHYMvZu9LNSVYuLwgBVCxGn4haL7NBNQoTJzK2TUBmxB3zVhTbdktc1qP1",
  "key16": "6Hoe1SobrmVx4DjbmkUJzgAhduVdfbgRsc7bMsdfcoNHfoy5SP2patsbgtTgGbzSkJrCNqnkYDQwUkvaLBAgV3S",
  "key17": "5DmWMCxPe8PMgcVrgWzUAKv47qmTeSGE4qkCYJveQZFLJrDyYpfyUVTgVTRndPj5YEpjfJ8bGab9J3y3gSBfCcR4",
  "key18": "3qtDSQeLjLEdFPdh4jFkGgd8bVYDeJsjhut8hqCLcHazJcxbc1XuDhnSNSsCLNzc3pMXRx4h1Luo5HRJULyYHtaR",
  "key19": "3wbuQRfvTuMwHUAjQNB6gq1jjXkqb7Vg48oP5867oAJM4mTtzJPwNsRdm65GkjzDGYSFJTzNDyPiypmnCMgmw1nm",
  "key20": "411byeBoKoyj7vrCBAy71wyjzNfHRatNVb8wNGqEtb4Zi8irZRiVsjKHEJFgNgwFXYYWadejeGELr5BzGgerdQim",
  "key21": "wVu2nnD1xqZ3Vyv3rrQbYVUCxCMhqQtddoSwE5LA1sn1KPohmYXkAVYzmzKBSK92t4KXTBwsVCZmqPBh3mdHAY6",
  "key22": "5nh1khoHVhygEHzmYjLatKB9DKu1xL8ZJc2tWFdPBzgXK48fot3BrZPvNrS5MBrW1pkASsC6rFBdqqgqychc8Zkv",
  "key23": "4fTnEyGTkvA4FTQ2sVELCv8kJP2T1sqgAyBEToaMnGTugyZcMm5Qk4UCr4QwWZXVrM66Z9EQaq9GSWhka5UVzwWa",
  "key24": "63v92HEpzMs9G93Cnnq8Ri2ugUXpBffzTGAb1jFQVLxP93shdVCaZJXaSPTxAihSqUdv9kj2VPP6uWbCmW61FMsp",
  "key25": "3VmBB3LnFau4tPN8tDLfNQBwTtRYFnvNY8ijwYxGhbsb89N6PFVPJjQTPJAWPraeSVRFwPH2jamduKLtTceYc7qF",
  "key26": "59Gw9EzVv3JcSKs7thivAuCDAJTP5tucazPCZXKYqsdxi5efFfjmt8TnMuQHCBym12Dt7SCKbJoaQEK1g8T7QNuD",
  "key27": "4WLy96dfUGrBm9sxSRHZMCpDVVWT8oZsWAhGoJNowqrxjWrGCpwUd7yHai9NsGWuQ72rjp2aK8ATCJhtyvM24aaj",
  "key28": "3gxk9X5VUPnENK8rhk8WggbozjJFM6RDAWRgZrWeAGsx3SqqjDtMjhpD82achjxH1DcyfRcvxsrkdttmZMBX6bjF",
  "key29": "3YeFRz4MHpvEPnP76yJxENreAvhUoyFsDJt5pX7szDG12VmQtf2pTnjyE5s888ueQUFFEQb4wqBPcMJXA67SKvAn"
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
