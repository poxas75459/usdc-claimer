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
    "2SNoH9wmQP3CjAdnDwieGS6uHcU7NZzomuJu6LhNCWvUHehuwAP2peFJGNKc7fdLsRV8zGx2hFFCHvybk2EeZAYL"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "44fsDD2mwsmQY5iNRQJuUETSn5DLzjNoi6usM3KoYXMF5YPzwoUQ2RzuwPpyb5HRnnjLaG7PTyH4Wynffd1b73yh",
  "decoyKey1": "5oh5NCyzz5AgJWMP2Afpez84iJBnMcd9zHas1nYpJifUhbPoBnGe8sbbBk5S5LX9uyanSi6Uwx56wSiMpcKKgcwj",
  "decoyKey2": "2qCQXsGSCufjuq7y46VbKYnFQvwixeQ4gNtVkJ3mWNdgMUui3xty7J8q1LUsccygvCEqJpyfwAJWHCAEP6YMFs93",
  "decoyKey3": "mStR9c5NVEXJu6TaRc4i6iDY2g3bT89ZgDqVGhQYSuC7D9BU5iFr5etAwdCYGQ1jyRvpPx1iTpjZoCWm7MLdBUC",
  "decoyKey4": "53mXVYdLSNoAj96jxWHG7JeCv97YrFv8aEgkNWFVUp7iaB34M3givD6GyyiPCAXkisr4zoFaBM7NHBAumNPxi2zA",
  "decoyKey5": "2MWR2tYZszewPjNPZeFCUnx7bP5osQFCNwrteCUZLeWsfjnMGKpiezkJ7fKCKdg6mfXEN7gQ5REFc2zZRiHLDrkQ",
  "decoyKey6": "cmYGBUMDoqh17bd8AJVL9YZvhqQRDqzAGTFwrEWDcYhRPFmXVbWvjPocYNZCWnCE2o42yVFej9XYqRYsy93ZAfp",
  "decoyKey7": "2BZ13F18KP3vYrHaBUpbNiBs37mDVkgbQjVgGUMVJgAKZm4jpGeCrJPK8CCmz21oLgxvESCEtphFbvg1sRjREQ5o",
  "decoyKey8": "3NsfEHNq75bh7SRHxuj774zGfZmYwfdJ4mb4xPViV2Hfiv17kjVmj9eSDJPwJqRaq4qgeeTY5Tf3os4hD4CN4hPY",
  "decoyKey9": "vQQVkX1Q4q1GwevmxZ6iyYCUUEia6mAif9XWcty2mjsMLzoasCnTWN3na2kqS8y5M72gXspfNxeKD1oHZkY7GbM",
  "decoyKey10": "TN3ZnPMx8gvoT7EYJvr6GpLQSuy7m8SWbDp4x5QoXFPE4MjMP38hu4Fer8jLX16SRDqQc4yf15NZ6by3YjTSBEv",
  "decoyKey11": "35P8ePuDFvWxnPXw9SgLtK2DPmrMbbRULzQBajv9Cz3d6xe29x7WXAYm7tAgt5ZYybXdEEm5cfHv1MekX54R7aD3",
  "decoyKey12": "5aKFdbiTY8ZS5EuUEsfgxqBsS4v4vNjXFtb6TuUcqxnJN4Y8Ev4Ys2CujSJwddymKgrMsdfdfR4FAyyzhUN9zQSH",
  "decoyKey13": "4yuvYuDmmnKGp8gAq1mBA3MMtn8hLonXKcLTU3rNuhQEgXAYao81XmVwYTGQviZ92KMQ178aNLw94EsHUGaNgyPx",
  "decoyKey14": "4ybxUcvS7ZJUyw8Kodu2NzMvJFEXxNAizyQNidPGF2hRQxT2t7eThUFyjnfAKCA36gwZx1jAKnEo5KdWSQDXY7j2",
  "decoyKey15": "VZwtnDBYcPta497vqHNH1LDDPrWk4SRdKE835vErmXVMwzaFp6aJW12LoYmPXnszzZeJz9DbnziGVY648KAZmFu",
  "decoyKey16": "tCB5ZDz8VcxVK1wgr1HWogD7zB1bX6ZzD2HBDHvSc7cbqtxSQg6HFamLpB1ZPMyDsQzwYFyiJHZcNoR2n7ykATC",
  "decoyKey17": "4emwDzUXR15e8WMLqZWEkxm6ioboJSkZcLmiG3vx3qvNg7XBJqFGc7qACPA1MfA7dw7w2qhKz45v1ymcz7oT376y",
  "decoyKey18": "5zRhVYooqM42vo2mXjPJtcHLgN9EsfUgx3Z7CEp7bwfR5MXguzQCaKjCfLmtTTGdaWT74LnzXHx2NAaY4hTgSxan",
  "decoyKey19": "2smFJnUEzMfUxHeQy7WFDtS4srSQ5BsuaA8Zgyh3vVZRyQkYxxAdQkP6tQhzKwfHkSWjivjhA9zaxxc6gwYnRZRb",
  "decoyKey20": "2Nvwp5SEc1QGq2uz8z9NpJTrJPa9oTmpxrH38HpBUqAk1rwphPfBDVYWGUdREbMKesFmo5o8K5tsynirAgiFv7x1",
  "decoyKey21": "5BaXrK7mn6ADekpb1Yv8F7pSFe3E7GnE7mGwHQ97th3PGyCATnhrkcvH2F4TGZeYud9dygY6B94qhFF6tHCLyiui",
  "decoyKey22": "4EBr8xcVuPAY7CyX8RVboo9MEh56FFWASLb9GGbnwGnN8SntbvUoVZUzZRgkcCgieKW8DgAAMomvL7MezG6mRQHw",
  "decoyKey23": "b4gMV8Uo2vVnHpbNDN82y7ZtiBSQLcA86QQek52A3LB8Q579YFk8NBFP8Md72TcoeQzboFeTF3PZzVN2tXi4ain",
  "decoyKey24": "njs94CCRsWhsB4D48P9V2P225inTWN4AjepzySjyyKU4MsVPtr2yasheoH8TqyNLcVp2ekovga8KS8mB6WTcxbd",
  "decoyKey25": "C4en2N1BYSmE2iPqruHHUNcf3VShnYzuMrgwKXJsScsd5eJadRR1q12bHXRjAWhPTTygUrmfafLUgixZqHKMfzY",
  "decoyKey26": "2faCE67SG7ezGRHPRAKrDUStfjVKL8rLcTAPhyuRbRG4yHneV2B2rnQtg7dV3HbCPBBai5Tqa3QgAhk539YqdWzG",
  "decoyKey27": "5vrPX9qJhkKwUWoz7DUZRLzC4HyLUrbSUL7ejJLT8boXk5HF8ygzf3zg65F4QGroNkvMuJKcNUgyUwNMRuK3kJcd",
  "decoyKey28": "NH3oy5YMSDkJ1L3NDnqXN15GefKwrPBXXm5N8aUeqypdkmF8UEoD3S2JZHhMqZRMHSYzBxPz2ZjHrMSE58EHtLj",
  "decoyKey29": "4W21D9TRFvc4DW9v4SvaZQsTzphTuJY7o4Z1YeN5U9JErrv8Nj2TQaFutL7P42XZrZhZgYwrekhQcTiA7MTZeBZf",
  "decoyKey30": "3fTcy1fi1YFJyKkakC3GWkv6o2GTMJns9NQWcLNvCDKQr2SWdcjWcs9JQPe4YemtP4dV9xhju7j54bMnNV3a6rd3",
  "decoyKey31": "5p2FAq6yiPfva2GebN6txrmxf9E7DAgFaT5jCSmaYG2q4J6fvk18THksT93ypyR8w9AdReaui84XentmeX5obfxL",
  "decoyKey32": "3W1pBZZ196uKwaki8s6bVesRWDhbctSh6jVSwRNLHkMG5fEFyMVRzdyEW9XTwj77KEqCGWWfishtE28TGF8Lk4Lw",
  "decoyKey33": "RCYrYhPWNJztVzERh3n5uEndAwWDxB6GZy13qiRrky339er9rS5dscTQJF6UpkD2Jj24TNma37zGK9sdLFyJtSJ",
  "decoyKey34": "a8KoAn9u4qQqFJ4Mh9z1cfbBkP5QEcTSsPBc3EUBvVPJ6N6y5zrEp9CP2jA5BfrwaFYBNzbGKcDGdExF4syqMb5",
  "decoyKey35": "3KvniGieSPCf49iXgeWXXqgPuBkprfZTuRq3RbKza87KecACrm4tCB4KVAhYoDjGh5TysNAMXZ8uPHce1ZdhwhyQ",
  "decoyKey36": "4gVe1ENVR6f71BhgVP7beq8pSJ9hban7LEptKWkMv3FppTgcTXT1FERkD1BzNvFYWk485A1PJn9T7Us4jL8JD4Xa",
  "decoyKey37": "tdqwDSYCLK9KDCDvVUTiSDpGZ2xpB8mDUanCA9yKTxsiNtmFKCDaLfN3g1oMsthc7sJp1HSRHLipzpAAqWBfCnn"
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