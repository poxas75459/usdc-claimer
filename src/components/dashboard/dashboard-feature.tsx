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
    "75nBs2FTibUkv3BUw6dLZEEcmTwfAhn9pAq42Qc8bijGg49kzMfjf5muBHW8prSVVehsiB9r8F1XShiPWP6o1Qv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Wh51szbmuXBaRKXn8FSzDaQW3BB9KVrTHvFWjifK2ESZTTngC3YGxrYtMSnmGpQWRC9AQ1iWaP8BGAWRmB854G",
  "key1": "436kn9ARVDaPfv99ANkCyBAGmCTApgUDLBgo42NGbBzUVeMHJPDCWnmUm55BgykffNyYiYd8JRT5N37pcKJLaTV8",
  "key2": "4mvycCbfqQdoUFz89LU2Wuw4UQyj2SG7fSwX8WFQcGssHpybPxKDQHHoUYH4Lr9Ss7fLwg17EtpLUtx5UdboGyMk",
  "key3": "4mZ2Q5GbkwstH4FQrpqfxQFBdqRvUbKB8rUX1ydkG8UFZmtHfFiyarDw4fVd8oJXtaTGprnr849SYXpwaxZRTeFE",
  "key4": "4TcaiZvQYMpBW12CqoSEe79n6ChQiWtttPoaVwrQxr2z5uYho96z1wKLf13qvXC46TjCC7xxoEAU7CZEGbpdJPtb",
  "key5": "FHpvoshyPY4HGgNAfi4MDX11PEwRheLAwFEXFBzZianecrAWv8eTi1pJU1TbZpMuCGTNH8HawrMZxqKbJUJy5XP",
  "key6": "4uKBmXQG5ngvKjTJPGeWcejsgTddip8JL3qMy5acYV86PnR4y9Gb1fxkEe7cdNTJPuyY1QkJTvqMq6fWJp5k3SVV",
  "key7": "54vfQ163BdajqFidr7JzrDaZPYvBJTKrfV3pMRqqsQN1vLBqajVrRggcAXftCU8h1sVhGaMfBFBtM3Pue5saNTss",
  "key8": "4iBaauxL5FRR29Q8CB5XJyWZJurMJUNbtvPLbzQ8q42PCXwmd9C591tuv72coWmurUZhU13cdiyY6avkd1i9DbBG",
  "key9": "5WBTx7ijXbVmzvAoC9XfUQvk6rfkRXrAqVGGDBg1wBVB6jwiktf7Xohws8aJFHzTeCL1XxXfa3YJpnF46T47Jo6j",
  "key10": "5jYRnX7pPKdXWqpoNF1ERt9usEAbjeNWsyGSwsC7mpkm4nXevEZ3wDRJqMYfQbYViTaNs9itxCbtTx4c7DNPJ87v",
  "key11": "4bZA8C3ekZEh2KBFxLQBCQTz1LPHZ45mapuZjbD1HbWrQRBsiZCN3Yy8yy1DBS1Xk318oB4rnKupegi9PGYXUmnQ",
  "key12": "2cboU12NBm9s9Lzhj8Sjsyk2hojxaYYi3Yd2yRRqty1WDvbFVXnemo54Kdeq3ZPxHwhvajnKYYjMWZ9NwkC6YWxm",
  "key13": "29DrN3rRj9DULdDH5qdkRHkWMgWyhNSKfPtqSLYPLz3MFkiVJ2UAYrbzpXvtmwLiyBoMsXvLzFYhRfgJbsKV97yQ",
  "key14": "26Jus3YSQLg7Mukwh6Lk2Zg9Gwuo6qc9sgpAoKDPEE7JTLqzRpXY2Yi88BpkvYoE97XGS8qSkz2YJTKMC2k6gDTA",
  "key15": "36WExjWrLd1srxWAr8so3ZHZxnqTFMm3onmrvd4UkeCNLeMeHy5i9JAbeKAkRAy2tw7EnR1HD2bUymHMcEcaK7gb",
  "key16": "2K2yFR2bYt91CCr8xUb3BfksMCKQUMmx9cKAk7ZywokvvwLr3PmmAQTfHayEx1z5QsGxB5YGTDJ24YJjdKS4ZRqb",
  "key17": "3zBpe96sed4WK1zV9wzWxvAVwKroDaq7Upggf4BtwXF3uLdTYEs2oU9rPcEGsHjDAmgr4SGj8dbJ2Fx9M5zaTzk",
  "key18": "HTAnuD6zG8Z5qwE4qtNWid63GHMVeAEMDnp2zQspVatsuBKiCWGvvGfqCzqaRU75dsnTAsCUPqTSPwd7YVKxRL5",
  "key19": "65XSv4fxxDtTArshCnjXMUxfBHNjZEewbTuV6yxDoq8b8hjvYkyEczr7CRNNm3RGq5SnEZkss4axCLiT842vciVk",
  "key20": "4XyY8v5xkNkM74iWK1VZq3bt431XqLCfaYrqjV4H3GteWtYH4nZk2xhqNrw4K5SVqXxahFtVwmaAzkD5UJq5E9wD",
  "key21": "3RkPb392qCw3zuiPnZUZsCbSDLGRugFR43BJxds25FnfYsLQcPxvJSwrJQGNPsVCjEzBRjQuSarqCUsfMrQ1G4uV",
  "key22": "5C16FGgcm2fW6mtCHmf839kBhX5wVbL5s3waPLqbRsxnrRSpComLaiA84wLdc6HAxrpftbYUYoYVUm9ovi8ZgN81",
  "key23": "3oU9foQNopNzsNzDABjm4L9MJiEr52UAA8NT45CJ2HHVWRJKTZeGmj194MTuaNNDuUSbpRkz5FeKMzGcEMdERV14",
  "key24": "ZRsetQhCrd5Gki9wdSAXiqfeKNmtg3eNvZAMFgiF1T2w6WXYaCpbSMm4szxK8P8G2pW1oB1tBwUwPph1NrmRWxm",
  "key25": "5G7fA3J62sj5xeqXqxRNxsH7oFhbj8TCQgQ2QsR9PB3x4h6MWJqsQGydrzmdFTh2kkNwcq9bGDDGeCsehJpxc3Pa",
  "key26": "XibzXMbNyUMCw8Tx8bAyjuqTd7YpmJR2TaFLmu91abzwewmobXunnttCFtB5HN6oZwZLJCWZFSdJB27JMFPNE7s",
  "key27": "61F6gGhbqqGBgLU7rEyBFh4GimS7GMqhxh3epA5PBoxruHgjRp3HidUEmudFRBzPJ7sjL17eNHWFF9wKLdYKkLS1",
  "key28": "7SmrHepG2WQr4zbvfsBUKgBPRrXrNJnTVdtJommsx8SuUrfUfZgKnRbqAsxDuZzoA2eJB6d5UCEEjRUuUpVgHqZ",
  "key29": "2iPLWWnjZCxoaJJKq1nhcd5CyiXUgSGb2agrgqEpx52FZP7WXEpws4xTH2xZ4soTgbDrJ6SL4uFQdCp5eaDSdwmw",
  "key30": "4nihZYoFXVCWFpWVpb4zzBYFRv2waaKG9sL3GnrNxxW7PymwCYdf8B17Ejv2dAQzVa2gZAAkvZLnDxMFSpNzpdjp",
  "key31": "4iHQpzwVVBteiCdhR5SSHm8BS1cHZHw4cC27DEUpZkgwcQXAc7dBXddHNfbt6PJZNk3yCCAKW5kHJ8WR3pJ8d6tj",
  "key32": "JssnU8aSFqAXHKnKuuvrvRMVyFcyD2RYDdwTp2SEGnr5GStNtfnhEaarVczsULZWCNTzJ5fBaTvU2wczrVR9PU3",
  "key33": "3YBr21K3T9NbTFXRyUy2q8iHMMCkqxrcZvXGaMGsdmzSTDBPx9SSpGXbW3UtTunoVMiftBBivWNSnwhfwiSerAn9",
  "key34": "4L9jrtoZCMKVpUbp1hVmgSAe3J56W2hBdtHLKQCohVapKDmEPEWXVKA6wdXcnfp33AeVjbr1nU79AwD1z8F52Aqp",
  "key35": "5mYkp1z45naoycLFqUD8DZZ1nqWo8mZCE1twES6UVrNXhVWkiSE1uoWs16Zxa9Gk2kGxJm3ziBExvZztTHwNmBH7",
  "key36": "3gZSnViTf9mPKqXeTYENso93qSoKorKKqRckvu5752mbQcxQUPNYe8DHmN1GbHJG8b7BwgcrWbTzXBfoXqm7ZicS",
  "key37": "Ae48Kmi9mYVkiNi3KKAPoa6MdNtRXZrHocyZByJAP4N5EtXiEfYRxCfvxXybEMmcypiRcTErQitiNKP3q8EG9x7",
  "key38": "2C6SPALz9gVjDCTxfkRc5NJcWdr6Ua5jiRLDV4DgdYto7jB2hEewXzBrwYh8xPhoHnjYGWrFqS4Juxkn7UZxCtk9",
  "key39": "41DkrEUDsenVzxMBrpAzDPY8HkvjK85uRTjSHwxZjy8T3Xmf2EethZ71EJZuqwS6zqUZo5V6KHvCgEc5oVEMf5dK",
  "key40": "2HsUtRbTuENYTK4JV9yW3vTd3TDpUvh1Mh5CfsqnSx3V1vuqBD9wXvooogrhsdvmhMpu5NTzorC2HULxGh8yAjG3",
  "key41": "4Rfobw1UFUfgrYZHPz1bk3KLLxQeZVJZ4XnWQmYb6hXg5ffvbCftsjXN3s8EJnd6HiTvhSC2mcw8t3CWmskj38Fp",
  "key42": "3aewBFMnnTMsoUEuxjYGQrqVpnJwKii53TT53FbG9TrKeMtj8VQGFjhjYRXfVybPHn6eHEpbyF76TVEkBeBwX8zx",
  "key43": "54mmevzgcYDHnGT78EaKV9GfgtyF9SDnozehL18xbwma98dQ14xacPFZcdTPK18L6Y9nBsu8GwgKeBLRTxviaMxQ",
  "key44": "2ridZZ9ARagJ8tyFUKXd9yvvwdsFmg4RBtE4endhwmK7vLaz3LAre3FxtvwPddHmNhBQHVPsmQagqwHNePcSAC4g",
  "key45": "3o5TvQ5H9PGhKDsTxDKwwiVEDD5PjSpKvBGb2V66BhUiaXbAFA4wimkfcNWcdPbNJmJZnbb6Mfr7g9QZNuAn3VN1"
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
