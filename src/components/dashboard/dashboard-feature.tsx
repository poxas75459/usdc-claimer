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
    "3YkTmx6ZUgv18xPeaqVzZoMNrbmGTCDkiwg853WSfUE6RiSZD4SkgXifi4foPdPR5iBrDt6Ekq61QF44GiybiGMR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r8ytPXQm2kJAkmZ9vJEJECS9Uki1RzEFYz92TpHw3SRNMp1K2B55zQUS83JBE1t8f6G3FidCX1VFiuGRAVuAkx4",
  "key1": "3zaB24Tgp8cD9jxARQqpu74AVGM9WKXMzddL9GXbxQwXd8s35LZdGGS9bkBBPyHfxqgEBKNM8MRcmcLWjT6u2Rz3",
  "key2": "3LDf16wB5frGNKGA4D4Vm4pHri4GTSAYJVyZXi47rgEn5bHaY7aEboEbbGu8DTappcF2tWDfzvAG7G2UWHyCRDDh",
  "key3": "nPgBdZBg8DtVHXruCth8nbV7xCXugufVrhqgHtDGJ4Zk1onutzg3DJbQbucrFSKjjLRKBXRaFdd42oWrg3mnaaW",
  "key4": "mWrH7oRFBWJCZvT4rTeqCw9vgU6BLTcZXhN8yCKkQNpHHyFYYLXtNoFYBHXjYyFkKMa1xWLdk1hfawsgbQtvHk5",
  "key5": "5rRWQ29Yk5KWu4v9BZP6u2jUZT9fAjdS4NxpFFJZZZFDG2nRwqGXQ658845RWNxH8CTBfnrk5dDbbKaQzmghP7At",
  "key6": "3sYzzzNKxEPj5aq1mm97sLaJkRBNQyPYMLUn1RG6ZTyqowrQrG84beztMg7fceKFGm2c12L5RHdLTDkVzR2Xn7ML",
  "key7": "2M8YAFarY4zL19up3SUwPc6g12RWdoA5PWzDV4gqo4ZpcKUYHWmgp4Pm6cxoANMcvj6NdcdzKxe9XKXFiy6S1Lzf",
  "key8": "Kp7vDQAXcVRvDQqUSBj1rC68HWATVVYgot55xVjgrP9gkxgYWk9DKjgz6ME9Cnr7vozagJkT89yp3CqsqdVFbUa",
  "key9": "5DYmPeaZaMPrndnp5ifPUnnFGTpmZCJRfGnGCPx4HFmFExaDXpJhyJoyBLZkAHEPzHoVrqG3MK3ZeLYRksKAei3B",
  "key10": "2GmDAbrHWMjEs2CjwF2Qv72KvqcyDFzsb3YfHhEzs7bvTyc6XPu9hBHCPvBLymrtKn5y2K4UYm3N4yXU9APvqzKb",
  "key11": "5ZJ5KmyrWiUHfQLAV6dqWYFQcgtnaMq4zxZJ15rKGojMh3nngM6xpN1vvpjxK8UicTk82DcQ5B7ivzEruxJtpy3P",
  "key12": "9bCGN9TqRvmLezBpdV4WJFrgHq9MJnZoodWS4Y7sfLcyyAhiksTZMtvQhoP7BJKLtwxBXqyA9atTRbaqsD9sPrD",
  "key13": "244kGZptdYJ3rCRBm1opaxYhmXNwVKeWTt7NxKskWuUFbFtktoRgDBY9oPNqbN4vfg37rnC9h1Umjz5MqE9iDjpG",
  "key14": "2SXqufvWA22Wa4Gtfe9SG6tT6hWKL4SJMvbvhBpBLht1B36fyusG3xP8bvYCaks2vwZa1rgpZ9ckeuHe5E82iD1m",
  "key15": "2JVu3DYgANAQq8redXTf275VxcaZmSQLPwF5xcfhzkB9mbNYBiKXTEnVuoGXr4cuZ1VogLFW7z2xuBK2xHn5ddPZ",
  "key16": "5JQjkoQcz4hD97zM1CNt3FvHUcSAMqmPVp5fbVSZ7oELXb9xh5CmsCmUyq8ZqiggGZ3YDdnQqUkmHAzXwPXkoSYX",
  "key17": "48chzywbPmRr61uMn1BoLuBeyt4YZjGhToUJhdb9iovQcT6szPvhYDH6yM5FST5eNEBznW2xCkqiU2ECpkGyaFsU",
  "key18": "3895z83FFdTy23dv6SnGLxKcGCJzESstWGyNxpso1hKmro38RoAcysuQrpwa4C3wdhwfMypxhnd9QwxiB6VhC495",
  "key19": "5JBvMsQxYCrYXPk1KMJEwaZNcpcDxvN4jmTZkG1dwCURyvD6sBt5JKqQezjptXdZCui2z5vvMQQ8VGvghrRdY1Pm",
  "key20": "5DwKwongX5vjBd2EfRMWziXhpQb1ojPwyRLvb8AKbs9HPEzUm7tWdaS2MMfFAoNqJMgbe2dA1wHSfyS9YdwBrrFM",
  "key21": "2XRpkX6qZk1UDJH7QgHAbks6bNBm2tLMyChEHe9ERC2ZNWcVdgk8x3TB4myDSnUpuFYfffoFRgD2di1DGnp1Z2ih",
  "key22": "3YP7J6Qh8x16EAkasrFYf5cpQ8vKAYhzipUtrTFbzuSrgjYb5qyq4z3zGbFzn38YutRoEz1wgUxYf72TaToEyy48",
  "key23": "3Gu2g1kEmEDz4Biv9CeU4LHdT2bvQJ2cTFJDFWhNmDmu8kioXLi2AddU7S5Mkz4awvDpyzvJgLMxPbtKL8fHVQK8",
  "key24": "ZaWobVRoAGZZYNRzSoTfGhwmK2rmf5ssgHqcvghkW29ohLGLD4sfYaY7gj7dqzVUQPJD7yUs4sBioYs7DJRSgm7",
  "key25": "rFqeCd2P8recMM5G4m7Nh6zeP95BwzscLgueFfoYiGvk49WMjE5dUR3DCpwosEaaiPCtRJf22QWVEVfp88sSYAM",
  "key26": "3rZCrXpyTyigg4DVaF5pEbCdx484EZFTryXFwZRYDZowXiDDoFLy3adZnnxT75bUz75ytjtASmyu2KRydhMigyco",
  "key27": "2kbaW8VgDFwKbKMYiyRcjMH239uw4eqVi3K75skTWZew17jFptF5oGhSVTxXz3LiUKu9VsCAP6ekswqPPP9tf7C1",
  "key28": "3j5opThtkuD77ZfXCGUAthJb9Cd6sqgVDUyUMUacDoPGW1R5KHTjCxYqYr3Uu7Dby1qvf4UxJ3LsjkQxtwHckwQK",
  "key29": "4F5t9toPaGiVwDtCsU2eAmtcxoicpF8GTKwAdh5xEtyZ1N2nzhb23XazYhVEetyGqrnQdacrvFTcLCpQywcFecs8",
  "key30": "z8rByR5WUSprNQj8E1CHaRcgHLBadUchapVJj9B2QDwVyuXtwDJU3u6SLJgMumt1tAhhmkS3hwVhFL2YEf1herb",
  "key31": "5Dw8wytxdJg5aH2wGMf3ZLpinxxGo27fnhHoZpQGttLhBn8ebeuxo9CQMm9SFxeiXTeFJNdC8yLqyZCeS8zegcX3",
  "key32": "5dvVc8pzBwLKgh55S1KEafsHvop851QwmW2mb2WAWyvSQfURQeP1dc9XCendSD1Htveik9ndTWQoe2FXrGnHjXh9",
  "key33": "5DWzGpkfbmzGGF5YRKe6Vo1Hs8zYXrUgmiqyVnG1duDocpbKykGDqDVbKxkVJ781gTwx7dAb3piCKVrAYFkcSSoy",
  "key34": "2ngoEsiRpdXDMacPn5ubPXG5YdSPsmMQVo4DkjdxrydmYvnPoPQDn8E8siedgfSSHZSN44TLvXGyqddcv1DNbsYt",
  "key35": "42SjaQYABPXiuZFYFgMrGUGgviYyonpUf4GP6QDVjjV3Po1Vk6pXLvinzmFf8AU4Gaj6EbJrEDz9pax2i4vBAKGd"
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
