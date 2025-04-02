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
    "3KzA9V3ZEBQ7YJVhdDD1BSat2Dx57BSMAbaQ746BMUJu5WBosHVAVjS7HHmyGYA1S7dcenunJ5xwMRjivjcBbyDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xBgnTSZCbEXosmtnvKRVwjhsqMxuXBcfcr5iA4bxbTgKSaD41MdhzRn6WtXtFV28jV3HRYYDny7uakvZ1yMJG3a",
  "key1": "5MhthLEr2RfoxayFQf52dkr1jFD183Vk9WhPpsQdwJKPtNYP4t315XZ7jNEKptYTgt9k77cyAJcVyk6Em84mzrSa",
  "key2": "3FuKKmePmJsZRQGrWXsctu1EvK4WYQta217xHAFTGq8bteERLptECzbSeN9YijmFAVmqbDUQ8i34UVDtSixjePUe",
  "key3": "dydjec85bWSYP5WaxdXSpPRcn9iUY3THz4wUEXfEsPpHSKybq2k9r9KFYC3zDSs3RRZXHfrbJ3KetgWTHTbmDhr",
  "key4": "2aa2ibHkAUFnwCg6f66tyaLKsv1xJSAMjtacc18okzc4itoovmKQeosJG31Wokz4KD2Q1xYKG3aY1BY5goGVe6cV",
  "key5": "4qfiZCae74YD2Q73WRb2RaxGnsR3fTqAcYGpYsBJ3Si9fSA4T8w4Rg7Dnuzy9EjWLPHmQMNUgLm2KLkapNmk4tss",
  "key6": "3wJu8FgdZnchdf8Qz46EtWKcKq6ur8ds38kwjgmWF5mJsqCu5FpoosTcWS8nSYtE94SXZcjw95H7dZzK9tfGZh8P",
  "key7": "27NeXcu8MkspoqWYLYXZjZeGe4cm2YaACWF3qygRY42yoVDZxZQK52eiRX9AKjLHiR8z4FbjmzVmSTvjrERUeuPV",
  "key8": "4DZ8rhiQo29Lp7e46FGKyFw89pMvPf8LbuuzWwp7o3GUhPcdRTtzfU9Jcomzg97iniBPCeV6zttYt4U2sThBvKKk",
  "key9": "3CgWzLZ7m15iLA5XZJxH2j2mZnJjQuQSJ9Av25wbmheiCzraVHL7tVyxAeXzaVyKYPRyMjVG63gVuVBQXTCQUubr",
  "key10": "TLLZZcAiCec7f77ebZMmzpDVA5efAbs3rjK211PBRt54qtEoT8EFVs6cpcUufveVSFcBYj9AhH349euBAhovw4W",
  "key11": "N8AnzUa57rMmTt8Bo9HneRPd4AKsPYBj8epCJ4K4W5a8iCvsTqx4n7k4jYAei4BiPQVnQVd1j7asQgpsyquhCFo",
  "key12": "j3KwxQDETLyJTAduRqEJBKzZZ9TViP74NrqazgzjGuhMau9bDkseuwsqTRSbzbQT79M1WZ7PDipJsS8sRYgaGFn",
  "key13": "239CdhtPiUoxj1L4dcYpRCBHwLEmLDjXLiwKogFtcExRvPNdW5xhuzAt77ccwGH4CuD1ydU7Tj69sP5QGfn3VVHn",
  "key14": "45hPdTCxaL8myKZbTbFkLmNFPLC62Gg8Z7ZAZiqHdPgA7tRwEK6n2KrHFjYj3H4uMMqrer9pwwnbSmBhEGwHAy25",
  "key15": "4kibUD2T4qMCfzME6Q6gCzPUxPzRH3E2f9fR6ATCciqLWKjwYGschU6goSmWdimvWQ11dDMaNcvEFjrvz3YkHjT6",
  "key16": "3AL4BcdKmLFvzqwwe1KkVQzgHDp41e9HsZ4AebAckFDJGUPjQYFn6cX2DNMXg8hq3neZ9XxQJvHbBH7U2QGLpQxX",
  "key17": "4AooUgHVP9DEcZ1K2sqjTE7DjxdKSvsTiECiSZJTHYazQfEihcsfYMxmHkAMg3VCwCeSbtcnswsNda1EUDgJBQtz",
  "key18": "4TFaaBs6r28wzjy2iv4VRXnZY6DkWmcj424pLgSh8grivMvcv1tsqqYmKJWUrbcRtbfZLinfezggEdvGfUrvGFNf",
  "key19": "3kyz46DmhYbfU9vTqyZT13N2n9ZusCGWnRhX3qNkEF738Merv4RcVicZgo4gMJwnE36Q4pGe1T8DSLZheyLQu9ih",
  "key20": "3pG8FXgwnnxH6fAwstrAjWM1Aw7ioTQM78fCGSofNxKYmewTxxdPQqAbZ6bAgR95KcRTgWYZRzNNe5eGy5AFfWv5",
  "key21": "2EovCMQrasTa9sunc11V3fdU8o1y3j4SiU8zo19LpQz8NXaQodJ1jwTS6z4khDMsCqsUrqJgv5VMjPakJtjR9JSe",
  "key22": "2XhPCAj6gt7UVHbnSupcwnFRrRW9bRttHhZGZAvjmYgBMyuGtHpMfdAqRxcvNHSWw6FoCUfpT7H9QMpnqZJEEq5h",
  "key23": "RGebcvLevevGzn29kL9sF33ofnzCBmNZ8WZgy7Z7hTnBGxB1z3Ka7Yyb3LN7UePV2n1eCW2Q15ZqKPig12VDhFH",
  "key24": "5RhRFatTYZ3Jya9R5K96WMBFqi7KRSf5ocWdpnFWPuMRQ6Lo2NE5XgKYx8AAqM9fzdMpoCnMvCDZwXziY5pyAWwW",
  "key25": "2jukJDuEFZMqKixNuyEgFVzENxxGbqWpSKwHhdbzpZDr9QciQMrkGj2LRcbxTnrADko8hiU17Ggi8ZZRRdRgHt3a",
  "key26": "utqm4bGwjnk5w8c2eJrXrgXdE29chCzQ5GnH6yyY7vLuB4dy13FXNf5G4ozhnBokQxc9x54wFPrJ4TXYjjPHvm9",
  "key27": "53HuL9uEij7E2MsgsBw2X9weyzFKe6bYqxPDQBsBATtFm7A4KrSSkKLq67dntvqNpLG1mbWC4QKSJyxb2q6ub2Eh",
  "key28": "2wWSccztvwmWL1XpZ5DjaVNQUGY6y3tsS6taYV5VFR1NWc68kzxvvxsDmrSAunLkziPp4w4LPx7PXBPkeb7Dvajv",
  "key29": "2CwrNbGGN81drtJWZVFH1TnhPG5hS4ZQfJMKU6KXGsViikwvLqjgyWsBAm7XfN9xxZUFjCuDnchz5VVcF6mJq6eK",
  "key30": "5sHBVscEAn1ZvorbMEPnZ3y8zZcXGmpAhoWHyQ6NcucgFf51AczpXXnywdr8DDFgNXv39pP95yyDrjMiLMVyzyZX",
  "key31": "2PdckEYfrc9SGYP8W5tmYexwrW7fGvKNMTS2HUDyL7hUHLRDyUCBdMVUoTY3iyvGCRmuLGp19CFked5LGwWRvMvg",
  "key32": "nrRhC26AQPbT3yRYqWAVnsfp2vjMfipDzX6ZvRFSrjuvRT4dUtZNARp69nHTwfmuyJeBMR8fWWmF1YGK1pGoegW",
  "key33": "28Ny8WbxTDfNsZUovGBaUcouoQRvKf4J2wQFxY9BixMJQ3Tjx8boUrfqVvFqmZjz8eazyGr59eBi2qmoaijPqJb3",
  "key34": "3XLtpPVz5NAiboNk3DwpF5Gj6tkX95Lozy3AHyNbC4fmE4qRz5JuXiidQMsEMnGgJRA696NXZfmnkS1AmHLiPGvX",
  "key35": "67CspfvvDkr1zXWc4JodNmoB2kHnr8repArk97vtXKy1q8ts7Hri6rnocKdQdbVPEPV7veXCA1GQ94SWe52BeYmC"
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
