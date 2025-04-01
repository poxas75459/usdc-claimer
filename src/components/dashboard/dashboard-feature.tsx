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
    "5ucDr6y1Qkqba3RiDwvHqNzwFzSojDSVLDhwrEvQVUnXsvimgQEYiXcRXCQjQW2Wgr2JoyWzbkL7LdYh4GoapCDb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ctxYeG3fgxW5sE3Qrsd7dR4cXsYvgy7q5iUC7bzAAuqBEDurjeAk6NC9UNwL76SobLPyiRG4ndMfJkPHjmLf9HW",
  "key1": "HmSaB46dggWGCwH1yf45jLE8pw46H7nujsEj6L4xpNpFey7X7Y1VLKbpJJ8AwsLkkgPWsf2GoUjRw4W1FcevUZi",
  "key2": "3UbWjMq5Wv5KHmovSmPUYUpd1DGDvfKyyYi38RqeGKhZEWHimJmK4w9E4a8cCfr9qiYiEn5w5kmpiM5qgQb69mHU",
  "key3": "4kmVHBzr7zS8dcW77roAHnrtiHgiPDEmjXrRJq8AKhWXVBZwY7qjNsjiUW2esvddUZo9CYrrUAu12QvTqpYEj72G",
  "key4": "5yAqSUwkqGQ7H6xtn32BNvsp1VekPJaRoFdqMZFPzL8MkPqqeUUnz92HhyMigFsyyfHV8VKdCvaoLq2ejyyucRv8",
  "key5": "3L8ARrYQXneqDUjx6fU7tRpf8fGFmhk4EtkqR2w3BkbzKXx1myJ5ymmDBeJvwoC77zghJTD2oejorz98egSWB5dm",
  "key6": "3SbatyMjfsgvgnSvyaQAHPxQxKB8DFWJXWUrYb8xmdpack8XqJr9C43b4Qz5Pp6z5eFXHYeNdpEGDMsh16HKXRoe",
  "key7": "3nezkobSdGrYZNESfYJbNtBm4VsYjq6KBYDTn2h3Duwxkom9s8WBiJHZKKwTEYZrrDyiWPu6nQSki7VJwoyVwa2Y",
  "key8": "4tXzNpFBwWSYbXPDo8hQpsZBJ2GRVacYca75Ax3NDahfwioV5D2CNtzQk7ahJX93o5vt8FomNZv6GN7VZ1Ej2LHd",
  "key9": "5T5yRBTvT1qnGugVnoRYLnqHoEWTGPJ8oStstDhcQBPLYmBqw9ZpFo5rfTtSJj4pgnB146F8PM4DKoVnfQmzfD1f",
  "key10": "5npY7gx1a9R5RDk3QL2NUEs2CH4dTJnwp638j1wb3LLc6ho2BRkU44Sz88WV2nEZcUQ7NzrCavMc2YxQgYw3aqdY",
  "key11": "38EQorSpzxahWeefeeHYNTfYwUHPiomFsngBcPhziJan5vEG69TuRrPaAo6UZ69GLWDY1iQFCbi37VXf86EWBXYr",
  "key12": "3DvYc3eGV2HXWXjmpxGPrgTnq1cV8WQsQcovEDuy3xx41STb31jpjNU2KPCDyETFod1MyLzxW8iWELMciHvJDEgR",
  "key13": "3DW75jrgT3JQdpmcnYFMhwsJBybSvxwBV8X51ofG9n2kBzfg6DRMcN9bMm6DdTryAarCT6MDS7eVJ4homyZFDQFp",
  "key14": "4hKkZChMETBWA3HyXARMyNzPwDdqrK7nZexxi1ByDojgua17wZT1rMBWECxQuPxHwAA2tkun7QSSw4aBMNVsS5J2",
  "key15": "2yAzSgqEsYQQhi1X2JcnjkwUiEiK6Neje5nXchhFGvFnAEx4VddPLCHWtei86dXjgshBuAv5x7crszbn215uN8Jr",
  "key16": "2ifzBNd8fyyXvqUKpPveh6PHh5xyfwiJahDsWYHNv4LTimpCXJWmdSo6ecUcY7Je6sfLWzLuLRpofbamSa2UzRWo",
  "key17": "4WSdqWT1MGNKw8XweA6iCjyAmQr5crQgrcarDsTTufzfpGPHH1bdB69CmgMpr65yYR9izBx9N8H1aVQHnaKVfgGJ",
  "key18": "62v9wWWaQZfPmpoBHaETTgEAetXWh97gjQWjbJzwqyRs4s14CE5GrZNfEmNACWvQLGLZ1KgWYEbujo52QJpgBw6x",
  "key19": "4XvYywYtfmPeCSTJQdJ5hzVULJyzhVepMZCcQ7WHcT9AAEuSXHyzAAA6oUc7sm18qtDn5ySfAjNPz4rn9rFMoqWp",
  "key20": "42mrb8oCrfCtuqQprxhuvfAJWL668YaUPetTxLSrLoJeEWswN1i6wCrX2JN9zLqmwbRUE1VRjpAUGHgG6vWedLfp",
  "key21": "3QixeB68ztZJhMspUCY4eevaE8ja9FrkyEQwrhGRVaKA544gtUQYpF5TDadWYQ5N7Pmua3E4RYEcYY7h8s341sT7",
  "key22": "3cgHBA4pPDYhszWU24btE2xh84nofqGYAxHKu6irGvxGdPnPRWu9uxDxeJnrxNAqEEdx3spQNT8ThRnKfA4w67mC",
  "key23": "26kJ1ssyxKi2xGYNXQXisYRrHp3pC4WufvEctV3s5uxRToyoFgpPqyYviD2ebCRF2PJSZkKs3FQAyfJegNWqLiNn",
  "key24": "4Gbmn2KxS71epe2J6mx6gVCAw8WAZ1Kv2f7GveLHDZn6AFnuQhCuJH3r4wdraNKH3f5Hx9SQ7XCpoRB4as23fgf5",
  "key25": "EV4v2jnxBQdeDLdL6HR8AguNnnoY8kSZsccs8yzYrGvdARXoPZ5WhPwL71NvZJoMwgM81YoJioQvR5YGYAxBSvj",
  "key26": "3dFWSfAjBFfbw7f9R3gV7wUZGUH5g5UuYVXypff6ZfpBeo1XwVqMBuyEoyDtS5qraorV1JzXLQGg3WUnQAV3oxeX",
  "key27": "kRG9bafHDchvRKxSBy2NAQ9SDHiFUJ5wPMkRqcf836YWT8Su6QDm6ur4GUQ9Kv7sW3cVL1pWpb8NiofeZUgYYFj",
  "key28": "5jW7hz1CJQxNeZgSG4rK17zXv8JkZTkucAj3U8au2X3oHML5gLKXgkfcfpA5Dc72DaMK98YxRqRa2ppAsPTaWoKY",
  "key29": "d1inR2dDu6b5j5VwhZZcU5aHC5S3zuijgDwZvPVCM6reZuob1XVGwALgeCrG1NFqpNXHMCS2ZXb3qBJXiX2h2AC",
  "key30": "4w49yoeqveaCLzP81iHhSJ8h4b39XXbtmn8WjZzqY4Vf7efGuZRyeoiBZvxyqrrUoLqn9EkHMwbTFD1qYaK6yyU5",
  "key31": "5kNSDdXLP4BoJQdC8hoUG37K5gcXGv9t9Ceirpn9DGRnCPaNfnzkCUBPaN4y64ChEdkrE2g83qHorhvNtCe16cJa",
  "key32": "4CZjATqVexdWdEpALA7hakYf5mhMaQzpboiv5zQK5YrxmDjweUqx1mekjn95v6QdK3YUmKSMu7Spsu8XVHyWxkVG"
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
