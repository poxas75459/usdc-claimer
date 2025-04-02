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
    "4TsKvoh1TDkxsdJpFdJSAqc146FWfEAUN6YxQPGndEYgEeNj7kZbeEomj1upSsurChxSSpM1YJ3FyAEWT9bidz7E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJjv3hh3qjc31phM5VA1qPexhwGZqWExYaTJbZkW4e6JUxdB6bG1LGpPKTYo6GPhKgSJfkWgDB8nREBdcA5LXHX",
  "key1": "3erPEnMHchNNGxLAKhL3ANvYepH81SWVnZcbB75Ku3ow84LM7Zev8w5LKNoyTzYDSx9SHNQ3fAfNHo6oAWQpW99G",
  "key2": "2K32LaBx5VZ5diRgp8KYar39CzDzFVXoEmKeMzgJ85NvxSmycfafd8Bsy98ok1f5spvhvAERx9gSrP4d14SEDSiv",
  "key3": "4MT2fmx3yGwbXgUtGAp2eDBQjYXkphwjEawErtATj2H5NJYSTmZegccQGDkxe41pw69PXUx6bbabrM579UpqEH6y",
  "key4": "3Mgb1f8BjM54rRBrJJSSDi8fDxXks16HnsjmmuSeKFbNDJ9h96hExC3BLuPchtG5L76hEyG2ofnrVyoi7tDFhZpi",
  "key5": "2WK9FQEv8sW5qLXsJi39brRYaYSr5dhX22p9Qr5WDZwA2LXS6spTXVJSFAigb6fGT7vLcKWWC6UniQ4nwWvPrFfm",
  "key6": "4yVrty5x6LvwFYiQn1y4ixqz2gxkEui7f8ZyJqxgcqxixKzyt8nWvemG2W8HEqrdofKhPhbTqwq758DCTBwPrcLa",
  "key7": "55TV7pKaruJuJPccxCv1eFg13dUcABsc41iHbyACfMBCWA4AY1e32TLZaQYMrMAp2yCSK5RxcyQM5M2cxiBNSttF",
  "key8": "59Ed61MJiLZNrVsZ1tymnw21PGURBMGtqLHvfchjLTSo2EjYm58mEATSizgMSTaqrrTjCg5zLBxU85Z2UxooefH4",
  "key9": "3m6XhCygLrWsFL5VuctrhFZBLLoA5EEKXAj2mzHySz8T1vhVdJga4rVeMjF5hupoHYz7e5hs5dMRYA2C14X7QFKd",
  "key10": "5R8fPpbLGQxLazwhHNtpYaGLvcTSaA1xB1KsLSso2KaS3fB6ChEm1bvzKnumjV5iAATCPxE5pvUZZYTft2y2XPeE",
  "key11": "5AacTtcnJNCwEafAePSy7kkSdRGyRjuxsDyKTSeTrXdMxBNbdL9aVcUwZJmBrmXTCxfYp4kxAGk7sRneJ9bGzDwB",
  "key12": "2pChE2XdZRuEjJ3j3dCCoPqJrPDz8DzGiJmA3fggSCJLeYmGZHX3DScN5R6SMm9mpkACNcmDCNSe6M4ZY8JosD3n",
  "key13": "5N4bPWJ4mUD5deXS5i6WaKiw1g9BbB2kJFLHf1owperNmBTLnAX1phr8su7XY8WbLq2FVWroFgs7VhSUQA8HbWh2",
  "key14": "4ZBAEBAKsn75WAsdVY3jcbvompQYeEiFufjJ57hWR2tc2WCtJxr51L8a2hspm7xzDbmAz4upBAHM8UdvikTsJwo9",
  "key15": "fob698HGputC5hsdYoc2ScHk3ovY9YFK4Ni7krU7N82EkFCnJ73Nojh73DGjU1xi9Nvus4AQSVAvHgFab7B76pi",
  "key16": "3oPx6EABTtUeUjocW1bVZkLSL8cmU1ExJBh1NdMW2MMhtQPupfobzznbub3gNhX5gJuwinot4VeAa8izn7QEm4D2",
  "key17": "5bm1awd8yigsEGH6yWvhBhH8H7K4tjh23pxTyUuZQVzRUT61dVp8EVJRkKe1ZS6pscoF7z6XRUAzeyvNLJcGRWeE",
  "key18": "MSrjjdCLbL2oVXt4cCbsg9T6Ya6evEqCVevJ4jmBGChWLhwQ5VShud1Bz2RLZfRYC1qLSYaoHnnsn9tfsFmUf7x",
  "key19": "37Kveu6TcGKeByYpxe3g8BQC7hoxFrDGWr1ojV1cQeYdCQBLJbYpppgtattjCvJ9nB5QT72jJ8EjSyj3jB4GFWoY",
  "key20": "3RqWVrgpvJ3XQMUPVpFWXEMnMepMKKShrd76stnRaXh1EZy4kNMVXyA3pihoV2YxxXGzMG9UB3QYFYFXYayBgr4N",
  "key21": "25zVnZXxTZKLyPtfdry9nPWSu1gggPDqmaLMS4mMsSYxTKrcymUxdCeofHyRW3D6jeoq5cHRkPwxKkSEEz9PjSod",
  "key22": "AFK1vKerg6QZwhfx5joReyAM9WAAgFQNFtKrmkCcPoULw2cj4rGnC2xADQKbnJrDnvuB5MXoCvYqdVtayfRdPSh",
  "key23": "5YUJfLUhstACumW1TJBsgmvtvTXXNHQL7JMWr79xA46DmHjpbVMngorcrHib37wrHUtqErQDVPqHf6prho9bnq9L",
  "key24": "Jvw41eKYB5pxEidRnHL4wJrD9TxQfK32dtyx3Zgj4jZJUMGtvygrWAZ8a3yNKF5KxyVgG79UbdrPzgVFgnFRqvG",
  "key25": "4vGjndr9U1DQmdLuoJK5bTf5iC8wZn3nqCLnM99YcDhyU418vTqBnqUb4qMsmVpNpjKXq9SpbrwshGngyUxxDYAv",
  "key26": "3hwJKmkuK2WxHC3KZrycTLoX9L5Vd2euhMbTEovnPNFao8Z1Jy58WqmU29hnrtcZSNtzQajGGXCWb8YJv6dHHDkj",
  "key27": "2jnFgxH6ZrkxnENu9yMoBGg9GzSwhx5RV6kik2mBNrT2FwoFZ1NTobcp7vS5zHJYPY1uqhRixVpJMCLyp896sifF",
  "key28": "66Mo796Dc2fFXbfqUHFKiy9C2YSnija7jKh8aiGMtKpHvBRqU3xZ8nzdPpZjaXg5UuHSZp5bFndJubmSjvoVYQLd",
  "key29": "HaNK4DahHmcPHUCHZFgoq71kqEHA5FtzYcyR2RrJ5dqkZtELUKhq44NzwoAanD7QaprGg5m6JRHrNCkXDXfEuuz",
  "key30": "3JP69ozQu6fbSPrNvsFFhf4gdunhdX8XNaXNkyyAy2oRuCFqdBLj7aRSHPRXrotQ5VQh6SA796DEQTQvdvaoPvTd",
  "key31": "goQ4f6VEiL1kZJXKXfKt38WFbRTxd8WfG5va5J3w4VPzCBx4sBbpFVkCmyGc1TAYbasvWrSgSPCy2NGdsxvj8a2",
  "key32": "4YWf9xek7G4BMGnxTgHfy3yr28x3DSGDo3iR1gUDLH3zEC3b2XmARLjANsNF4oAvbX7Kuc5GrvTtnrpbAb3AT7kR",
  "key33": "5MwySBZRq8KNyqBWokVpmR637U7yr9sQYRuHQ7dnkfwtFayhdmUQCLJRd5MppVufsRU28zdCp8Lz5Ns6utYLfF4d",
  "key34": "5VpG7iPbYFz2hUX5FqtJFiz8eqVBc6aq8caydGBKk1di5AyNDSqq5Xm7kHx8bNekNGiJnmjHjmC19Rt8drRcRy9q"
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
