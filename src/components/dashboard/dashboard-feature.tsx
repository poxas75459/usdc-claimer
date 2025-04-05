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
    "2o6D5fusRuGyV7iYfMVdY3L8Uw7Mmwdm4v5eDSKauwmeHgsPMkezwPrzP5m3CMwkNScfc7rsLt5CU7VTWRfvKSaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HfKrVABDrC33nRhmCTys7M5TyRhhBoPABuduZnAfQQtZzF6q8S9DuhAnDZ2P3LhszR76tyVnBdHzfNwMkRYRv4a",
  "key1": "2jqDicT4M5U9CVcekard4t3uF9t8tamZLFrYc3M2gQFuVuc4TnmYGxu4Z9RKDN9SLqVFj7X5jZLCB3SQaMmXtYhu",
  "key2": "fxA4ymswNpMBA1AYrdEC97Mdkoqw3rTXqzhF3qZdT2b474xbxu1ZKJ97FJU3rLGnsvPv14AFHGuAeUMsMgR8etC",
  "key3": "4vrUVyTvzag3ueJZdsY8fuc4GHtNACPamvz52a61Q8h1gS5JZcjrBBMojtV7sgjQrWCB4FvjCsekrwTyam7mDYVL",
  "key4": "2FFRj9AgEcY9Qk3y1Shnxq6sZokfoCzgFCaJSJGyvgWL2bE55DtBLNR6m4hwVAnMyr6c22ri138gCAFRpLTphhC6",
  "key5": "3h8dSQamQHuPsqaL5CBjykXDN7fNqka24FBvFET4iJVAhmCfav99S1EXaMQUokBdBaoUzyEj77azhL1FzqttfZCR",
  "key6": "5HvVGAXrQYp6dodBRM712HmkaVAqbKV1VvSuCNW3qvatfNsz9942QkdGuCdwNtEFy3qTNcFe63koPzoYdieghWBy",
  "key7": "ERAAGgFMRR35HjQGyoXz57y36UCeRwsio4eogmuFLPukxNWk9P4hTGQaQUH7HHfswkuzvLCfcNrtY8wcHD9yePG",
  "key8": "5CrvoM4MxioxzwqeQ6be6UfHqyCE9xfyJt8JWatoU7F7JDaMuXyGx8unUn4LHRBsR5SNavpYPgrfMcpEscNLpdti",
  "key9": "49ubtYWZj7Qd9oed3AUYwfcQ9Znaqk1rTWNoAud1VKAzqCovMDGZPCrZaLX9vc6NQEoUXSzfxDGSMekXJdpuCyFg",
  "key10": "5eXv3wSTKMSHvHyASpCJ17Qw2HqcDNVE69MJyxAGewxLGf15BdVqvNAiUREfiRLoyKWQo6wSJKkzZkV2FwS4gg3y",
  "key11": "2VnC6HSL1nsRA8oyfZ7wMP3GWEnh6DSJjJaCdFQzFDDtKpNTYQzrCqRipbCw6PWRuy5WpUtpda4twNee7krgWMk4",
  "key12": "5ELvWH5i8v6L6HpirF4j4xApKfa25KFvehDUSQLGeUHJGY4HiRnK5YgtHskUxRXCxkB1aka1PgQWWyRdhBrKca1d",
  "key13": "2ECU9sa4BaymAsnzPSbz3hWp5VPStkb5ptohGw2opdVX7emWwCQUw54WDiAViFsQWhSAMJxSgtidXdhcdQ6dndgJ",
  "key14": "2oVrVBrZSEskkRfo6weYSxAUQHsvjzaQ5pDAdrQp2fRfJLT7QHqbTtXjPgEQziovFzznpFTT7fndE7Xbma2SSfvF",
  "key15": "2RB7btJTUQ4Rwd3KMGws51s8ik2HRUnnPdqDbCLN9VBwuioa7BJ79bYHGiiFoMUsXP8wTgk84ESM1ngsJchYHxLy",
  "key16": "5XDfWVQWSyw1YobHuYa1vjc96fYm3pXguD5Tj6RcNgTcx3LNQbcJgyWgHpg5hNHhbUCkqtdCxppFtmGv8pbEsFaS",
  "key17": "4wmYCKRECGjEYbKYAxwViN2SrVmyGA6LbUhQHdLvTzV8BA5wSTcrz738aXdCfmRscwzpvJYQjAJpHsYiycnbDoLC",
  "key18": "2CxmyCpYJi4528gqc8RU1JqMAW8utYQi9X4QFXSwJc3WzyNw8U321RYfVPDxGKxnQ6wuettedf2nvj5pMbKKPhoq",
  "key19": "3vXGUtczYbsmhrJWkfnk7qeorS7HmjusxAB5Ma6WjLxJaFgr98Q89c5FXHznh5GTUm2KMgFwB62v5yeHKJWzrNr1",
  "key20": "5gsYwq5foWCsy2MCCCNhCmqf3WpVP3kveX3VHeFQH8tXXqGwN9Vr8FdXpfSkQVbC94iorWu1wovGNTg5rTp4Tq2i",
  "key21": "5nzuqmUDQ78e9HuFABJ9q64cjBJFWLFpnALeKSKWdAZ6DaASE9nG1936a9GeXGXmyarpPizwoqofMbwwQyeD5xEd",
  "key22": "5b19Fn7Mo8DLhYS5MPsj4RSMwwa8ePrdEFKwxbftQeBdGsu7hX2NvQWfzTBc2SVTfFWJgtwc7Yb8pZ7DTHFUbBW1",
  "key23": "2juY7grUDjZE8VJ6kWXawRfd1xg5eKZj4t3jHR6hRmPW8GwQ6qEXKMXVEZsA4CWyJUGUs3Z3URM8ETqpkzEba1PU",
  "key24": "4vdxDh91XhBmsgTbm3wFsi15w8SJXkfE8xWgL4pjUmJ5CrPtbNkJGHxGSfiAz26ju1n2uwrnNFmdEMdufiHtMfMD",
  "key25": "5wjPtHwnZPxADEr4iZPRdG5GWXUKgJho5iPMT2XHY215XgAypKhnhxR6G42qA5gBe9DbnM27DAU5jqEJL6VuKMuN",
  "key26": "65QD1CFikA9xbmFj6SoYqCRskcJDDPtvk92UWznwXQCbnqXckhY3vS3XR6XntDqeduJZkcST2JYz6YcdkBeQGR25",
  "key27": "522nC9iA1sU2h4qKZpGDmmfEUGZs3sBi6Qr5pjcc2ws7Lc3egDQ8n7PXi6MUb8RMa6a17XtEwjaLruDqDCTB27Aj",
  "key28": "2KZmMhUdsH8CRi1ASJChMKZBbvi1ZXxEHfshZSe6Z5PtixfvFexGLZEHiJ7L7Kjk4RukaWwZpV5ZmjTRahPKLwuX",
  "key29": "2EyAvM7XkJBTy96Fo35iMvTNZAifHdmVk3qBu595JA39hen71348EN3eb7hqxcs96ug5fMeMeQjae1bmnwc7zZQ",
  "key30": "2AyXRSqqmDkxnCZfGqGQQi1wjEQireNkryNAnyd9GTAhcHBAQJPCAdnby9jtVUcmTM8JT7aaqV6qatS2oBRvrmbc",
  "key31": "4z6J2oDn4tikVLSJC7QDXgDkTgdUyUQC76RLyrKfmeBcVek4viDkviddkzAAikkZS9Y9F2HMsKqrnXJgcHJaqCLi",
  "key32": "5TV12aiqyYYVWrknurtevGgmN65RQaaHrogwZey44MDJAxG2Nh69sW5D9GZ2Azbuqpaxn7kbFYP4bcp74VPYbJMg",
  "key33": "5Tk9ATHu2HdE12XG6R7TbV1jmJzf9BfMQ3BvGd3NiHUjRE1ZyysvxwtKGN5pT4ZR4P1mvcGGzEumA5WSFNSpNiaD",
  "key34": "36tV3rn88MteeDBRdkcTbLVTNqMQWbqDB4fDqKiv2i8ayf1GkGZJY1CzBdsQA2PzZeWxpEQ8TeqKZcBGHcbpxJsM",
  "key35": "UzbEcLgp4zMv1DYRX6gxHGdsYVMVbifRfrRbd4GG4LcoQ6p6tzmGvMbBv12eGcDBELq14yArdK2czXvUpgZnsR5",
  "key36": "5mEUpfD9vBn5E1z28pznpDCwbWG5aKCncZdgQH9dP8x73ei6HBh6aVTMmFLvVK3ibU5PqP1CtAX7soL3GZZZZyqk"
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
