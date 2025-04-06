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
    "4FAgkb8vsa11VuM23EQqvCzxWz8xptGMDSb7ayKLBqR6E4BSDyEYZaewhUgUZAEXXv6vv4NetQfC6tfBxk147r81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x96o36rsvkKFJJVAe5d4RCmzqPZBoDigkTkjLkxoPdUeL7XqS4xqmzeCVc5qS1sHozuejLFFExRNv1Z2yniHpDG",
  "key1": "3upAkwf44PKC3wRXpgACPY1fSxLS4Fev1zaTaBJs3qnArHGzSQ2VFzZEURgry2uTmyL6GCaUDHhiz9uRoV7jfAfc",
  "key2": "4dXsJAFaKJvZwDGVnUJxWeKTtKEXpsSJ7DtiVekjoJAf5Ss4NX7Kvkf59oVgENyqkcK8rrFaask8CHMmjBvDuvGw",
  "key3": "CtNzs7SooAMUPCNmDM25gGaMDrVhVEC5i7ubbCdvC8vdmLPQ3swoCvaBLeBSfJsn9erjFE8qWhigvv7S7t1p33Y",
  "key4": "3cy5sswJvXZcMjHJFdvtimxmnjSe9qcLUoWtVDTvhxaU2xmqBCYf3E3F94Lyj3LjeNgsTSUeg5Bau6wiJPRTzqWw",
  "key5": "3VVfwXuf4KP8goTd29TrsjNAgVVvTVFe5eY5zMmZJP1Bx1aPTo7SMc6GD8o7TZHdrruLYnzgC2Mmr6B4aFEf5JJP",
  "key6": "3RcqMyFbecdByRjcEYFxRNcztUsvJiocgByaqsyyKJtypgy9d1p3LaH1EV3Xe5AjHQMZy1EMENj7cAaRp4duxipW",
  "key7": "3cBAtN9AwBs8aLak7CPJaZ35aAU7Lw2RWzWFivSCAuBMykfioVjhuF9m5npnDcWbQNfgvuCyDL4HhmdX2on4q8nj",
  "key8": "2msMUfXaVwonkGniANnoRJ7CKeS8WzSZBfHMpqWbpy1WNriCiKc4cAzfm8cboSdrQQBHypYTG4gSdxCqGajsnsBN",
  "key9": "38fidYZQhqrV6WakY5aNY6tb7CNfuUxoLqXcXCaZHLHyJY2LFqnA4C5rr2fLhYWmCq25BpzXKqYFuJHoLk5Trr7B",
  "key10": "r6qZGa96rUHYDisQ3qTcKbdtoBN2GfDhDY9tow1weuXpv5VEPZLo1kEUTHQDrJWvHmLn1We5W2ZCgiHfvJxEmMt",
  "key11": "3WLabCSHWcGnAiLCHYUWXAigCWCBoWBv7b5UXMpBYXKWXM5QqtJH1vuKfz3d8eEWBhEsC6H2RPNU3hchuBEAzTq9",
  "key12": "xaxU7pqr2zxwwtnSZMUV7jb9p8UodAPgv6nogkArECWvKYtye7bmiJVVusSwT7CWTGzMQm5cq4xjikiQN6ndH6U",
  "key13": "4kQPiMh5xBaaFDAvt4KfbAtUCJphhPmSjYKwfTxkVRXdZzKkhKRPYk2qg2pyNSwaSb5tqvJwioNahvHhK9CzRjei",
  "key14": "5atKLhBdoYqLHDxwNDQioaMrTfd1S1BdBAurp21WPfR5txipBhuyCfcdFSZFmCTe4yVL5i2qoyqnm9jzra1E9N6e",
  "key15": "276SDq6nsYchDawnxKydHUGQrBuw2KmeastGXaHqX6T4gsotcsyeer4pHU8fcmGXhvi78QP1mGVefQx9QvzXeh92",
  "key16": "83pibVRs2cdMPDBC5Mdm6D3j9GnWzosXxRNwgkArjUKJpa4Mbtrh8Sc8QE7qNk7rnUTdNRfSo6JfnB58WPAf8SK",
  "key17": "4JP8dtdjUb9UQuwQTtZAvtk4RxC1tToc7kT9JbaabNqLypJbcGeB5sQvTb3hGymt1cJ9aWjHWJgydz3uU9AkHEnM",
  "key18": "4p7HSiswk3P2H8eUtga82wmSiiQ9J9HYtqvod3GanpbaJ8MnYpj6Po352R7NVsfexaWdwPMpkfXUBbQ8UszQmNH5",
  "key19": "2BJMyDbqjfLbgCo7dz4xfwu9acBLKNSdXNe9JBgRVCkhafthu5xeY9sVTtzq4Bti5U9JR7CnxyQ6jyXo7Gz41DwW",
  "key20": "4J1etrPPMWJpXjfh4KfS7wsTumkaCbzvXBsAHRXn2PKt8fdtMiWQt4YtvnC2dijfZ7n31RfrCFEWVMMuudvoaNQ3",
  "key21": "3znAeQ6754ebeSJirKGK68nr9DMipiM5eKruDUEyD34VcT8MmKDc4sDaoJv5PEiajrg3bvEi6u8CUiSQGqjJvngX",
  "key22": "5jMv3sF2enSwvRsoxw2zrzHKBCx8SYziiQM3HWQ3PgK3u179p4wsMjaceS62jwLawCYKxrPY7KPVXGJm84eRZEQX",
  "key23": "5bpeURGyHkrTsAfdXvungNE5dTdLkgRnGAWAzfd2XpWJ3uvYVWo3uM1RgAvMdbaGcih851kkkVwYBgKwjrqew63",
  "key24": "5ZbmJ9jSqhsZntEJiPowmqoT7ttDZNqh4oB1c7JJCQNHm9XcwjhJNTRcjTgk8EsD4NtbFjxWmfUGryxbF3iJLVMe",
  "key25": "62f8Q2U1qNGuhGfdVRKhEwPfRCAdzAxiqwREp9VBFcDJSdGemA56mhwWwuM8QvUeyzaGx3x7fNpUkqovur1rpJC4",
  "key26": "3xSuY7NNPvqAxknk9xybBuoSHMzP4dneeqfgVLkzPvo4Y7LhQUVpu3z3TXPfBqHZgL9UTJ62QmHMGfUi5dAbxbgY",
  "key27": "47wnxdvVvXnD7McDH2yQXGpLA3hugCt7E4b3BYDbqeSahdCtqExf6itgiMjAWgUMh7GqwAjo3CmJraUedVCR5urC",
  "key28": "37vAnUeb8JBgBuchB8RNChcvf7Dy67wVLzbwAdWLhX8AXLE4VCfMPPWcZGSLMHQpVm4TqhygM77jimsrv8yAm1cD",
  "key29": "3xmJWh5pknk8QnMth288bUorEvRzmztrSXKdR3etUuNmkGfwpgYf9MTs8vcGjxn3xCZJMc5wukEvtMtxGMDPL4nk",
  "key30": "268D6eUUw65CaWf3pniS46RdGuPsM8Ah2r5cdDf5AgoEo6e66bHBcFFg4z8EUioJv1SidXeGKqtKEZjtGAUzJ54A",
  "key31": "2Cssv6hMgHSkHPnSCtcKCtq9yVgMatef32auoEdE2V7YnPnFwF6TSVTf7av2cgDkeibsKB5vzqcd2yp58e21JkBv",
  "key32": "3DPsrT1EjxUP9f8cEHkiN8kRn4tPSNcDFGpzbhNzMPafVPiF1KdkmmCkcnLmF9o5gm512zP1Nhwa8CS2MeDSCnTi",
  "key33": "5LymAGK9BzaBZrypnwe4nE3K2LezwnCrubPvqppZwqsQ9zeC3TSkkqaAqKQHeLSMk4eQDynr3Ws9vkjiPEPGaoUM",
  "key34": "3RERvezbfHc2VHCjQZ9P8uXD1xx8ZJAn5QNhA5YMgd9nkmZ5voNc3CmDqnw7oTVe1zXt8K3Fr4N7E2H31aawZ5ui",
  "key35": "66UkCheK9KndP7GeXPShsyfMAWRPkVz44sQGLWP8mwRVMcJHVAkMc5SxUfrDiFGS7rcU4F2KhUbNBUSbwpBxQ6N7",
  "key36": "2xTTs65pKugEpq72UH9iQNk5a68cmLXTjN8gN7oJq9DT8bGUvCSZEH99NQmuSPQdDkcRwk5pbPaU2fVLZbPh2z3z",
  "key37": "2CwxtWyH6jJqEuQt6UA5RXP5wAE1195VwNz27fpXNEFmLRPdzkrqtN5K6gHtmrRy78B29prnZQExVdqbjJbdg4it",
  "key38": "4ysF9srYPhDL68pD1sEqHnUxxQToNh3zQZWzeSEH2Gnwoxo6vRV1sbRLGq2rgfrCoACVgMPuYXwWjW7sLJDMjNsC"
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
