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
    "5zR9F7e9ePCfzLmceTe8q5CMwx4CkRtPV2p5AsNnGfsobZURyMz5PdG6wQwaSdRGvSdfaaXgFiNSYatLXVJ3r2Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dcs3yhzPmi4QxuLYct7qoWxntq7zXakV39oq2gPn9oqX4ZtENEhMaRGyoUfMcQ8BvHcnfZWAUBd9AXrQmVHRdkq",
  "key1": "2QXs33EkrPQYopdvue49hmczeeZtD7C8FpvbedDrqEfrNckRcBUq41RsKE5WeN5WxaSNEqLWUVFFmEWyde6XeKHQ",
  "key2": "3Wb8TMH5gc5XB72nZNq29XghuRZpMLMtmESZwhgdtsdnXCBGXuQB8ygeihiUWKomMMtUw7E8piWhJgDqD1F37Bys",
  "key3": "3jPzEsaK9J1WWcZtbGbvEV93EbVbVC8JE9VeZdHc7esB9TVrjkDjZgVj9hDeZYJwhBJQps3HxiiL71tbjNqDYJrA",
  "key4": "2y7YfRL7r4fPsweJuPbEcf9Jx6tSi9GeM9YwGm55LWxJcJpKw4BtLW5k8ehpQ57ntpJwc8vG4rK6fYoCj4SG6WLB",
  "key5": "3yRzS8dDcVa8EvPAPLroNEHewHgE2jDauWReeMvivyGs2wS7eZ3ig6xHYbU8eHc5i4VheutAHVXU3pCQbT1uC4jh",
  "key6": "5Dx5VAaAPsa297mhpmGR4EahzDcuk8J7fN21yLK71zKttYLJxiEXzJ8aLbBPz3mkwCZahPfGnBfDotbeUNa3P2RH",
  "key7": "5Joz4H81pJM5v1usweRXcTx23riKDiJGG6224qAZHYDAk8FvCSuFGXfH7FmA6So6dmB5kdhLiDRqf9kJmHyoF3mw",
  "key8": "4b6QkK2f3ZzZbPAdbqiLYqKP6owXVLeMx2fNJqV47oep8TpXXwhdgX6uR3cvnS4p3HbUrw4byYVaPun3q63mD2FK",
  "key9": "2KzEFHYBPMEdf55HeQVSt6HPmk2QUDBZB45M5k4uGzTU5gG84oKdyyf4ya447No4ZhAMuYj1vnSkbyRvfbdr4kNc",
  "key10": "3R8AixZoUXTF6WbYiDcBuXyosuS3oXSCKm8kzeLN6zRVrcp5MTmmx1AAxfTxR7NPSjCwUzUiqetCREmkjGo3roZG",
  "key11": "UZ4LLs2inHhE2GuogQEVFAMFp3pMCosBZbZLVvZyeBXu7pephH7NKUNTRHhbRuUjaM56maTwSwVPubTJYQXngB9",
  "key12": "45d9Riiyco3RKfhHbV4kVYBT3Ba8LL47cbGGS7YUUwGwLKrwveAeViqNQKb1pDzKQUAWaK5JzHCxvhPmTiXMBKBz",
  "key13": "5N5AGnoH7i7tNn8u1D4j1HowCW9M4js1ADHgk6xjLVnHRHgBfmFKiZGon78DJ279mvfSJbC9KbS7MqCUgb8ctA8E",
  "key14": "x826NcZGuiTa4U8obYFevw57sXhKbRY3tYnvfTDmsespfhAmqQ5EZe6fXXhKNvugdnmgDiv85aakjCBiPKEshws",
  "key15": "53h8S74bahGJART5jVcUmovX7SWkMoPqm8dLrEskybgHHUtNGNPxYLGfNf76XuCCWLvBduA81pmZ5XqQ8HKgWUU8",
  "key16": "5kvHPLUT5eXTwfSPmzvA3oZHKebWS5ySJSiAUjNj3oPt1afbFpyRG74TA5U52rPYDbVMe1kC5pBmvopozKaAV5A6",
  "key17": "f9bNzsiSKdixRAtxu9us3dGgWt192aKSM9DKgrjeQCbUycDRt5G79pivy6eL8is8ZcAUKYU9wjNNqT2fxN7yb3z",
  "key18": "dmDjvpsrVJiNXpVPZ47NJbbrYYjAYbKUfSE3QcHT5T6JeDfpurNRp9zwVtUsKbDQsK3mCboTDdKF3CZY1gZGK1G",
  "key19": "52oWpUi3as4HyxxDBQ6PJhD7rBPnhtqT38K2Ds7PuZJYhJGtDD4gjANS6U3p8gHbUDvJwyjKimV64LN22GrfyZyK",
  "key20": "3vHfpnJ3fZSWKuUCBe4HdDScwNkbWuywbh47QXw732WTF9z7DEMizfKG21NmHBR8DSxnQB7vm4S5xpquT8N1UKhh",
  "key21": "35q7Dq1a6UmBiH3nDzRcUfVP8zoSFwvpvbFCGnntfEfbLVuJ3Q23RCEQiwwYcPTf3YWb2UtfNmcWRrBmLQuGyqDh",
  "key22": "3e8iSEvSY9vdrP9PSBgkzsbTZVp7QW6pFxDtaDUsDqbf6bq4vEvMFjUfhxEJUQW2cAuuP1Z4XxCAx9ffvESFfETQ",
  "key23": "ba3ks7JugPb6XnTQ5wYHi1QaW3BXmwjvHzNB4eW1shdJLGuKxxH5mgT8KT2eQS62HfzekBPy42cvyF6aSvtxMCZ",
  "key24": "4KzTxgEqutmLmiTR4wcLm6NM4ELUGSpT3PrpX2mUUQ71UUPsGqZS2PkioYCSsgGVbR3vsHn8J4RXAPbksgTLb5LU",
  "key25": "3SwBK3SFzo4HTVfsB7XmiUhx8ersn3gVhz1uSsjE9JWTLmA4LAdnPNLFGx9wcsBn3WnbKiGXitZgXtxmoe9MCA4w",
  "key26": "2aT82K9ZjvSo1cPPGza5gSpcYPFG4vtyLrAerVk2FbSC9aw7woD5Ciq8uWkNsMfjaeFY4Hd8Jdm3gwQav9k8Txyb"
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
