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
    "5Va3sewqH6TZxRB5PRPa39trXQjVfZzKGaz2VQeYvq1auP2dpaLdJ4SGh9etrgKD7N8XyvxMAurReBaxvppWtJaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "432VNUvtZaWTKf77tzPAQFSZMhDPmcZrQhLSYZLJhzEckrRnvHvsrecQXkeDhxejZdfEH7g5c4bXGktKDtavASQ6",
  "key1": "5LNH4xyryLZakaPbo58rnd12o6SYpfi54jbhA3F9J44NsV68uMry3R9QnvZ1uqEoZVi7VNsrsfSYpHdNWrBwyYAf",
  "key2": "5DJwmEEF5SoPeevvnz4KwT52jwVwmsYraDzDt81HEAALbv3zMukH2z7V1pac8Sy4Wb2ATMmDssm4VTaPmpdtNkCp",
  "key3": "RxMMexs4hdHL3wGGmtVQNKqxQ9rGU9KxW3v6SgoTgbMqMkgxD3sAtbuWyGmzPcnFn6URvJWsiuzooob5vNrPwMU",
  "key4": "4aAZLpd6XE9Ud83aYyhgWGHMF7Qq9Qsabe2fLZFtDcDzQWxLoUjntLwdgHR45Q1yLcsndrfNms597a9Zc4zNpz48",
  "key5": "GPLTr49VqUEUUH2qfeAQXNGDT6q3yoDGyCDewFqNm8tr6T6VAeQhBkXZ1dxsDqxCGz2TN2hCiRqmjUYkNX3ee74",
  "key6": "2c7sfTakRJUwF9Cr8cA57sPVfGwZW3YQzPQitebxcYXT98EUiXjpYA3tyTXobtGektabSQvjBySUP5Zg1vQ14UCd",
  "key7": "4a6UA2GHyZzaqLza1Djn5755DRF9MjmBZ6tadmMxKmSfvQZQMJeNqVES9dme9itX86qanrNExzGGBjYjb6dTfRw9",
  "key8": "eE26dDd6ce2qAEFkBaw6dSQmrZU1yvG3sJCtwFudajCzuExmaUvHfDME8LBYJFaU2WczNR7WDoCr6Y9FyuKAUNn",
  "key9": "5Rr44QjjA6iyYeAVFm4sMDEnURRX3Ay1BNtCweSqmXeaAQsuLL5HhRC86ScRPBWa2Gd5SPuz8JBuX9UGLxdR2WyT",
  "key10": "66SLQg88oupMJESZt8vrpXtQdUHeU9kwXTy9HcsxwVfVcc9ZJfa4c9i2ERBQYmdqv5Kjwa1Schtjb57fXW7UreEZ",
  "key11": "4NMFTpZJGyYtUkRLXSVzsAAKGFbWKbY5K5yEnBNCidfm6LFb5rS3JXMi6DeWuJZj75z5TBbRUJ35UnfQvb1ciNjy",
  "key12": "2Y5HXKx1AVh8SUCwYrbeQ4v56L53N3sCXkKtxCsE61aXiYFq5ugDYpfw26KTk3kcvpRnm7Lhc6uk7kLAZdhdSarB",
  "key13": "58C9twLj5d1c77ygEEtJvxszChNcWh8o7PMSqozasPREngDXRWwk2MFTiX3eYdfLhSWDyvTFBHsGcb4b4bsmm9Dk",
  "key14": "35qJWM98UnWgP546iZZwonxJzdow2bVgd5YiVZi8njP8otsTjfko81VRaVnJsvpQ8byunNvUQ3KUnYuyrpYspE85",
  "key15": "54dHEujPvn3zTaFuP9TaCS2ZxWMUTBH7hpQuaRfNWUwKgCg19yC2daztdk5vb9rd8XWGiTm7drQq7srHSzuesbgR",
  "key16": "QamZ4hE2Ye5nwAdQeRRD1rwCdJgHfqpqLBFMyQNdANa4NYYQLredBgvChpSPNeSmyhrQq9d8hR21ka4s7wWHmbt",
  "key17": "4pT6ivyPrdPzJsXcyt35am5PwHjGP8VeRXHH57skhJaxHXC7S2sFqrHk1dReam5Ab63yCL6hyJKqAAJRNaMUvy2w",
  "key18": "484bhbyTEF81EXubE1KGRo8qMMqw9hSkfmTK9WwNy66tPDkCN61fiPUuT85QR5coLKzEThKmjdfu9WpCMXNBEwCw",
  "key19": "51WDzCKrbdCuFf1SeKyxVhdafnLvaKyuv8PNXw6nKhqUQnthdPCPDSzQ9qCnkhVznrTYFK9k91m4AndepwdJE24B",
  "key20": "PG6sxSAdszNFy7uHBfYgAKZsyHjpxNwbw2Nx3MiwNH39kSB7FYQPQGWAJkfBb8pZR921oHXjEgtuYD6RyYM86RM",
  "key21": "47dnqPBQkKFtAoy7McDTS1wPPW2DJihGKAxEavKZKgg6X2xZX7g2MejkmCHiT9Sh3RLTaEmBFPiThqkK3Kzx3ABX",
  "key22": "5apdzr8bsoi18hUs8BwBNg9w9L6WcgVdKTrYRJFHf4QtjzY7dq3g7E6DiTk2ZHjSukq3J6oCZKsLxzySdUVzfjsv",
  "key23": "4JbYFwFPwYEBtR2AZTzgjeizevvV3XDGAyJdfF98o9bJ2KPXASKftZ6UtR35tG54yi6WfiyYyHd8wLNS7MzwJv7G",
  "key24": "4xqtBDyLwg8SvpUpZPE7GQ1yfXCv8P8EXJmdCDng1VGwG6EWKQJ3ybccsHzJJavZ9WvtvJa1jA9AJsWhWo2mrs43",
  "key25": "8gXtaxF3w29baAjF6TzmQWtW8krMZ3v4dGYQJAUcCTY2KCuwXTDPikdMVfdMhHJRbe7AzJoTg73ZKR5ThMnnYiz"
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
