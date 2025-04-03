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
    "2N2AzPCYCGn7D2bZXvmtNfaQDH5anRthNyLSmWBEDssmXMLY6V8nqs8619y6hd34hrUAx1qD5DudMBFESw5mwya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E9Z6MhMCu8Nxj3BWq63VtcnNuhwjSJThpV95rYjt3xoZmMAFekgHQ5AEonNt9haTXGAY22fakLw2PaqwV2VsyYj",
  "key1": "3RZCJ9eqFrDeEBtqc33uiKYCyLdhzcfxNZNmmjUqnqvtXKMy8A2wqyMgvFMHbZRRZ3kc5p471XD1QjgiN8cXfEx7",
  "key2": "2v3zCMVjLAEVSKGWtyyA9d5AQ9UiQsDyQCeBcScY86econiwA7a4GMAVuAwduzAC6uJioAfVeweJ4eZPqCL3tMQa",
  "key3": "4tubLF3irF3iDVSvaYoJspxMR6xpTMB35h8TW8ZK3RrvYnb7tom52bhhGiXYs4NbdzgJ4vTcZxUKYvXWQjqmGVjT",
  "key4": "2UNxvcCuMKr8nQF1ffDvXq8VHeQntzEo8rrHiqB6oc6cDnW6Ss6qFgDUagNLVVgRX486gmpRG8iVAC9jzh2dQqtb",
  "key5": "2GNkDmJrREWYvxfpRBCHEitRgHus9zGz9JGZ6pLvgMBVFJoCzvWkZ1bt1Y8SGyiBGrZpDoh4xWCXYdivoENV1Zit",
  "key6": "2Ku6PuZ8RG4CsTTQUb6h2cj8exnU4ft33vPLbs4SbKcYMs6BKbECENTYFue47aGH2YvPV5WjNak4rJKyTZYtrfqq",
  "key7": "2xW454dQxvNE7ch1WaMy8wKBG1SkwyESXSLk9WpZcPdzngm85r6ZGYRpdCBpVV9VC3zoPKvUxNFvfbpLAtUVEeaU",
  "key8": "2H1QL7mEEUqstZPi214XcH1uV1zfBKVsMMEJpRb11js7XxTzFCiQMb4mLhpt7y86JCjT8irVyfqgfrmmoSdHvxkU",
  "key9": "3bqRNrJjR2ZayySbwUnHaLWtwE1fXya4VCwYGhn8qu2tyJirjFUZv3xeDD98oLLuknssN9xwhSKzz2XJDr2X3hcX",
  "key10": "3G6PUw8DP2yHCtgZqx2uPuiNdqZ4q4WuZF6uEkKJN1mJZNyADPKLk3RkhkUCLsLJirJcznWR6LvnrAQm3Md5zoko",
  "key11": "2VSh7v385nVVRHunGPvpqXxPTCyhjeFg7JUEG4qRwNyRJHtXJLjWuzodLZKZPfrGS7qiixtG1TeaifC9H8BQ8xds",
  "key12": "3UNX3J2FyxVp3SHvqdNsFQLtpCYARdNiXVLz7bu4rjzdGM4QGA9HDCj9Ck3KfxHPD3zjLGMQFE8or26RQ9R7HVLL",
  "key13": "3zf6JymZUu4aRkzJgzDNw9HKb4QZvMawzgSp1E6GjTfkig7DywEGcBBHCkvT1VUZfshJkL858napNSF6CW2ZA5dW",
  "key14": "3wi2fuk41nTeo4ULmUhqFWhLLVZfBpesbhKrpZhp9gcnct1FZzL58GwTU2TtTAGmRE8vmRf1GLvSPTKaZDEprUBt",
  "key15": "5DB3mZ1TruVhBqiavNYpWYsDYMErMEJc5bWms3GCmvDhVtKAA3Yt1XjCFZgtDKq86PVsT3f6BSTMWynz8LxYoEJr",
  "key16": "Uy3i6BmD1gwRb366gstAyko8k1f1ur2juh1zXe4Y55RuJEgRWQzhCj47uEuDZYYrBHASQQ2RVr2NT4RhGkfZ1dX",
  "key17": "43yBQhnxHo7iePLdBSRkUJLjXGvCwuS1iSseF33UQchmExVKSPC929qczfAFiVCNE2P9qq2fvGzvM1LWMTp4n1jD",
  "key18": "3ScA4ihnLVoxKxga61EhZcBowTrfFwovoiE9NAJxuCRwjW91dWv7bYBjidJwzBLV1Nh179E1oMeRLKchmBwBEjk6",
  "key19": "3bJBJWQPwqnZgkrqpdZrgs8gPEbEkBRC1CiP25VHVHyZn8RwzwwaDTnsyA2ovjQVEESrt4VvkCRz8MRK2pMDgyNs",
  "key20": "hPLFTrC5gAy8DfGdS1x4zd1ybqXvxQRazUPav7gAWUo4cfPBevbgZVT2RjBLLM5EvgB4pGyCSyziuj1u8RsqA1k",
  "key21": "22oAbe3iebwE4861gVKAqKyoz3dEiBMWWTH1UGp2ruexcDB9FB31vxtv16Ezh5U8ehthcBZa4o3TXEB9Tc9hEvMK",
  "key22": "3SephELTuhscQDY8BtgYvdzFSC3RV2ibU4MKuGpEXsoiwi9KcAMNfTHmgXYTK7xSnrEkWHKXJN5AwbuiP9bW7nru",
  "key23": "4H9tmrB3Nu654nGTBfU7CevVuRVugqFtibcAqpxguzF8TeEe1BVBcEijSCydUyuvGQm5RJnFdn7hWE6kkQNwx5HB",
  "key24": "5ndbK3otndAC7DSCZBawkKFzjMgNmZUcsVZY7oza7XgE6YvkFCNU8D71kNsSD7hEnkDqGYxXiib6MVR5djTkcevi",
  "key25": "4xiNbsLzyWjWytc6CtduDK5Jg1NRdT4j54DcbTNh6ptotpEUgLMwKyCDgRobYKnBrJ6tk1zANWHMGL7148guQuw",
  "key26": "3nK3CmxZghdoAhDaFopbuQUNPkrieVFbxccMFEyP7hdJ4QkKFZbbFbP3WGL8vqAkkmfxLMTp5jkWG8jpsPk1u81b",
  "key27": "5zdiq3NFdwcj2FVCBR8GtwhQoP1ioQcXaKbvvHvvz2jdD2aDi5GwSR7xGTfg8kk5ji8tRepytjTqvQmumx76nqZu",
  "key28": "5GayJLDqKNDVQeAUe8vknmD1vD2yyxNggipKah6koQfkSTBDRQTupTMFnMmRNmi7dnG1BUBgNTRcD9NgbU6uLVkn",
  "key29": "3mdZktpUdrDKjyhwPjSV2DozfwegPWK44fwKfeci2iLFCckdis9peiVPUXcavyPV5jYdvWnTkVZiwJX7n33dpu4N",
  "key30": "5m9ngQYNKxBiEmTmodhkG4Y81h7Zjj4KtsocmLwUrFzGa6ACRsjRGVvmCBVrwu8KBqnWT1d99QKGiJvyQQ4PNqjw",
  "key31": "V7Pqunq919zRiHgFPpkFngXD3YVM1RuHkRawkvNG5MC9GeYLKjRLyL6yurNmjfjcYKnsRNWxhUZJJDtLPG1QpTe",
  "key32": "2rd36SsjzVNjFzBW2aq8hVTE5iVNpmTvHLmghPNAtcekN1V1NzRuQRRZDXvWAxvbe5duDtWeXRoiT9YezSexEEZV",
  "key33": "5TSMwKPKU8NYdUNTEmiyFqEsHR8DcwvqRmko3gHJfMXevboWFJ9CAMZa8zL3QPxcUxnEZgsmBeszP2wCrvz8HvYT",
  "key34": "2N3szCo4iQxbHRw8nsyVFDWjTczQGaupMG8ea2vt2nn4rNRnShnDK1ncaB44at5UzxCYyPEmNetAudYcwafrZFSU",
  "key35": "3MAYnKxS9cquWj5SNpnJFikpB1ZwwTbSxbJ9FGmvsYtTqUYT7EfSnbvXLHA1n6nWFWYYytSf3LG2wXDDawi7A1oM",
  "key36": "4h5Hg1jBcnUj3uewV9AozUZY2ZvPPGt1gwwGVcevjqXZXANsSeK3MtYz3Jh32s9a9xMt3AmwTdCuXG1ALAJxfACi",
  "key37": "4VNRYAA1y8xFkcyhzjuzbgueQR5YSG9HJR1VFRVz6jHLhQXJ5SKstvgufCPKJ7GknszAGbkh4PgB58n31yTAdjZp",
  "key38": "2Q3Dbmg2VeSYb4785PMVWLXCSs3m1S1x6Xs8u7QZPBoBDpzdp9WZ9DLHsXkhunqZf7zBsxNpaMwm23SnQaRiRiWK"
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
