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
    "4obQnh7FKY5RWKrUVDNEGK74EuWn5cU7PnQknH4P7qfYqDp3RBJ1SNBhqgKKYNosjShDfLgmdG9ZkwUDXdg7U1qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Qfd33rgQFrURjg7xURfQ3v68AR7FqDqszRi4ejjKtrJzH56sKznP5JPtTQKprsWL1PYsHpm8qbNotuBNe9cdCYf",
  "key1": "YZ3vvnvmYzL4gJuFonXe12VuozT8ec4igsZjXGwfif5C5osC7SNrAjCZybpLHNf1hFxaavBYfWMuJNttKRsQUTT",
  "key2": "3r5f1UF36Y2Y5BptC6VETMiy9xwgsC2MUQt2RZcw9WmyetqD6v55ZPXKdjPi4xFbYj33kPWUgQzU1xK9LG1iEUbE",
  "key3": "4k6vec6HS22Xx1cDgEANCDrgVZ6nfjeuH7vTpSkx3VEdn4Vx792YzyqWubNekp1nFhJKKDC8ArZfe6qAQ3fT7Ce4",
  "key4": "2tzhrrygXcWbqTbSi82xgXsBUGcgfeL5KDDyym4KhAa7ZopfGYXFWGuunf8tgG8vnZAZABmyhE48UBzUMPTrgKQ8",
  "key5": "5t2QURotB1V26mwJudKvFcusEMi1sMtURstTdzPPD4RM4riponhaSDFqCaHkXFaxM2qxVsmp5zDiSqEpD1CeSVrP",
  "key6": "3qkJ7hxpWM3w4QBuePgV8P4iggRuuvQWKQYaD557ABwy4xZLAHbfMY862XBzyCPkdfVy4nUnsb4AUUACXYwEvv1d",
  "key7": "3VmbF2grDNyXEuUnwYbzBewGgMMCF2WyEnJigDcXyKYct8wbcvejAUwTU3Su3mUnpadziL3Wd26QTYV4LKANFcZo",
  "key8": "5eWNW8PppoqkL86b5gtD5V4Tk5ahATPE6VKYZH6qEkVm5Z9B61WW4M5wEydTVwGBXnTDLfPgKxHbAEhMMjrJa2Ky",
  "key9": "5TbVZAnmMXyAcSF8CrcaLXWN7ikWgwkjfefoSJKFKow7dG97pcsr7iWf1EJhmeZrETp9BEcKVSSb5imnu4V5pQTZ",
  "key10": "331BTyZsUx43TbUkDLywvbnU3Pm8PNnge8jd71qEaHbcyqN8B2RehJda1ni28EHyC4aAWstZMgtij6RzS4xzZvj9",
  "key11": "58sTLNfgX6D82YSHFNJ2wtUpmKgyQMy52mvCKV7WLrQoQHtJK3ab9HTjU1y4AxKoQwFYh5PcG5i9rAxNmhajJVfn",
  "key12": "5Wkv7pqeDeuvbxnM1F9FFwXgm7qB8objzJKxufSqv41sQNQrKuFMkaBK6Yq6chQaHvtGZ1Hr1LyT4dLF3naoYWwG",
  "key13": "5fRgY6U3ACmjA17oFMMSmUeVcDTurGYt4eny6g7VqXMSWnaPgUHNzzug2hH97kNfF7myUJrjvJXEB5d43stquQdv",
  "key14": "4NmhBwxeaDoFKeyqVveHtcqERkXwsUWvyznEjLjvLabgU5EC7RBjk1EktSC5GxBSznZifVRcMTnGewHntG6eFoEq",
  "key15": "4zhpkQLEPAtL2pj8KqQnvZD6x97qA9ihr6oDxcQ1gD7z3huviGm9oLy97HR8Rv9bxZzxwqcWPPQqDSXztJg5QUA1",
  "key16": "5MxxJkWM5a1USnQW59kwWfxfSzxtqu1ZXoeKe4c6B8MgjgN2Mb3a5vL7GxHEDRzxWTZq3a8JtBqyvKpTzt2NE2oQ",
  "key17": "5nmpoJaoQJanzxrDvB4fFSdpBMUs5gECPmoHazmic6jaQCPVywneJ4U1K2Y4ag8SiNij7Kv9oVJ4uR2YuuCNukGn",
  "key18": "53otF49MzCB3cPF6D6P68kkpLRC1cYe3D4kNSjav7Fb24mHFfJDM418joKkXiX1kf8tn3gvYudJai8E7H774Gu6k",
  "key19": "q81dXdWHMzUDiuVeihFRXAXpK9zSLSBqa5NRmdRECuAVGf7abdsJneFCXAHADhy8Rqh1YMi3oD1HLrcEhC3DbYK",
  "key20": "56nXCZvhYQWEDfyBVXwkqWBkiA4mrKFWN9HPWfx1pJ3KZBistwQAio6rR8XSLJXRwQ46m9g7qKFXGDLDX31v5pSV",
  "key21": "3g8phAJ5mpwtK5Nk4bo8VWmF7N6MEDmQf4dEYKh5mLqUMq8HPHuY9S7MNU9zGkZSTpay4nnJhAFXj7q6UjR1axVu",
  "key22": "doGHT9DymsrLy4giNo59LC2AgRcgi9CChqznu1o9rMU1poTqAjmanuadue7FpDk26u1hURubPJEUvMPJVV8PCdi",
  "key23": "cxDUSvj8hGeQKuRHtfpbdvK7gotgoqcvfjnHEQLaVzhH1Z8BRLLtDXy7tqZn5bLDwaxPZmSxwxckaqjS7PuQJBx",
  "key24": "gK7eZswvSx3vbMTgwZQcvDWPjWkCddbKM8RfaTHcQNfbztJiJPHo4BzNECS1cVAEs6YY9eUHdtTNMM1bMYZyehf",
  "key25": "47RiCf5dCVs7NqDxuChiNPQM8s9JMasmoi16mnkwJPCMzBfv7NM1rCwddkiHK3qGxUzhzdsC3Vp5ZxUS8Ca88xNW",
  "key26": "5YCePFNbyKSGMGBqA5difocDta3nqzAHzWkFJfYDaRrrFx2Px3Vg35R8UzhiATLEsiukf1sL4uWt2yDYWpKrdeGf",
  "key27": "ScyQUvEBZcV76tHScoC1dabUQAkTrUx88VNSGPZqCrk6QqRQU3MeUtstbcWFCtisCb8gX5XZUU8ERkkwDCwTGsj",
  "key28": "3TtXowfq7LvFx5w77MYwjw4Cn6jK48Par2Vnge4Vo84EgcNUGeHJUs6ZQD1LRjS3EvnExaKNVRa7qjvLeJCU6qpf",
  "key29": "2A1sQuE7yvdgvLUxQtAvpfmDXfeBe7oN7pxeG5oAoQvVTVJvaTH1P31BhkEREBNfHms5UHryMHQTA8zporMnMVmq",
  "key30": "2LTA1zxkQQRBZZjaU5r4LG6MEhRiQ8d2RdnH3Lg8RTLqNnVUkE89dHqcg1qYh9q4Yb2hgUjXRE7xdX2mgzhcnzw2",
  "key31": "66BAiHPykSx7nE7KaEvUnqjeaDCcsDhwpJRN8J9egvFh9WRJxapGbED7umPHTfCippvub4LmG8hcohRxKHTNXca3",
  "key32": "4MwQadwTPnCpBp5bUXBSXT8dcpcNbksaA4Nt4eJLwuqgzF8dLQSukU6U488vc2y9acYSxMEdrU36Jdq3HTwgeCPe",
  "key33": "RG63ysmUUFYhBDi7wthaPovHGUMM8iskzBkf43bHZH1oRzTXBjZPhGY3gANyTkyyuVVAzRhtyu5K2C5Jh2Qi4K2",
  "key34": "2UVUBjr2uJjZQAzp6nEkZKEJG2jgVhzG8K97GvbWnA88Xnj7DQZWbiwAtNz4sAnKeysZpgoGoUHpwpBPzSPrSMQK",
  "key35": "386f7Qy7rXvLarfvMkbbmqwmw4t3Eic9aUHvBix4CWLfR6rWZ1QcSJ176b22rApfuKyHpfBWRwcTXZd3io81kByQ",
  "key36": "23cQgKdDZ9tmfyAmskw123qUzqqjGTn4AkkKSCQC8ETzTZHaHSJvWNc2Y4Qo4FJ4YEmSbSP7czdf9Rx77xVZLLXa",
  "key37": "354tqpFEF6hsYqX5QUosiu4kwXhnFZbBeSczkr9QFqjtQbbRoEjD58q9HAmMUFSZSQe67FMLmPbeoofkZ2SEKuvC"
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
