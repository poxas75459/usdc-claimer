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
    "5oJQKuKt4HDYhZbmBMbxHjRmYNM6GPGfY6xru43LXcoQoaavfs63pys4Y3Ge99mSqpfLUxcbmp7quumDEi9AtAEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Hu2UMrDwkEZRPAXn3MfrC8ZE2miaqTJXhFbTT8hJsMiB819YHqiy8BcCm17t7Ljgho3qiS8eKkCmEvKbgEPKnPN",
  "key1": "278qgqg15dpG7wrm6cPL7ZRzTH25z4jNGQWdqaFbxNwuPxFniWT6sUzT2vAseQqFV5ww9Qqa6REcnYnW1isGSG7X",
  "key2": "5yF9FchLapYy6SuhuMAi2vsq2qkmHBE2JNB8KcK5eLHXhj7NETJGrgbFQEVMRp4fdDJsfa6cRGK6hMzkkdTdqS1D",
  "key3": "49smVRVmwrbJkdYdVzNzCtKg3WVLiYExjF47hnF6hWxccJgR54kUxG3fnG7TpiMroFiqM71j447QTudAR39qG4SJ",
  "key4": "YJgvKFmmY4SkdqnxkYeYsqgZg9FyjsEtNBwHc9ResksENrTVfiRF51knz9ai7qV4KwJn2vcd3jFEWAMHCBTopWG",
  "key5": "rCdyiY1mcfYFhpgVBQoFjbTmtMjkq7Z8vuJi5R4GCrrBuSAQwFFwpksmRiNbBM1syssaseVtG3i9YSaZZkuLrWM",
  "key6": "3zTQ3dpkJJGPrbG7JKTT56yghhRBPFPCYG1vj645riynwiyR6ASQS3uvU8bTWAnxarGoAV8gzFoPZCreQabFgjN4",
  "key7": "R9V9BTgQ9rcLh5F1hzmiXDhYadMmk9Anca8cmpJmwbBhssk1DWAJziyUAQ9dUAtfDKHZHNmqNyXD6NLdcPfN48Q",
  "key8": "ADMmQYaHEF4nv7vHKBr87Q6YedTqTDXceDhhMAjxLwHeiq4fg88EdFkCfhgkWS7mvnLdn4a3avFEnQSDboMqhMs",
  "key9": "668gq2D4CsPZuNgoqGGW9wxY4D4hyYixmoZAdMA2b5xR366vfzCZp98UjXDjC7oxWPpa2nvWbYu5v1pikhZsf6iz",
  "key10": "5eGcT2H7WfecznPM3HiKPmoWK1bXqU8xoSgi4D4pN8i4mJHRQJPrnL7vUJz6RpdsPbnvnfAohhTyjPhzMPyw8ekr",
  "key11": "4U37Q9itGk9fkgN6u2H9oaTCHpofXopLh4B9Bj1fYAGv1N2xk4TcHc3XpEMRUSTeSTdEwJcR1G4qPkE9AnWzC7eV",
  "key12": "4z3DXQZyQ2WzS19PTiRiNxj9NpPBxDyh1rksJZTLfWV7Tt6WpNnMj7kFzYwWBC3xbtLfyJ9e4PZNaBo3bAtmPQEu",
  "key13": "J957HgbyyCd1JatCesbkAVsJECebVfvcspw9EqfRFQBhWJ4FcbquWa2fGkQusBoN2QBzZzK3K2cvQSZML65ijx3",
  "key14": "ZgJwvh5BsALXa1cYxDrS7KrdGirmssFnUN7PmSKz7SmyBMiHicZ8EpiqhziNw4CmmZCi29n7hjpnKNY9ZjjN8x8",
  "key15": "2Z9wN1Pjuv4ApbbF3AAU1Ki63zQcrHuUXrhb8Jrq2YKnjUggDAPw11U4Z6idbP2SsEPReSTCavSDwba2Lzs3qASX",
  "key16": "563nnurxLqwf9unxTcRd3YaS86kgCbLNMMDDvhrNXbspQcsxWSWhEk1sK4ik5gVC6SJMU86Tb5FtG78vCniSEprS",
  "key17": "53GzcHHs4kw8N5NYfNSiUa1rQceV1SXoSzqAURTq56dfU9AWUfmB6fcEp16YGUFajcywzHA9KqMUUiUuHPzE9kL3",
  "key18": "44xdQvBxiGgeFx8nxp4yvHcZ9CrYMjbwxHTCSVU1E2LniFhP73khA1ziYui1yvtjtMKyctNwVjFTgAghhWFsVjoQ",
  "key19": "5nZbuX2WDQKiscMPMhkW7dMskKNGteAbDocJhrvXaXEXGbS7MUP6cXPhoYPNkG8ovFqH3hFUNEi3cLGnUnpEzFcZ",
  "key20": "65XXXLFFk7J636tBp3SrTivYCfZoqQDH1kesVDoPGPD3hyXDZ9L9cfY9DnCfSLwY3TUBdnBWsSk6CdTZRDMd9GzU",
  "key21": "3JJccuwJxUm1jgab1y3jEZJrZHftRfYomeK3n41gVs9LAC2yXayUWD9FdWvswoaUW87c9GZdBjoySD5NVQnJ5v9E",
  "key22": "5YoL4yECqwcGPAwF2RAecwxaz8VWfAy1f75xv1RajcP6QRKtFBq3KdpFgiQ6NgJddvDGH3xUFfsTt9VkNPqpHyB1",
  "key23": "yMVdhTuGsKnncv4shW1DLdF5Ufraui4uJ2eiaKAhBpiiDRJ82Ytq1fMf4ZxWDhXRnDZJaXfvGJZhjMesV2pnAkh",
  "key24": "5ohNfx1Yobb7P3dmMqW9k8fDiQAXPDcK1pKmSry5CpMMkmL7vpR8siz5HBSTdgLwqjfaWw7f8St5b3U7gBgrBfCa",
  "key25": "4R5cBPfSqcEWby63TmwG4SHMATXYz9tymwZ6cuYhJUJS2kHmcWhpbVRBtfKkWu7PSs4K7KQAZfNvNWu6exANdWjt",
  "key26": "2B7yW7EmeezmFhirWY7C7pmWZVdkZAo3h7c9XWihbHeQi2Yuh8K7j87D2FGDChbUNGe3P2sx9jAUgjBn4KeuiShk",
  "key27": "oMWTpAaPJEHSLzKzHA1BpnaiaeokRc3sSnHsREhmW28TTMYersgzNk1UGPmUSGtenFzoCxwosJvHSCxqfeftEuf",
  "key28": "4gGAjZAGy1kGJswTEWaBNgSWTDXRAmvLwrP3usDyeU8nsEdjE1ghs886tfjxviUhNAsYKesZnRkSvLPL9YenJmr2",
  "key29": "3aZFPhVCXcaRrUmt9pVcPJeKD5PnpdYF7wLXtCaDjZtNtPSG7PqQVB5k1b3wCyKtx1RUiYV4cxKtLpEpgGBKTNkk",
  "key30": "41aW3wFsn4sr3psK1fEFDUfTyrFsQmMzC9qQjAcpJaPDtWK5tcAKiLNUppEJziK6oRfC9X2XjXusuMycvRe9Zk13",
  "key31": "4uEV9ebNH678FxCBEcMrMSiCA2QJ9zfydYcEzVXNNzjrmF5HFowi5VuKiV4gYAbXwBafzCDV9Doy8gMNTbUcme6o",
  "key32": "5iS7GTa4sV7A9o3zLcCTNoUTZQ1yQE3f61WeiKLKKvYPBPmE1P4nD1NUZAMpZub1kujCXUnETghkZBYyEfbBkmZ6",
  "key33": "2aP5W7H1DjECEX1d589r5nXBExX9R7sjanGoWRUvihor6ucrTnae4VwmpzSokT243uJWKoWPvz825Tp4fGByKYgm",
  "key34": "Gk5TbFZpMhnPV2bWVUdGmXyeaDwBUfPKBdRALHDyyvd7WCmEtmAkDqHrhkWaNHrdsGzexhGbKdPNgzZvhjReW7a",
  "key35": "W5s3MJPEySwD5btdD88d5jyDCMBW5X53Nqcer6japWv8myJha5vmfmEQS9D5utxRzh7gXt1q4rWXjFvkWbrydy4",
  "key36": "9rxctpSGKhVgwdtARxV1ZSG3ePMzfDSEksGkJj7UwLMze6p3js5bdH1VVTsMSmogdmWbqKcrQf7mDZkL25YGGnB",
  "key37": "2ze4xSrU5QvRLmPkHsJT8bAFiA5Dxa8pe83ga24mG7BueAKW5gfXKZWCjrcAawXmvtsb3hMrzUYFpaNjcXoMpH8y",
  "key38": "2kELRDffsJaexWDucDx7FRVEaNYcWU3tee5P79em3kSHL1szMPubAvxuCyFLYy6SjV2iVPEMTT7yWw31A1SPH2yH",
  "key39": "3XvBRVHKr9LRY8FpFvWbWLqepL7xWGew7fr2dxtvRWUcokNBPHzdFrguGZ7krksaDKkLzE1n7636CR5mze61nL3z",
  "key40": "5XXViZ6912B3rtjRXJMba6VoZH17VZvNqPmm22Ce4oijApMCujfUeBg1GgVV6PH3pkPUzw1Ki6zMQQmwtn7Vbob2",
  "key41": "35oiXBgZsKD5yNHTbmNFu7XLzM41wfEP6GCd3yYWwP4hepv9hR8ZzgTNPvRgFDnRSWRqQJdowBeamp43AZ5cD5jT",
  "key42": "4tAuQNRSqARBtCrhKcgCsgaZrtGdTGbwhuWoXoYp8DnzQWEgvHMgaayfYdZTGxi7mi83GFukK2Xe1cWSSDqsEBW7",
  "key43": "4cTYnBw7zdGMagEpqGP7M9NwUGYTDTY2W3cYB6cthbf4B5KwQ8TtLL9qgL6FwiJDTpU8VeobAYBkveBDMjYSw5z6",
  "key44": "2CNG9Re8Da4XSVdtBvyQvdehVe6WhRLdQZpQ63bPbLE2T9mUctfra4ic6XGXVtkecm5h9CmrCaCVA32KHaNzXaGn",
  "key45": "4UF3Mpq16qQdxfbP9Qnea9VVeuXsHcdrWVJeQSq2TvZTYuw3wUaJF7QDMY7jLzsyhD8iqiws5tNuVyTdwz5Cai5v",
  "key46": "3P3vgCrNGtW2PDs3BT5v7M6qhjQ9Gk5EkefQu7uKMVjvXNPfvcGUhtHPfEgwU5M4ShKrop6D5uSKx8AmU1Rzqfob"
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
