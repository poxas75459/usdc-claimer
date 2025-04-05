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
    "2bVAVjf31TN9nhKeu7XriQfYtXBPAseAHqTKq7CFtzDmw7LtrpQpsbVgnf3GEuKB6BgEYfHYbUtf9DoBmeYNR2AD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iBNta8V65WStokH1ScMygrKXB6cGLU1nVD7igqqsGajU8ipDT1mcqBvyrtytyCZxo5Y2wb7RC6mRzfS7nrPBr8a",
  "key1": "4Ff3TrNVHrzwqtLG9BdFgMyyLVCKFc5URJzgdivuwGK58VJREB7NFLrvY5R121UvdprsxNN3HkKEXex9FHsYLtds",
  "key2": "2sU4Xd16RcuyUX5cJamCtxY8vN9ZAcPb86L5oiUBvVNbF9C3T5hma4NycmdoKVdhCYSPCNRCb5JQXy4c3Q3UeWXP",
  "key3": "2bvRBtzVfoNsGaE2EFdCvYhudLmMty9E29eRboa1z3ygxdVbmrGYvS7vcN66PwKrqg2wsBcb4W3A6oFNP2WRLC3u",
  "key4": "36oPA5W8N5gD39Q3ngDaT4mDPWAZDwmKgDCD5iNPCjERAZmBS1S7VSx12zKLJCL69eg4cHbSKnQE3iPJiyqSgVtd",
  "key5": "5nMh9yfJvGTdL2mxeVN7B8Qbv7U2ivtyeBcXT8rNBa781fnPn7CBpuYkwjXYELxL2hRuLUKoiipVkARRDYfwbbww",
  "key6": "641oosHSD9KDKrpGFqHyJBEmJFkj5DoqWDNXFiCEpiANr8We7EZjm3X6c1YKXeF3aik4qxSCkQhnX5f7T6STB6yM",
  "key7": "5rtStXffB8PFyh8EDaYaWZYo6vKgSBzpHYumSuGtN4V4g5NcsZVARR2VDnoYnrPHggU8hnwArJd8cHqppZE74zPd",
  "key8": "3CxKJHHahfVeP4BbKyvQNBX5tMSzKeXeUdaJY5LcU8d8WfUQb2tpZDCk7pNxmcrJJDjx47w4GMBJ1xEjUUFrKC16",
  "key9": "2Eg2HoMUo27MGHV9jiSZgGZc8go4chuFnhqzkpw6am7eC6WkMdojqPCDU96x6siW1TnD6kfczny4QzfTB84GeBsT",
  "key10": "2H8Y2NvQ3p8JdbND74jQri26LZ3XPwWhWgUKWiT1J4eQxE8NznZMuAZYiAk41PVGoZ12v7h4PeHno6CEa3TtfJQh",
  "key11": "3qoc49i8wFETwsdHhhhskunsGYG56yNGF8pgYXZoy6E5uQmmkR7GpSKJi7jfE1VFckC1psekCS3tBkgrQ2rrc8RR",
  "key12": "5uZXnHyk6mwzbWxHZJWtaprs8rNbHN3Tv1PwQYkE9WCSJT9R12q2G2A4SuWftfuGEwxWkXWCnVsLuCyq5x8m5obH",
  "key13": "5WGrr5SHHkV8YP6xqrSAYQYkTLXeCnAzPaDQKBCNKiymRc8paFLYDPLLEXujYwknVX1WMgCwJuedq4NFw8yiT4i5",
  "key14": "3j5QBt5s5cA1LBwsBNcawRhMrsUqhi36EsYzGPYjep1xPBjvZFfCYfVKATD3D51PyFi4Qy5MUUuWsQHcPM1Ve7Po",
  "key15": "5qABmSbcYETznUs3bMTqfnA3xcxfGZzVnSzQBWbTdYksAeqp7mrQcAxwq99tov6FccXjFaMPDJvTC3dEPRftcF61",
  "key16": "4FnaMkaMbUaidCr6rRWribspsbgXLcPuvuefxWXpziXhDWSVEHQY6tTFAeeU8r8UShtJDGXkzdVa7jJ5vzVS2huV",
  "key17": "3JFcS9ufm9N9a6sxpjF7L3FGgjpdMticb2Dpo6i6Hs4hXTDe8Vhg2C7C7Qu3asjTqhRErGxToUsrQqEPKKFWomSS",
  "key18": "3GwXpW2FV2h3RoSc416Ys2ZCujZmzaYYDY7BtZxhvYCaJftG7rkJSrfuUZaNRJQnoTYtnbeQnvEzjkQTqHigYoyU",
  "key19": "4G74L3ipFZvMf9sSTnXkaFNcbniTvQxEADGaqVY9Cu688VhuVSRgmANW9jfesa2kWjFhPWRf9D8922bTNPCAtXSQ",
  "key20": "4h4nLjm6oNWKzRitF4aHD4St9yCXuMH1F8nHMAYw8cWx5t6HMFNCHtPC1GanQD358RJmYyavc4tfPNGBiggMCKwP",
  "key21": "wjedtcK5PrG6ehF4QqT2fvAL6ALhnTCEU5VSj9LjKe4UELcrhHvhrxpunWxmHCj45QaXjmqtaHgpYPgDaKMBNek",
  "key22": "3ZSu2ni9xFfZL4Ayxi6q65Z8zQ1KDwhtPbUmzkBZeC3bFcyDWeNMgXdztxpmmWCWcr23mMhT57dyqu6Xke1w2KcP",
  "key23": "3EjCiy6avX5CcRd8SXtaJeQRJTJh6aJJ8YybuvqwzxpLch2MHrxbyYW2GtQuLsQucWe82cJw7RTJkujVJMhq84kB",
  "key24": "4iz4iaUBT3wzZDSBog9bGSnnmj4fXVGn75cCofMvHu2vPxXj5ZGMBBxLMSzpNHM5KUHAmAqFWuwJXMqrxCVzEuAd",
  "key25": "3jVjfn7PCmoHycThJJ6bFpggBhN9dXiSevpxmG8DcW9TaNinD1HkRXzRqhBDY9jQjye57XzqRjg5LYokBg12YPNG",
  "key26": "5LfkeDrCivRrw4oj5xKdzj1YvKPqMi4hJroAJ8r5NFCednofmczMQv2nSGz157HR8ZF2nsD9MTmj92UiEkbSZKN5"
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
