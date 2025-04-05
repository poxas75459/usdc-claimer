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
    "3Qa8nhrgthUaAqEXXEEDeJZwPVFjvptqS9oo146JXwtFKFYrL4uNx62AhRwSmpNPCbeQbGtKvihnajMbd2RAi1U3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRxZGWXmLgWUPVvNhEymLLn2AsCjFifiNtHanqFrcig1sYSyo46RfeUk7RC1Z7syrvBVp321cPR6MvXYGXFLRhV",
  "key1": "4uVLRc18YWAnoRfD3A3ebVGz6di3YHAkQwodm6rw9YzPGbpWEZ3eunKxnUqohZt5ozXCRiRbR11wiYG8eXcrJWTm",
  "key2": "K15E6kiu5aqcsw7cQLVho6oFD5gaAf4vC2z8mo88zEjMp92AvKzbxNMGACVrA7dyQsPxRpvJ2vPoD6gc9GJU4j8",
  "key3": "bzSK2U97R7BFBQdGmf1RKqZdofS2WfQG9KcyLcyFwuCbfhdbHECDEoQ2yG3sYVbisj1VWaXkEgSQPYzxxMHd25i",
  "key4": "43M4xdzy25oNGCsz7sqYvbjeHynUUzSC4adRAZy84djvsF5J43EeKxmXxRMBowpMZhuuscNYdXrenJBZY9puHZ5x",
  "key5": "2WXjojfQxKzamZeDaED1r7zqDxEQndRYndhx12vsmzzgBDCNRkE1JUMk7JJXNoHj6X7fMbrAqM9Jhcbf24EbbqkZ",
  "key6": "34kbNYubexynG6jDcEPr64FuorfQK9rLjnuZXWzT2Q1grAA6z4mvKuRqk3V6z2PjMC233ytdwp3dXf5ERqVKQqKU",
  "key7": "3dqhydbS4YAhq7sKsKxPVdHJbR7YCDhUxwZy7gdgaWANQqEQZvsCiHZmEv9sRmE2GuhPo6VVEVopKUjVM1LcB4qx",
  "key8": "5b7J5YpNvdVMcWBPKtVJpMwJkcacQz5nzgZeXZAUjYWd93s4CwnsMPiFzAR1zjGGTQj6z3mbKeYWcpL4FAXx74ps",
  "key9": "5W3brLWityNgvo3iCVCATyqNuDitUpVjU3ojEDFNT5MEEj9qnvmdvLHgoyZzdf7QP6NqrfmSqTxyrzH4PyDeRQuu",
  "key10": "5rNeLgTmSroeoUprUxX7csDtoJpmKYZ8hjUd8ZxLsxSW4fWZHuZFmS528aVMoJ9DXq2a77VrapeRxsnVQVEuWPjr",
  "key11": "5nGuN3HhraLNaNV8wG3xpszBWs3DiYcBWxXhxfNG8qQrW8X4vfT1sfxDYk1dicjiqEj3UXDaneuxE8SzRi5vXCZk",
  "key12": "2qMLvMZRzkmrAkdzoPjs4fxyoJjZpgYdiGpT88E4RPdqCRBRGKo465mED2ywvRSKtxuqvnJ7qt4ewFegqgJDKzdn",
  "key13": "iUPmuJgfesio2JvvZqMkabyEdCfr6Yy73m4SegqMYZwTzKEJ3Cqvnck7Evt3dDZWSbPpcFqyefRyxXf6pDKpRXa",
  "key14": "2oPmQcwhBzKnsW6XFCAwmbLANRNRsoResc9ywaiJsjyNf3anjazXcD2nQ1GtUZsyeRoFbNGMnPpPbDx7m12B9jY",
  "key15": "2Qg6WrNYeNdPtQWked3vzm75HbRiBXbk4fbPYNYLR8ne2Qqkt1wMHagCgGh8UD1wypngpRwhe8k4PZ57BLjTkGjC",
  "key16": "2b2FJQXBipD7Q14j12BYmfhmjsWGvghkUE2tbwfsvZczUUYE7NTaeqmt1e9itTM4ohZ2TQQWQGiSyR3h1Nz4iXX6",
  "key17": "GPEABWEJ6WA63ueB4LgNxm8F2WAa8nkpokrzzVM6TbKhFtL9UyTYvLBTdPmPAk7WW2XMBriy3casfuZZoLCAmAW",
  "key18": "2TMGcfXPSyjK78XDBhMoPYPdRD2FKa9UpXQL96ti1CAtuBupX8vna8jnzGN5oDaJJ6uUSCVfzxsDygyMT65HphqZ",
  "key19": "3rqvWtavxxcADqASdoj3mT3nGG1c8qrcPP8f2rnDMp2QuBhv6AWUccKGnpjYhHstKn8SNFMwHvTAjUWWrBZvugEc",
  "key20": "5KHs9YPyLeXsx26YTykZb8fLX6CLDdadAMmMgnoyoeuFUS76KataMB78p6A5qTFTMpKt9Kp9qYQBMyBnYQuJG8F",
  "key21": "KLkWBsttAjWe2chV2Wuaco5cpoXALfiDsndnZPQYTYv6BsFoW2bTYWmZMU9smPubtuAQGiqyTzWjWUcBjgerGsf",
  "key22": "2Ru6iL5L73fEjUuKeDkpGE2HkhrRdKUqrungdUfrGYqy73biTRxS46sCT27JXVQTAbiakSPi5d7iDGdiAY1WjPz2",
  "key23": "4jUy7t6exvvbaq8s8dtSTv93XaJhKAKHy6JtD68zc9DSCeHcJ5tGnyBqvRsPeXuZmTbSCBvYYcLLpLEb2v3papSe",
  "key24": "4Mz2wiVofdHR78iCocqTRWk8BdUt4cdRNzRYGojf4gz2Nc8S4LeeR3WW1H5R3caeWsphRWzF8VkVhXtfWbvL6QiP",
  "key25": "LGPqhHHnA36juS1HjALN9MdxVdVuUwKSf3RpQZu327aAs49kfXVXNk4cCQc7dfHihRtufSot7G1Wm14QLsNHevB"
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
