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
    "3S3TiTDYPq1QYUPCx5ijyMDWtWPcq2sw1oBJVEEn5RRpqt4ZYD6rK5fNuNZSneb6x8eJpY4QtjtucLP81znRhCi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B76dMJ8we2HrhmpJPGUryV7e1ubV2XePqcQZFmEujMMaobB9xXWHeVTqcLHGycRZbEE4QnBq6aknmedWNNeSSqg",
  "key1": "4AP3DWpTrSonsEnGpgp2ZfwMLTG8yquudSgs4XTyD4v5zwUmvyBQaXGRTtvFKoM5WmcvM7bUTaSAUPduwHosws4U",
  "key2": "na9Rb7nb4SVerDKJ3GinjxDXw3oJLJEdYLva8C4bRuyJCMFidhuA41Hnm1n4wYSRK1fFkLy5h9uE8oQq8YQEDHq",
  "key3": "4imzfgi2oupRdrNTg2ZAjiV43wsYAgEHE7wbfwHUDNjJ22EmdsUrn3VgoQ1Hcc3Gdw1LATVQCm1bGE64uEjrRfXX",
  "key4": "4DLSVam1QmoFJBR6CQs2cV839JodbNcG3Dix72SbThxQK1tUq5QwjzfFmauqvKLMAxpsM9uXt2t4ZvK8NzQCqxqF",
  "key5": "25C4baSQeJuAACAWrQoytTL6jTKsGLombdmUzK3iaJnqzszjNPZFhdJFntiaTJFqVy35sT39H9nX3ahetxSBvGLA",
  "key6": "D4Bsc1bbBDLyL2AMPKVuAyjc5zfWQY3oSnLDUZ7Ch9a6142ZZqSxaSChbcWySwyNCwW6V953FvkN1uX9rQDCoxG",
  "key7": "5aidbW1kVotcy5qKNyZHuyWaxx2BE1wvSoi8NoXuxyyhb4xecSQp2GHmtvPxzsm5FLQi5ohD4BTGqx8JR3mQH1uf",
  "key8": "P3ByUdtTUJRiYSHfRnBeCGWcahYF49QUNAxSsmDgsKALXjFvTnYtohprin1vqWMgJLrKcHEVqvn5qCiWwYUQXdc",
  "key9": "36xexFSvnffBgeSWCWAUgeA3e4xuYqFhGLF4MHKwCFKeLQNrVAjPSejDXhtuuLBtocSNB7Zea8CZQiWqiUf5ce7i",
  "key10": "4R2bHeszcFfhVCuLX9UA5JuG8SSzodXMmXq7k93AKuHzhRenwpq6MEe3i7hGyDPgDrBZssEzBhtJkcW29bk7GmwX",
  "key11": "2x2myYoghaX3CwRbLiUnoEZHMqXSkovBSFgtQkGmWx7cb8o4S5uqmiZZPKTmTt3rF1MADbNLpFKH1HzMgf7HHkbU",
  "key12": "4f2CnzMtm1QpH82bPS1BUkbo7Rh1UQDzBBmvJzabWDPvPkWKcWAToLZTRcnxZdSSCmQnEzJnZLz2bL4kXQQQpAax",
  "key13": "6NABwvMbHj1ueexUdUMeSzzjqAe5VCQ8Cn9hWxwtH7Yz6mbTP3b7FWvfzbGS6x9c8EmG8ixh8EARM9eKexxfrav",
  "key14": "4zc2MBY3w7JWcRZivvhSDTDJh1ETec1D19Ppr6f9SGCDnh964txM922WMDGLTo8UJ9DSiimMoBtGU6eASPWoJaVQ",
  "key15": "4oYFo9ThTnCzh6sErMqr7BGUHqfwY97GobVTszLxJoBhd7ChyxYjkHYEF63kHB7A3L2Gw6yy8poAdWcincpHWzWB",
  "key16": "25eK15jqpF7GNHPkMVn21wViMT8uZagjGwmFpXf1YEdX3FoJVofS3QhkE7TD7AEzNqWWRCFQEuV4rePgsK7Se6v3",
  "key17": "5zPE7Q2F8ENfp4afZsMHwoMNGbyhsCn1ZjJRaU7cwuG9CeKPRQANAMkmY2TKPN1joWwgrBpHQHnw2hnirckoazh",
  "key18": "5JPtJVucDa8kJ6EahpcsXnc4AhzrVsrqHcHd1UMSZ2VCbJ2ht2tc6w8kBj6v1hjp9bbRqZJ584KaiNbnz2HX96zC",
  "key19": "3e4c4KN2W8yT8sC471rmjTng4Ca1bapZT2E32jnyk8JN2DzhRMaB34RBtWXgLkPWQmsDrwwiH3A1wx61kRwkSjKz",
  "key20": "4jCVTxwYc1qifgKjc9FBcCTMUbRk4k2gD77QJbztDwi14HTqASvG4S3fKve71To4XhB5j5NSjdUywaV1tYKJwyni",
  "key21": "3uWucDKKfbFhbt89W4MEk2Twexi8wqALq3pXn2rqnNzKaHKaiJifaJ6cbA3iwowGXeNnV11SwGvSWrMLCkEPiX3n",
  "key22": "37Y9LYkEtPGBUF4pSufvQhyJk7cJqdLfu9HaRQfNPDENm1DCT25mRf6J1jhdyKHwLqswQR69eSSscr1p7bGfXJv7",
  "key23": "2a8J44QWSJLujBCzqmxCZyakqVwz8DEG8kVjRzzkDhE68ZtX7nowEAy27tnp2o6MPWcsnKUkiVySH9rjPD5XVuCm",
  "key24": "hX4iFVKRng9gL3B14noHKEpjhGV4gDw5nUqnmN843PiK4oKrvTdi6ivLge7pWPWw29spHqbMUZBKbba6pyTnsiq",
  "key25": "ALTszvnFp33wEcP9uFJPRgkhf7QncQWrrwnBAz99a4CVXYUMEU36JBqkfsNi95SmWWvP5PzSvx2G6MSSUzzrvLu",
  "key26": "2MmeG9KThNHEV3ShSVSWVNvNEynh2nvW28TDo6Ep4nYuk8e91NBgEqD5vusSZ7Evs7S7gfRcswojtTWjdHhwbjXp",
  "key27": "63fS4SEQHadqj9UBtbFjGCkQSRXej1d3FeYUG9StiwZ51VqbWb5ouQKWuj7ejowD43oVNgfb19TdEUmV2VyHNVY3",
  "key28": "2CMQrrqff5JBNDPxHf26QLVqu4WbEC4wcXeZSQX9zYkB82MXCobEMDvkREz2LzTNouDkYmzdde19ZYpxemTS6y2f",
  "key29": "75AV9uiwR33Q9n3eonwJhQnnNENwubJbT9EJXXQMqAiYftcevCZNYviqqosYn7vJ6NYtu8gshhJBuSBfWCJLLE1",
  "key30": "3Vvozv9mVn7ACdYYb8gx4cEzrPva7UhJK13DGFTbp99ob7DgS9vehuVwuw1nzafB2Ge6tQ7R4LDCxt7WrJWf34Ts",
  "key31": "5A9mSbLh7mmsnVQKw5sANnSqBu8iAkx2SwMpmMJyBvG7G1vtCJSPL8Bd7hsv2bA38GuNnnZjjF7AcrVDHmTpM9s5",
  "key32": "2RBy7imrketQydtFSphJ8NC8EFfcGMV5KMepB31tXcrJcuvMUXWPX4dLQboEJnDvuDBkNFAht7NBgtNgLQczWKto",
  "key33": "xdvSMn66jM5hqW2GmdcnJkHnb9MBYj2feWAcb3iyfv1P2b4KheCX77oMAgJ9t1Y1ZCAKWA4F6wfjVbbnWtHzFeY"
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
