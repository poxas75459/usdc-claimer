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
    "2UPszLB7412hBqg1jn45o9kpPavFrQNEnWdhvGc8BkEaLL4MeYJrYSye5jdaicb3vagVZwwCe7uvhZVYUo56aErC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpKQzZ3N1da75JiTrCkxA6MWPZFEgC4MpvuK3FheYZEN2wh2X2cpcN97xodGMnwNDoHHy6RhWKgMtss3StPwrNy",
  "key1": "RGQs8JdGWyE89p4k6cixHdehB6SBNDjZaXYisULgBTb2wDykgg13cFsF4uwZjMwHEnzCfBfhUUHAL8LHR3tuSYx",
  "key2": "3gwJT7D2Ww5aktuHGR6FMip3615fZJ7BTFv5ModDpQXGcWGnxUYkHkzr3R8VxW28ykmPdZchZ867mbMHX7RSSA6c",
  "key3": "3u2Yso2Rrsw8qB5DE7rhWJ8fyf7xuoviS9QZJcemqrB2DNyNdoH9eC51J2peRExdA9oa7s8XC2ALe35q2Jrkupsi",
  "key4": "gb5AUqnEqjVfF1f4Yx57B7wBJVC7EQonPFBP9rhLLTiQKYk62mFD4YvQfNUsGp1xq4CxocV6AXjvhdRuEsX2KJ6",
  "key5": "3Ygnsf35YJ4RWcdm2RLTbFNveiAhCQQHamFmebeCSC6u9r9H2oHoXSQgbvr7HJn6aD3iqPBf8x7Pm5s6n9gXNtr5",
  "key6": "3uu34jZWWhhuRfH47YmHymuPRcDQXgJv3f5vRjNbLcTth9xfY97CQboHvtUofteX4gu6eStFiFDJQ1GUZHJjgRci",
  "key7": "4Ayrmi3xYBS4TpLvsM3o7vHuqKAVSEW2LB7e9SAgiRrhCQscypRhXEif7JDD1jWsCcGnM6NpRVypgcZVYB3BDXJs",
  "key8": "sZKhsXaTDSZ6LgJkzcEwn96vsw9WS8u4hnZdPxNWtKREa65oiCvfZzA2RNa3eWtbQeom9XHgmkCudrP2iYTRieU",
  "key9": "5gnG3svBQEqiRW5HS6LScU55xupvWfUnh2fPiXkYUQx3J1pvkX6cAEWyFqYDHysoycwJQGFdGcLUZHy3vqZFjpj7",
  "key10": "49RxtVjccLEQqztrW53xLBa8pDptpRqeTuycwEuUuRP2WsuhBrVveiYu5QhQxMQ3yozPkC3on7TjuoPKeC9DhwBk",
  "key11": "23QfLYp6u9c4qYKJmLD6pfbdduhaKHqbHotnoxYq7Yet1q4NWH29zpBp9k42fza2p1fnphZetMpEXRfxR5NcYu71",
  "key12": "63AhF4kBRQ7yzqCRBU99N1FSC6ZbGRSY5QBNAWja7pJktAeQqGTrrd8NGr8EKg5a2dkyub6WYD7L1j7ZFgSiJPYv",
  "key13": "5C43sqfxa7bGTPGGJkVz9vk7P9LNwkPxq3vA9mFoQFkqxBpeYnchaN9AAVj1PKMVe2vDckqd66ySkgSZatgN18aV",
  "key14": "5ftwJhJRi1ejZEtMC45psrdMZoqXkudazPVUuGyg49oQcujzGz3D1E2Ck4v8yLEwfW5v4ZpgBKZnNZsVyvQuGwQC",
  "key15": "56BiEJK1cg7MiiSeZwzcgnqbjE759bfC9G4ZrQJCbPZghz3DavugQCwzRUQ36Wq9MikX4WPd4N6DKGFvQ8dY2iWt",
  "key16": "5mb7fU68rh6o85uUmgcNqXwa38SPdoFEJLQZQ1YyVoudkfTY3s7UinRpVkbnUKyHfJoJW9KQSx3Tpm7xM8jWKhqY",
  "key17": "5PnAgP9PJkNfV5D7prsGn8L75VLPArG3Wk5ixbsh3nTPhHjXCQzUvDoj9gNgx84yM4TbHJdrBQnQD2H2HweUuzQm",
  "key18": "GHxaaBMHRT63c15nAzTTsXPGwxV2B6CP28E6BhRGpziyRtSQBHzf2drffJ7yHJSzfnh5LYQXEH51343pe6rZR6g",
  "key19": "2syLoy6jhfWU8fRqZyGU96q34qSkmHPAiR5fzta3At16hPSHVDzv2NXrMfmw8CcULBK1d15WrbUyrJLg1a1agLWa",
  "key20": "2GEEdaK5PV5kBKMtYQrJ7KrT3QYXXBf5FFf5VXhZZSZw2cojHNcTAJGegxd2m4aubnK6Wu8eo76zF4EEPuHGu62T",
  "key21": "4NvKntQzTqVYAjnxZFzhnj9WcCtaoyeB4NNXd4sPwUjybSySzmJ8884KeeXboaXqjT6LA2rPJqiGg4VJSddTxoea",
  "key22": "5ptucD1fEyKJGWSVAJZmeVVoWKmrZy7MFVckVszqSZzHgRwMPokKsayJhm5SCW1eVHuYzSS19iJtF2pRiJ1JubQH",
  "key23": "3M2hkobdLm2Gbiaj6TNNEfoMYq997EVz7nR4NGaboNtk23vcGQLnC7UoFASb993bUy9U6BM2L3kShaAvA6RyeRm8",
  "key24": "4cS2GGSS7UT1t8J7rLLPkEQ3oZnjea6BuMpnPqLqNGbypVUcHv7dyk9tEZkKnpU5uzS5oFRHF1LfChyBYWTfF6aM",
  "key25": "4dvRxwrg5EfmFq1kMjyobvox2W8Q3f3vZgJQJcibe9wCibkBymMpVdocrRqJurVdrrMVp21etLdbS7dihjVicEDy"
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
