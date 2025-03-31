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
    "3EXUfdDKUek3uFAgPrctGabY93zSnuUfhxC8sguiiX7zdYoRvtJSvfEydbC4xr86Nj21XEhf3LhtRNPU87b1SMgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "579KsTXQ2pHZBCo2CeydkATwLkvzTh3nWjqSoUaowK1sdqUbLqEWZ5jwA6e5kDd7B6CnhoPAjPQtNRi1GW3AEAdh",
  "key1": "2LvqF2FoEKuc5V4UkzzmuC3xtqnv8HwRsf4uEvdQs5oRDV8RQqtPXfGpcUu9KF6BXhgcHoCYQ5f7R7DoUGz73gvS",
  "key2": "5muP3EvviZuTw8MrhEEBNWH3CMBnymcoygSyqWmtqAcVfjRJuH96Kc5YHeuyw8n2aS3Gza7JYrcvRtEPpsgTDJaA",
  "key3": "3LVgBAjxkTg4VSURoWfhA7wbzY5Updt1tM5CouL2of7Po2io4bMKYWCZwVEzYsA1mKyAL5DTkhGCinBVEb7u11WC",
  "key4": "21oofq3KRigjk7ZSq1cNpSn1YGa362Uz7RbnfCaAXapNY1LVbwNAX2p6L6qgnu1c8Vnh7F6VRpXbdMEBMWGxBCRD",
  "key5": "4jPLCp1d5U1QiSGmVCvf63GCjKgAyeoe6Tz8ScBQRS4q16Cv52osPGXMvejSpQbcHUAiWVwpoPgGH1M2t7cL5DaP",
  "key6": "uWZdgyve1HChZiEHNhUQn8y1xyrn9V15x8y7jNhGa2epNyXTxpmrBzsCdE4CxiFCLekpg5yCmzdHZAJGCqZmzch",
  "key7": "3SAosxb6rehD3qoUUMbC8YbeCd4gpsEFrMmaor9Nj8ikCR2EgPmABKWeAcnvtgENpUija69nbGZje5cryzRNfGZb",
  "key8": "4pM8JP9v7ZdYZ9BcKzR7L5WtKhCvjF1EmcwQFLa8obQJwFa7RrmcJzfNAka7x3HTanc9NMobW9DmxEjmmkfgCz5b",
  "key9": "Vzt76VJ9eev8CzPPzdxiA4T2h8qqTigKEjwxtCV6eyq1nz4nFCqZjfigBEoFFfYEsufDtrVMidsaAkHioo3YtxC",
  "key10": "hu5Jkbi1SxgX7TTWFSrZd5A7n714ZuHyaPcBmJ1xae95g26KAffYAdoiuQS6sREs7R8nRjykGYymy3mePneto9t",
  "key11": "32AtRLovtWUNDJekP6sciKmNR3UhSPy3Uk4efs5DGsxzKkgJw88NbVzozbeNSdPRPb5XAoHVtt1TcMr83oDK4Bck",
  "key12": "4WQYABoh52dhxhwyD7XuAiXoDErWBVvfUCVSX3AQwSdaxBFXgj1AaTdnwb49et5YJWT9KNMhjWDKjMPB2fsFhjV2",
  "key13": "4dXvSu5MgaKVnUSkSix1esZ4cT7R82RQS2Ky9vHiZSzShTmDKRegB3SazNWNtLto6GmnrffRNV8mgUu95Ri9JkBQ",
  "key14": "2K2A83hVAuYMkjxxRQeh6NvZE9oo9rf18oHtuahuJ8qvgPVCMSbVE3Si6WhmB2pMqUB3aPAa39ZaSASLwt82isPL",
  "key15": "666rGwn1HAiB29esPB2tYiJoTTP7BQ9Ue4HW2BMzXo7azQyb88DJc7MtVupfWkcJve5oYQrNwSTFqRAudPhEEH3Z",
  "key16": "5j3AmhD7NWErxW6DjZpc6WGf8LyubsgQ49gbuzATh1RMEckntEp5Sr7hjoJu3FrMd96GVJD3gaebRXsYrq2QEC7L",
  "key17": "5SJqAZBh9mX1rhCogGX1rruoFDV6CmDvQeVyeSSYmAcrKBszC6raPJfRFiArxp3b9Pj9Y55x97HY5TSw8arThRxb",
  "key18": "iiyKHRJ9dAEXjub5bUHbFUVhFho9oWMXiPvEY9gpw7nvM9Zsm6xHEv8HW9PjB4CSswiZddJX5hkQ3bignbDVHuh",
  "key19": "66zQ9dQgw4PZuoDuhhprD6Udo9MUKsQeUSYmqQfFjW2z4kDrenf2FdvdvpS4R9Nk1iafiAhqrzJvqVUen9sJAby3",
  "key20": "5Pk2XTasnqKjjcLCk3rAQm9MVS1m73az361aVK5f7pbLSZymFLVKJhCjRHPsbC1joHzdkkE6bXZyziMYnKgdR2X6",
  "key21": "QiYGqECokKcybUmScLwwurgAjamJVJbqqq7kVVXtU2JHGYV6AjH17Dak7BLPEVn1VnRjARnZpcuqG2vAHon9Nc6",
  "key22": "2Wu2nzCqbaa35cw2YbcfFpbMwZmmFhDRHrCQpZ3ekActGfdU15f3TjjAYCAcHbdACgUB1cY2QFKPnzUGvTDZNHCj",
  "key23": "Pmuegzt476fwHMW1BYsJ3sG6NSCPCBZPRno1fdepaxB77y8YJJhvPpjYxjne8KyHY65xiStfwxX4k5dVHM1damX",
  "key24": "63YZtVCMAAihMbYdmx7GELWeEAnVJe7W6bgYiMSwxsnq3voi3qQW2ZE6oSrDyzGXSQ9JvBQikNcHf3ud8s5CiiLV",
  "key25": "4cPniLSQwEW8QyDQRUV6MfggXYY5PXLkrypk77ZSN6UzA7q4zTiWW17Rc4wWkjqofP8JjR5szWiPABM6TomUmE3y",
  "key26": "2rKPRzHu6bcTstUhhP6q1szPp5Q1Kb37tjSdW9NsHugQz76ZiiwLBhH6GV2AthGBhaRJB7pAqgVBFL7g61YeJLi6",
  "key27": "2gH7Y2X2d68Sw4JtpR1UdEsg9ptPDuJCVjvbyn9fzGsWEBHHurjQWo8X9QsCh96gWNC6FQGxQZinnaLWcxwvLawY"
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
