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
    "57izzD78NxGRd4zNbFFwuqdZKEbJ9vgTesYrfzkXTkWG7fp6Ph1nyXboFAF7xJDNeuDvQ5S6bDcuLuw3Y2tdDmrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63XBSuHEJ4iXSfvA1tBLKhg4sKGh7wQWASTwdRkhzB9R5CJFBzMN6rYHYoWdiZvJrCrCnrhdMGn7vpxnvGS7w8FC",
  "key1": "4yguXYyYyzbTw9PZo3n3g9zAGavYE2SdJWjGpFntPzhyihXjuhdUn7ituCnW9HzC6g8WUcHsRonXnYXiwYFhBWmU",
  "key2": "57PrxfaLjJQz9VN7tf766TMV9C4JPgshpGzPFm3y8BUr5cDGBQD3BLwEf1N1wQ6pU2YDhy13GDW9gNCxTiTMoRoR",
  "key3": "3WCCqRHKNqTxHyUZy8pACozhrhbxf6MvjtZj6mfRMdrNxtBvor8j9XkAL4PuLHoDovVN8s6kzDCip6mMSL8uRXko",
  "key4": "2CwoUd8SGgKFzDhe8FydBbYWYsCQu5UY4oupBa5EU4AuRnJ5ifvAeB95QkgawujvGGqYHrVGuEjt3b6BKqCC3Jpy",
  "key5": "4vAnZRDrvyVvquZbgyNkwGvk2sAAMGZkrmRGaFZptTuS6ykpJFwqG4LK9QbWLQB8BPJ2kmFuVfyrn4jUtNzsHktP",
  "key6": "2n29DVzNpmSbxkqUCx34WxGoNsj4Vk7zYgKuZK9t3FcM8QyBSrpSos74mDjC2YBZaHrtR3RgcfjhR8w5nBWYdEzS",
  "key7": "3R926huJkCNiT9Wh9hSX5u7qzAMdWowg4F8a5UsLP7xbYogvZAxaXwzsJkt1tzwLJ2Evy2kePVXxxHUfTpbZenQa",
  "key8": "5PfdVdh7u9RiyjAqEtgAk7amrXB3Y8VioxB363bMt5y4iLF3NYFPtsB2PxFDsTpcFYpWsNNJbVxynADfR8ByxRgH",
  "key9": "DhRjDiuvuzGD8LGRNAas5YmcZtktEd2MEW6Ac8Ehhpjq1h6jSLdt4siBm3Q8URENJVrXSkdwwJGmthE8zaQgZPP",
  "key10": "2MHQvThC33oDRsMQHztXy87p6jxuen7wVFDsEg747r9kKHDJ6sUvshKoKYxgGkojR3nfegTWSTwEmt9syH6Lxmk6",
  "key11": "b5dsdcZuSHTJemHWYgywYtGLz7M3a3v4xj4X5o7kfgXurdog2neUkXmrq9xU7RABsSrdoc3GdnGJiH7m4dCRgas",
  "key12": "4vrFrdea1VbFciacnbUjqEW41sbF5Kcc6faubn17wyBbnHG33fEgAFUbS9kZvycC75EHndUccKavgUSHJ3zxXrmf",
  "key13": "2eh8DxfXEckkJ3JZUoVixxLjQN2x2qrbEQbzfQuCAUXojjxUCF1YxX4WfhysSn9ZQH44oz1AWt5Gi5MPcUHtntMV",
  "key14": "4QBFrKUoHAs9CcEeoV6ETwKtM7sAoNU5BuFxt3GB3NT9f6VqMKha5FAVTqjc7w8zNAkY9bXEju3VMZiCp6YsQMvC",
  "key15": "5DpW5jLpRRUq2dkECUQmNiTF9N3Hd7b5ayHz5m26ebNUATKuZhFrNXvdSGWLuLT1DUcAHqJskx7MxHxomiFBUDKb",
  "key16": "2oWPnsiPiDERhoYbnjAdf8MbZuh8yQpbVzBEAuo25rpiA9jPSHUL1z8dkH7tYzxPRdg7e26hMAaPEBBEh1bL43Co",
  "key17": "Qg11u2DCGfV16aUKohjwkdqDJEpzM1TJEnWgwz2duGutNtaLrhZMACsTH2owzrngwN5Ev4DunKwYBZrjC46YsZU",
  "key18": "5LLcSvEY8ZTGfdk2cTz5oCdPfkSubuDZd5RqHyrdojFL7gbfvC9sn7wpsSNUAte9wYVfCBCDdr5bNecESTDHjX5v",
  "key19": "2nxodVUScKe2DvQikuBaNorPbEiUM6uUMQw2F9L4RMcnhGpthFTWi2n5Y1vRkCWD4W2KwEL22M5b2q51C3STo8dU",
  "key20": "47CL59Dyp5T3GiYtErFWdBuScrK5DPqmeN34QnVk9XYG6DGtWhvRpRMvhdc1vL3MKGrxbWzJsnT7r2Bwr5Vu83GU",
  "key21": "5bA68Yi3KB5NsohyEfzVG2g68Sby2qD2n99dJ8JwCBvR2GwsrQE29iU1ehpTGUpqfy1SU5X2Vuz2qowU2YJC9QhW",
  "key22": "2KRAVpszCXsWiSn5CrinyUJwLjFzp5n5aFQH4R9cfarC2hJ6TnkBaxv7B5ETP7WCFhBsoJKUT8TbPNHg7ho6aih7",
  "key23": "4k4tTSXjFgcR6PQXt6M2ojPjecFtz2KkUpfuC5dsFHJnBhgMfjcifatj5UZvXyyfQEan4wPzk9mkRYFWQvXSPJ4r",
  "key24": "3wwsU8z6EXbYqTnxe7Ucx12FqJRg1GKLUNwS1dxxVChaVspYDKcAh6ptHzTua4ko9Najxp5r1EoK6eQpBXyn5Q3p",
  "key25": "5y1nXDTyEBs2w8NFf9iMba5XorSsKA1tpcv149gAH7k1n14Y9E6ZGSQoqGzgGYbk7R75RrkuVQ4nBHNgmM9tEhwC",
  "key26": "5cp39hEgQQWSfugP8TTQuZLbzyQikSpxtuhXRmMPMFRLRGm3vYyEATv4gL7ReWfcn1M2gm81C19o6tyMFAc5GQd4",
  "key27": "3zQQPzYWGpzPnmKCFk8i3EPYSv8WXkFQMgeaTZS9xh6KwXiZVzYskmFJ8eL3oTaBYuEymteeYu7GV3wDfDmZkRXm",
  "key28": "38hjVZUAv5enJXMfVGs1WaTWvjqzpSVYPNKemHUX98engRtpT2kfhVBh7nZW2VkHMEqLCR1ZWgJMcWPXGXBAB6j6",
  "key29": "5fEVKc9tXPHnrW22bQDSufP2xtMntLyn9tp7kgex3vSotBzNJjfhq8eWR7W8Un8BzitRztFF4crf9cQNcyVJKNMF",
  "key30": "5ibsh1o2SAdXfPTbWS2qFFDG79Aw2Yt1Tiy8Wi51h7ctXPCjg7tXxGGroLcMqGQsrSzw2umYUURx9W3BxBmjSnsw",
  "key31": "57uv8moKirVQwW7yEJ4Rw8H7otyNHsY3KxcNBzQjvR4ouxkyGapQpWa8HUMANU5ythUrgs4TeJ6LLWashASzCfzR",
  "key32": "ALKAMnEx62sDdqB1pTdCmGgxfgi6WZY2fP5uXxSUGrEFEUpnQDW5wicxPEjpNjQzftdAcVhT1cHdopFwTfFpSVg",
  "key33": "2RibtcSztyRtxUzw533MVhtyL48Xm12ag3gZD6as6onCP1XDr1M5p2ADEL9xJfB8JghCg8frm18xFaMgEfkNqTDN",
  "key34": "5e2emD4G4HyYvRE5rnFa2wxWDXsBjMNC7MbuQk8vdoSAP7dEYqqBMa9NHeJS1SZkajgy6p5hy5zp9K3sANoZGTcF",
  "key35": "AAe6EkDL7FKkkjdsoKfbXrosxVGSFPGh987jFDtzyL91cApxF2yRJXadCCocy8jJo1fBnD789KdriYc73uoKWE1"
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
