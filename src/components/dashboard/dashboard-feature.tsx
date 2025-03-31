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
    "4yWCtCGCbrEVkMdE1nL6aYwaCfnLRBqYqURkgTVxXc5sNoHd4THm1n7JvkM7uFi1VV1HSAx2DK64DNEo26puoh7g"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2yKBqf3JAGT3FjyZQCMSM5daEvw4fwf8gNsMVNW7cr1VGiKHrDMPGrdXUGAMrLd5zL7XeLr1Vgog3mLpvpu7ANXP",
  "decoyKey1": "HDpnhSDdBsWBRwvVRAHBoAftWHryLJrYy7UTPBVZsyRQTAtAGz7BcGZ1vBMMKi74erndvqYw2PVaXkSLnF1Vg5v",
  "decoyKey2": "6757YNkSrDaPcAGg6zUFFNmkBAPK2YjXtteKSYjdJ2R8ERTqAoYjkGmU7gv9AbCs79bQ6wFekzQevGbmzeWRFKrL",
  "decoyKey3": "62EUU9RufnnvgseLACcHJjEMPDL4UDKxNQETjoiMTkXLi9xGML2V9e14k1sQL4v8L7JbC1cER28LXQq764CQMJFW",
  "decoyKey4": "44LE4u6mk2tFJZuvD1H75TXvr4TigQ5Hx3Kbqx4RkW9Hdk85RmttqHK92mXFKMwsmRi7P5KhkCmaGXiyQDoUb7Nh",
  "decoyKey5": "NxNbnvpo72UgBb5GLdjkRLurqgkVBqVeJX8b6sBneeurGK9bBxE34JpPdS4d3tgzDLvAozi6Sx9nYXhkE8bMnZt",
  "decoyKey6": "N6ZZFcCMFJ9uM5DLNEzg8VWLkZ51Kp15S2g8FmrZhQHVRzWNh5e73EmiFEY6Y4KFBmyo17vas7T4HEMUGnVGYrV",
  "decoyKey7": "5GGXsSDJXqa3hua734CqbwD6VhS4gDqZSK8u9VdshTgUmA1o33m2Y5FUV5WccKz13XPmJmC27GEaeUFTDXHshNSD",
  "decoyKey8": "5zUGQ1p9WDFTX9N39nykAapNautrNdK4nmKyb8YkUPrfFHkb2VqBiRnuChBFgS3DNCnzVxyEw4wsq7Epmwc5QFi9",
  "decoyKey9": "4uxWwY7XB8CjrHiB9QoPAdWgxwELYvce7G8MovNY6gajHkc4su61LyEeY1pE6jFgRGh8AwSVF3XBiSEVoEKKt3XC",
  "decoyKey10": "2XXAJzRmzhpfpcCQ5BZGLRM3CeE6eGajgR5UQ6PABy49aVbi5K951hWmCrUfmoAKX2ULc5APFqAh498n6fRTGhmP",
  "decoyKey11": "3wfXcs6MejgjEyDVx9UV3s5EjsEgFxCYHKoHxj2em5vv4mWfn78r7h63JCkw9e6KirBxCXUZGJrwAcxhVQ2AQLbh",
  "decoyKey12": "2wv816C6GwgbR4f5nVhhDXs9nUPXNiA6uCZZyvoMGF6UW8PFq65k9opgw1zMzd6LPamfQaT7Dt4YLyAkSDq27iUb",
  "decoyKey13": "r18usmVJs2mBTpYEmXDZJ3cho7HqXEKq3MDHq2ZX82yckmmn5iEHNCGv4YCcFeeQkGi7wnpYWfdrGZMhdCqQ6kF",
  "decoyKey14": "4qZce64uLr5GiMGN4Wf3wZYaMo1LxEbC272XYVJ2TZXTiXtifzVNpArava7QVFgPhoLcbWbNkPTiwZkBx8oWGsB4",
  "decoyKey15": "5eepZAtz649wp5jV2W2MvHtMPCrBFdc2tSxofDBPSiFEYWeNPrtbVmx287Zm1oJecQ4H6oBSinJrmWAZEufd9k5",
  "decoyKey16": "4zio2iC2122aEBUs6teSd998QR4GeYVrB4iHQ35cSnmvGisz5aBtsQHDfYF4DtpemBLwpZzyTB6MzJ2VgGuqeGmj",
  "decoyKey17": "3rH69ceh5bRNobdeduQUmY3vyGnckfy1AJdPykiotRWRCMK4v7Rc171x9hXAEUzF3JWpBT7TCnASoHMgJUMq3G9r",
  "decoyKey18": "45XSTjh3R5wpWD77tgvpZdRgeQScZaXWLUe7Vk1fwQA3HVj5Re1Vm9by8WYVs8A37W233kXabUntnquDoYnzpKBS",
  "decoyKey19": "65zbCUrev3EzrX65MCdL6Uuf1QVvVAXJyQDaZd8gfqWy47rhB4ZV9N9R2TiKM7bwjqKp4reBULuKUW1ByHSwpyue",
  "decoyKey20": "3SGEsNnyGuFae1Vjnq5SCi3Umv169os5NdDukeVXm8iCdWvTq5RF9QWF9UazVQPZK2Wx5WPWWK7BWwXdxzMczeP8",
  "decoyKey21": "4MVLcEUWtK9L38NergPHHraHHjttZNq4Go2FrjwNjTiCv4YAgeRnUHgDk4ujfBYrvrKQiCoyfvPHrJSdNDG9ZrHj",
  "decoyKey22": "51Zs1obHMvgiPWwBPFhYS8FBC6BQuTLkVb1XcX52NxgvXHTm4HfdcLoUtHKzHpr6YAYNDVGFvJtGpK6RPaPKfCvK",
  "decoyKey23": "2Mr148gGKmMhXmtH9FvuwyL8fRyPBfLA3AGwgpCow9PhDXg89oNgC8T7UYTMxwwB4C4131YnGHuHGJXENL8N8HP9",
  "decoyKey24": "5oNFfEvzh2HfvweDqAFZNKH5cZMpwudmhvQj7yAJVFLE4ieBDQsEyngVGifExhDh9781X7ZRA8LZH7htCFXgCZ5y",
  "decoyKey25": "3KukdFK6HH8DFivqQBBeuxW3gtcr4E2zLuC1DUmV5jGqShWNrJTEUP5tkPuejhJAaMp2ARB8BjwF1nncSW7ZJxid",
  "decoyKey26": "NN64pe62UtM28hp6mZwLfXQtmTZcCRqqc9nHcZyvvF4xzXxZEXEhbXMg39HtUbzuX6qSLJFmD3BwAXtbEdd65v4",
  "decoyKey27": "RPj4zbWRPGBHLd6HqyQr5vrrBXSMkzGB4xsxiEpcRfnTgo1Vf7yGHw4PC8tFywos9G1XX9mSiWgXW4XanD85EQ1",
  "decoyKey28": "3v33TjKBHKRvQLKXVnA88LcftTSn1HjxW8ejagPofKZ7FnJd398AfbdW4mfprq1adaMLmxbGoA8Dz4VZJY5zens9",
  "decoyKey29": "47AP5xz6PEtFAq4j2U5JXR2scebpBxxpZ2iUmAVaqGGjT9MMitZGR38TG675qQGRhUwTJ4MLxaJVLW9chv21nTtV",
  "decoyKey30": "3T42ibJdunUDaoUMAWXZyXgctX4dD61srCUkbsemMPeNcs6VhLiYNoQaGDSEhhDsYwvRCvLkCVPDEBa1fXKBW2N1",
  "decoyKey31": "3ESyECK4qhRV4YvtUQgoYDPXVsaNWvj2zhsAsmiGMHrTSBG7aKNeQnyTKxYBsPGGyu8AHxzL6eo2RExZgLnTNdjX",
  "decoyKey32": "8f1Y9puVtVp3dXNatwsiHx2pBPLy5t71eYpRJkLGP8dijXuQzTpqhGeVeSwJyJMmv8YgNsUqgciyzn2dUtwCk8o",
  "decoyKey33": "Sr2eWGKfy8kPx4ATisxJ9tnwUJDr5etMJwuGsqw6B5axo1dXY3jbg4B19j75h4eUVsdDSZ2gJ9dz65BDCJmRDFB",
  "decoyKey34": "PQKsGg8Xd9k9Xckx6kBKjVTGrGMewL1WKgS2BVKgJAW11vii3kCmm8UYqSQph2i9S2ytBsW4THfA96gvtgC6ZHx",
  "decoyKey35": "65vXG2AuFWyqfg2nW5veNkVHw4ehkmHx2YWDHLwwT1h1uZnN6mwjknktfBhKjx77LbsCLm6Y1PDe92y5oqgEVzru",
  "decoyKey36": "SXzqJovrxamqFXUWF1BHfszUcavPHC5AcpvdVBM6vFbnXX3XQfdznUwGDKmjPe21dq1ncaCxXiN6rLXgQ2DktUX",
  "decoyKey37": "5Cd9WNuKnfidveiBR32iay9SYVFdQ693g4P4izdZbJT2Tb6qFEWHSefSS3sLxQtzKgFmSeu4ucaWcfV6J7d4W6w",
  "decoyKey38": "4CUkKnxoRKgqkTdUMfUubZ5t9WkhUqBb5GuouqDFzjYc6QKB1TFfreow2qeykivQCcG6VLF4spmcCLcyfcNLBcRN",
  "decoyKey39": "3uCU3FYfiN1qemJfbLwsRaXGTxW8GbseeMDb2QFnanFMiK9GKDB4Mwo8uunyd5UYo8G2sGx6onApoMPDU23G87YH",
  "decoyKey40": "45zrvPwTDViPL7nnoK2dhbjTyZykhxgCyHdeRC9Rce1pUaMvbuy2VfbkZ9k5WrEzFit4z4Ctt8qh5HLteng3z65L",
  "decoyKey41": "eW1ppueTJ6dZQF1HnhEheZpURER4f3ncZTF3n2p1QgGghz4XyD9dV39R88m6BZje2nZxDqriZsbSSzs6EUPjGHr",
  "decoyKey42": "23awGGaZGXJwYjn7pS24qZctjRZ6JKBeKUN27uzVgJTRMgqGrTjCVoLX5yK7NzzoXnFrrrEvbxELkUhbUcLGNLdX",
  "decoyKey43": "5vPJJKR6tDBHZ8sPYA4nx58h9XGKUjtHviWc26vAttPEr5qmmdoco3atRAdybZx1LYDQxJ8ioz2AW2BvvHbtfuB7",
  "decoyKey44": "3pewNSacaB9vAJzg5TKzNNBbNrYHa9dwtMEeHj4KnF97H5PNmhcyMTmPaGMS6M5Uxy4QVzi3KVZuek6ByXFterUm",
  "decoyKey45": "5kuJL4MW7iTxJFvaovjeUmchDLS4K8u653bLqAtpVJss7k3FjwsUKktHErpnuJPAfDsnUuJzeBTDqz8tTc6yWpAX",
  "decoyKey46": "3h38WYUnkjuVo94r2WzcC3i3cLRtUkRXivgqKo61ddq3ywxeKGNkG8ftzeWB8HiqTMhAusLMmTL9PTAUi4c4e4Xg",
  "decoyKey47": "2NUMGnCWzrrbpq3qaE7VYr6kmXFyLwNmRmLaEjTxi5Vtocee6MJWRUDicL3oKnBPg8HS7qsdaUeuJNPmzhACL2ow",
  "decoyKey48": "4qXiVswtQjnsP4VTdw1gt8Q6HafLN8y4g6PoN6Y5kH1HVngoJ6DTKUv5QiwBMexyW73mqAPbJwuocgxPGYSDGSYr",
  "decoyKey49": "5gCKNpdn8nT1VgvfMra5fsaYADkMEamFx5rPNAVBASCQr9kL5p69eJyBH6WoaFVNMFqQC7oVkRgzqqr4YkMtUStx"
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