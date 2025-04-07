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
    "RoTnd5uc56EMoVzWZHovNt8ZQqJmWQxGmn7rxWqJMTJb63fXUqEKSnrScphNg8nU49MYjyPowiTKGsybPN2j5qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sMnFxnKjE8V2WxSNj7dVqLw91Le8f6UHsxioPBPXeQzabR6RvoJoWnhJrQA8fY1NwQpBjWMoz9NULKJmtE2FBrn",
  "key1": "2nEuTDFHSpH9RTc13wivLQBHsmp2KyLjnDQBVouingkFpzpvYSQ66CKRhjvzRC6Cej9fR63bGjJkrAQnZhcUBknY",
  "key2": "4rc3mYmbqe3Qje4yxjJ4hF6FGo1HYwUBmYwicttymSqTh7UChKxJMTr2mbN57cpmhz9DurEPFLzwkuboL9pkAoBP",
  "key3": "3nxmZTtk3goss4AihBRXzaHX7mAdWyj1QiAt3C7nU9doJZkTpqHG79qCGZi4fbJzsAVyrxPcK9bW2PMgQLKkgxtq",
  "key4": "448PnvGtXq83YW622SzrxKURdfUc1qdXKPpgJ4RFGCHRKZcwmtRtf1W8AvtSywuse17QW2pb7Lqmg1c7zMxoSLZF",
  "key5": "8Nhbs4EBDSuySmTAXyxFnh4bYRkkkgLXebyeW241Fcr63ay7Ns53QUU47kmy3KehCVUopXoL8XPwxnJK5pTde4D",
  "key6": "5HS8ym3y4eELtXrKd49LJAJUg42CkBEmjJsjxixvBdqocPuvCtBh4PWdLyU6Yade9DwSNxdxVN81YmMuPZYgf3CZ",
  "key7": "481rGrbEQUhqSd4tv1Ab9QPMW5JTmg5Q2AGPFZwv7C5oyeNHLkVsxGJjZgvUbaGha1mMtg1FbzMvVFKWVAuh29De",
  "key8": "KqXuiLD7dNHq5tAoecxmd1cVHqGdZqab6YuWoX8QpJrNYv55PU7b2a5QG1fvx9SGgmVxkkm3dprfbf3UEVHAY55",
  "key9": "JEetQDorLNAZyqeB8QkZS7EEqdQB1DSWevPyEfin6ATS2zTxqb8bbeuqXU7mHJrgfVaMbe6sV5GmCwW3m7xjgTu",
  "key10": "2wUykcPxQsubJMWLpSaHTwqe5KAH6oCVYHVHJYW8hANimte7iTwZDg3pkWsjaNDyp6Etic3LRU8uWzX7z9rp2vsv",
  "key11": "27RJHsq8D6RK8CVCbzUKCJG5Ds8mcbKyY7qdhtVssEfQATQoRdZZpwM1NTAShixoMFaqxcjBYGzLfrBeavqwh6WY",
  "key12": "5tS13jcpRAeXhe32TeE16uHLxv9sb2ZnqJ94yoCwY5w9CtM14zrENBT1vztdEsJN3ygfBZGNpjJ1nGvgYfaPbt9X",
  "key13": "65SUcypvRnwQiH956wzmhEfZLJPq7jSR3iG9NFNLV6VT9rcQAagVY5HmmfSVaaQwKeQQDynpZWnAHCnBphew4Tob",
  "key14": "5PyVZqkEDmEJdzStkQfrJocPWdhSVrdk5iE1KtMnvpYTD1ntZp13y95wBLPp3z8mGrdAQhsUSeB5MquNjfEu8k11",
  "key15": "gApnLytnQt9ER55iMjCJrURJiS6CEWquUqhCFdgfRd1HbiMYDMTrKzKpeauE1rpTKSzqJWvJJ2wDsqYbgfh4QDo",
  "key16": "3QsjM8Q5XmXsgVFgiRLX9SmzcsJsYhnyt2hKHTZo9k8kuQD31PvQUTyMopSSAcMCMaDAyHcUxf3G2ErHaPYmpaGR",
  "key17": "2JB8wR2uukEoS3X2iGSpvMx7NaU88SxUg9zNfsYqG5d5DdkTzu5aAyAGjyinobQvKbDbPiSBcnaUDQneZRibMSwa",
  "key18": "25KMMsnKkNGcxLUwVYVu7tgyhxvhFn5W4THam3aV2phouMxnGzepwv7qEKxvjSirftVuXVvMwZcFKhAUEiM7yvqv",
  "key19": "3CGYAvgFadcDrbxigrxBwuBsfReJN2upVkcT4DJvCo6PV3sUzuMnFyd9V5DeJtpog4iV9Ly4G1og7jSDYmQwbKYg",
  "key20": "2N1UkKoRRAyNK2uZkmRbVQBgBb9gfzfKWxQYe1zD1khT1jF9ogUMHXEALVtoS7ipuN3mUM1RKoDn8StP8oURGijq",
  "key21": "4ZePZ3Y4sy4ytSNpSxpVJgokW1E4BtF7Rj8EbaysAPiP5eSmLGB9QdWW7hnsoHmSPtxN4m2YWBgVeZcHf7BVAkHD",
  "key22": "2Mi6ACEpax4sLNsuyiHMJsTUFe9HP23zVGX8LYSomn9wu4shnA8iNPPdaZ9ijn6p2Foghq1d3tczUUAWxfZY7GMz",
  "key23": "2hBepKZA7MwZBaMzDmZByFyAHZZZEf4Xx97ampJsKkNg3hv5mGyWAE7acjMPSbx5Nm1t7k8PxNamaSCn8TJMFN7L",
  "key24": "258Cpi1y2tRMtMcMaKP8KevAgqfD3RpKWNtBYYDR8cRGZsw3MzPJibg8PEVBEWuSrYyDAXc7zBtP2J6RH17oBn5k",
  "key25": "2HLzQUpCcnrXSqDUHEFvK9dhJY3vZbZNE1RHSuUFhs4bn8EUf3MGKmb4Z69XGdteg7Vd4CMtSTDYFwRDLVZ3JQAm",
  "key26": "kSiUwepARZevN2Pusu41cRK3M1LXovDiTJjb2WtP5LYh6fpQLT6LQRk15eXCKc86PcF3utKCypoQbgmpXa3bUga"
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
