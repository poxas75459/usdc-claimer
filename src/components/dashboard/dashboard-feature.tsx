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
    "5bQNrtqSZJbjg7NbDMrd6e3Urtq7KjrUucd25S9QWe7iKCCeP7PKqZAYhNcYqpxHEs5KvTWFWDxfWV7feqEYosga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gwpu2Kr8Lg7oQkcxo1HB3CEot1JVxUoXuyujhXctrUCMfH9rX5eK2AVmsNbLaVrSTuam9BxT7cLYoeKApXTLXEx",
  "key1": "5Xmei2rVFonivTwoGHNFBzNwru4KyGAYZbDsiWrZ6PEAt8Qz1Ycs7FyXyJYgPfya1JrroRL1fV5eWiYVh9r3ELWZ",
  "key2": "MzfpHEVMn98GXTc49aYagvmyGf8NVKgcmasCb4uCnMaNahTRVBzP99bu5zS1MoLJ7hLVa73iZjGrbBgDWzqocWt",
  "key3": "593VKPRxdt7XnbwRB7kj8tdkv131XN2WWKhcpfMbnek1VFohWWTGjyE2ygHAv3fkGkxVDmHW6GK4orkijPEa3jmB",
  "key4": "3TLk1x3tBK43kXpYF7yQJEw72qwSPe5BoxQrt2Ga8Jz9dZdX2A36Ahkz87UFHPRJV43QN57ngRiDe8DT5xY8SPqy",
  "key5": "pmXPSkv28WSf9xoMF1vQVpd6wNTYV12YVd2mxvbrT5sgcHyw5NtE8zDiFYjLH9pg8rM9EoGytXGdkj2h9FLM7kj",
  "key6": "3oF2Y3ZZqJUjXL88vVoVzdzeY1S8A9yMXkaeKNXQUZocdcEtBDStb8PJcC4zutY1sksxQaZ9pvFtLV32Ytn8bEEo",
  "key7": "4WHeKJmu8eRiX1dVGB4c86mz8vcPpTjtdZqitGTTgqn6LtL2cis65PM8jcMfJt9KoFZ1nzGs4sWruh3WBcMCLs4z",
  "key8": "3YbeYdkgG9sffmJcvsmqrett7wzDETLkPDazbEMTTC7u64NZoq9GcG91eexdQHeYBzFMKd1URB9G4FwkcG8Kz3cs",
  "key9": "3gJm9UWsjvLmVG2QGU7QhYNYwKhwr9Ur5yVuNGxmc6hvBDodiPanZLddGSbW11G7avr8Gj7UmbNiJpXYhze634iN",
  "key10": "3EqFiEAEWWPUXEwSqJnmf1BwCL58hEPVG1UMpVrgyFm3KX6PQhWKXXezKkTBxvPHGTGC64PUpohy1yfLr3XXUEtB",
  "key11": "xgDVCpHahC5TzECf8aXwtUx7xLQTcZBoHhTWS6WmnABjoBs8SVXgycaLiek6y6ihx5c76iDn423yvbtfhunL5sQ",
  "key12": "3X2YwBqGpQpxtcEqCYp9W1nGRdyX3bZsRpmqou8cnRiu76BXwaTHBV9e2fmoyQrPGkAnJiksuNPjkVUuUXYj3Kf3",
  "key13": "pAp5BqD5H4sn1bMppsbhdBvGKbtsQ7n5cuzcYDeGkgVwbM59vbCsydg8bECxeAUhJMqG5TVmi6xsFaW8KGkSQnt",
  "key14": "375HVZPgurn6xhHuv9jna6nf54H5YW9pn33mNK2T8PQD1F1BhAzFTKKURBcerXBdMKqEJfhcsMCLFb3Upkpksvmu",
  "key15": "2EqjuJkH9RVMQpmWW5ywWmzD2z7H9rCyNUjYB3HpVU2TMGpH9Zq7b8NcRBuykCXx3PWJmZQeNj5ZCMFLEvXfdUda",
  "key16": "4ydKjxTKCPRoMLueXEgAf5M1MeRz8PycmM7thtspUUGDa3kBvxAMYtJ7UAoAH8ESzHHxEAK3cAm81uC8c4j76wWb",
  "key17": "32TwmiFDwDXzkUwf3w68NVkv4mJr1e23EUb6q6Xaikpi2AjsNFLBuWC1r4JLWc6uWQGjgZ3ZuLmzVXF7uk7NrLvE",
  "key18": "3cQEDd9fB3MHE6Em77qfsNr19znfW8ZrVuPwFVX9qM5KTCAKzPpsk9Rg8tLc3tvU9c6J7DrMoHXCTyoxwcFfgg8p",
  "key19": "4TBWAP76phbgEVMb3WrXW2hRXmnbouLgsPTKXCSjVt6TMyR7YSDC8hB22TtF6BzAEAfwsypHKygvevWSt2hfjJXM",
  "key20": "uy96jAWrs5NHzwAowkR2NDdkACGairNHvgXxbN2j3HcaArKbWphoRoC8s6DQ3qXt1EDFs3MYZ5jZF5E9HwJU6k2",
  "key21": "5wqYzQq7fFpfcaQ8z39FYR9u3L9Aqazd1w6HwyGzXc44C693DK9oam7mEBvqkJmaBvPCAMzBoVRaopEFjKrtQrhJ",
  "key22": "3J7NBkhAH6tAyWC7sVhSPYpY8yft9Rq1B48bQyx5BaByUuJXnqUTxPqkr5tpErAayTH8P5CahKbYYn7EpMEAaUEG",
  "key23": "5VhzKsAuEM68Jw7zTsZLfkuHfYdGerJeSoptAh8pbhWKMJS9VSfxfkWokZEKuSwp7JgPyDx2qZhEDPaFa8LczTNo",
  "key24": "2EkMR9XBvrZtZh4QNbeJ7oJQa255YhLToVgEnq596wPpDPEoqt9f7VsS7udhAMDLCdCVrQZsSuR4rJf5CD2j7Fkx",
  "key25": "RyTrysgn5fy2EZat6XF3SeC1kjMuiMWeYdQqmZE8ZqEVWkZMd8TcxYnh32mypMJGqhWtp28xcCBjXA4LEa946y6",
  "key26": "5tnacg5YWsSSDMscVJK1umq58kDDif7KJStmM4fUSbjkMUSagZKDzeWLX13eC5Yw6QnG8MayePztGEGrVHhSD13D",
  "key27": "2AhWaTsr21hWnoYNXuKhA2fi9StDLV2CjNK19sz7KUYNf1oqbmw8DeWgVXCuSJ9N8zwEEyzMXu4r4pQDeyq5mrku",
  "key28": "5xWCTCv6vXTyrETHdDTEBD3DZzsmrxySPnjZkj3kimxwPjxixsrt6aMgVdY5EexS71iSLQqC21xCuAfQXxrG4BXk",
  "key29": "645YVxmsGbU1Q5DvwfuudmwPnJyTb5x88BGwM2475LVbXsAreg65jgi5Hcq8D699QEGUV1TsJcuonP2RhLAJdSL4",
  "key30": "Dg3UKtuz5H7P2AG9afNfTo5aJuoqtJqmaWStxSu1oK6b6jMHSFQvGp5PsAYUd14gDcmMhKjBkb9SZZdHYHaYC1W",
  "key31": "3RX1ma9SsDpc4UF7F64UzBc8CudVD4upHamaFSiD5ozeMtL2ty1K92JpzAXby7MLzPPogpH1Y9NDgtpByYKGycn5",
  "key32": "587oDNiid9ZF1sMP2cs1ZL5rxQrL6cioU64tZBUT5cLSmtWeVs4LdcvYYyGWRtWHNW3Aoop6yU8AxECSi3ZrMk57",
  "key33": "2AE3EvaeQz1cS4KVYsSBvNUFTVW2VMVtDDg5AvDoR7BzEadrhknEqABKbfGQdnZ436Wag4KBscYj69CBEV7314fG",
  "key34": "4v5D29HoQaxJ39DGuCXDRycRJoz3jV14gaRkwCaTXEfLyZCkZEByMPuShTmuXK8yQbLvDHYdKboh3Dc2N4UbVAQL",
  "key35": "3HeqxSvtaBQ25bcuT8fWbWPTcJVU59V6VP6QGzSqw64oYjoaubfcWoCLAoBeUupSK5PFRF67fodynR2AyXfbPusA",
  "key36": "36PD74cavo3oTHqW3s3Ftv67Yr47zpNLuzxKdbNiCW9169Jwz3L2CshtdJEpmkxaKDJggRgPktHmP9RuzrPVWAwL",
  "key37": "4b4VyPiGKgz7E4YMXjWRr2ECLeXhxUZh1EhQNw89sXwPZnCLp8ET9LFZ2BqEcmkULWuQJq4HLUPvyLYeWeMRFdV1",
  "key38": "4BijwwCNYviqhFXLnPJvKcftF5dh6gmASixSWSobda5Wq2WjKsaPnAddFVXQrE4ZU94SyEc78HKSMVCvz6aC2kLu",
  "key39": "3offDxJ6AuoAofe4Vc2bn8euqZafTTf3qT3CDnZGiZFJk4mTfUgHgVMAZkZjA5b89cJCJ3jnQjd6uBkFyvv29Uoq",
  "key40": "5jYSu7Kw9aGoiNLo4kVL54GfMDds9N4VkFfSD8NrGdN2MUWCWDFNjCnkhswK8w9BSGRD6uY2vYfZVKyjzVmE4cN8"
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
