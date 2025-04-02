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
    "4yFReE3kG1mSRhABfrZpEWJxLiyKF6rSyw9bk2z855poaSiVmYPAZF4QMwrCCwtuKsaftrFx4afL99vfjQGci1ZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXHg1cUA39X5jfJMwdu8kQXusbXJW7XVrMbsgyVMqKtqYCPMX37wjqUDjbiAbT565Sien6bF1r4d8sGwAhTZXjz",
  "key1": "5HQg5vjaRAPuUFX2bhsAthrNoGfZ9SgNrrUqzJFJyFPqShze2rb3vgCQVYAeUDYfguEJNrgJT5sru9MdXz6qDwGY",
  "key2": "65FR934ot87V55QmDPWegc2DLbrt9PDMdHQTwL85njUv61LxbxK8ugUf5Jf4Yyx83CRUdg5BttTGyLYcr9aAeabS",
  "key3": "4NmYm5M9dS9dH2hUbbTQh3cZnqDeUtNd434ceFVJRWRo1uoqJJnMxjBPNiiBq1YzTSA4x8qh9CsCZ8joY81atcbg",
  "key4": "3Mq4cT72ur58qEnYeDzdmdi1vfcipLtEpuQgPhCTSYH9ifas6S4e2cDpm9zYUXg5Ggfa2aCPkYaZBTuhVt4F4MAv",
  "key5": "opmnAvBWXtWN4pcrKNzg3Phw1oZ8xrhfKZK7YPdsuKsbJUf6c2AM14HtLJDPGP94FkiRaUt3p51aMB8fUzR51je",
  "key6": "2LbuNsNeJEta8qWo4s5fKeipzsJoYPLuJuHUmSrYLWjX9KnnUhHGCFt26jqmoBBk16eXjfB6Y7yKBhB5LNzvrbxX",
  "key7": "5ha8WkzKw9rV9QUSQt6G8uUQ6JpKRfeJfeLmxRTrSdyxUj15DeLDvPBVrTJehgYA6SbZX33hS3DX2BC3vzZsQkNS",
  "key8": "2NYXDNyocSLBqFsPCDRrsP88ddGbUSmYE22FG8UXTcgrmAt7m6Bk4zyK9JALU6HQdA9mrBEQ42FuucpFfHaUSN3b",
  "key9": "5jPYqoomk48nxXPRqqHVNcRfxqJKy3XnMD5NPMCaHWfoZXVtuDzBTBaiytNQJprrFYVCN68svKGoQN2d8ydt3ayU",
  "key10": "KhxFGQf1G3Sk7pxrVHbLqMfeu9uMoJDjgcCv7NyXBnmN5DmrsMZhxzmQYqpk5k9wWXDkG5DGpybePAQ4FzWYwSc",
  "key11": "54ogTRYFSjQMGmo2F8KN6r2n7zSZrjijyKFm9kKMFDErRmkCvdSt3SJjTGGzMdxYVQBztb24DdTixeE6fw4VR27B",
  "key12": "3d2ouSRp8LUBj34VD5FbcKapCnAYSWfJrHQYTHAz9xrFCWyZ9XRvK3Y1iRVAFaXR8Hxr738s2rqLUfGFe5RabiiL",
  "key13": "4pHwMkBwwxkUMstroHaWin23CNCagp1mf7tm82Nkdv52TJeYxFkfzzPLN8iB18YJgSMDmkLwdHU2t6cNzyQ1WA2m",
  "key14": "5kQukeAXyR5TR8LU965JeG4V1r7uPbxzX5yNAgUHqnLwcT5vn1AjC922ocAqAnaqMPLEJ6kfSAHeEHwtC2D9vKSp",
  "key15": "Dy6rLz96Ldg7qRcgTPEDJUwaMqTitxjRRnpwtsyQh7EJjJex3wjjZhE4EvEKb4x2dfeFyC8uujoetqiP7rtAexx",
  "key16": "5gDiykKqh7thjmgGy3J3ySLhjC8PcwhuMNM9yFD2ecqzySTGxDTGjYsv4E4ibDKTE2uCpGdDCuVfCmi6rrq43stR",
  "key17": "3vuKMefUmAchg3hhs9xCaqW1DxZ2Mq6yGXuRXchxo9AnJTynuKjE3e4EUeT7o7uDLoqr6EqUuqR9j4FCpzYVo7uE",
  "key18": "2VZnsJ1ChMnrxGFmukJeZ5J3Vg1WTggkPj8wiJac9Zej1izBoxhMAL5LUAdpF6UXfXDwrnZbucRnLtxT1H3VtR3i",
  "key19": "2s2AH4rXFRh1F4mSHtKk6fSBVM6eNoSqfesYwT9wd6zrEKEAsGAkSfUHiCzzP54KM1FPWsw1Hvf5qYm9aN12Hxbf",
  "key20": "2NMpxE9NyE7uFFXQkLWwJpjxHj8Aw71jHYDZ12TT6MMktd4rJyt22USiRUA5wLVjsg9Pwrd7MRyd5gvjPFprThCz",
  "key21": "3VQENSayxuGtvgh6E3FCt94sAxb5BjAREr1GeUtj9G4fiFuBz4mVeSe1fLU2JF5TsDsJ5L4xvQCf8yRcMhNNpzXX",
  "key22": "3YokhRc1e79fpJ8SPPcv4VC4ikYh6F2eyuqvzNpRqCLPwdTDUMsvQsi5vgeiigHzoMBo7wHLdTB5qZzxpGd7BY3H",
  "key23": "2xvk8YVqZiHirZ4nj6DN9H6XyE4kU7WHr2yFh9WtxbKSyUF4rNJk3ApP6LZyjyawHYsNeL9z3zyLMme525NQpgqS",
  "key24": "5KEnESQhmWvqwjGxvX9QjsUaPTENm7vHui2YS26VXQ7u7GdLJ9L71To4aXKSfHJutLRNJ7rPvNuNwtA7QoQW5yB3",
  "key25": "zzzWBSt6s9AZy6Vdv1xZksZbQB6Q5kyKWyggB29sP4jpiyamNfSxinnoGAxmcKEZhXNMtjhQqfA3mfph9p84JJv",
  "key26": "5uWbL5iKdXbHG2NFc8sZUfb7r4HJMwMJdtbJ2DGTB1rMbcY1mefUK7HKR6N6rNtK7v3tDjZf9XAXzQFTjGaNaPws",
  "key27": "4DbnZXBVNLNrQdj4W4bgRjsrXRSQvLxJpdw55h1CbAd99TvNUCHTvoeSiCXzpqjsUYrWsokQ8yiJRshuibovipRE",
  "key28": "5bYfikJ22N2qjLcrLkofbj2L9HDtCTtLNLi8iWjsvrQ4hQg5PRrqXeXa5nK5z2d6ubu23W7SQMvdjx6JHYphwsR1",
  "key29": "iAf9CAigb6a6XaYz7XkULFEtNdkpqq8affJHbEVseATyww7fNHPX5HuHCyCKb2JwFCG9jCXxxgXWiSV1Vq8kY3h",
  "key30": "4B8wLaJpfhWfYi44h4d4PdHtfci23VzYSwx5ZKVpk8SJAj7ouSHj3TYoWCpitwW2NoYdPArpdtPSCrmHhno8o8uq",
  "key31": "3eFdghpzYVtGr7BtjDV7mvXZk3SDWmHKqHMsvzSfbDZrZFMuRDYyikzjU8MH4w9FpexMu82RNk5zbduMygi2raWp",
  "key32": "5k922u6UcUUFM86x5YEAuZGQHEZhBYgVQYXgCzKkGKhhYLzy6rZBHPtxLGPe8tnCkpbFkz29netmGaJGeqLv4UQ",
  "key33": "4koekYHfLUwrRMVVLdhWr9iEm9HiEqcsrBcxDaYN1EfXwQMb7wZbk4pFaThKTc3ySo5CQfxbiGwbsNv4R2owAAep",
  "key34": "4sGDHgaLXcP2zcerkNWjkWEoWtK2cLmy5tzZo3Y2CKezkRs5vkJmsNniPreZKewac5yFHit9SjpyMyGY8yPFe1Sf",
  "key35": "5B973a1JcepUKnPLM6GdHhpsyLn472e6qTdX9EPr8YvfhVejvxVcNuMp1HLWzR2fzyYZ6SVWFa59j4vGBi5uhPCV",
  "key36": "4a9YYCM5mwkcXDFnkxy4FXKpHTNmB3hiD3nrhuCTuULW1N2J1Ky7e1Q9XaosaHLEV5FYLXhFs2Eii2ej9TnMn2sc",
  "key37": "iacEjMmjN6DrSda1dBskLeSiLr9vohVxbCdDDCgqQB7xo8e5LPsFQgPDdkwbdUSTThvpEsJTcGnS5WB4f3AAmAz",
  "key38": "2BXLF81cW5gmcmw1SD7Wza8nNZS5hqRLDXxuJ4eXLh5jwd9ahhwfMbJUo2eF8hURkDMDBeWxnc5oWUinFUN37H6V",
  "key39": "4a8xsoJ962j7WVgGkNhEMGBTKmgPj5njjLHHSWS2pbid3KnKDaGwEVxU8ifqQFk9eynYJGkA8mRbFWp6mF9267Ma",
  "key40": "4izkv66CwZxSSBnjKQF8ZyjU3vHDhaVq4YoNrWSdr4DZf5CuVMwk4R1LztHRAjsKym4CgwzfZ5qSfXfoaAr16jGF",
  "key41": "5xXLDD8h6c5LADWvD2e7sSVJazPwaNkLH8SQgzUuT8JJVwWCAkupPbdtY6d6AcyasYieie5BczKkof3rcyWX39Ye",
  "key42": "6CWufhxk2xSWMq4BNjhf3cMRkR2j4jCoGuJHY1JSdbPMKPf9bq2C7jaEfvM8D3QTcSFfp11KcDYL3sSzrTeZAXT",
  "key43": "3orHpF9BwiAsLj3fzpaxJSeVfvFFoAFDdv9Vr8fUFV5mDcLLSS8JpkikDfWt5JuTPK6Q5W2PJHjpRvPdw7xyLWzo",
  "key44": "4m8qSqGE9KszJyKPqdHMx16zsXq4REQfokNJk2f6g6ZHqdYeGES7GwcMRwZpk1oLPN1eYJS1BfwZUNiwDqhmMwCv",
  "key45": "4p1Rp3tT5xX5ZozxTnQBzizaJMk2EYzS2vBkNLoWZgDMRzMGtK3DEiRURCTmULRJttc9jsMTeBD2khUzvEoEgaRx",
  "key46": "5RsPvgBhEj5c9usyXEkxH855XxAJjpyauU4cBXf5PiBfs3bsvCPjdYoxXbnVL9GwFGj51gXRm94Dej9kqppTNBY8",
  "key47": "5WmyH2eBCJuE7mgEjvd8ibvKPGSrXsjM9fdzfvCm9UonmCPkbig77u2EvJjqLxp4a5YPmL2JRWiweULMC1vwEmkj"
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
