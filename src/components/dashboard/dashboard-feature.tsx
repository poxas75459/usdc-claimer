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
    "2wcSfADD71uTEW48QSt3ZZHk3rLXput6XpbRmDopbf6oFwmQUb8Xxxjw7Veq5s1F3EzKALAkUmyX8z2nNd2QGzXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FM3jAS59PrPsv41Qaw3L111xUmDtJrT1sQf2thYXon7rs1irbVy3eP3qQmRs6awRL5HbTt5yb4T3JBFFa7kGQH5",
  "key1": "2kgF1W7GNPnegGrohVLdkKWb6mVdgf51YjaZhEfCffNJACqXCMm62uJSPPdH181NRLSMnTXp5xDny8nHA8dfbiRe",
  "key2": "QcHnC1eEUnQirV2WBt1NzucYN5Bqrkkp63vtSB24bbPz2LJESGgZrNCttt2BzNSvMXAVpPWXcz8eo3ubRWskWEh",
  "key3": "57BPghJZWER8PNZaL6uTJYJuHV54v8F2WTE6qGv38HvGozpmeTJFNxxu2zs5ogULLiYJCVc9VaR9zJ9H8imhWBZ7",
  "key4": "4ZpVgRqpbPxBpTv9iX7iyPC5WixT7Joz5GUaDGHs97mLwVvfaDjXVGTjJLhq7gG89PGmMUexVDptimeLZURkKzC",
  "key5": "28FLkhLXm2V2Geh7aS1XpddZAZBEQ2oDVaw4sHjx5s9GwQVKvDo95nVLyGjPtM51RVB2hUWPUzNghK19Nb5bZhqo",
  "key6": "3pawj9QpTekcJBAAcbEdK8R6HyNBBYmU9ZnoyTVEgUALxD32JDNWDF2mb8gRH9VyaHcSjc2aQPMPSEKM8DV3zpAJ",
  "key7": "36XhjjX1c1Vp2sD9zSUbxKPZ757775vtCE6f37VFQvEH7r8Xse6MwveBSakjmY58vDtqSQFAuq7KYxJXt7QAdEx5",
  "key8": "2osuyjN5NC8Qqxf84wReHwctA8eqqAD1nsJGGzNaYcBnEgk9QU5XnqZvqFoCdt4ebhNk3Do2UE49wRVaPAgNjwCU",
  "key9": "5xJoF9BAAUcfCrqtpKrZPYaaN195NtcY3xUzjDjgX6sw9dHLsCyCoCUMeE84p4aULgyQKySMa2FFcgJi627ZrKLM",
  "key10": "V6WfauJoXkkkswKF24soPoar4jfBahBeBjDXv3hJZhJMbTEWnAiN1EzntfghwDXBRWrDYB4VHHyUA1pAHrN91UD",
  "key11": "2Pm7MgARmdK4oaabtEK3ZbMWuGa5pme7GBM9cCt33ZY15A8hhSPuyWasaaTJdPkvQyo5FnDcjonUJtQWju8dXt78",
  "key12": "3PLr1sR5ZzjHngDpa8ZWWRpjsHgBgNEbBhSDXUK8xbAr45oKbtC543zNJhSzeLMMwP7hZNB8eWU6bgTo88jon37n",
  "key13": "22azxCapK9e9gN9KHQxrPkS3vT7m7fiiEPNkjZqqkCZuAvE337xJ4fxEUrzyVeMAgCtXP5ZF3Ghf8XG8qf96ttZd",
  "key14": "564BHsej79pkZr2GqLzPENuv4TaDFWMfeieaLTJKioBYRSHgk2Hp5EAt59HhkZ4PZonXKphD5UN1pQaifJAnA6Kj",
  "key15": "ACnhyJueAZReucc5uMcu4qvJrjTHhywrw9JN8PtAu17ViG8CzDG5VrrxXkchY2nGa96raAcaHGYvqtFwde54a1J",
  "key16": "5YStY5HJFvJnd5Pxu1jLuX6vRScsqLW2zqw9RMxbzuM8h91YPPmqSBv6ZPWxCfJBRY8oWLvUxKxhDKyaVAYEmYmp",
  "key17": "4yYMC4guYZkdgMXPgA3BNghGnu28NhwrmwgkSQxZfeP9bvp9veVfUNBfQyATMt7VRHQ8ZDy2AFwdwVupJNPEx9N4",
  "key18": "2dbak3WSG25Yvok4e623LQtcPVo7oqrojURhM8NMVxXVaEcmjpcw4ZXhw11tnjk5G13CBfxcNXxdxpE8iqLnRhDu",
  "key19": "54byTne7oMnFD2eyxe1hQAMk3v7e4gtawALPKLkJARXASWNR1LYmDzW4gtRPgCkhz2WseVRUFw4rKDTPRWbCGv5F",
  "key20": "3H2cqTa5oEG2qi5MyEcGsbWuKPVDEP3g7M2GvW53Gm9rA5vFRqoGaMDyxZjxWL2eYQUmH9CFirnbnw5Fgn3MokSc",
  "key21": "21NHMjC5Jymyfn4hJFCToa5QhFLv4aPUhkFKqJPhB23FVUhHyWEjHzn5FcZJhBx6DoXEYFjRiqzHCWQaUnTQVoVd",
  "key22": "5UwVTaP5puJbAqXWEYz2xgiDSAdMceJLkrkBxZcFXTcS14pJ8Ly4iz5RxVSHVhnjjEdLtnSLyhYZvUFrmpLeHLPp",
  "key23": "5Pzu2B2MTK8vg9SEVji6VUnvzVFYpMuY2YCAh4fTAMJzS8eKCEjqkx8zacWu23HvKXZRgUeoNgquZRBFyPc3pYED",
  "key24": "4Fw2Sp3zCsvTVsEK4eQsqHya8B1dUEfqFt1enbY4SwDTy76DZArHqRcemsy7yDsEcMRushzrxGU5hrM5LNToyTXM",
  "key25": "2C2Y5fx2Arq9anTbwnUig4U42Dx5o48WVAKRNv6wiQw243VLoNoYtwyWA8CPjqCbFoPoTd2fYdm7A7nNd895jTgw",
  "key26": "3jUUWW7gMW5ppdH2rqymvj4zivFnFtW74eZQyS2fWYWNCTehTHaKFZ1pfzyb9Vgj3MrC57k6hnnanWr7rzLa1gNR",
  "key27": "3sZBJzhTJvVrjpyKVWDEkEWnYS2Qvk3rDZNTBq6A83bYeRngN1ZjswRDvb8MjoUoRF34yGKuEF2iMrNJPWmGhaUt",
  "key28": "ut6PHnkoJhjzCFbRLHYQCPwfogFdrD3rrPZ2LBh1HJQ4F8b9kT29rzzyD6PU9AKeSQA3M2yF6nQEwpauYbQhzEf"
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
