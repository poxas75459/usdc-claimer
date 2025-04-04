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
    "2YttUpnJx87j1YWDzPmGqj3Td9erfQYXFUtAVs7Gx4TWNWFg5Ky9YYUmjPwM6im6PVdwvWhxYn93P558iyKoNkZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLX1JtB5SBPF8bXwbcWiEzET5XKck4hA4soKSVW8azCbhyMHE1YwAeJx6JhG6uNnNBYfutjo7hchngT389d2h6o",
  "key1": "4rGiLzswJarv5gNRcmeZA3YwEwr38FEGXuoYydK9odsEp7tgLsdv3zJBatnCS3NwWtf3VCtnLyJetshyiXnEP8vm",
  "key2": "2uXHVZx8hAxWU55qQZtUjpit6EboNR4e1D1djrxT9cHGERzY76hAtuTgHHswKcWtDSvFaS3JA6MkHbTAofLrZu4e",
  "key3": "5irFieyUXo7h4qH7STpxhWvgJZadcmahFh2s1WDNrfLdimySsENtAt3Zo8UHfWyxg1CoYXJZw82ZohgpE5BwRi84",
  "key4": "fLtJWqV5BmRuNJNLf9BLeAoW2EL9qv1VETvGeNXqcSaR28shPyCcHe241s9avx4wbQJTQuC3EX3o3oQMKCh1mAv",
  "key5": "3QsfZ1Ci4Ni9WEV7QBku2F1CwRLfj17Gd96fieHpeeGEX8PAhUWRKDyXpqftzzNQYAYsKqw5NPMcgDQETpvZpWSF",
  "key6": "2WCM2ZbPaD6sjsvPbSxk4aDsYVnewbBuf2T1DMW1zn9e8t5L71LqZ7b3TUrTe8FQ6nGDo5mHWLAE8CWsJi7rwgEb",
  "key7": "5VFc2iZKiwss4PMwNFw5HbiZPGQFNmxHgQt9mTP9STosKRj2HvAyd86bCNZt4e4FqP5HjXeBZRN6w7oUZG7ncxQC",
  "key8": "3jFbvvQaSSdDASsBH3Q2sSUxCoyAzRHYY4QeaYzhXYUAKhQMumQU2e9tWrtkXKWMMrcjuqYYKRFtNLoDoYZwbYnz",
  "key9": "47XBGGzriBtPgsHS2RnXvzWQQe6DN4Fx8MfRnzz7debEpnsrktmXkmBv2LctDGyvW6X6EabF3mxFGrnBQ3HBppgx",
  "key10": "kJyXZjhbbL52vGjamBunuQcNDaXFCQZtLcgA28a9TSuRQfJe69BoSpASGB64G1pYK1pDMDxUQkmzmFwUK5uK4tH",
  "key11": "4H6YndSPKbZBM5TVoPQd16KgiWvGdnCLT4FazWCrhq9YYPJMfwtAD2jxwq76Ac7E1FY6NxTASS2AE8AyaJD4uMRF",
  "key12": "2orpmqRDdfkCbPGX4ab4mXQDmDTrdKkTyQXCfrAqwJe419KPeYUDEg5h9KQ7tWazcfBHfE3swNTisFCRaKWRvDjg",
  "key13": "4JG84paUbyuf6Qg6r7Lq9rJ5bMtvEvWfA3VYsb9SoZakpQdwccnGao1KY4TjPjPB3LG9PJMZbcPpMDcwxBw7f7H",
  "key14": "5Dc34hDQHE2kbRWTTWY5YnpgwiFX9RbihsdNoTA1fyqDrATSUteTgJ4DUJUZmQye5j2vpP6v3kDJjMH4Dm5yLzZN",
  "key15": "5d74QqJykkHAaxDDkX79jjiVQvgcL7WhRNfzQALJ3WWLgFqPSPviKE7zqgi8F8rAwvR5QqR7mqygEVCgHWETbV6f",
  "key16": "5Hfyp6vP12Eg58tTFCrvKSAUZaLPLtAkD4twnZw4E9qmo6aGFMBVa6S2yf1e2F7E5YBXR6FzXj9xtXwCTRLjHhRR",
  "key17": "hh8fgqu2Ha3BMeKKWXkdwC37gk7tevVCW8pJHVxVYvysGqLYnpo6fg2L98wyRMahKZD5Be7AkgELhoiyJU62VKg",
  "key18": "36eGvqaMkpQXUP4UQVdk9Xh4AopXbQ3KLu4AN8mKkeswF3t6NH1ikPXD3MbcrXJq2EJFEKVLyXtGCw3RUSfjjWQT",
  "key19": "iTKcA2P7YjVJyanKYemZn9GcnqMZYkRfcVWyQCBVWXWuCdTBCjug7tBoUUW9bgaKkGnW57aZtsJrXPnorBMVjXg",
  "key20": "2ShqBGwtrMJVpMfYqfw5hwVnTRWGxtD4Awc4v4D2DwMVzusA1MLZzWrHbhGZz91qxMtuonwwvPKTXF6tK94CfRDd",
  "key21": "2zmhtPaZLyZNhpueC8LzKPJfJLq98jYmY5ccphj9a1y49qdqn2mPuinTVDQVH43M7UNCqUp7QYi7A9LzZNNi1Ekk",
  "key22": "4QxoSENXiuV2fdA4JHJdPC2T8PCGJSsRYKxRLZ6S8J1bXKEfFCBeN4g1pSjGzxt66o8WU5XBx3gwscC8ztnKw9VD",
  "key23": "4DgsQ8EdVZuFGiN1iZThHoNbwdopbiPVvbPKwx8mDYNyGnHX5AmQHftvMHCQjzyh9H7hNHgrVMjQsBBDRrPbxkny",
  "key24": "4ysAenh8d7ZDVdCTd4MUsxPK4NeEk767Uk3gVeqgT9Hg46qNnuhGSmpkdxSvtwmyu7ghWgvMFEdUHshZvi5EehAN",
  "key25": "2cFDbqV9jHv1rKWn14h5NSTdvnn1qcnTMFSSd9n4ixMQxUPEtrTRGo7xFYahktR7DcB9epM3PAqisMnyW4dzK6US",
  "key26": "qnTHLDUwmqveqibXZZZooUiQUrf38cFGc7YmseWXnqr17DyRa5Gnrq999NgR2EjbvukCPVc4MaoewSvLZWBJcQy",
  "key27": "5ZRAp5rSTFEsNo69quHg8WQcKQUEj5eADuqtC9nABbwRwo5JE61Bgjh35vovX1XjaZHcmB4Yekd7UY7LS1uYBXC",
  "key28": "5mupSRJJ3smd89f2EcSJTGAuoAg9FsehcNDMzBubTyNhjyVRCZUABf1SsxiWXtvdHrsnwKzzRb494GqPbU518KxM",
  "key29": "39NQRqnLSgfnx8778q55iQgPuCu4eUveShkP4w5VBDa2eCTRyy3C9Bmdk8TwoRGLE9VbRUDJxZ9ord8KZL8TzHmh",
  "key30": "2KKBwvLJR2aw3qwW4gVnZ7JQjxUSrMGSx7wVKq8cMd4zDLx7xR1WjA76eEjuMtGypTZpMXMavwsa5Ar283dmofyC",
  "key31": "v5ZWmG9mX4U1L4XpxEgzk5gsPV73XTuWTnmuUEUg9jsdWXX58f96jm3PRW23cTXn6TeFvgAKbduaAgVSeC9oKmh",
  "key32": "2DkEdUCz5j6cfaELtdYaFTFnajwXYKuPiiiNmbH5Bo6MpDsa9VMEw5y2CUw3cTY1MTuUfXKK4M7NMGQ4aUZ7gRNh"
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
