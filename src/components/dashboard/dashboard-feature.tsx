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
    "4sArYHzWWZFTyiX5fPAYQVKpQ2dKaCk5awbPFx5T1tkcJxS1xwukFmhQ7YYqMHZDyxNCp4wmqeEBUx1ik1FNKCam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VxCMoenmqVFD67EMuGHhwnGhzsU8Q6eCkpwq2zVSW4xQbBmfFjiuVTqxEE9XwWCzetrhBsyHg4dBpU4caVEuHNm",
  "key1": "37Mv4JavUwvc82x8bCbGaNT4o7kFxMetBDBw9DuPSpubUne5eJUC2CxwLoRUfUB63AzfKxzgYmxPDkZYoYtdCsDw",
  "key2": "4ufhT7wnjJxdKy2Yw5zFf2D94G4v753GyRH5g1t7kBSBpTc7aT3eAJTrYPsU1W6zRHCZz8N1kZ97noHADcXsKG6X",
  "key3": "3FynejvgeUXzvFnMCMnvnvZ4QExJj3vqeDctcn9TdeFyQ9nJwgjjYZR4XtBGFwPoFKD99XdV9XkrTM6nctSn8RH3",
  "key4": "5UEqzu7yeLA7TfxXSfFUHuEc7n9w7iPFvtBj5aqpNxjJCgz1dyRefC4pSbubKyLQGUq1AfZbm5wdf3EnBDZMpP2q",
  "key5": "2EfxDaxqiSUaPz3zmbd1SPaxXhD51ySrRCuzia9TTgZMb4LNeLUojragrw35x3UwLLz1iu23x6DfF7vYFwjVsHYg",
  "key6": "2P2VHFcLc8mBtSeSKfbuZJ6CC7yJ9bnKJLZFNvfTo1qPd3aKfbA7eeZRC8R6QokxybR8jNbvACLwLNBssF2XYQ8F",
  "key7": "5Mwr9TiTAezWTVCAE9mTwZdcvmfCVhthqSB4UkHNXMUYqKBHabLn1N4ci8BXAE5SiRDxnSJTJvAjpVZ7PaTBbzmm",
  "key8": "v14A2SRUKZPAC6qRXY4WXtwpweUgDoNdyNqgUEq41ZMoSVi4oZj2wBCuD61RUvzvw6SZiP237G5K4r5Mv3QPkEc",
  "key9": "49w7H1n6xwPNyKwPnzxLY7fjBhog69b3sUcSWPHRyABqJvK1PfTSSfVsxh1eUj1pRFoLn2YyQHix9wjeL9JASMY2",
  "key10": "qH9L7xWq3qzKcbigzS2Q5KZxpebgmbDw8hXzZEUNfVkbDWUqzWNf6Ga8FB7ow6DMQCqiktv6WSfvacS4RcNtQYb",
  "key11": "2fbkPcDh2YQeCtAAn1qR38EX3dBTAbTG8R8sS8Tv7o48wProSg91pUXQC8sk8q4tfx9mkYHoKeKvCxKhfwXDMoAb",
  "key12": "2dqXMR4vydiHyTapsjV4AZUMEccPLUycmjG9H6z8kaZUvDXugKqoSpL6VPQiFwTDdoRinxc2AtVbzBELFvkrAVNr",
  "key13": "bG19Vr9ERXLPHacNGPYj4hHJg7qHobYDS62LRCTgQZbrDWQXKwHVAu8PJPNFutJMRbcsNpz6hpfCgYA5zq9iL5H",
  "key14": "5Qzk5tgftj3Vzzj9JyDfa4ppxXEZAK2T4azNqD7qkmmAJgCLgLdkscPX2cH4o9Zdt4h3KZoGuwnu888LNCJUGLom",
  "key15": "5MiYvMatoVqrbddpq5PDEGQEWDPR7Qz594LeyNejJTpdSWogfvuyhHfX3DGGRomMRCdrugrTsBHGBtMsxCpm2Pjb",
  "key16": "Npj8WXKYTEZK3CgPB5e9buPkVGhG4Dc2EXB2BYHLF1ZRybSewWNJmS1eREHi6F4oGPGADPFk5bo3QQghfVq9jFh",
  "key17": "3K5YK7QADUAbaXwckb7AcXiwcE9GLKSpD7rKcMxK4cG3x4FJ5BWNwu5U6oqoT213L8EitJyn9qyBkF5DeNy43SZ7",
  "key18": "5UHvojyQmix2YRbitBaFmCNS4ef4scQzwsQtJoN8TvykehVfA3ErFHGL4dsiNB9T7Wh4h6AeWi4d3PBsX5SGwtb6",
  "key19": "2c28kP8mGveJ1J3HWPbQ6rZ7ExMBBJKVebagKkB69Ui4QGA5Lr9efne4YfvWeau2W9ofxwYuvYsQ37VdqzgguCKT",
  "key20": "wL3rKnvRFEt93f5FwXCCEQqqcQoZjxYgPihNYnKx9ACt9eaauqSwqDDxR5nrvFtEF8Y8T4wik27uCM7P6xmNtxz",
  "key21": "U2fzBcb9Pyg4BT5SrrJnUQMNnkvStMDRtbStyzDXLfbaUKtK9vhyZzvg8G7TU63kEgwoRfRrwM9yK2QpvPMoNVU",
  "key22": "HgdswUQPWk41E4kajdpqDcJMYoGQJgNRAHRkUrDhFpTGrY6ccW1zVmEXq9sWBYN1KnpYeCbX5FP2vKWXWjbTQCX",
  "key23": "2fDgybTRXeiH3dvg4iPALYfFCyL94mzu7W4paJpTGvn7fgutdAYwDH1f4MpdzScGHGdt6K8W6LsAT63fLds1paeK",
  "key24": "JcCoWXnTDugdW1zAzTcAMebFQD65w6Lhc1E4XH9LCzjqYCAjeNxjEz1gTZZzinrx5Lc9rCjtUzpRaBi1ScY4hZf"
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
