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
    "3dVoxy2fQ7WLk97nYwVZQprkQoZExwo1uM3sJYXgtRne6bfCfS7fpQGkmPCnSGQG2M2suNazxQhmu3FuNbG97P2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ACqndVtRxcYk28HKHYd2Z3aJeqbvsQvNfontgmG81JGKp5BxHQe6TGh6kLSaxMueJhJoCDWhKHmPNW5RYcNg1st",
  "key1": "3kizKYipfsG4cPXhpzZW956iFAMidpbJTsEaif4L5xG6WBqHEUxzzRvzsSe8Q8pWNVyC9DGqZJicosQQ15xkwkw6",
  "key2": "5Z7P7qd36Do4of7bYF9VcyHAwv6fHhuU5yw8tsNWj993h4WE4qviQEWLCFgKif1RsebTRFu6jHKxuV94u84ejay8",
  "key3": "2c4wkzadnMzXSU2V6ZEzDi5zg5oEyi6FPFhEHCwGmuM9knwUD9Grxx16shZ6TGfre8H9Go4TTzgxLzEcGaKNmvWq",
  "key4": "242SSpmpmcSH8iK6Vkqa8aSLDomygXwNx1apa7MS2vbNkX1DD1rfZ1bYx4V67KctQHizYgCnny1eYGEhfBqkZXKL",
  "key5": "61tzoK3G3U99zfCeTsyAqbifoCk8nBWJvq3zxZmXMNyfWPT6ETsUR9t9trz1UdHcXKsH6c6nWxTYuNqFeWkzfM1n",
  "key6": "5iQQ8DNgneDzGzzzncPP71RYgzF8mSR5bg1TA3FDDNbD757zWGob7VKoASu7SJC69JCPMQfeAVgMkqLzoeGTg42x",
  "key7": "3hR18P8xgUJk8yjwjfPtB6iqhm9sTcMxdXNfNm4grue2qcEdvqPsVmc6k12dmw1SshPgSNLNzxEoaG2N9oAtdAmz",
  "key8": "2YAmTNCqQ2tXFAkyqibjvAfWAsDcCGeYTRuBWcrV9iy6JQvU9rKGH6tVeSVGMnwNDphsjTmgNZUYa6rbQ4qECKeZ",
  "key9": "29kASzJSgmhFs3KskwUSAjLxp2Jj98r6dLmjnLy39YmR7ASSkJj6QJv1X4jbkjN1AMH5XbhiRNAf82t6EN68PiJX",
  "key10": "59uvNmYWPVdxgTdEz7BCwUdBbJuXXBdfpAujmj8t1GVK4a1srnNy4y4spWbXg7YHMy5sH8B54W74PtwVUrVE857q",
  "key11": "3z3rCKP2KsGAEqBs5ByBZbcPh6fWNBKCMxUjKBU7SHPMFyPG6DFro6EdG6fuqT91C5jL3CQkvL8rGcGWXfwpcuQ4",
  "key12": "5oPc6RVMGRDsLDy94U36EzMbiZStw7kQjQAj6DMmnFHfgT8PzJSoNzo1YVjYUziC6LxTL2zTZZgJZAokiDNmsDXr",
  "key13": "3cEvBVnB48RpTxHivtgzcyWNha3vwy698vF3UR2LK2nEFPgVpU3DEL4DWVEbTZcQRCgMnkUB2mku3D2yxkccq4GW",
  "key14": "5TFj6hmPkcDsNfuFXMQ7Bpg1pzfeetxd3TDV7EUdPhig3Ek2ZtpnK2ek9p31f1DQfdYTMt38xUVuJ6BVksVLAmw",
  "key15": "3YipALXRTPD5nAmaWErMviQ63XrpFQQEZR3jztreVdMNgnQmVEsrbLPdz1BvhwrDSnX7atgnsxREpjKoPq7H7v1R",
  "key16": "3FKPtjvY2KaMkwSaoqkwyryiufqJLLL2rifx2ACD37tCjXvXggUScmwqJn7XA7mjo5Q6LTKBX3nJsNyUmPe3EYy6",
  "key17": "223EJePEiJ9DCYHCaicm9g6sGmCEk18J4RmW5aUys5AeV63zzRnvqufmpZ7D7AkbMyDvy64JdnDjTeC819tLECzW",
  "key18": "5v1xNtEhhSqNFYWdkKKmfzhT4s4XWuFeFhzz2Gqh4V2ZgHZUfCgkNDamjuWizayyjycjUsZ945SBMfPxDMqcrXQ6",
  "key19": "2ZH6n6gb9vWBqUpD3zJYW1tDZMUfd7My6AGzwpUCm42Fb12p4bb1xmkqGQwHShW7hPPU66iR2wXFXneCHjZQKBpP",
  "key20": "2uG4e3EfkvmmUSviSxd6MgsVnNLJziJzaHpdrVLyfqke8CVpcPQEAtSbX94ogMuKwmvonTsmbAyj1guLFcDGXGD8",
  "key21": "cm5tYLwTuC2srBDUiH3TmLfBR9iNJotUX39LXDSbFgowZ1zLSBSoxsPGwzgPn2wNhSGVshfNiw8rZJpQVji9TNj",
  "key22": "5kxeNHiysS7CKyrDK2QG5SruLnzx5yGpBmZH2G8YzfEgd61EcteyYW7BE5KeT91j8ZjHucWimp8PEg8iU9uBUdZX",
  "key23": "3CAJH6WMMW1VzmhrVc8wFS8VKDBVRu8dBxHiriZxiYZBF2mt5ifaRK8cuTY7t4RxM6KeuugvYTrBLoHx4CuEVWVV",
  "key24": "EPyjnGgvTX9WCLK76Roe7k6hEdtYhBgf5oaZZ37L6299mkUEmQBpFPQtwS5SPG1oFtdvxQdHUYaY4su2oXvn8QW",
  "key25": "2taCiKtqHsBe8ZT3sDE84uheRknJWRjcL9XQjp7Qwxjvb6izGcAT7qFKGghJdYEvSKPDdhvjzPSAEJehys2gWhbA",
  "key26": "3He82iqZ8Pg5jjvRjnPSgFtrqafAhthgqVWC6MpR2KaazXFDtSAFk4E7aKjd2kkztE6Gp9AGRK9bVYqt16VETEyX",
  "key27": "2TAVzecGcdzGcT9EwVh5pYGmYz1Gxpgh96EcbxL2jsmTLUQ2C6w7KHW7oQpadGEGjNj4NYsbRFX77AaeT8BfTx2U",
  "key28": "4GjqP8Shkf2gzbTJufCwq8Nhp5B34EexQyNah4FATJizmVsTLSkn9bdjApPjq7ui7JmqmWK3FAEDUFhwzJjoU6bW",
  "key29": "4NKa5ZGDEBFo6go5YjqYGwUEuP4Lt1QEaPwBkdKMVq1fgjAWEh88bT4PaaZLGRUgbgFMCd5ZR4kZC3sbg1u6dPmv",
  "key30": "3w7fXrg5DGc4hCdJkGZx5dfLt5URhjJa5wiBLRnZxJpR5TgbQ2C7N2JXDGAGjkKxZczciUdT8Ssv6o8CdNwCyGr1",
  "key31": "qBXvaawc1CpSMBWeLknTXqRDBoeLMbAVcxd8ZpZdKXeVCLr9AqQixojvarSHBRqRNZJCGMC44A2ReNEG8wyTkQu"
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
