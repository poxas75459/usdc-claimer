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
    "3F7rjicJGKzLexTWWLSQWKo2v7WVAYok7ajaqZNcdXD4NCGh5ZLypsf3HeVQfe16A5shCdLRfyMAesYFKH2APB5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpZHdUS9utcYNJjWdNRPj5PPRVDk71nQ9t4ksmCAAV8onXQgQCrotneYTz4zCMc9VsijXMny97pBZLHh4Noma9J",
  "key1": "5g5WfE5YafgQNJVnyejrqbU7GM6kzRqpqwVPnKyFA1LSHkZTkrr3KwYpHhu8FoRFkKc6Vy8bhuWrFsodtdxgJQAv",
  "key2": "4fNW7cFCigWHwdB4fKYw6CfN5tY2bQLqhY8HeNZqZNkAnAgeRduMnyEwaPy4gbBahWJSX7pdXbH7qPYHbAD1YW9w",
  "key3": "2XqnY4jNgJjtVuGAqoeaxFCygRxCDsJUhkDZTiwUBLR1FGsBQMJ1ctvpdSm16Ge7qzdjczrrvAVGjvfZmpQUM1ut",
  "key4": "KAQgKnJXTSTwX3A8Krw1LSfoXRKpfD731b7euh8sV2WP1Jr15q75T217Dqntrt7TzFvC26FP9kKgEX2nqMC95PJ",
  "key5": "2upywfXBSAKmZBwm88K5hv64LC4wtHqGAowcwTHSx2PBmEsjGHvwZyQhBAxtBTFnToAJeAFEMPKYpMk8ovZJHsmk",
  "key6": "5kXRpTD5vN721HombprTU6XakE6EnqF81sVVQ3ck1ymF6v5FUo3m8MmFMDuinTL9eZPEfwRTtLcuxhHdwsqRkCtk",
  "key7": "k1hrenMj6mH3n47UEJZgLpvjuNL96MqQLxzo3UD8EFhscigdtfHCmtz25SvBLigqUJzDuAhebp7QPcNnT6NtVRi",
  "key8": "44pV866Ci1hzQwrczt7JEKv71pYRnwZ4kDNSbervE5p8xa6u4xi9dWsk79vAFPpJKzQxL1FnUm8bvxUi42ArR1u7",
  "key9": "pEgnpAVWTc9nb3sYWmDxs97n8HkxQ3qHh2rfaKr1tfV1Hbxb2HyAxZiejWA3yGWaDQiRksv1kJByiVFhJ6Y4EKz",
  "key10": "5J1UiDy6Dy6KZEKF5kpDoA4ghNAg9zYMUjSEYBXBpgiA8pM7EfwRjkAHW915xRP2wkZjVEz5rxAB34kcrgQctKon",
  "key11": "5qPMdXudXHLdNoCEDz6WEAisooXwGk4hpEh8Mi4md7zE55f2NkwsCzxwLw8LUNcuMfSigFMQMdqSeNHaVUUxZ2YP",
  "key12": "usadUK8gE2Y9uNki5JyBx5DXkmEJkXnXg8F445ELCi8qybuyYWjZkJNpkp8pv1gE7QSAb9L7gU1EvHuGoci2wC1",
  "key13": "SNJvkSuRfU5RXuoqbnj38zL3q57iVMxZrzJPAyRYTKLmAH93joLXAYgkYgF3YRX1a2h5sirLmUfRXxYw7LBDMFX",
  "key14": "urbnVQhgxXvyunPeTp8gWV9wvRsSUP9S4WpSuj9WbenfY6MQwZ7LibL6GMvdK5dYnXEg7UCme99tmHSg82FT87j",
  "key15": "jHqEdhf7152qg7WPNrLMbFZtJYxx3pBYdKBc4Y14hGJMDRE3u8Jedpcz6GuUZBUqUu6qPwGEUvYL2etw8LDak9B",
  "key16": "65RvnQafGEvGmAEo3pL8Af2MpBnmzetV2fT11XvQkpXGpfMvoetYgW4SrjYjYYN1oLv2W14ow5rQrh1gj9SpBea1",
  "key17": "c2LN6gBmvnmzMvaxTpRmH6PWYR6pNbiBny4ZbG9KDPjHE5jbErg5kZ3D6NiiiPUzrnEBerhtcd9SmAYfRcVmPcq",
  "key18": "5tNH3LvhLiPfKMFUfxqW6iATSgeb49kFrrsnjEDXc6j33mgcBbEYR3LjMTSuCyTSbccxn7JPpnBcid38RrercShR",
  "key19": "4CGSSWzVrc77Zm2MpfKpEd4fSer1f8WGcnEMdXQgK3bvVpw2Jzjr1iabkbDo6pzxBLNqoh1NxTPGoAbRRyUjMJgL",
  "key20": "3SoM7Wau9Y8mLCpQ8mopHcpgPsEzUW43offSt8va4RHR5k7gLtobJWYUm4pSxWtw8HVryajH8SzoQSyntBmTsASe",
  "key21": "47RGb133JHgJSfaKL8WygxcRGLT67E27PvGQYjMnFpLnR5oJ7BzVnsM9UGqdrQLCAKzfMpfPgzSoMBHUCWJVXBnF",
  "key22": "3HrpwpGhfCrG2x2xRj1Hd39U317fimPqw36WsfWHq9A7iHTi5j83HtsmRyNVwCbcLHKs48Z9p3SpUWoMqmZdcKjy",
  "key23": "51AXaWrKqwqG58nK4ZRdqSoapoJDuMM9JjNJxKstJBcf55M7gsVKuViqoQXRBNnKiWLxpT3fKsvWx8rXtEWygDge",
  "key24": "3sroBedPSL2T55Eb2W58ysJ7GZy8wzBd7aFnTZZyYzYL5TPAp1v5MFRSzw1sAZjRSRQ6ciGr1c5G9NJbs9wVrzZn",
  "key25": "5XT6bzzojBjqPZBciJBZfjX66q6EHd7pkYe39BL6Njwz8SyAaDpgnGkvnYffpNiphtvFMcNwFep5svodj4fTVDtG",
  "key26": "5skQqV1YFrfDRyNM8LvuWtQEox2fx1uqzHQLFfPnjzUvkF5s5iK7BAYucgrPRMaYjiLY8DBbquWvMxD8FFBso52S",
  "key27": "3h5p5bnm3VyaXFk84b29TMvY9XKKUAtBtrC3TYDo3xSrWYZmbKamo6L31xW3zmsHYHJALRgJY5XezQeKFZM8Lg3B",
  "key28": "531TXdwKddaNagmAP8yVNWrdZJ79QPMH36SC65A1aTvaTa6RqCVXjJBuCRUVrrw6azqLXmMCcj3X2xfT929pcs6p",
  "key29": "2FPtHQmbEm58Ch5iXMj9WVPJUfmyFi4VYt7UFSdxX3h8de5buA19VxjL7jTgxE47dsrPesyopFdjKG9Xfxrrhf8h",
  "key30": "413V4SQMRa4CUXrqpVBxesB4rfdtpw9NS2MtS3opWwjEBd1EtskTtTZDGBCTtB2dhwBFp1CVyfvmae9Komm1RqUn",
  "key31": "22iw52vUP6JoUYHKy3YcgSpU13HxsN5RgDNdNKrHT5E85rNqrWT1EXpLzHdjByPBbRZsfPrA6FrHuvu1ZK1PXKLK",
  "key32": "2KkpSPzEmJc86RM1YL3Wjor5aMKxNV4NELGgKb9DHrNqni3c2cGudx5DG6ddRPXAtwgriY2ZxmFWYyrHWkcSNfYU",
  "key33": "36zcG41a7cLp2NAFWV1SDkNAruCyLoFw2FjnZASDtetembDNKd3V2unQmtTPuQfpweaci24MKXpqokcEikmRBMz9",
  "key34": "4gwYkayVE9E9CYTaDemFpTvHCuAkbagEmSxq9m3pW7sny99dmBnUBwi1ztX236dYwMmsPA3Y2wX9ijmmffkr2xT7",
  "key35": "6XWADGYE1BLCc3LJ3vhiMtAvbpqjy36PpskG8CzrunZq8XKksUnZ7pYcwPH1wcyDoYqtZR5b1PCJQxrVuN3nS1z",
  "key36": "57BJphzyg2botBJwwRRzQNhSKMkHeH4pSU8pb1c9LoDCvs1pLBM839rELtP3wKFNwZZSAPbxjNkMMoBDyuk5wBsn",
  "key37": "EfW5b8CrqcKWsERmyNFLffgCNVbfcHTCr7je5JDRZ5MP97xjZgZY4cPy5E1gvCYPt5FuuN5uyQPKR5ZQibLFUEf",
  "key38": "HeJitg1U15LvsFUjKu8M4o9CWfkNC8TWFGUksRV3HxFhq9NatEBfPGGwuE2W6Hv46xLLpVWw28YrNvfMWtLKsBk",
  "key39": "5iXr1XVCCMFPHCYNhcVJLsN685xf7D2uGPGXDqBauBvpZmXrNUKKEtx79CALTvRKJJ5YjCpYJZa7Vo9ng16GhSC5",
  "key40": "2Z9FFzwHLjAMr1y4puvS81rse4aMEotmawnywF6QxKDyLiACqPwRMQpVD92FvXprNu6YMV3kANjP8WvZU6biXaPk",
  "key41": "ajqCTn1yX4oYY9z4AwXXnufwQbJUAMfF6S9enmdmpikg2uorxq17rxyicY79hCqz7YdHBkWzkq84XBAb8rkA3gN"
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
