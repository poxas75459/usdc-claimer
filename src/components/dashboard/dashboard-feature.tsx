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
    "5F65ZoMLgmLP3wVvBKap53rNZ6djAcXDCe8bQf43xUxA6txxvBj5BX4dy5JyY8iYJP6mFVCRcwgVFV9B39qCyc6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kPajLecdfW3QCX5e7vRvnsb4HT8nY4LZFCB6f59PksKDHBJyoT68mRbxgyPspFjBGP39PS86L16m5ZYGEh7povR",
  "key1": "49Dj9W4hzp7faqHCUxRBn7hS2fLzfGqjpgRZ7oJcax1U2uTR2sx5kqEz8jdV2Kb2PnkMuwzRxdarREsJDTJkMvkP",
  "key2": "2oxuxKXVzJy2JqDmjthqMkZUvr2s1qAGxASPcyBivVvixCX28GheGDjWWfhfHVNLmawyaoRFeFtvaB31b9g5swkA",
  "key3": "2KUc2FBD2i7FEa4VqXmhkXMw4YaCrmTaBLMMPUDuv9Z5qwRbJzZmuEhdAptcTm7e8561LFA8GNn7vUqqbCqavz1G",
  "key4": "4rc4M4xecUCWnLdvVDpUe5CgywzEprtbDKZ5QysnEBEvomPqfjxuKKXg9yMhnmJ8wQXQaiSv87mFBtkxN1Kg1pk8",
  "key5": "5fMR17uooS4bKJuM7p8SHvDkWwvuNtNEg4EXVnrXEvGQ1W8EBrqVkvG5KZWUpmey3x7RobThZgbvYvXU7d9SAFK6",
  "key6": "2uhjt5w18gxgSpw3bREoGews2pmQ58sSzHgdVPxofcHtE6TePZMwbM1kaysdSg1J1v1MEBgZKnfKrERgMeQVRWW8",
  "key7": "2RErtVme3qvNfWL2JR6qgxyt1kQLubKZvyVBvhzMQ5vQNa2oi4XRXiYHVCSSbSqFgVxQWR93eq4DnaDD6Aj45MJr",
  "key8": "4auEnRhbxCpZTPwUFNFwqCScSQbmA63WsDiL8wjaw3KWz7KLFR8qqi1FtdHGmLYE2k7PeffQestWy42GkTYEgJeh",
  "key9": "3vkcp8uMvvwyQdmg12GCBy1ZXc3ZAzq2hh1vHdkymrm6CvinYiM2Syhc4xjJhSc17EZcjMHspMbvmM5TXammPZkw",
  "key10": "3QBL8hfT49WVGH9eRMBn4igx3jfrXvHRLsbuzmeLBpMSXof9HxNexSBa2eswgzjaSJArLLqr8nZb3oCWHV1Quv7p",
  "key11": "2AiUfmrTty5kuquzUp6erxhuwNuuc1nfjKpqgzaPeN3WWfxwu21jp9eaB8hRAwbCEvtLEdhLd1BGda5vxqQ8138o",
  "key12": "Yc75zW5pcppS1Ho2WDUqSSG8c4RCMdaUEcM4qeq56abXqghBLuM7m3kFD7RY2e4QBcV6pxE9YHCPhhB4WdNNTSS",
  "key13": "627mbYwHV4FnG8j488gFuBG8LLgDms8C9NiFXHkcd1TnHudapkvbkhzvDmobTraceACG2jy12TCb3NibZXt45HmF",
  "key14": "3MBhwWftvFgjjArLuzodSALnS6kscP47Jw7SMCRsvqy5o8JfgMGC8FgSNtG6Lgcq1EF8pbY5X5WbDNUoJXeQfHnq",
  "key15": "5Mg5BYDMHrFEuUoZu8NTi28rhefdwRkdqRQLcMHPQKTAxk68jn5oniU1yEmSXriEZwQa3JATPXM7SFv7scYJNcs7",
  "key16": "5Dm7KibNtfe1FQySxwyAgF3yKQDs7qjY6Uzf7wr56CnAGCLKCGjNbeJNiDhpG8sTooFERxQXNxcEV7XmxjttYAum",
  "key17": "4KNuH9bSfmFMb7sF1g2Tj89tM35aRJHQBQHeD7dVfaaQv2WqeXADRdVeod9cMAG2TtruDVv3rhHw9MSPpi62LzYP",
  "key18": "5RLdNqaTLtbFfxgmrBsu7M1mX1g88QuStiesPNGgynaFVXJVTZFA5hGpFXFKSpeyG6Vbq8Xbf2ovNqf9hWhrLvhQ",
  "key19": "3gpeJUywvyC98nXNk6cocLvtcgeZLEcbPuDWtT7suxM3etLFaGc9TfWfrQfrNqC6mzXcU5x9q7HUvC4uL73mdT3W",
  "key20": "4DpHyyHu7pFM7vPFA5FhWECDd1pDkVPZQdkAwAxpYfE3ePWqjuBaxgKDCGCwRX8u2czrE4WnDp5XFPZPU12sQUsH",
  "key21": "2MBu4MjeqJAPgSkR3wp58Mn531PvrxpwvbRbPneBLmf1xX8pMYLo5M3V8yWmBggifYBbCrVmudBKzr3GMvPbegAk",
  "key22": "2yAb6CuBv5STWYZLE6m9xgoAcQLDgKVF5A9TnCAnqYVt5m1wTW37QftoYWvGfTdjrxXfDEpvaHas7P4fFmvhfugm",
  "key23": "3LTihUnr1Gu2Gh9E7wWks8NVrjfiBhXE4yFvjWY92AqXzaHrgPMctJikGfevptXeW8UJtq6NdXgBZN3kh7NYGoBH",
  "key24": "2czLEq2fyXyJGEa6PwWh9vzptrznMGLxQhDBhfRcGpLWSMUKLFGZ4KHxUK1oPU1D2mcKJBCmoUL84ko8AqmCs8Va",
  "key25": "2qK6VNkLL7jZgDPpd9UrdbQEUoSXLUcn5Lh9tfQj57FVbuaoxysu4KX8gXTp5oKh8i6hHuaDKmUwKBDNextG26tm",
  "key26": "3QBtEJ8hFjH14f1ohm5XzcgVUY1FM5nsocMX2XewMCfHCXPzNqwLxKzEb2cJwue2kAPVSHW6kGAXTDrnxtgAHL7H",
  "key27": "3aG99DvammLW2xECkACHfEcwmHmBKGAZoyxbe3yQkRyzYaHJD6BntUobCUydRtsQqn3MRa1xiL6Ja691dr45UQRN"
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
