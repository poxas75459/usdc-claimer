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
    "23Qnu4y5oUQCqf81RGtM3xQC3FYKzB7SurP5hQvP2AhAxwMcb8hYmEFrsiKKDGN6m9JAUPosXJGUp5QQifhPMZ41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25GbLVJziedGWngKZkCVNZC3NF4iR7LdoVsTLMJ153n8XWaRsY3fL9QdqF7LMzWMDLVFw2a8Lh181FqKeh4mHvPn",
  "key1": "27XL2yZm3RfFgAKfbt6kusxuxbJJrLt34rp2Pr2xj1yua3icoPFSw7tZzcbAZxbXsjooWnDVYsKf9Be1X4Bobm8L",
  "key2": "41ZsApWPL3NwaKyS5xqLFFopLWSk7K3GXoZLqtF1HucSfwEurwsQHwxVgefscykqLuL9wqSNRuNbCi6Xnx9V8ugE",
  "key3": "5TDwLgmRqGQexCBt78aNDS1W1qfwFkucXDFpHcm48oFfyKEoVv7mvcDM3rHPGwoyGXHzfBfadjg6jW5GxfKwTZt3",
  "key4": "2Aoyj71AniG368aPu5gn8bHCwky7aLpMm9N36wY5MRaA1qNMQXSvJJ4dqFesstuCJ55XiUf96pkzsg2SU4kK9A8F",
  "key5": "2DgHuHVMpg5LJqpqwT8J9F44ru3KNHTxhPpKsdmvxk3ZsrxfVyPz58vXMNNJaTA1v6wsjRAehyVTeWi7PNBVp2zz",
  "key6": "59wCSJie3AyuBsfAtLT7YnTK8xWCUMY3uf9PVCC2nHnb3K2pBHsZ8ovK73JBJoPnwMpYWcJR19WEQZq2oFjFeZhZ",
  "key7": "2dPxVfH1gBaue7wLvfCaX6DdDRPVk5YRVGfRqMxguNU2SiCLFfpb6D5AAikz4Ftifz8PTNCtX8GB7GPEVoNqJ3bm",
  "key8": "5WsY3uDiqn9YdcSDm6ZGvTdQfFPcDjJg9rsbzmpjuHWCCtZmdr87jesRSuZf4e9YLnVQEC1WxpU3bw4cqPWrveQA",
  "key9": "wec4kQSbtGgoz2CVj3M3dWfKTTaq32XFyrfgvWBWpSxLrZpRctmJWWqVgigXKgn29jYMFMsiAAHBmw3iRSoMni1",
  "key10": "ucACFPh29zMjR3VsTMhBzthvdVedNRPLbamnXLL1hMTEZFCoD29rUFgbwKijoZvXGQBsxwBLD2to8TinDTcBLPB",
  "key11": "tyPw2pqmptTzUtnfp3uHhfyPktbFvhZoGhP4BT3PbAZkuAXYWLG6qkqqpPd4UqwTdSg2KFEHNbRY6ku5TbrdULG",
  "key12": "2JVHKJpFLYM1gr48ub5Mb6i2zMNLKb6G5Ey2Fpj4NghW8HsXhKa5ceXhY5sJxi7m9NhkUAKe1zmPZFDQq5Dfmejo",
  "key13": "3Pg3KUJGgGiZrcM8QhQCRCaSJTx2KWYdYy7HzUHG3U6j5xnqcQewgkCiTGcY5hYtp5EiPJsjXED8i8xjgNdqEnXV",
  "key14": "1vEhKGQcFWpgiEbvWzR2RfhnzGpAzKPv1XzfNaA7VMsXpJRKCPK3LG5WTM9BcTZDitBVb11nP9szdvGo1Xck5M9",
  "key15": "3uXJPsBgbJEN9nDVh37wWDDJJs6vfZcbFnPad1TwMY77p7cn9hiaqBzbzC91wKPqjGUv1E8w4ZvSrwaYXyATUnQH",
  "key16": "2qgSnVurjamhHpXYaJZPdqxJD9foG8oqQAY57SmzvwjtV431bS7xsoKnDPSiMRoLe1jRg5xWncyTVEaHoaWDMVvd",
  "key17": "3KG17gYZG3hpSCRacqybt7nj3zhxaP5a9SER5xfLWEprSpwpxYU6My9ZFt791EQGj8ctxvg7kK3bGLJBFvtFU5Eq",
  "key18": "3u3uADzUa3rukQMUdLgGguf7ABJ3WM2haFNL5YjRSVqeHS6K9oZcRRwkachidWS8bbhYSivR2gabRoT6DgNfYM5e",
  "key19": "4HCvX9gefGfej3dgePMh56yxfDDNQ9kCnX52e6o23Fs794KjGNATrDY37bsaY54bVNCYHWPkQz1QdBUT2jpTUVjB",
  "key20": "4ZBiv362HoqtEXpavJij5ri2Sq8skWkddzKCAH8UTtJ9BpLozY733FdnJzYhTRD4SNQnbh5GZB7fFJzGPHfQFvw2",
  "key21": "uKdbp9q7nQmMc2jtf8QZXcDHPwbncXxrY1GpUSSxQWcPTajUQnUxs9NvC3CyzZXhqikomoEYMKcH32mCjtSRphV",
  "key22": "5FsBvPtP1ezpX31oq2pci79m99ojnDuBAipSefafJ4h1XU5sGabUtcJSfLAaCtxT2cETXWfaDUhAdmjvwsu486xA",
  "key23": "21sjEH9fyuN5CrcbQhDRsNb9KGVEYmJbu3R8dFCBEEf4gKGQXAnMPSpQw82ebSL1deoK7mHRyVFmnoUaSQXJKFMW",
  "key24": "KJVk4SXCMwr2xhvpnR65QJNxB3r3MubkyTNCsCspdW9hDK1MMMCLBJUDJ2aF6Q96kae3SD8hqd89GvxPkn4GEbk",
  "key25": "Az2kvUq22vkgWFsoWcz4CxGjwcc6V2eKiRXwH39ZT6vkQrm6dP7sxXb1dnyxga5JFk9F3RaHDLy6CnAVQ36j5Cr",
  "key26": "jQzPXkpjz3Gj6nmJicAQC1JcTpbAbkjFtaLEgaXoZYkNbKBfnH3yjFonozA6NcmC8M8DPgbCrtFXMJfEXF6CUrN",
  "key27": "49kEgdFCx2ZtMeRztTuJk3yDemgdAk9m56ULbmVfo2SGAo3Q4EF2qX12cUNmNkoicZDXAwCGRuNsaN8fDhjDZaRa",
  "key28": "4wL8sYJ6jnvhAXQmWgnvwu8ua1uQZabdcnRrgwHS1dMjPvScEV5BnLPQjUTEAGd5FjrD3MBcUv8p2z8tLuPUpvRZ",
  "key29": "2GQucHfLsnGqKMRKzsZyPnQkA6KA1sn6hZoEbrzok6eJfWuCHSzLvWWWhidgL7MDbKSgxs25uWwawgsNo6J4vinK",
  "key30": "3rhUYYnQbrQU46eT5BrcC1fd4LD8WoKkVa9tjMt33b1K711ZBCEJv1YPxtaGNFL6Qjv63eTexLX9NzjzXnive2aW",
  "key31": "67aPMXxASN74woPgSHNsgp59se1MzMSf2AUu4WrRDEQ7MWfKEwTGfdAZor1Cnr33MpMqavJbMHr77ipewnsWV3JL",
  "key32": "3hfM7kyGLayK7MkbpeSrxugBnvPf3pekam5gNHL7Dyy7LMN7rfupLexBh6D3jrYVXugsyX5qriyV5K1eZQRNfXPf",
  "key33": "3LTWSUvUcf98b5QyEqogJK9RmJhGt7775f6E3EU1e1vXXubNbjN4VytA99kN2jzC1C5gMK94xe42Qn996Kqiq3Wn",
  "key34": "4At8CJy5gk6wuJNP8xZw5gQz6NpoovH2aRBW39LzwnQ8JkG81smckCPY2NdMCWh3Ecx6LCFp1gfrgVFH3tnhtSVm",
  "key35": "2f9SEaMFsEygBkJmgseBSjZGs941sQn9q4Z47ek9nBUMuPU5KkqQcCdSPcL6PceQrBxTT6VDrsTqgVcWLN7AHUE8",
  "key36": "1buwpsvg5et7uYdxZ8PDDHUVrPRAM24NcKjDpKaFuvMLVnL3LL7EjP1eB9a57yj6q7EmjYmzqHX59zRNbJCtxYw",
  "key37": "563HqGEG752FHR6Rd5GLYARovTduBTCfG4SuvjvQb1Tx3AuGevjGPrMSgHxykfLBRWEGmbk3e8mx4BHZ93zdoPpK",
  "key38": "5ZerFgbUFess4TUBCbWA9t4Z4E5znTGSMyZhXmvQd17jjWkDtHwhYjiCR4Af94hdPXrGJKtbQmt9Ka6oHxNhL4zu",
  "key39": "5cL2fBeQPVBXNbjrCiMAscdxXG9aucjSVfCP6n5qEaSyczDnwoqws2Qr49QgsndU7kpQHNoXzHa4NcSUAHvLw3Dr",
  "key40": "5vLUgHJRZwJP54AeZRwoqnLA9j5CCPJDjvS3gEmftTyPdpkrny15GkMab6YaEncDCaCydnqzBt6qUcZVQ7zXbiUk",
  "key41": "ZCQUfGQqZPZtmcSKeCx8JKQgZcazDvmkmtWMvzTsxxiUL4inz3i4rLaKAWPdNUgUsxTq99L8NbpNPfBhBWRV4eb"
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
