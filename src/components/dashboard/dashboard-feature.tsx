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
    "4m1B2vgn6EoT9wK2rdrXkY5XG2K1482u5makUMcJtqLFx89dAL149vH882Dmd62o9co6EbwxwKwMSNfTEs585bQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3arDHJkntpsemzJZEwVPKJ9YyKbGJ1XWCsqJctPLvqcbE4vMfTVfAeNBfmXBng7MBbNgFBXpw3gcTEL91wS7NXwa",
  "key1": "4BZ1ahDG8D1kR2mg4zieWQRuDLXvn2akVKmppfGfvozX9jT9sDRjkMfQb61hNpKqd8qLKz5KnP5BHqmCsRbzL9en",
  "key2": "4CWDACGNyg5CdDBZtqhTD8GrkS6dHvC1nGX9jPLRGBsjXo85DotBTWy6qWos8WaNMmfYhYBYapbH6BnhbZZ56E8J",
  "key3": "557hyCkH2eN9skvzesdxXrRt4KXmZ7zgy5DJKeYBFzAaEtBmzbfZQcv8GyHSauhyQQyQ7m87wafVrr1qR3sgNsVj",
  "key4": "3CuMjX5buJrDqYwYT5XwgSfBfd43Egk9j2c3zbb2LsgxSwxwFuTcYZjFiX2kSwaH5dPCdQwaFLUnVNckDcGN3gWk",
  "key5": "5ibD1Su8w6ptfpVEwKiAim1UxqCwztmL1cdNiAfkDivvvv8nYUQs1e8j3ugZef1WxDkg1XhPZrTSYcA7bh9gXkw7",
  "key6": "4dV9FumVz8gyv74UntQuHfB2Hx8wG2eVfH13mGfNKevw1hT4K3a73udft5HJVtFbDc47LYZvrSzYcanc1dxSERLP",
  "key7": "4eMeqADW3tj7K6hyUFcrrxJ6veN1Lv922XB656z7r2yJg4cejbE7KdPh8ed9Fe3mDkApYbioiobu7BhXVugpbAR9",
  "key8": "gob9b8BXj9zzgxS4jzpYLLJfBAfaaqgiS6TDxwMYxFcrZaMQ3J5kzA8ADu1kfcCvxBK2FsrpDXyws1eZaMVXiVu",
  "key9": "3aGCV22dWTsteoHrsFztL8wtJyV6x8XTo6EuxaZoXS3J4JSR7tM478NoTBdz7avC8yCLZGsGcvV6yfi3UJhcSfA9",
  "key10": "2p2y27ctHsN7aerRTrvKoBocjeb5GcENYSfJFmjnjaG2Zvjt8fQnaogmppsLxQww6DNsTee9Y4WwCP3dS16zUMpB",
  "key11": "2HUSdcFWKhySd7MRwgcRKtRVRvfX8y4mLvV1WDS9C1hBWecSQVUDdQ7ipAVYpHqnCVKjCHM9xTkXARSQEeC3h7pH",
  "key12": "5ro1CKtXXCc6TzXEXzLAUGMgE11Ni9smQuTkz4oufKSzrCPLAt5RgYhqa25SkJ574cLztysZNzveRZAfrC6kJKoP",
  "key13": "Sf79GChDqxzAJRsSHgfAtCrfuLcCrcc14tiPZaRbvTevNfJMn8sKcf9WSbEaS4NAVWr75T1mZBcVTXy21nGw286",
  "key14": "65UWR2n52M9X2MXbhZyuXUS86H6wRjjWdQXKBVAYXBWmruNjGJhVEUaFKddyFTzfZxojDrr2Ui8NbtYhnsNuqN8h",
  "key15": "2zBpuw36a3HY3aPLEDUMbTqEVaAcov8jW7SME3BLfuSbEakhYRdN7k4Xj8wutXe7yh3MFvBb7YrdWFrHxSchidvq",
  "key16": "5YVTAR1rPkci7LhxtpbaAdUTxb9YkqbawPg5yxWt4CtoNgtDpBLYAePUnaa6tkFHeq72aNEXS47bS4NgamwMBWaC",
  "key17": "2wydj6wFL57HJ7Hv8pjZtUbKhoxrzrXa4EaZed7dhHTBNXdgJfnUibyQkCorYMe72Dpv1joVyV5u3xKwwiEck6Cy",
  "key18": "sSd3ovuiNqcDxSzUrqBaXzLGnGLytPn9UmrRwr7u3pZMZ3eCzZeeN2aVbPG4Ef6t4HjLAH1QVV2ztSELt2UnehY",
  "key19": "5M93LNpE31rDoqeD9MFYAuBshABFpmExMV4YfTzYwvQNopoKaVczQkihmfNLPibZEa6GfseL2zyXgrLBW1bL7GNt",
  "key20": "2URHkwEvXXL3MhTVQ7eptHmYvL3d7QZxezysALzUzhwrtvAxx4Nc6g53icCR6sY9BiripyjvLYTqNiTduG9UCt6h",
  "key21": "55MWHVjprGAp5Eq7Nxd3wZL4GvPZ4zMYvQ3QNTH53P4jMfiiDhMbrRbcGcZUiaax84sb2CNjZDZ8WxsqnnbW6Jya",
  "key22": "4TcCHRtmdZ2kPrRDmWUrVihKxDHBCFzpSgdCCSQqdLbGyGEMKbB19KQPE4B3g7YeeJvKqt7SqkswL5topXahAeaa",
  "key23": "5JXhkvuG1UjBugnvq1Jt61B5nFSwhrMRQj8kDjNN4UbP7DJs7JSL2ZbDWwtDKJx2J2EPJ1scQuMMir6eTFbCQRRU",
  "key24": "4KtRptwJ9ESWfnSBVXD8BiqQnCm1Qg3Lzgkam9Z9R958HvX3F5x2ooqWPWnSSQ3ZNwpyGk5k9BiekgyPFQmZ7JXS",
  "key25": "45viHSEXZsr3tgae5Qxpb3WJb1UMzBmjmJ6UZTg7Kn3egC2YKDLKSvjjN19TT3sDKRzoeEWr9yRRy33apB874Djd",
  "key26": "26nq1qtK4u9uxCYgnYVrujMuXUSx3EkRHJEnZRTiL2Wy2k32TyCEL2EzZPjUTAg2Qi4aosg4SYaTahn6xRYX2RXc"
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
