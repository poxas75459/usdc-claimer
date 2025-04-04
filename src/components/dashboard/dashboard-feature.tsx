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
    "61kFMzm9if8sByRrbc3cgvVwNxozQKA4HLBcuVYAQjDGugSDXfYK8YeCfmoiyrG9fL7SqmbReJTczZGh6BuwKWEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rqRiXnETYoszXtoEMRehQKD8V3Ye582nLmb3jY8G85bq6JUTtERj32qHehv8DkWWhSMkC4sQ2sqyftnMyhNix2F",
  "key1": "5v9nSt6JmqKmwqqh5fbrbH618F44v5NLRVVXoZWYU2txhK3opvuFxDx4mc5NttoCsXAQSuEjaDD9j3AbXEwdB4Qj",
  "key2": "2XrqLvNYngwLmQ9UL1BwguV7xSv94fGfpzXt7e6iV47VRZQS3GyD5NXvJPydZziuRPyN2mHUET8ZC7kggdP4HCxU",
  "key3": "3jMedHAwscpz8HiU5nkZX7ypMm75cB69f3vuUkVhKDwj8DqB27uTKAKTUQG8WuaRiNC1tMd9ya146BdbJXjDwfrB",
  "key4": "4LPrXLaE6JWpofjVXWHixxdNi1wiTu1kQLkvA28UtZdUq16pSzXXGWVuLmaCkWtWUPEAXexdGom8FwdaPtmXrpb6",
  "key5": "5Tctu7h4VoegQwJuQDXUqzK1E92mqFz9ebHNWfGrh7kkhLU4apn8YzfM4DWa8eGeYswLZGCAfjboUBYG7rhf5zLd",
  "key6": "5DTHJcZLrz57cE5FuBbetLceBjHHMwE7DhSxLz1eD6yNE3oAo5FNXERxxyQ5QM4taKfjTPF3aZtMXoD6RRPzDh2H",
  "key7": "56mtxXGVyi9KkjbAw2JrGtDHggAuUBxqPt4x7wnjPANKV5KhtzSRjVgefpFcNnGa9VCdjKcvsmShtMizWaQBW2LP",
  "key8": "MczfVpo14ZP82WjitYiJgVRpkySpezxsvNdriGCKWQku9Ruc3dPArQywj9MoqG64MYPH8v1mwDY9RLvjDULWL3p",
  "key9": "2AgWESAcgADktocsGee1j6k5Adsg8954NPJ2oz3MMeWidNunv6goPr77oFj2oxBhpBrMT3MpnvvCPQnRBoX7UxCU",
  "key10": "2fCSCRsX6P96ZaCJCRqNeUdaneHm9SQ9hm1hBvevae3L62SubLxQgFFKitSW7LZWt7qyNg6aVXCNTUhd8UPMRFfP",
  "key11": "3GXycF8GQyw9dzr3GUG7mb4MfuuwyBTEQqqQjxs5Tdx3FzRyCL4hUapAmEHjL2Gtzkv6dNvvnP1WDfy1t76ydb94",
  "key12": "41DcPXFt7oaDoPkA9vZymiK6fguRMfPmTGRyc6LTnFnXnNmny9gUFKEJbFissLt9t3tSvpJzkpfndbgSXdvszFD7",
  "key13": "2NPP3NZ3ETx4cqSM4DZVFvVpjPnpzgAvFNjWUC5Bw9qxJTRzH6Q46AfCuHGBgEVAjPVEvZzzkGM17iKbSLid7JNa",
  "key14": "5irppcCWHWXU7qdeCCdBVMT33nUn5vuKsm2rkbC4oZWauMRn5eE1aK2e9WL1WTpihNjPHFrZVVXEB5Nfk2DkFB39",
  "key15": "2xe4qXwCgnTEX1yj7HUBB7gWbHiuaq93qLKQLTZbxEL7xvzeGQrKb7A3FeJ9RgwUXRENVuXQiQZjS6UsxqCEdjHo",
  "key16": "3yBrQpH7Bb9SzSVdiuieGbkiPAjPZSpTLUgCj9oyYf2c58ExJBPDxX3MbMBQraqqCHEV9U8Y23LQQHKvSEnWzs5x",
  "key17": "3eGyQXnz3Qc9uN5M5cC2AVfwGrPKNgHpmQL4bmBkJ9wrQgH7XkopESQuxq6qqewKPqMZnnJrx8pUUjvUxtRzARQ7",
  "key18": "nfgJnVSb11Xy4uXfM5A2Bpsip1e1Li2G4NmkFNKEWjJZWQ6TYUCdXFwKScFR593cUEuoi12Pyb3QdxJW1wpgYTv",
  "key19": "5N4rzi6zzJGzGx4jy7z2Z4vyRAKubz7xDAgpfxPKBxB4GvYkDheW42GTFYV6BX7HDLHGfweoSM4UGFD97xwjQMhN",
  "key20": "5fbqmxTwWUdS6EEpG5fFn7y8f8sTp8fm1t8oiew72pv9vEJmMxXq6uLetFCZX4pVCyNdAZFvwEYekbdFhYbdfPj1",
  "key21": "22gEV23phVX31EbSsNNgvecf47bK6BoXdYU8nzp6NS6rpw6C6yw7N6UhR82dkh7dXau4yBSaJXeaiVRBWJuJfaxo",
  "key22": "4Jsi55YmzkCyRacf1AqueaNwK523teVcqT2mBySDSQUhirLuKD75yspgVwSd4btGavTcJ4ybKHNivi8rYesdZb8r",
  "key23": "21ZF8pMcdchH5xCLDzTJoyKZjCUaPXNw8BjdASLhBmiF8m6NyfRAWSM5Pdf6GorRBNDShbpK1sxF6zRcjHiEkVha",
  "key24": "EubKXbGTqqjetHh9Ffwu5RrVqxT8uUWngC4cFHseg2mkSsymZd51zZZFJkrQeU1BQ8zaadkUFuVUpxhZe52KEXz",
  "key25": "2onW4CRT4S4kHiZRcyKFiZZqVEpd3JaDXpywuEJ59UHyfEZ6aszJ6pbwmSYzy5fYNe3fWEDV3kJMn7UfoT7GqfJ",
  "key26": "4c94to1Xc49T4zmKzpxHjwzx13P82quzA5eC21jtDwcek13yHJP91Vp2zE4ggH6L4DbarTUkJbMvAHVTBTc5xGhh",
  "key27": "2ZjVNDvFFVNwTvotKrNosF5p798sbT66PNjBMy3SBD1Evjb4FpLj9WRx4RqrNHtcoR1fakw5AqbJvKfzXKc33iad",
  "key28": "5yWceeSKiYEGobP5peGVqLRoj8Zr3wSTtiG5gvTHM5iz3AUrDcPi1cb6XSveuQmKRjthFTM6PHNDeLDdujwAuDw1",
  "key29": "4i9cCVJFFjDDnt8Pek18zngKQAUYp6eRdA58L8h8ou3zEtRi9ha4NWcuJbHbK9uyV6Gb8QUpEuux566mUaVPUmiN",
  "key30": "2cRMMYCAJZYStjjicZkUqgn2yiCx8abtQePuP8163mGiVdmdrsUATSkoDC9hWdGbgxaapZQecHTHTi8YkySiK3e8",
  "key31": "X1XXPbFcqhee5BfxYHYQyPawHuruvkYC8Kv2Az2ZgVDUJtxMJ5LZiUGQegY4E5ACiristKyFNZxCgcqSQvCgLyB",
  "key32": "2nkMCAVxtw3C8cG6Bve7Rwhr6t8D5n85HVxyK5kqXqGzMea8yumXbxVZX9S2t56cRgy5r8j7FhwkrxR2XGqNqW1d",
  "key33": "66xo5m9LaAnmDybNSohMUDWtDHGKF6KdSV3K3rPtZm5BzkjvSr8UseDYMb1qGUFFuTK1kUbuKt7dXgpDDyz8XNVM",
  "key34": "4NMzuUiKifLAqCXQD5fxt4nxDfaW6JB4cUHgnrrgVmrzw5xbeFcxJAU894wDVUqYLXWBJBc9ezx8eguFfyJY9vBg",
  "key35": "3oZJBMhHfjmUcCcHxpZMKZYupDnFguH4oudsUiqgTpg5REYnp9ezX1sPfPftrT28oa5fkbSCnrRitx73yoY66q58"
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
