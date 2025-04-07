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
    "41Xjx5CuZGkYhgtpph3f3ZW4iubhBgwEGXcCfzGjtTLrSP3SWCuHGwQfdpgrGmFG27UWKYkiSoY1PuXkDCUTU7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y52rAgmhvhspqKrB652A5Kht8Y3csbQqivCAMVASEuaeTqXfT4urY3eHGtttF2gYSeV8nznhkXey5tT4eV6tj7R",
  "key1": "4XAyAWLL4g6NzPfExV8Q1L8sHUWZup38XQqGEikCPPC3etvic6nxCJ2H5mWNtmtANA1uptT3DPmLikUcGECGXHPL",
  "key2": "kfRgDLRuKBeo61zGEWfnp5EbnCayhuBNpaBdNWqRwvLiiSWsx2GzuY63oWGwL98qNxrK3PcTpSBCtUgD8ek7kxq",
  "key3": "23guw5N7rfkVuXSJVsUgRLQL1GrKmQaC1Pt76yJFH6ZGAF9rDrPmTzzzBwgSk519VeHbC5HB4CJUSDuSe1qAZwMc",
  "key4": "4aBNrxrCPV8xWBtsQvQLogfkZg2E3xwVHhYA1Zm9QLd6DM9c2L97Vxub9P2Xm5iDwo5EZztEVVJB4bvxNYUq46Dy",
  "key5": "2VQ7H1A6nSgq399yHfncDhw2f1G39xVshp3vQH32VYkkZ31b8mPhmaHTACpv5Y3Rm9zkVLM6Nh3PvGFF4XTZUEYu",
  "key6": "3nn7z8xC3d2w7GQFf7D4X9tHcKDDJJ8r5kgV4cnFYF31CfwH6V7aAcLcqqYaX4KRuSaKegAkJUYpuruy5srRf2Jy",
  "key7": "2dSabFhaJNC4xypEFAhnLgzm6jEa4Gh94FmFZDovJr8uPjiNDZ9YDo2tz1m4V5taUwQrwpmQsJXCV22xpwbeHcKJ",
  "key8": "2n6GDZSZBYp72AEWuHiMJYjM5ng1hr5JapH1Qs5i7FA8Rjw2J4tsxk1nwD3TbwpWztczSw8xtJgsfYni7ZimnJd2",
  "key9": "3ZHUrRNibKhAivHN4Z7CnqyXVhEevdNCTUoRHrPXxp9VNM8ZPamS6HfYh3n8LbVqPEbc7z9stB3DotGCgcxcsxXk",
  "key10": "3kP5i5i3zUqPYwftctszz5KD1DF5RggPGM9Jmg3t6UQMEMDcQh17aha6BxAfQETrXpqFweVXJtwdhaQ3LYiHBPyt",
  "key11": "5xn7y7146B2WsnfP4q4kiEWHJEXLnQGBVX6Z5kSjj6XrA6YPUcNQruPQYYdfxLTYcgLJYDB4PP7We8WbVg84XaCK",
  "key12": "3N1apifAPsgBKSX9eZfTrwtGiFwFwY1cytJJ7mNW8gbCjfVxJHkvKduvmGtUmB3459SnTRsuwuqVMeMCxvBFdNTA",
  "key13": "5pJMfcfad8kXQSquzXaX38JBAySRpyyGhpFtqo9F3f2iD8jsXpQfc9odrjNzmaf7GrsmJbAYXh3NC2v1671TTx5",
  "key14": "34fEcMw8Hr6bsP4pRwt5WqrPggRA9RxNnMSrmq1BKoGG7Gk8MUm5fSyXg4Ms4SfsrBz6L3JMenFPYGF65d9AU7BG",
  "key15": "4dvb1yFe3CBJq9qgKb2pjPvj74MsnppSw7cWC1qSYA2wt7wjNET7Lgi38znSej1GJJ2YNuuDJk1X3sFc242aRnEM",
  "key16": "ezjBpv37YW3q89dxG752iENGhyMyHW5b7KGVzHX3FNonS8ysv8e8roij5tAqdpRNknzDBwVaV5zaSUFBCPHK1pD",
  "key17": "zsbxjiPB8E3AgTTwY4sGbHTmrHY37xVkQvi5mhHmfovxL9mHt99tbhAfHGFJa8cQCdBVnWmPJCtexZUM9D4TkqM",
  "key18": "3meRyjCYhHsDfxJv3QyzEe7mBe7uCqyYTMp7fJSAEagEm8xECHaV55SDYyxFKZnw5Jd7BB4KQc6xFU98bdV4mgVP",
  "key19": "3FE9hW2UPdiwoiJJJSCwHLRU1AfAY6E4Y6TCn4fvrLGwEwa8hZEvK7W7cxuHjXjLPdWAr9oNSpdytXUw6pur8kvY",
  "key20": "4Lw4xW3G1MRxJSRWKSbjXZCx2Fpq2frGPYu7DeZZ3CPsVrB5p6PyqUHtshRohVawnJwrPkW8o9Sbo5rTJR6VdzHC",
  "key21": "Yz6pH4RFTKYTfS8vHQ4yrtB2A9TyM274Eeow99Jr1AZgNbc6LqfxQgmd6L4uf8mNdWjwGEYZpwWdC4G3xvPWtXf",
  "key22": "8srJGprueFNsAPwPKFVcvqVJMHPpgQP2iP4oR1k8icSewNCwWmvntDdndFBBMQtPd3DaHubYuLpH2zdNQfMmpB6",
  "key23": "4HXwfr9XFSnDCoJqKq9vBsjpqBM86pTc392ZTHrgNF9mNRpcYx9ikLLHn4TFqviHwsoPhvgLZkktuuoeo84bzup8",
  "key24": "djx5u3g2Vhp3B4htMHeZEgWgY1XHr28wXjuDQkpQDaxMaxxJCzAe3Ek74NYfmMhBNyfsv3iPLGDMtvFkMymZmgN",
  "key25": "2HyjgBeg42cbYxYnCBmj8DfuNpxJcsH7oPHqNqTckZ6XiSL2YZin536KSug6CoMs5kQapCihAchwEVNuJW9gkCDZ"
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
