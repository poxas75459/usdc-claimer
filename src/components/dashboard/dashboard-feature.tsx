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
    "4Gxc8NfDCdYbGPqTy8FKVDZLwMLiPQ2u91tPDwT1qSDgqANrqaj3p6tSM3B4VPJ3CSMUMbVdApbYd6PHwESrK5sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uCFcYF3izPZyyqQgYb4UKu1PCubv6hcpgLtS6eLrq1RUDZS8LUVZXwpxhYQ1jiaQP3tFVhwiAXbaSDE5fg93ekr",
  "key1": "4EjNJZwGTRoy1MumaNS7CMvroQH6TWYG2JJvymGn2BPm9DfNDqFEHXJHHgoxaGYfbG5SbJ29EkFHN5E9E54XbEYY",
  "key2": "eBsiTkEy2Y8Ku9D7Q6oHMSiaTNbmR6nTGkFCMPQcbUSQ7Wraipx1YsimSwCmsEiUyukcs2WqpwrCUto7Ao4HupJ",
  "key3": "21yNqjqfxHRzu2h5cd8g1p7LChkHCEnUwk2DPQLJyUveG1qd843ohFiKUCK2xzDPam28bh22tBsFFy76Y9zkDfNG",
  "key4": "2KpZTXNdWXcAoizHU2ozVJWpbSABMGyn6UXNDiW6DEpU1yUmK7qvSCFX4c5E1smHKvu6WEMNpTDq4GYzEfGoegrd",
  "key5": "4CE63sncxpBsLV1dqNkajcFnhGGmVt7AejmF7yaVXQBRZeqtbo2eHkbWtoGX4she4YErQzyvPbAdcAD2KdgEHBAp",
  "key6": "5CNbiqMDSkXxWJGuNfn6uRhj2CTBDZ2sZAs1timpmMGuEcAxhS3eHW975waqCRd4sofw6wzkWiwb2FADMmHhLrMy",
  "key7": "39jiWetFUhoRguAa59DTAsEZsWyZnoKC9qS55NAKhwmhxsMkiDfGj535rpfwR7CBrTuK4TsiDeCRwsoNB2HPsgZu",
  "key8": "cp59EUirh5SpFv52fwcgFgBL8wRPRU4iNMeEYind21ks9YQkDRKwMtkzyP8D3C3XmNgyWiGzdzwcR2Lf1Cs6kLe",
  "key9": "54vRGkaTJsAeUymTUE9jxQuZ7AbZeJcBo3itF7qLCUsurNy2KfydgTWKqzRQnCpN2oznGdX7BqbRpocjs5UxgJ4J",
  "key10": "2GUwwu64MjK36qQAmPxsCxgjJv5av2Z22sBvGGdT6v4W2TTx1uuGHwAV6cUiQGWpW2RQridtTWJCXgPNTSA9xBWh",
  "key11": "e3icXZwvi8Z3GgBvQmWmvKU5JU3BCYCNZxaMpfG4eK4LzmGw5tnqqB9iRrjkfNPdXnCx8Rk7jXYF2KzV9ZRxvgx",
  "key12": "2yee8vg2WxqHgs4AN2QP2CjHFRWdsL638ZbQ3ndBD4dpcj9d1K2qrBG9iSnpy6QybF7B3czFsZkf5S8HvhVDixJv",
  "key13": "2aBFzQ1ppeExS8yfBcCWYdHGPmy3AjGpUbQTMCHKNE2envhrrcaZK47pKbwAMvuCr2E3znfMGc3WRRKicfkvme2v",
  "key14": "4Jw56iUMVnR4gtpYQE4chzsPmtrLkoE59GdhJRhQ6aHwwfpVcKZoHkDZWY4VmZ6K92w9274Y55wwLr9htJ91aerT",
  "key15": "5TvDeTz5cEyG4DdgyQ9Tt3vAm2V9hgAfa2CS9FXJmMA8XAiQBhvhsMyoWvNkr862L9YhScJQWzf1urCLbNnzpoVx",
  "key16": "3RoJ6CVmb7NXNwe25JUFAjbHPum7qv97ZbKsAvgWBR4vTjKUmJjed9SUnRi29PGGui7pgLRBV9deMRbxkcfL1ogs",
  "key17": "3xjqKhmJS8xQEGU1kgwJHZpBxkHXKygFp27c5MbFb7FLQaoLu48GCzBN5GeSN2vaEuUNYFtUaDqY99WfZcvu4aJh",
  "key18": "3vtEBrxq2u8SxVvFM46K74Dm87bUDLA2z7B7FJKkppf7BGsobpdg4Uf5N8MZCtv1dthUKZap4LGCxvw1zJddYCnE",
  "key19": "dLuVUbtrYx1EVJMegCgH5kd156SsAHFuNt1UbWJSQxaLPFQuHhRh1pSkzCQZtNVqcLRyD3Vra2AtGapcM8ydSPu",
  "key20": "Yry25ET58gBcT1my8YHkEBhcdji6XtTbgt9YTwtEFLaYvTai8zXBqXvWPG6tqk5zfmnxhP9s1yGirzYELyVjKbV",
  "key21": "mc9kemqkY6SqHVYLUQuV12AAMgNV7ywbSDWcmctUnHotDET5tLvKTLs1XPZJAmK6b8SsgxpUvHwsZV83vb3SwJZ",
  "key22": "3p6S8Bb6Ej8N5ZTe8LtzMxsuU82ChJrUv6WznECSmrWkSM7w74Rs5cfnwVCNhPZbkRAQkWiVfVfyYuQJDzw78EKd",
  "key23": "XX4FYYnrZF3CXUJVrGjx8k7b2GD9H8mniMgJCbr29XMAWFSF9Gw98LcmwCYsgcToXmvwiAm6DFEHCnuZjRo3CuT",
  "key24": "28r9JKfmjv22Nn34H5KcQN7wFZGWpwKeQLCyaWQfzqFd4hTEQivV5EuzrShGwqWRDyvWB2oZ9Ww1gCgFfM24kXoh",
  "key25": "5BACGiCH1q5bBGG9Eqm34nj7GrnbDSBVHT2Z2WSDjgC3yfHDC9aCa93xbWnvYc1NT8vsBYcfZJLFVAAa3hFyaqrH",
  "key26": "5WBnbapNb7kQY3DTNLi6sqi3tYRtsVH4kvCSemwn9CcjeKbddWY9ySjfwDPC4vVGeRVp8wMbHYjp7CPvi6mBm58E",
  "key27": "xduXprEmzJkQEHEQQkMQA3wd4gXGGUGJf81pjKVtJwrT3fhEw4qhmw4jajdK3JnovW2WUP3tPXKCtPi6Wg6HDzB",
  "key28": "553CDKYotR1Pwu4iCJyQ9mAgRWUmJ2j28NkhPcCoeMgrKYBRG1YMYXTbQzU7Xhre9TwevPU2h27SyeiFRnfucuq4",
  "key29": "3MRnfuVzFWgVVmLENQFqA3c8CabUjxaE6i5kTTNhXTT2GBZSSzkP8unGLh157yDxQF4jbVdgEJSrdv1qezwo65HT",
  "key30": "4P3uiRLZTYgAd6Cwpg6tcxZV6SYjkKckgpN1if5h6cY3BgX2h32aP2MrE7oz1TXAHXCeb7ZaKvSqpqrdEc4xYaR1",
  "key31": "4HnW1jPQCUMktED23XK9gyTUKtgfdmh6B1swDa6NFHBLN4WRCmPWgsUQGayTa7g3EKopjrgdRNWwXi1YGAzRRfit",
  "key32": "5d5tbThQMfHe3p4kBdSNBuEFhLQH66bKhkkofVmamYRhkaMEDtdPkf6CXXSQANHmNS9CZR2JRbXFkPJSbkCdtEtD"
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
