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
    "35rxEHJ6hA8VinNriF4XCfnJpJUooSWgzeNAp8NY2g5zEDuhLLbAHxbkDxaeiRWVHZ161muhMh8i3UW9UmgbuE6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvkrtwxwc252unwLwnoqMPw4NrxEcfy4gYvisARrAHb9rc8GYrHZF9aZvpkwjMM2hPT9PZLwsMSy2fkjPqvVm2m",
  "key1": "5C7N7qwE7HFcXYU1fAjS6xUaGCa4HbJdUM4ssDgKi3ZQunLWELSfkuM6ZWoY3x9AVPqNeniVZnBHv1hb68f4Jcts",
  "key2": "5YpzvyUTsxgQEPAFoXNrNKbMhPjBspMxLpf8aHQpELr97LFzY9b5ieBXnHf3ixox9siM4LnJc39hp6aE5BdXHMmy",
  "key3": "5xGQQMWbDHtWjxotXGZmKKqGRTUWWTze2umY5NHYDb6NX1UgeQwtG2R4sxErwoM4TirLk5kKZQt9PWPnJkLux9mu",
  "key4": "3qcpRfM1671FxU9GGbZa39GUZecJcRnX5ToTVeQf4bTemkzsjPqnrsVGXpkeCTrwXDDqQaA2qKCM493FxGPzGV58",
  "key5": "5QGMi5xKWeXu69Dzf1tVpnfa9FvxzomrpcTCsnUqJ2nt8chUGw7eP5HXJEEapR1hTVsZDYaFBW5b6w4kXANyimq9",
  "key6": "2dU5mTXKnw9DaVAqvz2T23wQMXSiJ2wH78UU2ap4ttxGn5mbZ16dKSdufbUXnNYMuGHufiPytU533mdk6jmKg3p6",
  "key7": "3ntPWhBsk6NnDZfFFkEN5yKhxAu4k9Ep2YryqDB8SKDi4qSiK8WdtFxCiVAL2FZoBk2L6M3mvGY6hsaWnJWqa4cB",
  "key8": "b53duxpfbH99k4EovLMEsXosTJauDRa3PnHXaGVz5MSdyYtn46axvDVXRHoXxpmVDVCitQs2G8fVLUg23wDBKYy",
  "key9": "5LqkjvgmpMoywej83BiC4oytEbuoLBnyzTdFCohTcDH5NuzeWrJzGKmgzxgf6EDht2hijWFv5DUZPav5emnYNhPF",
  "key10": "3xT1fCKMQVQYB7BHjcQ2z85jbL6pQgJaucDQ5eZe6Gb8CMY7EBp3nukCcpQpTot6HQZyknKU9MKBvnL963rH9136",
  "key11": "5zChGjmG7KQesHD3k5JnvBWwanfgeRmRXQWBiuepKRLs9HgyB8MoFYKxNiZ473agKuTevQNAZLByGjev617ijkwm",
  "key12": "338PkYS2mcAbRyxRZeVALPcmghnPH2JbyHFvuGzAoR8zQFUG9iQ7cmpU6HTdZbqdLFjvV7vZdnGveMHJAbY18T99",
  "key13": "2nMfrhuZNoADDWMqEMCfTDnWvNVpJKsH1MgSeTwTGX481hGtYkwrmdPhHjBj4YXgTBwesrHnjGQowW9JdFQCa2ib",
  "key14": "3cRGLj6yA956ti93aJvwJuSetRorz9wJYGB1fSBTATrMas3UfcvdFftV5gSk6XvmBQwwr7qiHX7f54X6mA3xJXPw",
  "key15": "5gYVaSnS3PXctyd1P9EofiS9LF6HR4sodwU6UqtTR3steKJEjFHNnhf5xrSYovoSn5M7gCE8ECyqUdeLEVEeGpgL",
  "key16": "4VaKxnjgKVTnscKZhRn1wnzAxt9N1KT5UMi5RZDoqaeQpRsLuJohh1qqdDkbtMuJTC45pzcajFPYJN6TpzbsiDvd",
  "key17": "2QM13zaArpkSJ3hqKBeJ7BSuATCcsuMv9DSLkyB9riiEDvBocrisGWvga9NRM7PreDgGzGwTm3pncv1DhDFJZ279",
  "key18": "hoJuoGegDZFcEdEtDuzuDZyrf9ZLWiH8yf8iLqBTLAFVGWbQKS6fn5RVGyrTSbi54MtUcnQxEUQ8bVurUdzGKAf",
  "key19": "2Ho9ijqDygvGDADWFWxctxqPP4683PrB5cEJ4xfA7SnqWqaNYRHGtnXVBgNehxPDCRzc56n7Ce5QDCTfP8YgeoC4",
  "key20": "aQaEQFgQ8pCgDAgwc9fDxuVJFY8PLPXYUBw8K3mH4cCmoM2dDTCukW5Ph2AhE1b57u3ouQPVNPCyVcfPwNsu3sH",
  "key21": "5ynXE68GSdCccKL4nofxhUrbsaEUrM4LF7VPZGRuTavELmTQnxp4gySRJXpth1zAi8KsfZYxWooBtKdtmTkomuBJ",
  "key22": "j1Q9gawdHsdMtYXkrpbWnt4FsXbJF4EWkHTmqRUXCw9dJuFtVLozaxTPh4GdRmXdoyKX5c84pJzSmKYYodF2vM4",
  "key23": "3vpM9YgdQnEfVRMj4TUhmfs7RbUjUKjA2mQje5nbfqBgFwn1FyPHtxt1V8DiLk9KboLWQts4x4efeGvWPvzN51gH",
  "key24": "3nHaj7a3hU4rGmd2vccbM3LdERfBYhfTooXNtvvgfrsLT9gGEcSUPXtKJFyUytBqeCxHZrH2SPnu5JeVjRhvDDHA",
  "key25": "2VmqFXNaRr2C21pef6GvANWpBJdqavxGiWTXBdFz37U2N9UTpPytFwbx9rZ9vd6ZLXsG9uTTDbHC5czoYETMYFeq",
  "key26": "2EBVH8LGhDXPaGjY9f1kTQUqatxHMJy3jT4SVhJKuZTpEKZuM9HhPUUHPkKbS5aJBb6nnkmnonEDFrQF7hxPKcGu",
  "key27": "2AQ7GioWLGcKZJHQGe9EFcW4oQE1sUhag8MyBvemnJT6cUdfBE6ZYm39CWJqMsnQRg4iGo8HtH9Vq77JQAfdETvK",
  "key28": "2nHFoNQK8nbH4QtokLx3GoGkTYrtZetCAmsnSkDK8rEA2VKyFsr3cjyhyzGJA9Mh36PkeY1qHnAvRYV4xtga3mSt"
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
