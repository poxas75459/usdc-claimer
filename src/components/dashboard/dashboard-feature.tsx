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
    "2HKXdpKXxwxfLYYEpodBEFeppJ8FgTcFjbCPFdib5awDop569KqQyVKe6iuj7YFEvHep8eqvwxAu3UfNjVfgui2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1hD8AJnv8j9D4rVZyEYMUvy2EpkMfzmBDMWY8eVAaR8n6e3ZSt6NKT4dXS9MHANbqeic6tRR8z372NEvVVjiS3M",
  "key1": "2oray9G1tiCREQmdHGXkc53w4qrSCARXgjLyX3Aq5iuLwPbit4PpjHWzppYbjEYSZeoWkJtmBvM19GfFMAmCmwYh",
  "key2": "2CKuyJuMsXBEBr6ZtTukerWFhMhr2ztgt29gV7aLDof2sKRCaxnagXf5qseTciVAuekw6oJQhhYnXcTRo8kRgQBP",
  "key3": "4GmrTLG16uLSCvm4gaSQhXS4cPG6hHRmMCFB36LGAaNChqm859jR6hS1cL3JPfn69AZcLpLirqQTSgiieZgv1Gio",
  "key4": "4f8SDNn3xj7f7oZmZdCABngnjiTMHzqDQ1eA9Jkhx68vgBUGcjw71ryqkupXFfpnXQURgtA6oKWu611CdHwwypm8",
  "key5": "5W8HNQ5QaKg5pk1PC3m3g5pxDHvMd9HC9YVTAqDwu3v9nUt26qDFzgUu36UhL5UVHJk2weypKfGhxkQkBFuQRrWn",
  "key6": "2SFc9qSjrwbq3DtXYhQ8vHwov8oYLxFRrHs3Efo9yAZR9PhCUarakoNFr6w8bG9esXGjSo7hdMySVWMjZ2vFawWY",
  "key7": "2hSRDfu1VtEdwGNAk4UHidBiFCFGRSBiBjRff41End3nHjr99n3nj39SpGCR5CzD6oSJ1ZFxdjrLmN1ypgDMjDJ5",
  "key8": "3EKJsaVx41qB6G6E1GHPj92uE9kvxALscfPCE5By8rwduBp4tDwwrNdtbBiHCZGoptTMxh3jPRht9TTpNBvGSUng",
  "key9": "5Xjt3X35ZDRFND6LJgKwirMPUVbbM1fyTyya8cjeBhLBZECzrrpe1Mwsoqswbm6LbVtwzdhjREx9wangg9gpAB72",
  "key10": "3SvyCRkC3fi3JPJfEvkqofhTJaupbkJqkFBbx33Qf8NgEBeCQfPAnshYjqcmH9CLJBJmN4aXaFbddrMKoRq1DsqF",
  "key11": "2Nm6tUTGAVbsmbpHzyPDfPs52ePsyBHxf44wArimab9e3gJq4de6U9YsH1Rvptj85h9iejfmN4e6noKUPsBu1SNz",
  "key12": "5QR1vhaVjt2Yu8QNFJaa8VKhGdBMPNdRrnT8VAi7TmRQf9PPghK8wys76tt7f35HUBbr8gjJg6mFa7X2uKZeH7r3",
  "key13": "uPkBEGVhcs4XfGi8sBPP7Xw8w6mpizCVScHQN9vow5VLsm1xFsnKWiphg43NXwYQXkHRL3Mu79kMNTZgcx2bZwQ",
  "key14": "4fjKw1Z64Kv1jp17maHSkSgFXoCgzBMauu5xMwsE1N6cAWxUTg9xhK5tVKX8iQFj253wWn1DD3MDABySk6D6LFH2",
  "key15": "5cwKfeGnKNGprvRJFquXFK2abPNZx7vGuANHwU9kHn29zMu2aSfskwCgApSdjCWqjvCgiWStnSXHw3KSmbq3aHny",
  "key16": "xFeZUreg73nH7yyj27ebQm1r2qoreeFa4n5PbbCrYHhqm9qXCTbkWaYhwGcTRJBz1EoTNDqKvq9gjDFwhEiJPRB",
  "key17": "3L5gQvyfGJYfHbbMjPivw3Ybec6wG9DeMzF481CnMqS6gSMfvQbvu3Z54TXtE4URetop1bTjgMibCw8nXCBseSZM",
  "key18": "5TF5XknjfTi3998VBRcxTLPfyqM8yRqmVQ4HsF1ks8EZw7uTUq4fr3niunDskNEZn1A6swV2jGLuz1SrWTsWuP2p",
  "key19": "4ynXS3Qw3m3SihvNh1TscRLfxx6aa1nYW2EK6vP1xhb21JD3MEhWWpVnqzmeQ563JuDYFTSUNjhLnrUpEnfA8xEd",
  "key20": "5D8MYd3VCd1GuWPrMyZKZyY2MYNvxWf8eDqpKVFuLgk9wCS4JxPEDJS8kGMrtoxuKXuLArCtnu8wyBaSizcuKxHz",
  "key21": "5dznpzFP9F7VHorMwxkA4F8VLVgRJXH5UxA9ZFDUHSc32KxPjvXrfZMoRb32RJoRGmfkknbz62C3gB419sqhhfFv",
  "key22": "56dVfSzw3CZ1XvC2Zn6SfTYqCmJooDixWpgHUMrDv73n6by4QBC41m4iR5RawztErA5vYSEfyspb8t4H9nru8T37",
  "key23": "5inb5eAvHEZkdb8VjYin3xftDSQ7YyXa1SWtsVvyAdUEnyJnMQLr6mS5cZvY65nTEdBa8oqPTyw2xkq3qWngoTHY",
  "key24": "3Z2S5gPxhhFtxnuHt31aHAPsFxmZ5Rz644o8mbWS899EYyS2Pkwsn5RGs6RtMnYV1jBU5YApxtcNyKAJyrEvu3dL",
  "key25": "B8GG3NcuK8XqMZBqnUNEu7jaCKg3jR3xeFBLpoynBEDR3z56FMKGDqPNdXoeTa5QFnYsPRk4DpdCPw1gALDmRP6",
  "key26": "3uuGHMP7RN9R5m2D9N1uPXNvCWZ6HTCFyArFtZGPGNHj5sDWqu2LWg7XwCeFntFRMJm86gbgH2Sjn9QS2qmuaBZa",
  "key27": "3UoeawBshSRFcf4gvDE3Wg6ycgDgjGAUrxuyoZkcVD2DvkBSPa5KZhdZ6bBY4qHaZJYxn5TDK2ZcvrGAwwJAPfDM",
  "key28": "5DLK6Nnsjzgu44mAJCponeRr8CS77nbo2ESA3xn5zeHANJSpmH9gFmsYpxVd71d49oUf3Jvv1poj1PdxA9hXaGDj",
  "key29": "54PHLQV5UVs7T8LgYGNLmb5cE1euLVazNBn2Eq57WvMRoRZCuDK1ai9J54i6fmR8n9bwkR3TN9j6XnW4As2vXDnE",
  "key30": "48EUayirkNQiAms78Y1maJbDcxWvM6VT29EtjRvnfeoBvD7m8jQXWfDeQVSg1ZYo7RVR6zYKwXVZMwHNd7mwUKPz",
  "key31": "4yxGLCGDVX7cx9Yyxd4Y2pJUftdM64smHg1SRNmvuK6jHEpnaZ4LzTFWwqPPKCa4m8CkWnB3MuR2GGrU6Y5iyeGf",
  "key32": "3xDBEqn9MSXFSwRNTzBsEtcnnVomV1ndnnusuFNfdNanS3gtu8mNUqCf5TgAP8scYb13dVYUY1T4cFkppzqeCCEz",
  "key33": "ztc3ngEu9pe8GL9RQvBCRJ3UFuZfUHqorRFwf5ESpKPYWjyhA2RxQSEQ4QWRtmMfBSoxgcjfy1TMz5AYGwmoSnj",
  "key34": "phjcEfL54B51sQNsrDCHDCTB2T8WAHLa9pcgRWxG1H6NSiRCVXzytykh93ocgbqcwwaDQfS9iLSw7jTvC5rLyAG",
  "key35": "4A9e9EZgQ68ycQb5Fek6Bfjc8DMkN9TyDEEvdATz7bruUmLCEWJrZprUwcXSKgXVQiLAJXDzDev1XPVCWLzd2CcQ",
  "key36": "3VnW37TTGc14Yvw74BbQQd2oTK7uvWs9e31kB22z7oRbymUetT2fhbN5qo9vPMM9ANuxM1qBHu9DGMcDT3Ztt5zF",
  "key37": "2EtDauDpFQAoP61ysTCkY7JtpRKju4aJeL4WSzi3aJQL9nG81etSZmbJJ5PsiMQhRGDMM7zC9weEynLyjRr3PqRp"
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
