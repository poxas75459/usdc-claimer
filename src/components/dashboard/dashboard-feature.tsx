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
    "52rPZaB4jtgBNwvVG7wTh1rDxe4zS6Vc9mp8QP1f66JTj7GoecaDYysNRuE9e8N7qfGDf2YDcjz2x9AmXs6F9pnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J44WhecCizA11hJKqQSTC2WVrTSSu29uDBY99Sgpm8cx8cYpd5V33qSjitPsznuK2Ex2FKvZwMxPV1b6SaFiWZH",
  "key1": "4FnsCMH7TkWPcZXWnLsxMssxet3GyvzmxGSF9neKAAoK65q2KLzrRsPgh9ZWked2fERCjBDcdiUVGNKteeQHepq5",
  "key2": "5JYBbD55fotBtaLumcPgank1B4yvte6oX4AbnUdwd6HiQoFRYgUTNxreGJ4ixBLvvfJqz3hi3EvXbL4nXvCyXWtB",
  "key3": "3twQznMknzpheHBumicdYdPvAwdK8LHTQkRpGEWsJhG87NzF9HgUBFDvQ7dqruMSp3wiCX47PfpgeDsBgsWdAfxX",
  "key4": "517ky2Bsuwk4A9S4uYKx8xV3LEpk3nX9w5hNniK74W84wF2SX2n5H64piWE3LwEEm2DHfSWQyyDGyKtMF9fXE1nu",
  "key5": "gNL6jdafDz15ognqs6GuQGm1ds2N6LDSeGjaLPoxwmtS2cqLCJnWknfrEAejXtcg8BJjA89fSy9JQbRZXp2oL6V",
  "key6": "qzhjpbZnh1wQkHWvu4CK6yxeqbNGJ9Z1HAHxTvsFfLkdzyPfS2x3EdFWhJzUyEyMTc67P2ndcqt8fTdoJcgwhG2",
  "key7": "353oAktfjxjY7ufxsJVv8ADSx16d3boNGFWwUVTb9i6ZNPfbfn98zyLzTmmS9d7L5Sy4mgrcsw1whFxYaL1hrcJc",
  "key8": "u4SD23Un8HekWV7iuMCfeXuXvbLwhjsjLj49JFYFyCkfLKaQkYhEcetLrjRRnmBzt9Y8N6M9T6f2E58Rzc2ZaWD",
  "key9": "3so5BCV3Hq4txiV3PuNg9RSwA4VAoLnQeV8Npp9z62MV8HLWhTGVHLb1NowKjTbGpsmfigUFctPkckWS6WVs6vkz",
  "key10": "obEdtFDHpCvWdDvX9BrxSGK2gnKXfqts6yg2ndMmX1kVqQDij6SbT1MRLRqQHzEZukZftynku6zF8gFuAfgLAzA",
  "key11": "26oKH76egZ1itzRNYwv37gRyMX9BpvjE5AjNpTdh3UxrN2VdGdPHGoKRAyiS14FyunynAt9BDVoNy2aN2NMm7YRV",
  "key12": "3vDSZkeF8mvucosMpMmFieDd74pkqJU1cKdwQvsUhTTytoZnnEuJbKnSoAcsvziaGgvs6ZzgfG9NZxYaAwD6vQmY",
  "key13": "268SG4PZ6RVP7mwmyGFQ4V4nJmPxjXk7qX8hMfpChY2GoJbncmSRNmKZwaJRupR3x8HrgLy1goxjF6jxr3zs8BPT",
  "key14": "2H5LwNHZ6bkv9X6jLzy1vewEZ77CzKnicz7Yje7WepofNSgxhtu8D1FXg1Wi719Uzzse9nDkrUnzdLYSUUwurBhR",
  "key15": "4VtrRQy9mtZr3n9ddNr62MT1aRDjNrTJhXfTZttMpeB8nc9kXgByehPE5HNRQFryAw8Qf5LrWvpgh2WsidAnPFqt",
  "key16": "3X6g3AeTPVTmj1zhzzEZY5tzUZkvNVdXs3Wq3MdJyHVAJr3wVHbdzQ5E23K77RrXE4eLibBSujF287kjzdUhv2Vd",
  "key17": "ZHHPrvX9zbAdf5ZHiMgcStKWsvgiX4mGRDzKpFBFVm7nLQS3qzHFLbac3ZSqj1HrE5jSqitRJpQvbQaZSZ4fNSZ",
  "key18": "4Fgt8CtWPETx5PGUW5xJK3WV7KZMMmfBnYeCarPTGjVnCCS4cV6wJgFed8Drj67YNXLLNx52aV8ngj79z4ubKcZR",
  "key19": "2riiaWphNK3YoWaoHFsHaw2BaUdNhm7VqKEVMd6i2qZvCH6RJywEZ3dGEsrsA3SgP9JkBKvvs9xbUcDyCgYjYtct",
  "key20": "3vQNHN3BFechJkoFdwxzGXaeDEN1HMaTe5waNmMqL5pVhNVajrbxRx3q48uEEznsQaz1jxJsMAK3Eb2t4BhCREon",
  "key21": "oHth6V6fxVCCxQZAdADiA6HuswsRpRTbVLRfMtZY3ZoN95i72xPwtTgvquqQaivGkjxNKvETZojH1EQZBbMvccK",
  "key22": "tS8uuza9yTfuPAWK6hWqtSHiM1nTBfiSYfNmXaBpwBXbuEX8EQmkMQHXn9LNHPdDxCo2YHJKCafUYfjdbDhJLdP",
  "key23": "3oMEaW92V1qdzmkdzZK5Dgb6vjoNE6Eqf4LTtZepE61mQm7GNpGWWxxJunGVGSw4duthtePUX6wRNNZP7d87NPKw",
  "key24": "5SokKDvQUbiGMdgYtw97YeL4fep9jxX1bUVPkn5aDkUZGEoAMAsN85kkw5wGXSexp2zbAYPumX14se69T67uaiWc",
  "key25": "3AWczJmE4s3XCvYc6KWigFnPBToVYeMB6JRjLN8koxVqjVooe6e3Dy9eWWU6SRPn632HEFdFUWvLMYHJr6T84E8o",
  "key26": "dFUmnX1cKVwGGFTBSVqZYMQMAbzqp2MvA2AtqqKvEceqtdsNuNfh7fAcfFqcFGW28pKhTVyUzEes4t434F1zyKi",
  "key27": "2n1zXpydjaWy89SaLDfvgfefaWr3qLAwuNZyfu5E6sunXiFYz5eJTGfzf2q8ipqaWRKCmno71umqFbjzi2ncPB4Q",
  "key28": "7LkxfXdQnXum3cxZpxqJna6MuWT7QRE7SVAk2H3yESqNTFTTE9sYzfYFtsbz282ZdaANYuHS7psxxguc5pJfVLf",
  "key29": "2YvT1L9s9HLJuCEfExB4uG7HXpRawzBFrCoCJNyESaDNyWvHAspeYPXe4qcBxUqwxwDF6mZKScJVyDRnAAtabjBN",
  "key30": "EGX5pvPmpLEs2hYprTB99mjBHpQ476usDskELd6ncrhhq493wec13JS4wurSt7Qs9nmK81gcykVM9iEqmEMRLZc",
  "key31": "2A593aC8Y5uGcFYYNT5EezCzpU3svJobGEDUqftCYEngEXEcWd1DBar83Jwp7arfASDQ48QFj4t6L4VKUtNgLXuR",
  "key32": "4E8ec6EWRs8maZ9MyYH794oVk9F8RsH7k8tn5NkdokKsGxAxzCgyVvrQWE9GdBEn78UxprqxSBvqSNQxyc9Xm2Lh",
  "key33": "5qaBACzkbHgK4VRiCC6Y7KsjUnHK7AWELtvDSfrvseEZPeBt69kJhwYTBuGscv7qshpbBLdr656Q6pmgYuBPEqCV",
  "key34": "5hXW1yZ7sw2BZhSNGy548TcrxE5BrE6sN49GQLf5s5vuJjYurZ8uSKoUi8rmP7n9MFQoSUHFYjzCLCoq1e3vDkHH",
  "key35": "Akyg2zMXS5KLm2J9DP7bfP5qhuuGSAfSZjtRoycc6BK2sS5DCpxXbnRRM3viGS4o4rqr8G4Zd3Cu6oTm48Zt7vE",
  "key36": "29Grj19weB6LDGA3tVS6YfTFJ9PkhmSiht57fmHBVkHFm8L5f9nep4PkR5nxLEXUd4SWaGurZMUMPGxJtEMQD3Zm"
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
