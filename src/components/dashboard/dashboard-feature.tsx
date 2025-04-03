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
    "C2nEYv5UZdm3Drp4BgK2XkCkphbudUp8g94TtrRxZNfLYbZdf762wBJj2kXbB3jZzxKVQfMF9L4cxChAtFYHY2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38QtSm1EDowTMLaP9sydrFks6DyF5AdwGngscULQCS2W5wy6umeukpQn6BuuLP8N5T3Uyn6XXmEnWkLRFB3dKpny",
  "key1": "4broUw3LBzdDBiaPY76XaD9K42G1bjV6JCiC9844fyHocnovjVTB5C7kAn2dDR1FPAaZga6ZQg8zKkCrZ69p9RJK",
  "key2": "61XNvHJtuUApKQAYvAvqXy9ufu92bZ2jEkY6vXXp5VwiJ44mRfkoPGR83Vg5Q3sGhUiVGvh2hTKGeGxZkACSouiG",
  "key3": "24wJCf7NEQUsXitbU4Lzf4pLZo5vXNMfBNxyVDJNftCie6FUghDL32oGPWfSP14L4YsEwWZ8iCy1E6MpZoVnFqHL",
  "key4": "2HpGMGjJkAfa98FPTKeD3QypWCQkT5xWFm9ZZHnndLAD3uWzKdEPGueqLnb52YXyPtpG7CcGTqemj7htiowT97ZW",
  "key5": "AtTo21Tv6GS18mmU4dMG7cU1gxtxjewptg57gXWko2xxnQKLkm5FNrNYkLtnujUMYPFrnqsm8WfrFdaJ4KfGT1m",
  "key6": "4JzsdoVjTVC2P1Kk3SK5gkJnEDUxHTSnDTt2LH1mhn4Gr511T4RuYhhaPawoXWtK68v7XU5AT7AqFvSU66Z1i3pG",
  "key7": "5uSejXfYKC7AdpPTZBGiSB2PZyHcZN3CpAdv8jQ7m4VnLo3Wcg1Grgc9nAb83buoW7C1nPymcoPnSg6mAJQgi85v",
  "key8": "4Dhhqfy9TRg2j2fvVXAXw7euMFYGiwFcaC5eCeZSKbEu7gZcGuvFA8e2JfLddzv9CVEMVDmRPtxKAKSqtcwuFhDF",
  "key9": "5vgL99KkCfcPE6aJcDSTmM6H1kwHXhnt9DZHcawjymtJo6K9cWYSNZXa6qgNesegCoarraUoU4rGWWFCXYfiMz7U",
  "key10": "2eDQZaDo7pwTmNr9KKuyRESikRfFJA8RnN4EiJhhk48Aje78X29fTndtiJ8Qcjmag5r3kAovCzS7TYaZVck7Hp3N",
  "key11": "4F9CWp1VT88qghNCDcCKPDu66dUry8zYYpajy8musAt5GpbdYWkdtzvAGpKd5cer8Si8dSXt7GS7XqEioemrjNaq",
  "key12": "5DBZR8DojULiHf1m8thGTrQXTGkCSuCoHKZ9yRah7Sy8KnSFbJNUCAhiF1MMc4VnpSxTFuggNKjfn57WgrU4zpSX",
  "key13": "62zkD9F9GvWA7vF2Ny4ngqgM1jL66JHJ1mE9ge1h6bG1GGtpVVmhHeAaTEMZrq7ioEGV35xFQdkD9MAN75qNdqky",
  "key14": "36TARmLfVhWDJasynasjHs5ymxtmGzHPfwtRzdCem7fAY1reKqp4DaSsCi9rqtM2rUVhzYxSAUqWVvhMDbJbe2E1",
  "key15": "2Gv6uwJv8QsSaxU5B2gNoXLfCoehpEh8xHt9jG2nsQRjj2gC8nYTjBSGJWKXzNQDc8byn7U5iJxH8ynXZVWvwRs2",
  "key16": "5zKBomiswLaivCAAG7G19Pu7DHR8Pk67wbCB7VBbsSMk7wVNYSLcbBmhHyTJ71QBQxs6TZkcdb8ZLJT8yeDaLoGJ",
  "key17": "2RcR4KFevWM8tMuQ7p2uV6ZAuA2NLCgCDts1Ywnn7eY83PGjBp6t9AdGXTZJbRCWZmF5kgwBZQnZR4bzGVeSTTz2",
  "key18": "4KrbHUPerT1x1QbEYrVy9b9Acj2QobpKR19RZPCYPfzAaiom6BFpLSgBXBt4rabNvhmeceeqDxVSQ7Aa8qtz5qTM",
  "key19": "4RT5Rgkp8jEsC4frDXtrmHC6xWb3gP2m3rDuiuKsjMcUHBoiquTD17fXpY5ZuCr65z4HNqc1BBytHRaXDn4eNzhi",
  "key20": "3MzHUMUX56Y7ihMWtSepF9dy5CKfqMXVTpUVjTmfnjVQRoEDpRSjH45rs1cKGAuJsqAzF3mEQNVXQf64XSBHC3Cs",
  "key21": "4D8fNZ6JnD5KDAcN1QQmQFm54KxCHKRTNxYf3ZWwmkqCpXKjMpS9TU6MWqsHey3VvUPZBBqxhs1fzHPhSuaMV737",
  "key22": "2MsxasZ7qwPBWFKLxP8q2APBPBVALwUCYQwyeta9pdLK96Qi9nkzDUDa1b1wqsHnqudkVMJNg48L58VakbYYqahe",
  "key23": "3JqUcBVwyLS4kGfFw2BhaQZrdJWGdGHRn65Yo3vjy27wm8xBxjwWCV4oML3DRY7MePTR5SftKT2EMh3P7sLMMXy",
  "key24": "2tFXztYi2zpsMY2KLMjgSvQpfefUqKeCPsPgTS66HDLvNSpEwaqtScS6TyUwv6PKGLp29fJhiYkhtVEUUu9wq7cg",
  "key25": "LZYHWxDfrav84uN8sMC7qZYutNBQB6cxCnWFasLGcz4PNiPgj5kmpXHpXRzSyz9DbNXVE6y8M9YcqctZm9EBNbN",
  "key26": "4QZtT23B71eRf9WN8SA4HQkrq3RU5hK8teqgUjiTjYSbhee35eJtonMDBGzHJpxiUcE6gVwm5gWwWqe5PZ7gHxUM",
  "key27": "4JWypAKS56WHkFPowNvf3H1RH1CoM2oNa1Zr1FVBS3PeCzJrSgbFcMLRFX8SPTsHzF6eQT6FvG6haWf2zu8fHNSJ",
  "key28": "5pkcPcQQMyaKaFdiSWy52LAxzMg9LopHXGwSV8TF1igRq5vdwJUQtGiPvpihCb1FmE7Agoy7KwrC4UTUohBKtH49",
  "key29": "z35Xd5hbtHNZ66j4utbyUwBp9MYpWZxdyzWK1hcatBnWPu6maR4tPVWrxAoTpmr2rHqic9nBzr9i41jNwtQvyWK"
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
