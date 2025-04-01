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
    "5jHbtJ4r8M79gBrxpnGjSbSRKw1e4rQQ6Fb5f7yQxuX43RTp7B3XxRdtZR5Dg5YE4qGWrmB2M1bbKFjP6pmJ6f6R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NW1yS2pXYVeEUpRdcearCRg2FuXTSydKDPGSuTW9JSiHeGryMizi3N2aSJBnAPtuaemodpGwdeSZLPfXXxxzESw",
  "key1": "4CDw2aFdj59Gp498tDsoXaNdd3Tw8xtPatBSEjsTFbPTkFcL9sf9P8JhUMBar4PiyJELnVtfhHqA2SVJSK33FdVi",
  "key2": "4LyMRVbB3hAN5sg4gUypySmwZ4hHyp9UwwvCe9C3B1RrrLykX2bEFczfe6bxDz9DCE5RSd9nh8HHk9gn1jMG3Ua1",
  "key3": "ZCMx3QUp3JjvzoG6z4hqYMZb5HLjNK68pHSHjNE921fMUEWC2AbafebHpb9UAyQQYGw5XsX4cn4E8zrku63UZFA",
  "key4": "4L5BnhsDodysqpHpCMdc99BiTkqov75PHKV9s6SVucg22MUB2sUjxgW6iCa1ofYNDMWntUWmPUE9Dn9saLVFLLnX",
  "key5": "56KzCjHjiFcouFatsGbSpG35usmpKp5GtEMurcEf2Z4rzfcekVMw8QZoRQdFxvRvDFHvpJjnCG7oaZDtjriD9aM6",
  "key6": "5EnkNancKPwHGScJBZ4cjYZ9SDWGzUxLDG8yeMGPhmKJtLC25mPkXc5djHQesNJQVQhaSqm8iMGyvuprzBFZjF4H",
  "key7": "44s1JtnexC6g1P6Ybjys8bjmAVEsU8gBq2oJQZf4egcVkks8QZRsF6xhVxEERTvMYPKmFQTaj37xK3DqqNJTN7eS",
  "key8": "iY75T85GPs6qEcWnTxJrSCh2sDesth98oSV4D6h5BuNZMbKiE6BZ3sbgAV2vEtwLc2AWHoPSmZ49zYQjT779E2u",
  "key9": "FaTkwqbG9fz7HuN9nTvyCH5hYEpLnN3su4smkqSSgLEKfjLTUVFiWRVaeGsNroU5WRWTv5Hdko25eahmJ9r6wUp",
  "key10": "d2SDTyQyC46Ey71JvMQWXYuv3VsauxxjFdUpEUxt6FznN1323WeRRk76Gm83eZTKHM7Eem8fx4DRHb8719zqfUx",
  "key11": "4cEubnroLMVy1BTVDB9V6A1tQpUjNoB2TZUL2i4qeHBvgcemJHkyY2PCyWmKQUfC8CMcczP1K6JKraSQsbRsU9S9",
  "key12": "5bQAp2cV5XUv39xHF2U6KYGDMDfcVCmrusEGSpNU9DvbFY6WYpoqCyu6DCfW8gHbLWL45Q6RZ2SiMDFGxXetUGHi",
  "key13": "5CSypVj9Sp9X9gHR6PxWx6qH5BbwJpxZHktWsJYLayJWyTjedFhZGTFEF96zukVB5eb2sHeZhi1ZmXnfdjLxfYLi",
  "key14": "3K7bF1wYPwajz8PFvpX7f7Ms6g8QN5MHxiC7zCTexN2SvXCbfiZnjzwFCmUC88nQF8xvx8ETKDFzcYZ6hyQLP56Z",
  "key15": "2TDCGLCgD9x6dVaJ6x3cst3y8PoCU9CDMAJHfTEz7VZvfXv7nTn7idyWPeMtAW2SJ2nCPndbsW8NdDg9bQU4FnT1",
  "key16": "77XbcooC4KN2ED6UJkpe2BTPvqxtjXo1EtrfJkqt3wzSvzCMVeyScL6CLyubkBd73aWXjn7LTSDraHBiiCcFkyY",
  "key17": "3K8HDS2RouUovEUyuUSDGKRP3ZG4BFDEdsjhi74sMoH5fAR7vWfw9RKoGqeBE7cGS7QXSYAgWxnTMGEtb59aiD7",
  "key18": "4Nd4qVKnt7D1fD3WimTLuLq95MBEKa27n8hsZe9nCMcdCm5iVtUKQnd78pehmNSdU6GoZLUPoY1inXqpVsd7pGbn",
  "key19": "VTtY3Ht514wqLNGSLReQvfb7HubLBcqvspB1DzsWH3GSVJ9k1pVhKK4pno3VFvAfeY2mMdXZ2H7Qjw6nS5v9nH7",
  "key20": "4t74ZLqU3UFaHDL5JnkxJoss3chqhYbUQAqji2hBMBPx4KLWqwXAYAsF2uGGjdo2KMpDSiHmgSg9QB5KN3WqWoxV",
  "key21": "7S7wUEtt13H6jqtVMVq8aZmAo5dRzgnhsBS5tM7NG9ihNSVr8tYYqjC9EVKbsiKbp5faAsENfs9WrsADq5a2SgS",
  "key22": "24Dk6WrnjwBu8JyyZyDzimZ1syA2J4yk4GTEGjzkzBHSRZWHgbcYSBLg1SJW6WBrCUmqXbJW9yhVSkgFkHdonFdC",
  "key23": "4t8oXGebcVhQyB2iXDf3ZkdtCkxkrvBcHaXXSMqKqmpyxJYkYJsdR2MqRVJQMqDnHkYbeqtqJkgTFQPAVpbzf7NT",
  "key24": "4LdcuaZ4KCuhtAAckRaR549aibihkbR5wkncc9YL6RjTdLt98aVLng4tYzJ9NQXAbjiid9K91gKnK2dznDicLJhn",
  "key25": "3jVg68arTvsbZLEKeEi3uEBDNBcA58qd2reV2PLG2kydsDvUzg6yKsQwocsBrSzZRTak6NsvEhV5UvgnPhdQEfjd",
  "key26": "2PBZ5k9TPyxn3fTWn2bPQbcZBzxf9vfi5LNmqjg8ZwFmRbwE2A7C8hfEzQBg7ueswQRHyruB8CMAHsyEUttKZvTA",
  "key27": "JwJGxCpRuADxF2eHqxdB6faSgsNsvyn2hNnLbziXZsjyK3ispYbnunhk17fvw5YT7Aovz7Uw2sHSfujN7eHLmtL",
  "key28": "3bAL3W4Td6nih4vgiQ5gmrD9VFwaGKPYdHeaZz741dAKbyQ175hZPNJThuJTRmTanLiQHedVAya82zi5p8mYQkDg",
  "key29": "5QNuoMxWq5kfTvrwLgaKpARxi6G66oPDL9GpPFbcjAf96jopbej5pZaMHzKsw9pUy63zTXFTiT35ZiWsWtPs8s2P",
  "key30": "5STTLpu74A4opzwCXnxQYW9vVVz3MXnmatyzg6VFkyNjkmHMtMSta6p3JcRAkZPsJkhmL6rnG5eC48kjqWXnWU4",
  "key31": "3RzsFRXtPQVxWCxFyDSb9cMgbxHq1x2h5Z9jz7uHrBjJDnMYSNBVg377hNa6TA3RioGwF8bkAZPHiVCQCecjkc3P",
  "key32": "4cwEKHaHMVMFC6BXJBKhqSBAkkEVUNUBxnmGWUQsTWrkVrgif7v3expVrmUGwz51w2i9qNUVZNykm9TfPnoXyHDy",
  "key33": "4pgy46jtVQcmgGxB1gEhM8Ek7R7E3GgbZbFeWxuJaghjkrp1i5hSm2RtkDh7WFPoY8GPWXNReVRQFgmAJiyoPizH",
  "key34": "3DPdiZfBEUSg4sySyZVzsgW1H3GbqAZ8LG2EfTrtoqjUQn1BYQg7VbtrLEYQEDz9a3waDrRusYP9qcMPj1ASgxKv",
  "key35": "jQSrFqFWgMiJX6q38JTFbm4rfStDwKoG6pdkyxCuxKrbk75UaZzoY2MLfjHXccMJmV6gNUJqJ9an3oQL21t246T",
  "key36": "5UfpeUb7mahJBhvf3UKuuZRTAx5cQHX9xqHrCJJGBbHnSut7vJUCBC2C2NJKQBQL14TTzdLZCtdQa8vnbixbY4Rk",
  "key37": "45hyDxtEqPC9ggMVNZbXxtz8etdP4s7qd8YTTWRxtXK9D3V8EpY34ZGGPBNasv5GDXQzLS4LhGuUTfGYARiQUWTt"
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
