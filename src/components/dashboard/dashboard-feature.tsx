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
    "5NaU6Aftrc8Tb2v54dzSDWmQqtvG7d3n6xBWEmK5hwzjAU2fjomGz64WUpZWKzn1BxUrUk89JuKoFPkes9nkzPqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nhJLcmGpKfUvSAyxzEL4Npm1cikSJBVNohSptBhYnvQ4T8KWjKfai2btD1dTFCT7bP7yZWQWhUBG3BRWqzquKqd",
  "key1": "4CvTriQj8SdQGoK44Qm14VHP9zPWNjzMUrV36qVBqEMDkzSCspYfmpnNAyHYvLiPHrpkzHHDSauCD9RmUU6xCmGY",
  "key2": "61MN8hWj2oaPSMeJL21EcHfScg1NyTerbQB7GEMGUXhm7QGaZfwpw5q64RsRQcFfzX6YnXTJ8kiWDuM7e4eodQxW",
  "key3": "3hrBdp3Rxd5e16rFwvY3P41F2PmPC5xYYUjdTeVPet7hDUtKzoyBA4qKmQDu7KbGVrQgtQUUPqEJi9ZjifB8Juyx",
  "key4": "4CA7dgEZUeHjUAPCcgBd1qKL96eKUCCo9jy29zQCmYLRSrMrfCdG41kqrwVGF4Htc8ZZF7CaaDLS35ncE9PmtshU",
  "key5": "3C7GBBBJ4ro7KAuTX8mPjCt1V5mh2DxkhfXgtVaosn7QYwLYwtivKpVMUD91EnBb8saM78kaZGjBkZEhfp2SQCCz",
  "key6": "2UvgNaPm1nVmxVMg9PPxqpVs9CBWeN5FdL11SirGrsE3g4qBZ4jcH9aRMhFqLNnVxzHL7YHFXz1tPJnXmhpXa8QL",
  "key7": "5BcV4emcBvbtfTSu9BzC7q6XUa8xqvGaR7X8a5EBspqLfRo66dphrXZxjDsa85wPsYBDVXjNCM6wYuhUC9dWUJcd",
  "key8": "5H5FP5uJePz5n4PQyTEwpsc5XarMNcokezTbdjWFdk3io2PDqt9CwJZ1uYBEoPZJJai82pEYJ2ENGCTGiidgrMn5",
  "key9": "3tevcJ6yAT7e7y8ptBP2Eu5WJtbu9DEpuGCMEXgtVaS3yGMXzhtbxvwrmUhGwi67R7EsCLg228EFkVn1bnGegce7",
  "key10": "5qtZkSKauTubgeqNz1E5ATR38Fd8aqoUHK31Qgm7Rjun6CkRDCbJgQiohXEPVrUqhqq8Wo1wjR7SpQTFTQAqXyb5",
  "key11": "8SFXtHvq5quEPrjUhQZdbAQjTnJcaZZYUB3LSAfURu1N6cRPRtzwhAGNciCGhh42g4VjYRTW95eZBSd1JAmnuPZ",
  "key12": "2zmcjm9D9rRci89LxS8AHUFBJvAePcTPPfkCMivmB1d49HWHuhABxBHe8fDAXCTSa9peMBUANAc9qKbmd2uYtbha",
  "key13": "39QwRHwkzhv95LSfkQb69kG6pAfnLxpFpAeLsmV66apV7e7rSftsqdVi8RSGTfqjsxZsHjDotDEuZzHHSuHH7X8G",
  "key14": "49W847EZqzdWF9jXNsauYyu4G3RS4tUtMdUU7BJVBrF2EA8j4UXvSEzffTdJsfVMLL3BffvmCWYDjhDr3SyJKFwn",
  "key15": "R3vRYsy5MkbjHNeGnNiycpmNQ2YHCJPhdtQTLgWBsE8CbMujPBPL7aRfpJyL5QVJx4bHAke43cYg6NW78TYNErT",
  "key16": "gwFTvr1nddftUshERWeumYiwGCjQ5NrxqskoYFJuBrYaofgweQ4Yx2kKtx2cEz5kepRyUWRedDKptVSu9tqWUVg",
  "key17": "5BKyCFUQUthsw1RXuqUBkCCxhEFxRs6KGhETKqBRha318SiZPhuHQcVU6RTSZDqHQEWTkeX3NNoYmUAmwUxLih7N",
  "key18": "4JmMswKM3Km56o9vLBoV8J57CkaxM2qrXwz1BgfM7mtwdyqR5pnMdpkdPo4VwMNCMDuwF4hNSQsDXMBmdf86mJWu",
  "key19": "UDkHbidPtNTui2FLcgRnDcyJhTjutikFiNg1eFzL1LYf3T1ED8ZUgUGouq1FvXmVEadVDr6vLT1r27Wqweg68dP",
  "key20": "u9qnafuQStd7LDBV4ReJyxAUzwa24smdwFh15W5E93XbwKCqom8N9QeG85JXvhiyta5DnALsEpC53GaFHpVinfw",
  "key21": "346byPaiyEAavVeeyUM4YAnKgNrnxuu3eCbCwzb9abg19jRLiB6Yo6bpP3umhnFwbDw1zo4KaMSTu2LbkkAQkxDU",
  "key22": "5Q3FsJLc1v2s79cxGf6HNE3MVHGzyU72X3rBZEowMRbKscSbgoogWUA3VYjhRBGDhcVZRVzxUknm4Af3PggCmVyK",
  "key23": "38ftZC26gcregoqCSFMSn1spKC3rUPFNGBryzdK65H9wSKkBNa4pezoRAL5tCY8bXn6Y4NuKo6xyo5oGrUTweHhc",
  "key24": "WSF1FVEy1ujxMAtFF9dSBQWjsUNvog8yKn773ynNGM73bhWyjfiVttbgyN3QLFDURdTiRTPRHr9L4BSDf4xv2cv",
  "key25": "4S5RoJWUwGBZiLb8uUqW4qf8HTEyDiypoHGHitmhMPgE2gn3mMWojCFF2qxUayTPJ5hYjbkpQg5X1CnDdkRj7vDs",
  "key26": "jmvizscxqg7GBEzpeJhpf8zgfEWaSWCvXPU5SzGbqYPKHBCXoXaDcLH4TZxEAPWDUD1gsW6FyvAKF9Eb2WFVAsT",
  "key27": "5yR6r8sEXGGBRp5ErXRwkDLbxfid9513wt65W5Yy58R3Jdk1pe2aj7kixkFHXW4DTS4EZ1DT98kjv8iiR37npbdA",
  "key28": "3LP8dDdbxaxHJ72mBZu29KaApQL5GQDFPEXFmUKLNUQv23ACD1BnkJjnehS8dawV5zLpuX2YPvd5q8C35hF1e4Qb",
  "key29": "28i9sQeyngv75CdghtAQpggvrXR2sXRK7ZAviEnBnVF1x4Gs1z2YtAufwkXse6DebgmyYE3YhjCTffe8vxFJgvhn"
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
