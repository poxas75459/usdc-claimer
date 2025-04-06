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
    "2SMUAP9s6geBoq31WcsHQ2S99CK6egMYg3cnQAMQAPpV91pEXxq8FuC5w1hzY21vzeqYEEZZaAn7ZxF36mHgKkmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vffiTJWrcEDYqF3qSZfgNsJyWoG69mdCrfN7kwf8hRqa9uiFS7JKK6RCotZSiirJgP7Keb5tF6MyE97GCemoJWA",
  "key1": "3qpP7jqvmUNXREW7wr93cXECfhMjARQJuiXKw6WLtiLnRKZY3aRhRaD8qYXtwYNNnRnt4MbymHTiJH5JpKwHALc",
  "key2": "CDiV447nUa7dYYbWzSr5r9Wv9vHbRkXQkrjS1fVmVLgn4wKQ1pKGULMR2JwrF58RSjh7qU1LBi4kXHe3RKwFmHt",
  "key3": "NiAdNJcNz54Bm6tVaW8p5pAxVLRwmR3hksM3q3kSgUVNT1jQUa1ak2JwEGYnoqMrULx2FDCMiPx3eEQQmZt7joD",
  "key4": "3Uxx9yrRuhvGcVncpHwqGGWRjLKGDpEC4iccRHUC1mRz7avL5m8icGWBw9wpBjGcJV625gjz7GyXXpDcq56Chku2",
  "key5": "4w8MevbmeXL37ygvaRAXjk6HkX3b5AY1iNu7Vz35y9SPbZc3cnAWHegtHme2jLui5jZ6WV6WMuKztLAqP7vaTFQ7",
  "key6": "3NMieCJh72FfAUCdNsFzmpE61bvpMoFvTAnwnbA2D42K86kZhmp5eCeXuzPB9R148N7TLWGuhHjs4UrXdtTd5kS3",
  "key7": "2qVcNLKGEjXe5oVEVHdCrsEy6W7HWF7aRZjKpLSaGELaJosihdGNyaSkRE7Qr2kdYQ2ajkAGof3aKxbWq5L6Fprf",
  "key8": "HF1s7kSSiuzYja5iNpP3hPyQzw5jbvtzehP6yXU6sk4EjBJ7fyNgNHtNPfdyqPeeBaycaVdNJPQxK8yrg5xqmH6",
  "key9": "LD5G5ASsBALYDLXSNZcJQ3KmW4k9225rK7tRZoPh8kjUUrPcmxkwGw6DeahPiJgzx2c9xQ6GW8SVRCtZqHbQxKC",
  "key10": "5B7Ps9WYYmrVsha6JkQREMmjiVS9pmAzMdmA51iETJBpM9gPVQkSZEJBc9prWGBaxEgyNEMqa1i8sBKQMTDq9c8P",
  "key11": "5VzijDQGxVvHRH4t1mJaC2SoCcyhHNpS6jQPs1FKaEyUAuCraRrGdw686tCADSHxaWSXJ4511oxVqn4NL3VUpajB",
  "key12": "5CE2yZrz5NvhnDd5e3Ku1aAnqxUdbbvuotLzhQnExf3Sx4jNmJVyE3ZR84rhEPv7vAjQdQcRHihRLAjZTj1uW8vL",
  "key13": "9NLGrS8RjWJZ4znZ3uuNEVhuEULKXx4424ridDsa1Qm26WQEPKRAxHsLjeK7mzmaXpkuTypVMFdkj9bPnnL39xu",
  "key14": "imcysNMXwkNksFcbJ6QHt9HobqZurVWbRz2hoLNdbVVWSfvmWajeZQds2xiQ278sUWUfheqdiy6yfHkrRqcgzYu",
  "key15": "2tQ6TNL3UXyygve7wYP2Mc91vZNEyDjj7m3JnVEB1irxWfNWgikBaPRuDuAPV7TsrafRvpVsHtFekCqwWyTubQF4",
  "key16": "25yDtGzLYcQBBd6e6DARoDQUoHgW2p1PQbEwu9TLUCdCGRVX9gmDoC8KnNN4wHYZHQDsrCWxqDNaakhvDcTeMEF3",
  "key17": "5jBhgbmipzjeK5Hn3sjhDADs6iJn3fWAWP1gKJ7EkzLdfNAU5af1JL4cbCpLNSarnxohBaF2uuqvnNKpwr9Z2jvM",
  "key18": "Jcr69sjrf22qoTyyGincfRMt2du1zZMRqMgD8doxhPVKjfarW5SjLpAwRMGSUF24UgX6WrSUQgVPbJPvwjCGzBs",
  "key19": "342zVqLmaQR8d2f62tUzctfS8jYcJMiskaZN8CjkPzPPJrLyK1aiwCfBmM6AuZG5t8nKf2Xk4jreSLafSG9PfjwY",
  "key20": "636gLd7m2NAxunZVJ5HPVi4oYgNga6XB3ymhgsK6i9BLxQ23x83gRb62FAZWFHxKX9uQynbVWJS6omuZGoqqGUVd",
  "key21": "64MaiANAXzLWhw8M8JW7vYuMEiXqw4RkKLcXYDkWmyCH4LQQg8peZXjmR8uhsj6Usgos8DnimcynihSepEQKDXJx",
  "key22": "3G6FrLxa9csBWD31N7K9Fc8oHqJjJ7nYD3TSTm76oMPbSzceFXrvVgzi8topg3SUugRGJymXevvEP1xM29JWu31E",
  "key23": "GGfT43xXD9LZsJomfnpyHDpzvrk19bK9LmqGtmg9GGaEFvP8FBCKEYxbkjKTLHHQ68eq8qPZkB1pdgCohhDW7rN",
  "key24": "5NdYPDkof4EyNCgaHFxiRjWkVRwuNkYJ1PQUpDWS4B7AWHe7HY6getuVs2qKho9WiioyxpAn6wJvG7iC6cuN2MGf",
  "key25": "b8bPmfpdU1ghLRzfvasGVrCfTYeK8hk5fvYcoCiuJ3qjDcffVCTXP1Lnkwo8oLe1YvEW5TFonh2YTY8QV6BX4DJ",
  "key26": "3J3t5pGMW7J89YW44zYcmdHgbvigMuZUejXAxbaStEeDVW9F5SPULFJWU2W56XvxPNPhMKqMAqr8XoXPtC5a73dM",
  "key27": "4p2LjY6gJuaBz48yKL7WjsrqBQ5DhudPWfdRMnKN3LjbXHSCGJnTKg22Wuf8jGPj5j28o6TyULUFZP8tp9tv8W6W",
  "key28": "Bo5BT9ZPz2ZDYFuWYLpQ9F1ttXiTThUsTogPSQsgHWcx3VC8jaXeAMtEzVcwycBS7U3nWVCYTbYRn7ddkoYJxwU",
  "key29": "5Cuib96aFBL35KxF6w3wUkGkzJ9hKgZ6NeG9kYSqnKAhh8datuMyMwGNSAGbicC2gbrMtPAmbKpM6ukYGynncx1h",
  "key30": "5xHagqWwYApxqzAEJCn26zYS1cRHdTJMhAmF1y7F5HhpCiq5zFiuYpAWv7124oAnha6n1zv87aP83CPEuVGvEJNx",
  "key31": "aUbeX2Fvvz2n3yRxJQjKR9Kc7ieDQ9bMHzy7tNSUgKiw7oUeZ94sRFrgBNPnWoiGPmytT8QXKE8oig1f433apab",
  "key32": "jhZCQ4D9uWHh9HZ5CG3oPqENDJXgHMzFWTD4r7EjRKstcqDmAecqR1k3fLjBG1d6hGYdJa2M2Bna7xRiJ47Few2",
  "key33": "4y5e4mFa8fMx4zNS3JuzBaoaTkQtVvSoDh1TioCJSXcsMh4VPa3WZ8YkxrfSqnGCqCAvD7F24ibaJgwrWNstK3EU",
  "key34": "5vAPFfHLymNGtcRzjoiMWYcmw81Tv8fR8w6nNpMoqjTtytUx9qC6wA5jWaHgp5yAphmjMuMFKyUqj72c6Sxd9CVQ",
  "key35": "2k6pBEFP5KGuVk983ARu2QbQYpZiSDEshRrWucLsc1HFAxhr7i19nEtXmnuXx1frf6VvsLfoCLmG3U9Mvq4vNrNu",
  "key36": "35foBeW5DJYhtkARjJ273jwLHJffR8ZTXTGAsGq9JbS3Lap43TFermZxi3eRoCGWgdEY99Vwpqhqnjrqv1XCM5iJ",
  "key37": "CXcgiMB46ABEvuSvoSQgEN1cbRgwnTSdmsENz7B5b9xLXVHXeM2evbYbQA9PhmKiuHXCp13YYfUXu29haPWzasP",
  "key38": "21xbNKebLrbW53Eyrpgzo1dv1G7Jtzi9Si6NKN1D1U7qmczjBvFGuy2ZUEAEFwzski8JHGLhSdQoPdYKmiPDgnwm",
  "key39": "21D4LYZSnMqQECX77jQow4MAxak5dFGFJtMRSk7X8aPg8hZE2BkFGXGbhEa15q9U9FGUu5uvJZ7k5on35bioyYdt",
  "key40": "5H3boXKxMbNJXqqmeEyJ2WP2MuanyJ334tKe777KAA5tnsea4LgbCAPMwCXSLFCKifcgion968ZbTK7QCHqfCQLv",
  "key41": "4XTuzePrtgQsLS2EBM98Z7X7tRJwee4sWyz6zdwK8YAj7YRXKbt7tSXfmvU8NCmJtDsheH9tPfXp7TrZirnyf73c"
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
