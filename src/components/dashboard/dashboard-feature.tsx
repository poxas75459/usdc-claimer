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
    "5JFSBtskvPQACYode7xP9PjFu3TAuRYaH8zvi5ffgEoADY2PNwNLdLhxPGoFf874jDV7cWCJ6iM17PP4w9oQcCys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d74qrxcu2gWRNa2X4ijz3zXQKsGwNJ4VUP7JDQ6acddn8Ms4JhuRfULDxewUGZy9LNCjPnQn7UZ5PAhcVQaeosc",
  "key1": "5ztKviQXCB5iNv7Rgziqv6asGSTRUy9ioG11LvmRhG1TV4RRJEnJt38JvbZGSraivyReAyjCwyEoHHfXU96Urn7F",
  "key2": "5kHEMtwwXSNbaXkEoM21ZhuveHyaExk1Hdzn8eNuyfLZ42E94bSyr1vEbEPPfaDSkZi9v8u4S7Th2zomAMpwMQK5",
  "key3": "tq9xZ78fycKpS2YGQQz5XQbJpkoEgabvNKxe9pboA6dWPmLM9CWTbYzZbz8fkLFd1cBrpgQhH4T5DKjvRvJuR3a",
  "key4": "5GYg667UdE5tJQU12fv1ALbaRwEy55SqLhvjBviP7V8NtyxNV7steJ3xnUd1cGsRuzYk3BaPWZVdqtt1TaHaJShx",
  "key5": "2o5LXftQ5vVQsPoECjTBiiRpTZ57ZCab8hRTRTp8r6cZTxDXsmTFhhs3sM8PLjCRqvauS8n1EZGn2vaJEwuXhCMn",
  "key6": "5FqXeJcFTNfc2tBFYftRREiShUiNndxzKMUvMAN8wrBmDfza16iCHRitQDzepZhVHDvUBmKU5CPBAz6x8nanj9XK",
  "key7": "4jdhUSmv9WLt5jspUmuoqNU5h7sVX75imsKZSJKXV4LXThxueZt7TMfteUd9HsMYW1aRLGxmziYKfUi6xguBTsFm",
  "key8": "AfbpWKzHYXGsdu8NgmFT94aKeXzGwcqxvwxiTJHC7qVXnTkZjjj6vFAC3sPggNZ6FzxcWW7YiMYzGATfV6Drtvz",
  "key9": "DiSPvsRVu7sbr4WCcbAerwWTCWJYYu6srKQPF69FQKbVm5xyWqgp6k3iYDUetASeFw2esfrXnTFbya8s5kBQHxu",
  "key10": "3QRyFCjNEHeiDX8D7AKjGSRav7VTbVZzgvRR9sVndK6zfyYmHLFHLrgbra6RVGiSBTLPBAQi8mheB7pcTpRSScMC",
  "key11": "ZoX3g6YsRyA3rScM8wXEP1nVc9GnEY8tAwnQh7dFWoks8KASxCiCdFMUU3dj8o7z8QeszjwKk4AUo6naV93VE8R",
  "key12": "3k9Ck1tmU1aKSYtB41Z8Kep9P3nGiUbimjo4vwDeRELoZhFz5pyRUfWhjnYEPWkoJycwG8mdPvXDyEyJB5uNxTQd",
  "key13": "3j7MYjLZftDxCZxE1SzXWAYXQV6jmQs3bf1oaCG9ShCJ9AzcVeokMz1igwf7ATmSd4Ckmb2DdNjszhdUEoaVBtkZ",
  "key14": "tYdz5J9QFfBxq2xfkYmngQ2xa2ASh4MuNPzfc3jyy38zR61M9vqY7PdZpyuTgNG93eK7VZB7itHpqeKBZuFqmBG",
  "key15": "22tLgdHuijHk5g34MeGs3k7ycmMabekwxcw6XXuAVhadzMj4NZM6mWyDuxntgsEzsvmh3ik6TQmrwv6pTuVgWpZr",
  "key16": "y95811ZmJVX8VbAc9Wv3cDUeSzSbhiHYhiGTqT2QEA2XQCcN4Ep8gSJntMKD25mgLVc7gsgC1iBtddBJtJfYiLp",
  "key17": "32QniRXVcC5yEZYTojVYFnqE871WREQVYg9PhHHdNAQYUVPXiLL4GxBBJWZUshp22S8YArf3fQJaaJt48viPDZgU",
  "key18": "4vc6ctrgwkBZvyjLu76za73ECvsmm41gN9ghvepGE8ifsewyGsFYFyeDStKsAmGyiSUNxw43tQiXDsYtxL6oEspR",
  "key19": "5A3p7e8zSFux92fc9PkiC5KxkmvmxKiSQExBbNRzEepYiV1cVMtWRbdw3mP9bAutscfnaR5S7FEJQVuvyQpCKBmx",
  "key20": "3uL7H1mm79uvt2eEvppoYsaJp9k6YEhGPSxymQheTrqsdYk7LFEEPZU7UEkyVDhx8vf3UU1T6Q1kwP8B4yyHNMuQ",
  "key21": "3EQWbPXKFhG4CyUUYWQNCiSxjG8V9w23xw5oaRmawSwkQEHTn9HauanRDqLJ6JXFnrhTEVzVH2Vg97byXUnCwMC6",
  "key22": "2Sih89dHxyCWP5C6NCeTMoDHaZCvkUgVGRsGVGZKapNTHhWaiKTtWzULXeyFzZqdoQZugukq2VVHTM2EFKhNYp5B",
  "key23": "3tBZjm9B1TBnj3ET34pd8UTt9w6Moe6shDidQWuxiusRt2orjHu79DWN2x32yi5VriG5nuRaUzTaL9XgNqoLWLcN",
  "key24": "4afM9VsbqDyLLeefweSRgTYkts1XA3Jkjx53VNsXYD3V2FNxPKB6NsdiPWF16MkvtYo1eBFVQLWYsAJWD39VtYxf",
  "key25": "2ATzL5cwwfs8igrbNW6fhBdspxtiXygHkdyjL35WCwWhxgwrRQcP7JQng74QG8VQE1RAkZsQZ2D547WkQAKTGEzB"
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
