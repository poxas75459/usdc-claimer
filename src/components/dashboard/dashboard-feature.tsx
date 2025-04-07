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
    "3NRar9pKPHhoNctnJCoDhmijAxqKerAJBa4mYrtFUYChTRkjmdHNKEQ5c7bmbgRKH3Lb8EMCQXEuNCXLBE1fDGcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57PJgbsog6RzeR1d6ND4H51vmrqWYBo4GwPzQQMtr3GYgxAQDqmu8rdgEqPrL1kgwJpTB2M4Fq6mFQtfGNZtWbLc",
  "key1": "v53yPx3xzaoZKjBE7whaFWTkGSVCc24VCCNkv17Q3FGHPDsBvonk25R2CcTcehvn85V28jFne9UyRcJEqeXYQSA",
  "key2": "4Y4AQBhJV99HHmUBXeEURjXkTGaP3U7zT1AXZHw8kue7ce4WU8y9Bwrjwobnd494UUgnqm7BWvMZKXfKszRENZzu",
  "key3": "5KCFL9eoTzxUHSnXR3N5WDvHWy7TLJtR4Hp3zzViAcPrYPs3h4JYt49G1NnvASqfCqhFUqBnDGr8Kmn5Grxdi8gE",
  "key4": "2CXMq47aMWaDqz7pKUhhpEdWBYVzD7ScosEKY5NmCXVeHPkBfxi3KijCodiRxiBNpS1b2uUCMhwQLpWZVgqK9mBE",
  "key5": "36LJQTR9AaJiXrbTUk92uGhecFKP4FghoGdczufFbbey9NEkU8sQdkinfaUK2tk9FLRZeYj2gHLjzv9EeCDG6S4w",
  "key6": "32737qyGWvGvmr8RAwQUVTkrR3RWBx64f5MNdjTFEhSWGXTmXTvLrpWwHoeY6WUtZt7RRNYhqdQuvAC25zczqUog",
  "key7": "4sG5juMk1CeDtEMv6L13SFfA7AMWHMJYQtAMjXfN9WZBYjJqbFuadkzrEymvveT82kAMPotjbf6BJHo3havDsG2H",
  "key8": "4PU3GruqSpAwCa9q4MAv1E5w5hVGtJKfoanihooSD6t6Z6UNJFTVtFmnqyKG28p1Nuq2ThmVaM2n3tMudLNCgpgb",
  "key9": "2gaamVBN2UuS9zGbADJxuhnisumtj5nFXffZwavvRGPNNu9r96FUjFZyxv5cx3cLsKedHqC1dskrBVykz1aWh4BA",
  "key10": "3bbWqvU8H5n39EwKiE7wEo97RyQSvDw4t6Ly456s2kvDuVXVJ8aaLdoXZ4UNrR2PpUq8cmz6LugZYRQV5ommXZph",
  "key11": "4J98H9Dbp88iN3vmSthd3ayZefCP4JSEjZKrKVyUomcqeqa8JaSxc93WoozcLuZXiHrmcNfgYSjegx5VszuJpTrv",
  "key12": "4MsL9cTMrKMNtqwawTbWaCjzWaqm4SUiSi37HCkrgbpE32o3oqVXLNv68YNYQNjxm7VSCvd9xbC2KeUmpBkDvKUr",
  "key13": "5csy3spExE86Mr2BP8i9wv5uSheYZ654wQzwPHLYyMxqyfbAAtg6efji342zpgHEgsFMUDzqnSGFC4Y1dTt9tV6A",
  "key14": "4WmKX6jNFamchrYcFr69uBoUoGoxAjbyG7WknVTRxm3Mvf4vUCHDcokz2gKQ8eFiNSwcEhKHjpv8xWdYJKWdfSsK",
  "key15": "2DdMUnDpnkWsVSYgaZZLSf8VFuRx28bBQ5PX7YSrV49DLBjA1fXUW4QbyL6z8AudiM6pLABaZkP8D9chYYMJYCX8",
  "key16": "3tcascb2xCtdPoYdoAoJ6jwpEUoEvTDzVhMb9HLimBYvUHr3MGQuCWgMMnRH86w15aRVfTMxq2pH7TdfAgbB2g2q",
  "key17": "3JZDE4qvHNMmzMhMitAYMjALenewpdL1wXLWDthaJutFhAKAdzYPxq89naCBLX5LWgo7cJRa84zGYCDZSrRqt7RS",
  "key18": "51n9yZnTAJfDN8HZyfTZHXqwyhqtaZj2SybrKva7PSEiYpAdjwiiknvjGjQCkn8ZXMwD5RjoydmtmyWss7iQQdqE",
  "key19": "4wT6td2qdWrF3cDyya6TGGKRWNX7Z3Wt93jRXEs6y9hYKVA6WF1privKpd8xTgvBYU9ZKouAzCfVogL25X4GcPDC",
  "key20": "3jKcB53bYnmwxVFftigwA4TzgZ3nhxydUndtyTHS2ScKYNJXe5ZKVi3V2EdM7DRzYXKYQeZEfxa4EHDfz3wKUvXP",
  "key21": "3bJj9Fzb96kh986594JjvJMf87qanMKx8cDs17uSVBgMgstXYVpmBgCCeT734obLnn2fgr6NGG2pCvSVmavkyQ12",
  "key22": "41ZJKKrMCG4qGaXVXYnzGuzax1ZYrSqqZ8cCyyWmEsp2NjnurCfMBrn1Wgo2pHTSygqb7AzoBGTKuRrW9dFkZBN",
  "key23": "5TxXrymGt6UXBdb7pPiLP1f6Wc3958SccTUYAaJAJPiGuYnUaEr4UfUX3NiqtFy8nj3RRn5uPNJJk27SpWdKLdpU",
  "key24": "w1pvt7egdiDCwtiB4abGWx9G98STXBmeBMD2yQE8Dcm3SN94rqeqysS4H4R4bZ3oa1RrAC1b7pcgCCjS4bZpDmR",
  "key25": "67BLvDoFsymzjBcRKbc7FHYUeQcGUVdYkwsNNYxFZu9Jejo1mQrFi8Lzcf3QLc4KVyMgW9VCCUyHbkvxqPDwmsAL",
  "key26": "Pj2imP5i5qoJYFRuqZN2Cf5RrnrLepVX4sBBgtwoQjfs66LNDvqtK2YYRQZJQuppfd9v71iuBAxpCtqgnGb2Gis"
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
