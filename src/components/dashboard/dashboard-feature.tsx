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
    "4SPVtJkm9KkYdjub1E593FrRLb8Ub7xfg7ZgZUwYtjaoLz5vnJXpDEt561MDun6qDS9hZTx8jY5urr3b5LweYxvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKVN8U3fi8TgEAfC14y7EEs8u6yUdKNaqHdW4asnoTCMx3uMcpEFv8ZRzUyaAnVBKJpagwfGhYdqqGFbjBBk6RC",
  "key1": "3B8K7KL4W9ip6tnx9dirQ6PSCKMUS7sLHg9MY5G8jztnQAfZS7SFiTu6hTm99BxEYJ2B3NzfkxSv9j9xuG9dZxdn",
  "key2": "M9PgRiX62XebWuzBdNq3vfRwQvULxD86NnyrWrxpYMG9QDAxML9e83oZXAtiABGb3aJLuRM2JTwrFWs8xnj6Jsp",
  "key3": "3unw7ZK2FZYJEfQkmz9He9KRmcsxzZADENSsvUYLZ1566nvu8AdqHVdSwGBztdth8dUm3MbCFEamrCxEhmSHRyAW",
  "key4": "3jbAe67z4gBeLQjQcPuiz2kApSecSugmkggP8GKsYEDDagBR2wPZUppQT1kEtWMzg7sFHWj8KSnXfB3PmCFVq8eL",
  "key5": "7aww5ihMdEz2ygogBGzKUFE1M7DXvE6UsaPeBsCJ4j7U45f2vDLZzDtUKa6cySbMPeUp3u1djY4xGG5GShT2K6F",
  "key6": "2ATEWxLzJEoxbknHMg73rVcxxQJ17SzhxxPdjadSYfgxUzdTdTbRC6VSSH17FCHGkCdVcA2CSpwcqU4uGmiWkPna",
  "key7": "4aKniMWGbZCdvK48cmSYd8M2hjP1qHQXxr9wRAveh3awFxUxZTtr8AG6HyTn9VtL7jyvo2fop9v5JyJbReELeeHx",
  "key8": "3hyBci69mFfGVJT42VjCLK7YYYh7RvSuo4FNP4VK7KM1p2iqzuVKH1ydQ3u1W4cZjoDVGsCK6shJTRC97iysnj3n",
  "key9": "9Z8Y2XX39igVgtL7MV4SfJsrrXAYN4EKpDFoMx9Qvi5UJULuSWjMPs4EGhLdmf8azbi6SxdetLqnDrwwv3KVgdw",
  "key10": "5cMkAXJGm8sd5HhZq7nFuasjRvDcqjTBSXDUszPa5j4LZPqkcFgT2JgM4sFq414YNEkrtD8TgfPBAj8EGzqVXJzo",
  "key11": "NUr9jhDNMsyVcV1HtwLPwnUhAHWC2LBk15zVATKWesBwaVzAd1NxcHrwkjWHTa9nxi135cFq2r9oX6VnZNNJtky",
  "key12": "2YiYZYgGcy3Zds2igb3HbLcCg218GwPDXuUYyzuJMAG9ZDvfpge9uQY16YMDXoHDzn6tYTjLsEhA6xMGGAwiUUG9",
  "key13": "5AJumucM5fwWLjrsu1pwy3UVM8pdrjFn5xfxjyAjLRQCRKwrHcdHb5vdLzCBN1FSm6jkTJ13Ty4YeBPQnjfwzpX",
  "key14": "5Yy7sWGRbhcDGPV8mKZa3dBScuJuoUtmSJaJ6prqBbbu96r9AWPuMw6xDyV3Eb5x4NbCSpya6wqtUpH9vFT7YJf1",
  "key15": "3i6qP27tZjf6PSG2BWw9cRPW1G685gRXa2iLnWqNGrrGd1pu679bKnDQtQJ2abJRHCdd6mUL8xWUNJb5soDUVFtS",
  "key16": "4P8TGjNWPPiunFtid9s1TxVwyQByBFTqoeGLfSxwr1ncabQnmp273rQn6pEzsAMJNUCyaQZyY87EaQRxQcZEG7fT",
  "key17": "3jtmYYS3MYMANZQEgStXsj6vKzmrzgRyKLsxWbxKu4iSQwZHNj51KhcWCSk83cLSEBwoghJtKG9avzP9vJ5jkZDH",
  "key18": "wKGMRo65T69Rn2t2JzqbRo7f3zp9gtuL4Jc5ULi2z39NsEXnyYUC7qBCWF6gSxeGsap8VocdFSGTDvYjp9brCyA",
  "key19": "4Rt9mkDKoXKCZF8Brp1EKj89PtGuU1pwVvM6AVrVUfLaskdfuFYjaPdY4doULD4xzumYYB71qrGDeiYbeU1hcFnv",
  "key20": "uKN4jDhSK84b1yvj3NeTFmZcQ7jShkRGAJ6Nh7bXud38v4vSRqf3Ds3yAjgzijNLqB6tUTecB8dUpcNfosPbTts",
  "key21": "3EvZSTGNSVsodqbTfoftZsyQ1RSbdBHkri6uXpncqpYTFguwLb3TM7ZXsPji32mqM5oz1nBgTUN6XsCq7ANomxsH",
  "key22": "MWPraeAFGkTb8uhcmRaZcozc9uDCBPtwLp6iSdzJketU9vzGu3DiXKNEJFTkMwh8VBmYCGzGZZhoJn1axKfECfy",
  "key23": "3wgU3cpqHJEB5nS6DkU28BbiNMZaDTLzzDQMpb4z6aDycgbbCznf6DZhT5steANjZVA2EiEsYT7UXgP3oF1ySt8E",
  "key24": "5UrDDfScBYpkkH1DCcf8yXpHG4XiSvJnyLiVAAxF5SSphnsZogpGWqJf3PMRBdZ3svD34jTy3GYmVXqPLzJxv9jF",
  "key25": "4UwpRbLYN8xRtiCz5eV4NiGhSm2tnWVoneMAJxjdwkbt7PXxTDcMpgn5xDMfv26fRN7cZPSJ2m1uSpAFVx42gZbZ",
  "key26": "33YNzz1nNz27ebgJZCaLn6L1biPqmxDoAKkAejtpuDnn2y3fJovDmYqejQHfBJCc5x5aNY1a3FdFTVKT3ic4BZL",
  "key27": "3G29F3CRSKA8zELDNyqwBJ3kMSpkSLWcGc7LZYnbmdtxbaZQxNp6iG2dWvUU5DAPrgY4xrJ5GQR62qxDSYTpcgA7",
  "key28": "55oXgffQT3pHoASbRdscsJwHWXPTsnLMmVESSwdi95QxQkhavJNjZ9o43bCQVK2CDF5QKCZxAv8W96HeZXfk6c4C",
  "key29": "5xRMWyQc71wFuiM7BC2G9Xwqno85oi9vh7PcRxi5mBGzicM9wfvx3YVpzQVryK5kb92L8yvzjzFydHWux5yy3acF",
  "key30": "3PBeJVcbiBk8uPFNunopuwqbVgnuQcUpxKYnFxEFn4smoebeVkssN2MBsdoCcE3tLPaXSAwPQDjWFPQbPwyu3fLo",
  "key31": "548GUZHTX5ivGnMxYSTTYST8epgmQV1Qe7cC87f74MymaiqtVczPPBLJvWJ9LC1eCdzG1JHkjmuJG5iRSBVadk5A",
  "key32": "dDySiKMxqAfeD37F9JEKbGc4gERaS5uPRs4ovAiDH4HbnkeLC32ayhcG7QXACYdJwkD24jp1vnRVAVoR15qd5vT",
  "key33": "5nX2aH13ey3BkJAMdzfnGDxye5s4NZUv5owAfigZq4yKkDzavGihBEUE2RGFaeXyZpAWmeTPSdTaT3niK3DAEwEi",
  "key34": "5wA8MEUaaj2FTXfNZrXBrL8jVAtJwCYVUnVcBUzsArAG9DnRLhND8YvTswLh2QC7vZp6w7G6TM2v64MZDAFXPNPo",
  "key35": "5WSyWa52iG3YZ9yejxoq1g8j5K8YyfZsCiWLm1pB72g9uhu7bLFDwnVUgdstxLNmFFe5bsERs7b1LoVrMxp5mf4B",
  "key36": "4TAN8Wo7EcJUiC2mvG3kd7uJbtusNzyn4VYebJxx5w6NGtWxdUjy3hz86ca4EfeeDzLzQQkdBoakzH35Tnux4Yhj",
  "key37": "5nCcXjpfrbPYoS4izf6tFx9u87nz1Ugnf26vGdUt2Kf7dL5i2FsQe9kViXYvyRN1qU8YCkS2qJZwPyTgzyRgqVaU",
  "key38": "4xYM9sy5bU17mnT2wSbjqRjBNvN5dkRrfFbj7cWf6W9U6AxSF41CKB8LfjFJtWJj7VS7FeGWCDJ5HoTHKkJpYxdU"
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
