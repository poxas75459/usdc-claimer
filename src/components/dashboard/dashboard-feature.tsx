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
    "PVhGpsgHspXBy6x5EkfyHC9mASZ2miXV4uEdNbVxFN3EhnsBKmEr1eiD2NLATqT7eF5343nDryuf1gLkU1wxCB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P9j6a8AezVj4bt6WJcr48XTMLXiqado9fWBR4UxcqW9ZVt5KG2TcowvHEYAUAY1AsJsRaNgyjWGPZsamefu1NCx",
  "key1": "59QAgpMMtLFhHCBWhLjn1Rsz6pG4A3Dz72efS8e2fABBg9mM3uKHJ1cPo4F4EwSnPHcq66rZtknoQPtu1fnzMsN3",
  "key2": "1ztgUCvYiBiS1W5gzvvBDqJnJ2z8tvoXoWABKvppsa7MmQkQqR4UPwua6zz37NDNh37rcQo5ujHzevkad1Pi26V",
  "key3": "4ffkhKUr7pfrwYkNjoS3yKTKPyWoKSxB3fwqHG9bQ8K8ksmQt8Pmeat5QwLKwcFovLaTcyrSKsQPzzwpBY5a5PS",
  "key4": "5iTFmrb3VtETdLMJGzXKvPoZhA9KFSDLoc3QyMby1g2nqwrQfVcXX12oWBKP759Qy53CNuzGLSdPcd2wn25AXdLP",
  "key5": "5EGEhLpAu2aKGfbKXSEPRrFbQsiqxRR4LCDtfxRUXm2wr52jibu9eKooBG97xCtswkbU5XmdEkU5xJZy2ZhDJ33X",
  "key6": "57Tk4rvVHnXBnUEYaBGm68C8fkduKQ8FibWn32U1ZT7f6d5KWCtUkXBbZR9LRLdrXozZ8JhWvzgu3nACukKshbPq",
  "key7": "2FGQDepTeFw4nWieg9UG1SWFqD2xuHEWEZpusCGGKMdw9T2FFg8d6Na3Jb96zv97jkMzoWsEwDKcva1Tr74ULcwB",
  "key8": "5RtcfjuJrztSDQZBrF9N6SUbggH1ERWiKAGHXUxhLooCn6GMiTBtsYHpxNuJ4ZUYqVrRRyCBcv347sq8EKhDfCyP",
  "key9": "4jUExYA4h3BDCpEBjrWgnh1gVrZHkWhBFCFcW4EAt7RBN6xqLot69VKYzzTqxCGR5kVfWzhL7KJZZDH5rTGSm3sR",
  "key10": "2kycQQo5QXtiQpwz7Yt1cEAzBhwVGdHyHHR7Ec8FjCUYpXih59QSjGezATy5Kk3e89h9q7maK2bzHGQpuhq7ACnf",
  "key11": "4EMzpS2uP2pjm6Sv8AxhbkVqqQpBRkePGPdxS8KiSZGSnfNkJChjk1LwxZGzLAKHWNsrPdrmxYhyyRGZ2dkpvfRL",
  "key12": "2UJsbZDd8txaNexEMzC7243BDsuw4GtqTadYRhgKyMLXApwgy96pq7DFHcc31aNzcK8wyvYYF9EtAztF5rXiX1Bw",
  "key13": "37SStf4fGqFVU3XY9Rm9jnq1LbRehmgnq5uL5UaV4E1cCC2F7hco182Rbu58Gvo2prBapoxALUYtMMp9hMAUip47",
  "key14": "57mLgr3ZGAoZTbWB15voZMixqTxGrTusbsLcmvupixZ5tKzZKkkPzfnkSkHdPrNUAUcUnnddAQknqTRvmgpaEgnp",
  "key15": "2hgDYaUrkmwksca3Wx5K1yPgohA2kwfp5o4yjqpiQbwNaMSLjw3JinYmmFQzLpwo7cKFGoaf9CDMT65FHHFahYvW",
  "key16": "3vr715mCf5ypMKPTC2tYovxWe4RGsGWg2NCx5aaJyDy2RZ8G8CSkFkyTRmue4YSgmXG9vx9ectkxv8tB9LqLY5bk",
  "key17": "3nynEAu8sxvwe3QWpRtNJCZJcJnvdB2zsxvnbkm8cMaBvvtxsu2p8GTEzioHck3tbniLdT5JLvcdaTWS5vdoTaWi",
  "key18": "2fsoefjH7b9aoh71uZyHyARJY9iunbsGXNYWj1F4sT3Ae9MTmHUDhzubbMkvxTNhKGWY7id44UCenM4sR2u26w7W",
  "key19": "54Lg9XYHw9oMzesAgdmx5rYZbC2x4nBpephtFSvc4JcHZMZSCSLwSYraiFfj4Z19KsS1iv9VujzCg99YeKUFYHKc",
  "key20": "2hq4P2TuXs6SwbXvSw25dvzcJTrXibf8MqeDqUpco7pPnHtC2EgR1yyvTdmjF5cvt51xCpCLgEFxxSmDPDFTLYGg",
  "key21": "2Ybb85M9XFw5goS7qtgmfzSb8apkPzKbKc17C3cHxNcZczC1MgSR77KPmDfwCLug2KdLW3hd7wF3HfxCYiCQetWW",
  "key22": "5hnxHoqksCtNNAK3145joMrKzC3KSZxfbsyCTSBzR86QFMxTFoLzwf4RmXiAkdF4dE4cgHxdK7e7urUbviH8DtwX",
  "key23": "n4boKWRcD2YneDMheax3k6YpB7cZxSbutMnRBApYyvvXXjzjYNJ9fisFzSmVEYz2cqa4wKLT5BSedARDq1EjayC",
  "key24": "FnUhMPmyPYJUTnPT6XHxqjZUdRQvsQb5ETrtrvsBddDh9cPjuZJ4AJaB5xZSMDm71uXBbfVMX12R6YPVDJLCXVC",
  "key25": "k1KeZQ6zEhdF1ZLTucndyKG2QMV1yZj5aaSgJ5yHdt8ovm1QrcgAQRS69en5xLKicWQ3mgZrdX5nia1o3FZWv8B",
  "key26": "SjRgw8vuqDYAUtb2pz1WqH6chhjoPQQSgXiTepkBeXyNNsF76227nuEBgVCKZTyEkfC2inRbpELm5mZEHKyHpNU",
  "key27": "3yqmyn38yPHxb8i6f4e2MTRZPHCaWWwHUeYKZNJY23NidguGXs7rfG7vpny6tCuvbYKok4TdAnfEtLpu8GmFybvB",
  "key28": "3ELA4dpTe8ziMEJFvyCrLq6n4ViWHXDBpbxXsQg9r3cELjcg4uiC1WwsW9R4kieLgFKESJJMz8T9go5iyceW3rnT",
  "key29": "57mYsVgdekeP4BQLuNzZexVBx7kCiXTdkoT5NNC2iycZiZmWaRYrrKvhsgnooQBhcuXuv76vDqVu3aQ7bceZCxaT",
  "key30": "7Fud7y7Chovf2NtJrSzSnE9dfgP1nb3WtTQeFcqfYieHrvFjf5z4GqsYVVcZr3BQ35bxBZFLEPqvt6WjLurTt8r",
  "key31": "T2QuAASkifQNZttkmB4ihPeEH4tqbaakdTEjCUw91MovaB2A7oNjsxBK9AbK7R5Yw5E2PTUGUvd8DnDRw2PoKzF",
  "key32": "23Do3QVfY8xxepE1pydkzFVpQRNyjPdkAYZLZwfT4DFMvnu8zBipNL4tGMGXKjuRX6CbUqeprcUDryfcge8b899Q",
  "key33": "2jcSf3NMKtNRjPUZZwCdsxqyAhkpBsTkL4YqQkcrmjtStVdMvZHusb5vAK6jWYgMZxUANV3vckCDpc9HTPsECZPc",
  "key34": "5XucmipCptjb8typyvLyGgbNRcjUEokwjdhyysqqKbHAMmnQKFGwyP3hYatoa5zMzreqVFUBiF1SdG8Grmk1ZvZY",
  "key35": "Ka65B2mHvB63tsfPZkcRcfumwshdn7VZtVVEN7Eh1AoGSVMTdK7KfgPrEje6fWU1SACJfi9FCjaEkniqZQYPs79",
  "key36": "2i4acKwqRaqCFCm7Z2tz25TyZjuZUGr94LVW3ptCrnHVMiikojwSAx6dLHokKZnBw2S1xRAQcVykG6ZVbsNCwTj4"
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
