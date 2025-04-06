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
    "5KaUwEUsyCh9Vhg86RqiQ2LjFgQEE3wiUg5c4JqvgqEyhmZz4XGk6ZVuY68U9vCfH2CcciZCFRc9GseAMNKV8M29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kp6NXkRYkuEKrwpcjA3ZrdEBxn7EMEizwSZcw3zaf8yxgHNX6vDDr3vQimU4RfESGyN3rVoq1UpuEQkhf5gax9D",
  "key1": "3Uwy2JmA5jjzwcsh3ZCKQF3LQYxc7JfRPoub6fvWiJHwEqmXQR6AewiWSxVG4Kb8q8xtS2Ms3BxTTThK6zSo48au",
  "key2": "NU5S5b1KmoVtZStzMRY6ayWRfBzXSrriJRQLBAC6mo1QCyRsWHnbaf4ue6zCRhFJmYgbzaTppy23UM9oAbhCxdG",
  "key3": "5Mn6NuTFqsiMTHPm2ZBYjSLwTeEU8yVbxMLUC1RLFwPB3vr1gHYBUJRmfJYyPEJqAaqHH2wWnNnko8qoQPspzCbZ",
  "key4": "2dNUaNA3VN3PqJSQ4TVLbt5ojAaVvFNCnEaEUY5czBNztWx9m88rGZuqNjn3Bkaw19TRGWR2oDyJAxNh6srJrC9w",
  "key5": "63rkaYwKq5wJts63rZ7UVwcar4MwYUdPM19Sf93GhrctGktRxzGaT6i9mpFKGGJ4koiNPNKA4uhEk3Vrf2UEAi79",
  "key6": "47ExAeB6YL5BtfrznWXfh5QtvnTZN3755yYZrLa3zrWDFd9MCY7NSs42nLLUdz8DbXWCGGNWfCyccAvUbUUAYpKg",
  "key7": "2MuxgXUPRHA8iN9LXxkiBWrZmui7rh2iRMYVJbA4hgsdzxR9ypdAbcLpTA2tHuMFeDxoWT1Aq3VPvBYwpUohW6sq",
  "key8": "3F1ZdVmYFvqSUKfdjAtoawPadTywMCbKCGsiND3yv4rBKyAAhMWJM37Q3VhvZsDAbW7E6ZvL91mJRjFogiv2mx7s",
  "key9": "33UkDxDS5RHWWnnJsdnJsfaQApEmc35rTWMm9iT17mMdSzPLb6XdGrj7nVZgEnMgNTLHHjC33mC96TEJKyT5r6r1",
  "key10": "3mheJLir9xEuKke4JnWDZGmnf3Em6zQZtcNc9kUTQHh3Fyu86558Sbq7vsiQFc63tr7oSKVx7J8RyghkimMSqVa6",
  "key11": "3hgEcnRGchFJtHZwrqjCiDeSgBQgKr9UjY4q5qPUiuD7CQaFwddBCRW7VVZ3j7gs1oaFrhavCDgwJH8TqERxWgTt",
  "key12": "pDzwKD4ND1Ha7FbuEn6zq1xNYYJLywS7NtVz8xCiocRcDHUc6wg3oGJh6ezsxr2ZHcG7u8B9RCxr2QjXuaxPhAQ",
  "key13": "3QPzkNkywMw9smTekZSu6BNgVkKH1yYrZwNKKcuGr7wFMKGNkN6Kn4oKUmaYvqfKDXRQ33ubKxmdYkv7s1V88k5z",
  "key14": "4MrMo1guEYH68x56fagbdueVebieMw3ewdfBkFjm1QXRUKRi7pj6ki1wePQe7bF6oCyayDnGKfYYwVW3xRMBHqnx",
  "key15": "3Y1HG9XiJpKfKiSNisWCP3bcwPHVAnTxf75axCxRQTtfFChM3KzuPbw6oYN8hRCxU2n6oADxfdPRqp5objX7eMRE",
  "key16": "2kV8rMFctht5AEULgC5wPwV6EiYLpSJ4zUAGpwMyVxWJq4z3kkhfHy4iBo6UAvRhkmqmWLMXJSPgjR2yyqv1WyDj",
  "key17": "5pSoU1R9jysYkjKejFWxf9WZ1w8pEKoMRr6XTSEVDv7BjpaYX9Mk2au2q8Uh3Ka3ZSZWfWWjkrpTUEtbXc6PLBjq",
  "key18": "T3H59GxYa4Zpv84qBGZikfg59JSe2hF2kvjRcCYkNDttzKA2915X3E1mwxjJ8xsDFV6kxJJ5aycPM6TwhEiDMXT",
  "key19": "45sojbtLCYRXGZiCuER1t1J98cmpZ1SubEMe6HSUSr5QrisRVNNuTXzJnnTaRrf1HwsoP4UCJh1CYjJ65VpUC2aC",
  "key20": "4VAs116Nn4UEkHGFjVsnKM8XTi1Eewz4i1WpLS4bZaL5wqpiKwvFvHVkke2BSGnaDQ5BHhZkUBZdvDhFsG7BP3Zf",
  "key21": "4BqSGq9MjpxzdD7Ec16MTA6TQCBfupeqz6GzR6pUJQysAQBm711i5WJ9PqEPNoA87cA9KKn6RBSocN3KT3EWzxdn",
  "key22": "3gM7FMRgg2kYUxjMRvHs4FJyE4Y26a7UNtVAWP1VMcobtyWhvoQMnNE9gnQd8v3gdtjkfpxgR24egy2CsLXUCbGr",
  "key23": "RWBAQ1w6UtTuhGky75x2Yr9WUVTBiDpcoyB3bSyR2i6DFUJTLdLLT5hTGyZpj3udkwxwHLWAjg4AEpfyVygRQS2",
  "key24": "2f17jGCiCBQeTVenjhbriQSqqEFLE17X4pPv3pJWi5E9cKdfNongfXSYqRhrEA1x4scEqaAsTDTHxdiXeXJpJMWv"
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
