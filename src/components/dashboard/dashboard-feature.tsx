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
    "4SXMkYs8wT5bvbFivPfkHrcYL6okgrXycjaK6LjziWfNyD8DD1fusRjDgbfsvtCCjehmhbs2BBp3BErH1zzKLYcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qcP8QLXPz6kqbmKk7oq7RvPdJtyPkh1KB8yztxuCqQHGMs4KqKCirPFde5D9Mf3Dq2L2ZTvivcpvoJ8CeEbnU9T",
  "key1": "xtbxcP9qdRf3MGdxeQZ9PWwj6v82ehj9mNw9iT4TfS7qqYxmMw5EDhsQpriDmvkhQSjBrG1yrVyPtTuXCEAqBSg",
  "key2": "5pFrhukSm2PuHGbbZB3PbwcofJZccbKw34cALhiK5NbcC6fytQUNV9J3XiJ3ms4qSkedNnrnLhFTLAreM588rEoZ",
  "key3": "4oLnuD5FQKPAJNKPVAEgFYM6dGVfkENVEyipnJFgStK8xNQtjYCn7dRdExHbrt87JMUiraNBipUfpwrL3rQfk6zk",
  "key4": "364ftjZwmbWdxU3DFKw57Nt5ZphKix85DZZDgT2zQ2q8hzmLbxikzBkaQyCSvKY7jkCyxVS7jiLueqZByNWg9PLU",
  "key5": "2BeqAEvZaxe6hjJz21bcbmBVhgW5RSFpxdVCLQcT5NGBxJtXL3CyNheTSgCBRfTsw8kkVRqXuKKDDwn9VmRYcDEj",
  "key6": "4EQHYywQYWcujxgYpA6gTuDhFPZMgkePmvmxLphiTPAVqxquDnKvUBsLmyyT5wowrPLQwyXwBcNAYsG2Ucay6bVM",
  "key7": "4bAzoBa6ZEUs8fiaVGZpVKzWViYBk6Vq9vQgGC75RQGLPghJHcPbFMoH8CMh2yhWgPbZAVbpsJfRMdYtG6N8Ee3v",
  "key8": "3KbKgAcAjEgBt4EHb5uAKwqdawmiGpoAukM6bTnpsVHnxpMNYaYShw7rZNMq4PomY3cwyHTBUwMsaCmQE23HQct6",
  "key9": "31edKe7XAzMPMT6AWAvRjAnzwGEUCBvXtdtUxFK3oZ8homMb55L2b7SX3HZxnRU9CTzQPRf6vSHqqwcXPrSrhhXD",
  "key10": "4ptm6ps4V6qAyMS8L5HmhG22Xr8PEftzXaPnyfduiLB1jybpPmQgHi1vss7UnBq7bQdSrLTYjnQtqhfQuQfuPeew",
  "key11": "58Gtg5uDot3VzypMAsxx6DyuEXMgKL8oCyPk7rUrMu8nf8tamqj4VdZhAGXfWCKhBqvWxsotkHom3PCJKyfG6oF3",
  "key12": "KfwseVfNaY6SceXrkexBAEnpG8UKDivYDaqCktWL92UFKqvmHQKzZpptWd7UbpzYfKvV7ft8i3ZCmmC48BhTdzi",
  "key13": "3F9MCZ3NKX5aSNL8zxHJVRoQkrw1ASTv5pCqBNnfyrHCtjC6u1nyPU3jDVwzRPAp5kZMegmV1pQfZKgTUum4vWp3",
  "key14": "3qzhuGCZTmSzayAbsK7RJhZA2WHeJnatetQNbPHkay8ZMGmToxheXH67sRiREyqwFAxbwExLEK1P1mwBcJMW5UgW",
  "key15": "4DaGMbcmWhrX6rUMVRq81khq1Ed3dq7oshXBUgojYf1LSmHGbfMMDqUoD5CTuKmBLdy7EfagHwBtRetkhJv7pgXA",
  "key16": "3ptZ7tfaPpzZY6FnQfb73n1Lsu8VRXGM4SjkEdJc6Prjj1F4VtFnteGN8nAZiJLNWW54WHfdqT1j3kb2d6iA8tPs",
  "key17": "45foBSRiDUmYPHGT5hztqNYMZSdxB1p6o8DwvPKDBocy6pbGao7rsv47KeQCpbP3tdM2B76hC5ga6nx4TrqpEWgN",
  "key18": "5pQKbwHpfJ2gg6jscQZTgwGmdEtH3mU4NM41vTFEScdvJ8HhsHZsc2TGzfe6p966DPWed57QreFTYLh7badre89M",
  "key19": "5HWZuaTomi7wPYLTu6LmRp4jzT5mueUVM5PZxpzBxxxEBuhHNoBsewB6eoaMrdMMk6RTb5kGN4C9rDmuYjdDnaeF",
  "key20": "51odsKWfeyvCc5yqGGy4nbg1izs9Y6nqMSS3916WdSBR7f52s2DwnTtwk6hxjbLGPQpSd6VjgoHptCeNqrp68mka",
  "key21": "3hJF8xy8cn9XMzNM8rsq1keKMqhiSi88nv7SfVde6V1m3LQRT6aZZHDXPS8n2EHNNFnUJiAHcGjDQLRDxRrATzLT",
  "key22": "2R6Xc8C6odB3p4UNfLRpsmBfxvGcxeArfQERAwzijefQZwPUxuUTnPMiupeEAdwpApNdSVK9MVBHTrwf55yE23mQ",
  "key23": "3WvqGJtxtqpGm72N1NWrBr3ihpw1gq39cHeUk5eVhPEd93gqQuXchXdD1arzE4eKTHFZJm4XpsjYRBWVXUmbwMNp",
  "key24": "3FuqzEkAFiFDmkEc1XTgXRPUZy9bZVBbxb1ZenpxHyGF3vmvghfumjCn5j78cZ3kRCM4LjdnjuPvBmqL5GAWoUf8",
  "key25": "Pp8Qm4nKQGBcxQ77cjytUsHofGHoHvcuTYTC4gawyrhVgHGLLwZRycSvcW94DwvLSD7e4KSB18houS8UoThBA4E",
  "key26": "SdHH9B2S3yF7DNWHqXBHVoHjGtJiLNsF4sVF3Gzv2amgUGqDK71nCuPS2Pdv4qBZqaxXFiZao79pbUTuerPDWjS",
  "key27": "537phGPA3EU7KEQmSKLMRnKw4yJjjp1Z2Y3a9xgjEmKqgD9TdtSZcWHePQTEH7T6KNzPZcWG55aVd9scUsQ3dw1y",
  "key28": "5JUsxBoiUMyy3k68MLRgcQW51S5q4cgdyb6b3WvJKwKexrxZc5MjiNVzStLuGhd7ZPaA28w7XG8XoTZvadJp4Vcm",
  "key29": "3n6dCFrRzoakghY43zUu1bCU8B4cni2Cph1aqvU8frNYJsqVZ6w6xoPntdTx7R4Le36ftgLfg5LSkAgQNRHwo312",
  "key30": "3UtYKBXcLkcEnuCPkT6ZpVthkQCo6S4uqSQVQXacCAfPuCweAZD9ws8u2Hp42mnTxauHeiMftH3o2a1TtHnrfWDA",
  "key31": "5UVF1stJA3TYYy1Vc8diZmWKf1ExesKBRYAtEqsurkSpDxhecAARsRsCD8g6MGR5GZ753UV4opmpJawNnREhydYh",
  "key32": "qsgYHde2J4P8Wpx3YP9sh41YgMkiBG6imUanKNJw6LmnCb7HdL4djVzjctZcAgPqrQ4fHHEzGbR4dmWZBMmTVKN"
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
