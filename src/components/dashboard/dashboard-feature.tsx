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
    "33LgkPiNvmRTRqJw7MzfyYJvPWNcnfcJghkszjjvjekRqV6aSmRzu3h7FtRvm8kZGcedojVNeFdYEZbtug2VCjjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yCNteGWK8WmPZvnaYmnKHFDzRmUtGSTvXq4VR8mJC7tW3DxSEzbExRttbBAnsytdvZ4GwKYime7XGudTvDfB8ip",
  "key1": "4oMT52Lb4ykdwukd9wekeAdmMyL5gtbJJKFo6mtrxNrMVnTFsX9nWfB8ruayATVdgBPZ2uh5ZXLVbhrp3Crt3gr8",
  "key2": "5ShM5EjwWDg4wSRHyiSJp5VDGXjdBeAKofgaHga1p2CjEZ6PYY29fSq9jZciN4MGxUUMe6TkVED8amgUQ16sb3Yf",
  "key3": "5wXR1w6DpjYcJ3PzhBAbgEbJKTtCyWdFZopShrvfDGrx4CKEDE1GAQuC9PHxC7Qn5u6nREtXQZA4uiJLZXpxGM9V",
  "key4": "2bzdm5iHML9txypAKkMh6QbGcFv8bYz4vrUN1A8sTVqascncfN6Uq5FdXffMz8uANZEDLSB4Jv5NnSNnYq59Ncpk",
  "key5": "3LCvuRH8yWTvvE8m2tf6S1YW4PkZDpLaUQdGTPEHJrRsorgwocjBAvkGd6NQbBG5wpGpbFLWcQUUemoMsX1rWKp6",
  "key6": "LrtnFXKJv3DTHapYAoau9MitShRLGD9nf3ytXX56knfv1hfoCQNK6YZYiiU11S4X9L7osnqyq8y6Ffqb4ZiyPVE",
  "key7": "ZKqs5aiWdB4ZZfzeS2FLzS1QArVV1odHYkaqSUr16xcbLtMtokomiADDmjhxBSfTugZeEkBn3M2UgxzRZ98vDM3",
  "key8": "VtbZte9ydmgkq9rwGYr8WiSUSqCgL1DXzPTPDTVBjawkB81YJJqS9gzAEeXGgHDXDbhu7rd79AvSWhcLnf9wAAr",
  "key9": "2eR7sHTDcDnGZcvLzrUCKjMyCzVWVSEDbagcrQTbBfJ6wX1RmcKKNRWUuA5wbLpv138a4zQyTR2C2zw2BuS9qvJf",
  "key10": "5ZfPiVSk56NMxpvKzUx3GGEL2n8b4ygfRXkw83V54k2ZEjGx7AomqodVtVDBXBhjn4XYQGpGUJzKmrCHdrjEFPfa",
  "key11": "hnfBijzRbK3VGw65stKtmvEcuV58TRYSNEgq5KGAWJWm4Xx14byNUZGfHfHQ1353tHGw21xkWfvTp7g2nNtYhhn",
  "key12": "4THqqrrdsFH6sy9feDzVzxJczKziQRWWKJKa6sVjix7soDvXj5vUwBGJE7egk9nMGA4ALu75Urpe1Vo4rJJGDZSc",
  "key13": "4bstRJvt5LzeXkgmBn8cN91TKjuXLU2cJzwwqDDH18H8Qaodxzuqf17qRKyKfEUaFbLRP7FybKJ226StYwXnvg5r",
  "key14": "2W6stnyYKMrD3RTs6K5Lhge5ahnVcSr2uy5CUQ8Gw2TD3Cyy7MbyTXPm24zaF66tPd2s3cFyF3xFCDaSQ78ZMC9m",
  "key15": "4V1SYd4EqEJoLdGC6q8AKzKDdAqW7wqEZMXRUBBKYoigPQJQpk6gqUQaJdTHpsd4uP8WrnPLCGeRavxNf3wJQzSn",
  "key16": "42pRGDM6NXBKAcjnXCuwbERFFkqeC4jtTnEPnMKYuXS77zws1afD4GVR5f4jDVNFNtmmBYFdz5tboqSApNi5EK9e",
  "key17": "3emD4qe2f7FZTqgvh4ADQNpzCSA1Xnw2AfLerKtZZTcW2Ayz3B8XdZ72PhtW4dNFYGhHRqQDUnHKKBMNrpeUXtaR",
  "key18": "4i6c3dVZMbc1ZA7dx7snSVv2FPoT2WBNJNP95FkAcGfK2e43HcqkSF2PaxCD43VXWvwPQ96kMCrWaeLhVZ5zDjc8",
  "key19": "S4DNCSvC6AuZR4aVaRT3y83CqSbZEhF4Vb2pMuRkutvsw9akdUfSudz7nivmzYxiEHnnnoS7F3i8k1eib7Ydi5a",
  "key20": "CKytDRmtWG6Q1Nff946KeaZ9XFyiJYnED17QRxMqB4arnYaagd1pcFjUvcHDRUMHfb9iG58YBKrAFhfs6Vx8mdU",
  "key21": "awMSCDNSav68Uk1ua9FLrP5ApU1U2LtJUQbim1aj37Cv5GsuBxJZgrzxjKx7KzBdB2wmeGiYkWyf3TeskyHe1d4",
  "key22": "59xVGPZjmgvmCAceb2mz7kmtdbxoSWwmiRcgVeaqxfRqC1yYFD112nRSfvErB7kXmPatgLGee74bmfa3qErEkRXb",
  "key23": "3JB8vukx7bkMUHt1pb4XT2PQxoLCcLAfQv26PKuoDBPcgL8kBpSNyUpzxz8PLdXyQqsVMJXFU8qS7L523vNnzwJs",
  "key24": "5DJSznJKSgdoKqWZygJj6jLE2oyTz2soHz9vWz7HEjTTvddhMiQTxd9mbsfAdQs6HcPRJzHvJKmxVMKWxe1HVHoK"
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
