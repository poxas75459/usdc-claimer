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
    "N1NcHpad68Td7ynpfpDHSJBeaLfnoLuwvvPP3TEQqPowHnBhs19offfRdvs3bAbENr4NF71BjeX1c1XoC1Sd87w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MhXFBuLFy3C6CFM36umNdMX7HUxdGAFyi9eiT1LaZJa4gVhyuqAFeufEW1oSDPEP2AtXH5wnfkVM9vwB3P8ftoz",
  "key1": "3md9cUvcoa4ZDAvpXzgWgG8fvAQgvLrXu3Eeq2kZdX7cr1bU2DDvdtgqxA9bBGMMYVjrhvJg2JrUvfc4EZnq7yCV",
  "key2": "4Js9EwU7tnZnNeC5FPw6irnHcSy3GLkTpWJq5ZxDifDAsHsk2H2s8K2hPzXR4AaYddR2v1hmoWjEzkz6GqSsaaRh",
  "key3": "4HDjgnZtA4UHEvzXiDmWSMzca563XeuvinrWFuKwofocFgvZ5PpZK2shw8iHnbCZXKRq6mYvtGhjmsd6wkrpu4Ab",
  "key4": "3b69RWAKt9di7QcDtgEGNARdvRK84MnjQypYmzhhRcM7BgSmC45bTP8bRiaYDRC8Bj5DrPxLxkxQsFAh6rB4K8MW",
  "key5": "55asp8bAV2ymCtVrN2E9Z1jxP4YUt3VwvGQdSA76tfQncjrQrLdG2hHpvddk66CJXK3rCerKPwkbhfEyidfzbPwN",
  "key6": "3eiWqxVe8mCK2Lonh47GBpoDL26syRs9xHTitJfXydaiZ5rWkaK6cssVrNwSxDYDFixDWrXWjrv4q7KMt9Xj8Woh",
  "key7": "3ry6z1kPfrbYhzTAYcsbtwDza1KzSsFpjXavtCoFmqRLNTpVi9Z22bvpRg69vNi2c44rvGBSLkCYsmeGGiRNxYg",
  "key8": "4iC5zS6PUy7qJL1cxNCUnKxCiioabAbBQZ5rSRstsjGXSPTe7TRhaDRtPHLpDhRvvm3M8v6btBUeupcUApEnTSqX",
  "key9": "2YBNDjNCxTAQwXhnjCp6mhdhvx1TUv8M9y4DaPp5kJdouWKfe6Md8p8GgfPmy3MWUYp4fwvTWLXrqMiznWn6UpAw",
  "key10": "4BQEubCk6wxtkkvDtDFq8RrMYtAMrQvVXu4bX6eSJMnt5ri4C5HYoduqa2rZLdVvWkeYaSEcDjuB4ZUqS8AKQv7d",
  "key11": "5dwVxmxNXQQVtbFxM6eU1K62vmChL9TZ2yV1de2vgDZwy8Yk5bozRXFhKJoz6x1zPSweH8id8Hq1bLfdkR5CWBAs",
  "key12": "x9UjZi9zw7isEnuVLg68PX37R1RFpAyvwcZjZCdLYAdZfziwrmZhJNVscpttHp5NJugHJLGdwaSqEn27zqDk37L",
  "key13": "637U9LnfdZHMuA1JzwjHZpRzMrR2Z4bDGsqXZRsKFHu9dSnaQ49GroY1sbh3DeP9PKoGsphnc2k5T4HcBshLeV3R",
  "key14": "4hyFEiRLPh9U9ccEnAKpnd9d3vP4rPRqvW5WytkXgn2w3TQyjBcrxw8ebwW2sPwMPUvf4ZtfXLmLvdN9ckv45W1T",
  "key15": "3MHDaPuPFqgGrMthN1in5yKtA1b8qXa4WxyCDSuFNpfqN7yWtqiEVYmkJDdo5b3yQeNpBKzQTD6K9tWd9WXZBi82",
  "key16": "28vFEYRm4g5uaoYCmtFxEXAAGBpSDobZ9GGxeZncchHGqLHMNAgAq3p1ZkVBRjJxhhv5enU9zZfD6t6egbhWpRtb",
  "key17": "456wTx2hgSfoncpmnkJ29Z4ic5gwwkQGVYLbj3rQieq9T7pgArpSEVKtmvNNbVcMMyVYgD3dkpRRS8jgCics7ZKD",
  "key18": "5geJz8FT6MjSYECXFaveHKojMMopzvvzRnNp9uR6B8rVmSW8rMBSuwXcP4KwomE9qUT3VMD2rMjNsskY7Cn1FUnn",
  "key19": "3cHaTrESQY5CL6o6vkfVriLKVMZoZboVvp9wmQi4DqEvAXsV8b84JaKStx19JBd13cM4vcDtWpHeAVS8KJKrWjCx",
  "key20": "2YX9yRRUQij2inhVZJkvLUWVStwjvCyHv8nyWGuMYHGv1j8ZTdveaKwEGDictjveGZrwpGxDcKwCSCFpSRKaDwTj",
  "key21": "5U7UzRpJwXDRYxu35XVqonDvhYBrySKFbCKr8XfjZarsdbCEt6dJxPq4iF3J4hrqA5389xVtRyUBaSNQWMdPHU2o",
  "key22": "5ffDPTidemKZ6wzSSbEHwptc3YYnQkpaLBqKiNp1D6Ukc17uQTZEGZzVXfmbTp2o6ucVj4s5JAaTmeLzLPqzPG29",
  "key23": "EAjiGkRRiKPMzYoaTfqAtsiG9fnsRizPudijdcaCM9aTvYEcoiZa2DTy82adrCqqjs4RsDySqFhsuVhAspUtbe9",
  "key24": "2CCkd7vfv7Kx4kRisFKEnXzDueqKMa2QipST4Q2SLUECKLgca6owMYgm9fPbmkGwn4X2k2xLk1csAC24CHWBNmSx",
  "key25": "fGWYJ5tr3uzNgRvjEq1GPZtCPSDd315DHivKRkR5Zauzk7Ug44GD3FogpEoh1Y37L4G6XwTsBLnLQYVMDawBYy2",
  "key26": "2sbu7WuyPyJSmwxu5PoFUtfWYLtYFnqEpUq2ZJ3vCY6okhxHzzXPccGNCDgqmuAjXyxEhbQ9EGaY18n3sr7CV3U9",
  "key27": "2NRz5aSEySQ1SHDwL4xRfAcCxez4m455ZyqWqnNXaUA6Krxa9tMyqirQ2mdomKFc1RLYnKeTUS3obZrZT3AMdhcY",
  "key28": "51on8jYmA9XmrQpCmgeNKzVuj8hDZNkrm5a1HANAXuePBq3o8Ft7rbDcnJEYwCBHSuu1DZJknpPyCALecmQ3jDwc"
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
