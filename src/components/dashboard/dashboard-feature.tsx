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
    "5PBGB93uxzFCQ3CzepMEijvRDn7suxYrubWuuVjmR3t3Z8S5qNiuF7CTNKJkDpeiK7zcaDBGAiELvFZD5ZyV6d3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZqctTDfSSpnoTaDfhKey93ni8AW3yRgcH1Q7vvMq2cmMMCkJpb75G7SeqDMWdcgBC7ckD1zrWv3qFcKYGFHN7M",
  "key1": "3QZdV7mVw8n9VrRRf5W6y7Aavq72eQXCsUcTBPtrHdiGZ5SBTabRY9YdmaQpwT4cHCeuQY3G3oNvW4U7GRomDqFb",
  "key2": "34kMs5ahh9nWPGfDjAoatMKA5wAspnC9XqmkbGfVJbvhdAjzcfXngvMPD8vzs75pomCzAJvkWWfntm8vDrj1Vwhp",
  "key3": "4cKQhABazH1TUSC9M1z3sh9ba4Fz3JnpLL18e6j1UwrxL3G3mNRU9trM6G2sQHjKRdksPciuGk9BHbbQyQNMwj8v",
  "key4": "2Gwyfv5GJ7ev1XQX8REFnMNTNhagNagRNHmakG7mUvbwP3oxK6tFyPB4STQVRYShfPizeaWtqvHy6pt2pA9pGYLK",
  "key5": "ZAVNvgTPHBDxwbxBGAiAeGw1R5hNnksDBmSGq7USwZrW6kLtf2ewDuC1M7yWcundgrrqTwGrLxRwexyctxZ8nCY",
  "key6": "pjngJrVceTUybnSZaG5qergzUtTU9g3a65bJR32UwKeLYoiPEgq6uNoarKauG9Cir6hg8KpyfmiMCkLjVB2ztEa",
  "key7": "2S4SSGZCAzRsgc9pBLjdqkUwBvYaaATBtj4pMPi9Q8yU15keu5wDmfQciaowfaDwwumSXTfwR18b6mvVX2s59dYg",
  "key8": "4rhjG12jehqBYFu9gW2uDGrTH9P4Em7tiEBPiuiHi6hnERCwNDR3vPXodmSLWxAiAqBrNZxCdgT3W8hQGj8sozmo",
  "key9": "2gLthYMsGnSUspnAeESg1SULM66d3Y7Kc7SLrxgtMwdt3Qrrn6TBbzJmQVDU6xp5m3YDxWUd2hRXV1EjSnSS9p6y",
  "key10": "3DbXiTwypubxTe3Qrrx81GFkhKiudixTVog2qLpfJENmNoazCdcrtjxEJeYvLBs4Vetmhkm6DJcFdMpqK8Uq4ncZ",
  "key11": "sScYKuqN7VBhpLMBJP2z3kLnB4uzgCq5WZR5Ye8Wx1zbANMdNidYLTLwNekLaPXuAY7oJEfLFCaXqL16CAUVa4B",
  "key12": "5NxWATQEomVmso821i6bcKYH5zqXTRj5gJM4bfkNTWeAFAnKdHabuWTWCtzLTyqizGPeZyxBYwCtfvu41RMuEQKo",
  "key13": "5g3ARRSuz9oGS5g3nY96EoPvCaevcBoKz5cNh8rHkjtjsGf6GHXqJf9ZqumZ4P8ge6TcLMNKzqFmjYdYYek5KRv3",
  "key14": "pj53HGiVuLAK7TGE2AKDdymy3h7VGEuVDcoJnpQUmpLTi1PpwqysbJ3UweCT5Lu28fXYo5Me6mxzrnhYZkiLLMT",
  "key15": "5XubEdQHHFD6e7UygHTm9qYbLjwWmF7B7PZcsCZQN7wKjmDkxWVYaNk4JZRY8jsVDP4orWh1hLXUWXjZUPsxCbMZ",
  "key16": "3ExsogKPGjE9NfNzaDHchzcHHUEhExte7KZv3i9jg1igK7qciWr2fS17G5dn1wmK2yK4F2ndz6WijGkRoUw8xoan",
  "key17": "3XEhv7PrFPQYVeRL92odmya1CV49AQp241L2DcsDdRsu7PccSzm8tJo3eGt5hBBy3ttfkociu4kZcdgk6PbUkfzN",
  "key18": "4a2PBcpZQZivCrAFgaGEUsGU9fMkCMr4bg5t4ErFoLv2L6UqCTYZSPBVT437qqYqbqvXyDBY9oZuJpDa7avEEACs",
  "key19": "3MSa2ryw2CCRdjxE4iorfKUEbDi61ZiU594qabi9xncMX7fwqgBiEgbDAFTmZLPbbB38vFo8LwQu649hijzVhJMe",
  "key20": "pQieepNSK1RmpdUn1TqMRAicT6J5F2BCgVWCJxnQMaoHEA4c3zcQYqrc9DYPXs7FLW6DfMN21h5NdXogrfmDwPJ",
  "key21": "5Dw1dEFmxpmeLkefxB9wDB3MKVnis7RtGEHrLsqg1gkh4YtXvHn5bU3UPNV47BXiNqqWDxcTPAK5pJUcNxAPUkYc",
  "key22": "tqjCsbCTZmiKZWubc3v51wcTeG3q6teWE5tLiyYQMPXQo4PmVwNx8SoMJMftXoh4HJ6cL9b3Up58vdqLJ5cLVx2",
  "key23": "44k4mUiy1BzGNSKBCoY1xnMpEDZPGmWuZqFoJHoEYGVagEmUfqoEdQVtjgWv6xKDreGTFfUqHPSHMuXsQkpwzNcB",
  "key24": "4uw6UxTYydTYKKySqjmk7YsPuUbyH2VJW9EBZASMMGaxBHRpLJ4a3Y78xk6tJJ5sWWYmrZUMzkNetkdWpBjfM2rT",
  "key25": "5b4D9egPKThNnNzezk48DPqmgwzq6LGHg1D9cfjQoEkHsGhsFKwzdnSMot2uLNRXhaD5oQZ2VzWVoKUJQaEqd7YN",
  "key26": "2LVWK6trdnibBQ5MxTanGh1c7J8VHpwN34UGng8hJTLnBkumqVbPGJiPQRfm1NnD7qD9fUeAvMpWFzjbZ6Y8WivL",
  "key27": "2ob7LLWRva6w1bfyUyLxHjdV6eBpMnrr1m1iVsMNXWibmZL43n6uB6BPrxcabt8xBTrrKqLVL6hwX5tiUHr5iCe8",
  "key28": "2g4wMNrkgTWzTxkaSaaPnzhM2oMTMGAPmyv245VSipe3joYj6XxJHEJrZbwc4gqdUDe52nRMJSjN2fNrSSmfEqHr",
  "key29": "5naX5gkzS1um2HVEoMiyCeVcQFzRYnQCDGRB2JTvXbVx8Ao8uyS4ijp45A9CPh7UsSDN53Jd81fZdZ2V5RsJq1Li",
  "key30": "3jkN5rzQyGCo1nGFK6pajhLonkHuGqTeJtBx8j1xoe4J3HjapHC3iHmUuLnL2KSWAAmFyuVr6HL7MBCMHtafSJok",
  "key31": "ZX47HieTCcXhr2Mz1HikVw9tvikCFVdVqvzfxmbUxy6MYGDpmYGsGfGAfGjzVuTniodeiSuFVBF3p7fUBzU5TGv",
  "key32": "5M6zLYTxtZvP1uYrTxd41cU3m7beDso3a1EBBkd3URSztJH11AfQXnszZp47tjcQrdVaa6fEbLygc8jqD6TMfM2f",
  "key33": "2mR7P8uVxSt5xQwN2P34B5oWYYZ5ipgXjADnHQLCc4huwHe4H5oh5Zaue8DBLXxx8H6wxJ2eSDMjaS6Dj1Y35Bbb",
  "key34": "56etMW7bLNYxjbvVxrmnzDtBtgti8igvKj5GvoCQVqrsgKV2Jn8Nmi2gJz8En8RjHbdMYcNKxySVXABiEVpmRLct",
  "key35": "4AYPVjT1qFqFrnB4h7vwimtgqxDmMUoz8ouJYdkiHCS9EXxWF7YXtEADVc4nZi3rJQygypuRoiiJ5jHx2rvLfJBS",
  "key36": "3h5AyzxwCyJg4eytg3sCaYJvAX7CW9xjE7NBXMDWfLj1Hb85RkkzA4jX6FozowgiF4Qf75bmB2XpKGtQVv47gfEx",
  "key37": "64vBvCaTN7C6fA7b56NTmWEJGx5dXxSE7CkrioZvjWj18k44DkTknN2kwbtqxVmXkuD6SVXrVLBKoF6LNTPoCEyJ",
  "key38": "bSfs8NYFUa3TD2EMbfmbLdWqwuWcJMEC2MfwtXwwEYPgqGmJn5hDvJiK6KW5woTBu3txgduvMRKv6PLw3sLVmsi",
  "key39": "4o7WM6KXZffJNUdgnPxyZtVzeeMgsFLRiQyfjiuRTW87XWRycmjMwuTVQvQHFD99E1YnHQaHYuLQPSMkYCMN4se2",
  "key40": "sDqCHiGnVoJqFzsJMT3HwGKD59qMXZ8rkuQ2dv7xcRw6SrtFyGX5rnKdtjiw6NmFBYdTZFrdwHQtQ7xNt4phKu6",
  "key41": "5kCQbz3R2aHpf2fDe7mPrjwmM2Z1otuxzkHPcw6GSXpaVc5SL1K5TNY2Nsx2ACqg6XaZsS95RZT3axMBTvceZxjx",
  "key42": "2hPPpyLmLh2udUVFgiBXnH76uacyYyMJCuYxjs1Q7BwQ927YW6YpzN61pthNjC8toCh5MeeK2kePgLKtGBHoFezC"
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
