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
    "3rZFdcpGTbrKCNRiHbyba3EVU1xuWfDmVmx2tCfdEFEJaQPMVcLvF5V9vbpiE5ow6xit2SJK3AGgnik3UhVEgi6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zB1Qj2JLpefkAWZzom2m3DWiqgj1NKDUeY3U7qbdyiYqpV5ngKu1PoZK4xJbTGLBUgk7GugkVDkJawE4LzeU49Z",
  "key1": "4bNjDQh2PZaxHf3G1d1UaemnZXgCvToBePu1F6yCpS1XKGSNh23pcUXF6UFLo3rEEsoLaucxXYc3S4usEJfDAqyK",
  "key2": "5UHSG7fsKgvaSny9af4rbThMauP9au3aqqWLWS32TKYTjKSRrbmpg2gu9VELZi5w4eUyuuHdYjC5W5kWJr8miun",
  "key3": "4hToqfsFjrDruEfRT9AL8gBgARbrm3yRoKgu4nTdnMQ2XTwo4xVBUR1SseTJQRuhfrSvy5AVRhTveGqrbcMriyVX",
  "key4": "5L7rAkheNgvTjiu5LHtPrrRoscSbWE4nW8c312memXJ4THqV67NxZ498wtZLGZzC629iA74SDP9zwWfzQfptTX9a",
  "key5": "41HoPki4RMPQNyDVN6u3MwqcKrdeQ1XbAtCTgvs1NABquHK3YQ7E7ctGfhq96Bnzko6h8V3RZBH3XXJCJRy9VS8d",
  "key6": "5w6JTd64eSh4rs3AZqG11WxBkiUpSTLmG3EPD5k5kvkZUdadfje82vyYzLtxVMYJu1eaMb4fLc4QC2CnQo7kEX3H",
  "key7": "3QP7dUYdFFrMjhFWV78YNmycHMhkNPjfCMRE81deGHNMhSemquK56UZnK3P6c3ojH5yfVmdCvHJwZD9jjzyLpZzB",
  "key8": "3WM4V3SuEqFVSKrTAU32WckgFLJkRhfvQVt1p7siNSoQ3jkWoizjJgrvanW8Q2vdHsvmFwV2KafthABLdspx89kw",
  "key9": "51GmuuJ5EAnCuB7yUkJh3B15suvifSj5PgViewt76YHf6rWRgdcib33vgo4xh7dMY4TS3SnaKHoL3tvDWKN7Rv7r",
  "key10": "2HVUrPuCDfb8aiAbEVBazxr2yBqsXCpfzc93fwcatrHbrvAv3e5t5xZqKP2skfh6NTJMetktbZBLEDA3Ndn3oGTL",
  "key11": "59QrpbK48QHqqXfDLXH13TbDPLTDdrsfzBeovGU37bPNLvyrmpBQJi5UusJsN27CNMMBs4fJ3YK1ihXK6hc8fdLV",
  "key12": "3ankvtCM9rkhmzkHX2NQZGFvwTQqmseUTXGKzm5e77BGFQYvoWRr1EDJPiZUUXYsmHttGj4DTw42B2Aa9piU3FZD",
  "key13": "3vbuo6SgwVm7f6U5zYnv9UCk4w2M6haXTZiqm5j894vjjv7sNiWcRAXc7wkg8NjGb3Xctc3iJDeDsSTBfb8x8M7S",
  "key14": "pYbF7di8vi1Nh5JP9npCEyG36jrDMWyLvvoS21wT3ouU3rMfUxNebk2StzMv5ne39yeErn7V9o2CMdX4oQ62nmB",
  "key15": "5HhU4PqkVpZ2dvFi9iSkDTBnnzsoNG9nVgZro3RLvu1vAxHHMjJG3xeRcjykyPbt6R5pJuSrvsWPS7B2VpRYCrxa",
  "key16": "PcKwfnnyQtBfHGgsKjuR1hMwY8roG3eWBnA6y2kVixKZkK6cPDxHXf1ttt4YxPgRSP6DUHFuKNducLo59fbCymB",
  "key17": "51NnLMLVBsu4vU3SUrx1VA3PZ2QHCeQjcftAducsBEK5hPBYx7yZViUw9et9Txw6cZM2jtHjNt6yJ7hP1cdzYo7h",
  "key18": "4PtumAv5TKR49zVXn8FSatkfzfFBqxr3HCY7g9p4N6rcZkG9WAotvrLheLd56Y4VpSg6Yn5pHw2F8wX7zhosLMsM",
  "key19": "5eUNnDz8gBy57zoehCTza3BRbfdd7g1SVhJapurVEv8ke7MdScNfsPnQb5EmYNi5exY97GZH5vzapVsQoksBjdt1",
  "key20": "52aVczg1Tr3DqgpU52WEkBRZY6fm3CFJepBzDB6wPgj2govJRuDPVSy7kEJUE7E2ExWFdMPT7aupPFqo2NApMqvC",
  "key21": "5ape1YSMto9HBk6w6a2FSHnSYBHVaKtPDPyhBPEHQW4Qy9D2pmc9bMMtSqmjgU771dXVmVDbYtp2JGSAAqsa4FrX",
  "key22": "2N5BYbEU81c8bWkZNaR4332dbNE9nPCeod2xaRAePXhpTYXSJX4kuCW4HF1JHcjmCBF2NRq9hAsh2rTGHc7fAmYE",
  "key23": "2iiQpG4EYDBBYoRFcuspQFhS3RpssiXk9bvnv2pR9aFGfSUe1WTsmrUF4q24SJeGpKadA39HL83svY84xFtnnVrk",
  "key24": "71oFF4so1vgxVGHf3PgC4vAHG5sHPdCRZV3iGvHmRmc1EyxYT6KipnXpxqw59m3igB59naBGNWERUdFmVuoSstv",
  "key25": "4Nb7earkXHejiuKRE1G9r76Z9gyPCF9yefutAnP1ZvR3c3T7z2vhcSguZNiRxgmY8ruwTN7phVzbQVeZ9xccrsBB",
  "key26": "5fHzn2q9vbieTbQXk91J4Z4YE7C7SaoMz6V6fcGtXPRAETiRtdPYhssUkdatwi8VQnwceZ1RMtN1dBdgGgz6ag6K",
  "key27": "62Ud9F1msD6Z9jczHnEqeEMCAfBDei5TLPV541LskrRPsUsSk4NGHyApLQFDfbmcRJdScj41BmuyAQAMdXM6fJpV",
  "key28": "2GKYvBFXsd97s1hqWGfqB4KpifnSmPcb6fSJUAmVfRSdkySEmTbfzZ4L4Qed59ypabWjtHLULJ4YpcxeMFhevtHX"
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
