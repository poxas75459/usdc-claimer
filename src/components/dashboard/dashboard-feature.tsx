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
    "3ghYYfECrqSfbo8zDYkor5BshU2TmhaatYQ9wJaXk3Qojujfo6Z3PEhDNQ9GEbDUCEESaJNT1rJAxJ6qa76Hz77t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BvmH8wut2U6magbZJxDRHgi7BT7iH17Rm36jmFhFBMPXB9XXjBrHhYtmH6yGZy9y8JJWZkBzTUE6TbmverP3aoJ",
  "key1": "5hxzx1Q8EXD6aNRojNw6zPJKUhSWL1FjrkkoA6SkWeUnUhrFzn7g8vjcGdgDLy8u2Cbs7TohchvVfBsynU9GnyMx",
  "key2": "5jM3JZ9szjpJJkV8m9Ni7jM55XoSVgX8HJy2WUo1eehpx6osGzEboqRVVowH6ePF9x3tkVWvBjPxmGf7qoApfo7",
  "key3": "4puxkiQTg8cSEN81HB41NSQPtCN4LAAFD3eEpdz1zgZrRcmJFC5C1ai7b8EQAHvbwxtewahu8iMDrzoabgtUe26R",
  "key4": "28c2yQnD79Ti4NjZEaH3ChYUEB1KgKcfwCnZd9r6D6GtvjYtVTAny7n6BsYpKeUv3qNDeKk5BhvY9fyaEhP2uwvN",
  "key5": "63pKDDogV5jRDmtb4bEfxW6iNPEvn8tJC64im2id6evVXwcSFRJLkukXgkXSVJCQ9mUeCXBVyHg1PtAYuSqkZkBd",
  "key6": "2N7KXyiAJZda3Yank7M1BfpLchV8KJ1QjNjfEFoCRjWy7zWLA7xHMWoBiFD6U8g7YABRoAkrjJMPe7sTwc7hHHin",
  "key7": "32gb3QhVHFXYyRWTtMTpfzyezdogEMoUbNqXW5Rw6DRoVhMVPYy9EZwNZu5pDH5sH1VhcgFoVDL5CKhE61jQwdhD",
  "key8": "5QWqFk2A4227k9oxwXV3kV2PtDBaAJni57w68WjMUDmDqx4BF5khDUdUUe5CBz4Epw4QuZsueP9Y6RUXKoEt7zaV",
  "key9": "62EY9oTih4RfzqT73vKwzxeUDFsffdhYd2TLRapBSZhiPL5qQWLDRXTK95vBR9HMQ7JpVPcPsvNEvPe1r3GFeyEj",
  "key10": "5j7wyodNTySXxEzv1PBKY5pkQPi36qiboz8XsjUPTodsnTQ3fSKDcsx3uHbJ5f2dTxxp92YggBDkXGCCdaoXvs87",
  "key11": "3mVVHNBMQmMmvJ8sHEC9gy4iaF6Lf43NZMcEevUiNNquWyPiK1nj7pSUdbk2QPX2bGhCMYWQVuuCSLoZw8YGtT6S",
  "key12": "5EEAVcCM4cbMPKuX9koqEtkTUJw65YXuQEmved7W9Y7fJD69TDUsuapKZ9qCppNaQ2MXzsysYwkD22chozQvGoD5",
  "key13": "38hTWyUjUE1Dx9gYrqcL46g4W5YvxT1TW6HqjnxGa5kyTLTmbbEPxwk4iVz7MzBWED7FjQ9ZZM4kJx6q7mK75apP",
  "key14": "5uUUooxpqEvzf9P9obtHLULiWp3LiUeBTBzigGmVYtZjYp9McTQiT9XLAnicH5HsDQpBaqmyxN2Fe9grvqeoEouU",
  "key15": "Ro31XURFjDKGjfgy5Ym9L6pxDYDehqGUm2iSJUPxDpQtGZRS3z5y9P22Vhnc9e5wzqqSqd6MLhL1TaQoinNQUXc",
  "key16": "5iEvnLH3aXGzELAn1E8JdRSSPfMn7zk4rkvycXmdJTGxqaC78yD7NWEkkFfCDJeov2jbYifuNCRPv2nvZEMtKYQv",
  "key17": "5Q6yTWvmKd3XfGdvpkGUk88VmiRJckTCLdfKBWLtcyBqqQ5hMUiCj7nRDp5F8YMNfUFYgrd8z5bctYxeLkk2n7b5",
  "key18": "5sQZeBBtQuPCZsk7zFLbsWKFapFcxVvU5Hn1rcXbnMedPBTq2ShD7PSQG7ztbG3rMfCFNV2iKnvjmNdn8UVfBhGB",
  "key19": "2QGHM6u29jaKtahdDjvYGWQnaUtfpD3xeoLan6daVdTRJCmmjd2ZHjxVpvWxQwccSyCESJeqGWBMyRUGBr9Gn6Nx",
  "key20": "3Rms7ucwLFuosKFnbNWkE2jzFfggDP5ev8B4zVCsv32aAPkn4pmvvNWwSi29GubCy7QmhuBMtEgBzdKiUC83EVop",
  "key21": "3roEJneWMoDcgz2pTSTRp667FwCDMVJcd3VLQoMQzicGMDDgwADs9a7X1i7tqqBpdajzHS6Gw8UnFbDhabr4Qjap",
  "key22": "3DYGAdMpsAfnzNu9QtN84nrFU5SxHbWiudYnuvsB22seRwRPmyeudN2i9nK4U2xiB7npKXCGsuZMQyDyhwcV8iBu",
  "key23": "4SrFgcH4nuAnVGGQtzBdbEj4M5vS3Z5WyY9VLAh1Q6jiMBxbEb4uUqF7ymmwwXrdDS6rmyZ8wByKBWX4uXjpx1X9",
  "key24": "6Pn5Pp7DHVUzdqR3qjCBNMWJSGBFJ2D13XKaxsro4mFJ4pYznmabU7jmo626zuVDLBk3MrAJzFepwiUhRE4pTxw",
  "key25": "hgmAN9WRm5N2Niy28YSPA4fwHMKczFDcJJdcToX9JUniU7Yk5R41QY3p4fww8qeWpp2cft4oFHMGer7rxv9PQi4",
  "key26": "2AtGJz545Qfkkp8VfadcCJzapG8jjpT6xcUAD13jDBwQZt9qSgez2SZNg2zD45TtkYk6vvSrhjEGiFGEKJWJDxt2",
  "key27": "4sfVEavR2MRKmKKdXD1qUu76cnfzkBrwoYxLpTz9MbvoMWdho8uLvApN4cSksgobHiyJ4gQrWNEsPVi8p7ERZ2aD",
  "key28": "2EcLpKHvQpQxfZxS1woM4rAxJkokypcvYdd6JCnQsavupGyjfRaXe88BJN982zkD6s9JZcsYGoMQ3rtXmTNqXz7o",
  "key29": "25UKSRtE1wDXNwmEyz1SfT3QBDtf3gRYeA1eXFDnP1xzTJvzDEQur644y1yw5BN5suGe3V2bFs32Gf4riyXvLnPg"
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
