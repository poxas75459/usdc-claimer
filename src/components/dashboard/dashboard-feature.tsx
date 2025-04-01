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
    "eBvTRYxemkdUd2niUJK1FUDdhd9FUJsFRneyZ7dqfXqCEvXD69SMnCvQs3wVRztR11aQeZer2YAnKJzm2eF53J3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r6tuQxrTF5gjyApErEQDB7WVosefoS5nZRmm9ayrcFgnhKuDAsqLrLgyv2EevVomyAFsT1bNmtrBFPyXsKX8nKW",
  "key1": "3Zo1dCfTBEW36Ngf4GUkTS2GzPxhuTx3SjCNxJGp9V59nkFZNhr7MDSeATyK5h5ZsZ74N81ZA9XoAoB1sFh1fFtc",
  "key2": "5hPp7P7vNz2XTy52S8bhCPaSWiGBop5fZkPiyNXQ6ZDtHcVRyXHFYhWT5QwGr2d1BK4vDiudYkQAwZf4mijpKiuG",
  "key3": "AsMp2xMJArKAAa7J3PsFb2h3qx72EJ2iNuptdEjdzwHgpmk3XBqKMnNEAb5poWDHEqzi4yNZh4zzH6CBX4A3xTa",
  "key4": "2A2P38ojaXC4NL8pXSja4J3heJodJj9oV8cCYuMDxg6SKtiC73a12UqUc4SYMCjZMxrwJzwX8EAx8asqEVWE8kb9",
  "key5": "4UqP4qRc6sN29YjDNPzbTX4sdMf5HKkCAVW4PLaXbMRabj5cgj4AzxEfpa4owgZrSJr39PE3vmrE1DeGYnGYqH9G",
  "key6": "58UQMuUu6RRP4DzauRkV2KMaXsPD4j23EUwJL8nKJXKpdVoADYCJLDRRHy5VFXykn2q7BE2NXuo7UbNcNTCCYSdz",
  "key7": "62ztcjB8DjGLsyYcjxdwcZk6u33muCQpcNrsiDYMNYqPGhV9GCdYzWF34KubxSBu1AHiK8QQxhNyzJdpk7UN2xDM",
  "key8": "4JEAsJe9Hdtq6gfzMwmfLP4H3Vqh6Vc8Z1eLL2S6sZ6JHrwRgJkXGHZnF1XxadYopK22rtZW2qKtkfcW625UT1EH",
  "key9": "5CgE23dMG514dVnTjLnkeqiJS7s8LYU74qMhqokxeS8eQh73imRn15s7gpd9DVBnYN43WXz6w5ydnGuoNciiAeL4",
  "key10": "5ncgiaSDaVKiBbb1rDss83ztuJopBPMpcASacQs3SLLkCSHS8Nej1SRkRUkjQRjt8fyFdsJZiwpKKMCp6N2zDUTU",
  "key11": "51m42eSKYywyJtvhMotzdKFRL98cmKcpGfeTzXLSrt5T97X82hY6daRiSNktiu3JPD5R1YRDpgWzKLdh2HCQezbx",
  "key12": "5ZH7vb34HoW3J259RfmBLhYMB894ajBeBzBFxf7TAUcYrw7jkmahfkzckXYsH11NWzG1mMZMNedsr14kp73nnhZN",
  "key13": "5s7e8opsZjxiWpBHndnEC11rQwJjB44n7wVYVNtBH9L4ALkxqAcRRvWoxh7RjLLu2YyWVtQQMVc14kncDCZzqa1d",
  "key14": "2Lym4Bcxzg5sij6b8MyfujZ8vstPF2wTmxQLmRFAkEw2HzeRM7JjqaeCUH7Wj4DHgocZZUgbfH7DECU4Lxwp7fgN",
  "key15": "EsG33Fud2EsVLPQY2N5NRMvUmm1RKQJpADEpA9HZkdMG7QT2KbumZ93L2jGkyZA5sbBP2eaouJU1ysAHxXc9zaC",
  "key16": "2QSXN6Zki2THEad6JbxVqhRwx6boxxQEp1iJhfJnJNY8dSvaafaME9PDZ5JUMQ5sBdp7zgeEPnNjdqWK9yGtnhCn",
  "key17": "3pQB8bt6L1WncH7AgKgzdQXqdq862yXJ5j4EDUXmUT1aX8kKYjMoyN44AKiVCDTBKgs3qrF4rpGueW7p1x9N6482",
  "key18": "67WHwSpv2jR4jtmkg4n7XUpBeYdRQW5B73cy6sVHKbbXfNt2GoSjrUXBXGYpk7QfezkFw7QAC9SLpCjJS6pJ4QF3",
  "key19": "65Pni9eghdnf9VRCoxinxPt1bAiovXAb6XbPRw4kwbrZPwZn1XUsG24JAe8XKBeRSFNz1nzSDLWqhz1HXJHMEYWE",
  "key20": "5PvkZqnU75ghJuCHDhTnTnqbESYKDBqTi3PvcW22vY9FDSkkCXNZ6sCsYG8wo2wsJc14ACqNimUTtdujzjQB4Nmd",
  "key21": "3b7acpcD5gjHX2o13o5kY7Szk6mMT46YSBdQUjUZSC2sV8jQY9c5TaKKF5M98BjqRSgpYiBWVwgHNiEheX45oZc1",
  "key22": "Bv3LY486398bLHtfQAy9zsyGjZaZAqEo7PvDi79sDiaLurCQaQWDdAJrLwEzknFVYc4FWScjsDerj3FyhRhsUUG",
  "key23": "4pEMS8jsiRQWnDz8HYXCoTCpkyM5YXRRsdzA3KShTEjWon3MTBjfcZvg9n5ebtm8VCFvF9BaUEeL39Gi7bTCMipQ",
  "key24": "5EwYF1C6ESccrMt94Kc94371CTeiVsWbNQLAzhMfZEhJnBoyW5VqxicvA7T7J8m4fyJoEgDbcjYGURc3MeZri5VX",
  "key25": "2DCqsKrcTWp59ZmLecP2LdWWo2X8YrZyXQLf7Pv3j4R6Jfq7fz5UdXyJDQHDvCyPxRmBd35bvtdTWamuotDmhjPP",
  "key26": "ozDgxUCscMNAJ1REaCSCkpBH73TCn923qpGD7xiVonZQdxCVFBwskmuePZgg556fW9rjL9NSwE9QqNwVkqJajPZ",
  "key27": "3881su2Q6nuJx57QiFdgPjeVXgaAcwTkGtJgRvfhfTzaGHjwd5NaFVTsjqzikTsvjhEWibNgMZGxw1f9qYJMPvKi",
  "key28": "hqSEsekEzbP5PtR2bdq2SNfT9ogmp88KmV4TMXWt8pinkvinthvy4LHLNh9fDZXHCF9LMM7YZqRharcbCBMxpMw",
  "key29": "2PtoY7DGUFJxJtaqLM5rg8MG48rxhWErEAzoad1fFuHxcwyJCKXjRnn9SsFBDHcsiPmDWKzB2jMV2Krrb34YRDQW",
  "key30": "3vADGjBEmb9DRadVWJUqLBHbptr3YUKpV56WtSMTV6eHhACHGBH7may9FhS4bXgPEBraEWyUJmuPTsC2NY5TfC8Q",
  "key31": "p5axb3c7hxcipThJwTc8uXaNyNR9fHoFhgo5VQJsrCmLBfHQc4pzpg5vw9Y4s6BCX4mu47G4uKFBtZxXHCGo4QQ",
  "key32": "9rfTCU9i7JZN8CthrqPkgDX8m8rh8djdgqgHzz31Pup3EKcHvtC31YSXQUeZhfzcPcWWuobiL1QMtRm7rXVXm5Z",
  "key33": "3GZBMTVuHuWg8vUxNqxvPgt9d1VnRShZYHnTPdNE4ua5rEjichPeWeZikRmSetWxyKCk6DCYBy9k7fAAdz8qxRv8",
  "key34": "5vZ46zYYgKoFxJDzZNeyw8UrKXJxhtcqJAy4iM2fBS4eed7mgP2h9id41tBTWe29YT18wswQx62eBsZGHeMW9GMp",
  "key35": "3A4QHAHGbUACX15jNA3PJvcmspEYVeERQvy7mQPWAaXBfQF4btLbq5KHugCYpSXmZo1PphUsFDsxurpSXEShmqhi",
  "key36": "5oWgauhUSGABm2nnMWxGGbZHSYYzpHmXFv5Y7MbyGYFxX4wpiDmi42S4JcPK6ztvj56sguoz5aPW7BRK3ykwyKHL",
  "key37": "5UvGEWjTE95BBAf2GQvJAatuyBbKLvWjnj1J93dNfyX9wyKPd95quGzzknCiBxwSiS7PWhswohZK1kijaaTtnvxo",
  "key38": "5tuDDdM4NpRqrRRPu3ZJrrtJMpsgCoovzi6CXJqe9yKVF24NXm49mgWKdiPKfX9TtNt31HVWYkk5ZDVdcYSWNZfj",
  "key39": "31W1i9dn1DWJRfEoF2tA1kAkyd3poqfYXW4iDE4LU4WnugYkEx7VXh8UTUEjxxFCJYxdkyDw7BydpnAz898GSZTs",
  "key40": "3pz1f26Vc2EnH14zXoVJGpTQWPooTeQiCz8y1j7fZ2xCQ1bmehvHTrXLCnuXYybovRUhVex5y7M3nhzHLuUbLVNw"
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
