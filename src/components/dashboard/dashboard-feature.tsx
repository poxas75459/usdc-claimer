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
    "6DWr6Rh1Tia4ynQHcM9CKzR5KCRKnsGp6mGGJP2V4mQhcmZ8QempKGmi5Gajq2A7uUv4XApQYsj9GsDhcGev3pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nmb2dujjt6XP9tj2witJqhaBjmkqna3Scy6bn4Suyrn4UuGfVFE9CJvRC2ZRdg8Fncy1htmY6RR1oJy95eEiRm6",
  "key1": "3cQfbfqUgVE8W4cZR8mXR9xMg4o57rWNgA6aag2xEMHSeYm4SuAm3BbdQjiVPtxiq6mxkahnethBrwHRaoqAEWCV",
  "key2": "5SewM74nvFhjsRbjoHTCwry6AzqCEfUEGoTRwpPkzA1ffChNdncu3TAEEUvwVqp7Xa18Bdvpi7hRseq4Pr1H9W2G",
  "key3": "5Pck96yV9dZZFpPgWEwTC8fXJVdzJGauMLGhXvWqMwMVNQMduLTeW259i1bPdHs7sfXa4cx2wxCko3Ykxf51mtYi",
  "key4": "2GMjaViBp4EP9UoNdaKfY3a9prvRnJyYGk1njxZUrYWdeoCFfgYNWoNZqV3wTfoXKNgG7ypX1kAUJwxAUiaFXhce",
  "key5": "2kmC7RhZccvR2EuRvTHrix1ammafPTNYLDq6rfcj2J9AJKXReFA2ziQcHAbyb5NJDmB6jDVgqi3g8HfLVs9m1aka",
  "key6": "2ew4v8M9Li6BQGgBXhUfntJ8M8NbedqK8fbCjXmchmhL9Ks9tVTTXSU9tMMUDm1orVyXcoqXL7QBc8qZQXJDWVGc",
  "key7": "35jdWM5cLjztFdoTAxY1gxYPGNM3UWCBNsRqcCSzM7NtShgDC9iA7VTx7u1dY6QHSDQq6CSnLr7NqqBBrEgzjEag",
  "key8": "5CdfhTkXbwagvwQAqMmsLvDGJMSF187JnX5sH2RNjqsnsyJg8gWzjDdHkZ3qr9w92KLgsp6sQsE7cUBCRom3qC1Y",
  "key9": "aSLBoRdTHiD4ojPLhaY7BCAypq4xmr2juJV4ZYut4ay388ETgQ7UqsytwLFcF7H7KWnNkrhway6kdri3FfoVSm5",
  "key10": "4Wgh7bTjf7Mb2mDwAtZLWwNq4ACQBiRZztsTuzRUeZBRrNkj7NEP472efDoGAuMbDKYY88T9dxb2tfK8JJoPL2P4",
  "key11": "5f66SianEr5ofPQ5oxBNTGzNk9Ymx2GmZPH4Y3YdTDZ3yaSoAp9s1cLfaUmjVev1SbjNQZe8Be3Urqht8fsfhRgk",
  "key12": "vnVuTTEB32GCqpea6Yv8Gfz9DKg759xcpCnVozY5gw4emBPkiajhCT7ostNaEeHtpgxE7xEnMgfJ79p237pXcL2",
  "key13": "5ggWc2YkdbcaPPBNk5GBoyMvkVtzQjJjuMyAhswkHe7fRUoF6EDdpfesVMY4DJFGAkHDDaMWmFVsZVg9Qt8cFtiR",
  "key14": "2LmaDsqPhb9cFgVjw3fXoBAC3SKW1hUogdfu3MPUiNsYw524gAJ3fckyW85YH3xRw8DQtsx1SnfrRenipXGggC48",
  "key15": "VD4Tw4imWm2gKkPMnXTHMLDS3ABWVQSg2hFzQay2oCMrFtGKegFTz4hfvNKzxCwUaUSfJ2cftadPqBmS26eLp5b",
  "key16": "42ZaJTbgKp6ZnmkxriDbYUX1orwjpvibAY2vMNYdaWfWacv7cogQrkiq2VYb5nvszgC5xT4u1LFd1rEesGTHk4LS",
  "key17": "3Nmphczc2DVd4d4b7SwqPZJT4rCt1rCyDwu5VaZvw1Jp3wY2Esj2qJZsTUVsgtiR5veDqghrPh1nUZrBG4omZnRv",
  "key18": "3U29hPxRHoqQwe6eHjdo8GPV2Hn877BYGuCNRDKEJPvQRdTZKjdUwV9ddsoFbJLnbQ3EL2KtsB45ryFVGbG6uQAy",
  "key19": "dWxNT6zHZxxfAmQcBNvtxkydi1dR5Wuz9XeGeBivHn5hNfnM4jJ4qULGg1yRv3eSERzYvNXri6zUV55UqT4FRKr",
  "key20": "2XRQkeMrGRaqtkus6SHMdp5DZtCxgHG9vawGrw7QPkuFv999jrNBSNSAG2Prz3z5R5sYaEUZDZRG8ttxeK28Etkz",
  "key21": "oihyg3AgSmbts4mqUcfkLRNNw3DxBLdwT6APKsEoMCs99CSq2X5HPo7ktRxDmGTqSDsP5ttav2Ba1q7tAVuyrnA",
  "key22": "2sBGqmrVAz9Z3WkotVdTnDxG6y94EPsLcRiAsGHoJjVW4tifZggedGKMreEhzy4xkAdAC5iPqT5asFjADT6bUujh",
  "key23": "3QFyF5bbugztVticypsuuAjfoCoMz4MUEBs5wkcybwa1ygVGQjRLBzgPMumX1kaAkhwMF3LybPuDPYsmHrRk1hbp",
  "key24": "2s5fZhtZE7EaWs4ZtDZxvVeW2r9wiXKukdvcNNgXNFn23aHwnrreb8JeNSKaVjASD4HPvf6nH3YM18Bo2pUXA54B",
  "key25": "dwqihZBEyfz94hmj6h8yqBZmgZnmNyLdqsF1C8wPWcTLkvPb1TX6Wtpo1ntAr3nRiAV5EG4tU2BH8fNQEKffpF1",
  "key26": "4bW4fVbxic4fZuD1jZMqbT3jX23wAFukzrJpJ3bHKEiurkAwRsCFMHSMyp3XybsVpsxeg7rUwNyoZgHX8fz8n2m9",
  "key27": "rbFD1Cyq9Uue3hR6Af3CHuExWK6QF3JaafcmP3Y6LgYVLK6Yn3fU1rqtNkVHfAHipW3A3sa8eMcM214VA3zoSMo",
  "key28": "2bup1gHYYNgCpT47ydvDZvrT2DyXT4tuVy6VwR58kizWjSAzRwpctjZ7ccWpZfp6YRLx4t9zR48JftFyR4E273pg",
  "key29": "57WHoWAwu92W7aEqTL7gJJgYX12Q4MKzUaBeiR4eRUTbf3tWSyrve8RkD9CHXEKt7HWJsh4KdBu1NimWJitghM5n",
  "key30": "2omqAmboKoFSZLRBVamBm9sKjWKSUrBEusLHRSt9D7dEGMcLe1Kttt8vqxh3XDNfjFtBmEUVt6MdENNodSV7Q7qD",
  "key31": "3C6Cj6sAmRvhGKdbkChP8cAtJU3uAcsQUR7qq5JwwWBU4Styqd6YC9rceoVyz8ZMTh8WfVsJePVQ6bAjQXD1UutK",
  "key32": "3VHoNpddx2cbR91dvLtjfwYwiyhfy1y6H4wJM7Wq3GKAz8bmoyrp9jtC1uV3Kuf4Zs6vz5vipMiQqsGTXwQBmrud",
  "key33": "3tjFtMuJbao7fGJFXKqvTAhGe36Xrb4Vq6BatC71vZkfRUXcNmHGUZRoTPABHM6t52QxrNkutv94gJnVemiP6XWQ",
  "key34": "5CDERdx1Yib44qpwQtqH1EsZaTN4TSyV9t3hXXZ7oTzj8mQ1heRCNgQVydHzMVxeCc8oQZmtXee5VG9Q9UjkCUZi",
  "key35": "F5n2XJVYQSwkRGdFHdrNKpvn9SdfaMv4RcSatgayrJRuMd6jtikQGHXiaevt8snoontuwBbAYL8BRhwRhyD2mo5",
  "key36": "4f8U7Pz4Gvbxw8jN9SvemDnko19EM7ZN5SeVHRkm9pZFRCEu9kqPM1AhkkZY31L4YKDMtaggEz9ZJ2noEL65fg7a",
  "key37": "5bkXiDAKfrRGw6XV6DGKVpLUPBe5z3uq8acTjCrX8w6vvNm2CnRRSMfzLgcdMfKTEXJEVaoLpLV3T8XexkCVhfL9",
  "key38": "2TPVSkfW3Ei7vzoxb5wXFq1vS7zyVA4MLijwnqg8tDtbEXa5CpqXJnxQTDrrjybX4mSYJVn27F6BDD1ZGBSecNiq",
  "key39": "3jKcgCM8VktZ6o1HKDdnLBcLDWVfNkkKbpNGQukZ5DdzKZNgVQBpYdaSu3jYCEq2MM7zYkN9rHQCfaBxihsnUAzf"
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
