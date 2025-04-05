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
    "4QRQf9cUcBWtYe1d74XWrtpVopdwntPrzAK2KoqZ3KoCUCF8XLvnzv7LdJyVaj4s3eziAr6adfqVQfHii2wPVYY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cd7f6PA9ddDukw4YWzWjfGvbRb9gZNCJSerJnHhh2kXkWSfAui17BVGF33foY2HsXdgtst53nftKhD9bCSQ7o4M",
  "key1": "47ZNTFqWQ9prrrf7eB6ks9nE4wcKTKQgmoGaCDFeKvRwzojkv29FNFUt1Q58zGDz5EKzaCDsfr4x83wGRwWHW2S3",
  "key2": "kBx1rL9GeUUp6EGunQKGjbCj99Xj2odRuydxMyUFwbJszpzTiKrEHCU1nLyDjL36ny59NujEyKZG2kEfubHanCD",
  "key3": "281YqJrnrTkcJPt26AgadPEcAbKLKbpmaBoUkZjwe44cQohuvGMLBWXaVMmxnSk5Kg83De4ZA15PsLAT48egJF4Y",
  "key4": "5dGLYXRRHMCuujBsi5pKMCRrp8Lvn8e4U3w7TV63eWsNPnFn5bgcr9m2m5i3jepLyN14BjcaEAs6zfjhrxFqbytp",
  "key5": "hJUuKbxk3Df5SxhWU4P2GUpxSmdJ86LcgdaedKqzZeEwsLpyyvaF6uNAkAUg734EcfA4kHnPoZiz7if5ou9vK3r",
  "key6": "4CLxXmkdeVvBU1XKuk2Z3zH9ip8JxfQctPgdU4zDSnmrGYSn7N7WvrJ9L3YGBeDYgb597amJDdXka8c3evisWHfu",
  "key7": "32CAp5JeA8AbauMxyGpD8YGcKAwafpmHg7SUkjUwCaYWQEaMTifZjVUFPCkDEAKyUPnbtQqCjVDu7DpsDXT1PUgL",
  "key8": "4fxPuJGJF6XdsKWkVjSat3hqscXDGgvM775eByVfDybj1MdHkMnUCVPiRCzzUve2kCwZRKXwse3eQzgJY1KVav5B",
  "key9": "4qUGDfEFLo7Bzt6Mm5uDAKk5wUv9t3fiQsshkb1sNGRbXCoorxU2Nns6aB3FZ31Txr64ddx25gV87QqoBYcL8PbL",
  "key10": "2LHxZHiAq17tpwQXnYWwYEgaCCTrHBEZg2vNkpnxDxdB3aAp26effHbE5XWdiG7kR1T1ZAtQ5bssPCmxspE7AWWN",
  "key11": "3sQnzxdN2kkQ7vfY3GS9XKTVHd938CCTqdJYDpfs7tYz53g26gaGWSF7ga4oKbq8RbuSZ1jQuaqKbfNH6QvuhMnN",
  "key12": "2d1bhpx3wQUzqeJE5MkU4dZmoEuemXWm1JKfoqjddr6G2UdiSbcsY1r2mfhAB13pGiB5Py7yZT7SC45vabffAQHa",
  "key13": "5X1Gt8swKYTYL3q3NXVpukrE7q7PtsxP6gPWJtRKqiPbvzV3XW9tqnynBK9BzUCAXzt483b8uigrqh9pDFa6Hfmg",
  "key14": "2DtDd5btwdVu127pTdW76H6rdVDhRysMjU3vWYCoK1N2dX1G67vHkzAFgerefMjHhMqywVS7LfBQptXF5HG8ATba",
  "key15": "2msLtSJYeTbqQgfERtDPLNNP9pusFETmQF4YDq3PpziqSu6Kqq3bmG8vJimSXrfUHnFi5b9d6RxeDdVaDpCr4wga",
  "key16": "5X19m5s4sMNb9KNswrXiHUEpqPcAK92xPFWqtiqdjtjKf6sL7qRQELYdPDV5mS95mdhyP52E5xuQpNjPedTccWT3",
  "key17": "2NXM7qEqPoyJc2pB2evo2tmArkqyNYpEvEKPGEHLUvxcJcrV5idGtDcrK9Dp696RWaSEAkVWYERkac4n26QKu7iq",
  "key18": "3SvLPtwh3g5yTQMVsYUsJjhsUaPFCnXt7G92rb32cE1XmmG53LQqGofqhXgWHgJBgrTLRtgTdizYb9tJogCcex9B",
  "key19": "2FQitt9y2hX1QVeT2u2FtExGwrweju8hB1muLaNQFa8VpKShpQJ3PvR6sijGRKFHWtgze3QAegWpxdjbo1dhXhtt",
  "key20": "5MhtEMhivejMMsqMuLjtqjC3VrNHWFtD7Rr91G6fXrFtZQ9N3bnPjQE1pRbMWabkqVc3RFknkrGKyyaa4YwvUNMm",
  "key21": "4bsxWQeRDBAVjsYHtENnpHJ7LP8z1wuN2NH7qoRTxbhiEysohsCDWQkFM7YEE3QQM4Cgryn43rnkUzM6XMa66gHD",
  "key22": "4ch2Tbz4mH7VXCN1ydkKLbwU1S96fhuNNj5S2vDapjVzu8NzE21Es1qFfCN4NZRgSwFxNYrEwwkJiH3bhmpNgXF5",
  "key23": "3fXrvY44dSLjdRrawAm2vbaMn9DgerzN9aC8N9Mc7ykDSd9p83P7ML67SGv3XXTtqyyewZoVLwWonC1p2ThKdxdo",
  "key24": "37VwkzvGng2fsz7kRFxpkTu1HPhCjWo7viWhkveU7kcLh8rktzYYiVaadtyxgGDqpmb6iBdhr1oDBdLgFToEQSDM",
  "key25": "4T77U3YckGFz9zaUACwKbV3PMdT6K9j4NfyhLmGDQPtRZ5nKNz41LyDY2PafHLR18p5yFX4aoF13oitbVQ4N3tri",
  "key26": "33W7Vvs5yai8mFwLbdvfUJk9QZn5XsYWk1q1Nv652xHVef3eBTP4JkvxWjEk4gitmM84p65VfVUtZaQ5yJZ4LxwP",
  "key27": "54Ux4HRWy8QFZRRb6vezmHDV1AEnJDgZ9uCpHJSbazG7ETc1kK8ZoVkgmapjtHwHprCzKUFqvQ279vcZwZ8ZWgGk",
  "key28": "rL7nKjNY98NgAaPwV9UgbPqvMQKy17sqPqJNdfEnNMDJXKW2dhMt15td9iPCj9mrPFE8EQJTQumzcJXmRDs4kuF",
  "key29": "59eJgeHyPhCb3MtfZhCzj1AcU3i4cu7xPd5ecxoCe6VyHGMQKz6vMem15SDXu9xqdHBETmcw4hNTWSudavvUinkz",
  "key30": "3mqnFuSAZuDBvv3avDdx7kDcyqVaFCVuJwspCzRpD2mJFQVCdGpUnZssTnBmhN1Ys4FN3kp9TPqA7BNZp7vLeQno",
  "key31": "43zfbvXbCUkd8wQ9gaKkuBcMRjhhBUq8jAtJiVaboWDAsu1vC85uaw7Ar8bE1EuVxeq453ZuurDE4585zx4RzGjZ",
  "key32": "2cqWySvk3vcchckRmM9dyjBbZjQsU8wvGjohJhsw25bqhLqCL1St6sKA6rBAeQind27dd3shaTMoFyAy6QY1GMgp",
  "key33": "679EyotNi7xBqFmLwHyMLKjAST438NXCvY5wqEEM5T4pETU9UgQVdWMx2L42osLKJWePfjR9cpCx5EehzdGSNoVj"
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
