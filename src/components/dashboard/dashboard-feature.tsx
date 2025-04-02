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
    "5YFgowZbsZa4QTj5xRqKPF1ZPthxxrR62gg3riZheJsuvqP3PZ5rcrGe423eKxPLKw8PaukYdGNyjfgdHM78d8FV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nC4ukWzsZ8ePccqoRocwMFZp4b2siA4DtstHdsJ4Gfv4gULWGvQj6ieNurajAYtWhMzwJkQjwq6iiBFkRZfBn8v",
  "key1": "2EJVfp4kai2EUWwzEyKjrAxSoqdcC3d46ZK9SuXHSftmG63paPEPKXk9GFiDTdKJ6byYLGnwYjqDnLaV52zVFEer",
  "key2": "55M6qczCLCZTmXQodfpXco5yfuo9KnwB3JYdfRcPA6gBcSNr8QbdY3M4DvvGijuTw4sQg8UmJ3TWabJZXoHdbvdy",
  "key3": "5Y4zvGzGb8vLN9yw3KqHM8TMxQGp9Rnjih8UMMqdLbhUYCM8rcLsn8vGrDUrKByehtMbhQyDFwFtW7PPatiq3bgn",
  "key4": "3tQzzHq2L1iUmWukdcSLSnzDMLi74TrsQPwDy1SgX7KaJXGumujSjiryRH8Zdfog51ArPk2pYHQdHASS6Aqcktaj",
  "key5": "24DSmy3WRLWiRcgZwu7NRFhNFJhdmgKQ63ycnA13SrvdA1Ac9soWAyYBYntkfyP5zETxxsNqrpybaNSEfN2aBzLb",
  "key6": "4bHjP5TP5GUhxYV24UGdR6Nj3q5cZM7tauqHo8ZVcn7E7b95mqRD8xRQD2FdRFQedHnrph3SxX1dDWAutXaYeZok",
  "key7": "2davWfSkWaXAasxtfGXzyxkmjVFqh5UBbAc64Cc3gZ5FHJRFGKpqTqP3RpLXvMjyQZ4pdFjqa5zYxYocLQHTMvYL",
  "key8": "2vWhR9S92kUYWMuQMCug8DPT5wij7njow67kCHUf2kx6frhY9MDAcgVzmkwZD942tUpDwP3Adgp3dcRXtzgSt9h3",
  "key9": "3cqUYAP61oFcoSU4vwU9eQjxpM2vo8KwG6pKG4NKaQ44mYALQM5epEeK6g65WVBxNpLtzVBSur3wCZmzk4oqXFmU",
  "key10": "5tKVTBdXDw5TD8bCpQcSMMR7f99z4nmmENCNbKM6Gv8r8G8Eodj1R2b35mukRQR9N7Yzdjqqkpvzz3mmpzbcKsVd",
  "key11": "5s9qcU7BmzWQt6AXtAJobXNQmxtULgsy6Yz9ySxGLehnBZLvZf9fKv3iav45mbsYE3RAGC1nwYxHbEasNDRf2UKC",
  "key12": "2W2EY1v4fSzBnZB8YMCuqBGkXgzoPXc5xxpxBuPQtJphQYaRJaKNKHaS3irnmmZwxAmbbUz9Gsg42qNYBWq8RrwD",
  "key13": "2yMjiEag7e86QyfTK1BnLsomCK38V8CN5uR4vg2qeWqpSU2GyVjf2zAbsLj1nBr2oXRQLSx3qzFD8GytsHnbahoM",
  "key14": "5mZuFmpbTu8GLezs1anyqW9KbvZzdv8x2pPx1kkYKVq2GgAxE4GzFWf77Uvo91k6xVg8Z6Kb2izboQogNAcK9xv9",
  "key15": "3WMRKRKrvBUFmP34mL3QqzTGmTmPPTF82aTbZD2VQEu5NwkUHx2SEUoV7Zg5Q7nVSZHR3QWRFUtdfb4FLaFjUhtX",
  "key16": "5ZWqt8Fp2yGPNy7HAQ9zeVXZ72HySdcRoUZLcpruZScjXyjtvxNnFSCqaCbDEzxfdYLqQ3NJuTKdpx4qNnts1juc",
  "key17": "25tbbQZA2ZwKQfzkivGUmT2xUb2ek48pp3hR5UT5iBB9x5FmijiDbSR7QVgMeYjgmMQ5ZnEfRAgh2GJ4P5VqYSPx",
  "key18": "2QGWzHSBQDjukaSpHTVr96ktkkXwdQ4QWF1dFNBeqCs54SCxEnpjMPB3BeSZiybs2A89iGd5ft5uCPAo9pJbkVq1",
  "key19": "5YfiLuP2HGD3C4d92g19yuVz2NoCjjjSLKrwMFie73zAdcNrpxLavpzeEwA5R9MHkLx79EfP2bwWknAEBPSJmp1U",
  "key20": "3FB9AqpfkYfw6bYm2F84bzE8ugW9DX9TkN7gmEzRY3C1gNwzraq2CfdvGvBwfNTsP1MpmvqHFPTNZGaaqYdi6iFw",
  "key21": "jyAMpy3KSQXiJhrG3rTnKYXPJcnnignHG6VyTnk7nfQ4W5VRC5uS39DmSycuwY9Z64jdbHZqJR6bAqC56cvzAsm",
  "key22": "3SFkdJ53Q3oGSTFv2zdgutHGeG1tcHxFK14sgGuHj8YbcKEqpAWUoVBxXorrStRVjNqUT4NnAifUK9i6LnNps3wR",
  "key23": "2DnE2qapNHbatEqB2u2UvMURuFFbWdzsgg4hJob1XwxcP5LRMEmqTzxxiCHTDJhKd5GHxrLCohyYTVFe2WNDcyEc",
  "key24": "2bbybwbPMQNCs1XpMsP6itw9DWmfcg464p1zhrRWGyLspJVJKQHU8TtVyCRYt1vfrj2ZrTqdK3w2EU4Hti8JBr32"
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
