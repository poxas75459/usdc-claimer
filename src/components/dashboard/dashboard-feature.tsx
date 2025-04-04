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
    "296RFXvuCVGxjKcSn26Qv9CQwcyTrcH9N8RhHQxK7inrsiAnn9CAeikNptwF7JndRBJB5o9231VfdrTtcfRgWbcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ANkHYVxGdAurVF7nyZFWBB8fh9oxpkputpzLmmdc4FASM9eMAhHuZUHbcAVhW4LnXJJqDt25keJE5ug8vvGhjg",
  "key1": "487HwXxXHhzzchiSzS9nyC8Kt4CtHSoxoaefwwJQgu4M3Nb3YUBLZXQ7tbvh8tW54zFoGY2Wfkps3UVvQuu2Wm7Q",
  "key2": "a7H9aJgRtcLuus1pRvTaaHHQXPtrAQYTJtw2WxhfKNMyhZ87ABtBzsbUErENfa8RTsvofQDxUbDGqk2mgWac6Jt",
  "key3": "LvXGMmrZZzzrgGT6vXCoTWy5TbfRG5C2K2anLHgJNrUQU2vJcHRcAivGW2suVvXu6JWW7kYWA39dDUt8T7syH1n",
  "key4": "tQegk8j2xC85BAsyENuFgbSt7SaCzXMUY9QxGgg9u9PN2zemoGRgV5rPeJZTBCbXcSPvuaCQcLe9MRWDPnkJy6M",
  "key5": "491sG52XgVyotVn2UVXXLHPuHCvaNu9iosxCi2Wcni5mog2oBV67QWPosUoPUR31pDRQqLEgERYThRyGA6kjbA2R",
  "key6": "xrqUT5B5LrUNDUdzZh14BiTWmP8i4258YFRUj7pB3rUXozjSnxnPFavftFua8vnAhJQ5Mq4C4FaS6k82en5Va11",
  "key7": "2HQiGxvbvGUHEsBATf5kML8r6WHKjDbAEJBMiKdfmZweVyonCvGxJDueN3qs5ZPUBKVp1P7MiPsbxvGMdf1FjzdM",
  "key8": "2iH6dDnGyRVouAave9EPWPynQsaZkA1sva7gS6feC92Q7zDzDZT39HrK77UhNFPhxHCMTohVSVW21oK4YmYHxV1m",
  "key9": "5oSbVimVWfxSTWzn53BvMLwPSqRtsbcptrGXUcPAFEtC6AqHVEKAxwXFiFqvHHgNsuJqsmeNPHBchMd5MusvAF5x",
  "key10": "3MJkjHtevByJDwGzt1x2GRzJzeRXm5thgPjqBPPxGY6dNmRS9NQrgKfBLttv8Edk5HmEEHhy3wRwtD4GJwTr4jSH",
  "key11": "4z1viZJmtWdzrLgxwHGcWKFjaRNqjWhjmpuL3ieR6Vj49bzMoz7JShPGj1x2kMQst3dkNBbAoZpdDzYcGMumXe3P",
  "key12": "2myKMSxNzGUMfZjmNYjtBJu6odNPVW3WEmEELkdRvKiD1ki2RKtbiptNTydi3pVhiTvu1iUhn48BGMym33zUA9KT",
  "key13": "46nNWrGAgasB2RpBBrbK4p2zYw6CTWe7qLQxDadBMJXuh3xqBKXcykqJNkKAy8GzgYATwz3cg3D6YN2nH2ovBUbr",
  "key14": "4nAjJG4CszQRaaTfAKdB3ybNUkgWHok3msHNDDoM4ZVWmJAvmWtiJKLzhZ4ErB7wqKaQZiC9qBXwT9FY6yKVaX9G",
  "key15": "5mmRL2LWBxKErZDiE9hS48gAuZHUpNsqBkcJcjCd6WtGU4RbDGApaz4Cd7TghXWEzzvgLzg4YjUenbg6qKKDuveP",
  "key16": "5ryJR51LjB1SuQLcfxFDLYRD5uR14pKxVo2vjdjDWco1GpjJLqAbN8KaAm9P978SR6qg1VYNmEdSX5TXmyhp7aB5",
  "key17": "4FArGkKBdHLGJ84idBCAxQeYAF1aAbfhskprJw2smMGLtFKRvbQhghEn9xCy74TsZRR5tot1kNyuXTvbrv2sL46S",
  "key18": "4J9UZTP8kFFFZD2KUra6MYZtWsQAp6zxzH8ck1QqRB9h83yDTPKTr37TRWBmhrnpGeMDWxYjto24MGq3rfUN4Uvb",
  "key19": "5dYHM6bEioeGM9Cb7KsWHbWfSyyHQtqttEKQGJ9BLQzzm6aWMHPae7H38BAXKhvExRDdAh6XTBNVpHuKq3HhVgEQ",
  "key20": "3yxQcZvaKGVvg1vbdC6hjrQTWp41BRTi6zULmgQJqX3c4nT9ixfBWp3Vy5M1PriDkkpoqorWWN6xuuFgCn7vBcEK",
  "key21": "5Qg52kU3keD6LsAdf386DBbCGJsdfatTmEfoRBo3hefbYU7wcJtJFqAZQ5qadxGSMfGnrm4TApuiKyYbn9EyryRv",
  "key22": "44Pj2MPfRKGLdfrWQ6TrYczoWgcDiN4V7nf4NH95Li4bGYgV8MjUBLRCUSvXGtuoh2qjFEsvKWVL6v9MLTzLCaJo",
  "key23": "28WPwap6tCA7ZFU6JWHytBMeZKpAkWAHitfBi1DFLhfasaJayjsvgpX3eTKQuhQFSkAY7yYmNjZoM5GAEzZhDSZJ",
  "key24": "4umcKYMU3YvE8Xd6SdewRWiwZoEwe49oohNUtfW9Gs4cs9cWDwXpgvLYyExwYoVr6tXTaeSg1G7DFkC1KWKMYbvg",
  "key25": "43zuumsxK1VrJnuKnvKGQWqwEcqv9LDi6pavM7iPSMWaAbBdnUzNyyZG6q9yqhuHhckEi65EmsvTiAp9VngnWijf",
  "key26": "3hsduC8RTAVcyjqsKLrQZkfHnE5dKMVGA8jVjGV8zBNaV2Jrzqd1Sdp3e5i1WHeXwGADL4GYFmh87syfP6is8AbJ",
  "key27": "2Di72ZgJiYCZhZqCsHT9xkgEiQjgWFAgodzF8SeQf6p8R5p7882mEVUSr6TxJKt9FFQUZPySHQKsgf9RLQS3DkKE",
  "key28": "2LUhn9gM8p74EcauSfJtbpbDu1CusFt9yUB1FjQkDuZsQj1354hogAgRXQXu5DBtQ289HjRRthf4ZXmHL2B3KRAP",
  "key29": "4tJEx63vRzKvzah5d3DZzLcAoHNJQSx1UPd326tz6jY4eV8wG2QBsnyyNg1U7SHn6LToGeZw6YZiaLCN7hBq7r3R",
  "key30": "6TPPCLkXtWtgi1ryQffS5au7SJJ7mjAQw1vpkdrrzeQD5cT7FQdcEsnvUUMwvYs4wwPZGMe8WTxb5bnsZoYv9F3",
  "key31": "5YU54R3yTXBVm1Q4iMHYp7FgtvCXtyEpp42ZAsbYnm8thkyfTSvNY7SS9Az5PoMtf6gt64pNJicVHtK2yqf4GRT4"
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
