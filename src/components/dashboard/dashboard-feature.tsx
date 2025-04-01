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
    "4CCt2ddYTHaYdapy8DXBkYEiyabfT3A4XTX61qMnuKF7QeWZHEVj2Jbi6KozUfc9c6YWTzf2FS4Sc4fpEFZZmDYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HPBSpBZUdbbPraRfWXPLbRYAYgUSH3bDTSdmDvsVyiazUY2PDyzmGNBXMbMHWVEpyUwoY9eoJGVFirfVqY8GVDG",
  "key1": "2pdT1zhXWwahZkWywLutud2HBJYwXjBq5Yg9RmyrJEcTQ3BL33Xm1sBaPfnUJxFm91ZtLUGi3eLxfF4bCfF2zJLg",
  "key2": "5USCrZ1QixMo78wbd9wwX85qypbVzjuyvYRHDRi7dp3jM9bgdHVL1gHuofPpKHzofkqx48WGs56ERSo5d6y6eCe2",
  "key3": "4Emf4smXDqAoitvowKDt5jbLMx281QTvxmcyJGhNFrYstUHcQmeFudXvdsJjN3e9HTZS8Vgt5DUthxMF9gmSqj9s",
  "key4": "1nA5pt68mcDBAaaWdjXrg6WbJqxR8HmJqTbX1yJ9kdXqHB8cKES1ps3rGFZPovLPBUQ9nvwZYg8WtWaEW4EiGeT",
  "key5": "48BhpdLSAFnx8vJCrPRFagM65n5YjJNPuu42nYY6V15F2wcbrjUiSsAUsprhHMJJZWmpzbPx4BX7MeLv6ki9nmDc",
  "key6": "aTVf1hVLa8uVy63EjYopAYpZq8tnyUykV43cxHdkMXDXauBmAbiEph3bh4xC1tA6EuuimDy1C4RS3eeKyBFeuPB",
  "key7": "3CpomKVE9Ms2oUzBw6sy4ab9NqzzPxaJZyzZwdtnawf7kKB2J1WYFFctY4rRoakUjhG6bQn9APHrDicFrmAf3tSK",
  "key8": "5jtxaFYYzXpZ23tLPHF6jU84C5cZP1a6N7kGfZQ5yyeXsVMfcwy9rdCot5tiug18QLS2buswSuywYnfkrTeFK3Lt",
  "key9": "666ouvMyi8LfVhRbGKRBGbTKc8nKfpZzEghwYpFnaWVJn2f7eaz3vQNRDmZbYFUxWjue4DvG2ybHHFooShhxbNDf",
  "key10": "5Y1FLRSqi62nHaqCjtffBUXJHm9nmWUKzacRNbUJH1ontrGVBcp79TKUdK4AEARLSgJ27HJEtP2PRnfRBpCcR3vF",
  "key11": "3SzXW1NQiqpJcbQLqLgTRFwcHjktiKXdieC5SKW7USNBDMf6nKjhdYLjwCWAGhywimRESFNHyGJmnpT4fpAC64V4",
  "key12": "3NvVfFEGMMiNKc1sKAk4bynVFheBkLyYRxjeAKPMZrTe4dMxda7wLjmJEfzBgQEeicNcMSQXZjvZa1SHzgjvc5gd",
  "key13": "3Mu9w7ahVffZ2KvDWdpnh4aK2t6de6CzDnXcf9TC6onnW8xCEDbcQKNyvcjuScPXmKCdh1wiHvFiYX723BkWhqbq",
  "key14": "4N24SidP725VajNgFa3iCqfSXoKZ55fUfYJmcJ83hru4o1rNszorsDrc9UFuXv15NWBpGEHdHXuZfcPzyqpU5Njp",
  "key15": "2XmWVeDinojpUXFFYfgbcVPQfrHxqvgXqjrPAypH9vyKYMAkCQqEcEszu4jvyvzSkq7c5FjpMEMDamJ8JTRPMVJi",
  "key16": "63UGSzDrHyrj4dPvK5EnkTaWnS3hyszpBgDkeNgojHsVmkBWT5KTtmwyFX4UPzsFChyVrRWo37bumPxv9SuZqubE",
  "key17": "2kaZWTLFgYn7bf2Q1fi1eRfprzxtesQLWqiieg3AwwuywWVKMEPVsthSAcT3gq5ybB2W9mMVKzK1PsXxw1pqNGrb",
  "key18": "48pqTvcYUgtsEHExML2BbBtGZn6NC3WAHhiZ8cXZ3sKzbkYVfg7py2qxwra8db1WNSjJwP6NvW5GgudrvUxYHecD",
  "key19": "CJAGmGEiAAyDkGtfabjMv3qcCY9f4LXeBbuitZpaujPCdzDpVKd74kCbuFMrDpdQKndY7gdupurYAsfq6hspJqJ",
  "key20": "2bd96sL76NfTRnf3KWQNjn3uzrsZxfM76TqgbsFnEsJDHxA28DEkUTTUMwqu3LHQwVqrG8aEdgLgqLtwipwEqqZs",
  "key21": "2VfeZFZe2dttH8n2DNvUHCvUjUxjRUxAjxVTf7eLk1RsZxgjMNBaQRkrzqgisfusAZSZ8sHaay8JtKKRAzxrBpDM",
  "key22": "613T9oCpcZ2f9zMzWtSDrq9CDrTZuMWZ1YatdB5Rm9VKBdLbqtMmoJAKKSzTyc5fpAPgoQXQKHvXgiA8TmJrSjdX",
  "key23": "4iggrQgYP1oaNCV7sHpkVfaHnGivYJKQu5zciasQqg3qVdVhAKCQ7yACase3VacmYAenw3x7bt2vjxpSiwqzyDbk",
  "key24": "4KSVsF23ThYXpC6Z9iHU22BxsbxfSxB1KQy1eAvWQxpz4Wzm4qk9wgU4AxXJt3TG4bYtj2E9RAkPdxqoxxiYyeqT",
  "key25": "26N2JduPjDQzNqsbqKz7p2PL94ur73DJ6EzcaeNZfFpD17ZsbwHJrpK9Df6FGLsTH8iH39x2EFUeD8ycQhojYLBP",
  "key26": "4Z79b8r84Evq5A2vPdBtncXvg9Dg6sYt4bdNmA6Gvmjt4RigXnQa7rhUMHun5LbkbudGHcRxtWwDcuV1LXLF4zJs",
  "key27": "4XxWowADW7zpexqsxAyRS6Qzt9MpGXNU2eDuYSc9YLJcSVkmcVri3VVqw3V9PsoH3NQJK8FXMVKumijgo5FXsjv",
  "key28": "2CqSwcgATj8dcj77qRo8Rpjahit6Ss8EqJrwTtpBYCja34FhbhWGNUDynXqMRTcooqFv3rSnkH55st31AwfGVhmg",
  "key29": "4F8LmNeFScMKjEHtHAvWHhVSQ95FgBXL5Ji4nuaE4BXtZXoc9jnM1z6dZveTeatQpJAEzfB1TRAeKn8qbf5AnFh2",
  "key30": "Q5CZonTuyNeFkTKfMm9NzzNJ72RSwWf3g9hspzdqJRXXmvabcT7xocgj3qzfJCtgTraGhLxFGUk5dx7JL4EY9wX",
  "key31": "2ALEdLcfVotU92CJMJfq8ijiSXzDuQqyeMYEr6E4arJjeW7w4wNCzeFGpAHxxBayiVE8Et7ebSihM8iPUszBB4Hy",
  "key32": "oPqC88M45ZQV9w22GmSu9Hewp8mFk74mFebvtPCzxv9nwNPoaBcm6FxUExbnkQ9f9Zb3L3tb48U29RCwsB1h47C",
  "key33": "Rn8paooHik4wJCPw8XW5C8T2bXHENTDUP6HmKeqtnHdqKfpKFQTixuFC615aixACDghqqcxGdsf71nVhpjRGLJB",
  "key34": "2HSk5LLgDMGv6MPYgkKPgB5t1RkXJVnGM9c8VViuUvBhUYzscHtVJzW5HGhDj91r1Acy4ZQGjc6PZCPujmmWX3yM",
  "key35": "5h8r6h4gK7pNgkF5QpbMLyihkzXRbGpjkiGjadXVMsYa5BHxuLdQjA6Fw4uKLBNr8FnitjSo2zuyXghfCpywy9QT",
  "key36": "4nrwLdX1ct2nJqNVBEUfFiAtWTiHcbH5yDjDGd3Dzftp37ojKzRi1ihuVUm1QrRaxsfz4DWDT8pRfhogsRmHKGSq",
  "key37": "3BjAAupfgWP15PjeW6sNYWaLSZoMtCaXE8iKSPcYLDYkWiUgRxCqcthsmQdiC9upmD3thFgNGz3tnJNmsBKwUzzv",
  "key38": "422CcRCK1DjMAYgAou8B7rzfc5hPzmFu8tbvhgFAt7mNXNNdYAHdpD1s6Tjh8CZy7P9fj32fxma1Uu5hJxqXb8Xi",
  "key39": "5jHzvnruvjQCQCJNHUJ27Q7riYHJGF9QPQjix9P7rgY2PmBR1QS5ru8h89aCZgzutQiEUkcYRNdK7kyeetXK4cud",
  "key40": "43etzyf568rRwgVXcST4nkci6hgYwG5nQYBTmwyJnwTCJs8QUBAw2Htjf4hmnjPNcxMQstbrAfPNk8WutBUnqLE5",
  "key41": "auJ9fSVsX5cnr2GQg5gGKSbrJaFCGvb4qwKsYeDEqMdMPAa8YUQn2J7NurjSmfHKTLiaQP19p4Xu4kQCCm4TDAz",
  "key42": "58aLKupHSEXbs29zP9TdmWPvkX17wcg5M4CjosZLhB2g23wnxHLn8ucA7Hg8RZ5JuAv7Ks4KHwmtxQPfKuc28aDK",
  "key43": "47muvarWDEa7ehvK4S6Rxo6cTpTnD7VXnmBZhNUupPKXaiXDwS7vxXrR9PgNnbdq7ay9yJnBf95v7x4UiDNyN43R",
  "key44": "51HC74SvDLKedVLyh89HajpYstbo3h9hZsfj1ongNFUn6GhXPy5PYkUsztY4T9aDLBBYjPWD2nnkbBNMNip3BFgi",
  "key45": "pEcndpjKgyFRi3BHhVXGCAYxikGKh5vnbhobg9m7geXutzRXCJrr7YWxAQLBdRn93hXfCC9rwqgebNz1ZKCPW68"
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
