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
    "3up9LvYkFW2ZPJHTF7i1safUPPw7QQKoE9vyPejHhDt66vmJYEkbBM7so4FP1XXARqJsXvCVBq3nUzYQbhj3MiLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QMRpvyzZ6YtP5JHpiRW3ekSdd1c2G13tn4f8hdM4ZP2pp4Y539pnUS7JpNRp3SZ1k8JLBk8mzAAu7w1E5824Xr2",
  "key1": "4y8n5SPFa6D7o5HBqp4SxFp4a2dJKhMoEKMgkHcmXWx6SpCyzoDQcLFk3AxLyJnxFdQGK1pVxjFVWozSn634q8N4",
  "key2": "4ZYmSyEwXwgSx4QBJ9K6q6iZNyHWLVh9M4DrHHUmmsc3Y4csS8Qq1C3jmtzTkv55JSHcUxVcDsYZxcU9w6YMYPUz",
  "key3": "2kXZ5hkGiajBAfxWzqbpKVRtzZAzCymdc5TNSu5YwyY7qSC3JDQvL9jSDySesZ16Nfnw4uPcC38teR1e6PGqUL4X",
  "key4": "3kzdavyKPkw1nENhcuzc2SS1Eq3bYq7DYX7CKuE814wjD7iQJTmWQyQKAGR3hiDLDMcpgLfVbdx7kLP1kXvHefGS",
  "key5": "4F4C8w4cX8fYgwqB4KYCT75BSoZWqVLnXvGaF2g6NvHb8EZiSK1YyBa7NVuRpfjG9URJiev1aDiau3JQfGBXvP8X",
  "key6": "3pVcdkZgaQSVw57Rky8NosWeeHPiDrfA2bzvzjKBWMkk5vVZ24C3NBEpj2N6a9VkQMvKR22BNu4a7gWYwTbMaBBu",
  "key7": "5jrC8EQz7zSm1hinuQySGydUa7TgLXKN71LiXAp7gs3JDfvfu4QPqWRGg1vxX8vPwnbPwZHiUkEZyvxxTg13dExx",
  "key8": "qd7s8AT1XhVbCQsvzN6XcD1puD5pdsS2nT1oJPmeZZquxCuiqZAMLEbychR1UoeQ3KKsVVvu6mXnCLjS3Uae82s",
  "key9": "5tj6hSzSduRebMXfmR7Ss7r3ptSSL5Tko84hwo7HkGCeDvqkJjSmicokC9CKvJGpiH4hrFjxQwTX4FCdC1ZKSmDv",
  "key10": "66f6b877aMud5LDx4eZ89dEuK4Qa3RNSFNu189gkqSShFANp4cTi8kGxiw8VTVGFLiVF9WuBGFTTceVtpdkAi9fP",
  "key11": "3qnbkisXqRjEMXzMZqa9fQxougG9e4H9FN2VUJEH4FUk8VQkFgS9hLRCwKBDEtw7C1ym8rsgz9TsT77WXXQ8WVvi",
  "key12": "2hMEdvQvzEjUu6Xm7RDLkkejoLejd9DX5g2qFCgThhkRzoCtrzogUKwfEMY5RPPXar7ewVd1548HVJHw1teJmKeX",
  "key13": "JNQzE2sPLumpxVuAsAbp8TiqGK8vdcLnzxHAyAuKKhHAfq9Km9TqKZypXS325yQZxibp5ktwH4z6DcfHuGAy8j5",
  "key14": "2SEESZvhktzPdUvmTuUcBadWPVguH8wWpohUMWJQKEp6Nqn5fZybr2LKZx1nrmmm52nTyojWKLkeTxGNjWt4QSgu",
  "key15": "2A2QfQQhs3aFBarKNuQzDK9k4CpcnWHACqFgVAKQocLLjL3BJTwd8Gtkad3eFLbXrUB5LSqSgiLjzhSG7ScawiE5",
  "key16": "4JLEuL5sAoPcj5EUea9ogXu8VCiYQdGZhuWaaSn71MNGS7Sfrzt5KAUEZ81vciQhPAYRyxpyPpCHWbjrYL5ggVwi",
  "key17": "3eGorUbibbzWy5SiF1bHMGK9DoP5w7u81SeyPMbooy1pycGbgipLSsmdFBNkwmVGp7pP42Diqdvs57feMMQuKnmR",
  "key18": "2CmPviri8iisYespK6hv9DWiYayGNiqBZVq5fnAyFKDcL6rwgsq8dXjFpPPjD598qwLvcsipUgtfRj1tRGWifUiz",
  "key19": "1FJp7QDSdePM62YzGPg31Uf4fZQbsTWQfmhsXN1eowKxZ6uYN8NK2gfRGhTAnoLpHR4LdJifTwUE9jvr2sikHWX",
  "key20": "2xeoAJWgYD2g6eAr143Ku45YbQutXmppEaRM1HuRBm5WXo2sbLkHqMHz9QHfGs4gzBrdndZF2JxBGd1g4t4BWxLT",
  "key21": "5anYj1exDGEtT6kZe2xiZW6wBR8YWrLwLNneZdHNuJ8nc3i6HSUteitBg7wjBuLtaTGUJgV6xHYoNVGJgPxTucSi",
  "key22": "4Guq6zq2Fobj15DLMrvMnMvTHp39g3eSfHgmLXuX1SesHW64aTHzx4TbuoLFugSnc93xMxzQuuCuTB12PrnsdHD2",
  "key23": "26Bs1xAVTbw8qv2pb6jydnMAbi7vMah4icBPj4i4yDP3H4n7VicWdxaad6PpeVYao8QB3npPtzqQ7ECFWvjmuqKR",
  "key24": "3oSutCeE1NM5AR2QWqisFQez9eoGqsEJwv1nnXUSzr3HzKhrGNmGkFUH5QW8q3FqtQEqMTRCWZ3E4wPSvxHt6Qve",
  "key25": "2ZVp8fqLts91EyopF6jKi6cuJyvdEAjbgtQaSs19epAZcz5yPT9icmGqceyLWfdDYwqHn2jQEekiMPghc64V1DrB"
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
