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
    "5Z2jeAmofbi4pd4KBLqa1Hd9ydVwGgtPER97pQ5zJdRtRXprnU8ayNKsL3as686ntV6KcNfaSJPV8k19QDhttHVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AeHYU8nRwCLy4tKdauKY9NrUn59XDRDvYLFppjWmDeuxVDuaKubBA2uxJPRRqA6bXCrhvTzGL1G22D75seryqYu",
  "key1": "3j7XKaAC3QspaWZvTWPk3fTpptQE8AJMS16N9UfWsTNrXLXCtBi6XB6nponsivNvsfvnfD7UE2K2t7GhiFdnncko",
  "key2": "3Fa5ycmYibFueWFShxQqpyLRUiVDrSGQV7YGepJSkQtkUcsQQmpv6jvPFjAG2eyXywV4k7hYFCEVFv6coNezLA1S",
  "key3": "595JmuFtPyqVcVVmBVoJASX1drYVYcjLc9ncz1XLyF5BHcUi8N7kHwQqtqEN9mhwCWtUv9w47wunkk4Eg9U4KGEP",
  "key4": "6ai73XFsdnoud28k6Ks27HyqUmikjP2nuuV7hpfjJs6eeJa9Ek1ATQnpyACzMMCEeBBvtR1iVHgqjVbrjsPV2mg",
  "key5": "2ZKrUUNg1YJCi3x38TaYwfAwtn77ZxHoqNm379EQtaULcLX1DAGyysonqmETGaYFKemvvf91SuTSHmMTEdK2kPUG",
  "key6": "27u4JhhhtseXDFv4BgEaFENYwT6nkYayK5St674LkSyNwPLLVnwT32i4GzZhwaYp2sPPpWvzGMBdZMd5aXYc9A5J",
  "key7": "2GQp3wsdfvdpsFXNASTrxzGELxqgyTUC88CypR346j9Tnut9sJqncxjrS5DvoFkxuJCTcr38vmHGTBBcSixT2s8",
  "key8": "4RXsvpkQa5qq8VPd1TcChw53YgDB6wjkPF282Xufiz3bCEsrTFTjSHWmcJg1zTwf2r19Kzpfj8Dnns4age8NSwwz",
  "key9": "6aEFoP7Eacinrq1gb7CMC9e6SXgfhMRsyCkJ9EZrcTGyXpppRM3C5xmGZewuzq2bpZT6eMYFV9DDGqd17JT6ZeL",
  "key10": "3uRki8joS4qaLkjU7vPW8RQCawXmjnB2z8bnHspv4JuewqewAMWpRfxydKMeBgvHiVnQNutLLmDB6RGG5N94Y92A",
  "key11": "p1fUPVR4HSQ7DTqztbP6wRickegqAuD7pkfa679Tb3PMwEBXPCmMNH9YEQhaWF7oByWAiAdKSQLBfnyrqwtKi9j",
  "key12": "4DzpeTV3TV36p6ALN2U4yyWXKSw8MiBtXxcszNGQJYiKDWgnvDFJYAUvZSHTDHsZicR5ezX2kHRdsKWsVUvgccyk",
  "key13": "sdZaaN8M9GMJdPXZLj6VyHTekoqkjYaGh7DHkcKv3ij7b2BPrae5r95UC3XjNab1gJnkcqughJFBCdBkjwLqBd6",
  "key14": "3gisq2E6A9nsoj4duLyraiynHmPzYm2oomH26Yc5FS7BSHi6X8x5GPbdkwLcqFTbFPcwE1gFsEGbZLzdqTZrrYXx",
  "key15": "5mQJPGL8BkrcGH7RejaAAgBXNEsgJeM8B7ir5SBMu183usBUsCPen7YEeyxiKFdMXtt2Jpi7EkCfXjPbuvDjPadn",
  "key16": "3nsdJiqMg7NgtT61cx9CdQiWwMbz3Ppk9pskohapQbsMZYSGvHRNJXJbuBRcbv8MYcnB6akXd8g6XDZabL2NrnpS",
  "key17": "3Z9cPGtF7Zcx8Hia6KrDtCPXfvCGB6pWb26XiSj3WmwJpqSVtJ8KphN1fnSEmCXhcmkWgGFUVZy5qWEqNiGKuNGL",
  "key18": "5RgU8ANJse3cARbLSJrMTPDtWque4GDxKcuaU3kRqQ8mQqBYEGtmCFetRAbhYQEeomA7ecyRphhAboQ4Wr1Y5Zi8",
  "key19": "3kNYNmuNB5D9qTMTDyv38ULriFELS6bMgCeKy23svLzneM1JTYZMVGnAD7XpHSJmUnxLAAJpzzYZGX2JA5gQmDjN",
  "key20": "5HbC21Zbh7pEq39NN4kmBFMnZpS9qhGEw4XMfjDPcykVgkxGZEkfCgJ3Y2VMVCKkVFVYmjr6vb6dBWgoCc2gm2Lk",
  "key21": "2tb2qHDhzFDaVZto5WiB96RF9Dxgfa993vandZ6agEmZ1r4zbci7NypE7FgfMTTbn8PwcjT4JMDubacgWN863fDd",
  "key22": "5Xpessd8zegyCr59mfDYGa6PvxQyfh2k2jar5pBV8xAhPkMmJb27U8PcE5V6xdunsuanGxvn6VnRiosM473rjahi",
  "key23": "5YBXCQoRGk5W3k8xE3vkRyhDBqPCTvL8RatfykSkSsUKYBKjf75GB1iLx7qhUFiKgiWRKzsLZGvjak5Mm9HwxDLA",
  "key24": "2DwZ73V8CS66Q31jaDotsAovtiE22YrX66cweUuwM1Aw8qAovaJJzgZtMRx3m3fUBTcsHqzMoPnv2u9osCs6VcGD",
  "key25": "2m6MoBktwcPnYZkXmZNcpdCUXnpKv4UCTGGKw6LDoKZ43cU9qmjEKAuQJ5GK6csWofgFmE4maQL5zBdTr82jqWQH",
  "key26": "hQ5BDCtaC4yf1gg99mpbbP66HAVDkRBA8j4RbFteoiWQSr1oFAqyDmW9eH5v9b3xp2fD6fMjDoQWXm74oszJ12m"
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
