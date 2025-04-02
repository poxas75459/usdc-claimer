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
    "21XLHbSVvmKJngAjoangKrq3mNgS6859wW8E4key7aLqRW5sjpVfTGZxboJ9pT2D1WWoRU5nHwhQry5rpuk5xwzU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64bLUoH5jHDmYYWEm73R6AToay3znkzseJHJ5opPdEdiVG79Ao2o1WJM1PTS8XNLdAWV9G2eMhFXwhHCcBK8dsGJ",
  "key1": "3MVHAx6cL5UV3AcZxUemLt8LsLs1NcAKtxvYkLbWXbRX4AqWUA2ZA4gTEmzXZW48k2JLGS512KS9j5xBeihcN5BC",
  "key2": "4sVUHpYDsBneujSC5Fm95xA17PCYboussKrb6RfyHeD9d9FHvg1oAdBEgcsY1499UtMXnzUSL7cMeepsJJg9dxuA",
  "key3": "5EguWudVzpXvScu7NwLiNZL1fkqnZJasW31VTGaJUwfpNmVZY46gY7ajDSA5wQtjnppStb1viCskFiS6juWjKk6m",
  "key4": "5ZyHMqmMHGxEdHuMGZydMvcy4zhPjMa4UayWqEDWJgjj6HXjRx18d5fdX8UBwdY5mdWUtLh48WdG8m2qUvSXngxh",
  "key5": "3qwoX1MmuWvSaqpHatx2zq2UAjYxFM8FhdkM9eaKvbLnBeeJdDcy6a1vbrVVjtSgMH7BTphTEi8sfFXsRPZNEdqe",
  "key6": "33MQB9MeAMPtExdCVoxLNYuHY46c1k9ES2oZeXmthjYsinaLJX8YKYXKogWSFFga3ySHYwTcpMnRoY9XFM1dJQrS",
  "key7": "4Cyi1ETtjE7n479RoqkHbRBKZSoctJx7ot2RLqnKRmnZZQbNcuT4qa4nX6rvMv3H7kxNwS7kTrc3uJHAiBKP1bkv",
  "key8": "3Ay1kus2LfeYy9VQYiTe2KgS23qwJzuV1p7JZMJMTtYbvYMf5vKFnwh5EtfGY6rPDaTMCRY7DTh6Rvxj8UGEA8vf",
  "key9": "3dtgtbNkSwpquVuH71iAzSTAQ2jPNLbUumhXGYLZ7Q25tiE4L8YRyyC6KXguFofAnVjtiEFRf4uEdVP3oqcEPczH",
  "key10": "5crVcB3Ea3hsh551qtFSa4nm8QjZh7fJAexsW7p8Vdm15SQp4D8E3PWDrjyrAcDAA6RBzFdGk9pLNDggLPUVNSRx",
  "key11": "Bo8PxqNKX74WkGTQZyVRQiUw9g4p6nLyEC3TXrmvRmVs2qx52o2EnPPuwmkfWpyrCRa7ZpKKsmNSg5feSBg7CE4",
  "key12": "4yuuDZpa8qnmhfiW9dxcxs1Nt2FLKGHw7VZuHjMPaSEazfHedeQU91VgRzuK2ssYvS2vwZvoSRDa161t2r1bxJu6",
  "key13": "4UoCVNtz2rnsexauhHQUZzyDSWMzkdgxvuRZrWU3K2aNnWyPKwpN2mfgTJPHAhQmAPX6T4LgwXQFhTCZZhQwpce2",
  "key14": "361BZqwjGEmrTiHSEq1L6eAddxjexkBRM2SUASHYkpzSt3btywBzvWJowf4KZZoSMKfoJCvv63XdTAt7ac8UtxRs",
  "key15": "5Wgx4mRwbBHZxiHbc1oQabe83MDKhKjomNR4BkuyqRDoq8i8bjuqtXN6LmVQjoNdNT1x4CABKbssckDKW5t7EZbV",
  "key16": "56bctg46WPBYHkn5jALuH8KJhbdXPTQNbPPif1DumZYNGVzhT3ge9qZk6MZpjFhQZ4Zs9eUMEpRKK6GjWG5KpQED",
  "key17": "n7GD97jSbcragvUCJjwPdRR8vnsHzP9YSKWHJBLSBCCgE7GkfjRgVfuMYpp4rdfKs66AGsFVL8TUR68e5utdDhq",
  "key18": "2hhiQmWva9KXdhZvdZi8wj8M8jHpUMs61hp8yqn1DjJQQb6TnxvGnRGc4Yawsfc39oN1x2CrKe8z7wnXwXATXbLq",
  "key19": "4Cme33Rj32yD3QDiqMBHLDXnuuj1RxB6TFrmnFBzhXg1RHyUpzCnaYYExQBbHgvc3kXNZ1KeLFguNLhFvEQtmgjT",
  "key20": "2yhQDj48f6dYPbRNSVmPX2HzCoCFGoZYiVwCe5oD8gqzGFbCoL6K28PRACs5kEhCVvYcxFDykKcdHNScdwiuma5f",
  "key21": "4juxpbbakiV2fhCsv9FtJV6Mzn78yZHALxRTrPDp1Kz7gVSHxYFX3YZPP1p1pfrvA4peWbe7n1XKYrffGRDzL6R2",
  "key22": "2NmR5zBMK1q48eowXK1J1GgHqYr7TQE3vKLstPFR3sA4T3ieDiQyPaZsV4TM3wzuSqNzL7sT6o7NqB3wixB1ZoLx",
  "key23": "4VypXRk6uswnp1245jXNGcFkT2pmnc2nuZgrHFF3H19CbuwvmeSFNPFxyTA6wwmHzsfKCkEGmuzjXeMzs6AUSZBn",
  "key24": "3TUfKBbDVMuu5aUsA1UL84iyuskWR4NBxzD5uzWws1PQvcEtajvRGN9uykpB9Db7CAmcg2NSrxJM1SvS695MRu9E",
  "key25": "31yKVnCTsY9zhqtKRwFfECnqYcyy4wKi5jvRF8JwJWuTu3N8JCj6Gi48cZbCi3EqUBTXUytm2Db7uPDsnDgpDEZF",
  "key26": "2WMghqqdzATsWB9QgumxQFotDRHHedQZSc8EeepRzX9iZfQ3ZfHCGTLkLyhpapQA9CwyEjuVRXM7ZVeWYLDUysqz",
  "key27": "3ZV6TNSdAjsXxRA1cytGCMi78X4PKoQvZDLF3MDojq95XXKyAEFYcWzN4KvGgUC3j1GpTYcQMmukyZZfG2Zs8cU2",
  "key28": "59MpwYRHkD92W2tYm2sxPHbkd7zf6FWdGLcLpfgoCSzpA9MftCsGweGcqLmdkCFKyXQAGXzsBPHrcAuX5DmW4fxS",
  "key29": "51xFP5iS95vc8jcE2H6sCYdEntgAG2xsfTtv8RgdaN14UiJWezCoWJwEz7BHwwYRD9kQhsimM5eDn6HA1SoWf4oq",
  "key30": "2FoCbWJFs7bSJYHVDy7MhTL2PKGVx61pXHASHpQitUaxzJJrEzrG58SDzasTnBycVR1w5eYLceHekFYAT1N5NwJU",
  "key31": "YcoMSnTxY15B9ncc3ukNEf252tSVWXcrd8PtSmVTS2gha9A4h7Z7JnTYHhjZzJZimJiaYab8jZCvkwRJNaJodw9",
  "key32": "5gvYEBd2kAnMzfvHqUTKSgFe66PXNMWFoa4RG3yQ75fNZXwsNY3gcF7RLy7eLW9PjtLLJyuxWjcwxyCHnHHh3thC",
  "key33": "3QfqmUBSe6hDq8TLf6rt81rtyycMJDhitSGrajo9ycMdDzi3B1NuR1pYT1cpmWEPUY72S1r9hvue4sWro6CSz6ae",
  "key34": "63aLkWd9CGzm5QugmtRSMM6nPotkDvMEcZNwZnGDWeaMY8FJoqT4tnJq33SgBJ1DQHqbuxtfk5hDKJ4EiXpjYiDW",
  "key35": "4fheKvvmbL6a9RFCs1185BNRa2w76Uv1XaY6U5mLwEQB328RcKmPQTX5gkniLpUjGZAoSFn6sk3QfJSCXyazf54X",
  "key36": "4nw6ShJa4JAj1yPmFJxQ51JKDQ2VNGG8ERd4rFESeZrkXk8ZMCcR9iEp9zwzAJwHpxyQxVD6jQTZm52VUwmvrU7E",
  "key37": "4fRR2ntscQLRcEcFZh3NghP4FXMRcyW8tjV5UyjxjuAJSRpJe7mdZFcvj3PrPDtTMrLy3E7JCCsQfP4w8x1HgZmo",
  "key38": "45bE6gV1jxjxrgZX5Vceigq3XA3GUF4iszXPH2xXAWp1Nn1E84TkmanRUHJWfTc9NDacxzW8RRLhD6EUHhwmeb8T",
  "key39": "4GLa7SHuFWtNkeSLtYvjo7AFgZ6u9dFse9EcFb3b3H6pWLBLcY8xyA5AHs34Wwbtbhz9EskLxP7LWaHqj539hkC5",
  "key40": "2bb9rJKTBGte9yxbUCXRPq6ogiJBQDDd1CBsoQPRPwEMt9Tpv95GAfPSb3umgFVuAhb7XURrXQKaT3yPpLJ6AoH2",
  "key41": "XVq8PboQj4ZcX85fmm2yPpq944G4TKeQAEbwyaogfUobxCKeKiqKHjE2oktZ2YLVVbFevccxwi91n9oywhVhUyV",
  "key42": "38tvoDaRdeyFPtVSrQT6nFUqmGVGEfJF8YiJVPW1VkUncm9ShzvLskPpBDkrQLtxSxqyLW2gTDnDtzFZSsFJJaW2",
  "key43": "PSpRB87n8ZB5ZxSEXfW8nWP6Vq3rhbfwhTL3RYCnekti8iMT6Wu8LYNuwe1jGVneqdpR2XJtM2T4tDSPb93zFtU",
  "key44": "35xYQUeZVhrJWZ5f6LgZkeqbEgWtj9Q7uDtbuFRpqP17K94mJ1r4YdoAaGstzHG4yAknauzJ43ZKH5LiXxb71p3p"
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
