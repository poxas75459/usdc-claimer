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
    "5cJEgx1xpNrtP4aFZTUoYkrAP4gB3erqHzMUHXeeRJEqeTD2cCeVj8GJtjToWkCvZtjiPyWSzhchdwVV46FMvvmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ke6BDREM47qwBv9KP7Uy7SRfLHQJ2hfgtCFUdHCuqWrj5F9pNwa7X7NWidx4MumdpmTsjeRuRdt7cCSH5N79Km4",
  "key1": "27CTACdt9oMnBcMGYEZ8X6tpXYz8K8Br5tsDoysmZk3wich9spJYae96r4iJLHSD1eLzmE1QouhfJ4JFwyLXayAW",
  "key2": "4DgeenPwyVTNmjRseXwACRaebu9QSPRs6ms39r6qWe46CjpaLAz5GTxVZPiYdKfwXEgV7gzhZyvgFcL6k9dsb3rZ",
  "key3": "U5G4nZ4XBrMf3VvTZBLddWpgUw5pynFER6uNYeFtBJaiJVF8iAmFgZwenAtj5M82Tk9vHykBWzKscEmEuH5aGb4",
  "key4": "3mhJW5xSwhMxsi7aRiQEnDD7k9FaDrq8B23CARQ9xye6KrPG8EkQ9ycBzKauDeFU4SjtgkXapGrWaaKFE8p8zsv3",
  "key5": "4D6Mg2Fj7AgRdeUf41sBQ4sz3DM8nMHsqPKqciymuiSmsWYpJpCoUJUqf8mBwyQyRYF8rCnbbGgjsMYR3jzwrhVV",
  "key6": "2vGmLJp998Y2XvjWvj4zcZJhkT3Q2y4txY5qGmXvkQJ2aWvPH7kx5vZjVaYqpFi168dNFJK9k2PcVwqKfctBT8dB",
  "key7": "XJrC9jeWBTEKAxANFoPsnetzuceAfTsn5xiTKb2w1dqDwQYNyvdfiKyx3f9djuuTRrFCk6pcyat4YoDY4S72w5D",
  "key8": "3jLX2kN7rwm3V3SxBmSffgkigzEWjXfRFjR3JsKqHAsVsoCNhf2jj9GTxz4iwTVYwV1xdVhTiJcfpcfjpKopUow7",
  "key9": "28hjHKphtt17P2tVyfzyYNRAZtCyzjHJfaNzCQjgFqhC7AHT6knHp6r7JEpvrM8wRpn2LxUksLLTghnDrASrbX4t",
  "key10": "5v23Sh2v9R7jwoTDYnvFcen2AfaGAGZosnQxhrRcHNpPdhPKFe3KjEhM3jin9G9SUcP41VkKuQQqGoFc2yowKWkm",
  "key11": "4H4CiaZSiEK5fLdReXD63DV8LDcmt9pBZNbbHwPGmEJqUtLWWHd7hdo1Gxgn9ZaYUvkbWACK7zgVAGX9yAbXnoWJ",
  "key12": "45ZHCCC7WLPoTHYmHax3vm5KiTrBhVwGnBUTCCRA8Neigg1e6kHPsUgKDfpajkuwcKP7oq3Esj9kVF8nkuY1mQVg",
  "key13": "4uZDLF1EDRerpfhfyG5jEZ8h4tmWc2co4UY6ZuaMDsSDKegVK5iCAEs71iJz4R1wmkgZuKm9CbovxzpMsTDXasPj",
  "key14": "BFHAhwzWkeEBRBJERKQGKs34PoRaVYefhgiNN6f54fJ4urj5757ywSxgaQgysthF3e6DpEcg2k7z7ukWiem3WNu",
  "key15": "5xB4YxUUftLnFyfHffMsjX44majFMxL88w6pZnNh9HromxUaYriA1Ra1U7aUMQmvswgLkfM9vUmN2nP46W3HH75a",
  "key16": "23DxXe5cr6NBgPojTGsreTYdZMA9w1DteJLoTAA28ZWh3RcMNgRCtJCXdrge3fiktDAYwN9PTaRHEL4z5FezB89z",
  "key17": "5GWUJZ9Jh87K2oeUFcTbGZSXxoofYrETWv69CfwzzBfBE7E2Vh7VUiarjMKoBendtmuejuqLvZJz4rcjDR11a46g",
  "key18": "oYwhbQ7bWfECH3tsHGKfeh9jKwYN1C4fRtjfYyM3hkuMzNX2cubKXhNFQ11LTcE5HbgBbQ1Gvxf5wdvmHEfJibV",
  "key19": "34prHMF5SZCn694j8RwjcFd7QYuqv2RSVv9D1zC7eddGskGyTmqJc1UnVCZbVYqaqVpWpP8C5qLtzbMNEyqL9mPq",
  "key20": "5b9y6ASuiLhNkbGHUE7HXKideXGdtANjPMf7adGrKj1Rc9qWb3d7PwdxiG8D38zgQ3vZ8AzvrxEmKy3Xx6wnivFJ",
  "key21": "4tpqYT5CCqNhob2jKNGeaNQTUVx1VMJUMxqbqgmxg48ojGeNkDCHdqs7EkeBPvTYAK3ETF486RMyYr7Mx4Ntio5r",
  "key22": "2UenGY1iiX27kLr2njUqWRRUaiStHSC7DouNyGfggTcQg4AgCwhVeyuNZkU75Cnmh5MDaRXJ1nue8ej6PbsmmfKi",
  "key23": "53uDyBQtr4Sr1Lno8wYVVSZsrWN94eLVumQJoCb4dRM4jQRpWuzVZw4kUMNNnKdRYenQ9CiB8Do7g8YXBkgjjKux",
  "key24": "5VrHVLUvWQYewCZNBRfK9x513kjagQpBj4afCxf4JZDeATaXeymzbZTnWyibJWuECnwySscfAJJr284EQDVFckvi",
  "key25": "W7EXPJfs8L7d7G5z6uMeJe3AdEjdYmMLjCEf4BAnp1NDxCgq6VXNrLdWEcd3ySAH6ySVdBy26m3ocWHyWvf2Hgu",
  "key26": "5xthmVb9jjFck5yxhoZrdtNGeoQeNP4HMgARWm61XGMPGa1FgU56j7Mm7tieLQN2JVydBrek8u3hXLYeqgocCPtp",
  "key27": "4mXF9giXCyeTjNVXYj34WUmjyRMZEmwUz7vFDs1qbT7SY1mQfF4UGiwxZ41s8iwcWYVEkGoquAGkt19eRBSYkeM4",
  "key28": "2G3VpfbSzLY1GarrVXXyDk3pnvJMu71jPdd7vMiUkXS3rpZsTfCoTC2KQTdpMnwT8EZWTqTX7gNnXuwpf48GY2Qt",
  "key29": "3bXPb9TKGpW5Svanjkcm92nBj7FhS2ywmj5gnA7aLoDQCBGvpKPQkCgfzQqboSZkbFvd8AfLcSQ96Xv9mYkovwuT",
  "key30": "3y5fhSRZK1r4kV7M1mXu4g9AMkMdW1VQbWd7QxLcvCSEyeFYmuR7uxGLzWH1B5qxQMJJz1xfVCCrJuApxaupNt44",
  "key31": "4zN3zz9M1TbGt6ywCVjMM39rUKZUrggYs5CGb7ZJjxVod1hEtw1tDYzeazFVMyRScUDASbW8F4eh7oqd7Ycssv3g",
  "key32": "2BcT7Vw9dMfU4Zrpt4Z5LN5Qymao1wAo2e99t84joqUeQPUaGJfEpEVaonHv45wfnVVVvQzrqMf9o8jU7MWByahe",
  "key33": "5mAwwx9wDLtTA4eA9zmdJqWPEiK3go5qZQJKyHic1aPWjkrikWnCFWCprnPDeDUDECW86RM47UPpxcgwaw4Z7egs",
  "key34": "5fQy6u9MSZuY3gtMhdZZYsCRGqFiK7M4We7TRyYstz1ChiRRpfojAHSLPKJvQRr4vYwEYLiN3fNj3Uajsaf4SnA7",
  "key35": "4SFx4TpCCemMB1SR5vwLWJc8gWz5kT9Gh6g17TEFzCDn4oqgqbHkzSkgEC4ejdgQgE1xfXGixczFD4sWgUWL2uNg",
  "key36": "5ZH18hrNjsrNjeYsV6a28tw3zQT6G9ZMW7RGdJaiP2QTriQHwoShco3GurwL7efp2ZBijP8P2brHitR1Rb2ccBLH",
  "key37": "faETSNYCny7Xmf6d7zX2QiPv5sDVi7JRahk7PzbyggtHFjCP86tacJdZSYJNxWxcFMjipJNtKBeWomAnPcmVPwg",
  "key38": "4N7qgJAcUguWWbBg1tXtFqmbKZnUyLkWZp8dPqwdyQb9B2V5ds5kRDkZoBBF8UfuszpJrzY6jWtArsMW7yRrzLa3",
  "key39": "2CrTp3HXUjtAbZk9bSeZEyYN7YgrQmtK74kALkhPag2xRvBmofNTbBwDnr36ihAjErGbUPhtHptYHxsqgaZhAN8u",
  "key40": "4TCYfKE7ZKQebqiZSGRr6fKW7vGcM4NhmjzhxMevXS5uougSg3xcUcDDMVFD86m4h1u6CAZ2YTu8qN8LhfzPweAk",
  "key41": "5rGECLaHTvzH9nUAv2vBaRPkYmWhywArwxEByrGqgFb85KhzXMeYmogTX6C4rkk1QrvKDip169AsHwPULqyd8aK2",
  "key42": "4KfoHUHk89N465A362MwecAFDLNZr5r8KMteN7MnkDX2NAo15qWX4S8AUJ2Ma8zqwjJZZH8WcAAEdSUENvW2mmZJ"
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
