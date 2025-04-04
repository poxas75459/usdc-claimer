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
    "3oqyi2ixJhbLsyudUDweY64qMveGCDzLnoYHGMqNw1XnomouPz3XaJVZ8Cr4gd339isQkXWCr7Z5FWkg9MzhtRcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DimKikuyFKuXCkCsgzrqXG12mH3qifQAgwpEPky28ygf6L5G1GK6xkt1q7H4wQSE1PrPqNAe7kCqtp6HRo5aD71",
  "key1": "4BNaoKYtdHW22Cb1gWsfa1Hw429w3Kkytkr9QbECPHErbJp3Q7MLFzhd9oCNhw9SiYcJdkMKYrGdPVSBhPPAwM1V",
  "key2": "2e5aN5sRm64yFxs3sQQ2TNh5phmjo5zmVJKBrxKXNdyPBMfJFsLvbJaf9gksvZ8nuZtdfxhCoXyhMaGzD7pxbZJ9",
  "key3": "281mjyBshpgRDRQG7RDCmPrA6nvCXKieYaymYstBpwF1nqKec6j8WrWuuvYJDr8yo48ECH5cCPthFVQZhfBEEAqs",
  "key4": "5HHuMSFQvZ9hwxxLqFFi3MHqc8NVBw8BG4SNm6G5bwMixxuj9fG6ihoetFGipTkXjhvu3MYXKHyYvNok34dHfCKo",
  "key5": "2R9oTzCaqP7RgnZKp7RYiiamRLVg4wfKWMoriX3ZsQth9FR6ZzQkdUXwVHFedvYpvvygB46NcHW4Lyk6t25Ry5Ek",
  "key6": "3CXaTAH1qNMjmew5Y8zqKXPGfCCnAp8FbqcEWpJHU6we7Go7sW5gMw31UwE82HJDFFUMdNPvmDBaQqf52phVQydU",
  "key7": "wbPdUpHXgdkEPdh1zojaaqfF4XuQE49rQnS1Td9wzReTod5xhVJQpD7KzzPduqrvwivGRp6Zpi2HbvhnpWENXfq",
  "key8": "4wqHdQxEWwWixWM5ywqVKzUaMmC4bFrwwwLkC13jRTBrWifmkqfLgHwSWWkR1NfDswjAvchS84G1ZDDRPvpEh23b",
  "key9": "39j1CnZPb12nWDV9MguJ8S7cXvPJcmah9q4nuM2mowF8x69uLFAGBhzQVdEnueFkvHpYgQUFRhyttkTouMpWvkyu",
  "key10": "2ZjmBhjtAS4LJk8w4otQzfe5q5Tjgncng8fFJmAQS5AfPf8foprXmvJcN2nSjbegZA28jt1umEVBxC4rJWPngpR",
  "key11": "5CkYVyqTe2KcmoGQ9N1tknJnncauUNPC9Cob7CTrqygDCy9LNQDfCrdDw27DnXAeZpb3EisPmsq5aUVVrpLyP72y",
  "key12": "F3d8QvkZWtPTwyQ42eQ2KQvRjp7rkkaxe88f9Z1GeLxx8y7z3xjPmuMn8GnsQExvoGnnvi3yL4hpyH2M1b4YYfB",
  "key13": "2G9fsRFSVZEZzG5ffEtFMF76SHcE4KrV3P64SAcfhNfx8dHcFxSb7J1hFx67bQD7Mdk986T5RHovrer8w4aarJpC",
  "key14": "4EnteK1rUnnnX7RGPSvGRCB4esK5XhEUX64cfVqUp6WXFv2t87yn9MBi99vxPSQ8XNiwW1fc8bv5fxwmNV1HFrHz",
  "key15": "3dibPrYjn4vdgrXvWDe8Q9S5zB7PteoVdvFHyiuLALpJiTFqMTJEeatqdbyXprjSvxXRfHcYpe9tAot9h9MyPYgx",
  "key16": "B3XGYGXJfhc85LoYtsS5kBQ77UBzU4PpS3xSGg2P7yAqpHT9gekjwhcpkovMJELkoBRe6Cd3KvUov15sBQnQ8cf",
  "key17": "6W5jjCzawKm2DDBWTCQZmZgzbto8pgPFkgoS94hkPpDGvCjvBr5D8nATFasGeerWfaWTcF9BNY6xrQTi1VSBtK7",
  "key18": "2nfrpRm3CKbMsp47P31o9etTFHrbbreTfmHsv2dD5abejQDRPVCxZqfYaSDqc9ucBa1AqUJBRmnMnhkx9i3ksuwi",
  "key19": "5SARbSiLQDDe79X3UWUTcueF44A6Xk1PyWVoYHMVVv5eaxzFMHRxQXff5oLk1DtGm4AnTKtbsLn46s5f1GUwsMsk",
  "key20": "5Gzz21xnosvt8fnP2E8PNrd6XD6qLFzwHuY8f1KaY8QvPj2T9x4XkYVVU5zZU89n9tmkE1rzmevg9Uza5Q5CNhpw",
  "key21": "5yVSmTqJ4HgDAgRGQzwu7FSdJxSZHN1jZAmDugSDuiE8eKe2PS6KavCRAszHRS9EuMpNDYEWQEJG9QQsWCecWMqo",
  "key22": "2P6NuMN6GtPaHFNX7FQCvq2tn2oifaLC9rTaa8JuEMnLpEgouqbyfVic1crxNSqbY5EzwMo4gXLdB2hEdutXAGAA",
  "key23": "3nWhJLDzaww4s7T6pf22gSDz2mHSjgx8mR1ZwiJiWmoJSmS8XoCFprjAZ5cfyhH5Q6J9WJzLsD8qzyh3CC9nhax3",
  "key24": "VrHh1T1AEBUDiodX8JBMgmmdEUkRHGULM7o4oCfpKvdjZXQASq3fvDyqMotqMu53Nu4qsEyWpuv6tPQzaXN8CP1",
  "key25": "2LrBnis6zfEz5mdUpXjETcjV7jvjrYHH5U11nW9rSfjtShZq9vfzLqHYoVCkJRMTjsrqhfxTPbdKT4PDhMhomRaN",
  "key26": "chuXFbajTwQ76VqnkHMRQpCLnWyzhBfPY3VsokbXCqc6PEFTaDzF5RZm4upMaYUjZVeZpURc4FB2tLTwJ39xTUh",
  "key27": "4gU7DUmgRVMSdSFdCZCidgPaHQxpZvM8A1QpEdpukpq8gZvUV2FkkLCEkbdttwLx5FFPds7wPq73cQ5FJ87CZw3K",
  "key28": "49yWe5ytrbZyPQSUGPSUFKi9rd95vJYSt7bShj1g3nXgCjv8qE4ZTuWWTfEyZe52eanVN1uJZ3t8gvh9f95UC6Ho",
  "key29": "3yCe3graCLCgiWuAFGo2kGvxYYbi7C9kwB85jDtZMmX2chNypPRTTEWbwombJiUJFtdtswtjQ9aYaeKR5YYn2TmZ",
  "key30": "5RuGfesH6kWgBfDnpLE93JxmTkYGo6cBGBXTAyVnmbDCJqC3th5bTpLn69KXqv95Y1dABUB4As3jTCr8wiN3uesD",
  "key31": "MLWZX6bLqMoiuAyaDQ5fcXhpuAukVTfFkSrPw1NcdV7RXTZq7GD3WELRFSCo325sLVRTCoGMqby6URLy5WvwF4Z",
  "key32": "VXMkJ458rR1yW2Bj67qtWCcxZqXSLtBhnFdWSNF2TomjyEeMYevVJ56FhJXfaTWiAuEaV3H1Qd5fEZGYGHa9Msr"
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
