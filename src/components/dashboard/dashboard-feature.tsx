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
    "4kecFyXqJ6YuA6UF4RcR1g2L4svDmwaoVP9QyAxNiGmwt8AFYP43Vc7ma23mESDy84gkkX7L45sxipMYPPSYYZjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Le4KDer7mCcvXmLjhrCsFvzmEviZw9g6Zzw68CM7nM6Yt7vPCXUR1j6KaP7cDezWJjTyXWMiK3pvCGEKg3gC32C",
  "key1": "48hSMVJrtYwH3z2gSU2rvAFRJRT7nAEVpPUT1tKBg1YRfUaJ1mEfA8QtieRsGLmZVwn5RRer9Csjjc6qsFjWYv8H",
  "key2": "4JZXzFsER357pvMH2dYmdCHrFDDgrd5C8qVFBGgYXg7iPueLTFFfxmfL2KLghp1nE5JZPTP4LujWCFg9wcrBdGZn",
  "key3": "5NuMZNnr1mGnVkRAZYXjayJ33k8fhp34h4K3SXotr5SJxR5SQ881xxLt2sbc9EqANCF6qCjwg4dKd67rRk4GodGd",
  "key4": "3bCnvZ2GCQm9Z2LDUfBTXGaK1fCWMUWcm6toc5KmrS4zdb1NEMr2yqv34iEtrtNj7pGKKis29jhjzzFXjZHKUyei",
  "key5": "4dN9vnD3f9Vbr2odrGfoYgLvgBink6j3axwNX8mZyA5YtX496x2tHyjvyJpYmM9jEv8Px5kRQrCE4g3Ai3TW6cv4",
  "key6": "3ye6jfUBuNLahzt9drDEkzGdXpPvt5eDA8VjfKdo5wKPdWLNb5QZTbzCLKjTh8mBAuY5ginUrCxz7F3b4oj1yYA7",
  "key7": "41YACURVK9j3eGgBYA9k3syQ1F2NzJJkfKVCCs6r99ghD3AajHaoe3q6dBqqrBwDQQNbcEBLCxHYX6sAhvKKKdPh",
  "key8": "2yPzXEkQ2dJfabGb5NqNK6MXMKhDnym2zUTqBNBTcDMDqQmmqucJ8tmuHpbTuLwQe95AMFyQfYBEgXnjBpGEfkrR",
  "key9": "5fZbpCLW3SFCC4q2Ez4QkFobb1mMaMcCQdoJYLYpyQsJeXuPbJr6Yki3ykKEZm7BYGucVkk8zWrU84wcGFxiXxiQ",
  "key10": "yNv1nJZ4ss7dYYmaWMttbyej1JHqU8McyFc9YfuNzyBv8w2e8Y3Mh94HSLKa4VtySHSuBbXHc3sVgz9syvryBVT",
  "key11": "y9cXuo52n6taF8nckVwYyTEm4zDiG43UFx3hj5ELYEy4ydCKEcb5xmJjxzGuqbKG5P7pAeSsXApt7RPPoqToRGg",
  "key12": "2dQsBVxFkoBDcwKhYvSkk6WXFDup9ANg6KisDgZWN3fvf4MucZb9dAC5GeUA8rF6b6Gr8D8swvzpFkgMCY1xoNnj",
  "key13": "3so8tct4hvx1MGzFcFekMiFefnohaGgPDxhwysSnqtCmPjiqH8iCqnEM6ptxzVH4dsGeRg9tcYKgGk5uiNewEVKh",
  "key14": "5xNHX2Zgxxhv1tcYP9BViR8AZneiPHTKN9qbbFvxs55HcRHpoVZYUXMLB5ZaP9HPB4yxMo4aKMvuEGfawLMDsZgU",
  "key15": "4JFMoQPV83fa28U34Kgd2bqb8Q4QEmTuGUErPY61f99GvRQ9UdhSz25bgmeWUF3kYXuwRVe7mUzrmfJ9bYQRtHv9",
  "key16": "3nijWcyEZL1fB24GnZxfaQy9ti9N9fAPCwxK7aZ3YrzT8Fi423h66ZYpBF4JEZzr9mndgToM9BM7Fq42tbW7pEcR",
  "key17": "39d6UYqmviZ2fuQWNcc1VmfRophYambrVKTQCRvrsM2XQHsdQZTyfp4rP4Fgc34tYBLxxkaVYJNPjFskyainrVKW",
  "key18": "4RvwHJm7jNMiFYQQrxy2eXkQHTayN1cAWz7C4pXrfjK7rUMsFg4SomoKJbUokov3FXQBpV7pciboq4HEjXjBszYi",
  "key19": "2ALMEaAX7hjcF64VGSuCoiuodTfBf5ABFNVDUDZzNBL8EHeCfpK5y88G7qrCosMQEwKfEmCVe1CZg9YQv1Rat9em",
  "key20": "5JXaKKHtWhxBVZZWKNkXxFQWVTjEj85HEeHEEUCfVdBksaGcob1Ap178ekq3WSm974PUccmYeLhBjhjqAjk3cB4X",
  "key21": "2MHTVkLAUKhQnm4ZsKjE7eyh5RhPLjcKEMSAphcfoHZpgyv6n3Fw3fXz47BCdpyptALjxS9EzJEJVxmjZX7NssdT",
  "key22": "arcp3Jzaw1uJcnYZcmPFNuorLBxVeyhzJouNTRXHNd2V7VSfuMZxia2FEFWDDrBkDf5P7oJBMiu78gKgKYLeZZY",
  "key23": "5qL5LFE1hKwnbVbSPkX6R2nFuC7NZhoNo8rZD8mG4DcbpLgQvLN2RnceBKN7QULSViAq5nnSszkt6LuW5qSSYmTg",
  "key24": "5Gby4zwgHKvQgSKdbwvihB4y4jdEjV6QNafhv7Z9Er9u3KK3K511JcfcvkSbha9T5R3x2n7AeL11keHLabed8o9v",
  "key25": "i2RExpTZ9MTiCR8qrVchPWDAMLkqdb6FcsXAnU2QKFk2Md3RG3yJdQD4DMjvxjrTM2jc1De1nbaqRQDHKWyBnq5",
  "key26": "5GTftZ3Gx2LtHMiem47kHxYKs7j2yqK9LShsQEVcEpJGhEA1mhdEbn2v5jgttJdpU9jhkGpuV3EnbdimWSey8CDS",
  "key27": "2pHPncZuaM9YTLhJnS8Vnb5nxdJV691vZa28t6th7uz2AR4Fyq3Ye8zBXxNsmu7ynHRomQPumAYM4yr4yPcnX3wA",
  "key28": "LH6rANo2oz17ordxVbGsBQC1zv2jSH1D3GDtqtMdqUGAa4ATT9Mpo1EtUiLoNzGZ85uvmVGSPtDu47AnwLLUeGD",
  "key29": "3Wx8u4y6vGJ2Zc3sejKkxqTmEhVwGVd56USukkCpLbKmKVxn9y5UqZncPaY92nLeuL2Aax7jXAfoSso6rQmMU8Gh",
  "key30": "ywA85L7V1LiSVhM15M3rF4hj9ovbts9Mp2sQS1QaQ8BXEDGV7W92dX7YWLsCf4kA8Z8j27u1q7Zi6ouhUeCYJCt",
  "key31": "5V5B4LxCTPfD6HbqWVKUj2UEFqkL5oZ6rzmFeXmpbpgn8DYHF7X9sPzrHvaB7hpurxeaKqUbGDFa8hgrc1wbbPnK",
  "key32": "65XEvhYoNJeR9DiNTt4gU8t21ufAVJpbvRouCdNLpBwzMoEd4T6gzKt63jjkfX5KLc868M65c32Zb3DDasTLm6pB",
  "key33": "2K5yhXbe2168KZRzXB1FrfhrVcQgsrwZojbShHs86iHNk6g1oXepVWbogj79Xehb1GP7bDKDLxryQJ94v24NcWKL",
  "key34": "7eS7Tn74EGnbzpfGmJEBggmEoWwswFfMALn97ZwFE5hwJJGzyn5kuu5NWSgwoFJC7MycZABfox53kJRSTaBFMQS",
  "key35": "3gs447wWWuVBgMWUbzpidicjubejskjYNzCSEFzH1hVMT3gCKc5oGQKheAbiLDTM3oS53NXTSkxyaVeQmbfEahuD",
  "key36": "8bqrYo7eZadD6gUMomUKHJdZyhGet8ukT6tc8MvnR3fruvDVAXW9p7TDueXcU9LPPudAyYAgjc9S2jhgBtosU8v",
  "key37": "3ACXdjq3UnWZMYvhjXVnKZdKJEArAbC1u53BnbxXJpCD1UwWBXv1FprRRDdjPWAmvLcs7fzSCyKhthVoC9RqJgk",
  "key38": "eSHEEbsUiiCNFFqm8SZXcPLCGUAobQ7UzWRvj9ibmNmdzBdqb9SG1XXJ4zxLyc7jBYZuwRjJmjR87zRuueJPScD",
  "key39": "5NFKd4SMJBbiX3sMGiapheWbFrQLfC9nX3sT3hdVABimb3ifDVKUXxkePQd8SLb43DkrzRHwSMWwxSk3jcDsbCpd",
  "key40": "5hDhe9DTa45gkJdfrzo1h89WzzFc9WEhHX3xyFKgfXT85kQqZgdKdjdVKBsfJhNcNnhyEQs6wowyB8dnx3QZyr4X",
  "key41": "5NieTEDkv5PdpctQrbS2PDPC9PPKtXyu2wzsxSmMgNrkm3FCCr7FYUeChtXYK6bcUFiGzNUwLEyMRvKR4AU1EFHP",
  "key42": "5UffkgjPvZwCbxx6m1b6BQQEVSs8E73TTF7o9JVvBmwcdLjFW1kyDGMYLdfAUsaUoSfvd7d2CJNcUyuy82L5jEBs",
  "key43": "6Gkj1ioUX8mmjrHPVNogmRmmQvdXYZ3TCzcVQhLCxvBFbnW6fyzEzHMhr36nE4fDVNjRwxFDMsZG1EnvHutkzbJ"
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
