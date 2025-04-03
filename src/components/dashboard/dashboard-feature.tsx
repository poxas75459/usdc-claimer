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
    "4YB7wQmBaxsvWoHLKKnjD73Dv61ZsDemf9E7bHgELBeKbPfqbx12nzghcTtFHwLG8rQ1huqYAYawNPmbhNq2jSk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xyCHpghJSUVu52FfLwFBWe576aaPDFjyHenJKa4q6UKqK3VMMANRNGZHY7SHQcQE4czABkArXHKthrSWzN1EsWY",
  "key1": "5JGd8VV6q8irHdu1UtBfpJwNzRaarNpByP1a5NUT74RkpW1NGDRzQ6gWrcbFc6aAinG1hWYRPhjcZeeevMAmdS4B",
  "key2": "5WKQvAAPsa7DZL3qJ8H7LFSiMzT45uDye6oyehDT3nVDNdLXNHkK2iaUsugaG8HWW2D5f5TVRfF49Sy8eZrW1QaQ",
  "key3": "3K1fNqjpP5bHchZkCV3icijWjWsmMRgUkZEvqeSePe9Vhk6ueXprBmZr1UEe44P3qq2AGASeDK1ScnWnFCkZVnuC",
  "key4": "3LithgoxmzrvCbXGQDSwgmEePhJFA4UetKV4tbynZJQrVCsPhMCi4Byts7pUYxHDtEHRSsWfe5kr1ArG5NdtKysw",
  "key5": "5V2L4rcEEPF9qudAMTfr8euwpCg71BoQLCapRynmR2k61JMWjPSaYRt9fAcimAuvgaMLCLPH3BtCUgrSomHMwDuo",
  "key6": "3St5C5LaunZdjUicT23zpPBmUwUrYBz9Fg89qeWq8aw2sNNNzLBQ51FGWSj3VfFgjyoYqKNJkhCxN3swjiQU7Etg",
  "key7": "4VpnZSxtwrxaHSC7n6ausyjCPZmovEAdKwEcbsT5sxpzUeQ7XravTw4UjRFprBBDsigtDho5No7Ysg1KPuHg5mTR",
  "key8": "5i2KXhzPhM5McwhZZbTV6mtpZigmNfjmkM1rzLnHAXo299qhsAEepc6Bqa4x7HTB3JrQKGwsWtRPKgC2sSsmaLpo",
  "key9": "iaLitm9nvX8zMurrBtpBBNzL4ypRwi6TZ2prfoDo2nSUSFK51DAWxWBvP3vF7heTaZ1cKypbNUC7L7dzZx51t7o",
  "key10": "32Q1Qaa2dH8bUsMezQjJoHQ8jZaoV6z9e1BHScb4xf4kkE2RsVMHwQUvK83u6D3UXqFdmasjpcpfJmZo9WPx7E7D",
  "key11": "3Rgp6ADEoPQoyrE4BGeybSXTRq3RUMguXQmY7RzdM3N6fkuKeMY7ZUgS8YbQxZJY4YqFpaX8LQ9pHowx6e72oZEY",
  "key12": "3G5rXNaWAEx1VJLufWCNbYwAhqx6PE6S1qg6eC37Yoxq2jeVjS7BHNMMmivBbCgebfwWAEHNP2JNCYm6aQM3dgbb",
  "key13": "4uMyEZDS3hiTikGiPuVeEFxxw8LKYjvDoXkAimAne41abGtbm3cqVPCve7E3c6vjGHjhaw9yoAHtM8FBedtMbPkg",
  "key14": "a2GfR59fMb3HYy3Szos9YCY5Zddr9t7UNbxBZsRoeSdj6MPoKz2fdbDtZx9TA63eiQ7gk14VR7rDJQkGwcvkg8N",
  "key15": "5LrD5KY7x2hzmKZUbgWc94kA2A63sCbnBPgxkCNzHiRLm1YZXPaJeHDYNuFECTEhNXQUVRKE6NK77DtRfygp6g6p",
  "key16": "5fFEc1ypW55WPvowpRPr1VfCv375buh6GQaA1eZmdCTenNWDNCmwi1T38rotyryq4HaU9gpKMp7YV3VpzVka1QfB",
  "key17": "4SDZ5MeEYbUXAAXo4ZNxDSNX5rLUvGoaawtQoN5Awizzdx4K68toyoq3veYeDKYStdpChGu652BCsXmKKFZ9Nkry",
  "key18": "4YuKyp8zuKn9fVqwLQUdJeRuXEkrpWfPHFPvbuWgVpzicK6NqR6ALWtAX8P1mzC4LTGiyTC3BU7uZ4KJ5WBFCdTH",
  "key19": "2GBYVewXTWUph3CBf6SpQro1WS1bJbRxnYRDmKTeJBfqSyPiXe8BgQbLQKjCV1Hno6xsetUQJ9nCvGQj13dD3o6q",
  "key20": "36AY4h5SFAnCR1cwxZ7nE61KWsDHb288Q7ijcXHTcsVERNoxHQTUr5ArsKmdosUnnXJM6K7ccA96hGcZMaTs34yC",
  "key21": "28bJDnLYqqMC35yhJdWSzSqaB5wRg29nFxezfxBiUCHNAsx1LasJx1A1xmpAwDK6ig4YxMrg6qpRxoutTWEgMani",
  "key22": "5TCbbpSkTtXFS1UxyiqRGNQktvwfASkwRNk3VMks52Ua5keNe89y7pSHFNEDeJctDmRdpJoHiXTCwFYPH91K7Zwn",
  "key23": "3aNpm8Tx7DD3ttf54G9wDu83xBaCyBGRTom15wHC4a8XGN3xVCBJPZ4H7im7J6WtZD6DaeZaoJvKvMn7tYaGBYtc",
  "key24": "3wszd5K6XyadNYYHr9grQLVqi5WLwqhWwSdoT7PhJHjnpffC92xM8Q8Rrh9r5Gy3gegfeitwMdVMB8YBsNEmPk7q",
  "key25": "bYXUdgHnyegcz7gPAvmn6n5AJ9tjAKkZs1fRsn9GQknEXvMT4YhC9rjcjABDHGTUHXosdqjdhLu1ftFkwgA6LzQ",
  "key26": "3Qodaja8mbY1NxfYMX4TqhesSBDBMyW5xBPk3AUezt4q9p98iHN7BAg7uxpehi4Aba9ouc6Y5ua1GwyN98p5BSF4",
  "key27": "4txWN6owi1VRKhRDRxqTEaBN1vajKL2LsjeExWkCBtZunwcSppkB26AyLLy5synydLNQjgptWPCBXceu7yZQqPaQ"
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
