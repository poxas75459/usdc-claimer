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
    "5tuTipWqRr9K6QQ2PhLkkRN24YgZPk7WeY63a5t1NyiVG8DVhCzyxBR73soX3KcH3Y3dR3BEakLDzAHMqLLy1eyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R3nmvEa24nezzKdLXodhXLYFvP3AGMVPLWxgKkSgLx98uZsStarmddKv6bjC4BhnshNCEYQeM8u6sGoaxoYFqxN",
  "key1": "56KwtPtxf3HHgx1i1CXBfsyLPzoPiWGXhLtebMcdnZnNrcWbQLyQoDCu8WuRq9UsiVrbDdYTJABMYvDz5zecTRi3",
  "key2": "4rDFeSx8LcdxVGSkyXzLmfaGp2xTDaBuCGWforWasowusCTmtLNzXkd6g5XZcggvNYUYRG9XbG7FB19Km8zCfKZm",
  "key3": "dN1wHcfeW6mxFFipDnkVRKp4ioYdL7puAswnp7f9BYayiBqW2m7EmDPp1nSVyFnVDY3KCFux5mi8uAx7KR9F6Zy",
  "key4": "2CSMAJt1cnMBpLNdKfAKZQ1deP1Tgrwbtk92NmQPZLVR9fRhAJnAwsQJnZJuYc8FRDSVsx7p9oV48nmYANiAcEa",
  "key5": "vENTyZznYqH5zEqFFWtSEFVBu15fPwEMQJnFewPcpeaftNpycQrqYnuNcVxUXGstPyZJqo5U18xyaXcA5AFbGqz",
  "key6": "5rrZiP7oMPunbhZQn1TP2dDDkR8RqT6KXcDfdaoBhLkjEgAfchpY7aE2YBpKfCAgkj9ByVpgv8R8uNp2LSqLcXNt",
  "key7": "3TK8T499ZzQvkQJsFCRjDvRaqT1Ky5RQR71AV7zSouhsNVjQQFfmbSG96rZRKWNKpYDtUcJXcjxEP2D7P48kHg9Y",
  "key8": "vEfDz5yEfhXA9CAAVTxUP5TM2R81MQLiLrGgEp7Qm2x9mtoXXvXXoNaehszKGnZEhHzPcryVz5y4supwMT7njM8",
  "key9": "2vV4fVApSiwERYTdfVw5bc8VBvknjYGBWyBpSuyBEpHeX5fQbwW3Xdoe8R5G32qzw2cKUgWufymVNvVLdiYTPTbQ",
  "key10": "2LG589iSYQVAV5qEr6YKyEaf1J2RvXXsMd3158TAYBsZZuC1SiEY3i1WomkVYtkT1efYv13cET49LfTvHcwzk1N3",
  "key11": "3vtzrJwbwAXZ1SLSDU2PzPpnZUa8rzpYXYPwMhrdWejK9r6wipoXj68FwqksMk9HkUxzdkjM4nFawiy7qEeYV4aa",
  "key12": "bQmvafm8wCyRjZ93rRCFscnb5yD8npuUYmf12UEkgup5fe2FMd3HRAcE1WdbWJGH1VvCKSZYvTnDY8uNBfJrX2J",
  "key13": "4CiN5goPsNH43P7GZNp7KY3NsgqRjs2s4U1RJZ9cT5EMwFBuU5j2jtw2oxE7MqmCpmxxj3KKBuDX9Q4WtzhF9wMs",
  "key14": "2GcsgxwMvBpFsxHRG6yC3aFDx4MZHqDWs8By95ufZVW9oST82c4PXSxuGMmSwEjyS1hHZ8o9eshfok62r5TyTfoa",
  "key15": "5JYn3osJ9tMQ5vjnw9cNn4tk6HaMzupeg7SNH61VQnmuvcKHXcVmVSe6nW8SaiLyMPLXvjeVqViSCfKbAyQcxf66",
  "key16": "552n44HFpeT7bEE5yBmFKNFeeyQAzuvwEy63TZeuamD5Gr22xwFC8fxwvV8U3W74hVDcdox7rVAjksG3yarCVZ1u",
  "key17": "3zXugCu4R5heoTfpP2U3ZvDRCCnnkDRZFZfkEicTDPRGkeptuuFU7Gvrp1h6dwqohLkt6Lb96KrLB1CjKYhd32KK",
  "key18": "4pDM1Bt3Y6wwJvghg9BW4pVo2SHfuHKvoXPdg5g8KzxfgJK8ffKkCvbREh76skY2kA49RyxPxxEnan3pux3Yc7J4",
  "key19": "r3epGem1YxqWmJrmjxEGnnZ3uCPmTneHe8cDtsGE8H3e6QEhxfxsGmf7UZ7Sgso9EihUirw6bH2tGrYmc6vJWJY",
  "key20": "38xJKWD39fFbiqocfrhSN64CW4JZUEa4LNazwzLxWqdYbuAzwxeomtSg4pe65JehELeYjiNmPkn7o5HQ6yTZKe5W",
  "key21": "4gmCKBPDQh6aU2hnJ9GeYEbtwiA99ciPqYERe8c4mfQoD1VZELytZLJEc5ixTMSEjomHR9NqokE8vduHNkuPbfHP",
  "key22": "hyqMQfb3vTnrATJCUkjFwTjCoctdRkk1BG6qqAqAjHRdA2MGat3yhtN995ZBL9527BXByCpdjEpNkjbfkqNhpCx",
  "key23": "5Cne3Nc3UK2yjejs8n4kYfvNA1eE1oLfue6K6DAyvwHrNNddkAUtw9umbGsRvkNKNSjtMGkEE2XdrjWS53ydFXEf",
  "key24": "5X7mApwS2pnchYqive7j8Azniwgu95E1FhVEdyd6HUzQrjnWNbZsb9uvt8tiDwi4efA1zhQeEH6ePxAn8WNQhAPZ",
  "key25": "5vTYHbrC885sSHvGDGzDtjQF2vfw2n2Wfa745jNzWDSkuG6Jqk1zzcg7U4g59jvpApiH5VkjntJcRPJmQFqVf6oF",
  "key26": "2igHs5wewxiYBHJ23uVh6mKmGQ3aZzNxzxXAU5hzaNWnKL5s4Cr3EcH3HwcEfoa6hqLe6RjttripdGvN4MXfRvs2",
  "key27": "4mSsTVwHJbZ7zS2JJVRdbua6oxxnPZR8R86Cgf3uk1rfGNZzMT65z1GdjU14fSPhZQgxeXYAqnieVyE1LoArKjes",
  "key28": "3VPYPCXELStxRSer13tiGtKTBKtgmY1KtUThGAwGTvuGCEHFa6javMCr9U4RJmHPa1CyhUJYLHZnfpK8wd5ntThk",
  "key29": "3BwJS4ybrBVHRwEKDEVYzq5n5hiQVjdTcCau4vpyLAKQnqE6y44HF6ozb8xPxHLuMKEE3wHEjp8Lyfy2gnnvmAXB",
  "key30": "2FQabJKz6scekJiyMMoYuGhDnXT69FAL8SLsSnRSo2wKg8c3sdmiJtwWEGJGEXYQmVLrDUwgt2hUeHbNy1wRnwGw",
  "key31": "4xAX14X6eqEzMeSctxPoU5jnvazzUuTstXmYxuFJpvkwKjvvF3pEg3swqJhd8mJRmGMhGi739AUHiyzcDTSPwPat",
  "key32": "24wYEqqQmGVLgBGEvF6ukjw1Nvwa7tqpjRQPmszVye839WmGDPYSZKQZgG6c1uZ9M1VVnkWLhth8FWoqi7YRnM1o",
  "key33": "4CVrUfJDyjWBsQhRsMppvy49zHJhNp4kz728A8s815jaMm9xdCavRAG8CqwkFwA7ZJE8AqzX4b5i5Aaxu2tqzU4k",
  "key34": "2z9AqernhKBwikUHkAZuSX6niG7xBtsuiBqq6XUubwC2xqmCZFcTWgFoffajHTt7p4MrW7XaJfWyALqqF1fyAfCS",
  "key35": "5SGtXewUKnKVLtpCMWqfkntZi3VQLXuXDnT4cswixVud2NTVDBERCo9ua36kPteK3mitYh2FuDXrZrzpwdDHAjyu"
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
