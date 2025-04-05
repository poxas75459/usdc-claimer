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
    "3du251i3ap3A3TmryffREi3DWhVGs2hMCb8RakaFtM2HdvLWh4w7acJETMUfkxjNmYz7FL95egH83Y1bgmbskBYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gTyhTCk7CDkrC6LrNhW2iRVkLupjsPaTSuCkQLLvAzucDgs1317HZonjutaabYELz44bCt5Mb1ik62ZVXb5t9zR",
  "key1": "2GejeuMPg7gR85rRoMvtpopAkUFKMTV8a9iNdcjghxD67otVRXy7JBf6uBjaRqskE4rcAYmM4KeWdmmFu77U12Vg",
  "key2": "5MifMR65QFesAu5W3eTQdxjo2sUvkBNQq5MEa3Cq5c68CuVYpSMKMRdPpgMM65qwNnaksgiexBrKfLuSpxgcr2YD",
  "key3": "3VFiC33mp5qCAAQehUiy9X1LzG7YJb9Yzi12DiCc6ocWHxM66DsGPsRe7B227x6fTFZNQK3zWUScJtaXsZwo2pnK",
  "key4": "5sERTwLi9Ew8e5bSSxLhjmgoaRRa9SME7xG6QdAAqeYMXdYS7H46s99sTBU2XZV59TC7hnK4YpPMQDPJsCxmmChK",
  "key5": "2pFRoQBNhAFxkyHaZJimn1jXUmswuMETVKgqwYr8r5muuLKmDSQ9t99eA6HYgFoGgkVXEXPVEp9TYUeE4KY2C3PN",
  "key6": "4C4qeQWE2pEwB6aXLcBuNTAg5uwSteBwoD6M93gH1HTUXJLCuq69v73cvSvcyiBM8DiykFgxDsH9at3hPaWXaGVq",
  "key7": "55hqn5DZEewbxrQeHh9FfhrbisvdvvoaU3tz4R5NDnoUsvJ89ponfs5KGDRLjhfAdW9KjZCJ8MxKXRfwHUYx48ec",
  "key8": "2thFVKDZbTv8DZXqv7agtAbJACLQJvnU1nkKG84YYiXDvn1dYbwdxEnHfsa8EUVtv8oKxZc8eEqi9q2EqMdoU8DS",
  "key9": "3KFseoj3gQ393gDxkMCxWQepwABtF8hLV8RcH5HfrGM5mkG6Z24cedmvv1pHDX3FLnmhtqJM7KzBV37HepiQVNKL",
  "key10": "5VC8YRaBkYBXRJRtfQjzopEPfnzuH11tuYw2wqjuvQpb8s5vFXSjmZHunP4JnXFbeCX4RoC92v4vudr8TXExAYS2",
  "key11": "4psMSgwZ9SE3JpsqpNnfamSR1chpSBJNbt9qoR4SAZrgCrm7gQPmVAa9drz5N4S4pG9kJdszPNPa9xGC51z1QdKf",
  "key12": "3qKhkhut85Z7giXoxZzak5x1oJqrHDAkRPYLWeficztRS2dV7bGYiGYdpY4Mtz6iyEBjKKzsypLfixNp6NTkTQf2",
  "key13": "5xQAtqz1rbeEQa4oMhdTzw2NngpKr1f3zdXnmrqWFpLFdsqH4iD15BFQDYFYHR2oCzbABKczDboNwctMbpunVV3B",
  "key14": "2qPZBr66LodqCXkkjf7hrnjGPbsNJFyVJSebLMXujCtU6gfCZWHpKL2iWkhmot5APY4ULiMaxS8ZsT94FyT6ywxm",
  "key15": "kc2xFSiM8otPKZxQeVFvUNCyii3YDf6uHjaxByMHtFaFSK6RTuYrhfhSEkcsJ8Eor7rAYn21icKbrqn25rq21EM",
  "key16": "3sabMhWQfYEgGiRvgokH6gKTVBLWrvra6VKE1NxdxSXC1KvQUSbLgy32wemQc9gYFhM4VGnQN8RLWjCj8UT7sXTL",
  "key17": "3n7GFvEmEDWuif6CrDmwGbEsyrDMy9R9rmqxgWnc3tQcw2qFYwGCEKMTzqb5uPciRuaPsuejV7aGZirdNLF7qsmn",
  "key18": "5E9tdUZDsgFiAwmvxjVRb573L36Rh1nGggf9moBC99M7c9xqBL8SWi7yFtYBtmpPJghX4NuLGU2vXAkybbKp4LwF",
  "key19": "ZugDXQxxQArmdYM1mEANgGd34eqW3uwvqpczUctrmnMSZ8nXEsKpWw7zKW3mEiZ3WbNFHvMerPzekgHYh8UyFVC",
  "key20": "5z1pWFktoeriWpnuuBxJsNmmporEKQG2WqtcLrcr5cbjKBaXjTaoGQp9HXFxcyXk7Z5UzjMcNhPVprUHtayiwecy",
  "key21": "3JbDnZxcGYJz89GJv5WRUUwe5niL5MWKFopZjAQc35VLrpAvroLGBzucdSFnasS5DcD3Ce1MJ56mERaSX2TXrdUV",
  "key22": "Y39A2uF7S2ZHw1B5EXxPdQfUFPjjZPUDkK3Xb7aSMJxkWvC7qjumzy7kugVWx92qAhkcQWLL63uFYhvxzxPBfAX",
  "key23": "3fyyCiCd5NoBhUAzFkUiAHbEpv4cPeaBUZjrSdvpGsMdg15pBsq9Pv4AZ6KNFAtHA2nUnCR2iYDw8Aqiexnvb2Q5",
  "key24": "5XJ8Nvv4rYQ4ojD8Q1WdT67zeS5fefT4zBvNrdfpevhzj93s7MiHgi56DoUtPwPLVzxWF1Gw96Cd3A37FSCAxNsW",
  "key25": "4ajidBmaZnbPL3U64YxmZNzdJLcNmkzVnSNXkkn3idBWtrbjFCiiyR3QQKFue5Maw3TuYBKgEkHbP7EDQoLwQMaR",
  "key26": "51Y2i3sFLtRbLFUquwgs4Lh75YJgxbbCZcgkjs2DA4kstqhzvSi2KAzwASC1v4RCYmJrN8KZcENYjX42FWESPRmH",
  "key27": "4mH1KXQTKqsU2RgxHXqTYS7KNcudGXV6ELZh26MzLqRGjFLStp8tiLc2FAd5gCFhsoBEHg7bW9iVvrf7frEoTtpF",
  "key28": "3RD2fFAyNyAvFsAM3akLb38FQhruKMPRNFhmBB69pxLLZ3sWEVMXdtcFVKXLA2YSgSGMTXxXu3d4vwit4JL8zEdB"
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
