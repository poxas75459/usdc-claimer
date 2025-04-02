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
    "3ALxpcNeG7gE6pAVWBqq8bNMbLZCxAYbNbXY4BkxQL2g6nzjMJ9RbuGeZqvSzJjfeKzM4DyRR7oDPVUCoioLdCs9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Up3qTEGKv4PyPDf25w53J7GpWkAU5BCXt9nckYiQkBTQjbD1weGECSf8oUVgauZXUwwt5ti7FkRe4a9JaMovXCS",
  "key1": "4jgSDaqCqTE9bp76hCurENVSgZP8bG3fzasYB6YPh6UFP1ryLzDMTFFRM868onDjyjB8HfNckMFVxXtjhQ6ZbCyA",
  "key2": "2xkKt2NQ8YaCtSiqykaaVwxER82P5oKME863rCX4DmNDRsxFb5UzcbRmDaBaBLXV7s1RBFbbQ1PxSaPavMmpGfrC",
  "key3": "3vLkJMei84xMQYzo7kwcauv78ccPzt2VCZZmRbUShFvnEcR7DLjj1wS5H2jgiHqBKYA9mQC5MBQLqnf9kKtWuAg5",
  "key4": "3LLLQa5fCAMo8G2YPX7ty4ZkC2oT2yGUJXeu8YTkBigT5o981mvSKwkSjkNeNPrV1QQL54RVEhA6LogZ7JSBepP8",
  "key5": "4y6zZ5upnD1QwZkuyDN81ViQpbNqMktAg1Uj4oTGQtSFsneFtXiuZijs5rUAmMQ61dy8yXR2KvHcRhkkZw8oiFdR",
  "key6": "3DCNLqyMKCn9GPD5SBq1WHDVpRNztwx1SWRyAufmrANHxfnvMkRExGLdbqn9xg7mnYpDXTsuQit6FwYEVCgQKm8F",
  "key7": "2pc5xtGHZP1sMFq77cD5pYkqQw1eGtDuZwgf5F1NYs2QoH3NjHLApUmVxAczDd2cQ476BkkynBiTz6gqE55zfGbG",
  "key8": "55vX6FmgoK5wi6hSPC8tRS2s3s3nu8FpZPapaPv8XN5SjP4nJAesp8eSY1wtdzsDikwWXrG7agRwDUhxzmQcznSj",
  "key9": "2G9byye1JB6FAGJD9YPrVARTeUaZMCGYpvxhs2XHRhzVCJuG4MK6uua2LF6uqY743HJpbuoSE99JXotMakGFLGW1",
  "key10": "4aSMg3o6Hty9f2uDWSPwnNA7UBPKG4KZjYg3rXifUEPj9evcKwSNcKcCpQuzrE8UHUNWStkEmEsKYCxdAr2ji32i",
  "key11": "3pks3vc5YWicRcqWeJnCsggHXchCkdXgdtuMzfioGTMe6J3dFH8kaCfgLf45x6mqZhht8xdNyZHdVbA3o2ReDdX2",
  "key12": "3UEve7d8n4jUj4FzWt9xZTzEfeewXrGJr2VH3bb3RdF9zi8D8FhynKkiJ1uBVws5EwZyFDrigSyAoTVbyZf1zpWV",
  "key13": "3fTgZkQVqa4HDCUtMX8MSCDB8NFQwYektHtXxbpSzZbf2RaV9JD7Y3FquCNNPAzc8yaKb2XKGjUANhupuTnAtMJi",
  "key14": "4JoKkashHBAndq9qVTTMsJpB9GsSeV1UnRQKDQKa7fmUgfGKztAkgimC5Qd8HXVVwutm7DzhPRuXKgHdjvKt3vtd",
  "key15": "61KBj57qZeFWgFNBcZzQGD6sAy5dFT4hVpbtd9MeuXDejjiEsGYb1VNnWHdkSNjMUcaB6tojn5G157JU97M3wACC",
  "key16": "5SoEbxrYLSvhEZm8859kA4GAEvHtFKUSBAufVFDdCtXhZFMngAC9dSYPMBwn4qggEyYCBUF1eLyaKSLzM8eftRv6",
  "key17": "JWmaVDCp5xaRNhLhoXkNrEzjvfGaM3TSjaArdxUAbwbbdFXzdA5YiuhTHQwgWKfJmaSjFxm3LiE27z43Pubakro",
  "key18": "3WncyTJrXzgsp2t8JcMVtDxQLH9gATD4zmi8cbhkgWoVkUNH4wL5abB7gwb5TUPJSB1SzhmToL6JmePY932QQMbN",
  "key19": "3VsNSmL5yghnrn8xWUpu3c3t31oMgr5XRLjhzzinECxvnN7gbae3kRWGfeDLbyZETj1qqSN3UNfdUGMqu4xdYswA",
  "key20": "41wV1aTepLaBenopaYnmuL4nWZX5CNEPEzavH239rfMbaeae7f7R6Jxd5RR6Cq6yoENwMYfKKFW853CdukDfZ8bL",
  "key21": "2Zk1z9ny6BmSD2wz51UXSnPuXuDQrf9L7vr2ZJUjmk9fhbEVKUrSE84oDRVWMsemDRAXDc53oHhRp1nb58JYHJkf",
  "key22": "VvcvPsVjCFY7RLVTfFc2y5iBXJaeCkJAryeMTPiHtPEedBQWVXBytQXVVeLGE6dagBv47spUUTww7uy2gZFxNRP",
  "key23": "22gxkZbC7jNzHjp33GywpyzWQZKEfXGdZ58LJvY8F6TxWYcSv3uEEeHbhfrVRV1U8JjcAyQuLqxWXUxv9VRETizY",
  "key24": "5F2CWc5ptFrrHzrs4Z2NBYAzSQvzEvuhxee9AHVfnSLP3SyTwakZT6M1XqGeMqMG6x48DC7nnoDoNWyd2hEsc91B",
  "key25": "RWD2j1ncLCsMcqnBNhqk8kL4apgL9oijtQFeA2kGLCkNebReuzFBm7AbEicauZv8Gv12XFCWDH3rdo7Rx1YgBip",
  "key26": "44gdcNUQ1XAKzrLkXNs7HCgj67HKQ6RixL3q7QeW6rRFq6EUEKD6tvdFyxkn8TzGDjBi6RfQHyBF6DpEFWpx2z9g",
  "key27": "gJfrXMyxnTmVGGHtTiyHEw5V26dviX9GnNxr31UyfQ4fsx9aSeQDc3kjwEd7M4dUgJXm5GeKmkNtm8rLQCY5pdW",
  "key28": "3ipLpcuVAgy8pqAFb77WHmNsRnzqtfsan2ZiXGXtYguGDDeWG4JfGPbypzAKCsfsjhCBNqvLnapZmg3wUtCeyvR5",
  "key29": "2p1iBPx33nNHqUWdi2xn3z2u5UB84gp27Q1tAxu62udtZ5Z6dxLQYqMPARXNbA4tMo1hcYvZnKgT22p2RwtPw3Bs",
  "key30": "3QhFW8kDLQy5oUsVqPn449gQcHSaauxXo1cs8dNPWatgdgJPTW3DbLotrtzVXuEJKtyMc1hsidHm7sXQhw4943GA",
  "key31": "4BrqAeNosqJSwYTeNGJJkY7B2E11ySyvzAY6X2aPPTtMDU4Dy2ee7DzA4qvGn4i3TXDv4LvUNjanW2qxEz6WSMxx",
  "key32": "5qMF4GXLy2F1G4DTfPw87h3ecwrjipkj2wYADSE5b6sN9tpsSiBn1mMHE7PJAo2s4AtAPxD7U3K4wsB1aZUaY62Q",
  "key33": "2ugoxT3SVZtDVrSfKZ48qJQxEieaUEv6LL6b2Dt3F4zpdfCgPwHWaFyYD2LxD2ikBR6pXWbjCzqHJ9FNBux1uewN",
  "key34": "2rP5AJAR2mSuaTWXBVyBHHYHABdG1NMGuzt7RAgwnTd5fAZTzbZoj8xnao81uGrXuEAvjS1hD1Ucmvzt5oS1StJW",
  "key35": "62m27Ff7wJMn74iPSLt4et7ZCtPsM6qgUcmUSRNeqzUvzBQNLgQSWFBAfcZ6HEcfzuMCZen4fo4KYBkaof9fLFLi",
  "key36": "CKiucroqeTgRNVNW5UYTMpy7LWiYHs1kkyRuqPNmbaXnkkVu3ERiUoiGrwHAPjHJtwp22zjzSUHU927gnwh7ERU",
  "key37": "62LJ2FuRgGfxPyCRhTKxHSj7NxDuuYeQVqmEDRGcdN1VyQJ7EAqGGoCC97XrpH8svyJXcZ99FGfGopZxkKTVRpgk",
  "key38": "4EWfNDPdDcv32HBoqAQF6rDLXB327M4D7S5oX8QJrQzroZVF75mpgCqjYSokL2LUU5fxLpBUCj8tCLtBPCQPUFzS",
  "key39": "3WuVejdesQquF8rjc3Ph8UPZjT3qXKNsq8X1c9yTvnfSR5QqnycvFE14YgV2sFSBi8Ua6B2D39HX2jqogbYNTpvp",
  "key40": "sZ4XjPGSApUMT7ZAcJcKPGUSLPU3UYkvQ4ZzJH1jRftGtxcrmQeXnT8SMLf4nS23Pru5Q4CjygA8JQoFZWuxHRy",
  "key41": "oNN1oPUdB7jKZeTXRhDViFLvezf6BjQSsA2UbRqHkv3bGPp7jhSB46H4jeAAKhFuitYNyZhaRgpbVAW7hSD362X",
  "key42": "2Sm93VMcWdwADgscWpno1g5Hhi4ZESUNyjHWx3ssjj5S6J1wq7KCcruwLXyB5H5khPeP2prz9LaP5WH7TsxPnerv",
  "key43": "3N3n1vUJaxR6EZUepYyixNmT4J87nGS2JgE8WShrCt5XexGqSGhcCD1RHXBuJ68vM8pY1T6KA37fd2s9bf6EWy1E",
  "key44": "5fyep2Q1kuCiha5MqkmKTtxvQQibgHL7mGF7ij1ypns7yD7mGdpmKa5QSXzjyxEf6XBU36VNBRpsdBbY714a2zBa",
  "key45": "3fxLqu4VPSVEDNwJrnapwVYwGpBy5AU8G6QCgWCbv5w8q56UzCFdLEnVNtfkcvrVRC9M9dLotDtEgdniEP9eqkb6"
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
