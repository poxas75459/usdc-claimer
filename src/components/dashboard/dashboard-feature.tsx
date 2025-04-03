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
    "4LM5EdhJF75ywJzEZ1tSGU9mCJ9DcBTM5nfmg7XmqR9BFesrqWhxjeVUMSQhDCNokVkVtGmJqwSqgpEGEdja32fT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "psEawjJeVgXJFHfX6tA89epugDw9okTLDhwFZe5amFvSwEDx2unvekxEmyEk8jbZrc66MjDCLyddhAFFSrgVzQF",
  "key1": "5PsAo4WMrKWkD4b1MABQ69fgKUBKTRdqRBxPCQRA14BLGzm19WGaMRC8EG8CWD2kkYjw3KxeM9DA1bbnQLMKWjZQ",
  "key2": "4aLvs1fWribMeqLNVj3UK6o5YNwWjuuR6KzDgo1sFGjBMVaGvoLbGZW2S8u1FNtQ6bj9xkZDjzJfpG8oPYE4MEKy",
  "key3": "4fR2cauWmnEXazMP2mMCdTi23TsmKMT6Vnv63QJN3yEhkdcKs57VZf2BqPtKGiDefj4v8boLmihEHdXw5mvHsDK7",
  "key4": "36ktxHFuwyR3fha5Brsd6nDyTgVMTfdrZGmCNceAY6hUzugt7b8C3TT8ifTXmSkFkJ7SHxD4tDGDS64BMX7EQuK7",
  "key5": "5X7T9xwxQbWdeAMTuqpg9XbMjwxiGx25RiXvnjdbi7dNwy7hXzNFnUBajuCtB2LYdGZvu1Q61wncHv6As4YMzgJs",
  "key6": "3oxYiumCovtzgLVzQ7ESgZsfdJZhYUY6gct7TS7C7Eu9M69eTd5xPcsWbQfx9bo1QA5YnGZP94RJK6wwee9CBUft",
  "key7": "4cDvNC1VABrXuZ9aoBrNJgJATjLb65kUnWQmVF6QQBKm9o7k6XNskWhg9LQ2Ldrx27cSfxkuBJuv3LRnvjaMuoAw",
  "key8": "2DGYkwk1VtM8eQ63gigwqdTxbJNBape2ydiUxHyRkuBXeS2uMQvqaL8ogNgLcKnszto1Egfg7bJjVCgMze3446MZ",
  "key9": "f2VCPYboDkXhW8YA9uCDSzsb4uW81LG6p4TNmFMuBVCdR7FAXjG7FQToqhmsqJwTECWuUmr7ZMF84Bb2cdosAMZ",
  "key10": "3PR9dzoxyLsEZmaBxJ7oRrJesb35juPtRvXPph2TMs3iGS5sGfrTRJYEMWZkhJ7rhY5a86E4kPoMDFMpBMw5o41w",
  "key11": "3nBCe94LzJj5yp4zhrw7kbDc5GYXgcBxBeE65qhnK9sb7qwC4R3qztwrYcoXHkUYU6h51y1pzfme3DuJqpFKXbd1",
  "key12": "4K58wfDecCPyr7waZ9Mqr4xaWuUUuecBTY2XFhPnE6137xohH8j4kiPh4xsCc6o6KFHvrE8hX6EiGtCW8EnZq4fG",
  "key13": "2A52DZ33fDuRZvE395CPQ4uZDEFgNtp5FPrw6rnVzcF8sPBdXQ5mkp9f5JVzbGB6siDMSJb6gfrCDu7AZAbB96kh",
  "key14": "A2ikWq4ECgbQKFYzh5yig8wvp1w47DXRvegL9ZsvQ89grkUq3DEdC6ao4Z6aQxSNVdanptfafppMcy7cg3qqTpZ",
  "key15": "2B3LBPyfwQN3bdaR67Sot5Lmieq1xeJq8LtjoX14y6BZks67d1Uq9ZZ8pEQCkfMCiAJjcU94aFYcLfprKvfBHkHt",
  "key16": "3AMYENw1VW7ztKConYXQXaxybzwWzjqmGKVphjgKPtaRmA7qhA1uoj1AQy8hj4z1RBk94iGrpcd7iUQpGnyzmNus",
  "key17": "Vuvhxk5NuWNbqF4eXye1kXsbn3cjZSNtRRmFVX8TSijy7YyuxBJHsR6aHT7g7Y2YvAZW2hdYgRHpkoqweLU5Sbs",
  "key18": "62sL5xjcZkcvftCqup2vhnA25mxhHHQwZuRHp7CfFPxFM3K6g45HFwXZrUy5VwZPVu9yKxttBzygCgeTQxmGPwFi",
  "key19": "3XqYBCAttbi4exC6xw8XJPViBgjWTyHUUd7foRDHx58XqLWVkPc9j2crerNpuF3pzcDRnDBDg5SqiqXTe4BCmVGd",
  "key20": "2LPELBqfVhCXZy232AWbvNJU55t1KAFkBCnsAv8ts48JKfBiEYhmJP7AmBy5Hhk5YzH5PjqGL7jzse497jV8B5Yj",
  "key21": "C4xPsSXvTPfB8T1XsHcKQhPybNjepeniaDCmDtEghY6B9XNh3h9yh53SBFZtYMLupR7uLsRdChr42wxmuAJPfUt",
  "key22": "owaL5gv14JmB3BWi37DAEi4bzqGcswTrRi2Bei32wJYsPho6rAs8LUsh5KC8WuUGDvvF2Y9ZKmMYb2PgEYm4mxw",
  "key23": "5T53Q9DiiiyigFfkJFd1H2ycRbDc5cBwLHTzbPZez4azwGrWRRWs5JJYroaPfgmdLjRhm5CPJAnqX72c9o2vmxUk",
  "key24": "2tDsQrv3HvPnDR2CgLrGtF8UMku32KnyTU5ZDbTPzfxSCM2Vjjfno2sgQwYQ9mUjYJTuGvA4SJMMaP1pCe4Hqw7N",
  "key25": "56wWzgq3ZEzzFEMAAnhidGPj43x7WHqnN5d676WL3BMDHRBPdv2PemFx1YmfZVVQs5a4AVNgn8tcF4KE1Mt6YPi3",
  "key26": "5GVtt49x2EdPDmRoe35X4NYrSxFTjZwpHon38QdLAGgo3iFhY6fmZxtZQuLF4GekUoN1TvFqsASjLXmEXPrfmejj",
  "key27": "41gWb4Z6Q82LHmnrXtQmLKmnm6LCta83z4C8iM4HvNSdQ42VhHhAukDkywoNH5XRe3PjLtujx3Gk2Pghr2osX9dG",
  "key28": "24Qn74kTcxcAGqyJkj5anTWJiFQrcJCP9u7AJPd6ytW7paFYX1orzTuAXv7cRLaJt4rPLNJHdhbtFTmokjjLuGch",
  "key29": "3kTWGX7UzVjA83C7o1nQrpc7A1mMjV15c3qL6uexYGo9iv1NWT9nRPbApjneue7h2VaGjqyQmev1onr2hhj5Jwjg",
  "key30": "37JowYE86iprF8xwjRqYErkmX1FAGkt61v5FoJMQpMavn2uF3EiqNxi9Z8fEAAYv9tzqcRsGQTLA9jXGVd5gzyWR",
  "key31": "553waMYirRPqCMBuPaQVa1n2kk7WD6AAHr2HBX6uWQXHXqyiSuUD9PyVekpzkLpcWeWjhfjd7Vifk8deUsDQp12y",
  "key32": "rFyc3zc3yv3TDFQnNBfe5FoAv9CV97Y3Vtkvv3mRUBCM5fnWkGZck7kB5p6zcXGUXCwwNoaSfrspZnNLpnK4B5E",
  "key33": "3EzMaSwxTrAdPhHXjorp4cdWnYNqHCyegWZ3R8nYc7ZXvXyCtEUpbqw2J3nxGW37zzk2AzYqWxeGd8BRLaQKZRiq",
  "key34": "5jt8Mk3zBvAM9x5QckSG8zwoLKFW1fGQvKyJ8MWDaXf5epNpATKWaQYX9WgutD5Skq3rJP3Wan6zshvS9vZ18az7",
  "key35": "3a3jeYJfehR8NZSEDCNX9Z5rP9D3AhjsF1rYMTsYnZt8ET4dWUH1WtCe743K6cJHTCj4niig4KknAwYEVHW4fdhc",
  "key36": "5EGVazWSwP3wRi1phmBWnK2XMcycNLmLkrrTgL2XD2AytFKkrU9Mpxigd4EcVZVR5n1hdD74LMbT5d2M9MMszv12",
  "key37": "Udd5LPaiVStyqR8z4ALoLSUEadFLVZvqjRVVWTbMBdzcHCW4gSJh1eZbDE3GuzU2fn8prCW3PSd6xxaPKo4FuWP"
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
