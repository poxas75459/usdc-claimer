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
    "5eMYFw6b2ZpxJ6pULU63GPuRw7iLDjXcY9Xn9hL5A15sd2AXhmY7SmCrKNWRvCPUJvcTUdkCixXsbLaKG8EsEbZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jnqG26TsRqavBegENhAN1BktEjrCC6n23z1d2RUhwDGQHXqYv4BmzLvRsCTwH3CjS8TpbfM7zf7qp2EGPnY7Lq3",
  "key1": "2RfsNpUV4GXkQDWhK6dE4REgoQkd5FaK3MCgJKL6nqF4DCfaXV5Vqoou8adrmgNrCqAghdM1ubSkkogHsu4JGBpW",
  "key2": "3f5eFrbdCqRm3CcGQhhwuqMvCB9Upc3By17KVcg8296ZnZHG1eEk12rV61qtqfHix8gCxJb2JxJpxkTZLc45GK8H",
  "key3": "25x8oxx93p4uFkbiZj5Zae38vYR2TVY2VoaoaLUuGbgxCHTaRvhw8u8xWXrajtFBDWH4SQHCJ5ukn9EK5uhqpYyV",
  "key4": "2EqHX4bpMZKpdXBjm5PGF53THrLjGYy8SbXG6k9zGesMZ4ixgoAqFKZY269xefsM8LDuJF3BJEqVyc67cabd4SG8",
  "key5": "3KbZ4AtQtZq2WkFW2PBZrQZTpRcr9d9HYDs8dTePm79hVUG6fbyfHsfghkn1ojiYNVy6XSE6BpuTTjgYtpmBY4FR",
  "key6": "DFmZAjT9U1T3g1zGPn4CUHCBAhikYjYmJpDSsbrVNLALKkWecaHRymkjX9rpWyTnWzaPajDBQtcWyq36wv4oavT",
  "key7": "4DG5PGgJzTUMzGub4L4nos5Boiu82LGdvBgGbZe34kyK2erzcjZxcR1uNFiJE1uvoQPYWJGEZchz1FqabXF9FyCT",
  "key8": "PvHYhADEqbEfogre8useUL2dXAYz79Ec2Bod48cS4q6y9FkjAb9qKZifXpvrr3AhkBLXJeh72qs1KoNvQX1sEeh",
  "key9": "2fJAkzHuNyJK7NKHg6WHTbT5Vmu3EsNsDmAG6yqPZuuMDg1LHCXLQU1RHZSyC6Y3DJPdgyfT5nzYdQJJasZKsQhc",
  "key10": "AzXDF2qQKXq8BMr1qxJpZL88TpHC2zpzMfdZfjPjxaccQAQDuT5P2gBK28YmbTTVj2Wf6RrmPktQe9HimBR5jgj",
  "key11": "2yBkajNhLSSj9R8fPP4vKcCyAAddPRN7BdkqP3qaYVrUMHJsdEhaBp3BEynCzunCu5BaACpq4DC7UJudn6tCHLKk",
  "key12": "2J57E9VXHuyYACYWGsxrDwt2QAzxbYRaoBrzLydUCF3rYa6ChPD4esdJGVsv7YxSeMJKt5DcP8fManMuYeuPi1e4",
  "key13": "3qb7oq1hzm7xW4URJZdTzpELXHqvUxrNkAonMoodYdVTsirBLhZDk5SDnuZRZrxpEJVgKZeQgPYtqH6YLhkY34ii",
  "key14": "5yRcPpUJ6wXb1U2fAkZZMEsgvSNvZ4j9JaPLkdMZLFg4PFZ4pNdXnMkgnpLteUa7zLFqq3DoCT7sPDu3zMxerASo",
  "key15": "uBX9VtE9nUPo7aQoeV7tyFxvGB5nbRdmeS2fGBjHvmHqBAkxHc2YWugUsJ8YJdKZpztm6V48Gidyziiy3fbSS85",
  "key16": "4FLe6J989AjNP3rp1BT8eYYR2Pa6ouuwwM5sy2w7cHLrdPCCapa8aJBPdtu62SeP9W7zoV8M6dy4mcKSWQYUsou",
  "key17": "q9YwzFaaNkn5ivq5sHmsfiNuFyF6mcgB6J5dzbU3qne1zbsxJXPbGazHoLcmztk8C9rEhqySZm3JuXYf5RR2Fzs",
  "key18": "3iNq8uqTbsm6fGa8Sr2johMAHDq5zdHXXdtFi8ptg58dFtFEcGou7JKs3PEqXdxmoHyR2TbGT9bw43erAbC4Nd2X",
  "key19": "2QSrCpPoe7oNfFqBZnCt7qfveZAB4bDniKybd52WeEge6SYZu3uYNYK6exBpRYki8FxwryZpFcP5PmRmfKSKCUtH",
  "key20": "47DgDBdVQz7ubBzkYQ4NWrrnMb3438xZSkGsjUEnX8J2MhcKvaZCHa1zrF7PGfFs9Xc6Gm2RUaChGpGLQ7CE3KdZ",
  "key21": "42KccXBPmGu2XNYvTEJbbHW6aMymbtPkxABKY6Et31cnhEPSV1yduUHhn57h49YyWyUFZRMRsAKvEQrpAwB3SKBr",
  "key22": "4sv1MTMXQL6EG4BtutSfyRhrfxRbdHmkWGk3wmZraCHDtTPyKmrHwHNxKKzLYeL88RcH2ivxT1gqawa5K7smiEry",
  "key23": "wFfY9tS6i4D7PJ11BrfEXAP8Wp1hxFjaeEHuLBy8eAw7CQVz1F2D5XCqtCqxELHm2KQDADBeis9J1iYSL6mu8ed",
  "key24": "5ehbhbGE7ToHPbs6u3YK38FrfdGnjZxLajXWs7c2qhgS1xX4NyFF1RUMMeA4ZJrJ9ZP2J7ivvEp4X8pc65te8283",
  "key25": "2yb3fSxL4moqHPPHaMP8PXJGgwPkveDindbmyvzg7GwJ6sVEGcmh7Zc5tawPi5tU8B76KdWjvT7oHXwUAxcLnvgG",
  "key26": "jWABLPEuUg9ZYUspxU8dSMCuvYkRf67rfq7UmyVbX3UbfvdKLKm8ngvJc2p37w6QUHbptwrXNk7QdB8AiAW2CDb",
  "key27": "BZDCcFw2UEEqYCLoVJJ2pcPKcBYkqKoqEfd7zBxd1qqw6TnRUk2dyQqdtjbzsaeie7YtBdbmJysRbY4jxVvwP9Y",
  "key28": "SsHCNZiB2APjPQ1GcQx7RB1rdUsnygzpWcWNGGxo9dKJUhdZC58gdS1oYgoS5x2ujEVsKL7yML1QVUaD22gJJEk",
  "key29": "2U6sxDRJRdiZQCfaH7p6bCoSdJ9nDrkTLDjMGx96Fwpmr3beXmaXqtFSuCYL3nsERZpVXh1rTpcyNaaM9TYEt5j",
  "key30": "43wF3jWBCnpoB5tDLU9JGVafqb71VrQfi3JgJyTJgQAYDQ45tvwpF63UtcPFZdwDJ8r71TukGT9YdiNp846xsFAk"
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
