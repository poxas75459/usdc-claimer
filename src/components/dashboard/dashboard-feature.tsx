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
    "46eudYxrrjM9RrnvGgQ7NfsQf48Yva4PEFASWZC8APJtDLEFQGx1jTxveZWxDQeje5ATZMPuTFAiqDf6mJGdUHLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ErhMcHFemrHZZpDMeCzmQcgBEyCcBmwL797aorSZWjvP1uksRrWC7hwtLf9bBLQtW929V8vh21q2AuWfK752xGZ",
  "key1": "3paMZydp2u3m7rQGNXYJzU1tzvVKsGw77LF5WiHtxBVCcZLUNekLHRkUdXUF8fBqS5f7egFM7SXdSPwusDSjgnK2",
  "key2": "3dtZDJdx5D2gKNfXfZ4xENnNeLytSHBjXVGdfdWCCYZrLkMmc5DcqCWR9rUmTDGUrio565n7SZcjRJK4UseiozjC",
  "key3": "45rJ7qngxXAmPBXbso7HfVE3acwwkzuDMijVB5Sra3r6cS3H1fKtbW3cEKHdf1utRRLLzNwN7osSD6JXox1n19HD",
  "key4": "S2E3pDZ4aL7anMCgPFcRY9cxbgiTwz9VZtjNTeg6ndDM7K1EyZahzaMf4uP6uyFsiv1Gnv1Zf76yTXoLc7DeDKG",
  "key5": "3dshWpeAUhAHp4igMqYa3qq3oiHZEnKGNeWFX9QXictpAgzwDVNe2muuoRaA39rgHWfg2d4Jr18ZUEMt2A5od8jD",
  "key6": "3w7nKeZ6pf5z4nimZ3CpcS5pGDMSZqM4hv4TyiHzHioaiA4ckYpboRfcs1GETTdaLLUFJYmhLqMVf8QqJexuVSur",
  "key7": "2Mha46ZqzsMkecAFJCUNXLerKs3a2uzP2FWGPr5mbvtrR2Nb436bvyTBGexpCQytLVbzGFcKb27nvduZZdfdsEYM",
  "key8": "4E5x4vjpYN2AD3CPegP5zM1kLLME5szZsauLcjmbvghSeqLb6UbYox98exLu1mnHfYRNVHiD2aWJ5CUT5Doa6cbm",
  "key9": "5ZVxq1BJ5ZxcL3dGVMZZaMPszYq9EjTXE6BWvFthdeo37qcSKYtWZXePd5Gawx8pwJ242EyBAV7upyxRZxXJo5a7",
  "key10": "5CAQxos6orYnMh9PzFkzLH9tGkEkuLoQTFm9VHEnVEqWdyLa4y4cuwTBbhBRsJSBPxNB6hCnETnUPLEno3qmTcVf",
  "key11": "8HBrbQk4iiW9yF2XmY9jbijPJ4URzZdnRxRTRAakMdDDHTMgsrJjS7gSqDSRSyTejWh1tJNMzpKr6badTjrRGqw",
  "key12": "51V4y7ntTq3QTr2NRq2UKAEPToKTGEVF52d6bbdchYpeLBua73boyDySSVR8Mao7CZZokbNyAstF91JVyhWNQPAV",
  "key13": "2nh6ANVjEYC1zR1CQWybHopy6tERD4YFXoHBmCNEwQ81x8J3AP5gdwPi8o4Sr15DjZ6gzkaqLeVPEqfeWwE6MtUM",
  "key14": "4EK4KsScbELAxAN5W4wuWnrhjtRZQ8mkpP7Q7poEKfyHbxB9ReyPGG32mpCQqTxJLFC4LifCL5s7NAHJaRsykr1h",
  "key15": "29ciNv9FkgC3vrCfWoekxozbfhCM1YLpDbwoDoGNdbRAU1DYSqMRGWnFzHG1BwTKoA3SwjSHeMdHRbDQDT1w6rpD",
  "key16": "4spEfAz3u2yZyHqgzhF4mP6KYAV6TeQtdS4ZMPdGnFgeyzJ88gzt7YAPkpevn4cZecat3uUr9JXNeaw3rzb9wvP7",
  "key17": "33XjYsYQoJPYnLhtiTQPixBN4oEihMDQov4vEFMggTSKt8GsHndrSp9VtC8qeKW8mLQJvANkUYxmQyHTpBeepUFY",
  "key18": "4g6sVXrUAsuRSPXJLu63hoqmMpf7qZvWxQu5bEmZ4C7DSkiP17rqaagamDwTJyindKjW8Wc3nxXDQzgGNYqVfpg8",
  "key19": "3kXqLpvy53MARou2TM4axbzQzy5zvVWJ4yNU9kjy74fX65xtysVYYy39qCX65BLu2ZEHXy5LoTaaQqoY6KvrZofG",
  "key20": "fmGsQnfV2VdxjKnmvv5pmkDw8vNthxkniwd6zinfNH7NQnNFygVVUEZedZb53DXoqDGfNDDZqcEZqgjTYSvfgbR",
  "key21": "2p1dQCeozC1gKg3Jzg32evxA5LvFVXx9iQWG6k7QH5KiZLSjxFYvRNWxhYjupqu3EushpChTarLMBFQS8YxwzR9W",
  "key22": "xXeJ5wdr5YyrmtLueNb6qeQvkk2RRbwZsTdKwnatMth3ksv3KDoeHtDyeBahCLF7ztQ7TFLz4mRn1MNBXK8eFhB",
  "key23": "3EniHvf7RA57fkPxtSAeXAZtQrJPgbeszmkJcoAqf3MAAgZGg4wnWZD6EntAbHbLbRtuocBtbCd4prpgC4DKvdWK",
  "key24": "5QRwBGy999hpFMgxhfvVcfAn4aGx4NUsSX95aQutpqhQtAbdVdUchz2sfQNLz8SMoJLbtDS23aPsyVak9aiuxK7S",
  "key25": "2RGtDH6PquWEs3c3CF9MAekfbqJGXdg7QGkSKZAWQE6xB6TXSdSqAsLxw7wWsYPF13hWjbMttm9UNgZ3uekhrvCE",
  "key26": "48LSMvgYDPnExi6mS2PadcarA7Enio8zwjAzrAn1mLHHomdd4HvL3DCRvgZJjt9kzTE4RwLC1CqgqDYCHcLxapQ4",
  "key27": "3SUDM9azwAG3NH7s8tkThM9uRAKoaoT3bhCLgtvo78Jq7vcQfFjUvbA3cHXwHemDonbRWZjKA4NKFV8KMZcbpeB2",
  "key28": "3rUDXh3dNRpnKKTTEDvaUiDwg3jYAtwHbb5hgMz1jJ98pBz1TR55NsLUynEdstZpGPJrz7m1aDcZJWNZofr4BXQ4",
  "key29": "3Mf32uJ77dyfckCjGm373mgpMMYDyy7yDWw6N28Rvss6cXojWnH7eiwroWXJtb9FjyhComTNatNxEDPQvtPw1VNH",
  "key30": "2emvxZCvjn2oBWvZcDiNNkLo4kuzKXwQ6Ydnhbmy4hJhRGG1yz3F9w2j1gfN69zco5B2AvKKmFPV987w8cu1hNsq",
  "key31": "wbWmuV9fPwKbca7cSHRb1vEWVCtthaJU8wJR2uuLbhYZ2GczM1xKz2gZisuAx3LHksMZ9hYF4yuUWqCxpSxTgDh",
  "key32": "2VjDNSZeyzDJxpKhg42HCb3YQt8Xn9CgXHdXc9QYsiC93ek3rocW7hAQoQDnejCa5wNBfek3X4VfNc9NKYMUaMfi",
  "key33": "3T17gApSLSw6R9b3VjxWupA1WjFNi1WkkpKupr8gZ7c2dH88o2WG9GpBaHhL3oPnbe4akyTv9Fd5Udwip8XdWmie",
  "key34": "4GAw8pmS3u1DoHQi1CJKaFF7jQTXzVm5CfC8CiTub6fLc1M2skSZFH8u6rFUSA4Lb7Gb34pgDU26xp9Kj4v1ub93",
  "key35": "47cksFH6zv1938GPbsyuVFpuydVCrb59HA8jKvu3ebMV3Jdga1DgyhXhoJWUATyAZRTGAPfPhVVnpCNpVs3FYowK",
  "key36": "jxerom9TNKWqN2tHwMxxXxE57KL1oC5YipR5KVcAJ8iuLVo3DYbiGwr5Z7NdXLDMvU44zr2HxmsseiRhKP4by34",
  "key37": "4cxAxqyLzqwtRDPFYDWG8zrV4qNYEuHATiziKzAKuw41EibdCnvHnCMnGP5qB8Zp465ozvjsNQccuUaZ3aRCWRoD",
  "key38": "1273BVw3sg6JfNQu1VWCZTf1QpJ8aeW19cpPD26Q63ZzbGEsTYcd6qczk1ZGTiaXFwbM4hFTWNHjLn1ka72boX4k",
  "key39": "5SZE1xtvZPbryDd7NWjvPUW8SeD6GB52HSbR6rYYo2MHKqmXujHNCyjiRUmLN2cFFbiixxtwEyTkh3TX1JZ3r13V",
  "key40": "4xcufWbK1JYnB3RAQHFEC2GqMVFRi49wtepFgqewLz4fQr9HdEh2vziHnkaatV7EqjSkRgdWhmputqHZpmaEBJMU",
  "key41": "5dLbbTUF2Uz4bAur5rVADLQjoEbM4pJnH1hMrefkeiGyjgbXF3UZdjLaYncbazGtStokmwnY4wFxLiRgatQwz8b5",
  "key42": "5wrGFyaJMvrtjFgTUmAxEvDTYeUptG5x3JGwbNNrV7xE5t2T6NjWyAkFP6Vf3Nz6TxwQGyaitRn79zaJCtYmVak4",
  "key43": "4dvKVsoXudyj7oSbZNWoQ1qoZhxtNFgVoziHo94Hq7fR1Uj2C6qxD8xTBggo2NvZhaCUyXek84ErdRYyditD4Uv1",
  "key44": "4vC7eEFR7jytiFuhXWs9hzK9PTnynQ6H4McMou7DLz37i7EYJLhDH5YP3ZhWXxvPkXJ8waYXCoZtE9116xkTE6Ma",
  "key45": "5o5W8FGkYEnhHwsLCzMbeEuZYM1K2UiSJ5ZwqakMdHZeFGBRqgFde9hqfdPV8M7XH9PDKak3wXZfBxFWCQxj2qMQ",
  "key46": "5hGEVmiAwvLfFbUeoS8eGXaoMwwC1n5rNs7jrMUSuUFgBnn8XLoWLwYtz3PgEud7GGNE3c531W2jXoYrqQ7XQ4GG",
  "key47": "AwLeb8EfBhxG2kHmKwpFQVLhiyy744KWh8FVDjKdaF6EmtB3DnZ8AuNaScGj2oQiXLY3ajPkbfPWGLoAojXZBxg"
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
