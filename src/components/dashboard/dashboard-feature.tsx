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
    "3JLcisK8Vhdtxh7Uisgx6a2GcaspQWQdAA2v7R92Tzev4r1noxfemaj4ngJ2bBhSyBQQkh7i94GXyJhAv3ALRYsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62juRmPxoYDHuRL4u8GBP9vBxF7wPGjmiQjqiS7DtHS2EEsbyZ4dohfzJZafbsNdPrmAhh8aCVYtzcyBRG4PDMC8",
  "key1": "28xZ6Paha7G8i5CNDvWVmXHNhTirvoS9zYEQQGiGgXnKKu8Vptf1j4YMKX1x5zAcHgUC1hrM24DFPwtkgJuRWnFm",
  "key2": "5o4idLYMYyHXJvP7PwSaJpACQwdDQeibMLMsd2T2hY2eVPYi1oYywbmKS6UFwyz7GV5dos2sSYMiVxMn1uXJwxru",
  "key3": "2UrA9j4imsZycTtyRKdKwVoeU2vuPuGYT9N8WrhvCuzevZXn9QEmw2i1obtEZ2UAjGMq7Z2WNJWF9N9WjZfS1NhQ",
  "key4": "2CvWLhJ2fNaZWFbnvQuTycLWeVQ93BzMPpW5K7LLZZzkmWeBiorQ2GVHsEJASP8SFcxokWJKEiQXx2887ioU4Eav",
  "key5": "5gNg5NqDg8gSruvgeba4FrNNbQLcvV77Kx8zCydhrEb2b8TtEaAC1LbaEUfQ17cpnDgBVb1fJAWsYTiHtBkTnRR3",
  "key6": "NVrrgQ8TSiMEtFW88WBtXkp3D7tgMMsbefqxkpCt6jWk53391WNqzDTGKxmnaauadtFUDs97TXdavX6FfVYKtom",
  "key7": "5usZr7uRiCq91sRY2uvEcLTHjmeAFyvdRdmSoq2S6ezSP7cQFYaapGqv69qY5iAtxXZRWbQUUkKov5Vckj6KQCx8",
  "key8": "227EXZtzNFHXv1tZMp8DKapYLV9K8HB8hFF4JzBPAEagL5JhHbZve66kgtUcFVuYJdfFukN98ZUooa3TK6B94C3w",
  "key9": "4qkQ2zwrL9PQVXUoyHDe4kbsgnEx8UvwKjPojRX1RpriYwMRMUGdzTTtSuUbqnhSfMHxrBbrQqYDoSKAyjXgcwbm",
  "key10": "2YWSCA3NXH7BknhQdSZbD7Pd2wW7rjNrx9urjeQBNKJVveZUFt3oeyjNe8VTmXasC1zh4nWnTeQg4xVHMkrm1b7A",
  "key11": "2CF6ud2K7WBYGrVrDWPzkqd8JsTLwTBudyhx1oAeEuT5m9Bu66Xpt8LZhG84c2RiagrbBRDFTnZnVFULztNhZLfK",
  "key12": "AsPygr7ncWgyS4WqGoDVxURSagfUeQVceAv2SdpBbpSmXTMabVBqm6dhsWyD73op451vsLyDsPLzk73obBPeSoE",
  "key13": "2sdzx2fqUC2XJJGfyPUDSQhsmBUMyWjjU9iAnkEbJZ6uGE9dAwBzBNNarxn5WbBqCMBn41J9FQDUAxJXEFftGFUw",
  "key14": "42kmL7fHTXyxTJ6SwknvQM4AJm3rKw9nQsSNt3k1Z4jWpgK3R56kzV6fAv3sTTQmxvaQjnbPJ2P2KVD7b1aAnzqH",
  "key15": "2NU937Vgkvn7xBWCavr2XRCjcSNpPzkSmsQYjqBEXjNqfADYHpgQ1H81F2gQ3vUhD1Dx8M8D9R5K13D3SBUVEdXp",
  "key16": "3n2rZrXRPktfYRCtEbzeqy6acdM4nnqsbxieuFSZFz6itRERYgzfb5akpjgidiCjgjyUEUASYyM5oqhcxcwBhYQU",
  "key17": "122RmbLXRiP7sTNozjD4A8jmRDBkniko7QkcNzxrHsVxkuDMUVjkmmkcQdbqM5zNRDmnJVJHpk2TmVpzSBsNY3r8",
  "key18": "2CP2ivArZHhDtF7ApKdmEoo5TcVHmatxhxWjE5BQqrJ2kgwGEFJwy87nfES4anDMvhH5PGnKHtDmVTTWqJaoumr4",
  "key19": "MxSnFvz1cUV9EaPfU5W83dxJRCUMVj1z3zBeJ9xYoz1s1HkDinBy5iTB1P9GWWoGFFxBVotMcTyf1SgPUhFkpU9",
  "key20": "zqnGBVyAF7HwPnPVAMbRdKVhdCcSVkjUvZRL22PNYPjSbrhnF4JbZF5LDp4kpTYyq22WjxSWh1YCJHboWE5J5iV",
  "key21": "2j7KUHjaLe4xK4Esfvg4YNkfJynBg5zaWD49wgg3G5RmsdRNduz1NWbveMgmv1L975QsCTrqZzFddePJBNQwDjRk",
  "key22": "2aeWtL4LoYQJi4VfWdXGLTfugzysZ55xGBDvL8xe22DiM6Bs9nf7aztKp3pX6PCGMVSxhKf27CLzcCMRuBJjMYfT",
  "key23": "3BoysK1QoeZzX7C2qFmE9cFni6yS4fbtW7fgUC5CFyJ8FSsQ9BcTDZNvwRoaijprHC7nD2y8MbW1SeDBuyjhS5Ru",
  "key24": "2VeP3tCNp7rmw16hY7xHeBoWTjJ3ZiYQdfCnL2dKJSsZMQ4XQjmfGuYo6Eguu7113Be4jgbf4bPuxUre4fHPfwnq",
  "key25": "4dfHwQ4JdHd2vdfctYvGDLa2RocvPbZhJp1tLfUEfByAdNDQycxYawQY9GxgyCfELwd99n4PFiNeVUoQ13DyMMUF",
  "key26": "5uoP8HBNpxYmnPjtgpKVBE1orxfueu3t8c11aZn7SnUNnnrMoQ5iyRQp6NinWAMqQU5NDJfvRfwEjNa7ccJdLqJp",
  "key27": "5xe2ouWUymaQgba7AxyJUNUe5nGLDSiCVnpDwJ3p59Md1h5K2jEbZa3rLukzxd572uV1eqEndKNvnEnbmitS8ibV",
  "key28": "37mqJorchmmz3GKqSLgT6zzhYnQ3p7SZcgMHPu2GoiU9TFLADhDeqZxgw1LFjuNUJwCSeqfBnV72Hocdeaum3CLi"
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
