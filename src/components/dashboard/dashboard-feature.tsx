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
    "4UrgD7pcvpsvR5st3q17m4fDrotyWvLmGK49uxUaAbKzLV7FvwD5imqJwKTxZMfejnbdo6t2wiitY2P9VYBkBNi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QLEiRTg9CUdzdUpQjvifXcdifPzhYYrS23hHdixcmgxiW3HJG4QWhHzEuEgtRNPVUKLEZNfDqPsLe8McxoMuS",
  "key1": "51nLEtx87eTPJs7hed8gj3GosAwvvtUrhQCKNyDDsRk8AwqW3Whnvf5h3fRLT24NoVy4PPJcgKGvpAYcu2Du6FnZ",
  "key2": "2ZMhK6GFyn976cBLSn9JiPHzbY2FfyFGvj95kkKU54DuHZEHUVvDcoqgqNzaY11gYaejLXoTXsHfHnLo7QabxLCs",
  "key3": "4YDhrj8YxLTqgmENzVmhrgAWWavJJyT3yJhek9e5PMPyazByizRsYXbNWcG8VzUXEdMBUEtFJbavnZjbJV7PE37W",
  "key4": "5a5cUtmcQEzXccRAJ7CrgQsiMcLLDG7chM7UkEs73cNnoGEbugJi4jdsnBmSTxkwitH3zX39VWepSC5VNXjH9wTe",
  "key5": "4QniMBS8LxvupM8sCrSm1kzZj8vTMWBAotpszjJTLMDjo9eT5a6ziTKbd4T3LJZm83yTDjRkXtD7pQE8W8Av4mqE",
  "key6": "3mQXgsF6ff5vdnrs1QXUeCWGTxj4o6RbXvJzakch89kykpT6TKbpH837NBocVthRQJB51jjJgswrtHLKEtcyk3EW",
  "key7": "5frKYfePf65nYYbTrDugbsiowhS1SLGdLKozMFqGxMo4GhAZmRbsHouYumjTYhAXgyNDgrsdWc3w6JN2PHRWCxhH",
  "key8": "3n4D4P9sG3LjgNk3cvBqvovzn5tQekLXxYciEyGnha3V4C5groC6RygQhVabFQE5pUrssoZNQHhV7sKZgGPqjZBJ",
  "key9": "52RhWUziYvw7mQaqphRipsUDcNRAYnphBiPEx9dGKWwDJZJJGHYrbBhFtTwoiRn9wPNA36Hzwc2Y1wGpZzNShbAe",
  "key10": "2CrSgZar9zoeP7Z1k2QSRbjhUr41UEBg2JbygzGpFriogXhcnXgKdgDRcT89sBmMGrMac3PnAczbRG6T7E7m4dha",
  "key11": "67mizn4Ww5diJK55QWkZHxebps36GnfNnQfUsUeSXUYwbC3H5C4QW1NZWZjJ7feopM9MRtm5N5kTYxuTYjYUeSQM",
  "key12": "5YZdV97fUHNs61uap6d8EbJM7hX55oZweJ2mo2VdSyesiYsu7mAKL6ixwqSCZTf7e8hUwydP8ZoDnBRccc2dMEAX",
  "key13": "2hjfwH19j3LdRhAhG9BHQWQJXYSkQHsaTvaHa4f7kbPkonxK4qUEpcg1aMfJmzSDcB9q9AJ5UBGkPe4FqBjYVra6",
  "key14": "cggDGNQUDH7ioL5EumcmRDkfptYVzU7pMRd5EswJpsx1JFanUjpbqEsPo9PD8BecYvJx5GCNxdtYxQ8cXHmQdE1",
  "key15": "3E8x5ik4piLUUQXp5MJUumXZLdJvcig8HKPKfLVsBSWzuuLbUSp7XGum1kd5VQ55enJo1X8yT7jbkHNsDQWviABD",
  "key16": "2D3ExbYXYT65LBD3mzjMbpv4T8YgAdQs2hRfmCJPbjXabbCveofFsv7qku5nr8F9zEeeywBKSQDfU8KXPiQDSkj8",
  "key17": "4Kfh4GK9vBcdymCaqVfBE8iZydeRyvvQjb6oyVkvFEomSgqdT4S6n5n3Qxo8Hvy6ZcasnPvU1rqiizWwTb2Etoi",
  "key18": "2SSus4vQsAwYoZZFErQCULyaQuCcess98z2NQbcNQqSfTXxsNHA86PGCshJEbHpmbUf48RhPaXfNBDiWA1JqX9Up",
  "key19": "31aDJ62ASBmyGCuPrTjpZfw6Cy92jq6t7HiB15fH59XCyAZBigzPb8LzY2omimchcACdAioUDrDGFjyZgeRPipBc",
  "key20": "XgCynHZvKji4LY9WwE6ada5iujxZiPWVLuNKp3Sn1hTbQm1dsQ5km1CnbX88fQTzZRdaP1NauovmzZbbYRsDrC2",
  "key21": "41pzYXVfnM3d7AP3UsPxALKnD1F8adKUhLXuw7FaztBfrRM3rbXD5QZq8UA69shJtvFn3vRUPSFX7gu524TfCtyX",
  "key22": "4anhF7Quzw6v6e79JcLxmz9xrpXXofyQJozGts1zK4Zgx1gjWL7mXm6Yr1u2CG12rxi7RkDkmY9Ss3upyso7RsQA",
  "key23": "2CQnTKMmCbzfEFAcMtLnPtUEMvtpdKQ8dCTBW1npi5nSgrudo8Dh53uoDuNsvDQ39MAUf78g9fSeBY4bZSacZKDa",
  "key24": "CKc5J8i8WvX8JGs5fNv3SXrANSyKfo6v3ABU7ZHNwe19ZnGzUA3zJrFQPE4bqePQYm1wiDLMu72iYzCskHHcJLT",
  "key25": "3mzNRqmbDA215xPxYRdsDx8NJejF6hXxNRUeQ8pvmZp7dQc5mFYAKtYLF14EcKhQ6H3xJd9s5B4oFEvXSQXW98aZ",
  "key26": "36WYxz6epSqdZjYoLygwt3MdT2jx927AHSGpN9Nh5qudKJnYWVK2Xn4xVfnD5W3VHQ81QdktCordCZUDkuWMETx6",
  "key27": "2Wy5euUVRGmhFhxkC7hxkpJsWCV1EVqsfnSjUha5z6ab41k8TancokjJ1EUwg79Ync7cBVrPhPcMc6pRpDwo2tPu",
  "key28": "4oAN3wdbqLK8E8kpHk1XZgE4pEXgoGmqbQkwSzcD6v6K5dyxGD2YuewZHPkBwjhRXpuEDs6ZytXecGEbz44U5xH7",
  "key29": "B7VtjZQJFQXptdqebnegU1at3ssvVyaeZsjFH43u9J3JYoSjLenEH7busq6vWQmmRgDg9WZBuFHDSiA3raDa9jC",
  "key30": "Z8Mr9wjpzH2QdfMqmrJ2Lr5KtFLn4HF5SC79JLsyhuLaAmmo2duvUi1AH6wCyBTEG3vgB3UCG9empp4duACCDRn",
  "key31": "3cwtAF2S17riNKHKXBggndMaG63NwMyt1rKZrABZDomH51TuWg7mevJKb6KpcZRFEXWKypi7vvDTFS7Rmu43BQXa",
  "key32": "2HRNuGfm7yS3SZ9zQ43cUoWk7Wr33kQov3yVMFTTyQp2cuJ5WVjLGY7wev3YUcG4nqdAsy8rcogMwdX1eYSaS7Na",
  "key33": "5Umv3fC2dRdHf8twgW8SbikSnNjSVLk82tLj5rQCFUrF2QuprfGjz936Pgnf3ihJcW9z7iu9mofqtb7ATBKsQoGo"
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
