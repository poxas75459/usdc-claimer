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
    "5sj6Fkh3ijmAP64TRYuLEu8Tjo2LV9TZ3KTA3s8232u2VHjMPvbsb9sWih2ZSUKspxNDLs33TxbS4MxcVLz7Ttn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RjACFLtZzkCf7QuaUnFu8qLsctrsc7K9LVrPrVfxxyHWh4MMn7Lf3rRteniJzr11axEb2rVu2XYqveWTiX2VaJD",
  "key1": "2Se93TFJyxCRxzKJ1WrGWmwuzYfx8bMQQa7bBd2mWveby7iC5nwexGE6qhf5SEv5bv5jisrcwD4GnPcJQ5CMba88",
  "key2": "GuUJFZrtMM9bpLnAkyKeKN3S7BgLA2TFamuAjBPacdZxX2xGQKHNKVbuB9n4ZeKBxVWWT6aDp9i6DcjfgprW8XF",
  "key3": "2pMhu3uWcgCTTrrUEBjzyDdFgGV1XvLVevhkcGJhWwu3zZKNuj1WtiheWQbpVcNpPDeRkDMGw2JcEuoMna8GNExk",
  "key4": "5tzw1gShDWcogBQbivrqMuGSXXGTJSneCoTiY3kMtP1soFedGHfv22obs4zvKAxFaHF2349zakZwQD46fUVq1ZBj",
  "key5": "BZdF66Mmv4XfSczYc5Z7QVJn3gbWyvqVAYDbDCVECHhaRqjKnQXXse4fSHkbXbgDxhAUovV4EyLk9mJNj5F1mPg",
  "key6": "2T68qH15C4bUNMyFw8un84QE7W8q8uDVhbGQrJx2Sc6Nsu4q5BjA5V1jWK7QdvJ8epAJBRaXfd7mxRXRJzohGCXF",
  "key7": "418mxehBtBiJQZyLRatSfRssMwbUxj4SqzrWR3jPPLixFLNbVmzfiLkruS1hbs2Vu1uhCSGZjZv5K2txke4pwWDy",
  "key8": "3FuxmxSFrLYsrR8cJDSr9jBsaPrdXk2qxEiejUV4rgK2YZwKdyZWT6KyRk69vKs2HzUVFhDz3mUcLmWqVJJcR2Me",
  "key9": "c7WEsebZQJ3qh5ve1DXPyQ6YSw2WWLsNkqkGpufsLxSPaPTsdJ8v6r1dALbbd4VUcwNNQcRmnX78gc79fAUb2nt",
  "key10": "2Yrwp3o84rcoRHa3acixWBJi73rWgER7yY9Bye36YXBkyN1kvJkgjniKksTkkBCcurYKKvKARQ1SCcSrxrqaJFMj",
  "key11": "2rN9msW5TpG4JZMiziMGhnE2SquZJ8GAQP1f89CyMqNZ1iAUHc1MbePmwUUicxyYH3LD47LEiQHw7cSaYL1eHmxi",
  "key12": "2rtqqV985SKhpXHmd46Jfn5GsCC7ztCXrY9Gv8foHfxoLenAvB68paGLiGVLbKjquEPzw8Bn8KWgSaMdQVvB9WNX",
  "key13": "4sxddm2ybHfVmSkhQYtvCTkTLpFYq5oHSiADpmZzqgRKeZkzd1731SVMPxUF95gGbr6gnC3QsP6URwpuUmBPSZMm",
  "key14": "3BrZMcUh8xLG7LDzzmk54o6AeRXFgkNS1xDS1vUe8DNDNexFBjNgXs5RD28frQ9xknBPHAqdQjGy3HodoiApGbBu",
  "key15": "4bctWWPkBEoQNo7BRjUBXuU6AcE63RMuee8eFHYoyZHERYDREjNMs1kUsbwZJvdZZZA33vRmxjCK91Xo24spzWBY",
  "key16": "5bZu8JRkFoMxKPXnNba1aRBewmLmmGig8z7Fccczaou9eodAKGgXEAYvaBf6wr5f51EkZbYMihoqrVCoENfy2SrR",
  "key17": "bFxtiQ4DUCGiWxeLXmwfeHJKGaBf9uHWLWaazv6uhrm8qztGqy97VZTZSGT4EVNUVBQk681ZRSCRXd62yqMf36w",
  "key18": "2uBVLgj5KKXSwA1suRkQ2ZVwD3Zx6bGiCmo3BesYEuYV6sgLnE4fw4q1srDAfjVxQ56WF2ntWjjuc2xVADXktxUf",
  "key19": "RDupnoYABtXPwiT41UbceAkG4Cq5ThjUtPJYwLaU71xPWESeofT7JxmgBVpBejAtegL5TGgorLBEpUnbXpYqZZd",
  "key20": "34TX2r1pQp9Ui5bGYfpevL49hjhaBF34prLpJ1MWfbCQz73YSTdptCKPAxEU3d3k6jDoege1N6233tu34azESV4Y",
  "key21": "2oxvtSbweDGXMuqFk6FkWeECbAWRkfePCuu3eRkpnsfSB6afytyPFQY8NTQgaEgMCEx6rNDeFKmgcVGFcFHMMcSo",
  "key22": "4yc2SGX9LZBTgiVcProJ8uu3dRK3mZTuyLRex9sG4WqosCA1KVUZA6viLtRoYUEGFxfApu6iedRJyQsGT8VjZQiB",
  "key23": "2bhvgfBiVswCFiAC3QRVLWwUmcrSuEKW2MdnVwT53pR9RQcqMxVrNyK2whqJApZK2UVRhB9nAUHo3JaBeu8GHGMK",
  "key24": "5hY4kxGXcQXm5Wsyb99TC42E7maewN8r6YmsfvjGU2CLtE1DYcH51b81dLPhFuDKHWJgdmuTR9CPcLSnvRAkgMJG"
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
