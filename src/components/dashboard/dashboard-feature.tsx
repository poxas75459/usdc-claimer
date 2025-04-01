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
    "5QSaRt2gNHj71KbnoFuFwhAFPogDarp1yEAHuMzwEvgbCLthGuTzsm34nYrNDmyh6JUGpR36KxPC8LAMmk8RbkHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ELqNvegGEWcpHCbrGnHPTDCw4481QRJYGCPzFMszUY1e2uxAHnYkogJPY9fd2dCVBg2cboR3gaVmaS1Bxi9QRQ",
  "key1": "4Qj1xgwzeVY7RvYwcYxSeW1NSM6hH2y2fLaMiUYTn1BKWSU19jLjKUFuxE3tooDjBf9s6h3CirEP3ZNSmp1iZB1d",
  "key2": "6FSNytgwyrMJyBk1AAfRFWDDS24wDCQnFB3pHVYWcV3uerR7nK4c5kDGaqQEXP3aXnZQm1y2arXkR9V25bfWaL2",
  "key3": "5RJH2nabKvjjFa71AD6Rb9vWhK4TVwZ8LqLSwgQhBgnBCVToWKo2URVrp7cpr2WDphk2Rw6etegoNt73JhxjoyrJ",
  "key4": "5exnDkW46HK1bcYebmCw8gPNmP79TPfrZ1LU9z3ZUM6z4DSbfYcBywozQ41MHBoDQLNfvFBUVDzEiFDDz6XB8M3F",
  "key5": "wQ3pPXVw2YL9aizx7N5tKsWFrJN2defByykF9t8acCjaBiuLFvZh5ccfg9RyaT8w1tS3tjVnd93PV6ZzuVAhdyS",
  "key6": "JQ7uHL9YM5Eey3i5doDjmh3JXc42P8f7gGakme3kuL7hEuyoS8dPGMA9efPbrcGuWhBgmLKgje9SFCMuEdpdDnB",
  "key7": "4jGVGmDXNFge72cXcovjHhDKk1VXXDJXxAmUufvgtssctzzMWyKkcka5nbAEhNUU2CxX668FmmsHV7gbrjgGSeFZ",
  "key8": "52ud94HrCRYYUGXKAHwPyptF5FmU9egTi56u2PJBDgmnQADMuc1rFVk82dvMt3oeyT8HaufRvacMgpRGZnXSUv9J",
  "key9": "37bNe8rB4tyxQGGw3cfDWF9pA87RSxWL88SufixXysQXPxGHBNw4NpWT3SF835h7UUwssA68EsvnHQXLauuGaqUv",
  "key10": "52Z9YwNmCPMMJTn5wEQwxvj4f67zsf4qoo4aoB4z1JpMrXN9PGEFwyw2aAirMkBijmaWv8qhuy5XNs4mWARitcqW",
  "key11": "otAT9pB1q2XdeQGiWCct2CVMLhYWGenA4Y6gh48x7BZmhhKuCjykCjssQbTAM7LjoJTECirrvKjJonNwkN4kNJS",
  "key12": "5ivQJkweqB7qGXksKFogE6dXBg61EQAUvbBKwM4LnCZ4Riy11vZEhxEsMP8w9vBwkDsQTxeVkiqjK1pfQ6RRUMUi",
  "key13": "BBsmvebcLzsqyWzzgcyL2HQ2ETbiLxyuEG1P5qecNAGRd8yHRBXXVcskWGChwKoHbtVkjY1UNCwAujzDdUSAfzX",
  "key14": "5EAYaqbLdWmQD5j76HSESyoL6L5GePuja8fnGcgcL9X6pcT4B2AzsA4u3G72GxwHASEaYJ8KpFwckAFm7vS7uxTq",
  "key15": "5HCS9Xzjcg3KdZm8a3WSu8tNstqk7qeXSuSbcgdSB6xU9yErJFvpzMpG7QoQc28n7Ji21pWpY1eMQe4CUdL7TMxM",
  "key16": "4ynHoE5zokRUzwSVsyS7cNKsKuWJ8VCnMCUiciVRiBaueeCRBsTeUEZwcvtdP4WcuhgvsLe3X5oUWPttzNYQkLif",
  "key17": "2u98pny4EUFEEKwcPxnGRNgHsNReTsGj5XGPa9XS2kYeNurYLAMmQfH71xrjuvutowoh1WY6Awd6xDYEqXPW9WqN",
  "key18": "4FK6r46Zev7gBXDTjcSFoJRvbLWALaUGfqf1xRPH3aYighffowreoso6hAVBuVTaFGzQwY2RJXcLvcvQSd5QNkbW",
  "key19": "2uM6ptaeY7M4Sf8QJ6gtmhy1kkmbADn4mWuFJwYMtmyNazgnrhiPHK3KS96iGxvqyTmj17tpPcBt4pj98nhowxZ6",
  "key20": "5dBBiPWbw7MTYwxHqbXj2qAQ3gn6sUuZ6MQgGzSFYFcB6Udfw2MrXLECGngptadKQtZ3WJRMM1aSu8RuVHqtDB4H",
  "key21": "xc8J5suaHw5gDXCSBW6cfjF6HeQVpGhY6j9mpgnSm12NfNAE5EsTGvuCjb7tVC77bhAVefiWBgkrKsBtuEoMt38",
  "key22": "2MFPW6ekp8HDD6aEHMjhSLgsyChiX4quWv53Gp2vXuLre5Wf38wzQUqd6xZFrkQnRtTGrawNoaUkq51Hhj8Fihvo",
  "key23": "4cY3yCGZ3QJtbAvh7CAANUm47TwzC6MM3GRsSJ1W2ccbaWRGUbXJZJyxBtygZFRxj31cbCwiVXNdEycmj5EqisXs",
  "key24": "5fizFPGkpWAoQXoniKfj4mQhPQPMa5TD34dVWf1SWvXieac6JwDcwKLF66pnB2XrAPxvThaaoPAA3dfy5r2rwz64",
  "key25": "4HZedj9qaqSqWaPThW1iGMTZ5mkh1eHUu1ipogzTkhq5TCoqzKaSwuvVF6CTi2bvqXdAuX8PJxhdspyT8p38Ajf4",
  "key26": "3H7Npk2aXU7WCkua6TFzY6ZxKiD8zjFWMZ5mP3ad2DtWbmPyrNaex98eVKdu6prNqxW6HWMrqLv2qndYHdixi2YY",
  "key27": "3zhJ8Ex8MBjUubc6Tps97WPkDMzy8ip2AjFvob98HT844mniwSM3aGapWeDbJERHAk2MFTzaQ1TyryFTkdcqwsMw",
  "key28": "2nMTMQLMu6LVoxo9WLjjAcF8oP57KHpdit6vxFyLwSTXkcSadx67Q979pJJFHhBY1qyWHcv5yR2MbF3CNPr2CDuo",
  "key29": "2wQLzGkogGQuUn2tKyD1rKSc5kXqbCE1K3BZ59oQXPeLFTnyGVbNQoy8ANvFgQkm1hrLSy3fknHy9jtFDvVPBSgY",
  "key30": "ugd77DDusVNeCGTocU1pG1J3RKpnoQ6p6tWmvrAAYNVsUg4w8XfSjdU36VH45nSF7uxoJGgmfjpMsEuNJSMEVBM",
  "key31": "4sVQuF1ua6GxufcDLmp9g6jMgd1YvyrNgApSBs14Ap7vNpZ3gV3dg4bhUVXCY3W9dRihCXdRTJSfd2ABm8B86h3T",
  "key32": "5tUKQH3SkK4fyoAn38kJ2Q6E5drDH2NF1R3pZfup4seD25u1hoGWinBun7LDxyHGWyZf6DcSdZaxWimW3HjqU5wj",
  "key33": "12xcDyB7scdir2GcMQvxv4ZqyrefctUjX4Mf2BNDbNydAaRPXearJB2f3nmNh9c4CS8n4aHSCyNtBgQ8mSHDULF",
  "key34": "3HfwWTVGrPTHhtyJVuAodyx3HgfYnze71Wf6QkUogYnNPJpGttLq9mfR4hokvohTM5W1i85BisKEDVP2fUA7KoCA",
  "key35": "2EH2UXcKa1bz5wc391ijPiYRi17zq5Zu7Wy4qJP8WRQ7HxYsjVyBvfbH9F6ZswLL8NfvTaNykK9tfqZeFva3DJY5",
  "key36": "2GUkYpBhNuotJ7rvi9fcon49YmeKDzMmkJ6w1o95wKemqBdLoWgTwAu4AFKWCMsQQwbEX1pnvJ7ynr66xV8QKgnP"
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
