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
    "5KPm79sRAet8amSB2VtpL1vCqtbcT81yQodi8gT7i9t2pZVgfaWb8KM2oXrbmQ55cPVzdPTNcmGVLqLD6cA6eG78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S2L9jNBdYUai19PFqLjkmpaVMfpU2J68jyrqicD21fVnxoM9ZaaTFM99PYr4fZgJbAEUv7KDbSqxPwQ9BpGDgJR",
  "key1": "4FcGejvMkvGMuRSZUAvafaQoiXPnNicGzj544JgN4iNrE16MT8MZug2Bj8dUt4eybYma2ac6W1923hQHe1q8kUNB",
  "key2": "31CKC2Gt35Cb3PhwhcJdyCzzW2f6mQtVSvfF27cevZ7oNZq2tRSMXMv1J8B6VoG6tSRN8qpVhm8N3sKMSFhh3qc9",
  "key3": "4sdMjcWVJnHUeeKTdtZtDdAW5VaeSuRaXuPKH6zSdz3ihATusbCHGWUPikAaZ28azxNz48zdLtMjddJZwzXcLuH",
  "key4": "N4irkAowSBYPiB4Vd2hQVKWjxi59kRb1mdqd2SND5T35WeUrm21AJZFbvm5ovjE6RNKPkHV7pDSXT8FCfaRUugo",
  "key5": "Kqxy2ZNDSgDAhLiwNYZzTzCYZQdEVpT4YCPotbGtF37SZkwEhhknwX6oTosdvbVnY216zuxaJdFChueeand3Jk2",
  "key6": "2CGCRZNGQuewr7pXPK7XpVHxTfjMSEEEgkewhUmz3boazkPJ7x7sZzTUS9U6F1orvLKrfbussTFjG9icN63UfnBU",
  "key7": "3QX6zPTUPuwkMCzHyDX65aUqroaRySqXpEDavbTh5jXfH6H33S9Q7UsthXHnp5jvpJ8dKHYehynrzd65oECPXBk3",
  "key8": "64RVZeAGvgPYeAonHpvrExMwYMwZycBh2uXaAFZJhCAFq6muQwuzBqu1UFnknRSJWbfjz8mD56ZTMgooEcLkzA3c",
  "key9": "4YcKhnJDSHFs2Ucn6f4RSoXn6qTXJfg4Wj6aLNpRoX4Apu6bPsxgSyUx96XtRf9YzUPTbEzmue64wbG7qkorR45t",
  "key10": "3DCmB8R4jJtzF5dRWtNjaBd8CETKUMtS9Ym2NatyhfD9697HdFZc29wkbjcFnz72Lz16Dnp6BNwVD9Ut5XqPBpGj",
  "key11": "5fMQYdokxAqANBH8AwjdgR8D2Q3hXp5wPj8r8zQPXupCU9HogLUNGemU7dSttCAtE17RyTy98EgmJC5cwfqAhEmz",
  "key12": "29kiXR5oeAwTmFjLqGoV72Z9uGs3seuMvudzwS17GAy69hbecSQLypo5iynfzqD1rvbyAECBsJbQks7orHtcx7JH",
  "key13": "5yErojc7s2iQdMaSgKiKkS5GogSdErfshKpQ9rTn1oKf3wvS9cXe5Vv1y3a3tzyfQaZXYVCRwuA7mXqCnqZ9moXe",
  "key14": "4XxEf2VvtbvLv2aP6HjR2sN2YBHKZ5SeHXTcSZYz1BCWxDmxaY4Gr9xD5FLtpFcj4jYnzMWLAaLCUZSd2USoDdfp",
  "key15": "625ZijYPWe9WMwT9SggUPktmy9aEpuZ62KfxqjFdnkohXQqQQYwCUfPXzqXXTVNyzYJ8cpijkZDGDwqSuDbrMKR1",
  "key16": "HmtJEToQaaqS2qskTGmdKbwBQ1phZNrRxmkS4ZvY6PaRiVtkrFxoMTntNQXhdFcb6Xw4ZLDTWnDxCCJP8VtbqpQ",
  "key17": "2Da6wJ3dAtkR5rW5FDTHdPdwGcgxUsrQPaPVwZypfruokekdSBaz6G5GA1rqMdvCFu6ZDhPVS6TPiyLJW342oY4j",
  "key18": "4XhMbPFBLNYBRDgP8GtFmrrFToMr8nqHAwQPCG8TWG4KbSHDRHxxKCFfi2HSqgDXMLuPnGi84EVLPMpCZzMhu5md",
  "key19": "2Q3Ajke9H8hwAgpTzE8undV8hHZHEmR5HeAhPHTASC7BhoAL6rJpfEs4iXLhjxzVyPQpLZHzQSm8DAWemwV2ng75",
  "key20": "5SCto2yNGhVEr4msst4LVTqUBw2hkf3YWL84hdXycdtBog7T5UfKuH4Kp7YVV4i1mSqiJEdW2ZPgv3SFQbjSC34Z",
  "key21": "4gCin3nNJTMZ4m98dhf3BscpkbsySVLXQ82uR4nC7RuZL6juVpfdLMwyar686f5TaAGgZBASkdWm8Dvooc198hUc",
  "key22": "5ewVWFtU79VSXUdvRuEXwTmVYjtqCxMwi413ECEyWE1PEP5S5RgQ3UCws8ZjNvj8rc4EaoiChppxDA1ap9rSvf4U",
  "key23": "4C8WkHrausK7oAJXD4WRBq1HaFraGQoZUY9QuVBoS6J91pBGfPueGzSvxWVPKKNGM62Xqx7DHvAeT3qFFVGu22EA",
  "key24": "41RtBSHcLkphFeVCehBPDvGF2qtGudjcRpV1RuV9Tbe37gU1adj6cTNpRmy31XkHHcrLLZshrpdXDJAuNe2Na54q",
  "key25": "441kT9iwHUwB1Cy3yQuwukVEYayk8ArAaZpD1t7mR1e6AZ9DvFsA8CUVCxagBb3Ev4raSM9mp8qLKxt2mFqkmdsP",
  "key26": "3TV5YVUBtmPTSMRiAJWYPBWbYjm4caaXWqd5NnTZcuSgw8N13sLzLJrkdXm2c1NvS6TGbuSEr3yBUTj5YEKP9Pmu",
  "key27": "2rQCnPQGXSgZasQdASc2HTCBtY86JHhwpNHJvUmF2unhhoNWJ6N53rLd3smpowkRdNcSeUbvTzfJUpCNSf2WkHvZ",
  "key28": "4R2FfGDMkM68rXafqd5FNU8orhgw8fhhzGWWRog6N6SAa1e5GH2JLjLvxbMMcxEHZ1MxPwLgkg2pCr9z5RWhCZa3",
  "key29": "5t39DqWeo3cC7T2PkzNTHxhKEzp4fMQcnWoEkcU5eQXB7sVzQJADCzRV2PzUSr2qg1ZV7Ja5xAZ7W2DPxE9gAvde",
  "key30": "ebSMX9XoGLFAtmDjcCJSASGAk3Q1FVRctjBtHSYVknYyNsTH6hqcaxxxuBUp4XT6QeCmHfSDmWAWKc5xS2AnTHj",
  "key31": "5pEmdMrnrAVpnXStFdA1aQ83TWTkL1kUSHCdJXwKMUTUnhWGUrQfYyjToiHu43RRdrSqv3nCirBbz1u6nVSyK2YK",
  "key32": "2Xkc9oZpL8nHbiAWsHhpEwQYawz3wdAysgfiYnHLMxnyQdUeYeFjemGkxUzye3223NC9oipK9H6VRRpaXLkU9jXW",
  "key33": "3GENEW8F43o3kVZA8L4qhfjKgThVqy9kkoLkvLTMWNZfE8oKnW5LAp3YK3yJsE52QS9TqhT7xqXTwYvqxzh3k2qX",
  "key34": "RQiwa8M3vFLggbe4zGcYkMFFQEs1r8SgWDfLS5J6WKGw6gN6GyeRqRbYtCNZw5N2k4cYVVbUceBccJj8o53GJuM",
  "key35": "UYnUEokg1zyz7ebMEm7vi4Vw6Y5kFugSU3vZtqBxjjJUhoNSSkp9kisxVsaLML9QCFWJn4Fuo1BXwdbD1iy1gb3",
  "key36": "5UWdKeTuf4YUgfynmWMt5qPPQWUGDLM1R1nZE8eXNkh6NkkVFpoy9VCx9PBn6tyFrpK8SmHTqW2REC6uLE6NguLR",
  "key37": "4Da1AGNyRcNf3QNkQZR3F5HnmmYeCeYHW4WBEBFDJiUE1wmU7S6CRJRdhVmfEFtUHVX95x8ZkwEQTiRqLyYh7jye",
  "key38": "4zsJYQqRVmz6u7AKMeKzjn2uFNXxDSyGHMcgP99rqQuBrbBnPHj5dj7UFVAMiN7XcUxGwRN7YfcTfdscJ9JxZEn6",
  "key39": "gVxELrKBdwsb3tuXgytUtbTC236LB7X4H5zLpzYmcfXcYLTD9BAxeqZk68omddoU5AhRKyNd6Zpcuo9KuL6DYc1",
  "key40": "3UnUki6T1Dv6uMVjdDxCaR5FQ7ewSM9mwxkgeymzaAMm89NqC1uTiqnhxnK8qyZZfibwomKDoCkKMzJTcKq4hQfP",
  "key41": "4g36jGwnxTyUpHHffQHLeBp5ctQumCgXGbDHCEDPrbYo8WRbsLy3X642Fm7a9tViow75xojQ6khXG5Z1kMJScqJV",
  "key42": "26FbemumX4RJfK7XLHbYDW1ETBXMaRu6S32tVDUpKZ8VFQ74BDeGaTLbxGPnifxmNEtgsw7xJbCYUjBrrsMRtA8R",
  "key43": "3L57K91nkWzNSPXo4BSbHcoyAzPpN6JQd4jn1s2SyyfGPTpG2Q3U7T1MQC79zn7417XJLjJJAbqU22oR1zmzLkdX",
  "key44": "3nnMvs1LBdXhXLZbFxQJ6f2TyxKoWJhVL2uqkmmzU1qUyYhmAuAdKCM551Qhe3J7g5rEPpCiL9NmfSo8rzzeAzUC",
  "key45": "5FAGYLi1dk8kdw2RYcX2tKBNo7Qtfy7i5Ms6Ezcqp9HnMU1isT8z7ommJAQqJbHYH3VqgeVNAKySdEEEJoKXMBJ2"
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
