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
    "2Kgh4Mhja7Pgb5qEXD2LNxkk5pHAzsgFUzsoss2CUYm3DBULtk5DFFbm3EvF7xHPgzHXD4NqDCk1eYrDiJHecYza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDhbz21bNtRV6XU8XEiLsyuZVDPcmKuTd6VPtUqmKFtqFV3DrJkPk25XXJxE1DRnrXsYLBTwEPAaRGMYZYSodS5",
  "key1": "46pe2ZWePNgPrQCAXMdvPTzdGP9uv9LeyihTcWrDMfPxeAXrzD29NxWwFsZpM27WgXz6ENkqxuggpsQMHZuZsmaw",
  "key2": "4KLMC6DZTmjTjS53zuS7cC33sj9fdUd3syEg1DX4AEyzhyFk2WRAfLAsmNCaHpvUkkewXowpjts671KRq9zDwrV",
  "key3": "3jbcWs8ADQtntEQPmqTTdQ9yRuvHgJ1pjtWTbeKwfN1qwCH51nRjNDLvYQb96H2SS8v8Ax2175bCRXEN8RgMVQeN",
  "key4": "3LCay2NV3nD6ud5HmXzDFbvr8RzU4jFvHCtEkZVwSs3Mnh6wC4f1sAhboKDpm45XgXbhTg6ek9dmv7J4Qne3ZNie",
  "key5": "2V8BBA8gFWTuf2GuyEvPhyYNnqbqLsSA65EQWpWWiZ25Cd4XuERaQYecq7bYx8bWkZKVK5S1SA7N8LU6ybhT1ty6",
  "key6": "37WWwVVU6zqQGGZWZcudxC4TFKMneaHKm68XrLiNFXT7W6U4d6kt1WrRBiGJsZgy8kpuRWbc9BqouRmzyVAVpTUK",
  "key7": "2yhdGugFtuRfMgcViB3QtyR1sZ1kT5gyUa7bGVFDx4H9hpkPdH2mbNHStSYnTUTySoBJuNcpRWJ3oCTHuyqYvTJ1",
  "key8": "5eoAsuBK4B6hWhbTGwjwvjZjqWGw68p8bPmCodR5YBxouij9CaLmqNfwNozeqWWGAM3j3zEtKAGuB5LohQwL9ttR",
  "key9": "XP3MzM5dt8somdSC6eaizJpypppYxLe6pP7nihJZG2bnyxoQANrvyFL5UnpwzHYSm8ees8yYHcvLna9FpNXGjBC",
  "key10": "53GCWpuknD1XhR4CCDvTLVR61SbsKeGwV7WuRRsiLXJaupdo8EgKT1jd16i3raKRBtxYtwaqHy79o9MWCwDLK72P",
  "key11": "3x9tekBddf5YJWXn99ScEuSMYcGAdxfoWtjn2rwhF1T2PGjCwDjdXLbAEmKzhR8GuP6o9CbcuTXfzJ24ddSnDrYL",
  "key12": "2PYBvNvqS4vZLiuJJeMtWnooM9aPRawNEdAzwY5P3B3Nysxo5V344SSFumbPD2J1dXrVipWUq3Y57YxDpLba6fik",
  "key13": "qzWN1CiNVGCeURytywfPzUFLF3cCrmAqCaZn3RqNXzU5Pc6U6mmLKpvabJfZN84syrpB2dHYkXHuifxRXCsuWzo",
  "key14": "5hD2he7B3kE6EUWddGLDzit35rQUmrnRC1nEYCNws5qWTnps6gwaipF7wUhWTvNHqGNLb6stWkuo5bR2WQTuP9Fi",
  "key15": "z3GrvtfdGsG6rEVTv9k6yth63jQFX5nXbigx4bg7edw8y3ykFnEnTVrMBHJYKKTVFnsduUzTQwub9FatHuFLWrW",
  "key16": "53ZJgfixvQfQonkm594d7rcKHjzghegCtW5k8Vcyj3hbdtqgYZsk5mhe5vqU2psQJHN1GQMJx1xxyD7XS1y96gXq",
  "key17": "2qYa2sKDFPefKB4mN27L6eAofywjrosikMAAeCycsQpUDMM3NTckowfEJ3ZUGjEy8Xjx4z1NumABNJ3MCcrQX4no",
  "key18": "21SuZhCYuaVAeGHiwmY4WuboUXjgQbiMpjVPw1kZ1sqh9wbSTTGnsQ6FPJFFP4Zip6QeFRV8Ef2UfWvh8Nbw1ZoA",
  "key19": "5TbWp2NPseKPe44shMR8Ypa3LuCgeBBoyVrgdqdycKhd9u1rF3Mgj5rQfq3P3imjLUqpLPkoB1E9PQoMHkJxz7c3",
  "key20": "2opy8B4F2VeW9u6sbcG5Vp3R218dyvNUCPoMqKRKvmrz3RFiMxZMRbTtsv8uyY8TUSn95ea6Qs2NfWbSBvyNzNKR",
  "key21": "7NVHpRndcNzZCnmqNnUqQLgQCPFrqPMREgJZtQX1HCpVLYG6twJbbEmy1b47dYJ9nDZSoNc3WBNZu4qjhZJP6yw",
  "key22": "iUGLf9GoKh5RzzhFVf9Wo3QGmByKY7vQRZfkFf6UpagN3jVKKsGcPsTofQVXF4ULNvBfG6po7kS2Jc9QST7UZw1",
  "key23": "4srkqee8CTT5h6NAJYVDTv3P82rE8qq4PYQ9xvMqiWRRYDgTBdQDKLFELWnpxWTfrTMe2F7qRWMxg397RcYYVHo4",
  "key24": "3W792RBwKXnKYguqe1cKKa7TKv9VjCwZdK6msA9eDpGEFxVv4aHgGwSN24edH4mvFEGzAdCiSqPUb4YgUK6NMRyA",
  "key25": "2u6VvYg8Ca9piyo2uGZXec54f4UhAzaaXiCzeMt2zMHnnvRu1uyTaH9MX9YxkDd5Ez8JqJxZE5wpwTGB2pdQ8ADB"
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
