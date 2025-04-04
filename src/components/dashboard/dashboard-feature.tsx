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
    "4uj2Nq8QCmXy6F82xAnDvrafkMAMeJoeukK8jCBccuuWXedURKnLgBVnjo6zQDS9Ro9gHBcaZF613v3pVWq6s7E5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41MKPFYda8NzBBQz3cSJ3VJGEoHFTnhwnR6EMpmctpy35VbZw3T92qphhfbrRzNQCnK466pnqbSVto1gof4WVB1Z",
  "key1": "5nAiqMrdAB7d7Nn4f1jU6kX5ipaWRgVB7DM9TvPShLgDai6xJP9JxGf6kzb3f5FRrskQUP9gGyWSY3AnpDHu2Qes",
  "key2": "3BBzRvihs15JjsvrhmZ9tJQwEbdbS4Rrd2mu1wFGac14HmBPgMaxTppk4LUFjuLcU4JAVDJwV2nRoAWgmZVZ36wr",
  "key3": "3CJamXZMTDuneZjx7CWRfnGsnBev76x2CfXSW2t3aDt11Hy2QDknQn3DpjMShNnbqGmZSmChBvREhsoN697e6FPz",
  "key4": "3q4PczPSsUTwakmqKvd253qWjQA3fBXBMfz3Zm2izohWsxjqFCPqFT6uVp1yNXLBT2BRQWrvAnVpDcikQhsP159h",
  "key5": "doFyC7SrHvVZUJLcmiJ7d3DVyNfthJYAwKNUtGVGSVztKoQbhBcUFJehbeiQxnve8P5HWVJ3CbqWF3t2sTStH2J",
  "key6": "4zNQkvEaC98r8936rNK5Lhs8BdCtrVYdr2KSv5yu7WCgf9frzKiYiv7U26x9gFt1HYxVUMzcTaUcJYgG6mpUYQqn",
  "key7": "5Ci1pQNRAJq7FU83EY8mzSjFisnWtCqqZDYsdcEKuHGAWxzKjnfySwfjidLJuYxNc19utpihMn1HhbPM6ZPzxYLr",
  "key8": "4VPRefJm653t54CnLXP7XBLWEEe6KNpM6vc7PfnJXzpm2LPPg7aCEdn6aSVMUtKQNtVNmsUH6RDXpcUTz85kEWtu",
  "key9": "39WMi1TLb6VnEvYDbWViTzHeSqrkSEEcFYdVDN975vny6pkXwymqgi1oh37uzHgC9ZfqD8XjekDkZ2iMnpaAexWj",
  "key10": "97MBMZEaNADVyVHmFj94VB1Se6vyrWzfvDfaUtqTFtsemTYn7mnUSRBFvvj4MvxK5EcL5toCzX47rK8N2jqDs7f",
  "key11": "4DueLCXL28xjuC285E3zUwbsXseTnZX1uzBAfN4PxKJ91HPdXVq4so7uEnhPobDt7S2FcZS6yAebQGjrSbRNQuAN",
  "key12": "ymyvTxPQ3c8Z4KNkzwqvbZqze47n8gty43dX9doPoRiuCHfNFnKVrvTto9p3srY3jN2icqW6naPcb3cokx4Mh4L",
  "key13": "2XTWWTY1tbCFaRGbXzvhQDtwFpoVXFmp9b717AfQmsqNV3ve4CJBDVXpY72pE5ZU7M3ovfofU43bZXNoAs5b25zV",
  "key14": "2Q4ufBGk94ByR5tdFyo1EJbc2oYY1VZ7MLJZ5ieN8SqEE9LXwoFiBBojrtypKC3tYYBc8otv7y1Y9t8twkSnEN2U",
  "key15": "4Xgb5g2DMqV9L8c4QPVxCzzanpKYdyvWnUemfiuRuvwijyJ6Sn7PJZkvPjUbQaVqS11WjYjNZgkEHshu676LNMQD",
  "key16": "3fLRiNm1577UeKEDfxzdjwu7qLrf6T6fvpcf3PgRKoKjPn2GVL4c9PtvnzSr5Ly6Ao2NrCt4WS1uqDg16TT5b4RY",
  "key17": "EKYfcPbpo3DMH1uHMcC8CCW3JjiKWcoFXoT1w8EvcDk58U352ny8EDcWeXZxXrxYwfEXABvfytKvribqiYyxmBD",
  "key18": "4V33DZTaWW69qf8SiKMZRNY12ePkNEkLVPtvcvrWWXgTKb5qSe1PY6rFKbzPEZB2ZD81noeeYECcV1aNpB7W8AKX",
  "key19": "JbfMcKvZc5qgWBFqi65imCufW7peAdg7gn3WCFsA4xrczo6d9FAUFTaEsh4r42b1F2RCjQe1nqpAwZcfQXntiVu",
  "key20": "3nAQwSNsykvTNtGzzgsYLeFTmcppu6Ndm1t8jpVneRYqHeG61uU8raZf4eRc8en4WdKrr2qS2x72tPw26edqX7eq",
  "key21": "5ySz8GCLiiKZJeRxMM3UZzgMWUyCJokYbGnnykdiS2vidxMj9g85tGDaqEHUAJLTY6ZzFjaAPVUSPi6TmzcNrxrp",
  "key22": "2cf3TNyJXfKB9hRu9jwYBFssrDSFgAgQDq33W6Y4Gvowo3HRvFyF7ZvUSa98Jmawk3WPSd9NfdH3syCWXhDonRSX",
  "key23": "2sCdkPwMreCbi6UriL4xxEdE2r3XFUxEbkpQGkmXQAMnRnz66PHuw8jDh74xBmedLaYDLsZCxz67SGeHSZqVmYAn",
  "key24": "2Mu6XnTi3nVaTu9Vy7SUKah7caER9WhWzJeZThsuA6wX2wkZ8J8aoK6pAtYDMTE7JqPD6ciH5jVLzyzKok4wZtrM",
  "key25": "5YGgAqEeFxc5uYU6XYejFLKaqi18gYS85fudumzAe5X2yvuUrDfe3Zb3Ztc68oi88AsbRSJ857EP4rj3JPATwH5r"
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
