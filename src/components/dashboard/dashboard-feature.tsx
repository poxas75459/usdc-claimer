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
    "2KKJKcx4p6z363wCWeBjiqBPmHxNSJ5KuV5a7QDaNq4EsVVG7EWss4zrsKjWgsvPYbuLJ8qAEMGAMf17vMDYGVRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uk2SMh6VEX42TuJHrMjWHzvfHsbGQcCaMkTjbAA8sB4n1bFrxuty3WEqM6ejVxTjevuMhgaCQZwWskb4BRErW4w",
  "key1": "w9uf7Nq6ur9243sHzFLYXKf59Dgu8nGRjgA1JNPAESFLZ4iHEAfxDcR8FrzhGfmHiNr6Ad95Ur2AV68cSJZ88EJ",
  "key2": "39sBY65gf4RDfBm8ugqKbnhgHvkz8MhB6WFqjUYP1HE7Vn6Cw9cxAhNyyY5dyceWh9Ef32fGtT98jhY1FDVAGuWA",
  "key3": "28TgerM1GdtjarGfNAcG73rapnhJFZHUQA8Dpk5iXZgC239mzSKaM81KfEpxNmSmDS8BmvrA13rwPKEc4rw7VFi7",
  "key4": "FWQd14GJBhp64kz73Bx95uMxKZ5zehFyiDq9U8xhJaFhQd66oLBpX3WFRc7CdLBZCBouXV2aQM7zzQjvdcxTYgk",
  "key5": "55yfngw5FmNqYfCt3um3VQYmUYNVXvsLvsttBt2fwowh8QkFAx3peUuxprrZYLSxNAAAXPXYxGzACp24BcH3Zd9N",
  "key6": "8xfFFUiHP57kzhtw63oYT8bedjChyELpcEVwF1tWjauhuMZBomw6aDX2AzjtVNZ9NN5CYW8pg87WDnvzatxNeML",
  "key7": "KN3gBKQdRv1urn8HYK8L6jdqi6aBuKKCYpkDwC39bZubnanD33X9QUkStoeF8U3CcZ6v1nhWVbDdPMsGjPLTzh6",
  "key8": "cC1wbZrTgdgQQoXgPhpDnpdyx9k7F2Gf2g9JmZhAMeqZdXVSJWT9zNqjB96NH3pgR7LAnamGdWpiUtZCihW1YJT",
  "key9": "2XsVu5fqFRpsq3nmy1peY3q3K9LZR8AMLmPbGTeTLNbtfrK8LiX4piGns9C8XUcHvympNtzcX8dDv7tSkCrngFsF",
  "key10": "2R8Pf6z3YQvUHvMvMszTC4mq57qmayGoiRrEaxcNemZhT3LGbwnCwU22J1irLoumcF3miuJET9SkEb5a5qmfPne9",
  "key11": "5poBorguBTowaZvknxZesnzV28RumRzAFDuBopg8cE7uSo6N7WZkKgKGJpj643gfhm4yicDXH6BngrUp5rRrPGPt",
  "key12": "3MZBEkgjz8pt4WaXokKsAcz2AycBabTAc9aSgDftgBzwtkQNvnejTsDVfjRwfx9TCegTntm6RWrkxL3nf2Hr44tM",
  "key13": "5h1B2YQhT5vCqMyLeYbWLxEjCdY8mHAgugAvZmCTrEg3E1aSRjerrgxvy5dRjsmvcK5HbXSZFKhwZJPtJ8Wfh2x6",
  "key14": "3vDFoZJmsTsUuQ93PGiTyNR5qM3NEq9mejDcXx6rg1sVdWrjqqhrFjmLyYeZFEqFFJDqPwgqVbLknsnQmbyqGSpa",
  "key15": "5ieWJ8uo9YERRGKRYAHNsEPHwyYRZGLL721W6RYyqW7ncknq1eZQBDY3ozy4cUzqtAtxjqHifUFL44gmgqvMRhet",
  "key16": "3G72DeM4JB5qghNarZEfzQ4DKBciMLmgq7ikmM4s57G4LwF5ybdUsEennZSuuxtqgKgyfSKrjXSZCcv23XQcbrWm",
  "key17": "2UBdpkn82hhJWm9Hum3NqWpEKGHyANE8HphQaTEcvmvhRkxqSzV14BssJh5SpqdbSw4H6ACpnZqKgTZC2odhjtbp",
  "key18": "36GGtgVKBGX2sQf6dsWcsD5Y2FdM5KnAi3w3GEPey3h9rK3P4oHqx8sox9eTH2Pc9FvJvJE9z8rfpyxHchQXsw2N",
  "key19": "4MkPMaxAdwBdWXXPB9L4b6ynrmUVML8UZLDAz9zeu7vDB2bnG7wrGc3kNk7gVH3tC3uaEZeq98L7pP4Q1DDUesFb",
  "key20": "63t7mdBPNoiVw7QNTijCARcGLPx6YFf48LwurLjRm97YxNdohSPVS8T1xxUn7gJmczqXGqXwGszytjAb39LmtfGj",
  "key21": "44TUaQUq8KUwA7e66DpNsdvx4SkgnJX1WhTSJgLW6axqgnqsdq1iPkNVP376kpjXR7dK9nmyb8W1p8dnX9MSJKhf",
  "key22": "rTJBfzEkwrwWyhjA2RHsWGRuntcWk8gZd4fw4d2F5AmdDPrStyc5uf86WmdY87gqKHcp7AWKSBkDvtekdAGiRVR",
  "key23": "4pS1G5mUac99YBAacmGEckncawuRS2muJjit3y6RnNnpzu3Ba9uC1cEDBHWjPVW8nP4Vp67vgFdVZ4NvSgsUz5HJ",
  "key24": "3gMMEhYpvWJ3mAnZYrxXFgAuyH63fLcdegrAqgAPVg898xr8Tghy6pk498AB9m3ov9uCVPuxPFXki1VwYVYbpwP8",
  "key25": "2aDfeNg9FCiAqWMv1bE6u3NahLZQgterifdEM9wDDaWjTKiet7UPBzq54KmRj1C2WStP3HC5wq3xjRS3QCT5SDHc",
  "key26": "4zT9vUPU1ipsuoyyXwjtUTJ7sJUZTLSCCwKJuBa7pSXWyp1eiyK2LukcqZFZRgmM4mo5pkBdjw5uwmYZnFfxQkQN",
  "key27": "4nTv9gsVraB9T3k7SwCu2Egx6QAMqvxagkSNaN3yKpZfojs4xSd5qZ5H7CEFomvPFr8Rnonra4Jsy2dAbzrXJ6Wr",
  "key28": "4UdGCJ792nDFi9ciH38AVJjDoU7wmm2mc8cWr4jTy4KhKLPACMrB6ETrmM1834zzsjx4nTcoJRRha9X4MdS5wUy5",
  "key29": "1P62R5qtT9dpV6D6YYUZh99F7S7sFSisAJUCkkLE1iPCVydxS8f3Z4x13rubUzCwg1WbiVZNtz7meeuQECCmkuJ",
  "key30": "Lpq4UgqcvjYDpk2ChP9QtdX6UDBY4hXZnLDWYdV2LKVoWNF3AcmCoPnUiw7Fegi8JEYxrbj8Nbs1XUvSkftKgrR",
  "key31": "4RPmFW2quRzqE6uHkvXEVKAajW1Li6hPJxJ6ayoycZesVStbQU81Wqv6UzTfEWtm3jxAkZWwPf3uQzoRKHDPTVhc",
  "key32": "4hBDbFUfYQzAJHvosR5HsMfj8P8V9XTJDLb1gJvuJcdN2MKxqr5yJQ5qikawyKGGABvHDxsdu5X6oCSQLMFn1vCF"
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
