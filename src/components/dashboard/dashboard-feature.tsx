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
    "3vobfgSMRHPsi7XhLmYdUzZvsM9CuHqg8mQKzMNg5aS64AK8UrfFDEaw6tjKYDhxMprgyPL1Ge23YKviT49o73mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APtUWum2byqKNwe7UHE6j9JYuCXRqWzEDeLp1eYiAKdZw8sJj5dYYgMstE3ziEQJ3LtkE2RkHN4fuk6FEGm7EPe",
  "key1": "41j5U2YDTxQx5XRtKkAT9Fs5A3TJNRDeEjuhhgfABkNmnXjXcaYJaAGbgBnbSgiwgxPvZJ5ecmm6oyz4W3fq7StP",
  "key2": "z6NeszQ8aUH6qVPbfeFyKKBNroes6SNNi5ZGzm6y5GTtrxBunEZ2CmMjVfstbUSg7WYTcuwX9RtdkRsdtvqvKtz",
  "key3": "2xJQjZjsuJWUb3ZRZT8sL1BcpBjeixUrdsEFYnit22SfuPi3YNiknaMpSFKXm7ME4uaDmDsh38Lih1FVpxEy6fB1",
  "key4": "6eVVW1k23TEqPQFP1oht7go867JBCXhVfSCwq7f22eQ2ra4F7gM6bNoB8k3AKTiSbad5xkdMfkH3LBwhTQcncQn",
  "key5": "4Btdfi7Z84616NLtXLeLE6SXJMocmmGaknBMZRUzJV4Q9pHYwj99cPzrKhekVC7wMSW2PfYpeE8S71u8ig2mkcwu",
  "key6": "5p31DqG2n1vM7xCx5KySAmkGVqKaLbn3j5aALn6h2316ePeqWLNXH4YDWS1h6xUVpKV7g5xDmL4BNgiAE1T5TS2t",
  "key7": "5rHfNZ7E9LnzuHYJPxTGahRtct7YwJiX2ASySv7imcnGCyfn899vqNZSrqsAaK5rZh2SJ6MUSkAFTZr2KtnzcF48",
  "key8": "RKYVU2iTZn7q2vec4q9xHe28Nokv81kwYKLmW4jqeyFz8DSBioWFWpaUCzm4DKW6YhM2Wc9QRCepwpdZ1gBJi9X",
  "key9": "5GMNhRD6gUQ59ggviaQMRpekgh6Qud9iFzMh81TZronFE6mAHEoJW1CbLHENVmCeVfaqgpmsp1vFU1PhdWaWAEUv",
  "key10": "32kzPzdZ6ycATaKNPM4xong8qfYZhCDfimGMi7hKsCgivg4eFh6QzHim6PMNNXwqS62hd1k4GxTixqJH3qq8WiWX",
  "key11": "3uCGuUEh84JhZDZMJPHRQuFwBfe9RxRApJc5Pp53wYTLGGU2TAesTN7aKBNDMMXfpFL4HyCk1SGEmxeE8LRaJXVr",
  "key12": "2hXMJLcPTxmgBrfcLtCsDQ39bs23SLV9kDLrXYHcrGAXagC3USqBvJRof594zPau83uShrNzVgwGQ96QCGuAsv1r",
  "key13": "56xsjX3Lt58sCHPZgp3MZmKVJ67fk8ioxtFK9zbQYHHDNPVxv2PSjQyFbecADXyLHfjtHmKPnYwmJFTkwcGq95H",
  "key14": "2uoFuv6ZmEnKboLotZrtDj6LmfW9HQoAbrY3T2DXj6TSteCgJGi9fHyoj8F1wjf6UsBBaRLdWH4eHKsyRYyEF4Qw",
  "key15": "87ZyPFkPdXaALpg71ZXiwUE7i7cws4iNvHHAXdt6Nds3Bf5CSXg6ytcPLg3ppbBFGcqidhrzW7E3maaAGVxpi5r",
  "key16": "4We6cn3Ue3DVjt4dLHQVyMEbEt4n9881Esi3agEyWtWUhE7aKf7vW5R9oWnSckbDhD4uDCGmUhvSR85xG5iJcnKs",
  "key17": "2bwdiQqrEkneJHwLdYExdwNdj62GGvrJcND7FBkF25Vh7mzw56k5P8wDKuM6ohiJGkr7f5BYAX8oEgEtmN5Nov2y",
  "key18": "3Zq2SM8BrRtkC75rZcoZMeDVDLeVhqEqjJANGWu86SLSZZH1hxMRGtGq8h9g3gfZjKabENf6d9uoyQeANcsDEX9R",
  "key19": "3vWi3SaVQxcQvvNSi7t4A8zZZEvbLfa9inC4sAFs7WK7mzDgsQxrQWivyhmnE57NFRcnyuJF2PuvFTCnpRDSMEZC",
  "key20": "JepJghSdb8sTiYJANDhBGhneQTvZ8eUP4gV8tuJrdBf1joYf9ASohWrtrPrDd5aCzdPj5NBnBv8NB3uNwHoGbGa",
  "key21": "6XxSWL1gEnAQMUtLkpMpuH9WXPKNrPS7DK7emCAkwbPg8mmoYCAQREDQFy2a1GUSB3F852sneqpWDPks2GrWfsJ",
  "key22": "3LzwTLbrvk56PcbpZtWNCmf7vVFCX73yBgiEtoaj9TgfQkoKsYNtMAFKcgWnWVpjoLPcLkZsvRuXSmiz1icizB4m",
  "key23": "4smwhFABEj3fkzhKRseaBbnKsgqEGG8NK4oNtP113U2NN4JKenVapAEo9FHsL7QiAeq7MKBUASj2cKeDrN8FXZAA",
  "key24": "2dsfUCSYiE5mYktC75yik29cWE9WNSd7EMRnA3VYsMKSnPbiJ7yLdQwvo9xDzRKggeSeqBfnSpzoBx5pn8xkNDqp",
  "key25": "4M57DRymtpS5P28DeLLVFY1SWJMVgHW23z7JBUfW2z8srf2ZosCrP4N5tF1EzNtNZjxnrQgNBek1JUT6xhKgGPGm",
  "key26": "35QAvyfZGihpPMKn42RxPo4AA392bpTpDf11GpsUTeRzEGCLqb5pa7KyXzhPYcUmPC1rkTpzioU43BLLJs7vXXCn",
  "key27": "5Hh5NGWsECjd2xjMfx7hWsdnGUyGzwom2sP7wGo48vyaswZwHAgcfwLbTdJwguBgqLqCzpeNBeUaHs75DADjxCAQ",
  "key28": "5apjomvnqJvpkZ5oqAkztbwdtR6BZAR4RGSKg7gkMaz2LQtfX9QibTmMTPV53o6rko3AZNPZzKYLymXJFLPewSZ4",
  "key29": "2V7jDCorjA9HYVeVsPrxggWYqden8U3CpKQmQAJWLgqtn6oEcxQyDZmTYpPMjWGrFKRUuCgiXGaXyuh5spHYFEhc",
  "key30": "3brGkoWzpEQSPGMg5dCdELmfkT3RTuXQpbpEVDf85B36NCtNc4EXz8Uo8ZgKjPCwFiC9RhWPf83LHPzjRwZLogFY",
  "key31": "2P82f2Q67oBeHNq4sg3yvTxtsjNL1EZmBBDbsvntkeoBRZfzpD4YVdKkFD4CvV1jvcRrFiuwHYVp6cGT9FaBYB5k",
  "key32": "QF5jywJ72eaMH14rc46kYR1nYozbuFgP688ComdH2gxm576wNeszKdZq69PPtvp8cZuMVsBAsba5JME6UXoSDwX"
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
