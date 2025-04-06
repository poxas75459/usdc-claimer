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
    "38pbs2gaW9osxWqasQAjf45oFa5xrfS9GFzDfnLhhcSE58WfpApAfAcXrzTZpY4FEoPuG6zguVYzT1go4WFDsdcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ns4S6kdxBTHVJkkvruofBMo4YCGfaEZ1fLayzvF5dXB5mC2N4dE89StS5jdBYQpimWc3LU376Z92JaPkHshk75C",
  "key1": "2S2XKNXqmEpat8C9Qbx3AUt2dfyKK3usgaGau6t8rgLJTh97HfHcDwrwPnRs1bL36S6kEPrLRoDz1becawH24Xg",
  "key2": "5JiMBEuUkdxhVJ6XVpk1jPnXFMZFQPkyrP8edPD1mLySwfwBCGTeEHAS1jUBHYNcVdfzinQHwYgmkAF8uxF5rtys",
  "key3": "3mfDUSL1kZKM8eUN6PAgqEnGZ6Cjpvz1KuLrQmUdg13Zkytf5EmdZStVmL41XpMEpsMQJfqeCRCjdur4gLTF318t",
  "key4": "5snditiqNXRT9HNMWKsY5jRkYpSL6Ss1DFm9vRwi9EPu2U6kLazTh1h6TAxM3DrDUBgdBSMkXiUAXkdNsp7L7uXj",
  "key5": "33UzieCrfbez43gE6DXuVzJ8YAoeHM9uNWg7UWwLEw5k3xnNhH1pMNSAknpf5dyAAUy1QXVAGecpCXQa89g4NgDf",
  "key6": "4Sj16sn4bj8RivAsKU3CnU9CgS5ZB6eCL1fJgmM3poY4kYanDGx7uicwiRW2C8P7Kd57Q67iDebz5Mkr7ScFDGzv",
  "key7": "RYN91oyt6NZCqLkyd648KScUCX3FY8MGF2Pm4e6ZF5r5RmC4YtRe3V4o1Tsy7NUvAHnVMqcT1B78bP2WavoeiLE",
  "key8": "3bkppHyBaixMCawmRbiKrVWWChU1KSB1Cfe6Lt7kPDtaJX3N287pue5F3B1jRxj3dd2hgjdJeDQ5Ziwox4ZkG53f",
  "key9": "2miQ18mqg6Ji8BfBBnUbztph2CGHDbV6vz1s1ASfgByJtB4zead467bGVJCuJ12aidqNJvA4UqTjMxv67aeDWXM6",
  "key10": "NBf2P9iycuSkofSUaWn3iypscwbpeAPhhKFPDPh78qh79TXX9hXH89FzjBbjrhT38vd5V38UQD3Ui5u2ygFHt3U",
  "key11": "2qN3KWcQdLgwCMTAYo9wBJEzcghvMXjRguhzXeBkWdVhvqjmfGHdhjiJddMaiomszrdKA93YsGaF5RMSF5iXhtie",
  "key12": "NVxyRy3H5hdh2ArJoVEfcECtyMH5auWXLqzwvGRUAm1EgyL2hxsFvFRvkXPthQWvt2uvH2hye85ZjCoXmo2CPf2",
  "key13": "5HW1kBrAFu1NPcHuSjJQCmHrAkgBb941mbDjFh2uXYv7Hcz6CjyVTJkhTp5rXbtywidevzr6GAsovrzAn7y396Rn",
  "key14": "4TCLS4xuju3ayjNxvork5eYRp4S9sFS74qZgBjchodkEJrRZZJTbaSPw66MKygRYzuXqbcodsmeqXeZia6C1sbAS",
  "key15": "2ghykaiRVwm7TcgSkAqp4ZwNJeAmhkkmc33oPtHKQi2Xi3USaHTA3yt93772XhziuehEDnvSYm8bbUtJ7Tu1ugFb",
  "key16": "4ckaQhrr28jacovHdpf28HwGF7wXjq2tYLq4gG6wegkuPvFTXmbCAEpBjS4QVj5pLNxQ2sPTKXcc7Gnma1ucc8Xx",
  "key17": "4p67nUJ8eYbhoet3bKcAbbH1n9VdY87bm74vLnLVxptMKDjTh3vgqVrvvNgYDjERKx1Rx3FU4XjBa9wWFk66UeCt",
  "key18": "4vSCYdGGaDH1VN8EVrJzSMCgzWu9hfTkCPd2d1yy3BpjTo7UGa8CVUjurp8JXkQ1BDSo7e6NwQvAzW6JhiZtDTGa",
  "key19": "37wWjGBmPzsXxwFR8Rvy62wFfGx4zH6xKy8erokY4emGxK8Ey13qudeknnJttv8i6KoEqXTB1raAtxQ5Kyg68smB",
  "key20": "2crtA43gXP7H5zvGfqftF6yMoqQ45wcuQcF5yqWVCyTuG4s2NEJodD5tfGfSGPqQjr68F7LFfMvwq2Qztan5RpGG",
  "key21": "5MKVUj7W9aEqWWGNh2e2d4zYX7WpFVTstYd3TMpWXdwqnho3RJXg2718BCbLGB7uYfsZVsXsR1hQNDE5u2YghoKU",
  "key22": "28i2ybk1tPgCf3VydmXXSAkNtSo4w7xBC3tKtyYH743pYF779sj1jUaMuGGAGnDDo9YdAZ1XjwdCGLXCPuQkP8qU",
  "key23": "5JQXZJvLK1PKANCxsmWoHyRY9CvEUpTh91cHjNkbxDu9iXMdAypGaskReAtmB9i3gkUjV4vrtp7JXQTHKScQaxc1",
  "key24": "31UChp2vWEdQsW4tvZzShMCsXvbShnB9BcLNLK8pM3S7Ff8g1io2eBAkWknk151D97qxdkL9JQmEQkPgBsDZr7we",
  "key25": "2exZfCXpdHr9st7Y8gwhNxVkikiX2fQ14h8ZTfFMxSm4CTs2vjvxaA8KBmdUfMvFiYEohNJhebKfWt9ZyBppPHhR",
  "key26": "5bMFhKEX1YzYNmTW6FcME7d7tkVvuYQ5eLErJjHPKrtwfqf4ZGrBqRe6xxCMxmPhBkxx9hwpeNgYcd8BCpNXszsr",
  "key27": "5AgKR6NHEV9BbHKQVMxP1KRhNbEasZpPc4No5mLdRgy8Dw71Ju85kdjeZYPgWXA7x3frdMyXLujYJAjQKh6bBAk6",
  "key28": "3oi17Zzth7hZC3bCDeqLHKLQ8786JPtRSgPBFPJW6hSH7CjXt7kVdnfMvx8cq6kyLB7MR2PiA9nEk2UeoeybTpdU",
  "key29": "nnC2bfQoM8f6N66E17bk64FGNWhErvoZq4kZUAmuLaP8mRfoD3DrPQt3ULhRwwHRKBpXCJm6t88bfzB6f4fJMdL",
  "key30": "57Hq1JyT4qdhcRtRwxrdno9rGB2kAfjg46NFbHSCqLcbeSYahy7FHAU7Txu37hDLdmShhtsGAo29YbEbj8ji27ez",
  "key31": "Qev8KvRx4kedp31qDUEYxPebTFQ59NKjQgJfR3JnaAx5sboTeAa2ntFfaeMSAVdzG1AafrmCvmXzzDtZLwLnrq9",
  "key32": "5xCRCrCM6xJtDNBqZU491cGYuzBmpGSKpqF7vx1opMPEcmm3biBSruLE6r7Z6ewyuUrxp5R9f9G1XHkHqgtdQnwZ",
  "key33": "5E48M72rM9hGsaGdcxfGWnudCTfeb2ZoaCU14CduE18kkemwBNtdJYqvsvAt2UraiCnJeYaUACYSZYD6uaExtiyA",
  "key34": "4ytCRY3x5b4XtUCArHUcTgbkEJAQRr3j4szcbUNKxC69ZL4HZKJ3VSWWqk6Z6ijxepjHJR4tbdQC1L2Dph3ajioG",
  "key35": "655xf5SgPFVcJimFWWDK9YyRbHdNuwA4LJ85mo1JoUim1F6gJAPSVag3F7hiXSeQ2iedJfEDxjm6c7tEZeuZD7TG",
  "key36": "4gZb91h55kDKbMSbZ5cxQqGsDh9mT1imLNPqohsRhdz4wyU389ammezt5LaVneXLmFpzQJMX1q1CAY39AnFp7giT",
  "key37": "5GnjnK6D4gcvKypR5xhHwWbHeUF1hHe1MVbDqGudC7PaVv6YXwG3sqsum2EQCeTDmFRwq6DPB9SNGzNTtJEd6oFc",
  "key38": "51Lbhr8sqFrWYpirtGfM9um36iAS5zGZumazWc12EvuW7aGiEmUukVufthtRq2sqEcMkcbBU3yafZHjmpR87sDtn"
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
