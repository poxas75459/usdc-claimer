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
    "32R2DT8sNsHpppCbUxMHNM2RX32fYn23BaLnzUQHoD5Psh5qJnmLGufXBGGsag2qSYEh4RKAejuUvjur1ULpFTBD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tH6sfwobpwXdb89oc3GxkcUBZaucMY9ezvYCK5AkTAwjS5tYjVTS5gMSNzgkdRoF4JAmWLUZyg62vmzsVeH5UWu",
  "key1": "5ijUaZuKYioE1nh1sFAJh22ZUthNaAxQ8vdZos7LkZAoCrm8zRgj2ywak9ffcQhdRPyqwLQFU62YoPe6M7zbJZ5D",
  "key2": "5GaWUyYaSH9yNzPjY6zS9GZmQJprhXjM6euNn9EwzhFGDGnEj4mwwFF1P9gcmPFEEttbyXEzKemKBRJyuMF49xqQ",
  "key3": "3aHaZC8CTqygXzd222fcr8QguRGMvgffb7weuGwYGNzezyK3bCHxa5entRoewWZzbSDQakMn7rnJFLX8hevSugUS",
  "key4": "2C8qUAvLzkKDjuMcCjnpyFEhuGtthJ8vwP6jxm2R9oyHj3ZT7wR4Nwcej8yHuqD2rs4F2kyH9YsYeqtupM5g34S9",
  "key5": "7qPHgXQZZto6dojNw9HJDwqD3GwBRmkMwW1eL64e91TDpXn8YvnJYSwjRqboUMjStUraeDSm7ZXME4MGvHL6zD1",
  "key6": "qzNU78irJtY2QsQJiuH7CjWaxabxHStMbQQ3m6kRrFv3DSfAk5D8zus3391mbx9aLspgWogpCMVDvEq9F9G31nr",
  "key7": "3ozjfc9qAEHwMDhjskdtjCxiTuGWaCXb6EsQtuek986r8WE2QhKroag9BTanETGC371YiYD7wKaURBPXLUJF1yeH",
  "key8": "LYVDHwxyLpNusc5TrNf8CauhMr9jmnNoBNPinPHgmFqxkhWchMkUvJKMCqstcEWptWgnKkKJkUrFPp9ngDYnsQe",
  "key9": "3uhWqq5wVmftikRMtwfwCyBkjBnRZTvTRYBAM1fN7wh8Ho2Yshb2Aw8hyRWL4gRwNDNU7kLT3v47qokKCcwKdb2R",
  "key10": "4jAytDgzDxiWTTWWuBiaUUSEwMEJmY4eDATVVFydjo1PyhVKz4Qrk7UKRzVRNSCkgw2BCPvVqfDXXcoaAjTta5es",
  "key11": "3VjrwvzsPTgtt1MM7nruqDSGYfq6xV1NL1FyQZK43H8qm4qNey3gCMj2FxcZrdcmfMSNXySDwSP4TPEiTEBeDiP8",
  "key12": "3k319yZa7pc39tx1Zqk3SCzYUd6dcwwLmasaogQaiZ2qiNQgFaMWszSfsXYMMN1A4VD5Mi8DPvYpr86wB2iyhLGK",
  "key13": "5TkpFYCnx4nTPu8W7ttYfAktoeJ1zsRGM9horjsAPcVjizFr8aZkaUyiQrDoicmb1zpfYtgywHRG2knzuR3XQKq3",
  "key14": "4bmc1bas39XiCqKw6ExMzrqUUpjYu1SWvGY8Z1ATVtCDW3qP68u1ifuyUKbPXXBJP9mpRqkTfjHk6gSpsBDVp6qm",
  "key15": "4pULJJWjRi3hZz8HJA5J5Jb1kryBtNJYvZm18fF4KT8iWWwGoHkPgManWLZRtn1q5Wgy3Gxe4Lcjm8YS2m8pWVjS",
  "key16": "2bLEgZW33pDYSRuB8rGfstEwrvbdbQxcsPd6da4873mrhrpUtRMqMjqfD1exMpN8jChyhcjWMNmttKY6f3PfKKnC",
  "key17": "Jq5B4LWfH2DmCLsHEghVq4CPJoRLiXfF96K51Na2tqYDMW3miBneZsYpAvDdzPfNx6yXr3i7Sc9xyKZXhhM1FDZ",
  "key18": "xeaFWjwTAPufHRNFkhW6Hb9XiXwdkGnpb24QK1Jrww1rEUPzCS6LgbRJHAwmDCQsZQptBBvqLdZYywtpbCLJx7o",
  "key19": "3yreGg7FhrVUcWWGUygETshJLywY2CDSPzdXi5Bv6hS5GbGJ7VavDko2JMHWtHdZPd6rezCBD2z9Sx6cypJZUnhE",
  "key20": "7BwrN9TH1dDEwoUw5BYxodHRg4bVrwS2c1kt2eZew22p7Q7kdcQK8vvQkkgZky2RwtiCYnVB46wVkVsucBdb1zQ",
  "key21": "2bUnkRoxF26vJMhWHfF9kcg8RTrHredk8FFnSz6tphYhYA86nt1iMdzZnN1E9UzbX8yWZrbmgjXjGzXQvr6K1uai",
  "key22": "4VzzrkAn5GUxbLh1dae9NDUYGmW8mseGSSj3fD4pnun5frjNzkQr8nWtX3P8Z1y2voNK2M3DC2B3BX1RZVWBDL32",
  "key23": "5BDNMAuZQiXNSdDBGjCbPNVSPUcnbQNgEGs4BJQG7XzLxdCqq4rcthUdmV5dydXNuLPdUAQdcDbkfpzoPgMgmEHg",
  "key24": "2cXF3c7jUotHusKbtRAf5Y9uw6iqdHMD9i7LuRdKy17GGdjQZHjSD4e7yFKdQGeyHMnumASr7rqH2hT9ArKEzVVW",
  "key25": "5X3bQSwq1BLoDa5tbXg5kweNSB6M8m1RUAHLZFhK6ywKFvjexvJoxXyzMwpbDgT8MDu8rmRhoXERQAjzcYdzcKAS",
  "key26": "h1N1ysfx5dhx1omgyc8yXRKBdu9UiBor97WxjwKkqN5bngoZaiV94Z2CWitkKktHUWigsBbzt3Ykcf7b75obDWT",
  "key27": "5SaKaM3GXitxRCTL17Hw8G3cKNEgLRntp3azJuwN6q6yHXHTrBqyx1MbDZ2i4VJdDJ7SqXXN6RqWh959Hcgq4p2X",
  "key28": "651nbeWSu8oTi36zJZ9vLyqDhwHp6BV3ArczDsK8GbaW879h8CA9uAezZC7n7KKUe1FUZdeCvmtiUjbJDPWaxQ2z",
  "key29": "BUuV8mgLbqaxjWovqusPEmSSxxNorvtYjfdQcvXLeS6npc7De38SJ4FD5Zo9DGgpZPJ6hY4SDKzgM9uPS8MYj7F",
  "key30": "SoPmbkqh63ThiGzCGgN8gwQNZ2Wv7jBPakg74CXAzCCedsE1RZ8wNhu31eMZ69JFM3AZLhjepCWASftQHBt5nwK",
  "key31": "3w3MavoqU2LgM1uXGCj1NBRmjs6U5KrwexdLhQLWAmdy3yw17q2MaVfUz173oYmSE5WW5D6tSpitUU69BjvpSuFU",
  "key32": "5J4HpEMH2bAQBEEUMiCw5NWoQjjBacvr4BdecQM22wZ4RqdzAKABfYeZcF8ogZgqHBpYE14V75PrLmoWbVcK1BZ4",
  "key33": "2PwsJSTgcsyXeiwErcXZXMSCbXm61SXn1kcoaPA9X9NVm6C9CzSjJLy18Yh8sce3Rpp7AT6N9Nqkn3qhocA6ffE6"
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
