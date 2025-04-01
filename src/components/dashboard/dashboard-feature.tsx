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
    "7d1dVbacxGss5J7jRpWw1r3EuH457uWtG1VfFP24gvGRRmJSh2KRkb6CQDGqi7c9UJTLGo7h7RqwJ9JBbN6ar1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EzS8N36NEpZhwzg6VZHCgtDi4oiTrWvAAzdJmBJ2de2TMkGtAxaXspMBdhyYkFYAVNKbLZts5Vg3PFX999VHAZd",
  "key1": "2bvnQaaYrEncFyYPMdudbR11ezjFcqWHSXoWjr5fcRD6d8THQVaAxAbaeJV61rnhrD32fAdANRRkZYNGue54P9qV",
  "key2": "5S4arjCFXb8GanYdUAbs8AZz3sKKmpgo8TCPJb5GLQaByq5aDrj64JwkzkzAGFmHg1T3YVJ8Vp8uDnAKgzktLWnr",
  "key3": "5Mp9nzoeoWPyeuWEftx5cAwXqeUTvFojCvRzD39rUhu6QsyLHnNp9nEtcLP4ub5tuXjbpmeaFf4RGWSVzqD2f25e",
  "key4": "2t2aqzKKbgAJ3BfWYgVv7YAGbm2eNqZjrUvcThkrCGFwQC5c5hWP9PP6TMvbH99YUXJM31JZ5B4Fhmnv5H7VtqGs",
  "key5": "jNDP5eQFPKQFhVDhsaEcnMHoX1pgsiZSBuLdzfufMGS8DGpd7P8PpffyRknjdG8Goy1Vx6fv754fqNHGobeYHAa",
  "key6": "5c472T36U2eGBBCSkpjsZUuZ3y4dZh7zyme8PnA1esrDEq8ksZbNVbVbPCSbXJpS4qydGhf4sTzoEV5ZZLMz6XG3",
  "key7": "224S8Uj7dGNsgRgUBgTeA4UJzDtzFfuDP65Cynyz9fM5Gh5eaJEHP9jk8pSWoJj6PAoA1P1aq2NpBN7eMSez354M",
  "key8": "2FYkLdvv4VadEGk3aAs8fDZETuagxo3xNCc21rfZ81TF7qj8yEK1FPmsz6jtRGF2BMvQ28TMse2PGmgxcTRSL5gV",
  "key9": "5PCYwPcuUipmaEicSAdyaEhMAtSnudESbc1qjetWJtTuTcwLUvHQ63JW6rk2KoizUbQMRXEiqqZCAk1FXV6NZEVW",
  "key10": "4QWqhAGoeYbdL3HPubjqg66Mbqx64vS3u9o3YFfqxqktokZjrWEfKn5QPc2LBZbKn81TqUuiMB4qzHLB2AMFaN65",
  "key11": "3DCCxe1cMECEoxUkB37JsHvTQh95rn1iEYmFAqyFFYLcy5nnXWJJmPzZbwQrrTBAJsSYhFtt1yk9U5Fa5VAs2HpM",
  "key12": "2ur17RzDT2sm63bwA18MobomXUEPgMNkH3nrBvQewh2HkBvNLBhzvfcVgLB1J6TnuVuvbUapp7PvSgLZ1yNAZZvK",
  "key13": "5XdcBYjeTX1yzA4tjS8nPRBu8uLnLZLxyd6AfUNuSG6GHokycnYLfF78yH1svhxyMSh52vQrxiut4Y13UCVTEV1t",
  "key14": "2oYYbvLeeWohAKJn3dApinz6abWDofn3d5in1J4kXf2BW949q9qdXujk5iXiyuXr1vLKkz8DK7BMDG3NPHdzFSfX",
  "key15": "3J47bx2QMaFp6MkAPxT26mwE34vTmMpJvfwHeSULWKjjfkXwHPgAHGCNP4ypeZ81W4WkzvoUS7UXStZCy7rVcoHz",
  "key16": "QfHa8kDpNbqhPmbnzfZoFthTX6R8femSxBnoLsrao6icAam41RWCd39A8PfJmUjXbxtuoaCJd9LA6eu9rfLH7S6",
  "key17": "4c9E7wMDduxRRZg3wLr53AUDsaMSVtPBezitpcPsVTp4UBKcToJaDRhSnTjUexgaQKa3Cz2vtJP1VkURhx9qjFy6",
  "key18": "3w7Kxd54FSBUrYJeMAevjQAVHNeBrALvrVCbk5FDRHT4ZuLAGyEdDWhEPqq2WwdVnYbwYkDxwNX6HH11D39YRHfa",
  "key19": "hmyH9Cth7JJ7k3FZ3nUML7ZkKDNcYUYTpc7PqJJx5dmHjKzfzkQRL3FBzbsDEFN3iCGfboWN9AUBYnfYSQGcwUP",
  "key20": "4bU1CVrxXJUjYG5xsbDHxN3jvgR87k1tT3UX4rsq7eHE6icd8DSgUo1UdYnsfMEp5K9WR34yYoDLzsm52MzoiubZ",
  "key21": "266LZpZZwUdNVLUThyxGv2r7BB7mqUb5WwyznndRfMViGdCUyNfv48CHDnwaRrze26iGsThYxywncyzC4AcLfG4S",
  "key22": "4t3TjtU9BUJJZcbCYdfeLxcD9oHPZMgg53swXEsKRT5AusP5yFbQER5pe6N8xc8pVnKrNVdGiXJQ8eWRaEj7bHbt",
  "key23": "2Juq2jBvtaDjuW7x3qm7igBTVkzVxSJp61Qn6Eqmy1xHh17nFoQdXFRawHdAzoNwezJfV7PtMbm1kdVLwbcyxUSk",
  "key24": "3GwasFuTaACt4fBRy5NjijtyroYGLQTapwe7aZa1vgKpsRDPsp7f6CHjQnosN2tgfFUEy7Kx4y3b5Xs4wNfRPoHT",
  "key25": "5T3pCiGUbcLoASbSGojQco71gUEqnXwTW8vUXoaGPHNrmQVUUqpApfyq8y6YKMA9VRAeRF5f88R1vUNwEo23gPwA",
  "key26": "3HFqzxCUdG1yQJZujuaP6uNU5JRcJ5d9pyrkbskBeS1TE59fQmbsBYfrwWJBJcaKkU8rCsJohBx6NSCKqXaNdwtd",
  "key27": "2bE711AjMR1FjzNp29n9Mdw73GiEV5nzBGf7U1LS9tAuZ797FTLq5FoqT11cu7bMHHAovTUTyEyq66jkni8dkbWd",
  "key28": "2BmGTPSqve97PJHf1kvmQ7rsuVRPoHKSUnDDrmLJV9YcSQj32567EmdkoN4EY7eywP3PrbRyLrGmQCuHxXPu1wP1",
  "key29": "5ZdU5K4Hyz8tS3VHXtNvoeQ3tCcW7ksS8ea6vHNtFhfVWqrB9EkdcR5SX7y2bbwTmK89r33mWVRpbD1ArhuFaPMt",
  "key30": "2C53uV1KtgEirWKvkP1YVMjvfgx3p2dzf7rgnMt44eFcWbZxAMdb8ia6a38d6tRYXUPepgJ9BimfYQdxNHrYxDNn",
  "key31": "95wqimWM55toKzsSCJ48Ax244JGG2bhxhahGKcRFjQxCqL4GJscQtB7geWNTT21fV5YCLvFe9QCi7EJwwkmft5F",
  "key32": "UEAZkfXwf5AkjcvscgDUkdNiPeFjK9aAF8BkBChhvHuDKEBfv5LhntVuzAitfN2CVbhs5vfrL16QRfSYiABwLQs",
  "key33": "4SBFaE9amniEs6UUEJWLyk7pEsD8FKbULfGBUP84wrF9aCGchFauTG5JPEc6N2KFEnhHFr2ZgVePxGBa2Z7pa2p6",
  "key34": "3KSXUCYWmTPgtdESAztZ2p1TD3V2MYH8FaRKToT6eJKjSHq1FWti5undjtyPq3hHZUtzVB3CtoviLVT2TMtD6aUY",
  "key35": "3aWKCtrEiYSDpTkY4R9AUQGK12XmfChnLKqkYdQsP4DtnVRd4C8G6vcQP9hYnf9KYK14yfU28Lvcwn5ohJ3YhDtD",
  "key36": "2hwbcH16w6XVRGQ6ShXNxBeasFL14gfsbYZxYjvzLQ1JX4PXnCb8G8s3quUN4ozDbxGQCmvVmequei44ysDkBKSb",
  "key37": "42iLtLXBMkELcj9GhP6W28SGYvVX39k4Hqajy7Jvq8Z6NphHvJsTGtay235dp2gKZuyzde5qLTRDYxUpFDEoG29R",
  "key38": "33BcidEEVoPZJp6h5AZ8VwCKiDGkajvTBjGRmY4U99nxWjmTg6fbh5h5sRf5mYySP3jmATpSReTC42y3ViG97GSc",
  "key39": "56bgMu7aYDYpCtVueNJzWisQENgsjhADwontDuddkMLcHs2m3bQhEdhn3isAhqJhCDvih4qYkDC7xVKYRKDQwR8x",
  "key40": "2Zbnhr7LwVsBhiz5p7k4yGgrhun27iDYugaa4fnRRbmWbFvc6hUj2i96mbWnQsuD1Js6Ve6Gfbq9xnvKW9EUxCGq",
  "key41": "3xmTRCsZbrj3UcEQDhbKChchfRjUNy9sfy7uQLoZkYvJF1Jkk9cUa2bNGA62CSWXCLPi2PxUSq5Gg2Hyuj8kS5Xt",
  "key42": "5SHHeY7w949WyRuCdiEAryf6YvpUfYdQDc6eKEfwVpRFkNBQkwpdbbxPy999x7CueUt8E41Y7p33cWoaAF5GRZea",
  "key43": "4S9iFpEhNzPQvuYjPViyVgR4n5oX8Rg2ZQPZTLT39exbXEAznKz9P1ovwxgWtthWQaT1Kd5kBnzPawSmWF2bT4ap",
  "key44": "4Mx6EGrcghpRgJNiXCt8F9NNdSJ9snck5mmF3LtY1PriHe3FVwzvPFFmgvxhprBmcNBgAYr7hfDtfTfndMuDmzUW",
  "key45": "4PhsfqbgE6Lhp2oJcWHfsKSJnG7TU5rcyHNi9BGfd8W8swCFMM34sm7dtdAUtHibqUe8SMePtmVu6KnVQWP5u847",
  "key46": "5VC4Rb53BbZXHtdgzhCCLVZD3toKEfir3erDNpy3LCrSkAgp6UJFXsvdy2yQFr2KrVqaXTjftDsyXxTvUt5Mtwd6"
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
