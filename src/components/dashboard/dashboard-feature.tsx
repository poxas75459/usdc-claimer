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
    "3GG4rz24xt5kGwtsJDv2TxLpPi3Hn94rmMLCcPZaunVjW9wNTRD92WzijtkwtCSxXHUBvzdBs2vRtPS6DuGGFa8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T7WmfbmpUfdrJVukHrw64ExncYE2aniXNjhophWVBs3jtKs4HHCsWD5wMZkjxHjUS8iAAEMDkZKzRMUrjaK58is",
  "key1": "446hFUevKVogtofJ5QZhkgMuznSWe93W7LmbPLnZxoCwHGdtjwELasypEh8Rooyct48CScfKXbp25LxvptgmAGPa",
  "key2": "23phunQsyxEq1kxXJ2skXTLskqEDe6WF5aWVmQ8sf4YBDJKpPs3xt86qseuyAMygfs6ErfJrZEgmPP1an61gHs4Q",
  "key3": "Sq9QEXC5G45XttvDuGraUL8K2G2BsrPydpnvyLXX5E8XRtrzNtRZNwonQfte2MA4mVps186hVFaNqe6yLWdaVSQ",
  "key4": "4kSw6mxcimG2bWZrpPnpJSRGac3mDXUzJt5Nw2uQvXAFAmVjbpCH44Ja57bPkvtZz2cVvPet7bsYgs6J7x17L9cZ",
  "key5": "3gTXgtx6chvhMs7N4aqNzxANgiFTC3dtoMoH2btwAksiehqXxpocaPo469icW6jQ2C61moiByh3fYk7yUfEiU6dg",
  "key6": "3J7XjizYqfxfJQ3ZYysDLHaywMhRthKgahQ3VKHJJcwpXvf7G1YqXkXwL6J8T3mmvCBVyGVMdEgmgsNJNYxJXw5k",
  "key7": "5qfNgmgUyDQ16QQXBRyza7EPUYM9eZRvRin2jr6axCNDemyqugLJAPgrS3qs3B8thYobYc8tw9mGUoDzZq6HjpcN",
  "key8": "2GNDUvVHbrnfwrZ52USqMdmMANynbuXcdneRiohSgakA6sP3Sd33xTRGFruNhar8KuXjinFuYwymAR8qSRmZ1frm",
  "key9": "4dn4DnwjaRtYhYBV4WymU8FK5PKJYkdBG8rp2E7WFL8wYCZcMBYhW9veFtKGxfwg26N2eVg1oChuww1rdh51yu1d",
  "key10": "54WHhZd2uoPx654DQ5WewFqRJkcBALHg6t47QyxQZhtJKLZLX4LTsJx9CuCB3Cyz1CVxzQpuD5X9n7YFtefyXosT",
  "key11": "2T9dLPjpzRAcrdjtJKPmx6SuAAQnt7TAQjEk4zTwYW4SEhaP3rV9vveXRwQV4mQYETpvBBaJswGvFPmuSBgZ6A96",
  "key12": "jTpV8qH6G2EzrZogUhmy4im8iVmgs9aa7mK2fktkRYdN8p3Fwuv8Kr7SdXb86b3oajykWs322t24tg5DvcA3Hsd",
  "key13": "scABPhHYsW995oaiTNmKUJLv85LY7sCFY6KyWVzw5YZaaa1VyGpR7f289tiyTBAX3WeHjJn88tP7SYYK3FES9Np",
  "key14": "GBswtgteZ3rhqBog1VSjuwfZVFjUNmBibUPTZXRA69g7oFgC9e5mFaaHp8zy6tFz1bakzBtKtaQBTAc9NzRnR2G",
  "key15": "2g7feuXtN1gEFynMN1KyBHjsSUDekqodCDTsCrGuVpaqFSsggTqiFY5YtUroyVmBao52HAYhEsSmXiPGqezxHVrX",
  "key16": "2YXZETvEa3HeHEHKoPfwrrX5bZWmiqDJnKk4oFZibSARPWtPDpnN5M8v6WA4iHjtv6w5Pufn8n1gbmjNDwLAkGi7",
  "key17": "WB6Kh77kyJjd1C7FpTLYmBsSQqjTeuxV1ddSqmJpD5J2TzTJuT5tDEyk39hArwe24BQGwiqRrq9n5QGZxktgYHH",
  "key18": "4iXXHbTAdfz1KUAjj274WMmD45c2j7TaW2gn9W1UcKMdsaynT4sKsLjdCRSSsqC2ZXoPJwoH1xtnUZTpo9wjKwG4",
  "key19": "3PAgw8dpPsXDdbF92iNsfk14jyDQhV4hFEDKeG23SDFnbK5nkj74MvHukQp8jaZ93ZF55UDCC5RJUDJBWM6LQDER",
  "key20": "2XJfDAgvUWCVPLDWcvuZ6LjvFsCjVkdkdKAWzANrosaGdSNp8uF89bkfPN7FWjmZUWpnHsgHvxXxpvNiGs9nokxo",
  "key21": "2XxK8Q8Zgg7xdeoRHbPBVR7D1q7MctiwunrtmWEA22ytQw3bjehgvBuAUAAmn79Y1v6VN18fbjKe43aeBaDKDhj3",
  "key22": "63nKoMi7DKrCxKQoPdmUeiiYbhrequosAraCwCpdKoZLg48ocZC4vMfZugo7RSNb2GSmTV9DMjap2ctfykeE7SBU",
  "key23": "4mX3TMrZN9TPcY9rKm3ip97CkkVQJ99expZEM7qBzJhcCyRrd7uRzArhAQBr5k8fccJvevUDBscL2gFyQCQKfYr4",
  "key24": "2KivNeiKXVrPGWVszqnGaFUjzbXPHqJ8CAnAqg38GvAXNPBiXjyAQCB3x6yux8p5ykU2Wqb8pcUQDa2Q9ZXktE1f",
  "key25": "VJgAJfrjXNnN2UVNt3KBeR4UhjFaB3cNarYuPAQP7mfwnktBn8e97Py2rtyAkunwxpnkMjDRi7rA51y5CXcPuE8",
  "key26": "3UCfQijGmyz1P3nSbQviNiib9xXib9Fk2BbkoSWs8VPD18cT6Ju9vrgrwW7D3FPA67uTz8wmod4PDV6UWnXcEPN3",
  "key27": "37RmXJ3oZLUe88etMNPtvz9kzvhMWhCa1AcRApVhyP7VWpVv9qK1LBwENsGXoLSbuhWce8ixFcpnZppcDAa6t3Ge",
  "key28": "3dRbUSirrVkX4eykqsFoFTkYUD5ei2ffPQ29qHW4WbqueESUDToa9qNLsLW2DQtrr42ng8CkHD6dxwADw4pDBJnj",
  "key29": "2gXip47fxfmb73xzjcyuqVmo15AdufMc6kA16mQrv3P3bjGPnC2fyZM6Fi7CLeLg1tFQf3Bzp55aD7c1nrLRrzvS",
  "key30": "4muv91QZAgBk2oHnp2uqm2mVS11foRtpBW98qovkE13Mm6SX9FxJWtjcHSpNvKufTS2PpLFSYaUqH7gL1YE4NPRW",
  "key31": "3eg2nnxiAn5zpJufxK9y3rvjcsrUbDFZ2bBdbiPAMpancRJdaz7Hyw4y2UC3jU2bLuijJqffHntUj9uQKo9EfatB",
  "key32": "5kdg4VTqTudpqjJrzXiKynvb1bMnf1LKNcHS65ZwWdgdorNfEhccPhBtJjUDziLV4HXAX7vf9cLW1M6qCW2G8ATo",
  "key33": "4somvHW6WPVxA2bnNMAYzpjroYqGRguWiL7ND3wK1DpKdGf9sdKYtRZS3BKBbt32NigtGC2D74o9YgJrJ4yu5zwn",
  "key34": "5rP7JwaYzihiC63vALbLthMucPP4zqFtRs8JEu25zAKhHNWgH993f9Zd1TubgzwexsMHjwS2psnzNC6F8Ge1xZYj",
  "key35": "26ZJa62woQapYWWiXuVt49yLg3enUWcJWfvzP6ga6uyJfhWokAikNN17f6SDLtXG7RMWpEdQqQQmdpnrbL2gZq8x",
  "key36": "5i3RKsxKM9HZAs3aoVScuQeBN8zGwer7Kkkncp39gaMAB91pwQhFuRfKGWCP9GAZUCNMpDjTRNxARxguFCBgwSkk",
  "key37": "npuKhH5UXcfA3qEnePGJZEkJoYpnXFdB66e5Y7MBTREHUGadqYMEW1JnTFygEFKkbMbRfjWog7kbQZR3MUVgxJp",
  "key38": "56sPksvSzij46QHNmraEH8XZZkneMq9A8oRWzVrwZkPKwuw1dNrwiLZinqpKB9fSpC4z2x3uDuvHuWPMeUueJ4J6",
  "key39": "5eDjacK7hRiwyXTqWWVbDAiMk7rFJcU9V9tH3jHrTbkVE65iGWoV9L4RPLe1Tq1SKceHTvCN6oPFfswPVygrkr9s",
  "key40": "3eQMgur9BuQS5fyuVkw6QZNeHyq3DYG3P3arPCfaHNnrhzRwSs7LQZRwt2MaqD7wM2pDNq8QW3EtmtGzpLqPnHgJ",
  "key41": "PSZuLLPmAff8zZ7Z2EsaiUqpCFSvPG7wymF4EtrtLmtihKkqtPozp2EKET557HeahDxb4XPpje3k65VSK3G5Jv1",
  "key42": "21ykJ1qBAghjQtAbJahsVnuQNDLAgwHAVGxnSbgWsf8sgqoaXpy9K2ovtrCL7ghgxv1LWJpfseYhcLGPg82tszQX",
  "key43": "5CxwdvcNBtzHA484eiFDucYhL8RTFJLmm5fyWsUjZUUXnrivyMKwvLNKKekPNuxyrkjo3FCDVZBGj4VEASaKnbnf",
  "key44": "2H9dVRPfBHK8ouqf6p8bsVSU4wiCbJgCNzBbQMZqteANKxf6z3Zh5MMSdu8tj47bM4rTqERq5RZPaYHLBX5RNznT",
  "key45": "38352vHeXRdwMMQFDbUEMKXyQR4jSchwmp8bvYBD42kuxtotr5ruuDzekud8SvJMbWVDS2YiJrpQfTuakHfWz5ra",
  "key46": "LwQyXPCN27dn8iDFAAu8cyCijL73R2BTcZdPidk2Lk5vuEDP6WZDZ7zoCjuLURi9kZezA5GD46bXAyaB4zT6NFh",
  "key47": "5ZKfypwZ3XuYkFrALjVP8m53kbjQk9PDuRnuTo57YoR9pcBRgLpMXxb2W2JP1EeYZKXvRnGa5LmTF2w3s4SoMJVP"
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
