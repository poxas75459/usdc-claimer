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
    "4L8csvy1JXnBLisEUd5aMAySDjYg2HWR19qyEs6GqhtcsQWPkTWnyovZGFF8S9NzXrGvtrAgBan36rQxZ3hB15ro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qpRiPesrXxa7yeNzdctJ6SQPbZbTGN8xny2kyuCAMZM49qXkRUajmhbVCj4bz2P7wBdMviaektbneseNNMMPgGM",
  "key1": "42ghbAbQZ7jMnNQkjTHQ6Vv3uLBcwJbJTrMrEfotTB7NigZwudUprd8bAyamSRLAfVFCMP8Vt6dFvL9tn2BwNJkK",
  "key2": "56cZdud3KLtankcTUhRKsJRTJs2t2gU4BzhN3QAmwcbRd6zH9KXVmg6JLSVyWiL6JMsf2oBpfRVgtbyBA6yvWHtH",
  "key3": "2EH6RPCFsLpQM14pKjNLaTgTYuQGvZiupbRCnXfsp1RG7HSt5vQ3oumRSBQub6wsjjskqFNksPhn9rjxJTvn4fdR",
  "key4": "BBtf6UAiJnA8V3rFm88ppCco5g7o7jXzbjTqKeLbB7qQsv3nj8csz4Mi9BcdV51Jy2PzpKLUwTBWCRVujRj9RwU",
  "key5": "3cUjYBVGoyAHCGurp9T56SKk4BU9maRzWGn8dFt5V7g4rLKCRHtuP9XWbA5AFhn2ap3ZxhS91eyk3VnZFLWwLAux",
  "key6": "jTCA5BEjCLSiAwNm3k2nsbzbK9RWDnrDg8tWQzeR4NhYQqQqFKFWo367JWctF83FxNcgqrZWo5DZooRja8q3S6u",
  "key7": "3Au3pR91HysXyo5BoZLddPXA8vgGeU2b8tnZgx38KofbSRAhcQoH9irX3WCVajZRdYVjuSTLgtZiUcfp1AderM1k",
  "key8": "21pcXkyQqX8bgDTdZou1SZBuuTsb5FTVAaxni69YRMFj3hqs5ga2i3fhnxcpsT3kw4uEAb1soHanzga2wkeVcG8B",
  "key9": "64Y2zX97Nwc6ms321bqma29Z9wffZ4eKS13YTHgW2iKPFdi9zbGWDv1xHn9S2p8E44UEYRwZjWTV5RHuovSkRtZu",
  "key10": "2heaLrZcsQQBhFTYLhVCUTNKRwPeXUQkymMbpiY8ExoibAEkXSKFLenKktZQQScg5qTMdYctJTAaVEh8VchSoQFN",
  "key11": "46mGSYhcyVhS7sixYsfxsmdbQNN1asfKCQBog7Jc4ceSpN6W3xoG84pJwmbxwRj77y8h3cEsP3KkwvVNwrFQsC8n",
  "key12": "3rUmiRFcPadT3XsZdCBqUTtauW2AixxsoVK6YWxQjJtkjaFcUno1oYArKKr4QVrt1FnYX4YS5XKAYF1sRMLmFYo8",
  "key13": "3rrqb9SkmvwQz5tc7zfHFvxiBj6tkU4gcfHeBzqBiKdFKWbGxPrvNcLkiFdZZ1hnNsWBJfJggqLiM9UWTT6pyVnz",
  "key14": "3edjtQMMvVLhKCkAyTpPWjUKq9dEE7rdnJupxQukkdZ5AwZwaQuk15eXnJz5nqge6DUmHdRXEUoCy6sNkXn4i2e7",
  "key15": "4L1CJvAynzhBFYGrpksbXxT3Dui5nVqoZANkMi9MuHWcKirdsUM6xv6dEur4jEXJB4AgBiEPcrWLbNEJMyKHLdMm",
  "key16": "5qwB8uSYEAdfHb33HcUqC7gbgfjcpizfbJEXCmV8GiLCa6zbcpjS4i3FhK1uMHS6nAJtU3J4VGLod8s9DmCXnT5N",
  "key17": "chPuUpBUWwxsPaBCD2qwg5m974BKPEu9AXbyRVe9muTmnxykGaJm35oAXWzic4ZwA2qgVGE4KRmd4CFWJXmNKHc",
  "key18": "27bErUnvjMn3CxJkDQYZkXHkhtJR8MA3nWucKaYW8UARa3g8qxmskruBXfsGgx9b3UYouNW2pLq7r9MtVc2SRn2W",
  "key19": "66WR6a6H6UME2TDPwNRY7rSxycDF98tg6i4Js1SkAHT66eKHodRVUN1rJtB4tLxQ4so6KCcW4EfphHLrgfGUdjTc",
  "key20": "4PoGbytDWQZKL58jypZe7xpFNp9ehBcQhPU7gNdTMtR4NG2TQCMqyUBSfp51Dd5VQb5xsenjaGGdvHngSZgaQ5hS",
  "key21": "5u7mu3gd7JJujwsKVHzVmiYyGohr68DkVTZnpjkHauntN3tYna7DLfot3cuMRrrrkCbcCFiLRtmYzpRuVR7Q7Yb2",
  "key22": "5rzQ6QPudZS4Re4uSME9u17pgyTgruKXtcwA5iZKs45JUYPn2Z76XfTkGeXt3VSNmEryywSVB61FPmkTcnGDMKqU",
  "key23": "2nWwypfo3DKDoDuh2qjuZbqk8oeqCUFPV8pAcrYdeSLjGPgPCVJn8qZ9JwAEqwz79F1TKMMZh6LxgVxcomf6FioP",
  "key24": "3qrTJuuzFNP4wwjrvDjr8ZdPrZf6aamPL6Exo6s3geyHxNWHyvhSXioDkaNdkCKBxcDBKSByoEzHDJU1NpG47NLn"
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
