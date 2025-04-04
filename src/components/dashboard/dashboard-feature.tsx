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
    "tRs7ENk2yQyEkY68cCS6k5HQmGF1SxjyYP4YG5xvsVzSdntjdgAVBPpSQgxr3m4idQPCFYLqJLT4NqH2AR9RQhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mps29Qfn7DVv5vJJm9hE4dCxhRWFBvZijmyhKihdJBjCr8xj5xVTPERTEhzLYE5u4AfKZZBxjm9tJMznFA9eXWz",
  "key1": "o3qEoB19n1J7q3jSUqbTcHPWcua7VZsbviu2dVL1LbcTCBPuHQUyWdusGsKr6L1i31wVpk2hRNM3Um1Ywea6uj3",
  "key2": "3GPzWDj2RpQBuKMHxEMdU9SgpLJpbAtwZrLRUggJi5HWGf5ZE31SG3WQx1NtL9dJAVgcgSvWn6vYSUFAcspp3MGW",
  "key3": "3Pv23GcLGtm4yvB1qMjjM82z2GNVPbpdE2Y9pBgYEjvq3TrKbn1y9cm3jc95Bixm4immG1MruRzGczmxYGWLo3ic",
  "key4": "3rd7Hm1xN455FHJUPZNx1s2zPhAwfZUi1jkDVUe7uAyjPWiFpCu1X6P9GTov6rVtnHR2Hdv6xy3UMBeEZ6kUHeV5",
  "key5": "46EM53D9N5gFKTQwZffv1tNeb27Xw9uom3H9fLMxMJbfhVQTiisw5dwhoW5xTspnxbCwDwXiSpvrTPQCyRQDmRZm",
  "key6": "4s58haer6Pt8aFtAUGKia2PjibaNayK3nzLmSHgvHZERDFiLsTT7bJUDkKxXu3DseCQ8F3S1iFA8HQ6Dq8t7qRri",
  "key7": "kSLFoSsvgefeeohaPCrpcAgPGVEHczrmvnmjRzC24KD5qE5XNmhHSAbyTw4FeUtXCc5TEnj9akxjwuucueWDesC",
  "key8": "4B79hfEsSqhujuiGa3r5z4MJX5LymPbRN4Fq8vqaLsnG2cMsecHVtfEFGEwzrFadHHpWSrVw8HvVBBVo1RMhxCJC",
  "key9": "5DLJXDpzaCuJAJZGK57KDBZHRBoAry5WdYB5S5tXf1oMxgY4jjyFcFf3PGR9wCkZNar2FqZHnGSwd7XZ7hND6Mgc",
  "key10": "erDUFvCKNijro8FXRJb6rosq2YbND8vFHhoSZgYmj2mn2B5i7TV6piuEdJKfTRLwtqiQKg4xoYc21xrXfqUu1ff",
  "key11": "5Xdbs8xzfsGgbqqcNWmmASE6Z4cqFmdZ6DXUZcLMCff9fyUw4JYE8ZZnFChxbaQKMLXcShxNtuiuiPegeAkJgb4Y",
  "key12": "3g5W7bpuHxizFkGENUeMXhoEqBdmg9xyUn4usXxiwCJRJBAf1ubpeimdsx4nbC8XXJbaMRzjRkf1447g9CqjmmG9",
  "key13": "4WfjvHzxRMCrMwYqNV1pvEGUwQGjNjjuC56K4kcGFfSnjna5vqLTzTx13LNfV1CgHSZdNQScUjW2wPozxHsGon83",
  "key14": "4oC5n3VKGmKjz8kjqbEnbaWNooSupNXTAeabvytFhQ6Kq7fWAGs5ScXWKzEnifzGBbiYmcsnYYLYM96brP6jpCRZ",
  "key15": "5JV52Jjjg2TUMGHuf8n1ecCearxz4JYJvSrBuYJfp85njmd5ssjkw1ZkuUcEMsVKD4w9e7Ho7jx9sB41CEmb7uAi",
  "key16": "2qpqwN2ENLRbjAnKqM2jigJU7URdHZseurTvhLA1WERENToAmXmhJijB9EoNyymYLmipiK6UX1JFN1nSCqWzGgnQ",
  "key17": "3xopsLCRaN3hA56ntReLoDJj2a6o7NESxCSSidrZDVoU1DKjLanSL4fDDbgNCUVEhv3z61smfTD5QFFq8phEwAys",
  "key18": "KihpXroXcrrVfqpetHoMx9UYQyB1B3DsyoYtvTpof2Rz9vsVw7jAA3AXxGZhcsL2Bp23UtoGuPFB8QxLRmJ44b2",
  "key19": "2PoWD4DTygTocnVAmffcU1eQQ2sjq1unRBB3DjLQcSEDTgm6SpJNcnibLdypwXWpMhmwr7upaexVcf8zcw4jo3B1",
  "key20": "59a6YebuoNzPNgudX7rQYh2VQPjhyTkaz7X5Qjmi2N2bNjVkebtr6aHXHWENYWsYH5QvLvFC9HrAG1DdkQozMXGv",
  "key21": "2UipoTkCuoq17X96gUgCCVecmMp6KCetDkgQ9oX7fMXx8ECdjWJsTmAaNhsaBkfK9NpxG4y72hZZEDmSZULbXdzS",
  "key22": "5uJgtU6ntb7oZDy6wcrTHc2Kagybk1CR3MYb8c6b6L3qrMkhHHRf5yz5HpQ5stnLCHStNWr9fXFTu3u2VE1nL6Lv",
  "key23": "4M6RCYShSJEddZPGJvEYTPDCQd4yuZ2XDuoETcF4agxwbwde9PTdASMjDNrKHCmbKCPvk2h1yAEUfrYsXfnrmLDG",
  "key24": "3qKuxwWjGNRbvHkyagFSABvFtffS514SvUUWYRxJBYgAmwBpeHAsHLkxvA5E4F8v9jSPgQPrYzRPd2J4pogp4UGN",
  "key25": "3kxDGX7VgEvVT7ogY9WeJq3Kh8VSVYjugwo2HBRNqoyYV1MrqKkRzCm4ZsrRRi5R3NooDQFM56kppdt8rt5U8NkG",
  "key26": "3ApcxtHUarQgDQNFKTH4btLKDDHhbswtjH4i93e2Fwyk8hiBAECat2KM8cEyNPbeeg8L65Bz88aoztjRkqZM5XEG",
  "key27": "4n554Vkv1P5hYZ7eY68p85AFJ1kneGhYRB3di742Nj6YXow4MVuwZLnScSFxCYy85yQg3zMXvdiPzYxF7eWiF1G9",
  "key28": "5eJ9irDkBE2UnyFKiCmMLDg3g3vNsei7FBoseixahnKV1rCeRzB2w69SVgacbyBCKSwTJ4B3A4FJzYXhm9StiM9m",
  "key29": "4T3eJRNPK76DZhiM7TuWdZYFPK7n2Wpesr4Ny3KwDsXmSJZvnx8EhDAhss8hDqmrA1Dx9EkR7umsKjWzwWuAhiTZ",
  "key30": "27tkZidFT632DPABpT2emzi6DdFHrNtqJsHBMMoKrZsgHV1BFRdS6my2aNbGSCy5SaGh4i3RP9F8axD8ne8QDr7C",
  "key31": "3cVesowHFvM8VNCXkiT4nX8oQ5xnDB8LSVfbv5oRb2rabY2jVMoEKqux9j6wzeVYZngCRqx7zzESJ98nbBoqcp3A",
  "key32": "3tqx7jWnBzrFeU3WGvmJqAY25UdnKVQDEnCuUQLbAJTzK5CbP2wugDW6iJVy9KsXFJa2wJyaeYSdaS2cKgBBzumr",
  "key33": "sirKfAy3RpysSCMvsH4ETegAVGFc5CX9Mj7JE1hvTG1b3uHPxgmnHPZMDr2hMbFtFN6TAu8eiKxbTba2ymxa3Ve",
  "key34": "4wu6pnsoeVRmgUvCayiUW31y1oVjLKHJXp5oRy3oCbDCydfnNCuxry9Aq9bWjDzZbGmcUfuH9C4w9nU85tsB9kSn",
  "key35": "MqCNavXy3MfR2PozNVVhHXgVjmZCWF3hDaEKDrX2DUi72DEqgyY4c5V8r1yUVBUxDqqtRzXZMUX7sfsdTeAPaHE",
  "key36": "5cCkdAcLsrqmFQYvF8idFVZr1nhhKCMxZn5t4GvvuZv2gAerPKhCUuuNYzc661nDdPzkGDxKaS9T53LqNfNWi8eB",
  "key37": "3Zpf7GYURoZZsZQJpZ98n9pTACUAotEETKcMEQUmu6rkGhtK5pQ18uXX43Bs15kxNGFtTASbvpR38wtXuWzGg2nE",
  "key38": "2LS46qYFyMZtuYvErj9A1Xn9kfGAhLJuJadcHdyh3wxnyjK2HAo6gqu5bnMnpkfybBwm2y9AxLTX7Kpn1ESK1EAo",
  "key39": "2rC5sn2bnM4abGZ2jnVzVfUiWfseUvPFCReLhuCCHLmDuaWS4HTqC1qhHC5U3pKj2fomc7YGbrH8d63Dwrs5oLfB",
  "key40": "xNWN9PKCGbM44m48JnFfWjtNPzSV8XCGBeEAHQRA99QWrqfR88rdLMg1ZoeqmtxemLpcWSbgPT7cW3rYWF6JQYU",
  "key41": "S8GpjjXDW8NpFscjUgwuSvbSrhwv4ZFVgitaQpheRySF21aUHPnoisQBmjKnZxmPCZDXbVH1Qx3VW4YBRApQWYe",
  "key42": "2KFKn88ZGtkQda6QeTvfJoaJVKXouEnz1SaS6NR7DJRtknBjEPvKYKNPkWfuko1FNDnH46UaxwhsG7da8HyhMXYQ",
  "key43": "529EpQx9kSzS1H8iBzkUp8KeLZh6TRq7RL8npW5RbMuFEuoij3GygGaim6MFuYYFRKJHUaLFGcJdDPqo5XJJcx4M",
  "key44": "5weW4npPswLXVVhSAcVgKBuDWAX7zrALofavxnvA7zATeN9PEzhQyFip1B2V3sPFDBFgM5KiYCZtzAzeZRNQhRHC"
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
