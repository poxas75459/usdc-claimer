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
    "2SbaxFhCyWRHU2JfEPyQ3xeTwZis9G1UqYnGt5iwZ4Bi8SUi4QqBRnJxWwApejhNiUXLdmVwnL6ZSqtFs8WLLXfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hMDS7hJCSN8sawAreYDD7icb7HcXgCusp9cfcA9RqUGib3ktEGoawbLf4cJS2QaJwpCcUbJ1DNco7AUc8Ntph2g",
  "key1": "3vbfL7bQE3U3AymYwmQqsmMp3FohZK8PmHVg7TPJJmgrbJcq3eR7FZjvUVkUXAK3hnewNEh2mmsAdky4459rGCAf",
  "key2": "4Ns5mXKw4ab8z2Drg5UoDto3AAtHu5oxfkrenFBUtkAmy4XHSWL8FmTAC9UgeWdvotdNLe8t2268NBBEvG4Mmiag",
  "key3": "2y1dijuWbt7Q3zJtNq1ReFKp2b4NP366DCvDH53tzjkqB7e8GMivFNeesAYLMNBmCeuay88xAHqAwZY2GXyMzbUe",
  "key4": "5Z54h9wQRTdjrcFuAtUbDr2ecJKtSvLwpFURu56NWCFm3mfyrFiEqQEp51YgwRLyCG1xrTY4CATcqVLY2qrSs3qi",
  "key5": "2wButDkF64ERSqrPgjfcLQPgABLAd6iz86rRbGtpisTi4nDT9hQJuuZoBTrGt4nr57MFQcyz1X3uDum3oUVit8uw",
  "key6": "rnJno6Xt5jXyVZTcLdZNbFKxmWT7Y2hvBdEbamoSFkoqTTLnMuQUM4tx6DroBB5wnVRUDyttgrS9Br7YcvPzw9R",
  "key7": "2GweTz5xYY3ykeKwYasjzwbG6MNkt5DzhXuKxiQ14ji7t3tzhmvrA38EdWsJCfR2Q1zjR4p3mdNzdohZFdWTu1uM",
  "key8": "5M1PnRu1CbNsoQoGNfNPVa4XTvcSi2WCnZiXJxKDed21CqrssvhtbPkjPDUjuDKUJp8LNVCtsL6eYFJHtxjVPQgE",
  "key9": "4Lnc1ppa6ZqQQ4LxB6ccWWx84L5XXEBYza1g9t2CEkhcLoaxgN5WvU1uc79dF9YrtfVuMmRrRoKPWBTGMUmp73K2",
  "key10": "5LFBUYvUonDJBd2v5LmedjrKSXx14DHW6y82UbmSRqYSfmndxCBkHMWLm5h2yU5HEavPhawDT7oTfa8VDKzy4h15",
  "key11": "2D3YNyEFTXB69M1f2ZR3Yeb3YU1xGuhxejY6vi6q6f829CJ3Ysy71XanbJS398c4QV9yQGTg8QVnGkU8r9TNq2mx",
  "key12": "3GKyqrpGqJK6cJnApGKWdHhwoPM5RELnimCvbo91pDvynmQtYSypijdvyB3DzHEM5VTMpJZuGunftnNDX8ED7kme",
  "key13": "65koWxq14yn5Mb2z4pqXMQNefpm53pTqAQcqmpHcAjP1BwHjMM1DLxbZgLd2xuuMucCZbAB49CkeqzgjkibVR2iA",
  "key14": "2TxpneZ73TUzQSWsh23yrag9rcG1S9HqwRdBXnNTzbYw7vKjSujJncHwCiLJHJ1qf62VUyLRXQKHFjwbaxtmj4S1",
  "key15": "4X6RvSkmhecThjDitYmXae1oqiMoR2PKGPHBuLBbe1KySgawQHYqQatPdTCKCDt8ZTRLq985eaR5hTzcjXkdeTfi",
  "key16": "3xyQXfwiKSD1UALAQH7oshNTqDyYbBEHESDU1ymd8ZDWQyeSa36QvvHmFzSFZ2yRfT6qCRhxb6Qb8ZDYA9HjSbwH",
  "key17": "618j1SpFuKbXDrxQWLGH1B5ZWqKfx2CkvgCGyFqG3H81yyzFPAPD3jtsfAQ1tLrbdvycrvPcciNj2JWsiHJSYXxJ",
  "key18": "2wiM5MZ6Hg8EkERPztbzStkfenSzEp76Ew76MTUumNT2PmXFuPy4dzZ3q1UL8pdfMuKYFiBbqZFU7aayoxvoZXVK",
  "key19": "3CBxM2kLNCTaxqX3U2UUSddXBhadsJN2B7BmEMqc35CLFeMoV9TSZSiK1pnSydVurp1uizjVuU98Xi3qZ6qJJKDJ",
  "key20": "2RXHGzxvDHWi8iTegxutRANe2bhBkdUjyq6mu4v9encxy8E3MHXFkxkCWeT97ke3rLdoeXwMoeTKhWYHggPxXyBG",
  "key21": "5j5CeCD8s4zDMKVLYoaGuCcWZxDdE4big5BTfnRzYy12mQzgZSo5s3pxFpYtpmPrYPVx9fZVrEXfKuCyFQqMDzY3",
  "key22": "63Fa2U9yeSxPi24PaHZWSpMnBVBYvda8SwFEZmenDYA5dmDDJTYqPJBy6jg2vbk2rpXGidJnQpZVX5wyziXKuNu8",
  "key23": "3LdVquzSk4ZBfjHwEBYxGu2d2WxTsgyZoDMq76QZEAX6zRkkajDCWsLoCh13tdsLKMc5xFoSJxixbaXkq58YezBo",
  "key24": "8zhKXeZ1x1r5sGZvMvRCZviGVZwbUexEwRdRuowTz4rStN9Mp1UKHYgC46HJyG5LRwhBGPxJJ3PoA6Reoeq7DwN",
  "key25": "2cARLatVQYft19rN3n5USpDwuBHssvS82okvE8LcMmat5o3oNpkih61NK7wbMiU7yq1cGncyxiSrutu4GnvmP2E2",
  "key26": "2m2BRde1CAGqjg2craC1YVQKxVy46dkHmrYKLqyCNA9fErJow36VCheg9GxJDerSVTBtWB4uM86Ve2qJdgCZjpFX",
  "key27": "QHec8NqKqJG1Vo59GjEjyH2RD8BKtCKuRC2n4mnHZ2aYEi45CbBE6z2Fzt1dHaQmDM9zGW7NSCuNjghCcP74mpD",
  "key28": "5PR4bvok5K2jNyW1KxToNRcjyMvc6epSGdAqM9Dhejw6HUDbTnW2AVLPaYVoPC4qtQij3gxuCnv33MfGyDGDZqEh",
  "key29": "3iKtk14XX4D7VGJbChVSeEkKphEbxqBuvJCVXzGzrxK5pfZojCMnn7fV9v3wVJR7fQjJC6yN6uiHonemzU3Aasvi",
  "key30": "27QgYBEtapsSXaxGnrgV6A6ApYodvSL8e8B1M9pgdDZR2sp5tna5uve3JVxNthDoSBudsfA6VfYjwxiFQcTE1rLB"
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
