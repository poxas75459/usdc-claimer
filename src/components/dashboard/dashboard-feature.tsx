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
    "2a115AS34es6ZhjcBS27oFcReVVwKhddqLv9Qkauqy2UPWaDCKhHzQJkQpFQPgw2qVgHbssmmo797tvC8iQWNz1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47eHtScyMp1TtnLs1PEdyUsaACeMZkVjyCB9EeBzNfyESWDMptL2ZagcGMiHn5psqzkQM4K5xqvQ3DSbENumsUFi",
  "key1": "3P38gTHc6PuQmiMZXgjtkCXnBFdBZtLrfT8AtWJ9NgTnL1zN8msN1hqje8Yufotx1ZcEUbKitWibkkt3fMA4PMaq",
  "key2": "M7Bpgd8BMRtmniokRBy43kazeG2jNnK3WqNzpho86ovCAUf1ooh1AhtyyxnNxvtVUQjVjDr4cQiBmqgZagBmazN",
  "key3": "3tH43P2iiWmR36sYsgkm75FKeF5D75tjtSTSY1bL2t7iyGWMQt3XmzeQpix2cZBrbfGuP8auJkXi8DsvBo9BAyvj",
  "key4": "3z4BgocfnuazJ44pRNYW5GNC2Dfo9VMkeNhvbpia8BzfCYHpKWAWew69VWgoNCDyD2XAGmsbpvPsue7JWS3rxhkT",
  "key5": "25hoPmEsmrML5mS9XUgXo7hddb5QggFgDZG8v2ZdjnLBSXd7XayYnEt5SXKxdU3vkxsuHb2gi7BpPNLpdfKnXReh",
  "key6": "3Q4fvSYuDWMfQyoEpRZ9xMUTyP6BH4y5Myn5GSorfB9hCAkEmKXWst8o4YpUAuGiNoaTy6aCFL4BJGMbkBgmaJ9k",
  "key7": "hR4XEggZXJ5mbF2khAYVatJ8hGDHmGsJ52efCifsWktJBCg2nfBPpkaXztCKYwTqbhjSSMciVeQdbnVky4UFee3",
  "key8": "e4H2MRRDWRxwhqmR9bTKQNF18P4TwvEQANuWc6YoxQd4uoyXGDUmArmGEa849KwohcMgsuUDM1XUmXUgvkk9QiV",
  "key9": "2BxGfpvJppofCmU4nXDuyaRsDtYTuRdrwGsvrXiBbHr4Fto6nGUzKd3DCXNQCTvb9d4zt9d85X6bEpT6wFGNAkoh",
  "key10": "hJoLxBo3JLkFMmi2j4hH2ngEiQaJcL2xM8Bj4gKq8Voir3h2XzXAFcbaPAzqUE8mrgvitJUngJVjsboyZU4ssKt",
  "key11": "3kTCDGoQoGLR9pjw94pZnmYtXtzYk7kkEbg26iCbzyQd31qDup5S3LGobAKLQStHRCe9JwuACBwSfhVyBFKZG9fe",
  "key12": "3ZUdrRoSoaTcBpiot8rS4NSjQpY2QH35eDafq4kn2ffDmAUiZWxhArdGp7HnTZvH7zYD5ADtcH9Kz8FhXnMJXyYK",
  "key13": "4voc7fpFJGkViJsQWWdo5XFwGq4CATTF9fwRkcwy3Zb6zALZ9jC3TuFAVr5TmYwjZ7QJYJc3fvLGiSWsKjuof9DX",
  "key14": "4578ctmuChQ58E7e1DSF2UYissQcTvVsCVJHNJwr9F4HDF1GAWG7CFHbgnPdyZGXoWF6UypWSrY8nWBwKpfoQDTG",
  "key15": "4DB3cxSXJGbkx3i7MBkEQeMswHeV2iXGgLtsoZwh22QJV1P1sPNFYQ1AMKV79gcSqfkcwvrCLhHDfw38ookdDJVB",
  "key16": "5AgbQaQj64ECYJpd8U3MeqQPzyuErYuLwqedHM6e7AwYXkahccHE8ydTkKQYNsupMHJarHr4GLjigq2skjmpa67P",
  "key17": "3kRomCKngZxBvnykn4Tot8fXfj5B8L4kvkcDjwRspS76ePgSoxtQ9y9P4P6W1AqHHYS23ybLNjRZzAse6Ex8ygtS",
  "key18": "4G6p25HwMFBcYHNopur6vBLpx7jWhMx68U32xSXQttvZYVbyEmkNv4UhXgZqxFSfqBZr8r5Gdd1Q882c6iMbdUL9",
  "key19": "5WnUMXSvD7e7Qdediy7c3BdhdrifN4Hef8kHtoTkpbruzcb5txUCRaVFeJ5xpq9QgqHhgveAu29i1YuFGZub5ccG",
  "key20": "2N4aCZ26rpZQWtii74kBYUhzXUe9zbKPdWaaRuwSRP4cd7jZbQBqn8A3cb1kUA2UsPt36Ujx8r8gB5ZDwdTRNGZt",
  "key21": "Asvy9zSXxVHtspmWoVZvV2vBTph6ZfoBgKDjJQBsp6o7ibtbVcSbxkppmPxqMY95A9EdDwnVcvWSY8F5Q5iv7vL",
  "key22": "5kXNEXwMmviYJgXZLMabiQ4rA3cwboDc8JGPyVGbYPt1s1Jtpc4ZgWXAFdm8VAvauRAtaHm36k8SocGPuRrr88MW",
  "key23": "fyF6gbLt95GoivtZ2sEvHKPu1isd4wd9HHL979obR7TFsP9Kysa9gB4qk7n8bUnQGyhKKC1JWadjK1LpSiVU81Z",
  "key24": "4ynkjsJ7UmKcKZDx457VKcCQqtBxJy8rAPL6pbiTdgMA538YjS7MeRrTPDxPV4Rs9Zuigwj22R1tZMK1GD3Ykmpu",
  "key25": "4vD7fsjQ9xu1MBKtPUM9YpQJvCpjriBwR1FFF8RTNPuYEAoLfwdmDA7SXg5Zy894W6jDt3RLn3AQmV5CLBs5bS9A",
  "key26": "a4K2n2dxJwsuWaFS7WffVvUDViYnFgGe7VEr4MgVCEUFjSqDbhYm3WhKGLv63AqGdwULr9ezwoWK1BVsFR3hnvs",
  "key27": "3Z6ycVVQkfXtupjzozPxViiJP439EUfYEATzx3opUkWF7eN3DSmqXrtLGLPH7adx4VoScr6HXriGxN64eiK9YZw3",
  "key28": "4673MxcFE6XJnKgdn6cwCtaxdkFk3HLDkcggF5LQbc7oRzPy3Auiaii1RveamEkVCikBHHwJex1D9LpkG3Lh5qCc",
  "key29": "CjwC29J4bt4n5VAxiqhMeNiELSFrC57P7SxiEctjFW4nwGPYvrhjKgNVVKZsVM8QLTueyN5oYCSm73jv6p8ovPB",
  "key30": "4FSfXBMXUCxFPeoFtapeMvB5WvZrqMmcnvkbm5kyGR8oyVWCPqepR5Gh8TaisS2BCJqdCYkDWRT7PVG9VsJ3T4Qy",
  "key31": "qWeCZU5y4pkkeGvQjACqb4Jxov7iRRbj4LKjGvp4Qv68pAhQMeGvjLQpghi9ZZ7qMVPUopQAk7YUmLaRyqx9Nup",
  "key32": "4YxoRdKT8HmgiLd2XmuWZAiv8xotMersgu8LmXf98QGprA5ADYboBGEwDvPXxVf9MkWX7mT8YnacjA2EmAbuwt3v",
  "key33": "4WC7TZrKswNB1tTC6JVU8g9CTCizo3Qtuu1NXkECqtyNk5cp7S2mMoex6vg3PCLzcebjjdbkMMnE6VzPH98AUiEA",
  "key34": "4Vb8NDpAKShbe5C3DR1QHBaABKKcVczaPMzJvmuN5Xs5Axm6JNs7WYPVicqhYwbu11N4rtEB3VoDGbpus5CgQgov",
  "key35": "5TDncAtK8QPb9rNb4Dfdk9jKaHM6P6y2PKWVNWogwjZGDg2oF8aRaX7vMxLwr5ei9hBucfdw9G6YWTywaQWCC5nG",
  "key36": "ss9yMoPFkrQwhmsYzMbPV3DCPFn5Hyug9z5Z6fUjmrXFo63MKjADPGjtdGnnDRQWYGAkU8mgWsceE4K9MNGhtuD"
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
