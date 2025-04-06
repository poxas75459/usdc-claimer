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
    "XdPmcPCKVeMtBVKPvvmHbW6y2YxhdAZpJp8GBR9ZGLCnc1ZXWoySTSa57M81yc2M4kVyH8wBWcMfQXGExnUsEMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KM7wJ4MpBUfNduwaGdzpownHP3UaomnTecHWCGsTGu4bdit7QbQGdr56jimBEcLmSWy3EcBJXMtEKXApxYKPE8w",
  "key1": "3ZhPNBqmPKTFsG4rx25fm86as1QgvcEXyYz9g59oei3SHZGHxRcqnMM9Rep45ANDGUMc2QbkwXN1iMcyoPnUEKGt",
  "key2": "iFMoC9kRcbwuLnQv5fUV7X4g2kFDj6yVZH6TGZ4yqc6VBuz3oudVDycp9sJCxYM4Jd7TmLGMDjdAGmm3Uv1Fsvp",
  "key3": "4ukVECJWUnLFWgoPg1kNnq65MBB8DxQPHQP31DrcHBvnm2eRr1NEeSCoNAkYpRdZNtSF6cSA2eAP2joAp7Zex6Jv",
  "key4": "4ynGktrryzcMvxP3kzMFEEqun4Xf4XzL4w2iMPrj1yfH1oVAnhE3uy5XBTMUmCeoBXaHWGRNMNsPgTo4yUtYfeXg",
  "key5": "5ktR5dUTyXiryZgg2nqSijgPd4qFMhZLxh35ASN7Ghj3omJQdDhgJxDmKfwq3BMjSg6xWo1h38UCQv39yCMVj2tT",
  "key6": "3a42Adg44D2KMpVy8XgcY2EHvx9Efpo8oT22ks1B5p1Ho7DTeFgTPLV9NbB7mHKHrd7VSpJxf3a2tt94vRzzqQHZ",
  "key7": "2JU6aLVUYMmV6ZCxcwovmbBCVAi4gz6ajvCFthLZgYSisLQu4d6TfkuFabaJ3T1QaUeeY5Aa2bUsRxpnsKurAMfu",
  "key8": "4XFF5DZcH27o6km448HXWkyjZxS1v8ALqFKdTB6qz8cj6Y9uYYSSJdCGnwbJ8H5NHGVnxroAWP36ftbgtVveGt7b",
  "key9": "4ooyJjsBVgmtVsaE8MqdnDhXQJobR1ww3xzBRtV5Vs4o3hMsHhTVQGDs1Hs55xn5txUbpqAGdzufESgY1kiTRCeZ",
  "key10": "3zJVP1jMCriJ9NwqD6mzdfWzNbUH5Uyme8aobGfkUFdXaY2iaa4pnAhDPEXqjGvK13dN7v627E65miPtcqJH1gFD",
  "key11": "3JjZwvfHfwcwoux7F3cbhEYZRspYE7QyCoR7akwyf6tZLtpRTThLvBKUMMKTqNKtpZEYYNVMa9rq5F7pns7zy4d8",
  "key12": "34oF1cM6wJcggb71uYwm6cHLZL7PJ53WGNRbbprWvuKj8ZzZ6Xkk7PzQsHAnX9HNo8wJbqBbnemhCHaDmrij47d",
  "key13": "VyALaJHCTPTQ8CwEpL67JQ1pHpqpu4Pr7Q933AuHZk3T5QxijvPBBYJxHoyskVFnSXbwU18uc4MQx7LSXJxc3Eq",
  "key14": "2btWLRS6bjYCQLG3mhg5T3x91S9JtuMFEyC1jtYJvTvbJP3C2N9EWNGBTQLMFd95fYntAudnqRF7cRLr5XgGANqp",
  "key15": "4AuxwSB12XhfZgheGSw4JFWq4khcdycD6RDXKRjzjE1vHCcz5WaWS2ScQNcjfYQmT4hGKCUh1Nayt5jSZNUpHM2t",
  "key16": "2k1SGXWPSwCy9Jt4YJS34uGAe8hmkuSfLLebm5qHWLgo8YZvAkgM4LauHBoawP7ZUSzRR8iNhrbuHc3B8k19NEcq",
  "key17": "wueLQWe6df1ysMM57TrNRPPM8RnbcTE6KXnUaFDx4YEdRFK18o6yiYgyASNAuqqGk1QjBj4EAnByH5dXwHCxCDy",
  "key18": "5eNmMPVxsgWuwGbamgj1V2zWEJUD2XnLYvJdzVzRyrHSeD2mF5GxtnsVRQcbgv6VkSmyQgewiaQQ9UVKoEA5Zo7L",
  "key19": "4LNWYrdBhZYPX4jM9r9NbriGGJfxJqf7F8DZKaXPPymHRdXyU2TLNdsUy4pym51iygypfR3CSMTZvuQZ4mErzwtK",
  "key20": "4xC7b8SF21771RjG3yUPbPUAXwXBa1NUrkUZJRyngCNoLzA8qRsDxHPtFS1HHqJx6JTHy4Pb8FVZJnYef71hmkvX",
  "key21": "wEBLE7Aknh1MmHYP8VrQLbSxEBhiLM6cj3yoCd4HdyPJGjTEW6xH7sdPSm6wEZgt48VNmyHpnvz5dRs1WHjxF4w",
  "key22": "5n7Q1oYBmnSe8Tv2xgeGfzGKBTQw7gN6Tahmigz45WX7Vor7CG9tKVj13HFpaZcoZaCUjgCQ4Yy2Mycb6Bf2F44t",
  "key23": "5JwzTe69mcntP4M2if9tNnBgFdaVDZ3C9yDtR8LQwNeNV6U22Sntdcjc8FM7WxW7PTaj97A8mykXbQwpKQLoDmi7",
  "key24": "PYquR3NGoFmMMJSYHb7AEBtctNDBc4pjd5PtKWbzBYWpGdXrBdPn1jChiTvwKpFjujSGJdDAWyGmxGzCYtqCXPe",
  "key25": "2kPFYpREB1E1rhXC6FTPFHuBLMa9grq36mViVYYzZksb4NBWqB6BTJQmGxfK3UHhHTk5oYm2mLtRaHJbmcepYuDy",
  "key26": "5uaajVbAFwVfYyBFvPDGasR1CXxMZmrMC8aJv8TK8VkQxiC8PwJ1q9Bw24KXjNbyaX71g9afBqCECT98shcpbLxM",
  "key27": "CSA6zRMrSU1RsbQDTrcKBjZjMiqnN14qSu93cJdontVeFcvKTP2Un9vpVUK6EVoyKPdhPohZ46UBnxV2uewUMmn",
  "key28": "2SYZvuiH2C3VesPtuCPF8UjzYhmXBhHN8jb2rAT3j2BnVHz3FGnSJCeBW9hTNUDXDPRvYHMijNssgbuEdAhSA7GL",
  "key29": "64CTmDwg17iX9Gr1RagfmibokSe8kGgZJMdVqhr8tQHZMtNhZM84v3Y6b1teiVeTLyG2oo9H9wTWhS4qcTdbvvxg",
  "key30": "52bCUpFGp4rKV3FcJA9KWJdfWZ1MdMRBF4K4FYA4vg88qb9CEg7i9avzJffVxPEURtgKbGJy4vseh2yv7Q65KtbK"
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
