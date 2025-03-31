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
    "AwYTFH5n8tArEPU7qLmGBpwNGmJqwjScfRBzQjsYsEwAw59s6vB4ysEBgYk3gyoCcQkrgVqxSHmQtDT6WHpE5AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tD22E9fL81gWwHKkjctU3QkECjoibg7Nyedxa7wzooDyECUoNJQoLX7zqD8GGBgojn5X5B8pzMVVBc4iwqcXrDY",
  "key1": "5zXMmjG66NcVgcVvKpNuxvu5h4upPAfKJLwwfeuBC6bYCmd1turBupZSYjxGyhX4yvnpNSZpUTdjyQ7fRRvL76Uk",
  "key2": "453Y4frk44BTCfkR2FaTWMTrA6aNUgjves93WWrSujqvnqjL2kQcYcJwpsSk4nAdtb2UHyiboNoPnhDSHQELnNPT",
  "key3": "teVpq3t9aP9GhxR1m3QnuETgenp97guDYuj5gwDJEkSrRD9UQ1b9xGZLVGnj6WgFiNrLF6VyoPFgLPWPPidjoE1",
  "key4": "7G8BQJ3nSw2yffqKWgDqzo4ttTZ7Tcroyk6YZQKJYDrPbuBK14DskFPFZgBnYZiViXKvQwZRrzE35b3pgfyFh6Y",
  "key5": "5GrsN1ANsbrcrLn1ZurTLLubdMP8QtEtmPN1cCcjp2NAMjDUJUNvBazmzajz1YrASw1Yom3V2dRSgUnhboxLMTEp",
  "key6": "5usgBStef53eXzZY1J8B6Pmof8iRN3GsRFFnpWmuPUDxvqrKgW2arzBT4B2GW67WgJuWuh41mTgicUCykqkXJNxM",
  "key7": "2XFV4kvYSXCGh3cdyTVxdPG5YHbERSxMsXtEpuZF9t2e24o4pyniQynjMAwadg1jax39UVAr4Yg9k73giFwKdkDD",
  "key8": "5PUNC8Q8hRF1EeqQ3weaq9aLLuw86p2sq9dqup771U1q1GvewL9eNxQ5k7DpNbCPe6kpAxhfX8AuRAx3kd11UuBg",
  "key9": "4rvdoizp7Seo2EtmkbKbxUEB551dStW6k3i9wS78vtyb2xmqcgmDc9qE81PMGtgkekBe4Enmhsr8dYBTNxq1apBB",
  "key10": "3DbzdEoDmJBxoEytgsXbCMww1fJsnngxa7h3RieWtuyu4qAdEZN4isEKrLMvh9Rz8nfb8qSVuxZrwf3eW7K5YDAF",
  "key11": "5hjfy8tgBn2wyxyChF2FohEzmnEnMA63bBRy2g71fnByErCxorHPrrXGWMsCDq9cf4QztMZN29ftWh2uHmbzdxc1",
  "key12": "5sc8DU71xwsT8472wf5dp2SzQEisjoDPMww9fFvrE41eSZBb4gfzpKSFKaJpzVPKC2hrk97e2C796LDB4NMth6es",
  "key13": "fitMGvbG9g1pzxamMDo4bNoErjPPSJ4K5iDn9QHTgkW9mPT6LUBtz5trQKhtJ1HsFV5NDYbo9j12tY2UhwDHyRh",
  "key14": "44X75DiD6QHkggs56XV2BZDBaB4qahkgYigwqWrJFRKGqFBxSi2J1g93rxQLvUAt1YZ14GSZtHgLWpG3JvjToYtB",
  "key15": "5Y3qnFKrM5TwAMfCuCe4JoxQ8e23xbWUsYCejvSDeo4uSRGiPrWPyTWvpCYdELmAwhbj8bYzyg4MWqivbGzJcpFP",
  "key16": "43DS6W3Zk8GzVmN2a1zF87zXGavtFwdFdKzLzeqmQyZ1FoAXsteMGd7fkkLP7BKBc2mYffGetJKuXQPiZjFDaY9q",
  "key17": "3fWp52a8neq6Xg2grNRpmCdcQuinb6hcLVmcTRTKyykKRM6Q8ccNVnWKkFN5SF4Zqi2sVBRPVdZgHSiGkA1FvbzE",
  "key18": "3NXo19a8FhDASciuLNTLRkc1ujaB1cryc81aPeJkTsNwtLi6B6em73AS5GXmAm35LxNirrRQAcnKwmca2YaQoNEc",
  "key19": "5KLP5k1iP3updE6j7vNwDrYdssuPycskUxqyBiyCsQmvNvr9aAgkx81WputWWiwj4ehybTjCLenpWWvvgp1xqaB4",
  "key20": "H1YuZpNuExGdwkHGe8mucxg9x44nYPkLHCj3wayKVYroRUwouL8H8NXA4NV673BmnzoqFApdJYR6b1YWdenXpGQ",
  "key21": "2G4y8WMMJfAvm8eMapgjneE4zrwSmhVxzDhUVw3B3PiJHjRRUjfgy83U8bD5KrEmFh5Q47NrTj3wymXNRs6XWxBm",
  "key22": "66iU72UFhLGuyo9HbLmwzs3Yp1ZDSK62ERw9oCDF6rKcNrEsSFXFn7ysibxaXHWwVhLUQ63B5U6eFYLtQquA1zYX",
  "key23": "52fdhAeeRZmaLsN2UzdtbipdD68aTSdjgw5s9P1izPZeLtv4Um2Q9UVtJrdGAymHstQDbnSQQhLULBc4wPuYPxw5",
  "key24": "36JsfhXkUtwJXVaeDaPWqypui6e7v8V9VXGed2wPVF6No9zhhr7SLNkSDrckkFfD2uNSD4gJSdnpb3VXZsdu4y4H",
  "key25": "4WZsPyKnqnau1ad154sMTeLegL7QtQREjrrFpY9qnvjS7PfiguGtnAFS1W7AoaMw3Cjghk7rKsbtykLnByZL8S2i",
  "key26": "55132BmBntBso4i5QnML5APvYCmtbwt9PWnpkEmsLvNHcEcRwFXawywkXB2S6eMVaVKJXmi2Z2PiUD7pETrYnYXB",
  "key27": "3YNRHuq4mTxkkCVLgkzeQ2X9GqZsUXdpe6FofdMEYJZPMd7mQZzvEW9EZxvCfN65jEJecTxiPzeaf7w6joghZ2LF",
  "key28": "29Ar6ZhLBaNPHHaKc58vSHAaAUwvfxvumDGY2anH9Cek5YKecJGXLdQLnJRiXBFzetMQSxmmU66FMKH7VYgrb8mm",
  "key29": "2Q2sMkjx66ctr9ngLzX4ARys3D4i137V4KuTQTncBz5yQ6FMe4ugR8umzFRqRzGFWfWTyjMaE4CmVn2Uuhy6TwPV",
  "key30": "31XwKzpRerfdbf9XhLGfsEMC1SmX1bUXzXU19T3zjPGiWNPD9vqWrczCcoHq2Herc7Fmws6RkSGH6TEJraGiei8F",
  "key31": "2SCgMmiZc186dvYbTBdfGkqCbHqTYaujPcVCuuBhc2w1qDeKeddugscoqB7uYXtACq2BY6qr2QaUE7w5TXZJ6w31",
  "key32": "3wUBsbRYjK571wEkqSB4h9P9to6kpuGQEKLp9vmYwsgX2ytQACEUmzkirdW3SUL1RJByMq4SL7D9Jn3Eqew5SW9n",
  "key33": "RfGgsQsuQZyGcpNzis511kR9GzdipMUZ5pBtNtHJiEvd6dMdPZWpo3amqcJ9etZqCybo4E4T9CUtxLsf4cC4eqQ"
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
