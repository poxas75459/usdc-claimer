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
    "2jmrfJvEaHfqWjwG5F2ygYDreuorWjDd1mSWq1BjRkmyPd2YzHCVcXxy75HumxARqnfJffYdLoz1aKTLxUnXmHDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iGbg9snD2JggvGFdo6KJ11vZatE1dD45tUX2FW1TxsgJ3PpwKY2JLP4famGTAwKnmeCQXNXmvdw4KhhdwBCofjC",
  "key1": "5dkSmM8jVTqBn2CYXiZ8A7ukTLMKNGErXC6G9Xsmf8FEzFdhm7VgUiLWn5cwJnzHKJtJfcFqEmNouUUAkDTtxk5f",
  "key2": "adJjzEwtkG2HnGQsnChM3xydXbMWF61LNhECEeXpiuZb3iPcAzC9cg4wwMz9jAxcZvYEFsT9XjUGzNQvLbQXie3",
  "key3": "3ZGQoV1YShVcMNTMtCFXaDhcXip6iNxW3HnkdvSNs2DRBTGKR6LRhUfRSx2WwokF5unbfSchcKpni85mAAwuMsZP",
  "key4": "3c5jWkKKiSnMezddaELCydb6g9k5HghRZiru42RhDn7kaf2aM3JXjtv8FcJ4XkkPdQRRyweMSSGvt4k1DCMxujD2",
  "key5": "3nXRiA4jujPMQfZP1xQj9dJzCUfMj7jGTHSehJrFtisMbVtB2iQXJVcQVoQZM2BfoJK2mArsLBU2sWcX8XnRYN9B",
  "key6": "6a9RHZBNkq4a9NJEctyLM3DsgyeA8cZBm5a8dDPeULfQhV9i9Mw2HWKozJqvN3JWpPXu1U7i17mEYX8so6d5erJ",
  "key7": "4JU4ZeG1BBt1hkt9ycXTxTRfR9fPDZAjuWnGHaVEw9Tw9333rTrUgkayTwzegbPQWeZHKQkEBPV2dgBAUwukuuR1",
  "key8": "4PemGoUF4jzwHXegb8ECMDajn7sp3xBfhBC7XKB8euegu2YqTDv5cqTigAKnB5q1Z4iYKPXwYNt7fHaNp5bTUGMR",
  "key9": "56LUCc2yaYdyJ54HaarSBCTdEMG7T1XEpcsgysJD3DaSghnHJYaMdtH8TmV6C5CMbpqa5SdanychUScWbz4Xw2hA",
  "key10": "9QtFVSbui8S3KX3Ug6E4EkeHUK9geJoJ6PhFKXSQjcSjpfMGD6FrVzq3wnN9pbXRnx8FPmkbjdf9q2nxJWXyDq5",
  "key11": "5Fmf5HHxJuHbFYXxBFn8p2C5FCf4EFmispx4Ydr4nU9MU84LTYraTimHdKjvMt3aASg9NFpfhgu8nVjEZCHfPZRP",
  "key12": "YNTmQjwTb7AyCqEQ69ynEmQnay3pE3RQBoD5CfwQDsjeTpbLLhhVVeNWQ9kHujmtXbtte8KdztVvVAmwpRgph49",
  "key13": "5D1BygwFsxAk6Cvw1qCwxgNnS6BjsBxYyTcCQUFHjPmnFtcH5QUNewTCc1x4vLaVRjxepiXPa45Gm1g5EJvVUQng",
  "key14": "3ZTzAmP2GcepqXVUtG6ZwDfvwr5QVuTSdHgW7XXCpwatuZoHMJFnarm4v9uMu91uZBifhbAvu1JFf4Q24mUiPqQ4",
  "key15": "297U6Giv99P51GwfNg4T5cMQ8eevmXTYrihWJZfPHJskWnU2HovWWSGqMxLPH69gjVUTJBxeynDsF3odigcLkT84",
  "key16": "5JkbVsUemcBfihtkoFEWAX21u5xrAfRKZExURVb46F2G5ckEbNKkHmjNb2TFWj9QdXY6HzuRYHhrHFivPNFAujDq",
  "key17": "2TjDfjzAYbuX6XjfEFTfM2LZvB1bSqrVsdK7FXpjEMorKP6U65xp4dKJeyj5HXHW9GWVem8D3mRSuM6tCvDTeEH",
  "key18": "2ox7hfcVmPYeHvaBVcHLMc265E3TsUvRyfTzBVrxknitHwkNVUK3t82sJW4og7ZTobkPAJoQZb5UBUYNSbiotD5N",
  "key19": "5CKgc6QwJ3b6eLzeqV4ZA1HT1LaYCXDrCzJAJHBXdWzVY4GnUuqXZTevzGVmNUDkZG7qfFh9HBXmMY8t7t1F4N8B",
  "key20": "3H1tbCmJw375cTDxG5HAGHeiGEbmGaysJ5FG85cSgh95vGFQr9e6DdgJS3dZwaW4227z76msi2AXaQedNzAWDcGA",
  "key21": "5MHHdvhRU5ArsL8Zr5YjffVs3JQzFBm6zJtSBmLzPfgLbYE2neXUSNR9VRo9DzGC5fzaEmWEUUZcxnpjdB5jtRcL",
  "key22": "2gNYa3LpG8hk7nS7Tsyze9rzadSj3uLiHYKCLqn1UEyNi6vRiTFaxa3dh3zGqqb4frJhuuYRSDy9vx41HwPHt4nU",
  "key23": "5ENntEPJmqHQqGekD8DjMbkCwfsQn6KtGMuamDsyvSzMgx6HVjWYRuCKbZsQjw3yHvjBYaAwJa1TUkYtEanD12oL",
  "key24": "5rQSm5DQJgcZNT2crLgMcyqTcuDsBsx7SXY1epvtFWfTz1QPejcZ1CZjZEq9fnh3MNkPmH6RsyZzzt5Vv8Qg8hHD",
  "key25": "5dDwobHBUyvTcngTHnP6xmaTjfovxCGiuoCrLBc2XRZ8s3BjxkZqmKAXASjSzyvt3ZvRWJbpofeL8skutvKgA7xr",
  "key26": "5qPyuSnEXNM9F9LrjgzaJqVWJfDevECRmnGiA1smDuhijwRbRPMmKRJv3EXLFnHc9KVzi5sPsJncCQRZB6D7waXh",
  "key27": "3Wv7rsD7aUC2oHkFDkkXpuCZjGVu2xVSDJCfxuzYhVypZ5n1VSysmiDGH4UBC7r6s3DFrkbmPyobTt79Webs9SJn",
  "key28": "2B52jtoYtVUz82r2vqVktJMDdR1yZYhhw2WFaEL1bUCy2P8Xq8rZNDxGzky47j9AgRgHjgRL6UTQtzjLn8hfZTuf",
  "key29": "2XdZVVraYApQJYWvAi8dpuVbabPvphYa99Ji9z1AvDniBU98EVucnXhUGjFKJNULgPpmshsNhsFLDgK53iV1XPdC",
  "key30": "4jC7s3omzg4esa4vNsc8hCdtwCEDxw232RSb1KmCF3JEBoWHRgmzraRhtnZyjmtHc2DUXEsHV9KnBMx6oZyiZW8t",
  "key31": "fidMTJA9mMGCPT4v6R57XzRywUjuHaZADYUrqPQetHFgmkiGUq6VctDHP5XLHdDopeUVPzDMLdZK3weW1CvuGQX",
  "key32": "tohDPNX9xxbKrPsQ92xaZT1eokvxBcpZEBAvCkzMGf1oeoNaYfxpnVNn3WtyPgXdcpqY845aUrBd5zePz8HfaK4",
  "key33": "3DjUmmih2DMGAkGYhu9njRQcFUCtMabQSJv9VForWX5gADfUfJUn8DS76noj6XY9aXM7X1tss4x3nBRFxJk6Lse",
  "key34": "5hFyUh6uUv41h5nsJ7kehBF41n6hLCM5n3CoWdNoN7KpCX1f5jmd4qMHZar4z5v1sU5XqviNjDHaEvjSz5CFxfeP",
  "key35": "ipvigZfWrXMJ2PwH9NnAy1AjMn6vANbyaaCcAv7TXVkvcte5bMMNDTn7txgZbPTS88BLWKmj4rCcc63PQWo357M",
  "key36": "4YxJZRxRrBttyZvgwmK6T9Cxuy3DttjTAnscW4nHGtxiaPeoHMXoP8f95Pfk7Bh8PZba9DoEQuJtgGhpho4MaFET",
  "key37": "67DPWwqRhJoM8YKyxDQPttyY41zEavVLAnQiarWDGjZ7zDP6ccnGgEFMCRREyVpeju9zHMijhjFZbv4E9YThweSJ",
  "key38": "3vubgLRjkE1tu4GDHKZmRashAZipGCJtD4JFNGF8zfvFNzorzRiJmVZzrhx6ha57UJhTn66Zym5SdyKtBnPegPF",
  "key39": "4s9sV7UwqAuJ49JGcGzogieAGcycXgnKftmaSDf71QcCoUWeDfMTBm1mPuHqNegn7Fy1gkWnPrRce7Gz98pDAC9w",
  "key40": "2PZk5Cm7RUPrQaZodwRPt9wJs3ovvmQvvpyrguocB6q7Qn5K8bdMra2yXbQfJ1HwtHN3SSyDLqx4Dcoqn8qyjB4Q",
  "key41": "3Ub3ZpFahg6xfRrZgrYRxoRNhTxHLPg37QjB2CLSFuMwo3K9pHJ2CtBwtwQEcaiKoji2qe5QBiWEiRFxdXGpnFkM",
  "key42": "2UbpAVHHFj2UDoYoGNcjqkFRJHsJew7pHATNhYZfzSaiBU1WuBPqdthgThUCdLs7XhMiy2rcdKpB86kmyeXmfCaY",
  "key43": "3iffaLFD27FKAZ8c8nL9AbtpCbxKRoShgPCTeWp3b4oHqknsi8wu72naxLSQsQ4DGNr9LSu3iZM5GEovzSsajRKn",
  "key44": "5MvP7zYZgjjd6ofxDmkijnTuumeKRJTDnujLRhqCpMG6HVi4tmgUVQz7UZECU3xh2DEcgi8yDqKdAsvC3WCiHyHs",
  "key45": "3tS6FBv4WXsF9pVd1eiTexyGfbpLB3E2yBi5S5pc5sNe5GVRk8kwCDkNVL4kejXx5QFSqRd5EsJPyRpq1B3HJVdJ",
  "key46": "5u4GTHaXhESmC8fNc85wKbsrx8VFtxrBE3amwHtitEx8tvNaSUYKsMMzMWwYS4GC9Vcj5MWUXipkKeKkYsZk1TDz",
  "key47": "5dDKtD3KkYozmdrpyPFZC2qWADpeyQeyfwMrcLNXCdaM6dusx1iGBZMNEPVhaKCSmQwrv1s7qjPZCnA7jZ26FX2Y",
  "key48": "4CTGiJEJXcZsq5bRCDJBd7SnaEvokmSj6zFVHirRwVAhLGKSxsw95ghxo3ZJn8AvyBJtXFkdorPXJdBt7Q1PjT95",
  "key49": "3FRK44Q9PBUKqTNaNyJP1HLiTBMjjHSdfaLSVjmsLgGHGetUDa4urkzTnb5Je1q4jwFvowfhiZ5QsmFfCp4RXYf4"
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
