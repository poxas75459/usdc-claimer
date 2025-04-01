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
    "LiZLAovC2sNpYeecU4i7WuSvBayGAXKhXsszr1EPH4KP2miZNoJg3eiPq1cHqjsoNXtB21w68dTp6PgKccpyc4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bSsEEiFNDZoqkKp4ExpZypcrECfUNMrGUdPSVZtRwkokamkLqwQ8m8Y8CxA2jyScjR2rVT7dWiXDgfFNJmqjeC4",
  "key1": "4o8PajLpwYHC1fgvRpYUgLNJmipmWJ3pe9HSTaiXRpqT8oYt6aGGQjGkufDgct3tyj83WXXndYPmfXWA23BPkLzk",
  "key2": "Nzd8r2LGDJc31L75RZUueREV1bm6CqEwRqD6H5ceHZunDGo88ssHaxv1TwxDd3FTgKAxweuSRRckc4MJvFQTxRK",
  "key3": "4BUybt6SPxMFL8ms8DTFZunrvApFoFCCHpUh4rca2DT5vjmrAbend7QfDK14QUneDg2XpphVx1axaNL6WxNRxwmi",
  "key4": "3bboCtcuyAwH5ymw9CCsfg2KRPJdddKkbVxzewTTXEUVdRPHKJ3jgXwxkYyKuuxJqQsNpVrUef5GkUn8RdBQnxhy",
  "key5": "3ur2obsXyAUgjrCFWPPZZiCuKRw5TsBZhz9j2N4HnBdqTFfGdnt3SzdCHJD58TAvqvUsLtYJkkwb1gytMr9bNDdn",
  "key6": "5zpTYm5tWMApszsMfyowaGeBNkZ8EwAd3M5P1hvnXipWtGRPb64z1GvyG8EtjsGsLLZuwfUXfX7zY1WDno5fvKfn",
  "key7": "4jg9Wgj1GzQJJJcykCFX4Xn8xJNwQLYodE54uK14n4ABoFhYsdqtFZqEfwXdx1pJAuKtb3Uc61Dstoj255eBbZaS",
  "key8": "2Sk5TN4SSJpAKXEsUXKJDHE2vD6Hr61PrqAebEtqPQCG92ZDnNz3koY3BjX4JENopW9SW5MdMrCCLhM2cm5VERHz",
  "key9": "5zpo7ZqK1FZRrEVxiqX3wEqZ71A5N3SJLrNBouwfvTFhCCSJwXvBGM938Msft2nW6ZiejKkUjzEA9ZZDEXXnJyz9",
  "key10": "2BaWs8Ek1jKpPawzaTyJeUUP2BARCGbqiJRCK5UzdvhHga1mqQkGF7YueG7pVW8PK1ui6naaCvCGAR58Zbe7Q7sy",
  "key11": "3qSc8pabzJj8g4DB9GmkcS7rbnimzxxxWiCjs4LzNz4ve5RVbZvohchNYEHFPrUUteF787cWt4PS7tbnqsc1LbaN",
  "key12": "5KaYKNLbwNxqccPULQx3dyHKByqV5uW2VKFVswzjxtEnyN71upEFWZTo552W43NqxxTG93SBVQN4UUZ3Abtp1oNC",
  "key13": "YrKM97URoVzKn3UjM8R9182suoaESpsgqLsBGSq85m2p6qUgQQ3wG872RpmbwdLeNWd9Mwmv8iQm6k1Urhxzrju",
  "key14": "48qxjJv3HVPcLuoCsUkqkyUkdY3EziVq9UY8CExM2rh6jHFgy6iZe7CDt8DcvzxePoxy1ZNE3QkXZKua4vKDjWtp",
  "key15": "3RZUDD4XNFgTDHinzd1TDoQ5nJsMaUCJWoK38vcCxePKr2MWczap5byRY8WfHHEbU83Uo3885Mdjby7zj5wYuicG",
  "key16": "3mgf7ET3W2hNeWLTuD6rZJCyenW97cXYfgN3Cyeup12D3MRDhdYa9tkKM2yDcrp8Hjy7MLWHcEZuaKz8YmSMETap",
  "key17": "4dDNpvXEiQp3i14fZaKVi2rCo84DhH3txxpmER3DuqPmAhus6QqaCdYWxz4z4RFeq6iiq9yZgty4itTgmt9aDvsA",
  "key18": "dDXCH2Yt3uLEtytwW77bxk5HFuvF5foMHG1VPidhNDkkqKYTNrvDUfjvEGzdap7Hwjt45XVjHCc91fgi4DTFYvZ",
  "key19": "3x8BxN37XUXYXUcUVyPJmUZp2mfZEQAHtTd6QoPk6z6wMv47WvBz83SZji9YhhHSuRNMDZqCG3AD5673LeWdNx4L",
  "key20": "4vsVg9wxCZxs4rcYrAmwXnZ9iQqeV5arCb552wJVhXk5TxgY28MHcYVtdKQi2M1VndqtkuRUPpAQm6nsC8vbSc2A",
  "key21": "4EoVPdmK35fz7hb6D6Mau5RT8czHA5yyLqmKNuLZy6mRYhXpDgrL9GcbtbPtgvX6Ycdbhg5Dx3rexoCxYbnJyzfN",
  "key22": "wqJ4eqLwTrTHiY4Y7wdqMjuUCCYgtSt23hGrUVBCJueR3fVcJipn2qnJmxCLFRgU3k4cy95oScgUSC2DfnztcHV",
  "key23": "3ujsRwa9CH4vrXPoeRhPZ1ZP7iY3yQ5YVNJkHsLjePpysCpsCyJhSUBY7AM51wCSSPzRCyHiAXijWfmWs56s2xNn",
  "key24": "31uR97zSLSeZjdQ746ejS6fvFoV6TZR9hVXiydw9EjX69HFkzvtqiqfXbCs3yohK8g9UybL93wjRwxzALxUpsaLb",
  "key25": "21XdW87rPouLCskiwhL3M658htfrjftc9NvdfsTXrjqbWujBawKaLPt4AzNnevVPLPeVZH98D8ysQfw9d5NtNuFt",
  "key26": "3h12Fmtvfc8GAopedQCk6X1qSiTV9d3k4n6wKkFmMBLw6Ke8Ec6o6VQ4BRNKiSQDKB6W225qAG2ZozewnjpvuHJR",
  "key27": "5CpF5LfLqRweFtadWrrH8PhXdvubN7akfmCnQuNTmAaVitSBZJTJTCQ8UYGzwaq54ZHe8MWNVMkiCDgHUehx2GeB",
  "key28": "Rka6XHD4pv3vLsyGsPTULUatQHxkBFYzq4zyryEMAG86QdxZJd7GvcCJwRqEm7G7sCugkr5p9HsirNoMaPG2ak3",
  "key29": "h736tzinUsebKc7sSkzt1kG9ni13uHTd2v5FeYUZ5Qqe8xR3FSXvpw8H53pWMBoEZhw5RHG6ggtJkcFdmar5eR6",
  "key30": "5pZBJS1uiQfgqayHccSaDMyupkKSZyQkFKZMRnovjw5epuhb6mJPx4cugLEFrHMQQ3iBxR3nFtuGKz7cEpRU8YFs",
  "key31": "3mTQgzrXk6hER8khqWB2B1ZgZVpEMUsw7Ubt7rnB7QfxjHm37DNLfVhANKiZLy3CyizLj6YxQ6URh2bmitnKYrE2",
  "key32": "fKSUumUdLitVktY8uWYoNsMM4ZwSvcQ64G8QHTuYdqKJYwGPbrr7RN8WWGrDdQsau6Gm2uc6DBzkufGCNy34pwc",
  "key33": "3DkwnWevoPeLt9ceMbMAMB1CAELfmouUeKEWFAbWhUrrg13HAap6AA6T7EdGZqqcjWUsWBox4cXwJQCLgkPt6rh2",
  "key34": "31YhNZRQ8Y2h5EbA61i5uCNuywgJfLUp1XmrjHBzqfSkTxxHWjKkT8DhtKFrbRNGRHiUZ8tMSECAs8KEShTBHHLT",
  "key35": "5zeyq4Y1YvUBDgYMG3HmsLMw25RTRdXniijDxmh9gquDLLwz3HoQeeUF1eUxmQPewoEAn3QSXjriqVUA2kZyaUBt",
  "key36": "ZCEFiCm3VYMns5Nifmnb7vqXJAdUHtdNJHHXKc4U9ac4GvTund3mYW5wG199mnbaBwZvjZFPDWgnTknc2ULxzkt"
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
