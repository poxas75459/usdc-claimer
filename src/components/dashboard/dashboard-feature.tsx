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
    "4xuZa26cweBJ1cbb9X5tJeNXHATDxne39nNb6knFxwuTpj6SQbuttJQhPMeqEe5VRg5KTwYDpVFmWqYxd1RjzmhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z5yAxdrrx4bWHPqEgCxq84m4bBjf21Q5yqLiWseFxRL4Mi8CbmSXN2U9nH9x6pr6SEd32zxpwo2C6EB9xST3w8n",
  "key1": "36YSGz5AB12bSv2dC2ftx7n7kECqBsJT3t65cQgQbSL1x2nT7bK5VjGGZZHeYtzNiAp3WGjmYi9rJsqH2F1aUkrS",
  "key2": "2TsUJtm4coeeKjmByUcJBBkaaxEE2fU6JQMv9BG72SC67fr5aw62PNLoAwjLwpg3e5TMCH4jqfCES1g3VMxjMjyD",
  "key3": "5wKuJzawZdM1JTS2nUVDdd9V2PBBhqaXbTtSPUwYeQMJo8xnRse2VWeibABduwGkT17dS4FQkVW9pwfJdpLdq7rm",
  "key4": "26JHaWiQ8GHXqFAbD27kEHaFrvM7F2NPCRZnxfogsmtDxPaadWVfkYCerJvgfH18Cg1jhF15JMo2YP5hfBxNgmGD",
  "key5": "3oD8g1noPhWF3BsJPmgzmLFGHQq2gSqNGABy4WJ26dsSkLqGZ7KvmejGKk9xQPs5yvVAmc4pmULbs4LSXHeaKVUs",
  "key6": "5anDvrHi4GB1hf9BA23cYScwhS1H3dAMBAHbheX8KwW6QDn3kUtHHyNzcV8wGkGmEDTLbcBfkzcB3qKJDhnwouna",
  "key7": "3B47faGGxqTuMQbB47e7X6hn2RUXkYA13Um94rcSGeEt6vxiAE7zTA3PakuGsJnU1GmRucyuPBQK4FopphckEhCp",
  "key8": "eJMYSFoaFD6DwNcSMPNLRcvQdgFsUAggyKaqPuy8G3JjTyG4Prga9fG1u9wETR5j1neVjKb9W6dMFfJP1qdAAAn",
  "key9": "CjaMArJtRP8tV5pkoBHMeBqJXqdsv4w9MgBwRhQXJEYBYHYySp1Pore4m3hfbwvNCN82btSawRrmJAe69enPBwh",
  "key10": "4HKYGFw6HvT3KyhiFxV27i8RR1foWk7wrgwBYXWB7gCE7XV6xRtmg91CvZWXHG7jXGh5X9kxmc6jwr7DGw7bNG4H",
  "key11": "4SKSwGzmcLQ5YdoSE9h85ybfmp9gDWEvMqYEVx3PXkQgDpuBysvKog3j2iZmvY9oKqgJTfkuPraCn43i8qT5k8Hv",
  "key12": "3i7ca3nZM7UCmNCpncqko3oxhuqAqwjpYGW14SqbDGfmTTPTH7wfWytdBKy6ujnkqYoernTfp3TGAuEjXS2rTC1b",
  "key13": "knrhNQTqt73LjdkZRtaETH7EwAEhtyQaqV418sHY3M2t9MvJnB7TvhRiGqDyFpF3Zvt9ZUXNdAJVAwpLeANriLM",
  "key14": "38rQqzUV3A3eA64QLGJuhup5FKZFJKNeaQB85JDXozWMtRFjC1EEyXUxx1Vp4tBskETSGxwpjSD1umrogQWkU2HK",
  "key15": "3wDXwMbNSnW21HDkqKxKPgxP5fNSQRfFXFY8n46ZkgQ2bB9pief6iovTmhBos6nW3s62G87J2xaYMtbdrnrP3kio",
  "key16": "2hmKEAMzkMm4AzEvaUeczyf6SAZVcF8vESbJU3FKN31avF41G5Q2E5Gt8JW5Z7FofNo3MT9MHPsFCTCKkenFCT65",
  "key17": "LGfPGruwHtJ865G6iBXCyNUu56oDgj4ULZ5op2aC3bsbWVANdNHoM9hCRFcn77bbUX2XrtgVUq6k7Tc9UogXoc7",
  "key18": "48VgdFYgg4VVw42YRF8j7dudzC8MKSQwUoeNrAdj1wDAFTgmogvMzHp2BS7tLRocZooWfNBsUKFEQ1xaobqNPqx6",
  "key19": "5RNe5bsmPEYH73wCoufJaqjwiUwnuM4WfAkJnMFd7BzazgyBFkJQCf3bKMEfZfsRwtgm9ky6LFHbheiZ2MUteu38",
  "key20": "Go6yZTR5wUUiscDcdnzsMRBDa8mbf9cF88kHu3c4jcxYi2YAHy6nkTYYsyATghzHiZ66JM4D1z2fHUSgcmsiZrn",
  "key21": "3iaAaWuGXP1u67xKdU5qR4gdgfUoXP6rQcXTBrxsxcHY4PEFXfEdKX2cgZ4HUbetmW3X8gZG1yhspYLMFGKW1kKt",
  "key22": "5AVP3Tx1eb2oKV5aKquoX2A99ixtFZvJjtdAABowk2q9uMEDv89ec585aAgpjFufaSSQU56CdonQtjHSGAQjz3Ft",
  "key23": "3yR3eCVbp9G2aYoVtt4cEM1zXfw6WwttuTnhKt4x8Z8TP2ZLZfxv8wkSzD42k7zRSbHuoc1b1W39Q7JnCtnpgcZc",
  "key24": "2MPMb553KGMXoZGqZNh6KovyymxKkrEQwHztUbF1wSbQgjYEYHV6UMm5byBnU82s9uVtRUQp9PebuPDHPDprQs3f",
  "key25": "3dgR7RwavgKCcQ1uS7avLWkvTFC6CBSgVrD7Se9Sn1z6nid1UFN3c29wQCa1JQa42rKtv6rJhubfaGxiNftFVGhA",
  "key26": "5uLPWwDEwYbBzFqFioKxcMZaFgQeRAwJsciFy7SkyADLhTsgypguh5ejk6XMVKh4GTjXFpCCY37prY9DhF3S5Jg4",
  "key27": "4ox4719WHBZ2EMjAUSiKRQPFVWirMaTKPoPBsGYSjdiwYhZZEtHgUkZVSaRdmBNDmjjfEtCxsLewKiUS5Ztbekzs",
  "key28": "4D18TuV7inxV7VgwRgfBjyGt1VDGQeAghYj1gZmW9jBc8YKwNebe2y8xgoGcr3ZLiJEa1q8tBeDTdgm3TYBzna2Y",
  "key29": "247oWAfs15CoNTHFUcxZB9z9ddCoMcwfWX2zdUWn1VDHiuA4Q5UHbvgBsqzeE9SPANQLP2tGssLaBRft8M9fsSzf",
  "key30": "54zLFHBnaRmekzc9J5fVHtQyfRCPMW7P5xb5DiTG9Axhc4r4xncpVfkXnixaKsHiJAG7QSGawY1rF9GGzTrmAMug",
  "key31": "SDvERyPBTaiJ2WZXDR5rTX7o3LZHsGmMpznmoDpAnZUhkVEZxYBi8f7WaqRo5i2EbjZzKLWB46AV1UFZniQxAiF",
  "key32": "3a47jsvWMCxefEUzj11YeQJ7EWeKEi9YQj8yT54gNLxqRheX1CsHHap72MD9XpyXb4f8kpqewFaV92HDaSiwTqhm",
  "key33": "2Tkms727EgF86sds45SvnyuSrFxxcnqPZWpFgNctupjfSvEuYXYuTLweXykfoC8QqsomAA4dDBhszVY58Ff2xb7i",
  "key34": "fzLx3uiHyyKfg2oNkw1ZkpeXCY8dEGix65jPt8GscjXvgaRu9ohkJUn1XE1crvECHaJa8XExNaiD7gcaTDtHSKR",
  "key35": "4Qx4wmUn4R9E43XFZvV88rcmUoiTRjeyg1JWqpWjCHomJT1P5G5joStm4Lw8Xu8dfYeqyN7fBUR4PEjEXC1nViHc",
  "key36": "4BNb2Q3WN8mS32eph4hgLjoWEoaHiwvN3XwrzmnzDU6nU9pABDm6fotPVLWZaRcxkeFiTBnSR2sAQe7E2CNR2UXW",
  "key37": "5UYa1zKd8ni7n5KSMNTnSP7PBXa3BEem2C8b5mAMK7H6xc2Jae2bRBFVJHaPqymWEgzv1W3f4oMEpJtt7SevLokJ",
  "key38": "244rd8u4uUkYVdzUxTdtQaBFLQ39dSY4qj7j8PcPNMnBioWu4RSsEj5gHx8N8L7L7VJtss7rhXJbnQqdL8AUUFBa",
  "key39": "5TrcSsWcoKyjuMBVKfGsv2ZntTrggB8fH59rADajLJRbNzHpdsovc5VeBt5mgN4gg5sB5xJVEgjYzXPkLH32eKe6",
  "key40": "5drLX2CkqQZrbrhfQ8Kuq4GMj7cCNC2GYcDZuLU2fDJBrSEevYdLuVHi97xPffFLYPCh6xk3RQAoovybkZWFSUKv",
  "key41": "4z1gS3zYDNP4YgZCMcLmZFoaoiak4KupPVMioRq3z6XUMYuGnFjj2mMd1SQ8vrEQWdkYVh261mkqXxyFnbNhhZ8U",
  "key42": "5SGdkwbckdHKujSihkkXcXbiCqEcCBcUY2TUPyUrZzckLDhWRSz62JEdHnC4XAYfDjUc6JmvZQVPjkZMB6GfCLUW",
  "key43": "5u5SNSgaVmQJR5NPQoHiYjfdwehL86s4ZRFEXGzumWmqSoC7yoc5AJSxyvK9PVWDcysDqMipVLGmQJPRSZAp1J8t",
  "key44": "5JiSKQXp8sWT23ELa24GcJtiDhKthqXE1nq38CDjGVkUvtbYt7LwpTkXhro8puuC6aDSN4dVhpVzwBEEZeYK2tJF",
  "key45": "4B5wF39McFBbEwhJAyZFXVxKiyktkDrNxoJmz1PkisfWikTHbq4447Da78DFjNDQb198TfDReAjVikjCPbgKk1BF",
  "key46": "62teVS8Y6Q5JgkUMsUhqcjLnHruAqFUjoTtHSRGfWsHC2gc7hkccF4oriMZnzDm7jjoDjkRSjYmTHTHofQEm4Yb7",
  "key47": "3Rx6tf8NzAwrAR2iYa2X211K57HA8sDcsScF4jDVVMaQkderSNKGF1HuJhW2TttUPNHWqrDwtCBDamLz6SmDE9L3",
  "key48": "MLNULdSyXeFofP9sNwxuMwrmcp8D2Dix4xAmPXPdUobrSYfmJLKLwVA3ncU1zVnges5vfUWnqrZd8iiBL2sWApd"
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
