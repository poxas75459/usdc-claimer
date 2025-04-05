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
    "3AEyvUStAAG35LnzidqjdTUpq9Zhv9hkid5BQH98jQ1DAj4JDWP1pc6miksc62GvgrRuehGNzXaVLg1KJ35d3Zvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dKkuMQcTyUF1VQtaFZnkb2rWoopSjqR1eNPSkgeBdh8Z3bCyB4qS8RzfFNaAe2mzQXCJF58DcouvFYS65vsoh8w",
  "key1": "24v9gPWLTjgKAoJ6WrYE6gnBxMUk5ZPJx79Zh68gbVcvdkemK96jv7Y4HXvAopWZraizc98f9hDi17QuRiXL85ZW",
  "key2": "2NnAkT5JdLYNNb8of3x7cg47yVwSfgFLSw3zrA1FhgE7BdFNTFGnZvDLTMYudNPRg46vfDzEeG3nm2TKwtbubkzu",
  "key3": "39ThpJHJ5YoCPW5FY9CPpVHHm8rsYvAWwj294QrCESyJwRiiTPLmxiZHy4vSogQsHGjtWv4t4Vfd6oJ8UvSAGaLn",
  "key4": "3VUNiiMwFhWQbqrUTJEiTMc3EJLa5og3e6niWoRcTbFRurjckTFdR5iPjWvT6Kb9NMCHGrJWkk9a7jihW9jCrEaz",
  "key5": "3gZTGDMhbMgZeGiEWmG5QRcSukWddhe7Vx7Wjf3Bypgr3CMDDdz1rytXdaujPq9xJu1iAnouWDxrWcRxz2ipzk6m",
  "key6": "3fLouYqtN565krRmEAJcGWa8DT8YNZAKPGoHHL6Bzq4oipczhUw38fjh2Wt2WjhY3dKqJS3nvWyQZ3wARQhW1VwZ",
  "key7": "2GtQ1N8KxQk8QZKSTBubHvPsnYTauM5HozMQpnqy7FBp36Vp2V5V1kMokQPrtx4dRxeQ9ENW538wt1YQ4yEpntgb",
  "key8": "4skmHzVxgWX6ny55UMZrxz3TnF1X9jmibPssCDU1XZoC7E2vHzopTbmgor1NLARkUW1FzRk8nhf9GUQw9t7juJES",
  "key9": "4nJVAJD3p9CcqGLdmnpCNrpzAioFpi8PHd1j2g57PT3goEtvn5UNq59kBh2qsiJM4LN99B5AQBLyC1jAG4UVCJQx",
  "key10": "4XdryEQKusBcWkH9ZVtmJeDwhcH7pJG4Q4EZeBG6isA7qYaX7tm2EkN2Eo4jCtdKKgooKFKrE27aUWir14RY9pVY",
  "key11": "5NG5yP1JRdLgStbSGQfftcbSxQZiA2FHFGgD35x18gB3gukfP5oiTymQCsStjHfhRM3vXZajQdRtPwSjdxW9qXzr",
  "key12": "2dbc4s4YHUhZYiPsyharKtJ522TM178bUwCXsF3xnZfc1xNfJDVxfaX5ZTJc8Wz9AnKjUFkPrKoyBPJYRRMBWfjX",
  "key13": "3vGyhw5KrHNUYRetPJAuVcvDUkxC8s2SbzHy21RbCqXuoxZL5Uk2xiwJDWYpAfoCcMGdox9FsxD9TSqgGzhEE7Rz",
  "key14": "3MSkZiks6YbDZ3paa4CMCLrsFbLfGedzRkmJSXM5ZWnWyCSTYRn3xAij6mrkMxP8DgZgYJeR2uvAWWeQZ8rCXnCF",
  "key15": "5VNqqzXxMUvYBRjPqsbo7aHKxn4JbR2WcbeppFdU93LJysssYfB7vKcmh7UQMXN3KsaakzvhgA5KRescKusWwhB7",
  "key16": "TsUJ5vZf39u3Yi81ifVgtYZfX7GM3fPw9BXfgMtNQHDnUR65R4ZnZ35ivSa2XZsxvphtj9BMWENGhr7o1LkPUSP",
  "key17": "Tyni2efLtzfYw92WdkzJs3fwbvyrdZE21deNWkoyc6kGQZi96D3jjkEr46PNNCbW6zik6Th3HVp4eXsp1C4ee4f",
  "key18": "CDRWUrqjK9uHz3WdJeaxWvXVy9wVxo8UtnmJtxBwKgmxWfxw3RPsgFiQotYCAAP6rYTcW8ndUgGeheAwseCmSFz",
  "key19": "5bCY6973Xw6jaWQSScFhkgaZx6sWqMzYP1Wtk2Mb2zqJaaHD4c4nA6KJESuGYGinZ6HE1cUuGe6VcYnH2Bxgjtit",
  "key20": "5tDjdiZiiqxSNvpocGTJCwWZawto4HhPhpTeaN8iEnCbvdY63txgv4UKACbMHAY9oJegEtLx8r5kW2qDC8smJspS",
  "key21": "3pMpVqJkAzGHecZf4nXKbdo2d54EJh4iKckko5nVodsEdqkV8V8hTkTmR1EFjbvV6XB1yttcr6bUeoxgcYq3jDbr",
  "key22": "481ZmzCzaJYrmkfQp65Jyekq32gcLzPP7Zw23wHYN9b5e91iMLkwBjWAbMJ8tZAxYuM1bcicnBRR2HQE9mxyh4gC",
  "key23": "5jATmqnKDB1aFsPHiWd6ThFnwwNhq8cYms5FTUDU9iPXPgk6LUzqD67xEPPuGka7EqBvEnHZXP7FFYVwo6qJkgGn",
  "key24": "28mFxwQdw8jbRvmVsoasdK4duvZSyqTBzDZwaUAjLYLZbTqFKacHZ5dvCcfFewHeiRpjbeqbd5pnPm7Y22R7uj3P",
  "key25": "3ScAXfkm8JpRdjLmLRsy88BCCReXuU2Pt9YxmXBrZ27m5D716UaCuXt7kjCEX2gtFQh3UCriibnf4jPmTU8eKcUq",
  "key26": "9nKZx2SF4s56CZTiVRhjFv1kbP5LQzbXrfEU5jf2Ws82dkqPTLcp4BfFNPQq85ZPbWcekDguEES2TG5RXjkjq3U",
  "key27": "4NnqLp41S2cVS2BeaxX5bqi3WrrPzQnYFuh64TucN1nLngqTtgbMvH1sJa1engvc61z14QXRZkocUJaQAarHzya",
  "key28": "561qaS6DfiMasfEhobxLyvbL3GF7TrfPE39iEV66cdTESV9Y7t3SSFwv4ro93u3CEwpdBMV3ZmQQUeic1Jsu5Uop",
  "key29": "5aYZ9K8wSfxgNgkpvu1oS1mWu8MK3UEk4Jt9vgbxsJ3T2XfgkHDih4gXWouC8tZJWDJaWiTif7jhgdT2yd4SnhF9",
  "key30": "3KWeApxnyk1QS9G8KLRpYqMZyYfCAhrpayDfg7MXZtSU9mtUkPcRxCNvwFrDEYMtEiZv3JWHbaMoUTfkxmf22dQN",
  "key31": "29h9sUMhqNJnyjfiqz4ecMnDzmmysBJbtbQ8tSNwP7c6de59nuKPKjHWgynDCSXekwW8q9mMSW8G5yjhkLrVCi4b",
  "key32": "4j3iLHEvmSUyusAFkXP5SHG92vUiKKbcLPNeBQSTGoJGWF8xEmwLchxPP6ioZgZkUsQDjQ45LWf6KoUtw9F7ktuZ",
  "key33": "4F7HnEYQTwLMGEnD9nJf3ScahLWnxxN5cUmWc4cchRKKfwBCXT9dNgbC2EUXuqvYANCLt8A629UajtevjBF34Uc2",
  "key34": "3FHFiKoQk9Qcv84osGWw9QKB2TSKfU91BgBSLqRXy2UVPkus2QhXKhUE1ZWHKTfDaSeTtSQMbfhSgBMLfdmDv1bU",
  "key35": "49dHF1Ld8HFQb9w8hhFQK5rb54cHHvmbuh4XVYnefPh2ocppbtSa6cbdcSgBkoCzAP1Emz9gZ8cGTGAgo7c1atkQ",
  "key36": "3YSQPfFxBJaywQ227mjrfLi1F66w8KuoYxg18zQ9jXHrvWPPxftLDsgyXDY2K3BwqHJJ73grUr5XPpZkCB7y2kVQ",
  "key37": "3cYTqVBQpkqEi4m6UqCDzMMjcKn6DEpC4ciJXo7zR7RqPbgpavmzyM4BL6tUYwZk2nvXgt92UZwq7U4WrtgiYDqd"
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
