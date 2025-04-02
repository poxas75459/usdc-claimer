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
    "2vTe5bRyaeaV5MBi2FJqbqRrdUwGUjXNphB6dijeV38t5pd26VMAgChmWVgc98NnMDVjapSC2BzQ2AmnxBEn6x84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UsfnB9WPvSYJejtHaFTUMaLaL96RfkRBnnz6K2hS2UiduNbrbeqDfZM53R69gPvZDT4hdkFQYcC4997f2idmmWC",
  "key1": "21fUyRBpxv6wmdtJ4vgUzr7ASWBGYqEr5mPEfQrQcBBqetr6jXxsQdU6YNDMnfnpQ3FbMELmbSLF4qu5DBk3fbZU",
  "key2": "5qJsxJ5448znCiuuddkimKqszRnFYvj4AfzxmhmXL6X982JzpkFmyMM2aU3TN2wqaafiBTUX1b4WyuqbBtYaZJSZ",
  "key3": "4be2Wd6DAih6Si7Z138gaCTv3m91Q9ycLG6Z3JCuiiHz2VZXRbTBHEoAiFKe8Hzd3C9tQBMDqR2SXSo9H1Gj99nr",
  "key4": "59AC4WTA1Ye87rY4TUgq9b9Tk5rHwE5HkzvNTtU65iDUhkThLpjcG4if3NXrMx7L8iZhQnbGoA7gn2s4tP2VAAbw",
  "key5": "5AKyeY5CYBXzoGeh1gEDvocvtvn5KGXnHoXDzZvKU31ACRCiLtPwAcSh5L2avEmsG7PmHVx6TDPeYgr7JhsTtHpw",
  "key6": "4vrUbZQ4ENpiZT5UCzPvGQxhQ5VhVx27D1pZjbj85xYWigjB9B9szdnTJ9YSHU9EJTvTRxsPYY7j2FQGzWT87My8",
  "key7": "4tPkPPULqc7z2y3vqRohh1hGR1kmQm4yNbm2vVsJNFh6X3hJgm8ruyh8cVFT3nAqZS5UnCBDTJ1vfvsBFXAzvL3t",
  "key8": "5S8N9FHcNzDvqFD8NESweszRSBHC4K3cH36ZQzitwgBVFCpdSH2YwjzdMt5BtMGSaj294VTpNQQ4cHucUS1v6dRf",
  "key9": "3NQzcpK5zy86yA5mQu3fPtqcA1EXuH3eKGQXUVLZtJeFapyUySKWSwBAQuQ3W49JDMnmT4qWGm1EbS4cS31fa3Eg",
  "key10": "LTszTrWNQHzRQH726L95LYFGjn3oPLd61Gp2nEV9N8BHs1wXS6y5aKQ6QYtLsW2BN1dXvQqQZRnz6BkPZecttFy",
  "key11": "5Etw88nmR1sjG5MAT5zfY3CJkGVPb8KS1B8NKh3To48rJDW3VC8WTEXm6TGnmjMvXniRiXM3R3h2BRew6p686yqB",
  "key12": "4KeUSD1m7rcZrAhEDvc6ADRcEsAt71QSpXycReVfSJUCM1wmda2YJWbydeYP3LPbJNSaEC8jP9pdQej3VVJkzkrB",
  "key13": "r8AwmMxhEoHawVzhM3Y5iMGUceXtAEvXNfVFVKcU49rAjXiET1x4r6D61wAkXj7DuLp16R1PEi26gFFUpAJyNRa",
  "key14": "3cSivX6ERV7uFVzQkuG6s6mqdzkSFtapWdsTVcE5NqvYR7b1wGNzsUUoPCTFVBPhN2wpMTKfmA71ptkstde6BHeV",
  "key15": "3UAYMKNTVwgqj4xhg2nQ25UGPKjiAmUg6eafP8eVNGsMBpFx8vqJvC7BVJvhw1Gh2kdvixBSmCVeeLTn2C8TCndm",
  "key16": "fzqQSboV33z4X7HRoB5Rg8EcAwXXacjienXjde6PpnB8YkoeTcibMaS6nPQQwGoyjdwVfGZqmKrtYNHUh1E2ufb",
  "key17": "2aUUf5pCif71i9MQVXa5AUz3jb6s8uQ8FQJL2XJVnVQgEJT4YgNQsJkrq6ResvfZAM46uExBMw9nN7Voj4JK13RP",
  "key18": "Ew1yRrBvdQzEYJZzBNCXB1rCkwqAexFh7XW3YBHy8FHfFuye62HHxfx5FYCExhHTjXvCF2ZvQ8TZHhGNweLrBHq",
  "key19": "3mRNiUQ7yu1ss9RcjiWv3GT1syh3cLKiac2bSHqJFiCN4ciUErSdQdGWb4hAhBZS5wk4FHj6DbmqcZWY7pk3rN2L",
  "key20": "5oKSq5kAWkQhzYYuP2i9wgE6xcYUPk2Bd99oRj2pECHXXq5sQLVZK96u96fRixuJrpV9rMLPg8rWUmXbGUWGLHRa",
  "key21": "23RYDUGmVcAHEHCCU3MSkhrSaWbKCy7WheAH3VkUtivfG5XMiBBmH7PivFjtdMLy6EiFXw39RaY4WVdCe8fP8f7k",
  "key22": "2Hif8osNuwa95q5LeVWqaiBArXj4445EVoNEJVejzcJRViXQt2AEiPJisUm2e2UwnxjWYENytMiCVSu83YTFVuwZ",
  "key23": "4N7ywRmBKo4qNQjznVpc5k5m9kcLZSXv51fa5vAUS784xM5GoLQGq56aRq7oUBGXVHywv2CGrsDn6jJq9ZBiXAvA",
  "key24": "3AxXH6ZyDr9Ed1eRxyN7WFVB37qYzoc47KupyqgiGhdye2Fb9ssibMTnY4x1HWCR5seFhyBRqoY8RLURYYQeTaYk",
  "key25": "2vTywjcwKM1Ddni69QAXhQzdLZyHPceya7GosA1p8skrEgtVAFmWipbrZtj7BUXnixGWtxC3p1HxY9H6ugr52rZu",
  "key26": "3JQvnSc7pEVaHrZF5QKFRQpD8F2nza3LGpyLmDKAGDYkGjm2bBUNnvdgQ96th9NTsvSDCJ1uMvZfZpThYSu2wPF4",
  "key27": "4qNAaHTozLvvxU6fCE8jZ4Vz8vfVTyjaXhJhNWkuYecVoJb6Gm5ons29jzvqHeyaniidCYRJm3nvGUFU3ydJ78X9",
  "key28": "5eaSPCBXaNKNhyzV82exPmbyVeSbC8MpDvCtBWzdMzbj1B47sUwFukts2xCg3aqniXLcGGhCErMAi5mKqv9Zcuw1",
  "key29": "4r1G7auMkgxDEno1j3asJjVV6xRM9kXnhaJSDTo232EYkZ53PGLFeh4DhUSLhrhVeQNFgPvngjRgBvzNifKcmx4C",
  "key30": "2M7kSuNHbeKySrZvmCx78vSHsKi39hkk7DmQ8i7LfBD8JaSSizwgTmNpLcodFAnVqrJTgAx9f7Hqd3GYu6kgx27t",
  "key31": "4gCQeUV7bPXTJhLL883SiDB5oC58YzqyfcwnDsBRbyUsRaRjmpoyZM2A1Yd1gYa4i4zqSCwHDzQMSxBEv5Pe4qUh",
  "key32": "37UcRSiPJCAQLQ7RiEYnJmLV8xyHHX98PqALfLBjSmFUDznburaGfwTrLioExfUWUAt6vQ8TS1bhaK2JsNNgwGFg",
  "key33": "4KyX179B78DMxBV9Q4RWTXsBjeKN2sxp6VrWEXU8iy4qTEqqhvA18bVBnJwXzecGMQEuh1UAftk9NcqH9HF7YrZQ",
  "key34": "nJmz9LBaKo9rPKFDddTm7QgF2qguAHxhjxJ2GP1ucLY4WubeGv4jHNx9NFdZ21U5usRoiXxcpW2gRnDMfHnbifV",
  "key35": "4ESfmHuRCQLtemSWLtTv1jk2WWM7GDXhdJj3HXrwfoHRzCiPVo7XoC67AWbKQTbLseDE1igoKAZ4AR4D4D9NV9B4",
  "key36": "3VEDMPw284MJSygyjdrVxtW8RjAYwkCXmhF9bfKHXNbBGA7Z8D8RWJKfAvnQzY15in2oWJYyzcN1uyiWe34RenhC"
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
