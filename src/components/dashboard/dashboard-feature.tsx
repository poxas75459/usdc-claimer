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
    "5QdDjKmqKzGcyyzZwxM1hY97qJviJup9VdPt9xa7eSJewA2t87nmjjuwMhGDQ7WiP6vf9TQSSBa8vqZDcSkGK9SF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kpLYpaCrTqgbgV2hWk4fGhe2QU28r7ndo4c5ASNEjGFu4GRivtwP9K71rTr4rbvq3p38yZfZkfdv79G7sDQQsaJ",
  "key1": "eVxaYBvymGNkhGwc1rd8nWKetvekSSiDSC4pNLQxuM8gXSEFu98vyBXFukGjXP5svKXbTEKqsXeza9LQwqCLNuL",
  "key2": "5y1zmtZ8MDszUzxPJns1Cmrf1DYqWkULEwhi78fGgHq1cjudL8FBbXCxV1ZC3RnaQpgNt7yLbtmVnd7pam8N5HT4",
  "key3": "5fKP3YBXc4EUSx65dVuK5g8dJWNfPMskE6u5FgxYGPDGKeXKXiiex96qV88GWbTYy5FCKZyUZ5QaSUzgu4esmiT7",
  "key4": "2hHdrx7sYgjDqVP13M582eecwiy7fcL2X3z3yQjfNSbZsLG1TmMJYe2jvyr5iEq8HmCsTkdQBgWPmhzjdYeswAeG",
  "key5": "3Fif2PcB2EtPfZhtZLwzJ3ZkgCaqMAo9rudtwVuLsWpfHRfwYeapRGfyPL2FR8nrura8aL8EBx1Ni9B7HncJ6Vkz",
  "key6": "2xkFtaZ5ZAQ6QDTmR9LUuKTZxq3MePsnvTBr5uYfFGnVgrFdboyZmMeMxRDfH5wvHuiDDwFoQLwrWxtezBfTpbic",
  "key7": "4DHgU6HpFECibxwsEJFgKtNXd2xPJ6wrtmKErk25NRrAw8Zw1zBqbi5B3ATsQRbpNogTNmdpo8XbGXUxpgJaWB6Z",
  "key8": "44qYR5nQYtS4VrVFPSAnZdu2ioV2QTsSufFD5RiARA6LacEBo9bARPxyT5sDThkpCvMCmJPhj5sXSTdB5ioSQsiS",
  "key9": "WQvoUk8i1vKeMEdmzC7PRX6Ua4qxCjAXDabmmMJS3hqswe3yV5uoGGtwh9XVeULofD26EvBT3jCxX88cJT4F2DM",
  "key10": "2AeSX1faGL6sfKtosBmHvc4AhyRyfdZcBHKHcnSeQ4SB3cSMjTSvEt4M9AhPkrmJgX8crUqzNJHAxrN2WVdbwtfU",
  "key11": "2d7ZjBqJPejrgZQcKMp3NzehdUn7CmhQa793d9KxhptQ4wq6Fz4ducoUxXNomqh9Wbo9ZzLCjcpqrHXexKtdsovS",
  "key12": "23dpy7qoXsfZJMfJ8CruZCF7pfkABsmqaQ4TAF1hj82ETBHfvwUQSzUD4KVtj4725GkzgBXyVUyzmjrvhW1nHHmY",
  "key13": "4MqbwSUEw1DPLNVVwrbtXXXExY1zUMnTmGCusgiSA6v284URcPHoZGhcdjc2Rqj4DiAgk1JMnFAZKRvwFQSQcZjY",
  "key14": "45dYqA3HP1V2XCswyyd5BRHQQH4rquP2H7vdmZtLSHXGQY6Vb93DR7znnpdga2AabPneEoQKKdpkz3kKuJJLU1hF",
  "key15": "3b5Ewn66PjMeKMF63h1ifZs2KATBHu8g9qUi4dUki4wHLrhcRXMV4YtjhBay9REVwbHafRxDfBHFWZZAW95mMMBx",
  "key16": "GW8YFXee6LrBKvtRPWTsNkouKViPHkpVqEdYU2XgdiefUZocN3uEAYbSAmaGi1kwdqXp63QcJ7KvCWimqH4NpsC",
  "key17": "oi9wQ6P3FJUdBBnhP5iKVQw3ZqYPpKw6DUGupEKjdENgbnF8tSwsoZEeuYdwMHrsa2Dm9srCGTRR38gp12S1e4R",
  "key18": "gLUeY6aWkjzKwoDhs9sUpVLg29FxoLadFgK1oPAk38bZ9uVDGCiLPvNGndf5kRWwm4X1U29qCNRRgFyRm4E1uyL",
  "key19": "4qVdakVThig78fewfmX7YfUVmhMYghQ99e1JdXmtGwLonp88cs36zfHXDjbCZWi4FNiBVTF3h4n8bdHLCvaxzMtH",
  "key20": "vtcrm7sw6nSBVeSsyMa4VZ49t8DQKd1gx6Zjfiuv6zQBTBAmrcxt7aRjAWCUJA79PmFxEG19a8sXvRtFCMhWnXs",
  "key21": "3bPoKcpiwh57BTpBuoM6QizkVhhEMHLfjmdCdLubeNRbMiEZtR1jj36ZzryjzZUDuJEFojB5h9h3shgoXm1uAN4L",
  "key22": "2P1GVziZoFKAB6ybUBZKquToUxqxh4gjoXwkvovqs1MynmwQwPvprLXhJcPosWNDNEGBP4H3WCfQRmQ5YpG1k3N2",
  "key23": "3ERC9RYYFTEmZCRsKaruw868tG7YjrsMdRJyfP2W1rRXqBi55bUK6hnwMzKajk8sK1Ew9eQRCqqCZk1pStGvnDW4",
  "key24": "4iC3x4MDRHeEVdFVR5tfbgaCV691qbY9g3Ss7eXNUsSSjaaSFfeHotbmHuPX9AkZDLS1bBxDrM3WCPCFnVus4kzA",
  "key25": "2NtS1Emijs3hdJT2DecRcPMUfvmFYpTv2638LYCGSm2XwptdH9sYFgtNKmTF5gGoNivLso9PLYrKTCijQundm2k2",
  "key26": "3yDuVp3tz6dkfShiEs76G912vb6ZCQiGN2eXnjRuGdaJQ7wsmH9WjXfUV23p9eM8MktUHT1J5c4rBNoLS4TL4hxR",
  "key27": "LoWtpXtAZq6sehbsNwJ5zpPJRHsycAFjgXu9Lcb9oXTfUGm1wMW53VBNf9xGNjZoApMsoTyuYuHTBLbnrrZCrbV",
  "key28": "ePUYZ7wqr55gGq1iyio2ZsREG7e2hEiiVh8No9cCisaq3hk9ZqRaWA9GQxre5V7BZemRW9e3Gthj6X62kfW9swx",
  "key29": "27hXwZyLGPJNNrdx2pGT4fj6C6newN8VdzrGmx4B8vuDK1dM44HAQ7DLMAW4eUMkzEmCXFFtndBuPgy2eeLesB4a",
  "key30": "2JN1mAZNQVLLvwAYaQ4RMwZQko41X2UrnH1biPXUAaWx6RJdjmEAS1DAWcETPaevXdZ3wXyCY9DusWXCmUrkgW13",
  "key31": "k6AXBBsEXmhAjHM1KCTsMxSRqhJMqRqK686MQJkMTyhdSdFNNWUS8bpvmiTsyv8Kdw9n11ReYxahqExjqoPPc1k",
  "key32": "2QZcTqRcgTE6FJ4mA5Cu74JbtS1J5JoaifBSVWmN1FRinU2a1fK88CG9WzBEap7z6pyNWSoD3Ai2CEEvojW1FsRX",
  "key33": "4nJ5wrjEx14uGvpwcPzUic3GXFKTEgu3XcbSRai5ruyhmCzQDFWm3n8CPp5XtcaTKG1EQ4Nqe5KUFUGG3fU1NEaK",
  "key34": "3JMBy5nR1Q4HrgukXYnG4spc5sTuZBGGhinvhFRrcyQziaspc8Afo3v2eCpqAevWhyD6hqxMN82i3vGQ3W7Qp7M6",
  "key35": "4z6MdCGVi12vurF4d5kVjHyDCU2qKd3TuV86PsFo27vR7tp1eQ7EwToaRnsdPyrN6sB8CwP2NtjPRunE1V55RrG8",
  "key36": "4bphDz5JhD1q6c5TubnGTz5VMATvVRsY6syB7886Q5QSKDsyZEPx7oHwNSsgarpjVkELWfDk7BeCjrDbbKAofL77",
  "key37": "WrM2ax9q7avfddJwp6zH17pQp1xBvYtQT5taGZzWUChpzRSq1Q1HqMPvzv8ueyyVyUHxZNPavnPvXzPZuqh5F95",
  "key38": "4Bmp6GPMhRWc5qmo1U59RiLy3JkfM83WgnQwazsQi4jdd2CpZMTfu942S6buqdEPvr393pf6sVCN93CaZ3VJdznm",
  "key39": "G4Pjp9JpBxoRRwVg6vZTDxNBe5r9vmeCxeDpEXNMBanqK8Ln3Cp7eW8waKZpp9hGYKANKTiE5BTtNdQRsQmzqHF",
  "key40": "3UrdSs2FvQfxHLs33C9YjttTo5GRxCy4wimsJxW3SxRq9rc393hmAcwzxyR76epgXmaahNLbdc1WdnyDX6vwVTz",
  "key41": "2GzrXmWjzynRJ9F4k8exAy1MechP6TJPv5kxmazWiNwR4NET7FugYYRiyJ9CzEQG75ryYTHyM9KcgEVeZm8PuNjE",
  "key42": "R34b5i6dWD1okubmWu9DLRNANA5v98T9BCr9ynW8UrX4yhZDAytoBTzJoSPboAm42dSZzyg9PPuAg5NzT9DMfpp",
  "key43": "4eRUB5hi5cvycEzy9MbHZjGnAYHYtej7rkEqX16mYX4V8RE2bB6oKZaRtinRjtgkyZYZediCpSp9gJBG59PAwod2",
  "key44": "4WpMvGHmVEe426kFPoFDz9vGRQWD9TQcB8gjk4KkxSsunmhfLgHigtZ5CRhNfRc9NTEugNV71WGjDAW6MbTRDJmo",
  "key45": "ihwHh7zFNu1vjiqYnP6zHDw3qupVGHDUhQuHKXQ3Y5TxyhhwQJ4b3tFF48ygaXkbu4VoKK8VdDHFag4jptqJeiD"
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
