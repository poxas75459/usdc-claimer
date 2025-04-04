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
    "zJS1TbWVQU7X67e52UD4dRDYcLWR3LY61WUsPsRRwNYAgh6FbyQnVMpHXTZi8yvs7pE2mZQZxTfFcrLpNsYSTPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xerzcHcRt94Zb4trWW1bFk2o1GmkUDJPhsLKwrN3xB714QqqDEaaoxhgX1qZLFzQVGRV1USWEA7WYiVFAgrRXiW",
  "key1": "2JSG4V6szi8jTANtinpxe63imea4cAwr6bwGQy1vx1ZGRhJDMSjX7vkD35bREpx2nXb5E2pvKmU2A32Wum9gjDmP",
  "key2": "53FsBDtjRQ4zjjcgYmmCN3FH42t9mXTMNrkkHTVLVFRt6U1LEiK5ZMx1W55LZoCRyofQLtB1NKM2BaxDZVZL4vrF",
  "key3": "4yjFqtSQucsiQN7X2xVFsph1YQ3nC218gwQSg6jjWVhiU3Jxdvxx3XiTczxW8nz4unNSJu1vyKRcykKwDaqsFNPp",
  "key4": "mQTDNzQHXXypkpo5MTEXJzFB1gDvrJxQDuN5ccs8aFBH6QFnyTFY1pknEBY6bBfY4i1KetzmExk3actT4YtZt7h",
  "key5": "5UUocW4qDshJYXxtCxMMNf6ShPY47gyYHHPzEFtc6vpZxBgZgwihcgBJfxy5axyEvcZxiULGa1KibLVbwmDpwBg3",
  "key6": "2Sjrkwk4dCM6HgkdzaeuSaAGqaeXMPz3g3B4Zs8DgzhTr6miZVh57q3AQ4PKQrYN9s8sZWoHVrzZmjRgzE8xhTxv",
  "key7": "2MedZAFM8CMkauD5Dc8FfAbTStemmNweTFUm4uK6Qs1SWoSo6j8itVcbQJ6jnsEgAvSjNznqd5iYQdJgnC48uUXu",
  "key8": "67jkg9PUP27Ljwo19KKyiptdnKKrKF9VL69ipAqaekxziZMZgpbFF8HM6Bxmjt6HidZUr2hVr1mMSrMsLmP6t7LS",
  "key9": "5pj5eas3ndKjkpD8rqHiSA3AL8emetT1CnjwVcFvG5LQ4jPkzqPWtUmT2Shhgzyufzt8idi34RosqgKqmaa3eQWo",
  "key10": "53csdM36MSUyvcntL175fQThZMRmCjtSJJxxDoDJGoi6SkBT15uA2M8aN6oqycvRrs6n9kxEW7V2it8AcLBMoq45",
  "key11": "4fDejD9zHNpHoEU78ajgUBaSzM8KBvjxKERYiHiWTczAtXmc5LvFUnrHC1MMmXxenaR4txQJSqgqW5oakswZPEgs",
  "key12": "4W4Q3ZuWvqxJX8i8tB3T33J9nrPW5sKN9FxHo1iz4J27qiaMTgToPTAo6kydd5B7gRw5HPqJSmBVo54J3mjd8HcK",
  "key13": "AJBmrPcsptrfhStoJdvwkQt4rDArfyiXxgzyrrTHtqnYxJ7Vcj28b9fDTWY6uQ3zM9qedQKH3582MVu2CnUycts",
  "key14": "3FgTuHzTDxcqHxGUSmkHSvssRrVa54BEodpKYNqwsvmjUXVTWjsTi3SU22JmwJouU2HJM9YW4wuLmBVF6D2GR9Wi",
  "key15": "63AyP2APo5T9BUR4UE2aj8Suj6QfmRPUWA4cUWH43hmZHqFchhvSvb63khNE1RyukPYKnu3om9AQ6rk9xg5zBVmA",
  "key16": "3N5PF5KFSrTS9JMm78b1J2duXwxTwgHo3iUsaSQw6QMxM4cgwBiM4c9BvyPEod3Y7ubpCzwj7rdCu8HFbd9KqeBy",
  "key17": "2oPiR6K1YBacrXof4cQkcbze5M7RorokAkw9Fnb8g2RYZGcfBSzMNz1L5HX4k6crbaUxWFqp58guCk7N66So8pu8",
  "key18": "4GRy9ZKziL412kcDFseeYpVdpnV1NmQwi7LSQZyZ9NfDAyg2RfFBRevYE4odN4qhubg9L6YMg68MCSexA5dbnbxP",
  "key19": "5dhgnYWSER1YJUzA3hwFoWSUCs21sPmmzDqNkqpLrYucGxobq39ioW5vPJXmGk9ovQ8Eqgv5QJ1BpXmMPXv257eo",
  "key20": "T3zdM5Ug1rDsrpAoFFSysTG9FyHsZNWr79cxSVxrgyYZVcBB8s8SdqjRPcYCCrhp6DZ3nhAXUrH7gdJwg4WP9gn",
  "key21": "3wCfY8WTzDDdjoSGnhXDJiP4qHZE9GN73sSskfBUkAi9ZPKs58PmFMizmT2oK2zX7QNVaxP4VqmfwHjPDBXn5EzL",
  "key22": "4gpZ51u4hMeysjvzbWNWNghTk4M4qYAdPji56hVmFH6UykRwPJjiaG3CMZCXPkwzFp1eWgBfeeKqSDzRKnpE6oTF",
  "key23": "4HP22sFPPEuXhVZcjzYmoHjGxwocFkxqe7Vq3V7FD5zFM32Zhh2NeeTh55erY33XAidH8isTboZ75DuDFwmGJWcu",
  "key24": "669s144AwRztkQv6NrQUcwzS3VCHj6EGYFgUVUWx573MfCeeqR32DjJp2gw6oRtTApowUFodt4dGBMotWDTLG6nR",
  "key25": "5QDuvaiqAc4hzP5dosFpaV9W4MbpMtWQpRLMus98i4MwmGELxhXzZXTFw4KZ1gnBB34mxiKeiQwDqFjZ4xLMmFp8",
  "key26": "23Ud6QnarworqUyropM9JMpMFqePvpePQyDUZAdKPvNYapTBwNBF7XtaQcW7pEKc69LQKLVpoDP9jYXFXJaW2VaX",
  "key27": "2QxyphiyTc2xS7MTZUeJF9SXE1mMnXuSEgj3jPWVRWUygCFTZvBErWjPo3zAuNmiimyx5rupTvjz7BQkexBcfDJU",
  "key28": "26D3DyWBSX1uvtBeJ36yMBm5KTQf4HuYRWeMg4kk5Y9f8k86Me83yoYFW2SPsZuwpYDKXyyLJrma9kFFoBvkSoKk",
  "key29": "4RfXfMbtAnBxkg31v3dYNdejBqMaUuBTReSRzrGyZhyGRbD8SPBgBVPhRw3297bn7srt77pBEQUKt1dvSJxK1njv",
  "key30": "EyD6xpxkjqUQCHVkQqtcYkHAuk2MHN4VR3A7T1bHFke1QKDTzaQdMEBNELaUEfTVRqPccSL5MJ5SbEW22cQcPed",
  "key31": "4FX5rYYusZ9uVpLZBJp4mv7BuU2L42kjcvjbXTHiv4vyVnErwLCKhBAh5GMadw8Qmu9AjQFdGDvjGUvVPB6cWyR2",
  "key32": "2brm7ehctmy2FhmTtCDsvDiqmLxfQetF7TmZsUySPyivYo2YVhiUoTtx3uf9zQJKZDm8NnfnXteaLEg5Wmxe8RKN",
  "key33": "cQ2J51jy6jx7g71MJDaTab6Qp9sJRoHpyHY9sFkQW8UCVFAeGRxmLYh9Zpk6rTY51RfnetSx9HjsYB1noLw1Dpn",
  "key34": "3u8B4soMm62TqhQTHz3twWLa8XTh48QgMwcb89nT5Gi5kuWeaZtTuPReYCb8RhkCkASRMGnxuSkm4HXCve7dpbhf",
  "key35": "hZgtR8UbowYApqvUui64nmLwdckJcEMtXFwGcobTJgKxuw6uaXXXGhz2uBvYuNipGB7bah22Xp9jJxo28yRovFa",
  "key36": "28yr5QAmbo6NyyPXj5N8mAk52fa3AS9WkcDyNvxbRK9b8VgMmcLFhqcnDbihqt9vKE2eFQanwdJsL96tvURYaZiB"
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
