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
    "4zZCSbXyMFqUBoTFBkmpumyxm9Ta81ijTD6TAaGS8up2X774Ut5cx9sUtR7jRBXZUyzvCuRpE1VSJu7zCY8NLfyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beXQFfdoqxq6NagjBNMCM3TGvyZGTwTkos4XpkfuRCJSgDbcAkH6Xx9behgYcDV3fokhhT5YxqbfjgPcHk1XCjX",
  "key1": "5M3j4tYjEFPHD3aiCGgYP5ZBwbhFE4exoQMSMcurtXje8APwE3PWsy2KXSpdZxPhRu6vFw2HcNnGWoGUg2yGuT1K",
  "key2": "47u8sKfGuSeRKE5sbPwrRMePbo6ChwEwP2NZPXtC48ZYcWPCsko63aQFUS6wwjvYQydTjFZX9umCWuHkFdztReze",
  "key3": "3Jizun9oZmp1XSSHouZnra5W4ADNbEF8oqYWBpsu1HD1snSgpnuDGw6oBv3ggvrUisRkPL42GhX5YB4i8Matxoug",
  "key4": "2v2JPxsxi2jU8BpFkvnNswEWVxLv1PqWspLeeP4iWKCFBDagCHyovyodrsHt1nYpv7MoaPUoFVJUsb9HE1JmVbBD",
  "key5": "468X2uJqHuzxh9r6vssQFPBuz3kAuJtbCZsaxoMnvo1VpC9cWfVmammtHy9iQZxms4XnerGBcWWqCZZgPBqGT1Gw",
  "key6": "3hjnNSNkLQ3Y4BsQBgCnQBL5JTVLkqnPwVFkG9kE8ifoodY6sn8nJbTN7P2QuEvR5B5PsbqW712RtbPh6GgG21Xg",
  "key7": "A1PYyTLJwQqa4ad7aHU282H4WfkD2JMR7DfwNJAUGNxSgo6XdCKgiLwrSUQLi9rT73vwo7RaGujUwvbLhCDfDxe",
  "key8": "42gYa34cQnhFBANidzKxwrBWqZJkdHLYCkDHUWNrfDQL9ccFDTi5xXwHsgkg6SyHtZjUaGcT4ra5Z2BfYGcSYaTK",
  "key9": "vkgzQS5qQ5jtm7aURMFq8s3qJs6JLuTtPS3EiHxvYSJmt8aB6CJeKFvbXRB5BkBYAwgiwR5fdbvA4uReGgVgxJU",
  "key10": "3yzQbKDXv7mDSHQGEYsobgYGUraSGuVv9ZnH8HFuhpCxPZQm5JD5WnF3Zjgt2gATFL4aRwwcTT8esJYULo1MXGrZ",
  "key11": "3EbcMt12P3Y8xCbTxHYq2YZqUAy7mJUGYLUkUtZ9BJEBPR1EWMVgFfixeXhPCD3TjhQsb2an13TYzmQaBxu28TR6",
  "key12": "2L9BKL162LzEwdNLAsBDjGLpxtt4FxEu5GkpezbiSb7EDKHQR3wRsDmN4Lk5TZjzbSjw2WFq6iZtdnKcJepX1Tah",
  "key13": "UjBmh9Eqe5td7Az4QYxitJBcGxeVHohmtrZnsEg2PEJiUAXt6ercGsWwF4b5U5bBHmeJTuUuK6XbkknhBUxKLw3",
  "key14": "21RhKaXQJj5CrFjhXTriHE3Ekq692PczPJ28jrtX2hNhBQ4UiPz2nVvo3ji8C43FbSVL56JcCeCgUZ1epLgaMb5e",
  "key15": "5y2HTNHJve2Yz58DNbMgg8GWrEhreJUWEtPyqCMpB7iERPGvT1u6fXGrZWbjB9ZNBBnYvCuFrQZHXdbdbwwceERF",
  "key16": "25EHCmcefAcZvAT5bTh8Fmv7oPf6HYDWGFKEK2GHMjCQAhsHX52fVd2iNXxP8tZsVoX2Njk6MYMXieipfqMKRbzK",
  "key17": "5BQ2bozFgimbsfcXRJxxreTUujrZGKFDUZxq1tTuyYRWapCxEGFstsHp7pauN3FKszUfUMfrthfLVzX6CEJLophy",
  "key18": "5xpS5AtMVx1GmpLb9c56unMkMFbtpZEvM7NrQ3n2FKFzLZogdbUfwqizMEPT9Xh4UxoYp9pyBwFnyLLNgaZscP3e",
  "key19": "3N5JaVJYCmk1nJ5CmTiT8Q7VhC4eDz2vXb9PjUykALq4gtHopAYNxjiMFZPTqpEHF27GRHCMb7rhUc9o97Kk6yuV",
  "key20": "2Ukw6BwrYE7zRArTiBqDCCqW2JueS5UE15jNmhSNd7AiHgp35PA4kDSKus1BNubPhpZJju1VeidE8Dzyn2t3eSR6",
  "key21": "3ocxbw2svCaH1xgWLY9bDsWKEyoAe8BveY3g5QL31Gz3cL3jd693nBtmNPN1mkaJBKZTQfvVo4PXKTcNZEPuLEgm",
  "key22": "2F2b5o6HqEEziw5dEYGjLntCTun8WA2rpfgXuARRyDJMidkWJrTohFRSVKKfEsWJtJh59a3cXY6Sk2MkRDadRJsX",
  "key23": "3JLimDx2Bey7yr1JtZQYq43GrakBrz5XqUkxp1xctLuoJwDkH6j4Qr141YuAoMwRJ4kRkD5sjQ6Ac5SVX3ka1grg",
  "key24": "5AWQU4MRurnY5wjzABJCUs7XfibgSbUyLFWnyhELXE31JwBCd3pAGZuHZBkEL5d73oLqaj9Ukv3LXwskTnDKBZ2J",
  "key25": "3Ms9ezwSmNGKvrUKHSbMdFwzv218RRTBLcCYNBLnbaaSnJUq6L4BNJwQrNCbvD82fhVpBj4DPkaAw7v7JLhhkYVq",
  "key26": "4jHzneRfDg4Z6GQH9ejvodTukcJCTKrhAVoPqLsw3UEgWPvGaiBsZ1CLZUD48YaXFnZgxgfmtr7xyhe5mNu5JCuF",
  "key27": "5Xx3oPQcPaJ1P7HEXxJs3JbBUrKtoAcx43JQsKigtwT8r8x2oXEg3RWkWFn4yFr4Urqmc1gudzKU5kNUqoKufGGT",
  "key28": "4SVigKwN6kkRD9pQwesmoYFtVBxNdGZJWq5W3h79zqTFWNo9sDF2ndQcEKeVxogkGsJZSpG5MWZfidk6K1i6tcWH",
  "key29": "49yNueDE1h7wrCR79ML1xKUnFMEkBSV7gy4uvRaKudQh41uy64Vg7bvjhbb9gSbkszux91L44Pz7cHqHWGodcK9Z",
  "key30": "FqS7gSMnpkhWWKJLDyUi884WfoNFHxXGyoKuag9GCo8sviTZLjTKc6kW3ZB6UxwFsuHbgQHAqxNVHc1xmtQdNj3",
  "key31": "2YJS3MtKaoav49pBhtwWLJzqU5sfma6jo5AnZfqjaNNurLXGuYZtoWArhYFWoGg4s5Z9BDGgcJny1Fr6KnUztoPU",
  "key32": "9mJHFeJ9RsFEnGGyeferFdhZYRXVfiEiLUPFVCHMDbGg9yaKcRVpUqoqSXEPrMeN1vN22vNYDDwczz7UVNp3sie",
  "key33": "4xYYocovpEyV6Cd3uG4KLKooUi9xx6UJPQJXPokKQpXCdc2Lmx2nzB6F6FMKoJkf5qN7gasx9FRVMWo91Z4bq9L2",
  "key34": "HQZfUNthq6pi7WiLKQ7RGquyHc3mftJ5SPe77qJoRGW68g8FmT5Xpn23QeZ4E6THGiFUBUREarHdowCSLkE5hFS",
  "key35": "ejdmj7qNeqvUXzQQGh9YMgf4Z4sd8xVPYz7nZFq9xuK9GocDV13iJ41VLKdKK8i28Vhrgdy6vEEXGsEVwaUCt3C",
  "key36": "4jz5KrqDnjcKcctkr6dAE3M9gbPRxD18gqT5tS5y4PrC84cztpUyMGwGCyYcMbErv4FuxauNHWhvJ3X3b2hzvkgL",
  "key37": "3o2ynfmdCY3n5TcN4fHpiN5tBHsZeMXpj9ACsh7HnsY19F4exXHVTKkBGH1Y6kS3rofGpT9Q5CYs3LW5j7bTW7y3",
  "key38": "3CoJCpo93DMV4EXSE4xKKqYTAQYKTPjH6vsoD2MJhqiCnJLF8pHeoJNhN2dyPLtMV8oakK2uzTb5GMNfdcF34Y3i",
  "key39": "4n7V2u9ncZL5TPThDWGKPVuuJKJ4tcD9xMuetB2gQKh1dttMUT5YQe4FvCXC5qiWdFjKhcQiNoXggHX4D2rxF4fw",
  "key40": "TdQ383K9jqgqr1bfq3jBLy1hwqLoMVZRDh1zhpZKv8qkUM4vrKVkvEpUtNVQXv9phBM9V1sFkhbYo4APCFTwgdu",
  "key41": "PkzsjzNP8hWTiAbqEC2RVcQ9YCtJVRXBnH3mgT41V5tThA9Qgg4HYqpwZDXfqTmTdjPWhX4mdc2GbHF7JESZTwC",
  "key42": "3Q86H9ie8DpEiNX4NBLYX1mNrZtw9cqQxsnKUN5RJwMD5voAuvxoMbsvDJ6X2JjPXkUeArqdGMGWa3do1J2r5g8d"
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
