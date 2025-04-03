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
    "58uzDUiZbriLTmxabYZAo8ejjZVYbiF3ideC4nTBQZq3YznqEnbzAjFoXeACC9iMC6fN4UFp4t6BooRE7VEpkMAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59JGQBH9cqoS1zfUp3zLb1xpSbiMn4BQ18WXc9bzmBm4MEJ1Kg68y7jtb57wtswqDE7A9N31jcLMHyDeRXhuzTNR",
  "key1": "4KacNSyfh5cA4WNLJjNBz79tKcFsL2FECFvBv48ezGeMvTk1x2BbwRUqvScMhRCCtAhrFEBzssTQEACmm5Cjp3yk",
  "key2": "3QRA6VErZTwfUfmP2ybbsXQZkHrQS8kJMgacBhwXsPes6De2yrcz6aCv5avFajJV82igy8QML1Zvv2rUgwj74iya",
  "key3": "q4sKayem6zRqeAYpjWUEAchLt8LS9EDcz2MTMgd35JoPZwdzfAvdzeD4N53UPRoifCfkDxm5G6QHvyWQTwE9Ga3",
  "key4": "QqxhD1ESWENzDJnwpPMjVDmrGNDCgQ5afEdXXsA26iLZxjUtCzUnB7haTymwvNLY3medWf7EpDupp2jtnAUdTpw",
  "key5": "4kjnYaJ1DofHoJAFA3tdTsvU9pzWAozDVJSWtf1k8KT2VRzeGitbMKP2Eq6BuQzZrAkxkaYVRn7wbhY8csFkMd89",
  "key6": "4ipHgVZiDnWFPTx9MAUcvFrFWVFHT21TyCimSC7zUejqGeaJ2gwZvQYwPeTA8cLkNBxNRG7MKw7R6ao2eVkxeeot",
  "key7": "531ofa3mkNkpEitk5X43ngpaDfShWnEUg7M3srWe1EokKktzQLBRHRbJrp8sVPccrbVmW6kNUi2mrZNnYcWezGJ6",
  "key8": "5xr2s4WyWmDRKoiG6fr7UHMgLLRn1A7qKQRNQahdwYxBKYuS2BTzrzQJGbrZB5kSfkQPCzHi1SQ5PKdc7kvU4BYk",
  "key9": "n5oM7SeXqM6QCNdt2KGhTwf65K8w2eBhNnFnvZ49cPeNw6TmfD7TMtS1rzEheumPba9ymXCKYAT3Ax4Czs27e15",
  "key10": "4DXuKxbb4XhArs8oLohmKVHoc6REYo7n5GChmm4Riyo2XRpu2Ng8K3n5c3JQDxHdwbjvJY2God9PtFyxzDzkLr1x",
  "key11": "4uaXgfDubivLdDpG5s4xbbHAgzubzyxCPktzRgM9sc3CvgidQPchU9Fhc2DdBRU76hbiEnMspNsaPvsN2iaKv2HL",
  "key12": "wDh4v63PgJyLoHZcpHcGkyQvJQemxQwUsn1Zmw2uxTW2Wg5MJ3MsNXZJfjaJ8yoJe6n3iVr2BwRA4eEHxayWkVQ",
  "key13": "3VtRvPPp6K4ifPSPMMx1kafBHFUmCa9AMZjK9vKax3UF3YRgw534zHCJCeb4UGAoSDdiJST4ZNXQdbZ8UjX9S971",
  "key14": "4VdjiGu9vxb3oZf9CtfPvFsk1nCrzC6Mhyho21hsZk1wp47azAqv6fq415HK9UJ25usG5uY8268hM341jhYkxXqS",
  "key15": "35EFKTsaDRxZqzMTDXjXw1aYh8Jm77NCZVAFFjDyLeTBDGxT4KgpJakegFSvV74wXd14ES6d3GMSNGZsTCcQVrUR",
  "key16": "5XEWbnNxc3PAabGgjGykkwSGqh4Aapm8Ju69Tc5smqiavcQp7T8owUuiVxNcb4XraC4PZyujfSXkBxNjHQcdyNmu",
  "key17": "2bGiguTqYYDN1LxZZerEncWpxi2eV9yhhzVJgwJ6j9w9PLMezfCsEzzWgxSnqHKb7n5zuh4qCYpZWZRH88eAjVcY",
  "key18": "5sULoUbLjir12XpTjACrCHsSCoErBnyqbBtDc6npWgnozK1fgjtbMVroz55figSN1ivsVx8iihSREMKgw1zVVBzN",
  "key19": "5SnzEh8NpiLu5VS7fgY45v2xxu6hqijGH75VLSwWghdzfMCzRoDVGfhV1dNzF15QB57RYKMrjZtPGAFFNZMfjrbG",
  "key20": "3SdSM7dDEAniLcz3G34N5V8qVVZAUtYMoff3phHbxRoHj1rEsSEYEWQgTAefWr6vgmT7fHKS7USrLg9UZCDFjjjP",
  "key21": "29jpqJ8sjZ6ty2rabBosMyyTGr48Ko3EqxG7U3oQGtaWftLxQNin2fjS9Ti2hqug9yLYTaY6YSw27fqPSB7sTpr2",
  "key22": "hwk1PLnc7h9gUi5wusRUSXjyz3EmRw8QStdErLHQSDLS74fEA9pXdk7uPGHBPUofE4HZs6huPK4KGVr1bCwxJuR",
  "key23": "3wV9wRAmk8Yyr4Ug748f3YXuCCYk9kL5v1hg8en4SqBfbJZzGdRUieVYYUbY7Y2kMgEAVBniJaJza3husuuAmtoS",
  "key24": "126wxnYUWbbWjHbfSp4zSD8DEzTXsKEJeJzBKTwKqPoDRkYXv86sxRmNYQcfJXnBGSU69gBFMdZnTjqWRhmkVizZ",
  "key25": "3Kovyuaro1kZKauWDERzuWzy4ae4WXSVA4MfCAZe5naQ8vj4AE7A81E8yi2UL8S9SW5mDKP6QCxJYHjQbDWYtSe",
  "key26": "3Z8D5grMhUphsTzgYL2X18vkajAEvvLTjogqJWtonYiDTk3uziPLKPpddNfuEQQ3moXbrKdg1nE35HEPTtKqMj87",
  "key27": "WERf66NFty5j7z1VFc6Dx2af9nZWt8PmaHgqocXSBKS5tS6dAjba4zqwVqcRM9BobhFwQdftvmPJ3kRrr5QAGuH",
  "key28": "gtqk4DVqVDh1eDvftnd7HSvgoyL2poQNw83xqjdqJS9NDaJdVkosEXwrzzLJbJrDNS4NamySCaMo4eihguoDyUX",
  "key29": "stjXjSxFeY7nLFoFYKbpVBf32MkxjGjLK8YFMDsoWtjwcn15nyScBxddq4sXg97bzu7qJWvWTBD9B1mjKw3mPQk",
  "key30": "2RG5aN5uKcK7SweFpPEWRQ6o5Wo8oFM8gtJyfVHmMqKj5r7ZmEDxeb5M6RRa8vi2h26nnEWitWpky2cCdetDzZ5W",
  "key31": "4yyFXHpY2T1ecxVenV8DALHjmzjhTxQAudVu7CtoWNSQaTsyn8N93T2d3JPfYFhNS1M3bRcsp4N1x9cVYopMcthP",
  "key32": "5ptDpnjdBzB7kyi35uwVmY1yuoq6ptaBBmHFujTCSQuEZgyatmL1DAinhqmbTMJyDu1B7iRegspAJcV1AdRcMLTZ",
  "key33": "3KiweXSkfeHzgatnKeNwaWzrpA7guJbA7wWonUHKtB9m9tQ148fGsk6nBjMZQxEJZr9VZhuoJ8w79tAP5aJmHvRh",
  "key34": "61n911F1x6erpQuvK2oGxANHnN56y1zFWkycBmKbozdyFjiZjJgi3orgssEBMjisTJ47cPM2K127DteHyE98eqtr",
  "key35": "n7R3NeG3hu1ngSExrkmL8jabHnXPztsUZwKkaEnUiAuFvTVfWKAY5pEHbZWQBV8tUjuUc3pwhEvnaPkX4m7CWvd"
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
