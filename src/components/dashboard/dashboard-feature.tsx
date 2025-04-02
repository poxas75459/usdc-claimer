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
    "4WaM9h8tcDUsojtFt1v34yB7bnDLFpcm5yqWbgNZMhBkYms2zT6o3QnvoXLd5vgmVK7qLzGKAshRnoEdxLXofXLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzyxzyw1YcBkYpGSntEvbtm875JDVgKcvmMaHDD6aJAzMJajjwHtwZVD6THnFWrytaca9hQMVi1o2xEhkvF9UHn",
  "key1": "445j8mM5u3LLdoJnhHdrTfnEQ99PgbKaQ6tbXyNEt3fEi84e6ft6nFuy29kRUdNTDC146k4Mn2CzShB9He9QPs23",
  "key2": "47MB3Wv1AiQTSh4H9Ybc1dSF17jV5AZJS7WUVe5KtATiR4KppMEXdsjpm58MBvcGaUZzzLqosjrxH69cEmrdavkR",
  "key3": "3Jzqd2FTJpqL1hF1oCfaziiqPQgffLcMMh3ZmVWvrJvc85vCWSGctuX7NHfQoSNSQtrnHzqb3TCXX9gLDAnYZBXQ",
  "key4": "29zNDJd6pT2V8ZVgxiURNJJti9KpdQVYWM9rad2TCQzVB9tnGVPVw2Rt2Kudi9fCr9MysDKCdBcgecTyr8oSCGee",
  "key5": "3SxpGr8ju8Xcs6j7AzUDDAbqeXUb2ws4vpCtgvLbXf2vBG7CW9wwx5MXJeaka1YfkEnDEzoP6L2ZHM8HXZp17C2w",
  "key6": "4XazKuxDoSe3dvLRYeFkzgjrh9s8QanNqVusygKactv7oCSZRA9AusEoDkeLKnqg6ZFemH23VrKrey4zPacM1nWX",
  "key7": "4FzVMNaAeLgmyYPx7LBNjkn13NVzvAEBfHSmQiRPbNg9VPtAyJKavHxFqBuyuyB99fDb4SLoZQAthydSmXBYM12q",
  "key8": "2cvqDDHauWySTmaqfw2zCxr6dHixsRZ14Gq3urEmpWrTyhhD8zf5vga961jNUV36Te1nrwPHbYJCzRASZfL1knzh",
  "key9": "2amTJSBDnGUqt2mVvAFiAnEtzEShXCpX1iHmz7yatAfg7AMk5pCihNsbTk3pbQhb9LdAcpL8qbnj5sm1ZE5mHZA9",
  "key10": "3tL75srLgVxBXmrEt5cKSoR5fDbHMkDkPK7payGiyUDptXWcEuNRmwmwhpxvKDEd83yZCDSNbvbdfsrnB3sb14uE",
  "key11": "4tjgpNwJtnU8UWYHwFBYGH7nC6AiEazKSWTm4NHshXVDMwqdh9zMKzp1zf2eUUNa7nfUhiAXZc2t6vpvvhW9joGP",
  "key12": "4NL1ktgc5JMhjFGqkP6rBC3fkX5Ttz57BrvpTuvWKR4AxtV4WULntk9S12iU3TwGG34Snqk22oot9wZKwHoihpuw",
  "key13": "3XYhzMGLFLpfXWsoqkD7rBoV8KmTJ2dPucVUopyVFFQHpL5pGZxooyUGC4Uhvb4DJA7WB38CapmdsN8nimMgZKEF",
  "key14": "tH9bud7qatJLHaM8XgiHyww88dShUHhkMH89n71PzHM2HAuY9juT2mVUmX6nigudmC4DPiNekCUdXpvPxkZMXHJ",
  "key15": "437me979NA6GQCozpvdX8AgYmbXSbLNNFFYgjZPk1WHbcCNVgPF5LEX6J9KX4CgrVDQabJnYuw8w67u3X1VMsYB5",
  "key16": "SjLC5sMpTJgb3JsbpAqcCMEVCTgzV3kP9qGPDhQJKpuzimm2TiP28ir458GMUtR4Wrahua1RtwpTNqKrxHnwiAa",
  "key17": "5QMGNHfRccoGLNvFCg5M4F8cAVQ8NsB45qAtSTYpozxUrb3ET2FKTDv3W6Hf7GxE2ZP5zxU77cQR2PEMNL6TUAvt",
  "key18": "2iDVwNf2Ps4ZZ7SZK8XnhKMhGYKYGb7UdQABcvh6TXpfYKhrDZo2rMZtzJEJpG81dCorqb427gE9TGxZsxsEAsp",
  "key19": "2wygtT1PG81SMW3gN1WGBNZ9PrWrHJqR8hDeypTA5eStgtuAvitWMDC6FzMarwv3SBX5Wf7cMhYw2PkTFfE8q65E",
  "key20": "2KrHJfgJEzPZXVwYNrUCcxhWyrdGoJGvjQJvXmx2hEqbxWHAXUay3mXdPG5vtrsfYGeuv8kFKwDz3WJrHrfH5VnA",
  "key21": "2KLdawvyccyY6Ymawr3qqgqurSx2rQEj7ZokwMfxtdNAmvBj7GgbTbu8AeW2ww8u1hJ9LfGJyxkD8bzN9SqoVw2D",
  "key22": "5AornYd319ndHQChHodzfdASbBLfc6MujHJL1Um6PAXY6qBCe7mhyrKqFddwNS22JhA4vDnR8Y5hcQBtcc37jUm9",
  "key23": "zcfU9WVy6tbBKezHtCy2vt7xDgSFhp6Ta1wW53RijuUxuKsj3B74MLSAi3xMJ2YSFgFzF7qZ7sTrFLRbr9E8KPJ",
  "key24": "23VTeec9RNFRKcDhwmytgURomP7QkpoZStv6u6tVT7DTMAxsaduPYXJxC3ciHHddm84QHS6CPT5pccxMBJFn5W55",
  "key25": "5spKLbC2CToqFZUMiqVeUXjU269HgdkB5XBV3Eh7RoAUs6tai3wp7b1WUdNQPTPhsgctR282GUUGtqnsqgmRR367",
  "key26": "4VS6ettzDMmgDkT6hTvcXXkPsZWHHjfL6m9ab9MuH5LZtHbHVkVMXTyYNLGiteoC1jM56xQoPNaNx7oH5ToYoWUq",
  "key27": "3NcTA2AVwWhA5Jnni2Vrn6nnkWDqu83srKSqmmFhFDN6URMk2TTCBhHXULQNUCxEP17HzLJVmpz1XVR7XZnQcSAr",
  "key28": "67DPukN4ysP8wAa1hJcaBcqZtMVuWhD8kXKXmDGD9S9JpRhxib38mDsmSu5veNkHkveA5BcBL7xgw98KsF4eGPig"
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
