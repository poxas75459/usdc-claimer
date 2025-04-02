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
    "5LCEJJk9qeCJE8PRWyY9Kxtyewh5sMks2yRf7kuE1zPjY7ayShdEvkJCzRL79pQZdacu8HGhixbcAM6zoX7nGFJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3M7fK66sPUFx9Rf9W6e73kTb5PfGJG14hGFKpX4Nb93G9expAg6rfb2GBmeBFRDiwdi3ugbx1t8sEJ3VMGZDjY",
  "key1": "2LXxuCbopETfat3W1rSN4xmG5BWMkDK3VZZxj1AJ1g9VCZFBgTBAbevd528p6WnP25PMz7ANuQXFWvrKKEjbFRPi",
  "key2": "2hXvCHgwMUhnUPttp4hsqZDFWK8UDLdnDnoe6knyTvvY3e2iUVBpDCmbLSdKcAauNCo1NWCT6FJM8vF9RHX9XPGi",
  "key3": "4bgHPYivRmamFmS74Gy2QCcBwfeb45Eg2WTYQT2dGVW2dDSzrxoocwTg6NqdmKHxojj7DGDcLmLMLTtHXPfsWHBY",
  "key4": "4ZHfSiBidCF1hFf6UHdzYB34akHthpkDSp44czhiXc89CXADhq9e56diBnMTgdQfNSghYJ4q4iwQ52Gxhs9fa1s2",
  "key5": "h4enaVEdZnH42BLNDPZvYc3LHegvUQgjFVmQSKz1Uc1yx29h3dYpTb2j6zqHxiGxzj5XM4XeFtKHkZ4vuwdSqs1",
  "key6": "4hKRpNNRPZqf7GJUQzjnxBH4TEGKYxxnQXL9QgTz6S6yHyg8SUV4WnoGV8oMTRcUDTSbukNYTsRQPVonmYBYL5Bp",
  "key7": "5hxaSGz2Bv8YioDcRDJBjmAdBo6gcYP86jdnaqX1qz24aRDmZ576wHrVgRvcUF9J87Mb2xndZc29Gbtbg7Uj36Sr",
  "key8": "4AQ6uyk1V8rxQPYxxfuEQEajqkWpQSv1BSxMvTc44dxD1aDTPnqNR5u8QXhioVqHtJodKKnnGYdTG4D1oQgeFf9B",
  "key9": "5eBZZgYraGjAR7dndXAb9ZfHrHxMTKJgL1tQU2bBuw7xWcnRPzkj3y41BNJ4SamD5LeVgpveS39XfRLSx3rsJwKv",
  "key10": "3tNjCLMMGTLpiXnMHpPiK8BH9Bsvyez6w3fjMC5XP3g7g6b7wtuXfD9aVktvbDJtEycVFQVqerUZESbEqN4DD9Tv",
  "key11": "63jjBCigywJqbgw3SJBRCtkaFBDqRrBakPtDwW6Ffbzxw8yrHoPzPrJSU8haQe55tr1WnDfkcetecbUq3MsPN6BY",
  "key12": "3gKVgKchSJvPDsdT6syHKF7o86vuYLn7aa9Kus4gCWTZzaaN4Fe7ea4HVTafi46JDER3zoGnkcgbbZaVk1Ccp1ma",
  "key13": "p4YxSAgj35nG1VnbHgByaepnJ6dP617aCtJaVuHimxP5UYog1ndAZqSiXNWQr4vgHjXiJpFEHNFzVtZbAhk53w4",
  "key14": "2x4vWvDcXqBxH5egQoWhXFF8jKCE22naEhAifxDbEtB8ST8SYZur2ZEnydxZz2923S6nvoGFtyoeP7dyP4hP9g14",
  "key15": "oZy9a2xb54z5sfF2WGYJtGAwnRHTnUVuH1N4Zdd3sMTAJEkocwuywrtv1rfk8BZFfYWr3TMwT5bmc5rYPehQVw7",
  "key16": "2UUKP1c8uoeVN1axgUmrkcoBo2jRy2ZhiEyGq6gJ4ztMJM4yw9ryZV9f1f4a5M4J27FAP7C8DaZAkhuPYCyoT4Fv",
  "key17": "5EYm4oA1WfMBGJj8119xhjdiP1KVHNHQmaHosfHjmWvfv3NjyW9rsvSTBVNdvoA9uRT361HAKPQRAmK6BTBiUR8Z",
  "key18": "5mhnz9upzDevKPuGZ8XhXryydeADjD6mXtzxyj1Gtzx5xyp1LxQDLTpjBswfqLFgqHE3MXBU43RSGkT9Nk5gjsfM",
  "key19": "5pHtdrGhnFWYFGPB6hh2QkM3CcMM73XhVuz3S35QA1erzVUkyL7A3LxKxQ9VuMEyPSL8XFwPUqekTNDYsGZKPfa3",
  "key20": "5LhTXS2sFxPr9dLVeu8nWrP6S2TKwEAgKg8Mx7Sncj6KMFvu5U6MRVJJizdaLbG4LiNkeNNtbwwWT4ap3AHsqhQ1",
  "key21": "akSGp2Umd3Xn3NXdGR4DmPHG1gmsq6YL6uFXqUwYWuC18VWttZpFk5tBQ3VtYttBMMEoDfvVtXbAs4eNPBy75jB",
  "key22": "5QYK4REkPSDWtmgaiWKXiK3XTbjircM6ggMgyLMVXRiRqYJA4E9fDoVmiuT8yDXMMnWLZybYpBK8j7w61gik5Rky",
  "key23": "aH8cJmgao65k5T4sjCk5frLNNzGZuUmhCJxecS2sHHGyYi2gxoEVuvko9o6DAYMtSxfAEGG66xKjpJNEYq5XcMD",
  "key24": "5zRJxADL4Ga9PBgtPQ6pNpUoQ1RyqFX5H7wyb6qzDgWi9PsKnrYS6xGF2ZRw8AkPi8ZyH4PcsCh5XKvvK5ZyHBU1",
  "key25": "C1LUbauYJHBu7SQfiZd3ib48SES6inbZQB2NdiSoMjjdnVLuWrVSwMkwfNX6HJDEGkShdJVqyyKL3k5GX1q8FGm",
  "key26": "46f4wNUdjBVBp9wiSErcSviVrSA3ZdGmDqkcusino5AgdrT8fs3AoyRbQf1oHAMMMKZw9nbsq4rFHZ15N1aW5Uxu",
  "key27": "vEKvzEH2VcyaiuppKN66wezFBRRTz5EEFMNa6DQJNYFoqYoYhHeRA357rG5nMUfMB5ZJof75349sXWAFMTXxsMw",
  "key28": "4N3AUyM6RdquKmZGpPfxTP34jsnkqa6eqc72pdNHKLoVBBQBxU2XXZXApdwEN4z7v5eZXvXLr2YZiwc2uLU4qeJ1",
  "key29": "66YUbznYWJhkmZweNd8fiRw8ckPQYEQ8t5fZMCowai6vb39NYgwvnjjf4YG2S8ZW8otaSC9R4duzAFDRf6Zh9HY9",
  "key30": "4idH2y2ZvanGATYiBcVHfSDECysoDWTxVNvobsLj3jzmor46KqSFcGQntZkFams85VG7ThvCwXFzLGF2t8S3Yteo",
  "key31": "3UkTpemZKPstnCPKx1P9SYCrU9evvi4GxgVbG4oBff4pCrmh9bz29TWnSfixT1EhqQ1GnfBiiLVJM9SjhMk4rQz8",
  "key32": "2XDRWEegVjLePnnCZN1P4bDgWYzV4fXkkftkdgDCdvHnjZ3bzrZh7Y9ihpapa928MBwEMVEfoDDW2JH9stk9hqJk"
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
