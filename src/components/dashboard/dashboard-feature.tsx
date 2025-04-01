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
    "2bHFentXkFNMMzBHFT5GtCeQqujo1WyLJVXtTmpLH8DRUtrShFTQ2oNpaF7CHLwyUuuDPWVynfN8xvBsopvHUJke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H8uJubEJ2HENF8i5pbiA7q5Nzyyi659fR49m7qy3KqkEnZzwVRxWFEDPwgg5oUHqAVKnAcENheHM6CEKJ3Wan3p",
  "key1": "4VxbnTqeebN2jdS2Z379Ft77akVDemWxExfkCkkqyKnsTKuvQWGPJRekxN5fJKmuNadYCfwrU2xZTi5BjeKThQw6",
  "key2": "4uBKBW41eBBdPt7zG7uL9JJMVS2U7DhRhUkBiAcbdXspiPipRh6vSUkqx3gAYfVwyMWqMdtGsvUiavQk4SGRpLY5",
  "key3": "4FYpEjyukMAfe5PtfNcwtM2u9gD7DGEroebX47T5yg3drJFMzvDUisVcYHNX4rkZpu5fVAn2eMuSW3rKNmNq5hQg",
  "key4": "5Y3HDdEwV4xUJWA6m2UzHNWqfENEMTFtgAhCcqaoW7v7j75QW78rML4kdyVyrqafVfZJaKHLirbunPUCAEGkAKB2",
  "key5": "3NjKofuZ8zo8LybGgxcjP6rUNRoCmmEziL9876NYdFvBYfYbeC6qzKFhvsatncdiGN8ZBUVPvT15QNh1P2iiQRdj",
  "key6": "5XY1jZAnTfb5LXePVd37iayftfVrpf4WwQg1hwfUjSfotDFf88hu6W8VoYZCo61go65XY2znvaygWafYdese3SLU",
  "key7": "48RqNFHaZ2MragRcTqyH4tUV6KW9qYiKCDwnUuQAJdQQcLKLu8aobNVQy6GcRPNFRb8hoKcchKfMkCkZ2XFhnbK5",
  "key8": "EbQmfLSqiW4jsBpTqRPnAMkRVVFXsskT4JMNQephbtLKeYF81zurbLM585DYdrRFr8nb7bVk1dnjc8ychDecowv",
  "key9": "5Jt3SRXyeS7XjDtibQzMBKHhHpa2ciqkD2k1aSnPi4u49gu78arpeoX1Br8cLCiiDNZCbgfp588acJAbSzQHrrAz",
  "key10": "3v4DRqGp2h61M4QWfxFpKCxaNpc7LkuVRUZ2fXzXs9wu1BhrZBZ1SG771jD8reBpQ7aRvY4pmF9nNSpU7HMauNNY",
  "key11": "5Lo9unXWFkwdVCD9E1wz3G9rfSj1P2PASHVdoUETV9c3HmAzY2P5mcKzyd2qnzenCKbpcLtaC3jkQohgno2vvGQm",
  "key12": "59hc1XqHnPK4kZvqEnkKkJsCZsXfsfpf1CYKUiAjUAVfHnNgPev58QAKXeHreskNbCod99fEqq3HDY2sHLAm91SP",
  "key13": "4fHVfjaH1WJBmAPjUgoD3CG5tX8grgX7C7EMiQLGc5G44paqVf6yBxatVmiTnPYdNf4eRtqrmcvfner1fsAVud5w",
  "key14": "5SiSCBNai6LHKnJZwCPebqvEWL25rRNCh6FQ8iKUnqHHEWRYLZYKFjTn4Q1RZt6A6qNJFs8FK9xGNwzqD67fM1yL",
  "key15": "5oYN8v9J8WozXnM8FZiiZK2SsUgjNcENdKBv5RRTHPYeuj6LkaxStCJUZUQnhQcLv5kPiFzYnAURpmviN3teKq6q",
  "key16": "2TEbH14oLbYUTyVhCJvMGqNrxxZExRh8Mcu7FCJcp4SQNcqX7kLZ6YvY85AQhnqixkbTxqguQtBjh48PCrYgtJEK",
  "key17": "nEoaCosDY19V6ta9axPLVKzx26XQUDmBZJ3dakNCWEhuwZpvoJvHoBFC2uwenRR7RZcqLwTtCa9Vpi6uTLsBaZG",
  "key18": "3J2pddzXxSzfpSntencbbTertGHpwqSggJw6ohjxUbdMw4GPsoKBSee8Mz6ZXUHuvAb7AiHYYQ17n7CRJZGzHifC",
  "key19": "KE6fNmgGk3S9V42M5bFzpEhMm3eKUHwvDA6ACCzgamLntH6ys8Xh1EQmUbADDn4nZ8YtWpVdzmHD1YnTFuMxUSg",
  "key20": "4bTx4G3UA3MPiADcLDCw5AYZd81TVrYBuvGkUpzeXGA2uoPSwPAJEn6vT1tDMCShTTQT3RK1wZkMWQYHookuE131",
  "key21": "28yCVdbm9G6Z6N91dGLg9aS4oeMpBT9aBaMwsshMad4HRJgeQcjjx19cjSKP1rEwMTW9f3TkV6ZT4dc7wnv9hjE1",
  "key22": "5w1hf5cV2J7aPaTRmHBUn5wPAsMdg6zmD6ALjtyJrASUzDnzrjJhSp3gCmgSVRSgvndSJWwuXAnXC9dWqYnJnsj5",
  "key23": "4H3Js8arEWEgdJQK1GrPaKG6JmEtzqebkQUfrtYVt8oGpRUWJQAMBX1LvGpgMzcMb2EA4S1EMg8ySTBLNADkd6zP",
  "key24": "2tYmSbgoo7w6Ky33ryJXaQN8hpSj4XoNeQ5nXM6z3bzBoBxZ7Z5NDRWFD4e4LQd3v837V7Hvgw5ASDd7waVDXxVv",
  "key25": "4MedGNExtpzENW7cevFGKdq4AqoF21is2fe83VEuzkJ5Pw8QEdDXL6uxxcDxwBfVbTYsYMfuvXkjqX7T5CVssuzN",
  "key26": "59DrfXpURpTY15G4PaRDaD91WyGhy2Sj52c3WV3XtTBcDyXdqqfdmDDtDmdFjFossgZqwYNE6KN7GAcs1zA6hP4S",
  "key27": "5WHTvi5gDH4aAC5M4dVuk7trkzcQYH5F49Xm5APuw48AXrrvVGanmzu6sJDQ5oju5JLX2cJJJK15feTbLLh36W4T",
  "key28": "3qt9bmFfwLhSDdUsinnpY6zd3jytFBMqP3N3PBhBcZx5A4QissnsMGnujz35GsoJDn4A8iC7ajZpQccQWaJTYjPz",
  "key29": "5sU6EK638rvuBq6EaZqM4ZgednPKBbycaJ34xoBEu7gzQhhJpTrndDqDADKkhZbi94YdaCYwy53NBXyRhEp9noYs",
  "key30": "2WQovTEKgQxR9Hcx4hCXaBMqNGXHtTg8mUaEVDwoaKdag4G5d3Czk4Gh9SWbL2QDjFsczpcDTQBC8MKEZAjEoZVz",
  "key31": "jqx8hjLM79SVv9igFQaGPjS4VtCsZFwdAMPqqGLhtApttue5bdHspfViLfoKbcrxpvYd8YBhVkBLFamY7apsZCH",
  "key32": "4ewqKKdcA1F1JAJCJzDLhJZBicbG4Wy4RxgCSAHbJZREcE4YoLL18mePVq8CwKMEmKCE97J5qJSZUdQsJGzjhXVv",
  "key33": "3dxF7sSwW91b2RtBtYcc4sjvwEe5vNbu2Cqbr51o11taAwfqc9THNEivDXX6Rc5rtfZrbtcP6WBSh42chK9u2GK8",
  "key34": "3ALWQftsBhWvEKn2re343Cavdr6svQ3deUk94eHNBfJM2YLXdNe8afZLUvf4j4uCEKbQjXj922XjhxhM5rA9Jiad",
  "key35": "tRzfAoegtP8ALv1j3xTcrYhuF7D5hPv37DxLMSVHNik6hYvCLNoWayQPApstMiurtcJQQ4TKqMywULAn4dA42JE",
  "key36": "5v5WP6vhCBVqN1G77R9F52SYaE53HPi8xJRrgU8KJAthzv6KszF7Ui8ivk1naWvvy59WurWaozADFtUEMogKtH87"
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
