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
    "3TWds3N3Zgzrnef8JvRkPZBjRAxNvdkKu6kt3BXmtrvNXRkT6wbAnRmhszizSu6uAii2VLD1wY1h6XU4nzyHsQv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xUpma7h14UJWHUFBysPDZ1C5ZNmt73NXkKp6C2Yda9WKwmMoPCELoLuKThyP5qcUMPX7xbnynkDqEeCZK6zUvso",
  "key1": "3kvDJo9AcvgzT8yud8b5HvFAWP8dPHvhZwfUtGQDGh9Stj6iEyr91tr1eoNzVspxyrBJx6EMq3JbrJ8hRTMmjMxe",
  "key2": "4hgcofw4cT33PBC6g5zih9K7zjdDSjmRHi6DEMr99kiH3jSPdCx64WfFbRKnxcMXJ3WAZT8MTCh3cMTEgCmghhax",
  "key3": "2Ef4gB6eCSSWybudJNQEr7Vaj1h45bbK2iwQRyrAxQHLcHvcMM4vh2gSG7Z5ecEuVtcc1TeKA2f7vhYbG9ULC1s7",
  "key4": "4eZyB9ShuNd98pk5jiicRptRfkDnQAZbh76298hJpFXzsXWHP4Uz1RTh2D229FDCTCBxYpcBdGvVzzSju8kdE9W4",
  "key5": "nqVThq49TUeF15V4o74GK4vneHj6Sa3mbGh8Vvuxoz4aGZqMWswP5F1DLabo21iojGuiw6Xa86fsfSNtj243YaY",
  "key6": "ZAeQyotLCRQk3YTZV24GMsDvVwraaNoSMRac3RfakJ8Z7UesvNm91sZEe5JxPjjVRfzm7Mm7FjQ1cTMaozAX37t",
  "key7": "fSrcmqcaZWQN2NcHjZzmRhzin4hTDmiwQMC5xA7TLvKquah8t7HYdEFdCo5agFowgNwUrdVfbxDeWyDxZoVftuH",
  "key8": "4nqEui2niQua5bB66D5xiz6HCxd9RpovQQBh7E6VgigVKmHUUAR6R9AH3j5VQ8QnfD5rY68i4w4TFuX5fRwpHncn",
  "key9": "21QdNpDdLmKHNquDzTfJ5zpHzM5ncwdrde3Z8wCvDJeD6HY6oCuN3vAeRnv2pR6KKcerrE8WsycYJh71taWMD2Z3",
  "key10": "59hCriCkp9ZLHDc14pRWctBF3iCzh2yXjFKDYZDihFPXiN9rgZFfxWKKE7eeGnpMRQeguFjPgJPJHSym3tQzNyM3",
  "key11": "2neCQgffYH57iCSPkaX9he3SucwCwp3cgm5gBDyee43SqkjMMS6z7ofPhPQBJKYnh95PaH5Vu6Rrn8hqfbD3FhNU",
  "key12": "xUx3qdHxka9HqLSXSWJZuL24cJD1bQzCWiZMQdWdhqsXn5DEjXnDa4wbfzjE5K9JgPdLp2GFEUa4YZPQBDozLrh",
  "key13": "4bo5mWTn9595jfmn8Q1z7iPmWza51JmLtNbDGB1THGCkNTiEf2g19VHmda4Sp9MJK86sPs2JmFj8rLFYVcfYaDRT",
  "key14": "4QVmbt32XpBZdAVL5Ejvv5psNU4H7zAZ8Wi1tHcMgpynpMyUKWwUJiGUkQZeoX79gwA7WzKrTHC5aAzqxfrtD27h",
  "key15": "38R8FNvyNFgdGqb2QzCtRnkhLkyk6DnNsHMyVj88VyyExQk366ovNbbgnW6Qj8Qs81tvnDsKpYZWMLtUfFhKE4fF",
  "key16": "5jcQbD1tYSFLZFP241Z2tyRn76WXhAE6KjcAR8DPvkCT6PNRq3uYNijT1K7vXN3rs8ggBdX34mTyHto6v7HrMpTq",
  "key17": "5pbSgnrSuYdKA1GPyr7wQATABBvqGcjCYHdWP2M8FNKsny6NwD2vugWDqX5S6yu3ZQMri6Htmz2icCX4W92rCKYT",
  "key18": "2JCaAdCodgkUvi6sC5wQyL1svd5LoBgfzcNLcR4txU6Kpbu5cRqtbMNDhwe8JgNdE7V6Jr9RXTLMugL41sXkmFXs",
  "key19": "VkCFAJCycKuxHxS2ikjZATXvCKGh6pmk8Ckr285WRZqFWggaaJQjvebGGVkBjox4ctJZ6vpnCyVy2SLBtUSuvuN",
  "key20": "3CvJWeriarfX2Qbc8J7zBANcwxLaMjRLq9GzPjaQVixCxg3yt1rSVxijG2pSBJHWQg6QBCCcjo7EuS54yfj6dVhr",
  "key21": "wTuKT6s63xc4ZMwETFKBYLXq91vd6YoNLKyU4G3C9vokXd8X3qXFHDpCJND13QS9fs57PUpdgYwtDXLBae8VzfA",
  "key22": "48V3rrZU2wMPDP5cKf4GKbYVGsXn8VXcioQne3DCeFVocwc13ok52oHTHmc5RCWyKiKAy4moRhbWWk8BVgbnaRe5",
  "key23": "4kh2JS4t1dRjsfmN3WojfrCUS7Q9PHHFiWuT4Va1qoDkdt23pazG9bKU7cDigdzLhdsuCDTi1FvjP3ivuywPnw5p",
  "key24": "4bDJvX11mLeEW6NWx8GVQE39ofd2qtcHF6HuDYG76TsQJmdfpawVJdt8gEkBZDQo7EsFCVwofbEzQeMWUcxnNwcL",
  "key25": "2B7zsqKotzBBZEqPzqLXJhQqC4nUEME1uCfVQs1JoG82SATNrt7Nf7TnzCZwZkwxNrbJ6fSor5YSQoiQ5GbuMv5m",
  "key26": "66NisdkaQzRLpKZEqK24f94LXhZTb55czVgH6GHkAVPe3YC1kP9nrHqZDvT9CgzDkBTumYdaw8TRHWdgMbB1rpGN",
  "key27": "5H44qV7GtV4PPyFC2p8x9dT5HS8Xut6e4Sr7yVNY5J4RZmmnMFUEKd9krTGwzpia5Sg2SRu7gu2AjgLYRxTHLcoT",
  "key28": "CLHFpvZFYK2nXzg8JpzbuPJ62gpCR5aNSPRo4HKQAr2AFp3Qc3hrp4sA43M4r5YkQihMTF92FGRznPWUuMYKVjA",
  "key29": "2aKQ85fMcf5AZuU4mi882eabez3Jez1ZW4Zn29P1EujEBMf8DSbY2vqLkyQDSDrP7FJMNfoskwn56Mc2MFz6mT5k",
  "key30": "4JtPqjzQEKZuZPoWxmbq9mPx1pTArD3Sk3iMws248qWUzCctm2e6viQFbEBnGXhPqprxmhmSgS2EAELKUbGkpna5"
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
