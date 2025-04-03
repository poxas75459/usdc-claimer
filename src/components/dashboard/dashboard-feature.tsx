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
    "4iW81SGtBxo1jdMq26VG23qxgXAQJ3r83LSysFyNr3b4iBhT7AF1cjcXGsDLGbJJgKpGboHAybfXfb6KjbNd2UPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YCGJAycBndiciawgsmgDYxQ7WBtW1qVHwjfAMpXw7DfaDUhShhFNowgyiPWKuT7d887FVkDgf7DzTWpRskX5UFM",
  "key1": "5ccGcN8RvmVsbZGe9TCpYsiVM2e1gJUTrZ4VBdNp9Pq6Zz1f8DqZywWD3i713rQTmxNULjc4NihMEASq81hTvXcV",
  "key2": "5M8ZuNUjvxaKqCoDne4v7H2fLev4dw2cnLPdWJpewyYBWAfR6g2VVHkxNPWtW6xmTLzPchXarguxQsS2aaBiPcv4",
  "key3": "3jM8J1gLrdJQrVxD9cecBn43TXieyawqPjy2dDX8A5SEQmd5PMaU9D8XhzSvneHN1ZtC7uCtzAoazzsspS3B2c45",
  "key4": "4EeLcLH5eGLmEhr3qZ9WYipe6oHh4S1t7HwuRsmKAweQgsGQPVkKMqLzYU32AUmTCi7gDfiNUmXTUsuq1GJ7ZGKq",
  "key5": "3eoabWL8csWEKmkU2sccmwYWi2FgHzk9HwovGzmLvkM3Lp3njLvDEwx8ipqZZZ5cNrhWz6juiffVcvHCxP1dAfuA",
  "key6": "3SbzJ1t1xfyM9JrsDYgTywRauhrfVyPYPSt3R3szxQkqMuaNLpvEQnZcfLhHHWPmH148wyNDzoXDDNSWQrb3zKaS",
  "key7": "FQf5JxbpgPyRXDXjkJhfMEGBBhyoWrBGEbRMNVwzGiTRWiDL96rePunYkK2PywBECicPvEqsskwRmYoAB4kiu1W",
  "key8": "3KjQPiTFYtz2HG67AyqCL4CowGg91DGSaXdvSDCRok7oMpZtsjqF8vSuDx8edfkAgFyZTK6Rr8udBdcj82aRKzKp",
  "key9": "62gXHd6i57comH6HPoVhTqbvtgJiVXvP4b1AyQp8WpiM2EHpWr9DCjEYXFztNgurLx3ffYb9kGD7PnWFqF5esXJ5",
  "key10": "3kk9Ff2Tesg5RS2z4pVYgC2NFfzWeEB3ER1fSniY5RdMrmj14i7RoVAJekN7n3U9WEU8d3JAbeC1FatWew4iBJbj",
  "key11": "521wC65im5Y1J8ETqX2czweWGfTAdpNpiwY4B4wMpgwphfU9MTaC5PQYLeJ9SWJCvHr6FaK3X3VaPcLXBKG15n2o",
  "key12": "41pnrsjZDnHpfeJhuCG9dWtxgVoMR27537Fm9ZwgSS4Qt58ySLdTYx5RUQt2eQpHnzGPZw72e7qUSCHwDJgh76hC",
  "key13": "4oKdZ7LMr4E7Rg6VqEg8GVVgdZoKoq516Tfm4vs3xYXUN6hxeTQvsp7YoECQcisB4r5j2nYf9LNrTFTrQpoj8UPD",
  "key14": "2vB7TdiSgFkWR6V2A94dHBVmzWjnVCVfq54bkrGnRd3GuJBg12ZwtsMskWT9mUhGYPReZdyRrUosFpe6CTGw2T58",
  "key15": "vqjZcBW93DgriRsSpGTyhoLCAbczRJQhnf2kW2RsqP6PeLZkv1FH8Hit23MGrvWEbo9zVCH3mEfQpjrdupDP4bX",
  "key16": "51yYxZ8545x1jT97BkgTbFUHcCNFkGrE47ad4q8y6byhuAb2FuTHTEzNbdi7yMrEZY2A8mV3rhy2zJBMmM9pXeAm",
  "key17": "2PeSzhUKMv1Av5q9cBT8uLjfMiLsPScKcHT9p4KpRt6uYfTTXQs7osMK9M74KZA4LNpf5BzwuwRtXBd5gXBMuuhj",
  "key18": "4GAzqZKAFG1bb7HgTyttRM8quB4mQVx9HLgeMnWHs1Gf2Mh1hRqPEtjrGyzeTQYorANiQ7TimzTv1FLL8a2TBsdv",
  "key19": "xwqKpNWMfDS6oEcYYbLNsp8YeXAVjVaM8LoEG8CDMVdaUkCvQ66rjSaX5ggDXv3kAw99Cdz4hUaQ7SHAh26xomR",
  "key20": "VamAjf34AUiE1mtueWhEzsgewox256Y46LtesKTYZGD8TGUNtsyNPMDy216jDkNXahvw1bo54KL6TAAp3hir3R2",
  "key21": "482DtFYTkqQZ2CcaVJh88KwwNHfgbxARe8RKnsUn5GSGnSAmYyY5BdvgdSs6vhYHmrcwHiPoNe6zG3fz3cmpt3wq",
  "key22": "2ekEXB9erXzzuaS52GEzQZR1V7ijgoosGyq4nJf4DqgsSfxWfD13b3VGnQoyK7Pi3vjrgk9F9sZ63gEvoBk1iXoj",
  "key23": "5oQN6sZ1mLbN8amvTrKzYBZs48pUKHLZ26s8ULXzRquxK9oUsDftK7rnJV9hfu3r3ea4gh4JZbdauBPe6ByZHJv1",
  "key24": "4Nq7F2UKdJQ63fuae8PBYjQbpUgSHyE3TXb4EbGZenTXyvXUwavzUEFzoP2mc4oycicJqcRu87NULYbgbwWtu6wo",
  "key25": "mRvTYLa1Esu9w93HJTHxz125YByFML4bCUL3FWMNWEn1KSLa8xsPZRhpdk5qn4k5K1B8fs6AasiQ3kWSAVw5DFt",
  "key26": "3ibVVAkh8vnqsYc52EpKcJR36D8BDseXhZ5AWFBiZAzofzQXEeFKm7yuaGB93rbn9oCXXpbCJdiieXqNWjnYgtmK",
  "key27": "5caYLFkijAHKzmcwJdxkPbNQKoRxdfJVGAznMzR4HnrHRfowgB79atBEwiHM6reACBpmiTsuJtQJz7W9n3NgzQT3",
  "key28": "3V4gbJxt8Vo6WLYWKt8v7UgDJezKfy1gLHMWXpHQJYtbSFpJS6Qtbp7BeVfgiS7LJc83fYoEbQ9HfZHa5pd8vXiC",
  "key29": "3R2r5ZhS2uhL8ewyV3sZXHN1fZi69ktPFQHhbo9Ptg2V41uTtdtY9EQbjtNcDfrFSfbUChH8dDCDw6bA1HsH53G5",
  "key30": "37jsv91AMgZMfj2Fv2WBwVv8Q76fseTofQYzhi4yXy9vrf5nS9GVjgXQyUC8bkVgL2zmdt16UD397tL49eEmgoDM",
  "key31": "59ysxAKAh1fdZ4pyWxJdbBNNKbGqipTe5Qek4kjwBz2kcmVTqtJLaYQgST6NqE7d1Hcaw4UjMuiz4LaZAT419YFj",
  "key32": "25AgcAsvJhAtHRqTNhaPanB15fzFiH2dLxgJ4gLPyx38Gfz6iZxozmohywvZ3G21iFriWvZ1LKcnQDpV9oCYkfKT",
  "key33": "D98oPdRniC9zebTaMyftJkPEpekLeT7QrS43wgsJ73K4YoFJztBfAgoBCCcUTt5KFAbm5DL2zC6F4YcttYsPsD1",
  "key34": "4vSEFZSx23AxEjyozgKN5MEn59mp2sufp6ARJouBKEiPYbm3CanouxqgZwvryEPkXWMAsfr4wYh6vo3spRpm2789",
  "key35": "5TVboccTbaZ5JBDvnTH1YmrdAgSUcJUf8eZcKcwye9j2w299uvgoMYqgGz3feZtxysHbAFwkpQ8QQsDk3znmzQ9a",
  "key36": "53DuQyaEab3Jq9akcYWAuV5NR7XXZN4XGNE718J3e1kPVvU5uBjUZjAgJDRAG85bk5KD1wnh63JYGDEejgWunVKB",
  "key37": "42qkJ7V4YFqgBvb3zxfNaNwY5QcSrWgRHcYdNBJvSberwi3PNfFDz6sbYSamXGVKoJX5cp5quJuo2CxaVfuFs4f5"
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
