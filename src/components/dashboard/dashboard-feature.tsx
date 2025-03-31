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
    "5ctKmCEed2SNEBC2YkGyUtAmbqkj8LAvCRDAczDJHMyauMEbixZe96whm7CQaZJhYqfXBbTpXzt1TUx25pF3h7E9"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3amqpnhMRdn5U7JXemCnMTPWyud8Sf9bzMCLNFB9Kj4m6ZT2Dpx2cYLNvBosWUxg3xpxzm8xRox1fZs7Csfj4bcU",
  "decoyKey1": "24x3kJKQFvXmo9rsRVicqR477u3tS1zZjTcBiFmxfHN7nyB9c1bfUXq5CFJncremTFdsdQMDvcp23hYL6TDNL78a",
  "decoyKey2": "3qnNoBJWD2stFGASosATykk2A4x9KDQwyQbZ5PZcpJgESZUti2iXpAYrD7WL4o7hp4ws6vUssH3diVJewRsJhFgs",
  "decoyKey3": "1KVoS2a5pCQNbWGFWzouTg6TiUVQq73LnR3Nx8QJm9TnLBCBq1iFyqbGSUnWyZAHqFPueWLrviPACWdDUNfuHMj",
  "decoyKey4": "2Yu8aYCt7Hb1Ss1QaTbbimYqk5MdTDqXTjciTPYJ2UnM2DWrv9PPw2pZTynFh3NTZP98KJrk8aoadBkfdSTetSx6",
  "decoyKey5": "4iCgmg6soAoj4M86JQvq52pDAHucV5YYhWe5cGMRjbSdHiSgT12DKBgMA7dcbPgJ9qn9yf4wUyjTC6rhgi3VGUCK",
  "decoyKey6": "3XUQ5TehjYDUYbKRgy6k1woMQgcwbfr8PSUfyvk6GvNcWivwvUKMoNPmqsdnxCcZ8199RaHAiA8FHViPAbgdNYPN",
  "decoyKey7": "3WvxTZFnRcieX7joYKi6Y4erUHvnEYiKHyFPQJ2VskMeJEW6RCE698nmhnf6xGftqGMk58Yzwd3d6Xb9a9amzEm",
  "decoyKey8": "63VYCZbWvMnvnPASgEFAHo5icCxDuWsZ64fv8VEVALgeMd52SLEhk3J72Fb6SAPa7qsMUpMnHvXx2YKCrvs4BWvz",
  "decoyKey9": "2KqPfmBDuerD2LnURP4uFkrUAQphtVMGPdnrjBotxY2mh1pPHCyPAyUNqDMLMygP2Quq3ZKKVJnzEZxxVEC3k2ra",
  "decoyKey10": "2tYzsJSjCEeVA6aTRS8A9iSHeSfiJqLyuSVQnjS2sTm5szePNWYSscmE9XdK7iaJyHoxsQ1q4zmDSA2EM24TsB13",
  "decoyKey11": "3yn51DvAZAinMS9oJyvu2cd9W2WUSRQQzbmJ78v3aSq9VKymnPRpszGZXgJaBWoyxGgF1CSyN71XsrdEapakQzTM",
  "decoyKey12": "4fu24mmTHFrx5YrLBLj71AthP9Dn2z4mBoocR1jNnCncdSW8csCR21136q9VNov3DH6pa4MsgjstviiXJCpR1sVy",
  "decoyKey13": "5BHneJe5EzTYU7EzRBdPz2yXMErddu5auy1fVrhiVHdc7RYVH1o8FWQFQqveTmTE3WKYZgYCqxkm9QbzoHZpPBnL",
  "decoyKey14": "2GPyk8497VruX1imXVJs6GyXWxQEGpQXFFtUskN4DetY9YZM8216foxiTHTU4C6bQs1bQdsVLzxQy1dqDJQDPrnW",
  "decoyKey15": "3DLS5wJP3zFreUhzQd69yMUVA8LJUW8FB2evGBQKphQ1XeDmhsjE8y6SQCPaDdkL4NrfR7FiZdFQRPaxNURKcXfr",
  "decoyKey16": "4rjJexeA5xPi4dY23AMmN6QztMPQcvee6LdXW2RCRarMxsRveiq7ngKezkaCmMpLWgPmHv1Nf7KKFBxqTMzCKyY8",
  "decoyKey17": "2AjesYtKLQdLy2mgG1bHBWSyUmnbWZDprvcRpzFVZiZxTynRJc78tjNBKDPfgtMucbH4fJs7n5aq8ZzvycCArvP8",
  "decoyKey18": "5SLqZAjJcytTwFW7yoCAJwxJciCkJcNSVLJNWZNbTcgbye5J37jJ4wFP2LzyUTCA2kTAARQ37Wzq4NcetUD6vmMg",
  "decoyKey19": "2pbYNSeQFDzwxkqaUp3d6P6QErYotzgURb4gLJczUf97ut29HJefbJpumfWYTi91d13MpCo2LCtjV2xTSJsn1q6k",
  "decoyKey20": "5JLaLpdRGExnFq15cNdtYC18DLRn7KdgVCRb5JVGK1KWfYFaGY467Uu6AbNnJFcSPSoUvaxyW1AT47R2KGVu5d3N",
  "decoyKey21": "24GCvGAsdSUF3dWDLHFzdPBTYxrChUnk2eJE2TSafZSnRTGwcnD4MPtNtwMESV6XP394GgjzoXDCxBcp6qdQqJBt",
  "decoyKey22": "4UTefXaYP9qpMh57DirNNSYx7jPeo1BfBZiMbkLAkXGNXjcogG2qd8V9RxFDGszMXxgRxTAnhQm5dUUwmjnX5Puv",
  "decoyKey23": "4341pG61ucumbjzhkkG1ZUva6wdpUjuC9inWruERrHrdPLYvtkYch4zDTmj72AsJqsTfhUdSKcUBSWhmYvbaLP4u",
  "decoyKey24": "3AznPxpPbmqsAzSgAn9iyK9SWjmYTjcZnrdmuteau2V63Ndx9dwjzuyt25WvJYnL3BmVitUawuCkPbzBLvkqtSau",
  "decoyKey25": "QnmuEpuZRcbWcsGmxXTUefU1oHjysHLUfQoy69R9FpNfyyiojr4kdu9uWsSohCsoP3gwdu8sLZNkVKGojVCEVuP",
  "decoyKey26": "csefdvA8uy9mvNqpkxePVRf7AXrydyMfKcUVNKkepgShmTgjRNqjQxsEaaTfGRGe6bMe2vQaKLpEC9HqsCCJJ9H",
  "decoyKey27": "c9YJT6AJ1qcaV1YbZ1x6a5RFXhV3gJKtv3bQAhZ18oRSdyhdyVLfMJha6xBzcos3EkgwYhc5ve1yt1aAvoDW5jX",
  "decoyKey28": "kRJrZEKArV8BPNy4PGfcKK5VYZrBcvjEcD1wAsz3QUWZGXH3jc2v7boGjyFGA46G2DE8TKDhg9vMjrzvN5AvMKL",
  "decoyKey29": "2UesGMLsr9jbEtKXgu5aW739n2n5gPEvFYFw5F72J27pPLrG8wzJ8z4Fc5szkxqa1oLYLz3Nq9zm89reGE62gqsi",
  "decoyKey30": "2Gi53tscNu1Nj53oKwVz45JWXDCvpiLhYrDfAVy2eepsaFRBRgjqRTpRWbMnjBR6dNNuQGua1zzXcj2DcQHJfcDA",
  "decoyKey31": "5XGp3gtWUAYezXFf4gDtvcZDbpYCsGPNXwBY9yNoJ9PuHxDU2TMKcnJMHiiWmD2S85gniMuSFSVYhqUzDe9yUNmw",
  "decoyKey32": "3hoZo3654xGntHdo9xn4rRYUs6QgB6JhWP7cruPnijMDv5HLWG28N8FumbSAw5V3XWwpieeuRXjrnJ8hDY7CvxkG",
  "decoyKey33": "61KdCQBjyPQ7ekEpQkFKhUuxdQjAN6KrPfQVM6Ytj56bCmprJhWjvJ1nDUmndE3wbkjRhvy1yBUr8H5bebGBSH3U",
  "decoyKey34": "2UcDJrbL5eMMPmVzT4vGLLsoJNFXRGt9p2q6PSn15q4quQ9qC4tms5xEm8REEDPa1kqjkN8snbYdJA3ZVU19tf1i",
  "decoyKey35": "3RdpZMkVwHZjU6Uv5mMzkCPEp8qkQEqrx4vzUiS2CYnJiAn6VEGJu7wcT4DbKwXJPqsBptogog1vWmBxbo8JEZAU",
  "decoyKey36": "3CcuLyDNPFuPJXggKTkXfA7rgqnXnspuVtWBcXYA3Jd42AmuLTfq4hivNVJFwCgFALDVNNcgWxaGCDuDMLRWDKcL",
  "decoyKey37": "2q6SjWwSWFSf3FW9Egz64TFF4b6cV9yg6gF1k7dmFptXRyVDhfNxBuYbiG1YJUe213vNYjGnUzo5Z1Vyewje5AWs",
  "decoyKey38": "bqPP8LXpbcmZRjyZCApoMkNAooVsNEhLPGe79MxbsoDEB2WCKBruvj9RRYD2Pc95Gfbi5X3aekAoNGLLFc3tzht",
  "decoyKey39": "47jb1KoovWk5CNimg66XDPEXTDWuoyZsUP8vqrYzjSaUW8PJSYrJC6jEsNnooheXAzimbUb3fbCoebCMeB43ATRk",
  "decoyKey40": "49B2gCXoq8vp8xfZJ39YTWYNraifVtJbzhebdW3paSPhQ23dCYRKcQeHHqs7Ay73XBp429XHZKspxzEPxk5YH7Va",
  "decoyKey41": "4C8rsUtGpcXEnSxBL3L41txjD76WKrQWnqZrgzjobQEQ4AHtNUHuvyUszQDBG2LPhMo8nVAKCyiwkiQ9gm8toSg6",
  "decoyKey42": "3DZ7zP31Cqhd4umFSmX1gThcbjVmFLaGjESFm8Ag2yVempXrq7X8ir33wp4HsBoiVDvNa9YYRsyBJ5zcbiBUTLaR",
  "decoyKey43": "3L4BuzCcmVaqcdJTTgupveLSX6BQUAEPFqMuJw6KsYYmHsZZNEqXnnhccozhyfWKNZDPRtEMsQphGs9tWc3fzHrP",
  "decoyKey44": "24M9pPq8YpXuRUwZyuweAJDzwhe89VMdDYGqusAvfW6RrAyNWDNH2JU9gN4QYmiV6qCrwc9MjythES4dFeURGhSh",
  "decoyKey45": "4RDmiwSYthTG26BDs5op3MS3nx9psPEkueYp8ATLp4aqHwU7iwMU2BL2dquqrNLnSzk8VNnvB5oZoJeQnyyAa2mh",
  "decoyKey46": "L2zg1soM1iPhVoUTvwHkd8CvpFnMsfkZdETmpSwHJerhq7NBRrrJKREu9zQeGibCpXyz7Dvnkw26qpuGRhj2h1G",
  "decoyKey47": "QBBgbDi5FTyqjD7KnePek7vhMFxMKvN3wrH2KWCEm8nA4DtBibS9DXfAyAn33viz3oStck6VyAewrYFQdCK7Y1U",
  "decoyKey48": "kiNJpkN7xsD56x36e7jodxeSm8YuqJQ5k3PqYgqQ9YNXdAjrHr3A4wdujHjkEcEPd9sNKD8bXYorPnoQxaKQ8yQ",
  "decoyKey49": "2TABtbrgkzSaWhKD43aqbMFqmgszoAnYJmUxmZjW9x1ZQCJ6FEMYmxWztuVd5ELM3JhQKcu3EGZNnG5WsWxAMDHd"
};
// DECOY_KEYS_END
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