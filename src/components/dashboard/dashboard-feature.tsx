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
    "5oV9N2E9GjYBARD7WNQE4ZDVKUmxpL4wy523QgdeZgsyufvqDsi1Ni2MJRQUWPRE1FNKQSdGbYprtk9S3ZjvpsnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K73G4fJFoq1oEpKGPsat5295Y2NPXSgBYAhjoWyMBzFPA6ngSTfTq71dsRdfAFCZgb61eN4K1kcYkmt9LXP8DAh",
  "key1": "3qb9Ug1wViwU4yrRxsy3kHd5AYqgpkRK15G33AZ1tUh4bzhtfnrdYcaEt5SHMHohZz8SZS1Vgt9cNMgqSrhxPVVK",
  "key2": "4u1T7xJQJmRUsxjGVaCkqvR94LxG3ZgVN2F8DFe1KK4qZcrQ773iavqJ3AGUbWTrFFjJFpJd4fuRKx4wR61Q5trX",
  "key3": "2UgZN7P2NvXL4t254tn1fnG5QjkcrYfFMJKnc4zDar6nsiWoyTeYnqPKidir8PFTaoMyubRQEK9VbkRgthnwiH3Q",
  "key4": "54MBqveiR277y1Eau2AgmutavYQ5tEwcENbAyj1q6BaWCPNK3TVJimLg6aavvPcJmTardqi7NXUkzGuPLqSZKnqq",
  "key5": "3FtzcmFDHRd8G71feUPLS23GLNrFbQGCEgHMU6hcRtfDxyDtDBwnvCaYoWqEpAcHBDR8CqMXLLk5u7FnUnWcyBqw",
  "key6": "5SDQggEZgFQRvNetG2LqKQrP3B4azSED7KzZsokK13pDUaESMaQBcK1zwqpsHU7egqZkhv5xqvE8Q4jVAvkCWi59",
  "key7": "5ncowViny6whbPj4fpkByeZrGKuMJgLKGeVu5ELkkzCNJ8vJYT2a5Vru4BTJoDBZh7r3FxwDPdwKzVqAatB9E3Yz",
  "key8": "5KTbvMhKPPE1MwsUhrrnc31xeF98oyLmPGe5wREJ52r1P7CzJrgu35CxWoJCeehsvd8MursioAtU45qk7WHSmyYU",
  "key9": "3K1qY97jvwD5b1HmW63rzErbZMMtLcsxj9TcgpfuiM7Cpk8h7EbMTMaGsxGKG5mWxKuEfXHQ7KnHe5nvEqVmuzn6",
  "key10": "2FkZdbMkCALHTG7B2hc6SxHf5ieubwD1rXaKVHbE5yxNcmXd8CvrA3sZ8Vb29dj9ogfP8VP9aoiUg2neG4tUMmdn",
  "key11": "3itRNb6PZSTTKpjiPnLHeyLVuSEeTszXE3oJE7FXJuSDNbgoGzygpy4mra24D1XXCCTCezx5Sw6RJwoxVgx7h1oJ",
  "key12": "4J2udYcqpmJTPJ2MkGRQzuW7cwf3g8bazM2zLTg8oHVsi97VfYudLvyNcDJ5hkSwV1HawxYpnxHmutmXW4hZzs49",
  "key13": "3T4oeEDX7gpixDQhuEr4qrqrZj6Vs9pJDb9pSKGYAAJBf7ryzoQRAHRdQhzuzZ43mGaMmGEkTaTNZb2cEQGAW3Ka",
  "key14": "2f4gxXFCqNmmkwG3afbDekBdpwNnejmHApg4fg3qTEmF5cWg2JyqDSHuRxaxA4BRQLp4xpv19UcZtZjES649EFAs",
  "key15": "5N92A69pTMgXhj86aX3amPvSC9HG8ksDZeVybgBZRdSqFuL31f6wvCRDJVurcrLsWy7Qhb2yGbV4yoZK9EXo2Tja",
  "key16": "3wu75Mt8XiotehjWRhYeKsbx2nqMTdB63rfU7FAjFXhTZMvnrheRyWvm7YmUpAUzFhvtuDtasyTDasqoYf8VNbQ7",
  "key17": "55dMPSWAwfbfWHLgZ5KqgEz7yhgyvmkKyaWJ5Tww65bHoSaksNuwnLuExPZsqihsm8sWLxEdjBDfGVrX7wUbJ7Fn",
  "key18": "2nXhJ2ogx5DEEBKdBdSUTFD9wcqGwNUKLModf9QDpxDQbdXijYM3o3Jx8YrNiyYU76qGUxiJRbtG5mQE1CRKTV4K",
  "key19": "4LWy4sVHAJ5qpdv5xRypUo5SRj62wfftfPELjCcKGKiug2VXN2cV7Tr4Z5mWQKvodAPD2GiMPi6EL429BtfJTuZb",
  "key20": "3ofSiJmQwZPnUfVuoEBC96VB7i7jMVnWL24LKnxmQ6GNqcJgHYdq8ojFqNWegKuHZYzxRJwS5ddsGrunAv8evL5P",
  "key21": "U6hRaWPcvxpvZ1Epnhkfmbtxf943S76GyoccjrMP8Fh5njiJeep2pJHCvyB4GcLdDePmH6KLo2jDdQJLBZ6tpG3",
  "key22": "55aGJfvinyBBft43StwmCcVGubp2iJgJfydZnvm97Rwxk1QvBdxRYPBqLfE8R355wEN24mp7XGfm97rLujehNRQP",
  "key23": "3Fc43gT2Q1v1BeFbkae39GnFfsz7u4uhYUgL2ATQ86QGHs3wuCiJM21SZnQntepRSkiQxEW5CqUD68FcTA1e6uoc",
  "key24": "4jkrbx5ByuVd2WuoUBv5ppRMErKtZCexTweCUc8JSBdrPgAu8fXtkzYKuBcgpcT5aEnDa98jaW9RaT9SzSga46dz",
  "key25": "5WNCCTKDm8DVeWzXoTPgo1vfpnnRbV4SSiNLmSyMfKnBMPFyedxg833wERrsqGxuSZKscf2XonqhmH3ygtbQD78Q",
  "key26": "3CdjKXMtEiMaWVUnMfRcCAiH4kybhWeVxgifPyQB2NxuWzZ3Ug4KbraagxN7xNKx1K8hEsD3H19YVYEdSoPLefFN",
  "key27": "2so6whBAdhQGoQNWi3Se1DBqUKFiQDYrzRXbj6FCmAMpZdtzfJJZNxLGVGuofnqZeRrtTEZNRXZLyDjf1uua8Mrr",
  "key28": "5U4r7ZighDCHwBaHs1A47pEntkqK1cLEo41QjBq3gNRr1AhZ4EDzvBtDjGPvL8CntyVEw2iFYmhu97EvQSH7Wskd",
  "key29": "PC3Cs2vmS1JDHJigZm4rgy2YWzKmJR1DNGP6Efo9gerbzaikY2eDsK52pQ2zZyfVgBSCXTgNcDggwhm78WwrHCe",
  "key30": "5Wt7FCzCuZzoy4TGgMyJci85kDwkLVNfghD9kbQyktX2Wwm7TBTpKGoVNCEt83nmMqukXc91r1GUiqnpbfu3FGpy",
  "key31": "5t3ofrSG5JjJEU7dH6WTeGVLskEEw456GH4JVrkLTYAbfFbxNgBZYFkogb7X4dr3KSMPksFwMLhpVrKEBxoX18Dq",
  "key32": "4yZDHru6Qnk1AF42SPTDv21rLHsVnx2m9qchP3dQnnf8ia89AaWnASrt2Vnw6AgwvemkCTJ8Hu6MvwV1Fc4fyeux",
  "key33": "3ohZum3QM6aj1EoUBbRhPdrs79eyQNQz9PNmJAxX2MW3f6tEohb1iXB3GV91xC18RCfzVzS5tKDBH1pAUtxtzEzB",
  "key34": "2vgqRTLKFB7zQjneBu6gjH6GbrRQaZjsKmzuipLKXfybJy43eP5HYWa21s7ag7cCCrsK8aQ2qApp8WHgCAS4uQkb",
  "key35": "32CFZsCiAM6B1NCsTSDhB46om3qQTZWfvUwu1S7fMru9zEpkJMh8wb66MAAgKAs7BhZ1DYmdeo9zkE5vCq6uLSzd",
  "key36": "4K84oc2nEWWztCB3GKAuxgupebfHNSd6Pbokyqfjh7DEgc5qAvdcfSUnmQuH91uhCj8DxfEKgmLGKnKbEqCe4vBK",
  "key37": "41972ePkibpYRdPAUYnVdjKDQuGaGiTLAk66MR5wwDPbW26n71X4fGiCvimK7ScgJpPGTZHJAitm1SQPmfdnSv7V",
  "key38": "41xBGjgCtLpHT86TRpdxYegSPXuCk6ZSTDgqZhPYsJ4pMFU8JqRTqYbM9yfEj3pQMpG3PYXPZ9hozrVkk36hvw5x",
  "key39": "5uhn512y6iYSDrC2p8wcG6Eew6LttzZgWqYNUiG39qGa4XnLuCghShzcjASXkrPBgeGzNV1H838oyhDsneNJx8x8",
  "key40": "5AHzjUDsSga4YSJqSD4Ty17ykJN2bisviqFoKNwon9XC6TUWczPZqsvMDxQgdFdjMMgKVcnpomV8AEKKYgt98C9V",
  "key41": "5okhiWJxynRn3AJyqQnrnsaEhBJXiYEdmQFAHWYuUTq8CHLxL6nAHuoFXtcAUVVshhrYnjpeQmdpJCWuwEBTy4Fh",
  "key42": "4mg7oRQG7K8CN8rEdpYtd6MT22wG9NBanNbrAbTLg1i5jpD8paaWdmtUNRXeqS3vunTpniUfQMpEWjGXJTJLjKiZ",
  "key43": "3SvEAKXeuAaNaFGrC1NVt9wrLcspdXiQtkEd6773D1ofAUhbycPhp5paEsWNG1q5kVfbWn7fCPkJspXXk8Bj9kEy"
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
