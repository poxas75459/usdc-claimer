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
    "4j2geKAxy6MsaLphUmvu4NNMLEEHWMa1PnhSLmu2WpPwaenCnsBgckYRHFBcELUdDT53VjP75HyEZqSw1pCybLAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3hNfXQ5cbnqyrKz1WDdk416ErqM4YbDfmZBgnH7U4DnZLjka6mYmDaewQ8qWLhPXRyEDDkqvrMWhxa7jMsYXst",
  "key1": "3DYv4X51PYPTUC1cqjpFRHXgpAZeYeSrxL1NtwEcqjW9CJnYuD3fNH9vXpnTXTWr8ZTmXgB813SRt4Fp84KkTgaz",
  "key2": "3b4j6qLHFB3LZr71Tpj4kBMrMfdWQpydqDvoJ3YxQxDXqX6JtMK6oU4z7ZGrZMvh5NBSCcjDPtiR19vkvGE8MUZy",
  "key3": "HnQmtiRCmnFuwdmzHphbncpNdKxPYfhux29SV5psfJ82nM1C3z9z4HyBz29KXuPrSWy1aZNQYRDxtMZTWQvhdYy",
  "key4": "43VCLq6S1kAyny5xss7fHyiAkmzn8Yq2Mm5MmuDonPi1ytiMhbhbkAgDnH77yjqhE8DEk8ffZK9RD4DxYXCAsb8e",
  "key5": "3G4Ej16n5sB1oqJQohekCjcApgk97EYxxCRhhix3aPYo4aAhdB6PpRaFXD9YikN7PC4ryv8gVqUxwJvzPsxKswZ1",
  "key6": "4Wj1Zwc6vm8cypb6BisQiwmVrHKHPSRpFpFdbAUKLUZAEkiF85qJnU8a9gcvyn6phc9M5dhLT7rUYLM5PzoxpNFa",
  "key7": "4zVmR6EHcF5s2Ba3kAVpUueb9Gg42iiF3eqTjYfy4Phxwa9SrfB8qaHZfoLRQsiWUdSDa4CoE5EAXpjtBD8PTBo1",
  "key8": "5yuiSEVfLzKn9DwcZx6Bgngbm5bGmoezrK43Zf7hc7B9DHcZbtJWAyHBsNQvVrcL3oRgx9peCYM8YnUP7Kas24mm",
  "key9": "3tYXkWENJh3No3y6gs1PrKZKVXrs6M2pKmNdGjQWrqLvrjWeGzWLyauMq6wRgDe6HqXTWjb49iYSWUxdacSGJERY",
  "key10": "4yUy1zs1XHsFRFPVeYf33hKKY8k5VMCGQo3fi1rvvM9pRqS5cVNUCZAvzPu7v7VJ26rTXEdRgh5sgGMjZtq25yQ9",
  "key11": "2myWCse5QZ5nozaQmyMPXXcfrTcZs3vN8XHH9sRnvXhVbxPwPNPRLSR2HfrNTNyPysvxPJp5orSFHRbmcdtJpAQ5",
  "key12": "2npdp5P6hDg2AoBxSMCnC5mgarEg2mEijGzLKLjCgifZ7eHgyxsCPE6HQppKKHuy2pkJSrtgpYKHqHCWsqiAtf8L",
  "key13": "4frxFmnF8BGouhXYkYoJBy3HFFYqARRTcLdVBccxS5WfKgvSR8Ck54okCDgpWnWGX5ezqkty54HeszP9WLkqURyA",
  "key14": "2LnmJPBT2dbW8bvEETfvuj4V86PzcqhaJ5EdAbfdvxrZPHiqPYKEWkfDnJcJaREGgXWSxGYGt7RfLgzvZGTynLAH",
  "key15": "4BkjW3Zj9TRTFRDEuum2y8DbGwBcg6acRMTfMHDJf6uhbZHF3Kkde1zJsLcJEDPWsD2ioRH9Ln2dMQcXv7akxLn5",
  "key16": "5Nit2kJ2wZxxNH6iyfhCCqqGqgj1bLQzLMaCbxomgawJxFT1N46WKAMeZjBMurYkQYmpxncgAxCtUt5SopjRV77q",
  "key17": "3XVHUotzdfsgVKJiNJTTtnSueCyNdGiqPycyFUMCxjMPTg5G3LiE7zyH7Wv8jS9vkELJuo1LkSErzj3KTgJCSzpW",
  "key18": "WtbxQaxtRsaw8qzjG21mENp8yAEtceMziuUtRCcVbefZzKcyADT11gjB5p6rX8WEjY3ckM9GkAE2Fnq9dwqxKGo",
  "key19": "b1GsHRhjnsk9dbzmm2U3WVSKY1De5MfxuEJUDWnqK9yzxNuQV8vWH4H9hWZpzMXV58ZmR6ErYGP5yzyoxRvD71r",
  "key20": "5Kg9n6jX1P6cBMb3LCaKcLkhGmE9m1JQgpQVY1FfntpzFasj6RgUASs4FmyfQoQD7MiP4mexdUHqVnxKQG2t3vr3",
  "key21": "3J4mb892W2iLhqWMbkefuJo7S2yD7bA7m6TtPF5NVvFP5MR1fzgBrNNPsq7WfgwqSeWPAGtPe1ASJHBKUrtJQzvP",
  "key22": "4o25dFqBevFJ7BTwhgy5GCrRfJ7s7yZ778fjGa6hBoJiZuzu3xRQgVhHEXLYkeYKjJ9xVBTf5vTF1xnRYRekNKqf",
  "key23": "5qgXBgJKHQUNFas4JtgZxb7ZSX9TGEpPf7Xizh8vDEtboZqjwHbXSh2KkSdvMs8niZLHXyMit5KgDJutJ1eDhsUe",
  "key24": "2pdq5znxUdQcLsCyCdL6kqpheKc39wbHvewsftteFHPCjVmMTHntAWUepYDBAdbXuy1F2CAapiYUnrZD8DTHS2FQ",
  "key25": "REAFAkFkvYNPJRqRjtkSXSd5ATKjMUWK9uSVTW3ZC63fxjFR8HkreP2EW5G2iH2iJtbFzbNG53iFe44wdLktah6",
  "key26": "2YurRa4DeGbYuktCSAcFZsx6MoYBWLEwHA31BmgwgVmaxWBkxq1h3bqfmj1c8x84DSmuLqUviM6VWgQGNuwSKdoh",
  "key27": "3pFDx4ZaAxZRCrerAkRHhDqergsWDEm2x2x4iWYJrFZZzZ5GNn1URGQZ8dKeB2waewRiYu3soAPecA5uwfqcZHeG",
  "key28": "4Av5ftrg9yooFgtk8w3aLVatZEqP9S2FfmVVSXU9Xk9XPCdJ3iKqXUm2S6p9vTHFxXsoSQwcCYigGNgzNqQvZpNG",
  "key29": "4EMpWxC1sFqJbxa2dWhxr9ChWLBeY35iozNTpCgKG5uawD3JbX4jLufVSf6BdfHMWQs96G5d8tNce485CCubA6Ri",
  "key30": "5nGm1M9tt3LanbsUWScnsHZgoEARvEn2ffDw8ru7dTxy56MNMfoa1zqJLQ6e5p4cy5UNzWNgwVzisrgvYdrDnWee",
  "key31": "5MipEp3Mgyv9LSQfrbxGx8trWgE9Dkw1kk4GHJBGvHw1KvukxkCjb5simh1rpJEpvfKsXqNmPpZfgN274Uo4DwsE",
  "key32": "3voTXJeswDmX5ELgE8negdd1CeZMoz6awoBRY7PwfGpnBnM2exkWxq7TaZRhQDVfvQcjkmb31gQstr9VvitHVjSv",
  "key33": "2CHmHvWb3fzQf3oQum9zPEmUFyrRPHNKdztSwEr1EjF99PbSKhoJ2WbUubAK9ETzpq9KTeQ5Lxmqy36sBwRLzyfH",
  "key34": "5vXs9SsCNmnVKULp3HC7FwoQZxJ58GFT5E1DYf8ysQbHiHYusmYfEuMKkiR3UMjF5SAMiKpxVqaxZDi7cz85DKsF",
  "key35": "5285FGUnE5TNT5N8UpqJbYSaa1vp2mNEhdyNiWM8vW1UpdLkYnZfRgPCAPpC6ct83bmz8qp5i6eapjkr5vny2PMu",
  "key36": "4S2MFDEgQfeVzVa9k6njTQWi2gjTejU6ZP9u1DCHka51AKEJ3QiJ64cdpAL6PrQTjaKj96iw4eKuxnZSKdHCSk9j",
  "key37": "5YKUQ3Jay8CJuWbkLthtF5XbfjwLkbFrR7EFb6QUXvsPpXrRkmLPMS2kfpDXRATUfi2EVGnz8jsCNGWhUULBa7da",
  "key38": "3dAhkcVJLK37bPwSouqFBodgwyj3kNWgC4sk1zwMMbwkte1NxeagVgCtUuwTTgrymp6VcaMmTA7xprsWHgHunC1F",
  "key39": "fobtESvw8sbX68KogX4VFbfoFKfXcWhn4AHwHh57K6Ke22EoDrLTcwQSAazu3zgHMWRxbfscFzCrnB7KVBmiM1B",
  "key40": "4HZfapEWwLvpBCSqK1Q3oN1Jn8hw9W78jiiDFCk1eQX2yrMNvrGjJYtoDwvpRj6HV1a3Jx9Ld8KkNi8PSbAztG9p",
  "key41": "BsHWgRbhDA4c7uNF1dFVfati7Nx1qSKquLgYehLq6aCg9dWA9VX7cNZb6ur16MxQjpYkNDw8cKGUxNpQaLAUtev"
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
