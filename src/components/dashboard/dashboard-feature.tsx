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
    "4r6DkwFsaUVUftnpGNmBPioQXZcz1yV9Ba7DY5anCrPyQXbNEmMAqXE4ZynBwRDqB5zjSk3t66YchpAhHChs1bc5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dbpM7bbLYbUmUoB7hfd3eS8zwcGLQPwciydypxQH5aJcUJGsv8jwGCw1NUVXQoVXGQUfQsffRyagfNsvvS168ed",
  "key1": "2EgiHBsaiQWmZX3xUuZWRDa3k3JLG6G1K8C1X8SmosN77u7N64EJCMaS1Yg14FW4d6S4cbg7Huyb3rAS4M3W2m73",
  "key2": "3gyAeP1Kkf9fYmNFnKPFdfqa7rqU3JF5Jc1SmDDnqBynKxtoekRq7KADgAd1AsKnPGhK7JfoKExCQLYDE7tmr5Xb",
  "key3": "5EFPVRNTHiZ3NmqmBLnPiCVexyTVpJzCafghLeopxvGEGEsb9bhN2FQycUbUN4gGWqoez3QMp52jD4DmJfSCTZmK",
  "key4": "2mWMNqvBSYxExZy8FTNXsVqsi3j2cK4t6Lcd9KJMpgZ4aBme6oYhGcP9A6arHoNu9LUr1TdzC9csMqcvfzVYn9jt",
  "key5": "3T8HQPf4bQ1xtsbj5udA949LwTPxKWaDdGphvCGAr97b6tT5VCmhYfDGL3hZ3yswWzhbNoYhw4fH5qF3NGqm8fUq",
  "key6": "4PoSC1Z7uQCiPEGNb5iM4fRPTFZqivG8DKVbvRUixWWbF4pJfjujgtpwkVpfsXPYKXowjNEQJBaXtHDyAZzTZdv3",
  "key7": "3GUX8aPCa8pBtqkZjFuuWk6eeiefsfqkZhxj2JZ9Z8uHxRNziFyfaH3iDaDspSLCPFXL7xUJvGWRYKfU1pkQewMc",
  "key8": "273zEeoGavt56F9t38AFhLhPYx1xVfZtfyUBPdGLeBhHuqfiT6g8LNX4gprmvwH3tSdW9TFpuUj7mxNbKd6p7QYV",
  "key9": "4BV9Xq9jiWLmhSgeAvkmrB3amVfBoceobSsfUnk9JR9dmSXYiorfa9d4NTBRg8nZj2h8KuFqxn6drvtJCtLVjo52",
  "key10": "TwQAghU7gWDaPn39UjbXBRHYXZ24hiuMGy79h8Hmx2kwHpi7xz6kjFdNCP1rSPLmmgi1NuVSFi6NeZSNZrtSzNg",
  "key11": "5E5CEMqNwbnGfVewhFF8a3dJS9AwvwzmAySPtcTVCUP9JYc3cTYNkhia6APVQEsTVcExJsKzJT5Z3cPvLcBmeYQY",
  "key12": "3M4R2UM9MLtcbBE1WMhqManbjjNs9HagrtU2vbMiW6a52rPSWaPzVK2BcRVZwx16XbCKeo9qYKMhd1Hk5vPJZQ56",
  "key13": "zoDhYxdxT1TG1nLm3z7uiyvaWgw5cGNn7R9t66NpN9DaK2xRFeArdq2VhiJBya6qqTkVfPcEQYNC9fk9mNmsiD2",
  "key14": "3m8hHrbXVhycqNEWzw72vjvHxrVuYVeXkLj7Xcr2V97NpNTCfh3MfeXDNeQ4ji3xuFzAfWB7rYX6UpzT1adgZFR7",
  "key15": "3JSesvEKPufNycnMUVDNhjhBy3unm83owyhFpmCXeLdMSC6ENWXrPNLKHRcvsZE19DfRZfq6zGmL6g6Wo1DTNHJ5",
  "key16": "sUThtMozv9yBiQChSNKSgUYpUMauJzQWtReNrDtLVgJZs4AmHStdafcghmKszFsBHptS9AmY1Y7UA4j8uMo1cvk",
  "key17": "5EQXj66SxJ7G67se2Rbsfu2CM3kGdqYj7TEQcS7VchWX81oqVHBpFbroagn3qyJZD9QzfAqYkMY7panF1pgXgBD1",
  "key18": "4ypshWAXDMLPY7gVBr1YwsfQnimUJJaAL8xdCYgHg6NAp9m3bPy6W6AxFsjhwXuD99JfppTJPt3UfXZfFrrAfpaZ",
  "key19": "5dipedSbWqqQp2a35BR4tfQBa5Z7eYCJF2qGy7vcKiK6auKRAf77rY7q6FPU4wqBBuMo97XqN1ooWCrPsWp1MoFU",
  "key20": "2aG7bbp6MpcLHuCCv7T3T66Ec9yPXbwg6m9QXdMyg23c9pQhb5mPzJYx9oqPcbicoJr6FB9BfbrfnCXLESEj68He",
  "key21": "6AS1vSBG8W2oR7P6NxXeRDVkjcqzzTKrTZotLGqe52dpKTFDkfBrkukv4kSnrsn2p4UeNop3Hyig9RBLa7Zm7hY",
  "key22": "5g5BfgJKXisxToqxzioSugJ7TedUyfHMzfwacVsVTYeF3QHC6SWTpUyw7gBhXDTUXda6FSBfyujFDBhJu6LjHLDA",
  "key23": "CMMvGre5cb88usppVxqZ3ZpRXVt4hJ5YJ5Qhso17t54eSPd6hUyt3g5FVtYCbS8K99YFQ8YvwqSxmi9DRwuBUJV",
  "key24": "5CHGMhZvQ3ipmEe9sUrgcKb43AuyLj5CPW27ijHB9MYbfqS1irr1sRJF6dEHNPGiB7bctyaZ9hjDrdZXN8oagiH6",
  "key25": "4qujynKBPCgyMFXu5fHmFZiRwsWrtnoMH3XLApFvDFNJRNNrEKW4PKGweQaMMQw6kp3JuqKdoxDRQfHy2e37ugye",
  "key26": "2e33MW2SQWurdLvkAe2ibDLRSjefGACKLCGrAYJwuxFk7NCnraf4pS7g4YRvZS85bmzDBR8HCcV9KrsnkUN9hftK",
  "key27": "65zXGMMQdqkY7g3Hs1UrVzpnz7irTGFQcXUB91g7ANiKTEwcXJm7LrE1FnLX1gPfxiZaA2yFpxWvxntnDhsCk1VU",
  "key28": "5cVajFgTmpFfn1y3vHp2zimJeS5qTPSkCamJHPEkE1psWJDUomkXphqUVhpJd7Ywn4oKCC9eZdQLDm4mNtAzTjGx",
  "key29": "depHevXe5yHrpeVtM9kr1SctEuMhpy56WkenNFjA4rzBEn82fmQRBxFBzpb4xWo8j4uAmdYTpuQX6w4YhVohZ1a",
  "key30": "3mHFiFPHUb5GY8uy7gZxeJECuWMxRtf3tBR46QbhsyuYv6wvRaNdL8BjUPFgSsPeevbHoc6VnnnYAz45xWoFYe2b"
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
