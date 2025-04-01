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
    "xnB2mMDZTZD2xLQS6Q9KGUcq77in3gpcnpdaJRx1Hvt7Lcq5f726SHcFKdBcjADpg4CmbDEPmko76ix3pNguG9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sKAa6hb7pQ23grYLnJKnY62Gt1V2bSTMDFuVibYTTdRGKURt1TqJvEXFDPDN2AvSmvwX9yQPfJCjLDDrV6sr5sD",
  "key1": "5A6hHF91GNYi8nc1dv2MUtHQZ9s6GsmB4sx831xBehj93vBXFFrik1cijFURp61qGyTy6UsKhVMkerZkVnVR972e",
  "key2": "mws5METk7N8xrxk6B8gnPmie8EJtQPkvVxEVn3fQjfDPB3Rn8UkHcos7Ffy9cBSSRJwYKeV3YA22tSd8JqZd5uM",
  "key3": "5ckfpWRJfSzCTqqLFBUXZgQNgKMRn4tc9yQbWUxgnckd5RbhWYvQtwWz573Vha5Xw59gXc1PpboBFiDrEr3cNF2L",
  "key4": "Ddao9Wi7UesXSXMv9FQMzsXvJEzJA6JPRFxY864LsdPWqeJUjUTPgFVHRFQoajWWoa9JZ9mr8tDpiMUvTrzUQsA",
  "key5": "X3HSnezYiT1KjhPpRLCcrJtomEBLAsNgzhFtR2cJTe3ihvs6jm9gNQzxSre4jpTvwjY1hKZTsYAXJMqusKynvoq",
  "key6": "1rgxtsfXB1vLF2pMqaQC8WzvnWB8BTTeo81ic86dgd7dn4ZZxRshkpYSAQ4xUiKZ7UkaokjF1rJtj3tH3Uk1gdM",
  "key7": "29aSW12hNqUzF3ZyGCCPSruXhysXptLdHvTMhDNhaTgopppht46YK46znP3ooPmmiEmEymkBHJywYCcqNh96FMRM",
  "key8": "9GKSCE22UYmVrDfofMJqZxcn8iFG6egcmJRvNKxozaMMEVdBQ1EfHTZ8s5fprotREj6hey4QzJUJwPpbAGS8uvd",
  "key9": "4xGfM76gEuh9tt863NJkanrcXYf3hWQ12tgtYWXfTn31mSeyGdbwAFc2m6JutVgmFNCBafsUUsABgBWpTY7Q9NJp",
  "key10": "LvFaj35PGuRkupRiMphhA76UeCPbE83q7BW48vkXjdtSVaxPYxdcpT8cPYkYsNUZ7xBpDWAkHZghTZWByfkfzwZ",
  "key11": "4fGcQHwJkruTWGLv4nb4bbTPMyh4Gn3PwBb7sZtp92Uee7PXoptZ7TufzFTfovwr2Re7jxVFEUJYbPUL3H6sMagH",
  "key12": "eZEWjpyccCpLDiw6B3ujtqdpyNeE13F1Q7pQhqbgqr6xAiWGg7UfP4sq2zi2xokd9uYajF7YKX15xbpd4fDboXk",
  "key13": "2qihcDAqeibRUmUN3j45o1Q2junKKnb2uTrDSizz28nAbAZH955mXeQsgCkp52tpJk9Cxs9SQxoJjJneCX2zfx7Z",
  "key14": "b4faZgisbL9G2EJ3fmAKJWRXvHmrEFx51trCSFbgdwu9rWG3S7Gyj5wqDEJJvtAFSSEaYNhhGhX6AGwwCiGuPoB",
  "key15": "2LVqkqWu5fvfa6v2iyMqAkAzWDvCaSB4U7oprRx7Dc7gQphx96KbiE3NhuFjEPzkm25eNaEXeZRppYcavt9kgaHe",
  "key16": "3QyJFyL3haxsLvzDoiX919r84VyLwfZ95JdJH4J7Vmn8s24J8h4A1ZBuDjiBFYKz5WaARngc4PEubCS6nn6zXpj2",
  "key17": "5YeCmArdKaCn4hvpT4c3JDsfHevJoXhgWQjEiQRq5Zouf1Z2uu7pBEiSE5TqhvYSpWoekaxpWq86U2B4TeTFQhFQ",
  "key18": "Atc5q9DqzZwmzL8HwuTa232E7wUajvU57ixhCUZyZMdogtHfuqrAQYrP7YHCwLEWp9ZSB9mr3StbLc2f8izcrH7",
  "key19": "23rnHGQYMzWX2RUxeT8YUnrSPzGDTk9fzjGJg8b2efCSzGWR2gsZh7EjUDKXCaGtGoRa9o8qVXUoqSPS63zNYP81",
  "key20": "5BY6VQuJAygoiFYkrVTJgB3ccW6F6jsZUU72GZXuhYF5Zdv5gh6EpyagSUoP3ZFH5Vu4U9QR2fu9q3WMvwpQwZoQ",
  "key21": "4z2vpo14XWjpyYwREQRfhj8EapBoAt3ThXZGXnGW28v3UYxvSaqigm6okhWLk8gZ4acNEV4oSGZHEsGZLjMWF5Ue",
  "key22": "5cs3Mdv9oDSgsnRfFgAfH8BmbTNrk1pjM3HcRQWCeUskDHeFibV7pB1DjBEFXpwBJYkdxdmizVKoxbGK2jnGgqr4",
  "key23": "4JLfQdgK8HFgg6uAofMaqFkRnm5Baxri5AAEfxchARGnyJTfE9vvadhfpXWdMyg242HnJK5rrkVDQ3XE65D6Kuno",
  "key24": "3Zzr6T3EDcvDqK2Sx65ir128romKkAa6JakD8Xbakjskff6fEiAdpwkoshS5SPMrztJLsXxy8LyT8YTbFg9orjwn",
  "key25": "2jSmm2gpwmExnnqnmpLGeMErcQEZMRHiMPcVfgTTqVqa4XTGwAv4aLUEea5Q8PdSREoWTrTRQ8bdgEpNgrLWZ54a",
  "key26": "5TzVdY9NYYVqVxJWyjG99xdriUE3x2Wwm3K7ekbgKh9N9K2ivWUq5Xah9cVLGT7Nnm6ZGTtdN2Y1eNUxzGyFyYKG",
  "key27": "339VksXpAdazEphv2wYhr2p7uQMumBdfD3YZUV1bsxWgnAsYVnK3VNYpjZnr9ozwWwNkja46ogjAMA2b764P3jfE",
  "key28": "2kd1XPjnLBTCztCBkV6AmdgxvSMR75MACcrYtCmMZQt4BHzuH7kKgsmA7Vt5Qnbind2TvmPXXpJb1Pm7Y2h4pxgx",
  "key29": "55a6NWopDdKZGUCo6QnadrpjxVfEvqFXAC9DatiBomSavHEokvbN6YreWVZRCjVmGmwiedLX7wmtZnznLaesDEQn",
  "key30": "5vMob62EZDfgeG13vxvpk1Pj7hmJYUTRQvSQTRnb5UgXkPQzs1X5a3gMZunLxKAZAxjJUU8pG4RdAnGEMcBCRraP",
  "key31": "2vz68YrkxoLnD3VZVA4ETUgV4XWpk5QfPwvEzhCy7pcwCHuAyiqxJkLFgoAjUUrkV3MVaujA7S118UKkHsKNMuwg",
  "key32": "Cn5TKywxQUmgQt3hqtz5WRvGYNdabVqufEeZeVDtRnfBoMySHZgvM87Jjarm4v72XrZfXWZf2U4kJBKRNNwcZ3n",
  "key33": "3pEeEnnmnG9o5d17Xmt6qrt4kLaiTMza93kJqtXyz7Uh2NH4DJ9D7wuPBVzTJvcyaiTPkNjxK31z93TV4fkEiY9E",
  "key34": "2RbMiPqfrD9Q8XUciJbskUbcnAJVsjLPpXhuF3Y3SBhFTir1Ec4R4ZSfq2u7ge6YL9dLn7tW6UL1yNGDxnHBNVcf",
  "key35": "65vKVVm1iBAFNBQ2DBu9xN69whR5z5C8Z6wzpFbwZyotvERBbwbeykYqiKwjaKanQETdM5FBcmg57KQu9y4V7URZ",
  "key36": "23T5q28t4WeGtM8DC7ockpKWxDJi5yRzJRuPp4XK57dYWkwotNMWZvG2bLSwT859Aa5BJXZ8YmAu1sLqaFLkkExz",
  "key37": "4Hw5PCzJrbWG7TgLA2mj1Kim1qesgit2gSZZSroUjUTbFj1New7pL6zAJsv7jXsNCvW2eTokpLYzp8SoWMEDGD5u",
  "key38": "XcQFmr7qZZEyj5D6tjaBCKW5PXj4Qy7N6SFPw3xWuB4geWPTeEr6WoQbqBn3BGPnqTp76EnuiF69Wq9hoTn7Zet",
  "key39": "RYXor9KVq9JkqbUMQyn39HEyJxDL8F5zB6jeeUoqfQJtjMPw1j1nevkadFybqzG1ZdTtxRGFMTo13Cus3WWeZgq",
  "key40": "2RX369mjSgy8beNtVwBmSmSpWebovUTjdB333jtxQnCmz4VHTXjwGwwCRb48Scz9N6HgKvRgCPAbhm1e1R62crpt",
  "key41": "4QsWGgS5M7MHpmD2dsMv5rPvfpkmMcCsJRS8ZgJ1KyyKRzKaqjTFkRwjFCjk6trX4auJiBQYjBMAHRTLNYqpEFG8",
  "key42": "3eiwfQsVThjCmPw8XA2fWh7gEafMEppsdLsVRUycu1YJEHa4Fx2iDD5K3utz99zEBxfET2o6FMKErNnAZUJc4fKY",
  "key43": "2fVXmjvA1wM8nPyqfaxn58g5DDRkRqFqwanarcDGCZHdhgQtkaNdudRW147QixaTKJHBsWygrBrL6EcxNMwCdYB8"
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
