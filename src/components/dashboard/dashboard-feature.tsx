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
    "4bMHpvHrkZu4Kqn4yJuU8Hq86u1tA3x8QL7kawjbZPcTDpw8TeU8xS7yuxRihkyP9xCVcQya3LuyBvy1i24wgFWt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kLdRygxsueX1m1M35BnuBDYmZMNievEwEonWwXAHaZChqxWjx4nRMmeXsUBCcYrfoCN5C7Rb4dc9gZxxUwFJnTe",
  "key1": "2umQEbUW4mWeVnoDBzPpxQG4ZvhPPPEu4A8pM4QsBkoUDjorZkrxktqtZ7eTAVxLrCWLrie6EZcs4UuoMjvAj9RS",
  "key2": "2TAcozYaM7GygKePwfDhCuRjXZ3xPaULhMkEK1Q3ELiUBcT7dn4pGZcnAAPmB6GVncTPf2tdr9jXJJTkgFqWUmUf",
  "key3": "3idQeKNZ5wc86zctvuM8GKxfDK5KB22hYjDGZL2srNsQVuvAKHvd26wop7TaKwJuuE8HjL77V631r59hN5ZZ9LPT",
  "key4": "3f1ZZNGxLxVtjkR9s3FCgh4Sz9Lg5G6DVokSBZi5Bn8tHUgKAJa8s7PQ2vk5mZAjJoVJfJuDaoqerQMQK5BRMLH1",
  "key5": "5XAumbGsBpvK1pZKtay4NhsyGXspjqTauuSabP8FX47ErSTZYmCntt34tVaggqe2rR9LybpugdoPdEdWbvsJfYMk",
  "key6": "Mk3Tdd2Tg3qsBF1dJiiHMitQc6yMtS9YPyi3uVooiK3SoGrQBz98R4JwYGG5KttLvfjWFeT1YtHUYXnAfSbumeQ",
  "key7": "4HN1twyvtaSexKkJczPxPEuZHoAiNN3nLQ98mzrCFXyT2jafLUL9mD4EtKV6SzujdEw99f88HJA3HhYPzYTTty8x",
  "key8": "XymmxNJB2ixMBzz3AYehe1H8VyrjMktDsQWGH1L9cDzwKkv39dBoMioT8bc8DnaU3JKE8ExLnrhnNiDrsNHhUck",
  "key9": "4xSaH83UqW23d7Vag14xYNsgF8EGzDBU4Fngprmj22nMvumaV9uDVQQoL2ViDvziHa3RVbaWRypfN83KkKZK2VgD",
  "key10": "27NSpGHDtb2GjPfgK3d1aoPrMPGrfbEHBTmuUxgirSf4wqwP77K39Cxs9yDPscheMpYW8wnv2Fos496hWEsQApXv",
  "key11": "4qu1zDaYuCdm37AcLGAAmuxwhMKei7KMjhmE4tRVcDvpnNc2aDCUtzc1NqaEBvd98Bmf1pNHvTEZ1oTzQpNdggxe",
  "key12": "4yC9yzf6cxhTwMxDJ1eFo2iYP67U6nTBxvGfzq7ZMhCUbZSJ1PLYXg5F7LhJqsctRkbkcFYjApLSJzDXMTFN6SY1",
  "key13": "33E36YN6JbaiMh4cF28XcsHDBzQNj66HT3gvBf9tn38mKUmQxK96dkbf7VzYYTbctRj4wnKBz4JkPh8uJNpcVocS",
  "key14": "kvfzFk147wRymmuLMUVeSTUMBmpFwA1ZjhJAgGpc8cSui2UtkrvGmr6G1SnHfQh6fWVQNVvLLhfbqfnVpfFSEq7",
  "key15": "ESJfGEWc9xAAmTUUrbS5zyeNRH5HJJTmwNYK5emakwAdMiZrcD2gpvkECeh5dkyi5fEqa4JB2RtGKuhcRxtR2gZ",
  "key16": "4aknqnteer2TLpWMkGDayPTdTTrKEW6HyQWhj11yKCAztGN4Md4gVeBWbXueVdxdxW9GUGfAxVrvhWMsySj5Fmv6",
  "key17": "4ejV8Pn8XbDUrKTEPbPVUXAJpnnBRkthnf3MS3jH284WRRuqZw4E8ZycSQLwVqG7eRsNwpBJ29QhJNjweCKRPwxA",
  "key18": "3MWnExcudB1rUEA9pbozcSKf2Ro7C9ERF5Vhy4yxqDhWKK4RmBfTfuHHer4du2XxLd4NVNi4bJ6VgFb9S1cBnEKa",
  "key19": "2TLxCDVQZTK7GBq6zE6ZwkbhcFxnDZtk795tn5feojnUQvoU7yykG8wbV341Jhk5WiWhEk86CzbpKcqT9EtNyBwS",
  "key20": "3rS4zSzztLMejunPFJMGytTYZpRGZU7WnPbfNZzwbDMsHnCWiy4rcY6cj3Um5iyxvxwLC5U3CyaQiWuxsFZP7Vbc",
  "key21": "4wKwRtuSTHmFSa1R4Xg1Hv4PXcwz7VynuBJshWLKHXn3pAG4hPA7AQ4KBdPMYj8o9Bk9Siczh8jqAHQkjxaraxiY",
  "key22": "i8E3H6Sfy5PHU325Z76Wu8PcFEY3EuBuLChwJjVYSgWipd3Zmx2GcPZH2WzuYCKKm3ZbFfdZaEhjzFcKtfGH1Zw",
  "key23": "yvEjt8TrvvUZMhN92FQ7tTRQxyNXXmKjHoJPbyQY2tJt77QpeBwBGYZS91qK2ikRY5ZWbhRqEsNiEBSL5tAVybS",
  "key24": "2ec2iimnRGZ8R5VJ6RmXhAyQb14mrRNpsBEJs48dTg41ni5a9bWgNmvmckCYDE4fHTzdo1nBPE5VzZDvCyjwsBg4",
  "key25": "2js4cNBbznr4zwCHYfcuo3XkGNCYPUbPGucENXtMHpTnwr31zLnPCPWuLfztXxmZKZqdQA8N1DAD4WhSwTzm3Xpt",
  "key26": "EBazupevz3JEn51oEFr4ubgojXBVTgrkhGgF4STyLLFvqbEuGLukaCBgesbZH5DAMTymKPQYAS2HnaK8QmeGUKb",
  "key27": "4cFQLSqSnh4sUgE8HGboDnrkRCQsj76xA1vtsUFzQxvi919cL5CHxbpKRGfCEU27suFSjBWwpVrPncBZm5aqPFDw",
  "key28": "2GDdt3p7117m2qwvnnwGS2mXByjPMz58rhVjAGvAmkwSsJp8zYrkt2PUNSf7M9AiEXtqFccMyscxLPVnRGkfeqnd",
  "key29": "4qdGXx5qTzHSTqE2BHLv1rNCdTHkaKrBxoE8TvwtJFhwc6apDL4kuY6hGG54gB98WdGMkedaftGMZZFWjSwNPfT5",
  "key30": "28BPU8HuuZiDCwUPaPRR5hNBTZLqWzqoF3nSbbJXaQGuf1GxcCvNjiJtFGsZSgYQuGdeBCKvjMFJGxU8D3LqwTfN",
  "key31": "4PwvSdZaZ2NLGagZjHxKUSne18zvi42dzM2VENbtCLz6MGtCahPXz9t8AFJKjq1b4wsPSJxw4mpUBDccF8sSiPtN",
  "key32": "jz8iZYpgVs2x96hxqzGzmBxn4aoKfuDrzW3JdxUaXmtM9X5SKwYEEoF4eMX3RToGf1dE6k5ReaaE7Pj7fbuLhcR",
  "key33": "3bSYyKHTXH2XsJLpSJQJYmFbjUgwxyh7eV7QsvNfPqMrEgmDKupVWWtLhHZ24KmdSTiBTFFFPtcnCMcfJGfLTUDg"
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
