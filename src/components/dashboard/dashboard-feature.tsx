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
    "659zQxQgjCMd2JADVtAsVfppNCQJg1PJFXdt7vhzqbFdrTNRXPkos2xtH8frFVscgxKtcQFWas5pQQiSrzquc9SD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v31JrnehRnSsk8g25jojEpqNZJGvQDxxJabNPJTmdvNZAwqkZvNThR1o4yPh7VbToM3bQHJkXWMVqYx1ThKjwiM",
  "key1": "2nd9f1xFYWfS4c2bsBb74A56D7YVQ6wip2ssY8BFyQFrfUSPepFoZBiyYAp9b9YErS4RTQQTTUhSBSz78weUGYwU",
  "key2": "2pXH4XHdSpbQfQBzriXr8sy2PDukU1agdwBMYWy3J8QLgAGUVBiKKAsHfQGCJFnD69BMvpQKqdfTZJNZPQDmWCHV",
  "key3": "4wPYzo9xhHowJoYQTh1txKiJaJdQPLPwxKBxumoU1XbMruDtHcmgVCWft7mrch7opQAVkLiKFCqFEmm7LaALg9GY",
  "key4": "5UzuSbMp6C3BtR7LQvGHca97sJpA5fBXBJLHuu5uHQf7nGrNAe2ZGsBcnkoLo83acAmhikWr954QJmvPZiBZxUro",
  "key5": "3uWdC9wzzmbbEoXcQ6awksabKiMuuqHkwETNkappgy2QqEPnyt6Pb6o1rbbbrDeNUvcnwSz8nWsrk3u38aYn4FUs",
  "key6": "4zDMXdpdf6X38VeeQq8eHJQbRW9na9nD24uovzCeyRNbnAAH4AN5bhnkDpCYK4uzjQDVUfMRzqpEB4yrNCDGtpPi",
  "key7": "5oz8sxhjZmJRNMmewdX9qiNAHqQj771y9UW8StDJpv3GH96mkY99qSkSAQeptm2k8K3kRmyT5v6drRnrfAFvwezB",
  "key8": "5YswRmRxSrsHK9hKYxZJ4kDz1Temi9PDCqwnvFAmARbbBXXPYZ4XogVM5GjmPAgc7TkZt3iFZfPdFk42WcaNLDpE",
  "key9": "zBw1on4wdfwj4R5jeVbsmy8wTmH9FvxT1zHquidBH6QYJRu8bK4TUfpZMf8dAiUHLeSKzX7RWKL5eSsf1oUahrh",
  "key10": "5Tjpuxv9Hik5AqwBPgaBFVDkPnqvH2WqtTjPjD3a3b2UtmX1oUYhYs11zGCcGSiZea6dgNNoiXiREzxpd4iw6QiE",
  "key11": "2oB9vjaywMDytYmncVUNtjMgutuG8pyVhXuGDGJ6E3CucaBBVQ1zg63fNjtfeqeFZSvmwPJnkiUq8L6so8GppCRY",
  "key12": "w8pKMUeZMx2JaYA5UWC52JUAuNAjN5bMsuzyTLrcnPgqQGrcfxbtr2hB5bL2vt5t2nLUJ6eN4wNED7joHtFC4tf",
  "key13": "44NvH93k13Hcf3w6uygurv9VZ4BJZ6yhpJ84n56DRmBEuzKvk8SHNd1t2YFNhmxdg5R6k2hNc2PBAXNhx8WHHAyG",
  "key14": "ki15TKtaiBaYZLdKoaG96csk2xgMLT5XA3gW2x9tTw9YP7mUN3vFVf1B2VH2QxvXpwqYYojvmRuMgqJTBqFM5oQ",
  "key15": "PhNXTjRFSZZjYSLB9g65QrpCahPekURcL4BQx56dXFakQVf5P37ktKPLFGScHtfyPyrxHRD1n4yhtoUqt4J5BVW",
  "key16": "4iwsH8ZXrpLXwi7jBrNEiYda7GTRVhP6mC1BYMSpJ4xxhWCVKDEzzUYnJK3isKw4y7Fdx1DYeo9P5pwFibFyAKDj",
  "key17": "3JZGU5dPWLaqUcZL2uh9ixHk9eq7BorbzhCF1NhhPatSUDu9QpHdUW3dZjB8H2Yq2XoBPdat4avsqjLNboMJ7ozp",
  "key18": "5QedV6MakALfgsTEd3D19arJoXjZWEcKMgQEUp67gBdFLzKByfs7PDJv6gK7mPrFcKB6Eu8gpSGZWBzyEKCKwD1P",
  "key19": "5poKrHff9fkzeMRG8vFkk1VSnq3XR2XdSPdTSxErg9tWYEKVwWAzqXTttzfPtTmtojD3wRHNKwGEh3Ra6XETv7uV",
  "key20": "CWbGbEF3sU9gGyBBVwSRubuKYAXgeBSXuWaxjPutoCm9dmFATnpR1zSMKtzFsnY2EV6Cc9pc2aiEdESgMTnkUNV",
  "key21": "hU6g5wV3zSeqEpNDUA6wcXB1w8Fg7FURCANmcCXdxzDzrHn1EnscqgboNamwieMsNS5uD3axKR2uctkRBmno7L8",
  "key22": "46Q3XUDNFLVgi72qBrd3bqZY1XGHP4EVXRw5zZKFMWUnbAGKz5d8vF83hjL6HvWoc7B9wPXtvyRrz3DaiZ6czdvr",
  "key23": "2nNF3V22SSkr3JKfafALrrwnwL6BGRGcAvvUeThKTKq5yk8fkqC9fy9sLuRt3saig6Gbe135TNpkgSJGdkiPHKwy",
  "key24": "HUCujbsDuH29TXhqTVcor2i27UDuW25TsfHqzzCU6JJDUcLj32ooogryHcq2XQSPSFYYTLH7vffMbrfw8TNtGPb",
  "key25": "66u7XqR9sRsrbUbgLwiTyH74nc2TbhuEbURuGhmXDFjnX4w1ZFDgR24y9LqgbAagPGDgJz7Vr9ZML6tAidmQQnJG",
  "key26": "3q3tg9YmbNvdmdyoDtU2B33m5u3SWokQzaG44yUmJvx61ksQebkNwK9LYYZybHtuY7ojyPXJJoL8FVEfbw7xKm7U",
  "key27": "TPw3PcfwfVicNbJjKS7vxjpuY6ju8wqfEXHN9bvhduRL4xPN7EgJ7FgS9CbSo6Zi4ZTbf8XkqwhkCeZfZ4ab4fD",
  "key28": "2QofNM8c8iPAzoGZYVgC8bVEZ4y5r9EQ8ADL4v2JBqHPJKuHHNUeH8tx66jCz9cZc2S8oDZz8zrDUoADswr3dYvi",
  "key29": "2vCEY2iu9UHJnnLRtFFRNSk9bjz4aMCirgGnjDLnXs3W8AVu3C1X7DzhDFuF2P1b2Q8bk4h1VdEkdxZPNoagNDqt",
  "key30": "4HA6JU8JCUVHhLnccgZLZAgLS7DBRemjggPHJwXehP7bg7Xg1w1QswJGSwF5UNghywDeu9XXLpJ55dxmA4JM6Rmw"
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
