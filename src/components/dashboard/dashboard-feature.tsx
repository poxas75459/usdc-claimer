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
    "5WqjP9XKuMqD2cgg7enBdHfik6XoogAbp5wVchDDCPpkuDRF5nM6H9F4LVWxLB4r2EC2LFvqop821akPrppE1sjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dNhKnGMVGLGMA9wCpVVp11gXtSZtEPJREvqApGFWDDh3ScKsYjvEAaCh1btThv9okPkPrucAc7j3tUHUp1U6asq",
  "key1": "5quknmfPDmfqtzrRg3oncpVkCRtfmZLvcu88wA9xi7JLVieEQRB1mcn4NJJBUjPNZ3KxWNBwBAy9EQ4TWURgydDR",
  "key2": "psgU6LdCtz1HJ9fCDs4NVQxWzeeDmA61BhDwU13gPLhWm4MskQjVpqoX46xWtxAHyj3sioPBSskpDgRSKXc6viE",
  "key3": "5zhR5XYYQHBeer3JLoFDGKDANnH29WkA1rM33Lxp47SRQoybWBzQKohYYpdUK3nn4DsoJd1kWRiUV4A3tUAykED9",
  "key4": "4nJ44BicWbsMcopbLtsxcBD2td27LZkbi24SUfopZaaQCM9PjDFMzXcmz6XiqpcK53VNXvSXyxQeNdvijs9oWRTH",
  "key5": "5nvrifeK6iDN7pqr4oGHchDfRu5WgTHUE6aZ58s4Beuzg9MZyLyUD2Q5r5NDL8qQ6BTdneKiVSQwH6a4BJ6W9RMv",
  "key6": "5sZ6NTXr95LwbmH3GTLj3vAjLWx5maTEkBycR1BcPnnToEvYB1rVT7g9wxY4xNCHLZzmGRFxxtQ9MGdnut2VhNgM",
  "key7": "5DX5j66uv1bPB9JreWF8HprDGm8xCGJDXqVrFS6F3nhysDv7Qx6sRpUKjEYoiRYmDzDLfhwQdMfqaL56ALHzVLwP",
  "key8": "3dv2yWUaB1TXSppcY3VLqWBsqZARPdZnLX3j2pEy6ZFfwMrgmqRts8gjw4tF8r7kYYSrKsRmi8ofdBAWqn376QuB",
  "key9": "4rjceFbHfsneUXr49dinfHPHzPRPufKW65gLvDcif3EohmMYiHQrm9vwadZgTgeBAGEJHRmn3DhcKAvqPxVPma9g",
  "key10": "51GphC6ZhdxYxuzBNtgbSAgkQ6SDJRDtp9vgq4hy5sA8wVYmfAue4GwzcZ3YsNKqnC97zoyRjZdBL2KvEF7h6AAa",
  "key11": "3yMi1kjy67JDR1fAF46oUy8uk81e1hrWqAjhsVHCkiRSQCpadYprqwfPjkTXp6X8xE1oXPQE3tSY1yQnXtX8Eyqy",
  "key12": "4PmcAzGEvjkFJEwuL1gbVd3RVHSn2i27KpQLbjXEvLrcc17YTfjRL8KEgQGiWbJLys5jPkoKsnCCE6ShJpourRym",
  "key13": "5CXQs9GcX12jaMuqp1XSuNihaScitwVCys21Q2f4vxcuh97AvjnLF2pvV4E1D9qobhLGpQ1n3347Dg8Sz2eUJ15c",
  "key14": "2HF8RWDdxcyMBtw1y9ifPf79LkNZMWsXbiJnR7frZPDZ4cjBkDHuTbyYHNFGZExnKXTdPnZXwCKM4NeXM2kZHh6T",
  "key15": "VHzqWvgKLKto9iGT9f98QBdvA5h5KvWEGZzcWTrEz2UH7ETevPpnzpNAP3nGAuf1FW3gz6a27NgjzUMiEcbuUc4",
  "key16": "9iZFucTE8J8JS4EQNAJD9doQXcXLsjGoGcKba8QF6Sidr4nm8k8spZgmJYeMNucyESLkQWKVmy9AnVKYkufzJKS",
  "key17": "3pjSntXdXrVQqfftUR7xDbeJxEGtWj3KcnPBf17YSJmZqZc7tEZfCtZ2MhDUtUdN6AMnUmM9LxLTs4G1kX72GU6S",
  "key18": "2BRJ3Np83PZGKABrD6JcXij3sQTiLBUeh7uuEbdWU6V89dV38uUYcbuqzescXUH1Ay7hpFWFCES8tXYsirNZuG3J",
  "key19": "2A5hT5VxaidkKCNRViyRAG4NksrS2Ynqq6g3o1VmHCrLfcRfSuyUv2WAH67KpeH9hyJeEVYpYtprWCkFappdaj69",
  "key20": "4E56NfkyoL1DEuyDSrYHEZYTXsk47QAkUZrnh5fF6cTarorMyzypxi5jLfW3Rvo9NAAzG5fgDxU3Aj6BRtBr843R",
  "key21": "3QdKgdwgPKbhZsCYVUf94ydc5iwuUbGuaJyqpf8A8JTmkwrEP1nShiHW53HebN5iErWZvD1u9oPhVR1fSjXrEJ5g",
  "key22": "McJnc1xS8oG5tuc9bynBovHbZNkQrg5zTACmSw69Wfi7SbKf8FActBr2SqhU53Ta4bsExeQBcfFZnVV2ecWuBMw",
  "key23": "59BL59cWkfbzZzhEBMm4xiQmqpEoNJXMhpt465u8ihmVF1qMd4w7WMfjaDcMhmEq8ciftvQx4utVwqcz4fyQhHd8",
  "key24": "2wC4pDMoeEC6iWzBamraPxVufhp4E4Yg1DJrTc2dTWKk9mV7MZCx4TV2Q5rcguWKehP6YSeEaqQ74oFdTJ41FA4R",
  "key25": "4smWQFTxNoE1kyHtiMhq4ENgoy3iJ2tmzXtzvsWBZdTEdPkUdaQZEDCyAR9cbJdem7UhQCT5beopobMG2vXsz6Ke",
  "key26": "2r1pAuPByDwaiGaP5Rdn2KwHV2oVCHGP7qLwmUDdks5QH5b6Emv8HqzxmhCEgRHDvirCEc1mZWWyZ2uDBwKw6zkt",
  "key27": "5sgTxqZXoL8ZgTeiK77zq6cjC5JJaSPdLqFDbfANiVKa5WVDc8J8XxfwAt2njCVEFs4NaRYwWh7QpQ9pSuLjcFCi",
  "key28": "2kUvbfFteqcLpEkZnmVawDm5K4tPaYnSWsYfSkAen1835KNagY2swj1BgXyx6gvfSZZSeG4W2ozBdiAq5m2wsPtm",
  "key29": "6392LSbNcPK6gsBq6Lkb2NejtaHn6j26SanXDwT7NmmAZmGrA7qjGCXBQF3PWEtE8gwHdeoek7Z7ujhEJnBQTWgW",
  "key30": "3vp4C8oZuYKtynGF7JZPnNGhEQcM9A1fhGxMugppBANGg3Bf4XgC6sd7CQvuETNQf5USLU1TF92Qbgvedn2fL3zM",
  "key31": "2cvfSeFsgeU68Bda83nwP7ve8dGF4Af9UFAUZ5dt8ZAHgseAw1SKmpRpyyTvnpLJWJYBhQpR3AUoBMgRmKB8oSv1",
  "key32": "5sMd1esUMcz5kGAzNRuWuGeoHVHeKefQjmpTHqdNxXPEmWZ9qAQu4vm8sdxKiN9FAHpMaL7R2r8tsn2B2KqeYieJ",
  "key33": "VazYgKrBAjjvVuo9hZrQXdgyYabM12bTLCwDsMBQguMGwxiMYugw3BVeSAGQRRLNPEvJn7oGhPpph4FnfFTA5JB",
  "key34": "2ptzWQm4N74uRRxLKVDNWj112ZuhWdeT2jVEhXvg9ySVrYTJSRLBvtbdPrZWVQtAz4NZJujrR2nxPpgdUrv4VrJy",
  "key35": "JpiTcunr2w8jbSouJ3SigSYgw5cwF4XkXN2G6roWdyyKUMpgLuuSwyEdfDEBumG7PzWtxRs78gRp5ryHQztSnxw"
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
