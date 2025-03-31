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
    "4Uq5do4T2QGqueq4QBZvjUhmwUNGsAZW2eYCw3D37Vi6jWe2YwipoDZHopZn3trcdGzFSbe9xXWFgHBR7hQYshjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRY8a2hDacste1L9KSFtymc6o3cDDvbrVbAyE98o27ZDcR8xJitAiYCXUFCbiiASkGJPowfCqC2DS6YJNVxyqqV",
  "key1": "5qZvDoc7droWknZy2zyTzpa3gAChyrxSLqTWxB2nXknB8VBGjE83dR4DC37bEdFAdj1r3g7TeYa5u3sqHRWtyour",
  "key2": "2UzLrG5BdTec1QMwJXkxMdLnCvjuLBFBBm7d5SncUX6gQ28UpuacfmUun9kpZ4bDytCaiX8rehsYogHhtYMVDgHa",
  "key3": "4PmEYQPwr3zkjcyEW4ggVydvWsaipfKQa2gvkGx5diBwrnWazgYMpH4n5rfgCATH5MecqL5iqCFL2LRdHwaXuChU",
  "key4": "L6wp6ap4gCvyqqZkScBgKG8WtsEVUMBtL8tivyW86QJ3bRDbHtzzitF7NU3KYqTzeBCvAXrLvnifpaK7PqfShAA",
  "key5": "4kgTNyZE298DQKYVUyycAMnNuG49KMVy92caKs1jPwJp8uC69wpJMf4JuYDhTiSoEQCwhRwf7pD5DFgdTu2qYMRX",
  "key6": "5wQGd3Qd85LRxz9qwT3e85HEK8N5YQPR39n2z52FVXqXvxZrrHUYcBKaVb1kSsFGW6RerDtN8qPUY9a8JoRScBwx",
  "key7": "3qLwuBwXbwLxniugKnWZrusrwL5ziEBDWcS6Qzyu4hg3uVe2pZfELbFR5s6kCh7X8apaMx1gzC2ZWqqPzGT7eN6",
  "key8": "AiqGMpvqyTTfWW4k8iGakdk3dHmWfduohfsP2R3zawC9DDrqhTfNFrYRPkr47n9s2LoRS6Zxow466YP2XxjBJNh",
  "key9": "A2R6kCeBRXDj3nC2fheEN2ZN11wnEFskKvUAy1t9yYKpvXfudrzrErJPM5MwmnpvPpBn5j5aevbX9tkNhn3L9aT",
  "key10": "2entfWt95zEzVKttJDd12WEgDCgLHFPu9oir3oxwNxRamDonFdDdvu91QEMMwcTnRrqiHMp2WH5jUHHXU7gpXqbx",
  "key11": "4kVM6E5C69rN9VLUE93QBGJMXTpNYKQGBj7RK8yFVZCWudCSYeqGDK7Q5VLYa8SWFcNsCPqaReThSjdcqWsrkrwi",
  "key12": "2NcsHGb2McbRT7GobXXrXkBNktJjMGMqLrBQ4AEYFeWo6ctKb7CfnQsLtu2eErK2uTkQW2sxzSVuQ1ACaYNeD9Vn",
  "key13": "EzZ56MaNqJJdzHNAQvMgpgfNeJ1AHQw1huYxiJENXjnsR2MrVLPaEp6x2QCjPFNCKM4mEZfofVofi6LtYHXwhAN",
  "key14": "3PvM9tWGJGCP4oU3rU29uJoDqcXacYfSXdM6yPrcWoekCX9wzStWuYsVUuA1dpzFHoBfrw4CTZwz1XZbbAugRLEL",
  "key15": "pYHLgkpKxNgNPGqqgcdWKivyPdnkRpkNxFDnkXftjsC7wJoejLRc495s3KRhLjcWqswwMxXfQzR8EWNXedheZ7a",
  "key16": "65mKcC7jLH2R3Gi9s7v7xqYir1Knds2zqU6yBdnmFA1gsjAcSdWcVqh1aYfoSDTk1oV1npQbSagdoJSb2Vgwoetb",
  "key17": "7x8UGdo6USafvgXyLaTEmuzBtcxAKWNHijPt8kJKX1Si1zP4YR98ycWpAxiET9rr5T948aVi4DiYZJghBN17fNh",
  "key18": "2kVRfGBCatvBrDnecEgK6H43F6Jp7NFgokQgWkyqW6XcXRFWjoqXSw66jddKUySmYwaeZiuj9Snb86D3PTt77WVV",
  "key19": "2pAZmA212HPXbVVzYGEJcCUMhvVLYVAomS41rtNCiBGPNcMxAhaxJAsZQYeGoVHAN1hNHcBBHNdSd42XevAaHwRL",
  "key20": "2PJy3i4wuTZf6Vr8qZQT7fTXChoF4Kwm4NAZujSfp1RKXGhy7R5cvtrdHVbT9aJ6ziaCua5X7BjVFMW1MWHD6M4i",
  "key21": "25Ccfu8Ucqbd9G4T8XomMwK8LEUsPRqh9mpRdwsq5Y4vUGWn5evjdxBVzdiwG1NHmKUQ8wp9er2PotJeWw121mtz",
  "key22": "3hh8ZHy6zxw5XSGHwzfnSLjJtJTiiwrv4y9GkkyvAuWRGa4mQw7uASeo3BRUUHoo1q2ze1TYjrP5fXXAyPmPiBQm",
  "key23": "5RqM2jkuz2jtRtnqdnQ9SPUGfVDuYBX9fSEg6fWZyznvXDYu6HD8cLAo4u6GK9TxtjjUEFLjfdnUmon2KDBJHu1e",
  "key24": "2QxEvhJ9T5n4MbBhJMND1d7VY8BGNtkhn53SgKKVZuTxcF84tZxhEfPU7D3SmxbyQkDrvk1pV9hQLLjiK77Pb4nT",
  "key25": "4JW4TNy5R51YEAAhwexMTRp1wfu9HqFm248Xa4HPqBZR1N2Trej4WaLU1yYRkuG8kmnZLtiucy3Ty7yKmqYpV25Q",
  "key26": "4csgMSdvGaqZpbbmgL667unnrWmRh8v3YCzBuDKkUNRmg1Gt9WBRiA7f4SRTjWt7anbHimuwFK5icHfGmhGmbeVR",
  "key27": "2rx8BNGPNSPi6LhQ5og3gR37SuAA4fu1c5ig2zqjspKp5j1VmhNB9QkCWpXGD1LHEkeEHkgpkeYTEc111tekafds",
  "key28": "2mcqzswomkQ7SifVmdfd9NztqPJVpLnvXjJeogWENUvwS7uuzCz3PdXSadwRdgai8g43uN9wttKkxsoqXZCJ8PEK",
  "key29": "4KBxEiy4Fe87HKEkkqic8D5EytVtHhfS5LJFKrdMBjFVkn5YSt99UNrBiZZCEGCzcmufd4cJp8zTBfaeRhFktfCW",
  "key30": "4szLg7uH8s1Voqs1YGFufiYsEacGbMRNGmE54VzwdpJUUv5pDRQpqtg3X2gJG2AdTHsyQUhsiXDvwW4GSA2Y4c95",
  "key31": "4m5fEQqTBdzZgH3AqPSmiCdE6C8xMPCSJnHGPPHhFAe23mCdx4eTsGkokMHxsX86uYvtGNebvoKDBPZc3yEVcLNh",
  "key32": "2Y5XNbVfKbnfcDnh51PukY9LeSPk2EbXzBQsVuRhoi8Ep39vvqTurqHDsb9VZmUt3ME3XMqDh46y4rHQvADraWm4"
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
