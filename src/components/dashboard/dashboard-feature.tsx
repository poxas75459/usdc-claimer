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
    "3Gcaik9MrumYCuTnchFyBqVfZatdZ4PquS3D6FTZyd7PtwoQ1DQkbRoHXyjmWyJDASPER1gcXgBrwx54R4k7BNjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ADTjWDQNWnNiWZMpiDhyCHNEov7vuXUmUYr1maUGgzhT9Hv5hGg2kviNRKtPdA4ty8zjcGvNhnnvfnp7fp5oePB",
  "key1": "4VXWbdeinQ3B1DWkqNqQqdxo6EjBSaEi1cXWmhap8bMfF1RyVtixqnKcFQMaLMz2CH3N1VyrFiktBjZPmyWXmtpZ",
  "key2": "2jSg5PYtASLiwFUNYjrUsgRhhi6gZN2aNKDHLUFVahyF597V4zcJhQxnKcTth2SRawzUN459jwj7Eteiag1TuD1s",
  "key3": "51YgaxXjqbQMPNm4Xjg8zEh6L42bc2aS1DhZGyS9VyPwrdNbgrcf5pmTFEaRwK6DZixyze5huyvHnq1MwDQD69rj",
  "key4": "29M2TTpd7pY1tmT61SrZKfJrkot88kqih9DZV63bB1jEc5w8pCXFDa3yo7gTvZsbhDfWmyw89uKMtY4L8AVJfghV",
  "key5": "3wKvnsyvYiCnrg7Cb554uPQKJcAvoh1rz32EywGGpQQUJueWZqDfLRkNH3nM5hfuZ1C5ZtmrD7fkwS3U9vA7dP9Z",
  "key6": "2MMdb4veuU9K7gNmdMK5Br8QSWGGjpY89rH87BSMttu5SFEEVFuekTSUfjCZQNSt4AB6DWqWjboYGUKCWx8sC9uv",
  "key7": "4HYb619r9xSxtrJzGF1Vk9MLorHhctSCEJNHdmmZWiwrjhvSEoQAHESq2LCy3AYV5D9jaosM6khDhuMpGwJQkRqS",
  "key8": "2BbEoG7RoQBavqfMVL8dwMCtBBN5R5pJv8MBbhrvW2Wwc6MUnyJEbKDayn6wHevAc5UKytoVX3KGzLHccztQ7Yc",
  "key9": "3XcV3aBUxQXdye1ixra6NY5u5UQqL3EVn7tTXkWimBSuSZTVDtQR4EVNtRyVdZPN176jkL6Spzg24PwsKAHbMDUU",
  "key10": "5ZpvpXLzaBDBxnTPRFXfzB5KvoUWZnz8tU4nSXjSJF3NpRRSh46MwDBoBDsPY5qsCBtqw6Hex4pX2vZbkkF6psnP",
  "key11": "128zGu4RRYYktLtsjyLFpXZZEQGC3Q7DKjB7QAhNPdphjHexsTH8noWF7D9iCpRkxW29N2NLAW7LaWhCgiyg8M7Z",
  "key12": "42eVpUVNFgXFLZC4zoSjBhokggAU4tHoV62XG4tKT927EwQjVFLPs2KrBfWoFfTvnK7AtQybJY6SZ9WTx99qHAoc",
  "key13": "4HCWnhFfQok7cVFKv4NH2JN5cUYAKdqkA9zSrq9Bk7Moy47nT921uTthHYXSug3eEWcZmXBka9pZD5dqkt3hc21S",
  "key14": "9xneKLdkR35qaxhHyYP12RdrjNTJiefZBzipXV3J7EKnLTTpgDW2snwd1wh8jAmbQwvvp1r4vdRySdwVifXMPFg",
  "key15": "2Q99k7r3vyFGUG5BG2ySreKRUhedGcvKrGf7GXjFt1FhngfZ6DuH8WMBWQK8Cw9WB3a4BKZGsmbnViLpKbcMnPMj",
  "key16": "4MkCr7WB9xThQyGCDr5yx8xaZJdEKsydptRomVdiEXYHh9Cn6cTFS1dVosc7kMuotRMezpBgaVGJkg6JYY8YnTHB",
  "key17": "4FWquyPMYhTrajKAsfxA2Q4a3hWuMegqyRmid2WKTa51LPLjEipCYWorigQWbYVaBVgoU4b5FrNmspco47kKZZ16",
  "key18": "3zQdYMDucbLPFeTPznv63GNw6iFjiLRJNWXQz85iKhpUXZzMNXpN11zoeQR7hJ1EEMda5DxHdakmosP3oUqZUJtL",
  "key19": "4BVW5fDuGyDfhaoYTPCFQJyys1tP5NLKY8it266tf1fjVEBiHVEW9uz7ggst1URSGmXfFAMyvZoaoCvWPYwodGYi",
  "key20": "4CtpnMNkjxLeF9yZHhhN5fJuxA7eh2y6FbnrxNfPTxHpioyYU9aeTfjn4zrPdjpGgqk1TNjWjRuGUJ8h6EEMUWPn",
  "key21": "5JFsmPQxoZ7dcfoB3RMGYuaCXxeQ4YswEHSd4asgRp7D9A8j9x4TDD6vSRGV1VQB1pATYW8kha3LHmbizarw4q1W",
  "key22": "yWChQCorRKstdYMXcxXvuySgXyDcEtnruNPFf3kPx8yPYACqDQeGR8VyqMKdfi4VFFA1u6AaeCNkpy92VFsEmpX",
  "key23": "4VmntydBJJKzTdMDmMfRn6UH4qcsUHj58oY6B2WuVXYWBUQWw2KTJckSH4aiRE9Co6D5iQvNNpeifGi9TgubDxZH",
  "key24": "2Yf5hTtF3Gbcc1umJwpFKUBh6r35R5eeiTic9dacq5QBu5JLLD1d4B3JHXPUXCzFGmt7wmPGTKE9vrbNg4LMyNnz",
  "key25": "X4QrRaG29exFcXWbpyaL33NmB6L1yokpsmTDNYcCpwH23RCZNDAeBqEfXWh3QWArYMxaKgysnViKK16W8wbNFkv",
  "key26": "57R5bRhYUhekkA3SpeJP1RDXDtazHqRrmaBcmGuok68xzoL2naXcvZrojqPyerMuBJQjoXHrHFX8FTEDP6hEbAmU",
  "key27": "5bufRory37EBD4tUU5ZGMxyrZmZaV9aRjm5jKTXmxuXnMQtvGqkVUEL9FxoiXUh6zntrQ5y5UoCCZiZuuz7b4skd",
  "key28": "5nBAbeNuzWstGHbDv1Yy1sPTZfok6dXNqd6SdzymGM6kGUyBaTkm6JtatxdmXYLXQgb2zvZ6KtnBCzwWLJgjaTVY",
  "key29": "gHSAM3PuDyDTij4q2iEqJxEjwCVs2H3H5KKQZFxFTxxXZn9ct3zf7fNR4Lgay6apVqeB3ysV3nKN19rX3BEY8sq",
  "key30": "5pFxbqUqdYfrg1F68dapRKcNMSp13ksKWVHkgXx2nhjrLVPBiqnw91yKKTHpwGspybTRpLzMRCUuPs5RPSFKp3NQ",
  "key31": "454tD4PFePv2WYw3Cieo4QVbNUKVrMcyQDBB8CKtgijuhEmM247aLkkZwjEFgz5oBdqGTZm4J8nFdSoPgYBB1EYw",
  "key32": "C1rRep13MSeCD9J5jppaF87oCXetH2wY5SQursPmzRspKQSK2TJF8esVPCsCMYF4pf1TLF6XVN1stCopFEfbYUd",
  "key33": "JhBTedRZu7nuWq1UwqobFJr6aEvxDZeKhkNM5yJDd5TPN6WyrdhgJMi6e7cfWNirf612E9imvku7s5MGwH2SHoA",
  "key34": "3d6AbPYqaKhjopngXL9EkuFVKWKajDE7Lmy7r1bNMLdsgTm4fEwLfCiRMmpiMcB6fF3Qzzbx1bi6FMyeNad7EmnU",
  "key35": "3NxcHoApSpw5sC9qcR9ocnhtDF2RKAXMBSr1aYybfBC9t17t3v6v3wY3Mncn12fyWQRmHS9EnbPRNdVw6wELbouF",
  "key36": "2gS7GPEX4TtmNudcFtFxzTLbit2fcRHyrKJN5gz2J6efXaBVZySWYoBvemTdh9Lw9Y5hdtN3n4ts4pGhzXksh6oA",
  "key37": "d7hN4dkxVVttB73uCyyMzg1Ui4GaWw5WUPsZ7CbwqyZxoZi7wmXuhtgUwFb98t2f69P7oAf5RxcdhgpbigCpJfQ",
  "key38": "5bomvpidQA9EsYYAGQmArfxY9HntCbMQfxGCUSf5KecBgxYb1QDjW4KRHKjQqA5txvXZZXpypyp5k72VJYyhsNu7",
  "key39": "5vowdsjSeaV1vC3sEfauo5MtecNVWkdKJBcv85pQDRLv4gEtqZF6rwuBD2cWBLKv5uTGwQiaVVzeYzvk9JC8VvsW",
  "key40": "4m35KSuamg4EfpoSKfQ2Kp76LvM566XgiuCbMioTpFSxBKVgu2TxPG2TqjoG3xm2QtizqYYL4tNgELqDrTo1RBVS",
  "key41": "5RGWF2L2fPnvHMJoMQc4xRJm15PgHzbmJz5umfAiD9JdnEViNNwRQQwTzmFe3Cwgd9pvkPYQeVmRGZgo6fbSuRzz",
  "key42": "3oqywCKjdawiu3QEM2VY8MANeZ7BMJFic4M4J3xt2CcNWfaFyrQZH4Y1k9SdaDz47kgjSdiP72WnyV5Hbv7XwVbM"
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
