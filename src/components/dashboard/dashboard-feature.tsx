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
    "2bvy2G5Wbt6enpEnYpWNSmqXxqZeauDwsWhQRJmCssB5r4APZbhYmtdGWr6fF3gS2Z4y4c8LaaDMhhpkAkz5Cjpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ca4gEpKjsNZ3WQkF7HqtR1V3N5s5JeqG1MTj4cWhKUA8vE8vLtHVbHkbQLK49moJRgYjWhJPdJxriQXod3KvtjP",
  "key1": "58yRDZBPuiu62staaUd3auh6gy13wuBjiU7q6W4N4SrzaLurDKFd38Bd76crbEWwSxEeja9btbnbLf2NMTtXqVtr",
  "key2": "3gxNzvBxVHJ2qp6bjgY5urXEirEr14dhmMWmbdny9CnkWKkgutc1KfYYEUmymbA258KXRXXPZ1iwj2Y5c4hAod7J",
  "key3": "2mYVro8cZX2feZRyTrEkmZrVVKr3SecEgYCheyhQvdMNmLipYWcimvPDrxevDQyz1MWuGaJxQ6Ce8nbT2yzGRQqm",
  "key4": "XJmCv2duGifetS2uT1meUBy7dDvAiPjDphh51jyT4K4LpmSkfXS4XUUn691H2rM2cSLM4Pb8KiqUH5sZQosvdxu",
  "key5": "4tjnsCAFNRWLHcozajsUqpFnJzFnbq21RMWtVmpPtD7Max3rnGGfWgiQosBhqquQatDvj2PyajJRopKAjVrkjW6Y",
  "key6": "RW8kExS6baqy7XZePVNNJDJ6viRXQmKjCbrdhBfeWiKCFzh4EKigMRdQieKLVECg12M8wkBJE3gKaSi45cVSm8q",
  "key7": "2XRfERjW4W8orAnvGQkKkXvKBBkor7GTdUe8mYyehKaAymDjZi9VQ8UbNhSGiMcmt5EzQTKzZixJmfzEQzSmZW8F",
  "key8": "45ThHHKYnzVWpKcB6rQxUxUEgx4bGY3cM35fWLyiMQVDHMJWT6hqb9KaSueET4xE8cUaCnmBHakR8s2BUX647w7R",
  "key9": "A9vJBsdJEhUY9FfSowMZ1EF8fhB8MEhfEg5qfdc8vTegiTY21a8ESnBFY3WK7YaN7HQ5SrhCo5WBB22yrJz2wtn",
  "key10": "JczyXjyBvZBREtWkYQwinz2nS4dFTRHLAv2HAkuRrzzkSSWUCCPNRMqNxUyznu82KbTG1Ck51D6npjaU5t4KPJa",
  "key11": "4AduM6pqXnbUMUe4YFt9CqfYFFbk8z4okqDTxTr3pqdWBqQ3MuzKV3hRinMZiDuYQ7uhyX6RMbUsxcpDNZfCjCpC",
  "key12": "5d7g5bBozyQorCbonNSwnREms8PNc5ae47FxYP2F6rMtSPQBYz62P9nU9VdCCcfQDPAAFL5AMmf8PAPhMuzq9cCz",
  "key13": "61B4GKM2391biNefbt7qcJhMt7UCxYjbLKyKTob155SoUL8TpCerGNXbLY6ogKqm8dDbGsW2dxffL8yiBFHk9pbW",
  "key14": "2qfWP6w2dv1Sia4c1WvTmKxhdRUt1BtXvrKWRdYKtS9Q5b3ZCiTxWyKBepi7f2soZBHUnc9KLNi4dUaoTYnNYyJc",
  "key15": "2rBP5hfJxpCmnwsWAfFcBQk7jrC7PC3gS1irsgDuUXcUmgs9QfiXm8G99Soq7PKr8TSvdznZUE2EW4txacaKV6fb",
  "key16": "h5fFstDJr2Psm2gca45UWtXNFmbv85thYxm2c2KcwxReYdw1oowH9QzBrpemGe2R3QreqPSd8af8jKgRcEJdtyi",
  "key17": "4qPRaygKoB3eFH1auEzLD4RdgqnEhArdDjSz5FgvDWP9LbytjeNM8Db4myEBVXFvD2HN6yiCYGnLQup47VBqZHW7",
  "key18": "5fFdQ8mbRNMT9pdMh5zx4DAS3p4qPVhifvMuyVFeccd1S5UBfhM5t44hcie7Te8BTUtuC9bNZvsVHomSBPRdcrDJ",
  "key19": "5U3s81PayHuteVxKKnsqEDhLBn6WC2J6aTJX5CwRBAJAvNqxp4H2BQvJt2ERe6mGxoNMAMLqNt6xY21jXoY8MGGk",
  "key20": "oE7gqz3THiVaX6vzRkvtbMYWFTyNvyHiPFyKHEATzv4rCfPo1NXBf8WHpW8XXY8duNsPViJGbVnYoeS5RhZAabz",
  "key21": "3PPaecLospMmtN7jPJd3XqgV5gZBfA71yRJJkmiDPRVhyU7D1swcNaN5fLZpYqFkHuq9PXckne4CsmRrgoXTNVRi",
  "key22": "5brXW94CvKHubEZvxGzms2CFUT4MPrZq5S6TANLwyqqvH3VJTy1dmAod6mWnuXTEkCkWNmMDbiK5PVP64fyGq2WX",
  "key23": "58JqyGMCkMNRjJ5gF5ssz1LBU6UBNbHfsRNhBXmEWqSXV6nrFLZksCX1uJLyAe6nB6Y5UnkWC6NQHiqbsMFDoKoh",
  "key24": "5LF8VkbxUqYjUrhHcfmC969TbPcNt4Uw8Rx2mHjYWZZZsRvuqQwqh9oBisWFRnc4spc9kZtgjvhkuuiZiF6AJmtd",
  "key25": "4G9EUEEHZyBmgg2CmAGiLbALEqbX84rDScQ5e9iYBguobPdRaE3yyMAnB8KwbAMbgGFE3gjiuneXztwnugci7n5a",
  "key26": "3kf4EMeUvRTKsoW7pZwR22baeeY6a8EpgQQbeVbYtmcp5hPpMaLPN5dzPWDwvcXv3ZQ7U8W7pgx2UVmQ2kv3nCwW",
  "key27": "2PK6byZkuvieKr3qpvDgySSnWFgTtwK6GCVVev9GSjMqRkxk8h79DUYvp5AWBg6tsKJxNrG4n7EXT1Pe3cUw2Ho7",
  "key28": "mWq58yqoqD8envVEYTUpZt1TjBTAhSM7Sd6L5MkxVPNESt4msRazDUQKRcc19Rgr8dNwuac64gXgR2rMCDSUtdG",
  "key29": "3vVVGz2Mz42vdQJDsDkFcuYUyRjpnv7Pge5zA3BpBoutAWY6umRadhvAsf1Rz2u2F6XvbAC7Lq8cLJ2xUpKKE2Bw",
  "key30": "2cmPNBvngnLNm1ttvWC7ui5CsjuYHMrq79p3zNQxBPWt6VKfbkMc1zu5bm8yKxAp3x7BQetFQxaP22suMQnJannz",
  "key31": "4b9gmjRQiyuDNasQXFYRwmjbXDUM2MtjbfeRhAXB5VFhKkETjD1fJibLyZCKGdU16ciFpTXTzv9N82KK8K37ttHv",
  "key32": "5D8WzreqC3e36oyA1kSzvjPuLywZk942s3jTEoVF59aP9jW8xYA51CmPbQcd8erw8zftkh75Bp8UWYLUyv63pW46",
  "key33": "5jxWxBWeQrU394EJz3sPiYmNGPSAAkcTHMu5EqYe7Squid4iKcD9hD33eGaqu1ZHTf4o8cDBxCuJan9YHDkNc5e",
  "key34": "X3jY8RBG2M2HR7Bjiai4itTf4mMVXoeSuuaV1242g7J5uR84WsxYrj8GNxPTbtwrU95t3rjc3uQY3zNXbnZcPtA",
  "key35": "5jwY9dsb5jLSsEygXPU8vs1XEDgV14XvgYpK2SRfjmH73HVvQh4qi1YNKhMevrGSkjzxhtEDz3RLc8RhVquV71QY"
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
