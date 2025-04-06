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
    "a1XLTLUHyZ9PZZ3tDmP7SRM2fT24d9guxwSGPDKzkrM9XtNBwbzWpo5M9PHpp4AdtsAxPTW413onwLvBBDVmd34"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ztA3xbm4r5NzrK9WsdHgge1k9wvmAzjMA7895PocVbZaNKh5sKtARMQ2DSdQTLqahnb682a1LxLxp5pTeJsWwY",
  "key1": "3oEYZTtJX1PntDTCK54amCXGmSYdZE5hXQodtVgQBHjXiv7WyyTRBPKpxRuidBFf8KySS3LMDCZb485e64fDmpfs",
  "key2": "3zRTKd9mMgMUaxw9sSCHSMc1jvAJKoZ4bwmSab5o4sdjgBMiMMvt7DoRWD6g3ARFnt3QSKUx6VimsfD81dXGGjfq",
  "key3": "3BbuyX6i9wXteN9wDa3tuZv76M1ckFYxGgbe4H6wxQkvdAheyYApk9mbjxZEY6Hdn88wqoi1mZoeCBAxewikQFD2",
  "key4": "4pwhkJe2ZyGH349YWkGuPKCc3vpSSSWAXo4mLVSemTfxeEeMAd4SS1AEzF2r2AEoqc3gbWLkM6H1cLXUGPrxKAMS",
  "key5": "3n4z13zjd2WpNfCjHHgyiPVZb8w6TiYKRDz7HAoeYmLURwRVWtv5ihAqSvJCn4jBSBfhpBEDWCeo1KrZhWrYqDem",
  "key6": "iNxKbfeDJsw44MkHA3sjfGsBc1Qks2DKRetrGh26vqdemUEPenBDaPfLrK7uWe97R5XVrNLF6SsowdSmBd2FJRt",
  "key7": "2fdohNcJ1q5HNk4wRarN98NcQRMAUFEjFAJgTmjMTr4uBBwo6RQnwLDUCTrk3dcGTJmhLqXtytYKZbRnCURmKF3s",
  "key8": "5KrD3oFLCEnyTFC5Abb3Y2Wsp5UzeT6BYqmYQL56gWfUc13EHab2EyjW4pvenmsCqdrgQ4ueVhx69sh1A6xHMuqr",
  "key9": "4yToNTyerKBJT4QAXqBcfKGQ5UT1kuBV8MWwx7tEKkzwGGZrURQUjdReyNwteMNHvWq6tLn46TSmD3HNZTz64tAq",
  "key10": "25aANDzQvXmNjd1iPixfwVdnPG91FLFY5UtFi4Exr2XTYTfLCLL7gHFPinZNAUusEgApoFAssAgMrzF3NjZQ3k6R",
  "key11": "7Rwkt9CtSLpadJ1MRGRzk3sh2Av8SARxvraQwbLPu9qbhXgB9sTFNJLBSdxZxXDaz7KPSAJ6Qc3K548Qu1awt3X",
  "key12": "BHsfYt94pzJNhAH7vts4FeUUTyR2ZHJwkAofZFZcpsRs6WZ4NUXGSW2BrJThGgUd3LvxdDDipw3SuPKYiCgZ9hS",
  "key13": "2z7nNo887CxEyVjkAMD5m4N3QssKM5hv5ho68MGrtyNXW8ySpdx1M9Ji7X7VwKLnqTXngstsCp9hQJv5hdQKdZZF",
  "key14": "21Cv5UszrRTPwRzfW2Zw7Dh6uM8UdaJp7qMM9kT2HCpG1hXTKE2N8mh8LRGQyuEDpRuo68D2aUVM5WfFzZ36peWh",
  "key15": "2dnfCBed5bHzZE5WgfFFSbB82GLw5pwaLUGRtSmX6R6VoidV2NKq7Cmc2f5Ufgth1FZQWcV4ZnTnFG82Vcj6pRmH",
  "key16": "5WABkJqTMp2ykvmGAw8YVi2L5NQ1G7N1KhrykxSbJ3tNF8D7wCpQWngszWvtxGuhmue22tFvhgdhEttLy9yGjK6V",
  "key17": "3ztFG1Rq5FS6usu9meaWm7Uv8Ywqf1sLisuh8hMco7DTdQkSjdy7x38iCaT3ScZKBTNDcf196BvpHKpWZpJCTXfn",
  "key18": "4dg9SkppacoAkH5zhWV6Vq1ocuWLpZBYCAczCz1WLAV6SoyYfCyZFMyJsg3DKS1vJV7GbbFGpbFHcE7aRisQPdgt",
  "key19": "4dTD6HxiqVxnqrCNWPWNUXgNxUdkkaMummfavV9Gy1dANQUmJ3uQLToKsqr6NJqWiM2BhHV8ghHW8XK8JghBaij2",
  "key20": "22GPyFaURW4fyWENw5ANZBgSfRXTuXAeqqXBVf5ZThMTpZyQTFVqr5AvKzEkkqA5Vyi2bPa2LuDLRuo9EJaLMTQq",
  "key21": "53k83vzGEZPTbX98Qk7PuNhz7MVu2ezWVaHYbDdG9A8NRQGTk1XHa6tiDnN8yr8sXasqrbDkcbd47ZcZtmUiyK3o",
  "key22": "wXU2wPVgzhKs8MfwJjFkPSTAxG5Avwdjc1AaY3rB5RZUBMs4UYkujfTN7MvE3ymYP8kUovzKU9EHD2eN7Xzw4NV",
  "key23": "fD7BEmZQNciap7JdpAmf7u9gikby35ibd66gyfRRB6mbzcUyLkQdJtAVQMfWXYz3jR2uLGxWGXvzzzHAainUakk",
  "key24": "3MzBxp1FWwCeSKNzq54TgpRy45rLswFSDmggargfS7YN1YmYsJVuL1zVXd2KGxA5DcTfHZtkbRdbzaYPy6S4ZRcq",
  "key25": "2gkLKE1SBk9uL472V1c3t3HoCYc8PJPDWv3hxg6xpw8EjZXsKbx3rom45rboLsfdHJ9ZrArRp4UjNRtX6F8RsmwA",
  "key26": "67YfamRbsnbavNgYNPnTRWwefCoLkAwRvpsxrdxHf5XmHBCpnqeVXxsm7Q2bmMCvi9FVGhkyxopMvB68sbFHsCxD"
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
