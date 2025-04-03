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
    "4ccU6JivPfAVRkfE6ffdAcqDWZS1bNvmNz97JDzyRCeCtyqPRf1zYAudr44BA13wBzmXvFr7cmSniPH8EnKZmk5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NmQ7bW6MZ5ysYYBUNTfcZTQUThwdBcPShFvwEyvpBcmZjzMzp9MfPGqNy37kgvZzwSaqueXCD1tKBfeGTE4MNmg",
  "key1": "5maMttyTFZRU6TeHWu6pk987RzTULNwJmR6tnuDsFmmvVMjYUFujF8jFhZBiFLFwTVzXMqZqEtYmXmhSJpdb4bGW",
  "key2": "hFAtprAyYbde1tmt2QdFY3MGbRKoWJyWDyt2crqnxvZVQCa5yAz5BfoHcP2iZKnYuWPPozK1M3Qe79QTAzrUdZG",
  "key3": "34fBQ1M9QCNoK76UQxZtG1rNDqUHTciMWMvK9Rt47fC8sNdVzRuGH4Agq6VokARKBBbcPTJ7QDMh5WcrjonyTkw4",
  "key4": "3E6zhBXCunoZfj7h2jGc5J7vqktEAAF1h4F7Q2xgaBNehdKorYyAPkW8rdiMnL4YXAj6bL2EXFPo2mi6Pc33284c",
  "key5": "5tL4NNYTpHmRiZR8esrKuYYwnYiGne3fcGyknb7ozmtqwZxZo6PyYWnkHcuvrGp6mkQvqNz1EZiqy8RMiD3MK2E9",
  "key6": "2yt9VPVtFjRpK3rdTFsEqswE4QJffg67cXr6h6yQa2QR3Zvr47TkmyVLRP58pBvXmimnKZSwRN16x1oNwVyXS3at",
  "key7": "u3VByDf4gyefYpLkeEAFpEmxBsYjen7tp13hs61tii98oUFUyhLd2Ft3vyVeL8qHFjCkEtoBmeq8FtKVEfkEEFo",
  "key8": "2zGY6AfgS2cs2KouViQbbDTSzkyPuf2FvmgnkVRnEHgX6Uoyf67Sbvc5Nd9uRAFggDTSDddQC3W9CndgGroP1Gr",
  "key9": "4CitLknEENzbThJfzkWnngbQzvY6FUPWLatice6dEJw7VTUwTebRw7nekNm5THDPB2etHQ9c1DqdJLUG5SpU4FuP",
  "key10": "3SWBdu1D4Y1FiD4PKuyZfVdiCoo7Xsm24oLmqQZg4Yz5vMMbLXaZuxtKGJk3g9iLpdQqfPCsUkwERpuYTDuuGppp",
  "key11": "2bKEe3vQSbiAzepQAgDUi1kiBA9vgRWvsCSUsCCzjnapmWngvYD2Ep1hyvDzikShXPggRcAW5qYEBm3cxyYXSuok",
  "key12": "eY4TVTdmKvfX4VPMBewCcq65C8jHPwbidcTEekrMk8wvUsvTCPehqFUcxE44qaLzLc4hZFnsHKeedvCkUtMPstk",
  "key13": "36k7PSJbe15A24ANwczxujTf73oFasLYdKoJ14cGkU8kzGUnAMhBmjtAJDnWkmuPLbte9ekBdY1ivJDKTJ1bdZe4",
  "key14": "4Hy8cCURoJyzGVH1q4niYtcnMiXha2At7nY3Tx6SE7j5rMzb8AS16rPW2X5egRRcZiGbSdvC4NkZmoEBPUe2T37Z",
  "key15": "5h4Nbo6qCe2uedoSqtTrk4VqmWqYhXvDPCBRk7fpuhSATX5rSyXcxLr1uJFfXscbKBUNf1rkgVMhBF1SmjXsdVSP",
  "key16": "4Wi6J9hYAsmwgSnX4DzULqBH3i3YMwbt6FAnokg4VaudBeD5Kc1up6czpbCDpaU3n2QcNV3QTg3CWzNVSujJuX2V",
  "key17": "4X4zUBLFNCNS5i5nSgdGWF83VZTUr96Mrt6f9oPbjaJWDUFwgGvDfYaQoyTbR7HpzHx6xy1FDjCjY62X6eC3bSPQ",
  "key18": "3cMoUPdbU6LRBw2tk38oMSxXaRiz2dhxoi4tLUsWG1jXRqzFTKucxT2EEbavkeJWS6n3qdZkrqZFGLrmK8KzJ1nV",
  "key19": "5MBvUbWtmk1JKCU9nTS4QbQJP1xnXSRtekzACh4SBgw92bAvSi8qDMbnfJMxsUkwQzucJfajGymDVQE3TuJMVgX7",
  "key20": "6329yyUQvrbpLcSGf58jnrXhbYaJmoBnaFvQoSGuVcCuShrLDWmKoBJLqdBqNW4FhpTCFYEFrUShqiwcfA5m62hJ",
  "key21": "nDyn3ctwGyKrbCXV3jDH9F7Yscue1pG3EkQ96yPuCYpDFx95Yi5a8McBHGNViGjmn7an8jaFutXboWN6C93YMt6",
  "key22": "4oMsdCYfNrx6aSEn1Er6kBpur9NHprTQVZvGwbvtL7wLivPNtfQwR78bCLuLwEAKtuKZ4Pfhan39YV8FiXUVqFnx",
  "key23": "32mGU4eGeWuCvcWS2qytvh5WeGgLBCQNSdAKkBMs3TzBK34aLBrE1u5i5F5q6wzN6rD2oGdUCgc89tcJx7sEdv2n",
  "key24": "5AywFDY8n3kkhTq2atViB9htmNz8Rv787bHJykHZJUMMzEWx8jA4G8rsRQdqi5u6uA2vgxUTJHtwudKJ1Q3D5wxC",
  "key25": "2Budu5f1XTLuGsJa5vmTwam5zL4m8CdiimJjpRdtA2xZVgsFfVj23sdrnQykFigkgJdzmEz7c74CBqMV9uEeWkWV",
  "key26": "2HMQgSgxeSNTDWJmLgrjKCky1DeUJJvSvhXHG4c7Zy6TYj7P51n7TtE9KdsGvVp8iSDHnNDaRf5gaz7wGVNCUxrX",
  "key27": "4V9rjymoMuGGeJCzh1nvGXSc93eW8cjdSBvsuaNURi4oGVSaDnFKkHhUmRia3KjgvaAJ1XvhcDByeceBpd55PYDW"
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
