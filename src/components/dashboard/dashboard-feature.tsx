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
    "W2c7xXuD3yjySXrg3Bxz4noeJxHtdybfaLU8zjCaR5t3GS3ysMC1hAfcVtew5fzuvJbdv16wpVc29UNYAU1ajX1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wPfMNHX97TTcWAEGKJPnfNfEspvkZPV2EL75dfQDmeb8gDKmFV2kyohxnNfhbF1dXQjNthqGpvgZWigMjtiAQ96",
  "key1": "4YogwjxxXmmMDAvyDR4GYWyEektmewyDMo8n247WPxWZbd1Kmp8xiHrH6npzy4bkjuiCobLwYFUgNTz7BbewW95P",
  "key2": "wFUWscMyjWEN9CXtAc4C7qJDM6sG4EQCwFJLA2SZqWHc2S8UN7TjxcTxNZH5RppmuFtZJF24RmHFSeZ7nCAMhPL",
  "key3": "3Pzf9wcdsBERt9datcd1uVW5KVY4CUy4pyReA5VgD1M2tC2Lj4EoXB188ZEMa6wuVyBLxJS9eQMajDsAfyyox3sh",
  "key4": "MnjZmtZ51gbeZPXJr3vigS1MiVGuTn4BnmTS8qFoZC9g1yeYiv5zRQTLX9ajE9r4JcD96aVGuv4iGaiV2YDragW",
  "key5": "2921M3MntTJzc2PspUUc6aBLskNsFpr8pgd7jDjFvRB6hB8ZBAtC9dvBXbZ2mHHbGCW1zVqC87y6QHhTswXsi2yT",
  "key6": "zFaampr6PcSvX13mgCSq8GCkhkF7w56FBEQjMaHVjkX2XCcGtSnb92kWBypwwXUVaiZHuKhMASn7a7hU3hdZfWk",
  "key7": "5W7vFbtymrjcxXBuNYwXzv9x2U8vcxr9p8h63CLnFvSvYweUtezSsyDg4QAETZNRQGHg4PQu4mWkLShfhYVVMpS6",
  "key8": "2Juq24FMWAw4qrKHMdjPzZgk7YDZBxNPpyY3x6p9nKPHygp1pNXvq4QQM4TjxCLH7KCjvgs9PZeDWLZDpi6fVMdN",
  "key9": "2uHuCEPGa98QKYA5cGDm1AQnur6J9RxH9j6WcYL53iCyv9ggHT164rt9pVVYR1vEZRafvU4oMu35axhdyfHSyqCZ",
  "key10": "UQ67ZvLMNPDUpEqrAduL4TJwWRxPvqpr42gByXwCZPWfhNCFvi6FK3g8TCVPcFNTinkLmRNPeUMgTG5NT9HAgq1",
  "key11": "5i8F8ecTmbTkVxnf883BJqCbMZF8WwdxTgg9hcjQ3zL3m3eiCsEZEyMSv2NPZKb9ynE7hakiG2NB5W4H6btwLeQp",
  "key12": "5ZkryATVNDsYB5UX4EVPcYAgQEB9qTutKoHgakBoeiBjNzPxstbKuAXPuZ73xF4gFdAS1rFciugDCNG81mtLyYi4",
  "key13": "333DmiXpxnrTimm21Nve4HcW3U7gsi1vBhZSgfvi7fuHWC4i2Vqh2v3gREFQ3TvFFcy7XNVHz4k8TyuWK2D52R5z",
  "key14": "4o5aHz5zwxGi2kh8JKgwoh2df637LN5K9mN91hV6XygmKcnVHD2UmeL5aTZDxeoyq1SUnpKStqb3NgxT2ky2XhHe",
  "key15": "4MVpWdoxgpQQKQY6NTQ5nBqwkYimeXCp8kcE5VqRP1Bg2SpGjsX6U5gygngiEFT4Kv389KiVFEW2s1ypmXUrci8o",
  "key16": "umFpDR8PhWYn3EUjqhRMm2T7YZLo1sgkPm66yHZZVVA31xw5B6RC3TZKaMmXgQhc6f9qJ9BHfvB2a2g7yDETWwc",
  "key17": "HdKX3xYknE7hEV6Z7RKgnNEdWNfSSsBdeE1rt6E27c6qnXigCGuSB88VgPCe5id7t8PvpF9whsqrUn3qLssgh1q",
  "key18": "qExMPknv57hGrtaAkBEeNCJ5AM3pP5tYpXwwJogbVBNZCoJkDxB2dh2cEAVvj264wcCzxr6RqTHEx5ov3Ly5D8w",
  "key19": "cZUi4LUq12WsUkiQ2Ma496QvgtaT217DW6VUk8QLwc5p12syhi2CnZZsZNxiK5jXDbfmstW8BzFh6tp4Rcu24UQ",
  "key20": "4FnupXUvGrYY9dCL2KFL2xP6g3bZgFEXoNzd4F9RRXi3VANkeEFrx79ugDJ2wEmryoo9pKh1kTF7C8qSasuUisdf",
  "key21": "DAnNmrJK4KobPc1zfTqEo7ADBqmq6Cmp1QJy7Mav8cHMm2LKgn69R3Wi7HYQroDaK3VbPyLzqB17tx5kpZfErzc",
  "key22": "479xgSJ9ssbNPQiTVs2daHKHVeSCKBEeQM3NAwraCXDz36gaRCAT6C9sv4j8hkK2uUzbaw5TdwFDiVvA99QdrSVS",
  "key23": "2Nb1w4h9pnQwu3PKMMgHizDJBUqixo19cQMwkZ1Ujk7jMuQSFZNZyMZnYQXDaEGEbz3YgBNyXUf1MriZhSVzakQQ",
  "key24": "PabmuqK4aQmSWpCefPtuSufm4Rp4G85p6yPJsrMQBnNLCb5X7wd4wkaw4CVoJkYh6c8kapSJJPQzVLPNVzaLPn3",
  "key25": "51k7k77yX9TWQgZow6jYq3WAEQ8co2iieMUEet2hNSXdtB9n5MNJWkyeCpgKCHUZUfQYYP1xevCD8xTBpUAXGzkm",
  "key26": "2JHcTgcquXhffHDKrwBFAQmvimj489UtRMDkT6G9y4vLGb88Y4uKKk5wX3w2qphnyS4KsbBBq5T73wRqQDNTizz9",
  "key27": "5zAwkigeJG6A2yJJrPyBeQ4fcbmzrKanbMAr1NyopbSokaHhei7NY7CcKjUrdAGht8792cgLvVntxrnhhKPDHhkS",
  "key28": "FYvaaa46rZyoZoKKfiR5sU6YfPa3uNySjCN9GitgVSKeUBzz73Lfzv17h67dCFzCoEdb4kgUtqxh4i7KVkmCzu1",
  "key29": "2421FZswUxXEvadb1DmZ1eBYQFWXLe2kgAGVpiywAYDuDznwhet4WgNU3nAyyV4LLEPKEDx3nUSsG9S9vbAkMuNN",
  "key30": "5yBnpR5cn6EWcWVEhXF7zJUqJLcpsYbghphNuA94VaPfiqdcpVPKx68eXVJrinWpURZnZ3APEPh6Z6fdcLsP5TzN",
  "key31": "3LwW6o1SM15FWMCzKdLBBBCoa7tTf4e59KW4FmBnMAMqnJb95L2amoFiFw5sMhvcVGVbxKRuPb42U5YUNg7k4Aop",
  "key32": "4BBAfBkixfAk1Ucx4CoGtHTFu8r5ABSnJ4mPTdo1anjsdisjGdoANZB8i5ox9VFwwxipq3r3PGxdfNvobT9553fc",
  "key33": "2ENgUXVS7nv8ereu22FfVARuQV2n7o5ppqdyatTXz1SSNtejs2QJqp6XgKJM4ZjytcyqFEGr7XED7vEpbMQzFT2a",
  "key34": "37Pa75E1xoWrCwn8cadZw32ZoN1s8zgUnV5Y29zz8xBM35PgWDTUAa2R7kuNrnhS9HfsDwkhBURPL9h2M83YwVAv",
  "key35": "65AhrexmK4yxvQDPYfVpJ3cij86PEGapDDhsRGK3TUjVBkFx9vmUryFEKUXtU5xWXwMMJDhM9qBwVmHp2uztpMbW",
  "key36": "3J1QNUhK4j5xWAK2CV31S3d697xuhgHCFuyqaM8aXepiSN6gKbXfVzmCwYVjteLk8KuzXprQwkNrMUuZyWqJ8ize"
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
