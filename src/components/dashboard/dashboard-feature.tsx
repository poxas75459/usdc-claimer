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
    "61fTdL2XMv4NSheLTDnR5ZggwVamc5o1TsJC8RxsqMzTDRHA8qhL3MTmjsGzLGMgdcu1uAqFn9wvGKQVmdPvC81d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gt271riPafvHqD2w6MSok67qZpw28voSVEePBND37xCwaTkaop4XFxQ682WX519DBKSpg2DzU565og81yYDcHLV",
  "key1": "h498pDMGDBGBdKsPGiwJGmZMBpxr7SKtLDP1dAmgb1JkP8U8igeqQ3DvyxY7Br2bKBLS1vY6GjvjWbcyQJP4ALm",
  "key2": "2Le7GwoHcbwcoBedVENnyHcaC213FL7Qhu3ZYyE5YJtG7hjvEJ7kwJaRDrrWiiRYBUKFcr2DAyaaq2hqrT5q5qq8",
  "key3": "B6Re3ErQPkL38ttS4PSXVBoMTwWfws2A47AZ47NRxA4uwfy1AEpcGb5SEavnVfnSic2aUyQTzAgWVF2tStWRVnk",
  "key4": "4D9syw5UBEhEWPdvZKQWon6BrUWbeWYKYfjTS7fW9Qnuchm4BpyrjJcSj3b3TU4rKrzLtaz1jWcz2rAwdbXSYpuT",
  "key5": "2jvQb9x9vca1r8N1oVGfZ3e3sqPcEQAMhat1S5F8c16SS9D3bNLCht2XCFyh9sFa8q4Caq8Uzye9mghfeDgK75ft",
  "key6": "2F4o9Z6ZZ89mrHSuZ18SsPPCiX1ymbSG6FQAxtU4wCXeNFzG6gaJYXq7qAsTNBF2KChYkjkSXiNQ7nsRn48roRqN",
  "key7": "3fkzbsadRhpcmiBDBsTatcd3NN4DPK3PHr1vdrdMQABvHdSqUydkp5ELGdXgchfkDXd1LgE6i75R8ZFwNHho661C",
  "key8": "4SDEcP4aS9EbpC8zu5fRj1s7Y1Uquz9K92VeS2uZ5FDJU3MqyRdG6G6XS4fX7QUGweTmDHZtQux5USpJAUsFFRAM",
  "key9": "y77PuY7SDHoAsFvQHRJG752zdbh3W2euyMUfgobzQEYGTLr3NJ6tj1V5j19zEZHPwEq7ktwRd26pN2GfJQUPoRu",
  "key10": "29KHj4VNKrFKVjfqT3cdTsUAh2AhJMBzSEVTuXNdNf49s4iSTv4uvP5MEWLDjjCKCREj4H2Wgm99fHyBE3yQ1KjQ",
  "key11": "5fPGvDyqKTc2P2bXKHkzn8jw7K1sBKoxcC1kNuiziTPAhpZfYettfq2FZrPCckDaYNkFNLkgJMt3udwdzJnXWv36",
  "key12": "33cnvHGxmBmhraProbs1sV1tZgZw5ndm6giCF7q86Tt9X21ezp2R6GxLFsBkAf3CrxNKXGSqNV4QqSNfxEk78by4",
  "key13": "2L5VtWjZJotMSP7jhZ1ejb2fq2dfmwrSWeWe69vuUQ1kGm1rcgfVVahS6awVCNs1UCSzeo36EQutwoSuftX8UkXs",
  "key14": "3LLYxrsTrGsSpZnRV4PxgAgPvygspe4d6m9xPjAvBEcsMV6L1VnFzQb8xank5A9aToR7Msbe7icWayHUh65quFGG",
  "key15": "hBrECXsQ8VS9mAKM6Vr4ZH5bwubG3dnigGXwhsmfqjFh8UXDyteey5JiVbniDF5dQDmM9CrLGY4qgznAvM1bRG3",
  "key16": "4Kk99pi81YNXweaHnN5xQYqSGsmhfAjZPDkjPUGdNFQkuKATeigHaUwSLdQGv4uSkahDRCRt66MDdeWWV92QoB4P",
  "key17": "G1Z1rmcJ3xFvAgywT2yn8gsf8YmTSxsiixq9yzeCsZgqQ4SAGsbjpXgVpUDAwCwG5LQat3Npi8wyGj9aiVXmdzL",
  "key18": "DA4LNK5Qtb9meQCeeCCa1aqFNY9f7phpyvSKegaE6kPJZMM2BTYoD7cL8Wub2a49sPV1aAmqHYggdUyxyxNffF4",
  "key19": "2p1eA5o5gGFMtyJj1QWeiVp4UftoiPYgj6xpFBnY7LqmxApFuvVfCreiesNiRwMwGLMNcLBHRW8GTYWXiPUxWP1b",
  "key20": "3ydbm4cj5CcM9JiAov9vg9h5GEazyAf6HHpVduGWNcogDfXJrkyPxXdeq2NTUQq4ecUEh7UfSYexS4peXZEEJisY",
  "key21": "5BoxLswwTTwkds322xgHyJmWvMvsVf8N8QyNdgBLTdKMcTzW34HxtuXLZJKmrYXGBjgZY1VjfzCVYesY5sksiD61",
  "key22": "2rhYZ7tHr126v4YETWwgnn64Bxu727X3h6NZKvyCpeS1nxynH6HfRmK9v9krb3b2GrB91QndKY2ce48GLGaj8Bsb",
  "key23": "39wWeMPFdG7xYrCyi6MNYnucKVChgSqxYgFbsdmFCsnTfiWCiuzXbquwgjuUAgSUU6j8E2dTJDXH9DACrruCc1tb",
  "key24": "558B1go8PcTAbhHGtsfUdANH1xVcRBbZxaAkDom9LmEbUWvg1PDELobaeHREtMJstQSb8SX5ugEmpYVkEjRhqVTN",
  "key25": "nXPiNhtXCf9Wzmg9m4wwqUyZU4wHWmqqyTp7rdExMKzhweyeC7JoKsCmeWps7RWs4DbFVhJshEbM2QCqsFh17DK",
  "key26": "433BqhHoB2mRsFNUP3vHBupBDs3mBb24tqVfAxjuiHFNGBYHUePYWa5Spt3A1RBwvLTALhgcwkf2HPBCuyhek9Fs",
  "key27": "5hetRisEBftgnEjb6qkde1f8qmLnPFugYbd1126DzK3JrtjfiaFJmXn5QbQsdD6UmzWj2BBwwBFUNFU9DamqQM6p",
  "key28": "tQV27P7UuokXHJ5fnyy4MkgomH8YB2Cw5S8dGju2ecEGykQyuRzBrLE8rkoTJ6WgwNzKhXdHjJxncodaP3kiGrZ",
  "key29": "2hKHvZRrzJ8U7Jn1DLV9eJm3VDTwT16fS7SGs7jidHotB4TLuQHHh4M8qijisdUCodbKkJutf9x2exuuxbp5DFJ6",
  "key30": "3Xbe8H7Wx3JSskuVFKpaFT9FWejUYXNSgV92TzJRkGbP5yXWwwjWMGhyW2GkorvGDSQPLFVn3SZDv5W9oHqCzQuB",
  "key31": "47LAk75zAWMiNhqW1z2RkY3HrEycPxsfUMEU6CV4n91vTk6Lsfid9Q8AZrafrz55LsdWyyV6uZshEV72q8CbZePD",
  "key32": "66eGRKjZDA5ZgCBSNuXoGfYqo8bR3MeaLqHGqef2nEmfoAedY2SKRWh4kPd2tQmxmA2MpSz7ahL4zqaqvoSKGqKm",
  "key33": "4y4GjBGx7jtzHnjnSFXuiY75jm4ecwCaGAA3mMLeKYBVn9vdUb4PrmYXiCguSAV5oci2BNDrpAMWgXLSZLWxrJBb",
  "key34": "5qUetKDgVECkYASbxy2MWF65sHzJn5gyBEV3MsPvwAUhwMKdjFCM8UrGMfzkzdx2LVAEeUe2CcSYXir4a8kEDX7Q",
  "key35": "tNQAruLCbHNEJX4gmt12w9XJRk2bQN4VCXKj7yq2T1FKsBNcJksKqEcaL6T53raoSWFGvaYPHyz9PmJ3NY9gde9"
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
