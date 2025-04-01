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
    "xbnipASpWK84gB1Guja4QoTpGYLdZNwxSWEtHdwJ5urk8GzfWT9V7JiVLuc5GSdNxpYVaJdixayETcrXfWEhdgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "481GGVS7ppFT1a8dVgTt3n2WVMy9sX9kRegKKpXkMXfkqEts3j7wSq2nXZLaPU6CLWEW3PxefEVkjhqyjEq1mUpZ",
  "key1": "2FUYnKtT7EgBE44aZxq9BVNbebJsWkKT5efrq61UCU9FkELNiahDZprfYYPT6uysbW9hyxxdJHzknsUn36wjdy1",
  "key2": "44FJsZTtD7HiAeT1ySgP7sjtt4ie3wpRyuB5GyZK2Q4xywoiwUTyzeRE8YQQHzhMABj5Ts1HPwJtVwgBQmfz23tM",
  "key3": "3Xr7xMFstRUXCrowoLg24sHD8dV5EXgRpfEQV9qkE1YTjMb663sfNsFC1xL4mHHDM2z3Jh3AdE4i2hEpcbWtjCNb",
  "key4": "3D7CgnFirS4e1ankXHaXKjGcGwn48rkBy9sXAFez22RfThXyCZr9VbrTUA7XTYvgXoy2CRr9dMZ7ReFr4yifEmNy",
  "key5": "24uXPjBVAPTFS5Y6z9D2ztC7Ex6LR4TQKUKSs5k6QvMysWxVEuBFu4D8vVoTJHDF2YkeRHPUNqoHdjYZaoW9KSnR",
  "key6": "56DBf74dT95LNHhj1crWqtU3eLLL2dmmCGjq4WJg8rSosEeAe3FMXS8vQCbiJ4VKGR96GnaMs116zhJYzhKYkk9o",
  "key7": "4F6ne8udNqK3haMGPMEXT29HJR4NLtnKBK5ttQDmoU9ZkM9LvrhgMypvqJUPXDWUJHsNc9BaJPt67CLG4q9D1boe",
  "key8": "QP7mLHs7vk1nLEtRvhZZf8xeQZCqZYAjurP6hpJhh1Q3mhkA5QRDBzH6yNH41aZBXzRS48fSpE4cRwxkfXACNhT",
  "key9": "2VfyvPYczNst1gemYDHAhodtpgzLLhx5L1j1d4DFsEopDJYpYvCVb2DD1G2GJYpxfxbsSjinhRsDf7e79dpPsq3Q",
  "key10": "2jc3en2KRUeCswdyy8XCCS4vv1PMy7bGbgWM8fxy7ditYHirBpNGHMCwefTBDKyXkWhLbiLXNPtJ2jSBmGri4729",
  "key11": "35Myb3N6pj3KpatRLVejMYaNtM1c1xwegXZeEUk3F36YtJJDMHTvfuJvFpWmqvbHcUUYPD2UqcgUkL7mUv3tF8dQ",
  "key12": "4P8be9j2KQ5JgG3oHgAcwb1CzR1dAw5UAhgnyogQsWEj91dHYVKicTfMdMFtpEgY2zabDYYFxjH7mh4kFURXQ7oh",
  "key13": "4NUq3gvqJSnMZ55WQoAsT3gb5F3jkF511TvNiUTsD6E4yRwUB9qVvmZCCDajok1F8mSQWj619HCQNxdSWzUJFinS",
  "key14": "4UiHqxVnH5vuXsKfLENVdrzgdX2nz5uLgr72ms1Ajwkv2wmuoa2XzYe95iNptqczqsnrT3wT2mKQu81SC2XvAsnr",
  "key15": "4A9NUNBmAAaBkHKJWMUAfQTGNbhjyuRpLW7xLFuC3tsWBafN5uwK2r3CpvF8qGiLJNVTEec2uL1HTwk3h46MSsgZ",
  "key16": "9aGqqB9kUxZHcv78sithVd5ThKLUw3ey5vpe5cTB4REYw7yrLoZkVpzCQRmzfqHrVFZbHpFDp1N8d86KXwP98XP",
  "key17": "3WrFZmBv49wDVKJuKCsZeWwh11NLPCDnWBAopxrSzKty5cV6MUY1UsEp4mecmwYMFbk5J5jm7CZuzJJYMAjYicjW",
  "key18": "54oSayufwE8pDrrr3Zw7vYZpJy9e6MocM893QfLjdDeXgefKHomWSoqbqJWAPaAztPnh6rJtqLvkPCECfL4A9sgq",
  "key19": "4PLRAspwd5WnWG3gKWL7MddPRJJxKtgjC9LfGcdFcB2zJy8Au9q7iaePJ4JumqRfCTbZP9WQH98upBfCPjEKKCa5",
  "key20": "21CoLMLXzPpgkfF9vgxEonM8R2qLdnYbCDYKEGZPsztmW2Uyp8ahnuaqKyJCqdiDQxsqoC9pQudZDgxpAvuLAoii",
  "key21": "9sTXph22Cfzu4xianTPgjD3ErRMV4AzjSGyBqxHPh3qGAjfbUmZBTfse691FvBS6jSbFbdGE7rCPCTPwfEYGWUC",
  "key22": "2XYvi1u7BiA7SFbksFhXnq4NtSFBE8rEzbVx9gpX2MoJwJfWKbk1bJwNZVnYxjED2q1uB8u87oNHqPydYjwzSJqM",
  "key23": "2x8P1vg76BwXE15nwsW7WyiR2Vmx3YN2T99DArtjaaXgmyhZDWr9oa867dp1BbDFpi1Y6JGBSL6Q7krjA9JCtb6y",
  "key24": "4NPLpcySuDVzpmganP4caPevLbzHTFsXP37u6cLuEJqb32eNMaZj5X9i4pkcAhY9vnByxej3DC5wKp7bEmNT3dpS",
  "key25": "5oHiLDzgmy5vH4Ehp5yq6c3PWUaGmLwnUWMxHHh8T61tguoC8m5HshiECqUvxSp8DVqvGjL1ubs2UDydtSdK9xY2",
  "key26": "4WmdSuYiNq8Nmnh9PxhE75NQupBkHKH3qbiHHca8nEyENqe8mXxQuWGWW5WMPnZ62HsS7rtg9KT3f4JUHZj4WARG",
  "key27": "tiSZSbef87wd75HT5auTemt89ZfKkKyPdY8WUmtdDrGQt3jfNPbJJJQkKNdXPFmf25nWwfLtdC1uRo6Qc41NEuL",
  "key28": "AT22HfrVnHk9PtuhnWEQU34xQjHTPEhz5mvayDx1xSydUseCvQcdAnFtAvNSdBbrdaRFbWC8dbALW9miU3yYzpW",
  "key29": "7a8nAo35bErjwAKKzAhoZwGEZmHwttXWxCFgYGYWBtHFzy2DNDoFgXfGr5F9NuE8refTqouKr33oXyLPi7Mq6pH",
  "key30": "3PQfxrSuVaN2gtFRiaEpVTYchd87eEcuydHCYVCeQGhsWyffQyQh1zPBhm6sVUi8f3bEf25KtEcoPHFwisFt7qpZ",
  "key31": "4JQVUmGkUhig2mfyiJhM2Z1pkNwAMdaavfLmA4pkydCGpxK4Xo385oDFwcdWdKBFtqyxQGVkarUX2WtCm2UKgdgD",
  "key32": "4v33JoHNZiC7Co616JjQX69FkvJFYHTp7oq2Yk2sYZtSszp7AVwCm544wbZFtBtBexwPG2XRmQeV37REhdvE135B",
  "key33": "5zLCyt4ypc7Qry8vrp2eJ6DF8UJKJbuMUwAv7fiNDVU7JBfZxgp1bpeBGLLPWRTJAsiYiMyUkBpoE7on8abXT3oD",
  "key34": "33vzDGSR5CpxdKrwxm4h2bcMV1L6hkhbmaAMfkxVcb7u8Qnxv3GXJ6978KmD3A9Ev9zWa4d3yHv8LM1TAbTkQZ7c",
  "key35": "53R3dPaXcbDYZaWdvy64pPsssgC4dJfygbrLXsdJNY4rYx4onmwuoPqxeiaBaMgxDvrt4bpw1FechHrpSEb1oNCy",
  "key36": "4B1x83FfCxcYMYMdRWsqNUCQqPKVpMcAJ3FBDjV5xHNjsLEd1u8k2RCZCCXNtCsADyevn8Mw4dgnJssejVWxBZ1g",
  "key37": "3huNyat9K4oqFkZfBHy2dqdLEJpfDTw5gWPmBmnk616mGT8ATEVXzjDfSYFD9hy7Jonsm7F8L6uskRuDXCyxX1au",
  "key38": "2k8TjqGypDhN54eWbUK6VtJNeoM3L93PG4iFJjSv4s3RgrNYLcgJz98zkUm4qK3yvvtswffARwwJYm34GkbPhA7g",
  "key39": "4ctdPUH5BqJgKpQWdPnmmCgDoQiv4pSVf5RopmgifA8VrGbXjUkUcisPMfGjbNEukmdKsdQik656LJ25YqtdDv6F",
  "key40": "66gDxAZzBA1dLX2DaYePT5ZeRKENMeEytciHTjZhFSaj8CzmazVcnDMN4EsC18qqpx7zpzWgGNph8d2WiKqt9ycA",
  "key41": "Gvp4oJxFY9qxyWDCUYTNQwB3SsQGCBUAKtnB6zMhfVkYBUcqGfwvxfDYdUNWYyFFDYXe639P47oBV2LNgebiAxg",
  "key42": "38PaxbhhzDVgioEaG3oy4AQ2i995rfEn9nwriqnokG6aDMW1PfDvBy2QFtL1XS9zae4qhPtVrC6SAQKQhRLnjWzN"
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
