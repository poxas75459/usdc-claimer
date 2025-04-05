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
    "CzRv4tABeXxo6rVep2QkdCRAFbeBmZqp6j2WMNVL3C53uiEemTkKVstYEqS46cyrqyq8xFa3BVzydNb4uBDNabW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CPXnUc24m7wYeDeRvsM7gNsnqmSJmvxvAyym5b2Zmsbgnms2ygMoWwdLhnbvvDW9MW196t99qA4GVNDQWPEeV6g",
  "key1": "2vkeChojTxRYXK8wfYLxhj6KMEdf7ZsjurqzdXAJMSJMW3UBmpfoK69bEhT118MzyKBXXR3d7YMXdC8NX3YMNet",
  "key2": "4whiCKSx6tTTVronbiVKJ529h6qsirgNySYJpaVj4Q8yJN5wtfsTVEUdxBgVG5AM22cYv3koG6gCTNo4TVo5xUAK",
  "key3": "532S8qC938tLUKfKuUAXcki2mqPreovkksdDshWSX173TYc4GMhRBDhfj8X5XomvN4sKTTHcWPuyEMNC2RPbQheg",
  "key4": "2NrWds5duhb21STJsC6nTwruJFBXmMnxYkA36C4nsHqWoi6cCsQW39qRLRXHhMvZPzLJ8nupYLs2Mk4UH9ob2Pcr",
  "key5": "4vB2jBhUMGCjyGNY1dWwJD8fNdX1mQZgAvswpNp9u1VFPaWRLNNxM2hfwiwG5Zj75Kezdc8UuWzjdKH7hrp4DVXj",
  "key6": "4j5SR5VhhYmRVSNXTamrwyESFwkJwaDNu9f4wE6NBmnzvgzp6DuFjHonL1ShPCcBzaDDXNg94uzNbKsQnY84GQfr",
  "key7": "2MRMo9LEoBnQHx6exWqkncWrCqeTiynVQ18LozvmBof8AJsVXaCsfcThuR2MKPYGG9cT5uRu1dFS1SYuQ9rRv5Ys",
  "key8": "53XAqLbdS9NowwSo6bof7bnVvbeqcfK1KxPG7N6Dcp9xCdBWqV8ZDN6z4DoygLByTXwVzp7Zrhhi6XxowRicAdd4",
  "key9": "qJT5rxtBhDXqtvFixtdvQpYc7W3z6q7UHvTiTuaa5Gu47oM2GZaoM6AvMjxBew5BVnZJNGkHuuLqz4ZJQf8RBEA",
  "key10": "5fvy5wUdPpLSiF8pQJrqa7gvhzR8aVCcqH9t7HyxU4uxP63JMRM5gYWVjed9KnngvmBnswJC4J4ByRyp99bYr8KW",
  "key11": "2vg34QH8JeN29yWzqK8EvxoBRr1hcwdw6UxpfoRffUYVmFJkZ1BBVqbjEN7daZTpQ7ZZv3wRGUEdC9PKVEejTjva",
  "key12": "3xY9EqUtshqLX2hDvarmJA8oFKHeV8o7zLenHciKQS8YWddzLexDP9Z6r8vWg4P2hKM6EDdpTmQXYQH1gas66FWB",
  "key13": "3dx6ddS4aHL1HXywz6Vd1pkizqBzZcyQ9u9VaUKqXNMwCF78wQiBb9nYLFQd4NUj9fiMVSMno1LzqjfMD4WpqoPR",
  "key14": "2aKCg1xcRBhZY44C64H7iG4vNFaiuTAt856wWtBdE4sa4wZUWEnSWfGoLaaY7oVu7e9MDtijD5G27AcxaMAHMtZw",
  "key15": "4d6KktagAEJPJZhVeZYKoGrEkJbpNA5evVk6PU4uSjxZnLhz8Vz7PhYoWzYUEqkT6GyYgkiGuR1VMLPesaXyCDFr",
  "key16": "4xYTkp4wQXV16MftN6NbDA4w9wGoJiAcgrtDT8wrHiw7A39PoHFWDmUfjbKYn5vEfFqP14v3EkD5SYM9s6hsrQd9",
  "key17": "yziQficj9dP7Wk2tYqZbHBoaCpoQXdtdEKmDe2tdW4jMg7NmH9rwkpA99bNzDQ56LtCu17TBPYxUzkpeEdsnjo3",
  "key18": "2QZidUaTUphbgNKbyBigXPPXfwacHg4JizJdzYXkPZKQEx2KRapBj7PpTj8bqxXLsoNgrC1CHApzyNmPUYsmp4ay",
  "key19": "3uP3tUzHf6NUgE8rDUPceAK7yaq5Vy7DmcEt4wPHV1u5E1vfvTNbHFJoZJyvhK5Tva6kxCiGK8pjc3xNkUaiyrRB",
  "key20": "3TS97sa65p1VPrT94ajUPnkfdQwXZJyw8ZpeBvwxyr2yk5Lx5KEZ2BzY3VzZj64MCYZVNkCFo5fu4UtQ7ySC1pZp",
  "key21": "qsqcmKQr6ZDyuRN2EBqo2TbscAvfi1J2iLrmuGup2CJNNWTRJ5TYvA3622FYir5gmefjpc8dQzKvkZh2pfvNBwF",
  "key22": "4TLRAc3rkzUDFrrVbooknxY5YoTYSAoujkChCtnuWmj3wHQEPt8SyL2DF5UfGDFfktaNzK4wGatC8XDvz8ZkbWsf",
  "key23": "3s158x1AfiWWAMQgqmtGvWz6ub3Vy86DmmEuLbBF8h3a8eoJZt9ngaTGAuXzaKH7m3j9QjbQFC4fobyxYHrnqbtb",
  "key24": "59ndQiQPpiqedCLxGz7g7gGPYvLsbRvERqcJeh37HsmrGSvdYGsr6vp79syiUFCBF8upfvsxmajdZFbPtKs2j6bv",
  "key25": "dKECxDE2QUXXYrUFK6LLsfq41YVzRMu54asrMNGmHXewRXdjXXFF5zc3hwpVyTTCg5DqGo3jBRdkSYSoUP1RHGr",
  "key26": "2FHUmFnCzXuxvFjehqNNRsxGq3r3PGEFXcyTZhzxfzdiCYjvUjt6jX1SV1Lg72ioVMDe9huYzPAXdHRqtCRDxzA4",
  "key27": "5X9inzTxmCGPEhVw9nfaAMfYFrwafxrf2tVj1BTEuPA1tTqPurDYaWU2wgCwLKt5nkbrq4VG7QdJ1Qq9UEwk86D5",
  "key28": "4uHhyLwjXq6XwB1Lsa37Q5bSqn1LpLfFarUUHqShGR196XxSmxBM8gzh9KH22nYQ5S2xtcptEVgNQptfpqn6Ss6u",
  "key29": "3BadWvgAsZrYwoa6PoQ9Hyr6Dyj1RSWC8rqZiz8GkPhrM5A44wvzVhDBxAUNW9WfX3UNDNs1szbYC8U74ykongmX",
  "key30": "3XBRomaZBap9Uu2Abw51mmKGXrivv2ktdPPxFPARKroy8VEGhzraie3k86usuwbZ1jE1r1ys3VCV2WUmhTtrSqFU",
  "key31": "2tetuaXje1wr8vqb1fUCBKr8LADtm4wVaKMoZs36bnuLRTsDPbBT348H22pZRifyhELhDexF8rukTaSU7c7LzqHW",
  "key32": "84wvmSu9eahJpsWRexXdcce8jkzgYURCX25iHtLkSwWZfjzCJYMujTucmBnmfE1sk23aUG9LZLsj2nBhkaETvsP",
  "key33": "2CHWqNBeSu4WEViuWKfXchshfjfSeNxsGZGG2iPkrkhRmwuLrcqSvz8SeSEwEBLGygejrJ1NKYixpGb12iTweRq1",
  "key34": "5MJj6jq4a3cerajgyNA9Jc4fj2ieyMHmZg8mvMRu5t4u8nqqE1jWQZdgQZ3DmqLWaC3B1FaBCJgCjaki6YQ8ookP",
  "key35": "4giFoJu3zTr7zPN9Lccc51BXYguXthNGkfpmMjUQZ3UzP4C57Zp6Cu3giE4p9sb2DBur9bfvCJufEfHNgrNWh48n",
  "key36": "2kQrPT3QAJXieZxFeJroQ25kVqpdvy8h7XRgD99vdcCxasb4UXVZ4dLycDJrKpksJSQtMqoaqGT6sjbrM2zF5s68",
  "key37": "2EYWVNYqmAhqVjnkjX8rmqeDxyak4UjuJBv5TZizQBHPAECtqqrxWy5ywGjzF8Fg4ad5L1PTv4ekUoSJbBJrHqQZ",
  "key38": "51mtRezpJnY1kNFxdkvr4RMC15E6WkbWshFEgX1WZ1bHy1dyScFStdZRyLw8SzeZ3pZ43QNqEq6UXH2qZW6NXMtq",
  "key39": "3e7pqPhEeccpJTVFHX8JzF4V8uAFFTdNkWtYrNRpdWZUwbgQowXSqJiyB8oTNxYCz2cFypT3pswTVSGVuHiFrUN1",
  "key40": "4JjZRgSnXrPHMmJkYoFQBjpZqJga7oZg5jREU21beSUg6EtXqjpDw7iM97ipKHYL23ZncyZXQbgwvpyM9i98LCmL",
  "key41": "PfyHCSvFWTJe58b7FWooqUswE2DSk77r1rBjFyVFnr6Lmh1PGpUmszpGcLcFqJppqc6JhVwAa8w5cXdssDuiJay",
  "key42": "m8DRTaA5NggRKjX5Dm5DRMAmYaUe1VgVoL9FiDrL1zTaJwuGtNAYkL1NYALm1UCPqZXCfA1cELhLpjmtfLNL6ne",
  "key43": "633gL7vzdPaYnxFYzzpTut7TWQyGt7hKFM5NoqTKvo1Ci71eeyo5BidWtjhseSeBehRx7gcKqPydcqtMybPwjNRL",
  "key44": "5tSiSNLopvhu3V8QTaTBeacUmLTrjHiUTNVy57yVzZCMenztkmNGWfDadwi2EqC3JVR35DFdHynXVFHZsiU1cuuL",
  "key45": "vZbPumQXZb7hkCk1oKQuC4dDaU63KEY57DmYJj1D56kX893sYk7CimfLpdfk9ugK9g1eq9BLzr9v51jYEi53Xke",
  "key46": "2bwbBxM5N9WmQfS7M8fDd4CeYtoB61ZMNpaPu28RZHyv45Na1ywZPMeUjDuz8KyxHTyJk13HookvA7tmQem6e3e8"
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
