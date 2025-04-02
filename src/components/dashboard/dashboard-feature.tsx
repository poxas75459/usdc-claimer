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
    "4oXTbXwhV15RwNDdMfc8akBRV3mPbYhBe8fVDwUXW58HtUQ8vcnBy2rGUswqKMHXytPSm99Etsj3cwUqK35h52im"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37eTyjgqDBEug3FYvM3LYuww5ABNopT672CAk2PbLDAbaJnRM3i55SebgwtNFVXPMA3giLDhBWzoxwvTRyhTjKhn",
  "key1": "27fCRVRuW8qt4EGtoQ4ErPQ2iqYRMYQW5auEW9mDJ3P7f4TecSF6wZYNTPVkyLcgbJW5qJZzEqTaztwaYpxSUWTi",
  "key2": "3EemxRwn2UHTyRWBRRFpirVyLCPf8UmzTj4wJ89KrWjxqm4MVdLXGhNEuKw6FeyxL8wG23jp4Yy9CbwR81ZZKG7o",
  "key3": "5uWD4ohBquFVYBQp9NKmR5w8WivGZnvx7bc5Ds8zkPgRpHq56Yk1EiD8EtN8u9a9e51EEwWW9S1jqfxK53gN3zae",
  "key4": "2WspPH6CERozKZj4yN2S4tWGJLKkkWSeUc7dqcybivKAp7HfRvadbyznRuaX2JQCgAjHNQfinBLhDN5b2c7Qghsh",
  "key5": "NqE7k9afMZNASo7DsDgXhqRXcSgVfyWcJg1z6bGyPQRNh9gxi2Uky8Rsp9RXx5kzKVqhkVoRwhGz98vDgSVSkhM",
  "key6": "REvXfFrGACejkT3wJynLzP8XmVymuJdiBQ4mEanS6vppdany2ukaqPqJWTJbNojP1P4dsih9CGuAnTmphrgzwBi",
  "key7": "2LoRXAEx8xVd16cnhL2488UCRbNSnKCVs9L2pmCZ2mJwmn64cTLcae21XZXbBB7NE8wYRDwhjpCF3moXXcV9rSp1",
  "key8": "3bG8NcuxE6VPt1NBPsh137XTcuosxMZ1B4ZCtsPEWpuuLnbKKxdkeseRWgqkzZc51TRwgjvRrYe4stae7iGZawPU",
  "key9": "5E1qq3kU3pd856a55geQJhKZ1DTzG5zu66zxPKkaUqgCJo8de5kGSpZ46JZEqNw5f89U59mnPDgDFnZgvM2DG9i",
  "key10": "2aZ9GBggeGH8V1ad8pzpEkHqaeFYZ4dWEu6vVuSYD3TxfnBX3E16CcnXj5qShfR6D8X2LKCivRjXa5dJGNbFvWBh",
  "key11": "33ypspyTKjum5YX2NgH996TXHeYpMRszxrJcWgszSkje5FXj1r8o6B3VeMw4PvmwpmPeMdeGkc558aeMoBr6uWjB",
  "key12": "aD21qE6ZeeHUxKUpqPweiGSHzshzTArwSsGFCsof8iX6YNDBvZSTFQ5FNHkNcnrpXsC9x1KP91zLUqTbhmZk4ie",
  "key13": "62hNqnn937p7TpX3AKY9VwqgfHSp7UwAZFtqS6wjPJbXdeHDNbM5dGMmoeRciCLitBB2L8YBY6xeyB9zxrKPdqW1",
  "key14": "4Qe63jWk52Ubtmq2Az9Hh4AsaTJYDytoi14hhqgF2VphJ3NfrrDcokawEQg3qBFBGFaB2e4uZK7DZrJx5R1NWaRN",
  "key15": "B98od99CWaddhaBnFiu8r9ZrDmKy1K5SThJDgjteEWEJzZvqCZrUVLigRFwxGqtnqZLJeoPwUQfnoEy8kq9MJj4",
  "key16": "4yws85Tj1ygwkE4EyeEC6Qs5kf8hViNF1sbBJbSbhCxBTJENZNA12iGSAXQ8kNtV8KvPL8Wxn9t4d6KUQDNc2KLA",
  "key17": "5NHtFPYGgdcnF89WjRqJtKfU5ZkuPZ5U7gE4rxZFkBknx6vEq12GAxZLdSjyyCv1HoBAikmi1Vyn2KBSeHtjk94a",
  "key18": "2eT2g5nx6bxtstzF3Qrf6E88VHMgfA2Ai1VEhtGNhi7JHCtHdFbSuDYPEBtmH6C2LuebEuSGXtGCLNEig1bLVk35",
  "key19": "3Nx6jiLqu1AStBJYTcGdUAuwpsXdEu8zkwaNZ6LYTey7wRA9aGRitZ5UZ3YJkgbuM1G2zgpQrELBmM2WaWU2fbn3",
  "key20": "2PyKYpc2m18sg8QVfPcgt6hnZFmFgPCHMfkdAGfwoZwtw21juyoKZ7zGNxycsM15tnn6iaqzWAGv84jZLHhDaegY",
  "key21": "5JX9zd6os7v5G5F1qeVLXpP4j5eBwCnFhHdMw2dg8NB6MBmCDabShpQksAawWDHFSKLL4jVRdFQAZRFt7yMz533P",
  "key22": "3dog6qSrewP1C9qmeG7kF7hg6vxgEZpBojDEdQCtt9TYkzPYWEB2Kys8RccwQH6ZGoFKq7BssNTvmrT6SsmgCmMH",
  "key23": "4c7uFigU7R159vY5HAtLKH9akJ9XWrWbNxYQvntoTmN1LBUUXaRC7FuNUkPqYRUjKpzDnXrVF84D5LKGzU3hVCy",
  "key24": "wS45tLexpapy4aPVcukpGx1Q469eTDmEN5Kf3tu35KEnXQSpBMmP9eSZzjip7qkGywiRcCzm5w3GoW9FoREtHPj",
  "key25": "32qyNsyED5vr67ixsTc6Ur49iJz6LeYSvvQT3GL9kfejEgLj1iU7FRkCP42YRznEmGizDQQqGFPDqSqXQknCfd3e"
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
