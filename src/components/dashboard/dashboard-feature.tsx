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
    "95A2PwQ3scfnykrbhsnvDqn9jVjiWgWs32JZkacytbpv2R9dBEtJ5bfhBLnkWFgavK7hgXakm4Q9o77nXv3k8P4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4Zjt4xDXWGAS982m83Na1ADR5mH9JG4vpXjEZnTJZyQJ7fFwJcTuB9XuW5d7UAGKCDvTLYcewGxBqHgeCacMRM",
  "key1": "4qk8Cd7JBhhe5bfnKgdV1Frb6fS5GYVNxSXDjkehHeQ8jZJRG9w2Uf2MkFdv3G8LKfFromPnqRdggX27UwfjLCnT",
  "key2": "21rMqxGVy5x7R82v4iRBrgsVEsVeZpsFqWTdnYuNNbHZVNgwqKAZXFBVvaU4b5sZf8efP5aHRVh3pwJyqJbtW48q",
  "key3": "2GALsLGQkwFMMEnuTHLJeews1wQ3Z2S8CEEsmZiSuumkfiRdKAfNfcJq7772Y5HjXV1eVcQucEeySXQs3BpWqrJL",
  "key4": "2vbUhFQeWvLovTZqEpW2am3obu1h39WCaaALMxh7RdTtu6Ly31X5p5wWaToref79JuyRgHhF4vbo5jpPU2LiTKqJ",
  "key5": "kwtxKXZKWhsqom4p5pjZdr6o1Jg8QYoRKPLVBTPA6ULV1L8A4MdYCSGAmtn9Vwjn3TUFcG2WPRgh17HfstUychg",
  "key6": "BxnTPnhtsx74LQikPdrWC7CrpQuNZEmCZ46f7HD6W2xsszaHv1X7E2yoMu8G4hPgunmzKmk3AvgpuMCAsEubDvg",
  "key7": "34MfUTk7fkKjEPUTz4m84QturANoVoALkrrWJiNwt1cjqTD6yTHH1rXxKaAgw69D51axmT9vbuoZjsbhiD2iiqBU",
  "key8": "2fX9ofiU9Tb36GUskwjfNR3ui7zaSaq94hgXET6LAVpVUyhcADgTzNk1MW7jb4jdyHwBuoRaN16np89BsY4iU277",
  "key9": "5GD3HURcqjGndu2xBricJBDedmUVgAunjv5YX8npqXf6Cx5nS2p4kMXukvpQFM1zUffjeNb89fyhLRwF69fd3sWH",
  "key10": "gX3DcJYEXNchyxqRUgWuiikZHgJsapdpZdjR5Pw1bhoMxDZZfD3rSkBnGohg6vdTYE6B1CJ5SDd8tRgtw9UAWy3",
  "key11": "2oX2AEnVkSR2ARRDP9CF5zvwjtfPK5DKHMfZUf4pFPwuxskhZY3jrtewfiZC11kQv311tAEemfeY4atLc7hK6iAz",
  "key12": "3kxCN9J5U4ZevPGsJUQeqSQscu26K5CshiLgNyMFX6DfeYph6jQB6fGW6dEPCcX5QDnV49whjQSYC8Qwd5Csamhg",
  "key13": "nqB9UDwysbV4Fkks3b5pg8P2yZhUuwUSD7CtJXcpQ3Q5NQ73oSTmzdbgpPyKFDpBqieJDNWEeyvz5Fa7qVLFDZu",
  "key14": "3R1HVzYWTpcYMYJdKSbvL37vVkuJTRv6zs2asYwSLK5SWwYkTAmN4umpogpLhvaqc53pJWKS6NBQZYQvFL51c2W4",
  "key15": "3vrJm7asm9qmLiz8uJTsJALC7o5DwSYv2nQCc44m4PJPSiYn2TUSDneeTqnhAdZLXHrV8UbN4hdRw5uQHdetHzC4",
  "key16": "3yLthk8Up7ohTHmnYgwv99S2ssLvPQ2FkDofs5D8CHyYku8F6TMxSbCag5YLZiiyX8CHYTNc8WueTcB2LPicR6WX",
  "key17": "4KzFFTwwj4QUyLB731FPNQz2a2X5cVmrRUiR1mT2BtK5kQpL33GLisLAeWUZWf7A993BX6uCfKTrZhEkXzx2bC3U",
  "key18": "cxBz7FvJaCGn2Gvz6nz5kUmiBymdxLdhKkFRcnkEmMVT2SjxXTBWUDUJGwH51tRgQcZeCqcsmupHW1YmaDwwZBn",
  "key19": "4C1dSpfdXRcp3khad5Phioqzg4yUkSuWNEJK19MMFoaw79XNQG2W4SqVMWARsSUJoVkSVmrmSUa5ntJZW9CR5EXS",
  "key20": "21xrGBL4iSa5iBYhtdmAAqP7gRRSgEru1ttM5fRyiFr3jNvm8Rucv7S29CbJvbrcjdHL5C4vtkRkeUURwMCEGJbM",
  "key21": "4Fcw7EQ2eQxL54Auw5oGzdjAMJUhpUEYi4aCYWN8XJMzo4KT8fkemje1Atw855WbEhKCA1dXwHarfJsH3wD5ePuR",
  "key22": "3SwWNWy4Dbescm5Q177mhGdAJKYJE4whYe282FokdYLpPDGp1LBAxqcWMHsh5CLNjR4dF4dwn7eUomLBV3xMZndf",
  "key23": "3u4unKAsNQniomNoAmhC7P4RgEsCTGshJPsbGNJzhQCjhRwSwrbn7thg2hLbV6yD1U1mn2hSrrvqMJRKHmEuU5fA",
  "key24": "2WfyigibbDp4LEaCU41Ck33R3NKBEEbAsUYTS2nQXcPpUb231uSFxgPG6G4swyKUr9epeRqNhPwndYMfviHHnZfP",
  "key25": "5CPpmNcbDibGxUf2JxkSAUQMVLd4hjpZR1RR96XnN4b7uP3Rietr6PDqUsRxdQH9tTnSq84aQ6TrpDETEMKiVtm2",
  "key26": "641o6jEk3eyMzEJgJ4b7GM5f4f8oVeqBEMV74HaVtbgtsxC2wJWqqGZJkFXf6M9Abib3LKzdU9eNwKpsxkLLdzHL",
  "key27": "GmbwWqAY5KuCWoTD7j1r8Wh2jTTpPNY9sSV27P5DDaEVvD2R3o52jtDaECT7TPeyS1QqAgXRTPceFU8qQ7WnM6n",
  "key28": "2euXEseR6VxgR588qvLQ8duoXYQ9HeTz3JR59WJDLy2z7T84R9YziBEUTsVwjXkgUzcotLS8v8pc2aXywMXiFLAV",
  "key29": "p531mm7r4tRQXRGnB56JzkqkBcgUfadgWE7p257zfXQUX2yEpfRbg2ibnSihSQwvJkojktXG7RYTP1GUi7o9isw",
  "key30": "3XMn86N8522WSF9RRRCUYys8qVthNekmKaZpi3zQvXFHfKyXqh6vxYAzVVwiSj9sDTEDPbpvvn68XL2pELABN7qe",
  "key31": "2YQfZXjWYrT3suADa4LPGQkcxFF2JoiunMecysK72covJhWTaRKgEWSzV5WQWwE3FiDWijxRd6WPVWxpg5h5wTxc",
  "key32": "2GsnnRTcuo7CPtZ4uz47VvwwzHzHZFHxTfrfGnna7YJPGuxxQ3eawErcRB1M9NC8Bgd2ii4wE863yfHN3R2muyqC",
  "key33": "4dCZwpTgGbFScXtJUP6mNTiDwvRc16oC89VyKrCupVnyPPGSRYiXuXbLgJpbiZf69cfdj7nK7UkpkfKvQFCjYwi1",
  "key34": "25anMEneL3KttWTEsqTpRhEzf1hKQDS4qbgpCYQ3G3MRzDv1ckgXjQksi95GACmm6tPzdq8KkAmss2mHBzT4ozZ6"
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
