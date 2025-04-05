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
    "2d6Kyr3V7c2Mu1wF2KmCWHWNgkFjcjDZYEt446kaeD4sY3BuzHH3PDA3viyQL7rRKKPKA5wY6e8V3K17vcZDA82C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28t9mkTpKTBJHs3LkLV8isqEtinQwd7o8TKLL6h62bqn2WbDDgHRmsqFTe2cGPMtsyAGkwSzj9idipmPLLtXkztm",
  "key1": "26WENGDt4QTybCxaznsXATUsPBxtxafUiiegoGJyv91fgMe34z4kazQsGyyPgggFnRP5wBfBcxkpvPY72zfULJbm",
  "key2": "4gvqzu7vbuK4kmKXVPJTHBVBUuGmtAkb7pbBw78jjKPsT6VcV4ruvMwoE5jZrXP6XTb61iSTJDJLFe29UjR5wP4L",
  "key3": "61tYfuHaqr5YXQdrYudDPqwwdtt4QJXqxUM4uDLt5ytb5EJ2KjMoq8UBnH7uinTJMQspcQyjRJGeTkrFmqK6XC9G",
  "key4": "4cwxhXfPVYccR5efrJkMx5n4EpL6oukxeUcC2kvk6yXUDmVw6deJV1QyvBdqNPtt1zTyU4kxxCSRK636Aho5K6if",
  "key5": "sZJePpDEra9MhtfTrCDNEFH561Bfg6wVAPftDgXF7DjcHcPCy2qxJdkXumyE2qJR65ry5r6CyDZmbWseqH1bjRi",
  "key6": "5bG2y4MZFXhgJvpsEXhMqhsbhZXvBErdVSxKLvWwcvQ9dgjBC5E1hwWAyWxMkY5rBLp7zBitSFvibC73pBqLWhqM",
  "key7": "2c5GMg5Mna9qLz7yReM9iZGcUbC8wnKsdvX8hw59nrRMYftJ4upbzyBVpVfhSWxm7x8PzDF7nLYv61H9GwcU23cz",
  "key8": "5UVMqZe4K4GvMR9ng8giHWB9cvHgXwuhLtY6pnFDwEc6PcE7upuid7V45wJshRSQnDsacLib5jaJViPHFmLzcbao",
  "key9": "25ZLqEWt9itto78fxQkV4cqgEa8Fj3cBAVinvcEyXTAbsqfybDVd6DcWacpBJqKfxEfNikpsxqXiNaSCEa3SceQ6",
  "key10": "47xzwjgaz4u8F5hGYNLmjvpH4z5xEY65Sv4fy1MNGJ6TYmPqRX1MdjLB7FSGkjXh2XFawzLiDW4HLiRBo1XxSNWu",
  "key11": "3JJa6uBTzydWEANKqPmzY5n3T4fSHqgPgnqEWZS49G8QRAqgzYNqPeeBkp4HM2HqPPo8K6fibHicXbpMtkm3z7ku",
  "key12": "31fJU52PzkiKjJ1SKEibbYJM1gYsmeehRmz7rs5D5borA2GHur3niG9Kdghfb615hcMFNd6VobSH32YQVuwKiWZ6",
  "key13": "4uSfcE1KbFAAxaxkooo9wdm64nF6486foAsGQixyX5eHjAgrB7YHoiNtR8iP2GkSkXNvP3BBaohvXDFrhfuKErzi",
  "key14": "4mt3w5U9zDLKvbQkN8wLYVzugnoo8k96m6wPFuNG23mQf9AsyjZALcqfGTyhAz6PjVw1wbVyb7ggR4G71cUpa9Vk",
  "key15": "3keFbD6yXrLsuwmpeiprkzGi6XUrA5pZCJpT9TYWqBX7ure3apdCYjLZYT6sK8YN9teEvmoricuhuSGLd86pbhTe",
  "key16": "QCoN6G2xMYQDNK9aNL5yogZmdqshDAtdgqw1i7ijkMxr7QkFqXndgNeZ3fr2inMn3GJYXK7bu41vuGKdYPegS9a",
  "key17": "5DdkzyLgtBcp6fFXDGVKobwrXycsVgKBnJubz6MtJMtgrnVi8pbjPhz4hpCMBRXEUQiuCbZLMoSPVcR5kTXaaQSr",
  "key18": "2o29zKZFwwdrc1Vcrur5yKUSJXDz6DPqjw59XWgCk4UX8daEFEUKi1FVTt6YaUQb2abXbLgkEDtJv6fZ5wbxLuGe",
  "key19": "2zxYfxmpMzUEawuqKuT1ekHj8WHwaAHyHQ1HHsHeicPUjUqRCJM83pVsw5ujWr344GTnXSSwd4DRnxXFfqMx3AoF",
  "key20": "9HZhpuwNuWv1PAmTWvZpU9WaUiV9GL66w7b2aXzAKZa2BFTQidwWXKHZ1ZteAbydTN9CtCr8W7cdRLQBANFTFmH",
  "key21": "2aY7fFsqh5SQLMUot2zQRJUi99Z5JEZoDbskYRvey9nhSDXidusC2hHFAVAnBLksb3EVpu2XRnY7kCCMXNnSp8wX",
  "key22": "Whr81j3hqHRHWNYapsHj7h8jf4gC8Y7UsFG4h3RLtgrMDdY2s23Vv291aR7KnF6zFCeEKuewjy6sDH4MWp4MAM9",
  "key23": "CsjXBZNYNyJdR65B7sn4cjyvNPBiJAk3fLsVuAKUeVFFHR9u1pzmouTZTBKYk3VUXWABURQd1ykzruPVJqxNQmJ",
  "key24": "2T3ddMoAGzdFdXH9o9BZZTZNQKsiSwG2mRNxuDdjKmNZiAMPieFz2PypLxq1PTkGGkcUF8rtzB25De94p6FoeUpC",
  "key25": "3o2gFbr7v3Twes7zGQHXizfNGHL9Vd5hnj59CDLJW7azaCtZ3zidr9MPcLKJAarEuikvEHRQgSdmLXZQtSrxCZMu",
  "key26": "2khCrCG8EgFwZACboYJVY66XuDmxoGgfwA93zwAAKapUGj7LYW6XBzGWYcMTsqWaQp15krfB3hWHnQ43iMjsweLo",
  "key27": "vLq1zy6kwQaw1yo1BRm5Ue3Xp2CMRPeGXw7kTnYG8Rz6xou1NrdoCLVu1qL3nACRJd6RzmsEmwNGX1A24w6PU3S",
  "key28": "53EbWLao5WFsnjPQnFjt1KcAHPUFth66SWcSnXWhefYJJXJbodoR8bdY1u4TN8D2tTUVZMKQ4CxmTJA9j6TAvDPn",
  "key29": "5Yryr6MbtNMJCM69tgp1vgZ7Tu1cXXC2vvGJJtWVzFFnAwvyEggVdyg11PJ6XbLp8KW2p4nmsfYNcts9orfmWQWj",
  "key30": "5HEGpDedqegFwQoeNEVkamofHL1dCN3oLgwQFAugX7u6rsNAoFqgg1q96X1YBKgaWHWYGhyT7WSy8jin8atPQkbY",
  "key31": "3PEvVXNrxGYw3deeL5Cm8qnnoFhckQY3FR4dJCVM8ML3NEKs2tinYTKisodNU6iUjvHauFhoTczsrBodrGFHpTCv"
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
