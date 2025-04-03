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
    "3y5GS8GVhhg1c7MMbmfG7xvLieR7DfuNTpHxKZc4TvCGShcHHNZQ1BwGQCvYAarTrSky3NWaVjcwc9K8Rf4mnCN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CzXo8sh7eyvoZwf39tkj29iKPGXtdCbKUb62ej7qNE1gwYintEhGzLdmJoSoAKz4QCyUwZ1nxc3UByb9UV1o3Ba",
  "key1": "4BP9xeWnQh2NuMHWkLJcboLvRGbdMNarGgttcweXZZAxm11MNhxffKPH5BWDuk5bzMLqNM6AbiMW1bnmyFLTGCSU",
  "key2": "4yBjvLVYzTvzsZci3R8TLFKcNT7rcjpk31NmkSu5dbawT3efsuPBZVsCvvRBZ5QtaxP5NG4jPoeDg8nfLr2KEYvL",
  "key3": "2sSZH5WvCBX92CgECAgKUG4H3SEzusqRdXjGo9YSg4R7T5fJQpauEMDswYBgYh5k3Dx91Gv5EPBMzXXXfga7TgK8",
  "key4": "FQCwjUoNnGtVdbShkSqbmKLAcFjNeQqCY4eWaDPiz69NHdddQuY7Vt74FpiywHCcsNwaQUJehMHYpV8XWZ3uigN",
  "key5": "4pXJA2QGfW5qdFXcNdMePkbxZLTch4yjaYaF3iMNfDrPxMoQpceQP3GXwN6kFh9y41BKSKpxTbZfBLPGUqfsaFRx",
  "key6": "5oJoHj4JLdfeP7Ee9mHd8PgLpng77NioqCp2zyNQ2PcZvP3t49ZMecjXdz8SdTXqPwywPdQBd17n52Frjf51GqCE",
  "key7": "5GKAoivu5ok8nHtyPMWAEx1djBiW8pq7m6YsCmKyDXgreFBqaG13dw4Dm622BgC93hRWpm35pxTbVsuCtUowDiN1",
  "key8": "45N2paMgPGt7jgMH2duXwfeEaWojZyRP9KAzATzuZ2e2HihaCE9wjNUZUSVGXQCs37Nq7jugH9z8SoT54ckGqr6z",
  "key9": "3DYUkfgqrZTf2pJGTQC3K3DkGcd9DqmsBKoZ1n3k344Lnm5fbRTwNwV2UM1ksw1QDGqJ37fuoUrxmQiX37JqHC7c",
  "key10": "3nsP6ECS9Km5XRjiVRRL38v1U2ts3EQhANKy6yg4wyquxdwCFzN8KH6Zj1NKr3AcvnWT4hozLBzkTBWdmQ3Hif7T",
  "key11": "SFRwy3CMhuJZk2X92nbUkvm5erdEHmf4J4GBMpN9xJTx8c5ovxqb9X6MtjLDjX7HGdTACW94sByxdVnD2wBy4v5",
  "key12": "22FJ5dsjLnwWiQfqYzXVkfcfpb9cyMNoBwFRujbpicYriYQqxKxMdste57HbdckB7gkavztDuevt42wkzSWjdgub",
  "key13": "4DtEwhmScrgtqwoL9N8rvgWG4vx94aQCs6VuRCAqT4npZix4MiNPUHvticrS8pAju5wEZ5snwQz5MXdizbE9pZo9",
  "key14": "QKVtPiSag1A3H1kYNCb7Kz67xjsQ2gNk52rGLRikqpQSykBjpnZwn8zdKiccaUpYpmDZWnpTt6psMsRGXeMV9PW",
  "key15": "V6hrPfbykwQ7qkHhS4VTrrWj3g1BrUs48uUo1JzzHoQjjVLCeevHP7atwq7qhYLeqHske8C5YQUBY79XDYAeHqD",
  "key16": "2mbUQfsvhtPUmM5wRbiCbDbRRHbtg73d8zhuHmQxv4tuoXmH1oMjYtMJ2AWWDysv2KpJT59xKQcwVmSmnW8iAKPB",
  "key17": "3YsimfvfbPQRTidWPgyfExzhyHnWQ9jcK7zuLoZvEo8o5CKv7fP7QQrndfv4eGU1WBSi6sFcYSp6F2KSJ65N6pso",
  "key18": "5WP5b5moLQJneHxD55nXzNrPZoasFMSsih1dM2YgvqVPpnLv8KYaF4PKbMvVjb1q4prReRreFNb37EQLxiJganm5",
  "key19": "3d9umuqJptHyxcB1NuYHEe69dtsaBFsEFZGXUEBTKmDvTtFH5z8drfXx4rrdYBxkNMvL5JS91FhCPgqqY2D5PsrU",
  "key20": "V1y4ScMR5zZrAms83jVsiADP7sSKF3jKSBWReu8QNwHAD87dsPMZMmLUm3nSAeP2k71tEKh91gTVABiH2SjNYvn",
  "key21": "3pCKWm1BcUYKqTKxmzeUMz1bGzHdGMwaUPPMuez2mrdP975fC3ZpsCCfuyLa6BfH1G5nB7JZXVqtQwvR785sk4K4",
  "key22": "4PcZvygGGmdLbQMVtUkdVAMbFtqfRXZMV18eynQqeRds5u8RHub5WFYZHfmKDhYjZbDYN31f4U3P5UwZzaEkRDuS",
  "key23": "2SHEXqeYosvVUFTva2ZTcWSo4a6c9i2RfjABnoiG3VaCZTMyaTpaHYdKnWBWK34ukQEMaMKCM8AF89e2rLBcZGhL",
  "key24": "5m8Ea6MWzmWgzrqeNnFGyMTRBLpeNG1GfmwXJDmy7a6axhcoBGZQc2ofKXYjeM2cb9WCJjqD9J4ptQMMjDPURVVv",
  "key25": "SV8xYsxatXiRQoqnXTUr44FhEPZAPBtCmxYGb7i7yQM8t8YBnTRDJ86UXNfiAGzwpJ66kdDcbTFu6hQqoAUNz4s",
  "key26": "3e6wRrLVfxtFc7aZXpMTPBmhJHE36wUzMPvbcsbkL96F1y3gkH7CAtc7JDCcVUbytiBJPZRNdqbt14ijhiM7Mx2t"
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
