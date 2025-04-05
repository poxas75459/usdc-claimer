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
    "5TBGFZo3DYiiLJRvjicQpowz7DpjHrtgtpRTRNaiEgN41YjdezXrZKFMk8KrSAHD9RhHuKgwVEUHEu6ZreBNKGrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y9VxfLrH11DNHVohsFwycKdrT9nUSCuRr13opErAJBamkQ9tpnoc1dD1biAhMFB9GoPf1XDKwUmecSeaXbFz27G",
  "key1": "5BueSWywV7db53S9tjTwHVV5ogvaHRjykxfRN1s4HRCtGiNNLppvbotoSGpjocgZcq9MSaVfgbN7sZt47f5ePD8Z",
  "key2": "2Dv3PBkb3Tqh9Ymrp7rZr2fFNAeStJwKBB8hqBv1gckU6BLFG8DXdorsdKNsy7ixtFKSdTcgjJYcLRWwXN7NreYo",
  "key3": "3DctjyhoVQofeA5SJifVwpPNG52FS2EYdNeAFuCGTW8whFq14XRG3HWq3qr3oLch68JST7NGvDUnbhDRevrrEFby",
  "key4": "2R16QJAHmHYqxGomD8mCJfjoSc2eKPGFFjFjXZCKMKiMJKLm5bCVPzheNwtdX78RsFd7ayRW1yxRtLFEAugVXo2J",
  "key5": "4mKD2vCotSPxJf4jcjhXLVH7SNPn9XNtk4hUuzVmiLkqNKjXUmojppbaygMuTPcTFSUeoSAcV4Y83nKtbj5Z37bR",
  "key6": "K5md2tCznXai6hhrmYFXZ1dfJFFmGNywSjBC8SNubQHp7mmacUx8vd8TW8HFvtHSczLwYhWyE7CxGK7X6EwNC2a",
  "key7": "cZx9hYeFsFjPQTnqi8FYNoGUy6UfKYxCdqPHjBnDcmdSjyFp4LwpkZXMNJrGzZC5QD5MnjdT3gjY5HV7RApiN1Q",
  "key8": "5ns2iTyrnDPHWZByXCm9jDkJk64SjEdDgnZQyeieQ9vEDgPxMivLpvv6pXTnj92cMJr8XLgywXMFm7fzmL1nvih1",
  "key9": "cR6ZpCENyxaqV7syXroKXtQNyvTN2sVfhpb6XrrjgiZrytWPsn7GzK9U1ktQWe66hKSgaM1857TZitsoBhebMoG",
  "key10": "JRR3RK9npBHrsx6b4WpPxStKBVZtuzhQ3yQYC98e1TizzKmoXpHKPmP93KWarZ6B9gj9KVnBJteMTF8i4kpLuiE",
  "key11": "4rjn7925ccgVb586YeLk2JF9eGVVAgtHyoCgSDjpRGcwnAvHVkCLiLhDvr7wx69ySNfktqj1ERCsGuRJBujoWnVd",
  "key12": "3PnYTggJqAiAe8MbF7khQ1x97XXajM7aHzwqNMZQy7uBYC4WU1tXiVvQ9gg875Ko62cHJDJRjEuNEtjayNb1Myhu",
  "key13": "3sAVMyiQRts1Fxv3pXGQtjq6h4GDoCEdoXGPVTBYhN5LnwLWPdfZSRYywPvw8iE76z6kScJhThFRa2R7QF9YLUpZ",
  "key14": "3A9dCUaGwn29PQT5A5yP1dTBKGFswGN3Qxgqebc1hExrPFjU6itxesRpuK4833PyaGZEb97PYSqoU32hKR7E5H2H",
  "key15": "3qxcrbUmfKM9d4aKpAJx4Xx9pasQkLuaJGZX6SottVnFmYXwD8HY3pMPZXvaiF7s8ECq5R3TgQFvabRES2d4RDks",
  "key16": "5ABiBC8xikYyFeR3xwrF3r9SXfaQWE9JfNixpSpu5QFgZXyHwTAMK5Ze5VNK5Uhj8pMobeyE4F8U18ChH12ymv15",
  "key17": "5JAbNjZgzjqFKfTzot9KNgiLZv24N6tjQnAq8932eUhtzgEZpFuvoWkVf4apKkQkUdgq5KjQGJrGz6SXBJogJapD",
  "key18": "2AjqXHpHgKHZaFETnFun55s9icXHG4y1om5rKGCsWzZoFxff3mNNhSKjsAm2Ei76w8MZadQMNS2tYy1YNbKzVXPC",
  "key19": "2axuEiL2Uz1TkeFFuWWbX5eUoBLTW8bnoXtZYfN74bLYnTyQm5zpMnYL6B81fKNUJ6zNLnTMvFHUd9wK32fn8qp5",
  "key20": "zpnBVDH4doUPRTxkUuv4zg3XwK16y11asawUQt1rXyCEPxMcY537skR3DfMptqeKqok6iRSPaDBujbnJEkrqDVP",
  "key21": "3tMUNvSMwYTo249tvvjGR4H6arSnCw65DARKBuGqvskyDe6wNGcTQB9y23dhUToVaVGoEWgdtdBbyE9kgRFFyb1o",
  "key22": "58jgWmEFPMUk4jPnPz4NfkHbhKA1vnKgDjPjFFGKtddsvRB3RXn2WfR7ypPEZF5ftcHXR2W7Wub6XYpYT6EVyEkX",
  "key23": "3xCzufBsNK8SxS1XASjgdHF4jRKd6LCp6APUMWPopEZ6xhNPUWwSAQeBkY1SemnyHJ1BJG8S6FZpTWV1aERoGJda",
  "key24": "5wKJJGYkt4aoFP7HHzZAkdQQPKJeCAUTmX3yqv9a4om2c4ia9nWFgNUXWesJgKuJBfokrSEDg3xnM5oK9q8YZX34",
  "key25": "4NJ4dZ2Hyjjz8VU5Y4oJsw5qnUks7W8RaBBWTEU1SVqJjpMxRRFNb58LFwMucX31PHXUUctMDxga5YBFoMMCMKgw",
  "key26": "4MpzbwgjCdEr6SecpNsGoDN5Gbpv7sL2P8PV5Xybc9edZD4kcoouevaeeM4f5UuYsek1TdiSzDhvSXGaXsE2nPdV",
  "key27": "yc1uD4wSrpUmg7LTKDzRQXqxEEcap5TXJZc2oukdrNK5JLX7hmYSZG6jqq6dYhvA3yRkCYa75BwTPbSjQsf4UE8",
  "key28": "Acc5tVf6q2fKNt7hVFGw3dP6i5senSBEWuvfAAeFoc64NcjkPXNqrWhgcBek1zaQz22S5akV2ijoWdLeN9rA1vN",
  "key29": "NSeeFjUXSUrxV8gDYo4aB5wvwxUeSejMGPJ44QKVmE9yo7vmXr9PD2ZcqvhS7qK8K9axajnHfGwYPMnKfDDoujV",
  "key30": "22y2orQLpfzjFjcPutYFfNGUsQ2mnvJzyvnP4FS5nGvLeYDJ6EpmaMLAqe7iuLiCNJTPCYHVwWm6T2VDt6fd9tgX",
  "key31": "meXkwAvXE48cDp661CnVbDqDAbCZ5F6xZ9qmuJELWD4TGEdnGDUYxp7wHHg6v2tz8bgjstMsrmD7bTSuykirqJr",
  "key32": "JxS5QoLohiAVZDrE5GCCoYyfx1zEsRs8Enk4AfnMBzLJfwZu4kxhe2zeYfPtr11QpQhwkGwfB3gUsNVTBARRCNb",
  "key33": "p52M6S7Epnmayz53pWxua3fobhyJiLC1Pc7FmbBWmE67hAhevspKAGi3fqv4B9qQ6k3awr5GjJFKUfXgQPaEybm",
  "key34": "22vJAYqaqTpsxcX3oo1oZTgq4es5Agxcn9XaUv6dV85P7dWSyJEjga7EPPSAxFuXiFPXpzpzkkrV2k7erBYWie1X",
  "key35": "5cWL3WGUc7h4wraTVF3hWym7CeDeXZLZh8QW9wMNe86cZv9humNvPVH96BZDcZHdrLu35R8hXMZLKXNipKcH71fb",
  "key36": "4AneTv1VL1oiKdDENUDhSBqRxxYUXuG6i1tKin25KkFJo37T2UbVFpPfXsUo6872GNRXrbMLa5FE2cqhj2aMUYJi",
  "key37": "FbGEzHWyKgRUYe8iXHfSTTeNsj8CmssGY8UePDgFuVPF5dcMZtbrPvoaJiPFy5arDtA9tpBijv8DQXHW8pqtrF6",
  "key38": "2qWfudbZhqaJCfUsKUhccDNN93TeoeG8NK2DVkGMxu8EMu4a8cN2exoy4NuZQWRhGZ9sKfE9EJGQf7BfGxyZX2Qv",
  "key39": "5Yc3sPSvCmofztS7wz4XCjhfgR3qWG2UnyT6TNzWiHCzoDLx6sRwHzMcUVSfXAS2kVKaAbCqwvsmoc27sqGCCxEY",
  "key40": "podzVX8oDEyqyg7nAqgLbcrUdhKVd9rwfgk1AcUC85Uq6aTK6KE5EXeUyVM7VEkwV5XVu8BVf6mg1stYaHWNpLd",
  "key41": "5UANgTPwC6WuUT9MPYMs2gjcMeqEBz8UjT66U8fmx9PkgmRQhk2Y7ZiupCtCHcZ77iCF6P1Rr7JV162MeuivDNmF",
  "key42": "2Z3Fs1Gma5JreFNywERR8FRv6G1wFNdNaYsHdrQud3TZP9kFUKzMthwVdiw8etVV3ScDYenmVc2xJp3PzgsHDoG1",
  "key43": "5wZxxG4JYUssV468VtUYFhw3cuRQLG5aK17ubdkkjWtj5kNuabhSK8DMo1Uverwc4m4gdnHZMoEGup59nDbiLeRv",
  "key44": "3AFhVhXR266eUZYJjz7ijCeFgAiiXwurkPoChmWW4WLAhuTbL2btZ6CvZ8pXghNTWdXvmJCCKX2C3krr31avtbj2",
  "key45": "4yvusbT5eeTkaPTgRrpzFmSAfbLMy3Kt5iXbeNy2HWtuuHb4RnabkppJYbKSnzH5EHxpQUZQNLBdahFqxf4F5mHv",
  "key46": "3ftHsWEGTtGQELaJGJeebxoEJZY2EDxHBomipTjmJccF5WD37wJSLPtsp4ytcTeJ2bo1GdrEs52CNiZHhq5Ngfkf",
  "key47": "3Ukd6deHGoey9n2Uff9UYpP1kSJYs8hGAcpEh3EDa11b5C8EKbjAXAStsoVmxvKZoiySUnqUz11S5oGJARhKaPe7",
  "key48": "3sKs8Hw4wGoVow2QFHFPK4Sm7au5XJbnHkAamdHrTeeRzg2aA3GY2k2V9Fo9vDzszo2niTTS4s3NsMwd4mEoyeUL"
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
