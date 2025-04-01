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
    "2LyTYRevDDmgXAY3ad5xy5DK1Yi1qJGtfb8Nh5gTDcjs9hcjmAAgRgFm54CMt2Q5Z3JbLGN7oRhFCwTfgX7AJj9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TyR2aRo49ktdV4ogTs6SdU2zerjB9wFzcvGZf6UbS1ttzsYkDx1TELv2rJfpM729gg1pvkgNetrX9AHqgzDkQ94",
  "key1": "4Etfn5DvavRRikeu9uV8FEr3HbRyvhSFQqJ8EcG1ZxTKi3et8YZ87VJaAimF9DZPbjyrS5MgnFhPkpusV56SRjsp",
  "key2": "2TS5aUUhx6BR6FQa5aCvCuNF6anBh87Dq9Zs76UosaiRtjPQ5Hrsziic7YHpn2YJXMT194xCTaqugsbqEL13jQqb",
  "key3": "3v55wTsj83PXzevwijP929LbLi2NLWRfX7qPVqeCGdvHqFVmPTqNkQrvLpAcF2Ghv2H1ZZzvYb5HUEsPTDzn8h9q",
  "key4": "2GVbbUWzvGkXidxhcnTa5hs3gdGRWK7fBQLjVy4oKuXbsXurLUAs73HNxbGugkvo5dbmnFA6N4cDKC6YtQQXR1BD",
  "key5": "foWriYotYfuDiBPzxrLAJ8EW8hapBgkp2opzQHXA8AJH3WrxrXV8rnnoeUhh9Lbr4RemjVuZwVmRYgCkRJUjHm4",
  "key6": "46Cg5kwGJ4JqQ51ndGqHywm9Uoh2a5qXmkbts69TwSpC22wUUVqHm3nvu7Z3MAxmJfGCLGwT9AgLmshXiVUPP3zM",
  "key7": "22xdJMHmz4xSWoeYQk5AWViAw9yai1o38AWTu4EqGMmhKZejw5SwJ6y6BoYiFv8iSBhE6Guc3n79UWtWTYmoBKDj",
  "key8": "577zaBDK2jpbw7b4uHGpaKX5LyoSMTum3mBJRDaQszDHxbffozhFWLVTt2JZaNx1DRrHXUzmcFZD2abxHndXJCig",
  "key9": "5UAkYstouZXEG8C1UAnxPNPu42teapriUczTW51Y8HQ8Wy3twpGrnvVCohdo1LpPZ7dmwq6SZsDnK3rbKwH6bouz",
  "key10": "3rv1X3XasY7jbd8Psa4UyEnMFYgKtJ9NyZHbSpPRiniSitxBixQxasNAfpc4kMMRGMgGV3w4FFbAPdsyKooHLSpR",
  "key11": "BMBJyvuErBnBeQqD1o1ifKiR5pNpNLdDFYGturtdBfEbBRmLJNMM6gHfFYmvuNSMq7bmvxgJCp5LgzJicyo7NQm",
  "key12": "EnpThQrHzRJJKgvAy5XmizwmUM33CVa3Z3GBeT6ofyPGwcz9t6maeXwuRX4auHmWdCpwNutEcEsit6zV7NA4xou",
  "key13": "4sWPhGibytXXHQX7Y2wq63Hx8JHFxGRcfpbQ6hnocdGdgVmYnqMb6zrxoD1Bpcwd8wxNCMdvqvhXXDyAAuPHetTA",
  "key14": "5gUCqhUZtMJdzjmbqvbaNe6iW9BmG19MNPXTdbLLnqJud7VgLTcnEK3C8nsYbnw4eJMY28PD6x2G5m2AjYVzjc97",
  "key15": "ndbPBkHkwAg9rCwN57g3nkYbmiMeSNHoZFdLzfPYvomWFUKrbkqsSAeUBYJuueYTqEpuGzF4hnKvppmmfAJ4wBf",
  "key16": "fFeey1Z7maNu83n5osQZHdm4wuoBEANAcGayPzPpHcoADTKHadapebrRgy5HifXg5KBaxTjZcuXnKVF94vSfrqK",
  "key17": "Wfv8ZWhDxdiRqPyUdAmAWe4Nhy1jyBsAjkfpGqmWBzVJQ8jqUwRNwBdV3fc2hc9jxSBxYyzDyqrBbwMBZ1QmHuR",
  "key18": "yiQLvgaEFQ6tPoA5CuKM84bjXCbHcwnb4bbH6bJWHH1JxqSSrvHfFHrpwxbU3khjhj1faivzC61d95nb2fjd3yX",
  "key19": "VFZ78chrtSZqWbPTWJjHShQpp7faj5WV74xjt748B7jKJ7NMgrMPUfgfXwqijSQMNRNfFXD2aMdrxPiyeFa2TCA",
  "key20": "51kbLcnpseKgFUrFW2wartSMn3WZB9pXGaNvJCM146pjBDYzKo249Eab9L3i9EUmG2NXVBM19xMpgubGUWp1szaB",
  "key21": "y89mYXy5gWaV1kwcGr7dEkWT3vMRinfz49hNh8uQ7XXc8RfcQdzQYMLZ9BHTgxEhwnQwtwDrUBE19ft6Q5dGHnc",
  "key22": "2E8o7Ha7xYvwVH4RUeVVitQ7jMj1wpjvzr4abqPijrfTVG2otVdhbQoCUcpcKPhLKxLdYvbhW5ggdvBHXEXEmEt4",
  "key23": "5kKyAvYHsXAp7BjkQHF7DPR2n9QCEGNJYHynY3jequksSHSot5bMCdfk46jbJ4yvVCK5A6XHcLdD1ss9ReUJQEYF",
  "key24": "v1QkwprQeh4uAHVhaN9y4kbFVjpWBiCA5ADX2dicrj7FFMGbMhymqe7R6TKEiWLvdWA5TCZ4RHkiUp9HWHgBRu3",
  "key25": "5Y2VGJgzDUhs7unuZpz4A1qcwZ8B9QWdfuHfKQ5X6G33oSYjfioQV5XwqR9CAdp3xyd3c9hUDxcEv3kGt7edGLaD",
  "key26": "2UEwBbeYDysL2FHB7ys81qnwm3fve6nVDKnErSUYviryWK3EEigHG5X81YXJMo97dDV8HtvLdXGwQQN1pAVqvPXf",
  "key27": "5YWt7Ue28qwn4GtEXYcRtRbWkxGCLQnmZHny55tfbLwS6YCapLSzjKGPk6Yk5CWnmdWQFsPDNADWdDvnViapVxu8"
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
