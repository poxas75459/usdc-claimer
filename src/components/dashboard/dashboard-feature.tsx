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
    "vR7U1rQWncsFGgTCRDDaWsnkd8rt8ri1ukgDc2XSJKKD7UyDBz2u9axgXptU2Qq1v3CjcYKd7iyEcrgLptFZ4HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkMeoMaeS6c3j2aprqR3BsJxyCGuKDvK4c7g5PZpmZT3rp1aoA15Dyr2LcR6tw2vA6aMdt8M3hsJ5w9qYfgFD6e",
  "key1": "VnsUhpfHZYoUbU5GzpUT1dYspQp4iWJow4Gxzan2qbiguZchUMqSMX2pKmDqyKiBbWWvDs4vCvPw9n6y9ZsKEhg",
  "key2": "5Cqpxc8VS7zQDRmSM3jak31aPVu2ddytejjSd1N97szcBCDHk1uz3y9X6FzzxNWqRfbUjqUAwH6kn6AZ1HQ4SPQK",
  "key3": "2zzLWMawCweS7VCoe5y4kooByJTXgFgJbDqkVu8bhMRC2dcvvF9DXXKpk6mrj3hhoaAhEVhEydVLZpXwdSUALmxJ",
  "key4": "vHm4SHeGbBBo36JxWa7fgan15cihFcSwhRx8fqXSMzF3kVy3hJkgfR9vQnPa2gMeeZB169eGLj4WRtbTLnxAdm4",
  "key5": "3j8i92Huw2AcjhFc9wgf7wah5K3tD8UvDt2uUTXoj8S1EyKe1A869HSPx2SdJ2QgkyrEkktR4wsmmzqbS4J7TSeP",
  "key6": "4vnsvXN2hyQK5tVRyUDeKTvCsBZdGs4Jt9JeaNd9WkqcPehvaQqFVidu9j5t4qeo27hiStdvojLJoJcVMYB9sXBZ",
  "key7": "525VZ9PXiJKAMvS8g11W5XqKUoeJX12qaFakSjQ3jXMBRFhVP7BjgkAgTfbteERLBzZNLpcdyJG2xanZGSEbmTPR",
  "key8": "2cRxqDLnukaiRZWQHP3DDDNGyWNUrCQSN12uvrQt1Z5Fa8xWDtYjnEbh528M6zKsXKzZbRmfeRUdsngybfMG3Z8d",
  "key9": "5LThbZDzv1AYBMNfdkonVD842wCGXx2YtDQf94rH3ftmuMfuepjJ9BdfpSJj57FUryGx2Txm7nvPFMbvKSgyUfsL",
  "key10": "5XKB58y3Tjnn2U5a5DxwTRRKkAzaTcU7oeLXwpNcMgDQW6oiWsu9AQp4CTZNtWjThNFoqhbdp4KpBQAxibu1TBTX",
  "key11": "26yMLVUazC688eY35jANMu9WmD5ujM9pdkVK9PUym7D1gvCX4wz2hBdPf42m17dyBFSKxDfNAqHFuaoPcD8xDen9",
  "key12": "2KDcqTFWHnTKrfHMfifcEi1WkXveJgEy45Y8fTEPwna5kgtjRaiiUxgmyCMk1yxEAx2Ln66JrAzdogNmRBHcn7LS",
  "key13": "5PrHPnydBPESN5HabsjxjXsPsksTbmgbb8xS9RnmKXdf6A6Pbu4yCwTkzmLRPy657PtpUUWYur9SFyGBb1R93zSP",
  "key14": "3bs8R4gttTwwuwBXsL8EjGiWwaMiGomtFURMrf6ceUDQVCoVoftR3gAwAdSqDgczqyHa79xsEYg7Lju7B4RpjuY",
  "key15": "2rHCukvz4bjaK5J1R8Ma9ncLoRWH2g8tixbxKD1J963sDDKLFvgVDF1t23hDX93zUZKeq5bRSfDrEn8spwbrUe3w",
  "key16": "5zrjNaJrUk2hQm9F6d1kDcNu92r25G9AnGLghhUqXtp3ujop89kUj9p8uTQB3JgFpLkvQ3j6xc56muCkq2m9yyWt",
  "key17": "2SQhrysTuK5EopuFPQLhahxxPUvFo6BuFCdkSmwRM18FSLA4yrxVUs8VZZphQkgWrBLBgsLxD6u3EFHythZQjVx7",
  "key18": "rMpzn4eTP2gmniydPeSjTkomw3xzdfPWZSPSHn2E6aXxLQRYQbeLh3mihjqTsePspbrB6Cy5G8GMuJfY1SYkAVs",
  "key19": "3uwfxyPVAk52BYd3fsJd4Ltrz9SnjehkFCjmmU34pfqgCDhdVmQc8Z1rJhB6srxfa3rFV7imjkPcLouiizqnjKqx",
  "key20": "2c6dVpWUDvYKzGR3vhQDj9H93x78h6suo8qeN9nHgjaYMikmN4YprHZFqCottYxkDSyX1MDcMmDhYsGUe8iR617T",
  "key21": "4XuHbGzKr1HnBCwypE2KgzkspNNr4xCewsTntqaAfdniDyyUgScDq5PQxgoSeWVpC9PcezorSZcxiYN6ZPJLbHMt",
  "key22": "a98tnTRWEk1JbMSppsS5bj8KwB1C7Mjnjvdc54BwbEV3tPVpecMusVDaqb7C4ZYyNyyp1naYygWHdPNDahLJYL8",
  "key23": "2srza85xUXiNcSxJaUfFJZkCDfD2V17UHaM8ZNK4ZfrPX8FLP2r7huRDoYPxQBTqwPrn8SE1ugyFbWVtKJZ7ubNi",
  "key24": "2wwWcMtj4AY1AQsSbQLriZsKFdh2ocxuRHKzbtbjUBbHXYPHNqpXGHTsZHdDgiMY1AYuRknA1Kpe3XrPDmAMchQv",
  "key25": "67HawLqpLz24C3PuecKRm9zTM75SqPtkipBAQRYR54RifwSuPEsWrvRQe2w5fbXSb17m4LoXFUEevMZwyKZ7FZHN"
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
