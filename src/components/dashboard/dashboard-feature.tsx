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
    "qJ34FsZxbPNneFEJyRAZsWAkijiovwG3orWCdwWQaVmGQuPphTSpPL9S7rbpTQBwPUAHXtyxFaLvrXg6GyKeDs1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ooVSFCUqhkFePyz4938LNobrsVNtUxgzK81Vnm7aLh5vsoZdt1hajobJ6uUDowZBK6RG2s7AgLzx6VYtH3qasF2",
  "key1": "4CCrDpzSFvDZdVBAB9W9GNwm6dFXVNmSFaFoG6aFo51joaNVxYBaFSn7kRfMUjJtUsyVg6UnmWqmYLgpNbBmLJcv",
  "key2": "5wRkLx2mAZXJuH5Dg2vXy3Sqa4MSdZ7enrvE4NA7rC9tvbW1FnsxkVuyRaVhoX87n4eqyVuSiixgjbBBWpMaT4tM",
  "key3": "5sErBg5atPh3eqR2PUCwnQPEtqCbTocP5hnCHhBBd6dn1u4XZ1dCeVqEDr5urWLRLgoHi8f4JXdShSAdwDM4yKeU",
  "key4": "27sAQ9JN9KZccQHtQ2pP3DXBjzjU3vGi1SW1ePBH6CoK6BmBiyp1XjXTyUmzWNPrHFe976HG7osftR6v3iPJsKmV",
  "key5": "WF4YuUyWiZwaRu4Rsy1zhBe2AtdgTrVcvrcSupatcjp7d54X1BDBzbwR3fXpvVai4m3nuyPqQ6HU3C2NKopUm8q",
  "key6": "33q2WHaSvU4kjnskxLGcZategNT3ziWz7TmjwwdzC9Leo2GaeWqE3vdiEcvnhTzPv37GAKmAyjcDaGfxgYRuqkph",
  "key7": "qEpauLZqtx4ocn3DqYMSJpauvu3J6NV2Rc5oz38Qu3Sqbu9VqzoT4PYwykFgteURvyFS49G6yiBjfyLiThLikf6",
  "key8": "4zsVbnZbMu9eYKodgkSdeDo3bwi2hmThVxXmMpZcrEieeKvgFTUzPeUAG5ozQgc5f4eHVz1AkFJpjU2efjmHMaTe",
  "key9": "4rsWM35U3iT5pXXwwam4bXVYaw1i2hvr7rVqJTFsc1NvYwVpgBnWuRdVYoUviuXCDyJLp4Qv9vkffv9UQPxsJfZG",
  "key10": "27DSdws1cTuX6KQJ6aCh9VH17MM3ymH1FZe5R9knt7wUYBwZn1zPb3XQG2Fo3fw2FixpSJieCWbxwHLyvdJy6wo6",
  "key11": "2UsQmQr8uBiXCaesxmwaBZ43JpF6zCyW3xoScN4v8uKzk28LV76FHtAw2jxefnkStKSzzenj2PtGw2jbYhqrPP34",
  "key12": "3REWUMPsT8tSNCSWYystu5TqnSBoPD9q8gxHgmJENvkCakiJJHPUqL8zCwPgSMfGaGReZBcRqXY5tvxQxFYEjfPp",
  "key13": "4m44Qrj2BvbrnTfmkvHGmE196E7N2JDdoCqtk2UTMNvT31XMjaMui3Mva25cnG2fAuuEzvp6trEijoWX3uKATwkv",
  "key14": "XszNeQVKefsRvjhFUjUgSup9W6Jb7f89HsDvfJ96CDA216Xwi5qg185hkWvSAPNs9pcZ4p3F2cteGRqu5cdhGcT",
  "key15": "2GY66k4nq46t3qhWtuBYAYcSKLS2NfAAVAAHsGcGGoZPkZ7J7XiLvsY8Kej8EuMt6fFLmMZ6WCQwYpTaXf6vmtzU",
  "key16": "361SviKNdJYsBgxrKxauSCw6HbAmpShGe2Q5rKRWjBj4w5be2kdTHuTXF9MEHUdY9f9AjK6H1FFZW2nsxofEVNY4",
  "key17": "3KAepZ5FLPkw7QnbUfFNniqM5XSbr9Wzv9qjSncsPeMCb8t8nPcsaWScBvxw7GVv5tPXGJvvNc4mdDFVGkY47pic",
  "key18": "4MMhXt9PvYMEnKBmouKeBLqcgdhsmt8zhZ1pAuSBV9pnELAP2a1WdW3QkXwMQVPoDbaaAmYhTAP6yVWcvstorgwU",
  "key19": "33tXquLDUy79Y6vUTNHoZUWg2kHMwXuRTxxUvnoWwVJoyJhyqeCrjn6gMCuRwfjRuMvzK5yGMUf88ff93s9o4GWN",
  "key20": "bWqT1Q9buanFfYTS2rS2U9Wig7YPYAFqiL85HsERZpenEP7Lg8k6JY2Cm2EascX9fYeinVE8afd8zSu8qZfmGeG",
  "key21": "41DQfHrRQFaA3QqHBD8YWsa6T4WVjGLoJbVntiL4gepN4pJwUpXDMNmAwFMqg9HPxqxaLpJ48EwYJw9Wmrp9hZSh",
  "key22": "57jAUWP6KjB1FNmW1RJghJ5TD9XG7Cv5af14mLPEnqaoDmFdQGV5ZMcZEj9mcyEixUiw8M91rxxHKM7ZFyWaQF2b",
  "key23": "ZMwX9m3kgdjfYsxYWfTKPGru2JwP9HjE2QTxicXmCd1m89cjYmcwXKqoGF2vHHmJCCRL1m93FkAD67S3So4EY57",
  "key24": "4qz5VNRXLt2iAvwHwMdcH91Y6KXn6MAFBjC832MahZhJsFbMrYxbWwpV5zwp8AFvm3J2Znb3HsxQXpggvVKfpsYR",
  "key25": "3HHdAa4HqXFkegGSYFWYoxPUKWhMkAWngNbSCyYiekvq6amiNxDJaSWTEvVmsimLuA9UjDe3CrtGxfkEF2ydAqiz",
  "key26": "33cbWs8BmxnS1WGSHeu1499Lf7CMyXpzZDxajH1Gwa4ifJwLF3Jzczrt7h5R7ijADUNwx9qSwWpHPncSjg6WsimL",
  "key27": "3gnMUutXUo6NwETJ7XiYFDGxXcJnFz9G7xyvphEfkmBLYKboJ2YwJGQ1ZcmZF5cU2rn7XzGjMsQu3S6LxZ4KJGuv",
  "key28": "4ZRSmJgTtzU37A27E4cGvse7RG9NcqN56o4Apy9C74f9cSDq5qNBeqydpE3eZqtXQv8ZvyD7cko2DRYnkXRtc9vT",
  "key29": "5KzT7jGmudqraCq2pbnaGSid9hwTxiAG82LgmEvNcBr55TuDsN5mb2KsvQQYbNpurZYRxSY41BkKoPbVgL5f2HUR",
  "key30": "4a3axu2iLejgoBUBxdEYDA9fzs1u5zWyVTMermRSsTr6sSMMYiEe3qKRF7GAZMp1G3TeK8a5XnxskiLaXFi4Dm7y",
  "key31": "5ArD1wvT1yLTDzX1BB8PeyECL4aATju3xTCEQZK7jqt6SNyYddF3CChwC7wYQ288hED6cZC3goF6E2d4hs2KeQkz",
  "key32": "s44mL89eXTVBUEtMhZhpzSqb5aKXkeiB1HzNYMpfe6KDsEtt186ZYcmFZzm9wVzzwoTTzad2SPbcyK2cvUmxpVh",
  "key33": "3L8usGUdg8yVCTNERjEvqFzSWujq2sU3w2PKCeHwfetHtxooVFyqNW887BgYmeTW41cF8kY3i6DgCyF5XEURsQjn",
  "key34": "51Kq5ixbxatGRPC8eMj6nU8eR6NwezT2G5XjGkYXirJunsXBnFy8hmJpEVo4Mh2MvpPzE3K8KG3RWzoqJmm6KQqE",
  "key35": "3DAL71j3CHnecyBBh2BMbfTZedUr69nwupCHY5G7RZJJK6BecN2XK4yAon9cNXY9e2Zg9oD2pVKrZBKEyM4BzSRR",
  "key36": "uGufmwJcSbwAVFhGnMt2P69YnsW3Z3de338ZeUf3GsSGUzc93NaEuNwJiYq1S3Pty1rZqRo64snJvWNam5sz1mm",
  "key37": "RMyE5TMbFdwhJXzo5pTambbiksEKLWpFm53WgBp5jsjoQjiKb8Q46Qj5PQ9AgtvyRUBZRHiZpH72CPxpsMyTg4B",
  "key38": "63P7YmLahy69DTxXZ1xR9cjTtXE9jnYofBEDZS67b4FetSBJeLh3Gay211dRSWW4ggSRF9uxQ59nvH5GDw64bg3V"
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
