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
    "3aH1CziJdeDA3AuGyitUqiBjvdLoqtM6fsehtLA2nu2PNXYesQ1zArUbVwdCK1gc7kGSUhGgU829osroRpxzkhoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyoRXC1GtUNRDQBacNpn7gwF63Ge9KuC2MYgpZ4DnJupFfHWQFHMLKvXSCx7uArz87JRtZeoyUaxm2ahvFj4GVK",
  "key1": "4aTKMDgJqmcfozUa5udfK1fEGCjUjCUX2a3dvA23hEMT5NaX6mh2hmwnD5gDVN5HrUifc7ZSYedUrSwveVLf6gBc",
  "key2": "39RXcuX3TDbRH4KmfZxG7mHxHzqJtQqPiZszJpL2Ee3UCrsHwzheqwwRsETn5QgvWcQJMrtaWckshqsXmKotKF7s",
  "key3": "BEbr1sy9DU6PiiC4PbVNFMr9hKGndRZzBASZvoMQUg2L5gVV3Com2hQWQMS3Dj3SuSncVF5spKD23GooPtRB5V3",
  "key4": "3EzkqooUYGcp3cvrpLXDBBH21jP5MTR4X5b2JWKuKyeyWTufXdyr35Gc545jBvkBKA8Kaob3kq3KVnATkmWrat98",
  "key5": "4SQhK11DPffSKZjff49ygn2eA33x3eE78iP2pmMg55vHSboTsazPYTs9aL5nFWcDPwxxkTswHhUv5x4sFFoVEVUd",
  "key6": "5LxB4dN3X79gK2KiX4KAZNNA28jYVLvGySWop5ot83YMFUJvjFDydz4ugR2kx6wTKCxjc8CuoH8LaVrGbZQsqeS",
  "key7": "5ofH7Gt5r6TL15VJMYcnafEvCBLrEu4BthK8GJy6dUoqagGAxcPax1e9Xde3ndwjuEougYj14GYyyNb4PZC7NBFa",
  "key8": "2qGX8c7bdxiwMGBXwc3ZPHtFwMmFHvDo87kHUgWPmnjgHEqJPhPsidVEZsNSb7vhnpsGyf9D6zQFg6j9jJjk3Fpd",
  "key9": "5tzFZ2eriCciaUUox7zU6ZjaT8ruPwY87ZqSjmduWssUMB4Kp1npX2ViAh6WonbEhEQW6EXT1RsT5B2YijAeC4ZC",
  "key10": "4YQPrkjAq9bsRWudLkRNU9U5JWUeP2cqCgxsCZeu7eb1mjbuh18U4GjZ3kWc8UeQCRG92ZpUAMdczzMv7Rg3gtWf",
  "key11": "2SLpQMKJWC2jUjkMurCPuLXbZ23wn3aaqnWL6ZZUWGt5a9KhDPCaaNmLvxXw6HTAGYDQeFJPPhMxqAuSsE5fEWC4",
  "key12": "3gE4qw9eFrxMMFWyx5x4G2977GQKCvgHrYPchsDkcjHYbYygm9aW2DJdJZRmR2BhA1rJCgXmK4gXCgdDmLQAbCff",
  "key13": "35eDxpYa2U9UZ45KKxUXDuoZrSAbfu4DmBR95BLQao6yqxbhStUBRUwzCaUnkkGqGyFZHLxNFnQAJ7BsVTRZZVve",
  "key14": "fUyTrkpGLhMm7rEYU21TWKwBa1Cmgq37cNh2EHZpQSApYk7xAGAQq6Rw3dVu9BSm2sRsyM8jYFhJRSmJe6DBveK",
  "key15": "5iS6mmsLJNk8uZjyGs3ynVGE1uaR8XwUGNiLPo1Uf3Y5tgzkPfPzmNeWguoZWVRy5VudMyqs8qkqQriWNfeyZ5hw",
  "key16": "2AxhECrkaZzLXydApiPop26RKBM3iACJTP8ED8rdrAn6egYGQBZrBQ75eq7b84GdP1GoCi65VNht5nvwaDrNwxQH",
  "key17": "4gTxyxCovec6wi6DxXACWBbzhF19EdBHGmNMHuvBQADieJAwWa6THZVMoBVPoHLhf9N6prjzY2LUZ4frLEZ4PuNo",
  "key18": "3EUJwR6aEkWgh5PAhNQTNhydSfAWap24s7TDbNaFkD6feEDWxcqmkjVcTenUEXkLDbVkEBETdjhA2c2CYag4WNqH",
  "key19": "3sbJVPvLQ19ztSio8X9Ejy7CsHb12Wio3nhxXvL4cSRffCsebyzRRKTeU9tiNEjSqzKPCsGCMYT7LMRZioyimRJP",
  "key20": "2V9kNMgbqjehzNk57y9Bm3mVtALntghXPoDv8GLv1i96PtSvGDMWWrb6yJTumX4kdvYp5ayJ1RLeSYcJmBBJL33e",
  "key21": "2ipKWskoTvbs41HBiyqPb1SYoncTuxdEfxRZHkLZoZMZWfKRk35mfbQFE4TZ81rWRqe5mGN9TbF9MUA4pT2AZy2X",
  "key22": "2tRXmMcExejd53C3fqZvX8VLs8JPfjhPAQXN9C6YDyGhPh27zNtR6JXC3yrEtGMojZmJedgTTLNiPqXutheiS3S6",
  "key23": "4oVRHAMPZgdL9cJcRnFXk9gvaG3xPEp1jpyyp9kwCgib4hmPSSjVJ1QutxmK9fE9vBwRPTnGriebvSb8i7A672it",
  "key24": "4Hyq65iNRmQSBzJ1S4HxvDRaQwDngMym9HwmUvBPp5VyCKzFzuyHDxnLdwfBXkBXZ1EdkWDweYfUo7oJjdvuvG1f",
  "key25": "oP4Dz3oMTW1b8epwYdjqRd1kS3T4sbinxAqdykahpMUAjnJCqMj1JEkPud2sW9eYGm5TcjSUJojtynh6J1abFVd",
  "key26": "3sgJLCifQ9VqM7sNnfki2jZ3HW4AAXcT7t52ADV8j1NdTSQqpJ5VJyJjZRxGf6WDnX8LajCwxT6aHXWGw72HfLA7",
  "key27": "ua8KZUYHhc4pkq6y3UtgmcJpX47LBsknJ2HHRShzcPDBjQ67oYBz1zRk8ND9kfBFMS5MrFtJmbvvbB2Szko3mdD",
  "key28": "GaHNBrtAqoSCzDDqqrskPWvCgBPSbU5X7XMWeqUZyyG5JirNrm8TtwtNY4MSWzvxLSCggGBeKLzVAEmmuXcePgi",
  "key29": "45CRffyWgb3Luwkci39WXge7uMdjW9EX3aTM9CEtWHVDn7VmKLKNTxWTNzwVQLur7KoGzerWDyj6BanX1s3qtQfu",
  "key30": "2hi6Z56nBVCX6bmHBHnsyi7DzgE5xsG8zYJuwKg89xsNibSxWtbio7pia5DEDeqP5UXHkLBL8xnrWpGWvMFYd3Af",
  "key31": "32WRZkfC48UhqKWcXnP1Fzk5HqbqND3onvYTaCuXDiBFF2Ts3b4SS1HW8dCsxGsqcdyuZckotLuH49Qf5BsPU88Y",
  "key32": "38eCpV4zdKT136Lyx4PdxB5QwEJUwC27zJbseULtyiLtYtxN5ZuHqXa4pWxudfmvWpKQ7xJUQUX2T758FDDwDee1",
  "key33": "4zdM7Gyr7tE3dphWJFoP6ruKwBxyEMeBzES9cNp4P2Lzv71kSfLLy2YsHjSgFbes3gUkAzbSvRNQnP4eHab3JC8m",
  "key34": "3NMPnBmshds9CEBV1U6yr9xvKeUrJ63PWgN1VQiLvZ8gcGNYUdYweZEdENi4XD6Q4yhVaKjb9bAQXsVpHAMjZwY6",
  "key35": "2TTLkYfsrQEUB5sC719DjGUdhzuTnXX15pPY5wy49e25BbrZ6kub9sPBNxwJXhGAoQGRGjGjGR8DjvDc9NFRs1V",
  "key36": "4JBtgGu4Z1LqLrxaVaRD6cbGX2AfNeg58pnEZw6y5fCQT7STyDdcjvsdPDAF13Mw3yFFWx3SYWXphB1DduUPFCk7",
  "key37": "39YUDhc1M77NfFFUmspaeaBxsnVYAdu9s1m5osxy3GwPFvkYrWhDsAnbY19wxErdbP7KWQAbKPVuQm5rBostfDhx",
  "key38": "2mLTQ6ypzrsxScG2hUC3t6YrKy1avyzPZAFdCrUaMPbseyuHSehu9rBrbKpeaKeMrCUm8dPECLq4ia6uQyS7SX5j"
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
