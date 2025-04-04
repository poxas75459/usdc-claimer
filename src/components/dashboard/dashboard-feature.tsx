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
    "67MPiswrmMfsSCmAUdnQk11NANzqubMUugLtiKTYKYpytyrzB9Z8953CaKZsRVSc9a6R8DGAXYVo8zuFhfE4KVNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fWohJDyoWo6QrmziGVEU7zKEfxPmaW3qwhwAq6nRqq5SM7usUkJMLWur8Tcp7G8XFZi6GoPDAmVv9TiTuEHeC1D",
  "key1": "rn3WTguFpfjAndNAeWxpoaN3Symb5LpDoCSyXWxNd31xismtbdmqFkoGByCdizDxqFLVYq6Gy9tgXfur5NBM7Zn",
  "key2": "21gPEzrQy85UZyw9eddi3DFgZQtXeEBknYHVCvsYc9GrBUyxSqPxgaz7eWQEVpVRPWMk3ueJfNYx1fRzCZS2EESv",
  "key3": "5XbnSoeh1oMSBrzjkrc5BJTc231TkpGxUadvy5h5pGx1ArzcbNKh7qyNpJKGFcfBzfz2fb7QdXVRijaSmUxVdkUd",
  "key4": "2EjcMHjxy7qX7yhAZh1xeUrZCc4MZeFXKmaVWFL3RpCQn65RkdxeAMdKxPACXKQ6ZTSG5MoEhizfainvqSSQWVFj",
  "key5": "3wJTQJ6XpxQttCurv9NbHVapaQKnrfDFrogttaMuwHGArasj4BT69Q6P5qQzAdBKxhSH6nXoqvJXsAi8Th4om1nB",
  "key6": "3S61mFDQXwtK5jFkmCap4NGbkkAHhSGDXAqXAaqMwbfRnhPD1F4t1QYChRhprAco6KqmQXSnKwq6mNyHeNwFjxBn",
  "key7": "4JsYVGF42jsPGy4kHLZ8YyV9Ti2eV8TzUqyNEKAbMqazxhoPhRL38m9VGKgWhbZUkNu1xK1tGugpFYN4bK4b5bNS",
  "key8": "5ciAEc3xgvL3jCJA47N5H53Lhrh6R3CbBhtZhbzNVenoturj8vNff5N5QMJumEqpYzqa6JhzTa9TB5TVnek6V7sj",
  "key9": "4CBJrxzHG1WM5KRaPtH8xSST2mnQhcTbW89D6w55bMacm7PcMnnMCdji3fkb2eKRA1dspX69uhtrqme9v86icMPQ",
  "key10": "3kRezGbXL7tmRe7ygR9ThmBmYPZXubADwpmUmo3M8pMqNHfHyQ9S5uMQM8rpiBVazsmPCJFXyVEvR7bFvq4iixbF",
  "key11": "4wC8RBUMThMaFxihpRYhrB4ew53vpdGSW5ik1zJGxfyJrx2sKXncDzxMUywmp3QJwsMyAckNpe9AnRRWpPasGLGR",
  "key12": "4Rpr8tRoevqFDxS61VkrBQTE9w6LGmn9z6LD441Qv47Y7tufgVtmZAotT1nfJQC7U9SESqG7rS166ZaJFG296og",
  "key13": "2QkJ1Fmo8GLEGMG54xb5sW9TuVk4mXUaJuppZDtfZeNwALy5n4LkMkV3AUtdfbCnHz1Rnnv5681zLUDPsqC8A1Q9",
  "key14": "2eCjUtpwPpqrDK8urubD29cx5AY8qQPUdL4Z1Fj3tbpWTvz2bexYBr6q58AgfvsAGNFqReaLiPLqi2TFunJLGyj6",
  "key15": "58QQXxtEWVEn8rMC4GfJSJSr4n83RK6PA3KQK1w828iZ7A8NY9Jzqqcfcgy4iXRTkXkapxA1zUNrvD2rLMNry1yk",
  "key16": "3HKUH71URVM5ZBB1EGauTUULbVkN8w7jrTZp1B87awfnuPAnPtehUhimQsA39suKWKydMF6e76ndS68pSW71gV2Q",
  "key17": "519wJvBrJh4zy7yJkziWRh7U8L7aK8aTL4je84kWq9kZ7ZmrF24u2HzhMYYE4BpLst1rytASnwsL6H7eRfuD7fWB",
  "key18": "4zoCVqHyxAu4FbPXeo5ELfu3dGndSBozS6Jf8ZEgvcHD65YKoazrGuJs8Vv7Hvdjh1957bd4UqxSkk2YsD3qyGU8",
  "key19": "wb7TVWWCcwh3guDvTkyTRrbkoVRzs1o8Z8pDNhgBS31e9RqCM1VoTZDSNZvTUxpsw2PNHAjttKtgxEWmcZiMX9z",
  "key20": "5dait5hjikJgaQ8wVcE6GP7ZKuNEG9ZS5bULQhPKUykscJCU9P8WDEuDPMaTaPnqKVVhZoTwFPLfQf3AtgEtNHTx",
  "key21": "5MnjLQMiqmFQDSvd1PkFeU1FHk8ds39mC7sP2ydBQ3817hvaUnkFRPeF2RWJV6s4H3seB6v2d6RRUTE2KUxYRbcU",
  "key22": "4xmRXkncoHHBfFxmvdbzs4g8k9pegCMkDANiW3s1sNnYifph2ACDLBkitPavHBcRKFyhLKv1yycYbgLknAi3MfuZ",
  "key23": "27uTLKHYyAkNJCQknCxoEpkZ5AqcZ9BhYNYmH2av62KEtJYy2sefyfkm1vpPxg7pvYqwj7x3RkZLDeHhBxLXTfr3",
  "key24": "ehTPeN8JrNhvCipua5FaJRpecE3MMzdaK2JAAvKUMzBEP3pz2H5v4hXaCq3EQo2j51wbvvHqB8wAvKu9RLU52kf",
  "key25": "46wCBd99CPmmbFnS4d9nsfcXyDe8Ro6iVBJnFCpABScHuCFPQcKrPtGF2R6iDdCyHcjp9fAXiLZnThUGRe8DmL4f",
  "key26": "JyGgmPhTzoZsPnFb2amd6uF6espT25CemT1JswgYMG1RFX9fi2E8cDzxkH4bLFqXyVNisKQbj9Y4SJfa5g1PLqM",
  "key27": "3rwYpWsNhVdzAsLtXkqwir2jbbEDit1P5mnghzRgyDmBJPgWJv8vknCpAbGcgYUqFdhaC7D8QsUfYx33aavm1k6a",
  "key28": "3kjpNBF7emT2Bn7XFQWA3jvF75XN7jVdquiFPk7dLkpAio8FPLUjoUuBVmseCv8WehdBKKj3pqZfRPFUnuGkmBBn",
  "key29": "315Nvpna2K7ginZAZgBLtnfzPwo4sgMyT7kS5nAMTudjjtsQV4jYzidSsnr9ho9ZFV2piCErdhAvB1XRkTqEczVU",
  "key30": "53p1qneLvGq9GPFMv4TaRu81aZ3G1NdM7ov7vraMQKDiWfpNAwgG3xehthgQrfLGC3PNFLn7UnD1im8hcLe4yXVF",
  "key31": "5bMfKM9ijCAZxvw6VN4PWDb2NY6zkTpaa7V4zzZD9RxXtyg38pn3muZSgCuvMasZdtzxUFSmwjM3pt1Dz2RpmCnz",
  "key32": "37uhzuLQzvY2xQvNw5Dg1urQvwNdoNn6VFJnSMaynFV7L9QdgWq1KemtCMtNxoeJ7eenBfcd7FwJ5NmwP4HTaTja",
  "key33": "4Fc4WqSaVr35U1VLXwmGJnRjCzJRgrmgV3QCSmQoXygBL3oNuTq2JYhg5oFHiw6YdHrUP6fCsLkSmrNNTeS2PVTz",
  "key34": "5tyJUEyL2EbAg5AtDKiX84Ck1gxWYt3E2rfsxDn7w4mhRxMrLtW6ovMJTkwjC3LrQLbwD36oE8UJrkPHpkrJUK3j",
  "key35": "2PMDc8whDWagPUy4nUKFTSF4PNn4VtMBsJasBG5JpYe8FsBdG5fNfTbv5mNUhzc5CPPuzyzqsDy2NoBr4fAzuvCa",
  "key36": "3UiMY89xXVvpkmhsVvqQzn1uKoUeBdE5KUGDthacGn7uGSDp1fMvjNRP6zVCRd9eEkeB3JghKJTwuUMyFspifXHE",
  "key37": "4fXkbGfZvdtWYr7wXWThpkWFkjJrk4CTEeAyX7UKmF29D8YHRdGFdqPF4cJNq3NdPq8iF4cJtNgf2eDQZwTRDWUn",
  "key38": "2v1A15L466cxD7KnbZXoyP7SkuRhb8adn7TadKhC9xDCGGdTKSHUVief2fXz3XpLDxdrR7An44jZmRojMK6p4nea",
  "key39": "MqSwWhxt3xcjSaTgGcTNwyNun8BmQVM9fw2qFutGQLASNhczL8UwV3Kx9MQmJ4QVvXfcEh4ZaymA1Lp4SrxL68b",
  "key40": "az6rqRkqecaWY5X5S2Zx4C5D9vuGUQQ6s2bhU8fFowqrcVwWCJqmUwcSxo5nWCajWrQKJ8hA12XmhbzqfZ5azEh",
  "key41": "4N3ZmM8X52u2M2C2hrZ39o44mhJWNG8fn94PzYQXgXqc8mHovwwsijXVzyxtw5NDmqt8BPzqWvJTKhQfWYiMwza3",
  "key42": "2Kfvnv8Cnh2Jrnyua38qvbL2NKxq2jUTe2LJZEBzBcfDn2tiNLk4CHLt9qJLddoCg17fH65t1iu6c7AjxqyS9M9N"
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
