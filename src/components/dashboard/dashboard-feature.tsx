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
    "5cs8yXvf7zsWYnPju82uUjD7hkQpDKmmh5cHbKZokoVNmMtiZgT8dB69SJEifTrMumPRqB5JCSsxnErbNspm5NM6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YPKQmGzWboLXRRt9ZaHCayg4NW2ZKDmninqxsQ85NG7XgnwzKJVqZ77GcqN2MjHRi3Bedg5TceDids4u6Hf4qaM",
  "key1": "37n8My5DyQT1miUyxt7aawkig71wC3HNgLuVwAUXqXijEqketEXsnCwj1BMVFawvCvpkUGPSBNUSTy8SRaPqLYJd",
  "key2": "2nZxo5LQ5a6pjSUY8Y5Ak7Br7MFUAtZhC8cJ9gZPey7ZrhRNHwMnjqh9quyWwTb6H4HFvwkkKrFiYj1nQuiFJzra",
  "key3": "5WiXLYG6C3ukb8a6Yrj4f3rECChUzZ67GncxEi6J1cn9Arumf9yaXTmb75nM5UHzH7kuTL6KqyTk7urTJ1eLCMzR",
  "key4": "3ae5z4nSfTM1Hx2eV23n5cbZAEJiFsG4L7jgkgYfgQ8CiauoLg1FayLZH9LMJTdEBRvPJRPt9xzG7RNovCGMuuqN",
  "key5": "5b3ioZBhri35mXFth7pYn8egaJ5ba6yqzbkX2BXeGtcYFdK1QoRTJQBpcJZscg6HRuz1HAqjNGBnFyHz8A84C2V6",
  "key6": "5Ez4xEjS7HD7uBPVTQP5DQnpxiTXau8TpH8iCjcTECtbf3fZ4urhuoVu7jZZsTnYZkGCxj8nrZMMzsDjfzHDvo3k",
  "key7": "yTJXEDJkJYL5XT5rxCTEV4tTUznEAqs9cFNferJ6xFq3DkKc5SSksAwAtotNWhCRCTty3REAo4H6RT1N8pu3XRD",
  "key8": "U4YkLHjp22J656FEyPovgg2qJUCM3LLTn8ypPGbKWJuM1svWfh6dfDe8NFU89FWAdwMkHPFTvBmK31Y1mR6nbCi",
  "key9": "24zHBvTNc62a8DJSYtthz7Qb9D6CzCceznsPChRWvDGbenFKKtUvCJ75RRaJJuaLCEcUZpnePhT4nAftdarFv7Y4",
  "key10": "41NgBLGgHu1Qg9HW9KKKxWGDkWsAUZkQS22FvoN7CD9qWH7RVupWqTCbjPKJdqFsZZG8WhaSapmRh2bXzzbgwiC9",
  "key11": "5NrMm9yU3d41Tr1bDV3r2eGDc3Phjjj3Bpu3JVDHYqNvDyisL2pmc5y3xS8GTNZiZdq2aSPkBWyitRN6KcXpdPSJ",
  "key12": "2wGkcTbfy1voocJpvAweJ8uMed1YvJFK8RtpNvt7ah3y6VVCCFYt3kc8U79xqUhuUpnYkQZztFKmUAxv5vCD2xJa",
  "key13": "4Wfb7zrH6obYN4pZChS6PirRh3qUTNkvQKLnNY1a7RYL5bZ78jz9WGG5ec1yUj8JARd4QRdHgM3zuGLAbiRqurni",
  "key14": "2Vn9tVfPSLCzxg3DthmijKQXK79CbMwFqMNSWWD2gc9BazAZpKFq6ZSrZEe3Y6q5f92jCPE1QVqtr7LkjHbzzkU8",
  "key15": "XcF1D2kd83B2UKQ9zUYagFg4engbDmii4SGxsLAtStG1Nh51dN6L61qP2h51SkJpkQBS5xvLJznP7UGPoHFj4PU",
  "key16": "2GEtTUPTEBUFgKjD8jW5hFTps4s96xgcCfD1UgvRx6zJTMDmPKbzikidWWZKFa37ep5YdRQSgDT4BW9d6vwzCkgy",
  "key17": "5PPGScyLnJtxaVDd3BLbuJdeZQdo6skrcP7mtraQ33DDSoRP5rL79Ck6CXwq4sH7bZzTTj2aQwvCwunC28m4sT6Z",
  "key18": "82n2M3UhQPgYSH2rNwRmVZrsLBU2UJYY7pgHSCvBoVA5HdvqATaMVwTsBNYnLNrFGzxp6GbDLfwJUEAWMXR8yfq",
  "key19": "5c8mVdQNZB7wWBm4jdLMkW8G57NGiUpNdB7VuqjT2GQswRQjq3MYEMqbQPgd83eGiHvZrHcF6Tcq5aUeowKVgFua",
  "key20": "4yGixjUTerUDBznEvV9wBWVdrZNNX8YVDU6B5E6VGMbfGGNzMDDMhfmj1c4uVFjE2yNpocMvDq7GkhfLUycsvvuJ",
  "key21": "2nJLpF3Dt6ZNfPZZuv2d9vUcpzpaVTA4iFbtzhWdqUKgv1yDdzvA1LfYf6Vq42Vy97tF7TXCQsWetit1cHzfiL2r",
  "key22": "jrByCjpJXKjnQyxSTxA4DSqNfAkJbGQWuhsAFvHkhqEyPuXe2H7UVL9ftmFoB7bBxuPsfCD4TE8oxyRKYZkNTNT",
  "key23": "5rXTMd8pHybfH43f62HLKDUMUqBceNEvU7MnxUdc57jiw5GjCssXeAVBFcubbup4DsFdUC6EfKmAPfNDrtGc9bmZ",
  "key24": "33qPhoSoniWV9Cnb2S2ybAAHs5Dr7RkbXwbDT6nseQWnvHFPPmxknr4Mh7Fr65fT8wbzVkT4p8V7BHfdSmTbycGk",
  "key25": "5zRcgAjCcQktogj1JxiCEruPTow1DPHryazXscbCqRWQQ1peFHJFXfjpVoUU72rkk438JcC1KiAqvnk934VPqUMV",
  "key26": "YsRyUFcehvJ5XvmTGV2SPwSgUcLcWyJaw3fkFNHWjiCSvGcAufmJKe5Lc6EUjCHtqv6Dof5DYoptdPJs15YRDPD",
  "key27": "3eG2GoDrULamv3o8aQSk5S2vVFTJCdVDGMTyFW1CLk7qnNCCvuPW4onj4c45QrvSMTh8NhtpLTM8Fc5G2zYNv6bf",
  "key28": "3dDTA2VbPkkkPhnhvWNAUfk34TJuBpckdxLAbnYCyEt5x8kmgYCrgDGUVG8Jsz1zWfY2HLSizsTXikCwNLppKmTV",
  "key29": "3GtD2t6jcXSdHWL9UGA5NDvbgt7Fi3LF3oBoU7oGvDARbicVY5EpwaENtWrTQF8KZNqrkjyAGCbU2vyGsYXt6M4b",
  "key30": "47r8roZPXF6zZigTMB5qr6eqyXBXazM99BUFf2SkqcoS8TaTWyBSDvwFepf1NP7M26mUceuVQQ63UiV5xC1QmK5C",
  "key31": "MP49Ww3KnVJos8Pu5CyZjeBN8paMUaNfs6tn1xFm1GuQ45pV5fu1V6mXfKKM4KtYJtZHVMhmrbrjGg8wHsk1TKn"
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
