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
    "65XBsWBFaXRSM7T2WHYHjXRy1ur6prrUnbcK1GTAsyuYzB4MT9SzMpyKJDeyejqEg8rtJot5v9vw2L9WBktMyvxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MfdDg7Ycw7MmwyeiyBHJgN1PeLpYKx8uHp5GhhrX9geauxUaXHypsxHbRWsMxH84qTZFyTv4tddjcqYLqhUUkLm",
  "key1": "39HydjG1MUFzqHqH1jncL2GQbaPbp8339LsdLsm65KNGEkaiqhT2LNY2V1CWW9xEbxBDYfYemurW479anEiFZpxo",
  "key2": "5dB3cjn7GradgWP65V13TmpARSMhfEJTPrxj1zViz7ESGMoNrzfPrNXSLrAFUyJE8mGSRtfv4f7TQCjUxNzvGePJ",
  "key3": "3bNkPX6RufpCPFgkN5fV4dEJKH7E3GEfkCieXKB3Ro2P2Z6NyCCNAqcX9iyjNBhJwTySDS6mdNxU3oAWQCbgYq7A",
  "key4": "kwMZjJAMnsEr3WnaDKqd5Kg712jpjWtpT1BTkpCiDdSdaBoNVvMZyL2XfgJVZuNCenfEgXhaKXsieU9h3QSEKMg",
  "key5": "5E4PBjj8zZ2kw4GpL7dqHQZ7WoB39QZDTLzvt7JVXga5jix9HWaZJKJd4YYLXdiwkWBUxKXTCHRQ65HrXPjwxvz",
  "key6": "5JR7HVQVGwydJwy7RJ6fqPEWuJ9yfxtvkamCDazpXvccerxNxuCSW8sX5H9xWyXCu7vM76b6hiL9m3xS3VAMUQGE",
  "key7": "5ZYZpBVpWFvn84djU9mDZMxznxfETDA9rgowhFankw787qL99PpKpMj2as2KepRg9NsDhEXN9BLuZ5xLwMmbijGv",
  "key8": "45C2MTuwmEdU6NUkjFWM2dTvzZyxPyZRi9DJTSQxoFPyrBNbPu7bP3broNdb4A1QNtqW4WpwSZpBYLHkPUaSYnSn",
  "key9": "5uGBQoVygCvRSAMEnT8zQEWK84nBL3ZVFk7dso7UwuDQT7ghSRk9xoZzJwJRPNrePmcr1hxoS7LQgShPqc71wH2",
  "key10": "4CYKbWuR3trW6ddRGqyQbefiWwbsuaGN9SP4YMx71wS6Dbin5gNXBvDwH1DdqYYwxXEgdmWXZmTJsbJwcZuiTeUD",
  "key11": "2aovvjY8n3pw9UpbmCSZDzFrd2orEbAm2r9Unxypn1dykc35MsVi7QtATsfzaZhoppumprs7UgKaJUDDTHKJkt8t",
  "key12": "pGmscupujSkeULWJPi1RUQTXcd8HGjDHGC6mp9bN5Kp9uu538bwZHVZDwgZnsjPP8UmUPHmwnTjzpjRS37krmyg",
  "key13": "32o1Cips6oW5GGZKubgA3gieNRPHpP5NgckcUy2qtLJo6s8WMRPgcWjdbPqBYt1SQqUUqsHPh6C52HykMfVtCs1Y",
  "key14": "2VZAXAooQh1DT2enVcSDcw4CUaV3fNYejoZyh87ELS4x4gFTMaiEsds4typ1V6LjmPJXuVTrVaorAFHYGPUeW8rZ",
  "key15": "2BSZXZKxUidJd3tRuSMiCtJ8gHvpKsgbo8QmveFEyLiytgzGeJc56L3F4b7FNMRdQJgshGKJbNMmayRjwgwHLrnZ",
  "key16": "4odEyQaL1U8MzFAfYUdETScKLYRmfY1ZKjZewc2HH8haC77neGw79x1RkRXAdTpcAC5GMY6RjdyGttaAfGXnrqoR",
  "key17": "51y6y9PWLnhjMLTiuLhJwmt7STjoTpsWxRMQ97f9Vdxt9UJWLaEZPyTReehbGcs1G97TXf46Seoin5fawnkPbFUs",
  "key18": "5VLcHctmujK1nVr81fvM1V2waUUL6Vp8uXWFEfT8Eg9wDKodaXP89wRRrUszADcVSDMztKZm8pmfzyJA25PL6DTf",
  "key19": "2fCrbiP3XCFVTB4DeMx9bu9jJ1u7a85pF2pWXB4e6o4amBSoaf8YRFfskSJYWdFGpr4rrvhCH7rKmb7QMCYqExL5",
  "key20": "5SEjxqGiP1G8LgENDgj4Ct18P6yUNW7cnpCP6CGLn1VcjJ2gkQddoX7okKmJyr6uiUy3xRExCZtEHGZvTuYBTXYr",
  "key21": "4uyzvUkHwH54roa5rDQ3e16F7mSAaStacAsASJhoKKH5YhrQkg4EijUshZDX9Wd25G3HQ5eLy7L4TwvomUuuFp92",
  "key22": "5fVZWB3mhiF2hnBzjzUoxDXbWNhbxK2fLtXAtBZkk51KPyzkCudn3ZQA7NvRjrmvZr2wf3kWMcWFwSDejX57NWpd",
  "key23": "64EFd4ARXZaGdQTrA41Z5iPGU3RtmjWAqzajhG1RKCLbtdohUfRkmVJP3vYjaBMePFjVKeoZYiURapmsYiQaNaqf",
  "key24": "2Terf34fPgjdNtZfYCUwKf4bc3xZzrZztpGnpPu6PEqyNxec3jh5Pms5SxsujpHvn7oPsHNKYApw3nmB8ipN52tF",
  "key25": "3NeG8YdVVbodRp3rWiS9hMn4CrgaVHCXWFdE8PsAXVf8Ns78AJPBWfU5gvw4gDuvNgXhDKFzQYiRek9HLj13BMiS",
  "key26": "4ShNsmgnb5QdCYXgZC4oojbe13YSh5GveG6GgZj7HFcaWbVirrgqGmMZMKC9c9H6KjpSxDnS3jXadSujfZs5z31F",
  "key27": "2xfNtfZRu9NEPDXbnHxGVWgFKCYqhCFNq1Df1o2fdhF5EmUDMWwtJZgPksiGp3mYDQ3ErWKTVVZA1XHuhWP2NQxf",
  "key28": "231qupn1VXS9BMgC7DWDaYVtYAAUpdfApmxz75bjbiisrJMHV5637dPnUBYGFyqU9Z483gLQBQzYuqaNpsUAPvig",
  "key29": "5NfibSSoVfB5qQLbRs2pJ62zYL7xVJEwGhTedRbs1jtpZNfTCF4vvU4oWT2xnBuoN3w4Z6nmLUFnpA6EPtHGrgkw",
  "key30": "4nLhZ5XcPpJr1ksSjncyBHwndzJzSs6WVzE2RobnSKcY5Bgf6fWYMvsHQxJ1buG3uVXu7bbwbVNE3EP5qEpycvq5"
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
