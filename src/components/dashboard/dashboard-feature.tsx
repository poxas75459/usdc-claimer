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
    "3Tec73RDcbSBQ5Rd6Ga2QQpUmv4jB8DV8izcMqrGjhUVudo3KkH7bKdqigfGfRkq1ZqGdXaS7FfarUqVWE7Qr3mB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fadx5WnEVfaoz9xfTGfFFVs7moiXc9uo8cG4L7RGULDZNqHMWPtH4irMCPbF3SbDCxcN4zNhgbKqfvF9Nhaqicu",
  "key1": "3PTCD5NehoKaZ51fo8ZBEASaytmiA6XbcmE6CKDcTvU77whVCmx612bf7WJiedF5RaAp7CZuJL9CzivgJ88UUNdV",
  "key2": "5qDfce9W6ip2yH45iALtqRrA43hHQWUYZBpRAJHW5eUthjuamFQ4Fic6YgZ5RiTjXjZ65TH6XoZE3Ab5wBoDvKo3",
  "key3": "MvBwkvv3TraAHiXFrYUSA9WZcxbtJwjrmQcFKcMNuiWt9esiovJA7cUXTH1t7VUeRidMYYLBDZuxtQqTku1hb9X",
  "key4": "3M82vNUTCHxDLqrxv4DwdevZzSJxu9jdVDHwDh5LNZLGPc9QbtGNW9s5kzHr9voRYoZKUGFudFEYXkM7yCEXoJmp",
  "key5": "ougnKhTBuU5UaCmgwuwxLUn6kE95ejw3Q9X9Cf6YaXhUE3zhrBnX1ufJHv1TN42jBavJWSxn8FvDsUdzZYrZ6Lt",
  "key6": "3kyK8U2wn8cDhkM3YjcxuBEKsd6D8cwHBF5QmDxDMj5Q8dqqEfVAfmx9yJX8VusV6i517kkCsQVQhjEHFAJUZNYS",
  "key7": "htQnEHTE6MXWTq3pvK5pTn5QnPVYBLmPiQ8iKjNzWQ7anqNR2gYTDxH9j2hMMKXEznD3H5p5rUrM7G9KkTzBagC",
  "key8": "2Vasc1WieCuLVkyGSfybyo8tB8twdaCHDCfFuPcHHjNRSbT4DkeNrViAcMTJY2qwY4qerCcu6YktYMbhBNZ9qf1R",
  "key9": "66BH5ZcH5mXiGFfhdiA7pKEKiPF2PM5Y75BhKRto96mFThmXTiP9t2sRam9jobQh3xqtMwuAHjFDkGtRxERDcMWj",
  "key10": "3j1ZnVL5UPa2J4Smyhpz36MGPWf9iuRwwb78kwK2jgNFA5LtCPMQXfKpiNQhGTFARcvNsL54idYtiHe4KbQj5iYm",
  "key11": "2QH93CFjFxmXGo5QfsVdawcQgFDCRgJEw7XAAhMe8DmLgKnhQhk8MBfwf56ak41SfPwYYvuSjhZW4AYPLNofuvtE",
  "key12": "3Np65Sig29xMLRDdV27Uz8ei1yKu56rWftU1rC2mbkzRreRM8c6qsDW9svnGLBB6LFmWcHmcfHEkJ2Ry3vWtPUTH",
  "key13": "3PhBt4REmHSHtiR41ffdqHKk8ZZc3ccCdJ28u28bgwVHtieKL1aGhTHgqNXecq6Mjkhnnkj7Gt2tU16TWXp1Xkwo",
  "key14": "4JyCjrWE1GV5spVEJPzufQLxv4QBDfytMwYcNw2mSjRD8insa25Yq8cgRDchncSg3zCxWC91XrzsQnt2z6AKUFW3",
  "key15": "5wxHvvndQKqqyWj15v9dkXN1m7y3dzQVxniUbfDyHryv4ef3opu2KdktB2rrkVes6uh7zvyU3a3cnwHQkvAdXogW",
  "key16": "3we5jhdUTwE9ZLwrRLqSM2tBFn2XXP5HDokYM6oFkV53dPX1VZpW2ieJPy1irFnGppsnNkr1v1Mg9Mzu2xm32WD8",
  "key17": "32paTuRPN1iH2KodB8w8EXCH5PUgmwirDHBZgP7TBia1QBYNzQzFX6GjbC6EjSHi4BoAdDxMVMTrf9UVen2BUdqB",
  "key18": "5Fq6jaRZGzfiwSntcmqJWBDTWFn7uLexCDrdb4ErGsJ5bS2rPkSw3CfCoBwzPuYvNCAtXSszVTKCsUNiHPLjfFaJ",
  "key19": "57cYjApFcx5EKtCKvkseXaDcZTeJP51G3CNyW9sVE9Gi7jNbaTAyA572AKobmcyjhaXjr5Wu9eXGS21bXCn5GxDy",
  "key20": "2pptjTiww88Vvja7QuUUhJHJ5r4AtvAEUhyKoT328hZ4y97WYPZc1wRxCmcrWiE4JrSZ7j3kvqLED778juMvt3uZ",
  "key21": "4YWqvZRZAaQrKLebwy48uP7Zsqzqh5Nb64TeTcHSYti7udLywyC5rBdXYPL2teP2Km6vFjQADeAsZaqxsnjMGf8W",
  "key22": "5JfEam7z9nmYwvdWBLx52E8cPKhyQjxRnydqPXNiD39DZK8sD2x9kGV43syX87LarMhhFuCRA8TUZoi2yv528qRH",
  "key23": "2hX3TpAa5e14qPdfGGEo6tZ672t8SCyfcBCebFdjtZVp6E3mvFAvHCZox82pJ88EsgFLJsHWJxs9EduGgdv9N6SE",
  "key24": "4xcSrYw71nrqqUT9TCMLDxnttfoBWdUkzANTQAK4gbdJ8sw1WEdKjqV9aPsQEkJusCkvExQsFJZu6peYs8jMDWGD",
  "key25": "292VYuVRBUr2uz7nzs42AdeCSD9pE2u3mbFNnvkPafbCLpyEA9rBtsoXiaCs114pbi3A4VonqYbAhSMd2K5i6vNb",
  "key26": "4CYWidcReVoBmCR9Zvo4AMEKEWsGx5ooH3bHiJkWuJmB2zLi3eZQiF7hDRccW7YbEBxoi7NvHi3CfJyNL4jaVCvs",
  "key27": "3QzNjrpBhViF3WDRynbaF3UGUHjViZE4qRFn1MMpcZwnJR7gcfYrmJjc4yuckjEd1zngHePijX3hKJTYeq4ZA3UB",
  "key28": "35tkGFaUodcsWNcT9MNvKoXBAVn9yxZLiLjNTMT6U7c2P33fPRHo1npeHgzg8jesSXAduViMpTpiRg481Ui2tEm6",
  "key29": "3q7hMod1wBkVunxBPzURQWbA82uqSbPRHjChRxANt2L5KcXkSsb8nNkT5HnZhPtT2eh7jLa728tH5TR9ayiAUbX",
  "key30": "3bETn2dwMzCq6cuWqAzrYeNBiBcVrAssf636uwiMZDsmW79eXMSoaRutgqV2JKo8yLMZvatA9YiBSfkyKETonyB5",
  "key31": "ZFtxe9fzY8Vra4Yd4ECXr8t9xVu9fb9zK49JwonWsxzjnh5VZ4u7ravute2sDcLXXeUMK8FV93W6hMTHdYjphYr",
  "key32": "51WSWVn1SyLc96iY1TK5oahv6m53sKqkr3S6NC5nqgH72rxbtAcZCrGPmjwrGCJ8B189G2jSMVCbuAMmucz6zQKP",
  "key33": "pVuC1CScFszUCTdNrrLsrJBLtAqAuFS7tYXqCDhnZybdv9sLCKZJkm3ZdVEPSasfzQ5hADww4upCzsw835NnyMw",
  "key34": "bGN3kvKYDhcJ7BKaE6ZWLzcLvMmYy1wgh9k9zFvGGkS73BbrXYcdtiNjT6My9aFDkjwxHpWCG21GgwGdtAvJxLA",
  "key35": "44f1e82G89VLY4SHyHG69ckRB9s3DwLYBBiQyZLrbdhpnoRoptU4FLhDE9y6NPfXrpTTQraZMmHooutiVNJMKgvY",
  "key36": "35biQGBxhUwhUPo8R1esYsQMMUFkRWM2zoDSWPqdFjvVkd7CdZqD6d5W2iowTnbWYnF4nfQiCY6aUWva55qgskNk",
  "key37": "4Bstz3WzgoK5iAtqKzZP436guM55JTk9wY4tQJoJgtY8BHvjszRAY99fs1tUDySt7kSPkTBJWvPrBXNfk1bTgqAq",
  "key38": "53MucS2Qxt4juTzKZeKWRiNcyk5xv5fQWasFa83nSqX3s2i9qPMJYJ22whg8To9fTr3KSAE2o1Muaqx45C6w6L8P",
  "key39": "PzEKcSWMpbx39rkePp5dAXcBiCxtDJSdV8DQKLfkonudQ4wn9XKDPLWmciTH2aUE9XZyQYsentMgN7nQqpTERK2",
  "key40": "25C1XJ1mLU91jWbqnmcJVGyq2b6WYJ7tvYfgddUENmLaTNgyPDPXovcivY3PEFLs5BQSufPva52txL5W5VKqpaJy",
  "key41": "3NcvkhYGCxL5Y6pq45TJWv9aiWW9ESgjBk9Zv7nmjshcMatULtWfW2KZLq4czDfAJ7RfkwmgWMyagJGQN5pp2zet",
  "key42": "2jvszdoYuvF9a4oTvFjEcxw2ih3DAiY2GYsC2vDqto2RLyN4PqCtx1HVcpncsZ5SgQXELqDn3FAF2ZW6w5owNpyD",
  "key43": "5o9jn8GsJoF8NLah2sesS7hQpKNd6RHJLcWMcE8nqJPSR1f1PYd47MvVkN8QHnpFc9wqUYC4fps1amkS4Lyw9TRp",
  "key44": "VGDEyArcDS4N9yPWFPyMemqkMESqAvARuiy7PqVhT9vVfWrddFLS4rrqXuwfmVDqmGqAD6qoZQkUEYxeP7m7Ru9",
  "key45": "5jRWWynKAhGVStLBMwp4PMSVQCN6kgN3VW6PnDCqDNW4NBSG6aLWuXrp5TobGxZbaUuja7KqsuzJ2Frt2aKCZUZ4",
  "key46": "2P8QmoQERariWxtVpSdkMdndwiWji86bQKjbsx1WyC4r2px6vwydYdKRKhbjxKMRBwFGfa3tiZjyS8hYnKFfW1ZR",
  "key47": "3Ec4JP5YnnMjVgCTj29Y4Z7KiE19fSPtGaLBdo65J3eqbALfxmMuGn7dA4x1o2Xg6aWNKxngS1GKPJp9EZ5e7fJy",
  "key48": "2RR1AxcZ5VCGULAXdjmwVN7eE4cLn3Ptks7evhcZnSGUDYB5cYneMAH7Q2FZm2cAYiRYEobEDYKdyH6hyoFK7oui"
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
