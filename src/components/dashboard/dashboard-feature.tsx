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
    "iHV6BJZuYnTu5LQFHjA2Z2gP7UhiCPqwJMGr2Bm383oksRvV8n6XaJ8tq5yWSJXAjafpxLwkKni71bXjGmVpf8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFzKi5NzG7teaPCo3NuHiFxYtHmR6mjXP1ojprt5mYsJX9mJBdEFoZTsNPVtuwFK9NwamLsjNCLX9bxm4AajAum",
  "key1": "4LJ3Ujsah6oBkNRzbzfZUGFKz3BjsBCwJhcSWPzhQ56njpGoSUZvU1H28wtHzmcY4RRfjBMEU2wSW2kQvdfC2eF8",
  "key2": "5LSMiDaa1hyxoDC8pNKULtof1bX3kqVkvR29HZGHPH5CZDjht486SbXD6EMX3DZ4RvutM5wVNRoT5VioTZPH5ZTa",
  "key3": "4Q1VtsqzQffG6zC91eXxE2pHDgb8kkUjediyFgg9NJKyzyjRsUC8Dy11h9WxeCsyzTnqZ7k5mp1KBaNRdqVcfSBX",
  "key4": "3rSfRxiuiiDG1ki4npFDqDaWH7CgYHvBrBbwdTbQXnoxgF5cgGPT1rkdtDVn7gicEJwrkEqq6XRuYE3og8cqXHrP",
  "key5": "5NUXPbxJYGV19dkTkWpGpj64GM9hDZc1z6zpuEm33SMfWCww8pGv2Kuqo3MxEAjCcWBhXEVj1dmDyxM5EBNeEFuV",
  "key6": "351TSWyRy5YmEws3PnzjmKarRNN6kike5BmFjf5cA5xZycbedj92QiCcwBfDWBAgK3vw3Sdwu8UZQvsp1ChCbrbw",
  "key7": "3XMfokWouvGAwBJox8ET1LNJ5tvauwdpDwdDoC62d69ybuBL3nM9t8diDz4g1vSXKK2ZoMRuriz1eHVbgxHSQiJc",
  "key8": "YAzbpZPRVu1JKx26SRSEqoPZ69nkcDcUAJfT2KtvqG7fi7FzvXTuqJAfiJ5mkZyHuvZQuZt42LVZA5xetrLymXQ",
  "key9": "65d5XmBXDGkGFDYhmWqA6UFuBo8oF7561BV8Wzje3B8Sp7aN3hX4jEfhT3EkTKV1BtCZ6SwpzQqSVoF4ygsGQBpo",
  "key10": "55s7gBEa4LKHSiyz5KQjAUXJDmTaiChfp2pM3nvs4AWyCmZdd4ZgEGF6Ru8VRtyP6kgCiVB6XJP1BPyhHHs2TjgZ",
  "key11": "3PECAX9Jj8sEerA5hc5cxZKZkoXg7Y3VeTiEi2BBvFuNvY7JsDzgeNy81gWpQpXb4s85zWKJ3LkjYDWPyzXefVXu",
  "key12": "3qsX3KS9duY2iZeMbm59Q8dsDsY3TX9APfszwEKjxLYdt1kdgLK8dQQ9D5GSGCAN8bK85frP4pwrx73myY4WH3EF",
  "key13": "54UM3cvPtWw5JoBUHQ1Qwogfc3hmiLvofWymusuGY1uQWLnznb5WJXjd15Gjx69f3g6Xip8TetsTsugjagVQ4YTs",
  "key14": "3yiRhWAfc1XiwxXcnbqgdXBrqQZWVFrvqdsLdoVza4vLMjxKndNULQzovwuu7rdvxD3uhpzjNiLX2wJUTndNkEir",
  "key15": "S1UDtLShj1PMEbho2Su6mvQ9gaWPYqRt3Ac4uMzwXWRp16Xcg9U7uKTY3a8K8smTsG62UuuNuTSoJTxgN1vZvLQ",
  "key16": "4yHCWThjSKUhXcdfjDE6MYuvur3QxupejTy9S4ecSHwvq5ZnXvxNnWGqhDFzaEzc21MKBtEURYWJrDv5tprE73Cd",
  "key17": "abbcZX77uAp6rNWjbDuN8xHHU2JAZSs27DEorbfwGaJarbUNg2iLtrX9Rbrm89DmBj36KqxZ5vAZCDhPGoo2Jf4",
  "key18": "La4AU8hKRExSFPZYH8p4TT12qVAa7CwC1CnEixoFFhGpLHTwRpYSHMbFSqdREzvbUXjGSZK3middAjsFUC93Jqh",
  "key19": "4R9MDkALN3MYjs3SSmZmWfeRgD13JnmGvY5DJis9XWQZTwNxkRbZ9K1LVemVBeFU6TBeG18heaKdS7scNGpJGuTR",
  "key20": "UuowMLYaPVgHvWokC7eZwaNwiVU7mPNW5zAf4faYD1y9zRqbSw9CfDiDThEW1udSzgJnpTCcx9inpKACkBM4jcZ",
  "key21": "3g57BrcVwRcCDqbdmZ74AA1MVfq4GEoHyvJcLLbLpwhUdd3uun7QcxBRavjxq6WPYsj1xWW5FvuPgEmr3a21Ehya",
  "key22": "CkzfLytkhJvXZNHxtpNVazmU7RXgab1i1VHoHzL2sj5CdqUEvZTYfYjamsUxLcH3JpXKEagmQK7trKpjLX4CnNq",
  "key23": "3WfzuXm8gSVtsJ1DFk3FY9eitFctT5hKoTEZBpj3SgzyAsWYyLrg2zRDdynx11b9M2RAf694RZHRdbr7F7C8BumX",
  "key24": "27jp48uSBa6TWLZxQdo2bQoKpuRS4ydzdKxt4AeUmgpodtHmhFsLJnb6GcqXPWzhX4Ghwf7HrhyHR4mDGBPjyxR1",
  "key25": "41ZCuw6jN388uxGemkQk8UquHZCDLeShXAapBJ22xhmJgtAwbY5zpFVmN61VV85aey7be1nhdzh5kPzAHsehXL2a",
  "key26": "yiqpYapUKvhLMELzLwgMYpWks38ZuwKtCGsLrfJwgbmhWdM1UKnGKtj4vicPxWTzyzFos6wvqGgNvVmKViUozFA",
  "key27": "3Hktd8CgDCGriMLaJh1dFURjvdPdnZS91Zer1mTFBKDdXZXDhFKfxanZpj4xrp7WJqybRbAf8Bg6HpvA3FZXKUG7",
  "key28": "wX2JaMvWyucAZUtEnFY1nykMVjnBCf3psZQn5DVoSCd6b2x2E5byQ4fmx4XF1Sd9sQ6N1rZXFsQbW3chNjyXcDq",
  "key29": "3hwRFPWCxo7Vb9tb7VnzGX4pG4fDyL7bs7xxzgsMt3EgtmbmrhRYoAPSWycv7ykfk5PzJ8MjDzRP3w4wQ6fqmshw"
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
