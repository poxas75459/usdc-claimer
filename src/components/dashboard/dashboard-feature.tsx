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
    "dYAceKTP4qJeUcnV4B3ZsCUV9GMtYvDBoX8VgrH1hBuDJ7ErxcyCJ5SYV6wdZxEMFxtNxGJKHr7zrk794ygtupg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rPnqVbwktFYDiFTZw9TK9sYDbQ17fam2gdmE5Vo3DM6fxEf8scLS2JC9iF4BzCoPoVZ8s566cMD7btWeaTCZE6T",
  "key1": "tZq5bsiApApFZaaXtrK6WhrMXKWKJTnCvj4GDT65WaJ64TFEgvK1bWwXjMyv2KmKTZ1Nm5k7dPZeyL8h7kKfMB5",
  "key2": "RWb3Guepa9UdFWFxW2zCAQVPeCoknzCiz15WMd4Js1oEWpj4FTFAGAYVJuVwCuYE7i7brab59DP9aMqveMRzNu7",
  "key3": "4vbJZPUek4xCXn6PGpoejH3yKJKVTBMo3LkCCJnjuT5qA3iFpLVqwQT4n6xTaeH1Wr7FothjBqwuQdjBSFM63Yfz",
  "key4": "3Fm49hH7hWMm9G5JfhUUWQiDff847DfkUr4m7uLnty7qNYsFofFAjxXVhNYEcKJjCHe2hUK3zqfpcXFDKSVEwZTa",
  "key5": "5ySgBXtbPJXXZTYrLmSunyYcnUdeZR71z6U4mvFzHZuR6ykgzcPw3Fa7mykNxKSjFGdriLTUR7i2bvFkYXsUSrvk",
  "key6": "Q6uCXyJirWjHbm8FD89tJKNmYE3nDEUJCTXazvp7vMqHQARpn43uoXy5j9PUQn98kj8ozSazg61mDhtmp5PPD4y",
  "key7": "39ZwS9ftBhScKhsg3ti11DqgVg8YNp9drmcve569UwwLACvCQ9P8DxFTseJiGYUuQAQLQnZGo1bejrMStwYSgzWF",
  "key8": "4HjqLsrfQxqF6H8Zrs8Un1NzoUPLhB5y5FyLks8weBi94BtXb7kQ95TDBxs7x1bQFnLpyX7659FbziDjXYZMUfp5",
  "key9": "3ygyY7pvxwSoababJAGcD99SBHjnFXtBpWW9Evo9TFmGBWNREAVVZFdXmE2QN7DzUTrxyqY31JMTyxRCYuVHpQPq",
  "key10": "62Ww3ZndTyQn9yApjVgbXTAnoXYFgCRX8jb7CkTvY41XpLSv6NMTj7YkH62pyBjRWMZetGNnoaM2r5ik1xZqdZ9U",
  "key11": "4fBj3trDfiQo9RdyyCFaHcKWTrAPQDq4QZ4RXQBJzM7YHuSavDeCxxQTqDHbRes6KpANxZPLXMepHweeUtNzDZih",
  "key12": "4wmyHe7RVrdf7giMeKGrCrp5veWVr2BGKCbi5pz9Jd4fmDsrgD3ChDKvWMw7h2EwZH5tK5WfD7CNZ3XgCXSFjo8h",
  "key13": "qnowEoCYUF9GEsLB7hvnm57ED6Nyojy1xFQ6syWMyxxnj4pE1WBaURHDWGXLSsut4aXteNgtNBQNbjeu3CFYwXn",
  "key14": "48pQiNBzNuNDRR5Rm28aYe18fhC1JRoUHV26GBQXSJk2ddqhgW18zS8qpWvZRAzQB5p64i84qb3UhJycbpafLThz",
  "key15": "E9gEAF4TDSBuAL4hfPBQrjsmww7FwrX1ZrWzrhqmFfNqdr61U3UMoFwK1DWR6p5tZjir6kHYs6efUwwgZqhWmuv",
  "key16": "4Kfi1dADapb1pDMbeFPpk4gtpfjSqi7YXm9DtFR5zopuf5kZTtx1DzmGTkKWijfx9YBtn4HydAp1GbDKuVv9Lnsr",
  "key17": "5U5XAGsq9RXQzSt2U1XxA763HsrDVx9YkrmgiXdWPikMh5JkqQZmbqe2C6DhRHyE5YSvAcMcgVmvqR5q6JSKq3Bk",
  "key18": "4FB48SxkyimdqTfCEkN1DMY4GhuNrqCBZSKbbnDhg4Miss9LwHNJWmGGNmQnSZHHqCKfyd2f6nVTZTDqVzZDiycP",
  "key19": "qcdRfQJzmng8aviYfW7k62w1ybFgYxS8DcYUJPTCqh3VR5raC6VYr2nFkeS4qNKwrkLnNtn1TgGTXCoBySjXSG8",
  "key20": "5hWnWgMYc5fvsANi9cpyZABMvfhqhHcYcGRsZQHdNrzDC3ZY5FiPh219gHiy3DQRqjct2DTwnDcTazQzXmb69AnA",
  "key21": "5tNgyDa4BqErLVYdoj6S7eKdoabbXPpscKbWg2eq1DKKuJzv52EwER5XnjiS1FAnAK9x5cv7w34r1hTK1PpZVWgD",
  "key22": "iCtXEBEkAFAGkg8YpdYjuQYfFeRUNbiCcEsPFw1djQERMBWdPmKa2BgaTZt7rPJswXpLBMUvE2zVufBcerX5poW",
  "key23": "5ids6MFG71siTpWJDmnRAHtcoDkRRFsdRLtMY4PBMyNeRwSS8Ud2DiQKeNpEBzamckqkE3RntUdVj7fnXvn1HmUt",
  "key24": "3iTywjKDrEUQhkaez5VprYLssMDZx1UQGwveiiHBvabLSS5cDu6yG2HtqRKYEdNqJ3bFmqDctztJaaj2bJ8Hsk6R",
  "key25": "39bMVUBiEhWmtzmVHTUBt1LJNWYPHCJnvUE3ouaSwVLpD8m36SgHJEPmsdxZSiX6nNxGPZSUpjeBuKNHXJXAUyaD",
  "key26": "3d4rB3muaKoAABDTRYfa1secYQtDn6ATpNHvJe8F4TvuGuXwmMmsdfRCbYoyjixhSfEiERcRxTih2TpGwzBWN851",
  "key27": "4ier3b2xfcUAUbLVjkbGkCAs2oZwd2eJkzuqoaYSqSNoCKvRspZbdErZaSDJwJJZkgMfuSyHmguFWLzY3pY72S7s",
  "key28": "3BY9f78BR9uGXjcpyHPyAoEUsBK54aCmSZ3E36JE8QW7cKabCppEwtQu4Mg3i2kpCTsEYJMes4K7etNuRtDBo633",
  "key29": "3bjLwUxX3oZNe27GAsx8vSFi2bkiPxDJfVjQW2eXzpKPVvH94GDpnVHTn8tLEYCVonQhDLXkMEMvMVdNzPqnHmfb",
  "key30": "2nDLLtX1PcTeDqWTSXQz5CazKqbvkndWpx4P7RJwC856DtbCuNy8BtCVtjLpCpHEdZ4c3bjQpjpxTFSZaeCHRY5h",
  "key31": "2r6wB9D652R2LP59mFU215q8vZcYY5Ntbagq2ikgLd3KnBvEuivbVYykVKDgBV79YsmezvRZmsBP1oFgJgHeRQiL",
  "key32": "4hJ6LSxLaxyTNNPH53pneeDXSjjNw3BL6X3TDBGowT1sgzPsXPTjXBkFMs1CuoVNmnU7EexhZf9qSiWpBUkSzRAr",
  "key33": "4d8K6CnSxxj8Q1joV3y3togUDENtCmWhCB21fRZNDAkytfxo1DiD2py2N5ke646n3WJG69PRaD9k4oFdULYXphLh",
  "key34": "4A34bN5cYiKwdYBmA5MbAcAStvYZHvDycrU2N7LPZ3XtdEB4bcQ4ncFnmJx7cWRBi3T71ZUJS1V5U6wPMPf84uPo",
  "key35": "3gRs6NZ2TVvuZSWMXiZeQ3gS38zbXwzRgWxDekcyWXkbsTjrQp3ymgVZ3BnnWmuyMABChBnbqT1NFeEnTHtuYVfG",
  "key36": "5rR9RGBmPRMwBsPJtKf6UFQszjAVYSzA3kX2En12Pya1uLrxEzLZfgPKsk3u4F7BMDsPrUHGQqir2FbbpibvVXhQ",
  "key37": "2ceZk2F1cDGRASFY1jHdd5TW3noHfvsUmPknQ7zLsh1FiSg9PLJhBLuimQ2kg2RGQDBVc9H3KqBKia4z6dHTj3f1",
  "key38": "4jHFgV1L64uFt7oHMjt3nmLiA6sscBcMQ5Rb2TLsddgdNowJQguy5WyakpMZ5fhaaFYrGb6N17QSUNc7uo9qAmSH",
  "key39": "2rFiFTJJFnQ9qwwUpL6tPhPXyMWLZcFBqYYsGUEyhJAsgxgpL145r6J37e6es3DyGseqZQ7KrtqgouzCP2pUo9ro",
  "key40": "5feF3ZS5sdd95dmAPS9YBnZrpnoaycDrykJwrtn2wGejWxmVuoKaLvjticpknoDcUeeFJk8P8dKBBAqnSVnuU7ya"
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
