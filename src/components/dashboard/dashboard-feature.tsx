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
    "2auhVJevJizsDth25UvGByoAVLofRbaXsrNN2cStSqLL4pbBpENYdjetr3HnXkL539LNfiwPVP8mrMaMKuWQzhro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDsxod4rj7Q8vsJHhoXdNchAE7KucztZtAD43zcNebtz6J6Uuf55HE4m24DMwvshMy8v1RLn4KjJHaxSSEY3rjp",
  "key1": "bUtEX8zn4UfB4RBZ96B38CZeKZ75uxAkaw8BHgVLjqWiRt1k3HQYkQYWQrJM9g3ZCn41Ja9Gt2U9oXzPJnx8zNK",
  "key2": "TYi9tvwB2pz8oRLNhe3rfbrnxXqcDqKmEG8Z2yYKR3acZfmCn7eYS6pn6edYcpLWChvA9Hv52Duj2AGKbieXcRx",
  "key3": "3eesaFN4tVWr5Di46afmH7oaKHBwdQFNhvFFsHC8QgdxzsmaRUaTE1DVkbWaBHPj7jQBwiX7RekKGNRKRzUxZhv4",
  "key4": "hpfH4RK9Nuf29vcxjcN42szcWVD3UdaHVuk3D6KTzQiZY7h1wromMsy7VC25X3DPR6wfPJTrzya4rzkKRp4FkH7",
  "key5": "52gVW2bcDgATHdJYQbBS5rkSJj7Qegthn1ehLoQH9fFZ7Hi7dw16MrDU4smp1e4XCWM172tpzUwKiTSj5YapyZ2C",
  "key6": "5xyhswBZgmwAKnjNxQdw3T4zrL86F9pGynWNG4m7JyfWRmnq7xQq9Liz7Ba55Lwa9GM521ddiXEaNSgTfCaryK1N",
  "key7": "4i3aRdmpDQ9oq72cw3QxpLLu8MbubE5bQZzc68QW6RxYocdi3U1xTnLFUTTFBy99SrE4Lh8F77Thc5CNbEfPoJYt",
  "key8": "43bJJEjTjoYx96tbk8QTTEnZ4vzfq7C9rdgMbmddXhBSLLEuDMj3nj23sy6Qixm5LrmMAWseHDY9SfKGAx4paBLj",
  "key9": "4PKntCCE6kjqtGR193cpgBREsDDQiTSRHuqyuZNEFCGzggSdguXBST9v61R3bupcpGmtEzpwyaoPuzS5eSEFdkPY",
  "key10": "65UW34JyuRWMSbKu9HojDod6CyprUSQpAkmegfxMk6qaeo4p2Z6hYAY8EJAqepWr2HBSyQMnCJ4XoEk2ioijvoTZ",
  "key11": "3pqEpFwTJw1Pb9gA6unc1eV7E9DWWeGTA5APXbmMP7cpu4qdsFhjE1yvuDc7ULJ71FkE4wZTj4aKdVtpykNQwKCg",
  "key12": "4eumP4n1UfgCVVf7vXFkEPnGS45WxrGu2pAevgkR5ymBPrF9RKnxQx6VZ1RFr5jDB4NuaT3wFw6tacV59fpqEGck",
  "key13": "28HkvEyqTcZwWaiBDsxFFzXAZNwfXAka8Teg1FTUAA4nyatMWCbXqfW8rm2q2bCyUb9sEyXQgDAfonfaqgdHL4DD",
  "key14": "2atL54whWSsBKUntiHbUhapy3KeQd2J9Lj9F22iZXp4zZboGS6KNSouwWpZBaUxwkdhfCUY9E2cRbEg1WjmEVp5n",
  "key15": "4VQJjRvSFhgibyZiJDvHj92siTpeZFU9UvZF1i9WX3tfepX8qAHfiTscG2zvLgmHMfgZyVs7errp8f1rZeYc6VkA",
  "key16": "3eHgnEj2GK1fbNDeh54wp6pBwEWafgkuNpJeHycVSBqAz1QTyLiThoA84YNLCq2zGmz6BbQVYufHSs9jrbvLQDbV",
  "key17": "DLkU2Zbid2knwV2zJaZRfugdV8LVudc39fjdjjmLEDzPnDbbEjNKXHtKWDy6kYtstwPum9cVb6Apmdb2tkbbwTC",
  "key18": "vxpMrUcp1XSeN3DFmE5kSGEC672SG87CGxPLDUpUBjUMkSgKizgdsqoMZD8k6e88idvahkANW2LD7VMsG3Knazp",
  "key19": "bdtxzZNzNzcxRRXhjuMrpMmnHjPRPPsY2cxvrKHzPkA7LP5Q2t1ZWmofHN53iXGLcKgrDkjMW1QTpB9jAC5KW7g",
  "key20": "13HvfJH8n3SBRySrbA2VbsHriQQTzbyqUQG2SRyCr9oe7Rn6gT6RsubgnCdeimz4hx1a5t35PNsP5UhEVLxfkYK",
  "key21": "v6UgWEtbVWn4XRyeM3uLbn3k6muFWVzfU48dKiJnEhJkftUsJ8ucmUwsQAHHvEeqBMNRp7rJHfFo1DCS9Rk6SFE",
  "key22": "2RFReFAzSj2unfFixXmrk2SVtiNnBu6NjD1FFD5WiDe5HZrj3osbXnCR9fmaY5zm5v8ZKg2cnPpnaTX5NxzCP7aY",
  "key23": "5SRAUD1KGdV46P3Ngaq4KCpcMFQLoMmHXmddNpsiRDA5RRaqP283GxsHayfwvhk7BWZxCzxZwNocXgKUmAyt8LVv",
  "key24": "4fr4zTCVJm9X6kFNcipQe8bqcuMBwmRo2Q3W9EBpXXAeLcg1UAKM4nnQYdfQeWqpuXoq6Jf3wMt4HN6N4ixaBkn4"
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
