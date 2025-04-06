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
    "2osga6kryKwrAwdGzBYytJHXeUQznZQRU6zBgpeoxNRgZMWxjqGzM8c8wgnhoUBWtAUU7KTod56CbQ1fa5BvcMXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvaTVcYpdupBp3ErUzAJeidpdryu1xGs9sJHANhpv7CcBbSQNs1yKwQazqk2LNPKP2Z9Xb5M9XNshxz7rHeFKjg",
  "key1": "CuuwYrBmwWwjkNZK44cQV73w3PjhxjqG4sCFDk76CHv9HqV7CaFyYxaGVRaUbBuh8Sn7rFAfY4aeZh9Bh7Q5B6S",
  "key2": "4XXwQgxLB7Lgis62odzMtwimoEtttj9kEwx2M81ixG4uJBMCtzWu5gxhQCV72HWw1bk1gama52Czp7dmktjPVKnY",
  "key3": "4pqBpYfrpaGF5t8y11mQrF4WHSqswH1RpvEzaJnYC3rr8jUKKAe3ycEj3vwW435NN1HDVCkcFkknTwTiz1sfUncz",
  "key4": "3YmwBNSeZthi6R6U2qzYYmu3vxQM987HYBcmkvgk99LNtrb5Vn7gU4GWs7UQDWE3gCHHuUs6PbngcPiHbsDnKrWg",
  "key5": "4735rMWvFmEDQtRiXi1GivnZw1z7pHY3Zp14vPf4M3R2KNSgu3uYjcjQHMEXfNK7eBdQK4ShDbqH1ViYtzkP7eRW",
  "key6": "56Zq3eYXGsg9ZPdwGebap3K1bDtFCx9tDdsLgff4fkH66u3JNHdGcSwxGLCARD5LdCoHGQfKxuywEsUTRKjVssWc",
  "key7": "5JjqST7uzKrwmfu3eghJijN9hmP9ZHQdnZc9VYH66sj32rxTPdvRNRUX5iAWERnHPHLmdZXiwJDGousSLWctCjzu",
  "key8": "4djjzQy2xWe94UwL83U1sV5vSJA5M7HcnxR1EZKM111imhi2uDeW1VQrxWsPtPqxh9UAR3fQAwgDxe6cZxdiz16T",
  "key9": "3xC3beMKoS38jkoBBPYee4TQDkdc8zBTGc1zo81wZPf94N96ZTrt79Fty8AYucJVdzTPNzZskdtqznHMjnhz5xPS",
  "key10": "2VH8o1ZADY2s1JrLaWSmAhnPEvicqY212fZSHcih1zHfTm65CVVyPkdA49NQnPW1zmAUkmZCnzJ7EwYfe2pDwhJV",
  "key11": "5qmWgmYYcvE6QGFhd94s8GaG2LZNcZP7zi5u9mXAfpyg7WYuBfuY3ZkwNLqKV2h8Mn2i9h9ioUy8AVirbQdhwM5z",
  "key12": "kS2Vbu7b9TKNQ7Ac8aiZyLjt9ThByR6BS5PdXd1WomRkshe59i1NV5N5ZUZrGPXPWKhJ3MC7avrRNrUc5yzh9tm",
  "key13": "5uThsFCkZ92n7tbBPnkPzR52jVvwnMfTYriiDsZtkDopzp725UVhieuqM8drDqaA2PbnUR1Sc2riHytoqS2WQtQb",
  "key14": "m5YoBXP91PVi2xnUJhrSzzV669m9nSeArrfudFcagikNRX1mMeXwiDwxVvWUsUK2gUftD77D5f6pDMsZFX5gRCp",
  "key15": "tUaNSWxdZkAdXXCzoFdCNkcBDSfrpcuNxVeqNp7hkhPryHromrxXvVwWe41J7NydEAWpoYhoM4FWBCoMN3qkinK",
  "key16": "2pzR2Xu49wVYwDEotCLZeDLUqn6KLpoFTEGHj4YFod9gz1jcBjharTEY1U2PVadT1j19GnwtLcKAGwPz78KxHrAN",
  "key17": "2gQFGVC7cr3SYzFxFiytJafv2ARbVedaXjaGUhgmBxDR7bajGxsWMqN5sVo1HdovGwXWRQNH51cTeWDGWWCrHSrq",
  "key18": "2gUoKVY85jaJtAh6Brgz1J8SkszN9dfgAwL7UXpV1MMUuVWEMaXEhQcz9JtJzxeLbJyoGcgiscM4BvkKZy7DeSxn",
  "key19": "5EwhRgANYqMGBLiRzfmQmAXZPGZAuKGttrpWK3sex4UKT9dPijrf4NRpwS2PsWwhiFyQeFX354zcbrhmBbYFuPj2",
  "key20": "Sw6csLh8hub6mdMdL2CRSx7kyrGW2TnH8jm96RfCY8xCiqtbUJ13kudXbKhxQJ6ANADYyRRoBAkRDr6haoPXGYy",
  "key21": "2ABDa5G4AVT2eovjoQ5Hba1zcFTt275K12SSYBZyZnsHjxGbJS3nJAaaXKQujAmUi51Kamt7bNQD8JMjQKGLwf56",
  "key22": "3NCaaRAxjYda83isien31WhYpSA2986REMZWjwX8Xw9Aovs9CTYyULozvD3tXbDbwPamhRL1bajU1mbDKfxeKtFM",
  "key23": "jShLc7X5KBnoipD8Ym6vtu7M7W5mvJb2S3yuAcWT5Vowk3KRSsJ2ugobfyENBQdWHCg46Ab9Xgfh8We58QxQo12",
  "key24": "4vZdSXSXZVnu175hhUsxbHnUqzo7h4Kh7FEZYWcWdnnyKdwiyApPjiQoP1u7TRQCHh4c23f2fbJsSSiAgKZ4QSrC",
  "key25": "2vMYUgZRzJg1RcYkeCrnfj28yxrpHsWtwYRLXHtEvJVxtiXGQXiFN3FVj5ffUb7JgYfRK5P3CTuNrAnKYGYiEjgo",
  "key26": "4CdGV7k6XWq8oxKqiB5hs7uGeTKmYbeppLEVYjyGQQeqDZE6ihMEzKznrUTPTVrhHv7vFJEptWpFwjvmFF8Rbnef",
  "key27": "4Su6CcSZLQ24kCqttudvC3SAchETrTxban2qvAiScWnjdn9Hi5wAbhE6Cp9UXBs8vVfWFEVr1sNALszeMby5hAg7"
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
