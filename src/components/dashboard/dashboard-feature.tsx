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
    "5MzBB7sNaoxZNcti6u5moSLkTsirw37YKA2sCknBVEgnyBcdws2gZrmQmbi9VP7uGgicpfE5m8HNu2jYnrMkHQVR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoockTMMTggKL24L25KKQcvw3CM1UGoUQEcTVwzAeNjQG2AVcVauj7gNS6BqhewM7pjayDfPN1CtztETNPfBrVT",
  "key1": "4R2kdM5wZz2wYjNT1CFPsf5NzBZpREpAcR5fc7oFmbRGynqcuSDHNCghjBk2HgytBiinKwSZPC4LC1LKX82CrB9B",
  "key2": "k1xADEn3YfzuoPnjKRcKWZt9BKGMnu53PpdKYvk8zsKejL5TZ56tyx7QXLRuRmJQxG5CFZt6CTU821e5e6p6x6x",
  "key3": "4FtYEjAKrZDef7A2x5AE9kNnVN9RHDhVCy6ckmvJHdSwx9Azpopc6BpNQ8d4SP7msFc547yFETaVyQPXsmoo5v1Y",
  "key4": "3k8uLnCtRVMWUHDkBpvJ9GFrPauKWcUJyizpmkxrui44oyvVTvN7iuEjUBwWtaBiE8ShUyRXD5JBffBY3bVZpGyF",
  "key5": "3GVs2fnwLsXtQ5u9czcXZJBDah4YQjpGemJUF7ihvAio51fBQTEaXfj23NiW766QUetnfFrcYRoPNriEXMKCWNod",
  "key6": "2an92oWCgjEaiaRBs5GRtkGLNXDd3KDapRFtfGyAeKK6qAu6HdcEPfFHjRxSoMNc9LSoGC76VutjPhcku44o3NkX",
  "key7": "2VWdRcQkBn4SsLB8xcLAykANSzAAobJJai4n4enc5rQUCNQoGarGJTy2xfwcFP8K7dFb7YAVMymQdyjn5DGi6zQD",
  "key8": "5sfmp8tFUwKm7wqVoEavDD6NPZewdkrVnTpLSaGmn1ubimhnihbWC8Ykxmamu9uJKAsBCP2gLZEXUfbGnF6ZGiV7",
  "key9": "4ecEygPXbUUgznSYAnU8eUbwkXT2KnsthtAc4oFHADT8x1NwrE8oTzjE2Ny5syDVb9fWbYc6ivkmsPVDMoSuDEUj",
  "key10": "5sTkkigrHA2wrzX58GU3WKJb5HRmrdhgktDK5E9K6b5RjEvzF3EgNQevtjUBbDpvoHTsiEQigcUNS1PNfQWJjAr7",
  "key11": "3QeaKFQKaD86ihwDya1YuLdKUXDPYzQ2DJwN21swHsmgjvKCgJ7a7hot5X7hZHnpEdpMVVpG26GhsSHDugr8NYp8",
  "key12": "3qm2ti4j4rKTJdtMmMPjfA5c8JE44JRMmVjprjqwCG2hrX243dfa52wCpQuci74C568AUUek3yVJfQx8dHn7Vh1Q",
  "key13": "5GxXD1uaiPVznKtfRZBya9fwNsLNSiBqsGVXKPYGTWSnjA6TgUeV3FCbPxumTPp25pRta54G82Qzy1N8dXT95Mzx",
  "key14": "5XyjzzusaaEhh251HvRmsuTPSQjgUkVgp6jvRH6BihSghtau8C2r9HKeUz5ozVRQK6SjNotS3ueRbf1MFq6x7awD",
  "key15": "3kWctdxKDAYGnhNRbGQ6kWVEy1V5Do68WuTpk8mQfgVCBYJ9fwwbLn3FPjEmq5Lsf9TEN2nT598FLWd5jjT8Q1KM",
  "key16": "32bdGvYPXSsTCCBm9pTknJuz1YDeYvcUvQ82mYUPWZMWvscFn5kYrpqPG57VLAMsKqAuHcoK1Mygm29yEzyRS83r",
  "key17": "26HgQhEneQPp4ssaJG8WsH2jncQqCGQhTGmMoAbrKTZemsWqwBfRzY3YW23PKuwyWUDETHVbQ2tZGRhvt4pgK8Qt",
  "key18": "5H1iuo7TvYqJnWEi8GbJzucN3KpeLnLTyttSyfwzXHV6u8jWgpzMgx267zvqStL1rfogMWHisoMqy9caBXaxTm5p",
  "key19": "3WaJDbNeM4KfRizKYsCWQjYftVBrj1oMRS6Z2bmYZgfiwWzdGG5N8ZDsjkYqVpqwDUJEARCVey6UZ1y4az17FzDz",
  "key20": "4inSvC1LG9k3vQfaJ62LwxThFETZD7UR3S5JgvgqzviDsCSSYEPneXmrdrK2vpsbq774SExuQr5trp2xYvfqtSt",
  "key21": "3LzQBZXHV38UFKu6BC4EhoezA1a9sgk9EMVyaPPsdcACTV4jjSLZ8ruqNQJ8CFWQXsUmf6ymHwzcm4S5vYW4nuis",
  "key22": "3NYyGdpgYDjf3RabYVfEL8Y2XuCdvsyguR4nrhdt5e4k8ABh7Us9tvrXZYemKDbU6jLoG9qnnXZQ1FBXeKtBFELa",
  "key23": "5od8yui6NCXxZXgHGaUNjC8pigU1HMVv7AzV8kGpVvPnnAxMjobZoPHvNgYMZgG3Gskfpw4fgMQhU5f6kUMoEoNm",
  "key24": "3jmWsWvU4HuDi8s9CrKSbXgGJREFoLQXf9jKyvAHQwaTaxsCnknaqoc1oV4mi6RUY3cP9UZLytvFaWKU7jvqc7ty",
  "key25": "3rGXtHbRYtj7iYrai4k91vEWHgqdJBCVfmcTMKUxKnzrcZ3Lv354Jnu8P6JbenXobHCEwCE1xH3p2dPr2z5CjHqt",
  "key26": "38doXVQtaxv9HMdv8agZeMQ47zGCzSatK8F1fCzY4aGL9rrLX9B1c2y3KVsFyLmqRFaTPShXRTquUgxRxQ8ixGMZ",
  "key27": "uArTAgHMo1ow3cfLXp5LiuAWPFhjsCztRTWoXftJrhMgu3yRNhhuoUATmKhxMtGK1zShiJV8teYiUwQfrmqk6Pn",
  "key28": "64aT48HAQXguL8LguM9KLR3nKWPqERmzsux9DZFQR8pf2vFTurpddk5RCXc4yEE5xbMU3UUX1yDuRmh33GXapVTZ",
  "key29": "2jqXybNommKe7Gd3q3AY1KzbxB2UYojHrSWaiTqEzPqrf1UVcmaUkH5izQKQqCybLdYhJguxMe1cAqjQf6eVvQC1",
  "key30": "XSNmGefNSwL9amLchJK9jNRJoUY9d8MFsMe5UZ3CtFcu3m1KzYg8uqKDWBvVVuV21Zfe4xxSwPiHeQ6eyTj5ZEf",
  "key31": "3CcgCt3xazxtMbaerKYV258FHvRqt2fUjAhXT3eMUKqx98oZ1MrofKoDLY5Rf2tEQXom6MC9amDe9n1f8sPJ4xc8",
  "key32": "4cW3f4PhrvHfGzQiREzGKX7eDopmqovhidxRPVzCQauoHqATEa17ycbfN5G4GL1wkgUeTSgGgvXF335ZiA3Qt2KA",
  "key33": "5KvGh6vggiuaL4cFCmDBtbTjdJcoFSps8iog5UTBqL2FQr5wNA5RkDFg5WCP6STdpaQTGrPguPiam4SXM7Df45sw",
  "key34": "uCr6mWCKrqWtpdxGvphKb7rVGonZVFaY67jnGCXnmAMtXsVjpyBneJizpnFRWC7TupBkuatwsnewt844Sve4BpM",
  "key35": "3drFUhBsD6R8wBEV2jmVVokz9tai9jb8t7KXRvxRV3kNgdxYQHuFq7T8MLy5v4cQnUi96KydMHhAE15DwaJ7iCc8",
  "key36": "28ZMtihXA3QWr9DE4Fr8ZQnAzH68kdrnsAjJtMWnWC2cT36C6g767JzbptZiFuvPSguvWbVm4iavrfBokwJKGDpw"
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
