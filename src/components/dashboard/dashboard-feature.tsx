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
    "4XtTCEEtb4ht8xzZowpdtKwde5N5NxQqofcNRGReBTYqrn5jAntGCQF8FX66UBKm2aPG3RouxdJTUfJdY3xLu1wF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mJpwvLV5EAU5tDwxtNrLpykNcxpUFTKaG8M5bTtKq2NKCHAwHk6hcCdtAU6ZMsNoZPyg789eTNiuDxNiEkoZaJA",
  "key1": "5uSyG7QhU3yY3RoqR7ieLEAjvovfnySjJNapnhCjGbBMBGggA2XdXsDdaF3pCUfQ9MAuE9D38aw1h7nmn1KZusZJ",
  "key2": "23osR38CBpUbTngaLQTfno4HyhGFYdq1RcJqECf2aKi2HxDbGXJBvEjuPYURhrLjdVWg5nnSzmww3CTxo7hZWb4v",
  "key3": "5b5HymyJqTNUaLXVuWstoPfG3niKZ7MygXBbMrYk3aTpaJsWLu9p6zLHQ8Uy3CCpoekd9FPUxXDLHTaaeivMVcr5",
  "key4": "37SdHkTJLZiVSDd8r1NSiPJq2UvWwxuHSMH27jB4M2XY49nWWq5Ave7gNEtJ9sY2d8TY39KwicXy4Go4BZEz1GZb",
  "key5": "5n3a2j6z5xpA1ndHHiQuTpKaKL1FjUMGrx75cUgLFDBCNmjwaE5jvDdeebQLu6pzzjHW3sqjWNEmghSHWkdaHsA4",
  "key6": "3mN6SuX9PnednwvTjuRqJB39zVzz3sDBVxjUnsNFMdbuwKogH2DKc9rqqrif87FrenHmhDtnGeiTmVsJ8tkFhT75",
  "key7": "2A5DdvfPgbTJDMMriwadzhUAno3b6W975Ah4Y6aAzpPwSpvSpkxqEnA3DEQk93CWZBq6ZnQKKH3JAxZEDyHfG2r7",
  "key8": "4fNv3DLqpxGRZfJSva9HSE3BxdMCKkh8Us2tjHb14NFekmD72P9deG5foBmQmWJjtpofihfybvYVMuv5o9CLFck3",
  "key9": "y889JB4EgDA51ktHZDRgK4QbDTmR2jsJQJ3hq6diDEZohRCTMxNWn5zoqaTGasRPsrNuN2cT2cBuQgyWiTrVUyR",
  "key10": "4ce59oAtyssUTE95s2s5pxzVRdziDqnFErvTN3FPUziEMKMg5hv4mBEiPaDavNjeNctxxRCrP9LYgdHF4vVzyekb",
  "key11": "3jyjsA2qgg4sfNMimrxiSLnimN2xkUaeaZwDYB1HztgMbLgSHT4BHE7Ao9bz6DXxCerAPUgs1jCMm1CKzdKaugk9",
  "key12": "VdMUEXvs339XEcRLXW7fqWHNJsn66UnrR5GMk9Z1LmEevR9ajP2KwEufoQWUxkXASTBojzViMcjJ69zQxtzZdmf",
  "key13": "56XWz6YzMA5vMkmXkjntwjdhugMDHBFp7vw7JzhDU56Y5QH3tzZHzPaULPNHMwzBQjbLS1n9GwMBMKgT2y4RZZSP",
  "key14": "3C3VtpSP6bBC2XfSHMgHiQTBmvAvfoQ3ij279fkewmz7ZQ84phniMHS3aiH8GJNfBk6KYXEfW98amzeM4MBb8wfP",
  "key15": "2exqK5YLGEizkrsnjKGNqSTTn9i3WAn2m3oRWwnEt11fvX4MrHyC7hQXS8eVNm9PcB7P2yV5EcSHuaPrPANQGDce",
  "key16": "5VG2ahy4QiQ6SnbHty5giS27mvTxQXagC9R6xcwr41JnMHWufJ4jd8X2koQzTrFpcxVFa8Z3aAL28F3TaiBXeGCq",
  "key17": "5LFfCpzWqASmhCDrN2FNgPKHRruMuzcSzVkUYukWfTo8Y8D7xc2thVj3PWCyFpn1fdKqhdXeV5z14inWCdcK2uhY",
  "key18": "5eKcAsbH1YStxYxbUgw9NZU59LvdiQUTEzNhRtCkn6Q8qABFfXumkUau3jTKjQqfHS1PS2RGyPg7E2BgSUWDVZvb",
  "key19": "574ZtHvzdsUAo155gmC4u488KfQs4kZKRdgm3ZzEG6AkshVi5t8Q8qqRTX9CzekxSq8aMrcegJEKdEmk1o5A4w8G",
  "key20": "4bPAtUyyH63PE8FTZEiEGQcx8RJGeF7EaRoW95hY5LyVZG5462EH28Ffserk1sFCTW8V7ojhizB48TWrv3NbevYR",
  "key21": "5mD6bynUgKPbmPpgzfz1onSdgcXNRDKLSSzGZVXrvdYjaeEAZ4SyJPy6dGzEpfa6ic5KMDTZCngjVLichn8CZhod",
  "key22": "UUHRCyZnjJPAZ4YfkFoRGgStE5uB5qVmCt5AsnDbHFEmJj433eW39o1tAg2qaSByZAcR9xzfpNPFbNCb4wcwR2t",
  "key23": "3W8m53eJRrbLShxVrG93Vka6Rk9Uc6z7jPZYhj6a5XupMza9NQM7ACtSh6CU7ba6xhveB7oNeeWu3tBYL9VuECEs",
  "key24": "3i3gDJJR6KZ7etrQVvoDatrQKqwtNCeA1v82TtFcC5bhQxat2ZPXYdRhC1QF22f4pY7TwnUb4oQAbKHKKMaLyPvd",
  "key25": "AC1E5o4v3mTaJQ1nyBhdSBXJVSXDfxFuj2aHKRRDmjoRrxULUgm8uBEvV6XDfB5Jec2HQE1b9qXr4njxuNt1b6J",
  "key26": "4pKc4kSJc67okcSsGg5vjjWWxu1Y23NmmggBx84QxiNdxFCtiTexBwkm5GqMebq6QQcoJQns1L4Sr5Z53a5ritUk",
  "key27": "2DnWyjJfKU5KPyuWKk3VoLfxuqCACeFDfLM8i8BzVrqQVB8gGtV7XCmzKWYR5artd8ra2JyaN8gh11eLxYgMmMZ4",
  "key28": "cu4VjbZr6B9hgADZV4mZ75LuWYpYJb5oRR6Snh5fyPYehrhmbEvQ2hZjGt7Bf5ufaAid4iVpiycNXZMmshYSQ2h",
  "key29": "3SzbB8YhzRteJT4iCnTyBDqbjdt7K3QC1hf84uuuQGp82XSKxxDJC4WNA6c6jnYjZji6V2A7cFxUkGsRK3Bj4iLx"
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
