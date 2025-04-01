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
    "FbWBV133Vt1KEDBbWMhFKiDih4wa8rZxCgLssg6kEtbHQTgaQ9G5V45DHdd3m8KM3SGAEoop84eqzsXWzFTRohN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tpAxuef3Fz3pb74dhKedk1sbuiJV5BtCx1t6YbfQjYzhNLdnijZywdapZTsGXnz4RsRB5SAYz1kBoRBfZ6zFAbE",
  "key1": "s4beNLaQvfuN3UioRffzFTXrYCVysqthevY3kyg5cfeTPek28g2S9Yi3ouXqMoCD9gx3wy91L3Kyyyjb5dRbMmm",
  "key2": "4itmUuoSCrjB9cSj4WvKPe5kqb2kTY2gtFPBjKL88BVMd21Q3BMiquMuGT2xmPv66MqNdmdt2bvg4iouFjFvHdjz",
  "key3": "2RDTr67Fn1UHd8Xwmthtq1xAnEHqBY6MXuqt2Q5WLEhVbVkg4cyGBaqw3vZeBnPoTDQTfuN5YjgnrgGon3tAAb8A",
  "key4": "29rpEg7VneL4AFsQKkKLT9Ct4XofyU4DeaZFUfMAj9ScNzi2Rexmb6mds6docDY3CLMzf3DJxpeNheTRTHLeJuP4",
  "key5": "56wpFwz3dVMkQcts16ki1mbEwh6AKFEFeMpdXfznSyT7GDd9dPLVHpMsSpjjTYJUBt7M1F9XgMFQXMbvPtYKZ3E7",
  "key6": "VSd3rgGfdkNCy9RNZLpk92yrdJB3SLftN2NPB7Tv7Tm6aPDdjJMEc3oTcym32rByBaZt4Bx2tGNeH4fLTr9WTzF",
  "key7": "3Jw6xJZ38FARbmmftMjKCqQ82jx1Vkmpw2f5A9AH6Nar5pS9TaUZydMGB3U8T4smS9ivNEeHPGgCWJYv1Nc8TPXs",
  "key8": "3qUpkEkqsMa93izEkFdstwGwvi8RtELn3oa2Rah1KF94FfFnsd8eNmi77pHEs4dAamJPiv3Smw9iz2K3X2J9XGsw",
  "key9": "5TGJkyn2QJTcKjTgJmquXZ6TNTR8eRjDB1ESVMvC8cnuoouWaFbhiicFer7X6BwduudVbW8xAoJCLM2HnurQjndn",
  "key10": "5vLdmNjqvgTo2gWbiHcVTr5VnMFhG3vAKNqKXpiGWVMmyK3UfwQyCD8QRxN3yNKubWa5kSzfJASMdUQXUGsXqLKP",
  "key11": "ipVCyBr66yrRwKccWVmCWqeZJLCeDRF28bJVySC7ff5q7T12VVhBzDVP1oved9FkgPSLw13WWxVmyRb64P9cdbD",
  "key12": "5PdxStv1WDzjYLidNiatsNG1xi2fX99oUPd66gqetYGkeZ7aS3PvkvwtLKMNStvaaC6GpHve4BStZzgNmZR9qJnN",
  "key13": "5TBxiqw6HZw6jEyrbEM4fCLwH1Pm66jaZZuTsQ6LKU21awyDe79XjCQeLzNruBuEqHD3Mn9pt3h5szLTf2Yis6er",
  "key14": "2vqhGLKkLsQ16bZV2PWwkX8cRDh9ho1XisM6uJeDHtL5sNPdQ8ETUkFnRTj5crfuX9X9XNhWYhUfXRwTuGZso5Y3",
  "key15": "WPLdXmoVdKzrtFix33CDDvXLtQpvBd9yLCDYHKR2y1Vn2mZGAcvrYzQ9rZsP8rwhzketeP4TEuRqLNpmqhBFycJ",
  "key16": "4JqYbsZSuty3ow1knXRF5KEwekaJJffCbmwpux6uB2CqMMoFQHFxuUH48cryABiY9nwL8aptFrfr7haCS9QUJcam",
  "key17": "62as7wkCTxxZhu98p849anLEntrLxqG4UX9ahKcRPLAg2JaCL4KrvxQ4wCASErFP8MDQ9nXmSaEiF83wALJrM6uA",
  "key18": "2T7xYuS9NL44QCBfQQKyZJXNAERpn5qhDC8g8BL7csgNcNNYwUBxJded5N8FZ88fbHUUS2kBYU1W1Hy8WcLEx6gS",
  "key19": "4c6zj1SXXT2PtjVJeGABQKMWCJpJtPHAL3aLyVTeeGQzXR8KXeMV4J51qi2WvhZFoxn6ceDz7ogX9C4dt7R4r3Hr",
  "key20": "3fdPEzmwosGnRdNqDDAHRigqba5Ahvbvntpfej6TnTxyBJBSUf1N2gEYDoeffbQZ3mvjeBsjTRwTuhDebGqYk5w2",
  "key21": "3uvEg3TLxx96AxtJzFYhpbskjbtEZLyBPUKJMEFo3DLb1MiVJ33vz2Y5UAMGsTQStFZwDW7HqsxtfrSGYix3aXNL",
  "key22": "4x4PHhvKfgN7WzZipGA9mdnRvdNw4j6qYvLPcskmhg7GU2CCS7vqLuxSobce6DNvszM3n4QB91Stqoy8aH2Qna9m",
  "key23": "4js83Kd5RZRRWjzQxnPC2eecNc1trW2Y3tQHDP7XUrf6Z28HZyS2e5PpEZnmtsQYttozq6zsWe6CBHz6sfVpmwpz",
  "key24": "4gJQBQpkJMPywYz3hwSVhDtudQxhyWw5svvnXbQm6shuoG9e1BGu3dqnG4L9LDwVDYPkyxKT4gFNQX3GN8VapsNU",
  "key25": "5KWBVHN6D6eV6TPKzgbYcywTbuxFdz7a4TaxbbEme2LPdTfxcKAXSvCLhtJ9arZRgpwofZfxReeUUuFA4wmtexuQ",
  "key26": "3vbVXnHxeUKaYpT375LNbq6Ys6s4KDuVkLoSrQpF29PnmR9qobduU5moQGSqYgJLQoDMrFFPebugR8siUMDQbT9Y",
  "key27": "5Mqh9N1jVftDnMgxL4nGQzeeaYAKW6qBaFHmJWCavCoVpN8o7C5sCdm68qbwemYQNQBxodPDYa3ErHpEnj1w6z9G",
  "key28": "5xXRAhPNu7Z76K6VLYHz86oLWwMJruN6ZYwj6segd52FALVZyNDxDeKiJ7ht7XP3m3HnXyYmTzp7GwmXvC4gn8f7",
  "key29": "4FPbDQ1K8pY2TNJ41m3f5VifxJyEznG3QYcjxhPYZ47Qd2a8Z7i6Z2gDrtmWTEkqP4AY9m4U9mTX1po4n66u7T8F",
  "key30": "4AsVrPFc8U57e6bj9fkoDYvrV3qK9vyDHpNDkVmvSgR2Dd8Y7HXmvBcJEnnx4znHDjyNpRJkW9TnpX3VnzuRdGbV",
  "key31": "3Yt4k35SZLCoxyPc9FBU3fieYzmwbYA8opcoVs6ruvwtT2GEpBjHnVwbd9J7b7fi3zCaw8SGdXto57kGRrRNGmY7",
  "key32": "41kNUgMLjeKo5w3z8M8taXodNVU6WuPXv5buDAFDrxYFP11nrXiisy1tkvXeM2MkUVSSo8hAzKn6fYvL5i5ze3h"
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
