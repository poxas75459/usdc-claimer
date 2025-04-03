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
    "4DhLiDFvKRfBkAgt463ZfxmYXYE8jhPnH8aFMofTxvxFGAyQVBh84QfZaGEYFKLN1vALpRH4BWNimySoAoyH7xny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4doaGWoWgmvJpTCMe6SHKMSjePm8VPQca6sFWp8aZuXPLCPVBygzzcM4qzQCaVuktV3L3w9D91TAhJCZxiubJhcc",
  "key1": "37fygkrkNkJMa5Eq4vb9hUvJtSXRmaqqi1wEKZ4FDnrLMgwxb7b2dQcw51cumFrdU81NhGdX9rVuzYNzjaYXQDkY",
  "key2": "5n4NCTjDBsz8i1ycCk8v6RUmpGtiWJ9z5sehuStcS6nj8YFA1upBZntKsYFxo9HXd2KahPHtaehqw63BtBGZLBtX",
  "key3": "27ZfC9p2KonmTqBSTetjqTQhiZt24xZzerShsZV88x1XYWqQaXY97XdtnGTyYLasgzVyvgYM9vuJr5Ty9pLzyLah",
  "key4": "64na6yTREZoBN6iWDr7aKNSLDQfzYSop6dgzS8dhFuKK2RDpG4RG2yB3ADDgxhNRQSTKHRyuPqRYc6QvLxupPZSc",
  "key5": "2ivHqPA19P6QGbtyENrrYF9USXiHXtCSaJRYLXMiwA1AA1VF1Vyof8AJAYWoYuTLpWN2yQ3K4Vq6t2PTMM5Ny9Dv",
  "key6": "3AERN7nTw2WQEf9RUvFmtnpQzjgu4WrpRcWfXafzM9fvTsvZoVQ1CFF138JPuwWH8cW1gPxa25bninh8YLaQmGjk",
  "key7": "TKPtzMWNKKqGvD4uq96e8yxvdYSTEmzUDS6VX5ji5N4Dokjbh4kPLDD5A8Z26pXbQLhXjm7WKiDeeNJBZPmcF2K",
  "key8": "3MqJhAuEFZv5Vbdaj5iFSNEbcBBwtnkQ6WJqMmaLRiMpuFhYW5ewrT1XoBzpjzfast73pHWLkkSXyxAKCKQMLEUF",
  "key9": "63G577d8kmpgu98HPiUbwNgSHraM47P5VQ31La4Y1AZNrhixMKWGJ9y8vnw4kexYZe9FuVmpoTqg2RU4P4LjKxB4",
  "key10": "5ajQWiTobpapJjMrU6k2PpyAyEUq8cBzSpzuDJWUdVHf2d9FtgeTTZW46vLUJU2gTv4RP9gBhVqhXtRFRnGpv1xQ",
  "key11": "4z9ETSTq5nnXP831nfDMRSMVBgKUgBWBVY97haAt7GDDj6zP75wFF4NM6d8wNPrGKYscVUaaY7eZYgxZ9YQ9yHNK",
  "key12": "59Fry7sF9W4v4po2xp4N8wwvXXvF7rkcvChWRLE8CAUsDzaT7AAHncLHdVdpmF2nCdoAxLbVniE7UBT3hTvj3nzd",
  "key13": "3aT5kTEPxzQ8qaVpdHVxzMSaVAUcwCpeZPJ2ZJYRypHkvBuqgNPyYbETCg5A4Fh9V8ABHew5SCdinykXd7TubnKE",
  "key14": "5QS1cbMzWnKaWAMqUpH83n2XPQv1xdjAsqvWG7KMcxDFMbPPf5ALFFv7yXpjQg9qzyV1DgPTYZJF7q58WVr15vE3",
  "key15": "3gMXYFzpNBeS8v49QkxMcffSdriW67HLLLjfT5V8ztR1j6nwWg58MRGi7jqDTpU3sQQHBRnMxzXcTjC1VjdyAVsA",
  "key16": "4V7sLnhsG8ajrYzG5jpWzjncniDzkT9YPVfReXZDPF3K4Y1dzTGt6WZbGCLF5GNZnzCY1zEkjGJHY5SgSAqcc6t2",
  "key17": "4qGE9rnGA6BDW8Eoz211fG1UWdaXSygZAS995foL8HRQU6SPdkqJMijuSzARrye8AaJ8GZZvLBZjNHoqNf72G17H",
  "key18": "4TRsgxb4bc8zRrhYWA6SxWAq4zdVHLxnyQTb56fRUACA69apBusRKza4b66N1LrRnKv8LkXiuBpd9sxoeo4krBsm",
  "key19": "51TtrN9KwQzmLQKb3SUnPZ1xCpLd92fcj7zPw6nqeCkSH1dKwHG7DeuRzcCoCdvzSoqcDkEeyYzbUhNF7LGjxXH6",
  "key20": "61ZECnggRJpgDaAimbZqD6kLfvzAQbM4r3K2M49i7kkDabERFuesfQxm3PXBHWNuctUESps84yXa4GdwNranMVqr",
  "key21": "DkmXGvU9vH8fcMrJSxFPf6bstSSAABGCPxBn23kdeRmSLiCUqU5yeycT2srAri5FhtfkKKmMS8J1vKRdar9Ni7P",
  "key22": "NHgYFhywv3VEfvJoRH59tBHnCSvziUC5Hfonj8ijbzUWVEYRAdsi1ohQ2ysRdXKrHw9KfrV3GtUXLtdjQkeQSK5",
  "key23": "3iAZ6fXZjkvqccB52M1Chw3iSkyX5ZFCxSb2hNMjdvSa956Y4ht7D2RtW1fiCbZNbwC1Jmzo8jtMCVUJEppWk2BF",
  "key24": "4bMnWzg1TdcoqQK26Nhd1co19HCBSQMgTYqTXZzAFuhLaY5mJjY1bprgVcZKm58ATKofjSoS2HnNBo5oAdKpvvhs",
  "key25": "66CtHMrWVe5SCoL8Vh4dRH9Svv8iwuJzEGNcyvGf4pos5xd8XimyKSyNc7Yz2EtmBEiKbSBZ7t45TVz6z4JWEtmk",
  "key26": "YL2XMdBdEXFUvhuMszff4XTnJEr31c1gcNK5qQsLvGmv9tAMjap6Gch8KPhPoPku7224aUiegwENMQttvxyyDZB",
  "key27": "3Rc41NTgNUp6vfGHkNRxLRnuYTy4R9EGwhXAwWYRET31yatK1wKi9EFGosBs3gupkMoYVCGy35BVBsHrXW3oWVg6",
  "key28": "TwoFezA2ZQPTYdBxzNCpNc6kwQUF5kzGxYoNfDrQVBnqseh6esntNHKZojMgAewLfaPm9ofD5EDta6dFZQKBYNg",
  "key29": "3RN8yM34EAGTtQbeP8KH6fN8QwkUdqct68cTnAtiYUphPApcwfLat8pHmSeW2XeDUrFWdbXtEhsttXp1eL7j1TAK",
  "key30": "WzRY92wGmGnUZY8JEiGyxviT54WdcbtsQfZrSZx81M7PfeMmBmFXCda2zbu7VKKrXwritJrJUFrpmwkFYtH63m4",
  "key31": "4tBGG4SBheRHj3TVxYjry7yhCSVuML8wLKL7WdFth76bfCNTTBN2Foo6fKu5LtuizhdCxsuGyRpfoBMNSHRY8Y22",
  "key32": "63DhX5zk8Vk7gPWhT967czYaLFGBi5NM17P5Jo9bCc4txWv7YzKKNwFDjqDugb1uzmzXz5ffQoZha6ViyP7d9QDB",
  "key33": "bUsEQM3x3U7fcszNx6xFBAgU13uQyMPVkt4KTQcPyf43psj8NfTmqAGmfi9HGPEUfsbaLuQVhzBekwPAiKsWonr",
  "key34": "5m1DkXzV97xNbZLjMLem6rRfeLBEmpUsPqcmkGSyP3XN8ZakT8FijXfYQqV9fS662q9X5ShhW988UgbBWvTDwTfL",
  "key35": "3zuQ7qEQgTg5DNUYWjGTFfVgRLqcrgANqvrQUAJnwdEwaS16hvWskVmeqcFsbCJjupjMPgAK5K596C7rtiKRpzAX",
  "key36": "5JdqwMC3b8Ngi1pHhTHpYV4STapgCJnhYJwWPkcPfanusGbmcMCGqtM852gTkWacXdqMSgNq3bLpcht9C2SErjxa",
  "key37": "2gphn4GMb2Do6uzn32sRfHbqoTfu17ni14HuPwzn1RmCJ1hpfAr6WYwQmpe2KHek7GxxuwE7XtpNc76K2JCK96TJ",
  "key38": "4gSc6dJvK5ndvw4fcunKNmScjNME4itjcU9MnVjSL1AzqnyqKGScZLWK26mB1YZRxtFBnc2RZqZRBqxibSfVReSU",
  "key39": "bzCUxqyU6BZdgjroN5Do8C79U19KNFWrbf8Ly3UBV9xJLWUQxNvGfuSULrf7nJnfJRyLHZcRJfo3j127spTdrDe",
  "key40": "4gcDYU6bMNZhCDStByR8s25TSais2MNTqgUN13NvVwbzXs1hcBDUDeXkMu7J6UFRw28DwdvyewcdWdrhwGkMusSk",
  "key41": "DreRmXzEox7PBsnhAHko4HtYAPdmyWnQE6MLHVrQfr3eWb6Xken5vbaHYqXz6FJmKWCwmFcw7NCNMGLvEn9PHaJ",
  "key42": "54YDPuU8R7rYbUswP9Djjwajb3fV2RbNAdfs33yembgaQ6CQoiWzqQHXGN1dnCav8esxAeeiZyhfRvEcRuzv6Ru9",
  "key43": "3Zy2oNQDYbq8m3R96nQkHwnHvHEmWxw6ptm3WECuj5oMawSzEBMF6ToAAb1cHnLYXePF9VdKR3x2x1tvFBKKQVS3",
  "key44": "3a7mwW1NN5SVHQBf9aN9a5D8SF1Ef9GZsCvKduycwTs7tZYL24CXSKMMdzNooCBN9YwNxbFzbpjti4bNDmWkJRGo",
  "key45": "665Mm5y7GwdWQkBvhRLpRtbhyxY4crHN3k47t1Uz2RffRWMg39u9ZGEiHMKLb6QVYukd4UDURKGwMEcJgnjfx3t2",
  "key46": "5THzVvA7RWKcDtyeEvyDo1rgTVna1zhWowTCsHQxXw8vDeD4kQcSG1iSXR4aQvPVQEsQgELM21bJMnMgFPnqbPrb",
  "key47": "5Zmpmyr3ZFeyomUvFmUZ4NiDZSwaZsiYCzqz2U9pnMrUJoxRfJ7ys8qxtBr6MR9yoCkUNtiAaiyUH1Mq8VrHDNVt",
  "key48": "izBgcWVGXhcymiF6esP9Me7tYpxYVSPhYXMtpFkunq8tovvPYEXrqDfNL7wB24kPv4hDAGdShXMXpKDNUqfXygb"
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
