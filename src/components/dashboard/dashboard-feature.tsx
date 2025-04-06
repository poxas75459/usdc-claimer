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
    "26Vg7vpG5f6ALLcmvyZXh6Pf7vHtgDPpCz3VZ3diySfBQ4gSgLXjC2MBSwNt33cNDoPZ4JoPBn7zi9J6hmSkmeYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJ4WU7453cLk31WL8WK42Wa9GFYSZDZXDXE85dDfLJimTpVgXF1uDR3WwiWmTVNLNwb8j9K1axaNnyxh8ayfXcK",
  "key1": "5sGkFX64Nnsij8t72E2xTYFR7fG1qYwMQs8XpGDN5yeAjuWxew7XSr1ebgiaoexvU5x1tBZqeYE32ZaPg8CV7LS3",
  "key2": "5AGYmMj3yexp79gdYaaPdZaPFRL8gqo128iwWA2Gjk7bLgTcFqLUy8Fbuu6n7HUSJ7PN2Dns5kxsw2EGY7AUMRGS",
  "key3": "222mRVdpdHywPth5rHDu6A5SECsMBRhWiQQjkSJ9yvW7cUqWDa8qiq6pgejP4dkZx7VNFPHXf8SeFv2Jaz2KhBpH",
  "key4": "4MdTjpSTnvED3YBKPPehybtgviVTLmk4ZxxPR3UP3pLmSDh9KoL58gEq9aMg5BCTD14hAWx69fXYiwECianhH93V",
  "key5": "2hnEmvVi2XzuDZBDxhFuSJn8p5Mj7C3czbQ8JUE4etMbRqGHgcdT5xxHXaN9qUD7dcNEV5idUBDpPoUs8q4HypwG",
  "key6": "59yfEUE8D3fNvj1nHVnYp2bNNBHzRbJXrkGPsVMfs5iGRiEtpGqpBnkHGkbgPBW7eanjPf1cwLBjRXXbrXnn2FqF",
  "key7": "27bqHAWogcMVJKiptyaann5cHMuVuZSSTwoFfPahiKyfNLYQZW2TAZWaA4EZEjyTw1tiXevzYiwdjUMB67RvxDz8",
  "key8": "3ML779PnHnPDQDEVQVoF62btK1tG82XGfR2n5MGiMgo6LPAaBgrUDtBVYAYgTx2q4nYJu6UgSjZKwS8AGt3udHBD",
  "key9": "55eZLkJMf3XfUQk5K8mYV3XG7N8CVxsFvun45gAjR9tUrELibMzjirsysfFJAsxFU2KEscPtrZ9124CcbqLDAjvL",
  "key10": "5vhgEa3sMqnZfDz4phDaaTEBjYV2HbKL5urGizWzoFeVACUMcV13Tq4vAw1kMhK5tgqLHJn7n4dL1Tsar3amS4D6",
  "key11": "3Twzfav8a4xtggueYtY9f422VAX2FpnrV1fZfio6n4Vkf46qUDB3yxWdiKPHoqg8C2v94SZgMxmp4ySosgjLb3Q9",
  "key12": "7ejRTkiLzaVuufBCmpRjDkY3AqJZDPfrMgirswpd6DedfyCQV1oVG75WAiJJfoSL2hcjYCtuC4kiuYHXzGRMrnL",
  "key13": "dyR4H71YLn93Dvuhpqyx5rH3yNVRymG8iFnuC7mExJdSQ9jfo1j8j4G14MQoZ2BovgPDFsrSfrrs4TT2mqApbWr",
  "key14": "2ezvWfXeFmdaRf7mNzYMgzZkh7G6AbQKZQQxd9AMvfUTpm6wLTPWgC4RSkmCPrtodvrLev9ZXo3coj8yxSpFmzQq",
  "key15": "3XuzSwLMgJFkV3C4vWtSrXY5ueJMXzfSCSojRfgWrjfDXydj1qNjk9nJeXqGPFFAe7ix6kUDPebcrPRVqG1nwg3u",
  "key16": "RVCocRpdv5h9cb4Bo5mWFgwMvgnVgE8nTc5W9MSSxBEHqWyXhxr4Hx8M8hvrit1KtV91oJqZjVBZ34K9PJfBSoc",
  "key17": "2pwponBXjkfu4nJwdN8jL4rH1ZYhVwsnNCinebC8cfadczHBVw8hysdAEmjjzRjpXkxM2RQLFdFQp5oiDhNiRvpG",
  "key18": "33tMTGyPnsTcXrTrQ3Z4LQQgh2kjykB6GwntBVne4QTXPUUeS9RHUVL5zMZ9oPWBaJNdNvPU8Bzcg6TsB9cWwN6p",
  "key19": "iioZNgKQb8APXF15P3Aasks87E3jjbnpgyAXwHvjWzyPtcfMQ9ZznZbwfZR3BaY5xqwLEmBK2m8KDy1LgpAB378",
  "key20": "3Jc6tKnRsWZB2tqSks4BFRce8C2BcRaR1WeYmSpCAR3UztWW1vqCF4srP2JXYbHyXx4oVPe7L4Cr52tVvqYXwo8z",
  "key21": "2qtT3Kv6TpiWnZWktYUGKoVFP4CuP3i8YaVCHwbcaEHt2DQqGJRFkMTEpur7mfgB2dHkHLQiVJYqzaGvK2Qb6HMK",
  "key22": "3r5Y6DPfJ8CR1mNKwZYhGCbeYfjsCoUTRYMAZDgV8zmyazJLzLyM482rY1b8WqEUvFseeFoNaogHupqTLA1NcJuV",
  "key23": "2XoonvvULRNp1meoJckKjoT8pzgJUD4dWEnBwVVXEA16zHDSCyeRmfskuLEmU2TYEXq8uaPTmsDZYEBZ15vrkZmP",
  "key24": "9Fs5Bv6tfD8DUUW5iKta8uQx7AAamBxpBSvMbjmH5p7WUCQDkdZzGKsTc5fP12HTVx4N3S6aFmL86DChuAWiKvB",
  "key25": "ory4FTKNRPspoJcS56hcLD6NayZL3EndjUSc2NybGari1URufs7CeJyiw2fC8L7QA9TwMtuoqNZbdU74jQYTmrd",
  "key26": "48wZYbFtisuHiFTv3qLTCfESQB1pNZUaP4XmXNhT2V3z4hUooLBzpbLFwjYQNPpLDnvahgwzHsGsbuEuFExEdpop",
  "key27": "2yd2WL9qTmwqSKmHje62nvHH2q9izXEJ1GA32RHszgbKtMvzDBSdd8bPgPP91cenn2PBZHHQKUSrnMaDYKq6J3be",
  "key28": "3vMLjvoMBxNLw1FEL4qPvPTjdPupLcmqtGA5ZYFN9iLMKQs9Cz5rPmRWwojvRspLfkmz5YsRVoDXubHs22QZTXGo",
  "key29": "nHaftHgdybTnUKLhWqpMTPLu8RjTP8BjA2msj8MNK4Asxi5oJSS5g74EHLQxbMdVS8jQgMPDLLqCzkEPoigkf7R",
  "key30": "3GW7D44RLkiSP3PR3PADbmvJ8yEJjF6HyaRvnShTooHAg8YKWRxmmxDX3PmaXhAngyVDCimcvSwsyNZ2VCMDJnmL",
  "key31": "DcHxQh3XbYmSjq3Jp5yokwuWVTzunmHud1GvxxRtfj8eVe1veVycV4aVAfBsEPHki4xNMy7fXPEYdkG4T5kGz3D",
  "key32": "4KdgryvZpb2tQmZ2Dz5fazTL7iRM9zFC632ckdUzUAeTNEAYyegB2rkpZFqXkYxJf5F8oX9ux6DtCRoguGDa3snH"
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
