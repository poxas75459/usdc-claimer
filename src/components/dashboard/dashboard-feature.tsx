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
    "2pSqiUfggopt3dj66BtLyfZJseDAFeybjQWpRdvMhge6oereqA8yzq9WrnwZiRNKiUeNtyz5HegPWSDwpG4iWHgC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tNKPouDiJEpmNvkKWyBWqQ7Vd9nCmPc9i2PuCnGLFGZe7qcr9Y3eEAM3FUyrhzGsCXTSFNedCiaqCXAHHW3YkxF",
  "key1": "qYS7q8QtRbjNuTFjhmymtixUK3uewMN9m2VAWSgHzAi7rScX56qTBx5ZJ4T8hshBCBQVaVqu2ZNU6x6m3qqjKzK",
  "key2": "tf1AR5DDnUDoLdTSv9vvjjMnwEiaFad4LPuFpzt22evBUB358TT6Wx7Dz5jE84qusjDf8onSjndtJA5DzKaNRnU",
  "key3": "3ZMFd35n54pyEREetgLZ9u3Wd7xaoghEqNDLZVxkCVQusXryhs3KvZsWnqdwubnctDGoaJpfTL52X6m7GmtYzCWC",
  "key4": "46WNTt9DSKRLXeZM6SWJyVES7QY4dKGWupPLpXVkg4zHLw1yL9zDkg3vD1BcX75PoPY5LaNMbcQhAKAeKTULAVJ8",
  "key5": "5FKhQYY1VYuY9KeQugu1sQZVnH9RE4Bp8FbkfvD4D7w2LenjvxTezfrFWTmD7kL2ntD14hxTsFSszxmn18Qk28cg",
  "key6": "mKW6ipSe3EM7fuBcSMy8p7ThnAqDu5QvbwxG1HDpvNu28yMcHSuExc3bCLY3cnxt5wWqGVD4tUZ8TNkyH9pu4Li",
  "key7": "3YHbKCqezTrjqxgTeat8J8ouWFcNQ6AKsafrS7wALapMDas6s2fWeCcrg6HBBkXb1BkpWvuSpxi4utn6wpoaDveo",
  "key8": "5oZSoRf2raVpf13mKDdhkZzyg48ajochBrjzce9CPhhNNiT9cDT25WmXT2fFDZn1qduZQHxYrg83szPmvjYsXs8A",
  "key9": "2t4EiXo22mSQnCN7W7X6iTUoonZ9bWSyLjAUbNosNuikR8L4Y318JQPjiWint4vjnWguX4ZKBrMmacuTeEwZFoQf",
  "key10": "2PrmW9cY3czY4G7ohzsXM2FaCKK5axPY1qZwso7XuZcwuixiRdpxuqnaa8Nzye2UwRNt1t1vmfeuNYJQrXhanxD6",
  "key11": "fQ9eZznJzdvqukFQqewaH2apwREPYcZVTeoFVekmgbs57AV2PgphWeLAEho7VTpU5ytLF7JdmXbSRbhJivg4SsD",
  "key12": "4hfX7CVyLCay7iLcswSTCLicvWJvxGLgZK8Y8hFtCwo2H7fJvshEDkEwGdMnwJH8139nkqdawKgPkauvJ9v1Sand",
  "key13": "DP7zD5bB67Y1arbVAXprLkiey55LLpcCTUMdrbvPQWAMaf41WVDbYvjpaLEbTD1VH6eRSvTvKZKns1YisjfnJDx",
  "key14": "3pvmB6WwPTAyW4fbpLMmPuZtgvRzxxUMp3ye8VYdUoK5HNUjRa1MAB6P9m2xeF8zAFtnBCAwk7Nc3uL7WfUyuUhj",
  "key15": "2w1rkJ8zkTTdNxqxnjZwKtcoWFPmCyuAcnN45M8U2T51weaZkLe1oERpdCWh8uR6EER6CzAhLUn2g2PcG6CJFREB",
  "key16": "4wj1orTgGZsRLheWwvkVw1AbJMGSgh3ioWzJWnLiKH96XyfTPd3zpSVkLEShRq6fBdzt2sbyDfcmjLGdAtUKRfCT",
  "key17": "3EmSh9PD2gMYxQUX4rdNznSTok2FB5ccUWKbtFmbMkpH3g7FXmv9FEyzxUZK7EFw3msA3Mhjkh4ZGXJAafjeTLPX",
  "key18": "4jfug4QQ9u9aL6td4XTDsiRwywMu7rAqwh3An9X6nPnV1BNeh3TaBGCfxx6JSDBwdwLeFU7xNN5biUwThJJQCn39",
  "key19": "34NnRfWBoEGezNkQaXaqZ8A7JXLFjp3keDkeVteqxQX5K5pMTy3AZn4ZsveuUgzATRbYXKcCQwX5ntWKVV5h82ru",
  "key20": "4smqcToWNKofuCoTZjyzmrWgUVgMZfKxhuCuLCq2vsx4wYuC9WQZSMyqok1oJT9uLmBBVc1PwV36KQcD9cb5eGcX",
  "key21": "2UuboN6eG3aqsmSqCnmq5hqdt6JUUcdhsA2yvwNUhn7NuVqiQUvcmZ8QWNboNEbK3vV78c9cXtTF776JbtmHjqB8",
  "key22": "2i1ui7iS8EWYWWcCnutc1SvV1tJ7BCCSKGL6BuV99kuqbwxBxqFdztzB5P1AHYMTcFuk1oLiZrkbKvWqpXtBgEHn",
  "key23": "2CxcaVAxRtJ8xtSgAurqSGEo61tbffydKcHs1S5bkdzsm7XL1rQjung7intFYE5Fc1iAKEHGYJognmGn7poKuEae",
  "key24": "2ZptWKASk1DapS2YNL7AS5UdHiyfVbkGyJuzRbonC8TbtKsMvyRroCg59jp6Dwvua7Ko6EEghHBeePEGYHwa3NmT",
  "key25": "3LRkWQrLiEF1C3e9LStEE9YU2mW5pZwb3BwAcgNFZHpC4SV9B3SCe2AGpbP6nmAZtjBoEYMAcN2FFaDWWNiPdrxV",
  "key26": "5TnJG6gjvG9TyuJw5yVhjdixpw6PMVdjSdwJR3uXaXnhG6qM3EL1a1zdF448zCHfKGdDvy1d7Qr5kH2PCTNZudLS",
  "key27": "4LXCKdzA6PsbHDFsBfXBJScc2KYtc4Uj397zjN1tQPCiCYCzAxTy2KhwsgSPdVXmHSxzBsYZAWNqufFHU9hop4BR",
  "key28": "5M2uQLiPKT9sWnUas8cb6TGeqwRidyWGQasBP2MHEN6xf21cc4jsxTxq5Az8Y7bQjZ6AseU2fyaGpQx3dQGAhpAq",
  "key29": "3xttzaLuyZfmxBKVMRxVqbj5oP8JA4n4a34bM3gLPqNwGXjc9UJUWWhehPMGDKBPnAdrXzmhA8i71aRcvLqcJuDM"
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
