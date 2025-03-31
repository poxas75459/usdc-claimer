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
    "3HvgjmgodBTkEbdQMH5Byoax4Vmzy3Ekp8trKQbtoigbv1SprgYoBR5k6qu34t3go4iKg15jovg6ASbhiBajzdF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2chKru8aLAybaxRgBKAdsZWuLKttmL3aZq4pSfM27Axf13NvxXU1CcihQoXd2YMJ6Gmsf2YwaU3mirzbqxTXvPn3",
  "key1": "5aTvfUqFs5LXgrdFHsC2dpDC2jg8epxNv28uetnn9KSKKURy1VnCyLfYnabwDcuVoQoQ3SAnHoYNix21cNZQCBdA",
  "key2": "2L2MMXbg56XzFPNdYXdGzpe7AaqNGKDGZ6GHSkWKRFtWs4E4gjN73RVWnx2zMcNURsVMEFbVTfUo3Tm3e5qiC1Nf",
  "key3": "oQAhFvuyvfyqeGrSvGgrabkSud4H3jKoxVvXTiyraKXMjED1krrGcpcGDnmG3Xyv5NxgSB8YMmo7oGijQknFtCu",
  "key4": "652n6ePdj2Z35cX1HsUc6JpfvNXdsd29K9jLEURE4xtf71ZNAxnGHsAmYWLZakt9AA1YHHWwu2YSJB6sdDUuobji",
  "key5": "4vkx3zJZhpeTAi1fydWGNghAkoq2i6X2UQ3tzioDBny6vJTGtK5N3n3PKomt2byQxCavWoswHFvgJkrvqqT5yqWK",
  "key6": "pGvYGnY4oW6onUMzcoVSY11kzH3Sb4qW6THnmTk3Bfr7A3fst8ccd67rEghB9ZscHYbp3AQooEhJqz9xhnXEqv9",
  "key7": "5pAQdag5htNxFNcVfMVGg8RdKdtwEyPCtVb2fwfHTftc52eG3fqJwCYaJkpSjZz7j3VW1fNRNbczDgWTBgSc1asN",
  "key8": "4G4PtAEw9dL9jRD1MZAkHJWsoFax2pyALCGq524Cn5ZCQeYm9FEjj3n6PYLtv4GRYer7kkF8UshhnXAmtfDFb8HL",
  "key9": "5GonnN9SGWrQhCCP5aosFz4hhZgW9wEPuU4aGMWhnmFBuP1d7p6k7DVMDQxGVJFsYa1tHEmAuXVvxy1VBYALTCHL",
  "key10": "34nM5hWQgFaPePTi3pmR44RzmbpswS4udv2UiNDg8ZVKhoyKvQ2gNqHPpLjYG7VMxz9br2213MyL7MXF1VsfS8zZ",
  "key11": "e5cRw1fHEP6UBWFK1CWBBdhJvtyzBqZTPAyqMeUGMf2nZN4pcw2kxcGpkT7S3isVV8QAunLmfjnY7FseFdPCA1v",
  "key12": "46RpZySSTXW2K8D89NwDNWsgSsbJMoiqxRFhoLq8xQTPfrzBw2xgT5RtXj3MGtHeaLNripX6jgj4tnGReB3FVQtB",
  "key13": "WxwPyJoL3tTrXZKPEKeaCoz7CgiQe2qtRwwZw8AH7bU7xAHn75vXUCa5yPDksvvNKorQ81eQ6eUnPD4zkRwcWgL",
  "key14": "57Dbr3nomfjszJG5UJU4PzQDE2vqcaWxhQAJx1V8p2w5ioTLcG5aqgSVP5JZJtB2AAvgpSxFTqh4tkoxVzd5fMqH",
  "key15": "qcv3SCo7EPMZrWDRE64PVNa7of5jKHAeRPH5LdhpKBJnApTBcaqFEMXzhGbiP3d3R4uxescxJiT6F9UmVutuCh1",
  "key16": "4dsVrrK3LhrVSfM6zGja68icBemoBhFwnuVivNKJwDsFV2CFukRXdW4fffHvCFyk8v8tNudYxnV45N3jxEFwCwNf",
  "key17": "2YJz19xytPogJPXjBHrQfcoacH8tW5HTf27CjsBeBnrrQ5zMU8oTyzmYhKNYiZNfKNJ9z67JpdQbkLG1Mm9ZXAoV",
  "key18": "4gq3QJPGbPtfbmGwTwmRr3S8kDKRUPpcYqJvtJ8v3TWy1srwyKx8BhSa5bThCs9URqA4us5C2Wne1MuVarDHZGJg",
  "key19": "5P4QFVbytUbhn1ZLvhBdr18MEQu5mkkTwoLZbXh6aNsVc2CxP6SoHwda7oAetehiVSe9uZKz74tb5yRRKKmBGBjU",
  "key20": "4Et9gBmQJRWKyeZTCx619unK9uHRRJC51SrZaV1vok7jtkoV6eDkWvd7EyyQBDHYmCStsVZkVRriA2MKsU59322p",
  "key21": "4XWoJdpfKaqUmKWQ7bTCiCEsXdxA2WPBe1VDbFaoRGsEiVSSB5dyA8e8szim7z3UagpnFpqYVHjHvXTD4PmekSdn",
  "key22": "3eQZVsqGT3F2hAPYVNCjQjo9GX6hELZWU4fxmJWWwakFCdJcRJvYCkSR2hfrv33scZtjSYetEea2Zkyi53a76XC2",
  "key23": "J13W3LfjQbF3S4NpTE3qwb5ET94AV5qkCiVFH62xLnzcw2bUHoZsGbj2zB6tfMNJqZddXCjNcWA3zLXj9Bhfi8k",
  "key24": "4NxsVShsePYX9UHr7WMRbhQiNZh5t16mvWiVUiAxZyAbimJFtg17eGndejFRru3SheS8Mj5CghnKqzGVbDGbcMfN",
  "key25": "4kY69RDuK5CiAV1t4HaBz7QijNLWgi1p6pg6UJWaZtsSFomgGRWCJREGcVr7sis5rWPoaucSTXxic1VpZ1hFvuW7",
  "key26": "566AqbdGFKrVY6YAxnBc82Yyy1NJFBqPbZSAzzxcuVTNCjnyb37AzBNFb1C6fdtbq4hYioEFMkMMGTLVM3K7k3zy",
  "key27": "2MDgipXoJhXvbjCXGdEg26ym9NLQ3guw42XLetKDdsWqcKwqtg3H3wJCuenQx4kev6LHSx94zrsxxU3nogN5gZpq",
  "key28": "5VW4XFkf23yYJdyQFkE5GLzbFk2NpdC7PWUB7W1fDkhuaF6Hn3UMYTgEJYruNr5fnVhMeWm5x8iXbs32Zqo9eoBW",
  "key29": "4vf2YKFZLpgXgpqZq7xsd9FuKW8BuhURN38zyXDkHDDzkLLTX9YBrXjnsMSHSj4zsg34wVAsX67aw8Zq12UrL2ny",
  "key30": "5o2RFDttzJENmVVq9mhzWXbVTJrag8xKMsQNkSjbtcPmoM5dKHi7E21DTdHpKFsB9ss5fkvpN9wbLnB7BGRyx2ub",
  "key31": "dg27fnm4pHoT293M6PyzJFkivAjRdYVR6F6LNVEm16tFX5fVXzZgTWUsYN1HWHBe4r9UgfpZyfDUboWVa5LDwRb",
  "key32": "63wCcqzFjk8evC3rV6Pa4yAoaTC5KGG72uzm66vA1YRR5gembevGswNHQtpjbCrXE3oGjrbhdeogkDQKEnRyiiQp",
  "key33": "2MBi4TMtoGjP3Hu9p1fs2oLBuUrvcbfBgvTReLVJGGC6wV1Gav5LsCF3qUEa9oBJQo2VWMTs88BaHGEwsVk1oWAF",
  "key34": "4DGhPPKu4ow3A2756SBfSdWWtbYXYTyBvXAJySBBDHDPpXtGivfJBSNpEzUtg1okMPyxwpzo2F76nTX6Umc4u2yk",
  "key35": "2yjSm7zwSLqAHg4mTCvPmxVL1JPSpbrkmuiQAGobvhiV1c1RiaHycU4QUnSCyS4guGR95saSSExipCn94GFZNWur",
  "key36": "2uVoCiaLhT2acjBD3tm7WtMiCQzjQxRiuEhrTkhWEtCz9mew8GxHu818X5bSAEAWeLeS6R2kqwh1vvsbM8Kg8mCA",
  "key37": "Fw6mKJUdpazFAJ1Qy3J94Si4UAGR32NSixvoMXJPVTKSRCZkhQZnKBAYby53HkgaQ9jhD6GbQXAZTo7WstfPJy6",
  "key38": "33cLqEVrwvtELqrKycrnoJjpXGr8E9NV1DX9sB7ZwUuEQoL79zXMZqDrNXqV6w73vFwQDj1ZzLrfJMLwjznW6enc",
  "key39": "4GdtLSpLiuwCzTRb4uvHoZikw4WXkHkdQYjtMNpzV4KNWQrtzCA9Cx6ZLDUKo6Q1MJNibCF9JL5Q87mwnmnEKtCJ"
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
