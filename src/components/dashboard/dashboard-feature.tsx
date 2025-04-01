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
    "32yKXtFRn1bR9dGj2CmNSJbBFLGeSqMwgSXN2cCkENv2kPN7j674gU3So8dqZdSz4LL6ncYUUJjuNfUu6n9Lb566"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mN7zwDVBoyJSM19dTkhrd3ZDbDyHKKkwDuEyJ2p6wfsngtzQmu4ByHCiaLRCLPReG1vN7Ca4VQGPpPDY8Kwnsdf",
  "key1": "2uEM4E26X8raTbz4XsriV2RwJX5p2QtmGFkzzJ5W1seaAbxVQ9jqki34JKdrPfAsRcXw6MudAoop84J1pRqrZSP2",
  "key2": "2Wk29dbtXUscKru4NNAANTyZ643Tn4QFgGdwCsGteB9swj73ntFD4EwPrDeyr8RWNyWGNrJ1tbFKJFUjkMiimJdF",
  "key3": "A9nomJKTDbSSAdHN3MYqLaGtJ2mWmWtK6R9RtPmdf1am3Bsyn54CGG1AasP5XTeZeQZ6jpvtP7qXKaxb4S2cv4J",
  "key4": "5LwjJgUQSYx7oCgUxrJCWcxdmw9aiP6LuYYf9m4zVzedm9q6EbTypTSNHS9nzwsCcfUn76DEcMbFkmv5j48rE2rQ",
  "key5": "2UEX8b1kjsU4eY3S8q5anoEAtpP8NABab6JM56XXwurc2DWi8RCSShGzzk53Tjgpfs8QWjREH65NeppgzomvqH4m",
  "key6": "25ffh5pzDSceH2eUTqsaoj1ewg3FtXZDe3oG48DeBbLAnQAQ24G5sqbu99mSpfcLXsNw1DGTFMzLnbi3irfetYxC",
  "key7": "4Uw7X6vfxLnuTEwruB7vdnVkRHHFS4tZcDr4HbaSL3XUvizCEwM4S7S2dExiFZTpUBeNMDSTfYPSPbRoTsFZJnPN",
  "key8": "2dXNWJ5g5ATTiRAA56Nen9GonUqkeyjEGjDdwRD5dvBF96MXooMajPUncTUvQntDp6B5EqL7A28z8GyVqwjjZ1Zm",
  "key9": "49sG3vh2vzUbPdk3LBJM3MgwTN49kqjPfL8p2uC7d5vQPwPwNWBhtFwkR5Laygwd8ZcDe7bd2NGuaU4AiWm5romQ",
  "key10": "2chPZeB4cN7WonxnqUCsFGivgbWYJHr36VEoxWk8t58TDbqhbzjbmEnsgYqskxu7eMmbeQxrwcQH3hMFhjZu3Wzx",
  "key11": "5ZSUd26YVRHRvq43cf6qekoRGuE3WNzyZ6hdCNtEU1bcejLi5yrvMRFACkfcpczCWiceEYYgFzTwiNuswHCHMg5o",
  "key12": "3yisxERDNKo7sWJP2cKLpQk2sDjV6xkEaJfDXBR3yy1efP7vSMasT5ExPNNm9qm6UxTr6iwsgvEtULsG5hkPeYZW",
  "key13": "65KanGSRy7sx2eCkDoWbobxmQvyYuj5ZHkn7SqoGsY4GnD8M6N8UyjAraFme1sTdmX5HLsF1yEQ7LxBvjrNbBGGu",
  "key14": "62fFMbaFABWgmi18PmzpRaXJUgNcQ7JK3y87HkHd5TFCiqfNbaF4XKTCfDcHKJJbEcEFMMyaf6b7vrD3p6XcoQnu",
  "key15": "rxVYEfufvk3xCE9AEYdeTs4YxEXJ2prNWRG4aZ8hxrrzUmGABkHE8WiNwWc9E2DYrWsUGc4fQGhXvxgcNxfhNfv",
  "key16": "6K7e1Cdgq6j9Xr2WcQJzwN41ShcjiHmsP1d7J3hUBcCjKQbY7kG1doh23VpMNVxFuEt85dVn57uKduY2UsmuvU5",
  "key17": "2NbURLMyui4Xe8j3wsM5xCtJNGLnovvhRXSb7Dg1rg8UgDiPFZoDGmS9ZPXAkMCvPRvsTzuDFqdtE8vbzBc6BPaw",
  "key18": "5SYQZueAMk3Dd19WaUw6kBr25oc6rcnzt8fEmhrQcs2aCqiunWfLWfdjRurS4VeSVL4QaveY3WWDtXTCW5SedaeZ",
  "key19": "2k5efMwyN42ye9UcHgntFSxsC1j948Rpz4VY5bri3twBy2A5hJGATawYWtzN7WSfv1FzS9hZx4S2EsznFxXE8qnk",
  "key20": "5vFCfWYqwGTXkWnLsytChLXtxukhsgB6uEaQ1jUCZE3wSspviaNyp8xhmKz22BbFGbTR6K35gfvW6hjDQfMLgHKn",
  "key21": "5Q1faeSTecKuJPfFayhNoh5ADTckZUEHucjravgT1SkDSeFd4MLkjrE7rNhv4rLsf9BEGDPf2Tmij85vg8GYTKK7",
  "key22": "3uzMrtrC844fsfojmexzxTbW74mNun7EKQvJUDNoiaWb2gYyV7Pj7JARNtAy3wnYQoQmgvTKyPgLLKuthxD9A8qn",
  "key23": "4JAzH1G8xPbchb6gqxA7BV6y4nJXEMjdyR347apDWcruEaE26a3JaM1mhc6ti4jB4gFzhsvUkCAu9wKu6PDtMUq7",
  "key24": "3dHdWn5Khd3W8xY4BiK468TzLbZnsVoUf6QvToKnJp5dkCyQvWdJwXnWGRUNBaSiRzpQ42FKEtX8MnSvQw5beWLr",
  "key25": "2wGbnMNgAQQhgzY6A55FgUPZiobdj93r6H7kqY1dKTwxbkh63RcqmcVtNxJmgVRueEx4fC1Uhz6rvocDYfFff3aw",
  "key26": "3WFsrv9yUqpfj8gEiojz8xvr9Ciyb7YiZuAgCQAQdupqTt1ZPH6pHz96jHdwHmgmDLfu2ZF9cSNoPy6PbAaqx2YY",
  "key27": "3PSq9KkDinqepg2g9Hr5McHRFAnbxwE7sNoJSbopCtNCqxU58UHfKr57c721ZZVz5Ze2d9WDMHc3ttbqt5W8nsqP",
  "key28": "bvmkudcyhiAjKVWHxKeXkddYnfqPFyfkwo3DcfGSxae5Hqa4F7DH5q8F5zSAQXUF4jWDadTxBi1K9F5Zp9uTNcY",
  "key29": "3HigpU5fSMiEGMDBLoBeCUrSTWjtZg2wcW8eErMnrtDPqVCt7YoCaBdPQ6WN4J8kncn2HwnLPeyUo42tKSPdHmeU",
  "key30": "3tmvRNegAvgtoTZ6MxFVwNCiYXzGQj2Ss1PhtAbs8FuhQp9Zq8rBmnvix9VkB2fTayNhk7Xty8j4ejPQgVsoLKu2",
  "key31": "29BCNgZsG8zo3UmuiDkzJ1kLas9WCKyJZpkPJwjfz7Mc4bKCXfqLTe92Zb9tYsZZrCdN5yNWyVxcEPLFPwcibBVj",
  "key32": "4XauW8uKfkV2rHKF5jsLT8eFXxfApaxSFQiez92xMQva6t6H3wfenVmkRLrU5Q7AEL5yagsFy8BmzMWkt1m9eYUn",
  "key33": "63BsdH5S2nCV9NM3xyz7b9m1bWmoTcWVPu643Qrm2JEETRGTNw13qeFLhfHnooZaoJHwr9sKx9qW37U3mB6hRtNf",
  "key34": "2swJJD2o2KbquXkV4L8bGS4wH41hN4oSNH6zQv4CP9mHt8gQQvD3aJSKExw5ax9QPaNeUQx8viUVXzc28BkPuqKH",
  "key35": "44QZ3GRuS4AtmBtFop4zxr5bW3tQdwo7Tv3FNmZumWzT1Ez1A2Es78oS48AeckUY4kugJ76y3f9Hc1xDkCVxmq83",
  "key36": "569CM8sNck8GyWqqxPrcqvjTPaz24i6VcFHptyFhdees5jnwtkmj3T1HHko32FMQZmjBXciEdEbwJGC1CZL2E5vi",
  "key37": "4HAARuaaZb75Gd1fcLR3iNe974Vpk9bur1pUsVaqN6p4vywZdPJkmo73rDNNP1gGJWtMTfRUTzW1kRAfTcRDUzAd",
  "key38": "4YQ1yCmLmGi8WLusZ85Lj5wrcBGWinAaLuCihj3snNGexbbPREzK1XqwEX5t6VpiM22hf26Bpz7FooWGfZva1BhK",
  "key39": "4rcowoSRMvDzTme2JHkaVw7cgs2mepnbt1egfQ8i56uVvbG6pLCdJzxqrLG6EU9GD8AX4R9rit3Av8QS8EBakMyU"
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
