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
    "3ugrou9x4j7Ngud4xmuKpsxURtwh3zdeqHRA3fqusDpPVjK6KXkYNQqCxVLzTMqFh998Y8wPywpxGmMxLmUJ7e3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUHpRHwiZqqqzNUh7ZmgU3tFtEhRni1Vpy4qPb1BLPrsrBe83PDuL3m1YGrhhv77cbZMnxpicdNtYJ4ALrQVpqg",
  "key1": "gq4RZfmUPzwnN7AiCjbih5ACBwTb6ntkkWMoEw4yEgoa885kTXyvJ4DZiLSk4XwhceE6nSyQPXtnRxPwyfWp1kH",
  "key2": "4Guk2AiCvtGY8aYmtXEYTSo2FJYiPeRHBZv1TP6zfav3HsQgJBZCwWgsfRbCFJDqngFZdiZVnNCuLpcASMK62CeS",
  "key3": "4s64zwCcrgjBbohjnioHN4VJK6XMNVR4dCrPM5fKNqfq5Tvyv8nma1rDfMMSMCCZn1Y4DThpzzv9hdGneKX1VzuP",
  "key4": "39T8E42f2Zqfq5PB6x9gLUh3BggtyMyycxUsL3i8MYftCuLMrEXvBFa3op8JVjBqe1LWWDfbtuV4Pjttp4ZQTzVs",
  "key5": "3BQgfi6RBptA9Rtuf1y2ei3BTCNS9RUaGEuUJ6wTWXFJENAXhZRXMyxn17Q2ss7aQHDcM7cSmRvU3EkXvA95iRXR",
  "key6": "rP7CDR53Qwv45cCa1MCSFEuCt7JY4xfpEdx1eWkd8u4vf9pGjRRe77t9WK6UMzM4Ug2QRnJHaFAUwvp2SkxJE1R",
  "key7": "oKQKHC4ib3gDtCJ16wwgFksgtwkPemrcqhovExzVkzCuhSf4Gj9MFngGLJjpGMbUcxEUs6shESvYeNm4KWQ43TD",
  "key8": "2xgsYReNbPPf3RorraJ6cc5ph1TXLN49yc836UEwhqfRji77eTAH4ZoHQ5bbiwHR7Jw1XKSb4DKRdMqjwj5LfZv3",
  "key9": "4cdEsFcdrZGeCc6Q9Y2wVsPP5aZ885LkBvrFM2REyg4YEBTYZYaSRV4LmWdWmdnDKpaBGWj7gejyLTDAmEKd27yU",
  "key10": "3tFoQkdH6C5GNRFcdwGpWUX71VdXN6oZEbr5LvyLzNA6YbcNhC5HSvnNDx7NWgJ1CJVyaRohiGQwXW7U6wgZjoYE",
  "key11": "4y29vvHUwY7891EirmaNfN22m19Fg7yt5x5ecLaKDRxGCYU8Cyk4TR2LWCodnoMAMEHGeSu1fiSUpbzEf7rV4SWb",
  "key12": "4thR9KqHW4bjouVuyw1K9E6cXDanA9sYWEu1vfZ167q8vouS3NxV3PfG3q8TBZH4mSHqV61CmmbQngeFBMN9cXSn",
  "key13": "2Y4Z21RNgyhD1fLmG8QVKHJ7ZhKtgdPf1KLxFT3LsayJ49F7Dodeu5L4owLQvD7wXBvSRngKuw4iCQQk6nGrmrka",
  "key14": "2w3gUrfStUkvq4D4ZuMjCVvqCXzqTZrRGxFtYcMTBG1vHRQKvHAhFdtXbTRYqJVrWbVeiAhdMqWaVyWj5H3jVUvz",
  "key15": "42Fe4VHbL1uDQohGTKq71Umcwda4qtQxeGLNoaK1ha64P3De4n6PsZpBCEfT6kLCaQUYFDrhx8c13QA6tWepkghY",
  "key16": "wMze6uGi24pU8Vfp6RJsrbYWAVQwJsRktoQ95fsCrzZvhtuxRhaCqcLzQ1DPQm8KcXAPXc2tPF3FGqjXSPZ1SQ5",
  "key17": "2ZhcEPbxcWg8pHSCYbfdSK7amUSwbXqQiMDfcEnqcvTCKj5jNw7aiNxw7BvTQM4CmAm5igthY42LFcPe8qhaikg6",
  "key18": "YBCMScc4pkcJKtggFxgDPEm6gE17oJbLpwK1aKLHnE2Zr6FFuzzdM4kSJExmNf7WtXv72q8yaPyyh1sH7RWTgKm",
  "key19": "243ZZXaBGgLmJq9J9LKC9tcm84zopwusWhRf3ZmdW65r9ZY1qtaaZRLH5QQKkhNRiEcQ2uK4GNFqKL1YiaKAPXSF",
  "key20": "4m4SF9qzoCu6sXJDWLnh5XUK9JyTA5DPUDD4E2DQ8Rk5pvo8nZ83LTBCoUwLB4JssRuAv1xj6HJMnjstBi9CMp4C",
  "key21": "3tGgNyCoDjwyev6ewHWeTWHBDuonENm8YWUKuaQi6sCHESJ54bn6QYTRWE53zakB4UBCRmdCcbFNoHh34zPcV6A3",
  "key22": "2tPyQjk66G7kgRMdvH9fLdUwyRBc9VDk75Lcjjut9DKqjBNgiCW5JBNAxg5PxnMJMQHcDBt3KVEDdyhZftmoBHy8",
  "key23": "3P1xwPfxiBd44TkKcbt9YPdCjCf27B2ah4M65bes43H1TGmeiw6XGtcKLdy7A1v2vMRL12wWEFS5f5xPJvKZ1Zrd",
  "key24": "4SCGxR8KyeCupYrkmCq2mmTyEzhsrDgKCepGa5Gq1jSPLVXRG24Nc6jPJn4VfocMEAPFw1QeieAcJNPDrLYHquee"
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
