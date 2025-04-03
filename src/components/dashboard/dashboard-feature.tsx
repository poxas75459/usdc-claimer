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
    "2W3EqaesZEpddBcMensbSa7UgFQfipDqtsiwF63sdWFebkUU9euiRzWsyUTokj8ioVpxSLhBcDddv1thJyVHTsrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zy8VxvBgp2QRLsA8TBRRGCCaz69aBrEZ5PQCDiBMPfyaHvVVh3YQmubzbaiYty1ktr4eW9LnAZsDw5BDzar7gNQ",
  "key1": "2e3EVm5JYsBK3ruzPCrVxaX2gHij4ziMAm35vYSP3w8wrE1DppS38yq7aJPkKDs9Ev5hkyNDAHgZJsWRrh6P8R3q",
  "key2": "5LZL8PAdVYyiNkHUP5HKLruFdKcRRdGyBSNhRkiAZCYMZ82qiHp3bg1P2EXLo5ywLQdka3RJydZSkY1136Xj76DP",
  "key3": "2U7itGBwQ2EASTVip5Q5AtY7ujgCG5ouHNMN4cUrc1quyki4Zb8vgAXoATXeVbNHZSptZiFVYRMZm5GeR2H6g3Kw",
  "key4": "4juHiuAPLCQuoWFrpQcePc2UDwhYgBmFy55LMiBovnHXC2V1yTKgsaQXSKkACHqdeU5QWsyVMJRFK33vgbLTfpmx",
  "key5": "3qzcQD3gwTW4WDnLTpn4s23KF986uyVYoc3b8XsLTpgwaYXHwCVowop5CDJ4fThNDTypAJJxcE1xsFTb9kGBfc9x",
  "key6": "3jttCgk6MbjxC4Ma242SxNu1J8fpr3sQ4duFqtjcoXrc4hEAcksHRMfThUsuXEN2HCuGWcXnBqsVkgaGPzNSjJ38",
  "key7": "3yEdAnePgQm3aHxwX1ekEPDLshLZ2qRRtVSrqygetk75ymkCY4yPGS5ohLvMSmauhe2Rby2KL5SiFoPVCwoCqozn",
  "key8": "YSZWpkhrTv3shNa3oztqNizPJQUnRNKLNPQjzogCK4tjZejfRGybxdgKNEkmpSBa3khwMuX3nhndni8PHQWeksi",
  "key9": "3c7yd6dSUEiaTiCxUSdtgT38nYiLKBp5GkDq7MUZ1bfi5FzMk3nuygxrG1xV7cxLnCeRM4qxCAytQahvAHe97gqD",
  "key10": "2VGkU3nGqLZniPWgrT8j1ztB7esAoDGjev9J2Vj83LTnqC2zeUP5h8kovbPC32wYNpepe5bePtXaF4NUBwLX6KDh",
  "key11": "5gLWkg2XdTgUDvdxD6nEndJn8EJxMzSV4sHyXe4ZrH62JcvQRgRSMj3BH7vqgJfPjsCgtShbQqywG1JpCbxigWDg",
  "key12": "3mX56vZ76UCEzu1GgDV2uAus81xyC5aM7MaPSam2TBXN3NShgSQGcVD9VSrrZfcKQ6vBaNndMfMN8xfi2FqHypg9",
  "key13": "2rugnyMkGs2QKxDxoxAjnanV6T3K16rkJYNTPM2VV4VSnfxHkkVsuVp3Lx1TCYk8kLNFdjd4nRdgycAzUwv5u18Q",
  "key14": "4m8KYbyMNL7WDWhwk6fHRE9rQXqwrEtcB8HUJRHDwrw2bvFmKUUi5w11YeXfN5gcNFPfvjYsey57cfAHwS2Tjbdf",
  "key15": "5Px8aPE5NgT6xLKuB8FbmHqiUbRK9JcVspH4EYGkrFuwagSujNQSiG2TQBV2DjMQPxLhSH6u5eZvsZyR52yYALys",
  "key16": "wFzLzB7umLKbaEDmaGyaMSMTUgf3mT7x84uuBUZYuR2TxUNu6kNyWMTfmEHrCy44ULCaUn2ASDdLsFv1rtHqzv1",
  "key17": "4nHndXj4kxUscHTN3qk7xy1TZ7JuVJXKaTTYZYb46LdSqHHcjxuVcYpnwuRnoPeqf3HGoEZX5ptGULuV2GZT76dN",
  "key18": "2FVxcwY6pizfYegpEz9t4szQhqBeCYFXWhWZUPeuj3LAnfPmhEMzcuLXAJfjG4vTcyDa1VvwVUbW7gXNwGegBJNt",
  "key19": "5Rvf9Wq8HJG9cLZa8zWqSq9AdNfGZbdG8ppegCMeikcmxf7VDF7KTddNnM8K6CpoLqAfnHK1o6XpSBB81awTEhYA",
  "key20": "4SxhRMhj2Gvupz3XJ2Pz5YuQhthwvYrZjBse744xrN9LGotDLQPY6u4JKZg6H6JhK9FFKAzG83LKaKVwweh6xRiE",
  "key21": "3HJiTpfkb8gy7QGi8EstBg9WrJFVy7Whwb4bKhuytz9dk17xYoVnQLRCn7f1MTSKQjWR7DEQeY3nBeyAqvE8Ksr3",
  "key22": "KdUV4inUtoSbvNEy65Ge5A9hBVbHjZF6GR3BisxVh5p96WQFW4gAuwchr2TGcVumdNRbKWRHxt7v8Qsjzm1XtBc",
  "key23": "3VeRixEPnK4SVN2Srnri8khhPTbaorpiRTN5Uqq3v4nbdN6W3qY7UA1ZZ61zdvRmqbXJf3VPjJaKRz5Zm3Eec7Zs",
  "key24": "3DKEQNcnvGSv1iNUgTRtpQbjgNWMVDt4g5TisM5R7xTqxTqhd8jj8gZCGwAQhtfZPbF1udPDv76XfA6W8doC8zsu",
  "key25": "2Yt8dmw6RCkHFMyvLrkqBeR4Lnq3UrV2utDRaC828DMMUrNHs3jydGg4up5oiyQSAWqfSk99xK4WukMAKtF6kLcT",
  "key26": "3rTxgLLyie3LsH6Tk93Qzx14N4ehrMTKbKqEGG9kqk1evkMvkYFSF2LHvtXSeLP7WEvnGgjAoSXJ4SP68g1VbBW5",
  "key27": "2s8jcdv7te22CgbFG4cnjCtcNCAjQAPLU8v5dNNuHBN144AcfSMJDyMRQeqkgcGD2x2X1diqvk5hyjZnqZwWWGPA",
  "key28": "492xvURKYTZpqEumwgVNR8CmeyRFffUBcA5s8XvMTKYKzyTqXXYQmr4caAowSrEPcWh6JeC5xy83XYAS6XARVSgJ",
  "key29": "4bTqACNHfpMGxBciZzaoWyf48KGWVqicH48ejHnNGVr73QjdaTfXy724DGRCR6nYimT7YUP4bChBDrjBphNyYopo",
  "key30": "2gb8y5QhK5zTEiDdK8hKvkgK1Nj77ANvPsCrkMn5hfMQdp2GHbVQFMog9Xj6UxwK8noAz1ekVb4NHMexUspSeGvL",
  "key31": "3UVipYUpbSoc2smps4XjDuCiidJVQkZrGjTGZ4NWjLUkksMZNjTkJN8vmF1JfRuJnzoBZiNyyaVFrXybq3bUdF6Z",
  "key32": "5krj9tpmNuEbTLTwx1hBVFRdv95hkqAtSrW6X3EWicn3khtW4mtDv7Zi5PWQUVG6hb2XzfQNk3LhaJJy3c5thz6C",
  "key33": "XFMfM4MaZeWZaizeX7zWqcpm2VdMyRfjJuDVj6BiKt496gxhWJJ8d8NrGuMX9sXSUNdPYR3T15Z5ucjfiuqPAGw",
  "key34": "4ZdbSMBUqtksDb3Zyc3vjvc3Jp9ajiYG1zeN38npRHwRDt9RMLAQXG9ATf8e37G7erRj5jXrbkpnbQhB1NSmadyd",
  "key35": "4EGJK4xwJNLd2VxExPwyepa4tMouMmHSsfj4B1qqvgpBeuBN95goQKL7zhTLhmE1A5cRKW6bXK1BJphPEVJcPh85",
  "key36": "2sgPRrtaCRfdotg5BEvzxukSF4iYEHiXkMsiuckTbukH8rDCqeY9WNZvXKNTcJbgKVssyJBna4vPtWcysHdo3dSD",
  "key37": "5q6Ge2Cu9fFkcKtD17meaLP4PWWnustQvjf8xtcY8sDj58ShWwMJD6EfHkBfkL2Y9dVCGvAn4R9Lck7rVBTGF1rH"
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
