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
    "3dRmiZnD76WXQ8QWgPFhfB2MaBtf15YiCDi7XT7EtycNkas6NVbj9fYzrwZkQrn8qcQFr53ztGhknHHTEvasPR4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4So2MsB2JkYNXDPpnCMLBZyJrHCfvxPjWzDWCWnJa4faSQeTHDGe7JpwBxrEyL2y6DkDESw6F3mGAeTsViKn2tBq",
  "key1": "5jeK16zSSjPN7S7aDZEAj6j8Bv2fxwED3rb3BvypvMLs38V4whfotLznNWysHS3nsZCFEHnwkh2amimGKg484XaN",
  "key2": "38WRA7EuN7dgeCBbLJtaeP7Tf1WHoyWW8VPuJKic183BhpCti82kfN52NjfPhSCGwce37mLwz9tRKznF6VLyVNpe",
  "key3": "2uScNJSwnpiG358zTTKZ44Krbo1wQwqz3sMef3f2ETHSc43aLBjcRVrtGN3WndiFazZCLWNdfNczLADrRYMtp1th",
  "key4": "5BYsQ5yuKREfTLNYagmKqR6Q4vZaCT8x7tGobHnMwDWaXDhyUmChf23tRSHmmvaGfXYPUWskuz67bmQG1fei7H7",
  "key5": "32pLJEzmLb3DgrTcZUjpdNSg4qGkbiPudaDZjgUUrET6VA6B4hQzsuZdpKkNEDAXpJuj24cwaDcyspGTDmxmBtN8",
  "key6": "3NWap2122MKtJK7KXNWPBiNsFjSQTvhNDhrA7Wcm36kCR5vw8kHMZVtbofpGWgk3BDM4qNrgdFrfHfiSMdZpHDxF",
  "key7": "4Zf4FcwHqqfojhQ8nmBFVdbRM9p3vMasqLnUD3b1mabHGAJjHWeWqVuQ9udepFrNXuUVSGiiagZuJ5hnVERN7EjB",
  "key8": "JuaNkuJtNVZof5DwS8marK3HauHWYkmj2aChJvc1Pw6VnpJkXcgZkeyJXeNpt95gh4j2ypn5uLXW88cHbuR6Tr9",
  "key9": "3zTxx19wLLcaMrjgymDdS2YhcJwRQwj8GZTnamx1Aim8Ydtfd4PKMKDpX6cW4zAyEz9tyaUmPESsJKPQPoJNsFvT",
  "key10": "5CdfmSBXLLGHhWi5xAL4CU2jaEsXwKXu1kkomaHep7jsNz6MoESdLuGiJADVq1GbhtRJ1McncPMueAsQQMohDJNm",
  "key11": "52qWzAV4GxWGNdSDYKxVz7BrTqZneETpBpe88uML7exhMi1a9C84Rpy2AoMjeqyVkLj7heWASgwiyftdSYfBpHTY",
  "key12": "3VXM6L8Ybq8a9VwtHtVartpmMccDkSTvC9Q28Cj4GXhrYVf2PsFJCHWUY1hh78S63Ac7mim8tN4W3WrbSYxo2kCo",
  "key13": "5SprQSpdjVkUcNNbTRT9f9oVGGGKN6V54VPno7sax4V7vUpVBP5Hq2SuGHEb58wx2dRztHKv2i6rWmZ3aeEkXVAk",
  "key14": "39R6DUsLsJJTKvYib9AHdwWV7KBMD6VbUaxSWrp2JZpppnDiaBFBeNp1JggJhcNUeiLTFK57EAX8TMtbGbRBxch2",
  "key15": "3XVezX88gmRLyZWFi4dPZQUnLPRuYWC4So8HFzAMkxu7thmCVzDrAVj8ZSfTwBbGu7aGzNmE3BFJhejEhScFkLP1",
  "key16": "DKXKH3P5n56s6NnQZANE89ihceMtPYEgWtveuwgnB5MySMX4BY8qkywmvw1ox2E2r9rgS2rwDPG3RCjQxWdsriK",
  "key17": "XdnxZ65oMh4aoPEy3jYyhBUAMzsUEFgj7mZwQsNsVcAps5pqt9WDdpVaqxAkgM3Ttjvfbd1ko3VzA45nNiEkVti",
  "key18": "4fixx5HgAyZy8yfpXNSSh4NuobfCRHwcFkJ2UJbhfw9pTwvjuGJjQQfak757UKCZeQ6YSnhykjJJysJWSXVn7Qbi",
  "key19": "FRuSuhA5TiYxaLdeB51wY5kjGdjEnTXyHbzeHPcNMpVEt2MkzYt34ipYkDXrHwf7ABxgBgKbBxfLWzdMHTocTRJ",
  "key20": "2VP2MAJq9Y4JztGAU8VCqWwCVhuLydGU1cVsoh1W7h5e2zbt8fybkdS5pm74LVsXJbzWUFT1HsEPEhDVywfkPyBy",
  "key21": "8h4NbzXaAifx9TfyVP5GL5Bsxgv5Y4tfyio6j9n6a1G6J2BJ64Zyw8SpBa26CemqXiznYXAfq7uihLqStkpMUDe",
  "key22": "2muPNYs4dgirnNYHK56ByiuQND2ee6E5twiyRYHo38yc2A9LzLmUQ22ByhyEHwQtQwaawtHw3gzZsP8A9bXs2Ktc",
  "key23": "4qxXiouw36h6C7rZqtSfLBpfjDw6rt9LffEXi3KeTtz2TdXAjxB9aJ6H7L8jzcixjZkc48EmPRyssJfXRnhVhHit",
  "key24": "5tyvt5RnXLkuQqFUrScgtTyV6iLZw95bHgSiSfh2ndbuyGmsR9msMJyWwbR7XRtVgs7L4FDqVbA9gz5jCoGSkaNk",
  "key25": "5ffAP8QjmPxoc1M43YEhbLoRULnV5Y7tXjTzRrdo7267PM8n8bf7aGVbrWaQvz6dexacCLgbVuC3397jDZjsDX7m",
  "key26": "YBTzGDooTrPk5xfHWP32vGqmpgwGxg9GSfxnF7ALGhU8hDWW7NnTSktRDWsLgMDis7PX4RjqGQVwqTfwa2EdXtn",
  "key27": "4K63JfoCY77qEAL7X27BGHpfGGxiJ1bd7MKppRcQbKzRASA2jPuwBm74NH6pGZ6hr2kdYsy2yFRAaTL8ZYNaZS5F",
  "key28": "4Hg5HZZD8fGZve3ZRqJNcXPSoCGAvCyDg6WyG26FtXoTsJb6Tvg8F2jjKpiVcmcGwLi19V3EVnkqRXjSYMBRjs25",
  "key29": "4ffYxvBiFABJZitsyqKuc7yRh74Y9U2n1FGTEuBKv9GYsJ8hSBKRqxfG7r1kCtiJztTXZFC7hfoq6g48niVYTnNP",
  "key30": "i53G5gcjnR7ZEE6NXR8ByZfbi2iiK1skBNtMZ9by58Gq8eQKhFFTWaofyAg8RrBMuiK5xGGMm1NETtqShEQ8cmR",
  "key31": "48GLWYTGouQ9YiNQjaa47eT4XTNRKXDeSrDR6ELtYsV5uYy2xFS5HMzCCTmcB5rPQgZeWucBd893yxQz2E6pT8AK",
  "key32": "4DH7YxYboS42auU2XHMS4excKeeuvSBsGN4YBUZ2f7rQJzUsiFhHaB8XTMK95SH74Wn3FwS4wZfVYzZheEuM3Eqx",
  "key33": "2QbDMZYUQgvhCv9jB2iFGVM9TST8njacdwvPtTiiZujDzdjDEeebzWiqGTWgm5CqYwUeDsxN5rQ3LqJbckR6gDFC",
  "key34": "CH5ctNG1zvGse8eRJ7zoZR1dyBtFGPG5VMzrp4EaZM453MwKV9byBtqG2DJAmmsxqDjCCASKe9siVdRD5E3eNfo",
  "key35": "3XxgjWwo9tVJYKLqLYY9zVRHsG8zBUvsERFzx3jQxQwBipAynqDJ5nSXFkVZDJSpMJyStqe2G5EhTcWV21is9DzG",
  "key36": "29MBX3UHHaipoEQTYdQTuFHPDiXqhqs7y7pBYXxVPq1DTnTwu1btX2R33jftzJLm8DUWGaduiY8w3MXNqSdyNy5X",
  "key37": "eXb18dDeaAXigowLM7h4g7oEYFXY6iGMvKm9VGqDxNgXu94dTdFCprn8bfkvaMKujXZRHk5PBAmPdRnWiNaqeqK",
  "key38": "2FX5ya4HQiT3MF4ayynQwp7kwPznSXiHfJteeGLCs6VWivQPFZ3YT4VDwKmEFHE5HjgxHkMzrimqHgtWNPt6YSnn",
  "key39": "23PmsAZXkUsJee8FDJUAL3cQtgBTPnNSTbba5RNWSmjEc7A5c3NnAJNvK4U2addnp47tPQn9t8JVmaMheC2ZuK8x",
  "key40": "2d38PgVdRPBadenr9KdCZe4Uo2FEsuzmwDAXjLNtTWYtvwKuYoq89RRZixkcArFzgJTym4MTAwSb2ZSQYxv2EEzK",
  "key41": "22MNrgikFpxDLk77q7Sm2CSC2H5Cxd5Y37cKy7BuA33m3roDRReUpLy3qA3xyoDjo1rJqGBH3YnwJJHQxqSvEAek",
  "key42": "38WAQhkpDjxgyfMvEKWDUiDJuWyBhJf56QNHrsNQ7RueB17iMchGSQcUMGEmreN7Xr1sKwGgDqQx68mvd8BsiBoA",
  "key43": "2g2ixeP7yYz9PU8vX2D237NtZsPa8YPDzLZGBUdxiG8QKU8NtULRejMhvvnoFRbgQ4vhsVt6EzKyGgr3YnDkq6JY",
  "key44": "4jcoZomBxTrehBR9gHEo6qc2tgov24JRoCs6iDGVpaLg6vxxSYCM5TD8o21BzzbJUKofeSSoMEkt9vYCdQqC8qVQ",
  "key45": "24BnjH9gbAEiPDkiQPpJPca9ah1HCJ3sLhEBNqvEY4a5YRVYHyuB8yGsp4Xym6afQVNSxYBFHLASa9UGhKd8u7mz",
  "key46": "36tCRizxwzN4u8ViGswaGKiTcZtr6hbNgJeNwFLxFK3ChSDAzSYroYKT9i9TtyoWs4q6cyyVQbZ1nTEZLjfNwwjW",
  "key47": "4TRvG8BSjeXnCqnF6iMsrxKGUR7pSiRFjzgsbsfeCukspaeaWHCwNEkXMJDhNYR2CYSFfFd42KjKrd28Dvs46Zaz",
  "key48": "3w3ifcPKnTxcQg3ms5vLSxrhm86GvWvgvApwagH5ND8YQDeWcrmHkoBnJHgqCiZPxkAZkLq1VZvJmXTQJGpjU5r4",
  "key49": "34tDHGRpKd5FqK6WMoqkCGhBKxZkQnaQsGcZmPf2NPETLXnm8vmiL8nH6Ux4T7VnqJMTvghbUZanm77PGmLF4uXh"
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
