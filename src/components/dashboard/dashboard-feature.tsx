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
    "469YTzNoUMPokm1E8tjr44hJUWuwhyJZ6SnqG2WquSMuPWNGW8h3R9PYryGynLEihW11EuwEGSpoSRkFpC6aireP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JUaLvd8TsAa7Y5wmM3yoiUqcH1cZ8Fgw6jtWe2aB1LE2UtSc9rrjWJoAtzTwrXjLxTPbugbtYYBa2ypz1zxABuL",
  "key1": "2YQUUXBpQiMxMAyxfuBqh2N3Luw6kgMBc3d7BKd4w4fvH4oSyzwKPBWbd1HGWMYu57zmk1qjpDjmKZU4cbnYE1et",
  "key2": "sQnyE82tJKPRnLR7A92yqfgUuqCZft7ciTK3kYXGgx2PtgGNPTTAApRVEAThmsnJqj6UisoNL5tm8Tgt987xjzD",
  "key3": "62pzLzYeHv43cBe3UarJwQV6EYz15kLEwCiJFHNFe7wKw327V7b2U8VhfDGYMzvB5qtmnNcsFou6gMHPCx3n1N5m",
  "key4": "2F9kfhHgtQEuNHmUgwAJKwD8RzRkmuihz3w7DFt9LduGDgAs2eWSraNwrqzyuF6YCnFMrykJ6nzAKi3nge1EunUk",
  "key5": "37Yx2y1KZZxhj2F2b7AinZtmKbGn6gmQQzLEGkWbaYnXxKhvy4wPPk35QZoxPMBH6M3bnDep9AmnqjoNN9WnTPb1",
  "key6": "4vhiiz7H5CxJ812wMjym6r4z5DBw1VFp6X1FTVGdCmC9KkAJ2L5UssRs5jLWcphhAwjTZUJMeWkFqop3XwyXfMaW",
  "key7": "3mGdERGDzQTcY4sE9G5fkFpyx7iBfbeS6EjhjWBf6HLqKGk7K2JYDzXrgFnFWKwP6ejRDT2L3oui5qSCcdAuwVqu",
  "key8": "rjSEhTg2GzXGk7WdL7xQRHrVRRVjzquEWv7LyBwtmCE7VcNpKDCbWeFr5g3A6AhaPKVcCo8hVGQHV9MqzpsYkCT",
  "key9": "9FVig2SXWwgyia6P6bsmaxsnf54mTVU9qpPAtXQLfZpoZ5Vqnq2a3zsq7iGAN2QxZqX132otvnom9STjVqJJ9ZY",
  "key10": "2bbFBqusd5VhHYA4f7hTCfwXnRXoz7RpqfqARoR7bukeTrboeRqYe2pnUcbkCNge7Nsr2C1dUugVhQz3oyiMTeb6",
  "key11": "2whPaqV1wz9QpkSa8nQdicyvtWvGyMgD5LqHxaFxvoKoXJkSkpZ2muYSYqJRri2KEWVR23xsCjDoAjNzK9XKHqSt",
  "key12": "3B3ycyb1vkuHEWJkLmRPfiuVzLtzzcTBXg5rENjN23weykcyrQ33dTxoBjM3QyFpBjtiDrEFmdETE2KdUpgRkGfx",
  "key13": "4VNanWYfByzgG62LfQeLh5DoCw8zt6vrcPYCPKPZ4rLVM6RD1G4cQSDJExbbJhHpCPox1YvUgJtpGoHgLL6xFo5p",
  "key14": "5PRuGwZrN98hv7BWX2mQa56t6kMT4DKzTgyZc9DzDNiLRHCtW2FNiUSxRhEXHbLBPqxmAQs3Nro5v1Uq6ayrPYS8",
  "key15": "4DAJrG3CmWvtcyc2UVS4oUV6wBgP8fQQhaFPo86ygsG85nkb6jNBX5sgSh7jqevZMrntvLPhKEdvBvMBzDJ9Dfjp",
  "key16": "2N77BHfwZGDSzfgzVL1YFtEuHbWKyi89BiPnA7pCGth4t645Vyt6sfSjLTHsBwo4KtgEAeVtPd9UrqmYVZ96asKz",
  "key17": "5Ye1EsraXLpxAMcLn6KVjryAbe8j57ygxrmprMciDc9Ug4T2nC7fzNS5PzVRxDZTJaAPRPTGsFZytE4nRixdfBrD",
  "key18": "4yPRRGJgbcEmpq8tax5nVWJCXvkfBKfHBe4zivyvnxoTvoBaL9WfbpLseKrdaUEL1XHNaoqNQtcbnkg2x14meA4r",
  "key19": "5jG9biZWSixSPWfuccaeu6Hk4V6TtkgQxFeisLhb2UXkLGYPHWC8D2ubCLCt8M5jDdFSCoGmyJYegTVFDsQ5AcYU",
  "key20": "65dm7HB13S3G2f4r2dtBEBbyQDsqWBQevE3WeHq4yEyVeiZtBRYXhK8bJyKBAX2jVCjVmhegkYqP9M81McTASq3C",
  "key21": "5SckiShZp1M3t9TbrdDdMgqMJjJHFYM8CKci2SSpqJkNvrsk7jQCR7vkyjYwsMg2BmhHgyrkR8Gwvmw4i6hiSnan",
  "key22": "rXMdrKYdqsUkj4aefujsLpidXXCHqDb27Nd7iiyjSQvSM7ZrkZQpABSCAicnXonY5JZngxVzFedPaieJ15XYxKt",
  "key23": "25FWune6XL39A7p1xJYGpdEKTMix8aox87W4X6JM4roAManstFusnbe7L3hQvZp6zkBgWPiAYvGCHsuEqL4LuBfR",
  "key24": "4yAeRS7PLyuPZHvtXY4qhxWVHb5vKJVv8EcMQW7Kkjg4nQxwa6ZgR9ennFgTfXkmy5rT6ng9fSqSXFN2PYwre24o",
  "key25": "4X5VCgd7YAw3ZTMjU26DkSa8crrkkjDsLodGegZFjR7kbBdzsQFAPKQZghJzjyo9dS22Tbv1rpeGAHzNjYefeXvJ",
  "key26": "3uaX3qqSs2n5c8fWvssgvoGS1v4e4RKqWNrvuVvegPgk4t45ugtz3dEUg4DW9FvKqEfFUZcgqFW8M4Cz5BnFd9ky"
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
