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
    "4Ro2dBQ2HJe81xUnXHdft3AFMovzs2WDS5sMHsUSmSb4mi8c8i9W6q1g6UuMYgA4VAtNhiUhqHSPjtNWs2TfSRwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPw5STDBSvkx8o3k9MLCUfFJxupw9dW6AWbDqK59NkMzKT8FmZzqNkGJJY7kPc1bU9YJn6J9CmdGHNTEvXW1HQz",
  "key1": "yND4TQtUc5h8v6i7Sbb8FoEem3nbyT3XxGH6v3VVWkbEvD2t9wrx9dRAi7imbhKPynJSwSiVmsgeH4fWhD62weg",
  "key2": "3EoYxBqYq6eCQJR9WZD1gJgavkbksKexSpbertMRkadY7uxgTfnaUqCDWW2Nb9BgovAmaohbq5tt45iEev7Di5TT",
  "key3": "5EghoNkbkxXNLaaMS1XpJvk5voiDKvbXDc9QkL8wNHqciFUMzx2VV3dCefSmwJnPdzZT4pQCkcEZd1gNGbZSjVKA",
  "key4": "3uLoCk7c7zmqSGJATsyvCHevuhdWxE9tGSurw6X9iE1EuLEJReAv3sHhpjM555qoUEmFTot98bv8XaHFWKdeiSuk",
  "key5": "3zamWLt15vNHKj1mCAQfRtp7NAvhScgX3GMLTCLct8ojb7VpL7cq7hbNVmF7gaX6gvRYTVXb5QoacZ5Rzaa4AghQ",
  "key6": "48xhKDMesfQvBnE3QN4QUVDEWB8wGfjQsLsLZpAi8suYU1itd9y2BjpHPgMdiugLVxLZzDqAt16xmthQmodQcW8Z",
  "key7": "3WdNeHjfVTmLKtctVP4iYi8X1hmFxEkdpEJ5T6xG2kFNs28HZfngrpZJr3nY9wu8AqVdvBjeGEQdyFbMr2gn23uS",
  "key8": "3NTmuafjteqAYctGMSDXuPhCPWg5xo1C7TWZoCLXt12kAhVs5PSetChUuPyBkwEbP76w9b6CqMn238khV5GArUNz",
  "key9": "3M1k8kVMAbirqGVvp3Cy1imwNdszBtGJz7ALT5EGp4EwjwfFbpAG5v7jw1pqdjJc7xrG1aH6vU8v8JyRVR6VYtU8",
  "key10": "vGzW4Zvmdmk54jr4aT49qzHfJRbjdG8eDUE1BRdrX8tmApFS1GeNi6MjfVZBF31VQkP6Xem2pbv9UtVd7an9xNq",
  "key11": "46M9GbUaYF69yYbDns2nyjHfXdshcbCX1hTGLNqLY27c4D6fT8t1yHtFSM6rwfminep8cYedRYhdGsB2AMWddyfZ",
  "key12": "zEK1VWfoDK73oDfoFfgkuY3jWGAPo1rrjaDEUG4RJxxi84ASKbUwac7wNhfyozVvU5wZxz6Vbup4GgF5Kuj4GhB",
  "key13": "3cX8wajyGfyV2VhFjza7a1yjTtwK9Fmk5itmUH4gm9BPyLMved1QySu5SwjeNa7ANPQ8SgtNi2bRSMSekTR6GqdT",
  "key14": "3VzQr3vMJYCEBZRvBhkT2kMDqhQ9TyfkcEEXSfgKamY8pE1cqKWYZG2Pj4wYqALtokHeUKjtvgdncwZCZHf6Ue8B",
  "key15": "4s4uq1BzyezZ16qH6AU92sxsj51F2vbm3SCLQo4ZK7LZp27F8PimsRjZUqAFwK5SkRcb4hcwSV1TxQS7xw7z616V",
  "key16": "2sRSrEG7pQyE6595uFyxDhX7dfG7o2f5iJYzs3yE8evT8JQho76g7YordG23t7aZzGMvZLnKAPhwYffNQSiaLv5J",
  "key17": "4xZP9xk2EjkBJHpTDDAhdz6hkKkccNTgbHcDLwDXF25aJpc51oDe2g8JeY9bP84Wms1fGSbkprnuPekaXFGTNAvQ",
  "key18": "4GvJCF4Sw1vZ5bJiemgbCHy6ympuLoJHHb6kyUxkHTMPBfNiV21SqfmX9xfEdNbSBqNcz5zrgfL941TChAgZadTz",
  "key19": "2xjintBjVrhJzEt449ZvU8iA9mf1vNkLciB9Zf8hvoQbageXiNJkMCaz2EHAadczeujuZo5PFR2JC6Z8ijV8F9Vg",
  "key20": "5CLrf1pTKapT3hGNTcDyq2U6d3z4KK9uxKnq2fhhJ8KrzSgg44iv9GqbukEU4f89A1fqegCAGSNhsY6PSEJn7Swf",
  "key21": "UBXDawenhvjQv1DcfmXidVNE8d2y22uYEX4cxeBi1wLJ1nEHydPmUtTPzfxEH98UnWA4a9aa3wpGZGRqe5uJifV",
  "key22": "225s96V5XkRGirhKyeq48S9eoMcdCPp2tWVyWwKS6wzNhJ3eTexxjXp7jQUDMFsvAitWebaGStuRrEVnjwGoT9Hj",
  "key23": "4y6HrqVTXt1DqwCx5vsnfnEg9EUMG4qZWLHSp56aAybeLxjMxfSk1jNcJjwtoeRwgcS693WbiTFC8fJ9Dg3st5Dg",
  "key24": "2bYRj6cMotjb6PvKdRiETPWaS8eZ8S2Y5QFHYpWT3tmuBwo9D4vkWCRLFfPum9CjGQix9LaLGiyXi5LgdUnQoLfu",
  "key25": "2JCsYhJfj9pomouMM4KiP5KgbSEoJDBt2uEfL4DUXk2XRtAzwrFo2rd1GX49BucUhwCFoMtRwm6UcU3ww8GuQirD",
  "key26": "3MRoTBHJq7KVVH7miGLBh68oWZ4jLzXXnW8hdHH1hJm553WGZNEtmwCuZtP2mtfi38hkta5jDBWqJuChzssTg9kT",
  "key27": "4K3o55EmHjjm1do1YT6V95HJHQcpywcgqL83VpNCPju1fLHQamWfGR1N39T4nYMRFPnEFNX28XitQKN6VrkAwPA2",
  "key28": "5iS7cr4SieC4noxHMmLQJyi1wLVKrdX2DKknuqcGqpYtLCBcph83nfQipRacyaujzeGU1KgBBfFcxg3effADbMLe",
  "key29": "3nNRFK5M6TZKdm8djLhMg4eBnAW5WjzvbDYrprGs3ku9HnSza7KDbEcc1AKWMXxiW2QZZpWZ4ahRPboHxMCrAE6b",
  "key30": "59mFkcgnr5rkGCax1fB2saMZU8ojCGRy6E2DXzrU71r48nJs2S93khdDideK78ns66uTR47nWaK7LhuRsWmEFGtr",
  "key31": "63P6CVdycK2p1ctkTqScxXTdgGpsGhBYgM8q7RAwTkpmB1H9To65QNa5gznPiZ7tZi5fS9cnA253hCjQ7we5xaBS",
  "key32": "2FaARPL5xkD9Zq6ZkzZzfH6eUYGQ8Hmo3N4cz2p575GmKaM8XF7LAyKXNUfpKk5C67pCLT68BMs1vggykLzBKpvy",
  "key33": "4gS1YP5byKJ3cq5c1DAZj8o9FpJQinXfwve2VfmxbDENEbpqJvi7auS7h18mWndfmK9JaerxHFd7XmeqCNZMxkHL",
  "key34": "36ri5dPZ5CHnqN3X4kVjwUwmAuCmGoTpGFjyXtdHubxpp3iD85QmY5ncb3yRZFGEG8cNd2LqPaqutpmp2G823qyx",
  "key35": "2yMfWDa3U7YTEfRUcPZkHkpxSot2wd9vxnE8cCEPHpWAFGEm5LukdDShoykc9bwUZ22piMBcPvdqv6GdA8ERtMUA",
  "key36": "5auaXkCiz3VmWL1vbgs1FMjJmbEEZcNw9zWfgNChRqavcUZAmkF8SATRdaULCjAP7pWNdkTxj2WzF1WDDr83dmYL",
  "key37": "N6DkrcR7ybdGNvv2S1fjyy5c6gkdkW33x19Zqxu3AqW8pyUw7PRNrP8xnGfCtcu6K2noBUjhxMHa1LGPWXee8RG",
  "key38": "4PCEgJfhoUxVNQFLvnqXc8vg9ucmQQLZPgMURfaB7375SyVMAo1QrUrAKG15W2Xr6giYP1Z7adgJS3bETatTfiWg",
  "key39": "45BKSqkeXEFPcU8ZCZcVEUVDLwoGBRwdPuFne9baFJxWWmqZmWMk97A7qTKV5czDpjCc41G8Q28csVyxox2XTHnP",
  "key40": "8yzuJUkWTJ8rXq8jeSbUaUPdxfhR76pg7rrTd9nsoqSb4i9Xvi8x9r4yJRGyHXpuGqwPW3cxS1DPgp3mkemwuiD",
  "key41": "4FnoTgs5KEd347MQFcBkEvrXc9JiLhDEkWgTPCpkd1BCF6RujsP8ch6FvGqjgok1oYHravAQT9zBqpcdzUt5VPa9",
  "key42": "4DuVLWaxYnUjhRJiKN8BqoHjLJ5EupdG42KffdfFYCBSqxPvTcxA1ymKHSnc9ctN63nvejUJFhufDmbxjyASwrJs",
  "key43": "2vwKURXiRgnvsHi3RRZ6GQhfwJaNbXcJn4VZzddUSdaLfjShhbBAPEdrxrzGmchRTqSUmf42EwcReSR2dTfSVZL5",
  "key44": "yuZmZTudNXqzmi9pgPaeKe9Z4WKoPosAFLS3PoAu3vAw5JauC9qcaJs4ZsHhnwPHAu97R8unUsdhmt4dYHf7ynM"
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
