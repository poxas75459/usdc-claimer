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
    "63PyTdJb1wCrw7YphfncA78UDWdfDx5i31qjAizVKVefz9xBMSCXfRZNceUsMLANjLsyG2wRJV8KoAfWUJY4FXjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494Hzwj2SBhpbURhsdkePRPrbxmnXMa8GqWYyaYEfsm4zf8fP6Lsme2T1D5j6T22QnhJVbnHq8aUTyE7Xv193zqw",
  "key1": "2Y4iGPsF5NvvsGh91dLYvJJz9KXWnPVAR5AD2CacCWiEVbDBywSv8Tq8Z4ftdvULtqfPRvnTC22LpHho437nmtN8",
  "key2": "4bNux6W4JpQJV5ossqaaSaosmUniymAUWcbGsSeJyMx4AFEKPi6MsJcacxakXFKmbBSgV1kzDwWDzePJ6zrBwQKK",
  "key3": "6EWF9jbKNcKo6oy643vbmnvwzCgHPDysUU7NtbU9zya85T3aF4ppAsRw2rwhtufcnSHH2c32FMCMpkKjqk6YekZ",
  "key4": "2FMXHGEaR4kDCna9AQiPiZb6g9CUnHBNvqcaHqawHrDGHk3bWFYDno9PQCiFCPL8xagTTUVqYdNLVp1mL8NYSod3",
  "key5": "A5HLpEVxfXmbZEtu5A6eDJ9oUgxkNJC1NX9xLuTJyYVAi6BrckDvLCLi4qeHgcVJHAGbSZxFouk3a1YQvuZLc6x",
  "key6": "5b1pvh2Ur6PL8dkMjvJ5rkVruQdzPqKdjbs6pAKtw3o7Bg6Ghu3Nps6mBmXKHuUmxwF5XTRuiohh5vGbvjjWHqr9",
  "key7": "4RyfLrtzfbgz9LrukRiMoTQQxazpdKQhM8yzKY1jP3zzFEehQwqVNKzkkjQBTJzx8cFXUY1darCfYAGp2x615ef3",
  "key8": "2HJroJxBhQZLmMQxfWzpLNSAv81zGfGPqCF82JGmTrcffacay7S8bfzpAFDGtkRrxXFCt15dVuwQLZqDDrT9WG67",
  "key9": "433maZD5HyY1ZG6Rkb7UboVjUbix5K3ASQqHe4Kaj4XnMr8uCbFYtb2cK91DNMbdH6SCY76xRVfvqXwGxUhEimAU",
  "key10": "gvgnxEZyMGbtAa2frftxFCibWVyCQo3nWuXaVDD8qFTpEm6tmfL8TdfQw6A7QrbBcQ3GYLtj9ZJWn2C2mD5McFM",
  "key11": "3wyKx1g8XrVYXyNnNtx8CMqqenTriTtMHAxxn2h6S6fPL5QAc9f2xGe3821tJiKexQ6A6aQwJ6wh8tt12S9rsBzN",
  "key12": "4fkA83PpYieKUL8TCoWpSAqqbTwfMcdjFY6avH3mu4X8DF9dcMZQzzYAtCTomBupQ4q8uRK8fGZTMbaU1qTaDJ1e",
  "key13": "5Qhpqdn8DYzTfFX2jtudmFUEwdrFk9ieQfdZyijjJJDcs74yM8N3KHwZqhms5skDA547VEMtnT556pGAosNmrRew",
  "key14": "4LCTn9US6fHSyWs66egMm7S58pPV4vw5GFMFKVddy8J9qXkPShNQbrgXEVeXL1e3Ni1PAh2CpdMG61QBkizY3grZ",
  "key15": "kZHzxyXz5pRUMzxPfg1XSDLmsM1yZaNmsKRyRyzxiaqdiZSrY5VmwXsdK8av3art7mD3TZrtYvaiUKfct5LBbeW",
  "key16": "2WFBzNrDaTGPtXdU8vPFWriUAUjdLFLwm5hczjRQLE3rVVkVM3duxgWgfDqgjmgBL5MgozdRfPGwJtuKJKC2f742",
  "key17": "Z2pZrnhSurYnToHZnwB3AZRpu7eo5wtm4Q8H2FJQkodQma5s7nGbP1MgM48YnWzM2E7y9SeLaYbLqtNY6gQSMXi",
  "key18": "W3BrGHptUYsJA4udogpVafoKfwJG8vrGLxWGwawHDzhENkjT5SwWDpaN1AYdUjqKFcbMFf5DtjKJ5fNAW2275TH",
  "key19": "5Q4qVsMshHMbwHHRQNN8VLhEqYGKVen7fbRPJCjxJRQNyUgkYbQz1LfRSd3rGWfmMsjCJZy4SG41eBCjvNHmKrtg",
  "key20": "5W2fvxbimVkr2cvqaDkKu1rHPTtkqTzEHzoSP64bmp1887GM2XnPHMh6rFzw3QmP2KPFRRyZM72S6M8QhWz3pQHZ",
  "key21": "PRFiiFwwrnC3DkPwXQJDv4hXPhSCGwG3Gv7UXmTdY1RAs4sEsuTNinHvP4D3pVzkDcFsg24r4WdMUxTmjrctFQ9",
  "key22": "kt5cdqVT4aMEm8AsPKQTcRRS5qThx4Bgvpw7ykiV6ED5ebzd6GN9XZezuFCCsRWwg6yBwqTq9YN2UaX6XE5enpQ",
  "key23": "3vBm4FLdgTtqwe3q6rosWJGuyQbAaAMPqkwiHUZKyQegnMiBk8eAawGnPZix21oLatTF1NwrNxijrY4HeuUNpNUd",
  "key24": "2ERW7Vwi3GU4oA1b4Lodod58GbHujEtH9BABgShFVaibY6v1xkAtFj5Qd18WdBqXHuXiavxBWGFmCC7wMD8cPjEm",
  "key25": "5yv6s3E9sxckyaqo1cp9tF6Ba7n1cuLgwz9ZhSrPUsMLtP9nA8S1arbPVj2JujATRB6T78ugK8ZkjbXRNCQ9aNvL",
  "key26": "3r5ktDfQDnqLZ31YMguCi3YTnGmYaQqcTioAoBoU7V38hFHEacz1xEZRCAUdxNx5apbeeSbpcU4FVggxFqogB7U",
  "key27": "YmvasSSG9n7y2Mvver9SUfa86DP2ikKLYqaouv3xwNEbkpaMQVyJnLZ92qomEgB2ew2yjoA8epe2J7bcdUhrABg",
  "key28": "pTwWmhLruyjgbBkv2aMazJq2XwAUr7jm7vFJovDxUu7JxSk9MaxuBdQQmQMCSDjoGYqHb1gnkGJjYK88ohDmjiw",
  "key29": "4SfmrvANoemZ2PwvV411GXRGWaX6KnvPFm2NjqZgYyovUhA3gtvdzuYdje2F3VCL2GKNinmh6P8gKWGtiCjTCdH4",
  "key30": "3F9TKeiJxPRTgcTA3C9SDcRo6vrdtvRHR4xPbXhZHbeTHVE3BzxCG6XAGygtTBnuQXcBozvYDqKiAG9WPt3GNEt7",
  "key31": "zEzxJbn53KnapDB7SARnowohGcbjqd8Y7updaNEC4aGLJAyfYVNLhEFBG89Dc49RcMPfoeUcQHYYYmbfk1GZsNh",
  "key32": "5ehzMTaqpb5Mg9eSybPJ952cemfr75bw2g7YKhCJW57BttivFgM3uuzYSLZweoymWjEhvPY6mZrrTc22AFkGbYrH",
  "key33": "335groGaq6Spomrp7txCzp7r91ATAQQc8xQNw37gidPLbugwPz7NkB5WZBRqTNqkNNsv29JzBaWkzhZXPRRhfq98",
  "key34": "2NNXN4K12toNUfF5m5wt2V24ZVp662fJGKiESWrNqHwaxQomQ7UaRN9pY36kr81K52pX7mu5FAPxvf4bgK5cc1tM",
  "key35": "5PvXaokjFG4Lu7axwFrmQWeSTLxYA2FRnibmFSxcYKKy3scQmF3fqdPY1EeCG1CPB2hk1kRwKrgtdNXMQxgTf8Ve",
  "key36": "5KXGcY9qF9rgyvi96f9TCfU4TToghnSTkMpTDaDRZk17u3ZPScC2GGwZb6afkEKJY2Wq2pqhkx6ADCPvVDqMhmod",
  "key37": "5kvVQ3oVPNMf44dXtBVS78VNR8NGfmVjZKb5cXqMut4TF6XkzWTjtBpJwadkYQrETWLNkgVtmzvriRwdMNDo89rz",
  "key38": "4mEo43Kkss7rRHtHuWpuGbL1VVnb78TpJ8RYkazzfh6v1oCUQFE8CRnJVXuUTYttrxF85aJmwG8wG1vvK9uWQkiQ",
  "key39": "3JM6ngT1dNHfM9NJqHZ4W694cxnCiKTvXpGiqBnBNfmoo15nxPR1HyeGHvjYewmxT6DsMTdwnwBak3KhaVW4fffR",
  "key40": "3RgcwuYKr4yVAkNfgSNmgrCi5o1zdcbBD8xw8zXx2L5HMgKiGSG3wETLPufAbXJ66PqcrU1m9RPug5xUX7H6VQDH",
  "key41": "34F7kTXRSoTDk6epoVtBtu4CHxxUPnfVU6ubioVvmMvCwAtXV1a3KaoAKzJ9AdGQSftBPUqMKJhgau9jtdzLWHRH",
  "key42": "23LmgHzwo85H2ovBkw99VHzU1tivngAUEiVvYux95bWaTnERmASdF9sbD2EyNn5tYGsLsEHydro5NcNipHbhfR7V",
  "key43": "yaPKYL5QV7FRPSsLsqYRRnzkZ3wLtVqsGroRhNjkt2Ej7V9y43raYM78DPUKFo7q26BH53ywo7FxAi2w3UbAaP1"
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
