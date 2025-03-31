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
    "37AAng2Y9rcMSDdjHx5EAArcQxJx2gZNNG8YDgjDK4DThczcuGic42q8UHCFztsH61BayVJEBLoYiR9HvjCp2cBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dg17dQMb34pCUnCz8pFqEDdpuiUHGRNdRsoDkYhDDLzt1JfzYQ1z3CUrrMpXWfHwMxE72CFmmYrD2bhAGpnvrQQ",
  "key1": "5HZtRnmk662Gsv5KoDRqwWRc1wFLZMaK6Xd8QgyWphN5dpvUyjuBqRxeGbYC4ydzQt19EKJyVUKztsqsX2YKeMqW",
  "key2": "5xFrL84ZMJ5PbVYLBpGR1Mesa4wahViJ2XSHhZYGiUqn8uyze65hKJ36Fy3vpTyxEVpeSRUfarFrhWVF2nHT5ibw",
  "key3": "21W73PqvYC4gbfbXFuNvmZs3xm4hxvHobajhhfQbFPLYimaYhpY4UFQbvbeNwM7PYMpRmcRgMgsAFRcJx2urEuZE",
  "key4": "TLmpjo25YwUMHj85FBzgQKQUdi15S2avWRTN5i2hZnChR4157rKYBUXXWTQMKPqJw9TnR3WgtpVPbajV6touebc",
  "key5": "2dbyZgQ5EpoyTuSj4fSuRr1nNExumyDsW4dkUUXjUF3fRz38NP73anwRPP3X4UmsXajDe9oDVcdBzQLdpntaxh3h",
  "key6": "21Axg3zg4NoxByyZBbmX1yhTVxUS7ptL85NixKHY97t3uZxsBYKhD7pKmc8z54ENkvkoKQjgXbjDLeeLovo4Z3p1",
  "key7": "2tUoQEHqTT7JN1dLCDKvsgmvzZNe4eDuJ1R8oT8pSk54qwYM7TSCq9Rn15d5yGpkEaJcb4YzicTQM24LqjmccyBk",
  "key8": "4WRsZCwnr45NNMVXoQsTEtypGyDKBcvrX7o3H94su1GFL7teCq5ATLxCVJUYFJ3cY1Qn6LHdjH9sV5245t5t8Fwq",
  "key9": "4b9oksELSZm9jMFwyy25kno4aiXscmW3uTHpQBVrV5evjsDVhMFaMgijTamSUnCjsLJZyPms7duJps15efsEaKmE",
  "key10": "3wLfadnh1wsrzbP7ZcBL1oATxDSTX6yMvcNjDnRapKUCWcSNXg5S5kBVBjgoXQWc6jQuptLTJC9rB32NvC2XshzT",
  "key11": "cKqpxDkZFvFte8qJGo3Pk4ESvxkHePD2mPZH2xXcVEvrfMFiqHj3RzFcFLepA5ouLNL5wZntdm3LbJaNSJ2JgAd",
  "key12": "48w1fkS8yXmzY54FcZEYkEJh5Y3gMHQu7qHxWUsraYVWkUYVCD7X7WMRnBzbxkYfB93Ag1hLGrqEh8SfamE4TSwj",
  "key13": "62KbaTCP9VrbnvyY52eXLXjkcxPVW4GKoTwZZt2wDy5up8NotYJTMXeKgHPtcx142JpmN1hRsz4W18V6sZpRHQo3",
  "key14": "5QEABwPr3qZcsEi8TUrFG9KQEg9aj7irhUmrtqAYoAVPNTaCeyf7vbJqFfszhWS8U1LLxyhwqes7RSmDncd5yFoy",
  "key15": "sGQnTvbpzVtJP8o6iiggQMWQMrRvnRaTbXyRo4qrUVV66Uku2nXTDhpdiSTTeov8XM9GX9kvttYZ992FHVQS8fE",
  "key16": "oPSdnvrMFpSZGVkQqRU3CRXnUuca4936jViRx5BxneNLXmQrUjuqX29u86qDNGRFx822krye9FnHwy8Ak9Rtqm7",
  "key17": "4HvBTeq5g6Q7XUyTRdo97RPkCGwtpgq4UohRV12pDZV15nww1E2zimebUfKtbDbysmiY6A73t16dfPZwogMaXpk7",
  "key18": "5YL714exaY4VULxBHXiwAybwoWm5Sm6o1jaj3w4zc5oSxAbYrRaBYmB92Q4HjMBj4xYgMGyEMWfacHuNUeLojbdg",
  "key19": "4jog9H1SpGCVt68E9zVZXX5Z7new75x1i3tpvsEiebuk3jSHA8TWQacQXdi8WHJ6vsVgRtJhAZFJsiUrQKirzXN1",
  "key20": "2vCpfjexbVCxpwKhaoKDWFBLpxi1SxVuCdV98PoL1GANLdbFDcjG5gdega9ksMTyyRxJZgL8ky3evEUhfmFxuD9R",
  "key21": "2M4xsFrgGiw793A3AucLewC2VQj8QMkRVRcqVjivXabRezyfSaeJEPNbez1L6XrPgEq8iFeRUJZx9B2XDumXWYVA",
  "key22": "25whs7MSoA9E8PEDXSG4abazX3Cz3gsqWgkVGPvyxYkGjkzGp1cu1MdFR7yz7QTJB8GCAxPSW9uasw9NZcBMcRBM",
  "key23": "4JxNx9rnJxnNbCmB5w7ZanbBrE6N3ajo9hCo4SbNXb7LTztxtcMjWFAhPmjiLJ7aYkvULdwfans5Nw41cKaaSrGo",
  "key24": "5NrUjKDdWtwCKytyxkxLUeFajz4ywKwEEGwc4JNDJi6xZ8qG5mcmQiGF7Y77EqKhkkkzZsWeLGsVMpF8UTh4mNXb",
  "key25": "47KG1sF3exUQsbbPXMQUQGUQ2QfywZERy9CZujvwrhPBmZJVYVCWz4yMPvQxXC3jFDfAx4WN3JM8QeJ8gb2taVES",
  "key26": "3D2pVesNPbFyhgRzhiRGBmdaUQe4hc3vbRu7jXP1MfJUgjgDsqh4a3uBLDRNdZMatXnGR3xoaeRKru462cB8NXfd",
  "key27": "5gWHj1TjZHEWeaUyfahx1sAKEhu8VhULDuVXydYZtdtJp23zhaTSPMBYfexeb7Bnyc6YMgYiJVmpFywu3B5dVw8s"
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
