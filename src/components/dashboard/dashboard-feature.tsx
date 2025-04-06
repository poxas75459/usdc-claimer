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
    "58wVFY66zG35L7oWAr4j9kZmkdH6Vwz8Be2wc3wmaxjk8fsx2PccomQgordxnFZGVtuXcqC93DaCpe7m4P9mQ5oi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ff7JRLWkXH9xGdMHwSnGQwNTPVtBmtSZaM3juNBb6CaeuAXxfd9jJtg5SxqakcqT1EFNUCQRwjvjbsMMb87p8FJ",
  "key1": "29Ktjcf6eqpKZXP9Jjj3gGncn6goghiwtip5ujLmqSVfe79sqVrhbmY6FeJoBLbbAfCVKCNGU96SvSV5S3kBv5jh",
  "key2": "K7ueJtYM1Ev8cJFNMPvqnEmcLJauTrAuBzEJTjWK9F4uBLX9yF6zzDHGrQxCi1KkUTUHLyHBCGzpf5GiuoHk9N6",
  "key3": "2Cp8aZxcGtRZ3izKy1NpmMQ57EbmRRa344be9uJNYUqZXQmE52F7PAGAZuq7KAZG4iP56z2JM2kznc6nxXNhLVas",
  "key4": "YornbnbM9Yz1gMEEqKg7rFE1uRAxbCHVBRjweUDhaYamPmEnT8AARkdhPvSKjcyi82DuXy5h2wE1P43XpgsUZUm",
  "key5": "2P8czi2MuMS1Py7w515qzNkCabfWpeJMwPG7nr9kEv9FC4BtemzfeL2kkAMPxAHcZ64LwHqB1wzCgDQnkg6R4bbG",
  "key6": "5agbhhsPfoGNWtA9TtEBsp9yg5gN7XFv1XZ7AbvfJv8x64gJizYBPE3QgBPu3jSAZUBPmUms3fjyJKEB23AH1yUQ",
  "key7": "5dUaB8eFJHX2r1bZ8yGinTd4zJU2mLchmVTVbXmmSfRGuxf3Uvn9ko2DYKQEjaFXyDSsp6zETFRUbDo1HcLMwDMw",
  "key8": "u3PzmrAVmxKQybtf3KiCmtyRpxhXuDKYnzpZLfmowfgeYYcERkyP85budUGA9sn9XnwinNo3CofY5xcnjbn8tLA",
  "key9": "5cjR1uSdS5UCqDpgEAnBVSmSoc9QJnTZM3DThNJYZrodGTZUcXtyi351R4RJbadnqGdXpUnYTzvy7AExUjN9xPbk",
  "key10": "LqTa8g4Uk5FkFWY61U4Qoxtd5KrU6DsRkCWgwprvfvXwyEtHvgykNXnD2yy548TgxeNMpJGAc11kxeo1sysRcbR",
  "key11": "1XSUatwBFzLdZNGHuvBKge8QfvfA72fFo5HxKPskXTNo1WF9EXBPwWEWphm29wd7HHHacSmS6zsetZ4sc1CLUw1",
  "key12": "mrtrYLXwEBpVjBX5MoUtJwSGfvUSjGwsNjDgt99MBEgXEPKuyxYX18Nacasty9zE2bZhXsnfitj3CsQq2Tr6QsT",
  "key13": "3Gf3AaXVF2cCRpcvPAJMXsdhMvkHXRaS4uUhnB2KDLFAKYKYtyvVSYoq2acczCG6HZeiu6fzpA5d3qTRNRyH1mTy",
  "key14": "4NM2yHqzjk29bbzxHQiNaBMW8GWLTQxhWsecNfm5gcY6LQWm3ECSxSHjARrYur3BQySZoAxG8xPU7GhF7qTywVTn",
  "key15": "bNCqMjS6nDUTCo4W3APPueYRU69YheC9Eiyn5837ToJ6DXChL283PFfqanGhywNUnUauzMThoAN2vWWvnun9N3K",
  "key16": "2HpfSJ9yqkBxzvH697VeA5Auh3R83z38HfzLNqQh2LUZ2h8ZBMqPcUF46ZRKZ6ietjA8zXrCR6kMVpUL5MCW55Jt",
  "key17": "5uaXYa6e5zLfDWyceqQwkmRvyPuA3XdNBNZUcd3Lj6k7BHZUGfh5H1dGPaiVn45xTcNdXsNFn1nyspSi7bDmFk8q",
  "key18": "any68EHBQfncExVFokXWQrxXk2TPe6WbSASBEusX7f1FBbvhHMEfKCk2vCvjeBBCzicgZAGEKhs5zQaHcdGbJau",
  "key19": "4S8XKHpNzaEJa7bBDXSWhZ91UEybA5osxjogbAqdYCHrJucS3mWtVUV7kbGuoQUZ8Rc5NwAgcwAjWfyj1tKxsJZq",
  "key20": "25xvpQnhJdKX13E5ijZQg34gy47DL8rDaD2dn9NK6CgbBtcSXuTm6hrgxuCmfGXwKQEu399SUeGYu5T4n4ZtRmD9",
  "key21": "4hXsUAQs9sZseDWDVYXBdXpw3Kqm38Z2dSJaKUdK5J3ybKex9TPzS2MdLgZKXN5XdiLvJHLfE5mSa1rfQBMnhyMw",
  "key22": "4ZfuovJSagQ9WpuS6WiK12TUbMtVGRWTPpJE22Jd7vzuRXfsKr29kT3mBUocmWNGw47qaZs4y8cfVN4joQVn2Hia",
  "key23": "2oyXh2ch8MsHr5NK58J8tSnyz6SCHxZ6ggEGespDru4shvkptbSvhhdjtAo9yGKp8RMnADQLqh8GoP63S3fYJAAd",
  "key24": "7yiwJmpFbYUF1r2PS6oQUiHPSy55MmXZzucG5UUATcEFHPpM79UHPFUb6gBJAzs7P8wHnmwZKXWorZQVMqVJkY2",
  "key25": "2REQg1cjgWq3ZEShgEwR3D5rx89RTwKD2p8kN8f5qMQ3xfiTDHvdKexUBVaYjwcnqiStSz9FEBnMKc1Wx8jBFDmA",
  "key26": "3Wh1oP2mCSkhbH77rFG8dFTixCdkb1NHn2AFGc64Zz6Eo1FCRf1iyv2A1RgN9hvEpaLNM7uSTjincMmLdD4H5WG5",
  "key27": "5oCFKFBzz6KFEYtE3nwx6sdYtc9Fgai6gBSR3QeqyxxYHAS7xwSwyQpSULXU4vWzg7oCwjPCS7sdLox4CNBQbxPF",
  "key28": "3yxDtW2CFoihvS2YJZHy7q7SNioUKAB4hvnCAcn8eFeUMNdXPZwj7qnfDbmCKvbjn4unWfa79WdTct4AKmBiwJLz",
  "key29": "5fMgqegoCsSN8LNSZ5uUTcgUH8WoqNEszAhwXL3w4sVEMnzpxMZsm1DQwVd8oa6GFGMvoaEdwha6ym8iZrfRwdLc",
  "key30": "ZXqrSGaBfz1pgnX7phQ7y567zJ3YYYJYEt9Hnc7Lw2HgZgYpzdt6aVyEPLeg41HSBptoiGsjMByhMPQnwqXs6vK",
  "key31": "641FqvQmMYJyUyJp5V2u86WX66cNH6TWeqZJJLiNZsrgUAZjahy7wy3bEit5mohCypbYFKPYmKLZMbF1DLbZ9TPL",
  "key32": "3iB6aDpbdkGxSkAjGNKVXzLrKsSjE8m4u4sMYQPunJ8nxy1ZWMJEC4pPhrSfiTXEW6b7Qj6X9Hgn33LiDXCviC32",
  "key33": "2BiAkuyX7UNpkB6EDWwr4dTmVGGnNp8DPH91NBH2B5LHETdfcK4en2JDbh4gwYV8kExQ8ByQBxDw5XqvDuC583Jj",
  "key34": "gvwUgD9LeA6CHGdTDUDovcMkFS5xx7WtvKkkRcbiCHXE3vFhQNeM4gQSrALreWcrcbtjkmUfhYDhSGPybyoS5r9",
  "key35": "5fFPgYwqDpHfF1e4irDfbXZ2tvqPVhfFe49CiBe1dzMUs7NZFN5YLJJA2peNZLZug2TJTXdWiyvKkmTgzNxqoyMw",
  "key36": "5DjfP7JCBngAAmHWuhy5u1ET2bb1esFBk76j5dKxgdTW8AjkQvGSbRqp6LKNHj6M4xuQzwECG9HCgzyPkiANaRR",
  "key37": "2Dus8J11zMNsPdmyk2DkKKfhxKteXyC9pbFYQ3sSRKANwRepz6nqzJCs8efx62iMSApi5ornzQRvW6f4uUUtuLR8",
  "key38": "3SVTC6FuoawZcouEMPDrjoXAwLSsmvXk3j97zNzBfMTo6gCHsR12yPcbCmmGDxBMdTxebe2nAQ72UgbuqNKmMch1",
  "key39": "3iYxcED5AiXCAWNcRefeo9GTNvRqqjTxmLZqa45eiSmyV6evsDdKSzMCKxjVkxUrtFxGbjoiHdwq39nK9H8gP1CA",
  "key40": "4k4mrfxeZmgeXkrZv7PomECdg1D79H1M9m2gAaTEVfvLuScSe6aL7wEHCsv4dnfSc4WLMYpv3jveeBprKYx5efJx",
  "key41": "5c8ZkE4mkF3dqxyz8hBroKJQq8EPshHA3ERcqwySFk6iXC9oDdrQkLPP7X1eQeAmNwih11mEhK7NMAGocz7tu1nD"
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
