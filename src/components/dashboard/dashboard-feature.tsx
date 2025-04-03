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
    "VgSA1AixhDBZrxUmp6G4hzvTxTZoSRZpG91M4p2R8pN1tsxz4MurGEyFKubGJaSo4nRa6hhQAEBHziZ4YePKTq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aR95iUESfACAMT3ZTMwpSugxqMjKSPTBkk8hkfPZ7aKbcNmaQUr31PSRhb55anTQs3BYm1LBnPoEfk7euxkfxmj",
  "key1": "41J4ifCFjgMwJDj65z5VrZgLofpZiU3nV6Cf3a7Jhn5H3Po3gYPsGEY9JqXkomceGdUiDQd8kejdk53kD7CUDteU",
  "key2": "aNzXz5bf5rxRbuj5DDs9SB2eHtzkNTq5pqyWaeWXFb8N6cNEfW5YQzhMzR7cdjJMbYuLHFLVU9Tph25a8EN6FGE",
  "key3": "31KzodJkJaqyvi56nwzP6p8uC1Hw2kuGuqWyW51wpLZmPkQHB1AiHqX7mShFiNDuW3brXtkMWKSELrva2S67LQoe",
  "key4": "BWY175WZgqmjpDMRQi9q19cnTbG38d83ksSoAuJryUbXqZ3XEUWhjo1uKujfYcnMvAzDsoLz5ByPP5Ej2k6wUBJ",
  "key5": "5ndBJ1oZYF3uNJYyjMDKBZ4t96GBZ5TspuRAq1PBAqb5YPqcifWG5R1NkTCs2x3XGd6coN98tyUrkz2VEeV8kD5w",
  "key6": "XzJif9yPxU2vY6WuMjyd3YCtyWtWpx4YFayo1gvYAndURqNdxcnFEDPQ6Dr7NESqL7rXXisQhLyVJ5XvqCkikGV",
  "key7": "37cqGyVs3QkjXw8Zf9TrK9n17Efx6YqYuXxezLTXH4R4Z8fpdFGn8bYBv6FvGL4DZkuq8Jshe6QsaGh4iCp58D3q",
  "key8": "3YNz1cB2qM9bqPG3pQn7DAA5EbKcui8HD1Byv3HW1vXfRXMmCLJjimfjbRSKNZ86n2vWKHsHRg6sUAC9x5saFGUG",
  "key9": "8BYhMrVC9QV7j5j5LmARgNxteX1Px3NZvgpbYffhYXWcmTzvq2LDBG8eL9q9BWHKWJmjhqay92oL7rg2ikvMWg2",
  "key10": "4bxop1TZTrr9kQh79udZvAMrSSpFcVpmhU5wCTQH7YsQkv8SiGbLv7JV3XhF7Lh6ihAJgbHmknS7Tqi77ykbsSqK",
  "key11": "2pPo4EAER3JAMV23P4odkfX5xNijEQR73yEQUAKi9V46955FNhdXaMpx7h9MyWZsoehPuYyNexH8uoPttUWERLAb",
  "key12": "HQjWrmmLDLyFCLVd8mtCBKkjKjuv8cxtT5hMdEMH8DXm8BvCVoE4Jnfkv4t6Wbrpnj7Nsxs4frSVmpfMTDCeigE",
  "key13": "3XxBGX2BNEd7dsJyD1gy4nVaAZbDcS61dKNmZPMvsajMJQJhz2HgLfJWxhcJsLKd61XzheUyAacpNCpNiC7XB9gm",
  "key14": "2PsNRPeHEytQ3oR2uU2WqEnWkVwJd7dFcsM8yc7DuaPRfWvKWM9zzsd58zyT6ehRTHb5vR6xGTGuPZbpeut6ZTka",
  "key15": "2TAkbJ5Tr9cnJD8bQsVmeAa93meNZKMULqW8i5hSwhb9WQZuZx6gm9R8FsdXk4n7me6GDJrPHhdWDJwZkWkrsLT1",
  "key16": "2P6xMeWMKf3smp33CMToSPnxfM26MsmuUoW28s75V8CeV7qwsEhfta2gGCfh3HvdD7ELmRTF4EE1F5qtudNs3aMG",
  "key17": "4Eg5x79JhSC1WJU9yhVnDHri5QLJfBZmpD9DSbavaQ3omjtaSSqFyWgfpYhVqwii3WEp2SmCmmjgc5qTQ8WPJkX2",
  "key18": "4SvSNaW4BWNxryUkbYwne2NpfkNuNAV1wt4RZ4wLFZfUV1Y9mAPRxVkepF9UdfDx3ptJKApvjT3X8Ncuyy1vXTE9",
  "key19": "4oAMgtbmWVCCccEmWfdsaQrrNeASajbhuvJxsLdEHL1tU7gm6xQZWThu2VBfctX5HKfGcdXN5izebummQ8heUBVe",
  "key20": "25VDbNhWhKh7XsfY78vAE6mmbXU2vqSKbVxyTmBuF6dGwFeruUHTy5zYN5Xweuv19JrHURofTJMUHE6ZaNteABNS",
  "key21": "5sVijNdpmYzFspNS5tLBXtSWQb3ZaNhtLC5Yxxc3mx5TmbV9z8S5NVswVC6Anv9dXWLqmAP6kZ1TV4FA2o3i3EiS",
  "key22": "5SbkKM1yMRuWP4moGTgLtJKEi1BfYnLtT5TA6WoUxqdSkQ2HjUK5zMMA33VR3DmhVqjRXSioYqAwPNwjPbPP25r6",
  "key23": "62juWkaywFrR4Xn52yAcCWSqWeGjZGReoJGakt2k9QSiGSCv6h9F7UTu6pLTq6EfL9YU5JLGW7TPCV5HWnGEHSPt",
  "key24": "4NAcxVrHX73pmNQbK1Fv8wXLFp6EJssezJX7KcYqxWRU4RpKwDsmWzkpNZ3VVjjDha5Lfvhpix4AuhRKowHKQDTW",
  "key25": "2yKmgjpF5UhwWhJ7TDN1TC31y3zAuLNpgg4cq7L1XAonCYr1dBTeAaQu4dFwBpUN4CKJaBjEycnq8AoesLurESeD",
  "key26": "5PebhMqghTDLAePmUR7fiA1desi23HmAi1oGtZ2eq5GCsNa1BvvybxX11zvgnQpESQxtN1eAijaTpL1gdsuHFbAZ",
  "key27": "5WmEQd5M7juUEGQpsyFZLSwu27GMygXr1oa7Js8p4AnwBUgH6rKrX8wN3MV3uBFtECFUP8rfcJsXfML6f7wD1W8F",
  "key28": "4rEAgA7DcGbmYYkDDmkVmj1eHSSzEyyAcgWPsXw3i75oBQgjecUktBva5ma4mtqFoDJ1cawZZpnc3K2HqLrNDUn9",
  "key29": "5uCAT6e1hVjYJM3cb4TfyyKNbBhsmfPM5bZMsepbWT18Un29kcSBzPpQbxR4eq6KbJFVz31h55AJtso5Qc7F7WCo",
  "key30": "yypfUxbW5bjxVqFWcLRMKcTAZZNtdsetERhZMX5ehpboEVnvrUsDooRf3VoVvi7MgmhUwdgCfVniHjLiAPD65mQ",
  "key31": "5wFCN8vwtDMHw2VWtmrj6Q6GM5QcYnBwfpkVzhJSJvQsGAa2BJwyEMLgrLD1T1qXa56im5KGgjLPsJvtNhkdzDdn",
  "key32": "3LppWzPe3v8ELQwmmWM72Rvmsp4b3n8DwnhoeLiFpQk373BDvNFdxTBwBcfGrLYyqmvt3gLYJoHghhEF6zZ1b86n",
  "key33": "42TnxeGeKJKgC3hzmH419cLAVq67ceCPmBQtkvkTBL26aMQKQ2mfbwuLp8mkLosUKYE95MC5K9BQLFo1qEBb13CY",
  "key34": "2RmmFAhGvg5N3ThYEbJd7Mr6qkUGQfQi3wqLJhE43pNsRs1uycHXBGbAKmrgch7ajfAuiTX3LtsZBDn1ayPiNpHx",
  "key35": "3F8wVGGctjQANg9pLwdoXAe9CPhyhreKeksoAPJUopyBSpgeHHnGrF3Tz4YSgQKgSsJ4Y5kpdGAGY2tMCJn7voUa",
  "key36": "vn6ZxdsnwSpB3WQRq9au9cNtEBUFD6tTUXQsHazqPgYAgPnqqjoXJqTNBnMDcd2Rq4u2Yq3s2ujEtmYDQ5BBf1o"
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
