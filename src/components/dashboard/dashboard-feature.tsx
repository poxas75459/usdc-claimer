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
    "42ePwMKYPArdLyRSqk8A578tpvq9nx5jwDbvUpoUemxEDGSZdWRbEGSQJ4YY4raUK3ksnNCciRKnXaUeeqS2f93T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCKusUYsb4m28Hd4Yw8KvAXH8hEYiXPuwgFUSxGJWpauqsNpu8VA3BLeM6ibBxumUj1GeaTx7UUw4XtA1DqTH1e",
  "key1": "3zCtC5w983apRfVRg5ASNwuDz6L2StnvB44bscHuH7XgmwSoHUDgCLP8wXTL8PG7Z3bJmqjZvLt6PuvUXS556MxL",
  "key2": "4vpsWiWRgvPWSk2vot5n7t581m1Xib7ZM9J9V3J4Ey9ff3hWsHx3cFA3DQRfPH72yTK5xVsHJ3kgYPJyoRyfVsmF",
  "key3": "52okW5VKWAm3z7iw24b82WGSX62W3xQtDB2ciaB7QPg6rsmTVFxAVuWrppdAPDurErt6gCJQoFKc6RnUtonqxmfR",
  "key4": "4gpc5FBL8oUdexKxLqpEaoT2LNdA6nUgKzdHhd7SX6zCD1UanRaWhuuTafPixXNhLsoGeCJsmBQHAwGi56m48NQV",
  "key5": "hdbTirW2NwjQkPC87VcU7dwtrmsMWbJ71e9PQabWMoWRF6MJUMuxfTHeTEUWdtMfSA1BoWq7YeBJiABuAu8zHrh",
  "key6": "3CcwnmTEePbmj2XsF2AnnG6PQ9jSmEUvh4PSKAhUZzNFb9MDsgLB7kmQVHVh2Fjo93H5bDfVnWbNY5AQUT4NmWJe",
  "key7": "Zy8znmdvYixASVnQzDTyiqUDEpV2RRbc9LtZQa2h8og9UWJKNx8UPUu4Ezju738ExV23ZC6QR7VeWj2hCxkaXAy",
  "key8": "5DS5EfNy68PxmHMVypguTHWxKTR77Gui78EAZhuEJg6oP9n7SN4SExZLeuqo3nj9gCUBnnQLKDBPxVP4QkhPTKzP",
  "key9": "4M96dmMJugyzHDWmsY87WcHBqFrxcRMpoWsjoWgyqECjgn9Gu64We6FwGgsGNsJqkL4x2x74efDDBj7PQuLqhjor",
  "key10": "3fnugtxJ3riGeycW8vanBGY9xmb1kaeuBAghnUApUbAk48rF7ScY8cC8acEUjohdAV88jFdZwbMxafqyq19jHWNN",
  "key11": "4mrwAardNzGEQgTLpn1r3VGyMR3t8Qub7FMKzJHqBR9PM1HbgS7mL1nchQ7nTjQowjtCpY3ZQbVrWcShXqA9NA5s",
  "key12": "55MDHVfxmVLVLUH5LRgsDvSdp6hXwhF2M71d7dQrcU634bQPjKc85vWn8MekZysUhiiwu1NNBsL7KMPFqSBgxzGw",
  "key13": "4trcDmWUskfQGKcLyeqMH1QBP5swgXGZtii29tULCpwyALjjqAfWd4FwjMVByb9g6PRHnzjUTmwubkvfBdhuKR5v",
  "key14": "jBTsmLxpcgjehWqyWqREdi9TyPYXn7UrUgyuS7pd7g7TupgWB7BqrWbCu1ue8oQZxyGEXe21Qg4uptdkQhooWoV",
  "key15": "bNYLYab15tLsZxGBnftxC6EQ6PoeT84iLTauDDi3mzLUWjYGdkmowcPUogm7roDxgxHX6vQwAKLVQDTTRj9EgEw",
  "key16": "4y5ezTGXoniCLXov5kXKNQ8ZcZthVgCoct5FfzK5gfYQBuiQgn1MjT4i4YyDta2WWsvkqBxqwXyKbWU4RxhA2xGu",
  "key17": "fqKATW6MDM7owq3bktp1JyBARenbPXPtz3AzH5YgEZ495YxvoWDnjkVbrSVH69kgyM4yA4JBTD7jsnrLYu5H7tG",
  "key18": "2CD4XPjZ4MXqWBTooS35dSZSaXuXXzYHxmdMSvr9yZBzFqRstgSjyDdhKedJEmdPL84a5BAtiwatjRqyGjW7WjNb",
  "key19": "5B7NknqCxiDaF3tvQyryY9VKBTA1gQ53qo9WnCyx2WAYBS2VSk4nPqjrTSiiiQmNpJQHvQZ56TkF1vR9nhfLxeM6",
  "key20": "Kgz4Lr2LiNJp7Pw5orSk4ekBbsR7BU2KV3WY3dKH26VpHrmvcWfKuy9gtfBFfaU12cTFEHX74qMmwBk3frU4hC9",
  "key21": "5gRZRNEcbeNA57jXy3r9wmuijDn8mHiCpSMhVGxAcMQJffcgRAGAQFJBbcYr6TYEkrx6h3Twqvs2AeUm8e6dR1VE",
  "key22": "4gNHJoQMcpGvSs3aMNGb239PYFWRiwCSCQbmU1WYG1oNmZ8AL5N4fwLTkkUKTiJmasSTV6F6hfqozygymn4GRYtg",
  "key23": "4CxVhjwMyDseuyEohcWLnVJ91wf1xgCVywaJazd7KiMbZ6bnJSkLGoa5dKG7oV9fPMQUBkge2VVgnBrqUaz4QmJp",
  "key24": "2aDaBxykcF78dvYJNJovtxyMq2KRoUmnAPaxoUyGuWXVFpssnBR2LwE2zVhDB4TaELHh5ot5HyHbbWj6YMZXwXST",
  "key25": "3KDyqjHin8ygp4sJUTBme6RcgbRvuXNq9HngFuUca4TCTaPrtCBHY61YBPq1paabU7TohH2WtKGNBhhSHEMuo8e1",
  "key26": "yCBWETdJEHxstkcAoYJ7tvLgazW4Pn5tVV1uKyAbzQZpdwRhNTCEG2oRaQ4SPvSnvH3EkZspS6egxP7zeNBF15Q",
  "key27": "38xGnkAsLHEmjgcKqoAh7DEZCmPH9XGaaYTKPb7bQHYx1KTUkfnUkK3f5xPWmnCZDqX9JdABS89ePt5PyaqZMM5Y"
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
