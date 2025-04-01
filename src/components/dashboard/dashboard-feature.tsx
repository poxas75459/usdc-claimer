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
    "3NJ1xBQExJS5cT4653LuG9ePvVnFqh1MdMZRYc2VKjy3jbTy8e226k5UAQ5cJkEjZs23bRSRhEtZgerFs8wPmwjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3THNr9CeYVJGJ79VsqkobGW2ie6Y9sHXH1zLSAMS7xEdYSkC3t7FHWshVVtfuerK62s6KCK16Mt56VWHqQfgX6wQ",
  "key1": "2tcm5x4djw5jCUuQ27xmMNsQo4VPeTPMeJXBqugZuL81P7RY1YrjThkb3ZvJWzgrF16Gxn1qm5LeJPukg7gvBVqm",
  "key2": "5sr6ecuPpKjYRyutvYCWYvTvubpebRdm1eD1xyU3EHfSdf3MtKWrmStTVrjDSTf4uUG3ZaFgLYtzw2kziYCwS9kw",
  "key3": "3QG927ancPfz6158CDkXJDbtGB7559yaHJsd7FGDQmPVFwxoUWjZQBChswXaiM4hgcPrWEugwonV4MVBUVpMPk3",
  "key4": "5pQy3ZqFdhGqjQW9mmACKWfSQfUxaKMkccvwqffkNbpXATjpSebFQzhhsrno2Ckzxyw485u68wprwCBLzPSUN3ZB",
  "key5": "PvJaGz9mAJ6G9tbzxF3sgujyt7vDe2bFbVGs4ZjEDRfAem7WLRsKnbUfsaaFesaLn55RKBx1BQ6Jg8WivXoAWGZ",
  "key6": "5Zoxu4ysSpZKE4FjZbBHQ7eWTyu79aE6gAkkXR1o6M2KdMStUCs8E3jC93NgZuQPaLef1bswyMGNhhpLhr3NRCnb",
  "key7": "5CSf4grgrFSjyWUzSdRrjSj1TcLUEZFzH1jo3PJnPAgfd5TbM5JtkZxqtkTQf7TjQKfAcBG5aDjhYjwP6mHAJSHC",
  "key8": "3MCEgEpG43i75sd7aovkkhD4EgeB6QuJQReVEBM1tu1xDfxUosxft1UFgCuxzXqp4eUp9MuYyDTMiYmgXru4psa7",
  "key9": "2KbqUcztqTkZnY5WzDKRo3h5NMnP6nbLw158oke2dbCRVuD4XDCKx7R5YQWGaQDAVHa1kg1FdurweZ4rWPujE5y1",
  "key10": "3qe6tDwLjbc8UpnKabSyWvifTJu2LqrXFUN28UTikWbuhPbvYn4BD5fYGCVCGivs8iLKE74sGHwBkqUC21Uy2hJy",
  "key11": "5KCFujGuKxcVBZrgsETPGYmtejpEAbZNe4Er2G9SC54WsabVeNG3FETqPduLtCmf1wjjxUh6JYEnyB7nm5hhiVc4",
  "key12": "5bTCyuxKJpGtKqtNWQuV3wvtgQueBfCFyyeiLEDU1Q65wn5FLiyDRaf9RefA1o7hqR3k8C5vjLg61gBEgTFt2BZY",
  "key13": "5xKFQms1dx89CsSbLqHgjMcvj4srAKdodKy9sYc7PvnTEMMqBGHJMTwad6b9EXJaj6P5iGZpNtDxwfxidZRZogSi",
  "key14": "2NUGJRYFZbDLSDX1HE267tSkKWUmSEuFy3dZBdDPvCfYFpWjqRUBxKyQku2FbMaj1HroYvqvRsosGpjJ2Eb5tttR",
  "key15": "5AKLCfcScwXoyEj9XUwn6HfzLSn1eLJdrs1RGzd6veuBd2KXBZ194EXnq9Eeeqc4rmoWuiPFACgdV86itg7w8ZXe",
  "key16": "LngiUfhYMfBrLwysuysAJvZ1DQ65TMM2qt8x94XJ4wLjLDwNE3xSHavPAzSrB4tNLm6KWhbzQmcUEf8qVaviRMx",
  "key17": "2qQto8W7tk1anBpsh9hn4ZnvVQWHQ6L1qZTQgRUWx2dtbpnQDbZEaKQVFwiCZpggyRKzA3LWSn66onjAWRVcVJ2K",
  "key18": "Lu6oxhMmWBjmSdMu5MK2wW95ZhQcTm9dsCaNomN5FHAtQTGTA1mJDLtJaGE1s2NK4jWfkkpmAFhhDBLNLjqGPpy",
  "key19": "bbjV97d6jGrzRFzrRUq8XwRNJh6dc3yFNr5EmdwjQyutmzWLUu83SfGMtyg2s4MzsUUTV95AsZ6AqgWrF7ZAzay",
  "key20": "3Jc3yn6wXHMA1x9YuHyi4ez2z9cvfvUVRatgDg5KdwqHYGtSsCVh1h5vFqMbpyGqjTcdZqHHyNYkWw8whWJqaeM8",
  "key21": "riz4XfEnnYtpHM7nWRhasLZjXohJtMMDjBmrino82ofxjGVbbmVcEVyx8ui3w3wzKpTwg2Qh8Twj6qZFYAyY9i6",
  "key22": "xV2D8XG7KBjnsb7mCk18XWWzRWYNDLACxpz232ggbiaEENFKGv7pEXoXTE8Yq2iJXq3JFyv5FgX3RCPKMsnXMNs",
  "key23": "5XEVDJ4Z2m2S1eAigRpJBRCC5fMhjGgS5bGo5MCRhaK5jYH2DLha1yXWVcg4nd1FZLNjPhszFbSyvUXx8JTvNSaW",
  "key24": "EN1CE3yaGsP6Vdn9JrWduqUmyKTirrqjVh3QaYaUkFqSprh2P3Mz7wXp9orpQ8rdYUf331MiVZ4SyPCnbm6YZ1N",
  "key25": "2c7qXAjLG2xmf3A9LLwjASzS9PtLRdXckscThibRwzPhJvdLtUKrU33cDBtMBJAkim3HdPVQ9sjTqNLpRzx8BUtE",
  "key26": "5y9BTPwgv3ZnG3jcsSoW5ts138zh3oVSyQixJR55JnXdB71zZVe6LZ5Sh7KQVYYwSRCRCo62EQKMHmZhncNPxqNB",
  "key27": "65VWAtkZCaD145kqXAKvjyD3nPWuZ47x2ENTtR6y3y7g2jd7m1ekXtRAN2dKbAsaCDSLeHVtLhKUY6BsqhoseVjo",
  "key28": "2TGpeWXHevwWWWWgHV7xHYWhktWxoeXzMMsT83StNZSGw6o4KpYv7JtSzPUUuqu4cc7HrNt8J6pJBQsyW9X5J7yk",
  "key29": "4WWeW3WPbPC7TCMT8F6FwYdhUcv4dvPPPiDRmRXRN2hJNNedefqFBE33u4kg6RDgxELC7s13gwtSVRtgkXa4AZEP",
  "key30": "5RtQMokHKfgJG4ha1THSBPjJtR2DYHcHHz6hwQNWCzUqSbqGoEhq1RfEQuFJht12dJ1fYjbQ8TiZfDjNpP9k3r7C",
  "key31": "385QxonE8yGcgoyrcfzBvJHyyvtbHEiY4E54gCvJ49V1WCSqNXDGcEcZM5xBdQZhegGSauPksc6eWhqyeK3NU2iK",
  "key32": "AhWxbNRfx3bXpp7jnvc58RXBUesVzvfLbsuBHJNkTe6MwKNqMXBWJhZ5STdcU9pzVcp6ab6WmtGGfisTbU9emkf",
  "key33": "ybtHob1K3G4Zhn9x9ywkUHsm8m7t7DBG9nPDupdhHpNsQnDx6f2MBhf7dM2yjgYW1DFkCU51ejya4j46boz1NE2",
  "key34": "2HErwS2qb1xrMUzXJCdpNNSF1uwSWba6FVvoXQvHk97waj7y2r2FZo6u3pSYcLzhTXpwBTZSNWhRaovk4VkC1vx2"
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
