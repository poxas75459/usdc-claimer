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
    "NvdEKFY4NQLMRQ5TjKgHbie3i58DQCkP9PoRE5YzJAvBPM9vPHkG3bUUvij2xqSwL4CsbiiLBtLiSvUejCrd8LF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHBCEDfLieYs3YDssjvQZ1LbaUZXTcgqkghiauKcduJMR5Y76rm9BpEVoS3HohSzWveg2FShgmQ25yd78ZcpQom",
  "key1": "2nzhDEUJE9nnh6737zb2ahCUukyEPWQ4AhTFTVWXBpyDHXcDVAts6fYsuh5uKyZ4Hcz2JwrPWJQAm5rRdQQnWg2S",
  "key2": "232Y9uJUeKJWG1yodGBkShC1C7RuepVnvEgmS1WX3DZDL7yYUjWSg2n93ZWEVMwmant8ijFXunXGCzEd5sShjSkE",
  "key3": "4uUv59JpoWpunb4oWU8jnnwceVZKp2QoWNQ77joat1e85j8eur8fEAxuYUiPQc1gF6V8XmP4WTfgCfUjdVUiMwV5",
  "key4": "4zrii2jmPRRLmLgmeTTrG7GKFqKGDz9HQeGK7ohMnkJbiqaKfmS4m8KhFZ5eKAXZmxe3GwMq6D2WM8vZ8TqydinH",
  "key5": "4B5qrsb9khUwHGbyHU7cuSdUQfhm3eht1eqQp41V1nHdMjU7HahqmqcrJinky78Ub7CLCN6ATvJmtb6aPgokH6iD",
  "key6": "23Sz4SMg9VWn2d7Daj3LRvqzDh7seByCAAwyw6BeRz3DnxroC6o86y9gFmM98JG6523E4tDbAGzb2hoFVGd9Zgid",
  "key7": "5LygnaePbt6ZXBSBLb9AG8f7v5HJqZEWtN6rRw3wh6JLc3pJhFNrm5F5jDQMJhueVj79cNG2P3qY4Zg2EEYACdWu",
  "key8": "61FmumSipNR3PYr1sxp3x5WTU3vZHjkXGQs9hQHpmGkZHfopse6464BxUvExJXE7Qck1dyU9BWXuC4Ydkh5Mry2k",
  "key9": "48TBpvEiaJbmjNRzeVLp94eeTPXJT4oN7VTSA1xLDhn9JyT1feydQ3nwVrkyMjVpZZc95bHZQE2NNzN73AQJTdW4",
  "key10": "5BkvehMu5PHm4CYiE4Zqw7r9QuxTxs72L8oUQXkcnWiP6N5k4ZJWmzUc94jo5ZitiEdPZPCFbZJNtSbP1mRZWNnz",
  "key11": "2r38hFEaomtVKqdRMyp7RK5DpF2AJpmee9jzGs38QrVXHALBM77dpGmGjb7Fwq1CKmhnDNFDZmMcpf1XQLsd4PAz",
  "key12": "3H7xZ3UK2Y8H6QoFge4JdJMUdyfE6GUN5e3qp6pHtkh3yWRDdUC4tofRkJECKzFnRDkCYBZFTX3CcwMUvdZ83NAH",
  "key13": "3PvL1MjFE8WoShhqtu9x1Renn17rgkGL3BxNdKd3yT5bUaPEvJxPPRNqLFwUKrAfYJWCfHnAr1oLBuL3yjEMpPDv",
  "key14": "41u5C9wKWRdS2Vmhz1JSZt3xuzpY2PsTGS8TG3N4MdnLRfK8C8XcpPju3tGhT42meZU132rTMWkSrrujEtjcqihf",
  "key15": "4C1t72vFVBL6g7M9ME2544YMBdXweJ47k9Z4BmS9DAfMLzr3vEQjgfDuTb8jdVd3HZMM8SeKU9ughNZHbYd1x33K",
  "key16": "4HzwPWNMof3bEAC62NmpP3mBrowizr372m26Df1TL5TPiBFcbgRjGWS6x7VWSNqNKywg9bm1f7zE3BwTT4SqRWnL",
  "key17": "3PXru83tg55mtUVtZ4NQpYfgD3u8kj9HjdhBCUhyhFgkNEb64XEk42jVqYDBekmsAUxZq5gXgwvFu1mwYJim2gaN",
  "key18": "4i4Y9V4gJAyVbk3XunWxkqyb2BFQJL8CntCM7mfTqm1KjBtkXnDiKfryFHzPzoTpwto4WkESbLhuLPpbyvsM4Qwt",
  "key19": "663jJBt8qrTyCjxqBACnHmF6buJw61xrPGFGZbn2izntUo6s3cLQtwZ17Ad2ABJz7QAkAgurQTaUNY7KqW8jhgzC",
  "key20": "5Cr5uKjhWNchZYQpbCrPugJYcUUJf6icpbJxCxNwtEdTK31zfq4XtEd1JVYjQfeKHnHKfCLyoLVNz4ZYqDXKA9xA",
  "key21": "G3znufACZ7wa1efK5KatUjaY7NsnZkjAAAfLjEQkZWiFBZRfmYRf1te7BBmo31CNUAYqRXi61QBz4uN3bMhsiEw",
  "key22": "7jnQbPNPQvA8CVczmKTqNFvh6GdnHhEhXoP3JX6wf59n3WFWQRRGSLComtXB5PXNPuPoSs8i3QUnhciLobdyXbE",
  "key23": "4S3wtw77BPdHX8suVLxRRUFPMCBpiPbc1sXdEokPpiaoFMNnWQDn6RxVDQUngQADMNyCLguj7YxntDsfF2DmD4mH",
  "key24": "4nPWbDgc6T4tJzkkijBTgEbjssVJqJxWQwqWczDs7LRHJeu7ymcUFdhJnLhhmdfG5USxKqNMy31xS43PWVNyLBuC",
  "key25": "5cjkvRm9Trv9TjXYpxdHDR3U1dVRTgrMp3jGdmH6SduBH1jdksjtp3CgRAZvEwrk131HR4KwpqPg4AEnT8bnJeMm",
  "key26": "3dJnmbxaxMN6mnrA6y3NXv3FctryRpkz3mCKnFPkMZWiSW7apUdGB4gj89oPvj5i4RiZjyCR7DtoJjsNCTMj4jko",
  "key27": "ogeDw1bp5i92EqxainJvPdmDCuRZDx843nvZdPDSuq1GThPcPKej1vvcAwVogeVJUzqyVsTi3F6cdkMmuRdi9g7",
  "key28": "4xYbpcfHuK5BYYFwTfHiJAqqfdTD9hsdkDxjDoxEHMMW9DdLCHHFf68WDEQ5ZWhozsrhfkh3ayS9AWU3MUeSvM9G",
  "key29": "NJKBZXdEQkLTafdVH2SAKXDRgb1sEmgjSt2YB2KwfoJnMRfmTHrEDfgdDM5qTbNePqUfUWWMc7UXtwezmC1enMe",
  "key30": "4RHpDe6ZXkPJJq3hagx4USkdLAs2ntobjnhPZDQHTqLubdw26iFwDYdwTfrbHBrbDCFb3E2prGr31mc6CvVJfwEi",
  "key31": "5kfz98DttS5chtgYzmoYq677Ed3HHKNLZQN66Jzs8E1V5H5LNLXyNA1KzPu9ASufEY4RzgRMGpVRrSF9HhdBfTWQ",
  "key32": "2Fr3Mj4Z2WSFFeVfePHcQPLafADFJPU5dCFsZEWbY667KYGEBwQeEqixPsaCEqMrnBKTy6DVRuhZLXiwjJqwNH9",
  "key33": "2ct6Aq9XW6hjvitkN5ZtsW6cQx4W3vRQzqdvk6sU8jxNza1fVCmLtEqAyHawukanVhZMUvbcj7SsMcQEPHyvWaqY",
  "key34": "2Z8bEKfJV4LQuoJk5snUUoW3Q4zW6r1vPjFo2iCQtsEa1bdRx1XfXVvHARPFVAYcsgrqvQiZRLYL2zAeWR6gmLL1",
  "key35": "tzUayjRLUnUeF2Jnsm7enRgg3ZFkKeSjV9dDT4BXsuM7WxcPBWShW36uUbFe3A3bhek3oUuDJo563GB7SM4wpPr"
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
