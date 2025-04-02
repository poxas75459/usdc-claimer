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
    "4EXvkWLvY5zLAHzSMUPo12LrCR87ypiA7RR1RAfRStdFynfBQYSHoA5wJXYt8xwZskCEK2hfctYkuhTV2m9qX5VL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QiJQm6V6gCez6LjZXyV7ibuVxxjbQ92a8mqNUVXz2CjygDs99ZUsDmbBJ4qhercmi3s2pjqnh3dmd6oCjRw5Ac",
  "key1": "29JmqaZmr1VWQ9qt65Aj2wb3pZ5QYcFtaywQWQcf8bKyuQNM6cMiPpn4HztjoNsKevTFyaebbqT44Q7sk5NXXyRL",
  "key2": "dgGBiU71TStGs97Pwj1jcqX9P6ezSGpoX5JMyZyozsMiyx4GJQaPaBL8zqRqgLHW8oyijpqez8fjiG6vvBqRwKg",
  "key3": "5HbPVs2sSNtnVpLfAqjn26k8a7JfvYViTUyG3oVNAMy4pYJ69YXbvHAom21s3ugaZ3UbbmehzEFdsNno1yxdsTqX",
  "key4": "2BvHCu7LsFZYHXJra5BnPbucPU4QVeTz2BgoG4u7bvwgnE9bk5mvr2Zdm1GD8dnHCE5Qhdjr3qshGjaZBvSD2JP5",
  "key5": "5KzServ5SaXZrFX8Sx6df7Ab3UMMFDvu6sWX1QabDfqePLYnNJX6fGPDLJK1fg9SaFFWbiQf7bniNWTA2QWDDU8i",
  "key6": "48J4KrW18bujC13PQpqwRgtTY5dBQu7fPkZMV2nrvWLJdPedVFSVbsnpxypcZLgCkHKctjrFnFMcmqwNJqoc9P6N",
  "key7": "5FTabNk8ZvLzcVexkTNqUMcPaDbrKcekyZjckEsrxVX9sSWADLd25d8JHmtmiyNcpULzyPpdVs97tHi7NRPN1Cnk",
  "key8": "N7jVnT8zvJXwdKsEG64AQyBqgzaqjZi4cRVyjdoXvFGp3y8YeXgXD6TfWWa5heXv9iefuKPbESbGaCg3e3LcgoY",
  "key9": "26McVAGstiqdc26W5EJVku1VVyKEMMysCr8Gd3JorKhw9JwLiafz7ovJi1ksQxxEiPdi1AKWow3Ftbmptox8fJWA",
  "key10": "3qTaZ8nwKUAUB4ddKzeh1j5oUBPGMbWwuVvJAm6Vyre77jmHFsF359aUZjLQFXNvZ3njCmd71a7KabVyKPzTA7G5",
  "key11": "44nSYTGXZivPBGcT2iy5y1fR5ngbhFSearHvUmUBQGW1CUem5Fesf5nkiaurk3RH3evZswzMNnVQCv8S8vYxEvne",
  "key12": "33sbx5KgTAUNxjdwYHchEvNYvDt3k2cZzfW7bMHpbTcnPe6Uhq3BFXqqvaFMdHMgepH7dMihqUsFjwhXkW316224",
  "key13": "3zjtib2Phj5fMPFr2YKv6DE9xxJtGMapJGdBiGVadLbv1nikNNom8rd1nu23DtgE8ipx9GRU5a23SykauVSYGhJL",
  "key14": "geDcS3EXGtJPkU9mUP39pA4v9gdopTFtsJ6rpCmvu28Lrp45rDWfkwtbggRh3W9ziAFMRWEPYEHYYqbtFhu1rkq",
  "key15": "pWfxicbPD3SfnWEr5R631ZaiFs1rF5Ls6Rjisvi2MQkazme7xhpNaQQEXqLk5WPAXQMaf3KjiNt3ma3XxMrkCWu",
  "key16": "54LUeSSN8eFBZPXBwv5yPeXvrdT1bPABEtvukxSWWFtRfYkQnxNmdtnGCEq65EpeDP9tpbvm5Bnz2dFqUAU41nPJ",
  "key17": "4WemDTJd4SmgmrjdMcPy18xHdzqbTYiBVRpu5zay89TxuTQWUPkVxZqufW1ut2faH2s7CJGMWe34FCoH5ATDeGrP",
  "key18": "3XNFQG4evaWcYuGJfkTTrFV81esN7zGBM76BLAB4q2c8ScokkiipDC8PM3GXMTrNAnRdDjxMqeoB8PbYv5Q6fv7m",
  "key19": "279EirR8kg3MYzLqwbbwyVNssjv8rPTiA2JESkwgtPi3hoFihF1SujkjsaEvKjaovi1i1jwpKBbD1onndGhWGsA3",
  "key20": "4GxGoyg12eLj2Znp1bUvv81ronbocCayjvxNdv5HWRW6X7DmFhPQPMdn6hJNHSdwqGZTJ9MFmBAoTaM23HKwcweY",
  "key21": "BTgUcsBcWQQbbgLDwkjEtD8DYA9kQqEhr6Xed5dZBXa4GhBsZR4nu14sEHsoFEK69UxiBkVky7ZRGkrUJA1E3zF",
  "key22": "2FaXvds9u2Y1JrcuCM53zqbXChmwPNhVv9h3VKuoj9tp3TS6SHisHM1wXKyQiWcM6uDjhg94UhE5Goiut5WUm27s",
  "key23": "3yxQG6bwKLvADy3MQDPpFCs6ovyx2MfSMmGY8fC1qacHg7S75q8nyQRCASW6YASegqqpNFuDNbrYVQx8d7K74uqr",
  "key24": "4ndQ3JRYf8ZeWcdUKTf7pDVEdW1rhETNYQ22NRtESppyFbgRKmcRihwQe9obH9UtvpSE1gSnkFboCSL6mwUonquu",
  "key25": "KrdW6hCw9pxtMdpEcFKcVprbjDTvP5inAb89EXyFghNnhsf6uWSBrp1y8TJ4rRQr3JUu7zJ8VKF47uq75WkH5YQ",
  "key26": "3AgyCLuSDzjaSh3Jf1XYvehghRZQ8hZVytGs9oRmrdtf89DMp728hF8r2ZQyGrpnctpYdkSEBuEj6RgoHVgzoJkJ",
  "key27": "2YWGf6gen9iKt9Ga7YKQGmdH63d1PmqS1t7cmMqqcP2VfBDrgHMUiVav2U1TyyeZmSu5tDLBymzYUWbJoQTGRyQC",
  "key28": "5nCyQ9WFuFTxs5hGFUpnPuo8CPAcYt93tc7ve5tVncrXEiS9F7joJ9GaMC6hHDiEBLVTSBHdqQzLqbjz4EMurucL",
  "key29": "5LuxCJx845SSB4mwcwcpCAoRbQaFVuEzsoDvjRt5NgEqWFVd53KApVSjUfJvHrydPu6UYyQLWv6UvmY77bxLm74f",
  "key30": "4Mco1X5bv4PZuUsdMENBe3XFDz68J9cZWKyC821EzehtMJfha4jDw3U2FkEkFaVcPKww1khQLnE4zBEWWjahS7YV",
  "key31": "2BkQLqVuyGQadEDZMLYqQbWu68Byprz2wHaevjsadLifxrCMTuDPq3De6Xv9mHRUbhNFNrMDE99jdU9sJeukCm4S",
  "key32": "FDnRoQTprKruY7q7A6YmMSjKHiXBTS4LAUCGfUtFLVqqyMxBdeZj2jknVi3j5QJoMuB4dv7AqaTkpBFcWoaFsit",
  "key33": "3ihBKb6eD7KgfnCCToLrKtEzvsSeLvLPWVFhWhQ4kRAKg1LAkPTNw7zNJaJ4tYFYhV7aF2EpWXaZZvc6EQZeWkwh",
  "key34": "9TchZPnVBStwYYn4SDB5EpYLJw3M9e6dYth5rnD18UH1VDbnKzxhAMzByE7WGC8xdHQBgdUGoYkndsMDYnk3Gnr",
  "key35": "467DSiP5adVBcuW7DktDfHDnGpxLFFxKc7KF23Zjac1oT8WT7jSSwtHWRuh7rsUyAvyPZCFGPkodG4v9uJAjvi7e",
  "key36": "3baxqG73B59vLf46TwfwqB5zdTFs6aDmKqTmzDcMWzxGQ99Nxfr4zRNFgaPJUQQX84S3rtNNv1EFHcihQDSgAYBM",
  "key37": "uAZsjEN3vrwJwCvBmtRBzzdJvd8Wd5cSDwTrVmsnoYC7vk7fYs1ZTmqyQzonZsSfrRkVRpBpMdPeEEUKPSnMKNw",
  "key38": "3ZXDY9zRHMAWKXdtf6GtyrRQvBN2dtYhntYRiQMPgnS9AfZyE2hLTxKRh4L9AqHBnF8jUbeLGVuRddQ2s3BSnVTf"
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
