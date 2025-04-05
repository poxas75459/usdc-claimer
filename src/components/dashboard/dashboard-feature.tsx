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
    "2AZYzzCLYKQs9N8L2DiNzyiZj8PZbMvsU4ZunNSjbAxB78ErGMXBPPCkysnNvdptKphkcYXUcqtGxAWoRpaRsbXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kbgbhFzA1aawqqv6gR3YckFfV7ezMfe5LMoSZBbAbYjk9LMCDk1Mje6ke9bNuVaYBdzAKFRx4iHjHLQRtgFFcSg",
  "key1": "4dLvbGA29z6VZHedXALMmwTRyhUv4tMKFCAeRG3YGcNBgEZcetsrzQwrX3vgqQmdEmQAFcgENjcdNqRvY6bqqYZZ",
  "key2": "4s6xepg7spfH5kRCybPwTVgPNsQLFZsw9fL4VE4CeLoazz3Y9E1WwzCydovtSj9Ppcp8yhwynNRgsJVHVZ9LBbVP",
  "key3": "128tb34i55XWjPRcRs9X6Jv8Ff8xCcsY9rrUS6dHSAu8zRs7xBv4KBnuQZXcw9xjEmACxapiz2WGbVfmPguFZhR",
  "key4": "43kS7SC7KPrWRrQMKLVVMUgTTbJvrMNqHzCgvs4K1Cu5BEg3x2osJZ6q6sVNcNL8rYSPBgS9hckyvJmApNKHjdhK",
  "key5": "4YPdufN5s4updTcpvPrffY8WCTx1PmqCWT42QTUcHT2h6mCu3SFv19rHHZ3gdf6sh7NqeZH7BkmX5Vg4T7w8awSq",
  "key6": "3D9w27MNMNFUS8R8meEBB23EtaFqAnjmUrVCsK7hs6oBKkepsDnA1PNPpJvdA5fim658v8HCqfN9zBFYXHgy2SWV",
  "key7": "aC6hgphv1TkZWmXkZCZ5SMX36QYBLHGtutZv2zCboaoWkRCxByGvyVZnkN4nR8VtuVun1oFf6GNioYLHWLwcCYo",
  "key8": "52kr7Mc9UznbQgmKpA9yEToGRwBH27p75YbUEGzN2ssWpc311UGMJre2S2jPd5dNHUb9U5LWySEtw62wVeVzAXoj",
  "key9": "3nNHzCzSchKvwQXDz7KVQDptd1yFj798qxczzo7KWAvDD8Q2J1TS83Y81uyF382yUJqoYa4y5A4hPCoP8VbdTMD4",
  "key10": "2nbzcn8Zx3RPWx9RCBjNQnqZyFZDXj3yTvFTUcUiVB3zAjMMEhQoEu8tUEz1KNE7wCiAmJbaGw8pKXxRoZ1UN1Pc",
  "key11": "4A5UhAwyjtj9NbVDYhuWqMWcrZ9FmFUf46sKUSs3k6Gaih7EJnyHbVGdH6XGfydjjSAcAN5vjDTcGSVqpFaLdK9i",
  "key12": "64eMqUSWeLX2EqWNW2NhJVBR1xG4XREMVoaoVJysmcsk8YdJq3AYbN4PM8fCLYvZ7yUMh7xGgyCNnhPMDRSAmrK1",
  "key13": "4rj7kwkmLmi8FUmnZeTV371uJ3MWzUe9Te6iiQZT9zbvmuZrNDPKoLSQdDEvRCskeXdJPJpxwexXqn27U4M2BGJk",
  "key14": "2Ako9ok3u1z1SfAFsurT1SrCvW3MAXjra7KXBf1gFx3KL7Q57sh37dCbnbEMf4MjiZkopSVMpyaSHRzkpivNwGY1",
  "key15": "aT1EiWjHJSmsEcJbR2YugMTNudb52hcm8JrCx8GyDMn9gaW2F7sQ7RfaXpB7j3nTv7FkJPPhPMCmy1iy2ssgNAV",
  "key16": "5xoAuWnqXLW8MWfAvA9bqQaDaUpTJg2thEJduDgc7rReUMqUogJfNkvNHsKEXB4dKnmYzoCN8dVxUjiZLew52XCV",
  "key17": "Nk9uishi4dZu5EWSMkzBZi5WpLc9A2w52HMELoNeuAzaiiTN3M4sCEfsvRktyBDSNuiJcMsSrE3WHxqi7Zpsg6Z",
  "key18": "5Q3qLP42HdQc96AH6nChiLjY6TMHcZDdgdzHymdxbea2vU1mzCxMJBAaMWpk61KyXnkh9PCsxVmSiZiFmsqhfU5s",
  "key19": "2X2tWyzM36jRbJ6EQr3ofkhDEGfWVEJWspL8GkHv8bKgAX2sGQzVhyy1YrJZT4TWk9PAJnkfoYqEkMQaEvFZnZXf",
  "key20": "YmEfxvBdqAGcvHRaCafvj7b1XMX3JrSvy9GAhAiptbmV4WA27e7UMDXocbH5LbHTYZZv4uoM1Pu3KQJtg7xW2bv",
  "key21": "4J4VYwFtfPhBcg24e8fMCDTVWqZr5HNrLKoAF9gVNGqpnnH7H2MQmQUEdmbKNskKxCWWfkCDPz77FvKqgcnU7BVE",
  "key22": "529sVnzrFZMc1YPqaZgmbtMi3GFTxWSLuYdushkzwGrZueskzXJjzVTGZjr4H5AMKhy4GTrZ3nLsR2yBbfaVf8zc",
  "key23": "3E9ZcnYJamWsP9N5BFPLAmBUzdxSBqK2Ls2Jwu6so1n11JDBRNKPpzYNx4Pxp4gcL2noQF3k8PUtkGz2Rkc6tBtT",
  "key24": "2BnLUNMmfxm2kDoFo363Upvxt2C689AiTjgMyb6mUEGLKpjjdJu41ZcKKoTPqKFWfXXBPen8M55PVMyHfAWqzT7f",
  "key25": "3XmyrPnkkHAmiyk2FqYtBsCxNMiMvHPLMiC8tQAbKJKb8H3Kade82ECwxKMUKAzBV7Vupw9tX6BZwgB5B1EPGZMG",
  "key26": "5nymWW8NMUSDMLT8KwRkyd2R5uZK5YgvLfoha6pwsP9yvEbcsNr5wVF8pH6VMAnNUUGrzzwYqZioMZCdVeSySL1P",
  "key27": "45SK5qLMBk3B8Qv9YgCKqcEwcaEDUnTxrQ5YWgyeev2QyFA6AKBAE1B1QTXhur3vdDT6eCush7ENShJ6VsEdG7Cz",
  "key28": "47wJGYGEHzbJ6hSSnT2tTGF6XiNGZMokTc9aGajzVU6xuUF834eCoF8CgoqocuuHj7xviLBk8HraXKaX8wC5ZVyG",
  "key29": "23vRXRoFd5bkcMi6fTUhLHL6mqJqtm92h15SykmjGo1C6g4jZCgxszA7nSQ3rQpFhMU8yD2yzQuyim9ddubENhVN",
  "key30": "2Pcf1571ckEdwwNJ1jSLZRk7Unvh1QuL4qYyDmeBpCutGBujCUnhYuB5t7QBwNpEaXAXuB5WXzH3uSj6SG1v7Kqn",
  "key31": "2CJ2wszBmSyABC1qcnN9pNPvuJziWmcr7RADa9D2LHUsghwZLM9rcErTVJTpu1VmK4bk3dkWcWp6HfSFXCB7Btno",
  "key32": "csJXAjSxJj33osCznNz5RDZxZ4HcHFHhuc3Kkhd5ybXufThKhvivLaLZ5v1gjprtWWkafyMhvuy7xTUdwfySX15",
  "key33": "NQgk3y8SAN9iqn6hfXTnugU9oYx2hm1GVxMnPLevmA3hRzChekxFEsg1isL7PZHfjd1eh2rvgPYb7pxayj8GzVh",
  "key34": "5oEYFTgtdvkEaLx2PHBN7EMjenrL3scZfe2Tm7qcNDNmhMD1BMcmvJfVRwiQEnGvfBSjk1esfzARCfpZRjZaAHVC",
  "key35": "67A6i31TbES3LpCPrBz27DsBtfMn2dhaPBERjDsoE4gXHSmSndsATueYqtyLmfZWQyTtaSNpNK5ABcY4mV44q43z",
  "key36": "3oLj3PQWjPJLQEwyX8EonTRuhrg3bynf3Ye22wqetxEEHGHUZnCHrAz2gNxNifXzm58BqT6xrsZdmutiEFpPDQpZ",
  "key37": "46RfTDLYCkF3gsM4HFKNizB2b3END1gBr3XwPieW2xUNPc5hoZ3JFe8vkncyuJ5gDJmXDi92K7ZMEN7TrPNoUDYN",
  "key38": "5sCsLSVT2CeScvzcZN9FpzQM3VdHVdgWgwLobM3pr4pbJAQRZC9cRLxYCQknpzs8yV4632AYLdrpvWmBN3KbDBFz",
  "key39": "3MHmm7qWs6HXf2Md5ojRorE6YmxCVXEfbQFyaGAUZ9Ts93tFSrQ6qGT52ZG2PVhBkKKm5X8h7B9jm4sSDLwUDKyt"
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
