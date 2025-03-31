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
    "4qyEGd5fbEtYoTWqcHYY274kBcC4zkiezBXb26c3BJJSCMiKLVEUW8KFLo5kU4vrEdjixEeWWKHnaRvJowLYCD5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K36fnm5bFStRdnB6yBXV69wbQkHCTEhR519VSmF7jpQ1ifpAu6qsjwgySMnEDrJYy2rAwBRQYNNLTzzjrReAqrk",
  "key1": "45DJsgFhfwWQx6V5cKC8MSinum6cRYcLz9xSw18UFJUqoSkqKSwqrwUd8xo6ENnBkEdptxKj37e1qooTQhTeYvCG",
  "key2": "RzyTa2jnZaW46Z6Bhhy3UiaCa6myQVaM51im6HCgM6Wfe9FBqRyWwziLdQY1RPTEY4bCicw81BfjDFkY55uMxwJ",
  "key3": "3aWQ1yPgen85yKy8vMR5cngGvZJGG2xJC9cCGvUK4nqK9Ff4CDoNnmiLn5LjiiRsQtouYSJingAaCRuhfSAC9SZW",
  "key4": "CJDYFuN5tisE1AwPrn5qhqiZwbMeNo1ndwf1MGCypGb6smKcunxYnVufoP9u6fdMoTcPHqY2cb5xXzn2gXqsNuP",
  "key5": "2exM41hbnR8hkdYY3t4CKbU1JXDn9K3NbdhjgbEcjLsCvc5oJbgNNhVrUcJ32QWuQXPdTani1EK6gn4Vt86MbQWF",
  "key6": "35u35pgV24XSt7AfD1qMSSfi9cStsoPicjL8oxjNnGXYtUDMHdMbjJXCuoyRcYGLKZpviRRg17gdCNt2NHFbx7iB",
  "key7": "3rC6KU2ppfec46UsnoXrhypDgq6H2A1r8cBc5cu9UFcjHdXMo8JN4nNMinzaKqzjfSDPJi3Wg83WySGdLxZ2UUR1",
  "key8": "dqLWYagbBzb6gm9guY9FAfDozm3gg48H78gvP6B61KZ5ZdYC95jY2bvTXkLBtk7PpVXNWDSpSjtwa5LwuyUU64M",
  "key9": "32DYyvXmYmLHdkYbryJfDg3rSmyKd2j8SU6n65wU93fSiX4phbL2TeUNPYcDfNgRnHNovwurQg6gqSaQZpgpBpKG",
  "key10": "VS1JEgU9C65zEchbvMLpZ4THYUgVPv92duCY4JVSM3yzK8SSAVVLG3jdbLfXRzumWbTpNJJonemEZXGhZUDTKgN",
  "key11": "41kiu1JKUFkAYoisnmVnU4W9DAcXFAuPP8jCybMCrn89kavdeniwyh2nJKcYf9fUQmLU7KWbq4jDQgScmvBorm5L",
  "key12": "2NQZuPwZd8AqckdUcDpb7MPiKWdbC3XaAvH5L9UT6PxEihmMJkZQsDZ8KHp7Ee63E5yVD2NUPnCktzR5kbBJ5h5G",
  "key13": "2oPVPQWDmf3tpRo4XPFrPBm52CBtLJhq3QLvi2kaWUX7TMew2jF9hsgUfEcgThsCSCiNcXQhRtjdPJ1GLt1jXEFT",
  "key14": "tsDJbjZTbAUTDJAmDpEDNvtQEZZLBnRAp8Ktqw8mV9Zx7YFkfnTwimL7p215EJYkRFeFGdZyredBMaGVBJG2Lfk",
  "key15": "42pXfd5CpoJ3WR8QWeSZ4s7XKVCjQvExpXqDEsv2P31WtZyhHoe1PFX7TnChUhprMeeKvZ9iKcdVg3duAiWbyP9A",
  "key16": "yq1R9raBMAkSZtStrDTqmW4NJzWeZ3r64p4f8jzCsZto4sFRdi53fL6SnhFjFiSfWZTzKt1Ms2fDPsGo2P9RCNR",
  "key17": "4kcRDYDfei1MZWXdaQWhrZmG7o3HNWh8XH6GD7xRanTsoSKB4Ro9axxBm2F7jpUE55LGpZCQhMTt1PhHvk5YNuHq",
  "key18": "4G15xComwppwMNDJi5eBVsiHjFFBKG6q46WpDgb98y3XR9UgYWhhtHbvjA9M5p4XYGQiynASPrHUzsUb6pwN3pGL",
  "key19": "5htaJfUmZTKfjjqwLtXsrs3K6NbsvmFTSndmuPK2vweViLvVsEpmFavGGNiXr8XBpMgWGcMnb9ENgibEuTnHgmL2",
  "key20": "3FnQdg9YmHnVpTc2vak2CHb97qZZgpM8QASrMGY7Ev6GhREK1fo7kCtF4j3eeY7JeASL1TkTD7TJWDwzuo6nJNTG",
  "key21": "3mxNtjo9J1jcMta4wxbPGS1G9iVVmLUduDGAz5WAZpdfGerB4rGjBGjZWYwwRU84yf1tLH2PnHnahNFn4iaLJFRJ",
  "key22": "58hABu7zb3TnfmaWqHY6AzfD1Np7Bi4yDATxRkNrwPeBJGXA8pUbQsaUWXPMsZhmJvxyypRLKSUxT1hw88dJ1VNu",
  "key23": "3pUMs5mcWtaEcch2M9QJ8tBJNmtAyTVfdwNLd8GFwVWZLp5eMWEGA3StjfyWWBnLcS75nxSTHR4oiFAT6utZbpHG",
  "key24": "2CzXYvChJ7SG6UwpffkuULXWHPU4JKYiRF3vBvfB8GNtEutRwxxVLir2BM1HqDp6TdqwddEgRVcoC25xtGwpor8v",
  "key25": "4QnpMJFb1yAVFvrNH4YCJwxjCerF5TRG6KgDz3DNfFaCKsHH572g3MFhAGkvJLrtcK9j5XVgL4kQQj3bz5GRYWmU",
  "key26": "MihrfVw4STdqHqX1YY7vRgYBAeeffLTuaWhMLCgkW7h4qYLUe7rx89KZ1H1hL66NTxnT55d8F2BVCempSkzT8Gp",
  "key27": "4siCWrTpbe1hwZsqPA73QFc5MeUenFWQW1P87ShGn39A8NbuiQx7y52wHNyxKkgqnktBiBp3rnZtfeXuTm2Ydvse",
  "key28": "4a6qRxDSFXZaHXeQYXYyJhSMf7T3gEuKxCxVFeALKtBGmobKVKnMQVjw9SFzSAciM1Cf9PfFjJUsJisfo3pkMSSf",
  "key29": "5Xu9Rd85araMKPKRYf9kuXu28pATgjeZKSoKBeUtwdpKemKYwkMoZgTwPJkobr3Br478eUXFoUHwXwqk7WY9rsfh",
  "key30": "gmHXYox4DWXRRrtYpto8u18no2Kbwm1KXaiWUQwaGJLmTiMFigm3bcbc3CbqZcDFLFHFU5ibj3Czq9cJLSxnT5W",
  "key31": "5BWAitQyw71GrHBnAHTWHEQqmAa3yTUeJaCjAotSGuE619cVk8KEL5EtzLWKyVThcjSvdptTqiRcTtrSabQGp7o1",
  "key32": "4idLPvgAn6H7turbeLZhbingU7VY2WadRvPjzMoxMjDKHnQ7ayTYRFXfq3guNkTujkSU9DennJwpNrweAYaS1ECx",
  "key33": "2Q8bCDDZ3jtubc6yGPr4V3nyQHmdrUFPHRBUb8GnjyEE6mLScDeyVufZjJAR6hP6Y42PJZoohiV6cRBPKvzpTRMN",
  "key34": "65SFcww6m4zfKoCdzv4nsAkShc1binzn8vnhFpq21eaXy5Zj6VSgDPZSGLxH9BERyM5LSP3RkhYa7vKzLtBWc12q",
  "key35": "4EpcHRWsN9SiRuEyS2maputMGiFj3mwnzNCMVBKNmUSUv3dmbkFvyjfYFX7xuaEjS1QYBBBUVBv9YCjBmCTpEHUj",
  "key36": "vTwyiX5G8nEWWwvZ1pLktLP9tyqQXxSmHJWRsC83khxiCMuNLxoYkLPyQ8yRdUXncgX9dMT7UMkuer6A5bZD8n7",
  "key37": "4VHXHQ5RUDnjKaP8iNsnqosFTPpvahM4VJxVkgP4FfgdZLz2KU7rsM16hLXMDwsfJYW2fxumqe4eNXcdXgsR4oxC",
  "key38": "3LHmciadNaUjwmzfZvGcCzeisGQn1w2mgesPepA7D7U5vQJgbsLfA7Hfn7tSWouA2uVcaZX9DWMvz2F4ZAana7Ek",
  "key39": "2ek3ibcqY4GfgkYwXDMERSRNB9WC9ZPsppad4bBjuAZmYsyfPJAdsP2cuB27fMAtG1m62cK3G8gubKxjZyfL3sLH",
  "key40": "2XnHbvMS1PBFM5fCpkNJdFWHqBt9a6CSBgnLuC6bt4zcENPWiSkGwTEuCtqK11UCEBA86nLmT3CBNSHSyG6HNMWX",
  "key41": "5g9jw5JAQUFFDwa1eT5PiBDrHWJEYrBfFwfRKKhBgZkLkCuEGfhhTLFfGYFNGoWxArxewJMeMa5RL6b5FFFrTJje",
  "key42": "cQvH1TNPwPBMebP7oJ1eAJJMX8RdxZ21JZRSf4QQh2mRTUPaza32jhNufcx47Av6LXABiGpWpQvw22sxMS9Nr9T",
  "key43": "2cCMq7vA7aK6dyo1QTnwRt56ivzBU6ru1xvoWDNNqNWB6ZgnVydfK7Ni4a6NUy9rnXeRw36DWw82rsu3JCnE4fC8"
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
