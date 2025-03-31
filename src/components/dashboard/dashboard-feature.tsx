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
    "242LHVeYGszy25Y5MfsHwfdSaEJvR5UhvbiYAyPAQLUZKwPYaSNrx7hRB6tjwdBUctU9SaNnLX2ZtPm4YuMPCaMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KAUaeeP83FDK3noc58aeLXczp7Rgj2abG4rv8VJjBBr54c54Vp726CzHbpt68ZHdJEp6S7ySsec3cMhvufwEJCy",
  "key1": "YzCZQ2c7ABfW4TeKQLf7bR9V69iSdgphXBnSNCHNp2vzim1n6VHmgc9JiaCbMGbL2D1ATUTyj1AKPHTVtJxErBR",
  "key2": "2uxemRqrfQL3tDQgo6EkFPuvg2M4X9fCPFskvNuK2RP4YaZRxLF96r3kEzVhyqZdD2F2t9d1Ub9nJ4gGxgyyJ1Su",
  "key3": "3nx9wcVxMpzhXENa8f3TABveQv623gcyuvyUfDWFfKyzqKHGoaTXt3ndAGPPJUL5aymBSP3GAUrzBPjf6izKAuYC",
  "key4": "3SpomJVyQwcn58zMoRMvrkDoaCthZe3swaNavMdidQTDfaTjtKzbAmdde16pnXYwKzrUhtvGWwPhrp8KCFmCrTV2",
  "key5": "J93FwBHtskUr7nSNekar1fnHsApxHPVqe4b7W5k2ozE4QMPAAyoFHKVuj8BrHi8YaZpmnvCneuL9CK6AApYhtGS",
  "key6": "2BwkUwF8uhqL7Mzm18E43yYam8b1H1ohVnybGpEjonG79aDpFURnn2CBn7Gib1XbiGM2xKr7rcYtV3hUHBzFzKPu",
  "key7": "5ppsJm8pi3menKtVqNKEydc3H4LNfRtxzg8KoGvTQA2wrrhYEYCroWHWYNYHa76ZPSJRourqoz9GqtohLq5oQ72w",
  "key8": "2meP56hnKD7JXVWYtHqoUmJSiAWWCVN1QtQwzCnEsJQkm3UTjajAbXsWuBBGvQUKvKhACY7SE9aKgx9SBQfyDcPH",
  "key9": "37UtudUwex1HEbrLxfp77YdZsthMeUREHAEPpF5nVTHj8tBzTuV5sHHJJQLnUV8UQp9vK7UrGobyf8Sk1KpiTKJH",
  "key10": "v4ffh5Uqjnu1EFbXDjhyNP6PxR2SX9k1kRx3qSPzZhj1WBk7xnqo4cssF8z8CcuEFJZ6BxuE8ouezZ8mnjam47h",
  "key11": "3gP2bk6Sz28cWmuCWucsvd8G1dMz4awzqdqrM3YVSpsBjHJGMXMemQCGAEfKaymuGiothXoUPUmhK4FVwZvfmy5B",
  "key12": "jyQRhSuVe88MQUeDG3CuJX5dZ3DiCHRXzDJfCryWQ7akfvHAT3Xv7D6KNPvoNFuk92YvayCujcNQ89DFDshtzN7",
  "key13": "617curfSLSBWWK6ipxur4FtggAVXGBhyf1Hr2LEqR6fhvbDLjcLpPS3NFV97avu64ymvA9pG6uXwogcaRM6BYm5",
  "key14": "3HAm48um7bJfTTJ5zT6JZZkwnSuAPnbPgWEvUJjp3mtnckhoHR2J7ijDZvAUFxwwMC8Af6Txc11xBtfp8PtxiNs",
  "key15": "3TcmnzGAQjrV1DqrHJCVcWyx9cy64Ri29BQ8vhx666nX2yFgdfnuQdHNHXwhpGJ3wFwvf3jhAn5arUeLmZzX5Kwq",
  "key16": "3HMjmnD3SUsXtSKSAAVJUqagk7KXNCoXS9xVvasQ7zZnHzRVVHEVGiggxwdBbJD529dQDwjA4zzPDshYN9ZjeVtK",
  "key17": "4u4qgD3CJY7h12JF2HBV1BJpWdwxsspCuJMnikkaTPhj8p7svH8sgJr4QgV1BYV8t4F46CGRhaXgoJrBjgA5HGzV",
  "key18": "46HjZQpt7Qwv9nCqkN9maTVtxz6VBbRD4ztm9pFzk7bfuEzcyjuZCHaUMzyNhufKWTtnoqpQyJpZ47fW6i3ZSmLZ",
  "key19": "2ZHv7tCuSWupES1RWBYft9w1D4nSYeNtpKkjpEmhia6TZtEkf7dJwpfZD62hukUmZ5avvs6R5rp43LbYJdr9hjGk",
  "key20": "3B8BUUeX9STGzSMADdayjVY1Zbg6Bz8LffLYH6JCRq3G6C2iRdWxeZbsaDsjUrDoU2ZxmdkUK95kpaaQ6g2WsX9K",
  "key21": "z7f985bGZg3MTTYeBK7D3An8ptmhh4nfAwBDVbAczmcuCHeEuuRjkRZRyBJLo6pyhFS8dMfca7oCwjcz72zha2p",
  "key22": "2LguWyZsPjKjtUWot8CkgD1AVwDMrWcamgXwtg23g6bvhaSXNfeXfFPa9J5tCUryuSw6KPXW1NkE8HkvjKiMVh22",
  "key23": "5R9juv1JaBQW6dXVXqKnCtAacN7cFiTf9YgHFCQeowdZpQKYjvo2d2DXM8X6g6QYQoGJbCEGmpWUoidE2fcsPPu8",
  "key24": "5ys5BPn8o5e7DEGqLggtQEnMTFd2GwMiUPbQzcwR1mKjf9x9f78sRmAHMRGCAyeKeUSHo6MxVtVSFkHKBDd7xAnt",
  "key25": "4PZVezccsvVu2bFSC8vkx9Aj5YCnDf7HH7N7qgBQet4jjBCm9SNKuNKGL2ni5cfC4JMsGGenutg4zgkiTHZe7fQ8"
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
