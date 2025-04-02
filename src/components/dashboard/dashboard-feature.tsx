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
    "25uNL2DnY2QagFXWhxd8VS3knrdwTXGu8o23wkgUbGBXUVJMzgm5Dii86TvUJ46QHndhyHR9EoLEPQ9j2HKVRic3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5poPKz7u1TsGMm7geSpVyyd2ECXzVDkUSWEWdiXqGB2T9TuqHDDdJGNuzQSDQ92apgv4jE8SmD74dxBEgqMXiVhL",
  "key1": "5WfbgLzHXZ9Rzke75Wa84eEnTmVX7BkinsuKUze1E9pupAXzw8NgbG63tPKCo1huCe9wyQhuccXzcDBtVWDdY9Yr",
  "key2": "3Hwq6XzYSY7U9R7c9U7nfk6nH7wpbh9Cpmfi4DLZPFXEpheATH75B4R2fjdi8yu448SoaHofJWogX7GTp4JCv9HM",
  "key3": "AFLckkQxBEtWe8QfyztUyKp9K8kx9MXRRCJDYMwXjLvUxZeQdR3ZFR2DBS7aeqbuiD5W5AbYgEjy1zAGGtu3iSk",
  "key4": "57w6G1oBDCHHFeAGD5uYfWMoj3vsahxAorrJicidaC9xkbdAtUHbSqLGSavwRecbrkjAuqhSSFSu1nq9eY8Bijd4",
  "key5": "Mci6qPqNc7DhKRm5BCUC59cXFDWjJdU1UtQRAKWVrAq3JMiPCNVb2AxfKMafDw249LJJmW7RLXdgZMDcYW68DxE",
  "key6": "3GVc4wq6BeUg8S6QJGhtb9X36U7Qcc9ZkpckVs3vDHJs1WwAi1qpyreLrHnJvaiKBgWrpruYPBfnitX1NDPZQKTX",
  "key7": "5zrbWcuWfgpzQcd2ngCy7iDZiyGUTCz2nHWZ7hx15Uhojn1reJNRjtYDSx7vkq4mX11h6ejRfuarfcPqckcgcrPB",
  "key8": "auw3MCSZKufrJzBHm6Aw4k4FSB3JkEUdsS6LWfP5w7URtSb6U3vCiUHBfz6NZD3v8zyo8RXxpZJ2fWns2CDNWaE",
  "key9": "5xyXxFaDrdLoa6nPSrYHhmugurYhTVRjNeATRbgrj2BhQ5twtgGk7zxmiJV344QjSxukarpHKUC1mUGeSDg2ZWNQ",
  "key10": "3mRv549BoNjUeLYx4UemthRi5x5v14QPVsM92WgRH7rZwep49ZN8h4y5ifw46E1qGGKS1pyKMgy6CS4G1sdp6svt",
  "key11": "ZkePtRCWVEBKL5j9PPagshZxhJ3qvQ8p8mdCcfQWson36TEmcvDxRuPTh8xYszECRUDVd3P6uSk2qaR8Y5tLejc",
  "key12": "3vERSCAus4GcwmBvRDRCeVJRD6q56F2xsb5uwg733VBMF5CC6QpAfhDjb5ZhP99RH55J3wsT9hPtEmD8eD31rgNc",
  "key13": "4FhzruwDVfuU6Nt62HGiJdPKvVPyjVVzBCaTrn18TasA5oux13VGBGZJvbCNA5WFgPPsfnEzMyVYVRNTNUBkRMEg",
  "key14": "5jA8mMRXXd4iuhEpCFjnguvEwTY1tDLdQ6rRyu98EnM3umPqYf8JugtrXcwsobbJtMKNJbT7uft95ZtST5duNqoU",
  "key15": "24LUCeWFpr4dFGEAYpPM36yiMyVYNDmFTfU84gkRpYW39Hqnwpjhcz8KXbv2DGU4cuZbtg54DGqgqABe5xn1WxYW",
  "key16": "25qwx75rJZ7MXLsK3o9pGkqA8YDqQJNi9DNHisDKnGMEQzZXC64Mt46SLq4i8qujSi7comNax4zSW4hppXrriUYp",
  "key17": "48xXQgMdtm4dRnARNPEivZG8XdnjGyGBnis2mSpMz728MkRtzGgP9dSJwa1rs43SAjz6fhKsZ4DSZ5C6wjRHJj2L",
  "key18": "5shigA3gBDUrk4w6URFi4feWCJwquLy9SMoxQBVjEKKMuFR81GT7bstvjUzFjqm7gr7zo1DZ34buXLqsVsxBTNcz",
  "key19": "616d1mbxw6FHUQJb8KGV7Pxhoetggst1cbNiFX2Lsujjmt61Z26pSvUxDsPwriyfnmnEiwLPqmgNRsFNvrjF4v3u",
  "key20": "2vxSyMUh8jTssGcH6RTSGJJG1ePF9ZC6YPRm8Fe3Dvb5vqPjaNdw72E7K5crSQiigP8dkBgicZgRiz8p78f5VDKe",
  "key21": "uACEowcrubFPfeyr8CMC3BQxtEF9rKpCCLexJL7jaCN1Fz3brujzRQfEFcj1SzhRtcdFFykdo26kdnr9nC3jCJx",
  "key22": "3sAuCmTokzGDS7P5mrZCnKXqaA4tQvnGj97iSwiXL5PKntjyfTbEtF5SkAPLCtb8GDd7FnFKShWXQZtbqHYrUegk",
  "key23": "24YBq4t1AUEMGsjt42zMBBFFunyffNbTPL7BMmSt1G3PXpx4C3jdNSw7r48QkT5A24Kdh6vxWuhxn7KoxpYcmz2w",
  "key24": "ygB2QR3EDparKCbt9od9ZfXJug5uC73mG7wdAutXW7qFb9oMx8EtpXXtrGg8j15AsZXBqzfkUTqeX92uxMUz5JF"
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
