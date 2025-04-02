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
    "2eLbZ8YedAoMFX9KYEbUMoT31ykf7TEYae1Qmx9vzEAYeYzW4sVMydiiNVF1N4buzPCGkYBCyFjLwHnBvPnykEoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63wuDcth8QTp5y1p4pXrwz3ErQSL2nB7c5FyZToZMfdzGeasBfwU4EVVw7qpNRHp571X1iNaQD8drU3fcU86Hi9r",
  "key1": "4N59dE5pRTwQ1DjTn1LtZbaTPL2kZHgAYSR4Lg8hwV8abu2Sz6e5gET61aymurkwGiUzmhLC5i3s3upXeTdnGwQr",
  "key2": "3nL4xmAASWctdh6yGJrN4a56fqGKcGn8KsnCGtfvxvPDXSPuQpgnHrpa3FgpDLYvzWLeFsTaDABbbzdnrR8L3DuD",
  "key3": "3SQkmY9ezQv3oHfLBwMSs5jRsG9u67j4pnCRwM3dT3b71deSP6MvmqZW8MLzmoH9xXajwaKyKpYuVqfEQsc9pf8c",
  "key4": "4NjMF1ZGJhLDjEoWmsRUtBmxY3YkBXYWKXkr3xmEuajYbUJPm5EX7M4DDfDEuhKid3x1d2vNAmGg5MkoUkgW6t9i",
  "key5": "4NwswUoCWyfkjqeJnQs9JcdssxUmNXAJqoPvr62C7TH56SfajsQEow3ARyA3vmSUAenESNtrXm2xcMjJKdy3Ekqr",
  "key6": "2bgGYoxsquL8bE4bf1cDYvFYwiSVwtxU2Qqi8jZbocmVPVyqZCrMkY2i69VykfnRs6Nuhe3KhkiKwXybPohZhy1s",
  "key7": "2ma15BURxvdYATzSUwPZwKPncNzPzujojbESyu6cB8Aqk893WB6ESR3t3CnTkMbXoVkGGFYzUJbxxot2QsAwpcUq",
  "key8": "4wzgwGM7R7t4kAtN46hzHBDu9KHEXqYBe1SWnC1aiesuzB4rsiB6KrVLaYunPYcbmNFMiJJWKkC9Rry7U8KPKTcn",
  "key9": "3DwxgfKy8eTjfKaoFJz84RHimAxk6P91xK6c998wRMwUum2e9fWY5dE11Pb1cvenB3uXGH8LGBkRikpmroWvm69y",
  "key10": "8RMHcU4JyfsF9o6DsPrNR78a1YUNHoC448HBNrifnBvEik6Wk5DpewHPMQKB12TUPDaoL6dURhYViMNWMTPFAhP",
  "key11": "nuNw3k6mm9etNsSy19XqxBbnEHx5og9KjJ22VvNtdR2MompdxQLDG6BV7UWish49Vz1byrdHEeRn4J94uxPV85t",
  "key12": "8aRK2Gedg25DyJ85YsiG7XhMcLz8qEJJEgxopWj1FyAyH6EoXETmcgGh2tFxZJXnJMwPuqGGChyPzuJazkxqiFh",
  "key13": "25Mve7Mw2XAeLyFmq4PvmLvoyKeXZfm9MuqaPZVEc7Y4em8q3CdUjGDpEM28geGU3P4fC5YSFKznVj8peJhDyk2C",
  "key14": "3PXkGH9YxipzzRmX2q7zQcrHjY2P3bRa3TBt86j42K69HUiUnEzmW7QjdxQJb38cffyyy9YcLSTGUPQTxLVXK5Qv",
  "key15": "2J7Rj5tjGW2w4V9YSvRvzsFBFq7VtwB4hqD6Z8oTvvASKzJW4V2pBM8L7wrcUVJU3Q5dwo7D6rQdqdgzc1JCmcLa",
  "key16": "5vZ7PpkTxe5nDPBSFDXrxuKDJdzPBXeqt3bLdNhiAtEaaYivRN3gsiYy33QtX6BdKekSWoxvQatJ4gBqNeHTDMeK",
  "key17": "4phyUQUeTnVkCgDcpt7jpNSmceowgwFgBhwscGzoeiVLMjVV9xMU1UayVW59fuWofpSpU5LbSQ6HW9mPyPtqbDan",
  "key18": "3G71BKkQ26aqkqVGkuqibWdG8QoidCcbEy5UcUrqLvsexeN8QwRhDqqHTM4oLy1kLK1Pz4AkgrajDMjMnWogTHF3",
  "key19": "42DkKbYjRnRvr7R5hsm97sG9o9neUSqdkboCyXk8dv9JypCzwMKgKzFq9iwEFy5BnDJpVY4H9AH6cpA7TYJDwaWm",
  "key20": "gTMbaMEe8NcMRLtSaV5M11R1Vh7wCwC7v3RXzpqtSYjUSfwqFAiGAPpdVmjrkYXKPaURhV9HpVaa79VV64XqRrP",
  "key21": "4N6KFNQgppZVecJrcgs8m9JGHVR94v51ZjWfPEvjLdztT7GVEPwNCm4iAJG6P4GSTGnP8Ed6WFUb5xRcS8eiNWNE",
  "key22": "4Cnkag9FBzoihn32AjuNpZvg4Hdb6r3bXzdpqBbtPJkD6SzL3ajmfm6hfbkhjK5S4uj79Zfvsn1WBo4nJ6kM4VEV",
  "key23": "5ebZAqiAWaXAMxNmHxyqRtugbKEGcAoj2KEQC4A5tjMy5M4vpfJwwoUuFCZ7aDoQZ78CfUVrffpiEk6KGSfYxbb7",
  "key24": "38GFJ1eRmB7zPBPSnfF4YWdTqVKSRU8D7Tzrn15M5fJGieGzn3gqcNEvRUzVEwDbG1LKENruHiWgjSCbLnHXeVsM",
  "key25": "5FjEWdbU8Tre7n3heu2naUkcAjMsusFSsVCAY4fgmQfB2u4GJqE27nUpj1zPkF7mQomKwx5d5dth9gumcjLqPCNe",
  "key26": "4YYCcPu2xJ924LUpTqJe87FFdVV76qm5u64h6DnoTqvUmqHnxpvr4FS6w4DiCuec1HkSTDUbXL4yHF9PTdqGigDL",
  "key27": "5xMUzdDdxAFQV6DVesfj5VCKfqfrmhAYoHLp1XXyu45AYGbU5psBVT9sCztjGZgD198YyKTxrthLkpQxdDsthmi2",
  "key28": "2HQSHdzob3L8pndXUxpvjt8zEM9j5u9EUjSEvgu28qXhKVEECg8i6GkFrQdYS9fbF5oVA9n8jAS6qfkpGHx6yyYr",
  "key29": "5RuY5rcSiAcTkFrugCwGw2SGua6EYcScAquRQx627BJeWKgtEpaRtb5XUJF2SuRNrC4CFb1xTth58L9x1Pz6ALQu",
  "key30": "5e32fYiiXTH5bfctLHQUucPVtdQeBmTFCfCytcQ1kGStgNwQsUGj2TAJPJpj44sD6q4nycpwHFSWZWaF9YxftCAn",
  "key31": "4bcVqAhhhc8PptAqvndstxLiUV3oPQ7SxjBPBycgLWsVnK7rywh2wxS5Zya94i64ceygSMGyjq2Z6up6cGcpcCfT",
  "key32": "qf2dgvPMCFFuEcJEo9mEaBSzwe4BDLArDoN9VKwsTszzuDhE1qwqFEhCkaEuyyjiXaPrL1qtBG2Raa3ohbUNMUr",
  "key33": "eH3JELoc4qSD1vBZZxg6Vz1mwojb8RRwq45WKWviB1FaSgg59mYKTjPaNy9pcqXvWeM9Kr4P99VEBft1tfLACJR",
  "key34": "2sE2u9Qxm4Y4ctCiMJp7TF5uMeCFyzRjGzxE2AWttscnrfEFY4ATQX8VB8cHCcKjh52YoGNTZ8MJNCEUuTCAXTQ3",
  "key35": "46bhdjFfiKsf3D11qRa9AY1nu6ZnYqo7FQs52wBS7sZbDm6K9YPfiaCVxpN6MrM7nbawVRdMPw9W6cTY1UcPttzJ",
  "key36": "4PghMK7Ujt7pDZ41sCG3ZGeLQqs37r1gN2gfeQWTPeaU1C2LU61mRYV6Y13NCfg7jpYNScJdGF2JZ7zU7yktNhgU",
  "key37": "3caoWrB29xTNhgNCtwi1bVfFMqGdqkKHdmNWymn7vM15wuV8JDnxMDn2dMMaHsoCqeEYBX6BhHac8zcmak9ngTAK"
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
