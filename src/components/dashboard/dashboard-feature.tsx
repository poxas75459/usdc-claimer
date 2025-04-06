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
    "2xXY5JaYShpreNYYdr4Vgam8p4k4yt9ExXBWsx5euEnwKPLVSMGeZSSapt5LotAtnfiDggZEpNRTmrRjaknen5DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ESp2j553d3qQ1SLNQJcX1NgBPAjSvCyYgaethcs9eCBvrWEmbDg248qHM9hoVTGwXiN3Cxrj9h8FdV6ecUXPTEt",
  "key1": "2B7vfG3fG2qUq68PdefZgmp8XEHMyyaSHiMyepgzv1MU3jstBCSxbuiRHDxJLWDxau5asrcgbPm3f6saXmXvYMBL",
  "key2": "37AnkrMdTzjp64aebmbKKAJH9iaivCQpNwYAGxvwYemZKav5K913K2T5XmebnDatFXHQGpNKdzBPwU2p975Lp5au",
  "key3": "4UwYFR8HrVz2uwo5ee2J8rRe1wWaDYnbeX2DoGzoQRR8AvivtmeDtNfjgCg2T2An9bvsurwrvt5pzRbJCtbKNp8K",
  "key4": "WFL6ZpFVSU5cgPV7ZWe1R85oL3HyU4WADvrakvGBixBjZDhTJDb9Rd7NrNKABESjHvtt4P8CoAdrdKxJZRivu3B",
  "key5": "4aftmnU1AQrkUeWaGcWomMVhXNDgXHHrEowcQu8TmJ1NTcLPWjp2PkM2Hm4p8Awet37DfEjj9wJ5mrAMUxShyYHJ",
  "key6": "2pCwZg1qWoR6z7G9WVGPmrE7jfRziCgSHjhRnKcXnG7UMga5btmZyuAzmE5927Vefs51wpqUr6K1EmmcRR15ZH5e",
  "key7": "Dx6J8BwcoFC7BqYeMCsat6kx2LHUEcTq2W3Apm1DZyMCcHb4xdMBewRCiLCEyWGQaV1ATiJfSzoF4PyD2qQZdbz",
  "key8": "273btpk7FCTCysfYPDC2kNcoc5AnWpzP47ohRxSnsTyxWzbJqCz3Q8oZvVaSED1av3gbJrsi15YzeJsWvimD4o2X",
  "key9": "5zue1JdTXsm7Rr4x432YW1mnKrdDE1A3AiTBAt1XMpMwNZLdB58MmJJ6AHkCLRSLkDTTNSBDCtjw2VL7zao9LHgz",
  "key10": "wZsoiX9Y7bdXqqig1vVKTLDSmPiT6bHaFviHaenE5gJDu2dSeTgYRYu5y2NNnzbbjav61ufw9TPKksZTtGyU5qC",
  "key11": "4uDBGVrd5mrWXep2azF9Eiev6MM6Wht3xM2Bw1fDUUeEdsn938VZBfFaA3S7ERBajqRpbQ7H5p5ZyDZwNwnc2ice",
  "key12": "3jShVpZpGHXE2SDzx6RULtgsxL16kEXwy62TXJK6QxuApxuWsaB6CypsG4EVo5uqeybjcsjdHJboSaDhk9VLJBYk",
  "key13": "2UMG8dt8nfZRWy4nr1BAJ3ovunHT35sjQGqe2GbZXkaeLw63oW6yJM7BA8xaPmMxwpbnPcvBmyCcWJdGNAw5NS6t",
  "key14": "3tf3ZB8uzVeyV8s89LPhW1PVtqoAtaa47wrU1BCY8PMy2bqunxUd2LSPEc2NHsnqagstXn91cgFcZgntbaHw4AAb",
  "key15": "gJK8E2wzjV4SyfyLmnggmhWcEGcsa4qZSR2vDEGjFF8ZSTnJedLjwkHje4VLxjw211Nxhn7Mrjb2vfRFPYawj5S",
  "key16": "58gEvhKC3Vsgwed1S4pSn8oAcqkURUV26fYDVsF1bxHAfgrex2yD6oZWrSiyWTVhneK8z6kqwZecGPYDho24zKa9",
  "key17": "2WcvE7pNY9PeVe4DcE9kqsWM7eeaxLCH56kTGpTRUXESJLzQjPNteBz4Vb5AF8ktNDdyWeKxeTdb4pGfKSADJWsK",
  "key18": "3wcuHXU9jHAv5fFqqz1aqycd7ftv5eE39CtTv7QHVw9xrc2sSAoFR1ryC7bNYstj3ZXrzmPfSZV4wRJpnLwGCqSF",
  "key19": "fzeB1D97L3t8s15f4sLxr91vzZCZHY1nwpm3Si3Z3SR5fYyqNWHbvRK8ZgrX61nDSjjKmQyQ9Ag5aq2qLrcQVZ2",
  "key20": "41gNbL31YbYe15vkNREfPNc1oEhsUnggYqkaPiqjyf7nfqALV5G3ubRwwiKa3BiwiYmU879RMD8hSgxiKfWA1gxr",
  "key21": "qghvPDZpqPEKAEfhwQ9DNJZefxjXt38Eq2ENAUR549edzZy3ifNqVQaEFPvwikiq9MAGPHFUio4RxY99T1niy7V",
  "key22": "5p75WeracpKvHC4PfRV3cp1ER2L6m9U792DKRYtJo99YPhG2wRCnAYbVcXP1eMtWGXCAn7jjhTRy23TCnHTH6twc",
  "key23": "3m7AnFbmpPwYYLM5NqxdZ7gsKyJRZCZzp2mQ48CQKuMxYQU8g4GLUdvkHgEHLEzcv1ZWvcXcGAHV4kuHrpp7HLkx",
  "key24": "5QGmgZojXdtpWeJ1LFSiiQnKV8xtghYCNwWWFqDBetoArftiHBNV34c6AGKKBhYZtWCX7B7PXcTWjWRkVQgYpB8e",
  "key25": "2mPfQk5H7vGFeHXKjAmEA1LyRNdNSoncq1uj9sRVZeW1v4qesWzymaV1iLvJqpdAYdRMHemxHSZEfXhgBZbdxicW",
  "key26": "2puQqWByDStqH1RXU9wdMqaXCKx9yTJ7mdKEfjHza3qEwLYmakBabCvkNCEemKXxHdTtsaxHvfGXM1Rh2pQzkTfC",
  "key27": "GsLdqj2xZnw7sk7HynL8PnhWTfwcmCqk2fyNY8nFZjwYqGiucUASbdkZNyJZisYaSNU4mh7kdDahSbuwZbFZQuG",
  "key28": "57VfEfeQS4B3wrgwXpXbG27tDPHZjBC5uHPq4Pbyys6zTPzkJbyE7eJNbfFfXJfcbov6o3fDH18NNVs6U41aTVX8",
  "key29": "woYYYnraPmsUuLYb7aoV4uG1f5dnMSX11x5ANaCUThCsHMicZRhuNvy1H3A9ehwnLudQLCmbwwXne2rTipMTkSp",
  "key30": "3mQNZusaKnkbzA2z1px8xV6sgXr9zEct62QiyeJ2XUf4saokc5a1p4eUPK7PBH5TjJHiHC91Ua9ECVBq5xYn5CbS"
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
