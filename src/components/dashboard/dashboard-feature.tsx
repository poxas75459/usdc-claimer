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
    "5ECVCgHPKDxVAWYKekV4VRN2e1esgmhUYvmo8MLYTtjsi1nWkLcsN6cmSMeUNm7P9vBMtb7QEMPrdrHKPbeyaE4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dzHguaxuxbGU8VWW1RpFkeEHhcTxJnLSrx6PiBeVJXp2JV3mm3gH4afq9d16csgVfLPf6ifBUA9yVdFeAA68WMZ",
  "key1": "5cdPWmpMnHgzRrBSJSLT55dUuhhynRF1ZuQW7wXNAw2ktNhAonVrH79mskJKhDaSQ6Fgxn67B67AZAS3zDRTBro4",
  "key2": "4vs1pxfFUYhGnxrMxyvjhUKiKoDTS1phCPPA2mj7oU48iNR7FzBU7Yuyjr1wgpSm5yaGXh4roFJ4v2CM4xczYeLN",
  "key3": "4q8U72LNjuhU6noGEbtGpnWyNP1cP9y6VFmoa3DvvPtZuVz2XgqxwE4KGWophpUbsxnANMZud8fkJSqVSidXdZx7",
  "key4": "2sxfxgLfzHX5WsVxB4xPnozyRGYXUjmwbbuicNu8p1uLM1jALVpfRv4LBy7DXu272VNx7rJtxfgymvtT2UQkUBoP",
  "key5": "555ykEuk3UPyoCbdRVyS2TA2LNzFSs3ZnX5atxMaV3xJJ9BZmgUCwdsDF5kZrmpeMLLRh5hqieN2y2SedbdVf88t",
  "key6": "oJkru9Swe9TF5X9W8iMfELvgUVDnge7nmwCyxQjAGBhqmKKqWqZFrucnMh4F7rozn5A6V47173vMG7MCq5SaoyW",
  "key7": "5S3ANS3UXq5Rux1fgiwVJveQP6QDW3mkd8mK59z7jPzUmgQxDGoZZLNmheBfkqaKphdkqorN3z1bQyXp2iZ3WoQo",
  "key8": "3N4UyENAxaWTY3WJjWKwyPcDLtEPUapwZv87ZZHu7ee9j5239z15FT4CrAS57jZ6hdTu4nTQhmbQ5HwEuYCCKAf9",
  "key9": "4d3JKiRHZ9PAhWyGDEdZVGZRsuyVW66DBZdi1A46jLzDoFUaifeaDaCN3LTDG7JEesceiH6fRUsaJuuX7qYRqnbz",
  "key10": "5B6YdfuwMb9gpm23meB5hDJSpZQ2fKxPigWUmVD59BNqBrQENTfNyiU1dFx23hGfAXyYR8d5Dah41b5qpmx2a4A8",
  "key11": "2Ya2mecJgxiGdvZwsmND67gcEFKXtvbRbwkeQ6pe4sv9nUMsPUPqMD8W1rvhi5BqGq1tkihKkQQFtzPJD4F9huRN",
  "key12": "5v7HbRvnKcjTsGL6TAcHPwpyvqCZQr2HbFpKmPCgkziPNoM6LSevvHFJpopKWwQxGQ9vdm7AYPcCXTqCGdZCvtQm",
  "key13": "3rQU36He1EQb7mRtZn3dj3GgjdD16cWFuGafRsRqpwC28voVhBKxxsaY1uMv2r51cgNJNbqt2FHjqZ6jCax3fSut",
  "key14": "XM1LwfTeMaFbfsmmq4w2caVL34GZaoUreqw8x2qBJUHHG1mhfR6qZ9bkdtpGSa2wuVtpEhJc8CR3m6mdVDRn5JE",
  "key15": "2rS3fqWZNRm4RYJCqWUT6Fqd3cWPpHamfQby1wVuxGejvc8tyQyLPRPbonMMtc4nwFhw82XMn5cxrfaReHm2xxkt",
  "key16": "5fxTarMnkftjLhAXS1MovYo7oX8BZDBr3czrBBnzFop7mXoA9Wze19j6F4Ar4B87TU5QjbG5BoR5jVvhpmTSdEKw",
  "key17": "5XuLDzeZP98S7R4YbM9tBC6PN1WPe1fJSh4JtLLdQjXwnmYUo9fBpCejXZ4xRhCHydrdXcAAUt9gsrVvLqnomxk9",
  "key18": "BPke74hvkMxdcfD1jQZhVWhmsQqczaxLL1wRvF5V4WeivVWDYtGwcdugWFgo38LQwiiLuHpMf6VLKf3k7iyM5fd",
  "key19": "4vg5TGv9nf78zB89tsaeMDjUYew2HauWQzQD7shfQk5advcmrb21WGieSmxdWmL8N48Ldxv4KwbCqdzfPj4ehciG",
  "key20": "2DsJVtRNHDX3w5FjN7YU5t3npzdPsYD94i36cbqBdVrpuSSrDstXE4tz5TLwiAFoMFqX813V4mZSWn7gvPvwWQSN",
  "key21": "bexbfRYXhvMyZ2njqiA1oxGjTpBYA9yW499oQmyvu5Evx6CxxdNt2NNWtJD9eJAS4PkEJ8kd2xvwnGMmyni16CK",
  "key22": "keHbFG6NL23yCreEPoDbMJfyKpufC7TGysb9RcrcDiyNCUd5ZjgqunZ5KeTdjQcH2dkqZxpAbtCUKEVpmiHgBdg",
  "key23": "5S4q7nYMEPoS4UX7tLyELeT6z7BcoEqKRvb7raC4E8Zt1shA1FBAtxdPvaJSZ7TGJ1GPzvQqiGKBNBiEsQsc783z",
  "key24": "4jA1ZxPjXG773ngUZYwaot7phG8RMQPKK8vwMx9VYnQagfPordeLSD6bCxMAEPx6KTpm9vstcW3L5FF6hWXuoeaK",
  "key25": "NEM7PsjNfDDsBVpfU2cvKMdURRw1F3LFZ3WUThYFKD2QJBgmNLyQLAD45M1BjVk5fVC2FY4Latg5shogHEswmLM",
  "key26": "3sJN1S2GNZt4un84kp1sqbfUycQ58BwHXsrAZWLiEuuJmzWqZrUGvTatkXka12fd8sRXbFzrv7vME9zWR44nXKry"
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
