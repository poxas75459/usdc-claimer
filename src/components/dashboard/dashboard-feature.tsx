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
    "2nm6gbi2LwKqW9j9oBU8wwMnSBWcZU31wXfPSuP1Cbe3CwCjQdGvFiw1sWXPLJFsgtm79Cruf9Mx42YzGKLtqncX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QczUTEkVGHUm8qCEBfx9WB3mv896ybmdpUpeY4pELV4L3NQmauaYks845yYMNgziNGkpj7fpr1UmopVwpGTUUrN",
  "key1": "4PetW7p2cbaXZHRpd1omArZZ2eNU6kvYg3B4tZk8miuUev6j4xBJ7w8qExsoukpKQxdaBbdet7TSrep3QRdXXJ4R",
  "key2": "2jTiXEjP6bZCCWq4HPF3UCpBuGex37MunWMddrzGkDxfojNWsqn3AskAFnvaXQ3yHLheE3ZHge4fiEZqpmccYptS",
  "key3": "3TtZtMcszBFf2gKRwtW7YKW14fz1W9AhxJAqm5x8XtanbuBXNNWG1ELGm15dC24xZXcQxHJnqvouQrLUL5PP4Hdj",
  "key4": "2AASj2r1rjXPNX9o1rAcjgSnb29qYX7SikgZoGHZ1kJAcEkEHk1wdtj2AZbA4Gcy8HL1ULEbU2YHsm4GYHJ1FFBg",
  "key5": "2p54ptAgAe36g4NT92WkH9Pvs98zfCEXMj819BFQdgeiCzgWEBzSNBCmuYfqcJLPVcQp8RuNpKwjxUKuhSY3Cesu",
  "key6": "47KNG7MDGMFuwfKmtZtTBV3UbQDqBhHj9R1mip7gDY9x3E9jfdgzgZm1XvJgE63gw8Srjak4s6zZ4nejk48ujTc8",
  "key7": "38ESeLDTgh498uv7WVQqfNh2PYd9AZFw6eda3gc4mtyhGL5Lh7w6G82NCu3ag1zMewU7fmxLeohccfqu7rhbQqR9",
  "key8": "4wr8sQ2Eta1jzYRZZFcSQVNNymwhpNCKGnyQG3bPsuQ5EzKRWzY58fMoDUya1ECfXxKBh5jEoNsSSypRwb37iaC6",
  "key9": "DpJrv8kQ6HQCRB2XiXRoewVDQUA8KZwZ6diXr2PCySuQAvmraPG9999rxawx2mBmeY3KJbNxEHbFJ1pMMnGheJw",
  "key10": "3iLipkPzNWZFC4mJq9xCVvWD2LrapvHvpLBAicwa743ignBXCoe1whNPsrukKnvy74JDQhe2jSJv65U5xHKwVacS",
  "key11": "4VAkqhfqX3Smv9Z8A1peZMwyJLsqT1ZCmcC8NEGFHfoiovGVd9UUqGi865XNzfUVYY1N5y4rnmWaTfWethsFD6qy",
  "key12": "2qtppvhgij9xwvbmjYQAzdrXaJHKedFbueTPbtmak47Hj6G5dcSi52NkppqeWprZfaQhqdoDXpTz5Yvz6zScwF2t",
  "key13": "4BqzrTzzo4N4SNPPT8xBEuz7aZmbeGwoBcCauNqjavcfrqjj8r5aF6fwb9z7ZN6NtCnguk71Ke9i4KPsmhGVGB2S",
  "key14": "tXt3N2YK8Q8jaZxz3ERj3xZZf8bjfZYShwjbc8ReQHpy518Z724vHsYuA7N38QdzY4nMF4SpRigL5Vois45QCHE",
  "key15": "5FhWze93shCAawezMKxMtieHWJbUQFzdH1k7rfhHydLBvFJCPaFZhMZj3TALctRvTPFCu6eZsQxCyihDM6PC69F6",
  "key16": "3RsiF3mrVVFSMf7uSwwKsxYx7cewqXXwcGGr6ut2FsWnerNV3tFJwrwSkfqJyBhvhHaNe1YSfrbKgLEoJghRGkBH",
  "key17": "5qt6oe3ZPqDzfzRtPeZaZMLWanrjHuVpL9ai2Se5C1xXWEiWZagjpXev9gthXB7iAQ1HUTTsr6PtUeQf9QNQdPjs",
  "key18": "rUqVDPXUhC6PKo1d2fRpBH2HjZxQmEGMwJ54nkaSxaMrRghGp4L85yD9KL649ik81QQQei4TR5bs1e6H8EaCRxT",
  "key19": "3mePZouhbirxnDZ4KyGGBTyrk9VaZbK7j7iZaHy4VGT553ziv5noC5HHqkCtS4aM2rHmVzEftbYhr7sCYaoxtgc5",
  "key20": "5xUL2eSp9Gvbxvx1UxeM7SGoB6m8FQDK9UPAX1AwNKtJG1LEqjDPuPZw4LzGC2KnKaEihuuGzKPKtanaF3fn2gUq",
  "key21": "3hh1Cytk4xxr6Bnyzg4VmtPbkCS2uqMyqFuUWqrcfyXA6izAX7BmcEymF19bAm8dH3Q2Cz2sMKUy7RX1chaDansP",
  "key22": "4TTwQLjMCgR2JqQvZ5jYqagKiVgSnNS3Ent1xHgRpNHN2JXMabzHhCkepA811781zedro9KEn9QBMHkRTmXctFvY",
  "key23": "4QeeaDuycQy1b46hx2hdHpbGWGnj63oeRRpZAXTe5uRqy9jUtmdEF1PGQH5sSS9tL2WYwTomynuaBXqaSQxnwTBh",
  "key24": "32LMQYMNEz9M8VZErLyrQR7SpvMt1kwoje6JbMsDEkCy6JxS6oLhbv9ZgLcYD83QEUMHBWLakKmiU3y224gu8jvE",
  "key25": "3YraKq9YQoSEeEQ9ggr15vETy27ExFJJFk4CuAnPkhRaeQpZ8oiXohHFRYK35RXMgZ6iTpJnit5ZVLgegUkUFBkT",
  "key26": "3WFiuEKKYvmLKStq9hprGiq7o9ezkHREZJfZDLUkGV9TrM3yLDWAJkdMCXvEyFTTMedZ9r7SK4p1sCBFAexofmNf",
  "key27": "2pfYrbqQgb1uP1Hnk9TKaHcxK9MhXVTxBoMpdzn9Gcw8S9uwHoyfbSL6yaQbgfcXMVWunQtUXX6Dt1P1Bh8Kw2t7",
  "key28": "3eNTWpKYspdaQNzmFGs11MwVbWtse6TrZzX861iFReNKPpdQBu2qSVPJx9XBFFhcwpgZ9TPXZ8sbmnXeMeAHyKXr",
  "key29": "XMMsnpe5DAzLnx7nAGSfB5VzVKbS2wUjrAs68DSE2eF5rWA4gpTNccn4MUCKxKtsni2h5PJTKxrf32X5jY98VkE",
  "key30": "2c27gySvXuFr2vKCNkT937TwDpSW7uwX7ohDpmWvnSZ71aWEdgvtiKmUgYud7wnvosZdCtx6D2qwZLrx2SwzTvAr",
  "key31": "2oShuiGD4jtk8pABCDhLSpVXYwB3A1nrQ8Bo2XnsfVsJmJyM1juuny9TBGWVo1wFb5ih332LsozRTqYyThEMaWTW",
  "key32": "bgccXaYw5a1VoQpxFoNAtdC54rHY4PySGJxGQQr1qTCSzkaZinkZoXDoC1ezfGoqiEH5mUBu5HNVW8GDdhaq7Ln",
  "key33": "2GRyCbnJp2hWAknpKsZzdxRhj25AyJCF39vc5betBaNB9dq8QAsYLZmT3BZKgbzpsS8EHW9pSWvVHpYtXzqFnaRC",
  "key34": "5HC8qM1ZYgTMGxDspdJnmCD5Kmc6j2mmS3RhoGoihGstmeuNfcdBERgbgvntCoj43BM9b9PEc9niw5HPxBmnaKfv",
  "key35": "5ao4HsyfcQchohHBLhGNQbnyHpTNsJUZ1XHvhX2iWzLYcvrsSxtqBqUGfxoTnQ194d9yfRWmaexyAK2eZsdGqV6x",
  "key36": "4Y9xMTBdhxfF5F2BHP3pBJ38Gh9dTyfntHzJHGUh1i9QEBENa41rB9YQpXBP7GeU7nuzDUGZSNQcFMZgyKa5efGV",
  "key37": "5HKfJKkAkxu8maoVsddKTmAoezXA5aR3zYwBPyn1SXiE5k4EcmaHPKZZD1bdPcFjCQsdZPNGsyeifhUAngkUnAse",
  "key38": "w8t5wWL7FY5itNTe4FBD1bCNmPKFJcTsgSTTnVJiEQqeZq75c23XWWohq8nzXipENJm7YT39HkKyW6sMhiLtgwi",
  "key39": "486eiMWbdBWmpAAd7K4JLvbPuTXGv1GiGCEceguZ2Rt8CHvN8TQegnWsA27KcsxGwFoJLb9Q2HfoW8joUTq38Ldr",
  "key40": "4Efcrg5KidPLKUkYoswx9GmzPyu67oFWrYe3Eid86veLdNMc5ca5EXgf6tUHtcDou6WxLkbqTUFr6xzkwc83PHUX",
  "key41": "2pz8fem83MoWN1Tzqv4pfvmo8yXLPfCtESdrnfVgoo2t4BejGXEnfzgrUkYhfepwcaUQKe97b4BxvK3UhYTkmhFz",
  "key42": "3vAY7jDVr3of6ZBkBvNc2pyCitFcPsi4WBXZ9s7AWF5k9t3rFkodFK24AJWMsC5mmKdPtE93cfDWmraeniWqgh47",
  "key43": "3H8y9tJVjyaMezp8NyXUZ7BfEb3eNAFzczUscTcC6JXhsyfguoZF9A4eQsiEbWSeTsXigQcGbdvPYQD8AVMV9qdY",
  "key44": "4wuxcEm74eqfqdmx6XUmk9nrjMFcYNaCsQRiNJkLw8i19JbcGdtwgXRGPBSRY2XEHLzTAYUGLTwqKgpjSytx9btv",
  "key45": "3z1gViZUYWCExtwuhbVu8Z5ibdh5imzLgPEFTkZF5PPMjysGnEZZsRs2dQVXMVBhZYWGKmjgjGTSNNFCY5yenzLd",
  "key46": "35fnMGxuWWzcgTVw7SvN2Zfe5MsX6dmnQYLTjYCteudFXzp6s7sMN3E5fFHY2t4vgVn8RdruysrzJL5A65M7Fkma"
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
