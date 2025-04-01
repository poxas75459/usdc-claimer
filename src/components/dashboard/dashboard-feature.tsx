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
    "WZa7kP2LndaBoJJN3YtPZnRLkWdtKXLTzZPHH5qs8MrW9ynhiXcwCURgQVgoB8rBWjZqKqpDw1RHjrCk6gya1pw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tMck4ftQnWydSsssk9hMVPoBnkwdqYUpx9Bg2QfHherG7cFrsdc6o3QkcKzPirsFr2ZcJ3HtQYaibevTsaEdV3J",
  "key1": "mjuNNRedc3kc4m49vz5SSMZzZ4qiDZy5zdnAMC8iks21vhJmJA4VYXnVytiZMvPkPvWAF4Bd4BRHkiVDihfvM8i",
  "key2": "4H95rWiLHS2ARWBfwCsCdyEpaGzf1p717haK4MHzayXTrHsHcJh9T5JKWZWaqxum9ohFwZLBs5HW6fwjFn4fKJud",
  "key3": "hnVir4WySutTALiQRUsrkNaxtPmB5ZA6urWVp5GTvbpnZNpAFVXdHHiYZLMvdA3TxT1eoUe3nSq6HUxnuNCgaxT",
  "key4": "NJF2p5owR6QtrUhKBQATLiVGJvHZ89zw1N2npnmwsGUL7mFQnhsPjuKPe3YPZFNFv7k7amY1DRmseTMgVLzKpEP",
  "key5": "5PVt1Jq579dkU6BaYR67Ro3AytU4de6XXKrdFqNADBrvrHNTSDd8Y2AfZAa9phiY7TmGK9ZwLdpmMxsgwGeATesC",
  "key6": "5DBqTwhn65ba1XKR6VBTBjMmkM7uSU4ZX439RQgCS8r6SD4tssCjgPdvHLLrdNvzZ6wyQs8RRVcSk94dvGev8hJh",
  "key7": "2a4oYAz32T2T57Urgak2SM7Qd7b8LVN6GtBcwZgb87oqYQ1gsX7jq27qht3PYLpkDVuvkQjyfqb3SvMMz5dpWXav",
  "key8": "rmDoxjx2qcqTRR2wVo3DgQtkB25iFwyFYuTMNxz5qgzieGkBABf2FqrUeJ2CrRdJ5Y91UwuLmnfVKCiaHndqRRG",
  "key9": "4zcC4JrV2V3ebjq1MBdUnJfepb237jiFSHAPLdmCcLwdMt9NnuCfUgc2wW3vZT9XHv9J8kodBigpFKk8t2j6tmFA",
  "key10": "44aoZ8CmNHmJufoAsqaJjiKDDuPvoccbi1rvJCb47sd9A54ZCGVxoUTksgxyvxiYDKiRps1YpWDyHHtPS5vDFvLJ",
  "key11": "2MLsZmnLqwvvVG3jgWW95WSrGxDhZkn8oYBjCmkxUTpBWs8vqLcoYTk96pkJBhxHHKCSjiLrieY8MHEaWfqQ7u3g",
  "key12": "5souztr7V2NhMkGyJhYT1SeX1ZmaWsbPfDUytq7dZtvaNrgnEH9jxv33uvRf4YDrT8nAmqsXNuNy4RjW9qYD16k7",
  "key13": "bmfKs7vXD5f5ULicHoHxvpJNKVYoZBLNLXuitxWqgxYDAcofcdtpZVEXcXWbFKTKM3USev3MEmmso4mM1UNvi1Y",
  "key14": "2P19KVXXjpDcMt7mPuWLhJ2uesmcBnsfAsd5sU2ApKVi2UjZci8YvJ8GYNJNbFZZM4AqX5H98mEjDu2egPPiGHkk",
  "key15": "4pHyKJvzobpcVxu1KBh9FSHZdMPQV13ARE298v9C58zvBGeqfnnepwtu5Tf79K3UfU8na5eQiKHQBZip3qrFrzKr",
  "key16": "3rHo5mVBTekqUMfG4dNucRYeUntePDmJXerqcT4SovuqFPes1EqUdsw9JzxdttmmvN8we45iTQm6wJevHDnkkx7y",
  "key17": "brMdE7v87kpYsxFLqZsJf5XzayJyw4KaWqTwsu6ZeW6akAs9ie8onzSzxs9pknWBFaXuXcNP7AahPeN5exmdjZK",
  "key18": "FqNvhZNhaspGixA2CteDFrCcrSA2UhE1gMia8CPF5x8KaZEHo96FwG3gPFtN1Zs1SW1sNDi2VzwGTNfqhaRzyvk",
  "key19": "31NzP41ourLQ5RoJtpQDXzT3W5m7JpUg2ZVDCdgGKy5gzvY2JnRRdM82udCGQ9JYZMHa9CvmsBuomMZCXFWTBTuS",
  "key20": "5j1KuhiiRpkhVTXTenDGWmsRWLDiqBmJoHp7JFD9ZTP66HcTe6shnjnrZuAo3dhL2whtEHXYcKYrARGb5dqr8iFp",
  "key21": "2ZrZ5DXrkvMAYpbPHttBMNrsNefa7xunRDKNTBFb6253PQGWCAkcNuSnRuveo6ZRhnrGqcGPrk3K7Jn3SS7uXTEu",
  "key22": "5g2NqDotdQ6wA8dQdEgrtGnqmQhUUELoeokXsedYtuEemCXWNbG1BfnK5J8Mn9B8EQmfk4udsWGVArmZwgc11ozP",
  "key23": "5a8cLE3m7fB1EhzMJ4rmw7FDhGWCvpZJ4CMaKtidDoievPLxyyYuYyuBvTFgvtyY5u5YZkfQbgYC7XhdYjkSq4Ze",
  "key24": "2yYETgPFk8RiKVFChhiJY7wVNCYaLLt7xMAVF2qqj5DUt4n3qrhyGZKWd5XUzUmAjEUKvk2HNBngMHsiTGcELy4t",
  "key25": "5eit2JMdDkdbu4o5RB5Z341sJvhng3SwtDjzf55RsynEAC79KwZqDGpixLzXdAAa2ywrUoZqUuqkYsGME6RHTPw3",
  "key26": "2joaHAWEJTSv72AoWi4ePycmc7YcU54B7v98eEnJWYg5tEQA3WbKkfPvJaVEGDvxMzm4tVhvb1VxWgRDBekaF3tM",
  "key27": "4FdkYH6ZXQpY5uuGh5R56ci2PDFLDibgY91A7SRfukuzKRSaLdWNa8d4kgQdJmatDvvButXqwTbEsYxCfEubyLUe",
  "key28": "2Wge1F1ag3SMYDq9dNdcANxe1KndrzZjaeRJiJGfZJPwgcGdDkcBCHgu2i7LmH3cvVog48gUqMPzfA8eS5aWcCje",
  "key29": "2qHXAAhCpF34MAEb93fRZKaTN1K1mKpWgkDLYJLrE8ZJMGoNrUotdAdiHV6adMHxwrtCQ4gvMTjHnHSaTC1U9QGn",
  "key30": "3qUxaNWMTUDFannSaUzkbnuWrL1BybzaWDPBWm1bCnk3QjmT6JvcDppcdu9bbe9J1sSkBbV1DLkmyjheTx4yBVYs"
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
