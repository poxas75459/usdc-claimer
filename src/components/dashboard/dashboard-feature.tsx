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
    "2tsUkaU5ZX8wJ2TZa1QhfVaEsNqT9AJMkjg7Fc5uxi5T2TsgiYRyDnx7Jw2qCib7c779HP7qhzerWdQBx3om41BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UrBv2YGaaK4pxZuFDryTVD4cXHzaWkFrX3BgVbyBdmWWRRZu8dcFXFFE5CXDXUWe1vYAfcjzhHiqCkD4W5mKxUo",
  "key1": "4Dv4cf8G516AvSrKGc7X1kdWwTCvmoUBSBeSaEHnTWLUVvaTedHeJw3d72hVGGf6fFqPSmouVZwhxin41YggFC3K",
  "key2": "3NBoR7ns12kkMKYTmVXAzNyoF7fJCebUKE2UEuY9a1wUYvHkagbS8UsYxbHxq3epbguyk6G2RC5HjCECKcQJf9Xt",
  "key3": "4FUMoYeZStrtgZ4WgV2tYmHSBFxL4fBMWDjYAe1juGZrDeKL4cupU3og3PNEcBbC9GbQSV55t5m4TDsgtjCYpT4V",
  "key4": "X8siazmpwcVN75kG8sYSxm89iKW6YGTvgX6xcnUN4Eg3zBtdAXkXFHFb6n821D2mNrpdq3d9qEtewrqjhXwvGVs",
  "key5": "5MwXVosab1VXVnzJwbN5wSVWV298WP6H3aWMVqNosUmN3qgWE8P3pWEqNQse8GDUsBusDHRiMfP4FpivSCepG3qf",
  "key6": "YB7vgRWajM2KY71rdDPUB22og1oUH3c3sSe2oj3mVNXvQA3z8468DZ3fiYttQTTAGcS8n8nbb8MTMSNCvQkBKwj",
  "key7": "3qg5wUWwwY3XYKButiHRuqTds2DPQVMU4j5scDxKEtDwSHuRp45anJtcsavQHGGubgmywBCc7ENk6dvezfuG9yK9",
  "key8": "53k7daBACd4imKJpJuHmuDNoANPXFV9GWZ5Q1DD5ZmfohPu4iQcXH2HELhbDFgxXxwUBJjRXnsX7pSYjNAWnYRFh",
  "key9": "41KQWGTHKTGKjtuPAA8gwZ4DPopSiXdN8b8YQiPT4S7Lymf52JrXTS6ZTwYc757MLXpYAWLK8QBtzztrCXzPYgVj",
  "key10": "4unUASHAqeQrRGvt24JekKHtmt6GesynxWzCd1UpshJBxt7LBApFEsi8hati4Aa6QSwswmc6dufnfAY4dDEbF6uf",
  "key11": "2nCVANqdkPBYrcJNMeUKbozNzTboyYmGFiEZFK778hpeTzcPostCmnpNreMnF7kFRaEoBbXqd7fq7kthvpxwfZ42",
  "key12": "wzYfoE56YaMZeKZmefJbUZt14xe2K7swpg3DypGMNX3dPWpvY26sG3a91ZYhXayJUACEfXctQdA8d4gSjThbtqy",
  "key13": "4FANkMDaEmHQohBtp5s56hpkJT4bsEQYZMmi9WemnrtPu2VefeSYKGPkN2eY99rmkjbPQzpFQoLKVUTJfog5cjxR",
  "key14": "3guEKj8P9knE5Y6jPGiyiN7qcptuCKjNXbQ3X2iJa8pTeussfjBarmpqevbrqWZajE5DokJ9kfs3Eapza3GRmanN",
  "key15": "44hSryf9PGZSSG8d7tRXKhNRfdHKgtnXoXiXDmMgwCGfE16UdVmazMxErguL4FP3DKdZ2jef7DPqdpEzPGbeWYnW",
  "key16": "5jQocMpz4vRYoPauLYoSSHvA37mqP7NiJedy9CyAfyjehJJYDQ28cRpNwm9LnLt85Rv4M4qaBZxE7xZhE6jRxhx4",
  "key17": "4TZjQKNh1rSuzav62BRXXYBRHKdVcZAha2N5rS2FB6vfKWVsCexcBfHViDiHhK94NRYzNSkzXBhSJ6i9pnkVM14y",
  "key18": "5FdxaaYZbWyoPprFSLjLhYrz78z9md56gvGoVMsUWSfx9jNmzxNb8Vu4hYM7Tm6JSY24RvS3FB5Dwjoig4Yq8swF",
  "key19": "5o8TKuyFAKoXB3bhfc9eYcSqKA9S594rtzLm5GKfD7gWJfVjzaDp5YyiV6b6nE9hvYCndLKewP3M4ztq8fn1CdEt",
  "key20": "4VkXaJF6hyVZGvMKVXiNXZimEmDgeFCPYLsMEtG5CFvzNjbYiQsAE28KjfiysRtAaawh7M2FWYpkiJDDjTQJAg8z",
  "key21": "2eXh33zAfWu6nDEEd46y51KdtLyyVFtqZd9rnyki1u4QGTNVaZkUk1rKmPk97WMEHh1TFM2JHVdBjZV17vFUGLKj",
  "key22": "2msUT5ovUFM6Mzc7UjksmdqyPYkmPHosbBWzPoQQYo4jCzo91ULxuheA7xzR4HZwrDNjnra4PZ4tzJacJAtqpysN",
  "key23": "5drKEeJ163q763VyWrN4kYULdqM6qdvV17TnQTHpyXAXUaXkSosiYpKogifTiNrEUfo39iEhoG2r8pKaFBT9gnDy",
  "key24": "jCj2efAiGBZPbr2mrn4QE5VQQJ3ktkjmH7uXmp7j6TQRJeFBNFsiXA4zGkJHngdv25bN98g7D83kMc8CDGeLpga",
  "key25": "2rkv4VA9h3n8R6CV34n64vtcFpXNoJ7HLDiawXvPHKG8EpLeSAv65xJgUhGcGyJvD2qmno8gPx7YsxrSV5kr3HbK",
  "key26": "2gVc7pGp3FVyaXkTH5opBKgCBwPjPdPLLWhK2DkafvJvdU6TmKdSDQfWTY3MtmgYn4jMeqesXs2n5JUoTHie7SYx"
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
