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
    "2GCQP3XAnV4iDKBj867Z7EEsHDJZpF6Lvtv11bbb2HvR6RpFQkJFc6crtKBceDaP3KRbmrbHqEBphQ7pAd59HW24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzNbMXFCBxADjRFhGha6S9BYbjLxjowADRzRQSY366fqzeaH5rzm5Gs1GGQWgDFDDo7cBZqRvoThSzLtj6XLj9H",
  "key1": "5mCBL7fjdiGZjuY3axDzg6MvAtZEi68ZwBimB3WdBp1xLY2Gd2FFjUGnmSpwDErHtdNepGhnJr32U4rLaYFkqqoA",
  "key2": "Pp22CeykHBoNtAggex5CCUoBkZdt8h3YTr5tTmuf7Kfs32pJb63Ws6UTo43ARNELSG4QrNv2sxtLx31qQBavF2D",
  "key3": "5KtdTfeBZfLW88nCDmnagGP3TAb5QqXNRYEZMgD9M759uYdVTJwBqZqeLNJmDvhXXA5BXoQarqMu44EkzeJ1aqEp",
  "key4": "25jZV9D6A8kT3VdhTSf7rcUAgNCAhXvEw8yNuxMtpj5Ch1Rsa771CkaWyXN8zfbqPuzuSPW6eDi9gJt2UMaUBciv",
  "key5": "2jjt4eJPCmwfnwWo3qyq6CiyisGmcvJWTv2B6B6kFp76TS4zmy7LZmtbGkbiJ7YQ3awBQG9t2dLtXX9r4Lb5TzUv",
  "key6": "4mWEnf9jGqxqZaXkGdzYgBUE4Z45d52DRipvXTeD8jc3puWXNTuxwMvpdBsF8HHsWDMj6n3XC7f6crNHm2DjJqDN",
  "key7": "3Sq5EPVbFrrgNeUp8X4auk77StGwGXh5p92ta1PgF49jiP9wyvfJwXQoNbAffK5bAke5txtJ9M37hYrMgqtu5z9Z",
  "key8": "3ad9UfdVFCUkQ5bhj9fkMgdRmmdfeym1sKeDyAEAGEPBMYDFKAy2e1PCyvbywvGCSSz1CWEG4w38RbyBL1CkwCLp",
  "key9": "4bmDHznmmRhGpSh6ATtctTnEChjp7SsRz86ZVNa9HFpb3QKPj49VjSa4UWSVd1m2jTtFujUkYtcAHf88cNvvTqXz",
  "key10": "3y7CbLEZmKiwEKfMBCBzZaKD2YKpK6wp8v7utfLoWLe3EsPgmkhQtRF1M4hmiXrhMXmrGyyby5xwNFi67Tv7mU4T",
  "key11": "4MGuKJNs7MaUENJ4TpPDQK78bg6K8PedMDkr1ry4LUomf8yUVnwm6csXMRCpTU7p7Lvpjh9AwpPJYQ7zmTfkt2ND",
  "key12": "gPgEPMxLPsjDrAVpzsjTAg67mbhTHGAFYrg4SwASsnkRm3Ri5T7PHR95jdeEc3R3pZdRQrxP7YT2LegAUStyvFt",
  "key13": "faBQRuLvoVirizswDKLUHXLsc7tB3LRxM4fXehJhRP4JWHcaihUCMTAFPdCk7yyUqFrg1xsewSHqVhECXcXWUGA",
  "key14": "53JnmU73K5GNrzL37tjht4Yn7Z8WP4nz83b3dLRCzNkgQwPyK8CfDGACw8691J5uViJpoEXSUZaGvdgsy78io8AN",
  "key15": "3z66DP8wUd5ZDCqirKDaNSvagc75RWCYusZXaPtjQFoGEwxi2RzgCujxpSQMpT5STbAHBu8YWpv3tpNWnHSy3gHk",
  "key16": "2kcGnFBZ7AvCg5RZZJzy6jcXPMxiwTnwnejJ4oNKoPxuAbyYT1WrzKh6VxD1z4CCduwrJDg4fsmHeoEw9FCAFPUz",
  "key17": "4t6AgYs3qLAW1ReyjFgvRr2CqE5aGmsprTxhfWPUgbwcA1HbjP2DmR9voRvWdtQfVeFjCnmW9MoB1aEYqbwSTGV3",
  "key18": "2AvtkjpcMuVbbSMabJMyMfFTKDABYfBXfkpurjuhK9qXsMrekzj9dvLoMUV8zeV1V4vNjk8aPmYbRaF6myeoC7gP",
  "key19": "2C29WU333RnRxjKTeCxW2TCS7xemq3GuXaVtMYhrf86Mg1B6E6FX7Wc748R1rUczrGN1wn9CFa5euvMTJUHgdobf",
  "key20": "EwMTrNuVyaoTXSrEXyJ5DuhWWk2Z28uy5KPfg9K1EZUP88YgxhJ7CYQJzPTdUuhbqpNVdqi8V7RSswaut6Ge2jH",
  "key21": "4Rv9dQfFvm6wyWAJU6kzreJ6P4q1G2aiDfCJD2Tg5T8Rqh5WyDT9VFiZnMgkZBubdGLtHa2do88RhGJHmTeGDB42",
  "key22": "22qevHPdhxcZvT2PsixthURzijT7pbTFSqxq4hduGRyaTjQHxqBuPJQNdxh23zqTzUn1sSpLKP2DhGtjoLkxeVYC",
  "key23": "3Lep7C86BzwAgaBbkPi65wwHZgUeGykSXSNNAN8sUnrPsbRM9nRrTTDmRTkSQ9NxeC19EpoPRGeUwuwCeLXi1rDf",
  "key24": "21u4p9VUdcfrLAW2hAxPGnbc7iAabYQjf9fwBTa1WRWcad2erW9HszJ86gLaLCVKimRkDP6PGb49pkgijMykRqsn",
  "key25": "M3f9644DmFz3mdwsfw9w63d2Sq6z1gHzBR2d2v3EPa1B2sfYWk8uAMHyUv7WwRxwF9nXYgTUHdxCcJpSAFGEmTp",
  "key26": "L9VTZQckuHdCc1d8iwELXDFhBNiBERssFrYxDZMjmSqL923sHVp1EWzKoRp3TMUdUBBYfiFmBKkbgvyNsYVqRPM",
  "key27": "4KoqgwiDBXb2cdvooFjuA2xReHjXyzkt8CUXKwDHCc6tmbnv2NULSgrDrEuVUW1UhGeZH4dLNqQLBT39ShNHqjXp",
  "key28": "3CEjzjxAPBjgUfBittxrxCujrddZB4gAtEQGzViGfFXwATnWox4fVWTBVLrBczDVT7JLNCkAVK1ZvtKFuZEvsZL3",
  "key29": "5D2NHd8Bjnpz6g5TaqttNQUKQzPhTnEvAcX1fH4DkrbLjzWW1SsNcr2iZVpgiWf7By6Hi6x9h29N3DwEHsjb7gbn",
  "key30": "5zZPuU8wsswY4yjJbgC5CGGxSZeHmi7Ya2pg4cDQvJPXgyn4xocGAKqMnLK4WBwckXznwwPD71Q3ogY91msTSs6r",
  "key31": "45A9dF8SMiTdBsjoNWwwMsBPgJJkFaEjUKHB6veE1YJoaYCv989z6x5ifNx8CnJJyTYNfTq2UBkxJFev51fzbmQi",
  "key32": "3vQ5yJzxocDzGfxEjTfucAmQpzqoAXE6WevUz97rvQGGD4Jzop1tf7We19ihDSih4xpqiXuV9nyTPAGydfYSPE7o",
  "key33": "2V1EfRXsA8NREfPRXYpzdeRKt4xvAQLUgtDMPLZPwZJUdYGgGeeF4RfUBiJVvhn5AAx3oA92eSPDYH937u4dYfp7",
  "key34": "W91TZYFoHu8SV1goaEgC8bGGJFMPXJcMTJd8qkF2AFYDfeTAAcDNx95PbYykZ5SADYeCcCW8KExBuXZeHKSFuz4",
  "key35": "2agZRTcbRMfNUmjzSybvRYuzskuKpsJ9829oEnk91ctGrtjxVPgiC3yhXRHGkwbVEsdLJbdcvMazgnuRFQggN5Ty",
  "key36": "31ctdxHZfpzmXioipXuEunbGAKaxrdV99NhRUuCb7LPzrjA5dwUmTQ176nMSqeFMFrm1jUfxrfssKWYxNeGtejq4",
  "key37": "2iZh4ZsJ2d4G3wXGBenfY1xvuJwfw7NBCpyqgT3f4KoNNZ7SQ4iSkFgj2mV4N2zL5nqQRLWUPp33o3YY8i7kzG1",
  "key38": "65RUQGu1sf4YzEW7eeRhaRStXnzNsydbjvi757QzbEMQzh887qvaujGeaB2YWb879SMoJ9ceG88NkG2UYcegLyVd",
  "key39": "3XE6k5CDJHxFyC8j1p6sezN58XJEfa1GgVAjeFLX7e6B61jum4ACcLcNU1ZdpG3N7uDfurvvmxp6obsjEyRVghk2",
  "key40": "576G4K5SVc21NbA9FCn6DA4a84LmyH9STPoFMDZm5amvALiD8nbo6USEgGAq62SKtywkkYwouaVLdVkpvBjksPFF",
  "key41": "dNwHwioY7f1qYnYbqNLbLRBjG5gjEmVuJ75EV2cYbU4aBFrGGdYZEEqnExr8w7zbfDER1qpbANNPpHzGD4gun9g",
  "key42": "4F5FDAMYhzbF6dFUSBfa2Zbrfoq3Upc79hd7W5LSyzruZqvdVmtCqjdNz1E1bF9bhtN3v3roQtyPCrax2JGyTgSr",
  "key43": "4rVCB7N9WMEKibivEtbB6LUxBNb7VNfpDuq8EGgfgQzdNr9Qxk9aCa9WHi9kGEFQSrxnDNBvrqZ385nbMqUhousE",
  "key44": "359MLnCdxECP1NGZ5SoyRjCSQ2N1rFnxqQG8nfzSbNybM3QVKoPBQx8wyknp3Lq2C8dt1xPKXaSquuNfKdGge9jZ",
  "key45": "235UfmXyxkTeN94Wdc6k5ev6aztLQTjkM315MaDWFaxtnCkUjpuPLa9xFxmULgT4K4txZWLRekFsfkFeFrgcjS7w",
  "key46": "ip48CdUwixko66TRAs7ABXWQpKdYfxpSyQ4oNgC2Fv8ohRZ68VQXtGbQGowZyaBK1qH4JvZ89CoMWacihNabKy8"
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
