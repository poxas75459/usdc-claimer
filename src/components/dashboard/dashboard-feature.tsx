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
    "4sPAcEdB9iLComG2mmfdxHjpbhQ2EVF1HA7vcKq9irgPydFfPz6HX9DcFysf5ftyM9ZG66JWhFCMe4vjKk9UUeef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zK6HDTQDmrdLhfeDkRNPJ2qbFU2FbL6TrmhL7iTXbSLC2XQeTYEhshdumbkJWgt2PcPwtSmJhfvqbr9FiaubdWV",
  "key1": "CxuMALXkZw9BqPTofLTKxRJBt8t56Ej99ffCvTWtybFKmubeMTigP46E9fJixTmJDc9c1t2nvNNNnu5XN5HUXc6",
  "key2": "2yD77b2rmxoEi6xZHEz5w5S31WRZqLLaskVb2xYEX6otFurME26zZW4FjaCSVwe1X15xdsSVA1VEXDWS3xAWa37L",
  "key3": "3rTA1YyXmQYpub1d844mjguFmFGuDTqddsw4acFKM7kLru8DuZPgcKn9iLe7VnTXmQCLrh6FSGGeNZHEm1f6HYho",
  "key4": "2RiU3DWF1689xcUUKy9W1TX6RteuALW6qLcHtJBRoFJTuAnx812d3vDBBwWwwdxRXGFYTsXmxmFjEQ6Ae61X8P6g",
  "key5": "bTsemrcFT86dmg8k4JTeTfhoHBhGJL3U39ygrT85vVwgAyQy5SWwKiw5Fh99t6r2jTqqAuTCDwkfubFiR3XUmR8",
  "key6": "GwiRRkNAwTdXvRYVvXFtH5rY162swbRfKzgFc1YVhHFjnKmFWj6q3LBpbRWf7LTmB8MNs5WR3G2rCKp7y76rJnr",
  "key7": "61qZ3RkB8p2kGVrVAMTfaikSFXm3gHpv8i98Zh9ZXfHb745MJyndE3mHFt1FdXrPtzLHTkPHNygSJ9RNG6uTPiVH",
  "key8": "3spBjbpm4a3qGhEAVUfCa761MQvrKaMfpSfH9MdNCRkUn4KapHkTwSNSLBN693uQMCKHTDMJrVF9d9JYEcdSVpPA",
  "key9": "49JrWS3QMCjmaGGDrgmcGDGQPyu7aQFX9Ft41xEny9cwa4p8uty2qAqPJCCYFDDC9PqtNk9DEHR2Hux1kJp6niDa",
  "key10": "4k1GAqN3uR2dswDXWU5DVT9kxvYhJMJow3WgNbRZ2d9iXhVkmi6xSLC9B4Akpk8fWVuabGetzuXCy1bs4MMrxhXQ",
  "key11": "4uLzCHbfoBLqQeP42Qk3AmrWdHqEpQzbd8qyXSuJLDjkhkzzffR8gkYUVfzVsnviW4SH8RURLhrL9SGSgRLCJxb4",
  "key12": "5XjZe44ddmF8ZLwjityKhHsYDC24EKpnMSapfsmZ2z7WXe6GJpzf4SKi3SDGmFRKkdiuKETPVZrme6SCwVNniyPi",
  "key13": "59RtaJbWYWE3iV6XCqVxPVCjt7qDbxRV4AAh2Nb8jHH1H4VA3EKzWwPvHgWQndbRRFEizcBQg7474X2v92tW79MR",
  "key14": "2BG7RbAGdntcifY8WUVGLqRaT2N64fduuiHFkct1sGBUhzrgUYQaosSDge2KadaVZMYdPotXwEYhkUkvwCThCRUw",
  "key15": "2aP2GFq6insDio9g6e9HwAUqwbiWT4kamHaakNVXCVkVTf85BXyuqUUJxm3NN7JzMrhswjBGcN6Z2EqoAsnRtyRX",
  "key16": "jSJz911QNnHZXJmswNp2JopZCaYYSPFj5hv7TeUxEoJSvRY3d1zfamGqkKBvGifcTPHbGU943P6224d5hKba3HV",
  "key17": "3FbkH4L4BC4BZTNnTfzG64KGZhnBTKyYeKBEriXgL81u3pLBCUWJqZEkTfhGsYL3WmdufFazQzSth7fsSuJJxr27",
  "key18": "U9cDJ8118WzB48BPiWdptv2ZVgDci2ktLYyZiJVCZvM9G4GMY2SEw4kL5mogP9LH4p3oNHnMZF7ub5WopkZUQNv",
  "key19": "26Zn4CVqsu4UgBeu4CGukWxVbK41mLkVkVzns2AmUkQCMARN7Gh5Bzia25HvZijFiyBx7ehNnGnqamXHEL8vYxR2",
  "key20": "39Zp7naNKc5eTNXcUfsTY5evnr5oVP8Bkufc8d2Z6M5fm8igs1CXo1JM5uByPLiLHKv6L851VqW8qxTyFGsMuS46",
  "key21": "4aLSVUXRV78WKhfD9KNNgrhjX9bjhQ2YjoRmwhZJ8dcWqNFJ9JWPdBP6fUN9QDMH3eyFTKB14NpkNfpcSCc3rKc6",
  "key22": "3YYrSi7b9iPsFgRn3RecvXnfY8FQkojSXwp5abWoS44vDrJV1naWsGs8ETk4bcr1DSpswBy2FVcFtyCnNiNj1ZDE",
  "key23": "2eJzhiggJjMbs2W6BVoL7MjjWEDmEcb6uYAytWHB3pw4QLtDHooxav5WshFo1gg3Rtya7xkBQcSkpaSALFDWTu8x",
  "key24": "mStAmSwmHBqPDqb16MsT7iEC7bTR4Y6yCqXZKtj1Ttf28Q7gHCuY38KzfByX2xahqoeVoBuXFG3HUhJ2GGvqfDs",
  "key25": "2rsDTYUdnYRr5vrqmDbysGfP3YWXQ8QQXnY7G2dQnd9es4s62EfMG5N2qK6y3jMPxDqiTXRAmCVs2pbDVn4XCfT3",
  "key26": "37YBxJhFk2om1VpP6YHBQJjFA612PJ8FN8TkqK1fziouYVEHFcZ3KfyzBbMxYiM4b3xcynUbCAgSrZmJ8mqDJnsf",
  "key27": "3X7Y9LwRrLPLbByj7MqRcWVJx6UztFPAg2wSDk7CJnfTR3D8KEwjf8M8sx9GPtGApKPK8x9uDEUbUki1SLSd7HKv",
  "key28": "42vsK4Rjb9PdsCZ6cjpaFbthuKX2ASPNQ4zkPbUvvH9ekgxAY7FimLG4FTtwdyW2pSg8X56QqfDrxvBRAd8Kr9CH",
  "key29": "46S2icVBC9kdzAjZCyA3ngx4cUTFyPdRBMHBtV3UViMJC39Fvt2PNKqdE7JB6PycA6okV4Y56sCtdL63XtHxF5aP",
  "key30": "25NDFjYkT1XaoeT1K3NcA1Cdme2bFjrZwzvqoUuzeW6fTHrSxxTeYC7HtQ7qCXxjZ7xLVbUa9uJRgPwJ5hMQZwBT",
  "key31": "3AShGWhjeSA8F9ood3zCa1v5HFG6FXYmT7cKc3L4xGwdMF2QqPfaDmyZQbPi3Sb4AxShBQuggFMT6shYi5wsyfcG",
  "key32": "RhnvdDu45x5wQUKPVS7SY8GZVPmcYakLowBapWn2jUXyF5iFErYr3E4sjNd8aVzyGZVLSwt286DEgscHXNK7faS",
  "key33": "5S2v4WAwza1vnJtysLQEozxab3rcY1vJD1mwtA1JTagse6fkASTPP2pdNpFF9qjRd6QAYr65qDEMKd5m6Nej5E5o",
  "key34": "4JMn4NfWgGwvdT7W6aewnbevr4M7m2fZVmsss72WuoTqEzNbXdt98eHnjfeGE8JSjjXgzh7bjRkrMYP3RweMBQwh",
  "key35": "3mLu3NHy73WNaMAhWMw192CJBKQ4LBnjP7SUz44fs3jLPmCxpTAPQvuBpNgWm68dvC9X6a7n7vuLvDf6K8Z19kFc",
  "key36": "5eeht5U4hFLyF3H4rKDkHWHqkwdhyavmRuoH8XFrLX7WkU2HywsGgv82g73biQuC2AY3onPyoUQJoidR99neHZFP"
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
