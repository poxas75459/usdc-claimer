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
    "wyU1ceAuhDHNf9frgVFzuz54yHZ1KpFiuHCjnzumF1uYKvCjv5oDaKqSYFALgC5gVTkwzzUYp3QLDfk7LTQnuRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ZtCdh1sYJeaB3ACUgEge4q1GkiouunfTQKwRiKueaqww5TX3U1y6zPdt79j1ieZccg36qYEpnL7ynP635xYVVN",
  "key1": "3UUswiBYiXcYpKLB9BvY96BeAcAkjUnerBeoYxtfjbDiBUcpXM7gybmAuGPTzyr84rDgi18aRwQTwJCRczy8fYAw",
  "key2": "3LndDiLuLhv9is44UiQY1hDCBsTMkkWSr2DNxjhCtbEFBnT9i7Uduc1NssNzbQVZJbZevtroVoup2unTUmPFApj1",
  "key3": "4tgW8gemV1AkhtynTV5FL2Sd6xvtyi2V51sBD16c8uCbijXRwHAicLwodMRvD3AHSpn6qRtNUaqQnry61PWwtGXA",
  "key4": "2h5USmEdaBCvRVigBoMZ6vM7eFsFqjJBxKHQFSmNUwpF4aCa3p2dDZTtRh6dhUA6Fhei2aqiSmBrJtN8zFuxT71F",
  "key5": "4UvioL3C9LS4pbHYiPJKRdE51DyYNigKbv8ZSHbUTQ6XP2NCCX1qJuKZ58N88Fjsbc48LCfgEJDH8QYcEUDqr9kJ",
  "key6": "5uYGgRoLQ5D9geecnRHCySvUcjftfNRMFi95PnsNkJmLAa8EJFupSVUHpYtMaYxCrwHupDFQQxgJdyyckWxHVK23",
  "key7": "VVRiiJfsVFVggT8ob78EMT4ht6vsPAHSHZaotPAzAXPQF2uiisiReby4BFwGGzLUgoMrB5Esv8xswcRF5GSs9HP",
  "key8": "NEdX3frxT5Km3LxMSeCNjypdasWXZTyGJLsddf8GCku7GSde5hj5QngMNDZXVtnDoU5YwUy2As32dQkNxYQQeA4",
  "key9": "5X6Y4SVE9Zncm26ktzh1RNZqwQMPSeo8h1mrtGjwRoE6ZXzcZdRuYFC1EMi8DiHX6ukJ6tcsQFh9HoVP2YdGZYpR",
  "key10": "59759FVoqPgUuP5HKUdtKpCfDZpvym4EBW2ShVtsBbNxjxq13WvnZgsWxge3YW1tP7cpme9ekPwTgfanAsfRHiGR",
  "key11": "xfzuAJYBBoWDabtxQujHUZJRYTchqFUFeaMdjRiaqwxh1LdxnUdoeXJP9apYDA1CraHUg9Tw2CdNktm52fb6v4V",
  "key12": "5vc3zS9YfXVqcMLRpmcPZwWbz44eq29yKC7Wta32XTtRcYaLYcgbSbtxVaZhfZeh1Yudjp7fusbYHtFHnyksWETa",
  "key13": "3eYWF5qFvUroyR2jKYxwsHSMqfWWE7HKgjovKCvHta4jMyfAtfZwFrFBK8bLcEMKYeK5FiD2Bc2Mpp12siF3RWvc",
  "key14": "5hBz5YVKazGQRP8P9q5X6Wt7uKsaBtTgVrBJtBmL8xKygWsmVnZrq4iHVC9r8xBU8Z1jo1zPpgsARpa1dXF4Q8uo",
  "key15": "3TpvQfyzSMWJZSS5FidJfiJvgRw39NuED7c5GiL5YLxfgYoSYYsEQx8JRLi2QJqnnvvK8iDHbgVL4Y8BjZU8Q9Z5",
  "key16": "3WCoFBiyK8G5JQdFYwMukT8M3JivApFA99h69oAuxnTDhjX9Sif7Y1jMdRDpW1FpzAqSHspwt1EoNMVY8D2UU4XE",
  "key17": "49qubjaPXSfoVAspMKsoVZfbZRr8gZpxnMCqoYjbyimD2YMXeqenGp6YomsTjwPFUviseo3AzXg1KHctzbgE3pod",
  "key18": "3QxZbXdVGYggHKs8Gx5GVpzAsyuPGTJqtTPjn1L9BoSFPWZxstWvZuA2ivU3WbYfMMyy3X38uhQZPQVQq22W1A9h",
  "key19": "368YQN47gJnAuysMb9mc8wpQhXN57tpxdEVteyLgJB6ygwyiFsDhc539JaTQVNADaRuapkDJhcdnpoEYKkqG36Wk",
  "key20": "4phBxBg5tXsDHvq8eGkK1uaEQvzeYeqZcSZUdLwv86y38SzHPepAaiGnzXktdTN7xxKfm7HVSkevtaU5uCaBfrDc",
  "key21": "2EwNZ2hEaffdeHgTBwVJoWyaxmDz6G73S6w8oy9UuJ62k1DQBetAiyPXFs2Wcc64F6XW9WrQXcbjCaHju9FjzmyY",
  "key22": "53xaZMyyvTTjWFsSbiGYxbi5NAWiRRhSXEE7MfCa7aMG4m6HuJ4uwswUacy78f3TVrDQwUb3stwf21U5bxqAH7cc",
  "key23": "3WQyaS6GczoMy2YqixfzzL58rqnRXpGgYgph12P3Z5KSLEUgS3xa7sC2xQV8M1fXq25w7vDcihXA56q7wtVy7831",
  "key24": "41cHsqvdEr1sDFgeiF74GaX9PyNFg829jX7en1iK6zLYfKzrdrhG9fRy8y2i6EJfXPhFcCpL3KJJJHf6s6D62eeK",
  "key25": "64e55W6FRwhvHPgCsiwwriT12YwNykod5H5hPxXU4ny86fmuPpVtpYsagLYib2ZZ1QkXTuCN5rD8uqpxQu7N5q8r",
  "key26": "47qganfCMP4agxo4QEH7v9VckYWcwXzRy4wtxWh8thn9RYmB3QDRq6Vgcvu2BbS7uEgK7vU8gZ64o1CF7jbJP42G",
  "key27": "4gPgqcAmRU8iaGpY6b3uoNruPZS4q6D1QuWw75Ev1wE7VU47KEtvjrpA9MqF8R7G5nPUJv8GXF7T1VdEjiZWDrY8",
  "key28": "4ADSqCMGnR7UrMs1rx7HCvQVeSsgWenViwNQmwj13uTwaGFsprkwF38wKSW9cguKkt4WRUDHdoGV89J8sFr5isv9",
  "key29": "4rmEfQTNNc3X9Q15ENPfWdA96W7H7RPzWxSJzKAC71FmzxGrc4gehKMCSQHFVkkjx5sLTfiP8gZWmv3U5uTqeeHC",
  "key30": "29gnaD86gV4gbAf232veCwgtixFjm4oDcj9du2yqxP3txaHjZebEqhJ8GL5HAUdWt3ufyQ3yird4fzXHWjimXqnS",
  "key31": "5NzwfzDiqE7FztDqtPZQNJU4y2GFs2RHAgLYPS8B6o9nhKAKrhtMMpimHRuABANiiXC8ccd5DTBi4iywJDBBGfrs"
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
