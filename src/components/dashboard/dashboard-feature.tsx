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
    "5Ybu8XTWD5HQBBGNUZWjrNwPAREh3hurS5HmKR5KKT5pmF7d3vXKTcYCeEnczAwpeqf5c3KqsHmT5SmuKSpcE3gV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3XmMwJjvWbnNXUF4nDBuHtCcdv7nSyEbE17uSMkxrKoriMB3zkvU35ubqiJCNwa8J4hVV34cREa59Fv5nRHRnS",
  "key1": "UTGhuZcz89f1nBQaMLwwUew9ymUHgYVqCw5Eby3wZvzJy3PCg3fmg5wdfLEgJsTmV1v6ow32YBxfFi6KRSzk3fQ",
  "key2": "4JCiyoEWo11J9FNWZBfrRMJ3redcQKFQtGBjchsGrFajq5or7Lxm3wiD1QrJu6HkN4USPYd3Xi8AcGNjGnPCCdx1",
  "key3": "3A33iz9rkb8iVgotjM6LjmtY9bjUi3YYxTEc3YLCJKnp5CR2BWZoRnWU2ZzAjaCiFBiWHf5P8MdDbYnYsKM1cQDu",
  "key4": "36uNz3gu6SiEQFLeULyia39e16U8E2mbMRhnzxzE6VHFhksM5wtVq9tKJMW6fiVPhAtR9UVPFfunh5s6zvvE2f1Q",
  "key5": "4wCsiszLazH22k6PxS9En23eM8CeLkh9wBXfYTGoM1jj5tLfBhQDVcGmb2jwzF5ZZNs8oUozVkgZF2q6Vt9NgbUB",
  "key6": "2AaGWpm1UdSGofXyeDRJbfmNaQAm5GWD2Lj3z1nSxmSiDhZfLz8Nmet6rM3ctB8UMMdx5JMi3CGKWRCFFH4uztob",
  "key7": "4tdnJ1NEdsLrhKsDreQNXFk4YVBQHbcbs14pogsbgVThu9xYwmGwdDS7HgBAaYRUv5LF29T7viPHtb9382mtj9vf",
  "key8": "46itVg6PVpmwsRXZHAhyPP7ZDkK6h4AjtL8Evv8JYCbnsuLGvHrKtttLtbi6AkeuWH614r5gNmsyD6qMoGz2NS1K",
  "key9": "21gzBvTY3jBDj1afzBqMDHHHCz9opWg1ec2M7ndcDBfN9tpZ46rydQMujW53PtK5ZpFqybKDjWguxt1fXgj5fTS6",
  "key10": "5eYq254mHoKc8i1JV6hCTutUDjgRFKqewDNPWFMocaWh72F4KdkWgRHNz39ZqyqjhDxp81GsLmUn183s4WDDDqqE",
  "key11": "2wx7xtoxABSxxfLkxep5dxySKRreeJqUqg2sVbLUFNNfHnSATWmJbQi5fcC6TJybuQqg2yc8EoWZLEySAnvgBKHi",
  "key12": "2Bmz7qTxkeogYPnapXTWMz2k327yGMPYAyNKbAVTuj84f5eMWZuosXnZ9hxq4KdCt9UY8AY7QjwCkmg1vJ1W1Ucr",
  "key13": "SUhEMqADPFeUsDNmNJTEFMFQVQn91KiuoCYUR8xzaYBrAD6MmzKpgFfRuK1Feb5zwwSeu51cufLHoL8VAuKsiD2",
  "key14": "5Nnnq4VwtsarPJZDZN3LUKaibpJ1RLNFpZVFwRiVBPQXJ6ZVpYNGyaeMxo67pnLRaXKujZaoPbKErVBdKDWK96PR",
  "key15": "5tNPX3kk4R38gXxYoFrjgtMDVtU442tjRvuKMB69guo6Q2EugaZq3XDH8fF3orfxr7dFeGKP8nzKQCgqaqf7PfE3",
  "key16": "2LD53pz2neuoQCbY4G4Eu7BKTyMwtiV4wWpGmDU6kMyXtzTVqGQmetX5zpBNgJd1ebrnK1CV7ydotTczS3WLqa6k",
  "key17": "3NvUEFFLJrZbjwuXyKySYP4MxP5qj9PKvRrzDWn5URaYjtwZYnfxDYoZsMyLmzsardXSBAz8Ssp5LLKCjLjisCLM",
  "key18": "5tA9TaaoavHTbBj1hXQbYf3BA52hH9MyzR7YHfj4pNP7zhxA44KNGh2qhMMUvYSnAquNBUEvdDRhgmzQBr9t3DEi",
  "key19": "5migWZzWbLEwfgxRWhkTCujyh9BvDihKgg3ByGTgpiMKUx3z4Kd2rrLrrBJS3TB6oK3yfpj2HtMLvCA7Ekma3o6j",
  "key20": "5MtFh7Rn5r4oszzeMQoJAAS41GaJQJ2q5AFC9r8LKrrKEZAE2pk1YYh3tx7h6qqFZRoYrAfUwUrQRxg3TWCUiKLe",
  "key21": "3UTK829aLZ9SStA8GDXwTU1fjUaMojQwriXw2kChvf4AXJPLkTSrXxf8DWj7CiyCNNnZC92X33Bim4Gn3fG25TJA",
  "key22": "dETTMPKSJ75CLRm6DECQzwh9zFuqscKx6iEZSoUBafCR3mhd6GQCDGhT5hkPDCEthSuXBBcySfMue1UktWhbqCA",
  "key23": "376SXmmXUVXpFtE1TmyLMeWCme9KRXMALHM2y4DcNftcctArg3g2CVkxtqs3zBPTsrtvxvKqKoC3JoNQjCysvNvr",
  "key24": "mRxfvJLhSAzY8LXj6SEWkCtNbpxpArbnc96hsub8hCLBJ2WXbefzGbiNo6q1SENPsFiNTzzHPAwstn11wPsq2ib",
  "key25": "RWUrTqJC9vGZFfjSHb2yQVYW8FbgfZEyMe1n9ppvyvoohzmhWf8SRJU7ohsHTmVjntJn9sXLsknRMXD6TdsfKB5",
  "key26": "ez3DMmaZArEVWZhvYZLmGon3oFoa63oA6EZZgtqZL9YKPScUMb4T6iZ2YXMiCAyGMqj4F4s41aPZXEagstq21pF",
  "key27": "d9xNQrhQRdHoZ5D8Qhznj7kHsnn98mhtSEJuxcKu5rXFVBUUjuLXh8mzN4JsCV4T24151XZWxkNEoJyiNopRxBi",
  "key28": "2w9K8eWGUxWiF8TjUw9GjrYqFU1Duv3GVmfFfeKNySHQyBGkPQbuyhDHCtsVx2ZM62KcCANKnvKc26jwWKMDC9M6"
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
