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
    "4CGDuGRXydNeGHZ2W5cXrZ8qqCiovCN7hDom16bV9tAxF96RuYG1TwteaTkPRTY7S84txQcjvXZkbcSbQFEspNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dC1x4W1cj2LuKx2S2u17tXBqgF3NEKjLvLePGfbYarnd3shVGZWbMoqhVHSx2XmRWxwiXnH89FCxsxyJJB8xp5Z",
  "key1": "5hJHy2gwzAuss6XCEFCGyt48VS8V15kg766F9a3EEEbRLy4cSdhfcSeEmPBzYmjUrwLnM8mUagiat7sV6p8o9r3",
  "key2": "2wCwWCMASsHq7Au8Zhcd7Siz5RvQp6i8Aqc3u7Rh5ErZrb3jfMhUxG8XVdakC1j2eZ6euLXe61xR4afYDUqNxwJN",
  "key3": "3ojxTuZx6X2eE7o2YEdRHQT7bhpNJysxTbFcBffkKU1c4HF8EBYtyvzdcQNsuALosPfMcwPsYH4Bj7dQGEEoAveF",
  "key4": "5WRvQXzRUb9FPkRfyoSAHmV4ui1s3SgX3n7NFhoJnnQUPVtfdczsEH6dfxLLpSsjkdRrFifDWN8BucJejRdGto1J",
  "key5": "5ypmf2QbsosqRHhbZZHm5uf7VuULGabNhYdXepTRYgwEPktjJLRTNgJPSAMVGsBiG9BxX7Yjo71FwQV7AYBG2J3E",
  "key6": "3WyJyhi9aGK7Vs1H3DHSwNtbFufHX93bYQ1mDbdy6V9FW7pM2w2mAXdY4vzEngkMQaXscQHFsVoKV7sjDvU1VDP4",
  "key7": "G8E1np1yfEb77fTjAcwXTzZ88Uv6U1eP9osdEua5oL9PgenevLviCHgBTzP95SuPLvaM8w1EMgfE8mXTFepyKAf",
  "key8": "6tPhqhHnRphAA4uXmToYDkzCxFZ6g9gPi4Eiz4ud7Ke8Gws6yYbdPXcK99EAKqkxFN13315tM59ULeazFCKSfeW",
  "key9": "5n8p3FB2RZffxx9um8bCiGMWFx41p7QeHKNMeiL6YwRGDSrDs8zSVp2TTtGR85AgjnP78tq3nGnAKrxVrSAWVUZT",
  "key10": "51kGhgP5S6YNMnqRrMwM7D8hWjoi748cq4MNtZapCQANzKK89Rb4KJJpa2K8pNqhupbmUB8iCMibXnAzBFvKpXKz",
  "key11": "kDboEksfuYYghVhAjUiCcrgprBbUbLsf3AxVvnencWV8jQzbsPcz6eqUJA8rGSizvfrEmQd3QfnUiP7cyKJz6T5",
  "key12": "5UaSneDfXHz1mNxRFUQDNNk27QeeUkVDX8wdyaGKyGkgSFz9wbWZAAkzbsmucUitmSrXJGVgtScL4SoAdR6n69sP",
  "key13": "56QBDuJt47LqdDdn23JFWkKWw7JNoCSubQXbzqjiUXNM2hsgfeVyoUbDcG27oG4HUp1Ses37AJKi8JaruFABB1kF",
  "key14": "3pB9MvYJDbTRU59MGoMPdhgGWsnrqcH5z6EzZY2mn2Wi1T9sV5emjJ7JpLyqWdroHWudwG3sS9UhCz7F2znEScjC",
  "key15": "2MTetr4RTd8vjtm23gLrf9PiZTJCoSLgtqzELisZzef8yJahnYBftojmY13YgVPqyRSbpv1wNWpSCMeJtdqG8spd",
  "key16": "2usxPekH23W28jqMbhzAH6PrxJaJzgTxexANV6eg2cY4NeSbRKMrEY7XJTpkwKFkJcDfmutjokTTthaY1qEovb27",
  "key17": "bo71UEaHkK5WzVhDb2tprMootLzwPqf4MCiDgASJviYQG6Gpf81ZSRqjgBKLkLmjVfBA1mYNSQnZPhNDPSG6tgw",
  "key18": "55yHhrxfzMGDN12XPNAsShtTiRW6HPLEoHDZxJg39duG6FvRV85FdyYpM2ppAfbPFfdzqHU1NeW1RnVhxSJzc9uA",
  "key19": "37br6KEijsinGU4vZqTJaK9V9turx7mCmvuQMvsYPYBxQdbYmT7cQgPvJfpHnm9syQW5D337863FxThtJK53aA3",
  "key20": "55UFahayY9NeusJQYdnJ2hoYJmaNhULjeHFYJx3i75utgrFLFT8pakm9XEHFVivaax3LmMnG71CeM4Drc9cpuWMh",
  "key21": "5unqFGnJKrAwjZobXECJPmRAyVMpp5vVvgh4S6Fc7Ri9dMVWK8wevyDowmAGfSWpZSJQhz86zND2PrPnqL4yNayH",
  "key22": "5osDy6A6xSUbQ5MGNbN8faq5uEP58eaaYooxFKWPF6hMiEqqWaTuREFDVuK3RSSRMYyb4UuhHiVxVQWbD6FKy99",
  "key23": "4py7S1LKLAxQbpoaUD5VLdM3U5jdvzVpBPtw3gre74Vqb3VomKoQ3heKg6nn49sa6C8jQttLJ7sHCk6oiTN9cWdX",
  "key24": "36wZKYNKWvRACbEYkTTocW7phcJANe91hy9HnvNF2WGNTRwe4rhVk8eAYHmdfnkp8X6kRZwemRCCYtZvY8Fcwwzw"
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
