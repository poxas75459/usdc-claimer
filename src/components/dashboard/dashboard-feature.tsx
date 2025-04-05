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
    "4ZQRAfUWxKeC5iktQCnqj8kG9guxWfCKHxyCBvaoWH15VR7fsAmoBBP9wGuiNvzTyBFRKdVFti9m7qa8yRSHpjXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PQM6ZjLcsTZuryknBfNeeZHJk5DcZcgCt2RRybXFZTpteT9NAc9BwDcJFRGPFPYTrvxuWH1ZsgicYnYp8cDCiRG",
  "key1": "2eTvvHxjpM4FLNiN3dFsRuqjMMeSSDZ12FDePjhBb7Mv2XgM1kBLmujcrSEPNPhepHuzDSbEQetpa9dqEVY8gSr4",
  "key2": "2DbAmVDxRTa9FLsTngyUhMnZEFC8dx6CX9deePXj1TZa1CTUoJDD3sVbC2cbJmZJiQSCSqWMFD5NQDEDjgXQLbjU",
  "key3": "4i3XqcceSyq8aoLbxE287LAMdmBQy1Eyva4Zuh4TBGHs1y86rocfQrLmDQaorwx5HsPonHeF2aSSUKZwcdDPNaoD",
  "key4": "3tuRak6RxJX3RHCE2zjszvWBM5FXWm3Qox69nFrfJVir9P6tLVtzmz3v5wsdu9dovVBBgfV5H2VCNis3kahweKby",
  "key5": "3xPxfaq7DgL12aUbByHvi6izdVoNp1i1AXsbYqX6NfHz43yNjBGcTudJQPD8MyB1jQUe1GtpyP4k9iLGGMCsSvBi",
  "key6": "3mni5bGHWTPQpSQ7padrLyBWsF7h6G9QY7RNsxwhEp4kzkwCdYVPBwBnpJQ6HLEE9CtyE5ThHMVvnKEP3E4XYECS",
  "key7": "66B6bWx97rRvUtqNsGaS4bHZQPFZ9SdUgpdmAc7ntW9sPRcfnkwKK34167BRYurQCGjdEs563vid82FaV1hHmjeU",
  "key8": "31KNCm9k4jdnRQWc6Jf7EHgzrkuHvoe8swfpQTZvGg4sZCVvVC5YYxCihx8rqSTWhGSDQr9caKqn8o1dksAbJXgX",
  "key9": "5HTnso4n9Vj21S7iFkNXkHc9f9xUHN1rCZbbc79JyWjQkUMA6jdYg5xSksaGfBVbqUExJa5rnAqBcafTghAWZfgh",
  "key10": "jdqRr1UtDv7xB1aRD5HFRbvyn7wzhLeSrMjZG3as9U2ecKn8WrXEyagMTfcx1zYG2DHS7oTeHwBZo69nZ2sXMak",
  "key11": "2ijMCkSP7HM5gGpakof8mNQfKL7zvSCfqHogUPk2Ynp4ySXc6yDYWZ58mW1fZwGAPLd7WEGvc4rrvSLUcZkDfDpk",
  "key12": "5cWcWj36JVuKarS2BhVvJQzrGWgMbZemAGNZK7JMumFjVzc9U8GroPWTYSDf3SgLhdbSPs35NwUQVL73EB2XJifW",
  "key13": "3iG32rDMe2rYqs8dBAsqbw4sWGG6v374crjNpHThrPv9kYNLZHtEFkzBSpVzFNGBSbveWujkxG9fT3eH3Hqb8WCv",
  "key14": "3gtAmkF8gV8HBrpR7j3H8gUUTcDdRSrJ43DLFPGMNzjDYiy5DGFv8wrjv38wVcnsmM2decTfhduZ8h3YCNW97MaS",
  "key15": "4BLfCnWWqtFBe8hestGoDtzqC2WUKpgYJMXT4MCvYdveYjCnC9tzRSvgwuHCuav8WdGxRBezj5HLsr6ez3LsZsjn",
  "key16": "3JZhcihwYbSnQtCrsaHd8wPJVdwBTqrzmWaKtqcHxRbY7iwSFcHiwxPiKHC8Xv3zHjwmZgStyS3BWXnuFbZEA4G4",
  "key17": "5uoYqjsEdn855fPJbX6X9sKaBai8dggh548cVpzxN7keNRRKL4EA1tJnwG8NwBPEwd211f6xuEKZz12dyGZVBD8G",
  "key18": "jZp9cC8XcV39ef5gevWjSQhNq9dzDufJZVuikdp1GVnS3VM46hWmCnDcf6xJy14k5rH1p9MSxhnVM1xfW2yrfWA",
  "key19": "2htB1Jx81zfydgwD61LZgcifCwukRop9sunANBt8kN4xxV83AQ1p8rL9p9tFUE9Dj5wj5jGKLrYZ6c6774kscq45",
  "key20": "5ZnDLjGGCTGELd99s29ahsnHKzV3bnG3SzRy3pDjNDnsNCkcan6Ud1VVcrV8pYQt4XLP3CY7XAPbhse1RoWYcyqt",
  "key21": "4fy9PDpBkV1QMQNtvvCny9s4uPw51LAcaWrf2Qe6hyziHZcSFzqeJHoSZCSUemdu5T1mdaCAL6j9bHsUFjRVgvuR",
  "key22": "9hkyJZEG3WzLQEULQZH8kcfAbiXBPPKGDwp3opDV3nQfBQwJBHAEmNq2BCkd1G3GYRmcniEneRvRSEmbJb8MyDK",
  "key23": "4xfEBwkqhh5TwtiwfRJkKdfrYsy1WAosGxyezSqHMooSSCPzEo9U4KpnDgJ9RxA5Q48yzA5XVEuYHtb7ndMjiU3U",
  "key24": "2efCEoDwt1YF2rsrCHDzvBBuPdbjjqLkKL8rN71qgXx9G5iGkXvQybqtgW48By6JYUL27B47SmZcaLsqeBfcYFsP",
  "key25": "5yK4KX1JSpLqhSt8FQdjLmKbWDztPBjJbRujJRXSGboza34kUWyMguSkuWoGSYzeQkABPJyUtMXjLdnyrJQ6rJqz",
  "key26": "5k6Mm6Un4y8nvZH1u6eUjTiuvyAJwRpyxFdUZSfiCcht14oLWg1Dmj24ANoMiV86RBYvVBCFpCBPUxVqLcTPQnHw"
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
