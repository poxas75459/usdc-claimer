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
    "4Cw3bVusgzRFgVxwUSPJbSNvrMFeEVjsVSWqsiUYEqvjYDmK957uxeBrrhbKmHwE2rgtHi8aMfXtx4gnB9NWFcQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5enThtmn4VVaZxXuzFMVJyUmxU1APj8nTCCmTU2pDxGKBcwMWrHQrURyYxLxge9v64ot2XvUjq2wUymyrZqMnDsX",
  "key1": "uf6UfaA4pmTd6hSJdx24gKjDt9qDAdsPgGUweVqEnJHxpi8zbzSVd1Y5FWMfNsSFQxabiJqDoorXstCeHijYWXo",
  "key2": "4ndSTeU8X9c1N63aftESVE7BemVU9SmQ2caGgYx9naWAPwPAXkpEizZ37ZkxyyyCjRuQCEA2t11QW5NTyatnFXyx",
  "key3": "7MZ61vQPATZM4iqUXXd3kX4F4Xj12AkJVq5ePKsLDVyCTx3o7VchfFrdGxuXTq6BewEEWajWfiEpBHuqjFxVwbG",
  "key4": "4utmeN57JHhqgYEivMDk977MdRwyzYYNii8aKM3p9s4EmRXT4Cp9faP7rurEJRHj6fZnf8ZaFj69jpoF6YUj5Ndt",
  "key5": "rHwE6DgUhbj7mXb8qzqGEF4Xj5d3ERZMciPppGz9jVSbrvfhvDvdeig6WZJ8DRRBx7qbqBgsLSMcVYaoqWLPHvb",
  "key6": "22vxuctTqFnZUDiBGkrgY5fpYpJXtqPE2amez39XtTAnjQ2tTzsEGSysfqhncGFJkAHbLmdWy9aKshRsDb9NgZut",
  "key7": "3wFeLGff9uspYnSDWj2vthGHg27fzWYL8rFgEZYSN5haWZ6HTcUJPxT37hC6MUqyJQAFvPPjrdbEJV19ZzwtQwe",
  "key8": "RzojhAR59PpAkiVjkCo5tMDg9mosr1hx6gjiAj6nNKzNcRKaNpa9o9AfDyegvbUf886eFWr1GHcMY7gkFs88DL9",
  "key9": "5U9TPQmF2SzAxqV4UFmfHJSuTrEsmbK3RWLGMksYoVL7b28xhACoZkLEcpHT9nzymS8sXNeU9dGisCyckYALHiCR",
  "key10": "2wc29twpNAuteAbWxGfkk45aMAqD3q3WwvK15A1zpcrES1FYHgmaKJpJvQn9H2hPR8DtD9ohBnDqXj4dYBt8zR6Q",
  "key11": "3T2aLPWmeig4UjfWjj7tVfGmheTzkQHigXSKCoWv6cLvd3oAyB7h1dVPHrpnRTxojv9Fv8zHpQqKMSSThDCcgXx4",
  "key12": "2JBVJwaq4Tv4haSQbmfyFPmmGUXuuS8W5qMR37ovxvqvPjKNEbgMFjESPSJDekNDbBKZk2pv3v7y8mMarqXT8mwF",
  "key13": "3YzqGggYCjLAmiftqTWbyxnLmtYAhPdz6TEoj64HtbTr5W3jwZRzBAFbFdPNZES7v1zDPPbCTL2hLQPYCnnHzhFk",
  "key14": "tJWcYsEbAkVGtTtC5KXTCYrpoZoZwjmSKiShHVUm25VN5XLhCcGwfhcdrZqusyUpvtVRzXqos9yNRVUSvyQ91bf",
  "key15": "FRameaQ1fh77hmUYKmzD2B9ixmtTpyFogFN8Rka5YJMoQYhrrDwcCwqtC6kvYC5m2LhuWhEqhuSk6SV2rY5u3te",
  "key16": "3gHkzSLjQu7foB5GsQkoAau9cHRhghBV7yaswrJmpMpNGDrEwpf32Pn6ZUCE1EKmfnJZvj7stCWXKCGntTMbBy9a",
  "key17": "39PR2w8AKV4EZQoNuTtE33u9sZf9YPPrf6XQSb2kc5UNLFgG8p4qciq5Avka2WmekqJmdkDhp9hMV762jHnMPFvp",
  "key18": "3znBajxjfWDWdkft1jiQQansvEPA5UHKfjKEnTpvHKAV4xsNdYNDLCiepjwBmJzyfyZmUQLNJe8Up9So5L2AmzJG",
  "key19": "2CJRSaS5SL2f5zR3Trx4Ab4L6Mg4Rbh2JHiVFatsQg5z1yDpAPmwMXDHcDqDhZcqjcrJYNmjA7Nt6WWZFHgaUNhu",
  "key20": "8dHiP9fTSduC4oePDwBvsMkHyYZMTEq4FoxppqLEDoM3QVnm9zrVrqBRnnAFuVLpSTiYFxiFELe5ApVb9LUr6Wn",
  "key21": "4VgDXos2dxzy7dkJagMMEuKdiA7WoWTnBKekPL6UQt8kXrSc5qLYQCsTQrGG61FmFRPbd7g4G4DWjStMTdDabPJQ",
  "key22": "3fQX59XxNYhuc8Bz74fkg6dUkdMdn3ohg82X9kPicTqpRuM5cW5PKxCVQSmELAkw3LmnmsVi856EvvLkidef1p7Q",
  "key23": "5xqi5zSszjwWL6pj5c1QWP1knGoAaaCTQ6Cas9WCnGLSa9nFF3xYCSbBL4deBSs4feLoGox4BqJdrWasqJFftr6z",
  "key24": "2mb3pHTyS2cCXaEBTYvk1EJL524fiMvKiqWr99iS9t2jcVxswJ6Rz5aVMDZu6cz5hsAH2Y1KdX1puXuiT8bjxXHL",
  "key25": "2qH4b1ecnPrvUEtzUnR4kYww33QLdh3SnRm46ATwmLuCQnEnqJb5Q9QcpJtggXzmQag179DYzisGb6FGLJdq49M3",
  "key26": "4NGTDQPBh9eZfVT91RkLmCknqmCgYuJAicbJsHWzuXMmcvBYwVLRrYYyjJdWoVqe5tduTuZLg1FmeSPazu5RDi2Q",
  "key27": "5UU4d1kamMuC8V4kBNzRXdwV7a8cAU5ECxJ7Pt3wYGsZJ98ZK5EBsWWAou3zjJvAExJcWoPJ3y9wNqMNPrCzias2"
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
