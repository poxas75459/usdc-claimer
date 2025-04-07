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
    "3FAiQDDBgguSFNGrdtfap63LkecFkXvgg1HuXVitWiDUQWJjrRGLBx1mgwWq8yTGEADyn2EQk9CfrwWRdD4jFFB3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YGRWnsEfSnobHh5XugcEFebi5Ur2pGe2E84LL5aDtrHciteRbw1tyEj8YdzpqghwbyTYPts2vSuBsMNcRwyjM4",
  "key1": "4UdAkCQKGUqbSrVAFq3i5REyfoMDxjDm5tu9PZvPmyjf2ucm3CJ21Hnthwv1FZ9ZhS7ffo8b1SBMRrZEPuqn3pJH",
  "key2": "2hnLVzze9DHPajc64rnCEWgzWrH6EFuELrHXHwArbPDfsn7t2XJ2c11mqWActcE2J6aUvSDADdAdnDvtuvgvt5Sq",
  "key3": "2zg3NTm6nHA55u1y9qsH3Fdyf4AqiR8FYfDeiG4xGvtUVkPEBiiLBt7bYB3RneaCh9xAeBrxizxsvrNaDv94BSEP",
  "key4": "23Mnivmy1wcx8xFp18C2wHeLtfenf2C1dPw4iVbC4ZvPpVhZP51pLpFgmepNb1c3X7Ga5Ex52XAwbYUNRhRSxnte",
  "key5": "2Pfpo9PzfFgjRe3Fyd4f9ohFT3r5MYkmw1fTw1zDBYrJuCwvKab3rWWJKJVNTCvUjSyPDyFZKXuWRWR4a3dh2dzC",
  "key6": "2Kgu5zSD8W48zGpg9GTT689K69gQ7AvtkPQxzPwsEmFEZTFrMsV1UMHuHvBJcrHJ3jcQcrVu4tDQByrxTowLS3pp",
  "key7": "67XNu3jvEQdNZp7ZrrG4oK54MDJAeTL26VosrUrKm4ZqSBUyAnPWQ1hQPDygTGARwVwhZGcVmYZibn38GHb5JNUe",
  "key8": "5P5PtikewmNYEqCc5TyaLWq1akX1uGzdKBEBjgsG6K32BKprehw4jnNmf6dHB4sZcBiXYp7Zo8AMDNiMnnfTd8LL",
  "key9": "GWke1EgiFLf72NzW7ShdWTYXcTjJztmVEhGnh9RQK7dzHEdNPzHdjd4t2ZtrD2oNyrH3TNUEV9vZG5TDd1aiy1x",
  "key10": "YVkEjRxjcSwVGGGzdwnAZDNQkrDPANpXMknwnajenLr5JdTpW9RTGLgYTEntB67TPvWxjTZrnFuJ84BxhSzrxZV",
  "key11": "5FcScfY7LqCBdh1bAPkVvN12j2fvRE44KpaDbW2Zu3nexDia53FDCqEWdGmTbUCMrhVLWjzyium9PyHe3q3rn3PL",
  "key12": "3qLT2j5WaMVzGnXTQUjNJYa2V7LGFFv41AcnxSFHHPfWjQ7KSmBPoVExoCYPQSB8qtuQuh6BZ3YvJKC3GdQBMyUv",
  "key13": "2zpKCFGm98aEds61rqRyAyTzjY8sQZdDMUZbriK71bv6YAdybvf7sjXTvSHv2tX26KfDaHWep7dRdydd2EFnRu4V",
  "key14": "4zNZoWVRvXriiC8UvicDMgDvnWrWfuBK1sMmMVrfMjonp4VsenaSot4wCQFSRfT8rMgPzi8KzCsPwsosocMWAGNL",
  "key15": "2pkwxrJHfpmYSwnwCHCP1fZZPL3NWK6V6RagLp1mAXEpC5XieFWPoDoBD9oidxXP3GdbjkmSGYKaPwriJZS3d3pd",
  "key16": "3gyvwsjme5Xf5k5EEtbzw3GbnLZkX57vVyUYkvnVa7H3tgMHEVFG1mmaE2X6wQiH4YYRP8q9TnTU2uqF4VdMb2iQ",
  "key17": "2oXjDM4Wj5ABPczGqMUbnNVfzGK7F3SrChue9yQawN7BokNyWPxTeXHunPLXwbBoeGg6Uc1MJxqRHS6nYNtWGNQH",
  "key18": "5UsxV5cMaCrxt3icPX2g9i9avHdEy54BDEAHi4JraSqznFzb6mg9rkBzqqq5o9EbHS9fWtQTeTUY5GQf7ABXftp2",
  "key19": "56D1GhFxutbSaeUVy6QszWQHmZLiq29BEquyiZ6SYJAC6j54woRCPYThxZVtbpxXkuE8NxJpNKwDCaKTTqgETUqF",
  "key20": "4ypGq4LkAGQrKzChvgEYnyd9twCeEpaZdr4k9QmFhzgpmku3PcwzKNBo38LHkEWbcxmdcfArY2NFc3B6eczTmYtc",
  "key21": "5x4jF27ES2PN1j5LEnivj7iG1vtUrxcsn6kNXvj3MUQRadMcUB2BW2CSBLCJyn954NcanKHeGWQ8bWwa3JWBTh7Z",
  "key22": "2vKfmPUHUQiQAAQLjeWvyJU7y1x5CgTEPDJeRd7KeL9mTj1m6gFXYNPwdMX58kFsRaAYAoGmP4EjH7joTMESaPSA",
  "key23": "5fVDAHLxHkcUfbXe7VXM2w3PPFxMBkFbfGpjRstcDUv3An7pmWQSw6pB1RfkVapaxMtZefrwqLtRt6giu8qjaJr3",
  "key24": "58veUpaGFSUaJBMs4XVRCMiWygdxjzZYsEn8qwvrzvFarx5EkiL7v1Anzj7FoTtMJTjjLVQVQErGY4BsguPeVuqX",
  "key25": "5dXkdX4dGBfzMHWtX1dNY9sn4XrNGKUn2BYneYy1zoQNwnk1VsFEZfrkh4YB4i17wLh1KVwvSEs6JAtJ6zxS6D8s"
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
