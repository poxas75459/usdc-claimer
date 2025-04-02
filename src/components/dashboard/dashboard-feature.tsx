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
    "AmBgrSExLWGE32vfRfeFwWc128ge4r1hQRb25brVJYyDR7GjMWgQqnokvmavAQDHJqF1FyBET3EWKVmkRDv2qb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66AhwYTaaPZr3UoFt3JZTKMRaFStJEjk6Ygsc5hgL1LuYyPvZUtDzYsLKCgrHA1vP4aUpU4Qp1uL4ko6ovb9h7R4",
  "key1": "2Kpj8HXHaxYx8WRWiw11aLV9PEDqS5sXNBWQYPnkBm7rgqHEYifw8MWbNF3u4hC3Hn8VoCw8P7iknQdMBC69fg6i",
  "key2": "4SexUjxhfeyd4mQUjTkzt4SSh4DK7LpcHTYpRGkL2M2qKAnVSMgphN5os5Nuk4CzBCg7vWURuLJ8nRwYeqNJRCJ",
  "key3": "4Jdf1xiR42RUGFkCbD7sxUQnX3G1DHCm9w35F6H59EXnQ4PbYNdqFoA1FsSeAsUpzYYKh9SgBmyBvz1Q7Z2cdURb",
  "key4": "2zU7Hxk65628BUhVdLv3CvWGJ83fcAPCK1J3utXT1mFq511aiHz2jEJNNuRXS95UJeQ8SHKHM9Udm1MtjpMRTFFL",
  "key5": "23dZNicajxyVqzRi6tD2FXnuAkboK3XnW3g3g9iDx5hBxry4axGRzy2ssjSZY5Ezo3Vsq1Q2bEtXBMPGQ9rsoyZe",
  "key6": "4yXj1wx1sXhDPnJme7kNdHxQ2QcSAFShNxEyfXvJ6e5vegq9ofAquWyeoiLPCb9Etq2Q96sQYLQyVxDQHMi8MdgJ",
  "key7": "2hQSScxDRe92hoSuGjSXWP5vN5gZdvdcFGRzyxL2M1y8p9uCCUymFiwNMEvoLq4cqx73xPV3XaqqwvC8m27EwHEt",
  "key8": "4hrACYzDTrinXog8jN76Vt3mVNRyXGjUYNjj3kpYBkdcSCwgRpJ33ALJz9N1S2tKFmEMK2ba6PJqDgmFMCqage28",
  "key9": "2NJDHAUmM6iXxpoU8WtFCXz2ooe46aDR7qh78hdsDw4sLAAG5L3nLWPdA4pFVFQSoNk7A3WsPLKqfJ2pFqrhAbMq",
  "key10": "2m6yygy4GjLyEEex9NirDkVytb1zhnk9AtBHyRaP9nsJxv8srTTADysre4kvTBPG9dWozkfkbTe79NaRFkXmMviE",
  "key11": "44P9yHyL6buA1JS4E3iGfgE5Z1ieRPwCTNuXTS52C97BDvv4SFpSRtDTo56G668uS39KUq7iNWJ5xvbs11119ZPq",
  "key12": "2bFzdBXyF6EUUwN9hFySQM6YiHheqAqoE7bjDC15joSLSMXuEbFZihz6TSD22WSwShQgofXGLQKY4KQfy5aw1ssL",
  "key13": "2fNiSYdGBH1djXZTqFat933DwU5JSSo76WzR6WvwKMN8rXUGf591XziF91HEAm3vXFNBBcq1YBau32BqPXDPonvS",
  "key14": "abd8P1g5pQ7pYYNPadYKW9wn7GAdmkLRHC7zjQTieGhuvYDmT2YTGHADffUzDCtcjnA7ey5ekRJ7AhaBbA7P7vv",
  "key15": "4YnvvYNwHom1CoJb8tLH7Zw1z8TyJ1wDYG14gXiPFLTdNHuhnkHBjjFpaV19DsRGm6gDddMELDnb9NQNARiKtHwB",
  "key16": "5LzSZRxcaNgcYWp3zcwdFK3bVuriBXztMr6dRdvznNtmCtNh5EAMKC941SwpPELoqghgXrRGm7CGmnbPXXp9dh7Z",
  "key17": "4WEmUeLsHM1ituXH7e17VkJW8ESv3jHWkDp6SzJ2qqQpChqokxVyi4ehu4J17fTKnEWTDwYn3uyxRRwPoQ1xrZGL",
  "key18": "4Qyftr4gPKu1W76H7tcVQ5XEALggk8UAMBeiV8caV78kcYjFTc5jtP6XxLufgH1ziJZH4zS8nx4D8bL7hRF3xgRE",
  "key19": "ejPhZmu5bBGnFrFtqkY8A5w1iTeDPk6wrgA2nRn29sRZ3hK1pEHgVnQVQbCZdhPZmw3ydvU2QhM24sXTsmqoz9u",
  "key20": "2hTnSrRBwHZsyC7fE54E2brUmCdVpeMi9ngEVAs7ZXr79S3epx69ehnjjdYf3y1VwgkMhbnEa1KkHqi58hYHrERK",
  "key21": "2jcFxfQZtXZjsXHdCzSDE65QhGRzToJyJqis5PpqBKagLRuVjje5aVUyon5XzDrDyqZgagRdX9NkQ7GuDtnR9VQH",
  "key22": "GeXjyGJ19KbZ1czwHBecRAL5QLdhp7NhdEnQxntuFBnrWiSKva4JqQD2YDsT5iEgd4nJr92jp7J7PaLbF886ELA",
  "key23": "5Qxdo4Cz3zCcEYvW1bAAUWposKae1cemxi5TWCvhVmgc4W1K6Fbri3DvHugV1hJxH3Fm7J1KPWNjgwK9k6rHKCcp",
  "key24": "3Xpx9QmYZBiCBmfrSKxUJwzi8P4yDSkirS66bSbejv2YW3bpBx47aVHofTHxHE3wAjEhbKexPuwTho8KfUY7zaQ9",
  "key25": "3gkYXSsFhqo6LZTn7VdaFWwsr3Ph7JsNjhLffpL9iVLp1Dvsdm772eSVfwouD897g9MS1Fizgryd9wBymWJR2y6z"
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
