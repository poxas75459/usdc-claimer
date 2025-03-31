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
    "2hAyCa98knWfF8JnMaJwsNvJFZLmym5zDmMV7shyKAMnEMb2U2B7BhMSMf1rJjNiqiWGgSB9wCxHWRpfTU4pDK1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pM1jTMBrVKagkKHgo7i7tV5PRgtpxSRrUZJhpXnoLC619nUfVSUuD96o4spdSSjgrhXTNYuBeXpzivfWNdFpoQR",
  "key1": "33whc4dDhL88CFKFAp2vxw2XCqMaJcRkGbbjDn54KGUdsUrfco82aYfSoyAK1VGPW3BpCknRkeqoJysTstrf2Kz5",
  "key2": "3xZbwn5bMqemG5oTaHqrdpx2Vpj96cHt8en1gjuoJGyhoMGpbixEwanbZzAWMVKUiqjPAJy6k6YEUN9AcQcxkx8a",
  "key3": "2e9ShqDwehDW1Rrmci5d3shoJtTRumoGFNtcmqgRWt52Rq7QQ7CXRuFJXJj9eyRcBvdCfvQsv7Dpv9zfdd2Gh8em",
  "key4": "65ouJze3WVJNDJjM4oDNQ3sRE9HWh2e7D7xNzsJPsvKpGtWDnyn44zB5ZNVQBiaqveRYpxhiRTixEhXFeh4ijbdn",
  "key5": "46KepUaduTWGMRmhnaQR4PfVo4cPHAFahZB2zzzdyRmCi88R9dCLXYxCMDcr6yJBWDW8XVCAGH8QKBnVBKnmDZ9d",
  "key6": "DRM6XXwCikHtbmSApk1J41H52rQv9A23yvYxt4E7vPSnEctC1jRp2ghs1itfQdwJ68pqS1xCzi8GAu2C3JBZ12W",
  "key7": "5VmpoBrPetZcy5fGVDWaJfDN4nAd4EKJYQ1n9QCW3eHCYKXRYWaxqdpFuuvQrArYR9VnhacP7jz9X6jTPirBBsUx",
  "key8": "3MkS5fbhiJVvdBaWRQ3aXQzHeKodWtGtJPVWsXDJgVFXAVPM9qCp7RyKgPZjjonofnQWRvAuLyiwTY6JNqediNsQ",
  "key9": "b664M2kdFuvLZHjBqMyjZvY5YHcnQGLDJfXALZW3sQRoWAYCmQKaZ1nD1FbEHuGveifzNoTikmVJAyaTYfqBgVV",
  "key10": "4nJ6Hv7c6fYqrARYk4etDZiMJ6YahLBpSajMM3UKEqHNkdBb4xHNC6iE2Sy7wqPskz9FNVjPhxXGVnkGWxnsAYPK",
  "key11": "55xagHzCuB5zqrrcc4qeRPEaYVtubrGviDZ9HbHrMzubUeq5wHXZcRQf7X1aWrcxi8XrpPaBNWq3oLWeRLpCq6gx",
  "key12": "4SiSPwSxr71QX2gn8kkbUkngrCZh6GpCpQJVQaAbEkGpaixBAswEUFg72jWSTVqzMqYD36yWMCoFPhegtifCuZa1",
  "key13": "66kkA181Qes81R3B7FEvqkbCCx9PAxDk8xiVKn25rebnmPkQ7NPCmbChTdwBNxiNXMsMX89e8haZUwwnM4DswvCs",
  "key14": "2zje2tQgGSXfwHm6c17FfMjTE9X94uH3Vtj6F17T7yskw5MwBNoUPub4PKkiLARw4gjtCbKmkttrnqjPGDfXCG2g",
  "key15": "4QYPkaffxa7c3fh7jc9CUk3ssZfWYpy8K6nBDJjjmu3JizRmmFCSuDAdpqbg4E97v842NWHRwWTBft12aAZppMS7",
  "key16": "5v9t2NdWEYFJpNNAT3VmNU46CpKLgfTKHsAsuqUcjPecT6TEJkEbHy8Dnr1KQBJisNgXe9p9gHdqD1ZYwxhDU1wp",
  "key17": "5172cUDAPFgJ7qgn32Sr2QVC1vs4rGiwrkkKERKtEcAE2xXGup79C9taNHsj8KU3d4NWvmE6zgnETWzPE4rG8mzH",
  "key18": "2bLiqfvPPMENNhitovA2CnL4Q8i57V4FAUPz4f2JHMTHdxX8R3p88uzrJMUtTjgGX9Mp4CMWsrEYcgxBm1L6hUKe",
  "key19": "5h1v5p2z4bNgGdg3UpZin7iX1JK6j9sFsG1YaywNQqFgZwp4aCFkSUC7J1yV12HGT81gX8n5peM9B5zAQ5U74UGz",
  "key20": "55JEcWKjtY8bJTxQ97NxBpA43MmBuWx6Um7RyXyJq76Gaq3DqfAmSpBKF8h7u6SARjyyqMkECDG3jFCiBVt52Vhm",
  "key21": "28nbq4oYcBpkFcxtpofkJrysPHmFiCJG9Jmb3Uj2MAB2PzqrjXQEsEZwAfBKivZPzoCAMdLNgFTHXuNjUuCuPBG6",
  "key22": "262kE2XBASpxRA9rgtsy7SfKyU4AKDBkVNmL92NoKcehPTx6MBQoRM7bLSVh4eCoo64T21xtK2fS9Ab3SZbQyJw6",
  "key23": "4HythspyRNMhaej7qfadPwTMzNmniFNj3NwW4kARQsW4AiD4GUJC86xe1Q2BchFewF7FwqTmauffzmMEzkDVLJJ8",
  "key24": "2GHWCkXZuqRrB7YHLGqQhK9vud59k7BHWtZyLWKzynpfSsoHc3wafGVxmMJKu6pFjs7pGC1FdNjSMZTpmHJezBi5",
  "key25": "5YG6ABNprqnp3pH3BjqYE48MudttwtLragv6SL8MRjXE1KjAEnG6rZPPCyqxJx2QS8P387dLRTDhVHnRwZ85QcNP",
  "key26": "tW7TpHC5zPF5iBxp1r1KMAaCjKsj6cn3qTGk2PNpKUDvcG7FWhCy92KtmLPWMcZV7a5EYvLFhoKbrDrP6G4xKCe"
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
