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
    "2j6T6H8ntRcmPdFtM34Tkb1qXY6PoqafwYmSgCwSdPyZc1aZKR29RqEeC3yQDAXvgozQZ69Mt2arLFUJo2Bw1aYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T9jGxRHSPTxdNyxHKPWtY6bvFbPDuwpAzqMUWZxA62bDmLvNf5gn1JDavQKkwDYw7BwdUbC1Aazc9Jj3iXKpFWG",
  "key1": "3dJRVfX34ZufLddQaLk84LkLENQBZ5CT8sYQySZ42rMEKTosHcfsECKTF3mba4HhCQYXVmxgQtv2w4d6w82UHZsp",
  "key2": "4roGrehCDnx1zyx7P3JnvAj8x7ZckW4QiGgtcnvQQVHzsLJFPuQnPokqn4hCDacEPAjLZVsp8qMxwgvkrx5VvzP8",
  "key3": "P4kB7eD2F3gjZBjdn8FNjPKs6W3PP8NtPKhrAdce2knS5AWyDJoLqxURt2uuV3G2kakWvfNUar8drZzSSnSnpH6",
  "key4": "4YX2epiZN8wVtvqToJszyz96DAtK7az7qyFzkLmTM99udNwByhWdWdzi9Q8ykG3A8YSo4TKrLB6faK54GFpqnj8E",
  "key5": "5oqgo1inwQennxv1n5b24YZS9Wyb5CChZZY4Hng6L8hAg7P4kB7aum3r6cKaGJrHsJLgmanT5N79cw5eJsDWQpAV",
  "key6": "3DzABjmCoq4AoBmkyoReRFi2mQjCWe7JufQediPzqVHe5Lkf7hpPAYJyej5HQDVgbDdY8sikjXUAC1X7AxzUxL5W",
  "key7": "vL3o3B2APgX8s4cQD9XvsBoyG46DhXgKpAyibDBmdLYobNN7RHrCYYM25JzKfQZGoEzKhkxfESTpduE9RXa2WuX",
  "key8": "Qpc5z3ESuFxaCQNYSVoWt8DyKa5785Bk4ksKa6PzrxMBWYFBTNwce13AE9DqZq88NsSrBdsjK4RXZRpifQp527f",
  "key9": "s1iwACNTcAgAsC2mSEXwzRY8EKXLNpyMhshF3g2gMbDJbLGXPq6wPofq6sFKLSFZq2d1nccwa9XrF7GFPXYLmgX",
  "key10": "pfxy3CC9jEHjZ6BioPXHJXxL2Tjyne4wWm24nkYE5o1vRS52dwCU1uvMxMoVnT37j7CCnCdK2gvxJjuFZickFPB",
  "key11": "51V677FJyb7UzkJdfJ3EnovAZ3hkkUngDyP8AwgzaMxz1z12wuKuEPxbuM97Cumwta3NqSMH9B6PycX8SJe6MBFP",
  "key12": "49jRgM8rfFqMLZN6gaVPGc2hcBASf1x2699rEciuHayLdwmaQBuVC5rKq4Un54G4iCoGYrUR2A1HpF8wfnNyswpB",
  "key13": "38j9DpdhKkqurnKkxEwBu62SYDnNPhCeAMFDzvaizMKTtJ6eJSC76YWjNShbY7V9afogzHnL6JCu41sy8AjZrC7b",
  "key14": "3VgrPC55o6BLuLWWxwRUtFhs3CVLPrPWfvjEJUcs8Yiw3JB5qY8thkkTG38YxWCzKFpQTWXrBgWd8mEpyKiUm4ae",
  "key15": "nMLqkStkVW792DcvGi3XuDxnVWKmc4nd9JnXvg7H8dxXtU3BK2oCdp6BkcSVYiGJDhbmxYRPa88qEB754Gb8jpe",
  "key16": "2dgVXLVPpQYfPAsYxkCuxcMLAV9VCBpamRm9XidCmzgPAYBwT87McmMZd3NWqAUG25PdMSP8xwsmNNKiowd2nFLL",
  "key17": "3FrcThyLcfdcvAuZRA8oARzaswnUAtRgtDh5cGa51wr1441TQScot4DaNbv8zbgiWgVRwJ7gq97PznWUtH46azd5",
  "key18": "3xLhLe68NCP7Nru1ciVhfzj5v9DRNXPdfN8WMAprSjDdBrTcLuBRTqN1QLxacAkmycqTCurj29SUGkUzguGBXDpu",
  "key19": "5f15YhbE6qiiS2U8UXKsBcWDhoGs8qzoiajdVWEjMsNWNXRKU4oMwNxRXrR32dn6AXVZPYQo6MrzW5ULteFNFPmr",
  "key20": "4zqrbD3otWj2xd8PVwE8FtSQJU9YCzF1sBQwoDBwPb3aSzUjaN2fTHP6tPNGLr9LeSszFXgQiJFvR1QfjspcAQV9",
  "key21": "47CyCCob8RmWG1TY3imYFGDHi98mguLioBEKRzn2F7sPNu1PuPjjeJxwHVkuysys72rjmCfVU4UUSqcwCwbaNE7a",
  "key22": "24oPpk8FBUrwaSrh8jhn3K4HD8qq34bhZwuKece6eFMm6atYLvMi9yDhosE84AtyjzTWmSmK7d45ZuqW4omDfbyH",
  "key23": "2GUfWjVzcWyMKUXjgSzERfmevCmMQAMQuh3kcDEH1sizRrj9zF2BhvaifqgYMEx1RemENgxxozPLMpVGzXNaMiUz",
  "key24": "mjFeUXDt4H8mV4qtZ1CZCKsfQrBtoMj5rbARSDVTZvyfP1H2atEWzAgjS2F5aGZYTZdkSYyMtHEZdBkTnHAfXgy",
  "key25": "2ttAzzBoXkP298PCVJUumhtURnRGoksMHTNPqzJbc2a2giYhLFYaaYrPFWLP3xZL9ft3M1rikfKUMVRJpRpAVMSY",
  "key26": "cyWgB4mFGjaePAcEMKWRJmjc2UtELb719DYWrEDn4Pa3xSu7mbM28AVWWa9ZDnExK4u35Xqb2cFh7TXgPjVRg8m"
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
