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
    "4GmbfeDBk7y5L2HBC6pkaTs8VMZK8wBamGNGhnN46oYa4otUsVbsoYrR6dADfX1YEHgefbqVf9oDKT4LzN9YH35z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cJK3rtnCLMPR7owXpMxUhHo7SXKERNNhLxr5jveWgCTYTxWqXPsxk7DPPBRcjRXqd9S6jn2b2sfvV8x8UGSdSBz",
  "key1": "3WcCuo5TRe9kHx2dG6M6XdYc2tmJfmtg9ujRrgLmRFVLs1ybEJhnE9Gq39Q5EwhznbAUVWjqXyZ8z22RL1ftvMcN",
  "key2": "63S9k9CpjUrzmDVQY7YTNMVb4aGKpWEv8G3RcSVgLZXwGiSCdwfkabZxyVhFLvZMquDheDvQLPGp6yr1tPeFJbAD",
  "key3": "5tXVGAxDYk9gtDaeokP9TUcmBYcXUTKjRnJJXwJjitNSc4AY9bzqQ3zc5bWBe5K3ADhJssmG5TXgZZibmHgduUBt",
  "key4": "5gNq3zdnKmo1HhrcpXaSUYXtfGT2PaeFJnu1WRjBr56oGko8mM9kLYNZfXSTTkY7LU9AyhqzBYQ5mNp236cYcv1g",
  "key5": "4JUcJ7egwy6P4CMxi5MYHrYBeyf6o1MuiCNgcDXtpyDj3qqffRpG9d9T2p3hLQmYXjytvZq7FzgoaXTQFpkPUcFm",
  "key6": "4wV47LUg5HtVnzYUFyVFBu27LvW5nNYgfk7HCc34LhgQ1uBuVUeE9SwULwXAqsgsY6dGCQ2DYSsd99r8GgutUTUG",
  "key7": "5ddPi1nbzq1ESpku6Mu8wTSBJQATfjmA31nUfvjMvStC4zAdy7JcRrxGPJXSjVZTtNXfsFPS4RyMpLFz9axr6kXL",
  "key8": "4H6VoRPH9eve5tmcb2eSVyzU6r8WrsXD699QYoLNM5HXXNkZTU7jkByx4e8XX7yTVPPqRFbYpUMpah53M2nYZkdo",
  "key9": "vPfXirbeENQeRGpFfrTxGUmFAN1hjXDeV2izumUDRrPtmPPbSAPNUqz61W83HnMqfza3aJU6Ms4kaNJe5bQ2XND",
  "key10": "wnACikYBBQgn1odELrMBXanzs2uXUDvPjqm4P4fY3C8vEkAa2m5sSPdYSQt97RxrPAggBAxMhrBPunuQsYhdvdo",
  "key11": "126vVreFF7zDdUmcgDW7vNHQnGk3D6FQVM7MyAjVRyafjwvmK9EzJTXSM5KciJAAE2Rb1XksePQ7HEPiPP3tafBr",
  "key12": "i12xjK1xGMcmEoeShHr37xsT7beobXcQau42vKvi1oTN5Ed8MidE7bXrGFUKqzzps24S5ytGDLPU1cFRZhh4hPy",
  "key13": "2aF8h7i2mgBuQFKUUmxEXB4P3sn9B7sMFQTYutqX8x5QHSG7GAvmLLBFYfyePLs7en2uM8dy98hpNdYWjwDwGZbB",
  "key14": "5SwNp584QM7mHRpkxbSnmnwGhkMZHboN2sJHreLSFKXPhj3T65ZPPw4U959qpHQ54BbsDysCT41nWjX16ihxSbBG",
  "key15": "35EXAbXUsmtySfF3WvhQQTBmWJdtvT2bAXSMNJzGpWqbAnSis4VBR1hGWZ6Wzngoo9HZvJ2rccYVaP6L8Q5s1y14",
  "key16": "A7UiJEYFEMZrEj96viqSRwyQurWBnDt1Q8WubTAMxetGNo8ckAjfH4pqQQYVctrqpY61BjN8o7GU1Q9q52UvnXQ",
  "key17": "43Ki8zBdMqqvL88AVQ5hQqE8Lp37ryhXcd8bqbAqLpzWCtJ2hNozwzJfSy6UbwPNASAwS4kzuh1T9aryYshT4hP7",
  "key18": "4J5wSuTFn3nheANotQpzKZ2jtoTrgpWUKemLYbZ9Yup5bQ1vQ64uFvMge82bHCbnziaAoMkn5vApgAzFeBgaPhc",
  "key19": "4NRpD47pRGYZMKm1YKPaKAWLifTfBx4ftu5qeFfNswsi57ogCrLyfvgD9MTLDnmEoUqaL45yWnDEePTaXkRVnZAD",
  "key20": "3voUuCLQDw8JLvmNSoKmvhYQRqog8NcccwGuViSwnHbUkkvUTkExzwZqDSupe8tur8VjtkJeLH94CdgHMZtuMSDC",
  "key21": "2oD6RK3kQNtiKcDvU9hvidTY822Qfrm3rVgXBbHSYZdMtS2npoeBDmMs8UoJPrkLHdpQ5BQ82wsg8R6CNdzjLufg",
  "key22": "24bhL32qpzMdhho9eeE8Q6Z3BXBYzitgqxB5DRvHMueB8CFDiFbqtajTPXUjLh8n19ib7tTRmqrKreMtaJLLjfg5",
  "key23": "3iVfw5AfwZySndojy94rM6THbyJwdoywn4PfMNX2PycyFyusHB8FAWzcr9MbJmB7dFjwnCguqLSEuTwXAZQMpFEE",
  "key24": "3LC5YBAF81TZuXkjcJt9F1CzKRF4vRCVg4Xr8mNkiuiTwxZbH44tEBzeTVmKRXeBrw4nd3EJ6F9uKLBzoiWBq8SQ",
  "key25": "8upz9DBeQMJuoz1TopnBC58yTxdfdTn4HU7VXzWuvC9rRX4vWpuyAHnguFLLkTL1TFNdLt5TPcaowaVHpimoZJf"
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
