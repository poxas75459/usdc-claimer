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
    "5t3oEQzJi9Mx36tS9N6CqEZEwp8ap9ExbNnKpx28wHa4p41nfybBGSYAwGMDVt6bCcgFPGnTHfHUhb2G26tYGjgm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s2u1bcrJD7YPxCAEww98RTDfsrsB65mwPus23khyKH6ZcjZ5LmTEKq7vVFE4akC6wysb569bmvnQ8H6oRNApDrp",
  "key1": "4MP9qiNkY15CBf49ad7G9Gf6Ut7K17Y1FYic1646HyLdqWk9JFZjy6fTstRuZ5PFFAQwiPmJeesRg41qnPxYyqXc",
  "key2": "tUzk1Gd5Sks5VvCc2cT8SZ4KrKgSjhkTWTrn8uu5EyUt4yLjaNDmk3msFqPVtP9XMRZEatqs2CFfJ8ckeQxFn7p",
  "key3": "o6ZDfQwvfUAERs97CBmU61Ae6B4yvP5GtuA6kYCLe76c7HiZUqTxX3H2E4iUMXauJnW8SMEP6GbawYcKQ3dGSqG",
  "key4": "3Z6HmvbgEETkYroYTDvoVfBEqxqST7RbjLm6JaTrbtfpqjWCeZneLmQVnshJC57oGu36wgxh7hXSz1pQU2fn2qqx",
  "key5": "5TUowZVDvnUzNwWxHNdZNMiZdjEtcPYm7Eor3W6Fjwe3TwCm9zfEbXUf2yCCB7XCUaCJp2fF5G9idpy8EwtYTT2Q",
  "key6": "5nowDYhyLZEwk6akG3YNiHuGmCGPxZXbTp5sbgERnnsRhdxhFmyrgr8JRQAE59uaTknASPo5BgQxtZgtraWDCzas",
  "key7": "5WNX2F3YmmHwMm65HQozCjwG8zczLWAnfHxLeeMPqY1mWSp9hkr5RkEJA9DKvYcmDWAGp9gJ7nLh8cCZVSPppfrK",
  "key8": "41Spq3VvTQKXu3LfVm6ctbcZjHdDnZrtk9HBzEVG9f8yW9mEzEFeLVAsbZUwAYdszLSaJExwvyn76K3wUXHKQe14",
  "key9": "3Fr8RT3nFnSohNxBhddd4aayHZeKJLU93eQ2Aed3SV82SzTpnWkgpJkKSfF8TjuwYNXL2jZu7EcVv3Tsy5qukqER",
  "key10": "2VwW4Ur5e9TxN7NXDKZEsWKRrHCT1HHaR8cfrwSRiuSYoccptdkLSWAqD6618nmKRs3gDSz5xqbADVaZVUnWBC54",
  "key11": "4U4B93GHfRK1Q7RHoTQarfkb2P8KMPYKVRZRVJAANdJ9fx7HCz73SccHnLGEZBUP6tssKR7KRjDffQVZwJDErgXj",
  "key12": "3mMTaYfNTgSP6HZmuUeUAzJLtMBxMxrqREA89ziLTkrKycH7SgPn1WUELim8iazKwNF8PpkcYorK2jdkDAAjDVBR",
  "key13": "5BuUSJj4eKSPAph8yLprGuHyi9xve7gKNyuv5KPMzHrj3vkPtQxCH9fNCAufX9QFqMputsmkfZLoPucM3GUKCGKm",
  "key14": "5ebqz6xnedVvcEAizZ8EJZCAEv8eWSMWdrvNGuHicoas89dgBbi2wKaRhFGVpX6pYKtppuevyaztMnwHAVqLVZmy",
  "key15": "398mgjHRvnrQ1q2PYnZ8UHisJRTu8jLoZoGf4d63SpNvbRsC25QqD74D8xPyvLdv1CR6xTa4AYwr8yMfYvhcKTic",
  "key16": "4yjCvJ2V4B5BEdx8Q8GC53badq7FDnF8S8ZrUrykA6aHzzRrBTgzy3AB9yTLKhGSNBLPq2Mn1HuyffiKL2JTosdi",
  "key17": "49cSofqG8pDioJj6EMUzAr78wTtojLoGubLgiCwmFt6mB894qxVgxH8gt5SFkQFfsz8V2ncXXZtYaDrntkK8KY8F",
  "key18": "3q81Fqy4ft1n59KNgM4UxkUw7jZMMsALRtyECsMBtaCzzQ6MpQVc5DC9MoedMvBhMH869gWh8RWiNjYjBiPV4x5Q",
  "key19": "4TnLf4syi23kL3kPDNuhSznRkqG1uk8GtrNJxsMG4zC9g3PhxE8BbkgESWPS3KwUJCMBxvSz2a2ZLCXggXqgrh95",
  "key20": "3iUSNZPicr5aKTX1cZch7b3uQH33NzT3JnyJuStAYipnhMu9yMrJFu4jmzKiLhyRBW5ydGibLbefcbtpPJZJ32Uw",
  "key21": "5QC8nxm7LhtD5oHGYtoJaUrxSSzFsN5Rhp2MV9tXk2bsouPV78jp3ySBxQf7MLXLfPipfxquezwzWFVM1bzYpT6B",
  "key22": "3baTwLqGRzFKv397iFRBqp2dqQMGKykTfhcqohkkpXuBNnJJyEn4aG4Vgn53XQSbrLWKjUKnmnLioukxTKKJmbnc",
  "key23": "f7SAhHtDFCPcRg7TqwsrH6k2NG4zKtstUF4pMEimdetrR1abzLgZSrHVpgAwk1ZTUAgjFiUiXyaoCQ3s9ZwumZE",
  "key24": "5PpLuadcsRFSvfJVJsh9wwdc2whn2wywBGBMMwp2PCsmNYfDJG5f6RhZ4ztdpg5fUyyrbVMuZ55gXsKwYABJsi7X",
  "key25": "4PcNCeTvdnTUkfcCnnr77pY1p8n72y7XyRvcgkbu4dAbcdPPoXTE2Vx6tpZ5mCfRymwdJKNhWEdRze6BWezAMqQS",
  "key26": "3p4x62TW9qzYWjYE8nwf62i77ugATqYvJ1wTS3djdBJvD2Pxf1xnMfNesnKhofvQ3YQA9pYVGy5Pk1yQGCtSD1X3",
  "key27": "F9gTsSqadoGKrC7y6eBEX8YzN2QkZfp5Vd7foS3jnY1qAKQYbAzsw9c5GHqa6g66oc6TAYdGsaVkMa88H2xzQZu",
  "key28": "4DqNajtd58hXhtnJdcj61F3SArPrZbqDfmFZJaGEXAXggvXaCikWXsdefVewctActqsxMkmqBewpZ87TN8RkiZWE",
  "key29": "4bLR4HGUKpXWgAket5Zx6Gv6LwwZ8oTM7j4hdnYveHeSuEfiwsHPKBYWc429558S9tjQoZUcuLWtT7bb8pGRkP7U",
  "key30": "3X91LTrqktghhjsV3UHg7a3nSF8h9b4tqx2wWKU74uEKzwUTn8nJhhMd4ZgSNJ1bZJp7cw6miBdSdVbet2waVaKh"
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
