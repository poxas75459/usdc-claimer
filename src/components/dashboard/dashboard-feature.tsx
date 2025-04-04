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
    "3X6mAgH4m5T1XgcGiJPCPDXDCGigEn5ikfY3ndZPRHduqwZKGzZidKmY4K8ErAXu2icAHJexpEqKMmoFkaoi7WHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M36a45VWC2WBGL8qd2GnBMwkfQABJoMksWnvupoBJvwAxqFowyA3JRx1WaJAm6EkWgxyavCKpRkHsZkDCntLoke",
  "key1": "3vxsxrUz2seyQScSaqJTfMFwi8JTJcaoPDKiF42j17eyiQzDXTgcR8F5JCxV5Wusxicnt6yGN8h9vKEq54HNk3GS",
  "key2": "2xus13qAWdnYdezu9JyXGbcYF66JRoduF4tfLvPe6Ls9aJhMR9hSDDRGGyPcmiN55M55ya9ZxGMTpssFNNezEq6B",
  "key3": "4GhLL7DwjJ7iLGqjuFKgmEwhf2DG4G3FLJi1zwqYDVAY65tRXrdLf9CGdb3Xt2oqUbtsNvHm9Dx9uMtB7kRB41xS",
  "key4": "UoHN6oYwyebHUKqhz68y5nM5e9u8VZAdVN54Bk7R6LPVzCFuUedUdEJLyZYVNyE61LSC7awcBZ5G5bdYRRREVVi",
  "key5": "65cs962B4ydLFd7tdkG5d3ZH582riopziAvGD6gedAbsd3YYxRsdAsEwGEFztMBAEbQkrjRunWcQkqDrX5h9Q8Ec",
  "key6": "3ZiTPg74zqn33yeEuf72Ey3tFZevzWnxsvQvSS4z7Sd91uHuL5XR7gQt8y97ZAtfKuU437epnhtMxrqjw3cUimn2",
  "key7": "3FrVauwBwYdx88HNuv4xyGVN77QWum2WPMyKfGkDzmJBye68ckMBbzswnRUdpeq8pSbaE2AC5mKeCw5kSDoCZRGm",
  "key8": "29i4BtbFdk3TgdcWcN9GmrBQDzRGi11zFs6JBsFv3on6W21SiS6HjGdu785eBmV1PfHYL6f5bp1Aj1Ymdn4DxEqe",
  "key9": "tB6uW1iZtBTPzTN1GX5XskLutxjg5cTKx9NbWKybtC5XEZcaQ74dXNhfQ2xsKPj3nL1CNhbTbgPr4VLvzir8G82",
  "key10": "RmqAD3ENr945HzRT5Y92KaPK83NqZBdkCfgY2uJFrjLjxPwYWAtc4SesZKaSo3a2ZpP6rXL5KwmZq11ufMVezN4",
  "key11": "LLPFVR1gPHeQqtwNRWppS4j16v7sn18yFz69zTVPuBUVDmvnfgeD1aPTNo7UUCY1PG6D4xuE3TmWA6tTbrwUUKB",
  "key12": "2avUV6QXtzhMdFubeuEhSi6Qfv1yLkf51Gnkob2ue8ke1oj9Rg4taHXsBUzkZwxgXDDJbkpUPmBS66Wi3EjHYvhN",
  "key13": "3DjqQ4AcLDEAV2S93wafLAp6LmHNW3GEf1S2GXJonTDC8tT5bgzfJzdUSsEfKt42khpbnMi7We5Hqs5SBbdmHhGY",
  "key14": "5vDqnnBRx4wuz4UKsvkv9SdVERniUGDHGe4jxZb6AK8QQGTeoYTSjma2fzdXA4wF5UAU3kxMozaFj5oePtee6K8k",
  "key15": "3v9FuQa9LCLJrDJNryNeBWW68YdD5BLfVxtxGg5yHsbJQwVELdazM9hWCkbreds5d3cA7Y9CsWodCaXu6cMyDi18",
  "key16": "4hW1pEY9nEbWrMviMLRks9pyy38KssTRBmQ7TV6LP4KKdYearmoqPmjCorqUGbf7F5w5vxxjrR9f1Koyq9Wc56S3",
  "key17": "3xjEPPc1J8NcEaisYgBk3gE7U3hwvd5P6wXBZMfgfsWRGqPQ9F1C7b3Ss6Hg9oYxqbk6KWNZZyRWFUvTNpP78bPo",
  "key18": "36tbp6ST2La7TEK5JtCHGAE1N4AKeGqLx25FYtvFiuyPyNbFrbJwcVqbTKjjZGCWpmNNb29FGSwhiir1YFnhgHaK",
  "key19": "ZwYwzCnexp7qfqcZZPpDUKkuALJ2rDcrwtSBkmKevJQ8WpevKU3c1FJ2S5NWLvzZp7M1Q9EN53uytQJjBhFszEn",
  "key20": "4ZqExtBfbaq4mYLTjfSKSwEciFhjnEjcnRHXnUZAvYp5zqWx1VYQ33Z53uVPizdpwNFXHYC4FCz9obtLonwjJtZs",
  "key21": "53zBBe8qAFc4RtMVabcuu67pGxY6oLrEfKfWDUg4qYQ6xR98yRmGu2G9PXCJwPJF3TXUhxSyv1JMz7x5jhGfjKfj",
  "key22": "5JtmuKqKPDkfUPgov5H1SuoBWtudorcAN827Nn2vpgcTsyYJmcE2wxn79bYN9XX1ETdmvWytgD4BA7qAC1PLrqRe",
  "key23": "2eMCduP42vyfYkRx33mb2b8Ft3gfKb1feiomCcZTR7iG8V6RaJyZUiXm1z86ktjTFknm9HCp4N8QH9og8iY6kq7j",
  "key24": "2HuPALDjp9mhswXPLchNpruUncSyiZTaEUbbD5S57m254Xs9thQBFZ1gfQ3WPqMMiz1nnZMDHCpVUYRQ9aegQRbX",
  "key25": "3eJpoTrv657kugsBk5bYrE2RFtA3PjTok7eFzagNoSG9RiVwNJW8Enjoz7qfZJhH4M3L3uuGwK3e422Tea7fazDv",
  "key26": "5HyacDqZEDdZWPEWacPAL4rMhU46gn9XyVeAtH4Twhuuh8dWKjAtWkGDQLJi7PrcBsYU1m1QeRYDcChbKkTkboU5",
  "key27": "56dGRXiYjZKUF4R5VwPiRWxizgdmgnjVrMdSwR2yUg4Ff5cXhLuHpAmkMqMvEgbCu8mDz2cSwX3X14AaaNV5nxYb",
  "key28": "5T86YHTySvu1tS4TsrD2FTsAAiNTfSC3EdHB93H5z9oF4VPiZUfu2Wu6f93kQus2nfJqc9TmZxZaPX2uLgPK5ycn",
  "key29": "5qpaaXeduAnEB1P38tiaG1Hf7vF1fE8VbJGFZVvEXtgu6Nj7QEUq3BXhtLbrB8YFwe4xNvpTEV1HwUFPFqnokoq2"
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
